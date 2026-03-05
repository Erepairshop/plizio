/* ─── PLIZIO LIFE — Virtual Home Simulator ─── */

// ─── TYPES ───

export type RoomId = "bedroom" | "kitchen" | "bathroom" | "living" | "garden";
export type StatId = "energy" | "happiness" | "hunger" | "hygiene";
export type FurnitureCategory = "bed" | "food" | "shower" | "fun" | "decor" | "luxury";

export interface FurnitureDef {
  id: string;
  name: Record<string, string>; // en/hu/de/ro
  icon: string;
  price: number; // ⭐
  category: FurnitureCategory;
  room: RoomId;
  w: number; // grid cells wide
  h: number; // grid cells tall
  statBoost?: Partial<Record<StatId, number>>; // stat restore on interact
  interactTime?: number; // ms for interaction animation
  color: string;
  accent?: string;
}

export interface PlacedFurniture {
  defId: string;
  x: number; // grid col
  y: number; // grid row
}

export interface RoomDef {
  id: RoomId;
  name: Record<string, string>;
  icon: string;
  price: number; // ⭐ (0 = starter room)
  gridW: number;
  gridH: number;
  bgColor: string;
  floorColor: string;
}

export interface LifeStats {
  energy: number;
  happiness: number;
  hunger: number;
  hygiene: number;
}

export interface LifeSave {
  stats: LifeStats;
  lastTick: number; // Date.now() timestamp
  rooms: RoomId[]; // owned rooms
  furniture: Record<RoomId, PlacedFurniture[]>; // placed items per room
  ownedFurniture: string[]; // defIds
  activeRoom: RoomId;
  avatarPos: { x: number; y: number };
  totalInteractions: number;
}

// ─── CONSTANTS ───

const SAVE_KEY = "plizio_life_v1";
const MAX_STAT = 100;
const MIN_STAT = 0;

// How fast stats decay (points per real minute)
const DECAY_RATES: Record<StatId, number> = {
  energy: 0.8,    // ~0 in ~2 hours
  happiness: 0.5, // ~0 in ~3.3 hours
  hunger: 0.7,    // ~0 in ~2.4 hours
  hygiene: 0.4,   // ~0 in ~4 hours
};

// ─── ROOMS ───

export const ROOMS: RoomDef[] = [
  { id: "bedroom", name: { en: "Bedroom", hu: "Hálószoba", de: "Schlafzimmer", ro: "Dormitor" }, icon: "🛏️", price: 0, gridW: 6, gridH: 6, bgColor: "#1a1a3e", floorColor: "#2a2245" },
  { id: "kitchen", name: { en: "Kitchen", hu: "Konyha", de: "Küche", ro: "Bucătărie" }, icon: "🍳", price: 10, gridW: 6, gridH: 5, bgColor: "#1a2e1a", floorColor: "#223322" },
  { id: "bathroom", name: { en: "Bathroom", hu: "Fürdőszoba", de: "Badezimmer", ro: "Baie" }, icon: "🚿", price: 8, gridW: 5, gridH: 5, bgColor: "#1a2a3e", floorColor: "#1e2e42" },
  { id: "living", name: { en: "Living Room", hu: "Nappali", de: "Wohnzimmer", ro: "Sufragerie" }, icon: "🛋️", price: 15, gridW: 7, gridH: 6, bgColor: "#2a1a2e", floorColor: "#2e2235" },
  { id: "garden", name: { en: "Garden", hu: "Kert", de: "Garten", ro: "Grădină" }, icon: "🌳", price: 20, gridW: 8, gridH: 6, bgColor: "#0a1a0a", floorColor: "#1a2a1a" },
];

// ─── FURNITURE ───

