export function calculateTravelTime(
  startX: number,
  startY: number,
  endX: number,
  endY: number,
  speedMultiplier: number
): number {
  const distance = Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2));
  // Let's assume a base speed where 1 unit of distance = 10 minutes (600,000 ms)
  // The speedMultiplier makes it faster or slower
  const baseTimeMs = distance * 600000;
  
  if (speedMultiplier <= 0) return baseTimeMs;
  return Math.floor(baseTimeMs / speedMultiplier);
}

export function calculateTravelCost(
  startX: number,
  startY: number,
  endX: number,
  endY: number,
  fleetWeight: number
): number {
  const distance = Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2));
  
  // Base cost per unit of distance is 0.5 antimatter
  const distanceCost = distance * 0.5;
  
  // Fleet weight multiplier: heavier fleets cost significantly more per distance
  // A weight of 1 means normal cost, 10 means 10x cost
  const weightCost = Math.max(0.1, fleetWeight); 
  
  return Math.ceil(distanceCost * weightCost);
}
