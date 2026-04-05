import { METEOR_MATERIAL_ORDER } from "./constants";
import type { GalaxyWorldPosition } from "./types";
import { DRONE_CONFIG } from "../economy";

export type GalaxyMaterialId = (typeof METEOR_MATERIAL_ORDER)[number];

export type GalaxyInventory = Record<GalaxyMaterialId, number>;

export type GalaxyLivePreview = {
  materialId: GalaxyMaterialId;
  amount: number;
} | null;

export type DroneMissionState = {
  id: string;
  droneIndex: number; // 0-11, which slot
  targetNodeId: string;
  materialId: GalaxyMaterialId;
  phase: "traveling" | "mining" | "returning";
  startedAt: number;
  arrivalAt: number;
  miningCompleteAt: number;
  travelDurationMinutes: number;
  miningDurationMinutes: number;
  targetYieldUnits: number;
  returnStartedAt?: number;
  returnCompleteAt?: number;
  returnStartPosition?: GalaxyWorldPosition;
  committedUnits?: number;
  failed?: boolean;
};

type NormalizedDroneMissionsResult = {
  missions: DroneMissionState[];
  completed: Array<{ materialId: GalaxyMaterialId; amount: number }>;
  changed: boolean;
};

const DRONE_MISSION_STORAGE_KEY_V1 = "gravitas_galaxy_drone_mission_v1";
const DRONE_MISSIONS_STORAGE_KEY_V2 = "gravitas_galaxy_drone_missions_v2";
const GALAXY_INVENTORY_STORAGE_KEY = "gravitas_galaxy_inventory_v1";
const GALAXY_LIVE_PREVIEW_STORAGE_KEY = "gravitas_galaxy_live_preview_v1";
export const GALAXY_STATE_UPDATED_EVENT = "gravitas:galaxy-state-updated";

function emitGalaxyStateUpdated(): void {
  if (typeof window === "undefined") return;
  queueMicrotask(() => window.dispatchEvent(new Event(GALAXY_STATE_UPDATED_EVENT)));
}

export function createDefaultGalaxyInventory(): GalaxyInventory {
  return METEOR_MATERIAL_ORDER.reduce((acc, materialId) => {
    acc[materialId] = 0;
    return acc;
  }, {} as GalaxyInventory);
}

