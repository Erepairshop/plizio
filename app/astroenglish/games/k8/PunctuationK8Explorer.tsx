"use client";
// PunctuationK8Explorer.tsx — AstroEnglish Grade 8: i8 Punctuation Pinnacle
// Topics: 1) Ellipsis vs Em Dash 2) Punctuation Rules 3) Complex Commas 4) Em Dash Target 5) Pen Catch

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric) ───────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#0F172A" rx="20" />
      {/* Ellipsis vs Em Dash */}
      <g transform="translate(120, 70)">
        <rect x="-70" y="-30" width="140" height="25" fill="#1E293B" rx="4" />
        <circle cx="-20" cy="-17" r="3" fill="#38BDF8" />
        <circle cx="0" cy="-17" r="3" fill="#38BDF8" />
        <circle cx="20" cy="-17" r="3" fill="#38BDF8" />
        <text x="60" y="-14" textAnchor="middle" fontSize="10" fill="#BAE6FD">Ellipsis</text>
        
        <rect x="-70" y="10" width="140" height="25" fill="#1E293B" rx="4" />
        <line x1="-30" y1="22" x2="30" y2="22" stroke="#F43F5E" strokeWidth="4" />
        <text x="60" y="25" textAnchor="middle" fontSize="10" fill="#FDA4AF">Em Dash</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#172554" rx="20" />
      {/* Complex Commas */}
      <g transform="translate(120, 70)">
        <path d="M -60,0 L 60,0" stroke="#3B82F6" strokeWidth="2" strokeDasharray="4,4" />
        <path d="M -25,0 Q -20,15 -15,5" fill="none" stroke="#FDE047" strokeWidth="4" strokeLinecap="round" />
        <path d="M 25,0 Q 30,15 35,5" fill="none" stroke="#FDE047" strokeWidth="4" strokeLinecap="round" />
        <rect x="-20" y="-20" width="40" height="15" fill="#1E3A8A" rx="2" />
        <text x="0" y="-10" textAnchor="middle" fontSize="10" fill="#93C5FD">Appositive</text>
        <text x="0" y="25" textAnchor="middle" fontSize="10" fill="#FEF08A">Commas isolate extra info</text>
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#312E81" rx="20" />
      {/* Fountain Pen */}
      <g transform="translate(120, 70) rotate(-45)">
        <path d="M -10,-20 L 10,-20 L 10,20 L 0,40 L -10,20 Z" fill="#9CA3AF" />
        <path d="M -8,-20 L 8,-20 L 8,15 L 0,35 L -8,15 Z" fill="#E5E7EB" />
        <line x1="0" y1="10" x2="0" y2="35" stroke="#1E1B4B" strokeWidth="2" />
        <circle cx="0" cy="10" r="2" fill="#1E1B4B" />
        <rect x="-10" y="-40" width="20" height="20" fill="#FBBF24" />
      </g>
      <text x="60" y="110" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#A5B4FC">Tap the Pens!</text>
    </svg>
  );
});

