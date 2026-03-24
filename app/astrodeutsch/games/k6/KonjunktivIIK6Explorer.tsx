"use client";
// KonjunktivIIK6Explorer — Island i2: Konjunktiv II (K6)
// Topics: 1) Bildung (wäre, hätte, könnte) 2) Irreale Wünsche 3) Höfliche Bitten 4) würde + Infinitiv 5) Gemischtes Quiz

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSTRATIONS ──────────────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0F9FF" rx="20" />
      <g transform="translate(120, 70)">
        <text x="0" y="-30" fontSize="16" fontWeight="bold" fill="#0369A1" textAnchor="middle">Die Basis-Formen</text>
        <path d="M -80,10 Q -40,-40 0,10 T 80,10" fill="none" stroke="#0EA5E9" strokeWidth="2" strokeDasharray="4 2" />
        <text x="-60" y="30" fontSize="14" fontWeight="bold" fill="#0284C7" textAnchor="middle">wäre</text>
        <text x="0" y="30" fontSize="14" fontWeight="bold" fill="#0284C7" textAnchor="middle">hätte</text>
        <text x="60" y="30" fontSize="14" fontWeight="bold" fill="#0284C7" textAnchor="middle">könnte</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FDF2F8" rx="20" />
      <g transform="translate(120, 70)">
        <path d="M -50,-20 A 40,30 0 1,1 50,-20 A 40,30 0 1,1 -50,-20" fill="white" stroke="#F472B6" strokeWidth="2" />
        <text x="0" y="-15" fontSize="20" textAnchor="middle">☁️</text>
        <text x="0" y="10" fontSize="12" fontWeight="bold" fill="#9D174D" textAnchor="middle">Wenn ich ... wäre</text>
        <text x="0" y="40" fontSize="10" fill="#BE185D" textAnchor="middle">Irreale Wünsche</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0FDFA" rx="20" />
      <g transform="translate(120, 70)">
        <rect x="-70" y="-20" width="140" height="40" rx="20" fill="#99F6E4" />
        <text x="0" y="5" fontSize="12" fontWeight="bold" fill="#0D9488" textAnchor="middle">Könnten Sie bitte...?</text>
        <text x="0" y="40" fontSize="14" textAnchor="middle">🙏☕</text>
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Konjunktiv II Welt",
    // T1
    t1_title: "Die Bildung von Konjunktiv II",
    t1_text: "Den Konjunktiv II nutzen wir für Dinge, die nicht real sind. Die wichtigsten unregelmäßigen Formen leiten sich vom Präteritum ab, bekommen aber einen Umlaut.",
    t1_b1: "sein ➔ wäre",
    t1_b2: "haben ➔ hätte",
    t1_b3: "können ➔ könnte",
    t1_inst: "Verbinde das Verb mit seiner Konjunktiv-II-Form!",
    t1_h1: "Suche nach dem Umlaut (ä, ö, ü).",
    t1_h2: "sein wird zu wäre, haben zu hätte.",
    t1_l1: "sein", t1_r1: "wäre",
    t1_l2: "haben", t1_r2: "hätte",
    t1_l3: "können", t1_r3: "könnte",
    t1_l4: "müssen", t1_r4: "müsste",
    t1_q: "Wie lautet der Konjunktiv II von 'haben' (ich)?",
    t1_q_a: "hätte", t1_q_b: "habe", t1_q_c: "hatte", t1_q_d: "hübte",

    // T2
    t2_title: "Irreale Wünsche",
    t2_text: "Mit 'Wenn...' Sätzen drücken wir Wünsche aus, die zurzeit nicht wahr sind. Das konjugierte Verb steht im Nebensatz am Ende.",
    t2_b1: "Wenn ich Zeit hätte, ...",
    t2_b2: "Wenn ich reich wäre, ...",
    t2_b3: "Oft benutzen wir 'doch' vagy 'nur' zur Verstärkung.",
    t2_inst: "Bringe den Wunsch-Satz in die richtige Reihenfolge!",
    t2_h1: "Beginne mit 'Wenn'.",
    t2_h2: "Das Verb 'wäre' muss ans Ende des ersten Teils.",
    t2_w1: "Wenn", t2_w2: "ich", t2_w3: "ein", t2_w4: "Vogel", t2_w5: "wäre,", t2_w6: "würde", t2_w7: "ich", t2_w8: "fliegen.",
    t2_q: "Welches Wort verstärkt einen irrealen Wunsch oft?",
    t2_q_a: "nur", t2_q_b: "sehr", t2_q_c: "nicht", t2_q_d: "vielleicht",

    // T3
    t3_title: "Höfliche Bitten",
    t3_text: "Möchtest du etwas besonders höflich fragen? Dann benutze 'könnten' vagy 'würden'. Das klingt viel netter als ein Befehl.",
    t3_b1: "Befehl: Hilf mir!",
    t3_b2: "Höflich: Könntest du mir bitte helfen?",
    t3_b3: "Sehr höflich: Würden Sie mir das Fenster öffnen?",
    t3_inst: "Welches Wort macht die Bitte höflich?",
    t3_h1: "Wir fragen nach einer Hilfe.",
    t3_h2: "Das Wort ist 'Könnten'.",
    t3_gap_sentence: "{gap} Sie mir bitte die Tür öffnen?",
    t3_c1: "Könnten", t3_c2: "Können", t3_c3: "Kannst",
    t3_q: "Warum nutzt man den Konjunktiv II in einer Frage?",
    t3_q_a: "Um höflicher zu wirken.", t3_q_b: "Um lauter zu sprechen.", t3_q_c: "Um eine Vergangenheit auszudrücken.", t3_q_d: "Es ist ein Fehler.",

    // T4
    t4_title: "Die würde + Infinitiv Form",
    t4_text: "Für fast alle Verben (außer sein, haben und Modalverben) benutzen wir die 'würde'-Form. Das ist einfacher, als alte Formen wie 'liefe' vagy 'sänge' zu nutzen.",
    t4_b1: "würde + spielen, gehen, lachen...",
    t4_b2: "Beispiel: Ich würde gerne ins Kino gehen.",
    t4_b3: "würde steht an Pos. 2, der Infinitiv am Ende.",
    t4_inst: "Ist es die Grundform vagy die würde-Form? Sortiere!",
    t4_h1: "Wörter mit 'würde' gehören in die Konjunktiv-Kiste.",
    t4_h2: "Beispiel: 'würde gehen' ist Konjunktiv II.",
    t4_bucket_ind: "Indikativ (Real)",
    t4_bucket_konj: "Konjunktiv (würde)",
    t4_item_r1: "ich gehe", t4_item_r2: "du spielst",
    t4_item_k1: "ich würde gehen", t4_item_k2: "du würdest spielen",
    t4_q: "Wann benutzt man die 'würde'-Ersatzform?",
    t4_q_a: "Bei den meisten Vollverben.", t4_q_b: "Nur bei 'sein' und 'haben'.", t4_q_c: "In der Vergangenheit.", t4_q_d: "Bei Befehlen.",

    // T5
    t5_title: "Gemischtes Quiz",
    t5_text: "Bist du bereit? Teste dein Wissen über Wünsche, Höflichkeit und die Bildung des Konjunktiv II.",
    t5_b1: "ä, ö, ü = oft Konjunktiv.",
    t5_b2: "würde + Infinitiv.",
    t5_b3: "Höflichkeit siegt!",
    t5_inst: "Welcher Satz ist ein irrealer Wunsch?",
    t5_h1: "Suche nach einem Satz, der mit 'Wenn' beginnt und nicht wahr ist.",
    t5_h2: "Beispiel: Wenn ich Zeit hätte...",
    t5_w1: "Wenn", t5_w2: "ich", t5_w3: "doch", t5_w4: "schon", t5_w5: "Ferien", t5_w6: "hätte!",
    t5_q: "Was ist der Konjunktiv II von 'gehen' (gebräuchliche Form)?",
    t5_q_a: "würde gehen", t5_q_b: "ginge", t5_q_c: "gehe", t5_q_d: "gehte",
  },
  en: {
    explorer_title: "Konjunktiv II World",
    t1_inst: "Connect the verb to its Konjunktiv II form!",
    t2_inst: "Put the wish sentence in the correct order!",
    t3_inst: "Which word makes the request polite?",
    t4_inst: "Is it the basic form or the 'würde' form? Sort them!",
    t5_inst: "Which sentence is an unreal wish?",
  },
  hu: {
    explorer_title: "A feltételes mód világa",
    t1_inst: "Kösd össze az igét a Konjunktiv II alakjával!",
    t2_inst: "Tedd a vágyat kifejező mondatot a helyes sorrendbe!",
    t3_inst: "Melyik szó teszi udvariassá a kérést?",
    t4_inst: "Ez alapalak vagy 'würde'-alak? Válogasd szét!",
    t5_inst: "Melyik mondat fejez ki irreális vágyat?",
  },
  ro: {
    explorer_title: "Lumea Konjunktiv II",
    t1_inst: "Conectează verbul cu forma sa de Konjunktiv II!",
    t2_inst: "Așază propoziția dorinței în ordinea corectă!",
    t3_inst: "Care cuvânt face rugămintea politicoasă?",
    t4_inst: "Este forma de bază sau forma cu 'würde'? Sortează-le!",
    t5_inst: "Care propoziție este o dorință ireală?",
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
      type: "match-pairs",
      pairs: [
        { left: "t1_l1", right: "t1_r1" },
        { left: "t1_l2", right: "t1_r2" },
        { left: "t1_l3", right: "t1_r3" },
        { left: "t1_l4", right: "t1_r4" },
      ],
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
      words: ["t2_w1", "t2_w2", "t2_w3", "t2_w4", "t2_w5", "t2_w6", "t2_w7", "t2_w8"],
      correctOrder: [0, 1, 2, 3, 4, 5, 6, 7],
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
      sentence: "t3_gap_sentence",
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
      type: "drag-to-bucket",
      buckets: [
        { id: "ind", label: "t4_bucket_ind" },
        { id: "konj", label: "t4_bucket_konj" },
      ],
      items: [
        { text: "t4_item_r1", bucketId: "ind" },
        { text: "t4_item_k1", bucketId: "konj" },
        { text: "t4_item_r2", bucketId: "ind" },
        { text: "t4_item_k2", bucketId: "konj" },
      ],
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
      tokens: ["t5_w1", "t5_w2", "t5_w3", "t5_w4", "t5_w5", "t5_w6"],
      correctIndices: [0, 1, 2, 3, 4, 5],
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
  icon: "✨",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const KonjunktivIIK6Explorer = memo(function KonjunktivIIK6Explorer({
  color = "#DB2777",
  onDone,
  lang = "de",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={6} explorerId="deutsch_k6_konjunktiv_ii" color={color} lang={lang} onDone={onDone} />;
});

export default KonjunktivIIK6Explorer;
