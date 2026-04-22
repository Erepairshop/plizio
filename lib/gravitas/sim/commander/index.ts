import type { CommanderState } from "./types";
import { getProfileEffects } from "./evaluate";

export function createInitialCommanderState(): CommanderState {
  return {
    currentProfile: "strategist",
    metrics: {
      battlesInitiated: 0,
      battlesDefended: 0,
      miningMissions: 0,
      unitsRepaired: 0,
      moduleLevelVariance: 0,
      lastEvaluatedAtTick: 0,
    },
    effects: getProfileEffects("strategist"),
  };
}
