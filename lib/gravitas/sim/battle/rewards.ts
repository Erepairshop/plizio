import type { LocalizedString } from "@/lib/gravitas/sim/types";
import type { GalaxyMaterialId } from "@/lib/gravitas/world/mission";
import type { BattleLoot, EnemyBuilding } from "./types";

type Range = [number, number];

interface RareDropDef {
  id: string;
  name: LocalizedString;
  baseChance: number;
}

interface LootTableDef {
  id: string;
  materials: Partial<Record<GalaxyMaterialId, Range>>;
  rareDrop?: RareDropDef;
}

export interface BattleRewardInput {
  enemy: EnemyBuilding;
  victory: boolean;
  tacticalVictory: boolean;
  durationMs: number;
  playerPowerScore: number;
  enemyPowerScore: number;
  scoutIntel: number;
  supplyFlow: number;
  raiderLootStack: number;
  exactUnitCount: number;
  seedRng: () => number;
}

export interface RewardMeta {
  multiplier: number;
  rareChanceFinal: number;
  notes: string[];
  powerRatioMod: number;
  supplyFlowMod: number;
  intelMod: number;
  tacticalPenalty: boolean;
  fastWinDouble: boolean;
}

export const BATTLE_LOOT_TABLES: Record<string, LootTableDef> = {
  loot_derelict_outpost: {
    id: "loot_derelict_outpost",
    materials: {
      lumen_dust: [200, 400],
      verdant_crystals: [150, 300],
    },
    rareDrop: {
      id: "blueprint_salvaged_capacitor",
      name: {
        hu: "Kimentett kapacitor tervrajz",
        en: "Salvaged Capacitor Blueprint",
        de: "Bauplan: Geborgener Kondensator",
        ro: "Blueprint: Condensator recuperat",
      },
      baseChance: 0.08,
    },
  },
  loot_raider_stronghold: {
    id: "loot_raider_stronghold",
    materials: {
      ember_shards: [300, 500],
      sable_alloy: [200, 350],
    },
    rareDrop: {
      id: "blueprint_raider_engine",
      name: {
        hu: "Portyazo hajtomu tervrajz",
        en: "Raider Engine Blueprint",
        de: "Bauplan: Raider-Antrieb",
        ro: "Blueprint: Motor Raider",
      },
      baseChance: 0.1,
    },
  },
  loot_fortified_relay: {
    id: "loot_fortified_relay",
    materials: {
      aether_ore: [400, 600],
      rift_stone: [150, 250],
    },
    rareDrop: {
      id: "blueprint_relay_core_fragment",
      name: {
        hu: "Relay magtoredek tervrajz",
        en: "Relay Core Fragment Blueprint",
        de: "Bauplan: Relay-Kernfragment",
        ro: "Blueprint: Fragment de nucleu relay",
      },
      baseChance: 0.12,
    },
  },
};

function clamp(v: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, v));
}

function scaleRange([min, max]: Range, mul: number): Range {
  return [Math.max(1, Math.round(min * mul)), Math.max(1, Math.round(max * mul))];
}

function rollRange([min, max]: Range, rand: () => number): number {
  if (max <= min) return min;
  return Math.round(min + (max - min) * rand());
}

function getPowerRatioMultiplier(playerPower: number, enemyPower: number): number {
  const ratio = playerPower / Math.max(1, enemyPower);
  if (ratio < 0.75) return 1.18;
  if (ratio < 1) return 1.1;
  if (ratio <= 1.2) return 1;
  if (ratio <= 1.5) return 0.92;
  return 0.84;
}

function getSupplyFlowMultiplier(supplyFlow: number): number {
  const normalized = clamp((supplyFlow - 50) / 100, -0.2, 0.35);
  return 1 + normalized;
}

export function createBattleLoot(input: BattleRewardInput): { loot?: BattleLoot; meta: RewardMeta } {
  if (!input.victory && !input.tacticalVictory) {
    return {
      loot: undefined,
      meta: {
        multiplier: 0,
        rareChanceFinal: 0,
        notes: ["defeat_no_loot"],
        powerRatioMod: 0,
        supplyFlowMod: 0,
        intelMod: 0,
        tacticalPenalty: false,
        fastWinDouble: false,
      },
    };
  }

  const table = BATTLE_LOOT_TABLES[input.enemy.lootTableId];
  if (!table) {
    return {
      loot: undefined,
      meta: {
        multiplier: 0,
        rareChanceFinal: 0,
        notes: ["missing_loot_table"],
        powerRatioMod: 0,
        supplyFlowMod: 0,
        intelMod: 0,
        tacticalPenalty: false,
        fastWinDouble: false,
      },
    };
  }

  const notes: string[] = [];
  const powerRatioMod = getPowerRatioMultiplier(input.playerPowerScore, input.enemyPowerScore);
  const supplyFlowMod = getSupplyFlowMultiplier(input.supplyFlow);
  const intelMod = input.scoutIntel > 90 ? 1.1 : input.scoutIntel < 30 ? 0.92 : 1;
  let multiplier = 1;
  multiplier *= powerRatioMod;
  multiplier *= supplyFlowMod;
  multiplier *= intelMod;
  let tacticalPenalty = false;
  let fastWinDouble = false;

  if (input.tacticalVictory) {
    multiplier *= 0.5;
    tacticalPenalty = true;
    notes.push("tactical_half_loot");
  }

  if (input.enemy.id === "derelict-outpost" && input.durationMs < 4000) {
    multiplier *= 2;
    fastWinDouble = true;
    notes.push("derelict_fast_win_double");
  }

  if (input.enemy.id === "raider-stronghold" && input.raiderLootStack > 0) {
    const stack = clamp(input.raiderLootStack, 0, 5);
    multiplier *= 1 + stack * 0.15;
    notes.push(`raider_loot_stack_${stack}`);
  }

  if (input.enemy.id === "fortified-relay" && input.tacticalVictory) {
    multiplier *= 1.3;
    notes.push("relay_tactical_bonus");
  }

  const materials: Partial<Record<GalaxyMaterialId, number>> = {};
  Object.entries(table.materials).forEach(([matId, range]) => {
    if (!range) return;
    const value = rollRange(scaleRange(range, multiplier), input.seedRng);
    materials[matId as GalaxyMaterialId] = value;
  });

  if (!table.rareDrop) {
    return {
      loot: { materials },
      meta: { multiplier, rareChanceFinal: 0, notes, powerRatioMod, supplyFlowMod, intelMod, tacticalPenalty, fastWinDouble },
    };
  }

  let rareChance = table.rareDrop.baseChance;
  if (input.enemy.id === "derelict-outpost" && input.exactUnitCount === 3) rareChance += 0.3;
  if (input.enemy.id === "raider-stronghold" && input.raiderLootStack >= 5) rareChance = 1;
  if (input.scoutIntel >= 90) rareChance += 0.05;
  rareChance = clamp(rareChance, 0, 1);

  const rareDrop = input.seedRng() <= rareChance
    ? {
      id: table.rareDrop.id,
      name: table.rareDrop.name,
      chance: rareChance,
    }
    : undefined;

  return {
    loot: { materials, rareDrop },
    meta: { multiplier, rareChanceFinal: rareChance, notes, powerRatioMod, supplyFlowMod, intelMod, tacticalPenalty, fastWinDouble },
  };
}
