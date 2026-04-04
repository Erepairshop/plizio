import { GALAXY_WORLD_SIZE } from "./constants";
import { getGalaxyDistance } from "./placement";
import type { GalaxyWorldPosition } from "./types";

export const GALAXY_TRAVEL_SPEED_UNITS_PER_MINUTE = {
  drone: Math.round(GALAXY_WORLD_SIZE.width / 60),
  ship: Math.round(GALAXY_WORLD_SIZE.width / 82),
} as const;

export type GalaxyTravelMode = keyof typeof GALAXY_TRAVEL_SPEED_UNITS_PER_MINUTE;

export function getGalaxyTravelDurationMinutes(
  from: GalaxyWorldPosition,
  to: GalaxyWorldPosition,
  mode: GalaxyTravelMode = "drone",
  state?: import("../sim/types").StarholdState,
): number {
  const distance = getGalaxyDistance(from, to);
  let speed = GALAXY_TRAVEL_SPEED_UNITS_PER_MINUTE[mode];
  if (mode === "drone" && state?.synergies?.combined?.droneSpeedBonus) {
    speed *= (1 + state.synergies.combined.droneSpeedBonus);
  }
  return Math.max(1, Math.ceil(distance / speed));
}

export function getGalaxyTravelDistance(
  from: GalaxyWorldPosition,
  to: GalaxyWorldPosition,
): number {
  return Math.round(getGalaxyDistance(from, to));
}
