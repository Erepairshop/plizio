// ─── ROMANIAN GENERATORS (CLASA a IV-a) — MORFOLOGIE ─────────────────────────
// Procedural MCQ question generators for Romanian language curriculum
// Clasa a IV-a (4th grade) – morfologie theme (5 subtopics)

import type { CurriculumQuestion, CurriculumMCQ, CurriculumTyping } from "./curriculumTypes";

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
  const mcqs: CurriculumMCQ[] = [];
  const T = “morfologie_c4”;
  const S = “substantiv_c4”;

  for (let i = 0; i < 30; i++) {
    const tip = i % 6;
    if (tip === 0) {
      mcqs.push(createMCQ(T, S, “Substantivul „carte” este de gen:”, “feminin”, [“masculin”, “neutru”, “comun”], rng));
    } else if (tip === 1) {
      mcqs.push(createMCQ(T, S, “Substantivul „scaun” este de gen:”, “neutru”, [“masculin”, “feminin”, “comun”], rng));
    } else if (tip === 2) {
      mcqs.push(createMCQ(T, S, “Substantivul „copac” este de gen:”, “masculin”, [“feminin”, “neutru”, “comun”], rng));
    } else if (tip === 3) {
      mcqs.push(createMCQ(T, S, “Care este forma de plural a substantivului „floare”?”, “flori”, [“floari”, “floarea”, “florile”], rng));
    } else if (tip === 4) {
      mcqs.push(createMCQ(T, S, “În propoziția „Mama pregătește masa.”, substantivul „mama” este în cazul:”, “nominativ”, [“acuzativ”, “dativ”, “genitiv”], rng));
    } else {
      mcqs.push(createMCQ(T, S, “În propoziția „El citește cartea.”, substantivul „cartea” este în cazul:”, “acuzativ”, [“nominativ”, “dativ”, “genitiv”], rng));
    }
  }

  const typings: CurriculumTyping[] = [
    { type: “typing”, topic: T, subtopic: S, question: “Ce sunt genurile gramaticale în limba română?”, answer: [“masculin, feminin, neutru”, “3 genuri”] },
    { type: “typing”, topic: T, subtopic: S, question: “Scrie genul substantivului 'carte'”, answer: [“feminin”, “feminin”] },
    { type: “typing”, topic: T, subtopic: S, question: “Scrie genul substantivului 'copac'”, answer: [“masculin”, “masculin”] },
    { type: “typing”, topic: T, subtopic: S, question: “Care caz gramatical indică subiectul?”, answer: [“nominativ”, “nominativul”] },
    { type: “typing”, topic: T, subtopic: S, question: “Care caz gramatical indică complementul direct?”, answer: [“acuzativ”, “acuzativul”] },
    { type: “typing”, topic: T, subtopic: S, question: “Cum se numește articolul din cuvântul 'cartea'?”, answer: [“hotărât”, “articol hotărât”] },
    { type: “typing”, topic: T, subtopic: S, question: “Cum se numește articolul din cuvântul 'o carte'?”, answer: [“nehotărât”, “articol nehotărât”] },
    { type: “typing”, topic: T, subtopic: S, question: “Pluralul substantivului 'carte' este...”, answer: [“cărți”, “carti”] },
    { type: “typing”, topic: T, subtopic: S, question: “Completează: Substantivul exprimă persoană, animal sau ...”, answer: [“obiect”, “lucru”, “idee”] },
    { type: “typing”, topic: T, subtopic: S, question: “Ce exprimă genul substantivului?”, answer: [“dacă e masculin, feminin sau neutru”, “categoria gramaticala”] },
  ];

  return shuffle([...mcqs, ...typings], rng);
}

// ─── 2. ADJECTIV ──────────────────────────────────────────────────────────────

