"use client";
// CapitalizationExplorerK2 — Island i5: Großschreibung & Bindewörter (Rules & Conjunctions)
// Topics: 1) Großschreibung (Capitalization)  2) Bindewörter (und, oder, aber)  3) Tagesablauf & Orte

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSTRATIONS ──────────────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="capGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EC4899" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#F472B6" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#capGrad1)" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-40" y="5" fontSize="24" fill="#9CA3AF" textAnchor="middle">a</text>
        <path d="M -20,-5 L 20,-5" stroke="#F472B6" strokeWidth="2" markerEnd="url(#arrow)" />
        <text x="40" y="5" fontSize="30" fontWeight="black" fill="#BE185D" textAnchor="middle">A</text>
        
        <text x="0" y="40" fontSize="12" fontWeight="bold" fill="#9D174D" textAnchor="middle">Satzanfang & Nomen = GROSS</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FEF2F2" rx="20" />
      <g transform="translate(120, 70)">
        <rect x="-80" y="-15" width="50" height="30" rx="4" fill="#FECACA" />
        <text x="-55" y="5" fontSize="14" fontWeight="bold" fill="#B91C1C" textAnchor="middle">Satz 1</text>
        
        <rect x="30" y="-15" width="50" height="30" rx="4" fill="#FECACA" />
        <text x="55" y="5" fontSize="14" fontWeight="bold" fill="#B91C1C" textAnchor="middle">Satz 2</text>
        
        <path d="M -30,0 C -15,-20 15,-20 30,0" fill="none" stroke="#EF4444" strokeWidth="3" strokeDasharray="4 2" />
        <text x="0" y="-15" fontSize="14" fontWeight="black" fill="#DC2626" textAnchor="middle">und / oder / aber</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="capGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#capGrad3)" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-50" y="-5" fontSize="30" textAnchor="middle">🌅</text>
        <text x="-50" y="25" fontSize="12" fontWeight="bold" fill="#5B21B6" textAnchor="middle">Am Morgen</text>
        
        <path d="M -15,0 L 15,0" stroke="#8B5CF6" strokeWidth="2" markerEnd="url(#arrow)" />
        
        <text x="50" y="-5" fontSize="30" textAnchor="middle">🏫</text>
        <text x="50" y="25" fontSize="12" fontWeight="bold" fill="#5B21B6" textAnchor="middle">in der Schule</text>
      </g>
    </svg>
  );
});

// ─── LABELS (Translations) ───────────────────────────────────────────
// K2 Rule: 'de' has full text. 'en/hu/ro' have ONLY UI/instructions.

const LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Regeln & Wörter",

    // Topic 1
    t1_title: "Groß oder klein?",
    t1_text: "Wir schreiben den Anfang eines Satzes immer groß. Auch Nomen (Dinge, Tiere, Menschen, Namen, Wochentage) schreiben wir groß. Alles andere schreiben wir klein!",
    t1_b1: "Satzanfang: Am...",
    t1_b2: "Wochentage: Montag, Dienstag",
    t1_b3: "Nomen: Schule, Kind, Hund",
    t1_inst: "Welche Wörter müssen groß geschrieben werden? Markiere sie!",
    t1_h1: "Der Satzanfang, der Wochentag und das Nomen (Ort) müssen groß sein.",
    t1_h2: "Wähle 'am', 'montag' und 'schule'.",
    t1_w1: "am", t1_w2: "montag", t1_w3: "gehen", t1_w4: "wir", t1_w5: "in", t1_w6: "die", t1_w7: "schule.",
    t1_q: "Welches Wort muss mitten im Satz groß geschrieben werden?",
    t1_q_a: "Katze", t1_q_b: "laufen", t1_q_c: "und", t1_q_d: "schnell",

    // Topic 2
    t2_title: "Sätze verbinden (und, oder, aber)",
    t2_text: "Bindewörter (Konjunktionen) kleben zwei Sätze oder Wörter zusammen. 'und' verbindet zwei Dinge. 'oder' gibt dir eine Wahl. 'aber' zeigt einen Gegensatz.",
    t2_b1: "und: Ich mag Äpfel und Bananen.",
    t2_b2: "oder: Möchtest du Tee oder Saft?",
    t2_b3: "aber: Ich mag Hunde, aber keine Katzen.",
    t2_inst: "Welches Bindewort passt in die Lücke?",
    t2_h1: "Es geht um einen Gegensatz. Ich mag das eine, das andere nicht.",
    t2_h2: "Das richtige Wort ist 'aber'.",
    t2_gap_text: "Ich spiele gern Fußball, {gap} ich mag kein Tennis.",
    t2_opt_aber: "aber", t2_opt_und: "und", t2_opt_oder: "oder",
    t2_q: "Welches Wort gibt dir eine Wahl (entweder das eine oder das andere)?",
    t2_q_a: "oder", t2_q_b: "und", t2_q_c: "aber", t2_q_d: "ich",

    // Topic 3
    t3_title: "Orte und Tageszeiten",
    t3_text: "Wenn wir erzählen, was wir machen, nennen wir oft die Zeit (Wann?) und den Ort (Wo? Wohin?). 'Am Morgen' ist eine Zeit. 'In die Schule' ist ein Ort.",
    t3_b1: "Wann? -> am Morgen, am Abend",
    t3_b2: "Wohin? -> in die Schule, nach Hause",
    t3_b3: "Die Zeit steht oft am Anfang",
    t3_inst: "Bringe den Satz in die richtige Reihenfolge!",
    t3_h1: "Beginne mit der Zeit ('Am Morgen').",
    t3_h2: "Dann kommt das Verb ('gehe'), wer es tut ('ich'), und wohin ('in die Schule.').",
    t3_w1: "Am Morgen", t3_w2: "gehe", t3_w3: "ich", t3_w4: "in die Schule.",
    t3_q: "Welche Frage fragt nach einem Ort?",
    t3_q_a: "Wohin?", t3_q_b: "Wann?", t3_q_c: "Wer?", t3_q_d: "Warum?",
  },
  en: {
    explorer_title: "Rules & Conjunctions",
    t1_inst: "Which words must be capitalized? Highlight them!",
    t1_h1: "The beginning of the sentence, the day of the week, and the noun (place).",
    t1_h2: "Select 'am', 'montag', and 'schule'.",

    t2_inst: "Which conjunction fits the gap?",
    t2_h1: "It's about a contrast. I like one thing, but not the other.",
    t2_h2: "The correct word is 'aber' (but).",

    t3_inst: "Put the sentence in the correct order!",
    t3_h1: "Start with the time ('Am Morgen' - In the morning).",
    t3_h2: "Then the verb ('gehe'), the pronoun ('ich'), and the place ('in die Schule.').",
  },
  hu: {
    explorer_title: "Szabályok és Kötőszavak",
    t1_inst: "Melyik szavakat kell nagybetűvel írni? Jelöld ki őket!",
    t1_h1: "A mondatkezdet, a hét napja és a főnév (helyszín) nagybetűs.",
    t1_h2: "Válaszd ki: 'am', 'montag', 'schule'.",

    t2_inst: "Melyik kötőszó illik az űrbe?",
    t2_h1: "Ez egy ellentét. Az egyiket szeretem, a másikat nem.",
    t2_h2: "A helyes szó az 'aber' (de).",

    t3_inst: "Tedd a mondatot a helyes sorrendbe!",
    t3_h1: "Kezdd az idővel ('Am Morgen' - Reggel).",
    t3_h2: "Aztán az ige ('gehe'), a névmás ('ich'), majd a helyszín ('in die Schule.').",
  },
  ro: {
    explorer_title: "Reguli și Conjuncții",
    t1_inst: "Ce cuvinte trebuie scrise cu majusculă? Bifează-le!",
    t1_h1: "Începutul propoziției, ziua săptămânii și substantivul (locul).",
    t1_h2: "Alege 'am', 'montag' și 'schule'.",

    t2_inst: "Ce conjuncție se potrivește în spațiul liber?",
    t2_h1: "Este vorba despre un contrast. Îmi place una, dar nu și cealaltă.",
    t2_h2: "Cuvântul corect este 'aber' (dar).",

    t3_inst: "Așază propoziția în ordinea corectă!",
    t3_h1: "Începe cu timpul ('Am Morgen' - Dimineața).",
    t3_h2: "Apoi verbul ('gehe'), pronumele ('ich') și locul ('in die Schule.').",
  },
};

// ─── TOPICS ─────────────────────────────────────────────────────────

const TOPICS: TopicDef[] = [
  // ── Topic 1: Capitalization (highlight-text) ──
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: () => <Topic1Svg />,
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "highlight-text",
      tokens: ["t1_w1", "t1_w2", "t1_w3", "t1_w4", "t1_w5", "t1_w6", "t1_w7"], // am montag gehen wir in die schule.
      correctIndices: [0, 1, 6], // Am, Montag, Schule
      instruction: "t1_inst",
      hint1: "t1_h1",
      hint2: "t1_h2",
    },
    quiz: {
      question: "t1_q",
      choices: ["t1_q_a", "t1_q_b", "t1_q_c", "t1_q_d"],
      answer: "t1_q_a", // Katze
    },
  },
  // ── Topic 2: Conjunctions und/oder/aber (gap-fill) ──
  {
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: () => <Topic2Svg />,
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "gap-fill",
      sentence: "t2_gap_text",
      choices: ["t2_opt_aber", "t2_opt_und", "t2_opt_oder"],
      correctIndex: 0, // aber
      instruction: "t2_inst",
      hint1: "t2_h1",
      hint2: "t2_h2",
    },
    quiz: {
      question: "t2_q",
      choices: ["t2_q_a", "t2_q_b", "t2_q_c", "t2_q_d"],
      answer: "t2_q_a", // oder
    },
  },
  // ── Topic 3: Time and Place (word-order) ──
  {
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: () => <Topic3Svg />,
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "word-order",
      words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4"], // Am Morgen gehe ich in die Schule.
      correctOrder: [0, 1, 2, 3],
      instruction: "t3_inst",
      hint1: "t3_h1",
      hint2: "t3_h2",
    },
    quiz: {
      question: "t3_q",
      choices: ["t3_q_a", "t3_q_b", "t3_q_c", "t3_q_d"],
      answer: "t3_q_a", // Wohin?
    },
  },
];

// ─── DEF ────────────────────────────────────────────────────────────

const DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "🅰️",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const CapitalizationExplorerK2 = memo(function CapitalizationExplorerK2({
  color = "#EC4899",
  onDone,
  lang = "de",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={2} explorerId="deutsch_k2_capitalization" color={color} lang={lang} onDone={onDone} />;
});

export default CapitalizationExplorerK2;
