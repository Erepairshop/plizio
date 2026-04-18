import { WordChainRound } from "../../../../components/astro-games/views/m2/WordChainView";

export const rounds: WordChainRound[] = [
  { id: "1", rule: { en: "Rule", hu: "Szabály", de: "Regel", ro: "Regulă" }, start: { label: { en: "Start", hu: "Start", de: "Start", ro: "Start" } }, steps: [{ options: [{ id: "o1", label: { en: "Next", hu: "Next", de: "Next", ro: "Next" }, isValid: true }], timeLimitMs: 5000 }] },
  { id: "1", rule: { en: "Rule", hu: "Szabály", de: "Regel", ro: "Regulă" }, start: { label: { en: "Start", hu: "Start", de: "Start", ro: "Start" } }, steps: [{ options: [{ id: "o1", label: { en: "Next", hu: "Next", de: "Next", ro: "Next" }, isValid: true }], timeLimitMs: 5000 }] },
  { id: "1", rule: { en: "Rule", hu: "Szabály", de: "Regel", ro: "Regulă" }, start: { label: { en: "Start", hu: "Start", de: "Start", ro: "Start" } }, steps: [{ options: [{ id: "o1", label: { en: "Next", hu: "Next", de: "Next", ro: "Next" }, isValid: true }], timeLimitMs: 5000 }] }
];
