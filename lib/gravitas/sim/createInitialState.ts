import type { StarholdState } from "./types";
import { createInitialModules } from "./modules";

export function createInitialStarholdState(): StarholdState {
  return {
    tick: 0,
    phase: "boot",
    resources: {
      power: 26,
      materials: 14,
      stability: 42,
      activation: 0,
    },
    marks: {
      reactorScar: 0,
      shellStrain: 0,
      supplyStress: 0,
    },
    modules: createInitialModules(),
    alert: "Station shell offline. Core signature faint but present.",
    journal: [
      "Emergency reserve power detected.",
      "Core chamber sealed.",
      "Activation conduit requires manual transfer.",
    ],
    avatarAwake: false,
    lastEventTick: {},
    pendingEvent: null,
    driftLevel: 0,
    driftTick: 0,
  };
}
