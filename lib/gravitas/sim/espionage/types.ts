import type { FactionId } from "../faction/types";

export type EspionageMissionType = "infiltrate" | "sabotage" | "intercept" | "deepCover";
export type EspionageMissionPhase = "deploying" | "active" | "exposed" | "extracted" | "lost";

export interface EspionageMission {
  id: string;
  type: EspionageMissionType;
  targetFactionId: FactionId;
  wraithCount: number;
  phase: EspionageMissionPhase;
  startedAt: number;
  activeAt: number;
  exposureRisk: number; // 0-100
  intelGathered: number;
  lastYieldAt: number;
}

export interface EspionageState {
  missions: EspionageMission[];
  totalIntel: number;
  extractedCount: number;
  lostCount: number;
  lastExposureEvent: number | null;
}

export type EspionageIntelAction = "revealBuilding" | "weakenDefense" | "factionSecret" | "earlyWarning" | "sabotageSupply";
