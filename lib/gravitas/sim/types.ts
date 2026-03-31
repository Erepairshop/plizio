export type StarholdModuleId = "reactor" | "logistics" | "core" | "sensor";

export interface StarholdModuleState {
  id: StarholdModuleId;
  name: string;
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
  name: string;
  severity: number;
  duration?: number; // ticks remaining, if any
}

export type StarholdPhase = "boot" | "activation" | "awakened";

export type StarholdEventId =
  | "powerFluctuation"
  | "materialBottleneck"
  | "signalPulse"
  | "driftLock"
  | "supplyCascade"
  | "voidBreach"
  | "sensorGhosting"
  | "deepTrek"
  | "entropyCascade";

export interface StarholdEventOption {
  id: string;
  label: string;
}

export interface StarholdPendingEvent {
  id: StarholdEventId;
  title: string;
  body: string;
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

export interface StarholdState {
  tick: number;
  phase: StarholdPhase;
  resources: StarholdResources;
  marks: StarholdMarks;
  anomalies: StarholdAnomaly[];
  entropy: number; // 0-100, affects costs and stability
  modules: Record<StarholdModuleId, StarholdModuleState>;
  alert: string | null;
  journal: string[];
  avatarAwake: boolean;
  resonance: number; // Current energy resonance/heat during transfer
  lastEventTick: Partial<Record<StarholdEventId, number>>;
  pendingEvent: StarholdPendingEvent | null;
}

export type StarholdCommand =
  | { type: "SCAVENGE" }
  | { type: "STABILIZE_REACTOR" }
  | { type: "REPAIR_MODULE"; moduleId: Exclude<StarholdModuleId, "reactor"> }
  | { type: "REROUTE_TO_CORE" }
  | { type: "CHANNEL_TO_CORE"; amount: number }
  | { type: "DISTORTION_SWEEP" }
  | { type: "PURGE_ANOMALY"; anomalyId: StarholdAnomalyId }
  | { type: "OVERCLOCK_REACTOR" }
  | { type: "OPTIMIZE_LOGISTICS" }
  | { type: "DEEP_SCAN" }
  | { type: "RESOLVE_EVENT"; optionId: string };
