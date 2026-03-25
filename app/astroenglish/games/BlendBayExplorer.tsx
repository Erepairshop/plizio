"use client";
// BlendBayExplorer.tsx — AstroEnglish Grade 1: i3 Blend Bay
// Topics: 1) What is a Blend? (bl) 2) More Blends (cr, st) 3) Rhyming Words 4) Blend Sentences 5) Star Hunt

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric) ───────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#ECFEFF" rx="20" />
      {/* "bl" Blend: Blocks */}
      <g transform="translate(120, 80)">
        <rect x="-40" y="-10" width="30" height="30" fill="#3B82F6" rx="4" />
        <text x="-25" y="10" textAnchor="middle" fontSize="16" fontWeight="bold" fill="white">B</text>
        
        <rect x="10" y="-10" width="30" height="30" fill="#EF4444" rx="4" />
        <text x="25" y="10" textAnchor="middle" fontSize="16" fontWeight="bold" fill="white">L</text>
        
        <rect x="-15" y="-40" width="30" height="30" fill="#22C55E" rx="4" />
        <text x="0" y="-20" textAnchor="middle" fontSize="16" fontWeight="bold" fill="white">O</text>

        {/* Action lines showing them blending together */}
        <path d="M -10,5 Q 0,15 10,5" fill="none" stroke="#0EA5E9" strokeWidth="3" strokeDasharray="4 4" />
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0FDF4" rx="20" />
      {/* "st" Blend: Star */}
      <g transform="translate(70, 70)">
        <polygon points="0,-25 7,-8 25,-8 10,5 15,22 0,12 -15,22 -10,5 -25,-8 -7,-8" fill="#FBBF24" />
        <text x="0" y="5" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#B45309">st</text>
      </g>
      {/* "cr" Blend: Crab (Geometric) */}
      <g transform="translate(170, 70)">
        <ellipse cx="0" cy="5" rx="20" ry="12" fill="#EF4444" />
        <circle cx="-10" cy="-5" r="3" fill="#000" />
        <circle cx="10" cy="-5" r="3" fill="#000" />
        {/* Claws */}
        <path d="M -15,5 Q -25,-15 -15,-25" fill="none" stroke="#EF4444" strokeWidth="4" strokeLinecap="round" />
        <path d="M 15,5 Q 25,-15 15,-25" fill="none" stroke="#EF4444" strokeWidth="4" strokeLinecap="round" />
        <text x="0" y="10" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#FFF">cr</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FFFBEB" rx="20" />
      {/* Rhyming Words: CAT and HAT */}
      <g transform="translate(70, 70)">
        <circle cx="0" cy="0" r="20" fill="#F472B6" />
        <polygon points="-10,-15 -20,-30 -2,-20" fill="#DB2777" />
        <polygon points="10,-15 20,-30 2,-20" fill="#DB2777" />
        <text x="0" y="35" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#BE185D">CAT</text>
      </g>
      <path d="M 105,70 L 135,70" stroke="#D97706" strokeWidth="4" strokeDasharray="6 4" />
      <g transform="translate(170, 70)">
        <path d="M -25,10 L 25,10 L 25,20 L -25,20 Z" fill="#3B82F6" />
        <path d="M -15,10 L -15,-15 Q 0,-25 15,-15 L 15,10 Z" fill="#2563EB" />
        <text x="0" y="35" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#1D4ED8">HAT</text>
      </g>
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F8FAFC" rx="20" />
      {/* Abstract Sentence Building */}
      <g transform="translate(120, 70)">
        <rect x="-90" y="-15" width="40" height="30" fill="#CBD5E1" rx="5" />
        <rect x="-40" y="-15" width="50" height="30" fill="#94A3B8" rx="5" />
        <rect x="20" y="-15" width="70" height="30" fill="#64748B" rx="5" />
        {/* Blending lines */}
        <path d="M -70,25 Q -15,45 55,25" fill="none" stroke="#0EA5E9" strokeWidth="4" strokeLinecap="round" />
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#0F172A" rx="20" />
      {/* Night Sky over the Bay */}
      <path d="M 0,100 Q 60,90 120,110 T 240,100 L 240,140 L 0,140 Z" fill="#0369A1" />
      <path d="M 0,120 Q 80,105 160,125 T 240,110 L 240,140 L 0,140 Z" fill="#0284C7" />
      <circle cx="200" cy="40" r="20" fill="#FEF08A" /> {/* Moon */}
      {/* The tap-count stars (⭐) will be placed over this sky! */}
    </svg>
  );
});

