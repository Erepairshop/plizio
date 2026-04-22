import { QuickTapRound } from "../../../../components/astro-games/views/m2/QuickTapView";

export const rounds: QuickTapRound[] = [
  {
    id: "de-qt-1",
    taskDescription: {
      en: "Tap all the nouns (Nomen)!",
      de: "Tippe alle Nomen an!",
      hu: "Koppints az összes főnévre!",
      ro: "Atinge toate substantivele!"
    },
    items: [
      { id: "i1", content: { en: "Hund", de: "Hund", hu: "Hund", ro: "Hund" }, emoji: "🐶", isTarget: true },
      { id: "i2", content: { en: "laufen", de: "laufen", hu: "laufen", ro: "laufen" }, isTarget: false },
      { id: "i3", content: { en: "Katze", de: "Katze", hu: "Katze", ro: "Katze" }, emoji: "🐱", isTarget: true },
      { id: "i4", content: { en: "springen", de: "springen", hu: "springen", ro: "springen" }, isTarget: false },
      { id: "i5", content: { en: "Haus", de: "Haus", hu: "Haus", ro: "Haus" }, emoji: "🏠", isTarget: true },
      { id: "i6", content: { en: "schnell", de: "schnell", hu: "schnell", ro: "schnell" }, isTarget: false }
    ]
  },
  {
    id: "de-qt-2",
    taskDescription: {
      en: "Tap all the verbs (Verben)!",
      de: "Tippe alle Verben an!",
      hu: "Koppints az összes igére!",
      ro: "Atinge toate verbele!"
    },
    items: [
      { id: "i1", content: { en: "spielen", de: "spielen", hu: "spielen", ro: "spielen" }, isTarget: true },
      { id: "i2", content: { en: "Ball", de: "Ball", hu: "Ball", ro: "Ball" }, emoji: "⚽", isTarget: false },
      { id: "i3", content: { en: "essen", de: "essen", hu: "essen", ro: "essen" }, isTarget: true },
      { id: "i4", content: { en: "Apfel", de: "Apfel", hu: "Apfel", ro: "Apfel" }, emoji: "🍎", isTarget: false },
      { id: "i5", content: { en: "trinken", de: "trinken", hu: "trinken", ro: "trinken" }, isTarget: true },
      { id: "i6", content: { en: "Wasser", de: "Wasser", hu: "Wasser", ro: "Wasser" }, emoji: "💧", isTarget: false }
    ]
  },
  {
    id: "de-qt-3",
    taskDescription: {
      en: "Tap all the articles (Artikel)!",
      de: "Tippe alle Artikel an!",
      hu: "Koppints az összes névelőre!",
      ro: "Atinge toate articolele!"
    },
    items: [
      { id: "i1", content: { en: "Der", de: "Der", hu: "Der", ro: "Der" }, isTarget: true },
      { id: "i2", content: { en: "Mann", de: "Mann", hu: "Mann", ro: "Mann" }, emoji: "👨", isTarget: false },
      { id: "i3", content: { en: "Die", de: "Die", hu: "Die", ro: "Die" }, isTarget: true },
      { id: "i4", content: { en: "Frau", de: "Frau", hu: "Frau", ro: "Frau" }, emoji: "👩", isTarget: false },
      { id: "i5", content: { en: "Das", de: "Das", hu: "Das", ro: "Das" }, isTarget: true },
      { id: "i6", content: { en: "Kind", de: "Kind", hu: "Kind", ro: "Kind" }, emoji: "🧒", isTarget: false }
    ]
  }
];
