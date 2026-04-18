import { ShapeSpotterRound } from "../../../../components/astro-games/views/m2/ShapeSpotterView";

export const rounds: ShapeSpotterRound[] = [
  {
    id: "en-ss-1",
    taskDescription: {
      en: "Find all circles: words with long 'ie' sound in German.",
      de: "Finde alle Kreise: Wörter mit langem 'ie'-Laut.",
      hu: "Keresd meg a köröket: hosszú 'ie' hangú szavak.",
      ro: "Găsește toate cercurile: cuvinte cu sunet lung 'ie'."
    },
    shapes: [
      { id: "s1", type: "circle", colorHex: "#3b82f6", isTarget: true },
      { id: "s2", type: "square", colorHex: "#ef4444", isTarget: false },
      { id: "s3", type: "triangle", colorHex: "#22c55e", isTarget: false },
      { id: "s4", type: "circle", colorHex: "#3b82f6", isTarget: true },
      { id: "s5", type: "star", colorHex: "#f59e0b", isTarget: false },
      { id: "s6", type: "hexagon", colorHex: "#8b5cf6", isTarget: false },
      { id: "s7", type: "circle", colorHex: "#3b82f6", isTarget: true },
      { id: "s8", type: "square", colorHex: "#14b8a6", isTarget: false },
      { id: "s9", type: "circle", colorHex: "#3b82f6", isTarget: true }
    ]
  },
  {
    id: "en-ss-2",
    taskDescription: {
      en: "Find all stars: words that start with 'sch'.",
      de: "Finde alle Sterne: Wörter mit 'sch' am Anfang.",
      hu: "Keresd meg a csillagokat: 'sch' kezdetű szavak.",
      ro: "Găsește toate stelele: cuvinte care încep cu 'sch'."
    },
    shapes: [
      { id: "s1", type: "star", colorHex: "#eab308", isTarget: true },
      { id: "s2", type: "circle", colorHex: "#ef4444", isTarget: false },
      { id: "s3", type: "star", colorHex: "#eab308", isTarget: true },
      { id: "s4", type: "triangle", colorHex: "#22c55e", isTarget: false },
      { id: "s5", type: "square", colorHex: "#8b5cf6", isTarget: false },
      { id: "s6", type: "star", colorHex: "#eab308", isTarget: true },
      { id: "s7", type: "hexagon", colorHex: "#06b6d4", isTarget: false },
      { id: "s8", type: "star", colorHex: "#eab308", isTarget: true },
      { id: "s9", type: "circle", colorHex: "#84cc16", isTarget: false },
      { id: "s10", type: "star", colorHex: "#eab308", isTarget: true }
    ]
  },
  {
    id: "en-ss-3",
    taskDescription: {
      en: "Find all triangles: words with ending '-en' (verb infinitives).",
      de: "Finde alle Dreiecke: Wörter mit Endung '-en' (Infinitiv).",
      hu: "Keresd meg a háromszögeket: '-en' végű szavak (főnévi igenév).",
      ro: "Găsește toate triunghiurile: cuvinte cu terminația '-en' (infinitiv)."
    },
    shapes: [
      { id: "s1", type: "triangle", colorHex: "#22c55e", isTarget: true },
      { id: "s2", type: "square", colorHex: "#64748b", isTarget: false },
      { id: "s3", type: "circle", colorHex: "#ef4444", isTarget: false },
      { id: "s4", type: "triangle", colorHex: "#22c55e", isTarget: true },
      { id: "s5", type: "hexagon", colorHex: "#f59e0b", isTarget: false },
      { id: "s6", type: "triangle", colorHex: "#22c55e", isTarget: true },
      { id: "s7", type: "star", colorHex: "#3b82f6", isTarget: false },
      { id: "s8", type: "square", colorHex: "#a855f7", isTarget: false },
      { id: "s9", type: "triangle", colorHex: "#22c55e", isTarget: true },
      { id: "s10", type: "circle", colorHex: "#10b981", isTarget: false },
      { id: "s11", type: "triangle", colorHex: "#22c55e", isTarget: true },
      { id: "s12", type: "hexagon", colorHex: "#6366f1", isTarget: false }
    ]
  }
];

