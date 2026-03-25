"use client";
// VocabExplorerK3.tsx — AstroEnglish Grade 3: i8 Vocabulary Valley
// Topics: 1) Literal vs Figurative 2) Idioms 3) Multiple Meaning Words 4) Context Clues 5) Book Catch

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric) ───────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#0F172A" rx="20" />
      {/* Literal vs Figurative (Raining cats and dogs) */}
      <g transform="translate(60, 60)">
        {/* Literal: Actual cat and dog falling */}
        <circle cx="-10" cy="-10" r="8" fill="#F59E0B" /> {/* Dog/Cat head */}
        <circle cx="10" cy="10" r="8" fill="#94A3B8" /> {/* Dog/Cat head */}
        <path d="M -10,-10 L -10,10 M 10,10 L 10,30" stroke="#38BDF8" strokeWidth="2" strokeDasharray="2,2" />
        <text x="0" y="45" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#93C5FD">Literal (Real)</text>
      </g>
      <text x="120" y="65" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#64748B">VS</text>
      <g transform="translate(180, 60)">
        {/* Figurative: Heavy rain */}
        <line x1="-10" y1="-10" x2="-15" y2="5" stroke="#38BDF8" strokeWidth="3" />
        <line x1="0" y1="-5" x2="-5" y2="10" stroke="#38BDF8" strokeWidth="3" />
        <line x1="10" y1="-10" x2="5" y2="5" stroke="#38BDF8" strokeWidth="3" />
        <text x="0" y="45" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#BAE6FD">Figurative (Idea)</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#1E1B4B" rx="20" />
      {/* Idiom: Piece of Cake = Easy */}
      <g transform="translate(70, 70)">
        <polygon points="-15,-10 15,-10 0,15" fill="#FBBF24" />
        <polygon points="-15,-10 15,-10 0,-15" fill="#FDE68A" />
        <text x="0" y="35" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#FDE047">"Piece of cake"</text>
      </g>
      <text x="120" y="75" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#A78BFA">=</text>
      <g transform="translate(170, 70)">
        <path d="M -15,0 L -5,10 L 15,-10" fill="none" stroke="#10B981" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        <text x="0" y="35" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#6EE7B7">Very Easy!</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#064E3B" rx="20" />
      {/* Multiple Meanings: Bat vs Bat */}
      <g transform="translate(60, 60)">
        <ellipse cx="0" cy="0" rx="15" ry="8" fill="#111827" />
        <polygon points="-10,0 -25,-10 -15,5" fill="#111827" />
        <polygon points="10,0 25,-10 15,5" fill="#111827" />
        <text x="0" y="30" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#6EE7B7">Bat (Animal)</text>
      </g>
      <text x="120" y="65" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#34D399">OR</text>
      <g transform="translate(180, 60)">
        <rect x="-2" y="-15" width="4" height="30" fill="#D97706" rx="2" />
        <rect x="-4" y="-20" width="8" height="15" fill="#B45309" rx="2" />
        <text x="0" y="30" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#6EE7B7">Bat (Baseball)</text>
      </g>
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#4A044E" rx="20" />
      {/* Context Clues Magnifying Glass */}
      <g transform="translate(120, 70)">
        <rect x="-90" y="-15" width="180" height="30" fill="#701A75" rx="5" />
        <text x="-30" y="4" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#F9A8D4">He was</text>
        <text x="25" y="4" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#FDE047">exhausted</text>
        
        <circle cx="25" cy="0" r="20" fill="none" stroke="#38BDF8" strokeWidth="3" />
        <line x1="39" y1="14" x2="50" y2="25" stroke="#38BDF8" strokeWidth="4" strokeLinecap="round" />
        
        <text x="0" y="35" textAnchor="middle" fontSize="10" fill="#E879F9">Look for clues around the word!</text>
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#172554" rx="20" />
      {/* Floating Books in the Valley */}
      <path d="M 0,140 L 80,60 L 120,90 L 180,40 L 240,100 L 240,140 Z" fill="#1E3A8A" opacity="0.6" />
      <g transform="translate(60, 50) rotate(-15)">
        <rect x="-10" y="-8" width="20" height="16" fill="#FBBF24" rx="2" />
        <line x1="0" y1="-8" x2="0" y2="8" stroke="#B45309" strokeWidth="2" />
      </g>
      <g transform="translate(160, 80) rotate(20)">
        <rect x="-10" y="-8" width="20" height="16" fill="#F472B6" rx="2" />
        <line x1="0" y1="-8" x2="0" y2="8" stroke="#BE185D" strokeWidth="2" />
      </g>
      <text x="120" y="125" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#BFDBFE">Tap the glowing books!</text>
    </svg>
  );
});

