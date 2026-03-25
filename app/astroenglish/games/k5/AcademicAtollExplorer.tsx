"use client";
// AcademicAtollExplorer.tsx — AstroEnglish Grade 5: i9 Academic Atoll
// Topics: 1) Formal vs Informal 2) Precise Vocabulary 3) Scientific Terms 4) Tone 5) Diploma Catch

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric) ───────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F8FAFC" rx="20" />
      {/* Formal (Tie) vs Informal (Cap) */}
      <g transform="translate(60, 70)">
        <circle cx="0" cy="-10" r="20" fill="#1E293B" />
        <path d="M -10,10 L 0,30 L 10,10 Z" fill="#3B82F6" />
        <text x="0" y="45" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1E293B">FORMAL</text>
      </g>
      <text x="120" y="75" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#94A3B8">VS</text>
      <g transform="translate(180, 70)">
        <circle cx="0" cy="-10" r="20" fill="#94A3B8" />
        <rect x="-15" y="-30" width="30" height="5" fill="#F43F5E" />
        <text x="0" y="45" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1E293B">INFORMAL</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#0F172A" rx="20" />
      {/* Precision / Microscope */}
      <g transform="translate(120, 70)">
        <rect x="-20" y="20" width="40" height="5" fill="#94A3B8" />
        <path d="M 0,20 L 0,-10" stroke="#94A3B8" strokeWidth="4" />
        <circle cx="0" cy="-15" r="10" fill="none" stroke="#FDE047" strokeWidth="3" />
        <text x="0" y="45" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#FBBF24">Academic Precision</text>
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#1E293B" rx="20" />
      {/* Graduation Cap and Diploma */}
      <g transform="translate(120, 60)">
        <rect x="-30" y="-5" width="60" height="30" fill="#334155" />
        <polygon points="-40,-5 40,-5 0,-25" fill="#0F172A" />
        <line x1="0" y1="-25" x2="30" y2="0" stroke="#FDE047" strokeWidth="2" />
        <circle cx="30" cy="0" r="3" fill="#FDE047" />
      </g>
      <text x="120" y="125" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#FDE68A">Tap the diplomas!</text>
    </svg>
  );
});

