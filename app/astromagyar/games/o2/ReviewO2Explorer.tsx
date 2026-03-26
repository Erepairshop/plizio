"use client";
// ReviewO2Explorer.tsx — AstroMagyar Grade 2: i9 Nagy Próba
// Témák: 1) Szófajok (Főnév, Ige) 2) Helyesírás (j/ly) 3) Mondatfajták 4) Szinonimák 5) Csillag-kapó (Végső győzelem)

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
        {/* Nyitott könyv pipákkal (Sikeres teszt) */}
        <path d="M -40,20 Q -20,10 0,20 L 0,-20 Q -20,-30 -40,-20 Z" fill="#F8FAFC" />
        <path d="M 40,20 Q 20,10 0,20 L 0,-20 Q 20,-30 40,-20 Z" fill="#E2E8F0" />
        <line x1="0" y1="-20" x2="0" y2="20" stroke="#94A3B8" strokeWidth="2" />
        
        {/* Zöld pipák a könyvlapokon */}
        <path d="M -25,-5 L -20,0 L -10,-10" stroke="#10B981" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 15,-5 L 20,0 L 30,-10" stroke="#10B981" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M -25,10 L -20,15 L -10,5" stroke="#10B981" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
});

// ─── CÍMKÉK (MAGYAR NYELVEN) ──────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Nagy Próba",
    
    // T1: Szófajok (Bucket)
    t1_title: "Szófaj-teszt",
    t1_text: "Lássuk, emlékszel-e a szófajokra! A főnév élőlényeket és tárgyakat jelöl (Ki? Mi?), az ige pedig cselekvést (Mit csinál?).",
    t1_b1: "Főnév: asztal, kutya.",
    t1_b2: "Ige: fut, olvas.",
    t1_inst: "Válogasd szét a szavakat: Főnév vagy Ige?",
    t1_bucket_fon: "Főnév",
    t1_bucket_ige: "Ige",
    t1_item_f1: "iskola", t1_item_f2: "medve",
    t1_item_i1: "játszik", t1_item_i2: "alszik",
    t1_q: "Melyik szó IGE (cselekvés) az alábbiak közül?",
    t1_q_a: "nevet", t1_q_b: "könyv", t1_q_c: "piros", t1_q_d: "gyorsan",

    // T2: Helyesírás (Slingshot)
    t2_title: "J vagy LY?",
    t2_text: "A helyesírás fontos! Emlékszel még a j-s és ly-os szavakra? Nézzük meg, mennyire vág az eszed!",
    t2_b1: "Például: hajó, jég.",
    t2_b2: "Például: bagoly, osztály.",
    t2_inst: "Lődd le az aszteroidát, amelyiken HELYESEN van írva a szó!",
    t2_target_1: "osztály", // Helyes
    t2_target_2: "osztáj",
    t2_target_3: "osztálj",
    t2_q: "Hogyan írjuk helyesen a madár nevét?",
    t2_q_a: "gólya", t2_q_b: "gója", t2_q_c: "góllya", t2_q_d: "gójja",

    // T3: Mondatfajták (Magnet)
    t3_title: "Mondatjelek párbaja",
    t3_text: "Minden mondatfajtának megvan a maga írásjele a végén. Egy kijelentés pontot, egy kérdés kérdőjelet kap.",
    t3_b1: "Kijelentő mondat végén pont (.) áll.",
    t3_b2: "Kérdő mondat végén kérdőjel (?) áll.",
    t3_inst: "Párosítsd össze a mondatfajtát a helyes írásjellel!",
    t3_l1: "Kijelentő", t3_r1: "pont (.)",
    t3_l2: "Kérdő", t3_r2: "kérdőjel (?)",
    t3_l3: "Felkiáltó", t3_r3: "felkiáltójel (!)",
    t3_q: "Milyen írásjel kell a mondat végére: 'De szép ez a virág'",
    t3_q_a: "!", t3_q_b: ".", t3_q_c: "?", t3_q_d: ",",

    // T4: Szinonimák (Highlight)
    t4_title: "Rokon értelmű szavak",
    t4_text: "Milyen gazdag a szókincsed? Keresd meg a mondatban azt a szót, aminek ugyanaz a jelentése, mint a megadott szónak!",
    t4_b1: "A szinonimák máshogy hangzanak, de ugyanazt jelentik.",
    t4_inst: "Jelöld ki a mondatban a 'GYÖNYÖRŰ' szó szinonimáját!",
    t4_tok0: "A", t4_tok1: "kertben", t4_tok2: "egy", t4_tok3: "szép", t4_tok4: "rózsa", t4_tok5: "nyílik.",
    t4_q: "Melyik szó rokon értelmű a 'fut' igével?",
    t4_q_a: "szalad", t4_q_b: "sétál", t4_q_c: "megy", t4_q_d: "alszik",

    // T5: Fun Catch
    t5_title: "A Szókinesia Bajnoka",
    t5_text: "Hihetetlen vagy! Sikeresen teljesítetted a másodikos Magyar Galaxis minden próbáját. Jöhet a harmadik osztály?",
    t5_b1: "Ismered a szófajokat.",
    t5_b2: "Hibátlan a helyesírásod.",
    t5_inst: "Kapj el 6 aranycsillagot (🌟) a bajnoki címért!",
    t5_q: "Mi a mondat két legfontosabb része (a mondat magja)?",
    t5_q_a: "Alany és állítmány", t5_q_b: "Főnév és ige", t5_q_c: "Pont és kérdőjel", t5_q_d: "Betű és szótag",
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
        { id: "fon", label: "t1_bucket_fon" },
        { id: "ige", label: "t1_bucket_ige" },
      ],
      items: [
        { text: "t1_item_f1", bucketId: "fon" },
        { text: "t1_item_i1", bucketId: "ige" },
        { text: "t1_item_f2", bucketId: "fon" },
        { text: "t1_item_i2", bucketId: "ige" },
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
    svg: (lang) => <Topic1Svg />,
    bulletKeys: ["t3_b1", "t3_b2"],
    interactive: {
      type: "physics-magnet",
      pairs: [
        { left: "t3_l1", right: "t3_r1" },
        { left: "t3_l2", right: "t3_r2" },
        { left: "t3_l3", right: "t3_r3" },
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
    svg: (lang) => <Topic2Svg />,
    bulletKeys: ["t4_b1"],
    interactive: {
      type: "highlight-text",
      tokens: ["t4_tok0", "t4_tok1", "t4_tok2", "t4_tok3", "t4_tok4", "t4_tok5"],
      correctIndices: [3], // "szép"
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
    svg: (lang) => <Topic1Svg />,
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

export default function ReviewO2Explorer({ onDone, lang = "hu" }: { onDone: (s: number, t: number) => void; lang?: string }) {
  return (
    <ExplorerEngine 
      def={DEF} 
      grade={2} 
      explorerId="magyar_o2_i9" 
      color="#4ECDC4" 
      lang={lang} 
      onDone={onDone} 
    />
  );
}
