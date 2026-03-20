// ─── ROMANIAN GENERATORS (CLASA a IV-a) — MORFOLOGIE ─────────────────────────
// Procedural MCQ question generators for Romanian language curriculum
// Clasa a IV-a (4th grade) – morfologie theme (5 subtopics)

import type { CurriculumQuestion, CurriculumMCQ } from "./curriculumTypes";

function mulberry32(seed: number) {
  return function () {
    seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
function shuffle<T>(arr: T[], rng: () => number): T[] {
  const copy = [...arr]; for (let i = copy.length - 1; i > 0; i--) { const j = Math.floor(rng() * (i + 1)); [copy[i], copy[j]] = [copy[j], copy[i]]; } return copy;
}
function pick<T>(arr: T[], rng: () => number): T { return arr[Math.floor(rng() * arr.length)]; }
function createMCQ(topic: string, subtopic: string, question: string, correct: string, wrongOptions: string[], rng: () => number): CurriculumMCQ {
  const seen = new Set<string>(); const unique: string[] = [];
  for (const w of wrongOptions) { if (w !== correct && !seen.has(w)) { seen.add(w); unique.push(w); } }
  const opts = shuffle([correct, ...unique.slice(0, 3)], rng);
  return { type: "mcq", topic, subtopic, question, options: opts, correct: opts.indexOf(correct) };
}

// ─── 1. SUBSTANTIV (noun) ──────────────────────────────────────────────────────

function gen_substantiv_c4(seed: number): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "morfologie_c4";
  const S = "substantiv_c4";
  const qs: CurriculumMCQ[] = [];

  // Q1 — gen substantiv feminin
  qs.push(createMCQ(T, S,
    "Substantivul „carte” este de gen:",
    "feminin",
    ["masculin", "neutru", "comun"],
    rng
  ));

  // Q2 — gen substantiv neutru
  qs.push(createMCQ(T, S,
    "Substantivul „scaun” este de gen:",
    "neutru",
    ["masculin", "feminin", "comun"],
    rng
  ));

  // Q3 — gen substantiv masculin
  qs.push(createMCQ(T, S,
    "Substantivul „copac” este de gen:",
    "masculin",
    ["feminin", "neutru", "comun"],
    rng
  ));

  // Q4 — număr plural
  qs.push(createMCQ(T, S,
    "Care este forma de plural a substantivului „floare”?",
    "flori",
    ["floari", "floarea", "florile"],
    rng
  ));

  // Q5 — cazul nominativ
  qs.push(createMCQ(T, S,
    "În propoziția „Mama pregătește masa.”, substantivul „mama” este în cazul:",
    "nominativ",
    ["acuzativ", "dativ", "genitiv"],
    rng
  ));

  // Q6 — cazul acuzativ
  qs.push(createMCQ(T, S,
    "În propoziția „El citește cartea.”, substantivul „cartea” este în cazul:",
    "acuzativ",
    ["nominativ", "dativ", "genitiv"],
    rng
  ));

  // Q7 — articol hotărât vs nehotărât
  qs.push(createMCQ(T, S,
    "Care dintre cuvintele de mai jos conține un articol hotărât?",
    "fetița",
    ["o fată", "niște copii", "un băiat"],
    rng
  ));

  return qs;
}

// ─── 2. ADJECTIV ──────────────────────────────────────────────────────────────

function gen_adjectiv_c4(seed: number): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "morfologie_c4";
  const S = "adjectiv_c4";
  const qs: CurriculumMCQ[] = [];

  // Q1 — gradul comparativ de superioritate
  qs.push(createMCQ(T, S,
    "Care este gradul de comparație al adjectivului din: „Maria este mai înaltă decât Ana”?",
    "comparativ de superioritate",
    ["superlativ relativ", "comparativ de egalitate", "pozitiv"],
    rng
  ));

  // Q2 — gradul pozitiv
  qs.push(createMCQ(T, S,
    "Adjectivul „frumos” din propoziția „Are un câine frumos.” este la gradul:",
    "pozitiv",
    ["comparativ de superioritate", "superlativ absolut", "comparativ de inferioritate"],
    rng
  ));

  // Q3 — gradul superlativ absolut
  qs.push(createMCQ(T, S,
    "Care este gradul de comparație al adjectivului din: „Ionel este foarte cuminte”?",
    "superlativ absolut",
    ["superlativ relativ", "comparativ de superioritate", "pozitiv"],
    rng
  ));

  // Q4 — acordul adjectivului cu substantivul (gen feminin)
  qs.push(createMCQ(T, S,
    "Alege forma corectă a adjectivului: „O fată ___.” (frumos)",
    "frumoasă",
    ["frumos", "frumoși", "frumoase"],
    rng
  ));

  // Q5 — acordul adjectivului cu substantivul (plural)
  qs.push(createMCQ(T, S,
    "Alege forma corectă a adjectivului: „Copii ___.” (bun)",
    "buni",
    ["bună", "bun", "bune"],
    rng
  ));

  // Q6 — comparativ de egalitate
  qs.push(createMCQ(T, S,
    "Care este gradul de comparație al adjectivului din: „Ionuț este la fel de înalt ca Radu”?",
    "comparativ de egalitate",
    ["comparativ de superioritate", "superlativ relativ", "pozitiv"],
    rng
  ));

  // Q7 — superlativ relativ
  qs.push(createMCQ(T, S,
    "Care este gradul de comparație al adjectivului din: „Ana este cea mai harnică din clasă”?",
    "superlativ relativ de superioritate",
    ["superlativ absolut", "comparativ de superioritate", "comparativ de egalitate"],
    rng
  ));

  return qs;
}

