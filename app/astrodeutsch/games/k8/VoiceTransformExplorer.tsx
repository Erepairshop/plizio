"use client";
// VoiceTransformExplorer — Island i6: Aktiv ↔ Passiv Transformation (K8)
// Topics: 1) Aktiv → Passiv Schritt für Schritt 2) Passiv → Aktiv 3) Der Agent (von + Dativ) 4) Instrumentalis (durch / mit) 5) Mixed Quiz

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSTRATIONS ──────────────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0F9FF" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-60" y="-20" fontSize="12" fontWeight="bold" fill="#0369A1" textAnchor="middle">AKTIV</text>
        <path d="M -30,-20 L 30,10" stroke="#0EA5E9" strokeWidth="2" markerEnd="url(#arrow)" />
        <path d="M -30,10 L 30,-20" stroke="#0EA5E9" strokeWidth="2" markerEnd="url(#arrow)" />
        <text x="60" y="20" fontSize="12" fontWeight="bold" fill="#0369A1" textAnchor="middle">PASSIV</text>
        <text x="0" y="45" fontSize="10" fill="#0284C7" textAnchor="middle">Objekt ➔ Subjekt</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F5F3FF" rx="20" />
      <g transform="translate(120, 70)">
        <rect x="-80" y="-20" width="70" height="40" rx="8" fill="#DDD6FE" />
        <text x="-45" y="5" fontSize="12" fontWeight="bold" fill="#4C1D95" textAnchor="middle">von</text>
        <rect x="10" y="-20" width="70" height="40" rx="8" fill="#C4B5FD" />
        <text x="45" y="5" fontSize="12" fontWeight="bold" fill="#4C1D95" textAnchor="middle">durch</text>
        <text x="0" y="45" fontSize="10" fill="#5B21B6" textAnchor="middle">Person vs. Mittel/Ursache</text>
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Transformations-Meister K8",
    // T1
    t1_title: "Aktiv → Passiv Schritt für Schritt",
    t1_text: "Um einen Aktivsatz in den Passivsatz umzuwandeln, befolge diese Schritte: 1. Akkusativ-Objekt wird zum Nominativ-Subjekt. 2. Hilfsverb 'werden' einfügen (in der richtigen Zeit!). 3. Altes Subjekt mit 'von' + Dativ anfügen oder weglassen.",
    t1_b1: "Aktiv: Der Sturm (Sub) zerstört das Haus (Obj).",
    t1_b2: "Schritt 1: Das Haus...",
    t1_b3: "Passiv: Das Haus wird vom Sturm zerstört.",
    t1_inst: "Bringe die Schritte der Umwandlung in die richtige Reihenfolge!",
    t1_h1: "Zuerst musst du das Objekt finden.",
    t1_h2: "Zuletzt setzt du das Partizip II ans Satzende.",
    t1_w1: "Akkusativ-Objekt suchen", t1_w2: "Objekt zum Subjekt machen", t1_w3: "werden konjugieren", t1_w4: "Partizip II ans Ende",
    t1_q: "Was passiert mit dem Subjekt des Aktivsatzes im Passiv?",
    t1_q_a: "Es kann mit 'von' + Dativ genannt werden.", t1_q_b: "Es bleibt Nominativ.", t1_q_c: "Es wird zum Akkusativ-Objekt.", t1_q_d: "Es verschwindet immer komplett.",

    // T2
    t2_title: "Passiv → Aktiv zurück",
    t2_text: "Beim Rückbau suchst du den Täter (nach 'von' oder 'durch') und machst ihn wieder zum Subjekt. Das Passiv-Subjekt wird wieder zum Objekt.",
    t2_b1: "Passiv: Die Torte wird von uns gegessen.",
    t2_b2: "Aktiv: Wir essen die Torte.",
    t2_b3: "Achtung: Wenn kein Täter genannt ist, nutze 'man' als Subjekt.",
    t2_inst: "Wandle in Aktiv um: 'Das Buch wird von dem Lehrer gelesen.'",
    t2_h1: "Wer liest? 'Der Lehrer'.",
    t2_h2: "Was liest er? 'Das Buch'.",
    t2_w21: "Der", t2_w22: "Lehrer", t2_w23: "liest", t2_w24: "das", t2_w25: "Buch.",
    t2_q: "Welches Subjekt nutzt man im Aktiv, wenn im Passiv kein Täter steht?",
    t2_q_a: "man", t2_q_b: "es", t2_q_c: "jemand", t2_q_d: "wer",

    // T3
    t3_title: "Der Agent: von + Dativ",
    t3_text: "Wir nutzen 'von', wenn der Urheber eine Person, ein Tier oder eine handelnde Kraft (wie die Natur) ist. Es folgt immer der Dativ.",
    t3_b1: "von dem Lehrer ➔ vom Lehrer.",
    t3_b2: "von der Mutter.",
    t3_b3: "von den Schülern (Plural Dativ -n beachten!).",
    t3_inst: "Welcher Artikel im Dativ ist korrekt?",
    t3_h1: "'Die Künstlerin' ist feminin.",
    t3_h2: "Dativ feminin ist 'der'.",
    t3_gap_sentence: "Das Bild wurde von {gap} Künstlerin gemalt.",
    t3_c1: "der", t3_c2: "die", t3_c3: "den",
    t3_q: "Welchen Fall verlangt die Präposition 'von' immer?",
    t3_q_a: "Dativ", t3_q_b: "Akkusativ", t3_q_c: "Genitiv", t3_q_d: "Nominativ",

    // T4
    t4_title: "Instrumentalis: durch / mit",
    t4_text: "'durch' (+ Akkusativ) nutzt man für Mittel, Ursachen oder Vermittler. 'mit' nutzt man meist für ein konkretes Werkzeug.",
    t4_b1: "Ursache: Die Stadt wurde DURCH ein Beben zerstört.",
    t4_b2: "Werkzeug: Die Tür wurde MIT einem Schlüssel geöffnet.",
    t4_b3: "Vermittler: Ich habe es DURCH einen Freund erfahren.",
    t4_inst: "von, durch oder mit? Sortiere die Sätze!",
    t4_h1: "Personen ➔ von. Ursachen/Mittel ➔ durch. Werkzeuge ➔ mit.",
    t4_bucket_von: "Urheber (von)",
    t4_bucket_durch: "Mittel/Ursache (durch)",
    t4_bucket_mit: "Werkzeug (mit)",
    t4_item_v1: "von meinem Vater", t4_item_d1: "durch einen Zufall",
    t4_item_m1: "mit einem Hammer", t4_item_v2: "von der Polizei",
    t4_q: "Welche Präposition passt zu einer unpersönlichen Ursache (z.B. Wind)?",
    t4_q_a: "durch (oder von bei Naturgewalten)", t4_q_b: "mit", t4_q_c: "zu", t4_q_d: "ohne",

    // T5
    t5_title: "Mixed Quiz",
    t5_text: "Teste deine Fähigkeiten! Kannst du Sätze fehlerfrei transformieren und die richtigen Präpositionen für den Täter wählen?",
    t5_b1: "Objekt ➔ Subjekt.",
    t5_b2: "von + Dativ / durch + Akkusativ.",
    t5_b3: "Zeitform beibehalten!",
    t5_inst: "Wähle die korrekte Passiv-Transformation: 'Lukas schließt das Fenster.'",
    t5_h1: "Präsens bleibt Präsens.",
    t5_h2: "Das Fenster (Sub) wird (V) von Lukas (Agent) geschlossen (P2).",
    t5_gap_sentence2: "Das Fenster {gap} von Lukas geschlossen.",
    t5_c51: "wird", t5_c52: "wurde", t5_c53: "ist",
    t5_q: "Wie heißt das Passiv von: 'Man baute die Mauer.'?",
    t5_q_a: "Die Mauer wurde gebaut.", t5_q_b: "Die Mauer wird gebaut.", t5_q_c: "Die Mauer ist gebaut worden.", t5_q_d: "Man wird die Mauer bauen.",
  },
  en: {
    explorer_title: "Transformation Master",
    t1_inst: "Put the transformation steps in the correct order!",
    t2_inst: "Transform into active: 'Das Buch wird von dem Lehrer gelesen.'",
    t3_inst: "Which article in Dative is correct?",
    t4_inst: "von, durch, or mit? Sort the sentences!",
    t5_inst: "Choose the correct passive transformation!",
  },
  hu: {
    explorer_title: "Átalakítás-mester K8",
    t1_inst: "Tedd az átalakítás lépéseit a helyes sorrendbe!",
    t2_inst: "Alakítsd aktívvá: 'Das Buch wird von dem Lehrer gelesen.'",
    t3_inst: "Melyik névelő (Dativ) a helyes?",
    t4_inst: "von, durch vagy mit? Válogasd szét a kifejezéseket!",
    t4_bucket_von: "Cselekvő (von)",
    t4_bucket_durch: "Mód/Ok (durch)",
    t4_bucket_mit: "Eszköz (mit)",
    t5_inst: "Válaszd ki a helyes passzív átalakítást!",
  },
  ro: {
    explorer_title: "Maestru în Transformări",
    t1_inst: "Pune pașii transformării în ordinea corectă!",
    t2_inst: "Transformă în activ: „Das Buch wird von dem Lehrer gelesen.”",
    t3_inst: "Care articol la dativ este corect?",
    t4_inst: "von, durch sau mit? Sortează propozițiile!",
    t5_inst: "Alege transformarea corectă la pasiv!",
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
      words: ["t1_w1", "t1_w2", "t1_w3", "t1_w4"],
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
    svg: () => <Topic1Svg />,
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "word-order",
      words: ["t2_w21", "t2_w22", "t2_w23", "t2_w24", "t2_w25"],
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
      choices: ["t3_c1", "t3_c2", "t3_c3"],
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
    svg: () => <Topic3Svg />,
    bulletKeys: ["t4_b1", "t4_b2", "t4_b3"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [
        { id: "von", label: "t4_bucket_von" },
        { id: "dur", label: "t4_bucket_durch" },
        { id: "mit", label: "t4_bucket_mit" },
      ],
      items: [
        { text: "t4_item_v1", bucketId: "von" },
        { text: "t4_item_d1", bucketId: "dur" },
        { text: "t4_item_m1", bucketId: "mit" },
        { text: "t4_item_v2", bucketId: "von" },
      ],
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
      type: "gap-fill",
      sentence: "t5_gap_sentence2",
      choices: ["t5_c51", "t5_c52", "t5_c53"],
      correctIndex: 0,
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
  icon: "🔄",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const VoiceTransformExplorer = memo(function VoiceTransformExplorer({
  color = "#0EA5E9",
  onDone,
  lang = "de",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={8} explorerId="deutsch_k8_voice_transform" color={color} lang={lang} onDone={onDone} />;
});

export default VoiceTransformExplorer;
