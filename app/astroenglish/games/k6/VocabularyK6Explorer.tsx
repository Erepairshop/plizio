"use client";
// VocabularyK6Explorer.tsx — AstroEnglish Grade 6: i6 Vocabulary Vista
// Topics: 1) Context Clues 2) Analogies 3) Synonyms & Antonyms 4) Multiple Meanings 5) Star Catch

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric) ───────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#082F49" rx="20" />
      {/* Telescope / Context Clue */}
      <g transform="translate(120, 70)">
        <polygon points="-40,-15 20,-5 20,5 -40,15" fill="#38BDF8" />
        <rect x="20" y="-10" width="30" height="20" fill="#0284C7" rx="2" />
        <rect x="50" y="-15" width="10" height="30" fill="#BAE6FD" rx="2" />
        <circle cx="70" cy="0" r="5" fill="#FDE047" />
        <circle cx="-50" cy="-30" r="2" fill="white" opacity="0.5" />
        <circle cx="-60" cy="20" r="1.5" fill="white" opacity="0.8" />
        <text x="0" y="45" textAnchor="middle" fontSize="10" fill="#7DD3FC">Look closely at the surrounding words!</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#1E1B4B" rx="20" />
      {/* Analogy Bridge A : B :: C : D */}
      <g transform="translate(120, 70)">
        <text x="-50" y="5" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#F472B6">A</text>
        <text x="-30" y="5" textAnchor="middle" fontSize="16" fontWeight="bold" fill="white">:</text>
        <text x="-10" y="5" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#38BDF8">B</text>
        
        <text x="10" y="5" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#FDE047">::</text>
        
        <text x="30" y="5" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#F472B6">C</text>
        <text x="50" y="5" textAnchor="middle" fontSize="16" fontWeight="bold" fill="white">:</text>
        <text x="70" y="5" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#38BDF8">D</text>
        
        <path d="M -30,20 L -30,30 L 50,30 L 50,20" fill="none" stroke="#A78BFA" strokeWidth="2" strokeDasharray="4,2" />
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#020617" rx="20" />
      {/* Synonyms vs Antonyms */}
      <g transform="translate(60, 70)">
        <path d="M -20,0 L 20,0" stroke="#10B981" strokeWidth="4" markerEnd="url(#arrow)" />
        <path d="M 20,-10 L -20,-10" stroke="#10B981" strokeWidth="4" markerEnd="url(#arrow)" />
        <text x="0" y="25" textAnchor="middle" fontSize="10" fill="#6EE7B7">SYNONYMS (=)</text>
      </g>
      <g transform="translate(180, 70)">
        <path d="M -10,0 L -30,0" stroke="#F43F5E" strokeWidth="4" markerEnd="url(#arrow)" />
        <path d="M 10,0 L 30,0" stroke="#F43F5E" strokeWidth="4" markerEnd="url(#arrow)" />
        <text x="0" y="25" textAnchor="middle" fontSize="10" fill="#FDA4AF">ANTONYMS (≠)</text>
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#0B1120" rx="20" />
      {/* Constellation */}
      <g transform="translate(120, 70)">
        <line x1="-50" y1="20" x2="-20" y2="-20" stroke="#38BDF8" strokeWidth="1" />
        <line x1="-20" y1="-20" x2="30" y2="-10" stroke="#38BDF8" strokeWidth="1" />
        <line x1="30" y1="-10" x2="60" y2="30" stroke="#38BDF8" strokeWidth="1" />
        <circle cx="-50" cy="20" r="3" fill="#FDE047" />
        <circle cx="-20" cy="-20" r="4" fill="#FDE047" />
        <circle cx="30" cy="-10" r="3" fill="#FDE047" />
        <circle cx="60" cy="30" r="4" fill="#FDE047" />
        <text x="0" y="55" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#BAE6FD">Tap the vocabulary stars!</text>
      </g>
    </svg>
  );
});

