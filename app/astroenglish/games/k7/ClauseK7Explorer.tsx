"use client";
// ClauseK7Explorer.tsx — AstroEnglish Grade 7: i8 Clause Kingdom
// Topics: 1) Independent vs Dependent 2) Clause Types 3) Relative Pronouns 4) Clause Hunt 5) Crown Catch

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric) ───────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#4C1D95" rx="20" />
      {/* King and Peasant / Independent and Dependent */}
      <g transform="translate(70, 70)">
        <polygon points="0,-20 15,10 -15,10" fill="#FBBF24" />
        <rect x="-10" y="10" width="20" height="20" fill="#D97706" />
        <text x="0" y="45" textAnchor="middle" fontSize="10" fill="#FDE68A">Independent</text>
      </g>
      <g transform="translate(170, 70)">
        <polygon points="0,-10 10,10 -10,10" fill="#9CA3AF" />
        <rect x="-5" y="10" width="10" height="15" fill="#4B5563" />
        <text x="0" y="45" textAnchor="middle" fontSize="10" fill="#E5E7EB">Dependent</text>
        <path d="M -20,15 Q -40,-20 -80,0" fill="none" stroke="#A78BFA" strokeWidth="2" strokeDasharray="4,4" />
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#1E3A8A" rx="20" />
      {/* Three Towers for Noun, Adj, Adv Clauses */}
      <g transform="translate(120, 80)">
        <rect x="-50" y="-30" width="20" height="50" fill="#3B82F6" />
        <polygon points="-50,-30 -40,-50 -30,-30" fill="#FBBF24" />
        <text x="-40" y="-10" textAnchor="middle" fontSize="10" fontWeight="bold" fill="white" transform="rotate(-90, -40, -10)">ADJ</text>

        <rect x="-10" y="-40" width="20" height="60" fill="#2563EB" />
        <polygon points="-10,-40 0,-60 10,-40" fill="#FBBF24" />
        <text x="0" y="-10" textAnchor="middle" fontSize="10" fontWeight="bold" fill="white" transform="rotate(-90, 0, -10)">ADV</text>

        <rect x="30" y="-20" width="20" height="40" fill="#1D4ED8" />
        <polygon points="30,-20 40,-40 50,-20" fill="#FBBF24" />
        <text x="40" y="-5" textAnchor="middle" fontSize="10" fontWeight="bold" fill="white" transform="rotate(-90, 40, -5)">NOUN</text>
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#020617" rx="20" />
      {/* Golden Crown */}
      <g transform="translate(120, 70)">
        <polygon points="-30,-10 -20,20 20,20 30,-10 10,0 0,-20 -10,0" fill="#FBBF24" />
        <circle cx="-30" cy="-10" r="4" fill="#FDE047" />
        <circle cx="0" cy="-20" r="4" fill="#FDE047" />
        <circle cx="30" cy="-10" r="4" fill="#FDE047" />
        <circle cx="0" cy="10" r="4" fill="#EF4444" />
        <text x="0" y="50" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#FDE68A">Tap the Crowns!</text>
      </g>
    </svg>
  );
});

