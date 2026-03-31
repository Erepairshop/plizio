import type { StarholdState } from "./types";

const SAVE_KEY = "gravitas_save_v1";
const MAX_JOURNAL_ENTRIES = 20;

export function saveGravitasState(state: StarholdState): void {
  if (state.tick % 5 !== 0) return;
  try {
    const toSave: StarholdState = {
      ...state,
      journal: state.journal.slice(0, MAX_JOURNAL_ENTRIES),
    };
    localStorage.setItem(SAVE_KEY, JSON.stringify(toSave));
  } catch {
    // localStorage may be full or unavailable — fail silently
  }
}

export function loadGravitasState(): StarholdState | null {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as StarholdState;
    // Basic sanity check — ensure core fields exist
    if (
      typeof parsed.tick !== "number" ||
      !parsed.phase ||
      !parsed.resources ||
      !parsed.modules
    ) {
      return null;
    }
    // Backward compatibility for new fields
    return {
      ...parsed,
      threatCycle: parsed.threatCycle ?? 0,
      lastAvatarPulse: parsed.lastAvatarPulse ?? -100,
      lowEntropyStreak: parsed.lowEntropyStreak ?? 0,
      highStabilityStreak: parsed.highStabilityStreak ?? 0,
      wasCrisis: parsed.wasCrisis ?? false,
      avatarPulseCount: parsed.avatarPulseCount ?? 0,
      lockdownDuration: parsed.lockdownDuration ?? 0,
      stationLost: parsed.stationLost ?? false,
      firstLoopComplete: parsed.firstLoopComplete ?? false,
      firstLoopShown: parsed.firstLoopShown ?? false,
    };
  } catch {
    return null;
  }
}

export function clearGravitasSave(): void {
  try {
    localStorage.removeItem(SAVE_KEY);
  } catch {
    // fail silently
  }
}
