import { TapMatchRound } from "../../../../components/astro-games/views/m2/TapMatchView";

export const rounds: TapMatchRound[] = [
  {
    id: "hu-tm-1",
    timeLimitMs: 60000,
    left: [
      { id: "L1", label: { en: "Hund", de: "Hund", hu: "kutya (de)", ro: "caine (de)" }, emoji: "🐶" },
      { id: "L2", label: { en: "Katze", de: "Katze", hu: "macska (de)", ro: "pisica (de)" }, emoji: "🐱" },
      { id: "L3", label: { en: "Haus", de: "Haus", hu: "haz (de)", ro: "casa (de)" }, emoji: "🏠" },
      { id: "L4", label: { en: "Buch", de: "Buch", hu: "konyv (de)", ro: "carte (de)" }, emoji: "📘" }
    ],
    right: [
      { id: "R1", label: { en: "Dog", de: "Hund", hu: "kutya", ro: "caine" }, emoji: "🐶" },
      { id: "R2", label: { en: "Cat", de: "Katze", hu: "macska", ro: "pisica" }, emoji: "🐱" },
      { id: "R3", label: { en: "House", de: "Haus", hu: "haz", ro: "casa" }, emoji: "🏠" },
      { id: "R4", label: { en: "Book", de: "Buch", hu: "konyv", ro: "carte" }, emoji: "📘" }
    ],
    correctPairs: [
      { leftId: "L1", rightId: "R1" },
      { leftId: "L2", rightId: "R2" },
      { leftId: "L3", rightId: "R3" },
      { leftId: "L4", rightId: "R4" }
    ]
  },
  {
    id: "hu-tm-2",
    timeLimitMs: 60000,
    left: [
      { id: "L1", label: { en: "A", de: "A", hu: "A", ro: "A" }, emoji: "🔤" },
      { id: "L2", label: { en: "B", de: "B", hu: "B", ro: "B" }, emoji: "🔤" },
      { id: "L3", label: { en: "K", de: "K", hu: "K", ro: "K" }, emoji: "🔤" },
      { id: "L4", label: { en: "T", de: "T", hu: "T", ro: "T" }, emoji: "🔤" }
    ],
    right: [
      { id: "R1", label: { en: "Apfel", de: "Apfel", hu: "alma", ro: "mar" }, emoji: "🍎" },
      { id: "R2", label: { en: "Banane", de: "Banane", hu: "banan", ro: "banana" }, emoji: "🍌" },
      { id: "R3", label: { en: "Katze", de: "Katze", hu: "macska", ro: "pisica" }, emoji: "🐱" },
      { id: "R4", label: { en: "Tisch", de: "Tisch", hu: "asztal", ro: "masa" }, emoji: "🪑" }
    ],
    correctPairs: [
      { leftId: "L1", rightId: "R1" },
      { leftId: "L2", rightId: "R2" },
      { leftId: "L3", rightId: "R3" },
      { leftId: "L4", rightId: "R4" }
    ]
  },
  {
    id: "hu-tm-3",
    timeLimitMs: 60000,
    left: [
      { id: "L1", label: { en: "der", de: "der", hu: "der", ro: "der" }, emoji: "🟦" },
      { id: "L2", label: { en: "die", de: "die", hu: "die", ro: "die" }, emoji: "🟥" },
      { id: "L3", label: { en: "das", de: "das", hu: "das", ro: "das" }, emoji: "🟩" }
    ],
    right: [
      { id: "R1", label: { en: "Hund", de: "Hund", hu: "kutya", ro: "caine" }, emoji: "🐶" },
      { id: "R2", label: { en: "Lampe", de: "Lampe", hu: "lampa", ro: "lampa" }, emoji: "💡" },
      { id: "R3", label: { en: "Buch", de: "Buch", hu: "konyv", ro: "carte" }, emoji: "📘" }
    ],
    correctPairs: [
      { leftId: "L1", rightId: "R1" },
      { leftId: "L2", rightId: "R2" },
      { leftId: "L3", rightId: "R3" }
    ]
  }
];
