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
  const T = "morfologie_c4";
  const S = "substantiv_c4";

  // Adatpool: género questions
  const genreQuestions = [
    { q: "Substantivul \"carte\" este de gen:", c: "feminin", w: ["masculin", "neutru", "comun"] },
    { q: "Substantivul \"scaun\" este de gen:", c: "neutru", w: ["masculin", "feminin", "comun"] },
    { q: "Substantivul \"copac\" este de gen:", c: "masculin", w: ["feminin", "neutru", "comun"] },
    { q: "Substantivul \"masă\" este de gen:", c: "feminin", w: ["masculin", "neutru", "comun"] },
    { q: "Substantivul \"cuvânt\" este de gen:", c: "neutru", w: ["masculin", "feminin", "comun"] },
    { q: "Substantivul \"om\" este de gen:", c: "masculin", w: ["feminin", "neutru", "comun"] },
    { q: "Substantivul \"vorbă\" este de gen:", c: "feminin", w: ["masculin", "neutru", "comun"] },
    { q: "Substantivul \"lucru\" este de gen:", c: "neutru", w: ["masculin", "feminin", "comun"] },
    { q: "Substantivul \"băiat\" este de gen:", c: "masculin", w: ["feminin", "neutru", "comun"] },
    { q: "Substantivul \"fată\" este de gen:", c: "feminin", w: ["masculin", "neutru", "comun"] },
  ];

  // Adatpool: plural questions
  const pluralQuestions = [
    { q: "Care este forma de plural a substantivului \"floare\"?", c: "flori", w: ["floari", "floarea", "florile"] },
    { q: "Care este forma de plural a substantivului \"carte\"?", c: "cărți", w: ["cartei", "cartela", "cartele"] },
    { q: "Care este forma de plural a substantivului \"copac\"?", c: "copaci", w: ["copace", "copacel", "copacei"] },
    { q: "Care este forma de plural a substantivului \"masă\"?", c: "mese", w: ["masele", "masă", "masezi"] },
    { q: "Care este forma de plural a substantivului \"scaun\"?", c: "scaune", w: ["scauni", "scaunul", "scaunuri"] },
    { q: "Care este forma de plural a substantivului \"om\"?", c: "oameni", w: ["omi", "omu", "omul"] },
    { q: "Care este forma de plural a substantivului \"vorbă\"?", c: "vorbe", w: ["vorbezi", "vorba", "vorburi"] },
    { q: "Care este forma de plural a substantivului \"lucru\"?", c: "lucruri", w: ["lucruri", "lucre", "lucrele"] },
  ];

  // Adatpool: case questions
  const caseQuestions = [
    { q: "În propoziția \"Mama pregătește masa.\", substantivul \"mama\" este în cazul:", c: "nominativ", w: ["acuzativ", "dativ", "genitiv"] },
    { q: "În propoziția \"El citește cartea.\", substantivul \"cartea\" este în cazul:", c: "acuzativ", w: ["nominativ", "dativ", "genitiv"] },
    { q: "În propoziția \"Dau cartea fratelui.\", substantivul \"fratelui\" este în cazul:", c: "dativ", w: ["nominativ", "acuzativ", "genitiv"] },
    { q: "În propoziția \"Aceasta este cartea lui Ion.\", substantivul \"lui Ion\" este în cazul:", c: "genitiv", w: ["nominativ", "acuzativ", "dativ"] },
    { q: "Care caz răspunde la întrebarea 'Cine?'?", c: "nominativ", w: ["acuzativ", "dativ", "genitiv"] },
    { q: "Care caz răspunde la întrebarea 'Pe cine?'?", c: "acuzativ", w: ["nominativ", "dativ", "genitiv"] },
    { q: "Care caz răspunde la întrebarea 'Cui?'?", c: "dativ", w: ["nominativ", "acuzativ", "genitiv"] },
    { q: "Care caz răspunde la întrebarea 'A cui?'?", c: "genitiv", w: ["nominativ", "acuzativ", "dativ"] },
  ];

  const mcqs: CurriculumMCQ[] = [];
  const combined = [
    ...shuffle(genreQuestions, rng).slice(0, 10),
    ...shuffle(pluralQuestions, rng).slice(0, 10),
    ...shuffle(caseQuestions, rng).slice(0, 10),
  ];

  for (const item of combined) {
    mcqs.push(createMCQ(T, S, item.q, item.c, item.w, rng));
  }

  const typings: CurriculumTyping[] = [
    { type: "typing", topic: T, subtopic: S, question: "Ce sunt genurile gramaticale în limba română?", answer: ["masculin, feminin, neutru", "3 genuri"] },
    { type: "typing", topic: T, subtopic: S, question: "Scrie genul substantivului 'carte'", answer: ["feminin", "feminin"] },
    { type: "typing", topic: T, subtopic: S, question: "Scrie genul substantivului 'copac'", answer: ["masculin", "masculin"] },
    { type: "typing", topic: T, subtopic: S, question: "Care caz gramatical indică subiectul?", answer: ["nominativ", "nominativul"] },
    { type: "typing", topic: T, subtopic: S, question: "Care caz gramatical indică complementul direct?", answer: ["acuzativ", "acuzativul"] },
    { type: "typing", topic: T, subtopic: S, question: "Cum se numește articolul din cuvântul 'cartea'?", answer: ["hotărât", "articol hotărât"] },
    { type: "typing", topic: T, subtopic: S, question: "Cum se numește articolul din cuvântul 'o carte'?", answer: ["nehotărât", "articol nehotărât"] },
    { type: "typing", topic: T, subtopic: S, question: "Pluralul substantivului 'carte' este...", answer: ["cărți", "carti"] },
    { type: "typing", topic: T, subtopic: S, question: "Completează: Substantivul exprimă persoană, animal sau ...", answer: ["obiect", "lucru", "idee"] },
    { type: "typing", topic: T, subtopic: S, question: "Ce exprimă genul substantivului?", answer: ["dacă e masculin, feminin sau neutru", "categoria gramaticala"] },
  ];

  return shuffle([...mcqs, ...typings], rng);
}

