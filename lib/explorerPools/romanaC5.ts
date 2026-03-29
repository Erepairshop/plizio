// lib/explorerPools/romanaC5.ts — AstroRomână Clasa 5
import type { PoolTopicDef } from "./types";

function mkLabels(ro: string) {
  const v = {
    explorer_title: ro,
    t1_title: ro,
    t1_text: ro,
    t1_q: `${ro}?`,
    t1_qa: "A",
    t1_qb: "B",
    t1_qc: "C",
    t1_qd: "D",
    t1_inst: ro,
    t1_h1: ro,
    t1_h2: ro,
    t1_l1: "1",
    t1_r1: "a",
    t1_l2: "2",
    t1_r2: "b",
    t1_l3: "3",
    t1_r3: "c",
  };

  return {
    en: v,
    hu: v,
    de: v,
    ro: v,
  };
}

function mkPool(def: {
  title: string;
  text: string;
  icon: string;
  color: string;
  hint1: string;
  hint2: string;
  interactive: PoolTopicDef["interactive"];
  quizQ: string;
  quizChoices: [string, string, string, string];
  quizAnswer: string;
  difficulty: "easy" | "medium" | "hard";
}): PoolTopicDef[] {
  return [
    {
      infoTitle: "t1_title",
      infoText: "t1_text",
      svg: { type: "simple-icon", icon: def.icon, color: def.color },
      hintKey: "t1_h1",
      interactive: def.interactive,
      quiz: {
        question: "t1_q",
        choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"],
        answer: def.quizAnswer,
      },
      difficulty: def.difficulty,
    },
  ];
}

function mkTopicLabels(title: string, text: string, question: string, a: string, b: string, c: string, d: string, inst: string, h1: string, h2: string, l1: string, r1: string, l2: string, r2: string, l3: string, r3: string) {
  return {
    en: {
      explorer_title: title,
      t1_title: title,
      t1_text: text,
      t1_q: question,
      t1_qa: a,
      t1_qb: b,
      t1_qc: c,
      t1_qd: d,
      t1_inst: inst,
      t1_h1: h1,
      t1_h2: h2,
      t1_l1: l1,
      t1_r1: r1,
      t1_l2: l2,
      t1_r2: r2,
      t1_l3: l3,
      t1_r3: r3,
    },
    hu: {
      explorer_title: title,
      t1_title: title,
      t1_text: text,
      t1_q: question,
      t1_qa: a,
      t1_qb: b,
      t1_qc: c,
      t1_qd: d,
      t1_inst: inst,
      t1_h1: h1,
      t1_h2: h2,
      t1_l1: l1,
      t1_r1: r1,
      t1_l2: l2,
      t1_r2: r2,
      t1_l3: l3,
      t1_r3: r3,
    },
    de: {
      explorer_title: title,
      t1_title: title,
      t1_text: text,
      t1_q: question,
      t1_qa: a,
      t1_qb: b,
      t1_qc: c,
      t1_qd: d,
      t1_inst: inst,
      t1_h1: h1,
      t1_h2: h2,
      t1_l1: l1,
      t1_r1: r1,
      t1_l2: l2,
      t1_r2: r2,
      t1_l3: l3,
      t1_r3: r3,
    },
    ro: {
      explorer_title: title,
      t1_title: title,
      t1_text: text,
      t1_q: question,
      t1_qa: a,
      t1_qb: b,
      t1_qc: c,
      t1_qd: d,
      t1_inst: inst,
      t1_h1: h1,
      t1_h2: h2,
      t1_l1: l1,
      t1_r1: r1,
      t1_l2: l2,
      t1_r2: r2,
      t1_l3: l3,
      t1_r3: r3,
    },
  };
}

export const FON5_LABELS = mkTopicLabels(
  "Fonetica și silabele",
  "Aici fixăm sunetele limbii române, literele care le notează și despărțirea în silabe.",
  "Care dintre acestea este vocală?",
  "a",
  "b",
  "m",
  "t",
  "Atinge literele care sunt vocale.",
  "Pornește de la vocalele limbi române.",
  "Vocalele se pot rosti singure.",
  "a",
  "a",
  "b",
  "b",
  "c",
  "c"
);
export const FON5_POOL = mkPool({
  title: "Fonetica și silabele",
  text: "Aici fixăm sunetele limbii române, literele care le notează și despărțirea în silabe.",
  icon: "🔤",
  color: "#6366F1",
  hint1: "Vocalele se pot rosti singure.",
  hint2: "În română avem litere speciale precum ă, â, î, ș și ț.",
  interactive: {
    type: "drag-to-bucket",
    buckets: [
      { id: "vocale", label: "vocale" },
      { id: "consoane", label: "consoane" },
    ],
    items: [
      { text: "a", bucketId: "vocale" },
      { text: "e", bucketId: "vocale" },
      { text: "i", bucketId: "vocale" },
      { text: "b", bucketId: "consoane" },
      { text: "m", bucketId: "consoane" },
      { text: "ț", bucketId: "consoane" },
    ],
    instruction: "Așază fiecare literă în grupa corectă.",
    hint1: "Vocalele se rostesc fără ajutor.",
    hint2: "Consoanele au nevoie de o vocală ca să sune clar.",
  },
  quizQ: "Care dintre acestea este vocală?",
  quizChoices: ["a", "m", "ț", "b"],
  quizAnswer: "t1_qa",
  difficulty: "easy",
});

