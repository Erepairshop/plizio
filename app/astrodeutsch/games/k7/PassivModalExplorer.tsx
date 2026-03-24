"use client";
// PassivModalExplorer — Island i3: Passiv mit Modalverben & Ersatzformen (K7)
// Topics: 1) können/dürfen + Passiv 2) müssen/sollen + Passiv 3) Passiversatz: man 4) sich lassen & -bar 5) Mixed Quiz

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSTRATIONS ──────────────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0F9FF" rx="20" />
      <g transform="translate(120, 70)">
        <text x="0" y="-35" fontSize="16" fontWeight="bold" fill="#0369A1" textAnchor="middle">können + Passiv</text>
        <rect x="-100" y="-15" width="200" height="40" rx="8" fill="#BAE6FD" stroke="#0EA5E9" strokeWidth="2" />
        <text x="0" y="10" fontSize="12" fontWeight="bold" fill="#0369A1" textAnchor="middle">kann + Part. II + werden</text>
        <text x="0" y="45" fontSize="10" fill="#0284C7" textAnchor="middle">„Das Rätsel kann gelöst werden.“</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FEF2F2" rx="20" />
      <g transform="translate(120, 70)">
        <text x="0" y="-35" fontSize="16" fontWeight="bold" fill="#B91C1C" textAnchor="middle">müssen + Passiv</text>
        <rect x="-100" y="-15" width="200" height="40" rx="8" fill="#FECACA" stroke="#EF4444" strokeWidth="2" />
        <text x="0" y="10" fontSize="12" fontWeight="bold" fill="#991B1B" textAnchor="middle">muss + Part. II + werden</text>
        <text x="0" y="45" fontSize="10" fill="#B91C1C" textAnchor="middle">„Der Müll muss geleert werden.“</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0FDF4" rx="20" />
      <g transform="translate(120, 70)">
        <text x="0" y="-25" fontSize="16" fontWeight="bold" fill="#166534" textAnchor="middle">Passiversatz: man</text>
        <path d="M -40,10 L 40,10" stroke="#22C55E" strokeWidth="2" markerEnd="url(#arrow)" />
        <text x="0" y="35" fontSize="12" fill="#15803D" textAnchor="middle">Aktiv mit „man“ = Passiv-Sinn</text>
      </g>
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F5F3FF" rx="20" />
      <g transform="translate(120, 70)">
        <text x="0" y="-30" fontSize="14" fontWeight="bold" fill="#5B21B6" textAnchor="middle">sich lassen / -bar</text>
        <rect x="-60" y="-5" width="120" height="25" rx="4" fill="#DDD6FE" />
        <text x="0" y="12" fontSize="10" fontWeight="bold" fill="#4C1D95" textAnchor="middle">lös-bar / lässt sich lösen</text>
        <text x="0" y="40" fontSize="10" fill="#6D28D9" textAnchor="middle">Können-Passiv Alternativen</text>
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Modalverben & Passiversatz K7",
    // T1
    t1_title: "können / dürfen + Passiv",
    t1_text: "Kombinieren wir Passiv mit Modalverben! Das Modalverb steht auf Position 2, das Partizip II und das Wort 'werden' (Infinitiv) stehen am Satzende.",
    t1_b1: "Formel: Modalverb + Partizip II + werden",
    t1_b2: "Beispiel: Die Aufgabe KANN gelöst WERDEN.",
    t1_b3: "Dürfen: Hier DARF nicht geparkt WERDEN.",
    t1_inst: "Welches Hilfswort fehlt am Satzende?",
    t1_h1: "Im Passiv mit Modalverb steht am Ende immer der Infinitiv von 'werden'.",
    t1_h2: "Es ist nicht 'worden' oder 'wurde'.",
    t1_gap_sentence: "Das Problem kann schnell gelöst {gap}.",
    t1_c1: "werden", t1_c2: "worden", t1_c3: "wird",
    t1_q: "Wo steht das Modalverb in einem normalen Aussagesatz im Passiv?",
    t1_q_a: "An Position 2", t1_q_b: "Ganz am Ende", t1_q_c: "Vor dem Partizip II", t1_q_d: "Nach dem Subjekt",

    // T2
    t2_title: "müssen / sollen + Passiv",
    t2_text: "Diese Modalverben drücken eine Pflicht oder Notwendigkeit aus. Der Satzbau bleibt gleich.",
    t2_b1: "Beispiel: Der Test MUSS geschrieben WERDEN.",
    t2_b2: "Beispiel: Die Regeln SOLLEN beachtet WERDEN.",
    t2_b3: "Aktiv: Man muss den Test schreiben.",
    t2_inst: "Bringe den Passivsatz mit Modalverb in die richtige Reihenfolge!",
    t2_h1: "Subjekt: 'Der Müll'. Modalverb: 'muss'.",
    t2_h2: "Am Ende stehen 'rausgebracht' und 'werden.'",
    t2_w1: "Der", t2_w2: "Müll", t2_w3: "muss", t2_w4: "heute", t2_w5: "rausgebracht", t2_w6: "werden.",
    t2_q: "Was ist das Aktiv zu: 'Das Auto muss repariert werden.'?",
    t2_q_a: "Man muss das Auto reparieren.", t2_q_b: "Das Auto repariert man.", t2_q_c: "Das Auto wird repariert.", t2_q_d: "Man repariert das Auto.",

    // T3
    t3_title: "Passiversatz: man",
    t3_text: "Oft benutzen wir gar kein Passiv, sondern das Indefinitpronomen 'man'. Das klingt aktiver, meint aber dasselbe wie ein Passivsatz, in dem der Täter unbekannt ist.",
    t3_b1: "Passiv: Hier wird Deutsch gesprochen.",
    t3_b2: "Ersatz: MAN spricht hier Deutsch.",
    t3_b3: "'man' steht immer mit dem Verb in der 3. Person Singular.",
    t3_inst: "Ist es ein Passiv-Satz oder ein Satz mit 'man'? Sortiere!",
    t3_h1: "Suche nach dem Wort 'man' am Satzanfang.",
    t3_h2: "Sätze mit 'wird' sind Passiv.",
    t3_bucket_pas: "Passiv (wird...)",
    t3_bucket_man: "Ersatz mit „man“",
    t3_item_p1: "Das Fenster wird geöffnet.", t3_item_p2: "Hier wird getanzt.",
    t3_item_m1: "Man öffnet das Fenster.", t3_item_m2: "Man tanzt hier.",
    t3_q: "Welches Wort kann ein unpersönliches Passiv ersetzen?",
    t3_q_a: "man", t3_q_b: "wir", t3_q_c: "jemand", t3_q_d: "er",

    // T4
    t4_title: "sich lassen & -bar",
    t4_text: "Um auszudrücken, dass etwas 'gemacht werden kann', gibt es zwei elegante Ersatzformen.",
    t4_b1: "sein + Adjektiv auf -bar: Das ist machbar (Es kann gemacht werden).",
    t4_b2: "sich lassen + Infinitiv: Das lässt sich machen.",
    t4_b3: "Diese Formen klingen oft professioneller als das Passiv.",
    t4_inst: "Verbinde die Passiv-Form mit ihrem Ersatz!",
    t4_h1: "'gelöst werden kann' bedeutet, es ist 'lösbar'.",
    t4_h2: "'geklärt werden kann' heißt, es 'lässt sich klären'.",
    t4_l1: "kann gelöst werden", t4_r1: "ist lösbar",
    t4_l2: "kann geklärt werden", t4_r2: "lässt sich klären",
    t4_l3: "kann gelesen werden", t4_r3: "ist lesbar",
    t4_l4: "kann repariert werden", t4_r4: "lässt sich reparieren",
    t4_q: "Welche Endung bei Adjektiven drückt oft eine Passiv-Möglichkeit aus?",
    t4_q_a: "-bar", t4_q_b: "-lich", t4_q_c: "-ig", t4_q_d: "-heit",

    // T5
    t5_title: "Mixed Quiz",
    t5_text: "Kombiniere dein Wissen! Erkennst du Modalverben im Passiv und kannst du Ersatzformen sicher anwenden?",
    t5_b1: "Modalverb + Partizip II + werden.",
    t5_b2: "sich lassen + Infinitiv.",
    t5_b3: "-bar Adjektive.",
    t5_inst: "Welcher Satz bedeutet dasselbe wie: 'Die Tür kann geöffnet werden.'?",
    t5_h1: "Suche nach einer Form mit 'lässt sich'.",
    t5_h2: "Die Antwort ist 'Die Tür lässt sich öffnen.'",
    t5_gap_sentence2: "Die Tür {gap} öffnen.",
    t5_c1: "lässt sich", t5_c2: "wird", t5_c3: "muss",
    t5_q: "Wie lautet der Passivsatz zu: 'Man darf hier nicht rauchen.'?",
    t5_q_a: "Hier darf nicht geraucht werden.", t5_q_b: "Hier wird nicht geraucht.", t5_q_c: "Hier lässt sich nicht rauchen.", t5_q_d: "Rauchen ist hier nicht bar.",
  },
  en: {
    explorer_title: "Modals & Passive Subs",
    t1_inst: "Which auxiliary word is missing at the end?",
    t2_inst: "Put the passive sentence with a modal verb in the correct order!",
    t3_inst: "Is it a passive sentence or a sentence with 'man'? Sort!",
    t4_inst: "Connect the passive form with its substitute!",
    t5_inst: "Which sentence means the same as: 'Die Tür kann geöffnet werden.'?",
  },
  hu: {
    explorer_title: "Módbeli igék és Passzív pótlók",
    t1_inst: "Melyik segédszó hiányzik a mondat végéről?",
    t2_inst: "Tedd a módbeli segédigés passzív mondatot a helyes sorrendbe!",
    t3_inst: "Passzív mondat vagy 'man'-os mondat? Válogasd szét!",
    t4_inst: "Kösd össze a passzív alakot a pótlékával!",
    t5_inst: "Melyik mondat jelenti ugyanazt, mint: 'Die Tür kann geöffnet werden.'?",
  },
  ro: {
    explorer_title: "Modale și Substituenți Pasivi",
    t1_inst: "Ce cuvânt auxiliar lipsește la finalul propoziției?",
    t2_inst: "Așază propoziția pasivă cu verb modal în ordinea corectă!",
    t3_inst: "Este o propoziție la pasiv sau o propoziție cu „man”? Sortează!",
    t4_inst: "Leagă forma pasivă de substituentul ei!",
    t5_inst: "Care propoziție are același înțeles ca: „Die Tür kann geöffnet werden.”?",
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
      choices: ["t1_c1", "t1_c2", "t1_c3"], // werden, worden, wird
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
      type: "word-order",
      words: ["t2_w1", "t2_w2", "t2_w3", "t2_w4", "t2_w5", "t2_w6"], // Der Müll muss heute rausgebracht werden.
      correctOrder: [0, 1, 2, 3, 4, 5],
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
        { id: "pas", label: "t3_bucket_pas" },
        { id: "man", label: "t3_bucket_man" },
      ],
      items: [
        { text: "t3_item_p1", bucketId: "pas" },
        { text: "t3_item_m1", bucketId: "man" },
        { text: "t3_item_p2", bucketId: "pas" },
        { text: "t3_item_m2", bucketId: "man" },
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
      type: "gap-fill",
      sentence: "t5_gap_sentence2",
      choices: ["t5_c1", "t5_c2", "t5_c3"], // lässt sich, wird, muss
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
  icon: "🛠️",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const PassivModalExplorer = memo(function PassivModalExplorer({
  color = "#DC2626",
  onDone,
  lang = "de",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={7} explorerId="deutsch_k7_passive_modals" color={color} lang={lang} onDone={onDone} />;
});

export default PassivModalExplorer;