// ─── LABELS (100% ENGLISH) ──────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Academic Atoll",
    
    // T1: Formal vs Informal
    t1_title: "Formal vs. Informal",
    t1_text: "We choose our words based on our audience. We use informal language with friends and formal language for school reports or when speaking to experts.",
    t1_b1: "Informal: 'The show was cool.'",
    t1_b2: "Formal: 'The presentation was remarkable.'",
    t1_b3: "Avoid slang in formal writing.",
    t1_inst: "Is the sentence Formal (Professional) or Informal (Casual)?",
    t1_bucket_form: "Formal",
    t1_bucket_inf: "Informal",
    t1_item_f1: "I request assistance.", t1_item_f2: "The results are valid.",
    t1_item_i1: "Hey, help me out.", t1_item_i2: "It's a total win.",
    t1_q: "Which word is more formal than 'get'?",
    t1_q_a: "obtain", t1_q_b: "grab", t1_q_c: "catch", t1_q_d: "buy",

    // T2: Precise Vocabulary
    t2_title: "Precision in Writing",
    t2_text: "Instead of using general words like 'thing' or 'stuff', academic writers use precise nouns and verbs to explain exactly what they mean.",
    t2_b1: "General: 'The machine part.'",
    t2_b2: "Precise: 'The hydraulic piston.'",
    t2_b3: "Being specific shows you are an expert.",
    t2_inst: "Match the general word to its more precise academic partner!",
    t2_l1: "think", t2_r1: "examine",
    t2_l2: "big", t2_r2: "substantial",
    t2_l3: "show", t2_r3: "demonstrate",
    t2_q: "Which word is the most precise for 'a loud noise'?",
    t2_q_a: "A deafening blast", t2_q_b: "A big sound", t2_q_c: "A thing you hear", t2_q_d: "A noisy part",

    // T3: Scientific Terms (Domain Vocabulary)
    t3_title: "Scientific Vocabulary",
    t3_text: "Domain vocabulary consists of words used in a specific subject. In science, we use words like 'hypothesis', 'variable', and 'observation'.",
    t3_b1: "Hypothesis: An educated guess.",
    t3_b2: "Observation: Watching carefully.",
    t3_b3: "Conclusion: The final answer.",
    t3_inst: "Fill in the gap with the correct academic word!",
    t3_sentence: "After looking at the data, the scientist reached a ___.",
    t3_c1: "conclusion", t3_c2: "story", t3_c3: "guess",
    t3_q: "What is an 'educated guess' called in science?",
    t3_q_a: "Hypothesis", t3_q_b: "Fact", t3_q_c: "Opinion", t3_q_d: "Title",

    // T4: Tone and Audience
    t4_title: "Tone and Audience",
    t4_text: "Tone is the attitude of the writer. An academic tone is serious, respectful, and factual. It avoids using 'I' or 'me' too much.",
    t4_b1: "Serious Tone: 'The evidence suggests...'",
    t4_b2: "Casual Tone: 'I think it looks like...'",
    t4_b3: "Always keep your goal in mind.",
    t4_inst: "Highlight the word that makes this sentence too casual for a report!",
    t4_tok0: "The", t4_tok1: "experiment", t4_tok2: "was", t4_tok3: "totally", t4_tok4: "awesome", t4_tok5: "to", t4_tok6: "watch.",
    t4_q: "Which tone should you use for a research paper?",
    t4_q_a: "Formal and Factual", t4_q_b: "Excited and Silly", t4_q_c: "Angry and Loud", t4_q_d: "Short and Secret",

    // T5: Fun Catch
    t5_title: "Academic Achievement",
    t5_text: "Magnificent! You have mastered the vocabulary of the Academic Atoll. You are ready for the highest levels of writing.",
    t5_b1: "Precision is power.",
    t5_b2: "Tone is everything.",
    t5_b3: "Catch 5 diplomas!",
    t5_inst: "Tap the 5 graduation diplomas (📜) appearing on the atoll!",
    t5_q: "What is the opposite of formal language?",
    t5_q_a: "Informal", t5_q_b: "Professional", t5_q_c: "Precise", t5_q_d: "Scientific",
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
        { id: "form", label: "t1_bucket_form" },
        { id: "inf", label: "t1_bucket_inf" },
      ],
      items: [
        { text: "t1_item_f1", bucketId: "form" },
        { text: "t1_item_i1", bucketId: "inf" },
        { text: "t1_item_f2", bucketId: "form" },
        { text: "t1_item_i2", bucketId: "inf" },
      ],
      instruction: "t1_inst",
      hint1: "t1_b1",
      hint2: "t1_b3",
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
        { left: "t2_l1", right: "t2_r1" },
        { left: "t2_l2", right: "t2_r2" },
        { left: "t2_l3", right: "t2_r3" },
      ],
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
      type: "gap-fill",
      sentence: "t3_sentence",
      choices: ["t3_c1", "t3_c2", "t3_c3"],
      correctIndex: 0, // "conclusion"
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
    svg: () => <Topic1Svg />,
    bulletKeys: ["t4_b1", "t4_b2", "t4_b3"],
    interactive: {
      type: "highlight-text",
      tokens: ["t4_tok0", "t4_tok1", "t4_tok2", "t4_tok3", "t4_tok4", "t4_tok5", "t4_tok6"],
      correctIndices: [3, 4], // "totally awesome"
      instruction: "t4_inst",
      hint1: "t4_b1",
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
      tapCount: { emoji: "📜", count: 5 }, 
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
  icon: "🎓",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const AcademicAtollExplorer = memo(function AcademicAtollExplorer({
  color = "#64748B", // Slate-500 for the professional/academic feel
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
      explorerId="english_k5_academic_atoll" 
      color={color} 
      lang="en" // Forcing English ELA
      onDone={onDone} 
    />
  );
});

export default AcademicAtollExplorer;
