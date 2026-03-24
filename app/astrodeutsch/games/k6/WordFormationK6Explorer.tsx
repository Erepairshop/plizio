"use client";
// WordFormationK6Explorer — Island i7: Wortbildung (Word Formation)
// Topics: 1) Komposita 2) Ableitung (Präfix/Suffix) 3) Nominalisierung 4) Adjektivbildung 5) Gemischtes Quiz

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSTRATIONS ──────────────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#EEF2FF" rx="20" />
      <g transform="translate(120, 70)">
        <rect x="-80" y="-15" width="50" height="30" rx="4" fill="#C7D2FE" stroke="#4338CA" />
        <text x="-55" y="5" fontSize="10" fontWeight="bold" fill="#312E81" textAnchor="middle">Haus</text>
        <text x="-15" y="5" fontSize="16" fill="#4338CA" textAnchor="middle">+</text>
        <rect x="0" y="-15" width="50" height="30" rx="4" fill="#818CF8" stroke="#4338CA" />
        <text x="25" y="5" fontSize="10" fontWeight="bold" fill="white" textAnchor="middle">Tür</text>
        <path d="M 55,0 L 75,0" stroke="#4338CA" strokeWidth="2" markerEnd="url(#arrow)" />
        <text x="0" y="40" fontSize="12" fontWeight="bold" fill="#312E81" textAnchor="middle">die Haustür</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0FDF4" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-60" y="-10" fontSize="12" fill="#15803D" textAnchor="middle">Präfix</text>
        <text x="0" y="-10" fontSize="12" fill="#15803D" textAnchor="middle">Stamm</text>
        <text x="60" y="-10" fontSize="12" fill="#15803D" textAnchor="middle">Suffix</text>
        <text x="-60" y="15" fontSize="14" fontWeight="black" fill="#166534" textAnchor="middle">ver-</text>
        <text x="0" y="15" fontSize="14" fontWeight="black" fill="#166534" textAnchor="middle">sprech-</text>
        <text x="60" y="15" fontSize="14" fontWeight="black" fill="#166534" textAnchor="middle">-ung</text>
        <text x="0" y="45" fontSize="12" fontWeight="bold" fill="#14532D" textAnchor="middle">Versprechung</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FFF7ED" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-40" y="0" fontSize="14" fill="#C2410C" textAnchor="middle">laufen</text>
        <path d="M -15,0 L 15,0" stroke="#F97316" strokeWidth="2" markerEnd="url(#arrow)" />
        <rect x="25" y="-15" width="80" height="30" rx="4" fill="#FED7AA" stroke="#EA580C" />
        <text x="65" y="5" fontSize="12" fontWeight="bold" fill="#9A3412" textAnchor="middle">das Laufen</text>
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Wortbau-Meister K6",
    // T1
    t1_title: "Zusammensetzung (Komposita)",
    t1_text: "Im Deutschen können wir Wörter wie Legosteine zusammenstecken. Das neue Wort heißt Kompositum. Der Artikel richtet sich IMMER nach dem letzten Wort.",
    t1_b1: "Nomen + Nomen: der Apfel + der Baum = der Apfelbaum",
    t1_b2: "Verb + Nomen: waschen + die Maschine = die Waschmaschine",
    t1_b3: "Das letzte Wort ist der 'Kopf' und bestimmt das Genus.",
    t1_inst: "Welcher Artikel passt zum neuen Wort?",
    t1_h1: "Schau dir das letzte Wort an: 'die Kiste'.",
    t1_h2: "Das Kompositum bekommt den Artikel 'die'.",
    t1_gap_sentence: "das Spiel + die Kiste = {gap} Spielkiste.",
    t1_c1: "die", t1_c2: "das", t1_c3: "der",
    t1_q: "Welches Wort bestimmt den Artikel bei einem zusammengesetzten Nomen?",
    t1_q_a: "Das letzte Wort", t1_q_b: "Das erste Wort", t1_q_c: "Das längste Wort", t1_q_d: "Das Verb",

    // T2
    t2_title: "Ableitung mit Präfix und Suffix",
    t2_text: "Durch Vorsilben (Präfixe) vagy Nachsilben (Suffixe) entstehen neue Wörter vagy Wortarten.",
    t2_b1: "Präfixe (ändern Bedeutung): ver-laufen, be-suchen, ent-kommen.",
    t2_b2: "Suffixe (ändern Wortart): schön (Adj) + -heit = die Schönheit (Nomen).",
    t2_b3: "Häufige Nomen-Suffixe: -ung, -heit, -keit, -schaft, -nis.",
    t2_inst: "Welches Suffix macht aus dem Adjektiv ein Nomen? Verbinde!",
    t2_h1: "'krank' braucht ein Suffix, um eine Krankheit zu werden.",
    t2_h2: "'frei' wird zur 'Freiheit'.",
    t2_l1: "krank", t2_r1: "-heit",
    t2_l2: "dankbar", t2_r2: "-keit",
    t2_l3: "erfind", t2_r3: "-ung",
    t2_l4: "finster", t2_r4: "-nis",
    t2_q: "Wie nennt man eine Silbe, die VOR den Wortstamm gesetzt wird?",
    t2_q_a: "Präfix", t2_q_b: "Suffix", t2_q_c: "Kopf", t2_q_d: "Endung",

    // T3
    t3_title: "Nominalisierung",
    t3_text: "Verben vagy Adjektive können als Nomen gebraucht werden. Dann schreibt man sie groß! Man erkennt sie oft an Signalwörtern wie Artikeln vagy Präpositionen.",
    t3_b1: "Vom Verb: laufen ➔ das Laufen, beim (bei dem) Essen.",
    t3_b2: "Vom Adjektiv: neu ➔ etwas Neues, gut ➔ das Gute.",
    t3_b3: "Signalwörter: das, zum, beim, vom, etwas, viel, wenig.",
    t3_inst: "Markiere die nominalisierten Wörter, die großgeschrieben werden müssen!",
    t3_h1: "Suche nach Wörtern nach 'beim' vagy 'das'.",
    t3_h2: "'Schwimmen' und 'Laufen' sind hier Nomen.",
    t3_w1: "Beim", t3_w2: "Schwimmen", t3_w3: "und", t3_w4: "beim", t3_w5: "Laufen", t3_w6: "braucht", t3_w7: "man", t3_w8: "Kraft.",
    t3_q: "Warum schreibt man 'Singen' in 'Das Singen macht Spaß' groß?",
    t3_q_a: "Weil es als Nomen gebraucht wird (Nominalisierung).", t3_q_b: "Weil alle Verben groß sind.", t3_q_c: "Weil es ein Eigenname ist.", t3_q_d: "Es ist ein Fehler.",

    // T4
    t4_title: "Adjektivbildung",
    t4_text: "Aus Nomen vagy Verben können wir mit Suffixen Adjektive machen. So beschreiben wir Dinge genauer.",
    t4_b1: "Nomen + -ig: der Dreck ➔ dreckig",
    t4_b2: "Nomen + -lich: das Glück ➔ glücklich",
    t4_b3: "Nomen + -isch: Neid ➔ neidisch",
    t4_inst: "Bringe die Bausteine in die richtige Reihenfolge, um ein Adjektiv zu bauen!",
    t4_h1: "Wir wollen das Adjektiv für 'sun' (Sonne) bauen.",
    t4_h2: "Das Ergebnis ist 'sonnig'.",
    t4_w21: "Sonn", t4_w22: "e", t4_w23: "➔", t4_w24: "sonn", t4_w25: "ig",
    t4_q: "Welches Suffix macht aus 'Kind' ein Adjektiv?",
    t4_q_a: "-lich (kindlich)", t4_q_b: "-heit", t4_q_c: "-ung", t4_q_d: "-nis",

    // T5
    t5_title: "Gemischtes Quiz",
    t5_text: "Zeig dein Wissen über die Architektur der Wörter! Komposita, Ableitungen und die Großschreibung bei Nominalisierung.",
    t5_b1: "Letztes Wort bestimmt den Artikel.",
    t5_b2: "Nominalisierungen groß schreiben.",
    t5_b3: "Suffixe erkennen.",
    t5_inst: "Ist das Wort ein Kompositum (zusammengesetzt) vagy eine Ableitung (mit Suffix)? Sortiere!",
    t5_h1: "Zwei Wörter zusammen = Kompositum.",
    t5_h2: "Wortstamm + Silbe (-ung, -heit) = Ableitung.",
    t5_bucket_kom: "Kompositum (A+B)",
    t5_bucket_abl: "Ableitung (Stamm+Silbe)",
    t5_item_k1: "Haustür", t5_item_k2: "Fußball",
    t5_item_a1: "Freiheit", t5_item_a2: "Heizung",
    t5_q: "Welcher Artikel ist richtig für 'Auto' + 'Bahn'?",
    t5_q_a: "die (Autobahn)", t5_q_b: "das (Autobahn)", t5_q_c: "der (Autobahn)", t5_q_d: "den (Autobahn)",
  },
  en: {
    explorer_title: "Word Formation Pro",
    t1_inst: "Which article fits the new word?",
    t2_inst: "Which suffix turns the adjective into a noun? Match!",
    t3_inst: "Mark the nominalized words that must be capitalized!",
    t4_inst: "Put the blocks in the correct order to build an adjective!",
    t5_inst: "Is the word a compound or a derivation? Sort!",
  },
  hu: {
    explorer_title: "Szóképző mester",
    t1_inst: "Melyik névelő illik az új szóhoz?",
    t2_inst: "Melyik képző csinál főnevet a melléknévből? Kösd össze!",
    t3_inst: "Jelöld ki a főnevesült szavakat, amiket nagybetűvel kell írni!",
    t4_inst: "Tedd a darabokat a megfelelő sorrendbe, hogy melléknevet kapj!",
    t5_inst: "Összetett szó vagy képzett szó? Válogasd szét!",
  },
  ro: {
    explorer_title: "Expert Formarea Cuvintelor",
    t1_inst: "Care articol se potrivește noului cuvânt?",
    t2_inst: "Care sufix transformă adjectivul în substantiv? Leagă-le!",
    t3_inst: "Marchează cuvintele nominalizate care trebuie scrise cu majusculă!",
    t4_inst: "Pune piesele în ordinea corectă pentru a forma un adjectiv!",
    t5_inst: "Este cuvântul compus sau derivat? Sortează-le!",
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
      choices: ["t1_c1", "t1_c2", "t1_c3"],
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
      type: "match-pairs",
      pairs: [
        { left: "t2_l1", right: "t2_r1" },
        { left: "t2_l2", right: "t2_r2" },
        { left: "t2_l3", right: "t2_r3" },
        { left: "t2_l4", right: "t2_r4" },
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
      type: "highlight-text",
      tokens: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6", "t3_w7", "t3_w8"],
      correctIndices: [1, 4],
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
    svg: () => <Topic1Svg />,
    bulletKeys: ["t4_b1", "t4_b2", "t4_b3"],
    interactive: {
      type: "word-order",
      words: ["t4_w24", "t4_w25"],
      correctOrder: [0, 1],
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
    svg: () => <Topic2Svg />,
    bulletKeys: ["t5_b1", "t5_b2", "t5_b3"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [
        { id: "kom", label: "t5_bucket_kom" },
        { id: "abl", label: "t5_bucket_abl" },
      ],
      items: [
        { text: "t5_item_k1", bucketId: "kom" },
        { text: "t5_item_a1", bucketId: "abl" },
        { text: "t5_item_k2", bucketId: "kom" },
        { text: "t5_item_a2", bucketId: "abl" },
      ],
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
  icon: "🏗️",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const WordFormationK6Explorer = memo(function WordFormationK6Explorer({
  color = "#4F46E5",
  onDone,
  lang = "de",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={6} explorerId="deutsch_k6_word_formation" color={color} lang={lang} onDone={onDone} />;
});

export default WordFormationK6Explorer;
