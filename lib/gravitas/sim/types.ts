export type StarholdModuleId = "reactor" | "logistics" | "core" | "sensor";

export interface StarholdModuleState {
  id: StarholdModuleId;
  name: LocalizedString;
  online: boolean;
  integrity: number;
  load: number;
}

export interface StarholdResources {
  power: number;
  supply: number;
  stability: number;
  activation: number;
  hull: number;
  shield: number;
  morale: number;
  signalRange: number;
  supplyFlow: number;
}

export interface StarholdMarks {
  reactorScar: number;
  shellStrain: number;
  supplyStress: number;
  voidEcho: number; // New mark for psychic/void instability
}

export type StarholdAnomalyId = "voidLeak" | "sensorGhost" | "materialEntropy" | "coreTremor";

export interface StarholdAnomaly {
  id: StarholdAnomalyId;
  name: LocalizedString;
  severity: number;
  duration?: number; // ticks remaining, if any
}

export type StarholdIncidentId =
  | "reactor_cable_fault"
  | "reactor_cooling_pocket"
  | "reactor_flux_spike"
  | "reactor_containment_warp"
  | "core_memory_tremor"
  | "core_shell_fracture"
  | "core_sync_drift"
  | "core_chamber_overheat"
  | "logistics_route_jam"
  | "logistics_drone_loss"
  | "logistics_fabricator_stall"
  | "logistics_supply_leak"
  | "sensor_blind_sector"
  | "sensor_echo_storm"
  | "sensor_lens_scatter"
  | "sensor_array_drift";

export interface StarholdIncidentEffectProfile {
  power?: number;
  stability?: number;
  materials?: number;
  entropy?: number;
  moduleIntegrity?: number;
  logisticsRateMult?: number;
  predictionPenalty?: number;
}

export interface StarholdIncidentDefinition {
  id: StarholdIncidentId;
  moduleId: StarholdModuleId;
  severity: 1 | 2 | 3;
  title: LocalizedString;
  summary: LocalizedString;
  effects: StarholdIncidentEffectProfile;
  fixHint: LocalizedString;
}

export type StarholdPhase = "boot" | "activation" | "awakened";
export type StarholdChapterId = "demo" | "continuation";

export type StarholdEventId =
  | "powerFluctuation"
  | "materialBottleneck"
  | "signalPulse"
  | "signalDrift"
  | "driftLock"
  | "supplyCascade"
  | "voidBreach"
  | "sensorGhosting"
  | "deepTrek"
  | "entropyCascade"
  | "phaseEcho"
  | "emergencyOverride"
  | "avatarPreparation"
  | "waveRecovery";

export type LocalizedString = {
  en: string;
  hu: string;
  de: string;
  ro: string;
};

export interface StarholdEventOption {
  id: string;
  label: LocalizedString;
}

export interface StarholdPendingEvent {
  id: StarholdEventId;
  title: LocalizedString;
  body: LocalizedString;
  options: StarholdEventOption[];
  chainId?: string;
  chainStep?: number;
  chainTotal?: number;
  waveNumber?: number;
}

export interface StarholdEventDefinition {
  id: StarholdEventId;
  minTick: number;
  cooldown: number;
  shouldTrigger: (state: StarholdState) => boolean;
  create: (state: StarholdState) => StarholdPendingEvent;
  resolve: (state: StarholdState, optionId: string) => StarholdState;
}

export type StarholdThreatType = "voidStorm" | "meteorShower" | "distortionWave";

export interface StarholdThreatState {
  type: StarholdThreatType;
  countdown: number; // Ticks until impact
  totalDuration: number; // Original countdown duration
  intensity: number; // 1-10
  fortified: boolean; // Reactor protection
  dampened: boolean; // Sensor protection
  intercepted: boolean; // Logistics protection
  predicted: boolean; // Sensor prediction
  aftershock: number; // Ticks of lingering instability after impact
  pausedUntilAwake: boolean; // True when the demo wave cycle is complete
}

export interface StarholdProgression {
  stars: number;
  completedMilestones: string[];
  unclaimedMilestones: string[];
  unlockedItems: string[];
  lastStarGain: number; // For UI feedback animation
}

export type StarholdOperationType = "scavenge" | "stabilizeReactor" | "repairModule" | "rerouteCore";

export interface StarholdOperationState {
  type: StarholdOperationType;
  moduleId?: StarholdModuleId;
  startedTick: number;
  duration: number;
  remaining: number;
  title: LocalizedString;
  detail: LocalizedString;
}

