"use client";
// AdverbExplorerK3.tsx — AstroEnglish Grade 3: i3 Adverb Archipelago
// Topics: 1) How it happens (-ly) 2) When & How Often 3) Conjunctions (and, but) 4) Cause & Effect (because, so) 5) Boat Catch

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric) ───────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#0F172A" rx="20" />
      {/* Adjective vs Adverb (-ly) */}
      <g transform="translate(60, 70)">
        <rect x="-35" y="-15" width="70" height="30" fill="#3B82F6" rx="5" />
        <text x="0" y="4" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#EFF6FF">quick</text>
        <text x="0" y="30" textAnchor="middle" fontSize="10" fill="#93C5FD">Adjective</text>
      </g>
      <path d="M 105,70 L 135,70" fill="none" stroke="#38BDF8" strokeWidth="3" markerEnd="url(#arrow)" />
      <g transform="translate(180, 70)">
        <rect x="-45" y="-15" width="90" height="30" fill="#0284C7" rx="5" />
        <text x="0" y="4" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#F0F9FF">quick<tspan fill="#BAE6FD">ly</tspan></text>
        <text x="0" y="30" textAnchor="middle" fontSize="10" fill="#7DD3FC">Adverb (How?)</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#1E1B4B" rx="20" />
      {/* Frequency: Always vs Never */}
      <g transform="translate(60, 70)">
        <rect x="-20" y="-30" width="10" height="60" fill="#10B981" />
        <rect x="-5" y="-30" width="10" height="60" fill="#10B981" />
        <rect x="10" y="-30" width="10" height="60" fill="#10B981" />
        <text x="0" y="45" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#34D399">ALWAYS</text>
      </g>
      <text x="120" y="75" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#6B7280">VS</text>
      <g transform="translate(180, 70)">
        <rect x="-20" y="-30" width="10" height="60" fill="#4B5563" opacity="0.3" />
        <rect x="-5" y="-30" width="10" height="60" fill="#4B5563" opacity="0.3" />
        <rect x="10" y="-30" width="10" height="60" fill="#4B5563" opacity="0.3" />
        <text x="0" y="45" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#9CA3AF">NEVER</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#082F49" rx="20" />
      {/* Bridge connecting islands (and / but) */}
      <path d="M 0,140 Q 40,80 80,140 Z" fill="#15803D" />
      <path d="M 160,140 Q 200,80 240,140 Z" fill="#16A34A" />
      <g transform="translate(120, 100)">
        <path d="M -50,10 Q 0,-20 50,10" fill="none" stroke="#F59E0B" strokeWidth="8" />
        <rect x="-20" y="-25" width="40" height="20" fill="#B45309" rx="3" />
        <text x="0" y="-11" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#FEF3C7">AND</text>
      </g>
      <circle cx="40" cy="110" r="15" fill="#22C55E" />
      <circle cx="200" cy="110" r="15" fill="#22C55E" />
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#312E81" rx="20" />
      {/* Cause and Effect: Rain -> Umbrella */}
      <g transform="translate(60, 60)">
        <path d="M -20,0 A 10,10 0 0,1 0,-10 A 15,15 0 0,1 20,-5 A 10,10 0 0,1 20,10 L -20,10 Z" fill="#9CA3AF" />
        <line x1="-10" y1="15" x2="-15" y2="25" stroke="#60A5FA" strokeWidth="2" />
        <line x1="5" y1="15" x2="0" y2="25" stroke="#60A5FA" strokeWidth="2" />
        <text x="0" y="45" textAnchor="middle" fontSize="10" fill="#A78BFA">It rained</text>
      </g>
      <text x="120" y="65" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#F472B6">SO</text>
      <g transform="translate(180, 60)">
        <path d="M -20,10 C -20,-20 20,-20 20,10 Z" fill="#F43F5E" />
        <line x1="0" y1="10" x2="0" y2="30" stroke="#FCD34D" strokeWidth="3" />
        <text x="0" y="45" textAnchor="middle" fontSize="10" fill="#A78BFA">I used this</text>
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#0284C7" rx="20" />
      {/* Archipelago / Waves */}
      <path d="M 0,100 Q 30,80 60,100 T 120,100 T 180,100 T 240,100 L 240,140 L 0,140 Z" fill="#0369A1" />
      <path d="M 0,120 Q 30,100 60,120 T 120,120 T 180,120 T 240,120 L 240,140 L 0,140 Z" fill="#075985" />
      <polygon points="180,95 190,75 200,95" fill="#FDE047" />
      <polygon points="60,115 70,95 80,115" fill="#38BDF8" />
      <text x="120" y="60" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#E0F2FE">Tap the boats!</text>
    </svg>
  );
});

