export type FactionId = "korgath" | "velari" | "drex" | "synthoid" | "noma";

export type ReputationTier = "hostile" | "tense" | "neutral" | "friendly" | "allied";

export interface FactionRelations {
  enemies: FactionId[];
  allies: FactionId[];
}

export interface FactionReputationState {
  /** -100 to +100 per faction */
  reputation: Record<FactionId, number>;
  /** Last time natural drift was applied (Date.now()) */
  lastDriftAt: number;
}

export type ReputationChangeReason =
  | "battle_victory"
  | "battle_defeat"
  | "trade_accepted"
  | "trade_rejected"
  | "dilemma_help"
  | "dilemma_reject"
  | "espionage_caught"
  | "natural_drift"
  | "event";
