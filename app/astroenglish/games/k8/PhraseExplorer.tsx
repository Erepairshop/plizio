"use client";
// PhraseExplorer.tsx — AstroEnglish Grade 8: i2 Phrase Frontier
// Topics: 1) Appositive Phrases 2) Absolute Phrases 3) Spot the Appositive 4) Absolute Identification 5) Map Catch

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric) ───────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#134E4A" rx="20" />
      {/* Appositive: Noun = Noun */}
      <g transform="translate(120, 70)">
        <rect x="-60" y="-15" width="40" height="30" fill="#14B8A6" rx="4" />
        <text x="-40" y="5" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#042F2E">Noun</text>
        
        <text x="0" y="5" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#A7F3D0">=</text>
        
        <rect x="20" y="-15" width="50" height="30" fill="#0D9488" rx="4" stroke="#5EEAD4" strokeWidth="2" strokeDasharray="2,2" />
        <text x="45" y="5" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#F0FDFA">Appositive</text>
        
        <text x="0" y="45" textAnchor="middle" fontSize="10" fill="#5EEAD4">(Renames the noun)</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#082F49" rx="20" />
      {/* Absolute Phrase: Noun + Participle modifying the whole sentence */}
      <g transform="translate(120, 70)">
        <path d="M -70,-20 L 70,-20" stroke="#38BDF8" strokeWidth="2" strokeDasharray="4,4" />
        <rect x="-60" y="-35" width="40" height="20" fill="#0284C7" rx="4" />
        <text x="-40" y="-21" textAnchor="middle" fontSize="10" fill="#E0F2FE">Noun</text>
        
        <text x="-10" y="-21" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#BAE6FD">+</text>
        
        <rect x="0" y="-35" width="60" height="20" fill="#0369A1" rx="4" />
        <text x="30" y="-21" textAnchor="middle" fontSize="10" fill="#E0F2FE">Participle</text>
        
        <path d="M 0,0 Q 0,30 50,30" fill="none" stroke="#7DD3FC" strokeWidth="3" markerEnd="url(#arrow)" />
        <rect x="55" y="20" width="50" height="20" fill="#0EA5E9" rx="4" />
        <text x="80" y="34" textAnchor="middle" fontSize="8" fill="#F0F9FF">Main Sentence</text>
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#171717" rx="20" />
      {/* Treasure Map */}
      <g transform="translate(120, 70)">
        <path d="M -30,-20 L 30,-25 L 40,20 L -20,25 Z" fill="#FEF08A" stroke="#CA8A04" strokeWidth="2" />
        <path d="M -20,-15 L -5,15 L 10,-10 L 25,10" fill="none" stroke="#A16207" strokeWidth="2" strokeDasharray="2,2" />
        <text x="25" y="15" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#DC2626">X</text>
        <text x="0" y="55" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#FDE047">Tap the Maps!</text>
      </g>
    </svg>
  );
});

