"use client";
// KausalKonditionalExplorer — Island i5: Kausal- & Konditionalsätze (K7)
// Topics: 1) weil/da vs. denn 2) wenn/falls/sofern 3) ob (Indirekte Frage) 4) Wortstellung 5) Mixed Quiz

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSTRATIONS ──────────────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0F9FF" rx="20" />
      <g transform="translate(120, 70)">
        <text x="0" y="-35" fontSize="16" fontWeight="bold" fill="#0369A1" textAnchor="middle">Grund-Sätze</text>
        <rect x="-80" y="-15" width="70" height="30" rx="4" fill="#BAE6FD" />
        <text x="-45" y="5" fontSize="12" fontWeight="bold" fill="#0369A1" textAnchor="middle">weil / da</text>
        <text x="0" y="5" fontSize="14" fill="#0EA5E9" textAnchor="middle">vs</text>
        <rect x="10" y="-15" width="70" height="30" rx="4" fill="#7DD3FC" />
        <text x="45" y="5" fontSize="12" fontWeight="bold" fill="#0369A1" textAnchor="middle">denn</text>
        <text x="0" y="40" fontSize="10" fill="#0284C7" textAnchor="middle">Verb am Ende vs. Position 2</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0FDF4" rx="20" />
      <g transform="translate(120, 70)">
        <text x="0" y="-30" fontSize="16" fontWeight="bold" fill="#166534" textAnchor="middle">Bedingung (If)</text>
        <path d="M -60,10 L -20,10 L 0,-20 L 20,10 L 60,10" fill="none" stroke="#22C55E" strokeWidth="3" />
        <text x="0" y="25" fontSize="14" fontWeight="black" fill="#15803D" textAnchor="middle">WENN / FALLS</text>
        <text x="0" y="45" fontSize="10" fill="#166534" textAnchor="middle">Nur unter dieser Bedingung!</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FFFBEB" rx="20" />
      <g transform="translate(120, 70)">
        <text x="0" y="-20" fontSize="16" fontWeight="bold" fill="#B45309" textAnchor="middle">Indirekte Frage</text>
        <circle cx="0" cy="15" r="25" fill="#FDE68A" stroke="#D97706" strokeWidth="2" />
        <text x="0" y="22" fontSize="18" fontWeight="black" fill="#92400E" textAnchor="middle">ob</text>
        <text x="50" y="15" fontSize="20" textAnchor="middle">❓</text>
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Logik & Satzbau K7",
    // T1
    t1_title: "Grund angeben: weil, da, denn",
    t1_text: "Kausalsätze erklären das 'Warum'. 'weil' und 'da' leiten Nebensätze ein (Verb am Ende). 'denn' verbindet zwei Hauptsätze (Verb auf Position 2).",
    t1_b1: "weil/da: Ich bleibe zu Hause, WEIL es REGNET.",
    t1_b2: "denn: Ich bleibe zu Hause, DENN es REGNET.",
    t1_b3: "Wichtig: 'da' wird oft am Satzanfang genutzt.",
    t1_inst: "Welches Bindewort verlangt das Verb auf Position 2?",
    t1_h1: "Suche das Wort, das wie 'und' oder 'aber' funktioniert.",
    t1_h2: "Das Wort ist 'denn'.",
    t1_gap_sentence: "Er ist müde, {gap} er hat viel gearbeitet.",
    t1_c1: "denn", t1_c2: "weil", t1_c3: "da",
    t1_q: "Wo steht das Verb nach dem Bindewort 'da'?",
    t1_q_a: "Am Satzende", t1_q_b: "An Position 2", t1_q_c: "An Position 1", t1_q_d: "Ganz vorne",

    // T2
    t2_title: "Bedingungen: wenn, falls, sofern",
    t2_text: "Konditionalsätze nennen eine Voraussetzung. 'Wenn' ist am häufigsten, 'falls' nutzt man bei geringerer Wahrscheinlichkeit, 'sofern' klingt formeller.",
    t2_b1: "wenn: WENN es morgen sonnig ist, grillen wir.",
    t2_b2: "falls: FALLS du Hilfe brauchst, ruf an.",
    t2_b3: "Alle drei leiten einen Nebensatz ein (Verb am Ende).",
    t2_inst: "Bringe den Konditionalsatz in die richtige Reihenfolge!",
    t2_h1: "Beginne mit dem Bindewort 'Falls'.",
    t2_h2: "Das Verb 'hast.' muss ans Ende des ersten Teils.",
    t2_w1: "Falls", t2_w2: "du", t2_w3: "Fragen", t2_w4: "hast,", t2_w5: "komm", t2_w6: "zu", t2_w7: "mir.",
    t2_q: "Welches Wort bedeutet dasselbe wie 'falls', ist aber formeller?",
    t2_q_a: "sofern", t2_q_b: "weil", t2_q_c: "ob", t2_q_d: "da",

    // T3
    t3_title: "Die indirekte Frage: ob",
    t3_text: "Wenn wir eine Ja/Nein-Frage in einen Satz einbauen, nutzen wir 'ob'. Auch hier wandert das Verb ans Ende.",
    t3_b1: "Direkt: Kommst du heute? (Ja/Nein)",
    t3_b2: "Indirekt: Ich frage mich, OB du heute KOMMST.",
    t3_b3: "Nach 'wissen', 'fragen', 'unsicher sein'...",
    t3_inst: "Welches Wort passt für die indirekte Frage?",
    t3_h1: "Es ist eine Frage, auf die man mit Ja oder Nein antworten kann.",
    t3_h2: "Wir brauchen das Wort 'ob'.",
    t3_gap_sentence2: "Ich weiß nicht, {gap} er die Wahrheit sagt.",
    t3_c1: "ob", t3_c2: "dass", t3_c3: "wenn",
    t3_q: "Welches Wort leitet eine indirekte Ja/Nein-Frage ein?",
    t3_q_a: "ob", t3_q_b: "wann", t3_q_c: "wie", t3_q_d: "warum",

    // T4
    t4_title: "Wortstellung: HS vs. NS",
    t4_text: "Vorsicht beim Satzbau! Beginnt ein Satz mit dem Nebensatz, muss das Verb des Hauptsatzes direkt nach dem Komma stehen (Verb-Verb-Kontakt).",
    t4_b1: "Normal: Ich komme, wenn ich Zeit habe.",
    t4_b2: "Umgekehrt: Wenn ich Zeit habe, KOMME ich.",
    t4_b3: "Das Komma trennt die beiden Verben.",
    t4_inst: "Welches Wort muss direkt nach dem Komma stehen? Markiere es!",
    t4_h1: "Der Nebensatz endet bei 'ist,'.",
    t4_h2: "Danach folgt sofort das Verb des Hauptsatzes: 'bleibe'.",
    t4_w21: "Weil", t4_w22: "es", t4_w23: "kalt", t4_w24: "ist,", t4_w25: "bleibe", t4_w26: "ich", t4_w27: "lieber", t4_w28: "hier.",
    t4_q: "Was passiert, wenn der Nebensatz vorne steht?",
    t4_q_a: "Das Hauptsatz-Verb rückt direkt ans Komma.", t4_q_b: "Das Hauptsatz-Verb rückt ans Ende.", t4_q_c: "Nichts ändert sich.", t4_q_d: "Der Satz wird ungültig.",

    // T5
    t5_title: "Mixed Quiz",
    t5_text: "Bist du ein Logik-Meister? Teste dein Wissen über Gründe, Bedingungen und indirekte Fragen.",
    t5_b1: "weil vs. denn.",
    t5_b2: "wenn/falls für Bedingungen.",
    t5_b3: "ob für Fragen.",
    t5_inst: "Ist es Kausal (Grund) oder Konditional (Bedingung)? Sortiere!",
    t5_h1: "'weil' erklärt das Warum (Kausal).",
    t5_h2: "'wenn' nennt eine Voraussetzung (Konditional).",
    t5_bucket_kau: "Kausal (Grund)",
    t5_bucket_kon: "Konditional (Bedingung)",
    t5_item_k1: "weil ich müde bin", t5_item_k2: "da es regnet",
    t5_item_c1: "wenn du Zeit hast", t5_item_c2: "falls er anruft",
    t5_q: "Welcher Satz ist grammatikalisch VOLLSTÄNDIG richtig?",
    t5_q_a: "Ich frage mich, ob er kommt.", t5_q_b: "Ich frage mich ob, er kommt.", t5_q_c: "Ich frage mich, ob kommt er.", t5_q_d: "Ich frage mich ob er kommt.",
  },
  en: {
    explorer_title: "Logic & Sentence Structure",
    t1_inst: "Which conjunction requires the verb in position 2?",
    t2_inst: "Put the conditional sentence in the correct order!",
    t3_inst: "Which word fits for the indirect question?",
    t4_inst: "Which word must stand directly after the comma? Highlight it!",
    t5_inst: "Is it Causal (Reason) or Conditional (Condition)? Sort them!",
  },
  hu: {
    explorer_title: "Logika és mondatszerkezet",
    t1_inst: "Melyik kötőszó igényli az igét a 2. helyen?",
    t2_inst: "Tedd a feltételes mondatot a helyes sorrendbe!",
    t3_inst: "Melyik szó illik a függő kérdéshez?",
    t4_inst: "Melyik szónak kell közvetlenül a vessző után állnia? Jelöld ki!",
    t5_inst: "Okhatározói (ok) vagy feltételes (feltétel)? Válogasd szét!",
    t5_bucket_kau: "Kausal (Ok)",
    t5_bucket_kon: "Konditional (Feltétel)",
  },
  ro: {
    explorer_title: "Logică și Structura Frazei",
    t1_inst: "Care conjuncție necesită verbul pe poziția a 2-a?",
    t2_inst: "Așază propoziția condițională în ordinea corectă!",
    t3_inst: "Care cuvânt se potrivește pentru întrebarea indirectă?",
    t4_inst: "Care cuvânt trebuie să stea direct după virgulă? Marchează-l!",
    t5_inst: "Este cauzală (motiv) sau condițională (condiție)? Sortează-le!",
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
      type: "gap-fill",
      sentence: "t1_gap_sentence",
      choices: ["t1_c1", "t1_c2", "t1_c3"],
      correctIndex: 0,
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
      type: "word-order",
      words: ["t2_w1", "t2_w2", "t2_w3", "t2_w4", "t2_w5", "t2_w6", "t2_w7"],
      correctOrder: [0, 1, 2, 3, 4, 5, 6],
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
      type: "gap-fill",
      sentence: "t3_gap_sentence2",
      choices: ["t3_c1", "t3_c2", "t3_c3"],
      correctIndex: 0,
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
      tokens: ["t4_w21", "t4_w22", "t4_w23", "t4_w24", "t4_w25", "t4_w26", "t4_w27", "t4_w28"],
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
    svg: () => <Topic2Svg />,
    bulletKeys: ["t5_b1", "t5_b2", "t5_b3"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [
        { id: "kau", label: "t5_bucket_kau" },
        { id: "kon", label: "t5_bucket_kon" },
      ],
      items: [
        { text: "t5_item_k1", bucketId: "kau" },
        { text: "t5_item_c1", bucketId: "kon" },
        { text: "t5_item_k2", bucketId: "kau" },
        { text: "t5_item_c2", bucketId: "kon" },
      ],
      instruction: "t5_inst",
      hint1: "t5_h1",
      hint2: "t5_h2",
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
  icon: "🧩",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const KausalKonditionalExplorer = memo(function KausalKonditionalExplorer({
  color = "#0EA5E9",
  onDone,
  lang = "de",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={7} explorerId="deutsch_k7_kausal_kon" color={color} lang={lang} onDone={onDone} />;
});

export default KausalKonditionalExplorer;
