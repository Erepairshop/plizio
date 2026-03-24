"use client";
// RhymeExplorerK1 — Island i4: Reime & Wörter (Rhymes & Basic Words)
// Topics: 1) Rhymes  2) Categories (Animals vs Objects)  3) Simple Verbs

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSTRATIONS ──────────────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="rhyGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#D946EF" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#rhyGrad1)" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-50" y="-10" fontSize="30" textAnchor="middle">🐭</text>
        <text x="-50" y="25" fontSize="16" fontWeight="bold" fill="#7C3AED" textAnchor="middle">Maus</text>
        
        <path d="M -20,0 Q 0,-20 20,0" fill="none" stroke="#D946EF" strokeWidth="3" strokeDasharray="4 4" />
        <text x="0" y="-15" fontSize="18" textAnchor="middle">🎵</text>
        
        <text x="50" y="-10" fontSize="30" textAnchor="middle">🏠</text>
        <text x="50" y="25" fontSize="16" fontWeight="bold" fill="#7C3AED" textAnchor="middle">Haus</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#ECFEFF" rx="20" />
      <g transform="translate(120, 70)">
        <g transform="translate(-50, 0)">
          <circle cx="0" cy="0" r="30" fill="#CCFBF1" />
          <text x="0" y="-5" fontSize="20" textAnchor="middle">🐶🐱</text>
          <text x="0" y="20" fontSize="14" textAnchor="middle">🐾</text>
        </g>
        <g transform="translate(50, 0)">
          <circle cx="0" cy="0" r="30" fill="#E0E7FF" />
          <text x="0" y="-5" fontSize="20" textAnchor="middle">🚗📚</text>
          <text x="0" y="20" fontSize="14" textAnchor="middle">📦</text>
        </g>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="rhyGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#EF4444" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#rhyGrad3)" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-40" y="-5" fontSize="24" textAnchor="middle">🏃</text>
        <text x="-40" y="25" fontSize="14" fontWeight="bold" fill="#B45309" textAnchor="middle">laufen</text>
        
        <text x="40" y="-5" fontSize="24" textAnchor="middle">⚽</text>
        <text x="40" y="25" fontSize="14" fontWeight="bold" fill="#B45309" textAnchor="middle">spielen</text>
        
        <text x="0" y="-35" fontSize="22" textAnchor="middle">💪</text>
      </g>
    </svg>
  );
});

