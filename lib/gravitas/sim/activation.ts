import type { StarholdState, LocalizedString } from "./types";
import { GRAVITAS_TEXT } from "./content";
import { clamp, pushJournal } from "./shared";
import { getStarholdModifiers } from "./modifiers";

export interface ActivationStageInfo {
  stage: 0 | 1 | 2 | 3 | 4;
  label: LocalizedString;
  progress: number;
}

export function getActivationStageInfo(activation: number, avatarAwake: boolean): ActivationStageInfo {
  const A = GRAVITAS_TEXT.activation;
  if (avatarAwake || activation >= 100) {
    return { stage: 4, label: A.stage4, progress: 100 };
  }
  if (activation >= 70) {
    return { stage: 3, label: A.stage3, progress: activation };
  }
  if (activation >= 35) {
    return { stage: 2, label: A.stage2, progress: activation };
  }
  if (activation >= 10) {
    return { stage: 1, label: A.stage1, progress: activation };
  }
  return { stage: 0, label: A.stage0, progress: activation };
}

export function unlockActivationTransfer(state: StarholdState): StarholdState {
  const A = GRAVITAS_TEXT.activation;
  return {
    ...state,
    phase: "activation",
    modules: {
      ...state.modules,
      core: {
        ...state.modules.core,
        online: true,
        load: clamp(state.modules.core.load + 16),
      },
    },
    alert: A.conduitUnlockedAlert,
    journal: pushJournal(state, A.conduitUnlockedJournal),
  };
}

export function channelActivationPulse(state: StarholdState, amount: number): StarholdState {
  const A = GRAVITAS_TEXT.activation;
  if (state.phase !== "activation") return state;
  if (state.resources.power <= 0) {
    return {
      ...state,
      resonance: 0,
      alert: A.powerExhausted,
    };
  }

  // Resonance builds up while holding (amount is how much we add this tick/frame)
  const nextResonance = clamp(state.resonance + amount * 2.5);

  // Power drain scales with resonance
  const pwrDrain = Math.max(1, Math.floor(nextResonance / 20));
  const actGain = (amount * (1 + nextResonance / 100)) * (state.resources.stability > 60 ? 1.2 : 1.0);

  const nextActivation = clamp(state.resources.activation + actGain, 0, 100);
  const awakened = nextActivation >= 100;

  // High resonance hazards
  let nextMarks = { ...state.marks };
  let alert = awakened ? A.awakenedAlert : A.resonanceRisingAlert;
  const crossedHighBand =
    nextResonance > 85 && Math.floor(nextResonance / 5) > Math.floor(state.resonance / 5);

  if (crossedHighBand) {
    nextMarks.shellStrain = clamp(nextMarks.shellStrain + 1);
    alert = A.criticalResonanceAlert;
  }

  const intensityLine: LocalizedString = {
    en: `${A.transferIntensityJournal.en}: ${Math.floor(nextResonance)}%`,
    hu: `${A.transferIntensityJournal.hu}: ${Math.floor(nextResonance)}%`,
    de: `${A.transferIntensityJournal.de}: ${Math.floor(nextResonance)}%`,
    ro: `${A.transferIntensityJournal.ro}: ${Math.floor(nextResonance)}%`,
  };

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
    progression: {
      ...state.progression,
      stars: state.progression.stars + (awakened ? 5 : 0),
    },
    alert,
    journal: awakened
      ? pushJournal(state, A.awakenedJournal)
      : state.resources.activation % 10 < amount
        ? pushJournal(state, intensityLine)
        : state.journal,
  };
}

export function coolDownResonance(state: StarholdState): StarholdState {
  if (state.resonance <= 0) return state;
  const mods = getStarholdModifiers(state);
  const cooldownRate = mods.gridSynergy ? 16 : 12;
  return {
    ...state,
    resonance: clamp(state.resonance - cooldownRate),
  };
}

export function canStartActivationTransfer(state: StarholdState) {
  return state.phase === "boot" && state.resources.power >= 6 && state.resources.stability >= 35 && state.modules.logistics.integrity >= 45;
}
