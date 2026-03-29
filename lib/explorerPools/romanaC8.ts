// lib/explorerPools/romanaC8.ts — conținut AstroRomână clasa a VIII-a
import type { PoolTopicDef, SvgConfig } from "./types";

type Difficulty = "easy" | "medium" | "hard";

type InteractiveSpec =
  | { type: "match-pairs"; pairs: [string, string][] }
  | { type: "drag-to-bucket"; buckets: { id: string; label: string }[]; items: { text: string; bucketId: string }[] };

type ThemeSpec = {
  title: string;
  text: string;
  svg: SvgConfig;
  interactive: InteractiveSpec;
  instruction: string;
  hint1: string;
  hint2: string;
  question: string;
  choices: [string, string, string, string];
  answer: 0 | 1 | 2 | 3;
  difficulty: Difficulty;
};

type LangLabels = Record<string, Record<string, string>>;

function cloneLabels(base: Record<string, string>): LangLabels {
  return {
    ro: { ...base },
    en: { ...base },
    hu: { ...base },
    de: { ...base },
  };
}

function buildLabels(spec: ThemeSpec): LangLabels {
  const base: Record<string, string> = {
    explorer_title: spec.title,
    t1_title: spec.title,
    t1_text: spec.text,
    t1_inst: spec.instruction,
    t1_h1: spec.hint1,
    t1_h2: spec.hint2,
    t1_q: spec.question,
    t1_qa: spec.choices[0],
    t1_qb: spec.choices[1],
    t1_qc: spec.choices[2],
    t1_qd: spec.choices[3],
  };

  if (spec.interactive.type === "match-pairs") {
    spec.interactive.pairs.forEach(([left, right], index) => {
      base[`t1_l${index + 1}`] = left;
      base[`t1_r${index + 1}`] = right;
    });
  } else if (spec.interactive.type === "drag-to-bucket") {
    spec.interactive.buckets.forEach((bucket, index) => {
      base[`t1_b${index + 1}`] = bucket.label;
    });
    spec.interactive.items.forEach((item, index) => {
      base[`t1_i${index + 1}`] = item.text;
    });
  }

  return cloneLabels(base);
}

function buildPool(spec: ThemeSpec): PoolTopicDef[] {
  const answerKey = ["qa", "qb", "qc", "qd"][spec.answer];

  return [
    {
      infoTitle: "t1_title",
      infoText: "t1_text",
      svg: spec.svg,
      hintKey: "t1_h1",
      interactive:
        spec.interactive.type === "match-pairs"
          ? {
              type: "match-pairs",
              pairs: spec.interactive.pairs.map(([left, right], index) => ({
                left: `t1_l${index + 1}`,
                right: `t1_r${index + 1}`,
              })),
              instruction: "t1_inst",
              hint1: "t1_h1",
              hint2: "t1_h2",
            }
          : {
              type: "drag-to-bucket",
              buckets: spec.interactive.buckets.map((bucket, index) => ({
                id: bucket.id,
                label: `t1_b${index + 1}`,
              })),
              items: spec.interactive.items.map((item, index) => ({
                text: `t1_i${index + 1}`,
                bucketId: item.bucketId,
              })),
              instruction: "t1_inst",
              hint1: "t1_h1",
              hint2: "t1_h2",
            },
      quiz: {
        question: "t1_q",
        choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"],
        answer: `t1_${answerKey}`,
      },
      difficulty: spec.difficulty,
    },
  ];
}

function makeTheme(spec: ThemeSpec) {
  return {
    labels: buildLabels(spec),
    pool: buildPool(spec),
  };
}

