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
    status: {
      korgath: "neutral",
      velari: "neutral",
      drex: "neutral",
      synthoid: "neutral",
      noma: "neutral",
    },
    resources: {
      korgath: 1000,
      velari: 1000,
      drex: 1000,
      synthoid: 1000,
      noma: 1000,
    },
    lastDriftAt: Date.now(),
  };
}
