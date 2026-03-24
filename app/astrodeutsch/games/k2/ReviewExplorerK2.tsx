"use client";
// ReviewExplorerK2 — Island i9: Das große K2 Quiz (The Big Review K2)
// Topics: 1) Nomen & Verben  2) Satzarten (. ? !)  3) Wortstellung

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSTRATIONS ──────────────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="rev2Grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#rev2Grad1)" rx="20" />
      <g transform="translate(120, 70)">
        <text x="0" y="-15" fontSize="30" textAnchor="middle">🏆</text>
        <rect x="-70" y="15" width="60" height="25" rx="4" fill="#DBEAFE" stroke="#3B82F6" />
        <text x="-40" y="32" fontSize="12" fontWeight="bold" fill="#1D4ED8" textAnchor="middle">Nomen</text>
        
        <rect x="10" y="15" width="60" height="25" rx="4" fill="#EDE9FE" stroke="#8B5CF6" />
        <text x="40" y="32" fontSize="12" fontWeight="bold" fill="#6D28D9" textAnchor="middle">Verben</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#ECFEFF" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-50" y="-10" fontSize="14" fontWeight="bold" fill="#0891B2" textAnchor="middle">Aussage</text>
        <text x="-50" y="25" fontSize="24" fontWeight="black" fill="#06B6D4" textAnchor="middle">.</text>
        
        <text x="0" y="-10" fontSize="14" fontWeight="bold" fill="#0891B2" textAnchor="middle">Frage</text>
        <text x="0" y="25" fontSize="24" fontWeight="black" fill="#06B6D4" textAnchor="middle">?</text>
        
        <text x="50" y="-10" fontSize="14" fontWeight="bold" fill="#0891B2" textAnchor="middle">Befehl</text>
        <text x="50" y="25" fontSize="24" fontWeight="black" fill="#06B6D4" textAnchor="middle">!</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="rev2Grad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#059669" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#rev2Grad3)" rx="20" />
      <g transform="translate(120, 70)">
        <text x="0" y="-10" fontSize="30" textAnchor="middle">🌟</text>
        <text x="0" y="25" fontSize="16" fontWeight="bold" fill="#047857" textAnchor="middle">Klasse 2 gemeistert!</text>
        <line x1="-50" y1="35" x2="50" y2="35" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
      </g>
    </svg>
  );
});

// ─── LABELS (Translations) ───────────────────────────────────────────
// K2 Rule: 'de' has full text. 'en/hu/ro' have ONLY UI/instructions.

const LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Das große Quiz",

    // Topic 1
    t1_title: "Nomen oder Verb?",
    t1_text: "Erinnerst du dich? Nomen (Namenwörter) schreiben wir groß. Verben (Tunwörter) schreiben wir klein. Lass uns prüfen, ob du sie unterscheiden kannst!",
    t1_b1: "Nomen: Haus, Hund (GROSS)",
    t1_b2: "Verben: spielen, lachen (klein)",
    t1_b3: "Achte auf den ersten Buchstaben",
    t1_inst: "Sortiere die Wörter in die richtigen Körbe: Nomen oder Verb?",
    t1_h1: "Großgeschrieben = Nomen. Kleingeschrieben = Verb.",
    t1_h2: "'Haus' ist ein Nomen. 'spielen' ist ein Verb.",
    t1_bucket_nomen: "Nomen 🏷️",
    t1_bucket_verben: "Verben 🏃",
    t1_item_haus: "Haus", t1_item_spielen: "spielen",
    t1_item_hund: "Hund", t1_item_laufen: "laufen",
    t1_item_baum: "Baum", t1_item_lachen: "lachen",
    t1_q: "Wie schreiben wir Nomen (Namenwörter) im Deutschen?",
    t1_q_a: "Immer groß", t1_q_b: "Immer klein", t1_q_c: "Nur am Satzanfang groß", t1_q_d: "Gar nicht",

    // Topic 2
    t2_title: "Satzzeichen finden",
    t2_text: "Wir haben drei Satzarten gelernt: den Aussagesatz (erzählt etwas), den Fragesatz (fragt etwas) und den Aufforderungssatz (befiehlt etwas).",
    t2_b1: "Aussagesatz -> Punkt (.)",
    t2_b2: "Fragesatz -> Fragezeichen (?)",
    t2_b3: "Befehl -> Ausrufezeichen (!)",
    t2_inst: "Welches Satzzeichen gehört zu welchem Satz? Verbinde sie!",
    t2_h1: "Eine Frage fragt etwas. Ein Befehl sagt dir, was du tun sollst.",
    t2_h2: "'Komm her' ist ein Befehl (!). 'Wie heißt du' ist eine Frage (?).",
    t2_l1: "Ich spiele im Garten", t2_r1: ".",
    t2_l2: "Wie spät ist es", t2_r2: "?",
    t2_l3: "Hör auf damit", t2_r3: "!",
    t2_q: "Was steht am Ende der Frage: 'Wo ist der Hund'?",
    t2_q_a: "Ein Fragezeichen (?)", t2_q_b: "Ein Punkt (.)", t2_q_c: "Ein Ausrufezeichen (!)", t2_q_d: "Ein Komma (,)",

    // Topic 3
    t3_title: "Der perfekte Satz",
    t3_text: "Du kennst jetzt Groß- und Kleinschreibung, Nomen, Verben und Adjektive. Baue zum Abschluss einen langen, perfekten Satz!",
    t3_b1: "Satzanfang = Groß",
    t3_b2: "Verb = Position 2",
    t3_b3: "Satzende = Satzzeichen",
    t3_inst: "Bringe den Satz in die richtige Reihenfolge!",
    t3_h1: "Beginne mit dem großen 'Der'. Dann kommt das Adjektiv 'kleine'.",
    t3_h2: "Der kleine Hund spielt im Garten.",
    t3_w1: "Der", t3_w2: "kleine", t3_w3: "Hund", t3_w4: "spielt", t3_w5: "im", t3_w6: "Garten.",
    t3_q: "Wo steht das Verb (Tunwort) in einem normalen Satz?",
    t3_q_a: "An Position 2", t3_q_b: "Ganz am Anfang", t3_q_c: "Ganz am Ende", t3_q_d: "Es gibt kein Verb",
  },
  en: {
    explorer_title: "The Big Review",
    t1_inst: "Sort the words into the correct buckets: Noun (Nomen) or Verb (Verb)?",
    t1_h1: "Capitalized = Noun. Lowercase = Verb.",
    t1_h2: "'Haus' is a Noun. 'spielen' is a Verb.",
    t1_bucket_nomen: "Nouns 🏷️",
    t1_bucket_verben: "Verbs 🏃",

    t2_inst: "Which punctuation mark belongs to which sentence? Match them!",
    t2_h1: "A question asks something. A command tells you what to do.",
    t2_h2: "'Hör auf damit' is a command (!). 'Wie spät ist es' is a question (?).",

    t3_inst: "Put the sentence in the correct order!",
    t3_h1: "Start with the capitalized 'Der'. Then the adjective 'kleine'.",
    t3_h2: "Der kleine Hund spielt im Garten. (The small dog plays in the garden.)",
  },
  hu: {
    explorer_title: "A Nagy Összefoglaló",
    t1_inst: "Válogasd szét a szavakat: Főnév (Nomen) vagy Ige (Verb)?",
    t1_h1: "Nagybetűs = Főnév. Kisbetűs = Ige.",
    t1_h2: "A 'Haus' főnév. A 'spielen' ige.",
    t1_bucket_nomen: "Főnevek 🏷️",
    t1_bucket_verben: "Igék 🏃",

    t2_inst: "Melyik írásjel melyik mondathoz tartozik? Kösd össze őket!",
    t2_h1: "A kérdés kérdez. A parancs megmondja, mit csinálj.",
    t2_h2: "A 'Hör auf damit' egy parancs (!). A 'Wie spät ist es' egy kérdés (?).",

    t3_inst: "Tedd a mondatot a helyes sorrendbe!",
    t3_h1: "Kezdd a nagy 'Der'-rel. Majd a 'kleine' melléknév.",
    t3_h2: "Der kleine Hund spielt im Garten. (A kis kutya a kertben játszik.)",
  },
  ro: {
    explorer_title: "Marea Recapitulare",
    t1_inst: "Sortează cuvintele în coșuri: Substantiv (Nomen) sau Verb (Verb)?",
    t1_h1: "Literă mare = Substantiv. Literă mică = Verb.",
    t1_h2: "'Haus' este substantiv. 'spielen' este verb.",
    t1_bucket_nomen: "Substantive 🏷️",
    t1_bucket_verben: "Verbe 🏃",

    t2_inst: "Ce semn de punctuație aparține cărei propoziții? Leagă-le!",
    t2_h1: "O întrebare întreabă ceva. O poruncă îți spune ce să faci.",
    t2_h2: "'Hör auf damit' este o poruncă (!). 'Wie spät ist es' este o întrebare (?).",

    t3_inst: "Așează propoziția în ordinea corectă!",
    t3_h1: "Începe cu 'Der' scris mare. Apoi adjectivul 'kleine'.",
    t3_h2: "Der kleine Hund spielt im Garten. (Micul câine se joacă în grădină.)",
  },
};

