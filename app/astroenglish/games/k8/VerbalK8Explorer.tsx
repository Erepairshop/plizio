"use client";
// VerbalK8Explorer.tsx — AstroEnglish Grade 8: i1 Verbal Voyage
// Topics: 1) Gerund Phrases 2) Participial Phrases 3) Infinitive Phrases 4) Verbal Identification 5) Anchor Catch

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric) ───────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#0F172A" rx="20" />
      {/* Nautical Compass / Ship Wheel */}
      <g transform="translate(120, 70)">
        <circle cx="0" cy="0" r="35" fill="none" stroke="#38BDF8" strokeWidth="4" />
        <circle cx="0" cy="0" r="25" fill="#0284C7" />
        <path d="M 0,-45 L 0,45 M -45,0 L 45,0" stroke="#7DD3FC" strokeWidth="4" />
        <path d="M -30,-30 L 30,30 M -30,30 L 30,-30" stroke="#0369A1" strokeWidth="4" />
        <circle cx="0" cy="0" r="10" fill="#F0F9FF" />
        <text x="0" y="55" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#BAE6FD">Navigate the Phrases</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#1E3A8A" rx="20" />
      {/* Sea Waves and Phrases */}
      <g transform="translate(120, 70)">
        <path d="M -80,10 Q -60,-10 -40,10 T 0,10 T 40,10 T 80,10" fill="none" stroke="#60A5FA" strokeWidth="3" />
        <path d="M -80,25 Q -60,5 -40,25 T 0,25 T 40,25 T 80,25" fill="none" stroke="#3B82F6" strokeWidth="3" />
        <rect x="-30" y="-30" width="60" height="20" fill="#FDE047" rx="4" />
        <text x="0" y="-16" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#78350F">Modifier</text>
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#0C4A6E" rx="20" />
      {/* Anchor */}
      <g transform="translate(120, 70)">
        <circle cx="0" cy="-25" r="6" fill="none" stroke="#94A3B8" strokeWidth="3" />
        <path d="M 0,-19 L 0,25" stroke="#94A3B8" strokeWidth="4" />
        <path d="M -15,-10 L 15,-10" stroke="#94A3B8" strokeWidth="4" />
        <path d="M -30,15 Q 0,40 30,15" fill="none" stroke="#94A3B8" strokeWidth="4" />
        <polygon points="-35,10 -25,15 -30,20" fill="#94A3B8" />
        <polygon points="35,10 25,15 30,20" fill="#94A3B8" />
        <text x="0" y="55" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#E2E8F0">Tap the Anchors!</text>
      </g>
    </svg>
  );
});