function gen_adjectiv_c4(seed: number): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const mcqs: CurriculumMCQ[] = [];
  const T = “morfologie_c4”;
  const S = “adjectiv_c4”;

  for (let i = 0; i < 30; i++) {
    const tip = i % 5;
    if (tip === 0) {
      mcqs.push(createMCQ(T, S, “Care este gradul de comparație al adjectivului din: „Maria este mai înaltă decât Ana”?”, “comparativ de superioritate”, [“superlativ relativ”, “comparativ de egalitate”, “pozitiv”], rng));
    } else if (tip === 1) {
      mcqs.push(createMCQ(T, S, “Adjectivul „frumos” din propoziția „Are un câine frumos.” este la gradul:”, “pozitiv”, [“comparativ de superioritate”, “superlativ absolut”, “comparativ de inferioritate”], rng));
    } else if (tip === 2) {
      mcqs.push(createMCQ(T, S, “Care este gradul de comparație al adjectivului din: „Ionel este foarte cuminte”?”, “superlativ absolut”, [“superlativ relativ”, “comparativ de superioritate”, “pozitiv”], rng));
    } else if (tip === 3) {
      mcqs.push(createMCQ(T, S, “Alege forma corectă a adjectivului: „O fată ___.” (frumos)”, “frumoasă”, [“frumos”, “frumoși”, “frumoase”], rng));
    } else {
      mcqs.push(createMCQ(T, S, “Alege forma corectă a adjectivului: „Copii ___.” (bun)”, “buni”, [“bună”, “bun”, “bune”], rng));
    }
  }

  const typings: CurriculumTyping[] = [
    { type: “typing”, topic: T, subtopic: S, question: “Scrie un adjectiv în gradul pozitiv”, answer: [“frumos”, “bun”, “mic”, “mare”] },
    { type: “typing”, topic: T, subtopic: S, question: “Ce grad de comparație folosește 'mai...decât'?”, answer: [“comparativ de superioritate”, “comparativ”] },
    { type: “typing”, topic: T, subtopic: S, question: “Ce grad folosește 'cel/cea mai...din'?”, answer: [“superlativ relativ”, “superlativ”] },
    { type: “typing”, topic: T, subtopic: S, question: “Completează: 'Ionel este foarte inteligent' = superlativ...”, answer: [“absolut”, “absolutus”] },
    { type: “typing”, topic: T, subtopic: S, question: “La ce grad de comparație se folosește 'la fel de...ca'?”, answer: [“comparativ de egalitate”, “egalitate”] },
    { type: “typing”, topic: T, subtopic: S, question: “Ce se schimbă la adjectiv atunci când o folosești cu un substantiv feminin?”, answer: [“genul și numărul”, “forma”, “terminația”] },
    { type: “typing”, topic: T, subtopic: S, question: “Forma comparativă de inferioritate foloses cuvintele...”, answer: [“mai puțin”, “mai putin”] },
    { type: “typing”, topic: T, subtopic: S, question: “Scrie comparativul superiorității pentru 'bun'”, answer: [“mai bun”, “mai bun”, “superior”] },
    { type: “typing”, topic: T, subtopic: S, question: “Cum se numesc gradele adjectivului?”, answer: [“pozitiv, comparativ, superlativ”, “3 grade”] },
    { type: “typing”, topic: T, subtopic: S, question: “Ce tip de acord are adjectivul cu substantivul?”, answer: [“acord în gen și număr”, “acord gramatical”] },
  ];

  return shuffle([...mcqs, ...typings], rng);
}

// ─── 3. PRONUME PERSONAL ──────────────────────────────────────────────────────

