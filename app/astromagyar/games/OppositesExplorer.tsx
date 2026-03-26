"use client";
// OppositesExplorer.tsx — AstroMagyar Grade 1: i5 Ellentétek szigete
// Témák: 1) Mi az ellentét? 2) Kicsi vs Nagy 3) Gyors vs Lassú 4) Keresd a párját 5) Ikon-kapó

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── ILUSZTRÁCIÓK (Geometrikus SVG) ───────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#2E1065" rx="20" />
      <g transform="translate(120, 70)">
        {/* Nap és Hold szimbólum (Éjjel-Nappal ellentét) */}
        <circle cx="-40" cy="0" r="20" fill="#FDE047" />
        <circle cx="40" cy="0" r="20" fill="#E2E8F0" />
        <path d="M 40,-20 A 20,20 0 0,0 40,20 A 15,15 0 0,1 40,-20" fill="#1E293B" transform="translate(5,0)" />
        <path d="M -10,0 L 10,0" stroke="#A78BFA" strokeWidth="4" strokeLinecap="round" />
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#4C1D95" rx="20" />
      <g transform="translate(120, 70)">
        {/* Kicsi és Nagy kocka */}
        <rect x="-60" y="-10" width="20" height="20" fill="#DDD6FE" rx="2" />
        <rect x="10" y="-30" width="50" height="50" fill="#8B5CF6" rx="4" />
        <text x="-50" y="30" textAnchor="middle" fontSize="10" fill="#DDD6FE">KICSI</text>
        <text x="35" y="40" textAnchor="middle" fontSize="10" fill="#DDD6FE">NAGY</text>
      </g>
    </svg>
  );
});

// ─── CÍMKÉK (MAGYAR NYELVEN) ──────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Ellentétek szigete",
    
    // T1: Mi az ellentét?
    t1_title: "Mik azok az ellentétek?",
    t1_text: "Az ellentétek olyan szavak, amiknek a jelentése teljesen szemben áll egymással. Ha valami nem HIDEG, akkor az MELEG.",
    t1_b1: "Példa: kint - bent.",
    t1_b2: "Példa: fent - lent.",
    t1_inst: "Párosítsd össze az ellentétes szavakat!",
    t1_l1: "édes", t1_r1: "savanyú",
    t1_l2: "fekete", t1_r2: "fehér",
    t1_l3: "száraz", t1_r3: "vizes",
    t1_q: "Mi a 'fekete' szó ellentéte?",
    t1_q_a: "fehér", t1_q_b: "sötét", t1_q_c: "szürke", t1_q_d: "piros",

    // T2: Méretek (Slingshot)
    t2_title: "Kicsi vagy nagy?",
    t2_text: "A méreteket is ellentétekkel fejezzük ki. Egy egér KICSI, egy elefánt NAGY.",
    t2_b1: "Alacsony ellentéte a MAGAS.",
    t2_b2: "Rövid ellentéte a HOSSZÚ.",
    t2_inst: "Lődd le az aszteroidát, ami a 'NAGY' szó ellentéte!",
    t2_target_1: "kicsi", // Helyes
    t2_target_2: "óriás",
    t2_target_3: "hatalmas",
    t2_q: "Melyik szó a 'HOSSZÚ' ellentéte?",
    t2_q_a: "rövid", t2_q_b: "kicsi", t2_q_c: "széles", t2_q_d: "magas",

    // T3: Sebesség és Tulajdonság (Bucket)
    t3_title: "Gyors vagy lassú?",
    t3_text: "Vajon hova tartoznak a szavak? Figyeld a tulajdonságokat!",
    t3_b1: "A nyuszi GYORS.",
    t3_b2: "A csigabiga LASSÚ.",
    t3_inst: "Válogasd szét a szavakat: Gyors vagy Lassú?",
    t3_bucket_fast: "Gyors",
    t3_bucket_slow: "Lassú",
    t3_item_f1: "rakéta", t3_item_f2: "autó",
    t3_item_s1: "teknős", t3_item_s2: "hernyó",
    t3_q: "Melyik állat LASSÚ?",
    t3_q_a: "teknős", t3_q_b: "párduc", t3_q_c: "sas", t3_q_d: "ló",

    // T4: Keresd a mondatban (Highlight)
    t4_title: "Ellentét-kereső",
    t4_text: "Néha egy mondatban mindkét ellentét szerepel, hogy megmutassa a különbséget.",
    t4_b1: "Keresd a szót, ami a mondat elején lévő szó ellentéte!",
    t4_inst: "Jelöld ki a mondatban a 'SÖTÉT' szó ellentétét!",
    t4_tok0: "A", t4_tok1: "nap", t4_tok2: "fénye", t4_tok3: "világos,", t4_tok4: "az", t4_tok5: "éjszaka", t4_tok6: "pedig", t4_tok7: "sötét.",
    t4_q: "A mondat alapján mi a 'sötét' ellentéte?",
    t4_q_a: "világos", t4_q_b: "nap", t4_q_c: "éjszaka", t4_q_d: "fény",

    // T5: Fun Catch
    t5_title: "Ellentét Mester",
    t5_text: "Szuper! Most már tudod, hogy a szavaknak is vannak ellentétes párjaik.",
    t5_b1: "Kicsi - Nagy.",
    t5_b2: "Hideg - Meleg.",
    t5_inst: "Kapj el 6 ellentét-ikont (↔️) a győzelemhez!",
    t5_q: "Mi a 'bátor' szó ellentéte?",
    t5_q_a: "gyáva", t5_q_b: "erős", t5_q_c: "félénk", t5_q_d: "mérges",
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
      type: "physics-magnet",
      pairs: [
        { left: "t1_l1", right: "t1_r1" },
        { left: "t1_l2", right: "t1_r2" },
        { left: "t1_l3", right: "t1_r3" },
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
      type: "physics-slingshot",
      question: "t2_inst",
      targets: [
        { id: "tgt1", text: "t2_target_1", isCorrect: true },
        { id: "tgt2", text: "t2_target_2", isCorrect: false },
        { id: "tgt3", text: "t2_target_3", isCorrect: false },
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
      type: "physics-bucket",
      buckets: [
        { id: "fast", label: "t3_bucket_fast" },
        { id: "slow", label: "t3_bucket_slow" },
      ],
      items: [
        { text: "t3_item_f1", bucketId: "fast" },
        { text: "t3_item_s1", bucketId: "slow" },
        { text: "t3_item_f2", bucketId: "fast" },
        { text: "t3_item_s2", bucketId: "slow" },
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
    svg: () => <Topic2Svg />,
    bulletKeys: ["t4_b1"],
    interactive: {
      type: "highlight-text",
      tokens: ["t4_tok0", "t4_tok1", "t4_tok2", "t4_tok3", "t4_tok4", "t4_tok5", "t4_tok6", "t4_tok7"],
      correctIndices: [3], // "világos,"
      instruction: "t4_inst",
      hint1: "t4_b1",
      hint2: "t4_b1",
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
      tapCount: { emoji: "↔️", count: 6 },
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
  icon: "↔️",
  topics: TOPICS,
  rounds: [],
};

export default function OppositesExplorer({ onDone, lang = "hu" }: { onDone: (s: number, t: number) => void; lang?: string }) {
  return (
    <ExplorerEngine 
      def={DEF} 
      grade={1} 
      explorerId="magyar_o1_i5" 
      color="#B44DFF" 
      lang={lang} 
      onDone={onDone} 
    />
  );
}
