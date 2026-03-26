"use client";
// LetterExplorer.tsx — AstroMagyar Grade 1: i1 Betűsziget
// Témák: 1) Magánhangzók 2) Mássalhangzók 3) ABC sorrend 4) Betűfelismerés 5) Csillagfogó

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── ILUSZTRÁCIÓK (Geometrikus SVG) ───────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#4C0519" rx="20" />
      <g transform="translate(120, 70)">
        <circle cx="0" cy="0" r="30" fill="#E11D48" />
        <text x="0" y="8" textAnchor="middle" fontSize="24" fontWeight="bold" fill="white">A, E, I</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#1E3A8A" rx="20" />
      <g transform="translate(120, 70)">
        <rect x="-30" y="-20" width="60" height="40" fill="#3B82F6" rx="4" />
        <text x="0" y="8" textAnchor="middle" fontSize="24" fontWeight="bold" fill="white">B, C, D</text>
      </g>
    </svg>
  );
});

// ─── CÍMKÉK (MAGYAR NYELVEN) ──────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Betűsziget",
    
    // T1: Magánhangzók
    t1_title: "Magánhangzók",
    t1_text: "A magánhangzókat önmagukban is hosszan tudjuk énekelni. Ilyen az A, E, I, O, U és barátaik.",
    t1_b1: "Próbáld ki: ÁÁÁÁÁ — megy, ugye?",
    t1_b2: "Vannak rövid (a, e) és hosszú (á, é) párjaik.",
    t1_inst: "Válogasd szét a betűket a kosarakba!",
    t1_bucket_vow: "Magánhangzó",
    t1_bucket_oth: "Más betű",
    t1_item_a: "A", t1_item_e: "E", t1_item_i: "I", t1_item_o: "O",
    t1_item_b: "B", t1_item_c: "C",
    t1_q: "Melyik egy magánhangzó?",
    t1_q_a: "A", t1_q_b: "B", t1_q_c: "K", t1_q_d: "S",

    // T2: Mássalhangzók
    t2_title: "Mássalhangzók",
    t2_text: "A mássalhangzókat nem tudjuk önmagukban hosszan énekelni, kell melléjük egy pici magánhangzó is, hogy kimondjuk őket: BÉ, CÉ, DÉ.",
    t2_b1: "Kiejtéskor akadályba ütközik a levegő (ajak, fog, nyelv).",
    t2_b2: "Lehetnek egyjegyűek (b, c) vagy kétjegyűek (cs, sz).",
    t2_inst: "Húzd a mássalhangzókat a kék mágneshez!",
    t2_l1: "B", t2_r1: "Mássalhangzó",
    t2_l2: "CS", t2_r2: "Mássalhangzó",
    t2_l3: "E", t2_r3: "Magánhangzó",
    t2_q: "Melyik egy mássalhangzó?",
    t2_q_a: "D", t2_q_b: "O", t2_q_c: "U", t2_q_d: "I",

    // T3: ABC sorrend
    t3_title: "ABC Sorrend",
    t3_text: "A betűknek pontos helyük van a sorban. Ez az ABC sorrend.",
    t3_b1: "A, B, C, Cs, D...",
    t3_b2: "Ha tudod a sorrendet, mindent megtalálsz!",
    t3_inst: "Találd el a betűt, ami az ABC-ben következik!",
    t3_target_1: "B", // A után
    t3_target_2: "Z",
    t3_target_3: "X",
    t3_q: "Melyik betű jön az 'A' után az ABC-ben?",
    t3_q_a: "B", t3_q_b: "C", t3_q_c: "Z", t3_q_d: "D",

    // T4: Kis és Nagybetű
    t4_title: "Betűpárok",
    t4_text: "Minden betűnek van egy nagy és egy kis formája. A nagybetűkkel kezdjük a neveket és a mondatokat.",
    t4_b1: "Nagy 'A' -> Kis 'a'",
    t4_b2: "Nagy 'B' -> Kis 'b'",
    t4_inst: "Húzd a kisbetűt a nagybetűs párjához!",
    t4_l_a: "A", t4_r_a: "a",
    t4_l_b: "B", t4_r_b: "b",
    t4_l_c: "C", t4_r_c: "c",
    t4_q: "Melyik a nagy 'E' kisbetűs párja?",
    t4_q_a: "e", t4_q_b: "a", t4_q_c: "o", t4_q_d: "i",

    // T5: Fun Catch
    t5_title: "Betűmester",
    t5_text: "Gratulálok! Megismerted a betűk világát. Készen állsz az olvasásra!",
    t5_b1: "Tudod a magánhangzókat.",
    t5_b2: "Felismered a betűpárokat.",
    t5_inst: "Kapj el 5 csillagot a győzelemhez!",
    t5_q: "Hány betűből áll a 'maci' szó?",
    t5_q_a: "4", t5_q_b: "3", t5_q_c: "5", t5_q_d: "2",
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
        { id: "vow", label: "t1_bucket_vow" },
        { id: "oth", label: "t1_bucket_oth" },
      ],
      items: [
        { text: "t1_item_a", bucketId: "vow" },
        { text: "t1_item_b", bucketId: "oth" },
        { text: "t1_item_e", bucketId: "vow" },
        { text: "t1_item_c", bucketId: "oth" },
      ],
      instruction: "t1_inst",
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
        { left: "t2_l2", right: "t2_r1" },
        { left: "t2_l3", right: "t2_r3" },
      ],
      instruction: "t2_inst",
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
    bulletKeys: ["t4_b1", "t4_b2"],
    interactive: {
      type: "physics-magnet",
      pairs: [
        { left: "t4_l_a", right: "t4_r_a" },
        { left: "t4_l_b", right: "t4_r_b" },
        { left: "t4_l_c", right: "t4_r_c" },
      ],
      instruction: "t4_inst",
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
      tapCount: { emoji: "⭐", count: 5 },
      instruction: "t5_inst",
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
  icon: "🔤",
  topics: TOPICS,
  rounds: [],
};

export default function LetterExplorer({ onDone, lang = "hu" }: { onDone: (s: number, t: number) => void; lang?: string }) {
  return (
    <ExplorerEngine 
      def={DEF} 
      grade={1} 
      explorerId="magyar_o1_i1" 
      color="#FF2D78" 
      lang={lang} 
      onDone={onDone} 
    />
  );
}
