"use client";
// LetterExplorerK1 — Island i1: Buchstabeninsel (Letters)
// Topic mode with interactive activities
// Topics: 1) Vowels  2) Vowel vs Consonant  3) Upper/Lowercase
// Uses: highlight-text, drag-to-bucket, match-pairs + MCQ quiz per topic

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSTRATIONS ──────────────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="letGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF2D78" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#FF6B9D" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#letGrad1)" rx="20" />
      <g transform="translate(120, 55)">
        {/* Vowels highlighted */}
        {["A", "E", "I", "O", "U"].map((v, i) => (
          <g key={v} transform={`translate(${(i - 2) * 40}, 0)`}>
            <circle r="16" fill="#FF2D78" opacity="0.9" />
            <text y="6" fontSize="18" fontWeight="900" fill="white" textAnchor="middle">{v}</text>
          </g>
        ))}
        {/* Musical notes to indicate singing sounds */}
        <text x="-70" y="45" fontSize="14" fill="#FF6B9D" textAnchor="middle">♪</text>
        <text x="0" y="50" fontSize="18" fill="#FF2D78" textAnchor="middle">♫</text>
        <text x="70" y="45" fontSize="14" fill="#FF6B9D" textAnchor="middle">♪</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0F9FF" rx="20" />
      <g transform="translate(120, 70)">
        {/* Two groups: vowels (red) and consonants (blue) */}
        <g transform="translate(-55, -20)">
          <rect x="-35" y="-20" width="70" height="50" rx="10" fill="#FEE2E2" stroke="#EF4444" strokeWidth="1.5" />
          {["A", "E", "I"].map((v, i) => (
            <text key={v} x={-15 + i * 15} y="8" fontSize="14" fontWeight="800" fill="#DC2626" textAnchor="middle">{v}</text>
          ))}
        </g>
        <g transform="translate(55, -20)">
          <rect x="-35" y="-20" width="70" height="50" rx="10" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="1.5" />
          {["B", "D", "K"].map((v, i) => (
            <text key={v} x={-15 + i * 15} y="8" fontSize="14" fontWeight="800" fill="#2563EB" textAnchor="middle">{v}</text>
          ))}
        </g>
        <text x="0" y="45" fontSize="10" fill="#64748B" textAnchor="middle">🔴 vs 🔵</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="letGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#letGrad3)" rx="20" />
      <g transform="translate(120, 55)">
        {/* Big A → small a pairs */}
        {[["A", "a"], ["B", "b"], ["D", "d"]].map(([big, small], i) => (
          <g key={big} transform={`translate(${(i - 1) * 60}, 0)`}>
            <text y="-5" fontSize="24" fontWeight="900" fill="#7C3AED" textAnchor="middle">{big}</text>
            <text y="5" fontSize="12" fill="#A78BFA" textAnchor="middle">↕</text>
            <text y="25" fontSize="24" fontWeight="900" fill="#A78BFA" textAnchor="middle">{small}</text>
          </g>
        ))}
      </g>
    </svg>
  );
});

