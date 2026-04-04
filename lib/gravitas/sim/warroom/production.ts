import type { StarholdState } from "../types";
import type { WarRoomUnitId } from "./types";
import { WARROOM_UNITS } from "./units";
import { pushJournal } from "../shared";
import type { GalaxyInventory, GalaxyMaterialId } from "../../world/mission";
import { loadSavedGalaxyInventory, saveGalaxyInventory } from "../../world/mission";

// ── Inventory helpers ─────────────────────────────────────────

function canAfford(inventory: GalaxyInventory, cost: Partial<Record<GalaxyMaterialId, number>>): boolean {
  for (const [matId, amount] of Object.entries(cost)) {
    if (amount && inventory[matId as GalaxyMaterialId] < amount) return false;
  }
  return true;
}

function deductCost(inventory: GalaxyInventory, cost: Partial<Record<GalaxyMaterialId, number>>): GalaxyInventory {
  const next = { ...inventory };
  for (const [matId, amount] of Object.entries(cost)) {
    if (amount) next[matId as GalaxyMaterialId] = Math.max(0, next[matId as GalaxyMaterialId] - amount);
  }
  return next;
}

function refundCost(inventory: GalaxyInventory, cost: Partial<Record<GalaxyMaterialId, number>>, ratio: number): GalaxyInventory {
  const next = { ...inventory };
  for (const [matId, amount] of Object.entries(cost)) {
    if (amount) next[matId as GalaxyMaterialId] += Math.floor(amount * ratio);
  }
  return next;
}

// ── Validation ─────────────────────────────────────────────────

export function canTrainUnit(state: StarholdState, unitId: WarRoomUnitId): boolean {
  if (!state.warRoom) return false;
  const def = WARROOM_UNITS[unitId];
  if (!def) return false;
  if (def.minLevel > state.warRoom.level) return false;
  if (state.warRoom.productionSlot !== null) return false;
  if (!state.warRoom.online) return false;
  // Max count check
  if (state.warRoom.garrison[unitId] >= def.maxCount) return false;
  // Material cost check (reads from localStorage)
  const inventory = loadSavedGalaxyInventory();
  if (!canAfford(inventory, def.cost)) return false;
  return true;
}

// ── Start training ─────────────────────────────────────────────

export function startTraining(state: StarholdState, unitId: WarRoomUnitId): StarholdState {
  const def = WARROOM_UNITS[unitId];
  if (!def) return state;

  // Deduct materials from galaxy inventory
  const inventory = loadSavedGalaxyInventory();
  if (!canAfford(inventory, def.cost)) return state;
  saveGalaxyInventory(deductCost(inventory, def.cost));

  const journalText = {
    en: `Training ${def.name.en} started.`,
    hu: `${def.name.hu} kiképzés elindult.`,
    de: `Ausbildung: ${def.name.de} begonnen.`,
    ro: `Antrenament ${def.name.ro} început.`,
  };

  return {
    ...state,
    warRoom: {
      ...state.warRoom,
      productionSlot: {
        unitId,
        startedTick: state.tick,
        duration: def.productionTicks,
        remaining: def.productionTicks,
      },
    },
    alert: journalText,
    journal: pushJournal(state, journalText),
  };
}

// ── Cancel training (50% refund) ───────────────────────────────

export function cancelTraining(state: StarholdState): StarholdState {
  const slot = state.warRoom.productionSlot;
  if (!slot) return state;

  const def = WARROOM_UNITS[slot.unitId];

  // Refund 50% of materials to galaxy inventory
  const inventory = loadSavedGalaxyInventory();
  saveGalaxyInventory(refundCost(inventory, def.cost, 0.5));

  const cancelText = {
    en: "Training cancelled. Partial resources recovered.",
    hu: "Kiképzés visszavonva. Részleges visszatérítés.",
    de: "Ausbildung abgebrochen. Teilweise Rückerstattung.",
    ro: "Antrenament anulat. Resurse parțial recuperate.",
  };

  return {
    ...state,
    warRoom: { ...state.warRoom, productionSlot: null },
    alert: cancelText,
    journal: pushJournal(state, cancelText),
  };
}
