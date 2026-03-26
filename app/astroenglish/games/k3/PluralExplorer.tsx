"use client";
// PluralExplorer.tsx — AstroEnglish Grade 3: i1 Plural Peak
// Topics: 1) Regular Plurals (-s, -es) 2) Irregular Plurals 3) Abstract Nouns 4) Concrete vs Abstract 5) Book Catch

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric) ───────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#0F172A" rx="20" />
      {/* Regular Plurals: -s vs -es */}
      <g transform="translate(60, 60)">
        <rect x="-30" y="-15" width="60" height="30" fill="#3B82F6" rx="5" />
        <text x="0" y="4" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#EFF6FF">alien + s</text>
        <text x="0" y="30" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#93C5FD">aliens</text>
      </g>
      <text x="120" y="65" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#94A3B8">OR</text>
      <g transform="translate(180, 60)">
        <rect x="-30" y="-15" width="60" height="30" fill="#F43F5E" rx="5" />
        <text x="0" y="4" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#FFF1F2">box + es</text>
        <text x="0" y="30" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#FDA4AF">boxes</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#1E1B4B" rx="20" />
      {/* Irregular Plurals (Rule Breakers) */}
      <g transform="translate(120, 70)">
        <path d="M -60,0 L -20,0" fill="none" stroke="#FBBF24" strokeWidth="3" markerEnd="url(#arrow)" />
        <text x="-80" y="5" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#FDE047">child</text>
        <text x="30" y="5" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#10B981">children</text>
        <path d="M -15,-20 L 15,20 M -15,20 L 15,-20" stroke="#EF4444" strokeWidth="3" transform="translate(0, -25) scale(0.5)" />
        <text x="0" y="-35" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#FCA5A5">No -s!</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#4C1D95" rx="20" />
      {/* Abstract Noun (Idea/Love vs Physical object) */}
      <g transform="translate(70, 70)">
        <rect x="-20" y="-20" width="40" height="40" fill="#A855F7" rx="5" />
        <text x="0" y="4" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#F3E8FF">book</text>
        <text x="0" y="35" textAnchor="middle" fontSize="10" fill="#C4B5FD">Touch it</text>
      </g>
      <text x="120" y="75" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#8B5CF6">VS</text>
      <g transform="translate(170, 70)">
        <path d="M 0,-15 C -15,-30 -30,-10 0,15 C 30,-10 15,-30 0,-15" fill="#EC4899" />
        <text x="0" y="35" textAnchor="middle" fontSize="10" fill="#F9A8D4">Feel it (Love)</text>
      </g>
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#064E3B" rx="20" />
      {/* Identify Abstract Noun in Sentence */}
      <g transform="translate(120, 70)">
        <rect x="-90" y="-20" width="180" height="40" fill="#047857" rx="10" />
        <text x="0" y="5" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#D1FAE5">
          <tspan fill="#A7F3D0">He showed great </tspan>
          <tspan fill="#FDE047" textDecoration="underline">courage</tspan>
          <tspan fill="#A7F3D0">.</tspan>
        </text>
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#0F766E" rx="20" />
      {/* Mountain Peak Background */}
      <polygon points="40,140 120,40 200,140" fill="#115E59" />
      <polygon points="120,40 140,65 100,65" fill="#CCFBF1" />
      <polygon points="0,140 60,70 120,140" fill="#0D9488" />
      <polygon points="150,140 210,80 240,140" fill="#14B8A6" />
      <text x="120" y="125" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#E0F2FE">Tap the books!</text>
    </svg>
  );
});

