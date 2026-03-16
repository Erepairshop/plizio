// ─── HAIR SYSTEM ──────────────────────────────────────
// 30 hair color/style variants for the avatar

const OWNED_KEY = "plizio_owned_hair";
const ACTIVE_KEY = "plizio_active_hair";

export interface HairDef {
  id: string;
  name: string;
  icon: string;
  price: number;   // 0 = free (default)
  color: string;   // hair color
  highlight?: string; // optional highlight color for the swatch
}

export const HAIR_STYLES: HairDef[] = [
  // ── Natural ──────────────────────────────────────────────
  { id: "hair_chestnut",   name: "Chestnut",     icon: "🟫", price: 0,  color: "#5c3a18" },
  { id: "hair_black",      name: "Jet Black",    icon: "⬛", price: 2,  color: "#1a1008" },
  { id: "hair_dark_brown", name: "Dark Brown",   icon: "🟤", price: 2,  color: "#3b1f0c" },
  { id: "hair_brown",      name: "Brown",        icon: "🟤", price: 2,  color: "#6b3a1f" },
  { id: "hair_auburn",     name: "Auburn",       icon: "🟠", price: 3,  color: "#8B3A2A" },
  { id: "hair_copper",     name: "Copper",       icon: "🟠", price: 3,  color: "#B5571A" },
  { id: "hair_ginger",     name: "Ginger",       icon: "🔴", price: 3,  color: "#C65B1A" },
  { id: "hair_dark_red",   name: "Dark Red",     icon: "🔴", price: 3,  color: "#8B1A1A" },
  { id: "hair_blonde",     name: "Blonde",       icon: "🟡", price: 3,  color: "#D4A020" },
  { id: "hair_light_blonde", name: "Light Blonde", icon: "🟡", price: 3, color: "#E8CC6A" },
  { id: "hair_strawberry", name: "Strawberry",   icon: "🍓", price: 4,  color: "#C97840" },
  { id: "hair_ash_blonde", name: "Ash Blonde",   icon: "🌾", price: 4,  color: "#C8B878" },
  { id: "hair_gray",       name: "Gray",         icon: "⬜", price: 4,  color: "#888888" },
  { id: "hair_silver",     name: "Silver",       icon: "🪙", price: 5,  color: "#AAAACC" },
  { id: "hair_white",      name: "White",        icon: "⬜", price: 5,  color: "#F0F0F0" },

  // ── Dyed / Vibrant ───────────────────────────────────────
  { id: "hair_platinum",   name: "Platinum",     icon: "💎", price: 6,  color: "#E8E4F0" },
  { id: "hair_rose_gold",  name: "Rose Gold",    icon: "🌸", price: 6,  color: "#E8906A" },
  { id: "hair_bubblegum",  name: "Bubblegum",    icon: "🍬", price: 6,  color: "#FF69B4" },
  { id: "hair_hot_pink",   name: "Hot Pink",     icon: "💗", price: 7,  color: "#FF1493" },
  { id: "hair_red",        name: "Fiery Red",    icon: "🔥", price: 7,  color: "#CC2200" },
  { id: "hair_coral",      name: "Coral",        icon: "🪸", price: 6,  color: "#E8604A" },
  { id: "hair_lavender",   name: "Lavender",     icon: "💜", price: 7,  color: "#AA88DD" },
  { id: "hair_purple",     name: "Purple",       icon: "🟣", price: 7,  color: "#7B2FBE" },
  { id: "hair_deep_purple", name: "Deep Purple", icon: "🍇", price: 7,  color: "#4A0082" },

  // ── Fantasy / Special ────────────────────────────────────
  { id: "hair_blue",       name: "Ocean Blue",   icon: "🔵", price: 8,  color: "#2255CC" },
  { id: "hair_teal",       name: "Teal",         icon: "🩵", price: 8,  color: "#009980" },
  { id: "hair_mint",       name: "Mint",         icon: "🌿", price: 8,  color: "#50C880" },
  { id: "hair_neon_green", name: "Neon Green",   icon: "💚", price: 9,  color: "#39FF14" },
  { id: "hair_galaxy",     name: "Galaxy",       icon: "🌌", price: 12, color: "#2A0A4A" },
  { id: "hair_rainbow",    name: "Rainbow",      icon: "🌈", price: 15, color: "#FF6090" },
];

export function getOwnedHair(): string[] {
  if (typeof window === "undefined") return ["hair_chestnut"];
  const data = localStorage.getItem(OWNED_KEY);
  const owned = data ? JSON.parse(data) : ["hair_chestnut"];
  if (!owned.includes("hair_chestnut")) owned.unshift("hair_chestnut");
  return owned;
}

export function getActiveHair(): string {
  if (typeof window === "undefined") return "hair_chestnut";
  return localStorage.getItem(ACTIVE_KEY) || "hair_chestnut";
}

export function setActiveHair(id: string): void {
  localStorage.setItem(ACTIVE_KEY, id);
}

export function buyHairStyle(id: string): boolean {
  const owned = getOwnedHair();
  if (owned.includes(id)) return false;
  owned.push(id);
  localStorage.setItem(OWNED_KEY, JSON.stringify(owned));
  return true;
}

export function getHairDef(id: string): HairDef | null {
  return HAIR_STYLES.find(h => h.id === id) || null;
}
