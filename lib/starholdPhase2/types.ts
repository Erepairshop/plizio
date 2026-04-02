export type Phase2View = "station" | "galaxy" | "avatar";
export type Phase2ModuleId = "reactor" | "logistics" | "sensor" | "core";
export type Phase2ResourceId = "alpha" | "beta" | "gamma" | "delta";
export type Phase2Trait = "calm" | "curious" | "protective" | "bold";
export type Phase2NodeKind = "asteroid" | "planet" | "relay" | "mine";

export interface Phase2ModuleState {
  level: number;
  integrity: number;
}

export interface Phase2AvatarState {
  level: number;
  xp: number;
  trait: Phase2Trait;
  power: number;
}

export interface Phase2WaveState {
  countdown: number;
  seed: number;
  shieldTicks: number;
  armorTicks: number;
  autoDefense: boolean;
  lastImpactTick: number | null;
}

export interface Phase2GalaxyNode {
  id: string;
  name: string;
  kind: Phase2NodeKind;
  discovered: boolean;
  missionReady: boolean;
  progress: number;
  reward: {
    alpha: number;
    beta: number;
    gamma: number;
    delta: number;
    xp: number;
    intel: number;
  };
}

export interface Phase2State {
  tick: number;
  view: Phase2View;
  resources: Record<Phase2ResourceId, number>;
  vitals: {
    stability: number;
    energy: number;
  };
  station: Record<Phase2ModuleId, Phase2ModuleState>;
  avatar: Phase2AvatarState;
  galaxy: {
    intel: number;
    hubUnlocked: boolean;
    selectedNodeId: string;
    nodes: Phase2GalaxyNode[];
  };
  wave: Phase2WaveState;
  log: { tick: number; text: string }[];
}
