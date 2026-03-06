/*  ─── Szoba adatkezelés (localStorage) ───
 *
 *  Kulcsok:
 *    plizio_rooms_owned       → string[]  (birtokolt szoba ID-k)
 *    plizio_rooms_furniture   → Record<roomId, PlacedFurniture[]>
 *    plizio_furniture_owned   → string[]  (birtokolt bútor ID-k)
 *    plizio_rooms_level       → Record<roomId, number>  (szoba szint / méret upgrade)
 */

export interface PlacedFurniture {
  furnitureId: string;
  gridX: number;
  gridY: number;
  rotation: 0 | 1 | 2 | 3;
}

// ─── SZOBÁK ───

const ROOMS_KEY = "plizio_rooms_owned";
const FURNITURE_PLACEMENT_KEY = "plizio_rooms_furniture";
const FURNITURE_OWNED_KEY = "plizio_furniture_owned";
const ROOMS_LEVEL_KEY = "plizio_rooms_level";

// ─── SZOBA UPGRADE RENDSZER ───
// Minden szoba 3 szintű: 1 (alap), 2 (közép), 3 (nagy)
// Szintenként nő a gridW és gridH

export interface RoomSizeTier {
  level: number;
  gridW: number;
  gridH: number;
  price: number; // upgrade ára (0 = alap szint)
}

// Szoba méret szintek definíciója
export const ROOM_SIZE_TIERS: Record<string, RoomSizeTier[]> = {
  bedroom: [
    { level: 1, gridW: 6, gridH: 6, price: 0 },
    { level: 2, gridW: 8, gridH: 8, price: 15 },
    { level: 3, gridW: 10, gridH: 10, price: 30 },
  ],
  living: [
    { level: 1, gridW: 7, gridH: 7, price: 0 },
    { level: 2, gridW: 9, gridH: 9, price: 20 },
    { level: 3, gridW: 11, gridH: 11, price: 35 },
  ],
  kitchen: [
    { level: 1, gridW: 5, gridH: 6, price: 0 },
    { level: 2, gridW: 7, gridH: 8, price: 15 },
    { level: 3, gridW: 9, gridH: 10, price: 25 },
  ],
  bathroom: [
    { level: 1, gridW: 5, gridH: 5, price: 0 },
    { level: 2, gridW: 7, gridH: 7, price: 12 },
    { level: 3, gridW: 9, gridH: 9, price: 22 },
  ],
  garden: [
    { level: 1, gridW: 8, gridH: 8, price: 0 },
    { level: 2, gridW: 10, gridH: 10, price: 20 },
    { level: 3, gridW: 12, gridH: 12, price: 40 },
  ],
};

export function getRoomLevel(roomId: string): number {
  if (typeof window === "undefined") return 1;
  const raw = localStorage.getItem(ROOMS_LEVEL_KEY);
  if (!raw) return 1;
  try {
    const levels = JSON.parse(raw) as Record<string, number>;
    return levels[roomId] || 1;
  } catch {
    return 1;
  }
}

export function upgradeRoom(roomId: string): void {
  const current = getRoomLevel(roomId);
  const tiers = ROOM_SIZE_TIERS[roomId];
  if (!tiers || current >= tiers.length) return;
  const raw = localStorage.getItem(ROOMS_LEVEL_KEY);
  let levels: Record<string, number> = {};
  try {
    if (raw) levels = JSON.parse(raw);
  } catch { /* ignore */ }
  levels[roomId] = current + 1;
  localStorage.setItem(ROOMS_LEVEL_KEY, JSON.stringify(levels));
}

export function getRoomSize(roomId: string): { gridW: number; gridH: number } {
  const level = getRoomLevel(roomId);
  const tiers = ROOM_SIZE_TIERS[roomId];
  if (!tiers) return { gridW: 6, gridH: 6 };
  const tier = tiers[level - 1] || tiers[0];
  return { gridW: tier.gridW, gridH: tier.gridH };
}

