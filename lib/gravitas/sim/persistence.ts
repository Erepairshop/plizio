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
import { createInitialConcordState, normalizeConcordState } from "./concord/engine";
import { createInitialNpcStationsState, normalizeNpcStationsState } from "./npcstations/engine";
import { PVE_ARCHETYPE_ORDER } from "./map/pveArchetypes";
import type { WarRoomState, WarRoomUnitId } from "./warroom/types";
import type { RepairBayState } from "./repairbay/types";
import { runMaintenance } from "./maintenance";
import { recalculateDerivedState } from "./derived";

const SAVE_KEY_PREFIX = "gravitas_save_v3";
const BASE_KEY_PREFIX = "gravitas_base_v3";
const LEGACY_SAVE_KEY_PREFIX = "gravitas_save_v2";
const FALLBACK_SAVE_KEY = "gravitas_save_v1";
const MAX_JOURNAL_ENTRIES = 20;

type GravitasSnapshot = {
  version: 3;
  kind: "snapshot";
  savedAtTick: number;
  payload: StarholdState;
};

/** Migrate old ±100 galaxy coords to new ±3 range by clearing stale nodes.
 *  Also backfill new meta fields on MapNode if missing. */
function migrateGalaxyCoords(galaxy: import("./map/types").GalaxyMapState): import("./map/types").GalaxyMapState {
  if (!galaxy.transientNodes || galaxy.transientNodes.length === 0) return galaxy;
  // If any node has coords outside ±5, it's from the old ±100 system — clear all
  const hasOldCoords = galaxy.transientNodes.some(n => Math.abs(n.x) > 5 || Math.abs(n.y) > 5);
  if (hasOldCoords) {
    return { ...galaxy, transientNodes: [], activeFleets: [] };
  }
  // Backfill new meta fields for nodes and fleets
  const needsNodeMigration = galaxy.transientNodes.some(
    n => (n as any).nodeState === undefined || (n.type === "pve_base" && !n.pveArchetypeId),
  );
  const needsFleetMigration = (galaxy.activeFleets ?? []).some(f => (f as any).travelTimeTicks === undefined || (f as any).composition === undefined || (f as any).payload === undefined);

  if (needsNodeMigration || needsFleetMigration) {
    const migratedNodes = galaxy.transientNodes.map(n => {
      const baseNode = (n as any).nodeState !== undefined ? n : {
        ...n,
        nodeState: "undiscovered" as const,
        priority: (Math.min(5, Math.max(1, Math.round(n.stealthLevel / 10))) || 1) as 1|2|3|4|5,
        risk: (Math.min(5, Math.max(1, Math.round(n.stealthLevel / 10))) || 1) as 1|2|3|4|5,
        expectedYield: [] as import("./map/types").NodeYieldEntry[],
        intelDepth: 0 as const,
        nodeSeed: Math.abs((n.id.charCodeAt(5) || 42) * 2654435761) >>> 0,
        harvestCount: 0,
        maxHarvests: n.type === "meteorite" ? 3 : n.type === "pve_base" ? 1 : 0,
        defenceRating: n.type === "pve_base" ? 30 : 0,
        instability: n.type === "anomaly" ? 40 : 0,
        actionLog: [] as import("./map/types").NodeActionLog[],
        cooldownUntil: 0,
      };
      if (baseNode.type !== "pve_base" || baseNode.pveArchetypeId) return baseNode;
      const hash = Array.from(baseNode.id).reduce((sum, char) => sum + char.charCodeAt(0), 0);
      return {
        ...baseNode,
        pveArchetypeId: PVE_ARCHETYPE_ORDER[hash % PVE_ARCHETYPE_ORDER.length],
      };
    });

    const migratedFleets = (galaxy.activeFleets ?? []).map(f => {
      const travelTimeTicks = (f as any).travelTimeTicks ?? Math.max(60, f.arrivalTime - f.departureTime);
      return {
        ...f,
        missionType: (f as any).missionType ?? "collect" as const,
        fuelSpent: (f as any).fuelSpent ?? 0,
        weight: (f as any).weight ?? 1,
        travelTimeTicks,
        composition: (f as any).composition ?? {},
        payload: (f as any).payload ?? {},
        casualties: ((f as any).casualties && ((f as any).casualties.killed || (f as any).casualties.wounded))
          ? (f as any).casualties
          : { killed: (f as any).casualties ?? {}, wounded: {} },
        outcome: (f as any).outcome ?? "victory",
        arrivalState: typeof (f as any).arrivalState === "string" 
          ? { en: (f as any).arrivalState, hu: (f as any).arrivalState, de: (f as any).arrivalState, ro: (f as any).arrivalState }
          : (f as any).arrivalState ?? { en: "", hu: "", de: "", ro: "" },
      };
    });

    return { ...galaxy, transientNodes: migratedNodes, activeFleets: migratedFleets };
  }
  return galaxy;
}