function gen_pronume_personal_c4(seed: number): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const mcqs: CurriculumMCQ[] = [];
  const T = “morfologie_c4”;
  const S = “pronume_personal_c4”;

  for (let i = 0; i < 30; i++) {
    const tip = i % 4;
    if (tip === 0) {
      mcqs.push(createMCQ(T, S, “Pronumele personal „eu” este de persoana:”, “I singular”, [“I plural”, “a II-a singular”, “a III-a singular”], rng));
    } else if (tip === 1) {
      mcqs.push(createMCQ(T, S, “Pronumele personal „ei” este de persoana:”, “a III-a plural masculin”, [“a II-a plural”, “I plural”, “a III-a plural feminin”], rng));
    } else if (tip === 2) {
      mcqs.push(createMCQ(T, S, “Care este forma neaccentuată a pronumelui personal de persoana I singular, cazul dativ?”, “îmi”, [“mie”, “mă”, “eu”], rng));
    } else {
      mcqs.push(createMCQ(T, S, “Identifică pronumele personal din propoziția: „Noi mergem la școală.””, “noi”, [“mergem”, “la”, “școală”], rng));
    }
  }

  const typings: CurriculumTyping[] = [
    { type: “typing”, topic: T, subtopic: S, question: “Scrie pronumele personal pentru 'first person singular'”, answer: [“eu”, “i”] },
    { type: “typing”, topic: T, subtopic: S, question: “Scrie pronumele personal pentru 'second person singular'”, answer: [“tu”, “you”] },
    { type: “typing”, topic: T, subtopic: S, question: “Scrie pronumele personal pentru 'first person plural'”, answer: [“noi”] },
    { type: “typing”, topic: T, subtopic: S, question: “Forma neaccentuată a pronumelui 'eu' în caz dativ este...”, answer: [“îmi”, “imi”] },
    { type: “typing”, topic: T, subtopic: S, question: “Pronumele personal poate fi de persoana...”, answer: [“I, II, III”, “1, 2, 3”] },
    { type: “typing”, topic: T, subtopic: S, question: “Pronumele personal poate fi de numărul...”, answer: [“singular și plural”, “singulari plural”] },
    { type: “typing”, topic: T, subtopic: S, question: “Ce caz se folosește pentru complement direct?”, answer: [“acuzativ”, “acuzativul”] },
    { type: “typing”, topic: T, subtopic: S, question: “Ce caz se folosește pentru complement indirect?”, answer: [“dativ”, “dativul”] },
    { type: “typing”, topic: T, subtopic: S, question: “Care pronume personal este de persoana a III-a plural feminin?”, answer: [“ele”, “le”] },
    { type: “typing”, topic: T, subtopic: S, question: “Completează: Pronumele personal inlocuiește un ...”, answer: [“substantiv”, “noun”, “cuvant”] },
  ];

  return shuffle([...mcqs, ...typings], rng);
}

// ─── 4. PRONUME POSESIV ───────────────────────────────────────────────────────

function gen_pronume_posesiv_c4(seed: number): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const mcqs: CurriculumMCQ[] = [];
  const T = “morfologie_c4”;
  const S = “pronume_posesiv_c4”;

  for (let i = 0; i < 30; i++) {
    const tip = i % 3;
    if (tip === 0) {
      mcqs.push(createMCQ(T, S, “Ce pronume posesiv completează corect: „Cartea ___ este pe masă.” (ea)”, “ei”, [“lui”, “lor”, “sa”], rng));
    } else if (tip === 1) {
      mcqs.push(createMCQ(T, S, “Ce pronume posesiv completează corect: „Câinele ___ este blând.” (eu)”, “meu”, [“mea”, “nostru”, “tău”], rng));
    } else {
      mcqs.push(createMCQ(T, S, “Ce pronume posesiv completează corect: „Casa ___ este mare.” (noi)”, “noastră”, [“nostru”, “voastră”, “lor”], rng));
    }
  }

  const typings: CurriculumTyping[] = [
    { type: “typing”, topic: T, subtopic: S, question: “Cum se numește pronumele care indică posesiunea?”, answer: [“posesiv”, “pronume posesiv”] },
    { type: “typing”, topic: T, subtopic: S, question: “Pronumele posesiv al pronumelui 'eu' (masculin) este...”, answer: [“meu”, “mieu”] },
    { type: “typing”, topic: T, subtopic: S, question: “Pronumele posesiv al pronumelui 'noi' (feminin) este...”, answer: [“noastră”, “noastra”] },
    { type: “typing”, topic: T, subtopic: S, question: “Pronumele posesiv trebuie să se acorde cu substantivul în...”, answer: [“gen și număr”, “gen si numar”] },
    { type: “typing”, topic: T, subtopic: S, question: “Care pronume posesiv este de persoana a III-a plural?”, answer: [“lor”, “lor”] },
    { type: “typing”, topic: T, subtopic: S, question: “Completează: 'Cartea ___ este interesantă' (ta)”, answer: [“ta”, “taa”] },
    { type: “typing”, topic: T, subtopic: S, question: “Pronumele posesiv poate fi accentuat sau...”, answer: [“neaccentuat”, “neaccentuatv”] },
    { type: “typing”, topic: T, subtopic: S, question: “Scrie un pronume posesiv al personei I singular (feminin)”, answer: [“mea”] },
    { type: “typing”, topic: T, subtopic: S, question: “Pronumele posesiv marchează cine...”, answer: [“posedă ceva”, “e proprietarul”] },
    { type: “typing”, topic: T, subtopic: S, question: “Care pronume posesiv merge cu 'caiet' (masculin)?”, answer: [“meu”, “tău”, “al tău”] },
  ];

  return shuffle([...mcqs, ...typings], rng);
}

