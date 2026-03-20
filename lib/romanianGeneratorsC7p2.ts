// ─── ROMANIAN GENERATORS (CLASA a VII-a) — FAZA 2 ─────────────────────────────────────
// Procedural MCQ question generators for Romanian language curriculum
// Clasa a VII-a (7th grade) – Verb moods (personal and non-personal), tenses
// Indicative, Subjunctive, Conditional-Optative, Imperative, Infinitive, Gerund, Participle, Supine
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

const VERB_INDICATIV = [
  { verb: "a merge", present: "merg", past_simple: "am mers", imperfect: "mergeam", pluperfect: "mersesem", future: "voi merge", conditional: "aș merge" },
  { verb: "a vorbi", present: "vorbesc", past_simple: "am vorbit", imperfect: "vorbeam", pluperfect: "vorbisem", future: "voi vorbi", conditional: "aș vorbi" },
  { verb: "a citi", present: "citesc", past_simple: "am citit", imperfect: "citeam", pluperfect: "citisem", future: "voi citi", conditional: "aș citi" },
  { verb: "a mânca", present: "mănânc", past_simple: "am mâncat", imperfect: "mâncam", pluperfect: "mâncasem", future: "voi mânca", conditional: "aș mânca" },
  { verb: "a dormi", present: "dorm", past_simple: "am dormit", imperfect: "dormeam", pluperfect: "dormisem", future: "voi dormi", conditional: "aș dormi" },
  { verb: "a lucra", present: "lucrez", past_simple: "am lucrat", imperfect: "lucram", pluperfect: "lucrasem", future: "voi lucra", conditional: "aș lucra" },
];

const VERB_CONJUNCTIV = [
  { verb: "a merge", present: "merg", perfect: "fi mers", tense: "prezent", use: "dorință, cerere" },
  { verb: "a vorbi", present: "vorbesc", perfect: "fi vorbit", tense: "prezent", use: "dorință, cerere" },
  { verb: "a citi", present: "citesc", perfect: "fi citit", tense: "prezent", use: "dorință, cerere" },
  { verb: "a mânca", present: "mănânc", perfect: "fi mâncat", tense: "prezent", use: "dorință, cerere" },
  { verb: "a dormi", present: "dorm", perfect: "fi dormit", tense: "prezent", use: "dorință, cerere" },
  { verb: "a lucra", present: "lucrez", perfect: "fi lucrat", tense: "prezent", use: "dorință, cerere" },
];

const VERB_CONDITIONAL = [
  { verb: "a merge", conditional_present: "aș merge", conditional_perfect: "aș fi mers", tense: "prezent", meaning: "ipotetic" },
  { verb: "a vorbi", conditional_present: "aș vorbi", conditional_perfect: "aș fi vorbit", tense: "prezent", meaning: "ipotetic" },
  { verb: "a citi", conditional_present: "aș citi", conditional_perfect: "aș fi citit", tense: "prezent", meaning: "ipotetic" },
  { verb: "a mânca", conditional_present: "aș mânca", conditional_perfect: "aș fi mâncat", tense: "prezent", meaning: "ipotetic" },
  { verb: "a dormi", conditional_present: "aș dormi", conditional_perfect: "aș fi dormit", tense: "prezent", meaning: "ipotetic" },
];

const VERB_IMPERATIV = [
  { verb: "a merge", sg2: "mergi", pl2: "mergeți", meaning: "ordin, cerere" },
  { verb: "a vorbi", sg2: "vorbește", pl2: "vorbiți", meaning: "ordin, cerere" },
  { verb: "a citi", sg2: "citește", pl2: "citiți", meaning: "ordin, cerere" },
  { verb: "a mânca", sg2: "mânâncă", pl2: "mâncați", meaning: "ordin, cerere" },
  { verb: "a dormi", sg2: "dormi", pl2: "dormiți", meaning: "ordin, cerere" },
];

const VERB_MODURI_NEPERS = [
  { verb: "a merge", infinitiv: "a merge", gerunziu: "mergând", participiu: "mergător", supin: "mers" },
  { verb: "a vorbi", infinitiv: "a vorbi", gerunziu: "vorbind", participiu: "vorbitor", supin: "vorbit" },
  { verb: "a citi", infinitiv: "a citi", gerunziu: "citind", participiu: "cititor", supin: "citit" },
  { verb: "a mânca", infinitiv: "a mânca", gerunziu: "mâncând", participiu: "mâncător", supin: "mâncat" },
  { verb: "a dormi", infinitiv: "a dormi", gerunziu: "dormind", participiu: "dormitor", supin: "dormit" },
  { verb: "a lucra", infinitiv: "a lucra", gerunziu: "lucrând", participiu: "lucrător", supin: "lucrat" },
];

const VERB_DIATEZE = [
  { active: "Elevul citește cartea.", passive: "Cartea este citită de elev.", reflexive: "Elevul se-și iartă greșelile.", type: "diateza activă" },
  { active: "Profesorul explică lecția.", passive: "Lecția este explicată de profesor.", reflexive: "Profesorul se gândește la lecție.", type: "diateza activă" },
  { active: "Maria scrie scrisori.", passive: "Scrisorile sunt scrise de Maria.", reflexive: "Maria se îmbrăcă frumos.", type: "diateza activă" },
  { active: "Băiatul cântă cântecul.", passive: "Cântecul este cântat de băiat.", reflexive: "Băiatul se-și perie dinții.", type: "diateza activă" },
];

