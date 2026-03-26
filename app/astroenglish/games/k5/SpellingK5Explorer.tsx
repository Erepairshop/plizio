"use client";
// SpellingK5Explorer.tsx — AstroEnglish Grade 5: i6 Spelling Shore
// Topics: 1) Double Consonants 2) Tricky Endings 3) Silent Letters 4) Common Mistakes 5) Shell Catch

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric) ───────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FDE68A" rx="20" />
      {/* Double letters in sand */}
      <g transform="translate(120, 70)">
        <text x="-40" y="10" fontSize="40" fontWeight="black" fill="#B45309" opacity="0.4">S S</text>
        <text x="40" y="10" fontSize="40" fontWeight="black" fill="#B45309" opacity="0.4">C C</text>
        <rect x="-90" y="-20" width="180" height="40" fill="none" stroke="#D97706" strokeWidth="2" strokeDasharray="5,5" rx="10" />
        <text x="0" y="10" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#92400E">Double Trouble!</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#0EA5E9" rx="20" />
      {/* Suffix waves */}
      <path d="M 0,100 Q 30,80 60,100 T 120,100 T 180,100 T 240,100 L 240,140 L 0,140 Z" fill="#38BDF8" />
      <g transform="translate(60, 60)">
        <rect x="-30" y="-15" width="60" height="30" fill="#BAE6FD" rx="5" />
        <text x="0" y="5" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0369A1">-able</text>
      </g>
      <g transform="translate(180, 60)">
        <rect x="-30" y="-15" width="60" height="30" fill="#BAE6FD" rx="5" />
        <text x="0" y="5" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0369A1">-ible</text>
      </g>
      <path d="M 90,60 L 150,60" stroke="white" strokeWidth="2" strokeDasharray="4,2" markerEnd="url(#arrow)" />
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#1E293B" rx="20" />
      {/* Ghostly silent letters */}
      <g transform="translate(120, 70)">
        <text x="0" y="0" textAnchor="middle" fontSize="30" fontWeight="bold" fill="white">K<tspan opacity="0.3">night</tspan></text>
        <path d="M -25,-30 Q -15,-50 0,-30 T 25,-30 L 25,-10 Q 0,10 -25,-10 Z" fill="white" opacity="0.1" />
        <text x="0" y="35" textAnchor="middle" fontSize="12" fill="#94A3B8">The invisible letters</text>
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FBBF24" rx="20" />
      {/* Beach items */}
      <path d="M 0,120 Q 120,100 240,120 L 240,140 L 0,140 Z" fill="#0284C7" />
      <g transform="translate(60, 110)">
        <path d="M -10,0 A 10,10 0 0,1 10,0 L 8,5 L -8,5 Z" fill="#FEF3C7" />
        <path d="M -8,2 L 8,2" stroke="#D97706" strokeWidth="1" />
      </g>
      <g transform="translate(180, 105)">
        <path d="M -10,0 A 10,10 0 0,1 10,0 L 8,5 L -8,5 Z" fill="#FEF3C7" transform="rotate(20)" />
      </g>
      <text x="120" y="50" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#92400E">Tap the sea shells!</text>
    </svg>
  );
});

