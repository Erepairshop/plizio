"use client";
// NounExplorer.tsx — AstroEnglish Grade 2: i1 Noun Nebula
// Topics: 1) Common vs Proper Nouns 2) Plural Nouns (-s, -es) 3) Collective Nouns 4) Spot the Proper Noun 5) Rocket Catch

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric) ───────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#0F172A" rx="20" />
      {/* Common Noun: planet */}
      <g transform="translate(60, 60)">
        <circle cx="0" cy="0" r="25" fill="#64748B" />
        <text x="0" y="45" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#94A3B8">planet</text>
      </g>
      <text x="120" y="65" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#3B82F6">VS</text>
      {/* Proper Noun: Mars */}
      <g transform="translate(180, 60)">
        <circle cx="0" cy="0" r="25" fill="#EF4444" />
        <circle cx="-8" cy="-8" r="6" fill="#B91C1C" opacity="0.6" />
        <circle cx="10" cy="5" r="8" fill="#B91C1C" opacity="0.6" />
        <text x="0" y="45" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#FCA5A5">Mars</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#1E1B4B" rx="20" />
      {/* Singular: star */}
      <g transform="translate(50, 65)">
        <polygon points="0,-15 4,-4 15,0 4,4 0,15 -4,4 -15,0 -4,-4" fill="#FBBF24" />
        <text x="0" y="35" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#FDE68A">star</text>
      </g>
      <path d="M 80,60 Q 120,40 150,60" fill="none" stroke="#6366F1" strokeWidth="3" markerEnd="url(#arrow)" />
      {/* Plural: stars */}
      <g transform="translate(190, 65)">
        <polygon points="0,-15 4,-4 15,0 4,4 0,15 -4,4 -15,0 -4,-4" fill="#FBBF24" transform="translate(0, -15) scale(0.8)" />
        <polygon points="0,-15 4,-4 15,0 4,4 0,15 -4,4 -15,0 -4,-4" fill="#FBBF24" transform="translate(-15, 10) scale(0.8)" />
        <polygon points="0,-15 4,-4 15,0 4,4 0,15 -4,4 -15,0 -4,-4" fill="#FBBF24" transform="translate(15, 10) scale(0.8)" />
        <text x="0" y="35" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#FDE68A">stars</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#172554" rx="20" />
      {/* Collective Noun: Fleet */}
      <g transform="translate(120, 60)">
        <polygon points="0,-15 -10,10 10,10" fill="#3B82F6" transform="translate(-30, 0)" />
        <polygon points="0,-15 -10,10 10,10" fill="#60A5FA" transform="translate(0, -15)" />
        <polygon points="0,-15 -10,10 10,10" fill="#3B82F6" transform="translate(30, 0)" />
        <polygon points="0,-15 -10,10 10,10" fill="#2563EB" transform="translate(-15, 15)" />
        <polygon points="0,-15 -10,10 10,10" fill="#2563EB" transform="translate(15, 15)" />
        <text x="0" y="45" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#BFDBFE">A FLEET</text>
      </g>
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#022C22" rx="20" />
      {/* Spot the Proper Noun Capitalization */}
      <g transform="translate(120, 70)">
        <rect x="-80" y="-20" width="160" height="40" fill="#064E3B" rx="10" />
        <text x="0" y="5" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#D1FAE5">
          <tspan fill="#A7F3D0">The ship left </tspan>
          <tspan fill="#34D399" textDecoration="underline">E</tspan>
          <tspan fill="#A7F3D0">arth.</tspan>
        </text>
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#2E1065" rx="20" />
      {/* Nebula background for Tap Count */}
      <circle cx="50" cy="50" r="40" fill="#4C1D95" opacity="0.5" />
      <circle cx="180" cy="90" r="50" fill="#5B21B6" opacity="0.4" />
      <circle cx="120" cy="70" r="60" fill="#7C3AED" opacity="0.3" />
      <text x="120" y="125" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#C4B5FD">Tap the rockets!</text>
    </svg>
  );
});

