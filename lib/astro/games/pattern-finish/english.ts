import { PatternFinishRound } from "../../../../components/astro-games/views/m3/PatternFinishView";

// English subject: kids learning English.
export const rounds: PatternFinishRound[] = [
  {
    id: "en-pf-1",
    taskDescription: {
      en: "Complete the conjugation pattern of 'to be'.",
      de: "Vervollständige das Konjugationsmuster von 'to be'.",
      hu: "Egészítsd ki a 'to be' ragozási mintáját.",
      ro: "Completează modelul de conjugare al verbului 'to be'."
    },
    pattern: [
      { en: "I am", de: "I am", hu: "I am", ro: "I am" },
      { en: "you are", de: "you are", hu: "you are", ro: "you are" },
      { en: "he/she/it ...", de: "he/she/it ...", hu: "he/she/it ...", ro: "he/she/it ..." },
      { en: "?", de: "?", hu: "?", ro: "?" }
    ],
    options: [
      { id: "o1", text: { en: "is", de: "is", hu: "is", ro: "is" }, isCorrect: true },
      { id: "o2", text: { en: "am", de: "am", hu: "am", ro: "am" }, isCorrect: false },
      { id: "o3", text: { en: "are", de: "are", hu: "are", ro: "are" }, isCorrect: false },
      { id: "o4", text: { en: "be", de: "be", hu: "be", ro: "be" }, isCorrect: false }
    ]
  },
  {
    id: "en-pf-2",
    taskDescription: {
      en: "Finish the 'to have' pattern.",
      de: "Vervollständige das Muster von 'to have'.",
      hu: "Egészítsd ki a 'to have' mintát.",
      ro: "Completează modelul pentru 'to have'."
    },
    pattern: [
      { en: "I have", de: "I have", hu: "I have", ro: "I have" },
      { en: "you have", de: "you have", hu: "you have", ro: "you have" },
      { en: "he/she/it has", de: "he/she/it has", hu: "he/she/it has", ro: "he/she/it has" },
      { en: "we ...", de: "we ...", hu: "we ...", ro: "we ..." }
    ],
    options: [
      { id: "o1", text: { en: "has", de: "has", hu: "has", ro: "has" }, isCorrect: false },
      { id: "o2", text: { en: "have", de: "have", hu: "have", ro: "have" }, isCorrect: true },
      { id: "o3", text: { en: "having", de: "having", hu: "having", ro: "having" }, isCorrect: false },
      { id: "o4", text: { en: "had", de: "had", hu: "had", ro: "had" }, isCorrect: false }
    ]
  },
  {
    id: "en-pf-3",
    taskDescription: {
      en: "Complete the pronoun pattern.",
      de: "Vervollständige das Muster der Pronomen.",
      hu: "Egészítsd ki a névmások mintáját.",
      ro: "Completează modelul pronumelor."
    },
    pattern: [
      { en: "I", de: "I", hu: "I", ro: "I" },
      { en: "you", de: "you", hu: "you", ro: "you" },
      { en: "he/she/it", de: "he/she/it", hu: "he/she/it", ro: "he/she/it" },
      { en: "?", de: "?", hu: "?", ro: "?" }
    ],
    options: [
      { id: "o1", text: { en: "we", de: "we", hu: "we", ro: "we" }, isCorrect: true },
      { id: "o2", text: { en: "me", de: "me", hu: "me", ro: "me" }, isCorrect: false },
      { id: "o3", text: { en: "your", de: "your", hu: "your", ro: "your" }, isCorrect: false },
      { id: "o4", text: { en: "us", de: "us", hu: "us", ro: "us" }, isCorrect: false }
    ]
  }
];
