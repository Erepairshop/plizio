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

/**
 * Travel time in ticks.
 * Base: 1 coordinate unit = 600 ticks (10 minutes).
 * Sensor level provides a speed multiplier: 1 + (sensorLevel - 1) * 0.08
 */
export function calculateTravelTimeTicks(
  distance: number,
  sensorLevel: number,
): number {
  const baseTicks = distance * 600;
  const speedMult = 1 + Math.max(0, sensorLevel - 1) * 0.08;
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