// ─── LABELS (4 languages) ────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Buchstaben Entdecken",

    // ── Topic 1: Vowels ──
    t1_title: "Die Vokale",
    t1_text: "Im Alphabet gibt es besondere Buchstaben: A, E, I, O, U. Das sind die Vokale. Sie klingen offen und singend — probiere es aus: Aaa, Eee, Iii!",
    t1_b1: "Es gibt 5 Vokale: A, E, I, O, U",
    t1_b2: "Vokale klingen offen und laut",
    t1_b3: "Alle anderen Buchstaben heißen Konsonanten",
    // Interactive: highlight-text (find the vowels in a word)
    t1_inst: "Finde alle Vokale im Wort!",
    t1_h1: "Vokale sind: A, E, I, O, U.",
    t1_h2: "Tippe auf A, U und O — die Vokale. T ist ein Konsonant!",
    t1_w1: "A", t1_w2: "U", t1_w3: "T", t1_w4: "O",
    // Quiz
    t1_q: "Welcher Buchstabe ist ein Vokal?",
    t1_q_a: "E", t1_q_b: "B", t1_q_c: "K", t1_q_d: "S",

    // ── Topic 2: Vowel vs Consonant ──
    t2_title: "Vokal oder Konsonant?",
    t2_text: "Es gibt nur 5 Vokale: A, E, I, O, U. Alle anderen 21 Buchstaben sind Konsonanten. Konsonanten brauchen Vokale, um deutlich zu klingen!",
    t2_b1: "5 Vokale, 21 Konsonanten",
    t2_b2: "Konsonanten brauchen Vokale zum Klingen",
    t2_b3: "Jedes Wort hat mindestens einen Vokal",
    // Interactive: drag-to-bucket
    t2_inst: "Sortiere die Buchstaben: Vokal oder Konsonant?",
    t2_h1: "A, E, I, O, U sind Vokale. Der Rest sind Konsonanten.",
    t2_h2: "E und O sind Vokale. B, K, S und T sind Konsonanten.",
    t2_bucket_vokal: "Vokal 🔴",
    t2_bucket_kons: "Konsonant 🔵",
    t2_item_e: "E", t2_item_b: "B", t2_item_o: "O",
    t2_item_k: "K", t2_item_s: "S", t2_item_t: "T",
    // Quiz
    t2_q: "Wie viele Vokale gibt es im deutschen Alphabet?",
    t2_q_a: "5", t2_q_b: "3", t2_q_c: "8", t2_q_d: "21",

    // ── Topic 3: Upper/Lowercase ──
    t3_title: "Groß- und Kleinbuchstaben",
    t3_text: "Jeder Buchstabe hat zwei Formen: einen großen (Großbuchstabe) und einen kleinen (Kleinbuchstabe). Am Satzanfang schreiben wir immer groß!",
    t3_b1: "A und a sind derselbe Buchstabe",
    t3_b2: "Satzanfang: immer groß!",
    t3_b3: "Namen schreiben wir auch groß",
    // Interactive: match-pairs (uppercase ↔ lowercase)
    t3_inst: "Verbinde Groß- und Kleinbuchstaben!",
    t3_h1: "Jeder Großbuchstabe hat einen passenden Kleinbuchstaben.",
    t3_h2: "A gehört zu a, B zu b, D zu d, und so weiter.",
    t3_left_a: "A", t3_right_a: "a",
    t3_left_b: "B", t3_right_b: "b",
    t3_left_d: "D", t3_right_d: "d",
    t3_left_g: "G", t3_right_g: "g",
    t3_left_r: "R", t3_right_r: "r",
    // Quiz
    t3_q: "Wann schreiben wir einen Großbuchstaben?",
    t3_q_a: "Am Satzanfang", t3_q_b: "Am Satzende", t3_q_c: "Nie", t3_q_d: "Nur bei Vokalen",
  },
  en: {
    explorer_title: "Letter Explorer",
    t1_title: "The Vowels",
    t1_text: "The alphabet has special letters: A, E, I, O, U. These are vowels. They sound open and singing — try it out: Aaa, Eee, Iii!",
    t1_b1: "There are 5 vowels: A, E, I, O, U",
    t1_b2: "Vowels sound open and loud",
    t1_b3: "All other letters are consonants",
    t1_inst: "Find all the vowels in the word!",
    t1_h1: "Vowels are: A, E, I, O, U.",
    t1_h2: "Tap A, U and O — the vowels. T is a consonant!",
    t1_w1: "A", t1_w2: "U", t1_w3: "T", t1_w4: "O",
    t1_q: "Which letter is a vowel?",
    t1_q_a: "E", t1_q_b: "B", t1_q_c: "K", t1_q_d: "S",

    t2_title: "Vowel or Consonant?",
    t2_text: "There are only 5 vowels: A, E, I, O, U. All other 21 letters are consonants. Consonants need vowels to sound clearly!",
    t2_b1: "5 vowels, 21 consonants",
    t2_b2: "Consonants need vowels to sound",
    t2_b3: "Every word has at least one vowel",
    t2_inst: "Sort the letters: Vowel or Consonant?",
    t2_h1: "A, E, I, O, U are vowels. The rest are consonants.",
    t2_h2: "E and O are vowels. B, K, S and T are consonants.",
    t2_bucket_vokal: "Vowel 🔴",
    t2_bucket_kons: "Consonant 🔵",
    t2_item_e: "E", t2_item_b: "B", t2_item_o: "O",
    t2_item_k: "K", t2_item_s: "S", t2_item_t: "T",
    t2_q: "How many vowels are there in the alphabet?",
    t2_q_a: "5", t2_q_b: "3", t2_q_c: "8", t2_q_d: "21",

    t3_title: "Upper & Lowercase Letters",
    t3_text: "Every letter has two forms: a big one (uppercase) and a small one (lowercase). At the start of a sentence, we always write uppercase!",
    t3_b1: "A and a are the same letter",
    t3_b2: "Start of sentence: always uppercase!",
    t3_b3: "Names are also capitalized",
    t3_inst: "Match uppercase and lowercase letters!",
    t3_h1: "Every uppercase letter has a matching lowercase letter.",
    t3_h2: "A goes with a, B with b, D with d, and so on.",
    t3_left_a: "A", t3_right_a: "a",
    t3_left_b: "B", t3_right_b: "b",
    t3_left_d: "D", t3_right_d: "d",
    t3_left_g: "G", t3_right_g: "g",
    t3_left_r: "R", t3_right_r: "r",
    t3_q: "When do we write an uppercase letter?",
    t3_q_a: "At the start of a sentence", t3_q_b: "At the end", t3_q_c: "Never", t3_q_d: "Only for vowels",
  },
  hu: {
    explorer_title: "Betű felfedező",
    t1_title: "A magánhangzók",
    t1_text: "Az ábécében vannak különleges betűk: A, E, I, O, U. Ezek a magánhangzók. Nyílt, éneklő hangot adnak — próbáld ki: Aaa, Eee, Iii!",
    t1_b1: "5 magánhangzó van: A, E, I, O, U",
    t1_b2: "A magánhangzók nyíltan és hangosan szólnak",
    t1_b3: "Az összes többi betű mássalhangzó",
    t1_inst: "Keresd meg a szóban a magánhangzókat!",
    t1_h1: "Magánhangzók: A, E, I, O, U.",
    t1_h2: "Koppints az A, U és O betűkre — ezek a magánhangzók. T mássalhangzó!",
    t1_w1: "A", t1_w2: "U", t1_w3: "T", t1_w4: "O",
    t1_q: "Melyik betű magánhangzó?",
    t1_q_a: "E", t1_q_b: "B", t1_q_c: "K", t1_q_d: "S",

    t2_title: "Magánhangzó vagy mássalhangzó?",
    t2_text: "Csak 5 magánhangzó van: A, E, I, O, U. A többi 21 betű mássalhangzó. A mássalhangzóknak szükségük van magánhangzókra, hogy tisztán szóljanak!",
    t2_b1: "5 magánhangzó, 21 mássalhangzó",
    t2_b2: "Mássalhangzók magánhangzókat igényelnek",
    t2_b3: "Minden szóban van legalább egy magánhangzó",
    t2_inst: "Sorold be a betűket: magánhangzó vagy mássalhangzó?",
    t2_h1: "A, E, I, O, U magánhangzók. A többi mássalhangzó.",
    t2_h2: "E és O magánhangzók. B, K, S és T mássalhangzók.",
    t2_bucket_vokal: "Magánhangzó 🔴",
    t2_bucket_kons: "Mássalhangzó 🔵",
    t2_item_e: "E", t2_item_b: "B", t2_item_o: "O",
    t2_item_k: "K", t2_item_s: "S", t2_item_t: "T",
    t2_q: "Hány magánhangzó van az ábécében?",
    t2_q_a: "5", t2_q_b: "3", t2_q_c: "8", t2_q_d: "21",

    t3_title: "Nagy- és kisbetűk",
    t3_text: "Minden betűnek két formája van: egy nagy (nagybetű) és egy kicsi (kisbetű). A mondat elején mindig nagybetűvel írunk!",
    t3_b1: "A és a ugyanaz a betű",
    t3_b2: "Mondat eleje: mindig nagybetű!",
    t3_b3: "A neveket is nagybetűvel írjuk",
    t3_inst: "Párosítsd a nagy- és kisbetűket!",
    t3_h1: "Minden nagybetűnek van egy kisbetű párja.",
    t3_h2: "A → a, B → b, D → d, és így tovább.",
    t3_left_a: "A", t3_right_a: "a",
    t3_left_b: "B", t3_right_b: "b",
    t3_left_d: "D", t3_right_d: "d",
    t3_left_g: "G", t3_right_g: "g",
    t3_left_r: "R", t3_right_r: "r",
    t3_q: "Mikor írunk nagybetűt?",
    t3_q_a: "Mondat elején", t3_q_b: "Mondat végén", t3_q_c: "Soha", t3_q_d: "Csak magánhangzóknál",
  },
  ro: {
    explorer_title: "Explorator de litere",
    t1_title: "Vocalele",
    t1_text: "În alfabet există litere speciale: A, E, I, O, U. Acestea sunt vocalele. Sună deschis și melodios — încearcă: Aaa, Eee, Iii!",
    t1_b1: "Există 5 vocale: A, E, I, O, U",
    t1_b2: "Vocalele sună deschis și puternic",
    t1_b3: "Toate celelalte litere sunt consoane",
    t1_inst: "Găsește toate vocalele din cuvânt!",
    t1_h1: "Vocalele sunt: A, E, I, O, U.",
    t1_h2: "Atinge A, U și O — vocalele. T este o consoană!",
    t1_w1: "A", t1_w2: "U", t1_w3: "T", t1_w4: "O",
    t1_q: "Care literă este o vocală?",
    t1_q_a: "E", t1_q_b: "B", t1_q_c: "K", t1_q_d: "S",

    t2_title: "Vocală sau consoană?",
    t2_text: "Există doar 5 vocale: A, E, I, O, U. Celelalte 21 de litere sunt consoane. Consoanele au nevoie de vocale pentru a suna clar!",
    t2_b1: "5 vocale, 21 consoane",
    t2_b2: "Consoanele au nevoie de vocale",
    t2_b3: "Fiecare cuvânt are cel puțin o vocală",
    t2_inst: "Sortează literele: Vocală sau Consoană?",
    t2_h1: "A, E, I, O, U sunt vocale. Restul sunt consoane.",
    t2_h2: "E și O sunt vocale. B, K, S și T sunt consoane.",
    t2_bucket_vokal: "Vocală 🔴",
    t2_bucket_kons: "Consoană 🔵",
    t2_item_e: "E", t2_item_b: "B", t2_item_o: "O",
    t2_item_k: "K", t2_item_s: "S", t2_item_t: "T",
    t2_q: "Câte vocale sunt în alfabet?",
    t2_q_a: "5", t2_q_b: "3", t2_q_c: "8", t2_q_d: "21",

    t3_title: "Litere mari și mici",
    t3_text: "Fiecare literă are două forme: una mare (majusculă) și una mică (minusculă). La începutul propoziției scriem întotdeauna cu majusculă!",
    t3_b1: "A și a sunt aceeași literă",
    t3_b2: "Începutul propoziției: întotdeauna majusculă!",
    t3_b3: "Numele se scriu și ele cu majusculă",
    t3_inst: "Potrivește literele mari cu cele mici!",
    t3_h1: "Fiecare majusculă are o minusculă corespondentă.",
    t3_h2: "A merge cu a, B cu b, D cu d, și așa mai departe.",
    t3_left_a: "A", t3_right_a: "a",
    t3_left_b: "B", t3_right_b: "b",
    t3_left_d: "D", t3_right_d: "d",
    t3_left_g: "G", t3_right_g: "g",
    t3_left_r: "R", t3_right_r: "r",
    t3_q: "Când scriem cu literă mare?",
    t3_q_a: "La începutul propoziției", t3_q_b: "La sfârșit", t3_q_c: "Niciodată", t3_q_d: "Doar la vocale",
  },
};

