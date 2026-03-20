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

/** Create typing question */
function createTyping(topic: string, subtopic: string, question: string, answer: string): CurriculumQuestion {
  return { type: "typing", topic, subtopic, question, answer: answer.toLowerCase().trim() };
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
  const questionPool: CurriculumMCQ[] = [];

  // Build 30 unique questions by cycling through adjectives and question variants
  for (let i = 0; i < 30; i++) {
    const adj = ADJECTIVE_TYPES[i % ADJECTIVE_TYPES.length];
    const wrong = ADJECTIVE_TYPES.filter(a => a.type !== adj.type);
    const wrongTypes = [...new Set(wrong.map(a => a.type))];

    questionPool.push(
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

  return shuffle(questionPool, rng).slice(0, 6);
}

function adjectiv_grade(seed = 42): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questionPool: CurriculumMCQ[] = [];

  // Build 30 unique questions by cycling through adjectives and varying question types
  for (let i = 0; i < 30; i++) {
    const adj = ADJECTIVE_GRADES[i % ADJECTIVE_GRADES.length];
    const variantType = Math.floor(i / ADJECTIVE_GRADES.length);
    let correct = "";
    let question = "";
    let wrongOpts: string[] = [];

    if (variantType === 0) {
      // Superlative form
      correct = adj.superlative;
      question = `Care este forma superlativă a adjectivului pozitiv "${adj.positive}"?`;
      wrongOpts = [
        ADJECTIVE_GRADES[(i + 1) % ADJECTIVE_GRADES.length].superlative,
        ADJECTIVE_GRADES[(i + 2) % ADJECTIVE_GRADES.length].comparative,
        `prea ${adj.positive}`,
      ];
    } else if (variantType === 1) {
      // Comparative form
      correct = adj.comparative;
      question = `Care este forma comparativă a adjectivului "${adj.positive}"?`;
      wrongOpts = [
        ADJECTIVE_GRADES[(i + 1) % ADJECTIVE_GRADES.length].comparative,
        adj.superlative,
        `puțin ${adj.positive}`,
      ];
    } else {
      // Positive from comparative/superlative
      correct = adj.positive;
      question = `Care este forma pozitivă a adjectivului pentru "${adj.comparative}"?`;
      wrongOpts = [
        ADJECTIVE_GRADES[(i + 1) % ADJECTIVE_GRADES.length].positive,
        ADJECTIVE_GRADES[(i + 2) % ADJECTIVE_GRADES.length].positive,
        `mai ${adj.positive}`,
      ];
    }

    questionPool.push(createMCQ("Romanian-C7-P1", "adjectiv_grade", question, correct, wrongOpts, rng));
  }

  return shuffle(questionPool, rng).slice(0, 6);
}

function adjectiv_functii(seed = 42): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questionPool: CurriculumMCQ[] = [];

  // Build 30 unique questions by cycling through adjective functions and varying question types
  for (let i = 0; i < 30; i++) {
    const func = ADJECTIVE_FUNCTIONS[i % ADJECTIVE_FUNCTIONS.length];
    const variantType = i % 3;

    let question = "";
    let correct = "";
    let wrongOpts: string[] = [];

    if (variantType === 0) {
      question = `În propoziția "${func.sentence}", adjectivul "${func.adjective}" joacă funcția de:`;
      correct = func.function;
      wrongOpts = ["adverbial", "complement indirect", "determinator nominal"];
    } else if (variantType === 1) {
      question = `Adjectivul "${func.adjective}" din "${func.sentence}" exprimă:`;
      correct = func.role;
      wrongOpts = ["deoarece", "în mod adverbial", "ca determinant"];
    } else {
      question = `Ce rol joacă adjectivul în: "${func.sentence}"?`;
      correct = func.function;
      wrongOpts = ["predicat nominal", "modifier de verb", "complement prepoziție"];
    }

    questionPool.push(createMCQ("Romanian-C7-P1", "adjectiv_functii", question, correct, wrongOpts, rng));
  }

  return shuffle(questionPool, rng).slice(0, 6);
}

