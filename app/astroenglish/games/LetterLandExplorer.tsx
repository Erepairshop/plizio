"use client";
// LetterLandExplorer.tsx — AstroEnglish Grade 1: i2 Letter Land
// Topics: 1) Uppercase & Lowercase 2) Matching Pairs 3) Syllables 4) Capitals in Sentences 5) Letter Hunt

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric) ───────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F5F3FF" rx="20" />
      {/* Uppercase vs Lowercase Visualization */}
      <g transform="translate(70, 70)">
        <rect x="-30" y="-30" width="60" height="60" fill="#8B5CF6" rx="10" />
        <text x="0" y="15" textAnchor="middle" fontSize="40" fontWeight="bold" fill="white">A</text>
      </g>
      <path d="M 110,70 L 130,70" stroke="#DDD6FE" strokeWidth="4" markerEnd="url(#arrow)" />
      <g transform="translate(170, 70)">
        <circle cx="0" cy="0" r="30" fill="#A78BFA" />
        <text x="0" y="12" textAnchor="middle" fontSize="35" fontWeight="bold" fill="white">a</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FAFAF9" rx="20" />
      {/* Connecting Big and Small Letters */}
      <g transform="translate(60, 40)">
        <rect x="-20" y="-20" width="40" height="40" fill="#14B8A6" rx="8" />
        <text x="0" y="8" textAnchor="middle" fontSize="24" fontWeight="bold" fill="white">B</text>
      </g>
      <g transform="translate(180, 100)">
        <circle cx="0" cy="0" r="20" fill="#5EEAD4" />
        <text x="0" y="8" textAnchor="middle" fontSize="24" fontWeight="bold" fill="white">b</text>
      </g>
      <path d="M 80,40 Q 130,40 130,70 T 160,100" fill="none" stroke="#99F6E4" strokeWidth="6" strokeDasharray="6 6" strokeLinecap="round" />
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FFF7ED" rx="20" />
      {/* Syllable Blocks: RO - BOT */}
      <g transform="translate(120, 70)">
        <rect x="-75" y="-25" width="60" height="50" fill="#F97316" rx="10" />
        <text x="-45" y="5" textAnchor="middle" fontSize="22" fontWeight="bold" fill="white">RO</text>
        
        <circle cx="0" cy="0" r="10" fill="#FED7AA" />
        <text x="0" y="5" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#C2410C">+</text>
        
        <rect x="15" y="-25" width="60" height="50" fill="#F97316" rx="10" />
        <text x="45" y="5" textAnchor="middle" fontSize="22" fontWeight="bold" fill="white">BOT</text>
      </g>
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0FDF4" rx="20" />
      {/* Sentences start with Big Letters */}
      <g transform="translate(120, 70)">
        <rect x="-100" y="-20" width="200" height="40" fill="white" stroke="#86EFAC" strokeWidth="4" rx="10" />
        <rect x="-95" y="-15" width="25" height="30" fill="#22C55E" rx="5" />
        <text x="-82" y="8" textAnchor="middle" fontSize="24" fontWeight="bold" fill="white">T</text>
        <text x="-60" y="6" fontSize="20" fill="#166534" fontStyle="italic">he cat is sleeping.</text>
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#0F172A" rx="20" />
      {/* Galaxy Background for Letter Hunt */}
      <circle cx="40" cy="30" r="2" fill="#FFFFFF" opacity="0.5" />
      <circle cx="200" cy="40" r="3" fill="#FFFFFF" opacity="0.8" />
      <circle cx="100" cy="110" r="1.5" fill="#FFFFFF" opacity="0.6" />
      <circle cx="180" cy="100" r="2.5" fill="#FFFFFF" opacity="0.4" />
      <path d="M 0,140 Q 60,80 120,100 T 240,60 L 240,140 Z" fill="#1E293B" />
      <path d="M 0,140 Q 80,110 160,130 T 240,100 L 240,140 Z" fill="#334155" />
      {/* The tap-count buttons (🅰️) will appear here! */}
    </svg>
  );
});

