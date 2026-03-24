"use client";
// SentenceAnalysisExplorer — Island i5: Satzanalyse (Sentence Analysis K8)
// Topics: 1) Satzgefüge vs. Satzreihe 2) Haupt- & Nebensatz 3) Satzglieder bestimmen 4) Umstell- & Ersatzprobe 5) Mixed Quiz

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSTRATIONS ──────────────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0F9FF" rx="20" />
      <g transform="translate(120, 70)">
        <rect x="-90" y="-20" width="80" height="30" rx="4" fill="#BAE6FD" stroke="#0EA5E9" strokeWidth="2" />
        <text x="-50" y="0" fontSize="10" fontWeight="bold" fill="#0369A1" textAnchor="middle">HS</text>
        <text x="0" y="0" fontSize="14" fill="#0EA5E9" textAnchor="middle">+</text>
        <rect x="10" y="-20" width="80" height="30" rx="4" fill="#BAE6FD" stroke="#0EA5E9" strokeWidth="2" />
        <text x="50" y="0" fontSize="10" fontWeight="bold" fill="#0369A1" textAnchor="middle">HS</text>
        <text x="0" y="40" fontSize="12" fontWeight="bold" fill="#0284C7" textAnchor="middle">Satzreihe (Parataxe)</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F5F3FF" rx="20" />
      <g transform="translate(120, 70)">
        <rect x="-100" y="-30" width="60" height="30" rx="4" fill="#DDD6FE" />
        <text x="-70" y="-10" fontSize="10" fill="#4C1D95" textAnchor="middle">Subjekt</text>
        <rect x="-30" y="-30" width="60" height="30" rx="4" fill="#C4B5FD" />
        <text x="0" y="-10" fontSize="10" fill="#4C1D95" textAnchor="middle">Prädikat</text>
        <rect x="40" y="-30" width="60" height="30" rx="4" fill="#A78BFA" />
        <text x="70" y="-10" fontSize="10" fill="#4C1D95" textAnchor="middle">Objekt</text>
        <text x="0" y="30" fontSize="12" fontWeight="bold" fill="#5B21B6" textAnchor="middle">Satzglieder</text>
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Satzanalyse-Profi K8",
    // T1
    t1_title: "Satzgefüge vs. Satzreihe",
    t1_text: "Eine Satzreihe (Parataxe) besteht aus mindestens zwei gleichrangigen Hauptsätzen. Ein Satzgefüge (Hypotaxe) besteht aus einem Hauptsatz und mindestens einem untergeordneten Nebensatz.",
    t1_b1: "Satzreihe: HS + HS (verbunden durch: und, oder, aber, denn...).",
    t1_b2: "Satzgefüge: HS + NS (verbunden durch: weil, dass, wenn, Relativpronomen...).",
    t1_b3: "Wichtig: Im NS steht das Verb am Ende, im HS auf Position 2.",
    t1_inst: "Satzreihe (HS+HS) oder Satzgefüge (HS+NS)? Sortiere!",
    t1_h1: "Prüfe die Bindewörter. 'und' verbindet Hauptsätze.",
    t1_h2: "'weil' leitet immer einen Nebensatz ein.",
    t1_bucket_sr: "Satzreihe (Parataxe)",
    t1_bucket_sg: "Satzgefüge (Hypotaxe)",
    t1_item_sr1: "Ich kam heim und ich aß.", t1_item_sr2: "Die Sonne scheint, aber es ist kalt.",
    t1_item_sg1: "Ich aß, weil ich Hunger hatte.", t1_item_sg2: "Er sagt, dass er kommt.",
    t1_q: "Wie nennt man die Verbindung von Hauptsatz und Nebensatz?",
    t1_q_a: "Satzgefüge", t1_q_b: "Satzreihe", t1_q_c: "Wortgruppe", t1_q_d: "Aussagesatz",

    // T2
    t2_title: "Haupt- & Nebensatz erkennen",
    t2_text: "Der Hauptsatz kann alleine stehen, das Verb steht auf Position 2. Der Nebensatz kann nicht alleine stehen, er wird durch ein Komma abgetrennt und das Verb 'rutscht' ganz ans Ende.",
    t2_b1: "HS: Er GEHT heute in die Schule.",
    t2_b2: "NS: ..., weil er heute in die Schule GEHT.",
    t2_b3: "Nebensätze ergänzen den Hauptsatz (Objekt-, Kausal-, Relativsätze).",
    t2_inst: "Welcher Teil ist der Nebensatz? Markiere ihn!",
    t2_h1: "Suche den Teil, der nach dem Komma steht und das Verb am Ende hat.",
    t2_h2: "Der Teil beginnt mit 'obwohl'.",
    t2_w1: "Wir", t2_w2: "gehen", t2_w3: "spazieren,", t2_w4: "obwohl", t2_w5: "es", t2_w6: "stark", t2_w7: "regnet.",
    t2_q: "Wo steht das konjugierte Verb in einem deutschen Nebensatz?",
    t2_q_a: "Ganz am Ende", t2_q_b: "An Position 2", t2_q_c: "Ganz am Anfang", t2_q_d: "Nach dem Subjekt",

    // T3
    t3_title: "Satzglieder bestimmen",
    t3_text: "Satzglieder sind die Bausteine eines Satzes. Sie können aus einem oder mehreren Wörtern bestehen. Die wichtigsten sind Subjekt, Prädikat, Objekte und adverbiale Bestimmungen.",
    t3_b1: "Subjekt: Wer oder was? / Prädikat: Was geschieht?",
    t3_b2: "Akkusativ-Objekt: Wen oder was? / Dativ-Objekt: Wem?",
    t3_b3: "Adverbiale: Wann? (Zeit), Wo? (Ort), Wie? (Art), Warum? (Grund).",
    t3_inst: "Welches Satzglied ist das markierte Wort? Verbinde!",
    t3_h1: "'Mein Bruder' antwortet auf die Frage 'Wer?'.",
    t3_h2: "'In den Park' antwortet auf die Frage 'Wohin?'.",
    t3_l1: "Mein Bruder", t3_r1: "Subjekt",
    t3_l2: "schenkt", t3_r2: "Prädikat",
    t3_l3: "mir", t3_r3: "Dativ-Objekt",
    t3_l4: "einen Ball", t3_r4: "Akkusativ-Objekt",
    t3_q: "Mit welcher Frage findet man die adverbiale Bestimmung des Ortes?",
    t3_q_a: "Wo? / Wohin?", t3_q_b: "Wann?", t3_q_c: "Wie?", t3_q_d: "Warum?",

    // T4
    t4_title: "Umstell- & Ersatzprobe",
    t4_text: "Mit der Umstellprobe findest du heraus, welche Wörter zusammen ein Satzglied bilden (alles, was man gemeinsam vor das Prädikat stellen kann). Die Ersatzprobe hilft, den Kasus zu bestimmen.",
    t4_b1: "Umstellprobe: [Mein kleiner Bruder] [schenkt] [mir] [heute] [einen Apfel].",
    t4_b2: "[Heue] [schenkt] [mir] [mein kleiner Bruder] [einen Apfel].",
    t4_b3: "Ersatzprobe: Ersetze Pronomen durch Nomen, um den Fall zu prüfen.",
    t4_inst: "Bringe die Satzglieder in eine neue Reihenfolge (Umstellprobe)!",
    t4_h1: "Das Prädikat 'liest' muss an Position 2 bleiben.",
    t4_h2: "Stelle 'Das spannende Buch' an den Anfang.",
    t4_w21: "Das", t4_w22: "spannende", t4_w23: "Buch", t4_w24: "liest", t4_w25: "der", t4_w26: "Schüler", t4_w27: "heute.",
    t4_q: "Was findet man mit der Umstellprobe heraus?",
    t4_q_a: "Welche Wörter zusammen ein Satzglied bilden", t4_q_b: "Ob der Satz wahr ist", t4_q_c: "Die korrekte Rechtschreibung", t4_q_d: "Das Alter des Autors",

    // T5
    t5_title: "Mixed Quiz",
    t5_text: "Bist du bereit für die Analyse? Teste dein Wissen über Satzgefüge, Satzglieder und die Proben.",
    t5_b1: "Hauptsatz (V2) vs. Nebensatz (Vend).",
    t5_b2: "Satzglieder durch Umstellen finden.",
    t5_b3: "Bindewörter bestimmen die Satzart.",
    t5_inst: "Verbinde das Bindewort mit der korrekten Satzart!",
    t5_h1: "'und' und 'aber' verbinden Hauptsätze (Satzreihe).",
    t5_h2: "'dass' und 'obwohl' leiten Nebensätze ein (Satzgefüge).",
    t5_l1: "und / aber", t5_r1: "Satzreihe (HS+HS)",
    t5_l2: "weil / dass", t5_r2: "Satzgefüge (HS+NS)",
    t5_l3: "denn", t5_r3: "Satzreihe (HS+HS)",
    t5_l4: "Relativpronomen", t5_r4: "Satzgefüge (HS+NS)",
    t5_q: "Welches Satzglied ist 'wegen des Regens'?",
    t5_q_a: "Adverbiale Bestimmung des Grundes", t5_q_b: "Subjekt", t5_q_c: "Prädikat", t5_q_d: "Genitiv-Objekt",
  },
  en: {
    explorer_title: "Sentence Analysis Pro",
    t1_inst: "Compound sentence (HS+HS) or complex sentence (HS+NS)? Sort them!",
    t2_inst: "Which part is the subordinate clause? Highlight it!",
    t3_inst: "Which sentence part is the highlighted word? Connect them!",
    t4_inst: "Put the sentence parts in a new order (Rearrangement test)!",
    t5_inst: "Connect the conjunction with the correct sentence type!",
  },
  hu: {
    explorer_title: "Mondatelemző profi K8",
    t1_inst: "Mellérendelő (HS+HS) vagy alárendelő (HS+NS) mondat? Válogasd szét!",
    t1_bucket_sr: "Mellérendelő (Satzreihe)",
    t1_bucket_sg: "Alárendelő (Satzgefüge)",
    t2_inst: "Melyik rész a mellékmondat? Jelöld ki!",
    t3_inst: "Melyik mondatrész a kijelölt szó? Kösd össze!",
    t4_inst: "Tedd a mondatrészeket új sorrendbe (áthelyezési próba)!",
    t5_inst: "Kösd össze a kötőszót a megfelelő mondattípussal!",
  },
  ro: {
    explorer_title: "Expert Analiza Frazei",
    t1_inst: "Propoziție coordonată (PP+PP) sau subordonată (PP+PS)? Sortează-le!",
    t2_inst: "Care parte este propoziția subordonată? Marchează-o!",
    t3_inst: "Ce parte de propoziție este cuvântul marcat? Leagă-le!",
    t4_inst: "Așază părțile de propoziție într-o ordine nouă (testul permutării)!",
    t5_inst: "Conectează conjuncția cu tipul de propoziție corect!",
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
        { id: "sr", label: "t1_bucket_sr" },
        { id: "sg", label: "t1_bucket_sg" },
      ],
      items: [
        { text: "t1_item_sr1", bucketId: "sr" },
        { text: "t1_item_sg1", bucketId: "sg" },
        { text: "t1_item_sr2", bucketId: "sr" },
        { text: "t1_item_sg2", bucketId: "sg" },
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
    svg: () => <Topic1Svg />,
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "highlight-text",
      tokens: ["t2_w1", "t2_w2", "t2_w3", "t2_w4", "t2_w5", "t2_w6", "t2_w7"],
      correctIndices: [3, 4, 5, 6], 
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
    svg: () => <Topic3Svg />,
    bulletKeys: ["t4_b1", "t4_b2", "t4_b3"],
    interactive: {
      type: "word-order",
      words: ["t4_w21", "t4_w22", "t4_w23", "t4_w24", "t4_w25", "t4_w26", "t4_w27"],
      correctOrder: [0, 1, 2, 3, 4, 5, 6],
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
  icon: "🔍",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const SentenceAnalysisExplorer = memo(function SentenceAnalysisExplorer({
  color = "#8B5CF6",
  onDone,
  lang = "de",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={8} explorerId="deutsch_k8_sentence_analysis" color={color} lang={lang} onDone={onDone} />;
});

export default SentenceAnalysisExplorer;
