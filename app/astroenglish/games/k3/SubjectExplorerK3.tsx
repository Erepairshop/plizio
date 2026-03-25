"use client";
// SubjectExplorerK3.tsx — AstroEnglish Grade 3: i4 Subject Star
// Topics: 1) What is a Subject? 2) What is a Predicate? 3) Simple Sentences 4) Compound Sentences 5) Star Catch

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric) ───────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#0F172A" rx="20" />
      {/* Magnifying Glass on the Subject */}
      <g transform="translate(120, 70)">
        <rect x="-90" y="-15" width="180" height="30" fill="#1E293B" rx="5" />
        <text x="-50" y="4" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#FDE047">The alien</text>
        <text x="30" y="4" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#94A3B8">jumped high.</text>
        
        {/* Magnifying Glass */}
        <circle cx="-50" cy="0" r="20" fill="none" stroke="#38BDF8" strokeWidth="4" />
        <line x1="-36" y1="14" x2="-25" y2="25" stroke="#38BDF8" strokeWidth="5" strokeLinecap="round" />
        <text x="-50" y="35" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#7DD3FC">Subject (Who/What)</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#1E1B4B" rx="20" />
      {/* Highlighting the Predicate (Action) */}
      <g transform="translate(120, 70)">
        <rect x="-90" y="-15" width="180" height="30" fill="#2E1065" rx="5" />
        <text x="-50" y="4" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#A78BFA">The alien</text>
        <text x="30" y="4" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#FCA5A5">jumped high.</text>
        
        {/* Action lines for Predicate */}
        <path d="M 0,15 L 60,15" fill="none" stroke="#EF4444" strokeWidth="3" markerEnd="url(#arrow)" />
        <text x="30" y="30" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#F87171">Predicate (Action)</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#022C22" rx="20" />
      {/* Simple Sentence (One Subject + One Predicate) */}
      <g transform="translate(120, 70)">
        <polygon points="0,-25 10,-5 30,-5 15,10 20,30 0,20 -20,30 -15,10 -30,-5 -10,-5" fill="#FBBF24" />
        <text x="0" y="45" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#D1FAE5">One Simple Idea</text>
      </g>
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#450A0A" rx="20" />
      {/* Compound Sentence (Two simple sentences joined) */}
      <g transform="translate(60, 60)">
        <polygon points="0,-20 8,-4 25,-4 12,8 16,25 0,16 -16,25 -12,8 -25,-4 -8,-4" fill="#FBBF24" />
      </g>
      <g transform="translate(120, 60)">
        <rect x="-15" y="-10" width="30" height="20" fill="#3B82F6" rx="4" />
        <text x="0" y="3" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#EFF6FF">AND</text>
        <line x1="-35" y1="0" x2="-15" y2="0" stroke="#FCA5A5" strokeWidth="3" />
        <line x1="15" y1="0" x2="35" y2="0" stroke="#FCA5A5" strokeWidth="3" />
      </g>
      <g transform="translate(180, 60)">
        <polygon points="0,-20 8,-4 25,-4 12,8 16,25 0,16 -16,25 -12,8 -25,-4 -8,-4" fill="#34D399" />
      </g>
      <text x="120" y="105" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#FCA5A5">Two Ideas Joined Together</text>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#1C1917" rx="20" />
      {/* Starfield background */}
      <circle cx="40" cy="30" r="2" fill="#FDE047" />
      <circle cx="200" cy="110" r="3" fill="#FDE047" opacity="0.8" />
      <circle cx="150" cy="40" r="1.5" fill="#FDE047" />
      <circle cx="80" cy="100" r="2.5" fill="#FDE047" opacity="0.6" />
      <text x="120" y="125" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#D6D3D1">Tap the stars!</text>
    </svg>
  );
});

