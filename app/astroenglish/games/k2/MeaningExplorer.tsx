"use client";
// MeaningExplorer.tsx — AstroEnglish Grade 2: i7 Meaning Moon
// Topics: 1) Synonyms 2) Antonyms 3) Shades of Meaning 4) Context Clues 5) Moon Rock Catch

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric) ───────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#0F172A" rx="20" />
      {/* Synonyms (Same Meaning) */}
      <g transform="translate(70, 70)">
        <circle cx="0" cy="0" r="25" fill="#3B82F6" />
        <text x="0" y="4" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#EFF6FF">huge</text>
      </g>
      <text x="120" y="75" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#94A3B8">=</text>
      <g transform="translate(170, 70)">
        <circle cx="0" cy="0" r="25" fill="#3B82F6" />
        <text x="0" y="4" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#EFF6FF">giant</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#1E1B4B" rx="20" />
      {/* Antonyms (Opposites) */}
      <g transform="translate(60, 70)">
        <polygon points="0,-25 25,25 -25,25" fill="#EF4444" />
        <text x="0" y="15" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#FEF2F2">HOT</text>
      </g>
      <text x="120" y="75" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#A78BFA">VS</text>
      <g transform="translate(180, 70)">
        <polygon points="0,25 25,-25 -25,-25" fill="#06B6D4" />
        <text x="0" y="-10" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#ECFEFF">COLD</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#172554" rx="20" />
      {/* Shades of Meaning (Strength bar) */}
      <g transform="translate(120, 70)">
        <rect x="-80" y="-10" width="40" height="20" fill="#60A5FA" rx="4" />
        <rect x="-30" y="-15" width="50" height="30" fill="#3B82F6" rx="4" />
        <rect x="30" y="-20" width="60" height="40" fill="#1D4ED8" rx="4" />
        
        <text x="-60" y="4" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#EFF6FF">big</text>
        <text x="-5" y="4" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#EFF6FF">huge</text>
        <text x="60" y="4" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#EFF6FF">gigantic!</text>
      </g>
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#064E3B" rx="20" />
      {/* Context Clues (Magnifying Glass) */}
      <g transform="translate(120, 70)">
        <rect x="-70" y="-15" width="140" height="30" fill="#047857" rx="5" />
        <rect x="-10" y="-10" width="50" height="20" fill="#10B981" rx="3" />
        <circle cx="15" cy="0" r="12" fill="none" stroke="#FDE047" strokeWidth="3" />
        <line x1="23" y1="8" x2="35" y2="20" stroke="#FDE047" strokeWidth="4" strokeLinecap="round" />
        <text x="-40" y="4" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#A7F3D0">The star is</text>
        <text x="15" y="4" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#064E3B">???</text>
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#1C1917" rx="20" />
      {/* Moon Surface Background */}
      <ellipse cx="120" cy="140" rx="150" ry="60" fill="#44403C" />
      <ellipse cx="60" cy="110" rx="20" ry="8" fill="#292524" opacity="0.5" />
      <ellipse cx="180" cy="120" rx="25" ry="10" fill="#292524" opacity="0.5" />
      <text x="120" y="70" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#A8A29E">Tap the moon rocks!</text>
    </svg>
  );
});

