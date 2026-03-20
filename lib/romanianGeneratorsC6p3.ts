// ─── ROMANIAN GENERATORS (CLASA a VI-a) — FAZA 3 ─────────────────────────────────────
// Procedural MCQ question generators for Romanian language curriculum
// Clasa a VI-a (6th grade) – Syntax (subject, predicates, complements, attributes),
// Sentence types (subordinate clauses)

import type { CurriculumQuestion, CurriculumMCQ } from "./curriculumTypes";

// ─── HELPER FUNCTIONS ──────────────────────────────────────────────────────

function mulberry32(seed: number) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
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

const SINTAXA_SUBIECT = [
  { prop: "Maria cântă frumos.", subiect: "Maria", tip_subiect: "substantiv" },
  { prop: "Copiii joacă în parc.", subiect: "Copiii", tip_subiect: "substantiv" },
  { prop: "El vorbește repede.", subiect: "El", tip_subiect: "pronume personal" },
  { prop: "A citi cărți este plăcut.", subiect: "A citi cărți", tip_subiect: "infinitiv" },
  { prop: "Tinerii merg la cinematograf.", subiect: "Tinerii", tip_subiect: "adjectiv substantivat" },
  { prop: "Aceștia construiesc case noi.", subiect: "Aceștia", tip_subiect: "pronume demonstrativ" },
  { prop: "Cine cântă acolo?", subiect: "Cine", tip_subiect: "pronume interogativ" },
  { prop: "Se aude muzică în parc.", subiect: "muzică", tip_subiect: "substantiv" },
];

const SINTAXA_PREDICAT_VERBAL = [
  { prop: "Copilul aleargă în grădină.", predicat: "aleargă", tip: "verb simplu" },
  { prop: "Ea a fost la biografie.", predicat: "a fost", tip: "verb complex (aux + pp)" },
  { prop: "Voi veni mâine.", predicat: "voi veni", tip: "viitor (voi + infinitiv)" },
  { prop: "Ar fi frumos să vii.", predicat: "ar fi", tip: "condițional-opt (aux + particip)" },
];

const SINTAXA_PREDICAT_NOMINAL = [
  { prop: "Copilul este fericit.", predicat: "este fericit", copula: "este", atribut: "fericit" },
  { prop: "Părinții rămân surprinși.", predicat: "rămân surprinși", copula: "rămân", atribut: "surprinși" },
  { prop: "Ea se numește Ana.", predicat: "se numește Ana", copula: "se numește", atribut: "Ana" },
  { prop: "Pădurea pare înspăimântată.", predicat: "pare înspăimântată", copula: "pare", atribut: "înspăimântată" },
];

const SINTAXA_COMPLEMENT_DIRECT = [
  { prop: "Mâncăm pâine la micul dejun.", complement: "pâine", functie: "Complement direct" },
  { prop: "Citesc o carte interesantă.", complement: "o carte interesantă", functie: "Complement direct" },
  { prop: "Văd pe Maria pe stradă.", complement: "pe Maria", functie: "Complement direct" },
  { prop: "Eu ascult muzică cu plăcere.", complement: "muzică", functie: "Complement direct" },
];

const SINTAXA_COMPLEMENT_INDIRECT = [
  { prop: "Îi dau cartea fratelui.", complement: "fratelui", functie: "Complement indirect (dativ)" },
  { prop: "Vorbesc cu prietenul meu.", complement: "cu prietenul meu", functie: "Complement indirect (prepoziție)" },
  { prop: "Se gândește la ziua de mâine.", complement: "la ziua de mâine", functie: "Complement indirect (prepoziție)" },
  { prop: "Scriu pe o foaie albă.", complement: "pe o foaie albă", functie: "Complement indirect (prepoziție)" },
];

const SINTAXA_COMPLEMENT_CIRCUMSTANTIAL = [
  { prop: "Mergem la grădină mâine.", complement: "mâine", tip: "timp" },
  { prop: "Aleargă în curtea școlii.", complement: "în curtea școlii", tip: "loc" },
  { prop: "Cântă cu voce tare.", complement: "cu voce tare", tip: "mod" },
  { prop: "Merge datorită zilei frumoase.", complement: "datorită zilei frumoase", tip: "cauză" },
  { prop: "Lucrează pentru o viaț mai bună.", complement: "pentru o viaț mai bună", tip: "scop" },
];

