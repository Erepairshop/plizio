import type { FleetMissionType } from "./types";

/** Mission durations in ticks (1 tick = 1 second) */
export const MISSION_DURATION_TICKS: Record<FleetMissionType, number> = {
  collect: 3600,  // 1 hour
  attack: 1800,   // 30 min
  inspect: 600,   // 10 min
};

/** Ticks cooldown between node actions */
export const ACTION_COOLDOWN_TICKS = 120;

/** Base fleet weight when no specific warroom units are assigned */
export const BASE_FLEET_WEIGHT = 1;

/** Max concurrent active fleets */
export const MAX_ACTIVE_FLEETS = 5;

/** Max nodes per map */
export const MAX_MAP_NODES = 40;
