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

type RoLabels = { ro: Record<string, string> };

function buildLabels(title: string, topics: TopicSpec[]): RoLabels {
  const base: Record<string, string> = { explorer_title: title };

  topics.forEach((topic, index) => {
    const p = `t${index + 1}`;
    base[`${p}_title`] = topic.title;
    base[`${p}_text`] = topic.text;
    base[`${p}_inst`] = topic.instruction;
    base[`${p}_h1`] = topic.hint1;
    base[`${p}_h2`] = topic.hint2;
    base[`${p}_q`] = topic.quizQuestion;
    base[`${p}_qa`] = topic.quizChoices[0];
    base[`${p}_qb`] = topic.quizChoices[1];
    base[`${p}_qc`] = topic.quizChoices[2];
    base[`${p}_qd`] = topic.quizChoices[3];

    if (topic.interactive.type === "match-pairs") {
      topic.interactive.pairs.forEach(([l, r], i) => {
        base[`${p}_l${i + 1}`] = l;
        base[`${p}_r${i + 1}`] = r;
      });
    } else if (topic.interactive.type === "drag-to-bucket") {
      topic.interactive.buckets.forEach((b, i) => {
        base[`${p}_b${i + 1}`] = b.label;
      });
      topic.interactive.items.forEach((it, i) => {
        base[`${p}_i${i + 1}`] = it.text;
      });
    } else if (topic.interactive.type === "highlight-text") {
      topic.interactive.tokens.forEach((t, i) => {
        base[`${p}_w${i + 1}`] = t;
      });
    } else if (topic.interactive.type === "sentence-build") {
      topic.interactive.fragments.forEach((f, i) => {
        base[`${p}_f${i + 1}`] = f;
      });
    } else if (topic.interactive.type === "word-order") {
      topic.interactive.words.forEach((w, i) => {
        base[`${p}_w${i + 1}`] = w;
      });
    } else {
      base[`${p}_s`] = topic.interactive.sentence;
      base[`${p}_c1`] = topic.interactive.choices[0];
      base[`${p}_c2`] = topic.interactive.choices[1];
      base[`${p}_c3`] = topic.interactive.choices[2];
      base[`${p}_c4`] = topic.interactive.choices[3];
    }
  });

  return { ro: base };
}