export const FURNITURE: FurnitureDef[] = [
  // ── BEDROOM ──
  { id: "bed_basic", name: { en: "Basic Bed", hu: "Egyszerű ágy", de: "Einfaches Bett", ro: "Pat simplu" }, icon: "🛏️", price: 0, category: "bed", room: "bedroom", w: 2, h: 1, statBoost: { energy: 40 }, interactTime: 3000, color: "#5566AA", accent: "#AABBDD" },
  { id: "bed_comfy", name: { en: "Comfy Bed", hu: "Kényelmes ágy", de: "Bequemes Bett", ro: "Pat confortabil" }, icon: "🛏️", price: 8, category: "bed", room: "bedroom", w: 2, h: 1, statBoost: { energy: 60 }, interactTime: 2500, color: "#7755CC", accent: "#BB99EE" },
  { id: "bed_royal", name: { en: "Royal Bed", hu: "Királyi ágy", de: "Königsbett", ro: "Pat regal" }, icon: "👑", price: 20, category: "bed", room: "bedroom", w: 2, h: 2, statBoost: { energy: 80 }, interactTime: 2000, color: "#AA8833", accent: "#FFD700" },
  { id: "lamp_bed", name: { en: "Night Lamp", hu: "Éjjeli lámpa", de: "Nachtlampe", ro: "Lampă de noapte" }, icon: "💡", price: 3, category: "decor", room: "bedroom", w: 1, h: 1, color: "#DDAA44" },
  { id: "wardrobe", name: { en: "Wardrobe", hu: "Szekrény", de: "Kleiderschrank", ro: "Dulap" }, icon: "🚪", price: 6, category: "decor", room: "bedroom", w: 1, h: 2, color: "#8B6340" },
  { id: "plush", name: { en: "Plush Toy", hu: "Plüss játék", de: "Plüschtier", ro: "Jucărie de pluș" }, icon: "🧸", price: 4, category: "fun", room: "bedroom", w: 1, h: 1, statBoost: { happiness: 10 }, interactTime: 1000, color: "#CC8844" },
  { id: "poster", name: { en: "Cool Poster", hu: "Menő poszter", de: "Cooles Poster", ro: "Poster cool" }, icon: "🖼️", price: 3, category: "decor", room: "bedroom", w: 1, h: 1, color: "#5588CC" },
  { id: "rug_bed", name: { en: "Soft Rug", hu: "Puha szőnyeg", de: "Weicher Teppich", ro: "Covor moale" }, icon: "🟫", price: 4, category: "decor", room: "bedroom", w: 2, h: 1, color: "#9966AA" },

  // ── KITCHEN ──
  { id: "fridge", name: { en: "Fridge", hu: "Hűtő", de: "Kühlschrank", ro: "Frigider" }, icon: "🧊", price: 0, category: "food", room: "kitchen", w: 1, h: 1, statBoost: { hunger: 30 }, interactTime: 1500, color: "#CCCCDD", accent: "#88AACC" },
  { id: "stove", name: { en: "Stove", hu: "Tűzhely", de: "Herd", ro: "Aragaz" }, icon: "🍳", price: 6, category: "food", room: "kitchen", w: 1, h: 1, statBoost: { hunger: 50 }, interactTime: 2000, color: "#444455", accent: "#FF6644" },
  { id: "microwave", name: { en: "Microwave", hu: "Mikró", de: "Mikrowelle", ro: "Cuptor cu microunde" }, icon: "📦", price: 5, category: "food", room: "kitchen", w: 1, h: 1, statBoost: { hunger: 25 }, interactTime: 1200, color: "#555566" },
  { id: "table_kitchen", name: { en: "Dining Table", hu: "Étkezőasztal", de: "Esstisch", ro: "Masă de dining" }, icon: "🪑", price: 5, category: "decor", room: "kitchen", w: 2, h: 1, color: "#8B6340", accent: "#A0784B" },
  { id: "coffee", name: { en: "Coffee Machine", hu: "Kávégép", de: "Kaffeemaschine", ro: "Aparat de cafea" }, icon: "☕", price: 7, category: "food", room: "kitchen", w: 1, h: 1, statBoost: { energy: 20, happiness: 10 }, interactTime: 1500, color: "#333344", accent: "#886644" },
  { id: "cake_stand", name: { en: "Cake Stand", hu: "Torta állvány", de: "Kuchenständer", ro: "Suport tort" }, icon: "🎂", price: 8, category: "food", room: "kitchen", w: 1, h: 1, statBoost: { hunger: 35, happiness: 15 }, interactTime: 1500, color: "#DDAACC" },
  { id: "plant_kitchen", name: { en: "Herb Pot", hu: "Fűszernövény", de: "Kräutertopf", ro: "Ghiveci ierburi" }, icon: "🌿", price: 3, category: "decor", room: "kitchen", w: 1, h: 1, color: "#44AA44" },

  // ── BATHROOM ──
  { id: "shower", name: { en: "Shower", hu: "Zuhany", de: "Dusche", ro: "Duș" }, icon: "🚿", price: 0, category: "shower", room: "bathroom", w: 1, h: 1, statBoost: { hygiene: 50 }, interactTime: 2000, color: "#88BBDD", accent: "#AADDFF" },
  { id: "bathtub", name: { en: "Bathtub", hu: "Fürdőkád", de: "Badewanne", ro: "Cadă" }, icon: "🛁", price: 12, category: "shower", room: "bathroom", w: 2, h: 1, statBoost: { hygiene: 70, happiness: 15 }, interactTime: 3000, color: "#DDDDEE", accent: "#88CCFF" },
  { id: "jacuzzi", name: { en: "Jacuzzi", hu: "Jakuzzi", de: "Whirlpool", ro: "Jacuzzi" }, icon: "💎", price: 30, category: "luxury", room: "bathroom", w: 2, h: 2, statBoost: { hygiene: 80, happiness: 30, energy: 20 }, interactTime: 3500, color: "#44AADD", accent: "#66DDFF" },
  { id: "sink", name: { en: "Sink", hu: "Mosdó", de: "Waschbecken", ro: "Chiuvetă" }, icon: "🚰", price: 4, category: "shower", room: "bathroom", w: 1, h: 1, statBoost: { hygiene: 15 }, interactTime: 800, color: "#CCCCDD" },
  { id: "mirror", name: { en: "Mirror", hu: "Tükör", de: "Spiegel", ro: "Oglindă" }, icon: "🪞", price: 4, category: "decor", room: "bathroom", w: 1, h: 1, color: "#AABBCC" },
  { id: "towel_rack", name: { en: "Towel Rack", hu: "Törölközőtartó", de: "Handtuchhalter", ro: "Suport prosoape" }, icon: "🧴", price: 3, category: "decor", room: "bathroom", w: 1, h: 1, color: "#DDDDEE" },

  // ── LIVING ROOM ──
  { id: "sofa", name: { en: "Sofa", hu: "Kanapé", de: "Sofa", ro: "Canapea" }, icon: "🛋️", price: 8, category: "fun", room: "living", w: 2, h: 1, statBoost: { happiness: 20, energy: 10 }, interactTime: 2000, color: "#6655AA", accent: "#8877CC" },
  { id: "tv", name: { en: "TV", hu: "TV", de: "Fernseher", ro: "TV" }, icon: "📺", price: 10, category: "fun", room: "living", w: 2, h: 1, statBoost: { happiness: 30 }, interactTime: 2500, color: "#222233", accent: "#4488FF" },
  { id: "bookshelf", name: { en: "Bookshelf", hu: "Könyvespolc", de: "Bücherregal", ro: "Raft de cărți" }, icon: "📚", price: 6, category: "fun", room: "living", w: 1, h: 2, statBoost: { happiness: 15 }, interactTime: 2000, color: "#8B6340", accent: "#DD8844" },
  { id: "gaming_pc", name: { en: "Gaming PC", hu: "Gamer PC", de: "Gaming-PC", ro: "PC Gaming" }, icon: "🖥️", price: 18, category: "fun", room: "living", w: 1, h: 1, statBoost: { happiness: 40 }, interactTime: 3000, color: "#222233", accent: "#FF2D78" },
  { id: "arcade", name: { en: "Arcade Machine", hu: "Arcade gép", de: "Spielautomat", ro: "Aparat arcade" }, icon: "🕹️", price: 25, category: "luxury", room: "living", w: 1, h: 1, statBoost: { happiness: 50 }, interactTime: 3000, color: "#FF2D78", accent: "#FFD700" },
  { id: "guitar", name: { en: "Guitar", hu: "Gitár", de: "Gitarre", ro: "Chitară" }, icon: "🎸", price: 8, category: "fun", room: "living", w: 1, h: 1, statBoost: { happiness: 25 }, interactTime: 2000, color: "#AA6633" },
  { id: "vinyl", name: { en: "Vinyl Player", hu: "Lemezjátszó", de: "Plattenspieler", ro: "Pick-up" }, icon: "🎵", price: 10, category: "fun", room: "living", w: 1, h: 1, statBoost: { happiness: 20, energy: 5 }, interactTime: 2000, color: "#333344", accent: "#FFD700" },
  { id: "plant_living", name: { en: "Big Plant", hu: "Nagy növény", de: "Große Pflanze", ro: "Plantă mare" }, icon: "🪴", price: 4, category: "decor", room: "living", w: 1, h: 1, color: "#33AA55" },
  { id: "aquarium", name: { en: "Aquarium", hu: "Akvárium", de: "Aquarium", ro: "Acvariu" }, icon: "🐠", price: 15, category: "luxury", room: "living", w: 2, h: 1, statBoost: { happiness: 15 }, interactTime: 1500, color: "#2288BB", accent: "#44CCEE" },
  { id: "fireplace", name: { en: "Fireplace", hu: "Kandalló", de: "Kamin", ro: "Șemineu" }, icon: "🔥", price: 20, category: "luxury", room: "living", w: 2, h: 1, statBoost: { happiness: 20, energy: 15 }, interactTime: 2500, color: "#884422", accent: "#FF6622" },

  // ── GARDEN ──
  { id: "hammock", name: { en: "Hammock", hu: "Függőágy", de: "Hängematte", ro: "Hamac" }, icon: "🏖️", price: 8, category: "fun", room: "garden", w: 2, h: 1, statBoost: { energy: 35, happiness: 20 }, interactTime: 3000, color: "#DDAA66", accent: "#FFCC88" },
  { id: "bbq", name: { en: "BBQ Grill", hu: "Grillsütő", de: "Grill", ro: "Grătar" }, icon: "🍖", price: 10, category: "food", room: "garden", w: 1, h: 1, statBoost: { hunger: 60, happiness: 15 }, interactTime: 2500, color: "#555555", accent: "#FF4422" },
  { id: "pool", name: { en: "Pool", hu: "Medence", de: "Pool", ro: "Piscină" }, icon: "🏊", price: 35, category: "luxury", room: "garden", w: 3, h: 2, statBoost: { hygiene: 30, happiness: 40, energy: -10 }, interactTime: 3500, color: "#3399DD", accent: "#66CCFF" },
  { id: "swing", name: { en: "Swing", hu: "Hinta", de: "Schaukel", ro: "Leagăn" }, icon: "🎪", price: 6, category: "fun", room: "garden", w: 1, h: 1, statBoost: { happiness: 25 }, interactTime: 2000, color: "#AA6633", accent: "#DDDDDD" },
  { id: "fountain", name: { en: "Fountain", hu: "Szökőkút", de: "Brunnen", ro: "Fântână" }, icon: "⛲", price: 15, category: "luxury", room: "garden", w: 2, h: 2, statBoost: { happiness: 10 }, interactTime: 1000, color: "#7799BB", accent: "#AADDFF" },
  { id: "flowers", name: { en: "Flower Bed", hu: "Virágágyás", de: "Blumenbeet", ro: "Strat de flori" }, icon: "🌸", price: 4, category: "decor", room: "garden", w: 2, h: 1, color: "#DD66AA" },
  { id: "lantern", name: { en: "Garden Lantern", hu: "Kerti lámpa", de: "Gartenlaterne", ro: "Felinar grădină" }, icon: "🏮", price: 3, category: "decor", room: "garden", w: 1, h: 1, color: "#FFAA44" },
  { id: "trampoline", name: { en: "Trampoline", hu: "Trambulin", de: "Trampolin", ro: "Trambulină" }, icon: "🤸", price: 12, category: "fun", room: "garden", w: 2, h: 2, statBoost: { happiness: 35, energy: -15 }, interactTime: 2500, color: "#4488FF", accent: "#88BBFF" },
];

