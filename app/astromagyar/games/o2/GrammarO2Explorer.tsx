"use client";
// GrammarO2Explorer.tsx — AstroMagyar Grade 2: Nyelvtan alapok

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#064E3B" rx="20" />
      <g transform="translate(120, 70)">
        <rect x="-50" y="-20" width="40" height="28" fill="#10B981" rx="6" />
        <rect x="10" y="-20" width="40" height="28" fill="#34D399" rx="6" />
        <text x="-30" y="0" textAnchor="middle" fontSize="14" fill="#fff" fontWeight="bold">Fő</text>
        <text x="30" y="0" textAnchor="middle" fontSize="14" fill="#fff" fontWeight="bold">Ige</text>
        <text x="0" y="35" textAnchor="middle" fontSize="11" fill="#A7F3D0" fontWeight="bold">MONDATRÉSZEK</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#065F46" rx="20" />
      <g transform="translate(120, 70)">
        <circle cx="-30" cy="-10" r="18" fill="#10B981" />
        <circle cx="30" cy="-10" r="18" fill="#34D399" />
        <text x="-30" y="-5" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="bold">Ki?</text>
        <text x="30" y="-5" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="bold">Mit?</text>
        <text x="0" y="35" textAnchor="middle" fontSize="11" fill="#A7F3D0" fontWeight="bold">KÉRDŐSZAVAK</text>
      </g>
    </svg>
  );
});

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Nyelvtan alapok",
    t1_title: "Mondatrészek",
    t1_text: "Minden mondatnak van alanya (Ki? Mi?) és állítmánya (Mit csinál?). Az alany a főszereplő, az állítmány pedig az, amit csinál.",
    t1_b1: "Az alany kérdése: Ki? Mi?",
    t1_b2: "Az állítmány kérdése: Mit csinál?",
    t1_inst: "Válaszd szét az alanyokat és az állítmányokat!",
    t2_title: "Kérdőszavak",
    t2_text: "A kérdőszavak segítenek megtalálni a mondatrészeket. Ki? Mi? Mit csinál? Hol? Mikor?",
    t2_b1: "Ki? Mi? → alany",
    t2_b2: "Mit csinál? → állítmány",
    t2_inst: "Párosítsd a kérdést a mondatrésszel!",
    t3_title: "Mondat felépítése",
    t3_text: "A magyar mondatban a szórend rugalmas, de az alany és az állítmány mindig megvan.",
    t3_inst: "Rakd össze a mondatot!",
    t4_title: "Felszólító mondat",
    t4_text: "Ha kérünk vagy parancsolunk, felszólító mondatot használunk. A végén felkiáltójel áll!",
    t4_inst: "Találd meg a felszólító mondatokat!",
    t5_title: "Ismétlés",
    t5_text: "Gyakoroljuk, amit tanultunk a mondatokról!",
    // quiz keys
    t1_q: "Mi az alany kérdése?",
    t1_c1: "Ki? Mi?", t1_c2: "Mit csinál?", t1_c3: "Hol?", t1_c4: "Mikor?", t1_a: "Ki? Mi?",
    t2_q: "Melyik a mondat állítmánya: 'A kutya fut.'?",
    t2_c1: "kutya", t2_c2: "fut", t2_c3: "A", t2_c4: "a mondat", t2_a: "fut",
    t3_q: "Hány fő mondatrész van?",
    t3_c1: "1", t3_c2: "2", t3_c3: "3", t3_c4: "4", t3_a: "2",
    t4_q: "Mi áll a felszólító mondat végén?",
    t4_c1: "Pont", t4_c2: "Kérdőjel", t4_c3: "Felkiáltójel", t4_c4: "Vessző", t4_a: "Felkiáltójel",
    t5_q: "Melyik az alany ebben: 'Anna olvas.'?",
    t5_c1: "Anna", t5_c2: "olvas", t5_c3: "mindkettő", t5_c4: "egyik sem", t5_a: "Anna",
  },
};

const TOPICS: TopicDef[] = [
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: () => <Topic1Svg />,
    bulletKeys: ["t1_b1", "t1_b2"],
    interactive: {
      type: "physics-bucket",
      buckets: [
        { id: "alany", label: "Alany" },
        { id: "allit", label: "Állítmány" },
      ],
      items: [
        { text: "kutya", bucketId: "alany" },
        { text: "fut", bucketId: "allit" },
        { text: "madár", bucketId: "alany" },
        { text: "énekel", bucketId: "allit" },
        { text: "gyerek", bucketId: "alany" },
        { text: "játszik", bucketId: "allit" },
      ],
      instruction: "t1_inst",
      hint1: "Ki? Mi? → Alany",
      hint2: "Mit csinál? → Állítmány",
    },
    quiz: {
      question: "t1_q",
      choices: ["t1_c1", "t1_c2", "t1_c3", "t1_c4"],
      answer: "t1_a",
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
        { left: "Ki?", right: "Alany" },
        { left: "Mit csinál?", right: "Állítmány" },
        { left: "Hol?", right: "Helyhatározó" },
        { left: "Mikor?", right: "Időhatározó" },
      ],
      instruction: "t2_inst",
      hint1: "Kérdés → mondatrész",
      hint2: "Gondolj a tanult szabályra!",
    },
    quiz: {
      question: "t2_q",
      choices: ["t2_c1", "t2_c2", "t2_c3", "t2_c4"],
      answer: "t2_a",
    },
  },
  {
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: () => <Topic1Svg />,
    interactive: {
      type: "sentence-build",
      fragments: ["A", "kutya", "a", "kertben", "játszik."],
      instruction: "t3_inst",
      hint1: "A nagybetű az eleje!",
      hint2: "A pont a végén!",
    },
    quiz: {
      question: "t3_q",
      choices: ["t3_c1", "t3_c2", "t3_c3", "t3_c4"],
      answer: "t3_a",
    },
  },
  {
    infoTitle: "t4_title",
    infoText: "t4_text",
    svg: () => <Topic2Svg />,
    interactive: {
      type: "highlight-text",
      tokens: ["Gyere", "ide!", "A", "kutya", "alszik.", "Ülj", "le!"],
      correctIndices: [0, 5],
      instruction: "t4_inst",
      hint1: "Melyik mondat parancsol?",
      hint2: "A felkiáltójel segít!",
    },
    quiz: {
      question: "t4_q",
      choices: ["t4_c1", "t4_c2", "t4_c3", "t4_c4"],
      answer: "t4_a",
    },
  },
  {
    infoTitle: "t5_title",
    infoText: "t5_text",
    svg: () => <Topic1Svg />,
    interactive: {
      type: "tap-count",
      tapCount: { emoji: "📝", count: 5 },
      instruction: "Gyűjts össze 5 ceruzát!",
      hint1: "Kattints rájuk!",
      hint2: "Már majdnem kész!",
    },
    quiz: {
      question: "t5_q",
      choices: ["t5_c1", "t5_c2", "t5_c3", "t5_c4"],
      answer: "t5_a",
    },
  },
];

const DEF: ExplorerDef = { labels: LABELS, topics: TOPICS, rounds: [] };

export default function GrammarO2Explorer({ color, lang, onDone }: { color?: string; lang?: string; onDone?: (s: number, t: number) => void }) {
  return <ExplorerEngine def={DEF} color={color || "#10B981"} lang={lang} onDone={onDone} />;
}
