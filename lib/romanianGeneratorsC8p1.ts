// ─── ROMANIAN GENERATORS (CLASA a VIII-a) — FAZA 1 ─────────────────────────────────────
// Procedural MCQ question generators for Romanian language curriculum
// Clasa a VIII-a (8th grade) – Syntax analysis, simple & complex propositions
//
// Generates 30 MCQ + 15 typing questions per subtopic using seeded PRNG.

import type { CurriculumQuestion, CurriculumMCQ } from "./curriculumTypes";

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

function createTyping(topic: string, subtopic: string, question: string, answer: string): CurriculumQuestion {
  return { type: "typing", topic, subtopic, question, answer: answer.toLowerCase().trim() };
}

// ─── DATA ────────────────────────────────────────────────────────────────────

const PROPOZITII_SIMPLE = [
  { prop: "Copilul citește o carte frumoasă.", subj: "Copilul", pred: "citește" },
  { prop: "Păsările zboară ușor pe cer.", subj: "Păsările", pred: "zboară" },
  { prop: "Maria se joacă în parc.", subj: "Maria", pred: "se joacă" },
  { prop: "Ploaia cade toată noaptea.", subj: "Ploaia", pred: "cade" },
  { prop: "Soarele răsare în est.", subj: "Soarele", pred: "răsare" },
  { prop: "Elevii ascultă cu atenție lecția.", subj: "Elevii", pred: "ascultă" },
  { prop: "Bunica gătește o supă delicioasă.", subj: "Bunica", pred: "gătește" },
  { prop: "Câinele aleargă prin curte.", subj: "Câinele", pred: "aleargă" },
  { prop: "Florile înfloresc primăvara.", subj: "Florile", pred: "înfloresc" },
  { prop: "Vântul bate puternic dinspre nord.", subj: "Vântul", pred: "bate" },
  { prop: "Profesorul explică problema la tablă.", subj: "Profesorul", pred: "explică" },
  { prop: "Copiii desenează în caiet.", subj: "Copiii", pred: "desenează" },
  { prop: "Trenul ajunge în gară la timp.", subj: "Trenul", pred: "ajunge" },
  { prop: "Apa râului curge la vale.", subj: "Apa", pred: "curge" },
];

const PROPOZITII_COMPUSE = [
  { prop: "Merg la cinema și cumpăr bilete.", type: "copulativă" },
  { prop: "Mănânc un măr sau o portocală.", type: "disjunctivă" },
  { prop: "Vorbesc tare, dar nimeni nu-mi răspunde.", type: "adversativă" },
  { prop: "Vin la petrecere, căci ești prietenul meu.", type: "explicativă" },
  { prop: "Învață mult, deci va reuși.", type: "conclusivă" },
  { prop: "Citește și scrie în fiecare zi.", type: "copulativă" },
  { prop: "Ori pleci acum, ori rămâi aici.", type: "disjunctivă" },
  { prop: "Era obosit, însă a continuat lucrul.", type: "adversativă" },
  { prop: "Plouă, prin urmare luăm umbrela.", type: "conclusivă" },
  { prop: "Nu doar cântă, ci și dansează.", type: "copulativă" },
];

const SUBORDONARE_TYPES = [
  { type: "subiectivă", desc: "exprimă subiectul propoziției regente" },
  { type: "completivă directă", desc: "completează un verb tranzitiv (răspunde la 'pe cine?', 'ce?')" },
  { type: "circumstanțială de loc", desc: "arată locul desfășurării acțiunii" },
  { type: "circumstanțială de timp", desc: "arată momentul desfășurării acțiunii" },
  { type: "atributivă", desc: "determină un substantiv din regentă" },
  { type: "predicativă", desc: "îndeplinește rolul de nume predicativ" },
  { type: "completivă indirectă", desc: "completează un verb (răspunde la 'cui?')" },
  { type: "circumstanțială de cauză", desc: "arată cauza acțiunii din regentă" },
  { type: "circumstanțială de scop", desc: "arată scopul acțiunii din regentă" },
  { type: "circumstanțială de mod", desc: "arată felul în care se desfășoară acțiunea" },
];

// ─── GENERATORS ──────────────────────────────────────────────────────────────

