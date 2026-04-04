import type { FactionId } from "../faction/types";
import type { LocalizedString } from "../types";

export type OfficerTraitId = "tactician" | "brute" | "defender" | "scavenger" | "inspirer";

export interface OfficerTrait {
  id: OfficerTraitId;
  name: LocalizedString;
  description: LocalizedString;
}

export interface Officer {
  id: string;
  name: string;
  factionId: FactionId;
  portrait: string; // just a color or icon name for now
  level: number;
  xp: number;
  trait: OfficerTraitId;
  status: "ready" | "wounded" | "dead";
  availableAt: number; // if wounded, when they are ready again
}

export interface OfficerState {
  active: Officer[];
  recruits: Officer[];
  lastRecruitRefresh: number; // Date.now() timestamp
}