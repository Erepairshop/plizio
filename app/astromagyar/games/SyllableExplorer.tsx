"use client";
// SyllableExplorer.tsx — AstroMagyar Grade 1: i2 Szótagsziget
// Témák: 1) Mi a szótag? 2) Szótagok számlálása 3) Elválasztás 4) Hosszú szavak 5) Olló-kapó

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── ILUSZTRÁCIÓK (Geometrikus SVG) ───────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#082F49" rx="20" />
      <g transform="translate(120, 70)">
        {/* Szótagolt szó: ma-ci */}
        <rect x="-50" y="-15" width="45" height="30" fill="#0EA5E9" rx="4" />
        <text x="-27" y="7" textAnchor="middle" fontSize="18" fontWeight="bold" fill="white">MA</text>
        <line x1="0" y1="0" x2="10" y2="0" stroke="#BAE6FD" strokeWidth="3" />
        <rect x="15" y="-15" width="45" height="30" fill="#0EA5E9" rx="4" />
        <text x="38" y="7" textAnchor="middle" fontSize="18" fontWeight="bold" fill="white">CI</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#075985" rx="20" />
      <g transform="translate(120, 70)">
        {/* Olló ikon */}
        <circle cx="-10" cy="-10" r="8" fill="none" stroke="#F1F5F9" strokeWidth="3" />
        <circle cx="-10" cy="10" r="8" fill="none" stroke="#F1F5F9" strokeWidth="3" />
        <line x1="0" y1="0" x2="30" y2="-15" stroke="#F1F5F9" strokeWidth="3" />
        <line x1="0" y1="0" x2="30" y2="15" stroke="#F1F5F9" strokeWidth="3" />
        <text x="0" y="45" textAnchor="middle" fontSize="10" fill="#BAE6FD">Vágd el a szót!</text>
      </g>
    </svg>
  );
});

// ─── CÍMKÉK (MAGYAR NYELVEN) ──────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Szótagsziget",
    
    // T1: Mi a szótag?
    t1_title: "A szótagok",
    t1_text: "A szavakat kisebb részekre, szótagokra tudjuk bontani. Minden szótagban kell lennie egy magánhangzónak.",
    t1_b1: "Tapsold le a szót: MA-CI. Kettőt tapsoltál!",
    t1_b2: "Vannak egy szótagú (fa, hal) és több szótagú szavak.",
    t1_inst: "Válogasd szét a szavakat a szótagok száma szerint!",
    t1_bucket_1: "1 szótag",
    t1_bucket_2: "2 szótag",
    t1_item_s1: "fa", t1_item_s2: "hal",
    t1_item_d1: "cica", t1_item_d2: "alma",
    t1_q: "Hány szótagból áll a 'kutya' szó?",
    t1_q_a: "2", t1_q_b: "3", t1_q_c: "1", t1_q_d: "4",

    // T2: Elválasztás alapjai
    t2_title: "Vágd el!",
    t2_text: "Ha nem fér ki egy szó a sor végére, el kell választanunk. Ezt mindig a szótagok határán tesszük meg.",
    t2_b1: "Mindig a magánhangzók segítenek.",
    t2_b2: "Egy betűt nem hagyunk magában a sor végén.",
    t2_inst: "Lődd le a helyesen elválasztott szót!",
    t2_target_1: "ma-ci", // Helyes
    t2_target_2: "mac-i",
    t2_target_3: "m-aci",
    t2_q: "Melyik szó elválasztása helyes?",
    t2_q_a: "ci-ca", t2_q_b: "cic-a", t2_q_c: "c-ica", t2_q_d: "c-ic-a",

    // T3: Szótagolás gyakorlás
    t3_title: "Szótag-kereső",
    t3_text: "Nézzük meg, jól tudsz-e szótagolni! Figyeld a magánhangzókat, azok mutatják az utat.",
    t3_b1: "Hány magánhangzó, annyi szótag.",
    t3_b2: "Vajon a 'pöttyös' szót hogy választod el?",
    t3_inst: "Húzd a szót a megfelelő szótagszámhoz!",
    t3_l1: "nap", t3_r1: "1",
    t3_l2: "asztal", t3_r2: "2",
    t3_l3: "iskola", t3_r3: "3",
    t3_q: "Melyik szóban van 3 szótag?",
    t3_q_a: "madárka", t3_q_b: "labda", t3_q_c: "sün", t3_q_d: "toll",

    // T4: Tapsoljunk!
    t4_title: "Taps-játék",
    t4_text: "Mondd ki hangosan a szót, és tapsolj minden szótagnál! Ez a legbiztosabb módszer.",
    t4_b1: "Dob: 1 taps.",
    t4_b2: "Dobol: 2 taps.",
    t4_inst: "Hányat kell tapsolni ennél a szónál?",
    t4_tok0: "KÉ", t4_tok1: "PES", t4_tok2: "KÖNYV",
    t4_q: "Hány szótag van a 'kerekerdő' szóban?",
    t4_q_a: "4", t4_q_b: "3", t4_q_c: "5", t4_q_d: "2",

    // T5: Fun Catch
    t5_title: "Szeletelő Mester",
    t5_text: "Ügyes vagy! Most már profi módon tudod feldarabolni a szavakat.",
    t5_b1: "Ismered a szótagokat.",
    t5_b2: "Tudsz elválasztani.",
    t5_inst: "Kapj el 6 ollót (✂️) a győzelemhez!",
    t5_q: "Mi segíti a szótagolást?",
    t5_q_a: "A magánhangzók", t5_q_b: "A pontok", t5_q_c: "A nagybetűk", t5_q_d: "A számok",
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
        { id: "1", label: "t1_bucket_1" },
        { id: "2", label: "t1_bucket_2" },
      ],
      items: [
        { text: "t1_item_s1", bucketId: "1" },
        { text: "t1_item_d1", bucketId: "2" },
        { text: "t1_item_s2", bucketId: "1" },
        { text: "t1_item_d2", bucketId: "2" },
      ],
      instruction: "t1_inst",
      hint1: "",
      hint2: "",
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
      hint1: "",
      hint2: "",
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
      type: "physics-magnet",
      pairs: [
        { left: "t3_l1", right: "t3_r1" },
        { left: "t3_l2", right: "t3_r2" },
        { left: "t3_l3", right: "t3_r3" },
      ],
      instruction: "t3_inst",
      hint1: "",
      hint2: "",
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
      type: "tap-count",
      tapCount: { emoji: "👏", count: 3 }, // KÉ-PES-KÖNYV
      instruction: "t4_inst",
      hint1: "",
      hint2: "",
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
      tapCount: { emoji: "✂️", count: 6 },
      instruction: "t5_inst",
      hint1: "",
      hint2: "",
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
  icon: "✂️",
  topics: TOPICS,
  rounds: [],
};

export default function SyllableExplorer({ onDone, lang = "hu", color }: { onDone: (s: number, t: number) => void; lang?: string; color?: string }) {
  return (
    <ExplorerEngine 
      def={DEF} 
      grade={1} 
      explorerId="magyar_o1_i2" 
      color="#00D4FF" 
      lang={lang} 
      onDone={onDone} 
    />
  );
}
