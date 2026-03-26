"use client";
// FamilyExplorer.tsx — AstroMagyar Grade 1: i8 Család szigete
// Témák: 1) Családtagok 2) Testrészek vs. Ételek 3) Innivalók 4) Szókereső 5) Alma-kapó

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── ILUSZTRÁCIÓK (Geometrikus SVG) ───────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#86198F" rx="20" />
      <g transform="translate(120, 80)">
        {/* Család: Két felnőtt, egy gyerek (egyszerűsített) */}
        {/* Apa */}
        <circle cx="-30" cy="-30" r="10" fill="#E879F9" />
        <path d="M -45,10 Q -30,-20 -15,10" fill="#C026D3" />
        {/* Anya */}
        <circle cx="30" cy="-25" r="9" fill="#E879F9" />
        <path d="M 15,10 Q 30,-15 45,10" fill="#D946EF" />
        {/* Gyerek */}
        <circle cx="0" cy="-15" r="7" fill="#F0ABFC" />
        <path d="M -10,10 Q 0,-5 10,10" fill="#E879F9" />
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#4A044E" rx="20" />
      <g transform="translate(120, 70)">
        {/* Arc (Testrész) és Alma (Étel) */}
        {/* Arc */}
        <circle cx="-40" cy="0" r="25" fill="#FDE047" />
        <circle cx="-48" cy="-5" r="3" fill="#4A044E" />
        <circle cx="-32" cy="-5" r="3" fill="#4A044E" />
        <path d="M -45,10 Q -40,15 -35,10" fill="none" stroke="#4A044E" strokeWidth="2" />
        
        {/* Alma */}
        <circle cx="40" cy="5" r="20" fill="#EF4444" />
        <path d="M 40,-15 Q 45,-25 50,-20" fill="none" stroke="#10B981" strokeWidth="4" strokeLinecap="round" />
        <path d="M 40,-15 L 40,-5" stroke="#78350F" strokeWidth="3" />
      </g>
    </svg>
  );
});

// ─── CÍMKÉK (MAGYAR NYELVEN) ──────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Család szigete",
    
    // T1: Családtagok (Magnet)
    t1_title: "A családom",
    t1_text: "A családunkban többen is élhetnek: anya, apa, testvérek, és a nagyszülők. Ők a legfontosabbak nekünk!",
    t1_b1: "Anya és apa a szüleink.",
    t1_b2: "Nagymama és nagypapa a nagyszüleink.",
    t1_inst: "Párosítsd össze a családtagokat!",
    t1_l1: "Anya", t1_r1: "Apa",
    t1_l2: "Nagymama", t1_r2: "Nagypapa",
    t1_l3: "Lánytestvér", t1_r3: "Fiútestvér",
    t1_q: "Kik a szüleink?",
    t1_q_a: "Anya és apa", t1_q_b: "Nagymama és nagypapa", t1_q_c: "A testvérek", t1_q_d: "A barátok",

    // T2: Testrészek vs Ételek (Bucket)
    t2_title: "Testünk és ételünk",
    t2_text: "Nézz magadra! Van fejed, kezed, lábad. Ezek a testrészeid. Az ételeket pedig megesszük, hogy nagyra nőjünk!",
    t2_b1: "Testrész: szem, fül, orr, száj.",
    t2_b2: "Étel: kenyér, alma, sajt.",
    t2_inst: "Válogasd szét a szavakat: Testrész vagy Étel?",
    t2_bucket_tes: "Testrész",
    t2_bucket_ete: "Étel",
    t2_item_t1: "kéz", t2_item_t2: "orr",
    t2_item_e1: "kenyér", t2_item_e2: "leves",
    t2_q: "Melyik testrészünkkel látunk?",
    t2_q_a: "szem", t2_q_b: "fül", t2_q_c: "orr", t2_q_d: "száj",

    // T3: Innivalók (Slingshot)
    t3_title: "Finom falatok",
    t3_text: "Minden nap eszünk és iszunk. Reggelire például meleg tejet iszunk és friss kiflit eszünk.",
    t3_b1: "Az almát és a sajtot megesszük.",
    t3_b2: "A vizet és a tejet megisszuk.",
    t3_inst: "Lődd le az aszteroidát: Melyiket tudjuk MEGINNI?",
    t3_target_1: "víz", // Helyes
    t3_target_2: "kenyér",
    t3_target_3: "sajt",
    t3_q: "Melyik egy egészséges gyümölcs?",
    t3_q_a: "alma", t3_q_b: "kifli", t3_q_c: "sajt", t3_q_d: "víz",

    // T4: Keresd a családtagot! (Highlight)
    t4_title: "Szókereső",
    t4_text: "A családtagok gyakran szerepelnek a történetekben és a mondatokban. Keresd meg, kiről szól a mondat!",
    t4_b1: "Olvasd el a mondatot!",
    t4_b2: "Kattints a családtag nevére!",
    t4_inst: "Jelöld ki a mondatban a CSALÁDTAGOT!",
    t4_tok0: "A", t4_tok1: "nagymama", t4_tok2: "egy", t4_tok3: "nagyon", t4_tok4: "szép", t4_tok5: "mesét", t4_tok6: "olvas.",
    t4_q: "A mondat alapján mit csinál a nagymama?",
    t4_q_a: "olvas", t4_q_b: "főz", t4_q_c: "alszik", t4_q_d: "sétál",

    // T5: Fun Catch
    t5_title: "Családi ebéd",
    t5_text: "Mindenki összegyűlt az asztalnál! Ismered a családtagokat, a testrészeket és az ételeket is.",
    t5_b1: "A kéz testrész.",
    t5_b2: "A leves étel.",
    t5_inst: "Kapj el 6 almát (🍎), hogy legyen mit enni ebéd után!",
    t5_q: "Melyik NEM egy étel vagy ital?",
    t5_q_a: "cipő", t5_q_b: "kenyér", t5_q_c: "leves", t5_q_d: "víz",
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
      type: "physics-bucket",
      buckets: [
        { id: "tes", label: "t2_bucket_tes" },
        { id: "ete", label: "t2_bucket_ete" },
      ],
      items: [
        { text: "t2_item_t1", bucketId: "tes" },
        { text: "t2_item_e1", bucketId: "ete" },
        { text: "t2_item_t2", bucketId: "tes" },
        { text: "t2_item_e2", bucketId: "ete" },
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
    svg: () => <Topic2Svg />,
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
      correctIndices: [1], // "nagymama"
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
      tapCount: { emoji: "🍎", count: 6 },
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
  icon: "👨‍👩‍👧",
  topics: TOPICS,
  rounds: [],
};

export default function FamilyExplorer({ onDone, lang = "hu" }: { onDone: (s: number, t: number) => void; lang?: string }) {
  return (
    <ExplorerEngine 
      def={DEF} 
      grade={1} 
      explorerId="magyar_o1_i8" 
      color="#E879F9" 
      lang={lang} 
      onDone={onDone} 
    />
  );
}
