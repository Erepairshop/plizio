import { BubbleChoiceRound } from "../../../../components/astro-games/views/m2/BubbleChoiceView";

export const rounds: BubbleChoiceRound[] = [
  {
    id: "de-bc-1",
    taskDescription: {
      en: "Which article is correct for 'Hund'?",
      de: "Welcher Artikel ist richtig für 'Hund'?",
      hu: "Melyik névelő helyes a 'Hund' szóhoz?",
      ro: "Care articol este corect pentru 'Hund'?"
    },
    bubbles: [
      { id: "b1", text: { en: "Der", de: "Der", hu: "Der", ro: "Der" }, isCorrect: true },
      { id: "b2", text: { en: "Die", de: "Die", hu: "Die", ro: "Die" }, isCorrect: false },
      { id: "b3", text: { en: "Das", de: "Das", hu: "Das", ro: "Das" }, isCorrect: false }
    ]
  },
  {
    id: "de-bc-2",
    taskDescription: {
      en: "Which article is correct for 'Katze'?",
      de: "Welcher Artikel ist richtig für 'Katze'?",
      hu: "Melyik névelő helyes a 'Katze' szóhoz?",
      ro: "Care articol este corect pentru 'Katze'?"
    },
    bubbles: [
      { id: "b1", text: { en: "Der", de: "Der", hu: "Der", ro: "Der" }, isCorrect: false },
      { id: "b2", text: { en: "Die", de: "Die", hu: "Die", ro: "Die" }, isCorrect: true },
      { id: "b3", text: { en: "Das", de: "Das", hu: "Das", ro: "Das" }, isCorrect: false }
    ]
  },
  {
    id: "de-bc-3",
    taskDescription: {
      en: "Which article is correct for 'Haus'?",
      de: "Welcher Artikel ist richtig für 'Haus'?",
      hu: "Melyik névelő helyes a 'Haus' szóhoz?",
      ro: "Care articol este corect pentru 'Haus'?"
    },
    bubbles: [
      { id: "b1", text: { en: "Der", de: "Der", hu: "Der", ro: "Der" }, isCorrect: false },
      { id: "b2", text: { en: "Die", de: "Die", hu: "Die", ro: "Die" }, isCorrect: false },
      { id: "b3", text: { en: "Das", de: "Das", hu: "Das", ro: "Das" }, isCorrect: true }
    ]
  }
];
