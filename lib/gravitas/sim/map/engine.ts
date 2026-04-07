import type { StarholdState, LocalizedString } from "../types";
import { nextRandom, randomInt } from "../rng";
import type { MapNode, MapNodeType, GalaxyMapState, NodePriority, NodeRisk, NodeYieldEntry, FleetMissionType, FleetMovement, FleetOutcome } from "./types";
import { pushJournal, addResourceDelta } from "../shared";
import { releaseAllocation, releaseAllocationWithCasualties, updateAllocationStatus, reportLostAllocation } from "../warroom/ledger";
import { MISSION_DURATION } from "./actions";
import { pushArchiveEvent } from "../archive/manager";
import type { GalaxyMaterialId } from "../../world/mission";
import type { WarRoomUnitId } from "../warroom/types";

export function createInitialGalaxyMap(): GalaxyMapState {
  return {
    baseCoordinates: { x: 0, y: 0 },
    transientNodes: [],
    activeFleets: [],
  };
}

// ─── Fleet tick ─────────────────────────────────────────────────────────────

/**
 * Deterministic auto-resolve for a fleet arriving at a node.
 * Returns the updated state, fleet, and node list.
 */
function resolveFleetArrival(
  state: StarholdState,
  fleet: FleetMovement,
  node: MapNode,
  transientNodes: MapNode[]
): { 
  nextState: StarholdState; 
  updatedFleet: FleetMovement; 
  nextTransientNodes: MapNode[];
  keepFleet: boolean;
  journals: LocalizedString[];
} {
  let nextState = state;
  let currentFleet = { ...fleet };
  let nextTransientNodes = [...transientNodes];
  let keepFleet = true;
  const journals: LocalizedString[] = [];

  let rng = nextState.globalRngState;
  let payload: NonNullable<FleetMovement["payload"]> = {};
  let killed: Record<string, number> = {};
  let wounded: Record<string, number> = {};
  let outcome: FleetOutcome = "victory";
  let arrivalState: LocalizedString = { en: "", hu: "", de: "", ro: "" };

  // Deterministic Auto-Resolve based on Mission Type
  if (currentFleet.missionType === "collect" && node.type === "meteorite") {
    const { value: successRoll, nextState: rng2 } = nextRandom(rng);
    rng = rng2;
    const failChance = Math.max(0.05, (node.risk * 0.10) - (node.intelDepth * 0.05));
    
    if (successRoll > failChance) {
      outcome = "collected";
      arrivalState = {
        en: "Meteorite successfully mined.",
        hu: "A meteorit bányászata sikeres.",
        de: "Meteorit erfolgreich abgebaut.",
        ro: "Meteorit minat cu succes."
      };
      for (const entry of node.expectedYield) {
        const efficiency = 0.8 + node.intelDepth * 0.1;
        const amount = Math.max(1, Math.round(entry.amount * efficiency));
        payload[entry.resourceId as keyof import("../types").StarholdResources | GalaxyMaterialId] = amount;
      }
      // Damage check (rare for meteorites)
      const { value: dmgRoll, nextState: rng3 } = nextRandom(rng);
      rng = rng3;
      if (dmgRoll < node.risk * 0.05) {
        const unitIds = Object.keys(currentFleet.composition);
        const { value: unitIdx, nextState: rng4 } = randomInt(rng, 0, unitIds.length - 1);
        rng = rng4;
        const lostId = unitIds[unitIdx];
        
        // Meteorite damage is usually non-lethal (wounded)
        wounded[lostId] = 1;
        
        arrivalState.en += " Minor impact damage sustained.";
        arrivalState.hu += " Kisebb becsapódási sérülés történt.";
        arrivalState.de += " Leichte Aufprallschäden erlitten.";
        arrivalState.ro += " S-au suferit daune minore de impact.";
      }
    } else {
      outcome = "defeat";
      arrivalState = {
        en: "Mission failed: Meteorite lost during extraction.",
        hu: "Küldetés sikertelen: A meteorit elveszett a kitermelés során.",
        de: "Mission fehlgeschlagen: Meteorit ging bei der Extraktion verloren.",
        ro: "Misiune eșuată: Meteoritul a fost pierdut în timpul extracției."
      };
    }
  } 
  else if (currentFleet.missionType === "attack" && node.type === "pve_base") {
    const attackPower = Object.entries(currentFleet.composition).reduce((sum, [id, count]) => sum + count * 10, 0);
    const defence = node.defenceRating;
    const powerRatio = attackPower / Math.max(1, defence);
    const { value: combatRoll, nextState: rng2 } = nextRandom(rng);
    rng = rng2;

    const winChance = Math.min(0.98, Math.max(0.1, powerRatio / (powerRatio + 1) + 0.2));
    if (combatRoll < winChance) {
      outcome = "victory";
      arrivalState = {
        en: "Enemy base neutralized.",
        hu: "Ellenséges bázis semlegesítve.",
        de: "Feindliche Basis neutralisiert.",
        ro: "Baza inamică a fost neutralizată."
      };
      for (const entry of node.expectedYield) {
        payload[entry.resourceId as keyof import("../types").StarholdResources | GalaxyMaterialId] = entry.amount;
      }
      // Casualties based on ratio
      const lossRatio = Math.max(0.05, 0.4 - powerRatio * 0.1);
      for (const [unitId, count] of Object.entries(currentFleet.composition)) {
        const { value: luck, nextState: rng3 } = nextRandom(rng);
        rng = rng3;
        const totalLost = Math.round(count * lossRatio * (0.5 + luck));
        if (totalLost > 0) {
          const killedCount = Math.floor(totalLost * 0.4);
          const woundedCount = totalLost - killedCount;
          if (killedCount > 0) killed[unitId] = killedCount;
          if (woundedCount > 0) wounded[unitId] = woundedCount;
        }
      }
    } else {
      outcome = "defeat";
      arrivalState = {
        en: "Fleet repelled by heavy defenses.",
        hu: "A flottát visszaverték az erős védművek.",
        de: "Flotte durch schwere Verteidigung zurückgeschlagen.",
        ro: "Flota a fost respinsă de apărări grele."
      };
      const lossRatio = Math.min(1, 0.6 + (1 / powerRatio) * 0.2);
      for (const [unitId, count] of Object.entries(currentFleet.composition)) {
        const totalLost = Math.round(count * lossRatio);
        if (totalLost > 0) {
          const killedCount = Math.floor(totalLost * 0.6); // Higher lethality on defeat
          const woundedCount = totalLost - killedCount;
          if (killedCount > 0) killed[unitId] = killedCount;
          if (woundedCount > 0) wounded[unitId] = woundedCount;
        }
      }
    }
  }
  else if (currentFleet.missionType === "inspect") {
    outcome = "inspected";
    arrivalState = {
      en: "Reconnaissance complete.",
      hu: "Felderítés befejezve.",
      de: "Aufklärung abgeschlossen.",
      ro: "Recunoaștere finalizată."
    };
    node.intelDepth = Math.min(3, node.intelDepth + 1) as import("./types").IntelDepth;
    // Small data payload
    payload.supply = node.priority * 5;
  }
  else {
    // Fallback for mismatched mission/node types
    outcome = "partial_success";
    arrivalState = {
      en: "Mission parameters mismatched. Minimal data gathered.",
      hu: "Küldetési paraméterek eltérése. Minimális adat gyűjtve.",
      de: "Missionsparameter stimmen nicht überein. Minimale Daten gesammelt.",
      ro: "Parametrii misiunii nu se potrivesc. S-au adunat date minime."
    };
    payload.supply = 5;
  }

  // Apply results to fleet
  currentFleet.payload = payload;
  currentFleet.casualties = { killed, wounded };
  currentFleet.outcome = outcome;
  currentFleet.arrivalState = arrivalState;

  // Check for total destruction
  const totalUnits = Object.values(currentFleet.composition).reduce((a, b) => a + b, 0);
  const totalKilled = Object.values(killed).reduce((a, b) => a + b, 0);
  const totalWounded = Object.values(wounded).reduce((a, b) => a + b, 0);
  const totalLost = totalKilled + totalWounded;

  // Record casualties in trauma statistics
  if (totalLost > 0) {
    nextState = {
      ...nextState,
      statistics: {
        ...nextState.statistics,
        trauma: {
          ...nextState.statistics.trauma,
          expeditionCasualties: (nextState.statistics.trauma.expeditionCasualties || 0) + totalLost,
        }
      }
    };
  }

  if (totalKilled >= totalUnits) {
    keepFleet = false;
    // Clear dead allocation immediately from ledger
    nextState = reportLostAllocation(nextState, currentFleet.id);
    
    journals.push({
      en: `Fleet ${currentFleet.id} destroyed at ${node.id}. ${arrivalState.en}`,
      hu: `A(z) ${currentFleet.id} flotta megsemmisült a(z) ${node.id} pontnál. ${arrivalState.hu}`,
      de: `Flotte ${currentFleet.id} bei ${node.id} zerstört. ${arrivalState.de}`,
      ro: `Flota ${currentFleet.id} a fost distrusă la ${node.id}. ${arrivalState.ro}`,
    });
  } else {
    // Immediate transition to Returning Phase
    currentFleet.status = "returning";
    const travelTime = currentFleet.travelTimeTicks;
    currentFleet.departureTime = nextState.tick;
    currentFleet.arrivalTime = nextState.tick + travelTime;
    nextState = updateAllocationStatus(nextState, currentFleet.id, "returning");
    
    journals.push({
      en: `Fleet ${currentFleet.id} arrived at ${node.id}. ${arrivalState.en} Returning to base. ETA: ${Math.ceil(travelTime / 60)}m.`,
      hu: `A(z) ${currentFleet.id} flotta megérkezett — ${node.id}. ${arrivalState.hu} Visszatér a bázisra. ETA: ${Math.ceil(travelTime / 60)}p.`,
      de: `Flotte ${currentFleet.id} bei ${node.id} angekommen. ${arrivalState.de} Rückkehr zur Basis. ETA: ${Math.ceil(travelTime / 60)}m.`,
      ro: `Flota ${currentFleet.id} a sosit la ${node.id}. ${arrivalState.ro} Se întoarce la bază. ETA: ${Math.ceil(travelTime / 60)}m.`,
    });

    nextState = pushArchiveEvent(nextState, {
      category: "fleet",
      severity: outcome === "defeat" ? "danger" : "success",
      importance: 2,
      title: { en: "Fleet Arrival", hu: "Flotta Érkezés", de: "Flottenankunft", ro: "Sosire Flotă" },
      summary: arrivalState,
      details: {
        targetId: node.id,
        outcome: outcome,
        loot: payload,
        casualties: { killed, wounded }
      }
    });
  }

  // Node Update (Consumption) - Inspect must NEVER remove a node
  const targetNodeIndex = nextTransientNodes.findIndex(n => n.id === node.id);
  if (targetNodeIndex >= 0) {
    if (currentFleet.missionType === "collect" && node.type === "meteorite" && outcome === "collected") {
      const newHarvestCount = node.harvestCount + 1;
      if (newHarvestCount >= node.maxHarvests) {
        nextTransientNodes.splice(targetNodeIndex, 1);
      } else {
        nextTransientNodes[targetNodeIndex] = {
          ...node,
          harvestCount: newHarvestCount,
          nodeState: "discovered",
        };
      }
    } else if (currentFleet.missionType === "attack" && node.type === "pve_base" && outcome === "victory") {
      nextTransientNodes.splice(targetNodeIndex, 1);
    } else {
      // Just update the node in the list (e.g. for intelDepth)
      nextTransientNodes[targetNodeIndex] = { ...node };
    }
  }

  nextState.globalRngState = rng;

  return { nextState, updatedFleet: currentFleet, nextTransientNodes, keepFleet, journals };
}

