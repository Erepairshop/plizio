"use client";
// ModalK4Explorer.tsx — AstroEnglish Grade 4: i2 Modal Moon
// Topics: 1) Can, Could, Might 2) Should & Must 3) Present Progressive 4) Past Progressive 5) Moon Crater Catch

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric) ───────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#1E293B" rx="20" />
      {/* Possibility Clouds */}
      <g transform="translate(60, 70)">
        <circle cx="0" cy="0" r="25" fill="#3B82F6" opacity="0.6" />
        <text x="0" y="5" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#EFF6FF">CAN</text>
      </g>
      <g transform="translate(120, 70)">
        <circle cx="0" cy="0" r="30" fill="#8B5CF6" opacity="0.4" />
        <text x="0" y="5" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#F5F3FF">COULD</text>
      </g>
      <g transform="translate(185, 70)">
        <circle cx="0" cy="0" r="35" fill="#D946EF" opacity="0.2" />
        <text x="0" y="5" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#FDF4FF">MIGHT</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#0F172A" rx="20" />
      {/* Requirement Sign (Must) */}
      <g transform="translate(120, 70)">
        <rect x="-50" y="-40" width="100" height="80" fill="#EF4444" rx="5" />
        <rect x="-42" y="-32" width="84" height="64" fill="none" stroke="white" strokeWidth="2" />
        <text x="0" y="-5" textAnchor="middle" fontSize="14" fontWeight="black" fill="white">MUST</text>
        <text x="0" y="15" textAnchor="middle" fontSize="8" fontWeight="bold" fill="white">WEAR HELMET</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#1E1B4B" rx="20" />
      {/* Continuous Action: is + running */}
      <g transform="translate(120, 70)">
        <circle cx="-40" cy="0" r="15" fill="#10B981" />
        <path d="M -20,0 L 20,0" stroke="#34D399" strokeWidth="4" markerEnd="url(#arrow)" />
        <text x="50" y="5" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#6EE7B7">is running</text>
        <path d="M -60,-10 Q -50,-20 -40,-10 T -20,-10" fill="none" stroke="#FBBF24" strokeWidth="2" opacity="0.6" />
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#292524" rx="20" />
      {/* Moon Craters */}
      <ellipse cx="60" cy="100" rx="30" ry="10" fill="#44403C" />
      <ellipse cx="180" cy="60" rx="40" ry="15" fill="#44403C" />
      <ellipse cx="120" cy="110" rx="20" ry="8" fill="#44403C" />
      <text x="120" y="30" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#A8A29E">Tap the floating rocks!</text>
    </svg>
  );
});

