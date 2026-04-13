// ─── CHARACTER OUTFIT SYSTEM ───────────────────────────
// Tops, Bottoms, Shoes, Capes, Gloves, Glasses

const OWNED_KEY_PREFIX = "plizio_owned_";
const ACTIVE_KEY_PREFIX = "plizio_active_";

// ─── TOPS (Shirts, Jackets, Hoodies) ────────────────
export interface TopDef {
  id: string;
  name: string;
  icon: string;
  price: number;
  color: string;
  accent?: string;
  type: "tshirt" | "hoodie" | "jacket" | "vest" | "armor" | "suit";
}

export const TOPS: TopDef[] = [
  { id: "tshirt_white", name: "White Tee", icon: "👕", price: 0, color: "#ffffff", type: "tshirt" },
  { id: "tshirt_red", name: "Red Tee", icon: "👕", price: 2, color: "#FF3333", type: "tshirt" },
  { id: "tshirt_blue", name: "Blue Tee", icon: "👕", price: 2, color: "#3366FF", type: "tshirt" },
  { id: "tshirt_black", name: "Black Tee", icon: "👕", price: 2, color: "#1a1a1a", type: "tshirt" },
  { id: "tshirt_green", name: "Green Tee", icon: "👕", price: 2, color: "#22AA44", type: "tshirt" },
  { id: "tshirt_pink", name: "Pink Tee", icon: "👕", price: 3, color: "#FF69B4", type: "tshirt" },
  { id: "hoodie_gray", name: "Gray Hoodie", icon: "🧥", price: 4, color: "#555566", accent: "#444455", type: "hoodie" },
  { id: "hoodie_black", name: "Black Hoodie", icon: "🧥", price: 4, color: "#1a1a2e", accent: "#111122", type: "hoodie" },
  { id: "hoodie_red", name: "Red Hoodie", icon: "🧥", price: 5, color: "#CC2222", accent: "#991111", type: "hoodie" },
  { id: "hoodie_neon", name: "Neon Hoodie", icon: "🧥", price: 8, color: "#E040FB", accent: "#9900CC", type: "hoodie" },
  { id: "jacket_leather", name: "Leather Jacket", icon: "🧥", price: 6, color: "#3D2B1F", accent: "#2A1A0F", type: "jacket" },
  { id: "jacket_denim", name: "Denim Jacket", icon: "🧥", price: 5, color: "#4A6FA5", accent: "#3A5F95", type: "jacket" },
  { id: "jacket_bomber", name: "Bomber Jacket", icon: "🧥", price: 7, color: "#2D4A2D", accent: "#1D3A1D", type: "jacket" },
  { id: "vest_gold", name: "Gold Vest", icon: "🦺", price: 8, color: "#FFD700", accent: "#DAA520", type: "vest" },
  { id: "armor_iron", name: "Iron Armor", icon: "🛡️", price: 12, color: "#8A8A8A", accent: "#666666", type: "armor" },
  { id: "armor_diamond", name: "Diamond Armor", icon: "💎", price: 20, color: "#00E5FF", accent: "#00BCD4", type: "armor" },
  { id: "suit_black", name: "Black Suit", icon: "🤵", price: 10, color: "#111111", accent: "#ffffff", type: "suit" },
  { id: "suit_white", name: "White Suit", icon: "🤵", price: 10, color: "#EEEEEE", accent: "#111111", type: "suit" },
];

// ─── BOTTOMS (Pants, Shorts) ─────────────────────────
export interface BottomDef {
  id: string;
  name: string;
  icon: string;
  price: number;
  color: string;
  type: "pants" | "shorts" | "skirt" | "jogger";
}

export const BOTTOMS: BottomDef[] = [
  { id: "pants_default", name: "Basic Pants", icon: "👖", price: 0, color: "#333344", type: "pants" },
  { id: "jeans_blue", name: "Blue Jeans", icon: "👖", price: 3, color: "#3B5998", type: "pants" },
  { id: "jeans_black", name: "Black Jeans", icon: "👖", price: 3, color: "#1a1a1a", type: "pants" },
  { id: "pants_cargo", name: "Cargo Pants", icon: "👖", price: 4, color: "#5C5C3D", type: "pants" },
  { id: "pants_white", name: "White Pants", icon: "👖", price: 3, color: "#E8E8E8", type: "pants" },
  { id: "pants_red", name: "Red Pants", icon: "👖", price: 4, color: "#CC2222", type: "pants" },
  { id: "shorts_black", name: "Black Shorts", icon: "🩳", price: 2, color: "#222222", type: "shorts" },
  { id: "shorts_beach", name: "Beach Shorts", icon: "🩳", price: 3, color: "#FF6B35", type: "shorts" },
  { id: "shorts_sport", name: "Sport Shorts", icon: "🩳", price: 3, color: "#0066FF", type: "shorts" },
  { id: "jogger_gray", name: "Gray Joggers", icon: "👖", price: 4, color: "#666677", type: "jogger" },
  { id: "jogger_neon", name: "Neon Joggers", icon: "👖", price: 6, color: "#39FF14", type: "jogger" },
  { id: "skirt_plaid", name: "Plaid Skirt", icon: "👗", price: 5, color: "#CC3333", type: "skirt" },
];

