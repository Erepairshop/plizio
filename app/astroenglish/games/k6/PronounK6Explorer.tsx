"use client";
// PronounPrecisionK6Explorer.tsx — AstroEnglish Grade 6: i2 Pronoun Precision
// Topics: 1) Reflexive vs Intensive 2) Relative Pronouns 3) Demonstrative Pronouns 4) Interrogative 5) Precision Catch

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric) ───────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#1E1B4B" rx="20" />
      {/* Reflexive Mirror Concept */}
      <g transform="translate(120, 70)">
        <path d="M -50,0 Q 0,-40 50,0 T -50,0" fill="none" stroke="#818CF8" strokeWidth="3" />
        <circle cx="0" cy="0" r="20" fill="#4338CA" />
        <text x="0" y="5" textAnchor="middle" fontSize="10" fontWeight="bold" fill="white">SELF</text>
        <path d="M -30,25 L 30,25" stroke="#FBBF24" strokeWidth="2" markerEnd="url(#arrow)" />
        <text x="0" y="45" textAnchor="middle" fontSize="10" fill="#A5B4FC">Action reflects back</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#0F172A" rx="20" />
      {/* Relative Pronoun Linker */}
      <g transform="translate(120, 70)">
        <rect x="-80" y="-15" width="60" height="30" fill="#334155" rx="4" />
        <rect x="20" y="-15" width="60" height="30" fill="#334155" rx="4" />
        <circle cx="0" cy="0" r="15" fill="#F59E0B" />
        <text x="0" y="4" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#451A03">THAT</text>
        <path d="M -20,0 L 20,0" stroke="#FDE047" strokeWidth="2" strokeDasharray="4,2" />
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#171717" rx="20" />
      {/* Precision Crosshair */}
      <circle cx="120" cy="70" r="40" fill="none" stroke="#F43F5E" strokeWidth="1" />
      <line x1="80" y1="70" x2="160" y2="70" stroke="#F43F5E" strokeWidth="1" />
      <line x1="120" y1="30" x2="120" y2="110" stroke="#F43F5E" strokeWidth="1" />
      <circle cx="120" cy="70" r="2" fill="#F43F5E" />
      <text x="120" y="125" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#FB7185">Tap the targets!</text>
    </svg>
  );
});