export const SUBST5_LABELS = mkTopicLabels(
  "Substantivul",
  "Observăm substantivele comune și proprii, apoi le așezăm după tip și sens.",
  "Care cuvânt este substantiv propriu?",
  "Ana",
  "repede",
  "frumos",
  "aleargă",
  "Trage cuvintele în grupa potrivită.",
  "Numele de persoane și de locuri sunt proprii.",
  "Substantivele comune denumesc ființe, lucruri sau fenomene.",
  "Ana",
  "Ana",
  "copil",
  "copil",
  "București",
  "București"
);
export const SUBST5_POOL = mkPool({
  title: "Substantivul",
  text: "Observăm substantivele comune și proprii, apoi le așezăm după tip și sens.",
  icon: "📚",
  color: "#818CF8",
  hint1: "Numele de persoane și de locuri sunt proprii.",
  hint2: "Substantivele comune denumesc ființe, lucruri sau fenomene.",
  interactive: {
    type: "physics-bucket",
    buckets: [
      { id: "comune", label: "comune" },
      { id: "proprii", label: "proprii" },
    ],
    items: [
      { text: "copil", bucketId: "comune" },
      { text: "Ana", bucketId: "proprii" },
      { text: "oraș", bucketId: "comune" },
      { text: "București", bucketId: "proprii" },
      { text: "pisică", bucketId: "comune" },
      { text: "Cluj", bucketId: "proprii" },
    ],
    instruction: "Pune fiecare cuvânt în grupa corectă.",
    hint1: "Gândește-te dacă este nume special.",
    hint2: "Numele de persoane și orașe sunt proprii.",
  },
  quizQ: "Care cuvânt este substantiv propriu?",
  quizChoices: ["Ana", "copil", "masă", "elev"],
  quizAnswer: "t1_qa",
  difficulty: "easy",
});

export const VERB5_LABELS = mkTopicLabels(
  "Verbul",
  "Lucrăm cu forme verbale de bază și cu modurile nepersonale care apar în enunțuri simple.",
  "Ce mod nepersonal este „scriind”?",
  "gerunziu",
  "infinitiv",
  "participiu",
  "supin",
  "Potrivește forma verbală cu modul ei.",
  "Gerunziul arată acțiunea în desfășurare.",
  "Infinitivul este forma de bază a verbului.",
  "scriind",
  "gerunziu",
  "a citi",
  "infinitiv",
  "citit",
  "participiu"
);
export const VERB5_POOL = mkPool({
  title: "Verbul",
  text: "Lucrăm cu forme verbale de bază și cu modurile nepersonale care apar în enunțuri simple.",
  icon: "⚙️",
  color: "#4F46E5",
  hint1: "Gerunziul arată acțiunea în desfășurare.",
  hint2: "Infinitivul începe de obicei cu „a”.",
  interactive: {
    type: "match-pairs",
    pairs: [
      { left: "scriind", right: "gerunziu" },
      { left: "a citi", right: "infinitiv" },
      { left: "citit", right: "participiu" },
    ],
    instruction: "Potrivește forma verbală cu modul potrivit.",
    hint1: "Uită-te la terminație și la forma de bază.",
    hint2: "Căutăm modurile nepersonale ale verbului.",
  },
  quizQ: "Ce mod nepersonal este „a citi”?",
  quizChoices: ["infinitiv", "gerunziu", "participiu", "supin"],
  quizAnswer: "t1_qb",
  difficulty: "medium",
});

