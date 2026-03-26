"use client";
// SynonymK4Explorer.tsx — AstroEnglish Grade 4: i7 Synonym Sky
// Topics: 1) Synonyms & Antonyms 2) Similes (as/like) 3) Metaphors 4) Identifying Figures of Speech 5) Cloud Catch

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric) ───────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#0F172A" rx="20" />
      {/* Synonym vs Antonym Balance */}
      <g transform="translate(60, 70)">
        <circle cx="0" cy="0" r="25" fill="#3B82F6" />
        <text x="0" y="5" textAnchor="middle" fontSize="10" fontWeight="bold" fill="white">BIG</text>
        <text x="0" y="-30" textAnchor="middle" fontSize="10" fill="#93C5FD">Huge</text>
      </g>
      <path d="M 100,70 L 140,70" stroke="#475569" strokeWidth="2" strokeDasharray="4,4" />
      <g transform="translate(180, 70)">
        <circle cx="0" cy="0" r="25" fill="#F43F5E" />
        <text x="0" y="5" textAnchor="middle" fontSize="10" fontWeight="bold" fill="white">SMALL</text>
        <text x="0" y="-30" textAnchor="middle" fontSize="10" fill="#FDA4AF">Tiny</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#1E1B4B" rx="20" />
      {/* Simile: as fast as lightning */}
      <g transform="translate(120, 70)">
        <polygon points="-10,-40 10,-10 -10,10 10,40" fill="#FDE047" opacity="0.8" />
        <text x="-60" y="5" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#BAE6FD">Rocket</text>
        <text x="0" y="30" textAnchor="middle" fontSize="10" fill="#FDE047">AS FAST AS</text>
        <text x="60" y="5" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#FDE047">Lightning</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#312E81" rx="20" />
      {/* Metaphor: Moon is a silver coin */}
      <g transform="translate(120, 70)">
        <circle cx="-40" cy="0" r="20" fill="#E2E8F0" />
        <text x="0" y="5" textAnchor="middle" fontSize="14" fontWeight="black" fill="#F472B6">IS A</text>
        <circle cx="40" cy="0" r="20" fill="#94A3B8" />
        <text x="40" y="5" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1E293B">$</text>
        <text x="0" y="35" textAnchor="middle" fontSize="10" fill="#FDA4AF">The moon is a coin.</text>
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#0EA5E9" rx="20" />
      {/* Cloud field for catch */}
      <g opacity="0.6">
        <circle cx="60" cy="50" r="20" fill="white" />
        <circle cx="85" cy="50" r="25" fill="white" />
        <circle cx="110" cy="50" r="20" fill="white" />
      </g>
      <text x="120" y="115" textAnchor="middle" fontSize="12" fontWeight="bold" fill="white">Tap the flying clouds!</text>
    </svg>
  );
});

