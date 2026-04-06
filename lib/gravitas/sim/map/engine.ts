import type { StarholdState, LocalizedString } from "../types";
import { nextRandom, randomInt } from "../rng";
import type { MapNode, MapNodeType, GalaxyMapState, NodePriority, NodeRisk, NodeYieldEntry, FleetMissionType } from "./types";
import { pushJournal } from "../shared";
import { MISSION_DURATION_TICKS } from "./constants";

export function createInitialGalaxyMap(): GalaxyMapState {
  return {
    baseCoordinates: { x: 0, y: 0 },
    transientNodes: [],
    activeFleets: [],
  };
}

// ─── Fleet tick ─────────────────────────────────────────────────────────────

export function tickFleets(state: StarholdState): StarholdState {
  if (!state.galaxy.activeFleets || state.galaxy.activeFleets.length === 0) return state;

  let nextFleets = [...state.galaxy.activeFleets];
  let nextArchiveFleets = state.archive ? [...state.archive.completedFleets] : [];
  let mutated = false;
  let nextState = state;
  const journals: LocalizedString[] = [];

  nextFleets = nextFleets.filter((fleet) => {
    // Traveling → arrived at node
    if (fleet.status === "traveling_to" && state.tick >= fleet.arrivalTime) {
      const missionDuration = MISSION_DURATION_TICKS[fleet.missionType ?? "collect"];
      fleet.status = "mining";
      fleet.departureTime = state.tick;
      fleet.miningCompletesAt = state.tick + missionDuration;
      fleet.arrivalTime = fleet.miningCompletesAt;
      mutated = true;
      journals.push({
        en: `Fleet arrived at target node ${fleet.targetNodeId} and began ${fleet.missionType ?? "operations"}.`,
        hu: `A flotta megérkezett a(z) ${fleet.targetNodeId} célponthoz és megkezdte: ${fleet.missionType ?? "műveletek"}.`,
        de: `Flotte am Zielknoten ${fleet.targetNodeId} angekommen. Mission: ${fleet.missionType ?? "Operationen"}.`,
        ro: `Flota a ajuns la nodul ${fleet.targetNodeId} și a început: ${fleet.missionType ?? "operațiuni"}.`,
      });
      return true;
    }

    // Mining complete → returning
    if (fleet.status === "mining" && fleet.miningCompletesAt && state.tick >= fleet.miningCompletesAt) {
      fleet.status = "returning";
      const travelTime = fleet.departureTime ? state.tick - fleet.departureTime : 3600;
      fleet.departureTime = state.tick;
      fleet.arrivalTime = state.tick + travelTime;
      fleet.miningCompletesAt = undefined;
      mutated = true;
      journals.push({
        en: `Fleet completed ${fleet.missionType ?? "operations"} at node ${fleet.targetNodeId} and is returning.`,
        hu: `A flotta befejezte: ${fleet.missionType ?? "műveleteket"} — ${fleet.targetNodeId}. Visszatér.`,
        de: `Flotte hat ${fleet.missionType ?? "Operationen"} abgeschlossen: ${fleet.targetNodeId}. Rückkehr.`,
        ro: `Flota a finalizat ${fleet.missionType ?? "operațiuni"} la ${fleet.targetNodeId}. Se întoarce.`,
      });
      return true;
    }

    // Returned to base
    if (fleet.status === "returning" && state.tick >= fleet.arrivalTime) {
      mutated = true;
      journals.push({
        en: `Fleet returned to base from node ${fleet.targetNodeId}.`,
        hu: `A flotta visszatért a bázisra: ${fleet.targetNodeId}.`,
        de: `Flotte von Knoten ${fleet.targetNodeId} zurückgekehrt.`,
        ro: `Flota s-a întors de la nodul ${fleet.targetNodeId}.`,
      });
      nextArchiveFleets.push(fleet);
      return false;
    }

    return true;
  });

  if (mutated) {
    nextState = {
      ...nextState,
      galaxy: {
        ...nextState.galaxy,
        activeFleets: nextFleets,
      },
      archive: {
        ...nextState.archive,
        completedFleets: nextArchiveFleets.slice(-50),
      },
    };

    for (const j of journals) {
      nextState.journal = pushJournal(nextState, j);
      nextState.alert = j;
    }
  }

  return nextState;
}

// ─── Node spawning ──────────────────────────────────────────────────────────

