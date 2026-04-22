import { CountCatchRound } from "../../../../components/astro-games/views/m3/CountCatchView";

export const rounds: CountCatchRound[] = [
  {
    id: "ro-cc-1",
    taskDescription: { en: "Count the apples", de: "Zähle die Äpfel", hu: "Számold meg az almákat", ro: "Numără merele" },
    itemsToCount: [
      { id: "i1", emoji: "🍎", x: 20, y: 30 },
      { id: "i2", emoji: "🍎", x: 70, y: 40 },
      { id: "i3", emoji: "🍎", x: 45, y: 60 }
    ],
    options: [
      { id: "o1", number: 2, isCorrect: false },
      { id: "o2", number: 3, isCorrect: true },
      { id: "o3", number: 4, isCorrect: false }
    ]
  }
];
