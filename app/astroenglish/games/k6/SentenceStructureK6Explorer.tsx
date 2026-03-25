"use client";
// SentenceStructureK6Explorer.tsx — AstroEnglish Grade 6: Sentence Structures
// Topics: 1) Simple vs Compound 2) Building Compound 3) Complex Sentences 4) Compound-Complex (Stacker) 5) Gear Catch

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric) ───────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#0F172A" rx="20" />
      {/* Simple vs Compound Blueprint */}
      <g transform="translate(60, 70)">
        <rect x="-30" y="-15" width="60" height="30" fill="#3B82F6" rx="4" />
        <text x="0" y="4" textAnchor="middle" fontSize="10" fill="white">SIMPLE</text>
        <text x="0" y="35" textAnchor="middle" fontSize="10" fill="#94A3B8">1 Independent</text>
      </g>
      <g transform="translate(180, 70)">
        <rect x="-40" y="-15" width="35" height="30" fill="#3B82F6" rx="4" />
        <circle cx="0" cy="0" r="8" fill="#F59E0B" />
        <text x="0" y="3" textAnchor="middle" fontSize="8" fontWeight="bold" fill="white">+</text>
        <rect x="5" y="-15" width="35" height="30" fill="#3B82F6" rx="4" />
        <text x="0" y="35" textAnchor="middle" fontSize="10" fill="#94A3B8">COMPOUND</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#1E293B" rx="20" />
      {/* Magnet Concept for FANBOYS */}
      <g transform="translate(120, 70)">
        <path d="M -40,-20 L -20,-20 L -20,20 L -40,20 Z" fill="#EF4444" />
        <path d="M 40,-20 L 20,-20 L 20,20 L 40,20 Z" fill="#3B82F6" />
        <text x="0" y="4" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#FDE047">FANBOYS</text>
        <text x="0" y="40" textAnchor="middle" fontSize="10" fill="#94A3B8">Magnetic Conjunctions</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#172554" rx="20" />
      {/* Complex Sentence Structure */}
      <g transform="translate(120, 70)">
        <rect x="-80" y="-15" width="70" height="30" fill="#64748B" rx="4" />
        <text x="-45" y="4" textAnchor="middle" fontSize="10" fill="white">Dependent</text>
        <text x="0" y="8" textAnchor="middle" fontSize="24" fontWeight="black" fill="#FBBF24">,</text>
        <rect x="10" y="-15" width="70" height="30" fill="#3B82F6" rx="4" />
        <text x="45" y="4" textAnchor="middle" fontSize="10" fill="white">Independent</text>
      </g>
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#020617" rx="20" />
      {/* Compound-Complex Stacker */}
      <g transform="translate(120, 90)">
        <rect x="-45" y="-60" width="90" height="20" fill="#64748B" rx="2" />
        <text x="0" y="-46" textAnchor="middle" fontSize="10" fill="white">Dependent</text>
        
        <rect x="-45" y="-35" width="90" height="20" fill="#3B82F6" rx="2" />
        <text x="0" y="-21" textAnchor="middle" fontSize="10" fill="white">Independent 2</text>
        
        <rect x="-45" y="-10" width="90" height="20" fill="#2563EB" rx="2" />
        <text x="0" y="4" textAnchor="middle" fontSize="10" fill="white">Independent 1</text>
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#334155" rx="20" />
      {/* Shipyard Gears */}
      <g transform="translate(120, 70)">
        <circle cx="0" cy="0" r="25" fill="#94A3B8" />
        <circle cx="0" cy="0" r="10" fill="#334155" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
          <rect key={angle} x="-4" y="-30" width="8" height="10" fill="#94A3B8" transform={`rotate(${angle})`} />
        ))}
        <text x="0" y="55" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#F8FAFC">Tap the gears!</text>
      </g>
    </svg>
  );
});

