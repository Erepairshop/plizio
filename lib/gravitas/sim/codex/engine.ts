import type { StarholdState } from "../types";
import type { CodexState, CodexUnlockCondition } from "./types";
import { CODEX_ENTRIES } from "./entries";

export function createInitialCodexState(): CodexState {
  return {
    unlockedEntries: [],
    readEntries: [],
    lastUnlockedAt: null,
  };
}

function isConditionMet(state: StarholdState, condition: CodexUnlockCondition): boolean {
  switch (condition.type) {
    case "always":
      return true;
    case "coreLevelReached":
      return state.moduleLevels.core >= condition.level;
    case "moduleUsed":
      // Since tracking specific module activation might require deep state inspection,
      // we check if it is online and has some integrity.
      return state.modules[condition.moduleId as keyof typeof state.modules]?.online ?? false;
    case "battleWon":
      return state.battleState.battleHistory.filter(h => h.victory).length >= condition.count;
    case "phaseReached":
      return state.chapter === condition.phase || state.phase === condition.phase;
    case "systemUsed":
      switch (condition.system) {
        case "espionage":
          return state.espionage.missions.length > 0 || state.espionage.extractedCount > 0;
        case "research":
          return state.research.completed.length > 0 || state.research.active !== null;
        case "trade":
          return state.tradeSystem.offers.length > 0; // Or track accepted trades if we wanted
        case "dilemma":
          return state.dilemmaSystem.resolvedDilemmas.length > 0;
        default:
          return false;
      }
    default:
      return false;
  }
}

export function tickCodex(state: StarholdState): StarholdState {
  // Only run this occasionally
  if (state.tick % 60 !== 0) return state;

  let mutated = false;
  const newUnlocked: string[] = [];

  for (const entry of CODEX_ENTRIES) {
    if (!state.codex.unlockedEntries.includes(entry.id)) {
      if (isConditionMet(state, entry.unlockCondition)) {
        newUnlocked.push(entry.id);
        mutated = true;
      }
    }
  }

  if (mutated) {
    return {
      ...state,
      codex: {
        ...state.codex,
        unlockedEntries: [...state.codex.unlockedEntries, ...newUnlocked],
        lastUnlockedAt: Date.now(),
      }
    };
  }

  return state;
}