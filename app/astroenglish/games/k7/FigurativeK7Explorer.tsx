"use client";
// FigurativeK7Explorer.tsx — AstroEnglish Grade 7: i5 Figurative Frontier
// Topics: 1) Simile vs Metaphor 2) Figurative Match 3) Spot Personification 4) Hyperbole Hunt 5) Mask Catch

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric) ───────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#4A044E" rx="20" />
      {/* Simile vs Metaphor Balance */}
      <g transform="translate(120, 70)">
        <path d="M -60,20 L 60,20" stroke="#FDF4FF" strokeWidth="2" />
        <polygon points="0,20 -10,40 10,40" fill="#E879F9" />
        
        {/* Left: Simile (Like/As) */}
        <rect x="-70" y="-10" width="30" height="20" fill="#C026D3" rx="4" />
        <text x="-55" y="5" textAnchor="middle" fontSize="10" fontWeight="bold" fill="white">AS</text>
        
        {/* Right: Metaphor (IS) */}
        <circle cx="55" cy="0" r="12" fill="#D946EF" />
        <text x="55" y="4" textAnchor="middle" fontSize="10" fontWeight="bold" fill="white">IS</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#171717" rx="20" />
      {/* Abstract Theater Masks */}
      <g transform="translate(90, 70)">
        <path d="M -15,-20 Q 0,-25 15,-20 Q 20,0 0,20 Q -20,0 -15,-20" fill="#F43F5E" />
        <circle cx="-5" cy="-5" r="3" fill="#171717" />
        <circle cx="5" cy="-5" r="3" fill="#171717" />
        <path d="M -5,5 Q 0,10 5,5" fill="none" stroke="#171717" strokeWidth="2" />
      </g>
      <g transform="translate(150, 70)">
        <path d="M -15,-20 Q 0,-25 15,-20 Q 20,0 0,20 Q -20,0 -15,-20" fill="#3B82F6" />
        <circle cx="-5" cy="-5" r="3" fill="#171717" />
        <circle cx="5" cy="-5" r="3" fill="#171717" />
        <path d="M -5,8 Q 0,3 5,8" fill="none" stroke="#171717" strokeWidth="2" />
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#0F172A" rx="20" />
      {/* Hyperbole Starburst */}
      <g transform="translate(120, 70)">
        <polygon points="0,-40 10,-10 40,0 10,10 0,40 -10,10 -40,0 -10,-10" fill="#FBBF24" />
        <circle cx="0" cy="0" r="15" fill="#EF4444" />
        <text x="0" y="55" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#FCA5A5">Tap the Masks!</text>
      </g>
    </svg>
  );
});