// ─── LABELS (100% ENGLISH) ──────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Noun Nebula",
    
    // T1: Common vs Proper
    t1_title: "Common and Proper Nouns",
    t1_text: "A Common Noun is a general word (like 'planet'). A Proper Noun is a special name (like 'Saturn') and always starts with a BIG letter!",
    t1_b1: "Common nouns: astronaut, star, ship.",
    t1_b2: "Proper nouns: NASA, Earth, Jupiter.",
    t1_b3: "Look for the capital letter for Proper Nouns!",
    t1_inst: "Sort the words! Is it a Common Noun or a Proper Noun?",
    t1_bucket_common: "Common Noun",
    t1_bucket_proper: "Proper Noun",
    t1_item_c1: "galaxy", t1_item_c2: "rocket",
    t1_item_p1: "Venus", t1_item_p2: "Apollo",
    t1_q: "Which word is a Proper Noun?",
    t1_q_a: "Mars", t1_q_b: "moon", t1_q_c: "comet", t1_q_d: "sun",

    // T2: Plural Nouns
    t2_title: "More Than One (Plurals)",
    t2_text: "When we have more than one noun, we usually add '-s' or '-es' to the end of the word.",
    t2_b1: "Add '-s' to most words (star -> stars).",
    t2_b2: "Add '-es' if it ends in s, x, ch, or sh (gas -> gases).",
    t2_b3: "Match the singular noun to its plural!",
    t2_inst: "Match the one (singular) to the many (plural)!",
    t2_l1: "Planet", t2_r1: "Planets",
    t2_l2: "Box", t2_r2: "Boxes",
    t2_l3: "Crash", t2_r3: "Crashes",
    t2_q: "What is the correct plural for 'wish'?",
    t2_q_a: "wishes", t2_q_b: "wishs", t2_q_c: "wisheses", t2_q_d: "wies",

    // T3: Collective Nouns
    t3_title: "Groups (Collective Nouns)",
    t3_text: "A Collective Noun is one word that names a whole group of things, like a 'team' of players.",
    t3_b1: "A 'fleet' is a group of ships.",
    t3_b2: "A 'cluster' is a group of stars.",
    t3_b3: "A 'crew' is a group of astronauts.",
    t3_inst: "Fill in the gap to complete the sentence!",
    t3_sentence: "Look! A huge ___ of spaceships is flying by!",
    t3_c1: "fleet", t3_c2: "star", t3_c3: "planet",
    t3_q: "Which word is a collective noun for astronauts?",
    t3_q_a: "crew", t3_q_b: "helmet", t3_q_c: "suit", t3_q_d: "boots",

    // T4: Spot the Proper Noun
    t4_title: "Spot the Proper Noun",
    t4_text: "Proper nouns need a capital letter no matter where they are in the sentence. Be an adjective detective!",
    t4_b1: "They name specific places or people.",
    t4_b2: "Example: The rover is on Mars.",
    t4_b3: "'Mars' is the proper noun.",
    t4_inst: "Highlight the Proper Noun in this sentence!",
    t4_tok0: "The", t4_tok1: "brave", t4_tok2: "astronaut", t4_tok3: "flew", t4_tok4: "to", t4_tok5: "Jupiter.",
    t4_q: "Why does 'Earth' start with a capital E?",
    t4_q_a: "It's a proper noun.", t4_q_b: "It's an adjective.", t4_q_c: "It's a verb.", t4_q_d: "It's a plural.",

    // T5: Fun Catch
    t5_title: "Rocket Catch",
    t5_text: "You mastered the Noun Nebula! Now, let's catch some rockets flying through the galaxy.",
    t5_b1: "'Rocket' is a common noun.",
    t5_b2: "'Rockets' is plural.",
    t5_b3: "Catch 5 of them!",
    t5_inst: "Tap the 5 rockets (🚀) flying in the nebula!",
    t5_q: "What type of noun is 'Nebula' in the name 'Orion Nebula'?",
    t5_q_a: "Proper noun", t5_q_b: "Plural noun", t5_q_c: "Verb", t5_q_d: "Adjective",
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
        { id: "common", label: "t1_bucket_common" },
        { id: "proper", label: "t1_bucket_proper" },
      ],
      items: [
        { text: "t1_item_c1", bucketId: "common" },
        { text: "t1_item_p1", bucketId: "proper" },
        { text: "t1_item_c2", bucketId: "common" },
        { text: "t1_item_p2", bucketId: "proper" },
      ],
      instruction: "t1_inst",
      hint1: "t1_b1",
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
        { left: "t2_l1", right: "t2_r1" }, // Planet - Planets
        { left: "t2_l2", right: "t2_r2" }, // Box - Boxes
        { left: "t2_l3", right: "t2_r3" }, // Crash - Crashes
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
      correctIndex: 0, // "fleet"
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
    svg: () => <Topic4Svg />,
    bulletKeys: ["t4_b1", "t4_b2", "t4_b3"],
    interactive: {
      type: "highlight-text",
      tokens: ["t4_tok0", "t4_tok1", "t4_tok2", "t4_tok3", "t4_tok4", "t4_tok5"],
      correctIndices: [5], // "Jupiter."
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
      tapCount: { emoji: "🚀", count: 5 }, // Rockets
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
  icon: "🪐",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const NounExplorer = memo(function NounExplorer({
  color = "#3B82F6", // Blue-500 for the Noun Nebula
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
      explorerId="english_k2_noun_nebula" 
      color={color} 
      lang="en" // Forcing English ELA
      onDone={onDone} 
    />
  );
});

export default NounExplorer;
