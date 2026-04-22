import { BubbleChoiceRound } from "../../../../components/astro-games/views/m2/BubbleChoiceView";

export const rounds: BubbleChoiceRound[] = [
  {
    id: "hu-bc-1",
    taskDescription: {
      en: "Choose the correct pronoun: ___ olvasok egy könyvet.",
      de: "Wähle das richtige Pronomen: ___ olvasok egy könyvet.",
      hu: "Válaszd ki a helyes névmást: ___ olvasok egy könyvet.",
      ro: "Alege pronumele corect: ___ olvasok egy könyvet."
    },
    bubbles: [
      { id: "b1", text: { en: "én", de: "én", hu: "én", ro: "én" }, emoji: "✅", isCorrect: true },
      { id: "b2", text: { en: "te", de: "te", hu: "te", ro: "te" }, emoji: "❌", isCorrect: false },
      { id: "b3", text: { en: "ő", de: "ő", hu: "ő", ro: "ő" }, emoji: "❌", isCorrect: false },
      { id: "b4", text: { en: "mi", de: "mi", hu: "mi", ro: "mi" }, emoji: "❌", isCorrect: false }
    ]
  },
  {
    id: "hu-bc-2",
    taskDescription: {
      en: "Choose the correct pronoun: ___ játszol a kertben.",
      de: "Wähle das richtige Pronomen: ___ játszol a kertben.",
      hu: "Válaszd ki a helyes névmást: ___ játszol a kertben.",
      ro: "Alege pronumele corect: ___ játszol a kertben."
    },
    bubbles: [
      { id: "b1", text: { en: "én", de: "én", hu: "én", ro: "én" }, emoji: "❌", isCorrect: false },
      { id: "b2", text: { en: "te", de: "te", hu: "te", ro: "te" }, emoji: "✅", isCorrect: true },
      { id: "b3", text: { en: "ti", de: "ti", hu: "ti", ro: "ti" }, emoji: "❌", isCorrect: false },
      { id: "b4", text: { en: "ők", de: "ők", hu: "ők", ro: "ők" }, emoji: "❌", isCorrect: false }
    ]
  },
  {
    id: "hu-bc-3",
    taskDescription: {
      en: "Choose the correct verb form: A fiú ___ az iskolába.",
      de: "Wähle die richtige Verbform: A fiú ___ az iskolába.",
      hu: "Válaszd ki a helyes igealakot: A fiú ___ az iskolába.",
      ro: "Alege forma verbală corectă: A fiú ___ az iskolába."
    },
    bubbles: [
      { id: "b1", text: { en: "megyünk", de: "megyünk", hu: "megyünk", ro: "megyünk" }, emoji: "❌", isCorrect: false },
      { id: "b2", text: { en: "mész", de: "mész", hu: "mész", ro: "mész" }, emoji: "❌", isCorrect: false },
      { id: "b3", text: { en: "megy", de: "megy", hu: "megy", ro: "megy" }, emoji: "✅", isCorrect: true },
      { id: "b4", text: { en: "megyek", de: "megyek", hu: "megyek", ro: "megyek" }, emoji: "❌", isCorrect: false }
    ]
  }
];