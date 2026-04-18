import { QuickTapRound } from "../../../../components/astro-games/views/m2/QuickTapView";

export const rounds: QuickTapRound[] = [
  {
    id: "math-qt-1",
    taskDescription: {
      en: "Tap all the even numbers!",
      de: "Tippe auf alle geraden Zahlen!",
      hu: "Érintsd meg az összes páros számot!",
      ro: "Atinge toate numerele pare!"
    },
    items: [
      { id: "i1", content: { en: "2", de: "2", hu: "2", ro: "2" }, emoji: "2️⃣", isTarget: true },
      { id: "i2", content: { en: "3", de: "3", hu: "3", ro: "3" }, emoji: "3️⃣", isTarget: false },
      { id: "i3", content: { en: "4", de: "4", hu: "4", ro: "4" }, emoji: "4️⃣", isTarget: true },
      { id: "i4", content: { en: "5", de: "5", hu: "5", ro: "5" }, emoji: "5️⃣", isTarget: false },
      { id: "i5", content: { en: "6", de: "6", hu: "6", ro: "6" }, emoji: "6️⃣", isTarget: true },
      { id: "i6", content: { en: "7", de: "7", hu: "7", ro: "7" }, emoji: "7️⃣", isTarget: false },
      { id: "i7", content: { en: "8", de: "8", hu: "8", ro: "8" }, emoji: "8️⃣", isTarget: true },
      { id: "i8", content: { en: "9", de: "9", hu: "9", ro: "9" }, emoji: "9️⃣", isTarget: false },
      { id: "i9", content: { en: "10", de: "10", hu: "10", ro: "10" }, emoji: "🔟", isTarget: true }
    ]
  },
  {
    id: "math-qt-2",
    taskDescription: {
      en: "Tap all numbers greater than 10!",
      de: "Tippe auf alle Zahlen größer als 10!",
      hu: "Érintsd meg a 10-nél nagyobb számokat!",
      ro: "Atinge toate numerele mai mari de 10!"
    },
    items: [
      { id: "i1", content: { en: "15", de: "15", hu: "15", ro: "15" }, emoji: "🔢", isTarget: true },
      { id: "i2", content: { en: "5", de: "5", hu: "5", ro: "5" }, emoji: "5️⃣", isTarget: false },
      { id: "i3", content: { en: "12", de: "12", hu: "12", ro: "12" }, emoji: "🔢", isTarget: true },
      { id: "i4", content: { en: "8", de: "8", hu: "8", ro: "8" }, emoji: "8️⃣", isTarget: false },
      { id: "i5", content: { en: "20", de: "20", hu: "20", ro: "20" }, emoji: "🔢", isTarget: true },
      { id: "i6", content: { en: "3", de: "3", hu: "3", ro: "3" }, emoji: "3️⃣", isTarget: false },
      { id: "i7", content: { en: "11", de: "11", hu: "11", ro: "11" }, emoji: "🔢", isTarget: true },
      { id: "i8", content: { en: "9", de: "9", hu: "9", ro: "9" }, emoji: "9️⃣", isTarget: false },
      { id: "i9", content: { en: "18", de: "18", hu: "18", ro: "18" }, emoji: "🔢", isTarget: true }
    ]
  },
  {
    id: "math-qt-3",
    taskDescription: {
      en: "Tap all the odd numbers!",
      de: "Tippe auf alle ungeraden Zahlen!",
      hu: "Érintsd meg az összes páratlan számot!",
      ro: "Atinge toate numerele impare!"
    },
    items: [
      { id: "i1", content: { en: "1", de: "1", hu: "1", ro: "1" }, emoji: "1️⃣", isTarget: true },
      { id: "i2", content: { en: "2", de: "2", hu: "2", ro: "2" }, emoji: "2️⃣", isTarget: false },
      { id: "i3", content: { en: "3", de: "3", hu: "3", ro: "3" }, emoji: "3️⃣", isTarget: true },
      { id: "i4", content: { en: "4", de: "4", hu: "4", ro: "4" }, emoji: "4️⃣", isTarget: false },
      { id: "i5", content: { en: "5", de: "5", hu: "5", ro: "5" }, emoji: "5️⃣", isTarget: true },
      { id: "i6", content: { en: "6", de: "6", hu: "6", ro: "6" }, emoji: "6️⃣", isTarget: false },
      { id: "i7", content: { en: "7", de: "7", hu: "7", ro: "7" }, emoji: "7️⃣", isTarget: true },
      { id: "i8", content: { en: "8", de: "8", hu: "8", ro: "8" }, emoji: "8️⃣", isTarget: false },
      { id: "i9", content: { en: "9", de: "9", hu: "9", ro: "9" }, emoji: "9️⃣", isTarget: true }
    ]
  }
];
