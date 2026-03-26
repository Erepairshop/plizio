"use client";
// GrammarGalaxyK7Explorer.tsx — AstroEnglish Grade 7: i1 Grammar Galaxy
// Topics: 1) Phrase vs Clause 2) Types of Phrases 3) Spot the Clause 4) Galaxy Construction 5) Galaxy Catch

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric) ───────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#2E1065" rx="20" />
      {/* Phrase vs Clause Galaxy */}
      <g transform="translate(70, 70)">
        <circle cx="0" cy="0" r="25" fill="#8B5CF6" opacity="0.3" />
        <circle cx="0" cy="0" r="10" fill="#C4B5FD" />
        <text x="0" y="35" textAnchor="middle" fontSize="10" fill="#EED2EE">PHRASE</text>
        <text x="0" y="48" textAnchor="middle" fontSize="8" fill="#A78BFA">(No Subject+Verb)</text>
      </g>
      <g transform="translate(170, 70)">
        <circle cx="0" cy="0" r="30" fill="#6D28D9" opacity="0.5" />
        <circle cx="-10" cy="-5" r="8" fill="#FBBF24" />
        <circle cx="10" cy="5" r="8" fill="#F43F5E" />
        <text x="0" y="35" textAnchor="middle" fontSize="10" fill="#EED2EE">CLAUSE</text>
        <text x="0" y="48" textAnchor="middle" fontSize="8" fill="#A78BFA">(Subject + Verb)</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#1E1B4B" rx="20" />
      {/* Types of Phrases Orbits */}
      <g transform="translate(120, 70)">
        <ellipse cx="0" cy="0" rx="50" ry="15" fill="none" stroke="#6D28D9" strokeWidth="2" />
        <ellipse cx="0" cy="0" rx="15" ry="50" fill="none" stroke="#4C1D95" strokeWidth="2" />
        <circle cx="0" cy="0" r="12" fill="#F59E0B" />
        <circle cx="-50" cy="0" r="6" fill="#10B981" />
        <circle cx="0" cy="50" r="6" fill="#38BDF8" />
        <text x="0" y="4" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#451A03">NOUN</text>
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#0F172A" rx="20" />
      {/* Spiral Galaxy */}
      <g transform="translate(120, 70)">
        <path d="M 0,0 Q 20,-20 40,0 T 0,40 T -40,0 T 0,-40" fill="none" stroke="#C026D3" strokeWidth="3" opacity="0.6" />
        <circle cx="0" cy="0" r="8" fill="#FDF4FF" />
        <circle cx="40" cy="0" r="3" fill="#E879F9" />
        <circle cx="-40" cy="0" r="3" fill="#E879F9" />
        <text x="0" y="55" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#F0ABFC">Tap the Galaxies!</text>
      </g>
    </svg>
  );
});