// ─── SHOES ───────────────────────────────────────────
export interface ShoeDef {
  id: string;
  name: string;
  icon: string;
  price: number;
  color: string;
  sole?: string;
  type: "sneaker" | "boot" | "sandal" | "highTop" | "formal";
}

export const SHOES: ShoeDef[] = [
  { id: "sneaker_default", name: "Basic Sneakers", icon: "👟", price: 0, color: "#333333", sole: "#222222", type: "sneaker" },
  { id: "sneaker_white", name: "White Sneakers", icon: "👟", price: 3, color: "#F0F0F0", sole: "#CCCCCC", type: "sneaker" },
  { id: "sneaker_red", name: "Red Sneakers", icon: "👟", price: 3, color: "#FF2222", sole: "#CC0000", type: "sneaker" },
  { id: "sneaker_blue", name: "Blue Sneakers", icon: "👟", price: 3, color: "#2255FF", sole: "#1144CC", type: "sneaker" },
  { id: "sneaker_neon", name: "Neon Kicks", icon: "👟", price: 6, color: "#39FF14", sole: "#00CC00", type: "sneaker" },
  { id: "sneaker_gold", name: "Gold Kicks", icon: "👟", price: 10, color: "#FFD700", sole: "#DAA520", type: "sneaker" },
  { id: "hightop_black", name: "Black High Tops", icon: "👢", price: 5, color: "#1a1a1a", sole: "#111111", type: "highTop" },
  { id: "hightop_red", name: "Red High Tops", icon: "👢", price: 5, color: "#CC0000", sole: "#990000", type: "highTop" },
  { id: "boot_combat", name: "Combat Boots", icon: "🥾", price: 6, color: "#3D2B1F", sole: "#1a1a0e", type: "boot" },
  { id: "boot_cowboy", name: "Cowboy Boots", icon: "🥾", price: 7, color: "#8B4513", sole: "#5C3010", type: "boot" },
  { id: "sandal_beach", name: "Beach Sandals", icon: "🩴", price: 2, color: "#DEB887", sole: "#C8A06E", type: "sandal" },
  { id: "formal_black", name: "Formal Shoes", icon: "👞", price: 5, color: "#111111", sole: "#000000", type: "formal" },
  { id: "formal_brown", name: "Brown Oxfords", icon: "👞", price: 5, color: "#6B3A2A", sole: "#4A2A1A", type: "formal" },
];

// ─── CAPES ───────────────────────────────────────────
export interface CapeDef {
  id: string;
  name: string;
  icon: string;
  price: number;
  color: string;
  emissive: string;
  emissiveIntensity: number;
}

export const CAPES: CapeDef[] = [
  { id: "cape_red", name: "Red Cape", icon: "🦸", price: 8, color: "#CC0000", emissive: "#FF0000", emissiveIntensity: 0.3 },
  { id: "cape_royal", name: "Royal Cape", icon: "👑", price: 12, color: "#4B0082", emissive: "#9400D3", emissiveIntensity: 0.4 },
  { id: "cape_ice", name: "Ice Cape", icon: "❄️", price: 10, color: "#87CEEB", emissive: "#00CED1", emissiveIntensity: 0.5 },
  { id: "cape_fire", name: "Fire Cape", icon: "🔥", price: 10, color: "#FF4500", emissive: "#FF6600", emissiveIntensity: 0.5 },
  { id: "cape_shadow", name: "Shadow Cape", icon: "🖤", price: 10, color: "#1a1a2e", emissive: "#4a00e0", emissiveIntensity: 0.4 },
  { id: "cape_gold", name: "Gold Cape", icon: "✨", price: 15, color: "#FFD700", emissive: "#FFD700", emissiveIntensity: 0.5 },
  { id: "cape_rainbow", name: "Rainbow Cape", icon: "🌈", price: 20, color: "#FF69B4", emissive: "#FF1493", emissiveIntensity: 0.6 },
  { id: "cape_void", name: "Void Cape", icon: "🕳️", price: 18, color: "#0d0221", emissive: "#bf00ff", emissiveIntensity: 0.8 },
];

