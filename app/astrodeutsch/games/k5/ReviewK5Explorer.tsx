"use client";
// ReviewK5Explorer — Island i9: Abschlussprüfung Klasse 5 (Final Review K5)
// Topics: 1) Steigerung 2) Pronomen 3) Präpositionen 4) Satzanalyse 5) Passiv-Finale

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSTRATIONS ──────────────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0F9FF" rx="20" />
      <g transform="translate(120, 70)">
        <path d="M -60,20 L -20,20 L -20,0 M 20,20 L 60,20 L 60,-20" fill="none" stroke="#0284C7" strokeWidth="3" />
        <text x="0" y="35" fontSize="16" fontWeight="bold" fill="#0369A1" textAnchor="middle">K5 Profi</text>
        <text x="0" y="-15" fontSize="30" textAnchor="middle">🥇</text>
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Abschlussprüfung K5",

    // T1: Steigerung
    t1_title: "Fokozás-Check",
    t1_text: "Erinnerst du dich an die unregelmäßigen Adjektive? Gut, viel und gern verändern sich komplett.",
    t1_b1: "gut ➔ besser ➔ am besten",
    t1_b2: "viel ➔ mehr ➔ am meisten",
    t1_b3: "gern ➔ lieber ➔ am liebsten",
    t1_inst: "Bringe die Steigerung von 'gut' in die richtige Reihenfolge!",
    t1_h1: "Beginne mit der Grundform.",
    t1_h2: "Dann kommt der Komparativ und zuletzt der Superlativ.",
    t1_w1: "gut", t1_w2: "besser", t1_w3: "am", t1_w4: "besten",
    t1_q: "Was ist der Komparativ von 'viel'?",
    t1_q_a: "mehr", t1_q_b: "vieler", t1_q_c: "am meisten", t1_q_d: "viele",

    // T2: Pronomen
    t2_title: "Pronomen-Check",
    t2_text: "Personal-, Possessiv- oder Reflexivpronomen? Sie alle ersetzen oder begleiten Nomen.",
    t2_b1: "ich/du = Personal",
    t2_b2: "mein/dein = Possessiv",
    t2_b3: "mich/sich = Reflexiv",
    t2_inst: "Welches Pronomen passt? 'Ich freue ___ auf die Ferien.'",
    t2_h1: "Es ist ein Rückbezug auf 'ich'.",
    t2_h2: "Wir brauchen das Reflexivpronomen 'mich'.",
    t2_gap_sentence: "Ich freue {gap} auf die Ferien.",
    t2_c1: "mich", t2_c2: "dich", t2_c3: "sich",
    t2_q: "Welches Wort ist ein Possessivpronomen (Besitz)?",
    t2_q_a: "unser", t2_q_b: "wir", t2_q_c: "uns", t2_q_d: "euch",

    // T3: Präpositionen
    t3_title: "Präpositions-Check",
    t3_text: "Wechselpräpositionen sind tückisch! Wo? verlangt Dativ. Wohin? verlangt Akkusativ.",
    t3_b1: "in, an, auf, unter...",
    t3_b2: "Wo? (Ort) ➔ Dativ",
    t3_b3: "Wohin? (Richtung) ➔ Akkusativ",
    t3_inst: "Dativ (Ort) oder Akkusativ (Richtung)? Sortiere!",
    t3_h1: "'ins Kino' ist eine Bewegung (Wohin?).",
    t3_h2: "'im Garten' ist ein Ort (Wo?).",
    t3_bucket_dat: "Wo? (Dativ)",
    t3_bucket_akk: "Wohin? (Akkusativ)",
    t3_item_d1: "im Haus", t3_item_d2: "auf dem Tisch",
    t3_item_a1: "ins Kino", t3_item_a2: "unter den Stuhl",
    t3_q: "Welchen Fall verlangt 'mit' immer?",
    t3_q_a: "Dativ", t3_q_b: "Akkusativ", t3_q_c: "Genitiv", t3_q_d: "Nominativ",

    // T4: Satzanalyse
    t4_title: "Satzbau-Check",
    t4_text: "Subjekt, Prädikat, Objekt. Kannst du die Satzglieder in einem langen Satz finden?",
    t4_b1: "Subjekt (Wer/Was?)",
    t4_b2: "Prädikat (Verb)",
    t4_b3: "Akkusativ-Objekt (Wen/Was?)",
    t4_inst: "Markiere das Akkusativ-Objekt in diesem Satz!",
    t4_h1: "Frage: Wen oder was liest der Junge?",
    t4_h2: "Die Antwort ist 'ein spannendes Buch'.",
    t4_w1: "Der", t4_w2: "Junge", t4_w3: "liest", t4_w4: "ein", t4_w5: "spannendes", t4_w6: "Buch.",
    t4_q: "Welches Satzglied ist 'morgen' im Satz: 'Morgen fahren wir.'?",
    t4_q_a: "Adverbiale Bestimmung (Zeit)", t4_q_b: "Subjekt", t4_q_c: "Objekt", t4_q_d: "Prädikat",

    // T5: Passiv
    t5_title: "Passiv-Finale",
    t5_text: "Das Passiv betont die Handlung. 'werden' + Partizip II. Das ist die Königsdisziplin!",
    t5_b1: "Aktiv: Er baut ein Haus.",
    t5_b2: "Passiv: Ein Haus wird gebaut.",
    t5_b3: "werden (konjugiert) + ge...t/en",
    t5_inst: "Bringe den Passivsatz in die richtige Reihenfolge!",
    t5_h1: "Das neue Subjekt ist 'Die Tür'.",
    t5_h2: "Dann kommt 'wird' und am Ende 'geöffnet.'",
    t5_w1: "Die", t5_w2: "Tür", t5_w3: "wird", t5_w4: "leise", t5_w5: "geöffnet.",
    t5_q: "Wie heißt das Passiv von: 'Sie isst den Apfel.'?",
    t5_q_a: "Der Apfel wird gegessen.", t5_q_b: "Der Apfel wurde gegessen.", t5_q_c: "Den Apfel wird gegessen.", t5_q_d: "Sie wird den Apfel essen.",
  },
  en: {
    explorer_title: "Final Exam K5",
    t1_inst: "Put the comparison of 'gut' in the correct order!",
    t2_inst: "Which pronoun fits? 'Ich freue ___ auf die Ferien.'",
    t3_inst: "Dative (Location) or Accusative (Direction)? Sort!",
    t4_inst: "Highlight the Accusative object in this sentence!",
    t5_inst: "Put the passive sentence in the correct order!",
  },
  hu: {
    explorer_title: "Záróvizsga K5",
    t1_inst: "Tedd a 'gut' fokozását a helyes sorrendbe!",
    t2_inst: "Melyik névmás illik ide? 'Ich freue ___ auf die Ferien.'",
    t3_inst: "Részeseset (Hely) vagy Tárgyeset (Irány)? Válogasd szét!",
    t4_inst: "Jelöld ki a tárgyat (Akkusativ) a mondatban!",
    t5_inst: "Tedd a passzív mondatot a helyes sorrendbe!",
  },
  ro: {
    explorer_title: "Examen Final K5",
    t1_inst: "Pune gradele de comparație pentru 'gut' în ordinea corectă!",
    t2_inst: "Ce pronume se potrivește? 'Ich freue ___ auf die Ferien.'",
    t3_inst: "Dativ (Locație) sau Acuzativ (Direcție)? Sortează!",
    t4_inst: "Marchează obiectul în acuzativ în această propoziție!",
    t5_inst: "Așază propoziția pasivă în ordinea corectă!",
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
      type: "word-order",
      words: ["t1_w1", "t1_w2", "t1_w3", "t1_w4"], // gut besser am besten
      correctOrder: [0, 1, 2, 3],
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
    svg: () => <Topic1Svg />, // Reusing or create unique ones
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "gap-fill",
      sentence: "t2_gap_sentence",
      choices: ["t2_c1", "t2_c2", "t2_c3"], // mich, dich, sich
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
    svg: () => <Topic1Svg />,
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [
        { id: "dat", label: "t3_bucket_dat" },
        { id: "akk", label: "t3_bucket_akk" },
      ],
      items: [
        { text: "t3_item_d1", bucketId: "dat" },
        { text: "t3_item_a1", bucketId: "akk" },
        { text: "t3_item_d2", bucketId: "dat" },
        { text: "t3_item_a2", bucketId: "akk" },
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
      type: "highlight-text",
      tokens: ["t4_w1", "t4_w2", "t4_w3", "t4_w4", "t4_w5", "t4_w6"], // Der Junge liest ein spannendes Buch.
      correctIndices: [3, 4, 5], // ein spannendes Buch.
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
    svg: () => <Topic1Svg />,
    bulletKeys: ["t5_b1", "t5_b2", "t5_b3"],
    interactive: {
      type: "word-order",
      words: ["t5_w1", "t5_w2", "t5_w3", "t5_w4", "t5_w5"], // Die Tür wird leise geöffnet.
      correctOrder: [0, 1, 2, 3, 4],
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
  icon: "🏆",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const ReviewK5Explorer = memo(function ReviewK5Explorer({
  color = "#C026D3",
  onDone,
  lang = "de",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={5} explorerId="deutsch_k5_review" color={color} lang={lang} onDone={onDone} />;
});

export default ReviewK5Explorer;