// ─── 5. VERB — TIMPURI ────────────────────────────────────────────────────────

function gen_verb_timpuri_c4(seed: number): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const mcqs: CurriculumMCQ[] = [];
  const T = “morfologie_c4”;
  const S = “verb_timpuri_c4”;

  for (let i = 0; i < 30; i++) {
    const tip = i % 6;
    if (tip === 0) {
      mcqs.push(createMCQ(T, S, “Care este timpul verbului subliniat din propoziția „Ieri am citit o carte frumoasă.”?”, “perfect compus”, [“prezent”, “imperfect”, “viitor”], rng));
    } else if (tip === 1) {
      mcqs.push(createMCQ(T, S, “Care este timpul verbului din propoziția „Copiii se joacă în parc.”?”, “prezent”, [“imperfect”, “perfect compus”, “perfect simplu”], rng));
    } else if (tip === 2) {
      mcqs.push(createMCQ(T, S, “Care este timpul verbului din propoziția „Când eram mic, mergeam în fiecare zi la bunici.”?”, “imperfect”, [“prezent”, “perfect compus”, “mai-mult-ca-perfect”], rng));
    } else if (tip === 3) {
      mcqs.push(createMCQ(T, S, “Care este timpul verbului din propoziția „Mâine vom merge la munte.”?”, “viitor”, [“prezent”, “perfect compus”, “imperfect”], rng));
    } else if (tip === 4) {
      mcqs.push(createMCQ(T, S, “Care este timpul verbului din propoziția „El fugi repede spre casă.”?”, “perfect simplu”, [“perfect compus”, “imperfect”, “prezent”], rng));
    } else {
      mcqs.push(createMCQ(T, S, “Care este timpul verbului din propoziția „Când am ajuns, ei plecaseră deja.”?”, “mai-mult-ca-perfect”, [“perfect compus”, “imperfect”, “perfect simplu”], rng));
    }
  }

  const typings: CurriculumTyping[] = [
    { type: “typing”, topic: T, subtopic: S, question: “Cum se numesc verbele care se schimbă în funcție de context?”, answer: [“cuvinte variabile”, “verbe”] },
    { type: “typing”, topic: T, subtopic: S, question: “Ce exprimă timpul unui verb?”, answer: [“când se desfășoară acțiunea”, “momentul actiunii”] },
    { type: “typing”, topic: T, subtopic: S, question: “Cum se numește forma verbului din '(eu) voi merge'?”, answer: [“viitor”, “viitorul”] },
    { type: “typing”, topic: T, subtopic: S, question: “Completează: '(eu) joc' este timp...”, answer: [“prezent”, “prezentul”] },
    { type: “typing”, topic: T, subtopic: S, question: “Care timp indică o acțiune care era în curs atunci cand a intervenit alta?”, answer: [“imperfect”, “imperfectul”] },
    { type: “typing”, topic: T, subtopic: S, question: “Scrie forma prezentului pentru 'a merge' la persoana I: 'eu ...'”, answer: [“merg”, “mergh”] },
    { type: “typing”, topic: T, subtopic: S, question: “Cum se numește conjugarea verbului?”, answer: [“flexiune”, “inflexiune”] },
    { type: “typing”, topic: T, subtopic: S, question: “Câte timpuri principale are limba română?”, answer: [“3”, “trei”] },
    { type: “typing”, topic: T, subtopic: S, question: “Ce timp se utilizează pentru fapte obișnuite?”, answer: [“prezent”, “prezentul”] },
    { type: “typing”, topic: T, subtopic: S, question: “Completează: 'ieri am ...' = perfect compus”, answer: [“ceva (acțiune)”, “lucrat”, “citit”] },
  ];

  return shuffle([...mcqs, ...typings], rng);
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
