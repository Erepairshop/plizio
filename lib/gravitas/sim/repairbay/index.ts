import type { RepairBayState } from "./types";

export function createInitialRepairBay(): RepairBayState {
  return {
    level: 1,
    online: true,
    repairSlots: [null],
    wounded: {
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
    woundedAt: null,
  };
}

export type { RepairSlot, RepairBayState } from "./types";
export {
  getRepairSlotCount,
  getRepairBatchSize,
  getRepairDuration,
  getRepairCostPerUnit,
  getRepairBatchCost,
  getTotalWounded,
  applyWoundedDecay,
  canStartRepair,
  startRepair,
  cancelRepair,
} from "./repair";
export { tickRepairBay } from "./tick";
