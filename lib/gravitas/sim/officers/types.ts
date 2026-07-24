import type { FactionId } from "../faction/types";
import type { LocalizedString } from "../types";

export type OfficerTraitId = "tactician" | "brute" | "defender" | "scavenger" | "inspirer";
export type OfficerPersonality = "loyal" | "ambitious" | "mercenary" | "rebellious" | "stoic";
export type OfficerMood = "elated" | "content" | "neutral" | "tense" | "resentful";
export type OfficerAssignment = "research" | "warroom" | "scout" | "repair" | "trade" | "anomaly";
export type OfficerMissionType = "recon" | "patrol" | "salvage" | "negotiation" | "training";
export type OfficerMissionOutcome = "success" | "partial" | "failure" | "wound";

export interface OfficerMission {
  type: OfficerMissionType;
  startTick: number;
  endTick: number;
}

export interface OfficerMissionReport {
  tick: number;
  missionType: OfficerMissionType;
  outcome: OfficerMissionOutcome;
  loyaltyDelta: number;
  lootKey?: import("../../world/mission").GalaxyMaterialId;
  lootAmount?: number;
  note: LocalizedString;
}

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
  availableAtTick: number; // if wounded, when they are ready again
  personality: OfficerPersonality;
  loyalty: number;
  mood: OfficerMood;
  avatarAffinity: string[];
  assignment: OfficerAssignment | null;
  missionStatus: "idle" | "on_mission";
  currentMission?: OfficerMission;
  recentReports: OfficerMissionReport[];
}

export interface OfficerState {
  active: Officer[];
  recruits: Officer[];
  lastRecruitRefreshTick: number;
}
