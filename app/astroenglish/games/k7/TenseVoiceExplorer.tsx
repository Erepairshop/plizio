"use client";
// TenseVoiceExplorer.tsx — AstroEnglish Grade 7: i3 Tense & Voice
// Topics: 1) Active vs Passive 2) Tense Identification 3) Spot the Passive Verb 4) Active Shift 5) Time Catch

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric) ───────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#020617" rx="20" />
      {/* Active vs Passive Arrows */}
      <g transform="translate(120, 70)">
        {/* Active: Left to Right */}
        <path d="M -60,-15 L 40,-15" stroke="#10B981" strokeWidth="4" />
        <polygon points="40,-25 55,-15 40,-5" fill="#10B981" />
        <text x="-10" y="-25" textAnchor="middle" fontSize="10" fill="#6EE7B7">Actor -> Action</text>
        
        {/* Passive: Right to Left */}
        <path d="M 60,25 L -40,25" stroke="#F43F5E" strokeWidth="4" />
        <polygon points="-40,15 -55,25 -40,35" fill="#F43F5E" />
        <text x="10" y="15" textAnchor="middle" fontSize="10" fill="#FDA4AF">Action <- Receiver</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#172554" rx="20" />
      {/* Timeline Clock */}
      <g transform="translate(120, 70)">
        <path d="M -80,0 L 80,0" stroke="#3B82F6" strokeWidth="2" strokeDasharray="5,5" />
        <circle cx="-50" cy="0" r="15" fill="#1E3A8A" stroke="#60A5FA" strokeWidth="2" />
        <text x="-50" y="4" textAnchor="middle" fontSize="10" fill="#BFDBFE">PAST</text>
        
        <circle cx="0" cy="0" r="20" fill="#1D4ED8" stroke="#93C5FD" strokeWidth="2" />
        <text x="0" y="4" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#EFF6FF">NOW</text>
        
        <circle cx="50" cy="0" r="15" fill="#1E3A8A" stroke="#60A5FA" strokeWidth="2" />
        <text x="50" y="4" textAnchor="middle" fontSize="10" fill="#BFDBFE">FUT</text>
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#082F49" rx="20" />
      {/* Time Vortex */}
      <g transform="translate(120, 70)">
        <circle cx="0" cy="0" r="40" fill="none" stroke="#0284C7" strokeWidth="2" opacity="0.4" />
        <circle cx="0" cy="0" r="25" fill="none" stroke="#38BDF8" strokeWidth="2" opacity="0.6" />
        <circle cx="0" cy="0" r="10" fill="#7DD3FC" />
        <path d="M 0,0 L 0,-15 M 0,0 L 10,10" stroke="#0C4A6E" strokeWidth="2" strokeLinecap="round" />
        <text x="0" y="55" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#BAE6FD">Tap the Clocks!</text>
      </g>
    </svg>
  );
});

