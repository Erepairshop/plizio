// ─── ROMANIAN GENERATORS (CLASA a VI-a) — FAZA 1 ─────────────────────────────────────
// Procedural MCQ question generators for Romanian language curriculum
// Clasa a VI-a (6th grade) – Substantive (declension, functions, defective),
// Pronouns (personal, demonstrative, possessive, reflexive, interrogative, indefinite, relative)
//
// Generates ~30 questions per subtopic using seeded PRNG for reproducibility.

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

const SUBSTANTIVE_DECLIN = [
  { nom_sg: "cărți", gen_sg: "cărții", dat_sg: "cărții", acc_sg: "cartea", voc_sg: "carte!",
    nom_pl: "cărți", gen_pl: "cărților", dat_pl: "cărților", acc_pl: "cărțile", voc_pl: "cărți!" },
  { nom_sg: "om", gen_sg: "omului", dat_sg: "omului", acc_sg: "omul", voc_sg: "omenule!",
    nom_pl: "oameni", gen_pl: "oamenilor", dat_pl: "oamenilor", acc_pl: "oamenii", voc_pl: "oameni!" },
  { nom_sg: "casă", gen_sg: "casei", dat_sg: "casei", acc_sg: "casa", voc_sg: "casă!",
    nom_pl: "case", gen_pl: "caselor", dat_pl: "caselor", acc_pl: "casele", voc_pl: "case!" },
  { nom_sg: "copil", gen_sg: "copilului", dat_sg: "copilului", acc_sg: "copilul", voc_sg: "copile!",
    nom_pl: "copii", gen_pl: "copiilor", dat_pl: "copiilor", acc_pl: "copiii", voc_pl: "copii!" },
  { nom_sg: "floare", gen_sg: "florii", dat_sg: "florii", acc_sg: "floarea", voc_sg: "floare!",
    nom_pl: "flori", gen_pl: "florilor", dat_pl: "florilor", acc_pl: "florile", voc_pl: "flori!" },
  { nom_sg: "munte", gen_sg: "muntelui", dat_sg: "muntelui", acc_sg: "muntele", voc_sg: "munte!",
    nom_pl: "munți", gen_pl: "munților", dat_pl: "munților", acc_pl: "munții", voc_pl: "munți!" },
  { nom_sg: "student", gen_sg: "studentului", dat_sg: "studentului", acc_sg: "studentul", voc_sg: "studente!",
    nom_pl: "studenți", gen_pl: "studenților", dat_pl: "studenților", acc_pl: "studenții", voc_pl: "studenți!" },
  { nom_sg: "prieteneasa", gen_sg: "prieteneasei", dat_sg: "prieteneasei", acc_sg: "prieteneasă", voc_sg: "prieteneaso!",
    nom_pl: "prietenease", gen_pl: "prieteneaseor", dat_pl: "prieteneaseor", acc_pl: "prieteneasele", voc_pl: "prietenease!" },
];

const SUBSTANTIVE_FUNCTII = [
  { prop: "Maria citește cărți interesante.", subst: "Maria", functie: "Subiect" },
  { prop: "Ana a văzut pe Alex în parc.", subst: "Alex", functie: "Complement direct" },
  { prop: "Cartea lui Ion este veche.", subst: "Ion", functie: "Complement genitival" },
  { prop: "Dau cartea Mariei.", subst: "Mariei", functie: "Complement indirect" },
  { prop: "Copilul citește cu atenție.", subst: "copilul", functie: "Subiect" },
  { prop: "Am vorbit cu profesorul ieri.", subst: "profesorul", functie: "Complement prepoziția" },
  { prop: "Soarele strălucește deasupra muntelui.", subst: "muntelui", functie: "Complement locativ" },
  { prop: "Plec mâine la école.", subst: "école", functie: "Complement locativ" },
  { prop: "Citesc o carte de povești.", subst: "povești", functie: "Complement genitival" },
  { prop: "Am întâlnit-o pe strada principale.", subst: "strada", functie: "Complement locativ" },
];

const SUBSTANTIVE_DEFECTIVE = [
  { subst: "datorie", forma_lipsa: "plural (datoria nu are plural)" },
  { subst: "gândire", forma_lipsa: "plural (gândirea nu are plural)" },
  { subst: "speranță", forma_lipsa: "plural (speranța nu are plural)" },
  { subst: "milă", forma_lipsa: "plural (mila nu are plural)" },
  { subst: "sarcini", forma_lipsa: "singular (sarcinile nu au singular)" },
  { subst: "obiceiuri", forma_lipsa: "singular (obiceiurile nu au singular)" },
  { subst: "cunoștințe", forma_lipsa: "singular (cunoștințele nu au singular)" },
  { subst: "moșii", forma_lipsa: "singular (moșiile nu au singular)" },
];

