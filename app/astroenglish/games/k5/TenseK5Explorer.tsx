"use client";
// TenseK5Explorer.tsx — AstroEnglish Grade 5: i3 Tense Temple
// Topics: 1) Simple Tenses 2) Progressive Tenses 3) Perfect Tenses 4) Tense Consistency 5) Hourglass Catch

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric) ───────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#2E1065" rx="20" />
      {/* 3 Time Pillars */}
      <g transform="translate(40, 60)">
        <rect x="-20" y="0" width="40" height="60" fill="#8B5CF6" />
        <polygon points="-25,0 25,0 0,-20" fill="#A855F7" />
        <text x="0" y="30" textAnchor="middle" fontSize="10" fontWeight="bold" fill="white">PAST</text>
      </g>
      <g transform="translate(120, 50)">
        <rect x="-20" y="0" width="40" height="70" fill="#10B981" />
        <polygon points="-25,0 25,0 0,-20" fill="#34D399" />
        <text x="0" y="35" textAnchor="middle" fontSize="10" fontWeight="bold" fill="white">PRESENT</text>
      </g>
      <g transform="translate(200, 60)">
        <rect x="-20" y="0" width="40" height="60" fill="#F59E0B" />
        <polygon points="-25,0 25,0 0,-20" fill="#FBBF24" />
        <text x="0" y="30" textAnchor="middle" fontSize="10" fontWeight="bold" fill="white">FUTURE</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#0F172A" rx="20" />
      {/* Progressive Wave (Ongoing Action) */}
      <g transform="translate(120, 70)">
        <path d="M -80,0 Q -40,-30 0,0 T 80,0" fill="none" stroke="#38BDF8" strokeWidth="6" />
        <circle cx="0" cy="0" r="15" fill="#0284C7" />
        <text x="0" y="4" textAnchor="middle" fontSize="10" fontWeight="bold" fill="white">ING</text>
        <text x="0" y="35" textAnchor="middle" fontSize="10" fill="#BAE6FD">Ongoing Action</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#450A0A" rx="20" />
      {/* Perfect Tense (Completed before another point) */}
      <g transform="translate(120, 70)">
        <line x1="-80" y1="0" x2="80" y2="0" stroke="#FCA5A5" strokeWidth="3" markerEnd="url(#arrow)" />
        <circle cx="-30" cy="0" r="10" fill="#FBBF24" />
        <path d="M -35,0 L -30,5 L -20,-5" fill="none" stroke="#78350F" strokeWidth="3" strokeLinecap="round" />
        <line x1="30" y1="-15" x2="30" y2="15" stroke="#F87171" strokeWidth="4" />
        <text x="-30" y="25" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#FDE047">HAD FINISHED</text>
        <text x="30" y="30" textAnchor="middle" fontSize="10" fill="#FECACA">By the time...</text>
      </g>
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#064E3B" rx="20" />
      {/* Tense Consistency Scale */}
      <g transform="translate(120, 70)">
        <line x1="-40" y1="-10" x2="40" y2="-10" stroke="#D1FAE5" strokeWidth="4" />
        <polygon points="0,-10 -10,20 10,20" fill="#10B981" />
        <rect x="-50" y="-30" width="20" height="20" fill="#3B82F6" rx="3" />
        <text x="-40" y="-16" textAnchor="middle" fontSize="8" fontWeight="bold" fill="white">PAST</text>
        <rect x="30" y="-30" width="20" height="20" fill="#3B82F6" rx="3" />
        <text x="40" y="-16" textAnchor="middle" fontSize="8" fontWeight="bold" fill="white">PAST</text>
        <text x="0" y="40" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#A7F3D0">Keep it Balanced!</text>
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#171717" rx="20" />
      {/* Temple Altar with Hourglasses */}
      <polygon points="60,120 180,120 150,80 90,80" fill="#44403C" />
      <rect x="100" y="60" width="40" height="20" fill="#78716C" />
      <polygon points="120,30 140,60 100,60" fill="#FDE047" opacity="0.8" />
      <polygon points="120,30 130,0 110,0" fill="#FDE047" opacity="0.4" />
      <text x="120" y="135" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#D6D3D1">Tap the hourglasses!</text>
    </svg>
  );
});

