"use client";
// SentenceK4Explorer.tsx — AstroEnglish Grade 4: i4 Sentence Supernova
// Topics: 1) Fixing Fragments 2) Fixing Run-ons 3) Compound Conjunctions 4) Comma Rules 5) Supernova Catch

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric) ───────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#0F172A" rx="20" />
      {/* Broken puzzle vs Solid puzzle */}
      <g transform="translate(60, 70)">
        <rect x="-30" y="-15" width="30" height="30" fill="#EF4444" rx="4" />
        <rect x="5" y="-15" width="25" height="15" fill="#EF4444" rx="4" />
        <text x="0" y="35" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#FCA5A5">FRAGMENT</text>
      </g>
      <path d="M 100,70 L 130,70" stroke="#475569" strokeWidth="2" markerEnd="url(#arrow)" />
      <g transform="translate(180, 70)">
        <rect x="-35" y="-15" width="70" height="30" fill="#10B981" rx="4" />
        <text x="0" y="35" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#6EE7B7">COMPLETE</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#1E1B4B" rx="20" />
      {/* Collision representing Run-on */}
      <g transform="translate(120, 70)">
        <circle cx="-30" cy="0" r="25" fill="#F59E0B" opacity="0.8" />
        <circle cx="30" cy="0" r="25" fill="#EF4444" opacity="0.8" />
        <text x="0" y="5" textAnchor="middle" fontSize="14" fontWeight="black" fill="white">RUN-ON!</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#450A0A" rx="20" />
      {/* Supernova Fusion (Conjunctions) */}
      <g transform="translate(120, 70)">
        <circle cx="0" cy="0" r="40" fill="#991B1B" />
        <circle cx="0" cy="0" r="30" fill="#DC2626" />
        <circle cx="0" cy="0" r="20" fill="#F87171" />
        <text x="0" y="5" textAnchor="middle" fontSize="12" fontWeight="black" fill="white">SO / BUT</text>
        <path d="M -60,-40 L -40,-20 M 60,40 L 40,20" stroke="#FBBF24" strokeWidth="3" />
        <path d="M 60,-40 L 40,-20 M -60,40 L -40,20" stroke="#FBBF24" strokeWidth="3" />
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#171717" rx="20" />
      {/* Expanding rings */}
      <circle cx="120" cy="70" r="10" fill="#FBBF24" />
      <circle cx="120" cy="70" r="30" fill="none" stroke="#F97316" strokeWidth="2" strokeDasharray="10,5" />
      <circle cx="120" cy="70" r="50" fill="none" stroke="#7C3AED" strokeWidth="1" strokeDasharray="5,5" />
      <text x="120" y="125" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#FDE68A">Tap the energy flares!</text>
    </svg>
  );
});

