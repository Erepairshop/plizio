import type { DilemmaSystemState } from "./types";

export function createInitialDilemmaState(): DilemmaSystemState {
  return {
    history: [],
    pendingEffects: [],
    lastDilemmaAt: Date.now(),
    lastRareMonth: -1,
    activeDilemma: null,
  };
}