// ─── 2. ADJECTIV ──────────────────────────────────────────────────────────────

function gen_adjectiv_c4(seed: number): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "morfologie_c4";
  const S = "adjectiv_c4";

  // Adatpool: degree of comparison questions
  const degreeQuestions = [
    { q: "Care este gradul de comparație al adjectivului din: \"Maria este mai înaltă decât Ana\"?", c: "comparativ de superioritate", w: ["superlativ relativ", "comparativ de egalitate", "pozitiv"] },
    { q: "Adjectivul \"frumos\" din propoziția \"Are un câine frumos.\" este la gradul:", c: "pozitiv", w: ["comparativ de superioritate", "superlativ absolut", "comparativ de inferioritate"] },
    { q: "Care este gradul de comparație al adjectivului din: \"Ionel este foarte cuminte\"?", c: "superlativ absolut", w: ["superlativ relativ", "comparativ de superioritate", "pozitiv"] },
    { q: "Care gradul indică: \"la fel de frumos ca\"?", c: "comparativ de egalitate", w: ["comparativ de superioritate", "superlativ relativ", "pozitiv"] },
    { q: "Care gradul indică \"mai puțin frumos decât\"?", c: "comparativ de inferioritate", w: ["comparativ de superioritate", "superlativ absolut", "pozitiv"] },
    { q: "Care gradul indică \"cel mai frumos din\"?", c: "superlativ relativ", w: ["superlativ absolut", "comparativ de superioritate", "pozitiv"] },
    { q: "\"Frumos\" (fără comparație) este în gradul:", c: "pozitiv", w: ["comparativ", "superlativ", "relativ"] },
    { q: "\"Mai puternic\" este un exemplu de:", c: "comparativ de superioritate", w: ["superlativ absolut", "pozitiv", "comparativ de egalitate"] },
    { q: "\"Cel mai puternic\" este un exemplu de:", c: "superlativ relativ", w: ["superlativ absolut", "comparativ", "pozitiv"] },
    { q: "\"Foarte frumos\" este un exemplu de:", c: "superlativ absolut", w: ["superlativ relativ", "comparativ", "pozitiv"] },
  ];

  // Adatpool: agreement questions
  const agreementQuestions = [
    { q: "Alege forma corectă a adjectivului: \"O fată ___.\" (frumos)", c: "frumoasă", w: ["frumos", "frumoși", "frumoase"] },
    { q: "Alege forma corectă a adjectivului: \"Copii ___.\" (bun)", c: "buni", w: ["bună", "bun", "bune"] },
    { q: "Alege forma corectă a adjectivului: \"Cărți ___.\" (roz)", c: "roz", w: ["roze", "rozu", "rozii"] },
    { q: "Alege forma corectă a adjectivului: \"Un băiat ___.\" (mic)", c: "mic", w: ["mică", "mici", "micuț"] },
    { q: "Alege forma corectă a adjectivului: \"O pâine ___.\" (cald)", c: "caldă", w: ["cald", "calzi", "calzi"] },
    { q: "Adjectivul trebuie să se acorde cu substantivul în:", c: "gen și număr", w: ["caz și persoană", "timp și aspect", "doar număr"] },
    { q: "Alege forma corectă a adjectivului: \"Zile ___.\" (lung)", c: "lungi", w: ["lung", "lunga", "lungă"] },
    { q: "Alege forma corectă a adjectivului: \"Un glas ___.\" (frumos)", c: "frumos", w: ["frumoasă", "frumoși", "frumoase"] },
    { q: "Alege forma corectă a adjectivului: \"Mele ___.\" (trist)", c: "trist", w: ["tristo", "triste", "triști"] },
    { q: "Alege forma corectă a adjectivului: \"Ochi ___.\" (albastru)", c: "albastri", w: ["albaștri", "albastru", "albastre"] },
  ];

  const mcqs: CurriculumMCQ[] = [];
  const combined = [
    ...shuffle(degreeQuestions, rng).slice(0, 15),
    ...shuffle(agreementQuestions, rng).slice(0, 15),
  ];

  for (const item of combined) {
    mcqs.push(createMCQ(T, S, item.q, item.c, item.w, rng));
  }

  const typings: CurriculumTyping[] = [
    { type: "typing", topic: T, subtopic: S, question: "Scrie un adjectiv în gradul pozitiv", answer: ["frumos", "bun", "mic", "mare"] },
    { type: "typing", topic: T, subtopic: S, question: "Ce grad de comparație folosește 'mai...decât'?", answer: ["comparativ de superioritate", "comparativ"] },
    { type: "typing", topic: T, subtopic: S, question: "Ce grad folosește 'cel/cea mai...din'?", answer: ["superlativ relativ", "superlativ"] },
    { type: "typing", topic: T, subtopic: S, question: "Completează: 'Ionel este foarte inteligent' = superlativ...", answer: ["absolut", "absolutus"] },
    { type: "typing", topic: T, subtopic: S, question: "La ce grad de comparație se folosește 'la fel de...ca'?", answer: ["comparativ de egalitate", "egalitate"] },
    { type: "typing", topic: T, subtopic: S, question: "Ce se schimbă la adjectiv atunci când o folosești cu un substantiv feminin?", answer: ["genul și numărul", "forma", "terminația"] },
    { type: "typing", topic: T, subtopic: S, question: "Forma comparativă de inferioritate foloses cuvintele...", answer: ["mai puțin", "mai putin"] },
    { type: "typing", topic: T, subtopic: S, question: "Scrie comparativul superiorității pentru 'bun'", answer: ["mai bun", "mai bun", "superior"] },
    { type: "typing", topic: T, subtopic: S, question: "Cum se numesc gradele adjectivului?", answer: ["pozitiv, comparativ, superlativ", "3 grade"] },
    { type: "typing", topic: T, subtopic: S, question: "Ce tip de acord are adjectivul cu substantivul?", answer: ["acord în gen și număr", "acord gramatical"] },
  ];

  return shuffle([...mcqs, ...typings], rng);
}

