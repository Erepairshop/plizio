/*  ─── Szoba adatkezelés (localStorage) ───
 *
 *  Kulcsok:
 *    plizio_rooms_owned       → string[]  (birtokolt szoba ID-k)
 *    plizio_rooms_furniture   → Record<roomId, PlacedFurniture[]>
 *    plizio_furniture_owned   → string[]  (birtokolt bútor ID-k)
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
