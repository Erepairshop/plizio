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
  };
}
