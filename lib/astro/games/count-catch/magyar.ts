import { CountCatchRound } from "../../../../components/astro-games/views/m3/CountCatchView";

export const rounds: CountCatchRound[] = [
  {
    id: "hu-cc-1",
    taskDescription: {
      en: "How many words are in: Én olvasok egy könyvet.",
      de: "Wie viele Wörter sind in: Én olvasok egy könyvet.",
      hu: "Hány szó van ebben: Én olvasok egy könyvet.",
      ro: "Câte cuvinte sunt în: Én olvasok egy könyvet."
    },
    itemsToCount: [
      { id: "i1", emoji: "🟦", x: 18, y: 35 },
      { id: "i2", emoji: "🟦", x: 38, y: 55 },
      { id: "i3", emoji: "🟦", x: 62, y: 35 },
      { id: "i4", emoji: "🟦", x: 82, y: 55 }
    ],
    options: [
      { id: "o1", number: 3, isCorrect: false },
      { id: "o2", number: 4, isCorrect: true },
      { id: "o3", number: 5, isCorrect: false },
      { id: "o4", number: 6, isCorrect: false }
    ]
  },
  {
    id: "hu-cc-2",
    taskDescription: {
      en: "Count words: A piros macska most alszik.",
      de: "Zähle Wörter: A piros macska most alszik.",
      hu: "Számold meg a szavakat: A piros macska most alszik.",
      ro: "Numără cuvintele: A piros macska most alszik."
    },
    itemsToCount: [
      { id: "i1", emoji: "🟩", x: 14, y: 30 },
      { id: "i2", emoji: "🟩", x: 30, y: 55 },
      { id: "i3", emoji: "🟩", x: 48, y: 35 },
      { id: "i4", emoji: "🟩", x: 66, y: 58 },
      { id: "i5", emoji: "🟩", x: 84, y: 35 }
    ],
    options: [
      { id: "o1", number: 4, isCorrect: false },
      { id: "o2", number: 5, isCorrect: true },
      { id: "o3", number: 6, isCorrect: false },
      { id: "o4", number: 7, isCorrect: false }
    ]
  },
  {
    id: "hu-cc-3",
    taskDescription: {
      en: "Count words: Mi ma a nagy parkban játszunk.",
      de: "Zähle Wörter: Mi ma a nagy parkban játszunk.",
      hu: "Számold meg a szavakat: Mi ma a nagy parkban játszunk.",
      ro: "Numără cuvintele: Mi ma a nagy parkban játszunk."
    },
    itemsToCount: [
      { id: "i1", emoji: "🟨", x: 10, y: 30 },
      { id: "i2", emoji: "🟨", x: 24, y: 52 },
      { id: "i3", emoji: "🟨", x: 38, y: 30 },
      { id: "i4", emoji: "🟨", x: 52, y: 52 },
      { id: "i5", emoji: "🟨", x: 66, y: 30 },
      { id: "i6", emoji: "🟨", x: 80, y: 52 }
    ],
    options: [
      { id: "o1", number: 4, isCorrect: false },
      { id: "o2", number: 5, isCorrect: false },
      { id: "o3", number: 6, isCorrect: true },
      { id: "o4", number: 7, isCorrect: false }
    ]
  }
];