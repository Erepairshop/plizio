"use client";
// ArgumentExplorer.tsx — AstroEnglish Grade 7: i7 Argument Archipelago
// Topics: 1) Thesis vs Evidence 2) Argument Anatomy 3) Spot the Counterclaim 4) Relevant Evidence 5) Island Catch

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric) ───────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#065F46" rx="20" />
      {/* Scales of Justice / Argument */}
      <g transform="translate(120, 70)">
        <path d="M 0,-30 L 0,30" stroke="#D1FAE5" strokeWidth="4" />
        <path d="M -40,-10 L 40,-10" stroke="#A7F3D0" strokeWidth="4" />
        <polygon points="-40,-10 -50,10 -30,10" fill="#10B981" />
        <polygon points="40,-10 30,10 50,10" fill="#10B981" />
        <polygon points="-10,30 10,30 0,10" fill="#047857" />
        <text x="0" y="45" textAnchor="middle" fontSize="10" fill="#6EE7B7">Balance your Argument</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#1E3A8A" rx="20" />
      {/* Target/Thesis */}
      <g transform="translate(120, 70)">
        <circle cx="0" cy="0" r="30" fill="none" stroke="#60A5FA" strokeWidth="4" />
        <circle cx="0" cy="0" r="15" fill="#3B82F6" />
        <circle cx="0" cy="0" r="5" fill="#DBEAFE" />
        <path d="M 40,-40 L 5,-5" stroke="#FDE047" strokeWidth="3" />
        <polygon points="5,-5 15,-10 10,-15" fill="#FDE047" />
        <text x="0" y="50" textAnchor="middle" fontSize="10" fill="#93C5FD">Hit the Main Point</text>
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#0EA5E9" rx="20" />
      {/* Tropical Island */}
      <g transform="translate(120, 90)">
        {/* Island */}
        <ellipse cx="0" cy="10" rx="40" ry="15" fill="#FDE047" />
        {/* Palm Tree Trunk */}
        <path d="M -10,10 Q -5,-10 10,-30" fill="none" stroke="#78350F" strokeWidth="4" />
        {/* Palm Leaves */}
        <path d="M 10,-30 Q 0,-40 -10,-30" fill="none" stroke="#15803D" strokeWidth="4" />
        <path d="M 10,-30 Q 20,-40 30,-30" fill="none" stroke="#15803D" strokeWidth="4" />
        <path d="M 10,-30 Q 30,-20 20,-10" fill="none" stroke="#15803D" strokeWidth="4" />
        <text x="0" y="40" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0C4A6E">Tap the Islands!</text>
      </g>
    </svg>
  );
});