const SINTAXA_ATRIBUT = [
  { prop: "Fata frumoasă cântă.", atribut: "frumoasă", natura: "adjectiv" },
  { prop: "Cartea lui Ion este nouă.", atribut: "lui Ion", natura: "pronume posesiv" },
  { prop: "Copilul în uniform alb cântă.", atribut: "în uniform alb", natura: "frază prepoziție" },
  { prop: "Băiatul care citește este tăcut.", atribut: "care citește", natura: "propoziție subord. relativ" },
  { prop: "O masă de lemn este frumoasă.", atribut: "de lemn", natura: "grup prepoziție" },
];

const SINTAXA_SUBORD_COMPLETIVE = [
  { prop: "Spun că va veni mâine.", prop_principala: "Spun", prop_subord: "că va veni mâine", tip: "completivă directă" },
  { prop: "Mă întrebă dacă vin astazi.", prop_principala: "Mă întrebă", prop_subord: "dacă vin astazi", tip: "completivă directă" },
  { prop: "Știu cine a făcut aceasta.", prop_principala: "Știu", prop_subord: "cine a făcut aceasta", tip: "completivă directă" },
];

const SINTAXA_SUBORD_CIRCUMSTANTIALE = [
  { prop: "Merg la grădină deoarece vremea e frumoasă.", prop_principala: "Merg la grădină", prop_subord: "deoarece vremea e frumoasă", tip: "cauzală" },
  { prop: "Dacă plouă, nu merg.", prop_principala: "nu merg", prop_subord: "Dacă plouă", tip: "condiție" },
  { prop: "Cred că voi veni înainte de apusul soarelui.", prop_principala: "Cred că voi veni", prop_subord: "înainte de apusul soarelui", tip: "temporală" },
  { prop: "Mânânc cât pot, deși sunt plin.", prop_principala: "Mânânc cât pot", prop_subord: "deși sunt plin", tip: "concesivă" },
];

const SINTAXA_SUBORD_ATRIBUTIVE = [
  { prop: "Fetița care citește este silențioasă.", prop_principala: "Fetița ... este silențioasă", prop_subord: "care citește", tip: "relativă determinativă" },
  { prop: "Copilul, care era obosit, a adormit.", prop_principala: "Copilul ... a adormit", prop_subord: "care era obosit", tip: "relativă explicativă" },
];

// ─── GENERATOR FUNCTIONS ─────────────────────────────────────────────────

