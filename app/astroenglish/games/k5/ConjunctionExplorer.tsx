"use client";
// ConjunctionExplorer.tsx — AstroEnglish Grade 5: i1 Conjunction Cove
// Topics: 1) FANBOYS 2) Subordinating Conjunctions 3) Correlative Conjunctions 4) Combining Ideas 5) Chain Catch

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric) ───────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#0F172A" rx="20" />
      {/* Two equal islands connected by a bridge (FANBOYS) */}
      <g transform="translate(50, 80)">
        <path d="M -30,0 Q 0,-20 30,0 L 30,30 L -30,30 Z" fill="#10B981" />
        <text x="0" y="20" textAnchor="middle" fontSize="10" fill="#ECFDF5">Idea 1</text>
      </g>
      <g transform="translate(190, 80)">
        <path d="M -30,0 Q 0,-20 30,0 L 30,30 L -30,30 Z" fill="#10B981" />
        <text x="0" y="20" textAnchor="middle" fontSize="10" fill="#ECFDF5">Idea 2</text>
      </g>
      <rect x="75" y="70" width="90" height="15" fill="#F59E0B" rx="4" />
      <text x="120" y="81" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#78350F">AND / BUT</text>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#1E1B4B" rx="20" />
      {/* Subordinating conjunction linking independent and dependent clause */}
      <g transform="translate(120, 70)">
        <rect x="-100" y="-20" width="80" height="40" fill="#3B82F6" rx="5" />
        <text x="-60" y="4" textAnchor="middle" fontSize="10" fill="#EFF6FF">Main Clause</text>
        
        <rect x="20" y="-15" width="80" height="30" fill="#8B5CF6" rx="5" />
        <text x="60" y="4" textAnchor="middle" fontSize="10" fill="#F5F3FF">Extra Info</text>
        
        <polygon points="-20,-5 20,-5 10,10 -30,10" fill="#F43F5E" />
        <text x="-5" y="4" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#FFE4E6">BECAUSE</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#022C22" rx="20" />
      {/* Correlative Conjunctions (Pairs) */}
      <g transform="translate(120, 70)">
        <circle cx="-40" cy="0" r="25" fill="none" stroke="#10B981" strokeWidth="4" />
        <text x="-40" y="4" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#A7F3D0">EITHER</text>
        
        <path d="M -15,0 L 15,0" stroke="#FDE047" strokeWidth="3" strokeDasharray="4,4" />
        
        <circle cx="40" cy="0" r="25" fill="none" stroke="#10B981" strokeWidth="4" />
        <text x="40" y="4" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#A7F3D0">OR</text>
        
        <text x="0" y="45" textAnchor="middle" fontSize="10" fill="#6EE7B7">They work as a team!</text>
      </g>
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#450A0A" rx="20" />
      {/* Combining ideas smoothly */}
      <g transform="translate(120, 70)">
        <path d="M -80,-20 Q -40,-30 0,-10 T 80,0" fill="none" stroke="#FCA5A5" strokeWidth="6" strokeLinecap="round" />
        <circle cx="-40" cy="-17" r="6" fill="#FBBF24" />
        <circle cx="20" cy="-6" r="6" fill="#38BDF8" />
        <text x="0" y="30" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#FECACA">Smooth sentences</text>
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#082F49" rx="20" />
      {/* Cove with chain links */}
      <path d="M 0,100 Q 60,70 120,100 T 240,100 L 240,140 L 0,140 Z" fill="#0284C7" />
      <path d="M 0,120 Q 60,90 120,120 T 240,120 L 240,140 L 0,140 Z" fill="#0369A1" />
      <rect x="60" y="40" width="30" height="15" fill="none" stroke="#FDE047" strokeWidth="4" rx="7" transform="rotate(45, 75, 47)" />
      <rect x="75" y="55" width="30" height="15" fill="none" stroke="#FBBF24" strokeWidth="4" rx="7" transform="rotate(45, 90, 62)" />
      <text x="120" y="125" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#BAE6FD">Tap the chain links!</text>
    </svg>
  );
});