const MORFO8 = makeTheme({
  title: "Morfologia: părțile de vorbire",
  text: "Pornim de la cuvintele de bază și le așezăm după rol: substantive, verbe și adjective.",
  svg: {
    type: "icon-grid",
    items: [
      { emoji: "👧", label: "substantiv" },
      { emoji: "🏃", label: "verb" },
      { emoji: "🌟", label: "adjectiv" },
      { emoji: "👥", label: "pronume" },
    ],
    bg: "#F5F3FF",
  },
  interactive: {
    type: "drag-to-bucket",
    buckets: [
      { id: "substantive", label: "substantive" },
      { id: "verbe", label: "verbe" },
      { id: "adjective", label: "adjective" },
    ],
    items: [
      { text: "copil", bucketId: "substantive" },
      { text: "floare", bucketId: "substantive" },
      { text: "aleargă", bucketId: "verbe" },
      { text: "citește", bucketId: "verbe" },
      { text: "frumos", bucketId: "adjective" },
      { text: "verde", bucketId: "adjective" },
    ],
  },
  instruction: "Așază cuvântul în grupa potrivită.",
  hint1: "Întreabă-te dacă numește, arată o acțiune sau o însușire.",
  hint2: "Substantivele numesc ființe ori lucruri, verbele arată acțiunea.",
  question: "Ce studiază morfologia?",
  choices: ["părțile de vorbire", "semnele de punctuație", "ordinea ideilor", "figurile de stil"],
  answer: 0,
  difficulty: "easy",
});

const SINT8 = makeTheme({
  title: "Sintaxa: propoziția și părțile ei",
  text: "Analizăm propoziția simplă prin subiect și predicat, apoi observăm cum se leagă părțile între ele.",
  svg: {
    type: "sentence-display",
    words: ["Maria", "citește", "o", "carte"],
    highlightIndices: [0, 1],
    color: "#7C3AED",
  },
  interactive: {
    type: "match-pairs",
    pairs: [
      ["subiect", "despre cine se vorbește"],
      ["predicat", "ce spune propoziția despre subiect"],
      ["propoziție simplă", "are un singur predicat"],
    ],
  },
  instruction: "Potrivește termenul cu explicația lui.",
  hint1: "Subiectul spune despre cine este vorba.",
  hint2: "Predicatul arată ce se spune despre subiect.",
  question: "Ce este predicatul?",
  choices: ["partea care spune ceva despre subiect", "numele unei persoane", "cuvântul care arată o însușire", "semnul de punctuație"],
  answer: 0,
  difficulty: "easy",
});

const ORT8 = makeTheme({
  title: "Ortografia: scrierea corectă",
  text: "Fixăm scrierea cu m înainte de b/p, folosirea lui î și â și legarea corectă a cuvintelor.",
  svg: {
    type: "text-bubbles",
    items: [
      { text: "câmp", color: "#2563EB", bg: "#DBEAFE" },
      { text: "înger", color: "#059669", bg: "#D1FAE5" },
      { text: "s-a", color: "#D97706", bg: "#FEF3C7" },
      { text: "cântec", color: "#7C3AED", bg: "#EDE9FE" },
    ],
  },
  interactive: {
    type: "match-pairs",
    pairs: [
      ["m înainte de b/p", "câmp"],
      ["î la începutul cuvântului", "înger"],
      ["cratimă", "s-a"],
    ],
  },
  instruction: "Leagă regula de exemplul potrivit.",
  hint1: "Gândește-te la scrierea corectă a sunetului și a legăturii dintre cuvinte.",
  hint2: "Exemplele bune păstrează sensul și ortografia corectă.",
  question: "Cum se scrie corect?",
  choices: ["câmp", "cânp", "cîmp", "câmb"],
  answer: 0,
  difficulty: "medium",
});

const TEXT8L = makeTheme({
  title: "Textul literar",
  text: "În textul literar observăm autorul, naratorul, personajele, timpul, spațiul, tema și mesajul.",
  svg: {
    type: "icon-grid",
    items: [
      { emoji: "📖", label: "text" },
      { emoji: "🎭", label: "personaje" },
      { emoji: "🪶", label: "autor" },
      { emoji: "✨", label: "imagini" },
    ],
    bg: "#FFF7ED",
  },
  interactive: {
    type: "match-pairs",
    pairs: [
      ["narator", "spune povestea"],
      ["personaj", "participă la acțiune"],
      ["tema", "ideea centrală"],
    ],
  },
  instruction: "Potrivește elementul literar cu rolul lui.",
  hint1: "Naratorul povestește, personajul trăiește acțiunea.",
  hint2: "Tema este ideea centrală a textului.",
  question: "Ce face naratorul?",
  choices: ["spune povestea", "scrie titlul", "numără silabele", "construiește argumente"],
  answer: 0,
  difficulty: "medium",
});