function buildInteractive(prefix: string, spec: InteractiveSpec): TopicInteractive {
  const withHints = <T extends object>(interactive: T): TopicInteractive =>
    ({ ...interactive, instruction: `${prefix}_inst`, hint1: `${prefix}_h1`, hint2: `${prefix}_h2` } as unknown as TopicInteractive);

  switch (spec.type) {
    case "match-pairs":
      return withHints({
        type: "match-pairs",
        pairs: spec.pairs.map((_, i) => ({ left: `${prefix}_l${i + 1}`, right: `${prefix}_r${i + 1}` })),
      });
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
  return topics.map((topic, index) => {
    const p = `t${index + 1}`;
    const answer = ["qa", "qb", "qc", "qd"][topic.quizAnswer];
    return {
      infoTitle: `${p}_title`,
      infoText: `${p}_text`,
      svg: topic.svg,
      hintKey: `${p}_h1`,
      interactive: buildInteractive(p, topic.interactive),
      quiz: { question: `${p}_q`, choices: [`${p}_qa`, `${p}_qb`, `${p}_qc`, `${p}_qd`], answer: `${p}_${answer}` },
      difficulty: topic.difficulty,
    };
  });
}

function makeTheme(title: string, topics: TopicSpec[]) {
  return { labels: buildLabels(title, topics), pool: buildPool(topics) };
}

function difficultyByIndex(i: number): Difficulty {
  if (i < 5) return "easy";
  if (i < 10) return "medium";
  return "hard";
}

function makeTopics(domain: string, concepts: string[]): TopicSpec[] {
  return concepts.map((concept, i) => {
    const difficulty = difficultyByIndex(i);
    const variant = i % 6;

    const svg: SvgConfig =
      variant === 0
        ? { type: "word-display", word: concept, color: "#7C3AED", subtitle: domain }
        : variant === 1
          ? { type: "text-bubbles", items: [{ text: concept, color: "#1D4ED8", bg: "#DBEAFE" }, { text: "definiție", color: "#166534", bg: "#DCFCE7" }] }
          : variant === 2
            ? { type: "sentence-display", words: [domain, "-", concept], color: "#B45309" }
            : variant === 3
              ? { type: "icon-grid", items: [{ emoji: "📘", label: domain }, { emoji: "🧩", label: concept }, { emoji: "✅", label: difficulty }] }
              : variant === 4
                ? { type: "rhyme-pair", word1: domain, word2: concept, color: "#BE185D" }
                : { type: "word-display", word: `${domain}: ${concept}`, color: "#0F766E" };

    const interactive: InteractiveSpec =
      variant === 0
        ? {
            type: "match-pairs",
            pairs: [[concept, "noțiune centrală"], [domain, "capitol"], [difficulty, "nivel"], ["exemplu", "aplicare"]],
          }
        : variant === 1
          ? {
              type: "drag-to-bucket",
              buckets: [{ id: "a", label: "corect" }, { id: "b", label: "aproape" }],
              items: [
                { text: `${concept} (definiție)`, bucketId: "a" },
                { text: `${concept} (exemplu)`, bucketId: "a" },
                { text: `${concept} (confuzie)`, bucketId: "b" },
                { text: `${concept} (eroare)`, bucketId: "b" },
              ],
            }
          : variant === 2
            ? {
                type: "gap-fill",
                sentence: `În capitolul ${domain}, noțiunea ___ este importantă.`,
                choices: [concept, "rimă fixă", "valoare numerică", "nume propriu"],
                correctIndex: 0,
              }
            : variant === 3
              ? {
                  type: "highlight-text",
                  tokens: [concept, domain, "detaliu", "exemplu", "eroare"],
                  correctIndices: [0, 1],
                }
              : variant === 4
                ? {
                    type: "sentence-build",
                    fragments: ["Noțiunea", concept, "este relevantă în", domain],
                  }
                : {
                    type: "word-order",
                    words: ["identifică noțiunea", "alege exemplul", "explică rolul", "formulează concluzia"],
                    correctOrder: [0, 1, 2, 3],
                  };

    return {
      title: `${concept}`,
      text: `${domain}: exersăm noțiunea „${concept}” la nivel ${difficulty}.`,
      svg,
      interactive,
      instruction: "Rezolvă activitatea conform cerinței.",
      hint1: "Citește cu atenție noțiunea-cheie.",
      hint2: "Alege varianta care respectă definiția din lecție.",
      quizQuestion: `În ${domain}, ce noțiune este în focus aici?`,
      quizChoices: [concept, `${domain} general`, "noțiune secundară", "variantă greșită"],
      quizAnswer: 0,
      difficulty,
    };
  });
}

const FIG7_TOPICS = makeTopics("Figuri de stil", [
  "Comparația", "Epitetul", "Metafora", "Personificarea", "Hiperbola",
  "Antiteza", "Enumerația", "Repetiția", "Aliterația", "Oxymoronul",
  "Litota", "Simbolul", "Inversiunea", "Interogația retorică", "Exclamația retorică",
]);

const COMT7_TOPICS = makeTopics("Comentariu literar", [
  "Introducerea", "Teza", "Argumentul", "Exemplul textual", "Concluzia",
  "Tema", "Mesajul", "Caracterizarea", "Conectorii logici", "Planul ideilor",
  "Coerența", "Adecvarea stilului", "Interpretarea", "Raportarea la text", "Sinteza finală",
]);

const MORFO7_TOPICS = makeTopics("Morfologie", [
  "Substantivul", "Adjectivul", "Pronumele", "Verbul", "Numeralul",
  "Articolul", "Cazurile", "Modurile verbale", "Timpurile verbale", "Acordul",
  "Flexiunea", "Neflexibilele", "Valori morfologice", "Analiza gramaticală", "Funcții în context",
]);

const ORT7_TOPICS = makeTopics("Ortografie", [
  "s-a / sa", "s-au / sau", "l-a / la", "i-a / ia", "ne-a / nea",
  "Diacritice", "Â și Î", "Cratima", "m înainte de b/p", "Despărțirea în silabe",
  "Majuscula", "Semnele de punctuație", "Scrierea corectă a numelor", "Ortograme în context", "Autocorectarea",
]);

const EPIC7_TOPICS = makeTopics("Genul epic", [
  "Naratorul", "Personajul", "Acțiunea", "Conflictul", "Deznodământul",
  "Timpul acțiunii", "Spațiul acțiunii", "Moduri de expunere", "Perspectiva narativă", "Secvența epică",
  "Eroul", "Antagonistul", "Relațiile dintre personaje", "Semnificația titlului", "Mesajul epic",
]);

const LIRIC7_TOPICS = makeTopics("Genul liric", [
  "Eul liric", "Sentimentul dominant", "Tema lirică", "Imaginea artistică", "Epitetul liric",
  "Metafora lirică", "Rima", "Ritmul", "Măsura", "Strofa",
  "Motive poetice", "Tonul liric", "Simbolul poetic", "Mesajul liric", "Interpretarea poeziei",
]);

const RECAP7_TOPICS = makeTopics("Recapitulare", [
  "Noțiuni de stilistică", "Noțiuni de comentariu", "Noțiuni de morfologie", "Noțiuni de ortografie", "Noțiuni de epic",
  "Noțiuni de liric", "Item integrat", "Analiză mixtă", "Corelare termeni", "Aplicare reguli",
  "Argumentare scurtă", "Identificare rapidă", "Clasificare finală", "Consolidare", "Evaluare finală",
]);

const SINT7P_TOPICS: TopicSpec[] = [
  {
    title: "Propoziția simplă",
    text: "Recunoaștem subiectul și predicatul.",
    svg: { type: "sentence-display", words: ["Mara", "citește", "."], highlightIndices: [0, 1], color: "#8B5CF6" },
    interactive: { type: "match-pairs", pairs: [["subiect", "cine?"], ["predicat", "ce face?"], ["propoziție", "enunț complet"], ["verb", "nucleu predicativ"]] },
    instruction: "Potrivește termenul cu explicația.",
    hint1: "Subiectul răspunde la „cine?”.",
    hint2: "Predicatul arată acțiunea.",
    quizQuestion: "Ce este „citește” în propoziție?",
    quizChoices: ["predicat", "subiect", "atribut", "complement"],
    quizAnswer: 0,
    difficulty: "easy",
  },
];

const SINT7F_TOPICS: TopicSpec[] = [
  {
    title: "Fraza și conectorii",
    text: "Separăm coordonarea de subordonare.",
    svg: { type: "text-bubbles", items: [{ text: "și", color: "#1D4ED8", bg: "#DBEAFE" }, { text: "pentru că", color: "#166534", bg: "#DCFCE7" }] },
    interactive: {
      type: "drag-to-bucket",
      buckets: [{ id: "coord", label: "coordonare" }, { id: "sub", label: "subordonare" }],
      items: [
        { text: "și", bucketId: "coord" },
        { text: "dar", bucketId: "coord" },
        { text: "pentru că", bucketId: "sub" },
        { text: "ca să", bucketId: "sub" },
      ],
    },
    instruction: "Grupează conectorii corect.",
    hint1: "Coordonarea unește unități egale.",
    hint2: "Subordonarea exprimă dependență.",
    quizQuestion: "Care conector introduce de obicei o cauză?",
    quizChoices: ["pentru că", "și", "ori", "iar"],
    quizAnswer: 0,
    difficulty: "medium",
  },
];

const SINT7P = makeTheme("Sintaxa propoziției", SINT7P_TOPICS);
const SINT7F = makeTheme("Sintaxa frazei", SINT7F_TOPICS);
const FIG7 = makeTheme("Figuri de stil", FIG7_TOPICS);
const COMT7 = makeTheme("Comentariu literar", COMT7_TOPICS);
const MORFO7 = makeTheme("Morfologie", MORFO7_TOPICS);
const ORT7 = makeTheme("Ortografie", ORT7_TOPICS);
const EPIC7 = makeTheme("Genul epic", EPIC7_TOPICS);
const LIRIC7 = makeTheme("Genul liric", LIRIC7_TOPICS);
const RECAP7 = makeTheme("Recapitulare", RECAP7_TOPICS);

export const SINT7P_LABELS = SINT7P.labels;
export const SINT7P_POOL = SINT7P.pool;

export const SINT7F_LABELS = SINT7F.labels;
export const SINT7F_POOL = SINT7F.pool;

export const FIG7_LABELS = FIG7.labels;
export const FIG7_POOL = FIG7.pool;

export const COMT7_LABELS = COMT7.labels;
export const COMT7_POOL = COMT7.pool;

export const MORFO7_LABELS = MORFO7.labels;
export const MORFO7_POOL = MORFO7.pool;

export const ORT7_LABELS = ORT7.labels;
export const ORT7_POOL = ORT7.pool;

export const EPIC7_LABELS = EPIC7.labels;
export const EPIC7_POOL = EPIC7.pool;

export const LIRIC7_LABELS = LIRIC7.labels;
export const LIRIC7_POOL = LIRIC7.pool;

export const RECAP7_LABELS = RECAP7.labels;
export const RECAP7_POOL = RECAP7.pool;
