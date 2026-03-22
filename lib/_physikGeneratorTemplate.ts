// ─── PHYSICS GENERATORS TEMPLATE ──────────────────────────────────────────────
// Copy this file and fill in the DATA + GENERATORS sections.
// Each subtopic needs: 1 MCQ generator (35 questions) + 1 Typing generator (10 questions)
//
// RULES:
// - ALL text must be in 4 languages using q4(de, en, hu, ro, lang)
// - MCQ: use createMCQ(topic, subtopic, question, correctAnswer, [wrong1, wrong2, wrong3], rng)
// - Typing: use createTyping(topic, subtopic, question, ["answer1", "answer2", ...])
// - Use data pools + templates for MCQ variety (min 5 templates, loop to 35 questions)
// - Use seeded rng (mulberry32), NEVER Math.random()
// - Export generators object + register with setK5GeneratorMap (change K5 to K6/K7/K8)
// - Function signature: (lang: string = "en", seed: number = 0) => CurriculumQuestion[]

import type { CurriculumQuestion, CurriculumMCQ, CurriculumTyping } from "./curriculumTypes";

// ─── HELPER FUNCTIONS (copy as-is to every generator file) ───────────────────

function mulberry32(seed: number) {
  return function() {
    seed |= 0; seed = (seed + 0x6D2B79F5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffle<T>(arr: T[], rng: () => number): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function pick<T>(arr: T[], rng: () => number): T {
  return arr[Math.floor(rng() * arr.length)];
}

function createMCQ(
  topic: string, subtopic: string, question: string,
  correct: string, wrongOptions: string[], rng?: () => number
): CurriculumMCQ {
  const seen = new Set<string>();
  const unique: string[] = [];
  for (const w of wrongOptions) {
    if (w !== correct && !seen.has(w)) { seen.add(w); unique.push(w); }
  }
  const opts = shuffle([correct, ...unique.slice(0, 3)], rng || Math.random);
  return { type: "mcq", topic, subtopic, question, options: opts, correct: opts.indexOf(correct) };
}

function createTyping(
  topic: string, subtopic: string, question: string, answer: string | string[]
): CurriculumTyping {
  return { type: "typing", topic, subtopic, question, answer };
}

function q4(de: string, en: string, hu: string, ro: string, lang: string): string {
  if (lang === "de") return de;
  if (lang === "hu") return hu;
  if (lang === "ro") return ro;
  return en;
}

// ─── EXAMPLE: ONE SUBTOPIC ───────────────────────────────────────────────────
// Replace TOPIC_NAME, SUBTOPIC_ID, and all content below.

const EXAMPLE_DATA = [
  { de: "Beispiel 1", en: "Example 1", hu: "Példa 1", ro: "Exemplul 1", fact: "some_fact" },
  { de: "Beispiel 2", en: "Example 2", hu: "Példa 2", ro: "Exemplul 2", fact: "other_fact" },
  // ... at least 6-8 data items for variety
];

export function generateExampleMCQ(lang: string = "en", seed: number = 0): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumQuestion[] = [];
  const TOPIC = "TOPIC_NAME";
  const SUB = "SUBTOPIC_ID";

  // Template 1 (7 questions)
  for (let i = 0; i < 7; i++) {
    const item = pick(EXAMPLE_DATA, rng);
    questions.push(createMCQ(TOPIC, SUB,
      q4(`Was ist ${item.de}?`, `What is ${item.en}?`, `Mi az ${item.hu}?`, `Ce este ${item.ro}?`, lang),
      q4("Richtig", "Correct", "Helyes", "Corect", lang),
      [q4("Falsch 1", "Wrong 1", "Hibás 1", "Greșit 1", lang),
       q4("Falsch 2", "Wrong 2", "Hibás 2", "Greșit 2", lang),
       q4("Falsch 3", "Wrong 3", "Hibás 3", "Greșit 3", lang)],
      rng
    ));
  }

  // Template 2 (7 questions) ... Template 3 (7) ... Template 4 (7) ... Template 5 (7)
  // Total: 35 questions

  return questions;
}

export function generateExampleTyping(lang: string = "en", seed: number = 0): CurriculumQuestion[] {
  const TOPIC = "TOPIC_NAME";
  const SUB = "SUBTOPIC_ID";
  return [
    createTyping(TOPIC, SUB, q4("Frage 1?", "Question 1?", "Kérdés 1?", "Întrebarea 1?", lang), ["answer1", "Antwort1"]),
    createTyping(TOPIC, SUB, q4("Frage 2?", "Question 2?", "Kérdés 2?", "Întrebarea 2?", lang), ["answer2"]),
    // ... 10 typing questions total
  ];
}

// ─── EXPORT (change theme name + subtopic keys) ─────────────────────────────

export const EXAMPLE_GENERATORS: Record<string, (lang?: string, seed?: number) => CurriculumQuestion[]> = {
  example_mcq: (lang = "en", seed = 0) => generateExampleMCQ(lang, seed),
  example_typing: (lang = "en", seed = 0) => generateExampleTyping(lang, seed),
};

// At the bottom of the LAST generator file for this grade, register ALL themes:
// import { setK6GeneratorMap } from "./physikCurriculumN";
// setK6GeneratorMap({ theme1: THEME1_GENERATORS, theme2: THEME2_GENERATORS, ... });