// ─── LABELS (100% ENGLISH) ──────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Punctuation Pinnacle",
    
    // T1: Ellipsis vs Em Dash (DROP GAME)
    t1_title: "Ellipsis vs. Em Dash",
    t1_text: "An ELLIPSIS (. . .) indicates an omission (missing words) or a trailing thought. An EM DASH (—) indicates a sudden interruption, a dramatic pause, or strong emphasis. Don't confuse the long Em Dash with a short hyphen (-).",
    t1_b1: "Ellipsis (. . .): Trailing thought or omission.",
    t1_b2: "Em Dash (—): Emphasis, interruption, or dramatic pause.",
    t1_b3: "Formal ellipsis has spaces between the dots!",
    t1_inst: "Sort the sentences into the Ellipsis or Em Dash buckets!",
    t1_bucket_ell: "Ellipsis (. . .)",
    t1_bucket_emd: "Em Dash (—)",
    t1_item_e1: "I'm not sure if . . . never mind.", t1_item_e2: "The quote read: 'It was . . . the best of times.'",
    t1_item_d1: "She had one goal—to win.", t1_item_d2: "Look out—it's falling!",
    t1_q: "An ellipsis (. . .) is primarily used to indicate:",
    t1_q_a: "An omission or a trailing thought.", t1_q_b: "A strong emphasis.", t1_q_c: "The end of a declarative sentence.", t1_q_d: "A sudden interruption.",

    // T2: Punctuation Rules (MAGNET MATCH)
    t2_title: "The Golden Rules",
    t2_text: "Punctuation marks are like traffic signals for reading. You must know when to pause, when to stop, and when to highlight extra information.",
    t2_b1: "Ellipsis = Omission.",
    t2_b2: "Em Dash = Dramatic pause/Emphasis.",
    t2_b3: "Commas = Set off appositives (extra info).",
    t2_inst: "Magnet Match: Connect the punctuation mark to its correct rule!",
    t2_l1: "Ellipsis (. . .)", t2_r1: "Indicates a trailing thought or omitted words",
    t2_l2: "Em Dash (—)", t2_r2: "Shows emphasis or a dramatic interruption",
    t2_l3: "Commas (, ,)", t2_r3: "Isolate appositives and non-essential phrases",
    t2_q: "Which punctuation mark is used to create a sudden, dramatic pause for emphasis?",
    t2_q_a: "Em Dash (—)", t2_q_b: "Hyphen (-)", t2_q_c: "Comma (,)", t2_q_d: "Semicolon (;)",

    // T3: Complex Commas (HIGHLIGHT)
    t3_title: "Radar Scan: Complex Commas",
    t3_text: "In complex sentences, commas are used to set off 'Appositives' (phrases that rename a noun). If you take the appositive out, the sentence still makes sense. It needs a comma before AND after it if it's in the middle of a sentence.",
    t3_b1: "Find the extra information (the appositive).",
    t3_b2: "Look for the commas surrounding it.",
    t3_b3: "Highlight the appositive AND its commas!",
    t3_inst: "Highlight the APPOSITIVE phrase (including the commas) in this sentence!",
    t3_tok0: "My", t3_tok1: "teacher,", t3_tok2: "Mr.", t3_tok3: "Smith,", t3_tok4: "is", t3_tok5: "very", t3_tok6: "kind.",
    t3_q: "Why are commas used around 'Mr. Smith' in the sentence: 'My teacher, Mr. Smith, is very kind'?",
    t3_q_a: "Because it is an appositive providing extra information.", t3_q_b: "Because it is a compound sentence.", t3_q_c: "Because 'Mr. Smith' is the verb.", t3_q_d: "Because it is an ellipsis.",

    // T4: Em Dash Target (SLINGSHOT)
    t4_title: "Dash Precision",
    t4_text: "An Em Dash (—) is long. A hyphen (-) is short and only used to connect words (like 'well-known'). Don't use a hyphen when you want a dramatic pause!",
    t4_b1: "Find the sentence using the LONG dash.",
    t4_b2: "It should create a dramatic reveal or pause.",
    t4_b3: "Shoot the correct Em Dash!",
    t4_inst: "Shoot the asteroid that CORRECTLY uses an Em Dash!",
    t4_target_1: "She had one goal—to win.", // Correct
    t4_target_2: "She had one goal-to win.", // Uses hyphen
    t4_target_3: "She had one goal... to win.", // Uses ellipsis
    t4_q: "Which of the following CORRECTLY uses an Em Dash?",
    t4_q_a: "He opened the box and saw it—the missing diamond.", t4_q_b: "He opened the box and saw it-the missing diamond.", t4_q_c: "He opened the box and saw it...the missing diamond.", t4_q_d: "He opened the box and saw it, the missing diamond.",

    // T5: Fun Catch
    t5_title: "Punctuation Pinnacle",
    t5_text: "You have reached the peak! Your punctuation is now flawless. You know how to use ellipses for mystery, em dashes for drama, and commas for clarity.",
    t5_b1: "Ellipsis = ...",
    t5_b2: "Em Dash = —",
    t5_b3: "Catch 6 Pens!",
    t5_inst: "Tap the 6 fountain pens (✒️) to sign your name at the summit!",
    t5_q: "Which mark is best for showing that a character's voice faded away into silence?",
    t5_q_a: "An ellipsis (. . .)", t5_q_b: "An em dash (—)", t5_q_c: "A period (.)", t5_q_d: "An exclamation mark (!)",
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
        { id: "ell", label: "t1_bucket_ell" },
        { id: "emd", label: "t1_bucket_emd" },
      ],
      items: [
        { text: "t1_item_e1", bucketId: "ell" },
        { text: "t1_item_d1", bucketId: "emd" },
        { text: "t1_item_e2", bucketId: "ell" },
        { text: "t1_item_d2", bucketId: "emd" },
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
      tokens: ["t3_tok0", "t3_tok1", "t3_tok2", "t3_tok3", "t3_tok4", "t3_tok5", "t3_tok6"],
      correctIndices: [1, 2, 3], // "teacher," "Mr." "Smith,"
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
      tapCount: { emoji: "✒️", count: 6 }, 
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
  icon: "✒️",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const PunctuationK8Explorer = memo(function PunctuationK8Explorer({
  color = "#334155", // Slate-700 (Komoly, írásos szürke)
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
      explorerId="english_k8_punctuation_pinnacle" 
      color={color} 
      lang="en" 
      onDone={onDone} 
    />
  );
});

export default PunctuationK8Explorer;
