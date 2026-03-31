import type { StarholdModuleId, StarholdState } from "./types";

export function clamp(value: number, min = 0, max = 100) {
  return Math.max(min, Math.min(max, value));
}

export function pushJournal(state: StarholdState, line: string): string[] {
  return [line, ...state.journal].slice(0, 6);
}

export function updateModuleIntegrity(state: StarholdState, moduleId: StarholdModuleId, delta: number) {
  return {
    ...state.modules[moduleId],
    integrity: clamp(state.modules[moduleId].integrity + delta),
  };
}
