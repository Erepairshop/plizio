"use client";
// PictureWordExplorerK1 — Island i6: Farben & Wörter (Colors & Words)
// Topics: 1) Colors (Farben)  2) Numbers as words (Zahlen)  3) Daily Vocabulary

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSTRATIONS ──────────────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="picGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FDE047" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#picGrad1)" rx="20" />
      <g transform="translate(120, 70)">
        <circle cx="-60" cy="-10" r="20" fill="#EF4444" />
        <text x="-60" y="25" fontSize="14" fontWeight="bold" fill="#B91C1C" textAnchor="middle">rot</text>
        
        <circle cx="0" cy="-10" r="20" fill="#3B82F6" />
        <text x="0" y="25" fontSize="14" fontWeight="bold" fill="#1D4ED8" textAnchor="middle">blau</text>
        
        <circle cx="60" cy="-10" r="20" fill="#10B981" />
        <text x="60" y="25" fontSize="14" fontWeight="bold" fill="#047857" textAnchor="middle">grün</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F3E8FF" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-40" y="-15" fontSize="20" fontWeight="bold" fill="#9333EA" textAnchor="middle">1 = eins</text>
        <text x="40" y="-15" fontSize="20" fontWeight="bold" fill="#9333EA" textAnchor="middle">2 = zwei</text>
        <text x="0" y="25" fontSize="20" fontWeight="bold" fill="#7E22CE" textAnchor="middle">3 = drei</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="picGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFEDD5" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#FED7AA" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#picGrad3)" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-50" y="-5" fontSize="40" textAnchor="middle">🪑</text>
        <text x="-50" y="25" fontSize="14" fontWeight="bold" fill="#C2410C" textAnchor="middle">der Stuhl</text>
        
        <text x="50" y="-5" fontSize="40" textAnchor="middle">🛏️</text>
        <text x="50" y="25" fontSize="14" fontWeight="bold" fill="#C2410C" textAnchor="middle">das Bett</text>
      </g>
    </svg>
  );
});

