"use client";
// BigTestExplorer.tsx — AstroMagyar Grade 1: i9 Nagy Próba
// Témák: 1) Szótagok 2) Ellentétek 3) Mondatjelek 4) Közlekedés és Időjárás 5) Csillag-kapó (Végső győzelem)

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── ILUSZTRÁCIÓK (Geometrikus SVG) ───────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#0D9488" rx="20" />
      <g transform="translate(120, 70)">
        {/* Ragyogó Csillag / Trófea */}
        <path d="M 0,-30 L 10,-10 L 30,-5 L 15,10 L 20,30 L 0,20 L -20,30 L -15,10 L -30,-5 L -10,-10 Z" fill="#FDE047" />
        <circle cx="0" cy="0" r="8" fill="#F59E0B" />
        {/* Csillogás */}
        <path d="M -40,-20 L -30,-25 M 40,-20 L 30,-25 M -30,25 L -40,30 M 30,25 L 40,30" stroke="#FEF08A" strokeWidth="2" strokeLinecap="round" />
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#115E59" rx="20" />
      <g transform="translate(120, 70)">
        {/* Nyitott könyv csillagokkal */}
        <path d="M -40,20 Q -20,10 0,20 L 0,-20 Q -20,-30 -40,-20 Z" fill="#F8FAFC" />
        <path d="M 40,20 Q 20,10 0,20 L 0,-20 Q 20,-30 40,-20 Z" fill="#E2E8F0" />
        <line x1="0" y1="-20" x2="0" y2="20" stroke="#94A3B8" strokeWidth="2" />
        <path d="M -20,0 L -15,5 L -5,-5" stroke="#10B981" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 20,0 L 25,5 L 35,-5" stroke="#10B981" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
});

// ─── CÍMKÉK (MAGYAR NYELVEN) ──────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Nagy Próba",
    
    // T1: Szótagok (Bucket)
    t1_title: "Szótag-teszt",
    t1_text: "Lássuk, emlékszel-e még, hogyan kell tapsolni! A rövid szavak egy szótagúak, a hosszabbak több szótagból állnak.",
    t1_b1: "Példa: 'fa' (1 taps).",
    t1_b2: "Példa: 'al-ma' (2 taps).",
    t1_inst: "Válogasd szét a szavakat: 1 szótag vagy 2 szótag?",
    t1_bucket_1: "1 szótag",
    t1_bucket_2: "2 szótag",
    t1_item_s1: "ház", t1_item_s2: "ló",
    t1_item_d1: "kocsi", t1_item_d2: "cipő",
    t1_q: "Hány szótagos a 'nap' szó?",
    t1_q_a: "1", t1_q_b: "2", t1_q_c: "3", t1_q_d: "4",

    // T2: Ellentétek (Magnet)
    t2_title: "Ellentét-párbaj",
    t2_text: "Az ellentétek olyan szavak, amik teljesen mást jelentenek. Ha valami nem sötét, akkor az...",
    t2_b1: "Hideg ellentéte a meleg.",
    t2_b2: "Szomorú ellentéte a vidám.",
    t2_inst: "Párosítsd össze az ellentéteket a végső próbán!",
    t2_l1: "Kicsi", t2_r1: "Nagy",
    t2_l2: "Sötét", t2_r2: "Világos",
    t2_l3: "Lassú", t2_r3: "Gyors",
    t2_q: "Mi a 'szomorú' szó ellentéte?",
    t2_q_a: "vidám", t2_q_b: "mérges", t2_q_c: "síró", t2_q_d: "álmos",

    // T3: Mondatjelek (Slingshot)
    t3_title: "A mondat vége",
    t3_text: "Emlékszel még a pontra, a kérdőjelre és a felkiáltójelre? Egy kérdés végére mindig kérdőjelet (?) teszünk!",
    t3_b1: "Kijelentés: .",
    t3_b2: "Kérdés: ?",
    t3_inst: "Lődd le azt az aszteroidát, ami egy HELYESEN leírt kérdés!",
    t3_target_1: "Hova mész?", // Helyes
    t3_target_2: "Hova mész.",
    t3_target_3: "Hova mész!",
    t3_q: "Milyen írásjel kell a mondat végére: 'Szereted a csokit'",
    t3_q_a: "?", t3_q_b: ".", t3_q_c: "!", t3_q_d: ",",

    // T4: Közlekedés (Highlight)
    t4_title: "Jármű-kereső",
    t4_text: "Gyakran utazunk autóval, busszal vagy vonattal. Ezeket a szavakat is megtanultuk!",
    t4_b1: "A busz és a vonat jármű.",
    t4_b2: "Keresd meg a járművet a mondatban!",
    t4_inst: "Jelöld ki a JÁRMŰ nevét (közlekedési eszközt) a mondatban!",
    t4_tok0: "A", t4_tok1: "piros", t4_tok2: "busz", t4_tok3: "nagyon", t4_tok4: "gyorsan", t4_tok5: "megy.",
    t4_q: "Melyik szó jelent közlekedési eszközt (járművet)?",
    t4_q_a: "vonat", t4_q_b: "fa", t4_q_c: "kutya", t4_q_d: "alma",

    // T5: Fun Catch
    t5_title: "A Galaxis Bajnoka",
    t5_text: "Hihetetlen vagy! Sikeresen teljesítetted az első osztályos Magyar Galaxis minden próbáját.",
    t5_b1: "Tudsz olvasni.",
    t5_b2: "Tudod a szabályokat.",
    t5_inst: "Kapj el 6 aranycsillagot (🌟) a bajnoki címért!",
    t5_q: "Hogy hívjuk a szavak kis részeit, amiket tapsolni tudunk?",
    t5_q_a: "szótag", t5_q_b: "mondat", t5_q_c: "kérdőjel", t5_q_d: "ellentét",
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
    svg: () => <Topic2Svg />,
    bulletKeys: ["t4_b1", "t4_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t4_tok0", "t4_tok1", "t4_tok2", "t4_tok3", "t4_tok4", "t4_tok5"],
      correctIndices: [2], // "busz"
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
      tapCount: { emoji: "🌟", count: 6 },
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
  icon: "🌟",
  topics: TOPICS,
  rounds: [],
};

export default function BigTestExplorer({ onDone, lang = "hu" }: { onDone: (s: number, t: number) => void; lang?: string }) {
  return (
    <ExplorerEngine 
      def={DEF} 
      grade={1} 
      explorerId="magyar_o1_i9" 
      color="#4ECDC4" 
      lang={lang} 
      onDone={onDone} 
    />
  );
}
