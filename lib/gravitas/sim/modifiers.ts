import type { StarholdState } from "./types";

export interface StarholdModifiers {
  shellStrainReduction: number;
  recoveryEfficiency: number;
  powerCostMod: number;
  gridSynergy: boolean; // Reactor + Core > 80%
}

export function getStarholdModifiers(state: StarholdState): StarholdModifiers {
  const unlocked = state.progression.unlockedItems;
  const gridSynergy = state.modules.reactor.integrity >= 80 && state.modules.core.integrity >= 80;

  return {
    shellStrainReduction: unlocked.includes("shield_efficiency") ? 1 : 0,
    recoveryEfficiency: (state.threat.aftershock > 0 || state.crisis) ? 1.5 : 1.0,
    powerCostMod: 1 + Math.floor(state.entropy / 20),
    gridSynergy,
  };
}

