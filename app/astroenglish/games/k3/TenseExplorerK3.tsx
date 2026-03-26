"use client";
// TenseExplorerK3.tsx — AstroEnglish Grade 3: i2 Tense Tower
// Topics: 1) Past, Present, Future 2) Time Travel Verbs 3) Comparing (-er) 4) The Most (-est) 5) Clock Catch

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric) ───────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#0F172A" rx="20" />
      {/* Time Tower Levels */}
      <g transform="translate(120, 110)">
        {/* Past */}
        <rect x="-40" y="-30" width="80" height="30" fill="#3B82F6" rx="4" />
        <text x="0" y="-10" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#EFF6FF">PAST (-ed)</text>
        {/* Present */}
        <rect x="-35" y="-65" width="70" height="30" fill="#10B981" rx="4" />
        <text x="0" y="-45" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#ECFDF5">PRESENT</text>
        {/* Future */}
        <rect x="-30" y="-100" width="60" height="30" fill="#F59E0B" rx="4" />
        <text x="0" y="-80" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#FFFBEB">FUTURE</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#1E1B4B" rx="20" />
      {/* Time Machine Arrow */}
      <g transform="translate(120, 70)">
        <text x="50" y="5" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#10B981">go</text>
        <path d="M 25,0 L -25,0" fill="none" stroke="#FBBF24" strokeWidth="4" strokeDasharray="5,5" markerEnd="url(#arrow)" />
        <text x="-50" y="5" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#3B82F6">went</text>
        <text x="0" y="30" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#A78BFA">Time Travel to the Past!</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#312E81" rx="20" />
      {/* Comparing Adjectives (-er) */}
      <g transform="translate(70, 70)">
        <circle cx="0" cy="0" r="15" fill="#EF4444" />
        <text x="0" y="30" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#FCA5A5">fast</text>
      </g>
      <path d="M 100,70 L 130,70" fill="none" stroke="#6366F1" strokeWidth="3" markerEnd="url(#arrow)" />
      <g transform="translate(170, 70)">
        <circle cx="0" cy="0" r="25" fill="#F43F5E" />
        <line x1="-35" y1="0" x2="-25" y2="0" stroke="#FFF" strokeWidth="2" />
        <line x1="-40" y1="10" x2="-20" y2="10" stroke="#FFF" strokeWidth="2" />
        <text x="0" y="45" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#FDA4AF">faster</text>
      </g>
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#022C22" rx="20" />
      {/* Superlative (-est) */}
      <g transform="translate(40, 70)">
        <circle cx="0" cy="10" r="10" fill="#34D399" />
        <text x="0" y="35" textAnchor="middle" fontSize="10" fill="#A7F3D0">big</text>
      </g>
      <g transform="translate(120, 70)">
        <circle cx="0" cy="0" r="20" fill="#10B981" />
        <text x="0" y="35" textAnchor="middle" fontSize="10" fill="#6EE7B7">bigger</text>
      </g>
      <g transform="translate(200, 70)">
        <circle cx="0" cy="-10" r="30" fill="#059669" />
        <text x="0" y="35" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#34D399">biggest!</text>
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#1C1917" rx="20" />
      {/* Tower background */}
      <rect x="100" y="40" width="40" height="100" fill="#44403C" />
      <polygon points="90,40 150,40 120,10" fill="#78716C" />
      <circle cx="120" cy="60" r="12" fill="#FDE047" />
      <line x1="120" y1="60" x2="120" y2="52" stroke="#422006" strokeWidth="2" />
      <line x1="120" y1="60" x2="126" y2="60" stroke="#422006" strokeWidth="2" />
      <text x="120" y="125" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#D6D3D1">Tap the clocks!</text>
    </svg>
  );
});