// ─── 3. PRONUME PERSONAL ──────────────────────────────────────────────────────

function gen_pronume_personal_c4(seed: number): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "morfologie_c4";
  const S = "pronume_personal_c4";

  // Adatpool: person & number questions
  const personQuestions = [
    { q: "Pronumele personal \"eu\" este de persoana:", c: "I singular", w: ["I plural", "a II-a singular", "a III-a singular"] },
    { q: "Pronumele personal \"tu\" este de persoana:", c: "a II-a singular", w: ["I singular", "I plural", "a III-a singular"] },
    { q: "Pronumele personal \"el\" este de persoana:", c: "a III-a singular masculin", w: ["I singular", "a II-a singular", "a III-a plural"] },
    { q: "Pronumele personal \"ei\" este de persoana:", c: "a III-a plural masculin", w: ["a II-a plural", "I plural", "a III-a plural feminin"] },
    { q: "Pronumele personal \"ele\" este de persoana:", c: "a III-a plural feminin", w: ["a III-a plural masculin", "a II-a plural", "I plural"] },
    { q: "Pronumele personal \"noi\" este de persoana:", c: "I plural", w: ["a II-a plural", "I singular", "a III-a plural"] },
    { q: "Pronumele personal \"voi\" este de persoana:", c: "a II-a plural", w: ["I plural", "a II-a singular", "a III-a plural"] },
  ];

  // Adatpool: unaccented form questions
  const unaccentedQuestions = [
    { q: "Care este forma neaccentuată a pronumelui personal de persoana I singular, cazul dativ?", c: "îmi", w: ["mie", "mă", "eu"] },
    { q: "Care este forma neaccentuată a pronumelui personal de persoana a II-a singular, cazul dativ?", c: "ți", w: ["ție", "te", "tu"] },
    { q: "Care este forma neaccentuată a pronumelui personal de persoana I singular, cazul acuzativ?", c: "mă", w: ["mine", "mi", "mie"] },
    { q: "Care este forma neaccentuată a pronumelui personal de persoana a II-a singular, cazul acuzativ?", c: "te", w: ["ție", "ți", "tu"] },
    { q: "Care este forma neaccentuată a pronumelui personal de persoana a III-a singular, cazul dativ?", c: "îi", w: ["lui", "o", "le"] },
    { q: "Care este forma neaccentuată a pronumelui personal de persoana I plural, cazul acuzativ?", c: "ne", w: ["nouă", "noi", "ni"] },
    { q: "Care este forma neaccentuată a pronumelui personal de persoana a II-a plural, cazul acuzativ?", c: "vă", w: ["vouă", "vi", "voi"] },
    { q: "Care este forma neaccentuată a pronumelui personal de persoana a III-a plural, cazul acuzativ?", c: "le", w: ["lor", "li", "ă"] },
  ];

  // Adatpool: identification questions
  const identificationQuestions = [
    { q: "Identifică pronumele personal din propoziția: \"Noi mergem la școală.\"", c: "noi", w: ["mergem", "la", "școală"] },
    { q: "Identifică pronumele personal din propoziția: \"El citește cartea.\"", c: "El", w: ["citește", "cartea", "cartea"] },
    { q: "Identifică pronumele personal din propoziția: \"Ți-am spus deja.\"", c: "Ți", w: ["am", "spus", "deja"] },
    { q: "Identifică pronumele personal din propoziția: \"Ne vedem mâine.\"", c: "Ne", w: ["vedem", "mâine", "ne"] },
    { q: "Identifică pronumele personal din propoziția: \"Se joacă în parc.\"", c: "Se", w: ["joacă", "parc", "în"] },
  ];

  const mcqs: CurriculumMCQ[] = [];
  const combined = [
    ...shuffle(personQuestions, rng).slice(0, 10),
    ...shuffle(unaccentedQuestions, rng).slice(0, 10),
    ...shuffle(identificationQuestions, rng).slice(0, 10),
  ];

  for (const item of combined) {
    mcqs.push(createMCQ(T, S, item.q, item.c, item.w, rng));
  }

  const typings: CurriculumTyping[] = [
    { type: "typing", topic: T, subtopic: S, question: "Scrie pronumele personal pentru 'first person singular'", answer: ["eu", "i"] },
    { type: "typing", topic: T, subtopic: S, question: "Scrie pronumele personal pentru 'second person singular'", answer: ["tu", "you"] },
    { type: "typing", topic: T, subtopic: S, question: "Scrie pronumele personal pentru 'first person plural'", answer: ["noi"] },
    { type: "typing", topic: T, subtopic: S, question: "Forma neaccentuată a pronumelui 'eu' în caz dativ este...", answer: ["îmi", "imi"] },
    { type: "typing", topic: T, subtopic: S, question: "Pronumele personal poate fi de persoana...", answer: ["I, II, III", "1, 2, 3"] },
    { type: "typing", topic: T, subtopic: S, question: "Pronumele personal poate fi de numărul...", answer: ["singular și plural", "singulari plural"] },
    { type: "typing", topic: T, subtopic: S, question: "Ce caz se folosește pentru complement direct?", answer: ["acuzativ", "acuzativul"] },
    { type: "typing", topic: T, subtopic: S, question: "Ce caz se folosește pentru complement indirect?", answer: ["dativ", "dativul"] },
    { type: "typing", topic: T, subtopic: S, question: "Care pronume personal este de persoana a III-a plural feminin?", answer: ["ele", "le"] },
    { type: "typing", topic: T, subtopic: S, question: "Completează: Pronumele personal inlocuiește un ...", answer: ["substantiv", "noun", "cuvant"] },
  ];

  return shuffle([...mcqs, ...typings], rng);
}