// ─── LABELS (100% ENGLISH) ──────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Tense Temple",
    
    // T1: Simple Tenses
    t1_title: "The Pillars of Time",
    t1_text: "Let's review the Simple Tenses. PAST means it already happened (usually '-ed'). PRESENT happens now or usually (often '-s'). FUTURE will happen later ('will').",
    t1_b1: "Past: We jumped.",
    t1_b2: "Present: He jumps.",
    t1_b3: "Future: I will jump.",
    t1_inst: "Match the verb to its correct pillar of time!",
    t1_l1: "played", t1_r1: "Past",
    t1_l2: "plays", t1_r2: "Present",
    t1_l3: "will play", t1_r3: "Future",
    t1_q: "Which verb is in the Simple Future tense?",
    t1_q_a: "will travel", t1_q_b: "traveled", t1_q_c: "travels", t1_q_d: "is traveling",

    // T2: Progressive Tenses
    t2_title: "Progressive (Continuous) Tenses",
    t2_text: "Progressive tenses show an ONGOING action. We build them using a form of 'to be' (am/is/are/was/were) plus a verb ending in '-ing'.",
    t2_b1: "Present Progressive: I am working right now.",
    t2_b2: "Past Progressive: I was working yesterday at noon.",
    t2_b3: "Look for the '-ing' ending!",
    t2_inst: "Highlight the progressive verb phrase in the sentence!",
    t2_tok0: "The", t2_tok1: "captain", t2_tok2: "was", t2_tok3: "steering", t4_tok4: "the", t2_tok5: "ship", t2_tok6: "carefully.",
    t2_q: "Which of these is a Past Progressive verb?",
    t2_q_a: "were flying", t2_q_b: "flew", t2_q_c: "will fly", t2_q_d: "are flying",

    // T3: Perfect Tenses
    t3_title: "Perfect Tenses",
    t3_text: "Perfect tenses show that an action was COMPLETED before another point in time. We use 'have/has/had' plus a past participle.",
    t3_b1: "Present Perfect: I have finished (before now).",
    t3_b2: "Past Perfect: I had finished (before something else in the past).",
    t3_b3: "Look for have, has, or had!",
    t3_inst: "Fill in the gap to complete the Past Perfect sentence!",
    t3_sentence: "The rocket launched after we ___ checked the engines.",
    t3_c1: "had", t3_c2: "have", t3_c3: "was",
    t3_q: "What helping verb is used to make the Past Perfect tense?",
    t3_q_a: "had", t3_q_b: "will", t3_q_c: "am", t3_q_d: "did",

    // T4: Tense Consistency
    t4_title: "Tense Consistency",
    t4_text: "When writing a story, don't time travel without a reason! If you start in the PAST tense, keep all your verbs in the PAST tense. Keep it balanced.",
    t4_b1: "Bad: We flew (past) to Mars and look (present) around.",
    t4_b2: "Good: We flew (past) to Mars and looked (past) around.",
    t4_b3: "Make sure the verbs match.",
    t4_inst: "Sort the sentences: Are the verbs Consistent (Good) or Mixed Up (Bad)?",
    t4_bucket_good: "Consistent (Good)",
    t4_bucket_bad: "Mixed Up (Bad)",
    t4_item_g1: "I ran outside and saw the UFO.", t4_item_g2: "He eats lunch and drinks water.",
    t4_item_b1: "I sit down and opened my book.", t4_item_b2: "She will sing and danced all night.",
    t4_q: "How would you fix this: 'The alien smiled and waves at us'?",
    t4_q_a: "Change 'waves' to 'waved'.", t4_q_b: "Change 'smiled' to 'will smile'.", t4_q_c: "Add a comma.", t4_q_d: "It is already correct.",

    // T5: Fun Catch
    t5_title: "Time Keeper",
    t5_text: "You have restored the balance of time in the Tense Temple! Catch the golden hourglasses to lock the timeline.",
    t5_b1: "Time flows continuously.",
    t5_b2: "Master your verbs.",
    t5_b3: "Catch 5 hourglasses!",
    t5_inst: "Tap the 5 golden hourglasses (⏳) inside the temple!",
    t5_q: "What ending do progressive tenses always use?",
    t5_q_a: "-ing", t5_q_b: "-ed", t5_q_c: "-s", t5_q_d: "-ly",
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
      type: "match-pairs",
      pairs: [
        { left: "t1_l1", right: "t1_r1" }, // played -> Past
        { left: "t1_l2", right: "t1_r2" }, // plays -> Present
        { left: "t1_l3", right: "t1_r3" }, // will play -> Future
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
      tokens: ["t2_tok0", "t2_tok1", "t2_tok2", "t2_tok3", "t2_tok4", "t2_tok5", "t2_tok6"],
      correctIndices: [2, 3], // "was steering"
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
      correctIndex: 0, // "had"
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
      type: "drag-to-bucket",
      buckets: [
        { id: "good", label: "t4_bucket_good" },
        { id: "bad", label: "t4_bucket_bad" },
      ],
      items: [
        { text: "t4_item_g1", bucketId: "good" },
        { text: "t4_item_b1", bucketId: "bad" },
        { text: "t4_item_g2", bucketId: "good" },
        { text: "t4_item_b2", bucketId: "bad" },
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
      tapCount: { emoji: "⏳", count: 5 }, // Hourglasses
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

const TenseK5Explorer = memo(function TenseK5Explorer({
  color = "#D97706", // Amber-600 for the Temple/Time/Sand vibe
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
      explorerId="english_k5_tense_temple" 
      color={color} 
      lang="en" // Forcing English ELA
      onDone={onDone} 
    />
  );
});

export default TenseK5Explorer;