export interface StarholdScavengeState {
  startedTick: number;
  cycleDuration: number;
  remaining: number;
  completedCycles: number;
}

export type AvatarTraitId = "calm" | "curious" | "protective" | "bold";

export interface StarholdAvatarAnswer {
  questionId: string;
  optionId: string;
  trait: AvatarTraitId;
  label: LocalizedString;
}

export interface StarholdAvatarProfile {
  completedAtTick: number;
  archetype: AvatarTraitId;
  answers: StarholdAvatarAnswer[];
  traitScores: Record<AvatarTraitId, number>;
  title: LocalizedString;
}

export interface StarholdReactorRecoveryState {
  active: boolean;
  completedStabilizations: number;
  nextPromptTick: number;
}

export interface StarholdRepairChallengeState {
  active: boolean;
  startedTick: number;
  promptEndsAtTick: number;
  promptIndex: number;
  sequence: StarholdModuleId[];
  windowSatisfied: boolean;
  unlocksAvatarPrep: boolean;
}

export interface StarholdState {
  tick: number;
  phase: StarholdPhase;
  chapter: StarholdChapterId;
  resources: StarholdResources;
  marks: StarholdMarks;
  anomalies: StarholdAnomaly[];
  entropy: number; // 0-100, affects costs and stability
  threat: StarholdThreatState;
  progression: StarholdProgression;
  modules: Record<StarholdModuleId, StarholdModuleState>;
  alert: LocalizedString | null;
  journal: { tick: number; text: LocalizedString }[];
  avatarAwake: boolean;
  resonance: number; // Current energy resonance/heat during transfer
  lastEventTick: Partial<Record<StarholdEventId, number>>;
  pendingEvent: StarholdPendingEvent | null;
  eventQuietTicks: number;
  worldPulse: number;
  worldPhase: number;
  crisis: boolean; // True if multiple resources are low
  highStability: boolean; // True if stability is very high
  lockdown: boolean; // True if stability reached 0
  recoveryPriority: { moduleId: StarholdModuleId; reason: LocalizedString } | null; // Set after impact, cleared when aftershock ends
  threatCycle: number;
  lastAvatarPulse: number;
  lowEntropyStreak: number;
  highStabilityStreak: number;
  wasCrisis: boolean;
  avatarPulseCount: number;
  lockdownDuration: number;
  stationLost: boolean;
  firstLoopComplete: boolean;
  firstLoopShown: boolean;
  activeOperation: StarholdOperationState | null;
  scavengeOperation: StarholdScavengeState | null;
  reactorRecovery: StarholdReactorRecoveryState;
  postWaveSurgeTicks: number;
  postWaveSurgeMode: "gentle" | "aggressive" | null;
  avatarProfile: StarholdAvatarProfile | null;
  battleState: {
    scoutReports: Record<string, import("./battle/types").ScoutReport>;
    battleHistory: import("./battle/types").BattleHistoryEntry[];
    avatarCombat: import("./battle/avatarCombat").AvatarCombatProfile;
    buildingCooldowns: Record<string, number>;
    activeScout: {
      buildingId: string;
      startedAt: number;
      completesAt: number;
    } | null;
  };
  factionReputation: import("./faction/types").FactionReputationState;
  worldLevel: number;
  worldLevelPending: {
    targetLevel: number;
    scheduledAt: number; // Date.now() + random(24h-48h)
  } | null;
  avatarImprintActive: boolean;
  avatarImprintProgress: number;
  avatarPrepArmedTick: number | null;
  repairChallenge: StarholdRepairChallengeState;
  bootstrapChecklist: Record<StarholdModuleId, boolean>;
  waveRecoveryCalmTicks: number;
  warRoom: import("./warroom/types").WarRoomState;
  repairBay: import("./repairbay/types").RepairBayState;
  lastActiveAt: number;
  moduleLevels: {
    reactor: number;
    logistics: number;
    core: number;
    sensor: number;
    warroom: number;
    repairbay: number;
  };
  /** Active module upgrades (real-time timers) */
  upgradeQueue: ModuleUpgradeSlot[];
  /** How many parallel upgrade slots (default 1, unlockable) */
  upgradeSlotCount: number;
  /** Synergy system state */
  synergies: import("./synergy/types").ActiveSynergies;
  /** Dynamic galaxy cycles/seasons */
  galaxyCycle: import("./galaxy/types").GalaxyCycleState;
  /** Moral dilemma and narrative event system */
  dilemmaSystem: import("./dilemma/types").DilemmaSystemState;
  /** Adaptive commander profile system */
  commander: import("./commander/types").CommanderState;
  tradeSystem: import("./trade/types").TradeSystemState;
  weeklyMission: import("./weekly/types").WeeklyMissionState;
  espionage: import("./espionage/types").EspionageState;
  research: import("./research/types").ResearchState;
  supplyRoutes: import("./supplyroute/types").SupplyRouteState;
}

