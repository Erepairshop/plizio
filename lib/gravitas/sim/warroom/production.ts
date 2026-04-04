import type { StarholdState } from "../types";
import type { WarRoomUnitId } from "./types";
import { WARROOM_UNITS } from "./units";
import { addResourceDelta, pushJournal } from "../shared";

// ── Validation ─────────────────────────────────────────────────

export function canTrainUnit(state: StarholdState, unitId: WarRoomUnitId): boolean {
  const def = WARROOM_UNITS[unitId];
  if (!def) return false;
  if (def.minLevel > state.warRoom.level) return false;
  if (state.warRoom.productionSlot !== null) return false;
  if (!state.modules.warroom?.online) return false;
  if (state.resources.materials < def.cost.materials) return false;
  if (def.cost.power && state.resources.power < def.cost.power) return false;
  return true;
}

// ── Start training ─────────────────────────────────────────────

export function startTraining(state: StarholdState, unitId: WarRoomUnitId): StarholdState {
  const def = WARROOM_UNITS[unitId];
  if (!def) return state;

  const costDelta: Partial<Record<"power" | "materials" | "stability" | "activation", number>> = {
    materials: -def.cost.materials,
  };
  if (def.cost.power) costDelta.power = -def.cost.power;

  const journalText = {
    en: `Training ${def.name.en} started.`,
    hu: `${def.name.hu} kiképzés elindult.`,
    de: `Ausbildung: ${def.name.de} begonnen.`,
    ro: `Antrenament ${def.name.ro} început.`,
  };

  return {
    ...state,
    resources: addResourceDelta(state.resources, costDelta),
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
  const refund: Partial<Record<"power" | "materials" | "stability" | "activation", number>> = {
    materials: Math.floor(def.cost.materials * 0.5),
  };
  if (def.cost.power) refund.power = Math.floor(def.cost.power * 0.5);

  const cancelText = {
    en: "Training cancelled. Partial resources recovered.",
    hu: "Kiképzés visszavonva. Részleges visszatérítés.",
    de: "Ausbildung abgebrochen. Teilweise Rückerstattung.",
    ro: "Antrenament anulat. Resurse parțial recuperate.",
  };

  return {
    ...state,
    resources: addResourceDelta(state.resources, refund),
    warRoom: { ...state.warRoom, productionSlot: null },
    alert: cancelText,
    journal: pushJournal(state, cancelText),
  };
}
