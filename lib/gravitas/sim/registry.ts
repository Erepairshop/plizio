/**
 * ── Module Registry ───────────────────────────────────────────
 *
 * Single source of truth for all Starhold modules.
 * To add a new module:
 *   1. Add its ID string to MODULE_IDS
 *   2. Add its definition + profile to MODULES
 *   3. Done — everything else picks it up automatically.
 */

import type { StarholdModuleId, StarholdModuleState, StarholdCommand, LocalizedString } from "./types";
import { GRAVITAS_TEXT } from "./content";

// ── Module ID list (single source of truth) ──────────────────

export const MODULE_IDS: readonly StarholdModuleId[] = [
  "reactor",
  "logistics",
  "core",
  "sensor",
] as const;

// ── Module registration shape ────────────────────────────────

export interface ModuleRegistration {
  id: StarholdModuleId;
  name: LocalizedString;
  /** Starting online state for fresh game */
  startsOnline: boolean;
  /** Starting integrity (0-100) */
  integrity: number;
  /** Starting load (0-100) */
  load: number;
  /** Action profile — determines repair costs, thresholds, etc. */
  profile: {
    focusLabel: LocalizedString;
    repairCost: number;
    repairGain: number;
    loadShift: number;
    onlineThreshold: number;
    primaryCommand: StarholdCommand["type"];
  };
}

// ── Registered modules ───────────────────────────────────────

const MODULES: Record<StarholdModuleId, ModuleRegistration> = {
  reactor: {
    id: "reactor",
    name: GRAVITAS_TEXT.modules.reactor.name,
    startsOnline: true,
    integrity: 51,
    load: 72,
    profile: {
      focusLabel: { en: "Stabilization", hu: "Stabilizálás", de: "Stabilisierung", ro: "Stabilizare" },
      repairCost: 3, repairGain: 8, loadShift: -15, onlineThreshold: 45,
      primaryCommand: "STABILIZE_REACTOR",
    },
  },
  logistics: {
    id: "logistics",
    name: GRAVITAS_TEXT.modules.logistics.name,
    startsOnline: false,
    integrity: 34,
    load: 0,
    profile: {
      focusLabel: { en: "Recovery", hu: "Helyreállítás", de: "Erholung", ro: "Recuperare" },
      repairCost: 5, repairGain: 22, loadShift: 25, onlineThreshold: 50,
      primaryCommand: "SCAVENGE",
    },
  },
  core: {
    id: "core",
    name: GRAVITAS_TEXT.modules.core.name,
    startsOnline: false,
    integrity: 63,
    load: 12,
    profile: {
      focusLabel: { en: "Activation", hu: "Aktiválás", de: "Aktivierung", ro: "Activare" },
      repairCost: 6, repairGain: 15, loadShift: 30, onlineThreshold: 60,
      primaryCommand: "REROUTE_TO_CORE",
    },
  },
  sensor: {
    id: "sensor",
    name: GRAVITAS_TEXT.modules.sensor.name,
    startsOnline: true,
    integrity: 47,
    load: 0,
    profile: {
      focusLabel: { en: "Inspection", hu: "Vizsgálat", de: "Inspektion", ro: "Inspecție" },
      repairCost: 4, repairGain: 20, loadShift: 15, onlineThreshold: 40,
      primaryCommand: "REPAIR_MODULE",
    },
  },
};

// ── Public API ────────────────────────────────────────────────

/** All registered module IDs */
export function getModuleIds(): readonly StarholdModuleId[] {
  return MODULE_IDS;
}

/** Full registration for a module */
export function getModule(id: StarholdModuleId): ModuleRegistration {
  return MODULES[id];
}

/** Action profile shortcut */
export function getProfile(id: StarholdModuleId) {
  return MODULES[id].profile;
}

/** Build fresh module states from registry */
export function createModuleStates(): Record<StarholdModuleId, StarholdModuleState> {
  const result = {} as Record<StarholdModuleId, StarholdModuleState>;
  for (const id of MODULE_IDS) {
    const reg = MODULES[id];
    result[id] = {
      id: reg.id,
      name: reg.name,
      online: reg.startsOnline,
      integrity: reg.integrity,
      load: reg.load,
    };
  }
  return result;
}

/** Build bootstrap checklist (all false) from registry */
export function createBootstrapChecklist(): Record<StarholdModuleId, boolean> {
  const result = {} as Record<StarholdModuleId, boolean>;
  for (const id of MODULE_IDS) result[id] = false;
  return result;
}

/** Build complete bootstrap checklist (all true) */
export function createCompleteBootstrap(): Record<StarholdModuleId, boolean> {
  const result = {} as Record<StarholdModuleId, boolean>;
  for (const id of MODULE_IDS) result[id] = true;
  return result;
}