// ─── LABELS (4 languages) ────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Farben & Wörter",

    // Topic 1
    t1_title: "Die Farben",
    t1_text: "Die Welt ist bunt! Im Deutschen gibt es viele Farben: rot (wie eine Erdbeere), blau (wie der Himmel), grün (wie Gras) und gelb (wie die Sonne).",
    t1_b1: "rot 🔴, blau 🔵",
    t1_b2: "grün 🟢, gelb 🟡",
    t1_b3: "Farben werden oft klein geschrieben",
    t1_inst: "Welche Farbe ist das? Verbinde das Wort mit dem richtigen Punkt!",
    t1_h1: "Lies das Wort: r-o-t ist rot.",
    t1_h2: "Verbinde 'rot' mit 🔴, 'blau' mit 🔵.",
    t1_l1: "rot", t1_r1: "🔴",
    t1_l2: "blau", t1_r2: "🔵",
    t1_l3: "grün", t1_r3: "🟢",
    t1_l4: "gelb", t1_r4: "🟡",
    t1_q: "Welche Farbe hat eine Banane?",
    t1_q_a: "gelb", t1_q_b: "blau", t1_q_c: "grün", t1_q_d: "rot",

    // Topic 2
    t2_title: "Zahlen als Wörter",
    t2_text: "Wir können Zahlen nicht nur als Ziffern schreiben (1, 2, 3), sondern auch als Wörter: eins, zwei, drei, vier, fünf... und so weiter bis zehn!",
    t2_b1: "eins (1), zwei (2), drei (3)",
    t2_b2: "vier (4), fünf (5)",
    t2_b3: "sechs (6), sieben (7), acht (8)",
    t2_inst: "Ist die Zahl klein (1-5) oder groß (6-10)? Sortiere die Wörter!",
    t2_h1: "Zähle im Kopf: eins, zwei, drei, vier, fünf sind klein.",
    t2_h2: "sechs, sieben, acht, neun, zehn sind groß.",
    t2_bucket_klein: "1 bis 5",
    t2_bucket_gross: "6 bis 10",
    t2_item_zwei: "zwei (2)", t2_item_vier: "vier (4)", t2_item_fuenf: "fünf (5)",
    t2_item_acht: "acht (8)", t2_item_zehn: "zehn (10)", t2_item_sieben: "sieben (7)",
    t2_q: "Wie schreibt man die Zahl 3?",
    t2_q_a: "drei", t2_q_b: "zwei", t2_q_c: "vier", t2_q_d: "eins",

    // Topic 3
    t3_title: "Wörter im Alltag",
    t3_text: "Überall um uns herum sind Dinge! Der Tisch, an dem wir essen. Das Bett, in dem wir schlafen. Der Stuhl, auf dem wir sitzen.",
    t3_b1: "der Tisch (zum Essen)",
    t3_b2: "der Stuhl (zum Sitzen)",
    t3_b3: "das Bett (zum Schlafen)",
    t3_inst: "Welches Wort fehlt im Satz? 'Wir essen an dem ___.'",
    t3_h1: "Wo isst man normalerweise?",
    t3_h2: "Man isst am Tisch. Das fehlende Wort ist 'Tisch'.",
    t3_gap_text: "Wir essen an dem {gap}.",
    t3_opt_tisch: "Tisch", t3_opt_bett: "Bett", t3_opt_stuhl: "Stuhl",
    t3_q: "Worauf sitzt du?",
    t3_q_a: "Auf dem Stuhl", t3_q_b: "Auf dem Tisch", t3_q_c: "Auf dem Buch", t3_q_d: "Auf dem Fenster",
  },
  en: {
    explorer_title: "Colors & Words",
    t1_title: "The Colors",
    t1_text: "The world is colorful! In German: rot (red), blau (blue), grün (green), and gelb (yellow).",
    t1_b1: "rot 🔴, blau 🔵",
    t1_b2: "grün 🟢, gelb 🟡",
    t1_b3: "Color words are usually lowercase",
    t1_inst: "Match the color word to the correct dot!",
    t1_h1: "Read the word: r-o-t is red.",
    t1_h2: "Match 'rot' with 🔴, 'blau' with 🔵.",
    t1_l1: "rot", t1_r1: "🔴",
    t1_l2: "blau", t1_r2: "🔵",
    t1_l3: "grün", t1_r3: "🟢",
    t1_l4: "gelb", t1_r4: "🟡",
    t1_q: "What color is a banana in German?",
    t1_q_a: "gelb", t1_q_b: "blau", t1_q_c: "grün", t1_q_d: "rot",

    t2_title: "Numbers as Words",
    t2_text: "We can write numbers as words: eins (1), zwei (2), drei (3), vier (4), fünf (5)... up to zehn (10)!",
    t2_b1: "eins (1), zwei (2), drei (3)",
    t2_b2: "vier (4), fünf (5)",
    t2_b3: "sechs (6), sieben (7), acht (8)",
    t2_inst: "Is the number small (1-5) or big (6-10)? Sort them!",
    t2_h1: "eins, zwei, drei, vier, fünf are small.",
    t2_h2: "sechs, sieben, acht, neun, zehn are big.",
    t2_bucket_klein: "1 to 5",
    t2_bucket_gross: "6 to 10",
    t2_item_zwei: "zwei (2)", t2_item_vier: "vier (4)", t2_item_fuenf: "fünf (5)",
    t2_item_acht: "acht (8)", t2_item_zehn: "zehn (10)", t2_item_sieben: "sieben (7)",
    t2_q: "How do you spell the number 3?",
    t2_q_a: "drei", t2_q_b: "zwei", t2_q_c: "vier", t2_q_d: "eins",

    t3_title: "Everyday Words",
    t3_text: "Things are all around us! Der Tisch (table), das Bett (bed), der Stuhl (chair).",
    t3_b1: "der Tisch (table)",
    t3_b2: "der Stuhl (chair)",
    t3_b3: "das Bett (bed)",
    t3_inst: "Which word is missing? 'Wir essen an dem ___.' (We eat at the ___.)",
    t3_h1: "Where do you eat?",
    t3_h2: "You eat at the table (Tisch).",
    t3_gap_text: "Wir essen an dem {gap}.",
    t3_opt_tisch: "Tisch", t3_opt_bett: "Bett", t3_opt_stuhl: "Stuhl",
    t3_q: "What do you sit on?",
    t3_q_a: "Auf dem Stuhl (chair)", t3_q_b: "Auf dem Tisch", t3_q_c: "Auf dem Buch", t3_q_d: "Auf dem Fenster",
  },
  hu: {
    explorer_title: "Színek és Szavak",
    t1_title: "A színek",
    t1_text: "A világ színes! A németben: rot (piros), blau (kék), grün (zöld) és gelb (sárga).",
    t1_b1: "rot 🔴, blau 🔵",
    t1_b2: "grün 🟢, gelb 🟡",
    t1_b3: "A színeket általában kisbetűvel írjuk",
    t1_inst: "Milyen színű? Kösd össze a szót a megfelelő pöttyel!",
    t1_h1: "Olvasd el a szót: a r-o-t pirosat jelent.",
    t1_h2: "Kösd a 'rot'-ot a 🔴-hoz, a 'blau'-t a 🔵-hoz.",
    t1_l1: "rot", t1_r1: "🔴",
    t1_l2: "blau", t1_r2: "🔵",
    t1_l3: "grün", t1_r3: "🟢",
    t1_l4: "gelb", t1_r4: "🟡",
    t1_q: "Milyen színű egy banán németül?",
    t1_q_a: "gelb", t1_q_b: "blau", t1_q_c: "grün", t1_q_d: "rot",

    t2_title: "Számok betűkkel",
    t2_text: "A számokat le is írhatjuk: eins (1), zwei (2), drei (3), vier (4), fünf (5)... egészen zehn-ig (10)!",
    t2_b1: "eins (1), zwei (2), drei (3)",
    t2_b2: "vier (4), fünf (5)",
    t2_b3: "sechs (6), sieben (7), acht (8)",
    t2_inst: "Kisebb (1-5) vagy nagyobb (6-10) a szám? Válogasd szét őket!",
    t2_h1: "Az eins, zwei, drei, vier, fünf a kicsik.",
    t2_h2: "A sechs, sieben, acht, neun, zehn a nagyok.",
    t2_bucket_klein: "1-től 5-ig",
    t2_bucket_gross: "6-tól 10-ig",
    t2_item_zwei: "zwei (2)", t2_item_vier: "vier (4)", t2_item_fuenf: "fünf (5)",
    t2_item_acht: "acht (8)", t2_item_zehn: "zehn (10)", t2_item_sieben: "sieben (7)",
    t2_q: "Hogyan írjuk le a 3-as számot?",
    t2_q_a: "drei", t2_q_b: "zwei", t2_q_c: "vier", t2_q_d: "eins",

    t3_title: "Mindennapi szavak",
    t3_text: "Dolgok vesznek körül minket! Der Tisch (asztal), amin eszünk. Das Bett (ágy), amiben alszunk. Der Stuhl (szék), amin ülünk.",
    t3_b1: "der Tisch (asztal)",
    t3_b2: "der Stuhl (szék)",
    t3_b3: "das Bett (ágy)",
    t3_inst: "Melyik szó hiányzik? 'Wir essen an dem ___.' (Mi az ___ eszünk.)",
    t3_h1: "Minél szoktál enni?",
    t3_h2: "Az asztalnál eszünk. A hiányzó szó a 'Tisch'.",
    t3_gap_text: "Wir essen an dem {gap}.",
    t3_opt_tisch: "Tisch", t3_opt_bett: "Bett", t3_opt_stuhl: "Stuhl",
    t3_q: "Mire szoktál leülni?",
    t3_q_a: "Auf dem Stuhl (székre)", t3_q_b: "Auf dem Tisch", t3_q_c: "Auf dem Buch", t3_q_d: "Auf dem Fenster",
  },
  ro: {
    explorer_title: "Culori și Cuvinte",
    t1_title: "Culorile",
    t1_text: "Lumea este colorată! În germană: rot (roșu), blau (albastru), grün (verde) și gelb (galben).",
    t1_b1: "rot 🔴, blau 🔵",
    t1_b2: "grün 🟢, gelb 🟡",
    t1_b3: "Cuvintele pentru culori se scriu cu literă mică",
    t1_inst: "Potrivește cuvântul cu culoarea corectă!",
    t1_h1: "Citește cuvântul: r-o-t înseamnă roșu.",
    t1_h2: "Potrivește 'rot' cu 🔴, 'blau' cu 🔵.",
    t1_l1: "rot", t1_r1: "🔴",
    t1_l2: "blau", t1_r2: "🔵",
    t1_l3: "grün", t1_r3: "🟢",
    t1_l4: "gelb", t1_r4: "🟡",
    t1_q: "Ce culoare are o banană în germană?",
    t1_q_a: "gelb", t1_q_b: "blau", t1_q_c: "grün", t1_q_d: "rot",

    t2_title: "Numerele în cuvinte",
    t2_text: "Putem scrie numerele ca și cuvinte: eins (1), zwei (2), drei (3), vier (4), fünf (5)... până la zehn (10)!",
    t2_b1: "eins (1), zwei (2), drei (3)",
    t2_b2: "vier (4), fünf (5)",
    t2_b3: "sechs (6), sieben (7), acht (8)",
    t2_inst: "Numărul este mic (1-5) sau mare (6-10)? Sortează-le!",
    t2_h1: "eins, zwei, drei, vier, fünf sunt mici.",
    t2_h2: "sechs, sieben, acht, neun, zehn sunt mari.",
    t2_bucket_klein: "1 până la 5",
    t2_bucket_gross: "6 până la 10",
    t2_item_zwei: "zwei (2)", t2_item_vier: "vier (4)", t2_item_fuenf: "fünf (5)",
    t2_item_acht: "acht (8)", t2_item_zehn: "zehn (10)", t2_item_sieben: "sieben (7)",
    t2_q: "Cum scrii numărul 3 în germană?",
    t2_q_a: "drei", t2_q_b: "zwei", t2_q_c: "vier", t2_q_d: "eins",

    t3_title: "Cuvinte zilnice",
    t3_text: "Sunt lucruri peste tot în jurul nostru! Der Tisch (masa), das Bett (patul), der Stuhl (scaunul).",
    t3_b1: "der Tisch (masa)",
    t3_b2: "der Stuhl (scaunul)",
    t3_b3: "das Bett (patul)",
    t3_inst: "Ce cuvânt lipsește? 'Wir essen an dem ___.' (Mâncăm la ___.)",
    t3_h1: "Unde mănânci de obicei?",
    t3_h2: "Mănânci la masă (Tisch).",
    t3_gap_text: "Wir essen an dem {gap}.",
    t3_opt_tisch: "Tisch", t3_opt_bett: "Bett", t3_opt_stuhl: "Stuhl",
    t3_q: "Pe ce te așezi?",
    t3_q_a: "Auf dem Stuhl (scaun)", t3_q_b: "Auf dem Tisch", t3_q_c: "Auf dem Buch", t3_q_d: "Auf dem Fenster",
  },
};

