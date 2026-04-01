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
    const migratedScavengeOperation =
      parsed.scavengeOperation ??
      (parsed.activeOperation?.type === "scavenge"
        ? {
            startedTick: parsed.activeOperation.startedTick ?? parsed.tick,
            cycleDuration: parsed.activeOperation.duration ?? 6,
            remaining: parsed.activeOperation.remaining ?? parsed.activeOperation.duration ?? 6,
            completedCycles: 0,
          }
        : null);

    let migratedThreat = {
      ...parsed.threat,
    };

    if (!parsed.avatarAwake && parsed.threat.aftershock === 0) {
      if ((parsed.threatCycle ?? 0) === 0 && parsed.tick < 120) {
        migratedThreat = {
          ...migratedThreat,
          type: "distortionWave",
          countdown: Math.max(1, 120 - parsed.tick),
          totalDuration: 120,
          intensity: 1,
        };
      } else if ((parsed.threatCycle ?? 0) === 1 && parsed.tick < 240) {
        migratedThreat = {
          ...migratedThreat,
          type: "distortionWave",
          countdown: Math.max(1, 240 - parsed.tick),
          totalDuration: 120,
          intensity: Math.max(1, migratedThreat.intensity ?? 1),
        };
      }
    }

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
      firstLoopComplete: parsed.firstLoopComplete ?? parsed.avatarAwake ?? false,
      firstLoopShown: parsed.firstLoopShown ?? false,
      eventQuietTicks: parsed.eventQuietTicks ?? 0,
      worldPulse: parsed.worldPulse ?? 0,
      worldPhase: parsed.worldPhase ?? 0,
      activeOperation: parsed.activeOperation?.type === "scavenge" ? null : parsed.activeOperation ?? null,
      scavengeOperation: migratedScavengeOperation,
      threat: {
        ...migratedThreat,
        pausedUntilAwake: migratedThreat.pausedUntilAwake ?? false,
      },
      reactorRecovery: parsed.reactorRecovery ?? {
        active: false,
        completedStabilizations: 0,
        nextPromptTick: 0,
      },
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