// ─── 4. PRONUME POSESIV ───────────────────────────────────────────────────────

function gen_pronume_posesiv_c4(seed: number): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "morfologie_c4";
  const S = "pronume_posesiv_c4";

  // Adatpool: possessive pronoun completion questions
  const completionQuestions = [
    { q: "Ce pronume posesiv completează corect: \"Cartea ___ este pe masă.\" (ea)", c: "ei", w: ["lui", "lor", "sa"] },
    { q: "Ce pronume posesiv completează corect: \"Câinele ___ este blând.\" (eu)", c: "meu", w: ["mea", "nostru", "tău"] },
    { q: "Ce pronume posesiv completează corect: \"Casa ___ este mare.\" (noi)", c: "noastră", w: ["nostru", "voastră", "lor"] },
    { q: "Ce pronume posesiv completează corect: \"Cartea ___ este roșie.\" (tu)", c: "ta", w: ["tău", "tua", "ta"] },
    { q: "Ce pronume posesiv completează corect: \"Caietul ___ este plin.\" (eu)", c: "meu", w: ["mi", "mie", "ma"] },
    { q: "Ce pronume posesiv completează corect: \"Părinții ___ sunt buni.\" (noi)", c: "noștri", w: ["nostri", "nostru", "noastre"] },
    { q: "Ce pronume posesiv completează corect: \"Prietenul ___ este de nădejde.\" (voi)", c: "vostru", w: ["voastru", "voștre", "vă"] },
    { q: "Ce pronume posesiv completează corect: \"Cărți ___ sunt noi.\" (ei)", c: "lor", w: ["lui", "sa", "le"] },
    { q: "Ce pronume posesiv completează corect: \"Jucării ___ sunt frumoase.\" (ea)", c: "ei", w: ["lui", "lor", "o"] },
  ];

  // Adatpool: agreement & forms questions
  const formsQuestions = [
    { q: "Pronumele posesiv \"meu\" se folosește pentru substantive:", c: "masculine singular", w: ["feminine plural", "neutre plural", "comune"] },
    { q: "Pronumele posesiv \"mea\" se folosește pentru substantive:", c: "feminine singular", w: ["masculine plural", "neutre singular", "comune"] },
    { q: "Pronumele posesiv al pronumelui 'noi' (feminin) este:", c: "noastră", w: ["noastre", "nostru", "noștri"] },
    { q: "Pronumele posesiv trebuie să se acorde cu substantivul în:", c: "gen și număr", w: ["caz și persoană", "timp și aspect", "doar număr"] },
    { q: "Care pronume posesiv este de persoana a III-a singular?", c: "al său / a sa / ai săi / ale sale", w: ["al meu", "al tău", "al nostru"] },
    { q: "Care pronume posesiv este de persoana a III-a plural?", c: "al lor / a lor / ai lor / ale lor", w: ["al vostru", "al nostru", "al tău"] },
    { q: "Pronumele posesiv accentuat al personei I singular (masculin) este:", c: "meu", w: ["mi", "mie", "ma"] },
    { q: "Pronumele posesiv accentuat al personei a II-a plural (feminin) este:", c: "voastră", w: ["vă", "vi", "voștre"] },
  ];

  // Adatpool: concept questions
  const conceptQuestions = [
    { q: "Cum se numește pronumele care indică posesiunea?", c: "posesiv", w: ["demonstrativ", "relativ", "personal"] },
    { q: "Completează: Pronumele posesiv inlocuiește un ___ și arată a cui e ceva.", c: "substantiv", w: ["verb", "adjectiv", "adverb"] },
    { q: "Pronumele posesiv poate fi accentuat sau:", c: "neaccentuat", w: ["relativ", "absolut", "interrogativ"] },
    { q: "Care pronume posesiv merge cu substantivul \"caiet\" (masculin singular)?", c: "meu / tău / al seu / nostru / vostru / lor", w: ["mea", "ta", "a sa"] },
  ];

  const mcqs: CurriculumMCQ[] = [];
  const combined = [
    ...shuffle(completionQuestions, rng).slice(0, 12),
    ...shuffle(formsQuestions, rng).slice(0, 10),
    ...shuffle(conceptQuestions, rng).slice(0, 8),
  ];

  for (const item of combined) {
    mcqs.push(createMCQ(T, S, item.q, item.c, item.w, rng));
  }

  const typings: CurriculumTyping[] = [
    { type: "typing", topic: T, subtopic: S, question: "Cum se numește pronumele care indică posesiunea?", answer: ["posesiv", "pronume posesiv"] },
    { type: "typing", topic: T, subtopic: S, question: "Pronumele posesiv al pronumelui 'eu' (masculin) este...", answer: ["meu", "mieu"] },
    { type: "typing", topic: T, subtopic: S, question: "Pronumele posesiv al pronumelui 'noi' (feminin) este...", answer: ["noastră", "noastra"] },
    { type: "typing", topic: T, subtopic: S, question: "Pronumele posesiv trebuie să se acorde cu substantivul în...", answer: ["gen și număr", "gen si numar"] },
    { type: "typing", topic: T, subtopic: S, question: "Care pronume posesiv este de persoana a III-a plural?", answer: ["lor", "lor"] },
    { type: "typing", topic: T, subtopic: S, question: "Completează: 'Cartea ___ este interesantă' (ta)", answer: ["ta", "taa"] },
    { type: "typing", topic: T, subtopic: S, question: "Pronumele posesiv poate fi accentuat sau...", answer: ["neaccentuat", "neaccentuatv"] },
    { type: "typing", topic: T, subtopic: S, question: "Scrie un pronume posesiv al personei I singular (feminin)", answer: ["mea"] },
    { type: "typing", topic: T, subtopic: S, question: "Pronumele posesiv marchează cine...", answer: ["posedă ceva", "e proprietarul"] },
    { type: "typing", topic: T, subtopic: S, question: "Care pronume posesiv merge cu 'caiet' (masculin)?", answer: ["meu", "tău", "al tău"] },
  ];

  return shuffle([...mcqs, ...typings], rng);
}

