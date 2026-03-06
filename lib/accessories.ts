// ─── ACCESSORIES SYSTEM ──────────────────────────────
// Hats, trails, and auras for the avatar

const OWNED_HATS_KEY = "plizio_owned_hats";
const ACTIVE_HAT_KEY = "plizio_active_hat";
const OWNED_TRAILS_KEY = "plizio_owned_trails";
const ACTIVE_TRAIL_KEY = "plizio_active_trail";

export interface HatDef {
  id: string;
  icon: string;
  name: string;
  price: number;
  color: string;
  emissive: string;
  emissiveIntensity: number;
  type: "crown" | "cap" | "halo" | "horns" | "tophat" | "helmet" | "antenna" | "wizard";
}

export interface TrailDef {
  id: string;
  icon: string;
  name: string;
  price: number;
  color: string;
  emissive: string;
  type: "fire" | "ice" | "rainbow" | "stars" | "smoke" | "electric";
}

export const HATS: HatDef[] = [
  {
    id: "crown_gold",
    icon: "👑",
    name: "Gold Crown",
    price: 14,
    color: "#FFD700",
    emissive: "#FFD700",
    emissiveIntensity: 0.6,
    type: "crown",
  },
  {
    id: "cap_red",
    icon: "🧢",
    name: "Red Cap",
    price: 5,
    color: "#FF3333",
    emissive: "#FF0000",
    emissiveIntensity: 0.15,
    type: "cap",
  },
  {
    id: "halo",
    icon: "😇",
    name: "Halo",
    price: 18,
    color: "#FFD700",
    emissive: "#FFFACD",
    emissiveIntensity: 0.9,
    type: "halo",
  },
  {
    id: "horns",
    icon: "😈",
    name: "Devil Horns",
    price: 14,
    color: "#CC0000",
    emissive: "#FF2200",
    emissiveIntensity: 0.5,
    type: "horns",
  },
  {
    id: "tophat",
    icon: "🎩",
    name: "Top Hat",
    price: 10,
    color: "#1a1a2e",
    emissive: "#333366",
    emissiveIntensity: 0.2,
    type: "tophat",
  },
  {
    id: "helmet",
    icon: "⛑️",
    name: "Helmet",
    price: 8,
    color: "#4a90d9",
    emissive: "#3366CC",
    emissiveIntensity: 0.3,
    type: "helmet",
  },
  {
    id: "antenna",
    icon: "📡",
    name: "Antenna",
    price: 7,
    color: "#00FF88",
    emissive: "#00FF88",
    emissiveIntensity: 0.8,
    type: "antenna",
  },
  {
    id: "wizard",
    icon: "🧙",
    name: "Wizard Hat",
    price: 20,
    color: "#6A0DAD",
    emissive: "#9B30FF",
    emissiveIntensity: 0.5,
    type: "wizard",
  },
];

export const TRAILS: TrailDef[] = [
  {
    id: "trail_fire",
    icon: "🔥",
    name: "Fire Trail",
    price: 10,
    color: "#FF4500",
    emissive: "#FF6600",
    type: "fire",
  },
  {
    id: "trail_ice",
    icon: "❄️",
    name: "Ice Trail",
    price: 10,
    color: "#00BFFF",
    emissive: "#00CED1",
    type: "ice",
  },
  {
    id: "trail_rainbow",
    icon: "🌈",
    name: "Rainbow Trail",
    price: 25,
    color: "#FF69B4",
    emissive: "#FFD700",
    type: "rainbow",
  },
  {
    id: "trail_stars",
    icon: "⭐",
    name: "Star Trail",
    price: 14,
    color: "#FFD700",
    emissive: "#FFFACD",
    type: "stars",
  },
  {
    id: "trail_smoke",
    icon: "💨",
    name: "Smoke Trail",
    price: 7,
    color: "#888899",
    emissive: "#666677",
    type: "smoke",
  },
  {
    id: "trail_electric",
    icon: "⚡",
    name: "Electric Trail",
    price: 18,
    color: "#00D4FF",
    emissive: "#00FFFF",
    type: "electric",
  },
];

// ─── Hat functions ──────────────────
export function getOwnedHats(): string[] {
  if (typeof window === "undefined") return [];
  const data = localStorage.getItem(OWNED_HATS_KEY);
  return data ? JSON.parse(data) : [];
}

export function getActiveHat(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(ACTIVE_HAT_KEY) || null;
}

export function setActiveHat(id: string | null): void {
  if (id === null) {
    localStorage.removeItem(ACTIVE_HAT_KEY);
  } else {
    localStorage.setItem(ACTIVE_HAT_KEY, id);
  }
}

export function buyHat(id: string): boolean {
  const owned = getOwnedHats();
  if (owned.includes(id)) return false;
  owned.push(id);
  localStorage.setItem(OWNED_HATS_KEY, JSON.stringify(owned));
  return true;
}

export function getHatDef(id: string): HatDef | null {
  return HATS.find((h) => h.id === id) || null;
}

// ─── Trail functions ──────────────────
export function getOwnedTrails(): string[] {
  if (typeof window === "undefined") return [];
  const data = localStorage.getItem(OWNED_TRAILS_KEY);
  return data ? JSON.parse(data) : [];
}

export function getActiveTrail(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(ACTIVE_TRAIL_KEY) || null;
}

export function setActiveTrail(id: string | null): void {
  if (id === null) {
    localStorage.removeItem(ACTIVE_TRAIL_KEY);
  } else {
    localStorage.setItem(ACTIVE_TRAIL_KEY, id);
  }
}

export function buyTrail(id: string): boolean {
  const owned = getOwnedTrails();
  if (owned.includes(id)) return false;
  owned.push(id);
  localStorage.setItem(OWNED_TRAILS_KEY, JSON.stringify(owned));
  return true;
}

export function getTrailDef(id: string): TrailDef | null {
  return TRAILS.find((t) => t.id === id) || null;
}
