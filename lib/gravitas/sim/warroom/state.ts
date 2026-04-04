import type { WarRoomState } from "./types";

// ── Initial state factory ──────────────────────────────────────

export function createInitialWarRoom(): WarRoomState {
  return {
    level: 1,
    online: true,
    productionSlot: null,
    garrison: { militia: 0, ranger: 0, shieldbearer: 0, scout_drone: 0 },
  };
}

// ── Garrison helpers ───────────────────────────────────────────

export function getTotalGarrison(wr: WarRoomState): number {
  return Object.values(wr.garrison).reduce((sum, n) => sum + n, 0);
}
