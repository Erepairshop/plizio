"use client";
// SentencePartsExplorerK3 — Island i4: Subjekt & Prädikat (Sentence Parts)
// Topics: 1) Das Subjekt (Wer oder was?) 2) Das Prädikat (Was tut man?) 3) Satzgefüge (S+P)

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSTRATIONS ──────────────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0F9FF" rx="20" />
      <g transform="translate(120, 70)">
        <circle cx="0" cy="-10" r="30" fill="#BAE6FD" stroke="#0EA5E9" strokeWidth="2" />
        <text x="0" y="0" fontSize="24" textAnchor="middle">👤</text>
        <text x="0" y="35" fontSize="16" fontWeight="bold" fill="#0369A1" textAnchor="middle">Subjekt</text>
        <text x="0" y="55" fontSize="10" fill="#0284C7" textAnchor="middle">Wer oder was?</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FDF2F8" rx="20" />
      <g transform="translate(120, 70)">
        <rect x="-40" y="-30" width="80" height="40" rx="8" fill="#FBCFE8" stroke="#DB2777" strokeWidth="2" />
        <text x="0" y="-5" fontSize="20" textAnchor="middle">🏃‍♂️</text>
        <text x="0" y="30" fontSize="16" fontWeight="bold" fill="#9D174D" textAnchor="middle">Prädikat</text>
        <text x="0" y="50" fontSize="10" fill="#BE185D" textAnchor="middle">Was tut das Subjekt?</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0FDFA" rx="20" />
      <g transform="translate(120, 70)">
        <rect x="-90" y="-15" width="80" height="30" rx="5" fill="#99F6E4" />
        <text x="-50" y="5" fontSize="12" fontWeight="bold" fill="#0F766E" textAnchor="middle">Subjekt</text>
        
        <text x="0" y="5" fontSize="20" fontWeight="bold" fill="#14B8A6" textAnchor="middle">+</text>
        
        <rect x="10" y="-15" width="80" height="30" rx="5" fill="#5EEAD4" />
        <text x="50" y="5" fontSize="12" fontWeight="bold" fill="#0F766E" textAnchor="middle">Prädikat</text>
        
        <path d="M -90,25 L 90,25" stroke="#14B8A6" strokeWidth="2" strokeDasharray="4 2" />
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Subjekt & Prädikat",
    // Topic 1
    t1_title: "Das Subjekt",
    t1_text: "Das Subjekt ist der Teil des Satzes, der sagt, wer oder was etwas tut. Wir fragen danach mit: Wer oder was?",
    t1_b1: "Beispiel: DER HUND bellt. (Wer bellt? Der Hund.)",
    t1_b2: "Es kann ein Name, ein Nomen oder ein Pronomen sein.",
    t1_b3: "Das Subjekt steht oft am Anfang.",
    t1_inst: "Finde das Subjekt im Satz! Klicke es an.",
    t1_h1: "Frage: Wer oder was spielt im Garten?",
    t1_h2: "Das Subjekt ist 'Das Kind'.",
    t1_w1: "Das", t1_w2: "Kind", t1_w3: "spielt", t1_w4: "im", t1_w5: "Garten.",
    t1_q: "Wie fragt man nach dem Subjekt?",
    t1_q_a: "Wer oder was?", t1_q_b: "Was tut er?", t1_q_c: "Wo?", t1_q_d: "Wann?",

    // Topic 2
    t2_title: "Das Prädikat",
    t2_text: "Das Prädikat ist das Verb im Satz. Es sagt uns, was das Subjekt tut oder was geschieht. Wir fragen danach mit: Was tut das Subjekt?",
    t2_b1: "Beispiel: Die Sonne SCHEINT. (Was tut die Sonne? Sie scheint.)",
    t2_b2: "Das Prädikat ist immer ein Verb.",
    t2_b3: "In Aussagesätzen steht es an Position 2.",
    t2_inst: "Welches Prädikat (Verb) passt in die Lücke?",
    t2_h1: "Was tut das kleine Baby?",
    t2_h2: "Das Baby 'lacht'.",
    t2_gap_sentence: "Das kleine Baby {gap} laut.",
    t2_c1: "lacht", t2_c2: "Lacht", t2_c3: "lachen",
    t2_q: "Welches Wort ist das Prädikat im Satz: 'Der Junge läuft schnell.'?",
    t2_q_a: "läuft", t2_q_b: "Der Junge", t2_q_c: "schnell", t2_q_d: "ist",

    // Topic 3
    t3_title: "Satzbau-Profi",
    t3_text: "Ein einfacher Satz besteht mindestens aus einem Subjekt und einem Prädikat. Man kann ihn aber mit anderen Wörtern (Objekten, Adjektiven) länger machen.",
    t3_b1: "Kürzester Satz: Er lacht. (S+P)",
    t3_b2: "Längerer Satz: Der kleine Vogel singt ein Lied. (S+P+Rest)",
    t3_b3: "Achte auf die Reihenfolge!",
    t3_inst: "Baue den Satz richtig zusammen!",
    t3_h1: "Das Subjekt ist 'Der kleine Vogel'.",
    t3_h2: "Das Prädikat 'singt' kommt an die zweite Stelle.",
    t3_w1: "Der", t3_w2: "kleine", t3_w3: "Vogel", t3_w4: "singt", t3_w5: "ein", t3_w6: "Lied.",
    t3_q: "Kann ein Satz nur aus einem Prädikat bestehen (ohne Subjekt)?",
    t3_q_a: "Nein, es braucht fast immer ein Subjekt", t3_q_b: "Ja, immer", t3_q_c: "Nur bei Fragen", t3_q_d: "Nur bei Adjektiven",
  },
  en: {
    explorer_title: "Subject & Predicate",
    t1_inst: "Find the subject in the sentence! Click on it.",
    t1_h1: "Question: Who or what is playing in the garden?",
    t1_h2: "The subject is 'Das Kind'.",
    t2_inst: "Which predicate (verb) fits in the gap?",
    t2_h1: "What is the little baby doing?",
    t2_h2: "The baby 'lacht' (laughs).",
    t3_inst: "Build the sentence correctly!",
    t3_h1: "The subject is 'Der kleine Vogel' (The little bird).",
    t3_h2: "The predicate 'singt' (sings) goes in the second position.",
  },
  hu: {
    explorer_title: "Alany és Állítmány",
    t1_inst: "Keresd meg az alanyt a mondatban! Kattints rá.",
    t1_h1: "Kérdés: Ki vagy mi játszik a kertben?",
    t1_h2: "Az alany: 'Das Kind'.",
    t2_inst: "Melyik állítmány (ige) illik az űrbe?",
    t2_h1: "Mit csinál a kisbaba?",
    t2_h2: "A baba nevet ('lacht').",
    t3_inst: "Rakd össze helyesen a mondatot!",
    t3_h1: "Az alany: 'Der kleine Vogel'.",
    t3_h2: "Az állítmány ('singt') a második helyre kerül.",
  },
  ro: {
    explorer_title: "Subiect și Predicat",
    t1_inst: "Găsește subiectul în propoziție! Apasă pe el.",
    t1_h1: "Întrebare: Cine sau ce se joacă în grădină?",
    t1_h2: "Subiectul este 'Das Kind'.",
    t2_inst: "Ce predicat (verb) se potrivește în spațiu?",
    t2_h1: "Ce face micul bebeluș?",
    t2_h2: "Bebelușul 'lacht' (râde).",
    t3_inst: "Construiește propoziția corect!",
    t3_h1: "Subiectul este 'Der kleine Vogel'.",
    t3_h2: "Predicatul 'singt' vine pe poziția a doua.",
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
      type: "highlight-text",
      tokens: ["t1_w1", "t1_w2", "t1_w3", "t1_w4", "t1_w5"], // Das Kind spielt im Garten.
      correctIndices: [0, 1], // Das Kind
      instruction: "t1_inst",
      hint1: "t1_h1",
      hint2: "t1_h2",
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
    svg: () => <Topic2Svg />,
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "gap-fill",
      sentence: "t2_gap_sentence",
      choices: ["t2_c1", "t2_c2", "t2_c3"], // lacht, Lacht, lachen
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
    svg: () => <Topic3Svg />,
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "word-order",
      words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6"], // Der kleine Vogel singt ein Lied.
      correctOrder: [0, 1, 2, 3, 4, 5],
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
];

// ─── DEF ────────────────────────────────────────────────────────────

const DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "⚖️",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const SentencePartsExplorerK3 = memo(function SentencePartsExplorerK3({
  color = "#0EA5E9",
  onDone,
  lang = "de",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={3} explorerId="deutsch_k3_sentenceparts" color={color} lang={lang} onDone={onDone} />;
});

export default SentencePartsExplorerK3;
