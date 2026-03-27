"use client";
// SynonymsExplorer.tsx — AstroMagyar Grade 2: i7 Szinonimák Szigete
// Témák: 1) Szinonimák (Rokon értelmű szavak) 2) Újabb ellentétek 3) Árnyalt kifejezések 4) Szövegkörnyezet 5) Maszk-kapó

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── ILUSZTRÁCIÓK (Geometrikus SVG) ───────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#7C2D12" rx="20" />
      <g transform="translate(120, 70)">
        {/* Két maszk, amik ugyanazt az érzelmet fejezik ki */}
        <circle cx="-40" cy="0" r="25" fill="#FDBA74" />
        <circle cx="40" cy="0" r="25" fill="#FB923C" />
        {/* Szemek és mosoly mindkettőnek */}
        <circle cx="-50" cy="-5" r="3" fill="#7C2D12" />
        <circle cx="-30" cy="-5" r="3" fill="#7C2D12" />
        <path d="M -50,10 Q -40,20 -30,10" fill="none" stroke="#7C2D12" strokeWidth="2" />
        
        <circle cx="30" cy="-5" r="3" fill="#7C2D12" />
        <circle cx="50" cy="-5" r="3" fill="#7C2D12" />
        <path d="M 30,10 Q 40,20 50,10" fill="none" stroke="#7C2D12" strokeWidth="2" />
        
        <text x="0" y="55" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#FFEDD5">Különböző szavak, ugyanaz a jelentés!</text>
      </g>
    </svg>
  );
});

// ─── CÍMKÉK (MAGYAR NYELVEN) ──────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Szinonimák Szigete",
    
    // T1: Szinonimák (Magnet)
    t1_title: "Rokon értelmű szavak",
    t1_text: "A szinonimák olyan szavak, amiket máshogy írunk, de a jelentésük majdnem ugyanaz. Segítenek, hogy ne ismételjük magunkat!",
    t1_b1: "Például: szalad - fut - robog.",
    t1_b2: "Például: szép - gyönyörű - csodás.",
    t1_inst: "Párosítsd össze az egymáshoz illő rokon értelmű szavakat!",
    t1_l1: "beszél", t1_r1: "mond",
    t1_l2: "kutya", t1_r2: "ebb",
    t1_l3: "vidám", t1_r3: "boldog",
    t1_q: "Melyik szó szinonimája az 'autó' szónak?",
    t1_q_a: "gépkocsi", t1_q_b: "bicikli", t1_q_c: "repülő", t1_q_d: "kerék",

    // T2: Ellentétek 2 (Slingshot)
    t2_title: "Ellentétek párbaja",
    t2_text: "Az ellentéteket már ismered, de most nehezebb párokat nézünk. Ezek a szavak segítenek leírni a különbségeket a világban.",
    t2_b1: "Bátor ellentéte a gyáva.",
    t2_b2: "Halk ellentéte a hangos.",
    t2_inst: "Lődd le az aszteroidát, ami a 'BÁTOR' szó ellentéte!",
    t2_target_1: "gyáva", // Helyes
    t2_target_2: "erős",
    t2_target_3: "hős",
    t2_q: "Mi a 'szorgalmas' szó ellentéte?",
    t2_q_a: "lusta", t2_q_b: "ügyes", t2_q_c: "gyors", t2_q_d: "okos",

    // T3: Árnyalt jelentés (Bucket)
    t3_title: "Melyik illik oda?",
    t3_text: "Bár a szinonimák hasonlóak, néha az egyik jobban illik a helyzethez. Ha egy pici állatról beszélünk, 'kicsi', ha egy óriásról, akkor 'hatalmas'.",
    t3_b1: "Kicsi: apró, pöttöm.",
    t3_b2: "Nagy: óriási, hatalmas.",
    t3_inst: "Válogasd szét a szavakat: a KICSI vagy a NAGY rokonai?",
    t3_bucket_kicsi: "KICSI",
    t3_bucket_nagy: "NAGY",
    t3_item_k1: "apró", t3_item_k2: "parányi",
    t3_item_n1: "óriási", t3_item_n2: "termetes",
    t3_q: "Ha valami nagyon-nagyon kicsi, melyik szót használjuk?",
    t3_q_a: "parányi", t3_q_b: "méretes", t3_q_c: "széles", t3_q_d: "magas",

    // T4: Szinonima a mondatban (Highlight)
    t4_title: "Változatos beszéd",
    t4_text: "Próbáljunk meg egy mondatban kicserélni egy egyszerű szót egy szebbre! Ez teszi az olvasást élvezetessé.",
    t4_b1: "A 'szép' helyett használhatunk mást is.",
    t4_inst: "Jelöld ki a mondatban a 'SZÉP' szó szinonimáját!",
    t4_tok0: "A", t4_tok1: "kertben", t4_tok2: "egy", t4_tok3: "gyönyörű", t4_tok4: "virág", t4_tok5: "nyílik.",
    t4_q: "Melyik szóval helyettesíthettük a 'gyönyörű' szót?",
    t4_q_a: "pompás", t4_q_b: "csúnya", t4_q_c: "vizes", t4_q_d: "hangos",

    // T5: Fun Catch
    t5_title: "Szómágus",
    t5_text: "Fantasztikus! Most már igazi szómágus vagy, aki ezerféleképpen tudja kifejezni magát.",
    t5_b1: "Ismered a rokon értelmű szavakat.",
    t5_b2: "Tudod az ellentéteket is.",
    t5_inst: "Kapj el 6 színházi maszkot (🎭) a végső győzelemhez!",
    t5_q: "Mire jók a szinonimák?",
    t5_q_a: "Hogy választékosabban beszéljünk.", t5_q_b: "Hogy nehezebb legyen az írás.", t5_q_c: "Hogy hosszabb legyen a házi feladat.", t5_q_d: "Semmire.",
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
    svg: (lang) => <Topic1Svg />,
    bulletKeys: ["t3_b1", "t3_b2"],
    interactive: {
      type: "physics-bucket",
      buckets: [
        { id: "kic", label: "t3_bucket_kicsi" },
        { id: "nag", label: "t3_bucket_nagy" },
      ],
      items: [
        { text: "t3_item_k1", bucketId: "kic" },
        { text: "t3_item_n1", bucketId: "nag" },
        { text: "t3_item_k2", bucketId: "kic" },
        { text: "t3_item_n2", bucketId: "nag" },
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
    svg: (lang) => <Topic1Svg />,
    bulletKeys: ["t4_b1"],
    interactive: {
      type: "highlight-text",
      tokens: ["t4_tok0", "t4_tok1", "t4_tok2", "t4_tok3", "t4_tok4", "t4_tok5"],
      correctIndices: [3], // "gyönyörű"
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
      tapCount: { emoji: "🎭", count: 6 },
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
  icon: "🎭",
  topics: TOPICS,
  rounds: [],
};

export default function SynonymsExplorer({ onDone, lang = "hu", color }: { onDone: (s: number, t: number) => void; lang?: string; color?: string }) {
  return (
    <ExplorerEngine 
      def={DEF} 
      grade={2} 
      explorerId="magyar_o2_i7" 
      color="#FF9500" 
      lang={lang} 
      onDone={onDone} 
    />
  );
}
