import type { StarholdModuleId, StarholdState } from "./types";
import { STARHOLD_MODULE_DEFINITIONS } from "./modules";

export type StarholdBootstrapChecklist = Record<StarholdModuleId, boolean>;

const INITIAL_MODULE_SNAPSHOT = STARHOLD_MODULE_DEFINITIONS.reduce(
  (acc, definition) => {
    acc[definition.id] = {
      online: definition.startsOnline,
      integrity: definition.integrity,
      load: definition.load,
    };
    return acc;
  },
  {} as Record<StarholdModuleId, { online: boolean; integrity: number; load: number }>
);

export function createInitialBootstrapChecklist(): StarholdBootstrapChecklist {
  return {
    reactor: false,
    logistics: false,
    core: false,
    sensor: false,
    warroom: false,
  };
}

export function createCompleteBootstrapChecklist(): StarholdBootstrapChecklist {
  return {
    reactor: true,
    logistics: true,
    core: true,
    sensor: true,
    warroom: true,
  };
}

export function isBootstrapComplete(state: Pick<StarholdState, "bootstrapChecklist">): boolean {
  return Object.values(state.bootstrapChecklist).every(Boolean);
}

export function markBootstrapCheckpoint(state: StarholdState, moduleId: StarholdModuleId): StarholdState {
  if (state.avatarAwake) return state;
  if (state.bootstrapChecklist[moduleId]) return state;
  return {
    ...state,
    bootstrapChecklist: {
      ...state.bootstrapChecklist,
      [moduleId]: true,
    },
  };
}

export function inferBootstrapChecklist(state: Pick<StarholdState, "threatCycle" | "modules" | "resources">): StarholdBootstrapChecklist {
  if (state.threatCycle > 0) {
    return createCompleteBootstrapChecklist();
  }

  const initial = INITIAL_MODULE_SNAPSHOT;
  return {
    reactor:
      state.modules.reactor.integrity !== initial.reactor.integrity ||
      state.modules.reactor.load !== initial.reactor.load,
    logistics:
      state.modules.logistics.online ||
      state.modules.logistics.integrity !== initial.logistics.integrity ||
      state.modules.logistics.load !== initial.logistics.load,
    core:
      state.resources.activation > 0 ||
      state.modules.core.online ||
      state.modules.core.integrity !== initial.core.integrity ||
      state.modules.core.load !== initial.core.load,
    sensor:
      state.modules.sensor.integrity !== initial.sensor.integrity ||
      state.modules.sensor.load !== initial.sensor.load,
    warroom:
      state.modules.warroom?.online || false,
  };
}
