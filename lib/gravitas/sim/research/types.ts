import type { LocalizedString } from "../types";
import type { GalaxyMaterialId } from "../../world/mission";

export type ResearchFieldId = "weapons" | "shields" | "logistics" | "sensors" | "void";
export type ResearchTier = 1 | 2 | 3 | 4;

export interface ResearchEffect {
  type: "statBoost" | "unlock" | "modifier" | "passive";
  target: string;
  value: number;
}

export interface ResearchProject {
  id: string;
  fieldId: ResearchFieldId;
  tier: ResearchTier;
  name: LocalizedString;
  description: LocalizedString;
  effect: ResearchEffect;
  prerequisites: string[];
  materialCost: Partial<Record<GalaxyMaterialId, number>>;
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
}