"use client";
// ConjugationO2Explorer.tsx — AstroMagyar Grade 2: i6 Ragozás Szigete
// Témák: 1) Igeragozás (Én, Te, Ő) 2) Tárgy ragja (-t) 3) Birtoklás (Enyém, tiéd) 4) Helyhatározó ragok (Hol? Hová?) 5) Könyv-kapó

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── ILUSZTRÁCIÓK (Geometrikus SVG) ───────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#064E3B" rx="20" />
      <g transform="translate(120, 70)">
        {/* Igeragozás: Én, Te, Ő */}
        <circle cx="-50" cy="0" r="15" fill="#34D399" />
        <text x="-50" y="5" textAnchor="middle" fontSize="10" fill="#064E3B" fontWeight="bold">ÉN</text>
        
        <circle cx="0" cy="0" r="15" fill="#10B981" />
        <text x="0" y="5" textAnchor="middle" fontSize="10" fill="#064E3B" fontWeight="bold">TE</text>

        <circle cx="50" cy="0" r="15" fill="#059669" />
        <text x="50" y="5" textAnchor="middle" fontSize="10" fill="#A7F3D0" fontWeight="bold">Ő</text>

        <path d="M -30,0 L -20,0 M 20,0 L 30,0" stroke="#6EE7B7" strokeWidth="2" strokeDasharray="2,2" />
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#065F46" rx="20" />
      <g transform="translate(120, 70)">
        {/* Házban vs Házba (Hol? Hová?) */}
        <path d="M -40,-10 L -20,-30 L 0,-10 L 0,20 L -40,20 Z" fill="#10B981" />
        <circle cx="-20" cy="0" r="4" fill="#FEF08A" />
        <text x="-20" y="-35" textAnchor="middle" fontSize="10" fill="#6EE7B7" fontWeight="bold">HOL? (-ban)</text>
        
        <path d="M 15,-10 L 35,-30 L 55,-10 L 55,20 L 15,20 Z" fill="#10B981" opacity="0.5" />
        <circle cx="5" cy="5" r="4" fill="#FEF08A" />
        <path d="M 10,5 L 30,5" stroke="#FEF08A" strokeWidth="2" strokeLinecap="round" />
        <polygon points="25,0 35,5 25,10" fill="#FEF08A" />
        <text x="35" y="-35" textAnchor="middle" fontSize="10" fill="#6EE7B7" fontWeight="bold">HOVÁ? (-ba)</text>
      </g>
    </svg>
  );
});

