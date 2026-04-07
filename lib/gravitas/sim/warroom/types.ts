import type { LocalizedString } from "../types";
import type { GalaxyMaterialId } from "../../world/mission";

// ── Unit identity ──────────────────────────────────────────────

export type WarRoomUnitId = "sentinel" | "vanguard" | "wraith" | "nexus" | "korgath_berserker" | "velari_shadow" | "drex_marauder" | "synthoid_titan" | "noma_weaver";
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
  requiredFaction?: import("../faction/types").FactionId;
}

// ── Production slot (active training) ──────────────────────────

export interface WarRoomProductionSlot {
  unitId: WarRoomUnitId;
  isUpgrade: boolean;
  batchSize: number;
  targetLevel: number;
  startedAtTick: number;
  completesAtTick: number;
  reservedCount?: number;
  reservedFromLevel?: number;
  spentCost?: Partial<Record<GalaxyMaterialId, number>>;
  upgradedEntries?: GarrisonEntry[];
}

export interface GarrisonEntry {
  count: number;
  level: number;
  battlesSurvived?: number;
  veteranName?: LocalizedString;
  veteranTier?: "hardened" | "veteran" | "elite" | "legendary";
}

// ── War-room module state ──────────────────────────────────────

export type UnitAllocationStatus = "reserved" | "traveling" | "working" | "returning" | "wounded" | "lost";

export interface UnitAllocation {
  id: string; // The fleet or mission id
  missionType: "dispatch" | "expedition" | "weekly" | "battle";
  status: UnitAllocationStatus;
  entries: Partial<Record<WarRoomUnitId, GarrisonEntry[]>>;
  startedAtTick: number;
  expectedArrivalTick?: number;
}

export interface WarRoomState {
  level: number;
  online: boolean;
  productionSlots: Record<WarRoomUnitId, WarRoomProductionSlot | null>;
  garrison: Record<WarRoomUnitId, GarrisonEntry[]>;
  allocations: UnitAllocation[];
}
