/**
 * Galaxy Map — Node Action Resolver
 *
 * Central backend layer that determines available actions for a node,
 * validates preconditions, computes costs/risks, applies outcomes,
 * and writes journal/alert entries.
 *
 * All randomness is seeded via the node's `nodeSeed` + global RNG.
 */

import type { StarholdState, LocalizedString } from "../types";
import type {
  MapNode,
  MapNodeState,
  NodeActionId,
  NodePreview,
  NodeYieldEntry,
  FleetMovement,
  FleetMissionType,
  IntelDepth,
} from "./types";
import { nextRandom, randomInt } from "../rng";
import { addResourceDelta, pushJournal, clamp } from "../shared";
import { calculateTravelTimeTicks, calculateFuelCost, nodeDistance, calculateFleetWeight } from "./navigation";
import { reserveUnits, updateAllocationStatus } from "../warroom/ledger";
import { getPveArchetype } from "./pveArchetypes";

// ─── Constants ──────────────────────────────────────────────────────────────

/** Ticks cooldown between node actions */
const ACTION_COOLDOWN_TICKS = 120; // 2 minutes

/** Mining duration at node (ticks) per mission type */
export const MISSION_DURATION: Record<FleetMissionType, number> = {
  collect: 3600,  // 1 hour
  attack: 1800,   // 30 min
  inspect: 600,   // 10 min
};

/** Base fleet weight when no warroom units are involved */
const BASE_FLEET_WEIGHT = 1;

// ─── Preview (pure, no state mutation) ──────────────────────────────────────

/** Compute a compact preview for the UI info card. Pure function. */
export function getNodePreview(state: StarholdState, nodeId: string): NodePreview | null {
  const node = state.galaxy.transientNodes.find((n) => n.id === nodeId);
  if (!node) return null;

  const base = state.galaxy.baseCoordinates;
  const dist = nodeDistance(base.x, base.y, node.x, node.y);
  const sensorLevel = state.moduleLevels.sensor;
  const fuelCost = calculateFuelCost(dist, BASE_FLEET_WEIGHT);
  const travelTimeTicks = calculateTravelTimeTicks(dist, sensorLevel);
  const boostedTravelTimeTicks = calculateTravelTimeTicks(dist, sensorLevel, BASE_FLEET_WEIGHT, true);

  const occupancy: NodePreview["occupancy"] =
    node.nodeState === "depleted"
      ? "depleted"
      : node.nodeState === "contested"
        ? "contested"
        : node.isOccupiedBy
          ? "occupied"
          : "free";

  const cooldownRemaining = Math.max(0, node.cooldownUntil - state.tick);
  const recommendedActions = getAvailableActions(state, node);

  // Threat rating: combines risk + stealth + instability
  const threatRating = Math.min(100, node.risk * 15 + node.stealthLevel + (node.instability ?? 0));

  // Adjust yield visibility based on intel
  const visibleYield: NodeYieldEntry[] =
    node.intelDepth >= 2 ? node.expectedYield : node.intelDepth === 1 ? node.expectedYield.map((e) => ({ resourceId: e.resourceId, amount: 0 })) : [];

  return {
    nodeId: node.id,
    type: node.type,
    nodeState: node.nodeState,
    priority: node.priority,
    risk: node.risk,
    expectedYield: visibleYield,
    intelDepth: node.intelDepth,
    fuelCost,
    travelTimeTicks,
    boostedTravelTimeTicks,
    chronoCoreCount: state.resources.chronoCore ?? 0,
    threatRating,
    occupancy,
    recommendedActions,
    cooldownRemaining,
  };
}

// ─── Available actions ──────────────────────────────────────────────────────

