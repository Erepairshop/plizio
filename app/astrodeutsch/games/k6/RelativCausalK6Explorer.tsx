"use client";
// RelativCausalK6Explorer — Island i6: Relativ- & Kausalsätze (K6)
// Topics: 1) Relativsätze 2) Kausalsätze (weil/da/denn) 3) Kommaregeln 4) Wortstellung (Verb am Ende) 5) Gemischtes Quiz

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSTRATIONS ──────────────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0F9FF" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-60" y="-10" fontSize="14" fontWeight="bold" fill="#0369A1" textAnchor="middle">Nomen</text>
        <path d="M -30,-10 L 10,-10" stroke="#0EA5E9" strokeWidth="2" markerEnd="url(#arrow)" />
        <rect x="20" y="-25" width="80" height="30" rx="4" fill="#BAE6FD" stroke="#0EA5E9" strokeWidth="2" />
        <text x="60" y="-5" fontSize="12" fontWeight="bold" fill="#0369A1" textAnchor="middle">Relativsatz</text>
        <text x="0" y="30" fontSize="10" fill="#0284C7" textAnchor="middle">Das Buch, das ich lese...</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0FDF4" rx="20" />
      <g transform="translate(120, 70)">
        <circle cx="0" cy="-20" r="30" fill="#BBF7D0" stroke="#16A34A" strokeWidth="2" />
        <text x="0" y="-15" fontSize="20" textAnchor="middle">❓</text>
        <text x="0" y="25" fontSize="14" fontWeight="bold" fill="#15803D" textAnchor="middle">WEIL / DA</text>
        <text x="0" y="45" fontSize="10" fill="#166534" textAnchor="middle">Grund-Sätze (Kausal)</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FEF2F2" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-50" y="0" fontSize="14" fill="#B91C1C" textAnchor="middle">Hauptsatz</text>
        <text x="0" y="5" fontSize="30" fontWeight="black" fill="#DC2626" textAnchor="middle">,</text>
        <text x="55" y="0" fontSize="14" fill="#B91C1C" textAnchor="middle">Nebensatz</text>
        <text x="0" y="40" fontSize="10" fill="#991B1B" textAnchor="middle">Immer ein Komma dazwischen!</text>
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Satzbau-Meister K6",
    // T1
    t1_title: "Der Relativsatz",
    t1_text: "Ein Relativsatz beschreibt ein Nomen genauer. Er wird mit einem Relativpronomen (der, die, das) eingeleitet, das sich auf das Nomen bezieht.",
    t1_b1: "Beispiel: Der Hund, DER laut bellt, gehört mir.",
    t1_b2: "Das Relativpronomen richtet sich nach dem Nomen (Genus/Numerus).",
    t1_b3: "Das konjugierte Verb steht am Ende des Relativsatzes.",
    t1_inst: "Welches Relativpronomen passt? Wähle aus!",
    t1_h1: "Das Nomen ist 'das Kind' (sächlich).",
    t1_h2: "Wir brauchen das Pronomen 'das'.",
    t1_gap_sentence: "Dort spielt das Kind, {gap} ich kenne.",
    t1_c1: "das", t1_c2: "der", t1_c3: "die",
    t1_q: "Wo steht das ragozott Verb (Prädikat) in einem Relativsatz?",
    t1_q_a: "Ganz am Ende", t1_q_b: "Direkt nach dem Pronomen", t1_q_c: "An Position 2", t1_q_d: "Ganz am Anfang",

    // T2
    t2_title: "Kausalsätze (Grund-Sätze)",
    t2_text: "Kausalsätze geben einen Grund an (Warum?). Wir leiten sie meist mit 'weil' oder 'da' ein. Achtung: Bei 'denn' bleibt das Verb auf Position 2!",
    t2_b1: "weil / da ➔ Verb am Ende (...weil es regnet.)",
    t2_b2: "denn ➔ Verb auf Position 2 (...denn es regnet.)",
    t2_b3: "Nebensatz (weil) vs. Hauptsatz-Verbindung (denn).",
    t2_inst: "Ist es ein Nebensatz (Verb am Ende) vagy eine Hauptsatz-Verbindung? Sortiere!",
    t2_h1: "Suche das Verb. Steht es am Ende? Dann ist es ein Nebensatz.",
    t2_h2: "'weil' und 'da' sind Nebensatz-Könige.",
    t2_bucket_ns: "Nebensatz (Verb am Ende)",
    t2_bucket_hs: "HS-Verbindung (Verb auf 2)",
    t2_item_n1: "... weil ich Hunger habe.", t2_item_n2: "... da es spät ist.",
    t2_item_h1: "... denn ich habe Hunger.", t2_item_h2: "... und ich gehe heim.",
    t2_q: "Welches Bindewort für einen Grund verlangt KEINE Endstellung des Verbs?",
    t2_q_a: "denn", t2_q_b: "weil", t2_q_c: "da", t2_q_d: "obwohl",

    // T3
    t3_title: "Die Kommaregeln",
    t3_text: "Jeder Nebensatz muss durch ein Komma vom Hauptsatz getrennt werden. Das gilt für Relativsätze, Kausalsätze und alle anderen Nebensätze.",
    t3_b1: "Hauptsatz, [Komma] Nebensatz.",
    t3_b2: "Eingeschobener Relativsatz: Nomen, [Komma] Relativsatz, [Komma] Rest vom HS.",
    t3_b3: "Das Komma hilft uns, die Satzgrenzen zu sehen.",
    t3_inst: "Markiere alle notwendigen Kommas in diesem Satz!",
    t3_h1: "Der Relativsatz beginnt nach 'Mann'.",
    t3_h2: "Der Relativsatz endet nach 'hat'.",
    t3_w1: "Der", t3_w2: "Mann", t3_w3: ",", t3_w4: "der", t3_w5: "uns", t3_w6: "geholfen", t3_w7: "hat", t3_w8: ",", t3_w9: "ist", t3_w10: "nett.",
    t1_q2: "Was trennt das Komma im Deutschen am häufigsten?",
    t1_q2_a: "Haupt- und Nebensätze", t1_q2_b: "Nomen und Adjektive", t1_q2_c: "Artikel und Nomen", t1_q2_d: "Zahlen und Wörter",

    // T4
    t4_title: "Wortstellung im Nebensatz",
    t4_text: "Das ist die goldene Regel der deutschen Grammatik: Im Nebensatz (eingeleitet durch Bindewörter oder Relativpronomen) wandert das ragozott Verb immer an die LETZTE Stelle.",
    t4_b1: "HS: Er KOMMT heute.",
    t4_b2: "NS: Ich weiß, dass er heute KOMMT.",
    t4_b3: "Achtung bei Perfekt: ...gesehen HABE.",
    t4_inst: "Bringe den Nebensatz in die richtige Reihenfolge!",
    t4_h1: "Das Bindewort 'weil' steht am Anfang.",
    t4_h2: "Das Verb 'ist.' muss ganz ans Ende.",
    t4_w21: "weil", t4_w22: "das", t4_w23: "Wetter", t4_w24: "heute", t4_w25: "schön", t4_w26: "ist.",
    t4_q: "Wo steht das Verb im Nebensatz nach dem Wort 'obwohl'?",
    t4_q_a: "An der letzten Stelle", t4_q_b: "An der zweiten Stelle", t4_q_c: "Ganz am Anfang", t4_q_d: "Nach dem Subjekt",

    // T5
    t5_title: "Gemischtes Quiz",
    t5_text: "Bist du ein Satzbau-Profi? Teste deine Kenntnisse über Relativpronomen, Bindewörter und die Kommasetzung.",
    t5_b1: "der/die/das = Relativpronomen.",
    t5_b2: "weil/da/denn = Kausal.",
    t5_b3: "Komma nicht vergessen!",
    t5_inst: "Verbinde den Hauptsatz mit dem passenden Nebensatz!",
    t5_h1: "Suche nach einer logischen Ergänzung.",
    t5_h2: "Ein Buch wird 'gelesen', ein Freund wird 'besucht'.",
    t5_l1: "Das ist das Buch,", t5_r1: "das ich gestern kaufte.",
    t5_l2: "Ich bleibe hier,", t5_r2: "weil es stark regnet.",
    t5_l3: "Das ist der Junge,", t5_r3: "der am besten singt.",
    t5_l4: "Wir essen jetzt,", t5_r4: "da wir Hunger haben.",
    t5_q: "Welcher Satz ist grammatikalisch VOLLSTÄNDIG richtig?",
    t5_q_a: "Ich komme, weil ich Zeit habe.", t5_q_b: "Ich komme weil ich habe Zeit.", t5_q_c: "Ich komme, denn ich Zeit habe.", t5_q_d: "Ich komme, weil ich habe Zeit.",
  },
  en: {
    explorer_title: "Sentence Builder Pro",
    t1_inst: "Which relative pronoun fits? Choose!",
    t2_inst: "Is it a subordinate clause (Verb at end) or a main clause connection? Sort!",
    t2_bucket_ns: "Subordinate Clause",
    t2_bucket_hs: "Main Clause Conn.",
    t3_inst: "Mark all necessary commas in this sentence!",
    t4_inst: "Put the subordinate clause in the correct order!",
    t5_inst: "Connect the main clause with the matching subordinate clause!",
  },
  hu: {
    explorer_title: "Mondatszerkesztő mester",
    t1_inst: "Melyik vonatkozói névmás illik ide? Válaszd ki!",
    t2_inst: "Mellékmondat (Ige a végén) vagy főmondati kötőszó? Válogasd szét!",
    t2_bucket_ns: "Mellékmondat (Ige a végén)",
    t2_bucket_hs: "Főmondati (Ige a 2. helyen)",
    t3_inst: "Jelöld ki az összes szükséges vesszőt a mondatban!",
    t4_inst: "Tedd a mellékmondatot a helyes sorrendbe!",
    t5_inst: "Kösd össze a főmondatot a hozzá illő mellékmondattal!",
  },
  ro: {
    explorer_title: "Expert Construcția Frazei",
    t1_inst: "Care pronume relativ se potrivește? Alege!",
    t2_inst: "Este o propoziție secundară (verbul la final) sau o conexiune de propoziție principală? Sortează!",
    t2_bucket_ns: "Propoziție secundară",
    t2_bucket_hs: "Conexiune PP",
    t3_inst: "Marchează toate virgulele necesare în această propoziție!",
    t4_inst: "Așază propoziția secundară în ordinea corectă!",
    t5_inst: "Conectează propoziția principală cu propoziția secundară potrivită!",
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
      type: "drag-to-bucket",
      buckets: [
        { id: "ns", label: "t2_bucket_ns" },
        { id: "hs", label: "t2_bucket_hs" },
      ],
      items: [
        { text: "t2_item_n1", bucketId: "ns" },
        { text: "t2_item_h1", bucketId: "hs" },
        { text: "t2_item_n2", bucketId: "ns" },
        { text: "t2_item_h2", bucketId: "hs" },
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
      tokens: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6", "t3_w7", "t3_w8", "t3_w9", "t3_w10"],
      correctIndices: [2, 7],
      instruction: "t3_inst",
      hint1: "t3_h1",
      hint2: "t3_h2",
    },
    quiz: {
      question: "t1_q2",
      choices: ["t1_q2_a", "t1_q2_b", "t1_q2_c", "t1_q2_d"],
      answer: "t1_q2_a",
    },
  },
  {
    infoTitle: "t4_title",
    infoText: "t4_text",
    svg: () => <Topic1Svg />,
    bulletKeys: ["t4_b1", "t4_b2", "t4_b3"],
    interactive: {
      type: "word-order",
      words: ["t4_w21", "t4_w22", "t4_w23", "t4_w24", "t4_w25", "t4_w26"],
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
    svg: () => <Topic2Svg />,
    bulletKeys: ["t5_b1", "t5_b2", "t5_b3"],
    interactive: {
      type: "match-pairs",
      pairs: [
        { left: "t5_l1", right: "t5_r1" },
        { left: "t5_l2", right: "t5_r2" },
        { left: "t5_l3", right: "t5_r3" },
        { left: "t5_l4", right: "t5_r4" },
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
  icon: "🔗",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const RelativCausalK6Explorer = memo(function RelativCausalK6Explorer({
  color = "#0284C7",
  onDone,
  lang = "de",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={6} explorerId="deutsch_k6_relativ_causal" color={color} lang={lang} onDone={onDone} />;
});

export default RelativCausalK6Explorer;
