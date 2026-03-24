"use client";
// ReviewK7Explorer — Island i9: Große K7 Abschlussprüfung (The Big K7 Final Exam)
// Topics: 1) Konjunktiv I Check 2) Passiv-Zeiten Check 3) Stilmittel 4) Nebensätze 5) Infinitiv & Ersatzformen

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSTRATIONS ──────────────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0F9FF" rx="20" />
      <g transform="translate(120, 70)">
        <text x="0" y="-15" fontSize="40" textAnchor="middle">🎓</text>
        <text x="0" y="30" fontSize="18" fontWeight="black" fill="#0369A1" textAnchor="middle">K7 Master</text>
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Große K7 Prüfung",
    // T1: Konjunktiv I
    t1_title: "Indirekte Rede Check",
    t1_text: "Konjunktiv I wird für neutrale Berichterstattung genutzt. Weißt du noch, wie die Formen von 'sein' und 'haben' lauten?",
    t1_b1: "er sei (Konj. I) vs. er ist (Ind.)",
    t1_b2: "er habe (Konj. I) vs. er hat (Ind.)",
    t1_b3: "Wichtig in Zeitungen!",
    t1_inst: "Welche Form von Konjunktiv I ist korrekt?",
    t1_h1: "Der Reporter sagt, der Spieler ___ fit.",
    t1_h2: "Die Antwort ist 'sei'.",
    t1_gap_sentence: "Er berichtet, dass alles in Ordnung {gap}.",
    t1_c1: "sei", t1_c2: "ist", t1_c3: "wäre",
    t1_q: "Wofür nutzt man den Konjunktiv I primär?",
    t1_q_a: "Für die indirekte Rede", t1_q_b: "Für irreale Wünsche", t1_q_c: "Für Befehle", t1_q_d: "Für die ferne Zukunft",

    // T2: Passiv Zeiten
    t2_title: "Passiv durch die Zeiten",
    t2_text: "Präsens, Präteritum oder Perfekt Passiv? Das Hilfsverb verrät dir die Zeitform.",
    t2_b1: "wird gebaut (Präsens)",
    t2_b2: "wurde gebaut (Präteritum)",
    t2_b3: "ist gebaut worden (Perfekt)",
    t2_inst: "Welche Zeitform hat der Satz? Sortiere!",
    t2_h1: "'wird' = jetzt, 'wurde' = damals, 'worden' = abgeschlossen.",
    t2_h2: "'ist ... worden' = Perfekt Passiv (abgeschlossene Handlung).",
    t2_bucket_prae: "Präsens Passiv",
    t2_bucket_praet: "Präteritum Passiv",
    t2_bucket_perf: "Perfekt Passiv",
    t2_item_p1: "Der Brief wird gelesen.", t2_item_p2: "Der Brief wurde gelesen.",
    t2_item_p3: "Der Brief ist gelesen worden.",
    t2_q: "Wie bildet man das Passiv im Perfekt?",
    t2_q_a: "sein + Partizip II + worden", t2_q_b: "haben + Partizip II + worden", t2_q_c: "werden + Partizip II + sein", t2_q_d: "ist + Partizip II + geworden",

    // T3: Stilmittel
    t3_title: "Literarische Bilder",
    t3_text: "Metapher, Vergleich oder Personifikation? Diese Mittel machen Texte lebendig.",
    t3_b1: "Metapher: Bild ohne 'wie'.",
    t3_b2: "Vergleich: Bild mit 'wie'.",
    t3_b3: "Personifikation: Menschliche Züge.",
    t3_inst: "Welches Stilmittel liegt vor? Verbinde!",
    t3_h1: "'Stark wie ein Bär' nutzt ein Vergleichswort.",
    t3_h2: "'Die Sonne lacht' ist menschlich.",
    t3_l1: "Stark wie ein Löwe", t3_r1: "Vergleich",
    t3_l2: "Warteschlange", t3_r2: "Metapher",
    t3_l3: "Die Mauer schweigt", t3_r3: "Personifikation",
    t3_l4: "Veni, vidi, vici", t3_r4: "Anapher / Alliteration",
    t3_q: "Was ist 'Rabenmutter' für ein Stilmittel?",
    t3_q_a: "Metapher", t3_q_b: "Vergleich", t3_q_c: "Personifikation", t3_q_d: "Alliteration",

    // T4: Nebensätze
    t4_title: "Logische Verbindungen",
    t4_text: "Obwohl, damit, falls oder ob? Wähle das richtige Bindewort für den Sinn des Satzes.",
    t4_b1: "obwohl (Gegengrund)",
    t4_b2: "damit (Ziel)",
    t4_b3: "ob (indirekte Frage)",
    t4_inst: "Welches Bindewort passt in die Lücke?",
    t4_h1: "Ich gehe raus, ___ es regnet. (Gegengrund!)",
    t4_h2: "Hier passt nur 'obwohl'.",
    t4_gap_sentence2: "Ich gehe spazieren, {gap} es regnet.",
    t4_c1: "obwohl", t4_c2: "weil", t4_c3: "damit",
    t4_q: "Welches Wort leitet einen Finalsatz (Ziel) ein?",
    t4_q_a: "damit", t4_q_b: "obwohl", t4_q_c: "trotzdem", t4_q_d: "weil",

    // T5: Infinitiv & Ersatzformen
    t5_title: "Satzbau-Finale",
    t5_text: "Infinitivkonstruktionen (um...zu) und Passiversatzformen (sein+zu) sind Zeichen für gehobene Sprache.",
    t5_b1: "um ... zu (Zweck)",
    t5_b2: "sein + zu (müssen/können Passiv)",
    t5_b3: "lässt sich ... (können Passiv)",
    t5_inst: "Bringe den Satz in die richtige Reihenfolge!",
    t5_h1: "Der Satz bedeutet: 'This task is to be solved.'",
    t5_h2: "Start mit 'Diese', Ende mit 'lösen.'",
    t5_w1: "Diese", t5_w2: "Aufgabe", t5_w3: "ist", t5_w4: "bis", t5_w5: "morgen", t5_w6: "zu", t5_w7: "lösen.",
    t5_q: "Was bedeutet 'Das lässt sich reparieren'?",
    t5_q_a: "Das kann repariert werden.", t5_q_b: "Man muss es reparieren.", t5_q_c: "Es ist kaputt.", t5_q_d: "Man repariert es gerade.",
  },
  en: {
    explorer_title: "Final Exam K7",
    t1_inst: "Which form of Konjunktiv I is correct?",
    t2_inst: "Which tense does the sentence have? Sort them!",
    t3_inst: "Which stylistic device is present? Connect them!",
    t4_inst: "Which conjunction fits in the gap?",
    t5_inst: "Put the sentence in the correct order!",
  },
  hu: {
    explorer_title: "Záróvizsga K7",
    t1_inst: "Melyik Konjunktiv I alak a helyes?",
    t2_inst: "Melyik igeidőben van a mondat? Válogasd szét!",
    t2_bucket_prae: "Jelen Passzív",
    t2_bucket_praet: "Múlt (Prät.) Passzív",
    t2_bucket_perf: "Befejezett (Perf.) Passzív",
    t3_inst: "Melyik stilisztikai eszközt látod? Kösd össze!",
    t4_inst: "Melyik kötőszó illik az űrbe?",
    t5_inst: "Tedd a mondatot a helyes sorrendbe!",
  },
  ro: {
    explorer_title: "Examen Final K7",
    t1_inst: "Care formă de Konjunktiv I este corectă?",
    t2_inst: "La ce timp este propoziția? Sortează-le!",
    t3_inst: "Ce figură de stil este prezentă? Leagă-le!",
    t4_inst: "Care conjuncție se potrivește în spațiu?",
    t5_inst: "Așază propoziția în ordinea corectă!",
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
    svg: () => <Topic1Svg />,
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [
        { id: "prae", label: "t2_bucket_prae" },
        { id: "praet", label: "t2_bucket_praet" },
        { id: "perf", label: "t2_bucket_perf" },
      ],
      items: [
        { text: "t2_item_p1", bucketId: "prae" },
        { text: "t2_item_p2", bucketId: "praet" },
        { text: "t2_item_p3", bucketId: "perf" },
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
    svg: () => <Topic1Svg />,
    bulletKeys: ["t4_b1", "t4_b2", "t4_b3"],
    interactive: {
      type: "gap-fill",
      sentence: "t4_gap_sentence2",
      choices: ["t4_c1", "t4_c2", "t4_c3"],
      correctIndex: 0,
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
      type: "word-order",
      words: ["t5_w1", "t5_w2", "t5_w3", "t5_w4", "t5_w5", "t5_w6", "t5_w7"],
      correctOrder: [0, 1, 2, 3, 4, 5, 6],
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
  icon: "👑",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const ReviewK7Explorer = memo(function ReviewK7Explorer({
  color = "#A855F7",
  onDone,
  lang = "de",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={7} explorerId="deutsch_k7_review_final" color={color} lang={lang} onDone={onDone} />;
});

export default ReviewK7Explorer;
