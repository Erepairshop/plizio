"use client";
// AdjectiveExplorerK2 — Island i3: Adjektive & Gegenteile (Adjectives)
// Topics: 1) Wie-Wörter (Adjektive)  2) Gegenteile (Opposites)  3) Synonyme (Similar words)

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSTRATIONS ──────────────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="adjGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#C084FC" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#adjGrad1)" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-50" y="5" fontSize="40" textAnchor="middle">🌳</text>
        <text x="-50" y="30" fontSize="14" fontWeight="bold" fill="#4C1D95" textAnchor="middle">groß</text>
        
        <text x="50" y="5" fontSize="20" textAnchor="middle">🐭</text>
        <text x="50" y="30" fontSize="14" fontWeight="bold" fill="#4C1D95" textAnchor="middle">klein</text>
        
        <text x="0" y="-30" fontSize="16" fontWeight="bold" fill="#6D28D9" textAnchor="middle">Wie ist es?</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FFF1F2" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-50" y="0" fontSize="30" textAnchor="middle">🔥</text>
        <text x="-50" y="25" fontSize="14" fontWeight="bold" fill="#E11D48" textAnchor="middle">heiß</text>
        
        <path d="M -20,0 L 20,0 M -5,-5 L -20,0 L -5,5 M 5,-5 L 20,0 L 5,5" fill="none" stroke="#9CA3AF" strokeWidth="2" />
        
        <text x="50" y="0" fontSize="30" textAnchor="middle">🧊</text>
        <text x="50" y="25" fontSize="14" fontWeight="bold" fill="#0369A1" textAnchor="middle">kalt</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="adjGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#34D399" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#adjGrad3)" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-40" y="-10" fontSize="30" textAnchor="middle">😀</text>
        <text x="-40" y="20" fontSize="14" fontWeight="bold" fill="#047857" textAnchor="middle">froh</text>
        
        <text x="0" y="-10" fontSize="20" fontWeight="bold" fill="#10B981" textAnchor="middle">=</text>
        
        <text x="40" y="-10" fontSize="30" textAnchor="middle">😊</text>
        <text x="40" y="20" fontSize="14" fontWeight="bold" fill="#047857" textAnchor="middle">glücklich</text>
        
        <text x="0" y="45" fontSize="12" fill="#065F46" textAnchor="middle">Wörter mit gleicher Bedeutung</text>
      </g>
    </svg>
  );
});

// ─── LABELS (Translations) ───────────────────────────────────────────
// K2 Rule: 'de' has full text. 'en/hu/ro' have ONLY UI/instructions.

const LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Wie-Wörter",

    // Topic 1
    t1_title: "Was sind Adjektive?",
    t1_text: "Adjektive (Wie-Wörter) beschreiben, wie jemand oder etwas ist. Sie machen unsere Sätze bunt und genau! Der Baum ist groß. Die Maus ist klein. Die Blume ist schön.",
    t1_b1: "Sie antworten auf die Frage: Wie?",
    t1_b2: "Adjektive schreibt man klein",
    t1_b3: "Beispiele: groß, klein, rot, schnell",
    t1_inst: "Ist das Wort ein Nomen (Namenwort) oder ein Adjektiv (Wie-Wort)? Sortiere sie!",
    t1_h1: "Kannst du 'der, die, das' davor setzen? Dann ist es ein Nomen.",
    t1_h2: "Beschreibt es eine Eigenschaft (wie groß oder rot)? Dann ist es ein Adjektiv.",
    t1_bucket_nomen: "Nomen 🏷️",
    t1_bucket_adj: "Adjektiv 🎨",
    t1_item_baum: "Baum", t1_item_hund: "Hund",
    t1_item_gross: "groß", t1_item_schnell: "schnell",
    t1_item_haus: "Haus", t1_item_rot: "rot",
    t1_q: "Welches Wort ist ein Adjektiv (Wie-Wort)?",
    t1_q_a: "schön", t1_q_b: "Katze", t1_q_c: "laufen", t1_q_d: "die",

    // Topic 2
    t2_title: "Gegenteile finden",
    t2_text: "Viele Adjektive haben ein Gegenteil. Wenn etwas nicht heiß ist, ist es kalt! Wenn jemand nicht groß ist, ist er klein. Das nennt man Gegensätze.",
    t2_b1: "heiß ↔ kalt",
    t2_b2: "groß ↔ klein",
    t2_b3: "schnell ↔ langsam",
    t2_inst: "Finde das Gegenteil! Verbinde die Paare.",
    t2_h1: "Was ist das Gegenteil von groß? Klein!",
    t2_h2: "Heiß passt zu kalt. Schnell passt zu langsam.",
    t2_l1: "heiß 🔥", t2_r1: "kalt 🧊",
    t2_l2: "groß 🐘", t2_r2: "klein 🐭",
    t2_l3: "schnell 🐆", t2_r3: "langsam 🐌",
    t2_l4: "gut 👍", t2_r4: "schlecht 👎",
    t2_q: "Was ist das Gegenteil von 'alt'?",
    t2_q_a: "neu", t2_q_b: "schön", t2_q_c: "dick", t2_q_d: "kalt",

    // Topic 3
    t3_title: "Verwandte Wörter (Synonyme)",
    t3_text: "Manchmal gibt es verschiedene Wörter, die fast das Gleiche bedeuten. Das macht unsere Sprache reicher! 'Froh' und 'glücklich' bedeuten fast dasselbe.",
    t3_b1: "froh = glücklich",
    t3_b2: "schnell = flink",
    t3_b3: "schön = hübsch",
    t3_inst: "Welches Wort bedeutet das Gleiche? 'Der Junge ist froh.'",
    t3_h1: "Suche nach einem anderen Wort für 'froh'.",
    t3_h2: "'glücklich' bedeutet das Gleiche wie froh.",
    t3_gap_text: "Der Junge ist {gap}.",
    t3_opt_gluecklich: "glücklich", t3_opt_traurig: "traurig", t3_opt_wuetend: "wütend",
    t3_q: "Welches Wort bedeutet das Gleiche wie 'schnell'?",
    t3_q_a: "flink", t3_q_b: "müde", t3_q_c: "langsam", t3_q_d: "groß",
  },
  en: {
    explorer_title: "Adjectives",
    t1_inst: "Is the word a Noun (Nomen) or an Adjective (Adjektiv)? Sort them!",
    t1_h1: "Can you put 'der, die, das' in front? Then it's a noun.",
    t1_h2: "Does it describe something (like big or red)? Then it's an adjective.",
    t1_bucket_nomen: "Noun 🏷️",
    t1_bucket_adj: "Adjective 🎨",

    t2_inst: "Find the opposite! Match the pairs.",
    t2_h1: "What is the opposite of big (groß)? Small (klein)!",
    t2_h2: "Heiß (hot) goes with kalt (cold). Schnell (fast) goes with langsam (slow).",

    t3_inst: "Which word means the same? 'Der Junge ist froh.' (The boy is glad.)",
    t3_h1: "Look for another word for 'froh' (glad).",
    t3_h2: "'glücklich' (happy) means the same as froh.",
  },
  hu: {
    explorer_title: "Melléknevek",
    t1_inst: "Főnév (Nomen) vagy Melléknév (Adjektiv)? Válogasd szét őket!",
    t1_h1: "Oda tudod tenni elé, hogy 'der, die, das'? Akkor főnév.",
    t1_h2: "Tulajdonságot ír le (pl. nagy, piros)? Akkor melléknév.",
    t1_bucket_nomen: "Főnév 🏷️",
    t1_bucket_adj: "Melléknév 🎨",

    t2_inst: "Keresd meg az ellentétét! Kösd össze a párokat.",
    t2_h1: "Mi a 'groß' (nagy) ellentéte? A 'klein' (kicsi)!",
    t2_h2: "A heiß (forró) a kalt-hoz (hideg) illik. A schnell (gyors) a langsam-hoz (lassú).",

    t3_inst: "Melyik szó jelenti ugyanazt? 'Der Junge ist froh.' (A fiú vidám.)",
    t3_h1: "Keress egy rokon értelmű szót a 'froh' (vidám) helyett.",
    t3_h2: "A 'glücklich' (boldog) jelentése majdnem ugyanaz.",
  },
  ro: {
    explorer_title: "Adjective",
    t1_inst: "Este cuvântul Substantiv (Nomen) sau Adjectiv (Adjektiv)? Sortează-le!",
    t1_h1: "Poți pune 'der, die, das' în față? Atunci este substantiv.",
    t1_h2: "Descrie o proprietate (cum ar fi mare sau roșu)? Atunci este adjectiv.",
    t1_bucket_nomen: "Substantiv 🏷️",
    t1_bucket_adj: "Adjectiv 🎨",

    t2_inst: "Găsește opusul! Potrivește perechile.",
    t2_h1: "Care este opusul lui groß (mare)? Klein (mic)!",
    t2_h2: "Heiß (fierbinte) merge cu kalt (rece). Schnell (rapid) cu langsam (încet).",

    t3_inst: "Ce cuvânt înseamnă același lucru? 'Der Junge ist froh.' (Băiatul e bucuros.)",
    t3_h1: "Caută un alt cuvânt pentru 'froh'.",
    t3_h2: "'glücklich' (fericit) înseamnă aproape același lucru.",
  },
};

