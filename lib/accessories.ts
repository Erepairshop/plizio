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
  type: "crown" | "cap" | "halo" | "horns" | "tophat" | "helmet" | "antenna" | "wizard"
      | "beanie" | "bucket" | "party" | "fedora" | "viking" | "ninja" | "snapback" | "bandana" | "bunnyears";
}

export interface TrailDef {
  id: string;
  icon: string;
  name: string;
  price: number;
  color: string;
  emissive: string;
  type: "fire" | "ice" | "rainbow" | "stars" | "smoke" | "electric"
      | "magic" | "poison" | "gold" | "dark" | "nature" | "love" | "ghost" | "lava" | "neon" | "shadow";
}

export const HATS: HatDef[] = [
  // ── Fejedelmi / Fantasy ──────────────────────────────────────
  { id: "crown_gold",     icon: "👑", name: "Gold Crown",      price: 14, color: "#FFD700", emissive: "#FFD700", emissiveIntensity: 0.6, type: "crown" },
  { id: "crown_silver",   icon: "👑", name: "Silver Crown",    price: 10, color: "#C0C0C0", emissive: "#E0E0FF", emissiveIntensity: 0.4, type: "crown" },
  { id: "crown_ruby",     icon: "💎", name: "Ruby Crown",      price: 18, color: "#9B0000", emissive: "#FF2244", emissiveIntensity: 0.7, type: "crown" },
  { id: "crown_emerald",  icon: "💚", name: "Emerald Crown",   price: 18, color: "#006622", emissive: "#00FF66", emissiveIntensity: 0.6, type: "crown" },
  { id: "halo",           icon: "😇", name: "Halo",            price: 18, color: "#FFD700", emissive: "#FFFACD", emissiveIntensity: 0.9, type: "halo" },
  { id: "halo_neon",      icon: "🌀", name: "Neon Halo",       price: 22, color: "#00FFFF", emissive: "#00FFFF", emissiveIntensity: 1.2, type: "halo" },
  { id: "horns",          icon: "😈", name: "Devil Horns",     price: 14, color: "#CC0000", emissive: "#FF2200", emissiveIntensity: 0.5, type: "horns" },
  { id: "horns_ice",      icon: "🧊", name: "Ice Horns",       price: 16, color: "#88DDFF", emissive: "#00CED1", emissiveIntensity: 0.6, type: "horns" },
  { id: "wizard",         icon: "🧙", name: "Wizard Hat",      price: 20, color: "#6A0DAD", emissive: "#9B30FF", emissiveIntensity: 0.5, type: "wizard" },
  { id: "wizard_dark",    icon: "🔮", name: "Dark Wizard",     price: 24, color: "#1A0A2E", emissive: "#6600FF", emissiveIntensity: 0.8, type: "wizard" },

  // ── Baseball / Sport ─────────────────────────────────────────
  { id: "cap_red",        icon: "🧢", name: "Red Cap",         price: 5,  color: "#FF3333", emissive: "#FF0000", emissiveIntensity: 0.15, type: "cap" },
  { id: "cap_blue",       icon: "🧢", name: "Blue Cap",        price: 5,  color: "#2255CC", emissive: "#3366FF", emissiveIntensity: 0.15, type: "cap" },
  { id: "cap_green",      icon: "🧢", name: "Green Cap",       price: 5,  color: "#228822", emissive: "#33CC44", emissiveIntensity: 0.15, type: "cap" },
  { id: "cap_black",      icon: "🧢", name: "Black Cap",       price: 5,  color: "#1a1a1a", emissive: "#444444", emissiveIntensity: 0.15, type: "cap" },
  { id: "snapback_pink",  icon: "🩷", name: "Pink Snapback",   price: 7,  color: "#FF69B4", emissive: "#FF1493", emissiveIntensity: 0.2, type: "snapback" },
  { id: "snapback_gold",  icon: "✨", name: "Gold Snapback",   price: 8,  color: "#DAA520", emissive: "#FFD700", emissiveIntensity: 0.3, type: "snapback" },

  // ── Casual ───────────────────────────────────────────────────
  { id: "beanie_grey",    icon: "🎿", name: "Grey Beanie",     price: 6,  color: "#888888", emissive: "#AAAAAA", emissiveIntensity: 0.1, type: "beanie" },
  { id: "beanie_red",     icon: "🎿", name: "Red Beanie",      price: 6,  color: "#CC2222", emissive: "#FF3333", emissiveIntensity: 0.15, type: "beanie" },
  { id: "beanie_neon",    icon: "💚", name: "Neon Beanie",     price: 9,  color: "#39FF14", emissive: "#39FF14", emissiveIntensity: 0.5, type: "beanie" },
  { id: "bucket_white",   icon: "🪣", name: "White Bucket",    price: 7,  color: "#F0F0F0", emissive: "#FFFFFF", emissiveIntensity: 0.1, type: "bucket" },
  { id: "bucket_camo",    icon: "🌿", name: "Camo Bucket",     price: 8,  color: "#4A5A2A", emissive: "#667744", emissiveIntensity: 0.1, type: "bucket" },
  { id: "bandana_red",    icon: "🔴", name: "Red Bandana",     price: 5,  color: "#CC1111", emissive: "#FF2222", emissiveIntensity: 0.15, type: "bandana" },

  // ── Elegáns ──────────────────────────────────────────────────
  { id: "tophat",         icon: "🎩", name: "Top Hat",         price: 10, color: "#1a1a2e", emissive: "#333366", emissiveIntensity: 0.2, type: "tophat" },
  { id: "tophat_white",   icon: "🎩", name: "White Top Hat",   price: 12, color: "#F0F0F0", emissive: "#DDDDFF", emissiveIntensity: 0.2, type: "tophat" },
  { id: "fedora_brown",   icon: "🤠", name: "Brown Fedora",    price: 11, color: "#7B4A1E", emissive: "#AA6A30", emissiveIntensity: 0.15, type: "fedora" },
  { id: "fedora_black",   icon: "🎭", name: "Black Fedora",    price: 12, color: "#111111", emissive: "#444466", emissiveIntensity: 0.2, type: "fedora" },

  // ── Harcos / Egyedi ──────────────────────────────────────────
  { id: "helmet",         icon: "⛑️",  name: "Helmet",          price: 8,  color: "#4a90d9", emissive: "#3366CC", emissiveIntensity: 0.3, type: "helmet" },
  { id: "helmet_gold",    icon: "⚔️",  name: "Gold Helmet",     price: 15, color: "#DAA520", emissive: "#FFD700", emissiveIntensity: 0.5, type: "helmet" },
  { id: "viking",         icon: "🪖",  name: "Viking Helm",     price: 16, color: "#888888", emissive: "#AAAACC", emissiveIntensity: 0.3, type: "viking" },
  { id: "ninja",          icon: "🥷",  name: "Ninja Wrap",      price: 13, color: "#1a1a1a", emissive: "#CC0000", emissiveIntensity: 0.4, type: "ninja" },
  { id: "antenna",        icon: "📡",  name: "Antenna",         price: 7,  color: "#00FF88", emissive: "#00FF88", emissiveIntensity: 0.8, type: "antenna" },
  { id: "party_hat",      icon: "🎉",  name: "Party Hat",       price: 5,  color: "#FF6688", emissive: "#FF88AA", emissiveIntensity: 0.3, type: "party" },

  // ── Állatos ─────────────────────────────────────────────────
  { id: "bunny_ears",     icon: "🐰",  name: "Bunny Ears",      price: 8,  color: "#F8E8F0", emissive: "#FFB3C6", emissiveIntensity: 0.15, type: "bunnyears" },
  { id: "bunny_ears_pink",icon: "🩷",  name: "Pink Bunny Ears", price: 10, color: "#FFB3C6", emissive: "#FF69B4", emissiveIntensity: 0.25, type: "bunnyears" },
];

