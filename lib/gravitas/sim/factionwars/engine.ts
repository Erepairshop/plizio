import type { StarholdState, LocalizedString } from "../types";
import type { FactionWarState, FactionWar } from "./types";
import type { FactionId } from "../faction/types";
import { GALAXY_FACTIONS } from "../battle/factions";
import { pushNotification } from "../notifications/engine";
import { nextRandom, randomInt } from "../rng";

const WAR_DURATION_MS = 24 * 60 * 60 * 1000; // 24 hours
const WAR_COOLDOWN_MS = 48 * 60 * 60 * 1000; // 48 hours between spawns

export function createInitialFactionWarState(): FactionWarState {
  return {
    activeWars: [],
    lastWarSpawnAt: Date.now(),
  };
}

export function tickFactionWars(state: StarholdState): StarholdState {
  if (state.tick % 60 !== 0) return state;

  const now = Date.now();
  let mutated = false;
  let nextActiveWars = [...state.factionWars.activeWars];
  let currentRngState = state.globalRngState;

  // 1. Expire old wars
  const beforeCount = nextActiveWars.length;
  nextActiveWars = nextActiveWars.filter(w => now < w.endsAt);
  if (nextActiveWars.length !== beforeCount) {
    mutated = true;
  }

  // 2. Spawn new war
  if (now - state.factionWars.lastWarSpawnAt > WAR_COOLDOWN_MS && nextActiveWars.length === 0) {
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
      id: `war_${now}_${idRand}`,
      attackerId: factions[attackerIdx],
      defenderId: factions[defenderIdx],
      startedAt: now,
      endsAt: now + WAR_DURATION_MS,
      intensity: 1 + intensityRand,
    };
    
    nextActiveWars.push(newWar);
    mutated = true;
    
    // Notify
    state = pushNotification(
      state,
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
      ...state,
      globalRngState: currentRngState,
      factionWars: {
        activeWars: nextActiveWars,
        lastWarSpawnAt: nextActiveWars.length > beforeCount ? now : state.factionWars.lastWarSpawnAt,
      }
    };
  }

  return { ...state, globalRngState: currentRngState };
}