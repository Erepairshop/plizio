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
  { infinitive: "a scrie", present: "scriu", past: "am scris", future: "voi scrie" },
  { infinitive: "a cânta", present: "cânt", past: "am cântat", future: "voi cânta" },
  { infinitive: "a lucra", present: "lucrez", past: "am lucrat", future: "voi lucra" },
  { infinitive: "a dormi", present: "dorm", past: "am dormit", future: "voi dormi" },
  { infinitive: "a face", present: "fac", past: "am făcut", future: "voi face" },
  { infinitive: "a vedea", present: "văd", past: "am văzut", future: "voi vedea" },
  { infinitive: "a învăța", present: "învăț", past: "am învățat", future: "voi învăța" },
];

const PRONUME_TYPES = [
  { pronume: "eu", type: "pronume personal", case: "nominativ" },
  { pronume: "mă", type: "pronume personal", case: "acuzativ" },
  { pronume: "îmi", type: "pronume personal", case: "dativ" },
  { pronume: "mine", type: "pronume personal", case: "acuzativ" },
  { pronume: "tu", type: "pronume personal", case: "nominativ" },
  { pronume: "te", type: "pronume personal", case: "acuzativ" },
  { pronume: "îți", type: "pronume personal", case: "dativ" },
  { pronume: "el", type: "pronume personal", case: "nominativ" },
  { pronume: "lui", type: "pronume personal", case: "dativ" },
  { pronume: "noi", type: "pronume personal", case: "nominativ" },
  { pronume: "le", type: "pronume personal", case: "dativ" },
];

const ARTICOL_TYPES = [
  { word: "un băiat", article: "un", type: "articol nehotărât" },
  { word: "o fată", article: "o", type: "articol nehotărât" },
  { word: "niște copii", article: "niște", type: "articol nehotărât" },
  { word: "băiatul", article: "-ul", type: "articol hotărât enclitic" },
  { word: "fata", article: "-a", type: "articol hotărât enclitic" },
  { word: "copiii", article: "-i", type: "articol hotărât enclitic" },
  { word: "florile", article: "-le", type: "articol hotărât enclitic" },
  { word: "cei trei", article: "cei", type: "articol demonstrativ (adjectival)" },
  { word: "cel frumos", article: "cel", type: "articol demonstrativ (adjectival)" },
];

