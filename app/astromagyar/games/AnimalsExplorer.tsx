"use client";
// AnimalsExplorer.tsx — AstroMagyar Grade 1: i7 Állatok szigete
// Témák: 1) Állat vagy tárgy? 2) Színek 3) Napszakok 4) Keresd az állatot! 5) Mancs-kapó

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── ILUSZTRÁCIÓK (Geometrikus SVG) ───────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#7C2D12" rx="20" />
      <g transform="translate(120, 70)">
        {/* Egyszerű macska / állat arc */}
        <polygon points="-20,-10 -30,-30 -10,-15" fill="#F59E0B" />
        <polygon points="20,-10 30,-30 10,-15" fill="#F59E0B" />
        <circle cx="0" cy="0" r="25" fill="#FBBF24" />
        <circle cx="-10" cy="-5" r="4" fill="#7C2D12" />
        <circle cx="10" cy="-5" r="4" fill="#7C2D12" />
        <polygon points="-5,5 5,5 0,10" fill="#EF4444" />
        <path d="M -10,15 Q 0,20 10,15" fill="none" stroke="#7C2D12" strokeWidth="2" strokeLinecap="round" />
        {/* Bajszok */}
        <line x1="-15" y1="5" x2="-35" y2="0" stroke="#7C2D12" strokeWidth="2" />
        <line x1="-15" y1="10" x2="-35" y2="15" stroke="#7C2D12" strokeWidth="2" />
        <line x1="15" y1="5" x2="35" y2="0" stroke="#7C2D12" strokeWidth="2" />
        <line x1="15" y1="10" x2="35" y2="15" stroke="#7C2D12" strokeWidth="2" />
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#1E3A8A" rx="20" />
      <g transform="translate(120, 70)">
        {/* Festékpaletta a színekhez */}
        <ellipse cx="0" cy="0" rx="35" ry="25" fill="#FDE047" />
        <circle cx="-15" cy="5" r="6" fill="#1E3A8A" />
        <circle cx="10" cy="-10" r="5" fill="#EF4444" />
        <circle cx="20" cy="5" r="5" fill="#10B981" />
        <circle cx="0" cy="15" r="5" fill="#3B82F6" />
        <circle cx="-10" cy="-10" r="5" fill="#F97316" />
      </g>
    </svg>
  );
});

// ─── CÍMKÉK (MAGYAR NYELVEN) ──────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Állatok szigete",
    
    // T1: Állat vagy tárgy? (Bucket)
    t1_title: "Állatok a farmon",
    t1_text: "Rengeteg állat él körülöttünk! Vannak háziállatok (kutya, macska, ló) és vadállatok (róka, medve, oroszlán).",
    t1_b1: "Az állatok élőlények.",
    t1_b2: "A tárgyak nem élnek.",
    t1_inst: "Válogasd szét a szavakat: Állat vagy Tárgy?",
    t1_bucket_all: "Állat",
    t1_bucket_tar: "Tárgy",
    t1_item_a1: "kutya", t1_item_a2: "malac",
    t1_item_t1: "asztal", t1_item_t2: "ceruza",
    t1_q: "Melyik egy ÁLLAT?",
    t1_q_a: "tehén", t1_q_b: "szék", t1_q_c: "ablak", t1_q_d: "könyv",

    // T2: Színek (Magnet)
    t2_title: "Milyen színű?",
    t2_text: "Minden állatnak és dolognak megvan a maga jellegzetes színe. A fű zöld, a nap sárga, a béka pedig...",
    t2_b1: "A varjú fekete.",
    t2_b2: "A malac rózsaszín.",
    t2_inst: "Párosítsd az állatot vagy dolgot a színével!",
    t2_l1: "Béka", t2_r1: "zöld",
    t2_l2: "Nap", t2_r2: "sárga",
    t2_l3: "Hó", t2_r3: "fehér",
    t2_q: "Milyen színű a felhőtlen égbolt nappal?",
    t2_q_a: "kék", t2_q_b: "zöld", t2_q_c: "piros", t2_q_d: "barna",

    // T3: Napszakok (Slingshot)
    t3_title: "Reggel, dél, este",
    t3_text: "A nap részeit napszakoknak hívjuk: Reggel, délelőtt, dél, délután, este és éjszaka.",
    t3_b1: "Reggel felkel a nap.",
    t3_b2: "Éjszaka sötét van és alszunk.",
    t3_inst: "Lődd le az aszteroidát: Melyik napszakban kel fel a nap?",
    t3_target_1: "reggel", // Helyes
    t3_target_2: "éjszaka",
    t3_target_3: "este",
    t3_q: "Melyik napszakban van a legsötétebb?",
    t3_q_a: "éjszaka", t3_q_b: "dél", t3_q_c: "délelőtt", t3_q_d: "reggel",

    // T4: Keresd az állatot! (Highlight)
    t4_title: "Állat-kereső",
    t4_text: "A szavak között néha megbújnak az állatok nevei. Keresd meg őket a mondatokban!",
    t4_b1: "Olvasd el a mondatot figyelmesen!",
    t4_b2: "Kattints az állat nevére!",
    t4_inst: "Jelöld ki a mondatban az ÁLLAT nevét!",
    t4_tok0: "A", t4_tok1: "kicsi", t4_tok2: "egér", t4_tok3: "bújt", t4_tok4: "el", t4_tok5: "a", t4_tok6: "lyukban.",
    t4_q: "A fenti mondatban melyik szó jelentette az állatot?",
    t4_q_a: "egér", t4_q_b: "bújt", t4_q_c: "kicsi", t4_q_d: "lyukban",

    // T5: Fun Catch
    t5_title: "Természetbúvár",
    t5_text: "Szuper! Ismered az állatokat, a színeket és a napszakokat is.",
    t5_b1: "A róka vörös.",
    t5_b2: "A medve barna.",
    t5_inst: "Kapj el 6 mancsnyomot (🐾) a győzelemhez!",
    t5_q: "Melyik egy házőrző állat?",
    t5_q_a: "kutya", t5_q_b: "oroszlán", t5_q_c: "zsiráf", t5_q_d: "krokodil",
  }
};

