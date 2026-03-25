"use client";
// ComplexClauseK6Explorer.tsx — AstroEnglish Grade 6: i4 Complex Clause Cove
// Topics: 1) Independent vs Dependent 2) AWUBIS Conjunctions 3) Relative Clauses 4) Building Complexity 5) Pearl Catch

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric) ───────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#020617" rx="20" />
      {/* Bioluminescent caves */}
      <circle cx="60" cy="70" r="30" fill="#3B82F6" opacity="0.4" />
      <text x="60" y="75" textAnchor="middle" fontSize="10" fontWeight="bold" fill="white">INDEP.</text>
      <path d="M 140,70 Q 180,40 220,70" fill="none" stroke="#A855F7" strokeWidth="3" strokeDasharray="4,2" />
      <text x="180" y="85" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#D8B4FE">DEPENDENT</text>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#1E1B4B" rx="20" />
      {/* AWUBIS Bubbles */}
      <g transform="translate(120, 70)">
        <circle cx="-50" cy="0" r="15" fill="#10B981" opacity="0.7" />
        <circle cx="0" cy="-20" r="18" fill="#10B981" opacity="0.9" />
        <circle cx="50" cy="0" r="15" fill="#10B981" opacity="0.7" />
        <text x="0" y="-16" textAnchor="middle" fontSize="8" fontWeight="bold" fill="white">AWUBIS</text>
        <text x="0" y="30" textAnchor="middle" fontSize="10" fill="#6EE7B7">Subordinators</text>
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#0F172A" rx="20" />
      {/* Pearls in a Cove */}
      <path d="M 40,120 Q 120,80 200,120" fill="none" stroke="#94A3B8" strokeWidth="2" />
      <circle cx="120" cy="90" r="8" fill="#F1F5F9" />
      <circle cx="120" cy="90" r="12" fill="none" stroke="#F1F5F9" strokeWidth="1" opacity="0.5" />
      <text x="120" y="130" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#CBD5E1">Collect the Cove Pearls!</text>
    </svg>
  );
});