// ─── CÍMKÉK (MAGYAR NYELVEN) ──────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Ragozás Szigete",
    
    // T1: Igeragozás (Magnet)
    t1_title: "Ki csinálja?",
    t1_text: "Az igék vége megváltozik aszerint, hogy ki cselekszik. Ezt hívjuk igeragozásnak. Például: Én olvasOK, te olvasOL, ő olvas.",
    t1_b1: "Én: -k vagy -m a vége (futok, látom).",
    t1_b2: "Te: -l, -sz vagy -d a vége (futsz, látod).",
    t1_inst: "Párosítsd a személyt a hozzá illő igével!",
    t1_l1: "Én", t1_r1: "írok",
    t1_l2: "Te", t1_r2: "írsz",
    t1_l3: "Ő", t1_r3: "ír",
    t1_q: "Hogyan mondjuk helyesen, ha ÉN csinálom?",
    t1_q_a: "én játszom", t1_q_b: "én játszol", t1_q_c: "én játszik", t1_q_d: "én játszanak",

    // T2: Tárgyeset (Slingshot)
    t2_title: "A tárgy ragja: -t",
    t2_text: "Ha valamire a 'Mit?' vagy 'Kitet?' kérdéssel kérdezünk rá, akkor a szó végére egy '-t' betűt teszünk. Ezt hívjuk tárgyesetnek.",
    t2_b1: "Például: Mit eszel? Az almáT.",
    t2_b2: "Néha kell elé egy kötőhang: könyv -> könyvET.",
    t2_inst: "Lődd le az aszteroidát, amin a TÁRGY (-t ragos szó) van!",
    t2_target_1: "kiflit", // Helyes
    t2_target_2: "kifli",
    t2_target_3: "kiflivel",
    t2_q: "Melyik szó válaszol a 'Mit?' kérdésre?",
    t2_q_a: "ceruzát", t2_q_b: "ceruza", t2_q_c: "ceruzák", t2_q_d: "ceruzában",

    // T3: Birtokos személyjelek (Gap Fill)
    t3_title: "Kinek a mije?",
    t3_text: "Ha valami a miénk, azt a szó végén lévő jellel (birtokos személyjel) mutatjuk meg. Például: az én kutyáM, a te kutyáD, az ő kutyáJA.",
    t3_b1: "Enyém: -m (könyvem).",
    t3_b2: "Tiéd: -d (könyved).",
    t3_inst: "Válaszd ki a mondatba illő helyes szót!",
    t3_sentence: "Ez itt a te ___, vigyázz rá nagyon!",
    t3_opt1: "játékod", t3_opt2: "játékom", t3_opt3: "játéka", t3_opt4: "játék",
    t3_q: "Hogyan mondod, ha a táska a TIÉD?",
    t3_q_a: "táskád", t3_q_b: "táskám", t3_q_c: "táskája", t3_q_d: "táskánk",

    // T4: Helyhatározók - Hol? Hová? (Bucket)
    t4_title: "Hol vagy Hová?",
    t4_text: "Nem mindegy, hogy valahol már ott vagyunk (HOL? -> -ban, -ben), vagy éppen oda tartunk (HOVÁ? -> -ba, -be).",
    t4_b1: "HOL? -> a szobáBAN, a kertBEN.",
    t4_b2: "HOVÁ? -> a szobáBA, a kertBE.",
    t4_inst: "Válogasd szét a szavakat: HOL? (-ban/-ben) vagy HOVÁ? (-ba/-be)",
    t4_bucket_hol: "Hol? (-ban, -ben)",
    t4_bucket_hova: "Hová? (-ba, -be)",
    t4_item_h1: "erdőben", t4_item_h2: "házban",
    t4_item_o1: "erdőbe", t4_item_o2: "házba",
    t4_q: "Melyik szó válaszol a 'Hová?' kérdésre?",
    t4_q_a: "iskolába", t4_q_b: "iskolában", t4_q_c: "iskolából", t4_q_d: "iskoláig",

    // T5: Fun Catch
    t5_title: "Ragozás Bajnoka",
    t5_text: "Zseniális! A toldalékok (ragok és jelek) a magyar nyelv legfontosabb építőkockái, és te már kiválóan ismered őket.",
    t5_b1: "Tudod, ki cselekszik (igeragozás).",
    t5_b2: "Tudod, hol történik (helyhatározók).",
    t5_inst: "Kapj el 6 könyvet (📚), amik tele vannak ragozott szavakkal!",
    t5_q: "Melyik egy helyesen ragozott ige (TE csinálod)?",
    t5_q_a: "te futsz", t5_q_b: "te futok", t5_q_c: "te fut", t5_q_d: "te futnak",
  }
};

// ─── TOPICS ──────────────────────────────────────────

const TOPICS: TopicDef[] = [
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: (lang) => <Topic1Svg />,
    bulletKeys: ["t1_b1", "t1_b2"],
    interactive: {
      type: "match-pairs",
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
    svg: (lang) => <Topic1Svg />,
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
    svg: (lang) => <Topic2Svg />,
    bulletKeys: ["t3_b1", "t3_b2"],
    interactive: {
      type: "gap-fill",
      sentence: "t3_sentence",
      choices: ["t3_opt1", "t3_opt2", "t3_opt3", "t3_opt4"],
      correctIndex: 0,
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
    svg: (lang) => <Topic2Svg />,
    bulletKeys: ["t4_b1", "t4_b2"],
    interactive: {
      type: "physics-bucket",
      buckets: [
        { id: "hol", label: "t4_bucket_hol" },
        { id: "hova", label: "t4_bucket_hova" },
      ],
      items: [
        { text: "t4_item_h1", bucketId: "hol" },
        { text: "t4_item_o1", bucketId: "hova" },
        { text: "t4_item_h2", bucketId: "hol" },
        { text: "t4_item_o2", bucketId: "hova" },
      ],
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
    svg: (lang) => <Topic1Svg />,
    interactive: {
      type: "tap-count",
      tapCount: { emoji: "📚", count: 6 },
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
  icon: "📚",
  topics: TOPICS,
  rounds: [],
};

export default function ConjugationO2Explorer({ onDone, lang = "hu", color }: { onDone: (s: number, t: number) => void; lang?: string; color?: string }) {
  return (
    <ExplorerEngine 
      def={DEF} 
      grade={2} 
      explorerId="magyar_o2_i6" 
      color="#10B981" 
      lang={lang} 
      onDone={onDone} 
    />
  );
}
