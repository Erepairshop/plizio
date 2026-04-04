import type { StarholdState } from "../types";
import type { GalaxyInventory, GalaxyMaterialId } from "../../world/mission";
import { loadSavedGalaxyInventory, saveGalaxyInventory } from "../../world/mission";
import { pushJournal } from "../shared";
import { UNIT_COSTS, WARROOM_LEVEL_CONFIG, WARROOM_PRODUCTION_CONFIG } from "../../economy";
import { WARROOM_UNITS } from "./units";
import type { GarrisonEntry, WarRoomProductionSlot, WarRoomUnitId } from "./types";

function canAfford(inventory: GalaxyInventory, cost: Partial<Record<GalaxyMaterialId, number>>): boolean {
  for (const [matId, amount] of Object.entries(cost)) {
    if (!amount) continue;
    if ((inventory[matId as GalaxyMaterialId] ?? 0) < amount) return false;
  }
  return true;
}

function applyCost(inventory: GalaxyInventory, cost: Partial<Record<GalaxyMaterialId, number>>, sign: -1 | 1): GalaxyInventory {
  const next = { ...inventory };
  for (const [matId, amount] of Object.entries(cost)) {
    if (!amount) continue;
    const key = matId as GalaxyMaterialId;
    next[key] = Math.max(0, (next[key] ?? 0) + amount * sign);
  }
  return next;
}

function scaleByRatio(cost: Partial<Record<GalaxyMaterialId, number>>, ratio: number): Partial<Record<GalaxyMaterialId, number>> {
  const next: Partial<Record<GalaxyMaterialId, number>> = {};
  for (const [matId, amount] of Object.entries(cost)) {
    if (!amount) continue;
    next[matId as GalaxyMaterialId] = Math.max(0, Math.floor(amount * ratio));
  }
  return next;
}

function getEntryCount(entries: GarrisonEntry[]): number {
  return entries.reduce((sum, e) => sum + e.count, 0);
}

function getLevelCount(entries: GarrisonEntry[], level: number): number {
  return entries.reduce((sum, e) => sum + (e.level === level ? e.count : 0), 0);
}

function addGarrisonEntries(entries: GarrisonEntry[], level: number, count: number): GarrisonEntry[] {
  if (count <= 0) return entries;
  const next = entries.map((e) => ({ ...e }));
  const idx = next.findIndex((e) => e.level === level);
  if (idx >= 0) {
    next[idx] = { ...next[idx], count: next[idx].count + count };
  } else {
    next.push({ level, count });
  }
  return next.sort((a, b) => a.level - b.level);
}

function removeGarrisonEntries(entries: GarrisonEntry[], level: number, count: number): GarrisonEntry[] {
  if (count <= 0) return entries;
  let remaining = count;
  const next = entries.map((e) => ({ ...e }));
  for (let i = 0; i < next.length; i += 1) {
    if (next[i].level !== level) continue;
    const take = Math.min(remaining, next[i].count);
    next[i].count -= take;
    remaining -= take;
    if (remaining <= 0) break;
  }
  return next.filter((e) => e.count > 0);
}

export function getBatchSize(warroomLevel: number): number {
  return Math.max(10, warroomLevel * WARROOM_PRODUCTION_CONFIG.batchBaseSizePerLevel);
}

export function getMaxUnitLevel(warroomLevel: number): number {
  const raw = Math.floor((warroomLevel + 1) / 2.5) + 1;
  return Math.max(1, Math.min(WARROOM_PRODUCTION_CONFIG.maxUnitLevel, raw));
}

export function getTotalGarrison(garrison: StarholdState["warRoom"]["garrison"]): number {
  return Object.values(garrison).reduce((sum, entries) => sum + getEntryCount(entries), 0);
}

export function getBatchTrainingCost(unitId: WarRoomUnitId, level: number): Partial<Record<GalaxyMaterialId, number>> {
  const conf = UNIT_COSTS[unitId];
  const lv = Math.max(1, Math.min(WARROOM_PRODUCTION_CONFIG.maxUnitLevel, Math.floor(level)));
  let cost: Partial<Record<GalaxyMaterialId, number>> = { ...conf.base };
  const step = Math.max(0, lv - 1);
  for (const [matId, amount] of Object.entries(conf.perLevel)) {
    if (!amount) continue;
    const key = matId as GalaxyMaterialId;
    cost[key] = (cost[key] ?? 0) + amount * step;
  }
  return cost;
}

export function getBatchUpgradeCost(unitId: WarRoomUnitId, targetLevel: number, state?: StarholdState): Partial<Record<GalaxyMaterialId, number>> {
  const full = getBatchTrainingCost(unitId, targetLevel);
  let ratio = WARROOM_PRODUCTION_CONFIG.upgradeCostRatio;
  if (state?.synergies?.combined?.upgradeCostReduction) {
    ratio *= (1 - state.synergies.combined.upgradeCostReduction);
  }
  return scaleByRatio(full, ratio);
}

