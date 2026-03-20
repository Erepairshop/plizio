// ─── ROMANIAN GENERATORS (CLASA a VII-a) — FAZA 1 ─────────────────────────────────────
// Procedural MCQ question generators for Romanian language curriculum
// Clasa a VII-a (7th grade) – Adjective (classification, grade, functions),
// Numeral (cardinal, ordinal, multiplicative, distributive)
//
// Generates 6 questions per subtopic using seeded PRNG for reproducibility.

import type { CurriculumQuestion, CurriculumMCQ } from "./curriculumTypes";

// ─── HELPER FUNCTIONS ──────────────────────────────────────────────────────

/** Seeded PRNG (Mulberry32) */
function mulberry32(seed: number) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Shuffle array using given RNG */
function shuffle<T>(arr: T[], rng: () => number): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/** Pick random element from array */
function pick<T>(arr: T[], rng: () => number): T {
  return arr[Math.floor(rng() * arr.length)];
}

/** Create MCQ question with shuffled options */
function createMCQ(
  topic: string,
  subtopic: string,
  question: string,
  correct: string,
  wrongOptions: string[],
  rng: () => number
): CurriculumMCQ {
  const seen = new Set<string>();
  const unique: string[] = [];
  for (const w of wrongOptions) {
    if (w !== correct && !seen.has(w)) {
      seen.add(w);
      unique.push(w);
    }
  }
  const opts = shuffle([correct, ...unique.slice(0, 3)], rng);
  return {
    type: "mcq",
    topic,
    subtopic,
    question,
    options: opts,
    correct: opts.indexOf(correct),
  };
}

// ─── WORD BANKS & DATA ──────────────────────────────────────────────────────

const ADJECTIVE_TYPES = [
  { adjective: "frumos", type: "propriu-zis", meaning: "frumos", example: "o casă frumoasă" },
  { adjective: "albastru", type: "propriu-zis", meaning: "color", example: "cer albastru" },
  { adjective: "rupt", type: "provenit din participiu", meaning: "rupt", example: "geamul rupt" },
  { adjective: "gândit", type: "provenit din participiu", meaning: "gândit", example: "răspunsul bine gândit" },
  { adjective: "acesta", type: "determinativ (demonstrativ)", meaning: "acesta", example: "acest băiat" },
  { adjective: "acel", type: "determinativ (demonstrativ)", meaning: "acel", example: "acel moment" },
  { adjective: "meu", type: "determinativ (posesiv)", meaning: "al meu", example: "cartea mea" },
  { adjective: "tău", type: "determinativ (posesiv)", meaning: "al tău", example: "copilul tău" },
  { adjective: "ce", type: "determinativ (interogativ)", meaning: "ce", example: "ce culoare?" },
  { adjective: "care", type: "determinativ (relativ)", meaning: "care", example: "om care cântă" },
  { adjective: "mult", type: "determinativ (nehotărât)", meaning: "mult", example: "mulți oameni" },
  { adjective: "puțin", type: "determinativ (nehotărât)", meaning: "puțin", example: "puțini bani" },
];

const ADJECTIVE_GRADES = [
  { positive: "frumos", comparative: "mai frumos", superlative: "cel mai frumos", type: "analitic" },
  { positive: "mic", comparative: "mai mic", superlative: "cel mai mic", type: "analitic" },
  { positive: "bun", comparative: "mai bun", superlative: "cel mai bun", type: "analitic" },
  { positive: "rău", comparative: "mai rău", superlative: "cel mai rău", type: "analitic" },
  { positive: "mare", comparative: "mai mare", superlative: "cel mai mare", type: "analitic" },
  { positive: "greu", comparative: "mai greu", superlative: "cel mai greu", type: "analitic" },
  { positive: "ușor", comparative: "mai ușor", superlative: "cel mai ușor", type: "analitic" },
  { positive: "cald", comparative: "mai cald", superlative: "cel mai cald", type: "analitic" },
];

const ADJECTIVE_FUNCTIONS = [
  { sentence: "Un băiat frumos a venit.", adjective: "frumos", function: "atribut adjectival", role: "apare alături de substantiv" },
  { sentence: "Ziua este frumoasă.", adjective: "frumoasă", function: "nume predicativ", role: "după verb de legătură" },
  { sentence: "Flori frumoase, mirositor, mă adorau.", adjective: "frumoase", function: "apoziție", role: "cuvânt apozitiv" },
  { sentence: "Cartea este veche și interesantă.", adjective: "veche", function: "nume predicativ", role: "după copula 'este'" },
  { sentence: "Omul bogat și puternic a vorbit.", adjective: "bogat", function: "atribut adjectival", role: "determină substantivul omul" },
  { sentence: "Els au rămas mulțumiți de rezultat.", adjective: "mulțumiți", function: "nume predicativ", role: "după verb reflexiv" },
];

const NUMERAL_CARDINAL = [
  { number: 1, form: "unu/una", example: "un copil, o fată", type: "cardinal propriu-zis" },
  { number: 2, form: "doi/două", example: "doi băieți, două fete", type: "cardinal propriu-zis" },
  { number: 5, form: "cinci", example: "cinci mere", type: "cardinal propriu-zis" },
  { number: 10, form: "zece", example: "zece persoane", type: "cardinal propriu-zis" },
  { number: 100, form: "o sută", example: "o sută de studenți", type: "cardinal propriu-zis" },
  { number: 3, form: "trei", example: "trei ani", type: "cardinal propriu-zis" },
  { number: 50, form: "cincizeci", example: "cincizeci de pagini", type: "cardinal propriu-zis" },
  { number: 1000, form: "o mie", example: "o mie de metri", type: "cardinal propriu-zis" },
  { number: 1.5, form: "o jumătate", example: "o jumătate din tort", type: "fracționar" },
  { number: 2.5, form: "doi și jumătate", example: "doi și jumătate kilograme", type: "fracționar" },
];

