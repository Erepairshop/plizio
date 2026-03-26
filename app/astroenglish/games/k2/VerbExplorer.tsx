"use client";
// VerbExplorer.tsx — AstroEnglish Grade 2: i2 Verb Vortex
// Topics: 1) What is a Verb? 2) Regular Past Tense (-ed) 3) Irregular Past Tense 4) Spot the Verb 5) Comet Catch

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric) ───────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#0F172A" rx="20" />
      {/* Noun vs Verb (Action) */}
      <g transform="translate(60, 70)">
        <rect x="-15" y="-20" width="30" height="40" fill="#64748B" rx="5" />
        <polygon points="-15,20 15,20 0,35" fill="#475569" />
        <text x="0" y="55" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#94A3B8">rocket (Noun)</text>
      </g>
      <text x="120" y="75" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#3B82F6">VS</text>
      <g transform="translate(180, 70)">
        <rect x="-15" y="-30" width="30" height="40" fill="#EAB308" rx="5" />
        <polygon points="-15,10 15,10 0,25" fill="#CA8A04" />
        <polygon points="-10,25 10,25 0,45" fill="#EF4444" /> {/* Fire! */}
        <text x="0" y="55" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#FDE047">fly (Verb!)</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#1E1B4B" rx="20" />
      {/* Regular Past Tense: jump -> jumped */}
      <g transform="translate(120, 60)">
        <text x="-60" y="0" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#A78BFA">jump</text>
        <text x="0" y="0" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#F472B6">+</text>
        <rect x="20" y="-20" width="35" height="30" fill="#EC4899" rx="5" />
        <text x="37" y="2" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#FDF2F8">ed</text>
        <path d="M -40,25 Q 0,45 40,25" fill="none" stroke="#8B5CF6" strokeWidth="3" markerEnd="url(#arrow)" />
        <text x="0" y="55" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#DDD6FE">jumped</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#2E1065" rx="20" />
      {/* Irregular Vortex: GO -> WENT */}
      <g transform="translate(120, 70)">
        {/* Vortex rings */}
        <ellipse cx="0" cy="0" rx="60" ry="20" fill="none" stroke="#8B5CF6" strokeWidth="2" opacity="0.4" />
        <ellipse cx="0" cy="0" rx="40" ry="12" fill="none" stroke="#A855F7" strokeWidth="3" opacity="0.6" />
        <ellipse cx="0" cy="0" rx="20" ry="6" fill="none" stroke="#C084FC" strokeWidth="4" opacity="0.8" />
        
        <text x="-70" y="5" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#F87171">GO</text>
        <path d="M -45,0 L -25,0" fill="none" stroke="#FCA5A5" strokeWidth="3" markerEnd="url(#arrow)" />
        
        <path d="M 25,0 L 45,0" fill="none" stroke="#6EE7B7" strokeWidth="3" markerEnd="url(#arrow)" />
        <text x="75" y="5" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#10B981">WENT</text>
      </g>
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#022C22" rx="20" />
      {/* Spot the Verb highlight */}
      <g transform="translate(120, 70)">
        <rect x="-90" y="-20" width="180" height="40" fill="#064E3B" rx="10" />
        <text x="0" y="5" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#D1FAE5">
          <tspan fill="#A7F3D0">The alien </tspan>
          <tspan fill="#FBBF24" fontWeight="900" textDecoration="underline">ran</tspan>
          <tspan fill="#A7F3D0"> fast.</tspan>
        </text>
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#450A0A" rx="20" />
      {/* Comet background for Tap Count */}
      <circle cx="200" cy="40" r="30" fill="#7F1D1D" opacity="0.5" />
      <circle cx="50" cy="100" r="40" fill="#991B1B" opacity="0.4" />
      <path d="M 0,0 L 240,140" fill="none" stroke="#DC2626" strokeWidth="2" opacity="0.2" strokeDasharray="5,5" />
      <text x="120" y="125" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#FCA5A5">Tap the comets!</text>
    </svg>
  );
});

