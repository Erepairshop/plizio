"use client";
// PassiveExplorer — Island i2: Passiv Gesamtwiederholung (Comprehensive Passive K8)
// Topics: 1) Vorgangs- vs Zustandspassiv 2) Passiv alle Zeiten 3) Passiv mit Modalverb 4) Passiversatzformen 5) Mixed Quiz

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSTRATIONS ──────────────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#ECFDF5" rx="20" />
      <g transform="translate(120, 70)">
        <path d="M -70,0 L -30,0" stroke="#059669" strokeWidth="3" markerEnd="url(#arrow)" />
        <text x="-50" y="-15" fontSize="10" fill="#065F46" textAnchor="middle">Vorgang (werden)</text>
        <rect x="20" y="-20" width="50" height="40" rx="4" fill="#6EE7B7" stroke="#059669" />
        <text x="45" y="40" fontSize="10" fill="#065F46" textAnchor="middle">Zustand (sein)</text>
        <text x="0" y="-45" fontSize="14" fontWeight="bold" fill="#064E3B" textAnchor="middle">Aktion vs. Ergebnis</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0F9FF" rx="20" />
      <g transform="translate(120, 70)">
        <rect x="-90" y="-25" width="180" height="50" rx="8" fill="#BAE6FD" stroke="#0EA5E9" strokeWidth="2" />
        <text x="0" y="5" fontSize="12" fontWeight="bold" fill="#0369A1" textAnchor="middle">Modal + Partizip II + werden</text>
        <text x="0" y="45" fontSize="10" fill="#0284C7" textAnchor="middle">'muss erledigt werden'</text>
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Passiv-Master K8",
    // T1
    t1_title: "Vorgang vs. Zustand",
    t1_text: "Das Vorgangspassiv (werden) beschreibt die Handlung selbst. Das Zustandspassiv (sein) beschreibt das fertige Ergebnis nach der Handlung.",
    t1_b1: "Vorgang: Das Fenster wird geputzt (Aktion).",
    t1_b2: "Zustand: Das Fenster ist geputzt (Ergebnis).",
    t1_b3: "Wichtig: Zustandspassiv hat kein 'worden'.",
    t1_inst: "Vorgang oder Zustand? Ordne die Sätze zu!",
    t1_h1: "Suche nach dem Hilfsverb: 'wird' (Aktion) oder 'ist' (Zustand).",
    t1_bucket_vor: "Vorgangspassiv",
    t1_bucket_zus: "Zustandspassiv",
    t1_item_v1: "Das Essen wird gekocht.", t1_item_v2: "Die Tür wird geöffnet.",
    t1_item_z1: "Das Essen ist gekocht.", t1_item_z2: "Die Tür ist geöffnet.",
    t1_q: "Welches Passiv betont das fertige Ergebnis?",
    t1_q_a: "Zustandspassiv", t1_q_b: "Vorgangspassiv", t1_q_c: "Modalpassiv", t1_q_d: "Aktiv",

    // T2
    t2_title: "Passiv in allen Zeiten",
    t2_text: "In K8 musst du das Passiv sicher durch alle Zeiten jagen können. Besonders das Perfekt mit 'worden' ist wichtig.",
    t2_b1: "Präteritum: wurde gemacht.",
    t2_b2: "Perfekt: ist gemacht worden.",
    t2_b3: "Futur I: wird gemacht werden.",
    t2_inst: "Welche Zeitform liegt hier vor? Wähle aus!",
    t2_h1: "Achte auf 'wurde' (Vergangenheit) oder 'worden' (Perfekt).",
    t2_gap_sentence: "Die Brücke {gap} letztes Jahr gebaut.",
    t2_c1: "wurde", t2_c2: "wird", t2_c3: "ist",
    t2_q: "Wie lautet das Perfekt Passiv von 'fragen'?",
    t2_q_a: "ist gefragt worden", t2_q_b: "wurde gefragt", t2_q_c: "wird gefragt werden", t2_q_d: "hat gefragt worden",

    // T3
    t3_title: "Passiv mit Modalverben",
    t3_text: "Wenn ein Modalverb (können, müssen, sollen...) dazukommt, rutscht das 'werden' als Infinitiv ganz ans Ende hinter das Partizip II.",
    t3_b1: "muss erledigt werden.",
    t3_b2: "kann repariert werden.",
    t3_b3: "Das Modalverb wird konjugiert und steht auf Position 2.",
    t3_inst: "Bringe den Modal-Passiv-Satz in die richtige Reihenfolge!",
    t3_h1: "Das konjugierte 'muss' steht an Position 2.",
    t3_h2: "Die Endung ist immer '... Partizip II + werden.'",
    t3_w1: "Das", t3_w2: "Auto", t3_w3: "muss", t3_w4: "sofort", t3_w5: "repariert", t3_w6: "werden.",
    t3_q: "Was steht in einem Modal-Passiv-Satz ganz am Ende?",
    t3_q_a: "werden (Infinitiv)", t3_q_b: "worden", t3_q_c: "wird", t3_q_d: "ist",

    // T4
    t4_title: "Passiversatzformen",
    t4_text: "Anstatt Passiv zu nutzen, kannst du elegantere Formen wählen. Diese drücken oft eine Möglichkeit oder Notwendigkeit aus.",
    t4_b1: "sein + Adjektiv auf -bar (löslich, machbar).",
    t4_b2: "sich lassen + Infinitiv (Das lässt sich lösen).",
    t4_b3: "sein + zu + Infinitiv (Das ist zu lösen).",
    t4_inst: "Verbinde die Passiv-Bedeutung mit dem passenden Ersatz!",
    t4_h1: "Etwas, das man essen KANN, ist...",
    t4_h2: "Repariert werden KÖNNEN = lässt sich reparieren.",
    t4_l1: "kann gegessen werden", t4_r1: "ist essbar",
    t4_l2: "kann repariert werden", t4_r2: "lässt sich reparieren",
    t4_l3: "muss gemacht werden", t4_r3: "ist zu machen",
    t4_l4: "man macht es", t4_r4: "es wird gemacht",
    t4_q: "Was bedeutet der Ersatz 'Die Aufgabe ist zu lösen'?",
    t4_q_a: "Die Aufgabe muss gelöst werden.", t4_q_b: "Die Aufgabe ist schon fertig.", t4_q_c: "Man kann die Aufgabe nicht lösen.", t4_q_d: "Die Aufgabe löst sich von selbst.",

    // T5
    t5_title: "Mixed Quiz",
    t5_text: "Bist du ein Passiv-Experte? Teste dein Wissen über Zeiten, Modalverben und Ersatzformen.",
    t5_b1: "wurde = Präteritum.",
    t5_b2: "lässt sich = Passiversatz.",
    t5_b3: "worden = Perfekt.",
    t5_inst: "Markiere alle Passiversatzformen (sich lassen / -bar / sein+zu)!",
    t5_h1: "Suche nach Wörtern wie 'machbar' oder 'lässt'.",
    t5_h2: "Beispiel: 'Das Problem ist lösbar.'",
    t5_w21: "Das", t5_w22: "Rätsel", t5_w23: "ist", t5_w24: "leider", t5_w25: "nicht", t5_w26: "lösbar", t5_w27: "und", t5_w28: "lässt", t5_w29: "sich", t5_w30: "nicht", t5_w31: "knacken.",
    t5_q: "Welche Form ist KEIN Passiv und KEIN Passiversatz?",
    t5_q_a: "Er hat das Buch gelesen.", t5_q_b: "Das Buch wird gelesen.", t5_q_c: "Das Buch lässt sich lesen.", t5_q_d: "Das Buch ist gelesen worden.",
  },
  en: {
    explorer_title: "Passive Mastery K8",
    t1_inst: "Process or State? Sort the sentences!",
    t2_inst: "Which tense is this? Choose!",
    t3_inst: "Put the modal passive sentence in the correct order!",
    t4_inst: "Connect the passive meaning with the correct substitute!",
    t5_inst: "Highlight all passive substitute forms!",
  },
  hu: {
    explorer_title: "Passzív-mester K8",
    t1_inst: "Folyamat vagy állapot? Válogasd szét!",
    t1_bucket_vor: "Folyamat-passzív (werden)",
    t1_bucket_zus: "Állapot-passzív (sein)",
    t2_inst: "Melyik igeidő ez? Válaszd ki!",
    t3_inst: "Tedd a módbeli segédigés passzív mondatot a helyes sorrendbe!",
    t4_inst: "Kösd össze a passzív jelentést a megfelelő pótszerkezettel!",
    t5_inst: "Jelöld ki az összes passzív-pótló szerkezetet!",
  },
  ro: {
    explorer_title: "Expert Pasiv K8",
    t1_inst: "Acțiune sau Stare? Sortează propozițiile!",
    t2_inst: "La ce timp este aceasta? Alege!",
    t3_inst: "Așază propoziția pasivă cu verb modal în ordinea corectă!",
    t4_inst: "Leagă înțelesul pasiv de substituentul corect!",
    t5_inst: "Marchează toate formele de înlocuire a pasivului!",
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
      choices: ["t2_c1", "t2_c2", "t2_c3"], // wurde, wird, ist
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
      words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6"], // Das Auto muss sofort repariert werden.
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
  {
    infoTitle: "t4_title",
    infoText: "t4_text",
    svg: () => <Topic3Svg />,
    bulletKeys: ["t4_b1", "t4_b2", "t4_b3"],
    interactive: {
      type: "match-pairs",
      pairs: [
        { left: "t4_l1", right: "t4_r1" },
        { left: "t4_l2", right: "t4_r2" },
        { left: "t4_l3", right: "t4_r3" },
        { left: "t4_l4", right: "t4_r4" },
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
    svg: () => <Topic1Svg />,
    bulletKeys: ["t5_b1", "t5_b2", "t5_b3"],
    interactive: {
      type: "highlight-text",
      tokens: ["t5_w21", "t5_w22", "t5_w23", "t5_w24", "t5_w25", "t5_w26", "t5_w27", "t5_w28", "t5_w29", "t5_w30", "t5_w31"],
      correctIndices: [5, 7, 8], // lösbar, lässt sich
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
  icon: "⚙️",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const PassiveExplorer = memo(function PassiveExplorer({
  color = "#059669",
  onDone,
  lang = "de",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={8} explorerId="deutsch_k8_passive_overall" color={color} lang={lang} onDone={onDone} />;
});

export default PassiveExplorer;