// ─── LABELS (100% ENGLISH) ──────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Letter Land",
    
    // T1: Uppercase & Lowercase
    t1_title: "Big and Small Letters",
    t1_text: "Every letter in the alphabet has two shapes: a big one (Uppercase) and a small one (Lowercase).",
    t1_b1: "Uppercase letters are tall and strong (A, B, C).",
    t1_b2: "Lowercase letters are smaller (a, b, c).",
    t1_b3: "Most of the words we read use lowercase letters.",
    t1_inst: "Sort the letters into the correct buckets!",
    t1_bucket_big: "Uppercase (Big)",
    t1_bucket_small: "Lowercase (Small)",
    t1_item_b1: "M", t1_item_b2: "R",
    t1_item_s1: "m", t1_item_s2: "r",
    t1_q: "Which of these is an uppercase (big) letter?",
    t1_q_a: "H", t1_q_b: "e", t1_q_c: "y", t1_q_d: "p",

    // T2: Matching Pairs
    t2_title: "Letter Partners",
    t2_text: "Uppercase and lowercase letters are partners. They look different, but they make the exact same sound!",
    t2_b1: "Big 'G' and little 'g' both make the /g/ sound.",
    t2_b2: "Big 'Q' partners with little 'q'.",
    t2_b3: "Big 'R' partners with little 'r'.",
    t2_inst: "Match the uppercase letter with its lowercase partner!",
    t2_l1: "G", t2_r1: "g",
    t2_l2: "Q", t2_r2: "q",
    t2_l3: "R", t2_r3: "r",
    t2_q: "Which letter is the small partner for the big letter 'D'?",
    t2_q_a: "d", t2_q_b: "b", t2_q_c: "p", t2_q_d: "q",

    // T3: Syllables
    t3_title: "Clap the Syllables",
    t3_text: "Words can be broken into smaller chunks called syllables. You can clap your hands to count them!",
    t3_b1: "'Cat' has 1 clap (1 syllable).",
    t3_b2: "'Ro-bot' has 2 claps (2 syllables).",
    t3_b3: "'Ba-na-na' has 3 claps (3 syllables).",
    t3_inst: "Put the syllables in the right order to build the word 'ROBOT'!",
    t3_w1: "RO", t3_w2: "BOT",
    t3_q: "How many syllables are in the word 'Apple'?",
    t3_q_a: "2", t3_q_b: "1", t3_q_c: "3", t3_q_d: "4",

    // T4: Capitals in Sentences
    t4_title: "Capitals in Sentences",
    t4_text: "In English, every sentence must start with a big uppercase letter. Names of people and places also start with a big letter!",
    t4_b1: "A sentence begins with a capital letter.",
    t4_b2: "The name 'Ben' always starts with a big 'B'.",
    t4_b3: "The word 'I' is always capitalized.",
    t4_inst: "Find and mark the TWO words that start with a capital letter!",
    t4_tok0: "My", t4_tok1: "best", t4_tok2: "friend", t4_tok3: "is", t4_tok4: "Ben.",
    t4_q: "What must every English sentence start with?",
    t4_q_a: "A capital (uppercase) letter", t4_q_b: "A number", t4_q_c: "A lowercase letter", t4_q_d: "A picture",

    // T5: Letter Hunt
    t5_title: "Galaxy Letter Hunt",
    t5_text: "Letters are floating in the Letter Land galaxy! Can you find them all before they drift away?",
    t5_b1: "There are 26 letters in the alphabet.",
    t5_b2: "Look closely at the stars.",
    t5_b3: "Tap the letters to catch them!",
    t5_inst: "Find and tap the 5 letters (🅰️) hiding in the galaxy!",
    t5_q: "How many letters are in the English alphabet?",
    t5_q_a: "26", t5_q_b: "10", t5_q_c: "50", t5_q_d: "100",
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
        { id: "big", label: "t1_bucket_big" },
        { id: "small", label: "t1_bucket_small" },
      ],
      items: [
        { text: "t1_item_b1", bucketId: "big" },
        { text: "t1_item_s1", bucketId: "small" },
        { text: "t1_item_b2", bucketId: "big" },
        { text: "t1_item_s2", bucketId: "small" },
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
      type: "word-order",
      words: ["t3_w1", "t3_w2"],
      correctOrder: [0, 1],
      instruction: "t3_inst",
      hint1: "t3_b2",
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
    svg: () => <Topic4Svg />,
    bulletKeys: ["t4_b1", "t4_b2", "t4_b3"],
    interactive: {
      type: "highlight-text",
      tokens: ["t4_tok0", "t4_tok1", "t4_tok2", "t4_tok3", "t4_tok4"],
      correctIndices: [0, 4], // "My" and "Ben."
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
      tapCount: { emoji: "🅰️", count: 5 },
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

const LetterLandExplorer = memo(function LetterLandExplorer({
  color = "#8B5CF6", // Violet-500 for a spacey/letter vibe
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
      explorerId="english_k1_letter_land" 
      color={color} 
      lang="en" // Forcing English as this is an ELA module
      onDone={onDone} 
    />
  );
});

export default LetterLandExplorer;
