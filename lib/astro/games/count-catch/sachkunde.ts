import { CountCatchRound } from "../../../../components/astro-games/views/m3/CountCatchView";

export const countCatchSachkunde: CountCatchRound[] = [
  {
    id: "sk-cc-1",
    taskDescription: {
      de: "Wie viele Laubblätter fallen vom Baum?",
      hu: "Hány falevél hullik le a fáról?",
      en: "How many leaves are falling from the tree?",
      ro: "Câte frunze cad din copac?"
    },
    itemsToCount: [
      { id: "i1", emoji: "🍂", x: 20, y: 30 },
      { id: "i2", emoji: "🍂", x: 70, y: 40 },
      { id: "i3", emoji: "🍂", x: 45, y: 60 },
      { id: "i4", emoji: "🍂", x: 80, y: 70 },
      { id: "i5", emoji: "🍂", x: 30, y: 80 }
    ],
    options: [
      { id: "o1", number: 4, isCorrect: false },
      { id: "o2", number: 5, isCorrect: true },
      { id: "o3", number: 6, isCorrect: false },
      { id: "o4", number: 7, isCorrect: false }
    ]
  },
  {
    id: "sk-cc-2",
    taskDescription: {
      de: "Zähle die Regentropfen, die wichtig für die Pflanzen sind!",
      hu: "Számold meg az esőcseppeket, amik fontosak a növényeknek!",
      en: "Count the raindrops that are important for the plants!",
      ro: "Numără picăturile de ploaie care sunt importante pentru plante!"
    },
    itemsToCount: [
      { id: "i1", emoji: "💧", x: 15, y: 25 },
      { id: "i2", emoji: "💧", x: 85, y: 30 },
      { id: "i3", emoji: "💧", x: 50, y: 55 },
      { id: "i4", emoji: "💧", x: 30, y: 70 },
      { id: "i5", emoji: "💧", x: 65, y: 80 },
      { id: "i6", emoji: "💧", x: 40, y: 20 },
      { id: "i7", emoji: "💧", x: 75, y: 50 }
    ],
    options: [
      { id: "o1", number: 6, isCorrect: false },
      { id: "o2", number: 7, isCorrect: true },
      { id: "o3", number: 8, isCorrect: false },
      { id: "o4", number: 9, isCorrect: false }
    ]
  },
  {
    id: "sk-cc-3",
    taskDescription: {
      de: "Wie viele Bienen bestäuben die Blumen?",
      hu: "Hány méh porozza be a virágokat?",
      en: "How many bees are pollinating the flowers?",
      ro: "Câte albine polenizează florile?"
    },
    itemsToCount: [
      { id: "i1", emoji: "🐝", x: 25, y: 20 },
      { id: "i2", emoji: "🐝", x: 45, y: 35 },
      { id: "i3", emoji: "🐝", x: 65, y: 45 },
      { id: "i4", emoji: "🐝", x: 15, y: 65 },
      { id: "i5", emoji: "🐝", x: 85, y: 20 },
      { id: "i6", emoji: "🐝", x: 55, y: 75 }
    ],
    options: [
      { id: "o1", number: 5, isCorrect: false },
      { id: "o2", number: 6, isCorrect: true },
      { id: "o3", number: 7, isCorrect: false },
      { id: "o4", number: 8, isCorrect: false }
    ]
  },
  {
    id: "sk-cc-4",
    taskDescription: {
      de: "Zähle die Vögel, die in den Süden fliegen!",
      hu: "Számold meg a délre repülő madarakat!",
      en: "Count the birds flying south!",
      ro: "Numără păsările care zboară spre sud!"
    },
    itemsToCount: [
      { id: "i1", emoji: "🦅", x: 20, y: 40 },
      { id: "i2", emoji: "🦅", x: 40, y: 30 },
      { id: "i3", emoji: "🦅", x: 60, y: 50 },
      { id: "i4", emoji: "🦅", x: 80, y: 40 }
    ],
    options: [
      { id: "o1", number: 3, isCorrect: false },
      { id: "o2", number: 4, isCorrect: true },
      { id: "o3", number: 5, isCorrect: false },
      { id: "o4", number: 6, isCorrect: false }
    ]
  },
  {
    id: "sk-cc-5",
    taskDescription: {
      de: "Wie viele Sterne leuchten am Nachthimmel?",
      hu: "Hány csillag ragyog az éjszakai égen?",
      en: "How many stars shine in the night sky?",
      ro: "Câte stele strălucesc pe cerul nopții?"
    },
    itemsToCount: [
      { id: "i1", emoji: "⭐", x: 10, y: 15 },
      { id: "i2", emoji: "⭐", x: 30, y: 50 },
      { id: "i3", emoji: "⭐", x: 50, y: 20 },
      { id: "i4", emoji: "⭐", x: 70, y: 60 },
      { id: "i5", emoji: "⭐", x: 90, y: 30 },
      { id: "i6", emoji: "⭐", x: 20, y: 80 },
      { id: "i7", emoji: "⭐", x: 60, y: 80 },
      { id: "i8", emoji: "⭐", x: 80, y: 10 }
    ],
    options: [
      { id: "o1", number: 7, isCorrect: false },
      { id: "o2", number: 8, isCorrect: true },
      { id: "o3", number: 9, isCorrect: false },
      { id: "o4", number: 10, isCorrect: false }
    ]
  }
];