// ─── HELPERS ───

export function getFurnitureDef(id: string): FurnitureDef | undefined {
  return FURNITURE.find(f => f.id === id);
}

export function getRoomDef(id: RoomId): RoomDef {
  return ROOMS.find(r => r.id === id)!;
}

export function getRoomFurniture(roomId: RoomId): FurnitureDef[] {
  return FURNITURE.filter(f => f.room === roomId);
}

// ─── SAVE/LOAD ───

function defaultSave(): LifeSave {
  return {
    stats: { energy: 80, happiness: 70, hunger: 75, hygiene: 90 },
    lastTick: Date.now(),
    rooms: ["bedroom"],
    furniture: {
      bedroom: [{ defId: "bed_basic", x: 0, y: 0 }],
      kitchen: [],
      bathroom: [],
      living: [],
      garden: [],
    },
    ownedFurniture: ["bed_basic"],
    activeRoom: "bedroom",
    avatarPos: { x: 3, y: 3 },
    totalInteractions: 0,
  };
}

export function loadLife(): LifeSave {
  if (typeof window === "undefined") return defaultSave();
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) return defaultSave();
    const save = JSON.parse(raw) as LifeSave;
    // Apply stat decay since last tick
    const elapsed = (Date.now() - save.lastTick) / 60000; // minutes
    if (elapsed > 0) {
      for (const stat of Object.keys(DECAY_RATES) as StatId[]) {
        save.stats[stat] = Math.max(MIN_STAT, Math.round(save.stats[stat] - elapsed * DECAY_RATES[stat]));
      }
      save.lastTick = Date.now();
    }
    return save;
  } catch {
    return defaultSave();
  }
}

