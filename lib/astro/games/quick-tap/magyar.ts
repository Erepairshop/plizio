import { QuickTapRound } from "../../../../components/astro-games/views/m2/QuickTapView";

export const rounds: QuickTapRound[] = [
  {
    id: "hu-qt-1",
    taskDescription: {
      en: "Tap all nouns.",
      de: "Tippe auf alle Nomen.",
      hu: "Erintsd meg az osszes fonevet.",
      ro: "Atinge toate substantivele."
    },
    items: [
      { id: "i1", content: { en: "Haus", de: "Haus", hu: "haz", ro: "casa" }, emoji: "🏠", isTarget: true },
      { id: "i2", content: { en: "laufen", de: "laufen", hu: "futni", ro: "a alerga" }, emoji: "🏃", isTarget: false },
      { id: "i3", content: { en: "Schule", de: "Schule", hu: "iskola", ro: "scoala" }, emoji: "🏫", isTarget: true },
      { id: "i4", content: { en: "ist", de: "ist", hu: "van", ro: "este" }, emoji: "🔤", isTarget: false },
      { id: "i5", content: { en: "Katze", de: "Katze", hu: "macska", ro: "pisica" }, emoji: "🐱", isTarget: true },
      { id: "i6", content: { en: "spielen", de: "spielen", hu: "jatszani", ro: "a juca" }, emoji: "⚽", isTarget: false },
      { id: "i7", content: { en: "Buch", de: "Buch", hu: "konyv", ro: "carte" }, emoji: "📘", isTarget: true },
      { id: "i8", content: { en: "trinken", de: "trinken", hu: "inni", ro: "a bea" }, emoji: "🥤", isTarget: false }
    ]
  },
  {
    id: "hu-qt-2",
    taskDescription: {
      en: "Tap all verbs.",
      de: "Tippe auf alle Verben.",
      hu: "Erintsd meg az osszes iget.",
      ro: "Atinge toate verbele."
    },
    items: [
      { id: "i1", content: { en: "gehen", de: "gehen", hu: "menni", ro: "a merge" }, emoji: "🚶", isTarget: true },
      { id: "i2", content: { en: "Freund", de: "Freund", hu: "barat", ro: "prieten" }, emoji: "🧑", isTarget: false },
      { id: "i3", content: { en: "lernen", de: "lernen", hu: "tanulni", ro: "a invata" }, emoji: "📚", isTarget: true },
      { id: "i4", content: { en: "Fenster", de: "Fenster", hu: "ablak", ro: "fereastra" }, emoji: "🪟", isTarget: false },
      { id: "i5", content: { en: "wohnen", de: "wohnen", hu: "lakni", ro: "a locui" }, emoji: "🏡", isTarget: true },
      { id: "i6", content: { en: "Lampe", de: "Lampe", hu: "lampa", ro: "lampa" }, emoji: "💡", isTarget: false },
      { id: "i7", content: { en: "schreiben", de: "schreiben", hu: "irni", ro: "a scrie" }, emoji: "✍️", isTarget: true },
      { id: "i8", content: { en: "Apfel", de: "Apfel", hu: "alma", ro: "mar" }, emoji: "🍎", isTarget: false }
    ]
  },
  {
    id: "hu-qt-3",
    taskDescription: {
      en: "Tap all definite articles.",
      de: "Tippe auf alle bestimmten Artikel.",
      hu: "Erintsd meg az osszes hatarozott nevelot.",
      ro: "Atinge toate articolele hotarate."
    },
    items: [
      { id: "i1", content: { en: "der", de: "der", hu: "der", ro: "der" }, emoji: "🟦", isTarget: true },
      { id: "i2", content: { en: "ein", de: "ein", hu: "ein", ro: "ein" }, emoji: "⬜", isTarget: false },
      { id: "i3", content: { en: "die", de: "die", hu: "die", ro: "die" }, emoji: "🟥", isTarget: true },
      { id: "i4", content: { en: "eine", de: "eine", hu: "eine", ro: "eine" }, emoji: "⬜", isTarget: false },
      { id: "i5", content: { en: "das", de: "das", hu: "das", ro: "das" }, emoji: "🟩", isTarget: true },
      { id: "i6", content: { en: "kein", de: "kein", hu: "kein", ro: "kein" }, emoji: "🚫", isTarget: false },
      { id: "i7", content: { en: "den", de: "den", hu: "den", ro: "den" }, emoji: "🟨", isTarget: true },
      { id: "i8", content: { en: "mein", de: "mein", hu: "mein", ro: "mein" }, emoji: "👤", isTarget: false }
    ]
  }
];
