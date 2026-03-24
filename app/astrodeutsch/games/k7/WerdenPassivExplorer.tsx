"use client";
// WerdenPassivExplorer — Island i2: Passiv in verschiedenen Zeiten (K7)
// Topics: 1) Präsens Passiv 2) Präteritum Passiv 3) Perfekt Passiv 4) Futur I Passiv 5) Mixed Quiz

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSTRATIONS ──────────────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0FDF4" rx="20" />
      <g transform="translate(120, 70)">
        <text x="0" y="-30" fontSize="16" fontWeight="bold" fill="#166534" textAnchor="middle">Präsens Passiv</text>
        <rect x="-80" y="-10" width="160" height="40" rx="8" fill="#BBF7D0" stroke="#16A34A" strokeWidth="2" />
        <text x="0" y="15" fontSize="14" fontWeight="bold" fill="#14532D" textAnchor="middle">wird + Partizip II</text>
        <text x="0" y="45" fontSize="10" fill="#15803D" textAnchor="middle">„Das Auto wird repariert.“</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0F9FF" rx="20" />
      <g transform="translate(120, 70)">
        <text x="0" y="-30" fontSize="16" fontWeight="bold" fill="#0369A1" textAnchor="middle">Präteritum Passiv</text>
        <rect x="-80" y="-10" width="160" height="40" rx="8" fill="#BAE6FD" stroke="#0EA5E9" strokeWidth="2" />
        <text x="0" y="15" fontSize="14" fontWeight="bold" fill="#0284C7" textAnchor="middle">wurde + Partizip II</text>
        <text x="0" y="45" fontSize="10" fill="#0369A1" textAnchor="middle">„Das Auto wurde repariert.“</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FFF7ED" rx="20" />
      <g transform="translate(120, 70)">
        <text x="0" y="-35" fontSize="16" fontWeight="bold" fill="#9A3412" textAnchor="middle">Perfekt Passiv</text>
        <rect x="-100" y="-15" width="200" height="40" rx="8" fill="#FFEDD5" stroke="#EA580C" strokeWidth="2" />
        <text x="0" y="10" fontSize="12" fontWeight="bold" fill="#C2410C" textAnchor="middle">ist + Part. II + worden</text>
        <text x="0" y="45" fontSize="10" fill="#9A3412" textAnchor="middle">ACHTUNG: worden (nicht geworden!)</text>
      </g>
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FDF2F8" rx="20" />
      <g transform="translate(120, 70)">
        <text x="0" y="-35" fontSize="16" fontWeight="bold" fill="#9D174D" textAnchor="middle">Futur I Passiv</text>
        <rect x="-100" y="-15" width="200" height="40" rx="8" fill="#FBCFE8" stroke="#DB2777" strokeWidth="2" />
        <text x="0" y="10" fontSize="12" fontWeight="bold" fill="#BE185D" textAnchor="middle">wird + Part. II + werden</text>
        <text x="0" y="45" fontSize="10" fill="#9D174D" textAnchor="middle">„Das Auto wird repariert werden.“</text>
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Passiv-Zeiten K7",
    // T1
    t1_title: "Präsens Passiv",
    t1_text: "Das Präsens Passiv beschreibt, was gerade geschieht. Wir brauchen das Hilfsverb 'werden' im Präsens und das Partizip II am Satzende.",
    t1_b1: "Formel: wird/werden + Partizip II",
    t1_b2: "Beispiel: Das Brot wird gebacken.",
    t1_b3: "Aktiv: Man bäckt das Brot.",
    t1_inst: "Welches Hilfsverb passt in den Präsens-Satz?",
    t1_h1: "Das Subjekt 'Die Briefe' ist Plural.",
    t1_h2: "Wir brauchen 'werden' (Plural).",
    t1_gap_sentence: "Die Briefe {gap} heute abgeschickt.",
    t1_c1: "werden", t1_c2: "wird", t1_c3: "wurden",
    t1_q: "Wie lautet das Präsens Passiv von 'öffnen' (Singular)?",
    t1_q_a: "wird geöffnet", t1_q_b: "wurde geöffnet", t1_q_c: "ist geöffnet worden", t1_q_d: "wird geöffnet werden",

    // T2
    t2_title: "Präteritum Passiv",
    t2_text: "Wenn wir über die Vergangenheit berichten, nutzen wir das Präteritum von 'werden' (wurde).",
    t2_b1: "Formel: wurde/wurden + Partizip II",
    t2_b2: "Beispiel: Die Tür wurde geschlossen.",
    t2_b3: "Wichtig in Berichten und Erzählungen.",
    t2_inst: "Bringe den Präteritum-Passiv-Satz in die richtige Reihenfolge!",
    t2_h1: "Beginne mit dem Subjekt 'Das Haus'.",
    t2_h2: "Danach folgt das Hilfsverb 'wurde' und zuletzt das Partizip.",
    t2_w1: "Das", t2_w2: "Haus", t2_w3: "wurde", t2_w4: "letztes", t2_w5: "Jahr", t2_w6: "gebaut.",
    t2_q: "Welches Wort zeigt das Präteritum Passiv an?",
    t2_q_a: "wurde", t2_q_b: "wird", t2_q_c: "ist", t2_q_d: "werde",

    // T3
    t3_title: "Perfekt Passiv",
    t3_text: "Das Perfekt Passiv ist etwas komplizierter. Es nutzt 'sein' + Partizip II + 'worden'. Merke dir: 'worden' (nicht 'geworden')!",
    t3_b1: "Formel: ist/sind + Partizip II + worden",
    t3_b2: "Beispiel: Der Brief ist geschrieben worden.",
    t3_b3: "Perfekt Passiv = Zustand in der Vergangenheit.",
    t3_inst: "Welches Wort fehlt am Ende des Perfekt-Passiv-Satzes?",
    t3_h1: "Im Passiv Perfekt nutzen wir nicht 'geworden'.",
    t3_h2: "Die Kurzform lautet 'worden'.",
    t3_gap_sentence2: "Das Fenster ist geputzt {gap}.",
    t3_c1: "worden", t3_c2: "geworden", t3_c3: "werden",
    t3_q: "Wie lautet die korrekte Formel für das Perfekt Passiv?",
    t3_q_a: "sein + Partizip II + worden", t3_q_b: "haben + Partizip II + worden", t3_q_c: "werden + Partizip II + sein", t3_q_d: "sein + Partizip II + geworden",

    // T4
    t4_title: "Futur I Passiv",
    t4_text: "Wenn etwas in der Zukunft geschehen wird, nutzen wir das Futur I Passiv. Das ist eine 'Doppel-Werden'-Konstruktion.",
    t4_b1: "Formel: wird/werden + Partizip II + werden",
    t4_b2: "Beispiel: Die Brücke wird repariert werden.",
    t4_b3: "Das erste 'wird' steht auf Pos. 2, das 'werden' ganz am Ende.",
    t4_inst: "Bringe den Futur-Passiv-Satz in die richtige Reihenfolge!",
    t4_h1: "Das konjugierte 'wird' steht an Position 2.",
    t4_h2: "Die Verben am Ende lauten: 'geklärt werden.'",
    t4_w21: "Das", t4_w22: "Problem", t4_w23: "wird", t4_w24: "morgen", t4_w25: "geklärt", t4_w26: "werden.",
    t4_q: "Was steht ganz am Ende eines Futur I Passiv-Satzes?",
    t4_q_a: "werden", t4_q_b: "worden", t4_q_c: "wird", t4_q_d: "geworden",

    // T5
    t5_title: "Mixed Quiz",
    t5_text: "Erkennst du alle Passiv-Zeiten? Teste dein Wissen über Präsens, Präteritum, Perfekt und Futur.",
    t5_b1: "wird = Präsens",
    t5_b2: "wurde = Präteritum",
    t5_b3: "ist ... worden = Perfekt",
    t5_inst: "Welche Zeitform hat der Passiv-Satz? Sortiere!",
    t5_h1: "Suche nach den Signalwörtern (wurde, worden, werden).",
    t5_h2: "'worden' gehört zum Perfekt.",
    t5_bucket_prae: "Präsens Passiv",
    t5_bucket_perf: "Perfekt Passiv",
    t5_bucket_fut: "Futur Passiv",
    t5_item_p1: "Es wird gemacht.", t5_item_p2: "Es ist gemacht worden.",
    t5_item_f1: "Es wird gemacht werden.", t5_item_prae2: "Die Blumen werden gegossen.",
    t5_q: "Welcher Satz steht im Präteritum Passiv?",
    t5_q_a: "Die Torte wurde gegessen.", t5_q_b: "Die Torte wird gegessen.", t5_q_c: "Die Torte ist gegessen worden.", t5_q_d: "Die Torte wird gegessen werden.",
  },
  en: {
    explorer_title: "Passive Tenses",
    t1_inst: "Which auxiliary verb fits in the present passive sentence?",
    t2_inst: "Put the past passive sentence in the correct order!",
    t3_inst: "Which word is missing at the end of the perfect passive sentence?",
    t4_inst: "Put the future passive sentence in the correct order!",
    t5_inst: "Which tense does the passive sentence have? Sort them!",
  },
  hu: {
    explorer_title: "Szenvedő igeidők",
    t1_inst: "Melyik segédige illik a jelen idejű (Präsens) passzív mondatba?",
    t2_inst: "Tedd a múlt idejű (Präteritum) passzív mondatot a helyes sorrendbe!",
    t3_inst: "Melyik szó hiányzik a befejezett múltú (Perfekt) passzív mondat végéről?",
    t4_inst: "Tedd a jövő idejű (Futur) passzív mondatot a helyes sorrendbe!",
    t5_inst: "Melyik igeidőben van a passzív mondat? Válogasd szét!",
    t5_bucket_prae: "Jelen (Präsens)",
    t5_bucket_perf: "Befejezett múlt (Perfekt)",
    t5_bucket_fut: "Jövő (Futur)",
  },
  ro: {
    explorer_title: "Timpurile Pasivului",
    t1_inst: "Ce verb auxiliar se potrivește în propoziția la pasiv prezent?",
    t2_inst: "Așază propoziția la pasiv preterit în ordinea corectă!",
    t3_inst: "Ce cuvânt lipsește la finalul propoziției la pasiv perfect?",
    t4_inst: "Așază propoziția la pasiv viitor în ordinea corectă!",
    t5_inst: "La ce timp este propoziția pasivă? Sortează-le!",
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
      choices: ["t1_c1", "t1_c2", "t1_c3"], // werden, wird, wurden
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
      words: ["t2_w1", "t2_w2", "t2_w3", "t2_w4", "t2_w5", "t2_w6"], // Das Haus wurde letztes Jahr gebaut.
      correctOrder: [0, 1, 2, 3, 4, 5],
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
      choices: ["t3_c1", "t3_c2", "t3_c3"], // worden, geworden, werden
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
    svg: () => <Topic4Svg />,
    bulletKeys: ["t4_b1", "t4_b2", "t4_b3"],
    interactive: {
      type: "word-order",
      words: ["t4_w21", "t4_w22", "t4_w23", "t4_w24", "t4_w25", "t4_w26"], // Das Problem wird morgen geklärt werden.
      correctOrder: [0, 1, 2, 3, 4, 5],
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
      type: "drag-to-bucket",
      buckets: [
        { id: "prae", label: "t5_bucket_prae" },
        { id: "perf", label: "t5_bucket_perf" },
        { id: "fut", label: "t5_bucket_fut" },
      ],
      items: [
        { text: "t5_item_p1", bucketId: "prae" },
        { text: "t5_item_p2", bucketId: "perf" },
        { text: "t5_item_f1", bucketId: "fut" },
        { text: "t5_item_prae2", bucketId: "prae" },
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
  icon: "⏳",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const WerdenPassivExplorer = memo(function WerdenPassivExplorer({
  color = "#16A34A",
  onDone,
  lang = "de",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={7} explorerId="deutsch_k7_passive_tenses" color={color} lang={lang} onDone={onDone} />;
});

export default WerdenPassivExplorer;