// ─── TOPICS ──────────────────────────────────────────

const TOPICS: TopicDef[] = [
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: () => <Topic1Svg />,
    bulletKeys: ["t1_b1", "t1_b2"],
    interactive: {
      type: "physics-bucket",
      buckets: [
        { id: "all", label: "t1_bucket_all" },
        { id: "tar", label: "t1_bucket_tar" },
      ],
      items: [
        { text: "t1_item_a1", bucketId: "all" },
        { text: "t1_item_t1", bucketId: "tar" },
        { text: "t1_item_a2", bucketId: "all" },
        { text: "t1_item_t2", bucketId: "tar" },
      ],
      instruction: "t1_inst",
      hint1: "t1_b1",
      hint2: "t1_b2",
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
    bulletKeys: ["t2_b1", "t2_b2"],
    interactive: {
      type: "physics-magnet",
      pairs: [
        { left: "t2_l1", right: "t2_r1" },
        { left: "t2_l2", right: "t2_r2" },
        { left: "t2_l3", right: "t2_r3" },
      ],
      instruction: "t2_inst",
      hint1: "t2_b1",
      hint2: "t2_b2",
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
    bulletKeys: ["t3_b1", "t3_b2"],
    interactive: {
      type: "physics-slingshot",
      question: "t3_inst",
      targets: [
        { id: "tgt1", text: "t3_target_1", isCorrect: true },
        { id: "tgt2", text: "t3_target_2", isCorrect: false },
        { id: "tgt3", text: "t3_target_3", isCorrect: false },
      ],
      instruction: "t3_inst",
      hint1: "t3_b1",
      hint2: "t3_b2",
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
    bulletKeys: ["t4_b1", "t4_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t4_tok0", "t4_tok1", "t4_tok2", "t4_tok3", "t4_tok4", "t4_tok5", "t4_tok6"],
      correctIndices: [2], // "egér"
      instruction: "t4_inst",
      hint1: "t4_b1",
      hint2: "t4_b2",
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
    bulletKeys: ["t5_b1", "t5_b2"],
    interactive: {
      type: "tap-count",
      tapCount: { emoji: "🐾", count: 6 },
      instruction: "t5_inst",
      hint1: "t5_b1",
      hint2: "t5_b2",
    },
    quiz: {
      question: "t5_q",
      choices: ["t5_q_a", "t5_q_b", "t5_q_c", "t5_q_d"],
      answer: "t5_q_a",
    },
  },
];

const DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "🐾",
  topics: TOPICS,
  rounds: [],
};

export default function AnimalsExplorer({ onDone, lang = "hu", color }: { onDone: (s: number, t: number) => void; lang?: string; color?: string }) {
  return (
    <ExplorerEngine 
      def={DEF} 
      grade={1} 
      explorerId="magyar_o1_i7" 
      color="#FF9500" 
      lang={lang} 
      onDone={onDone} 
    />
  );
}
