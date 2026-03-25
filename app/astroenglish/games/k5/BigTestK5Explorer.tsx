"use client";
// BigTestK5Explorer.tsx — AstroEnglish Grade 5: Final Exam
// Topics: 1) Conjunctions & Interjections 2) Advanced Tenses 3) Complex Sentences 4) Punctuation & Style 5) Victory

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric) ───────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#0F172A" rx="20" />
      {/* Mixed grammar elements */}
      <g transform="translate(120, 70)">
        <rect x="-60" y="-30" width="120" height="60" fill="#1E293B" rx="10" stroke="#334155" strokeWidth="2" />
        <circle cx="-30" cy="-10" r="10" fill="#F59E0B" /> {/* Conjunction link */}
        <circle cx="-15" cy="-10" r="10" fill="#F59E0B" />
        <path d="M 20,-20 L 40,0 L 20,20 Z" fill="#EF4444" /> {/* Interjection burst */}
        <text x="0" y="20" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#94A3B8">K5 COMPREHENSION</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#1E1B4B" rx="20" />
      {/* Semicolon and Colon energy beams */}
      <g transform="translate(80, 70)">
        <circle cx="0" cy="-10" r="5" fill="#FDE047" />
        <path d="M 0,10 A 5,5 0 1,1 0,2 L 0,15 L -3,15 A 5,5 0 0,1 0,10" fill="#FDE047" />
        <text x="0" y="40" textAnchor="middle" fontSize="10" fill="#BAE6FD">Semicolon</text>
      </g>
      <g transform="translate(160, 70)">
        <circle cx="0" cy="-10" r="5" fill="#FDE047" />
        <circle cx="0" cy="10" r="5" fill="#FDE047" />
        <text x="0" y="40" textAnchor="middle" fontSize="10" fill="#BAE6FD">Colon</text>
      </g>
      <path d="M 100,70 L 140,70" stroke="#6366F1" strokeWidth="2" strokeDasharray="4,4" />
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#0C0A09" rx="20" />
      {/* Master Trophy */}
      <g transform="translate(120, 70)">
        <polygon points="-30,-30 30,-30 20,20 -20,20" fill="#FBBF24" />
        <rect x="-35" y="20" width="70" height="10" fill="#F59E0B" rx="2" />
        <path d="M -30,-20 Q -50,-20 -50,0 T -30,10" fill="none" stroke="#FBBF24" strokeWidth="4" />
        <path d="M 30,-20 Q 50,-20 50,0 T 30,10" fill="none" stroke="#FBBF24" strokeWidth="4" />
        <text x="0" y="5" textAnchor="middle" fontSize="16" fontWeight="black" fill="#78350F">K5</text>
      </g>
      <text x="120" y="125" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#FDE68A">Tap the Master Shields!</text>
    </svg>
  );
});

