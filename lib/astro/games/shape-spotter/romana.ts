import { ShapeSpotterRound } from "../../../../components/astro-games/views/m2/ShapeSpotterView";

export const rounds: ShapeSpotterRound[] = [
  {
    id: "ro-ss-1",
    taskDescription: { en: "Find circles", de: "Finde Kreise", hu: "Keresd a köröket", ro: "Găsește cercurile" },
    shapes: [
      { id: "s1", type: "circle", colorHex: "#ff0000", isTarget: true },
      { id: "s2", type: "square", colorHex: "#00ff00", isTarget: false },
      { id: "s3", type: "circle", colorHex: "#0000ff", isTarget: true }
    ]
  }
];
