import type { StarholdState } from "./types";
import { inferBootstrapChecklist } from "./bootstrap";
import { normalizeRepairChallenge } from "./events";
import { normalizeContinuationState } from "./continuation";
import { createInitialWarRoom } from "./warroom";
import { createInitialRepairBay } from "./repairbay";
import { createInitialFactionReputation } from "./faction";
import { createInitialSynergies } from "./synergy";
import { createInitialGalaxyCycle } from "./galaxy";
import { createInitialDilemmaState } from "./dilemma";
import { createInitialCommanderState } from "./commander";
import { createInitialEspionageState } from "./espionage/engine";
import { createInitialResearchState } from "./research/engine";
import { createInitialSupplyRouteState } from "./supplyroute/index";
import { createInitialCodexState } from "./codex/index";
import { createInitialNotificationState } from "./notifications/index";
import { createInitialOfficerState } from "./officers/index";
import { createInitialFactionWarState } from "./factionwars/index";
import { createInitialExpeditionState } from "./expeditions/index";
import { createInitialGalaxyMap } from "./map/engine";
import { defaultAllocation } from "./battle/avatarCombat";
import type { WarRoomState, WarRoomUnitId } from "./warroom/types";
import type { RepairBayState } from "./repairbay/types";
import { runMaintenance } from "./maintenance";
import { recalculateDerivedState } from "./derived";

const SAVE_KEY_PREFIX = "gravitas_save_v2";
const FALLBACK_SAVE_KEY = "gravitas_save_v1";
const MAX_JOURNAL_ENTRIES = 20;

function getSaveKey(): string {
  if (typeof window === "undefined") return SAVE_KEY_PREFIX;
  const userKey = localStorage.getItem("plizio_username_id") || localStorage.getItem("plizio_username") || "anonymous";
  return `${SAVE_KEY_PREFIX}_${userKey}`;
}

const CONTINUATION_DAILY_WAVE_TICKS = 24 * 60 * 60;

function mapLegacyUnitId(id: string): WarRoomUnitId | null {
  if (id === "sentinel" || id === "vanguard" || id === "wraith" || id === "nexus") return id;
  if (id === "militia") return "sentinel";
  if (id === "ranger") return "vanguard";
  if (id === "shieldbearer") return "wraith";
  if (id === "scout_drone") return "nexus";
  return null;
}

function toGarrisonEntries(value: unknown): { count: number; level: number }[] {
  if (Array.isArray(value)) {
    return value
      .filter((entry) => entry && typeof entry.count === "number")
      .map((entry: any) => ({ count: Math.max(0, Math.floor(entry.count)), level: Math.max(1, Math.floor(entry.level ?? 1)) }))
      .filter((entry) => entry.count > 0);
  }
  if (typeof value === "number") {
    const count = Math.max(0, Math.floor(value));
    return count > 0 ? [{ count, level: 1 }] : [];
  }
  return [];
}

function migrateWarRoom(raw: any): WarRoomState {
  const base = createInitialWarRoom();
  if (!raw || typeof raw !== "object") return base;

  const migrated: WarRoomState = {
    level: Math.max(1, Math.floor(raw.level ?? base.level)),
    online: typeof raw.online === "boolean" ? raw.online : base.online,
    productionSlots: { ...base.productionSlots },
    garrison: { ...base.garrison },
  };

  Object.entries(raw.garrison ?? {}).forEach(([legacyId, value]) => {
    const mapped = mapLegacyUnitId(legacyId);
    if (!mapped) return;
    migrated.garrison[mapped] = [
      ...migrated.garrison[mapped],
      ...toGarrisonEntries(value),
    ];
  });

  if (raw.productionSlots && typeof raw.productionSlots === "object") {
    Object.entries(raw.productionSlots).forEach(([legacyId, slot]) => {
      const mapped = mapLegacyUnitId(legacyId);
      if (!mapped || !slot || typeof slot !== "object") return;
      migrated.productionSlots[mapped] = {
        unitId: mapped,
        isUpgrade: Boolean((slot as any).isUpgrade),
        batchSize: Math.max(1, Math.floor((slot as any).batchSize ?? 1)),
        targetLevel: Math.max(1, Math.floor((slot as any).targetLevel ?? 1)),
        startedAt: (slot as any).startedAt ?? ((slot as any).remaining !== undefined ? Date.now() - (((slot as any).duration ?? 1) - ((slot as any).remaining ?? 0)) * 1000 : Date.now()),
        completesAt: (slot as any).completesAt ?? ((slot as any).remaining !== undefined ? Date.now() + ((slot as any).remaining ?? 0) * 1000 : Date.now()),
        reservedCount: (slot as any).reservedCount ? Math.max(1, Math.floor((slot as any).reservedCount)) : undefined,
        reservedFromLevel: (slot as any).reservedFromLevel ? Math.max(1, Math.floor((slot as any).reservedFromLevel)) : undefined,
        spentCost: (slot as any).spentCost ?? undefined,
      };
    });
  } else if (raw.productionSlot && typeof raw.productionSlot === "object") {
    const mapped = mapLegacyUnitId((raw.productionSlot as any).unitId);
    if (mapped) {
      const remaining = Math.max(0, Math.floor((raw.productionSlot as any).remaining ?? 0));
      migrated.productionSlots[mapped] = {
        unitId: mapped,
        isUpgrade: false,
        batchSize: 1,
        targetLevel: 1,
        startedAt: Date.now() - ((Math.max(1, Math.floor((raw.productionSlot as any).duration ?? 1)) - remaining) * 1000),
        completesAt: Date.now() + remaining * 1000,
      };
    }
  }

  return migrated;
}

