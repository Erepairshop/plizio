export type GalaxyCyclePhase = "calm" | "storm" | "war" | "trade";

export interface GalaxyCycleState {
  currentPhase: GalaxyCyclePhase;
  /** Mikor kezdődött az aktuális fázis (Date.now()) */
  phaseStartedAt: number;
  /** Mikor ér véget az aktuális fázis (Date.now()) */
  phaseEndsAt: number;
  /** Hányadik teljes ciklus (0-tól) */
  cycleNumber: number;
}