// ─── LABELS (100% ENGLISH) ──────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Conjunction Cove",
    
    // T1: FANBOYS
    t1_title: "Coordinating Conjunctions",
    t1_text: "Coordinating conjunctions connect two EQUAL ideas. Remember the word FANBOYS: For, And, Nor, But, Or, Yet, So.",
    t1_b1: "I like Mars, AND I like Venus.",
    t1_b2: "It was cold, SO I wore a spacesuit.",
    t1_b3: "Use a comma before the FANBOYS if it joins two full sentences.",
    t1_inst: "Is the word a FANBOYS conjunction or a Subordinating one?",
    t1_bucket_fan: "FANBOYS (Equal)",
    t1_bucket_sub: "Subordinating",
    t1_item_f1: "and", t1_item_f2: "but",
    t1_item_s1: "because", t1_item_s2: "although",
    t1_q: "Which FANBOYS conjunction shows a choice between two things?",
    t1_q_a: "or", t1_q_b: "and", t1_q_c: "but", t1_q_d: "so",

    // T2: Subordinating
    t2_title: "Subordinating Conjunctions",
    t2_text: "These conjunctions introduce extra information (a dependent clause) that can't stand alone. Examples: because, although, since, if, while.",
    t2_b1: "We stayed inside BECAUSE it rained.",
    t2_b2: "ALTHOUGH it was dark, we could see the stars.",
    t2_b3: "They show cause, time, or condition.",
    t2_inst: "Fill in the gap with the best subordinating conjunction!",
    t2_sentence: "The launch was delayed ___ there was a strong storm.",
    t2_c1: "because", t2_c2: "although", t2_c3: "if",
    t2_q: "Which word is a subordinating conjunction?",
    t2_q_a: "although", t2_q_b: "and", t2_q_c: "but", t2_q_d: "or",

    // T3: Correlative
    t3_title: "Correlative Pairs",
    t3_text: "Correlative conjunctions always travel in PAIRS! They work together to balance words or phrases in a sentence.",
    t3_b1: "EITHER you sit down, OR you fall.",
    t3_b2: "NEITHER the captain NOR the pilot knew the way.",
    t3_b3: "BOTH Mars AND Jupiter are planets.",
    t3_inst: "Match the first half of the pair to its partner!",
    t3_l1: "either", t3_r1: "or",
    t3_l2: "neither", t3_r2: "nor",
    t3_l3: "both", t3_r3: "and",
    t3_q: "What goes with 'not only'?",
    t3_q_a: "but also", t3_q_b: "or", t3_q_c: "and", t3_q_d: "nor",

    // T4: Sentence Combining
    t4_title: "Bridging Ideas",
    t4_text: "By using the right conjunction, you can make your writing much smoother. Instead of choppy, short sentences, you create beautiful bridges.",
    t4_b1: "Choppy: I ran. I fell.",
    t4_b2: "Smooth: I ran, but I fell.",
    t4_b3: "Put the sentence pieces in the right order.",
    t4_inst: "Drag the words to build a compound sentence using a FANBOYS conjunction!",
    t4_w1: "I", t4_w2: "wanted", t4_w3: "to", t4_w4: "go,", t4_w5: "but", t4_w6: "I", t4_w7: "was", t4_w8: "tired.",
    t4_q: "Why do we use conjunctions?",
    t4_q_a: "To connect words and ideas smoothly.", t4_q_b: "To end a sentence.", t4_q_c: "To capitalize nouns.", t4_q_d: "To show an action.",

    // T5: Fun Catch
    t5_title: "Chain Link Catch",
    t5_text: "You've successfully bridged the Conjunction Cove! Catch the glowing chain links to secure our ship to the dock.",
    t5_b1: "Conjunctions act like chain links.",
    t5_b2: "They hold sentences together.",
    t5_b3: "Catch 6 links!",
    t5_inst: "Tap the 6 glowing chain links (🔗) over the water!",
    t5_q: "What does the 'B' in FANBOYS stand for?",
    t5_q_a: "But", t5_q_b: "Because", t5_q_c: "Both", t5_q_d: "Before",
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
        { id: "fan", label: "t1_bucket_fan" },
        { id: "sub", label: "t1_bucket_sub" },
      ],
      items: [
        { text: "t1_item_f1", bucketId: "fan" },
        { text: "t1_item_s1", bucketId: "sub" },
        { text: "t1_item_f2", bucketId: "fan" },
        { text: "t1_item_s2", bucketId: "sub" },
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
      type: "gap-fill",
      sentence: "t2_sentence",
      choices: ["t2_c1", "t2_c2", "t2_c3"],
      correctIndex: 0, // "because"
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
        { left: "t3_l1", right: "t3_r1" }, // either - or
        { left: "t3_l2", right: "t3_r2" }, // neither - nor
        { left: "t3_l3", right: "t3_r3" }, // both - and
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
      type: "word-order",
      words: ["t4_w1", "t4_w2", "t4_w3", "t4_w4", "t4_w5", "t4_w6", "t4_w7", "t4_w8"],
      correctOrder: [0, 1, 2, 3, 4, 5, 6, 7], // I wanted to go, but I was tired.
      instruction: "t4_inst",
      hint1: "t4_b2",
      hint2: "t4_b1",
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
      tapCount: { emoji: "🔗", count: 6 }, // Chain links
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
  icon: "🔗",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const ConjunctionExplorer = memo(function ConjunctionExplorer({
  color = "#0284C7", // Sky-600 for the Cove/Water vibe
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
      explorerId="english_k5_conjunction_cove" 
      color={color} 
      lang="en" // Forcing English ELA
      onDone={onDone} 
    />
  );
});

export default ConjunctionExplorer;