export function formatCompactGalaxyValue(value: number): string {
  if (!Number.isFinite(value)) return "0";
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(value >= 10_000_000 ? 0 : 1)}M`;
  if (value >= 1_000) return `${(value / 1_000).toFixed(value >= 10_000 ? 0 : 1)}K`;
  return `${Math.floor(value)}`;
}

export function formatDurationMinutes(totalMinutes: number): string {
  const minutes = Math.max(0, Math.ceil(totalMinutes));
  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;
  if (hours === 0) return `${rest}m`;
  if (rest === 0) return `${hours}h`;
  return `${hours}h ${rest}m`;
}

// === Multi-Drone Config ===

export function getMaxDrones(logisticsLevel: number): number {
  return Math.min(DRONE_CONFIG.maxDrones, Math.floor(logisticsLevel * DRONE_CONFIG.baseDronesPerLogisticsLevel) + 1);
}

// === Multi-Drone Loading/Saving ===

export function loadAllDroneMissions(): DroneMissionState[] {
  if (typeof window === "undefined") return [];
  
  // Migration
  migrateDroneMissionV1toV2();

  try {
    const raw = localStorage.getItem(DRONE_MISSIONS_STORAGE_KEY_V2);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as DroneMissionState[];
    if (!Array.isArray(parsed)) return [];

    const { missions, completed, changed } = normalizeDroneMissions(parsed, Date.now());
    if (completed.length > 0) {
      const inventory = loadSavedGalaxyInventory();
      let nextInventory = { ...inventory };
      for (const item of completed) {
        nextInventory = addGalaxyInventoryMaterial(nextInventory, item.materialId, item.amount);
      }
      saveGalaxyInventory(nextInventory);
    }
    if (changed || completed.length > 0) {
      saveAllDroneMissions(missions);
    }
    return missions;
  } catch {
    return [];
  }
}

function normalizeDroneMissions(missions: DroneMissionState[], now: number): NormalizedDroneMissionsResult {
  const nextMissions: DroneMissionState[] = [];
  const completed: Array<{ materialId: GalaxyMaterialId; amount: number }> = [];
  let changed = false;

  for (const mission of missions) {
    if (!mission) continue;

    const travelMs = Math.max(1, mission.travelDurationMinutes * 60_000);
    const miningMs = Math.max(1, mission.miningDurationMinutes * 60_000);
    const returnMs = travelMs;

    if (mission.phase === "traveling") {
      if (now < mission.arrivalAt) {
        nextMissions.push(mission);
        continue;
      }

      const miningCompleteAt = mission.miningCompleteAt || (mission.arrivalAt + miningMs);
      const returnCompleteAt = miningCompleteAt + returnMs;

      if (now >= returnCompleteAt) {
        completed.push({
          materialId: mission.materialId,
          amount: mission.failed ? 0 : mission.targetYieldUnits,
        });
        changed = true;
        continue;
      }

      nextMissions.push({
        ...mission,
        phase: "returning",
        committedUnits: mission.failed ? 0 : mission.targetYieldUnits,
        returnStartedAt: miningCompleteAt,
        returnCompleteAt,
      });
      changed = true;
      continue;
    }

    if (mission.phase === "mining") {
      const miningCompleteAt = mission.miningCompleteAt || (mission.arrivalAt + miningMs);
      const returnCompleteAt = miningCompleteAt + returnMs;

      if (now < miningCompleteAt) {
        nextMissions.push(mission);
        continue;
      }

      if (now >= returnCompleteAt) {
        completed.push({
          materialId: mission.materialId,
          amount: mission.failed ? 0 : (mission.committedUnits ?? mission.targetYieldUnits),
        });
        changed = true;
        continue;
      }

      nextMissions.push({
        ...mission,
        phase: "returning",
        committedUnits: mission.failed ? 0 : (mission.committedUnits ?? mission.targetYieldUnits),
        returnStartedAt: miningCompleteAt,
        returnCompleteAt,
      });
      changed = true;
      continue;
    }

    if (mission.phase === "returning") {
      const returnCompleteAt = mission.returnCompleteAt ?? (mission.miningCompleteAt + returnMs);
      if (now >= returnCompleteAt) {
        completed.push({
          materialId: mission.materialId,
          amount: mission.failed ? 0 : (mission.committedUnits ?? mission.targetYieldUnits),
        });
        changed = true;
        continue;
      }
      nextMissions.push({
        ...mission,
        committedUnits: mission.committedUnits ?? (mission.failed ? 0 : mission.targetYieldUnits),
        returnStartedAt: mission.returnStartedAt ?? mission.miningCompleteAt,
        returnCompleteAt,
      });
      if ((mission.returnStartedAt ?? mission.miningCompleteAt) !== mission.returnStartedAt || mission.returnCompleteAt !== returnCompleteAt || (mission.committedUnits ?? (mission.failed ? 0 : mission.targetYieldUnits)) !== mission.committedUnits) {
        changed = true;
      }
      continue;
    }

    nextMissions.push(mission);
  }

  return { missions: nextMissions, completed, changed };
}

export function saveAllDroneMissions(missions: DroneMissionState[]): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(DRONE_MISSIONS_STORAGE_KEY_V2, JSON.stringify(missions));
    emitGalaxyStateUpdated();
  } catch {
    // no-op
  }
}

export function migrateDroneMissionV1toV2(): void {
  if (typeof window === "undefined") return;
  const v1Raw = localStorage.getItem(DRONE_MISSION_STORAGE_KEY_V1);
  const v2Raw = localStorage.getItem(DRONE_MISSIONS_STORAGE_KEY_V2);
  
  if (v1Raw && !v2Raw) {
    try {
      const v1Mission = JSON.parse(v1Raw) as any;
      if (v1Mission) {
        const v2Mission: DroneMissionState = {
          ...v1Mission,
          droneIndex: 0
        };
        localStorage.setItem(DRONE_MISSIONS_STORAGE_KEY_V2, JSON.stringify([v2Mission]));
        localStorage.removeItem(DRONE_MISSION_STORAGE_KEY_V1);
      }
    } catch {
      // migration failed
    }
  }
}

// === Mission Management ===

import { getCycleEffects } from "../sim/galaxy/cycles";

export function startDroneMission(
  missions: DroneMissionState[],
  droneIndex: number,
  targetNodeId: string,
  materialId: GalaxyMaterialId,
  travelDurationMinutes: number,
  miningDurationMinutes: number,
  targetYieldUnits: number,
  state?: import("../sim/types").StarholdState
): DroneMissionState[] {
  const startedAt = Date.now();
  const arrivalAt = startedAt + travelDurationMinutes * 60_000;
  const miningCompleteAt = arrivalAt + miningDurationMinutes * 60_000;
  
  let failed = false;
  if (state?.galaxyCycle) {
    const effects = getCycleEffects(state.galaxyCycle.currentPhase);
    if (effects.miningFailChance && Math.random() < effects.miningFailChance) {
      failed = true;
    }
  }

  const newMission: DroneMissionState = {
    id: `mission-${targetNodeId}-${startedAt}`,
    droneIndex,
    targetNodeId,
    materialId,
    phase: "traveling",
    startedAt,
    arrivalAt,
    miningCompleteAt,
    travelDurationMinutes,
    miningDurationMinutes,
    targetYieldUnits,
    failed,
  };

  const nextMissions = missions.filter(m => m.droneIndex !== droneIndex);
  nextMissions.push(newMission);
  return nextMissions;
}

export function completeDroneMission(
  missions: DroneMissionState[],
  droneIndex: number
): { updatedMissions: DroneMissionState[], gatheredMaterial: GalaxyMaterialId | null, gatheredAmount: number } {
  const mission = missions.find(m => m.droneIndex === droneIndex);
  if (!mission) return { updatedMissions: missions, gatheredMaterial: null, gatheredAmount: 0 };

  const gatheredMaterial = mission.materialId;
  const gatheredAmount = mission.failed ? 0 : (mission.committedUnits ?? 0);

  const nextMissions = missions.filter(m => m.droneIndex !== droneIndex);
  return { updatedMissions: nextMissions, gatheredMaterial, gatheredAmount };
}

export function cancelDroneMission(missions: DroneMissionState[], droneIndex: number): DroneMissionState[] {
  return missions.filter(m => m.droneIndex !== droneIndex);
}

export function getActiveMissionCount(missions: DroneMissionState[]): number {
  return missions.length;
}

export function getFreeDroneSlots(missions: DroneMissionState[], logisticsLevel: number): number[] {
  const maxDrones = getMaxDrones(logisticsLevel);
  const occupiedSlots = new Set(missions.map(m => m.droneIndex));
  const freeSlots: number[] = [];
  for (let i = 0; i < maxDrones; i++) {
    if (!occupiedSlots.has(i)) {
      freeSlots.push(i);
    }
  }
  return freeSlots;
}

// === Backward Compatibility Wrappers ===

export function loadSavedDroneMission(): DroneMissionState | null {
  const missions = loadAllDroneMissions();
  return missions.find(m => m.droneIndex === 0) ?? null;
}

export function saveDroneMission(mission: DroneMissionState | null): void {
  const missions = loadAllDroneMissions();
  let nextMissions = missions.filter(m => m.droneIndex !== 0);
  if (mission) {
    nextMissions.push({ ...mission, droneIndex: 0 });
  }
  saveAllDroneMissions(nextMissions);
}

// === Inventory Management ===

export function loadSavedGalaxyInventory(): GalaxyInventory {
  if (typeof window === "undefined") return createDefaultGalaxyInventory();
  try {
    const raw = localStorage.getItem(GALAXY_INVENTORY_STORAGE_KEY);
    if (!raw) return createDefaultGalaxyInventory();
    const parsed = JSON.parse(raw) as Partial<Record<GalaxyMaterialId, number>>;
    const inventory = createDefaultGalaxyInventory();
    METEOR_MATERIAL_ORDER.forEach((materialId) => {
      const value = parsed[materialId];
      inventory[materialId] = Number.isFinite(value) ? Math.max(0, Math.floor(value ?? 0)) : 0;
    });
    return inventory;
  } catch {
    return createDefaultGalaxyInventory();
  }
}

export function saveGalaxyInventory(inventory: GalaxyInventory): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(GALAXY_INVENTORY_STORAGE_KEY, JSON.stringify(inventory));
    emitGalaxyStateUpdated();
  } catch {
    // no-op
  }
}

export function loadSavedGalaxyLivePreview(): GalaxyLivePreview {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(GALAXY_LIVE_PREVIEW_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as GalaxyLivePreview;
    if (!parsed || typeof parsed.materialId !== "string" || typeof parsed.amount !== "number") return null;
    return { materialId: parsed.materialId as GalaxyMaterialId, amount: Math.max(0, Math.floor(parsed.amount)) };
  } catch {
    return null;
  }
}

export function saveGalaxyLivePreview(preview: GalaxyLivePreview): void {
  if (typeof window === "undefined") return;
  try {
    if (!preview) {
      localStorage.removeItem(GALAXY_LIVE_PREVIEW_STORAGE_KEY);
      emitGalaxyStateUpdated();
      return;
    }
    localStorage.setItem(GALAXY_LIVE_PREVIEW_STORAGE_KEY, JSON.stringify(preview));
    emitGalaxyStateUpdated();
  } catch {
    // no-op
  }
}

export function addGalaxyInventoryMaterial(current: GalaxyInventory, materialId: GalaxyMaterialId, amount: number): GalaxyInventory {
  if (amount <= 0) return current;
  return {
    ...current,
    [materialId]: current[materialId] + amount,
  };
}

export function getDroneMissionCurrentPosition(
  mission: DroneMissionState,
  targetPosition: GalaxyWorldPosition,
  basePosition: GalaxyWorldPosition,
  now: number,
): GalaxyWorldPosition {
  if (mission.phase === "traveling") {
    const totalMs = Math.max(1, mission.arrivalAt - mission.startedAt);
    const elapsedMs = Math.max(0, now - mission.startedAt);
    const progress = Math.min(1, elapsedMs / totalMs);
    return {
      x: basePosition.x + (targetPosition.x - basePosition.x) * progress,
      y: basePosition.y + (targetPosition.y - basePosition.y) * progress,
    };
  }
  if (mission.phase === "returning") {
    const start = mission.returnStartPosition ?? targetPosition;
    const totalMs = Math.max(1, (mission.returnCompleteAt ?? now) - (mission.returnStartedAt ?? now));
    const elapsedMs = Math.max(0, now - (mission.returnStartedAt ?? now));
    const progress = Math.min(1, elapsedMs / totalMs);
    return {
      x: start.x + (basePosition.x - start.x) * progress,
      y: start.y + (basePosition.y - start.y) * progress,
    };
  }
  return targetPosition;
}
