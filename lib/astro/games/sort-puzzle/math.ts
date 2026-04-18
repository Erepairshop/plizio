import { SortPuzzleRound } from "../../../../components/astro-games/views/m3/SortPuzzleView";

export const rounds: SortPuzzleRound[] = [
  {
    id: "math-sp-1",
    taskDescription: {
      en: "Sort the numbers from smallest to largest.",
      de: "Sortiere die Zahlen von klein nach groß.",
      hu: "Rendezd a számokat a legkisebbtől a legnagyobbig.",
      ro: "Sortează numerele de la cel mai mic la cel mai mare."
    },
    items: [
      { id: "n1", label: { en: "-10", de: "-10", hu: "-10", ro: "-10" } },
      { id: "n2", label: { en: "-2", de: "-2", hu: "-2", ro: "-2" } },
      { id: "n3", label: { en: "0", de: "0", hu: "0", ro: "0" } },
      { id: "n4", label: { en: "5", de: "5", hu: "5", ro: "5" } }
    ],
    correctOrder: ["n1", "n2", "n3", "n4"]
  },
  {
    id: "math-sp-2",
    taskDescription: {
      en: "Sort the fractions from smallest to largest.",
      de: "Sortiere die Brüche von klein nach groß.",
      hu: "Rendezd a törteket a legkisebbtől a legnagyobbig.",
      ro: "Sortează fracțiile de la cel mai mic la cel mai mare."
    },
    items: [
      { id: "f1", label: { en: "1/8", de: "1/8", hu: "1/8", ro: "1/8" } },
      { id: "f2", label: { en: "1/4", de: "1/4", hu: "1/4", ro: "1/4" } },
      { id: "f3", label: { en: "1/2", de: "1/2", hu: "1/2", ro: "1/2" } },
      { id: "f4", label: { en: "3/4", de: "3/4", hu: "3/4", ro: "3/4" } }
    ],
    correctOrder: ["f1", "f2", "f3", "f4"]
  },
  {
    id: "math-sp-3",
    taskDescription: {
      en: "Sort the measurement units from smallest to largest.",
      de: "Sortiere die Maßeinheiten von klein nach groß.",
      hu: "Rendezd a mértékegységeket a legkisebbtől a legnagyobbig.",
      ro: "Sortează unitățile de măsură de la cel mai mic la cel mai mare."
    },
    items: [
      { id: "u1", label: { en: "Millimeter", de: "Millimeter", hu: "Milliméter", ro: "Milimetru" } },
      { id: "u2", label: { en: "Centimeter", de: "Zentimeter", hu: "Centiméter", ro: "Centimetru" } },
      { id: "u3", label: { en: "Decimeter", de: "Dezimeter", hu: "Deciméter", ro: "Decimetru" } },
      { id: "u4", label: { en: "Meter", de: "Meter", hu: "Méter", ro: "Metru" } }
    ],
    correctOrder: ["u1", "u2", "u3", "u4"]
  }
];
