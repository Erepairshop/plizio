import { QuickTapRound } from "../../../../components/astro-games/views/m2/QuickTapView";

export const rounds: QuickTapRound[] = [
  {
    id: "hu-qt-1",
    taskDescription: {
      en: "Tap all nouns.",
      de: "Tippe auf alle Nomen.",
      hu: "Érintsd meg az összes főnevet.",
      ro: "Atinge toate substantivele."
    },
    items: [
      { id: "i1", content: { en: "House", de: "Haus", hu: "ház", ro: "casă" }, emoji: "🏠", isTarget: true },
      { id: "i2", content: { en: "to run", de: "laufen", hu: "fut", ro: "a alerga" }, emoji: "🏃", isTarget: false },
      { id: "i3", content: { en: "School", de: "Schule", hu: "iskola", ro: "școală" }, emoji: "🏫", isTarget: true },
      { id: "i4", content: { en: "is", de: "ist", hu: "van", ro: "este" }, emoji: "🔤", isTarget: false },
      { id: "i5", content: { en: "Cat", de: "Katze", hu: "macska", ro: "pisică" }, emoji: "🐱", isTarget: true },
      { id: "i6", content: { en: "to play", de: "spielen", hu: "játszik", ro: "a juca" }, emoji: "⚽", isTarget: false },
      { id: "i7", content: { en: "Book", de: "Buch", hu: "könyv", ro: "carte" }, emoji: "📘", isTarget: true },
      { id: "i8", content: { en: "to drink", de: "trinken", hu: "iszik", ro: "a bea" }, emoji: "🥤", isTarget: false }
    ]
  },
  {
    id: "hu-qt-2",
    taskDescription: {
      en: "Tap all verbs.",
      de: "Tippe auf alle Verben.",
      hu: "Érintsd meg az összes igét.",
      ro: "Atinge toate verbele."
    },
    items: [
      { id: "i1", content: { en: "to go", de: "gehen", hu: "megy", ro: "a merge" }, emoji: "🚶", isTarget: true },
      { id: "i2", content: { en: "Friend", de: "Freund", hu: "barát", ro: "prieten" }, emoji: "🧑", isTarget: false },
      { id: "i3", content: { en: "to learn", de: "lernen", hu: "tanul", ro: "a învăța" }, emoji: "📚", isTarget: true },
      { id: "i4", content: { en: "Window", de: "Fenster", hu: "ablak", ro: "fereastră" }, emoji: "🪟", isTarget: false },
      { id: "i5", content: { en: "to live", de: "wohnen", hu: "lakik", ro: "a locui" }, emoji: "🏡", isTarget: true },
      { id: "i6", content: { en: "Lamp", de: "Lampe", hu: "lámpa", ro: "lampă" }, emoji: "💡", isTarget: false },
      { id: "i7", content: { en: "to write", de: "schreiben", hu: "ír", ro: "a scrie" }, emoji: "✍️", isTarget: true },
      { id: "i8", content: { en: "Apple", de: "Apfel", hu: "alma", ro: "măr" }, emoji: "🍎", isTarget: false }
    ]
  },
  {
    id: "hu-qt-3",
    taskDescription: {
      en: "Tap all adjectives.",
      de: "Tippe auf alle Adjektive.",
      hu: "Érintsd meg az összes melléknevet.",
      ro: "Atinge toate adjectivele."
    },
    items: [
      { id: "i1", content: { en: "red", de: "rot", hu: "piros", ro: "roșu" }, emoji: "🔴", isTarget: true },
      { id: "i2", content: { en: "dog", de: "Hund", hu: "kutya", ro: "câine" }, emoji: "🐶", isTarget: false },
      { id: "i3", content: { en: "big", de: "groß", hu: "nagy", ro: "mare" }, emoji: "🐘", isTarget: true },
      { id: "i4", content: { en: "tree", de: "Baum", hu: "fa", ro: "copac" }, emoji: "🌳", isTarget: false },
      { id: "i5", content: { en: "beautiful", de: "schön", hu: "szép", ro: "frumos" }, emoji: "✨", isTarget: true },
      { id: "i6", content: { en: "to sleep", de: "schlafen", hu: "alszik", ro: "a dormi" }, emoji: "😴", isTarget: false },
      { id: "i7", content: { en: "fast", de: "schnell", hu: "gyors", ro: "rapid" }, emoji: "⚡", isTarget: true },
      { id: "i8", content: { en: "boy", de: "Junge", hu: "fiú", ro: "băiat" }, emoji: "👦", isTarget: false }
    ]
  }
];