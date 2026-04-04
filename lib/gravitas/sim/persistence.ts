import type { StarholdState } from "./types";
import { inferBootstrapChecklist } from "./bootstrap";
import { normalizeRepairChallenge } from "./events";
import { normalizeContinuationState } from "./continuation";
import { createInitialWarRoom } from "./warroom";

const SAVE_KEY_PREFIX = "gravitas_save_v2";
const FALLBACK_SAVE_KEY = "gravitas_save_v1";
const MAX_JOURNAL_ENTRIES = 20;

function getSaveKey(): string {
  if (typeof window === "undefined") return SAVE_KEY_PREFIX;
  const userKey = localStorage.getItem("plizio_username_id") || localStorage.getItem("plizio_username") || "anonymous";
  return `${SAVE_KEY_PREFIX}_${userKey}`;
}

const CONTINUATION_DAILY_WAVE_TICKS = 24 * 60 * 60;

function sanitizeContinuationState(state: StarholdState): StarholdState {
  return normalizeContinuationState({
    ...state,
    highStability: true,
    recoveryPriority: null,
    marks: {
      reactorScar: 0,
      shellStrain: 0,
      supplyStress: 0,
      voidEcho: 0,
    },
    anomalies: [],
    resources: {
      ...state.resources,
      materials: Math.max(1_000, state.resources.materials),
    },
    threat: {
      ...state.threat,
      countdown: state.threat.countdown > 0 ? state.threat.countdown : CONTINUATION_DAILY_WAVE_TICKS,
      totalDuration: state.threat.totalDuration > 0 ? state.threat.totalDuration : CONTINUATION_DAILY_WAVE_TICKS,
      pausedUntilAwake: false,
    },
    modules: {
      reactor: {
        ...state.modules.reactor,
        online: true,
        integrity: Math.max(82, state.modules.reactor.integrity),
        load: Math.min(18, state.modules.reactor.load),
      },
      logistics: {
        ...state.modules.logistics,
        online: true,
        integrity: Math.max(82, state.modules.logistics.integrity),
        load: Math.min(12, state.modules.logistics.load),
      },
      core: {
        ...state.modules.core,
        online: true,
        integrity: Math.max(86, state.modules.core.integrity),
        load: Math.min(16, state.modules.core.load),
      },
      sensor: {
        ...state.modules.sensor,
        online: true,
        integrity: Math.max(82, state.modules.sensor.integrity),
        load: Math.min(10, state.modules.sensor.load),
      },
    },
  });
}

export function saveGravitasState(state: StarholdState): void {
  if (state.tick % 5 !== 0) return;
  try {
    const toSave: StarholdState = {
      ...state,
      journal: state.journal.slice(0, MAX_JOURNAL_ENTRIES),
      avatarImprintActive: false,
      avatarImprintProgress: 0,
    };
    localStorage.setItem(getSaveKey(), JSON.stringify(toSave));
  } catch {
    // localStorage may be full or unavailable — fail silently
  }
}

export function loadGravitasState(): StarholdState | null {
  try {
    const raw = localStorage.getItem(getSaveKey()) || localStorage.getItem(FALLBACK_SAVE_KEY);
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

    // Legacy migration: only apply if countdown looks like old 90-tick format
    // The new initial state uses 86400 (24h) — don't overwrite that
    if ((parsed.chapter ?? (parsed.avatarAwake ? "continuation" : "demo")) === "demo" && !parsed.avatarAwake && parsed.threat.aftershock === 0) {
      const isLegacySave = parsed.threat.totalDuration <= 180;
      if (isLegacySave) {
        if ((parsed.threatCycle ?? 0) === 0 && parsed.tick < 90) {
          migratedThreat = {
            ...migratedThreat,
            type: "distortionWave",
            countdown: Math.max(1, 90 - parsed.tick),
            totalDuration: 90,
            intensity: 1,
          };
        } else if ((parsed.threatCycle ?? 0) === 1 && parsed.tick < 135) {
          migratedThreat = {
            ...migratedThreat,
            type: "distortionWave",
            countdown: Math.max(1, 135 - parsed.tick),
            totalDuration: 45,
            intensity: Math.max(1, migratedThreat.intensity ?? 1),
          };
        } else if ((parsed.threatCycle ?? 0) === 2 && parsed.tick < 180) {
          migratedThreat = {
            ...migratedThreat,
            type: "distortionWave",
            countdown: Math.max(1, 180 - parsed.tick),
            totalDuration: 45,
            intensity: Math.max(1, migratedThreat.intensity ?? 1),
          };
        }
      }
    }

    if ((parsed.chapter ?? (parsed.avatarAwake ? "continuation" : "demo")) === "continuation") {
      migratedThreat = {
        ...migratedThreat,
        countdown:
          migratedThreat.countdown > 0
            ? migratedThreat.countdown
            : CONTINUATION_DAILY_WAVE_TICKS,
        totalDuration:
          migratedThreat.totalDuration > 0
            ? migratedThreat.totalDuration
            : CONTINUATION_DAILY_WAVE_TICKS,
        pausedUntilAwake: false,
      };
    }

    const nextState: StarholdState = {
      ...parsed,
      chapter: parsed.chapter ?? (parsed.avatarAwake ? "continuation" : "demo"),
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
      postWaveSurgeTicks: parsed.postWaveSurgeTicks ?? 0,
      postWaveSurgeMode: parsed.postWaveSurgeMode ?? null,
      avatarProfile: parsed.avatarProfile ?? null,
      avatarImprintActive: parsed.avatarAwake ? false : (parsed.avatarProfile?.answers?.length ?? 0) >= 3,
      avatarImprintProgress: 0,
      avatarPrepArmedTick: parsed.avatarPrepArmedTick ?? ((parsed.avatarProfile?.answers?.length ?? 0) >= 3 && !parsed.avatarAwake ? parsed.tick + 1 : null),
      repairChallenge: {
        active: parsed.repairChallenge?.active ?? false,
        startedTick: parsed.repairChallenge?.startedTick ?? 0,
        promptEndsAtTick: parsed.repairChallenge?.promptEndsAtTick ?? 0,
        promptIndex: parsed.repairChallenge?.promptIndex ?? 0,
        sequence: parsed.repairChallenge?.sequence ?? [],
        windowSatisfied: parsed.repairChallenge?.windowSatisfied ?? false,
        unlocksAvatarPrep: parsed.repairChallenge?.unlocksAvatarPrep ?? false,
      },
      bootstrapChecklist: parsed.bootstrapChecklist ?? inferBootstrapChecklist(parsed),
      waveRecoveryCalmTicks: parsed.waveRecoveryCalmTicks ?? 0,
      warRoom: parsed.warRoom ?? createInitialWarRoom(),
      moduleLevels: parsed.moduleLevels ?? { reactor: 1, logistics: 1, core: 1, sensor: 1, warroom: 1 },
    };
    if (nextState.chapter === "continuation") {
      Object.assign(nextState, sanitizeContinuationState(nextState));
      nextState.repairChallenge = {
        active: false,
        startedTick: 0,
        promptEndsAtTick: 0,
        promptIndex: 0,
        sequence: [],
        windowSatisfied: false,
        unlocksAvatarPrep: false,
      };
    }
    nextState.repairChallenge = normalizeRepairChallenge(nextState.repairChallenge, nextState.threatCycle);
    return nextState;
  } catch {
    return null;
  }
}

export function clearGravitasSave(): void {
  try {
    localStorage.removeItem(getSaveKey());
    localStorage.removeItem(FALLBACK_SAVE_KEY);
  } catch {
    // fail silently
  }
}
