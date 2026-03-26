"use client";
// PronounK4Explorer.tsx — AstroEnglish Grade 4: i1 Pronoun Planet
// Topics: 1) Who, Which, That 2) Where, When, Why 3) Gap-fill Connectors 4) Referent Detective 5) Target Catch

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric) ───────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#0F172A" rx="20" />
      {/* People (Circle) vs Things (Square) */}
      <g transform="translate(60, 70)">
        <circle cx="0" cy="0" r="20" fill="#3B82F6" />
        <text x="0" y="35" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#93C5FD">PEOPLE (Who)</text>
      </g>
      <path d="M 100,70 L 140,70" stroke="#475569" strokeWidth="2" strokeDasharray="4,4" />
      <g transform="translate(180, 70)">
        <rect x="-20" y="-20" width="40" height="40" fill="#10B981" rx="5" />
        <text x="0" y="35" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#6EE7B7">THINGS (Which)</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#1E1B4B" rx="20" />
      {/* Where (Location pin) and When (Clock) */}
      <g transform="translate(70, 70)">
        <path d="M 0,-15 A 10,10 0 1,1 0,5 L 0,15 L 0,5 A 10,10 0 0,1 0,-15" fill="#F59E0B" />
        <circle cx="0" cy="-5" r="3" fill="#78350F" />
        <text x="0" y="35" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#FDE047">WHERE</text>
      </g>
      <g transform="translate(170, 70)">
        <circle cx="0" cy="0" r="15" fill="none" stroke="#A78BFA" strokeWidth="3" />
        <line x1="0" y1="0" x2="0" y2="-8" stroke="#A78BFA" strokeWidth="2" />
        <line x1="0" y1="0" x2="6" y2="0" stroke="#A78BFA" strokeWidth="2" />
        <text x="0" y="35" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#DDD6FE">WHEN</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#064E3B" rx="20" />
      {/* Connecting puzzle pieces */}
      <g transform="translate(120, 70)">
        <path d="M -60,-15 L -10,-15 L -5,0 L -10,15 L -60,15 Z" fill="#10B981" />
        <path d="M -10,-15 L 40,-15 L 40,15 L -10,15 L -5,0 Z" fill="#3B82F6" />
        <text x="-10" y="0" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#FDE047">?</text>
      </g>
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#450A0A" rx="20" />
      {/* Magnifying glass for detective work */}
      <g transform="translate(120, 70)">
        <circle cx="-10" cy="-5" r="20" fill="none" stroke="#FCA5A5" strokeWidth="3" />
        <line x1="4" y1="10" x2="20" y2="25" stroke="#FCA5A5" strokeWidth="5" strokeLinecap="round" />
        <text x="0" y="45" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#FECACA">Word Detective</text>
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#0C0A09" rx="20" />
      {/* Target Crosshair */}
      <circle cx="120" cy="70" r="40" fill="none" stroke="#EF4444" strokeWidth="2" />
      <line x1="120" y1="20" x2="120" y2="120" stroke="#EF4444" strokeWidth="1" />
      <line x1="70" y1="70" x2="170" y2="70" stroke="#EF4444" strokeWidth="1" />
      <text x="120" y="125" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#FCA5A5">Tap the targets!</text>
    </svg>
  );
});