// ─── GENERATORS ────────────────────────────────────────────────────────────

function verb_indicativ(seed = 42): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumMCQ[] = [];

  for (let i = 0; i < 10; i++) {
    const verb = pick(VERB_INDICATIV, rng);
    const tense = pick(["present", "past_simple", "imperfect", "future"], rng);
    const form = verb[tense as keyof typeof verb] as string;

    questions.push(
      createMCQ(
        "Romanian-C7-P2",
        "verb_indicativ",
        `Care este forma indicativului în timp ${tense} pentru verbul "${verb.verb}"?`,
        form,
        [
          pick(VERB_INDICATIV.filter(v => v.verb !== verb.verb), rng)[tense as keyof typeof verb] as string,
          pick(VERB_INDICATIV.filter(v => v.verb !== verb.verb), rng)[tense as keyof typeof verb] as string,
          `s-ar ${verb.verb.slice(2)}`,
        ],
        rng
      )
    );
  }

  return shuffle(questions, rng).slice(0, 6);
}

function verb_conjunctiv(seed = 42): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumMCQ[] = [];

  for (let i = 0; i < 10; i++) {
    const verb = pick(VERB_CONJUNCTIV, rng);
    const tense = pick(["present", "perfect"], rng);
    const form = verb[tense as keyof typeof verb] as string;

    questions.push(
      createMCQ(
        "Romanian-C7-P2",
        "verb_conjunctiv",
        `Care este forma conjunctivului în timp ${tense} pentru verbul "${verb.verb}" cu înțelesul "${verb.use}"?`,
        form,
        [
          `în ${tense}`,
          `s-ar ${verb.verb.slice(2)}`,
          pick(VERB_CONJUNCTIV.filter(v => v.verb !== verb.verb), rng)[tense as keyof typeof verb] as string,
        ],
        rng
      )
    );
  }

  return shuffle(questions, rng).slice(0, 6);
}

function verb_conditional_imperativ(seed = 42): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumMCQ[] = [];

  for (let i = 0; i < 10; i++) {
    const verb = pick(VERB_CONDITIONAL, rng);
    const tense = pick(["conditional_present", "conditional_perfect"], rng);
    const form = verb[tense as keyof typeof verb] as string;

    questions.push(
      createMCQ(
        "Romanian-C7-P2",
        "verb_conditional_imperativ",
        `Care este forma condițional-optativului pentru verbul "${verb.verb}" în timp ${tense.replace("_", "-")}?`,
        form,
        [
          `${verb.verb.slice(2)} ipotetic`,
          pick(VERB_CONDITIONAL.filter(v => v.verb !== verb.verb), rng)[tense as keyof typeof verb] as string,
          `ar trebui să ${verb.verb.slice(2)}`,
        ],
        rng
      )
    );
  }

  return shuffle(questions, rng).slice(0, 6);
}

function verb_moduri_nepers_c7(seed = 42): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumMCQ[] = [];

  for (let i = 0; i < 10; i++) {
    const verb = pick(VERB_MODURI_NEPERS, rng);
    const form = pick(["infinitiv", "gerunziu", "participiu", "supin"], rng);
    const value = verb[form as keyof typeof verb] as string;

    questions.push(
      createMCQ(
        "Romanian-C7-P2",
        "verb_moduri_nepers_c7",
        `Care este forma ${form} a verbului "${verb.verb}" în context?`,
        value,
        [
          pick(VERB_MODURI_NEPERS.filter(v => v.verb !== verb.verb), rng)[form as keyof typeof verb] as string,
          pick(VERB_MODURI_NEPERS.filter(v => v.verb !== verb.verb), rng)[form as keyof typeof verb] as string,
          `a ${verb.verb.slice(2)}`,
        ],
        rng
      )
    );
  }

  return shuffle(questions, rng).slice(0, 6);
}

function verb_diateze_c7(seed = 42): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumMCQ[] = [];

  for (let i = 0; i < 10; i++) {
    const diateza = pick(VERB_DIATEZE, rng);
    const type = pick(["active", "passive", "reflexive"], rng);

    questions.push(
      createMCQ(
        "Romanian-C7-P2",
        "verb_diateze_c7",
        `Identifică diateза din propoziția: "${diateza[type as keyof typeof diateza]}"`,
        type,
        ["diateza " + pick(["activă", "pasivă", "reflexivă"].filter(d => d !== type), rng), "diateza " + pick(["activă", "pasivă", "reflexivă"].filter(d => d !== type), rng), "mod ipotetic"],
        rng
      )
    );
  }

  return shuffle(questions, rng).slice(0, 6);
}

// ─── EXPORT ────────────────────────────────────────────────────────────────

export const C7P2_Generators = {
  verb_indicativ,
  verb_conjunctiv,
  verb_conditional_imperativ,
  verb_moduri_nepers_c7,
  verb_diateze_c7,
};