function numeral_cardinal(seed = 42): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questionPool: CurriculumMCQ[] = [];

  // Build 30 unique questions by cycling through cardinals and varying question types
  for (let i = 0; i < 30; i++) {
    const num = NUMERAL_CARDINAL[i % NUMERAL_CARDINAL.length];
    const variantType = Math.floor(i / NUMERAL_CARDINAL.length);

    let question = "";
    let correct = "";
    let wrongOpts: string[] = [];

    if (variantType === 0) {
      question = `Cum se exprimă "${num.form}" în contextul: "${num.example}"?`;
      correct = num.form;
      wrongOpts = [`${num.number} întreg`, `sfert din ${num.number}`, `o treime din ${num.number}`];
    } else if (variantType === 1) {
      question = `Numeralul cardinal pentru "${num.example}" este:`;
      correct = num.form;
      wrongOpts = [
        NUMERAL_CARDINAL[(i + 1) % NUMERAL_CARDINAL.length].form,
        NUMERAL_CARDINAL[(i + 2) % NUMERAL_CARDINAL.length].form,
        `aproximativ ${num.form}`,
      ];
    } else {
      question = `Care din următoarele nu este o formă a "${num.form}"?`;
      correct = NUMERAL_CARDINAL[(i + 3) % NUMERAL_CARDINAL.length].form;
      wrongOpts = [num.form, NUMERAL_CARDINAL[(i + 1) % NUMERAL_CARDINAL.length].form, NUMERAL_CARDINAL[(i + 2) % NUMERAL_CARDINAL.length].form];
    }

    questionPool.push(createMCQ("Romanian-C7-P1", "numeral_cardinal", question, correct, wrongOpts, rng));
  }

  return shuffle(questionPool, rng).slice(0, 6);
}

function numeral_ordinal(seed = 42): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questionPool: CurriculumMCQ[] = [];

  // Build 30 unique questions by cycling through ordinals and varying question types
  for (let i = 0; i < 30; i++) {
    const num = NUMERAL_ORDINAL[i % NUMERAL_ORDINAL.length];
    const variantType = i % 3;

    let question = "";
    let correct = "";
    let wrongOpts: string[] = [];

    if (variantType === 0) {
      question = `Care este forma numeralului ordinal/multiplicativ pentru "${num.ordinal}"?`;
      correct = num.ordinal;
      wrongOpts = [
        NUMERAL_ORDINAL[(i + 1) % NUMERAL_ORDINAL.length].ordinal,
        NUMERAL_ORDINAL[(i + 2) % NUMERAL_ORDINAL.length].ordinal,
        NUMERAL_CARDINAL[i % NUMERAL_CARDINAL.length].form,
      ];
    } else if (variantType === 1) {
      question = `Numeralul "${num.ordinal}" este de tip:`;
      correct = num.type;
      wrongOpts = [
        NUMERAL_ORDINAL[(i + 1) % NUMERAL_ORDINAL.length].type,
        NUMERAL_ORDINAL[(i + 2) % NUMERAL_ORDINAL.length].type,
        "cardinal",
      ];
    } else {
      question = `Cum se exprimă "dublu" sau "triplu" în limba română? Exemplu: "${num.english}"`;
      correct = num.ordinal;
      wrongOpts = [
        NUMERAL_ORDINAL[(i + 3) % NUMERAL_ORDINAL.length].ordinal,
        num.english,
        `doi ori ${num.english}`,
      ];
    }

    questionPool.push(createMCQ("Romanian-C7-P1", "numeral_ordinal", question, correct, wrongOpts, rng));
  }

  return shuffle(questionPool, rng).slice(0, 6);
}

// ─── TYPING QUESTION GENERATORS ────────────────────────────────────────────

function adjectiv_clasificare_typing(seed = 42): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumQuestion[] = [];
  const items = [
    { sentence: "o casă _________", answer: "frumoasă", hint: "adjectiv propriu-zis (feminin)" },
    { sentence: "un cer _________", answer: "albastru", hint: "adjectiv propriu-zis (masculin)" },
    { sentence: "cartea _________ (care aparține mie)", answer: "mea", hint: "adjectiv posesiv" },
    { sentence: "acel _________ (care este acolo)", answer: "moment", hint: "adjectiv demonstrativ" },
    { sentence: "_________ copii joacă în parc", answer: "mulți", hint: "adjectiv nehotărât (plural)" },
  ];
  for (let i = 0; i < 6; i++) {
    const item = pick(items, rng);
    questions.push(createTyping("Romanian-C7-P1", "adjectiv_clasificare", `Completează: ${item.sentence}`, item.answer));
  }
  return questions;
}

