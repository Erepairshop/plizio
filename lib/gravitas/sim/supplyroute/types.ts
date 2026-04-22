import type { FactionId } from "../faction/types";
import type { GalaxyMaterialId } from "../../world/mission";

export type SupplyRouteId = string;

export interface SupplyRoute {
  id: SupplyRouteId;
  factionId: FactionId;
  materialId: GalaxyMaterialId;
  yieldPerHour: number;
  establishedAtTick: number; // Simulation tick
  lastYieldAtTick: number; // Simulation tick
  status: "active" | "disrupted" | "destroyed";
  protectionLevel: number; // 0-100
  disruptedUntilTick: number | null; // Simulation tick if disrupted
}

export interface SupplyRouteState {
  routes: SupplyRoute[];
  maxRoutes: number;
  totalRaided: number;
  lastRaidCheckTick: number; // Simulation tick
}