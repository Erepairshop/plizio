"use client";
// SpellingExplorer2K2 — Island i7: Rechtschreibung 2 (Spelling Rules 2)
// Topics: 1) Doppelkonsonanten (mm, nn, ll)  2) Das Dehnungs-h  3) Wortfamilien

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSTRATIONS ──────────────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="spell2Grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#spell2Grad1)" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-50" y="-10" fontSize="30" textAnchor="middle">☀️</text>
        <text x="-50" y="20" fontSize="16" fontWeight="bold" fill="#1D4ED8" textAnchor="middle">So<tspan fill="#EF4444">nn</tspan>e</text>
        <text x="-50" y="35" fontSize="10" fill="#2563EB" textAnchor="middle">kurzes 'o'</text>
        
        <text x="50" y="-10" fontSize="30" textAnchor="middle">🏊</text>
        <text x="50" y="20" fontSize="16" fontWeight="bold" fill="#1D4ED8" textAnchor="middle">schwi<tspan fill="#EF4444">mm</tspan>en</text>
        <text x="50" y="35" fontSize="10" fill="#2563EB" textAnchor="middle">kurzes 'i'</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FFFBEB" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-50" y="-10" fontSize="30" textAnchor="middle">⌚</text>
        <text x="-50" y="20" fontSize="18" fontWeight="bold" fill="#B45309" textAnchor="middle">
          U<tspan fill="#D97706">h</tspan>r
        </text>
        
        <text x="50" y="-10" fontSize="30" textAnchor="middle">🔢</text>
        <text x="50" y="20" fontSize="18" fontWeight="bold" fill="#B45309" textAnchor="middle">
          Za<tspan fill="#D97706">h</tspan>l
        </text>

        <path d="M -70,25 L -30,25 M 30,25 L 70,25" stroke="#F59E0B" strokeWidth="3" />
        <text x="0" y="45" fontSize="12" fill="#92400E" textAnchor="middle">Macht den Vokal lang!</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="spell2Grad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#34D399" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#spell2Grad3)" rx="20" />
      <g transform="translate(120, 80)">
        <path d="M 0,20 L 0,-20 M 0,-10 L -30,-30 M 0,0 L 30,-20" stroke="#065F46" strokeWidth="4" strokeLinecap="round" />
        <rect x="-25" y="10" width="50" height="20" fill="#10B981" rx="4" />
        <text x="0" y="24" fontSize="12" fontWeight="bold" fill="white" textAnchor="middle">fahr</text>

        <text x="-40" y="-35" fontSize="12" fontWeight="bold" fill="#047857" textAnchor="middle">Fahrrad</text>
        <text x="40" y="-25" fontSize="12" fontWeight="bold" fill="#047857" textAnchor="middle">Fahrer</text>
        <text x="0" y="-30" fontSize="12" fontWeight="bold" fill="#047857" textAnchor="middle">fahren</text>
      </g>
    </svg>
  );
});

// ─── LABELS (Translations) ───────────────────────────────────────────
// K2 Rule: 'de' has full text. 'en/hu/ro' have ONLY UI/instructions.

const LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Rechtschreibung 2",

    // Topic 1
    t1_title: "Doppelkonsonanten",
    t1_text: "Nach einem kurzen Vokal (a, e, i, o, u) schreiben wir den Konsonanten danach oft doppelt! Aus 'n' wird 'nn', aus 'm' wird 'mm', und aus 'l' wird 'll'.",
    t1_b1: "Sonne (o ist kurz -> nn)",
    t1_b2: "schwimmen (i ist kurz -> mm)",
    t1_b3: "Ball (a ist kurz -> ll)",
    t1_inst: "Welche Buchstaben fehlen im Wort? 'Die So___e scheint.'",
    t1_h1: "Sprich das Wort: So-ne oder Son-ne?",
    t1_h2: "Das 'o' ist kurz. Wir brauchen ein doppeltes 'n' (nn).",
    t1_gap_text: "Die So{gap}e scheint.",
    t1_opt_nn: "nn", t1_opt_n: "n", t1_opt_nnn: "nnn",
    t1_q: "Welches Wort wird mit einem doppelten 'mm' geschrieben?",
    t1_q_a: "schwimmen", t1_q_b: "Name", t1_q_c: "Blume", t1_q_d: "Baum",

    // Topic 2
    t2_title: "Das Dehnungs-h",
    t2_text: "Manchmal klingt ein Vokal sehr lang, aber wir schreiben ihn nicht doppelt. Stattdessen versteckt sich ein stummes 'h' danach! Es macht den Vokal lang. Es steht oft vor l, m, n oder r.",
    t2_b1: "Die Uhr (langes u vor r)",
    t2_b2: "Die Zahl (langes a vor l)",
    t2_b3: "Der Zahn (langes a vor n)",
    t2_inst: "Hat das Wort ein Dehnungs-h oder nicht? Sortiere sie!",
    t2_h1: "Ist der Vokal lang und steht l, m, n oder r danach?",
    t2_h2: "Uhr, Zahl und Zahn haben ein 'h'. Rot, gut und Tor nicht.",
    t2_bucket_h: "mit 'h' 🤫",
    t2_bucket_noh: "ohne 'h' 🚫",
    t2_item_uhr: "Uhr", t2_item_zahl: "Zahl", t2_item_zahn: "Zahn",
    t2_item_rot: "rot", t2_item_gut: "gut", t2_item_tor: "Tor",
    t2_q: "Vor welchen Buchstaben steht das Dehnungs-h am häufigsten?",
    t2_q_a: "l, m, n, r", t2_q_b: "s, t, p, k", t2_q_c: "a, e, i, o", t2_q_d: "x, y, z",

    // Topic 3
    t3_title: "Wortfamilien",
    t3_text: "Wörter, die miteinander verwandt sind, bilden eine Wortfamilie. Sie haben den gleichen Wortstamm (den gleichen Kern). Wenn du weißt, wie man den Stamm schreibt, kennst du die ganze Familie!",
    t3_b1: "fahr-: fahren, Fahrrad, Fahrer",
    t3_b2: "spiel-: spielen, Spielzeug, Spieler",
    t3_b3: "kauf-: kaufen, Verkäufer, einkaufen",
    t3_inst: "Finde die Familie! Verbinde den Wortstamm mit dem passenden Wort.",
    t3_h1: "Welches Wort hat den gleichen Wortstamm?",
    t3_h2: "fahr- passt zu Fahrrad. spiel- passt zu Spielzeug.",
    t3_l1: "fahr-", t3_r1: "das Fahrrad",
    t3_l2: "spiel-", t3_r2: "das Spielzeug",
    t3_l3: "kauf-", t3_r3: "der Verkäufer",
    t3_l4: "les-", t3_r4: "das Lesebuch",
    t3_q: "Welches Wort gehört zur Wortfamilie 'kaufen'?",
    t3_q_a: "der Verkäufer", t3_q_b: "das Auto", t3_q_c: "die Katze", t3_q_d: "das Spiel",
  },
  en: {
    explorer_title: "Spelling Rules 2",
    t1_inst: "Which letters are missing? 'Die So___e scheint.' (The sun is shining.)",
    t1_h1: "Say the word: So-ne or Son-ne?",
    t1_h2: "The 'o' is short. We need a double 'n' (nn).",
    
    t2_inst: "Does the word have a stretching 'h' or not? Sort them!",
    t2_h1: "Is the vowel long and followed by l, m, n, or r?",
    t2_h2: "Uhr, Zahl, and Zahn have an 'h'.",
    t2_bucket_h: "with 'h' 🤫",
    t2_bucket_noh: "without 'h' 🚫",
    
    t3_inst: "Find the family! Match the word stem with the fitting word.",
    t3_h1: "Which word shares the same stem?",
    t3_h2: "fahr- goes with Fahrrad. spiel- goes with Spielzeug.",
  },
  hu: {
    explorer_title: "Helyesírás 2",
    t1_inst: "Melyik betűk hiányoznak? 'Die So___e scheint.' (Süt a nap.)",
    t1_h1: "Mondd ki a szót: So-ne vagy Son-ne?",
    t1_h2: "Az 'o' rövid. Dupla 'n'-re (nn) van szükségünk.",
    
    t2_inst: "Van a szóban nyújtó 'h' vagy nincs? Válogasd szét őket!",
    t2_h1: "Hosszú a magánhangzó, és l, m, n vagy r követi?",
    t2_h2: "Az Uhr, Zahl és Zahn szavakban van 'h'.",
    t2_bucket_h: "'h'-val 🤫",
    t2_bucket_noh: "'h' nélkül 🚫",
    
    t3_inst: "Keresd meg a családot! Kösd össze a szótövet a hozzáillő szóval.",
    t3_h1: "Melyik szónak azonos a szótöve?",
    t3_h2: "A fahr- a Fahrrad-hoz illik. A spiel- a Spielzeug-hoz.",
  },
  ro: {
    explorer_title: "Reguli de scriere 2",
    t1_inst: "Ce litere lipsesc? 'Die So___e scheint.' (Soarele strălucește.)",
    t1_h1: "Spune cuvântul: So-ne sau Son-ne?",
    t1_h2: "Vocala 'o' este scurtă. Avem nevoie de un 'n' dublu (nn).",
    
    t2_inst: "Are cuvântul un 'h' de alungire sau nu? Sortează-le!",
    t2_h1: "Vocala este lungă și urmată de l, m, n sau r?",
    t2_h2: "Uhr, Zahl și Zahn au un 'h'.",
    t2_bucket_h: "cu 'h' 🤫",
    t2_bucket_noh: "fără 'h' 🚫",
    
    t3_inst: "Găsește familia! Potrivește rădăcina cuvântului cu cuvântul potrivit.",
    t3_h1: "Ce cuvânt are aceeași rădăcină?",
    t3_h2: "fahr- merge cu Fahrrad. spiel- merge cu Spielzeug.",
  },
};

