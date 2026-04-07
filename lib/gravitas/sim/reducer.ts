import type { StarholdState, StarholdCommand } from "./types";
import { applyStarholdCommand } from "./commands";
import { advanceStarholdTick } from "./tick";
import { createInitialStarholdState } from "./createInitialState";
import { resolveStarholdEvent } from "./events";

export function reducer(state: StarholdState, command: StarholdCommand): StarholdState {
  switch (command.type) {
    case "TICK":
      return advanceStarholdTick(state);
    case "LOAD_STATE":
      return command.state;
    case "RESET_STATE":
      return createInitialStarholdState();
    case "RESOLVE_EVENT":
      return resolveStarholdEvent(state, command.optionId);
    case "DISMISS_VICTORY":
      return {
        ...state,
        firstLoopShown: true,
        stationLost: false,
      };
    case "START_IMPRINT":
      return { ...state, avatarImprintActive: true };
    case "STOP_IMPRINT":
      return { ...state, avatarImprintActive: false };
    case "START_TRANSFER":
      return { 
        ...state, 
        activeOperation: { 
          type: "rerouteCore", 
          startedTick: state.tick,
          duration: 30,
          remaining: 30,
          title: { en: "Core Transfer", hu: "Mag átvitel", de: "Kern-Transfer", ro: "Transfer nucleu" },
          detail: { en: "Synchronizing pulse...", hu: "Pulzus szinkronizálása...", de: "Puls synchronisieren...", ro: "Sincronizare puls..." }
        } 
      };

    case "STOP_TRANSFER":
      return { ...state, activeOperation: null };
    default:
      return applyStarholdCommand(state, command);

  }
}