// ─── LABELS (100% ENGLISH) ──────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Meaning Moon",
    
    // T1: Synonyms
    t1_title: "Same Meaning (Synonyms)",
    t1_text: "Synonyms are words that mean exactly or almost the same thing. They help make our stories more interesting!",
    t1_b1: "Instead of 'good', you can say 'great'.",
    t1_b2: "Instead of 'small', you can say 'tiny'.",
    t1_b3: "Match the words that have the same meaning!",
    t1_inst: "Match the synonym pairs (words that mean the same)!",
    t1_l1: "huge", t1_r1: "giant",
    t1_l2: "fast", t1_r2: "quick",
    t1_l3: "happy", t1_r3: "glad",
    t1_q: "Which word is a synonym for 'scared'?",
    t1_q_a: "afraid", t1_q_b: "brave", t1_q_c: "loud", t1_q_d: "funny",

    // T2: Antonyms
    t2_title: "Opposites (Antonyms)",
    t2_text: "Antonyms are words that have totally opposite meanings. Like day and night, or hot and cold!",
    t2_b1: "The opposite of 'up' is 'down'.",
    t2_b2: "The opposite of 'fast' is 'slow'.",
    t2_b3: "Sort the words into their opposite buckets!",
    t2_inst: "Sort the words: Are they FAST words or SLOW words?",
    t2_bucket_fast: "Fast Words",
    t2_bucket_slow: "Slow Words",
    t2_item_f1: "quick", t2_item_f2: "speedy",
    t2_item_s1: "crawling", t2_item_s2: "sluggish",
    t2_q: "What is the antonym (opposite) of 'loud'?",
    t2_q_a: "quiet", t2_q_b: "noisy", t2_q_c: "bright", t2_q_d: "big",

    // T3: Shades of Meaning
    t3_title: "Shades of Meaning",
    t3_text: "Some words mean the same thing, but one is STRONGER than the other. 'Warm' is nice, but 'Boiling' is super hot!",
    t3_b1: "good -> great -> fantastic.",
    t3_b2: "small -> tiny -> microscopic.",
    t3_b3: "Put the words in order from weakest to strongest!",
    t3_inst: "Drag the words in order from the WEAKEST to the STRONGEST!",
    t3_w1: "warm", t3_w2: "hot", t3_w3: "boiling",
    t3_q: "Which word is the STRONGEST way to say you are hungry?",
    t3_q_a: "starving", t3_q_b: "hungry", t3_q_c: "peckish", t3_q_d: "full",

    // T4: Context Clues
    t4_title: "Context Clues",
    t4_text: "Sometimes we don't know what a word means. We have to act like detectives and use the other words in the sentence as clues!",
    t4_b1: "Read the whole sentence carefully.",
    t4_b2: "Think: What word makes sense here?",
    t4_b3: "Fill in the missing word using the clues.",
    t4_inst: "Use the clues in the sentence to pick the right word!",
    t4_sentence: "The alien felt very ___ because he lost his favorite space toy.",
    t4_c1: "sad", t4_c2: "happy", t4_c3: "fast",
    t4_q: "Read: 'The sun was so bright, I had to wear ___.' What word fits?",
    t4_q_a: "sunglasses", t4_q_b: "boots", t4_q_c: "gloves", t4_q_d: "sweaters",

    // T5: Fun Catch
    t5_title: "Moon Rock Catch",
    t5_text: "You cracked the meaning codes! Help the rover collect some rare glowing moon rocks before we blast off.",
    t5_b1: "'Moon' is a noun.",
    t5_b2: "'Glowing' is an adjective.",
    t5_b3: "Catch 6 moon rocks!",
    t5_inst: "Tap the 6 moon rocks (🌕) on the surface!",
    t5_q: "What is a synonym for 'rock'?",
    t5_q_a: "stone", t5_q_b: "tree", t5_q_c: "water", t5_q_d: "cloud",
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
        { left: "t1_l1", right: "t1_r1" }, // huge - giant
        { left: "t1_l2", right: "t1_r2" }, // fast - quick
        { left: "t1_l3", right: "t1_r3" }, // happy - glad
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
      type: "drag-to-bucket",
      buckets: [
        { id: "fast", label: "t2_bucket_fast" },
        { id: "slow", label: "t2_bucket_slow" },
      ],
      items: [
        { text: "t2_item_f1", bucketId: "fast" },
        { text: "t2_item_s1", bucketId: "slow" },
        { text: "t2_item_f2", bucketId: "fast" },
        { text: "t2_item_s2", bucketId: "slow" },
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
      words: ["t3_w1", "t3_w2", "t3_w3"],
      correctOrder: [0, 1, 2], // warm -> hot -> boiling
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
      type: "gap-fill",
      sentence: "t4_sentence",
      choices: ["t4_c1", "t4_c2", "t4_c3"],
      correctIndex: 0, // "sad"
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
      tapCount: { emoji: "🌕", count: 6 }, // Moon rocks
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
  icon: "🌙",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const MeaningExplorer = memo(function MeaningExplorer({
  color = "#94A3B8", // Slate-400 for the Moon surface
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
      grade={2} 
      explorerId="english_k2_meaning_moon" 
      color={color} 
      lang="en" // Forcing English ELA
      onDone={onDone} 
    />
  );
});

export default MeaningExplorer;
