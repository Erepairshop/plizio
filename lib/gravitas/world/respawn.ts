import type { GalaxyNode } from "./types";
import { GALAXY_RESPAWN_CONFIG } from "./respawn-config";
import { getMeteorYieldMultiplier, getAvailableMaterials } from "../sim/battle/worldScaling";
import { GALAXY_FACTIONS } from "../sim/battle/factions";
import type { FactionId } from "../sim/faction/types";

export interface DestroyedNode {
  originalId: string;
  destroyedAt: number; // Date.now()
  respawnAt: number; // Date.now() + delay
}

export interface GalaxyRespawnState {
  destroyedNodes: DestroyedNode[];
  spawnedNodes: GalaxyNode[];
  lastRespawnCheck: number;
}

const STORAGE_KEY = "gravitas_galaxy_respawn";

export function loadRespawnState(): GalaxyRespawnState {
  try {
    if (typeof window === "undefined") return { destroyedNodes: [], spawnedNodes: [], lastRespawnCheck: Date.now() };
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed.destroyedNodes) && Array.isArray(parsed.spawnedNodes)) {
        return parsed;
      }
    }
  } catch {
    // fail silently
  }
  return { destroyedNodes: [], spawnedNodes: [], lastRespawnCheck: Date.now() };
}

export function saveRespawnState(state: GalaxyRespawnState): void {
  try {
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    }
  } catch {
    // fail silently
  }
}

export function markNodeDestroyed(state: GalaxyRespawnState, nodeId: string): GalaxyRespawnState {
  if (state.destroyedNodes.some(n => n.originalId === nodeId)) return state;

  const delay = GALAXY_RESPAWN_CONFIG.minRespawnDelayMs + Math.random() * (GALAXY_RESPAWN_CONFIG.maxRespawnDelayMs - GALAXY_RESPAWN_CONFIG.minRespawnDelayMs);
  const now = Date.now();
  
  return {
    ...state,
    destroyedNodes: [
      ...state.destroyedNodes,
      {
        originalId: nodeId,
        destroyedAt: now,
        respawnAt: now + delay,
      }
    ]
  };
}

