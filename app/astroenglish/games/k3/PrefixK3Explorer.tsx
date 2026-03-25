"use client";
// PrefixK3Explorer.tsx — AstroEnglish Grade 3: i6 Prefix Pulsar
// Topics: 1) New Prefixes (pre-, mis-) 2) Prefix Sorting (un-, re-) 3) New Suffixes (-er, -tion) 4) Suffix Choice (-ful, -less) 5) Pulsar Catch

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric) ───────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#0F172A" rx="20" />
      {/* Prefix + Root: mis + spell */}
      <g transform="translate(60, 60)">
        <rect x="-30" y="-15" width="60" height="30" fill="#E11D48" rx="5" />
        <text x="0" y="4" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#FFE4E6">mis</text>
        <text x="0" y="30" textAnchor="middle" fontSize="10" fill="#FDA4AF">Wrong/Badly</text>
      </g>
      <text x="110" y="65" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#94A3B8">+</text>
      <g transform="translate(160, 60)">
        <rect x="-35" y="-15" width="70" height="30" fill="#3B82F6" rx="5" />
        <text x="0" y="4" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#EFF6FF">spell</text>
        <text x="0" y="30" textAnchor="middle" fontSize="10" fill="#93C5FD">Root Word</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#1E1B4B" rx="20" />
      {/* Review: un- vs re- */}
      <g transform="translate(60, 70)">
        <circle cx="0" cy="0" r="20" fill="none" stroke="#F43F5E" strokeWidth="4" />
        <line x1="-14" y1="-14" x2="14" y2="14" stroke="#F43F5E" strokeWidth="4" />
        <text x="0" y="-30" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#FDA4AF">un- (NOT)</text>
      </g>
      <g transform="translate(180, 70)">
        <path d="M -15,0 A 15,15 0 1,1 15,0 A 15,15 0 0,1 -5,15" fill="none" stroke="#10B981" strokeWidth="4" markerEnd="url(#arrow)" />
        <text x="0" y="-30" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#6EE7B7">re- (AGAIN)</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#4C1D95" rx="20" />
      {/* Root + Suffix: act + tion */}
      <g transform="translate(70, 60)">
        <rect x="-30" y="-15" width="60" height="30" fill="#3B82F6" rx="5" />
        <text x="0" y="4" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#EFF6FF">act</text>
        <text x="0" y="30" textAnchor="middle" fontSize="10" fill="#93C5FD">Root Word</text>
      </g>
      <text x="120" y="65" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#A78BFA">+</text>
      <g transform="translate(170, 60)">
        <rect x="-30" y="-15" width="60" height="30" fill="#8B5CF6" rx="5" />
        <text x="0" y="4" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#F3E8FF">tion</text>
        <text x="0" y="30" textAnchor="middle" fontSize="10" fill="#C4B5FD">Action/State</text>
      </g>
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#064E3B" rx="20" />
      {/* -ful vs -less */}
      <g transform="translate(60, 70)">
        <path d="M -15,-20 L -10,20 L 10,20 L 15,-20 Z" fill="none" stroke="#6EE7B7" strokeWidth="3" />
        <path d="M -12,-5 L -10,20 L 10,20 L 12,-5 Z" fill="#34D399" />
        <text x="0" y="40" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#A7F3D0">-ful</text>
      </g>
      <g transform="translate(180, 70)">
        <path d="M -15,-20 L -10,20 L 10,20 L 15,-20 Z" fill="none" stroke="#6EE7B7" strokeWidth="3" />
        <text x="0" y="40" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#A7F3D0">-less</text>
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#312E81" rx="20" />
      {/* Pulsar Waves */}
      <circle cx="120" cy="70" r="10" fill="#F472B6" />
      <circle cx="120" cy="70" r="25" fill="none" stroke="#E879F9" strokeWidth="3" strokeDasharray="4,4" />
      <circle cx="120" cy="70" r="45" fill="none" stroke="#C084FC" strokeWidth="2" strokeDasharray="8,8" opacity="0.6" />
      <text x="120" y="130" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#E0E7FF">Tap the pulsars!</text>
    </svg>
  );
});

