import type { StarholdState } from "../types";
import type { WarRoomUnitId, GarrisonEntry, UnitAllocation, UnitAllocationStatus } from "./types";
import { takeBestUnits, mergeGarrisonEntries, incrementVeteranStats } from "./veteran";

/**
 * Számolja a szabad egységeket a garrisonban.
 */
export function getAvailableUnits(state: StarholdState): Record<WarRoomUnitId, number> {
  const counts: Record<string, number> = {
    sentinel: 0, vanguard: 0, wraith: 0, nexus: 0,
    korgath_berserker: 0, velari_shadow: 0, drex_marauder: 0, synthoid_titan: 0, noma_weaver: 0
  };
  for (const [unitId, entries] of Object.entries(state.warRoom.garrison)) {
    counts[unitId] = entries.reduce((sum, e) => sum + e.count, 0);
  }
  return counts as Record<WarRoomUnitId, number>;
}

/**
 * Számolja az úton lévő egységeket (traveling + returning).
 */
export function getInTransitUnits(state: StarholdState): Record<WarRoomUnitId, number> {
  const counts: Record<string, number> = {
    sentinel: 0, vanguard: 0, wraith: 0, nexus: 0,
    korgath_berserker: 0, velari_shadow: 0, drex_marauder: 0, synthoid_titan: 0, noma_weaver: 0
  };
  for (const alloc of state.warRoom.allocations) {
    if (alloc.status === "traveling" || alloc.status === "returning") {
      for (const [unitId, entries] of Object.entries(alloc.entries)) {
        const total = entries?.reduce((sum, e) => sum + e.count, 0) ?? 0;
        counts[unitId] = (counts[unitId] || 0) + total;
      }
    }
  }
  return counts as Record<WarRoomUnitId, number>;
}

/**
 * Számolja a munkában lévő egységeket (working).
 */
export function getBusyUnits(state: StarholdState): Record<WarRoomUnitId, number> {
  const counts: Record<string, number> = {
    sentinel: 0, vanguard: 0, wraith: 0, nexus: 0,
    korgath_berserker: 0, velari_shadow: 0, drex_marauder: 0, synthoid_titan: 0, noma_weaver: 0
  };
  for (const alloc of state.warRoom.allocations) {
    if (alloc.status === "working" || alloc.status === "reserved") {
      for (const [unitId, entries] of Object.entries(alloc.entries)) {
        const total = entries?.reduce((sum, e) => sum + e.count, 0) ?? 0;
        counts[unitId] = (counts[unitId] || 0) + total;
      }
    }
  }
  return counts as Record<WarRoomUnitId, number>;
}

/**
 * Számolja a lefoglalt egységeket (bármilyen allocation).
 */
export function getReservedUnits(state: StarholdState): Record<WarRoomUnitId, number> {
  const counts: Record<string, number> = {
    sentinel: 0, vanguard: 0, wraith: 0, nexus: 0,
    korgath_berserker: 0, velari_shadow: 0, drex_marauder: 0, synthoid_titan: 0, noma_weaver: 0
  };
  for (const alloc of state.warRoom.allocations) {
    for (const [unitId, entries] of Object.entries(alloc.entries)) {
      const total = entries?.reduce((sum, e) => sum + e.count, 0) ?? 0;
      counts[unitId] = (counts[unitId] || 0) + total;
    }
  }
  return counts as Record<WarRoomUnitId, number>;
}

/**
 * Teljes egység-főkönyv lekérdezése a UI számára.
 */
export function getUnitLedger(state: StarholdState) {
  return {
    available: getAvailableUnits(state),
    inTransit: getInTransitUnits(state),
    busy: getBusyUnits(state),
    reserved: getReservedUnits(state),
    wounded: state.repairBay.wounded, // A RepairBay-ben lévő egységek
  };
}

export interface ReservationResult {
  success: boolean;
  nextState: StarholdState;
  missingUnits?: Record<WarRoomUnitId, number>;
}

