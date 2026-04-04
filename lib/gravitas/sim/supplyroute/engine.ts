import type { StarholdState } from "../types";
import type { SupplyRouteState, SupplyRoute, SupplyRouteId } from "./types";
import type { FactionId } from "../faction/types";
import type { GalaxyMaterialId } from "../../world/mission";
import { SUPPLY_ROUTE_CONFIG } from "../../economy";
import { getReputationTier, applyReputationChange } from "../faction/reputation";
import { loadSavedGalaxyInventory, saveGalaxyInventory } from "../../world/mission";
import { pushJournal } from "../shared";

export function createInitialSupplyRouteState(): SupplyRouteState {
  return {
    routes: [],
    maxRoutes: SUPPLY_ROUTE_CONFIG.maxRoutesBase,
    totalRaided: 0,
    lastRaidCheck: Date.now(),
  };
}

function calculateProtectionLevel(state: StarholdState): number {
  const maxGarrison = 1000; // Simplified from WARROOM_PRODUCTION_CONFIG.garrisonCap to avoid circular dependency
  let totalUnits = 0;
  
  const unitIds = ["sentinel", "vanguard", "wraith", "nexus"] as const;
  for (const id of unitIds) {
    const entries = state.warRoom.garrison[id] ?? [];
    for (const e of entries) {
      totalUnits += e.count;
    }
  }

  const ratio = Math.min(1.0, totalUnits / maxGarrison);
  return Math.round(ratio * 100);
}

export function getRouteYieldModifier(state: StarholdState): number {
  // Can be expanded with synergy or research later
  let mod = 1.0;
  
  if (state.tradeSystem && state.galaxyCycle && state.galaxyCycle.currentPhase === "trade") {
    mod += 0.2; // Extra yield in trade phase
  }

  return mod;
}

export function establishRoute(state: StarholdState, factionId: FactionId, materialId: GalaxyMaterialId): StarholdState {
  const currentMax = SUPPLY_ROUTE_CONFIG.maxRoutesBase + Math.floor(state.moduleLevels.logistics / SUPPLY_ROUTE_CONFIG.maxRoutesPerLogisticsLevels);
  if (state.supplyRoutes.routes.length >= currentMax) return state;

  const reputation = state.factionReputation.reputation[factionId] ?? 0;
  if (reputation < SUPPLY_ROUTE_CONFIG.minReputationForRoute) {
    return {
      ...state,
      alert: {
        en: `Reputation with ${factionId} is too low to establish a route.`,
        hu: `A reputáció a(z) ${factionId} frakcióval túl alacsony egy útvonalhoz.`,
        de: `Der Ruf bei ${factionId} ist zu niedrig für eine Route.`,
        ro: `Reputația cu ${factionId} este prea mică pentru a stabili o rută.`,
      }
    };
  }

  const tier = getReputationTier(reputation);
  const baseYield = SUPPLY_ROUTE_CONFIG.baseYieldPerHour;
  const yieldMult = tier === "allied" ? 1.5 : tier === "friendly" ? 1.0 : 0.8; // Should only be friendly+ based on minRep check
  
  const now = Date.now();
  const newRoute: SupplyRoute = {
    id: `route_${now}_${Math.floor(Math.random() * 1000)}`,
    factionId,
    materialId,
    yieldPerHour: Math.round(baseYield * yieldMult),
    establishedAt: now,
    lastYieldAt: now,
    status: "active",
    protectionLevel: calculateProtectionLevel(state),
    disruptedUntil: null,
  };

  const text = {
    en: `Supply route established with ${factionId} for ${materialId}.`,
    hu: `Ellátási útvonal létrehozva a(z) ${factionId} frakcióval (${materialId}).`,
    de: `Versorgungsroute mit ${factionId} für ${materialId} eingerichtet.`,
    ro: `Rută de aprovizionare stabilită cu ${factionId} pentru ${materialId}.`,
  };

  return {
    ...state,
    supplyRoutes: {
      ...state.supplyRoutes,
      maxRoutes: currentMax,
      routes: [...state.supplyRoutes.routes, newRoute],
    },
    journal: pushJournal(state, text),
    alert: text,
  };
}

export function abandonRoute(state: StarholdState, routeId: SupplyRouteId): StarholdState {
  const routeIndex = state.supplyRoutes.routes.findIndex(r => r.id === routeId);
  if (routeIndex === -1) return state;

  const route = state.supplyRoutes.routes[routeIndex];
  
  // Apply penalty for breaking the contract
  const nextReputation = applyReputationChange(
    state.factionReputation.reputation,
    route.factionId,
    SUPPLY_ROUTE_CONFIG.abandonReputationPenalty,
    "event",
    state
  );

  const nextRoutes = [...state.supplyRoutes.routes];
  nextRoutes.splice(routeIndex, 1);

  const text = {
    en: `Supply route to ${route.factionId} abandoned. Reputation decreased.`,
    hu: `Ellátási útvonal a(z) ${route.factionId} frakcióhoz megszüntetve. Reputáció csökkent.`,
    de: `Versorgungsroute nach ${route.factionId} abgebrochen. Ruf verschlechtert.`,
    ro: `Ruta de aprovizionare către ${route.factionId} abandonată. Reputația a scăzut.`,
  };

  return {
    ...state,
    factionReputation: {
      ...state.factionReputation,
      reputation: nextReputation,
    },
    supplyRoutes: {
      ...state.supplyRoutes,
      routes: nextRoutes,
    },
    journal: pushJournal(state, text),
    alert: text,
  };
}