export function getAvailableActions(state: StarholdState, node: MapNode): NodeActionId[] {
  const actions: NodeActionId[] = [];
  const hasFleetAtNode = state.galaxy.activeFleets.some(
    (f) => f.targetNodeId === node.id && f.status !== "returning",
  );
  const hasFleetEnRoute = state.galaxy.activeFleets.some(
    (f) => f.targetNodeId === node.id && f.status === "traveling_to",
  );
  const onCooldown = node.cooldownUntil > state.tick;

  // Inspect is almost always available
  if (node.intelDepth < 3 && !onCooldown) {
    actions.push("inspect");
  }

  if (node.type === "meteorite" && node.nodeState !== "depleted" && !onCooldown) {
    if (node.harvestCount < node.maxHarvests) {
      actions.push("collect");
    }
  }

  if (node.type === "pve_base" && node.nodeState !== "depleted" && !onCooldown) {
    actions.push("attack");
  }

  if (node.type === "anomaly" && node.nodeState !== "depleted" && !onCooldown) {
    actions.push("focus");
  }

  // Dispatch: available when no fleet is already en route/at node
  if (!hasFleetAtNode && node.nodeState !== "depleted" && node.nodeState !== "expired") {
    const antimatter = state.resources.antimatter;
    const base = state.galaxy.baseCoordinates;
    const dist = nodeDistance(base.x, base.y, node.x, node.y);
    const fuelCost = calculateFuelCost(dist, BASE_FLEET_WEIGHT);
    if (antimatter >= fuelCost) {
      actions.push("dispatch");
    }
  }

  // Recall: available when a fleet is dispatched (not yet returned)
  if (hasFleetEnRoute) {
    actions.push("recall");
  }

  return actions;
}

// ─── Action resolvers ───────────────────────────────────────────────────────

/** Inspect a node — increases intel depth, may reveal yield, reduces future risk */
export function resolveInspectNode(state: StarholdState, nodeId: string): StarholdState {
  const idx = state.galaxy.transientNodes.findIndex((n) => n.id === nodeId);
  if (idx === -1) return state;
  const node = state.galaxy.transientNodes[idx];
  if (node.cooldownUntil > state.tick) return alertCooldown(state);
  if (node.intelDepth >= 3) return alertAlready(state, "inspect");

  let rng = state.globalRngState;

  // Increase intel
  const newIntel = Math.min(3, node.intelDepth + 1) as IntelDepth;

  // If newly discovered, transition state
  const newNodeState: MapNodeState =
    node.nodeState === "undiscovered" ? "discovered" : node.nodeState;

  // Bonus: small stability/signalRange gain
  const { value: bonusRoll, nextState: rng2 } = nextRandom(rng);
  rng = rng2;
  const stabilityGain = bonusRoll < 0.3 ? 2 : 0;
  const signalGain = bonusRoll > 0.7 ? 3 : 1;

  const updatedNode: MapNode = {
    ...node,
    intelDepth: newIntel,
    nodeState: newNodeState,
    cooldownUntil: state.tick + ACTION_COOLDOWN_TICKS,
    actionLog: [...node.actionLog, { action: "inspect", tick: state.tick, success: true }],
  };

  const nextNodes = [...state.galaxy.transientNodes];
  nextNodes[idx] = updatedNode;

  const journal: LocalizedString = {
    en: `Scan complete on node ${node.id}. Intel depth increased to ${newIntel}.`,
    hu: `Szkennelés kész: ${node.id}. Intel mélység: ${newIntel}.`,
    de: `Scan abgeschlossen: ${node.id}. Intel-Tiefe auf ${newIntel} erhöht.`,
    ro: `Scanare completă: ${node.id}. Adâncime intel crescută la ${newIntel}.`,
  };

  let nextState: StarholdState = {
    ...state,
    globalRngState: rng,
    galaxy: { ...state.galaxy, transientNodes: nextNodes },
    resources: addResourceDelta(state.resources, {
      stability: stabilityGain,
      signalRange: signalGain,
    }),
    alert: journal,
  };
  nextState.journal = pushJournal(nextState, journal);
  return nextState;
}

