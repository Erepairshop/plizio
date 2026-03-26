"use client";
// WordBuilderK6Explorer.tsx — AstroEnglish Grade 6: i5 Word Builder Bay
// Topics: 1) Greek & Latin Roots 2) Advanced Prefixes 3) Advanced Suffixes 4) Word Assembly 5) Bolt Catch

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric) ───────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#451A03" rx="20" />
      {/* Root foundation block */}
      <g transform="translate(120, 80)">
        <rect x="-50" y="-20" width="100" height="40" fill="#D97706" rx="4" />
        <rect x="-40" y="-10" width="80" height="20" fill="#F59E0B" opacity="0.3" />
        <text x="0" y="7" textAnchor="middle" fontSize="14" fontWeight="black" fill="#451A03">ROOT</text>
        <path d="M -60,20 L 60,20" stroke="#FDE047" strokeWidth="2" strokeDasharray="4,2" />
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#1E293B" rx="20" />
      {/* Prefix addition */}
      <g transform="translate(80, 70)">
        <rect x="-30" y="-15" width="60" height="30" fill="#3B82F6" rx="5" />
        <text x="0" y="4" textAnchor="middle" fontSize="10" fontWeight="bold" fill="white">PREFIX</text>
      </g>
      <text x="125" y="75" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#64748B">+</text>
      <g transform="translate(170, 70)">
        <rect x="-30" y="-15" width="60" height="30" fill="#D97706" rx="5" />
        <text x="0" y="4" textAnchor="middle" fontSize="10" fontWeight="bold" fill="white">ROOT</text>
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#111827" rx="20" />
      {/* Industrial Bolts */}
      <g transform="translate(120, 70)">
        <polygon points="-10,-10 10,-10 15,0 10,10 -10,10 -15,0" fill="#94A3B8" />
        <circle cx="0" cy="0" r="5" fill="#4B5563" />
        <text x="0" y="45" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#FBBF24">Tap the Golden Bolts!</text>
      </g>
    </svg>
  );
});