function adjectiv_grade_typing(seed = 42): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumQuestion[] = [];
  const items = [
    { positive: "frumos", comparative: "mai frumos", hint: "gradul comparativ" },
    { positive: "mic", comparative: "mai mic", hint: "gradul comparativ" },
    { positive: "mare", superlative: "cel mai mare", hint: "gradul superlativ" },
    { positive: "bun", comparative: "mai bun", hint: "gradul comparativ (bun→mai bun)" },
  ];
  for (let i = 0; i < 6; i++) {
    const item = pick(items, rng);
    const isComp = rng() > 0.5;
    const question = isComp
      ? `Gradul comparativ al adjectivului "${item.positive}" este: ________`
      : `Gradul superlativ al adjectivului "${(items.find(x => x.superlative) || items[0]).positive}" este: ________`;
    const answer = isComp ? item.comparative : (items.find(x => x.superlative) || items[2]).superlative;
    questions.push(createTyping("Romanian-C7-P1", "adjectiv_grade", question, answer ?? ""));
  }
  return questions;
}

function adjectiv_functii_typing(seed = 42): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumQuestion[] = [];
  const items = [
    { sentence: "un băiat frumos", function: "atribut adjectival" },
    { sentence: "Ziua este frumoasă", function: "nume predicativ" },
    { sentence: "Omul bogat și puternic", function: "atribut adjectival" },
    { sentence: "Rămâi mulțumit", function: "nume predicativ" },
  ];
  for (let i = 0; i < 6; i++) {
    const item = pick(items, rng);
    questions.push(
      createTyping("Romanian-C7-P1", "adjectiv_functii", `Funcția adjectivului din "${item.sentence}" este: ________`, item.function)
    );
  }
  return questions;
}

function numeral_cardinal_typing(seed = 42): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumQuestion[] = [];
  const items = [
    { cardinal: "unu", en_form: "one", Romanian_word: "unu" },
    { cardinal: "doi", en_form: "two", Romanian_word: "doi" },
    { cardinal: "trei", en_form: "three", Romanian_word: "trei" },
    { cardinal: "patru", en_form: "four", Romanian_word: "patru" },
    { cardinal: "cinci", en_form: "five", Romanian_word: "cinci" },
    { cardinal: "zece", en_form: "ten", Romanian_word: "zece" },
    { cardinal: "douăzeci", en_form: "twenty", Romanian_word: "douăzeci" },
    { cardinal: "o sută", en_form: "one hundred", Romanian_word: "o sută" },
  ];
  for (let i = 0; i < 6; i++) {
    const item = pick(items, rng);
    questions.push(
      createTyping("Romanian-C7-P1", "numeral_cardinal", `Numeralul cardinal pentru ${item.en_form} este: ________`, item.cardinal)
    );
  }
  return questions;
}

function numeral_ordinal_typing(seed = 42): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumQuestion[] = [];
  const items = [
    { cardinal: "unu", ordinal: "primul" },
    { cardinal: "doi", ordinal: "al doilea" },
    { cardinal: "trei", ordinal: "al treilea" },
    { cardinal: "patru", ordinal: "al patrulea" },
    { cardinal: "cinci", ordinal: "al cincilea" },
    { cardinal: "zece", ordinal: "al zecelea" },
  ];
  for (let i = 0; i < 6; i++) {
    const item = pick(items, rng);
    questions.push(
      createTyping("Romanian-C7-P1", "numeral_ordinal", `Numeralul ordinal pentru ${item.cardinal} este: ________`, item.ordinal)
    );
  }
  return questions;
}

// ─── EXPORT ────────────────────────────────────────────────────────────────

export const C7P1_Generators = {
  adjectiv_clasificare,
  adjectiv_grade,
  adjectiv_functii,
  numeral_cardinal,
  numeral_ordinal,
  adjectiv_clasificare_typing,
  adjectiv_grade_typing,
  adjectiv_functii_typing,
  numeral_cardinal_typing,
  numeral_ordinal_typing,
};