// ─── LABELS (100% ENGLISH) ──────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Figurative Frontier",
    
    // T1: Simile vs Metaphor (DROP GAME)
    t1_title: "Simile or Metaphor?",
    t1_text: "A SIMILE compares two things using 'like' or 'as' (e.g., 'Cold as ice'). A METAPHOR says one thing IS another without using 'like' or 'as' (e.g., 'The world is a stage').",
    t1_b1: "Simile: Uses 'like' or 'as'.",
    t1_b2: "Metaphor: Direct comparison (is, was, are).",
    t1_b3: "Both create vivid pictures in your mind.",
    t1_inst: "Sort the poetic phrases into the correct buckets!",
    t1_bucket_sim: "Simile (Like/As)",
    t1_bucket_met: "Metaphor (Direct)",
    t1_item_s1: "Fast as a rocket.", t1_item_s2: "Shining like a star.",
    t1_item_m1: "His heart is stone.", t1_item_m2: "The sun was a furnace.",
    t1_q: "Which of these is a METAPHOR?",
    t1_q_a: "Her smile is the sun.", t1_q_b: "She smiled like the sun.", t1_q_c: "She is as bright as the sun.", t1_q_d: "The sun is hot.",

    // T2: Figurative Match (MAGNET MATCH)
    t2_title: "Language Lab",
    t2_text: "Let's learn two more tools! PERSONIFICATION gives human traits to non-human things (The wind howled). HYPERBOLE is an extreme exaggeration used for effect (I'm so hungry I could eat a horse).",
    t2_b1: "Personification: Non-humans acting human.",
    t2_b2: "Hyperbole: Extreme, impossible exaggeration.",
    t2_b3: "Idiom: A phrase that doesn't mean exactly what it says ('Piece of cake').",
    t2_inst: "Magnet Match: Connect the term to its definition!",
    t2_l1: "Personification", t2_r1: "Giving human traits to objects",
    t2_l2: "Hyperbole", t2_r2: "An extreme exaggeration",
    t2_l3: "Idiom", t2_r3: "A common saying with a hidden meaning",
    t2_q: "What type of figurative language is 'I have a million things to do'?",
    t2_q_a: "Hyperbole", t2_q_b: "Simile", t2_q_c: "Personification", t2_q_d: "Metaphor",

    // T3: Spot Personification (HIGHLIGHT)
    t3_title: "Radar Scan: Personification",
    t3_text: "When an author writes that the stars 'danced' or the camera 'loved' someone, they are using personification to make the description come alive.",
    t3_b1: "Find the non-human object.",
    t3_b2: "Find the human action it is doing.",
    t3_b3: "Highlight the object and the human action!",
    t3_inst: "Highlight the PERSONIFICATION (Noun + Verb) in this sentence!",
    t3_tok0: "At", t3_tok1: "night,", t3_tok2: "the", t3_tok3: "angry", t3_tok4: "storm", t3_tok5: "swallowed", t3_tok6: "the", t3_tok7: "tiny", t3_tok8: "ship.",
    t3_q: "What is being personified in the sentence above?",
    t3_q_a: "The storm", t3_q_b: "The night", t3_q_c: "The ship", t3_q_d: "The tiny",

    // T4: Hyperbole Hunt (SLINGSHOT)
    t4_title: "Hyperbole Hunter",
    t4_text: "Hyperbole isn't meant to be taken literally. It's used to show strong emotion or make a point. If it could actually be true, it's not a hyperbole!",
    t4_b1: "Is it literally impossible?",
    t4_b2: "Is it an exaggeration?",
    t4_b3: "Shoot the impossible statement!",
    t4_inst: "Shoot the asteroid that contains a HYPERBOLE!",
    t4_target_1: "My backpack weighs a ton!", // Correct
    t4_target_2: "My backpack is very heavy.",
    t4_target_3: "I have five books in my bag.",
    t4_q: "Which sentence contains a hyperbole?",
    t4_q_a: "This line is taking forever.", t4_q_b: "This line is moving slowly.", t4_q_c: "I have been in line for ten minutes.", t4_q_d: "The line is outside.",

    // T5: Fun Catch
    t5_title: "Master of Words",
    t5_text: "Bravo! You have navigated the Figurative Frontier. You can now understand the hidden meanings and beautiful imagery in literature.",
    t5_b1: "Similes use like/as.",
    t5_b2: "Hyperboles exaggerate.",
    t5_b3: "Catch 6 Masks!",
    t5_inst: "Tap the 6 theater masks (🎭) to celebrate your victory!",
    t5_q: "What is the main purpose of figurative language?",
    t5_q_a: "To make writing more vivid and interesting.", t5_q_b: "To confuse the reader.", t5_q_c: "To state boring facts.", t5_q_d: "To make sentences shorter.",
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
      type: "physics-bucket",
      buckets: [
        { id: "sim", label: "t1_bucket_sim" },
        { id: "met", label: "t1_bucket_met" },
      ],
      items: [
        { text: "t1_item_s1", bucketId: "sim" },
        { text: "t1_item_m1", bucketId: "met" },
        { text: "t1_item_s2", bucketId: "sim" },
        { text: "t1_item_m2", bucketId: "met" },
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
      type: "physics-magnet",
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
    svg: () => <Topic1Svg />,
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "highlight-text",
      tokens: ["t3_tok0", "t3_tok1", "t3_tok2", "t3_tok3", "t3_tok4", "t3_tok5", "t3_tok6", "t3_tok7", "t3_tok8"],
      correctIndices: [4, 5], // "storm swallowed"
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
    svg: () => <Topic2Svg />,
    bulletKeys: ["t4_b1", "t4_b2", "t4_b3"],
    interactive: {
      type: "physics-slingshot",
      question: "t4_inst",
      targets: [
        { id: "tgt1", text: "t4_target_1", isCorrect: true }, 
        { id: "tgt2", text: "t4_target_2", isCorrect: false },
        { id: "tgt3", text: "t4_target_3", isCorrect: false },
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
      tapCount: { emoji: "🎭", count: 6 }, 
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
  icon: "🎭",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const FigurativeK7Explorer = memo(function FigurativeK7Explorer({
  color = "#D946EF", // Fuchsia-500 (Kreatív, drámai szín)
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
      grade={7} 
      explorerId="english_k7_figurative_frontier" 
      color={color} 
      lang="en" 
      onDone={onDone} 
    />
  );
});

export default FigurativeK7Explorer;
