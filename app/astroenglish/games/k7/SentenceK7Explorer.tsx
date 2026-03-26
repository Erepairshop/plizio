"use client";
// SentenceK7Explorer.tsx — AstroEnglish Grade 7: i2 Sentence Station
// Topics: 1) Declarative vs Interrogative 2) Imperative & Exclamatory 3) The Hidden Subject 4) Sentence Selection 5) Train Catch

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric) ───────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#0F172A" rx="20" />
      {/* Statement vs Question Train Tracks */}
      <g transform="translate(120, 70)">
        <rect x="-80" y="-20" width="60" height="40" fill="#3B82F6" rx="4" />
        <text x="-50" y="5" textAnchor="middle" fontSize="24" fontWeight="bold" fill="white">.</text>
        
        <rect x="20" y="-20" width="60" height="40" fill="#EAB308" rx="4" />
        <text x="50" y="5" textAnchor="middle" fontSize="20" fontWeight="bold" fill="white">?</text>
        
        <path d="M -80,30 L 80,30" stroke="#64748B" strokeWidth="2" strokeDasharray="4,4" />
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#1E1B4B" rx="20" />
      {/* Imperative & Exclamatory Signs */}
      <g transform="translate(70, 70)">
        <polygon points="0,-25 25,20 -25,20" fill="#EF4444" />
        <text x="0" y="10" textAnchor="middle" fontSize="16" fontWeight="bold" fill="white">!</text>
        <text x="0" y="40" textAnchor="middle" fontSize="10" fill="#FCA5A5">Exclamatory</text>
      </g>
      <g transform="translate(170, 70)">
        <circle cx="0" cy="0" r="20" fill="#10B981" />
        <text x="0" y="5" textAnchor="middle" fontSize="12" fontWeight="bold" fill="white">GO</text>
        <text x="0" y="40" textAnchor="middle" fontSize="10" fill="#6EE7B7">Imperative</text>
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#171717" rx="20" />
      {/* Futuristic Train */}
      <g transform="translate(120, 70)">
        <rect x="-40" y="-15" width="80" height="30" fill="#CBD5E1" rx="5" />
        <rect x="20" y="-10" width="15" height="10" fill="#38BDF8" rx="2" />
        <rect x="-10" y="-10" width="20" height="10" fill="#38BDF8" rx="2" />
        <rect x="-35" y="-10" width="15" height="10" fill="#38BDF8" rx="2" />
        <circle cx="-25" cy="20" r="6" fill="#475569" />
        <circle cx="25" cy="20" r="6" fill="#475569" />
        <text x="0" y="50" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#94A3B8">Tap the Stations!</text>
      </g>
    </svg>
  );
});

