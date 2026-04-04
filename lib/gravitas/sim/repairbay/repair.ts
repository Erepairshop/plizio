import { REPAIR_BAY_CONFIG, WARROOM_PRODUCTION_CONFIG } from "../../economy";
import { loadSavedGalaxyInventory, saveGalaxyInventory } from "../../world/mission";
import type { GalaxyMaterialId } from "../../world/mission";
import { pushJournal } from "../shared";
import type { StarholdState } from "../types";
import type { GarrisonEntry, WarRoomUnitId } from "../warroom/types";
import { getBatchTrainingCost } from "../warroom/production";

const HOUR_MS = 60 * 60 * 1000;

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

function countEntries(entries: GarrisonEntry[]): number {
  return entries.reduce((sum, entry) => sum + entry.count, 0);
}

function addEntries(entries: GarrisonEntry[], level: number, count: number): GarrisonEntry[] {
  if (count <= 0) return entries;
  const next = entries.map((entry) => ({ ...entry }));
  const idx = next.findIndex((entry) => entry.level === level);
  if (idx >= 0) {
    next[idx] = { ...next[idx], count: next[idx].count + count };
  } else {
    next.push({ level, count });
  }
  return next.filter((entry) => entry.count > 0).sort((a, b) => a.level - b.level);
}

function removeEntries(entries: GarrisonEntry[], level: number, count: number): GarrisonEntry[] {
  if (count <= 0) return entries;
  let remaining = count;
  const next = entries.map((entry) => ({ ...entry }));
  for (let i = 0; i < next.length; i += 1) {
    if (next[i].level !== level) continue;
    const take = Math.min(remaining, next[i].count);
    next[i].count -= take;
    remaining -= take;
    if (remaining <= 0) break;
  }
  return next.filter((entry) => entry.count > 0);
}

function canAfford(cost: Partial<Record<GalaxyMaterialId, number>>): boolean {
  const inventory = loadSavedGalaxyInventory();
  for (const [materialId, amount] of Object.entries(cost)) {
    if (!amount) continue;
    if ((inventory[materialId as GalaxyMaterialId] ?? 0) < amount) return false;
  }
  return true;
}

function applyInventoryDelta(cost: Partial<Record<GalaxyMaterialId, number>>, sign: -1 | 1): void {
  const inventory = loadSavedGalaxyInventory();
  const next = { ...inventory };
  for (const [materialId, amount] of Object.entries(cost)) {
    if (!amount) continue;
    const key = materialId as GalaxyMaterialId;
    next[key] = Math.max(0, (next[key] ?? 0) + amount * sign);
  }
  saveGalaxyInventory(next);
}

function scaleCost(cost: Partial<Record<GalaxyMaterialId, number>>, ratio: number): Partial<Record<GalaxyMaterialId, number>> {
  const next: Partial<Record<GalaxyMaterialId, number>> = {};
  for (const [materialId, amount] of Object.entries(cost)) {
    if (!amount) continue;
    next[materialId as GalaxyMaterialId] = Math.max(0, Math.floor(amount * ratio));
  }
  return next;
}

export function getRepairSlotCount(repairLevel: number): number {
  return Math.max(1, Math.floor(Math.max(1, repairLevel) / 5) + 1);
}

export function getRepairBatchSize(repairLevel: number): number {
  return Math.max(10, Math.floor(Math.max(1, repairLevel) * 4 + 6));
}

export function getRepairDuration(_repairLevel: number, warroomLevel: number, state?: StarholdState): number {
  const reduction = clamp(
    Math.max(0, warroomLevel) * REPAIR_BAY_CONFIG.warroomSpeedBonus,
    0,
    REPAIR_BAY_CONFIG.maxWarroomSpeedBonus,
  );
  let baseTicks = REPAIR_BAY_CONFIG.baseRepairTicks;
  if (state?.synergies?.combined?.repairTimeReduction) {
    baseTicks *= (1 - state.synergies.combined.repairTimeReduction);
  }
  if (state?.galaxyCycle) {
    const cycleEffects = import("../galaxy/cycles").getCycleEffects(state.galaxyCycle.currentPhase);
    if (cycleEffects.repairSpeedBonus) {
      baseTicks /= (1 + cycleEffects.repairSpeedBonus);
    }
  }
  return Math.max(1, Math.round(baseTicks * (1 - reduction)));
}