// ─── LABELS (100% ENGLISH) ──────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Plural Peak",
    
    // T1: Regular Plurals
    t1_title: "Adding -s or -es",
    t1_text: "To make most nouns plural (more than one), we add '-s'. But if a word ends in s, x, z, ch, or sh, we add '-es'!",
    t1_b1: "planet -> planets.",
    t1_b2: "fox -> foxes (ends in x).",
    t1_b3: "dish -> dishes (ends in sh).",
    t1_inst: "Does the word need an '-s' or an '-es' to become plural?",
    t1_bucket_s: "Add -s",
    t1_bucket_es: "Add -es",
    t1_item_s1: "star", t1_item_s2: "comet",
    t1_item_es1: "gas", t1_item_es2: "watch",
    t1_q: "How do you spell the plural of 'brush'?",
    t1_q_a: "brushes", t1_q_b: "brushs", t1_q_c: "brush", t1_q_d: "brushess",

    // T2: Irregular Plurals
    t2_title: "Rule Breakers (Irregular Plurals)",
    t2_text: "Some nouns are rule breakers! They don't use -s or -es at all when there is more than one. They change completely.",
    t2_b1: "One child -> many children.",
    t2_b2: "One mouse -> many mice.",
    t2_b3: "One tooth -> many teeth.",
    t2_inst: "Match the singular (one) noun to its irregular plural (many)!",
    t2_l1: "goose", t2_r1: "geese",
    t2_l2: "man", t2_r2: "men",
    t2_l3: "person", t2_r3: "people",
    t2_q: "What is the correct plural form of 'foot'?",
    t2_q_a: "feet", t2_q_b: "foots", t2_q_c: "feets", t2_q_d: "foot",

    // T3: Abstract Nouns
    t3_title: "Abstract Nouns",
    t3_text: "You can see and touch a Concrete Noun (like a rock). But an Abstract Noun is an idea, a feeling, or a quality. You can't touch it!",
    t3_b1: "Love, fear, and joy are feelings.",
    t3_b2: "Bravery, honesty, and freedom are ideas.",
    t3_b3: "You can't put 'courage' in a box!",
    t3_inst: "Is it Concrete (you can touch it) or Abstract (an idea/feeling)?",
    t3_bucket_conc: "Concrete (Touch)",
    t3_bucket_abs: "Abstract (Idea)",
    t3_item_c1: "helmet", t3_item_c2: "robot",
    t3_item_a1: "friendship", t3_item_a2: "danger",
    t3_q: "Which word is an Abstract Noun?",
    t3_q_a: "happiness", t3_q_b: "pancake", t3_q_c: "window", t3_q_d: "dog",

    // T4: Spot the Abstract Noun
    t4_title: "Spot the Idea",
    t4_text: "Let's be noun detectives! Abstract nouns can be tricky because they don't have a physical shape.",
    t4_b1: "Look for words that describe feelings or ideas.",
    t4_b2: "Example: He had a great idea.",
    t4_b3: "'Idea' is the abstract noun.",
    t4_inst: "Highlight the Abstract Noun in the sentence!",
    t4_tok0: "The", t4_tok1: "astronaut", t4_tok2: "needed", t4_tok3: "bravery", t4_tok4: "to", t4_tok5: "fly.",
    t4_q: "In the sentence 'She is full of hope', what is the abstract noun?",
    t4_q_a: "hope", t4_q_b: "She", t4_q_c: "full", t4_q_d: "is",

    // T5: Fun Catch
    t5_title: "Knowledge Peak",
    t5_text: "You climbed the Plural Peak! Collect the books of knowledge floating near the summit.",
    t5_b1: "Book -> Books (Regular plural).",
    t5_b2: "Knowledge is an abstract noun!",
    t5_b3: "Catch 5 books!",
    t5_inst: "Tap the 5 knowledge books (📚) flying by!",
    t5_q: "What kind of noun is 'courage'?",
    t5_q_a: "Abstract noun", t5_q_b: "Concrete noun", t5_q_c: "Proper noun", t5_q_d: "Plural noun",
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
        { id: "s", label: "t1_bucket_s" },
        { id: "es", label: "t1_bucket_es" },
      ],
      items: [
        { text: "t1_item_s1", bucketId: "s" },
        { text: "t1_item_es1", bucketId: "es" },
        { text: "t1_item_s2", bucketId: "s" },
        { text: "t1_item_es2", bucketId: "es" },
      ],
      instruction: "t1_inst",
      hint1: "t1_b2",
      hint2: "t1_b3",
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
        { left: "t2_l1", right: "t2_r1" }, // goose - geese
        { left: "t2_l2", right: "t2_r2" }, // man - men
        { left: "t2_l3", right: "t2_r3" }, // person - people
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
      type: "drag-to-bucket",
      buckets: [
        { id: "conc", label: "t3_bucket_conc" },
        { id: "abs", label: "t3_bucket_abs" },
      ],
      items: [
        { text: "t3_item_c1", bucketId: "conc" },
        { text: "t3_item_a1", bucketId: "abs" },
        { text: "t3_item_c2", bucketId: "conc" },
        { text: "t3_item_a2", bucketId: "abs" },
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
    svg: () => <Topic4Svg />,
    bulletKeys: ["t4_b1", "t4_b2", "t4_b3"],
    interactive: {
      type: "highlight-text",
      tokens: ["t4_tok0", "t4_tok1", "t4_tok2", "t4_tok3", "t4_tok4", "t4_tok5"],
      correctIndices: [3], // "bravery"
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
      tapCount: { emoji: "📚", count: 5 }, // Books
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
  icon: "📚",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const PluralExplorer = memo(function PluralExplorer({
  color = "#0D9488", // Teal-600 for the mountain peak
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
      grade={3} // K3 Level
      explorerId="english_k3_plural_peak" 
      color={color} 
      lang="en" // Forcing English ELA
      onDone={onDone} 
    />
  );
});

export default PluralExplorer;
