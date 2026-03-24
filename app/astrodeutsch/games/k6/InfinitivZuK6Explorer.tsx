"use client";
// InfinitivZuK6Explorer — Island i3: Infinitiv mit „zu" (K6)
// Topics: 1) Wann braucht man „zu"? 2) Verben ohne „zu" 3) Um/Ohne/Anstatt...zu 4) Kommaregeln 5) Gemischtes Quiz

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSTRATIONS ──────────────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0FDFA" rx="20" />
      <g transform="translate(120, 70)">
        <text x="0" y="-30" fontSize="16" fontWeight="bold" fill="#0D9488" textAnchor="middle">Infinitiv-Konstruktion</text>
        <rect x="-60" y="-10" width="40" height="30" rx="4" fill="#99F6E4" stroke="#0D9488" strokeWidth="2" />
        <text x="-40" y="10" fontSize="14" fontWeight="bold" fill="#0F766E" textAnchor="middle">zu</text>
        <text x="0" y="10" fontSize="18" fill="#0D9488" textAnchor="middle">+</text>
        <rect x="20" y="-10" width="60" height="30" rx="4" fill="#99F6E4" stroke="#0D9488" strokeWidth="2" />
        <text x="50" y="10" fontSize="14" fontWeight="bold" fill="#0F766E" textAnchor="middle">Verb</text>
        <text x="0" y="45" fontSize="10" fill="#14B8A6" textAnchor="middle">Ich hoffe, dich zu sehen.</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FFF1F2" rx="20" />
      <g transform="translate(120, 70)">
        <text x="0" y="-35" fontSize="14" fontWeight="bold" fill="#BE123C" textAnchor="middle">Kein „zu“ bei:</text>
        <text x="-60" y="0" fontSize="12" fill="#E11D48" textAnchor="middle">können</text>
        <text x="0" y="0" fontSize="12" fill="#E11D48" textAnchor="middle">müssen</text>
        <text x="60" y="0" fontSize="12" fill="#E11D48" textAnchor="middle">dürfen</text>
        <path d="M -80,15 L 80,15" stroke="#FDA4AF" strokeWidth="4" strokeLinecap="round" />
        <text x="0" y="35" fontSize="12" fontWeight="black" fill="#9F1239" textAnchor="middle">MODALVERBEN</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0F9FF" rx="20" />
      <g transform="translate(120, 70)">
        <path d="M -90,0 L -50,0 M -50,0 L -50,30" fill="none" stroke="#0EA5E9" strokeWidth="2" />
        <text x="-70" y="-10" fontSize="12" fontWeight="bold" fill="#0369A1" textAnchor="middle">um ... zu</text>
        <text x="0" y="-10" fontSize="12" fontWeight="bold" fill="#0369A1" textAnchor="middle">ohne ... zu</text>
        <text x="70" y="-10" fontSize="12" fontWeight="bold" fill="#0369A1" textAnchor="middle">statt ... zu</text>
        <text x="0" y="30" fontSize="10" fill="#0284C7" textAnchor="middle">Sinn-Verbindungen</text>
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Infinitiv mit „zu“",
    // T1
    t1_title: "Wann braucht man „zu“?",
    t1_text: "In vielen Sätzen mit zwei Verben braucht das zweite Verb ein 'zu'. Es steht meist am Ende des Satzes direkt vor dem Infinitiv. Bei trennbaren Verben rutscht das 'zu' in die Mitte.",
    t1_b1: "Beispiel: Ich versuche, die Aufgabe zu lösen.",
    t1_b2: "Trennbar: ... auf-zu-stehen.",
    t1_b3: "Das 'zu' verbindet den Hauptsatz mit dem Infinitiv.",
    t1_inst: "Welche Form ist korrekt? Wähle aus!",
    t1_h1: "Es geht um das Verb 'lernen'.",
    t1_h2: "Wir brauchen 'zu' + Grundform: 'zu lernen'.",
    t1_gap_sentence: "Es ist wichtig, jeden Tag {gap}.",
    t1_c1: "zu lernen", t1_c2: "lernen", t1_c3: "gelernt",
    t1_q: "Wo steht das 'zu' bei einem trennbaren Verb (z.B. aufräumen)?",
    t1_q_a: "In der Mitte (aufzuräumen)", t1_q_b: "Davor (zu aufräumen)", t1_q_c: "Danach (aufräumen zu)", t1_q_d: "Es gibt kein 'zu'",

    // T2
    t2_title: "Verben ohne „zu“",
    t2_text: "Einige Verben sind 'stark' genug und brauchen kein 'zu' für das zweite Verb. Das sind vor allem die Modalverben sowie 'lassen', 'sehen' und 'hören'.",
    t2_b1: "Modalverben: ich kann, muss, darf, soll, will...",
    t2_b2: "Beispiel: Ich KANN schwimmen. (NICHT: zu schwimmen)",
    t2_b3: "Wahrnehmung: Ich höre ihn singen.",
    t2_inst: "Braucht dieser Satz ein 'zu'? Sortiere die Sätze!",
    t2_h1: "Modalverben (können, müssen) brauchen NIEMALS ein 'zu'.",
    t2_h2: "Verben wie 'hoffen' oder 'versuchen' brauchen ein 'zu'.",
    t2_bucket_mit: "mit „zu“",
    t2_bucket_ohne: "ohne „zu“",
    t2_item_m1: "Ich hoffe, dich zu sehen.", t2_item_m2: "Er versucht zu schlafen.",
    t2_item_o1: "Ich kann dich sehen.", t2_item_o2: "Wir müssen gehen.",
    t1_item_o3: "Lass mich schlafen.",
    t2_q: "Bei welcher Verb-Gruppe lassen wir das 'zu' immer weg?",
    t2_q_a: "Modalverben", t2_q_b: "Trennbare Verben", t2_q_c: "Verben der Hoffnung", t2_q_d: "Starke Verben",

    // T3
    t3_title: "Um / Ohne / Anstatt ... zu",
    t3_text: "Es gibt feste Verbindungen, die einen Zweck vagy eine Art und Weise ausdrücken. Sie leiten eigene Infinitivsätze ein.",
    t3_b1: "um ... zu: Zweck (Warum? ➔ um zu gewinnen)",
    t3_b2: "ohne ... zu: Fehlendes (ohne zu fragen)",
    t3_b3: "statt ... zu: Alternative (statt zu lernen)",
    t3_inst: "Welches Bindewort passt zum Zweck?",
    t3_h1: "Ich lerne viel, ___ gute Noten zu bekommen.",
    t3_h2: "Hier wird ein Ziel/Zweck angegeben: 'um'.",
    t3_gap_sentence2: "Ich lerne viel, {gap} gute Noten zu bekommen.",
    t3_c1: "um", t3_c2: "ohne", t3_c3: "statt",
    t3_q: "Was drückt die Verbindung 'um ... zu' aus?",
    t3_q_a: "Einen Zweck oder ein Ziel", t3_q_b: "Einen Gegensatz", t3_q_c: "Eine Zeitangabe", t3_q_d: "Einen Ort",

    // T4
    t4_title: "Kommaregeln",
    t4_text: "Infinitivgruppen (Infinitiv + zu + weitere Wörter) werden oft durch ein Komma vom Hauptsatz getrennt. Bei um/ohne/statt/anstatt ist das Komma PFLICHT.",
    t4_b1: "Pflicht: Er geht, OHNE ein Wort zu sagen.",
    t4_b2: "Oft optional: Ich versuche(,) zu helfen.",
    t4_b3: "Tipp: Setze das Komma immer, dann bist du sicher!",
    t4_inst: "Wo muss das Komma hin? Markiere es!",
    t4_h1: "Suche die Stelle, an der die Infinitivgruppe ('um...') beginnt.",
    t4_h2: "Das Komma trennt den Hauptsatz vom 'um'-Satz.",
    t4_w1: "Wir", t4_w2: "laufen", t4_w3: "schnell", t4_w4: ",", t4_w5: "um", t4_w6: "den", t4_w7: "Bus", t4_w8: "zu", t4_w9: "bekommen.",
    t4_q: "Wann ist ein Komma bei einer Infinitivgruppe zwingend vorgeschrieben?",
    t4_q_a: "Bei Sätzen mit 'um', 'ohne' oder 'statt'.", t4_q_b: "Niemals.", t4_q_c: "Nur bei sehr kurzen Sätzen.", t4_q_d: "Immer vor dem Wort 'zu'.",

    // T5
    t5_title: "Gemischtes Quiz",
    t5_text: "Kannst du alles kombinieren? Teste dein Wissen über die Stellung von 'zu', Modalverben und Bindewörter.",
    t5_b1: "zu + Infinitiv.",
    t5_b2: "Kein zu bei Modalverben.",
    t5_b3: "Komma bei Infinitivgruppen beachten.",
    t5_inst: "Bringe den Satz in die richtige Reihenfolge!",
    t5_h1: "Beginne mit dem Hauptsatz: 'Ich habe vergessen'.",
    t5_h2: "Dann kommt das Komma und die Infinitivgruppe: 'mein Buch mitzubringen.'",
    t5_w21: "Ich", t5_w22: "habe", t5_w23: "vergessen,", t5_w24: "mein", t5_w25: "Buch", t5_w26: "mitzubringen.",
    t5_q: "Welcher Satz ist richtig?",
    t5_q_a: "Ich versuche, das Auto zu reparieren.", t5_q_b: "Ich versuche, das Auto reparieren zu.", t5_q_c: "Ich kann das Auto zu reparieren.", t5_q_d: "Ich versuche das Auto zu reparieren",
  },
  en: {
    explorer_title: "Infinitive with 'zu'",
    t1_inst: "Which form is correct? Choose!",
    t2_inst: "Does this sentence need 'zu'? Sort them!",
    t2_bucket_mit: "with 'zu'",
    t2_bucket_ohne: "without 'zu'",
    t3_inst: "Which conjunction fits for the purpose?",
    t4_inst: "Where does the comma go? Mark it!",
    t5_inst: "Put the sentence in the correct order!",
  },
  hu: {
    explorer_title: "Főnévi igenév 'zu'-val",
    t1_inst: "Melyik alak a helyes? Válaszd ki!",
    t2_inst: "Kell 'zu' ebbe a mondatba? Válogasd szét!",
    t2_bucket_mit: "'zu'-val",
    t2_bucket_ohne: "'zu' nélkül",
    t3_inst: "Melyik kötőszó illik a célhoz?",
    t4_inst: "Hová kell a vessző? Jelöld ki!",
    t5_inst: "Tedd a mondatot a helyes sorrendbe!",
  },
  ro: {
    explorer_title: "Infinitivul cu „zu”",
    t1_inst: "Care formă este corectă? Alege!",
    t2_inst: "Are nevoie această propoziție de „zu”? Sortează-le!",
    t2_bucket_mit: "cu „zu”",
    t2_bucket_ohne: "fără „zu”",
    t3_inst: "Care conjuncție se potrivește scopului?",
    t4_inst: "Unde trebuie pusă virgula? Marchează locul!",
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
    svg: () => <Topic2Svg />,
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [
        { id: "mit", label: "t2_bucket_mit" },
        { id: "ohne", label: "t2_bucket_ohne" },
      ],
      items: [
        { text: "t2_item_m1", bucketId: "mit" },
        { text: "t2_item_o1", bucketId: "ohne" },
        { text: "t2_item_m2", bucketId: "mit" },
        { text: "t2_item_o2", bucketId: "ohne" },
        { text: "t1_item_o3", bucketId: "ohne" },
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
      type: "highlight-text",
      tokens: ["t4_w1", "t4_w2", "t4_w3", "t4_w4", "t4_w5", "t4_w6", "t4_w7", "t4_w8", "t4_w9"],
      correctIndices: [3],
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
      type: "word-order",
      words: ["t5_w21", "t5_w22", "t5_w23", "t5_w24", "t5_w25", "t5_w26"],
      correctOrder: [0, 1, 2, 3, 4, 5],
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

const InfinitivZuK6Explorer = memo(function InfinitivZuK6Explorer({
  color = "#0D9488",
  onDone,
  lang = "de",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={6} explorerId="deutsch_k6_infinitiv_zu" color={color} lang={lang} onDone={onDone} />;
});

export default InfinitivZuK6Explorer;
