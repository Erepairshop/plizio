"use client";
// KonzessivFinalExplorer — Island i6: Konzessiv-, Final- & Konsekutivsätze (K7)
// Topics: 1) obwohl/obgleich 2) damit vs. um...zu 3) trotzdem vs. obwohl 4) sodass 5) Mixed Quiz

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSTRATIONS ──────────────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FFF1F2" rx="20" />
      <g transform="translate(120, 70)">
        <text x="0" y="-30" fontSize="16" fontWeight="bold" fill="#9F1239" textAnchor="middle">Gegengrund</text>
        <rect x="-80" y="-10" width="160" height="40" rx="8" fill="#FDA4AF" stroke="#E11D48" strokeWidth="2" />
        <text x="0" y="15" fontSize="18" fontWeight="black" fill="#9F1239" textAnchor="middle">OBWOHL</text>
        <path d="M -90,0 L -70,0 M 70,0 L 90,0" stroke="#E11D48" strokeWidth="2" />
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0F9FF" rx="20" />
      <g transform="translate(120, 70)">
        <text x="0" y="-35" fontSize="16" fontWeight="bold" fill="#0369A1" textAnchor="middle">Absicht / Ziel</text>
        <circle cx="60" cy="0" r="20" fill="none" stroke="#0EA5E9" strokeWidth="2" />
        <circle cx="60" cy="0" r="5" fill="#0EA5E9" />
        <path d="M -60,0 L 30,0" stroke="#0284C7" strokeWidth="2" markerEnd="url(#arrow)" />
        <text x="-30" y="25" fontSize="12" fontWeight="bold" fill="#0369A1" textAnchor="middle">damit / um...zu</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0FDF4" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-50" y="-10" fontSize="12" fontWeight="bold" fill="#166534" textAnchor="middle">obwohl</text>
        <text x="-50" y="10" fontSize="10" fill="#15803D" textAnchor="middle">Verb am Ende</text>
        <text x="0" y="0" fontSize="14" fill="#22C55E" textAnchor="middle">vs</text>
        <text x="55" y="-10" fontSize="12" fontWeight="bold" fill="#166534" textAnchor="middle">trotzdem</text>
        <text x="55" y="10" fontSize="10" fill="#15803D" textAnchor="middle">Verb auf Pos. 2</text>
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Gegensätze & Ziele K7",
    // T1
    t1_title: "Konzessiv: obwohl / obgleich",
    t1_text: "Konzessivsätze nennen einen Gegengrund. Etwas passiert, obwohl etwas anderes dagegen spricht. Sie leiten Nebensätze ein (Verb am Ende).",
    t1_b1: "Beispiel: Ich gehe spazieren, OBWOHL es REGNET.",
    t1_b2: "obgleich ist formeller als obwohl.",
    t1_b3: "Achtung: Der Hauptsatz hat oft ein 'trotzdem' im Sinn.",
    t1_inst: "Welches Wort passt, um einen Gegengrund zu nennen?",
    t1_h1: "Es regnet, de l'autre côté er geht raus.",
    t1_h2: "Wir brauchen 'obwohl'.",
    t1_gap_sentence: "Er ist fit, {gap} er wenig geschlafen hat.",
    t1_c1: "obwohl", t1_c2: "weil", t1_c3: "damit",
    t1_q: "Wo steht das konjugierte Verb in einem Satz mit 'obwohl'?",
    t1_q_a: "An der letzten Stelle", t1_q_b: "An der zweiten Stelle", t1_q_c: "Nach dem Subjekt", t1_q_d: "Ganz am Anfang",

    // T2
    t2_title: "Final: damit vs. um...zu",
    t2_text: "Finalsätze geben eine Absicht oder ein Ziel an. 'um...zu' nutzt man bei gleichem Subjekt. 'damit' nutzt man, wenn die Subjekte unterschiedlich sind.",
    t2_b1: "um...zu: ICH lerne, UM (ich) gute Noten ZU bekommen.",
    t2_b2: "damit: ICH lerne, DAMIT MEINE ELTERN stolz sind.",
    t2_b3: "Beide antworten auf die Frage: Wozu? Zu welchem Zweck?",
    t2_inst: "Brauchen wir 'damit' oder 'um...zu'? Sortiere!",
    t2_h1: "Wenn ein neues Subjekt (z.B. 'du', 'er', 'die Leute') kommt, nimm 'damit'.",
    t2_h2: "Bei einer Infinitiv-Konstruktion ohne neues Subjekt nimm 'um...zu'.",
    t2_bucket_um: "um...zu (gleiches Subjekt)",
    t2_bucket_da: "damit (verschiedene Subjekte)",
    t2_item_u1: "... um fit zu bleiben.", t2_item_u2: "... um Geld zu sparen.",
    t2_item_d1: "... damit du fit bleibst.", t2_item_d2: "... damit das Auto fährt.",
    t2_q: "Wann darf man 'um...zu' NICHT verwenden?",
    t2_q_a: "Wenn die Subjekte im Haupt- und Nebensatz verschieden sind", t2_q_b: "Wenn das Verb am Ende steht", t2_q_c: "In der Vergangenheit", t2_q_d: "Bei Modalverben",

    // T3
    t3_title: "trotzdem vs. obwohl",
    t3_text: "Beide Wörter drücken einen Gegensatz aus, aber der Satzbau ist anders! 'obwohl' leitet einen Nebensatz ein (Verb am Ende). 'trotzdem' ist ein Adverb (Verb auf Position 2).",
    t3_b1: "obwohl: OBWOHL es regnet, GEHT er raus.",
    t3_b2: "trotzdem: Es regnet. TROTZDEM GEHT er raus.",
    t3_b3: "Tipp: 'trotzdem' steht oft nach dem Punkt oder Komma direkt vor dem Verb.",
    t3_inst: "Welches Wort verlangt das Verb direkt danach (Position 2)?",
    t3_h1: "Suche das Wort, das kein Nebensatz-Einleiter ist.",
    t3_h2: "Das Wort ist 'trotzdem'.",
    t3_gap_sentence2: "Es war kalt. {gap} gingen wir schwimmen.",
    t3_c1: "Trotzdem", t3_c2: "Obwohl", t3_c3: "Weil",
    t4_q: "Welcher Satz ist korrekt gebaut?",
    t4_q_a: "Es regnet, trotzdem gehe ich raus.", t4_q_b: "Es regnet, trotzdem ich gehe raus.", t4_q_c: "Obwohl es regnet, ich gehe raus.", t4_q_d: "Ich gehe raus trotzdem es regnet.",

    // T4
    t4_title: "Konsekutiv: sodass",
    t4_text: "Konsekutivsätze geben eine Folge oder eine Wirkung an. Das wichtigste Bindewort ist 'sodass' (oder 'so ..., dass').",
    t4_b1: "Folge: Es hat geschneit, SODASS die Straßen glatt sind.",
    t4_b2: "Trennung: Er schrie SO laut, DASS alle ihn hörten.",
    t4_b3: "Es ist ein Nebensatz (Verb am Ende).",
    t4_inst: "Bringe den Folgesatz in die richtige Reihenfolge!",
    t4_h1: "Kezdd a főmondattal: 'Es regnete stark,'",
    t4_h2: "Aztán a kötőszó 'sodass' és a végén az ige 'wurde.'",
    t4_w1: "Es", t4_w2: "regnete,", t4_w3: "sodass", t4_w4: "der", t4_w5: "Keller", t4_w6: "nass", t4_w7: "wurde.",
    t4_q2: "Was drückt ein Konsekutivsatz aus?",
    t4_q2_a: "Eine Folge oder ein Ergebnis", t4_q2_b: "Einen Grund", t4_q2_c: "Eine Bedingung", t4_q2_d: "Einen Ort",

    // T5
    t5_title: "Mixed Quiz",
    t5_text: "Bist du ein Logik-Profi? Teste dein Wissen über Gegengründe (obwohl), Absichten (damit) und Folgen (sodass).",
    t5_b1: "obwohl/sodass = Verb am Ende.",
    t5_b2: "trotzdem = Verb auf Pos. 2.",
    t5_b3: "um...zu = Infinitiv am Ende.",
    t5_inst: "Verbinde die logischen Paare!",
    t5_h1: "Egy célhoz 'um...zu' oder 'damit' kell.",
    t5_h2: "Egy ellentéthez 'obwohl' oder 'trotzdem'.",
    t5_l1: "Gegengrund", t5_r1: "obwohl / trotzdem",
    t5_l2: "Absicht / Ziel", t5_r2: "damit / um...zu",
    t5_l3: "Folge / Wirkung", t5_r3: "sodass",
    t5_l4: "Grund", t5_r4: "weil / denn",
    t5_q: "Welches Wort passt hier: 'Ich beeile mich, ___ ich pünktlich bin.'?",
    t5_q_a: "damit", t5_q_b: "um", t5_q_c: "trotzdem", t5_q_d: "obwohl",
  },
  en: {
    explorer_title: "Opposites & Goals",
    t1_inst: "Which word fits to name a counter-reason?",
    t2_inst: "Do we need 'damit' or 'um...zu'? Sort them!",
    t3_inst: "Which word requires the verb immediately after (Position 2)?",
    t4_inst: "Put the consecutive sentence in the correct order!",
    t5_inst: "Connect the logical pairs!",
  },
  hu: {
    explorer_title: "Ellentétek és Célok",
    t1_inst: "Melyik szó illik ide ellentmondás kifejezésére?",
    t2_inst: "A 'damit' vagy az 'um...zu' kell ide? Válogasd szét!",
    t2_bucket_um: "um...zu (azonos alany)",
    t2_bucket_da: "damit (különböző alanyok)",
    t3_inst: "Melyik szó után áll közvetlenül az ige (2. hely)?",
    t4_inst: "Tedd a következményes mondatot a helyes sorrendbe!",
    t5_inst: "Kösd össze a logikai párokat!",
    t5_l1: "Ellentét", t5_l2: "Cél", t5_l3: "Következmény", t5_l4: "Ok",
  },
  ro: {
    explorer_title: "Opoziții și Scopuri",
    t1_inst: "Care cuvânt se potrivește pentru a numi un motiv contrar?",
    t2_inst: "Avem nevoie de 'damit' sau 'um...zu'? Sortează-le!",
    t3_inst: "Care cuvânt necesită verbul imediat după (Poziția 2)?",
    t4_inst: "Așază propoziția consecutivă în ordinea corectă!",
    t5_inst: "Conectează perechile logice!",
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
        { id: "um", label: "t2_bucket_um" },
        { id: "da", label: "t2_bucket_da" },
      ],
      items: [
        { text: "t2_item_u1", bucketId: "um" },
        { text: "t2_item_d1", bucketId: "da" },
        { text: "t2_item_u2", bucketId: "um" },
        { text: "t2_item_d2", bucketId: "da" },
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
      sentence: "t3_gap_sentence2",
      choices: ["t3_c1", "t3_c2", "t3_c3"],
      correctIndex: 0,
      instruction: "t3_inst",
      hint1: "t3_h1",
      hint2: "t3_h2",
    },
    quiz: {
      question: "t4_q",
      choices: ["t4_q_a", "t4_q_b", "t4_q_c", "t4_q_d"],
      answer: "t4_q_a",
    },
  },
  {
    infoTitle: "t4_title",
    infoText: "t4_text",
    svg: () => <Topic1Svg />,
    bulletKeys: ["t4_b1", "t4_b2", "t4_b3"],
    interactive: {
      type: "word-order",
      words: ["t4_w1", "t4_w2", "t4_w3", "t4_w4", "t4_w5", "t4_w6", "t4_w7"],
      correctOrder: [0, 1, 2, 3, 4, 5, 6],
      instruction: "t4_inst",
      hint1: "t4_h1",
      hint2: "t4_h2",
    },
    quiz: {
      question: "t4_q2",
      choices: ["t4_q2_a", "t4_q2_b", "t4_q2_c", "t4_q2_d"],
      answer: "t4_q2_a",
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
  icon: "🛤️",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const KonzessivFinalExplorer = memo(function KonzessivFinalExplorer({
  color = "#E11D48",
  onDone,
  lang = "de",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={7} explorerId="deutsch_k7_konzessiv_final" color={color} lang={lang} onDone={onDone} />;
});

export default KonzessivFinalExplorer;
