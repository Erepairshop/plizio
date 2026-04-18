import { CountCatchRound } from "../../../../components/astro-games/views/m3/CountCatchView";

export const countCatchSachkunde: CountCatchRound[] = [
  {
    id: "cc-1",
    taskDescription: {
      de: "Wie viele Laubbäume siehst du im Wald?",
      hu: "Hány lombhullató fát látsz az erdőben?",
      en: "How many deciduous trees do you see in the forest?",
      ro: "Câți copaci de foioase vezi în pădure?"
    },
    itemsToCount: [
      { id: "i1", emoji: "🌳", x: 20, y: 30 },
      { id: "i2", emoji: "🌳", x: 70, y: 40 },
      { id: "i3", emoji: "🌳", x: 45, y: 60 },
      { id: "i4", emoji: "🌳", x: 80, y: 70 }
    ],
    options: [
      { id: "o1", number: 3, isCorrect: false },
      { id: "o2", number: 4, isCorrect: true },
      { id: "o3", number: 5, isCorrect: false },
      { id: "o4", number: 6, isCorrect: false }
    ]
  },
  {
    id: "cc-2",
    taskDescription: {
      de: "Zähle die Blumen auf der Frühlingswiese!",
      hu: "Számold meg a virágokat a tavaszi réten!",
      en: "Count the flowers on the spring meadow!",
      ro: "Numără florile de pe pajiștea de primăvară!"
    },
    itemsToCount: [
      { id: "i1", emoji: "🌼", x: 15, y: 25 },
      { id: "i2", emoji: "🌼", x: 85, y: 30 },
      { id: "i3", emoji: "🌼", x: 50, y: 55 },
      { id: "i4", emoji: "🌼", x: 30, y: 70 },
      { id: "i5", emoji: "🌼", x: 65, y: 80 }
    ],
    options: [
      { id: "o1", number: 4, isCorrect: false },
      { id: "o2", number: 5, isCorrect: true },
      { id: "o3", number: 6, isCorrect: false },
      { id: "o4", number: 7, isCorrect: false }
    ]
  },
  {
    id: "cc-3",
    taskDescription: {
      de: "Wie viele Regentropfen fallen vom Himmel?",
      hu: "Hány esőcsepp hullik az égből?",
      en: "How many raindrops are falling from the sky?",
      ro: "Câte picături de ploaie cad din cer?"
    },
    itemsToCount: [
      { id: "i1", emoji: "💧", x: 25, y: 20 },
      { id: "i2", emoji: "💧", x: 45, y: 35 },
      { id: "i3", emoji: "💧", x: 65, y: 45 },
      { id: "i4", emoji: "💧", x: 15, y: 65 },
      { id: "i5", emoji: "💧", x: 75, y: 75 },
      { id: "i6", emoji: "💧", x: 85, y: 20 }
    ],
    options: [
      { id: "o1", number: 5, isCorrect: false },
      { id: "o2", number: 6, isCorrect: true },
      { id: "o3", number: 7, isCorrect: false },
      { id: "o4", number: 8, isCorrect: false }
    ]
  },
  {
    id: "cc-4",
    taskDescription: {
      de: "Zähle die Äpfel für die gesunde Jause!",
      hu: "Számold meg az almákat az egészséges tízóraihoz!",
      en: "Count the apples for a healthy snack!",
      ro: "Numără merele pentru o gustare sănătoasă!"
    },
    itemsToCount: [
      { id: "i1", emoji: "🍎", x: 30, y: 30 },
      { id: "i2", emoji: "🍎", x: 50, y: 40 },
      { id: "i3", emoji: "🍎", x: 70, y: 50 }
    ],
    options: [
      { id: "o1", number: 2, isCorrect: false },
      { id: "o2", number: 3, isCorrect: true },
      { id: "o3", number: 4, isCorrect: false },
      { id: "o4", number: 5, isCorrect: false }
    ]
  },
  {
    id: "cc-5",
    taskDescription: {
      de: "Wie viele Bienen sammeln Nektar?",
      hu: "Hány méhecske gyűjt nektárt?",
      en: "How many bees are collecting nectar?",
      ro: "Câte albine adună nectar?"
    },
    itemsToCount: [
      { id: "i1", emoji: "🐝", x: 20, y: 20 },
      { id: "i2", emoji: "🐝", x: 40, y: 60 },
      { id: "i3", emoji: "🐝", x: 60, y: 30 },
      { id: "i4", emoji: "🐝", x: 80, y: 70 },
      { id: "i5", emoji: "🐝", x: 90, y: 40 },
      { id: "i6", emoji: "🐝", x: 10, y: 80 },
      { id: "i7", emoji: "🐝", x: 50, y: 80 }
    ],
    options: [
      { id: "o1", number: 6, isCorrect: false },
      { id: "o2", number: 7, isCorrect: true },
      { id: "o3", number: 8, isCorrect: false },
      { id: "o4", number: 9, isCorrect: false }
    ]
  }
];
