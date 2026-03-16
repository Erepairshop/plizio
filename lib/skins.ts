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
  // ── New skins ─────────────────────────────────────────────────
  {
    id: "sunset",
    icon: "🌅",
    price: 14,
    bodyColor: "#FF8C42",
    headColor: "#FFAA55",
    limbColor: "#CC6622",
    emissive: "#FF5500",
    emissiveIntensity: 0.5,
    shoeColor: "#331100",
    particle: "#FF6600",
  },
  {
    id: "midnight",
    icon: "🌙",
    price: 16,
    bodyColor: "#1A1A4A",
    headColor: "#252566",
    limbColor: "#0D0D33",
    emissive: "#4466FF",
    emissiveIntensity: 0.6,
    shoeColor: "#000011",
    particle: "#3344CC",
  },
  {
    id: "coral",
    icon: "🪸",
    price: 12,
    bodyColor: "#FF6B6B",
    headColor: "#FF8C8C",
    limbColor: "#CC4444",
    emissive: "#FF4444",
    emissiveIntensity: 0.4,
    shoeColor: "#441111",
    particle: "#FF6060",
  },
  {
    id: "mint",
    icon: "🌱",
    price: 11,
    bodyColor: "#50C878",
    headColor: "#7DEBB5",
    limbColor: "#2D9655",
    emissive: "#00FF88",
    emissiveIntensity: 0.35,
    shoeColor: "#0A2A15",
    particle: "#44FF99",
  },
  {
    id: "galaxy",
    icon: "🌌",
    price: 28,
    bodyColor: "#0A0520",
    headColor: "#150A35",
    limbColor: "#060310",
    emissive: "#7B2FFF",
    emissiveIntensity: 0.85,
    shoeColor: "#000000",
    particle: "#9955FF",
  },
  {
    id: "bronze",
    icon: "🥉",
    price: 13,
    bodyColor: "#CD7F32",
    headColor: "#DA9045",
    limbColor: "#A05A20",
    emissive: "#FF9944",
    emissiveIntensity: 0.35,
    shoeColor: "#3A1800",
    particle: "#CC8833",
  },
  {
    id: "plasma",
    icon: "⚛️",
    price: 32,
    bodyColor: "#6600CC",
    headColor: "#8822FF",
    limbColor: "#440088",
    emissive: "#FF00FF",
    emissiveIntensity: 0.95,
    shoeColor: "#110022",
    particle: "#CC00FF",
  },
  {
    id: "storm",
    icon: "⛈️",
    price: 18,
    bodyColor: "#3A4A7A",
    headColor: "#4A5A8A",
    limbColor: "#242F55",
    emissive: "#88AAFF",
    emissiveIntensity: 0.55,
    shoeColor: "#0A0F22",
    particle: "#6688FF",
  },
  {
    id: "cherry",
    icon: "🍒",
    price: 12,
    bodyColor: "#CC1144",
    headColor: "#EE2255",
    limbColor: "#990033",
    emissive: "#FF3366",
    emissiveIntensity: 0.45,
    shoeColor: "#330011",
    particle: "#FF2244",
  },
  {
    id: "obsidian",
    icon: "🖤",
    price: 20,
    bodyColor: "#0A0A10",
    headColor: "#121220",
    limbColor: "#050508",
    emissive: "#2200AA",
    emissiveIntensity: 0.55,
    shoeColor: "#000000",
    particle: "#3300CC",
  },
  {
    id: "aurora",
    icon: "🌠",
    price: 38,
    bodyColor: "#003322",
    headColor: "#004433",
    limbColor: "#001A11",
    emissive: "#00FFCC",
    emissiveIntensity: 0.9,
    shoeColor: "#000A07",
    particle: "#00FFAA",
  },
  {
    id: "neon_yellow",
    icon: "💛",
    price: 14,
    bodyColor: "#CCCC00",
    headColor: "#FFFF00",
    limbColor: "#999900",
    emissive: "#FFFF00",
    emissiveIntensity: 0.65,
    shoeColor: "#333300",
    particle: "#EEEE00",
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
