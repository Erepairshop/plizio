import { TapMatchRound } from "../../../../components/astro-games/views/m2/TapMatchView";

export const rounds: TapMatchRound[] = [
  {
    id: "math-tm-1",
    timeLimitMs: 60000,
    left: [
      { id: "L1", label: { en: "5 + 3", de: "5 + 3", hu: "5 + 3", ro: "5 + 3" }, emoji: "➕" },
      { id: "L2", label: { en: "10 - 4", de: "10 - 4", hu: "10 - 4", ro: "10 - 4" }, emoji: "➖" },
      { id: "L3", label: { en: "2 + 7", de: "2 + 7", hu: "2 + 7", ro: "2 + 7" }, emoji: "➕" },
      { id: "L4", label: { en: "15 - 5", de: "15 - 5", hu: "15 - 5", ro: "15 - 5" }, emoji: "➖" }
    ],
    right: [
      { id: "R1", label: { en: "8", de: "8", hu: "8", ro: "8" }, emoji: "🔢" },
      { id: "R2", label: { en: "6", de: "6", hu: "6", ro: "6" }, emoji: "🔢" },
      { id: "R3", label: { en: "9", de: "9", hu: "9", ro: "9" }, emoji: "🔢" },
      { id: "R4", label: { en: "10", de: "10", hu: "10", ro: "10" }, emoji: "🔢" }
    ],
    correctPairs: [
      { leftId: "L1", rightId: "R1" },
      { leftId: "L2", rightId: "R2" },
      { leftId: "L3", rightId: "R3" },
      { leftId: "L4", rightId: "R4" }
    ]
  },
  {
    id: "math-tm-2",
    timeLimitMs: 60000,
    left: [
      { id: "L1", label: { en: "3 x 4", de: "3 x 4", hu: "3 x 4", ro: "3 x 4" }, emoji: "✖️" },
      { id: "L2", label: { en: "2 x 8", de: "2 x 8", hu: "2 x 8", ro: "2 x 8" }, emoji: "✖️" },
      { id: "L3", label: { en: "5 x 5", de: "5 x 5", hu: "5 x 5", ro: "5 x 5" }, emoji: "✖️" },
      { id: "L4", label: { en: "6 x 3", de: "6 x 3", hu: "6 x 3", ro: "6 x 3" }, emoji: "✖️" }
    ],
    right: [
      { id: "R1", label: { en: "12", de: "12", hu: "12", ro: "12" }, emoji: "🔢" },
      { id: "R2", label: { en: "16", de: "16", hu: "16", ro: "16" }, emoji: "🔢" },
      { id: "R3", label: { en: "25", de: "25", hu: "25", ro: "25" }, emoji: "🔢" },
      { id: "R4", label: { en: "18", de: "18", hu: "18", ro: "18" }, emoji: "🔢" }
    ],
    correctPairs: [
      { leftId: "L1", rightId: "R1" },
      { leftId: "L2", rightId: "R2" },
      { leftId: "L3", rightId: "R3" },
      { leftId: "L4", rightId: "R4" }
    ]
  },
  {
    id: "math-tm-3",
    timeLimitMs: 60000,
    left: [
      { id: "L1", label: { en: "20 / 4", de: "20 / 4", hu: "20 / 4", ro: "20 / 4" }, emoji: "➗" },
      { id: "L2", label: { en: "18 / 2", de: "18 / 2", hu: "18 / 2", ro: "18 / 2" }, emoji: "➗" },
      { id: "L3", label: { en: "15 / 5", de: "15 / 5", hu: "15 / 5", ro: "15 / 5" }, emoji: "➗" },
      { id: "L4", label: { en: "24 / 6", de: "24 / 6", hu: "24 / 6", ro: "24 / 6" }, emoji: "➗" }
    ],
    right: [
      { id: "R1", label: { en: "5", de: "5", hu: "5", ro: "5" }, emoji: "🔢" },
      { id: "R2", label: { en: "9", de: "9", hu: "9", ro: "9" }, emoji: "🔢" },
      { id: "R3", label: { en: "3", de: "3", hu: "3", ro: "3" }, emoji: "🔢" },
      { id: "R4", label: { en: "4", de: "4", hu: "4", ro: "4" }, emoji: "🔢" }
    ],
    correctPairs: [
      { leftId: "L1", rightId: "R1" },
      { leftId: "L2", rightId: "R2" },
      { leftId: "L3", rightId: "R3" },
      { leftId: "L4", rightId: "R4" }
    ]
  }
];
