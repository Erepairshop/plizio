import type { GalaxyCyclePhase, GalaxyCycleState } from "./types";
import { GALAXY_CYCLE_CONFIG } from "../../economy";

export const CYCLE_PHASE_ORDER: GalaxyCyclePhase[] = ["calm", "storm", "war", "trade"];

export const CYCLE_PHASE_NAMES: Record<GalaxyCyclePhase, { en: string; hu: string; de: string; ro: string }> = {
  calm: { en: "Calm", hu: "Nyugalom", de: "Ruhe", ro: "Liniște" },
  storm: { en: "Storm", hu: "Vihar", de: "Sturm", ro: "Furtună" },
  war: { en: "War", hu: "Háború", de: "Krieg", ro: "Război" },
  trade: { en: "Trade", hu: "Kereskedelem", de: "Handel", ro: "Comerț" },
};

export function getPhaseDurationMs(phase: GalaxyCyclePhase): number {
  return GALAXY_CYCLE_CONFIG.phaseDurations[phase];
}

export interface CycleEffects {
  miningYieldBonus: number;       // 0.2 = +20%
  miningFailChance: number;       // 0.3 = 30% (storm)
  rareYieldBonus: number;         // 0.5 = +50% rift_stone (storm)
  raidFrequencyMod: number;       // 0.5 = -50%, 2.0 = +100%
  raidStrengthMod: number;        // 1.2 = +20%
  battleLootMod: number;          // 1.3 = +30%
  reputationMod: number;          // 2.0 = 2× (war)
  tradeDiscount: number;          // 0.2 = -20%
  repairSpeedBonus: number;       // 0.25 = +25%
  hullDrainPerTick: number;       // 0.3 (storm, ha shield < 30)
  noRaids: boolean;               // true (trade)
}

export function getCycleEffects(phase: GalaxyCyclePhase): CycleEffects {
  const base: CycleEffects = {
    miningYieldBonus: 0,
    miningFailChance: 0,
    rareYieldBonus: 0,
    raidFrequencyMod: 1.0,
    raidStrengthMod: 1.0,
    battleLootMod: 1.0,
    reputationMod: 1.0,
    tradeDiscount: 0,
    repairSpeedBonus: 0,
    hullDrainPerTick: 0,
    noRaids: false,
  };

  switch (phase) {
    case "calm":
      return { ...base, miningYieldBonus: 0.2, raidFrequencyMod: 0.5 };
    case "storm":
      return { ...base, miningFailChance: 0.3, rareYieldBonus: 0.5, hullDrainPerTick: 0.3 };
    case "war":
      return { ...base, raidFrequencyMod: 2.0, raidStrengthMod: 1.2, battleLootMod: 1.3, reputationMod: 2.0 };
    case "trade":
      return { ...base, tradeDiscount: 0.2, repairSpeedBonus: 0.25, noRaids: true, raidFrequencyMod: 0 };
    default:
      return base;
  }
}

export function getNextPhase(current: GalaxyCyclePhase): GalaxyCyclePhase {
  const idx = CYCLE_PHASE_ORDER.indexOf(current);
  return CYCLE_PHASE_ORDER[(idx + 1) % CYCLE_PHASE_ORDER.length];
}

export function advanceCyclePhase(state: GalaxyCycleState): GalaxyCycleState {
  const nextPhase = getNextPhase(state.currentPhase);
  const now = Date.now();
  const duration = getPhaseDurationMs(nextPhase);
  
  return {
    currentPhase: nextPhase,
    phaseStartedAt: now,
    phaseEndsAt: now + duration,
    cycleNumber: nextPhase === "calm" ? state.cycleNumber + 1 : state.cycleNumber,
  };
}