/** Collect resources from a meteorite node */
export function resolveCollectNode(state: StarholdState, nodeId: string): StarholdState {
  const idx = state.galaxy.transientNodes.findIndex((n) => n.id === nodeId);
  if (idx === -1) return state;
  const node = state.galaxy.transientNodes[idx];
  if (node.type !== "meteorite") return alertWrongType(state, "collect", "meteorite");
  if (node.cooldownUntil > state.tick) return alertCooldown(state);
  if (node.harvestCount >= node.maxHarvests) return alertDepleted(state);

  let rng = state.globalRngState;

  // Determine success based on risk + node seed
  const { value: successRoll, nextState: rng2 } = nextRandom(rng);
  rng = rng2;
  // Higher intel reduces failure chance
  const failChance = Math.max(0.05, (node.risk * 0.12) - (node.intelDepth * 0.05));
  const success = successRoll > failChance;

  let resourceDelta: Partial<Record<keyof import("../types").StarholdResources, number>> = {};
  let yieldSummary = "";

  if (success) {
    // Grant yield
    for (const entry of node.expectedYield) {
      // Scale by intel (more intel → more efficient extraction)
      const efficiency = 0.6 + node.intelDepth * 0.15; // 0.6 to 1.05
      const amount = Math.max(1, Math.round(entry.amount * efficiency));
      if (entry.resourceId === "antimatter") {
        resourceDelta.antimatter = (resourceDelta.antimatter ?? 0) + amount;
      } else if (entry.resourceId === "supply") {
        resourceDelta.supply = (resourceDelta.supply ?? 0) + amount;
      } else if (entry.resourceId === "power") {
        resourceDelta.power = (resourceDelta.power ?? 0) + amount;
      } else {
        // Galaxy materials go to localStorage inventory, handled via loot pickup
        // For now, grant as supply equivalent
        resourceDelta.supply = (resourceDelta.supply ?? 0) + Math.round(amount * 0.5);
      }
      yieldSummary += `${entry.resourceId}:${amount} `;
    }
  } else {
    // Partial failure: some hull damage
    const { value: dmgRoll, nextState: rng3 } = nextRandom(rng);
    rng = rng3;
    const hullDmg = Math.round(dmgRoll * node.risk * 2);
    resourceDelta.hull = -(hullDmg);
  }

  const newHarvestCount = node.harvestCount + 1;
  const isDepleted = newHarvestCount >= node.maxHarvests;

  const updatedNode: MapNode = {
    ...node,
    harvestCount: newHarvestCount,
    nodeState: isDepleted ? "depleted" : node.nodeState === "undiscovered" ? "discovered" : node.nodeState,
    cooldownUntil: state.tick + ACTION_COOLDOWN_TICKS,
    actionLog: [...node.actionLog, { action: "collect", tick: state.tick, success }],
  };

  const nextNodes = [...state.galaxy.transientNodes];
  nextNodes[idx] = updatedNode;

  const journal: LocalizedString = success
    ? {
        en: `Collection ${isDepleted ? "final harvest" : "successful"} at ${node.id}. Yield: ${yieldSummary.trim()}.`,
        hu: `Gyűjtés ${isDepleted ? "utolsó termés" : "sikeres"}: ${node.id}. Hozam: ${yieldSummary.trim()}.`,
        de: `Sammlung ${isDepleted ? "letzte Ernte" : "erfolgreich"}: ${node.id}. Ertrag: ${yieldSummary.trim()}.`,
        ro: `Colectare ${isDepleted ? "ultima recoltă" : "reușită"}: ${node.id}. Randament: ${yieldSummary.trim()}.`,
      }
    : {
        en: `Collection failed at ${node.id}. Hull damaged.`,
        hu: `Gyűjtés sikertelen: ${node.id}. Páncélzat sérült.`,
        de: `Sammlung fehlgeschlagen: ${node.id}. Hüllenschaden.`,
        ro: `Colectare eșuată: ${node.id}. Corp deteriorat.`,
      };

  let nextState: StarholdState = {
    ...state,
    globalRngState: rng,
    galaxy: { ...state.galaxy, transientNodes: nextNodes },
    resources: addResourceDelta(state.resources, resourceDelta),
    alert: journal,
  };
  nextState.journal = pushJournal(nextState, journal);
  return nextState;
}

