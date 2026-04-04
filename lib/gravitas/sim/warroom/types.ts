import type { LocalizedString } from "../types";

// ── Unit identity ──────────────────────────────────────────────

export type WarRoomUnitId = "militia" | "ranger" | "shieldbearer" | "scout_drone";

// ── Unit definition (static data) ──────────────────────────────

export interface WarRoomUnitDef {
  id: WarRoomUnitId;
  icon: string;
  name: LocalizedString;
  desc: LocalizedString;
  /** How many game ticks to produce one unit (1 tick ≈ 5s) */
  productionTicks: number;
  cost: { materials: number; power?: number };
  /** Minimum war-room level required to train this unit */
  minLevel: number;
}

// ── Production slot (active training) ──────────────────────────

export interface WarRoomProductionSlot {
  unitId: WarRoomUnitId;
  startedTick: number;
  duration: number;
  remaining: number;
}

// ── War-room module state ──────────────────────────────────────

export interface WarRoomState {
  level: number;
  online: boolean;
  productionSlot: WarRoomProductionSlot | null;
  garrison: Record<WarRoomUnitId, number>;
}