// ─── LABELS (100% ENGLISH) ──────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Vocabulary Vista",
    
    // T1: Context Clues
    t1_title: "Context Clues",
    t1_text: "When you find a word you don't know, look at the words around it! Authors often leave clues—like definitions, examples, or opposites—right in the sentence.",
    t1_b1: "Definition clue: 'The habitat, or home, of the bear...'",
    t1_b2: "Example clue: 'Reptiles, such as snakes and lizards...'",
    t1_b3: "Use context to guess the meaning.",
    t1_inst: "Highlight the clue word that helps you understand the word 'exhausted'!",
    t1_tok0: "The", t1_tok1: "astronaut", t1_tok2: "was", t1_tok3: "exhausted", t1_tok4: "because", t1_tok5: "he", t1_tok6: "was", t1_tok7: "so", t1_tok8: "tired.",
    t1_q: "If a sentence says 'The arid land was completely dry and cracked', what does 'arid' mean?",
    t1_q_a: "Dry", t1_q_b: "Wet", t1_q_c: "Cold", t1_q_d: "Busy",

    // T2: Analogies (MAGNET MATCH)
    t2_title: "Analogies: Finding Connections",
    t2_text: "An analogy compares two pairs of words. You have to find the relationship between the first pair, and apply it to the second pair. (A is to B, as C is to D).",
    t2_b1: "Part to Whole: Wheel is to Car as Screen is to TV.",
    t2_b2: "Opposites: Hot is to Cold as Up is to Down.",
    t2_b3: "Figure out the rule first!",
    t2_inst: "Magnet Match: Connect the related words to complete the analogies!",
    t2_l1: "Up / Down", t2_r1: "Left / Right", // Opposites
    t2_l2: "Bird / Fly", t2_r2: "Fish / Swim", // Animal / Action
    t2_l3: "Sun / Day", t2_r3: "Moon / Night", // Object / Time
    t2_q: "Complete the analogy: 'Finger is to Hand as Toe is to...'",
    t2_q_a: "Foot", t2_q_b: "Arm", t2_q_c: "Shoe", t2_q_d: "Leg",

    // T3: Synonyms & Antonyms (GRAVITY DROP)
    t3_title: "Synonyms & Antonyms",
    t3_text: "Synonyms are words with the SAME or similar meaning (happy/joyful). Antonyms are words with OPPOSITE meanings (hot/cold).",
    t3_b1: "Synonyms help you avoid repeating words.",
    t3_b2: "Antonyms help create contrast.",
    t3_b3: "Drop the word pairs into the correct bucket!",
    t3_inst: "Drop the word pairs into the Synonyms (=) or Antonyms (≠) bucket!",
    t3_bucket_syn: "Synonyms (=)",
    t3_bucket_ant: "Antonyms (≠)",
    t3_item_s1: "Huge & Giant", t3_item_s2: "Fast & Quick",
    t3_item_a1: "Hot & Cold", t3_item_a2: "Brave & Afraid",
    t3_q: "Which word is a synonym for 'difficult'?",
    t3_q_a: "Hard", t3_q_b: "Easy", t3_q_c: "Simple", t3_q_d: "Soft",

    // T4: Multiple Meaning Words (SLINGSHOT)
    t4_title: "Multiple Meaning Words",
    t4_text: "Some words are spelled exactly the same but have entirely different meanings depending on the context! These are called homographs.",
    t4_b1: "Bark: The outside of a tree.",
    t4_b2: "Bark: The sound a dog makes.",
    t4_b3: "Read the whole sentence to know which one it is.",
    t4_inst: "Shoot the asteroid that shows the correct meaning of 'BAT' in this sentence: 'The baseball player swung his bat.'",
    t4_target_1: "A wooden club", // Correct
    t4_target_2: "A flying animal",
    t4_target_3: "To blink your eyes",
    t4_q: "In the sentence 'I will park the car', what does 'park' mean?",
    t4_q_a: "To leave a vehicle in a spot.", t4_q_b: "A place with trees and grass.", t4_q_c: "A hot jacket.", t4_q_d: "To run fast.",

    // T5: Fun Catch
    t5_title: "Constellation Complete",
    t5_text: "You have mapped the stars of the Vocabulary Vista! Your word power has increased massively.",
    t5_b1: "Use context clues.",
    t5_b2: "Understand relationships.",
    t5_b3: "Catch 6 stars!",
    t5_inst: "Tap the 6 bright stars (✨) in the observatory!",
    t5_q: "What do we call words that mean the opposite of each other?",
    t5_q_a: "Antonyms", t5_q_b: "Synonyms", t5_q_c: "Analogies", t5_q_d: "Homographs",
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
      type: "highlight-text",
      tokens: ["t1_tok0", "t1_tok1", "t1_tok2", "t1_tok3", "t1_tok4", "t1_tok5", "t1_tok6", "t1_tok7", "t1_tok8"],
      correctIndices: [8], // "tired"
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
      type: "physics-magnet", // 🧲 MÁGNESES PÁROSÍTÓ
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
    svg: () => <Topic3Svg />,
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "physics-bucket", // ☄️ GRAVITÁCIÓS SZÓ-ESÉS
      buckets: [
        { id: "syn", label: "t3_bucket_syn" },
        { id: "ant", label: "t3_bucket_ant" },
      ],
      items: [
        { text: "t3_item_s1", bucketId: "syn" },
        { text: "t3_item_a1", bucketId: "ant" },
        { text: "t3_item_s2", bucketId: "syn" },
        { text: "t3_item_a2", bucketId: "ant" },
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
    svg: () => <Topic1Svg />,
    bulletKeys: ["t4_b1", "t4_b2", "t4_b3"],
    interactive: {
      type: "physics-slingshot", // 🚀 ASZTEROIDA CSÚZLI
      question: "t4_inst",
      targets: [
        { id: "tgt1", text: "t4_target_1", isCorrect: true }, // A wooden club
        { id: "tgt2", text: "t4_target_2", isCorrect: false },
        { id: "tgt3", text: "t4_target_3", isCorrect: false },
      ],
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
      tapCount: { emoji: "✨", count: 6 }, 
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
  icon: "📖",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const VocabularyK6Explorer = memo(function VocabularyK6Explorer({
  color = "#0284C7", // Sky/Ocean Blue
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
      explorerId="english_k6_vocabulary_vista" 
      color={color} 
      lang="en" // Forcing English ELA
      onDone={onDone} 
    />
  );
});

export default VocabularyK6Explorer;
