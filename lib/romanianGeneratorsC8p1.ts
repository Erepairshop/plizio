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
  { prop: "Maria joacă în parc.", subj: "Maria", pred: "joacă" },
  { prop: "Ploaia cade toată noaptea.", subj: "Ploaia", pred: "cade" },
  { prop: "Soarele rasare în est.", subj: "Soarele", pred: "rasare" },
];

const PROPOZITII_COMPUSE = [
  { prop: "Merg la cinema și cumpăr bilete.", type: "copulativă" },
  { prop: "Mănânc măr sau portocală.", type: "disjunctivă" },
  { prop: "Vorbesc tare, dar nimeni nu-mi răspunde.", type: "adversativă" },
  { prop: "Vin la petrecere, căci ești prieten meu.", type: "explicativă" },
];

const SUBORDONARE_TYPES = [
  { type: "subiectivă", desc: "exprimă subiectul" },
  { type: "completivă directă", desc: "completeaza un verb" },
  { type: "de loc", desc: "indica un loc" },
  { type: "de timp", desc: "indica un moment" },
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
        question = `Ce facă "${p.subj}" în: "${p.prop}"?`;
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
    const funcs = ["subiect", "predicat", "atribut", "complement"];
    // Build 30 unique questions by cycling through functions and varying question types
    for (let i = 0; i < 30; i++) {
      const f = pick(funcs, rng);
      const variantType = Math.floor(i / funcs.length);

      let question = "";
      let correct = "";
      let wrongOpts: string[] = [];

      if (variantType === 0) {
        question = `Funcția: "${f}"`;
        correct = f;
        wrongOpts = funcs.filter(x => x !== f);
      } else if (variantType === 1) {
        question = `Care din următoarele este "${f}"?`;
        correct = f;
        wrongOpts = funcs.filter(x => x !== f);
      } else {
        question = `Cum se numește elementul din propoziție care joacă rolul de "${f}"?`;
        correct = f;
        wrongOpts = funcs.filter(x => x !== f);
      }

      questionPool.push(createMCQ("Romanian-C8-P1", "analiza_sintactica", question, correct, wrongOpts, rng));
    }
    return shuffle(questionPool, rng).slice(0, 30);
  },

  membri_propozitie: (seed = 42): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const questionPool: CurriculumMCQ[] = [];
    const members = ["subiect", "predicat", "atribut", "complement", "apoziție", "circumstanțial"];
    // Build 30 unique questions by cycling through members and varying question types
    for (let i = 0; i < 30; i++) {
      const m = pick(members, rng);
      const variantType = Math.floor(i / members.length);

      let question = "";
      let correct = "";
      let wrongOpts: string[] = [];

      if (variantType === 0) {
        question = `Care este: "${m}"?`;
        correct = m;
        wrongOpts = members.filter(x => x !== m).slice(0, 3);
      } else if (variantType === 1) {
        question = `Membrul propozitiei care joacă rolul de "${m}" este:`;
        correct = m;
        wrongOpts = members.filter(x => x !== m).slice(0, 3);
      } else {
        question = `Cum se numeste membrul din "${m}" în analiza sintactică?`;
        correct = m;
        wrongOpts = members.filter(x => x !== m).slice(0, 3);
      }

      questionPool.push(createMCQ("Romanian-C8-P1", "membri_propozitie", question, correct, wrongOpts, rng));
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
    const funcs = ["subiect", "predicat", "atribut", "complement"];
    for (let i = 0; i < 15; i++) {
      const f = pick(funcs, rng);
      questions.push(createTyping("Romanian-C8-P1", "analiza_sintactica", `Funcția: "${f}"`, f));
    }
    return questions;
  },

  membri_propozitie_typing: (seed = 42): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const questions: CurriculumQuestion[] = [];
    const members = ["subiect", "predicat", "atribut", "complement"];
    for (let i = 0; i < 15; i++) {
      const m = pick(members, rng);
      questions.push(createTyping("Romanian-C8-P1", "membri_propozitie", `Membru al propoziției: "${m}"`, m));
    }
    return questions;
  },
};
