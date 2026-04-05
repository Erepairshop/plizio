import type { StarholdState } from "../types";
import type { TradeOffer, TradeMarketState, TradePartnerType, TradeRouteType, ActiveTrade } from "./types";
import { TRADE_CONFIG, FACTION_REPUTATION_CONFIG } from "../../economy";
import { getReputationTier, getTradeModifier, applyReputationChange } from "../faction/reputation";
import { getCycleEffects } from "../galaxy/cycles";
import type { GalaxyMaterialId } from "../../world/mission";
import type { FactionId } from "../faction/types";
import { loadSavedGalaxyInventory, saveGalaxyInventory } from "../../world/mission";
import { pushJournal } from "../shared";
import { getResearchEffect } from "../research/engine";
import { nextRandom, randomInt } from "../rng";

const MATERIALS: GalaxyMaterialId[] = ["lumen_dust", "verdant_crystals", "aether_ore", "ember_shards", "sable_alloy", "rift_stone"];

function getRandomMaterial(rngState: number): { material: GalaxyMaterialId; nextState: number } {
  const { value, nextState } = randomInt(rngState, 0, MATERIALS.length - 1);
  return { material: MATERIALS[value], nextState };
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

const PARTNERS: TradePartnerType[] = ["loyal_trader", "opportunist", "smuggler", "faction_envoy", "relic_broker"];
const ROUTES: TradeRouteType[] = ["local", "sector", "deep_sector", "black_route"];

function getRouteDuration(routeType: TradeRouteType): number {
  switch (routeType) {
    case "local": return 0; // Instant
    case "sector": return 4 * 60 * 60 * 1000;
    case "deep_sector": return 12 * 60 * 60 * 1000;
    case "black_route": return 24 * 60 * 60 * 1000;
  }
}

function updateMarketState(state: StarholdState): { marketState: TradeMarketState; nextState: number } {
  let currentRngState = state.globalRngState;
  const { value: roll, nextState: s1 } = nextRandom(currentRngState);
  currentRngState = s1;

  const isCurious = !!state.battleState.avatarCombat.innateBonus?.intel; // Curious trait

  // Base chances
  let cheap = 0.2;
  let inflated = 0.2;
  let black_market = 0.05;
  let normal = 0.55;

  if (state.galaxyCycle.currentPhase === "trade") {
    cheap += 0.2; normal -= 0.2;
  } else if (state.galaxyCycle.currentPhase === "war") {
    inflated += 0.3; normal -= 0.3;
  } else if (state.galaxyCycle.currentPhase === "storm") {
    black_market += 0.15; normal -= 0.15;
  }

  if (isCurious) {
    black_market += 0.05;
    normal -= 0.05;
  }

  let finalState: TradeMarketState = "normal";
  if (roll < cheap) finalState = "cheap";
  else if (roll < cheap + inflated) finalState = "inflated";
  else if (roll < cheap + inflated + black_market) finalState = "black_market";
  
  return { marketState: finalState, nextState: currentRngState };
}

export function generateTradeOffers(state: StarholdState): { offers: TradeOffer[]; nextState: number } {
  const offers: TradeOffer[] = [];
  const factions = Object.keys(state.factionReputation.reputation) as FactionId[];
  
  let currentRngState = state.globalRngState;
  
  const isCurious = !!state.battleState.avatarCombat.innateBonus?.intel;
  const isBold = !!state.battleState.avatarCombat.innateBonus?.firepower;

  if (state.galaxyCycle.currentPhase === "war" && state.tradeSystem.marketState !== "black_market") {
    const { value: wRoll, nextState: sWar } = nextRandom(currentRngState);
    currentRngState = sWar;
    if (wRoll > 0.3) return { offers: [], nextState: currentRngState };
  }

  const { value: rCount, nextState: sCount } = nextRandom(currentRngState);
  currentRngState = sCount;
  const numOffers = Math.floor(rCount * TRADE_CONFIG.maxOffers) + 1;

  for (let i = 0; i < numOffers; i++) {
    const { value: rFacId, nextState: sFacId } = randomInt(currentRngState, 0, factions.length - 1);
    currentRngState = sFacId;
    const factionId = factions[rFacId];
    
    const rep = state.factionReputation.reputation[factionId];
    const tier = getReputationTier(rep);
    
    if (tier === "hostile") continue;

    // Determine Partner & Route
    const { value: rPart, nextState: sPart } = randomInt(currentRngState, 0, PARTNERS.length - 1);
    currentRngState = sPart;
    let partnerType: TradePartnerType = PARTNERS[rPart];

    const { value: rRoute, nextState: sRoute } = randomInt(currentRngState, 0, ROUTES.length - 1);
    currentRngState = sRoute;
    let routeType: TradeRouteType = ROUTES[rRoute];

    // Constraints
    if (state.tradeSystem.marketState === "black_market") {
      const { value: bRoll1, nextState: sb1 } = nextRandom(currentRngState);
      const { value: bRoll2, nextState: sb2 } = nextRandom(sb1);
      currentRngState = sb2;

      let smugglerChance = 0.5;
      if (isCurious) smugglerChance += 0.2; // Curious finds smugglers easier

      partnerType = bRoll1 < smugglerChance ? "smuggler" : "opportunist";
      routeType = bRoll2 > 0.5 ? "black_route" : "deep_sector";
    } else if (tier === "allied") {
      const { value: aRoll, nextState: sa1 } = nextRandom(currentRngState);
      currentRngState = sa1;
      partnerType = aRoll > 0.3 ? "faction_envoy" : "loyal_trader";
    }

    const { value: rRare, nextState: sRare } = nextRandom(currentRngState);
    currentRngState = sRare;
    const isRare = (rRare < 0.05 && tier === "allied") || partnerType === "relic_broker" || state.tradeSystem.marketState === "black_market";
    
    let materialOffered: GalaxyMaterialId;
    let materialWanted: GalaxyMaterialId;
    let amountOffered: number;
    let amountWanted: number;

    if (isRare) {
      const { value: rrType1, nextState: sr1 } = nextRandom(currentRngState);
      const { value: rrAmt1, nextState: sr2 } = nextRandom(sr1);
      const { value: rrType2, nextState: sr3 } = nextRandom(sr2);
      const { value: rrAmt2, nextState: sr4 } = nextRandom(sr3);
      currentRngState = sr4;

      materialOffered = rrType1 > 0.5 ? "rift_stone" : "sable_alloy";
      amountOffered = Math.floor(rrAmt1 * 50) + 20;
      materialWanted = rrType2 > 0.5 ? "lumen_dust" : "verdant_crystals";
      amountWanted = Math.floor(rrAmt2 * 300) + 100;
    } else {
      const { material: matOff, nextState: sMat1 } = getRandomMaterial(currentRngState);
      materialOffered = matOff;
      currentRngState = sMat1;

      do {
        const { material: matWant, nextState: sMat2 } = getRandomMaterial(currentRngState);
        materialWanted = matWant;
        currentRngState = sMat2;
      } while (materialOffered === materialWanted);

      const { value: rAmt, nextState: sAmt } = nextRandom(currentRngState);
      currentRngState = sAmt;
      amountOffered = Math.floor(rAmt * 50) + 10;
      
      const baseValueOffered = amountOffered * getMaterialBaseValue(materialOffered);
      const baseAmountWanted = baseValueOffered / getMaterialBaseValue(materialWanted);
      
      let tradeMod = getTradeModifier(tier, state);
      
      // Market State Modifiers
      if (state.tradeSystem.marketState === "cheap") tradeMod *= 0.8;
      if (state.tradeSystem.marketState === "inflated") tradeMod *= 1.3;
      if (state.tradeSystem.marketState === "black_market") {
        const { value: rbMarket, nextState: sbm } = nextRandom(currentRngState);
        currentRngState = sbm;
        tradeMod *= rbMarket > 0.5 ? 0.5 : 2.0; // Wild swings
      }

      // Partner Modifiers
      if (partnerType === "loyal_trader") tradeMod *= 0.9;
      if (partnerType === "opportunist") tradeMod *= 1.2;

      amountWanted = Math.max(1, Math.floor(baseAmountWanted * tradeMod));
      
      if (state.galaxyCycle.currentPhase === "trade") {
         amountWanted = Math.max(1, Math.floor(amountWanted * 0.8));
      }
    }

    if (isBold && routeType === "black_route") {
       amountOffered = Math.floor(amountOffered * 1.2); // Bold bonus
    }

    offers.push({
      id: `trade_${Date.now()}_${i}`,
      factionId,
      partnerType,
      routeType,
      materialOffered,
      amountOffered,
      materialWanted,
      amountWanted,
      originalAmountWanted: amountWanted,
      expiresAt: Date.now() + (TRADE_CONFIG.refreshHours * 60 * 60 * 1000) * (state.galaxyCycle.currentPhase === "trade" ? 0.5 : 1),
      negotiationAttempts: 0,
    });
  }

  return { offers, nextState: currentRngState };
}

export function tickTradeSystem(state: StarholdState): StarholdState {
  const now = Date.now();
  let nextState = state;
  let mutated = false;
  let currentRngState = state.globalRngState;

  const isProtective = !!state.battleState.avatarCombat.innateBonus?.inspiration;
  const isBold = !!state.battleState.avatarCombat.innateBonus?.firepower;

  // 1. Market State Cycle (every 24h roughly)
  if (now - nextState.tradeSystem.marketStateUpdatedAt > 24 * 60 * 60 * 1000) {
    const { marketState: nextMarketState, nextState: msRng } = updateMarketState({ ...nextState, globalRngState: currentRngState });
    currentRngState = msRng;

    nextState = {
      ...nextState,
      tradeSystem: {
        ...nextState.tradeSystem,
        marketState: nextMarketState,
        marketStateUpdatedAt: now,
      },
      journal: pushJournal(nextState, {
        en: `Market state shifted to: ${nextMarketState.replace('_', ' ').toUpperCase()}`,
        hu: `Piaci állapot megváltozott: ${nextMarketState.replace('_', ' ').toUpperCase()}`,
        de: `Marktzustand geändert zu: ${nextMarketState.replace('_', ' ').toUpperCase()}`,
        ro: `Starea pieței s-a schimbat în: ${nextMarketState.replace('_', ' ').toUpperCase()}`,
      })
    };
    mutated = true;
  }

  // 2. Offer Expiration
  const validOffers = nextState.tradeSystem.offers.filter(o => now < o.expiresAt);
  if (validOffers.length !== nextState.tradeSystem.offers.length) {
    nextState = {
      ...nextState,
      tradeSystem: {
        ...nextState.tradeSystem,
        offers: validOffers,
      }
    };
    mutated = true;
  }

  // 3. Offer Generation
  const refreshInterval = TRADE_CONFIG.refreshHours * 60 * 60 * 1000 * (state.galaxyCycle.currentPhase === "trade" ? 0.5 : 1);
  if (now - nextState.tradeSystem.lastRefreshAt >= refreshInterval) {
    const { offers: newOffers, nextState: oRng } = generateTradeOffers({ ...nextState, globalRngState: currentRngState });
    currentRngState = oRng;

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

  // 4. Process Active (In-Transit) Trades
  const remainingActiveTrades: ActiveTrade[] = [];
  for (const trade of nextState.tradeSystem.activeTrades) {
    if (trade.status !== "in_transit" && trade.status !== "delayed") {
      remainingActiveTrades.push(trade);
      continue;
    }

    // Check completion
    if (now >= trade.completesAt) {
      mutated = true;
      trade.status = "completed";

      // Give goods
      const inventory = loadSavedGalaxyInventory();
      inventory[trade.offer.materialOffered] = (inventory[trade.offer.materialOffered] ?? 0) + trade.offer.amountOffered;
      saveGalaxyInventory(inventory);

      // Rep change
      const nextReputation = applyReputationChange(
        nextState.factionReputation.reputation,
        trade.offer.factionId,
        FACTION_REPUTATION_CONFIG.changes.tradeAccepted,
        "trade_accepted",
        nextState
      );
      nextState.factionReputation.reputation = nextReputation;

      const text = {
        en: `Shipment arrived from ${trade.offer.factionId}. +${trade.offer.amountOffered} ${trade.offer.materialOffered.split('_')[0].toUpperCase()}`,
        hu: `Szállítmány megérkezett innen: ${trade.offer.factionId}. +${trade.offer.amountOffered} ${trade.offer.materialOffered.split('_')[0].toUpperCase()}`,
        de: `Lieferung von ${trade.offer.factionId} eingetroffen. +${trade.offer.amountOffered} ${trade.offer.materialOffered.split('_')[0].toUpperCase()}`,
        ro: `Transport sosit de la ${trade.offer.factionId}. +${trade.offer.amountOffered} ${trade.offer.materialOffered.split('_')[0].toUpperCase()}`,
      };
      nextState.journal = pushJournal(nextState, text);
      nextState.alert = text;
      continue; // Remove from active (or keep in a log if desired, but we drop it for now)
    }

    // Random Events during transit
    const riskCheckInterval = 2 * 60 * 60 * 1000; // Check every 2 hours
    const tradeAge = now - trade.startedAt;
    const isCheckTime = tradeAge > 0 && Math.floor(tradeAge / 1000) % Math.floor(riskCheckInterval / 1000) === 0;

    if (isCheckTime) {
      let baseRisk = trade.offer.routeType === "local" ? 0 : trade.offer.routeType === "sector" ? 0.05 : trade.offer.routeType === "deep_sector" ? 0.15 : 0.3;
      if (trade.offer.partnerType === "smuggler") baseRisk += 0.1;
      
      // Espionage intel lowers risk
      const intelRiskReduction = Math.min(0.5, nextState.espionage.totalIntel / 1000); 
      baseRisk *= (1 - intelRiskReduction);

      const { value: riskRoll, nextState: rState1 } = nextRandom(currentRngState);
      currentRngState = rState1;

      if (riskRoll < baseRisk) {
        mutated = true;
        const { value: eventRoll, nextState: rState2 } = nextRandom(currentRngState);
        currentRngState = rState2;
        
        let seizedChance = 0.7;
        if (isProtective) seizedChance -= 0.15;

        if (eventRoll < 0.4) {
          // Delayed
          trade.status = "delayed";
          trade.completesAt += 4 * 60 * 60 * 1000;
          nextState.journal = pushJournal(nextState, {
            en: `Trade shipment from ${trade.offer.factionId} delayed due to spatial hazards.`,
            hu: `A(z) ${trade.offer.factionId} frakciótól érkező szállítmány tér-anomáliák miatt késik.`,
            de: `Handelslieferung von ${trade.offer.factionId} wegen räumlicher Gefahren verzögert.`,
            ro: `Transportul de comerț de la ${trade.offer.factionId} a întârziat din cauza pericolelor spațiale.`,
          });
        } else if (eventRoll < seizedChance && trade.offer.partnerType === "smuggler") {
          // Seized (Total Loss)
          trade.status = "seized";

          if (isBold) {
             nextState.factionReputation.reputation = applyReputationChange(
                nextState.factionReputation.reputation,
                trade.offer.factionId,
                -10, // Double penalty for Bold
                "trade_rejected", 
                nextState
             );
          }

          nextState.journal = pushJournal(nextState, {
            en: `Smuggler intercepted. Trade shipment from ${trade.offer.factionId} was seized by authorities. Total loss.`,
            hu: `Csempész elfogva. A(z) ${trade.offer.factionId} szállítmányát elkobozták a hatóságok. Teljes veszteség.`,
            de: `Schmuggler abgefangen. Handelslieferung von ${trade.offer.factionId} von den Behörden beschlagnahmt. Totalverlust.`,
            ro: `Contrabandist interceptat. Transportul de la ${trade.offer.factionId} a fost confiscat. Pierdere totală.`,
          });
          continue; // Drop from active
        } else {
          // Scandal / Rep hit
          nextState.factionReputation.reputation = applyReputationChange(
            nextState.factionReputation.reputation,
            trade.offer.factionId,
            -5,
            "trade_rejected", // Reusing this penalty logic
            nextState
          );
          nextState.journal = pushJournal(nextState, {
            en: `Trade operation with ${trade.offer.factionId} caused a minor diplomatic scandal. Reputation dropped.`,
            hu: `A(z) ${trade.offer.factionId} frakcióval való üzlet kisebb diplomáciai botrányt okozott. A reputáció csökkent.`,
            de: `Handelsoperation mit ${trade.offer.factionId} verursachte einen kleinen diplomatischen Skandal. Ruf gesunken.`,
            ro: `Operațiunea de comerț cu ${trade.offer.factionId} a provocat un mic scandal diplomatic. Reputația a scăzut.`,
          });
        }
      }
    }
    
    remainingActiveTrades.push(trade);
  }

  if (mutated) {
    nextState = {
      ...nextState,
      globalRngState: currentRngState,
      tradeSystem: {
        ...nextState.tradeSystem,
        activeTrades: remainingActiveTrades,
      }
    };
  }

  return { ...nextState, globalRngState: currentRngState };
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

  // Pay upfront
  inventory[offer.materialWanted] = (inventory[offer.materialWanted] ?? 0) - offer.amountWanted;
  saveGalaxyInventory(inventory);

  const durationMs = getRouteDuration(offer.routeType);
  const now = Date.now();

  const newActiveTrade: ActiveTrade = {
    id: `transit_${now}_${offer.id}`,
    offer,
    startedAt: now,
    completesAt: now + durationMs,
    status: "in_transit",
  };

  let nextState = {
    ...state,
    tradeSystem: {
      ...state.tradeSystem,
      offers: state.tradeSystem.offers.filter(o => o.id !== offerId),
      activeTrades: [...state.tradeSystem.activeTrades, newActiveTrade],
    }
  };

  if (durationMs === 0) {
    // Immediate delivery for local routes
    newActiveTrade.status = "completed";
    inventory[offer.materialOffered] = (inventory[offer.materialOffered] ?? 0) + offer.amountOffered;
    saveGalaxyInventory(inventory);

    const nextReputation = applyReputationChange(
      nextState.factionReputation.reputation,
      offer.factionId,
      FACTION_REPUTATION_CONFIG.changes.tradeAccepted,
      "trade_accepted",
      nextState
    );
    nextState.factionReputation.reputation = nextReputation;

    const text = {
      en: `Local trade completed instantly. +${offer.amountOffered} ${offer.materialOffered.split('_')[0].toUpperCase()}`,
      hu: `Helyi üzlet azonnal teljesítve. +${offer.amountOffered} ${offer.materialOffered.split('_')[0].toUpperCase()}`,
      de: `Lokaler Handel sofort abgeschlossen. +${offer.amountOffered} ${offer.materialOffered.split('_')[0].toUpperCase()}`,
      ro: `Comerț local finalizat instantaneu. +${offer.amountOffered} ${offer.materialOffered.split('_')[0].toUpperCase()}`,
    };
    nextState.journal = pushJournal(nextState, text);
    nextState.alert = text;
    // Filter out the one we just added to keep it clean, or tickTradeSystem will clean it up next tick
    nextState.tradeSystem.activeTrades = nextState.tradeSystem.activeTrades.filter(t => t.id !== newActiveTrade.id);
  } else {
    const text = {
      en: `Trade agreement signed. Shipment en route via ${offer.routeType.replace('_', ' ')}. ETA: ${Math.round(durationMs / 3600000)}h`,
      hu: `Üzlet megkötve. Szállítmány úton (${offer.routeType.replace('_', ' ')}). Érkezés: ${Math.round(durationMs / 3600000)}h`,
      de: `Handelsabkommen unterzeichnet. Lieferung unterwegs via ${offer.routeType.replace('_', ' ')}. ETA: ${Math.round(durationMs / 3600000)}h`,
      ro: `Acord de comerț semnat. Transport pe drum via ${offer.routeType.replace('_', ' ')}. ETA: ${Math.round(durationMs / 3600000)}h`,
    };
    nextState.journal = pushJournal(nextState, text);
    nextState.alert = text;
  }

  return nextState;
}

export function negotiateTrade(state: StarholdState, offerId: string, intensity: "bargain" | "hardball"): StarholdState {
  const offerIndex = state.tradeSystem.offers.findIndex(o => o.id === offerId);
  if (offerIndex === -1) return state;

  const offer = { ...state.tradeSystem.offers[offerIndex] };
  if (offer.negotiationAttempts >= 2) {
    return {
      ...state,
      alert: {
        en: "The trader refuses to negotiate further.",
        hu: "A kereskedő nem hajlandó tovább alkudni.",
        de: "Der Händler weigert sich weiter zu verhandeln.",
        ro: "Comerciantul refuză să mai negocieze.",
      }
    };
  }

  const isProtective = !!state.battleState.avatarCombat.innateBonus?.inspiration;
  const isCalm = !!state.battleState.avatarCombat.innateBonus?.barrier;

  let successChance = intensity === "bargain" ? 0.7 : 0.4;
  
  // Modifiers
  if (offer.partnerType === "opportunist") successChance -= 0.2; // Hard to bargain with
  if (offer.partnerType === "faction_envoy") successChance += 0.1; // More reasonable
  
  if (isProtective && intensity === "hardball") successChance -= 0.10;

  const rep = state.factionReputation.reputation[offer.factionId] ?? 0;
  if (rep > 50) successChance += 0.1;
  else if (rep < -20) successChance -= 0.2;

  offer.negotiationAttempts += 1;

  let nextState = state;
  let text: import("../types").LocalizedString;
  let currentRngState = state.globalRngState;

  const { value: rNeg, nextState: sNeg } = nextRandom(currentRngState);
  currentRngState = sNeg;

  if (rNeg < successChance) {
    // Success
    const reduction = intensity === "bargain" ? 0.15 : 0.35; // 15% or 35% discount
    offer.amountWanted = Math.max(1, Math.floor(offer.amountWanted * (1 - reduction)));
    
    text = {
      en: `Negotiation successful. The price dropped to ${offer.amountWanted}.`,
      hu: `Sikeres alku. Az ár lement ${offer.amountWanted}-re.`,
      de: `Verhandlung erfolgreich. Der Preis fiel auf ${offer.amountWanted}.`,
      ro: `Negociere reușită. Prețul a scăzut la ${offer.amountWanted}.`,
    };
    
    const nextOffers = [...state.tradeSystem.offers];
    nextOffers[offerIndex] = offer;
    nextState = {
      ...nextState,
      tradeSystem: { ...nextState.tradeSystem, offers: nextOffers }
    };

  } else {
    // Failure
    let offendChance = 0.3;
    if (intensity === "hardball") offendChance = 1.0;
    if (isCalm && intensity === "hardball") offendChance = 0.5; // Calm halves offend chance on hardball
    
    const { value: rOffend, nextState: sOffend } = nextRandom(currentRngState);
    currentRngState = sOffend;

    if (rOffend < offendChance) {
      // Offended, offer revoked
      const nextOffers = state.tradeSystem.offers.filter(o => o.id !== offerId);
      nextState = {
        ...nextState,
        tradeSystem: { ...nextState.tradeSystem, offers: nextOffers },
        factionReputation: {
          ...nextState.factionReputation,
          reputation: applyReputationChange(nextState.factionReputation.reputation, offer.factionId, -2, "trade_rejected", nextState)
        }
      };
      text = {
        en: `Negotiation failed catastrophically. The trader was offended and revoked the offer.`,
        hu: `Az alku katasztrofálisan elbukott. A kereskedő megsértődött és visszavonta az ajánlatot.`,
        de: `Verhandlung katastrophal gescheitert. Der Händler war beleidigt und hat das Angebot zurückgezogen.`,
        ro: `Negocierea a eșuat catastrofal. Comerciantul s-a simțit jignit și a retras oferta.`,
      };
    } else {
      // Just refused to lower price
      const nextOffers = [...state.tradeSystem.offers];
      nextOffers[offerIndex] = offer;
      nextState = {
        ...nextState,
        tradeSystem: { ...nextState.tradeSystem, offers: nextOffers }
      };
      text = {
        en: `Negotiation failed. The trader refuses to lower the price.`,
        hu: `Sikertelen alku. A kereskedő nem enged az árból.`,
        de: `Verhandlung gescheitert. Der Händler weigert sich, den Preis zu senken.`,
        ro: `Negociere eșuată. Comerciantul refuză să scadă prețul.`,
      };
    }
  }

  nextState.journal = pushJournal(nextState, text);
  nextState.alert = text;
  return { ...nextState, globalRngState: currentRngState };
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