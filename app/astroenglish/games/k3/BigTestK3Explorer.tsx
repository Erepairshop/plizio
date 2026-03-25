"use client";
// BigTestK3Explorer.tsx — AstroEnglish Grade 3: i9 Big Test
// Topics: 1) Nouns & Verbs Review 2) Adjectives & Adverbs 3) Compound Sentences 4) Prefixes & Meaning 5) Victory Trophies

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric) ───────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#0F172A" rx="20" />
      {/* Grammar Sorting Machine */}
      <rect x="70" y="40" width="100" height="60" fill="#334155" rx="10" />
      <path d="M 120,20 L 140,40 L 100,40 Z" fill="#94A3B8" />
      <rect x="60" y="100" width="55" height="25" fill="#3B82F6" rx="5" />
      <text x="87.5" y="116" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#EFF6FF">Plural Nouns</text>
      <rect x="125" y="100" width="55" height="25" fill="#EF4444" rx="5" />
      <text x="152.5" y="116" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#FEF2F2">Past Verbs</text>
      <circle cx="120" cy="70" r="15" fill="#FBBF24" />
      <text x="120" y="75" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#78350F">?</text>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#1E1B4B" rx="20" />
      {/* Adjective vs Adverb Target */}
      <g transform="translate(120, 70)">
        <circle cx="0" cy="0" r="40" fill="none" stroke="#6366F1" strokeWidth="4" />
        <circle cx="0" cy="0" r="25" fill="none" stroke="#8B5CF6" strokeWidth="4" />
        <circle cx="0" cy="0" r="10" fill="#D946EF" />
        <path d="M -60,0 L -15,0" stroke="#FBBF24" strokeWidth="3" markerEnd="url(#arrow)" />
        <text x="-70" y="4" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#FDE68A">fast</text>
        <text x="0" y="35" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#C4B5FD">or faster?</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#064E3B" rx="20" />
      {/* Compound Sentence Bridge */}
      <g transform="translate(120, 70)">
        <rect x="-100" y="-15" width="80" height="30" fill="#047857" rx="5" />
        <text x="-60" y="4" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#A7F3D0">I ran fast,</text>
        
        <rect x="-10" y="-10" width="20" height="20" fill="#F59E0B" rx="3" />
        <text x="0" y="3" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#78350F">BUT</text>
        
        <rect x="20" y="-15" width="80" height="30" fill="#059669" rx="5" />
        <text x="60" y="4" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#A7F3D0">I was late.</text>
      </g>
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#4A044E" rx="20" />
      {/* Prefix / Suffix Search */}
      <g transform="translate(120, 70)">
        <rect x="-70" y="-15" width="140" height="30" fill="#701A75" rx="5" />
        <text x="0" y="4" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#F9A8D4">
          <tspan fill="#FDE047">re</tspan>
          <tspan fill="#E879F9">build</tspan>
        </text>
        <circle cx="-15" cy="0" r="14" fill="none" stroke="#38BDF8" strokeWidth="2" />
        <line x1="-5" y1="10" x2="5" y2="20" stroke="#38BDF8" strokeWidth="3" />
        <text x="0" y="35" textAnchor="middle" fontSize="10" fill="#FBCFE8">Find the prefix!</text>
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#171717" rx="20" />
      {/* Golden Victory Trophies */}
      <g transform="translate(120, 80)">
        {/* Center Trophy */}
        <polygon points="-20,-20 20,-20 10,10 -10,10" fill="#FBBF24" />
        <rect x="-15" y="10" width="30" height="5" fill="#B45309" />
        <rect x="-25" y="15" width="50" height="10" fill="#F59E0B" rx="2" />
        <path d="M -20,-15 C -40,-15 -30,5 -10,5" fill="none" stroke="#FBBF24" strokeWidth="4" />
        <path d="M 20,-15 C 40,-15 30,5 10,5" fill="none" stroke="#FBBF24" strokeWidth="4" />
        <text x="0" y="0" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#78350F">K3</text>
        
        <circle cx="-60" cy="-30" r="3" fill="#FEF08A" />
        <circle cx="70" cy="-20" r="4" fill="#FEF08A" />
        <circle cx="-50" cy="20" r="2" fill="#FEF08A" />
        <circle cx="50" cy="30" r="3" fill="#FEF08A" />
        <text x="0" y="45" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#FDE68A">Tap the trophies!</text>
      </g>
    </svg>
  );
});

