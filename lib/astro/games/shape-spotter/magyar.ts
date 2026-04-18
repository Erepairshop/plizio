import { ShapeSpotterRound } from "../../../../components/astro-games/views/m2/ShapeSpotterView";

export const rounds: ShapeSpotterRound[] = [
  {
    id: "hu-ss-1",
    taskDescription: {
      en: "Find all circles (words with article DER).",
      de: "Finde alle Kreise (Worter mit Artikel DER).",
      hu: "Keresd meg a koroket (DER nevelos szavak).",
      ro: "Gaseste cercurile (cuvinte cu articolul DER)."
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
    id: "hu-ss-2",
    taskDescription: {
      en: "Find all stars (words with article DIE).",
      de: "Finde alle Sterne (Worter mit Artikel DIE).",
      hu: "Keresd meg a csillagokat (DIE nevelos szavak).",
      ro: "Gaseste stelele (cuvinte cu articolul DIE)."
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
      { id: "s10", type: "star", colorHex: "#eab308", isTarget: true }
    ]
  },
  {
    id: "hu-ss-3",
    taskDescription: {
      en: "Find all triangles (words with article DAS).",
      de: "Finde alle Dreiecke (Worter mit Artikel DAS).",
      hu: "Keresd meg a haromszogeket (DAS nevelos szavak).",
      ro: "Gaseste triunghiurile (cuvinte cu articolul DAS)."
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
      { id: "s9", type: "triangle", colorHex: "#22c55e", isTarget: true }
    ]
  }
];