export function getProductionDuration(_unitId: WarRoomUnitId, warroomLevel: number, isUpgrade: boolean): number {
  const speedMult = Math.max(0.2, 1 - Math.max(0, warroomLevel - 1) * WARROOM_LEVEL_CONFIG.productionSpeedPerLevel);
  const base = Math.round(WARROOM_PRODUCTION_CONFIG.baseProductionTicksPerBatch * speedMult);
  if (isUpgrade) return Math.max(1, Math.round(base * WARROOM_PRODUCTION_CONFIG.upgradeDurationRatio));
  return Math.max(1, base);
}

export function getProductionDurationMs(unitId: WarRoomUnitId, warroomLevel: number, isUpgrade: boolean): number {
  return getProductionDuration(unitId, warroomLevel, isUpgrade) * 1000;
}

export function canTrainUnit(state: StarholdState, unitId: WarRoomUnitId, level: number): boolean {
  if (!state.warRoom?.online) return false;
  if (state.warRoom.productionSlots[unitId]) return false;
  const unlockAt = WARROOM_LEVEL_CONFIG.unitUnlockLevels[unitId] ?? 1;
  if (state.warRoom.level < unlockAt) return false;
  if (level < 1 || level > getMaxUnitLevel(state.warRoom.level)) return false;
  const batchSize = getBatchSize(state.warRoom.level);
  if (getTotalGarrison(state.warRoom.garrison) + batchSize > WARROOM_PRODUCTION_CONFIG.garrisonCap) return false;
  const inventory = loadSavedGalaxyInventory();
  return canAfford(inventory, getBatchTrainingCost(unitId, level));
}

export function canUpgradeUnit(state: StarholdState, unitId: WarRoomUnitId, fromLevel: number): boolean {
  if (!state.warRoom?.online) return false;
  if (state.warRoom.productionSlots[unitId]) return false;
  const targetLevel = fromLevel + 1;
  if (targetLevel > getMaxUnitLevel(state.warRoom.level)) return false;
  const entries = state.warRoom.garrison[unitId] ?? [];
  if (getLevelCount(entries, fromLevel) <= 0) return false;
  const inventory = loadSavedGalaxyInventory();
  return canAfford(inventory, getBatchUpgradeCost(unitId, targetLevel, state));
}

export function startTraining(state: StarholdState, unitId: WarRoomUnitId, level: number): StarholdState {
  if (!canTrainUnit(state, unitId, level)) return state;
  const cost = getBatchTrainingCost(unitId, level);
  const duration = getProductionDuration(unitId, state.warRoom.level, false);
  const batchSize = getBatchSize(state.warRoom.level);
  const inventory = loadSavedGalaxyInventory();
  saveGalaxyInventory(applyCost(inventory, cost, -1));

  const slot: WarRoomProductionSlot = {
    unitId,
    isUpgrade: false,
    batchSize,
    targetLevel: level,
    startedAt: Date.now(),
    completesAt: Date.now() + duration * 1000,
    spentCost: cost,
  };

  const unitName = WARROOM_UNITS[unitId].name;
  const text = {
    en: `${unitName.en} batch started (x${batchSize}, Lv${level}).`,
    hu: `${unitName.hu} batch elindult (x${batchSize}, Lv${level}).`,
    de: `${unitName.de} Batch gestartet (x${batchSize}, Lv${level}).`,
    ro: `Batch ${unitName.ro} pornit (x${batchSize}, Lv${level}).`,
  };

  return {
    ...state,
    warRoom: {
      ...state.warRoom,
      productionSlots: {
        ...state.warRoom.productionSlots,
        [unitId]: slot,
      },
    },
    alert: text,
    journal: pushJournal(state, text),
  };
}

export function startUpgrade(state: StarholdState, unitId: WarRoomUnitId, fromLevel: number, count: number): StarholdState {
  if (!canUpgradeUnit(state, unitId, fromLevel)) return state;
  const targetLevel = fromLevel + 1;
  const entries = state.warRoom.garrison[unitId] ?? [];
  const available = getLevelCount(entries, fromLevel);
  const reserve = Math.max(1, Math.min(count, available));
  const cost = getBatchUpgradeCost(unitId, targetLevel, state);
  const duration = getProductionDuration(unitId, state.warRoom.level, true);
  const inventory = loadSavedGalaxyInventory();
  if (!canAfford(inventory, cost)) return state;
  saveGalaxyInventory(applyCost(inventory, cost, -1));

  const slot: WarRoomProductionSlot = {
    unitId,
    isUpgrade: true,
    batchSize: reserve,
    targetLevel,
    startedAt: Date.now(),
    completesAt: Date.now() + duration * 1000,
    reservedCount: reserve,
    reservedFromLevel: fromLevel,
    spentCost: cost,
  };

  const updatedEntries = removeGarrisonEntries(entries, fromLevel, reserve);
  const unitName = WARROOM_UNITS[unitId].name;
  const text = {
    en: `${unitName.en} upgrade started (${reserve} units Lv${fromLevel} -> Lv${targetLevel}).`,
    hu: `${unitName.hu} fejlesztes indult (${reserve} egyseg Lv${fromLevel} -> Lv${targetLevel}).`,
    de: `${unitName.de} Upgrade gestartet (${reserve} Einheiten Lv${fromLevel} -> Lv${targetLevel}).`,
    ro: `Upgrade ${unitName.ro} pornit (${reserve} unitati Lv${fromLevel} -> Lv${targetLevel}).`,
  };

  return {
    ...state,
    warRoom: {
      ...state.warRoom,
      productionSlots: {
        ...state.warRoom.productionSlots,
        [unitId]: slot,
      },
      garrison: {
        ...state.warRoom.garrison,
        [unitId]: updatedEntries,
      },
    },
    alert: text,
    journal: pushJournal(state, text),
  };
}

