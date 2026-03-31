import type { StarholdState } from "./types";
import { createInitialModules } from "./modules";
import { GRAVITAS_TEXT } from "./content";

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
      voidEcho: 0,
    },
    anomalies: [],
    entropy: 0,
    modules: createInitialModules(),
    alert: GRAVITAS_TEXT.journal.initialAlert,
    journal: [...GRAVITAS_TEXT.journal.initialJournal],
    avatarAwake: false,
    resonance: 0,
    lastEventTick: {},
    pendingEvent: null,
  };
}