// ─── TOPICS ─────────────────────────────────────────────────────────

const TOPICS: TopicDef[] = [
  // ── Topic 1: Colors (match-pairs) ──
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: () => <Topic1Svg />,
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "match-pairs",
      pairs: [
        { left: "t1_l1", right: "t1_r1" },
        { left: "t1_l2", right: "t1_r2" },
        { left: "t1_l3", right: "t1_r3" },
        { left: "t1_l4", right: "t1_r4" },
      ],
      instruction: "t1_inst",
      hint1: "t1_h1",
      hint2: "t1_h2",
    },
    quiz: {
      question: "t1_q",
      choices: ["t1_q_a", "t1_q_b", "t1_q_c", "t1_q_d"],
      answer: "t1_q_a", // gelb
    },
  },
  // ── Topic 2: Numbers as words (drag-to-bucket) ──
  {
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: () => <Topic2Svg />,
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [
        { id: "klein", label: "t2_bucket_klein" },
        { id: "gross", label: "t2_bucket_gross" },
      ],
      items: [
        { text: "t2_item_zwei", bucketId: "klein" },
        { text: "t2_item_acht", bucketId: "gross" },
        { text: "t2_item_vier", bucketId: "klein" },
        { text: "t2_item_zehn", bucketId: "gross" },
        { text: "t2_item_fuenf", bucketId: "klein" },
        { text: "t2_item_sieben", bucketId: "gross" },
      ],
      instruction: "t2_inst",
      hint1: "t2_h1",
      hint2: "t2_h2",
    },
    quiz: {
      question: "t2_q",
      choices: ["t2_q_a", "t2_q_b", "t2_q_c", "t2_q_d"],
      answer: "t2_q_a", // drei
    },
  },
  // ── Topic 3: Daily Vocabulary (gap-fill) ──
  {
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: () => <Topic3Svg />,
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "gap-fill",
      sentence: "t3_gap_text",
      choices: ["t3_opt_tisch", "t3_opt_bett", "t3_opt_stuhl"],
      correctIndex: 0,
      instruction: "t3_inst",
      hint1: "t3_h1",
      hint2: "t3_h2",
    },
    quiz: {
      question: "t3_q",
      choices: ["t3_q_a", "t3_q_b", "t3_q_c", "t3_q_d"],
      answer: "t3_q_a", // Auf dem Stuhl
    },
  },
];

// ─── DEF ────────────────────────────────────────────────────────────

const DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "🎨",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const PictureWordExplorerK1 = memo(function PictureWordExplorerK1({
  color = "#F59E0B",
  onDone,
  lang = "de",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={1} explorerId="deutsch_k1_picwords" color={color} lang={lang} onDone={onDone} />;
});

export default PictureWordExplorerK1;