// ─── LABELS (100% ENGLISH) ──────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Verbal Voyage",
    
    // T1: Gerund Phrases (DROP GAME)
    t1_title: "Gerund Phrases",
    t1_text: "A Gerund Phrase begins with an -ing verb and includes its modifiers or objects. The ENTIRE phrase functions as a NOUN (subject, object, or object of a preposition).",
    t1_b1: "Example: [Sailing the open sea] is an adventure.",
    t1_b2: "If you can replace the whole phrase with 'It', it's a gerund.",
    t1_b3: "Functions as a Noun.",
    t1_inst: "Sort the underlined phrases! Is it acting as a NOUN (Gerund) or just a regular Verb phrase?",
    t1_bucket_ger: "Gerund Phrase (Noun)",
    t1_bucket_vrb: "Verb Phrase (Action)",
    t1_item_g1: "Navigating storms is hard.", t1_item_g2: "He loves charting maps.",
    t1_item_v1: "The crew is charting maps.", t1_item_v2: "We are navigating storms.",
    t1_q: "In 'Swimming in the ocean makes me happy', what is the subject of the sentence?",
    t1_q_a: "Swimming in the ocean", t1_q_b: "ocean", t1_q_c: "happy", t1_q_d: "makes",

    // T2: Participial Phrases (MAGNET MATCH)
    t2_title: "Participial Phrases",
    t2_text: "A Participial Phrase begins with a present (-ing) or past (-ed, -en) participle. Unlike gerunds, the entire phrase functions as an ADJECTIVE modifying a noun.",
    t2_b1: "Example: The ship, [battered by the waves], finally arrived.",
    t2_b2: "It usually sits right next to the noun it describes.",
    t2_b3: "Functions as an Adjective.",
    t2_inst: "Magnet Match: Connect the Participial Phrase to the noun it modifies!",
    t2_l1: "Covered in barnacles,", t2_r1: "...the old hull creaked.",
    t2_l2: "Looking through the spyglass,", t2_r2: "...the captain saw land.",
    t2_l3: "Torn by the wind,", t2_r3: "...the sails flapped wildly.",
    t2_q: "What part of speech does a Participial Phrase act as?",
    t2_q_a: "Adjective", t2_q_b: "Noun", t2_q_c: "Adverb", t2_q_d: "Preposition",

    // T3: Infinitive Phrases (HIGHLIGHT)
    t3_title: "Radar Scan: Infinitives",
    t3_text: "An Infinitive Phrase begins with 'to' + base verb, plus any modifiers/objects. It can act as a noun, adjective, or adverb.",
    t3_b1: "Look for 'to' + an action verb.",
    t3_b2: "Include the words that complete the thought.",
    t3_b3: "Example: He wanted [to sail across the world].",
    t3_inst: "Highlight the complete INFINITIVE PHRASE in the captain's log!",
    t3_tok0: "The", t3_tok1: "captain's", t3_tok2: "only", t3_tok3: "goal", t3_tok4: "was", t3_tok5: "to", t3_tok6: "find", t3_tok7: "the", t3_tok8: "hidden", t3_tok9: "treasure.",
    t3_q: "In 'I read the manual to understand the radar', the infinitive phrase 'to understand the radar' acts as:",
    t3_q_a: "An Adverb (tells why)", t3_q_b: "A Noun (the subject)", t3_q_c: "An Adjective (describes manual)", t3_q_d: "A Preposition",

    // T4: Verbal Identification (SLINGSHOT)
    t4_title: "Identify the Cargo",
    t4_text: "Don't get tricked! -Ing words can be Gerunds (nouns) or Participles (adjectives). 'To' phrases can be Infinitives or just Prepositions.",
    t4_b1: "Gerund = Thing/Idea.",
    t4_b2: "Participle = Description.",
    t4_b3: "Infinitive = To + Verb.",
    t4_inst: "Shoot the asteroid that contains a PARTICIPIAL PHRASE (acting as an adjective)!",
    t4_target_1: "The sailor, exhausted from the storm, slept.", // Correct
    t4_target_2: "Exhausting the crew was a bad idea.",
    t4_target_3: "The captain wants to exhaust the crew.",
    t4_q: "Which of the following is an Infinitive Phrase?",
    t4_q_a: "To drop the anchor", t4_q_b: "To the dark island", t4_q_c: "Dropping the anchor", t4_q_d: "Dropped anchor",

    // T5: Fun Catch
    t5_title: "Master Navigator",
    t5_text: "You have successfully navigated the Verbal Voyage! You can now identify complex phrases and use them to build advanced, Grade 8 sentences.",
    t5_b1: "Gerunds name things.",
    t5_b2: "Participles describe.",
    t5_b3: "Catch 6 Anchors!",
    t5_inst: "Tap the 6 heavy anchors (⚓) to secure the ship!",
    t5_q: "If a phrase starts with 'to' and is followed by a place (like 'to the ship'), what is it?",
    t5_q_a: "A Prepositional Phrase", t5_q_b: "An Infinitive Phrase", t5_q_c: "A Gerund Phrase", t5_q_d: "A Clause",
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
        { id: "ger", label: "t1_bucket_ger" },
        { id: "vrb", label: "t1_bucket_vrb" },
      ],
      items: [
        { text: "t1_item_g1", bucketId: "ger" },
        { text: "t1_item_v1", bucketId: "vrb" },
        { text: "t1_item_g2", bucketId: "ger" },
        { text: "t1_item_v2", bucketId: "vrb" },
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
      correctIndices: [5, 6, 7, 8, 9], // "to find the hidden treasure."
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
      tapCount: { emoji: "⚓", count: 6 }, 
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
  icon: "⚓",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const VerbalK8Explorer = memo(function VerbalK8Explorer({
  color = "#0284C7", // Light Blue 600 (Nautical theme)
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
      explorerId="english_k8_verbal_voyage" 
      color={color} 
      lang="en" 
      onDone={onDone} 
    />
  );
});

export default VerbalK8Explorer;
