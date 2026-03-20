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
function createTyping(topic: string, subtopic: string, question: string, correct: string): CurriculumQuestion {
  return { type: "typing", topic, subtopic, question, correct };
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

    // MCQ questions (30)
    for (let i = 0; i < 30; i++) {
      const item = pick(VERB_TIMPURI_LITERARE, rng);
      const timp_options = ["trecut_simplu", "trecut_compus", "perfectul_simplu", "plus_perf"];
      const timp = timp_options[Math.floor(rng() * timp_options.length)] as keyof typeof item;
      const correct = item[timp] as string;
      const timpName = timp === "trecut_simplu" ? "Trecut simplu" : timp === "trecut_compus" ? "Trecut compus" : timp === "perfectul_simplu" ? "Perfectul simplu" : "Plusquamperfectul";
      const q = createMCQ(
        topic,
        subtopic,
        `În timp literar, forma pentru "${item.verb}" este "${correct}". Ce timp este acesta?`,
        timpName,
        ["Prezent", "Viitor", "Condițional"].filter(x => x !== timpName),
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

    // MCQ questions (30)
    for (let i = 0; i < 30; i++) {
      const item = pick(VERB_DIATEZE, rng);
      const q = createMCQ(
        topic,
        subtopic,
        `Propoziția "${item.prop}" este în diateză:`,
        item.diateza,
        ["Pasivă", "Medie", "Reflexivă"].filter(x => x !== item.diateza),
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
    for (let i = 0; i < 30; i++) {
      const item = pick(VERB_NEREGULATE, rng);
      const persoane = ["eu", "tu", "el"] as const;
      const persoana = persoane[Math.floor(rng() * persoane.length)];
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

    // MCQ questions (30)
    for (let i = 0; i < 30; i++) {
      const item = pick(VERB_ACORD, rng);
      const q = createMCQ(
        topic,
        subtopic,
        `În propoziția "${item.prop}", acordul subiect-verb este în:`,
        item.acord,
        ["singular", "persoana 2", "neutru"].filter(x => x !== item.acord),
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
