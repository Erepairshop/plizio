// ─── ROMANIAN GENERATORS (CLASA a VII-a) — FAZA 3 ─────────────────────────────────────
// Procedural MCQ question generators for Romanian language curriculum
// Clasa a VII-a (7th grade) – Subordinate clauses type I
// Subjective, Completive (direct & indirect), Circumstantial (place, time, manner)
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

const SUBORD_SUBIECTIVA = [
  { sentence: "Că elevii sunt atenți e important.", main: "e important", dependent: "Că elevii sunt atenți", intro: "Că", type: "subiectivă" },
  { sentence: "Se știe că o pasiune mare ajută.", main: "Se știe", dependent: "că o pasiune mare ajută", intro: "că", type: "subiectivă" },
  { sentence: "E posibil ca el să vină mâine.", main: "E posibil", dependent: "ca el să vină mâine", intro: "ca", type: "subiectivă" },
  { sentence: "Rămâne de văzut dacă va reuși.", main: "Rămâne de văzut", dependent: "dacă va reuși", intro: "dacă", type: "subiectivă" },
  { sentence: "Crezi tu că pot să vin?", main: "Crezi", dependent: "că pot să vin", intro: "că", type: "subiectivă" },
  { sentence: "Nu se știe încă dacă va plovi.", main: "Nu se știe", dependent: "dacă va plovi", intro: "dacă", type: "subiectivă" },
];

const SUBORD_COMPLETIVA_DIRECTA = [
  { sentence: "Spun că trebuie să pleci.", main: "Spun", dependent: "că trebuie să pleci", intro: "că", type: "completivă directă" },
  { sentence: "Știu cu certitudine că vei reuși.", main: "Știu", dependent: "că vei reuși", intro: "că", type: "completivă directă" },
  { sentence: "Am observat cum lucra el.", main: "Am observat", dependent: "cum lucra el", intro: "cum", type: "completivă directă" },
  { sentence: "Îți ordon să vii imediat.", main: "Îți ordon", dependent: "să vii imediat", intro: "să", type: "completivă directă" },
  { sentence: "Cred că e o greșeală.", main: "Cred", dependent: "că e o greșeală", intro: "că", type: "completivă directă" },
  { sentence: "Am văzut cum s-a întâmplat.", main: "Am văzut", dependent: "cum s-a întâmplat", intro: "cum", type: "completivă directă" },
];

const SUBORD_COMPLETIVA_INDIRECTA = [
  { sentence: "Mă gândesc la ce vei face.", main: "Mă gândesc", dependent: "la ce vei face", prep: "la", intro: "ce", type: "completivă indirectă" },
  { sentence: "Vorbesc despre cum s-a întâmplat.", main: "Vorbesc", dependent: "despre cum s-a întâmplat", prep: "despre", intro: "cum", type: "completivă indirectă" },
  { sentence: "Mă-ntreb cine a făcut asta.", main: "Mă-ntreb", dependent: "cine a făcut asta", prep: "", intro: "cine", type: "completivă indirectă" },
  { sentence: "Stiu cât de greu e.", main: "Stiu", dependent: "cât de greu e", prep: "", intro: "cât", type: "completivă indirectă" },
  { sentence: "Depinde de cât timp ai.", main: "Depinde", dependent: "de cât timp ai", prep: "de", intro: "cât", type: "completivă indirectă" },
  { sentence: "Arată-mi unde locuiești.", main: "Arată-mi", dependent: "unde locuiești", prep: "", intro: "unde", type: "completivă indirectă" },
];

const SUBORD_LOC = [
  { sentence: "Merg unde doresc.", main: "Merg", dependent: "unde doresc", intro: "unde", meaning: "locație" },
  { sentence: "Stau în locul unde am fost înainte.", main: "Stau", dependent: "unde am fost înainte", intro: "unde", meaning: "locație" },
  { sentence: "Mergi acolo pe unde au mers ei.", main: "Mergi", dependent: "pe unde au mers ei", intro: "pe unde", meaning: "locație și direcție" },
  { sentence: "Locuitor în orașul unde m-am născut.", main: "Locuitor", dependent: "unde m-am născut", intro: "unde", meaning: "locație" },
  { sentence: "Vrei să pleci dintr-acolo de unde vii.", main: "Vrei", dependent: "dintr-acolo de unde vii", intro: "de unde", meaning: "locație" },
];

const SUBORD_TIMP = [
  { sentence: "Vin când ai nevoie de mine.", main: "Vin", dependent: "când ai nevoie de mine", intro: "când", meaning: "simultaneitate" },
  { sentence: "După ce am mâncat, am plecat.", main: "am plecat", dependent: "După ce am mâncat", intro: "După ce", meaning: "succesiune" },
  { sentence: "Voi rămâne până când se-ntoarce.", main: "Voi rămâne", dependent: "până când se-ntoarce", intro: "până când", meaning: "durată" },
  { sentence: "De când ai plecat, mă-ntreb unde ești.", main: "mă-ntreb", dependent: "De când ai plecat", intro: "De când", meaning: "punct inițial de timp" },
  { sentence: "Ori de câte ori vin, e prea târziu.", main: "e prea târziu", dependent: "Ori de câte ori vin", intro: "Ori de câte ori", meaning: "repetare" },
];

