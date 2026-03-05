"use client";

/*  ─── Bútor definíciók (adat réteg) ───
 *
 *  BŐVÍTÉSHEZ:
 *  1. Add hozzá az új bútort a FURNITURE_DEFS tömbhöz
 *  2. Rajzold meg az SVG-t a FurnitureSVG.tsx-ben
 *  3. Regisztráld a FURNITURE_COMPONENTS map-ben (FurnitureSVG.tsx alján)
 */

export interface FurnitureDef {
  id: string;
  name: string;        // megjelenítendő név
  icon: string;        // emoji fallback (shop listához)
  price: number;       // ár ⭐-ban (0 = ingyenes / alap)
  gridW: number;       // szélesség grid cellákban
  gridH: number;       // magasság grid cellákban
  room: string;        // melyik szobába illik ("bedroom" | "living" | "kitchen" | "bathroom" | "garden" | "any")
  category: string;    // "bed" | "seating" | "storage" | "lighting" | "table" | "decor" | "appliance" | "plant"
  hasAnimation?: boolean;
  animationType?: "glow" | "flicker" | "bubble" | "sway";
}

export const FURNITURE_DEFS: FurnitureDef[] = [
  // ── HÁLÓSZOBA ──
  { id: "bed_basic", name: "Egyszerű ágy", icon: "🛏️", price: 0, gridW: 2, gridH: 1, room: "bedroom", category: "bed" },
  { id: "nightstand", name: "Éjjeliszekrény", icon: "🗄️", price: 3, gridW: 1, gridH: 1, room: "bedroom", category: "storage" },
  { id: "lamp_floor", name: "Állólámpa", icon: "💡", price: 4, gridW: 1, gridH: 1, room: "any", category: "lighting", hasAnimation: true, animationType: "glow" },
  { id: "wardrobe", name: "Szekrény", icon: "🚪", price: 6, gridW: 1, gridH: 2, room: "bedroom", category: "storage" },
  { id: "desk", name: "Íróasztal", icon: "🖥️", price: 5, gridW: 2, gridH: 1, room: "any", category: "table" },

  // ── NAPPALI ──
  { id: "couch", name: "Kanapé", icon: "🛋️", price: 10, gridW: 2, gridH: 1, room: "living", category: "seating" },
  { id: "tv_stand", name: "TV szekrény", icon: "📺", price: 8, gridW: 2, gridH: 1, room: "living", category: "appliance", hasAnimation: true, animationType: "glow" },
  { id: "bookshelf", name: "Könyvespolc", icon: "📚", price: 6, gridW: 1, gridH: 2, room: "any", category: "storage" },
  { id: "plant_big", name: "Nagy növény", icon: "🌿", price: 3, gridW: 1, gridH: 1, room: "any", category: "plant", hasAnimation: true, animationType: "sway" },

  // ── KONYHA ──
  { id: "fridge", name: "Hűtőszekrény", icon: "🧊", price: 8, gridW: 1, gridH: 1, room: "kitchen", category: "appliance" },

  // TODO: Bővítendő! Lásd CLAUDE.md bútor lista
  // { id: "bed_double", name: "Franciaágy", icon: "🛏️", price: 8, gridW: 2, gridH: 2, room: "bedroom", category: "bed" },
  // { id: "coffee_table", name: "Dohányzóasztal", icon: "☕", price: 5, gridW: 2, gridH: 1, room: "living", category: "table" },
  // { id: "fireplace", name: "Kandalló", icon: "🔥", price: 15, gridW: 2, gridH: 1, room: "living", category: "decor", hasAnimation: true, animationType: "flicker" },
  // { id: "aquarium", name: "Akvárium", icon: "🐠", price: 12, gridW: 2, gridH: 1, room: "living", category: "decor", hasAnimation: true, animationType: "bubble" },
  // { id: "stove", name: "Tűzhely", icon: "♨️", price: 7, gridW: 1, gridH: 1, room: "kitchen", category: "appliance" },
  // { id: "bathtub", name: "Kád", icon: "🛁", price: 10, gridW: 2, gridH: 1, room: "bathroom", category: "appliance", hasAnimation: true, animationType: "bubble" },
  // { id: "fountain", name: "Szökőkút", icon: "⛲", price: 20, gridW: 2, gridH: 2, room: "garden", category: "decor", hasAnimation: true, animationType: "bubble" },
];

export function getFurnitureDef(id: string): FurnitureDef | undefined {
  return FURNITURE_DEFS.find((f) => f.id === id);
}

export function getFurnitureByRoom(roomType: string): FurnitureDef[] {
  return FURNITURE_DEFS.filter((f) => f.room === roomType || f.room === "any");
}

export function getFurnitureByCategory(category: string): FurnitureDef[] {
  return FURNITURE_DEFS.filter((f) => f.category === category);
}
