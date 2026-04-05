import type { DilemmaSystemState } from "./types";

export function createInitialDilemmaState(): DilemmaSystemState {
  return {
    history: [],
    memoryLog: [],
    pendingEffects: [],
    lastDilemmaAt: Date.now(),
    lastRareMonth: -1,
    activeDilemma: null,
  };
}
