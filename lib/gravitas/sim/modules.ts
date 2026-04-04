/**
 * ── Module helpers (thin wrappers over registry) ──────────────
 *
 * Kept for backward-compat — existing imports still work.
 * All data lives in registry.ts now.
 */

import type { StarholdModuleId, StarholdModuleState } from "./types";
import {
  getModuleIds,
  getModule,
  getProfile,
  createModuleStates,
  type ModuleRegistration,
} from "./registry";

// Re-export types that other files expect
export type StarholdModuleDefinition = ModuleRegistration;
export type StarholdModuleActionProfile = ModuleRegistration["profile"];

// ── Compat exports ────────────────────────────────────────────

export const STARHOLD_MODULE_DEFINITIONS = getModuleIds().map(getModule);

export const STARHOLD_MODULE_ACTION_PROFILES = (() => {
  const result = {} as Record<StarholdModuleId, StarholdModuleActionProfile>;
  for (const id of getModuleIds()) result[id] = getProfile(id);
  return result;
})();

export function createInitialModules(): Record<StarholdModuleId, StarholdModuleState> {
  return createModuleStates();
}

export function getModuleDefinition(moduleId: StarholdModuleId) {
  return getModule(moduleId);
}

export function getModuleActionProfile(moduleId: StarholdModuleId) {
  return getProfile(moduleId);
}