function getStorageKey(prefix: string): string {
  if (typeof window === "undefined") return prefix;
  const userKey = localStorage.getItem("plizio_username_id") || localStorage.getItem("plizio_username") || "anonymous";
  return `${prefix}_${userKey}`;
}

export function getGravitasSyncKeys(): string[] {
  return [
    getStorageKey(LEGACY_SAVE_KEY_PREFIX),
    getStorageKey(SAVE_KEY_PREFIX),
    getStorageKey(BASE_KEY_PREFIX),
  ];
}

function isValidState(value: unknown): value is StarholdState {
  if (!value || typeof value !== "object") return false;
  const state = value as Partial<StarholdState>;
  return (
    typeof state.tick === "number" &&
    Boolean(state.phase) &&
    Boolean(state.resources) &&
    Boolean(state.modules)
  );
}

function readPersistedState(): StarholdState | null {
  const keys = [
    getStorageKey(SAVE_KEY_PREFIX),
    getStorageKey(BASE_KEY_PREFIX),
    getStorageKey(LEGACY_SAVE_KEY_PREFIX),
    FALLBACK_SAVE_KEY,
  ];

  for (const key of keys) {
    const raw = localStorage.getItem(key);
    if (!raw) continue;

    try {
      const value = JSON.parse(raw) as StarholdState | GravitasSnapshot;
      const state =
        "version" in value && value.version === 3 && "payload" in value
          ? value.payload
          : value;
      if (isValidState(state)) return state;
    } catch {
      // Fall back to the base snapshot or an older compatible save.
    }
  }

  return null;
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

function migrateWarRoom(raw: any, currentTick: number): WarRoomState {
  const base = createInitialWarRoom();
  if (!raw || typeof raw !== "object") return base;

  const migrated: WarRoomState = {
    level: Math.max(1, Math.floor(raw.level ?? base.level)),
    online: typeof raw.online === "boolean" ? raw.online : base.online,
    productionSlots: { ...base.productionSlots },
    garrison: { ...base.garrison },
    allocations: raw.allocations ?? base.allocations,
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
        startedAtTick: (slot as any).startedAtTick ?? currentTick,
        completesAtTick: (slot as any).completesAtTick ?? currentTick + 60,
        reservedCount: (slot as any).reservedCount ? Math.max(1, Math.floor((slot as any).reservedCount)) : undefined,
        reservedFromLevel: (slot as any).reservedFromLevel ? Math.max(1, Math.floor((slot as any).reservedFromLevel)) : undefined,
        spentCost: (slot as any).spentCost ?? undefined,
      };
    });
  }

  return migrated;
}

