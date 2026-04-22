import type { WarRoomUnitId, GarrisonEntry } from "../warroom/types";

export interface RepairSlot {
  unitId: WarRoomUnitId;
  targetLevel: number;
  batchSize: number;
  startedAtTick: number;
  completesAtTick: number;
  repairedEntries?: GarrisonEntry[];
}

export interface RepairBayState {
  level: number;
  online: boolean;
  repairSlots: (RepairSlot | null)[];
  wounded: Record<WarRoomUnitId, GarrisonEntry[]>;
  woundedAtTick: number | null;
}
