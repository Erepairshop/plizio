import type { StarholdState } from "../types";
import type { TradeOffer } from "./types";
import { TRADE_CONFIG, FACTION_REPUTATION_CONFIG } from "../../economy";
import { getReputationTier, getTradeModifier, applyReputationChange } from "../faction/reputation";
import { getCycleEffects } from "../galaxy/cycles";
import type { GalaxyMaterialId } from "../../world/mission";
import type { FactionId } from "../faction/types";
import { loadSavedGalaxyInventory, saveGalaxyInventory } from "../../world/mission";
import { pushJournal } from "../shared";

const MATERIALS: GalaxyMaterialId[] = ["lumen_dust", "verdant_crystals", "aether_ore", "ember_shards", "sable_alloy", "rift_stone"];

function getRandomMaterial(): GalaxyMaterialId {
  return MATERIALS[Math.floor(Math.random() * MATERIALS.length)];
}

function getMaterialBaseValue(matId: GalaxyMaterialId): number {
  const yields: Record<GalaxyMaterialId, number> = {
    lumen_dust: 100,
    verdant_crystals: 82,
    aether_ore: 66,
    ember_shards: 52,
    sable_alloy: 38,
    rift_stone: 26,
  };
  return 1000 / yields[matId];
}

export function generateTradeOffers(state: StarholdState): TradeOffer[] {
  const offers: TradeOffer[] = [];
  const factions = Object.keys(state.factionReputation.reputation) as FactionId[];
  
  if (state.galaxyCycle.currentPhase === "war") return [];

  const numOffers = Math.floor(Math.random() * TRADE_CONFIG.maxOffers) + 1;

  for (let i = 0; i < numOffers; i++) {
    const factionId = factions[Math.floor(Math.random() * factions.length)];
    const rep = state.factionReputation.reputation[factionId];
    const tier = getReputationTier(rep);
    
    if (tier === "hostile") continue;

    const isRare = Math.random() < 0.05 && tier === "allied";
    let materialOffered: GalaxyMaterialId;
    let materialWanted: GalaxyMaterialId;
    let amountOffered: number;
    let amountWanted: number;

    if (isRare) {
      materialOffered = "rift_stone";
      amountOffered = 200;
      materialWanted = "lumen_dust";
      amountWanted = 50;
    } else {
      materialOffered = getRandomMaterial();
      do {
        materialWanted = getRandomMaterial();
      } while (materialOffered === materialWanted);

      amountOffered = Math.floor(Math.random() * 50) + 10;
      
      const baseValueOffered = amountOffered * getMaterialBaseValue(materialOffered);
      const baseAmountWanted = baseValueOffered / getMaterialBaseValue(materialWanted);
      
      const tradeMod = getTradeModifier(tier, state);
      amountWanted = Math.max(1, Math.floor(baseAmountWanted * tradeMod));
      
      if (state.galaxyCycle.currentPhase === "trade") {
         amountWanted = Math.max(1, Math.floor(amountWanted * 0.8));
      }
    }

    offers.push({
      id: `trade_${Date.now()}_${i}`,
      factionId,
      materialOffered,
      amountOffered,
      materialWanted,
      amountWanted,
      expiresAt: Date.now() + (TRADE_CONFIG.refreshHours * 60 * 60 * 1000) * (state.galaxyCycle.currentPhase === "trade" ? 0.5 : 1),
    });
  }

  return offers;
}

export function tickTradeSystem(state: StarholdState): StarholdState {
  const now = Date.now();
  let nextState = state;
  let mutated = false;

  const validOffers = state.tradeSystem.offers.filter(o => now < o.expiresAt);
  if (validOffers.length !== state.tradeSystem.offers.length) {
    nextState = {
      ...nextState,
      tradeSystem: {
        ...nextState.tradeSystem,
        offers: validOffers,
      }
    };
    mutated = true;
  }

  const refreshInterval = TRADE_CONFIG.refreshHours * 60 * 60 * 1000 * (state.galaxyCycle.currentPhase === "trade" ? 0.5 : 1);
  if (now - state.tradeSystem.lastRefreshAt >= refreshInterval) {
    const newOffers = generateTradeOffers(nextState);
    nextState = {
      ...nextState,
      tradeSystem: {
        ...nextState.tradeSystem,
        offers: [...validOffers, ...newOffers].slice(-TRADE_CONFIG.maxOffers),
        lastRefreshAt: now,
      }
    };
    mutated = true;
  }

  return mutated ? nextState : state;
}

export function acceptTrade(state: StarholdState, offerId: string): StarholdState {
  const offer = state.tradeSystem.offers.find(o => o.id === offerId);
  if (!offer) return state;

  const inventory = loadSavedGalaxyInventory();
  if ((inventory[offer.materialWanted] ?? 0) < offer.amountWanted) {
    return {
      ...state,
      alert: {
        en: "Not enough materials for this trade.",
        hu: "Nincs elég anyag ehhez az üzlethez.",
        de: "Nicht genug Materialien für diesen Handel.",
        ro: "Materiale insuficiente pentru acest schimb.",
      }
    };
  }

  inventory[offer.materialWanted] = (inventory[offer.materialWanted] ?? 0) - offer.amountWanted;
  inventory[offer.materialOffered] = (inventory[offer.materialOffered] ?? 0) + offer.amountOffered;
  saveGalaxyInventory(inventory);

  const nextReputation = applyReputationChange(
    state.factionReputation.reputation,
    offer.factionId,
    FACTION_REPUTATION_CONFIG.changes.tradeAccepted,
    "trade_accepted",
    state
  );

  const text = {
    en: `Trade accepted with ${offer.factionId}.`,
    hu: `Kereskedelem elfogadva: ${offer.factionId}.`,
    de: `Handel mit ${offer.factionId} akzeptiert.`,
    ro: `Schimb acceptat cu ${offer.factionId}.`,
  };

  return {
    ...state,
    factionReputation: {
      ...state.factionReputation,
      reputation: nextReputation,
    },
    tradeSystem: {
      ...state.tradeSystem,
      offers: state.tradeSystem.offers.filter(o => o.id !== offerId),
    },
    alert: text,
    journal: pushJournal(state, text),
  };
}

export function rejectTrade(state: StarholdState, offerId: string): StarholdState {
  const offer = state.tradeSystem.offers.find(o => o.id === offerId);
  if (!offer) return state;

  const nextReputation = applyReputationChange(
    state.factionReputation.reputation,
    offer.factionId,
    FACTION_REPUTATION_CONFIG.changes.tradeRejected,
    "trade_rejected",
    state
  );

  return {
    ...state,
    factionReputation: {
      ...state.factionReputation,
      reputation: nextReputation,
    },
    tradeSystem: {
      ...state.tradeSystem,
      offers: state.tradeSystem.offers.filter(o => o.id !== offerId),
    }
  };
}