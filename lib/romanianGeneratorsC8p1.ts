// ─── ROMANIAN GENERATORS (CLASA a VIII-a) — FAZA 1 ─────────────────────────────────────
// Procedural MCQ question generators for Romanian language curriculum
// Clasa a VIII-a (8th grade) – Morphology recap, Advanced subordinate clauses
// Flexible & non-flexible word classes recap, Attributive & predicative subordinates
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

const MORFO_FLEXIBILE = [
  { word: "omul frumos", part: "omul", class: "substantiv", feature: "flexibil (caz, gen, nr)", example: "Om → oameni (plural)" },
  { word: "cărți roșii", part: "roșii", class: "adjectiv", feature: "flexibil (caz, gen, nr)", example: "roșie → roșii (plural feminin)" },
  { word: "ei vorbesc", part: "ei", class: "pronume", feature: "flexibil (caz, gen, nr)", example: "el → ei (plural)" },
  { word: "trei cărți", part: "trei", class: "numeral", feature: "flexibil (gen, nr)", example: "trei → trei (invariabil)" },
  { word: "merge bine", part: "merge", class: "verb", feature: "flexibil (mod, timp, persoană)", example: "merg → mergea" },
  { word: "doi băieți", part: "doi", class: "numeral", feature: "flexibil (gen)", example: "doi (m) → două (f)" },
];

const MORFO_NEFLEXIBILE = [
  { word: "foarte frumos", part: "foarte", class: "adverb", feature: "invariabil", type: "de modalitate" },
  { word: "sub masă", part: "sub", class: "prepoziție", feature: "invariabil", type: "de loc/însoțire" },
  { word: "și eu", part: "și", class: "conjuncție", feature: "invariabil", type: "de coordonare" },
  { word: "Aaaaa!", part: "Aaaaa!", class: "interjecție", feature: "invariabil", type: "de admirație/mirare" },
  { word: "în curând", part: "în", class: "prepoziție", feature: "invariabil", type: "de timp" },
  { word: "dar nu", part: "dar", class: "conjuncție", feature: "invariabil", type: "de coordonare (adversativ)" },
];

const SUBORD_ATRIBUTIVA = [
  { sentence: "Cartea care stă pe masă e nouă.", main: "Cartea e nouă", dependent: "care stă pe masă", intro: "care", type: "atributivă" },
  { sentence: "Omul ce vine acolo e profesorul meu.", main: "Omul e profesorul meu", dependent: "ce vine acolo", intro: "ce", type: "atributivă" },
  { sentence: "Flori ale cărora culori sunt frumoase pot fi plantate.", main: "Flori pot fi plantate", dependent: "ale cărora culori sunt frumoase", intro: "ale cărora", type: "atributivă" },
  { sentence: "Copilul cărui jucărie a fost ruptă plânge.", main: "Copilul plânge", dependent: "cărui jucărie a fost ruptă", intro: "cărui", type: "atributivă" },
  { sentence: "Città pe care am vizitat-o e frumoasă.", main: "Oraș e frumos", dependent: "pe care am vizitat-o", intro: "pe care", type: "atributivă" },
  { sentence: "Profesorul din care învățam are experiență.", main: "Profesorul are experiență", dependent: "din care învățam", intro: "din care", type: "atributivă" },
];

const SUBORD_PREDICATIVA = [
  { sentence: "Se pare că va ploua.", main: "Se pare", dependent: "că va ploua", intro: "că", type: "predicativă" },
  { sentence: "E probabil că el nu va veni.", main: "E probabil", dependent: "că el nu va veni", intro: "că", type: "predicativă" },
  { sentence: "Realitatea e că aceasta nu e ușor.", main: "Realitatea e", dependent: "că aceasta nu e ușor", intro: "că", type: "predicativă" },
  { sentence: "Problema e cum să rezolvez asta.", main: "Problema e", dependent: "cum să rezolvez asta", intro: "cum", type: "predicativă" },
  { sentence: "Dorința mea e să merg acolo.", main: "Dorința mea e", dependent: "să merg acolo", intro: "să", type: "predicativă" },
  { sentence: "E clar că trebuie să pleci.", main: "E clar", dependent: "că trebuie să pleci", intro: "că", type: "predicativă" },
];

