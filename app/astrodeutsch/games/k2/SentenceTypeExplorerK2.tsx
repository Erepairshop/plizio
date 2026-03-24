"use client";
// SentenceTypeExplorerK2 — Island i4: Satzarten & Fragen (Sentence Types)
// Topics: 1) Aussagesatz, Fragesatz, Aufforderung  2) Wortstellung (Verb an Position 2/1)  3) W-Fragen

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSTRATIONS ──────────────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="stGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#34D399" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#stGrad1)" rx="20" />
      <g transform="translate(120, 70)">
        <text x="0" y="-20" fontSize="16" fontWeight="bold" fill="#047857" textAnchor="middle">Die Satzarten</text>
        
        <rect x="-80" y="5" width="45" height="30" rx="4" fill="#D1FAE5" stroke="#10B981" />
        <text x="-57" y="25" fontSize="16" fontWeight="bold" fill="#047857" textAnchor="middle">.</text>
        
        <rect x="-25" y="5" width="50" height="30" rx="4" fill="#D1FAE5" stroke="#10B981" />
        <text x="0" y="25" fontSize="16" fontWeight="bold" fill="#047857" textAnchor="middle">?</text>
        
        <rect x="35" y="5" width="45" height="30" rx="4" fill="#D1FAE5" stroke="#10B981" />
        <text x="57" y="25" fontSize="16" fontWeight="bold" fill="#047857" textAnchor="middle">!</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#EFF6FF" rx="20" />
      <g transform="translate(120, 70)">
        <text x="0" y="-15" fontSize="14" fill="#1D4ED8" textAnchor="middle">
          Der Hund <tspan fontWeight="bold" fill="#DC2626">spielt</tspan>.
        </text>
        <text x="0" y="5" fontSize="10" fill="#60A5FA" textAnchor="middle">Position 2 (Aussage)</text>
        
        <path d="M -40,15 L -40,25 L -70,25" fill="none" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrow)" />
        
        <text x="0" y="45" fontSize="14" fill="#1D4ED8" textAnchor="middle">
          <tspan fontWeight="bold" fill="#DC2626">Spielt</tspan> der Hund?
        </text>
        <text x="0" y="60" fontSize="10" fill="#60A5FA" textAnchor="middle">Position 1 (Frage)</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="stGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#FCD34D" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#stGrad3)" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-60" y="-10" fontSize="20" fontWeight="bold" fill="#B45309" textAnchor="middle">Wer?</text>
        <text x="-60" y="15" fontSize="24" textAnchor="middle">👦</text>
        
        <text x="0" y="-10" fontSize="20" fontWeight="bold" fill="#B45309" textAnchor="middle">Was?</text>
        <text x="0" y="15" fontSize="24" textAnchor="middle">🍎</text>
        
        <text x="60" y="-10" fontSize="20" fontWeight="bold" fill="#B45309" textAnchor="middle">Wo?</text>
        <text x="60" y="15" fontSize="24" textAnchor="middle">🏡</text>
      </g>
    </svg>
  );
});

// ─── LABELS (Translations) ───────────────────────────────────────────
// K2 Rule: 'de' has full text. 'en/hu/ro' have ONLY UI/instructions.

const LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Satzarten",

    // Topic 1
    t1_title: "Punkt, Frage oder Ausruf?",
    t1_text: "Es gibt drei wichtige Satzarten: Den Aussagesatz (erzählt etwas, am Ende steht ein Punkt), den Fragesatz (fragt etwas, am Ende steht ein Fragezeichen) und den Aufforderungssatz (befiehlt etwas, am Ende steht ein Ausrufezeichen).",
    t1_b1: "Aussagesatz: Das Wetter ist schön. (.)",
    t1_b2: "Fragesatz: Kommst du mit? (?)",
    t1_b3: "Aufforderung: Pass auf! (!)",
    t1_inst: "Welches Satzzeichen fehlt? Sortiere die Sätze!",
    t1_h1: "Ein Befehl oder Ausruf bekommt ein '!'. Eine Frage ein '?'.",
    t1_h2: "Ein normaler Satz bekommt einen Punkt '.'.",
    t1_bucket_punkt: "Aussage (.)",
    t1_bucket_frage: "Frage (?)",
    t1_bucket_ausruf: "Befehl (!)",
    t1_item_schoen: "Das Wetter ist schön", t1_item_eis: "Ich mag Eis",
    t1_item_kommst: "Kommst du mit", t1_item_wo: "Wo ist mein Buch",
    t1_item_pass: "Pass auf", t1_item_hoer: "Hör auf",
    t1_q: "Was steht am Ende eines Aufforderungssatzes (Befehl)?",
    t1_q_a: "Ausrufezeichen (!)", t1_q_b: "Punkt (.)", t1_q_c: "Fragezeichen (?)", t1_q_d: "Komma (,)",

    // Topic 2
    t2_title: "Die Wortstellung",
    t2_text: "In einem normalen Satz (Aussagesatz) steht das Verb (Tunwort) immer an der zweiten Stelle! Bei einer Frage (ohne Fragewort) oder einem Befehl rutscht es an die erste Stelle.",
    t2_b1: "Aussage: Der Hund SPIELT laut.",
    t2_b2: "Frage: SPIELT der Hund laut?",
    t2_b3: "Befehl: SPIEL laut!",
    t2_inst: "Bringe die Frage in die richtige Reihenfolge!",
    t2_h1: "Bei dieser Frage muss das Verb (Tunwort) an die erste Stelle.",
    t2_h2: "Beginne mit 'Spielt', dann 'der', 'Hund', 'im', 'Garten?'.",
    t2_w1: "Spielt", t2_w2: "der", t2_w3: "Hund", t2_w4: "im", t2_w5: "Garten?",
    t2_q: "An welcher Position steht das Verb in einem normalen Aussagesatz?",
    t2_q_a: "Position 2", t2_q_b: "Position 1", t2_q_c: "Ganz am Ende", t2_q_d: "Position 3",

    // Topic 3
    t3_title: "W-Fragen (Wer? Was? Wo?)",
    t3_text: "Wenn wir etwas genau wissen wollen, benutzen wir Fragewörter. Sie fangen im Deutschen fast alle mit 'W' an: Wer fragt nach einer Person, Was nach einer Sache, und Wo nach einem Ort.",
    t3_b1: "Wer? -> Ein Mensch (z.B. der Junge)",
    t3_b2: "Was? -> Ein Ding oder Tier (z.B. das Buch)",
    t3_b3: "Wo? -> Ein Ort (z.B. im Garten)",
    t3_inst: "Welches Fragewort passt? '___ ist das?' - 'Das ist mein Buch.'",
    t3_h1: "Die Antwort ist 'ein Buch' (eine Sache).",
    t3_h2: "Nach Dingen fragt man mit 'Was?'.",
    t3_gap_text: "{gap} ist das?",
    t3_opt_was: "Was", t3_opt_wer: "Wer", t3_opt_wo: "Wo",
    t3_q: "Mit welchem Wort fragst du nach einem Ort?",
    t3_q_a: "Wo?", t3_q_b: "Was?", t3_q_c: "Wer?", t3_q_d: "Wie?",
  },
  en: {
    explorer_title: "Sentence Types",
    t1_inst: "Which punctuation mark is missing? Sort the sentences!",
    t1_h1: "A command or exclamation gets a '!'. A question gets a '?'.",
    t1_h2: "A normal statement gets a period '.'.",
    t1_bucket_punkt: "Statement (.)",
    t1_bucket_frage: "Question (?)",
    t1_bucket_ausruf: "Command (!)",

    t2_inst: "Put the question in the correct order!",
    t2_h1: "In this question, the verb (action word) must go first.",
    t2_h2: "Start with 'Spielt' (Plays), then 'der', 'Hund', 'im', 'Garten?'.",

    t3_inst: "Which question word fits? '___ ist das?' - 'Das ist mein Buch.'",
    t3_h1: "The answer is 'a book' (a thing).",
    t3_h2: "You ask for things with 'Was?' (What?).",
  },
  hu: {
    explorer_title: "Mondatfajták",
    t1_inst: "Melyik írásjel hiányzik? Válogasd szét a mondatokat!",
    t1_h1: "A felszólítás '!'-t kap. A kérdés '?'-t.",
    t1_h2: "A normál kijelentő mondat végére pont '.' kerül.",
    t1_bucket_punkt: "Kijelentés (.)",
    t1_bucket_frage: "Kérdés (?)",
    t1_bucket_ausruf: "Felszólítás (!)",

    t2_inst: "Tedd a kérdést a helyes sorrendbe!",
    t2_h1: "Ennél a kérdésnél az igének (cselekvés) az első helyre kell kerülnie.",
    t2_h2: "Kezdd így: 'Spielt', majd 'der', 'Hund', 'im', 'Garten?'.",

    t3_inst: "Melyik kérdőszó illik ide? '___ ist das?' - 'Das ist mein Buch.'",
    t3_h1: "A válasz 'egy könyv' (egy tárgy).",
    t3_h2: "Tárgyakra a 'Was?' (Mi?) kérdőszóval kérdezünk.",
  },
  ro: {
    explorer_title: "Tipuri de Propoziții",
    t1_inst: "Ce semn de punctuație lipsește? Sortează propozițiile!",
    t1_h1: "O poruncă sau exclamație primește '!'. O întrebare '?'.",
    t1_h2: "O afirmație normală primește un punct '.'.",
    t1_bucket_punkt: "Afirmație (.)",
    t1_bucket_frage: "Întrebare (?)",
    t1_bucket_ausruf: "Poruncă (!)",

    t2_inst: "Așază întrebarea în ordinea corectă!",
    t2_h1: "În această întrebare, verbul trebuie să fie pe primul loc.",
    t2_h2: "Începe cu 'Spielt', apoi 'der', 'Hund', 'im', 'Garten?'.",

    t3_inst: "Ce cuvânt interogativ se potrivește? '___ ist das?' - 'Das ist mein Buch.'",
    t3_h1: "Răspunsul este 'o carte' (un obiect).",
    t3_h2: "Pentru obiecte întrebăm cu 'Was?' (Ce?).",
  },
};

