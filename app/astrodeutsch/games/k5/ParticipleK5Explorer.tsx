"use client";
// ParticipleK5Explorer — Island i6: Partizipien (Participles)
// Topics: 1) Partizip I 2) Partizip II 3) Partizip als Adjektiv 4) Bildung Partizip II 5) Gemischtes Quiz

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSTRATIONS ──────────────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0FDF4" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-40" y="-10" fontSize="16" fontWeight="bold" fill="#15803D" textAnchor="middle">lachen</text>
        <text x="0" y="-10" fontSize="16" fontWeight="bold" fill="#166534" textAnchor="middle">+</text>
        <text x="40" y="-10" fontSize="24" fontWeight="black" fill="#22C55E" textAnchor="middle">d</text>
        
        <path d="M -20,5 L 20,5" stroke="#4ADE80" strokeWidth="2" markerEnd="url(#arrow)" />
        <text x="0" y="30" fontSize="20" fontWeight="bold" fill="#14532D" textAnchor="middle">lachend</text>
        <text x="0" y="45" fontSize="10" fill="#15803D" textAnchor="middle">Partizip I (passiert gerade)</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0F9FF" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-50" y="-10" fontSize="18" fontWeight="bold" fill="#0284C7" textAnchor="middle">ge</text>
        <text x="-25" y="-10" fontSize="14" fill="#0369A1" textAnchor="middle">+</text>
        <text x="5" y="-10" fontSize="16" fontWeight="bold" fill="#0369A1" textAnchor="middle">spiel</text>
        <text x="35" y="-10" fontSize="14" fill="#0369A1" textAnchor="middle">+</text>
        <text x="55" y="-10" fontSize="18" fontWeight="bold" fill="#0284C7" textAnchor="middle">t</text>
        
        <path d="M -30,10 L 30,10" stroke="#38BDF8" strokeWidth="2" strokeDasharray="4 2" />
        <text x="0" y="30" fontSize="20" fontWeight="black" fill="#075985" textAnchor="middle">gespielt</text>
        <text x="0" y="45" fontSize="10" fill="#0284C7" textAnchor="middle">Partizip II (schon vorbei)</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FFFBEB" rx="20" />
      <g transform="translate(120, 70)">
        <rect x="-90" y="-15" width="80" height="30" rx="4" fill="#FDE68A" />
        <text x="-50" y="5" fontSize="12" fontWeight="bold" fill="#B45309" textAnchor="middle">spielend<tspan fill="#D97706">es</tspan></text>
        
        <text x="0" y="5" fontSize="20" fontWeight="bold" fill="#D97706" textAnchor="middle">+</text>
        
        <rect x="10" y="-15" width="80" height="30" rx="4" fill="#FEF3C7" />
        <text x="50" y="5" fontSize="12" fontWeight="bold" fill="#92400E" textAnchor="middle">Kind</text>
        
        <text x="0" y="40" fontSize="10" fill="#B45309" textAnchor="middle">Partizip als Adjektiv vor dem Nomen</text>
      </g>
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FDF2F8" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-50" y="-10" fontSize="14" fontWeight="bold" fill="#BE185D" textAnchor="middle">Regelmäßig:</text>
        <text x="-50" y="10" fontSize="16" fontWeight="black" fill="#9D174D" textAnchor="middle">ge...t</text>
        
        <text x="50" y="-10" fontSize="14" fontWeight="bold" fill="#BE185D" textAnchor="middle">Unregelmäßig:</text>
        <text x="50" y="10" fontSize="16" fontWeight="black" fill="#9D174D" textAnchor="middle">ge...en</text>
        
        <path d="M 0,-20 L 0,20" stroke="#FBCFE8" strokeWidth="2" />
        <text x="0" y="40" fontSize="10" fill="#BE185D" textAnchor="middle">z.B. gemacht vs. gesehen</text>
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="k5Grad6_5" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#14B8A6" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#0F766E" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#k5Grad6_5)" rx="20" />
      <g transform="translate(120, 70)">
        <text x="0" y="-5" fontSize="30" textAnchor="middle">🧩</text>
        <text x="0" y="30" fontSize="16" fontWeight="bold" fill="#0F766E" textAnchor="middle">Partizipien-Mix</text>
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Partizipien (Igenevek)",

    // T1
    t1_title: "Partizip I (Präsens)",
    t1_text: "Das Partizip I drückt aus, dass etwas genau in diesem Moment passiert. Wir bilden es ganz einfach: Infinitiv (Grundform) + d.",
    t1_b1: "spielen + d = spielend",
    t1_b2: "laufen + d = laufend",
    t1_b3: "Beispiel: Er kommt lachend ins Zimmer.",
    t1_inst: "Welches Partizip I passt in die Lücke?",
    t1_h1: "Wir suchen das Partizip I von 'singen'.",
    t1_h2: "Hänge einfach ein 'd' an den Infinitiv: singend.",
    t1_gap_sentence: "Das Mädchen geht {gap} nach Hause.",
    t1_c1: "singend", t1_c2: "gesungen", t1_c3: "singt",
    t1_q: "Wie bildet man das Partizip I im Deutschen?",
    t1_q_a: "Infinitiv + d", t1_q_b: "ge + Infinitiv", t1_q_c: "Infinitiv + t", t1_q_d: "ge + Stamm + t",

    // T2
    t2_title: "Partizip II (Perfekt)",
    t2_text: "Das Partizip II kennst du schon vom Perfekt (ich habe gespielt). Es drückt aus, dass eine Handlung schon abgeschlossen ist. Es beginnt oft mit 'ge-'.",
    t2_b1: "Regelmäßig: ge-spiel-t",
    t2_b2: "Unregelmäßig: ge-lauf-en",
    t2_b3: "Beispiel: Das Spiel ist beendet.",
    t2_inst: "Verbinde den Infinitiv mit seinem Partizip II!",
    t2_h1: "spielen wird zu gespielt. laufen wird zu gelaufen.",
    t2_h2: "machen wird zu gemacht. lesen wird zu gelesen.",
    t2_l1: "spielen", t2_r1: "gespielt",
    t2_l2: "laufen", t2_r2: "gelaufen",
    t2_l3: "machen", t2_r3: "gemacht",
    t2_l4: "lesen", t2_r4: "gelesen",
    t2_q: "Welches dieser Wörter ist ein Partizip II?",
    t2_q_a: "gekauft", t2_q_b: "kaufend", t2_q_c: "kaufen", t2_q_d: "kaufe",

    // T3
    t3_title: "Partizipien als Adjektive",
    t3_text: "Man kann Partizipien wie Adjektive (Wie-Wörter) benutzen, um Nomen zu beschreiben. Sie stehen dann VOR dem Nomen und bekommen eine Adjektiv-Endung.",
    t3_b1: "Partizip I: das SPIELENDE Kind (es spielt jetzt).",
    t3_b2: "Partizip II: das GEKAUFTE Buch (es wurde schon gekauft).",
    t3_b3: "Achte auf die Endungen (-e, -es, -em)!",
    t3_inst: "Passiert es JETZT (Partizip I) oder ist es VORBEI (Partizip II)? Sortiere!",
    t3_h1: "Wörter mit -end (laufend) passieren jetzt (Partizip I).",
    t3_h2: "Wörter mit ge- (gespielt) sind schon vorbei (Partizip II).",
    t3_bucket_p1: "Passiert jetzt (Part. I)",
    t3_bucket_p2: "Schon vorbei (Part. II)",
    t3_item_p1_a: "das weinende Baby", t3_item_p1_b: "der bellende Hund",
    t3_item_p2_a: "das gebackene Brot", t3_item_p2_b: "der reparierte Wagen",
    t3_q: "Welcher Satz enthält ein Partizip I als Adjektiv?",
    t3_q_a: "Der lachende Junge rennt.", t3_q_b: "Der geliebte Junge rennt.", t3_q_c: "Der Junge lacht.", t3_q_d: "Der Junge hat gelacht.",

    // T4
    t4_title: "Bildung des Partizip II",
    t4_text: "Verben werden im Partizip II unterschiedlich gebildet. Schwache (regelmäßige) Verben enden auf '-t'. Starke (unregelmäßige) Verben enden auf '-en' und verändern oft ihren Vokal.",
    t4_b1: "Schwach: ge + Stamm + t (ge-lern-t)",
    t4_b2: "Stark: ge + (neuer) Stamm + en (ge-sung-en)",
    t4_b3: "Verben auf -ieren haben kein 'ge' (repariert)!",
    t4_inst: "Bringe den Satz mit dem Partizip II in die richtige Reihenfolge!",
    t4_h1: "Subjekt: 'Ich'. Hilfsverb: 'habe'.",
    t4_h2: "Das Partizip 'gelesen.' kommt ganz ans Ende.",
    t4_w1: "Ich", t4_w2: "habe", t4_w3: "das", t4_w4: "spannende", t4_w5: "Buch", t4_w6: "gelesen.",
    t4_q: "Warum hat 'fotografiert' kein 'ge-' am Anfang?",
    t4_q_a: "Weil das Verb auf '-ieren' endet.", t4_q_b: "Weil es ein starkes Verb ist.", t4_q_c: "Weil es Partizip I ist.", t4_q_d: "Weil es ein Nomen ist.",

    // T5
    t5_title: "Gemischtes Quiz",
    t5_text: "Lass uns alles testen! Erkennst du, ob ein Wort ein Partizip I (-d) oder Partizip II (ge- + t/en) ist?",
    t5_b1: "Partizip I = aktiv (machend).",
    t5_b2: "Partizip II = passiv/perfekt (gemacht).",
    t5_inst: "Markiere das Partizip in diesem Satz!",
    t5_h1: "Wir suchen ein Wort, das aus einem Verb gebildet wurde und wie ein Adjektiv benutzt wird.",
    t5_h2: "Das Wort ist 'schlafende' (von schlafen).",
    t5_w1: "Das", t5_w2: "schlafende", t5_w3: "Kind", t5_w4: "träumt", t5_w5: "schön.",
    t5_q: "Wie lautet das Partizip I von 'sprechen'?",
    t5_q_a: "sprechend", t5_q_b: "gesprochen", t5_q_c: "sprechte", t5_q_d: "spricht",
  },
  en: {
    explorer_title: "Participles",
    t1_inst: "Which Participle I fits in the gap?",
    t1_h1: "We are looking for the Participle I of 'singen' (to sing).",
    t1_h2: "Just add a 'd' to the infinitive: singend.",
    t2_inst: "Connect the infinitive with its Participle II!",
    t2_h1: "spielen becomes gespielt. laufen becomes gelaufen.",
    t2_h2: "machen becomes gemacht. lesen becomes gelesen.",
    t3_inst: "Is it happening NOW (Part. I) or is it OVER (Part. II)? Sort!",
    t3_h1: "Words with -end (laufend) are happening now.",
    t3_h2: "Words with ge- (gespielt) are already over.",
    t3_bucket_p1: "Happening now (I)",
    t3_bucket_p2: "Already over (II)",
    t4_inst: "Put the sentence with the Participle II in the correct order!",
    t4_h1: "Subject: 'Ich'. Auxiliary verb: 'habe'.",
    t4_h2: "The participle 'gelesen.' goes to the very end.",
    t5_inst: "Highlight the participle in this sentence!",
    t5_h1: "We are looking for a word formed from a verb and used like an adjective.",
    t5_h2: "The word is 'schlafende' (sleeping).",
  },
  hu: {
    explorer_title: "Igenevek",
    t1_inst: "Melyik folyamatos melléknévi igenév (Partizip I) illik az űrbe?",
    t1_h1: "A 'singen' (énekelni) folyamatos igenevét keressük.",
    t1_h2: "Csak adj egy 'd'-t a főnévi igenévhez: singend.",
    t2_inst: "Kösd össze a főnévi igenevet a befejezett igenevével (Partizip II)!",
    t2_h1: "spielen -> gespielt. laufen -> gelaufen.",
    t2_h2: "machen -> gemacht. lesen -> gelesen.",
    t3_inst: "MOST történik (Part. I) vagy már VÉGE (Part. II)? Válogasd szét!",
    t3_h1: "Az -end végű szavak (laufend) most történnek.",
    t3_h2: "A ge- vel kezdődők (gespielt) már befejeződtek.",
    t3_bucket_p1: "Most történik (I)",
    t3_bucket_p2: "Már vége (II)",
    t4_inst: "Tedd a Partizip II-t tartalmazó mondatot a helyes sorrendbe!",
    t4_h1: "Alany: 'Ich'. Segédige: 'habe'.",
    t4_h2: "A 'gelesen.' igenév a mondat legvégére kerül.",
    t5_inst: "Jelöld ki az igenevet ebben a mondatban!",
    t5_h1: "Egy olyan szót keresünk, ami igéből képzett melléknévként viselkedik.",
    t5_h2: "A szó a 'schlafende' (alvó).",
  },
  ro: {
    explorer_title: "Participii",
    t1_inst: "Ce Participiu I se potrivește în spațiu?",
    t1_h1: "Căutăm Participiul I pentru 'singen' (a cânta).",
    t1_h2: "Adaugă doar un 'd' la infinitiv: singend.",
    t2_inst: "Leagă infinitivul de Participiul său II!",
    t2_h1: "spielen devine gespielt. laufen devine gelaufen.",
    t2_h2: "machen devine gemacht. lesen devine gelesen.",
    t3_inst: "Se întâmplă ACUM (Part. I) sau este GATA (Part. II)? Sortează!",
    t3_h1: "Cuvintele terminate în -end (laufend) se întâmplă acum.",
    t3_h2: "Cuvintele cu ge- (gespielt) sunt deja trecute.",
    t3_bucket_p1: "Se întâmplă acum (I)",
    t3_bucket_p2: "Deja terminat (II)",
    t4_inst: "Așază propoziția cu Participiul II în ordinea corectă!",
    t4_h1: "Subiect: 'Ich'. Verb auxiliar: 'habe'.",
    t4_h2: "Participiul 'gelesen.' merge la final.",
    t5_inst: "Marchează participiul din această propoziție!",
    t5_h1: "Căutăm un cuvânt format dintr-un verb și folosit ca adjectiv.",
    t5_h2: "Cuvântul este 'schlafende' (adormit).",
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
      choices: ["t1_c1", "t1_c2", "t1_c3"], // singend, gesungen, singt
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
        { left: "t2_l1", right: "t2_r1" }, // spielen -> gespielt
        { left: "t2_l2", right: "t2_r2" }, // laufen -> gelaufen
        { left: "t2_l3", right: "t2_r3" }, // machen -> gemacht
        { left: "t2_l4", right: "t2_r4" }, // lesen -> gelesen
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
      type: "drag-to-bucket",
      buckets: [
        { id: "p1", label: "t3_bucket_p1" },
        { id: "p2", label: "t3_bucket_p2" },
      ],
      items: [
        { text: "t3_item_p1_a", bucketId: "p1" },
        { text: "t3_item_p2_a", bucketId: "p2" },
        { text: "t3_item_p1_b", bucketId: "p1" },
        { text: "t3_item_p2_b", bucketId: "p2" },
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
      type: "word-order",
      words: ["t4_w1", "t4_w2", "t4_w3", "t4_w4", "t4_w5", "t4_w6"], // Ich habe das spannende Buch gelesen.
      correctOrder: [0, 1, 2, 3, 4, 5],
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
      tokens: ["t5_w1", "t5_w2", "t5_w3", "t5_w4", "t5_w5"], // Das schlafende Kind träumt schön.
      correctIndices: [1], // schlafende
      instruction: "t5_inst",
      hint1: "t5_h1",
      hint2: "t5_h2",
    },
    quiz: {
      question: "t5_q",
      choices: ["t5_q_a", "t5_q_b", "t5_q_c", "t5_q_d"],
      answer: "t5_q_a", // sprechend
    },
  },
];

// ─── DEF ────────────────────────────────────────────────────────────

const DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "🏃‍♂️",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const ParticipleK5Explorer = memo(function ParticipleK5Explorer({
  color = "#0D9488",
  onDone,
  lang = "de",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={5} explorerId="deutsch_k5_participle" color={color} lang={lang} onDone={onDone} />;
});

export default ParticipleK5Explorer;
