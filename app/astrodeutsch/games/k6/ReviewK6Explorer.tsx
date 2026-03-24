"use client";
// ReviewK6Explorer — Island i9: Große K3 Abschlussprüfung (The Big K6 Final Exam)
// Topics: 1) Passiv-Check 2) Konjunktiv II 3) Infinitiv mit „zu" 4) Wortbildung 5) Zeichensetzung

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSTRATIONS ──────────────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0F9FF" rx="20" />
      <g transform="translate(120, 70)">
        <path d="M -60,20 L -20,20 L -20,0 M 20,20 L 60,20 L 60,-20" fill="none" stroke="#0284C7" strokeWidth="3" />
        <text x="0" y="35" fontSize="16" fontWeight="bold" fill="#0369A1" textAnchor="middle">K6 Experte</text>
        <text x="0" y="-15" fontSize="35" textAnchor="middle">🏆</text>
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Abschlussprüfung K6",
    // T1: Passiv
    t1_title: "Passiv-Profi",
    t1_text: "Weißt du noch, wie man Vorgangspassiv (werden) und Zustandspassiv (sein) unterscheidet?",
    t1_b1: "Vorgang: Die Tür wird geschlossen.",
    t1_b2: "Zustand: Die Tür ist geschlossen.",
    t1_b3: "Wichtig: Das Partizip II steht am Ende.",
    t1_inst: "Vorgang vagy Zustand? Sortiere die Sätze!",
    t1_h1: "Achte auf das Hilfsverb: 'wird' (Vorgang) vagy 'ist' (Zustand).",
    t1_bucket_vor: "Vorgangspassiv",
    t1_bucket_zus: "Zustandspassiv",
    t1_item_v1: "Das Haus wird gebaut.", t1_item_v2: "Der Brief wird geschrieben.",
    t1_item_z1: "Das Haus ist gebaut.", t1_item_z2: "Der Brief ist geschrieben.",
    t1_q: "Welches Hilfsverb nutzt man für das Vorgangspassiv?",
    t1_q_a: "werden", t1_q_b: "sein", t1_q_c: "haben", t1_q_d: "würde",

    // T2: Konjunktiv II
    t2_title: "Wünsche & Träume",
    t2_text: "Der Konjunktiv II hilft uns, höflich zu sein oder über Unmögliches zu sprechen.",
    t2_b1: "wäre, hätte, könnte",
    t2_b2: "würde + Infinitiv",
    t2_b3: "Wenn ich Zeit hätte, ...",
    t2_inst: "Welche Form von Konjunktiv II passt hier?",
    t2_h1: "Es geht um einen Wunsch für 'ich' (sein).",
    t2_h2: "Die richtige Form ist 'wäre'.",
    t2_gap_sentence: "Wenn ich doch bloß am Meer {gap}!",
    t2_c1: "wäre", t2_c2: "bin", t2_c3: "war",
    t2_q: "Was drückt 'Ich würde gerne fliegen' aus?",
    t2_q_a: "Einen Wunsch", t2_q_b: "Einen Befehl", t2_q_c: "Einen Fakt", t2_q_d: "Die Vergangenheit",

    // T3: Infinitiv + zu
    t3_title: "Satzbau mit „zu“",
    t3_text: "Infinitivsätze mit 'zu' verbinden zwei Handlungen. Bei um/ohne/statt ist ein Komma Pflicht!",
    t3_b1: "um ... zu (Zweck)",
    t3_b2: "ohne ... zu (Art und Weise)",
    t3_b3: "Ich versuche, die Aufgabe zu lösen.",
    t3_inst: "Bringe den Infinitivsatz in die richtige Reihenfolge!",
    t3_h1: "Kezdd a kötőszóval: 'um'.",
    t3_h2: "A 'zu' és az ige ('bleiben.') a mondat végére kerül.",
    t3_w1: "um", t3_w2: "gesund", t3_w3: "zu", t3_w4: "bleiben.",
    t3_q: "Brauchen Modalverben (können, müssen) ein 'zu' beim zweiten Verb?",
    t3_q_a: "Nein, niemals.", t3_q_b: "Ja, immer.", t3_q_c: "Nur am Satzende.", t3_q_d: "Nur in der Schriftsprache.",

    // T4: Wortbildung
    t4_title: "Wortbau & Nominalisierung",
    t4_text: "Nomen entstehen oft aus Verben oder Adjektiven. Achte auf die Großschreibung!",
    t4_b1: "laufen ➔ das Laufen",
    t4_b2: "schön ➔ etwas Schönes",
    t4_b3: "Suffixe: -ung, -heit, -keit",
    t4_inst: "Markiere das nominalisierte Adjektiv in diesem Satz!",
    t4_h1: "Suche nach einem Adjektiv, das nach 'etwas' steht.",
    t4_h2: "Das Wort ist 'Gutes'.",
    t4_w41: "Ich", t4_w42: "erwarte", t4_w43: "heute", t4_w44: "etwas", t4_w45: "Gutes.",
    t4_q: "Aus welchem Verb entsteht das Nomen 'Erfindung'?",
    t4_q_a: "erfinden", t4_q_b: "finden", t4_q_c: "fahren", t4_q_d: "binden",

    // T5: Zeichensetzung
    t5_title: "Finale: Zeichensetzung",
    t5_text: "Das Komma trennt Haupt- und Nebensätze, Relativsätze und Infinitivgruppen.",
    t5_b1: "Komma vor 'weil', 'dass', 'der/die/das'.",
    t5_b2: "Komma bei 'um...zu'.",
    t5_b3: "Satzklammern bei eingeschobenen Sätzen.",
    t5_inst: "Verbinde die Satzteile mit dem richtigen Komma!",
    t5_h1: "Keresd a mellékmondat határát.",
    t5_l51: "Ich hoffe", t5_r51: ", dass du kommst.",
    t5_l52: "Der Mann", t5_r52: ", der dort steht",
    t5_l53: "Er rennt", t5_r53: ", um zu siegen.",
    t5_q: "Welcher Satz ist korrekt punktiert?",
    t5_q_a: "Ich weiß, dass du recht hast.", t5_q_b: "Ich weiß dass du recht hast.", t5_q_c: "Ich weiß, dass, du recht hast.", t5_q_d: "Ich weiß dass, du recht hast.",
  },
  en: {
    explorer_title: "Final Exam K6",
    t1_inst: "Process or State? Sort the sentences!",
    t2_inst: "Which form of Konjunktiv II fits here?",
    t3_inst: "Put the infinitive clause in the correct order!",
    t4_inst: "Highlight the nominalized adjective in this sentence!",
    t5_inst: "Connect the sentence parts with the correct comma!",
  },
  hu: {
    explorer_title: "Záróvizsga K6",
    t1_inst: "Folyamat vagy állapot? Válogasd szét a mondatokat!",
    t2_inst: "Melyik Konjunktiv II alak illik ide?",
    t3_inst: "Tedd az 'um...zu' szerkezetet a helyes sorrendbe!",
    t4_inst: "Jelöld ki a főnevesült melléknevet a mondatban!",
    t5_inst: "Kösd össze a mondatrészeket a megfelelő vesszőhasználattal!",
  },
  ro: {
    explorer_title: "Examen Final K6",
    t1_inst: "Acțiune sau Stare? Sortează propozițiile!",
    t2_inst: "Ce formă de Konjunktiv II se potrivește aici?",
    t3_inst: "Așază propoziția cu infinitiv în ordinea corectă!",
    t4_inst: "Marchează adjectivul nominalizat în această propoziție!",
    t5_inst: "Conectează părțile de propoziție cu virgula corectă!",
  }
};