export interface ModuleUpgradeSlot {
  moduleId: import("../economy").UpgradableModuleId;
  targetLevel: number;
  /** Real timestamp (Date.now()) when upgrade started */
  startedAt: number;
  /** Real timestamp when upgrade completes */
  completesAt: number;
}

export type StarholdCommand =
  | { type: "SCAVENGE" }
  | { type: "STABILIZE_REACTOR" }
  | { type: "REPAIR_MODULE"; moduleId: StarholdModuleId }
  | { type: "REROUTE_TO_CORE" }
  | { type: "CHANNEL_TO_CORE"; amount: number }
  | { type: "DISTORTION_SWEEP" }
  | { type: "PURGE_ANOMALY"; anomalyId: StarholdAnomalyId }
  | { type: "OVERCLOCK_REACTOR" }
  | { type: "OPTIMIZE_LOGISTICS" }
  | { type: "DEEP_SCAN" }
  | { type: "FORTIFY_SHELL" }
  | { type: "DAMPEN_SIGNALS" }
  | { type: "INTERCEPT_THREAT" }
  | { type: "PREDICT_THREAT" }
  | { type: "EMERGENCY_VENT" }
  | { type: "TUNE_SHIELDS" }
  | { type: "EMERGENCY_DISCHARGE" }
  | { type: "RAPID_FABRICATION"; moduleId: StarholdModuleId }
  | { type: "AVATAR_PULSE" }
  | { type: "CLAIM_MILESTONE"; milestoneId: string }
  | { type: "BUY_ITEM"; itemId: string }
  | { type: "ACKNOWLEDGE_PHASE_SHIFT" }
  | { type: "RESOLVE_EVENT"; optionId: string }
  | { type: "CHANNEL_AVATAR_IMPRINT"; amount: number }
  | { type: "RESET_AVATAR_IMPRINT" }
  | { type: "START_SCOUT"; buildingId: string }
  | { type: "COMPLETE_SCOUT" }
  | { type: "APPLY_BATTLE_RESULT"; result: import("./battle/types").BattleResult; nodeId: string }
  | { type: "TRAIN_UNIT"; unitId: import("./warroom/types").WarRoomUnitId; level: number }
  | { type: "UPGRADE_UNIT"; unitId: import("./warroom/types").WarRoomUnitId; fromLevel: number; count: number }
  | { type: "CANCEL_TRAINING"; unitId: import("./warroom/types").WarRoomUnitId }
  | { type: "START_REPAIR"; unitId: import("./warroom/types").WarRoomUnitId; unitLevel: number; count: number }
  | { type: "CANCEL_REPAIR"; slotIndex: number }
  | { type: "UPGRADE_MODULE"; moduleId: import("../economy").UpgradableModuleId }
  | { type: "RESOLVE_DILEMMA"; optionId: string }
  | { type: "ACCEPT_TRADE"; offerId: string }
  | { type: "REJECT_TRADE"; offerId: string }
  | { type: "DEPLOY_WEEKLY_UNITS"; units: Record<string, number> }
  | { type: "SKIP_WEEKLY_MISSION" }
  | { type: "DEPLOY_SPIES"; targetFactionId: import("./faction/types").FactionId; wraithCount: number; missionType: import("./espionage/types").EspionageMissionType }
  | { type: "EXTRACT_SPIES"; missionId: string }
  | { type: "SPEND_INTEL"; action: import("./espionage/types").EspionageIntelAction; extraArg?: any }
  | { type: "START_RESEARCH"; projectId: string }
  | { type: "CANCEL_RESEARCH" }
  | { type: "ESTABLISH_ROUTE"; factionId: import("./faction/types").FactionId; materialId: import("../world/mission").GalaxyMaterialId }
  | { type: "ABANDON_ROUTE"; routeId: string };
