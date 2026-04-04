import type { StarholdState } from "../types";
import { pushJournal } from "../shared";
import type { WarRoomUnitId } from "../warroom/types";
import { applyWoundedDecay, getRepairSlotCount } from "./repair";
import { mergeGarrisonEntries } from "../warroom/veteran";

export function tickRepairBay(state: StarholdState): StarholdState {
  const expectedSlots = getRepairSlotCount(state.repairBay.level);
  let nextSlots = [...state.repairBay.repairSlots];
  let resized = false;
  if (nextSlots.length < expectedSlots) {
    nextSlots = [...nextSlots, ...Array.from({ length: expectedSlots - nextSlots.length }, () => null)];
    resized = true;
  } else if (nextSlots.length > expectedSlots) {
    nextSlots = nextSlots.slice(0, expectedSlots);
    resized = true;
  }

  let nextState: StarholdState = resized
    ? {
      ...state,
      repairBay: {
        ...state.repairBay,
        repairSlots: nextSlots,
      },
    }
    : state;

  let mutated = nextState !== state;
  let nextGarrison = nextState.warRoom.garrison;
  let nextSlotsMutable = [...nextState.repairBay.repairSlots];
  let completionText: StarholdState["alert"] = null;
  const now = Date.now();

  for (let i = 0; i < nextSlotsMutable.length; i += 1) {
    const slot = nextSlotsMutable[i];
    if (!slot) continue;
    if (!nextState.repairBay.online) continue;
    if (now < slot.completesAt) {
      continue;
    }

    nextGarrison = {
      ...nextGarrison,
      [slot.unitId]: mergeGarrisonEntries(
        nextGarrison[slot.unitId] ?? [],
        slot.repairedEntries ?? [{ level: slot.targetLevel, count: slot.batchSize }]
      )
    };
    nextSlotsMutable[i] = null;
    completionText = {
      en: `Repair complete: ${slot.batchSize} ${slot.unitId} units are combat-ready again.`,
      hu: `Javitas kesz: ${slot.batchSize} ${slot.unitId} egyseg ujra harckesz.`,
      de: `Reparatur abgeschlossen: ${slot.batchSize} ${slot.unitId}-Einheiten sind wieder einsatzbereit.`,
      ro: `Reparatie finalizata: ${slot.batchSize} unitati ${slot.unitId} sunt din nou pregatite.`,
    };
    mutated = true;
  }

  if (mutated) {
    nextState = {
      ...nextState,
      warRoom: {
        ...nextState.warRoom,
        garrison: nextGarrison,
      },
      repairBay: {
        ...nextState.repairBay,
        repairSlots: nextSlotsMutable,
      },
    };
    if (completionText) {
      nextState = {
        ...nextState,
        alert: completionText,
        journal: pushJournal(nextState, completionText),
      };
    }
  }

  // Heavy decay calculation is capped to once per hour of sim-ticks.
  if (nextState.tick % 3600 === 0) {
    return applyWoundedDecay(nextState);
  }

  return nextState;
}
