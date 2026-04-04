import type { WarRoomUnitId, GarrisonEntry } from "../warroom/types";

export interface RepairSlot {
  unitId: WarRoomUnitId;
  targetLevel: number;
  batchSize: number;
  startedAt: number;
  completesAt: number;
}

export interface RepairBayState {
  level: number;
  online: boolean;
  repairSlots: (RepairSlot | null)[];
  wounded: Record<WarRoomUnitId, GarrisonEntry[]>;
  woundedAt: number | null;
}
