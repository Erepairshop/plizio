import type { PoolTopicDef, SvgConfig } from "./types";
import type { TopicInteractive } from "@/app/astro-biologie/games/ExplorerEngine";

type Difficulty = "easy" | "medium" | "hard";

type InteractiveSpec =
  | { type: "match-pairs"; pairs: [string, string][] }
  | { type: "drag-to-bucket"; buckets: { id: string; label: string }[]; items: { text: string; bucketId: string }[] }
  | { type: "highlight-text"; tokens: string[]; correctIndices: number[] }
  | { type: "sentence-build"; fragments: string[] }
  | { type: "word-order"; words: string[]; correctOrder: number[] }
  | { type: "gap-fill"; sentence: string; choices: [string, string, string, string]; correctIndex: number };

type TopicSpec = {
  title: string;
  text: string;
  svg: SvgConfig;
  interactive: InteractiveSpec;
  instruction: string;
  hint1: string;
  hint2: string;
  quizQuestion: string;
  quizChoices: [string, string, string, string];
  quizAnswer: 0 | 1 | 2 | 3;
  difficulty: Difficulty;
};

type LangLabels = Record<string, Record<string, string>>;

type Kit = {
  pairs: [string, string][];
  buckets: { id: string; label: string }[];
  bucketItems: { text: string; bucketId: string }[];
  tokens: string[];
  tokenIndices: number[];
  fragments: string[];
  orderWords: string[];
  order: number[];
  gapSentence: string;
  gapChoices: [string, string, string, string];
  gapIndex: number;
};

function buildLabels(title: string, topics: TopicSpec[]): LangLabels {
  const ro: Record<string, string> = { explorer_title: title };
  topics.forEach((topic, i) => {
    const p = `t${i + 1}`;
    ro[`${p}_title`] = topic.title;
    ro[`${p}_text`] = topic.text;
    ro[`${p}_inst`] = topic.instruction;
    ro[`${p}_h1`] = topic.hint1;
    ro[`${p}_h2`] = topic.hint2;
    ro[`${p}_q`] = topic.quizQuestion;
    ro[`${p}_qa`] = topic.quizChoices[0];
    ro[`${p}_qb`] = topic.quizChoices[1];
    ro[`${p}_qc`] = topic.quizChoices[2];
    ro[`${p}_qd`] = topic.quizChoices[3];

    if (topic.interactive.type === "match-pairs") {
      topic.interactive.pairs.forEach(([l, r], j) => {
        ro[`${p}_l${j + 1}`] = l;
        ro[`${p}_r${j + 1}`] = r;
      });
    } else if (topic.interactive.type === "drag-to-bucket") {
      topic.interactive.buckets.forEach((b, j) => {
        ro[`${p}_b${j + 1}`] = b.label;
      });
      topic.interactive.items.forEach((it, j) => {
        ro[`${p}_i${j + 1}`] = it.text;
      });
    } else if (topic.interactive.type === "highlight-text") {
      topic.interactive.tokens.forEach((w, j) => {
        ro[`${p}_w${j + 1}`] = w;
      });
    } else if (topic.interactive.type === "sentence-build") {
      topic.interactive.fragments.forEach((f, j) => {
        ro[`${p}_f${j + 1}`] = f;
      });
    } else if (topic.interactive.type === "word-order") {
      topic.interactive.words.forEach((w, j) => {
        ro[`${p}_w${j + 1}`] = w;
      });
    } else {
      ro[`${p}_s`] = topic.interactive.sentence;
      ro[`${p}_c1`] = topic.interactive.choices[0];
      ro[`${p}_c2`] = topic.interactive.choices[1];
      ro[`${p}_c3`] = topic.interactive.choices[2];
      ro[`${p}_c4`] = topic.interactive.choices[3];
    }
  });
  return { ro };
}

