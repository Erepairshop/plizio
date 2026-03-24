"use client";
// PrepositionExplorerK5 — Island i3: Präpositionen (Prepositions)
// Topics: 1) Akkusativ-Präp 2) Dativ-Präp 3) Wechselpräpositionen 4) Wo vs Wohin 5) Gemischtes Quiz

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSTRATIONS ──────────────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0F9FF" rx="20" />
      <g transform="translate(120, 70)">
        <rect x="-80" y="-30" width="160" height="60" rx="8" fill="#BAE6FD" stroke="#0284C7" strokeWidth="2" />
        <text x="0" y="-5" fontSize="14" fontWeight="bold" fill="#0369A1" textAnchor="middle">für, um, durch, gegen, ohne</text>
        <text x="0" y="20" fontSize="16" fontWeight="black" fill="#0284C7" textAnchor="middle">+ AKKUSATIV</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FDF2F8" rx="20" />
      <g transform="translate(120, 70)">
        <rect x="-80" y="-30" width="160" height="60" rx="8" fill="#FBCFE8" stroke="#BE185D" strokeWidth="2" />
        <text x="0" y="-5" fontSize="14" fontWeight="bold" fill="#9D174D" textAnchor="middle">aus, bei, mit, nach, von, zu</text>
        <text x="0" y="20" fontSize="16" fontWeight="black" fill="#BE185D" textAnchor="middle">+ DATIV</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0FDF4" rx="20" />
      <g transform="translate(120, 70)">
        <text x="0" y="-20" fontSize="14" fontWeight="bold" fill="#15803D" textAnchor="middle">Wechselpräpositionen</text>
        <text x="0" y="5" fontSize="12" fill="#166534" textAnchor="middle">in, an, auf, über, unter,</text>
        <text x="0" y="20" fontSize="12" fill="#166534" textAnchor="middle">vor, hinter, neben, zwischen</text>
        <text x="0" y="45" fontSize="14" fontWeight="bold" fill="#059669" textAnchor="middle">Akkusativ ODER Dativ</text>
      </g>
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FFFBEB" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-50" y="-10" fontSize="16" fontWeight="bold" fill="#B45309" textAnchor="middle">Wo?</text>
        <text x="-50" y="10" fontSize="12" fill="#D97706" textAnchor="middle">(Ort)</text>
        <text x="-50" y="30" fontSize="16" fontWeight="black" fill="#B45309" textAnchor="middle">DATIV</text>
        
        <path d="M -15,0 L 15,0" stroke="#FBBF24" strokeWidth="2" strokeDasharray="2 2" />
        
        <text x="50" y="-10" fontSize="16" fontWeight="bold" fill="#B45309" textAnchor="middle">Wohin?</text>
        <text x="50" y="10" fontSize="12" fill="#D97706" textAnchor="middle">(Richtung)</text>
        <text x="50" y="30" fontSize="16" fontWeight="black" fill="#B45309" textAnchor="middle">AKKUSATIV</text>
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="k5Grad3_5" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#0284C7" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#k5Grad3_5)" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-30" y="0" fontSize="30" textAnchor="middle">📍</text>
        <text x="30" y="0" fontSize="30" textAnchor="middle">🧭</text>
        <text x="0" y="35" fontSize="16" fontWeight="bold" fill="#0369A1" textAnchor="middle">Präpositionen-Mix</text>
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Präpositionen K5",

    // T1
    t1_title: "Akkusativ-Präpositionen",
    t1_text: "Einige Präpositionen sind wie Magnete: Sie ziehen IMMER den Akkusativ (Wen/Was?) an! Merke dir: für, um, durch, gegen, ohne (Eselsbrücke: FUDGO).",
    t1_b1: "für: Das Geschenk ist FÜR DICH.",
    t1_b2: "ohne: Er geht OHNE DEN HUND.",
    t1_b3: "durch: Wir laufen DURCH DEN PARK.",
    t1_inst: "Welche Präposition passt in die Lücke?",
    t1_h1: "Der Satz bedeutet: Dieses Geschenk ist 'for' dich.",
    t1_h2: "Wir brauchen das Wort 'für'.",
    t1_gap_sentence: "Ich habe eine Überraschung {gap} dich.",
    t1_c1: "für", t1_c2: "mit", t1_c3: "zu",
    t1_q: "Welchen Fall verlangt die Präposition 'ohne' IMMER?",
    t1_q_a: "Akkusativ", t1_q_b: "Dativ", t1_q_c: "Genitiv", t1_q_d: "Nominativ",

    // T2
    t2_title: "Dativ-Präpositionen",
    t2_text: "Andere Präpositionen ziehen IMMER den Dativ (Wem?) an. Die wichtigsten sind: aus, bei, mit, nach, seit, von, zu.",
    t2_b1: "mit: Ich fahre MIT DEM AUTO.",
    t2_b2: "zu: Ich gehe ZU MEINER OMA.",
    t2_b3: "aus: Er kommt AUS DEM HAUS.",
    t2_inst: "Welche Endung passt? Verbinde Präposition und Nomen richtig!",
    t2_h1: "Alle diese Wörter verlangen den Dativ.",
    t2_h2: "mit dem Zug (männlich), zu meiner Oma (weiblich), aus dem Haus (sächlich), nach Berlin (Stadt).",
    t2_l1: "mit", t2_r1: "dem Zug",
    t2_l2: "zu", t2_r2: "meiner Oma",
    t2_l3: "aus", t2_r3: "dem Haus",
    t2_l4: "nach", t2_r4: "Berlin",
    t2_q: "Welche Präposition verlangt den Dativ?",
    t2_q_a: "mit", t2_q_b: "für", t2_q_c: "durch", t2_q_d: "ohne",

    // T3
    t3_title: "Wechselpräpositionen",
    t3_text: "Das sind die schwierigsten Präpositionen! Sie wechseln den Fall. Manchmal verlangen sie den Akkusativ, manchmal den Dativ. Es sind 9 Wörter: in, an, auf, über, unter, vor, hinter, neben, zwischen.",
    t3_b1: "Sie können Akkusativ ODER Dativ verlangen.",
    t3_b2: "Es kommt auf die Frage an (Wo? oder Wohin?).",
    t3_b3: "Merke dir diese 9 Platz-Wörter gut!",
    t3_inst: "Bringe den Satz in die richtige Reihenfolge!",
    t3_h1: "Beginne mit dem Subjekt 'Wir' und dem Verb 'legen'.",
    t3_h2: "Danach das Objekt 'das Buch', und das Ziel 'auf den Tisch.'.",
    t3_w1: "Wir", t3_w2: "legen", t3_w3: "das", t3_w4: "Buch", t3_w5: "auf", t3_w6: "den", t3_w7: "Tisch.",
    t3_q: "Wie viele Wechselpräpositionen gibt es im Deutschen?",
    t3_q_a: "9", t3_q_b: "5", t3_q_c: "7", t3_q_d: "12",

    // T4
    t4_title: "Wo? (Dat) vs. Wohin? (Akk)",
    t4_text: "Jetzt kommt der Trick für Wechselpräpositionen! Fragst du 'WO?' (Ort/Stillstand), benutzt du den Dativ. Fragst du 'WOHIN?' (Richtung/Bewegung), benutzt du den Akkusativ.",
    t4_b1: "WO? (Ort) ➔ Dativ (in dem = im Park)",
    t4_b2: "WOHIN? (Richtung) ➔ Akkusativ (in den Park)",
    t4_b3: "liegen (Wo?) vs. legen (Wohin?)",
    t4_inst: "Ist es ein Ort (Wo? / Dativ) oder eine Richtung (Wohin? / Akkusativ)? Sortiere!",
    t4_h1: "'in die Stadt' ist eine Bewegung (Akkusativ). 'im Park' ist ein Ort (Dativ).",
    t4_h2: "'den' und 'die' zeigen oft Akkusativ. 'dem' (im/am) zeigt Dativ.",
    t4_bucket_wo: "Wo? (Ort / Dativ)",
    t4_bucket_wohin: "Wohin? (Richtung / Akkusativ)",
    t4_item_im_park: "im Park", t4_item_in_die_stadt: "in die Stadt",
    t4_item_unter_dem_bett: "unter dem Bett", t4_item_auf_den_berg: "auf den Berg",
    t4_q: "Welcher Fall folgt auf die Frage 'Wohin?' (z.B. Wohin gehst du?)",
    t4_q_a: "Akkusativ", t4_q_b: "Dativ", t4_q_c: "Genitiv", t4_q_d: "Nominativ",

    // T5
    t5_title: "Gemischtes Quiz",
    t5_text: "Kannst du die Präpositionen im Satz erkennen? Manchmal verstecken sie sich auch (in + dem = im, an + dem = am, zu + der = zur).",
    t5_b1: "FUDGO = Akkusativ",
    t5_b2: "aus, bei, mit... = Dativ",
    t5_b3: "Wo/Wohin = Wechselpräpositionen",
    t5_inst: "Markiere alle Präpositionen in diesem Satz!",
    t5_h1: "Es gibt zwei kleine Wörter, die das Verhältnis anzeigen.",
    t5_h2: "Die Präpositionen sind 'mit' und 'durch'.",
    t5_w1: "Wir", t5_w2: "fahren", t5_w3: "mit", t5_w4: "dem", t5_w5: "Auto", t5_w6: "durch", t5_w7: "die", t5_w8: "Stadt.",
    t5_q: "Welche Präposition versteckt sich im Wort 'am' (z.B. am Fenster)?",
    t5_q_a: "an dem", t5_q_b: "auf dem", t5_q_c: "an den", t5_q_d: "aus dem",
  },
  en: {
    explorer_title: "Prepositions",
    t1_inst: "Which preposition fits in the gap?",
    t1_h1: "The sentence means: This gift is 'for' you.",
    t1_h2: "We need the word 'für'.",
    t2_inst: "Match the preposition and the noun correctly!",
    t2_h1: "All these words require the Dative case.",
    t2_h2: "mit dem Zug, zu meiner Oma, aus dem Haus, nach Berlin.",
    t3_inst: "Put the sentence in the correct order!",
    t3_h1: "Start with the subject 'Wir' and verb 'legen'.",
    t3_h2: "Then the object 'das Buch', and the destination 'auf den Tisch.'.",
    t4_inst: "Is it a location (Wo? / Dative) or a direction (Wohin? / Accusative)? Sort!",
    t4_h1: "'in die Stadt' is a movement (Acc). 'im Park' is a place (Dat).",
    t4_h2: "'den' and 'die' often show Acc. 'dem' (im/am) shows Dat.",
    t4_bucket_wo: "Wo? (Where/Dat)",
    t4_bucket_wohin: "Wohin? (Where to/Acc)",
    t5_inst: "Highlight all prepositions in this sentence!",
    t5_h1: "There are two small words showing the relationship.",
    t5_h2: "The prepositions are 'mit' and 'durch'.",
  },
  hu: {
    explorer_title: "Elöljárószók",
    t1_inst: "Melyik elöljárószó illik az űrbe?",
    t1_h1: "A mondat jelentése: Ez az ajándék neked/érted (for) van.",
    t1_h2: "A 'für' szóra van szükségünk.",
    t2_inst: "Kösd össze helyesen az elöljárószót és a főnevet!",
    t2_h1: "Mindezek a szavak részesesetet (Dativ) vonzanak.",
    t2_h2: "mit dem Zug, zu meiner Oma, aus dem Haus, nach Berlin.",
    t3_inst: "Tedd a mondatot a helyes sorrendbe!",
    t3_h1: "Kezdd a 'Wir' alannyal és a 'legen' igével.",
    t3_h2: "Aztán a tárgy 'das Buch', és a cél 'auf den Tisch.'.",
    t4_inst: "Ez egy hely (Wo? / Dativ) vagy egy irány (Wohin? / Akkusativ)? Válogasd szét!",
    t4_h1: "A 'in die Stadt' (a városba) egy mozgás (Akk). Az 'im Park' (a parkban) egy hely (Dat).",
    t4_h2: "A 'den' és 'die' gyakran Akkusativ. A 'dem' (im/am) Dativ.",
    t4_bucket_wo: "Wo? (Hol/Dat)",
    t4_bucket_wohin: "Wohin? (Hová/Akk)",
    t5_inst: "Jelöld ki az összes elöljárószót ebben a mondatban!",
    t5_h1: "Két kis szó is van, ami a viszonyt mutatja.",
    t5_h2: "Az elöljárószók a 'mit' és a 'durch'.",
  },
  ro: {
    explorer_title: "Prepoziții",
    t1_inst: "Ce prepoziție se potrivește în spațiu?",
    t1_h1: "Propoziția înseamnă: Acest cadou este 'pentru' (for) tine.",
    t1_h2: "Avem nevoie de cuvântul 'für'.",
    t2_inst: "Leagă corect prepoziția de substantiv!",
    t2_h1: "Toate aceste cuvinte cer cazul Dativ.",
    t2_h2: "mit dem Zug, zu meiner Oma, aus dem Haus, nach Berlin.",
    t3_inst: "Așază propoziția în ordinea corectă!",
    t3_h1: "Începe cu subiectul 'Wir' și verbul 'legen'.",
    t3_h2: "Apoi obiectul 'das Buch', și destinația 'auf den Tisch.'.",
    t4_inst: "Este un loc (Wo? / Dativ) sau o direcție (Wohin? / Acuzativ)? Sortează!",
    t4_h1: "'in die Stadt' e o mișcare (Akk). 'im Park' e un loc (Dat).",
    t4_h2: "'den' și 'die' indică des Akkusativ. 'dem' (im/am) indică Dativ.",
    t4_bucket_wo: "Wo? (Unde/Dat)",
    t4_bucket_wohin: "Wohin? (Încotro/Akk)",
    t5_inst: "Marchează toate prepozițiile din această propoziție!",
    t5_h1: "Există două cuvinte mici care arată relația.",
    t5_h2: "Prepozițiile sunt 'mit' și 'durch'.",
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
      choices: ["t1_c1", "t1_c2", "t1_c3"], // für, mit, zu
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
        { left: "t2_l1", right: "t2_r1" }, // mit -> dem Zug
        { left: "t2_l2", right: "t2_r2" }, // zu -> meiner Oma
        { left: "t2_l3", right: "t2_r3" }, // aus -> dem Haus
        { left: "t2_l4", right: "t2_r4" }, // nach -> Berlin
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
      type: "word-order",
      words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6", "t3_w7"], // Wir legen das Buch auf den Tisch.
      correctOrder: [0, 1, 2, 3, 4, 5, 6],
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
      type: "drag-to-bucket",
      buckets: [
        { id: "wo", label: "t4_bucket_wo" },
        { id: "wohin", label: "t4_bucket_wohin" },
      ],
      items: [
        { text: "t4_item_im_park", bucketId: "wo" },
        { text: "t4_item_in_die_stadt", bucketId: "wohin" },
        { text: "t4_item_unter_dem_bett", bucketId: "wo" },
        { text: "t4_item_auf_den_berg", bucketId: "wohin" },
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
    svg: () => <Topic5Svg />,
    bulletKeys: ["t5_b1", "t5_b2", "t5_b3"],
    interactive: {
      type: "highlight-text",
      tokens: ["t5_w1", "t5_w2", "t5_w3", "t5_w4", "t5_w5", "t5_w6", "t5_w7", "t5_w8"], // Wir fahren mit dem Auto durch die Stadt.
      correctIndices: [2, 5], // mit, durch
      instruction: "t5_inst",
      hint1: "t5_h1",
      hint2: "t5_h2",
    },
    quiz: {
      question: "t5_q",
      choices: ["t5_q_a", "t5_q_b", "t5_q_c", "t5_q_d"],
      answer: "t5_q_a", // an dem
    },
  },
];

// ─── DEF ────────────────────────────────────────────────────────────

const DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "📍",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const PrepositionExplorerK5 = memo(function PrepositionExplorerK5({
  color = "#0284C7",
  onDone,
  lang = "de",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={5} explorerId="deutsch_k5_preposition" color={color} lang={lang} onDone={onDone} />;
});

export default PrepositionExplorerK5;
