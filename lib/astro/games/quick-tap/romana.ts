import { QuickTapRound } from "../../../../components/astro-games/views/m2/QuickTapView";

export const rounds: QuickTapRound[] = [
  {
    id: "ro-qt-1",
    taskDescription: { en: "Tap the fruits", de: "Tippe auf Früchte", hu: "Koppints a gyümölcsökre", ro: "Apasă pe fructe" },
    items: [
      { id: "i1", content: { en: "Apple", de: "Apfel", hu: "Alma", ro: "Măr" }, emoji: "🍎", isTarget: true },
      { id: "i2", content: { en: "Dog", de: "Hund", hu: "Kutya", ro: "Câine" }, emoji: "🐶", isTarget: false },
      { id: "i3", content: { en: "Banana", de: "Banane", hu: "Banán", ro: "Banană" }, emoji: "🍌", isTarget: true }
    ]
  }
];