function buildInteractive(prefix: string, spec: InteractiveSpec): TopicInteractive {
  const withHints = <T extends object>(interactive: T): TopicInteractive =>
    ({
      ...interactive,
      instruction: `${prefix}_inst`,
      hint1: `${prefix}_h1`,
      hint2: `${prefix}_h2`,
    } as unknown as TopicInteractive);

  switch (spec.type) {
    case "match-pairs":
      return withHints({ type: "match-pairs", pairs: spec.pairs.map((_, i) => ({ left: `${prefix}_l${i + 1}`, right: `${prefix}_r${i + 1}` })) });
    case "drag-to-bucket":
      return withHints({
        type: "drag-to-bucket",
        buckets: spec.buckets.map((b, i) => ({ id: b.id, label: `${prefix}_b${i + 1}` })),
        items: spec.items.map((it, i) => ({ text: `${prefix}_i${i + 1}`, bucketId: it.bucketId })),
      });
    case "highlight-text":
      return withHints({ type: "highlight-text", tokens: spec.tokens.map((_, i) => `${prefix}_w${i + 1}`), correctIndices: spec.correctIndices });
    case "sentence-build":
      return withHints({ type: "sentence-build", fragments: spec.fragments.map((_, i) => `${prefix}_f${i + 1}`) });
    case "word-order":
      return withHints({ type: "word-order", words: spec.words.map((_, i) => `${prefix}_w${i + 1}`), correctOrder: spec.correctOrder });
    case "gap-fill":
      return withHints({ type: "gap-fill", sentence: `${prefix}_s`, choices: [`${prefix}_c1`, `${prefix}_c2`, `${prefix}_c3`, `${prefix}_c4`], correctIndex: spec.correctIndex });
  }
}

function buildPool(topics: TopicSpec[]): PoolTopicDef[] {
  return topics.map((t, i) => {
    const p = `t${i + 1}`;
    const a = ["qa", "qb", "qc", "qd"][t.quizAnswer];
    return {
      infoTitle: `${p}_title`,
      infoText: `${p}_text`,
      svg: t.svg,
      hintKey: `${p}_h1`,
      interactive: buildInteractive(p, t.interactive),
      quiz: { question: `${p}_q`, choices: [`${p}_qa`, `${p}_qb`, `${p}_qc`, `${p}_qd`], answer: `${p}_${a}` },
      difficulty: t.difficulty,
    };
  });
}

function diff(i: number): Difficulty {
  if (i < 5) return "easy";
  if (i < 10) return "medium";
  return "hard";
}

function pickInteractive(i: number, kit: Kit): InteractiveSpec {
  const m = i % 6;
  if (m === 0) return { type: "match-pairs", pairs: kit.pairs };
  if (m === 1) return { type: "drag-to-bucket", buckets: kit.buckets, items: kit.bucketItems };
  if (m === 2) return { type: "highlight-text", tokens: kit.tokens, correctIndices: kit.tokenIndices };
  if (m === 3) return { type: "sentence-build", fragments: kit.fragments };
  if (m === 4) return { type: "word-order", words: kit.orderWords, correctOrder: kit.order };
  return { type: "gap-fill", sentence: kit.gapSentence, choices: kit.gapChoices, correctIndex: kit.gapIndex };
}

function buildTopics(island: string, titles: string[], kit: Kit, color: string): TopicSpec[] {
  return titles.map((title, i) => ({
    title,
    text: `Consolidăm tema „${title}” la nivel de evaluare pentru clasa a VIII-a.`,
    svg: { type: "word-display", word: title, color, subtitle: island },
    interactive: pickInteractive(i, kit),
    instruction: "Rezolvă activitatea interactivă și apoi itemul-grilă.",
    hint1: "Identifică noțiunea centrală din titlu.",
    hint2: "Elimină variantele care nu respectă norma școlară.",
    quizQuestion: `Noțiunea „${title}” aparține domeniului:`,
    quizChoices: [island, "Matematică", "Fizică", "Biologie"],
    quizAnswer: 0,
    difficulty: diff(i),
  }));
}

function buildTheme(title: string, topics: TopicSpec[]) {
  return { labels: buildLabels(title, topics), pool: buildPool(topics) };
}

const MORFO8_TITLES = [
  "Părți de vorbire flexibile", "Substantiv comun și propriu", "Articol hotărât și nehotărât", "Pronume personale", "Numeral cardinal și ordinal",
  "Cazurile substantivului", "Adjectiv variabil și invariabil", "Grade de comparație", "Moduri personale ale verbului", "Moduri nepersonale",
  "Diateze verbale", "Pronume relative", "Acordul numeralului", "Analiza morfologică completă", "Corectarea erorilor morfologice",
];

const SINT8_TITLES = [
  "Subiect și predicat", "Atribut și complement", "Propoziție simplă și dezvoltată", "Coordonare în frază", "Subordonata atributivă",
  "Subordonata completivă directă", "Subordonata de timp", "Subordonata de cauză", "Subordonata de scop", "Punctuația frazei",
  "Transformări sintactice", "Ambiguitate sintactică", "Ierarhia propozițiilor", "Corectarea erorilor de sintaxă", "Analiză sintactică integrată",
];

