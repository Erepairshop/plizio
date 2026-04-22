import { ShapeSpotterRound } from "../../../../components/astro-games/views/m2/ShapeSpotterView";

export const rounds: ShapeSpotterRound[] = [
  {
    id: "de-ss-1",
    taskDescription: {
      en: "Find all the red circles!",
      de: "Finde alle roten Kreise!",
      hu: "Találd meg az összes piros kört!",
      ro: "Găsește toate cercurile roșii!"
    },
    shapes: [
      { id: "s1", type: "circle", colorHex: "#EF4444", isTarget: true },
      { id: "s2", type: "square", colorHex: "#3B82F6", isTarget: false },
      { id: "s3", type: "circle", colorHex: "#EF4444", isTarget: true },
      { id: "s4", type: "triangle", colorHex: "#10B981", isTarget: false },
      { id: "s5", type: "circle", colorHex: "#EF4444", isTarget: true },
      { id: "s6", type: "star", colorHex: "#F59E0B", isTarget: false }
    ]
  },
  {
    id: "de-ss-2",
    taskDescription: {
      en: "Find all the blue squares!",
      de: "Finde alle blauen Quadrate!",
      hu: "Találd meg az összes kék négyzetet!",
      ro: "Găsește toate pătratele albastre!"
    },
    shapes: [
      { id: "s1", type: "square", colorHex: "#3B82F6", isTarget: true },
      { id: "s2", type: "circle", colorHex: "#EF4444", isTarget: false },
      { id: "s3", type: "square", colorHex: "#3B82F6", isTarget: true },
      { id: "s4", type: "hexagon", colorHex: "#8B5CF6", isTarget: false },
      { id: "s5", type: "square", colorHex: "#3B82F6", isTarget: true },
      { id: "s6", type: "triangle", colorHex: "#10B981", isTarget: false }
    ]
  },
  {
    id: "de-ss-3",
    taskDescription: {
      en: "Find all the yellow stars!",
      de: "Finde alle gelben Sterne!",
      hu: "Találd meg az összes sárga csillagot!",
      ro: "Găsește toate stelele galbene!"
    },
    shapes: [
      { id: "s1", type: "star", colorHex: "#F59E0B", isTarget: true },
      { id: "s2", type: "triangle", colorHex: "#10B981", isTarget: false },
      { id: "s3", type: "star", colorHex: "#F59E0B", isTarget: true },
      { id: "s4", type: "circle", colorHex: "#EF4444", isTarget: false },
      { id: "s5", type: "star", colorHex: "#F59E0B", isTarget: true },
      { id: "s6", type: "square", colorHex: "#3B82F6", isTarget: false }
    ]
  }
];
