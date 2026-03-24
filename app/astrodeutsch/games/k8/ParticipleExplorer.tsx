"use client";
// ParticipleExplorer — Island i3: Partizipialkonstruktionen (Participles K8)
// Topics: 1) Partizip I als Attribut 2) Partizip II als Attribut 3) Erweiterte Gruppen 4) Umwandlung in Relativsatz 5) Mixed Quiz

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSTRATIONS ──────────────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FFF7ED" rx="20" />
      <g transform="translate(120, 70)">
        <text x="0" y="-35" fontSize="16" fontWeight="bold" fill="#9A3412" textAnchor="middle">Partizip I (aktiv)</text>
        <rect x="-80" y="-10" width="160" height="40" rx="8" fill="#FFEDD5" stroke="#EA580C" strokeWidth="2" />
        <text x="0" y="15" fontSize="14" fontWeight="bold" fill="#9A3412" textAnchor="middle">Infinitiv + -d + Endung</text>
        <text x="0" y="45" fontSize="10" fill="#C2410C" textAnchor="middle">'der spielende Hund'</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0FDF4" rx="20" />
      <g transform="translate(120, 70)">
        <text x="0" y="-35" fontSize="16" fontWeight="bold" fill="#166534" textAnchor="middle">Partizip II (passiv)</text>
        <rect x="-80" y="-10" width="160" height="40" rx="8" fill="#BBF7D0" stroke="#16A34A" strokeWidth="2" />
        <text x="0" y="15" fontSize="14" fontWeight="bold" fill="#14532D" textAnchor="middle">ge...t/en + Endung</text>
        <text x="0" y="45" fontSize="10" fill="#15803D" textAnchor="middle">'das verkaufte Auto'</text>
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Partizip-Profi K8",
    // T1
    t1_title: "Partizip I als Attribut",
    t1_text: "Das Partizip I (Präsens) beschreibt eine Handlung, die GLEICHZEITIG und AKTIV passiert. Wir bilden es aus dem Infinitiv + 'd' und hängen die normale Adjektivendung an.",
    t1_b1: "singen + d + -er = der singende Vogel.",
    t1_b2: "laufen + d + -es = das laufende Kind.",
    t1_b3: "Bedeutung: Der Vogel singt (aktiv).",
    t1_inst: "Welches Partizip I passt in den Satz?",
    t1_h1: "Das Wasser bewegt sich (fließen).",
    t1_h2: "Wir brauchen 'fließen' + 'd' + Endung.",
    t1_gap_sentence: "Wir stehen an einem {gap} Bach.",
    t1_c1: "fließenden", t1_c2: "geflossenen", t1_c3: "fließend",
    t1_q: "Was drückt das Partizip I in der Regel aus?",
    t1_q_a: "Gleichzeitigkeit und Aktivität", t1_q_b: "Abgeschlossenheit und Passivität", t1_q_c: "Die ferne Zukunft", t1_q_d: "Einen Befehl",

    // T2
    t2_title: "Partizip II als Attribut",
    t2_text: "Das Partizip II (Perfekt) beschreibt eine Handlung, die ABGESCHLOSSEN ist oder PASSIVisch gemeint ist.",
    t2_b1: "kaufen ➔ das gekaufte Auto (Es wurde gekauft).",
    t2_b2: "öffnen ➔ das geöffnete Fenster (Es ist offen).",
    t2_b3: "Das Nomen 'erleidet' die Handlung.",
    t2_inst: "Partizip I (aktiv) oder Partizip II (passiv)? Sortiere!",
    t2_h1: "Tut das Ding etwas selbst (I) oder wird etwas damit gemacht (II)?",
    t2_h2: "Ein 'bellender' Hund bellt selbst. Ein 'gekocht' Ei wurde gekocht.",
    t2_bucket_p1: "Partizip I (aktiv/gerade)",
    t2_bucket_p2: "Partizip II (passiv/fertig)",
    t2_item_i1: "der schreiende Junge", t2_item_i2: "das lachende Gesicht",
    t2_item_ii1: "das gelesene Buch", t2_item_ii2: "die reparierte Uhr",
    t2_q: "Welches Partizip passt zu: 'Das Haus wurde vor 100 Jahren gebaut'?",
    t2_q_a: "das gebaute Haus", t2_q_b: "das bauende Haus", t2_q_c: "das gebauende Haus", t2_q_d: "das bauen Haus",

    // T3
    t3_title: "Erweiterte Partizipialgruppen",
    t3_text: "Jetzt wird es anspruchsvoll! Wir können weitere Informationen (Adverbien, Objekte) vor das Partizip schieben. Das Partizip steht dann direkt vor dem Nomen.",
    t3_b1: "Einfach: der Junge.",
    t3_b2: "Mit Partizip: der LACHENDE Junge.",
    t3_b3: "Erweitert: der LAUT UND FRÖHLICH LACHENDE Junge.",
    t3_inst: "Bringe die Wörter in die richtige Reihenfolge für das erweiterte Attribut!",
    t3_h1: "Der Artikel 'Die' steht ganz vorne, das Nomen 'Tür' ganz hinten.",
    t3_h2: "Das Partizip 'geöffnete' muss direkt vor 'Tür' stehen.",
    t3_w1: "Die", t3_w2: "leise", t3_w3: "von", t3_w4: "Geisterhand", t3_w5: "geöffnete", t3_w6: "Tür.",
    t3_q: "Wo steht in einer erweiterten Partizipialgruppe das Partizip?",
    t3_q_a: "Direkt vor dem Nomen", t3_q_b: "Ganz am Satzanfang", t3_q_c: "Nach dem Nomen", t3_q_d: "Hinter dem Verb",

    // T4
    t4_title: "Auflösung in Relativsätze",
    t4_text: "Jede Partizipialkonstruktion lässt sich in einen Relativsatz umwandeln. Das hilft, den Sinn zu verstehen.",
    t4_b1: "Partizip: der lesende Schüler.",
    t4_b2: "Relativsatz: der Schüler, der liest.",
    t4_b3: "Partizip II ➔ Passiv-Relativsatz: das Buch, das gelesen wurde.",
    t4_inst: "Verbinde das Partizip-Attribut mit dem passenden Relativsatz!",
    t4_h1: "'Die brennende Kerze' brennt gerade (aktiv).",
    t4_h2: "'Das gestohlene Geld' wurde gestohlen (passiv).",
    t4_l1: "die brennende Kerze", t4_r1: "die Kerze, die brennt",
    t4_l2: "das gestohlene Geld", t4_r2: "das Geld, das gestohlen wurde",
    t4_l3: "die wartenden Gäste", t4_r3: "die Gäste, die warten",
    t4_l4: "die gefundene Lösung", t4_r4: "die Lösung, die gefunden wurde",
    t4_q: "Welcher Relativsatz entspricht 'der singende Mann'?",
    t4_q_a: "der Mann, der singt", t4_q_b: "der Mann, der gesungen wurde", t4_q_c: "der Mann, der gesungen hat", t4_q_d: "der Mann, der singen wird",

    // T5
    t5_title: "Mixed Quiz",
    t5_text: "Bist du bereit? Teste dein Wissen über Partizip I, II und die zusammengesetzten Konstruktionen használatát.",
    t5_b1: "-d- = aktiv / gleichzeitig.",
    t5_b2: "ge... = passiv / abgeschlossen.",
    t5_b3: "Großschreibung beachten, wenn das Partizip zum Nomen wird!",
    t5_inst: "Markiere das Partizip I (aktiv) in diesem Satz!",
    t5_h1: "Suche nach der Endung '-ende' oder '-ender'.",
    t5_h2: "Das Wort ist 'strahlenden'.",
    t5_w21: "Wir", t5_w22: "genießen", t5_w23: "den", t5_w24: "Anblick", t5_w25: "der", t5_w26: "strahlenden", t5_w27: "Sonne.",
    t5_q: "Welches Wort ist ein Partizip II, das als Attribut verwendet wird?",
    t5_q_a: "versteckt", t5_q_b: "versteckend", t5_q_c: "verstecken", t5_q_d: "versteckd",
  },
  en: {
    explorer_title: "Participle Pro",
    t1_inst: "Which Partizip I fits into the sentence?",
    t2_inst: "Partizip I (active) or Partizip II (passive)? Sort them!",
    t3_inst: "Put the words in the correct order for the expanded attribute!",
    t4_inst: "Connect the participle attribute with the matching relative clause!",
    t5_inst: "Highlight the Partizip I (active) in this sentence!",
  },
  hu: {
    explorer_title: "Particípium-profiknak",
    t1_inst: "Melyik folyamatos melléknévi igenév (P.I) illik a mondatba?",
    t2_inst: "Folyamatos (I - aktív) vagy befejezett (II - passzív)? Válogasd szét!",
    t3_inst: "Tedd a szavakat a helyes sorrendbe a bővített jelzőhöz!",
    t4_inst: "Párosítsd az igeneves szerkezetet a megfelelő vonatkozói mellékmondattal!",
    t5_inst: "Jelöld ki a folyamatos melléknévi igenevet (aktív) a mondatban!",
  },
  ro: {
    explorer_title: "Expert Participiu",
    t1_inst: "Care participiu I se potrivește în propoziție?",
    t2_inst: "Participiu I (activ) sau Participiu II (pasiv)? Sortează-le!",
    t3_inst: "Pune cuvintele în ordinea corectă pentru atributul extins!",
    t4_inst: "Conectează atributul participial cu propoziția relativă corespunzătoare!",
    t5_inst: "Marchează participiul I (activ) în această propoziție!",
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
        { id: "p1", label: "t2_bucket_p1" },
        { id: "p2", label: "t2_bucket_p2" },
      ],
      items: [
        { text: "t2_item_i1", bucketId: "p1" },
        { text: "t2_item_ii1", bucketId: "p2" },
        { text: "t2_item_i2", bucketId: "p1" },
        { text: "t2_item_ii2", bucketId: "p2" },
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
    svg: () => <Topic1Svg />,
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "word-order",
      words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6"], // Die leise von Geisterhand geöffnete Tür.
      correctOrder: [0, 1, 2, 3, 4, 5],
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
    svg: () => <Topic1Svg />,
    bulletKeys: ["t5_b1", "t5_b2", "t5_b3"],
    interactive: {
      type: "highlight-text",
      tokens: ["t5_w21", "t5_w22", "t5_w23", "t5_w24", "t5_w25", "t5_w26", "t5_w27"], // ... strahlenden ...
      correctIndices: [5], 
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
  icon: "📜",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const ParticipleExplorer = memo(function ParticipleExplorer({
  color = "#F97316",
  onDone,
  lang = "de",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={8} explorerId="deutsch_k8_participle" color={color} lang={lang} onDone={onDone} />;
});

export default ParticipleExplorer;