const NUMERAL_ORDINAL = [
  { ordinal: "întâi/prima", english: "first", example: "prima dată", type: "ordinal" },
  { ordinal: "al doilea/a doua", english: "second", example: "al doilea rând", type: "ordinal" },
  { ordinal: "al treilea/a treia", english: "third", example: "a treia zi", type: "ordinal" },
  { ordinal: "al zecelea/a zecelea", english: "tenth", example: "al zecelea exercițiu", type: "ordinal" },
  { ordinal: "dublu/dublă", english: "double", example: "o țintă dublă", type: "multiplicativ" },
  { ordinal: "triplu/triplă", english: "triple", example: "o recompensă triplă", type: "multiplicativ" },
  { ordinal: "câte doi", english: "two by two", example: "mersesc câte doi", type: "distributiv" },
  { ordinal: "câte trei", english: "three by three", example: "grupuri câte trei", type: "distributiv" },
];

// ─── GENERATORS ────────────────────────────────────────────────────────────

function adjectiv_clasificare(seed = 42): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumMCQ[] = [];

  for (let i = 0; i < 10; i++) {
    const adj = pick(ADJECTIVE_TYPES, rng);
    const wrong = ADJECTIVE_TYPES.filter(a => a.type !== adj.type);
    const wrongTypes = [...new Set(wrong.map(a => a.type))];

    questions.push(
      createMCQ(
        "Romanian-C7-P1",
        "adjectiv_clasificare",
        `Cum se clasifică adjectivul "${adj.adjective}" în contextul: "${adj.example}"?`,
        adj.type,
        shuffle(wrongTypes as string[], rng).slice(0, 3) as string[],
        rng
      )
    );
  }

  return shuffle(questions, rng).slice(0, 6);
}

function adjectiv_grade(seed = 42): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumMCQ[] = [];

  for (let i = 0; i < 10; i++) {
    const adj = pick(ADJECTIVE_GRADES, rng);
    const degrees = shuffle(
      [
        adj.positive,
        adj.comparative,
        adj.superlative,
        pick(ADJECTIVE_GRADES.filter(a => a.positive !== adj.positive), rng).superlative,
      ],
      rng
    );

    questions.push(
      createMCQ(
        "Romanian-C7-P1",
        "adjectiv_grade",
        `Care este forma superlativă a adjectivului pozitiv "${adj.positive}"?`,
        adj.superlative,
        [
          pick(ADJECTIVE_GRADES, rng).superlative,
          pick(ADJECTIVE_GRADES, rng).comparative,
          `prea ${adj.positive}`,
        ],
        rng
      )
    );
  }

  return shuffle(questions, rng).slice(0, 6);
}

function adjectiv_functii(seed = 42): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumMCQ[] = [];

  for (let i = 0; i < 10; i++) {
    const func = pick(ADJECTIVE_FUNCTIONS, rng);

    questions.push(
      createMCQ(
        "Romanian-C7-P1",
        "adjectiv_functii",
        `În propoziția "${func.sentence}", adjectivul "${func.adjective}" joacă funcția de:`,
        func.function,
        [
          "adverbial",
          "complement indirect",
          "determinator nominal",
        ],
        rng
      )
    );
  }

  return shuffle(questions, rng).slice(0, 6);
}

function numeral_cardinal(seed = 42): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumMCQ[] = [];

  for (let i = 0; i < 10; i++) {
    const num = pick(NUMERAL_CARDINAL, rng);

    questions.push(
      createMCQ(
        "Romanian-C7-P1",
        "numeral_cardinal",
        `Cum se exprimă "jumătate" în contextul: "${num.example}"?`,
        num.form,
        [
          `${num.number} întreg`,
          `sfert din ${num.number}`,
          `o treime din ${num.number}`,
        ],
        rng
      )
    );
  }

  return shuffle(questions, rng).slice(0, 6);
}

function numeral_ordinal(seed = 42): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumMCQ[] = [];

  for (let i = 0; i < 10; i++) {
    const num = pick(NUMERAL_ORDINAL, rng);

    questions.push(
      createMCQ(
        "Romanian-C7-P1",
        "numeral_ordinal",
        `Care este forma numeralului ordinal/multiplicativ pentru "${num.ordinal}"?`,
        num.ordinal,
        [
          pick(NUMERAL_ORDINAL.filter(n => n.type !== num.type), rng).ordinal,
          pick(NUMERAL_ORDINAL.filter(n => n.type !== num.type), rng).ordinal,
          pick(NUMERAL_CARDINAL, rng).form,
        ],
        rng
      )
    );
  }

  return shuffle(questions, rng).slice(0, 6);
}

// ─── EXPORT ────────────────────────────────────────────────────────────────

export const C7P1_Generators = {
  adjectiv_clasificare,
  adjectiv_grade,
  adjectiv_functii,
  numeral_cardinal,
  numeral_ordinal,
};