const SUBORD_CAUZA_SCOP = [
  { sentence: "Nu vorbesc pentru că sunt obosit.", part: "pentru că sunt obosit", type: "de cauză", meaning: "motivul acțiunii" },
  { sentence: "Lucrez ca să câștig bani.", part: "ca să câștig bani", type: "de scop", meaning: "obiectivul acțiunii" },
  { sentence: "Stim fiindcă am fost acolo.", part: "fiindcă am fost acolo", type: "de cauză", meaning: "motivul cunoșterii" },
  { sentence: "M-a chemat pentru a-mi spune vești.", part: "pentru a-mi spune vești", type: "de scop", meaning: "intenția chemării" },
  { sentence: "Sunt trist deci am plorat.", part: "deci am plorat", type: "de consecință", meaning: "rezultatul tristețe" },
  { sentence: "Intrez ușor în caz ca adormi.", part: "în caz că adormi", type: "de condiție", meaning: "circumstanța dormirii" },
];

// ─── GENERATORS ────────────────────────────────────────────────────────────

function morfo_flexibile(seed = 42): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumMCQ[] = [];

  for (let i = 0; i < 10; i++) {
    const morfo = pick(MORFO_FLEXIBILE, rng);

    questions.push(
      createMCQ(
        "Romanian-C8-P1",
        "morfo_flexibile",
        `Cuvântul "${morfo.part}" din propoziția "${morfo.word}" aparține clasei "${morfo.class}" și este flexibil. Care e caracteristica de flexibilitate?`,
        morfo.feature,
        [
          "invariabil (nu se schimbă)",
          pick(MORFO_FLEXIBILE.filter(m => m.class !== morfo.class), rng).feature,
          "flexibil doar la gen",
        ],
        rng
      )
    );
  }

  return shuffle(questions, rng).slice(0, 6);
}

function morfo_neflexibile(seed = 42): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumMCQ[] = [];

  for (let i = 0; i < 10; i++) {
    const morfo = pick(MORFO_NEFLEXIBILE, rng);

    questions.push(
      createMCQ(
        "Romanian-C8-P1",
        "morfo_neflexibile",
        `Cuvântul "${morfo.part}" e o ${morfo.class} neflexibilă (invariabilă). Care e semnificația acestui cuvânt?`,
        morfo.type,
        shuffle(
          [
            pick(MORFO_NEFLEXIBILE.filter(m => m.class !== morfo.class), rng).type,
            pick(MORFO_NEFLEXIBILE.filter(m => m.class !== morfo.class), rng).type,
          ],
          rng
        ),
        rng
      )
    );
  }

  return shuffle(questions, rng).slice(0, 6);
}

function subord_atributiva(seed = 42): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumMCQ[] = [];

  for (let i = 0; i < 10; i++) {
    const subord = pick(SUBORD_ATRIBUTIVA, rng);

    questions.push(
      createMCQ(
        "Romanian-C8-P1",
        "subord_atributiva",
        `Din propoziția "${subord.sentence}", identifică propoziția subordonată atributivă:`,
        subord.dependent,
        [
          subord.main,
          `introdusă de "${subord.intro}"`,
          pick(SUBORD_PREDICATIVA, rng).dependent,
        ],
        rng
      )
    );
  }

  return shuffle(questions, rng).slice(0, 6);
}

function subord_predicativa(seed = 42): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumMCQ[] = [];

  for (let i = 0; i < 10; i++) {
    const subord = pick(SUBORD_PREDICATIVA, rng);

    questions.push(
      createMCQ(
        "Romanian-C8-P1",
        "subord_predicativa",
        `Identifică propoziția subordonată predicativă din: "${subord.sentence}"`,
        subord.dependent,
        [
          subord.main,
          `cu introductorul "${subord.intro}"`,
          pick(SUBORD_ATRIBUTIVA, rng).dependent,
        ],
        rng
      )
    );
  }

  return shuffle(questions, rng).slice(0, 6);
}

function subord_cauza_scop(seed = 42): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumMCQ[] = [];

  for (let i = 0; i < 10; i++) {
    const subord = pick(SUBORD_CAUZA_SCOP, rng);

    questions.push(
      createMCQ(
        "Romanian-C8-P1",
        "subord_cauza_scop",
        `Din "${subord.sentence}", propoziția "${subord.part}" e subordonată circumstanțială de ${subord.type}, cu sensul: "${subord.meaning}"`,
        subord.type,
        shuffle(
          [
            pick(SUBORD_CAUZA_SCOP.filter(s => s.type !== subord.type), rng).type,
            pick(SUBORD_CAUZA_SCOP.filter(s => s.type !== subord.type), rng).type,
          ],
          rng
        ),
        rng
      )
    );
  }

  return shuffle(questions, rng).slice(0, 6);
}

// ─── EXPORT ────────────────────────────────────────────────────────────────

export const C8P1_Generators = {
  morfo_flexibile,
  morfo_neflexibile,
  subord_atributiva,
  subord_predicativa,
  subord_cauza_scop,
};
