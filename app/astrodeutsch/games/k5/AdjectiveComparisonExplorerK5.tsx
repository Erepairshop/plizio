"use client";
// AdjectiveComparisonExplorerK5 — Island i1: Adjektiv-Steigerung (Adjective Comparison)
// Topics: 1) Positiv (Grundform) 2) Komparativ 3) Superlativ 4) Unregelmäßige 5) Gemischtes Quiz

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSTRATIONS ──────────────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0F9FF" rx="20" />
      <g transform="translate(120, 70)">
        <rect x="-60" y="-20" width="40" height="40" fill="#BAE6FD" rx="4" />
        <text x="-40" y="5" fontSize="16" fontWeight="bold" fill="#0284C7" textAnchor="middle">=</text>
        <rect x="20" y="-20" width="40" height="40" fill="#BAE6FD" rx="4" />
        <text x="0" y="5" fontSize="12" fontWeight="bold" fill="#0369A1" textAnchor="middle">so ... wie</text>
        <text x="0" y="45" fontSize="10" fill="#0284C7" textAnchor="middle">Positiv (Grundform)</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FDF2F8" rx="20" />
      <g transform="translate(120, 70)">
        <rect x="-50" y="-10" width="30" height="30" fill="#FBCFE8" rx="4" />
        <rect x="-10" y="-30" width="30" height="50" fill="#F472B6" rx="4" />
        <text x="40" y="-5" fontSize="16" fontWeight="bold" fill="#BE185D" textAnchor="middle">+ er</text>
        <text x="40" y="15" fontSize="12" fontWeight="bold" fill="#9D174D" textAnchor="middle">(als)</text>
        <text x="0" y="45" fontSize="10" fill="#9D174D" textAnchor="middle">Komparativ</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FFFBEB" rx="20" />
      <g transform="translate(120, 70)">
        <path d="M -30,-10 L 0,-40 L 30,-10 Z" fill="#FCD34D" />
        <rect x="-15" y="-10" width="30" height="40" fill="#F59E0B" rx="2" />
        <text x="0" y="15" fontSize="14" fontWeight="bold" fill="white" textAnchor="middle">1</text>
        <text x="0" y="45" fontSize="12" fontWeight="bold" fill="#B45309" textAnchor="middle">am ... -sten</text>
      </g>
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0FDF4" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-50" y="-5" fontSize="14" fontWeight="bold" fill="#166534" textAnchor="middle">gut</text>
        <path d="M -30,-10 L -10,-10" stroke="#22C55E" strokeWidth="2" markerEnd="url(#arrow)" />
        <text x="15" y="-5" fontSize="14" fontWeight="bold" fill="#166534" textAnchor="middle">besser</text>
        <text x="0" y="30" fontSize="12" fill="#14532D" textAnchor="middle">Unregelmäßig!</text>
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="k5Grad1_5" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#4C1D95" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#k5Grad1_5)" rx="20" />
      <g transform="translate(120, 70)">
        <text x="0" y="-5" fontSize="30" textAnchor="middle">⚖️</text>
        <text x="0" y="30" fontSize="16" fontWeight="bold" fill="#5B21B6" textAnchor="middle">Steigerungs-Mix</text>
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Adjektive steigern K5",

    // T1
    t1_title: "Der Positiv (Grundform)",
    t1_text: "Der Positiv ist die normale Form des Adjektivs. Wir benutzen ihn, um zu sagen, dass zwei Dinge GLEICH sind. Dabei benutzen wir die Wörter 'so ... wie'.",
    t1_b1: "Beispiel: Anna ist so groß wie Paul.",
    t1_b2: "Das Adjektiv verändert sich nicht.",
    t1_b3: "Gleichheit = so + Adjektiv + wie",
    t1_inst: "Welches Wort fehlt? 'Der Gepard rennt so ___ wie ein Auto.'",
    t1_h1: "Wir vergleichen zwei Dinge, die gleich schnell sind.",
    t1_h2: "Wir brauchen die Grundform: 'schnell'.",
    t1_gap_sentence: "Der Gepard rennt so {gap} wie ein Auto.",
    t1_c1: "schnell", t1_c2: "schneller", t1_c3: "am schnellsten",
    t1_q: "Welche Wörter benutzt man beim Positiv, um Gleichheit zu zeigen?",
    t1_q_a: "so ... wie", t1_q_b: "als", t1_q_c: "am ...-sten", t1_q_d: "mehr ... als",

    // T2
    t2_title: "Der Komparativ",
    t2_text: "Den Komparativ benutzen wir bei einem Unterschied. Ein Ding ist mehr/weniger als ein anderes. Wir hängen '-er' an das Adjektiv und benutzen das Wort 'als'.",
    t2_b1: "Beispiel: Der Elefant ist schwerer als die Maus.",
    t2_b2: "Oft bekommen kurze Adjektive einen Umlaut (a➔ä, o➔ö, u➔ü).",
    t2_b3: "groß ➔ größer, alt ➔ älter",
    t2_inst: "Bringe den Satz in die richtige Reihenfolge!",
    t2_h1: "Der Satz beginnt mit 'Der Hund'.",
    t2_h2: "Dann kommt 'ist', das gesteigerte Adjektiv, und das Wort 'als'.",
    t2_w1: "Der", t2_w2: "Hund", t2_w3: "ist", t2_w4: "schneller", t2_w5: "als", t2_w6: "die", t2_w7: "Katze.",
    t2_q: "Welches Wort steht oft direkt nach dem Adjektiv im Komparativ?",
    t2_q_a: "als", t2_q_b: "wie", t2_q_c: "am", t2_q_d: "und",

    // T3
    t3_title: "Der Superlativ",
    t3_text: "Der Superlativ ist die höchste Stufe. Es geht nicht mehr! Wir bilden ihn mit 'am' und der Endung '-sten'. Wenn das Adjektiv auf -t, -d, -s, -z endet, hängen wir '-esten' an.",
    t3_b1: "schnell ➔ am schnellsten",
    t3_b2: "heiß ➔ am heißesten (wegen dem -ß)",
    t3_b3: "kalt ➔ am kältesten (wegen dem -t)",
    t3_inst: "Welches Wort passt in die Lücke?",
    t3_h1: "Wir suchen die höchste Stufe für den Mount Everest.",
    t3_h2: "hoch ➔ höher ➔ am höchsten.",
    t3_gap_sentence: "Der Mount Everest ist der Berg, der am {gap} ist.",
    t3_c1: "höchsten", t3_c2: "höher", t3_c3: "hoch",
    t3_q: "Wie lautet der Superlativ von 'kurz'?",
    t3_q_a: "am kürzesten", t3_q_b: "am kurzsten", t3_q_c: "am kürzersten", t3_q_d: "am kurzesten",

    // T4
    t4_title: "Unregelmäßige Adjektive",
    t4_text: "Einige wenige Adjektive halten sich an keine Regeln. Sie verändern sich beim Steigern komplett. Diese musst du wie Vokabeln lernen!",
    t4_b1: "gut ➔ besser ➔ am besten",
    t4_b2: "viel ➔ mehr ➔ am meisten",
    t4_b3: "gern ➔ lieber ➔ am liebsten",
    t4_inst: "Verbinde die Grundform mit ihrem Komparativ (zweite Stufe)!",
    t4_h1: "'gut' wird zu 'besser'.",
    t4_h2: "'viel' wird zu 'mehr'.",
    t4_l1: "gut", t4_r1: "besser",
    t4_l2: "viel", t4_r2: "mehr",
    t4_l3: "gern", t4_r3: "lieber",
    t4_l4: "hoch", t4_r4: "höher",
    t4_q: "Was ist der Superlativ (Höchststufe) von 'viel'?",
    t4_q_a: "am meisten", t4_q_b: "am vielsten", t4_q_c: "am mehrsten", t4_q_d: "am vieler",

    // T5
    t5_title: "Gemischtes Quiz",
    t5_text: "Positiv, Komparativ oder Superlativ? Kannst du die drei Stufen sicher unterscheiden?",
    t5_b1: "Positiv = Grundform",
    t5_b2: "Komparativ = Endung -er",
    t5_b3: "Superlativ = am ...-sten",
    t5_inst: "In welcher Steigerungsstufe stehen die Adjektive? Sortiere sie!",
    t5_h1: "Wörter mit 'am' gehören in den Superlativ.",
    t5_h2: "Wörter mit -er (ohne 'am') sind Komparativ.",
    t5_bucket_pos: "Positiv",
    t5_bucket_kom: "Komparativ",
    t5_bucket_sup: "Superlativ",
    t5_item_schnell: "schnell", t5_item_schneller: "schneller", t5_item_am_schnellsten: "am schnellsten",
    t5_item_gut: "gut", t5_item_besser: "besser", t5_item_am_besten: "am besten",
    t5_q: "Welcher Satz ist grammatikalisch falsch?",
    t5_q_a: "Ich bin größer wie du.", t5_q_b: "Ich bin größer als du.", t5_q_c: "Ich bin so groß wie du.", t5_q_d: "Ich bin am größten.",
  },
  en: {
    explorer_title: "Adjective Comparison",
    t1_inst: "Which word is missing? 'Der Gepard rennt so ___ wie ein Auto.'",
    t1_h1: "We are comparing two things that are equally fast.",
    t1_h2: "We need the basic form: 'schnell' (fast).",
    t2_inst: "Put the sentence in the correct order!",
    t2_h1: "The sentence begins with 'Der Hund'.",
    t2_h2: "Then comes 'ist', the comparative adjective, and the word 'als'.",
    t3_inst: "Which word fits in the gap?",
    t3_h1: "We are looking for the highest degree for Mount Everest.",
    t3_h2: "hoch ➔ höher ➔ am höchsten.",
    t4_inst: "Connect the base form with its comparative (second degree)!",
    t4_h1: "'gut' becomes 'besser'.",
    t4_h2: "'viel' becomes 'mehr'.",
    t5_inst: "What is the degree of comparison of the adjectives? Sort them!",
    t5_h1: "Words with 'am' belong in the Superlative.",
    t5_h2: "Words with -er (without 'am') are Comparative.",
    t5_bucket_pos: "Positiv",
    t5_bucket_kom: "Komparativ",
    t5_bucket_sup: "Superlativ",
  },
  hu: {
    explorer_title: "Melléknév fokozás",
    t1_inst: "Melyik szó hiányzik? 'Der Gepard rennt so ___ wie ein Auto.'",
    t1_h1: "Két egyforma gyors dolgot hasonlítunk össze.",
    t1_h2: "Az alapfokra van szükségünk: 'schnell' (gyors).",
    t2_inst: "Tedd a mondatot a helyes sorrendbe!",
    t2_h1: "A mondat a 'Der Hund'-dal kezdődik.",
    t2_h2: "Utána jön az 'ist', a középfokú melléknév, és az 'als' szó.",
    t3_inst: "Melyik szó illik az űrbe?",
    t3_h1: "A legmagasabb fokot keressük a Mount Everesthez.",
    t3_h2: "hoch ➔ höher ➔ am höchsten.",
    t4_inst: "Kösd össze az alapfokot a középfokkal (második fok)! ",
    t4_h1: "A 'gut'-ból 'besser' lesz.",
    t4_h2: "A 'viel'-ből 'mehr' lesz.",
    t5_inst: "Melyik fokozási szinten vannak a melléknevek? Válogasd szét őket!",
    t5_h1: "Az 'am'-mal kezdődő szavak a felsőfokhoz (Superlativ) tartoznak.",
    t5_h2: "Az -er végű szavak ('am' nélkül) a középfokhoz (Komparativ).",
    t5_bucket_pos: "Alapfok (Positiv)",
    t5_bucket_kom: "Középfok (Komparativ)",
    t5_bucket_sup: "Felsőfok (Superlativ)",
  },
  ro: {
    explorer_title: "Comparația adjectivelor",
    t1_inst: "Ce cuvânt lipsește? 'Der Gepard rennt so ___ wie ein Auto.'",
    t1_h1: "Comparăm două lucruri care sunt la fel de rapide.",
    t1_h2: "Avem nevoie de forma de bază: 'schnell' (rapid).",
    t2_inst: "Așază propoziția în ordinea corectă!",
    t2_h1: "Propoziția începe cu 'Der Hund'.",
    t2_h2: "Apoi urmează 'ist', adjectivul la comparativ și cuvântul 'als'.",
    t3_inst: "Ce cuvânt se potrivește în spațiu?",
    t3_h1: "Căutăm gradul cel mai înalt pentru Muntele Everest.",
    t3_h2: "hoch ➔ höher ➔ am höchsten.",
    t4_inst: "Leagă forma de bază de comparativul ei (gradul doi)!",
    t4_h1: "'gut' devine 'besser'.",
    t4_h2: "'viel' devine 'mehr'.",
    t5_inst: "La ce grad de comparație sunt adjectivele? Sortează-le!",
    t5_h1: "Cuvintele cu 'am' aparțin Superlativului.",
    t5_h2: "Cuvintele cu -er (fără 'am') sunt la Comparativ.",
    t5_bucket_pos: "Pozitiv",
    t5_bucket_kom: "Comparativ",
    t5_bucket_sup: "Superlativ",
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
      choices: ["t1_c1", "t1_c2", "t1_c3"], // schnell, schneller, am schnellsten
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
      words: ["t2_w1", "t2_w2", "t2_w3", "t2_w4", "t2_w5", "t2_w6", "t2_w7"], // Der Hund ist schneller als die Katze.
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
      sentence: "t3_gap_sentence",
      choices: ["t3_c1", "t3_c2", "t3_c3"], // höchsten, höher, hoch
      correctIndex: 0,
      instruction: "t3_inst",
      hint1: "t3_h1",
      hint2: "t3_h2",
    },
    quiz: {
      question: "t3_q",
      choices: ["t3_q_a", "t3_q_b", "t3_q_c", "t3_q_d"],
      answer: "t3_q_a", // am kürzesten
    },
  },
  {
    infoTitle: "t4_title",
    infoText: "t4_text",
    svg: () => <Topic4Svg />,
    bulletKeys: ["t4_b1", "t4_b2", "t4_b3"],
    interactive: {
      type: "match-pairs",
      pairs: [
        { left: "t4_l1", right: "t4_r1" }, // gut -> besser
        { left: "t4_l2", right: "t4_r2" }, // viel -> mehr
        { left: "t4_l3", right: "t4_r3" }, // gern -> lieber
        { left: "t4_l4", right: "t4_r4" }, // hoch -> höher
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
    svg: () => <Topic5Svg />,
    bulletKeys: ["t5_b1", "t5_b2", "t5_b3"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [
        { id: "pos", label: "t5_bucket_pos" },
        { id: "kom", label: "t5_bucket_kom" },
        { id: "sup", label: "t5_bucket_sup" },
      ],
      items: [
        { text: "t5_item_schnell", bucketId: "pos" },
        { text: "t5_item_schneller", bucketId: "kom" },
        { text: "t5_item_am_schnellsten", bucketId: "sup" },
        { text: "t5_item_gut", bucketId: "pos" },
        { text: "t5_item_besser", bucketId: "kom" },
        { text: "t5_item_am_besten", bucketId: "sup" },
      ],
      instruction: "t5_inst",
      hint1: "t5_h1",
      hint2: "t5_h2",
    },
    quiz: {
      question: "t5_q",
      choices: ["t5_q_a", "t5_q_b", "t5_q_c", "t5_q_d"],
      answer: "t5_q_a", // "Ich bin größer wie du" (falsch)
    },
  },
];

// ─── DEF ────────────────────────────────────────────────────────────

const DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "📏",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const AdjectiveComparisonExplorerK5 = memo(function AdjectiveComparisonExplorerK5({
  color = "#D97706",
  onDone,
  lang = "de",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={5} explorerId="deutsch_k5_adj_comp" color={color} lang={lang} onDone={onDone} />;
});

export default AdjectiveComparisonExplorerK5;
