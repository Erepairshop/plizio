import { QuickTapRound } from "../../../../components/astro-games/views/m2/QuickTapView";

export const rounds: QuickTapRound[] = [
  {
    id: "en-qt-1",
    taskDescription: {
      en: "Tap all German nouns.",
      de: "Tippe auf alle deutschen Nomen.",
      hu: "Érintsd meg az összes német főnevet.",
      ro: "Atinge toate substantivele germane."
    },
    items: [
      { id: "i1", content: { en: "Haus", de: "Haus", hu: "Haus", ro: "Haus" }, emoji: "🏠", isTarget: true },
      { id: "i2", content: { en: "laufen", de: "laufen", hu: "laufen", ro: "laufen" }, emoji: "🏃", isTarget: false },
      { id: "i3", content: { en: "Buch", de: "Buch", hu: "Buch", ro: "Buch" }, emoji: "📘", isTarget: true },
      { id: "i4", content: { en: "klein", de: "klein", hu: "klein", ro: "klein" }, emoji: "📏", isTarget: false },
      { id: "i5", content: { en: "Katze", de: "Katze", hu: "Katze", ro: "Katze" }, emoji: "🐱", isTarget: true },
      { id: "i6", content: { en: "trinken", de: "trinken", hu: "trinken", ro: "trinken" }, emoji: "🥤", isTarget: false },
      { id: "i7", content: { en: "Schule", de: "Schule", hu: "Schule", ro: "Schule" }, emoji: "🏫", isTarget: true },
      { id: "i8", content: { en: "heute", de: "heute", hu: "heute", ro: "heute" }, emoji: "📅", isTarget: false },
      { id: "i9", content: { en: "Apfel", de: "Apfel", hu: "Apfel", ro: "Apfel" }, emoji: "🍎", isTarget: true }
    ]
  },
  {
    id: "en-qt-2",
    taskDescription: {
      en: "Tap all definite articles.",
      de: "Tippe auf alle bestimmten Artikel.",
      hu: "Érintsd meg az összes határozott névelőt.",
      ro: "Atinge toate articolele hotărâte."
    },
    items: [
      { id: "i1", content: { en: "der", de: "der", hu: "der", ro: "der" }, emoji: "🟦", isTarget: true },
      { id: "i2", content: { en: "ein", de: "ein", hu: "ein", ro: "ein" }, emoji: "⬜", isTarget: false },
      { id: "i3", content: { en: "die", de: "die", hu: "die", ro: "die" }, emoji: "🟥", isTarget: true },
      { id: "i4", content: { en: "eine", de: "eine", hu: "eine", ro: "eine" }, emoji: "⬜", isTarget: false },
      { id: "i5", content: { en: "das", de: "das", hu: "das", ro: "das" }, emoji: "🟩", isTarget: true },
      { id: "i6", content: { en: "mein", de: "mein", hu: "mein", ro: "mein" }, emoji: "👤", isTarget: false },
      { id: "i7", content: { en: "den", de: "den", hu: "den", ro: "den" }, emoji: "🟦", isTarget: true },
      { id: "i8", content: { en: "dein", de: "dein", hu: "dein", ro: "dein" }, emoji: "👤", isTarget: false },
      { id: "i9", content: { en: "dem", de: "dem", hu: "dem", ro: "dem" }, emoji: "🟨", isTarget: true }
    ]
  },
  {
    id: "en-qt-3",
    taskDescription: {
      en: "Tap all verbs in infinitive form.",
      de: "Tippe auf alle Verben im Infinitiv.",
      hu: "Érintsd meg az összes főnévi igenévben álló igét.",
      ro: "Atinge toate verbele la infinitiv."
    },
    items: [
      { id: "i1", content: { en: "gehen", de: "gehen", hu: "gehen", ro: "gehen" }, emoji: "🚶", isTarget: true },
      { id: "i2", content: { en: "Brot", de: "Brot", hu: "Brot", ro: "Brot" }, emoji: "🍞", isTarget: false },
      { id: "i3", content: { en: "lernen", de: "lernen", hu: "lernen", ro: "lernen" }, emoji: "📚", isTarget: true },
      { id: "i4", content: { en: "Freund", de: "Freund", hu: "Freund", ro: "Freund" }, emoji: "🧑", isTarget: false },
      { id: "i5", content: { en: "spielen", de: "spielen", hu: "spielen", ro: "spielen" }, emoji: "⚽", isTarget: true },
      { id: "i6", content: { en: "Wetter", de: "Wetter", hu: "Wetter", ro: "Wetter" }, emoji: "🌦️", isTarget: false },
      { id: "i7", content: { en: "sprechen", de: "sprechen", hu: "sprechen", ro: "sprechen" }, emoji: "🗣️", isTarget: true },
      { id: "i8", content: { en: "Stadt", de: "Stadt", hu: "Stadt", ro: "Stadt" }, emoji: "🏙️", isTarget: false },
      { id: "i9", content: { en: "wohnen", de: "wohnen", hu: "wohnen", ro: "wohnen" }, emoji: "🏡", isTarget: true }
    ]
  }
];