// ─── LABELS (100% ENGLISH) ──────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Word Builder Bay",
    
    // T1: Roots (MAGNET MATCH)
    t1_title: "The Ancient Foundation",
    t1_text: "Most English words are built from Greek and Latin roots. If you know the root, you can unlock the meaning of hundreds of words!",
    t1_b1: "TRACT = to pull (attract, subtract).",
    t1_b2: "SPECT = to look (inspect, spectator).",
    t1_b3: "DICT = to speak (dictate, predict).",
    t1_inst: "Magnet Match: Connect the root to its core meaning!",
    t1_l1: "TRACT", t1_r1: "to pull",
    t1_l2: "SPECT", t1_r2: "to look",
    t1_l3: "DICT", t1_r3: "to speak",
    t1_q: "What does the root 'STRUCT' mean?",
    t1_q_a: "to build", t1_q_b: "to run", t1_q_c: "to carry", t1_q_d: "to see",

    // T2: Advanced Prefixes (PHYSICS BUCKET)
    t2_title: "Precision Prefixes",
    t2_text: "Prefixes come at the start of a word. In Grade 6, we use specific ones: ANTI- (against), SUB- (under), AUTO- (self), and MULTI- (many).",
    t2_b1: "Antibacterial = against bacteria.",
    t2_b2: "Submarine = under the sea.",
    t2_b3: "Autopilot = self-flying.",
    t2_inst: "Catch the words and drop them into the correct prefix bucket!",
    t2_bucket_anti: "ANTI- (Against)",
    t2_bucket_sub: "SUB- (Under)",
    t2_bucket_auto: "AUTO- (Self)",
    t2_item_a1: "Antifreeze", t2_item_a2: "Antisocial",
    t2_item_s1: "Subway", t2_item_s2: "Substandard",
    t2_item_u1: "Autograph", t2_item_u2: "Automatic",
    t2_q: "Which prefix means 'many'?",
    t2_q_a: "multi-", t2_q_b: "sub-", t2_q_c: "anti-", t2_q_d: "pre-",

    // T3: Advanced Suffixes (HIGHLIGHT)
    t3_title: "Meaningful Endings",
    t3_text: "Suffixes change the word's job or meaning. -ISM often describes a belief, -IST is a person who does something, and -IFY/-IZE mean to make or become.",
    t3_b1: "Optimist: A person who is positive.",
    t3_b2: "Magnify: To make something large.",
    t3_b3: "Realize: To make something real.",
    t3_inst: "Highlight the SUFFIX in the word 'COLONIZE'!",
    t3_tok0: "C", t3_tok1: "o", t3_tok2: "l", t3_tok3: "o", t3_tok4: "n", t3_tok5: "i", t3_tok6: "z", t3_tok7: "e",
    t3_q: "Which suffix is used to describe a person who specializes in something?",
    t3_q_a: "-ist", t3_q_b: "-ism", t3_q_c: "-ify", t3_q_d: "-less",

    // T4: Word Assembly (STACKER)
    t4_title: "The Assembly Line",
    t4_text: "You can combine prefixes, roots, and suffixes to build complex academic words. Let's assemble a multi-part word!",
    t4_b1: "Prefix + Root + Suffix.",
    t4_b2: "IN- (not) + VIS (see) + IBLE (able).",
    t4_b3: "Invisible = not able to be seen.",
    t4_inst: "Stack the parts to build the word: UNCOMFORTABLE (Bottom to Top)!",
    t4_w0: "UN-",    // Index 0
    t4_w1: "COMFORT", // Index 1
    t4_w2: "-ABLE",   // Index 2
    t4_q: "What happens to the meaning of a word when you add 'RE-' and '-ABLE' to the root 'USE'?",
    t4_q_a: "It means 'able to be used again'.", t4_q_b: "It means 'never used'.", t4_q_c: "It means 'using it now'.", t4_q_d: "It means 'person who uses'.",

    // T5: Fun Catch
    t5_title: "Bay Master",
    t5_text: "You've mastered the machinery of Word Builder Bay! Your vocabulary is now reinforced with solid steel foundations.",
    t5_b1: "Roots are the core.",
    t5_b2: "Prefixes change direction.",
    t5_b3: "Catch 6 Golden Bolts!",
    t5_inst: "Tap the 6 golden bolts (🔩) scattered around the bay!",
    t5_q: "What part of a word contains its primary meaning?",
    t5_q_a: "The Root", t5_q_b: "The Prefix", t5_q_c: "The Suffix", t5_q_d: "The Capital Letter",
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
      type: "physics-magnet",
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
      type: "physics-bucket",
      buckets: [
        { id: "anti", label: "t2_bucket_anti" },
        { id: "sub", label: "t2_bucket_sub" },
        { id: "auto", label: "t2_bucket_auto" },
      ],
      items: [
        { text: "t2_item_a1", bucketId: "anti" },
        { text: "t2_item_s1", bucketId: "sub" },
        { text: "t2_item_u1", bucketId: "auto" },
        { text: "t2_item_a2", bucketId: "anti" },
        { text: "t2_item_s2", bucketId: "sub" },
        { text: "t2_item_u2", bucketId: "auto" },
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
      tokens: ["t3_tok0", "t3_tok1", "t3_tok2", "t3_tok3", "t3_tok4", "t3_tok5", "t3_tok6", "t3_tok7"],
      correctIndices: [5, 6, 7], // "ize"
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
    svg: () => <Topic2Svg />,
    bulletKeys: ["t4_b1", "t4_b2", "t4_b3"],
    interactive: {
      type: "physics-stacker",
      words: ["t4_w0", "t4_w1", "t4_w2"],
      correctOrder: [0, 1, 2],
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
      tapCount: { emoji: "🔩", count: 6 }, 
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
  icon: "🔨",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const WordBuilderK6Explorer = memo(function WordBuilderK6Explorer({
  color = "#D97706", // Amber-600
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
      grade={6} 
      explorerId="english_k6_word_builder_bay" 
      color={color} 
      lang="en" // Forcing English ELA
      onDone={onDone} 
    />
  );
});

export default WordBuilderK6Explorer;