// ─── LABELS (100% ENGLISH) ──────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Modal Moon",
    
    // T1: Can, Could, Might
    t1_title: "Ability and Possibility",
    t1_text: "Modals are helper verbs. 'Can' shows what you are able to do now. 'Could' and 'Might' show things that are possible but not certain.",
    t1_b1: "I can jump. (Ability)",
    t1_b2: "It might rain. (Possibility)",
    t1_b3: "I could fly if I had wings.",
    t1_inst: "Match the modal verb to its meaning!",
    t1_l1: "Can", t1_r1: "I am able to",
    t1_l2: "Might", t1_r2: "Maybe it happens",
    t1_l3: "Could", t1_r3: "Possible in the past",
    t1_q: "Which word shows a 100% ability right now?",
    t1_q_a: "can", t1_q_b: "might", t1_q_c: "could", t1_q_d: "should",

    // T2: Should & Must
    t2_title: "Rules and Advice",
    t2_text: "Some modals tell us what is a good idea (Should) and what is a strict rule (Must).",
    t2_b1: "You 'must' wear a suit in space. (Rule!)",
    t2_b2: "You 'should' drink water. (Advice)",
    t2_b3: "Must is much stronger than should.",
    t2_inst: "Is the sentence a Strict Rule (Must) or Good Advice (Should)?",
    t2_bucket_must: "Strict Rule (Must)",
    t2_bucket_should: "Good Advice (Should)",
    t2_item_m1: "Fasten seatbelt", t2_item_m2: "Oxygen on",
    t2_item_s1: "Eat vegetables", t2_item_s2: "Read books",
    t2_q: "Which word do you use for a life-saving space rule?",
    t2_q_a: "must", t2_q_b: "should", t2_q_c: "might", t2_q_d: "can",

    // T3: Present Progressive
    t3_title: "Happening Now!",
    t3_text: "The Present Progressive describes actions happening right now. We use 'am/is/are' + a verb ending in '-ing'.",
    t3_b1: "I am flying.",
    t3_b2: "The robot is beeping.",
    t3_b3: "They are exploring.",
    t3_inst: "Highlight the Present Progressive verb in the sentence!",
    t3_tok0: "The", t3_tok1: "rover", t3_tok2: "is", t3_tok3: "collecting", t3_tok4: "rocks", t3_tok5: "on", t3_tok6: "the", t3_tok7: "moon.",
    t3_q: "How do you say 'eat' in the present progressive?",
    t3_q_a: "is eating", t3_q_b: "eated", t3_q_c: "eats", t3_q_d: "will eat",

    // T4: Past Progressive
    t4_title: "Happening Back Then",
    t4_text: "The Past Progressive describes an action that was going on at a specific time in the past. Use 'was/were' + '-ing'.",
    t4_b1: "I was sleeping at 10 PM.",
    t4_b2: "We were working all day.",
    t4_b3: "It shows a long action in the past.",
    t4_inst: "Fill in the gap to complete the past progressive sentence!",
    t4_sentence: "Yesterday at noon, the crew ___ lunch.",
    t4_c1: "was eating", t4_c2: "is eating", t4_c3: "were eat",
    t4_q: "Which sentence is in the Past Progressive?",
    t4_q_a: "I was walking.", t4_q_b: "I am walking.", t4_q_c: "I walked.", t4_q_d: "I will walk.",

    // T5: Fun Catch
    t5_title: "Crater Catch",
    t5_text: "You mastered the Modal Moon! Now, help us clear the floating debris near the craters.",
    t5_b1: "Rocks are floating.",
    t5_b2: "The astronaut is catching them.",
    t5_b3: "Catch 6 moon rocks!",
    t5_inst: "Tap the 6 floating moon rocks (🌑) quickly!",
    t5_q: "What does 'should' mean?",
    t5_q_a: "It's a good idea", b: "It's a strict rule", c: "It's impossible", d: "It happened yesterday",
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
        { left: "t1_l1", right: "t1_r1" }, // Can - Able
        { left: "t1_l2", right: "t1_r2" }, // Might - Maybe
        { left: "t1_l3", right: "t1_r3" }, // Could - Past possible
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
      type: "drag-to-bucket",
      buckets: [
        { id: "must", label: "t2_bucket_must" },
        { id: "should", label: "t2_bucket_should" },
      ],
      items: [
        { text: "t2_item_m1", bucketId: "must" },
        { text: "t2_item_s1", bucketId: "should" },
        { text: "t2_item_m2", bucketId: "must" },
        { text: "t2_item_s2", bucketId: "should" },
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
      type: "highlight-text",
      tokens: ["t3_tok0", "t3_tok1", "t3_tok2", "t3_tok3", "t3_tok4", "t3_tok5", "t3_tok6", "t3_tok7"],
      correctIndices: [2, 3], // "is collecting"
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
    svg: () => <Topic3Svg />,
    bulletKeys: ["t4_b1", "t4_b2", "t4_b3"],
    interactive: {
      type: "gap-fill",
      sentence: "t4_sentence",
      choices: ["t4_c1", "t4_c2", "t4_c3"],
      correctIndex: 0, // "was eating"
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
      tapCount: { emoji: "🌑", count: 6 }, // Moon rocks
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
  icon: "🌙",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const ModalK4Explorer = memo(function ModalK4Explorer({
  color = "#64748B", // Slate-500 for the dusty moon
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
      explorerId="english_k4_modal_moon" 
      color={color} 
      lang="en" // Forcing English ELA
      onDone={onDone} 
    />
  );
});

export default ModalK4Explorer;
