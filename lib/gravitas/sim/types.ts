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
  materials: number;
  stability: number;
  activation: number;
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

export type StarholdPhase = "boot" | "activation" | "awakened";

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

export interface StarholdReactorRecoveryState {
  active: boolean;
  completedStabilizations: number;
  nextPromptTick: number;
}

export interface StarholdState {
  tick: number;
  phase: StarholdPhase;
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
  | { type: "RESOLVE_EVENT"; optionId: string };