export const C8P2_Generators = {
  verb_forme_avansate: (seed = 42): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const questions: CurriculumMCQ[] = [];
    for (let i = 0; i < 30; i++) {
      const v = pick(VERB_FORMS, rng);
      const otherV = pick(VERB_FORMS.filter(x => x.infinitive !== v.infinitive), rng);
      questions.push(createMCQ("Romanian-C8-P2", "verb_forme_avansate", `Prezentul verbului "${v.infinitive}":`, v.present, [otherV.present, "participiu", "gerunziu"], rng));
    }
    return shuffle(questions, rng).slice(0, 30);
  },

  pronume_cazuri: (seed = 42): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const questions: CurriculumMCQ[] = [];
    for (let i = 0; i < 30; i++) {
      const p = pick(PRONUME_TYPES, rng);
      const otherP = pick(PRONUME_TYPES.filter(x => x.pronume !== p.pronume), rng);
      questions.push(createMCQ("Romanian-C8-P2", "pronume_cazuri", `Cazul pronumelui "${p.pronume}":`, p.case, [otherP.case, "acuzativ", "dativ"], rng));
    }
    return shuffle(questions, rng).slice(0, 30);
  },

  articol_definit_nedefinit: (seed = 42): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const questions: CurriculumMCQ[] = [];
    for (let i = 0; i < 30; i++) {
      const a = pick(ARTICOL_TYPES, rng);
      const otherA = pick(ARTICOL_TYPES.filter(x => x.word !== a.word), rng);
      questions.push(createMCQ("Romanian-C8-P2", "articol_definit_nedefinit", `Articolul din "${a.word}":`, a.article, [otherA.article, "pronume", "prepoziție"], rng));
    }
    return shuffle(questions, rng).slice(0, 30);
  },

  morfologie_recapitulare: (seed = 42): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const questions: CurriculumMCQ[] = [];
    const parts = [
      { name: "substantiv", word: "masă" },
      { name: "verb", word: "aleargă" },
      { name: "adjectiv", word: "frumos" },
      { name: "pronume", word: "ea" },
      { name: "articol", word: "-ul (din băiatul)" },
      { name: "numeral", word: "trei" },
      { name: "adverb", word: "repede" },
      { name: "prepoziție", word: "lângă" },
      { name: "conjuncție", word: "și" },
      { name: "interjecție", word: "vai!" },
    ];
    const allNames = parts.map(p => p.name);
    for (let i = 0; i < 30; i++) {
      const p = pick(parts, rng);
      const wrongOpts = shuffle(allNames.filter(x => x !== p.name), rng).slice(0, 3);
      questions.push(createMCQ("Romanian-C8-P2", "morfologie_recapitulare", `Ce parte de vorbire este cuvântul "${p.word}"?`, p.name, wrongOpts, rng));
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
      { noun: "scaun", gender: "neutru", number: "singular" },
      { noun: "scaune", gender: "neutru", number: "plural" },
      { noun: "pom", gender: "masculin", number: "singular" },
      { noun: "casă", gender: "feminin", number: "singular" },
      { noun: "tablou", gender: "neutru", number: "singular" },
      { noun: "flori", gender: "feminin", number: "plural" },
    ];
    for (let i = 0; i < 30; i++) {
      const n = pick(nouns, rng);
      const otherN = pick(nouns.filter(x => x.gender !== n.gender), rng);
      const askNumber = i % 2 === 1;
      if (askNumber) {
        const otherNum = pick(nouns.filter(x => x.number !== n.number), rng);
        questions.push(createMCQ("Romanian-C8-P2", "substantiv_gen_numar", `Numărul substantivului "${n.noun}":`, n.number, [otherNum.number, "dual", "colectiv"], rng));
      } else {
        questions.push(createMCQ("Romanian-C8-P2", "substantiv_gen_numar", `Genul substantivului "${n.noun}":`, n.gender, [otherN.gender, "comun", "ambiguu"], rng));
      }
    }
    return shuffle(questions, rng).slice(0, 30);
  },

  verb_forme_avansate_typing: (seed = 42): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const q: CurriculumQuestion[] = [];
    for (let i = 0; i < 15; i++) {
      const v = pick(VERB_FORMS, rng);
      q.push(createTyping("Romanian-C8-P2", "verb_forme_avansate", `Prezentul "${v.infinitive}":`, v.present));
    }
    return q;
  },

  pronume_cazuri_typing: (seed = 42): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const q: CurriculumQuestion[] = [];
    for (let i = 0; i < 15; i++) {
      const p = pick(PRONUME_TYPES, rng);
      q.push(createTyping("Romanian-C8-P2", "pronume_cazuri", `Cazul "${p.pronume}":`, p.case));
    }
    return q;
  },

  articol_definit_nedefinit_typing: (seed = 42): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const q: CurriculumQuestion[] = [];
    for (let i = 0; i < 15; i++) {
      const a = pick(ARTICOL_TYPES, rng);
      q.push(createTyping("Romanian-C8-P2", "articol_definit_nedefinit", `Articolul "${a.word}":`, a.article));
    }
    return q;
  },

  morfologie_recapitulare_typing: (seed = 42): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const q: CurriculumQuestion[] = [];
    const parts = [
      { name: "substantiv", word: "masă" },
      { name: "verb", word: "aleargă" },
      { name: "adjectiv", word: "frumos" },
      { name: "pronume", word: "ea" },
      { name: "numeral", word: "trei" },
      { name: "adverb", word: "repede" },
      { name: "prepoziție", word: "lângă" },
      { name: "conjuncție", word: "și" },
    ];
    for (let i = 0; i < 15; i++) {
      const p = pick(parts, rng);
      q.push(createTyping("Romanian-C8-P2", "morfologie_recapitulare", `Ce parte de vorbire este "${p.word}"?`, p.name));
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