const ORT8_TITLES = [
  "Diacritice obligatorii", "Î și â", "M înainte de b/p", "Scrierea cu cratimă", "Majuscula la nume proprii",
  "Virgula în incidente", "Două puncte și dialog", "Omofone gramaticale", "Ortografia împrumuturilor", "Punct și virgulă",
  "Rescriere cu diacritice", "Ortografie contextuală avansată", "Normă și uz", "Rescriere ortografică integrală", "Mini-simulare ortografie",
];

const ARG8_TITLES = [
  "Structura textului argumentativ", "Teză și opinie", "Argument și exemplu", "Conectori argumentativi", "Concluzia",
  "Teză explicită și implicită", "Calitatea argumentului", "Contraargument și refutare", "Ordinea logică a ideilor", "Registrul formal",
  "Sofisme frecvente", "Rescriere argumentativă concisă", "Evaluare critică de paragraf", "Mini-simulare argumentare", "Verificare finală argumentativă",
];

const FIG8_TITLES = [
  "Comparația", "Epitetul", "Personificarea", "Metafora", "Repetiția",
  "Enumerația", "Antiteza", "Hiperbola", "Inversiunea", "Sinestezia",
  "Simbolul", "Aliterația", "Analiză stilistică mixtă", "Funcția expresivă", "Mini-simulare figuri de stil",
];

const COMP8_TITLES = [
  "Planul compunerii", "Paragraful coerent", "Conectori de organizare", "Compunerea narativă", "Compunerea descriptivă",
  "Titlul potrivit", "Evitarea repetițiilor", "Introducerea atractivă", "Concluzia eficientă", "Coerența dintre paragrafe",
  "Registrul formal la examen", "Revizuirea finală", "Mini-simulare redactare", "Autoevaluarea compunerii", "Compunere pentru evaluare",
];

const RECAP8_TITLES = [
  "Recapitulare morfologie", "Recapitulare sintaxă", "Recapitulare ortografie", "Recapitulare argumentare", "Recapitulare figuri de stil",
  "Recap subordonate", "Recap omofone și cratimă", "Recap structură compunere", "Recap identificare mixtă", "Recap item integrat",
  "Recap analiză integrată", "Recap corectare erori", "Recap frază complexă", "Recap argumentare completă", "Strategie de examen",
];

const MORFO8_KIT: Kit = {
  pairs: [["substantiv", "numește"], ["verb", "acțiune"], ["adjectiv", "însușire"], ["pronume", "înlocuiește nume"]],
  buckets: [{ id: "flex", label: "flexibile" }, { id: "neflex", label: "neflexibile" }],
  bucketItems: [{ text: "substantiv", bucketId: "flex" }, { text: "verb", bucketId: "flex" }, { text: "adjectiv", bucketId: "flex" }, { text: "adverb", bucketId: "neflex" }, { text: "prepoziție", bucketId: "neflex" }, { text: "conjuncție", bucketId: "neflex" }],
  tokens: ["substantiv", "verb", "adjectiv", "adverb", "pronume", "interjecție"],
  tokenIndices: [0, 1, 2, 4],
  fragments: ["Identific partea de vorbire", "stabilesc categoria", "verific acordul", "conchid"],
  orderWords: ["parte de vorbire", "categorie", "valoare", "concluzie"],
  order: [0, 1, 2, 3],
  gapSentence: "Noi ___ corect exercițiul.",
  gapChoices: ["rezolvăm", "rezolvă", "rezolvi", "rezolva"],
  gapIndex: 0,
};

const SINT8_KIT: Kit = {
  pairs: [["subiect", "cine?"], ["predicat", "ce face?"], ["atribut", "determină substantiv"], ["complement", "determină verb"]],
  buckets: [{ id: "princ", label: "principală" }, { id: "sub", label: "subordonată" }],
  bucketItems: [{ text: "propoziție de bază", bucketId: "princ" }, { text: "independentă", bucketId: "princ" }, { text: "atributivă", bucketId: "sub" }, { text: "completivă directă", bucketId: "sub" }, { text: "de timp", bucketId: "sub" }, { text: "de scop", bucketId: "sub" }],
  tokens: ["și", "dar", "ori", "că", "când", "fiindcă"],
  tokenIndices: [0, 1, 2, 3, 4, 5],
  fragments: ["Când ajung", ",", "te sun", "."],
  orderWords: ["identific predicatele", "separ propozițiile", "stabilesc raporturile", "numesc tipurile"],
  order: [0, 1, 2, 3],
  gapSentence: "Știu ___ vei reuși.",
  gapChoices: ["că", "deși", "fiindcă", "ca să"],
  gapIndex: 0,
};