function migrateRepairBay(raw: any): RepairBayState {
  const base = createInitialRepairBay();
  if (!raw || typeof raw !== "object") return base;

  const level = Math.max(1, Math.floor(raw.level ?? base.level));
  const slotCount = Math.max(1, Math.floor(level / 5) + 1);
  const sourceSlots = Array.isArray(raw.repairSlots) ? raw.repairSlots : [];
  const repairSlots = Array.from({ length: Math.floor(slotCount) }, (_, index) => {
    const slot = sourceSlots[index];
    if (!slot || typeof slot !== "object") return null;
    // Migrate tick-based to Date.now() based
    if (slot.startedAt && slot.completesAt) {
      return {
        unitId: mapLegacyUnitId(slot.unitId) ?? "sentinel",
        targetLevel: Math.max(1, Math.floor(slot.targetLevel ?? 1)),
        batchSize: Math.max(1, Math.floor(slot.batchSize ?? 1)),
        startedAt: slot.startedAt,
        completesAt: slot.completesAt,
      };
    }
    const rem = Math.max(0, Math.floor(slot.remaining ?? 0));
    const dur = Math.max(1, Math.floor(slot.duration ?? 1));
    return {
      unitId: mapLegacyUnitId(slot.unitId) ?? "sentinel",
      targetLevel: Math.max(1, Math.floor(slot.targetLevel ?? 1)),
      batchSize: Math.max(1, Math.floor(slot.batchSize ?? 1)),
      startedAt: Date.now() - (dur - rem) * 1000,
      completesAt: Date.now() + rem * 1000,
      repairedEntries: slot.repairedEntries ? toGarrisonEntries(slot.repairedEntries) : undefined,
    };
  });

  const wounded: RepairBayState["wounded"] = { ...base.wounded };
  Object.entries(raw.wounded ?? {}).forEach(([legacyId, value]) => {
    const mapped = mapLegacyUnitId(legacyId);
    if (!mapped) return;
    wounded[mapped] = [
      ...wounded[mapped],
      ...toGarrisonEntries(value),
    ];
  });

  return {
    level,
    online: typeof raw.online === "boolean" ? raw.online : base.online,
    repairSlots,
    wounded,
    woundedAt: typeof raw.woundedAt === "number" ? raw.woundedAt : null,
  };
}

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
      supply: Math.max(1_000, state.resources.supply),
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
  try {
    const maintainedState = runMaintenance(state);
    const { derived, ...persistedState } = maintainedState;
    const toSave: StarholdState = {
      ...persistedState,
      journal: maintainedState.journal.slice(0, MAX_JOURNAL_ENTRIES),
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
    if (parsed.globalRngState === undefined) {
      parsed.globalRngState = Date.now() % 2147483647;
    }

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

    const migratedResources = {
      ...parsed.resources,
      supply: parsed.resources.supply ?? (parsed.resources as any).materials ?? 100,
      hull: parsed.resources?.hull ?? 100,
      shield: parsed.resources?.shield ?? 25,
      morale: parsed.resources?.morale ?? 75,
      signalRange: parsed.resources?.signalRange ?? 30,
      supplyFlow: parsed.resources?.supplyFlow ?? 20,
      antimatter: parsed.resources?.antimatter ?? 0,
    };
    if ((migratedResources as any).materials !== undefined) {
      delete (migratedResources as any).materials;
    }

    const nextState: StarholdState = {
      ...parsed,
      chapter: parsed.chapter ?? (parsed.avatarAwake ? "continuation" : "demo"),
      endgame: parsed.endgame ?? {
        isZenithUnlocked: false,
        zenithHolder: null,
        zenithHoldTimeSeconds: 0,
        galacticLeader: null,
        imperialTaxRate: 0,
        embargoedPlayers: [],
      },
      resources: migratedResources as any,
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
      lastEventTick: parsed.lastEventTick ?? {},
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
      battleState: {
        scoutReports: parsed.battleState?.scoutReports ?? Object.fromEntries(
          Object.entries((parsed as any).galaxyIntel ?? {}).map(([id, intel]) => [
            id,
            { buildingId: id, intelLevel: intel as number, revealedStats: {}, revealedTraits: [], lastScoutedAt: 0 }
          ])
        ),
        battleHistory: parsed.battleState?.battleHistory ?? [],
        avatarCombat: parsed.battleState?.avatarCombat ?? (parsed as any).avatarCombat ?? {
          title: parsed.avatarProfile?.title ?? { en: "Initiate", hu: "Beavatott", de: "Initiat", ro: "Inițiat" },
          allocation: defaultAllocation(),
          innateBonus: {},
          combatLevel: 1,
          combatXP: 0,
        },
        buildingCooldowns: parsed.battleState?.buildingCooldowns ?? {},
        activeScout: parsed.battleState?.activeScout ?? null,
      },
      factionReputation: parsed.factionReputation ?? createInitialFactionReputation(),
      worldLevel: parsed.worldLevel ?? 1,
      worldLevelPending: parsed.worldLevelPending ?? null,
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
      warRoom: migrateWarRoom(parsed.warRoom),
      repairBay: migrateRepairBay((parsed as any).repairBay),
      moduleLevels: {
        reactor: parsed.moduleLevels?.reactor ?? 1,
        logistics: parsed.moduleLevels?.logistics ?? 1,
        core: parsed.moduleLevels?.core ?? 1,
        sensor: parsed.moduleLevels?.sensor ?? 1,
        warroom: parsed.moduleLevels?.warroom ?? 1,
        repairbay: (parsed.moduleLevels as any)?.repairbay ?? 1,
      },
      upgradeQueue: parsed.upgradeQueue ?? [],
      upgradeSlotCount: parsed.upgradeSlotCount ?? 1,
      synergies: parsed.synergies ?? createInitialSynergies(),
      galaxyCycle: parsed.galaxyCycle ?? createInitialGalaxyCycle(),
      galaxy: parsed.galaxy ?? createInitialGalaxyMap(),
      dilemmaSystem: parsed.dilemmaSystem ?? createInitialDilemmaState(),
      tradeSystem: {
        marketState: parsed.tradeSystem?.marketState ?? "normal",
        marketStateUpdatedAt: parsed.tradeSystem?.marketStateUpdatedAt ?? Date.now(),
        offers: parsed.tradeSystem?.offers ?? [],
        activeTrades: parsed.tradeSystem?.activeTrades ?? [],
        lastRefreshAt: parsed.tradeSystem?.lastRefreshAt ?? Date.now(),
      },
      weeklyMission: parsed.weeklyMission ?? { activeMission: null, lastMissionAt: Date.now(), completedCount: 0, nextMissionAt: Date.now() + 5 * 24 * 60 * 60 * 1000 },
      commander: parsed.commander ?? createInitialCommanderState(),
      espionage: {
        ...createInitialEspionageState(),
        ...(parsed.espionage ?? {}),
      },
      research: parsed.research ?? createInitialResearchState(["weapons", "shields"]),
      supplyRoutes: {
        ...createInitialSupplyRouteState(),
        ...(parsed.supplyRoutes ?? {}),
      },
      codex: parsed.codex ?? createInitialCodexState(),
      notifications: parsed.notifications ?? createInitialNotificationState(),
      officers: parsed.officers ?? createInitialOfficerState().officerState,
      factionWars: {
        ...createInitialFactionWarState(),
        ...(parsed.factionWars ?? {}),
      },
      expeditions: parsed.expeditions ?? createInitialExpeditionState(),
      statistics: parsed.statistics ?? {
        trauma: {
          agentsLost: 0,
          expeditionCasualties: 0,
          cargoSeized: 0,
          ambushesSuffered: 0,
        },
      },
      offlineSummary: parsed.offlineSummary ?? null,
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
    return {
      ...nextState,
      derived: recalculateDerivedState(nextState),
    };
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
