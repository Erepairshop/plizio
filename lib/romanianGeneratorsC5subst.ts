import type { CurriculumQuestion, CurriculumMCQ } from "./curriculumTypes";

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
  topic: string, subtopic: string, question: string,
  correct: string, wrongOptions: string[], rng: () => number
): CurriculumMCQ {
  const seen = new Set<string>();
  const unique: string[] = [];
  for (const w of wrongOptions) {
    if (w !== correct && !seen.has(w)) { seen.add(w); unique.push(w); }
  }
  const opts = shuffle([correct, ...unique.slice(0, 3)], rng);
  return { type: "mcq", topic, subtopic, question, options: opts, correct: opts.indexOf(correct) };
}

// ─── TOPIC / SUBTOPIC CONSTANTS ──────────────────────────────────────────────
const T_SUBST = "substantiv_c5";
const T_PRON  = "pronume_c5";

const S_DECL  = "declinarea_c5";
const S_COLL  = "substantive_colective_c5";
const S_GEN   = "genul_substantivelor_c5";
const S_INT   = "pronume_interogativ_c5";
const S_NEHO  = "pronume_nehotarat_c5";
const S_REL   = "pronume_relativ_c5";

// ─── 1. DECLINAREA SUBSTANTIVELOR (cu articol hotărât) ───────────────────────

interface NounForms {
  base: string;
  N: string;   // Nominativ
  G: string;   // Genitiv
  D: string;   // Dativ
  Ac: string;  // Acuzativ
  V: string;   // Vocativ
}

const NOUNS: NounForms[] = [
  { base: "casă",    N: "casa",       G: "casei",       D: "casei",       Ac: "casa",       V: "casă!" },
  { base: "copil",   N: "copilul",    G: "copilului",   D: "copilului",   Ac: "copilul",    V: "copile!" },
  { base: "carte",   N: "cartea",     G: "cărții",      D: "cărții",      Ac: "cartea",     V: "carte!" },
  { base: "prieten", N: "prietenul",  G: "prietenului", D: "prietenului", Ac: "prietenul",  V: "prietene!" },
  { base: "floare",  N: "floarea",    G: "florii",      D: "florii",      Ac: "floarea",    V: "floare!" },
  { base: "elev",    N: "elevul",     G: "elevului",    D: "elevului",    Ac: "elevul",     V: "elevule!" },
  { base: "mamă",    N: "mama",       G: "mamei",       D: "mamei",       Ac: "mama",       V: "mamă!" },
  { base: "frate",   N: "fratele",    G: "fratelui",    D: "fratelui",    Ac: "fratele",    V: "frate!" },
  { base: "munte",   N: "muntele",    G: "muntelui",    D: "muntelui",    Ac: "muntele",    V: "munte!" },
  { base: "câine",   N: "câinele",    G: "câinelui",    D: "câinelui",    Ac: "câinele",    V: "câine!" },
];