// ─── LABELS (100% ENGLISH) ──────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Vocabulary Valley",
    
    // T1: Literal vs Figurative
    t1_title: "Literal vs. Figurative",
    t1_text: "Sometimes words mean EXACTLY what they say (Literal). Other times, they paint a picture in your mind and mean something else (Figurative).",
    t1_b1: "Literal: It is raining water.",
    t1_b2: "Figurative: It is raining cats and dogs! (Heavy rain).",
    t1_b3: "Figurative language makes stories fun.",
    t1_inst: "Is the sentence Literal (Exactly what it says) or Figurative (A hidden meaning)?",
    t1_bucket_lit: "Literal (Real)",
    t1_bucket_fig: "Figurative (Idea)",
    t1_item_l1: "I am very hungry.", t1_item_l2: "He runs fast.",
    t1_item_f1: "I could eat a horse!", t1_item_f2: "He is a cheetah.",
    t1_q: "If I say 'My backpack weighs a ton', is that literal or figurative?",
    t1_q_a: "Figurative (It's just very heavy)", t1_q_b: "Literal (It actually weighs a ton)", t1_q_c: "It is a spelling error", t1_q_d: "It is a verb",

    // T2: Idioms
    t2_title: "Idioms (Silly Sayings)",
    t2_text: "An idiom is a famous figurative phrase. You can't understand it just by looking at the individual words!",
    t2_b1: "Piece of cake = Very easy.",
    t2_b2: "Under the weather = Feeling sick.",
    t2_b3: "Break a leg = Good luck!",
    t2_inst: "Match the idiom to its REAL meaning!",
    t2_l1: "Piece of cake", t2_r1: "Very easy",
    t2_l2: "Under the weather", t2_r2: "Feeling sick",
    t2_l3: "Break a leg", t2_r3: "Good luck",
    t2_q: "What does the idiom 'Hold your horses' mean?",
    t2_q_a: "Wait a moment", t2_q_b: "Grab a pony", t2_q_c: "Run very fast", t2_q_d: "Go to the farm",

    // T3: Multiple Meaning Words
    t3_title: "Multiple Meaning Words",
    t3_text: "Some words are spelled the same and sound the same, but have completely different meanings! You have to read the sentence to know which one it is.",
    t3_b1: "Bat (an animal) vs Bat (used in baseball).",
    t3_b2: "Bark (sound a dog makes) vs Bark (outside of a tree).",
    t3_b3: "Use the clues in the sentence!",
    t3_inst: "Fill in the gap! Which word has TWO different meanings?",
    t3_sentence: "I used a wooden ___ to hit the baseball.",
    t3_c1: "bat", t3_c2: "stick", t3_c3: "bird",
    t3_q: "In the sentence 'The dog has a loud bark', what does 'bark' mean?",
    t3_q_a: "The sound a dog makes", t3_q_b: "The outside of a tree", t3_q_c: "A small boat", t3_q_d: "A type of food",

    // T4: Context Clues
    t4_title: "Context Clues",
    t4_text: "When you find a word you don't know, don't panic! Look at the words around it. Those words are CLUES to help you guess the meaning.",
    t4_b1: "The astronaut was 'exhausted' after running for two hours.",
    t4_b2: "Clue: 'running for two hours'.",
    t4_b3: "Meaning: Exhausted = very tired.",
    t4_inst: "Highlight the clue word that helps you understand what 'exhausted' means!",
    t4_tok0: "Because", t4_tok1: "he", t4_tok2: "was", t4_tok3: "exhausted,", t4_tok4: "he", t4_tok5: "slept.",
    t4_q: "Read: 'The giant star was enormous.' What does 'enormous' mean?",
    t4_q_a: "Very big", t4_q_b: "Very small", t4_q_c: "Cold", t4_q_d: "Quiet",

    // T5: Fun Catch
    t5_title: "Valley Library",
    t5_text: "You unlocked the secrets of the Vocabulary Valley! Now let's gather the floating books of knowledge.",
    t5_b1: "Words have incredible power.",
    t5_b2: "Keep reading to learn more.",
    t5_b3: "Catch 6 books!",
    t5_inst: "Tap the 6 floating books (📖) in the valley!",
    t5_q: "Which of these is an idiom?",
    t5_q_a: "Piece of cake", t5_q_b: "Red apple", t5_q_c: "Fast rocket", t5_q_d: "Bright star",
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
        { id: "lit", label: "t1_bucket_lit" },
        { id: "fig", label: "t1_bucket_fig" },
      ],
      items: [
        { text: "t1_item_l1", bucketId: "lit" },
        { text: "t1_item_f1", bucketId: "fig" },
        { text: "t1_item_l2", bucketId: "lit" },
        { text: "t1_item_f2", bucketId: "fig" },
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
        { left: "t2_l1", right: "t2_r1" }, // piece of cake - easy
        { left: "t2_l2", right: "t2_r2" }, // under the weather - sick
        { left: "t2_l3", right: "t2_r3" }, // break a leg - good luck
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
      type: "gap-fill",
      sentence: "t3_sentence",
      choices: ["t3_c1", "t3_c2", "t3_c3"],
      correctIndex: 0, // "bat"
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
      type: "highlight-text",
      tokens: ["t4_tok0", "t4_tok1", "t4_tok2", "t4_tok3", "t4_tok4", "t4_tok5"],
      correctIndices: [5], // "slept" (clue for exhausted)
      instruction: "t4_inst",
      hint1: "t4_b1",
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
      tapCount: { emoji: "📖", count: 6 }, // Books
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
  icon: "📖",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const VocabExplorerK3 = memo(function VocabExplorerK3({
  color = "#A855F7",
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
      grade={3}
      explorerId="english_k3_vocabulary_valley"
      color={color}
      lang="en"
      onDone={onDone}
    />
  );
});

export default VocabExplorerK3;