export function tickSupplyRoutes(state: StarholdState): StarholdState {
  const now = Date.now();
  let nextState = state;
  let mutated = false;
  let inventoryMutated = false;
  const inventory = loadSavedGalaxyInventory();

  const currentMax = SUPPLY_ROUTE_CONFIG.maxRoutesBase + Math.floor(state.moduleLevels.logistics / SUPPLY_ROUTE_CONFIG.maxRoutesPerLogisticsLevels);
  if (currentMax !== state.supplyRoutes.maxRoutes) {
    nextState = {
      ...nextState,
      supplyRoutes: {
        ...nextState.supplyRoutes,
        maxRoutes: currentMax,
      }
    };
    mutated = true;
  }

  // 1. Process Yields and Disruption recovery
  const globalYieldMod = getRouteYieldModifier(nextState);
  let nextRoutes = nextState.supplyRoutes.routes.map(route => {
    let r = { ...route };

    // Recovery from disruption
    if (r.status === "disrupted" && r.disruptedUntil && now >= r.disruptedUntil) {
      r.status = "active";
      r.disruptedUntil = null;
      mutated = true;
    }

    // Process yield if active
    if (r.status === "active") {
      const elapsed = now - r.lastYieldAt;
      if (elapsed >= SUPPLY_ROUTE_CONFIG.yieldIntervalMs) {
        const yieldCycles = Math.floor(elapsed / SUPPLY_ROUTE_CONFIG.yieldIntervalMs);
        const amount = Math.floor(r.yieldPerHour * yieldCycles * globalYieldMod);
        
        if (amount > 0) {
          inventory[r.materialId] = (inventory[r.materialId] ?? 0) + amount;
          inventoryMutated = true;
        }
        
        r.lastYieldAt += yieldCycles * SUPPLY_ROUTE_CONFIG.yieldIntervalMs;
        mutated = true;
      }
    }

    return r;
  });

  // 2. Process Raids
  if (now - nextState.supplyRoutes.lastRaidCheck >= SUPPLY_ROUTE_CONFIG.raidCheckIntervalMs) {
    const protectionLevel = calculateProtectionLevel(nextState);
    let totalRaidedNow = 0;
    
    // Find hostile/tense factions to act as raiders
    const hostileFactions = (Object.entries(nextState.factionReputation.reputation) as [FactionId, number][])
      .filter(([_, rep]) => getReputationTier(rep) === "hostile" || getReputationTier(rep) === "tense")
      .map(([id]) => id);

    if (hostileFactions.length > 0) {
      const raidChance = Math.max(0, (100 - protectionLevel) * 0.005); // 0.5% per missing protection point

      nextRoutes = nextRoutes.map(route => {
        if (route.status === "active" && Math.random() < raidChance) {
          const raider = hostileFactions[Math.floor(Math.random() * hostileFactions.length)];
          const isDestroyed = protectionLevel < 20 && Math.random() < SUPPLY_ROUTE_CONFIG.destroyChanceIfLowProtection;
          
          totalRaidedNow++;
          
          if (isDestroyed) {
             const alertText = {
              en: `CRITICAL: Supply route to ${route.factionId} destroyed by ${raider} raiders!`,
              hu: `KRITIKUS: Az ellátási útvonalat a(z) ${route.factionId} felé megsemmisítették a(z) ${raider} portyázók!`,
              de: `KRITISCH: Versorgungsroute nach ${route.factionId} von ${raider} zerstört!`,
              ro: `CRITIC: Ruta de aprovizionare către ${route.factionId} distrusă de raiderii ${raider}!`,
            };
            nextState = { ...nextState, alert: alertText, journal: pushJournal(nextState, alertText) };
            return { ...route, status: "destroyed", disruptedUntil: null };
          } else {
            const alertText = {
              en: `Supply route to ${route.factionId} disrupted by ${raider} raiders.`,
              hu: `Az ellátási útvonalat a(z) ${route.factionId} felé megzavarták a(z) ${raider} portyázók.`,
              de: `Versorgungsroute nach ${route.factionId} von ${raider} gestört.`,
              ro: `Ruta de aprovizionare către ${route.factionId} perturbată de raiderii ${raider}.`,
            };
            nextState = { ...nextState, alert: alertText, journal: pushJournal(nextState, alertText) };
            return { 
              ...route, 
              status: "disrupted", 
              disruptedUntil: now + SUPPLY_ROUTE_CONFIG.disruptionDurationMs 
            };
          }
        }
        return route;
      });
    }
    
    // Clean up destroyed routes
    const survivingRoutes = nextRoutes.filter(r => r.status !== "destroyed");
    
    nextState = {
      ...nextState,
      supplyRoutes: {
        ...nextState.supplyRoutes,
        routes: survivingRoutes,
        lastRaidCheck: now,
        totalRaided: nextState.supplyRoutes.totalRaided + totalRaidedNow,
      }
    };
    mutated = true;
  } else if (mutated) {
    // Save updated routes if no raid check happened but yields/recoveries did
    nextState = {
      ...nextState,
      supplyRoutes: {
        ...nextState.supplyRoutes,
        routes: nextRoutes,
      }
    };
  }

  if (inventoryMutated) {
    saveGalaxyInventory(inventory);
  }

  return mutated ? nextState : state;
}