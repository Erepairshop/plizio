import { QuickTapRound } from "../../../../components/astro-games/views/m2/QuickTapView";

// English subject: kids learning English.
export const rounds: QuickTapRound[] = [
  {
    id: "en-qt-1",
    taskDescription: {
      en: "Tap all English nouns.",
      de: "Tippe auf alle englischen Nomen.",
      hu: "Érintsd meg az összes angol főnevet.",
      ro: "Atinge toate substantivele englezești."
    },
    items: [
      { id: "i1", content: { en: "House", de: "House", hu: "House", ro: "House" }, emoji: "🏠", isTarget: true },
      { id: "i2", content: { en: "run", de: "run", hu: "run", ro: "run" }, emoji: "🏃", isTarget: false },
      { id: "i3", content: { en: "Book", de: "Book", hu: "Book", ro: "Book" }, emoji: "📘", isTarget: true },
      { id: "i4", content: { en: "small", de: "small", hu: "small", ro: "small" }, emoji: "📏", isTarget: false },
      { id: "i5", content: { en: "Cat", de: "Cat", hu: "Cat", ro: "Cat" }, emoji: "🐱", isTarget: true },
      { id: "i6", content: { en: "drink", de: "drink", hu: "drink", ro: "drink" }, emoji: "🥤", isTarget: false },
      { id: "i7", content: { en: "School", de: "School", hu: "School", ro: "School" }, emoji: "🏫", isTarget: true },
      { id: "i8", content: { en: "today", de: "today", hu: "today", ro: "today" }, emoji: "📅", isTarget: false },
      { id: "i9", content: { en: "Apple", de: "Apple", hu: "Apple", ro: "Apple" }, emoji: "🍎", isTarget: true }
    ]
  },
  {
    id: "en-qt-2",
    taskDescription: {
      en: "Tap all indefinite articles.",
      de: "Tippe auf alle unbestimmten Artikel.",
      hu: "Érintsd meg az összes határozatlan névelőt.",
      ro: "Atinge toate articolele nehotărâte."
    },
    items: [
      { id: "i1", content: { en: "a", de: "a", hu: "a", ro: "a" }, emoji: "🅰️", isTarget: true },
      { id: "i2", content: { en: "the", de: "the", hu: "the", ro: "the" }, emoji: "⬜", isTarget: false },
      { id: "i3", content: { en: "an", de: "an", hu: "an", ro: "an" }, emoji: "🍎", isTarget: true },
      { id: "i4", content: { en: "my", de: "my", hu: "my", ro: "my" }, emoji: "👤", isTarget: false },
      { id: "i5", content: { en: "a", de: "a", hu: "a", ro: "a" }, emoji: "🐶", isTarget: true },
      { id: "i6", content: { en: "this", de: "this", hu: "this", ro: "this" }, emoji: "📍", isTarget: false },
      { id: "i7", content: { en: "an", de: "an", hu: "an", ro: "an" }, emoji: "🥚", isTarget: true },
      { id: "i8", content: { en: "your", de: "your", hu: "your", ro: "your" }, emoji: "👤", isTarget: false },
      { id: "i9", content: { en: "a", de: "a", hu: "a", ro: "a" }, emoji: "🚗", isTarget: true }
    ]
  },
  {
    id: "en-qt-3",
    taskDescription: {
      en: "Tap all action verbs.",
      de: "Tippe auf alle Tätigkeitsverben.",
      hu: "Érintsd meg az összes cselekvő igét.",
      ro: "Atinge toate verbele de acțiune."
    },
    items: [
      { id: "i1", content: { en: "go", de: "go", hu: "go", ro: "go" }, emoji: "🚶", isTarget: true },
      { id: "i2", content: { en: "Bread", de: "Bread", hu: "Bread", ro: "Bread" }, emoji: "🍞", isTarget: false },
      { id: "i3", content: { en: "learn", de: "learn", hu: "learn", ro: "learn" }, emoji: "📚", isTarget: true },
      { id: "i4", content: { en: "Friend", de: "Friend", hu: "Friend", ro: "Friend" }, emoji: "🧑", isTarget: false },
      { id: "i5", content: { en: "play", de: "play", hu: "play", ro: "play" }, emoji: "⚽", isTarget: true },
      { id: "i6", content: { en: "Weather", de: "Weather", hu: "Weather", ro: "Weather" }, emoji: "🌦️", isTarget: false },
      { id: "i7", content: { en: "speak", de: "speak", hu: "speak", ro: "speak" }, emoji: "🗣️", isTarget: true },
      { id: "i8", content: { en: "City", de: "City", hu: "City", ro: "City" }, emoji: "🏙️", isTarget: false },
      { id: "i9", content: { en: "jump", de: "jump", hu: "jump", ro: "jump" }, emoji: "🦘", isTarget: true }
    ]
  }
];
