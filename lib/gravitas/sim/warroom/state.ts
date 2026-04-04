import type { WarRoomState } from "./types";

// ── Initial state factory ──────────────────────────────────────

export function createInitialWarRoom(): WarRoomState {
  return {
    level: 1,
    online: true,
    productionSlots: {
      sentinel: null,
      vanguard: null,
      wraith: null,
      nexus: null,
    },
    garrison: {
      sentinel: [],
      vanguard: [],
      wraith: [],
      nexus: [],
    },
  };
}

// ── Garrison helpers ───────────────────────────────────────────

export function getTotalGarrison(wr: WarRoomState): number {
  return Object.values(wr.garrison)
    .flat()
    .reduce((sum, entry) => sum + entry.count, 0);
}