// ─── LABELS (100% ENGLISH) ──────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Spelling Shore",
    
    // T1: Double Consonants
    t1_title: "Double Consonants",
    t1_text: "Many English words have double letters. The most common are 'ss', 'll', 'cc', and 'tt'. You must memorize which words need them!",
    t1_b1: "Necessary (one c, double s).",
    t1_b2: "Address (double d, double s).",
    t1_b3: "Satellite (double l).",
    t1_inst: "Choose the correctly spelled word with double consonants!",
    t1_c1: "necessary", t1_c2: "neccesary", t1_c3: "necesary",
    t1_q: "Which word is spelled correctly?",
    t1_q_a: "address", t1_q_b: "adress", t1_q_c: "addres", t1_q_d: "adrees",

    // T2: Tricky Endings
    t2_title: "Tricky Suffixes",
    t2_text: "In Grade 5, you need to know the difference between tricky endings like -able/-ible and -ance/-ence. There are no perfect rules, but -able is more common!",
    t2_b1: "-able: comfortable, reliable.",
    t2_b2: "-ible: terrible, invisible.",
    t2_b3: "-ence: difference, sentence.",
    t2_inst: "Match the word root to its correct tricky ending!",
    t2_l1: "comfort", t2_r1: "able",
    t2_l2: "terr", t2_r2: "ible",
    t2_l3: "differ", t2_r3: "ence",
    t2_q: "How do you spell the word for something you can see?",
    t2_q_a: "visible", t2_q_b: "visable", t2_q_c: "visibel", t2_q_d: "visabel",

    // T3: Silent Letters
    t3_title: "Silent Letters",
    t3_text: "Some words have 'ghost letters' that are written but not spoken. They usually come from old versions of the English language.",
    t3_b1: "K: knight, knee, knowledge.",
    t3_b2: "W: write, wrist, answer.",
    t3_b3: "G: sign, gnaw, design.",
    t3_inst: "Highlight the SILENT letter in the word 'KNOWLEDGE'!",
    t3_tok0: "K", t3_tok1: "n", t3_tok2: "o", t3_tok3: "w", t3_tok4: "l", t3_tok5: "e", t3_tok6: "d", t3_tok7: "g", t3_tok8: "e",
    t3_q: "Which letter is silent in the word 'rhythm'?",
    t3_q_a: "h", t3_q_b: "r", t3_q_c: "y", t3_q_d: "m",

    // T4: Common Mistakes
    t4_title: "Common Spelling Traps",
    t4_text: "Some words are just plain difficult. Let's practice the ones that students (and adults!) often get wrong.",
    t4_b1: "Separate (has 'a rat' in it).",
    t4_b2: "Definitely (no 'a' in the middle).",
    t4_b3: "Environment (don't forget the 'n').",
    t4_inst: "Sort the words: Is the spelling Correct or Incorrect?",
    t4_bucket_cor: "Correct",
    t4_bucket_inc: "Incorrect",
    t4_item_c1: "definitely", t4_item_c2: "separate",
    t4_item_i1: "definately", t4_item_i2: "seperate",
    t4_q: "Which sentence uses the correct spelling?",
    t4_q_a: "The environment is clean.", t4_q_b: "The enviroment is clean.", t4_q_c: "The enviromant is clean.", t4_q_d: "The envirenment is clean.",

    // T5: Fun Catch
    t5_title: "Shell Collection",
    t5_text: "Your spelling is as sharp as a seagull's eyes! Let's collect the shells washed up on the Spelling Shore.",
    t5_b1: "Watch for the waves.",
    t5_b2: "Shells have hidden words.",
    t5_b3: "Catch 6 shells!",
    t5_inst: "Tap the 6 sea shells (🐚) on the sand!",
    t5_q: "How many 's' letters are in the word 'success'?",
    t5_q_a: "2", t5_q_b: "1", t5_q_c: "3", t5_q_d: "4",
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
      sentence: "t1_sentence", // Not used in this type but needed for engine
      choices: ["t1_c1", "t1_c2", "t1_c3"],
      correctIndex: 0,
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
      type: "match-pairs",
      pairs: [
        { left: "t2_l1", right: "t2_r1" },
        { left: "t2_l2", right: "t2_r2" },
        { left: "t2_l3", right: "t2_r3" },
      ],
      instruction: "t2_inst",
      hint1: "t2_b1",
      hint2: "t2_b3",
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
      type: "highlight-text",
      tokens: ["t3_tok0", "t3_tok1", "t3_tok2", "t3_tok3", "t3_tok4", "t3_tok5", "t3_tok6", "t3_tok7", "t3_tok8"],
      correctIndices: [0], // "K" is the most famous silent one here
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
      type: "drag-to-bucket",
      buckets: [
        { id: "cor", label: "t4_bucket_cor" },
        { id: "inc", label: "t4_bucket_inc" },
      ],
      items: [
        { text: "t4_item_c1", bucketId: "cor" },
        { text: "t4_item_i1", bucketId: "inc" },
        { text: "t4_item_c2", bucketId: "cor" },
        { text: "t4_item_i2", bucketId: "inc" },
      ],
      instruction: "t4_inst",
      hint1: "t4_b1",
      hint2: "t4_b2",
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
      tapCount: { emoji: "🐚", count: 6 }, 
      instruction: "t5_inst",
      hint1: "t5_b1",
      hint2: "t5_b2",
    },
    quiz: {
      question: "t5_q",
      choices: ["t5_q_a", "t5_q_b", "t5_q_c", "t5_q_d"],
      answer: "t5_q_d", // 4: success (2 c-s, 2 s-es)
    },
  },
];

// ─── DEF ────────────────────────────────────────────────────────────

const DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "📝",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const SpellingK5Explorer = memo(function SpellingK5Explorer({
  color = "#D97706", // Amber-600 for the sand/beach theme
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
      grade={5} 
      explorerId="english_k5_spelling_shore" 
      color={color} 
      lang="en" // Forcing English ELA
      onDone={onDone} 
    />
  );
});

export default SpellingK5Explorer;