// ─── LABELS (100% ENGLISH) ──────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Tense & Voice",
    
    // T1: Active vs Passive (DROP GAME)
    t1_title: "Active or Passive?",
    t1_text: "In the ACTIVE voice, the subject performs the action (The pilot flew the ship). In the PASSIVE voice, the subject receives the action (The ship was flown by the pilot).",
    t1_b1: "Active: Subject -> Verb -> Object.",
    t1_b2: "Passive: Object -> 'to be' + Past Participle -> (by Subject).",
    t1_b3: "Passive often uses the word 'by'.",
    t1_inst: "Sort the transmission logs into Active or Passive buckets!",
    t1_bucket_act: "Active Voice",
    t1_bucket_pas: "Passive Voice",
    t1_item_a1: "The robot fixed the engine.", t1_item_a2: "We explored Mars.",
    t1_item_p1: "The engine was fixed by the robot.", t1_item_p2: "Mars was explored by us.",
    t1_q: "Which voice focuses on WHO is doing the action?",
    t1_q_a: "Active Voice", t1_q_b: "Passive Voice", t1_q_c: "Future Voice", t1_q_d: "Silent Voice",

    // T2: Tense Identification (MAGNET MATCH)
    t2_title: "The Timeline",
    t2_text: "Verbs tell us WHEN an action happens. English has simple tenses (Past, Present, Future), continuous tenses (is happening right now), and perfect tenses (had happened before something else).",
    t2_b1: "Present Continuous: I am flying.",
    t2_b2: "Future Simple: I will fly.",
    t2_b3: "Past Perfect: I had flown.",
    t2_inst: "Magnet Match: Connect the sentence to its correct tense!",
    t2_l1: "I am repairing the hull.", t2_r1: "Present Continuous",
    t2_l2: "We will launch tomorrow.", t2_r2: "Future Simple",
    t2_l3: "She had already left.", t2_r3: "Past Perfect",
    t2_q: "What tense is 'They walked to the station'?",
    t2_q_a: "Past Simple", t2_q_b: "Present Simple", t2_q_c: "Future Simple", t2_q_d: "Past Continuous",

    // T3: Spot the Passive Verb (HIGHLIGHT)
    t3_title: "Radar Scan: Passive Verbs",
    t3_text: "A passive verb phrase ALWAYS includes a form of the 'to be' verb (am, is, are, was, were, be, being, been) plus a past participle (like 'seen', 'built', 'discovered').",
    t3_b1: "Find the 'to be' helper verb.",
    t3_b2: "Find the main action verb ending in -ed, -en, etc.",
    t3_b3: "Highlight both words!",
    t3_inst: "Highlight the PASSIVE VERB PHRASE in the sentence below!",
    t3_tok0: "The", t3_tok1: "alien", t3_tok2: "artifact", t3_tok3: "was", t3_tok4: "discovered", t3_tok5: "in", t3_tok6: "the", t3_tok7: "crater.",
    t3_q: "What is the 'to be' verb in the sentence above?",
    t3_q_a: "was", t3_q_b: "discovered", t3_q_c: "alien", t3_q_d: "in",

    // T4: Shifting to Active (SLINGSHOT)
    t4_title: "Active Shift",
    t4_text: "Strong writing often prefers the active voice. To change a passive sentence to active, find who did the action and make them the subject of the sentence.",
    t4_b1: "Passive: The alert was sounded by the captain.",
    t4_b2: "Active: The captain sounded the alert.",
    t4_b3: "Make the 'doer' the boss of the sentence.",
    t4_inst: "Shoot the asteroid that correctly changes this passive sentence to ACTIVE: 'The laser was fired by the pilot.'",
    t4_target_1: "The pilot fired the laser.", // Correct
    t4_target_2: "The laser fired the pilot.",
    t4_target_3: "The pilot is firing the laser.",
    t4_q: "Why is active voice usually better in writing?",
    t4_q_a: "It is more direct and energetic.", t4_q_b: "It is longer and more complicated.", t4_q_c: "It uses more 'to be' verbs.", t4_q_d: "It hides the subject.",

    // T5: Fun Catch
    t5_title: "Time Commander",
    t5_text: "You have mastered the flow of time and action! You know when to use active power and when to use passive observation.",
    t5_b1: "Active = Subject does it.",
    t5_b2: "Passive = Subject receives it.",
    t5_b3: "Catch 5 Time Clocks!",
    t5_inst: "Tap the 5 time clocks (⏱️) to synchronize the engines!",
    t5_q: "Which word is the Past Participle of 'write'?",
    t5_q_a: "written", t5_q_b: "wrote", t5_q_c: "writing", t5_q_d: "writes",
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
        { id: "act", label: "t1_bucket_act" },
        { id: "pas", label: "t1_bucket_pas" },
      ],
      items: [
        { text: "t1_item_a1", bucketId: "act" },
        { text: "t1_item_p1", bucketId: "pas" },
        { text: "t1_item_a2", bucketId: "act" },
        { text: "t1_item_p2", bucketId: "pas" },
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
      type: "physics-magnet",
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
    svg: () => <Topic1Svg />,
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "highlight-text",
      tokens: ["t3_tok0", "t3_tok1", "t3_tok2", "t3_tok3", "t3_tok4", "t3_tok5", "t3_tok6", "t3_tok7"],
      correctIndices: [3, 4], // "was discovered"
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
      tapCount: { emoji: "⏱️", count: 5 }, 
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
  icon: "⏱️",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const TenseVoiceExplorer = memo(function TenseVoiceExplorer({
  color = "#0369A1", // Sky-700 (időgép kék)
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
      explorerId="english_k7_tense_voice" 
      color={color} 
      lang="en" 
      onDone={onDone} 
    />
  );
});

export default TenseVoiceExplorer;