// ─── LABELS (100% ENGLISH) ──────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Adverb Archipelago",
    
    // T1: How it happens
    t1_title: "How Does It Happen?",
    t1_text: "Adjectives describe nouns (a quick ship). Adverbs describe VERBS! They tell us HOW an action happens, and they often end in '-ly' (the ship flew quickly).",
    t1_b1: "Slow -> Slowly.",
    t1_b2: "Careful -> Carefully.",
    t1_b3: "Match the adjective to its adverb pair!",
    t1_inst: "Sort the words! Are they Adjectives (no -ly) or Adverbs (-ly)?",
    t1_bucket_adj: "Adjective (Quick)",
    t1_bucket_adv: "Adverb (Quickly)",
    t1_item_a1: "loud", t1_item_a2: "safe",
    t1_item_v1: "loudly", t1_item_v2: "safely",
    t1_q: "Which word tells us HOW the boy shouted?",
    t1_q_a: "loudly", t1_q_b: "loud", t1_q_c: "shout", t1_q_d: "boy",

    // T2: When & How Often
    t2_title: "When and How Often?",
    t2_text: "Some adverbs don't end in '-ly'. They tell us WHEN something happens (tomorrow, yesterday) or HOW OFTEN it happens (never, always, sometimes).",
    t2_b1: "I 'always' wear my spacesuit.",
    t2_b2: "We will launch 'tomorrow'.",
    t2_b3: "Look for the time words!",
    t2_inst: "Highlight the adverb that tells us WHEN or HOW OFTEN!",
    t2_tok0: "The", t2_tok1: "aliens", t2_tok2: "never", t2_tok3: "eat", t2_tok4: "pizza.",
    t2_q: "Which word is an adverb of time/frequency?",
    t2_q_a: "always", t2_q_b: "red", t2_q_c: "jump", t2_q_d: "planet",

    // T3: Conjunctions (and, but)
    t3_title: "Connecting Islands (and, but)",
    t3_text: "Conjunctions are connecting words! They act like bridges between ideas. 'And' adds things together. 'But' shows a difference or a twist.",
    t3_b1: "I like stars AND planets (adding).",
    t3_b2: "I looked for the moon, BUT it was cloudy (twist).",
    t3_b3: "Choose the best bridge!",
    t3_inst: "Fill in the gap to connect the two ideas!",
    t3_sentence: "The rocket was fast, ___ it ran out of fuel.",
    t3_c1: "but", t3_c2: "and", t3_c3: "or",
    t3_q: "Which connecting word adds two similar ideas together?",
    t3_q_a: "and", t3_q_b: "but", t3_q_c: "because", t3_q_d: "so",

    // T4: Cause & Effect
    t4_title: "Cause & Effect (because, so)",
    t4_text: "Let's learn two more connecting words. 'Because' tells us the reason WHY. 'So' tells us what happened NEXT (the result).",
    t4_b1: "I wore a coat BECAUSE it was cold (Reason).",
    t4_b2: "It was cold, SO I wore a coat (Result).",
    t4_b3: "Match the cause to the effect!",
    t4_inst: "Match the first half of the sentence to the correct second half!",
    t4_l1: "I was hungry,", t4_r1: "so I ate an apple.",
    t4_l2: "We cheered", t4_r2: "because we won.",
    t4_l3: "It rained,", t4_r3: "so we stayed inside.",
    t4_q: "Complete: 'I went to bed early _____ I was tired.'",
    t4_q_a: "because", t4_q_b: "so", t4_q_c: "but", t4_q_d: "and",

    // T5: Fun Catch
    t5_title: "Archipelago Sail",
    t5_text: "You navigated the Adverb Archipelago beautifully! Let's safely sail the boats back to the harbor.",
    t5_b1: "'Safely' is an adverb.",
    t5_b2: "'Sail' is the verb.",
    t5_b3: "Catch 6 sailboats!",
    t5_inst: "Tap the 6 sailboats (⛵) riding the waves!",
    t5_q: "What part of speech describes a VERB?",
    t5_q_a: "Adverb", t5_q_b: "Noun", t5_q_c: "Adjective", t5_q_d: "Pronoun",
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
        { id: "adj", label: "t1_bucket_adj" },
        { id: "adv", label: "t1_bucket_adv" },
      ],
      items: [
        { text: "t1_item_a1", bucketId: "adj" },
        { text: "t1_item_v1", bucketId: "adv" },
        { text: "t1_item_a2", bucketId: "adj" },
        { text: "t1_item_v2", bucketId: "adv" },
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
      type: "highlight-text",
      tokens: ["t2_tok0", "t2_tok1", "t2_tok2", "t2_tok3", "t2_tok4"],
      correctIndices: [2], // "never"
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
      correctIndex: 0, // "but"
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
      type: "match-pairs",
      pairs: [
        { left: "t4_l1", right: "t4_r1" }, // hungry -> so ate
        { left: "t4_l2", right: "t4_r2" }, // cheered -> because won
        { left: "t4_l3", right: "t4_r3" }, // rained -> so stayed inside
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
      tapCount: { emoji: "⛵", count: 6 }, // Sailboats
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
  icon: "🌊",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const AdverbExplorerK3 = memo(function AdverbExplorerK3({
  color = "#0284C7", // Sky-600 for the ocean/archipelago
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
      explorerId="english_k3_adverb_archipelago" 
      color={color} 
      lang="en" // Forcing English ELA
      onDone={onDone} 
    />
  );
});

export default AdverbExplorerK3;