// ─── LABELS (100% ENGLISH) ──────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Sentence Station",
    
    // T1: Declarative vs Interrogative (DROP GAME)
    t1_title: "Statements & Questions",
    t1_text: "A DECLARATIVE sentence makes a statement and ends with a period (.). An INTERROGATIVE sentence asks a question and ends with a question mark (?).",
    t1_b1: "Declarative: The train is fast.",
    t1_b2: "Interrogative: Is the train fast?",
    t1_b3: "Look at the punctuation!",
    t1_inst: "Sort the sentences into the correct track buckets!",
    t1_bucket_dec: "Declarative (.)",
    t1_bucket_int: "Interrogative (?)",
    t1_item_d1: "We are boarding.", t1_item_d2: "The ticket is valid.",
    t1_item_i1: "Where is my seat?", t1_item_i2: "Did we arrive?",
    t1_q: "Which punctuation mark ends a declarative sentence?",
    t1_q_a: "Period (.)", t1_q_b: "Question Mark (?)", t1_q_c: "Comma (,)", t1_q_d: "Exclamation Mark (!)",

    // T2: Imperative vs Exclamatory (MAGNET MATCH)
    t2_title: "Commands & Emotions",
    t2_text: "An IMPERATIVE sentence gives a command ('Sit down'). An EXCLAMATORY sentence shows strong emotion ('What a fast train!').",
    t2_b1: "Imperative: Often missing the word 'You'.",
    t2_b2: "Exclamatory: Shows shock, joy, or fear.",
    t2_b3: "Both can end in an exclamation mark (!).",
    t2_inst: "Magnet Match: Connect the sentence to its correct type!",
    t2_l1: "Watch out for the doors!", t2_r1: "Imperative (Command)",
    t2_l2: "I won a free ticket!", t2_r2: "Exclamatory (Emotion)",
    t2_l3: "How are you today?", t2_r3: "Interrogative (Question)",
    t2_q: "What type of sentence is: 'Please give me your ticket.'?",
    t2_q_a: "Imperative", t2_q_b: "Declarative", t2_q_c: "Interrogative", t2_q_d: "Exclamatory",

    // T3: The Hidden Subject (HIGHLIGHT)
    t3_title: "The Invisible 'You'",
    t3_text: "In an imperative sentence (a command), the subject is usually not written. It is understood to be 'You'. The sentence starts directly with the action verb.",
    t3_b1: "(You) Open the door.",
    t3_b2: "The verb gives the command.",
    t3_b3: "Find the action word!",
    t3_inst: "Highlight the ACTION VERB that starts this command!",
    t3_tok0: "Board", t3_tok1: "the", t3_tok2: "shuttle", t3_tok3: "before", t3_tok4: "the", t3_tok5: "doors", t3_tok6: "close.",
    t3_q: "What is the implied subject of the command 'Listen to me.'?",
    t3_q_a: "You", t3_q_b: "Me", t3_q_c: "I", t3_q_d: "Listen",

    // T4: Sentence Selection (SLINGSHOT)
    t4_title: "Identify the Cargo",
    t4_text: "To become a Station Master, you must instantly recognize the cargo. Read the sentence types carefully and select the right target.",
    t4_b1: "Read the instruction closely.",
    t4_b2: "Check the punctuation.",
    t4_b3: "Shoot the correct one.",
    t4_inst: "Shoot the asteroid that contains an EXCLAMATORY sentence!",
    t4_target_1: "We are going to crash!", // Correct
    t4_target_2: "Stop the ship.",
    t4_target_3: "Is the ship safe?",
    t4_q: "Which type of sentence simply tells a fact?",
    t4_q_a: "Declarative", t4_q_b: "Imperative", t4_q_c: "Exclamatory", t4_q_d: "Interrogative",

    // T5: Fun Catch
    t5_title: "Station Master",
    t5_text: "You have taken control of the Sentence Station! You can now direct all types of sentences to their correct destinations.",
    t5_b1: "Commands, Questions.",
    t5_b2: "Statements, Exclamations.",
    t5_b3: "Catch 5 Stations!",
    t5_inst: "Tap the 5 space-stations (🚉) floating in orbit!",
    t5_q: "How many main types of sentences are there in English?",
    t5_q_a: "Four", t5_q_b: "Two", t5_q_c: "Three", t5_q_d: "Five",
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
      type: "physics-bucket", // MotionDropGame hívódik meg rá
      buckets: [
        { id: "dec", label: "t1_bucket_dec" },
        { id: "int", label: "t1_bucket_int" },
      ],
      items: [
        { text: "t1_item_d1", bucketId: "dec" },
        { text: "t1_item_i1", bucketId: "int" },
        { text: "t1_item_d2", bucketId: "dec" },
        { text: "t1_item_i2", bucketId: "int" },
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
      type: "physics-magnet", // MotionMatchGame hívódik meg rá
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
      correctIndices: [0], // "Board"
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
      type: "physics-slingshot", // MotionShootGame hívódik meg rá
      question: "t4_inst",
      targets: [
        { id: "tgt1", text: "t4_target_1", isCorrect: true }, // We are going to crash!
        { id: "tgt2", text: "t4_target_2", isCorrect: false },
        { id: "tgt3", text: "t4_target_3", isCorrect: false },
      ],
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
      tapCount: { emoji: "🚉", count: 5 }, 
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
  icon: "🚉",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const SentenceK7Explorer = memo(function SentenceK7Explorer({
  color = "#2563EB", // Blue-600 (Vasutas / Állomás kék)
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
      grade={7} 
      explorerId="english_k7_sentence_station" 
      color={color} 
      lang="en" // Angol nyelvtan -> angol UI 
      onDone={onDone} 
    />
  );
});

export default SentenceK7Explorer;
