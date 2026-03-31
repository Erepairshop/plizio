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

export type StarholdPhase = "boot" | "activation" | "awakened";

export type StarholdEventId = "powerFluctuation" | "materialBottleneck" | "signalPulse";

export interface StarholdEventOption {
  id: string;
  label: string;
}

export interface StarholdPendingEvent {
  id: StarholdEventId;
  title: string;
  body: string;
  options: StarholdEventOption[];
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
  modules: Record<StarholdModuleId, StarholdModuleState>;
  alert: string | null;
  journal: string[];
  avatarAwake: boolean;
  lastEventTick: Partial<Record<StarholdEventId, number>>;
  pendingEvent: StarholdPendingEvent | null;
}

export type StarholdCommand =
  | { type: "SCAVENGE" }
  | { type: "STABILIZE_REACTOR" }
  | { type: "REPAIR_MODULE"; moduleId: Exclude<StarholdModuleId, "reactor"> }
  | { type: "REROUTE_TO_CORE" }
  | { type: "CHANNEL_TO_CORE"; amount: number }
  | { type: "RESOLVE_EVENT"; optionId: string };