// ─── LABELS (100% ENGLISH) ──────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "The K3 Big Test",
    
    // T1: Nouns & Verbs Review
    t1_title: "1. The Great Grammar Sort",
    t1_text: "Let's review! Do you remember Irregular Plural Nouns (like children) and Irregular Past Tense Verbs (like went)?",
    t1_b1: "Plural Nouns mean 'more than one' person, place, or thing.",
    t1_b2: "Past Verbs show an action that already happened.",
    t1_b3: "Sort the tricky words into the correct buckets!",
    t1_inst: "Is the word a Plural Noun (many things) or a Past Verb (action already done)?",
    t1_bucket_noun: "Plural Noun",
    t1_bucket_verb: "Past Verb",
    t1_item_n1: "children", t1_item_n2: "mice",
    t1_item_v1: "went", t1_item_v2: "saw",
    t1_q: "Which word is an irregular past tense verb?",
    t1_q_a: "ran", t1_q_b: "geese", t1_q_c: "people", t1_q_d: "teeth",

    // T2: Adjectives & Adverbs
    t2_title: "2. Adverb & Adjective Check",
    t2_text: "Adjectives describe nouns (The FAST ship). Adverbs describe how an action is done (It flew QUICKLY). We can also use '-er' to compare things!",
    t2_b1: "Use '-ly' for how an action happens.",
    t2_b2: "Use '-er' to compare two things.",
    t2_b3: "Choose the word that fits perfectly.",
    t2_inst: "Fill in the gap to compare the two planets correctly!",
    t2_sentence: "Jupiter is much ___ than Earth.",
    t2_c1: "bigger", t2_c2: "biggest", t2_c3: "big",
    t2_q: "Which word is an adverb?",
    t2_q_a: "loudly", t2_q_b: "loud", t2_q_c: "louder", t2_q_d: "loudest",

    // T3: Compound Sentences
    t3_title: "3. Sentence Builder",
    t3_text: "A compound sentence joins two complete thoughts together using a comma and a conjunction (and, but, so, or).",
    t3_b1: "Make sure both parts have a subject and a verb.",
    t3_b2: "Don't forget the comma before the joining word!",
    t3_b3: "Put the sentence in the right order.",
    t3_inst: "Drag the blocks to build a correct Compound Sentence!",
    t3_w1: "We", t3_w2: "ran", t3_w3: "fast,", t3_w4: "but", t3_w5: "we", t3_w6: "lost.",
    t3_q: "Which of these is a conjunction used to join sentences?",
    t3_q_a: "because", t3_q_b: "quickly", t3_q_c: "spaceship", t3_q_d: "smaller",

    // T4: Prefixes & Meaning
    t4_title: "4. Prefix & Meaning Hunt",
    t4_text: "Words have special parts. Prefixes (like un-, re-, mis-) go at the beginning to change the meaning.",
    t4_b1: "'re-' means again.",
    t4_b2: "'mis-' means wrongly.",
    t4_b3: "Find the word with a prefix in the sentence!",
    t4_inst: "Highlight the word that has a PREFIX (a starting part that changes the meaning)!",
    t4_tok0: "The", t4_tok1: "clever", t4_tok2: "pilot", t4_tok3: "will", t4_tok4: "rebuild", t4_tok5: "the", t4_tok6: "engine.",
    t4_q: "What does 'misspell' mean?",
    t4_q_a: "To spell something wrong.", t4_q_b: "To spell it again.", t4_q_c: "To spell before.", t4_q_d: "A person who spells.",

    // T5: Victory Trophies
    t5_title: "5. K3 Champion!",
    t5_text: "OUTSTANDING! You have mastered the K3 English Galaxy. You know your verbs, nouns, prefixes, and compound sentences!",
    t5_b1: "You passed the Big Test.",
    t5_b2: "You are ready for Grade 4.",
    t5_b3: "Collect your golden trophies!",
    t5_inst: "Tap the 6 golden trophies (🏆) to celebrate your victory!",
    t5_q: "Are you a grammar master?",
    t5_q_a: "Yes, I am!", t5_q_b: "Absolutely!", t5_q_c: "100%", t5_q_d: "All of the above!",
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
        { id: "noun", label: "t1_bucket_noun" },
        { id: "verb", label: "t1_bucket_verb" },
      ],
      items: [
        { text: "t1_item_n1", bucketId: "noun" },
        { text: "t1_item_v1", bucketId: "verb" },
        { text: "t1_item_n2", bucketId: "noun" },
        { text: "t1_item_v2", bucketId: "verb" },
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
