import type { GalaxyCycleState } from "./types";
import { getPhaseDurationMs } from "./cycles";

export function createInitialGalaxyCycle(): GalaxyCycleState {
  const durationTicks = Math.floor(getPhaseDurationMs("calm") / 1000);
  return {
    currentPhase: "calm",
    phaseStartedAtTick: 0,
    phaseEndsAtTick: durationTicks,
    cycleNumber: 0,
  };
}
