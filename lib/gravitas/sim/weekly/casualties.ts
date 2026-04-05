import type { StarholdState } from "../types";
import type { BattleResult } from "../battle/types";
import { takeBestUnits, incrementVeteranStats, mergeGarrisonEntries } from "../warroom/veteran";
import { calculateCasualties } from "../battle/casualties";

export function applyWeeklyWaveCasualtiesToState(
  state: StarholdState,
  result: BattleResult
): { 
  nextState: StarholdState; 
  computedCasualties: { killed: Record<string, number>; wounded: Record<string, number> };
} {
  const computedCasualties = result.casualties ?? calculateCasualties(
    result.stats.unitsSent ?? result.stats.unitsLost,
    {
      victory: result.victory,
      damageDealt: result.stats.damageDealt,
      damageReceived: result.stats.damageReceived,
    },
    false,
  );

  // Synergy effects on casualties
  const syn = state.synergies.combined;
  if (syn.casualtyReduction) {
    Object.keys(computedCasualties.killed).forEach(k => {
      const unitId = k as import("../warroom/types").WarRoomUnitId;
      computedCasualties.killed[unitId] = Math.floor((computedCasualties.killed[unitId] || 0) * (1 - syn.casualtyReduction!));
    });
    Object.keys(computedCasualties.wounded).forEach(k => {
      const unitId = k as import("../warroom/types").WarRoomUnitId;
      computedCasualties.wounded[unitId] = Math.floor((computedCasualties.wounded[unitId] || 0) * (1 - syn.casualtyReduction!));
    });
  }
  if (result.victory && syn.instantHealRatio) {
    Object.keys(computedCasualties.wounded).forEach(k => {
      const unitId = k as import("../warroom/types").WarRoomUnitId;
      const healCount = Math.floor((computedCasualties.wounded[unitId] || 0) * syn.instantHealRatio!);
      computedCasualties.wounded[unitId] = Math.max(0, (computedCasualties.wounded[unitId] || 0) - healCount);
    });
  }

  const updatedGarrison = { ...state.warRoom.garrison };
  const updatedWounded = { ...state.repairBay.wounded };
  let movedWounded = 0;

  Object.keys(updatedGarrison).forEach((rawUnitId) => {
    const unitId = rawUnitId as import("../warroom/types").WarRoomUnitId;
    const sent = result.stats.unitsSent?.[unitId] ?? 0;
    const killed = Math.max(0, Math.floor((computedCasualties.killed as Record<string, number>)[unitId] ?? 0));
    const wounded = Math.max(0, Math.floor((computedCasualties.wounded as Record<string, number>)[unitId] ?? 0));
    
    let entries = updatedGarrison[unitId] ?? [];
    
    if (sent > 0) {
      const { remaining: stayInBase, taken: armyEntries } = takeBestUnits(entries, sent);
      
      const killedResult = takeBestUnits(armyEntries, killed);
      let survivingArmy = killedResult.remaining;
      
      const woundedResult = takeBestUnits(survivingArmy, wounded);
      survivingArmy = woundedResult.remaining;
      const woundedArmy = woundedResult.taken;
      
      let currentRngState = state.globalRngState;

      const veteranizedSurviving = survivingArmy.map(entry => {
        const res = incrementVeteranStats(entry, currentRngState);
        currentRngState = res.nextRng;
        return res.entry;
      });
      const veteranizedWounded = woundedArmy.map(entry => {
        const res = incrementVeteranStats(entry, currentRngState);
        currentRngState = res.nextRng;
        return res.entry;
      });

      state = { ...state, globalRngState: currentRngState };

      entries = mergeGarrisonEntries(stayInBase, veteranizedSurviving);      
      movedWounded += veteranizedWounded.reduce((sum, e) => sum + e.count, 0);
      if (veteranizedWounded.length > 0) {
        updatedWounded[unitId] = mergeGarrisonEntries(updatedWounded[unitId] ?? [], veteranizedWounded);
      }
    }
    
    updatedGarrison[unitId] = entries;
  });

  return {
    computedCasualties,
    nextState: {
      ...state,
      warRoom: {
        ...state.warRoom,
        garrison: updatedGarrison,
      },
      repairBay: {
        ...state.repairBay,
        wounded: updatedWounded,
        woundedAt: movedWounded > 0 ? (state.repairBay.woundedAt ?? Date.now()) : state.repairBay.woundedAt,
      },
    }
  };
}