// ─── GLASSES ─────────────────────────────────────────
export interface GlassesDef {
  id: string;
  name: string;
  icon: string;
  price: number;
  color: string;
  lensColor: string;
  type: "sunglasses" | "round" | "visor" | "monocle" | "thug";
}

export const GLASSES: GlassesDef[] = [
  { id: "sun_black", name: "Black Shades", icon: "🕶️", price: 3, color: "#111111", lensColor: "#1a1a2e", type: "sunglasses" },
  { id: "sun_gold", name: "Gold Shades", icon: "🕶️", price: 6, color: "#FFD700", lensColor: "#332200", type: "sunglasses" },
  { id: "sun_red", name: "Red Shades", icon: "🕶️", price: 4, color: "#CC0000", lensColor: "#440000", type: "sunglasses" },
  { id: "sun_blue", name: "Blue Shades", icon: "🕶️", price: 4, color: "#0066FF", lensColor: "#001133", type: "sunglasses" },
  { id: "round_wire", name: "Wire Glasses", icon: "👓", price: 3, color: "#C0C0C0", lensColor: "#ffffff20", type: "round" },
  { id: "round_gold", name: "Gold Round", icon: "👓", price: 5, color: "#FFD700", lensColor: "#FFD70020", type: "round" },
  { id: "visor_cyber", name: "Cyber Visor", icon: "🥽", price: 10, color: "#00D4FF", lensColor: "#00D4FF", type: "visor" },
  { id: "visor_red", name: "Red Visor", icon: "🥽", price: 8, color: "#FF0000", lensColor: "#FF0000", type: "visor" },
  { id: "monocle", name: "Monocle", icon: "🧐", price: 6, color: "#FFD700", lensColor: "#ffffff20", type: "monocle" },
  { id: "thug_pixel", name: "Thug Life", icon: "😎", price: 8, color: "#000000", lensColor: "#000000", type: "thug" },
];

// ─── GLOVES ──────────────────────────────────────────
export interface GloveDef {
  id: string;
  name: string;
  icon: string;
  price: number;
  color: string;
}

export const GLOVES: GloveDef[] = [
  { id: "glove_black", name: "Black Gloves", icon: "🧤", price: 3, color: "#1a1a1a" },
  { id: "glove_white", name: "White Gloves", icon: "🧤", price: 3, color: "#F0F0F0" },
  { id: "glove_red", name: "Red Gloves", icon: "🧤", price: 4, color: "#CC0000" },
  { id: "glove_gold", name: "Gold Gloves", icon: "🧤", price: 8, color: "#FFD700" },
  { id: "glove_neon", name: "Neon Gloves", icon: "🧤", price: 6, color: "#39FF14" },
  { id: "glove_boxing", name: "Boxing Gloves", icon: "🥊", price: 5, color: "#CC3333" },
  { id: "glove_mech", name: "Mech Gloves", icon: "🤖", price: 10, color: "#808080" },
  { id: "glove_ice", name: "Ice Gloves", icon: "❄️", price: 7, color: "#87CEEB" },
];

// ─── GENERIC GET/SET FUNCTIONS ───────────────────────

type SlotType = "top" | "bottom" | "shoe" | "cape" | "glasses" | "gloves";

export function getOwned(slot: SlotType): string[] {
  if (typeof window === "undefined") return [];
  const data = localStorage.getItem(OWNED_KEY_PREFIX + slot);
  return data ? JSON.parse(data) : [];
}

export function getActive(slot: SlotType): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(ACTIVE_KEY_PREFIX + slot) || null;
}

export function setActive(slot: SlotType, id: string | null): void {
  if (id === null) {
    localStorage.removeItem(ACTIVE_KEY_PREFIX + slot);
  } else {
    localStorage.setItem(ACTIVE_KEY_PREFIX + slot, id);
  }
}

export function buyItem(slot: SlotType, id: string): boolean {
  const owned = getOwned(slot);
  if (owned.includes(id)) return false;
  owned.push(id);
  localStorage.setItem(OWNED_KEY_PREFIX + slot, JSON.stringify(owned));
  return true;
}

export function getTopDef(id: string): TopDef | null { return TOPS.find(t => t.id === id) || null; }
export function getBottomDef(id: string): BottomDef | null { return BOTTOMS.find(b => b.id === id) || null; }
export function getShoeDef(id: string): ShoeDef | null { return SHOES.find(s => s.id === id) || null; }
export function getCapeDef(id: string): CapeDef | null { return CAPES.find(c => c.id === id) || null; }
export function getGlassesDef(id: string): GlassesDef | null { return GLASSES.find(g => g.id === id) || null; }
export function getGloveDef(id: string): GloveDef | null { return GLOVES.find(g => g.id === id) || null; }
