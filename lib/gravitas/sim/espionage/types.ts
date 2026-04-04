export type EspionageMissionType = "infiltrate" | "sabotage" | "intercept" | "deepCover";
export type EspionageMissionPhase = "deploying" | "active" | "exposed" | "extracted" | "lost";

export type EspionageIntelAction = "revealBuilding" | "weakenDefense" | "factionSecret" | "earlyWarning" | "sabotageSupply";

export interface EspionageMission {
  id: string;
  type: EspionageMissionType;
  targetFactionId: import("../faction/types").FactionId;
  wraithCount: number;
  phase: EspionageMissionPhase;
  startedAt: number;
  activeAt: number;
  exposureRisk: number;
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