// Sentences for each noun × case (Genitiv, Dativ, Acuzativ visible in context)
const DECL_SENTENCES: Record<string, Record<string, string>> = {
  casă: {
    G: "Acoperișul ___ este roșu.",
    D: "I-am dus flori ___.",
    Ac: "Văd ___ de pe deal.",
    V: "Hei, ___! Ești frumoasă.",
    N: "___ este mare și luminoasă.",
  },
  copil: {
    G: "Jucăria ___ s-a stricat.",
    D: "I-am dat cadoul ___.",
    Ac: "Îl văd pe ___ în curte.",
    V: "Hei, ___! Vino aici.",
    N: "___ aleargă în parc.",
  },
  carte: {
    G: "Coperta ___ este colorată.",
    D: "I-am adăugat o dedicație ___.",
    Ac: "Citesc ___ cu plăcere.",
    V: "Dragă, ___! Ești prietena mea.",
    N: "___ stă pe raft.",
  },
  prieten: {
    G: "Casa ___ este aproape.",
    D: "I-am scris o scrisoare ___.",
    Ac: "L-am văzut pe ___ ieri.",
    V: "Bună ziua, ___!",
    N: "___ a venit în vizită.",
  },
  floare: {
    G: "Petalele ___ sunt albe.",
    D: "I-am pus apă ___.",
    Ac: "Admir ___ din grădină.",
    V: "Frumoasă ___!",
    N: "___ crește în ghiveci.",
  },
  elev: {
    G: "Caietul ___ este plin.",
    D: "Profesorul i-a dat nota ___.",
    Ac: "Îl ascult pe ___.",
    V: "Bravo, ___!",
    N: "___ răspunde la lecție.",
  },
  mamă: {
    G: "Vocea ___ este blândă.",
    D: "I-am oferit un buchet ___.",
    Ac: "O iubesc pe ___.",
    V: "Te iubesc, ___!",
    N: "___ pregătește masa.",
  },
  frate: {
    G: "Camera ___ este ordonată.",
    D: "I-am împrumutat bicicleta ___.",
    Ac: "Îl ajut pe ___ la teme.",
    V: "Hei, ___! Hai afară.",
    N: "___ citește o carte.",
  },
  munte: {
    G: "Vârful ___ este acoperit de zăpadă.",
    D: "Turiștii i se închină ___.",
    Ac: "Urcăm ___ cu greu.",
    V: "Salut, ___!",
    N: "___ se vede de departe.",
  },
  câine: {
    G: "Lesa ___ este roșie.",
    D: "I-am dat mâncare ___.",
    Ac: "Îl mângâi pe ___.",
    V: "Hai, ___! Vino la mine.",
    N: "___ latră la poartă.",
  },
};

const CASE_NAMES_ALL = ["Nominativ", "Genitiv", "Dativ", "Acuzativ", "Vocativ"] as const;
type CaseName = typeof CASE_NAMES_ALL[number];
const CASE_KEY: Record<CaseName, keyof NounForms> = {
  Nominativ: "N", Genitiv: "G", Dativ: "D", Acuzativ: "Ac", Vocativ: "V",
};

function generateDeclinarea(seed: number): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumQuestion[] = [];

  // 15 questions: cycle through nouns + cases ensuring variety
  const pairs: Array<{ noun: NounForms; caz: CaseName }> = [];
  for (const caz of CASE_NAMES_ALL) {
    for (const noun of NOUNS.slice(0, 3)) {
      pairs.push({ noun, caz });
    }
  }
  const selected = shuffle(pairs, rng).slice(0, 15);

  for (const { noun, caz } of selected) {
    const form = noun[CASE_KEY[caz]];
    const sentence = DECL_SENTENCES[noun.base]?.[CASE_KEY[caz]] ?? `Cuvântul '${form}' apare în propoziție.`;
    const displaySentence = sentence.replace("___", `'${form}'`);
    const q = `La ce caz este '${form}' în: "${displaySentence}"?`;
    const wrong = CASE_NAMES_ALL.filter(c => c !== caz);
    questions.push(createMCQ(T_SUBST, S_DECL, q, caz, [...wrong], rng));
  }
  return questions;
}

// ─── 2. SUBSTANTIVE COLECTIVE ─────────────────────────────────────────────────

const COLLECTIVE_DATA: Array<{ word: string; desc: string; group: string }> = [
  { word: "turmă",   desc: "grup de oi",         group: "oi" },
  { word: "stol",    desc: "grup de păsări",      group: "păsări" },
  { word: "pădure",  desc: "grup de copaci",      group: "copaci" },
  { word: "cârd",    desc: "grup de gâște",       group: "gâște" },
  { word: "banc",    desc: "grup de pești",       group: "pești" },
  { word: "haită",   desc: "grup de lupi",        group: "lupi" },
  { word: "roi",     desc: "grup de albine",      group: "albine" },
  { word: "cireadă", desc: "grup de vaci",        group: "vaci" },
  { word: "herghelie", desc: "grup de cai",       group: "cai" },
  { word: "stolul",  desc: "mai multe păsări în zbor", group: "mai multe păsări" },
];

