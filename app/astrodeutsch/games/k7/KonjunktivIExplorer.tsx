"use client";
// KonjunktivIExplorer — Island i1: Konjunktiv I & Indirekte Rede (K7)
// Topics: 1) Bildung (sei, habe, komme) 2) Indirekte Rede 3) Konjunktiv I vs. II 4) Ersatzformen 5) Mixed Quiz

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSTRATIONS ──────────────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0F9FF" rx="20" />
      <g transform="translate(120, 70)">
        <text x="0" y="-35" fontSize="16" fontWeight="bold" fill="#0369A1" textAnchor="middle">Bildung Konjunktiv I</text>
        <rect x="-80" y="-15" width="160" height="40" rx="8" fill="#BAE6FD" stroke="#0EA5E9" strokeWidth="2" />
        <text x="0" y="10" fontSize="12" fontWeight="bold" fill="#0369A1" textAnchor="middle">Stamm + -e, -est, -e, -en</text>
        <text x="0" y="45" fontSize="14" fontWeight="black" fill="#0284C7" textAnchor="middle">er komme, sie habe, es sei</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FDF2F8" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-60" y="-10" fontSize="24" textAnchor="middle">🗣️</text>
        <path d="M -30,-10 L 10,-10" stroke="#DB2777" strokeWidth="2" markerEnd="url(#arrow)" />
        <rect x="20" y="-25" width="80" height="40" rx="4" fill="#FBCFE8" stroke="#DB2777" strokeWidth="2" />
        <text x="60" y="2" fontSize="10" fontWeight="bold" fill="#9D174D" textAnchor="middle">Er sagt,</text>
        <text x="60" y="14" fontSize="10" fontWeight="bold" fill="#9D174D" textAnchor="middle">er gehe.</text>
        <text x="0" y="45" fontSize="12" fontWeight="bold" fill="#BE185D" textAnchor="middle">Indirekte Rede</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0FDF4" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-50" y="-5" fontSize="14" fontWeight="bold" fill="#166534" textAnchor="middle">Konj. I</text>
        <text x="-50" y="15" fontSize="10" fill="#15803D" textAnchor="middle">(News)</text>
        <text x="0" y="5" fontSize="20" fill="#22C55E" textAnchor="middle">vs</text>
        <text x="50" y="-5" fontSize="14" fontWeight="bold" fill="#166534" textAnchor="middle">Konj. II</text>
        <text x="50" y="15" fontSize="10" fill="#15803D" textAnchor="middle">(Träume)</text>
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Konjunktiv I & Indirekte Rede",
    // T1
    t1_title: "Bildung des Konjunktiv I",
    t1_text: "Der Konjunktiv I wird meist vom Präsens-Stamm abgeleitet. Er hat eigene Endungen: -e, -est, -e, -en, -et, -en. Die Form von 'sein' ist unregelmäßig.",
    t1_b1: "ich sei, du seiest, er sei, wir seien...",
    t1_b2: "er komme, er habe, er wolle",
    t1_b3: "Wichtig: Die 3. Person Singular (er/sie/es) endet immer auf -e.",
    t1_inst: "Welche Form von 'sein' ist der korrekte Konjunktiv I (3. Person)?",
    t1_h1: "Es ist eine kurze, unregelmäßige Form.",
    t1_h2: "Er ___ glücklich, sagt man.",
    t1_gap_sentence: "Der Reporter berichtet, der Minister {gap} bereit.",
    t1_c1: "sei", t1_c2: "ist", t1_c3: "wäre",
    t1_q: "Wie lautet die Endung der 3. Person Singular im Konjunktiv I?",
    t1_q_a: "-e", t1_q_b: "-t", t1_q_c: "-en", t1_q_d: "-st",

    // T2
    t2_title: "Indirekte Rede",
    t2_text: "Wir nutzen den Konjunktiv I, um die Aussagen anderer neutral wiederzugeben (z.B. in der Zeitung). So zeigen wir: Das ist nicht meine Meinung, sondern ein Zitat.",
    t2_b1: "Direkt: Er sagt: „Ich habe keine Zeit.“",
    t2_b2: "Indirekt: Er sagt, er habe keine Zeit.",
    t2_b3: "Oft wird 'dass' weggelassen, wenn das Verb im Konjunktiv I steht.",
    t2_inst: "Bringe den Satz in der indirekten Rede in die richtige Reihenfolge!",
    t2_h1: "Beginne mit dem Begleitsatz: 'Sie sagt,'.",
    t2_h2: "Das Subjekt 'sie' folgt, dann das Verb 'komme'.",
    t2_w1: "Sie", t2_w2: "sagt,", t2_w3: "sie", t2_w4: "komme", t2_w5: "später.",
    t2_q: "In welcher Textsorte findet man den Konjunktiv I besonders häufig?",
    t2_q_a: "In Zeitungsberichten und Nachrichten", t2_q_b: "In Märchen", t2_q_c: "In Comics", t2_q_d: "In Liebesbriefen",

    // T3
    t3_title: "Konjunktiv I vs. Konjunktiv II",
    t3_text: "Konjunktiv I nutzen wir für Berichte. Konjunktiv II nutzen wir für Wünsche vagy Träume. Aber: Wenn der Konjunktiv I wie der normale Indikativ (Präsens) aussieht, MUSS man den Konjunktiv II als Ersatz nehmen.",
    t3_b1: "Konj. I: sie gehen (sieht aus wie Präsens!)",
    t3_b2: "Ersatz: sie gingen (Konjunktiv II)",
    t3_b3: "Konj. I = Distanz / Konj. II = Irrealität",
    t3_inst: "Muss man hier den Konjunktiv II als Ersatz nehmen? Sortiere!",
    t3_h1: "Prüfe, ob die Konjunktiv I Form (Präsensstamm + e/en) eindeutig ist.",
    t3_h2: "'er gehe' ist eindeutig (Konj I). 'sie gehen' sieht aus wie Präsens (Ersatz nötig).",
    t3_bucket_ok: "Konjunktiv I (eindeutig)",
    t3_bucket_ersatz: "Konjunktiv II (Ersatz nötig)",
    t3_item_ok1: "er komme", t3_item_ok2: "er sei",
    t3_item_er1: "sie kommen", t3_item_er2: "wir haben",
    t3_q: "Wann benutzt man den Konjunktiv II in der indirekten Rede?",
    t3_q_a: "Wenn die Konjunktiv I Form mit dem Indikativ identisch ist", t3_q_b: "Immer", t3_q_c: "Niemals", t3_q_d: "Nur bei Fragen",

    // T4
    t4_title: "Ersatzformen (würde + Infinitiv)",
    t4_text: "In der modernen Sprache (besonders beim Sprechen) nutzen wir oft 'würde' + Infinitiv, wenn die ragozott Konjunktiv-Formen zu altmodisch vagy kompliziert klingen.",
    t4_b1: "alt: er hülfe",
    t4_b2: "modern: er würde helfen",
    t4_b3: "In der indirekten Rede ist Konj. I aber eleganter.",
    t4_inst: "Welche Ersatzform passt? 'Er sagt, er ___ das Auto ___.'",
    t4_h1: "Wir nutzen die 'würde'-Klammer.",
    t4_h2: "würde + reparieren.",
    t4_gap_sentence2: "Er sagt, er {gap} das Auto {gap}.",
    t4_c1: "würde ... reparieren", t4_c2: "werde ... reparieren", t4_c3: "wollte ... reparieren",
    t4_q: "Welche Form von 'würde' gehört zu 'sie' (Plural)?",
    t4_q_a: "würden", t4_q_b: "würde", t4_q_c: "würdet", t4_q_d: "würdest",

    // T5
    t5_title: "Mixed Quiz",
    t5_text: "Bist du bereit für das Nachrichten-Studio? Teste dein Wissen über Bildung, Verwendung und Ersatzformen.",
    t5_b1: "3. Person Singular Konj. I endet auf -e.",
    t5_b2: "sein ➔ sei.",
    t5_b3: "Komma vor der indirekten Rede.",
    t5_inst: "Markiere das Verb im Konjunktiv I in diesem Satz!",
    t5_h1: "Suche das Wort, das anzeigt, was der Minister gesagt hat.",
    t5_h2: "Das Wort ist 'habe'.",
    t5_w21: "Der", t5_w22: "Sprecher", t5_w23: "erklärte,", t5_w24: "dass", t5_w25: "er", t5_w26: "keine", t5_w27: "Schuld", t5_w28: "habe.",
    t5_q: "Welcher Satz ist eine korrekte indirekte Rede?",
    t5_q_a: "Sie sagt, sie sei krank.", t5_q_b: "Sie sagt: ich bin krank.", t5_q_c: "Sie sagt, dass sie ist krank.", t5_q_d: "Sie sagt sie wäre krank.",
  },
  en: {
    explorer_title: "Konjunktiv I & Indirect Speech",
    t1_inst: "Which form of 'sein' is the correct Konjunktiv I (3rd person)?",
    t2_inst: "Put the sentence in indirect speech in the correct order!",
    t3_inst: "Do you have to use Konjunktiv II as a substitute? Sort them!",
    t3_bucket_ok: "Konj. I (Clear)",
    t3_bucket_ersatz: "Konj. II (Needs Sub)",
    t4_inst: "Which substitute form fits?",
    t5_inst: "Highlight the verb in Konjunktiv I in this sentence!",
  },
  hu: {
    explorer_title: "Konjunktiv I és Függő beszéd",
    t1_inst: "A 'sein' melyik alakja a helyes Konjunktiv I (E/3)?",
    t2_inst: "Tedd a függő beszédű mondatot a helyes sorrendbe!",
    t3_inst: "Kell ide a Konjunktiv II pótlékként? Válogasd szét!",
    t3_bucket_ok: "Konj. I (Egyértelmű)",
    t3_bucket_ersatz: "Konj. II (Pótolni kell)",
    t4_inst: "Melyik pótforma illik ide?",
    t5_inst: "Jelöld ki a Konjunktiv I alakú igét a mondatban!",
  },
  ro: {
    explorer_title: "Konjunktiv I & Vorbirea Indirectă",
    t1_inst: "Care formă a lui 'sein' este corectul Konjunktiv I (pers. a 3-a)?",
    t2_inst: "Așază propoziția la vorbire indirectă în ordinea corectă!",
    t3_inst: "Trebuie folosit Konjunktiv II ca înlocuitor? Sortează!",
    t3_bucket_ok: "Konj. I (Clar)",
    t3_bucket_ersatz: "Konj. II (Necesită Înloc.)",
    t4_inst: "Ce formă de înlocuire se potrivește?",
    t5_inst: "Marchează verbul la Konjunktiv I din această propoziție!",
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
      words: ["t2_w1", "t2_w2", "t2_w3", "t2_w4", "t2_w5"],
      correctOrder: [0, 1, 2, 3, 4],
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
      type: "drag-to-bucket",
      buckets: [
        { id: "ok", label: "t3_bucket_ok" },
        { id: "er", label: "t3_bucket_ersatz" },
      ],
      items: [
        { text: "t3_item_ok1", bucketId: "ok" },
        { text: "t3_item_er1", bucketId: "er" },
        { text: "t3_item_ok2", bucketId: "ok" },
        { text: "t3_item_er2", bucketId: "er" },
      ],
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
      type: "gap-fill",
      sentence: "t4_gap_sentence2",
      choices: ["t4_c1", "t4_c2", "t4_c3"],
      correctIndex: 0,
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
      type: "highlight-text",
      tokens: ["t5_w21", "t5_w22", "t5_w23", "t5_w24", "t5_w25", "t5_w26", "t5_w27", "t5_w28"],
      correctIndices: [7], // habe.
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
  icon: "🎙️",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const KonjunktivIExplorer = memo(function KonjunktivIExplorer({
  color = "#BE185D",
  onDone,
  lang = "de",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={7} explorerId="deutsch_k7_konj_i" color={color} lang={lang} onDone={onDone} />;
});

export default KonjunktivIExplorer;
