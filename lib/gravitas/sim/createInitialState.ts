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
    threat: {
      type: "distortionWave",
      countdown: 15,
      totalDuration: 15,
      intensity: 2,
      fortified: false,
      dampened: false,
      intercepted: false,
      predicted: false,
      aftershock: 0,
    },
    progression: {
      stars: 0,
      completedMilestones: [],
      unclaimedMilestones: [],
      unlockedItems: [],
      lastStarGain: 0,
    },
    modules: createInitialModules(),
    alert: GRAVITAS_TEXT.journal.initialAlert,
    journal: GRAVITAS_TEXT.journal.initialJournal.map(text => ({ tick: 0, text })),
    avatarAwake: false,
    resonance: 0,
    lastEventTick: {},
    pendingEvent: null,
    crisis: false,
    highStability: false,
    lockdown: false,
    recoveryPriority: null,
    threatCycle: 0,
    lastAvatarPulse: -100,
  };
}
