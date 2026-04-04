import type { FactionReputationState } from "./types";

/** Initialize all faction reputations to 0 (neutral) */
export function createInitialFactionReputation(): FactionReputationState {
  return {
    reputation: {
      korgath: 0,
      velari: 0,
      drex: 0,
      synthoid: 0,
      noma: 0,
    },
    lastDriftAt: Date.now(),
  };
}