export function getRepairCostPerUnit(
  unitId: WarRoomUnitId,
  unitLevel: number,
  repairLevel: number,
  logisticsLevel: number,
  state?: StarholdState,
): Partial<Record<GalaxyMaterialId, number>> {
  const trainingCost = getBatchTrainingCost(unitId, unitLevel);
  const costRatioSpan = REPAIR_BAY_CONFIG.baseCostRatio - REPAIR_BAY_CONFIG.minCostRatio;
  const levelRatio = REPAIR_BAY_CONFIG.baseCostRatio - (Math.max(1, repairLevel) - 1) * (costRatioSpan / 24);
  const logisticsReduction = Math.max(0, logisticsLevel) * REPAIR_BAY_CONFIG.logisticsCostReduction;
  let ratio = Math.max(0.01, levelRatio - logisticsReduction);
  if (state?.synergies?.combined?.repairCostReduction) {
    ratio *= (1 - state.synergies.combined.repairCostReduction);
  }
  const canonicalBatchSize = Math.max(1, WARROOM_PRODUCTION_CONFIG.batchBaseSizePerLevel);

  const perUnit: Partial<Record<GalaxyMaterialId, number>> = {};
  for (const [materialId, amount] of Object.entries(trainingCost)) {
    if (!amount) continue;
    const perBatchUnit = amount / canonicalBatchSize;
    const computed = Math.max(1, Math.ceil(perBatchUnit * ratio));
    perUnit[materialId as GalaxyMaterialId] = computed;
  }
  return perUnit;
}

export function getRepairBatchCost(
  unitId: WarRoomUnitId,
  unitLevel: number,
  count: number,
  repairLevel: number,
  logisticsLevel: number,
  state?: StarholdState,
): Partial<Record<GalaxyMaterialId, number>> {
  const perUnit = getRepairCostPerUnit(unitId, unitLevel, repairLevel, logisticsLevel, state);
  const total: Partial<Record<GalaxyMaterialId, number>> = {};
  Object.entries(perUnit).forEach(([materialId, amount]) => {
    if (!amount) return;
    total[materialId as GalaxyMaterialId] = Math.max(0, Math.ceil(amount * Math.max(0, count)));
  });
  return total;
}

export function getTotalWounded(wounded: StarholdState["repairBay"]["wounded"]): number {
  return Object.values(wounded).reduce((sum, entries) => sum + countEntries(entries), 0);
}

export function applyWoundedDecay(state: StarholdState): StarholdState {
  if (!state.repairBay.woundedAt) return state;
  const now = Date.now();
  const graceHours = REPAIR_BAY_CONFIG.decayGraceHours + state.moduleLevels.core * REPAIR_BAY_CONFIG.decayGracePerCoreLevel;
  const graceMs = graceHours * HOUR_MS;
  const elapsedAfterGrace = now - (state.repairBay.woundedAt + graceMs);
  if (elapsedAfterGrace < HOUR_MS) return state;

  const elapsedHours = Math.floor(elapsedAfterGrace / HOUR_MS);
  const survivalFactor = Math.pow(1 - REPAIR_BAY_CONFIG.decayRatePerHour, elapsedHours);
  let totalDied = 0;

  const nextWounded: StarholdState["repairBay"]["wounded"] = { ...state.repairBay.wounded };
  (Object.keys(nextWounded) as WarRoomUnitId[]).forEach((unitId) => {
    const nextEntries = (nextWounded[unitId] ?? []).map((entry) => {
      const survived = Math.max(0, Math.floor(entry.count * survivalFactor));
      const died = Math.max(0, entry.count - survived);
      totalDied += died;
      return { ...entry, count: survived };
    }).filter((entry) => entry.count > 0);
    nextWounded[unitId] = nextEntries;
  });

  if (totalDied <= 0) return state;

  const remainingAfterGraceRemainder = elapsedAfterGrace % HOUR_MS;
  const adjustedWoundedAt = now - graceMs - remainingAfterGraceRemainder;
  const hasWounded = getTotalWounded(nextWounded) > 0;
  const text = {
    en: `${totalDied} wounded units were lost due to delayed treatment.`,
    hu: `${totalDied} sebesult egyseg elveszett a kesleltetett ellatas miatt.`,
    de: `${totalDied} verwundete Einheiten gingen wegen verspaeteter Versorgung verloren.`,
    ro: `${totalDied} unitati ranite au fost pierdute din cauza tratamentului intarziat.`,
  };

  return {
    ...state,
    repairBay: {
      ...state.repairBay,
      wounded: nextWounded,
      woundedAt: hasWounded ? adjustedWoundedAt : null,
    },
    alert: text,
    journal: pushJournal(state, text),
  };
}