export function getNextUpgrade(roomId: string): RoomSizeTier | null {
  const level = getRoomLevel(roomId);
  const tiers = ROOM_SIZE_TIERS[roomId];
  if (!tiers || level >= tiers.length) return null;
  return tiers[level]; // next tier
}

export function getOwnedRooms(): string[] {
  if (typeof window === "undefined") return ["bedroom"];
  const raw = localStorage.getItem(ROOMS_KEY);
  if (!raw) return ["bedroom"]; // Hálószoba mindig van
  try {
    const arr = JSON.parse(raw) as string[];
    if (!arr.includes("bedroom")) arr.unshift("bedroom");
    return arr;
  } catch {
    return ["bedroom"];
  }
}

export function buyRoom(roomId: string): void {
  const owned = getOwnedRooms();
  if (owned.includes(roomId)) return;
  owned.push(roomId);
  localStorage.setItem(ROOMS_KEY, JSON.stringify(owned));
}

export function ownsRoom(roomId: string): boolean {
  return getOwnedRooms().includes(roomId);
}

// ─── BÚTOROK (birtokolt) ───

export function getOwnedFurniture(): string[] {
  if (typeof window === "undefined") return [];
  const raw = localStorage.getItem(FURNITURE_OWNED_KEY);
  if (!raw) return ["bed_basic", "nightstand", "lamp_floor"]; // Alap bútorok
  try {
    return JSON.parse(raw) as string[];
  } catch {
    return [];
  }
}

export function buyFurniture(furnitureId: string): void {
  const owned = getOwnedFurniture();
  if (owned.includes(furnitureId)) return;
  owned.push(furnitureId);
  localStorage.setItem(FURNITURE_OWNED_KEY, JSON.stringify(owned));
}

export function ownsFurniture(furnitureId: string): boolean {
  return getOwnedFurniture().includes(furnitureId);
}

// ─── BÚTOR ELHELYEZÉS (szobánként) ───

export function getRoomFurniture(roomId: string): PlacedFurniture[] {
  if (typeof window === "undefined") return [];
  const raw = localStorage.getItem(FURNITURE_PLACEMENT_KEY);
  if (!raw) return getDefaultFurniture(roomId);
  try {
    const all = JSON.parse(raw) as Record<string, PlacedFurniture[]>;
    return all[roomId] || getDefaultFurniture(roomId);
  } catch {
    return [];
  }
}

export function saveRoomFurniture(
  roomId: string,
  furniture: PlacedFurniture[]
): void {
  const raw = localStorage.getItem(FURNITURE_PLACEMENT_KEY);
  let all: Record<string, PlacedFurniture[]> = {};
  try {
    if (raw) all = JSON.parse(raw);
  } catch {
    /* ignore */
  }
  all[roomId] = furniture;
  localStorage.setItem(FURNITURE_PLACEMENT_KEY, JSON.stringify(all));
}

export function placeFurniture(
  roomId: string,
  furnitureId: string,
  gridX: number,
  gridY: number,
  rotation: 0 | 1 | 2 | 3 = 0
): void {
  const current = getRoomFurniture(roomId);
  current.push({ furnitureId, gridX, gridY, rotation });
  saveRoomFurniture(roomId, current);
}

export function removeFurniture(roomId: string, index: number): void {
  const current = getRoomFurniture(roomId);
  current.splice(index, 1);
  saveRoomFurniture(roomId, current);
}

// ─── Alapértelmezett bútorok (első betöltésnél) ───

function getDefaultFurniture(roomId: string): PlacedFurniture[] {
  if (roomId === "bedroom") {
    return [
      { furnitureId: "bed_basic", gridX: 1, gridY: 1, rotation: 0 },
      { furnitureId: "nightstand", gridX: 0, gridY: 1, rotation: 0 },
      { furnitureId: "lamp_floor", gridX: 0, gridY: 4, rotation: 0 },
    ];
  }
  return [];
}