// ─── LABELS (100% ENGLISH) ──────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Grammar Galaxy",
    
    // T1: Phrase vs Clause (DROP GAME)
    t1_title: "Phrase or Clause?",
    t1_text: "Welcome to Grade 7! First rule of the Galaxy: A CLAUSE has a subject and a verb (e.g., 'The star exploded'). A PHRASE is just a group of words missing either a subject or a verb (e.g., 'In the dark sky').",
    t1_b1: "Clause: Contains Subject + Verb.",
    t1_b2: "Phrase: Missing one or both.",
    t1_b3: "Can it stand alone? Probably an independent clause!",
    t1_inst: "Sort the celestial fragments into the correct buckets!",
    t1_bucket_phr: "Phrase (Incomplete)",
    t1_bucket_cla: "Clause (Subject+Verb)",
    t1_item_p1: "Across the universe", t1_item_p2: "Glowing brightly",
    t1_item_c1: "The rocket landed.", t1_item_c2: "Because we flew fast",
    t1_q: "Which of the following is a CLAUSE?",
    t1_q_a: "While the engine roared.", t1_q_b: "Under the heavy moon.", t1_q_c: "To fly very quickly.", t1_q_d: "The bright red button.",

    // T2: Types of Phrases (MAGNET MATCH)
    t2_title: "Planetary Phrases",
    t2_text: "Phrases come in different types. A Noun Phrase acts like a noun ('The big ship'). A Prepositional Phrase starts with a preposition ('Under the stars'). A Verb Phrase contains the main verb and its helpers ('Will be flying').",
    t2_b1: "Noun Phrase: The giant telescope.",
    t2_b2: "Verb Phrase: Has been scanning.",
    t2_b3: "Prep Phrase: Around the orbit.",
    t2_inst: "Magnet Match: Connect the phrase type to its correct example!",
    t2_l1: "Noun Phrase", t2_r1: "The brilliant astronaut",
    t2_l2: "Verb Phrase", t2_r2: "Might have crashed",
    t2_l3: "Prepositional Phrase", t2_r3: "Into the black hole",
    t2_q: "What type of phrase is 'over the moon'?",
    t2_q_a: "Prepositional Phrase", t2_q_b: "Noun Phrase", t2_q_c: "Verb Phrase", t2_q_d: "Adjective Phrase",

    // T3: Spot the Clause (HIGHLIGHT)
    t3_title: "Radar Scan: Dependent Clauses",
    t3_text: "A dependent clause has a subject and a verb, but it starts with an AWUBIS word (Although, When, Until, Because, If, Since) and cannot stand alone.",
    t3_b1: "Scan the sentence for AWUBIS words.",
    t3_b2: "Highlight the entire dependent clause.",
    t3_b3: "Leave the independent clause alone!",
    t3_inst: "Highlight the DEPENDENT CLAUSE in this transmission!",
    t3_tok0: "The", t3_tok1: "crew", t3_tok2: "cheered", t3_tok3: "when", t3_tok4: "the", t3_tok5: "mission", t3_tok6: "was", t3_tok7: "successful.",
    t3_q: "What word makes the clause dependent in the sentence above?",
    t3_q_a: "when", t3_q_b: "cheered", t3_q_c: "successful", t3_q_d: "The",

    // T4: Building the Galaxy (STACKER)
    t4_title: "Galaxy Construction",
    t4_text: "Let's build a complex sentence! A great sentence mixes phrases and clauses to add detail without becoming a run-on.",
    t4_b1: "Start with a dependent clause (Time/Condition).",
    t4_b2: "Add the independent clause (Main action).",
    t4_b3: "Finish with a prepositional phrase (Location).",
    t4_inst: "Stack the components to build the sentence: 'After we launched, we floated inside the cabin.' (Bottom to Top)",
    t4_w0: "After we launched,",    // Dependent Clause
    t4_w1: "we floated",           // Independent Clause (Subject + Verb)
    t4_w2: "inside the cabin.",    // Prepositional Phrase
    t4_q: "Which part of the sentence above is the Prepositional Phrase?",
    t4_q_a: "inside the cabin", t4_q_b: "we floated", t4_q_c: "After we launched", t4_q_d: "we",

    // T5: Fun Catch
    t5_title: "Galaxy Master",
    t5_text: "You have navigated the Grammar Galaxy with precision! You can now identify the building blocks of any complex text.",
    t5_b1: "Phrases lack subjects or verbs.",
    t5_b2: "Clauses have both.",
    t5_b3: "Catch 5 Galaxies!",
    t5_inst: "Tap the 5 swirling galaxies (🌌) on your radar!",
    t5_q: "Which combination makes a complete Independent Clause?",
    t5_q_a: "Subject + Verb + Complete Thought", t5_q_b: "Preposition + Noun", t5_q_c: "Helper Verb + Main Verb", t5_q_d: "AWUBIS + Subject + Verb",
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
      type: "physics-bucket", // Ez már a stabil MotionDropGame lesz
      buckets: [
        { id: "phr", label: "t1_bucket_phr" },
        { id: "cla", label: "t1_bucket_cla" },
      ],
      items: [
        { text: "t1_item_p1", bucketId: "phr" },
        { text: "t1_item_c1", bucketId: "cla" },
        { text: "t1_item_p2", bucketId: "phr" },
        { text: "t1_item_c2", bucketId: "cla" },
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
      type: "physics-magnet", // Ez már a stabil MotionMatchGame lesz
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
      correctIndices: [3, 4, 5, 6, 7], // "when the mission was successful."
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
      type: "physics-stacker", // Ez már a stabil MotionStackGame lesz
      words: ["t4_w0", "t4_w1", "t4_w2"],
      correctOrder: [0, 1, 2],
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
      tapCount: { emoji: "🌌", count: 5 }, 
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
  icon: "🌌",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const GrammarGalaxyK7Explorer = memo(function GrammarGalaxyK7Explorer({
  color = "#6D28D9", // Violet-700 (Galaktikus lila)
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
      explorerId="english_k7_grammar_galaxy" 
      color={color} 
      lang="en" // ELA esetében mindig angol a tartalom
      onDone={onDone} 
    />
  );
});

export default GrammarGalaxyK7Explorer;