const PRONUME_PERSONALE = [
  { pronume: "eu", gen: "1", numar: "singular", caz: "Nominativ" },
  { pronume: "tu", gen: "2", numar: "singular", caz: "Nominativ" },
  { pronume: "el/ea", gen: "3", numar: "singular", caz: "Nominativ" },
  { pronume: "noi", gen: "1", numar: "plural", caz: "Nominativ" },
  { pronume: "voi", gen: "2", numar: "plural", caz: "Nominativ" },
  { pronume: "ei/ele", gen: "3", numar: "plural", caz: "Nominativ" },
  { pronume: "mă", gen: "1", numar: "singular", caz: "Acuzativ" },
  { pronume: "te", gen: "2", numar: "singular", caz: "Acuzativ" },
  { pronume: "îl/o", gen: "3", numar: "singular", caz: "Acuzativ" },
  { pronume: "ne", gen: "1", numar: "plural", caz: "Acuzativ" },
];

const PRONUME_DEMONSTRATIVE = [
  { pronume: "acesta/aceasta", referinta: "apropiat singular" },
  { pronume: "aceștia/acestea", referinta: "apropiat plural" },
  { pronume: "acela/aceea", referinta: "depărtat singular" },
  { pronume: "aceia/alea", referinta: "depărtat plural" },
  { pronume: "asta", referinta: "apropiat (form neutră)" },
  { pronume: "aia", referinta: "depărtat (formă neutră)" },
];

const PRONUME_POSESIVE = [
  { pron_poss: "al meu/a mea/ai mei/ale mele", persoana: "1 sg" },
  { pron_poss: "al tău/a ta/ai tăi/ale tale", persoana: "2 sg" },
  { pron_poss: "al său/a sa/ai săi/ale sale", persoana: "3 sg" },
  { pron_poss: "al nostru/a noastră/ai noștri/ale noastre", persoana: "1 pl" },
  { pron_poss: "al vostru/a voastră/ai voștri/ale voastre", persoana: "2 pl" },
  { pron_poss: "al lor/a lor/ai lor/ale lor", persoana: "3 pl" },
];

const PRONUME_REFLEXIVE = [
  { pron_ref: "mă", verb_ex: "mă gândesc" },
  { pron_ref: "te", verb_ex: "te gândești" },
  { pron_ref: "se", verb_ex: "se gândește" },
  { pron_ref: "ne", verb_ex: "ne gândim" },
  { pron_ref: "vă", verb_ex: "vă gândiți" },
  { pron_ref: "se", verb_ex: "se gândesc" },
];

const PRONUME_INTEROGATIVE = [
  { intreb: "cine?", raspuns: "persoană" },
  { intreb: "ce?", raspuns: "lucru, idee" },
  { intreb: "care?", raspuns: "alăturare la substantiv" },
  { intreb: "cui?", raspuns: "persoană (dativ)" },
  { intreb: "pe cine?", raspuns: "persoană (acuzativ)" },
];

const PRONUME_NEHOTARATE = [
  { pron: "cineva", exemplu: "Cineva a sunat la ușă" },
  { pron: "ceva", exemplu: "Ceva pe acolo nu e bine" },
  { pron: "cine-va", exemplu: "Cine-va ți-a trimis mesaj" },
  { pron: "oricine", exemplu: "Oricine poate veni" },
  { pron: "orice", exemplu: "Orice este posibil" },
  { pron: "fiecare", exemplu: "Fiecare are propria parere" },
];

const PRONUME_RELATIVE = [
  { pron_rel: "care", antecedent: "substantiv/pronume" },
  { pron_rel: "cine", antecedent: "persoană" },
  { pron_rel: "ce", antecedent: "lucru/idee (neobișnuit)" },
  { pron_rel: "cum", antecedent: "mod (cu semnificație relativ)" },
];

// ─── GENERATOR FUNCTIONS ─────────────────────────────────────────────────

