import { CountCatchRound } from "../../../../components/astro-games/views/m3/CountCatchView";

// English subject: kids learning English.
export const rounds: CountCatchRound[] = [
  {
    id: "en-cc-1",
    taskDescription: {
      en: "How many words are in this sentence: 'I love learning English.'",
      de: "Wie viele Wörter hat dieser Satz: 'I love learning English.'",
      hu: "Hány szó van ebben a mondatban: 'I love learning English.'",
      ro: "Câte cuvinte are propoziția: 'I love learning English.'"
    },
    itemsToCount: [
      { id: "i1", emoji: "🟦", x: 20, y: 35 },
      { id: "i2", emoji: "🟦", x: 42, y: 50 },
      { id: "i3", emoji: "🟦", x: 64, y: 35 },
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
    id: "en-cc-2",
    taskDescription: {
      en: "How many words are in: 'The big red dog runs.'",
      de: "Wie viele Wörter sind in: 'The big red dog runs.'",
      hu: "Hány szó van ebben: 'The big red dog runs.'",
      ro: "Câte cuvinte sunt în: 'The big red dog runs.'"
    },
    itemsToCount: [
      { id: "i1", emoji: "🟩", x: 15, y: 30 },
      { id: "i2", emoji: "🟩", x: 35, y: 55 },
      { id: "i3", emoji: "🟩", x: 50, y: 35 },
      { id: "i4", emoji: "🟩", x: 70, y: 60 },
      { id: "i5", emoji: "🟩", x: 85, y: 35 }
    ],
    options: [
      { id: "o1", number: 4, isCorrect: false },
      { id: "o2", number: 5, isCorrect: true },
      { id: "o3", number: 6, isCorrect: false },
      { id: "o4", number: 7, isCorrect: false }
    ]
  },
  {
    id: "en-cc-3",
    taskDescription: {
      en: "Count the words: 'Where is my blue school bag?'",
      de: "Zähle die Wörter: 'Where is my blue school bag?'",
      hu: "Számold meg a szavakat: 'Where is my blue school bag?'",
      ro: "Numără cuvintele: 'Where is my blue school bag?'"
    },
    itemsToCount: [
      { id: "i1", emoji: "🟨", x: 12, y: 30 },
      { id: "i2", emoji: "🟨", x: 25, y: 50 },
      { id: "i3", emoji: "🟨", x: 38, y: 28 },
      { id: "i4", emoji: "🟨", x: 52, y: 52 },
      { id: "i5", emoji: "🟨", x: 66, y: 30 },
      { id: "i6", emoji: "🟨", x: 79, y: 52 }
    ],
    options: [
      { id: "o1", number: 5, isCorrect: false },
      { id: "o2", number: 6, isCorrect: true },
      { id: "o3", number: 7, isCorrect: false },
      { id: "o4", number: 8, isCorrect: false }
    ]
  }
];
