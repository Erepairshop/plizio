import type { EspionageState, EspionageIntelAction, EspionageMissionType } from "./types";
import type { FactionId } from "../faction/types";
import type { StarholdState } from "../types";

export function createInitialEspionageState(): EspionageState {
  return {
    missions: [],
    totalIntel: 0,
    extractedCount: 0,
    lostCount: 0,
    lastExposureEvent: null,
  };
}

export function deploySpies(state: StarholdState, _targetFactionId: FactionId, _wraithCount: number, _missionType: EspionageMissionType): StarholdState {
  // Stub — full implementation comes from espionage agent
  return state;
}

export function extractSpies(state: StarholdState, _missionId: string): StarholdState {
  return state;
}

export function spendIntel(state: StarholdState, _action: EspionageIntelAction, _extraArg?: unknown): StarholdState {
  return state;
}

export function tickEspionage(state: StarholdState): StarholdState {
  return state;
}
