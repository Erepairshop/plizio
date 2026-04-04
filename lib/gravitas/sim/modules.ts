import type { StarholdModuleId, StarholdModuleState, StarholdCommand, LocalizedString } from "./types";
import { GRAVITAS_TEXT } from "./content";

export interface StarholdModuleDefinition {
  id: StarholdModuleId;
  name: LocalizedString;
  startsOnline: boolean;
  integrity: number;
  load: number;
}

export const STARHOLD_MODULE_DEFINITIONS: StarholdModuleDefinition[] = [
  { id: "reactor", name: GRAVITAS_TEXT.modules.reactor.name, startsOnline: true, integrity: 51, load: 72 },
  { id: "logistics", name: GRAVITAS_TEXT.modules.logistics.name, startsOnline: false, integrity: 34, load: 0 },
  { id: "core", name: GRAVITAS_TEXT.modules.core.name, startsOnline: false, integrity: 63, load: 12 },
  { id: "sensor", name: GRAVITAS_TEXT.modules.sensor.name, startsOnline: true, integrity: 47, load: 0 },
  { id: "warroom", name: { en: "Command Deck", hu: "Főhadiszállás", de: "Kommandozentrale", ro: "Centrul de comandă" }, startsOnline: false, integrity: 40, load: 0 },
];

export interface StarholdModuleActionProfile {
  focusLabel: LocalizedString;
  repairCost: number;
  repairGain: number;
  loadShift: number;
  onlineThreshold: number;
  primaryCommand: StarholdCommand["type"];
}

export const STARHOLD_MODULE_ACTION_PROFILES: Record<StarholdModuleId, StarholdModuleActionProfile> = {
  reactor: {
    focusLabel: { en: "Stabilization", hu: "Stabilizálás", de: "Stabilisierung", ro: "Stabilizare" },
    repairCost: 3,
    repairGain: 8,
    loadShift: -15,
    onlineThreshold: 45,
    primaryCommand: "STABILIZE_REACTOR",
  },
  logistics: {
    focusLabel: { en: "Recovery", hu: "Helyreállítás", de: "Erholung", ro: "Recuperare" },
    repairCost: 5,
    repairGain: 22,
    loadShift: 25,
    onlineThreshold: 50,
    primaryCommand: "SCAVENGE",
  },
  core: {
    focusLabel: { en: "Activation", hu: "Aktiválás", de: "Aktivierung", ro: "Activare" },
    repairCost: 6,
    repairGain: 15,
    loadShift: 30,
    onlineThreshold: 60,
    primaryCommand: "REROUTE_TO_CORE",
  },
  sensor: {
    focusLabel: { en: "Inspection", hu: "Vizsgálat", de: "Inspektion", ro: "Inspecție" },
    repairCost: 4,
    repairGain: 20,
    loadShift: 15,
    onlineThreshold: 40,
    primaryCommand: "REPAIR_MODULE",
  },
  warroom: {
    focusLabel: { en: "Training", hu: "Kiképzés", de: "Ausbildung", ro: "Antrenament" },
    repairCost: 5,
    repairGain: 18,
    loadShift: 20,
    onlineThreshold: 35,
    primaryCommand: "TRAIN_UNIT",
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
