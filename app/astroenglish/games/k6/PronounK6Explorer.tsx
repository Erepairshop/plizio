"use client";
// PronounK6Explorer.tsx — AstroEnglish Grade 6: i1 Pronoun Peninsula
// Topics: 1) Subject vs Object Pronouns 2) Possessive Pronouns 3) Reflexive Pronouns 4) Antecedent Agreement 5) Pronoun Catch

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric) ───────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#2E1065" rx="20" />
      {/* Subject vs Object scales */}
      <g transform="translate(120, 90)">
        <polygon points="-40,0 40,0 0,-20" fill="#7E22CE" />
        <rect x="-60" y="-30" width="40" height="30" fill="#FBBF24" rx="4" />
        <text x="-40" y="-10" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#78350F">SHE</text>
        <rect x="20" y="-30" width="40" height="30" fill="#F59E0B" rx="4" />
        <text x="40" y="-10" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#78350F">HER</text>
        <rect x="-10" y="0" width="20" height="40" fill="#581C87" />
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#1E1B4B" rx="20" />
      {/* Possession Rings */}
      <g transform="translate(120, 70)">
        <ellipse cx="0" cy="0" rx="60" ry="20" fill="none" stroke="#A855F7" strokeWidth="4" />
        <ellipse cx="0" cy="0" rx="40" ry="10" fill="none" stroke="#D8B4FE" strokeWidth="2" />
        <circle cx="0" cy="0" r="15" fill="#FBBF24" />
        <text x="0" y="45" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#FDE68A">MINE / YOURS</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#4C1D95" rx="20" />
      {/* Mirror (Reflexive) */}
      <g transform="translate(120, 70)">
        <rect x="-40" y="-30" width="80" height="60" fill="#C084FC" rx="10" />
        <rect x="-35" y="-25" width="70" height="50" fill="#FAF5FF" rx="5" />
        <text x="-10" y="5" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#7E22CE">I</text>
        <path d="M 0,0 L 20,0" stroke="#9333EA" strokeWidth="2" markerEnd="url(#arrow)" />
        <text x="15" y="20" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#9333EA">MYSELF</text>
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#020617" rx="20" />
      {/* Saturnia rings */}
      <circle cx="120" cy="70" r="30" fill="#6B21A8" />
      <path d="M 60,70 Q 120,100 180,70 Q 120,40 60,70" fill="none" stroke="#FDE047" strokeWidth="4" />
      <path d="M 40,70 Q 120,110 200,70 Q 120,30 40,70" fill="none" stroke="#FBBF24" strokeWidth="2" opacity="0.6" />
      <circle cx="120" cy="70" r="30" fill="#7E22CE" clipPath="url(#top-half)" opacity="0.8" />
      <text x="120" y="125" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#D8B4FE">Tap the floating pronouns!</text>
    </svg>
  );
});