// ─── TOPICS ─────────────────────────────────────────────────────────

const TOPICS: TopicDef[] = [
  // ── Topic 1: Identifying Adjectives vs Nouns (drag-to-bucket) ──
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: () => <Topic1Svg />,
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [
        { id: "nomen", label: "t1_bucket_nomen" },
        { id: "adjektiv", label: "t1_bucket_adj" },
      ],
      items: [
        { text: "t1_item_baum", bucketId: "nomen" },
        { text: "t1_item_gross", bucketId: "adjektiv" },
        { text: "t1_item_haus", bucketId: "nomen" },
        { text: "t1_item_schnell", bucketId: "adjektiv" },
        { text: "t1_item_hund", bucketId: "nomen" },
        { text: "t1_item_rot", bucketId: "adjektiv" },
      ],
      instruction: "t1_inst",
      hint1: "t1_h1",
      hint2: "t1_h2",
    },
    quiz: {
      question: "t1_q",
      choices: ["t1_q_a", "t1_q_b", "t1_q_c", "t1_q_d"],
      answer: "t1_q_a", // schön
    },
  },
  // ── Topic 2: Opposites (match-pairs) ──
  {
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: () => <Topic2Svg />,
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "match-pairs",
      pairs: [
        { left: "t2_l1", right: "t2_r1" }, // heiß -> kalt
        { left: "t2_l2", right: "t2_r2" }, // groß -> klein
        { left: "t2_l3", right: "t2_r3" }, // schnell -> langsam
        { left: "t2_l4", right: "t2_r4" }, // gut -> schlecht
      ],
      instruction: "t2_inst",
      hint1: "t2_h1",
      hint2: "t2_h2",
    },
    quiz: {
      question: "t2_q",
      choices: ["t2_q_a", "t2_q_b", "t2_q_c", "t2_q_d"],
      answer: "t2_q_a", // neu
    },
  },
  // ── Topic 3: Synonyms (gap-fill) ──
  {
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: () => <Topic3Svg />,
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "gap-fill",
      sentence: "t3_gap_text",
      options: ["t3_opt_gluecklich", "t3_opt_traurig", "t3_opt_wuetend"],
      answer: "t3_opt_gluecklich", // glücklich
      instruction: "t3_inst",
      hint1: "t3_h1",
      hint2: "t3_h2",
    },
    quiz: {
      question: "t3_q",
      choices: ["t3_q_a", "t3_q_b", "t3_q_c", "t3_q_d"],
      answer: "t3_q_a", // flink
    },
  },
];

// ─── DEF ────────────────────────────────────────────────────────────

const DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "🎨",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const AdjectiveExplorerK2 = memo(function AdjectiveExplorerK2({
  color = "#8B5CF6",
  onDone,
  lang = "de",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={2} explorerId="deutsch_k2_adjective" color={color} lang={lang} onDone={onDone} />;
});

export default AdjectiveExplorerK2;
