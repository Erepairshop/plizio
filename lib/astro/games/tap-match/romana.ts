import { TapMatchRound } from "../../../../components/astro-games/views/m2/TapMatchView";

export const rounds: TapMatchRound[] = [
  {
    id: "ro-tm-1",
    timeLimitMs: 60000,
    left: [
      { id: "L1", label: { en: "Apple", de: "Apfel", hu: "Alma", ro: "Măr" }, emoji: "🍎" },
      { id: "L2", label: { en: "Dog", de: "Hund", hu: "Kutya", ro: "Câine" }, emoji: "🐶" }
    ],
    right: [
      { id: "R1", label: { en: "Fruit", de: "Frucht", hu: "Gyümölcs", ro: "Fruct" }, emoji: "🍎" },
      { id: "R2", label: { en: "Animal", de: "Tier", hu: "Állat", ro: "Animal" }, emoji: "🐶" }
    ],
    correctPairs: [
      { leftId: "L1", rightId: "R1" },
      { leftId: "L2", rightId: "R2" }
    ]
  }
];
