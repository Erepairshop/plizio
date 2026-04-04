import type { UpgradableModuleId } from "../../economy";

export type SynergyId =
  | "energy_field"
  | "efficient_supply"
  | "battlefield_comms"
  | "deep_scan"
  | "automated_supply"
  | "field_medic"
  | "overcharge"
  | "resonance_shield"
  | "elite_training"
  | "logistics_dominance"
  | "superstation"
  | "warlord";

export type SynergyTier = 1 | 2 | 3 | 4;

export interface SynergyDef {
  id: SynergyId;
  tier: SynergyTier;
  name: { en: string; hu: string; de: string; ro: string };
  description: { en: string; hu: string; de: string; ro: string };
  /** Required module levels — ALL must be met */
  requirements: Partial<Record<UpgradableModuleId, number>>;
  /** What this synergy does — used by tick/battle engine */
  effects: SynergyEffects;
}

export interface SynergyEffects {
  shieldRegenBonus?: number;       // % bonus (0.10 = +10%)
  miningSpeedBonus?: number;       // % bonus
  unitSpeedBonus?: number;         // % bonus in battle
  unitAttackBonus?: number;        // % bonus in battle
  unitAllStatsBonus?: number;      // % bonus all stats in battle
  droneSpeedBonus?: number;        // % bonus
  hullMaxBonus?: number;           // flat add
  shieldMaxBonus?: number;         // flat add
  resourceRegenBonus?: number;     // % bonus all resources
  repairTimeReduction?: number;    // % reduction (0.25 = -25%)
  repairCostReduction?: number;    // % reduction
  upgradeCostReduction?: number;   // % reduction
  casualtyReduction?: number;      // % reduction in wounded
  instantHealRatio?: number;       // % of wounded healed on victory
  unlockDeepScan?: boolean;        // flag for galaxy content
}

/** Currently active synergies for this state */
export interface ActiveSynergies {
  active: SynergyId[];
  /** Merged effects from all active synergies */
  combined: SynergyEffects;
  /** Last evaluation tick */
  lastEvaluatedTick: number;
}