/** Attack a PvE base node */
export function resolveAttackNode(state: StarholdState, nodeId: string): StarholdState {
  const idx = state.galaxy.transientNodes.findIndex((n) => n.id === nodeId);
  if (idx === -1) return state;
  const node = state.galaxy.transientNodes[idx];
  const archetype = getPveArchetype(node.pveArchetypeId);
  if (node.type !== "pve_base") return alertWrongType(state, "attack", "pve_base");
  if (node.cooldownUntil > state.tick) return alertCooldown(state);
  if (node.nodeState === "depleted") return alertDepleted(state);

  let rng = state.globalRngState;

  // Attack power: warroom level + core level contribute
  const attackPower = state.moduleLevels.core * 3 + (state.warRoom?.level ?? 1) * 5;
  const defence = node.defenceRating;

  // Success roll weighted by power vs defence
  const { value: combatRoll, nextState: rng2 } = nextRandom(rng);
  rng = rng2;

  const powerRatio = attackPower / Math.max(1, defence);
  // At 1:1 ratio, ~50% success. At 2:1, ~80%. At 0.5:1, ~25%.
  const successThreshold = clamp(1 - (powerRatio / (powerRatio + 1)), 0, 0.95);
  const success = combatRoll > successThreshold;

  let resourceDelta: Partial<Record<keyof import("../types").StarholdResources, number>> = {};
  let newNodeState: MapNodeState = node.nodeState;

  if (success) {
    // Loot from PvE base
    for (const entry of node.expectedYield) {
      const amount = Math.max(1, Math.round(entry.amount * 1.5));
      if (entry.resourceId === "antimatter") {
        resourceDelta.antimatter = (resourceDelta.antimatter ?? 0) + amount;
      } else if (entry.resourceId === "power") {
        resourceDelta.power = (resourceDelta.power ?? 0) + amount;
      } else {
        resourceDelta.supply = (resourceDelta.supply ?? 0) + amount;
      }
    }
    // Morale boost
    resourceDelta.morale = 5;
    newNodeState = "depleted";
  } else {
    // Failure: hull + morale damage
    const { value: dmgRoll, nextState: rng3 } = nextRandom(rng);
    rng = rng3;
    resourceDelta.hull = -(Math.round(dmgRoll * node.risk * 4 + 3));
    resourceDelta.morale = -3;
    // Weaken defence on failed attempt (shows persistence pays off)
    newNodeState = node.nodeState === "undiscovered" ? "discovered" : node.nodeState;
  }

  const updatedNode: MapNode = {
    ...node,
    nodeState: newNodeState,
    defenceRating: success ? 0 : Math.max(0, node.defenceRating - Math.round(attackPower * 0.3)),
    cooldownUntil: state.tick + ACTION_COOLDOWN_TICKS * 3, // longer cooldown for attacks
    actionLog: [...node.actionLog, { action: "attack", tick: state.tick, success }],
  };

  const nextNodes = [...state.galaxy.transientNodes];
  nextNodes[idx] = updatedNode;

  const journal: LocalizedString = success
    ? {
        en: `${archetype?.name.en ?? "Enemy base"} destroyed. Loot secured.`,
        hu: `${archetype?.name.hu ?? "Ellenséges bázis"} megsemmisítve. Zsákmány biztosítva.`,
        de: `${archetype?.name.de ?? "Feindbasis"} zerstört. Beute gesichert.`,
        ro: `${archetype?.name.ro ?? "Bază inamică"} distrusă. Pradă asigurată.`,
      }
    : {
        en: `Attack on ${archetype?.name.en ?? node.id} repelled. Hull damaged. Enemy defences weakened.`,
        hu: `${archetype?.name.hu ?? node.id}: a támadás visszaverve. A páncélzat sérült, az ellenséges védelem gyengült.`,
        de: `Angriff auf ${archetype?.name.de ?? node.id} abgewehrt. Hüllenschaden, Feindverteidigung geschwächt.`,
        ro: `Atacul asupra ${archetype?.name.ro ?? node.id} a fost respins. Corp avariat, apărarea inamică slăbită.`,
      };

  let nextState: StarholdState = {
    ...state,
    globalRngState: rng,
    galaxy: { ...state.galaxy, transientNodes: nextNodes },
    resources: addResourceDelta(state.resources, resourceDelta),
    alert: journal,
  };
  nextState.journal = pushJournal(nextState, journal);
  return nextState;
}

