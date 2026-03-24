"use client";
// PassiveK5Explorer — Island i7: Das Passiv (The Passive Voice)
// Topics: 1) Aktiv vs Passiv 2) Vorgangspassiv (werden+Part.II) 3) Umwandlung 4) Passiv mit Modalverb 5) Gemischtes Quiz

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSTRATIONS ──────────────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0F9FF" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-60" y="-15" fontSize="24" textAnchor="middle">🧑‍🔧</text>
        <text x="-60" y="20" fontSize="12" fontWeight="bold" fill="#0369A1" textAnchor="middle">Aktiv</text>
        <text x="-60" y="35" fontSize="10" fill="#0284C7" textAnchor="middle">(Wer tut es?)</text>
        
        <path d="M -20,0 L 20,0" stroke="#38BDF8" strokeWidth="2" strokeDasharray="2 2" markerEnd="url(#arrow)" />
        
        <text x="60" y="-15" fontSize="24" textAnchor="middle">🚗</text>
        <text x="60" y="20" fontSize="12" fontWeight="bold" fill="#0369A1" textAnchor="middle">Passiv</text>
        <text x="60" y="35" fontSize="10" fill="#0284C7" textAnchor="middle">(Was passiert?)</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FDF2F8" rx="20" />
      <g transform="translate(120, 70)">
        <rect x="-80" y="-15" width="60" height="30" rx="4" fill="#FBCFE8" />
        <text x="-50" y="5" fontSize="12" fontWeight="bold" fill="#BE185D" textAnchor="middle">werden</text>
        
        <text x="0" y="5" fontSize="16" fontWeight="bold" fill="#9D174D" textAnchor="middle">+</text>
        
        <rect x="20" y="-15" width="70" height="30" rx="4" fill="#F9A8D4" />
        <text x="55" y="5" fontSize="12" fontWeight="bold" fill="#BE185D" textAnchor="middle">Partizip II</text>
        
        <text x="0" y="40" fontSize="12" fill="#9D174D" textAnchor="middle">Das Haus WIRD GEBAUT.</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0FDF4" rx="20" />
      <g transform="translate(120, 70)">
        <text x="0" y="-20" fontSize="12" fill="#15803D" textAnchor="middle">Aktiv: Er isst <tspan fill="#166534" fontWeight="bold">den Apfel</tspan>.</text>
        <path d="M 30,-15 Q 40,5 0,15" fill="none" stroke="#22C55E" strokeWidth="2" markerEnd="url(#arrow)" />
        <text x="0" y="30" fontSize="12" fill="#15803D" textAnchor="middle">Passiv: <tspan fill="#166534" fontWeight="bold">Der Apfel</tspan> wird gegessen.</text>
      </g>
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FFFBEB" rx="20" />
      <g transform="translate(120, 70)">
        <text x="0" y="-15" fontSize="14" fontWeight="bold" fill="#B45309" textAnchor="middle">Es <tspan fill="#D97706">MUSS</tspan> gemacht <tspan fill="#D97706">WERDEN</tspan>.</text>
        <path d="M -40,-10 L -40,15 L 45,15 L 45,-10" fill="none" stroke="#F59E0B" strokeWidth="2" strokeDasharray="2 2" />
        <text x="0" y="35" fontSize="10" fill="#B45309" textAnchor="middle">Modalverb (Pos. 2) ... werden (Ende)</text>
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="k5Grad7_5" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#047857" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#k5Grad7_5)" rx="20" />
      <g transform="translate(120, 70)">
        <text x="0" y="-10" fontSize="30" textAnchor="middle">🔄</text>
        <text x="0" y="30" fontSize="16" fontWeight="bold" fill="#047857" textAnchor="middle">Passiv-Mix</text>
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Das Passiv K5",

    // T1
    t1_title: "Aktiv vs. Passiv",
    t1_text: "Im Aktiv-Satz ist wichtig, WER etwas tut (Der Mechaniker repariert das Auto). Im Passiv-Satz ist wichtig, WAS passiert (Das Auto wird repariert). Der Täter ist unwichtig oder unbekannt.",
    t1_b1: "Aktiv: Betonung auf den Täter (Subjekt).",
    t1_b2: "Passiv: Betonung auf die Handlung.",
    t1_b3: "Das Passiv wird oft in den Nachrichten benutzt.",
    t1_inst: "Ist der Satz Aktiv oder Passiv? Sortiere!",
    t1_h1: "Sätze mit 'wird' + Partizip (ge-t) am Ende sind Passiv.",
    t1_h2: "Wenn jemand aktiv etwas tut (Er liest), ist es Aktiv.",
    t1_bucket_akt: "Aktiv 🧑‍🔧",
    t1_bucket_pas: "Passiv 🚗",
    t1_item_a1: "Er liest das Buch.", t1_item_a2: "Der Hund bellt.",
    t1_item_p1: "Das Buch wird gelesen.", t1_item_p2: "Das Auto wird gewaschen.",
    t1_q: "Was steht bei einem Passiv-Satz im Mittelpunkt?",
    t1_q_a: "Die Handlung (Was passiert?)", t1_q_b: "Der Täter (Wer tut es?)", t1_q_c: "Die Zeit (Wann passiert es?)", t1_q_d: "Der Ort (Wo passiert es?)",

    // T2
    t2_title: "Das Vorgangspassiv",
    t2_text: "Das Passiv wird aus zwei Teilen gebaut: Dem Hilfsverb 'werden' (an Position 2) und dem Partizip II (ganz am Ende).",
    t2_b1: "ich werde, du wirst, er/sie/es WIRD",
    t2_b2: "wir werden, ihr werdet, sie WERDEN",
    t2_b3: "Beispiel: Der Kuchen WIRD gebacken.",
    t2_inst: "Welche Form von 'werden' passt in die Lücke?",
    t2_h1: "Das Subjekt ist 'Der Kuchen' (er/es).",
    t2_h2: "Wir brauchen die Form für er/sie/es: 'wird'.",
    t2_gap_sentence: "Der leckere Kuchen {gap} gebacken.",
    t2_c1: "wird", t2_c2: "werden", t2_c3: "wirst",
    t2_q: "Welches Hilfsverb benutzt man, um das Vorgangspassiv zu bilden?",
    t2_q_a: "werden", t2_q_b: "haben", t2_q_c: "sein", t2_q_d: "können",

    // T3
    t3_title: "Aktiv in Passiv umwandeln",
    t3_text: "Wenn wir einen Satz vom Aktiv ins Passiv umwandeln, wird das Akkusativ-Objekt (Wen/Was?) des Aktivsatzes zum neuen Subjekt (Wer/Was?) im Passivsatz!",
    t3_b1: "Aktiv: Er isst DEN APFEL. (Akkusativ)",
    t3_b2: "Passiv: DER APFEL wird gegessen. (Nominativ)",
    t3_b3: "Den Täter kann man mit 'von + Dativ' hinzufügen (von ihm).",
    t3_inst: "Bringe den Passivsatz in die richtige Reihenfolge!",
    t3_h1: "Beginne mit dem neuen Subjekt: 'Der Apfel'.",
    t3_h2: "Dann das Hilfsverb 'wird', und am Ende das Partizip 'gegessen.'",
    t3_w1: "Der", t3_w2: "Apfel", t3_w3: "wird", t3_w4: "gegessen.",
    t3_q: "Was passiert mit dem Akkusativ-Objekt bei der Umwandlung ins Passiv?",
    t3_q_a: "Es wird zum neuen Subjekt.", t3_q_b: "Es bleibt ein Akkusativ-Objekt.", t3_q_c: "Es verschwindet immer.", t3_q_d: "Es wird zum Prädikat.",

    // T4
    t4_title: "Passiv mit Modalverb",
    t4_text: "Manchmal gibt es ein Modalverb (müssen, können, sollen) im Passiv. Das Modalverb steht dann an Position 2. Das Partizip II UND 'werden' rutschen ganz ans Ende!",
    t4_b1: "Normal: Das Haus wird gebaut.",
    t4_b2: "Mit Modalverb: Das Haus MUSS gebaut WERDEN.",
    t4_b3: "Modalverb ➔ Partizip II ➔ werden (Infinitiv)",
    t4_inst: "Welche zwei Verben bilden die Satzklammer? Markiere sie!",
    t4_h1: "Suche das konjugierte Modalverb auf Position 2 und das 'werden' am Ende.",
    t4_h2: "Markiere 'muss' und 'werden'.",
    t4_w1: "Das", t4_w2: "Auto", t4_w3: "muss", t4_w4: "schnell", t4_w5: "repariert", t4_w6: "werden.",
    t4_q: "Wo steht das Wort 'werden', wenn ein Modalverb im Passivsatz ist?",
    t4_q_a: "Ganz am Ende (als Infinitiv)", t4_q_b: "An Position 2", t4_q_c: "Direkt nach dem Subjekt", t4_q_d: "Es gibt kein 'werden'",

    // T5
    t5_title: "Gemischtes Quiz",
    t5_text: "Zeig, dass du Aktiv und Passiv sicher umwandeln kannst. Finde das richtige Passiv-Paar zum Aktiv-Satz!",
    t5_b1: "Aktiv: Wir putzen das Auto.",
    t5_b2: "Passiv: Das Auto wird geputzt.",
    t5_b3: "Täter ist egal ➔ Passiv.",
    t5_inst: "Verbinde den Aktiv-Satz mit dem passenden Passiv-Satz!",
    t5_h1: "Wenn er den Kuchen backt, WIRD der Kuchen GEBACKEN.",
    t5_h2: "Finde das passende Nomen, das zum Subjekt wird.",
    t5_l1: "Er backt den Kuchen.", t5_r1: "Der Kuchen wird gebacken.",
    t5_l2: "Sie liest das Buch.", t5_r2: "Das Buch wird gelesen.",
    t5_l3: "Wir putzen das Auto.", t5_r3: "Das Auto wird geputzt.",
    t5_q: "Welcher dieser Sätze ist ein Passivsatz mit Modalverb?",
    t5_q_a: "Die Hausaufgabe muss gemacht werden.", t5_q_b: "Er muss die Hausaufgabe machen.", t5_q_c: "Die Hausaufgabe wird gemacht.", t5_q_d: "Er macht die Hausaufgabe.",
  },
  en: {
    explorer_title: "The Passive Voice",
    t1_inst: "Is the sentence Active or Passive? Sort!",
    t1_h1: "Sentences with 'wird' + Participle at the end are Passive.",
    t1_h2: "If someone is actively doing something (Er liest), it is Active.",
    t1_bucket_akt: "Active",
    t1_bucket_pas: "Passive",
    t2_inst: "Which form of 'werden' fits in the gap?",
    t2_h1: "The subject is 'Der Kuchen' (he/it).",
    t2_h2: "We need the form for he/she/it: 'wird'.",
    t3_inst: "Put the passive sentence in the correct order!",
    t3_h1: "Start with the new subject: 'Der Apfel'.",
    t3_h2: "Then the auxiliary verb 'wird', and at the end 'gegessen.'",
    t4_inst: "Which two verbs form the sentence bracket? Highlight them!",
    t4_h1: "Look for the conjugated modal verb at position 2 and 'werden' at the end.",
    t4_h2: "Highlight 'muss' and 'werden'.",
    t5_inst: "Connect the Active sentence with the matching Passive sentence!",
    t5_h1: "If he bakes the cake, the cake IS BAKED (wird gebacken).",
    t5_h2: "Find the matching noun that becomes the subject.",
  },
  hu: {
    explorer_title: "Szenvedő szerkezet (Passzív)",
    t1_inst: "A mondat Aktív vagy Passzív? Válogasd szét!",
    t1_h1: "A 'wird' + Partizip végű mondatok Passzívak.",
    t1_h2: "Ha valaki aktívan csinál valamit (Er liest), az Aktív.",
    t1_bucket_akt: "Aktív",
    t1_bucket_pas: "Passzív",
    t2_inst: "A 'werden' melyik alakja illik az űrbe?",
    t2_h1: "Az alany a 'Der Kuchen' (ő/az).",
    t2_h2: "Az E/3 alak kell: 'wird'.",
    t3_inst: "Tedd a passzív mondatot a helyes sorrendbe!",
    t3_h1: "Kezdd az új alannyal: 'Der Apfel'.",
    t3_h2: "Utána a 'wird' segédige, a végén pedig a 'gegessen.'",
    t4_inst: "Melyik két ige alkotja a mondatkeretet? Jelöld ki őket!",
    t4_h1: "Keresd a ragozott módbeli segédigét a 2. helyen és a 'werden'-t a végén.",
    t4_h2: "Jelöld ki a 'muss' és 'werden' szavakat.",
    t5_inst: "Kösd össze az Aktív mondatot a megfelelő Passzív mondattal!",
    t5_h1: "Ha ő süti a tortát, akkor a torta MEG VAN SÜTVE (wird gebacken).",
    t5_h2: "Keresd meg a megfelelő főnevet, amiből alany lesz.",
  },
  ro: {
    explorer_title: "Diateza Pasivă",
    t1_inst: "Propoziția este Activă sau Pasivă? Sortează!",
    t1_h1: "Propozițiile cu 'wird' + Participiu la sfârșit sunt Pasive.",
    t1_h2: "Dacă cineva face ceva activ (Er liest), este Activă.",
    t1_bucket_akt: "Activă",
    t1_bucket_pas: "Pasivă",
    t2_inst: "Ce formă a lui 'werden' se potrivește în spațiu?",
    t2_h1: "Subiectul este 'Der Kuchen' (el).",
    t2_h2: "Avem nevoie de forma pentru el/ea/el: 'wird'.",
    t3_inst: "Așază propoziția pasivă în ordinea corectă!",
    t3_h1: "Începe cu noul subiect: 'Der Apfel'.",
    t3_h2: "Apoi auxiliarul 'wird', iar la final 'gegessen.'",
    t4_inst: "Care două verbe formează cleștele propozițional? Marchează-le!",
    t4_h1: "Caută verbul modal conjugat pe poziția 2 și 'werden' la final.",
    t4_h2: "Marchează 'muss' și 'werden'.",
    t5_inst: "Leagă propoziția Activă de propoziția Pasivă corespunzătoare!",
    t5_h1: "Dacă el coace prăjitura, prăjitura ESTE COAPTĂ (wird gebacken).",
    t5_h2: "Găsește substantivul potrivit care devine subiect.",
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
      choices: ["t2_c1", "t2_c2", "t2_c3"], // wird, werden, wirst
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
      type: "word-order",
      words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4"], // Der Apfel wird gegessen.
      correctOrder: [0, 1, 2, 3],
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
      type: "highlight-text",
      tokens: ["t4_w1", "t4_w2", "t4_w3", "t4_w4", "t4_w5", "t4_w6"], // Das Auto muss schnell repariert werden.
      correctIndices: [2, 5], // muss, werden.
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
      type: "match-pairs",
      pairs: [
        { left: "t5_l1", right: "t5_r1" }, // backt Kuchen -> Kuchen wird gebacken
        { left: "t5_l2", right: "t5_r2" }, // liest Buch -> Buch wird gelesen
        { left: "t5_l3", right: "t5_r3" }, // putzen Auto -> Auto wird geputzt
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
  icon: "🔄",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const PassiveK5Explorer = memo(function PassiveK5Explorer({
  color = "#10B981",
  onDone,
  lang = "de",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={5} explorerId="deutsch_k5_passive" color={color} lang={lang} onDone={onDone} />;
});

export default PassiveK5Explorer;