// ─── TOPICS ─────────────────────────────────────────────────────────

const TOPICS: TopicDef[] = [
  // ── Topic 1: Double Consonants (gap-fill) ──
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: () => <Topic1Svg />,
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "gap-fill",
      sentence: "t1_gap_text",
      options: ["t1_opt_nn", "t1_opt_n", "t1_opt_nnn"],
      answer: "t1_opt_nn", // nn
      instruction: "t1_inst",
      hint1: "t1_h1",
      hint2: "t1_h2",
    },
    quiz: {
      question: "t1_q",
      choices: ["t1_q_a", "t1_q_b", "t1_q_c", "t1_q_d"],
      answer: "t1_q_a", // schwimmen
    },
  },
  // ── Topic 2: Dehnungs-h (drag-to-bucket) ──
  {
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: () => <Topic2Svg />,
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [
        { id: "h", label: "t2_bucket_h" },
        { id: "noh", label: "t2_bucket_noh" },
      ],
      items: [
        { text: "t2_item_uhr", bucketId: "h" },
        { text: "t2_item_rot", bucketId: "noh" },
        { text: "t2_item_zahl", bucketId: "h" },
        { text: "t2_item_gut", bucketId: "noh" },
        { text: "t2_item_zahn", bucketId: "h" },
        { text: "t2_item_tor", bucketId: "noh" },
      ],
      instruction: "t2_inst",
      hint1: "t2_h1",
      hint2: "t2_h2",
    },
    quiz: {
      question: "t2_q",
      choices: ["t2_q_a", "t2_q_b", "t2_q_c", "t2_q_d"],
      answer: "t2_q_a", // l, m, n, r
    },
  },
  // ── Topic 3: Word Families (match-pairs) ──
  {
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: () => <Topic3Svg />,
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "match-pairs",
      pairs: [
        { left: "t3_l1", right: "t3_r1" }, // fahr- -> Fahrrad
        { left: "t3_l2", right: "t3_r2" }, // spiel- -> Spielzeug
        { left: "t3_l3", right: "t3_r3" }, // kauf- -> Verkäufer
        { left: "t3_l4", right: "t3_r4" }, // les- -> Lesebuch
      ],
      instruction: "t3_inst",
      hint1: "t3_h1",
      hint2: "t3_h2",
    },
    quiz: {
      question: "t3_q",
      choices: ["t3_q_a", "t3_q_b", "t3_q_c", "t3_q_d"],
      answer: "t3_q_a", // der Verkäufer
    },
  },
];

// ─── DEF ────────────────────────────────────────────────────────────

const DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "🔡",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const SpellingExplorer2K2 = memo(function SpellingExplorer2K2({
  color = "#3B82F6",
  onDone,
  lang = "de",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={2} explorerId="deutsch_k2_spelling2" color={color} lang={lang} onDone={onDone} />;
});

export default SpellingExplorer2K2;
