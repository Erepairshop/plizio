import { FACTION_REPUTATION_CONFIG } from "../../economy";
import type { FactionId, ReputationTier, FactionRelations, FactionReputationState, ReputationChangeReason } from "./types";

const FACTION_RELATIONS: Record<FactionId, FactionRelations> = {
  korgath: { enemies: ["velari", "synthoid"], allies: ["noma"] },
  velari: { enemies: ["korgath", "drex"], allies: ["synthoid"] },
  drex: { enemies: ["velari", "noma"], allies: ["korgath"] },
  synthoid: { enemies: ["korgath", "noma"], allies: ["velari"] },
  noma: { enemies: ["drex", "synthoid"], allies: ["korgath"] },
};

/** Determine the reputation tier based on current value */
export function getReputationTier(value: number): ReputationTier {
  const { tiers } = FACTION_REPUTATION_CONFIG;
  if (value <= tiers.hostile.max) return "hostile";
  if (value <= tiers.tense.max) return "tense";
  if (value <= tiers.neutral.max) return "neutral";
  if (value <= tiers.friendly.max) return "friendly";
  return "allied";
}

/** Get fixed faction relations */
export function getFactionRelations(factionId: FactionId): FactionRelations {
  return FACTION_RELATIONS[factionId];
}

/** Raid frequency multiplier based on reputation tier */
export function getRaidFrequencyMultiplier(tier: ReputationTier): number {
  if (tier === "hostile") return FACTION_REPUTATION_CONFIG.effects.hostileRaidFrequency;
  if (tier === "friendly") return 0; // Friendly factions don't raid
  if (tier === "allied") return 0; // Allied factions don't raid
  return 1.0;
}

/** Raid strength multiplier based on reputation tier */
export function getRaidStrengthMultiplier(tier: ReputationTier): number {
  if (tier === "hostile") return FACTION_REPUTATION_CONFIG.effects.hostileRaidStrength;
  return 1.0;
}

/** Trade price modifier based on reputation tier */
export function getTradeModifier(tier: ReputationTier): number {
  const { effects } = FACTION_REPUTATION_CONFIG;
  if (tier === "tense") return 1 + effects.tenseTradeMarkup;
  if (tier === "friendly") return 1 - effects.friendlyTradeDiscount;
  if (tier === "allied") return 1 - effects.alliedTradeDiscount;
  return 1.0;
}

/** 
 * Apply reputation change, handling spillover effects to allies and enemies.
 * If you attack Korgath: -8 Korgath, +3 Velari, +3 Synthoid.
 */
export function applyReputationChange(
  current: Record<FactionId, number>,
  targetFaction: FactionId,
  delta: number,
  reason: ReputationChangeReason
): Record<FactionId, number> {
  const next = { ...current };
  
  // Primary change
  next[targetFaction] = Math.max(-100, Math.min(100, next[targetFaction] + delta));

  // Spillover effects for battle
  if (reason === "battle_victory" || reason === "battle_defeat") {
    const relations = getFactionRelations(targetFaction);
    const spilloverDelta = FACTION_REPUTATION_CONFIG.changes.enemyDefeated;
    
    // Faction's enemies like that you attacked them
    relations.enemies.forEach(enemyId => {
      next[enemyId] = Math.max(-100, Math.min(100, next[enemyId] + spilloverDelta));
    });

    // Faction's allies might dislike it (optional but usually allies share the pain)
    // For now we only implement the "enemies are happy" logic per user prompt.
  }

  return next;
}

/** Apply daily natural drift towards neutral (0) */
export function applyNaturalDrift(state: FactionReputationState): FactionReputationState {
  const drift = FACTION_REPUTATION_CONFIG.changes.naturalDriftPerDay;
  const nextReputation = { ...state.reputation };

  (Object.keys(nextReputation) as FactionId[]).forEach(id => {
    const val = nextReputation[id];
    if (val > 0) {
      nextReputation[id] = Math.max(0, val - drift);
    } else if (val < 0) {
      nextReputation[id] = Math.min(0, val + drift);
    }
  });

  return {
    reputation: nextReputation,
    lastDriftAt: Date.now(),
  };
}

/** Get all reputation tiers at once */
export function getAllReputationTiers(reputation: Record<FactionId, number>): Record<FactionId, ReputationTier> {
  const tiers = {} as Record<FactionId, ReputationTier>;
  (Object.keys(reputation) as FactionId[]).forEach(id => {
    tiers[id] = getReputationTier(reputation[id]);
  });
  return tiers;
}