// ─── LABELS (100% ENGLISH) ──────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Complex Clause Cove",
    
    // T1: Independent vs Dependent (PHYSICS BUCKET)
    t1_title: "Standalone or Stranded?",
    t1_text: "An Independent Clause is a complete thought that can stand alone as a sentence. A Dependent Clause starts with a subordinating conjunction and CANNOT stand alone—it's stranded without a partner!",
    t1_b1: "Independent: The oxygen is low.",
    t1_b2: "Dependent: Because the oxygen is low...",
    t1_b3: "Dependent clauses feel 'unfinished'.",
    t1_inst: "Sort the clauses into the correct gravity bucket!",
    t1_bucket_ind: "Independent (Complete)",
    t1_bucket_dep: "Dependent (Incomplete)",
    t1_item_i1: "The stars are bright.", t1_item_i2: "We found the base.",
    t1_item_d1: "After we landed.", t1_item_d2: "Unless you hurry.",
    t1_q: "What makes a clause 'dependent'?",
    t1_q_a: "It starts with a subordinating conjunction.", t1_q_b: "It has no verb.", t1_q_c: "It is too long.", t1_q_d: "It has no subject.",

    // T2: AWUBIS Conjunctions (MAGNET MATCH)
    t2_title: "The AWUBIS Links",
    t2_text: "AWUBIS is an acronym for common subordinating conjunctions: Although, While, Until, Because, If, Since. These words turn an independent clause into a dependent one.",
    t2_b1: "Rule: If the AWUBIS starts the sentence, use a comma!",
    t2_b2: "Example: [Since we are here], we should explore.",
    t2_b3: "Match the AWUBIS clause to its missing half.",
    t2_inst: "Magnet Match: Connect the dependent clause to the logical result!",
    t2_l1: "Unless we leave now,", t2_r1: "we will be late.",
    t2_l2: "Because it was dark,", t2_r2: "we used a flashlight.",
    t2_l3: "Although it was cold,", t2_r3: "she did not wear a coat.",
    t2_q: "Which word is a member of the AWUBIS family?",
    t2_q_a: "Unless", t2_q_b: "And", t2_q_c: "But", t2_q_d: "Or",

    // T3: Relative Clauses (HIGHLIGHT)
    t3_title: "Relative Connections",
    t3_text: "A Relative Clause acts like an adjective—it gives more info about a noun. It usually starts with WHO (people), WHICH (things), or THAT (either).",
    t3_b1: "The astronaut WHO found the moon...",
    t3_b2: "The rocket WHICH launched yesterday...",
    t3_b3: "Relative clauses 'relate' back to a noun.",
    t3_inst: "Highlight the RELATIVE CLAUSE in this sentence!",
    t3_tok0: "The", t3_tok1: "artifact", t3_tok2: "that", t3_tok3: "we", t3_tok4: "found", t3_tok5: "is", t3_tok6: "glowing", t3_tok7: "blue.",
    t3_q: "Which relative pronoun should you use for a person?",
    t3_q_a: "Who", t3_q_b: "Which", t3_q_c: "Whose", t3_q_d: "Where",

    // T4: Building Complexity (SLINGSHOT)
    t4_title: "Clause Construction",
    t4_text: "Mastering complex sentences means knowing which conjunction fits the logic. Does it show time, cause, or a condition?",
    t4_b1: "Time: 'After' the sun sets...",
    t4_b2: "Cause: 'Because' it was hot...",
    t4_b3: "Condition: 'If' you win...",
    t4_inst: "Shoot the correct conjunction to complete the complex sentence: '___ the alarm rang, the pilot woke up.'",
    t4_target_1: "When", // Correct
    t4_target_2: "But",
    t4_target_3: "And",
    t4_q: "Where does the comma go if a dependent clause comes FIRST?",
    t4_q_a: "After the dependent clause.", t4_q_b: "At the very beginning.", t4_q_c: "Nowhere.", t4_q_d: "Before the conjunction.",

    // T5: Fun Catch
    t5_title: "Cove Explorer",
    t5_text: "You have successfully navigated the Complex Clause Cove! You've unlocked the secrets of advanced sentence structure.",
    t5_b1: "Independent = Strong.",
    t5_b2: "Dependent = Needs help.",
    t5_b3: "Collect 5 Pearls!",
    t5_inst: "Tap the 5 glowing pearls (⚪) hidden in the cove!",
    t5_q: "What do we call a sentence with one independent and one dependent clause?",
    t5_q_a: "Complex", t5_q_b: "Simple", t5_q_c: "Compound", t5_q_d: "Fragment",
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
      type: "physics-bucket",
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
      type: "physics-magnet",
      pairs: [
        { left: "t2_l1", right: "t2_r1" },
        { left: "t2_l2", right: "t2_r2" },
        { left: "t2_l3", right: "t2_r3" },
      ],
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
    svg: () => <Topic1Svg />,
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "highlight-text",
      tokens: ["t3_tok0", "t3_tok1", "t3_tok2", "t3_tok3", "t3_tok4", "t3_tok5", "t3_tok6", "t3_tok7"],
      correctIndices: [2, 3, 4], // "that we found"
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
      type: "physics-slingshot",
      question: "t4_inst",
      targets: [
        { id: "tgt1", text: "t4_target_1", isCorrect: true }, // When
        { id: "tgt2", text: "t4_target_2", isCorrect: false },
        { id: "tgt3", text: "t4_target_3", isCorrect: false },
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
      tapCount: { emoji: "⚪", count: 5 }, 
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

const ComplexClauseK6Explorer = memo(function ComplexClauseK6Explorer({
  color = "#2DD4BF", // Teal-400
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
      explorerId="english_k6_complex_clause_cove" 
      color={color} 
      lang="en" // Forcing English ELA
      onDone={onDone} 
    />
  );
});

export default ComplexClauseK6Explorer;
