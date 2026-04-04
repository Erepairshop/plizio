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