const TEXT8N = makeTheme({
  title: "Textul nonliterar",
  text: "Aici recunoaștem texte care transmit informații, dau indicații sau încearcă să convingă.",
  svg: {
    type: "text-bubbles",
    items: [
      { text: "știre", color: "#0F766E", bg: "#CCFBF1" },
      { text: "instrucțiuni", color: "#B45309", bg: "#FEF3C7" },
      { text: "reclamă", color: "#BE123C", bg: "#FFE4E6" },
      { text: "afiș", color: "#2563EB", bg: "#DBEAFE" },
    ],
  },
  interactive: {
    type: "drag-to-bucket",
    buckets: [
      { id: "informeaza", label: "informează" },
      { id: "explica", label: "explică" },
      { id: "convinge", label: "convinge" },
    ],
    items: [
      { text: "știre", bucketId: "informeaza" },
      { text: "articol", bucketId: "informeaza" },
      { text: "instrucțiuni", bucketId: "explica" },
      { text: "ghid", bucketId: "explica" },
      { text: "reclamă", bucketId: "convinge" },
      { text: "afiș", bucketId: "convinge" },
    ],
  },
  instruction: "Așază fiecare text după scopul lui.",
  hint1: "Gândește-te dacă textul oferă informații, explicații sau convinge.",
  hint2: "Textele nonliterare servesc unui scop practic.",
  question: "Care este un text nonliterar?",
  choices: ["știre", "basm", "poezie", "legendă"],
  answer: 0,
  difficulty: "medium",
});

const ARG8 = makeTheme({
  title: "Textul argumentativ",
  text: "În textul argumentativ spunem o opinie, o susținem cu argumente și încheiem cu o concluzie.",
  svg: {
    type: "sentence-display",
    words: ["Cred", "că", "lectura", "este", "utilă"],
    highlightIndices: [0, 1, 2, 3, 4],
    color: "#C026D3",
  },
  interactive: {
    type: "match-pairs",
    pairs: [
      ["opinie", "ce cred"],
      ["argument", "de ce cred"],
      ["concluzie", "încheierea textului"],
    ],
  },
  instruction: "Leagă noțiunea de explicația ei.",
  hint1: "Opinia arată poziția, argumentul o sprijină.",
  hint2: "Concluzia închide textul argumentativ.",
  question: "Ce susține o opinie?",
  choices: ["argumentul", "tema", "naratorul", "cratima"],
  answer: 0,
  difficulty: "hard",
});

const FIG8 = makeTheme({
  title: "Figuri de stil",
  text: "Figurile de stil dau expresivitate: comparația apropie, metafora înlocuiește, personificarea umanizează.",
  svg: {
    type: "icon-grid",
    items: [
      { emoji: "🔗", label: "comparație" },
      { emoji: "✨", label: "metaforă" },
      { emoji: "🤝", label: "personificare" },
      { emoji: "🎨", label: "expresivitate" },
    ],
    bg: "#FDF2F8",
  },
  interactive: {
    type: "match-pairs",
    pairs: [
      ["comparație", "asemănare cu „ca” sau „precum”"],
      ["metaforă", "spune pe ascuns o asemănare"],
      ["personificare", "dă trăsături omenești"],
    ],
  },
  instruction: "Potrivește figura de stil cu explicația ei.",
  hint1: "Comparația folosește cuvinte de asemănare.",
  hint2: "Personificarea dă viață lucrurilor și fenomenelor.",
  question: "Ce figură folosește cuvântul „ca”?",
  choices: ["comparația", "metafora", "ironia", "epitetul"],
  answer: 0,
  difficulty: "hard",
});

