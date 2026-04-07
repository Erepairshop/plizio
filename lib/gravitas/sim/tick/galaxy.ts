import type { StarholdState, LocalizedString } from "../types";
import { advanceCyclePhase, getCycleEffects, CYCLE_PHASE_NAMES } from "../galaxy/cycles";
import { pushJournal } from "../shared";
import { applyNaturalDrift } from "../faction/reputation";
import { getEnemyResetTime, WORLD_LEVEL_TEXTS } from "../battle/worldScaling";

export function tickGalaxyCycle(state: StarholdState): StarholdState {
  let nextState = state;

  if (state.tick >= state.galaxyCycle.phaseEndsAtTick) {
    const nextCycle = advanceCyclePhase(state.galaxyCycle, state.tick);
    const nextPhase = nextCycle.currentPhase;
    const phaseName = CYCLE_PHASE_NAMES[nextPhase];

    const transitionAlert: LocalizedString = {
      en: `The galaxy has entered the ${phaseName.en} phase.`,
      hu: `A galaxis belépett a ${phaseName.hu} fázisba.`,
      de: `Die Galaxie ist in die ${phaseName.de}-Phase eingetreten.`,
      ro: `Galaxia a intrat în faza ${phaseName.ro}.`,
    };

    let hint: LocalizedString | null = null;
    if (nextPhase === "storm") {
      hint = {
        en: "Be careful with mining! Drone reliability is reduced.",
        hu: "Légy óvatos a bányászattal! A drónok megbízhatósága csökkent.",
        de: "Vorsicht beim Bergbau! Die Zuverlässigkeit der Drohnen ist verringert.",
        ro: "Atenție la minerit! Fiabilitatea dronelor este redusă.",
      };
    } else if (nextPhase === "war") {
      hint = {
        en: "Faction tensions are peaking. Expect frequent raids.",
        hu: "A frakciók közötti feszültség a tetőfokára hágott. Gyakori portyákra számíts.",
        de: "Die Spannungen zwischen den Fraktionen nehmen zu. Erwarte häufige Überfälle.",
        ro: "Tensiunile dintre fracțiuni ating cote maxime. Așteaptă-te la raiduri frecvente.",
      };
    }

    nextState = {
      ...state,
      galaxyCycle: nextCycle,
      alert: transitionAlert,
      journal: pushJournal(state, transitionAlert),
    };

    if (hint) {
      nextState.journal = pushJournal(nextState, hint);
    }
  }

  const effects = getCycleEffects(nextState.galaxyCycle.currentPhase);
  if (effects.hullDrainPerTick > 0 && nextState.resources.shield < 30) {
    const nextHull = Math.max(0, nextState.resources.hull - effects.hullDrainPerTick);
    nextState = {
      ...nextState,
      resources: {
        ...nextState.resources,
        hull: nextHull,
      }
    };
  }

  return nextState;
}

export function tickFactionReputation(state: StarholdState): StarholdState {
  if (state.tick - state.factionReputation.lastDriftAtTick >= 86400) {
    return {
      ...state,
      factionReputation: {
        ...applyNaturalDrift(state.factionReputation),
        lastDriftAtTick: state.tick,
      }
    };
  }
  return state;
}

export function tickWorldLevel(state: StarholdState): StarholdState {
  const coreLevel = state.moduleLevels.core;
  
  if (state.worldLevelPending && state.tick >= state.worldLevelPending.scheduledAtTick) {
    const nextLevel = state.worldLevelPending.targetLevel;
    return {
      ...state,
      worldLevel: nextLevel,
      worldLevelPending: null,
      alert: WORLD_LEVEL_TEXTS.changed,
      journal: pushJournal(state, WORLD_LEVEL_TEXTS.changed),
    };
  }

  if (!state.worldLevelPending && coreLevel > state.worldLevel) {
    const { time: delay, nextRng: rRng } = getEnemyResetTime(state.globalRngState);
    const delayTicks = Math.floor(delay / 1000);
    return {
      ...state,
      globalRngState: rRng,
      worldLevelPending: {
        targetLevel: coreLevel,
        scheduledAtTick: state.tick + delayTicks,
      },
      alert: WORLD_LEVEL_TEXTS.pending,
    };
  }

  if (state.worldLevelPending && coreLevel > state.worldLevelPending.targetLevel) {
    return {
      ...state,
      worldLevelPending: {
        ...state.worldLevelPending,
        targetLevel: coreLevel,
      }
    };
  }

  return state;
}
