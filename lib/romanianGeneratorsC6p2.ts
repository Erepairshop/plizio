// ─── ROMANIAN GENERATORS (CLASA a VI-a) — FAZA 2 ─────────────────────────────────────
// Procedural MCQ question generators for Romanian language curriculum
// Clasa a VI-a (6th grade) – Verbs (non-personal moods, literary tenses, diateses,
// irregular conjugation, agreement), Adverbs & Prepositions

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

const VERB_NEPERSONALE = [
  { infinitiv: "a merge", gerunziu: "mergând", participiu: "mers" },
  { infinitiv: "a citi", gerunziu: "citind", participiu: "citit" },
  { infinitiv: "a scrie", gerunziu: "scriind", participiu: "scris" },
  { infinitiv: "a mânca", gerunziu: "mâncând", participiu: "mâncat" },
  { infinitiv: "a cânta", gerunziu: "cântând", participiu: "cântat" },
  { infinitiv: "a alerga", gerunziu: "alergând", participiu: "alergat" },
  { infinitiv: "a lucra", gerunziu: "lucrând", participiu: "lucrat" },
  { infinitiv: "a dormi", gerunziu: "dormind", participiu: "dormit" },
  { infinitiv: "a vorbi", gerunziu: "vorbind", participiu: "vorbit" },
  { infinitiv: "a bea", gerunziu: "bănd", participiu: "băut" },
];

const VERB_TIMPURI_LITERARE = [
  { verb: "cânta", prezent: "cântă", trecut_simplu: "cântă", trecut_compus: "a cântat", perfectul_simplu: "cântase", plus_perf: "a cântat" },
  { verb: "merge", prezent: "merge", trecut_simplu: "mergea", trecut_compus: "a mers", perfectul_simplu: "mersese", plus_perf: "a mers" },
  { verb: "citi", prezent: "citește", trecut_simplu: "citea", trecut_compus: "a citit", perfectul_simplu: "citise", plus_perf: "a citit" },
  { verb: "scrie", prezent: "scrie", trecut_simplu: "scria", trecut_compus: "a scris", perfectul_simplu: "scrisese", plus_perf: "a scris" },
];

const VERB_DIATEZE = [
  { prop: "Fiul citește cartea.", diateza: "Activă", pasiva: "Cartea este citită de fiu" },
  { prop: "Construiesc o casă.", diateza: "Activă", pasiva: "O casă este construită" },
  { prop: "Maria vinde bicicletă.", diateza: "Activă", pasiva: "Bicicletă este vândută de Maria" },
  { prop: "Profesorul explică lecția.", diateza: "Activă", pasiva: "Lecția este explicată de profesor" },
  { prop: "Elevul scrie o eseu.", diateza: "Activă", pasiva: "O eseu este scrisă de elev" },
];

const VERB_NEREGULATE = [
  { infinitiv: "a fi", eu: "sunt", tu: "ești", el: "este" },
  { infinitiv: "a avea", eu: "am", tu: "ai", el: "are" },
  { infinitiv: "a merge", eu: "merg", tu: "mergi", el: "merge" },
  { infinitiv: "a veni", eu: "vin", tu: "vii", el: "vine" },
  { infinitiv: "a bea", eu: "beau", tu: "bei", el: "bea" },
  { infinitiv: "a lua", eu: "iau", tu: "iei", el: "ia" },
  { infinitiv: "a face", eu: "fac", tu: "faci", el: "face" },
  { infinitiv: "a vedea", eu: "văd", tu: "vezi", el: "vede" },
];

const VERB_ACORD = [
  { prop: "Fiul și fiica citesc.", subiect: "Fiul și fiica", forma_verb: "citesc", acord: "plural" },
  { prop: "Cartea și stiloul sunt noi.", subiect: "Cartea și stiloul", forma_verb: "sunt", acord: "plural" },
  { prop: "Profesorul vorbește.", subiect: "Profesorul", forma_verb: "vorbește", acord: "singular" },
  { prop: "Elevii studiază matematică.", subiect: "Elevii", forma_verb: "studiază", acord: "plural" },
  { prop: "Eu și tu mergem la grădină.", subiect: "Eu și tu", forma_verb: "mergem", acord: "plural (pers 1)" },
];

