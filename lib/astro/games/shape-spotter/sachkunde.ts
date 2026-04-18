import { ShapeSpotterRound, ShapeItem } from "../../../../components/astro-games/views/m2/ShapeSpotterView";

export const rounds: ShapeSpotterRound[] = [
  {
    id: "sk-ss-1",
    taskDescription: {
      en: "Find all the blue water drops (circles)!",
      de: "Finde alle blauen Wassertropfen (Kreise)!",
      hu: "Keresd meg az összes kék vízcseppet (kört)!",
      ro: "Găsește toate picăturile albastre de apă (cercuri)!"
    },
    shapes: [
      { id: "s1", type: "circle", colorHex: "#3b82f6", isTarget: true },
      { id: "s2", type: "square", colorHex: "#22c55e", isTarget: false },
      { id: "s3", type: "triangle", colorHex: "#eab308", isTarget: false },
      { id: "s4", type: "circle", colorHex: "#3b82f6", isTarget: true },
      { id: "s5", type: "star", colorHex: "#ef4444", isTarget: false },
      { id: "s6", type: "circle", colorHex: "#3b82f6", isTarget: true },
      { id: "s7", type: "hexagon", colorHex: "#8b5cf6", isTarget: false },
      { id: "s8", type: "square", colorHex: "#eab308", isTarget: false },
      { id: "s9", type: "circle", colorHex: "#3b82f6", isTarget: true }
    ]
  },
  {
    id: "sk-ss-2",
    taskDescription: {
      en: "Find all the yellow suns (stars)!",
      de: "Finde alle gelben Sonnen (Sterne)!",
      hu: "Keresd meg az összes sárga napot (csillagot)!",
      ro: "Găsește toți sorii galbeni (stele)!"
    },
    shapes: [
      { id: "s1", type: "star", colorHex: "#eab308", isTarget: true },
      { id: "s2", type: "circle", colorHex: "#ef4444", isTarget: false },
      { id: "s3", type: "star", colorHex: "#eab308", isTarget: true },
      { id: "s4", type: "triangle", colorHex: "#22c55e", isTarget: false },
      { id: "s5", type: "star", colorHex: "#eab308", isTarget: true },
      { id: "s6", type: "hexagon", colorHex: "#3b82f6", isTarget: false },
      { id: "s7", type: "square", colorHex: "#f97316", isTarget: false },
      { id: "s8", type: "star", colorHex: "#eab308", isTarget: true },
      { id: "s9", type: "circle", colorHex: "#8b5cf6", isTarget: false },
      { id: "s10", type: "star", colorHex: "#eab308", isTarget: true },
      { id: "s11", type: "triangle", colorHex: "#a855f7", isTarget: false },
      { id: "s12", type: "square", colorHex: "#14b8a6", isTarget: false }
    ]
  },
  {
    id: "sk-ss-3",
    taskDescription: {
      en: "Find all the green leaves (triangles)!",
      de: "Finde alle grünen Blätter (Dreiecke)!",
      hu: "Keresd meg az összes zöld levelet (háromszöget)!",
      ro: "Găsește toate frunzele verzi (triunghiuri)!"
    },
    shapes: [
      { id: "s1", type: "triangle", colorHex: "#22c55e", isTarget: true },
      { id: "s2", type: "square", colorHex: "#64748b", isTarget: false },
      { id: "s3", type: "circle", colorHex: "#ef4444", isTarget: false },
      { id: "s4", type: "triangle", colorHex: "#22c55e", isTarget: true },
      { id: "s5", type: "hexagon", colorHex: "#f59e0b", isTarget: false },
      { id: "s6", type: "triangle", colorHex: "#22c55e", isTarget: true },
      { id: "s7", type: "star", colorHex: "#3b82f6", isTarget: false },
      { id: "s8", type: "square", colorHex: "#8b5cf6", isTarget: false },
      { id: "s9", type: "triangle", colorHex: "#22c55e", isTarget: true },
      { id: "s10", type: "circle", colorHex: "#10b981", isTarget: false },
      { id: "s11", type: "triangle", colorHex: "#22c55e", isTarget: true },
      { id: "s12", type: "hexagon", colorHex: "#6366f1", isTarget: false }
    ]
  }
];