// ─── LABELS (100% ENGLISH) ──────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Phrase Frontier",
    
    // T1: Appositive Phrases (DROP GAME)
    t1_title: "The Appositive",
    t1_text: "An APPOSITIVE PHRASE is a noun or pronoun (often with modifiers) set beside another noun to explain or identify it. Example: 'My brother, [a talented musician], plays the guitar.'",
    t1_b1: "Usually surrounded by commas.",
    t1_b2: "Renames the noun right next to it.",
    t1_b3: "If you remove it, the sentence still makes sense.",
    t1_inst: "Sort the underlined phrases! Is it an Appositive (renaming a noun) or a Prepositional phrase (showing location)?",
    t1_bucket_app: "Appositive Phrase",
    t1_bucket_pre: "Prepositional Phrase",
    t1_item_a1: "Jupiter, the largest planet, has rings.", t1_item_a2: "Mr. Smith, my teacher, is smart.",
    t1_item_p1: "The map is on the wooden table.", t1_item_p2: "We hiked through the dark forest.",
    t1_q: "In 'Neil Armstrong, the first man on the moon, was brave', what is the appositive phrase?",
    t1_q_a: "the first man on the moon", t1_q_b: "Neil Armstrong", t1_q_c: "was brave", t1_q_d: "on the moon",

    // T2: Absolute Phrases (MAGNET MATCH)
    t2_title: "Absolute Power",
    t2_text: "An ABSOLUTE PHRASE modifies the entire sentence, not just one noun. It usually consists of a noun and a participle (like an -ing or -ed word) but has NO true verb. Example: '[Weather permitting], we will launch tomorrow.'",
    t2_b1: "Format: Noun + Participle.",
    t2_b2: "Modifies the WHOLE sentence.",
    t2_b3: "Can usually be placed at the start or end of the sentence.",
    t2_inst: "Magnet Match: Connect the Absolute Phrase to the main sentence!",
    t2_l1: "His eyes scanning the horizon,", t2_r1: "...the explorer looked for land.",
    t2_l2: "Their fuel tanks completely empty,", t2_r2: "...the ship drifted in space.",
    t2_l3: "The mission accomplished,", t2_r3: "...the crew cheered loudly.",
    t2_q: "Which of these is an Absolute Phrase?",
    t2_q_a: "Her hands trembling,", t2_q_b: "In the dark cave,", t2_q_c: "Because she was scared,", t2_q_d: "The scary monster,",

    // T3: Spot the Appositive (HIGHLIGHT)
    t3_title: "Radar Scan: Appositives",
    t3_text: "When an appositive adds extra, non-essential information, it is set off by commas. You can spot it right after the noun it describes.",
    t3_b1: "Find the main noun/subject.",
    t3_b2: "Look between the commas right after it.",
    t3_b3: "Highlight the phrase that renames the subject!",
    t3_inst: "Highlight the APPOSITIVE PHRASE in the sentence below!",
    t3_tok0: "Earth,", t3_tok1: "the", t3_tok2: "blue", t3_tok3: "planet,", t3_tok4: "is", t3_tok5: "our", t3_tok6: "only", t3_tok7: "home.",
    t3_q: "Why does the appositive in the sentence above have commas around it?",
    t3_q_a: "Because it is non-essential (extra) information.", t3_q_b: "Because it is a question.", t3_q_c: "Because it is a verb.", t3_q_d: "It shouldn't have commas.",

    // T4: Absolute Identification (SLINGSHOT)
    t4_title: "Frontier Focus",
    t4_text: "Don't confuse an absolute phrase with a dependent clause! An absolute phrase lacks a conjunction (like 'because' or 'when') and lacks a true verb (it only has a participle).",
    t4_b1: "Dependent Clause: 'Because his hands were shaking...' (has verb 'were').",
    t4_b2: "Absolute Phrase: 'His hands shaking...' (no 'to be' verb!).",
    t4_b3: "Shoot the Absolute Phrase!",
    t4_inst: "Shoot the asteroid that contains an ABSOLUTE PHRASE!",
    t4_target_1: "The engine roaring, the rocket took off.", // Correct
    t4_target_2: "Because the engine was roaring, it took off.",
    t4_target_3: "The roaring engine was loud.",
    t4_q: "What is missing from an absolute phrase that stops it from being a clause?",
    t4_q_a: "A finite (true) verb", t4_q_b: "A noun", t4_q_c: "A comma", t4_q_d: "An adjective",

    // T5: Fun Catch
    t5_title: "Master Cartographer",
    t5_text: "You have mapped the Phrase Frontier! You can now use appositives to add detail, and absolute phrases to add cinematic action to your writing.",
    t5_b1: "Appositive = Renames.",
    t5_b2: "Absolute = Modifies everything.",
    t5_b3: "Catch 6 Treasure Maps!",
    t5_inst: "Tap the 6 treasure maps (🗺️) to chart the new territory!",
    t5_q: "If you remove an absolute phrase from a sentence, what happens?",
    t5_q_a: "The sentence still makes grammatical sense.", t5_q_b: "The sentence becomes a fragment.", t5_q_c: "The verbs disappear.", t5_q_d: "It becomes a question.",
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
        { id: "app", label: "t1_bucket_app" },
        { id: "pre", label: "t1_bucket_pre" },
      ],
      items: [
        { text: "t1_item_a1", bucketId: "app" },
        { text: "t1_item_p1", bucketId: "pre" },
        { text: "t1_item_a2", bucketId: "app" },
        { text: "t1_item_p2", bucketId: "pre" },
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
      tokens: ["t3_tok0", "t3_tok1", "t3_tok2", "t3_tok3", "t3_tok4", "t3_tok5", "t3_tok6", "t3_tok7"],
      correctIndices: [1, 2, 3], // "the blue planet,"
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
      tapCount: { emoji: "🗺️", count: 6 }, 
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
  icon: "🗺️",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const PhraseExplorer = memo(function PhraseExplorer({
  color = "#0891B2", // Cyan-600 (Térkép / Kalandos türkiz)
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
      explorerId="english_k8_phrase_frontier" 
      color={color} 
      lang="en" 
      onDone={onDone} 
    />
  );
});

export default PhraseExplorer;