/**
 * Lefoglal egységeket a garrisonból és létrehoz egy új allocation-t.
 * Az egységek kikerülnek a garrisonból.
 */
export function reserveUnits(
  state: StarholdState,
  id: string,
  missionType: UnitAllocation["missionType"],
  composition: Partial<Record<WarRoomUnitId, number>>
): ReservationResult {
  let nextGarrison = { ...state.warRoom.garrison };
  const entries: Partial<Record<WarRoomUnitId, GarrisonEntry[]>> = {};
  const missingUnits: Record<string, number> = {};
  let hasMissing = false;

  for (const [unitId, count] of Object.entries(composition)) {
    if (!count || count <= 0) continue;
    const currentEntries = nextGarrison[unitId as WarRoomUnitId] ?? [];
    const totalAvailable = currentEntries.reduce((s, e) => s + e.count, 0);
    
    if (totalAvailable < count) {
      missingUnits[unitId as WarRoomUnitId] = count - totalAvailable;
      hasMissing = true;
      continue;
    }

    const { remaining, taken } = takeBestUnits(currentEntries, count);
    nextGarrison[unitId as WarRoomUnitId] = remaining;
    entries[unitId as WarRoomUnitId] = taken;
  }

  if (hasMissing) {
    return { success: false, nextState: state, missingUnits: missingUnits as Record<WarRoomUnitId, number> };
  }

  const newAllocation: UnitAllocation = {
    id,
    missionType,
    status: "reserved",
    entries,
    startedAtTick: state.tick,
  };

  return {
    success: true,
    nextState: {
      ...state,
      warRoom: {
        ...state.warRoom,
        garrison: nextGarrison,
        allocations: [...state.warRoom.allocations, newAllocation],
      }
    }
  };
}

/**
 * Frissíti egy létező allocation státuszát és opcionálisan az érkezési idejét.
 */
export function updateAllocationStatus(
  state: StarholdState,
  id: string,
  status: UnitAllocationStatus,
  expectedArrivalTick?: number
): StarholdState {
  const nextAllocations = state.warRoom.allocations.map(a => {
    if (a.id === id) {
      return { ...a, status, expectedArrivalTick: expectedArrivalTick ?? a.expectedArrivalTick };
    }
    return a;
  });

  return {
    ...state,
    warRoom: {
      ...state.warRoom,
      allocations: nextAllocations,
    }
  };
}

/**
 * Felszabadít egy allocation-t. Az egységek visszakerülnek a garrisonba.
 * Minden túlélő egység kap egy veterán pontot (battlesSurvived++).
 */
export function releaseAllocation(state: StarholdState, id: string): StarholdState {
  const alloc = state.warRoom.allocations.find(a => a.id === id);
  if (!alloc) return state;

  let nextGarrison = { ...state.warRoom.garrison };
  let currentRngState = state.globalRngState;

  for (const [unitId, entries] of Object.entries(alloc.entries)) {
    if (!entries) continue;
    
    // Apply veteranization to all returning units
    const veteranized = entries.map(entry => {
      const res = incrementVeteranStats(entry, currentRngState);
      currentRngState = res.nextRng;
      return res.entry;
    });

    nextGarrison[unitId as WarRoomUnitId] = mergeGarrisonEntries(
      nextGarrison[unitId as WarRoomUnitId] ?? [],
      veteranized
    );
  }

  return {
    ...state,
    globalRngState: currentRngState,
    warRoom: {
      ...state.warRoom,
      garrison: nextGarrison,
      allocations: state.warRoom.allocations.filter(a => a.id !== id),
    }
  };
}

/**
 * Felszabadít egy allocation-t veszteségekkel.
 * A veszteségeket az allocation-ben lévő egységekből vonja le (a leggyengébbeket áldozza fel).
 * A túlélők kapnak egy veterán pontot.
 * A sebesültek a RepairBay-be kerülnek.
 */