// ─── LABELS (100% ENGLISH) ──────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Subject Star",
    
    // T1: The Subject
    t1_title: "The Subject (Who/What?)",
    t1_text: "Every sentence has two main parts. The SUBJECT is the 'Who' or 'What' the sentence is about. It usually comes at the beginning.",
    t1_b1: "The 'red rocket' landed. (Subject = The red rocket)",
    t1_b2: "'Neil' walked on the moon. (Subject = Neil)",
    t1_b3: "Find out who is doing the action!",
    t1_inst: "Highlight the SUBJECT (who or what the sentence is about)!",
    t1_tok0: "The", t1_tok1: "brave", t1_tok2: "astronaut", t1_tok3: "waved", t1_tok4: "hello.",
    t1_q: "In the sentence 'The little green alien laughed', what is the subject?",
    t1_q_a: "The little green alien", t1_q_b: "laughed", t1_q_c: "alien laughed", t1_q_d: "green",

    // T2: The Predicate
    t2_title: "The Predicate (The Action)",
    t2_text: "The second part of the sentence is the PREDICATE. It tells us what the subject DOES or IS. It always includes the verb!",
    t2_b1: "The rocket 'landed safely'. (Predicate = landed safely)",
    t2_b2: "Neil 'walked on the moon'. (Predicate = walked on the moon)",
    t2_b3: "The predicate shows the action.",
    t2_inst: "Sort the sentence parts into Subject and Predicate!",
    t2_bucket_subj: "Subject (Who/What)",
    t2_bucket_pred: "Predicate (Action)",
    t2_item_s1: "The fast ship", t2_item_s2: "My crew",
    t2_item_p1: "flew away.", t2_item_p2: "ate space food.",
    t2_q: "Which part of the sentence contains the VERB?",
    t2_q_a: "The Predicate", t2_q_b: "The Subject", t2_q_c: "The Adjective", t2_q_d: "The Noun",

    // T3: Simple Sentences
    t3_title: "Simple Sentences",
    t3_text: "A Simple Sentence has exactly one Subject and one Predicate. It shares one complete idea.",
    t3_b1: "The sun (Subject) is hot (Predicate).",
    t3_b2: "One subject + one predicate = Simple Sentence.",
    t3_b3: "Put the parts together!",
    t3_inst: "Drag the words to build a Simple Sentence!",
    t3_w1: "My", t3_w2: "robot", t3_w3: "helps", t3_w4: "me.",
    t3_q: "Is 'The star shines bright' a simple sentence?",
    t3_q_a: "Yes, it has one subject and one predicate.", t3_q_b: "No, it is too short.", t3_q_c: "No, it has no subject.", t3_q_d: "No, it is a compound sentence.",

    // T4: Compound Sentences
    t4_title: "Compound Sentences",
    t4_text: "A Compound Sentence is made by joining TWO simple sentences together using a conjunction like AND, BUT, OR, or SO.",
    t4_b1: "[I like stars], BUT [my sister likes planets].",
    t4_b2: "Two subjects and two predicates in one sentence!",
    t4_b3: "Find the connecting word.",
    t4_inst: "Fill in the gap to complete the Compound Sentence!",
    t4_sentence: "The rover broke down, ___ the astronauts fixed it.",
    t4_c1: "so", t4_c2: "because", t4_c3: "or",
    t4_q: "What do we use to join two simple sentences together?",
    t4_q_a: "A conjunction (like 'and')", t4_q_b: "An adjective", t4_q_c: "A subject", t4_q_d: "A prefix",

    // T5: Fun Catch
    t5_title: "Star Catcher",
    t5_text: "You are a shining star at identifying subjects and predicates! Let's catch some real stars in the galaxy.",
    t5_b1: "'You' is the subject.",
    t5_b2: "'Catch the stars' is the predicate.",
    t5_b3: "Catch 6 stars!",
    t5_inst: "Tap the 6 golden stars (⭐) floating in space!",
    t5_q: "What is the predicate in 'The dog barks loud'?",
    t5_q_a: "barks loud", t5_q_b: "The dog", t5_q_c: "dog barks", t5_q_d: "loud",
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
      tokens: ["t1_tok0", "t1_tok1", "t1_tok2", "t1_tok3", "t1_tok4"],
      correctIndices: [0, 1, 2], // "The brave astronaut"
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
      type: "drag-to-bucket",
      buckets: [
        { id: "subj", label: "t2_bucket_subj" },
        { id: "pred", label: "t2_bucket_pred" },
      ],
      items: [
        { text: "t2_item_s1", bucketId: "subj" },
        { text: "t2_item_p1", bucketId: "pred" },
        { text: "t2_item_s2", bucketId: "subj" },
        { text: "t2_item_p2", bucketId: "pred" },
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
    svg: () => <Topic3Svg />,
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "word-order",
      words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4"],
      correctOrder: [0, 1, 2, 3], // My robot helps me.
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
      type: "gap-fill",
      sentence: "t4_sentence",
      choices: ["t4_c1", "t4_c2", "t4_c3"],
      correctIndex: 0, // "so"
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
      tapCount: { emoji: "⭐", count: 6 }, // Stars
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
  icon: "🔍",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const SubjectExplorerK3 = memo(function SubjectExplorerK3({
  color = "#EAB308", // Yellow-500 for the Star theme
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
      explorerId="english_k3_subject_star" 
      color={color} 
      lang="en" // Forcing English ELA
      onDone={onDone} 
    />
  );
});

export default SubjectExplorerK3;
