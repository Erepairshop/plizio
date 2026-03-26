"use client";
// SentenceK5Explorer.tsx — AstroEnglish Grade 5: i4 Sentence Summit
// Topics: 1) Independent vs Dependent 2) Building Complex Sentences 3) The Comma Rule 4) Compound-Complex Sentences 5) Flag Catch

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric) ───────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#0F172A" rx="20" />
      {/* Mountain representing sentence clauses */}
      <g transform="translate(70, 90)">
        <polygon points="-30,30 30,30 0,-40" fill="#3B82F6" />
        <polygon points="-30,30 0,30 0,-40" fill="#2563EB" />
        <polygon points="-15,-5 15,-5 0,-40" fill="#EFF6FF" />
        <text x="0" y="45" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#93C5FD">Independent</text>
      </g>
      <g transform="translate(170, 90)">
        <polygon points="-25,30 25,30 0,-20" fill="#64748B" opacity="0.8" />
        <polygon points="-25,30 0,30 0,-20" fill="#475569" opacity="0.8" />
        <polygon points="-10,5 10,5 0,-20" fill="#F1F5F9" />
        <line x1="-25" y1="30" x2="-60" y2="30" stroke="#94A3B8" strokeWidth="2" strokeDasharray="3,3" />
        <text x="0" y="45" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#CBD5E1">Dependent</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#1E1B4B" rx="20" />
      {/* Linking independent and dependent clauses */}
      <g transform="translate(120, 70)">
        <rect x="-90" y="-15" width="80" height="30" fill="#10B981" rx="5" />
        <text x="-50" y="4" textAnchor="middle" fontSize="10" fontWeight="bold" fill="white">Dependent</text>
        
        <rect x="10" y="-15" width="80" height="30" fill="#3B82F6" rx="5" />
        <text x="50" y="4" textAnchor="middle" fontSize="10" fontWeight="bold" fill="white">Independent</text>
        
        <circle cx="0" cy="0" r="15" fill="#F43F5E" />
        <text x="0" y="5" textAnchor="middle" fontSize="16" fontWeight="bold" fill="white">+</text>
        <text x="0" y="35" textAnchor="middle" fontSize="10" fill="#A78BFA">Complex Sentence</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#082F49" rx="20" />
      {/* Comma Rule Visualization */}
      <g transform="translate(120, 50)">
        <rect x="-80" y="-10" width="60" height="20" fill="#64748B" rx="4" />
        <rect x="20" y="-10" width="60" height="20" fill="#0EA5E9" rx="4" />
        <text x="0" y="5" textAnchor="middle" fontSize="24" fontWeight="black" fill="#FDE047">,</text>
        <text x="0" y="30" textAnchor="middle" fontSize="10" fill="#BAE6FD">Dependent first? Use a comma!</text>
      </g>
      <g transform="translate(120, 100)">
        <rect x="-80" y="-10" width="60" height="20" fill="#0EA5E9" rx="4" />
        <rect x="20" y="-10" width="60" height="20" fill="#64748B" rx="4" />
        <text x="0" y="5" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#EF4444">X</text>
        <text x="0" y="25" textAnchor="middle" fontSize="10" fill="#BAE6FD">Independent first? NO comma!</text>
      </g>
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#312E81" rx="20" />
      {/* Compound-Complex structure (3 blocks) */}
      <g transform="translate(120, 70)">
        <rect x="-95" y="-15" width="50" height="30" fill="#3B82F6" rx="4" />
        <text x="-70" y="4" textAnchor="middle" fontSize="8" fill="white">Indep.</text>
        
        <rect x="-35" y="-15" width="50" height="30" fill="#3B82F6" rx="4" />
        <text x="-10" y="4" textAnchor="middle" fontSize="8" fill="white">Indep.</text>
        
        <rect x="25" y="-15" width="70" height="30" fill="#64748B" rx="4" />
        <text x="60" y="4" textAnchor="middle" fontSize="8" fill="white">Dependent</text>
        
        <text x="-40" y="4" textAnchor="middle" fontSize="10" fill="#FBBF24">+</text>
        <text x="20" y="4" textAnchor="middle" fontSize="10" fill="#FBBF24">+</text>
        <text x="0" y="35" textAnchor="middle" fontSize="10" fill="#A78BFA">Compound-Complex</text>
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#020617" rx="20" />
      {/* Snowy Summit and Flags */}
      <polygon points="20,140 220,140 120,40" fill="#1E293B" />
      <polygon points="120,40 160,80 80,80" fill="#F8FAFC" />
      <line x1="120" y1="40" x2="120" y2="10" stroke="#94A3B8" strokeWidth="2" />
      <polygon points="120,10 140,15 120,20" fill="#EF4444" />
      <text x="120" y="125" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#CBD5E1">Tap the summit flags!</text>
    </svg>
  );
});