function generateYield(
  nodeType: MapNodeType,
  rngState: number,
  risk: number,
): { yield_: NodeYieldEntry[]; nextRng: number } {
  let rng = rngState;

  if (nodeType === "meteorite") {
    const { value: r1, nextState: s1 } = randomInt(rng, 3, 12);
    rng = s1;
    const { value: r2, nextState: s2 } = randomInt(rng, 1, 6);
    rng = s2;

    const materials = ["lumen_dust", "verdant_crystals", "aether_ore", "ember_shards", "sable_alloy", "rift_stone"];
    const primaryIdx = r2 - 1;
    const primaryAmount = r1 + risk * 2;

    const entries: NodeYieldEntry[] = [
      { resourceId: materials[primaryIdx], amount: primaryAmount },
      { resourceId: "supply", amount: Math.round(primaryAmount * 0.4) },
    ];

    // Rare bonus: antimatter
    const { value: bonusRoll, nextState: s3 } = nextRandom(rng);
    rng = s3;
    if (bonusRoll > 0.82) {
      entries.push({ resourceId: "antimatter", amount: Math.round(risk * 1.5 + 2) });
    }

    return { yield_: entries, nextRng: rng };
  }

  if (nodeType === "pve_base") {
    const { value: r1, nextState: s1 } = randomInt(rng, 5, 20);
    rng = s1;
    return {
      yield_: [
        { resourceId: "supply", amount: r1 + risk * 3 },
        { resourceId: "power", amount: Math.round(r1 * 0.6) },
        { resourceId: "antimatter", amount: Math.round(risk * 2 + 3) },
      ],
      nextRng: rng,
    };
  }

  // anomaly
  const { value: r1, nextState: s1 } = randomInt(rng, 1, 8);
  rng = s1;
  return {
    yield_: [
      { resourceId: "antimatter", amount: r1 + risk },
    ],
    nextRng: rng,
  };
}

export function spawnTransientNodes(state: StarholdState): StarholdState {
  const maxNodes = 40;

  if (state.galaxy.transientNodes.length >= maxNodes) {
    return state;
  }

  let currentRngState = state.globalRngState;

  // Float coords in ±3.0 range
  const { value: rXnorm, nextState: s1 } = nextRandom(currentRngState);
  currentRngState = s1;
  const rX = Math.round((rXnorm - 0.5) * 600) / 100;

  const { value: rYnorm, nextState: s2 } = nextRandom(currentRngState);
  currentRngState = s2;
  const rY = Math.round((rYnorm - 0.5) * 600) / 100;

  const { value: rType, nextState: s3 } = nextRandom(currentRngState);
  currentRngState = s3;

  let nodeType: MapNodeType = "meteorite";
  if (rType > 0.6 && rType <= 0.9) nodeType = "anomaly";
  else if (rType > 0.9) nodeType = "pve_base";

  const { value: rStealth, nextState: s4 } = randomInt(currentRngState, 0, 50);
  currentRngState = s4;

  const { value: rLifetimeHours, nextState: s5 } = randomInt(currentRngState, 4, 12);
  currentRngState = s5;

  const { value: rId, nextState: s6 } = randomInt(currentRngState, 1000, 9999);
  currentRngState = s6;

  // Priority (1-5): based on type rarity + stealth
  const { value: rPriority, nextState: s7 } = randomInt(currentRngState, 1, 5);
  currentRngState = s7;
  const priority = (nodeType === "pve_base" ? Math.min(5, rPriority + 1) : rPriority) as 1 | 2 | 3 | 4 | 5;

  // Risk (1-5)
  const { value: rRisk, nextState: s8 } = randomInt(currentRngState, 1, 5);
  currentRngState = s8;
  const risk = (nodeType === "anomaly" ? Math.min(5, rRisk + 1) : rRisk) as 1 | 2 | 3 | 4 | 5;

  // Node seed for deterministic outcomes
  const { value: nodeSeed, nextState: s9 } = randomInt(currentRngState, 0, 2147483647);
  currentRngState = s9;

  // Max harvests
  const { value: rHarvests, nextState: s10 } = randomInt(currentRngState, 1, 4);
  currentRngState = s10;
  const maxHarvests = nodeType === "meteorite" ? rHarvests + 1 : nodeType === "pve_base" ? 1 : 0;

  // Defence for PvE
  const { value: rDefence, nextState: s11 } = randomInt(currentRngState, 10, 60);
  currentRngState = s11;
  const defenceRating = nodeType === "pve_base" ? rDefence + risk * 8 : 0;

  // Instability for anomaly
  const { value: rInstability, nextState: s12 } = randomInt(currentRngState, 10, 80);
  currentRngState = s12;
  const instability = nodeType === "anomaly" ? rInstability : 0;

  // Generate yield table
  const { yield_: expectedYield, nextRng: rngAfterYield } = generateYield(nodeType, currentRngState, risk);
  currentRngState = rngAfterYield;

  const newNode: MapNode = {
    id: `node_${state.tick}_${rId}`,
    type: nodeType,
    x: rX,
    y: rY,
    stealthLevel: rStealth,
    expiresAt: state.tick + rLifetimeHours * 3600,
    isOccupiedBy: null,
    // New meta fields
    nodeState: "undiscovered",
    priority,
    risk,
    expectedYield,
    intelDepth: 0,
    nodeSeed,
    harvestCount: 0,
    maxHarvests,
    defenceRating,
    instability,
    actionLog: [],
    cooldownUntil: 0,
  };

  return {
    ...state,
    globalRngState: currentRngState,
    galaxy: {
      ...state.galaxy,
      transientNodes: [...state.galaxy.transientNodes, newNode],
    },
  };
}
