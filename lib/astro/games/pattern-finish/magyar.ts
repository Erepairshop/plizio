import { PatternFinishRound } from "../../../../components/astro-games/views/m3/PatternFinishView";

export const rounds: PatternFinishRound[] = [
  {
    id: "hu-pf-1",
    taskDescription: {
      en: "Complete the pattern: ich bin, du bist, er ?",
      de: "Vervollstandige: ich bin, du bist, er ?",
      hu: "Folytasd a mintat: ich bin, du bist, er ?",
      ro: "Completeaza modelul: ich bin, du bist, er ?"
    },
    pattern: [
      { en: "ich bin", de: "ich bin", hu: "ich bin", ro: "ich bin" },
      { en: "du bist", de: "du bist", hu: "du bist", ro: "du bist" },
      { en: "er ?", de: "er ?", hu: "er ?", ro: "er ?" }
    ],
    options: [
      { id: "o1", text: { en: "ist", de: "ist", hu: "ist", ro: "ist" }, isCorrect: true },
      { id: "o2", text: { en: "bin", de: "bin", hu: "bin", ro: "bin" }, isCorrect: false },
      { id: "o3", text: { en: "bist", de: "bist", hu: "bist", ro: "bist" }, isCorrect: false },
      { id: "o4", text: { en: "seid", de: "seid", hu: "seid", ro: "seid" }, isCorrect: false }
    ]
  },
  {
    id: "hu-pf-2",
    taskDescription: {
      en: "Finish: ich habe, du hast, wir ?",
      de: "Vervollstandige: ich habe, du hast, wir ?",
      hu: "Folytasd: ich habe, du hast, wir ?",
      ro: "Completeaza: ich habe, du hast, wir ?"
    },
    pattern: [
      { en: "ich habe", de: "ich habe", hu: "ich habe", ro: "ich habe" },
      { en: "du hast", de: "du hast", hu: "du hast", ro: "du hast" },
      { en: "wir ?", de: "wir ?", hu: "wir ?", ro: "wir ?" }
    ],
    options: [
      { id: "o1", text: { en: "haben", de: "haben", hu: "haben", ro: "haben" }, isCorrect: true },
      { id: "o2", text: { en: "habt", de: "habt", hu: "habt", ro: "habt" }, isCorrect: false },
      { id: "o3", text: { en: "hat", de: "hat", hu: "hat", ro: "hat" }, isCorrect: false },
      { id: "o4", text: { en: "habe", de: "habe", hu: "habe", ro: "habe" }, isCorrect: false }
    ]
  },
  {
    id: "hu-pf-3",
    taskDescription: {
      en: "Finish: ich gehe, du gehst, er ?",
      de: "Vervollstandige: ich gehe, du gehst, er ?",
      hu: "Folytasd: ich gehe, du gehst, er ?",
      ro: "Completeaza: ich gehe, du gehst, er ?"
    },
    pattern: [
      { en: "ich gehe", de: "ich gehe", hu: "ich gehe", ro: "ich gehe" },
      { en: "du gehst", de: "du gehst", hu: "du gehst", ro: "du gehst" },
      { en: "er ?", de: "er ?", hu: "er ?", ro: "er ?" }
    ],
    options: [
      { id: "o1", text: { en: "geht", de: "geht", hu: "geht", ro: "geht" }, isCorrect: true },
      { id: "o2", text: { en: "gehst", de: "gehst", hu: "gehst", ro: "gehst" }, isCorrect: false },
      { id: "o3", text: { en: "gehe", de: "gehe", hu: "gehe", ro: "gehe" }, isCorrect: false },
      { id: "o4", text: { en: "gehen", de: "gehen", hu: "gehen", ro: "gehen" }, isCorrect: false }
    ]
  }
];
