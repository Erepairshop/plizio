"use client";
// BigTestK6Explorer.tsx — AstroEnglish Grade 6: The Saturnia Grand Finale
// A comprehensive review of all K6 topics using all physics engines.

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric) ───────

const FinalSvg = memo(function FinalSvg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#020617" rx="20" />
      <circle cx="120" cy="70" r="50" fill="none" stroke="#FDE047" strokeWidth="2" strokeDasharray="5,5" />
      <path d="M 70,70 L 170,70 M 120,20 L 120,120" stroke="#3B82F6" strokeWidth="1" opacity="0.5" />
      <circle cx="120" cy="70" r="30" fill="#7E22CE" />
      <polygon points="120,50 125,65 140,65 128,75 133,90 120,80 107,90 112,75 100,65 115,65" fill="#FBBF24" />
      <text x="120" y="125" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#FDE68A">SATURNIA CERTIFIED</text>
    </svg>
  );
});

// ─── LABELS (100% ENGLISH) ──────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Saturnia Grand Finale",
    
    // T1: Pronouns & Case (GRAVITY DROP)
    t1_title: "The Pronoun Expert",
    t1_text: "Final check: Can you still separate subject pronouns from object pronouns in complex sentences?",
    t1_b1: "Subjects: I, He, We.",
    t1_b2: "Objects: Me, Him, Us.",
    t1_inst: "Sort the final pronouns into their gravity buckets!",
    t1_bucket_subj: "Subject",
    t1_bucket_obj: "Object",
    t1_item_s1: "THEY", t1_item_o1: "THEM",
    t1_q: "In 'She told us the news', which word is the object pronoun?",
    t1_q_a: "us", t1_q_b: "she", t1_q_c: "news", t1_q_d: "told",

    // T2: Sentence Structures (SENTENCE STACKER)
    t2_title: "Master Architect",
    t2_text: "A compound-complex sentence is the ultimate construction. It needs two independent clauses and one dependent clause.",
    t2_b1: "Keep the tower stable.",
    t2_b2: "Check the conjunctions.",
    t2_inst: "Build the final tower: 'Although it is late, I am awake, and I am studying.' (Bottom to Top)",
    t2_w0: "Although it is late,",
    t2_w1: "I am awake,",
    t2_w2: "and I am studying.",
    t2_q: "What type of sentence is 'I like space, but I miss Earth'?",
    t2_q_a: "Compound", t2_q_b: "Simple", t2_q_c: "Complex", t2_q_d: "Fragment",

    // T3: Vocabulary & Roots (MAGNET MATCH)
    t3_title: "The Word Scientist",
    t3_text: "Do you remember your roots? Use the magnetic fields to pair the root with its academic meaning.",
    t3_b1: "VIS = sight.",
    t3_b2: "STRUCT = build.",
    t3_inst: "Magnet Match: Pair the Greek/Latin roots with their meanings!",
    t3_l1: "VIS / VID", t3_r1: "to see",
    t3_l2: "STRUCT", t3_r2: "to build",
    t3_l3: "AUTO", t3_r3: "self",
    t3_q: "What does 'MULTILINGUAL' mean based on its parts?",
    t3_q_a: "Speaking many languages.", t3_q_b: "Speaking one language.", t3_q_c: "Not speaking at all.", t3_q_d: "Learning to write.",

    // T4: Rhetoric & Logic (SLINGSHOT)
    t4_title: "The Logical Pilot",
    t4_text: "Don't fall for weak arguments! Use the slingshot to destroy the logical fallacies.",
    t4_b1: "Facts over feelings.",
    t4_b2: "Avoid the bandwagon.",
    t4_inst: "Shoot the LOGICAL FALLACY asteroid: 'Everyone is buying this ship, so it must be the best!'",
    t4_target_1: "Bandwagon Fallacy", // Correct
    t4_target_2: "Logical Evidence",
    t4_target_3: "Expert Authority",
    t4_q: "What is 'ETHOS'?",
    t4_q_a: "An appeal to trust and credibility.", t4_q_b: "An appeal to emotion.", t4_q_c: "An appeal to logic.", d: "A type of moon.",

    // T5: Final Victory
    t5_title: "Saturnia Conqueror",
    t5_text: "You have completed Grade 6 English! Your skills in grammar, vocabulary, and rhetoric are now legendary across the rings of Saturnia.",
    t5_b1: "K6 Certified.",
    t5_b2: "Ready for Grade 7.",
    t5_b3: "Catch 10 victory stars!",
    t5_inst: "Tap the 10 golden stars (⭐) to claim your certificate!",
    t5_q: "Which grade are you ready for now?",
    t5_q_a: "Grade 7", t5_q_b: "Grade 5", t5_q_c: "Kindergarten", t5_q_d: "Flight School",
  }
};

// ─── TOPICS ─────────────────────────────────────────────────────────

const TOPICS: TopicDef[] = [
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: () => <FinalSvg />,
    bulletKeys: ["t1_b1", "t1_b2"],
    interactive: {
      type: "physics-bucket",
      buckets: [
        { id: "subj", label: "t1_bucket_subj" },
        { id: "obj", label: "t1_bucket_obj" },
      ],
      items: [
        { text: "t1_item_s1", bucketId: "subj" },
        { text: "t1_item_o1", bucketId: "obj" },
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
    svg: () => <FinalSvg />,
    bulletKeys: ["t2_b1", "t2_b2"],
    interactive: {
      type: "physics-stacker",
      words: ["t2_w0", "t2_w1", "t2_w2"],
      correctOrder: [0, 1, 2],
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
    svg: () => <FinalSvg />,
    bulletKeys: ["t3_b1", "t3_b2"],
    interactive: {
      type: "physics-magnet",
      pairs: [
        { left: "t3_l1", right: "t3_r1" },
        { left: "t3_l2", right: "t3_r2" },
        { left: "t3_l3", right: "t3_r3" },
      ],
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
    svg: () => <FinalSvg />,
    bulletKeys: ["t4_b1", "t4_b2"],
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
    svg: () => <FinalSvg />,
    bulletKeys: ["t5_b1", "t5_b2", "t5_b3"],
    interactive: {
      type: "tap-count",
      tapCount: { emoji: "⭐", count: 10 }, 
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
  icon: "🏆",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const BigTestK6Explorer = memo(function BigTestK6Explorer({
  color = "#FBBF24", // Gold for the final
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
      grade={6} 
      explorerId="english_k6_final_bigtest" 
      color={color} 
      lang="en" 
      onDone={onDone} 
    />
  );
});

export default BigTestK6Explorer;
