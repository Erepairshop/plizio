"use client";
// ActivePassiveK6Explorer — Island i1: Aktiv & Passiv (K6)
// Topics: 1) Aktiv vs. Passiv 2) Vorgangspassiv 3) Zustandspassiv 4) Umwandlung 5) Gemischtes Quiz

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSTRATIONS ──────────────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#EEF2FF" rx="20" />
      <g transform="translate(120, 70)">
        <circle cx="-60" cy="-10" r="25" fill="#818CF8" />
        <text x="-60" y="0" fontSize="10" fontWeight="bold" fill="white" textAnchor="middle">TÄTER</text>
        <path d="M -30,-10 L 30,-10" stroke="#4338CA" strokeWidth="2" markerEnd="url(#arrow)" />
        <rect x="35" y="-25" width="50" height="30" rx="4" fill="#C7D2FE" stroke="#4338CA" />
        <text x="60" y="-5" fontSize="10" fontWeight="bold" fill="#312E81" textAnchor="middle">OBJEKT</text>
        <text x="0" y="30" fontSize="14" fontWeight="bold" fill="#312E81" textAnchor="middle">Aktiv</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0FDF4" rx="20" />
      <g transform="translate(120, 70)">
        <path d="M -80,10 L -40,10 L -40,-20 L 40,-20 L 40,10 L 80,10" fill="none" stroke="#16A34A" strokeWidth="3" strokeDasharray="5 5" />
        <text x="0" y="5" fontSize="12" fontWeight="bold" fill="#166534" textAnchor="middle">werden + Partizip II</text>
        <text x="0" y="35" fontSize="16" fontWeight="black" fill="#14532D" textAnchor="middle">Vorgangspassiv</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FFF1F2" rx="20" />
      <g transform="translate(120, 70)">
        <rect x="-50" y="-30" width="100" height="40" rx="8" fill="#FDA4AF" />
        <text x="0" y="-5" fontSize="12" fontWeight="bold" fill="#9F1239" textAnchor="middle">sein + Partizip II</text>
        <line x1="-60" y1="20" x2="60" y2="20" stroke="#E11D48" strokeWidth="3" />
        <text x="0" y="40" fontSize="16" fontWeight="black" fill="#9F1239" textAnchor="middle">Zustandspassiv</text>
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Aktiv & Passiv Profi",
    // T1
    t1_title: "Wer handelt? Aktiv vs. Passiv",
    t1_text: "Im Aktiv steht der Täter (Subjekt) im Fokus. Im Passiv steht das Geschehen vagy das Objekt im Vordergrund. Der Täter kann oft weggelassen werden.",
    t1_b1: "Aktiv: Der Koch bereitet das Essen zu.",
    t1_b2: "Passiv: Das Essen wird zubereitet.",
    t1_b3: "Aktiv ➔ Subjekt handelt / Passiv ➔ Mit Subjekt geschieht etwas.",
    t1_inst: "Ist der Satz Aktiv vagy Passiv? Ordne zu!",
    t1_h1: "Suche nach dem Hilfsverb 'werden'.",
    t1_h2: "Aktiv-Sätze beschreiben direkt, wer etwas tut.",
    t1_bucket_akt: "Aktiv",
    t1_bucket_pas: "Passiv",
    t1_item_a1: "Lisa liest ein Buch.", t1_item_a2: "Wir bauen ein Haus.",
    t1_item_p1: "Das Buch wird gelesen.", t1_item_p2: "Ein Haus wird gebaut.",
    t1_q: "Welcher Satz steht im Passiv?",
    t1_q_a: "Die Tür wird geöffnet.", t1_q_b: "Er öffnet die Tür.", t1_q_c: "Sie hat die Tür geöffnet.", t1_q_d: "Öffne die Tür!",

    // T2
    t2_title: "Das Vorgangspassiv",
    t2_text: "Das Vorgangspassiv betont die Handlung, die gerade abläuft. Wir bilden es mit dem Hilfsverb 'werden' und dem Partizip II am Ende.",
    t2_b1: "Formel: werden + Partizip II",
    t2_b2: "Beispiel: Der Brief wird geschrieben.",
    t2_b3: "Es zeigt eine Veränderung vagy Aktion.",
    t2_inst: "Welche Form von 'werden' passt hier?",
    t2_h1: "Achte auf den Numerus (Singular vagy Plural).",
    t2_h2: "'Die Autos' ist Plural.",
    t2_gap_sentence: "Die Autos {gap} repariert.",
    t2_c1: "werden", t2_c2: "wird", t2_c3: "werdet",
    t2_q: "Wie nennt man das Passiv mit 'werden'?",
    t2_q_a: "Vorgangspassiv", t2_q_b: "Zustandspassiv", t2_q_c: "Zukunftspassiv", t2_q_d: "Hilfspassiv",

    // T3
    t3_title: "Das Zustandspassiv",
    t3_text: "Das Zustandspassiv beschreibt das Ergebnis einer abgeschlossenen Handlung. Wir nutzen das Hilfsverb 'sein' und das Partizip II.",
    t3_b1: "Formel: sein + Partizip II",
    t3_b2: "Vorgang: Die Tür wird geschlossen.",
    t3_b3: "Zustand: Die Tür ist geschlossen.",
    t3_inst: "Vorgang vagy Zustand? Verbinde die Paare!",
    t3_h1: "Vorgang = Aktion (werden).",
    t3_h2: "Zustand = Ergebnis (sein).",
    t3_l1: "Das Fenster wird geputzt.", t3_r1: "Vorgang (Aktion)",
    t3_l2: "Das Fenster ist geputzt.", t3_r2: "Zustand (Ergebnis)",
    t3_l3: "Der Tisch wird gedeckt.", t3_r3: "Vorgang (Aktion)",
    t3_l4: "Der Tisch ist gedeckt.", t3_r4: "Zustand (Ergebnis)",
    t3_q: "Welches Hilfsverb braucht das Zustandspassiv?",
    t3_q_a: "sein", t3_q_b: "werden", t3_q_c: "haben", t3_q_d: "müssen",

    // T4
    t4_title: "Aktiv in Passiv umwandeln",
    t4_text: "Bei der Umwandlung wird das Akkusativ-Objekt des Aktivsatzes zum Nominativ-Subjekt des Passivsatzes. Das alte Subjekt kann mit 'von' + Dativ genannt werden.",
    t4_b1: "Aktiv: Der Mechaniker (Nom) repariert das Auto (Akk).",
    t4_b2: "Passiv: Das Auto (Nom) wird (vom Mechaniker) repariert.",
    t4_b3: "Achtung: Die Verbform muss zum neuen Subjekt passen!",
    t4_inst: "Bringe den Passivsatz in die richtige Reihenfolge!",
    t4_h1: "Das Objekt 'den Apfel' wird zum Subjekt 'Der Apfel'.",
    t4_h2: "Danach kommt 'wird' und das Partizip.",
    t4_w1: "Der", t4_w2: "Apfel", t4_w3: "wird", t4_w4: "gegessen.",
    t4_q: "Was passiert mit dem Akkusativ-Objekt aus dem Aktivsatz?",
    t4_q_a: "Es wird zum Subjekt (Nominativ).", t4_q_b: "Es bleibt Akkusativ.", t4_q_c: "Es fällt weg.", t4_q_d: "Es wird zum Verb.",

    // T5
    t5_title: "Gemischtes Quiz",
    t5_text: "Testen wir alles zusammen: Erkenntnis von Aktiv/Passiv, Unterscheidung von Vorgang/Zustand und die richtige Bildung.",
    t5_b1: "Aktiv (handeln), Passiv (erleiden).",
    t5_b2: "Vorgang (werden), Zustand (sein).",
    t5_b3: "Partizip II steht immer am Satzende.",
    t5_inst: "Markiere alle Verben im Passiv-Zustand (sein + Partizip II)!",
    t5_h1: "Suche nach Sätzen mit 'ist' vagy 'sind' + Partizip.",
    t5_h2: "Beispiel: Das Bild ist gemalt.",
    t5_w1: "Das", t5_w2: "Bild", t5_w3: "ist", t5_w4: "schon", t5_w5: "fertig", t5_w6: "gemalt.",
    t5_q: "Wie lautet das Zustandspassiv von 'schließen' (Singular)?",
    t5_q_a: "Es ist geschlossen.", t5_q_b: "Es wird geschlossen.", t5_q_c: "Es wurde geschlossen.", t5_q_d: "Es schließt.",
  },
  en: {
    explorer_title: "Active & Passive Mastery",
    t1_inst: "Active or Passive? Sort them!",
    t2_inst: "Which form of 'werden' fits here?",
    t3_inst: "Process or State? Connect the pairs!",
    t4_inst: "Put the passive sentence in the correct order!",
    t5_inst: "Highlight the verbs in state passive (sein + Part. II)!",
  },
  hu: {
    explorer_title: "Cselekvő és Szenvedő",
    t1_inst: "Aktív vagy Passzív? Válogasd szét!",
    t2_inst: "A 'werden' melyik alakja illik ide?",
    t3_inst: "Folyamat vagy Állapot? Párosítsd össze!",
    t4_inst: "Tedd a passzív mondatot a helyes sorrendbe!",
    t5_inst: "Jelöld ki az állapot-passzív (sein + Part. II) alakokat!",
  },
  ro: {
    explorer_title: "Activ și Pasiv",
    t1_inst: "Activ sau Pasiv? Sortează!",
    t2_inst: "Ce formă a lui 'werden' se potrivește aici?",
    t3_inst: "Proces sau Stare? Conectează perechile!",
    t4_inst: "Așază propoziția la pasiv în ordinea corectă!",
    t5_inst: "Marchează verbele la pasiv de stare (sein + Part. II)!",
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
        { id: "akt", label: "t1_bucket_akt" },
        { id: "pas", label: "t1_bucket_pas" },
      ],
      items: [
        { text: "t1_item_a1", bucketId: "akt" },
        { text: "t1_item_p1", bucketId: "pas" },
        { text: "t1_item_a2", bucketId: "akt" },
        { text: "t1_item_p2", bucketId: "pas" },
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
      type: "gap-fill",
      sentence: "t2_gap_sentence",
      choices: ["t2_c1", "t2_c2", "t2_c3"], // werden, wird, werdet
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
      type: "match-pairs",
      pairs: [
        { left: "t3_l1", right: "t3_r1" },
        { left: "t3_l2", right: "t3_r2" },
        { left: "t3_l3", right: "t3_r3" },
        { left: "t3_l4", right: "t3_r4" },
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
    svg: () => <Topic1Svg />,
    bulletKeys: ["t4_b1", "t4_b2", "t4_b3"],
    interactive: {
      type: "word-order",
      words: ["t4_w1", "t4_w2", "t4_w3", "t4_w4"], // Der Apfel wird gegessen.
      correctOrder: [0, 1, 2, 3],
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
    svg: () => <Topic3Svg />,
    bulletKeys: ["t5_b1", "t5_b2", "t5_b3"],
    interactive: {
      type: "highlight-text",
      tokens: ["t5_w1", "t5_w2", "t5_w3", "t5_w4", "t5_w5", "t5_w6"], // Das Bild ist schon fertig gemalt.
      correctIndices: [2, 5], // ist, gemalt
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
  icon: "⚙️",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const ActivePassiveK6Explorer = memo(function ActivePassiveK6Explorer({
  color = "#4338CA",
  onDone,
  lang = "de",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={6} explorerId="deutsch_k6_active_passive" color={color} lang={lang} onDone={onDone} />;
});

export default ActivePassiveK6Explorer;
