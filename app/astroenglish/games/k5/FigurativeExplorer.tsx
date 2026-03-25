"use client";
// FigurativeExplorer.tsx — AstroEnglish Grade 5: i8 Figurative Falls
// Topics: 1) Simile vs Metaphor 2) Common Idioms 3) Personification 4) Hyperbole 5) Mist Catch

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric) ───────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#0F172A" rx="20" />
      {/* Simile (Link) vs Metaphor (Equal) */}
      <g transform="translate(60, 70)">
        <circle cx="-15" cy="0" r="15" fill="#3B82F6" />
        <path d="M 0,0 L 30,0" stroke="#FBBF24" strokeWidth="2" strokeDasharray="4,2" />
        <circle cx="45" cy="0" r="15" fill="#F59E0B" />
        <text x="15" y="25" textAnchor="middle" fontSize="10" fill="#93C5FD">LIKE / AS</text>
      </g>
      <g transform="translate(180, 70)">
        <circle cx="0" cy="0" r="25" fill="#10B981" />
        <text x="0" y="5" textAnchor="middle" fontSize="18" fontWeight="black" fill="white">=</text>
        <text x="0" y="40" textAnchor="middle" fontSize="10" fill="#6EE7B7">IS / ARE</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#1E1B4B" rx="20" />
      {/* Idiom: Piece of cake */}
      <g transform="translate(120, 70)">
        <path d="M -30,10 L 30,10 L 0,-30 Z" fill="#FDE68A" />
        <circle cx="0" cy="-5" r="5" fill="#EF4444" />
        <text x="0" y="35" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#FBBF24">"Piece of cake"</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#312E81" rx="20" />
      {/* Personification: The wind whispered */}
      <g transform="translate(120, 70)">
        <path d="M -60,0 Q -30,-20 0,0 T 60,0" fill="none" stroke="#BAE6FD" strokeWidth="4" />
        <circle cx="10" cy="-5" r="2" fill="white" />
        <circle cx="20" cy="-5" r="2" fill="white" />
        <path d="M 12,5 Q 15,10 18,5" fill="none" stroke="white" strokeWidth="1" />
        <text x="0" y="35" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#38BDF8">The wind sang...</text>
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#082F49" rx="20" />
      {/* Waterfall mist and droplets */}
      <rect x="80" y="0" width="80" height="140" fill="#0EA5E9" opacity="0.3" />
      <path d="M 80,0 Q 120,40 160,0 L 160,140 Q 120,100 80,140 Z" fill="#38BDF8" opacity="0.5" />
      <circle cx="120" cy="80" r="5" fill="white" opacity="0.8" />
      <circle cx="100" cy="40" r="4" fill="white" opacity="0.6" />
      <text x="120" y="125" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#BAE6FD">Tap the mist droplets!</text>
    </svg>
  );
});