export function cancelProduction(state: StarholdState, unitId: WarRoomUnitId): StarholdState {
  const slot = state.warRoom.productionSlots[unitId];
  if (!slot) return state;
  const refund = scaleByRatio(slot.spentCost ?? {}, WARROOM_PRODUCTION_CONFIG.cancelRefundRatio);
  const inventory = loadSavedGalaxyInventory();
  saveGalaxyInventory(applyCost(inventory, refund, 1));

  const restoredEntries = slot.isUpgrade
    ? addGarrisonEntries(
      state.warRoom.garrison[unitId] ?? [],
      slot.reservedFromLevel ?? Math.max(1, slot.targetLevel - 1),
      slot.reservedCount ?? slot.batchSize,
    )
    : state.warRoom.garrison[unitId] ?? [];

  const text = {
    en: "Production cancelled. 50% materials refunded.",
    hu: "Gyartas megszakitva. 50% anyag visszateritve.",
    de: "Produktion abgebrochen. 50% Material erstattet.",
    ro: "Productie anulata. 50% materiale rambursate.",
  };

  return {
    ...state,
    warRoom: {
      ...state.warRoom,
      productionSlots: {
        ...state.warRoom.productionSlots,
        [unitId]: null,
      },
      garrison: {
        ...state.warRoom.garrison,
        [unitId]: restoredEntries,
      },
    },
    alert: text,
    journal: pushJournal(state, text),
  };
}

export function tickWarroomProduction(state: StarholdState): StarholdState {
  if (!state.warRoom?.online) return state;
  let next = state;
  let changed = false;
  const now = Date.now();

  (Object.keys(state.warRoom.productionSlots) as WarRoomUnitId[]).forEach((unitId) => {
    const slot = next.warRoom.productionSlots[unitId];
    if (!slot) return;
    if (now < slot.completesAt) {
      return;
    }

    const unitName = WARROOM_UNITS[unitId].name;
    const nextEntries = slot.isUpgrade
      ? mergeGarrisonEntries(next.warRoom.garrison[unitId] ?? [], (slot.upgradedEntries ?? [{ level: slot.targetLevel - 1, count: slot.reservedCount ?? slot.batchSize }]).map(e => ({ ...e, level: slot.targetLevel })))
      : mergeGarrisonEntries(next.warRoom.garrison[unitId] ?? [], [{ level: slot.targetLevel, count: slot.batchSize }]);
    const text = slot.isUpgrade
      ? {
        en: `${unitName.en} upgrade completed (Lv${slot.targetLevel}).`,
        hu: `${unitName.hu} fejlesztes kesz (Lv${slot.targetLevel}).`,
        de: `${unitName.de} Upgrade abgeschlossen (Lv${slot.targetLevel}).`,
        ro: `Upgrade ${unitName.ro} finalizat (Lv${slot.targetLevel}).`,
      }
      : {
        en: `${unitName.en} batch completed (x${slot.batchSize}, Lv${slot.targetLevel}).`,
        hu: `${unitName.hu} batch kesz (x${slot.batchSize}, Lv${slot.targetLevel}).`,
        de: `${unitName.de} Batch abgeschlossen (x${slot.batchSize}, Lv${slot.targetLevel}).`,
        ro: `Batch ${unitName.ro} finalizat (x${slot.batchSize}, Lv${slot.targetLevel}).`,
      };

    next = {
      ...next,
      warRoom: {
        ...next.warRoom,
        productionSlots: {
          ...next.warRoom.productionSlots,
          [unitId]: null,
        },
        garrison: {
          ...next.warRoom.garrison,
          [unitId]: nextEntries,
        },
      },
      alert: text,
      journal: pushJournal(next, text),
    };
    changed = true;
  });

  return changed ? next : state;
}

// Backward-compatible wrappers
export function cancelTraining(state: StarholdState): StarholdState {
  const active = (Object.entries(state.warRoom.productionSlots) as [WarRoomUnitId, WarRoomProductionSlot | null][])
    .find(([, slot]) => slot !== null)?.[0];
  if (!active) return state;
  return cancelProduction(state, active);
}
