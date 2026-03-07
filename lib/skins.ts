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
    price: 8,
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
    price: 8,
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
    price: 16,
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
    price: 16,
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
    price: 22,
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
    price: 22,
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
    price: 40,
    bodyColor: "#FF69B4",
    headColor: "#FFD700",
    limbColor: "#00CED1",
    emissive: "#FF1493",
    emissiveIntensity: 0.8,
    shoeColor: "#4B0082",
    particle: "#FFD700",
  },
  {
    id: "shadow",
    icon: "🖤",
    price: 12,
    bodyColor: "#1a1a2e",
    headColor: "#16213e",
    limbColor: "#0f0f1a",
    emissive: "#4a00e0",
    emissiveIntensity: 0.5,
    shoeColor: "#000000",
    particle: "#4a00e0",
  },
  {
    id: "ocean",
    icon: "🌊",
    price: 12,
    bodyColor: "#006994",
    headColor: "#0097b2",
    limbColor: "#005577",
    emissive: "#00d4ff",
    emissiveIntensity: 0.4,
    shoeColor: "#003344",
    particle: "#00d4ff",
  },
  {
    id: "toxic",
    icon: "☢️",
    price: 16,
    bodyColor: "#39ff14",
    headColor: "#7fff00",
    limbColor: "#32cd32",
    emissive: "#39ff14",
    emissiveIntensity: 0.6,
    shoeColor: "#1a3300",
    particle: "#39ff14",
  },
  {
    id: "lava",
    icon: "🌋",
    price: 18,
    bodyColor: "#cf1020",
    headColor: "#ff4500",
    limbColor: "#8b0000",
    emissive: "#ff6600",
    emissiveIntensity: 0.7,
    shoeColor: "#330000",
    particle: "#ff4500",
  },
  {
    id: "crystal",
    icon: "💎",
    price: 22,
    bodyColor: "#b9f2ff",
    headColor: "#e0f7fa",
    limbColor: "#80deea",
    emissive: "#00e5ff",
    emissiveIntensity: 0.6,
    shoeColor: "#006064",
    particle: "#00e5ff",
  },
  {
    id: "void",
    icon: "🕳️",
    price: 35,
    bodyColor: "#0d0221",
    headColor: "#1a0533",
    limbColor: "#0a0118",
    emissive: "#bf00ff",
    emissiveIntensity: 0.9,
    shoeColor: "#000000",
    particle: "#bf00ff",
  },
  {
    id: "candy",
    icon: "🍭",
    price: 12,
    bodyColor: "#ff69b4",
    headColor: "#ffb6c1",
    limbColor: "#ff1493",
    emissive: "#ff69b4",
    emissiveIntensity: 0.4,
    shoeColor: "#8b0045",
    particle: "#ff69b4",
  },
  {
    id: "nature",
    icon: "🌿",
    price: 10,
    bodyColor: "#2d5a27",
    headColor: "#3e8e41",
    limbColor: "#1b4332",
    emissive: "#00ff88",
    emissiveIntensity: 0.3,
    shoeColor: "#1a1a0e",
    particle: "#00ff88",
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
