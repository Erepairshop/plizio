import { TapMatchRound } from "../../../../components/astro-games/views/m2/TapMatchView";

export const rounds: TapMatchRound[] = [
  {
    id: "de-tm-1",
    timeLimitMs: 60000,
    left: [
      { id: "L1", label: { en: "Dog", de: "Hund", hu: "Kutya", ro: "Câine" }, emoji: "🐶" },
      { id: "L2", label: { en: "Cat", de: "Katze", hu: "Macska", ro: "Pisică" }, emoji: "🐱" },
      { id: "L3", label: { en: "Bird", de: "Vogel", hu: "Madár", ro: "Pasăre" }, emoji: "🐦" },
      { id: "L4", label: { en: "Fish", de: "Fisch", hu: "Hal", ro: "Pește" }, emoji: "🐟" }
    ],
    right: [
      { id: "R1", label: { en: "Hund", de: "Hund", hu: "Hund", ro: "Hund" }, emoji: "🐶" },
      { id: "R2", label: { en: "Katze", de: "Katze", hu: "Katze", ro: "Katze" }, emoji: "🐱" },
      { id: "R3", label: { en: "Vogel", de: "Vogel", hu: "Vogel", ro: "Vogel" }, emoji: "🐦" },
      { id: "R4", label: { en: "Fisch", de: "Fisch", hu: "Fisch", ro: "Fisch" }, emoji: "🐟" }
    ],
    correctPairs: [
      { leftId: "L1", rightId: "R1" },
      { leftId: "L2", rightId: "R2" },
      { leftId: "L3", rightId: "R3" },
      { leftId: "L4", rightId: "R4" }
    ]
  },
  {
    id: "de-tm-2",
    timeLimitMs: 60000,
    left: [
      { id: "L1", label: { en: "A", de: "A", hu: "A", ro: "A" }, emoji: "🅰️" },
      { id: "L2", label: { en: "B", de: "B", hu: "B", ro: "B" }, emoji: "🅱️" },
      { id: "L3", label: { en: "C", de: "C", hu: "C", ro: "C" }, emoji: "©️" },
      { id: "L4", label: { en: "D", de: "D", hu: "D", ro: "D" }, emoji: "🇩" }
    ],
    right: [
      { id: "R1", label: { en: "Apfel", de: "Apfel", hu: "Apfel", ro: "Apfel" }, emoji: "🍎" },
      { id: "R2", label: { en: "Banane", de: "Banane", hu: "Banane", ro: "Banane" }, emoji: "🍌" },
      { id: "R3", label: { en: "Computer", de: "Computer", hu: "Computer", ro: "Computer" }, emoji: "💻" },
      { id: "R4", label: { en: "Delfin", de: "Delfin", hu: "Delfin", ro: "Delfin" }, emoji: "🐬" }
    ],
    correctPairs: [
      { leftId: "L1", rightId: "R1" },
      { leftId: "L2", rightId: "R2" },
      { leftId: "L3", rightId: "R3" },
      { leftId: "L4", rightId: "R4" }
    ]
  },
  {
    id: "de-tm-3",
    timeLimitMs: 60000,
    left: [
      { id: "L1", label: { en: "Red", de: "Rot", hu: "Piros", ro: "Roșu" }, emoji: "🔴" },
      { id: "L2", label: { en: "Blue", de: "Blau", hu: "Kék", ro: "Albastru" }, emoji: "🔵" },
      { id: "L3", label: { en: "Green", de: "Grün", hu: "Zöld", ro: "Verde" }, emoji: "🟢" },
      { id: "L4", label: { en: "Yellow", de: "Gelb", hu: "Sárga", ro: "Galben" }, emoji: "🟡" }
    ],
    right: [
      { id: "R1", label: { en: "Rot", de: "Rot", hu: "Rot", ro: "Rot" }, emoji: "🔴" },
      { id: "R2", label: { en: "Blau", de: "Blau", hu: "Blau", ro: "Blau" }, emoji: "🔵" },
      { id: "R3", label: { en: "Grün", de: "Grün", hu: "Grün", ro: "Grün" }, emoji: "🟢" },
      { id: "R4", label: { en: "Gelb", de: "Gelb", hu: "Gelb", ro: "Gelb" }, emoji: "🟡" }
    ],
    correctPairs: [
      { leftId: "L1", rightId: "R1" },
      { leftId: "L2", rightId: "R2" },
      { leftId: "L3", rightId: "R3" },
      { leftId: "L4", rightId: "R4" }
    ]
  }
];
