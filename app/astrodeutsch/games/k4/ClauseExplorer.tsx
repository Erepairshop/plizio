"use client";
// ClauseExplorer — Island i6: Satzarten & Nebensätze (Clauses & Subordinate Clauses)
// Topics: 1) Satzarten 2) Hauptsatz vs. Nebensatz 3) Bindewörter (weil/dass/wenn) 4) Verb am Ende 5) Gemischtes Quiz

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSTRATIONS ──────────────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#EEF2FF" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-60" y="-10" fontSize="24" fontWeight="bold" fill="#312E81" textAnchor="middle">.</text>
        <text x="-60" y="25" fontSize="10" fill="#4338CA" textAnchor="middle">Aussage</text>
        
        <text x="0" y="-10" fontSize="24" fontWeight="bold" fill="#312E81" textAnchor="middle">?</text>
        <text x="0" y="25" fontSize="10" fill="#4338CA" textAnchor="middle">Frage</text>
        
        <text x="60" y="-10" fontSize="24" fontWeight="bold" fill="#312E81" textAnchor="middle">!</text>
        <text x="60" y="25" fontSize="10" fill="#4338CA" textAnchor="middle">Aufforderung</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0FDF4" rx="20" />
      <g transform="translate(120, 70)">
        <rect x="-90" y="-15" width="80" height="30" rx="4" fill="#86EFAC" />
        <text x="-50" y="5" fontSize="12" fontWeight="bold" fill="#14532D" textAnchor="middle">Hauptsatz</text>
        
        <circle cx="-5" cy="0" r="4" fill="#16A34A" />
        <text x="-5" y="15" fontSize="14" fontWeight="bold" fill="#166534" textAnchor="middle">,</text>
        
        <rect x="5" y="-15" width="80" height="30" rx="4" fill="#BBF7D0" stroke="#22C55E" strokeDasharray="2 2" />
        <text x="45" y="5" fontSize="12" fontWeight="bold" fill="#14532D" textAnchor="middle">Nebensatz</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FFF7ED" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-50" y="-5" fontSize="16" fontWeight="bold" fill="#C2410C" textAnchor="middle">weil</text>
        <text x="0" y="-5" fontSize="16" fontWeight="bold" fill="#C2410C" textAnchor="middle">dass</text>
        <text x="50" y="-5" fontSize="16" fontWeight="bold" fill="#C2410C" textAnchor="middle">wenn</text>
        <path d="M -70,10 L 70,10" stroke="#FB923C" strokeWidth="2" strokeDasharray="4 2" />
        <text x="0" y="30" fontSize="12" fill="#9A3412" textAnchor="middle">Einleitewörter (Konjunktionen)</text>
      </g>
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FEF2F2" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-60" y="0" fontSize="14" fill="#B91C1C" textAnchor="middle">..., weil er</text>
        <rect x="-20" y="-15" width="50" height="20" fill="#FECACA" rx="4" />
        <text x="5" y="0" fontSize="14" fill="#B91C1C" textAnchor="middle">heute</text>
        
        <rect x="40" y="-15" width="50" height="20" fill="#F87171" rx="4" />
        <text x="65" y="0" fontSize="14" fontWeight="bold" fill="white" textAnchor="middle">kommt.</text>
        
        <path d="M 0,20 L 65,20 L 65,10" fill="none" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrow)" />
        <text x="32" y="35" fontSize="10" fill="#991B1B" textAnchor="middle">Verb ans Ende!</text>
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="k4Grad6_5" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#k4Grad6_5)" rx="20" />
      <g transform="translate(120, 70)">
        <text x="0" y="-10" fontSize="30" textAnchor="middle">🔗</text>
        <text x="0" y="25" fontSize="16" fontWeight="bold" fill="#1D4ED8" textAnchor="middle">Satz-Puzzle</text>
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Satzarten & Nebensätze",

    // T1
    t1_title: "Die drei Satzarten",
    t1_text: "Wir wiederholen kurz: Ein Aussagesatz endet mit einem Punkt (.). Ein Fragesatz endet mit einem Fragezeichen (?). Ein Aufforderungssatz (Befehl) endet mit einem Ausrufezeichen (!).",
    t1_b1: "Aussage: Der Hund bellt.",
    t1_b2: "Frage: Bellt der Hund?",
    t1_b3: "Befehl: Komm her!",
    t1_inst: "Welches Satzzeichen gehört zu welchem Satz? Verbinde sie!",
    t1_h1: "Ein Befehl sagt dir, was du tun sollst (!).",
    t1_h2: "Eine Frage möchte etwas wissen (?).",
    t1_l1: "Ich gehe in die Schule", t1_r1: ".",
    t1_l2: "Wie spät ist es", t1_r2: "?",
    t1_l3: "Hör auf damit", t1_r3: "!",
    t1_q: "Welches Zeichen steht am Ende eines Fragesatzes?",
    t1_q_a: "Fragezeichen (?)", t1_q_b: "Punkt (.)", t1_q_c: "Ausrufezeichen (!)", t1_q_d: "Komma (,)",

    // T2
    t2_title: "Hauptsatz vs. Nebensatz",
    t2_text: "Ein Hauptsatz kann ganz alleine stehen. Er macht Sinn. Ein Nebensatz kann NICHT alleine stehen. Er braucht einen Hauptsatz und ist mit einem Komma angehängt.",
    t2_b1: "Hauptsatz: Ich bleibe zu Hause.",
    t2_b2: "Nebensatz: ..., weil es regnet.",
    t2_b3: "Hauptsatz und Nebensatz werden durch ein Komma getrennt.",
    t2_inst: "Ist es ein Hauptsatz oder ein Nebensatz? Sortiere sie!",
    t2_h1: "Kann der Satz alleine stehen und Sinn machen? Dann ist es ein Hauptsatz.",
    t2_h2: "Beginnt er mit 'weil' oder 'dass'? Dann ist es ein Nebensatz.",
    t2_bucket_haupt: "Hauptsatz",
    t2_bucket_neben: "Nebensatz",
    t2_item_h1: "Ich esse Pizza.", t2_item_h2: "Die Sonne scheint.",
    t2_item_n1: "... weil ich Hunger habe.", t2_item_n2: "... dass er kommt.",
    t2_q: "Kann ein Nebensatz (z.B. 'weil es regnet') alleine als ganzer Satz stehen?",
    t2_q_a: "Nein, er braucht einen Hauptsatz.", t2_q_b: "Ja, immer.", t2_q_c: "Nur am Anfang eines Textes.", t2_q_d: "Ja, aber nur mit Fragezeichen.",

    // T3
    t3_title: "Wichtige Bindewörter",
    t3_text: "Nebensätze beginnen meist mit einem Bindewort (Konjunktion). Die wichtigsten sind: 'weil' (Grund), 'dass' (Ergänzung) und 'wenn' (Bedingung/Zeit).",
    t3_b1: "weil: Ich lache, weil ich froh bin.",
    t3_b2: "dass: Ich weiß, dass du kommst.",
    t3_b3: "wenn: Ich spiele, wenn ich Zeit habe.",
    t3_inst: "Welches Bindewort passt in die Lücke?",
    t3_h1: "Es geht um einen Grund (Why?).",
    t3_h2: "Das Wort für den Grund ist 'weil'.",
    t3_gap_sentence: "Ich ziehe eine Jacke an, {gap} mir kalt ist.",
    t3_c1: "weil", t3_c2: "dass", t3_c3: "wenn",
    t3_q: "Welches Bindewort gibt eine Bedingung an (z.B. ___ es regnet, bleibe ich hier)?",
    t3_q_a: "wenn", t3_q_b: "weil", t3_q_c: "dass", t3_q_d: "oder",

    // T4
    t4_title: "Das Verb am Ende",
    t4_text: "Die wichtigste Regel für den Nebensatz: Das ragozott Verb (das Prädikat) steht im Nebensatz IMMER GANZ AM ENDE!",
    t4_b1: "Hauptsatz (Verb auf 2): Ich BIN müde.",
    t4_b2: "Nebensatz (Verb am Ende): ..., weil ich müde BIN.",
    t4_b3: "Vergiss das Komma vor dem Bindewort nicht!",
    t4_inst: "Bringe den Nebensatz in die richtige Reihenfolge!",
    t4_h1: "Der Nebensatz beginnt mit dem Bindewort 'dass'.",
    t4_h2: "Das Verb 'kommst.' muss ganz ans Ende.",
    t4_w1: "dass", t4_w2: "du", t4_w3: "heute", t4_w4: "kommst.",
    t4_q: "Wo steht das konjugierte Verb in einem Nebensatz (z.B. mit 'weil')?",
    t4_q_a: "Ganz am Ende", t4_q_b: "An Position 2", t4_q_c: "Ganz am Anfang", t4_q_d: "Vor dem Komma",

    // T5
    t5_title: "Gemischtes Quiz",
    t5_text: "Jetzt verbinden wir Hauptsatz und Nebensatz! Denke an das Komma, das Bindewort und daran, dass das Verb im Nebensatz ans Ende rutscht.",
    t5_b1: "Hauptsatz + , + Bindewort + ... + Verb.",
    t5_b2: "Beispiel: Ich sehe, dass der Hund schläft.",
    t5_b3: "Achte auf die Satzstellung!",
    t5_inst: "Markiere das Verb, das am Ende des Nebensatzes steht!",
    t5_h1: "Suche das konjugierte Verb (Prädikat) im zweiten Teil des Satzes.",
    t5_h2: "Das Verb am Ende ist 'scheint'.",
    t5_w1: "Ich", t5_w2: "freue", t5_w3: "mich,", t5_w4: "weil", t5_w5: "die", t5_w6: "Sonne", t5_w7: "scheint.",
    t5_q: "Ist dieser Satz richtig? 'Ich komme nicht, weil ich habe keine Zeit.'",
    t5_q_a: "Falsch (Das Verb muss ans Ende: ... weil ich keine Zeit habe.)", t5_q_b: "Richtig", t5_q_c: "Falsch (Es fehlt ein Fragezeichen)", t5_q_d: "Falsch (Das Komma ist falsch)",
  },
  en: {
    explorer_title: "Clauses & Sentences",
    t1_inst: "Which punctuation mark belongs to which sentence? Match them!",
    t1_h1: "A command tells you what to do (!).",
    t1_h2: "A question wants to know something (?).",
    t2_inst: "Is it a main clause (Hauptsatz) or a subordinate clause (Nebensatz)? Sort them!",
    t2_h1: "Can the sentence stand alone and make sense? Then it's a main clause.",
    t2_h2: "Does it start with 'weil' or 'dass'? Then it's a subordinate clause.",
    t2_bucket_haupt: "Main Clause",
    t2_bucket_neben: "Subordinate Clause",
    t3_inst: "Which conjunction fits in the gap?",
    t3_h1: "It is about a reason (Why?).",
    t3_h2: "The word for a reason is 'weil' (because).",
    t4_inst: "Put the subordinate clause in the correct order!",
    t4_h1: "The clause starts with the conjunction 'dass'.",
    t4_h2: "The verb 'kommst.' must go to the very end.",
    t5_inst: "Highlight the verb that stands at the end of the subordinate clause!",
    t5_h1: "Look for the conjugated verb (predicate) in the second part of the sentence.",
    t5_h2: "The verb at the end is 'scheint'.",
  },
  hu: {
    explorer_title: "Mondatok és Mellékmondatok",
    t1_inst: "Melyik írásjel melyik mondathoz tartozik? Kösd össze őket!",
    t1_h1: "A felszólítás megmondja, mit csinálj (!).",
    t1_h2: "A kérdés tudni akar valamit (?).",
    t2_inst: "Ez egy főmondat (Hauptsatz) vagy mellékmondat (Nebensatz)? Válogasd szét őket!",
    t2_h1: "Megállja a helyét önmagában? Akkor főmondat.",
    t2_h2: "'weil'-lel vagy 'dass'-szal kezdődik? Akkor mellékmondat.",
    t2_bucket_haupt: "Főmondat",
    t2_bucket_neben: "Mellékmondat",
    t3_inst: "Melyik kötőszó illik az űrbe?",
    t3_h1: "Egy okról van szó (Miért?).",
    t3_h2: "Az okot kifejező szó a 'weil' (mert).",
    t4_inst: "Tedd a mellékmondatot a helyes sorrendbe!",
    t4_h1: "A mellékmondat a 'dass' kötőszóval kezdődik.",
    t4_h2: "A 'kommst.' igének a legvégére kell kerülnie.",
    t5_inst: "Jelöld ki azt az igét, ami a mellékmondat végén áll!",
    t5_h1: "Keresd a ragozott igét (állítmányt) a mondat második felében.",
    t5_h2: "A mondatvégi ige a 'scheint'.",
  },
  ro: {
    explorer_title: "Propoziții principale și secundare",
    t1_inst: "Ce semn de punctuație aparține cărei propoziții? Leagă-le!",
    t1_h1: "O poruncă îți spune ce să faci (!).",
    t1_h2: "O întrebare vrea să afle ceva (?).",
    t2_inst: "Este o propoziție principală (Hauptsatz) sau secundară (Nebensatz)? Sortează-le!",
    t2_h1: "Poate propoziția să stea singură și să aibă sens? Atunci e principală.",
    t2_h2: "Începe cu 'weil' sau 'dass'? Atunci e secundară.",
    t2_bucket_haupt: "Propoziție principală",
    t2_bucket_neben: "Propoziție secundară",
    t3_inst: "Ce conjuncție se potrivește în spațiu?",
    t3_h1: "Este vorba despre un motiv (De ce?).",
    t3_h2: "Cuvântul pentru motiv este 'weil' (deoarece).",
    t4_inst: "Așază propoziția secundară în ordinea corectă!",
    t4_h1: "Propoziția secundară începe cu conjuncția 'dass'.",
    t4_h2: "Verbul 'kommst.' trebuie să meargă la final.",
    t5_inst: "Marchează verbul care stă la sfârșitul propoziției secundare!",
    t5_h1: "Caută verbul conjugat (predicatul) în a doua parte a propoziției.",
    t5_h2: "Verbul de la sfârșit este 'scheint'.",
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
      type: "match-pairs",
      pairs: [
        { left: "t1_l1", right: "t1_r1" }, // Aussage -> .
        { left: "t1_l2", right: "t1_r2" }, // Frage -> ?
        { left: "t1_l3", right: "t1_r3" }, // Befehl -> !
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
      type: "drag-to-bucket",
      buckets: [
        { id: "haupt", label: "t2_bucket_haupt" },
        { id: "neben", label: "t2_bucket_neben" },
      ],
      items: [
        { text: "t2_item_h1", bucketId: "haupt" },
        { text: "t2_item_n1", bucketId: "neben" },
        { text: "t2_item_h2", bucketId: "haupt" },
        { text: "t2_item_n2", bucketId: "neben" },
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
      type: "gap-fill",
      sentence: "t3_gap_sentence",
      choices: ["t3_c1", "t3_c2", "t3_c3"], // weil, dass, wenn
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
    svg: () => <Topic4Svg />,
    bulletKeys: ["t4_b1", "t4_b2", "t4_b3"],
    interactive: {
      type: "word-order",
      words: ["t4_w1", "t4_w2", "t4_w3", "t4_w4"], // dass du heute kommst.
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
    svg: () => <Topic5Svg />,
    bulletKeys: ["t5_b1", "t5_b2", "t5_b3"],
    interactive: {
      type: "highlight-text",
      tokens: ["t5_w1", "t5_w2", "t5_w3", "t5_w4", "t5_w5", "t5_w6", "t5_w7"], // Ich freue mich, weil die Sonne scheint.
      correctIndices: [6], // scheint.
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

const ClauseExplorer = memo(function ClauseExplorer({
  color = "#4F46E5",
  onDone,
  lang = "de",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={4} explorerId="deutsch_k4_clause" color={color} lang={lang} onDone={onDone} />;
});

export default ClauseExplorer;
