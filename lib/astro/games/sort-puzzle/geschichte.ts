import { SortPuzzleRound } from "../../../../components/astro-games/views/m3/SortPuzzleView";
export const rounds: SortPuzzleRound[] = [
  {
    id: "ges-sp-1",
    taskDescription: { en: "Order the historical periods chronologically.", de: "Ordne die historischen Epochen chronologisch.", hu: "Rendezd a történelmi korszakokat időrendbe.", ro: "Ordonează perioadele istorice cronologic." },
    items: [
      { id: "s1", label: { en: "Antiquity", de: "Antike", hu: "Ókor", ro: "Antichitate" } },
      { id: "s2", label: { en: "Middle Ages", de: "Mittelalter", hu: "Középkor", ro: "Evul Mediu" } },
      { id: "s3", label: { en: "Modern Era", de: "Neuzeit", hu: "Újkor", ro: "Epoca Modernă" } }
    ],
    correctOrder: ["s1", "s2", "s3"]
  }
];
