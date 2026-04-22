import type { FactionId } from "../faction/types";
import type { GalaxyMaterialId } from "../../world/mission";

export type TradeMarketState = "cheap" | "normal" | "inflated" | "black_market";
export type TradeRouteType = "local" | "sector" | "deep_sector" | "black_route";
export type TradePartnerType = "loyal_trader" | "opportunist" | "smuggler" | "faction_envoy" | "relic_broker";

export interface TradeOffer {
  id: string;
  factionId: FactionId;
  partnerType: TradePartnerType;
  routeType: TradeRouteType;
  materialOffered: GalaxyMaterialId;
  amountOffered: number;
  materialWanted: GalaxyMaterialId;
  amountWanted: number;
  originalAmountWanted: number;
  expiresAtTick: number; // Simulation tick
  negotiationAttempts: number;
}

export interface ActiveTrade {
  id: string;
  offer: TradeOffer; // The accepted offer details
  startedAtTick: number;
  completesAtTick: number;
  status: "in_transit" | "completed" | "intercepted" | "seized" | "delayed";
}

export interface TradeSystemState {
  marketState: TradeMarketState;
  offers: TradeOffer[];
  activeTrades: ActiveTrade[];
  lastRefreshAtTick: number; // Simulation tick
  marketStateUpdatedAtTick: number;
}