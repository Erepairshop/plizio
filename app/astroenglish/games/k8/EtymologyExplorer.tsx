"use client";
// EtymologyExplorer.tsx — AstroEnglish Grade 8: i9 Etymology Summit
// Topics: 1) Root Meanings 2) Greek & Latin Match 3) Spot the Root 4) Word Builder 5) Summit Catch

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric) ───────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#064E3B" rx="20" />
      {/* Ancient Tree of Language */}
      <g transform="translate(120, 100)">
        <path d="M -10,0 L 10,0 L 5,-40 L -5,-40 Z" fill="#78350F" />
        <circle cx="0" cy="-50" r="30" fill="#10B981" />
        <circle cx="-20" cy="-40" r="20" fill="#059669" />
        <circle cx="20" cy="-40" r="20" fill="#059669" />
        <path d="M -10,0 Q -20,20 -40,20 M 0,0 Q 0,20 0,30 M 10,0 Q 20,20 40,20" fill="none" stroke="#D97706" strokeWidth="4" />
        <text x="0" y="35" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#FDE68A">Word Roots</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#1E3A8A" rx="20" />
      {/* Ancient Greek/Latin Pillars */}
      <g transform="translate(120, 70)">
        <rect x="-50" y="-30" width="20" height="60" fill="#94A3B8" />
        <rect x="-55" y="-40" width="30" height="10" fill="#CBD5E1" />
        <rect x="-55" y="30" width="30" height="10" fill="#CBD5E1" />
        
        <rect x="30" y="-30" width="20" height="60" fill="#94A3B8" />
        <rect x="25" y="-40" width="30" height="10" fill="#CBD5E1" />
        <rect x="25" y="30" width="30" height="10" fill="#CBD5E1" />

        <text x="-40" y="5" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#0F172A" transform="rotate(-90, -40, 5)">GREEK</text>
        <text x="40" y="5" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#0F172A" transform="rotate(-90, 40, 5)">LATIN</text>
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#0F172A" rx="20" />
      {/* Mountain Summit */}
      <g transform="translate(120, 90)">
        <polygon points="-60,30 0,-40 60,30" fill="#475569" />
        <polygon points="-30,30 20,-20 70,30" fill="#334155" />
        <polygon points="-26,-10 0,-40 26,-10 15,0 0,-15 -15,0" fill="#F8FAFC" />
        <circle cx="0" cy="-60" r="10" fill="#FDE047" />
        <text x="0" y="45" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#E2E8F0">Tap the Summits!</text>
      </g>
    </svg>
  );
});

