import { METEOR_MATERIAL_ORDER } from "./constants";
import type { GalaxyWorldPosition } from "./types";

export type GalaxyMaterialId = (typeof METEOR_MATERIAL_ORDER)[number];

export type GalaxyInventory = Record<GalaxyMaterialId, number>;

export type GalaxyLivePreview = {
  materialId: GalaxyMaterialId;
  amount: number;
} | null;

export type DroneMissionState = {
  id: string;
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
};

const DRONE_MISSION_STORAGE_KEY = "gravitas_galaxy_drone_mission_v1";
const GALAXY_INVENTORY_STORAGE_KEY = "gravitas_galaxy_inventory_v1";
const GALAXY_LIVE_PREVIEW_STORAGE_KEY = "gravitas_galaxy_live_preview_v1";
export const GALAXY_STATE_UPDATED_EVENT = "gravitas:galaxy-state-updated";

function emitGalaxyStateUpdated(): void {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(GALAXY_STATE_UPDATED_EVENT));
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

export function loadSavedDroneMission(): DroneMissionState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(DRONE_MISSION_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as DroneMissionState;
    if (!parsed || typeof parsed.startedAt !== "number" || typeof parsed.targetNodeId !== "string") return null;
    const now = Date.now();
    if (parsed.phase === "returning" && parsed.returnCompleteAt && now >= parsed.returnCompleteAt) {
      localStorage.removeItem(DRONE_MISSION_STORAGE_KEY);
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

export function saveDroneMission(mission: DroneMissionState | null): void {
  if (typeof window === "undefined") return;
  try {
    if (!mission) {
      localStorage.removeItem(DRONE_MISSION_STORAGE_KEY);
      emitGalaxyStateUpdated();
      return;
    }
    localStorage.setItem(DRONE_MISSION_STORAGE_KEY, JSON.stringify(mission));
    emitGalaxyStateUpdated();
  } catch {
    // no-op
  }
}

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
