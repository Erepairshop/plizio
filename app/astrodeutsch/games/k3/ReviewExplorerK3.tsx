"use client";
// ReviewExplorerK3 — Island i9: Große K3 Prüfung (The Big K3 Review)
// Topics: 1) Plural & Wortfamilien 2) Trennbare Verben & Satzbau 3) Adjektive & Perfekt

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSTRATIONS ──────────────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0F9FF" rx="20" />
      <g transform="translate(120, 70)">
        <text x="0" y="-20" fontSize="40" textAnchor="middle">📚</text>
        <text x="0" y="20" fontSize="16" fontWeight="bold" fill="#0369A1" textAnchor="middle">Wort-Profi</text>
        <path d="M -40,35 L 40,35" stroke="#0EA5E9" strokeWidth="2" strokeDasharray="4 2" />
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FDF2F8" rx="20" />
      <g transform="translate(120, 70)">
        <text x="0" y="-10" fontSize="35" textAnchor="middle">⚙️</text>
        <text x="0" y="25" fontSize="14" fontWeight="bold" fill="#9D174D" textAnchor="middle">Satz-Baumeister</text>
        <circle cx="-60" cy="10" r="10" fill="#F472B6" />
        <circle cx="60" cy="10" r="10" fill="#F472B6" />
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0FDFA" rx="20" />
      <g transform="translate(120, 70)">
        <text x="0" y="-15" fontSize="40" textAnchor="middle">🏆</text>
        <text x="0" y="25" fontSize="18" fontWeight="black" fill="#0D9488" textAnchor="middle">Klasse 3: Check!</text>
        <path d="M -50,40 L 50,40" stroke="#14B8A6" strokeWidth="3" strokeLinecap="round" />
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Große K3 Prüfung",
    // Topic 1
    t1_title: "Wörter und Familien",
    t1_text: "Erinnerst du dich an die Pluralformen und Wortfamilien? Nomen verändern sich in der Mehrzahl oft durch Umlaute, und Wörter einer Familie teilen sich den gleichen Stamm.",
    t1_b1: "Plural: Hand ➔ Hände",
    t1_b2: "Wortfamilie: fahr- (Fahrrad, fahren)",
    t1_b3: "Achtung auf die Endungen!",
    t1_inst: "Welches Wort gehört in welche Gruppe? Sortiere sie!",
    t1_h1: "Hunde ist ein Plural. Fahrrad gehört zur Wortfamilie 'fahr-'.",
    t1_h2: "Ordne die Begriffe logisch zu.",
    t1_bucket_plural: "Plural 🍎🍎",
    t1_bucket_familie: "Wortfamilie 🌳",
    t1_item_hunde: "Hunde", t1_item_buecher: "Bücher", t1_item_kinder: "Kinder",
    t1_item_fahren: "fahren", t1_item_fahrer: "Fahrer", t1_item_fahrrad: "Fahrrad",
    t1_q: "Wie heißt die Wortfamilie von 'spielen'?",
    t1_q_a: "Spielzeug, Spieler, mitspielen", t1_q_b: "laufen, rennen, gehen", t1_q_c: "Haus, Garten, Schule", t1_q_d: "rot, blau, gelb",

    // Topic 2
    t2_title: "Sätze richtig bauen",
    t2_text: "Du hast gelernt, wie man elváló igéket (trennbare Verben) benutzt. Das Präfix wandert immer ganz nach hinten, während das ragozott Verb an Position 2 bleibt.",
    t2_b1: "Position 2: Verb",
    t2_b2: "Satzende: Präfix",
    t2_b3: "Beispiel: Ich räume auf.",
    t2_inst: "Bringe den Satz in die richtige Reihenfolge!",
    t2_h1: "Das Verb ist 'räume'. Das Präfix ist 'auf.'.",
    t2_h2: "Der Satz lautet: Ich räume mein Zimmer auf.",
    t2_w1: "Ich", t2_w2: "räume", t2_w3: "mein", t2_w4: "Zimmer", t2_w5: "auf.",
    t2_q: "Wo steht das Präfix bei einem elváló igénél a mondatban?",
    t2_q_a: "Ganz am Ende", t2_q_b: "An Position 2", t2_q_c: "Direkt nach dem Subjekt", t2_q_d: "Am Satzanfang",

    // Topic 3
    t3_title: "Zeitformen-Meister",
    t3_text: "Zum Schluss prüfen wir dein Wissen über das Perfekt. Du brauchst ein Hilfsverb (haben/sein) und das Partizip II am Satzende.",
    t3_b1: "Hilfsverb: habe / bin",
    t3_b2: "Partizip II: gespielt, gelacht, gegangen",
    t3_b3: "Präsens ➔ Perfekt",
    t3_inst: "Welches Partizip II passt in die Lücke?",
    t3_h1: "Das Verb ist 'spielen'. Wie heißt die Form für die Vergangenheit?",
    t3_h2: "Ich habe den Ball 'gespielt'.",
    t3_gap_sentence: "Ich habe gestern mit dem Ball {gap}.",
    t3_c1: "gespielt", t3_c2: "spielen", t3_c3: "spielte",
    t3_q: "Welche Form ist das Perfekt von 'laufen'?",
    t3_q_a: "Ich bin gelaufen", t3_q_b: "Ich habe gelaufen", t3_q_c: "Ich lachte", t3_q_d: "Ich bin laufen",
  },
  en: {
    explorer_title: "Big K3 Exam",
    t1_inst: "Which word belongs to which group? Sort them!",
    t1_h1: "Hunde is a plural. Fahrrad belongs to the word family 'fahr-'.",
    t1_bucket_plural: "Plural 🍎🍎",
    t1_bucket_familie: "Word Family 🌳",
    t2_inst: "Put the sentence in the correct order!",
    t2_h1: "The verb is 'räume'. The prefix is 'auf.'.",
    t2_h2: "The sentence is: Ich räume mein Zimmer auf. (I am tidying up my room.)",
    t3_inst: "Which past participle (Partizip II) fits in the gap?",
    t3_h1: "The verb is 'spielen'. What is the form for the past?",
    t3_h2: "The answer is 'gespielt'."
  },
  hu: {
    explorer_title: "Nagy K3 Vizsga",
    t1_inst: "Melyik szó melyik csoportba tartozik? Válogasd szét őket!",
    t1_h1: "A 'Hunde' többes szám. A 'Fahrrad' a 'fahr-' szócsaládhoz tartozik.",
    t1_bucket_plural: "Többes szám 🍎🍎",
    t1_bucket_familie: "Szócsalád 🌳",
    t2_inst: "Tedd a mondatot a helyes sorrendbe!",
    t2_h1: "Az ige a 'räume'. Az igekötő az 'auf.'.",
    t2_h2: "A mondat: Ich räume mein Zimmer auf. (Kitakarítom a szobámat.)",
    t3_inst: "Melyik befejezett melléknévi igenév (Partizip II) illik az űrbe?",
    t3_h1: "Az ige a 'spielen'. Hogy van a múlt idejű alakja?",
    t3_h2: "A válasz a 'gespielt'."
  },
  ro: {
    explorer_title: "Marele Examen K3",
    t1_inst: "Care cuvânt aparține cărui grup? Sortează-le!",
    t1_h1: "Hunde este un plural. Fahrrad aparține familiei de cuvinte 'fahr-'.",
    t1_bucket_plural: "Plural 🍎🍎",
    t1_bucket_familie: "Familie de cuvinte 🌳",
    t2_inst: "Așază propoziția în ordinea corectă!",
    t2_h1: "Verbul este 'räume'. Prefixul este 'auf.'.",
    t2_h2: "Propoziția este: Ich räume mein Zimmer auf.",
    t3_inst: "Ce participiu trecut (Partizip II) se potrivește în spațiu?",
    t3_h1: "Verbul este 'spielen'. Care este forma pentru trecut?",
    t3_h2: "Răspunsul este 'gespielt'."
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
      type: "drag-to-bucket",
      buckets: [
        { id: "plural", label: "t1_bucket_plural" },
        { id: "familie", label: "t1_bucket_familie" },
      ],
      items: [
        { text: "t1_item_hunde", bucketId: "plural" },
        { text: "t1_item_fahren", bucketId: "familie" },
        { text: "t1_item_buecher", bucketId: "plural" },
        { text: "t1_item_fahrer", bucketId: "familie" },
        { text: "t1_item_kinder", bucketId: "plural" },
        { text: "t1_item_fahrrad", bucketId: "familie" },
      ],
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
      type: "word-order",
      words: ["t2_w1", "t2_w2", "t2_w3", "t2_w4", "t2_w5"], // Ich räume mein Zimmer auf.
      correctOrder: [0, 1, 2, 3, 4],
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
      choices: ["t3_c1", "t3_c2", "t3_c3"], // gespielt, spielen, spielte
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

const ReviewExplorerK3 = memo(function ReviewExplorerK3({
  color = "#D97706",
  onDone,
  lang = "de",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={3} explorerId="deutsch_k3_review" color={color} lang={lang} onDone={onDone} />;
});

export default ReviewExplorerK3;
