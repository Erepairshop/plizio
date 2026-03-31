import type { StarholdState } from "./types";
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
    alert: "Core conduit unlocked. Manual transfer now possible.",
    journal: pushJournal(state, "Core chamber is ready for activation transfer."),
  };
}

export function channelActivationPulse(state: StarholdState, amount: number): StarholdState {
  if (state.phase !== "activation") return state;
  if (state.resources.power <= 0) {
    const prevActivation = state.resources.activation;
    const regressedActivation = clamp(prevActivation - Math.ceil(prevActivation * 0.15));
    const collapseToboot = prevActivation >= 10 && regressedActivation < 10;
    return {
      ...state,
      phase: collapseToboot ? "boot" : "activation",
      resources: {
        ...state.resources,
        activation: regressedActivation,
        stability: clamp(state.resources.stability - 3),
      },
      marks: {
        ...state.marks,
        shellStrain: clamp(state.marks.shellStrain + 2),
      },
      alert: "Transfer collapsed. The shell recoiled and activation regressed.",
      journal: pushJournal(state, "Transfer collapsed. The shell recoiled and activation regressed."),
    };
  }

  const nextActivation = clamp(state.resources.activation + amount);
  const awakened = nextActivation >= 100;

  return {
    ...state,
    phase: awakened ? "awakened" : "activation",
    avatarAwake: awakened,
    resources: {
      ...state.resources,
      activation: nextActivation,
      power: clamp(state.resources.power - Math.max(1, Math.ceil(amount / 7))),
      stability: clamp(state.resources.stability - Math.max(0, Math.floor(amount / 14))),
    },
    modules: {
      ...state.modules,
      core: {
        ...state.modules.core,
        online: true,
        load: clamp(state.modules.core.load + Math.ceil(amount / 3)),
      },
    },
    alert: awakened
      ? "Core shell awakened. Presence synchronized."
      : "Transfer pulse flowing into the dormant shell...",
    journal: pushJournal(
      state,
      awakened ? "The shell responded. A presence looked back." : "Manual transfer pulse sustained."
    ),
  };
}

export function canStartActivationTransfer(state: StarholdState) {
  return state.phase === "boot" && state.resources.power >= 6 && state.resources.stability >= 35 && state.modules.logistics.integrity >= 45;
}

export function isActivationCritical(state: StarholdState): boolean {
  return state.marks.shellStrain >= 6 && state.phase === "activation";
}
