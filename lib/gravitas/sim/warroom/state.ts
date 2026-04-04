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
      korgath_berserker: null,
      velari_shadow: null,
      drex_marauder: null,
      synthoid_titan: null,
      noma_weaver: null,
    },
    garrison: {
      sentinel: [],
      vanguard: [],
      wraith: [],
      nexus: [],
      korgath_berserker: [],
      velari_shadow: [],
      drex_marauder: [],
      synthoid_titan: [],
      noma_weaver: [],
    },
  };
}

// ── Garrison helpers ───────────────────────────────────────────

export function getTotalGarrison(wr: WarRoomState): number {
  return Object.values(wr.garrison)
    .flat()
    .reduce((sum, entry) => sum + entry.count, 0);
}
