"use client";
// BigTestK4Explorer.tsx — AstroEnglish Grade 4: i9 Big Test
// Topics: 1) Pronoun & Modal Review 2) Adjective Order 3) Compound Sentences 4) Figurative Language 5) Final Victory

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric) ───────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#0F172A" rx="20" />
      {/* Grammar Sorting Terminal */}
      <rect x="60" y="30" width="120" height="80" fill="#1E293B" rx="10" stroke="#334155" strokeWidth="2" />
      <circle cx="90" cy="50" r="15" fill="#3B82F6" />
      <rect x="130" y="40" width="30" height="20" fill="#F43F5E" rx="4" />
      <text x="120" y="95" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#FDE047">K4 SYSTEMS CHECK</text>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#1E1B4B" rx="20" />
      {/* Adjective Chain Gears */}
      <g transform="translate(120, 70)">
        <circle cx="-40" cy="0" r="20" fill="none" stroke="#F43F5E" strokeWidth="3" strokeDasharray="5,3" />
        <circle cx="0" cy="0" r="25" fill="none" stroke="#3B82F6" strokeWidth="3" strokeDasharray="8,4" />
        <circle cx="45" cy="0" r="20" fill="none" stroke="#10B981" strokeWidth="3" strokeDasharray="4,2" />
        <text x="0" y="45" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#A78BFA">Opinion • Size • Color</text>
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#0C0A09" rx="20" />
      {/* Ultimate K4 Champion Trophy */}
      <g transform="translate(120, 70)">
        <polygon points="-25,-25 25,-25 15,15 -15,15" fill="#FBBF24" />
        <rect x="-30" y="15" width="60" height="12" fill="#F59E0B" rx="2" />
        <path d="M -25,-20 C -45,-20 -45,5 -15,5" fill="none" stroke="#FBBF24" strokeWidth="5" />
        <path d="M 25,-20 C 45,-20 45,5 15,5" fill="none" stroke="#FBBF24" strokeWidth="5" />
        <text x="0" y="0" textAnchor="middle" fontSize="16" fontWeight="black" fill="#78350F">K4</text>
        <circle cx="0" cy="-40" r="5" fill="#FDE047" />
      </g>
      <text x="120" y="125" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#FDE68A">Tap the Champion Shields!</text>
    </svg>
  );
});

