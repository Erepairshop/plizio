"use client";
// QuotationExplorerK3.tsx — AstroEnglish Grade 3: i5 Quote Quasar
// Topics: 1) Quotation Marks 2) Punctuation with Quotes 3) Sentence Fragments 4) Run-on Sentences 5) Quote Catch

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric) ───────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#0F172A" rx="20" />
      {/* Speech Bubble with Quotes */}
      <g transform="translate(120, 70)">
        <path d="M -60,-30 L 60,-30 Q 70,-30 70,-20 L 70,10 Q 70,20 60,20 L 20,20 L 0,40 L 0,20 L -60,20 Q -70,20 -70,10 L -70,-20 Q -70,-30 -60,-30 Z" fill="#3B82F6" />
        <text x="-45" y="0" textAnchor="middle" fontSize="24" fontWeight="bold" fill="#FDE047">"</text>
        <text x="0" y="0" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#EFF6FF">Blast off!</text>
        <text x="45" y="0" textAnchor="middle" fontSize="24" fontWeight="bold" fill="#FDE047">"</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#2E1065" rx="20" />
      {/* Punctuation Placement */}
      <g transform="translate(120, 70)">
        <rect x="-100" y="-20" width="200" height="40" fill="#4C1D95" rx="8" />
        <text x="0" y="5" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#DDD6FE">
          He said<tspan fill="#F43F5E">,</tspan> <tspan fill="#34D399">"</tspan>Hello<tspan fill="#F43F5E">!"</tspan>
        </text>
        <circle cx="-25" cy="8" r="10" fill="none" stroke="#FDE047" strokeWidth="2" />
        <circle cx="35" cy="0" r="14" fill="none" stroke="#FDE047" strokeWidth="2" />
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#4A044E" rx="20" />
      {/* Broken Bridge (Fragment) vs Complete Bridge */}
      <g transform="translate(60, 50)">
        <path d="M -30,0 L -10,0" stroke="#9CA3AF" strokeWidth="6" />
        <path d="M 10,0 L 30,0" stroke="#9CA3AF" strokeWidth="6" />
        <text x="0" y="25" textAnchor="middle" fontSize="10" fill="#F9A8D4">Fragment (Broken)</text>
      </g>
      <g transform="translate(180, 50)">
        <path d="M -30,0 L 30,0" stroke="#10B981" strokeWidth="6" />
        <text x="0" y="25" textAnchor="middle" fontSize="10" fill="#6EE7B7">Complete Sentence</text>
      </g>
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#831843" rx="20" />
      {/* Run-on Train (Too many cars) */}
      <g transform="translate(120, 70)">
        <rect x="-90" y="-15" width="40" height="30" fill="#F59E0B" rx="4" />
        <rect x="-45" y="-15" width="40" height="30" fill="#3B82F6" rx="4" />
        <rect x="0" y="-15" width="40" height="30" fill="#10B981" rx="4" />
        <rect x="45" y="-15" width="40" height="30" fill="#8B5CF6" rx="4" />
        <line x1="-50" y1="0" x2="-45" y2="0" stroke="#FDA4AF" strokeWidth="4" />
        <line x1="-5" y1="0" x2="0" y2="0" stroke="#FDA4AF" strokeWidth="4" />
        <line x1="40" y1="0" x2="45" y2="0" stroke="#FDA4AF" strokeWidth="4" />
        <text x="0" y="35" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#FECDD3">Run-on! Needs a break!</text>
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#171717" rx="20" />
      {/* Quasar Background */}
      <ellipse cx="120" cy="70" rx="80" ry="20" fill="none" stroke="#D946EF" strokeWidth="4" />
      <ellipse cx="120" cy="70" rx="100" ry="10" fill="none" stroke="#A855F7" strokeWidth="2" />
      <circle cx="120" cy="70" r="15" fill="#FDF4FF" />
      <circle cx="120" cy="70" r="25" fill="#E879F9" opacity="0.5" />
      <text x="120" y="125" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#F0ABFC">Tap the speech bubbles!</text>
    </svg>
  );
});