// ─── LABELS (100% ENGLISH) ──────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Etymology Summit",
    
    // T1: Root Meanings (DROP GAME)
    t1_title: "The Roots of English",
    t1_text: "Etymology is the study of word origins. Many English words are built from ancient Greek and Latin ROOTS. For example, the root 'chron' means TIME, and 'hydra/aqua' means WATER.",
    t1_b1: "Chron = Time (e.g., chronology).",
    t1_b2: "Aqua / Hydra = Water (e.g., aquarium, hydrate).",
    t1_b3: "Look at the root inside the word!",
    t1_inst: "Sort the English words into the correct ancient root buckets!",
    t1_bucket_tim: "TIME (chron)",
    t1_bucket_wat: "WATER (aqua/hydra)",
    t1_item_t1: "Chronological", t1_item_t2: "Synchronize",
    t1_item_w1: "Aquarium", t1_item_w2: "Dehydrate",
    t1_q: "If a disease is 'chronic', what does that mean based on its root?",
    t1_q_a: "It lasts for a long TIME.", t1_q_b: "It is related to WATER.", t1_q_c: "It is very painful.", t1_q_d: "It affects the brain.",

    // T2: Greek & Latin Match (MAGNET MATCH)
    t2_title: "Ancient Match-Up",
    t2_text: "Let's learn some heavy-lifters! 'Bio' means LIFE (biology). 'Dict' means TO SAY or SPEAK (dictate). 'Struct' means TO BUILD (construct).",
    t2_b1: "Bio = Life.",
    t2_b2: "Dict = Speak / Say.",
    t2_b3: "Struct = Build.",
    t2_inst: "Magnet Match: Connect the ancient root to its English meaning!",
    t2_l1: "Bio", t2_r1: "Life",
    t2_l2: "Dict", t2_r2: "To speak or say",
    t2_l3: "Struct", t2_r3: "To build",
    t2_q: "What does the word 'Biography' literally mean based on its roots?",
    t2_q_a: "Writing about someone's life.", t2_q_b: "Speaking about buildings.", t2_q_c: "Studying time.", t2_q_d: "Looking at water.",

    // T3: Spot the Root (HIGHLIGHT)
    t3_title: "Radar Scan: Extract the Root",
    t3_text: "The Latin root 'cred' means TO BELIEVE. We see it in words like 'credit' (believing someone will pay you back) or 'incredible' (unbelievable).",
    t3_b1: "Find the word that means 'unbelievable'.",
    t3_b2: "Look closely at the middle of that word.",
    t3_b3: "Highlight only the root 'cred'!",
    t3_inst: "Highlight the Latin root 'cred' (meaning 'believe') hidden in this sentence!",
    t3_tok0: "The", t3_tok1: "story", t3_tok2: "of", t3_tok3: "the", t3_tok4: "ancient", t3_tok5: "summit", t3_tok6: "was", t3_tok7: "in", t3_tok8: "cred", t3_tok9: "ible.",
    t3_q: "If someone is 'credible', what are they?",
    t3_q_a: "Believable or trustworthy.", t3_q_b: "Very fast.", t3_q_c: "Able to build things.", t3_q_d: "Full of water.",

    // T4: Word Builder (SLINGSHOT)
    t4_title: "Root Shooter",
    t4_text: "The Latin root 'aud' means TO HEAR. Think of audio, auditorium, or audition. Can you find the word that uses this root?",
    t4_b1: "Look for 'aud'.",
    t4_b2: "It must relate to sound or hearing.",
    t4_b3: "Shoot the correct word!",
    t4_inst: "Shoot the asteroid that contains a word based on the root 'aud' (to hear)!",
    t4_target_1: "The audience clapped loudly.", // Correct
    t4_target_2: "The spectators watched closely.",
    t4_target_3: "He had a great vision.",
    t4_q: "Which root means 'to see'?",
    t4_q_a: "Vis / Vid", t4_q_b: "Aud", t4_q_c: "Chron", t4_q_d: "Dict",

    // T5: Fun Catch
    t5_title: "Etymology Master",
    t5_text: "You have conquered the Etymology Summit! You can now decode complex English words by looking at their ancient Greek and Latin roots.",
    t5_b1: "Roots unlock meanings.",
    t5_b2: "Prefixes and suffixes add to them.",
    t5_b3: "Catch 6 Summits!",
    t5_inst: "Tap the 6 mountain summits (⛰️) to plant your flag!",
    t5_q: "What is etymology?",
    t5_q_a: "The study of the origin and history of words.", t5_q_b: "The study of insects.", t5_q_c: "The study of mountains.", t5_q_d: "The study of punctuation.",
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
        { id: "tim", label: "t1_bucket_tim" },
        { id: "wat", label: "t1_bucket_wat" },
      ],
      items: [
        { text: "t1_item_t1", bucketId: "tim" },
        { text: "t1_item_w1", bucketId: "wat" },
        { text: "t1_item_t2", bucketId: "tim" },
        { text: "t1_item_w2", bucketId: "wat" },
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
      tokens: ["t3_tok0", "t3_tok1", "t3_tok2", "t3_tok3", "t3_tok4", "t3_tok5", "t3_tok6", "t3_tok7", "t3_tok8", "t3_tok9"],
      correctIndices: [8], // "cred"
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
      tapCount: { emoji: "⛰️", count: 6 }, 
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
  icon: "⛰️",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const EtymologyExplorer = memo(function EtymologyExplorer({
  color = "#059669", // Emerald-600 (Hegyvidéki / Ősi zöld)
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
      explorerId="english_k8_etymology_summit" 
      color={color} 
      lang="en" 
      onDone={onDone} 
    />
  );
});

export default EtymologyExplorer;