function generateColective(seed: number): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumQuestion[] = [];
  const pool = shuffle([...COLLECTIVE_DATA], rng);

  // Question type A: "Cum se numește grupul de X?" → word
  // Question type B: "Ce desemnează cuvântul 'X'?" → desc
  let i = 0;
  while (questions.length < 15) {
    const item = pool[i % pool.length];
    i++;
    const useTypeA = rng() < 0.55;
    if (useTypeA) {
      const q = `Cum se numește grupul de ${item.group}?`;
      const wrongs = pool.filter(p => p.word !== item.word).map(p => p.word);
      questions.push(createMCQ(T_SUBST, S_COLL, q, item.word, shuffle(wrongs, rng).slice(0, 3), rng));
    } else {
      const q = `Ce desemnează substantivul colectiv '${item.word}'?`;
      const wrongs = pool.filter(p => p.desc !== item.desc).map(p => p.desc);
      questions.push(createMCQ(T_SUBST, S_COLL, q, item.desc, shuffle(wrongs, rng).slice(0, 3), rng));
    }
  }
  return questions;
}

// ─── 3. GENUL SUBSTANTIVELOR (tricky nouns) ───────────────────────────────────

const GENDER_NOUNS: Array<{ word: string; gender: "masculin" | "feminin" | "neutru"; tricky?: boolean }> = [
  // feminine (tricky — students often guess masculine)
  { word: "minge",    gender: "feminin",   tricky: true },
  { word: "lege",     gender: "feminin",   tricky: true },
  { word: "cheie",    gender: "feminin",   tricky: true },
  { word: "vreme",    gender: "feminin",   tricky: true },
  { word: "parte",    gender: "feminin",   tricky: true },
  { word: "față",     gender: "feminin",   tricky: true },
  { word: "mare",     gender: "feminin",   tricky: true },
  { word: "stea",     gender: "feminin" },
  // masculine
  { word: "soare",    gender: "masculin",  tricky: true },
  { word: "munte",    gender: "masculin",  tricky: true },
  { word: "nor",      gender: "masculin" },
  { word: "perete",   gender: "masculin",  tricky: true },
  { word: "fluture",  gender: "masculin",  tricky: true },
  { word: "elefant",  gender: "masculin" },
  { word: "șarpe",    gender: "masculin",  tricky: true },
  // neutru
  { word: "geam",     gender: "neutru" },
  { word: "drum",     gender: "neutru" },
  { word: "vis",      gender: "neutru" },
  { word: "obicei",   gender: "neutru",    tricky: true },
  { word: "nume",     gender: "neutru",    tricky: true },
  { word: "timp",     gender: "neutru" },
  { word: "semn",     gender: "neutru" },
  { word: "râu",      gender: "neutru",    tricky: true },
];

const ALL_GENDERS = ["masculin", "feminin", "neutru"] as const;

function generateGenul(seed: number): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumQuestion[] = [];

  // Prefer tricky nouns but include some straightforward ones
  const tricky = GENDER_NOUNS.filter(n => n.tricky);
  const plain  = GENDER_NOUNS.filter(n => !n.tricky);
  const pool   = shuffle([...tricky, ...tricky, ...plain], rng); // tricky weighted 2×

  let i = 0;
  while (questions.length < 15) {
    const item = pool[i % pool.length];
    i++;
    const q = `Ce gen are substantivul '${item.word}'?`;
    const wrongs = ALL_GENDERS.filter(g => g !== item.gender);
    questions.push(createMCQ(T_SUBST, S_GEN, q, item.gender, [...wrongs], rng));
  }
  return questions;
}

// ─── 4. PRONUME INTEROGATIV ───────────────────────────────────────────────────

interface IntPronQuestion {
  sentence: string;
  pronoun: string;  // correct interrogative pronoun
  role?: string;    // grammatical hint used in question
}

