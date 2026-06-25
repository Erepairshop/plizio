import { FillBlankRound } from "../../../../components/astro-games/views/m3/FillBlankView";

export const rounds: FillBlankRound[] = [
  {
    id: "ai-fb-1",
    taskDescription: {
      en: "Fill in the blank with the correct AI term.",
      de: "Fülle die Lücke mit dem richtigen KI-Begriff aus.",
      hu: "Egészítsd ki a mondatot a megfelelő MI-kifejezéssel.",
      ro: "Completează spațiul liber cu termenul IA corect."
    },
    sentenceParts: {
      before: {
        en: "The examples an AI learns from are called ",
        de: "Die Beispiele, aus denen eine KI lernt, nennt man ",
        hu: "Azokat a példákat, amelyekből az MI tanul, ",
        ro: "Exemplele din care învață o IA se numesc "
      },
      after: {
        en: ".",
        de: ".",
        hu: "-nak nevezzük.",
        ro: "."
      }
    },
    options: [
      { en: "training data", de: "Trainingsdaten", hu: "tanítóadat", ro: "date de antrenare" },
      { en: "hardware", de: "Hardware", hu: "hardver", ro: "hardware" },
      { en: "a monitor", de: "ein Monitor", hu: "monitor", ro: "un monitor" }
    ],
    correctIndex: 0
  },
  {
    id: "ai-fb-2",
    taskDescription: {
      en: "Complete the sentence.",
      de: "Vervollständige den Satz.",
      hu: "Egészítsd ki a mondatot.",
      ro: "Completează propoziția."
    },
    sentenceParts: {
      before: {
        en: "The instruction you type to ask an AI something is a ",
        de: "Die Anweisung, die du eingibst, um eine KI etwas zu fragen, ist ein ",
        hu: "Az utasítás, amelyet beírsz, hogy kérdezz az MI-től, egy ",
        ro: "Instrucțiunea pe care o scrii pentru a întreba o IA este un "
      },
      after: {
        en: ".",
        de: ".",
        hu: ".",
        ro: "."
      }
    },
    options: [
      { en: "prompt", de: "Prompt", hu: "prompt", ro: "prompt" },
      { en: "pixel", de: "Pixel", hu: "pixel", ro: "pixel" },
      { en: "cable", de: "Kabel", hu: "kábel", ro: "cablu" }
    ],
    correctIndex: 0
  }
];
