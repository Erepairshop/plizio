import type { StarholdModuleId, StarholdModuleState } from "./types";

export interface StarholdModuleDefinition {
  id: StarholdModuleId;
  name: string;
  startsOnline: boolean;
  integrity: number;
  load: number;
}

export const STARHOLD_MODULE_DEFINITIONS: StarholdModuleDefinition[] = [
  { id: "reactor", name: "Reactor", startsOnline: true, integrity: 51, load: 72 },
  { id: "logistics", name: "Logistics", startsOnline: false, integrity: 34, load: 0 },
  { id: "core", name: "Core Chamber", startsOnline: false, integrity: 63, load: 12 },
  { id: "sensor", name: "Sensor Node", startsOnline: false, integrity: 47, load: 0 },
];

export interface StarholdModuleActionProfile {
  focusLabel: string;
  repairCost: number;
  repairGain: number;
  loadShift: number;
  onlineThreshold: number;
  primaryCommand: "STABILIZE_REACTOR" | "SCAVENGE" | "REPAIR_MODULE" | "REROUTE_TO_CORE";
}

export const STARHOLD_MODULE_ACTION_PROFILES: Record<StarholdModuleId, StarholdModuleActionProfile> = {
  reactor: {
    focusLabel: "Stabilization",
    repairCost: 2,
    repairGain: 6,
    loadShift: -10,
    onlineThreshold: 45,
    primaryCommand: "STABILIZE_REACTOR",
  },
  logistics: {
    focusLabel: "Recovery",
    repairCost: 4,
    repairGain: 18,
    loadShift: 18,
    onlineThreshold: 45,
    primaryCommand: "SCAVENGE",
  },
  core: {
    focusLabel: "Activation",
    repairCost: 4,
    repairGain: 18,
    loadShift: 18,
    onlineThreshold: 45,
    primaryCommand: "REROUTE_TO_CORE",
  },
  sensor: {
    focusLabel: "Inspection",
    repairCost: 4,
    repairGain: 18,
    loadShift: 18,
    onlineThreshold: 45,
    primaryCommand: "REPAIR_MODULE",
  },
};

export function createInitialModules(): Record<StarholdModuleId, StarholdModuleState> {
  return STARHOLD_MODULE_DEFINITIONS.reduce(
    (acc, definition) => {
      acc[definition.id] = {
        id: definition.id,
        name: definition.name,
        online: definition.startsOnline,
        integrity: definition.integrity,
        load: definition.load,
      };
      return acc;
    },
    {} as Record<StarholdModuleId, StarholdModuleState>
  );
}

export function getModuleDefinition(moduleId: StarholdModuleId) {
  return STARHOLD_MODULE_DEFINITIONS.find((definition) => definition.id === moduleId);
}

export function getModuleActionProfile(moduleId: StarholdModuleId) {
  return STARHOLD_MODULE_ACTION_PROFILES[moduleId];
}
