"use client";
// RootWordExplorer.tsx — AstroEnglish Grade 5: i7 Root Word Reef
// Topics: 1) Root Words 2) Prefixes (inter, trans) 3) Suffixes (ation, ment) 4) Word Building 5) Coral Catch

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric) ───────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#064E3B" rx="20" />
      {/* Root word plant */}
      <g transform="translate(120, 110)">
        <rect x="-5" y="-40" width="10" height="40" fill="#059669" />
        <circle cx="0" cy="-45" r="15" fill="#10B981" />
        <text x="0" y="-42" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#064E3B">ROOT</text>
        <path d="M 0,-40 Q -30,-60 -40,-30" fill="none" stroke="#34D399" strokeWidth="3" />
        <path d="M 0,-40 Q 30,-60 40,-30" fill="none" stroke="#34D399" strokeWidth="3" />
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#1E1B4B" rx="20" />
      {/* Prefix Bridge: inter- (between) */}
      <g transform="translate(120, 70)">
        <circle cx="-60" cy="0" r="20" fill="#6366F1" />
        <circle cx="60" cy="0" r="20" fill="#6366F1" />
        <path d="M -40,0 L 40,0" stroke="#F59E0B" strokeWidth="4" strokeDasharray="5,5" />
        <rect x="-25" y="-10" width="50" height="20" fill="#FBBF24" rx="4" />
        <text x="0" y="4" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#78350F">INTER-</text>
        <text x="0" y="35" textAnchor="middle" fontSize="10" fill="#A78BFA">Between</text>
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#134E4A" rx="20" />
      {/* Underwater bubbles and coral */}
      <circle cx="40" cy="110" r="10" fill="#2DD4BF" opacity="0.6" />
      <circle cx="200" cy="90" r="15" fill="#2DD4BF" opacity="0.4" />
      <path d="M 100,140 Q 110,100 130,140" fill="#0F766E" />
      <path d="M 120,140 Q 130,110 150,140" fill="#14B8A6" />
      <text x="120" y="50" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#CCFBF1">Tap the glowing coral!</text>
    </svg>
  );
});

// ─── LABELS (100% ENGLISH) ──────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Root Word Reef",
    
    // T1: Root Words
    t1_title: "The Heart of the Word",
    t1_text: "The Root is the base part of a word that contains its primary meaning. Many roots in English come from Latin or Greek.",
    t1_b1: "Root 'port' means to carry (export, transport).",
    t1_b2: "Root 'vis' means to see (visit, visible).",
    t1_b3: "Root 'form' means shape (format, reform).",
    t1_inst: "Match the root word to its core meaning!",
    t1_l1: "port", t1_r1: "to carry",
    t1_l2: "vis", t1_r2: "to see",
    t1_l3: "struct", t1_r3: "to build",
    t1_q: "What does the root 'scrib' or 'script' mean?",
    t1_q_a: "to write", t1_q_b: "to hear", t1_q_c: "to jump", t1_q_d: "to eat",

    // T2: Advanced Prefixes
    t2_title: "Powerful Prefixes",
    t2_text: "Advanced prefixes change the direction or relationship of the root. 'Inter-' means between, and 'Trans-' means across or through.",
    t2_b1: "International = between nations.",
    t2_b2: "Transport = carry across.",
    t2_b3: "Interstellar = between the stars.",
    t2_inst: "Sort the words by their prefix: inter- (Between) or trans- (Across)?",
    t2_bucket_inter: "inter- (Between)",
    t2_bucket_trans: "trans- (Across)",
    t2_item_i1: "interstate", t2_item_i2: "interview",
    t2_item_t1: "translate", t2_item_t2: "transform",
    t2_q: "Which word means 'to carry across'?",
    t2_q_a: "transport", t2_q_b: "interport", t2_q_c: "report", t2_q_d: "import",

    // T3: Advanced Suffixes
    t3_title: "State and Action Suffixes",
    t3_text: "Suffixes like '-ation' and '-ment' turn verbs into nouns that describe an action or a state.",
    t3_b1: "Relax + ation = Relaxation.",
    t3_b2: "Govern + ment = Government.",
    t3_b3: "Kind + ness = Kindness.",
    t3_inst: "Fill in the gap with the correct suffix to name the action!",
    t3_sentence: "The crew needed to make a quick adjust___ to the ship.",
    t3_c1: "ment", t3_c2: "ation", t3_c3: "ness",
    t3_q: "What does the suffix '-ness' describe?",
    t3_q_a: "A state or quality (like sadness).", t3_q_b: "A person who does a job.", t3_q_c: "An action in the past.", t3_q_d: "A small object.",

    // T4: Word Building
    t4_title: "Word Construction",
    t4_text: "Let's put it all together! You can take a single root and build many different words around it.",
    t4_b1: "Prefix + Root + Suffix.",
    t4_b2: "Trans + port + ation = Transportation.",
    t4_b3: "De + form + ation = Deformation.",
    t4_inst: "Highlight the word that uses BOTH a prefix and a suffix!",
    t4_tok0: "The", t4_tok1: "robot", t4_tok2: "is", t4_tok3: "undergoing", t4_tok4: "a", t4_tok5: "transformation", t4_tok6: "today.",
    t4_q: "What is the root word in 'uncomfortable'?",
    t4_q_a: "comfort", t4_q_b: "un", t4_q_c: "able", t4_q_d: "comforta",

    // T5: Fun Catch
    t5_title: "Reef Explorer",
    t5_text: "You've successfully decoded the Root Word Reef! Now, collect the glowing coral to power your word-building machine.",
    t5_b1: "Roots are the foundation.",
    t5_b2: "Prefixes come before.",
    t5_b3: "Catch 6 coral pieces!",
    t5_inst: "Tap the 6 pieces of glowing coral (🪸) under the sea!",
    t5_q: "Which prefix means 'between'?",
    t5_q_a: "inter-", t5_q_b: "trans-", t5_q_c: "re-", t5_q_d: "un-",
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
        { left: "t1_l1", right: "t1_r1" },
        { left: "t1_l2", right: "t1_r2" },
        { left: "t1_l3", right: "t1_r3" },
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
        { id: "inter", label: "t2_bucket_inter" },
        { id: "trans", label: "t2_bucket_trans" },
      ],
      items: [
        { text: "t2_item_i1", bucketId: "inter" },
        { text: "t2_item_t1", bucketId: "trans" },
        { text: "t2_item_i2", bucketId: "inter" },
        { text: "t2_item_t2", bucketId: "trans" },
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
      type: "gap-fill",
      sentence: "t3_sentence",
      choices: ["t3_c1", "t3_c2", "t3_c3"],
      correctIndex: 0, // "ment"
      instruction: "t3_inst",
      hint1: "t3_b2",
      hint2: "t3_b1",
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
      tokens: ["t4_tok0", "t4_tok1", "t4_tok2", "t4_tok3", "t4_tok4", "t4_tok5", "t4_tok6"],
      correctIndices: [5], // "transformation"
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
      tapCount: { emoji: "🪸", count: 6 }, 
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
  icon: "🌿",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const RootWordExplorer = memo(function RootWordExplorer({
  color = "#14B8A6", // Teal-500
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
      explorerId="english_k5_root_word_reef" 
      color={color} 
      lang="en" // Forcing English ELA
      onDone={onDone} 
    />
  );
});

export default RootWordExplorer;
