import { BubbleChoiceRound } from "../../../../components/astro-games/views/m2/BubbleChoiceView";

export const rounds: BubbleChoiceRound[] = [
  {
    id: "en-bc-1",
    taskDescription: {
      en: "Choose the correct article: ___ Hund",
      de: "Wähle den richtigen Artikel: ___ Hund",
      hu: "Válaszd ki a helyes névelőt: ___ Hund",
      ro: "Alege articolul corect: ___ Hund"
    },
    bubbles: [
      { id: "b1", text: { en: "der", de: "der", hu: "der", ro: "der" }, emoji: "🐶", isCorrect: true },
      { id: "b2", text: { en: "die", de: "die", hu: "die", ro: "die" }, emoji: "❌", isCorrect: false },
      { id: "b3", text: { en: "das", de: "das", hu: "das", ro: "das" }, emoji: "❌", isCorrect: false },
      { id: "b4", text: { en: "den", de: "den", hu: "den", ro: "den" }, emoji: "❌", isCorrect: false }
    ]
  },
  {
    id: "en-bc-2",
    taskDescription: {
      en: "Choose the correct article: ___ Schule",
      de: "Wähle den richtigen Artikel: ___ Schule",
      hu: "Válaszd ki a helyes névelőt: ___ Schule",
      ro: "Alege articolul corect: ___ Schule"
    },
    bubbles: [
      { id: "b1", text: { en: "der", de: "der", hu: "der", ro: "der" }, emoji: "❌", isCorrect: false },
      { id: "b2", text: { en: "die", de: "die", hu: "die", ro: "die" }, emoji: "🏫", isCorrect: true },
      { id: "b3", text: { en: "das", de: "das", hu: "das", ro: "das" }, emoji: "❌", isCorrect: false },
      { id: "b4", text: { en: "dem", de: "dem", hu: "dem", ro: "dem" }, emoji: "❌", isCorrect: false }
    ]
  },
  {
    id: "en-bc-3",
    taskDescription: {
      en: "Choose the correct form: ich ___ müde",
      de: "Wähle die richtige Form: ich ___ müde",
      hu: "Válaszd ki a helyes alakot: ich ___ müde",
      ro: "Alege forma corectă: ich ___ müde"
    },
    bubbles: [
      { id: "b1", text: { en: "bin", de: "bin", hu: "bin", ro: "bin" }, emoji: "✅", isCorrect: true },
      { id: "b2", text: { en: "bist", de: "bist", hu: "bist", ro: "bist" }, emoji: "❌", isCorrect: false },
      { id: "b3", text: { en: "ist", de: "ist", hu: "ist", ro: "ist" }, emoji: "❌", isCorrect: false },
      { id: "b4", text: { en: "seid", de: "seid", hu: "seid", ro: "seid" }, emoji: "❌", isCorrect: false }
    ]
  },
  {
    id: "en-bc-4",
    taskDescription: {
      en: "Choose the correct form: wir ___ in Berlin",
      de: "Wähle die richtige Form: wir ___ in Berlin",
      hu: "Válaszd ki a helyes alakot: wir ___ in Berlin",
      ro: "Alege forma corectă: wir ___ in Berlin"
    },
    bubbles: [
      { id: "b1", text: { en: "bin", de: "bin", hu: "bin", ro: "bin" }, emoji: "❌", isCorrect: false },
      { id: "b2", text: { en: "ist", de: "ist", hu: "ist", ro: "ist" }, emoji: "❌", isCorrect: false },
      { id: "b3", text: { en: "sind", de: "sind", hu: "sind", ro: "sind" }, emoji: "✅", isCorrect: true },
      { id: "b4", text: { en: "seid", de: "seid", hu: "seid", ro: "seid" }, emoji: "❌", isCorrect: false }
    ]
  }
];

