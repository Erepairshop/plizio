"use client";
// ComparisonExplorerK3 — Island i3: Adjektive steigern (Comparison)
// Topics: 1) Positiv, Komparativ, Superlativ 2) Regelmäßige Steigerung 3) Unregelmäßige Formen (gut, viel)

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSTRATIONS ──────────────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F5F3FF" rx="20" />
      <g transform="translate(120, 70)">
        {/* Comparison Bars */}
        <rect x="-80" y="10" width="40" height="30" fill="#A78BFA" rx="4" />
        <text x="-60" y="55" fontSize="10" fontWeight="bold" fill="#5B21B6" textAnchor="middle">schnell</text>
        
        <rect x="-20" y="-10" width="40" height="50" fill="#8B5CF6" rx="4" />
        <text x="0" y="55" fontSize="10" fontWeight="bold" fill="#5B21B6" textAnchor="middle">schneller</text>
        
        <rect x="40" y="-40" width="40" height="80" fill="#7C3AED" rx="4" />
        <text x="60" y="55" fontSize="10" fontWeight="bold" fill="#5B21B6" textAnchor="middle">am schnellsten</text>
        
        <path d="M -60,0 L 60,-45" fill="none" stroke="#C4B5FD" strokeWidth="2" strokeDasharray="4 2" />
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#ECFEFF" rx="20" />
      <g transform="translate(120, 70)">
        <text x="0" y="-30" fontSize="16" fontWeight="bold" fill="#0E7490" textAnchor="middle">Umlaut-Check 🍎</text>
        <rect x="-80" y="-10" width="60" height="30" rx="4" fill="#CFFAFE" stroke="#06B6D4" />
        <text x="-50" y="10" fontSize="14" fill="#0891B2" textAnchor="middle">groß</text>
        
        <path d="M -15,5 L 15,5" stroke="#06B6D4" strokeWidth="2" markerEnd="url(#arrow)" />
        
        <rect x="20" y="-10" width="80" height="30" rx="4" fill="#06B6D4" />
        <text x="60" y="10" fontSize="14" fontWeight="bold" fill="white" textAnchor="middle">gr<tspan fill="#FDE047">ö</tspan>ßer</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FEF2F2" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-70" y="0" fontSize="12" fontWeight="bold" fill="#B91C1C" textAnchor="middle">gut 👍</text>
        <text x="0" y="0" fontSize="12" fontWeight="bold" fill="#B91C1C" textAnchor="middle">besser ⭐</text>
        <text x="70" y="0" fontSize="12" fontWeight="bold" fill="#B91C1C" textAnchor="middle">am besten 🏆</text>
        <path d="M -45,0 L -25,0 M 25,0 L 45,0" stroke="#FECACA" strokeWidth="2" />
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Adjektive steigern",
    // Topic 1
    t1_title: "Die drei Stufen",
    t1_text: "Adjektive haben drei Stufen: Positiv (Grundstufe), Komparativ (Mehrstufe) und Superlativ (Höchststufe). Wir brauchen sie, um Dinge zu vergleichen.",
    t1_b1: "Positiv: Er ist groß.",
    t1_b2: "Komparativ: Er ist größer als du.",
    t1_b3: "Superlativ: Er ist am größten.",
    t1_inst: "In welcher Stufe steht das Wort? Sortiere sie!",
    t1_h1: "Wörter mit -er sind im Komparativ.",
    t1_h2: "Wörter mit 'am' und -sten sind im Superlativ.",
    t1_bucket_pos: "Positiv",
    t1_bucket_komp: "Komparativ",
    t1_bucket_sup: "Superlativ",
    t1_item_klein: "klein", t1_item_kleiner: "kleiner", t1_item_kleinsten: "am kleinsten",
    t1_item_schnell: "schnell", t1_item_schneller: "schneller", t1_item_schnellsten: "am schnellsten",
    t1_q: "Wie nennt man die Stufe 'schneller'?",
    t1_q_a: "Komparativ", t1_q_b: "Positiv", t1_q_c: "Superlativ", t1_q_d: "Imperativ",

    // Topic 2
    t2_title: "Regeln und Umlaute",
    t2_text: "Beim Komparativ hängen wir fast immer ein '-er' an. Beim Superlativ sagen wir 'am ...-sten'. Aber Achtung: Viele kurze Adjektive bekommen einen Umlaut (a➔ä, o➔ö, u➔ü)!",
    t2_b1: "alt ➔ älter ➔ am ältesten",
    t2_b2: "groß ➔ größer ➔ am größten",
    t2_b3: "jung ➔ jünger ➔ am jüngsten",
    t2_inst: "Welches Wort passt in die Lücke? 'Ein Elefant ist ___ als eine Maus.'",
    t2_h1: "Wir vergleichen zwei Tiere, also brauchen wir den Komparativ.",
    t2_h2: "Das Adjektiv ist 'groß'. Im Komparativ wird es zu 'größer'.",
    t2_gap_sentence: "Ein Elefant ist {gap} als eine Maus.",
    t2_c1: "größer", t2_c2: "groß", t2_c3: "am größten",
    t2_q: "Was ist die richtige Steigerung von 'kurz'?",
    t2_q_a: "kurz, kürzer, am kürzesten", t2_q_b: "kurz, kurzer, am kurzesten", t2_q_c: "kurz, kurzi, am kurzis", t2_q_d: "kurz, kürzer, am kürzersten",

    // Topic 3
    t3_title: "Besondere Formen",
    t3_text: "Manche Adjektive sind kleine Rebellen. Sie folgen keiner Regel und verändern sich komplett. Diese Formen musst du auswendig lernen!",
    t3_b1: "gut ➔ besser ➔ am besten",
    t3_b2: "viel ➔ mehr ➔ am meisten",
    t3_b3: "gern ➔ lieber ➔ am liebsten",
    t3_inst: "Bringe die Formen von 'gut' in die richtige Reihenfolge!",
    t3_h1: "Beginne mit der Grundform, dann die Steigerung.",
    t3_h2: "Die Reihenfolge ist: gut, besser, am besten.",
    t3_w1: "gut", t3_w2: "besser", t3_w3: "am besten",
    t3_q: "Welches Wort ist der Komparativ von 'viel'?",
    t3_q_a: "mehr", t3_q_b: "vieler", t3_q_c: "meisten", t3_q_d: "vielt",
  },
  en: {
    explorer_title: "Comparing Adjectives",
    t1_inst: "In which degree is the word? Sort them!",
    t1_h1: "Words ending in -er are Comparative.",
    t1_h2: "Words with 'am' and -sten are Superlative.",
    t1_bucket_pos: "Base (Positiv)",
    t1_bucket_komp: "Higher (Komparativ)",
    t1_bucket_sup: "Highest (Superlativ)",
    t2_inst: "Which word fits in the gap?",
    t2_h1: "We are comparing two animals, so we need the comparative.",
    t3_inst: "Put the forms of 'gut' in the correct order!",
    t3_h1: "Start with the base form, then the comparison.",
  },
  hu: {
    explorer_title: "Melléknévfokozás",
    t1_inst: "Melyik fokban van a szó? Válogasd szét őket!",
    t1_h1: "Az -er végű szavak középfokúak (Komparativ).",
    t1_h2: "Az 'am' és -sten végű szavak felsőfokúak (Superlativ).",
    t1_bucket_pos: "Alapfok",
    t1_bucket_komp: "Középfok",
    t1_bucket_sup: "Felsőfok",
    t2_inst: "Melyik szó illik az űrbe?",
    t2_h1: "Két állatot hasonlítunk össze, tehát középfok kell.",
    t3_inst: "Tedd a 'gut' alakjait a helyes sorrendbe!",
    t3_h1: "Kezdd az alapfokkal, majd jöhet a fokozás.",
  },
  ro: {
    explorer_title: "Gradele de comparație",
    t1_inst: "La ce grad este cuvântul? Sortează-le!",
    t1_h1: "Cuvintele care se termină în -er sunt la Comparativ.",
    t1_h2: "Cuvintele cu 'am' și -sten sunt la Superlativ.",
    t1_bucket_pos: "Pozitiv",
    t1_bucket_komp: "Comparativ",
    t1_bucket_sup: "Superlativ",
    t2_inst: "Ce cuvânt se potrivește în spațiu?",
    t2_h1: "Comparăm două animale, deci avem nevoie de comparativ.",
    t3_inst: "Pune formele lui 'gut' în ordinea corectă!",
    t3_h1: "Începe cu forma de bază, apoi comparația.",
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
        { id: "pos", label: "t1_bucket_pos" },
        { id: "komp", label: "t1_bucket_komp" },
        { id: "sup", label: "t1_bucket_sup" },
      ],
      items: [
        { text: "t1_item_klein", bucketId: "pos" },
        { text: "t1_item_kleiner", bucketId: "komp" },
        { text: "t1_item_kleinsten", bucketId: "sup" },
        { text: "t1_item_schnell", bucketId: "pos" },
        { text: "t1_item_schneller", bucketId: "komp" },
        { text: "t1_item_schnellsten", bucketId: "sup" },
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
      type: "word-order",
      words: ["t3_w1", "t3_w2", "t3_w3"],
      correctOrder: [0, 1, 2],
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
  icon: "🏔️",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const ComparisonExplorerK3 = memo(function ComparisonExplorerK3({
  color = "#8B5CF6",
  onDone,
  lang = "de",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={3} explorerId="deutsch_k3_comparison" color={color} lang={lang} onDone={onDone} />;
});

export default ComparisonExplorerK3;