// ─── TOPICS ─────────────────────────────────────────────────────────

const TOPICS: TopicDef[] = [
  // ── Topic 1: Nouns vs Verbs (drag-to-bucket) ──
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: () => <Topic1Svg />,
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [
        { id: "nomen", label: "t1_bucket_nomen" },
        { id: "verb", label: "t1_bucket_verben" },
      ],
      items: [
        { text: "t1_item_haus", bucketId: "nomen" },
        { text: "t1_item_spielen", bucketId: "verb" },
        { text: "t1_item_hund", bucketId: "nomen" },
        { text: "t1_item_laufen", bucketId: "verb" },
        { text: "t1_item_baum", bucketId: "nomen" },
        { text: "t1_item_lachen", bucketId: "verb" },
      ],
      instruction: "t1_inst",
      hint1: "t1_h1",
      hint2: "t1_h2",
    },
    quiz: {
      question: "t1_q",
      choices: ["t1_q_a", "t1_q_b", "t1_q_c", "t1_q_d"],
      answer: "t1_q_a", // Immer groß
    },
  },
  // ── Topic 2: Punctuation Match (match-pairs) ──
  {
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: () => <Topic2Svg />,
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "match-pairs",
      pairs: [
        { left: "t2_l1", right: "t2_r1" }, // Aussage -> .
        { left: "t2_l2", right: "t2_r2" }, // Frage -> ?
        { left: "t2_l3", right: "t2_r3" }, // Befehl -> !
      ],
      instruction: "t2_inst",
      hint1: "t2_h1",
      hint2: "t2_h2",
    },
    quiz: {
      question: "t2_q",
      choices: ["t2_q_a", "t2_q_b", "t2_q_c", "t2_q_d"],
      answer: "t2_q_a", // Ein Fragezeichen (?)
    },
  },
  // ── Topic 3: Big Sentence Build (word-order) ──
  {
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: () => <Topic3Svg />,
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "word-order",
      words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6"], // Der kleine Hund spielt im Garten.
      instruction: "t3_inst",
      hint1: "t3_h1",
      hint2: "t3_h2",
    },
    quiz: {
      question: "t3_q",
      choices: ["t3_q_a", "t3_q_b", "t3_q_c", "t3_q_d"],
      answer: "t3_q_a", // An Position 2
    },
  },
];

// ─── DEF ────────────────────────────────────────────────────────────

const DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "🏆",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const ReviewExplorerK2 = memo(function ReviewExplorerK2({
  color = "#3B82F6",
  onDone,
  lang = "de",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={2} explorerId="deutsch_k2_review" color={color} lang={lang} onDone={onDone} />;
});

export default ReviewExplorerK2;
