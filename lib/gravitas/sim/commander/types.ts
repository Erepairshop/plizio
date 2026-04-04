import type { LocalizedString } from "../types";

export type CommanderProfileId = "conqueror" | "merchant" | "strategist" | "guardian";

export interface CommanderMetrics {
  battlesInitiated: number;    // támadó csaták
  battlesDefended: number;     // védelmi csaták
  miningMissions: number;      // drón küldetések
  unitsRepaired: number;       // javított egységek
  moduleLevelVariance: number; // modulok szintjének szórása (alacsony = kiegyensúlyozott)
  lastEvaluatedAt: number;     // Date.now()
}

export interface CommanderProfileEffects {
  attackBonus?: number;        // % (0.1 = +10%)
  lootBonus?: number;          // %
  miningBonus?: number;        // %
  tradeDiscount?: number;      // %
  repairSpeedBonus?: number;   // %
  defenseBonus?: number;       // %
  allStatsBonus?: number;      // %
  reputationChangeMod?: number; // % (0.8 = -20% change efficiency)
  attackPenalty?: number;      // %
  defensePenalty?: number;     // %
}

export interface CommanderProfileDef {
  id: CommanderProfileId;
  name: LocalizedString;
  description: LocalizedString;
  effects: CommanderProfileEffects;
}

export interface CommanderState {
  currentProfile: CommanderProfileId;
  metrics: CommanderMetrics;
  effects: CommanderProfileEffects;
}
