import { CountCatchRound } from "../../../../components/astro-games/views/m3/CountCatchView";

export const rounds: CountCatchRound[] = [
  {
    id: "de-cc-1",
    taskDescription: {
      en: "How many apples do you see?",
      de: "Wie viele Äpfel siehst du?",
      hu: "Hány almát látsz?",
      ro: "Câte mere vezi?"
    },
    itemsToCount: [
      { id: "a1", emoji: "🍎", x: 20, y: 30 },
      { id: "a2", emoji: "🍎", x: 55, y: 40 },
      { id: "a3", emoji: "🍎", x: 70, y: 65 },
      { id: "a4", emoji: "🍎", x: 30, y: 70 }
    ],
    options: [
      { id: "o1", number: 3, isCorrect: false },
      { id: "o2", number: 4, isCorrect: true },
      { id: "o3", number: 5, isCorrect: false },
      { id: "o4", number: 6, isCorrect: false }
    ]
  },
  {
    id: "de-cc-2",
    taskDescription: {
      en: "How many cats (Katzen) are there?",
      de: "Wie viele Katzen sind es?",
      hu: "Hány macskát látsz?",
      ro: "Câte pisici sunt?"
    },
    itemsToCount: [
      { id: "c1", emoji: "🐱", x: 25, y: 25 },
      { id: "c2", emoji: "🐱", x: 60, y: 30 },
      { id: "c3", emoji: "🐱", x: 45, y: 60 }
    ],
    options: [
      { id: "o1", number: 2, isCorrect: false },
      { id: "o2", number: 3, isCorrect: true },
      { id: "o3", number: 4, isCorrect: false },
      { id: "o4", number: 5, isCorrect: false }
    ]
  },
  {
    id: "de-cc-3",
    taskDescription: {
      en: "How many stars (Sterne) do you count?",
      de: "Wie viele Sterne zählst du?",
      hu: "Hány csillagot számolsz?",
      ro: "Câte stele numeri?"
    },
    itemsToCount: [
      { id: "s1", emoji: "⭐", x: 15, y: 20 },
      { id: "s2", emoji: "⭐", x: 40, y: 25 },
      { id: "s3", emoji: "⭐", x: 65, y: 30 },
      { id: "s4", emoji: "⭐", x: 25, y: 55 },
      { id: "s5", emoji: "⭐", x: 75, y: 70 }
    ],
    options: [
      { id: "o1", number: 4, isCorrect: false },
      { id: "o2", number: 5, isCorrect: true },
      { id: "o3", number: 6, isCorrect: false },
      { id: "o4", number: 7, isCorrect: false }
    ]
  }
];
