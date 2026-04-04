import type { ActiveSynergies } from "./types";

export function createInitialSynergies(): ActiveSynergies {
  return {
    active: [],
    combined: {},
    lastEvaluatedTick: 0,
  };
}
