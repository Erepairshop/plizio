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

/** Create typing question */
function createTyping(topic: string, subtopic: string, question: string, answer: string): CurriculumQuestion {
  return { type: "typing", topic, subtopic, question, answer: answer.toLowerCase().trim() };
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

// Each entry: forme for el/ea (3rd person singular) unless noted
// imperfect = imperfect (el/ea), perf_simplu = perfect simplu (el/ea), mai_mult = mai mult ca perfect (el/ea)
const VERB_TIMPURI_LITERARE_EXT = [
  {
    verb: "a cânta",
    forme: [
      { forma: "cântai", timp: "Perfect simplu (eu)", wrongTimps: ["Imperfect", "Mai mult ca perfect", "Prezent"] },
      { forma: "cântam", timp: "Imperfect (eu)", wrongTimps: ["Perfect simplu", "Mai mult ca perfect", "Prezent"] },
      { forma: "cântasem", timp: "Mai mult ca perfect (eu)", wrongTimps: ["Perfect simplu", "Imperfect", "Prezent"] },
      { forma: "cântase", timp: "Mai mult ca perfect (el)", wrongTimps: ["Perfect simplu", "Imperfect", "Prezent"] },
      { forma: "cântă", timp: "Imperfect (el)", wrongTimps: ["Perfect simplu", "Prezent", "Mai mult ca perfect"] },
    ],
  },
  {
    verb: "a dansa",
    forme: [
      { forma: "dansai", timp: "Perfect simplu (eu)", wrongTimps: ["Imperfect", "Mai mult ca perfect", "Prezent"] },
      { forma: "dansam", timp: "Imperfect (eu)", wrongTimps: ["Perfect simplu", "Mai mult ca perfect", "Prezent"] },
      { forma: "dansasem", timp: "Mai mult ca perfect (eu)", wrongTimps: ["Perfect simplu", "Imperfect", "Prezent"] },
      { forma: "dansa", timp: "Imperfect (el)", wrongTimps: ["Perfect simplu", "Prezent", "Mai mult ca perfect"] },
      { forma: "dansase", timp: "Mai mult ca perfect (el)", wrongTimps: ["Imperfect", "Perfect simplu", "Prezent"] },
    ],
  },
  {
    verb: "a pleca",
    forme: [
      { forma: "plecai", timp: "Perfect simplu (eu)", wrongTimps: ["Imperfect", "Mai mult ca perfect", "Prezent"] },
      { forma: "plecam", timp: "Imperfect (eu)", wrongTimps: ["Perfect simplu", "Mai mult ca perfect", "Prezent"] },
      { forma: "plecasem", timp: "Mai mult ca perfect (eu)", wrongTimps: ["Perfect simplu", "Imperfect", "Prezent"] },
      { forma: "pleca", timp: "Imperfect (el)", wrongTimps: ["Perfect simplu", "Prezent", "Mai mult ca perfect"] },
      { forma: "plecase", timp: "Mai mult ca perfect (el)", wrongTimps: ["Imperfect", "Perfect simplu", "Prezent"] },
    ],
  },
  {
    verb: "a veni",
    forme: [
      { forma: "venii", timp: "Perfect simplu (eu)", wrongTimps: ["Imperfect", "Mai mult ca perfect", "Prezent"] },
      { forma: "veneam", timp: "Imperfect (eu)", wrongTimps: ["Perfect simplu", "Mai mult ca perfect", "Prezent"] },
      { forma: "venisem", timp: "Mai mult ca perfect (eu)", wrongTimps: ["Perfect simplu", "Imperfect", "Prezent"] },
      { forma: "venea", timp: "Imperfect (el)", wrongTimps: ["Perfect simplu", "Prezent", "Mai mult ca perfect"] },
      { forma: "venise", timp: "Mai mult ca perfect (el)", wrongTimps: ["Imperfect", "Perfect simplu", "Prezent"] },
    ],
  },
  {
    verb: "a vedea",
    forme: [
      { forma: "văzui", timp: "Perfect simplu (eu)", wrongTimps: ["Imperfect", "Mai mult ca perfect", "Prezent"] },
      { forma: "vedeam", timp: "Imperfect (eu)", wrongTimps: ["Perfect simplu", "Mai mult ca perfect", "Prezent"] },
      { forma: "văzusem", timp: "Mai mult ca perfect (eu)", wrongTimps: ["Perfect simplu", "Imperfect", "Prezent"] },
      { forma: "vedea", timp: "Imperfect (el)", wrongTimps: ["Perfect simplu", "Prezent", "Mai mult ca perfect"] },
      { forma: "văzuse", timp: "Mai mult ca perfect (el)", wrongTimps: ["Imperfect", "Perfect simplu", "Prezent"] },
    ],
  },
  {
    verb: "a afla",
    forme: [
      { forma: "aflai", timp: "Perfect simplu (eu)", wrongTimps: ["Imperfect", "Mai mult ca perfect", "Prezent"] },
      { forma: "aflam", timp: "Imperfect (eu)", wrongTimps: ["Perfect simplu", "Mai mult ca perfect", "Prezent"] },
      { forma: "aflasem", timp: "Mai mult ca perfect (eu)", wrongTimps: ["Perfect simplu", "Imperfect", "Prezent"] },
      { forma: "afla", timp: "Imperfect (el)", wrongTimps: ["Perfect simplu", "Prezent", "Mai mult ca perfect"] },
      { forma: "aflase", timp: "Mai mult ca perfect (el)", wrongTimps: ["Imperfect", "Perfect simplu", "Prezent"] },
    ],
  },
  {
    verb: "a ajunge",
    forme: [
      { forma: "ajunsei", timp: "Perfect simplu (eu)", wrongTimps: ["Imperfect", "Mai mult ca perfect", "Prezent"] },
      { forma: "ajungeam", timp: "Imperfect (eu)", wrongTimps: ["Perfect simplu", "Mai mult ca perfect", "Prezent"] },
      { forma: "ajunsesem", timp: "Mai mult ca perfect (eu)", wrongTimps: ["Perfect simplu", "Imperfect", "Prezent"] },
      { forma: "ajungea", timp: "Imperfect (el)", wrongTimps: ["Perfect simplu", "Prezent", "Mai mult ca perfect"] },
      { forma: "ajunsese", timp: "Mai mult ca perfect (el)", wrongTimps: ["Imperfect", "Perfect simplu", "Prezent"] },
    ],
  },
  {
    verb: "a citi",
    forme: [
      { forma: "citii", timp: "Perfect simplu (eu)", wrongTimps: ["Imperfect", "Mai mult ca perfect", "Prezent"] },
      { forma: "citeam", timp: "Imperfect (eu)", wrongTimps: ["Perfect simplu", "Mai mult ca perfect", "Prezent"] },
      { forma: "citisem", timp: "Mai mult ca perfect (eu)", wrongTimps: ["Perfect simplu", "Imperfect", "Prezent"] },
      { forma: "citea", timp: "Imperfect (el)", wrongTimps: ["Perfect simplu", "Prezent", "Mai mult ca perfect"] },
      { forma: "citise", timp: "Mai mult ca perfect (el)", wrongTimps: ["Imperfect", "Perfect simplu", "Prezent"] },
    ],
  },
  {
    verb: "a scrie",
    forme: [
      { forma: "scrisei", timp: "Perfect simplu (eu)", wrongTimps: ["Imperfect", "Mai mult ca perfect", "Prezent"] },
      { forma: "scriam", timp: "Imperfect (eu)", wrongTimps: ["Perfect simplu", "Mai mult ca perfect", "Prezent"] },
      { forma: "scrisesem", timp: "Mai mult ca perfect (eu)", wrongTimps: ["Perfect simplu", "Imperfect", "Prezent"] },
      { forma: "scria", timp: "Imperfect (el)", wrongTimps: ["Perfect simplu", "Prezent", "Mai mult ca perfect"] },
      { forma: "scrisese", timp: "Mai mult ca perfect (el)", wrongTimps: ["Imperfect", "Perfect simplu", "Prezent"] },
    ],
  },
  {
    verb: "a merge",
    forme: [
      { forma: "mersei", timp: "Perfect simplu (eu)", wrongTimps: ["Imperfect", "Mai mult ca perfect", "Prezent"] },
      { forma: "mergeam", timp: "Imperfect (eu)", wrongTimps: ["Perfect simplu", "Mai mult ca perfect", "Prezent"] },
      { forma: "mersesem", timp: "Mai mult ca perfect (eu)", wrongTimps: ["Perfect simplu", "Imperfect", "Prezent"] },
      { forma: "mergea", timp: "Imperfect (el)", wrongTimps: ["Perfect simplu", "Prezent", "Mai mult ca perfect"] },
      { forma: "mersese", timp: "Mai mult ca perfect (el)", wrongTimps: ["Imperfect", "Perfect simplu", "Prezent"] },
    ],
  },
];

// Flattened pool of all (forma, timp, wrongTimps) entries
const VERB_TIMPURI_LITERARE = VERB_TIMPURI_LITERARE_EXT.flatMap(v =>
  v.forme.map(f => ({ verb: v.verb, forma: f.forma, timp: f.timp, wrongTimps: f.wrongTimps }))
);

const VERB_DIATEZE = [
  // Activ
  { prop: "Fiul citește cartea.", diateza: "Activă", wrongDiateze: ["Pasivă", "Reflexivă"] },
  { prop: "Construiesc o casă.", diateza: "Activă", wrongDiateze: ["Pasivă", "Reflexivă"] },
  { prop: "Maria scrie o scrisoare.", diateza: "Activă", wrongDiateze: ["Pasivă", "Reflexivă"] },
  { prop: "Profesorul explică lecția.", diateza: "Activă", wrongDiateze: ["Pasivă", "Reflexivă"] },
  { prop: "Ion citește ziarul.", diateza: "Activă", wrongDiateze: ["Pasivă", "Reflexivă"] },
  { prop: "Copilul mănâncă mere.", diateza: "Activă", wrongDiateze: ["Pasivă", "Reflexivă"] },
  { prop: "Mama pregătește masa.", diateza: "Activă", wrongDiateze: ["Pasivă", "Reflexivă"] },
  { prop: "Elevii rezolvă problema.", diateza: "Activă", wrongDiateze: ["Pasivă", "Reflexivă"] },
  { prop: "Tatăl repară mașina.", diateza: "Activă", wrongDiateze: ["Pasivă", "Reflexivă"] },
  { prop: "Grădinarul udă florile.", diateza: "Activă", wrongDiateze: ["Pasivă", "Reflexivă"] },
  // Pasiv
  { prop: "Cartea este citită de elev.", diateza: "Pasivă", wrongDiateze: ["Activă", "Reflexivă"] },
  { prop: "Scrisoarea a fost scrisă de Maria.", diateza: "Pasivă", wrongDiateze: ["Activă", "Reflexivă"] },
  { prop: "Lecția este explicată de profesor.", diateza: "Pasivă", wrongDiateze: ["Activă", "Reflexivă"] },
  { prop: "Casa a fost construită de muncitori.", diateza: "Pasivă", wrongDiateze: ["Activă", "Reflexivă"] },
  { prop: "Mașina este reparată de mecanic.", diateza: "Pasivă", wrongDiateze: ["Activă", "Reflexivă"] },
  { prop: "Tema a fost corectată de învățătoare.", diateza: "Pasivă", wrongDiateze: ["Activă", "Reflexivă"] },
  // Reflexiv
  { prop: "El se spală pe mâini.", diateza: "Reflexivă", wrongDiateze: ["Activă", "Pasivă"] },
  { prop: "Copiii se joacă în parc.", diateza: "Reflexivă", wrongDiateze: ["Activă", "Pasivă"] },
  { prop: "Maria se pregătește de plecare.", diateza: "Reflexivă", wrongDiateze: ["Activă", "Pasivă"] },
  { prop: "Ne îmbrăcăm repede.", diateza: "Reflexivă", wrongDiateze: ["Activă", "Pasivă"] },
  { prop: "El se uită la televizor.", diateza: "Reflexivă", wrongDiateze: ["Activă", "Pasivă"] },
  { prop: "Copilul se trezește devreme.", diateza: "Reflexivă", wrongDiateze: ["Activă", "Pasivă"] },
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
  // Singular
  { prop: "Profesorul vorbește.", subiect: "Profesorul", forma_verb: "vorbește", acord: "singular", wrongAcord: ["plural", "plural (pers 1)", "plural (pers 2)"] },
  { prop: "Copilul doarme.", subiect: "Copilul", forma_verb: "doarme", acord: "singular", wrongAcord: ["plural", "plural (pers 1)", "plural (pers 2)"] },
  { prop: "Câinele latră.", subiect: "Câinele", forma_verb: "latră", acord: "singular", wrongAcord: ["plural", "plural (pers 1)", "plural (pers 2)"] },
  { prop: "Mama gătește.", subiect: "Mama", forma_verb: "gătește", acord: "singular", wrongAcord: ["plural", "plural (pers 1)", "plural (pers 2)"] },
  { prop: "Băiatul aleargă.", subiect: "Băiatul", forma_verb: "aleargă", acord: "singular", wrongAcord: ["plural", "plural (pers 1)", "plural (pers 2)"] },
  // Plural
  { prop: "Fiul și fiica citesc.", subiect: "Fiul și fiica", forma_verb: "citesc", acord: "plural", wrongAcord: ["singular", "plural (pers 1)", "plural (pers 2)"] },
  { prop: "Cartea și stiloul sunt noi.", subiect: "Cartea și stiloul", forma_verb: "sunt", acord: "plural", wrongAcord: ["singular", "plural (pers 1)", "plural (pers 2)"] },
  { prop: "Elevii studiază matematică.", subiect: "Elevii", forma_verb: "studiază", acord: "plural", wrongAcord: ["singular", "plural (pers 1)", "plural (pers 2)"] },
  { prop: "Ion și Maria merg la școală.", subiect: "Ion și Maria", forma_verb: "merg", acord: "plural", wrongAcord: ["singular", "plural (pers 1)", "plural (pers 2)"] },
  { prop: "Copiii și părinții pleacă.", subiect: "Copiii și părinții", forma_verb: "pleacă", acord: "plural", wrongAcord: ["singular", "plural (pers 1)", "plural (pers 2)"] },
  { prop: "Florile și ierburile cresc.", subiect: "Florile și ierburile", forma_verb: "cresc", acord: "plural", wrongAcord: ["singular", "plural (pers 1)", "plural (pers 2)"] },
  // Colective
  { prop: "Mulțimea aplaudă.", subiect: "Mulțimea", forma_verb: "aplaudă", acord: "singular (colectiv)", wrongAcord: ["plural", "plural (pers 1)", "plural (pers 2)"] },
  { prop: "Clasa merge la muzeu.", subiect: "Clasa", forma_verb: "merge", acord: "singular (colectiv)", wrongAcord: ["plural", "plural (pers 1)", "plural (pers 2)"] },
  // Ordine inversă
  { prop: "Pleacă copiii din clasă.", subiect: "copiii", forma_verb: "pleacă", acord: "plural", wrongAcord: ["singular", "plural (pers 1)", "plural (pers 2)"] },
  { prop: "Vine trenul.", subiect: "trenul", forma_verb: "vine", acord: "singular", wrongAcord: ["plural", "plural (pers 1)", "plural (pers 2)"] },
  // Plural cu persoane
  { prop: "Eu și tu mergem la grădină.", subiect: "Eu și tu", forma_verb: "mergem", acord: "plural (pers 1)", wrongAcord: ["singular", "plural", "plural (pers 2)"] },
  { prop: "Voi cântați frumos.", subiect: "Voi", forma_verb: "cântați", acord: "plural (pers 2)", wrongAcord: ["singular", "plural", "plural (pers 1)"] },
  { prop: "Noi jucăm fotbal.", subiect: "Noi", forma_verb: "jucăm", acord: "plural (pers 1)", wrongAcord: ["singular", "plural", "plural (pers 2)"] },
  { prop: "Eu și el mergem acasă.", subiect: "Eu și el", forma_verb: "mergem", acord: "plural (pers 1)", wrongAcord: ["singular", "plural", "plural (pers 2)"] },
  { prop: "Tu și ea vorbiți mult.", subiect: "Tu și ea", forma_verb: "vorbiți", acord: "plural (pers 2)", wrongAcord: ["singular", "plural", "plural (pers 1)"] },
];

// All adverb type names — used for dynamic wrong options
const ADVERB_TIPURI_POOL = ["mod", "timp", "loc", "cantitate", "afirmație", "negație", "îndoială"];

const ADVERB_TIPURI = [
  // Mod
  { adverb: "rapid", tip: "mod", exemplu: "Copilul aleargă rapid" },
  { adverb: "poate", tip: "mod", exemplu: "Poate vei veni mâine" },
  { adverb: "bine", tip: "mod", exemplu: "El vorbește bine" },
  { adverb: "frumos", tip: "mod", exemplu: "Cântă frumos" },
  { adverb: "repede", tip: "mod", exemplu: "Aleargă repede spre casă" },
  { adverb: "ușor", tip: "mod", exemplu: "Rezolvă ușor problemele" },
  { adverb: "greu", tip: "mod", exemplu: "Merge greu pe zăpadă" },
  // Timp
  { adverb: "azi", tip: "timp", exemplu: "Azi este o zi frumoasă" },
  { adverb: "ieri", tip: "timp", exemplu: "Ieri am jucat fotbal" },
  { adverb: "mâine", tip: "timp", exemplu: "Mâine plecăm la mare" },
  { adverb: "acum", tip: "timp", exemplu: "Acum facem temele" },
  { adverb: "mereu", tip: "timp", exemplu: "El este mereu punctual" },
  // Loc
  { adverb: "sus", tip: "loc", exemplu: "Pasărea stă sus pe deal" },
  { adverb: "acolo", tip: "loc", exemplu: "Plec acolo îndată" },
  { adverb: "aici", tip: "loc", exemplu: "Stai aici lângă mine" },
  { adverb: "jos", tip: "loc", exemplu: "Mingea a căzut jos" },
  { adverb: "undeva", tip: "loc", exemplu: "Trebuie să fie undeva prin casă" },
  // Cantitate
  { adverb: "mult", tip: "cantitate", exemplu: "Beau mult apă" },
  { adverb: "puțin", tip: "cantitate", exemplu: "Mănâncă puțin dimineața" },
  { adverb: "destul", tip: "cantitate", exemplu: "Am dormit destul azi" },
  { adverb: "prea", tip: "cantitate", exemplu: "Este prea cald afară" },
  // Afirmație / negație / îndoială
  { adverb: "da", tip: "afirmație", exemplu: "Da, merg la școală" },
  { adverb: "nu", tip: "negație", exemplu: "Nu pot veni astăzi" },
  { adverb: "poate", tip: "îndoială", exemplu: "Poate vine și el" },
];

// Cazuri pool for dynamic wrong options
const CAZ_POOL = ["Acuzativ", "Genitiv", "Dativ", "Instrumental", "Nominativ"];

const PREPOSITION_CAZURI = [
  // Cu Acuzativul
  { prep: "la", caz: "Acuzativ", exemplu: "Merg la grădină" },
  { prep: "în", caz: "Acuzativ", exemplu: "Intru în casă" },
  { prep: "pe", caz: "Acuzativ", exemplu: "Pun cartea pe masă" },
  { prep: "sub", caz: "Acuzativ", exemplu: "Mingea este sub masă" },
  { prep: "lângă", caz: "Acuzativ", exemplu: "Stau lângă geam" },
  { prep: "între", caz: "Acuzativ", exemplu: "Casa între copaci" },
  { prep: "pentru", caz: "Acuzativ", exemplu: "Cumpăr ceva pentru tine" },
  { prep: "prin", caz: "Acuzativ", exemplu: "Trecem prin pădure" },
  { prep: "spre", caz: "Acuzativ", exemplu: "Mergem spre casă" },
  { prep: "contra", caz: "Acuzativ", exemplu: "Luptă contra vântului" },
  // Cu Genitivul
  { prep: "din", caz: "Genitiv", exemplu: "Cartea din dulap" },
  { prep: "asupra", caz: "Genitiv", exemplu: "Influența asupra elevilor" },
  { prep: "împotriva", caz: "Genitiv", exemplu: "Luptă împotriva răului" },
  { prep: "deasupra", caz: "Genitiv", exemplu: "Norul deasupra muntelui" },
  { prep: "înaintea", caz: "Genitiv", exemplu: "Pleacă înaintea mea" },
  // Cu Dativul
  { prep: "datorită", caz: "Dativ", exemplu: "Datorită lui, am reușit" },
  { prep: "grație", caz: "Dativ", exemplu: "Grație ajutorului său" },
  { prep: "conform", caz: "Dativ", exemplu: "Conform regulilor școlii" },
  { prep: "potrivit", caz: "Dativ", exemplu: "Potrivit planului nostru" },
  // Cu Instrumentalul
  { prep: "cu", caz: "Instrumental", exemplu: "Mănânc cu furculița" },
];

// Conjunction type pool for dynamic wrong options
const CONJ_TIP_POOL = [
  "coordonatoare (aditivă)",
  "coordonatoare (disjunctivă)",
  "coordonatoare (adversativă)",
  "coordonatoare (conclusivă)",
  "subordonatoare",
  "subordonatoare (cauzală)",
  "subordonatoare (condițională)",
  "subordonatoare (concesivă)",
];

const CONJUNCTII = [
  // Coordonatoare aditive
  { conj: "și", tip: "coordonatoare (aditivă)", exemplu: "Mărul și para sunt fructe" },
  { conj: "nici", tip: "coordonatoare (aditivă)", exemplu: "Nici eu, nici tu nu am greșit" },
  // Coordonatoare disjunctive
  { conj: "sau", tip: "coordonatoare (disjunctivă)", exemplu: "Vin sau mă întorc" },
  { conj: "fie", tip: "coordonatoare (disjunctivă)", exemplu: "Fie vii, fie pleci" },
  { conj: "ori", tip: "coordonatoare (disjunctivă)", exemplu: "Ori mănânci, ori pleci" },
  // Coordonatoare adversative
  { conj: "dar", tip: "coordonatoare (adversativă)", exemplu: "Plouă, dar merg la grădină" },
  { conj: "iar", tip: "coordonatoare (adversativă)", exemplu: "El citește, iar ea scrie" },
  { conj: "ci", tip: "coordonatoare (adversativă)", exemplu: "Nu eu, ci tu ai greșit" },
  // Coordonatoare conclusive
  { conj: "deci", tip: "coordonatoare (conclusivă)", exemplu: "Plouă, deci luăm umbrela" },
  { conj: "așadar", tip: "coordonatoare (conclusivă)", exemplu: "N-a venit, așadar am plecat" },
  // Subordonatoare
  { conj: "că", tip: "subordonatoare", exemplu: "Spun că sunt obosit" },
  { conj: "dacă", tip: "subordonatoare (condițională)", exemplu: "Dacă plouă, nu merg" },
  { conj: "pentru că", tip: "subordonatoare (cauzală)", exemplu: "Nu vin pentru că sunt ocupat" },
  { conj: "fiindcă", tip: "subordonatoare (cauzală)", exemplu: "Nu iese fiindcă plouă" },
  { conj: "deoarece", tip: "subordonatoare (cauzală)", exemplu: "A lipsit deoarece era bolnav" },
  { conj: "deși", tip: "subordonatoare (concesivă)", exemplu: "A venit deși era obosit" },
  { conj: "încât", tip: "subordonatoare", exemplu: "A alergat atât de mult încât a obosit" },
];

// Interjection type pool for dynamic wrong options
const INTERJ_TIP_POOL = [
  "bucurie", "surpriză", "îndemnare", "dispreț", "durere",
  "atragere atenție", "aprobare", "dezaprobare", "onomatopee", "teamă",
];

const INTERJECTII = [
  // Bucurie / aprobare
  { interj: "bravo!", tip: "aprobare", exemplu: "Bravo! Ai luat nota 10!" },
  { interj: "ura!", tip: "bucurie", exemplu: "Ura! Am câștigat meciul!" },
  { interj: "ah!", tip: "surpriză", exemplu: "Ah! Nu mă așteptam la asta!" },
  { interj: "vai!", tip: "durere", exemplu: "Vai! Mă doare capul!" },
  { interj: "of!", tip: "durere", exemplu: "Of! Iar a venit nota mică!" },
  // Îndemnare / imperativ
  { interj: "hai!", tip: "îndemnare", exemplu: "Hai! Mergem la joacă!" },
  { interj: "haide!", tip: "îndemnare", exemplu: "Haide! Grăbește-te!" },
  { interj: "marș!", tip: "îndemnare", exemplu: "Marș! Ieșiți afară imediat!" },
  { interj: "stop!", tip: "îndemnare", exemplu: "Stop! Nu mai mergeți!" },
  // Atragere atenție
  { interj: "psst!", tip: "atragere atenție", exemplu: "Psst! Vino încoace repede!" },
  { interj: "atenție!", tip: "atragere atenție", exemplu: "Atenție! Vine mașina!" },
  // Dezaprobare / dispreț
  { interj: "bah!", tip: "dispreț", exemplu: "Bah! Nu-mi place deloc!" },
  { interj: "pfui!", tip: "dezaprobare", exemplu: "Pfui! Ce miros urât!" },
  // Teamă / neplăcere
  { interj: "vai!", tip: "teamă", exemplu: "Vai! Mi-e frică!" },
  // Onomatopee
  { interj: "poc!", tip: "onomatopee", exemplu: "Poc! A căzut paharul!" },
  { interj: "buf!", tip: "onomatopee", exemplu: "Buf! S-a trântit ușa!" },
  { interj: "trosc!", tip: "onomatopee", exemplu: "Trosc! S-a rupt creionul!" },
  { interj: "pleosc!", tip: "onomatopee", exemplu: "Pleosc! A căzut în baltă!" },
];

// ─── GENERATOR FUNCTIONS ─────────────────────────────────────────────────

export const C6P2_Generators = {
  // VERBE — MODURI NEPERSONALE
  verb_moduri_nepersonale: (seed = 42): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const topic = "verb_c6";
    const subtopic = "moduri_nepersonale_c6";
    const questions: CurriculumQuestion[] = [];

    // MCQ questions (30)
    for (let i = 0; i < 30; i++) {
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
        topic,
        subtopic,
        intreb,
        correct,
        [item.gerunziu, item.participiu, item.infinitiv].filter(x => x !== correct),
        rng
      );
      questions.push(q);
    }

    // Typing questions (15)
    questions.push(createTyping(topic, subtopic, "Ce sunt modurile nepersonale?", "forme verbale fără marcă de persoană"));
    questions.push(createTyping(topic, subtopic, "Câte moduri nepersonale sunt?", "trei: infinitiv, gerunziu, participiu"));
    questions.push(createTyping(topic, subtopic, "Ce este infinitivul?", "forma de bază a verbului"));
    questions.push(createTyping(topic, subtopic, "Ce este gerunziul?", "formă adverbială a verbului"));
    questions.push(createTyping(topic, subtopic, "Ce este participiul?", "formă adjektivă a verbului"));
    questions.push(createTyping(topic, subtopic, "Cum se formează gerunziul?", "radical + -ând/-ind/-ând"));
    questions.push(createTyping(topic, subtopic, "Cum se formează participiul?", "radical + -t/-it/-ât/-ut"));
    questions.push(createTyping(topic, subtopic, "Ce exprimă gerunziul?", "simultaneitate, durație"));
    questions.push(createTyping(topic, subtopic, "Ce exprimă participiul?", "atribut sau predicat nominal"));
    questions.push(createTyping(topic, subtopic, "Infinitivul fără 'a' este:", "rădăcina verbului"));
    questions.push(createTyping(topic, subtopic, "Participiul se acordă cu:", "substantivul pe care îl determină"));
    questions.push(createTyping(topic, subtopic, "Gerunziul se acordă cu:", "nu se acordă, e invariabil"));
    questions.push(createTyping(topic, subtopic, "Exemplu de gerunziu:", "mergând, citind, dormind"));
    questions.push(createTyping(topic, subtopic, "Exemplu de participiu:", "mers, citit, dormit"));
    questions.push(createTyping(topic, subtopic, "De ce se numesc 'nepersonale'?", "nu au marcă de persoană gramaticală"));

    return shuffle(questions, rng);
  },

  // VERBE — TIMPURI LITERARE
  verb_timpuri_literare: (seed = 42): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const topic = "verb_c6";
    const subtopic = "timpuri_literare_c6";
    const questions: CurriculumQuestion[] = [];

    // MCQ questions (30) — use expanded flat pool with per-entry wrong options
    for (let i = 0; i < 30; i++) {
      const item = pick(VERB_TIMPURI_LITERARE, rng);
      const wrongOpts = shuffle(item.wrongTimps.filter(w => w !== item.timp), rng).slice(0, 3);
      const q = createMCQ(
        topic,
        subtopic,
        `Verbul "${item.verb}": forma "${item.forma}" este la:`,
        item.timp,
        wrongOpts,
        rng
      );
      questions.push(q);
    }

    // Typing questions (15)
    questions.push(createTyping(topic, subtopic, "Ce sunt timpurile literare?", "timpuri folosite în literatura clasică"));
    questions.push(createTyping(topic, subtopic, "Câte timpuri literare principale sunt?", "patru: trecut simplu, trecut compus, perfectul simplu, plusquamperfectul"));
    questions.push(createTyping(topic, subtopic, "Ce este trecutul simplu?", "timp literar pentru acțiuni trecute"));
    questions.push(createTyping(topic, subtopic, "Ce este perfectul simplu?", "timp anterior trecerii simple"));
    questions.push(createTyping(topic, subtopic, "Ce este plusquamperfectul?", "timp anterior perfectului simplu"));
    questions.push(createTyping(topic, subtopic, "Unde se folosesc timpurile literare?", "în texte literare, narații, povești"));
    questions.push(createTyping(topic, subtopic, "Diferența între trecut simplu și trecut compus:", "simplu=literar, compus=conversație"));
    questions.push(createTyping(topic, subtopic, "Perfectul simplu indică:", "acțiune anterior trecerii simple"));
    questions.push(createTyping(topic, subtopic, "Plusquamperfectul indică:", "acțiune anterior perfectului simplu"));
    questions.push(createTyping(topic, subtopic, "Timpurile literare sunt:", "trecute"));
    questions.push(createTyping(topic, subtopic, "Se folosesc timpurile literare în:", "narațiuni clasice, cărți, povești"));
    questions.push(createTyping(topic, subtopic, "Exemplu trecut simplu:", "el merse, ea citea, noi dormirăm"));
    questions.push(createTyping(topic, subtopic, "Exemplu perfectul simplu:", "el mersese, ea citise, noi dormisem"));
    questions.push(createTyping(topic, subtopic, "Plusquamperfectul este:", "anterior perfectului simplu"));
    questions.push(createTyping(topic, subtopic, "De ce sunt importante timpurile literare?", "pentru înțelegerea textelor clasice și a stilului literar"));

    return shuffle(questions, rng);
  },

  // VERBE — DIATEZE
  verb_diateze: (seed = 42): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const topic = "verb_c6";
    const subtopic = "diateze_c6";
    const questions: CurriculumQuestion[] = [];

    // MCQ questions (30) — use per-entry wrong options
    for (let i = 0; i < 30; i++) {
      const item = pick(VERB_DIATEZE, rng);
      const wrongOpts = shuffle(item.wrongDiateze.filter(w => w !== item.diateza), rng).slice(0, 3);
      const q = createMCQ(
        topic,
        subtopic,
        `Propoziția "${item.prop}" este în diateză:`,
        item.diateza,
        wrongOpts,
        rng
      );
      questions.push(q);
    }

    // Typing questions (15)
    questions.push(createTyping(topic, subtopic, "Ce este diatea?", "modul în care subiectul se raportează la acțiune"));
    questions.push(createTyping(topic, subtopic, "Câte diateze sunt?", "trei: activă, pasivă, reflexivă"));
    questions.push(createTyping(topic, subtopic, "Ce este diatea activă?", "subiectul efectuează acțiunea"));
    questions.push(createTyping(topic, subtopic, "Ce este diatea pasivă?", "subiectul suferă acțiunea"));
    questions.push(createTyping(topic, subtopic, "Ce este diatea reflexivă?", "subiectul exercită acțiunea asupra lui însuși"));
    questions.push(createTyping(topic, subtopic, "Cum se formează ditatea pasivă?", "cu verbul 'a fi' + participiu"));
    questions.push(createTyping(topic, subtopic, "Exemplu diateză activă:", "Copilul citește cartea"));
    questions.push(createTyping(topic, subtopic, "Exemplu diateză pasivă:", "Cartea este citită de copil"));
    questions.push(createTyping(topic, subtopic, "Exemplu diateză reflexivă:", "Copilul se spală"));
    questions.push(createTyping(topic, subtopic, "Pronumele reflexiv indică:", "acțiune asupra subiectului"));
    questions.push(createTyping(topic, subtopic, "Subiectul activ face ce?", "acțiunea"));
    questions.push(createTyping(topic, subtopic, "Subiectul pasiv suferă:", "acțiunea"));
    questions.push(createTyping(topic, subtopic, "Verbele reflexive se conjugă cu:", "pronumele reflexiv (mă, te, se, ne, vă, se)"));
    questions.push(createTyping(topic, subtopic, "Subiectul în diateză reflexivă:", "acționează asupra lui însuși"));
    questions.push(createTyping(topic, subtopic, "Care diateză este cea mai frecventă?", "activă"));

    return shuffle(questions, rng);
  },

  // VERBE — CONJUGARE NEREGULATĂ
  verb_conjugare_neregulata: (seed = 42): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const topic = "verb_c6";
    const subtopic = "neregulata_c6";
    const questions: CurriculumQuestion[] = [];

    // MCQ questions (30)
    const persoane = ["eu", "tu", "el"] as const;
    for (let i = 0; i < 30; i++) {
      const item = pick(VERB_NEREGULATE, rng);
      const persoana = pick(persoane as unknown as string[], rng) as typeof persoane[number];
      const correct = item[persoana];
      const q = createMCQ(
        topic,
        subtopic,
        `Forma pentru persoana "${persoana}" la verbul "${item.infinitiv}" este:`,
        correct,
        [item.eu, item.tu, item.el].filter(x => x !== correct),
        rng
      );
      questions.push(q);
    }

    // Typing questions (15)
    questions.push(createTyping(topic, subtopic, "Ce sunt verbele neregulate?", "verbe care nu urmează modelele obișnuite"));
    questions.push(createTyping(topic, subtopic, "Exemplo de verb neregulat:", "a fi, a avea, a merge, a bea"));
    questions.push(createTyping(topic, subtopic, "Cum se conjugă verbele neregulate?", "fiecare verb are propria conjugare"));
    questions.push(createTyping(topic, subtopic, "Ce verb neregulat este foarte frecvent?", "a fi"));
    questions.push(createTyping(topic, subtopic, "Ce verb neregulat auxiliar?", "a avea"));
    questions.push(createTyping(topic, subtopic, "Forma pentru 'eu' la 'a merge':", "merg"));
    questions.push(createTyping(topic, subtopic, "Forma pentru 'tu' la 'a bea':", "bei"));
    questions.push(createTyping(topic, subtopic, "Forma pentru 'el' la 'a fi':", "este"));
    questions.push(createTyping(topic, subtopic, "De ce sunt neregulate unele verbe?", "din motive etimologice și istorice"));
    questions.push(createTyping(topic, subtopic, "Trebuie să memorez verbele neregulate?", "da, sunt esențiale"));
    questions.push(createTyping(topic, subtopic, "Sunt toți verbele neregulate?", "nu, doar o mică parte"));
    questions.push(createTyping(topic, subtopic, "Cât de frecvente sunt verbele neregulate?", "foarte frecvente în vorbire"));
    questions.push(createTyping(topic, subtopic, "Forma pentru 'noi' la 'a avea':", "avem"));
    questions.push(createTyping(topic, subtopic, "Forma pentru 'voi' la 'a merge':", "mergeți"));
    questions.push(createTyping(topic, subtopic, "Sunt dificile verbele neregulate?", "în început, dar se memorează ușor"));

    return shuffle(questions, rng);
  },

  // VERBE — ACORD SUBIECT-VERB
  verb_acord: (seed = 42): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const topic = "verb_c6";
    const subtopic = "acord_c6";
    const questions: CurriculumQuestion[] = [];

    // MCQ questions (30) — use per-entry wrong options
    for (let i = 0; i < 30; i++) {
      const item = pick(VERB_ACORD, rng);
      const wrongOpts = shuffle(item.wrongAcord.filter(w => w !== item.acord), rng).slice(0, 3);
      const q = createMCQ(
        topic,
        subtopic,
        `În propoziția "${item.prop}", acordul subiect-verb este în:`,
        item.acord,
        wrongOpts,
        rng
      );
      questions.push(q);
    }

    // Typing questions (15)
    questions.push(createTyping(topic, subtopic, "Ce este acordul?", "potrivire între cuvinte"));
    questions.push(createTyping(topic, subtopic, "Cum se acordă verbul cu subiectul?", "după persoană și număr"));
    questions.push(createTyping(topic, subtopic, "Subiect singular I → verb:", "singular I"));
    questions.push(createTyping(topic, subtopic, "Subiect plural I → verb:", "plural I"));
    questions.push(createTyping(topic, subtopic, "Subiect singular III → verb:", "singular III"));
    questions.push(createTyping(topic, subtopic, "Subiect plural III → verb:", "plural III"));
    questions.push(createTyping(topic, subtopic, "Exemplu accord corect:", "Copilul joacă"));
    questions.push(createTyping(topic, subtopic, "Exemplu accord GREȘIT:", "Copilul joacă (ok) vs Copiii joacă (ok)"));
    questions.push(createTyping(topic, subtopic, "Acordul este OBLIGATORIU?", "da, în limba română"));
    questions.push(createTyping(topic, subtopic, "Subiect compus → verb:", "plural"));
    questions.push(createTyping(topic, subtopic, "Subiect colectiv (grup) → verb:", "singular sau plural"));
    questions.push(createTyping(topic, subtopic, "De ce trebuie acordul?", "pentru claritate și corecție"));
    questions.push(createTyping(topic, subtopic, "Acordul se face în:", "persoană și număr"));
    questions.push(createTyping(topic, subtopic, "Verbul 'a fi' trebuie acordat?", "da, întotdeauna"));
    questions.push(createTyping(topic, subtopic, "Acordul afectează înțelegerea?", "da, acordul greșit schimbă sensul"));

    return shuffle(questions, rng);
  },

  // ADVERB — TIPURI
  adverb_tipuri: (seed = 42): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const topic = "adverb_prepozitie_c6";
    const subtopic = "adverb_tipuri_c6";
    const questions: CurriculumQuestion[] = [];

    // MCQ questions (30) — dynamic wrong options from ADVERB_TIPURI_POOL
    for (let i = 0; i < 30; i++) {
      const item = pick(ADVERB_TIPURI, rng);
      const wrongPool = shuffle(ADVERB_TIPURI_POOL.filter(t => t !== item.tip), rng);
      const q = createMCQ(
        topic,
        subtopic,
        `Adverbul "${item.adverb}" din "${item.exemplu}" este adverb de:`,
        item.tip,
        wrongPool.slice(0, 3),
        rng
      );
      questions.push(q);
    }

    // Typing questions (15)
    questions.push(createTyping(topic, subtopic, "Ce este adverbul?", "cuvânt care modifică verbul, adjectivul sau alt adverb"));
    questions.push(createTyping(topic, subtopic, "Câte tipuri de adverbe sunt?", "mai mult de 5 tipuri principale"));
    questions.push(createTyping(topic, subtopic, "Ce sunt adverbele de mod?", "exprimă cum se face acțiunea"));
    questions.push(createTyping(topic, subtopic, "Ce sunt adverbele de loc?", "exprimă unde se face acțiunea"));
    questions.push(createTyping(topic, subtopic, "Ce sunt adverbele de timp?", "exprimă când se face acțiunea"));
    questions.push(createTyping(topic, subtopic, "Ce sunt adverbele de frecvență?", "exprimă cât de des se face acțiunea"));
    questions.push(createTyping(topic, subtopic, "Exemplu adverb de mod:", "rapid, ușor, frumos"));
    questions.push(createTyping(topic, subtopic, "Exemplu adverb de loc:", "aici, acolo, sus, jos"));
    questions.push(createTyping(topic, subtopic, "Exemplu adverb de timp:", "azi, mâine, ieri, acum"));
    questions.push(createTyping(topic, subtopic, "Exemplu adverb de frecvență:", "adesea, rar, niciodată, întotdeauna"));
    questions.push(createTyping(topic, subtopic, "Cum se formează adverbele de mod?", "de la adjectiv + -amente/-itate"));
    questions.push(createTyping(topic, subtopic, "Adverbele se acordă?", "nu, sunt invariabile"));
    questions.push(createTyping(topic, subtopic, "Unde se plasează adverbul în propoziție?", "lângă verbul pe care îl modifică"));
    questions.push(createTyping(topic, subtopic, "Adverbul modifică ce?", "verb, adjectiv, alt adverb, propoziție"));
    questions.push(createTyping(topic, subtopic, "Care sunt adverbele de grad?", "foarte, prea, puțin, destul"));

    return shuffle(questions, rng);
  },

  // PREPOZIȚIE — CAZURI
  prepozitie_cazuri: (seed = 42): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const topic = "adverb_prepozitie_c6";
    const subtopic = "prepozitie_cazuri_c6";
    const questions: CurriculumQuestion[] = [];

    // MCQ questions (30) — dynamic wrong options from CAZ_POOL
    for (let i = 0; i < 30; i++) {
      const item = pick(PREPOSITION_CAZURI, rng);
      const wrongPool = shuffle(CAZ_POOL.filter(c => c !== item.caz), rng);
      const q = createMCQ(
        topic,
        subtopic,
        `Prepoziția "${item.prep}" (ex: "${item.exemplu}") se folosește cu cazul:`,
        item.caz,
        wrongPool.slice(0, 3),
        rng
      );
      questions.push(q);
    }

    // Typing questions (15)
    questions.push(createTyping(topic, subtopic, "Ce este prepoziția?", "cuvânt invariabil care leagă cuvinte"));
    questions.push(createTyping(topic, subtopic, "Cu ce caz se folosesc prepoziții?", "cu Genitiv, Dativ, Acuzativ, Instrumental"));
    questions.push(createTyping(topic, subtopic, "Prepoziția 'la' se folosește cu:", "Acuzativ/Dativ"));
    questions.push(createTyping(topic, subtopic, "Prepoziția 'din' se folosește cu:", "Genitiv"));
    questions.push(createTyping(topic, subtopic, "Prepoziția 'cu' se folosește cu:", "Instrumental"));
    questions.push(createTyping(topic, subtopic, "Prepoziția 'în' se folosește cu:", "Acuzativ"));
    questions.push(createTyping(topic, subtopic, "Prepoziția 'pe' se folosește cu:", "Acuzativ"));
    questions.push(createTyping(topic, subtopic, "Exemplu: de + caz:", "Genitivul - de masă"));
    questions.push(createTyping(topic, subtopic, "Exemplu: pentru + caz:", "Acuzativul - pentru copil"));
    questions.push(createTyping(topic, subtopic, "Se acordă prepoziția?", "nu, este invariabilă"));
    questions.push(createTyping(topic, subtopic, "Prepoziția introduce:", "complement"));
    questions.push(createTyping(topic, subtopic, "Poate prepoziția fi urmată de Nominativ?", "NU, niciodată"));
    questions.push(createTyping(topic, subtopic, "Prepoziții temporal:", "după, înainte, în timp"));
    questions.push(createTyping(topic, subtopic, "Prepoziții spațiale:", "în, pe, la, din, lângă, sub"));
    questions.push(createTyping(topic, subtopic, "Sunt obligatorii prepoziții?", "da, pentru exprimarea clarității"));

    return shuffle(questions, rng);
  },

  // CONJUNCȚIE
  conjunctie: (seed = 42): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const topic = "adverb_prepozitie_c6";
    const subtopic = "conjunctie_c6";
    const questions: CurriculumQuestion[] = [];

    // MCQ questions (30)
    for (let i = 0; i < 30; i++) {
      const item = pick(CONJUNCTII, rng);
      const q = createMCQ(
        topic,
        subtopic,
        `Conjuncția "${item.conj}" este:`,
        item.tip,
        ["interjector", "pronume relativ", "articol"].filter(x => x !== item.tip),
        rng
      );
      questions.push(q);
    }

    // Typing questions (15)
    questions.push(createTyping(topic, subtopic, "Ce este conjuncția?", "cuvânt invariabil care leagă propoziții"));
    questions.push(createTyping(topic, subtopic, "Câte tipuri de conjuncții sunt?", "două: coordonatoare și subordonatoare"));
    questions.push(createTyping(topic, subtopic, "Ce sunt conjuncțiile coordonatoare?", "legă propoziții de rang egal"));
    questions.push(createTyping(topic, subtopic, "Ce sunt conjuncțiile subordonatoare?", "legă propoziție subordonată de principală"));
    questions.push(createTyping(topic, subtopic, "Exemplu conjuncție coordonatoare:", "și, sau, dar, deci"));
    questions.push(createTyping(topic, subtopic, "Exemplu conjuncție subordonatoare:", "că, dacă, deoarece, pentru că"));
    questions.push(createTyping(topic, subtopic, "Conjuncția 'și' este:", "coordonatoare aditivă"));
    questions.push(createTyping(topic, subtopic, "Conjuncția 'dar' este:", "coordonatoare adversativă"));
    questions.push(createTyping(topic, subtopic, "Conjuncția 'deci' este:", "coordonatoare explicativă"));
    questions.push(createTyping(topic, subtopic, "Conjuncția 'dacă' este:", "subordonatoare condițională"));
    questions.push(createTyping(topic, subtopic, "Conjuncția 'deoarece' este:", "subordonatoare cauzală"));
    questions.push(createTyping(topic, subtopic, "Se acordă conjuncția?", "nu, este invariabilă"));
    questions.push(createTyping(topic, subtopic, "Poziție conjuncție:", "între propoziții/cuvinte"));
    questions.push(createTyping(topic, subtopic, "Fără conjuncții, propozițiile ar fi:", "neînlănțuite, greu de înțeles"));
    questions.push(createTyping(topic, subtopic, "Conjuncția 'sau' exprimă:", "alternativă"));

    return shuffle(questions, rng);
  },

  // INTERJECȚIE
  interjectie: (seed = 42): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const topic = "adverb_prepozitie_c6";
    const subtopic = "interjectie_c6";
    const questions: CurriculumQuestion[] = [];

    // MCQ questions (30)
    for (let i = 0; i < 30; i++) {
      const item = pick(INTERJECTII, rng);
      const q = createMCQ(
        topic,
        subtopic,
        `Interjecția "${item.interj}" exprimă:`,
        item.tip,
        ["negație", "condiție", "comparație"].filter(x => x !== item.tip),
        rng
      );
      questions.push(q);
    }

    // Typing questions (15)
    questions.push(createTyping(topic, subtopic, "Ce este interjecția?", "exclamație care exprimă emoție"));
    questions.push(createTyping(topic, subtopic, "Interjecția exprimă ce?", "sentimente, emoții, reacții"));
    questions.push(createTyping(topic, subtopic, "Exemplu interjecție de bucurie:", "bravo! ура! vai!"));
    questions.push(createTyping(topic, subtopic, "Exemplu interjecție de durere:", "vai! ouch! ai!"));
    questions.push(createTyping(topic, subtopic, "Exemplu interjecție de surpriză:", "oh! aha! vai!"));
    questions.push(createTyping(topic, subtopic, "Exemplu interjecție de aprobație:", "bravo! excelent! super!"));
    questions.push(createTyping(topic, subtopic, "Exemplu interjecție de dezaprobație:", "bah! pfui! ugh!"));
    questions.push(createTyping(topic, subtopic, "Exemplu interjecție de atenție:", "atenție! psst! ey!"));
    questions.push(createTyping(topic, subtopic, "Interjecția are rol sintactic?", "nu, e emfatică"));
    questions.push(createTyping(topic, subtopic, "Se acordă interjecția?", "nu, e invariabilă"));
    questions.push(createTyping(topic, subtopic, "Interjecția în text se pune cu:", "punct de exclamare"));
    questions.push(createTyping(topic, subtopic, "Interjecțiile sunt:", "expresii exclamative"));
    questions.push(createTyping(topic, subtopic, "Unde apare interjecția?", "la începutul propoziției, izolată"));
    questions.push(createTyping(topic, subtopic, "Valoare interjecției:", "emfatică, nu structurală"));
    questions.push(createTyping(topic, subtopic, "Exemple comune:", "bravo, oh, ah, vai, fuș, bah"));

    return shuffle(questions, rng);
  },
};