export function tickFleets(state: StarholdState): StarholdState {
  if (!state.galaxy.activeFleets || state.galaxy.activeFleets.length === 0) return state;

  let nextFleets: FleetMovement[] = [];
  let nextArchiveFleets = state.archive ? [...state.archive.completedFleets] : [];
  let nextTransientNodes = [...state.galaxy.transientNodes];
  let mutated = false;
  let nextState = state;
  const journals: LocalizedString[] = [];

  for (const fleet of state.galaxy.activeFleets) {
    let currentFleet = { ...fleet };
    let keepFleet = true;

    // --- CASE 1: Traveling to Node (Arrival & Auto-Resolve) ---
    if (currentFleet.status === "traveling_to" && nextState.tick >= currentFleet.arrivalTime) {
      mutated = true;
      const targetNodeIndex = nextTransientNodes.findIndex(n => n.id === currentFleet.targetNodeId);
      const targetNode = nextTransientNodes[targetNodeIndex];

      if (targetNode) {
        const result = resolveFleetArrival(nextState, currentFleet, targetNode, nextTransientNodes);
        nextState = result.nextState;
        currentFleet = result.updatedFleet;
        nextTransientNodes = result.nextTransientNodes;
        keepFleet = result.keepFleet;
        journals.push(...result.journals);
      } else {
        // Node disappeared before arrival?
        currentFleet.status = "returning";
        currentFleet.arrivalState = {
          en: "Target node lost before arrival.",
          hu: "A célpont elveszett az érkezés előtt.",
          de: "Zielknoten vor der Ankunft verloren.",
          ro: "Nodul țintă a fost pierdut înainte de sosire."
        };
        const travelTime = currentFleet.travelTimeTicks;
        currentFleet.departureTime = nextState.tick;
        currentFleet.arrivalTime = nextState.tick + travelTime;
        nextState = updateAllocationStatus(nextState, currentFleet.id, "returning");
        
        journals.push({
          en: `Fleet ${currentFleet.id} target lost. Returning to base.`,
          hu: `A(z) ${currentFleet.id} flotta célpontja elveszett. Visszatér a bázisra.`,
          de: `Flotte ${currentFleet.id} Ziel verloren. Rückkehr zur Basis.`,
          ro: `Flota ${currentFleet.id} a pierdut ținta. Se întoarce la bază.`,
        });
      }
    }

    // --- CASE 2: Returning to Base (Homecoming) ---
    else if (currentFleet.status === "returning" && nextState.tick >= currentFleet.arrivalTime) {
      mutated = true;
      keepFleet = false;
      
      // 1. Distribute Payload
      if (currentFleet.payload) {
        const resDelta: any = {};
        for (const [id, amount] of Object.entries(currentFleet.payload)) {
          const resourceKeys = ["power", "supply", "stability", "activation", "hull", "shield", "morale", "signalRange", "supplyFlow", "antimatter"];
          if (resourceKeys.includes(id)) {
            resDelta[id] = amount;
          } else {
            // It's a galaxy material
            nextState.inventory[id as GalaxyMaterialId] = (nextState.inventory[id as GalaxyMaterialId] ?? 0) + (amount as number);
          }
        }
        nextState.resources = addResourceDelta(nextState.resources, resDelta);
      }

      // 2. Return Survivors to Garrison & Cleanup Ledger
      if (currentFleet.casualties) {
        nextState = releaseAllocationWithCasualties(nextState, currentFleet.id, currentFleet.casualties.killed, currentFleet.casualties.wounded);
      } else {
        nextState = releaseAllocation(nextState, currentFleet.id);
      }

      const payloadSummary = currentFleet.payload ? Object.entries(currentFleet.payload).map(([id, amt]) => `${amt} ${id}`).join(", ") : "none";
      const killedSummary = currentFleet.casualties ? Object.entries(currentFleet.casualties.killed).map(([id, amt]) => `${amt} ${id}`).join(", ") : "none";
      const woundedSummary = currentFleet.casualties ? Object.entries(currentFleet.casualties.wounded).map(([id, amt]) => `${amt} ${id}`).join(", ") : "none";

      journals.push({
        en: `Fleet ${currentFleet.id} returned to base. Payload: ${payloadSummary}. Killed: ${killedSummary}. Wounded: ${woundedSummary}.`,
        hu: `A(z) ${currentFleet.id} flotta visszatért. Zsákmány: ${payloadSummary}. Elesett: ${killedSummary}. Sebesült: ${woundedSummary}.`,
        de: `Flotte ${currentFleet.id} zur Basis zurückgekehrt. Beute: ${payloadSummary}. Gefallen: ${killedSummary}. Verwundet: ${woundedSummary}.`,
        ro: `Flota ${currentFleet.id} s-a întors la bază. Pradă: ${payloadSummary}. Morți: ${killedSummary}. Răniți: ${woundedSummary}.`,
      });

      nextState = pushArchiveEvent(nextState, {
        category: "fleet",
        severity: "info",
        importance: 2,
        title: { en: "Fleet Returned", hu: "Flotta Visszatért", de: "Flotte zurückgekehrt", ro: "Flotă Întoarsă" },
        summary: {
          en: `Fleet ${currentFleet.id} safely docked. Resources secured.`,
          hu: `A(z) ${currentFleet.id} flotta sikeresen dokkolt. Erőforrások biztosítva.`,
          de: `Flotte ${currentFleet.id} sicher angedockt. Ressourcen gesichert.`,
          ro: `Flota ${currentFleet.id} a andocat în siguranță. Resurse asigurate.`
        },
        details: {
          loot: currentFleet.payload,
          casualties: currentFleet.casualties,
        }
      });

      nextArchiveFleets.push(currentFleet);
    }

    if (keepFleet) {
      nextFleets.push(currentFleet);
    }
  }

  if (mutated) {
    nextState = {
      ...nextState,
      galaxy: {
        ...nextState.galaxy,
        activeFleets: nextFleets,
        transientNodes: nextTransientNodes,
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

    if (journals.length > 0) {
      const lastJ = journals[journals.length - 1];
      nextState.lastActionFeedback = {
        actionType: "fleet_return",
        success: true,
        summary: lastJ,
      };
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