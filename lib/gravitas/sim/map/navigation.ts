import { WARROOM_UNITS } from "../warroom/units";
import type { WarRoomUnitId } from "../warroom/types";

/**
 * Galaxy Map — Navigation & Travel Calculations
 *
 * All public functions are pure (no state mutation, no Math.random).
 * Distances are in coordinate units (backend ±3.0 range).
 * Time is in ticks (1 tick = 1 second).
 */

/** Euclidean distance between two points */
export function nodeDistance(
  x1: number, y1: number,
  x2: number, y2: number,
): number {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

/** Calculate weight based on fleet composition */
export function calculateFleetWeight(composition?: Record<string, number>): number {
  if (!composition || Object.keys(composition).length === 0) return 1;
  let totalWeight = 0;
  for (const [unitId, count] of Object.entries(composition)) {
    if (count <= 0) continue;
    const def = WARROOM_UNITS[unitId as WarRoomUnitId];
    if (!def) continue;
    let unitWeight = 1;
    if (def.role === "tank") unitWeight = 3;
    else if (def.role === "assault") unitWeight = 2;
    else if (def.role === "support") unitWeight = 1.5;
    else if (def.role === "recon") unitWeight = 0.5;
    totalWeight += unitWeight * count;
  }
  return Math.max(0.1, totalWeight);
}

/**
 * Travel time in ticks.
 * Base: 1 coordinate unit = 600 ticks (10 minutes).
 * Sensor level provides a speed multiplier: 1 + (sensorLevel - 1) * 0.08
 */
export function calculateTravelTimeTicks(
  distance: number,
  sensorLevel: number,
  fleetWeight: number = 1,
  boosted: boolean = false,
): number {
  const weightPenalty = Math.max(1, Math.sqrt(fleetWeight));
  const baseTicks = distance * 600 * weightPenalty;
  const speedMult = (1 + Math.max(0, sensorLevel - 1) * 0.08) * (boosted ? 10 : 1);
  return Math.max(60, Math.ceil(baseTicks / speedMult)); // min 1 minute
}

/**
 * Fuel (antimatter) cost for a trip.
 * Base: distance * 0.5 * fleetWeight, minimum 1.
 */
export function calculateFuelCost(
  distance: number,
  fleetWeight: number,
): number {
  return Math.max(1, Math.ceil(distance * 0.5 * Math.max(0.1, fleetWeight)));
}

// ── Legacy API (millisecond-based, kept for backward compat) ────────────────

export function calculateTravelTime(
  startX: number,
  startY: number,
  endX: number,
  endY: number,
  speedMultiplier: number,
): number {
  const distance = nodeDistance(startX, startY, endX, endY);
  const baseTimeMs = distance * 600000;
  if (speedMultiplier <= 0) return baseTimeMs;
  return Math.floor(baseTimeMs / speedMultiplier);
}

export function calculateTravelCost(
  startX: number,
  startY: number,
  endX: number,
  endY: number,
  fleetWeight: number,
): number {
  const distance = nodeDistance(startX, startY, endX, endY);
  return calculateFuelCost(distance, fleetWeight);
}
