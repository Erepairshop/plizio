import type { StarholdState } from "../types";
import { nextRandom, randomInt } from "../rng";
import type { MapNode, MapNodeType, GalaxyMapState } from "./types";
import { pushJournal } from "../shared";

export function createInitialGalaxyMap(): GalaxyMapState {
  return {
    baseCoordinates: { x: 0, y: 0 },
    transientNodes: [],
    activeFleets: [],
  };
}

export function tickFleets(state: StarholdState): StarholdState {
  if (!state.galaxy.activeFleets || state.galaxy.activeFleets.length === 0) return state;

  let nextFleets = [...state.galaxy.activeFleets];
  let nextArchiveFleets = state.archive ? [...state.archive.completedFleets] : [];
  let mutated = false;
  let nextState = state;
  let journals: import("../types").LocalizedString[] = [];

  nextFleets = nextFleets.filter(fleet => {
    if (fleet.status === "traveling_to" && state.tick >= fleet.arrivalTime) {
      fleet.status = "mining";
      fleet.departureTime = state.tick;
      fleet.miningCompletesAt = state.tick + 3600; // e.g. 1 hour mining time (in ticks)
      fleet.arrivalTime = fleet.miningCompletesAt; // use arrivalTime for UI simplification if needed
      mutated = true;
      journals.push({
        en: `Fleet arrived at target node ${fleet.targetNodeId} and began operations.`,
        hu: `A flotta megérkezett a(z) ${fleet.targetNodeId} célponthoz és megkezdte a műveleteket.`,
        de: `Flotte am Zielknoten ${fleet.targetNodeId} angekommen und hat mit den Operationen begonnen.`,
        ro: `Flota a ajuns la nodul țintă ${fleet.targetNodeId} și a început operațiunile.`
      });
      return true;
    } 
    
    if (fleet.status === "mining" && fleet.miningCompletesAt && state.tick >= fleet.miningCompletesAt) {
      fleet.status = "returning";
      const travelTime = fleet.departureTime ? state.tick - fleet.departureTime : 3600; 
      fleet.departureTime = state.tick;
      fleet.arrivalTime = state.tick + travelTime;
      fleet.miningCompletesAt = undefined;
      mutated = true;
      journals.push({
        en: `Fleet completed operations at node ${fleet.targetNodeId} and is returning to base.`,
        hu: `A flotta befejezte a műveleteket a(z) ${fleet.targetNodeId} célpontnál és visszatér a bázisra.`,
        de: `Flotte hat Operationen am Zielknoten ${fleet.targetNodeId} abgeschlossen und kehrt zur Basis zurück.`,
        ro: `Flota a finalizat operațiunile la nodul țintă ${fleet.targetNodeId} și se întoarce la bază.`
      });
      return true;
    }

    if (fleet.status === "returning" && state.tick >= fleet.arrivalTime) {
      // Arrived at base
      mutated = true;
      journals.push({
        en: `Fleet returned to base from node ${fleet.targetNodeId}.`,
        hu: `A flotta visszatért a bázisra a(z) ${fleet.targetNodeId} célpontról.`,
        de: `Flotte ist von Knoten ${fleet.targetNodeId} zur Basis zurückgekehrt.`,
        ro: `Flota s-a întors la bază de la nodul țintă ${fleet.targetNodeId}.`
      });
      
      nextArchiveFleets.push(fleet);
      // Remove from active
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
        completedFleets: nextArchiveFleets.slice(-50), // keep last 50
      }
    };
    
    for (const j of journals) {
      nextState.journal = pushJournal(nextState, j);
      nextState.alert = j; // Show latest as alert
    }
  }

  return nextState;
}

export function spawnTransientNodes(state: StarholdState): StarholdState {
  // Galaxy spatial design:
  //   - Coords ±3.0 units → diagonal ~8.5 units → ~85 min full traversal (1 unit = 10 min)
  //   - 40 nodes → avg spacing ~0.3 units → ~3 min to nearest object
  //   - Player bases (multiplayer) will be added separately
  const maxNodes = 40;

  if (state.galaxy.transientNodes.length >= maxNodes) {
    return state;
  }

  let mutated = false;
  let nextTransientNodes = [...state.galaxy.transientNodes];
  let currentRngState = state.globalRngState;

  // Float coords in ±3.0 range for proper travel-time spacing
  const { value: rXnorm, nextState: s1 } = nextRandom(currentRngState);
  currentRngState = s1;
  const rX = Math.round((rXnorm - 0.5) * 600) / 100; // ±3.00

  const { value: rYnorm, nextState: s2 } = nextRandom(currentRngState);
  currentRngState = s2;
  const rY = Math.round((rYnorm - 0.5) * 600) / 100; // ±3.00

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

  // Use tick for deterministic expiry
  const newNode: MapNode = {
    id: `node_${state.tick}_${rId}`,
    type: nodeType,
    x: rX,
    y: rY,
    stealthLevel: rStealth,
    expiresAt: state.tick + rLifetimeHours * 3600,
    isOccupiedBy: null,
  };

  nextTransientNodes.push(newNode);
  mutated = true;

  if (mutated) {
    return {
      ...state,
      globalRngState: currentRngState,
      galaxy: {
        ...state.galaxy,
        transientNodes: nextTransientNodes,
      }
    };
  }

  return state;
}
