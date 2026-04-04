import type { LocalizedString } from "../types";
import type { GalaxyMaterialId } from "../../world/mission";

// ── Unit identity ──────────────────────────────────────────────

export type WarRoomUnitId = "sentinel" | "vanguard" | "wraith" | "nexus";
export type WarRoomUnitRole = "tank" | "assault" | "recon" | "support";

// ── Unit definition (static data) ──────────────────────────────

export interface WarRoomUnitDef {
  id: WarRoomUnitId;
  icon: string;
  name: LocalizedString;
  desc: LocalizedString;
  role: WarRoomUnitRole;
  focus: LocalizedString;
  baseStats: {
    attack: number;
    defense: number;
    speed: number;
    hp: number;
  };
  /** Current per-batch base + per-level material profile */
  cost: {
    base: Partial<Record<GalaxyMaterialId, number>>;
    perLevel: Partial<Record<GalaxyMaterialId, number>>;
  };
  /** Minimum war-room level required to train this unit */
  minLevel: number;
}

// ── Production slot (active training) ──────────────────────────

export interface WarRoomProductionSlot {
  unitId: WarRoomUnitId;
  isUpgrade: boolean;
  batchSize: number;
  targetLevel: number;
  startedAt: number;
  completesAt: number;
  reservedCount?: number;
  reservedFromLevel?: number;
  spentCost?: Partial<Record<GalaxyMaterialId, number>>;
}

export interface GarrisonEntry {
  count: number;
  level: number;
}

// ── War-room module state ──────────────────────────────────────

export interface WarRoomState {
  level: number;
  online: boolean;
  productionSlots: Record<WarRoomUnitId, WarRoomProductionSlot | null>;
  garrison: Record<WarRoomUnitId, GarrisonEntry[]>;
}
