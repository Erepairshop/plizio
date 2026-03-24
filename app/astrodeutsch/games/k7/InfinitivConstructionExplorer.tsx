"use client";
// InfinitivConstructionExplorer — Island i8: Infinitivkonstruktionen (K7)
// Topics: 1) um...zu 2) ohne...zu 3) anstatt...zu 4) haben/sein + zu 5) Gemischtes Quiz

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSTRATIONS ──────────────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0FDFA" rx="20" />
      <g transform="translate(120, 70)">
        <text x="0" y="-35" fontSize="16" fontWeight="bold" fill="#0D9488" textAnchor="middle">Zweck (Wozu?)</text>
        <rect x="-80" y="-10" width="160" height="40" rx="8" fill="#99F6E4" stroke="#0D9488" strokeWidth="2" />
        <text x="0" y="15" fontSize="18" fontWeight="black" fill="#0F766E" textAnchor="middle">um ... zu</text>
        <path d="M 40,30 L 60,10" stroke="#14B8A6" strokeWidth="2" markerEnd="url(#arrow)" />
      </g>
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F5F3FF" rx="20" />
      <g transform="translate(120, 70)">
        <text x="0" y="-30" fontSize="14" fontWeight="bold" fill="#5B21B6" textAnchor="middle">haben/sein + zu</text>
        <rect x="-90" y="0" width="180" height="35" rx="4" fill="#DDD6FE" />
        <text x="0" y="22" fontSize="11" fontWeight="bold" fill="#4C1D95" textAnchor="middle">müssen / können Ersatz</text>
        <text x="0" y="45" fontSize="9" fill="#6D28D9" textAnchor="middle">„Das ist zu tun.“ = „Das muss getan werden.“</text>
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Infinitiv-Spezialist K7",
    // T1
    t1_title: "Zweck: um ... zu",
    t1_text: "Die Konstruktion 'um...zu' drückt eine Absicht oder ein Ziel aus. Sie antwortet auf die Frage 'Wozu?' oder 'Zu welchem Zweck?'. Wichtig: Das Subjekt muss in beiden Satzteilen gleich sein!",
    t1_b1: "Beispiel: Ich lerne viel, UM gute Noten ZU bekommen.",
    t1_b2: "Vergleich: Ich lerne viel, DAMIT meine Eltern froh sind. (Anderes Subjekt!)",
    t1_b3: "Das Komma trennt den Infinitivsatz ab.",
    t1_inst: "Bringe den Satz in die richtige Reihenfolge!",
    t1_h1: "Beginne mit 'Er trainiert,'.",
    t1_h2: "Dann folgt 'um', das Adjektiv und am Ende 'zu gewinnen.'",
    t1_w1: "Er", t1_w2: "trainiert,", t1_w3: "um", t1_w4: "schnell", t1_w5: "zu", t1_w6: "gewinnen.",
    t1_q: "Wann benutzt man 'um...zu' anstelle von 'damit'?",
    t1_q_a: "Wenn das Subjekt in beiden Sätzen identisch ist.", t1_q_b: "Wenn es regnet.", t1_q_c: "Wenn das Subjekt wechselt.", t1_q_d: "Immer.",

    // T2
    t2_title: "Begleitumstand: ohne ... zu",
    t2_text: "'ohne...zu' beschreibt, dass eine erwartete Handlung NICHT passiert. Es zeigt einen negativen Begleitumstand.",
    t2_b1: "Beispiel: Er ging weg, OHNE Tschüss ZU sagen.",
    t2_b2: "Beispiel: Sie lachte, OHNE den Grund ZU nennen.",
    t2_b3: "Auch hier ist das Komma Pflicht.",
    t2_inst: "Welches Wort passt in die Lücke?",
    t2_h1: "Er hat die Prüfung bestanden, aber er hat nicht gelernt.",
    t2_h2: "Wir brauchen 'ohne...zu'.",
    t2_gap_sentence: "Er bestand den Test, {gap} gelernt zu haben.",
    t2_c1: "ohne", t2_c2: "anstatt", t2_c3: "um",
    t2_q: "Was drückt 'ohne...zu' aus?",
    t2_q_a: "Dass etwas nicht geschieht.", t2_q_b: "Einen Zweck.", t2_q_c: "Eine Zeitangabe.", t2_q_d: "Einen Ort.",

    // T3
    t3_title: "Alternative: anstatt ... zu",
    t3_text: "'anstatt...zu' (oder kurz 'statt...zu') drückt aus, dass man eine Handlung durch eine andere ersetzt. Man tut das Eine, aber nicht das Andere.",
    t3_b1: "Beispiel: Er spielt Fußball, ANSTATT Hausaufgaben ZU machen.",
    t3_b2: "Beispiel: Statt zu schlafen, las er ein Buch.",
    t3_b3: "Die gewählte Alternative steht im Hauptsatz.",
    t3_inst: "Verbinde die passenden Satzteile!",
    t3_h1: "Was macht man 'anstatt zu lernen'?",
    t3_h2: "Man schaut zum Beispiel einen Film.",
    t3_l1: "Er sieht fern,", t3_r1: "statt zu lernen.",
    t3_l2: "Sie geht wandern,", t3_r2: "statt zu arbeiten.",
    t3_l3: "Wir essen Pizza,", t3_r3: "statt zu kochen.",
    t3_l4: "Ich schlafe,", t3_r4: "statt zu lesen.",
    t3_q: "Was bedeutet 'anstatt...zu'?",
    t3_q_a: "Eine Alternative (Etwas anderes tun)", t3_q_b: "Einen Grund", t3_q_c: "Einen Zweck", t3_q_d: "Eine Folge",

    // T4
    t4_title: "haben / sein + zu + Infinitiv",
    t4_text: "Das sind sehr elegante Formen. 'haben + zu' bedeutet 'müssen' (aktiv). 'sein + zu' bedeutet 'müssen' oder 'können' (passiv).",
    t4_b1: "haben + zu: Ich habe viel zu tun (Ich muss viel tun).",
    t4_b2: "sein + zu: Das ist zu machen (Das kann/muss gemacht werden).",
    t4_b3: "Wichtig in offiziellen Texten.",
    t4_inst: "Welcher Satz bedeutet dasselbe wie 'Das muss repariert werden.'?",
    t4_h1: "Suche nach einer Form mit 'sein + zu'.",
    t4_h2: "Die Antwort ist 'Das ist zu reparieren.'",
    t4_gap_sentence2: "Das Auto {gap} zu reparieren.",
    t4_c1: "ist", t4_c2: "hat", t4_c3: "wird",
    t4_q: "Was bedeutet der Satz: 'Wir haben noch viel zu klären.'?",
    t4_q_a: "Wir müssen noch viel klären.", t4_q_b: "Wir klären nichts.", t4_q_c: "Wir haben viel Zeit.", t4_q_d: "Das ist unmöglich.",

    // T5
    t5_title: "Mixed Quiz",
    t5_text: "Kombiniere alles! Erkennst du Zweck, Alternative und die Ersatzformen für Modalverben?",
    t5_b1: "um = Wozu?",
    t5_b2: "ohne = Nicht passiert.",
    t5_b3: "sein + zu = Passiv-Ersatz.",
    t5_inst: "Markiere die Infinitivkonstruktion in diesem Satz!",
    t5_h1: "Suche nach dem Teil, der mit 'um' beginnt.",
    t5_h2: "Der Teil ist 'um gesund zu bleiben'.",
    t5_w21: "Man", t5_w22: "muss", t5_w23: "Sport", t5_w24: "treiben,", t5_w25: "um", t5_w26: "gesund", t5_w27: "zu", t5_w28: "bleiben.",
    t5_q: "Welches Wort leitet eine Alternative ein?",
    t5_q_a: "anstatt", t1_q_a: "ohne", t3_q_a: "um", t4_q_a: "damit",
  },
  en: {
    explorer_title: "Infinitive Expert",
    t1_inst: "Put the sentence in the correct order!",
    t2_inst: "Which word fits in the gap?",
    t3_inst: "Connect the matching sentence parts!",
    t4_inst: "Which sentence means the same as 'Das muss repariert werden.'?",
    t5_inst: "Highlight the infinitive construction in this sentence!",
  },
  hu: {
    explorer_title: "Igenév-specialista",
    t1_inst: "Tedd a mondatot a helyes sorrendbe!",
    t2_inst: "Melyik szó illik az űrbe?",
    t3_inst: "Kösd össze a passzoló mondatrészeket!",
    t4_inst: "Melyik mondat jelenti ugyanazt, mint a 'Das muss repariert werden.'?",
    t5_inst: "Jelöld ki a főnévi igeneves szerkezetet a mondatban!",
  },
  ro: {
    explorer_title: "Expert în Infinitive",
    t1_inst: "Așază propoziția în ordinea corectă!",
    t2_inst: "Care cuvânt se potrivește în spațiu?",
    t3_inst: "Conectează părțile de propoziție potrivite!",
    t4_inst: "Care propoziție are același înțeles ca „Das muss repariert werden.”?",
    t5_inst: "Marchează construcția cu infinitiv din această propoziție!",
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
      type: "word-order",
      words: ["t1_w1", "t1_w2", "t1_w3", "t1_w4", "t1_w5", "t1_w6"], // Er trainiert, um schnell zu gewinnen.
      correctOrder: [0, 1, 2, 3, 4, 5],
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
    svg: () => <Topic1Svg />,
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "gap-fill",
      sentence: "t2_gap_sentence",
      choices: ["t2_c1", "t2_c2", "t2_c3"], // ohne, anstatt, um
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
      type: "match-pairs",
      pairs: [
        { left: "t3_l1", right: "t3_r1" },
        { left: "t3_l2", right: "t3_r2" },
        { left: "t3_l3", right: "t3_r3" },
        { left: "t3_l4", right: "t3_r4" },
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
    svg: () => <Topic4Svg />,
    bulletKeys: ["t4_b1", "t4_b2", "t4_b3"],
    interactive: {
      type: "gap-fill",
      sentence: "t4_gap_sentence2",
      choices: ["t4_c1", "t4_c2", "t4_c3"], // ist, hat, wird
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
    svg: () => <Topic4Svg />,
    bulletKeys: ["t5_b1", "t5_b2", "t5_b3"],
    interactive: {
      type: "highlight-text",
      tokens: ["t5_w21", "t5_w22", "t5_w23", "t5_w24", "t5_w25", "t5_w26", "t5_w27", "t5_w28"],
      correctIndices: [4, 5, 6, 7], // um gesund zu bleiben.
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
  icon: "🧬",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const InfinitivConstructionExplorer = memo(function InfinitivConstructionExplorer({
  color = "#0D9488",
  onDone,
  lang = "de",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={7} explorerId="deutsch_k7_infinitiv_const" color={color} lang={lang} onDone={onDone} />;
});

export default InfinitivConstructionExplorer;
