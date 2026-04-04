// ── Types ───────────────────────────────────────────────────────
export type {
  WarRoomUnitId,
  WarRoomUnitRole,
  WarRoomUnitDef,
  GarrisonEntry,
  WarRoomProductionSlot,
  WarRoomState,
} from "./types";

// ── Static data ─────────────────────────────────────────────────
export { WARROOM_UNITS, WARROOM_UNIT_ORDER } from "./units";

// ── State ───────────────────────────────────────────────────────
export { createInitialWarRoom, getTotalGarrison } from "./state";

// ── Production logic ────────────────────────────────────────────
export {
  getBatchTrainingCost,
  getBatchUpgradeCost,
  getProductionDuration,
  getBatchSize,
  getMaxUnitLevel,
  canTrainUnit,
  canUpgradeUnit,
  startTraining,
  startUpgrade,
  cancelProduction,
  tickWarroomProduction,
  cancelTraining,
} from "./production";

// ── Tick ────────────────────────────────────────────────────────
export { tickWarRoom } from "./tick";