// ─── 3. PRONUME PERSONAL ──────────────────────────────────────────────────────

function gen_pronume_personal_c4(seed: number): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "morfologie_c4";
  const S = "pronume_personal_c4";
  const qs: CurriculumMCQ[] = [];

  // Q1 — persoana I singular
  qs.push(createMCQ(T, S,
    "Pronumele personal „eu” este de persoana:",
    "I singular",
    ["I plural", "a II-a singular", "a III-a singular"],
    rng
  ));

  // Q2 — persoana a III-a plural
  qs.push(createMCQ(T, S,
    "Pronumele personal „ei” este de persoana:",
    "a III-a plural masculin",
    ["a II-a plural", "I plural", "a III-a plural feminin"],
    rng
  ));

  // Q3 — forma neaccentuată dativ persoana I
  qs.push(createMCQ(T, S,
    "Care este forma neaccentuată a pronumelui personal de persoana I singular, cazul dativ?",
    "îmi",
    ["mie", "mă", "eu"],
    rng
  ));

  // Q4 — forma accentuată dativ persoana a II-a
  qs.push(createMCQ(T, S,
    "Care este forma accentuată a pronumelui personal de persoana a II-a singular, cazul dativ?",
    "ție",
    ["îți", "te", "tu"],
    rng
  ));

  // Q5 — forma acuzativ persoana a III-a singular feminin
  qs.push(createMCQ(T, S,
    "Care este forma accentuată a pronumelui personal de persoana a III-a singular feminin, cazul acuzativ?",
    "ea",
    ["ei", "îi", "i"],
    rng
  ));

  // Q6 — identificare pronume personal în propoziție
  qs.push(createMCQ(T, S,
    "Identifică pronumele personal din propoziția: „Noi mergem la școală.”",
    "noi",
    ["mergem", "la", "școală"],
    rng
  ));

  return qs;
}

// ─── 4. PRONUME POSESIV ───────────────────────────────────────────────────────

