import type { StarholdState } from "../types";
import { tickWarroomProduction } from "./production";

// ── Per-tick production advancement ────────────────────────────

export function tickWarRoom(state: StarholdState): StarholdState {
  let nextState = tickWarroomProduction(state);
  
  if (state.tick % 10 === 0 && state.modules.reactor?.online) {
    const reactorLevel = state.moduleLevels.reactor || 1;
    // 1 antimatter per 10 ticks per reactor level
    const antimatterGain = reactorLevel;
    const maxAntimatter = state.derived?.maxAntimatter ?? 100;
    
    if (nextState.resources.antimatter < maxAntimatter) {
      nextState = {
        ...nextState,
        resources: {
          ...nextState.resources,
          antimatter: Math.min(maxAntimatter, nextState.resources.antimatter + antimatterGain),
        }
      };
    }
  }
  
  return nextState;
}
