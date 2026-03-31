import type { StarholdState } from "./types";
import { GRAVITAS_TEXT } from "./content";
import { clamp, pushJournal } from "./shared";

export interface ActivationStageInfo {
  stage: 0 | 1 | 2 | 3 | 4;
  label: string;
  progress: number;
}

export function getActivationStageInfo(activation: number, avatarAwake: boolean): ActivationStageInfo {
  if (avatarAwake || activation >= 100) {
    return { stage: 4, label: "Awakened", progress: 100 };
  }
  if (activation >= 70) {
    return { stage: 3, label: "Shell resonance", progress: activation };
  }
  if (activation >= 35) {
    return { stage: 2, label: "Pulse anchored", progress: activation };
  }
  if (activation >= 10) {
    return { stage: 1, label: "Conduit primed", progress: activation };
  }
  return { stage: 0, label: "Dormant", progress: activation };
}

export function unlockActivationTransfer(state: StarholdState): StarholdState {
  const A = GRAVITAS_TEXT.activation;
  return {
    ...state,
    phase: "activation",
    resources: {
      ...state.resources,
      power: clamp(state.resources.power - 6),
      activation: clamp(state.resources.activation + 10),
    },
    modules: {
      ...state.modules,
      core: {
        ...state.modules.core,
        online: true,
        load: clamp(state.modules.core.load + 16),
      },
    },
    alert: A.conduitUnlockedAlert.en,
    journal: pushJournal(state, A.conduitUnlockedJournal.en),
  };
}

export function channelActivationPulse(state: StarholdState, amount: number): StarholdState {
  const A = GRAVITAS_TEXT.activation;
  if (state.phase !== "activation") return state;
  if (state.resources.power <= 0) {
    return {
      ...state,
      resonance: 0,
      alert: A.powerExhausted.en,
    };
  }

  // Resonance builds up while holding (amount is how much we add this tick/frame)
  const nextResonance = clamp(state.resonance + amount * 2.5);

  // Power drain scales with resonance
  const pwrDrain = Math.max(1, Math.floor(nextResonance / 20));
  const actGain = (amount * (1 + nextResonance / 100)) * (state.resources.stability > 60 ? 1.2 : 1.0);

  const nextActivation = clamp(state.resources.activation + actGain, 0, 100);
  const awakened = nextActivation >= 100;

  // High resonance hazards. Only apply when we cross a new high-resonance band,
  // so holding the button does not stack shell damage multiple times per tick.
  let nextMarks = { ...state.marks };
  let alert = awakened ? A.awakenedAlert.en : A.resonanceRisingAlert.en;
  const crossedHighBand =
    nextResonance > 85 && Math.floor(nextResonance / 5) > Math.floor(state.resonance / 5);

  if (crossedHighBand) {
    nextMarks.shellStrain = clamp(nextMarks.shellStrain + 1);
    alert = A.criticalResonanceAlert.en;
  }

  return {
    ...state,
    phase: awakened ? "awakened" : "activation",
    avatarAwake: awakened,
    resonance: nextResonance,
    resources: {
      ...state.resources,
      activation: nextActivation,
      power: clamp(state.resources.power - pwrDrain),
      stability: clamp(state.resources.stability - (nextResonance > 70 ? 1 : 0)),
    },
    marks: nextMarks,
    modules: {
      ...state.modules,
      core: {
        ...state.modules.core,
        online: true,
        load: clamp(state.modules.core.load + Math.ceil(amount / 2)),
      },
    },
    alert,
    journal: awakened
      ? pushJournal(state, A.awakenedJournal.en)
      : state.resources.activation % 10 < amount
        ? pushJournal(state, `${A.transferIntensityJournal.en}: ${Math.floor(nextResonance)}%`)
        : state.journal,
  };
}

export function coolDownResonance(state: StarholdState): StarholdState {
  if (state.resonance <= 0) return state;
  return {
    ...state,
    resonance: clamp(state.resonance - 12),
  };
}

export function canStartActivationTransfer(state: StarholdState) {
  return state.phase === "boot" && state.resources.power >= 6 && state.resources.stability >= 35 && state.modules.logistics.integrity >= 45;
}