export const PART5_LABELS = mkTopicLabels(
  "Părțile de vorbire",
  "Recunoaștem cuvintele după rolul lor: substantiv, verb sau adjectiv.",
  "Care cuvânt este verb?",
  "aleargă",
  "masă",
  "frumos",
  "Ana",
  "Trage fiecare cuvânt în grupa potrivită.",
  "Verb = acțiune.",
  "Adjectiv = însușire.",
  "aleargă",
  "aleargă",
  "masă",
  "masă",
  "frumos",
  "frumos"
);
export const PART5_POOL = mkPool({
  title: "Părțile de vorbire",
  text: "Recunoaștem cuvintele după rolul lor: substantiv, verb sau adjectiv.",
  icon: "🧩",
  color: "#6366F1",
  hint1: "Verb = acțiune.",
  hint2: "Adjectiv = însușire.",
  interactive: {
    type: "drag-to-bucket",
    buckets: [
      { id: "substantiv", label: "substantiv" },
      { id: "verb", label: "verb" },
      { id: "adjectiv", label: "adjectiv" },
    ],
    items: [
      { text: "copil", bucketId: "substantiv" },
      { text: "aleargă", bucketId: "verb" },
      { text: "frumos", bucketId: "adjectiv" },
      { text: "carte", bucketId: "substantiv" },
      { text: "citește", bucketId: "verb" },
      { text: "vesel", bucketId: "adjectiv" },
    ],
    instruction: "Așază cuvintele în grupa de vorbire corectă.",
    hint1: "Află dacă numește, arată acțiune sau însușire.",
    hint2: "Fiecare cuvânt are un rol clar în propoziție.",
  },
  quizQ: "Care cuvânt este verb?",
  quizChoices: ["aleargă", "copil", "frumos", "masă"],
  quizAnswer: "t1_qa",
  difficulty: "medium",
});

export const ORT5_LABELS = mkTopicLabels(
  "Ortografia",
  "Exersăm scrierea corectă a literelor ă, â și î, plus formele care cer atenție la scris.",
  "Cum se scrie corect cuvântul?",
  "pâine",
  "pîine",
  "paine",
  "pâne",
  "Completează forma corectă.",
  "În interiorul cuvintelor folosim â.",
  "La începutul cuvintelor folosim î.",
  "î",
  "î",
  "â",
  "â",
  "i",
  "i"
);
export const ORT5_POOL = mkPool({
  title: "Ortografia",
  text: "Exersăm scrierea corectă a literelor ă, â și î, plus formele care cer atenție la scris.",
  icon: "✏️",
  color: "#D97706",
  hint1: "În interiorul cuvintelor folosim â.",
  hint2: "La începutul cuvintelor folosim î.",
  interactive: {
    type: "gap-fill",
    sentence: "Ea a ___nceput să cânte.",
    choices: ["î", "â", "i", "ă"],
    correctIndex: 0,
    instruction: "Alege litera care completează corect cuvântul.",
    hint1: "Cuvântul începe cu î.",
    hint2: "Gândește-te la forma corectă a verbului.",
  },
  quizQ: "Cum se scrie corect cuvântul „pâine”?",
  quizChoices: ["pâine", "pîine", "paine", "pâne"],
  quizAnswer: "t1_qa",
  difficulty: "medium",
});

export const SINT5_LABELS = mkTopicLabels(
  "Sintaxa",
  "Urmărim subiectul și predicatul în propoziții simple, apoi vedem cum se leagă ideile.",
  "Ce funcție are „Ana” din propoziția „Ana citește.”?",
  "subiect",
  "predicat",
  "atribut",
  "complement",
  "Potrivește cuvântul cu funcția sa sintactică.",
  "Subiectul spune cine face acțiunea.",
  "Predicatul spune ce face subiectul.",
  "Ana",
  "subiect",
  "citește",
  "predicat",
  "cartea",
  "complement"
);
export const SINT5_POOL = mkPool({
  title: "Sintaxa",
  text: "Urmărim subiectul și predicatul în propoziții simple, apoi vedem cum se leagă ideile.",
  icon: "🧠",
  color: "#F97316",
  hint1: "Subiectul spune cine face acțiunea.",
  hint2: "Predicatul spune ce face subiectul.",
  interactive: {
    type: "match-pairs",
    pairs: [
      { left: "Ana", right: "subiect" },
      { left: "citește", right: "predicat" },
      { left: "cartea", right: "complement" },
    ],
    instruction: "Potrivește fiecare cuvânt cu funcția lui.",
    hint1: "Caută cine face acțiunea.",
    hint2: "Apoi vezi ce spune propoziția despre acea acțiune.",
  },
  quizQ: "Ce funcție are „Ana”?",
  quizChoices: ["subiect", "predicat", "atribut", "complement"],
  quizAnswer: "t1_qa",
  difficulty: "hard",
});