const INTEROGATIV_DATA: IntPronQuestion[] = [
  { sentence: "Cine a venit la petrecere?",         pronoun: "cine",   role: "subiect" },
  { sentence: "Ce citești în vacanță?",             pronoun: "ce",     role: "complement direct" },
  { sentence: "Care elev a câștigat concursul?",    pronoun: "care",   role: "atribut" },
  { sentence: "Câți elevi sunt în clasă?",          pronoun: "câți",   role: "masculin plural" },
  { sentence: "Câte fete participă la concurs?",    pronoun: "câte",   role: "feminin plural" },
  { sentence: "Al cui caiet este pe bancă?",        pronoun: "al cui", role: "atribut genitival" },
  { sentence: "A cui carte a fost premiată?",       pronoun: "a cui",  role: "atribut genitival feminin" },
  { sentence: "Ce joc preferi?",                    pronoun: "ce",     role: "complement direct" },
  { sentence: "Cine a câștigat meciul?",            pronoun: "cine",   role: "subiect" },
  { sentence: "Câți ani are bunica ta?",            pronoun: "câți",   role: "masculin plural" },
  { sentence: "Care dintre colegi te ajută?",       pronoun: "care",   role: "subiect" },
  { sentence: "Câte ore durează filmul?",           pronoun: "câte",   role: "feminin plural" },
  { sentence: "Ce ți-a spus profesorul?",           pronoun: "ce",     role: "complement direct" },
  { sentence: "Cine a scris această poezie?",       pronoun: "cine",   role: "subiect" },
  { sentence: "Al cui telefon a sunat?",            pronoun: "al cui", role: "atribut genitival" },
];

const INT_PRONOUNS = ["cine", "ce", "care", "câți", "câte", "al cui", "a cui"];

function generateInterogativ(seed: number): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumQuestion[] = [];
  const pool = shuffle([...INTEROGATIV_DATA], rng);

  for (let i = 0; i < 15; i++) {
    const item = pool[i % pool.length];
    const useTypeA = rng() < 0.6;
    if (useTypeA) {
      const q = `Care este pronumele interogativ din: "${item.sentence}"?`;
      const wrongs = INT_PRONOUNS.filter(p => p !== item.pronoun);
      questions.push(createMCQ(T_PRON, S_INT, q, item.pronoun, shuffle(wrongs, rng).slice(0, 3), rng));
    } else {
      const blank = item.sentence.replace(item.pronoun, "___");
      const q = `Completează cu pronumele interogativ potrivit: "${blank}"`;
      const wrongs = INT_PRONOUNS.filter(p => p !== item.pronoun);
      questions.push(createMCQ(T_PRON, S_INT, q, item.pronoun, shuffle(wrongs, rng).slice(0, 3), rng));
    }
  }
  return questions;
}

// ─── 5. PRONUME NEHOTĂRÂT ────────────────────────────────────────────────────

interface NehQData {
  question: string;
  correct: string;
  wrongs: string[];
}

