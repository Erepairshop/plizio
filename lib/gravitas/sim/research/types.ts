import type { LocalizedString } from "../types";
import type { GalaxyMaterialId } from "../../world/mission";

export type ResearchFieldId = "weapons" | "shields" | "logistics" | "sensors" | "void" | "core";
export type ResearchTier = 1 | 2 | 3 | 4 | 5;

export interface ResearchEffect {
  type: "statBoost" | "unlock" | "modifier" | "passive";
  target: string;
  value: number;
  description?: LocalizedString;
}

export interface ResearchPrerequisites {
  projects?: string[];
  moduleLevels?: Partial<Record<string, number>>;
  factionReputation?: Partial<Record<string, number>>;
  resources?: Partial<Record<string, number>>;
  trauma?: Partial<Record<keyof import("../types").StarholdState["statistics"]["trauma"], number>>;
}

export interface ResearchProject {
  id: string;
  fieldId: ResearchFieldId;
  tier: ResearchTier;
  name: LocalizedString;
  description: LocalizedString;
  unlockHint?: LocalizedString;
  effects: ResearchEffect[];
  prerequisites: ResearchPrerequisites;
  materialCost: Partial<Record<GalaxyMaterialId, number>>;
  baseDurationMs?: number; // Override default duration
}

export interface ActiveResearch {
  projectId: string;
  startedAt: number; // Date.now() timestamp
  completesAt: number; // Date.now() timestamp
}

export interface ResearchState {
  completed: string[];
  active: ActiveResearch | null;
  discoveredFields: ResearchFieldId[];
  unlockedTechs: string[];
  calmProductionBuffs: number;
}