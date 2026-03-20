import type { CurriculumQuestion, CurriculumMCQ } from "./curriculumTypes";

function mulberry32(seed: number) { return function () { seed |= 0; seed = (seed + 0x6d2b79f5) | 0; let t = Math.imul(seed ^ (seed >>> 15), 1 | seed); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
function shuffle<T>(arr: T[], rng: () => number): T[] { const copy = [...arr]; for (let i = copy.length - 1; i > 0; i--) { const j = Math.floor(rng() * (i + 1)); [copy[i], copy[j]] = [copy[j], copy[i]]; } return copy; }
function pick<T>(arr: T[], rng: () => number): T { return arr[Math.floor(rng() * arr.length)]; }
function createMCQ(topic: string, subtopic: string, question: string, correct: string, wrongOptions: string[], rng: () => number) { const seen = new Set<string>(); const unique: string[] = []; for (const w of wrongOptions) { if (w !== correct && !seen.has(w)) { seen.add(w); unique.push(w); } } const opts = shuffle([correct, ...unique.slice(0, 3)], rng); return { type: "mcq", topic, subtopic, question, options: opts, correct: opts.indexOf(correct) }; }
function createTyping(topic: string, subtopic: string, question: string, answer: string) { return { type: "typing", topic, subtopic, question, answer: answer.toLowerCase().trim() }; }

const FIGURI_STIL = [
  { figura: "metafora", desc: "comparație între două lucruri fără cuvintele 'ca' sau 'precum'" },
  { figura: "comparatie", desc: "asemănare între două lucruri cu ajutorul cuvintelor 'ca' sau 'precum'" },
  { figura: "personificare", desc: "atribuire de trăsături umane unor obiecte sau fenomene" },
  { figura: "hiperbola", desc: "exagerare voit a unei trăsături" },
  { figura: "ironie", desc: "a spune ceva în sens opus ceea ce se înțelege literal" },
];

const TEXT_LITERAR_GENURI = [
  { gen: "roman", trait: "naratiune lungă cu mai mulți eroi și conflicte" },
  { gen: "poezi", trait: "text versificat cu ritm și rimă" },
  { gen: "dramă", trait: "text pentru scenă cu dialoguri și acțiuni" },
  { gen: "nuvela", trait: "naratiune scurtă cu un singur conflict" },
];

const COMENTARIU_LITERAR_ELEM = [
  { element: "tema", desc: "ideea centrală a textului" },
  { element: "motiv", desc: "element recurent în text" },
  { element: "simbol", desc: "cuvânt care reprezintă ideea abstractă" },
  { element: "personaj", desc: "ființă cu rol în naratiune" },
];

export const C8P3_Generators = {
  figuri_stil: (seed = 42) => {
    const rng = mulberry32(seed);
    const questions = [];
    for (let i = 0; i < 30; i++) {
      const f = pick(FIGURI_STIL, rng);
      const otherF = pick(FIGURI_STIL.filter(x => x.figura !== f.figura), rng);
      questions.push(createMCQ("Romanian-C8-P3", "figuri_stil", `"${f.desc}" - aceasta este:`, f.figura, [otherF.figura, "versificație", "prozodia"], rng));
    }
    return shuffle(questions, rng).slice(0, 30);
  },

  text_literar_genuri: (seed = 42) => {
    const rng = mulberry32(seed);
    const questions = [];
    for (let i = 0; i < 30; i++) {
      const g = pick(TEXT_LITERAR_GENURI, rng);
      const otherG = pick(TEXT_LITERAR_GENURI.filter(x => x.gen !== g.gen), rng);
      questions.push(createMCQ("Romanian-C8-P3", "text_literar_genuri", `"${g.trait}" - genul este:`, g.gen, [otherG.gen, "eseu", "memorii"], rng));
    }
    return shuffle(questions, rng).slice(0, 30);
  },

  comentariu_literar: (seed = 42) => {
    const rng = mulberry32(seed);
    const questions = [];
    for (let i = 0; i < 30; i++) {
      const e = pick(COMENTARIU_LITERAR_ELEM, rng);
      const otherE = pick(COMENTARIU_LITERAR_ELEM.filter(x => x.element !== e.element), rng);
      questions.push(createMCQ("Romanian-C8-P3", "comentariu_literar", `"${e.desc}" - aceasta este:`, e.element, [otherE.element, "verifica", "propoziție"], rng));
    }
    return shuffle(questions, rng).slice(0, 30);
  },

  texturi_nonliterare: (seed = 42) => {
    const rng = mulberry32(seed);
    const questions = [];
    const types = ["articol", "publicitate", "instructaj", "recenzie"];
    for (let i = 0; i < 30; i++) {
      const t = pick(types, rng);
      questions.push(createMCQ("Romanian-C8-P3", "texturi_nonliterare", `Ce tip de text este:`, t, types.filter(x => x !== t).slice(0, 3), rng));
    }
    return shuffle(questions, rng).slice(0, 30);
  },

  stil_vocabular: (seed = 42) => {
    const rng = mulberry32(seed);
    const questions = [];
    const styles = ["formal", "informal", "științific", "poetic"];
    for (let i = 0; i < 30; i++) {
      const s = pick(styles, rng);
      questions.push(createMCQ("Romanian-C8-P3", "stil_vocabular", `Stilul textului este:`, s, styles.filter(x => x !== s).slice(0, 3), rng));
    }
    return shuffle(questions, rng).slice(0, 30);
  },

  figuri_stil_typing: (seed = 42) => {
    const rng = mulberry32(seed);
    const q = [];
    for (let i = 0; i < 15; i++) {
      const f = pick(FIGURI_STIL, rng);
      q.push(createTyping("Romanian-C8-P3", "figuri_stil", `Figura de stil: "${f.desc}"`, f.figura));
    }
    return q;
  },

  text_literar_genuri_typing: (seed = 42) => {
    const rng = mulberry32(seed);
    const q = [];
    for (let i = 0; i < 15; i++) {
      const g = pick(TEXT_LITERAR_GENURI, rng);
      q.push(createTyping("Romanian-C8-P3", "text_literar_genuri", `Genul: "${g.trait}"`, g.gen));
    }
    return q;
  },

  comentariu_literar_typing: (seed = 42) => {
    const rng = mulberry32(seed);
    const q = [];
    for (let i = 0; i < 15; i++) {
      const e = pick(COMENTARIU_LITERAR_ELEM, rng);
      q.push(createTyping("Romanian-C8-P3", "comentariu_literar", `Element: "${e.desc}"`, e.element));
    }
    return q;
  },

  texturi_nonliterare_typing: (seed = 42) => {
    const rng = mulberry32(seed);
    const q = [];
    const types = ["articol", "publicitate", "instructaj"];
    for (let i = 0; i < 15; i++) {
      const t = pick(types, rng);
      q.push(createTyping("Romanian-C8-P3", "texturi_nonliterare", `Tip de text:`, t));
    }
    return q;
  },

  stil_vocabular_typing: (seed = 42) => {
    const rng = mulberry32(seed);
    const q = [];
    const styles = ["formal", "informal", "științific"];
    for (let i = 0; i < 15; i++) {
      const s = pick(styles, rng);
      q.push(createTyping("Romanian-C8-P3", "stil_vocabular", `Stilul textului:`, s));
    }
    return q;
  },
};
