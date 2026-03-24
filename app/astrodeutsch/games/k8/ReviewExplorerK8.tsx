"use client";
// ReviewExplorerK8 — Island i7: Abschlussprüfung Klasse 8 (Final Review K8)
// Topics: 1) Redewiedergabe 2) Partizipialkonstruktionen 3) Stilmittel 4) Satzanalyse 5) Aktiv/Passiv Transformation

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSTRATIONS ──────────────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0F9FF" rx="20" />
      <g transform="translate(120, 70)">
        <path d="M -60,20 L -20,20 L -20,0 M 20,20 L 60,20 L 60,-20" fill="none" stroke="#0284C7" strokeWidth="3" />
        <text x="0" y="35" fontSize="16" fontWeight="bold" fill="#0369A1" textAnchor="middle">K8 Master</text>
        <text x="0" y="-15" fontSize="40" textAnchor="middle">🎓</text>
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Abschlussprüfung K8",

    // T1: Redewiedergabe
    t1_title: "Indirekte Rede",
    t1_text: "In der indirekten Rede nutzen wir den Konjunktiv I. Wenn dieser mit dem Indikativ gleich ist, weichen wir auf den Konjunktiv II aus.",
    t1_b1: "er sagt, er komme",
    t1_b2: "sie sagen, sie kämen (Ersatzform)",
    t1_b3: "Konjunktiv I = Distanz zum Gesagten.",
    t1_inst: "Welche Form von 'sein' ist der korrekte Konjunktiv I für die 3. Person?",
    t1_h1: "Es ist die kurze Form, die oft in Nachrichten genutzt wird.",
    t1_h2: "Die Form lautet 'sei'.",
    t1_gap_sentence: "Der Zeuge behauptet, er {gap} unschuldig.",
    t1_c1: "sei", t1_c2: "ist", t1_c3: "wäre",
    t1_q: "Wann nutzt man Konjunktiv II in der indirekten Rede?",
    t1_q_a: "Wenn Konjunktiv I und Indikativ identisch sind", t1_q_b: "Niemals", t1_q_c: "Nur bei Fragen", t1_q_d: "Immer",

    // T2: Partizipien
    t2_title: "Partizipialgruppen",
    t2_text: "Partizipien können als Adjektive vor dem Nomen stehen. Partizip I ist aktiv/gleichzeitig, Partizip II ist passiv/abgeschlossen.",
    t2_b1: "Partizip I: der lachende Junge",
    t2_b2: "Partizip II: die geöffnete Tür",
    t2_b3: "Erweiterte Attribute: der laut lachende Junge.",
    t2_inst: "Welches Partizip passt hier? 'Das ___ Auto muss in die Werkstatt.'",
    t2_h1: "Das Auto wurde beschädigt (passiv/abgeschlossen).",
    t2_h2: "Wir brauchen das Partizip II von 'beschädigen'.",
    t2_gap_sentence2: "Das {gap} Auto steht am Straßenrand.",
    t2_c21: "beschädigte", t2_c22: "beschädigende", t2_c23: "beschädigen",
    t2_q: "Was bedeutet 'die singende Frau'?",
    t2_q_a: "Die Frau, die gerade singt", t2_q_b: "Die Frau, die gesungen wurde", t2_q_c: "Die Frau, die singen wird", t2_q_d: "Die Frau, die nicht singt",

    // T3: Stilmittel
    t3_title: "Stilmittel-Check",
    t3_text: "Klimax, Antithese, Ironie oder Hyperbel? Diese Mittel verleihen Texten Tiefe.",
    t3_b1: "Klimax: Steigerung (Tage, Wochen, Jahre).",
    t3_b2: "Antithese: Gegensatz (Himmel und Hölle).",
    t3_b3: "Hyperbel: Übertreibung (Bärenhunger).",
    t3_inst: "Welches Stilmittel liegt vor? Verbinde!",
    t3_h1: "'Todmüde' ist eine starke Übertreibung.",
    t3_h2: "'Ich kam, sah und siegte' ist eine Steigerung.",
    t3_l1: "todmüde", t3_r1: "Hyperbel",
    t3_l2: "gut, besser, am besten", t3_r2: "Klimax",
    t3_l3: "Jung und Alt", t3_r3: "Antithese",
    t3_l4: "Toll gemacht! (bei Fehler)", t3_r4: "Ironie",
    t3_q: "Was ist ein 'Euphemismus'?",
    t3_q_a: "Eine Beschönigung", t3_q_b: "Eine Beleidigung", t3_q_c: "Eine Frage", t3_q_d: "Ein Reim",

    // T4: Satzanalyse
    t4_title: "Satzbau-Analyse",
    t4_text: "Satzgefüge (HS+NS) oder Satzreihe (HS+HS)? Kennst du die Satzglieder?",
    t4_b1: "Satzgefüge: Er liest, weil er Zeit hat.",
    t4_b2: "Satzreihe: Er liest und er hört Musik.",
    t4_b3: "Subjekt, Prädikat, Objekt, Adverbiale.",
    t4_inst: "Ist es ein Satzgefüge oder eine Satzreihe? Sortiere!",
    t4_h1: "'weil' leitet einen Nebensatz ein (Gefüge).",
    t4_h2: "'und' verbindet Hauptsätze (Reihe).",
    t4_bucket_sr: "Satzreihe (HS+HS)",
    t4_bucket_sg: "Satzgefüge (HS+NS)",
    t4_item_sr1: "Ich kam und sah.", t4_item_sr2: "Er spielt, aber sie liest.",
    t4_item_sg1: "Ich kam, damit ich helfe.", t4_item_sg2: "Der Mann, den ich sah.",
    t4_q: "Wo steht das Verb im Nebensatz?",
    t4_q_a: "Ganz am Ende", t4_q_b: "An Position 2", t4_q_c: "Am Anfang", t4_q_d: "Hinter dem Subjekt",

    // T5: Aktiv/Passiv
    t5_title: "Transformation",
    t5_text: "Die Verwandlung von Aktiv in Passiv ist die Königsdisziplin. Achte auf den Täter (von/durch)!",
    t5_b1: "Aktiv: Sie liest das Buch.",
    t5_b2: "Passiv: Das Buch wird gelesen.",
    t5_b3: "Passiversatz: Das Buch lässt sich lesen.",
    t5_inst: "Wandle den Satz ins Passiv um!",
    t5_h1: "Das Objekt 'den Film' wird zum Subjekt 'Der Film'.",
    t5_h2: "Hilfsverb 'wird' + Partizip II 'gesehen'.",
    t5_w1: "Der", t5_w2: "Film", t5_w3: "wird", t5_w4: "heute", t5_w5: "gesehen.",
    t5_q: "Welche Präposition nutzt man für eine unpersönliche Ursache (z.B. Wind)?",
    t5_q_a: "durch", t5_q_b: "von", t5_q_c: "mit", t5_q_d: "zu",
  },
  en: {
    explorer_title: "Final Exam K8",
    t1_inst: "Which form of 'sein' is the correct Konjunktiv I for the 3rd person?",
    t2_inst: "Which participle fits here?",
    t3_inst: "Which stylistic device is present? Connect them!",
    t4_inst: "Is it a complex or a compound sentence? Sort them!",
    t5_inst: "Transform the sentence into passive!",
  },
  hu: {
    explorer_title: "Záróvizsga K8",
    t1_inst: "A 'sein' melyik alakja a helyes Konjunktiv I (E/3)?",
    t2_inst: "Melyik melléknévi igenév illik ide?",
    t3_inst: "Melyik stilisztikai eszközt látod? Kösd össze!",
    t4_inst: "Mellérendelő (Satzreihe) vagy Alárendelő (Satzgefüge)? Válogasd szét!",
    t5_inst: "Alakítsd át a mondatot szenvedő szerkezetbe (Passiv)!",
  },
  ro: {
    explorer_title: "Examen Final K8",
    t1_inst: "Care formă a lui 'sein' este corectul Konjunktiv I pentru persoana a 3-a?",
    t2_inst: "Ce participiu se potrivește aici?",
    t3_inst: "Ce figură de stil este prezentă? Leagă-le!",
    t4_inst: "Este o propoziție coordonată sau subordonată? Sortează-le!",
    t5_inst: "Transformă propoziția la pasiv!",
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
      type: "gap-fill",
      sentence: "t2_gap_sentence2",
      choices: ["t2_c21", "t2_c22", "t2_c23"],
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
      type: "drag-to-bucket",
      buckets: [
        { id: "sr", label: "t4_bucket_sr" },
        { id: "sg", label: "t4_bucket_sg" },
      ],
      items: [
        { text: "t4_item_sr1", bucketId: "sr" },
        { text: "t4_item_sg1", bucketId: "sg" },
        { text: "t4_item_sr2", bucketId: "sr" },
        { text: "t4_item_sg2", bucketId: "sg" },
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
      type: "word-order",
      words: ["t5_w1", "t5_w2", "t5_w3", "t5_w4", "t5_w5"], // Der Film wird heute gesehen.
      correctOrder: [0, 1, 2, 3, 4],
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
  icon: "🏆",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const ReviewExplorerK8 = memo(function ReviewExplorerK8({
  color = "#6366F1",
  onDone,
  lang = "de",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={8} explorerId="deutsch_k8_final_review" color={color} lang={lang} onDone={onDone} />;
});

export default ReviewExplorerK8;
