import { BubbleChoiceRound } from "../../../../components/astro-games/views/m2/BubbleChoiceView";

export const rounds: BubbleChoiceRound[] = [
  { id: "1", question: { en: "Q?", hu: "Q", de: "Q", ro: "Q" }, bubbles: [{ id: "b1", label: { en: "A", hu: "A", de: "A", ro: "A" }, isCorrect: true }], lives: 3, timeLimitMs: 10000 },
  { id: "1", question: { en: "Q?", hu: "Q", de: "Q", ro: "Q" }, bubbles: [{ id: "b1", label: { en: "A", hu: "A", de: "A", ro: "A" }, isCorrect: true }], lives: 3, timeLimitMs: 10000 },
  { id: "1", question: { en: "Q?", hu: "Q", de: "Q", ro: "Q" }, bubbles: [{ id: "b1", label: { en: "A", hu: "A", de: "A", ro: "A" }, isCorrect: true }], lives: 3, timeLimitMs: 10000 }
];