// ─── LABELS (100% ENGLISH) ──────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Sentence Structures",
    
    // T1: Simple vs Compound (GRAVITY DROP)
    t1_title: "Simple or Compound?",
    t1_text: "A SIMPLE sentence has one independent clause (one complete thought). A COMPOUND sentence joins TWO independent clauses using a comma and a FANBOYS conjunction (for, and, nor, but, or, yet, so).",
    t1_b1: "Simple: The rocket launched into space.",
    t1_b2: "Compound: The rocket launched, and the crowd cheered.",
    t1_b3: "Look for the comma + FANBOYS!",
    t1_inst: "Drop the sentences into the correct physical bucket!",
    t1_bucket_simp: "Simple (1 Idea)",
    t1_bucket_comp: "Compound (2 Ideas)",
    t1_item_s1: "We explored Mars.", t1_item_s2: "The stars shine brightly.",
    t1_item_c1: "I ran fast, but I was late.", t1_item_c2: "It is cold, so I wear a coat.",
    t1_q: "Which conjunction is a FANBOYS word?",
    t1_q_a: "but", t1_q_b: "because", t1_q_c: "although", t1_q_d: "when",

    // T2: Building Compound Sentences (MAGNET MATCH)
    t2_title: "Magnetic Conjunctions",
    t2_text: "To build a strong compound sentence, you must connect two related thoughts with the correct conjunction. 'And' adds info, 'but' shows contrast, and 'so' shows a result.",
    t2_b1: "I was tired, SO I went to sleep.",
    t2_b2: "I studied hard, BUT the test was difficult.",
    t2_b3: "Match the halves to make sense.",
    t2_inst: "Drag the clauses together! Correct pairs will snap like magnets.",
    t2_l1: "I was hungry,", t2_r1: "so I ate pizza.",
    t2_l2: "I like dogs,", t2_r2: "but he likes cats.",
    t2_l3: "She studies hard,", t2_r3: "and she gets good grades.",
    t2_q: "What punctuation mark usually comes BEFORE a FANBOYS word in a compound sentence?",
    t2_q_a: "Comma (,)", t2_q_b: "Colon (:)", t2_q_c: "Period (.)", t2_q_d: "Dash (—)",

    // T3: Complex Sentences (HIGHLIGHT)
    t3_title: "Complex Sentences",
    t3_text: "A COMPLEX sentence has one independent clause and at least one DEPENDENT clause. Dependent clauses start with subordinating conjunctions (AWUBIS: Although, When, Until, Because, If, Since).",
    t3_b1: "Independent: We stayed inside.",
    t3_b2: "Dependent: Because it was raining.",
    t3_b3: "Combined: We stayed inside because it was raining.",
    t3_inst: "Highlight the DEPENDENT clause in this sentence (including the conjunction)!",
    t3_tok0: "The", t3_tok1: "ship", t3_tok2: "cannot", t3_tok3: "launch", t3_tok4: "until", t3_tok5: "the", t3_tok6: "storm", t3_tok7: "passes.",
    t3_q: "Which word starts a dependent clause?",
    t3_q_a: "Although", t3_q_b: "And", t3_q_c: "Or", t3_q_d: "So",

    // T4: Compound-Complex Sentences (SENTENCE STACKER)
    t4_title: "The Ultimate Structure",
    t4_text: "A COMPOUND-COMPLEX sentence is the tallest tower. It needs at least TWO independent clauses and ONE dependent clause. Build it carefully!",
    t4_b1: "Indep 1: I love reading,",
    t4_b2: "Indep 2: and I love writing,",
    t4_b3: "Dep: because words are powerful.",
    t4_inst: "Stack the blocks in the correct order to build a Compound-Complex tower! (Bottom to top)",
    t4_w0: "Even though it was dark,", // Bottom (Index 0 in physics-stacker!)
    t4_w1: "we walked outside,",       // Middle
    t4_w2: "and we looked at the stars.", // Top
    t4_q: "How many independent clauses are required for a Compound-Complex sentence?",
    t4_q_a: "Two or more.", t4_q_b: "Exactly one.", t4_q_c: "Zero.", t4_q_d: "Three dependent clauses.",

    // T5: Fun Catch
    t5_title: "Master Architect",
    t5_text: "You have successfully engineered all the major sentence structures! Your writing foundation is solid steel.",
    t5_b1: "Simple, Compound, Complex.",
    t5_b2: "Mix them up to write better.",
    t5_b3: "Catch 5 gears!",
    t5_inst: "Tap the 5 mechanical gears (⚙️) to finish!",
    t5_q: "Which sentence type has NO dependent clauses but TWO independent clauses?",
    t5_q_a: "Compound", t5_q_b: "Simple", t5_q_c: "Complex", t5_q_d: "Compound-Complex",
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
      type: "physics-bucket", // GRAVITÁCIÓS SZÓ-ESÉS
      buckets: [
        { id: "simp", label: "t1_bucket_simp" },
        { id: "comp", label: "t1_bucket_comp" },
      ],
      items: [
        { text: "t1_item_s1", bucketId: "simp" },
        { text: "t1_item_c1", bucketId: "comp" },
        { text: "t1_item_s2", bucketId: "simp" },
        { text: "t1_item_c2", bucketId: "comp" },
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
      type: "physics-magnet", // MÁGNESES PÁROSÍTÓ
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
      tokens: ["t3_tok0", "t3_tok1", "t3_tok2", "t3_tok3", "t3_tok4", "t3_tok5", "t3_tok6", "t3_tok7"],
      correctIndices: [4, 5, 6, 7], // "until the storm passes."
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
      type: "physics-stacker", // JENGAA TORONY
      // Itt az indexek határozzák meg a sorrendet alulról felfelé!
      // Index 0 a legalsó, Index 1 a középső, stb.
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
      tapCount: { emoji: "⚙️", count: 5 }, 
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
  icon: "🏗️",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const SentenceStructureK6Explorer = memo(function SentenceStructureK6Explorer({
  color = "#475569", // Slate-600 (Építkezés/acél hangulat)
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
      explorerId="english_k6_sentence_structure" 
      color={color} 
      lang="en" // Forcing English ELA
      onDone={onDone} 
    />
  );
});

export default SentenceStructureK6Explorer;
