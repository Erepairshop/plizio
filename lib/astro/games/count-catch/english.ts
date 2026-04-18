import { CountCatchRound } from "../../../../components/astro-games/views/m3/CountCatchView";

export const rounds: CountCatchRound[] = [
  {
    id: "en-cc-1",
    taskDescription: {
      en: "How many words are in this sentence: 'Ich lerne heute Deutsch.'",
      de: "Wie viele Wörter hat dieser Satz: 'Ich lerne heute Deutsch.'",
      hu: "Hány szó van ebben a mondatban: 'Ich lerne heute Deutsch.'",
      ro: "Câte cuvinte are propoziția: 'Ich lerne heute Deutsch.'"
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
      en: "How many words are in: 'Der kleine Hund schläft jetzt.'",
      de: "Wie viele Wörter sind in: 'Der kleine Hund schläft jetzt.'",
      hu: "Hány szó van ebben: 'Der kleine Hund schläft jetzt.'",
      ro: "Câte cuvinte sunt în: 'Der kleine Hund schläft jetzt.'"
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
      en: "Count the words: 'Wir gehen am Samstag in die Stadt.'",
      de: "Zähle die Wörter: 'Wir gehen am Samstag in die Stadt.'",
      hu: "Számold meg a szavakat: 'Wir gehen am Samstag in die Stadt.'",
      ro: "Numără cuvintele: 'Wir gehen am Samstag in die Stadt.'"
    },
    itemsToCount: [
      { id: "i1", emoji: "🟨", x: 12, y: 30 },
      { id: "i2", emoji: "🟨", x: 25, y: 50 },
      { id: "i3", emoji: "🟨", x: 38, y: 28 },
      { id: "i4", emoji: "🟨", x: 52, y: 52 },
      { id: "i5", emoji: "🟨", x: 66, y: 30 },
      { id: "i6", emoji: "🟨", x: 79, y: 52 },
      { id: "i7", emoji: "🟨", x: 90, y: 30 }
    ],
    options: [
      { id: "o1", number: 6, isCorrect: false },
      { id: "o2", number: 7, isCorrect: true },
      { id: "o3", number: 8, isCorrect: false },
      { id: "o4", number: 9, isCorrect: false }
    ]
  }
];