const ORT8_KIT: Kit = {
  pairs: [["s-a", "cratimă"], ["învață", "diacritice"], ["câmp", "m înainte de p"], ["Mara", "majusculă"]],
  buckets: [{ id: "corect", label: "corect" }, { id: "gresit", label: "greșit" }],
  bucketItems: [{ text: "s-a dus", bucketId: "corect" }, { text: "sau dus", bucketId: "gresit" }, { text: "învață", bucketId: "corect" }, { text: "invata", bucketId: "gresit" }, { text: "câmp", bucketId: "corect" }, { text: "cîmp", bucketId: "gresit" }],
  tokens: ["școală", "scoala", "țară", "tara", "română", "romina"],
  tokenIndices: [0, 2, 4],
  fragments: ["Ieri", "ne-am", "întâlnit", "în", "Cluj-Napoca", "."],
  orderWords: ["diacritice", "cratimă", "majusculă", "punctuație"],
  order: [0, 1, 2, 3],
  gapSentence: "El ___ explicat tema.",
  gapChoices: ["ia", "i-a", "i a", "ia-"],
  gapIndex: 1,
};

const ARG8_KIT: Kit = {
  pairs: [["teză", "opinie"], ["argument", "motiv"], ["exemplu", "dovadă"], ["concluzie", "încheiere"]],
  buckets: [{ id: "bun", label: "valid" }, { id: "slab", label: "nevalid" }],
  bucketItems: [{ text: "opinie clară", bucketId: "bun" }, { text: "argument relevant", bucketId: "bun" }, { text: "exemplu concret", bucketId: "bun" }, { text: "generalizare fără dovadă", bucketId: "slab" }, { text: "atac la persoană", bucketId: "slab" }, { text: "fără concluzie", bucketId: "slab" }],
  tokens: ["în primul rând", "de exemplu", "în plus", "în concluzie", "poate", "na"],
  tokenIndices: [0, 1, 2, 3],
  fragments: ["Formulez teza", "aduc argument", "dau exemplu", "închei cu concluzie"],
  orderWords: ["teză", "argument", "exemplu", "concluzie"],
  order: [0, 1, 2, 3],
  gapSentence: "___, ideea este susținută logic.",
  gapChoices: ["În concluzie", "Deși", "Poate", "Când"],
  gapIndex: 0,
};

const FIG8_KIT: Kit = {
  pairs: [["comparație", "cu „ca”"], ["metaforă", "asemănare implicită"], ["personificare", "trăsături umane"], ["epitet", "determinant expresiv"]],
  buckets: [{ id: "figur", label: "figură" }, { id: "literal", label: "literal" }],
  bucketItems: [{ text: "alb ca neaua", bucketId: "figur" }, { text: "ochi de foc", bucketId: "figur" }, { text: "vântul șoptește", bucketId: "figur" }, { text: "plouă", bucketId: "literal" }, { text: "copacul crește", bucketId: "literal" }, { text: "apa curge", bucketId: "literal" }],
  tokens: ["ca", "precum", "marea de stele", "vântul șoptește", "copac înalt", "foarte frumos"],
  tokenIndices: [0, 1, 2, 3],
  fragments: ["Luna", "zâmbește", "ca", "o", "lampă", "."],
  orderWords: ["indiciu lexical", "numesc figura", "explic efectul", "verific contextul"],
  order: [0, 1, 2, 3],
  gapSentence: "„Marea de oameni” este ___ .",
  gapChoices: ["metaforă", "comparație", "epitet", "antiteză"],
  gapIndex: 0,
};