// ─── TOPICS ─────────────────────────────────────────────────────────

const TOPICS: TopicDef[] = [
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: () => <Topic1Svg />,
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [
        { id: "vor", label: "t1_bucket_vor" },
        { id: "zus", label: "t1_bucket_zus" },
      ],
      items: [
        { text: "t1_item_v1", bucketId: "vor" },
        { text: "t1_item_z1", bucketId: "zus" },
        { text: "t1_item_v2", bucketId: "vor" },
        { text: "t1_item_z2", bucketId: "zus" },
      ],
      instruction: "t1_inst",
      hint1: "t1_h1",
      hint2: "t1_h1",
    },
    quiz: {
      question: "t1_q",
      choices: ["t1_q_a", "t1_q_b", "t1_q_c", "t1_q_d"],
      answer: "t1_q_a",
    },
  },
  {
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: () => <Topic1Svg />,
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "gap-fill",
      sentence: "t2_gap_sentence",
      choices: ["t2_c1", "t2_c2", "t2_c3"],
      correctIndex: 0,
      instruction: "t2_inst",
      hint1: "t2_h1",
      hint2: "t2_h2",
    },
    quiz: {
      question: "t2_q",
      choices: ["t2_q_a", "t2_q_b", "t2_q_c", "t2_q_d"],
      answer: "t2_q_a",
    },
  },
  {
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: () => <Topic1Svg />,
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "word-order",
      words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4"], // um gesund zu bleiben.
      correctOrder: [0, 1, 2, 3],
      instruction: "t3_inst",
      hint1: "t3_h1",
      hint2: "t3_h2",
    },
    quiz: {
      question: "t3_q",
      choices: ["t3_q_a", "t3_q_b", "t3_q_c", "t3_q_d"],
      answer: "t3_q_a",
    },
  },
  {
    infoTitle: "t4_title",
    infoText: "t4_text",
    svg: () => <Topic1Svg />,
    bulletKeys: ["t4_b1", "t4_b2", "t4_b3"],
    interactive: {
      type: "highlight-text",
      tokens: ["t4_w41", "t4_w42", "t4_w43", "t4_w44", "t4_w45"],
      correctIndices: [4],
      instruction: "t4_inst",
      hint1: "t4_h1",
      hint2: "t4_h2",
    },
    quiz: {
      question: "t4_q",
      choices: ["t4_q_a", "t4_q_b", "t4_q_c", "t4_q_d"],
      answer: "t4_q_a",
    },
  },
  {
    infoTitle: "t5_title",
    infoText: "t5_text",
    svg: () => <Topic1Svg />,
    bulletKeys: ["t5_b1", "t5_b2", "t5_b3"],
    interactive: {
      type: "match-pairs",
      pairs: [
        { left: "t5_l51", right: "t5_r51" },
        { left: "t5_l52", right: "t5_r52" },
        { left: "t5_l53", right: "t5_r53" },
      ],
      instruction: "t5_inst",
      hint1: "t5_h1",
      hint2: "t5_h1",
    },
    quiz: {
      question: "t5_q",
      choices: ["t5_q_a", "t5_q_b", "t5_q_c", "t5_q_d"],
      answer: "t5_q_a",
    },
  },
];

// ─── DEF ────────────────────────────────────────────────────────────

const DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "👑",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const ReviewK6Explorer = memo(function ReviewK6Explorer({
  color = "#C026D3",
  onDone,
  lang = "de",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={6} explorerId="deutsch_k6_review_final" color={color} lang={lang} onDone={onDone} />;
});

export default ReviewK6Explorer;
