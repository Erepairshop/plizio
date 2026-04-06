export type MapNodeType = "meteorite" | "pve_base" | "anomaly";

export interface MapNode {
  id: string;
  type: MapNodeType;
  x: number;
  y: number;
  stealthLevel: number;
  expiresAt: number;
  isOccupiedBy: string | null;
}

export type FleetMovementStatus = "traveling_to" | "mining" | "returning";

export interface FleetMovement {
  id: string;
  targetNodeId: string;
  departureTime: number; // in ticks
  arrivalTime: number; // in ticks
  status: FleetMovementStatus;
  miningCompletesAt?: number; // in ticks
}

export interface GalaxyMapState {
  baseCoordinates: { x: number; y: number };
  transientNodes: MapNode[];
  activeFleets: FleetMovement[];
}
