import { PatternFinishRound } from "../../../../components/astro-games/views/m3/PatternFinishView";

export const rounds: PatternFinishRound[] = [
  {
    id: "math-pf-1",
    taskDescription: {
      de: "Wie geht das Muster weiter?",
      hu: "Hogyan folytatódik a minta?",
      en: "How does the pattern continue?",
      ro: "Cum continuă modelul?"
    },
    pattern: [
      { de: "2", hu: "2", en: "2", ro: "2" },
      { de: "4", hu: "4", en: "4", ro: "4" },
      { de: "6", hu: "6", en: "6", ro: "6" },
      { de: "?", hu: "?", en: "?", ro: "?" }
    ],
    options: [
      { id: "o1", text: { de: "8", hu: "8", en: "8", ro: "8" }, isCorrect: true },
      { id: "o2", text: { de: "7", hu: "7", en: "7", ro: "7" }, isCorrect: false },
      { id: "o3", text: { de: "9", hu: "9", en: "9", ro: "9" }, isCorrect: false },
      { id: "o4", text: { de: "10", hu: "10", en: "10", ro: "10" }, isCorrect: false }
    ]
  },
  {
    id: "math-pf-2",
    taskDescription: {
      de: "Wie geht das Muster weiter?",
      hu: "Hogyan folytatódik a minta?",
      en: "How does the pattern continue?",
      ro: "Cum continuă modelul?"
    },
    pattern: [
      { de: "5", hu: "5", en: "5", ro: "5" },
      { de: "10", hu: "10", en: "10", ro: "10" },
      { de: "15", hu: "15", en: "15", ro: "15" },
      { de: "?", hu: "?", en: "?", ro: "?" }
    ],
    options: [
      { id: "o1", text: { de: "20", hu: "20", en: "20", ro: "20" }, isCorrect: true },
      { id: "o2", text: { de: "16", hu: "16", en: "16", ro: "16" }, isCorrect: false },
      { id: "o3", text: { de: "25", hu: "25", en: "25", ro: "25" }, isCorrect: false },
      { id: "o4", text: { de: "30", hu: "30", en: "30", ro: "30" }, isCorrect: false }
    ]
  },
  {
    id: "math-pf-3",
    taskDescription: {
      de: "Wie geht das Muster weiter?",
      hu: "Hogyan folytatódik a minta?",
      en: "How does the pattern continue?",
      ro: "Cum continuă modelul?"
    },
    pattern: [
      { de: "10", hu: "10", en: "10", ro: "10" },
      { de: "9", hu: "9", en: "9", ro: "9" },
      { de: "8", hu: "8", en: "8", ro: "8" },
      { de: "?", hu: "?", en: "?", ro: "?" }
    ],
    options: [
      { id: "o1", text: { de: "7", hu: "7", en: "7", ro: "7" }, isCorrect: true },
      { id: "o2", text: { de: "6", hu: "6", en: "6", ro: "6" }, isCorrect: false },
      { id: "o3", text: { de: "11", hu: "11", en: "11", ro: "11" }, isCorrect: false },
      { id: "o4", text: { de: "5", hu: "5", en: "5", ro: "5" }, isCorrect: false }
    ]
  },
  {
    id: "math-pf-4",
    taskDescription: {
      de: "Wie geht das Muster weiter?",
      hu: "Hogyan folytatódik a minta?",
      en: "How does the pattern continue?",
      ro: "Cum continuă modelul?"
    },
    pattern: [
      { de: "1", hu: "1", en: "1", ro: "1" },
      { de: "3", hu: "3", en: "3", ro: "3" },
      { de: "5", hu: "5", en: "5", ro: "5" },
      { de: "?", hu: "?", en: "?", ro: "?" }
    ],
    options: [
      { id: "o1", text: { de: "7", hu: "7", en: "7", ro: "7" }, isCorrect: true },
      { id: "o2", text: { de: "6", hu: "6", en: "6", ro: "6" }, isCorrect: false },
      { id: "o3", text: { de: "8", hu: "8", en: "8", ro: "8" }, isCorrect: false },
      { id: "o4", text: { de: "9", hu: "9", en: "9", ro: "9" }, isCorrect: false }
    ]
  }
];
