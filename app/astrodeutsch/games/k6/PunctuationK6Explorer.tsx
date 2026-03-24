"use client";
// PunctuationK6Explorer — Island i8: Zeichensetzung K6 (Punctuation)
// Topics: 1) Komma bei Relativsätzen 2) Komma bei Infinitivgruppen 3) Direkte & indirekte Rede 4) Semikolon & Gedankenstrich 5) Gemischtes Quiz

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSTRATIONS ──────────────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0FDF4" rx="20" />
      <g transform="translate(120, 70)">
        <text x="0" y="-30" fontSize="14" fontWeight="bold" fill="#166534" textAnchor="middle">Relativsatz-Klammer</text>
        <text x="0" y="5" fontSize="12" fill="#15803D" textAnchor="middle">Nomen<tspan fill="#E11D48" fontWeight="bold"> , </tspan>der ...<tspan fill="#E11D48" fontWeight="bold"> , </tspan>Verb</text>
        <path d="M -50,15 Q 0,40 50,15" fill="none" stroke="#16A34A" strokeWidth="2" strokeDasharray="4 2" />
        <text x="0" y="45" fontSize="10" fill="#14532D" textAnchor="middle">Eingeschobene Sätze trennen!</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0F9FF" rx="20" />
      <g transform="translate(120, 70)">
        <rect x="-80" y="-20" width="160" height="40" rx="8" fill="#BAE6FD" stroke="#0EA5E9" strokeWidth="2" />
        <text x="0" y="5" fontSize="12" fontWeight="bold" fill="#0369A1" textAnchor="middle">..., um / ohne / statt ... zu</text>
        <path d="M -42,12 L -42,22 L -45,20" fill="none" stroke="#E11D48" strokeWidth="2" />
        <text x="0" y="40" fontSize="10" fill="#0284C7" textAnchor="middle">Infinitivgruppe = Komma-Pflicht</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FFFBEB" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-50" y="-10" fontSize="12" fontWeight="bold" fill="#B45309" textAnchor="middle">Direkt: „...“</text>
        <path d="M -15,0 L 15,0" stroke="#F59E0B" strokeWidth="2" markerEnd="url(#arrow)" />
        <text x="60" y="-10" fontSize="12" fontWeight="bold" fill="#B45309" textAnchor="middle">Indirekt: dass...</text>
        <text x="0" y="30" fontSize="10" fill="#D97706" textAnchor="middle">Begleitsätze richtig abgrenzen</text>
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Zeichensetzung K6",
    // T1
    t1_title: "Komma bei Relativsätzen",
    t1_text: "Relativsätze werden immer durch Kommas vom Hauptsatz getrennt. Wenn der Relativsatz mitten im Hauptsatz steht, braucht er ein Komma davor UND danach (Satzklammer).",
    t1_b1: "Beispiel: Der Film, den ich sah, war gut.",
    t1_b2: "Einleitung durch: der, die, das, welcher, welche...",
    t1_b3: "Das Komma markiert den Einschub.",
    t1_inst: "Wo fehlen die Kommas? Markiere die richtigen Stellen!",
    t1_h1: "Der Relativsatz beginnt nach 'Buch' und endet nach 'habe'.",
    t1_h2: "Setze zwei Kommas um 'das ich gelesen habe'.",
    t1_w1: "Das", t1_w2: "Buch", t1_w3: ",", t1_w4: "das", t1_w5: "ich", t1_w6: "gelesen", t1_w7: "habe", t1_w8: ",", t1_w9: "ist", t1_w10: "spannend.",
    t1_q: "Muss ein eingeschobener Relativsatz auch am Ende ein Komma haben?",
    t1_q_a: "Ja, immer (Satzklammer).", t1_q_b: "Nein, nur am Anfang.", t1_q_c: "Nur wenn er sehr lang ist.", t1_q_d: "Nur bei Fragen.",

    // T2
    t2_title: "Komma bei Infinitivgruppen",
    t2_text: "Infinitivgruppen mit 'zu' brauchen ein Komma, wenn sie durch Wörter wie 'um', 'ohne', 'statt', 'anstatt' vagy 'außer' eingeleitet werden.",
    t2_b1: "Pflicht: Er geht, OHNE zu grüßen.",
    t2_b2: "Pflicht: Wir lernen, UM zu bestehen.",
    t2_b3: "Bei einfachen Verben wie 'Ich hoffe zu gewinnen' ist es freiwillig.",
    t2_inst: "Welches Zeichen fehlt vor dem 'um'? Wähle aus!",
    t2_h1: "Sätze mit 'um...zu' verlangen zwingend ein Satzzeichen zur Trennung.",
    t2_h2: "Das richtige Zeichen ist das Komma.",
    t2_gap_sentence: "Sie rennt schnell {gap} um den Bus zu kriegen.",
    t2_c1: ",", t2_c2: ";", t2_c3: ":",
    t2_q: "Wann ist das Komma bei einer Infinitivgruppe PFLICHT?",
    t2_q_a: "Bei Einleitewörtern wie 'um' oder 'ohne'.", t2_q_b: "Immer, wenn ein 'zu' im Satz ist.", t2_q_c: "Nur am Satzende.", t2_q_d: "Niemals.",

    // T3
    t3_title: "Direkte und indirekte Rede",
    t3_text: "In der direkten Rede nutzt man Anführungszeichen. In der indirekten Rede (oft mit 'dass' vagy Konjunktiv) nutzt man ein Komma zur Trennung des Begleitsatzes.",
    t3_b1: "Direkt: Er sagt: „Ich komme.“",
    t3_b2: "Indirekt: Er sagt, dass er kommt.",
    t3_b3: "Achtung bei Fragezeichen in der direkten Rede!",
    t3_inst: "Ist es direkte vagy indirekte Rede? Sortiere!",
    t3_h1: "Anführungszeichen („...“) = direkt.",
    t3_h2: "Ein 'dass'-Satz vagy Konjunktiv ohne Gänsefüßchen = indirekt.",
    t3_bucket_dir: "Direkt („...“)",
    t3_bucket_ind: "Indirekt (dass...)",
    t3_item_d1: "Sie fragt: „Helfen Sie mir?“", t3_item_d2: "Er rief: „Stopp!“",
    t3_item_i1: "Sie fragt, ob er helfe.", t3_item_i2: "Er sagt, dass er warte.",
    t3_q: "Welches Zeichen leitet die direkte Rede nach einem Begleitsatz (Er sagt...) ein?",
    t3_q_a: "Doppelpunkt (:)", t3_q_b: "Semikolon (;)", t3_q_c: "Gedankenstrich (—)", t3_q_d: "Punkt (.)",

    // T4
    t4_title: "Semikolon & Gedankenstrich",
    t4_text: "Das Semikolon trennt Sätze stärker als ein Komma. Der Gedankenstrich wird für Einschübe oder plötzliche Wendungen genutzt, um Aufmerksamkeit zu erzeugen.",
    t4_b1: "Semikolon: Es regnete stark; wir blieben im Haus.",
    t4_b2: "Gedankenstrich: Das Ergebnis war — unglaublich!",
    t4_b3: "Nach dem Semikolon schreibt man klein weiter.",
    t4_inst: "Bringe den Satz mit dem Gedankenstrich in die richtige Reihenfolge!",
    t4_h1: "Der Gedankenstrich dient hier zur Betonung des Endes.",
    t4_h2: "Der Satz lautet: 'Sie öffnete die Tür — es war dunkel.'",
    t4_w21: "Sie", t4_w22: "öffnete", t4_w23: "die", t4_w24: "Tür", t4_w25: "—", t4_w26: "es", t4_w27: "war", t4_w28: "dunkel.",
    t4_q: "Wie schreibt man nach einem Semikolon (;) weiter (wenn kein Nomen folgt)?",
    t4_q_a: "klein", t4_q_b: "groß", t4_q_c: "fett", t4_q_d: "kursiv",

    // T5
    t5_title: "Gemischtes Quiz",
    t5_text: "Bist du ein Zeichensetzungs-Experte? Teste dein Wissen über Kommas, Anführungszeichen und die neuen Sonderzeichen.",
    t5_b1: "Relativsätze einklammern.",
    t5_b2: "Infinitivgruppen mit 'um' brauchen Kommas.",
    t5_b3: "Indirekte Rede braucht keine Gänsefüßchen.",
    t5_inst: "Welcher Satz ist VOLLSTÄNDIG richtig geschrieben?",
    t5_h1: "Prüfe die Kommas beim Relativsatz.",
    t5_h2: "Der Satz 'Das Auto, das dort steht, ist rot.' ist perfekt.",
    t5_q_alt1: "Das Auto, das dort steht, ist rot.",
    t5_q_alt2: "Das Auto das dort steht ist rot.",
    t5_q_alt3: "Das Auto, das dort steht ist rot.",
    t5_q_alt4: "Das Auto das dort steht, ist rot.",
    t5_q: "Wo muss bei 'Wir gehen um zu essen' ein Komma hin?",
    t5_q_a: "vor 'um'", t5_q_b: "vor 'zu'", t5_q_c: "hinter 'essen'", t5_q_d: "nirgendwo",
  },
  en: {
    explorer_title: "Punctuation Pro",
    t1_inst: "Where are the commas missing? Mark the correct spots!",
    t2_inst: "Which punctuation mark is missing before 'um'? Choose!",
    t3_inst: "Is it direct or indirect speech? Sort them!",
    t4_inst: "Put the sentence with the dash in the correct order!",
    t5_inst: "Which sentence is completely correct?",
  },
  hu: {
    explorer_title: "Írásjel-mester",
    t1_inst: "Hol hiányoznak a vesszők? Jelöld be a helyes pontokat!",
    t2_inst: "Melyik írásjel hiányzik az 'um' elől? Válaszd ki!",
    t3_inst: "Egyenes vagy függő beszéd? Válogasd szét!",
    t3_bucket_dir: "Egyenes („...“)",
    t3_bucket_ind: "Függő (dass...)",
    t4_inst: "Tedd a gondolatjeles mondatot a helyes sorrendbe!",
    t5_inst: "Melyik mondat van teljesen helyesen írva?",
  },
  ro: {
    explorer_title: "Expert Punctuație",
    t1_inst: "Unde lipsesc virgulele? Marchează locurile corecte!",
    t2_inst: "Ce semn de punctuație lipsește înaintea lui „um”? Alege!",
    t3_inst: "Este vorbire directă sau indirectă? Sortează-le!",
    t4_inst: "Așază propoziția cu linia de pauză în ordinea corectă!",
    t5_inst: "Care propoziție este scrisă complet corect?",
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
      type: "highlight-text",
      tokens: ["t1_w1", "t1_w2", "t1_w3", "t1_w4", "t1_w5", "t1_w6", "t1_w7", "t1_w8", "t1_w9", "t1_w10"], // Das Buch [,] das ich gelesen habe [,] ist spannend.
      correctIndices: [2, 7],
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
      choices: ["t2_c1", "t2_c2", "t2_c3"],
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
      type: "drag-to-bucket",
      buckets: [
        { id: "dir", label: "t3_bucket_dir" },
        { id: "ind", label: "t3_bucket_ind" },
      ],
      items: [
        { text: "t3_item_d1", bucketId: "dir" },
        { text: "t3_item_i1", bucketId: "ind" },
        { text: "t3_item_d2", bucketId: "dir" },
        { text: "t3_item_i2", bucketId: "ind" },
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
    svg: () => <Topic1Svg />,
    bulletKeys: ["t4_b1", "t4_b2", "t4_b3"],
    interactive: {
      type: "word-order",
      words: ["t4_w21", "t4_w22", "t4_w23", "t4_w24", "t4_w25", "t4_w26", "t4_w27", "t4_w28"],
      correctOrder: [0, 1, 2, 3, 4, 5, 6, 7],
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
      type: "gap-fill",
      sentence: "t5_q_alt1", // Simple visualization as gap-fill vs multiple choice logic
      choices: ["t5_q_alt1", "t5_q_alt2", "t5_q_alt3", "t5_q_alt4"],
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
  icon: "✒️",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const PunctuationK6Explorer = memo(function PunctuationK6Explorer({
  color = "#6366F1",
  onDone,
  lang = "de",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={6} explorerId="deutsch_k6_punctuation_advanced" color={color} lang={lang} onDone={onDone} />;
});

export default PunctuationK6Explorer;