// ─── LABELS (100% ENGLISH) ──────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Verb Vortex",
    
    // T1: What is a Verb?
    t1_title: "Action Words (Verbs)",
    t1_text: "A verb is an action word! It tells us what someone or something is doing.",
    t1_b1: "Nouns are things (rocket, star).",
    t1_b2: "Verbs are actions (fly, spin, zoom).",
    t1_b3: "If you can DO it, it's probably a verb!",
    t1_inst: "Sort the words! Is it a Noun (Thing) or a Verb (Action)?",
    t1_bucket_noun: "Noun (Thing)",
    t1_bucket_verb: "Verb (Action)",
    t1_item_n1: "planet", t1_item_n2: "helmet",
    t1_item_v1: "jump", t1_item_v2: "orbit",
    t1_q: "Which of these words is a VERB?",
    t1_q_a: "run", t1_q_b: "moon", t1_q_c: "astronaut", t1_q_d: "ship",

    // T2: Regular Past Tense (-ed)
    t2_title: "The Past (-ed)",
    t2_text: "If an action already happened in the past, we usually add '-ed' to the end of the verb.",
    t2_b1: "Today I jump. Yesterday I jumpED.",
    t2_b2: "Today we land. Yesterday we landED.",
    t2_b3: "Match the present verb to its past form!",
    t2_inst: "Match the 'Today' action with the 'Yesterday' action!",
    t2_l1: "Look", t2_r1: "Looked",
    t2_l2: "Blast", t2_r2: "Blasted",
    t2_l3: "Zoom", t2_r3: "Zoomed",
    t2_q: "What is the past tense of 'play'?",
    t2_q_a: "played", t2_q_b: "play", t2_q_c: "playing", t2_q_d: "plaied",

    // T3: Irregular Past Tense
    t3_title: "The Vortex: Irregular Verbs!",
    t3_text: "Some verbs get sucked into the vortex and change completely in the past tense! They don't use '-ed'.",
    t3_b1: "Go -> Went (NOT 'goed').",
    t3_b2: "See -> Saw (NOT 'seeed').",
    t3_b3: "Run -> Ran (NOT 'runned').",
    t3_inst: "Fill in the gap with the correct irregular past tense verb!",
    t3_sentence: "Yesterday, the brave pilot ___ to the moon.",
    t3_c1: "went", t3_c2: "goed", t3_c3: "go",
    t3_q: "What is the correct past tense of 'see'?",
    t3_q_a: "saw", t3_q_b: "seed", t3_q_c: "see", t3_q_d: "seen",

    // T4: Spot the Verb
    t4_title: "Spot the Verb",
    t4_text: "Let's be Action Detectives! Find the word in the sentence that shows the action.",
    t4_b1: "Ask yourself: What did they DO?",
    t4_b2: "Sometimes the verb is in the past tense.",
    t4_b3: "Highlight the action word!",
    t4_inst: "Find and highlight the verb (action word) in the sentence!",
    t4_tok0: "The", t4_tok1: "green", t4_tok2: "alien", t4_tok3: "ran", t4_tok4: "quickly.",
    t4_q: "In the sentence 'The star shines brightly', what is the verb?",
    t4_q_a: "shines", t4_q_b: "star", t4_q_c: "The", t4_q_d: "brightly",

    // T5: Fun Catch
    t5_title: "Comet Catch",
    t5_text: "You survived the Verb Vortex! Let's catch some fast-moving comets.",
    t5_b1: "The verb 'catch' means to grab something.",
    t5_b2: "The past tense of catch is 'caught'!",
    t5_b3: "Tap quickly!",
    t5_inst: "Tap the 6 comets (☄️) speeding through space!",
    t5_q: "Which word is an irregular past tense verb?",
    t5_q_a: "ran", t5_q_b: "walked", t5_q_c: "jumped", t5_q_d: "looked",
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
        { id: "noun", label: "t1_bucket_noun" },
        { id: "verb", label: "t1_bucket_verb" },
      ],
      items: [
        { text: "t1_item_n1", bucketId: "noun" },
        { text: "t1_item_v1", bucketId: "verb" },
        { text: "t1_item_n2", bucketId: "noun" },
        { text: "t1_item_v2", bucketId: "verb" },
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
        { left: "t2_l1", right: "t2_r1" }, // Look - Looked
        { left: "t2_l2", right: "t2_r2" }, // Blast - Blasted
        { left: "t2_l3", right: "t2_r3" }, // Zoom - Zoomed
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
      correctIndex: 0, // "went"
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
      type: "highlight-text",
      tokens: ["t4_tok0", "t4_tok1", "t4_tok2", "t4_tok3", "t4_tok4"],
      correctIndices: [3], // "ran"
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
      tapCount: { emoji: "☄️", count: 6 }, // Comets
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
  icon: "⚡",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const VerbExplorer = memo(function VerbExplorer({
  color = "#EAB308", // Yellow-500 for the lightning/energy vortex
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
      grade={2} 
      explorerId="english_k2_verb_vortex" 
      color={color} 
      lang="en" // Forcing English ELA
      onDone={onDone} 
    />
  );
});

export default VerbExplorer;
