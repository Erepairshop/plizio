"use client";
// SpellingExplorerK4 — Island i8: Rechtschreibung (Spelling K4)
// Topics: 1) das vs dass 2) ß vs ss 3) Dehnungs-h 4) Großschreibung 5) Gemischtes Quiz

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSTRATIONS ──────────────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0F9FF" rx="20" />
      <g transform="translate(120, 70)">
        <rect x="-80" y="-20" width="60" height="30" rx="4" fill="#BAE6FD" />
        <text x="-50" y="0" fontSize="16" fontWeight="bold" fill="#0284C7" textAnchor="middle">das</text>
        <text x="-50" y="25" fontSize="10" fill="#0369A1" textAnchor="middle">Artikel</text>

        <rect x="20" y="-20" width="60" height="30" rx="4" fill="#7DD3FC" />
        <text x="50" y="0" fontSize="16" fontWeight="bold" fill="#0284C7" textAnchor="middle">dass</text>
        <text x="50" y="25" fontSize="10" fill="#0369A1" textAnchor="middle">Bindewort</text>

        <text x="0" y="45" fontSize="12" fontWeight="bold" fill="#0369A1" textAnchor="middle">dieses, jenes, welches?</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FEF2F2" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-50" y="-10" fontSize="24" fontWeight="bold" fill="#B91C1C" textAnchor="middle">ss</text>
        <text x="-50" y="15" fontSize="10" fill="#991B1B" textAnchor="middle">kurzer Vokal</text>
        <text x="-50" y="30" fontSize="12" fontWeight="bold" fill="#7F1D1D" textAnchor="middle">(Fluss)</text>

        <path d="M -15,0 L 15,0" stroke="#FCA5A5" strokeWidth="2" strokeDasharray="2 2" />

        <text x="50" y="-10" fontSize="24" fontWeight="bold" fill="#B91C1C" textAnchor="middle">ß</text>
        <text x="50" y="15" fontSize="10" fill="#991B1B" textAnchor="middle">langer Vokal</text>
        <text x="50" y="30" fontSize="12" fontWeight="bold" fill="#7F1D1D" textAnchor="middle">(Fuß)</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0FDF4" rx="20" />
      <g transform="translate(120, 70)">
        <text x="0" y="-20" fontSize="16" fontWeight="bold" fill="#15803D" textAnchor="middle">Dehnungs-h</text>
        <text x="0" y="15" fontSize="30" fontWeight="black" fill="#166534" textAnchor="middle">U<tspan fill="#4ADE80">h</tspan>r</text>
        <text x="0" y="40" fontSize="10" fill="#14532D" textAnchor="middle">Macht den Vokal lang!</text>
      </g>
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FFFBEB" rx="20" />
      <g transform="translate(120, 70)">
        <text x="0" y="-15" fontSize="16" fontWeight="bold" fill="#B45309" textAnchor="middle">Großschreibung</text>
        <rect x="-80" y="5" width="160" height="25" rx="4" fill="#FDE68A" />
        <text x="0" y="22" fontSize="14" fontWeight="bold" fill="#92400E" textAnchor="middle">das Lesen, etwas Gutes</text>
        <text x="0" y="45" fontSize="10" fill="#B45309" textAnchor="middle">Verben & Adjektive als Nomen!</text>
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="k4Grad8_5" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EC4899" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#BE185D" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#k4Grad8_5)" rx="20" />
      <g transform="translate(120, 70)">
        <text x="0" y="-10" fontSize="30" textAnchor="middle">✍️</text>
        <text x="0" y="25" fontSize="16" fontWeight="bold" fill="#BE185D" textAnchor="middle">Rechtschreib-Mix</text>
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Rechtschreibung K4",

    // T1
    t1_title: "das oder dass?",
    t1_text: "'das' (mit einem s) ist ein Artikel oder Pronomen. Man kann es durch 'dieses', 'jenes' oder 'welches' ersetzen. 'dass' (mit ss) ist ein Bindewort für Nebensätze.",
    t1_b1: "Artikel: Das Haus ist groß.",
    t1_b2: "Pronomen: Das ist schön.",
    t1_b3: "Bindewort: Ich weiß, dass du kommst.",
    t1_inst: "Welches Wort passt in die Lücke?",
    t1_h1: "Kannst du 'dieses' einsetzen? Nein. Es ist ein Nebensatz.",
    t1_h2: "Wir brauchen das Bindewort mit doppeltem 's': dass.",
    t1_gap_sentence: "Ich hoffe, {gap} es dir heute gut geht.",
    t1_c1: "dass", t1_c2: "das", t1_c3: "daß",
    t1_q: "Wann schreiben wir 'das' mit nur EINEM s?",
    t1_q_a: "Wenn wir 'dieses', 'jenes' oder 'welches' sagen können.", t1_q_b: "Wenn es ein Nebensatz ist.", t1_q_c: "Nach einem Komma.", t1_q_d: "Nie.",

    // T2
    t2_title: "Die s-Laute (s, ss, ß)",
    t2_text: "Nach einem KURZEN Vokal (Selbstlaut) schreiben wir immer 'ss' (z.B. der Fluss). Nach einem LANGEN Vokal oder Zwielaut (au, ei, eu) schreiben wir 'ß' (z.B. der Fuß, heiß).",
    t2_b1: "ss (kurz): Wasser, essen, nass",
    t2_b2: "ß (lang): Straße, groß, süß",
    t2_b3: "ß (nach ei/au): heiß, draußen",
    t2_inst: "Gehört das Wort in die 'ss'- oder 'ß'-Gruppe? Sortiere sie!",
    t2_h1: "Sprich das Wort laut: Ist der Vokal davor schnell (ss) oder gezogen (ß)?",
    t2_h2: "Fluss ist kurz. Fuß und Straße sind lang.",
    t2_bucket_ss: "ss (kurzer Vokal)",
    t2_bucket_sz: "ß (langer Vokal / au, ei)",
    t2_item_fluss: "Fluss", t2_item_nass: "nass", t2_item_essen: "essen",
    t2_item_fuss: "Fuß", t2_item_strasse: "Straße", t2_item_heiss: "heiß",
    t2_q: "Wie schreibt man das Wort für 'sweet' im Deutschen?",
    t2_q_a: "süß", t2_q_b: "süss", t2_q_c: "süs", t2_q_d: "süsz",

    // T3
    t3_title: "Das Dehnungs-h",
    t3_text: "Manchmal wird ein Vokal lang gesprochen, aber es folgt kein Doppelvokal. Dann steht oft ein stummes 'h' (Dehnungs-h) vor den Buchstaben l, m, n oder r.",
    t3_b1: "Vor l, m, n, r: Zahl, Rahmen, Zahn, fahren",
    t3_b2: "Das 'h' wird NICHT gesprochen!",
    t3_b3: "Ausnahmen: Schule, Name (kein h).",
    t3_inst: "Welches Wort mit stummem 'h' passt in die Lücke?",
    t3_h1: "Wir suchen das Wort für 'drive/go by vehicle'.",
    t3_h2: "Das Wort heißt 'fahren' (mit Dehnungs-h nach dem a).",
    t3_gap_sentence: "Wir {gap} morgen mit dem Zug nach Berlin.",
    t3_c1: "fahren", t3_c2: "faren", t3_c3: "farren",
    t3_q: "Vor welchen vier Buchstaben steht das Dehnungs-h besonders oft?",
    t3_q_a: "l, m, n, r", t3_q_b: "a, e, i, o", t3_q_c: "s, t, p, k", t3_q_d: "x, y, z, q",

    // T4
    t4_title: "Großschreibung",
    t4_text: "Du weißt: Nomen und Satzanfänge schreibt man groß. Aber Achtung: Manchmal werden auch Verben oder Adjektive zu Nomen! Das nennt man 'Nominalisierung'.",
    t4_b1: "Verb als Nomen: das Lesen, beim Schwimmen",
    t4_b2: "Adjektiv als Nomen: etwas Schönes, nichts Neues",
    t4_b3: "Signalwörter: Artikel (das) oder Wörter wie etwas/nichts.",
    t4_inst: "Welche Wörter müssen in diesem Satz großgeschrieben werden? Markiere sie!",
    t4_h1: "Der Satzanfang wird immer großgeschrieben.",
    t4_h2: "Das Wort 'Lesen' ist hier ein Nomen (das Lesen).",
    t4_w1: "Ich", t4_w2: "mag", t4_w3: "das", t4_w4: "Lesen", t4_w5: "sehr.",
    t4_q: "Warum schreibt man 'Gutes' in 'etwas Gutes' groß?",
    t4_q_a: "Weil das Adjektiv wie ein Nomen gebraucht wird.", t4_q_b: "Weil es am Satzanfang steht.", t4_q_c: "Weil alle Adjektive groß sind.", t4_q_d: "Weil es ein Fehler ist.",

    // T5
    t5_title: "Gemischtes Quiz",
    t5_text: "Lass uns alles kombinieren! Achte auf die Kommas, das 'dass', das 'ß' und die Großschreibung.",
    t5_b1: "das vs dass prüfen.",
    t5_b2: "ss vs ß prüfen.",
    t5_b3: "Groß/Kleinschreibung prüfen.",
    t5_inst: "Bringe den Satz in die richtige Reihenfolge!",
    t5_h1: "Beginne mit dem Hauptsatz: 'Ich weiß,'",
    t5_h2: "Dann der Nebensatz mit der Konjunktion: 'dass das Haus groß ist.'",
    t5_w1: "Ich", t5_w2: "weiß,", t5_w3: "dass", t5_w4: "das", t5_w5: "Haus", t5_w6: "groß", t5_w7: "ist.",
    t5_q: "Welcher Satz ist absolut richtig geschrieben?",
    t5_q_a: "Ich hoffe, dass du kommst.", t5_q_b: "Ich hoffe, das du kommst.", t5_q_c: "Ich hoffe dass, du kommst.", t5_q_d: "Ich hoffe, dass du komst.",
  },
  en: {
    explorer_title: "Spelling",
    t1_inst: "Which word fits in the gap?",
    t1_h1: "Can you insert 'dieses' (this one)? No. It's a subordinate clause.",
    t1_h2: "We need the conjunction with double 's': dass.",
    t2_inst: "Does the word belong in the 'ss' or 'ß' group? Sort them!",
    t2_h1: "Say the word out loud: Is the vowel before it fast (ss) or drawn out (ß)?",
    t2_h2: "Fluss is short. Fuß and Straße are long.",
    t2_bucket_ss: "ss (short vowel)",
    t2_bucket_sz: "ß (long vowel)",
    t3_inst: "Which word with a silent 'h' fits in the gap?",
    t3_h1: "We are looking for the word for 'drive/go by vehicle'.",
    t3_h2: "The word is 'fahren' (with silent h after a).",
    t4_inst: "Which words must be capitalized in this sentence? Highlight them!",
    t4_h1: "The beginning of a sentence is always capitalized.",
    t4_h2: "The word 'Lesen' is a noun here (das Lesen).",
    t5_inst: "Put the sentence in the correct order!",
    t5_h1: "Start with the main clause: 'Ich weiß,' (I know,)",
    t5_h2: "Then the subordinate clause: 'dass das Haus groß ist.'",
  },
  hu: {
    explorer_title: "Helyesírás",
    t1_inst: "Melyik szó illik az űrbe?",
    t1_h1: "Be tudod helyettesíteni a 'dieses' (ez) szóval? Nem. Ez egy mellékmondat.",
    t1_h2: "A dupla 's'-es kötőszóra van szükségünk: dass.",
    t2_inst: "A szó az 'ss' vagy az 'ß' csoportba tartozik? Válogasd szét!",
    t2_h1: "Mondd ki hangosan: a magánhangzó gyors (ss) vagy elnyújtott (ß)?",
    t2_h2: "A Fluss rövid. A Fuß és Straße hosszú.",
    t2_bucket_ss: "ss (rövid mgh.)",
    t2_bucket_sz: "ß (hosszú mgh.)",
    t3_inst: "Melyik néma 'h'-s szó illik az űrbe?",
    t3_h1: "Az utazik/vezet igét keressük.",
    t3_h2: "A szó a 'fahren' (néma h-val az a után).",
    t4_inst: "Melyik szavakat kell nagybetűvel írni ebben a mondatban? Jelöld ki őket!",
    t4_h1: "A mondat elejét mindig nagybetűvel írjuk.",
    t4_h2: "A 'Lesen' itt egy főnév (das Lesen = az olvasás).",
    t5_inst: "Tedd a mondatot a helyes sorrendbe!",
    t5_h1: "Kezdd a főmondattal: 'Ich weiß,' (Tudom,)",
    t5_h2: "Aztán a mellékmondat: 'dass das Haus groß ist.'",
  },
  ro: {
    explorer_title: "Ortografie",
    t1_inst: "Ce cuvânt se potrivește în spațiu?",
    t1_h1: "Poți introduce 'dieses' (acesta)? Nu. Este o propoziție secundară.",
    t1_h2: "Avem nevoie de conjuncția cu 's' dublu: dass.",
    t2_inst: "Cuvântul aparține grupului 'ss' sau 'ß'? Sortează-le!",
    t2_h1: "Rostește cuvântul cu voce tare: vocala este scurtă (ss) sau lungă (ß)?",
    t2_h2: "Fluss este scurt. Fuß și Straße sunt lungi.",
    t2_bucket_ss: "ss (vocală scurtă)",
    t2_bucket_sz: "ß (vocală lungă)",
    t3_inst: "Ce cuvânt cu un 'h' mut se potrivește în spațiu?",
    t3_h1: "Căutăm cuvântul pentru 'a conduce/a călători'.",
    t3_h2: "Cuvântul este 'fahren' (cu h mut după a).",
    t4_inst: "Care cuvinte trebuie scrise cu majusculă în această propoziție? Marchează-le!",
    t4_h1: "Începutul unei propoziții se scrie mereu cu majusculă.",
    t4_h2: "Cuvântul 'Lesen' este un substantiv aici (das Lesen).",
    t5_inst: "Așază propoziția în ordinea corectă!",
    t5_h1: "Începe cu propoziția principală: 'Ich weiß,' (Știu,)",
    t5_h2: "Apoi propoziția secundară: 'dass das Haus groß ist.'",
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
      type: "drag-to-bucket",
      buckets: [
        { id: "ss", label: "t2_bucket_ss" },
        { id: "sz", label: "t2_bucket_sz" },
      ],
      items: [
        { text: "t2_item_fluss", bucketId: "ss" },
        { text: "t2_item_fuss", bucketId: "sz" },
        { text: "t2_item_nass", bucketId: "ss" },
        { text: "t2_item_strasse", bucketId: "sz" },
        { text: "t2_item_essen", bucketId: "ss" },
        { text: "t2_item_heiss", bucketId: "sz" },
      ],
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
      type: "gap-fill",
      sentence: "t3_gap_sentence",
      choices: ["t3_c1", "t3_c2", "t3_c3"], // fahren, faren, farren
      correctIndex: 0,
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
      tokens: ["t4_w1", "t4_w2", "t4_w3", "t4_w4", "t4_w5"], // Ich mag das Lesen sehr.
      correctIndices: [0, 3], // Ich, Lesen
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
      words: ["t5_w1", "t5_w2", "t5_w3", "t5_w4", "t5_w5", "t5_w6", "t5_w7"], // Ich weiß, dass das Haus groß ist.
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

const SpellingExplorerK4 = memo(function SpellingExplorerK4({
  color = "#D97706",
  onDone,
  lang = "de",
}: {
  color?: string;
  onDone?: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={4} explorerId="deutsch_k4_spelling" color={color} lang={lang} onDone={onDone} />;
});

export default SpellingExplorerK4;
