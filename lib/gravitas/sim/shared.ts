import type { StarholdModuleId, StarholdResources, StarholdState, LocalizedString } from "./types";

export function clamp(value: number, min = 0, max = 100) {
  return Math.max(min, Math.min(max, value));
}

export function withAlert(state: StarholdState, alert: LocalizedString | null): StarholdState {
  return { ...state, alert };
}

export function pushJournal(state: StarholdState, line: LocalizedString): LocalizedString[] {
  return [line, ...state.journal].slice(0, 6);
}

export function pushSystemJournal(state: StarholdState, line: LocalizedString): Pick<StarholdState, "journal"> {
  return { journal: pushJournal(state, line) };
}

export function addResourceDelta(
  resources: StarholdResources,
  delta: Partial<Record<keyof StarholdResources, number>>
): StarholdResources {
  return {
    power: clamp(resources.power + (delta.power ?? 0)),
    materials: clamp(resources.materials + (delta.materials ?? 0)),
    stability: clamp(resources.stability + (delta.stability ?? 0)),
    activation: clamp(resources.activation + (delta.activation ?? 0)),
  };
}

export function addModuleLoad(state: StarholdState, moduleId: StarholdModuleId, delta: number) {
  return {
    ...state.modules[moduleId],
    load: clamp(state.modules[moduleId].load + delta),
  };
}

export function updateModuleIntegrity(state: StarholdState, moduleId: StarholdModuleId, delta: number) {
  return {
    ...state.modules[moduleId],
    integrity: clamp(state.modules[moduleId].integrity + delta),
  };
}
