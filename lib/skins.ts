// ─── SKY CLIMB SKIN SYSTEM ───────────────────────────

const OWNED_KEY = "plizio_owned_skins";
const ACTIVE_KEY = "plizio_active_skin";

export interface SkinDef {
  id: string;
  icon: string;
  price: number; // 0 = free/default
  bodyColor: string;
  headColor: string;
  limbColor: string;
  emissive: string;
  emissiveIntensity: number;
  shoeColor: string;
  particle?: string; // optional particle color
}

export const SKINS: SkinDef[] = [
  {
    id: "default",
    icon: "🤍",
    price: 0,
    bodyColor: "#ffffff",
    headColor: "#ffffff",
    limbColor: "#cccccc",
    emissive: "#00D4FF",
    emissiveIntensity: 0.3,
    shoeColor: "#222222",
  },
  {
    id: "fire",
    icon: "🔥",
    price: 5,
    bodyColor: "#FF4500",
    headColor: "#FF6347",
    limbColor: "#CC3300",
    emissive: "#FF8C00",
    emissiveIntensity: 0.5,
    shoeColor: "#441100",
    particle: "#FF4500",
  },
  {
    id: "ice",
    icon: "❄️",
    price: 5,
    bodyColor: "#87CEEB",
    headColor: "#B0E0E6",
    limbColor: "#5F9EA0",
    emissive: "#00CED1",
    emissiveIntensity: 0.4,
    shoeColor: "#1a3a4a",
    particle: "#00BFFF",
  },
  {
    id: "gold",
    icon: "👑",
    price: 10,
    bodyColor: "#FFD700",
    headColor: "#FFC125",
    limbColor: "#DAA520",
    emissive: "#FFD700",
    emissiveIntensity: 0.5,
    shoeColor: "#8B6914",
    particle: "#FFD700",
  },
  {
    id: "neon",
    icon: "💜",
    price: 10,
    bodyColor: "#E040FB",
    headColor: "#FF69B4",
    limbColor: "#9400D3",
    emissive: "#E040FB",
    emissiveIntensity: 0.6,
    shoeColor: "#2a0040",
    particle: "#E040FB",
  },
  {
    id: "ghost",
    icon: "👻",
    price: 15,
    bodyColor: "#E8E8FF",
    headColor: "#F0F0FF",
    limbColor: "#D0D0E8",
    emissive: "#9370DB",
    emissiveIntensity: 0.7,
    shoeColor: "#555566",
    particle: "#9370DB",
  },
  {
    id: "robot",
    icon: "🤖",
    price: 15,
    bodyColor: "#808080",
    headColor: "#A0A0A0",
    limbColor: "#606060",
    emissive: "#00FF00",
    emissiveIntensity: 0.4,
    shoeColor: "#333333",
    particle: "#00FF00",
  },
  {
    id: "legendary",
    icon: "🌈",
    price: 25,
    bodyColor: "#FF69B4",
    headColor: "#FFD700",
    limbColor: "#00CED1",
    emissive: "#FF1493",
    emissiveIntensity: 0.8,
    shoeColor: "#4B0082",
    particle: "#FFD700",
  },
];

export function getOwnedSkins(): string[] {
  if (typeof window === "undefined") return ["default"];
  const data = localStorage.getItem(OWNED_KEY);
  const owned = data ? JSON.parse(data) : ["default"];
  if (!owned.includes("default")) owned.unshift("default");
  return owned;
}

export function getActiveSkin(): string {
  if (typeof window === "undefined") return "default";
  return localStorage.getItem(ACTIVE_KEY) || "default";
}

export function setActiveSkin(id: string): void {
  localStorage.setItem(ACTIVE_KEY, id);
}

export function buySkin(id: string): boolean {
  const owned = getOwnedSkins();
  if (owned.includes(id)) return false;
  const skin = SKINS.find((s) => s.id === id);
  if (!skin) return false;
  // Spending is done by the caller (shop page)
  owned.push(id);
  localStorage.setItem(OWNED_KEY, JSON.stringify(owned));
  return true;
}

export function getSkinDef(id: string): SkinDef {
  return SKINS.find((s) => s.id === id) || SKINS[0];
}