// ─── LABELS (100% ENGLISH) ──────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "The K5 Big Test",
    
    // T1: Conjunctions & Interjections
    t1_title: "Parts of Speech Mastery",
    t1_text: "Let's start the final review. Can you distinguish between words that connect ideas (Conjunctions) and words that show sudden emotion (Interjections)?",
    t1_b1: "Conjunctions: although, because, but.",
    t1_b2: "Interjections: Wow! Ouch! Alas,",
    t1_b3: "Sort them into the right category.",
    t1_inst: "Is the word a Conjunction (Connector) or an Interjection (Emotion)?",
    t1_bucket_conj: "Conjunction",
    t1_bucket_int: "Interjection",
    t1_item_c1: "although", t1_item_c2: "neither",
    t1_item_i1: "Yikes!", t1_item_i2: "Phew!",
    t1_q: "Which word is a correlative conjunction that works in a pair?",
    t1_q_a: "either", t1_q_b: "wow", t1_q_c: "quickly", t1_q_d: "because",

    // T2: Advanced Tenses
    t2_title: "The Tense Timeline",
    t2_text: "Grade 5 writers must use perfect and progressive tenses accurately. Remember: 'had' is for the past perfect, and '-ing' is for ongoing actions.",
    t2_b1: "Past Perfect: I had already finished.",
    t2_b2: "Present Progressive: I am exploring.",
    t2_b3: "Keep your tenses consistent!",
    t2_inst: "Fill in the gap to complete the Past Perfect sentence correctly!",
    t2_sentence: "By the time we reached the station, the ship ___ already docked.",
    t2_c1: "had", t2_c2: "has", t2_c3: "was",
    t2_q: "Which sentence shows Tense Consistency (matching verbs)?",
    t2_q_a: "She smiled and waved.", t2_q_b: "She smiled and waves.", t2_q_c: "She smiles and waved.", t2_q_d: "She will smile and waved.",

    // T3: Complex Sentences & Commas
    t3_title: "Sentence Engineering",
    t3_text: "Complex sentences use dependent and independent clauses. The comma rule is vital for clear writing.",
    t3_b1: "Dependent first = Comma.",
    t3_b2: "Independent first = No comma.",
    t3_b3: "Fix the sentence flow.",
    t3_inst: "Highlight the sentence that uses the comma CORRECTLY!",
    t3_tok0: "Although", t3_tok1: "it", t3_tok2: "was", t3_tok3: "cold,", t3_tok4: "we", t3_tok5: "went", t3_tok6: "outside.",
    t3_q: "In 'We stayed home because it rained', do we need a comma?",
    t3_q_a: "No", t3_q_b: "Yes, before 'because'", t3_q_c: "Yes, after 'home'", t3_q_d: "Yes, at the end",

    // T4: Punctuation & Style
    t4_title: "The Expert's Tools",
    t4_text: "Final check on advanced punctuation and figurative language. Use semicolons to join sentences and metaphors to paint pictures.",
    t4_b1: "Semicolon (;): Joins related thoughts.",
    t4_b2: "Metaphor: Direct comparison (Life is a race).",
    t4_b3: "Formal Tone: Professional and precise.",
    t4_inst: "Match the concept to its example!",
    t4_l1: "Semicolon", t4_r1: "I like stars; they glow.",
    t4_l2: "Metaphor", t4_r2: "The moon is a coin.",
    t4_l3: "Formal Tone", t4_r3: "I request assistance.",
    t4_q: "Which punctuation mark introduces a list?",
    t4_q_a: "Colon (:)", t4_q_b: "Semicolon (;)", t4_q_c: "Dash (—)", t4_q_d: "Comma (,)",

    // T5: Victory
    t5_title: "K5 Graduate!",
    t5_text: "IMPRESSIVE! You have conquered every island in the Grade 5 system. Your grammar, style, and vocabulary are top-tier.",
    t5_b1: "Master of Clauses.",
    t5_b2: "Expert of Punctuation.",
    t5_b3: "Ready for Grade 6!",
    t5_inst: "Tap the 6 golden Master Shields (🛡️) to finish K5!",
    t5_q: "How do you feel after finishing Grade 5?",
    t5_q_a: "Like a Genius!", t5_q_b: "Ready for more!", t5_q_c: "Proud!", t5_q_d: "All of the above!",
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
        { id: "conj", label: "t1_bucket_conj" },
        { id: "int", label: "t1_bucket_int" },
      ],
      items: [
        { text: "t1_item_c1", bucketId: "conj" },
        { text: "t1_item_i1", bucketId: "int" },
        { text: "t1_item_c2", bucketId: "conj" },
        { text: "t1_item_i2", bucketId: "int" },
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
    svg: () => <Topic1Svg />,
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "gap-fill",
      sentence: "t2_sentence",
      choices: ["t2_c1", "t2_c2", "t2_c3"],
      correctIndex: 0, // "had"
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
    svg: () => <Topic2Svg />,
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "highlight-text",
      tokens: ["t3_tok0", "t3_tok1", "t3_tok2", "t3_tok3", "t3_tok4", "t3_tok5", "t3_tok6"],
      correctIndices: [3], // The comma
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
    svg: () => <Topic2Svg />,
    bulletKeys: ["t4_b1", "t4_b2", "t4_b3"],
    interactive: {
      type: "match-pairs",
      pairs: [
        { left: "t4_l1", right: "t4_r1" },
        { left: "t4_l2", right: "t4_r2" },
        { left: "t4_l3", right: "t4_r3" },
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
      tapCount: { emoji: "🛡️", count: 6 }, 
      instruction: "t5_inst",
      hint1: "t5_b1",
      hint2: "t5_b3",
    },
    quiz: {
      question: "t5_q",
      choices: ["t5_q_a", "t5_q_b", "t5_q_c", "t5_q_d"],
      answer: "t5_q_d",
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

const BigTestK5Explorer = memo(function BigTestK5Explorer({
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
      grade={5} 
      explorerId="english_k5_big_test" 
      color={color} 
      lang="en" // Forcing English ELA
      onDone={onDone} 
    />
  );
});

export default BigTestK5Explorer;
