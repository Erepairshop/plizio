import { CountCatchRound } from "../../../../components/astro-games/views/m3/CountCatchView";

export const rounds: CountCatchRound[] = [
  {
    id: "math-cc-1",
    taskDescription: {
      de: "Zähle die Äpfel!",
      hu: "Számold meg az almákat!",
      en: "Count the apples!",
      ro: "Numără merele!"
    },
    itemsToCount: [
      { id: "i1", emoji: "🍎", x: 20, y: 30 },
      { id: "i2", emoji: "🍎", x: 70, y: 40 },
      { id: "i3", emoji: "🍎", x: 45, y: 60 },
      { id: "i4", emoji: "🍎", x: 80, y: 70 },
      { id: "i5", emoji: "🍎", x: 30, y: 80 }
    ],
    options: [
      { id: "o1", number: 4, isCorrect: false },
      { id: "o2", number: 5, isCorrect: true },
      { id: "o3", number: 6, isCorrect: false },
      { id: "o4", number: 7, isCorrect: false }
    ]
  },
  {
    id: "math-cc-2",
    taskDescription: {
      de: "Wie viele Sterne siehst du?",
      hu: "Hány csillagot látsz?",
      en: "How many stars do you see?",
      ro: "Câte stele vezi?"
    },
    itemsToCount: [
      { id: "i1", emoji: "⭐", x: 15, y: 25 },
      { id: "i2", emoji: "⭐", x: 85, y: 30 },
      { id: "i3", emoji: "⭐", x: 50, y: 55 },
      { id: "i4", emoji: "⭐", x: 30, y: 70 },
      { id: "i5", emoji: "⭐", x: 65, y: 80 },
      { id: "i6", emoji: "⭐", x: 40, y: 20 },
      { id: "i7", emoji: "⭐", x: 75, y: 50 }
    ],
    options: [
      { id: "o1", number: 6, isCorrect: false },
      { id: "o2", number: 7, isCorrect: true },
      { id: "o3", number: 8, isCorrect: false },
      { id: "o4", number: 9, isCorrect: false }
    ]
  },
  {
    id: "math-cc-3",
    taskDescription: {
      de: "Zähle die Bienen!",
      hu: "Számold meg a méheket!",
      en: "Count the bees!",
      ro: "Numără albinele!"
    },
    itemsToCount: [
      { id: "i1", emoji: "🐝", x: 25, y: 20 },
      { id: "i2", emoji: "🐝", x: 45, y: 35 },
      { id: "i3", emoji: "🐝", x: 65, y: 45 }
    ],
    options: [
      { id: "o1", number: 2, isCorrect: false },
      { id: "o2", number: 3, isCorrect: true },
      { id: "o3", number: 4, isCorrect: false },
      { id: "o4", number: 5, isCorrect: false }
    ]
  },
  {
    id: "math-cc-4",
    taskDescription: {
      de: "Wie viele Blumen sind da?",
      hu: "Hány virág van ott?",
      en: "How many flowers are there?",
      ro: "Câte flori sunt acolo?"
    },
    itemsToCount: [
      { id: "i1", emoji: "🌸", x: 10, y: 15 },
      { id: "i2", emoji: "🌸", x: 30, y: 50 },
      { id: "i3", emoji: "🌸", x: 50, y: 20 },
      { id: "i4", emoji: "🌸", x: 70, y: 60 },
      { id: "i5", emoji: "🌸", x: 90, y: 30 },
      { id: "i6", emoji: "🌸", x: 20, y: 80 }
    ],
    options: [
      { id: "o1", number: 5, isCorrect: false },
      { id: "o2", number: 6, isCorrect: true },
      { id: "o3", number: 7, isCorrect: false },
      { id: "o4", number: 8, isCorrect: false }
    ]
  }
];
