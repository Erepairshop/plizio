"use client";
// TenseExplorerK4 — Island i3: Zeitformen (Tenses)
// Topics: 1) 3 Vergangenheitsformen 2) Präteritum (regelmäßig) 3) Präteritum (unregelmäßig) 4) Perfekt (haben/sein) 5) Gemischtes Quiz

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSTRATIONS ──────────────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F8FAFC" rx="20" />
      <g transform="translate(120, 70)">
        <line x1="-90" y1="0" x2="90" y2="0" stroke="#94A3B8" strokeWidth="4" markerEnd="url(#arrow)" />
        <circle cx="60" cy="0" r="6" fill="#10B981" />
        <text x="60" y="-15" fontSize="10" fontWeight="bold" fill="#047857" textAnchor="middle">Präsens</text>
        
        <circle cx="0" cy="0" r="6" fill="#3B82F6" />
        <text x="0" y="-15" fontSize="10" fontWeight="bold" fill="#1D4ED8" textAnchor="middle">Perfekt / Prät.</text>

        <circle cx="-60" cy="0" r="6" fill="#8B5CF6" />
        <text x="-60" y="-15" fontSize="10" fontWeight="bold" fill="#6D28D9" textAnchor="middle">Plusquamperfekt</text>
        
        <text x="0" y="30" fontSize="12" fill="#475569" textAnchor="middle">Die drei Stufen der Vergangenheit</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0FDF4" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-40" y="-10" fontSize="18" fontWeight="bold" fill="#15803D" textAnchor="middle">spiel</text>
        <text x="0" y="-10" fontSize="18" fontWeight="bold" fill="#166534" textAnchor="middle">+</text>
        <rect x="20" y="-25" width="40" height="25" rx="4" fill="#BBF7D0" />
        <text x="40" y="-8" fontSize="16" fontWeight="bold" fill="#166534" textAnchor="middle">te</text>
        <path d="M -30,10 L 30,10" stroke="#22C55E" strokeWidth="2" strokeDasharray="4 2" />
        <text x="0" y="30" fontSize="16" fontWeight="black" fill="#14532D" textAnchor="middle">spielte</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FFF1F2" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-40" y="0" fontSize="20" fontWeight="bold" fill="#BE123C" textAnchor="middle">gehen</text>
        <path d="M -10,-5 L 10,-5" stroke="#F43F5E" strokeWidth="2" markerEnd="url(#arrow)" />
        <text x="40" y="0" fontSize="20" fontWeight="bold" fill="#E11D48" textAnchor="middle">ging</text>
        <text x="0" y="35" fontSize="12" fill="#9F1239" textAnchor="middle">Vokalwechsel! (Unregelmäßig)</text>
      </g>
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0F9FF" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-40" y="-10" fontSize="30" textAnchor="middle">🪑</text>
        <text x="-40" y="25" fontSize="12" fontWeight="bold" fill="#0369A1" textAnchor="middle">haben</text>
        <text x="-40" y="40" fontSize="10" fill="#0284C7" textAnchor="middle">(gesessen)</text>

        <path d="M -10,0 L 10,0" stroke="#38BDF8" strokeWidth="2" strokeDasharray="2 2" />

        <text x="40" y="-10" fontSize="30" textAnchor="middle">🏃‍♂️</text>
        <text x="40" y="25" fontSize="12" fontWeight="bold" fill="#0369A1" textAnchor="middle">sein</text>
        <text x="40" y="40" fontSize="10" fill="#0284C7" textAnchor="middle">(gerannt)</text>
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="k4Grad3_5" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#D97706" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#k4Grad3_5)" rx="20" />
      <g transform="translate(120, 70)">
        <text x="0" y="-10" fontSize="30" textAnchor="middle">⏳</text>
        <text x="0" y="25" fontSize="16" fontWeight="bold" fill="#B45309" textAnchor="middle">Zeitformen-Quiz</text>
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Zeitformen",

    // T1
    t1_title: "Drei mal Vergangenheit",
    t1_text: "Wir haben drei Zeiten für die Vergangenheit: Das Perfekt (fürs Sprechen), das Präteritum (fürs Schreiben/Märchen) und das Plusquamperfekt (die Vorvergangenheit).",
    t1_b1: "Perfekt: Ich habe gelacht.",
    t1_b2: "Präteritum: Ich lachte.",
    t1_b3: "Plusquamperfekt: Ich hatte gelacht.",
    t1_inst: "Welcher Satz gehört zu welcher Zeitform? Sortiere sie!",
    t1_h1: "Perfekt besteht aus zwei Teilen (habe + ge...t). Präteritum ist nur ein Wort.",
    t1_h2: "Plusquamperfekt erkennst du an 'hatte' oder 'war'.",
    t1_bucket_perfekt: "Perfekt",
    t1_bucket_praeteritum: "Präteritum",
    t1_bucket_plusquam: "Plusquamperfekt",
    t1_item_perfekt: "Ich habe gespielt",
    t1_item_praet: "Ich spielte",
    t1_item_plusq: "Ich hatte gespielt",
    t1_q: "Welche Zeitform benutzen wir meistens, wenn wir miteinander sprechen?",
    t1_q_a: "Das Perfekt", t1_q_b: "Das Präteritum", t1_q_c: "Das Plusquamperfekt", t1_q_d: "Das Futur",

    // T2
    t2_title: "Präteritum (regelmäßig)",
    t2_text: "Bei regelmäßigen Verben (schwache Verben) ist das Präteritum ganz leicht: Du nimmst den Wortstamm und hängst ein '-te' an (und danach die Personalendung).",
    t2_b1: "spielen ➔ ich spiel-te",
    t2_b2: "lachen ➔ wir lach-te-n",
    t2_b3: "Stamm + te + Endung",
    t2_inst: "Welches Wort passt in die Lücke? 'Gestern ___ ich ein schönes Bild.'",
    t2_h1: "Wir suchen das Präteritum von 'malen' für 'ich'.",
    t2_h2: "mal- + -te = malte.",
    t2_gap_sentence: "Gestern {gap} ich ein schönes Bild.",
    t2_c1: "malte", t2_c2: "male", t2_c3: "gemalt",
    t2_q: "Wie lautet das Präteritum von 'wir lernen'?",
    t2_q_a: "wir lernten", t2_q_b: "wir lern", t2_q_c: "wir haben gelernt", t2_q_d: "wir lernet",

    // T3
    t3_title: "Präteritum (unregelmäßig)",
    t3_text: "Unregelmäßige (starke) Verben verändern im Präteritum ihren Vokal im Wortstamm. Sie bekommen KEIN '-te'. Diese Formen muss man gut auswendig lernen!",
    t3_b1: "gehen ➔ ging (NICHT gehte!)",
    t3_b2: "sehen ➔ sah",
    t3_b3: "essen ➔ aß",
    t3_inst: "Finde die Paare: Verbinde die Grundform (Präsens) mit dem Präteritum!",
    t3_h1: "gehen wird zu ging. fahren wird zu fuhr.",
    t3_h2: "schlafen wird zu schlief. essen wird zu aß.",
    t3_l1: "gehen", t3_r1: "ging",
    t3_l2: "fahren", t3_r2: "fuhr",
    t3_l3: "schlafen", t3_r3: "schlief",
    t3_l4: "essen", t3_r4: "aß",
    t3_q: "Was ist das richtige Präteritum von 'fliegen'?",
    t3_q_a: "flog", t3_q_b: "fliegte", t3_q_c: "geflogen", t3_q_d: "flag",

    // T4
    t4_title: "Perfekt: haben oder sein?",
    t4_text: "Im Perfekt brauchen wir ein Hilfsverb. Fast alle Verben bilden das Perfekt mit 'haben'. Aber Verben der BEWEGUNG (gehen, rennen, fliegen) oder ZUSTANDSÄNDERUNG (aufwachen) bilden es mit 'sein'!",
    t4_b1: "Mit haben: ich HABE gelacht, gespielt, gegessen",
    t4_b2: "Mit sein: ich BIN gegangen, gerannt, geflogen",
    t4_b3: "Merke: Bewege ich mich von A nach B? -> sein",
    t4_inst: "Welches Hilfsverb braucht das Wort? Sortiere sie in 'haben' oder 'sein'.",
    t4_h1: "Bewegst du dich von A nach B? Dann nimm 'sein'.",
    t4_h2: "'gegangen' und 'geflogen' brauchen 'sein'.",
    t4_bucket_haben: "mit 'haben' 🪑",
    t4_bucket_sein: "mit 'sein' 🏃",
    t4_item_gelesen: "gelesen", t4_item_gegangen: "gegangen",
    t4_item_gespielt: "gespielt", t4_item_geflogen: "geflogen",
    t4_item_gelacht: "gelacht", t4_item_gerannt: "gerannt",
    t4_q: "Welches dieser Partizipien bildet das Perfekt mit 'sein'?",
    t4_q_a: "geschwommen", t4_q_b: "gelesen", t4_q_c: "geschlafen", t4_q_d: "gekauft",

    // T5
    t5_title: "Gemischtes Quiz",
    t5_text: "Beweise, dass du die Zeiten beherrschst! Achte beim Satzbau im Perfekt auf die Satzklammer: Das Hilfsverb an Position 2, das Partizip ganz am Ende.",
    t5_b1: "Satzklammer: Wir SIND nach Hause GEGANGEN.",
    t5_b2: "Verwechsle nicht Präteritum und Perfekt.",
    t5_b3: "Bringe die Wörter in die perfekte Reihenfolge.",
    t5_inst: "Bringe den Perfekt-Satz in die richtige Reihenfolge!",
    t5_h1: "Das Subjekt 'Wir' steht am Anfang, dann das Hilfsverb 'sind'.",
    t5_h2: "Das Partizip 'gegangen.' kommt ganz ans Ende.",
    t5_w1: "Wir", t5_w2: "sind", t5_w3: "gestern", t5_w4: "nach", t5_w5: "Hause", t5_w6: "gegangen.",
    t5_q: "Welcher Satz steht im Plusquamperfekt?",
    t5_q_a: "Er hatte geschlafen.", t5_q_b: "Er hat geschlafen.", t5_q_c: "Er schlief.", t5_q_d: "Er wird schlafen.",
  },
  en: {
    explorer_title: "Tenses (Time Forms)",
    t1_inst: "Which sentence belongs to which tense? Sort them!",
    t1_h1: "Perfekt has two parts (habe + ge...t). Präteritum is just one word.",
    t1_h2: "Plusquamperfekt uses 'hatte' or 'war'.",
    t1_bucket_perfekt: "Perfekt",
    t1_bucket_praeteritum: "Präteritum",
    t1_bucket_plusquam: "Plusquamperfekt",
    t2_inst: "Which word fits in the gap? 'Gestern ___ ich ein schönes Bild.'",
    t2_h1: "We need the Präteritum of 'malen' for 'ich'.",
    t2_h2: "mal- + -te = malte.",
    t3_inst: "Find the pairs: Connect the base form with the Präteritum!",
    t3_h1: "gehen becomes ging. fahren becomes fuhr.",
    t3_h2: "schlafen becomes schlief. essen becomes aß.",
    t4_inst: "Which auxiliary verb is needed? Sort into 'haben' or 'sein'.",
    t4_h1: "Do you move from A to B? Then use 'sein'.",
    t4_h2: "'gegangen' and 'geflogen' need 'sein'.",
    t4_bucket_haben: "with 'haben'",
    t4_bucket_sein: "with 'sein'",
    t5_inst: "Put the Perfekt sentence in the correct order!",
    t5_h1: "Subject 'Wir' first, then the auxiliary verb 'sind'.",
    t5_h2: "The participle 'gegangen.' goes to the very end.",
  },
  hu: {
    explorer_title: "Igeidők",
    t1_inst: "Melyik mondat melyik igeidőhöz tartozik? Válogasd szét őket!",
    t1_h1: "A Perfekt két részből áll (habe + ge...t). A Präteritum csak egy szó.",
    t1_h2: "A Plusquamperfektet a 'hatte' vagy 'war' szavakról ismered fel.",
    t1_bucket_perfekt: "Perfekt",
    t1_bucket_praeteritum: "Präteritum",
    t1_bucket_plusquam: "Plusquamperfekt",
    t2_inst: "Melyik szó illik az űrbe? 'Gestern ___ ich ein schönes Bild.'",
    t2_h1: "A 'malen' múlt idejű alakját keressük 'ich' (én) személyben.",
    t2_h2: "mal- + -te = malte.",
    t3_inst: "Keresd meg a párokat: Kösd össze a jelen időt a Präteritummal!",
    t3_h1: "A 'gehen'-ből 'ging' lesz. A 'fahren'-ből 'fuhr'.",
    t3_h2: "A 'schlafen'-ből 'schlief' lesz. Az 'essen'-ből 'aß'.",
    t4_inst: "Melyik segédige kell? Válogasd 'haben' vagy 'sein' szerint.",
    t4_h1: "Mozogsz A-ból B-be? Akkor a 'sein'-t válaszd.",
    t4_h2: "A 'gegangen' és 'geflogen' a 'sein'-t vonzza.",
    t4_bucket_haben: "'haben'-nel",
    t4_bucket_sein: "'sein'-nel",
    t5_inst: "Tedd a Perfekt mondatot a helyes sorrendbe!",
    t5_h1: "Az alany ('Wir') van elöl, utána a segédige ('sind').",
    t5_h2: "A 'gegangen.' a mondat legvégére kerül.",
  },
  ro: {
    explorer_title: "Timpurile verbale",
    t1_inst: "Care propoziție aparține cărui timp? Sortează-le!",
    t1_h1: "Perfectul are două părți (habe + ge...t). Präteritum este doar un cuvânt.",
    t1_h2: "Plusquamperfekt folosește 'hatte' sau 'war'.",
    t1_bucket_perfekt: "Perfekt",
    t1_bucket_praeteritum: "Präteritum",
    t1_bucket_plusquam: "Plusquamperfekt",
    t2_inst: "Ce cuvânt se potrivește în spațiu? 'Gestern ___ ich ein schönes Bild.'",
    t2_h1: "Căutăm forma de Präteritum pentru 'malen' la persoana 'ich'.",
    t2_h2: "mal- + -te = malte.",
    t3_inst: "Găsește perechile: Conectează forma de bază cu Präteritum!",
    t3_h1: "gehen devine ging. fahren devine fuhr.",
    t3_h2: "schlafen devine schlief. essen devine aß.",
    t4_inst: "Care verb auxiliar este necesar? Sortează în 'haben' sau 'sein'.",
    t4_h1: "Te deplasezi de la A la B? Atunci folosește 'sein'.",
    t4_h2: "'gegangen' și 'geflogen' necesită 'sein'.",
    t4_bucket_haben: "cu 'haben'",
    t4_bucket_sein: "cu 'sein'",
    t5_inst: "Așază propoziția la Perfekt în ordinea corectă!",
    t5_h1: "Subiectul 'Wir' este primul, apoi verbul auxiliar 'sind'.",
    t5_h2: "Participiul 'gegangen.' se pune la finalul propoziției.",
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
        { id: "perfekt", label: "t1_bucket_perfekt" },
        { id: "praeteritum", label: "t1_bucket_praeteritum" },
        { id: "plusquam", label: "t1_bucket_plusquam" },
      ],
      items: [
        { text: "t1_item_perfekt", bucketId: "perfekt" },
        { text: "t1_item_praet", bucketId: "praeteritum" },
        { text: "t1_item_plusq", bucketId: "plusquam" },
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
      choices: ["t2_c1", "t2_c2", "t2_c3"], // malte, male, gemalt
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
        { left: "t3_l1", right: "t3_r1" }, // gehen -> ging
        { left: "t3_l2", right: "t3_r2" }, // fahren -> fuhr
        { left: "t3_l3", right: "t3_r3" }, // schlafen -> schlief
        { left: "t3_l4", right: "t3_r4" }, // essen -> aß
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
      type: "drag-to-bucket",
      buckets: [
        { id: "haben", label: "t4_bucket_haben" },
        { id: "sein", label: "t4_bucket_sein" },
      ],
      items: [
        { text: "t4_item_gelesen", bucketId: "haben" },
        { text: "t4_item_gegangen", bucketId: "sein" },
        { text: "t4_item_gespielt", bucketId: "haben" },
        { text: "t4_item_geflogen", bucketId: "sein" },
        { text: "t4_item_gelacht", bucketId: "haben" },
        { text: "t4_item_gerannt", bucketId: "sein" },
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
      type: "word-order",
      words: ["t5_w1", "t5_w2", "t5_w3", "t5_w4", "t5_w5", "t5_w6"], // Wir sind gestern nach Hause gegangen.
      correctOrder: [0, 1, 2, 3, 4, 5],
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
  icon: "⏳",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const TenseExplorerK4 = memo(function TenseExplorerK4({
  color = "#8B5CF6",
  onDone,
  lang = "de",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={4} explorerId="deutsch_k4_tense" color={color} lang={lang} onDone={onDone} />;
});

export default TenseExplorerK4;
