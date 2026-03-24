"use client";
// PastSpeechExplorerK3 — Island i6: Vergangenheit & Direkte Rede (Past & Direct Speech)
// Topics: 1) Präteritum (Schriftliche Vergangenheit) 2) Direkte Rede (Satzzeichen) 3) Redebegleitsatz

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSTRATIONS ──────────────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0FDF4" rx="20" />
      <g transform="translate(120, 70)">
        <text x="0" y="-30" fontSize="16" fontWeight="bold" fill="#166534" textAnchor="middle">Märchen-Vergangenheit</text>
        <rect x="-80" y="-10" width="160" height="40" rx="8" fill="#BBF7D0" stroke="#15803D" strokeWidth="2" />
        <text x="0" y="15" fontSize="14" fontWeight="black" fill="#166534" textAnchor="middle">Es war einmal...</text>
        <text x="0" y="45" fontSize="12" fill="#15803D" textAnchor="middle">Präteritum (war, lachte, lief)</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FFF7ED" rx="20" />
      <g transform="translate(120, 70)">
        <path d="M -80,-20 L 80,-20 L 80,20 L -80,20 L -80,40 L -60,20 Z" fill="#FFEDD5" stroke="#F97316" strokeWidth="2" />
        <text x="0" y="5" fontSize="14" fontWeight="bold" fill="#9A3412" textAnchor="middle">„Hallo!“</text>
        <text x="0" y="45" fontSize="12" fill="#C2410C" textAnchor="middle">Anführungszeichen: „ ... “</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#EEF2FF" rx="20" />
      <g transform="translate(120, 70)">
        <rect x="-100" y="-15" width="90" height="30" rx="4" fill="#C7D2FE" />
        <text x="-55" y="5" fontSize="10" fontWeight="bold" fill="#3730A3" textAnchor="middle">Begleitsatz</text>
        
        <text x="5" y="5" fontSize="18" fontWeight="bold" fill="#4338CA" textAnchor="middle">:</text>
        
        <rect x="20" y="-15" width="80" height="30" rx="4" fill="#A5B4FC" />
        <text x="60" y="5" fontSize="10" fontWeight="bold" fill="#312E81" textAnchor="middle">Direkte Rede</text>
        
        <text x="0" y="40" fontSize="12" fill="#3730A3" textAnchor="middle">Er sagt: „Ich komme.“</text>
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Past & Direkte Rede",
    // Topic 1
    t1_title: "Das Präteritum",
    t1_text: "Das Präteritum ist die Vergangenheit, die wir vor allem beim Schreiben benutzen (in Büchern, Zeitungen oder Märchen). Wir ragen oft nur ein Verb.",
    t1_b1: "Präsens: Ich lache.",
    t1_b2: "Präteritum: Ich lachte.",
    t1_b3: "Besonders wichtig: sein ➔ war, haben ➔ hatte.",
    t1_inst: "Welches Verb steht im Präteritum? Sortiere sie!",
    t1_h1: "Suche nach Wörtern, die wie in einem Märchen klingen.",
    t1_h2: "lachte, war und rannte sind im Präteritum.",
    t1_bucket_praesens: "Präsens (Jetzt)",
    t1_bucket_praeteritum: "Präteritum (Buch)",
    t1_item_lache: "lache", t1_item_lachte: "lachte",
    t1_item_bin: "bin", t1_item_war: "war",
    t1_item_rennt: "rennt", t1_item_rannte: "rannte",
    t1_q: "Wie heißt das Präteritum von 'ich bin'?",
    t1_q_a: "ich war", t1_q_b: "ich bin gewesen", t1_q_c: "ich werde sein", t1_q_d: "ich binnte",

    // Topic 2
    t2_title: "Die direkte Rede",
    t2_text: "Wenn wir genau aufschreiben, was jemand sagt, benutzen wir die direkte Rede. Dafür brauchen wir Anführungszeichen („ unten, “ oben).",
    t2_b1: "Vorne: „ (Gänsefüßchen unten)",
    t2_b2: "Hinten: “ (Gänsefüßchen oben)",
    t2_b3: "Alles, was gesagt wird, steht dazwischen.",
    t2_inst: "Welche Satzzeichen fehlen? „Ich komme morgen{gap}",
    t2_h1: "Die wörtliche Rede endet nach dem Wort morgen.",
    t2_h2: "Wir brauchen das schließende Anführungszeichen oben: “",
    t2_gap_sentence: "„Ich komme morgen{gap}",
    t2_c1: "“", t2_c2: "„", t2_c3: ":",
    t2_q: "Wo stehen die ersten Anführungszeichen bei der direkten Rede?",
    t2_q_a: "Unten am Wortanfang", t2_q_b: "Oben am Wortanfang", t2_q_c: "Über dem ersten Buchstaben", t2_q_d: "Gar nicht",

    // Topic 3
    t3_title: "Der Begleitsatz",
    t3_text: "Der Begleitsatz sagt uns, WER spricht (z.B. Tom sagt). Wenn er vorne steht, brauchen wir danach einen Doppelpunkt (:). Danach beginnt die direkte Rede groß.",
    t3_b1: "Tom sagt: „Ich habe Hunger.“",
    t3_b2: "Achte auf den Doppelpunkt!",
    t3_b3: "Das erste Wort der Rede ist GROSS.",
    t3_inst: "Bringe den Satz mit direkter Rede in die richtige Reihenfolge!",
    t3_h1: "Beginne mit dem Begleitsatz (wer spricht).",
    t3_h2: "Vergiss den Doppelpunkt nach 'sagt' nicht.",
    t3_w1: "Leo", t3_w2: "sagt:", t3_w3: "„Ich", t3_w4: "spiele", t3_w5: "gern", t3_w6: "Fußball.“",
    t3_q: "Welches Satzzeichen steht nach dem Begleitsatz (z.B. Er ruft...), wenn die Rede danach kommt?",
    t3_q_a: "Doppelpunkt (:)", t3_q_b: "Komma (,)", t3_q_c: "Punkt (.)", t3_q_d: "Fragezeichen (?)",
  },
  en: {
    explorer_title: "Past & Direct Speech",
    t1_inst: "Which verb is in the simple past (Präteritum)? Sort them!",
    t1_h1: "Look for words that sound like they're from a fairy tale.",
    t1_h2: "lachte, war, and rannte are simple past.",
    t1_bucket_praesens: "Present",
    t1_bucket_praeteritum: "Simple Past",
    t2_inst: "Which punctuation marks are missing?",
    t2_h1: "The spoken sentence ends after the word 'morgen'.",
    t2_h2: "We need the closing quotation mark at the top: “",
    t3_inst: "Put the sentence with direct speech in the correct order!",
    t3_h1: "Start with the 'Begleitsatz' (who is speaking).",
    t3_h2: "Don't forget the colon after 'sagt:'.",
  },
  hu: {
    explorer_title: "Múlt idő és Egyenes beszéd",
    t1_inst: "Melyik ige van elbeszélő múltban (Präteritum)? Válogasd szét őket!",
    t1_h1: "Keress olyan szavakat, amik úgy hangzanak, mint egy mesében.",
    t1_h2: "lachte, war és rannte az elbeszélő múlt.",
    t1_bucket_praesens: "Jelen idő",
    t1_bucket_praeteritum: "Elbeszélő múlt",
    t2_inst: "Melyik írásjel hiányzik?",
    t2_h1: "Az idézett mondat a 'morgen' szó után ér véget.",
    t2_h2: "A felső idézőjelre (”) van szükségünk.",
    t3_inst: "Tedd sorba az egyenes beszédet tartalmazó mondatot!",
    t3_h1: "Kezdd a kísérőmondattal (aki beszél).",
    t3_h2: "Ne felejtsd el a kettőspontot a 'sagt:' után.",
  },
  ro: {
    explorer_title: "Trecutul și Vorbirea directă",
    t1_inst: "Care verb este la trecutul simplu (Präteritum)? Sortează-le!",
    t1_h1: "Caută cuvinte care sună ca dintr-o poveste.",
    t1_h2: "lachte, war și rannte sunt la Präteritum.",
    t1_bucket_praesens: "Prezent",
    t1_bucket_praeteritum: "Trecut simplu",
    t2_inst: "Ce semne de punctuație lipsesc?",
    t2_h1: "Propoziția vorbită se termină după cuvântul 'morgen'.",
    t2_h2: "Avem nevoie de ghilimelele de închidere sus: “",
    t3_inst: "Așază propoziția cu vorbire directă în ordinea corectă!",
    t3_h1: "Începe cu fraza de însoțire (cine vorbește).",
    t3_h2: "Nu uita de două puncte după 'sagt:'.",
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
        { id: "praesens", label: "t1_bucket_praesens" },
        { id: "praeteritum", label: "t1_bucket_praeteritum" },
      ],
      items: [
        { text: "t1_item_lache", bucketId: "praesens" },
        { text: "t1_item_lachte", bucketId: "praeteritum" },
        { text: "t1_item_bin", bucketId: "praesens" },
        { text: "t1_item_war", bucketId: "praeteritum" },
        { text: "t1_item_rennt", bucketId: "praesens" },
        { text: "t1_item_rannte", bucketId: "praeteritum" },
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
      choices: ["t2_c1", "t2_c2", "t2_c3"], // “, „, :
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
      words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6"], // Leo sagt: „Ich spiele gern Fußball.“
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

const PastSpeechExplorerK3 = memo(function PastSpeechExplorerK3({
  color = "#10B981",
  onDone,
  lang = "de",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={3} explorerId="deutsch_k3_pastspeech" color={color} lang={lang} onDone={onDone} />;
});

export default PastSpeechExplorerK3;
