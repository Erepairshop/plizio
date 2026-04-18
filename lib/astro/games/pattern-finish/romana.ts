import { PatternFinishRound } from "../../../../components/astro-games/views/m3/PatternFinishView";

export const rounds: PatternFinishRound[] = [
  {
    id: "ro-pf-1",
    taskDescription: { en: "Finish the pattern", de: "Setze das Muster fort", hu: "Folytasd a mintát", ro: "Continuă modelul" },
    pattern: [
      { en: "One", de: "Eins", hu: "Egy", ro: "Unu" },
      { en: "Two", de: "Zwei", hu: "Kettő", ro: "Doi" },
      { en: "?", de: "?", hu: "?", ro: "?" }
    ],
    options: [
      { id: "o1", text: { en: "Three", de: "Drei", hu: "Három", ro: "Trei" }, isCorrect: true },
      { id: "o2", text: { en: "Four", de: "Vier", hu: "Négy", ro: "Patru" }, isCorrect: false }
    ]
  }
];