export const C8P1_Generators = {
  sintaxa_propozitie_simpla: (seed = 42): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const questionPool: CurriculumMCQ[] = [];
    // Build 30 unique questions by cycling through propositions and varying question types
    for (let i = 0; i < 30; i++) {
      const p = pick(PROPOZITII_SIMPLE, rng);
      const variantType = Math.floor(i / PROPOZITII_SIMPLE.length);

      let question = "";
      let correct = "";
      let wrongOpts: string[] = [];

      if (variantType === 0) {
        question = `Subiectul din "${p.prop}" este:`;
        correct = p.subj;
        wrongOpts = [
          pick(PROPOZITII_SIMPLE.filter(x => x.subj !== p.subj), rng).subj,
          "predicat",
          "complement",
        ];
      } else if (variantType === 1) {
        question = `Predicatul din "${p.prop}" este:`;
        correct = p.pred;
        wrongOpts = [
          pick(PROPOZITII_SIMPLE.filter(x => x.pred !== p.pred), rng).pred,
          p.subj,
          "atribut",
        ];
      } else {
        question = `Ce face "${p.subj}" în: "${p.prop}"?`;
        correct = p.pred;
        wrongOpts = [
          pick(PROPOZITII_SIMPLE.filter(x => x.pred !== p.pred), rng).pred,
          "este",
          "are rol de complement",
        ];
      }

      questionPool.push(createMCQ("Romanian-C8-P1", "sintaxa_propozitie_simpla", question, correct, wrongOpts, rng));
    }
    return shuffle(questionPool, rng).slice(0, 30);
  },

  sintaxa_propozitie_compusa: (seed = 42): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const questionPool: CurriculumMCQ[] = [];
    // Build 30 unique questions by cycling through compound propositions and varying question types
    for (let i = 0; i < 30; i++) {
      const p = pick(PROPOZITII_COMPUSE, rng);
      const variantType = Math.floor(rng() * 3);

      let question = "";
      let correct = "";
      let wrongOpts: string[] = [];

      if (variantType === 0) {
        question = `Tipul: "${p.prop}"`;
        correct = p.type;
        wrongOpts = [
          pick(PROPOZITII_COMPUSE.filter(x => x.type !== p.type), rng).type,
          "subordonată",
          "simplă",
        ];
      } else if (variantType === 1) {
        question = `Propoziția compusă din "${p.prop}" este:`;
        correct = p.type;
        wrongOpts = ["cu subordonată", "cu atribut", "cu complement"];
      } else {
        question = `Cum clasifică lingvistica: "${p.prop}"?`;
        correct = p.type;
        wrongOpts = [
          "propoziție simplă",
          pick(PROPOZITII_COMPUSE.filter(x => x.type !== p.type), rng).type,
          "neclasificabilă",
        ];
      }

      questionPool.push(createMCQ("Romanian-C8-P1", "sintaxa_propozitie_compusa", question, correct, wrongOpts, rng));
    }
    return shuffle(questionPool, rng).slice(0, 30);
  },

  subordonare_recapitulare: (seed = 42): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const questionPool: CurriculumMCQ[] = [];
    // Build 30 unique questions by cycling through subordination types and varying question types
    for (let i = 0; i < 30; i++) {
      const s = pick(SUBORDONARE_TYPES, rng);
      const variantType = Math.floor(i / SUBORDONARE_TYPES.length);

      let question = "";
      let correct = "";
      let wrongOpts: string[] = [];

      if (variantType === 0) {
        question = `${s.desc}:`;
        correct = s.type;
        wrongOpts = [
          pick(SUBORDONARE_TYPES.filter(x => x.type !== s.type), rng).type,
          "copulativă",
          "compusă",
        ];
      } else if (variantType === 1) {
        question = `Propoziția subordonată care "${s.desc}" se numește:`;
        correct = s.type;
        wrongOpts = [
          pick(SUBORDONARE_TYPES.filter(x => x.type !== s.type), rng).type,
          "atributivă",
          "participială",
        ];
      } else {
        const others = shuffle(SUBORDONARE_TYPES.filter(x => x.type !== s.type), rng);
        question = `Care din următoarele nu este o propoziție subordonată "${s.type}"?`;
        correct = others[0].type;
        wrongOpts = [s.type, others[1]?.type ?? "atributivă", others[2]?.type ?? "participială"];
      }

      questionPool.push(createMCQ("Romanian-C8-P1", "subordonare_recapitulare", question, correct, wrongOpts, rng));
    }
    return shuffle(questionPool, rng).slice(0, 30);
  },

  analiza_sintactica: (seed = 42): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const questionPool: CurriculumMCQ[] = [];
    const funcs = [
      { name: "subiect", def: "arată cine face acțiunea (răspunde la 'cine?')", sample: "Copilul citește." },
      { name: "predicat", def: "arată ce face subiectul (răspunde la 'ce face?')", sample: "Copilul citește." },
      { name: "atribut", def: "determină un substantiv (răspunde la 'care?', 'ce fel de?')", sample: "carte frumoasă" },
      { name: "complement direct", def: "completează un verb tranzitiv (răspunde la 'pe cine?', 'ce?')", sample: "Citesc o carte." },
      { name: "complement indirect", def: "completează un verb (răspunde la 'cui?')", sample: "Îi dau cartea Mariei." },
      { name: "complement circumstanțial", def: "arată locul, timpul sau modul acțiunii", sample: "Merge la școală." },
    ];
    const allNames = funcs.map(f => f.name);
    for (let i = 0; i < 30; i++) {
      const f = pick(funcs, rng);
      const variantType = Math.floor(i / funcs.length) % 2;
      let question = "";
      if (variantType === 0) {
        question = `Cum se numește partea de propoziție care ${f.def}?`;
      } else {
        question = `În exemplul "${f.sample}", ce funcție sintactică se cere?: ${f.def}`;
      }
      const wrongOpts = shuffle(allNames.filter(x => x !== f.name), rng).slice(0, 3);
      questionPool.push(createMCQ("Romanian-C8-P1", "analiza_sintactica", question, f.name, wrongOpts, rng));
    }
    return shuffle(questionPool, rng).slice(0, 30);
  },

  membri_propozitie: (seed = 42): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const questionPool: CurriculumMCQ[] = [];
    const members = [
      { name: "subiect", def: "partea principală care arată cine face acțiunea" },
      { name: "predicat", def: "partea principală care arată ce face subiectul" },
      { name: "atribut", def: "parte secundară care determină un substantiv" },
      { name: "complement", def: "parte secundară care determină un verb" },
      { name: "apoziție", def: "parte care explică un substantiv printr-un alt nume" },
      { name: "circumstanțial", def: "complement care arată locul, timpul sau modul" },
      { name: "nume predicativ", def: "parte care, alături de verbul copulativ, formează predicatul nominal" },
      { name: "atribut adjectival", def: "atribut exprimat printr-un adjectiv" },
    ];
    const allNames = members.map(m => m.name);
    for (let i = 0; i < 30; i++) {
      const m = pick(members, rng);
      const variantType = Math.floor(i / members.length) % 2;
      let question = "";
      if (variantType === 0) {
        question = `Cum se numește ${m.def}?`;
      } else {
        question = `Care parte de propoziție corespunde definiției: "${m.def}"?`;
      }
      const wrongOpts = shuffle(allNames.filter(x => x !== m.name), rng).slice(0, 3);
      questionPool.push(createMCQ("Romanian-C8-P1", "membri_propozitie", question, m.name, wrongOpts, rng));
    }
    return shuffle(questionPool, rng).slice(0, 30);
  },

  sintaxa_propozitie_simpla_typing: (seed = 42): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 15; i++) {
      const p = pick(PROPOZITII_SIMPLE, rng);
      questions.push(createTyping("Romanian-C8-P1", "sintaxa_propozitie_simpla", `Subiectul: "${p.prop}"`, p.subj));
    }
    return questions;
  },

  sintaxa_propozitie_compusa_typing: (seed = 42): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 15; i++) {
      const p = pick(PROPOZITII_COMPUSE, rng);
      questions.push(createTyping("Romanian-C8-P1", "sintaxa_propozitie_compusa", `Tipul: "${p.prop}"`, p.type));
    }
    return questions;
  },

  subordonare_recapitulare_typing: (seed = 42): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 15; i++) {
      const s = pick(SUBORDONARE_TYPES, rng);
      questions.push(createTyping("Romanian-C8-P1", "subordonare_recapitulare", `Tipul care ${s.desc}:`, s.type));
    }
    return questions;
  },

  analiza_sintactica_typing: (seed = 42): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const questions: CurriculumQuestion[] = [];
    const funcs = [
      { name: "subiect", q: 'În "Copilul citește.", cuvântul "Copilul" are funcția de:' },
      { name: "predicat", q: 'În "Copilul citește.", cuvântul "citește" are funcția de:' },
      { name: "atribut", q: 'În "carte frumoasă", cuvântul "frumoasă" are funcția de:' },
      { name: "complement direct", q: 'În "Citesc o carte.", grupul "o carte" are funcția de:' },
      { name: "complement indirect", q: 'În "Îi dau Mariei.", cuvântul "Mariei" are funcția de:' },
    ];
    for (let i = 0; i < 15; i++) {
      const f = pick(funcs, rng);
      questions.push(createTyping("Romanian-C8-P1", "analiza_sintactica", f.q, f.name));
    }
    return questions;
  },

  membri_propozitie_typing: (seed = 42): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const questions: CurriculumQuestion[] = [];
    const members = [
      { name: "subiect", q: "Cum se numește partea care arată cine face acțiunea?" },
      { name: "predicat", q: "Cum se numește partea care arată ce face subiectul?" },
      { name: "atribut", q: "Cum se numește partea secundară care determină un substantiv?" },
      { name: "complement", q: "Cum se numește partea secundară care determină un verb?" },
      { name: "apoziție", q: "Cum se numește partea care explică un substantiv printr-un alt nume?" },
    ];
    for (let i = 0; i < 15; i++) {
      const m = pick(members, rng);
      questions.push(createTyping("Romanian-C8-P1", "membri_propozitie", m.q, m.name));
    }
    return questions;
  },
};