// ─── 5. VERB — TIMPURI ────────────────────────────────────────────────────────

function gen_verb_timpuri_c4(seed: number): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "morfologie_c4";
  const S = "verb_timpuri_c4";

  // Adatpool: identification questions
  const identificationQuestions = [
    { q: "Care este timpul verbului subliniat din propoziția \"Ieri am citit o carte frumoasă.\"?", c: "perfect compus", w: ["prezent", "imperfect", "viitor"] },
    { q: "Care este timpul verbului din propoziția \"Copiii se joacă în parc.\"?", c: "prezent", w: ["imperfect", "perfect compus", "perfect simplu"] },
    { q: "Care este timpul verbului din propoziția \"Când eram mic, mergeam în fiecare zi la bunici.\"?", c: "imperfect", w: ["prezent", "perfect compus", "mai-mult-ca-perfect"] },
    { q: "Care este timpul verbului din propoziția \"Mâine vom merge la munte.\"?", c: "viitor", w: ["prezent", "perfect compus", "imperfect"] },
    { q: "Care este timpul verbului din propoziția \"El fugi repede spre casă.\"?", c: "perfect simplu", w: ["perfect compus", "imperfect", "prezent"] },
    { q: "Care este timpul verbului din propoziția \"Când am ajuns, ei plecaseră deja.\"?", c: "mai-mult-ca-perfect", w: ["perfect compus", "imperfect", "perfect simplu"] },
    { q: "Care este timpul verbului din propoziția \"Cântă frumos.\"?", c: "prezent", w: ["imperativ", "perfect compus", "viitor"] },
    { q: "Care este timpul verbului din propoziția \"Am terminat temele.\"?", c: "perfect compus", w: ["prezent", "imperfect", "viitor"] },
    { q: "Care este timpul verbului din propoziția \"Se oprisem să mă gândesc.\"?", c: "mai-mult-ca-perfect", w: ["perfect compus", "imperfect", "prezent"] },
    { q: "Care este timpul verbului din propoziția \"Voi citi cartea mâine.\"?", c: "viitor", w: ["prezent", "perfect compus", "imperfect"] },
  ];

  // Adatpool: usage / meaning questions
  const usageQuestions = [
    { q: "Prezentul se folosește pentru:", c: "fapte care se petrec acum", w: ["fapte care s-au întâmplat cândva", "fapte care se vor întâmpla", "fapte care erau în curs atunci cand a interveni alta"] },
    { q: "Perfectul compus se folosește pentru:", c: "fapte care s-au întâmplat recent și au legătură cu prezent", w: ["fapte care se petrec acum", "fapte care se vor întâmpla", "fapte care erau în curs"] },
    { q: "Imperfectul se folosește pentru:", c: "fapte care erau în curs atunci când a interveni o altă faptă", w: ["fapte care se petrec acum", "fapte recente", "fapte viitoare"] },
    { q: "Viitorul se folosește pentru:", c: "fapte care se vor întâmpla", w: ["fapte care se petrec acum", "fapte recente", "fapte care erau în curs"] },
    { q: "Perfectul simplu se folosește pentru:", c: "fapte care s-au petrec și s-au încheiat", w: ["fapte care se petrec acum", "fapte care vor veni", "fapte în curs"] },
    { q: "Ce timp exprimă o acțiune care era în curs atunci când a interveni alta?", c: "imperfect", w: ["prezent", "perfect compus", "viitor"] },
    { q: "Câte timpuri principale sunt în limba română?", c: "3", w: ["2", "4", "5"] },
    { q: "Ce timp se utilizează pentru obiceiuri și fapte care se repetă?", c: "prezent", w: ["imperfect", "perfect compus", "viitor"] },
  ];

  // Adatpool: conjugation / form questions
  const formQuestions = [
    { q: "Scrie forma prezentului pentru 'a merge' la persoana I: 'eu ...'", c: "merg", w: ["mergez", "mergh", "voi merge"] },
    { q: "Scrie forma perfectului compus pentru 'a cânta' la persoana I: 'eu ...'", c: "am cântat", w: ["cântam", "voi cânta", "cânțiile"] },
    { q: "Cum se numește conjugarea verbului?", c: "flexiune", w: ["inflexiune", "declinare", "modulare"] },
    { q: "Ce exprimă timpul unui verb?", c: "când se desfășoară acțiunea", w: ["care e substantivul subiect", "unde se petrece acțiunea", "cine o face"] },
  ];

  const mcqs: CurriculumMCQ[] = [];
  const combined = [
    ...shuffle(identificationQuestions, rng).slice(0, 15),
    ...shuffle(usageQuestions, rng).slice(0, 10),
    ...shuffle(formQuestions, rng).slice(0, 5),
  ];

  for (const item of combined) {
    mcqs.push(createMCQ(T, S, item.q, item.c, item.w, rng));
  }

  const typings: CurriculumTyping[] = [
    { type: "typing", topic: T, subtopic: S, question: "Cum se numesc verbele care se schimbă în funcție de context?", answer: ["cuvinte variabile", "verbe"] },
    { type: "typing", topic: T, subtopic: S, question: "Ce exprimă timpul unui verb?", answer: ["când se desfășoară acțiunea", "momentul actiunii"] },
    { type: "typing", topic: T, subtopic: S, question: "Cum se numește forma verbului din '(eu) voi merge'?", answer: ["viitor", "viitorul"] },
    { type: "typing", topic: T, subtopic: S, question: "Completează: '(eu) joc' este timp...", answer: ["prezent", "prezentul"] },
    { type: "typing", topic: T, subtopic: S, question: "Care timp indică o acțiune care era în curs atunci cand a intervenit alta?", answer: ["imperfect", "imperfectul"] },
    { type: "typing", topic: T, subtopic: S, question: "Scrie forma prezentului pentru 'a merge' la persoana I: 'eu ...'", answer: ["merg", "mergh"] },
    { type: "typing", topic: T, subtopic: S, question: "Cum se numește conjugarea verbului?", answer: ["flexiune", "inflexiune"] },
    { type: "typing", topic: T, subtopic: S, question: "Câte timpuri principale are limba română?", answer: ["3", "trei"] },
    { type: "typing", topic: T, subtopic: S, question: "Ce timp se utilizează pentru fapte obișnuite?", answer: ["prezent", "prezentul"] },
    { type: "typing", topic: T, subtopic: S, question: "Completează: 'ieri am ...' = perfect compus", answer: ["ceva (acțiune)", "lucrat", "citit"] },
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