/** Dispatch a fleet to a node */
export function resolveDispatchFleet(
  state: StarholdState,
  nodeId: string,
  missionType: FleetMissionType,
  composition: Record<string, number> = {},
  useBoost: boolean = false,
): StarholdState {
  const node = state.galaxy.transientNodes.find((n) => n.id === nodeId);
  if (!node) return state;
  if (node.nodeState === "depleted" || node.nodeState === "expired") {
    return alertDepleted(state);
  }

  // Check for existing fleet at this node
  const existingFleet = state.galaxy.activeFleets.find(
    (f) => f.targetNodeId === nodeId && f.status !== "returning",
  );
  if (existingFleet) {
    return withAlert(state, {
      en: "A fleet is already operating at this node.",
      hu: "Már van flotta ennél a csomópontnál.",
      de: "An diesem Knoten operiert bereits eine Flotte.",
      ro: "O flotă operează deja la acest nod.",
    });
  }

  // Boost check
  if (useBoost && (state.resources.chronoCore ?? 0) <= 0) {
    return withAlert(state, {
      en: "No Chrono Cores available for travel boost.",
      hu: "Nincs elérhető Chrono Core az utazásgyorsításhoz.",
      de: "Keine Chrono-Kerne für Reise-Boost verfügbar.",
      ro: "Nu există nuclee Chrono disponibile pentru boost de călătorie.",
    });
  }

  const base = state.galaxy.baseCoordinates;
  const dist = nodeDistance(base.x, base.y, node.x, node.y);
  const fleetWeight = calculateFleetWeight(composition);
  const fuelCost = calculateFuelCost(dist, fleetWeight);
  const travelTimeTicks = calculateTravelTimeTicks(dist, state.moduleLevels.sensor, fleetWeight, useBoost);

  // Check antimatter
  if (state.resources.antimatter < fuelCost) {
    return withAlert(state, {
      en: `Not enough antimatter. Need ${fuelCost}, have ${Math.floor(state.resources.antimatter)}.`,
      hu: `Nincs elég antianyag. Kell: ${fuelCost}, van: ${Math.floor(state.resources.antimatter)}.`,
      de: `Nicht genug Antimaterie. Benötigt: ${fuelCost}, vorhanden: ${Math.floor(state.resources.antimatter)}.`,
      ro: `Antimaterie insuficientă. Necesar: ${fuelCost}, disponibil: ${Math.floor(state.resources.antimatter)}.`,
    });
  }

  let rng = state.globalRngState;
  const { value: idSuffix, nextState: rng2 } = randomInt(rng, 1000, 9999);
  rng = rng2;
  const fleetId = `fleet_${state.tick}_${idSuffix}`;

  const reservation = reserveUnits(state, fleetId, "dispatch", composition);

  if (!reservation.success) {
    const missing = Object.entries(reservation.missingUnits ?? {})
      .map(([id, count]) => `${count} ${id}`)
      .join(", ");
    return withAlert(state, {
      en: `Dispatch failed. Missing units: ${missing}`,
      hu: `Indítás sikertelen. Hiányzó egységek: ${missing}`,
      de: `Entsendung fehlgeschlagen. Fehlende Einheiten: ${missing}`,
      ro: `Indisponibil. Unități lipsă: ${missing}`,
    });
  }

  // Set status to traveling in the ledger
  const stateWithReserved = updateAllocationStatus(reservation.nextState, fleetId, "traveling");

  const fleet: FleetMovement = {
    id: fleetId,
    targetNodeId: nodeId,
    departureTime: state.tick,
    arrivalTime: state.tick + travelTimeTicks,
    travelTimeTicks,
    status: "traveling_to",
    missionType,
    fuelSpent: fuelCost,
    weight: fleetWeight,
    composition,
    boosted: useBoost,
  };

  // Update node state to contested
  const nodeIdx = stateWithReserved.galaxy.transientNodes.findIndex((n) => n.id === nodeId);
  const nextNodes = [...stateWithReserved.galaxy.transientNodes];
  if (nodeIdx >= 0) {
    nextNodes[nodeIdx] = {
      ...nextNodes[nodeIdx],
      nodeState: nextNodes[nodeIdx].nodeState === "undiscovered" ? "contested" : nextNodes[nodeIdx].nodeState === "discovered" ? "contested" : nextNodes[nodeIdx].nodeState,
    };
  }

  const journal: LocalizedString = {
    en: `Fleet dispatched to ${node.id} (${missionType})${useBoost ? " [BOOSTED]" : ""}. ETA: ${Math.ceil(travelTimeTicks / 60)}m. Fuel: ${fuelCost}.`,
    hu: `Flotta indítva: ${node.id} (${missionType})${useBoost ? " [GYORSÍTOTT]" : ""}. ETA: ${Math.ceil(travelTimeTicks / 60)}p. Üzemanyag: ${fuelCost}.`,
    de: `Flotte entsandt zu ${node.id} (${missionType})${useBoost ? " [GEBOOSTET]" : ""}. ETA: ${Math.ceil(travelTimeTicks / 60)}m. Treibstoff: ${fuelCost}.`,
    ro: `Flotă trimisă la ${node.id} (${missionType})${useBoost ? " [BOOSTED]" : ""}. ETA: ${Math.ceil(travelTimeTicks / 60)}m. Combustibil: ${fuelCost}.`,
  };

  const feedback: import("./types").NodeActionFeedback = {
    actionType: "dispatch",
    success: true,
    summary: journal,
    etaSummary: `ETA: ${Math.ceil(travelTimeTicks / 60)}m`,
    riskSummary: `Fuel spent: ${fuelCost}`,
    nextSuggestedAction: "monitor",
    nodeStateAfter: nextNodes[nodeIdx]?.nodeState,
    fleetStateAfter: "traveling_to",
  };

  let nextState: StarholdState = {
    ...stateWithReserved,
    globalRngState: rng,
    galaxy: {
      ...stateWithReserved.galaxy,
      transientNodes: nextNodes,
      activeFleets: [...stateWithReserved.galaxy.activeFleets, fleet],
    },
    resources: addResourceDelta(stateWithReserved.resources, { 
      antimatter: -fuelCost,
      chronoCore: useBoost ? -1 : 0,
    }),
    alert: journal,
    lastActionFeedback: feedback,
  };
  nextState.journal = pushJournal(nextState, journal);
  return nextState;
}

