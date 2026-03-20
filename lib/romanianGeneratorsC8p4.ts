import type { CurriculumQuestion, CurriculumMCQ } from "./curriculumTypes";

function mulberry32(seed: number) { return function () { seed |= 0; seed = (seed + 0x6d2b79f5) | 0; let t = Math.imul(seed ^ (seed >>> 15), 1 | seed); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
function shuffle<T>(arr: T[], rng: () => number): T[] { const copy = [...arr]; for (let i = copy.length - 1; i > 0; i--) { const j = Math.floor(rng() * (i + 1)); [copy[i], copy[j]] = [copy[j], copy[i]]; } return copy; }
function pick<T>(arr: T[], rng: () => number): T { return arr[Math.floor(rng() * arr.length)]; }
function createMCQ(topic: string, subtopic: string, question: string, correct: string, wrongOptions: string[], rng: () => number) { const seen = new Set<string>(); const unique: string[] = []; for (const w of wrongOptions) { if (w !== correct && !seen.has(w)) { seen.add(w); unique.push(w); } } const opts = shuffle([correct, ...unique.slice(0, 3)], rng); return { type: "mcq", topic, subtopic, question, options: opts, correct: opts.indexOf(correct) }; }
function createTyping(topic: string, subtopic: string, question: string, answer: string) { return { type: "typing", topic, subtopic, question, answer: answer.toLowerCase().trim() }; }

const EN_TEXTE = [
  { text: "Elevii studiază la biblioteca școlii.", tema: "educație", nivel: "simplu" },
  { text: "Vara este cea mai frumoasă anotimpuri a anului.", tema: "natură", nivel: "simplu" },
  { text: "Familia este pilonul societății moderne.", tema: "societate", nivel: "dificil" },
];

const EN_INTREBARI = [
  { intrebare: "Care este tema textului?", tip: "înțelegere generală" },
  { intrebare: "Ce înțeles transmite autorul?", tip: "interpretare" },
  { intrebare: "Identifică figurile de stil folosite", tip: "analiză" },
];

const EN_CORECTII = [
  { greseala: "Plec acasă", corectare: "Plec acasă", tip: "ortografie" },
  { greseala: "Vorbesc cu mama", corectare: "Vorbesc cu mama", tip: "gramatică" },
  { greseala: "Sunt obosit, dar continuu", corectare: "Sunt obosit; continuu", tip: "punctuație" },
];

const EN_REDACTARE = [
  { tema: "O zi din vâțele mele", gen: "naratiune" },
  { tema: "Importanța cărții în viața mea", gen: "eseu" },
  { tema: "Prietenia adevărată", gen: "reflecție" },
];

export const C8P4_Generators = {
  en_citire_intelegere: (seed = 42) => {
    const rng = mulberry32(seed);
    const questions = [];
    for (let i = 0; i < 30; i++) {
      const t = pick(EN_TEXTE, rng);
      questions.push(createMCQ("Romanian-C8-P4", "en_citire_intelegere", `Tema textului: "${t.text}"`, t.tema, ["educație", "natură", "sport"], rng));
    }
    return shuffle(questions, rng).slice(0, 30);
  },

  en_intrebari_text: (seed = 42) => {
    const rng = mulberry32(seed);
    const questions = [];
    for (let i = 0; i < 30; i++) {
      const int = pick(EN_INTREBARI, rng);
      questions.push(createMCQ("Romanian-C8-P4", "en_intrebari_text", `Tipul întrebării: "${int.intrebare}"`, int.tip, ["înțelegere generală", "interpretare", "analiză"], rng));
    }
    return shuffle(questions, rng).slice(0, 30);
  },

  en_corectii_ortografie: (seed = 42) => {
    const rng = mulberry32(seed);
    const questions = [];
    for (let i = 0; i < 30; i++) {
      const c = pick(EN_CORECTII, rng);
      questions.push(createMCQ("Romanian-C8-P4", "en_corectii_ortografie", `Corectarea greșelii: "${c.greseala}"`, c.corectare, ["Plec acasă", "Vorbesc cu mama", "Sunt obosit, dar continuu"], rng));
    }
    return shuffle(questions, rng).slice(0, 30);
  },

  en_redactare_planning: (seed = 42) => {
    const rng = mulberry32(seed);
    const questions = [];
    for (let i = 0; i < 30; i++) {
      const r = pick(EN_REDACTARE, rng);
      questions.push(createMCQ("Romanian-C8-P4", "en_redactare_planning", `Tema: "${r.tema}" - genul textului:`, r.gen, ["naratiune", "eseu", "reflecție"], rng));
    }
    return shuffle(questions, rng).slice(0, 30);
  },

  en_vocabular_context: (seed = 42) => {
    const rng = mulberry32(seed);
    const questions = [];
    const words = ["frumos", "greu", "rapid", "cald", "trist"];
    for (let i = 0; i < 30; i++) {
      const w = pick(words, rng);
      questions.push(createMCQ("Romanian-C8-P4", "en_vocabular_context", `Antonimul cuvântului "${w}":`, w === "frumos" ? "urât" : w === "greu" ? "ușor" : w === "rapid" ? "lent" : w === "cald" ? "rece" : "vesel", ["urât", "ușor", "lent"], rng));
    }
    return shuffle(questions, rng).slice(0, 30);
  },

  en_citire_intelegere_typing: (seed = 42) => {
    const rng = mulberry32(seed);
    const q = [];
    for (let i = 0; i < 15; i++) {
      const t = pick(EN_TEXTE, rng);
      q.push(createTyping("Romanian-C8-P4", "en_citire_intelegere", `Tema: "${t.text}"`, t.tema));
    }
    return q;
  },

  en_intrebari_text_typing: (seed = 42) => {
    const rng = mulberry32(seed);
    const q = [];
    for (let i = 0; i < 15; i++) {
      const int = pick(EN_INTREBARI, rng);
      q.push(createTyping("Romanian-C8-P4", "en_intrebari_text", `Tip întrebare: "${int.intrebare}"`, int.tip));
    }
    return q;
  },

  en_corectii_ortografie_typing: (seed = 42) => {
    const rng = mulberry32(seed);
    const q = [];
    for (let i = 0; i < 15; i++) {
      const c = pick(EN_CORECTII, rng);
      q.push(createTyping("Romanian-C8-P4", "en_corectii_ortografie", `Corectare: "${c.greseala}"`, c.corectare));
    }
    return q;
  },

  en_redactare_planning_typing: (seed = 42) => {
    const rng = mulberry32(seed);
    const q = [];
    for (let i = 0; i < 15; i++) {
      const r = pick(EN_REDACTARE, rng);
      q.push(createTyping("Romanian-C8-P4", "en_redactare_planning", `Genul: "${r.tema}"`, r.gen));
    }
    return q;
  },

  en_vocabular_context_typing: (seed = 42) => {
    const rng = mulberry32(seed);
    const q = [];
    const words = ["frumos", "greu", "rapid", "cald", "trist"];
    for (let i = 0; i < 15; i++) {
      const w = pick(words, rng);
      q.push(createTyping("Romanian-C8-P4", "en_vocabular_context", `Antonim: "${w}"`, w === "frumos" ? "urât" : w === "greu" ? "ușor" : w === "rapid" ? "lent" : w === "cald" ? "rece" : "vesel"));
    }
    return q;
  },
};
