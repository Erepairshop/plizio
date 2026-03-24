"use client";
// FremdwoerterK6Explorer — Island i5: Fremdwörter (Foreign Words)
// Topics: 1) Herkunft (Latein/Griechisch) 2) Häufige Wörter 3) Schreibung (ph/th/rh) 4) Kontext-Bedeutung 5) Gemischtes Quiz

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSTRATIONS ──────────────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F8FAFC" rx="20" />
      <g transform="translate(120, 70)">
        <path d="M -60,30 L -60,-20 L -40,-20 L -40,30 M 40,30 L 40,-20 L 60,-20 L 60,30" fill="#94A3B8" />
        <rect x="-80" y="30" width="160" height="10" fill="#64748B" />
        <path d="M -80,-20 L 0,-50 L 80,-20 Z" fill="#64748B" />
        <text x="0" y="10" fontSize="12" fontWeight="bold" fill="#334155" textAnchor="middle">Latein & Griechisch</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0F9FF" rx="20" />
      <g transform="translate(120, 70)">
        <rect x="-70" y="-30" width="140" height="60" rx="10" fill="#BAE6FD" stroke="#0EA5E9" strokeWidth="2" />
        <text x="0" y="-5" fontSize="14" fontWeight="bold" fill="#0369A1" textAnchor="middle">Analyse</text>
        <text x="0" y="15" fontSize="14" fontWeight="bold" fill="#0369A1" textAnchor="middle">Diskussion</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FFFBEB" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-60" y="0" fontSize="24" fontWeight="black" fill="#D97706" textAnchor="middle">ph</text>
        <text x="0" y="0" fontSize="24" fontWeight="black" fill="#D97706" textAnchor="middle">th</text>
        <text x="60" y="0" fontSize="24" fontWeight="black" fill="#D97706" textAnchor="middle">rh</text>
        <text x="0" y="35" fontSize="12" fill="#B45309" textAnchor="middle">Besondere Schreibung</text>
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Welt der Fremdwörter",
    // T1
    t1_title: "Herkunft erkennen",
    t1_text: "Viele deutsche Wörter kommen aus dem Lateinischen oder Griechischen. Man erkennt sie oft an typischen Vorsilben (Präfixen).",
    t1_b1: "Griechisch: auto- (selbst), bio- (leben), tele- (fern)",
    t1_b2: "Lateinisch: super- (über), inter- (zwischen), sub- (unter)",
    t1_b3: "Fremdwörter machen unsere Sprache präziser.",
    t1_inst: "Welches Präfix passt zur Bedeutung? Verbinde sie!",
    t1_h1: "'bio' hat immer mit Leben zu tun.",
    t1_h2: "'tele' bedeutet, dass etwas weit weg ist.",
    t1_l1: "bio-", t1_r1: "Leben",
    t1_l2: "tele-", t1_r2: "fern",
    t1_l3: "inter-", t1_r3: "zwischen",
    t1_l4: "auto-", t1_r4: "selbst",
    t1_q: "Aus welcher Sprache stammen die meisten wissenschaftlichen Fremdwörter?",
    t1_q_a: "Latein und Griechisch", t1_q_b: "Englisch und Französisch", t1_q_c: "Spanisch", t1_q_d: "Deutsch",

    // T2
    t2_title: "Häufige Fremdwörter",
    t2_text: "Im Alltag nutzen wir viele Fremdwörter, oft ohne es zu merken. Wörter wie 'Analyse', 'Diskussion' oder 'Experiment' sind in der Schule sehr wichtig.",
    t2_b1: "Analyse: Untersuchung von Teilen.",
    t2_b2: "Diskussion: Meinungsaustausch.",
    t2_b3: "Hypothese: Eine Vermutung.",
    t2_inst: "Welches Wort passt in den Satz?",
    t2_h1: "Wenn man über ein Thema streitet oder spricht, führt man eine...",
    t2_h2: "Das Wort ist 'Diskussion'.",
    t2_gap_sentence: "Wir führen in der Klasse eine spannende {gap}.",
    t2_c1: "Diskussion", t2_c2: "Diskusjon", t2_c3: "Diskusion",
    t2_q: "Was bedeutet das Wort 'Analyse'?",
    t2_q_a: "Genaue Untersuchung", t2_q_b: "Eine Pause machen", t2_q_c: "Laut singen", t2_q_d: "Etwas vergessen",

    // T3
    t3_title: "Die Schreibung (ph, th, rh)",
    t3_text: "Fremdwörter aus dem Griechischen behalten oft ihre besondere Schreibung. Das 'f' wird oft als 'ph', das 't' als 'th' und das 'r' am Wortanfang als 'rh' geschrieben.",
    t3_b1: "ph: Alphabet, Phonetik, Philosophie",
    t3_b2: "th: Theorie, Thema, Theater",
    t3_b3: "rh: Rhythmus, Rhetorik",
    t3_inst: "ph, th oder rh? Sortiere die Wörter!",
    t3_h1: "Rhythmus ist besonders schwer: rh + y + th.",
    t3_h2: "Theater schreibt man immer mit 'th'.",
    t3_bucket_ph: "mit 'ph'",
    t3_bucket_th: "mit 'th'",
    t3_bucket_rh: "mit 'rh'",
    t3_item_p1: "Alphabet", t3_item_p2: "Strophe",
    t3_item_t1: "Thema", t3_item_t2: "Bibliothek",
    t3_item_r1: "Rhythmus", t3_item_r2: "Rhetorik",
    t3_q: "Wie schreibt man das Wort für 'Music beat' korrekt?",
    t3_q_a: "Rhythmus", t3_q_b: "Rytmus", t3_q_c: "Rhytmus", t3_q_d: "Rithmus",

    // T4
    t4_title: "Bedeutung aus dem Kontext",
    t4_text: "Oft kannst du die Bedeutung eines fremden Wortes erraten, wenn du den restlichen Satz genau liest.",
    t4_b1: "Kontext = Die Umgebung des Wortes.",
    t4_b2: "Beispiel: 'Die Gruppe KOOPERIERT gut, sie arbeiten toll zusammen.'",
    t4_b3: "Zusammenarbeiten = kooperieren.",
    t4_inst: "Was bedeutet das markierte Wort? Markiere die richtige Erklärung im Text!",
    t4_h1: "Lies den zweiten Teil des Satzes.",
    t4_h2: "'arbeiten toll zusammen' erklärt das Wort.",
    t4_w1: "Die", t4_w2: "Schüler", t4_w3: "kooperieren", t4_w4: "gut,", t4_w5: "sie", t4_w6: "arbeiten", t4_w7: "toll", t4_w8: "zusammen.",
    t4_q: "Was bedeutet 'kooperieren'?",
    t4_q_a: "zusammenarbeiten", t4_q_b: "alleine spielen", t4_q_c: "schnell rennen", t4_q_d: "viel essen",

    // T5
    t5_title: "Gemischtes Quiz",
    t5_text: "Bist du ein Experte für Fremdwörter? Teste dein Wissen über Herkunft, Schreibung und Bedeutung.",
    t5_b1: "Präfixe aus Latein/Griechisch.",
    t5_b2: "Schreibung mit ph, th, rh.",
    t5_b3: "Bedeutungen zuordnen.",
    t5_inst: "Verbinde das Fremdwort mit der deutschen Erklärung!",
    t5_h1: "Ein 'Teleskop' nutzt man für die Ferne.",
    t5_h2: "Eine 'Biografie' ist eine Lebensbeschreibung.",
    t5_l21: "Teleskop", t5_r21: "Fernrohr",
    t5_l22: "Biografie", t5_r22: "Lebensbeschreibung",
    t5_l23: "Korrektur", t5_r23: "Verbesserung",
    t5_l24: "super", t5_r24: "übermäßig",
    t5_q: "Welches Wort ist KEIN Fremdwort?",
    t5_q_a: "Haus", t5_q_b: "Telefon", t5_q_c: "Computer", t5_q_d: "Museum",
  },
  en: {
    explorer_title: "World of Foreign Words",
    t1_inst: "Which prefix matches the meaning? Connect them!",
    t2_inst: "Which word fits in the sentence?",
    t3_inst: "ph, th, or rh? Sort the words!",
    t4_inst: "What does the highlighted word mean? Highlight the explanation in the text!",
    t5_inst: "Connect the foreign word with its explanation!",
  },
  hu: {
    explorer_title: "Idegen szavak világa",
    t1_inst: "Melyik előtag illik a jelentéshez? Kösd össze őket!",
    t2_inst: "Melyik szó illik a mondatba?",
    t3_inst: "ph, th vagy rh? Válogasd szét a szavakat!",
    t4_inst: "Mit jelent a kijelölt szó? Jelöld ki a magyarázatot a szövegben!",
    t5_inst: "Kösd össze az idegen szót a magyarázatával!",
  },
  ro: {
    explorer_title: "Lumea cuvintelor străine",
    t1_inst: "Care prefix se potrivește semnificației? Leagă-le!",
    t2_inst: "Care cuvânt se potrivește în propoziție?",
    t3_inst: "ph, th sau rh? Sortează cuvintele!",
    t4_inst: "Ce înseamnă cuvântul marcat? Marchează explicația în text!",
    t5_inst: "Conectează cuvântul străin cu explicația sa!",
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
    svg: () => <Topic3Svg />,
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [
        { id: "ph", label: "t3_bucket_ph" },
        { id: "th", label: "t3_bucket_th" },
        { id: "rh", label: "t3_bucket_rh" },
      ],
      items: [
        { text: "t3_item_p1", bucketId: "ph" },
        { text: "t3_item_t1", bucketId: "th" },
        { text: "t3_item_r1", bucketId: "rh" },
        { text: "t3_item_p2", bucketId: "ph" },
        { text: "t3_item_t2", bucketId: "th" },
        { text: "t3_item_r2", bucketId: "rh" },
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
      type: "highlight-text",
      tokens: ["t4_w1", "t4_w2", "t4_w3", "t4_w4", "t4_w5", "t4_w6", "t4_w7", "t4_w8"],
      correctIndices: [5, 6, 7],
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
      type: "match-pairs",
      pairs: [
        { left: "t5_l21", right: "t5_r21" },
        { left: "t5_l22", right: "t5_r22" },
        { left: "t5_l23", right: "t5_r23" },
        { left: "t5_l24", right: "t5_r24" },
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
  icon: "🏛️",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const FremdwoerterK6Explorer = memo(function FremdwoerterK6Explorer({
  color = "#64748B",
  onDone,
  lang = "de",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={6} explorerId="deutsch_k6_fremdwoerter" color={color} lang={lang} onDone={onDone} />;
});

export default FremdwoerterK6Explorer;