/** Recall a fleet — turns it around immediately */
export function resolveRecallFleet(state: StarholdState, fleetId: string, useBoost: boolean = false): StarholdState {
  const fleetIdx = state.galaxy.activeFleets.findIndex((f) => f.id === fleetId);
  if (fleetIdx === -1) return state;
  const fleet = state.galaxy.activeFleets[fleetIdx];

  if (fleet.status === "returning") {
    return withAlert(state, {
      en: "Fleet is already returning.",
      hu: "A flotta már visszatérőben van.",
      de: "Flotte ist bereits auf dem Rückweg.",
      ro: "Flota se întoarce deja.",
    });
  }

  // Boost check
  if (useBoost && (state.resources.chronoCore ?? 0) <= 0) {
    return withAlert(state, {
      en: "No Chrono Cores available for travel boost.",
      hu: "Nincs elérhető Chrono Core az utazásgyorsításhoz.",
      de: "Keine Chrono-Kerne für Reise-Boost verfügbar.",
      ro: "Nu există nuclee Chrono disponibile pentru boost de călătorie.",
    });
  }

  // Calculate how far the fleet has traveled
  const ticksTraveled = state.tick - fleet.departureTime;
  // Return trip duration is how far we got (capped at original travel time)
  // Apply boost if requested
  const baseReturnTime = Math.max(60, Math.min(fleet.travelTimeTicks, ticksTraveled));
  const returnTime = useBoost ? Math.max(60, Math.ceil(baseReturnTime / 10)) : baseReturnTime;

  const updatedFleet: FleetMovement = {
    ...fleet,
    status: "returning",
    departureTime: state.tick,
    arrivalTime: state.tick + returnTime,
    boosted: useBoost || fleet.boosted,
  };

  const nextFleets = [...state.galaxy.activeFleets];
  nextFleets[fleetIdx] = updatedFleet;

  // If node was contested only because of this fleet, revert to discovered
  const otherFleetsAtNode = nextFleets.filter(
    (f) => f.targetNodeId === fleet.targetNodeId && f.id !== fleet.id && f.status !== "returning",
  );
  const nextNodes = [...state.galaxy.transientNodes];
  if (otherFleetsAtNode.length === 0) {
    const nodeIdx = nextNodes.findIndex((n) => n.id === fleet.targetNodeId);
    if (nodeIdx >= 0 && nextNodes[nodeIdx].nodeState === "contested") {
      nextNodes[nodeIdx] = { ...nextNodes[nodeIdx], nodeState: "discovered" };
    }
  }

  const journal: LocalizedString = {
    en: `Fleet ${fleet.id} recalled${useBoost ? " [BOOSTED]" : ""}. ETA to base: ${Math.ceil(returnTime / 60)}m.`,
    hu: `Flotta ${fleet.id} visszahívva${useBoost ? " [GYORSÍTOTT]" : ""}. Bázisra érkezés: ${Math.ceil(returnTime / 60)}p.`,
    de: `Flotte ${fleet.id} zurückgerufen${useBoost ? " [GEBOOSTET]" : ""}. Ankunft: ${Math.ceil(returnTime / 60)}m.`,
    ro: `Flotă ${fleet.id} retrasă${useBoost ? " [BOOSTED]" : ""}. Sosire la bază: ${Math.ceil(returnTime / 60)}m.`,
  };

  const feedback: import("./types").NodeActionFeedback = {
    actionType: "recall",
    success: true,
    summary: journal,
    etaSummary: `Return ETA: ${Math.ceil(returnTime / 60)}m`,
    nextSuggestedAction: "wait",
    fleetStateAfter: "returning",
  };

  const stateWithAllocation = updateAllocationStatus(state, fleetId, "returning");

  let nextState: StarholdState = {
    ...stateWithAllocation,
    galaxy: { ...stateWithAllocation.galaxy, transientNodes: nextNodes, activeFleets: nextFleets },
    resources: addResourceDelta(stateWithAllocation.resources, {
      chronoCore: useBoost ? -1 : 0,
    }),
    alert: journal,
    lastActionFeedback: feedback,
  };
  nextState.journal = pushJournal(nextState, journal);
  return nextState;
}