const SUBORD_MOD = [
  { sentence: "Fă cum ți-am spus.", main: "Fă", dependent: "cum ți-am spus", intro: "cum", meaning: "fel, mod" },
  { sentence: "Merge în felul în care vrea.", main: "Merge", dependent: "în care vrea", intro: "în care", meaning: "fel, mod" },
  { sentence: "Cântă în același mod cum cântam eu.", main: "Cântă", dependent: "cum cântam eu", intro: "cum", meaning: "fel, mod" },
  { sentence: "Lucreaza așa cum ți-am arătat.", main: "Lucreaza", dependent: "cum ți-am arătat", intro: "cum", meaning: "fel, mod" },
  { sentence: "Mănâncă în așa fel încât nu se vede.", main: "Mănâncă", dependent: "încât nu se vede", intro: "încât", meaning: "consecință" },
];

// ─── GENERATORS ────────────────────────────────────────────────────────────

function subord_subiectiva(seed = 42): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumMCQ[] = [];

  for (let i = 0; i < 10; i++) {
    const subord = pick(SUBORD_SUBIECTIVA, rng);

    questions.push(
      createMCQ(
        "Romanian-C7-P3",
        "subord_subiectiva",
        `Identifică propoziția subordonată subiectivă din: "${subord.sentence}"`,
        subord.dependent,
        [
          subord.main,
          `cu introductorul "${subord.intro}"`,
          pick(SUBORD_COMPLETIVA_DIRECTA, rng).dependent,
        ],
        rng
      )
    );
  }

  return shuffle(questions, rng).slice(0, 6);
}

function subord_completiva_directa(seed = 42): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumMCQ[] = [];

  for (let i = 0; i < 10; i++) {
    const subord = pick(SUBORD_COMPLETIVA_DIRECTA, rng);

    questions.push(
      createMCQ(
        "Romanian-C7-P3",
        "subord_completiva_directa",
        `Care este propoziția subordonată completivă directă din: "${subord.sentence}"?`,
        subord.dependent,
        [
          subord.main,
          `introdusă de "${subord.intro}"`,
          pick(SUBORD_COMPLETIVA_INDIRECTA, rng).dependent,
        ],
        rng
      )
    );
  }

  return shuffle(questions, rng).slice(0, 6);
}

function subord_completiva_indirecta(seed = 42): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumMCQ[] = [];

  for (let i = 0; i < 10; i++) {
    const subord = pick(SUBORD_COMPLETIVA_INDIRECTA, rng);

    questions.push(
      createMCQ(
        "Romanian-C7-P3",
        "subord_completiva_indirecta",
        `Identifică propoziția subordonată completivă indirectă din: "${subord.sentence}"`,
        subord.dependent,
        [
          subord.main,
          `cu introductorul "${subord.intro}"`,
          pick(SUBORD_COMPLETIVA_DIRECTA, rng).dependent,
        ],
        rng
      )
    );
  }

  return shuffle(questions, rng).slice(0, 6);
}

function subord_loc(seed = 42): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumMCQ[] = [];

  for (let i = 0; i < 10; i++) {
    const subord = pick(SUBORD_LOC, rng);

    questions.push(
      createMCQ(
        "Romanian-C7-P3",
        "subord_loc",
        `Propoziția subordonată circumstanțială de loc din "${subord.sentence}" este:`,
        subord.dependent,
        [
          subord.main,
          `introdusă de "${subord.intro}"`,
          pick(SUBORD_TIMP, rng).dependent,
        ],
        rng
      )
    );
  }

  return shuffle(questions, rng).slice(0, 6);
}

function subord_timp(seed = 42): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumMCQ[] = [];

  for (let i = 0; i < 10; i++) {
    const subord = pick(SUBORD_TIMP, rng);

    questions.push(
      createMCQ(
        "Romanian-C7-P3",
        "subord_timp",
        `Propoziția subordonată circumstanțială de timp din "${subord.sentence}" este:`,
        subord.dependent,
        [
          subord.main,
          `cu sensul de "${subord.meaning}"`,
          pick(SUBORD_MOD, rng).dependent,
        ],
        rng
      )
    );
  }

  return shuffle(questions, rng).slice(0, 6);
}

function subord_mod(seed = 42): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumMCQ[] = [];

  for (let i = 0; i < 10; i++) {
    const subord = pick(SUBORD_MOD, rng);

    questions.push(
      createMCQ(
        "Romanian-C7-P3",
        "subord_mod",
        `Identifică propoziția subordonată circumstanțială de mod din: "${subord.sentence}"`,
        subord.dependent,
        [
          subord.main,
          `cu introductorul "${subord.intro}"`,
          pick(SUBORD_LOC, rng).dependent,
        ],
        rng
      )
    );
  }

  return shuffle(questions, rng).slice(0, 6);
}

// ─── EXPORT ────────────────────────────────────────────────────────────────

export const C7P3_Generators = {
  subord_subiectiva,
  subord_completiva_directa,
  subord_completiva_indirecta,
  subord_loc,
  subord_timp,
  subord_mod,
};