export function releaseAllocationWithCasualties(
  state: StarholdState,
  id: string,
  killed: Partial<Record<WarRoomUnitId, number>>,
  wounded: Partial<Record<WarRoomUnitId, number>> = {}
): StarholdState {
  const alloc = state.warRoom.allocations.find(a => a.id === id);
  if (!alloc) return state;

  let nextGarrison = { ...state.warRoom.garrison };
  let nextWounded = { ...state.repairBay.wounded };
  let currentRngState = state.globalRngState;
  let movedWounded = 0;

  for (const [unitId, entries] of Object.entries(alloc.entries)) {
    if (!entries) continue;
    
    const killedCount = killed[unitId as WarRoomUnitId] || 0;
    const woundedCount = wounded[unitId as WarRoomUnitId] || 0;
    const totalInAlloc = entries.reduce((s, e) => s + e.count, 0);
    
    // 1. Remove killed (take from worst units)
    const { remaining: afterKilled } = takeBestUnits(entries, totalInAlloc - killedCount);
    
    // 2. Remove wounded (take from worst of survivors)
    const { remaining: survivors, taken: woundedEntries } = takeBestUnits(afterKilled, (totalInAlloc - killedCount) - woundedCount);
    
    // 3. Move wounded to RepairBay
    if (woundedEntries.length > 0) {
      nextWounded[unitId as WarRoomUnitId] = mergeGarrisonEntries(
        nextWounded[unitId as WarRoomUnitId] ?? [],
        woundedEntries
      );
      movedWounded += woundedEntries.reduce((s, e) => s + e.count, 0);
    }

    // 4. Return survivors to Garrison with veteranization
    if (survivors.length > 0) {
      const veteranized = survivors.map(entry => {
        const res = incrementVeteranStats(entry, currentRngState);
        currentRngState = res.nextRng;
        return res.entry;
      });

      nextGarrison[unitId as WarRoomUnitId] = mergeGarrisonEntries(
        nextGarrison[unitId as WarRoomUnitId] ?? [],
        veteranized
      );
    }
  }

  return {
    ...state,
    globalRngState: currentRngState,
    warRoom: {
      ...state.warRoom,
      garrison: nextGarrison,
      allocations: state.warRoom.allocations.filter(a => a.id !== id),
    },
    repairBay: {
      ...state.repairBay,
      wounded: nextWounded,
      woundedAtTick: movedWounded > 0 ? (state.repairBay.woundedAtTick ?? state.tick) : state.repairBay.woundedAtTick,
    }
  };
}

/**
 * Teljes veszteség jelentése (pl. flotta megsemmisült).
 */
export function reportLostAllocation(state: StarholdState, id: string): StarholdState {
  return {
    ...state,
    warRoom: {
      ...state.warRoom,
      allocations: state.warRoom.allocations.filter(a => a.id !== id),
    }
  };
}

/**
 * Automatikus állapotátmenetek kezelése a tick során.
 */
export function tickLedger(state: StarholdState): StarholdState {
  let nextState = state;
  let mutated = false;

  const nextAllocations = state.warRoom.allocations.map(a => {
    // Ha úton volt és megérkezett az ETA-ra
    if (a.status === "traveling" && a.expectedArrivalTick && state.tick >= a.expectedArrivalTick) {
      mutated = true;
      return { ...a, status: "working" as const, expectedArrivalTick: undefined };
    }
    return a;
  });

  if (mutated) {
    nextState = {
      ...nextState,
      warRoom: {
        ...nextState.warRoom,
        allocations: nextAllocations,
      }
    };
  }

  // Automatikus visszatérés kezelése (ha a returning ETA lejárt)
  const arrivedAllocations = nextState.warRoom.allocations.filter(
    a => a.status === "returning" && a.expectedArrivalTick && state.tick >= a.expectedArrivalTick
  );

  for (const alloc of arrivedAllocations) {
    nextState = releaseAllocation(nextState, alloc.id);
  }

  return nextState;
}
