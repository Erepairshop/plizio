import type { LocalizedString } from "../types";
import type { WarRoomUnitId } from "../warroom/types";
import type { GalaxyMaterialId } from "../../world/mission";

export type ExpeditionDurationType = "short" | "medium" | "long" | "deep_space";

export interface ExpeditionFleet {
  units: Record<WarRoomUnitId, number>;
  officerId?: string;
}

export type ExpeditionEventResult = "safe" | "reward" | "danger" | "disaster" | "discovery";

export interface ExpeditionLogEntry {
  timestamp: number;
  text: LocalizedString;
  resultType: ExpeditionEventResult;
}

export interface ActiveExpedition {
  id: string;
  durationMode: ExpeditionDurationType;
  fleet: ExpeditionFleet;
  startedAt: number; // Date.now() timestamp
  endsAt: number; // Date.now() + durationMs
  logs: ExpeditionLogEntry[];
  loot: Partial<Record<GalaxyMaterialId | "intel" | "supply", number>>;
  status: "en_route" | "returning" | "completed" | "lost";
  returnAt?: number; // Time when it gets back if 'returning' state is triggered early
}

export interface ExpeditionState {
  activeExpeditions: ActiveExpedition[];
  completedLog: ActiveExpedition[]; // History of finished/lost runs
}