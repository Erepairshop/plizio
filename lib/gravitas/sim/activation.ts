import type { StarholdState } from "./types";
import { clamp, pushJournal } from "./shared";

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
    return {
      ...state,
      alert: "Transfer interrupted. Power reserve exhausted.",
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
