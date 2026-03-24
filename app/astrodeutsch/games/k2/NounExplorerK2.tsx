"use client";
// NounExplorerK2 — Island i1: Nomen & Artikel (Nouns)
// Topics: 1) Nomen & der/die/das  2) Einzahl & Mehrzahl (Plural)  3) Nomen erkennen

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSTRATIONS ──────────────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="nounGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#nounGrad1)" rx="20" />
      <g transform="translate(120, 70)">
        <text x="0" y="-20" fontSize="18" fontWeight="bold" fill="#1D4ED8" textAnchor="middle">Menschen, Tiere, Dinge</text>
        <rect x="-75" y="5" width="40" height="30" rx="4" fill="#DBEAFE" stroke="#3B82F6" />
        <text x="-55" y="25" fontSize="14" fontWeight="bold" fill="#1D4ED8" textAnchor="middle">der</text>
        
        <rect x="-20" y="5" width="40" height="30" rx="4" fill="#FEE2E2" stroke="#EF4444" />
        <text x="0" y="25" fontSize="14" fontWeight="bold" fill="#B91C1C" textAnchor="middle">die</text>
        
        <rect x="35" y="5" width="40" height="30" rx="4" fill="#D1FAE5" stroke="#10B981" />
        <text x="55" y="25" fontSize="14" fontWeight="bold" fill="#047857" textAnchor="middle">das</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FFFBEB" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-50" y="-10" fontSize="30" textAnchor="middle">🍎</text>
        <text x="-50" y="20" fontSize="14" fontWeight="bold" fill="#B45309" textAnchor="middle">1 Apfel</text>
        
        <path d="M -15,-5 L 15,-5" stroke="#D97706" strokeWidth="2" markerEnd="url(#arrow)" />
        
        <text x="50" y="-10" fontSize="30" textAnchor="middle">🍎🍎</text>
        <text x="50" y="20" fontSize="14" fontWeight="bold" fill="#D97706" textAnchor="middle">3 Äpfel</text>
        <text x="0" y="45" fontSize="12" fontWeight="bold" fill="#92400E" textAnchor="middle">Einzahl ➔ Mehrzahl</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="nounGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#34D399" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#nounGrad3)" rx="20" />
      <g transform="translate(120, 70)">
        <text x="0" y="-10" fontSize="20" fill="#065F46" textAnchor="middle">Das kleine <tspan fontWeight="bold" fill="#059669">Kind</tspan> lacht.</text>
        <rect x="-10" y="10" width="20" height="20" fill="white" stroke="#10B981" strokeWidth="2" strokeDasharray="2 2" />
        <text x="0" y="25" fontSize="14" fontWeight="bold" fill="#10B981" textAnchor="middle">?</text>
        <text x="0" y="45" fontSize="12" fill="#047857" textAnchor="middle">Nomen = immer GROSS</text>
      </g>
    </svg>
  );
});

// ─── LABELS (Translations) ───────────────────────────────────────────
// RULES K2+: 'de' gets full content. 'en/hu/ro' get ONLY UI/instructions.

const LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Nomen & Artikel",

    // Topic 1
    t1_title: "Was sind Nomen?",
    t1_text: "Nomen (Namenwörter) sind Wörter für Menschen, Tiere, Pflanzen und Dinge. Sie haben immer einen Begleiter (Artikel): der, die oder das. Und wir schreiben sie immer groß!",
    t1_b1: "der (männlich): der Baum, der Hund",
    t1_b2: "die (weiblich): die Blume, die Katze",
    t1_b3: "das (sächlich): das Buch, das Haus",
    t1_inst: "Welcher Artikel passt? Sortiere die Nomen!",
    t1_h1: "Hund und Baum sind männlich (der).",
    t1_h2: "Katze ist weiblich (die), Haus ist sächlich (das).",
    t1_bucket_der: "der 🔵",
    t1_bucket_die: "die 🔴",
    t1_bucket_das: "das 🟢",
    t1_item_hund: "Hund", t1_item_baum: "Baum",
    t1_item_katze: "Katze", t1_item_blume: "Blume",
    t1_item_haus: "Haus", t1_item_buch: "Buch",
    t1_q: "Welches Wort ist ein Nomen (Namenwort)?",
    t1_q_a: "das Auto", t1_q_b: "schnell", t1_q_c: "laufen", t1_q_d: "schön",

    // Topic 2
    t2_title: "Einzahl und Mehrzahl",
    t2_text: "Wenn es nur ein Ding ist, heißt das Einzahl (Singular). Wenn es viele sind, heißt das Mehrzahl (Plural). In der Mehrzahl ist der Artikel immer 'die'!",
    t2_b1: "Einzahl: der Apfel 🍎",
    t2_b2: "Mehrzahl: die Äpfel 🍎🍎",
    t2_b3: "Der Artikel im Plural ist immer 'die'!",
    t2_inst: "Finde die Paare: Verbinde die Einzahl mit der Mehrzahl!",
    t2_h1: "Aus 'der Hund' wird 'die Hunde'.",
    t2_h2: "Aus 'das Buch' wird 'die Bücher'.",
    t2_l1: "der Hund 🐶", t2_r1: "die Hunde",
    t2_l2: "das Buch 📖", t2_r2: "die Bücher",
    t2_l3: "der Apfel 🍎", t2_r3: "die Äpfel",
    t2_l4: "die Maus 🐭", t2_r4: "die Mäuse",
    t2_q: "Wie heißt die Mehrzahl (Plural) von 'das Kind'?",
    t2_q_a: "die Kinder", t2_q_b: "die Kind", t2_q_c: "das Kinder", t2_q_d: "die Kinds",

    // Topic 3
    t3_title: "Nomen im Satz erkennen",
    t3_text: "Nomen sind leicht zu finden: Sie stehen oft nach einem Artikel (der, die, das, ein, eine) und sie sind die einzigen Wörter mitten im Satz, die groß geschrieben werden!",
    t3_b1: "Nomen schreibt man groß",
    t3_b2: "Sie haben oft einen Begleiter",
    t3_b3: "Sie bezeichnen Dinge, Tiere oder Menschen",
    t3_inst: "Welches Wort fehlt? Achte auf die Großschreibung!",
    t3_h1: "Ein Nomen mitten im Satz muss groß geschrieben werden.",
    t3_h2: "'Auto' ist richtig. 'auto' ist falsch.",
    t3_gap_text: "Das rote {gap} fährt sehr schnell.",
    t3_opt_c1: "Auto", t3_opt_c2: "auto", t3_opt_c3: "auTo",
    t3_q: "Warum schreiben wir 'Hund' groß?",
    t3_q_a: "Weil es ein Nomen ist", t3_q_b: "Weil es laut ist", t3_q_c: "Weil es am Satzende steht", t3_q_d: "Weil es ein Verb ist",
  },
  en: {
    explorer_title: "Nouns & Articles",
    t1_inst: "Which article fits? Sort the nouns!",
    t1_h1: "Hund and Baum are 'der'.",
    t1_h2: "Katze is 'die', Haus is 'das'.",
    t1_bucket_der: "der 🔵",
    t1_bucket_die: "die 🔴",
    t1_bucket_das: "das 🟢",
    
    t2_inst: "Find the pairs: Match the singular with the plural!",
    t2_h1: "'der Hund' becomes 'die Hunde'.",
    t2_h2: "'das Buch' becomes 'die Bücher'.",
    
    t3_inst: "Which word is missing? Pay attention to capitalization!",
    t3_h1: "A noun in the middle of a sentence must be capitalized.",
    t3_h2: "'Auto' is correct. 'auto' is wrong.",
  },
  hu: {
    explorer_title: "Főnevek és Névelők",
    t1_inst: "Melyik névelő illik hozzá? Válogasd szét a főneveket!",
    t1_h1: "Hund és Baum: 'der'.",
    t1_h2: "Katze: 'die', Haus: 'das'.",
    t1_bucket_der: "der 🔵",
    t1_bucket_die: "die 🔴",
    t1_bucket_das: "das 🟢",
    
    t2_inst: "Keresd meg a párokat: kösd össze az egyes számot a többes számmal!",
    t2_h1: "A 'der Hund'-ból 'die Hunde' lesz.",
    t2_h2: "A 'das Buch'-ból 'die Bücher' lesz.",
    
    t3_inst: "Melyik szó hiányzik? Figyelj a nagybetűkre!",
    t3_h1: "A mondat közepén álló főnevet nagybetűvel kell írni.",
    t3_h2: "Az 'Auto' a helyes. Az 'auto' hibás.",
  },
  ro: {
    explorer_title: "Substantive și Articole",
    t1_inst: "Ce articol se potrivește? Sortează substantivele!",
    t1_h1: "Hund și Baum sunt 'der'.",
    t1_h2: "Katze este 'die', Haus este 'das'.",
    t1_bucket_der: "der 🔵",
    t1_bucket_die: "die 🔴",
    t1_bucket_das: "das 🟢",
    
    t2_inst: "Găsește perechile: potrivește singularul cu pluralul!",
    t2_h1: "'der Hund' devine 'die Hunde'.",
    t2_h2: "'das Buch' devine 'die Bücher'.",
    
    t3_inst: "Ce cuvânt lipsește? Atenție la majuscule!",
    t3_h1: "Un substantiv în mijlocul propoziției trebuie scris cu literă mare.",
    t3_h2: "'Auto' este corect. 'auto' este greșit.",
  },
};