// ─── LABELS (100% ENGLISH) ──────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Synonym Sky",
    
    // T1: Synonyms & Antonyms
    t1_title: "Words and their Opposites",
    t1_text: "To make our writing more vivid, we use Synonyms (words with the same meaning) and Antonynms (words with opposite meanings).",
    t1_b1: "Synonym: 'Enormous' instead of 'big'.",
    t1_b2: "Antonym: 'Expand' vs 'Shrink'.",
    t1_b3: "Advanced vocabulary helps you explain things better!",
    t1_inst: "Is the pair of words a Synonym (Same) or an Antonym (Opposite)?",
    t1_bucket_syn: "Synonym (Same)",
    t1_bucket_ant: "Antonym (Opposite)",
    t1_item_s1: "gigantic / huge", t1_item_s2: "ancient / old",
    t1_item_a1: "ascend / descend", t1_item_a2: "bright / dim",
    t1_q: "Which word is a synonym for 'courageous'?",
    t1_q_a: "brave", t1_q_b: "scared", t1_q_c: "quiet", t1_q_d: "heavy",

    // T2: Similes
    t2_title: "Similes: Using 'Like' and 'As'",
    t2_text: "A simile compares two things using the words 'like' or 'as'. It helps the reader visualize the description.",
    t2_b1: "Example: The star is 'as bright as' a diamond.",
    t2_b2: "Example: He runs 'like' the wind.",
    t2_b3: "Look for the keywords: LIKE or AS.",
    t2_inst: "Complete the simile with the best word!",
    t2_sentence: "The silent spaceship moved as quiet as a ___.",
    t2_c1: "ghost", t2_c2: "drum", t2_c3: "rocket",
    t2_q: "Which sentence contains a SIMILE?",
    t2_q_a: "She is as wise as an owl.", t2_q_b: "She is a wise owl.", t2_q_c: "She is very wise.", t2_q_d: "The owl is wise.",

    // T3: Metaphors
    t3_title: "Metaphors: Direct Comparison",
    t3_text: "A metaphor is a stronger comparison. It says one thing IS another thing, even though it's not literally true. It does NOT use 'like' or 'as'.",
    t3_b1: "Example: The sun is a golden coin in the sky.",
    t3_b2: "Example: You are my sunshine.",
    t3_b3: "It links two ideas directly.",
    t3_inst: "Match the metaphor to what it actually means!",
    t3_l1: "Life is a journey", t3_r1: "Life has many steps",
    t3_l2: "He is a night owl", t3_r2: "He stays up late",
    t3_l3: "The wind was a howl", t3_r3: "The wind was loud",
    t3_q: "Which of these is a METAPHOR?",
    t3_q_a: "The snow is a white blanket.", t3_q_b: "The snow is like a blanket.", t3_q_c: "The snow is very cold.", t3_q_d: "It is snowing today.",

    // T4: Identifying Figures of Speech
    t4_title: "Figure of Speech Detective",
    t4_text: "Let's see if you can tell them apart. Similes use 'like/as', while metaphors say one thing 'is' another.",
    t4_b1: "Simile = as/like.",
    t4_b2: "Metaphor = is/are.",
    t4_b3: "Find the figure of speech in the sentence.",
    t4_inst: "Highlight the word that makes this sentence a SIMILE!",
    t4_tok0: "The", t4_tok1: "comet", t4_tok2: "flew", t4_tok3: "like", t4_tok4: "a", t4_tok5: "speeding", t4_tok6: "bullet.",
    t4_q: "What is the main difference between a simile and a metaphor?",
    t4_q_a: "Similes use 'like' or 'as'.", t4_q_b: "Metaphors are always about space.", t4_q_c: "Similes are for nouns only.", t4_q_d: "There is no difference.",

    // T5: Fun Catch
    t5_title: "Cloud Harvest",
    t5_text: "You navigated the Synonym Sky perfectly! Catch the fluffy metaphor clouds to clear the view.",
    t5_b1: "Clouds are like cotton candy (Simile).",
    t5_b2: "Clouds are cotton candy (Metaphor).",
    t5_b3: "Catch 6 clouds!",
    t5_inst: "Tap the 6 floating clouds (☁️) in the sky!",
    t5_q: "Which word is an antonym for 'expand'?",
    t5_q_a: "shrink", t5_q_b: "grow", t5_q_c: "stretch", t5_q_d: "fly",
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
        { id: "syn", label: "t1_bucket_syn" },
        { id: "ant", label: "t1_bucket_ant" },
      ],
      items: [
        { text: "t1_item_s1", bucketId: "syn" },
        { text: "t1_item_a1", bucketId: "ant" },
        { text: "t1_item_s2", bucketId: "syn" },
        { text: "t1_item_a2", bucketId: "ant" },
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
      correctIndex: 0, // "ghost"
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
      type: "match-pairs",
      pairs: [
        { left: "t3_l1", right: "t3_r1" },
        { left: "t3_l2", right: "t3_r2" },
        { left: "t3_l3", right: "t3_r3" },
      ],
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
      type: "highlight-text",
      tokens: ["t4_tok0", "t4_tok1", "t4_tok2", "t4_tok3", "t4_tok4", "t4_tok5", "t4_tok6"],
      correctIndices: [3], // "like"
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
      tapCount: { emoji: "☁️", count: 6 }, 
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
  icon: "🌤️",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const SynonymK4Explorer = memo(function SynonymK4Explorer({
  color = "#38BDF8", // Sky-400
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
      explorerId="english_k4_synonym_sky" 
      color={color} 
      lang="en" // Forcing English ELA
      onDone={onDone} 
    />
  );
});

export default SynonymK4Explorer;