// ─── LABELS (100% ENGLISH) ──────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Prefix Pulsar",
    
    // T1: New Prefixes (pre-, mis-)
    t1_title: "Advanced Prefixes",
    t1_text: "Let's learn new prefixes! 'pre-' means BEFORE (like a preview). 'mis-' means WRONG or BADLY (like a mistake).",
    t1_b1: "pre + heat = preheat (heat before).",
    t1_b2: "mis + spell = misspell (spell wrongly).",
    t1_b3: "Match the prefix to what it means!",
    t1_inst: "Match the prefix to its secret meaning!",
    t1_l1: "pre- (preview)", t1_r1: "before",
    t1_l2: "mis- (misbehave)", t1_r2: "wrongly / badly",
    t1_l3: "un- (unsafe)", t1_r3: "not",
    t1_q: "If 'read' means to look at words, what does 'misread' mean?",
    t1_q_a: "To read wrongly", t1_q_b: "To read before", t1_q_c: "To read again", t1_q_d: "Not reading",

    // T2: Sorting un- and re-
    t2_title: "Sorting the Classics",
    t2_text: "Do you remember 'un-' (not) and 're-' (again)? Let's use them with harder words!",
    t2_b1: "unusual = not usual.",
    t2_b2: "rewrite = write again.",
    t2_b3: "Sort the words into their correct buckets.",
    t2_inst: "Is the word using 'un-' (NOT) or 're-' (AGAIN)?",
    t2_bucket_un: "un- (Not)",
    t2_bucket_re: "re- (Again)",
    t2_item_u1: "unusual", t2_item_u2: "unlucky",
    t2_item_r1: "rebuild", t2_item_r2: "return",
    t2_q: "Which word means 'to do something again'?",
    t2_q_a: "redo", t2_q_b: "undo", t2_q_c: "misdo", t2_q_d: "predo",

    // T3: New Suffixes (-er, -tion)
    t3_title: "Action Suffixes",
    t3_text: "Let's look at the END of the word! '-er' can mean a person who does something. '-tion' turns an action into a noun.",
    t3_b1: "build + er = builder (a person who builds).",
    t3_b2: "act + tion = action (the state of acting).",
    t3_b3: "Highlight the suffix in the sentence!",
    t3_inst: "Highlight the word that ends with the '-tion' suffix!",
    t3_tok0: "The", t3_tok1: "rocket", t3_tok2: "launch", t3_tok3: "was", t3_tok4: "a", t3_tok5: "huge", t3_tok6: "celebration.",
    t3_q: "What does a 'teacher' do?",
    t3_q_a: "A person who teaches.", t3_q_b: "A person who learns.", t3_q_c: "Teaching again.", t3_q_d: "Teaching before.",

    // T4: -ful and -less
    t4_title: "Full or Empty?",
    t4_text: "Time for a quick check on '-ful' (full of) and '-less' (without). Be careful not to make a careless mistake!",
    t4_b1: "Careful = full of care.",
    t4_b2: "Careless = without care.",
    t4_b3: "Pick the word that makes sense in the sentence.",
    t4_inst: "Fill in the gap! Is the astronaut FULL of fear or WITHOUT fear?",
    t4_sentence: "The brave astronaut was completely ___ as she stepped onto the comet.",
    t4_c1: "fearless", t4_c2: "fearful", t4_c3: "fearing",
    t4_q: "What does 'powerful' mean?",
    t4_q_a: "Full of power", t4_q_b: "Without power", t4_q_c: "A person who powers", t4_q_d: "To power again",

    // T5: Fun Catch
    t5_title: "Pulsar Catch",
    t5_text: "You mastered the Prefix Pulsar! Now catch the glowing energy pulses before we fly to the next system.",
    t5_b1: "Watch the glowing rings.",
    t5_b2: "Tap them quickly.",
    t5_b3: "Catch 6 pulsars!",
    t5_inst: "Tap the 6 glowing pulsars (💫) in space!",
    t5_q: "Which suffix means 'full of'?",
    t5_q_a: "-ful", t5_q_b: "-less", t5_q_c: "-er", t5_q_d: "-tion",
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
        { left: "t1_l1", right: "t1_r1" }, // pre -> before
        { left: "t1_l2", right: "t1_r2" }, // mis -> wrongly
        { left: "t1_l3", right: "t1_r3" }, // un -> not
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
        { id: "un", label: "t2_bucket_un" },
        { id: "re", label: "t2_bucket_re" },
      ],
      items: [
        { text: "t2_item_u1", bucketId: "un" },
        { text: "t2_item_r1", bucketId: "re" },
        { text: "t2_item_u2", bucketId: "un" },
        { text: "t2_item_r2", bucketId: "re" },
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
      tokens: ["t3_tok0", "t3_tok1", "t3_tok2", "t3_tok3", "t3_tok4", "t3_tok5", "t3_tok6"],
      correctIndices: [6], // "celebration."
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
    svg: () => <Topic4Svg />,
    bulletKeys: ["t4_b1", "t4_b2", "t4_b3"],
    interactive: {
      type: "gap-fill",
      sentence: "t4_sentence",
      choices: ["t4_c1", "t4_c2", "t4_c3"],
      correctIndex: 0, // "fearless"
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
      tapCount: { emoji: "💫", count: 6 }, // Pulsars
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
  icon: "🔠",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const PrefixK3Explorer = memo(function PrefixK3Explorer({
  color = "#E11D48", // Rose/Pink for the Pulsar energy
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
      explorerId="english_k3_prefix_pulsar" 
      color={color} 
      lang="en" // Forcing English ELA
      onDone={onDone} 
    />
  );
});

export default PrefixK3Explorer;
