import type { FactionId } from "../faction/types";
import type { WarRoomUnitId } from "../warroom/types";

export type EspionageMissionType = "passiveScan" | "deepScan" | "infiltrate" | "sabotage" | "counterfeitIntel" | "decoyDeployment";
export type EspionageMissionPhase = "deploying" | "active" | "exposed" | "extracted" | "lost" | "success" | "failed";

export type EspionageTargetType = "faction" | "battle_node" | "trade_route" | "expedition_route";
export type EspionageOperativeRole = "scout" | "infiltrator" | "analyst" | "saboteur";

export interface EspionageTarget {
  type: EspionageTargetType;
  id: string; // FactionId or NodeId
}

export interface EspionageMission {
  id: string;
  type: EspionageMissionType;
  target: EspionageTarget;
  operativeRole: EspionageOperativeRole;
  operativeUnitId: WarRoomUnitId; // Which exact unit was sent
  operativeCount: number;
  phase: EspionageMissionPhase;
  startedAt: number;
  activeAt: number;
  exposureRisk: number; // 0-100
  intelGathered: number;
  intelDepthLevel: number; // 0 to 4
  lastYieldAt: number;
  revealedData: Record<string, any>; // Specific traits, loot hints, etc.
  trapTriggered?: boolean;
}

export interface EspionageState {
  missions: EspionageMission[];
  totalIntel: number;
  extractedCount: number;
  lostCount: number;
  lastExposureEvent: number | null;
  decoyActiveUntil: number | null; // Prevent raids or misdirect them
}

export type EspionageIntelAction = "revealBuilding" | "weakenDefense" | "factionSecret" | "earlyWarning" | "sabotageSupply" | "counterfeitIntel" | "decoyDeployment";