// ─── LABELS (4 languages) ────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Reime & Wörter",

    // Topic 1
    t1_title: "Reimwörter",
    t1_text: "Reimwörter klingen am Ende gleich! Das macht Spaß und hilft beim Lernen. Zum Beispiel: Maus und Haus, oder Hund und Mund.",
    t1_b1: "Maus 🐭 - Haus 🏠",
    t1_b2: "Hund 🐶 - Mund 👄",
    t1_b3: "Stein 🪨 - Bein 🦵",
    t1_inst: "Verbinde die Wörter, die sich reimen!",
    t1_h1: "Höre genau hin: Was klingt am Ende gleich?",
    t1_h2: "Maus passt zu Haus. Hund passt zu Mund.",
    t1_l1: "Maus 🐭", t1_r1: "Haus 🏠",
    t1_l2: "Hund 🐶", t1_r2: "Mund 👄",
    t1_l3: "Stein 🪨", t1_r3: "Bein 🦵",
    t1_q: "Welches Wort reimt sich auf 'Hund'?",
    t1_q_a: "Mund", t1_q_b: "Katze", t1_q_c: "Haus", t1_q_d: "Baum",

    // Topic 2
    t2_title: "Tiere und Sachen",
    t2_text: "Wir können Wörter in Gruppen sortieren. Tiere (Tiere) sind lebendig, wie ein Hund oder eine Katze. Sachen (Dinge) sind Gegenstände, wie ein Auto oder ein Buch.",
    t2_b1: "Tiere: Hund, Katze, Maus",
    t2_b2: "Sachen: Haus, Auto, Buch",
    t2_b3: "Sachen atmen nicht!",
    t2_inst: "Ist es ein Tier oder eine Sache? Sortiere sie in die Körbe!",
    t2_h1: "Lebt es? Dann ist es ein Tier.",
    t2_h2: "Katze und Hund sind Tiere. Auto und Buch sind Sachen.",
    t2_bucket_tier: "Tiere 🐾",
    t2_bucket_sache: "Sachen 🚗",
    t2_item_hund: "Hund", t2_item_katze: "Katze", t2_item_maus: "Maus",
    t2_item_auto: "Auto", t2_item_buch: "Buch", t2_item_haus: "Haus",
    t2_q: "Was ist ein 'Tier'?",
    t2_q_a: "Die Katze", t2_q_b: "Das Auto", t2_q_c: "Das Buch", t2_q_d: "Das Haus",

    // Topic 3
    t3_title: "Tunwörter (Verben)",
    t3_text: "Was kann man tun? Laufen, spielen, schlafen! Das sind Tunwörter (Verben). Sie beschreiben eine Aktion.",
    t3_b1: "laufen = rennen/gehen 🏃",
    t3_b2: "spielen = Spaß haben ⚽",
    t3_b3: "schlafen = ruhen 💤",
    t3_inst: "Bringe die Wörter in die richtige Reihenfolge: 'Der Hund läuft schnell.'",
    t3_h1: "Der Satz beginnt mit einem Großbuchstaben: 'Der'.",
    t3_h2: "Dann kommt das Nomen 'Hund', dann das Verb 'läuft'.",
    t3_w1: "Der", t3_w2: "Hund", t3_w3: "läuft", t3_w4: "schnell.",
    t3_q: "Welches Wort ist ein Tunwort (Verb)?",
    t3_q_a: "spielen", t3_q_b: "Hund", t3_q_c: "Haus", t3_q_d: "rot",
  },
  en: {
    explorer_title: "Rhymes & Words",
    t1_title: "Rhyming Words",
    t1_text: "Rhyming words sound the same at the end! It's fun and helps you learn. For example: Maus (mouse) and Haus (house).",
    t1_b1: "Maus 🐭 - Haus 🏠",
    t1_b2: "Hund 🐶 - Mund 👄",
    t1_b3: "Stein 🪨 - Bein 🦵",
    t1_inst: "Match the words that rhyme!",
    t1_h1: "Listen closely: What sounds the same at the end?",
    t1_h2: "Maus goes with Haus. Hund goes with Mund.",
    t1_l1: "Maus 🐭", t1_r1: "Haus 🏠",
    t1_l2: "Hund 🐶", t1_r2: "Mund 👄",
    t1_l3: "Stein 🪨", t1_r3: "Bein 🦵",
    t1_q: "Which word rhymes with 'Hund'?",
    t1_q_a: "Mund", t1_q_b: "Katze", t1_q_c: "Haus", t1_q_d: "Baum",

    t2_title: "Animals and Things",
    t2_text: "We can sort words into groups. 'Tiere' (animals) are alive, like a dog or cat. 'Sachen' (things) are objects, like a car or book.",
    t2_b1: "Tiere: Hund, Katze, Maus",
    t2_b2: "Sachen: Haus, Auto, Buch",
    t2_b3: "Things don't breathe!",
    t2_inst: "Is it an animal or a thing? Sort them into buckets!",
    t2_h1: "Is it alive? Then it's an animal (Tier).",
    t2_h2: "Katze and Hund are Tiere. Auto and Buch are Sachen.",
    t2_bucket_tier: "Animals 🐾",
    t2_bucket_sache: "Things 🚗",
    t2_item_hund: "Hund", t2_item_katze: "Katze", t2_item_maus: "Maus",
    t2_item_auto: "Auto", t2_item_buch: "Buch", t2_item_haus: "Haus",
    t2_q: "Which one is a 'Tier' (animal)?",
    t2_q_a: "Die Katze", t2_q_b: "Das Auto", t2_q_c: "Das Buch", t2_q_d: "Das Haus",

    t3_title: "Action Words (Verbs)",
    t3_text: "What can you do? Laufen (run), spielen (play), schlafen (sleep)! These are action words (verbs).",
    t3_b1: "laufen = to run/walk 🏃",
    t3_b2: "spielen = to play ⚽",
    t3_b3: "schlafen = to sleep 💤",
    t3_inst: "Put the words in the correct order: 'Der Hund läuft schnell.' (The dog runs fast.)",
    t3_h1: "The sentence starts with the capital letter: 'Der'.",
    t3_h2: "Then the noun 'Hund', followed by the verb 'läuft'.",
    t3_w1: "Der", t3_w2: "Hund", t3_w3: "läuft", t3_w4: "schnell.",
    t3_q: "Which word is an action word (verb)?",
    t3_q_a: "spielen", t3_q_b: "Hund", t3_q_c: "Haus", t3_q_d: "rot",
  },
  hu: {
    explorer_title: "Rímek és Szavak",
    t1_title: "Rímpárok",
    t1_text: "A rímelő szavak vége ugyanúgy hangzik! Ez vicces és segít a tanulásban. Például: Maus (egér) és Haus (ház).",
    t1_b1: "Maus 🐭 - Haus 🏠",
    t1_b2: "Hund 🐶 - Mund 👄 (kutya - száj)",
    t1_b3: "Stein 🪨 - Bein 🦵 (kő - láb)",
    t1_inst: "Kösd össze a rímelő szavakat!",
    t1_h1: "Figyeld a szavak végét!",
    t1_h2: "A Maus a Haus-hoz, a Hund a Mund-hoz illik.",
    t1_l1: "Maus 🐭", t1_r1: "Haus 🏠",
    t1_l2: "Hund 🐶", t1_r2: "Mund 👄",
    t1_l3: "Stein 🪨", t1_r3: "Bein 🦵",
    t1_q: "Melyik szó rímel a 'Hund' szóra?",
    t1_q_a: "Mund", t1_q_b: "Katze", t1_q_c: "Haus", t1_q_d: "Baum",

    t2_title: "Állatok és Tárgyak",
    t2_text: "A szavakat csoportokba oszthatjuk. A 'Tiere' (állatok) élnek, mint a kutya vagy a macska. A 'Sachen' (tárgyak) élettelenek, mint az autó vagy a könyv.",
    t2_b1: "Tiere (állatok): Hund, Katze, Maus",
    t2_b2: "Sachen (tárgyak): Haus, Auto, Buch",
    t2_b3: "A tárgyak nem lélegeznek!",
    t2_inst: "Állat vagy tárgy? Húzd őket a megfelelő kosárba!",
    t2_h1: "Élőlény? Akkor állat (Tier).",
    t2_h2: "A Katze és a Hund állatok. Az Auto és a Buch tárgyak.",
    t2_bucket_tier: "Állatok 🐾",
    t2_bucket_sache: "Tárgyak 🚗",
    t2_item_hund: "Hund", t2_item_katze: "Katze", t2_item_maus: "Maus",
    t2_item_auto: "Auto", t2_item_buch: "Buch", t2_item_haus: "Haus",
    t2_q: "Melyik egy 'Tier' (állat)?",
    t2_q_a: "Die Katze", t2_q_b: "Das Auto", t2_q_c: "Das Buch", t2_q_d: "Das Haus",

    t3_title: "Cselekvés-szavak (Igék)",
    t3_text: "Mit lehet csinálni? Laufen (futni), spielen (játszani), schlafen (aludni)! Ezek az igék (Tunwörter), amik cselekvést fejeznek ki.",
    t3_b1: "laufen = futni/menni 🏃",
    t3_b2: "spielen = játszani ⚽",
    t3_b3: "schlafen = aludni 💤",
    t3_inst: "Tedd sorba a szavakat: 'Der Hund läuft schnell.' (A kutya gyorsan fut.)",
    t3_h1: "A mondat nagybetűvel kezdődik: 'Der'.",
    t3_h2: "Aztán a 'Hund', majd az ige: 'läuft'.",
    t3_w1: "Der", t3_w2: "Hund", t3_w3: "läuft", t3_w4: "schnell.",
    t3_q: "Melyik szó fejez ki cselekvést (ige)?",
    t3_q_a: "spielen", t3_q_b: "Hund", t3_q_c: "Haus", t3_q_d: "rot",
  },
  ro: {
    explorer_title: "Rime și Cuvinte",
    t1_title: "Cuvinte care rimează",
    t1_text: "Cuvintele care rimează sună la fel la sfârșit! Este distractiv și te ajută să înveți. De exemplu: Maus (șoarece) și Haus (casă).",
    t1_b1: "Maus 🐭 - Haus 🏠",
    t1_b2: "Hund 🐶 - Mund 👄",
    t1_b3: "Stein 🪨 - Bein 🦵",
    t1_inst: "Potrivește cuvintele care rimează!",
    t1_h1: "Ascultă cu atenție: Ce sună la fel la sfârșit?",
    t1_h2: "Maus merge cu Haus. Hund cu Mund.",
    t1_l1: "Maus 🐭", t1_r1: "Haus 🏠",
    t1_l2: "Hund 🐶", t1_r2: "Mund 👄",
    t1_l3: "Stein 🪨", t1_r3: "Bein 🦵",
    t1_q: "Ce cuvânt rimează cu 'Hund'?",
    t1_q_a: "Mund", t1_q_b: "Katze", t1_q_c: "Haus", t1_q_d: "Baum",

    t2_title: "Animale și Obiecte",
    t2_text: "Putem sorta cuvintele în grupuri. 'Tiere' (animalele) sunt vii, ca un câine sau o pisică. 'Sachen' (lucrurile) sunt obiecte, ca o mașină sau o carte.",
    t2_b1: "Tiere: Hund, Katze, Maus",
    t2_b2: "Sachen: Haus, Auto, Buch",
    t2_b3: "Lucrurile nu respiră!",
    t2_inst: "Este un animal sau un obiect? Sortează-le în coșuri!",
    t2_h1: "Este viu? Atunci este un animal (Tier).",
    t2_h2: "Katze și Hund sunt animale. Auto și Buch sunt obiecte.",
    t2_bucket_tier: "Animale 🐾",
    t2_bucket_sache: "Obiecte 🚗",
    t2_item_hund: "Hund", t2_item_katze: "Katze", t2_item_maus: "Maus",
    t2_item_auto: "Auto", t2_item_buch: "Buch", t2_item_haus: "Haus",
    t2_q: "Care dintre ele este un 'Tier' (animal)?",
    t2_q_a: "Die Katze", t2_q_b: "Das Auto", t2_q_c: "Das Buch", t2_q_d: "Das Haus",

    t3_title: "Verbe (Acțiuni)",
    t3_text: "Ce poți să faci? Laufen (să alergi), spielen (să te joci), schlafen (să dormi)! Acestea sunt verbe (Tunwörter).",
    t3_b1: "laufen = a alerga/a merge 🏃",
    t3_b2: "spielen = a se juca ⚽",
    t3_b3: "schlafen = a dormi 💤",
    t3_inst: "Așază cuvintele în ordinea corectă: 'Der Hund läuft schnell.'",
    t3_h1: "Propoziția începe cu majusculă: 'Der'.",
    t3_h2: "Urmează substantivul 'Hund', apoi verbul 'läuft'.",
    t3_w1: "Der", t3_w2: "Hund", t3_w3: "läuft", t3_w4: "schnell.",
    t3_q: "Care cuvânt este un verb (acțiune)?",
    t3_q_a: "spielen", t3_q_b: "Hund", t3_q_c: "Haus", t3_q_d: "rot",
  },
};