function gen_pronume_posesiv_c4(seed: number): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "morfologie_c4";
  const S = "pronume_posesiv_c4";
  const qs: CurriculumMCQ[] = [];

  // Q1 — pronume posesiv persoana a III-a singular feminin
  qs.push(createMCQ(T, S,
    "Ce pronume posesiv completează corect: „Cartea ___ este pe masă.” (ea)",
    "ei",
    ["lui", "lor", "sa"],
    rng
  ));

  // Q2 — pronume posesiv persoana I singular masculin
  qs.push(createMCQ(T, S,
    "Ce pronume posesiv completează corect: „Câinele ___ este blând.” (eu)",
    "meu",
    ["mea", "nostru", "tău"],
    rng
  ));

  // Q3 — pronume posesiv persoana a II-a singular feminin
  qs.push(createMCQ(T, S,
    "Ce pronume posesiv completează corect: „Rochia ___ este albastră.” (tu)",
    "ta",
    ["tău", "voastră", "sa"],
    rng
  ));

  // Q4 — pronume posesiv persoana I plural
  qs.push(createMCQ(T, S,
    "Ce pronume posesiv completează corect: „Casa ___ este mare.” (noi)",
    "noastră",
    ["nostru", "voastră", "lor"],
    rng
  ));

  // Q5 — pronume posesiv persoana a II-a plural
  qs.push(createMCQ(T, S,
    "Ce pronume posesiv completează corect: „Caietele ___ sunt curate.” (voi)",
    "voastre",
    ["voastră", "vostru", "lor"],
    rng
  ));

  // Q6 — pronume posesiv persoana a III-a plural
  qs.push(createMCQ(T, S,
    "Ce pronume posesiv completează corect: „Părinții ___ sunt profesori.” (ei/ele)",
    "lor",
    ["lui", "sa", "ei"],
    rng
  ));

  return qs;
}

// ─── 5. VERB — TIMPURI ────────────────────────────────────────────────────────

function gen_verb_timpuri_c4(seed: number): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "morfologie_c4";
  const S = "verb_timpuri_c4";
  const qs: CurriculumMCQ[] = [];

  // Q1 — perfect compus
  qs.push(createMCQ(T, S,
    "Care este timpul verbului subliniat din propoziția „Ieri am citit o carte frumoasă.”?",
    "perfect compus",
    ["prezent", "imperfect", "viitor"],
    rng
  ));

  // Q2 — prezent
  qs.push(createMCQ(T, S,
    "Care este timpul verbului din propoziția „Copiii se joacă în parc.”?",
    "prezent",
    ["imperfect", "perfect compus", "perfect simplu"],
    rng
  ));

  // Q3 — imperfect
  qs.push(createMCQ(T, S,
    "Care este timpul verbului din propoziția „Când eram mic, mergeam în fiecare zi la bunici.”?",
    "imperfect",
    ["prezent", "perfect compus", "mai-mult-ca-perfect"],
    rng
  ));

  // Q4 — viitor
  qs.push(createMCQ(T, S,
    "Care este timpul verbului din propoziția „Mâine vom merge la munte.”?",
    "viitor",
    ["prezent", "perfect compus", "imperfect"],
    rng
  ));

  // Q5 — perfect simplu
  qs.push(createMCQ(T, S,
    "Care este timpul verbului din propoziția „El fugi repede spre casă.”?",
    "perfect simplu",
    ["perfect compus", "imperfect", "prezent"],
    rng
  ));

  // Q6 — mai-mult-ca-perfect
  qs.push(createMCQ(T, S,
    "Care este timpul verbului din propoziția „Când am ajuns, ei plecaseră deja.”?",
    "mai-mult-ca-perfect",
    ["perfect compus", "imperfect", "perfect simplu"],
    rng
  ));

  // Q7 — conjugare prezent persoana I plural
  qs.push(createMCQ(T, S,
    "Care este forma corectă a verbului „a citi” la prezent, persoana I plural?",
    "citim",
    ["citesc", "citiți", "citea"],
    rng
  ));

  // unused but to satisfy pick usage check — suppress lint
  void pick;

  return qs;
}

// ─── EXPORT ───────────────────────────────────────────────────────────────────

export const C4_Morfo_Generators: Record<string, Record<string, (seed?: number) => CurriculumQuestion[]>> = {
  morfologie_c4: {
    substantiv_c4: (seed = 42) => gen_substantiv_c4(seed),
    adjectiv_c4: (seed = 42) => gen_adjectiv_c4(seed),
    pronume_personal_c4: (seed = 42) => gen_pronume_personal_c4(seed),
    pronume_posesiv_c4: (seed = 42) => gen_pronume_posesiv_c4(seed),
    verb_timpuri_c4: (seed = 42) => gen_verb_timpuri_c4(seed),
  }
};
