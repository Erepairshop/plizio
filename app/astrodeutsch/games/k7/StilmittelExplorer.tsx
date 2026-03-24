"use client";
// StilmittelExplorer — Island i4: Rhetorische Stilmittel (Stylistic Devices K7)
// Topics: 1) Metapher 2) Vergleich 3) Personifikation 4) Alliteration & Anapher 5) Mixed Quiz

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSTRATIONS ──────────────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0F9FF" rx="20" />
      <g transform="translate(120, 70)">
        <text x="0" y="-30" fontSize="16" fontWeight="bold" fill="#0369A1" textAnchor="middle">Die Metapher</text>
        <circle cx="-40" cy="5" r="25" fill="#BAE6FD" opacity="0.6" />
        <circle cx="40" cy="5" r="25" fill="#7DD3FC" opacity="0.6" />
        <path d="M -15,5 L 15,5" stroke="#0EA5E9" strokeWidth="2" markerEnd="url(#arrow)" />
        <text x="0" y="45" fontSize="10" fill="#0284C7" textAnchor="middle">Ein Bild im Kopf (ohne 'wie')</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FDF2F8" rx="20" />
      <g transform="translate(120, 70)">
        <text x="0" y="-30" fontSize="16" fontWeight="bold" fill="#9D174D" textAnchor="middle">Der Vergleich</text>
        <rect x="-80" y="-5" width="60" height="30" rx="4" fill="#FBCFE8" />
        <text x="-50" y="15" fontSize="10" fontWeight="bold" fill="#BE185D" textAnchor="middle">Sache A</text>
        <text x="0" y="15" fontSize="14" fontWeight="black" fill="#DB2777" textAnchor="middle">wie</text>
        <rect x="20" y="-5" width="60" height="30" rx="4" fill="#FBCFE8" />
        <text x="50" y="15" fontSize="10" fontWeight="bold" fill="#BE185D" textAnchor="middle">Sache B</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FFFBEB" rx="20" />
      <g transform="translate(120, 70)">
        <circle cx="0" cy="-10" r="30" fill="#FDE68A" />
        <path d="M -10,-15 Q 0,-25 10,-15" fill="none" stroke="#B45309" strokeWidth="2" />
        <path d="M -15,5 Q 0,15 15,5" fill="none" stroke="#B45309" strokeWidth="2" />
        <text x="0" y="45" fontSize="12" fontWeight="bold" fill="#92400E" textAnchor="middle">Die Sonne lacht</text>
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Stilmittel-Detektiv",
    // T1
    t1_title: "Die Metapher",
    t1_text: "Eine Metapher ist eine bildliche Ausdrucksweise. Ein Wort wird aus seinem eigentlichen Bereich in einen anderen übertragen. Man sagt nicht 'er ist WIE ein Löwe', sondern nutzt das Bild direkt.",
    t1_b1: "Beispiel: Warteschlange (Menschen stehen wie eine Schlange).",
    t1_b2: "Beispiel: Rabenmutter, Mauer des Schweigens.",
    t1_b3: "Metaphern machen Texte lebendig und kreativ.",
    t1_inst: "Welches Wort macht aus diesem Satz eine Metapher?",
    t1_h1: "Wir suchen ein Bild für jemanden, der sehr viel arbeitet.",
    t1_h2: "Ein Tier, das für Fleiß bekannt ist: die Biene.",
    t1_gap_sentence: "Er ist eine fleißige {gap}.",
    t1_c1: "Biene", t1_c2: "Person", t1_c3: "Maschine",
    t1_q: "Was ist das Hauptmerkmal einer Metapher?",
    t1_q_a: "Ein Bild ohne das Wort 'wie'", t1_q_b: "Ein Vergleich mit 'wie'", t1_q_c: "Die Wiederholung von Wörtern", t1_q_d: "Ein Reim am Ende",

    // T2
    t2_title: "Der Vergleich",
    t2_text: "Ein Vergleich verbindet zwei Bereiche durch eine Gemeinsamkeit. Das wichtigste Signalwort ist dabei fast immer das Wort 'wie' (oder seltener 'als').",
    t2_b1: "Beispiel: Stark wie ein Löwe.",
    t2_b2: "Beispiel: Weiß wie Schnee.",
    t2_b3: "Zwei Dinge werden in Bezug gesetzt.",
    t2_inst: "Bringe den Vergleich in die richtige Reihenfolge!",
    t2_h1: "Beginne mit der Eigenschaft: 'Schnell'.",
    t2_h2: "Dann folgt das Signalwort 'wie' und das Vergleichsobjekt.",
    t2_w1: "Schnell", t2_w2: "wie", t2_w3: "der", t2_w4: "Blitz.",
    t2_q: "Welches Wort ist typisch für einen Vergleich?",
    t2_q_a: "wie", t2_q_b: "ist", t2_q_c: "und", t2_q_d: "nicht",

    // T3
    t3_title: "Die Personifikation",
    t3_text: "Bei einer Personifikation werden Tieren, Pflanzen oder leblosen Gegenständen menschliche Eigenschaften oder Fähigkeiten gegeben.",
    t3_b1: "Beispiel: Die Sonne lacht.",
    t3_b2: "Beispiel: Der Wind heult.",
    t3_b3: "Beispiel: Das Glück klopft an die Tür.",
    t3_inst: "Ist es eine Personifikation oder eine normale Beschreibung? Sortiere!",
    t3_h1: "Kann ein Ding wirklich 'weinen' oder 'lachen'? Dann ist es eine Personifikation.",
    t3_h2: "Beispiel: 'Der Himmel weint' bedeutet es regnet.",
    t3_bucket_pers: "Personifikation",
    t3_bucket_norm: "Normal",
    t3_item_p1: "Die Zeit rennt.", t3_item_p2: "Der Winter grüßt.",
    t3_item_n1: "Die Uhr geht genau.", t3_item_n2: "Es ist kalt.",
    t3_q: "Was passiert bei einer Personifikation?",
    t3_q_a: "Dinge erhalten menschliche Züge", t3_q_b: "Zwei Dinge werden verglichen", t3_q_c: "Sätze werden gekürzt", t3_q_d: "Wörter reimen sich",

    // T4
    t4_title: "Alliteration & Anapher",
    t4_text: "Diese Mittel nutzen Wiederholungen für den Rhythmus. Die Alliteration wiederholt den Anfangslaut, die Anapher wiederholt ganze Wörter am Satzanfang.",
    t4_b1: "Alliteration: Milch macht müde Männer munter.",
    t4_b2: "Anapher: Ich kam. Ich sah. Ich siegte.",
    t4_b3: "Ziel: Einprägsamkeit und Verstärkung.",
    t4_inst: "Welches Stilmittel liegt hier vor? Verbinde!",
    t4_h1: "Gleiche Buchstaben am Anfang eines jeden Wortes = Alliteration.",
    t4_h2: "Gleiche Wörter am Anfang von Sätzen = Anapher.",
    t4_l1: "Haus und Hof", t4_r1: "Alliteration",
    t4_l2: "Fischers Fritz fischt...", t4_r2: "Alliteration",
    t4_l3: "Wer soll das bezahlen? Wer hat das bestellt?", t4_r3: "Anapher",
    t4_l4: "Das Wasser rauscht, das Wasser schwoll.", t4_r4: "Anapher",
    t4_q: "Was wird bei einer Alliteration wiederholt?",
    t4_q_a: "Der Anfangsbuchstabe/Laut", t4_q_b: "Das Wort am Ende", t4_q_c: "Die Bedeutung", t4_q_d: "Der ganze Satz",

    // T5
    t5_title: "Gemischtes Quiz",
    t5_text: "Kannst du die Stilmittel im Text erkennen? Achte auf 'wie', auf menschliche Verben und auf Anfangsbuchstaben.",
    t5_b1: "wie = Vergleich.",
    t5_b2: "Bild = Metapher.",
    t5_b3: "menschlich = Personifikation.",
    t5_inst: "Markiere das Stilmittel in diesem Satz! Welches ist es?",
    t5_h1: "Der Satz lautet: 'Die Blätter tanzten im Wind.'",
    t5_h2: "Können Blätter wirklich tanzen? Nein, das ist eine Personifikation.",
    t5_w21: "Die", t5_w22: "Blätter", t5_w23: "tanzten", t5_w24: "fröhlich", t5_w25: "im", t5_w26: "Wind.",
    t5_q: "Welches Stilmittel nutzt 'Veni, vidi, vici' (Ich kam, ich sah, ich siegte)?",
    t5_q_a: "Anapher", t5_q_b: "Metapher", t5_q_c: "Vergleich", t5_q_d: "Alliteration",
  },
  en: {
    explorer_title: "Stylistic Devices Detective",
    t1_inst: "Which word turns this sentence into a metaphor?",
    t2_inst: "Put the comparison in the correct order!",
    t3_inst: "Is it a personification or a normal description? Sort them!",
    t4_inst: "Which stylistic device is present here? Connect them!",
    t5_inst: "Highlight the stylistic device in this sentence!",
  },
  hu: {
    explorer_title: "Stilisztikai detektív",
    t1_inst: "Melyik szó teszi a mondatot metaforává?",
    t2_inst: "Tedd a hasonlatot a helyes sorrendbe!",
    t3_inst: "Megszemélyesítés vagy normál leírás? Válogasd szét!",
    t4_inst: "Melyik alakzatot látod? Kösd össze!",
    t4_l1: "Ház és hazai (vagy német példa)",
    t5_inst: "Jelöld ki a stilisztikai eszközt a mondatban!",
  },
  ro: {
    explorer_title: "Detectiv de Figuri de Stil",
    t1_inst: "Care cuvânt transformă această propoziție într-o metaforă?",
    t2_inst: "Așază comparația în ordinea corectă!",
    t3_inst: "Este o personificare sau o descriere normală? Sortează-le!",
    t4_inst: "Ce figură de stil este prezentă aici? Leagă-le!",
    t5_inst: "Marchează figura de stil din această propoziție!",
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
      type: "word-order",
      words: ["t2_w1", "t2_w2", "t2_w3", "t2_w4"],
      correctOrder: [0, 1, 2, 3],
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
        { id: "pers", label: "t3_bucket_pers" },
        { id: "norm", label: "t3_bucket_norm" },
      ],
      items: [
        { text: "t3_item_p1", bucketId: "pers" },
        { text: "t3_item_n1", bucketId: "norm" },
        { text: "t3_item_p2", bucketId: "pers" },
        { text: "t3_item_n2", bucketId: "norm" },
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
    svg: () => <Topic1Svg />, // Small variation logic or generic
    bulletKeys: ["t4_b1", "t4_b2", "t4_b3"],
    interactive: {
      type: "match-pairs",
      pairs: [
        { left: "t4_l1", right: "t4_r1" },
        { left: "t4_l2", right: "t4_r2" },
        { left: "t4_l3", right: "t4_r3" },
        { left: "t4_l4", right: "t4_r4" },
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
    svg: () => <Topic3Svg />,
    bulletKeys: ["t5_b1", "t5_b2", "t5_b3"],
    interactive: {
      type: "highlight-text",
      tokens: ["t5_w21", "t5_w22", "t5_w23", "t5_w24", "t5_w25", "t5_w26"],
      correctIndices: [2],
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
  icon: "🎭",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const StilmittelExplorer = memo(function StilmittelExplorer({
  color = "#F59E0B",
  onDone,
  lang = "de",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={7} explorerId="deutsch_k7_stilmittel" color={color} lang={lang} onDone={onDone} />;
});

export default StilmittelExplorer;
