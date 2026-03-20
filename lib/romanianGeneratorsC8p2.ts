import type { CurriculumQuestion, CurriculumMCQ } from "./curriculumTypes";

function mulberry32(seed: number) { return function () { seed |= 0; seed = (seed + 0x6d2b79f5) | 0; let t = Math.imul(seed ^ (seed >>> 15), 1 | seed); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
function shuffle<T>(arr: T[], rng: () => number): T[] { const copy = [...arr]; for (let i = copy.length - 1; i > 0; i--) { const j = Math.floor(rng() * (i + 1)); [copy[i], copy[j]] = [copy[j], copy[i]]; } return copy; }
function pick<T>(arr: T[], rng: () => number): T { return arr[Math.floor(rng() * arr.length)]; }
function createMCQ(topic: string, subtopic: string, question: string, correct: string, wrongOptions: string[], rng: () => number): CurriculumMCQ { const seen = new Set<string>(); const unique: string[] = []; for (const w of wrongOptions) { if (w !== correct && !seen.has(w)) { seen.add(w); unique.push(w); } } const opts = shuffle([correct, ...unique.slice(0, 3)], rng); return { type: "mcq", topic, subtopic, question, options: opts, correct: opts.indexOf(correct) }; }
function createTyping(topic: string, subtopic: string, question: string, answer: string): CurriculumQuestion { return { type: "typing", topic, subtopic, question, answer: answer.toLowerCase().trim() }; }

const VERB_FORMS = [
  { infinitive: "a merge", present: "merg", past: "am mers", future: "voi merge" },
  { infinitive: "a vorbi", present: "vorbesc", past: "am vorbit", future: "voi vorbi" },
  { infinitive: "a citi", present: "citesc", past: "am citit", future: "voi citi" },
];

const PRONUME_TYPES = [
  { pronume: "eu", type: "pronume personal", case: "nominativ" },
  { pronume: "mă", type: "pronume personal", case: "acuzativ" },
  { pronume: "mi", type: "pronume personal", case: "dativ" },
  { pronume: "mine", type: "pronume personal", case: "genitiv" },
];

const ARTICOL_TYPES = [
  { word: "un băiat", article: "un", type: "articol hotărât" },
  { word: "o fată", article: "o", type: "articol hotărât" },
  { word: "băiatul", article: "-ul", type: "articol hotărât enclitic" },
];

export const C8P2_Generators = {
  verb_forme_avansate: (seed = 42): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const questions: CurriculumMCQ[] = [];
    for (let i = 0; i < 30; i++) {
      const v = VERB_FORMS[i % VERB_FORMS.length];
      questions.push(createMCQ("Romanian-C8-P2", "verb_forme_avansate", `Prezentul verbului "${v.infinitive}":`, v.present, [pick(VERB_FORMS, rng).present, "participiu", "gerunziu"], rng));
    }
    return shuffle(questions, rng).slice(0, 30);
  },

  pronume_cazuri: (seed = 42): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const questions: CurriculumMCQ[] = [];
    for (let i = 0; i < 30; i++) {
      const p = PRONUME_TYPES[i % PRONUME_TYPES.length];
      questions.push(createMCQ("Romanian-C8-P2", "pronume_cazuri", `Cazul pronumelui "${p.pronume}":`, p.case, [pick(PRONUME_TYPES, rng).case, "acuzativ", "dativ"], rng));
    }
    return shuffle(questions, rng).slice(0, 30);
  },

  articol_definit_nedefinit: (seed = 42): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const questions: CurriculumMCQ[] = [];
    for (let i = 0; i < 30; i++) {
      const a = ARTICOL_TYPES[i % ARTICOL_TYPES.length];
      questions.push(createMCQ("Romanian-C8-P2", "articol_definit_nedefinit", `Articolul din "${a.word}":`, a.article, [pick(ARTICOL_TYPES, rng).article, "pronume", "prepoziție"], rng));
    }
    return shuffle(questions, rng).slice(0, 30);
  },

  morfologie_recapitulare: (seed = 42): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const questions: CurriculumMCQ[] = [];
    const parts = ["substantiv", "verb", "adjectiv", "pronume", "articol"];
    for (let i = 0; i < 30; i++) {
      const p = pick(parts, rng);
      questions.push(createMCQ("Romanian-C8-P2", "morfologie_recapitulare", `Care este: "${p}"?`, p, parts.filter(x => x !== p).slice(0, 3), rng));
    }
    return shuffle(questions, rng).slice(0, 30);
  },

  substantiv_gen_numar: (seed = 42): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const questions: CurriculumMCQ[] = [];
    const nouns = [
      { noun: "copil", gender: "masculin", number: "singular" },
      { noun: "copii", gender: "masculin", number: "plural" },
      { noun: "fată", gender: "feminin", number: "singular" },
      { noun: "fete", gender: "feminin", number: "plural" },
    ];
    for (let i = 0; i < 30; i++) {
      const n = pick(nouns, rng);
      questions.push(createMCQ("Romanian-C8-P2", "substantiv_gen_numar", `Genul substantivului "${n.noun}":`, n.gender, [pick(nouns, rng).gender, "neutru", "ambiguu"], rng));
    }
    return shuffle(questions, rng).slice(0, 30);
  },

  verb_forme_avansate_typing: (seed = 42): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const q: CurriculumQuestion[] = [];
    for (let i = 0; i < 15; i++) {
      const v = VERB_FORMS[i % VERB_FORMS.length];
      q.push(createTyping("Romanian-C8-P2", "verb_forme_avansate", `Prezentul "${v.infinitive}":`, v.present));
    }
    return q;
  },

  pronume_cazuri_typing: (seed = 42): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const q: CurriculumQuestion[] = [];
    for (let i = 0; i < 15; i++) {
      const p = PRONUME_TYPES[i % PRONUME_TYPES.length];
      q.push(createTyping("Romanian-C8-P2", "pronume_cazuri", `Cazul "${p.pronume}":`, p.case));
    }
    return q;
  },

  articol_definit_nedefinit_typing: (seed = 42): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const q: CurriculumQuestion[] = [];
    for (let i = 0; i < 15; i++) {
      const a = ARTICOL_TYPES[i % ARTICOL_TYPES.length];
      q.push(createTyping("Romanian-C8-P2", "articol_definit_nedefinit", `Articolul "${a.word}":`, a.article));
    }
    return q;
  },

  morfologie_recapitulare_typing: (seed = 42): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const q: CurriculumQuestion[] = [];
    const parts = ["substantiv", "verb", "adjectiv", "pronume", "articol"];
    for (let i = 0; i < 15; i++) {
      const p = pick(parts, rng);
      q.push(createTyping("Romanian-C8-P2", "morfologie_recapitulare", `Partea de vorbire: "${p}"`, p));
    }
    return q;
  },

  substantiv_gen_numar_typing: (seed = 42): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const q: CurriculumQuestion[] = [];
    const nouns = ["copil (masculin)", "fată (feminin)", "pom (masculin)", "casă (feminin)"];
    for (let i = 0; i < 15; i++) {
      const n = pick(nouns, rng);
      q.push(createTyping("Romanian-C8-P2", "substantiv_gen_numar", `Genul: "${n}"`, n.split(" ")[1]?.slice(0, -1) || ""));
    }
    return q;
  },
};