export const C6P1_Generators = {
  // SUBSTANTIVE — DECLINARE COMPLETĂ
  subst_declinare: (seed: number): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 10; i++) {
      const item = pick(SUBSTANTIVE_DECLIN, rng);
      const cases = ["Nominativ", "Genitiv", "Dativ", "Acuzativ", "Vocativ"];
      const caseIdx = Math.floor(rng() * cases.length);
      const currentCase = cases[caseIdx];
      let correct = "";
      if (currentCase === "Nominativ") correct = item.nom_sg;
      else if (currentCase === "Genitiv") correct = item.gen_sg;
      else if (currentCase === "Dativ") correct = item.dat_sg;
      else if (currentCase === "Acuzativ") correct = item.acc_sg;
      else if (currentCase === "Vocativ") correct = item.voc_sg;

      const otherForms = [item.gen_sg, item.dat_sg, item.acc_sg, item.voc_sg].filter(f => f !== correct);
      const q = createMCQ(
        "substantiv_c6",
        "declinare_c6",
        `Forma de ${currentCase} a substantivului este:`,
        correct,
        otherForms,
        rng
      );
      questions.push(q);
    }
    return questions;
  },

  // SUBSTANTIVE — FUNCȚII SINTACTICE
  subst_functii_sintactice: (seed: number): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 10; i++) {
      const item = pick(SUBSTANTIVE_FUNCTII, rng);
      const q = createMCQ(
        "substantiv_c6",
        "functii_sintactice_c6",
        `În propoziția "${item.prop}", substantivul "${item.subst}" este:`,
        item.functie,
        ["Predicat nominal", "Atribut", "Complement circumstanțial"].filter(x => x !== item.functie),
        rng
      );
      questions.push(q);
    }
    return questions;
  },

  // SUBSTANTIVE — SUBSTANTIVE DEFECTIVE
  subst_defective: (seed: number): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 10; i++) {
      const item = pick(SUBSTANTIVE_DEFECTIVE, rng);
      const q = createMCQ(
        "substantiv_c6",
        "defective_c6",
        `Substantivul "${item.subst}" este defectiv și nu are:`,
        item.forma_lipsa,
        ["gen indicat", "accent tonic", "varianta sinonimă"].filter(x => !item.forma_lipsa.includes(x)),
        rng
      );
      questions.push(q);
    }
    return questions;
  },

  // PRONUME — PRONUME PERSONALE
  pronume_personale: (seed: number): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 10; i++) {
      const item = pick(PRONUME_PERSONALE, rng);
      const q = createMCQ(
        "pronume_c6",
        "personale_c6",
        `Pronumele "${item.pronume}" este persoana ${item.gen}, numărul ${item.numar}, cazul ${item.caz}. Care din acestea este similar?`,
        `${item.gen}/${item.numar}/${item.caz}`,
        [`2/${item.numar}/${item.caz}`, `${item.gen}/plural/${item.caz}`, `${item.gen}/${item.numar}/Genitiv`],
        rng
      );
      questions.push(q);
    }
    return questions;
  },

  // PRONUME — PRONUME DEMONSTRATIVE
  pronume_demonstrative: (seed: number): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 10; i++) {
      const item = pick(PRONUME_DEMONSTRATIVE, rng);
      const q = createMCQ(
        "pronume_c6",
        "demonstrative_c6",
        `Pronumele demonstrativ "${item.pronume}" se folosește pentru a indica:`,
        item.referinta,
        [`distanță medie (neutră)`, `locuri la distanță mică`, `obiecte care nu se văd`].filter(
          x => x !== item.referinta
        ),
        rng
      );
      questions.push(q);
    }
    return questions;
  },

  // PRONUME — PRONUME POSESIVE
  pronume_posesive: (seed: number): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 10; i++) {
      const item = pick(PRONUME_POSESIVE, rng);
      const q = createMCQ(
        "pronume_c6",
        "posesive_c6",
        `Pronumele posesiv "${item.pron_poss}" corespunde persoanei:`,
        item.persoana,
        ["3 sg", "1 pl", "2 pl"].filter(x => x !== item.persoana),
        rng
      );
      questions.push(q);
    }
    return questions;
  },

  // PRONUME — PRONUME REFLEXIVE
  pronume_reflexive: (seed: number): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 10; i++) {
      const item = pick(PRONUME_REFLEXIVE, rng);
      const q = createMCQ(
        "pronume_c6",
        "reflexive_c6",
        `În expresia "${item.verb_ex}", pronumele reflexiv este:`,
        item.pron_ref,
        ["se", "și", "ți"].filter(x => x !== item.pron_ref),
        rng
      );
      questions.push(q);
    }
    return questions;
  },

  // PRONUME — PRONUME INTEROGATIVE
  pronume_interogative: (seed: number): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 10; i++) {
      const item = pick(PRONUME_INTEROGATIVE, rng);
      const q = createMCQ(
        "pronume_c6",
        "interogative_c6",
        `Pronumele interogativ "${item.intreb}" se folosește pentru a întreba despre:`,
        item.raspuns,
        [`acțiuni trecute`, `calități ale obiectelor`, `relații spațiale`].filter(x => x !== item.raspuns),
        rng
      );
      questions.push(q);
    }
    return questions;
  },

  // PRONUME — PRONUME NEHOTĂRÂTE
  pronume_nehotarate: (seed: number): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 10; i++) {
      const item = pick(PRONUME_NEHOTARATE, rng);
      const q = createMCQ(
        "pronume_c6",
        "nehotarate_c6",
        `În propoziția "${item.exemplu}", pronumele nehotărat este:`,
        item.pron,
        [`ceva-l`, `cineva-i`, `fiecine`].filter(x => x !== item.pron),
        rng
      );
      questions.push(q);
    }
    return questions;
  },

  // PRONUME — PRONUME RELATIVE
  pronume_relative: (seed: number): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 10; i++) {
      const item = pick(PRONUME_RELATIVE, rng);
      const q = createMCQ(
        "pronume_c6",
        "relative_c6",
        `Pronumele relativ "${item.pron_rel}" se referă la:`,
        item.antecedent,
        [`modalitate`, `timp`, `cauză`].filter(x => x !== item.antecedent),
        rng
      );
      questions.push(q);
    }
    return questions;
  },
};
