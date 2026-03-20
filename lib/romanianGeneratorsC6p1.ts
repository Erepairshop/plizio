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

/** Create typing question */
function createTyping(topic: string, subtopic: string, question: string, answer: string): CurriculumQuestion {
  return { type: "typing", topic, subtopic, question, answer: answer.toLowerCase().trim() };
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
  subst_declinare: (seed = 42): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const topic = "substantiv_c6";
    const subtopic = "declinare_c6";
    const questionPool: CurriculumQuestion[] = [];
    const cases = ["Nominativ", "Genitiv", "Dativ", "Acuzativ", "Vocativ"];

    // Build 30 unique MCQ questions by cycling through substantives and varying cases
    for (let i = 0; i < 30; i++) {
      const item = pick(SUBSTANTIVE_DECLIN, rng);
      const currentCase = pick(cases, rng);
      let correct = "";
      if (currentCase === "Nominativ") correct = item.nom_sg;
      else if (currentCase === "Genitiv") correct = item.gen_sg;
      else if (currentCase === "Dativ") correct = item.dat_sg;
      else if (currentCase === "Acuzativ") correct = item.acc_sg;
      else if (currentCase === "Vocativ") correct = item.voc_sg;

      const otherForms = [item.gen_sg, item.dat_sg, item.acc_sg, item.voc_sg].filter(f => f !== correct);
      const q = createMCQ(
        topic,
        subtopic,
        `Forma de ${currentCase} a substantivului '${item.nom_sg}' este:`,
        correct,
        otherForms,
        rng
      );
      questionPool.push(q);
    }

    const questions = shuffle(questionPool, rng) as CurriculumQuestion[];

    // Typing questions (15)
    questions.push(createTyping(topic, subtopic, "Câte cazuri sunt în limba română?", "cinci"));
    questions.push(createTyping(topic, subtopic, "Care este cazul subiectului?", "Nominativ"));
    questions.push(createTyping(topic, subtopic, "Care este cazul complementului direct?", "Acuzativ"));
    questions.push(createTyping(topic, subtopic, "Care sunt cazurile principale?", "Nominativ, Acuzativ, Genitiv, Dativ, Vocativ"));
    questions.push(createTyping(topic, subtopic, "Cum se schimbă substantivul în diferite cazuri?", "declinare"));
    questions.push(createTyping(topic, subtopic, "Care este cazul de apelare?", "Vocativ"));
    questions.push(createTyping(topic, subtopic, "Ce arată cazul Genitiv?", "posesie"));
    questions.push(createTyping(topic, subtopic, "Ce arată cazul Dativ?", "beneficiar"));
    questions.push(createTyping(topic, subtopic, "Care caz răspunde la 'cui'?", "Dativ"));
    questions.push(createTyping(topic, subtopic, "Care caz răspunde la 'al cui'?", "Genitiv"));
    questions.push(createTyping(topic, subtopic, "Ce exprimă Acuzativul?", "obiect direct"));
    questions.push(createTyping(topic, subtopic, "Cum se numește schimbarea formei?", "declinare"));
    questions.push(createTyping(topic, subtopic, "Ce caz se folosește la salutări?", "Vocativ"));
    questions.push(createTyping(topic, subtopic, "Genul substantivului poate schimba cazul?", "nu, genul și cazul sunt independente"));
    questions.push(createTyping(topic, subtopic, "Ce abilitate trebuie pentru declinare?", "memorare și practice"));

    return shuffle(questions, rng);
  },

  // SUBSTANTIVE — FUNCȚII SINTACTICE
  subst_functii_sintactice: (seed = 42): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const topic = "substantiv_c6";
    const subtopic = "functii_sintactice_c6";
    const questionPool: CurriculumQuestion[] = [];

    // Build 30 unique MCQ questions by cycling through substantive functions
    for (let i = 0; i < 30; i++) {
      const item = pick(SUBSTANTIVE_FUNCTII, rng);
      const q = createMCQ(
        topic,
        subtopic,
        `În propoziția "${item.prop}", substantivul "${item.subst}" este:`,
        item.functie,
        ["Predicat nominal", "Atribut", "Complement circumstanțial"].filter(x => x !== item.functie),
        rng
      );
      questionPool.push(q);
    }

    const questions = shuffle(questionPool, rng) as CurriculumQuestion[];

    // Typing questions (15)
    questions.push(createTyping(topic, subtopic, "Ce funcție sintactică are subiectul?", "Subiect"));
    questions.push(createTyping(topic, subtopic, "Ce este complementul direct?", "obiectul direct al acțiunii"));
    questions.push(createTyping(topic, subtopic, "Ce este complementul genitival?", "complement cu prepoziția 'de'"));
    questions.push(createTyping(topic, subtopic, "Ce este complementul indirect?", "obiectul indirect"));
    questions.push(createTyping(topic, subtopic, "Ce este complementul locativ?", "indică locul acțiunii"));
    questions.push(createTyping(topic, subtopic, "Ce este atributul?", "determină substantivul"));
    questions.push(createTyping(topic, subtopic, "Care sunt funcțiile sintactice principale?", "Subiect, Predicat, Complement"));
    questions.push(createTyping(topic, subtopic, "Ce exprimă complementul prepoziție?", "relație cu alt element"));
    questions.push(createTyping(topic, subtopic, "Ce este funcția sintactică?", "rol al cuvântului în propoziție"));
    questions.push(createTyping(topic, subtopic, "Câte funcții sintactice principale sunt?", "trei: subiect, predicat, complement"));
    questions.push(createTyping(topic, subtopic, "Ce răspunde la 'pe cine/ce'?", "Complement direct"));
    questions.push(createTyping(topic, subtopic, "Ce răspunde la 'de cine/ce'?", "Complement indirect"));
    questions.push(createTyping(topic, subtopic, "Ce răspunde la 'unde/când/cum'?", "Complement circumstanțial"));
    questions.push(createTyping(topic, subtopic, "Cine face acțiunea?", "Subiectul"));
    questions.push(createTyping(topic, subtopic, "Ce se spune despre subiect?", "Predicatul"));

    return shuffle(questions, rng);
  },

  // SUBSTANTIVE — SUBSTANTIVE DEFECTIVE
  subst_defective: (seed = 42): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const topic = "substantiv_c6";
    const subtopic = "defective_c6";
    const questionPool: CurriculumMCQ[] = [];

    // Build 30 unique MCQ questions by cycling through defective substantives and generating varied questions
    for (let i = 0; i < 30; i++) {
      const item = pick(SUBSTANTIVE_DEFECTIVE, rng);
      // Vary the question type by rotating through different phrasings
      const questionType = Math.floor(rng() * 3);
      let question = "";
      let correct = item.forma_lipsa;
      let wrongOpts = ["gen indicat", "accent tonic", "varianta sinonimă"];

      if (questionType === 0) {
        question = `Substantivul "${item.subst}" este defectiv și nu are:`;
      } else if (questionType === 1) {
        question = `Ce formă lipsește la "${item.subst}"?`;
      } else {
        question = `"${item.subst}" este exemplu de substantiv fără:`;
      }

      wrongOpts = wrongOpts.filter(x => !item.forma_lipsa.includes(x));
      const q = createMCQ(topic, subtopic, question, correct, wrongOpts, rng);
      questionPool.push(q);
    }

    const questions = shuffle(questionPool, rng) as CurriculumQuestion[];

    // Typing questions (15)
    questions.push(createTyping(topic, subtopic, "Ce sunt substantivele defective?", "substantive cu forme lipsă"));
    questions.push(createTyping(topic, subtopic, "Ce exemple de substantive fără plural?", "datorie, speranță"));
    questions.push(createTyping(topic, subtopic, "Ce exemple de substantive fără singular?", "sarcini, obiceiuri"));
    questions.push(createTyping(topic, subtopic, "Care sunt substantivele defective de singular?", "pluralia tantum"));
    questions.push(createTyping(topic, subtopic, "Care sunt substantivele defective de plural?", "singularia tantum"));
    questions.push(createTyping(topic, subtopic, "Cum se comportă substantivele defective?", "nu au toți formele"));
    questions.push(createTyping(topic, subtopic, "Ce inseamnă 'defectiv'?", "incomplet, cu forme lipsă"));
    questions.push(createTyping(topic, subtopic, "Exemplu de substantiv singular defectiv:", "datorie"));
    questions.push(createTyping(topic, subtopic, "Ce este pluralia tantum?", "substantiv fără singular"));
    questions.push(createTyping(topic, subtopic, "Ce este singularia tantum?", "substantiv fără plural"));
    questions.push(createTyping(topic, subtopic, "Sunt defective toate substantivele?", "nu, doar anumite cuvinte"));
    questions.push(createTyping(topic, subtopic, "Cum se identifică un defectiv?", "prin lipsă de forme gramaticale"));
    questions.push(createTyping(topic, subtopic, "De ce sunt unele substantive defective?", "din motive etimologice sau semantice"));
    questions.push(createTyping(topic, subtopic, "Exemplu de pluralia tantum:", "alergători, grăbire"));
    questions.push(createTyping(topic, subtopic, "Exemplu de singularia tantum:", "etic, brânză"));

    return shuffle(questions, rng);
  },

  // PRONUME — PRONUME PERSONALE
  pronume_personale: (seed = 42): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const topic = "pronume_c6";
    const subtopic = "personale_c6";
    const questionPool: CurriculumMCQ[] = [];

    // Build 30 unique MCQ questions by cycling through personal pronouns and varying case/person pairs
    for (let i = 0; i < 30; i++) {
      const item = pick(PRONUME_PERSONALE, rng);
      const variantType = Math.floor(rng() * 3);

      let question = "";
      let correct = "";
      let wrongOpts: string[] = [];

      if (variantType === 0) {
        // Variant: what is this pronoun's properties?
        question = `Pronumele "${item.pronume}" este persoana ${item.gen}, numărul ${item.numar}, cazul ${item.caz}. Care din acestea este similar?`;
        correct = `${item.gen}/${item.numar}/${item.caz}`;
        wrongOpts = [`2/${item.numar}/${item.caz}`, `${item.gen}/plural/${item.caz}`, `${item.gen}/${item.numar}/Genitiv`];
      } else if (variantType === 1) {
        // Variant: which pronoun represents this person/number/case?
        question = `Care pronume reprezintă persoana ${item.gen}, ${item.numar}, ${item.caz}?`;
        correct = item.pronume;
        const others = PRONUME_PERSONALE.filter(p => !(p.gen === item.gen && p.numar === item.numar && p.caz === item.caz)).slice(0, 3).map(p => p.pronume);
        wrongOpts = others.length >= 3 ? others : [...others, "se", "vă"];
      } else {
        // Variant: what case/person does this pronoun have?
        question = `Pronumele "${item.pronume}" are cazul:`;
        correct = item.caz;
        wrongOpts = ["Nominativ", "Acuzativ", "Dativ"].filter(c => c !== item.caz);
      }

      const q = createMCQ(topic, subtopic, question, correct, wrongOpts, rng);
      questionPool.push(q);
    }

    const questions = shuffle(questionPool, rng) as CurriculumQuestion[];

    // Typing questions (15)
    questions.push(createTyping(topic, subtopic, "Câte persoane gramaticale sunt?", "trei"));
    questions.push(createTyping(topic, subtopic, "Pronumele personal pentru persoana 1 singular:", "eu"));
    questions.push(createTyping(topic, subtopic, "Pronumele personal pentru persoana 3 plural:", "ei/ele"));
    questions.push(createTyping(topic, subtopic, "Care sunt pronumele personale nominative?", "eu, tu, el, ea, noi, voi, ei, ele"));
    questions.push(createTyping(topic, subtopic, "Ce se schimbă la pronumele personale?", "persoană, număr, caz"));
    questions.push(createTyping(topic, subtopic, "Pronumele personal acuzativ pentru persoana 1:", "mă"));
    questions.push(createTyping(topic, subtopic, "Câte cazuri are pronumele personal?", "trei: nominativ, acuzativ, dativ"));
    questions.push(createTyping(topic, subtopic, "Pronumele personal plural nominativ persoana 1:", "noi"));
    questions.push(createTyping(topic, subtopic, "Pronumele personal dativ pentru persoana 2 plural:", "vă"));
    questions.push(createTyping(topic, subtopic, "Pronumele personal acuzativ pentru persoana 3 masculine:", "îl"));
    questions.push(createTyping(topic, subtopic, "Pronumele personal acuzativ pentru persoana 3 feminine:", "o"));
    questions.push(createTyping(topic, subtopic, "Pronumele personal dativ pentru persoana 1:", "mi"));
    questions.push(createTyping(topic, subtopic, "Pronumele personal dativ pentru persoana 2:", "ți"));
    questions.push(createTyping(topic, subtopic, "Pronumele personal dativ pentru persoana 3:", "îi/i"));
    questions.push(createTyping(topic, subtopic, "Cum se numesc pronumele eu, tu, el, noi, voi, ei?", "pronume personale"));

    return shuffle(questions, rng);
  },

  // PRONUME — PRONUME DEMONSTRATIVE
  pronume_demonstrative: (seed = 42): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const topic = "pronume_c6";
    const subtopic = "demonstrative_c6";
    const questionPool: CurriculumMCQ[] = [];

    // Build 30 unique MCQ questions by cycling through demonstrative pronouns and varying question types
    for (let i = 0; i < 30; i++) {
      const item = pick(PRONUME_DEMONSTRATIVE, rng);
      const variantType = Math.floor(rng() * 3);

      let question = "";
      let correct = "";
      let wrongOpts: string[] = [];

      if (variantType === 0) {
        question = `Pronumele demonstrativ "${item.pronume}" se folosește pentru a indica:`;
        correct = item.referinta;
        wrongOpts = [`distanță medie (neutră)`, `locuri la distanță mică`, `obiecte care nu se văd`].filter(x => x !== item.referinta);
      } else if (variantType === 1) {
        question = `Indică "${item.referinta}" pronumele:`;
        correct = item.pronume;
        wrongOpts = PRONUME_DEMONSTRATIVE.filter(p => p.referinta !== item.referinta).map(p => p.pronume).slice(0, 3);
      } else {
        question = `Pronumele demonstrativ "${item.pronume}" aparține categoriei:`;
        correct = item.referinta.split(" ")[0]; // apropiat, depărtat, sau neutru
        wrongOpts = ["apropiere", "depărtare", "neutru"].filter(c => c !== correct);
      }

      const q = createMCQ(topic, subtopic, question, correct, wrongOpts, rng);
      questionPool.push(q);
    }

    const questions = shuffle(questionPool, rng) as CurriculumQuestion[];

    // Typing questions (15)
    questions.push(createTyping(topic, subtopic, "Ce sunt pronumele demonstrative?", "indică referință spațială"));
    questions.push(createTyping(topic, subtopic, "Pronumele demonstrativ pentru apropiere:", "acesta, aceasta, aceștia, acestea"));
    questions.push(createTyping(topic, subtopic, "Pronumele demonstrativ pentru depărtare:", "acela, aceea, aceia, alea"));
    questions.push(createTyping(topic, subtopic, "Pronumele demonstrativ neutru apropiere:", "asta"));
    questions.push(createTyping(topic, subtopic, "Pronumele demonstrativ neutru depărtare:", "aia"));
    questions.push(createTyping(topic, subtopic, "Ce indică pronumele demonstrative?", "localizare spațială"));
    questions.push(createTyping(topic, subtopic, "Care sunt categoriile demonstrativelor?", "apropiere, depărtare, neutru"));
    questions.push(createTyping(topic, subtopic, "Pronumele demonstrativ 'acesta' indică:", "apropiere"));
    questions.push(createTyping(topic, subtopic, "Pronumele demonstrativ 'acela' indică:", "depărtare"));
    questions.push(createTyping(topic, subtopic, "Cum se acordă demonstrativele?", "cu substantivul"));
    questions.push(createTyping(topic, subtopic, "Ce inlocuiesc pronumele demonstrative?", "substantive cu indicație spațială"));
    questions.push(createTyping(topic, subtopic, "Pronumele demonstrativ feminine apropiere:", "aceasta, acestea"));
    questions.push(createTyping(topic, subtopic, "Pronumele demonstrativ masculine depărtare:", "acela, aceia"));
    questions.push(createTyping(topic, subtopic, "Pronumele demonstrativ neutru pentru ceva nedefinit:", "asta, aia"));
    questions.push(createTyping(topic, subtopic, "De ce se numesc 'demonstrative'?", "demonstrează, arată pozițiaspațial"));

    return shuffle(questions, rng);
  },

  // PRONUME — PRONUME POSESIVE
  pronume_posesive: (seed = 42): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const topic = "pronume_c6";
    const subtopic = "posesive_c6";
    const questionPool: CurriculumMCQ[] = [];

    // Build 30 unique MCQ questions by cycling through possessive pronouns and varying question types
    for (let i = 0; i < 30; i++) {
      const item = pick(PRONUME_POSESIVE, rng);
      const variantType = Math.floor(rng() * 3);

      let question = "";
      let correct = "";
      let wrongOpts: string[] = [];

      if (variantType === 0) {
        question = `Pronumele posesiv "${item.pron_poss}" corespunde persoanei:`;
        correct = item.persoana;
        wrongOpts = ["3 sg", "1 pl", "2 pl"].filter(x => x !== item.persoana);
      } else if (variantType === 1) {
        question = `Persoana ${item.persoana} are pronumele posesiv:`;
        correct = item.pron_poss;
        wrongOpts = PRONUME_POSESIVE.filter(p => p.persoana !== item.persoana).map(p => p.pron_poss).slice(0, 3);
      } else {
        question = `Ce înlocuiește pronumele posesiv "${item.pron_poss}"?`;
        correct = `ceva ce aparține persoanei ${item.persoana}`;
        wrongOpts = ["ceva ce aparține altora", "ceva nedefinit", "ceva la distanță"];
      }

      const q = createMCQ(topic, subtopic, question, correct, wrongOpts, rng);
      questionPool.push(q);
    }

    const questions = shuffle(questionPool, rng) as CurriculumQuestion[];

    // Typing questions (8)
    questions.push(createTyping(topic, subtopic, "Ce sunt pronumele posesive?", "indică posesia"));
    questions.push(createTyping(topic, subtopic, "Pronumele posesiv pentru persoana 1:", "al meu, a mea"));
    questions.push(createTyping(topic, subtopic, "Pronumele posesiv pentru persoana 2:", "al tău, a ta"));
    questions.push(createTyping(topic, subtopic, "Pronumele posesiv pentru persoana 3:", "al lui, al ei, al lor"));
    questions.push(createTyping(topic, subtopic, "Pronumele posesiv pentru persoana 1 plural:", "al nostru, a noastră"));
    questions.push(createTyping(topic, subtopic, "Care pronume posesiv e pentru plural 2?", "al vostru, a voastră"));
    questions.push(createTyping(topic, subtopic, "Ce exprimă pronumele posesiv?", "apartenență, proprietate"));
    questions.push(createTyping(topic, subtopic, "Pronumele posesiv neutru:", "al meu, al tău, al lui"));

    return shuffle(questions, rng);
  },

  // PRONUME — PRONUME REFLEXIVE
  pronume_reflexive: (seed = 42): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const topic = "pronume_c6";
    const subtopic = "reflexive_c6";
    const questionPool: CurriculumMCQ[] = [];

    // Build 30 unique MCQ questions by cycling through reflexive pronouns and varying question types
    for (let i = 0; i < 30; i++) {
      const item = pick(PRONUME_REFLEXIVE, rng);
      const variantType = Math.floor(rng() * 3);

      let question = "";
      let correct = "";
      let wrongOpts: string[] = [];

      if (variantType === 0) {
        question = `În expresia "${item.verb_ex}", pronumele reflexiv este:`;
        correct = item.pron_ref;
        wrongOpts = ["se", "și", "ți"].filter(x => x !== item.pron_ref);
      } else if (variantType === 1) {
        question = `Pronumele reflexiv pentru "${item.verb_ex}" este:`;
        correct = item.pron_ref;
        wrongOpts = PRONUME_REFLEXIVE.filter(p => p.pron_ref !== item.pron_ref).map(p => p.pron_ref).slice(0, 3);
      } else {
        question = `Verbul "${item.verb_ex}" are pronumele reflexiv:`;
        correct = item.pron_ref;
        wrongOpts = ["nu are pronume", "pronume demonstrativ", "pronume personal"];
      }

      const q = createMCQ(topic, subtopic, question, correct, wrongOpts, rng);
      questionPool.push(q);
    }

    const questions = shuffle(questionPool, rng) as CurriculumQuestion[];

    // Typing questions (15)
    questions.push(createTyping(topic, subtopic, "Ce sunt pronumele reflexive?", "indică acțiune asupra subiectului"));
    questions.push(createTyping(topic, subtopic, "Pronumele reflexiv singular acuzativ:", "mă"));
    questions.push(createTyping(topic, subtopic, "Pronumele reflexiv singular dativ:", "mi"));
    questions.push(createTyping(topic, subtopic, "Pronumele reflexiv plural acuzativ:", "ne"));
    questions.push(createTyping(topic, subtopic, "Pronumele reflexiv plural dativ:", "ne"));
    questions.push(createTyping(topic, subtopic, "Pronumele reflexiv persoana 3:", "se"));
    questions.push(createTyping(topic, subtopic, "Care verbe sunt reflexive?", "a se spăla, a se distra"));
    questions.push(createTyping(topic, subtopic, "Ce indică pronumele reflexiv?", "subiectul suferă acțiunea"));
    questions.push(createTyping(topic, subtopic, "Diferența între reflexiv și reciproc:", "reflexiv = subiect singular, reciproc = acțiune între doi"));
    questions.push(createTyping(topic, subtopic, "Pronumele reflexiv al 'noi':", "ne"));
    questions.push(createTyping(topic, subtopic, "Pronumele reflexiv al 'voi':", "vă"));
    questions.push(createTyping(topic, subtopic, "Pronumele reflexiv acuzativ persoana 2:", "te"));
    questions.push(createTyping(topic, subtopic, "Pronumele reflexiv dativ persoana 2:", "ți"));
    questions.push(createTyping(topic, subtopic, "Ce verb reflexiv exprimă oboseală?", "a se oboși"));
    questions.push(createTyping(topic, subtopic, "Pronumele reflexiv dativ persoana 1:", "mi"));

    return shuffle(questions, rng);
  },

  // PRONUME — PRONUME INTEROGATIVE
  pronume_interogative: (seed = 42): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const topic = "pronume_c6";
    const subtopic = "interogative_c6";
    const questionPool: CurriculumMCQ[] = [];

    // Build 30 unique MCQ questions by cycling through interrogative pronouns and varying question types
    for (let i = 0; i < 30; i++) {
      const item = pick(PRONUME_INTEROGATIVE, rng);
      const variantType = Math.floor(rng() * 3);

      let question = "";
      let correct = "";
      let wrongOpts: string[] = [];

      if (variantType === 0) {
        question = `Pronumele interogativ "${item.intreb}" se folosește pentru a întreba despre:`;
        correct = item.raspuns;
        wrongOpts = [`acțiuni trecute`, `calități ale obiectelor`, `relații spațiale`].filter(x => x !== item.raspuns);
      } else if (variantType === 1) {
        question = `Pentru a întreba despre "${item.raspuns}" se folosește:`;
        correct = item.intreb;
        wrongOpts = PRONUME_INTEROGATIVE.filter(p => p.raspuns !== item.raspuns).map(p => p.intreb).slice(0, 3);
      } else {
        question = `Pronumele interogativ "${item.intreb}" răspunde la care domeniu?`;
        correct = item.raspuns;
        wrongOpts = ["timp", "mod", "cauză"];
      }

      const q = createMCQ(topic, subtopic, question, correct, wrongOpts, rng);
      questionPool.push(q);
    }

    const questions = shuffle(questionPool, rng) as CurriculumQuestion[];

    // Typing questions (15)
    questions.push(createTyping(topic, subtopic, "Pronumele interogativ pentru persoane:", "cine"));
    questions.push(createTyping(topic, subtopic, "Pronumele interogativ pentru lucruri:", "ce"));
    questions.push(createTyping(topic, subtopic, "Pronumele interogativ pentru alegere:", "care"));
    questions.push(createTyping(topic, subtopic, "Pronumele interogativ acuzativ pentru persoane:", "pe cine"));
    questions.push(createTyping(topic, subtopic, "Pronumele interogativ dativ pentru persoane:", "cui"));
    questions.push(createTyping(topic, subtopic, "Ce pronume se folosește în 'Cine ai văzut?':", "cine"));
    questions.push(createTyping(topic, subtopic, "Ce pronume se folosește în 'Ce vrei?':", "ce"));
    questions.push(createTyping(topic, subtopic, "Ce pronume se folosește în 'Care dos îți place?':", "care"));
    questions.push(createTyping(topic, subtopic, "Ce exprimă pronumele interogativ?", "cerere de informație"));
    questions.push(createTyping(topic, subtopic, "Pronumele interogativ genitivul:", "al cui"));
    questions.push(createTyping(topic, subtopic, "Cum se folosește 'ce' în întrebări?", "pentru lucruri"));
    questions.push(createTyping(topic, subtopic, "Cum se folosește 'cine' în întrebări?", "pentru persoane"));
    questions.push(createTyping(topic, subtopic, "Diferența între 'cine' și 'care':", "cine=identitate, care=alegere"));
    questions.push(createTyping(topic, subtopic, "Pronumele interogativ pentru pozesie:", "al cui"));
    questions.push(createTyping(topic, subtopic, "Pronumele interogativ cauzal:", "de ce"));

    return shuffle(questions, rng);
  },

  // PRONUME — PRONUME NEHOTĂRÂTE
  pronume_nehotarate: (seed = 42): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const topic = "pronume_c6";
    const subtopic = "nehotarate_c6";
    const questionPool: CurriculumMCQ[] = [];

    // Build 30 unique MCQ questions by cycling through indefinite pronouns and varying question types
    for (let i = 0; i < 30; i++) {
      const item = pick(PRONUME_NEHOTARATE, rng);
      const variantType = Math.floor(rng() * 3);

      let question = "";
      let correct = "";
      let wrongOpts: string[] = [];

      if (variantType === 0) {
        question = `În propoziția "${item.exemplu}", pronumele nehotărat este:`;
        correct = item.pron;
        wrongOpts = [`ceva-l`, `cineva-i`, `fiecine`].filter(x => x !== item.pron);
      } else if (variantType === 1) {
        question = `Pronumele nehotărat din "${item.exemplu}" arată:`;
        correct = `nedeterminare`;
        wrongOpts = ["demonstrație", "interogație", "pozesiune"];
      } else {
        question = `Pronumele nehotărat "${item.pron}" se folosește în:`;
        correct = item.exemplu;
        wrongOpts = PRONUME_NEHOTARATE.filter(p => p.pron !== item.pron).map(p => p.exemplu).slice(0, 3);
      }

      const q = createMCQ(topic, subtopic, question, correct, wrongOpts, rng);
      questionPool.push(q);
    }

    const questions = shuffle(questionPool, rng) as CurriculumQuestion[];

    // Typing questions (15)
    questions.push(createTyping(topic, subtopic, "Pronumele nehotărat pentru persoane:", "cineva"));
    questions.push(createTyping(topic, subtopic, "Pronumele nehotărat pentru lucruri:", "ceva"));
    questions.push(createTyping(topic, subtopic, "Pronumele nehotărat universal:", "oricine"));
    questions.push(createTyping(topic, subtopic, "Pronumele nehotărat pentru iterare:", "fiecare"));
    questions.push(createTyping(topic, subtopic, "Pronumele nehotărat pentru orice:", "orice"));
    questions.push(createTyping(topic, subtopic, "Ce exprimă pronumele nehotărat?", "nedeterminare, generalitate"));
    questions.push(createTyping(topic, subtopic, "Pronumele nehotărat genitivul:", "al cui"));
    questions.push(createTyping(topic, subtopic, "Pronumele nehotărat acuzativ pentru persoane:", "pe cineva"));
    questions.push(createTyping(topic, subtopic, "Pronumele nehotărat dativ:", "cuiva"));
    questions.push(createTyping(topic, subtopic, "Cum se folosește 'cineva'?", "pentru persoane nedeterminate"));
    questions.push(createTyping(topic, subtopic, "Cum se folosește 'ceva'?", "pentru lucruri nedeterminate"));
    questions.push(createTyping(topic, subtopic, "Pronumele nehotărat pentru 'toți':", "toți, toate"));
    questions.push(createTyping(topic, subtopic, "Diferența între 'cineva' și 'oricine':", "cineva=o persoană, oricine=absolut oricine"));
    questions.push(createTyping(topic, subtopic, "Pronumele nehotărat pentru 'niciun':", "nimeni"));
    questions.push(createTyping(topic, subtopic, "Cum se formează pronumele nehotărat?", "din pronume fundamentale + sufixe"));

    return shuffle(questions, rng);
  },

  // PRONUME — PRONUME RELATIVE
  pronume_relative: (seed = 42): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const topic = "pronume_c6";
    const subtopic = "relative_c6";
    const questions: CurriculumQuestion[] = [];

    // MCQ questions (30)
    for (let i = 0; i < 30; i++) {
      const item = pick(PRONUME_RELATIVE, rng);
      const q = createMCQ(
        topic,
        subtopic,
        `Pronumele relativ "${item.pron_rel}" se referă la:`,
        item.antecedent,
        [`modalitate`, `timp`, `cauză`].filter(x => x !== item.antecedent),
        rng
      );
      questions.push(q);
    }

    // Typing questions (15)
    questions.push(createTyping(topic, subtopic, "Pronumele relativ universal:", "care"));
    questions.push(createTyping(topic, subtopic, "Pronumele relativ pentru persoane:", "care"));
    questions.push(createTyping(topic, subtopic, "Pronumele relativ pentru lucruri:", "care"));
    questions.push(createTyping(topic, subtopic, "Ce role au pronumele relative?", "introduc fraze subordonate atributive"));
    questions.push(createTyping(topic, subtopic, "Pronumele relativ genitivul:", "al cui"));
    questions.push(createTyping(topic, subtopic, "Pronumele relativ dativul:", "căruia"));
    questions.push(createTyping(topic, subtopic, "Pronumele relativ acuzativul:", "pe care"));
    questions.push(createTyping(topic, subtopic, "Pronumele relativ nominativul:", "care"));
    questions.push(createTyping(topic, subtopic, "Ce introduce pronumele relativ?", "frază subordonată relativă"));
    questions.push(createTyping(topic, subtopic, "Diferența între 'care' relativ și interogativ:", "relativ=subordinat, interogativ=întrebare"));
    questions.push(createTyping(topic, subtopic, "Pronumele relativ pentru 'cine':", "care"));
    questions.push(createTyping(topic, subtopic, "Cum se acordă pronumele relativ?", "cu antecedentul"));
    questions.push(createTyping(topic, subtopic, "Pronumele relativ referință neutrală:", "care"));
    questions.push(createTyping(topic, subtopic, "Pronumele relativ pozesiv:", "al cui"));
    questions.push(createTyping(topic, subtopic, "Pronumele relativ introductor de frază:", "care"));

    return shuffle(questions, rng);
  },
};