const COMP8_KIT: Kit = {
  pairs: [["introducere", "prezintă tema"], ["cuprins", "dezvoltă ideile"], ["încheiere", "finalizează"], ["paragraf", "organizează logic"]],
  buckets: [{ id: "formal", label: "formal" }, { id: "informal", label: "informal" }],
  bucketItems: [{ text: "consider că", bucketId: "formal" }, { text: "în concluzie", bucketId: "formal" }, { text: "de exemplu", bucketId: "formal" }, { text: "super tare", bucketId: "informal" }, { text: "chestia asta", bucketId: "informal" }, { text: "na", bucketId: "informal" }],
  tokens: ["în primul rând", "în plus", "de exemplu", "în concluzie", "brusc", "fără legătură"],
  tokenIndices: [0, 1, 2, 3],
  fragments: ["Planific", "redactez", "revizuiesc", "finalizez"],
  orderWords: ["planificare", "redactare", "revizuire", "variantă finală"],
  order: [0, 1, 2, 3],
  gapSentence: "___, această experiență a fost utilă.",
  gapChoices: ["În concluzie", "Totuși", "Dacă", "Poate"],
  gapIndex: 0,
};

const RECAP8_KIT: Kit = {
  pairs: [["substantiv", "morfologie"], ["predicat", "sintaxă"], ["cratimă", "ortografie"], ["metaforă", "stilistică"]],
  buckets: [{ id: "corect", label: "încadrare corectă" }, { id: "gresit", label: "încadrare greșită" }],
  bucketItems: [{ text: "verb - morfologie", bucketId: "corect" }, { text: "subiect - sintaxă", bucketId: "corect" }, { text: "diacritice - ortografie", bucketId: "corect" }, { text: "metaforă - ortografie", bucketId: "gresit" }, { text: "predicat - morfologie", bucketId: "gresit" }, { text: "virgulă - figură de stil", bucketId: "gresit" }],
  tokens: ["teză", "argument", "subiect", "predicat", "s-a", "metaforă"],
  tokenIndices: [0, 1, 2, 3, 4, 5],
  fragments: ["citesc cerința", "identific noțiunea", "rezolv", "verific"],
  orderWords: ["citire atentă", "analiză", "rezolvare", "verificare"],
  order: [0, 1, 2, 3],
  gapSentence: "Înainte de predare, ___ răspunsul.",
  gapChoices: ["verific", "ghicesc", "omit", "rescriu la întâmplare"],
  gapIndex: 0,
};

const MORFO8 = buildTheme("MORFO8 · Morfologie", buildTopics("Morfologie", MORFO8_TITLES, MORFO8_KIT, "#7C3AED"));
const SINT8 = buildTheme("SINT8 · Sintaxă", buildTopics("Sintaxă", SINT8_TITLES, SINT8_KIT, "#2563EB"));
const ORT8 = buildTheme("ORT8 · Ortografie", buildTopics("Ortografie", ORT8_TITLES, ORT8_KIT, "#DC2626"));
const ARG8 = buildTheme("ARG8 · Argumentare", buildTopics("Argumentare", ARG8_TITLES, ARG8_KIT, "#C026D3"));
const FIG8 = buildTheme("FIG8 · Figuri de stil", buildTopics("Figuri de stil", FIG8_TITLES, FIG8_KIT, "#BE123C"));
const COMP8 = buildTheme("COMP8 · Compunere", buildTopics("Compunere", COMP8_TITLES, COMP8_KIT, "#047857"));
const RECAP8 = buildTheme("RECAP8 · Recapitulare", buildTopics("Recapitulare", RECAP8_TITLES, RECAP8_KIT, "#0891B2"));

export const MORFO8_LABELS = MORFO8.labels;
export const MORFO8_POOL = MORFO8.pool;

export const SINT8_LABELS = SINT8.labels;
export const SINT8_POOL = SINT8.pool;

export const ORT8_LABELS = ORT8.labels;
export const ORT8_POOL = ORT8.pool;

export const ARG8_LABELS = ARG8.labels;
export const ARG8_POOL = ARG8.pool;

export const FIG8_LABELS = FIG8.labels;
export const FIG8_POOL = FIG8.pool;

export const COMP8_LABELS = COMP8.labels;
export const COMP8_POOL = COMP8.pool;

export const RECAP8_LABELS = RECAP8.labels;
export const RECAP8_POOL = RECAP8.pool;

// Kompatibilitás a meglévő C8 importokhoz.
export const TEXT8L_LABELS = FIG8_LABELS;
export const TEXT8L_POOL = FIG8_POOL;
export const TEXT8N_LABELS = ARG8_LABELS;
export const TEXT8N_POOL = ARG8_POOL;