// ─── Helpers ────────────────────────────────────────────────────────────────

function withAlert(state: StarholdState, alert: LocalizedString): StarholdState {
  return { ...state, alert };
}

function alertCooldown(state: StarholdState): StarholdState {
  return withAlert(state, {
    en: "This node is on cooldown. Wait before performing another action.",
    hu: "Ez a csomópont lehűlés alatt van. Várj a következő művelet előtt.",
    de: "Dieser Knoten hat eine Abklingzeit. Warte vor der nächsten Aktion.",
    ro: "Acest nod este în cooldown. Așteaptă înainte de altă acțiune.",
  });
}

function alertAlready(state: StarholdState, action: string): StarholdState {
  return withAlert(state, {
    en: `Cannot ${action}: already at maximum level.`,
    hu: `Nem lehetséges: ${action} — már maximális szinten.`,
    de: `Kann ${action} nicht ausführen: bereits auf Maximalstufe.`,
    ro: `Nu se poate ${action}: deja la nivel maxim.`,
  });
}

function alertWrongType(state: StarholdState, action: string, expectedType: string): StarholdState {
  return withAlert(state, {
    en: `Cannot ${action} this node type. Expected: ${expectedType}.`,
    hu: `Nem végezhető ${action} ezen a csomópont-típuson. Szükséges: ${expectedType}.`,
    de: `${action} auf diesem Knotentyp nicht möglich. Erwartet: ${expectedType}.`,
    ro: `Nu se poate ${action} pe acest tip de nod. Așteptat: ${expectedType}.`,
  });
}

function alertDepleted(state: StarholdState): StarholdState {
  return withAlert(state, {
    en: "This node is depleted. No further actions available.",
    hu: "Ez a csomópont kimerült. Nincs több elérhető művelet.",
    de: "Dieser Knoten ist erschöpft. Keine weiteren Aktionen verfügbar.",
    ro: "Acest nod este epuizat. Nu mai sunt acțiuni disponibile.",
  });
}
