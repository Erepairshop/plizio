export type GalaxyCyclePhase = "calm" | "storm" | "war" | "trade";

export interface GalaxyCycleState {
  currentPhase: GalaxyCyclePhase;
  /** Mikor kezdődött az aktuális fázis (simulation tick) */
  phaseStartedAtTick: number;
  /** Mikor ér véget az aktuális fázis (simulation tick) */
  phaseEndsAtTick: number;
  /** Hányadik teljes ciklus (0-tól) */
  cycleNumber: number;
}