// ─── LABELS (100% ENGLISH) ──────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Pronoun Precision",
    
    // T1: Reflexive & Intensive (PHYSICS BUCKET)
    t1_title: "Reflexive vs. Intensive",
    t1_text: "Both end in -self or -selves. REFLEXIVE is necessary for the sentence to make sense (The pilot saw himself). INTENSIVE is just for emphasis and can be removed (I built it myself).",
    t1_b1: "Reflexive: He hurt himself.",
    t1_b2: "Intensive: She herself made it.",
    t1_b3: "If you can remove it, it's intensive!",
    t1_inst: "Sort the pronouns into the correct gravity bucket!",
    t1_bucket_ref: "Reflexive (Needed)",
    t1_bucket_int: "Intensive (Extra)",
    t1_item_r1: "I bought myself a gift.", t1_item_r2: "They taught themselves.",
    t1_item_i1: "The King himself came.", t1_item_i2: "I'll do it myself.",
    t1_q: "In 'He corrected the error himself', what type of pronoun is 'himself'?",
    t1_q_a: "Intensive", t1_q_b: "Reflexive", t1_q_c: "Relative", t1_q_d: "Demonstrative",

    // T2: Relative Pronouns (MAGNET MATCH)
    t2_title: "Relative Connections",
    t2_text: "Relative pronouns (who, whom, whose, which, that) connect a dependent clause to a noun. 'Who' is for people, 'Which' is for things.",
    t2_b1: "The girl WHO won is my friend.",
    t2_b2: "The ship WHICH landed is huge.",
    t2_b3: "Match the person or thing to the right relative pronoun!",
    t2_inst: "Magnet Match: Connect the noun to its correct relative pronoun!",
    t2_l1: "The scientist...", t2_r1: "...who found the moon.",
    t2_l2: "The telescope...", t2_r2: "...which is very old.",
    t2_l3: "The book...", t2_r3: "...that I read.",
    t2_q: "Which relative pronoun is used ONLY for people?",
    t2_q_a: "Who", t2_q_b: "Which", t2_q_c: "That", t2_q_d: "It",

    // T3: Demonstrative Pronouns (SLINGSHOT)
    t3_title: "Pointing Pronouns",
    t3_text: "Demonstrative pronouns point to specific things. THIS/THESE are for things near you. THAT/THOSE are for things far away.",
    t3_b1: "Near: This is my desk.",
    t3_b2: "Far: Those are the stars.",
    t3_b3: "Shoot the correct pronoun based on distance!",
    t3_inst: "Look at the distant stars! Shoot the pronoun for something FAR AWAY and PLURAL.",
    t3_target_1: "Those", // Correct
    t3_target_2: "These",
    t3_target_3: "This",
    t3_q: "Which word is the plural of 'that'?",
    t3_q_a: "Those", t3_q_b: "These", t3_q_c: "They", t3_q_d: "Them",

    // T4: Interrogative Pronouns (HIGHLIGHT)
    t4_title: "Asking Questions",
    t4_text: "Interrogative pronouns (who, whom, whose, which, what) are used to ask questions. They stand in for the answer you are looking for.",
    t4_b1: "WHO is the captain?",
    t4_b2: "WHICH do you prefer?",
    t4_b3: "They always lead the inquiry.",
    t4_inst: "Highlight the Interrogative Pronoun in this question!",
    t4_tok0: "Whose", t4_tok1: "is", t4_tok2: "this", t4_tok3: "broken", t4_tok4: "robot", t4_tok5: "lying", t4_tok6: "on", t4_tok7: "the", t4_tok8: "floor?",
    t4_q: "What type of pronoun is used to start a question?",
    t4_q_a: "Interrogative", t4_q_b: "Reflexive", t4_q_c: "Intensive", t4_q_d: "Relative",

    // T5: Fun Catch
    t5_title: "Precision Complete",
    t5_text: "Your pronoun precision is unmatched! You have navigated the ice rings of Saturnia with perfect accuracy.",
    t5_b1: "Use -self for reflection.",
    t5_b2: "Point clearly with demonstratives.",
    t5_b3: "Catch 5 targets!",
    t5_inst: "Tap the 5 red targeting markers (🎯) appearing in your visor!",
    t5_q: "Which pronoun is Reflexive?",
    t5_q_a: "Ourselves", t5_q_b: "Them", t5_q_c: "We", t5_q_d: "Those",
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
        { id: "ref", label: "t1_bucket_ref" },
        { id: "int", label: "t1_bucket_int" },
      ],
      items: [
        { text: "t1_item_r1", bucketId: "ref" },
        { text: "t1_item_i1", bucketId: "int" },
        { text: "t1_item_r2", bucketId: "ref" },
        { text: "t1_item_i2", bucketId: "int" },
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
      type: "physics-magnet",
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
    svg: () => <Topic1Svg />,
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "physics-slingshot",
      question: "t3_inst",
      targets: [
        { id: "tar1", text: "t3_target_1", isCorrect: true }, // Those
        { id: "tar2", text: "t3_target_2", isCorrect: false },
        { id: "tar3", text: "t3_target_3", isCorrect: false },
      ],
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
    svg: () => <Topic2Svg />,
    bulletKeys: ["t4_b1", "t4_b2", "t4_b3"],
    interactive: {
      type: "highlight-text",
      tokens: ["t4_tok0", "t4_tok1", "t4_tok2", "t4_tok3", "t4_tok4", "t4_tok5", "t4_tok6", "t4_tok7", "t4_tok8"],
      correctIndices: [0], // "Whose"
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
      tapCount: { emoji: "🎯", count: 5 }, 
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

const PronounPrecisionK6Explorer = memo(function PronounPrecisionK6Explorer({
  color = "#6366F1", // Indigo-500
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
      explorerId="english_k6_pronoun_precision" 
      color={color} 
      lang="en" // Forcing English ELA
      onDone={onDone} 
    />
  );
});

export default PronounPrecisionK6Explorer;
