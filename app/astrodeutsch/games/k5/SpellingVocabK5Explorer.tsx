"use client";
// SpellingVocabK5Explorer — Island i8: Rechtschreibung & Wortschatz (Spelling & Vocabulary)
// Topics: 1) das vs dass 2) Dehnungs-h 3) Doppelkonsonanten 4) Nominalisierung 5) Gemischtes Quiz

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSTRATIONS ──────────────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0F9FF" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-50" y="-10" fontSize="20" fontWeight="bold" fill="#0369A1" textAnchor="middle">das</text>
        <text x="50" y="-10" fontSize="20" fontWeight="bold" fill="#0369A1" textAnchor="middle">dass</text>
        <path d="M -20,10 L 20,10" stroke="#0EA5E9" strokeWidth="2" strokeDasharray="4 2" />
        <text x="0" y="35" fontSize="12" fill="#0284C7" textAnchor="middle">Artikel vs. Konjunktion</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FDF2F8" rx="20" />
      <g transform="translate(120, 70)">
        <text x="0" y="-20" fontSize="16" fontWeight="bold" fill="#9D174D" textAnchor="middle">Dehnungs-h</text>
        <text x="0" y="15" fontSize="30" fontWeight="black" fill="#BE185D" textAnchor="middle">Le<tspan fill="#F472B6">h</tspan>rer</text>
        <circle cx="0" cy="15" r="45" fill="none" stroke="#F9A8D4" strokeWidth="1" strokeDasharray="5 5" />
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0FDF4" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-40" y="0" fontSize="24" fontWeight="bold" fill="#15803D" textAnchor="middle">m</text>
        <text x="40" y="0" fontSize="24" fontWeight="bold" fill="#15803D" textAnchor="middle">mm</text>
        <text x="0" y="35" fontSize="12" fill="#166534" textAnchor="middle">kurzer Vokal ➔ Doppelt!</text>
      </g>
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FFFBEB" rx="20" />
      <g transform="translate(120, 70)">
        <text x="0" y="-15" fontSize="14" fill="#B45309" textAnchor="middle">schwimmen ➔</text>
        <rect x="-60" y="5" width="120" height="30" rx="4" fill="#FDE68A" />
        <text x="0" y="25" fontSize="16" fontWeight="bold" fill="#92400E" textAnchor="middle">das Schwimmen</text>
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="k5Grad8_5" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#4C1D95" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#k5Grad8_5)" rx="20" />
      <g transform="translate(120, 70)">
        <text x="0" y="-5" fontSize="30" textAnchor="middle">📝</text>
        <text x="0" y="30" fontSize="16" fontWeight="bold" fill="#4C1D95" textAnchor="middle">Rechtschreib-Check</text>
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Rechtschreibung K5",

    // T1
    t1_title: "das oder dass?",
    t1_text: "Das Wort 'das' ist ein Artikel oder Pronomen (ersetzbar durch 'dieses/welches'). Das Wort 'dass' ist ein Bindewort, das einen Nebensatz einleitet.",
    t1_b1: "das = Artikel (Das Haus)",
    t1_b2: "dass = Konjunktion (Ich hoffe, dass...)",
    t1_b3: "Trick: Kannst du 'welches' sagen? Dann nur ein 's'!",
    t1_inst: "Welches Wort passt in die Lücke?",
    t1_h1: "Es leitet einen Wunsch/Satz ein.",
    t1_h2: "Hier brauchen wir 'dass' mit Doppel-s.",
    t1_gap_sentence: "Ich wünsche mir, {gap} du bald kommst.",
    t1_c1: "dass", t1_c2: "das", t1_c3: "daß",
    t1_q: "Wann schreibt man 'das' mit einem 's'?",
    t1_q_a: "Wenn es ein Artikel oder Relativpronomen ist", t1_q_b: "Am Ende eines Nebensatzes", t1_q_c: "Nach jedem Komma", t1_q_d: "Vor einem Verb",

    // T2
    t2_title: "Das Dehnungs-h",
    t2_text: "Das stumme 'h' macht den Vokal davor lang. Es steht oft vor den Buchstaben l, m, n und r.",
    t2_b1: "Beispiele: Lehrer, Wohnung, Bahn, Stuhl",
    t2_b2: "Man hört es nicht, man sieht es nur.",
    t2_b3: "Achtung: Es gibt auch Wörter ohne h (Name, Schal)!",
    t2_inst: "Welches Wort ist richtig geschrieben?",
    t2_h1: "Wir suchen das Wort für 'apartment'.",
    t2_h2: "Es wird mit h nach dem o geschrieben: Wohnung.",
    t2_gap_sentence: "Unsere neue {gap} ist sehr groß.",
    t2_c1: "Wohnung", t2_c2: "Wonung", t2_c3: "Wohnnung",
    t2_q: "In welchem Wort versteckt sich ein Dehnungs-h?",
    t2_q_a: "Zahn", t2_q_b: "Sonne", t2_q_c: "Wasser", t2_q_d: "Hase",

    // T3
    t3_title: "Doppelkonsonanten",
    t3_text: "Wenn ein Vokal ganz kurz und schnell gesprochen wird, folgen danach oft zwei gleiche Konsonanten.",
    t3_b1: "Sommer (kurzes o)",
    t3_b2: "kommen (kurzes o)",
    t3_b3: "rennen (kurzes e)",
    t3_inst: "Fehlt ein einfacher oder doppelter Buchstabe? Sortiere!",
    t3_h1: "Hör auf die Länge des Vokals.",
    t3_h2: "Sommer und kommen haben einen kurzen Vokal.",
    t3_bucket_einzel: "Einfach",
    t3_bucket_doppel: "Doppelt",
    t3_item_e1: "lesen", t3_item_e2: "schlafen",
    t3_item_d1: "Sommer", t3_item_d2: "kommen", t3_item_d3: "schwimmen",
    t3_q: "Wie schreibt man das Wort für 'summer'?",
    t3_q_a: "Sommer", t3_q_b: "Somer", t3_q_c: "Somerr", t3_q_d: "Somme",

    // T4
    t4_title: "Großschreibung (Nominalisierung)",
    t4_text: "In der 5. Klasse lernst du, dass Verben und Adjektive zu Nomen werden können. Man nennt das Nominalisierung. Dann schreibt man sie GROSS.",
    t4_b1: "Nach Artikeln: DAS Schwimmen, BEIM (bei dem) Laufen",
    t4_b2: "Nach Mengenangaben: ETWAS Gutes, VIEL Neues",
    t4_b3: "Signalwörter beachten!",
    t4_inst: "Markiere die Wörter, die großgeschrieben werden müssen!",
    t4_h1: "Satzanfang und Nomen/Nominalisierungen.",
    t4_h2: "'Essen' wird hier als Nomen benutzt (das Essen).",
    t4_w1: "Das", t4_w2: "Essen", t4_w3: "schmeckt", t4_w4: "heute", t4_w5: "sehr", t4_w6: "gut.",
    t4_q: "Warum schreibt man 'Schwimmen' in 'Ich gehe zum Schwimmen' groß?",
    t4_q_a: "Weil es durch das Wort 'zum' (zu dem) ein Nomen wird.", t4_q_b: "Weil alle Verben groß sind.", t4_q_c: "Weil es am Ende steht.", t4_q_d: "Es wird klein geschrieben.",

    // T5
    t5_title: "Gemischtes Quiz",
    t5_text: "Bist du ein Rechtschreib-Profi? Teste dein Wissen über h, doppelte Buchstaben und Großschreibung.",
    t5_b1: "Check: Vokallänge?",
    t5_b2: "Check: Signalwörter für Großschreibung?",
    t5_b3: "Check: das oder dass?",
    t5_inst: "Bringe den Satz in die richtige Reihenfolge!",
    t5_h1: "Beginne mit 'Es'.",
    t5_h2: "Achte auf die Großschreibung von 'Gutes'.",
    t5_w1: "Es", t5_w2: "gibt", t5_w3: "heute", t5_w4: "etwas", t5_w5: "Gutes", t5_w6: "zu", t5_w7: "essen.",
    t5_q: "Welches Wort ist korrekt geschrieben?",
    t5_q_a: "Fahrrad", t5_q_b: "Farad", t5_q_c: "Fahrad", t5_q_d: "Fahrradt",
  },
  en: {
    explorer_title: "Spelling",
    t1_inst: "Which word fits in the gap?",
    t1_h1: "It introduces a wish or sentence.",
    t1_h2: "Here we need 'dass' with double-s.",
    t2_inst: "Which word is spelled correctly?",
    t2_h1: "We are looking for the word for 'apartment'.",
    t2_h2: "It is spelled with an 'h' after the 'o': Wohnung.",
    t3_inst: "Missing a single or double letter? Sort them!",
    t3_h1: "Listen to the length of the vowel.",
    t3_h2: "Sommer and kommen have a short vowel.",
    t3_bucket_einzel: "Single",
    t3_bucket_doppel: "Double",
    t4_inst: "Highlight the words that must be capitalized!",
    t4_h1: "Start of sentence and nouns/nominalizations.",
    t4_h2: "'Essen' is used as a noun here (the food).",
    t5_inst: "Put the sentence in the correct order!",
    t5_h1: "Start with 'Es'.",
    t5_h2: "Pay attention to the capitalization of 'Gutes'.",
  },
  hu: {
    explorer_title: "Helyesírás",
    t1_inst: "Melyik szó illik az űrbe?",
    t1_h1: "Egy kívánságot vagy mellékmondatot vezet be.",
    t1_h2: "Ide a dupla 's'-es 'dass' kell.",
    t2_inst: "Melyik szó van helyesen írva?",
    t2_h1: "A 'lakás' (apartment) szót keressük.",
    t2_h2: "H-val írjuk az o után: Wohnung.",
    t3_inst: "Egyszerű vagy kettőzött betű hiányzik? Válogasd szét!",
    t3_h1: "Figyeld a magánhangzó hosszúságát.",
    t3_h2: "A Sommer és kommen magánhangzója rövid.",
    t3_bucket_einzel: "Egyszerű",
    t3_bucket_doppel: "Kettőzött",
    t4_inst: "Jelöld ki a nagybetűvel írandó szavakat!",
    t4_h1: "Mondatkezdés és főnevek/főnevesült alakok.",
    t4_h2: "Az 'Essen' itt főnévként szerepel (az evés/étel).",
    t5_inst: "Tedd a mondatot a helyes sorrendbe!",
    t5_h1: "Kezdd az 'Es' szóval.",
    t5_h2: "Figyelj a 'Gutes' nagybetűs írására.",
  },
  ro: {
    explorer_title: "Ortografie",
    t1_inst: "Ce cuvânt se potrivește în spațiu?",
    t1_h1: "Introduce o dorință sau o propoziție.",
    t1_h2: "Aici avem nevoie de 'dass' cu dublu-s.",
    t2_inst: "Care cuvânt este scris corect?",
    t2_h1: "Căutăm cuvântul pentru 'apartament'.",
    t2_h2: "Se scrie cu h după o: Wohnung.",
    t3_inst: "Lipsește o literă simplă sau dublă? Sortează-le!",
    t3_h1: "Ascultă lungimea vocalei.",
    t3_h2: "Sommer și kommen au o vocală scurtă.",
    t3_bucket_einzel: "Simplu",
    t3_bucket_doppel: "Dublu",
    t4_inst: "Marchează cuvintele care trebuie scrise cu majusculă!",
    t4_h1: "Începutul propoziției și substantivele.",
    t4_h2: "'Essen' este folosit ca substantiv aici (mâncarea).",
    t5_inst: "Așază propoziția în ordinea corectă!",
    t5_h1: "Începe cu 'Es'.",
    t5_h2: "Atenție la scrierea cu majusculă a cuvântului 'Gutes'.",
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
      type: "gap-fill",
      sentence: "t1_gap_sentence",
      choices: ["t1_c1", "t1_c2", "t1_c3"], // dass, das, daß
      correctIndex: 0,
      instruction: "t1_inst",
      hint1: "t1_h1",
      hint2: "t1_h2",
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
      type: "gap-fill",
      sentence: "t2_gap_sentence",
      choices: ["t2_c1", "t2_c2", "t2_c3"], // Wohnung, Wonung, Wohnnung
      correctIndex: 0,
      instruction: "t2_inst",
      hint1: "t2_h1",
      hint2: "t2_h2",
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
      type: "drag-to-bucket",
      buckets: [
        { id: "single", label: "t3_bucket_einzel" },
        { id: "double", label: "t3_bucket_doppel" },
      ],
      items: [
        { text: "t3_item_e1", bucketId: "single" },
        { text: "t3_item_d1", bucketId: "double" },
        { text: "t3_item_e2", bucketId: "single" },
        { text: "t3_item_d2", bucketId: "double" },
        { text: "t3_item_d3", bucketId: "double" },
      ],
      instruction: "t3_inst",
      hint1: "t3_h1",
      hint2: "t3_h2",
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
    svg: () => <Topic4Svg />,
    bulletKeys: ["t4_b1", "t4_b2", "t4_b3"],
    interactive: {
      type: "highlight-text",
      tokens: ["t4_w1", "t4_w2", "t4_w3", "t4_w4", "t4_w5", "t4_w6"], // Das Essen schmeckt heute sehr gut.
      correctIndices: [0, 1], // Das, Essen
      instruction: "t4_inst",
      hint1: "t4_h1",
      hint2: "t4_h2",
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
      type: "word-order",
      words: ["t5_w1", "t5_w2", "t5_w3", "t5_w4", "t5_w5", "t5_w6", "t5_w7"], // Es gibt heute etwas Gutes zu essen.
      correctOrder: [0, 1, 2, 3, 4, 5, 6],
      instruction: "t5_inst",
      hint1: "t5_h1",
      hint2: "t5_h2",
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
  icon: "✍️",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const SpellingVocabK5Explorer = memo(function SpellingVocabK5Explorer({
  color = "#D97706",
  onDone,
  lang = "de",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={5} explorerId="deutsch_k5_spelling_vocab" color={color} lang={lang} onDone={onDone} />;
});

export default SpellingVocabK5Explorer;
