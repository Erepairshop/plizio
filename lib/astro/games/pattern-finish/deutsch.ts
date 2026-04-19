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
      { en: "I am", de: "ich bin", hu: "én vagyok", ro: "eu sunt" },
      { en: "you are", de: "du bist", hu: "te vagy", ro: "tu ești" },
      { en: "?", de: "?", hu: "?", ro: "?" }
    ],
    options: [
      { id: "o1", text: { en: "he is", de: "er ist", hu: "ő van", ro: "el este" }, isCorrect: true },
      { id: "o2", text: { en: "we are", de: "wir sind", hu: "mi vagyunk", ro: "noi suntem" }, isCorrect: false },
      { id: "o3", text: { en: "you (pl) are", de: "ihr seid", hu: "ti vagytok", ro: "voi sunteți" }, isCorrect: false }
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
      { en: "I have", de: "ich habe", hu: "nekem van", ro: "eu am" },
      { en: "you have", de: "du hast", hu: "neked van", ro: "tu ai" },
      { en: "?", de: "?", hu: "?", ro: "?" }
    ],
    options: [
      { id: "o1", text: { en: "he has", de: "er hat", hu: "neki van", ro: "el are" }, isCorrect: true },
      { id: "o2", text: { en: "we have", de: "wir haben", hu: "nekünk van", ro: "noi avem" }, isCorrect: false },
      { id: "o3", text: { en: "you (pl) have", de: "ihr habt", hu: "nektek van", ro: "voi aveți" }, isCorrect: false }
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
      { en: "I go", de: "ich gehe", hu: "én megyek", ro: "eu merg" },
      { en: "you go", de: "du gehst", hu: "te mész", ro: "tu mergi" },
      { en: "?", de: "?", hu: "?", ro: "?" }
    ],
    options: [
      { id: "o1", text: { en: "he goes", de: "er geht", hu: "ő megy", ro: "el merge" }, isCorrect: true },
      { id: "o2", text: { en: "we go", de: "wir gehen", hu: "mi megyünk", ro: "noi mergem" }, isCorrect: false },
      { id: "o3", text: { en: "you (pl) go", de: "ihr geht", hu: "ti mentek", ro: "voi mergeți" }, isCorrect: false }
    ]
  }
];
