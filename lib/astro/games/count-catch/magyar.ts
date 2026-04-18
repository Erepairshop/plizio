import { CountCatchRound } from "../../../../components/astro-games/views/m3/CountCatchView";

export const rounds: CountCatchRound[] = [
  {
    id: "hu-cc-1",
    taskDescription: {
      en: "How many words are in: Ich lese ein Buch.",
      de: "Wie viele Worter sind in: Ich lese ein Buch.",
      hu: "Hany szo van ebben: Ich lese ein Buch.",
      ro: "Cate cuvinte sunt in: Ich lese ein Buch."
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
      en: "Count words: Die rote Katze schlaft jetzt.",
      de: "Zahle Worter: Die rote Katze schlaft jetzt.",
      hu: "Szamold meg a szavakat: Die rote Katze schlaft jetzt.",
      ro: "Numara cuvintele: Die rote Katze schlaft jetzt."
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
      en: "Count words: Wir spielen heute im Park.",
      de: "Zahle Worter: Wir spielen heute im Park.",
      hu: "Szamold meg a szavakat: Wir spielen heute im Park.",
      ro: "Numara cuvintele: Wir spielen heute im Park."
    },
    itemsToCount: [
      { id: "i1", emoji: "🟨", x: 10, y: 30 },
      { id: "i2", emoji: "🟨", x: 24, y: 52 },
      { id: "i3", emoji: "🟨", x: 38, y: 30 },
      { id: "i4", emoji: "🟨", x: 52, y: 52 },
      { id: "i5", emoji: "🟨", x: 66, y: 30 }
    ],
    options: [
      { id: "o1", number: 4, isCorrect: false },
      { id: "o2", number: 5, isCorrect: true },
      { id: "o3", number: 6, isCorrect: false },
      { id: "o4", number: 7, isCorrect: false }
    ]
  }
];
