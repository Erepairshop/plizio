"use client";
// SpeechTransformExplorer — Island i1: Redewiedergabe (Reported Speech K8)
// Topics: 1) Direkte Rede 2) Indirekte Rede (Konjunktiv I) 3) Redebegleitende Verben 4) Tempuswechsel 5) Gemischtes Quiz

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSTRATIONS ──────────────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0F9FF" rx="20" />
      <g transform="translate(120, 70)">
        <path d="M -80,-20 h 160 v 40 h -160 z" fill="white" stroke="#0284C7" strokeWidth="2" />
        <path d="M -20,20 l 10,15 l 10,-15" fill="white" stroke="#0284C7" strokeWidth="2" />
        <text x="0" y="5" fontSize="16" fontWeight="bold" fill="#0369A1" textAnchor="middle">„Ich komme heute.“</text>
        <text x="0" y="45" fontSize="10" fill="#0284C7" textAnchor="middle">Direkte Rede (Anführungszeichen)</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FDF2F8" rx="20" />
      <g transform="translate(120, 70)">
        <circle cx="-60" cy="0" r="20" fill="#FBCFE8" />
        <path d="M -35,0 L 35,0" stroke="#DB2777" strokeWidth="2" markerEnd="url(#arrow)" />
        <text x="0" y="-10" fontSize="12" fontWeight="bold" fill="#9D174D" textAnchor="middle">er komme</text>
        <circle cx="60" cy="0" r="20" fill="#F9A8D4" />
        <text x="0" y="35" fontSize="10" fill="#BE185D" textAnchor="middle">Indirekte Rede (Konjunktiv I)</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0FDF4" rx="20" />
      <g transform="translate(120, 70)">
        <text x="0" y="-30" fontSize="14" fontWeight="bold" fill="#166534" textAnchor="middle">Sagen-Variationen</text>
        <rect x="-80" y="-10" width="160" height="40" rx="4" fill="#BBF7D0" />
        <text x="0" y="10" fontSize="10" fill="#14532D" textAnchor="middle">behaupten, erklären, fragen,</text>
        <text x="0" y="22" fontSize="10" fill="#14532D" textAnchor="middle">erwidern, berichten</text>
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Redewiedergabe K8",
    // T1
    t1_title: "Die direkte Rede",
    t1_text: "Die direkte Rede gibt Worte genau so wieder, wie sie gesprochen wurden. Sie steht immer in Anführungszeichen. Ein Begleitsatz kann davor, danach vagy mittendrin stehen.",
    t1_b1: "Vorangestellt: Er sagt: „Ich lerne.“",
    t1_b2: "Nachgestellt: „Ich lerne“, sagt er.",
    t1_b3: "Eingeschoben: „Ich“, sagt er, „lerne gerade.“",
    t1_inst: "Bringe den Satz mit direkter Rede in die richtige Reihenfolge!",
    t1_h1: "Der Begleitsatz lautet 'Sie antwortete:'.",
    t1_h2: "Danach kommen die Anführungszeichen unten „...“",
    t1_w1: "Sie", t1_w2: "antwortete:", t1_w3: "„Das", t1_w4: "weiß", t1_w5: "ich", t1_w6: "nicht.“",
    t1_q: "Welches Satzzeichen steht nach einem vorangestellten Begleitsatz?",
    t1_q_a: "Doppelpunkt", t1_q_b: "Komma", t1_q_c: "Semikolon", t1_q_d: "Punkt",

    // T2
    t2_title: "Indirekte Rede (Konjunktiv I)",
    t2_text: "Die indirekte Rede nutzen wir, um Berichte sachlich und neutral zu gestalten. Das wichtigste Werkzeug ist der Konjunktiv I. Er zeigt: Ich zitiere nur, es ist nicht unbedingt meine Meinung.",
    t2_b1: "Bildung: Präsens-Stamm + Endung (-e, -est, -e...).",
    t2_b2: "er sei, sie habe, es gehe.",
    t2_b3: "Wichtig: Die 3. Person Singular (er/sie/es) ist die häufigste Form.",
    t2_inst: "Welche Konjunktiv I Form passt in die Lücke?",
    t2_h1: "Der Sprecher berichtet über eine Person (er).",
    t2_h2: "Das Verb 'kommen' wird im Konjunktiv I zu 'komme'.",
    t2_gap_sentence: "Er sagte, er {gap} morgen pünktlich.",
    t2_c1: "komme", t2_c2: "kommt", t2_c3: "käme",
    t2_q: "Was ist das Hauptmerkmal des Konjunktiv I gegenüber dem Indikativ?",
    t2_q_a: "Ein 'e' in der Endung (er komme)", t2_q_b: "Ein Umlaut (er käme)", t2_q_c: "Das Hilfsverb 'würde'", t2_q_d: "Es gibt keinen Unterschied",

    // T3
    t3_title: "Redebegleitende Verben",
    t3_text: "Anstatt immer nur 'sagen' zu benutzen, kannst du durch andere Verben die Art der Aussage genauer beschreiben. Das macht deinen Stil viel besser!",
    t3_b1: "behaupten: wenn etwas vielleicht nicht wahr ist.",
    t3_b2: "erwidern: als Antwort auf etwas.",
    t3_b3: "erläutern: wenn etwas erklärt wird.",
    t3_inst: "Welches Verb passt am besten zur Situation? Verbinde!",
    t3_h1: "Wenn man eine Frage beantwortet, 'erwidert' man etwas.",
    t3_h2: "Wenn man eine feste Meinung ohne Beweis nennt, 'behauptet' man es.",
    t3_l1: "etwas erklären", t3_r1: "erläutern",
    t3_l2: "eine Antwort geben", t3_r2: "erwidern",
    t3_l3: "fest sagen (ohne Beweis)", t3_r3: "behaupten",
    t3_l4: "offiziell mitteilen", t3_r4: "berichten",
    t3_q: "Welches Verb drückt einen Zweifel an der Richtigkeit aus?",
    t3_q_a: "behaupten", t3_q_b: "erklären", t3_q_c: "berichten", t3_q_d: "sagen",

    // T4
    t4_title: "Tempuswechsel & Ersatzformen",
    t4_text: "In der indirekten Rede bleiben die Zeiten meist gleich, aber es gibt Ausnahmen. Wenn der Konjunktiv I nicht vom Indikativ unterscheidbar ist, nutzt man den Konjunktiv II.",
    t4_b1: "Indikativ: sie gehen ➔ Konj I: sie gehen (identisch!)",
    t4_b2: "Ersatz: sie gingen (Konj II).",
    t4_b3: "Vergangenheit: Er sagt, er SEI GEKOMMEN (Perfekt Konj I).",
    t4_inst: "Muss hier ein Ersatz (Konjunktiv II) verwendet werden? Sortiere!",
    t4_h1: "Prüfe 'wir haben': Das sieht aus wie Präsens.",
    t4_h2: "'er habe' ist eindeutig Konjunktiv I.",
    t3_bucket_konj1: "Konjunktiv I (eindeutig)",
    t3_bucket_konj2: "Ersatz (Konjunktiv II)",
    t3_item_k1: "er gehe", t3_item_k2: "sie sei",
    t3_item_e1: "wir gehen", t3_item_e2: "sie haben",
    t4_q: "Welche Form nutzt man, wenn Konjunktiv I und Indikativ gleich klingen?",
    t4_q_a: "Konjunktiv II", t4_q_b: "Futur II", t4_q_c: "Imperativ", t4_q_d: "Passiv",

    // T5
    t5_title: "Mixed Quiz",
    t5_text: "Kombiniere alles! Von der direkten Rede über den Konjunktiv bis hin zur stilvollen Wortwahl.",
    t5_b1: "Konjunktiv I für Neutralität.",
    t5_b2: "Abwechslungsreiche Verben.",
    t5_b3: "Kommasetzung beachten.",
    t5_inst: "Markiere den Fehler in dieser indirekten Rede!",
    t5_h1: "Suche nach dem Verb am Ende.",
    t5_h2: "In der indirekten Rede nach 'dass' muss das Verb im Konjunktiv I stehen.",
    t5_w21: "Er", t5_w22: "erklärte,", t5_w23: "dass", t5_w24: "er", t5_w25: "heute", t5_w26: "keine", t5_w27: "Zeit", t5_w28: "hat.",
    t5_q: "Wie wandelt man „Ich bin müde“ am besten in die indirekte Rede um?",
    t5_q_a: "Er sagte, er sei müde.", t5_q_b: "Er sagte, ich bin müde.", t5_q_c: "Er sagte: er sei müde.", t5_q_d: "Er sagt, dass er ist müde.",
  },
  en: {
    explorer_title: "Reported Speech",
    t1_inst: "Put the direct speech sentence in the correct order!",
    t2_inst: "Which Konjunktiv I form fits in the gap?",
    t3_inst: "Which verb fits the situation best? Connect them!",
    t4_inst: "Must a substitute (Konjunktiv II) be used here? Sort them!",
    t5_inst: "Highlight the error in this reported speech!",
  },
  hu: {
    explorer_title: "Beszédvisszaadás",
    t1_inst: "Tedd az egyenes beszédű mondatot a helyes sorrendbe!",
    t2_inst: "Melyik Konjunktiv I alak illik az űrbe?",
    t3_inst: "Melyik ige illik legjobban a szituációhoz? Kösd össze!",
    t4_inst: "Kell ide pótforma (Konjunktiv II)? Válogasd szét!",
    t4_bucket_konj1: "Konjunktiv I (Egyértelmű)",
    t4_bucket_konj2: "Pótforma (Konj. II)",
    t5_inst: "Jelöld ki a hibát ebben a függő beszédű mondatban!",
  },
  ro: {
    explorer_title: "Redarea Vorbirii",
    t1_inst: "Așază propoziția cu vorbire directă în ordinea corectă!",
    t2_inst: "Ce formă de Konjunktiv I se potrivește în spațiu?",
    t3_inst: "Care verb se potrivește cel mai bine situației? Leagă-le!",
    t4_inst: "Trebuie folosit un înlocuitor (Konjunktiv II) aici? Sortează-le!",
    t5_inst: "Marchează eroarea din această vorbire indirectă!",
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
      words: ["t1_w1", "t1_w2", "t1_w3", "t1_w4", "t1_w5", "t1_w6"], // Sie antwortete: „Das weiß ich nicht.“
      correctOrder: [0, 1, 2, 3, 4, 5],
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
      choices: ["t2_c1", "t2_c2", "t2_c3"], // komme, kommt, käme
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
    svg: () => <Topic2Svg />,
    bulletKeys: ["t4_b1", "t4_b2", "t4_b3"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [
        { id: "k1", label: "t3_bucket_konj1" },
        { id: "k2", label: "t3_bucket_konj2" },
      ],
      items: [
        { text: "t3_item_k1", bucketId: "k1" },
        { text: "t3_item_e1", bucketId: "k2" },
        { text: "t3_item_k2", bucketId: "k1" },
        { text: "t3_item_e2", bucketId: "k2" },
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
      type: "highlight-text",
      tokens: ["t5_w21", "t5_w22", "t5_w23", "t5_w24", "t5_w25", "t5_w26", "t5_w27", "t5_w28"], // ... hat.
      correctIndices: [7], 
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
  icon: "🗣️",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const SpeechTransformExplorer = memo(function SpeechTransformExplorer({
  color = "#0284C7",
  onDone,
  lang = "de",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={8} explorerId="deutsch_k8_speech" color={color} lang={lang} onDone={onDone} />;
});

export default SpeechTransformExplorer;
