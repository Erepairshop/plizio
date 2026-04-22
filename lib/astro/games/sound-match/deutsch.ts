import { SoundMatchRound } from "../../../../components/astro-games/views/m3/SoundMatchView";

export const rounds: SoundMatchRound[] = [
  {
    id: "de-sm-1",
    taskDescription: {
      en: "Which German word matches this fruit?",
      de: "Welches deutsche Wort passt zu dieser Frucht?",
      hu: "Melyik német szó illik ehhez a gyümölcshöz?",
      ro: "Ce cuvânt german se potrivește acestui fruct?"
    },
    audioEmoji: "🍎",
    options: [
      { id: "o1", label: { en: "Apfel", de: "Apfel", hu: "Apfel", ro: "Apfel" }, isCorrect: true },
      { id: "o2", label: { en: "Banane", de: "Banane", hu: "Banane", ro: "Banane" }, isCorrect: false },
      { id: "o3", label: { en: "Birne", de: "Birne", hu: "Birne", ro: "Birne" }, isCorrect: false },
      { id: "o4", label: { en: "Traube", de: "Traube", hu: "Traube", ro: "Traube" }, isCorrect: false }
    ]
  },
  {
    id: "de-sm-2",
    taskDescription: {
      en: "Which German word matches this animal?",
      de: "Welches deutsche Wort passt zu diesem Tier?",
      hu: "Melyik német szó illik ehhez az állathoz?",
      ro: "Ce cuvânt german se potrivește acestui animal?"
    },
    audioEmoji: "🐶",
    options: [
      { id: "o1", label: { en: "Katze", de: "Katze", hu: "Katze", ro: "Katze" }, isCorrect: false },
      { id: "o2", label: { en: "Hund", de: "Hund", hu: "Hund", ro: "Hund" }, isCorrect: true },
      { id: "o3", label: { en: "Vogel", de: "Vogel", hu: "Vogel", ro: "Vogel" }, isCorrect: false },
      { id: "o4", label: { en: "Fisch", de: "Fisch", hu: "Fisch", ro: "Fisch" }, isCorrect: false }
    ]
  },
  {
    id: "de-sm-3",
    taskDescription: {
      en: "Which German word matches this object?",
      de: "Welches deutsche Wort passt zu diesem Gegenstand?",
      hu: "Melyik német szó illik ehhez a tárgyhoz?",
      ro: "Ce cuvânt german se potrivește acestui obiect?"
    },
    audioEmoji: "📚",
    options: [
      { id: "o1", label: { en: "Stift", de: "Stift", hu: "Stift", ro: "Stift" }, isCorrect: false },
      { id: "o2", label: { en: "Tisch", de: "Tisch", hu: "Tisch", ro: "Tisch" }, isCorrect: false },
      { id: "o3", label: { en: "Buch", de: "Buch", hu: "Buch", ro: "Buch" }, isCorrect: true },
      { id: "o4", label: { en: "Stuhl", de: "Stuhl", hu: "Stuhl", ro: "Stuhl" }, isCorrect: false }
    ]
  },
  {
    id: "de-sm-4",
    taskDescription: {
      en: "Which German word matches this weather?",
      de: "Welches deutsche Wort passt zu diesem Wetter?",
      hu: "Melyik német szó illik ehhez az időjáráshoz?",
      ro: "Ce cuvânt german se potrivește acestei vremi?"
    },
    audioEmoji: "☀️",
    options: [
      { id: "o1", label: { en: "Regen", de: "Regen", hu: "Regen", ro: "Regen" }, isCorrect: false },
      { id: "o2", label: { en: "Schnee", de: "Schnee", hu: "Schnee", ro: "Schnee" }, isCorrect: false },
      { id: "o3", label: { en: "Wolke", de: "Wolke", hu: "Wolke", ro: "Wolke" }, isCorrect: false },
      { id: "o4", label: { en: "Sonne", de: "Sonne", hu: "Sonne", ro: "Sonne" }, isCorrect: true }
    ]
  }
];