// ─── LABELS (100% ENGLISH) ──────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Tense Tower",
    
    // T1: Past, Present, Future
    t1_title: "Past, Present, and Future",
    t1_text: "Verbs tell us WHEN something happens. PAST means it already happened (-ed). PRESENT is happening right now. FUTURE will happen later (will).",
    t1_b1: "Past: We jumped yesterday.",
    t1_b2: "Present: We jump today.",
    t1_b3: "Future: We WILL jump tomorrow.",
    t1_inst: "Sort the verbs: Are they from the PAST or from the FUTURE?",
    t1_bucket_past: "Past (Yesterday)",
    t1_bucket_future: "Future (Tomorrow)",
    t1_item_p1: "played", t1_item_p2: "looked",
    t1_item_f1: "will play", t1_item_f2: "will look",
    t1_q: "Which word tells us something is happening in the FUTURE?",
    t1_q_a: "will", t1_q_b: "was", t1_q_c: "did", t1_q_d: "had",

    // T2: Time Travel Verbs
    t2_title: "Time Travel Verbs",
    t2_text: "Some verbs are irregular! When they travel to the past, they completely change their spelling instead of adding '-ed'.",
    t2_b1: "See -> Saw.",
    t2_b2: "Run -> Ran.",
    t2_b3: "Go -> Went.",
    t2_inst: "Match the Present tense verb to its Irregular Past tense!",
    t2_l1: "eat", t2_r1: "ate",
    t2_l2: "make", t2_r2: "made",
    t2_l3: "fly", t2_r3: "flew",
    t2_q: "What is the past tense of the word 'take'?",
    t2_q_a: "took", t2_q_b: "taked", t2_q_c: "take", t2_q_d: "taken",

    // T3: Comparing (-er)
    t3_title: "Comparing Two Things (-er)",
    t3_text: "When we want to compare two nouns, we add '-er' to the end of the adjective. We also use the word 'than'.",
    t3_b1: "Mars is smaller than Earth.",
    t3_b2: "A rocket is faster than a car.",
    t3_b3: "Fast + er = Faster.",
    t3_inst: "Fill in the gap to compare the two space objects!",
    t3_sentence: "A comet is ___ than an asteroid.",
    t3_c1: "faster", t3_c2: "fast", t3_c3: "fastest",
    t3_q: "Which word correctly compares two things?",
    t3_q_a: "brighter", t3_q_b: "bright", t3_q_c: "brightest", t3_q_d: "brightly",

    // T4: The Most (-est)
    t4_title: "The Ultimate (-est)",
    t4_text: "When we compare THREE or more things to find the extreme one, we add '-est' to the adjective. We use the word 'the'.",
    t4_b1: "Big -> Bigger -> The BIGGEST.",
    t4_b2: "Cold -> Colder -> The COLDEST.",
    t4_b3: "Find the ultimate adjective!",
    t4_inst: "Highlight the superlative adjective (the one ending in -est)!",
    t4_tok0: "Jupiter", t4_tok1: "is", t4_tok2: "the", t4_tok3: "largest", t4_tok4: "planet.",
    t4_q: "How do you say a star has the most light of all?",
    t4_q_a: "It is the brightest.", t4_q_b: "It is the brighter.", t4_q_c: "It is bright.", t4_q_d: "It is more bright.",

    // T5: Fun Catch
    t5_title: "Clock Catch",
    t5_text: "You have conquered the Tense Tower! Time is on your side. Let's catch some floating clocks.",
    t5_b1: "Time waits for no one.",
    t5_b2: "Check your tenses carefully.",
    t5_b3: "Catch 6 clocks!",
    t5_inst: "Tap the 6 clocks (⏰) floating around the tower!",
    t5_q: "Which suffix compares THREE or more things?",
    t5_q_a: "-est", t5_q_b: "-er", t5_q_c: "-ed", t5_q_d: "-ing",
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
        { id: "past", label: "t1_bucket_past" },
        { id: "future", label: "t1_bucket_future" },
      ],
      items: [
        { text: "t1_item_p1", bucketId: "past" },
        { text: "t1_item_f1", bucketId: "future" },
        { text: "t1_item_p2", bucketId: "past" },
        { text: "t1_item_f2", bucketId: "future" },
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
        { left: "t2_l1", right: "t2_r1" }, // eat - ate
        { left: "t2_l2", right: "t2_r2" }, // make - made
        { left: "t2_l3", right: "t2_r3" }, // fly - flew
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
      correctIndex: 0, // "faster"
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
      tokens: ["t4_tok0", "t4_tok1", "t4_tok2", "t4_tok3", "t4_tok4"],
      correctIndices: [3], // "largest"
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
      tapCount: { emoji: "⏰", count: 6 }, // Clocks
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
  icon: "⏰",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const TenseExplorerK3 = memo(function TenseExplorerK3({
  color = "#4F46E5", // Indigo-600 for the Time/Tower vibe
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
      explorerId="english_k3_tense_tower" 
      color={color} 
      lang="en" // Forcing English ELA
      onDone={onDone} 
    />
  );
});

export default TenseExplorerK3;
