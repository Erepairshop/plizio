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

/** Create typing question */
function createTyping(topic: string, subtopic: string, question: string, answer: string): CurriculumQuestion {
  return { type: "typing", topic, subtopic, question, answer: answer.toLowerCase().trim() };
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
  sintaxa_subiect: (seed = 42): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const topic = "sintaxa_c6";
    const subtopic = "subiect_c6";
    const questions: CurriculumQuestion[] = [];

    // MCQ questions (30)
    for (let i = 0; i < 30; i++) {
      const item = pick(SINTAXA_SUBIECT, rng);
      const q = createMCQ(
        topic,
        subtopic,
        `În propoziția "${item.prop}", subiectul este "${item.subiect}" care este de tip:`,
        item.tip_subiect,
        ["verb", "adverb", "conjuncție"].filter(x => x !== item.tip_subiect),
        rng
      );
      questions.push(q);
    }

    // Typing questions (15)
    questions.push(createTyping(topic, subtopic, "Ce este subiectul?", "cuvântul despre care se spune ceva"));
    questions.push(createTyping(topic, subtopic, "Subiectul răspunde la ce?", "cine face sau ce este"));
    questions.push(createTyping(topic, subtopic, "Subiectul poate fi din ce?", "substantiv, pronume, adjectiv substantivat, infinitiv"));
    questions.push(createTyping(topic, subtopic, "Se acordă subiectul cu verbul?", "da, în persoană și număr"));
    questions.push(createTyping(topic, subtopic, "Exemplu subiect substantiv:", "copilul cântă"));
    questions.push(createTyping(topic, subtopic, "Exemplu subiect pronume:", "el vorbește"));
    questions.push(createTyping(topic, subtopic, "Exemplu subiect infinitiv:", "a citi este plăcut"));
    questions.push(createTyping(topic, subtopic, "Subiectul este parte a:", "propoziției"));
    questions.push(createTyping(topic, subtopic, "Poate fi subiect absent?", "da, în comenzi: vino! merge!"));
    questions.push(createTyping(topic, subtopic, "Subiect compus este:", "mai mult de un subiect"));
    questions.push(createTyping(topic, subtopic, "Subiect simplu este:", "un singur element"));
    questions.push(createTyping(topic, subtopic, "Poziția subiectului în propoziție:", "de obicei la început"));
    questions.push(createTyping(topic, subtopic, "Subiectul exprimă:", "actantul principal al acțiunii"));
    questions.push(createTyping(topic, subtopic, "Ce tip sunt verbele la subiect plural?", "forma de plural"));
    questions.push(createTyping(topic, subtopic, "Esențialul pentru subiect:", "acord cu verbul"));

    return shuffle(questions, rng);
  },

  // SINTAXĂ — PREDICAT VERBAL
  sintaxa_predicat_verbal: (seed = 42): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const topic = "sintaxa_c6";
    const subtopic = "predicat_verbal_c6";
    const questions: CurriculumQuestion[] = [];

    // MCQ questions (30)
    for (let i = 0; i < 30; i++) {
      const item = pick(SINTAXA_PREDICAT_VERBAL, rng);
      const q = createMCQ(
        topic,
        subtopic,
        `În propoziția "${item.prop}", predicatul verbal este "${item.predicat}" care este:`,
        item.tip,
        ["substantiv", "adjectiv", "pronume"].filter(x => x !== item.tip),
        rng
      );
      questions.push(q);
    }

    // Typing questions (15)
    questions.push(createTyping(topic, subtopic, "Ce este predicatul?", "ceea ce se spune despre subiect"));
    questions.push(createTyping(topic, subtopic, "Predicatul verbal este:", "verbul din propoziție"));
    questions.push(createTyping(topic, subtopic, "Predicatul răspunde la ce?", "ce face subiectul"));
    questions.push(createTyping(topic, subtopic, "Predicatul verbal poate fi:", "simplu sau compus"));
    questions.push(createTyping(topic, subtopic, "Exemplu predicat verbal simplu:", "el merge"));
    questions.push(createTyping(topic, subtopic, "Exemplu predicat verbal compus:", "el a mers, el va merge"));
    questions.push(createTyping(topic, subtopic, "Predicatul se acordă cu:", "subiectul"));
    questions.push(createTyping(topic, subtopic, "Predicatul verbal este întotdeauna:", "verb"));
    questions.push(createTyping(topic, subtopic, "Diferența între verbal și nominal:", "verbal=verb, nominal=copulă+atribut"));
    questions.push(createTyping(topic, subtopic, "Poziția predicatului:", "după subiect, de obicei"));
    questions.push(createTyping(topic, subtopic, "Predicatul exprimă:", "acțiunea"));
    questions.push(createTyping(topic, subtopic, "Poate lipsi predicatul?", "nu, obligatoriu"));
    questions.push(createTyping(topic, subtopic, "Predicat verbal cu auxiliar:", "a fi + participiu"));
    questions.push(createTyping(topic, subtopic, "Predicat verbal negativ:", "nu + verb"));
    questions.push(createTyping(topic, subtopic, "Predicatul verbal este esențial pentru:", "înțelegerea acțiunii"));

    return shuffle(questions, rng);
  },

  // SINTAXĂ — PREDICAT NOMINAL
  sintaxa_predicat_nominal: (seed = 42): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const topic = "sintaxa_c6";
    const subtopic = "predicat_nominal_c6";
    const questions: CurriculumQuestion[] = [];

    // MCQ questions (30)
    for (let i = 0; i < 30; i++) {
      const item = pick(SINTAXA_PREDICAT_NOMINAL, rng);
      const q = createMCQ(
        topic,
        subtopic,
        `În propoziția "${item.prop}", predicatul nominal este compus din copula "${item.copula}" și atributul:`,
        item.atribut,
        ["care", "dacă", "și"].filter(x => x !== item.atribut),
        rng
      );
      questions.push(q);
    }

    // Typing questions (15)
    questions.push(createTyping(topic, subtopic, "Ce este predicatul nominal?", "copulă + atribut"));
    questions.push(createTyping(topic, subtopic, "Ce sunt copulele?", "verbe de stare: a fi, a deveni, a rămâne, a părea"));
    questions.push(createTyping(topic, subtopic, "Exemplu predicat nominal:", "el este profesor"));
    questions.push(createTyping(topic, subtopic, "Atributul predicativ este:", "adjectiv sau substantiv"));
    questions.push(createTyping(topic, subtopic, "Exemplu cu 'a deveni':", "el a devenit doctor"));
    questions.push(createTyping(topic, subtopic, "Exemplu cu 'a rămâne':", "el rămâne curios"));
    questions.push(createTyping(topic, subtopic, "Exemplu cu 'a părea':", "el pare obosit"));
    questions.push(createTyping(topic, subtopic, "Diferența verbal și nominal:", "verbal=verb activ, nominal=stare"));
    questions.push(createTyping(topic, subtopic, "Predicatul nominal exprimă:", "stare, calitate, identitate"));
    questions.push(createTyping(topic, subtopic, "Copula se acordă cu:", "subiectul"));
    questions.push(createTyping(topic, subtopic, "Atributul se acordă cu:", "subiectul (gen, număr)"));
    questions.push(createTyping(topic, subtopic, "Poate lipsi copula?", "nu, obligatorie"));
    questions.push(createTyping(topic, subtopic, "Predicat nominal fără 'a fi':", "învechi sau poetic"));
    questions.push(createTyping(topic, subtopic, "Predicatul nominal este folosit pentru:", "descriere, caracterizare"));
    questions.push(createTyping(topic, subtopic, "Predicat nominal cu adjectiv:", "el este frumos"));

    return shuffle(questions, rng);
  },

  // SINTAXĂ — COMPLEMENT DIRECT
  sintaxa_complement_direct: (seed = 42): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const topic = "sintaxa_c6";
    const subtopic = "complement_direct_c6";
    const questions: CurriculumQuestion[] = [];

    // MCQ questions (30)
    for (let i = 0; i < 30; i++) {
      const item = pick(SINTAXA_COMPLEMENT_DIRECT, rng);
      const q = createMCQ(
        topic,
        subtopic,
        `În propoziția "${item.prop}", complementul direct este:`,
        item.complement,
        ["mâine", "în parc", "pe care"].filter(x => x !== item.complement),
        rng
      );
      questions.push(q);
    }

    // Typing questions (15)
    questions.push(createTyping(topic, subtopic, "Ce este complementul direct?", "cuvântul asupra căruia cade acțiunea"));
    questions.push(createTyping(topic, subtopic, "Complementul direct răspunde la ce?", "pe cine, ce"));
    questions.push(createTyping(topic, subtopic, "Complementul direct nu are:", "prepoziție obligatorie"));
    questions.push(createTyping(topic, subtopic, "Exemplu complementul direct:", "El mănâncă pâine"));
    questions.push(createTyping(topic, subtopic, "Natura complementului direct:", "substantiv, pronume, adjectiv substantivat, infinitiv"));
    questions.push(createTyping(topic, subtopic, "Poziția complementului direct:", "de obicei după verb"));
    questions.push(createTyping(topic, subtopic, "Complementul direct poate fi:", "simple sau compus"));
    questions.push(createTyping(topic, subtopic, "Forma pronominală a complementului direct:", "îl, o, îi, le"));
    questions.push(createTyping(topic, subtopic, "Exemplu cu pronume:", "El mă vede"));
    questions.push(createTyping(topic, subtopic, "Diferență cu indirect:", "direct: pe cine/ce; indirect: cui, de ce"));
    questions.push(createTyping(topic, subtopic, "Complementul direct este:", "actantul acțiunii"));
    questions.push(createTyping(topic, subtopic, "Poate lipsi complementul direct?", "da, nu-i obligatoriu"));
    questions.push(createTyping(topic, subtopic, "Verbele tranzitive necesită:", "complement direct"));
    questions.push(createTyping(topic, subtopic, "Exemplu fără complement direct:", "El dormea"));
    questions.push(createTyping(topic, subtopic, "Complementul direct în pasiv devine:", "subiectul propoziției"));

    return shuffle(questions, rng);
  },

  // SINTAXĂ — COMPLEMENT INDIRECT
  sintaxa_complement_indirect: (seed = 42): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const topic = "sintaxa_c6";
    const subtopic = "complement_indirect_c6";
    const questions: CurriculumQuestion[] = [];

    // MCQ questions (30)
    for (let i = 0; i < 30; i++) {
      const item = pick(SINTAXA_COMPLEMENT_INDIRECT, rng);
      const q = createMCQ(
        topic,
        subtopic,
        `În propoziția "${item.prop}", complementul indirect este:`,
        item.complement,
        ["astazi", "cărți", "pe care"].filter(x => x !== item.complement),
        rng
      );
      questions.push(q);
    }

    // Typing questions (15)
    questions.push(createTyping(topic, subtopic, "Ce este complementul indirect?", "cuvântul spre care se îndreaptă acțiunea"));
    questions.push(createTyping(topic, subtopic, "Complementul indirect răspunde la ce?", "cui, de cine, cu cine, din ce"));
    questions.push(createTyping(topic, subtopic, "Complementul indirect are:", "prepoziție obligatorie"));
    questions.push(createTyping(topic, subtopic, "Exemplu complementul indirect:", "El dă cartea copilului"));
    questions.push(createTyping(topic, subtopic, "Natura complementului indirect:", "substantiv, pronume, adjectiv substantivat, infinitiv"));
    questions.push(createTyping(topic, subtopic, "Prepoziții pentru complement indirect:", "lui, cu, din, pentru, fără, de la"));
    questions.push(createTyping(topic, subtopic, "Poziția complementului indirect:", "după complementul direct, de obicei"));
    questions.push(createTyping(topic, subtopic, "Forma pronominală a complementului indirect:", "îi, le (după prep: cu el, la el)"));
    questions.push(createTyping(topic, subtopic, "Exemplu cu pronume:", "Îi dau o carte"));
    questions.push(createTyping(topic, subtopic, "Diferență cu direct:", "indirect: cui/din ce; direct: pe cine/ce"));
    questions.push(createTyping(topic, subtopic, "Complementul indirect este:", "beneficiar sau purtător al acțiunii"));
    questions.push(createTyping(topic, subtopic, "Poate lipsi complementul indirect?", "da, depinde de verb"));
    questions.push(createTyping(topic, subtopic, "Verbele dative necesită:", "complement indirect"));
    questions.push(createTyping(topic, subtopic, "Exemplu de verb dativ:", "a da, a spune, a trimite"));
    questions.push(createTyping(topic, subtopic, "Complementul indirect în pasiv devine:", "subiectul propoziției cu prepoziție"));

    return shuffle(questions, rng);
  },

  // SINTAXĂ — COMPLEMENT CIRCUMSTANȚIAL
  sintaxa_complement_circumstantial: (seed = 42): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const topic = "sintaxa_c6";
    const subtopic = "complement_circumstantial_c6";
    const questions: CurriculumQuestion[] = [];

    // MCQ questions (30)
    for (let i = 0; i < 30; i++) {
      const item = pick(SINTAXA_COMPLEMENT_CIRCUMSTANTIAL, rng);
      const q = createMCQ(
        topic,
        subtopic,
        `În propoziția "${item.prop}", complementul circumstanțial de "${item.tip}" este:`,
        item.complement,
        ["care", "și", "dacă"].filter(x => x !== item.complement),
        rng
      );
      questions.push(q);
    }

    // Typing questions (15)
    questions.push(createTyping(topic, subtopic, "Ce este complementul circumstanțial?", "cuvântul care precizează circumstanțele acțiunii"));
    questions.push(createTyping(topic, subtopic, "Complementul circumstanțial răspunde la ce?", "unde, când, cum, de ce, pentru ce"));
    questions.push(createTyping(topic, subtopic, "Tipuri de complement circumstanțial:", "loc, timp, mod, cauză, scop, măsură"));
    questions.push(createTyping(topic, subtopic, "Exemplu de loc:", "El merge în parc"));
    questions.push(createTyping(topic, subtopic, "Exemplu de timp:", "El vine mâine"));
    questions.push(createTyping(topic, subtopic, "Exemplu de mod:", "El cântă frumos"));
    questions.push(createTyping(topic, subtopic, "Exemplu de cauză:", "El cade din cauza vântului"));
    questions.push(createTyping(topic, subtopic, "Exemplu de scop:", "El merge pentru a studia"));
    questions.push(createTyping(topic, subtopic, "Exemplu de măsură:", "El cumpără doi metri de stofă"));
    questions.push(createTyping(topic, subtopic, "Prepoziții pentru complement circumstanțial:", "în, la, pe, cu, de, fără, pentru, din, sub, peste"));
    questions.push(createTyping(topic, subtopic, "Natura complementului circumstanțial:", "substantiv, pronume, adverb, infinitiv, propoziție"));
    questions.push(createTyping(topic, subtopic, "Poziția complementului circumstanțial:", "variabilă, poate fi la început, la urmă sau la mijloc"));
    questions.push(createTyping(topic, subtopic, "Poate lipsi complementul circumstanțial?", "da, nu-i obligatoriu"));
    questions.push(createTyping(topic, subtopic, "Complementul circumstanțial este:", "modificator al acțiunii"));
    questions.push(createTyping(topic, subtopic, "Numărul de circumstanțiale:", "pot fi multiple în aceeași propoziție"));

    return shuffle(questions, rng);
  },

  // SINTAXĂ — ATRIBUT
  sintaxa_atribut: (seed = 42): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const topic = "sintaxa_c6";
    const subtopic = "atribut_c6";
    const questions: CurriculumQuestion[] = [];

    // MCQ questions (30)
    for (let i = 0; i < 30; i++) {
      const item = pick(SINTAXA_ATRIBUT, rng);
      const q = createMCQ(
        topic,
        subtopic,
        `În propoziția "${item.prop}", atributul este "${item.atribut}" care este:`,
        item.natura,
        ["verb", "adverb", "pronume interogativ"].filter(x => x !== item.natura),
        rng
      );
      questions.push(q);
    }

    // Typing questions (15)
    questions.push(createTyping(topic, subtopic, "Ce este atributul?", "cuvântul care determină un substantiv"));
    questions.push(createTyping(topic, subtopic, "Atributul răspunde la ce?", "ce fel de, ce culoare, care"));
    questions.push(createTyping(topic, subtopic, "Natura atributului:", "adjectiv, substantiv, pronume, numerale"));
    questions.push(createTyping(topic, subtopic, "Exemplu cu adjectiv:", "Casa frumoasă"));
    questions.push(createTyping(topic, subtopic, "Exemplu cu substantiv:", "Casa de vânzare"));
    questions.push(createTyping(topic, subtopic, "Poziția atributului:", "înainte sau după substantiv"));
    questions.push(createTyping(topic, subtopic, "Atributul se acordă cu:", "substantivul (gen, număr)"));
    questions.push(createTyping(topic, subtopic, "Atributul prepoziţional este:", "substantiv precedat de prepoziție"));
    questions.push(createTyping(topic, subtopic, "Exemplu atribut prepoziţional:", "Cartea de povești"));
    questions.push(createTyping(topic, subtopic, "Diferență între atribut și complement:", "atribut determină substantiv; complement determină verb"));
    questions.push(createTyping(topic, subtopic, "Atributul este parte a:", "sintagmei nominale"));
    questions.push(createTyping(topic, subtopic, "Poate lipsi atributul?", "da, nu-i obligatoriu"));
    questions.push(createTyping(topic, subtopic, "Atribut cu pronume demonstrativ:", "Cartea aceasta"));
    questions.push(createTyping(topic, subtopic, "Atribut cu numeral:", "Trei cărți frumoase"));
    questions.push(createTyping(topic, subtopic, "Atributul este esențial pentru:", "descriere și caracterizare"));

    return shuffle(questions, rng);
  },

  // FRAZĂ — SUBORDONATE COMPLETIVE
  fraza_subord_completive: (seed = 42): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const topic = "fraza_c6";
    const subtopic = "subord_completive_c6";
    const questions: CurriculumQuestion[] = [];

    // MCQ questions (30)
    for (let i = 0; i < 30; i++) {
      const item = pick(SINTAXA_SUBORD_COMPLETIVE, rng);
      const q = createMCQ(
        topic,
        subtopic,
        `În propoziția complexă "${item.prop}", propoziția subordonnată este:`,
        item.prop_subord,
        [`al ${item.prop_principala}`, "care cântă", "pe care"].filter(x => x !== item.prop_subord),
        rng
      );
      questions.push(q);
    }

    // Typing questions (15)
    questions.push(createTyping(topic, subtopic, "Ce sunt propoziții subordonate completive?", "propozițiile care completează sensul predicatului"));
    questions.push(createTyping(topic, subtopic, "Subordonate completive răspund la ce?", "la ce spun verbele principale"));
    questions.push(createTyping(topic, subtopic, "Conector pentru completive:", "că, dacă, ce, cine, care, cum, când"));
    questions.push(createTyping(topic, subtopic, "Exemplu completivă cu 'că':", "Spun că vine mâine"));
    questions.push(createTyping(topic, subtopic, "Exemplu completivă cu 'dacă':", "Mă întreb dacă va ploua"));
    questions.push(createTyping(topic, subtopic, "Exemplu completivă interogativă indirectă:", "Îl întreb ce faci"));
    questions.push(createTyping(topic, subtopic, "Funcția completivei în propoziție:", "complement al verbului"));
    questions.push(createTyping(topic, subtopic, "Subordonate completive pot fi:", "declarative sau interogative"));
    questions.push(createTyping(topic, subtopic, "Exemplu interogativă cu 'cine':", "Nu știu cine vine"));
    questions.push(createTyping(topic, subtopic, "Ordinea cuvintelor în completivă:", "variabilă, cum este în limba română"));
    questions.push(createTyping(topic, subtopic, "Temporal în completivă:", "poate fi different de cel din principală"));
    questions.push(createTyping(topic, subtopic, "Negație în completivă:", "negația nu este obligatorie"));
    questions.push(createTyping(topic, subtopic, "Verbul principal din care depinde:", "verbe de spun, gândesc, simt"));
    questions.push(createTyping(topic, subtopic, "Mod în subordonate completive:", "indicativ, condițional, conjunctiv"));
    questions.push(createTyping(topic, subtopic, "Completiva este esențială pentru:", "predicatul principal"));

    return shuffle(questions, rng);
  },

  // FRAZĂ — SUBORDONATE CIRCUMSTANȚIALE
  fraza_subord_circumstantiale: (seed = 42): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const topic = "fraza_c6";
    const subtopic = "subord_circumstantiale_c6";
    const questions: CurriculumQuestion[] = [];

    // MCQ questions (30)
    for (let i = 0; i < 30; i++) {
      const item = pick(SINTAXA_SUBORD_CIRCUMSTANTIALE, rng);
      const q = createMCQ(
        topic,
        subtopic,
        `În propoziția complexă "${item.prop}", propoziția subordonnată de "${item.tip}" este:`,
        item.prop_subord,
        [`al ${item.prop_principala}`, "care citește", "pe care"].filter(x => x !== item.prop_subord),
        rng
      );
      questions.push(q);
    }

    // Typing questions (15)
    questions.push(createTyping(topic, subtopic, "Ce sunt subordonate circumstanțiale?", "propozițiile care precizează circumstanțele predicatului"));
    questions.push(createTyping(topic, subtopic, "Tipuri de subordonate circumstanțiale:", "loc, timp, mod, cauză, scop, măsură, comparație, condiție, concesie"));
    questions.push(createTyping(topic, subtopic, "Subordonate de loc:", "unde, acolo unde, pe unde"));
    questions.push(createTyping(topic, subtopic, "Exemplu de loc:", "Merg acolo unde vroiau colegii"));
    questions.push(createTyping(topic, subtopic, "Subordonate de timp:", "când, cât timp, înainte de, după"));
    questions.push(createTyping(topic, subtopic, "Exemplu de timp:", "Vin când se-nserează"));
    questions.push(createTyping(topic, subtopic, "Subordonate de mod:", "cum, ca și cum, după cum"));
    questions.push(createTyping(topic, subtopic, "Exemplu de mod:", "Faci cum ți-am spus"));
    questions.push(createTyping(topic, subtopic, "Subordonate de cauză:", "pentru că, deoarece, fiindcă"));
    questions.push(createTyping(topic, subtopic, "Exemplu de cauză:", "Plec fiindcă mă doare capul"));
    questions.push(createTyping(topic, subtopic, "Subordonate de scop:", "ca, pentru ca, ca să"));
    questions.push(createTyping(topic, subtopic, "Exemplu de scop:", "Vin ca să te ajut"));
    questions.push(createTyping(topic, subtopic, "Subordonate de condiție:", "dacă, în caz că, afară de"));
    questions.push(createTyping(topic, subtopic, "Exemplu de condiție:", "Vin dacă e vreme bună"));
    questions.push(createTyping(topic, subtopic, "Subordonate de concesie:", "deși, cu toate că, oricât"));

    return shuffle(questions, rng);
  },

  // FRAZĂ — SUBORDONATE ATRIBUTIVE
  fraza_subord_atributive: (seed = 42): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const topic = "fraza_c6";
    const subtopic = "subord_atributive_c6";
    const questions: CurriculumQuestion[] = [];

    // MCQ questions (30)
    for (let i = 0; i < 30; i++) {
      const item = pick(SINTAXA_SUBORD_ATRIBUTIVE, rng);
      const q = createMCQ(
        topic,
        subtopic,
        `În propoziția complexă "${item.prop}", propoziția subordonnată atributivă este:`,
        item.prop_subord,
        ["pe care", "dacă", "deoarece"].filter(x => x !== item.prop_subord),
        rng
      );
      questions.push(q);
    }

    // Typing questions (15)
    questions.push(createTyping(topic, subtopic, "Ce sunt subordonate atributive?", "propozițiile care determină un substantiv din principală"));
    questions.push(createTyping(topic, subtopic, "Subordonate atributive determină:", "un substantiv sau pronom"));
    questions.push(createTyping(topic, subtopic, "Conectori pentru atributive:", "care, cui, cine, ce, unde, de care"));
    questions.push(createTyping(topic, subtopic, "Exemplu cu 'care':", "Cartea care o citesc"));
    questions.push(createTyping(topic, subtopic, "Exemplu cu 'cui':", "Băiatul cui vine mâine"));
    questions.push(createTyping(topic, subtopic, "Exemplu cu 'unde':", "Locul unde stau este frumos"));
    questions.push(createTyping(topic, subtopic, "Funcția atributivei:", "apozitiv sau descriptiv"));
    questions.push(createTyping(topic, subtopic, "Atributivă cu 'ce':", "Lucrul ce spun e adevărat"));
    questions.push(createTyping(topic, subtopic, "Pronume relativ în atributivă:", "care, cine, ce, cum, unde, când"));
    questions.push(createTyping(topic, subtopic, "Ordinea în subordonate atributive:", "flexibilă, dar de obicei după substantiv"));
    questions.push(createTyping(topic, subtopic, "Atributiva poate fi:", "restrictivă sau apozitivă"));
    questions.push(createTyping(topic, subtopic, "Atributiva restrictivă precizează:", "care anume dintre obiecte"));
    questions.push(createTyping(topic, subtopic, "Atributiva apozitivă oferă:", "informație suplimentară"));
    questions.push(createTyping(topic, subtopic, "Mod în atributive:", "de regulă indicativ"));
    questions.push(createTyping(topic, subtopic, "Temporal în atributiva:", "pot fi diferite, depinde de context"));

    return shuffle(questions, rng);
  },
};
