"use client";
// CapitalK4Explorer.tsx — AstroEnglish Grade 4: i6 Capital Crater
// Topics: 1) Advanced Capitalization 2) Commas in a Series 3) Tricky Spelling 4) Edit the Sentence 5) Letter Catch

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric) ───────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#0F172A" rx="20" />
      {/* Big Letter A vs small a in a crater */}
      <circle cx="120" cy="70" r="45" fill="#1E293B" stroke="#334155" strokeWidth="2" />
      <text x="120" y="85" textAnchor="middle" fontSize="60" fontWeight="black" fill="#FDE047">A</text>
      <text x="155" y="100" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#94A3B8">a</text>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#1E1B4B" rx="20" />
      {/* Comma separation items */}
      <g transform="translate(120, 70)">
        <rect x="-80" y="-15" width="30" height="30" fill="#3B82F6" rx="4" />
        <text x="-40" y="15" fontSize="30" fontWeight="black" fill="#F43F5E">,</text>
        <rect x="-10" y="-15" width="30" height="30" fill="#10B981" rx="4" />
        <text x="30" y="15" fontSize="30" fontWeight="black" fill="#F43F5E">,</text>
        <rect x="60" y="-15" width="30" height="30" fill="#F59E0B" rx="4" />
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#0C0A09" rx="20" />
      {/* Crater field for catch */}
      <ellipse cx="60" cy="110" rx="40" ry="15" fill="#292524" />
      <ellipse cx="180" cy="40" rx="30" ry="10" fill="#292524" />
      <ellipse cx="120" cy="80" rx="20" ry="8" fill="#292524" />
      <text x="120" y="125" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#A8A29E">Catch the Capital Letters!</text>
    </svg>
  );
});

// ─── LABELS (100% ENGLISH) ──────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Capital Crater",
    
    // T1: Advanced Capitalization
    t1_title: "Proper Nouns & Titles",
    t1_text: "In 4th Grade, we use capital letters for more than just names. We capitalize specific places, titles of books, months, and important organizations like NASA!",
    t1_b1: "Titles: 'Commander' Smith, 'The' Martian.",
    t1_b2: "Places: 'Houston' Space Center, 'Viking' Crater.",
    t1_b3: "Always capitalize 'I' and the start of sentences.",
    t1_inst: "Which words in this list MUST start with a capital letter?",
    t1_bucket_cap: "Capital (Specific)",
    t1_bucket_low: "Lowercase (General)",
    t1_item_c1: "Jupiter", t1_item_c2: "NASA",
    t1_item_l1: "planet", t1_item_l2: "rocket",
    t1_q: "Which word should be capitalized in: 'we visited the kennedy space center'?",
    t1_q_a: "Kennedy Space Center", t1_q_b: "visited", t1_q_c: "the", t1_q_d: "we",

    // T2: Commas in a Series
    t2_title: "Commas in a Series",
    t2_text: "When you list three or more things, you must separate them with commas. This helps the reader take a tiny breath!",
    t2_b1: "Example: I saw stars, planets, and moons.",
    t2_b2: "Don't forget the comma before 'and' (The Oxford Comma).",
    t2_b3: "Keep your lists organized.",
    t2_inst: "Place the commas in the correct spots in this space list!",
    t2_sentence: "We packed food ___ water ___ fuel ___ and maps.",
    t2_c1: ",", t2_c2: ".", t2_c3: ";",
    t2_q: "How many commas do you need for a list of 4 items?",
    t2_q_a: "3", t2_q_b: "4", t2_q_c: "2", t2_q_d: "1",

    // T3: Tricky Spelling
    t3_title: "Spelling Scanners",
    t3_text: "Some space words have tricky spellings like double letters or silent letters. Let's scan for the correct ones!",
    t3_b1: "Sattellite? No, it's 'Satellite'.",
    t3_b2: "Mission (double s).",
    t3_b3: "Occur (double c).",
    t3_inst: "Match the incorrectly spelled word to its correct version!",
    t3_l1: "galaxi", t3_r1: "galaxy",
    t3_l2: "planit", t3_r2: "planet",
    t3_l3: "misshun", t3_r3: "mission",
    t3_q: "Which is the correct spelling for a person who flies a ship?",
    t3_q_a: "astronaut", t3_q_b: "astronot", t3_q_c: "astrunaut", t3_q_d: "astronat",

    // T4: Edit the Sentence
    t4_title: "Sentence Surgeon",
    t4_text: "Time to fix everything! Look for missing capitals, missing commas, and spelling mistakes in the data log.",
    t4_b1: "Check the first word.",
    t4_b2: "Check the names of planets.",
    t4_b3: "Check for commas in lists.",
    t4_inst: "Highlight the word that has a CAPITALIZATION mistake!",
    t4_tok0: "The", t4_tok1: "rover", t4_tok2: "found", t4_tok3: "ice", t4_tok4: "on", t4_tok5: "mars", t4_tok6: "last", t4_tok7: "Tuesday.",
    t4_q: "What is wrong with 'The ship left on monday'?",
    t4_q_a: "Monday needs a capital M.", t4_q_b: "The needs a lowercase t.", t4_q_c: "It needs a comma.", t4_q_d: "Nothing is wrong.",

    // T5: Fun Catch
    t5_title: "Letter Harvest",
    t5_text: "Great precision! You've cleaned up the logs. Now, catch the big capital letters floating above the crater.",
    t5_b1: "Capitals are tall and strong.",
    t5_b2: "Catch only the Big ones!",
    t5_b3: "Catch 6 capital letters!",
    t5_inst: "Tap the 6 Capital Letters (A, B, C...) floating in the crater!",
    t5_q: "Do we capitalize the names of the seasons (summer, winter)?",
    t5_q_a: "No", t5_q_b: "Yes", t5_q_c: "Only if they are at the start", t5_q_d: "Only in the North",
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
        { id: "cap", label: "t1_bucket_cap" },
        { id: "low", label: "t1_bucket_low" },
      ],
      items: [
        { text: "t1_item_c1", bucketId: "cap" },
        { text: "t1_item_l1", bucketId: "low" },
        { text: "t1_item_c2", bucketId: "cap" },
        { text: "t1_item_l2", bucketId: "low" },
      ],
      instruction: "t1_inst",
      hint1: "t1_b1",
      hint2: "t1_b2",
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
      sentence: "t2_sentence",
      choices: ["t2_c1", "t2_c2", "t2_c3"],
      correctIndex: 0, // ","
      instruction: "t2_inst",
      hint1: "t2_b1",
      hint2: "t2_b2",
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
      ],
      instruction: "t3_inst",
      hint1: "t3_b1",
      hint2: "t3_b3",
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
      tokens: ["t4_tok0", "t4_tok1", "t4_tok2", "t4_tok3", "t4_tok4", "t4_tok5", "t4_tok6", "t4_tok7"],
      correctIndices: [5], // "mars"
      instruction: "t4_inst",
      hint1: "t4_b2",
      hint2: "t4_b1",
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
      type: "tap-count",
      tapCount: { emoji: "🅰️", count: 6 }, 
      instruction: "t5_inst",
      hint1: "t5_b1",
      hint2: "t5_b2",
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
  icon: "🅰️",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const CapitalK4Explorer = memo(function CapitalK4Explorer({
  color = "#94A3B8", // Slate-400 for the stone/crater feel
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return (
    <ExplorerEngine 
      def={DEF} 
      grade={4} 
      explorerId="english_k4_capital_crater" 
      color={color} 
      lang="en" // Forcing English ELA
      onDone={onDone} 
    />
  );
});

export default CapitalK4Explorer;
