import { PatternFinishRound } from "../../../../components/astro-games/views/m3/PatternFinishView";

export const rounds: PatternFinishRound[] = [
  {
    id: "en-pf-1",
    taskDescription: {
      en: "Complete the conjugation pattern of 'sein'.",
      de: "Vervollständige das Konjugationsmuster von 'sein'.",
      hu: "Egészítsd ki a 'sein' ragozási mintáját.",
      ro: "Completează modelul de conjugare al verbului 'sein'."
    },
    pattern: [
      { en: "ich bin", de: "ich bin", hu: "ich bin", ro: "ich bin" },
      { en: "du bist", de: "du bist", hu: "du bist", ro: "du bist" },
      { en: "er ...", de: "er ...", hu: "er ...", ro: "er ..." },
      { en: "?", de: "?", hu: "?", ro: "?" }
    ],
    options: [
      { id: "o1", text: { en: "ist", de: "ist", hu: "ist", ro: "ist" }, isCorrect: true },
      { id: "o2", text: { en: "bin", de: "bin", hu: "bin", ro: "bin" }, isCorrect: false },
      { id: "o3", text: { en: "seid", de: "seid", hu: "seid", ro: "seid" }, isCorrect: false },
      { id: "o4", text: { en: "sind", de: "sind", hu: "sind", ro: "sind" }, isCorrect: false }
    ]
  },
  {
    id: "en-pf-2",
    taskDescription: {
      en: "Finish the 'haben' pattern.",
      de: "Vervollständige das Muster von 'haben'.",
      hu: "Egészítsd ki a 'haben' mintát.",
      ro: "Completează modelul pentru 'haben'."
    },
    pattern: [
      { en: "ich habe", de: "ich habe", hu: "ich habe", ro: "ich habe" },
      { en: "du hast", de: "du hast", hu: "du hast", ro: "du hast" },
      { en: "er hat", de: "er hat", hu: "er hat", ro: "er hat" },
      { en: "wir ...", de: "wir ...", hu: "wir ...", ro: "wir ..." }
    ],
    options: [
      { id: "o1", text: { en: "habt", de: "habt", hu: "habt", ro: "habt" }, isCorrect: false },
      { id: "o2", text: { en: "haben", de: "haben", hu: "haben", ro: "haben" }, isCorrect: true },
      { id: "o3", text: { en: "hat", de: "hat", hu: "hat", ro: "hat" }, isCorrect: false },
      { id: "o4", text: { en: "habe", de: "habe", hu: "habe", ro: "habe" }, isCorrect: false }
    ]
  },
  {
    id: "en-pf-3",
    taskDescription: {
      en: "Complete the personal pronoun pattern.",
      de: "Vervollständige das Muster der Personalpronomen.",
      hu: "Egészítsd ki a személyes névmások mintáját.",
      ro: "Completează modelul pronumelor personale."
    },
    pattern: [
      { en: "ich", de: "ich", hu: "ich", ro: "ich" },
      { en: "du", de: "du", hu: "du", ro: "du" },
      { en: "er/sie/es", de: "er/sie/es", hu: "er/sie/es", ro: "er/sie/es" },
      { en: "?", de: "?", hu: "?", ro: "?" }
    ],
    options: [
      { id: "o1", text: { en: "wir", de: "wir", hu: "wir", ro: "wir" }, isCorrect: true },
      { id: "o2", text: { en: "mich", de: "mich", hu: "mich", ro: "mich" }, isCorrect: false },
      { id: "o3", text: { en: "euch", de: "euch", hu: "euch", ro: "euch" }, isCorrect: false },
      { id: "o4", text: { en: "ihn", de: "ihn", hu: "ihn", ro: "ihn" }, isCorrect: false }
    ]
  }
];