// ─── LABELS (100% ENGLISH) ──────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Blend Bay",
    
    // T1: Blends (bl)
    t1_title: "What is a Blend?",
    t1_text: "A consonant blend is when two letters sit together, but you can still hear BOTH of their sounds. For example, 'b' and 'l' make the /bl/ sound in 'Blue'!",
    t1_b1: "You hear the 'b' and the 'l' in 'Block'.",
    t1_b2: "They are buddies, but they keep their own sounds.",
    t1_b3: "Other blends are 'cl', 'fl', and 'gl'.",
    t1_inst: "Sort the words by their starting sounds!",
    t1_bucket_bl: "Starts with 'bl'",
    t1_bucket_st: "Starts with 'st'",
    t1_item_b1: "Blue", t1_item_b2: "Block",
    t1_item_s1: "Star", t1_item_s2: "Stop",
    t1_q: "What do we call two consonants together where you can hear BOTH sounds?",
    t1_q_a: "A blend", t1_q_b: "A vowel", t1_q_c: "A digraph", t1_q_d: "A syllable",

    // T2: More Blends (cr, st)
    t2_title: "More Blend Buddies",
    t2_text: "There are many blends in English! 'C' and 'r' make /cr/ as in 'Crab'. 'S' and 't' make /st/ as in 'Star'.",
    t2_b1: "Crab, Cry, and Crown start with 'cr'.",
    t2_b2: "Star, Stop, and Step start with 'st'.",
    t2_b3: "Listen closely to the beginning of the words.",
    t2_inst: "Match the blend to the rest of the word!",
    t2_l1: "bl", t2_r1: "ue (blue)",
    t2_l2: "cr", t2_r2: "ab (crab)",
    t2_l3: "st", t2_r3: "ar (star)",
    t2_q: "Which word starts with the 'cr' blend?",
    t2_q_a: "Crab", t2_q_b: "Cat", t2_q_c: "Star", t2_q_d: "Blue",

    // T3: Rhyming Words
    t3_title: "Rhyme Time",
    t3_text: "Words rhyme when they sound the same at the end. 'Cat' and 'Hat' rhyme because they both end in the /at/ sound!",
    t3_b1: "Car and Star rhyme.",
    t3_b2: "Dog and Frog rhyme.",
    t3_b3: "Rhymes make poems and songs fun to read.",
    t3_inst: "Find and mark the TWO words that rhyme in this sentence!",
    t3_tok0: "The", t3_tok1: "fat", t3_tok2: "cat", t3_tok3: "sat", t3_tok4: "on", t3_tok5: "the", t3_tok6: "mat.",
    t3_q: "Which word rhymes with 'Star'?",
    t3_q_a: "Car", t3_q_b: "Stop", t3_q_c: "Moon", t3_q_d: "Sun",

    // T4: Blend Sentences
    t4_title: "Building Sentences",
    t4_text: "Let's use our blends and rhymes to build a complete sentence. Remember, start with a capital letter and end with a period!",
    t4_b1: "Read the words carefully.",
    t4_b2: "Make sure the sentence makes sense.",
    t4_b3: "Find the word with a blend!",
    t4_inst: "Put the words in order to build a sentence!",
    t4_w1: "The", t4_w2: "crab", t4_w3: "is", t4_w4: "red.",
    t4_q: "Which of these words has a consonant blend?",
    t4_q_a: "Crab", t4_q_b: "The", t4_q_c: "Is", t4_q_d: "Red",

    // T5: Star Hunt
    t5_title: "Starry Night",
    t5_text: "The 'st' blend is very special. It starts the word 'Star'! Look up at the sky over Blend Bay.",
    t5_b1: "A star shines bright.",
    t5_b2: "Can you spot them all?",
    t5_b3: "Catch them before they fall!",
    t5_inst: "Tap the 5 falling stars (⭐) in the night sky!",
    t5_q: "What blend does the word 'Star' start with?",
    t5_q_a: "st", t5_q_b: "sh", t5_q_c: "cr", t5_q_d: "bl",
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
        { id: "bl", label: "t1_bucket_bl" },
        { id: "st", label: "t1_bucket_st" },
      ],
      items: [
        { text: "t1_item_b1", bucketId: "bl" },
        { text: "t1_item_s1", bucketId: "st" },
        { text: "t1_item_b2", bucketId: "bl" },
        { text: "t1_item_s2", bucketId: "st" },
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
      type: "match-pairs",
      pairs: [
        { left: "t2_l1", right: "t2_r1" },
        { left: "t2_l2", right: "t2_r2" },
        { left: "t2_l3", right: "t2_r3" },
      ],
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
    svg: () => <Topic3Svg />,
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "highlight-text",
      tokens: ["t3_tok0", "t3_tok1", "t3_tok2", "t3_tok3", "t3_tok4", "t3_tok5", "t3_tok6"],
      // User can pick any two rhyming words from "fat cat sat mat" - let's set 'cat' and 'mat' as the primary targets for simplicity
      correctIndices: [2, 6], 
      instruction: "t3_inst",
      hint1: "t3_b1",
      hint2: "t3_b2",
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
      words: ["t4_w1", "t4_w2", "t4_w3", "t4_w4"],
      correctOrder: [0, 1, 2, 3],
      instruction: "t4_inst",
      hint1: "t4_b2",
      hint2: "t4_b3",
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
      tapCount: { emoji: "⭐", count: 5 }, // Stars for "st" blend
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
  icon: "🌊",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const BlendBayExplorer = memo(function BlendBayExplorer({
  color = "#06B6D4", // Cyan-500 for the water/bay theme
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
      grade={1} 
      explorerId="english_k1_blend_bay" 
      color={color} 
      lang="en" // Forcing English
      onDone={onDone} 
    />
  );
});

export default BlendBayExplorer;
