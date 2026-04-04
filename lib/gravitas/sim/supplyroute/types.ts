import type { FactionId } from "../faction/types";
import type { GalaxyMaterialId } from "../../world/mission";

export type SupplyRouteId = string;

export interface SupplyRoute {
  id: SupplyRouteId;
  factionId: FactionId;
  materialId: GalaxyMaterialId;
  yieldPerHour: number;
  establishedAt: number; // Date.now() timestamp
  lastYieldAt: number; // Date.now() timestamp
  status: "active" | "disrupted" | "destroyed";
  protectionLevel: number; // 0-100
  disruptedUntil: number | null; // Date.now() timestamp if disrupted
}

export interface SupplyRouteState {
  routes: SupplyRoute[];
  maxRoutes: number;
  totalRaided: number;
  lastRaidCheck: number; // Date.now() timestamp
}