// ─── LABELS (100% ENGLISH) ──────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Argument Archipelago",
    
    // T1: Thesis vs Evidence (DROP GAME)
    t1_title: "Thesis or Evidence?",
    t1_text: "A THESIS is your main claim or argument (e.g., 'Space travel is important'). EVIDENCE is the fact, data, or quote that proves your thesis is true (e.g., 'NASA reported a 20% increase in tech').",
    t1_b1: "Thesis: Your main opinion/claim.",
    t1_b2: "Evidence: Facts and data to support it.",
    t1_b3: "You can't have a strong thesis without evidence!",
    t1_inst: "Sort the sentences into the Thesis or Evidence buckets!",
    t1_bucket_the: "Thesis (Claim)",
    t1_bucket_evi: "Evidence (Fact)",
    t1_item_t1: "Mars is the best planet to colonize.", t1_item_t2: "Schools should start later.",
    t1_item_e1: "Mars has frozen water.", t1_item_e2: "Teens need 9 hours of sleep.",
    t1_q: "What is a 'Thesis Statement'?",
    t1_q_a: "The main claim or argument of an essay.", t1_q_b: "A random fact.", t1_q_c: "The concluding sentence.", t1_q_d: "A type of punctuation.",

    // T2: Argument Anatomy (MAGNET MATCH)
    t2_title: "Argument Anatomy",
    t2_text: "A strong argument also addresses the other side! A COUNTERCLAIM is what the opposing side believes. A REBUTTAL is your response proving why the counterclaim is wrong.",
    t2_b1: "Counterclaim: 'Some people argue that...'",
    t2_b2: "Rebuttal: 'However, they are incorrect because...'",
    t2_b3: "Addressing the other side makes you look smarter.",
    t2_inst: "Magnet Match: Connect the argument term to its definition!",
    t2_l1: "Thesis", t2_r1: "Your main argument",
    t2_l2: "Counterclaim", t2_r2: "The opposing side's view",
    t2_l3: "Rebuttal", t2_r3: "Your proof that the other side is wrong",
    t2_q: "Why do writers include a counterclaim?",
    t2_q_a: "To show they understand both sides and can defeat the opposing view.", t2_q_b: "To confuse the reader.", t2_q_c: "To make the essay shorter.", t2_q_d: "To change their own mind.",

    // T3: Spot the Counterclaim (HIGHLIGHT)
    t3_title: "Radar Scan: Opposing Views",
    t3_text: "Counterclaims often start with transition phrases like 'Critics argue that', 'Others may say', or 'Some believe'.",
    t3_b1: "Look for the sentence that disagrees with the main point.",
    t3_b2: "Highlight the transition and the opposing view.",
    t3_b3: "Be precise!",
    t3_inst: "Highlight the COUNTERCLAIM in this text!",
    t3_tok0: "We", t3_tok1: "must", t3_tok2: "explore", t3_tok3: "Mars.", t3_tok4: "Critics", t3_tok5: "argue", t3_tok6: "that", t3_tok7: "it", t3_tok8: "is", t3_tok9: "too", t3_tok10: "expensive,", t3_tok11: "but", t3_tok12: "the", t3_tok13: "science", t3_tok14: "is", t3_tok15: "worth", t3_tok16: "it.",
    t3_q: "What word signals the rebuttal (the writer's defense) in the sentence above?",
    t3_q_a: "but", t3_q_b: "argue", t3_q_c: "explore", t3_q_d: "expensive",

    // T4: Relevant Evidence (SLINGSHOT)
    t4_title: "Laser Focus",
    t4_text: "Not all evidence is good evidence! It must be RELEVANT. If your thesis is about healthy eating, an interesting fact about baseball is irrelevant.",
    t4_b1: "Read the Thesis.",
    t4_b2: "Find the evidence that directly supports it.",
    t4_b3: "Ignore true but unrelated facts.",
    t4_inst: "Shoot the asteroid that has the RELEVANT evidence for the Thesis: 'Solar power is the best energy source.'",
    t4_target_1: "Solar panels reduce emissions by 80%.", // Correct
    t4_target_2: "The sun is very hot in the summer.",
    t4_target_3: "Wind turbines are also used for energy.",
    t4_q: "What does 'relevant' mean in writing?",
    t4_q_a: "Directly connected to the topic.", t4_q_b: "Very long and detailed.", t4_q_c: "A fact with numbers.", t4_q_d: "Written by a famous person.",

    // T5: Fun Catch
    t5_title: "Master Debater",
    t5_text: "You have conquered the Argument Archipelago! You know how to build a claim, support it with hard evidence, and crush the counterclaims.",
    t5_b1: "Thesis = Claim.",
    t5_b2: "Evidence = Proof.",
    t5_b3: "Catch 6 Islands!",
    t5_inst: "Tap the 6 tropical islands (🏝️) to claim your territory!",
    t5_q: "Which element is the foundation of a persuasive essay?",
    t5_q_a: "The Thesis Statement", t5_q_b: "The title page", t5_q_c: "The font size", t5_q_d: "The author's photo",
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
        { id: "the", label: "t1_bucket_the" },
        { id: "evi", label: "t1_bucket_evi" },
      ],
      items: [
        { text: "t1_item_t1", bucketId: "the" },
        { text: "t1_item_e1", bucketId: "evi" },
        { text: "t1_item_t2", bucketId: "the" },
        { text: "t1_item_e2", bucketId: "evi" },
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
      tokens: ["t3_tok0", "t3_tok1", "t3_tok2", "t3_tok3", "t3_tok4", "t3_tok5", "t3_tok6", "t3_tok7", "t3_tok8", "t3_tok9", "t3_tok10", "t3_tok11", "t3_tok12", "t3_tok13", "t3_tok14", "t3_tok15", "t3_tok16"],
      correctIndices: [4, 5, 6, 7, 8, 9, 10], // "Critics argue that it is too expensive,"
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
      tapCount: { emoji: "🏝️", count: 6 }, 
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
  icon: "🏝️",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const ArgumentExplorer = memo(function ArgumentExplorer({
  color = "#047857", // Emerald-700
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
      explorerId="english_k7_argument_archipelago" 
      color={color} 
      lang="en" 
      onDone={onDone} 
    />
  );
});

export default ArgumentExplorer;
