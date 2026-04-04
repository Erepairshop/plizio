import type { ActiveSynergies, SynergyEffects, SynergyId } from "./types";
import { SYNERGY_DEFS, SYNERGY_MAP } from "./registry";

/**
 * Ellenőrzi az összes szinergiát a jelenlegi moduleLevels alapján.
 * Csak akkor kell hívni, ha a moduleLevels változott.
 */
export function evaluateSynergies(moduleLevels: Record<string, number>, lastTick: number): ActiveSynergies {
  const active: SynergyId[] = [];

  for (const def of SYNERGY_DEFS) {
    let met = true;
    for (const [modId, minLevel] of Object.entries(def.requirements)) {
      if ((moduleLevels[modId] || 0) < (minLevel || 0)) {
        met = false;
        break;
      }
    }
    if (met) {
      active.push(def.id);
    }
  }

  return {
    active,
    combined: combineSynergyEffects(active),
    lastEvaluatedTick: lastTick,
  };
}

/**
 * Merge az összes aktív szinergia effektjeit egyetlen objektumba.
 */
export function combineSynergyEffects(synergyIds: SynergyId[]): SynergyEffects {
  const combined: SynergyEffects = {};

  for (const id of synergyIds) {
    const def = SYNERGY_MAP[id];
    if (!def) continue;

    const effects = def.effects;

    // Additív bónuszok (százalékok)
    if (effects.shieldRegenBonus) combined.shieldRegenBonus = (combined.shieldRegenBonus || 0) + effects.shieldRegenBonus;
    if (effects.miningSpeedBonus) combined.miningSpeedBonus = (combined.miningSpeedBonus || 0) + effects.miningSpeedBonus;
    if (effects.unitSpeedBonus) combined.unitSpeedBonus = (combined.unitSpeedBonus || 0) + effects.unitSpeedBonus;
    if (effects.unitAttackBonus) combined.unitAttackBonus = (combined.unitAttackBonus || 0) + effects.unitAttackBonus;
    if (effects.unitAllStatsBonus) combined.unitAllStatsBonus = (combined.unitAllStatsBonus || 0) + effects.unitAllStatsBonus;
    if (effects.droneSpeedBonus) combined.droneSpeedBonus = (combined.droneSpeedBonus || 0) + effects.droneSpeedBonus;
    if (effects.resourceRegenBonus) combined.resourceRegenBonus = (combined.resourceRegenBonus || 0) + effects.resourceRegenBonus;
    if (effects.repairTimeReduction) combined.repairTimeReduction = (combined.repairTimeReduction || 0) + effects.repairTimeReduction;
    if (effects.repairCostReduction) combined.repairCostReduction = (combined.repairCostReduction || 0) + effects.repairCostReduction;
    if (effects.upgradeCostReduction) combined.upgradeCostReduction = (combined.upgradeCostReduction || 0) + effects.upgradeCostReduction;
    if (effects.casualtyReduction) combined.casualtyReduction = (combined.casualtyReduction || 0) + effects.casualtyReduction;
    if (effects.instantHealRatio) combined.instantHealRatio = (combined.instantHealRatio || 0) + effects.instantHealRatio;

    // Fix bónuszok (flat)
    if (effects.hullMaxBonus) combined.hullMaxBonus = (combined.hullMaxBonus || 0) + effects.hullMaxBonus;
    if (effects.shieldMaxBonus) combined.shieldMaxBonus = (combined.shieldMaxBonus || 0) + effects.shieldMaxBonus;

    // Boolean flagek (OR)
    if (effects.unlockDeepScan) combined.unlockDeepScan = true;
  }

  return combined;
}