export function generateRespawnNode(worldLevel: number, index: number): GalaxyNode {
  const isEncounter = Math.random() > 0.5;
  const { mapBounds, minDistanceFromCenter } = GALAXY_RESPAWN_CONFIG;
  
  let x = 0;
  let y = 0;
  do {
    x = (Math.random() * mapBounds * 2) - mapBounds;
    y = (Math.random() * mapBounds * 2) - mapBounds;
  } while (Math.sqrt(x*x + y*y) < minDistanceFromCenter);

  const position = { x: Math.round(x), y: Math.round(y) };
  const id = `respawn_${Date.now()}_${index}`;
  const motion = { x: [0, 4, -4, 0], y: [0, -4, 4, 0], rotate: [-2, 1, -1, -2] };

  if (isEncounter) {
    const types = ["derelict-outpost", "raider-stronghold", "fortified-relay"] as const;
    const type = types[Math.floor(Math.random() * types.length)];
    const factions = Object.keys(GALAXY_FACTIONS) as FactionId[];
    const factionId = factions[Math.floor(Math.random() * factions.length)];
    
    const threatLevelText = worldLevel > 15 ? "Extreme" : worldLevel > 8 ? "High" : worldLevel > 3 ? "Medium" : "Low";
    
    return {
      id,
      type: "battle",
      variantId: type,
      factionId,
      descriptorId: type,
      title: { en: "Unknown Sector Target", hu: "Ismeretlen Szektor Célpont", de: "Unbekanntes Sektor-Ziel", ro: "Țintă Sector Necunoscut" },
      description: { en: "A newly established hostile presence.", hu: "Újonnan létesült ellenséges jelenlét.", de: "Eine neu etablierte feindliche Präsenz.", ro: "O prezență ostilă nou stabilită." },
      position,
      cardOffset: { x: 100, y: -20 },
      radius: 200,
      assetSrc: `/gravitas/galaxy/${type}.webp`,
      assetClassName: "relative z-10 w-[120px] select-none transition-transform hover:scale-[1.03]",
      motion,
      motionDuration: 30,
      details: [
        { id: "threat", label: { en: "Threat", hu: "Veszély", de: "Gefahr", ro: "Amenințare" }, value: threatLevelText, tone: "amber" },
      ],
      footer: { en: "Spawned dynamically.", hu: "Dinamikusan generált.", de: "Dynamisch gespawnt.", ro: "Generat dinamic." }
    };
  } else {
    const materials = getAvailableMaterials(worldLevel);
    const matId = materials[Math.floor(Math.random() * materials.length)];
    const variants: Record<string, string> = {
      lumen_dust: "lumen", verdant_crystals: "verdant", aether_ore: "aether",
      ember_shards: "ember", sable_alloy: "sable", rift_stone: "rift"
    };
    const variant = variants[matId] || "lumen";
    
    const yieldMult = getMeteorYieldMultiplier(worldLevel);
    const baseYield = Math.max(10, Math.round(50 * yieldMult));

    return {
      id,
      type: "resource",
      variantId: variant,
      materialId: matId,
      title: { en: "Uncharted Cluster", hu: "Feltérképezetlen Csomó", de: "Unbekannter Cluster", ro: "Cluster Necartografiat" },
      description: { en: "Recently drifted into sensor range.", hu: "Nemrég sodródott szenzortávolságba.", de: "Kürzlich in Sensorreichweite gedriftet.", ro: "A derivat recent în raza senzorilor." },
      position,
      cardOffset: { x: 80, y: -15 },
      radius: 160,
      assetSrc: `/gravitas/galaxy/meteor-${variant}.webp`,
      assetClassName: "relative z-10 w-[80px] select-none transition-transform hover:scale-[1.03]",
      motion,
      motionDuration: 25,
      details: [
        { id: "material", label: { en: "Material", hu: "Anyag", de: "Material", ro: "Material" }, value: matId, tone: "cyan" },
      ],
      footer: { en: "Spawned dynamically.", hu: "Dinamikusan generált.", de: "Dynamisch gespawnt.", ro: "Generat dinamic." },
      mining: {
        baseYieldPerHour: baseYield,
        baseDurationMinutes: 60,
        baseUnitsPerRun: Math.max(10, Math.round(baseYield)),
        logisticsLevelBonusPerLevel: 0.2,
      }
    };
  }
}

export function tickGalaxyRespawn(state: GalaxyRespawnState, worldLevel: number): GalaxyRespawnState {
  const now = Date.now();
  if (now - state.lastRespawnCheck < GALAXY_RESPAWN_CONFIG.respawnCheckIntervalMs) {
    return state;
  }

  let mutated = false;
  let nextDestroyed = [...state.destroyedNodes];
  let nextSpawned = [...state.spawnedNodes];

  const readyToRespawn = nextDestroyed.filter(n => now >= n.respawnAt);
  if (readyToRespawn.length > 0) {
    mutated = true;
    nextDestroyed = nextDestroyed.filter(n => now < n.respawnAt);
    
    readyToRespawn.forEach((_, idx) => {
      if (nextSpawned.length < GALAXY_RESPAWN_CONFIG.maxSpawnedNodes) {
        nextSpawned.push(generateRespawnNode(worldLevel, idx));
      }
    });
  }

  if (mutated || now - state.lastRespawnCheck >= GALAXY_RESPAWN_CONFIG.respawnCheckIntervalMs) {
    return {
      destroyedNodes: nextDestroyed,
      spawnedNodes: nextSpawned,
      lastRespawnCheck: now,
    };
  }

  return state;
}

export function getActiveGalaxyNodes(baseNodes: GalaxyNode[], state: GalaxyRespawnState): GalaxyNode[] {
  const destroyedIds = new Set(state.destroyedNodes.map(n => n.originalId));
  const activeBase = baseNodes.filter(n => !destroyedIds.has(n.id));
  const activeSpawned = state.spawnedNodes.filter(n => !destroyedIds.has(n.id));
  
  return [...activeBase, ...activeSpawned];
}