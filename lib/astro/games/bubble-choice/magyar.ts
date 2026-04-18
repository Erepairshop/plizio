import { BubbleChoiceRound } from "../../../../components/astro-games/views/m2/BubbleChoiceView";

export const rounds: BubbleChoiceRound[] = [
  {
    id: "hu-bc-1",
    taskDescription: {
      en: "Choose the correct article: ___ Tisch",
      de: "Wahle den richtigen Artikel: ___ Tisch",
      hu: "Valaszd ki a helyes nevelot: ___ Tisch",
      ro: "Alege articolul corect: ___ Tisch"
    },
    bubbles: [
      { id: "b1", text: { en: "der", de: "der", hu: "der", ro: "der" }, emoji: "✅", isCorrect: true },
      { id: "b2", text: { en: "die", de: "die", hu: "die", ro: "die" }, emoji: "❌", isCorrect: false },
      { id: "b3", text: { en: "das", de: "das", hu: "das", ro: "das" }, emoji: "❌", isCorrect: false },
      { id: "b4", text: { en: "den", de: "den", hu: "den", ro: "den" }, emoji: "❌", isCorrect: false }
    ]
  },
  {
    id: "hu-bc-2",
    taskDescription: {
      en: "Choose the correct article: ___ Lampe",
      de: "Wahle den richtigen Artikel: ___ Lampe",
      hu: "Valaszd ki a helyes nevelot: ___ Lampe",
      ro: "Alege articolul corect: ___ Lampe"
    },
    bubbles: [
      { id: "b1", text: { en: "der", de: "der", hu: "der", ro: "der" }, emoji: "❌", isCorrect: false },
      { id: "b2", text: { en: "die", de: "die", hu: "die", ro: "die" }, emoji: "✅", isCorrect: true },
      { id: "b3", text: { en: "das", de: "das", hu: "das", ro: "das" }, emoji: "❌", isCorrect: false },
      { id: "b4", text: { en: "dem", de: "dem", hu: "dem", ro: "dem" }, emoji: "❌", isCorrect: false }
    ]
  },
  {
    id: "hu-bc-3",
    taskDescription: {
      en: "Choose the correct form: er ___ zur Schule",
      de: "Wahle die richtige Form: er ___ zur Schule",
      hu: "Valaszd ki a helyes alakot: er ___ zur Schule",
      ro: "Alege forma corecta: er ___ zur Schule"
    },
    bubbles: [
      { id: "b1", text: { en: "gehen", de: "gehen", hu: "gehen", ro: "gehen" }, emoji: "❌", isCorrect: false },
      { id: "b2", text: { en: "gehst", de: "gehst", hu: "gehst", ro: "gehst" }, emoji: "❌", isCorrect: false },
      { id: "b3", text: { en: "geht", de: "geht", hu: "geht", ro: "geht" }, emoji: "✅", isCorrect: true },
      { id: "b4", text: { en: "gehe", de: "gehe", hu: "gehe", ro: "gehe" }, emoji: "❌", isCorrect: false }
    ]
  }
];