// ─── LABELS (100% ENGLISH) ──────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "The K4 Final Exam",
    
    // T1: Pronouns & Modals Review
    t1_title: "Grammar Core Review",
    t1_text: "Let's check your grammar engines! Remember that relative pronouns (who/which) connect ideas, and modals (must/should) show rules or advice.",
    t1_b1: "'Who' is for people, 'Which' is for things.",
    t1_b2: "'Must' is a strong rule, 'Should' is a good idea.",
    t1_b3: "Match the word to its grammatical role!",
    t1_inst: "Match the word to the correct category!",
    t1_l1: "who / that", t1_r1: "Relative Pronouns",
    t1_l2: "must / can", t1_r2: "Modal Verbs",
    t1_l3: "where / when", t1_r3: "Relative Adverbs",
    t1_q: "Which word completes: 'This is the book ____ I told you about.'?",
    t1_q_a: "that", t1_q_b: "who", t1_q_c: "why", t1_q_d: "where",

    // T2: Adjective Order
    t2_title: "The Order of Description",
    t2_text: "To build a professional sentence, adjectives must follow the order: Opinion -> Size -> Color. Don't mix them up!",
    t2_b1: "Beautiful (Opinion) -> Huge (Size) -> Red (Color).",
    t2_b2: "Example: A silly little green alien.",
    t2_b3: "Put the blocks in the correct order.",
    t2_inst: "Drag the words to build a perfectly ordered descriptive sentence!",
    t2_w1: "The", t2_w2: "strange", t2_w3: "tiny", t2_w4: "silver", t2_w5: "probe.",
    t2_q: "Which sequence is correct for adjectives?",
    t2_q_a: "Opinion, Size, Color", t2_q_b: "Color, Size, Opinion", t2_q_c: "Size, Color, Opinion", t2_q_d: "Opinion, Color, Size",

    // T3: Compound Sentences
    t3_title: "Sentence Engineering",
    t3_text: "Compound sentences join two independent thoughts. You need a comma and a conjunction (and, but, or, so).",
    t3_b1: "Use 'but' for contrast.",
    t3_b2: "Use 'so' for results.",
    t3_b3: "Always put the comma before the joining word.",
    t3_inst: "Fill in the gap to complete the compound sentence correctly!",
    t3_sentence: "The telescope was expensive, ___ it was worth every penny.",
    t3_c1: "but", t3_c2: "so", t3_c3: "or",
    t3_q: "Where does the comma go in a compound sentence?",
    t3_q_a: "Before the conjunction (and, but, so).", t3_q_b: "After the conjunction.", t3_q_c: "At the end of the sentence.", t3_q_d: "Between the adjective and noun.",

    // T4: Figurative Language
    t4_title: "Similes and Metaphors",
    t4_text: "Authors use figures of speech to make stories come alive. Can you tell a simile from a metaphor?",
    t4_b1: "Simile: Uses 'like' or 'as'.",
    t4_b2: "Metaphor: Says one thing IS another.",
    t4_b3: "Find the figure of speech in the sentence.",
    t4_inst: "Highlight the word that makes this sentence a METAPHOR!",
    t4_tok0: "The", t4_tok1: "sun", t4_tok2: "is", t4_tok3: "a", t4_tok4: "giant", t4_tok5: "golden", t4_tok6: "furnace", t4_tok7: "in", t4_tok8: "the", t4_tok9: "sky.",
    t4_q: "If I say 'He is as fast as a rocket', what am I using?",
    t4_q_a: "A Simile", t4_q_b: "A Metaphor", t4_q_c: "A Run-on", t4_q_d: "A Fragment",

    // T5: Final Victory
    t5_title: "Grade 4 Graduate!",
    t5_text: "UNBELIEVABLE! You have completed all Grade 4 missions. You are now a master of English grammar and style.",
    t5_b1: "Master of Pronouns.",
    t5_b2: "Champion of Sentences.",
    t5_b3: "Ready for Grade 5!",
    t5_inst: "Tap the 6 golden champion shields (🛡️) to claim your diploma!",
    t5_q: "What is your next mission?",
    t5_q_a: "Grade 5!", t5_q_b: "The Stars!", t5_q_c: "More Learning!", t5_q_d: "All of them!",
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
        { left: "t1_l1", right: "t1_r1" },
        { left: "t1_l2", right: "t1_r2" },
        { left: "t1_l3", right: "t1_r3" },
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
      type: "word-order",
      words: ["t2_w1", "t2_w2", "t2_w3", "t2_w4", "t2_w5"],
      correctOrder: [0, 1, 2, 3, 4], // The strange tiny silver probe.
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
      type: "gap-fill",
      sentence: "t3_sentence",
      choices: ["t3_c1", "t3_c2", "t3_c3"],
      correctIndex: 0, // "but"
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
      type: "highlight-text",
      tokens: ["t4_tok0", "t4_tok1", "t4_tok2", "t4_tok3", "t4_tok4", "t4_tok5", "t4_tok6", "t4_tok7", "t4_tok8", "t4_tok9"],
      correctIndices: [2], // "is" - the link word for metaphor
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
      tapCount: { emoji: "🛡️", count: 6 }, 
      instruction: "t5_inst",
      hint1: "t5_b1",
      hint2: "t5_b3",
    },
    quiz: {
      question: "t5_q",
      choices: ["t5_q_a", "t5_q_b", "t5_q_c", "t5_q_d"],
      answer: "t5_q_d", // All of them!
    },
  },
];

// ─── DEF ────────────────────────────────────────────────────────────

const DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "🌟",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const BigTestK4Explorer = memo(function BigTestK4Explorer({
  color = "#F59E0B", 
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
      explorerId="english_k4_big_test" 
      color={color} 
      lang="en" // Forcing English ELA
      onDone={onDone} 
    />
  );
});

export default BigTestK4Explorer;
