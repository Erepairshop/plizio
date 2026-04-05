import type { StarholdState } from "../types";
import type { FactionId } from "../faction/types";
import { getLootMultiplier } from "../battle/worldScaling";
import { loadSavedGalaxyInventory, saveGalaxyInventory } from "../../world/mission";
import type { GalaxyMaterialId } from "../../world/mission";
import { applyReputationChange } from "../faction/reputation";
import { pushJournal } from "../shared";

function hashString(input: string): number {
  let h = 2166136261;
  for (let i = 0; i < input.length; i += 1) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function makeSeededRng(seed: number): () => number {
  let t = seed >>> 0;
  return () => {
    t += 0x6d2b79f5;
    let x = t;
    x = Math.imul(x ^ (x >>> 15), x | 1);
    x ^= x + Math.imul(x ^ (x >>> 7), x | 61);
    return ((x ^ (x >>> 14)) >>> 0) / 4294967296;
  };
}

export function giveWeeklyRewards(
  state: StarholdState, 
  completedWaves: number, 
  worldLevel: number, 
  defenderFactionId: FactionId
): { nextState: StarholdState; breakdown: import("./types").WeeklyRewardBreakdown } {
  const breakdown: import("./types").WeeklyRewardBreakdown = {
    wavesCompleted: completedWaves,
    baseReward: 0,
    multiplier: 0,
    materials: {},
    reputationBonus: 0,
    reputationPenalty: completedWaves === 3 ? 0 : -10, // Assuming failure on <3 waves
  };

  if (completedWaves === 0) {
    return { nextState: state, breakdown };
  }
  
  const mult = completedWaves === 3 ? 1.0 : completedWaves * 0.25;
  const baseReward = 500 * getLootMultiplier(worldLevel);

  breakdown.baseReward = Math.round(500 * getLootMultiplier(worldLevel));
  breakdown.multiplier = mult;

  const inventory = loadSavedGalaxyInventory();
  
  const rewardMaterials: Partial<Record<GalaxyMaterialId, number>> = {
    lumen_dust: Math.round(baseReward * mult),
    verdant_crystals: Math.round((baseReward * 0.8) * mult),
    aether_ore: Math.round((baseReward * 0.6) * mult),
  };

  if (completedWaves >= 2) {
    rewardMaterials.ember_shards = Math.round((baseReward * 0.4) * mult);
    rewardMaterials.sable_alloy = Math.round((baseReward * 0.3) * mult);
  }

  if (completedWaves === 3) {
    rewardMaterials.rift_stone = Math.round((baseReward * 0.15) * mult);
    
    // Rare drop chance on full clear
    const rng = makeSeededRng(hashString([
      state.weeklyMission.lastMissionAt,
      completedWaves,
      worldLevel,
      defenderFactionId,
      state.tick,
    ].join("|")));
    if (rng() < 0.15) {
      const rareAmount = Math.floor(rng() * 20) + 10;
      rewardMaterials.rift_stone = (rewardMaterials.rift_stone || 0) + rareAmount;
      breakdown.rareDrop = { 
        name: { en: "Extra Rift Stone", hu: "Extra Rift Kő", de: "Zusätzlicher Rift-Stein", ro: "Piatră Rift Extra" },
        chance: 0.15
      };
    }
  }

  breakdown.materials = rewardMaterials;

  Object.entries(rewardMaterials).forEach(([matId, amount]) => {
    if (amount) {
      inventory[matId as GalaxyMaterialId] = (inventory[matId as GalaxyMaterialId] ?? 0) + amount;
    }
  });

  saveGalaxyInventory(inventory);

  const reputationBonus = completedWaves === 3 ? 15 : completedWaves * 3;
  breakdown.reputationBonus = reputationBonus;

  let nextReputation = applyReputationChange(
    state.factionReputation.reputation,
    defenderFactionId,
    reputationBonus,
    "event",
    state
  );

  return {
    nextState: {
      ...state,
      factionReputation: {
        ...state.factionReputation,
        reputation: nextReputation,
      },
      journal: pushJournal(state, {
        en: `The ${defenderFactionId} facility has been secured. Rewards distributed.`,
        hu: `A ${defenderFactionId} létesítményt biztosítottuk. Jutalmak kiosztva.`,
        de: `Die ${defenderFactionId}-Einrichtung wurde gesichert. Belohnungen verteilt.`,
        ro: `Facilitatea ${defenderFactionId} a fost securizată. Recompense distribuite.`,
      })
    },
    breakdown
  };
}