// ─── LABELS (100% ENGLISH) ──────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Clause Kingdom",
    
    // T1: Independent vs Dependent (DROP GAME)
    t1_title: "The Royal Clauses",
    t1_text: "An INDEPENDENT clause is the King: it has a subject, a verb, and makes a complete thought. A DEPENDENT clause has a subject and a verb, but it starts with a word like 'because' or 'when', so it cannot stand alone.",
    t1_b1: "Independent: Can be its own sentence.",
    t1_b2: "Dependent: Needs an Independent clause to make sense.",
    t1_b3: "Watch out for subordinating conjunctions (AWUBIS)!",
    t1_inst: "Sort the clauses into the Independent or Dependent buckets!",
    t1_bucket_ind: "Independent",
    t1_bucket_dep: "Dependent",
    t1_item_i1: "The king ruled wisely.", t1_item_i2: "The castle is huge.",
    t1_item_d1: "Because it rained,", t1_item_d2: "When the dragon attacked,",
    t1_q: "Which clause can stand alone as a complete sentence?",
    t1_q_a: "Independent Clause", t1_q_b: "Dependent Clause", t1_q_c: "Subordinate Clause", t1_q_d: "Santa Clause",

    // T2: Clause Types (MAGNET MATCH)
    t2_title: "Towers of Grammar",
    t2_text: "Dependent clauses do specific jobs. An ADJECTIVE clause describes a noun. An ADVERB clause tells how, when, or why. A NOUN clause acts like a person, place, or thing.",
    t2_b1: "Adjective clause: Starts with who, whose, which, that.",
    t2_b2: "Adverb clause: Starts with although, because, since, if.",
    t2_b3: "Noun clause: Often acts as the subject or object.",
    t2_inst: "Magnet Match: Connect the clause to its job!",
    t2_l1: "...who wore a red cape.", t2_r1: "Adjective Clause",
    t2_l2: "...because he was tired.", t2_r2: "Adverb Clause",
    t2_l3: "Whoever wins the race...", t2_r3: "Noun Clause",
    t2_q: "In the sentence 'I know what you did', the phrase 'what you did' is a:",
    t2_q_a: "Noun Clause", t2_q_b: "Adverb Clause", t2_q_c: "Adjective Clause", t2_q_d: "Independent Clause",

    // T3: Relative Pronouns (HIGHLIGHT)
    t3_title: "Radar Scan: Relative Pronouns",
    t3_text: "Adjective clauses are usually introduced by RELATIVE PRONOUNS: who, whom, whose, which, or that. They connect the clause to the noun it describes.",
    t3_b1: "Find the noun being described.",
    t3_b2: "Look for the relative pronoun right after it.",
    t3_b3: "Highlight only the relative pronoun!",
    t3_inst: "Highlight the RELATIVE PRONOUN in this sentence!",
    t3_tok0: "The", t3_tok1: "knight", t3_tok2: "who", t3_tok3: "saved", t3_tok4: "the", t3_tok5: "village", t3_tok6: "was", t3_tok7: "brave.",
    t3_q: "Which word is NOT a relative pronoun?",
    t3_q_a: "Because", t3_q_b: "Who", t3_q_c: "Which", t3_q_d: "That",

    // T4: Clause Hunt (SLINGSHOT)
    t4_title: "The Royal Hunt",
    t4_text: "Can you identify sentences based on their clause structure? Remember, a Complex sentence has one independent clause and at least one dependent clause.",
    t4_b1: "Simple: One independent clause.",
    t4_b2: "Compound: Two independent clauses.",
    t4_b3: "Complex: One independent + one dependent.",
    t4_inst: "Shoot the asteroid that contains a COMPLEX sentence!",
    t4_target_1: "When it rained, we went inside.", // Correct (Complex)
    t4_target_2: "It rained, and we went inside.", // Compound
    t4_target_3: "We went inside the castle.", // Simple
    t4_q: "A sentence with two independent clauses joined by 'and' is called:",
    t4_q_a: "A Compound Sentence", t4_q_b: "A Complex Sentence", t4_q_c: "A Simple Sentence", t4_q_d: "A Fragment",

    // T5: Fun Catch
    t5_title: "Ruler of Clauses",
    t5_text: "You are now the absolute ruler of the Clause Kingdom! You command simple, compound, and complex sentences with royal ease.",
    t5_b1: "Independent = King.",
    t5_b2: "Dependent = Loyal subject.",
    t5_b3: "Catch 6 Crowns!",
    t5_inst: "Tap the 6 golden crowns (👑) to claim your throne!",
    t5_q: "Which word often starts a dependent Adverb clause?",
    t5_q_a: "Although", t5_q_b: "Who", t5_q_c: "Which", t5_q_d: "That",
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
      type: "highlight-text",
      tokens: ["t3_tok0", "t3_tok1", "t3_tok2", "t3_tok3", "t3_tok4", "t3_tok5", "t3_tok6", "t3_tok7"],
      correctIndices: [2], // "who"
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
      type: "physics-slingshot",
      question: "t4_inst",
      targets: [
        { id: "tgt1", text: "t4_target_1", isCorrect: true }, 
        { id: "tgt2", text: "t4_target_2", isCorrect: false },
        { id: "tgt3", text: "t4_target_3", isCorrect: false },
      ],
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
      tapCount: { emoji: "👑", count: 6 }, 
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
  icon: "👑",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const ClauseK7Explorer = memo(function ClauseK7Explorer({
  color = "#6B21A8", // Purple-800 (Royal Purple)
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
      grade={7} 
      explorerId="english_k7_clause_kingdom" 
      color={color} 
      lang="en" 
      onDone={onDone} 
    />
  );
});

export default ClauseK7Explorer;
