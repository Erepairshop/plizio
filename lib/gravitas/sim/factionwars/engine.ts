import type { StarholdState, LocalizedString } from "../types";
import type { FactionWarState, FactionWar } from "./types";
import type { FactionId } from "../faction/types";
import { GALAXY_FACTIONS } from "../battle/factions";
import { pushNotification } from "../notifications/engine";
import { applyReputationChange } from "../faction/reputation";
import { nextRandom, randomInt } from "../rng";

const WAR_DURATION_TICKS = 24 * 60 * 60; // 24 hours in ticks
const WAR_COOLDOWN_TICKS = 48 * 60 * 60; // 48 hours between spawns

export function createInitialFactionWarState(currentTick: number = 0): FactionWarState {
  return {
    activeWars: [],
    lastWarSpawnAtTick: currentTick,
  };
}

export function tickFactionWars(state: StarholdState): StarholdState {
  if (state.tick % 60 !== 0) return state;

  let mutated = false;
  let nextActiveWars = [...state.factionWars.activeWars];
  let currentRngState = state.globalRngState;
  let nextReputation = state.factionReputation.reputation;
  let nextState = state;

  // 1. Expire old wars and resolve outcomes
  const beforeCount = nextActiveWars.length;
  const expiredWars = nextActiveWars.filter(w => state.tick >= w.endsAtTick);
  nextActiveWars = nextActiveWars.filter(w => state.tick < w.endsAtTick);
  
  if (expiredWars.length > 0) {
    mutated = true;
    for (const war of expiredWars) {
       const { value: rWin, nextState: sWin } = nextRandom(currentRngState);
       currentRngState = sWin;
       const winnerId = rWin > 0.5 ? war.attackerId : war.defenderId;
       const loserId = rWin > 0.5 ? war.defenderId : war.attackerId;
       
       nextState = pushNotification(
         nextState,
         "system",
         { en: "Faction War Ended", hu: "Frakció Háború Véget Ért", de: "Fraktionskrieg beendet", ro: "Război de Facțiuni Încheiat" },
         { 
           en: `${GALAXY_FACTIONS[winnerId].name.en} emerged victorious against ${GALAXY_FACTIONS[loserId].name.en}.`, 
           hu: `${GALAXY_FACTIONS[winnerId].name.hu} győzedelmeskedett a(z) ${GALAXY_FACTIONS[loserId].name.hu} felett.`, 
           de: `${GALAXY_FACTIONS[winnerId].name.de} siegte über ${GALAXY_FACTIONS[loserId].name.de}.`, 
           ro: `${GALAXY_FACTIONS[winnerId].name.ro} a ieșit victorios împotriva ${GALAXY_FACTIONS[loserId].name.ro}.` 
         },
         "Info"
       );
       
       // Deterministic market/player impact
       const winnerRep = nextReputation[winnerId] ?? 0;
       if (winnerRep > 20) {
         nextReputation = applyReputationChange(nextReputation, winnerId, 5, "event", nextState);
       } else if (winnerRep < -20) {
         nextReputation = applyReputationChange(nextReputation, winnerId, -5, "event", nextState);
       }
    }
  }

  // 2. Spawn new war
  if (state.tick - state.factionWars.lastWarSpawnAtTick > WAR_COOLDOWN_TICKS && nextActiveWars.length === 0) {
    const factions = Object.keys(GALAXY_FACTIONS) as FactionId[];
    
    const { value: attackerIdx, nextState: s1 } = randomInt(currentRngState, 0, factions.length - 1);
    currentRngState = s1;
    
    let defenderIdx = attackerIdx;
    while (defenderIdx === attackerIdx) {
      const { value: dIdx, nextState: s2 } = randomInt(currentRngState, 0, factions.length - 1);
      defenderIdx = dIdx;
      currentRngState = s2;
    }
    
    const { value: idRand, nextState: s3 } = randomInt(currentRngState, 0, 999);
    currentRngState = s3;

    const { value: intensityRand, nextState: s4 } = randomInt(currentRngState, 0, 4);
    currentRngState = s4;

    const newWar: FactionWar = {
      id: `war_${state.tick}_${idRand}`,
      attackerId: factions[attackerIdx],
      defenderId: factions[defenderIdx],
      startedAtTick: state.tick,
      endsAtTick: state.tick + WAR_DURATION_TICKS,
      intensity: 1 + intensityRand,
    };
    
    nextActiveWars.push(newWar);
    mutated = true;
    
    // Notify
    nextState = pushNotification(
      nextState,
      "system",
      { en: "Faction War Declared", hu: "Frakció Háború Kitört", de: "Fraktionskrieg erklärt", ro: "Război de Facțiuni Declarat" },
      { 
        en: `${GALAXY_FACTIONS[newWar.attackerId].name.en} declared war on ${GALAXY_FACTIONS[newWar.defenderId].name.en}!`, 
        hu: `${GALAXY_FACTIONS[newWar.attackerId].name.hu} hadat üzent a(z) ${GALAXY_FACTIONS[newWar.defenderId].name.hu} frakciónak!`, 
        de: `${GALAXY_FACTIONS[newWar.attackerId].name.de} hat ${GALAXY_FACTIONS[newWar.defenderId].name.de} den Krieg erklärt!`, 
        ro: `${GALAXY_FACTIONS[newWar.attackerId].name.ro} a declarat război facțiunii ${GALAXY_FACTIONS[newWar.defenderId].name.ro}!` 
      },
      "AlertTriangle"
    );
  }

  if (mutated) {
    return {
      ...nextState,
      globalRngState: currentRngState,
      factionReputation: {
        ...nextState.factionReputation,
        reputation: nextReputation,
      },
      factionWars: {
        activeWars: nextActiveWars,
        lastWarSpawnAtTick: nextActiveWars.length > beforeCount ? state.tick : state.factionWars.lastWarSpawnAtTick,
      }
    };
  }

  return { ...state, globalRngState: currentRngState };
}