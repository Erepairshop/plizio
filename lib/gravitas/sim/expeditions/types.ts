import type { LocalizedString } from "../types";
import type { WarRoomUnitId } from "../warroom/types";
import type { GalaxyMaterialId } from "../../world/mission";

export type ExpeditionDurationType = "short" | "medium" | "long" | "deep_space";

export type ExpeditionRouteProfile = "safe" | "balanced" | "risky" | "deep_space" | "black_route";
export type ExpeditionCrewProfile = "scout_heavy" | "assault_heavy" | "support_heavy" | "tank_heavy" | "mixed";

export interface ExpeditionFleet {
  units: Record<WarRoomUnitId, number>;
  originalComposition?: Record<WarRoomUnitId, number>;
  officerId?: string;
}

export type ExpeditionEventResult = "safe" | "reward" | "danger" | "disaster" | "discovery" | "ambush_survived" | "ambush_lost" | "signal_trace" | "lost_route";

export interface ExpeditionLogEntry {
  tick: number;
  text: LocalizedString;
  resultType: ExpeditionEventResult;
}

export interface ExpeditionRewardBreakdown {
  baseLoot: Partial<Record<GalaxyMaterialId | "intel" | "supply", number>>;
  routeBonusMult: number;
  crewBonusMult: number;
  durationBonusMult: number;
  intelBonusAmount: number;
  rareDiscoveryBonus?: { name: LocalizedString, amount: number };
  riskPenaltyMult: number;
  finalLoot: Partial<Record<GalaxyMaterialId | "intel" | "supply", number>>;
}

export interface ActiveExpedition {
  id: string;
  durationMode: ExpeditionDurationType;
  routeProfile: ExpeditionRouteProfile;
  crewProfile: ExpeditionCrewProfile;
  fleet: ExpeditionFleet;
  startedAtTick: number; // Simulation tick
  endsAtTick: number; // Simulation tick
  logs: ExpeditionLogEntry[];
  loot: Partial<Record<GalaxyMaterialId | "intel" | "supply", number>>;
  status: "en_route" | "returning" | "completed" | "lost";
  returnAtTick?: number; // Simulation tick
  recalled: boolean; // Was it manually recalled?
  casualties: {
    killed: Partial<Record<WarRoomUnitId, number>>;
    wounded: Partial<Record<WarRoomUnitId, number>>;
  }; // Track lost units during the expedition
  lessonText?: LocalizedString;
  rewardBreakdown?: ExpeditionRewardBreakdown;
}

export interface ExpeditionState {
  activeExpeditions: ActiveExpedition[];
  completedLog: ActiveExpedition[]; // History of finished/lost runs
}