const NEHOTARAT_POOL: NehQData[] = [
  {
    question: "Care pronume nehotărât arată că nimeni nu a venit la întâlnire?",
    correct: "nimeni",
    wrongs: ["cineva", "oricine", "fiecare"],
  },
  {
    question: "'___ elev a răspuns corect.' — Completează cu pronume nehotărât:",
    correct: "Fiecare",
    wrongs: ["Nimeni", "Nimic", "Altul"],
  },
  {
    question: "Care pronume nehotărât arată că un lucru nedefinit s-a întâmplat?",
    correct: "ceva",
    wrongs: ["nimic", "orice", "altceva"],
  },
  {
    question: "'Nu am văzut ___ pe stradă.' — pronumele nehotărât care exprimă absența:",
    correct: "nimic",
    wrongs: ["ceva", "cineva", "fiecare"],
  },
  {
    question: "Care pronume nehotărât înseamnă 'orice persoană, indiferent cine'?",
    correct: "oricine",
    wrongs: ["cineva", "nimeni", "altul"],
  },
  {
    question: "'___ lucru este posibil dacă muncești.' — pronume nehotărât:",
    correct: "Orice",
    wrongs: ["Nimic", "Ceva", "Altceva"],
  },
  {
    question: "Care pronume nehotărât indică o persoană diferită de cea menționată?",
    correct: "altul",
    wrongs: ["fiecare", "cineva", "oricine"],
  },
  {
    question: "'___ a sunat la ușă, dar nu știu cine.' — pronume nehotărât:",
    correct: "Cineva",
    wrongs: ["Nimeni", "Oricine", "Fiecare"],
  },
  {
    question: "'Vreau ___ mai bun.' — pronume nehotărât care înlocuiește un lucru:",
    correct: "altceva",
    wrongs: ["altul", "nimic", "ceva"],
  },
  {
    question: "'___ fată din clasă a primit o floare.' — pronume nehotărât feminin:",
    correct: "vreo",
    wrongs: ["vreun", "fiecare", "nicio"],
  },
  {
    question: "'___ băiat nu a întârziat astăzi.' — pronume nehotărât masculin singular:",
    correct: "vreun",
    wrongs: ["vreo", "fiecare", "nimeni"],
  },
  {
    question: "Care pronume nehotărât înlocuiește un obiect sau lucru diferit?",
    correct: "altceva",
    wrongs: ["altul", "ceva", "nimic"],
  },
  {
    question: "'___ dintre noi știe răspunsul.' — pronume nehotărât care include toți:",
    correct: "Fiecare",
    wrongs: ["Nimeni", "Oricine", "Cineva"],
  },
  {
    question: "'Nu am nicio problemă — ___ nu mă deranjează.' — pronume nehotărât:",
    correct: "nimic",
    wrongs: ["ceva", "orice", "altceva"],
  },
  {
    question: "Care pronume nehotărât exprimă o persoană nespecificată (poate fi oricine)?",
    correct: "cineva",
    wrongs: ["nimeni", "oricine", "altul"],
  },
];

function generateNehotarat(seed: number): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumQuestion[] = [];
  const pool = shuffle([...NEHOTARAT_POOL], rng);

  for (let i = 0; i < 15; i++) {
    const item = pool[i % pool.length];
    questions.push(createMCQ(T_PRON, S_NEHO, item.question, item.correct, item.wrongs, rng));
  }
  return questions;
}

// ─── 6. PRONUME RELATIV ───────────────────────────────────────────────────────

interface RelQData {
  sentence: string;       // full sentence with relative clause
  pronoun: string;        // relative pronoun in the sentence
  question: string;       // question to ask
  correct: string;
  wrongs: string[];
}

