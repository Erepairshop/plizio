export type ConcordStatus = "none" | "candidate" | "member" | "revoked";

export interface ConcordViolation {
  ruleId: string;
  tick: number;
}

export interface ConcordRuleDefinition {
  id: string;
  label: { en: string; hu: string; de: string; ro: string };
  check: (state: import("../types").StarholdState) => boolean; // true = compliant
  penaltyPoints: number; // standing loss if violated
  bonusPoints: number;   // standing gain if compliant
}

export interface ConcordState {
  status: ConcordStatus;
  standing: number;         // 0–100
  violations: ConcordViolation[];
  totalViolations: number;
  lastEvaluatedTick: number;
}