export const C6P3_Generators = {
  // SINTAXĂ — SUBIECT
  sintaxa_subiect: (seed: number): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 10; i++) {
      const item = pick(SINTAXA_SUBIECT, rng);
      const q = createMCQ(
        "sintaxa_c6",
        "subiect_c6",
        `În propoziția "${item.prop}", subiectul este "${item.subiect}" care este de tip:`,
        item.tip_subiect,
        ["verb", "adverb", "conjuncție"].filter(x => x !== item.tip_subiect),
        rng
      );
      questions.push(q);
    }
    return questions;
  },

  // SINTAXĂ — PREDICAT VERBAL
  sintaxa_predicat_verbal: (seed: number): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 10; i++) {
      const item = pick(SINTAXA_PREDICAT_VERBAL, rng);
      const q = createMCQ(
        "sintaxa_c6",
        "predicat_verbal_c6",
        `În propoziția "${item.prop}", predicatul verbal este "${item.predicat}" care este:`,
        item.tip,
        ["substantiv", "adjectiv", "pronume"].filter(x => x !== item.tip),
        rng
      );
      questions.push(q);
    }
    return questions;
  },

  // SINTAXĂ — PREDICAT NOMINAL
  sintaxa_predicat_nominal: (seed: number): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 10; i++) {
      const item = pick(SINTAXA_PREDICAT_NOMINAL, rng);
      const q = createMCQ(
        "sintaxa_c6",
        "predicat_nominal_c6",
        `În propoziția "${item.prop}", predicatul nominal este compus din copula "${item.copula}" și atributul:`,
        item.atribut,
        ["care", "dacă", "și"].filter(x => x !== item.atribut),
        rng
      );
      questions.push(q);
    }
    return questions;
  },

  // SINTAXĂ — COMPLEMENT DIRECT
  sintaxa_complement_direct: (seed: number): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 10; i++) {
      const item = pick(SINTAXA_COMPLEMENT_DIRECT, rng);
      const q = createMCQ(
        "sintaxa_c6",
        "complement_direct_c6",
        `În propoziția "${item.prop}", complementul direct este:`,
        item.complement,
        ["mâine", "în parc", "pe care"].filter(x => x !== item.complement),
        rng
      );
      questions.push(q);
    }
    return questions;
  },

  // SINTAXĂ — COMPLEMENT INDIRECT
  sintaxa_complement_indirect: (seed: number): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 10; i++) {
      const item = pick(SINTAXA_COMPLEMENT_INDIRECT, rng);
      const q = createMCQ(
        "sintaxa_c6",
        "complement_indirect_c6",
        `În propoziția "${item.prop}", complementul indirect este:`,
        item.complement,
        ["astazi", "cărți", "pe care"].filter(x => x !== item.complement),
        rng
      );
      questions.push(q);
    }
    return questions;
  },

  // SINTAXĂ — COMPLEMENT CIRCUMSTANȚIAL
  sintaxa_complement_circumstantial: (seed: number): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 10; i++) {
      const item = pick(SINTAXA_COMPLEMENT_CIRCUMSTANTIAL, rng);
      const q = createMCQ(
        "sintaxa_c6",
        "complement_circumstantial_c6",
        `În propoziția "${item.prop}", complementul circumstanțial de "${item.tip}" este:`,
        item.complement,
        ["care", "și", "dacă"].filter(x => x !== item.complement),
        rng
      );
      questions.push(q);
    }
    return questions;
  },

  // SINTAXĂ — ATRIBUT
  sintaxa_atribut: (seed: number): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 10; i++) {
      const item = pick(SINTAXA_ATRIBUT, rng);
      const q = createMCQ(
        "sintaxa_c6",
        "atribut_c6",
        `În propoziția "${item.prop}", atributul este "${item.atribut}" care este:`,
        item.natura,
        ["verb", "adverb", "pronume interogativ"].filter(x => x !== item.natura),
        rng
      );
      questions.push(q);
    }
    return questions;
  },

  // FRAZĂ — SUBORDONATE COMPLETIVE
  fraza_subord_completive: (seed: number): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 10; i++) {
      const item = pick(SINTAXA_SUBORD_COMPLETIVE, rng);
      const q = createMCQ(
        "fraza_c6",
        "subord_completive_c6",
        `În propoziția complexă "${item.prop}", propoziția subordonnată este:`,
        item.prop_subord,
        [`al ${item.prop_principala}`, "care cântă", "pe care"].filter(x => x !== item.prop_subord),
        rng
      );
      questions.push(q);
    }
    return questions;
  },

  // FRAZĂ — SUBORDONATE CIRCUMSTANȚIALE
  fraza_subord_circumstantiale: (seed: number): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 10; i++) {
      const item = pick(SINTAXA_SUBORD_CIRCUMSTANTIALE, rng);
      const q = createMCQ(
        "fraza_c6",
        "subord_circumstantiale_c6",
        `În propoziția complexă "${item.prop}", propoziția subordonnată de "${item.tip}" este:`,
        item.prop_subord,
        [`al ${item.prop_principala}`, "care citește", "pe care"].filter(x => x !== item.prop_subord),
        rng
      );
      questions.push(q);
    }
    return questions;
  },

  // FRAZĂ — SUBORDONATE ATRIBUTIVE
  fraza_subord_atributive: (seed: number): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 10; i++) {
      const item = pick(SINTAXA_SUBORD_ATRIBUTIVE, rng);
      const q = createMCQ(
        "fraza_c6",
        "subord_atributive_c6",
        `În propoziția complexă "${item.prop}", propoziția subordonnată atributivă este:`,
        item.prop_subord,
        ["pe care", "dacă", "deoarece"].filter(x => x !== item.prop_subord),
        rng
      );
      questions.push(q);
    }
    return questions;
  },
};