// ─── LABELS (100% ENGLISH) ──────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Figurative Falls",
    
    // T1: Simile vs Metaphor
    t1_title: "Similes and Metaphors",
    t1_text: "Authors use comparisons to create images. A SIMILE uses 'like' or 'as'. A METAPHOR says one thing IS another thing directly.",
    t1_b1: "Simile: She is as brave as a lion.",
    t1_b2: "Metaphor: He is a shining star.",
    t1_b3: "Both help us visualize the story.",
    t1_inst: "Is the sentence a Simile (using like/as) or a Metaphor (direct is/are)?",
    t1_bucket_sim: "Simile (like/as)",
    t1_bucket_met: "Metaphor (is/are)",
    t1_item_s1: "Fast like a rocket.", t1_item_s2: "Bright as the sun.",
    t1_item_m1: "The moon is a coin.", t1_item_m2: "You are my sunshine.",
    t1_q: "Which word is usually found in a simile?",
    t1_q_a: "like", t1_q_b: "is", t1_q_c: "very", t1_q_d: "not",

    // T2: Idioms
    t2_title: "Idioms: Secret Meanings",
    t2_text: "An idiom is a phrase where the meaning is different from the actual words. You have to learn them as a whole!",
    t2_b1: "Under the weather = Feeling sick.",
    t2_b2: "Break a leg = Good luck.",
    t2_b3: "Once in a blue moon = Rarely.",
    t2_inst: "Match the idiom to its REAL meaning!",
    t2_l1: "Under the weather", t2_r1: "Feeling sick",
    t2_l2: "Piece of cake", t2_r2: "Very easy",
    t2_l3: "Break a leg", t2_r3: "Good luck",
    t2_q: "What does 'Once in a blue moon' mean?",
    t2_q_a: "Very rarely.", t2_q_b: "Every night.", t2_q_c: "When the moon is blue.", t2_q_d: "In a long time.",

    // T3: Personification
    t3_title: "Giving Life to Things",
    t3_text: "Personification is when you give human qualities to animals or objects. It makes descriptions feel more alive and emotional.",
    t3_b1: "The wind 'whispered' in my ear.",
    t3_b2: "The alarm clock 'yelled' at me.",
    t3_b3: "The stars 'danced' in the sky.",
    t3_inst: "Highlight the HUMAN action given to the non-human object!",
    t3_tok0: "The", t3_tok1: "angry", t3_tok2: "sun", t3_tok3: "beat", t3_tok4: "down", t3_tok5: "on", t3_tok6: "the", t3_tok7: "dry", t3_tok8: "ground.",
    t3_q: "Which of these is an example of personification?",
    t3_q_a: "The camera loves her.", t3_q_b: "She loves the camera.", t3_q_c: "The camera is expensive.", t3_q_d: "I have a camera.",

    // T4: Hyperbole
    t4_title: "Hyperbole: Extreme Exaggeration",
    t4_text: "A hyperbole is an extreme exaggeration used to make a point or be funny. It is not meant to be taken literally!",
    t4_b1: "I'm so hungry I could eat a horse!",
    t4_b2: "My backpack weighs a ton.",
    t4_b3: "This is taking forever.",
    t4_inst: "Fill in the gap to complete this hyperbole!",
    t4_sentence: "I have told you a ___ times to clean your room!",
    t4_c1: "million", t4_c2: "two", t4_c3: "few",
    t4_q: "What is the purpose of hyperbole?",
    t4_q_a: "To emphasize a point through exaggeration.", t4_q_b: "To compare two things.", t4_q_c: "To give human traits to objects.", t4_q_d: "To tell a true story.",

    // T5: Fun Catch
    t5_title: "Mist Catcher",
    t5_text: "You navigated the Figurative Falls like a poet! Catch the droplets of mist to finish the mission.",
    t5_b1: "Language is a canvas (Metaphor).",
    t5_b2: "Writing is like magic (Simile).",
    t5_b3: "Catch 6 mist droplets!",
    t5_inst: "Tap the 6 mist droplets (💧) falling from the cliff!",
    t5_q: "Which figure of speech says one thing IS another?",
    t5_q_a: "Metaphor", t5_q_b: "Simile", t5_q_c: "Hyperbole", t5_q_d: "Idiom",
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
      tokens: ["t3_tok0", "t3_tok1", "t3_tok2", "t3_tok3", "t3_tok4", "t3_tok5", "t3_tok6", "t3_tok7", "t3_tok8"],
      correctIndices: [1, 3], // "angry" (emotion) and "beat" (action)
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
      type: "gap-fill",
      sentence: "t4_sentence",
      choices: ["t4_c1", "t4_c2", "t4_c3"],
      correctIndex: 0, // "million"
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
      tapCount: { emoji: "💧", count: 6 }, 
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

const FigurativeExplorer = memo(function FigurativeExplorer({
  color = "#6366F1", // Indigo-500
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
      explorerId="english_k5_figurative_falls" 
      color={color} 
      lang="en" // Forcing English ELA
      onDone={onDone} 
    />
  );
});

export default FigurativeExplorer;