export const TRAILS: TrailDef[] = [
  // ── Alap ─────────────────────────────────────────────────────
  { id: "trail_smoke",     icon: "💨", name: "Smoke Trail",     price: 7,  color: "#888899", emissive: "#666677", type: "smoke" },
  { id: "trail_fire",      icon: "🔥", name: "Fire Trail",      price: 10, color: "#FF4500", emissive: "#FF6600", type: "fire" },
  { id: "trail_ice",       icon: "❄️", name: "Ice Trail",       price: 10, color: "#00BFFF", emissive: "#00CED1", type: "ice" },
  { id: "trail_stars",     icon: "⭐", name: "Star Trail",      price: 14, color: "#FFD700", emissive: "#FFFACD", type: "stars" },
  { id: "trail_electric",  icon: "⚡", name: "Electric Trail",  price: 18, color: "#00D4FF", emissive: "#00FFFF", type: "electric" },
  { id: "trail_rainbow",   icon: "🌈", name: "Rainbow Trail",   price: 25, color: "#FF69B4", emissive: "#FFD700", type: "rainbow" },

  // ── Természet ────────────────────────────────────────────────
  { id: "trail_nature",    icon: "🌿", name: "Nature Trail",    price: 12, color: "#2D8A2D", emissive: "#44FF88", type: "nature" },
  { id: "trail_poison",    icon: "☢️", name: "Poison Trail",    price: 15, color: "#1A3A00", emissive: "#44FF00", type: "poison" },
  { id: "trail_lava",      icon: "🌋", name: "Lava Trail",      price: 16, color: "#8B1A00", emissive: "#FF4400", type: "lava" },

  // ── Varázs ───────────────────────────────────────────────────
  { id: "trail_magic",     icon: "🔮", name: "Magic Trail",     price: 20, color: "#8800FF", emissive: "#CC44FF", type: "magic" },
  { id: "trail_love",      icon: "❤️", name: "Love Trail",      price: 18, color: "#FF2266", emissive: "#FF88AA", type: "love" },
  { id: "trail_ghost",     icon: "👻", name: "Ghost Trail",     price: 19, color: "#C8F0E8", emissive: "#00FFCC", type: "ghost" },

  // ── Prémium ──────────────────────────────────────────────────
  { id: "trail_gold",      icon: "✨", name: "Gold Trail",      price: 22, color: "#FFD700", emissive: "#FFEE44", type: "gold" },
  { id: "trail_neon",      icon: "💡", name: "Neon Trail",      price: 24, color: "#FF00AA", emissive: "#FF00FF", type: "neon" },
  { id: "trail_dark",      icon: "🖤", name: "Dark Trail",      price: 22, color: "#1a003a", emissive: "#9900FF", type: "dark" },
  { id: "trail_shadow",    icon: "🌑", name: "Shadow Trail",    price: 20, color: "#0a0a1a", emissive: "#4400AA", type: "shadow" },
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