export function saveLife(save: LifeSave): void {
  if (typeof window === "undefined") return;
  save.lastTick = Date.now();
  localStorage.setItem(SAVE_KEY, JSON.stringify(save));
}

export function boostStat(stats: LifeStats, boosts: Partial<Record<StatId, number>>): LifeStats {
  const next = { ...stats };
  for (const [key, val] of Object.entries(boosts) as [StatId, number][]) {
    next[key] = Math.max(MIN_STAT, Math.min(MAX_STAT, next[key] + val));
  }
  return next;
}

export function getOverallMood(stats: LifeStats): string {
  const avg = (stats.energy + stats.happiness + stats.hunger + stats.hygiene) / 4;
  if (avg >= 80) return "happy";
  if (avg >= 60) return "idle";
  if (avg >= 40) return "confused";
  if (avg >= 20) return "sad";
  return "disappointed";
}

export function getStatColor(value: number): string {
  if (value >= 70) return "#00FF88";
  if (value >= 40) return "#FFD700";
  if (value >= 20) return "#FF8844";
  return "#FF2D78";
}

export function canPlaceFurniture(
  placed: PlacedFurniture[],
  def: FurnitureDef,
  x: number,
  y: number,
  room: RoomDef,
  excludeIdx?: number
): boolean {
  if (x < 0 || y < 0 || x + def.w > room.gridW || y + def.h > room.gridH) return false;
  for (let i = 0; i < placed.length; i++) {
    if (i === excludeIdx) continue;
    const other = getFurnitureDef(placed[i].defId);
    if (!other) continue;
    const ox = placed[i].x, oy = placed[i].y;
    if (x < ox + other.w && x + def.w > ox && y < oy + other.h && y + def.h > oy) return false;
  }
  return true;
}
