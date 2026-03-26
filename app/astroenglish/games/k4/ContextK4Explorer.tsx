"use client";
// ContextK4Explorer.tsx — AstroEnglish Grade 4: i8 Context Comet
// Topics: 1) Types of Context Clues 2) Scientific Vocabulary 3) Definition Match 4) Clue Detective 5) Comet Catch

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric) ───────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#0F172A" rx="20" />
      {/* Text block with highlighted clue */}
      <g transform="translate(120, 70)">
        <rect x="-90" y="-25" width="180" height="50" fill="#1E293B" rx="8" />
        <line x1="-80" y1="-10" x2="40" y2="-10" stroke="#475569" strokeWidth="3" />
        <line x1="-80" y1="5" x2="10" y2="5" stroke="#475569" strokeWidth="3" />
        <rect x="20" y="-2" width="60" height="15" fill="#FDE047" opacity="0.3" rx="2" />
        <circle cx="50" cy="5" r="15" fill="none" stroke="#38BDF8" strokeWidth="2" />
        <line x1="60" y1="15" x2="75" y2="30" stroke="#38BDF8" strokeWidth="4" strokeLinecap="round" />
        <text x="0" y="40" textAnchor="middle" fontSize="10" fill="#93C5FD">Search for clues!</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#1E1B4B" rx="20" />
      {/* Scientific Vocabulary Symbols */}
      <g transform="translate(60, 70)">
        <circle cx="0" cy="0" r="20" fill="none" stroke="#A78BFA" strokeWidth="2" />
        <path d="M -10,-10 L 10,10 M 10,-10 L -10,10" stroke="#A78BFA" strokeWidth="2" />
        <text x="0" y="35" textAnchor="middle" fontSize="10" fill="#DDD6FE">VACUUM</text>
      </g>
      <g transform="translate(180, 70)">
        <path d="M 0,-20 L 5,-5 L 20,0 L 5,5 L 0,20 L -5,5 L -20,0 L -5,-5 Z" fill="#F43F5E" />
        <text x="0" y="35" textAnchor="middle" fontSize="10" fill="#FDA4AF">RADIATION</text>
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#0C0A09" rx="20" />
      {/* Comet with tail */}
      <g transform="translate(80, 40)">
        <path d="M 0,0 L 120,40" stroke="white" strokeWidth="8" strokeLinecap="round" opacity="0.2" />
        <path d="M 0,0 L 100,30" stroke="#38BDF8" strokeWidth="4" strokeLinecap="round" opacity="0.4" />
        <circle cx="0" cy="0" r="10" fill="white" />
      </g>
      <text x="120" y="120" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#BAE6FD">Tap the icy comets!</text>
    </svg>
  );
});

