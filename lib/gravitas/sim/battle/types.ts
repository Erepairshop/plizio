import type { LocalizedString, StarholdState } from "@/lib/gravitas/sim/types";
import type { GalaxyMaterialId } from "@/lib/gravitas/world/mission";

export type EnemyTraitId = string;

export interface EnemyTrait {
  id: EnemyTraitId;
  name: LocalizedString;
  description: LocalizedString;
  hiddenDescription: LocalizedString;
  phase: "start" | "mid" | "end" | "always";
  modifiers: {
    damageMultiplier?: number;
    defenseMultiplier?: number;
    speedMultiplier?: number;
    shieldRegenRate?: number;
    specialEffect?: string;
  };
  counterAbility?: string;
  counterEffectiveness?: number;
}

export interface EnemyBuilding {
  id: "derelict-outpost" | "raider-stronghold" | "fortified-relay";
  stats: {
    armor: number;
    shield: number;
    firepower: number;
    speed: number;
    garrison: number;
    antiAir: number;
  };
  traits: EnemyTrait[];
  difficulty: number;
  resetCooldownMs: number;
  lootTableId: string;
}

export interface BattleArmy {
  units: Record<string, number>;
  tacticId: BattleTacticId;
}

export type BattleTacticId = "aggressive" | "defensive" | "flanking" | "blitz" | "siege";

export interface BattleTactic {
  id: BattleTacticId;
  name: LocalizedString;
  description: LocalizedString;
  attackMod: number;
  defenseMod: number;
  speedMod: number;
  strongAgainst?: EnemyTraitId[];
  weakAgainst?: EnemyTraitId[];
}

export interface BattleLoot {
  materials: Partial<Record<GalaxyMaterialId, number>>;
  rareDrop?: {
    id: string;
    name: LocalizedString;
    chance: number;
  };
}

export interface BattleResult {
  victory: boolean;
  durationMs: number;
  phases: BattlePhase[];
  stats: {
    damageDealt: number;
    damageReceived: number;
    unitsLost: Record<string, number>;
    enemyGarrisonDestroyed: number;
    traitTriggered: EnemyTraitId[];
    counterUsed: string[];
  };
  loot?: BattleLoot;
  intelGained: number;
}

export interface BattlePhase {
  timestamp: number;
  event: "clash" | "trait_activate" | "counter" | "shield_break" | "critical_hit" | "retreat" | "victory" | "defeat";
  description: LocalizedString;
  damage?: number;
  source: "player" | "enemy";
}

export interface ScoutReport {
  buildingId: string;
  intelLevel: number;
  revealedStats: Partial<EnemyBuilding["stats"]>;
  revealedTraits: EnemyTraitId[];
  lastScoutedAt: number;
}

export interface BattleHistoryEntry {
  buildingId: EnemyBuilding["id"];
  at: number;
  dominantUnitType: UnitCombatRole;
  victory: boolean;
  durationMs: number;
  damageDealt: number;
  damageReceived: number;
}

export interface ResolveBattleInput {
  army: BattleArmy;
  enemy: EnemyBuilding;
  playerState: StarholdState;
  avatarCombat: import("./avatarCombat").AvatarCombatProfile;
  scoutReport: ScoutReport | null;
  descriptor: import("./buildingDescriptors").BuildingDescriptor;
  faction: import("./factions").Faction;
  battleHistory: BattleHistoryEntry[];
  seedNow?: number;
}

export interface BattleEvaluation {
  attack: number;
  defense: number;
  speed: number;
  shield: number;
  garrison: number;
}

export type UnitCombatRole = "tank" | "assault" | "recon" | "support";

export interface BattleUnitProfile {
  id: string;
  role: UnitCombatRole;
  attack: number;
  defense: number;
  speed: number;
  hp: number;
}

export const BATTLE_TACTICS: Record<BattleTacticId, BattleTactic> = {
  aggressive: {
    id: "aggressive",
    name: { hu: "Tamado", en: "Aggressive", de: "Aggressiv", ro: "Agresiv" },
    description: {
      hu: "Nagy tamadoero, gyengebb vedelmi tartas.",
      en: "High offensive pressure with lower defensive posture.",
      de: "Hoher Angriffsdrang mit schwacherer Verteidigung.",
      ro: "Presiune ofensiva mare cu defensiva mai slaba.",
    },
    attackMod: 1.3,
    defenseMod: 0.7,
    speedMod: 1.1,
    strongAgainst: ["siege-build"],
    weakAgainst: ["ambush_tactics"],
  },
  defensive: {
    id: "defensive",
    name: { hu: "Vedekezo", en: "Defensive", de: "Defensiv", ro: "Defensiv" },
    description: {
      hu: "Stabil vedelmi fal, lassabb nyomas.",
      en: "Stable defense wall with slower pressure.",
      de: "Stabile Verteidigung mit langsamerem Druck.",
      ro: "Perete defensiv stabil, presiune mai lenta.",
    },
    attackMod: 0.8,
    defenseMod: 1.4,
    speedMod: 0.9,
    strongAgainst: ["ambush_tactics"],
    weakAgainst: ["adaptive_shield"],
  },
  flanking: {
    id: "flanking",
    name: { hu: "Oldaltamadas", en: "Flanking", de: "Flankieren", ro: "Flancare" },
    description: {
      hu: "Mozgekony oldaltamadas a garnizon gyengitesere.",
      en: "Mobile side attack to weaken garrisons.",
      de: "Beweglicher Flankenangriff gegen Garnisonen.",
      ro: "Atac mobil pe flanc pentru slabirea garnizoanei.",
    },
    attackMod: 1.1,
    defenseMod: 0.9,
    speedMod: 1.3,
    strongAgainst: ["garrison_heavy"],
    weakAgainst: ["disciplined_defense"],
  },
  blitz: {
    id: "blitz",
    name: { hu: "Villamtamadas", en: "Blitz", de: "Blitz", ro: "Blitz" },
    description: {
      hu: "Rovid, eros roham minimalis vedelemmel.",
      en: "Short burst assault with minimal defense.",
      de: "Kurzer Sturmangriff mit minimaler Verteidigung.",
      ro: "Asalt scurt si puternic cu defensiva minima.",
    },
    attackMod: 1.5,
    defenseMod: 0.5,
    speedMod: 1.5,
    strongAgainst: ["slow_enemy"],
    weakAgainst: ["high_armor"],
  },
  siege: {
    id: "siege",
    name: { hu: "Ostrom", en: "Siege", de: "Belagerung", ro: "Asediu" },
    description: {
      hu: "Tartos nyomas eros vedelemmel, lassu tempo.",
      en: "Sustained pressure with strong defense, slower pace.",
      de: "Anhaltender Druck mit starker Verteidigung, langsameres Tempo.",
      ro: "Presiune sustinuta cu defensiva puternica, ritm mai lent.",
    },
    attackMod: 1,
    defenseMod: 1.2,
    speedMod: 0.6,
    strongAgainst: ["high_shield"],
    weakAgainst: ["fast_enemy"],
  },
};

export const BATTLE_UNIT_PROFILES: Record<string, BattleUnitProfile> = {
  sentinel: { id: "sentinel", role: "tank", attack: 8, defense: 28, speed: 6, hp: 45 },
  vanguard: { id: "vanguard", role: "assault", attack: 24, defense: 12, speed: 16, hp: 28 },
  wraith: { id: "wraith", role: "recon", attack: 14, defense: 10, speed: 26, hp: 20 },
  nexus: { id: "nexus", role: "support", attack: 6, defense: 14, speed: 12, hp: 22 },
};