// ─── TOPICS ─────────────────────────────────────────────────────────

const TOPICS: TopicDef[] = [
  // ── Topic 1: Vowels — highlight-text (find vowels in "AUTO") ──
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: () => <Topic1Svg />,
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "highlight-text",
      tokens: ["t1_w1", "t1_w2", "t1_w3", "t1_w4"],  // A U T O
      correctIndices: [0, 1, 3],  // A, U, O are vowels (not T)
      instruction: "t1_inst",
      hint1: "t1_h1",
      hint2: "t1_h2",
    },
    quiz: {
      question: "t1_q",
      choices: ["t1_q_a", "t1_q_b", "t1_q_c", "t1_q_d"],
      answer: "t1_q_a",  // E
    },
  },
  // ── Topic 2: Vowel vs Consonant — drag-to-bucket ──
  {
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: () => <Topic2Svg />,
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [
        { id: "vokal", label: "t2_bucket_vokal" },
        { id: "kons", label: "t2_bucket_kons" },
      ],
      items: [
        { text: "t2_item_e", bucketId: "vokal" },
        { text: "t2_item_b", bucketId: "kons" },
        { text: "t2_item_o", bucketId: "vokal" },
        { text: "t2_item_k", bucketId: "kons" },
        { text: "t2_item_s", bucketId: "kons" },
        { text: "t2_item_t", bucketId: "kons" },
      ],
      instruction: "t2_inst",
      hint1: "t2_h1",
      hint2: "t2_h2",
    },
    quiz: {
      question: "t2_q",
      choices: ["t2_q_a", "t2_q_b", "t2_q_c", "t2_q_d"],
      answer: "t2_q_a",  // 5
    },
  },
  // ── Topic 3: Upper/Lowercase — match-pairs ──
  {
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: () => <Topic3Svg />,
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "match-pairs",
      pairs: [
        { left: "t3_left_a", right: "t3_right_a" },
        { left: "t3_left_b", right: "t3_right_b" },
        { left: "t3_left_d", right: "t3_right_d" },
        { left: "t3_left_g", right: "t3_right_g" },
        { left: "t3_left_r", right: "t3_right_r" },
      ],
      instruction: "t3_inst",
      hint1: "t3_h1",
      hint2: "t3_h2",
    },
    quiz: {
      question: "t3_q",
      choices: ["t3_q_a", "t3_q_b", "t3_q_c", "t3_q_d"],
      answer: "t3_q_a",  // Am Satzanfang
    },
  },
];

// ─── DEF ────────────────────────────────────────────────────────────

const DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "🔤",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const LetterExplorerK1 = memo(function LetterExplorerK1({
  color = "#FF2D78",
  onDone,
  lang = "de",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={1} explorerId="deutsch_k1_letter" color={color} lang={lang} onDone={onDone} />;
});

export default LetterExplorerK1;