// ─── LABELS (100% ENGLISH) ──────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Context Comet",
    
    // T1: Types of Context Clues
    t1_title: "Context Clue Types",
    t1_text: "When you find a difficult word, look for three types of clues: 1) Definitions inside the sentence, 2) Synonyms (words that mean the same), and 3) Antonyms (opposites).",
    t1_b1: "Definition: 'The probe, a small robot, landed.'",
    t1_b2: "Synonym: 'It was a vast and huge galaxy.'",
    t1_b3: "Antonym: 'He was calm, unlike the frantic crew.'",
    t1_inst: "Is the clue in the sentence a Definition, a Synonym, or an Antonym?",
    t1_bucket_def: "Definition",
    t1_bucket_syn: "Synonym",
    t1_bucket_ant: "Antonym",
    t1_item_d1: "A telescope is a tool used to see far away.",
    t1_item_s1: "The trip was perilous and dangerous.",
    t1_item_a1: "The sun is luminous, while the cave is dark.",
    t1_q: "Which clue uses a word that means the OPPOSITE?",
    t1_q_a: "Antonym", t1_q_b: "Definition", t1_q_c: "Synonym", t1_q_d: "Example",

    // T2: Scientific Vocabulary
    t2_title: "Scientific Vocabulary",
    t2_text: "In space science, we use specific words. A 'vacuum' is a space with no air. 'Radiation' is energy that travels through space.",
    t2_b1: "Vacuum: Empty space.",
    t2_b2: "Atmosphere: The gas around a planet.",
    t2_b3: "Gravity: The pull of a planet.",
    t2_inst: "Match the scientific word to its simple meaning!",
    t2_l1: "vacuum", t2_r1: "no air",
    t2_l2: "gravity", t2_r2: "pulling force",
    t2_l3: "orbit", t2_r3: "circular path",
    t2_q: "What do we call the layer of gases around a planet?",
    t2_q_a: "atmosphere", t2_q_b: "vacuum", t2_q_c: "radiation", t2_q_d: "comet",

    // T3: Vocabulary in Use
    t3_title: "Using Space Words",
    t3_text: "Let's use our new domain vocabulary in sentences. Use the context clues to pick the right word for the mission report.",
    t3_b1: "Read the whole sentence first.",
    t3_b2: "Look for clues about air or force.",
    t3_b3: "Choose the technical term.",
    t3_inst: "Fill in the gap with the correct scientific word!",
    t3_sentence: "Astronuts must wear suits because there is a ___ in space with no oxygen.",
    t3_c1: "vacuum", t3_c2: "gravity", t3_c3: "orbit",
    t3_q: "Which word best completes: 'The moon stays in ___ around the Earth'?",
    t3_q_a: "orbit", t3_q_b: "atmosphere", t3_q_c: "radiation", t3_q_d: "comet",

    // T4: Clue Detective
    t4_title: "The Meaning Detective",
    t4_text: "Use all your skills to find the meaning of advanced words. Look for the 'hidden' definitions provided by the author.",
    t4_b1: "The word is 'Celestial'.",
    t4_b2: "Sentence: 'We studied stars, planets, and other celestial bodies.'",
    t4_b3: "Clue: 'stars and planets' tell us celestial means 'in the sky'.",
    t4_inst: "Highlight the context clue that helps explain what 'perilous' means!",
    t4_tok0: "The", t4_tok1: "journey", t4_tok2: "was", t4_tok3: "perilous,", t4_tok4: "filled", t4_tok5: "with", t4_tok6: "many", t4_tok7: "dangers.",
    t4_q: "In the sentence above, what does 'perilous' mean?",
    t4_q_a: "dangerous", t4_q_b: "easy", t4_q_c: "long", t4_q_d: "blue",

    // T5: Fun Catch
    t5_title: "Comet Harvest",
    t5_text: "Excellent scientific work! You've decoded the technical logs. Now, catch the icy comets as they fly past the station.",
    t5_b1: "Comets are made of ice and dust.",
    t5_b2: "They have long, glowing tails.",
    t5_b3: "Catch 6 comets!",
    t5_inst: "Tap the 6 racing comets (☄️) in the sky!",
    t5_q: "What is 'domain vocabulary'?",
    t5_q_a: "Words used in a specific subject.", t5_q_b: "Words that rhyme.", t5_q_c: "Words with no meaning.", t5_q_d: "Short words only.",
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
        { id: "def", label: "t1_bucket_def" },
        { id: "syn", label: "t1_bucket_syn" },
        { id: "ant", label: "t1_bucket_ant" },
      ],
      items: [
        { text: "t1_item_d1", bucketId: "def" },
        { text: "t1_item_s1", bucketId: "syn" },
        { text: "t1_item_a1", bucketId: "ant" },
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
      correctIndex: 0, // "vacuum"
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
    svg: () => <Topic1Svg />,
    bulletKeys: ["t4_b1", "t4_b2", "t4_b3"],
    interactive: {
      type: "highlight-text",
      tokens: ["t4_tok0", "t4_tok1", "t4_tok2", "t4_tok3", "t4_tok4", "t4_tok5", "t4_tok6", "t4_tok7"],
      correctIndices: [4, 5, 6, 7], // "filled with many dangers."
      instruction: "t4_inst",
      hint1: "t4_b3",
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
      tapCount: { emoji: "☄️", count: 6 }, 
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
  icon: "☄️",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const ContextK4Explorer = memo(function ContextK4Explorer({
  color = "#0EA5E9", // Sky-500 for the comet's icy tail
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
      explorerId="english_k4_context_comet" 
      color={color} 
      lang="en" // Forcing English ELA
      onDone={onDone} 
    />
  );
});

export default ContextK4Explorer;
