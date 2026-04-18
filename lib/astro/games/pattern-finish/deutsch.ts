import { PatternFinishRound } from "../../../../components/astro-games/views/m3/PatternFinishView";

export const rounds: PatternFinishRound[] = [
  {
    id: "de-pf-1",
    taskDescription: {
      en: "Complete the conjugation: ich bin, du bist, ...",
      de: "Vervollständige: ich bin, du bist, ...",
      hu: "Fejezd be: ich bin, du bist, ...",
      ro: "Completează: ich bin, du bist, ..."
    },
    pattern: [
      { en: "ich bin", de: "ich bin", hu: "ich bin", ro: "ich bin" },
      { en: "du bist", de: "du bist", hu: "du bist", ro: "du bist" },
      { en: "?", de: "?", hu: "?", ro: "?" }
    ],
    options: [
      { id: "o1", text: { en: "er ist", de: "er ist", hu: "er ist", ro: "er ist" }, isCorrect: true },
      { id: "o2", text: { en: "wir sind", de: "wir sind", hu: "wir sind", ro: "wir sind" }, isCorrect: false },
      { id: "o3", text: { en: "ihr seid", de: "ihr seid", hu: "ihr seid", ro: "ihr seid" }, isCorrect: false }
    ]
  },
  {
    id: "de-pf-2",
    taskDescription: {
      en: "Complete the conjugation: ich habe, du hast, ...",
      de: "Vervollständige: ich habe, du hast, ...",
      hu: "Fejezd be: ich habe, du hast, ...",
      ro: "Completează: ich habe, du hast, ..."
    },
    pattern: [
      { en: "ich habe", de: "ich habe", hu: "ich habe", ro: "ich habe" },
      { en: "du hast", de: "du hast", hu: "du hast", ro: "du hast" },
      { en: "?", de: "?", hu: "?", ro: "?" }
    ],
    options: [
      { id: "o1", text: { en: "er hat", de: "er hat", hu: "er hat", ro: "er hat" }, isCorrect: true },
      { id: "o2", text: { en: "wir haben", de: "wir haben", hu: "wir haben", ro: "wir haben" }, isCorrect: false },
      { id: "o3", text: { en: "ihr habt", de: "ihr habt", hu: "ihr habt", ro: "ihr habt" }, isCorrect: false }
    ]
  },
  {
    id: "de-pf-3",
    taskDescription: {
      en: "Complete the conjugation: ich gehe, du gehst, ...",
      de: "Vervollständige: ich gehe, du gehst, ...",
      hu: "Fejezd be: ich gehe, du gehst, ...",
      ro: "Completează: ich gehe, du gehst, ..."
    },
    pattern: [
      { en: "ich gehe", de: "ich gehe", hu: "ich gehe", ro: "ich gehe" },
      { en: "du gehst", de: "du gehst", hu: "du gehst", ro: "du gehst" },
      { en: "?", de: "?", hu: "?", ro: "?" }
    ],
    options: [
      { id: "o1", text: { en: "er geht", de: "er geht", hu: "er geht", ro: "er geht" }, isCorrect: true },
      { id: "o2", text: { en: "wir gehen", de: "wir gehen", hu: "wir gehen", ro: "wir gehen" }, isCorrect: false },
      { id: "o3", text: { en: "ihr geht", de: "ihr geht", hu: "ihr geht", ro: "ihr geht" }, isCorrect: false }
    ]
  }
];
