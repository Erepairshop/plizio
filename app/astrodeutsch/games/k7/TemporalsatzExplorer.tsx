"use client";
// TemporalsatzExplorer — Island i7: Temporalsätze (K7)
// Topics: 1) als vs. wenn 2) bevor vs. nachdem 3) während vs. bis 4) seit / seitdem 5) Gemischtes Quiz

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSTRATIONS ──────────────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0F9FF" rx="20" />
      <g transform="translate(120, 70)">
        <text x="0" y="-35" fontSize="16" fontWeight="bold" fill="#0369A1" textAnchor="middle">Zeitpunkt</text>
        <line x1="-80" y1="10" x2="80" y2="10" stroke="#0EA5E9" strokeWidth="2" />
        <circle cx="-40" cy="10" r="6" fill="#0284C7" />
        <text x="-40" y="30" fontSize="12" fontWeight="bold" fill="#0369A1" textAnchor="middle">als</text>
        <circle cx="20" cy="10" r="4" fill="#7DD3FC" />
        <circle cx="40" cy="10" r="4" fill="#7DD3FC" />
        <circle cx="60" cy="10" r="4" fill="#7DD3FC" />
        <text x="40" y="30" fontSize="12" fontWeight="bold" fill="#0369A1" textAnchor="middle">wenn</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0FDF4" rx="20" />
      <g transform="translate(120, 70)">
        <text x="0" y="-35" fontSize="16" fontWeight="bold" fill="#166534" textAnchor="middle">Abfolge (Sequence)</text>
        <rect x="-80" y="-10" width="60" height="30" rx="4" fill="#BBF7D0" />
        <text x="-50" y="10" fontSize="10" fill="#166534" textAnchor="middle">1. davor</text>
        <path d="M -15,5 L 15,5" stroke="#22C55E" strokeWidth="2" markerEnd="url(#arrow)" />
        <rect x="20" y="-10" width="60" height="30" rx="4" fill="#4ADE80" />
        <text x="50" y="10" fontSize="10" fill="#14532D" textAnchor="middle">2. danach</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FFF7ED" rx="20" />
      <g transform="translate(120, 70)">
        <text x="0" y="-30" fontSize="14" fontWeight="bold" fill="#9A3412" textAnchor="middle">Dauer / Ende</text>
        <rect x="-80" y="0" width="160" height="10" rx="5" fill="#FED7AA" />
        <path d="M -80,5 L 40,5" stroke="#EA580C" strokeWidth="4" />
        <text x="-40" y="25" fontSize="12" fill="#B45309" textAnchor="middle">während</text>
        <line x1="40" y1="-10" x2="40" y2="20" stroke="#9A3412" strokeWidth="2" />
        <text x="65" y="25" fontSize="12" fill="#B45309" textAnchor="middle">bis</text>
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Zeit & Sätze K7",
    // T1
    t1_title: "als oder wenn?",
    t1_text: "Beide Wörter bedeuten 'mikor', aber die Regel ist streng: 'als' nutzt man für EINMALIGE Ereignisse in der Vergangenheit. 'wenn' nutzt man für wiederholte Ereignisse vagy für Gegenwart und Zukunft.",
    t1_b1: "als: Als ich 6 Jahre alt war (einmalig).",
    t1_b2: "wenn: Immer wenn es regnete (wiederholt).",
    t1_b3: "wenn: Wenn ich Zeit habe (Gegenwart).",
    t1_inst: "Welches Wort passt für dieses einmalige Ereignis in der Vergangenheit?",
    t1_h1: "Es geht um die eigene Kindheit (einmaliger Zeitraum).",
    t1_h2: "Wir brauchen das Wort 'als'.",
    t1_gap_sentence: "{gap} ich ein Kind war, spielten wir oft draußen.",
    t1_c1: "Als", t1_c2: "Wenn", t1_c3: "Seit",
    t1_q: "Wann benutzt man 'als'?",
    t1_q_a: "Einmalige Ereignisse in der Vergangenheit", t1_q_b: "Wiederholte Ereignisse", t1_q_c: "In der Zukunft", t1_q_d: "Nach dem Essen",

    // T2
    t2_title: "bevor & nachdem",
    t2_text: "'bevor' zeigt, dass etwas danach passiert. 'nachdem' zeigt, dass etwas vorher abgeschlossen wurde. Achtung: Bei 'nachdem' brauchen wir oft das Plusquamperfekt!",
    t2_b1: "bevor: Bevor ich schlafe, putze ich Zähne.",
    t2_b2: "nachdem: Nachdem er gegessen hatte, ging er.",
    t2_b3: "Zeitform-Check: nachdem (Plusquamperfekt) ➔ Hauptsatz (Präteritum).",
    t2_inst: "Bringe den Satz mit 'nachdem' in die richtige Reihenfolge!",
    t2_h1: "Kezdd a kötőszóval: 'Nachdem'.",
    t2_h2: "A 'hatte' segédigének a mellékmondat végére kell kerülnie.",
    t2_w1: "Nachdem", t2_w2: "er", t2_w3: "die", t2_w4: "Hausaufgaben", t2_w5: "gemacht", t2_w6: "hatte,", t2_w7: "spielte", t2_w8: "er.",
    t2_q: "Welche Zeitform folgt oft auf 'nachdem' im Nebensatz, wenn der Hauptsatz im Präteritum steht?",
    t2_q_a: "Plusquamperfekt", t2_q_b: "Präsens", t2_q_c: "Futur", t2_q_d: "Imperativ",

    // T3
    t3_title: "während & bis",
    t3_text: "'während' beschreibt zwei Handlungen, die gleichzeitig ablaufen. 'bis' markiert den Endpunkt einer Zeitspanne.",
    t3_b1: "während: Während ich lerne, hört er Musik.",
    t3_b2: "bis: Ich bleibe hier, bis du kommst.",
    t3_b3: "Beide leiten einen Nebensatz ein (Verb am Ende).",
    t3_inst: "Welches Wort passt zur Gleichzeitigkeit?",
    t3_h1: "Zwei Dinge passieren im selben Moment.",
    t3_h2: "Das Wort ist 'während'.",
    t3_gap_sentence2: "{gap} sie kochte, las er ein Buch.",
    t3_c1: "Während", t3_c2: "Bis", t3_c3: "Bevor",
    t3_q: "Was gibt das Bindewort 'bis' an?",
    t3_q_a: "Einen zeitlichen Endpunkt", t3_q_b: "Einen Grund", t3_q_c: "Eine Bedingung", t3_q_d: "Gleichzeitigkeit",

    // T4
    t4_title: "seit / seitdem",
    t4_text: "'seit' (Präposition) vagy 'seitdem' (Bindewort) nutzt man für Ereignisse, die in der Vergangenheit begonnen haben und bis JETZT andauern.",
    t4_b1: "seit: Seit gestern bin ich krank.",
    t4_b2: "seitdem: Seitdem er Sport treibt, ist er fit.",
    t4_b3: "Das Verb steht im Nebensatz am Ende.",
    t4_inst: "Markiere das Verb am Ende des Nebensatzes!",
    t4_h1: "Suche das Wort, das beschreibt, was er 'seitdem' tut.",
    t4_h2: "Das Verb ist 'wohnt'.",
    t4_w21: "Seitdem", t4_w22: "er", t4_w23: "in", t4_w24: "Berlin", t4_w25: "wohnt,", t4_w26: "besuchen", t4_w27: "wir", t4_w28: "ihn.",
    t4_q: "Welche Zeitspanne drückt 'seitdem' aus?",
    t4_q_a: "Von einem Punkt in der Vergangenheit bis heute", t4_q_b: "Nur in der Zukunft", t4_q_c: "Nur für eine Minute", t4_q_d: "Ein abgeschlossenes Ereignis",

    // T5
    t5_title: "Gemischtes Quiz",
    t5_text: "Kombiniere dein Wissen! Achte auf den Zeitpunkt, die Dauer und die richtige Wortstellung.",
    t5_b1: "als (einmalig Vergangenheit).",
    t5_b2: "nachdem + Plusquamperfekt.",
    t5_b3: "während (parallel).",
    t5_inst: "Ist es ein Zeitpunkt (als/wenn) vagy eine Abfolge (bevor/nachdem)? Sortiere!",
    t5_h1: "'als' und 'wenn' fragen nach dem 'Wann'.",
    t5_h2: "'bevor' und 'nachdem' regeln die Reihenfolge.",
    t5_bucket_zp: "Zeitpunkt (Wann?)",
    t5_bucket_ab: "Abfolge (Reihenfolge)",
    t5_item_z1: "Als ich klein war", t5_item_z2: "Wenn es regnet",
    t5_item_a1: "Bevor ich gehe", t5_item_a2: "Nachdem er kam",
    t5_q: "Welcher Satz ist grammatikalisch richtig?",
    t5_q_a: "Als ich gestern ankam, schlief er.", t5_q_b: "Wenn ich gestern ankam, schlief er.", t5_q_c: "Als ich gestern ankomme, schlief er.", t5_q_d: "Seitdem ich gestern ankam, er schläft.",
  },
  en: {
    explorer_title: "Time & Clauses",
    t1_inst: "Which word fits for this unique event in the past?",
    t2_inst: "Put the sentence with 'nachdem' in the correct order!",
    t3_inst: "Which word fits for simultaneity?",
    t4_inst: "Highlight the verb at the end of the subordinate clause!",
    t5_inst: "Is it a point in time (als/wenn) or a sequence (bevor/nachdem)? Sort them!",
  },
  hu: {
    explorer_title: "Idő és Mellékmondatok",
    t1_inst: "Melyik szó illik ehhez az egyszeri múltbeli eseményhez?",
    t2_inst: "Tedd a 'nachdem'-es mondatot a helyes sorrendbe!",
    t3_inst: "Melyik szó illik a párhuzamossághoz (egyidejűség)?",
    t4_inst: "Jelöld ki az igét a mellékmondat végén!",
    t5_inst: "Időpontról (als/wenn) vagy sorrendiségről (bevor/nachdem) van szó? Válogasd szét!",
    t5_bucket_zp: "Időpont (Mikor?)",
    t5_bucket_ab: "Sorrendiség",
  },
  ro: {
    explorer_title: "Timp și Propoziții",
    t1_inst: "Care cuvânt se potrivește pentru acest eveniment unic din trecut?",
    t2_inst: "Așază propoziția cu „nachdem” în ordinea corectă!",
    t3_inst: "Care cuvânt se potrivește pentru simultaneitate?",
    t4_inst: "Marchează verbul de la finalul propoziției secundare!",
    t5_inst: "Este un moment în timp (als/wenn) sau o succesiune (bevor/nachdem)? Sortează-le!",
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
      choices: ["t1_c1", "t1_c2", "t1_c3"], // Als, Wenn, Seit
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
      sentence: "t3_gap_sentence2",
      choices: ["t3_c1", "t3_c2", "t3_c3"], // Während, Bis, Bevor
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
      correctIndices: [4], // wohnt,
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
        { id: "zp", label: "t5_bucket_zp" },
        { id: "ab", label: "t5_bucket_ab" },
      ],
      items: [
        { text: "t5_item_z1", bucketId: "zp" },
        { text: "t5_item_a1", bucketId: "ab" },
        { text: "t5_item_z2", bucketId: "zp" },
        { text: "t5_item_a2", bucketId: "ab" },
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

const TemporalsatzExplorer = memo(function TemporalsatzExplorer({
  color = "#F97316",
  onDone,
  lang = "de",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={7} explorerId="deutsch_k7_temporal" color={color} lang={lang} onDone={onDone} />;
});

export default TemporalsatzExplorer;