const ADVERB_TIPURI = [
  { adverb: "rapid", tip: "mod", exemplu: "Copilul alergă rapid" },
  { adverb: "azi", tip: "timp", exemplu: "Azi este o zi frumoasă" },
  { adverb: "sus", tip: "loc", exemplu: "Pasul sus pe deal" },
  { adverb: "mult", tip: "cantitate", exemplu: "Beau mult apă" },
  { adverb: "poate", tip: "mod", exemplu: "Poate vei veni mâine" },
  { adverb: "ieri", tip: "timp", exemplu: "Ieri am jucat fotbal" },
  { adverb: "acolo", tip: "loc", exemplu: "Plec acolo îndată" },
  { adverb: "puțin", tip: "cantitate", exemplu: "Speak puțin mai tare" },
];

const PREPOSITION_CAZURI = [
  { prep: "la", caz: "Dativ/Acuzativ", exemplu: "Merg la grădină" },
  { prep: "din", caz: "Genitiv", exemplu: "Cartea din dulap" },
  { prep: "cu", caz: "Instrumental", exemplu: "Mânânc cu furculița" },
  { prep: "în", caz: "Acuzativ (locul)", exemplu: "Entru în casă" },
  { prep: "pe", caz: "Acuzativ", exemplu: "Pun cartea pe masă" },
  { prep: "sub", caz: "Acuzativ (locul)", exemplu: "Mingea sub masă" },
  { prep: "lângă", caz: "Acuzativ", exemplu: "Stiu lângă geam" },
  { prep: "între", caz: "Acuzativ", exemplu: "Casă între copaci" },
];

const CONJUNCTII = [
  { conj: "și", tip: "coordonatoare (aditivă)", exemplu: "Mărul și para sunt fructe" },
  { conj: "sau", tip: "coordonatoare (disjunctivă)", exemplu: "Vin sau mă întorc" },
  { conj: "dar", tip: "coordonatoare (adversativă)", exemplu: "Plui, dar merg la grădină" },
  { conj: "că", tip: "subordonatoare", exemplu: "Spun că sunt obosit" },
  { conj: "dacă", tip: "subordonatoare", exemplu: "Dacă plouă, nu merg" },
  { conj: "pentru că", tip: "subordonatoare (cauzală)", exemplu: "Nu vin pentru că sunt ocupat" },
];

const INTERJECTII = [
  { interj: "aia!", tip: "bucurie", exemplu: "Aia! Am găsit cheia!" },
  { interj: "ah!", tip: "surpriză", exemplu: "Ah! Nu mă așteptam!" },
  { interj: "hai!", tip: "îndemnare", exemplu: "Hai! Mergem la joacă!" },
  { interj: "bah!", tip: "dispret", exemplu: "Bah! Nu conteaza!" },
  { interj: "vai!", tip: "durere", exemplu: "Vai! Mă doare capul!" },
  { interj: "psst!", tip: "atragere atenție", exemplu: "Psst! Vino încoace!" },
];

// ─── GENERATOR FUNCTIONS ─────────────────────────────────────────────────