// ─── TOPICS ─────────────────────────────────────────────────────────

const TOPICS: TopicDef[] = [
  // ── Topic 1: Sentence Types (drag-to-bucket) ──
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: () => <Topic1Svg />,
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [
        { id: "punkt", label: "t1_bucket_punkt" },
        { id: "frage", label: "t1_bucket_frage" },
        { id: "ausruf", label: "t1_bucket_ausruf" },
      ],
      items: [
        { text: "t1_item_schoen", bucketId: "punkt" }, // Das Wetter ist schön
        { text: "t1_item_pass", bucketId: "ausruf" },  // Pass auf
        { text: "t1_item_kommst", bucketId: "frage" }, // Kommst du mit
        { text: "t1_item_hoer", bucketId: "ausruf" },  // Hör auf
        { text: "t1_item_eis", bucketId: "punkt" },    // Ich mag Eis
        { text: "t1_item_wo", bucketId: "frage" },     // Wo ist mein Buch
      ],
      instruction: "t1_inst",
      hint1: "t1_h1",
      hint2: "t1_h2",
    },
    quiz: {
      question: "t1_q",
      choices: ["t1_q_a", "t1_q_b", "t1_q_c", "t1_q_d"],
      answer: "t1_q_a", // Ausrufezeichen (!)
    },
  },
  // ── Topic 2: Word Order in Questions (word-order) ──
  {
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: () => <Topic2Svg />,
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "word-order",
      words: ["t2_w1", "t2_w2", "t2_w3", "t2_w4", "t2_w5"], // Spielt der Hund im Garten?
      correctOrder: [0, 1, 2, 3, 4],
      instruction: "t2_inst",
      hint1: "t2_h1",
      hint2: "t2_h2",
    },
    quiz: {
      question: "t2_q",
      choices: ["t2_q_a", "t2_q_b", "t2_q_c", "t2_q_d"],
      answer: "t2_q_a", // Position 2
    },
  },
  // ── Topic 3: W-Questions (gap-fill) ──
  {
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: () => <Topic3Svg />,
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "gap-fill",
      sentence: "t3_gap_text",
      choices: ["t3_opt_was", "t3_opt_wer", "t3_opt_wo"],
      correctIndex: 0, // Was
      instruction: "t3_inst",
      hint1: "t3_h1",
      hint2: "t3_h2",
    },
    quiz: {
      question: "t3_q",
      choices: ["t3_q_a", "t3_q_b", "t3_q_c", "t3_q_d"],
      answer: "t3_q_a", // Wo?
    },
  },
];

// ─── DEF ────────────────────────────────────────────────────────────

const DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "❓",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const SentenceTypeExplorerK2 = memo(function SentenceTypeExplorerK2({
  color = "#10B981",
  onDone,
  lang = "de",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={2} explorerId="deutsch_k2_sentencetype" color={color} lang={lang} onDone={onDone} />;
});

export default SentenceTypeExplorerK2;