// ─── LABELS (100% ENGLISH) ──────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Sentence Supernova",
    
    // T1: Fixing Fragments
    t1_title: "Repairing Fragments",
    t1_text: "A sentence fragment is an incomplete thought. It is like a broken rocket—it cannot fly! It is missing either a Subject or a Predicate.",
    t1_b1: "Fragment: 'The silver moon.' (No action!).",
    t1_b2: "Fragment: 'Flew past Jupiter.' (No who!).",
    t1_b3: "Complete: 'The silver moon glows.'",
    t1_inst: "Is the phrase a Complete Sentence or a broken Fragment?",
    t1_bucket_comp: "Complete Sentence",
    t1_bucket_frag: "Fragment (Broken)",
    t1_item_c1: "He orbits the sun.", t1_item_c2: "Stars shine bright.",
    t1_item_f1: "Deep in space.", t1_item_f2: "A brave pilot.",
    t1_q: "Why is 'Under the large telescope' a fragment?",
    t1_q_a: "It is missing both a subject and a verb.", t1_q_b: "It is too long.", t1_q_c: "It has too many adjectives.", t1_q_d: "It is a complete sentence.",

    // T2: Fixing Run-ons
    t2_title: "Stopping Run-ons",
    t2_text: "A run-on sentence happens when two or more complete thoughts are squashed together without a period or a comma.",
    t2_b1: "Run-on: I like stars they are bright.",
    t2_b2: "Fix with a period: I like stars. They are bright.",
    t2_b3: "Fix with a comma and 'and': I like stars, and they are bright.",
    t2_inst: "Match the run-on sentence to its correctly fixed version!",
    t2_l1: "I saw Mars it was red.", t2_r1: "I saw Mars. It was red.",
    t2_l2: "We landed we were happy.", t2_r2: "We landed, and we were happy.",
    t2_l3: "The sun is hot it is big.", t2_r3: "The sun is hot; it is big.",
    t2_q: "What is the best way to fix: 'The rocket launched it was loud'?",
    t2_q_a: "The rocket launched, and it was loud.", t2_q_b: "The rocket launched it was loud.", t2_q_c: "Launched it loud.", t2_q_d: "The rocket launched and loud.",

    // T3: Compound Conjunctions
    t3_title: "Fusion: Joining Ideas",
    t3_text: "We use conjunctions (and, but, or, so) to fuse two simple sentences into one Compound Sentence.",
    t3_b1: "'And' adds information.",
    t3_b2: "'But' shows a contrast (difference).",
    t3_b3: "'So' shows a result.",
    t3_inst: "Fill in the gap with the correct conjunction to join the ideas!",
    t3_sentence: "The space station was small, ___ it was very comfortable.",
    t3_c1: "but", t3_c2: "so", t3_c3: "or",
    t3_q: "Which conjunction shows a RESULT of something happening?",
    t3_q_a: "so", t3_q_b: "but", t3_q_c: "and", t3_q_d: "or",

    // T4: Comma Rules
    t4_title: "The Power of the Comma",
    t4_text: "In a compound sentence, you MUST place a comma before the conjunction that joins the two complete thoughts.",
    t4_b1: "Sentence 1 + , + Conjunction + Sentence 2.",
    t4_b2: "Example: The fuel is low, so we must return.",
    t4_b3: "Find where the comma belongs.",
    t4_inst: "Highlight the comma used correctly in this compound sentence!",
    t4_tok0: "The", t4_tok1: "alien", t4_tok2: "waved,", t4_tok3: "and", t4_tok4: "the", t4_tok5: "astronaut", t4_tok6: "waved", t4_tok7: "back.",
    t4_q: "Where does the comma go in a compound sentence?",
    t4_q_a: "Before the conjunction.", t4_q_b: "After the conjunction.", t4_q_c: "At the end of the sentence.", t4_q_d: "Between two adjectives.",

    // T5: Fun Catch
    t5_title: "Supernova Catch",
    t5_text: "The supernova has exploded with energy! Catch the flares to power your ship for the next leap.",
    t5_b1: "'Exploded' is a past tense verb.",
    t5_b2: "'Supernova' is the subject.",
    t5_b3: "Catch 6 flares!",
    t5_inst: "Tap the 6 energy flares (💥) before they fade away!",
    t5_q: "Which conjunction would you use to show a choice between two things?",
    t5_q_a: "or", t5_q_b: "and", t5_q_c: "but", t5_q_d: "so",
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
        { id: "comp", label: "t1_bucket_comp" },
        { id: "frag", label: "t1_bucket_frag" },
      ],
      items: [
        { text: "t1_item_c1", bucketId: "comp" },
        { text: "t1_item_f1", bucketId: "frag" },
        { text: "t1_item_c2", bucketId: "comp" },
        { text: "t1_item_f2", bucketId: "frag" },
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
        { left: "t2_l1", right: "t2_r1" }, // period fix
        { left: "t2_l2", right: "t2_r2" }, // conjunction fix
        { left: "t2_l3", right: "t2_r3" }, // semicolon fix
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
    svg: () => <Topic3Svg />,
    bulletKeys: ["t4_b1", "t4_b2", "t4_b3"],
    interactive: {
      type: "highlight-text",
      tokens: ["t4_tok0", "t4_tok1", "t4_tok2", "t4_tok3", "t4_tok4", "t4_tok5", "t4_tok6", "t4_tok7"],
      correctIndices: [2], // The comma after "waved"
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
      tapCount: { emoji: "💥", count: 6 }, // Flares
      instruction: "t5_inst",
      hint1: "t5_b1",
      hint2: "t5_b3",
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
  icon: "💥",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const SentenceK4Explorer = memo(function SentenceK4Explorer({
  color = "#F97316", // Orange-500 for the supernova explosion
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
      grade={4} 
      explorerId="english_k4_sentence_supernova" 
      color={color} 
      lang="en" // Forcing English ELA
      onDone={onDone} 
    />
  );
});

export default SentenceK4Explorer;