// ─── LABELS (100% ENGLISH) ──────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Pronoun Planet",
    
    // T1: Relative Pronouns
    t1_title: "Linking People and Things",
    t1_text: "Relative pronouns (who, which, that) connect a description to a noun. They help us combine two short sentences!",
    t1_b1: "'Who' is for people (The pilot who zoomed).",
    t1_b2: "'Which' is for objects (The rover which explored).",
    t1_b3: "'That' can be used for both!",
    t1_inst: "Is the word for a Person (who) or a Thing (which)?",
    t1_bucket_who: "Person (Who)",
    t1_bucket_which: "Thing (Which)",
    t1_item_p1: "Astronaut", t1_item_p2: "Captain",
    t1_item_t1: "Spaceship", t1_item_t2: "Galaxy",
    t1_q: "Which word completes: 'The girl ____ loves stars is my friend.'?",
    t1_q_a: "who", t1_q_b: "which", t1_q_c: "where", t1_q_d: "when",

    // T2: Relative Adverbs
    t2_title: "Where, When, and Why?",
    t2_text: "Relative adverbs introduce extra information about places, times, or reasons.",
    t2_b1: "'Where' links to a location.",
    t2_b2: "'When' links to a time.",
    t2_b3: "'Why' links to a reason.",
    t2_inst: "Match the noun to its correct relative adverb!",
    t2_l1: "The year", t2_r1: "when",
    t2_l2: "The moon", t2_r2: "where",
    t2_l3: "The reason", t2_r3: "why",
    t2_q: "Which adverb fits a PLACE?",
    t2_q_a: "where", t2_q_b: "when", t2_q_c: "why", t2_q_d: "who",

    // T3: Combining Sentences
    t3_title: "Sentence Fusion",
    t3_text: "Let's put them into action! Use a pronoun or adverb to join two ideas together smoothly.",
    t3_b1: "Read both parts of the sentence.",
    t3_b2: "Choose the word that makes sense.",
    t3_b3: "Make sure the sentence flows.",
    t3_inst: "Fill in the gap to combine the ideas!",
    t3_sentence: "This is the spot ___ we found the crystal.",
    t3_c1: "where", t3_c2: "who", t3_c3: "that",
    t3_q: "How would you combine: 'The robot is silver. It can talk.'?",
    t3_q_a: "The robot that can talk is silver.", t3_q_b: "The robot where can talk is silver.", t3_q_c: "The robot when can talk is silver.", t3_q_d: "The robot who can talk is silver.",

    // T4: Identifying the Referent
    t4_title: "Referent Detective",
    t4_text: "A relative pronoun always points back to a specific noun called the 'referent'. Let's find out who or what is being described!",
    t4_b1: "Find the pronoun (who, which, that).",
    t4_b2: "Look at the noun right before it.",
    t4_b3: "That noun is the referent!",
    t4_inst: "Highlight the NOUN that 'WHO' is pointing to!",
    t4_tok0: "The", t4_tok1: "brave", t4_tok2: "commander", t4_tok3: "who", t4_tok4: "led", t4_tok5: "the", t4_tok6: "mission", t4_tok7: "is", t4_tok8: "here.",
    t4_q: "In 'The planet that is red is Mars', what is the referent for 'that'?",
    t4_q_a: "The planet", t4_q_b: "Mars", t4_q_c: "is red", t4_q_d: "The",

    // T5: Fun Catch
    t5_title: "Target Calibration",
    t5_text: "System check: Complete! You are now an expert on relative pronouns. Help calibrate our sensors.",
    t5_b1: "Wait for the targets.",
    t5_b2: "Tap them precisely.",
    t5_b3: "Catch 5 targets!",
    t5_inst: "Tap the 5 targets (🎯) that appear on the planet!",
    t5_q: "Which relative pronoun is used for BOTH people and things?",
    t5_q_a: "that", t5_q_b: "who", t5_q_c: "which", t5_q_d: "where",
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
        { id: "who", label: "t1_bucket_who" },
        { id: "which", label: "t1_bucket_which" },
      ],
      items: [
        { text: "t1_item_p1", bucketId: "who" },
        { text: "t1_item_t1", bucketId: "which" },
        { text: "t1_item_p2", bucketId: "who" },
        { text: "t1_item_t2", bucketId: "which" },
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
        { left: "t2_l1", right: "t2_r1" }, // year - when
        { left: "t2_l2", right: "t2_r2" }, // moon - where
        { left: "t2_l3", right: "t2_r3" }, // reason - why
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
      correctIndex: 0, // "where"
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
      tokens: ["t4_tok0", "t4_tok1", "t4_tok2", "t4_tok3", "t4_tok4", "t4_tok5", "t4_tok6", "t4_tok7", "t4_tok8"],
      correctIndices: [2], // "commander"
      instruction: "t4_inst",
      hint1: "t4_b3",
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
      tapCount: { emoji: "🎯", count: 5 }, // Targets
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
  icon: "🎯",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const PronounK4Explorer = memo(function PronounK4Explorer({
  color = "#3B82F6", 
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
      explorerId="english_k4_pronoun_planet" 
      color={color} 
      lang="en" // Forcing English ELA
      onDone={onDone} 
    />
  );
});

export default PronounK4Explorer;