// ─── LABELS (100% ENGLISH) ──────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Sentence Summit",
    
    // T1: Independent vs Dependent
    t1_title: "Types of Clauses",
    t1_text: "A clause is a group of words with a subject and a verb. An INDEPENDENT clause can stand alone as a sentence. A DEPENDENT clause starts with a subordinating conjunction (like 'because') and cannot stand alone.",
    t1_b1: "Independent: The rocket launched.",
    t1_b2: "Dependent: Because the weather was clear.",
    t1_b3: "Dependent clauses need help to make sense!",
    t1_inst: "Is the phrase Independent (Stands alone) or Dependent (Needs help)?",
    t1_bucket_ind: "Independent",
    t1_bucket_dep: "Dependent",
    t1_item_i1: "The stars are bright.", t1_item_i2: "We landed safely.",
    t1_item_d1: "Because it was dark.", t1_item_d2: "Although I was tired.",
    t1_q: "Why is 'When the sun sets' a dependent clause?",
    t1_q_a: "It does not express a complete thought.", t1_q_b: "It is missing a subject.", t1_q_c: "It is missing a verb.", t1_q_d: "It is a complete sentence.",

    // T2: Complex Sentences
    t2_title: "Complex Sentences",
    t2_text: "When you join one independent clause and one dependent clause together, you build a COMPLEX sentence. It's like adding a side-peak to the main mountain.",
    t2_b1: "Independent + Dependent = Complex Sentence.",
    t2_b2: "Example: I cheered [because we won].",
    t2_b3: "Match the clauses to make a complete thought.",
    t2_inst: "Match the dependent clause to the independent clause that makes the most sense!",
    t2_l1: "Because he was tired,", t2_r1: "the pilot went to sleep.",
    t2_l2: "If the fuel is low,", t2_r2: "we must return to base.",
    t2_l3: "Although it was cold,", t2_r3: "she walked outside.",
    t2_q: "A complex sentence MUST have...",
    t2_q_a: "One independent and one dependent clause.", t2_q_b: "Two independent clauses.", t2_q_c: "No verbs.", t2_q_d: "Only adjectives.",

    // T3: The Comma Rule
    t3_title: "The Golden Comma Rule",
    t3_text: "Here is a strict rule for complex sentences: If the DEPENDENT clause comes first, use a comma. If the INDEPENDENT clause comes first, DO NOT use a comma.",
    t3_b1: "[Because it rained], we stayed inside. (Comma!)",
    t3_b2: "We stayed inside [because it rained]. (No comma!)",
    t3_b3: "Look at the first word of the sentence.",
    t3_inst: "Highlight the sentence that uses the comma CORRECTLY!",
    t3_tok0: "Since", t3_tok1: "it", t3_tok2: "is", t3_tok3: "late,", t3_tok4: "I", t3_tok5: "will", t3_tok6: "sleep.", // Correct
    t3_q: "Does this sentence need a comma? 'I wore my spacesuit because it was freezing.'",
    t3_q_a: "No, the independent clause is first.", t3_q_b: "Yes, before 'because'.", t3_q_c: "Yes, after 'spacesuit'.", t3_q_d: "Yes, at the very beginning.",

    // T4: Compound-Complex Sentences
    t4_title: "The Ultimate Climb",
    t4_text: "A Compound-Complex sentence is the highest peak! It has TWO independent clauses (joined by and/but/so) AND at least ONE dependent clause.",
    t4_b1: "[I like stars], and [he likes moons], [because they glow].",
    t4_b2: "Two main ideas + one extra detail.",
    t4_b3: "Put the sentence in the right order to reach the summit.",
    t4_inst: "Drag the blocks to build a Compound-Complex sentence!",
    t4_w1: "We", t4_w2: "won", t4_w3: "the", t4_w4: "race,", t4_w5: "and", t4_w6: "we", t4_w7: "cheered", t4_w8: "because", t4_w9: "it", t4_w10: "was", t4_w11: "hard.",
    t4_q: "How many independent clauses are in a Compound-Complex sentence?",
    t4_q_a: "At least two.", t4_q_b: "Exactly one.", t4_q_c: "Zero.", t4_q_d: "Only dependent clauses.",

    // T5: Fun Catch
    t5_title: "Summit Flags",
    t5_text: "You have reached the top of the Sentence Summit! Plant your flags and celebrate your grammar mastery.",
    t5_b1: "Watch your commas.",
    t5_b2: "Know your clauses.",
    t5_b3: "Tap 5 summit flags!",
    t5_inst: "Tap the 5 red flags (🚩) on top of the mountain peaks!",
    t5_q: "Which word starts a dependent clause?",
    t5_q_a: "Although", t5_q_b: "The", t5_q_c: "Rocket", t5_q_d: "Jumped",
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
        { id: "ind", label: "t1_bucket_ind" },
        { id: "dep", label: "t1_bucket_dep" },
      ],
      items: [
        { text: "t1_item_i1", bucketId: "ind" },
        { text: "t1_item_d1", bucketId: "dep" },
        { text: "t1_item_i2", bucketId: "ind" },
        { text: "t1_item_d2", bucketId: "dep" },
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
      hint1: "t2_b2",
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
      type: "highlight-text",
      tokens: ["t3_tok0", "t3_tok1", "t3_tok2", "t3_tok3", "t3_tok4", "t3_tok5", "t3_tok6"],
      correctIndices: [3], // The comma
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
      type: "word-order",
      words: ["t4_w1", "t4_w2", "t4_w3", "t4_w4", "t4_w5", "t4_w6", "t4_w7", "t4_w8", "t4_w9", "t4_w10", "t4_w11"],
      correctOrder: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], // We won the race, and we cheered because it was hard.
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
      tapCount: { emoji: "🚩", count: 5 }, // Flags
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
  icon: "🏔️",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const SentenceK5Explorer = memo(function SentenceK5Explorer({
  color = "#2563EB", // Blue-600 for the icy mountain theme
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
      explorerId="english_k5_sentence_summit" 
      color={color} 
      lang="en" // Forcing English ELA
      onDone={onDone} 
    />
  );
});

export default SentenceK5Explorer;
