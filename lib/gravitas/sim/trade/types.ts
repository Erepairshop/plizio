import type { FactionId } from "../faction/types";
import type { GalaxyMaterialId } from "../../world/mission";

export interface TradeOffer {
  id: string;
  factionId: FactionId;
  materialOffered: GalaxyMaterialId;
  amountOffered: number;
  materialWanted: GalaxyMaterialId;
  amountWanted: number;
  expiresAt: number; // Date.now() timestamp
}

export interface TradeSystemState {
  offers: TradeOffer[];
  lastRefreshAt: number; // Date.now() timestamp
}