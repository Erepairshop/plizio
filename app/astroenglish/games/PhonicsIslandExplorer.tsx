"use client";
// PhonicsIslandExplorer.tsx — AstroEnglish Grade 1: i1 Phonics Island
// Topics: 1) Short Vowels 2) Long Vowels (Magic E) 3) The 'sh' Digraph 4) 'ch' & 'th' Digraphs 5) Digraph Detective

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric) ───────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FDF2F8" rx="20" />
      {/* Short Vowel: CAT (A) */}
      <g transform="translate(60, 75)">
        <circle cx="0" cy="0" r="25" fill="#F472B6" />
        <polygon points="-15,-15 -25,-35 -5,-20" fill="#DB2777" />
        <polygon points="15,-15 25,-35 5,-20" fill="#DB2777" />
        <circle cx="-10" cy="-5" r="3" fill="#FFFFFF" />
        <circle cx="-10" cy="-5" r="1.5" fill="#000000" />
        <circle cx="10" cy="-5" r="3" fill="#FFFFFF" />
        <circle cx="10" cy="-5" r="1.5" fill="#000000" />
        <polygon points="-3,3 3,3 0,7" fill="#000000" />
      </g>
      {/* Short Vowel: SUN (U) */}
      <g transform="translate(180, 75)">
        <circle cx="0" cy="0" r="20" fill="#FBBF24" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map(deg => (
          <line key={deg} x1="0" y1="-25" x2="0" y2="-35" stroke="#F59E0B" strokeWidth="4" strokeLinecap="round" transform={`rotate(${deg})`} />
        ))}
      </g>
      {/* Separator */}
      <line x1="120" y1="20" x2="120" y2="120" stroke="#FBCFE8" strokeWidth="4" strokeDasharray="6 6" />
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FFFBEB" rx="20" />
      {/* Long Vowel: CAKE (A) */}
      <g transform="translate(60, 85)">
        <rect x="-25" y="-15" width="50" height="30" fill="#FDE047" rx="4" />
        <path d="M -25,-15 Q 0,-25 25,-15" fill="#FEF08A" />
        <path d="M -25,15 Q 0,25 25,15" fill="#FEF08A" />
        <rect x="-30" y="15" width="60" height="5" fill="#D97706" rx="2" />
        {/* Candles */}
        <rect x="-12" y="-30" width="4" height="15" fill="#EF4444" />
        <rect x="8" y="-30" width="4" height="15" fill="#3B82F6" />
        <circle cx="-10" cy="-33" r="3" fill="#F97316" />
        <circle cx="10" cy="-33" r="3" fill="#F97316" />
      </g>
      {/* Long Vowel: BIKE (I) */}
      <g transform="translate(180, 85)">
        <circle cx="-15" cy="5" r="12" fill="none" stroke="#475569" strokeWidth="4" />
        <circle cx="15" cy="5" r="12" fill="none" stroke="#475569" strokeWidth="4" />
        <line x1="-15" y1="5" x2="0" y2="-10" stroke="#EF4444" strokeWidth="3" />
        <line x1="15" y1="5" x2="0" y2="-10" stroke="#EF4444" strokeWidth="3" />
        <line x1="-20" y1="-10" x2="5" y2="-10" stroke="#EF4444" strokeWidth="3" />
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#E0F2FE" rx="20" />
      {/* SH Digraph: SHIP */}
      <g transform="translate(120, 80)">
        <path d="M -40,0 L 40,0 L 25,20 L -25,20 Z" fill="#B45309" />
        <rect x="-3" y="-40" width="6" height="40" fill="#78350F" />
        <path d="M 3,-35 Q 25,-20 3,-5 Z" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="2" />
        {/* Waves */}
        <path d="M -80,20 Q -60,10 -40,20 T 0,20 T 40,20 T 80,20" fill="none" stroke="#3B82F6" strokeWidth="4" strokeLinecap="round" />
      </g>
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0FDF4" rx="20" />
      {/* CH Digraph: CHAIR */}
      <g transform="translate(120, 80)">
        <rect x="-15" y="-30" width="30" height="30" fill="#D97706" rx="2" />
        <rect x="-15" y="0" width="30" height="6" fill="#B45309" />
        <rect x="-12" y="6" width="5" height="20" fill="#D97706" />
        <rect x="7" y="6" width="5" height="20" fill="#D97706" />
        <line x1="-5" y1="-20" x2="-5" y2="-5" stroke="#FEF3C7" strokeWidth="2" strokeLinecap="round" />
        <line x1="5" y1="-20" x2="5" y2="-5" stroke="#FEF3C7" strokeWidth="2" strokeLinecap="round" />
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#1E293B" rx="20" />
      {/* Magnifying Glass for Detective */}
      <g transform="translate(120, 70)">
        <circle cx="0" cy="0" r="40" fill="#F8FAFC" opacity="0.1" />
        <line x1="20" y1="20" x2="45" y2="45" stroke="#94A3B8" strokeWidth="10" strokeLinecap="round" />
        <circle cx="0" cy="0" r="30" fill="none" stroke="#64748B" strokeWidth="6" />
      </g>
    </svg>
  );
});

