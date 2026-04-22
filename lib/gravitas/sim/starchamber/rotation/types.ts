import type { LocalizedString } from "../../types";
import type { StarChamberCategory } from "../types";

export type StarChamberOfferType = 
  | "unlock"           // Permanent unlock of a chamber item
  | "consumable"       // One-time use effect
  | "refill"           // Refill a resource or charge
  | "cooldown_reset"   // Reset a specific item's cooldown
  | "temporary_buff"   // Buff for X ticks
  | "discount";        // Trade or research discount

export interface StarChamberOffer {
  id: string;
  instanceId: string; // Unique for this rotation instance
  category: StarChamberCategory;
  type: StarChamberOfferType;
  name: LocalizedString;
  description: LocalizedString;
  cost: {
    stars?: number;
    resources?: Partial<Record<keyof import("../../types").StarholdResources, number>>;
    antimatter?: number;
  };
  /** If it's a temporary buff, how long it lasts in ticks */
  durationTicks?: number;
  /** For consumables/refills, what is the effect value */
  effectValue?: number;
  /** Target ID for unlock/reset/buff (e.g. itemId, moduleId) */
  targetId?: string;
  /** Stock limit for this rotation */
  stock: number;
  claimedCount: number;
}

export interface StarChamberRotationState {
  dailyOffers: StarChamberOffer[];
  weeklyOffers: StarChamberOffer[];
  lastDailyRefreshTick: number;
  lastWeeklyRefreshTick: number;
  /** Seed used for the current rotation to ensure persistence across loads */
  currentSeed: number;
}