// ─── TOPICS ─────────────────────────────────────────────────────────

const TOPICS: TopicDef[] = [
  // ── Topic 1: Rhymes (match-pairs) ──
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: () => <Topic1Svg />,
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "match-pairs",
      pairs: [
        { left: "t1_l1", right: "t1_r1" }, // Maus - Haus
        { left: "t1_l2", right: "t1_r2" }, // Hund - Mund
        { left: "t1_l3", right: "t1_r3" }, // Stein - Bein
      ],
      instruction: "t1_inst",
      hint1: "t1_h1",
      hint2: "t1_h2",
    },
    quiz: {
      question: "t1_q",
      choices: ["t1_q_a", "t1_q_b", "t1_q_c", "t1_q_d"],
      answer: "t1_q_a", // Mund
    },
  },
  // ── Topic 2: Categories (drag-to-bucket) ──
  {
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: () => <Topic2Svg />,
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [
        { id: "tiere", label: "t2_bucket_tier" },
        { id: "sachen", label: "t2_bucket_sache" },
      ],
      items: [
        { text: "t2_item_hund", bucketId: "tiere" },
        { text: "t2_item_auto", bucketId: "sachen" },
        { text: "t2_item_katze", bucketId: "tiere" },
        { text: "t2_item_buch", bucketId: "sachen" },
        { text: "t2_item_maus", bucketId: "tiere" },
        { text: "t2_item_haus", bucketId: "sachen" },
      ],
      instruction: "t2_inst",
      hint1: "t2_h1",
      hint2: "t2_h2",
    },
    quiz: {
      question: "t2_q",
      choices: ["t2_q_a", "t2_q_b", "t2_q_c", "t2_q_d"],
      answer: "t2_q_a", // Die Katze
    },
  },
  // ── Topic 3: Verbs & Sentence building (word-order) ──
  {
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: () => <Topic3Svg />,
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "word-order",
      words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4"], // Der Hund läuft schnell.
      correctOrder: [0, 1, 2, 3],
      instruction: "t3_inst",
      hint1: "t3_h1",
      hint2: "t3_h2",
    },
    quiz: {
      question: "t3_q",
      choices: ["t3_q_a", "t3_q_b", "t3_q_c", "t3_q_d"],
      answer: "t3_q_a", // spielen
    },
  },
];

// ─── DEF ────────────────────────────────────────────────────────────

const DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "🎵",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const RhymeExplorerK1 = memo(function RhymeExplorerK1({
  color = "#8B5CF6",
  onDone,
  lang = "de",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={1} explorerId="deutsch_k1_rhyme" color={color} lang={lang} onDone={onDone} />;
});

export default RhymeExplorerK1;