export const TEXT5L_LABELS = mkTopicLabels(
  "Textul literar",
  "În textul literar recunoaștem rima, imaginile simple și legătura dintre cuvintele expresive.",
  "Ce pereche rimează?",
  "soare - floare",
  "masă - carte",
  "copil - mere",
  "școală - caiet",
  "Potrivește cuvintele care rimează.",
  "Rima se aude la finalul cuvintelor.",
  "Cuvintele cu sunete asemănătoare formează o pereche de rimă.",
  "soare",
  "floare",
  "mare",
  "soare",
  "tare",
  "floare"
);
export const TEXT5L_POOL = mkPool({
  title: "Textul literar",
  text: "În textul literar recunoaștem rima, imaginile simple și legătura dintre cuvintele expresive.",
  icon: "📖",
  color: "#8B5CF6",
  hint1: "Rima se aude la finalul cuvintelor.",
  hint2: "Cuvintele cu sunete asemănătoare formează o pereche de rimă.",
  interactive: {
    type: "match-pairs",
    pairs: [
      { left: "soare", right: "floare" },
      { left: "mare", right: "tare" },
      { left: "lumină", right: "grădină" },
    ],
    instruction: "Potrivește cuvintele care rimează.",
    hint1: "Ascultă finalul fiecărui cuvânt.",
    hint2: "Nu te uita la sens, ci la sunet.",
  },
  quizQ: "Ce pereche rimează?",
  quizChoices: ["soare - floare", "masă - carte", "copil - mere", "școală - caiet"],
  quizAnswer: "t1_qa",
  difficulty: "medium",
});

export const VOC5_LABELS = mkTopicLabels(
  "Vocabularul",
  "Lucrăm cu sinonime, antonime și cuvinte înrudite ca sens, pentru a spune mai clar ce gândim.",
  "Cum numim cuvintele cu sens asemănător?",
  "sinonime",
  "antonime",
  "omonime",
  "propoziții",
  "Așază cuvintele în grupa potrivită.",
  "Sinonimele au sens apropiat.",
  "Antonimele au sens opus.",
  "bun",
  "sinonime",
  "bun",
  "antonime",
  "sus",
  "jos"
);
export const VOC5_POOL = mkPool({
  title: "Vocabularul",
  text: "Lucrăm cu sinonime, antonime și cuvinte înrudite ca sens, pentru a spune mai clar ce gândim.",
  icon: "🗣️",
  color: "#818CF8",
  hint1: "Sinonimele au sens apropiat.",
  hint2: "Antonimele au sens opus.",
  interactive: {
    type: "physics-bucket",
    buckets: [
      { id: "sinonime", label: "sinonime" },
      { id: "antonime", label: "antonime" },
    ],
    items: [
      { text: "bun", bucketId: "sinonime" },
      { text: "bine", bucketId: "sinonime" },
      { text: "sus", bucketId: "antonime" },
      { text: "jos", bucketId: "antonime" },
      { text: "mare", bucketId: "sinonime" },
      { text: "mic", bucketId: "antonime" },
    ],
    instruction: "Grupează cuvintele după sens.",
    hint1: "Caută cuvinte cu sens apropiat sau opus.",
    hint2: "Unele perechi apar foarte des în viața de zi cu zi.",
  },
  quizQ: "Cum numim cuvintele cu sens asemănător?",
  quizChoices: ["sinonime", "antonime", "substantive", "verbe"],
  quizAnswer: "t1_qa",
  difficulty: "medium",
});

export const RECAP5_LABELS = mkTopicLabels(
  "Recapitulare",
  "Verificăm la final dacă recunoaștem cuvinte, funcții și scrierea corectă în contexte scurte.",
  "Care cuvânt este substantiv?",
  "carte",
  "aleargă",
  "frumos",
  "repede",
  "Potrivește fiecare cuvânt cu grupa sa.",
  "Aici se adună idei din toate temele de clasa a V-a.",
  "Alege ce vezi după sens.",
  "carte",
  "substantiv",
  "aleargă",
  "verb",
  "frumos",
  "adjectiv"
);
export const RECAP5_POOL = mkPool({
  title: "Recapitulare",
  text: "Verificăm la final dacă recunoaștem cuvinte, funcții și scrierea corectă în contexte scurte.",
  icon: "🏁",
  color: "#6366F1",
  hint1: "Aici se adună idei din toate temele de clasa a V-a.",
  hint2: "Alege ce vezi după sens și după rolul în propoziție.",
  interactive: {
    type: "physics-bucket",
    buckets: [
      { id: "substantiv", label: "substantiv" },
      { id: "verb", label: "verb" },
      { id: "adjectiv", label: "adjectiv" },
      { id: "ortografie", label: "ortografie" },
    ],
    items: [
      { text: "carte", bucketId: "substantiv" },
      { text: "aleargă", bucketId: "verb" },
      { text: "frumos", bucketId: "adjectiv" },
      { text: "pâine", bucketId: "ortografie" },
      { text: "Ana", bucketId: "substantiv" },
      { text: "citește", bucketId: "verb" },
      { text: "vesel", bucketId: "adjectiv" },
      { text: "învăț", bucketId: "ortografie" },
    ],
    instruction: "Așază cuvintele în grupa corectă.",
    hint1: "Fiecare cuvânt are un rol clar.",
    hint2: "Recapitularea amestecă toate temele importante.",
  },
  quizQ: "Care cuvânt este substantiv?",
  quizChoices: ["carte", "aleargă", "frumos", "repede"],
  quizAnswer: "t1_qa",
  difficulty: "hard",
});