// ─── LABELS (100% ENGLISH) ──────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Pronoun Peninsula",
    
    // T1: Subject vs Object
    t1_title: "Subject vs. Object",
    t1_text: "Pronouns change their form based on their job! SUBJECT pronouns do the action (I, He, She, We, They). OBJECT pronouns receive the action (Me, Him, Her, Us, Them).",
    t1_b1: "Subject: 'She' threw the ball.",
    t1_b2: "Object: The ball hit 'her'.",
    t1_b3: "Sort them before they hit the ground!",
    t1_inst: "Catch the falling words! Are they Subject (doers) or Object (receivers) pronouns?",
    t1_bucket_subj: "Subject (He/They)",
    t1_bucket_obj: "Object (Him/Them)",
    t1_item_s1: "She", t1_item_s2: "We", t1_item_s3: "They",
    t1_item_o1: "Her", t1_item_o2: "Us", t1_item_o3: "Them",
    t1_q: "Which of the following is an OBJECT pronoun?",
    t1_q_a: "him", t1_q_b: "he", t1_q_c: "they", t1_q_d: "we",

    // T2: Possessive Pronouns
    t2_title: "Showing Ownership",
    t2_text: "Possessive pronouns show that something belongs to someone. Independent possessives stand alone (mine, yours, hers, theirs) without a noun after them.",
    t2_b1: "Adjective: That is 'my' ship.",
    t2_b2: "Pronoun: That ship is 'mine'.",
    t2_b3: "No apostrophes are used in theirs or hers!",
    t2_inst: "Match the Subject pronoun to its absolute Possessive form!",
    t2_l1: "I", t2_r1: "mine",
    t2_l2: "They", t2_r2: "theirs",
    t2_l3: "She", t2_r3: "hers",
    t2_q: "Which word correctly completes: 'The victory is ___'?",
    t2_q_a: "ours", t2_q_b: "our", t2_q_c: "we", t2_q_d: "us",

    // T3: Reflexive Pronouns (SLINGSHOT JÁTÉK)
    t3_title: "The Mirror Pronouns",
    t3_text: "Reflexive pronouns end in -self or -selves. We use them when the subject and the object are the SAME person. (e.g., I saw myself in the mirror).",
    t3_b1: "Singular: myself, yourself, himself.",
    t3_b2: "Plural: ourselves, yourselves, themselves.",
    t3_b3: "Shoot the correct pronoun to complete the sentence!",
    t3_inst: "The robot repaired ___.", // A kérdés a csúzlihoz
    t3_target_1: "itself", // Helyes
    t3_target_2: "him",
    t3_target_3: "themselves",
    t3_q: "What is the plural of 'yourself'?",
    t3_q_a: "yourselves", t3_q_b: "yourselfs", t3_q_c: "ourselves", t3_q_d: "themself",

    // T4: Antecedent Agreement
    t4_title: "Pronoun Agreement",
    t4_text: "The 'antecedent' is the noun the pronoun replaces. The pronoun MUST agree with its antecedent in number (singular/plural) and gender.",
    t4_b1: "Correct: 'John' brought 'his' bag.",
    t4_b2: "Incorrect: 'The astronauts' lost 'his' map.",
    t4_b3: "Match plural nouns with plural pronouns (they/their).",
    t4_inst: "Highlight the correct pronoun that agrees with 'the team'!",
    t4_tok0: "The", t4_tok1: "team", t4_tok2: "of", t4_tok3: "scientists", t4_tok4: "packed", t4_tok5: "their", t4_tok6: "equipment.",
    t4_q: "What is wrong with: 'Every student must bring their own pencil' in strict formal writing?",
    t4_q_a: "'Student' is singular, but 'their' is plural.", t4_q_b: "Nothing is wrong.", t4_q_c: "It needs a comma.", t4_q_d: "Pencil is misspelled.",

    // T5: Fun Catch
    t5_title: "Pronoun Orbit",
    t5_text: "Excellent job navigating the Pronoun Peninsula! Collect the glowing spheres to power the Saturnia hyperdrive.",
    t5_b1: "Pronouns replace nouns.",
    t5_b2: "Keep your antecedents clear.",
    t5_b3: "Catch 6 spheres!",
    t5_inst: "Tap the 6 purple spheres (🟣) orbiting the planet!",
    t5_q: "Which word is a Subject Pronoun?",
    t5_q_a: "We", t5_q_b: "Us", t5_q_c: "Our", t5_q_d: "Ourselves",
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
      // FIGYELEM: ITT A JELENLEG BEÉPÍTETT ÚJ FIZIKA MOTOR (GRAVITY DROP)
      // Ha az ExplorerEngine még nem ismeri a "physics-bucket" típust, 
      // cseréld "drag-to-bucket"-re a teszteléshez!
      type: "physics-bucket", 
      buckets: [
        { id: "subj", label: "t1_bucket_subj" },
        { id: "obj", label: "t1_bucket_obj" },
      ],
      items: [
        { text: "t1_item_s1", bucketId: "subj" },
        { text: "t1_item_o1", bucketId: "obj" },
        { text: "t1_item_s2", bucketId: "subj" },
        { text: "t1_item_o2", bucketId: "obj" },
        { text: "t1_item_s3", bucketId: "subj" },
        { text: "t1_item_o3", bucketId: "obj" },
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
      type: "match-pairs",
      pairs: [
        { left: "t2_l1", right: "t2_r1" },
        { left: "t2_l2", right: "t2_r2" },
        { left: "t2_l3", right: "t2_r3" },
      ],
      instruction: "t2_inst",
      hint1: "t2_b2",
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
    svg: () => <Topic3Svg />,
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      // FIGYELEM: ITT A JELENLEG BEÉPÍTETT ÚJ FIZIKA MOTOR (SLINGSHOT)
      type: "physics-slingshot",
      question: "t3_inst", // Ideális esetben kiírjuk a kérdést
      targets: [
        { id: "t1", text: "t3_target_1", isCorrect: true }, // itself
        { id: "t2", text: "t3_target_2", isCorrect: false }, // him
        { id: "t3", text: "t3_target_3", isCorrect: false }, // themselves
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
      type: "highlight-text",
      tokens: ["t4_tok0", "t4_tok1", "t4_tok2", "t4_tok3", "t4_tok4", "t4_tok5", "t4_tok6"],
      correctIndices: [5], // "their"
      instruction: "t4_inst",
      hint1: "t4_b3",
      hint2: "t4_b1",
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
      tapCount: { emoji: "🟣", count: 6 }, 
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
  icon: "👤",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const PronounK6Explorer = memo(function PronounK6Explorer({
  color = "#9333EA", // Purple-600 for the Saturnia gas giant theme
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
      explorerId="english_k6_pronoun_peninsula" 
      color={color} 
      lang="en" // Forcing English ELA
      onDone={onDone} 
    />
  );
});

export default PronounK6Explorer;