function migrateRepairBay(raw: any, currentTick: number): RepairBayState {
  const base = createInitialRepairBay();
  if (!raw || typeof raw !== "object") return base;

  const level = Math.max(1, Math.floor(raw.level ?? base.level));
  const slotCount = Math.max(1, Math.floor(level / 5) + 1);
  const sourceSlots = Array.isArray(raw.repairSlots) ? raw.repairSlots : [];
  const repairSlots = Array.from({ length: Math.floor(slotCount) }, (_, index) => {
    const slot = sourceSlots[index];
    if (!slot || typeof slot !== "object") return null;
    return {
      unitId: mapLegacyUnitId(slot.unitId) ?? "sentinel",
      targetLevel: Math.max(1, Math.floor(slot.targetLevel ?? 1)),
      batchSize: Math.max(1, Math.floor(slot.batchSize ?? 1)),
      startedAtTick: slot.startedAtTick ?? currentTick,
      completesAtTick: slot.completesAtTick ?? currentTick + 60,
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
    woundedAtTick: typeof raw.woundedAtTick === "number" ? raw.woundedAtTick : (typeof raw.woundedAt === "number" ? currentTick : null),
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
    const snapshot: GravitasSnapshot = {
      version: 3,
      kind: "snapshot",
      savedAtTick: toSave.tick,
      payload: toSave,
    };
    const serialized = JSON.stringify(snapshot);
    localStorage.setItem(getStorageKey(SAVE_KEY_PREFIX), serialized);
    localStorage.setItem(getStorageKey(BASE_KEY_PREFIX), serialized);
  } catch {
    // localStorage may be full or unavailable — fail silently
  }
}

export function loadGravitasState(): StarholdState | null {
  try {
    const parsed = readPersistedState();
    if (!parsed) return null;
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
    if (parsed.lastActiveAt === undefined) {
      parsed.lastActiveAt = Date.now();
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
      chronoCore: parsed.resources?.chronoCore ?? 0,
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
      lastEmergencyScavengeTick: parsed.lastEmergencyScavengeTick ?? -3600,
      lastFactionAidTick: parsed.lastFactionAidTick ?? -86400,
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
            { buildingId: id, intelLevel: intel as number, revealedStats: {}, revealedTraits: [], lastScoutedAtTick: 0 }
          ])
        ),
        battleHistory: (parsed.battleState?.battleHistory ?? []).map((h: any) => ({
          ...h,
          atTick: h.atTick ?? parsed.tick ?? 0,
        })),
        avatarCombat: parsed.battleState?.avatarCombat ?? (parsed as any).avatarCombat ?? {
          title: parsed.avatarProfile?.title ?? { en: "Initiate", hu: "Beavatott", de: "Initiat", ro: "Inițiat" },
          allocation: defaultAllocation(),
          innateBonus: {},
          combatLevel: 1,
          combatXP: 0,
        },
        buildingCooldowns: parsed.battleState?.buildingCooldowns ?? {},
        activeScout: parsed.battleState?.activeScout ? {
          ...parsed.battleState.activeScout,
          startedAtTick: parsed.battleState.activeScout.startedAtTick ?? parsed.tick ?? 0,
          completesAtTick: parsed.battleState.activeScout.completesAtTick ?? (parsed.tick ?? 0) + 1800,
        } : null,
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
      warRoom: migrateWarRoom(parsed.warRoom, parsed.tick ?? 0),
      repairBay: migrateRepairBay((parsed as any).repairBay, parsed.tick ?? 0),
      moduleLevels: {
        reactor: parsed.moduleLevels?.reactor ?? 1,
        logistics: parsed.moduleLevels?.logistics ?? 1,
        core: parsed.moduleLevels?.core ?? 1,
        sensor: parsed.moduleLevels?.sensor ?? 1,
        warroom: parsed.moduleLevels?.warroom ?? 1,
        repairbay: (parsed.moduleLevels as any)?.repairbay ?? 1,
      },
      upgradeQueue: (parsed.upgradeQueue ?? []).map((u: any) => ({
        ...u,
        startedAtTick: u.startedAtTick ?? parsed.tick ?? 0,
        completesAtTick: u.completesAtTick ?? (parsed.tick ?? 0) + 300,
      })),
      upgradeSlotCount: parsed.upgradeSlotCount ?? 1,
      synergies: parsed.synergies ?? createInitialSynergies(),
      galaxyCycle: parsed.galaxyCycle ?? createInitialGalaxyCycle(),
      galaxy: migrateGalaxyCoords(parsed.galaxy ?? createInitialGalaxyMap()),
      dilemmaSystem: parsed.dilemmaSystem ?? createInitialDilemmaState(),
      tradeSystem: {
        marketState: parsed.tradeSystem?.marketState ?? "normal",
        marketStateUpdatedAtTick: parsed.tradeSystem?.marketStateUpdatedAtTick ?? parsed.tick ?? 0,
        offers: (parsed.tradeSystem?.offers ?? []).map((o: any) => ({
          ...o,
          expiresAtTick: o.expiresAtTick ?? parsed.tick ?? 0,
        })),
        activeTrades: (parsed.tradeSystem?.activeTrades ?? []).map((t: any) => ({
          ...t,
          startedAtTick: t.startedAtTick ?? parsed.tick ?? 0,
          completesAtTick: t.completesAtTick ?? (parsed.tick ?? 0) + 3600,
        })),
        lastRefreshAtTick: parsed.tradeSystem?.lastRefreshAtTick ?? parsed.tick ?? 0,
      },
      weeklyMission: parsed.weeklyMission ? {
        ...parsed.weeklyMission,
        lastMissionAtTick: parsed.weeklyMission.lastMissionAtTick ?? parsed.tick ?? 0,
        nextMissionAtTick: parsed.weeklyMission.nextMissionAtTick ?? (parsed.tick ?? 0) + 5 * 24 * 3600,
        activeMission: parsed.weeklyMission.activeMission ? {
          ...parsed.weeklyMission.activeMission,
          appearedAtTick: parsed.weeklyMission.activeMission.appearedAtTick ?? parsed.tick ?? 0,
          battleStartsAtTick: parsed.weeklyMission.activeMission.battleStartsAtTick ?? (parsed.tick ?? 0) + 3600,
          phaseStartedAtTick: parsed.weeklyMission.activeMission.phaseStartedAtTick ?? parsed.tick ?? 0,
        } : null,
      } : { activeMission: null, lastMissionAtTick: 0, completedCount: 0, nextMissionAtTick: 5 * 24 * 3600 },
      commander: parsed.commander ? {
        ...parsed.commander,
        metrics: {
          ...parsed.commander.metrics,
          lastEvaluatedAtTick: parsed.commander.metrics.lastEvaluatedAtTick ?? parsed.tick ?? 0,
        }
      } : createInitialCommanderState(),
      espionage: parsed.espionage ? {
        ...parsed.espionage,
        lastExposureEventTick: parsed.espionage.lastExposureEventTick ?? null,
        decoyActiveUntilTick: parsed.espionage.decoyActiveUntilTick ?? null,
        missions: (parsed.espionage.missions || []).map((m: any) => ({
          ...m,
          startedAtTick: m.startedAtTick ?? parsed.tick ?? 0,
          activeAtTick: m.activeAtTick ?? (parsed.tick ?? 0) + 300,
          lastYieldAtTick: m.lastYieldAtTick ?? (parsed.tick ?? 0) + 300,
        })),
      } : createInitialEspionageState(),
      research: parsed.research ?? createInitialResearchState(["weapons", "shields"]),
      supplyRoutes: parsed.supplyRoutes ? {
        ...parsed.supplyRoutes,
        lastRaidCheckTick: parsed.supplyRoutes.lastRaidCheckTick ?? parsed.tick ?? 0,
        routes: (parsed.supplyRoutes.routes || []).map((r: any) => ({
          ...r,
          establishedAtTick: r.establishedAtTick ?? parsed.tick ?? 0,
          lastYieldAtTick: r.lastYieldAtTick ?? parsed.tick ?? 0,
          disruptedUntilTick: r.disruptedUntilTick ?? null,
        })),
      } : createInitialSupplyRouteState(parsed.tick ?? 0),
      codex: parsed.codex ?? createInitialCodexState(),
      notifications: parsed.notifications ?? createInitialNotificationState(),
      officers: parsed.officers ? {
        ...parsed.officers,
        active: (parsed.officers.active ?? []).map((officer: any) => ({
          ...officer,
          personality: officer.personality ?? "stoic",
          loyalty: officer.loyalty ?? 70,
          mood: officer.mood ?? "content",
          avatarAffinity: officer.avatarAffinity ?? [],
          assignment: officer.assignment ?? null,
          missionStatus: officer.missionStatus ?? "idle",
          currentMission: officer.currentMission,
          recentReports: officer.recentReports ?? [],
        })),
        recruits: (parsed.officers.recruits ?? []).map((officer: any) => ({
          ...officer,
          personality: officer.personality ?? "stoic",
          loyalty: officer.loyalty ?? 70,
          mood: officer.mood ?? "content",
          avatarAffinity: officer.avatarAffinity ?? [],
          assignment: officer.assignment ?? null,
          missionStatus: officer.missionStatus ?? "idle",
          currentMission: officer.currentMission,
          recentReports: officer.recentReports ?? [],
        })),
      } : createInitialOfficerState().officerState,
      factionWars: parsed.factionWars ? {
        activeWars: (parsed.factionWars.activeWars || []).map((w: any) => ({
          ...w,
          startedAtTick: w.startedAtTick ?? (typeof w.startedAt === "number" ? parsed.tick : parsed.tick),
          endsAtTick: w.endsAtTick ?? (typeof w.endsAt === "number" ? parsed.tick + 86400 : parsed.tick + 86400),
        })),
        lastWarSpawnAtTick: parsed.factionWars.lastWarSpawnAtTick ?? (typeof (parsed.factionWars as any).lastWarSpawnAt === "number" ? parsed.tick : parsed.tick),
      } : createInitialFactionWarState(parsed.tick ?? 0),
      expeditions: parsed.expeditions ? {
        ...parsed.expeditions,
        activeExpeditions: (parsed.expeditions.activeExpeditions || []).map((exp: any) => ({
          ...exp,
          startedAtTick: exp.startedAtTick ?? parsed.tick ?? 0,
          endsAtTick: exp.endsAtTick ?? (parsed.tick ?? 0) + 3600,
          status: exp.status ?? "en_route",
          recalled: exp.recalled ?? false,
          logs: exp.logs ?? [],
          loot: exp.loot ?? {},
          casualties: (exp.casualties && (exp.casualties.killed || exp.casualties.wounded)) 
            ? exp.casualties 
            : { killed: exp.casualties ?? {}, wounded: {} },
        })),
      } : createInitialExpeditionState(),
      starChamber: parsed.starChamber ? {
        ...parsed.starChamber,
        rotation: parsed.starChamber.rotation ?? {
          dailyOffers: [],
          weeklyOffers: [],
          lastDailyRefreshTick: -100000,
          lastWeeklyRefreshTick: -1000000,
          currentSeed: 0,
        },
      } : {
        unlockedItemIds: [],
        itemCooldowns: {},
        rotation: {
          dailyOffers: [],
          weeklyOffers: [],
          lastDailyRefreshTick: -100000,
          lastWeeklyRefreshTick: -1000000,
          currentSeed: 0,
        },
      },
      dailyTasks: parsed.dailyTasks ?? {
        weeklySet: [],
        progress: {},
        claimedTaskIds: [],
        lastWeeklyRefreshTick: -1000000,
      },
      statistics: {
        ...(parsed.statistics ?? {}),
        trauma: {
          agentsLost: parsed.statistics?.trauma?.agentsLost ?? 0,
          expeditionCasualties: parsed.statistics?.trauma?.expeditionCasualties ?? 0,
          cargoSeized: parsed.statistics?.trauma?.cargoSeized ?? 0,
          ambushesSuffered: parsed.statistics?.trauma?.ambushesSuffered ?? 0,
        },
        operational: {
          droneRepairsTotal: parsed.statistics?.operational?.droneRepairsTotal ?? 0,
          emergencyScavengesTotal: parsed.statistics?.operational?.emergencyScavengesTotal ?? 0,
          factionAidRequestsTotal: parsed.statistics?.operational?.factionAidRequestsTotal ?? 0,
        },
      },
      archive: parsed.archive ?? {
        events: [],
        lastViewedTick: 0,
        expiredMapNodes: [],
        completedFleets: [],
        completedExpeditions: [],
        completedTrades: [],
        completedMissions: [],
        battleHistory: [],
      },
      offlineSummary: parsed.offlineSummary ?? null,
      concord: normalizeConcordState((parsed as any).concord ?? createInitialConcordState()),
      npcStations: normalizeNpcStationsState((parsed as any).npcStations ?? createInitialNpcStationsState()),
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
    localStorage.removeItem(getStorageKey(SAVE_KEY_PREFIX));
    localStorage.removeItem(getStorageKey(BASE_KEY_PREFIX));
    localStorage.removeItem(getStorageKey(LEGACY_SAVE_KEY_PREFIX));
    localStorage.removeItem(FALLBACK_SAVE_KEY);
  } catch {
    // fail silently
  }
}
