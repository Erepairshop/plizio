"use client";
// SoundExplorer.tsx — AstroMagyar Grade 1: i3 Hangok szigete
// Témák: 1) Rövid vs Hosszú 2) J vagy LY 3) Kettőzött mássalhangzók 4) Hang-párok 5) Hangjegy-kapó

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── ILUSZTRÁCIÓK (Geometrikus SVG) ───────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#064E3B" rx="20" />
      <g transform="translate(120, 70)">
        {/* Rövid és hosszú hang (Kis kör, Nagy ovális) */}
        <circle cx="-40" cy="0" r="15" fill="#34D399" />
        <text x="-40" y="5" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#064E3B">U</text>
        
        <ellipse cx="40" cy="0" rx="30" ry="15" fill="#10B981" />
        <text x="40" y="5" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#022C22">Ú</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#065F46" rx="20" />
      <g transform="translate(120, 70)">
        {/* J vs LY mérleg */}
        <path d="M -40,20 L 40,20" stroke="#6EE7B7" strokeWidth="4" />
        <polygon points="0,20 -10,40 10,40" fill="#10B981" />
        <rect x="-50" y="-10" width="30" height="30" fill="#059669" rx="4" />
        <text x="-35" y="10" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#A7F3D0">J</text>
        <rect x="20" y="-10" width="30" height="30" fill="#047857" rx="4" />
        <text x="35" y="10" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#A7F3D0">LY</text>
      </g>
    </svg>
  );
});

// ─── CÍMKÉK (MAGYAR NYELVEN) ──────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Hangok szigete",
    
    // T1: Rövid vs Hosszú
    t1_title: "Rövid vagy hosszú?",
    t1_text: "A magánhangzók lehetnek rövidek (a, e, i, o, ö, u, ü) vagy hosszúak, ha ékezet van rajtuk (á, é, í, ó, ő, ú, ű). Vigyázz, a hosszúkat hosszan ejtjük!",
    t1_b1: "Rövid: O. Hosszú: Ó.",
    t1_b2: "Az ékezet mutatja, hogy hosszan kell mondani.",
    t1_inst: "Válogasd szét a magánhangzókat Rövid vagy Hosszú kosárba!",
    t1_bucket_sho: "Rövid",
    t1_bucket_lon: "Hosszú",
    t1_item_s1: "O", t1_item_s2: "U",
    t1_item_l1: "Ó", t1_item_l2: "Ú",
    t1_q: "Melyik egy HOSSZÚ magánhangzó?",
    t1_q_a: "Ű", t1_q_b: "U", t1_q_c: "Ü", t1_q_d: "O",

    // T2: J vagy LY
    t2_title: "A nagy 'J' vagy 'LY' rejtély",
    t2_text: "A magyar nyelvben a 'j' hangot kétféleképpen írhatjuk le: pontos j-vel vagy elipszilonos ly-nal. Kiejteni ugyanúgy kell, de csak az egyik helyes!",
    t2_b1: "A legtöbb szóban 'j' van (pl. jég, hajó).",
    t2_b2: "De vannak híres 'ly'-os szavak is (pl. bagoly, osztály).",
    t2_inst: "Lődd le az aszteroidát, amelyiken HELYESEN van leírva a szó!",
    t2_target_1: "gólya", // Helyes
    t2_target_2: "gója",
    t2_target_3: "gólja",
    t2_q: "Melyik szó van HELYESEN leírva?",
    t2_q_a: "muszáj", t2_q_b: "muszály", t2_q_c: "bagolj", t2_q_d: "jégpálya (jéghpája)",

    // T3: Kettőzött mássalhangzók
    t3_title: "Kettőzött hangok",
    t3_text: "Néha egy mássalhangzót hosszan ejtünk (pl. toll, csepp, dinnye). Ilyenkor a betűt kétszer írjuk le, vagyis megkettőzzük!",
    t3_b1: "Egyjegyű betűnél duplázzuk (t -> tt).",
    t3_b2: "Kétjegyűnél csak az elsőt duplázzuk (ny -> nny).",
    t3_inst: "Keresd meg a mondatban a kettőzött mássalhangzós szót!",
    t3_tok0: "A", t3_tok1: "kislány", t3_tok2: "egy", t3_tok3: "színes", t3_tok4: "tollat", t3_tok5: "talált.",
    t3_q: "Melyik szóban van kettőzött mássalhangzó?",
    t3_q_a: "csepp", t3_q_b: "kutya", t3_q_c: "asztal", t3_q_d: "virág",

    // T4: Hang-párok
    t4_title: "Keresd a párját!",
    t4_text: "A legtöbb rövid magánhangzónak van egy hosszú párja, ami csak az ékezetben különbözik tőle.",
    t4_b1: "O párja Ó.",
    t4_b2: "U párja Ú.",
    t4_inst: "Párosítsd a rövid magánhangzót a hosszú párjával!",
    t4_l1: "U", t4_r1: "Ú",
    t4_l2: "O", t4_r2: "Ó",
    t4_l3: "Ü", t4_r3: "Ű",
    t4_q: "Mi az 'I' hosszú párja?",
    t4_q_a: "Í", t4_q_b: "É", t4_q_c: "Ó", t4_q_d: "U",

    // T5: Fun Catch
    t5_title: "Hangmester",
    t5_text: "Fantasztikus! Te már pontosan hallod a különbséget a rövid és hosszú hangok között.",
    t5_b1: "Tudod a J és LY titkát.",
    t5_b2: "Ismered a kettőzött betűket.",
    t5_inst: "Kapj el 6 hangjegyet (🎵), hogy összeálljon a dal!",
    t5_q: "Hogyan írjuk helyesen: ijesztő vagy ilyesztő?",
    t5_q_a: "ijesztő", t5_q_b: "ilyesztő", t5_q_c: "ijjesztő", t5_q_d: "illyesztő",
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
        { id: "sho", label: "t1_bucket_sho" },
        { id: "lon", label: "t1_bucket_lon" },
      ],
      items: [
        { text: "t1_item_s1", bucketId: "sho" },
        { text: "t1_item_l1", bucketId: "lon" },
        { text: "t1_item_s2", bucketId: "sho" },
        { text: "t1_item_l2", bucketId: "lon" },
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
      type: "physics-slingshot",
      question: "t2_inst",
      targets: [
        { id: "tgt1", text: "t2_target_1", isCorrect: true },
        { id: "tgt2", text: "t2_target_2", isCorrect: false },
        { id: "tgt3", text: "t2_target_3", isCorrect: false },
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
      type: "highlight-text",
      tokens: ["t3_tok0", "t3_tok1", "t3_tok2", "t3_tok3", "t3_tok4", "t3_tok5"],
      correctIndices: [4], // "tollat"
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
        { left: "t4_l1", right: "t4_r1" },
        { left: "t4_l2", right: "t4_r2" },
        { left: "t4_l3", right: "t4_r3" },
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
      tapCount: { emoji: "🎵", count: 6 },
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
  icon: "🎵",
  topics: TOPICS,
  rounds: [],
};

export default function SoundExplorer({ onDone, lang = "hu" }: { onDone: (s: number, t: number) => void; lang?: string }) {
  return (
    <ExplorerEngine 
      def={DEF} 
      grade={1} 
      explorerId="magyar_o1_i3" 
      color="#00FF88" 
      lang={lang} 
      onDone={onDone} 
    />
  );
}
