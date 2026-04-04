import type { GalaxyCycleState } from "./types";
import { getPhaseDurationMs } from "./cycles";

export function createInitialGalaxyCycle(): GalaxyCycleState {
  const now = Date.now();
  const duration = getPhaseDurationMs("calm");
  return {
    currentPhase: "calm",
    phaseStartedAt: now,
    phaseEndsAt: now + duration,
    cycleNumber: 0,
  };
}
