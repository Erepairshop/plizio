import { BubbleChoiceRound } from "../../../../components/astro-games/views/m2/BubbleChoiceView";

// English subject: kids learning English (Hungarian/German/Romanian native speakers).
export const rounds: BubbleChoiceRound[] = [
  {
    id: "en-bc-1",
    taskDescription: {
      en: "Choose the correct article: ___ apple",
      de: "Wähle den richtigen Artikel: ___ apple",
      hu: "Válaszd ki a helyes névelőt: ___ apple",
      ro: "Alege articolul corect: ___ apple"
    },
    bubbles: [
      { id: "b1", text: { en: "an", de: "an", hu: "an", ro: "an" }, emoji: "🍎", isCorrect: true },
      { id: "b2", text: { en: "a", de: "a", hu: "a", ro: "a" }, emoji: "❌", isCorrect: false },
      { id: "b3", text: { en: "the", de: "the", hu: "the", ro: "the" }, emoji: "❌", isCorrect: false },
      { id: "b4", text: { en: "some", de: "some", hu: "some", ro: "some" }, emoji: "❌", isCorrect: false }
    ]
  },
  {
    id: "en-bc-2",
    taskDescription: {
      en: "Choose the correct article: ___ house",
      de: "Wähle den richtigen Artikel: ___ house",
      hu: "Válaszd ki a helyes névelőt: ___ house",
      ro: "Alege articolul corect: ___ house"
    },
    bubbles: [
      { id: "b1", text: { en: "an", de: "an", hu: "an", ro: "an" }, emoji: "❌", isCorrect: false },
      { id: "b2", text: { en: "a", de: "a", hu: "a", ro: "a" }, emoji: "🏠", isCorrect: true },
      { id: "b3", text: { en: "any", de: "any", hu: "any", ro: "any" }, emoji: "❌", isCorrect: false },
      { id: "b4", text: { en: "no", de: "no", hu: "no", ro: "no" }, emoji: "❌", isCorrect: false }
    ]
  },
  {
    id: "en-bc-3",
    taskDescription: {
      en: "Choose the correct form: I ___ happy",
      de: "Wähle die richtige Form: I ___ happy",
      hu: "Válaszd ki a helyes alakot: I ___ happy",
      ro: "Alege forma corectă: I ___ happy"
    },
    bubbles: [
      { id: "b1", text: { en: "am", de: "am", hu: "am", ro: "am" }, emoji: "😊", isCorrect: true },
      { id: "b2", text: { en: "are", de: "are", hu: "are", ro: "are" }, emoji: "❌", isCorrect: false },
      { id: "b3", text: { en: "is", de: "is", hu: "is", ro: "is" }, emoji: "❌", isCorrect: false },
      { id: "b4", text: { en: "be", de: "be", hu: "be", ro: "be" }, emoji: "❌", isCorrect: false }
    ]
  },
  {
    id: "en-bc-4",
    taskDescription: {
      en: "Choose the correct form: they ___ playing",
      de: "Wähle die richtige Form: they ___ playing",
      hu: "Válaszd ki a helyes alakot: they ___ playing",
      ro: "Alege forma corectă: they ___ playing"
    },
    bubbles: [
      { id: "b1", text: { en: "is", de: "is", hu: "is", ro: "is" }, emoji: "❌", isCorrect: false },
      { id: "b2", text: { en: "am", de: "am", hu: "am", ro: "am" }, emoji: "❌", isCorrect: false },
      { id: "b3", text: { en: "are", de: "are", hu: "are", ro: "are" }, emoji: "⚽", isCorrect: true },
      { id: "b4", text: { en: "was", de: "was", hu: "was", ro: "was" }, emoji: "❌", isCorrect: false }
    ]
  }
];