// ─── TOPICS ─────────────────────────────────────────────────────────

const TOPICS: TopicDef[] = [
  // ── Topic 1: der/die/das (drag-to-bucket) ──
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: () => <Topic1Svg />,
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [
        { id: "der", label: "t1_bucket_der" },
        { id: "die", label: "t1_bucket_die" },
        { id: "das", label: "t1_bucket_das" },
      ],
      items: [
        { text: "t1_item_hund", bucketId: "der" },
        { text: "t1_item_katze", bucketId: "die" },
        { text: "t1_item_haus", bucketId: "das" },
        { text: "t1_item_baum", bucketId: "der" },
        { text: "t1_item_blume", bucketId: "die" },
        { text: "t1_item_buch", bucketId: "das" },
      ],
      instruction: "t1_inst",
      hint1: "t1_h1",
      hint2: "t1_h2",
    },
    quiz: {
      question: "t1_q",
      choices: ["t1_q_a", "t1_q_b", "t1_q_c", "t1_q_d"],
      answer: "t1_q_a", // das Auto
    },
  },
  // ── Topic 2: Singular/Plural (match-pairs) ──
  {
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: () => <Topic2Svg />,
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "match-pairs",
      pairs: [
        { left: "t2_l1", right: "t2_r1" }, // Hund -> Hunde
        { left: "t2_l2", right: "t2_r2" }, // Buch -> Bücher
        { left: "t2_l3", right: "t2_r3" }, // Apfel -> Äpfel
        { left: "t2_l4", right: "t2_r4" }, // Maus -> Mäuse
      ],
      instruction: "t2_inst",
      hint1: "t2_h1",
      hint2: "t2_h2",
    },
    quiz: {
      question: "t2_q",
      choices: ["t2_q_a", "t2_q_b", "t2_q_c", "t2_q_d"],
      answer: "t2_q_a", // die Kinder
    },
  },
  // ── Topic 3: Recognizing Nouns / Capitalization (gap-fill) ──
  {
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: () => <Topic3Svg />,
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "gap-fill",
      sentence: "t3_gap_text",
      options: ["t3_opt_c1", "t3_opt_c2", "t3_opt_c3"], // Auto, auto, auTo
      answer: "t3_opt_c1", // Auto
      instruction: "t3_inst",
      hint1: "t3_h1",
      hint2: "t3_h2",
    },
    quiz: {
      question: "t3_q",
      choices: ["t3_q_a", "t3_q_b", "t3_q_c", "t3_q_d"],
      answer: "t3_q_a", // Weil es ein Nomen ist
    },
  },
];

// ─── DEF ────────────────────────────────────────────────────────────

const DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "🏷️",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const NounExplorerK2 = memo(function NounExplorerK2({
  color = "#3B82F6",
  onDone,
  lang = "de",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={2} explorerId="deutsch_k2_noun" color={color} lang={lang} onDone={onDone} />;
});

export default NounExplorerK2;
