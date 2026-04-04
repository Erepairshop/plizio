// ── Types ───────────────────────────────────────────────────────
export type {
  WarRoomUnitId,
  WarRoomUnitDef,
  WarRoomProductionSlot,
  WarRoomState,
} from "./types";

// ── Static data ─────────────────────────────────────────────────
export { WARROOM_UNITS, WARROOM_UNIT_ORDER } from "./units";

// ── State ───────────────────────────────────────────────────────
export { createInitialWarRoom, getTotalGarrison } from "./state";

// ── Production logic ────────────────────────────────────────────
export { canTrainUnit, startTraining, cancelTraining } from "./production";

// ── Tick ────────────────────────────────────────────────────────
export { tickWarRoom } from "./tick";