// ─── LABELS (100% ENGLISH) ──────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Quote Quasar",
    
    // T1: Quotation Marks
    t1_title: "Quotation Marks",
    t1_text: "When we write down the exact words someone says, we put them inside quotation marks ( \"...\" )!",
    t1_b1: "They look like little double commas in the air.",
    t1_b2: "Example: The pilot said, \"Let's fly!\"",
    t1_b3: "Only the spoken words go inside the marks.",
    t1_inst: "Highlight the exact words the astronaut is saying!",
    t1_tok0: "The", t1_tok1: "astronaut", t1_tok2: "yelled,", t1_tok3: "\"Look", t1_tok4: "at", t1_tok5: "that", t1_tok6: "comet!\"",
    t1_q: "What do quotation marks show us?",
    t1_q_a: "Exactly what someone said.", t1_q_b: "A big action.", t1_q_c: "The end of a story.", t1_q_d: "A proper noun.",

    // T2: Punctuation with Quotes
    t2_title: "Punctuation Rules",
    t2_text: "Quotation marks have special rules for punctuation! Always put a comma before the quote begins, and keep the end mark INSIDE the quotes.",
    t2_b1: "Rule 1: Use a comma to introduce the quote.",
    t2_b2: "Rule 2: End marks (., !, ?) go inside the closing quotes.",
    t2_b3: "He asked, \"Are we there yet?\"",
    t2_inst: "Fill in the gap to punctuate the sentence correctly!",
    t2_sentence: "The captain said ___ We are landing!\"",
    t2_c1: ", \"", t2_c2: "\" ,", t2_c3: ". \"",
    t2_q: "Where does the punctuation mark go at the end of a quote?",
    t2_q_a: "Inside the quotation marks.", t2_q_b: "Outside the quotation marks.", t2_q_c: "In the middle.", t2_q_d: "You don't need one.",

    // T3: Fragments
    t3_title: "Sentence Fragments",
    t3_text: "A sentence must have a Subject (who/what) and a Predicate (action). If it is missing one, it is a FRAGMENT (a broken piece).",
    t3_b1: "Fragment: 'The big red ship.' (Missing the action!)",
    t3_b2: "Fragment: 'Flew into space.' (Missing the subject!)",
    t3_b3: "Complete: The big red ship flew into space.",
    t3_inst: "Sort the phrases! Is it a Complete Sentence or a broken Fragment?",
    t3_bucket_comp: "Complete Sentence",
    t3_bucket_frag: "Fragment (Broken)",
    t3_item_c1: "The alien smiled.", t3_item_c2: "We saw the moon.",
    t3_item_f1: "A bright star.", t3_item_f2: "Landed on the rock.",
    t3_q: "Why is 'The fast rocket' a fragment?",
    t3_q_a: "It is missing a predicate (action).", t3_q_b: "It is missing a subject.", t3_q_c: "It has no adjective.", t3_q_d: "It is a complete sentence.",

    // T4: Run-on Sentences
    t4_title: "Run-on Sentences",
    t4_text: "A run-on sentence is the opposite of a fragment. It has TOO MANY complete sentences squished together without proper punctuation or conjunctions (like 'and' or 'but').",
    t4_b1: "Run-on: We went to Mars it was red.",
    t4_b2: "Fixed: We went to Mars. It was red.",
    t4_b3: "Or use a joining word: We went to Mars, AND it was red.",
    t4_inst: "Drag the words to fix the run-on and build one proper compound sentence!",
    t4_w1: "We", t4_w2: "flew", t4_w3: "fast,", t4_w4: "and", t4_w5: "we", t4_w6: "won.",
    t4_q: "How can you fix a run-on sentence?",
    t4_q_a: "Split it into two sentences.", t4_q_b: "Take out the subject.", t4_q_c: "Remove all punctuation.", t4_q_d: "Make it a fragment.",

    // T5: Fun Catch
    t5_title: "Quote Catch",
    t5_text: "You navigated the Quote Quasar perfectly! Let's collect the speech bubbles before they float away.",
    t5_b1: "Watch out for run-ons.",
    t5_b2: "Fix those fragments.",
    t5_b3: "Catch 5 speech bubbles!",
    t5_inst: "Tap the 5 speech bubbles (💬) in the quasar!",
    t5_q: "Which mark shows that someone is talking?",
    t5_q_a: "Quotation marks", t5_q_b: "Comma", t5_q_c: "Apostrophe", t5_q_d: "Period",
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
      type: "highlight-text",
      tokens: ["t1_tok0", "t1_tok1", "t1_tok2", "t1_tok3", "t1_tok4", "t1_tok5", "t1_tok6"],
      correctIndices: [3, 4, 5, 6], // ""Look at that comet!""
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
      correctIndex: 0, // ", \""
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
        { id: "comp", label: "t3_bucket_comp" },
        { id: "frag", label: "t3_bucket_frag" },
      ],
      items: [
        { text: "t3_item_c1", bucketId: "comp" },
        { text: "t3_item_f1", bucketId: "frag" },
        { text: "t3_item_c2", bucketId: "comp" },
        { text: "t3_item_f2", bucketId: "frag" },
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
      words: ["t4_w1", "t4_w2", "t4_w3", "t4_w4", "t4_w5", "t4_w6"],
      correctOrder: [0, 1, 2, 3, 4, 5], // We flew fast, and we won.
      instruction: "t4_inst",
      hint1: "t4_b2",
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
      tapCount: { emoji: "💬", count: 5 }, // Speech bubbles
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
  icon: "💬",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const QuotationExplorerK3 = memo(function QuotationExplorerK3({
  color = "#D946EF", // Fuchsia-500 for the Quasar
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
      explorerId="english_k3_quote_quasar" 
      color={color} 
      lang="en" // Forcing English ELA
      onDone={onDone} 
    />
  );
});

export default QuotationExplorerK3;
