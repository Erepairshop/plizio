"use client";
// SpellingK3ExplorerK3 — Island i7: Rechtschreibung I (Spelling I)
// Topics: 1) ie oder i? 2) Dehnungs-h & ih 3) s, ss oder ß?

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSTRATIONS ──────────────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0F9FF" rx="20" />
      <g transform="translate(120, 70)">
        <text x="0" y="-30" fontSize="16" fontWeight="bold" fill="#0369A1" textAnchor="middle">Langes i = ie</text>
        <rect x="-60" y="-10" width="120" height="40" rx="8" fill="#BAE6FD" stroke="#0EA5E9" strokeWidth="2" />
        <text x="0" y="18" fontSize="20" fontWeight="black" fill="#0369A1" textAnchor="middle">Sp<tspan fill="#EF4444">ie</tspan>l</text>
        <text x="0" y="50" fontSize="12" fill="#0284C7" textAnchor="middle">Knie, Fliege, Sieg</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FDF2F8" rx="20" />
      <g transform="translate(120, 70)">
        <text x="0" y="-35" fontSize="14" fontWeight="bold" fill="#9D174D" textAnchor="middle">Stummes h</text>
        <text x="-50" y="0" fontSize="24" fontWeight="bold" fill="#DB2777" textAnchor="middle">Fa<tspan fill="#F472B6">h</tspan>rt</text>
        <text x="50" y="0" fontSize="24" fontWeight="bold" fill="#DB2777" textAnchor="middle">i<tspan fill="#F472B6">h</tspan>r</text>
        <path d="M -70,15 L 70,15" stroke="#F472B6" strokeWidth="2" strokeDasharray="4 2" />
        <text x="0" y="40" fontSize="12" fill="#BE185D" textAnchor="middle">Macht Vokale lang!</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0FDFA" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-70" y="-10" fontSize="18" fontWeight="bold" fill="#0D9488" textAnchor="middle">ss</text>
        <text x="-70" y="15" fontSize="10" fill="#14B8A6" textAnchor="middle">nach kurz</text>
        <text x="-70" y="30" fontSize="12" fontWeight="bold" fill="#0F766E" textAnchor="middle">(Fluss)</text>

        <text x="70" y="-10" fontSize="18" fontWeight="bold" fill="#0D9488" textAnchor="middle">ß</text>
        <text x="70" y="15" fontSize="10" fill="#14B8A6" textAnchor="middle">nach lang</text>
        <text x="70" y="30" fontSize="12" fontWeight="bold" fill="#0F766E" textAnchor="middle">(Fuß)</text>
        
        <path d="M -30,10 L 30,10" stroke="#5EEAD4" strokeWidth="2" />
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Rechtschreibung I",
    // Topic 1
    t1_title: "Das lange i (ie)",
    t1_text: "Wenn man ein 'i' lang spricht, schreibt man im Deutschen meistens 'ie'. Nur ganz wenige Wörter haben ein einfaches langes 'i' (wie Igel) vagy 'ih' (wie ihr).",
    t1_b1: "Meistens: ie (Spiel, Tier, Fliege)",
    t1_b2: "Am Wortende: oft ie (Knie, sie)",
    t1_b3: "Achtung: Igel, Tiger (nur i)",
    t1_inst: "Fehlt 'ie' oder 'i'? Sortiere die Wörter!",
    t1_h1: "Hörst du ein langes i? Dann ist es fast immer 'ie'.",
    t1_h2: "Wörter wie 'Spiel' und 'Tier' brauchen das 'e'.",
    t1_bucket_ie: "mit 'ie'",
    t1_bucket_i: "nur 'i'",
    t1_item_spiel: "Spiel", t1_item_tier: "Tier", t1_item_fliege: "Fliege",
    t1_item_igel: "Igel", t1_item_tiger: "Tiger", t1_item_dir: "dir",
    t1_q: "Wie schreibt man das Wort für das fliegende Tier?",
    t1_q_a: "Biene", t1_q_b: "Bine", t1_q_c: "Bihne", t1_q_d: "Beine",

    // Topic 2
    t2_title: "Dehnungs-h und ih",
    t2_text: "Das stumme 'h' macht den Vokal davor lang. Es steht oft vor l, m, n vagy r. Es gibt auch das 'ih', das man in Pronomen findet.",
    t2_b1: "Dehnungs-h: fahren, Uhr, Zahn",
    t2_b2: "ih-Wörter: ihm, ihr, ihnen",
    t2_b3: "Man hört das 'h' nicht beim Sprechen!",
    t2_inst: "Welches Wort mit 'h' passt in die Lücke?",
    t2_h1: "Ich brauche ein Wort, das sagt, wie spät es ist.",
    t2_h2: "Das Wort ist 'Uhr'.",
    t2_gap_sentence: "Meine neue {gap} geht genau.",
    t2_c1: "Uhr", t2_c2: "Ur", t2_c3: "Uhrr",
    t2_q: "Welches dieser Pronomen schreibt man mit 'h'?",
    t2_q_a: "ihr", t2_q_b: "wir", t2_q_c: "mir", t2_q_d: "dir",

    // Topic 3
    t3_title: "s, ss vagy ß?",
    t3_text: "Das 's' kann weich vagy scharf klingen. Nach einem KURZEN Vokal schreiben wir 'ss'. Nach einem LANGEN Vokal vagy einem Zwielaut (au, ei, eu) schreiben wir 'ß'.",
    t3_b1: "ss (nach kurz): Fluss, Schloss, essen",
    t3_b2: "ß (nach lang/Zwielaut): Fuß, Straße, heiß",
    t3_b3: "s (weich): Sonne, Hase",
    t3_inst: "ss oder ß? Bringe die Wörter in die richtige Gruppe!",
    t3_h1: "Ist der Vokal davor kurz (schnell) oder lang (gezogen)?",
    t3_h2: "Fluss ist kurz (ss), Fuß ist lang (ß).",
    t3_bucket_ss: "ss (kurz)",
    t3_bucket_sz: "ß (lang)",
    t3_item_fluss: "Fluss", t3_item_essen: "essen", t3_item_schloss: "Schloss",
    t3_item_fuss: "Fuß", t3_item_strasse: "Straße", t3_item_heiss: "heiß",
    t3_q: "Wie schreibt man das Wort 'gro_er'?",
    t3_q_a: "großer (lang)", t3_q_b: "grosser (kurz)", t3_q_c: "groser", t3_q_d: "grocer",
  },
  en: {
    explorer_title: "Spelling I",
    t1_inst: "Is it 'ie' or 'i'? Sort the words!",
    t1_h1: "Do you hear a long i? Then it's almost always 'ie'.",
    t1_bucket_ie: "with 'ie'",
    t1_bucket_i: "only 'i'",
    t2_inst: "Which word with 'h' fits the gap?",
    t2_h1: "I need a word that tells the time.",
    t2_h2: "The word is 'Uhr'.",
    t3_inst: "ss or ß? Put the words in the correct group!",
    t3_h1: "Is the vowel before it short (fast) or long (stretched)?",
    t3_bucket_ss: "ss (short)",
    t3_bucket_sz: "ß (long)",
  },
  hu: {
    explorer_title: "Helyesírás I",
    t1_inst: "'ie' vagy 'i' hiányzik? Válogasd szét a szavakat!",
    t1_h1: "Hosszú i-t hallasz? Akkor majdnem biztosan 'ie'.",
    t1_bucket_ie: "'ie'-vel",
    t1_bucket_i: "csak 'i'",
    t2_inst: "Melyik 'h'-s szó illik az űrbe?",
    t2_h1: "Egy olyan szó kell, ami az időt mutatja.",
    t2_h2: "Ez a szó az 'Uhr'.",
    t3_inst: "ss vagy ß? Tedd a szavakat a megfelelő csoportba!",
    t3_h1: "Rövid (gyors) vagy hosszú (nyújtott) a magánhangzó előtte?",
    t3_bucket_ss: "ss (rövid)",
    t3_bucket_sz: "ß (hosszú)",
  },
  ro: {
    explorer_title: "Ortografie I",
    t1_inst: "Lipsește 'ie' sau 'i'? Sortează cuvintele!",
    t1_h1: "Auzi un i lung? Atunci este aproape întotdeauna 'ie'.",
    t1_bucket_ie: "cu 'ie'",
    t1_bucket_i: "doar 'i'",
    t2_inst: "Ce cuvânt cu 'h' se potrivește în spațiu?",
    t2_h1: "Am nevoie de un cuvânt care spune cât e ceasul.",
    t2_h2: "Cuvântul este 'Uhr'.",
    t3_inst: "ss sau ß? Pune cuvintele în grupul corect!",
    t3_h1: "Vocala de dinainte este scurtă (rapidă) sau lungă (alungită)?",
    t3_bucket_ss: "ss (scurt)",
    t3_bucket_sz: "ß (lung)",
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
        { id: "ie", label: "t1_bucket_ie" },
        { id: "i", label: "t1_bucket_i" },
      ],
      items: [
        { text: "t1_item_spiel", bucketId: "ie" },
        { text: "t1_item_igel", bucketId: "i" },
        { text: "t1_item_tier", bucketId: "ie" },
        { text: "t1_item_tiger", bucketId: "i" },
        { text: "t1_item_fliege", bucketId: "ie" },
        { text: "t1_item_dir", bucketId: "i" },
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
      choices: ["t2_c1", "t2_c2", "t2_c3"], // Uhr, Ur, Uhrr
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
        { id: "ss", label: "t3_bucket_ss" },
        { id: "sz", label: "t3_bucket_sz" },
      ],
      items: [
        { text: "t3_item_fluss", bucketId: "ss" },
        { text: "t3_item_fuss", bucketId: "sz" },
        { text: "t3_item_essen", bucketId: "ss" },
        { text: "t3_item_strasse", bucketId: "sz" },
        { text: "t3_item_schloss", bucketId: "ss" },
        { text: "t3_item_heiss", bucketId: "sz" },
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
];

// ─── DEF ────────────────────────────────────────────────────────────

const DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "✍️",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const SpellingK3ExplorerK3 = memo(function SpellingK3ExplorerK3({
  color = "#0EA5E9",
  onDone,
  lang = "de",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={3} explorerId="deutsch_k3_spelling_i" color={color} lang={lang} onDone={onDone} />;
});

export default SpellingK3ExplorerK3;