const COMP8 = makeTheme({
  title: "Compunerea",
  text: "O compunere bună are introducere, cuprins și încheiere; ideile se ordonează clar și logic.",
  svg: {
    type: "word-display",
    word: "introducere - cuprins - încheiere",
    color: "#7C3AED",
    subtitle: "planul textului",
  },
  interactive: {
    type: "match-pairs",
    pairs: [
      ["introducere", "prezintă tema"],
      ["cuprins", "dezvoltă ideile"],
      ["încheiere", "închide textul"],
    ],
  },
  instruction: "Leagă partea compunerii de rolul ei.",
  hint1: "Introducerea deschide, cuprinsul dezvoltă, încheierea închide.",
  hint2: "O compunere bună are ordine și coerență.",
  question: "Care parte dezvoltă ideile?",
  choices: ["cuprinsul", "titlul", "motto-ul", "aliniatul"],
  answer: 0,
  difficulty: "hard",
});

const RECAP8 = makeTheme({
  title: "Recapitulare",
  text: "Recapitulăm noțiunile importante din morfologie, sintaxă, ortografie, literatură și comunicare.",
  svg: {
    type: "icon-grid",
    items: [
      { emoji: "🎓", label: "morfologie" },
      { emoji: "📊", label: "sintaxă" },
      { emoji: "✏️", label: "ortografie" },
      { emoji: "📚", label: "literatură" },
      { emoji: "📰", label: "comunicare" },
      { emoji: "🏆", label: "recapitulare" },
    ],
    bg: "#EEF2FF",
  },
  interactive: {
    type: "drag-to-bucket",
    buckets: [
      { id: "morfologie", label: "morfologie" },
      { id: "sintaxa", label: "sintaxă" },
      { id: "ortografie", label: "ortografie" },
      { id: "literatura", label: "literatură" },
      { id: "comunicare", label: "comunicare" },
    ],
    items: [
      { text: "substantiv", bucketId: "morfologie" },
      { text: "verb", bucketId: "morfologie" },
      { text: "subiect", bucketId: "sintaxa" },
      { text: "predicat", bucketId: "sintaxa" },
      { text: "cratimă", bucketId: "ortografie" },
      { text: "diacritice", bucketId: "ortografie" },
      { text: "narator", bucketId: "literatura" },
      { text: "metaforă", bucketId: "literatura" },
      { text: "știre", bucketId: "comunicare" },
      { text: "reclamă", bucketId: "comunicare" },
    ],
  },
  instruction: "Așază noțiunile în aria potrivită.",
  hint1: "Privește la ce parte a limbii sau la ce tip de text se referă.",
  hint2: "Recapitularea amestecă toate temele importante din clasa a VIII-a.",
  question: "Care noțiune ține de sintaxă?",
  choices: ["predicat", "câmp", "reclamă", "metaforă"],
  answer: 0,
  difficulty: "hard",
});

export const MORFO8_LABELS = MORFO8.labels;
export const MORFO8_POOL = MORFO8.pool;

export const SINT8_LABELS = SINT8.labels;
export const SINT8_POOL = SINT8.pool;

export const ORT8_LABELS = ORT8.labels;
export const ORT8_POOL = ORT8.pool;

export const TEXT8L_LABELS = TEXT8L.labels;
export const TEXT8L_POOL = TEXT8L.pool;

export const TEXT8N_LABELS = TEXT8N.labels;
export const TEXT8N_POOL = TEXT8N.pool;

export const ARG8_LABELS = ARG8.labels;
export const ARG8_POOL = ARG8.pool;

export const FIG8_LABELS = FIG8.labels;
export const FIG8_POOL = FIG8.pool;

export const COMP8_LABELS = COMP8.labels;
export const COMP8_POOL = COMP8.pool;

export const RECAP8_LABELS = RECAP8.labels;
export const RECAP8_POOL = RECAP8.pool;
