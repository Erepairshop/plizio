"use client";
// VocabularyO2Explorer.tsx — AstroMagyar Grade 2: i8 Szókincs Szigete
// Témák: 1) Foglalkozások 2) Évszakok 3) Iskola 4) Természet és Sport 5) Világ-kapó

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── ILUSZTRÁCIÓK (Geometrikus SVG) ───────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#701A75" rx="20" />
      <g transform="translate(120, 70)">
        {/* Földgömb szimbólum */}
        <circle cx="0" cy="0" r="35" fill="#E879F9" opacity="0.2" stroke="#F5D0FE" strokeWidth="2" />
        <path d="M -25,-25 Q 0,-35 25,-25 M -35,0 L 35,0 M -25,25 Q 0,35 25,25" fill="none" stroke="#F5D0FE" strokeWidth="1" />
        <path d="M 0,-35 Q 15,0 0,35 M 0,-35 Q -15,0 0,35" fill="none" stroke="#F5D0FE" strokeWidth="1" />
        <text x="0" y="55" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#F5D0FE">VILÁGKÖRÜLI ÚT</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#4A044E" rx="20" />
      <g transform="translate(120, 70)">
        {/* Évszakok szimbólumai */}
        <circle cx="-30" cy="-20" r="12" fill="#FDE047" /> {/* Nyár */}
        <path d="M 30,-32 L 30,-8 M 18,-20 L 42,-20" stroke="#BAE6FD" strokeWidth="3" /> {/* Tél pehely */}
        <path d="M -35,25 Q -30,10 -25,25" fill="#4ADE80" /> {/* Tavasz fű */}
        <circle cx="30" cy="20" r="10" fill="#FB923C" /> {/* Ősz levél */}
      </g>
    </svg>
  );
});

// ─── CÍMKÉK (MAGYAR NYELVEN) ──────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Szókincs Szigete",
    
    // T1: Foglalkozások (Bucket)
    t1_title: "Ki mit dolgozik?",
    t1_text: "Felnőtt korában mindenki választ magának egy foglalkozást. Vannak, akik gyógyítanak, mások tanítanak vagy éppen építkeznek.",
    t1_b1: "Az orvos kórházban dolgozik.",
    t1_b2: "A pék finom kenyeret süt.",
    t1_inst: "Válogasd szét az eszközöket: melyik mester használja őket?",
    t1_bucket_orvos: "Orvos",
    t1_bucket_asztalos: "Asztalos",
    t1_item_o1: "lázmérő", t1_item_o2: "gyógyszer",
    t1_item_a1: "kalapács", t1_item_a2: "fűrész",
    t1_q: "Melyik foglalkozásnál van szükség fakanálra?",
    t1_q_a: "szakács", t1_q_b: "tűzoltó", t1_q_c: "postás", t1_q_d: "pilóta",

    // T2: Évszakok (Magnet)
    t2_title: "Négy évszak",
    t2_text: "Egy évben négy évszak váltja egymást: tavasz, nyár, ősz és tél. Mindegyiknek megvannak a sajátosságai.",
    t2_b1: "Télen esik a hó.",
    t2_b2: "Nyáron sokat süt a nap.",
    t2_inst: "Párosítsd össze az évszakot a rá jellemző dologgal!",
    t2_l1: "Tavasz", t2_r1: "virágnyílás",
    t2_l2: "Ősz", t2_r2: "levélhullás",
    t2_l3: "Tél", t2_r3: "hóember",
    t2_q: "Hány évszak van egy évben?",
    t2_q_a: "4", t2_q_b: "3", t2_q_c: "12", t2_q_d: "7",

    // T3: Iskola (Gap Fill)
    t3_title: "Iskolai kalandok",
    t3_text: "Az iskolában sok eszközt használunk a tanuláshoz. Fontos, hogy minden reggel rendben legyen a táskánk!",
    t3_b1: "A tolltartóban vannak a ceruzák.",
    t3_b2: "A könyvekből tanulunk.",
    t3_inst: "Válaszd ki a mondatba illő iskolai eszközt!",
    t3_sentence: "A rajzórán a színes ___ rajzoltam egy fát.",
    t3_opt1: "ceruzával", t3_opt2: "radírral", t3_opt3: "vonalzóval", t3_opt4: "táskával",
    t3_q: "Melyik eszközt használjuk a hibák kijavítására a füzetben?",
    t3_q_a: "radír", t3_q_b: "hegyező", t3_q_c: "körző", t3_q_d: "olló",

    // T4: Természet és Sport (Slingshot)
    t4_title: "Sport és Szabadidő",
    t4_text: "A szabadban lenni és sportolni nemcsak egészséges, de szórakoztató is. Te mit szeretsz csinálni a játszótéren?",
    t4_b1: "Focizni a pályán lehet.",
    t4_b2: "A természetben kirándulunk.",
    t4_inst: "Lődd le az aszteroidát: Melyik egy SPORT?",
    t4_target_1: "kosárlabda", // Helyes
    t4_target_2: "olvasás",
    t4_target_3: "alvás",
    t4_q: "Milyen sportot űznek a jégen korcsolyával?",
    t4_q_a: "jégkorong", t4_q_b: "foci", t4_q_c: "úszás", t4_q_d: "tenisz",

    // T5: Fun Catch
    t5_title: "Minden tudás szigete",
    t5_text: "Bámulatos! Most már otthonosan mozogsz a világ dolgai között, legyen szó munkáról, időjárásról vagy sportról.",
    t5_b1: "Ismered a mesterségeket.",
    t5_b2: "Tudod az évszakok sorrendjét.",
    t5_inst: "Kapj el 6 földgömböt (🌍), hogy beutazhasd a világot!",
    t5_q: "Melyik évszak jön a TAVASZ után?",
    t5_q_a: "nyár", t5_q_b: "tél", t5_q_c: "ősz", t5_q_d: "hétfő",
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
      type: "physics-bucket",
      buckets: [
        { id: "orvos", label: "t1_bucket_orvos" },
        { id: "asztalos", label: "t1_bucket_asztalos" },
      ],
      items: [
        { text: "t1_item_o1", bucketId: "orvos" },
        { text: "t1_item_a1", bucketId: "asztalos" },
        { text: "t1_item_o2", bucketId: "orvos" },
        { text: "t1_item_a2", bucketId: "asztalos" },
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
    svg: (lang) => <Topic2Svg />,
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
    svg: (lang) => <Topic1Svg />,
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
      type: "physics-slingshot",
      question: "t4_inst",
      targets: [
        { id: "tgt1", text: "t4_target_1", isCorrect: true },
        { id: "tgt2", text: "t4_target_2", isCorrect: false },
        { id: "tgt3", text: "t4_target_3", isCorrect: false },
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
      tapCount: { emoji: "🌍", count: 6 },
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
  icon: "🌍",
  topics: TOPICS,
  rounds: [],
};

export default function VocabularyO2Explorer({ onDone, lang = "hu" }: { onDone: (s: number, t: number) => void; lang?: string }) {
  return (
    <ExplorerEngine 
      def={DEF} 
      grade={2} 
      explorerId="magyar_o2_i8" 
      color="#E879F9" 
      lang={lang} 
      onDone={onDone} 
    />
  );
}