// ─── LABELS (100% ENGLISH) ──────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Phonics Island",
    
    // T1: Short Vowels
    t1_title: "Short Vowels",
    t1_text: "Short vowels (a, e, i, o, u) make a short, quick sound. You can hear them in the middle of words like 'cat' and 'sun'.",
    t1_b1: "The word 'cat' has a short 'a' sound.",
    t1_b2: "The word 'sun' has a short 'u' sound.",
    t1_b3: "Vowels are the glue of every word!",
    t1_inst: "Sort the words by their short vowel sound!",
    t1_bucket_a: "Short 'a' (Cat)",
    t1_bucket_u: "Short 'u' (Sun)",
    t1_item_a1: "Hat", t1_item_a2: "Map",
    t1_item_u1: "Cup", t1_item_u2: "Bug",
    t1_q: "Which word has a short 'a' sound?",
    t1_q_a: "Cat", t1_q_b: "Bike", t1_q_c: "Moon", t1_q_d: "Tree",

    // T2: Long Vowels (Magic E)
    t2_title: "Long Vowels (Magic E)",
    t2_text: "A long vowel says its own alphabet letter name. Often, a silent 'e' at the end of a word makes the vowel long!",
    t2_b1: "In 'cake', the 'a' is long and the 'e' is silent.",
    t2_b2: "In 'bike', the 'i' is long.",
    t2_b3: "In 'rope', the 'o' is long.",
    t2_inst: "Match the word to its long vowel sound!",
    t2_l1: "Cake", t2_r1: "Long 'a'",
    t2_l2: "Bike", t2_r2: "Long 'i'",
    t2_l3: "Rope", t2_r3: "Long 'o'",
    t2_q: "What makes the 'a' long in the word 'cake'?",
    t2_q_a: "The silent 'e' at the end", t2_q_b: "The letter 'c'", t2_q_c: "There is no 'a' sound", t2_q_d: "The length of the word",

    // T3: The 'sh' Digraph
    t3_title: "The 'sh' Digraph",
    t3_text: "A digraph is when two letters sit together and make one new sound. 'S' and 'H' make the /sh/ sound.",
    t3_b1: "'Ship' starts with the /sh/ sound.",
    t3_b2: "'Shell' also starts with /sh/.",
    t3_b3: "You hear /sh/ at the end of 'fish'.",
    t3_inst: "Find and mark the TWO words that have the 'sh' sound!",
    t3_tok0: "The", t3_tok1: "ship", t3_tok2: "has", t3_tok3: "a", t3_tok4: "shell", t3_tok5: "on", t3_tok6: "it.",
    t3_q: "Which word STARTS with the /sh/ sound?",
    t3_q_a: "Ship", t3_q_b: "Sun", t3_q_c: "Fish", t3_q_d: "Cat",

    // T4: The 'ch' and 'th' Digraphs
    t4_title: "The 'ch' & 'th' Sounds",
    t4_text: "'C' and 'H' together make the /ch/ sound (like in 'chair'). 'T' and 'H' together make the /th/ sound.",
    t4_b1: "CH: Chair, Cheese, Chips.",
    t4_b2: "TH: Think, Bath, Thumb.",
    t4_b3: "Try saying them out loud!",
    t4_inst: "Put the words in order to make a sentence!",
    t4_w1: "The", t4_w2: "chair", t4_w3: "is", t4_w4: "red.",
    t4_q: "Which digraph do you hear at the start of 'chair'?",
    t4_q_a: "CH", t4_q_b: "SH", t4_q_c: "TH", t4_q_d: "PH",

    // T5: Digraph Detective
    t5_title: "Digraph Detective",
    t5_text: "Some letter buddies are hiding in the dark! As a detective, use your magnifying glass to find them.",
    t5_b1: "Look for 'SH', 'CH', and 'TH'.",
    t5_b2: "Pay attention to the details!",
    t5_b3: "Tap them when you find them!",
    t5_inst: "Click the 5 hidden digraphs (🔤) to collect them!",
    t5_q: "What does 'digraph' mean in phonics?",
    t5_q_a: "Two letters that make one sound", t5_q_b: "A very long word", t5_q_c: "A period at the end", t5_q_d: "A type of animal",
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
        { id: "a", label: "t1_bucket_a" },
        { id: "u", label: "t1_bucket_u" },
      ],
      items: [
        { text: "t1_item_a1", bucketId: "a" },
        { text: "t1_item_u1", bucketId: "u" },
        { text: "t1_item_a2", bucketId: "a" },
        { text: "t1_item_u2", bucketId: "u" },
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
      correctIndices: [1, 4], // "ship" and "shell"
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
      tapCount: { emoji: "🔤", count: 5 }, // Digraph hunt
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
  icon: "🔤",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const PhonicsIslandExplorer = memo(function PhonicsIslandExplorer({
  color = "#F472B6", // Pink-400 for Phonicia planet
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
      explorerId="english_k1_phonics_island" 
      color={color} 
      // Force 'en' to always use the English labels regardless of app state, 
      // or rely on the engine defaulting to English if the translation is missing.
      lang="en" 
      onDone={onDone} 
    />
  );
});

export default PhonicsIslandExplorer;