export function canStartRepair(
  state: StarholdState,
  unitId: WarRoomUnitId,
  unitLevel: number,
  count: number,
): boolean {
  if (!state.repairBay.online) return false;
  if (count <= 0) return false;
  if (unitLevel < 1) return false;
  if (!state.warRoom.online) return false;

  const freeSlotIndex = state.repairBay.repairSlots.findIndex((slot) => slot === null);
  if (freeSlotIndex < 0) return false;
  const maxBatch = getRepairBatchSize(state.repairBay.level);
  if (count > maxBatch) return false;

  const woundedEntries = state.repairBay.wounded[unitId] ?? [];
  const woundedCount = woundedEntries.reduce((sum, entry) => sum + (entry.level === unitLevel ? entry.count : 0), 0);
  if (woundedCount < count) return false;

  const cost = getRepairBatchCost(
    unitId,
    unitLevel,
    count,
    state.repairBay.level,
    state.moduleLevels.logistics,
    state,
  );
  return canAfford(cost);
}

export function startRepair(
  state: StarholdState,
  unitId: WarRoomUnitId,
  unitLevel: number,
  count: number,
): StarholdState {
  if (!canStartRepair(state, unitId, unitLevel, count)) return state;

  const slotIndex = state.repairBay.repairSlots.findIndex((slot) => slot === null);
  if (slotIndex < 0) return state;

  const duration = getRepairDuration(state.repairBay.level, state.moduleLevels.warroom, state);
  const cost = getRepairBatchCost(unitId, unitLevel, count, state.repairBay.level, state.moduleLevels.logistics, state);
  applyInventoryDelta(cost, -1);

  const slot = {
    unitId,
    targetLevel: unitLevel,
    batchSize: count,
    startedTick: state.tick,
    duration,
    remaining: duration,
  };

  const nextSlots = [...state.repairBay.repairSlots];
  nextSlots[slotIndex] = slot;
  const nextWounded = {
    ...state.repairBay.wounded,
    [unitId]: removeEntries(state.repairBay.wounded[unitId] ?? [], unitLevel, count),
  };

  const text = {
    en: `Repair started for ${count} ${unitId} units (Lv${unitLevel}).`,
    hu: `${count} ${unitId} egyseg javitasa elindult (Lv${unitLevel}).`,
    de: `Reparatur fuer ${count} ${unitId}-Einheiten gestartet (Lv${unitLevel}).`,
    ro: `Reparatia pentru ${count} unitati ${unitId} a inceput (Lv${unitLevel}).`,
  };

  return {
    ...state,
    repairBay: {
      ...state.repairBay,
      repairSlots: nextSlots,
      wounded: nextWounded,
      woundedAt: getTotalWounded(nextWounded) > 0 ? (state.repairBay.woundedAt ?? Date.now()) : null,
    },
    alert: text,
    journal: pushJournal(state, text),
  };
}

export function cancelRepair(state: StarholdState, slotIndex: number): StarholdState {
  const slot = state.repairBay.repairSlots[slotIndex];
  if (!slot) return state;

  const paid = getRepairBatchCost(
    slot.unitId,
    slot.targetLevel,
    slot.batchSize,
    state.repairBay.level,
    state.moduleLevels.logistics,
    state,
  );
  const refund = scaleCost(paid, REPAIR_BAY_CONFIG.cancelRefundRatio);
  applyInventoryDelta(refund, 1);

  const nextSlots = [...state.repairBay.repairSlots];
  nextSlots[slotIndex] = null;
  const nextWounded = {
    ...state.repairBay.wounded,
    [slot.unitId]: addEntries(state.repairBay.wounded[slot.unitId] ?? [], slot.targetLevel, slot.batchSize),
  };

  const text = {
    en: "Repair canceled. 50% materials refunded.",
    hu: "Javitas megszakitva. 50% anyag visszateritve.",
    de: "Reparatur abgebrochen. 50% Material erstattet.",
    ro: "Reparatie anulata. 50% materiale rambursate.",
  };

  return {
    ...state,
    repairBay: {
      ...state.repairBay,
      repairSlots: nextSlots,
      wounded: nextWounded,
      woundedAt: state.repairBay.woundedAt ?? Date.now(),
    },
    alert: text,
    journal: pushJournal(state, text),
  };
}