const RELATIV_POOL: RelQData[] = [
  {
    sentence: "Știu cine a venit la petrecere.",
    pronoun: "cine",
    question: "Care este pronumele relativ din: 'Știu cine a venit la petrecere.'?",
    correct: "cine",
    wrongs: ["care", "ce", "cât"],
  },
  {
    sentence: "Cartea pe care o citesc este interesantă.",
    pronoun: "care",
    question: "Identifică pronumele relativ din: 'Cartea pe care o citesc este interesantă.'",
    correct: "care",
    wrongs: ["ce", "cine", "cât"],
  },
  {
    sentence: "Fă ce îți spun și totul va fi bine.",
    pronoun: "ce",
    question: "Care este pronumele relativ din: 'Fă ce îți spun și totul va fi bine.'?",
    correct: "ce",
    wrongs: ["care", "cine", "cât"],
  },
  {
    sentence: "Elevul care a câștigat premiul este colegul meu.",
    pronoun: "care",
    question: "Pronumele relativ din 'Elevul care a câștigat premiul este colegul meu.' este:",
    correct: "care",
    wrongs: ["ce", "cine", "cât"],
  },
  {
    sentence: "Înțeleg cât de greu a fost pentru tine.",
    pronoun: "cât",
    question: "Care este pronumele relativ din: 'Înțeleg cât de greu a fost pentru tine.'?",
    correct: "cât",
    wrongs: ["care", "ce", "cine"],
  },
  {
    sentence: "Îmi amintesc ce mi-a spus bunica.",
    pronoun: "ce",
    question: "Pronumele relativ din 'Îmi amintesc ce mi-a spus bunica.' este:",
    correct: "ce",
    wrongs: ["care", "cine", "cât"],
  },
  {
    sentence: "Casa în care locuiesc este albă.",
    pronoun: "care",
    question: "Identifică pronumele relativ din: 'Casa în care locuiesc este albă.'",
    correct: "care",
    wrongs: ["ce", "cine", "cât"],
  },
  {
    sentence: "Spune-mi cine ți-a dat această carte.",
    pronoun: "cine",
    question: "Care este pronumele relativ din: 'Spune-mi cine ți-a dat această carte.'?",
    correct: "cine",
    wrongs: ["care", "ce", "cât"],
  },
  {
    sentence: "Nu știu cât durează spectacolul.",
    pronoun: "cât",
    question: "Pronumele relativ din 'Nu știu cât durează spectacolul.' este:",
    correct: "cât",
    wrongs: ["care", "ce", "cine"],
  },
  {
    sentence: "Filmul pe care l-am văzut ieri a fost minunat.",
    pronoun: "care",
    question: "Care este pronumele relativ din: 'Filmul pe care l-am văzut ieri a fost minunat.'?",
    correct: "care",
    wrongs: ["ce", "cine", "cât"],
  },
  {
    sentence: "Știu ce vrei să faci.",
    pronoun: "ce",
    question: "Pronumele relativ din 'Știu ce vrei să faci.' este:",
    correct: "ce",
    wrongs: ["care", "cine", "cât"],
  },
  {
    sentence: "Omul care a ajutat-o era vecin de-al nostru.",
    pronoun: "care",
    question: "Identifică pronumele relativ din: 'Omul care a ajutat-o era vecin de-al nostru.'",
    correct: "care",
    wrongs: ["cine", "ce", "cât"],
  },
  {
    sentence: "Nimeni nu știe cine a luat cartea.",
    pronoun: "cine",
    question: "Care este pronumele relativ din: 'Nimeni nu știe cine a luat cartea.'?",
    correct: "cine",
    wrongs: ["care", "ce", "cât"],
  },
  {
    sentence: "Îți arăt cât poți câștiga dacă înveți.",
    pronoun: "cât",
    question: "Pronumele relativ din 'Îți arăt cât poți câștiga dacă înveți.' este:",
    correct: "cât",
    wrongs: ["care", "ce", "cine"],
  },
  {
    sentence: "Prietenul despre care vorbesc locuiește în București.",
    pronoun: "care",
    question: "Care este pronumele relativ din: 'Prietenul despre care vorbesc locuiește în București.'?",
    correct: "care",
    wrongs: ["ce", "cine", "cât"],
  },
];

function generateRelativ(seed: number): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumQuestion[] = [];
  const pool = shuffle([...RELATIV_POOL], rng);

  for (let i = 0; i < 15; i++) {
    const item = pool[i % pool.length];
    questions.push(createMCQ(T_PRON, S_REL, item.question, item.correct, item.wrongs, rng));
  }
  return questions;
}

// ─── EXPORT ──────────────────────────────────────────────────────────────────

export const C5_Subst_Generators: Record<string, Record<string, (seed?: number) => CurriculumQuestion[]>> = {
  substantiv_c5: {
    declinarea_c5: (seed = Date.now()) => generateDeclinarea(seed),
    substantive_colective_c5: (seed = Date.now()) => generateColective(seed),
    genul_substantivelor_c5: (seed = Date.now()) => generateGenul(seed),
  },
  pronume_c5: {
    pronume_interogativ_c5: (seed = Date.now()) => generateInterogativ(seed),
    pronume_nehotarat_c5: (seed = Date.now()) => generateNehotarat(seed),
    pronume_relativ_c5: (seed = Date.now()) => generateRelativ(seed),
  },
};
