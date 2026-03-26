"use client";
// WritingExplorer.tsx — AstroEnglish Grade 8: i4 Writing Workshop
// Topics: 1) Hook vs Thesis 2) Claim, Evidence, Reasoning 3) Spot the Turn 4) Call to Action 5) Pencil Catch

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric) ───────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#451A03" rx="20" />
      {/* Introduction Triangle (Funnel) */}
      <g transform="translate(120, 70)">
        <polygon points="-50,-30 50,-30 0,30" fill="#B45309" stroke="#FDE047" strokeWidth="2" />
        <path d="M 0,-40 Q 15,-50 20,-30" fill="none" stroke="#FBBF24" strokeWidth="3" markerEnd="url(#arrow)" />
        <text x="0" y="-15" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#FEF3C7">HOOK</text>
        <text x="0" y="15" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#FEF3C7">THESIS</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#1E3A8A" rx="20" />
      {/* C-E-R Building Blocks */}
      <g transform="translate(120, 80)">
        <rect x="-40" y="-60" width="80" height="20" fill="#3B82F6" rx="2" />
        <text x="0" y="-46" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#EFF6FF">CLAIM</text>
        
        <rect x="-40" y="-35" width="80" height="20" fill="#2563EB" rx="2" />
        <text x="0" y="-21" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#EFF6FF">EVIDENCE</text>
        
        <rect x="-40" y="-10" width="80" height="20" fill="#1D4ED8" rx="2" />
        <text x="0" y="4" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#EFF6FF">REASONING</text>
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#0F172A" rx="20" />
      {/* Pencil Writing */}
      <g transform="translate(120, 70) rotate(-45)">
        <rect x="-10" y="-30" width="20" height="40" fill="#FBBF24" />
        <rect x="-10" y="-40" width="20" height="10" fill="#94A3B8" />
        <rect x="-10" y="-50" width="20" height="10" fill="#F43F5E" rx="2" />
        <polygon points="-10,10 10,10 0,30" fill="#FDE047" />
        <polygon points="-3,24 3,24 0,30" fill="#1E293B" />
      </g>
      <path d="M 120,100 Q 140,120 170,90 T 210,100" fill="none" stroke="#FDE047" strokeWidth="3" strokeDasharray="4,4" />
      <text x="60" y="110" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#FDE047">Tap to Write!</text>
    </svg>
  );
});