export const C6P2_Generators = {
  // VERBE — MODURI NEPERSONALE
  verb_moduri_nepersonale: (seed = 42): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 10; i++) {
      const item = pick(VERB_NEPERSONALE, rng);
      const mode = Math.floor(rng() * 3);
      let correct = "";
      let intreb = "";
      if (mode === 0) {
        correct = item.gerunziu;
        intreb = `Gerunziul verbului "${item.infinitiv}" este:`;
      } else if (mode === 1) {
        correct = item.participiu;
        intreb = `Participiul verbului "${item.infinitiv}" este:`;
      } else {
        correct = item.infinitiv;
        intreb = `Infinitivul cărui verb este "${item.participiu}"?`;
      }
      const q = createMCQ(
        "verb_c6",
        "moduri_nepersonale_c6",
        intreb,
        correct,
        [item.gerunziu, item.participiu, item.infinitiv].filter(x => x !== correct),
        rng
      );
      questions.push(q);
    }
    return questions;
  },

  // VERBE — TIMPURI LITERARE
  verb_timpuri_literare: (seed = 42): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 10; i++) {
      const item = pick(VERB_TIMPURI_LITERARE, rng);
      const timp_options = ["trecut_simplu", "trecut_compus", "perfectul_simplu", "plus_perf"];
      const timp = timp_options[Math.floor(rng() * timp_options.length)] as keyof typeof item;
      const correct = item[timp] as string;
      const q = createMCQ(
        "verb_c6",
        "timpuri_literare_c6",
        `În timp literar, forma pentru "${item.verb}" este "${correct}". Ce timp este acesta?`,
        timp === "trecut_simplu" ? "Trecut simplu" : timp === "trecut_compus" ? "Trecut compus" : timp === "perfectul_simplu" ? "Perfectul simplu" : "Plusquamperfectul",
        ["Prezent", "Viitor", "Condițional"].filter(x => x !== (timp === "trecut_simplu" ? "Trecut simplu" : timp === "trecut_compus" ? "Trecut compus" : timp === "perfectul_simplu" ? "Perfectul simplu" : "Plusquamperfectul")),
        rng
      );
      questions.push(q);
    }
    return questions;
  },

  // VERBE — DIATEZE
  verb_diateze: (seed = 42): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 10; i++) {
      const item = pick(VERB_DIATEZE, rng);
      const q = createMCQ(
        "verb_c6",
        "diateze_c6",
        `Propoziția "${item.prop}" este în diateză:`,
        item.diateza,
        ["Pasivă", "Medie", "Reflexivă"],
        rng
      );
      questions.push(q);
    }
    return questions;
  },

  // VERBE — CONJUGARE NEREGULATĂ
  verb_conjugare_neregulata: (seed = 42): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 10; i++) {
      const item = pick(VERB_NEREGULATE, rng);
      const persoane = ["eu", "tu", "el"] as const;
      const persoana = persoane[Math.floor(rng() * persoane.length)];
      const correct = item[persoana];
      const q = createMCQ(
        "verb_c6",
        "neregulata_c6",
        `Forma pentru persoana "${persoana}" la verbul "${item.infinitiv}" este:`,
        correct,
        [item.eu, item.tu, item.el].filter(x => x !== correct),
        rng
      );
      questions.push(q);
    }
    return questions;
  },

  // VERBE — ACORD SUBIECT-VERB
  verb_acord: (seed = 42): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 10; i++) {
      const item = pick(VERB_ACORD, rng);
      const q = createMCQ(
        "verb_c6",
        "acord_c6",
        `În propoziția "${item.prop}", acordul subiect-verb este în:`,
        item.acord,
        ["singular", "persoana 2", "neutru"],
        rng
      );
      questions.push(q);
    }
    return questions;
  },

  // ADVERB — TIPURI
  adverb_tipuri: (seed = 42): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 10; i++) {
      const item = pick(ADVERB_TIPURI, rng);
      const q = createMCQ(
        "adverb_prepozitie_c6",
        "adverb_tipuri_c6",
        `Adverbul "${item.adverb}" din "${item.exemplu}" este de:`,
        item.tip,
        ["grad", "frecvență", "certitudine"].filter(x => x !== item.tip),
        rng
      );
      questions.push(q);
    }
    return questions;
  },

  // PREPOZIȚIE — CAZURI
  prepozitie_cazuri: (seed = 42): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 10; i++) {
      const item = pick(PREPOSITION_CAZURI, rng);
      const q = createMCQ(
        "adverb_prepozitie_c6",
        "prepozitie_cazuri_c6",
        `Prepoziția "${item.prep}" se folosește cu:`,
        item.caz,
        ["Nominativ", "Vocativ", "Ablativ"].filter(x => !item.caz.includes(x)),
        rng
      );
      questions.push(q);
    }
    return questions;
  },

  // CONJUNCȚIE
  conjunctie: (seed = 42): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 10; i++) {
      const item = pick(CONJUNCTII, rng);
      const q = createMCQ(
        "adverb_prepozitie_c6",
        "conjunctie_c6",
        `Conjuncția "${item.conj}" este:`,
        item.tip,
        ["interjector", "pronume relativ", "articol"].filter(x => x !== item.tip),
        rng
      );
      questions.push(q);
    }
    return questions;
  },

  // INTERJECȚIE
  interjectie: (seed = 42): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 10; i++) {
      const item = pick(INTERJECTII, rng);
      const q = createMCQ(
        "adverb_prepozitie_c6",
        "interjectie_c6",
        `Interjecția "${item.interj}" exprimă:`,
        item.tip,
        ["negație", "condiție", "comparație"].filter(x => x !== item.tip),
        rng
      );
      questions.push(q);
    }
    return questions;
  },
};
