import { ShapeSpotterRound } from "../../../../components/astro-games/views/m2/ShapeSpotterView";

// English subject: kids learning English.
export const rounds: ShapeSpotterRound[] = [
  {
    id: "en-ss-1",
    taskDescription: {
      en: "Find all circles: words that start with 'S'.",
      de: "Finde alle Kreise: Wörter, die mit 'S' beginnen.",
      hu: "Keresd meg a köröket: 'S' betűvel kezdődő szavak.",
      ro: "Găsește toate cercurile: cuvinte care încep cu 'S'."
    },
    shapes: [
      { id: "s1", type: "circle", colorHex: "#3b82f6", isTarget: true }, // Sun
      { id: "s2", type: "square", colorHex: "#ef4444", isTarget: false },
      { id: "s3", type: "triangle", colorHex: "#22c55e", isTarget: false },
      { id: "s4", type: "circle", colorHex: "#3b82f6", isTarget: true }, // Star
      { id: "s5", type: "star", colorHex: "#f59e0b", isTarget: false },
      { id: "s6", type: "hexagon", colorHex: "#8b5cf6", isTarget: false },
      { id: "s7", type: "circle", colorHex: "#3b82f6", isTarget: true }, // School
      { id: "s8", type: "square", colorHex: "#14b8a6", isTarget: false },
      { id: "s9", type: "circle", colorHex: "#3b82f6", isTarget: true }  // Snake
    ]
  },
  {
    id: "en-ss-2",
    taskDescription: {
      en: "Find all stars: animal names.",
      de: "Finde alle Sterne: Tiernamen.",
      hu: "Keresd meg a csillagokat: állatnevek.",
      ro: "Găsește toate stelele: nume de animale."
    },
    shapes: [
      { id: "s1", type: "star", colorHex: "#eab308", isTarget: true }, // Dog
      { id: "s2", type: "circle", colorHex: "#ef4444", isTarget: false },
      { id: "s3", type: "star", colorHex: "#eab308", isTarget: true }, // Cat
      { id: "s4", type: "triangle", colorHex: "#22c55e", isTarget: false },
      { id: "s5", type: "square", colorHex: "#8b5cf6", isTarget: false },
      { id: "s6", type: "star", colorHex: "#eab308", isTarget: true }, // Bird
      { id: "s7", type: "hexagon", colorHex: "#06b6d4", isTarget: false },
      { id: "s8", type: "star", colorHex: "#eab308", isTarget: true }, // Lion
      { id: "s9", type: "circle", colorHex: "#84cc16", isTarget: false },
      { id: "s10", type: "star", colorHex: "#eab308", isTarget: true } // Tiger
    ]
  },
  {
    id: "en-ss-3",
    taskDescription: {
      en: "Find all triangles: verbs (actions).",
      de: "Finde alle Dreiecke: Verben (Aktionen).",
      hu: "Keresd meg a háromszögeket: igék (cselekvések).",
      ro: "Găsește toate triunghiurile: verbe (acțiuni)."
    },
    shapes: [
      { id: "s1", type: "triangle", colorHex: "#22c55e", isTarget: true }, // Jump
      { id: "s2", type: "square", colorHex: "#64748b", isTarget: false },
      { id: "s3", type: "circle", colorHex: "#ef4444", isTarget: false },
      { id: "s4", type: "triangle", colorHex: "#22c55e", isTarget: true }, // Read
      { id: "s5", type: "hexagon", colorHex: "#f59e0b", isTarget: false },
      { id: "s6", type: "triangle", colorHex: "#22c55e", isTarget: true }, // Write
      { id: "s7", type: "star", colorHex: "#3b82f6", isTarget: false },
      { id: "s8", type: "square", colorHex: "#a855f7", isTarget: false },
      { id: "s9", type: "triangle", colorHex: "#22c55e", isTarget: true }, // Play
      { id: "s10", type: "circle", colorHex: "#10b981", isTarget: false },
      { id: "s11", type: "triangle", colorHex: "#22c55e", isTarget: true }  // Sing
    ]
  }
];
