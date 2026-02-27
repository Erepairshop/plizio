// ─── CHARACTER FACE SYSTEM ───────────────────────────
// Expressions (eyes + mouth combinations)

const OWNED_KEY = "plizio_owned_faces";
const ACTIVE_KEY = "plizio_active_face";

export interface FaceDef {
  id: string;
  name: string;
  icon: string;
  price: number;
  // Eye shape: "dot" | "round" | "angry" | "happy" | "sad" | "star" | "heart" | "x" | "wink"
  eyeType: string;
  eyeColor: string;
  // Mouth shape: "smile" | "grin" | "sad" | "neutral" | "open" | "tongue" | "cat" | "fangs" | "none"
  mouthType: string;
  mouthColor: string;
  // Extras
  blush?: boolean;
  blushColor?: string;
}

export const FACES: FaceDef[] = [
  // ── Basic ──
  {
    id: "default",
    name: "Default",
    icon: "😐",
    price: 0,
    eyeType: "dot",
    eyeColor: "#0A0A1A",
    mouthType: "none",
    mouthColor: "#0A0A1A",
  },
  {
    id: "happy",
    name: "Happy",
    icon: "😊",
    price: 2,
    eyeType: "happy",
    eyeColor: "#0A0A1A",
    mouthType: "smile",
    mouthColor: "#0A0A1A",
    blush: true,
    blushColor: "#FF9999",
  },
  {
    id: "grin",
    name: "Big Grin",
    icon: "😁",
    price: 2,
    eyeType: "happy",
    eyeColor: "#0A0A1A",
    mouthType: "grin",
    mouthColor: "#0A0A1A",
  },
  {
    id: "sad",
    name: "Sad",
    icon: "😢",
    price: 2,
    eyeType: "sad",
    eyeColor: "#0A0A1A",
    mouthType: "sad",
    mouthColor: "#0A0A1A",
  },
  {
    id: "angry",
    name: "Angry",
    icon: "😠",
    price: 3,
    eyeType: "angry",
    eyeColor: "#0A0A1A",
    mouthType: "neutral",
    mouthColor: "#0A0A1A",
  },
  {
    id: "wink",
    name: "Wink",
    icon: "😉",
    price: 3,
    eyeType: "wink",
    eyeColor: "#0A0A1A",
    mouthType: "smile",
    mouthColor: "#0A0A1A",
  },
  {
    id: "surprised",
    name: "Surprised",
    icon: "😮",
    price: 3,
    eyeType: "round",
    eyeColor: "#0A0A1A",
    mouthType: "open",
    mouthColor: "#0A0A1A",
  },
  {
    id: "tongue",
    name: "Tongue Out",
    icon: "😛",
    price: 3,
    eyeType: "happy",
    eyeColor: "#0A0A1A",
    mouthType: "tongue",
    mouthColor: "#FF6B8A",
  },
  // ── Special ──
  {
    id: "cool",
    name: "Cool",
    icon: "😎",
    price: 5,
    eyeType: "dot",
    eyeColor: "#0A0A1A",
    mouthType: "smile",
    mouthColor: "#0A0A1A",
  },
  {
    id: "cat",
    name: "Cat Face",
    icon: "😺",
    price: 5,
    eyeType: "round",
    eyeColor: "#33CC33",
    mouthType: "cat",
    mouthColor: "#0A0A1A",
  },
  {
    id: "robot_face",
    name: "Robot",
    icon: "🤖",
    price: 6,
    eyeType: "round",
    eyeColor: "#00FF00",
    mouthType: "neutral",
    mouthColor: "#00FF00",
  },
  {
    id: "heart_eyes",
    name: "Heart Eyes",
    icon: "😍",
    price: 6,
    eyeType: "heart",
    eyeColor: "#FF1493",
    mouthType: "grin",
    mouthColor: "#0A0A1A",
    blush: true,
    blushColor: "#FF6B8A",
  },
  {
    id: "star_eyes",
    name: "Star Eyes",
    icon: "🤩",
    price: 8,
    eyeType: "star",
    eyeColor: "#FFD700",
    mouthType: "grin",
    mouthColor: "#0A0A1A",
  },
  {
    id: "fangs",
    name: "Vampire",
    icon: "🧛",
    price: 8,
    eyeType: "angry",
    eyeColor: "#CC0000",
    mouthType: "fangs",
    mouthColor: "#CC0000",
  },
  {
    id: "x_eyes",
    name: "K.O.",
    icon: "😵",
    price: 4,
    eyeType: "x",
    eyeColor: "#0A0A1A",
    mouthType: "open",
    mouthColor: "#0A0A1A",
  },
  {
    id: "kawaii",
    name: "Kawaii",
    icon: "🥺",
    price: 5,
    eyeType: "round",
    eyeColor: "#4A2800",
    mouthType: "cat",
    mouthColor: "#FF9999",
    blush: true,
    blushColor: "#FFB3B3",
  },
  {
    id: "demon",
    name: "Demon",
    icon: "👹",
    price: 10,
    eyeType: "angry",
    eyeColor: "#FF0000",
    mouthType: "fangs",
    mouthColor: "#FF4400",
  },
  {
    id: "alien",
    name: "Alien",
    icon: "👽",
    price: 10,
    eyeType: "round",
    eyeColor: "#00FF88",
    mouthType: "neutral",
    mouthColor: "#00FF88",
  },
];

// ─── Functions ───────────────────────────────────────

export function getOwnedFaces(): string[] {
  if (typeof window === "undefined") return ["default"];
  const data = localStorage.getItem(OWNED_KEY);
  const owned = data ? JSON.parse(data) : ["default"];
  if (!owned.includes("default")) owned.unshift("default");
  return owned;
}

export function getActiveFace(): string {
  if (typeof window === "undefined") return "default";
  return localStorage.getItem(ACTIVE_KEY) || "default";
}

export function setActiveFace(id: string): void {
  localStorage.setItem(ACTIVE_KEY, id);
}

export function buyFace(id: string): boolean {
  const owned = getOwnedFaces();
  if (owned.includes(id)) return false;
  const face = FACES.find(f => f.id === id);
  if (!face) return false;
  owned.push(id);
  localStorage.setItem(OWNED_KEY, JSON.stringify(owned));
  return true;
}

export function getFaceDef(id: string): FaceDef {
  return FACES.find(f => f.id === id) || FACES[0];
}
