import { ShapeSpotterRound } from "../../../../components/astro-games/views/m2/ShapeSpotterView";

export const rounds: ShapeSpotterRound[] = [
  {
    id: "math-ss-1",
    taskDescription: {
      en: "Find all the circles!",
      de: "Finde alle Kreise!",
      hu: "Keresd meg az összes kört!",
      ro: "Găsește toate cercurile!"
    },
    shapes: [
      { id: "s1", type: "circle", colorHex: "#3b82f6", isTarget: true },
      { id: "s2", type: "square", colorHex: "#22c55e", isTarget: false },
      { id: "s3", type: "triangle", colorHex: "#eab308", isTarget: false },
      { id: "s4", type: "circle", colorHex: "#ef4444", isTarget: true },
      { id: "s5", type: "star", colorHex: "#ef4444", isTarget: false },
      { id: "s6", type: "circle", colorHex: "#8b5cf6", isTarget: true },
      { id: "s7", type: "hexagon", colorHex: "#8b5cf6", isTarget: false },
      { id: "s8", type: "square", colorHex: "#eab308", isTarget: false },
      { id: "s9", type: "circle", colorHex: "#10b981", isTarget: true }
    ]
  },
  {
    id: "math-ss-2",
    taskDescription: {
      en: "Find all the squares!",
      de: "Finde alle Quadrate!",
      hu: "Keresd meg az összes négyzetet!",
      ro: "Găsește toate pătratele!"
    },
    shapes: [
      { id: "s1", type: "square", colorHex: "#eab308", isTarget: true },
      { id: "s2", type: "circle", colorHex: "#ef4444", isTarget: false },
      { id: "s3", type: "square", colorHex: "#3b82f6", isTarget: true },
      { id: "s4", type: "triangle", colorHex: "#22c55e", isTarget: false },
      { id: "s5", type: "square", colorHex: "#ef4444", isTarget: true },
      { id: "s6", type: "hexagon", colorHex: "#3b82f6", isTarget: false },
      { id: "s7", type: "square", colorHex: "#f97316", isTarget: true },
      { id: "s8", type: "star", colorHex: "#eab308", isTarget: false },
      { id: "s9", type: "circle", colorHex: "#8b5cf6", isTarget: false },
      { id: "s10", type: "square", colorHex: "#8b5cf6", isTarget: true },
      { id: "s11", type: "triangle", colorHex: "#a855f7", isTarget: false },
      { id: "s12", type: "square", colorHex: "#14b8a6", isTarget: true }
    ]
  },
  {
    id: "math-ss-3",
    taskDescription: {
      en: "Find all the triangles!",
      de: "Finde alle Dreiecke!",
      hu: "Keresd meg az összes háromszöget!",
      ro: "Găsește toate triunghiurile!"
    },
    shapes: [
      { id: "s1", type: "triangle", colorHex: "#22c55e", isTarget: true },
      { id: "s2", type: "square", colorHex: "#64748b", isTarget: false },
      { id: "s3", type: "circle", colorHex: "#ef4444", isTarget: false },
      { id: "s4", type: "triangle", colorHex: "#3b82f6", isTarget: true },
      { id: "s5", type: "hexagon", colorHex: "#f59e0b", isTarget: false },
      { id: "s6", type: "triangle", colorHex: "#ef4444", isTarget: true },
      { id: "s7", type: "star", colorHex: "#3b82f6", isTarget: false },
      { id: "s8", type: "square", colorHex: "#8b5cf6", isTarget: false },
      { id: "s9", type: "triangle", colorHex: "#eab308", isTarget: true },
      { id: "s10", type: "circle", colorHex: "#10b981", isTarget: false },
      { id: "s11", type: "triangle", colorHex: "#a855f7", isTarget: true },
      { id: "s12", type: "hexagon", colorHex: "#6366f1", isTarget: false }
    ]
  }
];
