import type { DilemmaSystemState } from "./types";

export function createInitialDilemmaState(): DilemmaSystemState {
  return {
    history: [],
    memoryLog: [],
    pendingEffects: [],
    lastDilemmaAtTick: 0,
    lastRareMonth: -1,
    activeDilemma: null,
  };
}