// ─── LABELS (100% ENGLISH) ──────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Writing Workshop",
    
    // T1: Hook vs Thesis (DROP GAME)
    t1_title: "The Introduction",
    t1_text: "An introduction paragraph looks like an upside-down triangle. It starts broad with a HOOK to grab the reader's attention (a question, quote, or shocking fact). It ends narrow with your THESIS, the main argument of your essay.",
    t1_b1: "Hook: First sentence, grabs attention.",
    t1_b2: "Thesis: Last sentence of intro, states your claim.",
    t1_b3: "Don't mix them up!",
    t1_inst: "Sort the sentences! Are they meant to be a Hook or a Thesis statement?",
    t1_bucket_hok: "The Hook",
    t1_bucket_the: "The Thesis",
    t1_item_h1: "Did you know ocean levels are rising?", t1_item_h2: "Imagine waking up on Mars.",
    t1_item_t1: "We must reduce carbon emissions.", t1_item_t2: "Space travel is vital for humanity.",
    t1_q: "Where does the Thesis Statement usually go?",
    t1_q_a: "At the end of the introduction paragraph.", t1_q_b: "As the very first sentence.", t1_q_c: "In the conclusion only.", t1_q_d: "In the middle of a body paragraph.",

    // T2: C-E-R (MAGNET MATCH)
    t2_title: "Body Paragraphs (C.E.R.)",
    t2_text: "A strong body paragraph follows the C.E.R. structure. CLAIM (the point you are making), EVIDENCE (the quote or fact proving it), and REASONING (your explanation of WHY the evidence proves the claim).",
    t2_b1: "Claim = The 'What'.",
    t2_b2: "Evidence = The 'Proof'.",
    t2_b3: "Reasoning = The 'Why'.",
    t2_inst: "Magnet Match: Connect the C.E.R. part to its definition!",
    t2_l1: "Claim", t2_r1: "Your specific point or argument",
    t2_l2: "Evidence", t2_r2: "Data, facts, or quotes",
    t2_l3: "Reasoning", t2_r3: "Explaining how the proof supports your point",
    t2_q: "Which part of C.E.R. is usually a direct quote from a text?",
    t2_q_a: "Evidence", t2_q_b: "Reasoning", t2_q_c: "Claim", t2_q_d: "Hook",

    // T3: Spot the Turn (HIGHLIGHT)
    t3_title: "Radar Scan: The Turn",
    t3_text: "In an argumentative essay, you must acknowledge the counterclaim. We use 'Turn' words (like 'However', 'On the other hand', or 'Admittedly') to shift from our argument to the opposing view, or back to our rebuttal.",
    t3_b1: "Look for the transition word that shows contrast.",
    t3_b2: "Highlight the contrast word.",
    t3_b3: "This marks the 'Turn' in the argument.",
    t3_inst: "Highlight the TRANSITION WORD that signals a contrast (a turn) in this argument!",
    t3_tok0: "Schools", t3_tok1: "need", t3_tok2: "funding;", t3_tok3: "however,", t3_tok4: "taxes", t3_tok5: "are", t3_tok6: "already", t3_tok7: "too", t3_tok8: "high.",
    t3_q: "Why is it important to include a counterclaim?",
    t3_q_a: "It shows you understand the whole issue and can defend against it.", t3_q_b: "To make the essay longer.", t3_q_c: "Because you agree with the other side.", t3_q_d: "To confuse the reader.",

    // T4: Call to Action (SLINGSHOT)
    t4_title: "Call to Action",
    t4_text: "The Conclusion paragraph restates your thesis in a new way and ends with a 'Call to Action' (CTA). A CTA tells the reader exactly what they should DO or THINK now that they have read your essay.",
    t4_b1: "It leaves a lasting impression.",
    t4_b2: "It uses strong, imperative verbs (Donate, Vote, Think).",
    t4_b3: "Shoot the sentence that demands action!",
    t4_inst: "Shoot the asteroid that contains a strong CALL TO ACTION for a conclusion!",
    t4_target_1: "Sign the petition to save the parks today!", // Correct
    t4_target_2: "In conclusion, parks are very important.",
    t4_target_3: "This essay showed why parks matter.",
    t4_q: "What should you NEVER do in a conclusion paragraph?",
    t4_q_a: "Introduce a completely new claim or topic.", t4_q_b: "Restate your thesis.", t4_q_c: "Include a call to action.", t4_q_d: "Summarize your main points.",

    // T5: Fun Catch
    t5_title: "Master Author",
    t5_text: "Your writing skills are razor-sharp! You know how to structure an essay from the opening hook to the final call to action.",
    t5_b1: "Hook them in.",
    t5_b2: "Prove it with C.E.R.",
    t5_b3: "Catch 6 Pencils!",
    t5_inst: "Tap the 6 golden pencils (✍️) to publish your essay!",
    t5_q: "What does C.E.R. stand for in writing?",
    t5_q_a: "Claim, Evidence, Reasoning", t5_q_b: "Count, Edit, Read", t5_q_c: "Create, Evaluate, Revise", t5_q_d: "Cats Eat Rats",
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
        { id: "hok", label: "t1_bucket_hok" },
        { id: "the", label: "t1_bucket_the" },
      ],
      items: [
        { text: "t1_item_h1", bucketId: "hok" },
        { text: "t1_item_t1", bucketId: "the" },
        { text: "t1_item_h2", bucketId: "hok" },
        { text: "t1_item_t2", bucketId: "the" },
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
      tokens: ["t3_tok0", "t3_tok1", "t3_tok2", "t3_tok3", "t3_tok4", "t3_tok5", "t3_tok6", "t3_tok7", "t3_tok8"],
      correctIndices: [3], // "however,"
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
      tapCount: { emoji: "✍️", count: 6 }, 
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
  icon: "✍️",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const WritingExplorer = memo(function WritingExplorer({
  color = "#B45309", // Amber-700 (Fa ceruza / asztal szín)
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
      grade={8} 
      explorerId="english_k8_writing_workshop" 
      color={color} 
      lang="en" 
      onDone={onDone} 
    />
  );
});

export default WritingExplorer;
