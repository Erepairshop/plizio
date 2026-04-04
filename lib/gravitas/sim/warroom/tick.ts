import type { StarholdState } from "../types";
import { pushJournal } from "../shared";
import { WARROOM_UNITS } from "./units";

// ── Per-tick production advancement ────────────────────────────

export function tickWarRoom(state: StarholdState): StarholdState {
  if (!state.warRoom) return state;
  const slot = state.warRoom.productionSlot;
  if (!slot) return state;

  // Production pauses when war-room is offline — NOT cancelled
  if (!state.warRoom.online) return state;

  const remaining = slot.remaining - 1;

  // Unit complete
  if (remaining <= 0) {
    const def = WARROOM_UNITS[slot.unitId];
    const newGarrison = { ...state.warRoom.garrison };
    newGarrison[slot.unitId] = (newGarrison[slot.unitId] || 0) + 1;

    const doneText = {
      en: `${def.name.en} training complete. Unit ready.`,
      hu: `${def.name.hu} kiképzés kész. Egység bevethető.`,
      de: `${def.name.de}-Ausbildung abgeschlossen. Einheit bereit.`,
      ro: `Antrenament ${def.name.ro} finalizat. Unitatea e gata.`,
    };

    return {
      ...state,
      warRoom: {
        ...state.warRoom,
        productionSlot: null,
        garrison: newGarrison,
      },
      alert: doneText,
      journal: pushJournal(state, doneText),
    };
  }

  // Still training — decrement remaining
  return {
    ...state,
    warRoom: {
      ...state.warRoom,
      productionSlot: { ...slot, remaining },
    },
  };
}
