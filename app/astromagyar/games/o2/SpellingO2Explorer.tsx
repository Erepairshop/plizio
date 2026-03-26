"use client";
// SpellingO2Explorer.tsx — AstroMagyar Grade 2: i3 Helyesírás Szigete
// Témák: 1) Rövid és hosszú 2) J vagy LY? 3) Magánhangzó-harmónia 4) Hosszú mássalhangzók 5) Ceruza-kapó

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── ILUSZTRÁCIÓK (Geometrikus SVG) ───────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#064E3B" rx="20" />
      <g transform="translate(120, 70)">
        {/* Ceruza és vonalak (Rövid és hosszú) */}
        <rect x="-60" y="-10" width="40" height="4" fill="#34D399" rx="2" />
        <rect x="10" y="-10" width="70" height="4" fill="#10B981" rx="2" />
        <text x="-40" y="15" textAnchor="middle" fontSize="10" fill="#A7F3D0" fontWeight="bold">RÖVID</text>
        <text x="45" y="15" textAnchor="middle" fontSize="10" fill="#A7F3D0" fontWeight="bold">HOSSZÚ</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#065F46" rx="20" />
      <g transform="translate(120, 70)">
        {/* Magánhangzó-harmónia: Szó + Toldalék (Puzzle) */}
        <path d="M -40,-15 L -10,-15 L -5,-5 L -10,5 L -40,5 Z" fill="#10B981" />
        <path d="M -5,-15 L 25,-15 L 25,5 L -5,5 L 0,-5 Z" fill="#34D399" />
        <text x="-25" y="-1" textAnchor="middle" fontSize="10" fill="#022C22" fontWeight="bold">HÁZ</text>
        <text x="12" y="-1" textAnchor="middle" fontSize="10" fill="#022C22" fontWeight="bold">BAN</text>
        <path d="M -15,20 Q 0,30 15,20" fill="none" stroke="#6EE7B7" strokeWidth="2" strokeDasharray="2,2" />
        <text x="0" y="40" textAnchor="middle" fontSize="10" fill="#6EE7B7">HARMÓNIA</text>
      </g>
    </svg>
  );
});

// ─── CÍMKÉK (MAGYAR NYELVEN) ──────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Helyesírás Szigete",
    
    // T1: Rövid és hosszú (Bucket)
    t1_title: "Rövid vagy Hosszú?",
    t1_text: "Nagyon figyelj a magánhangzók hosszára! Egy pici ékezet is teljesen megváltoztathatja a szó jelentését. Nem mindegy, hogy egy ember 'öt' vagy 'őt' látja!",
    t1_b1: "Például: tör (üveg) vs. tőr (kard).",
    t1_b2: "Például: kor (idő) vs. kór (betegség).",
    t1_inst: "Válogasd szét a szavakat: Rövid vagy Hosszú magánhangzó van bennük?",
    t1_bucket_rovid: "Rövid (u, o, ö)",
    t1_bucket_hosszu: "Hosszú (ú, ó, ő)",
    t1_item_r1: "kor", t1_item_r2: "tör",
    t1_item_h1: "kór", t1_item_h2: "tőr",
    t1_q: "Melyik szóban van HOSSZÚ magánhangzó?",
    t1_q_a: "húr", t1_q_b: "hurok", t1_q_c: "bokor", t1_q_d: "fodor",

    // T2: J vagy LY? (Slingshot)
    t2_title: "A nagy J/LY rejtély",
    t2_text: "Mindkét betűt egyformán ejtjük: [j]. Bár a legtöbb szóban pontos j-t írunk, vannak hagyományos ly-os szavaink is, amiket meg kell jegyezni!",
    t2_b1: "Pontos j: jég, játék, hajó.",
    t2_b2: "Elipszilonos ly: gólya, bagoly, osztály.",
    t2_inst: "Lődd le az aszteroidát, amelyiken HELYESEN van írva az állat neve!",
    t2_target_1: "bagoly", // Helyes
    t2_target_2: "bagoj",
    t2_target_3: "bagolj",
    t2_q: "Hogyan írjuk helyesen: gally vagy galy?",
    t2_q_a: "gally", t2_q_b: "galy", t2_q_c: "gajj", t2_q_d: "gaj",

    // T3: Magánhangzó-harmónia (Magnet)
    t3_title: "A szótagok dallama",
    t3_text: "A magyar nyelv szereti a harmóniát! A toldalékok idomulnak a szótőhöz. Mély hangrendű szóhoz (a, o, u) mély toldalék illik, magashoz (e, i, ö, ü) magas.",
    t3_b1: "Mély: ház -> ház-ban.",
    t3_b2: "Magas: kert -> kert-ben.",
    t3_inst: "Párosítsd a szót a hozzá illő (harmonikus) toldalékkal!",
    t3_l1: "Erdő", t3_r1: "ben",
    t3_l2: "Autó", t3_r2: "ba",
    t3_l3: "Város", t3_r3: "ban",
    t3_q: "Melyik toldalék illik a 'könyv' szóhoz?",
    t3_q_a: "ben", t3_q_b: "ban", t3_q_c: "bon", t3_q_d: "bön",

    // T4: Hosszú mássalhangzók (Highlight)
    t4_title: "Dupla betűk",
    t4_text: "Néha hosszan ejtünk egy mássalhangzót. Ilyenkor a betűt megkettőzzük (írjuk kétszer). Például: csepp, friss, toll.",
    t4_b1: "Vigyázz: a kétjegyű betűknek (sz, cs) csak az első betűjét duplázzuk! (ssz, ccs).",
    t4_inst: "Jelöld ki a mondatban a KETTŐZÖTT mássalhangzót tartalmazó szót!",
    t4_tok0: "A", t4_tok1: "madár", t4_tok2: "egy", t4_tok3: "szép", t4_tok4: "tollat", t4_tok5: "ejtett", t4_tok6: "le.",
    t4_q: "Melyik szóban van kettőzött (hosszú) mássalhangzó?",
    t4_q_a: "dinnye", t4_q_b: "asztal", t4_q_c: "ceruza", t4_q_d: "könyv",

    // T5: Fun Catch
    t5_title: "Helyesírás Bajnok",
    t5_text: "Tökéletes! Már ismered a legtrükkösebb magyar helyesírási szabályokat is.",
    t5_b1: "Figyelsz a rövid és hosszú hangokra.",
    t5_b2: "Alkalmazod a magánhangzó-harmóniát.",
    t5_inst: "Kapj el 6 ceruzát (✏️), hogy hibátlanul írhass!",
    t5_q: "Miért 'kertben' és nem 'kertban'?",
    t5_q_a: "Mert a 'kert' magas hangrendű, így magas toldalék illik hozzá.", t5_q_b: "Mert a 'ben' rövidebb.", t5_q_c: "Mert csak azt lehet könnyen kimondani.", t5_q_d: "Mindkettő helyes.",
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
        { id: "rovid", label: "t1_bucket_rovid" },
        { id: "hosszu", label: "t1_bucket_hosszu" },
      ],
      items: [
        { text: "t1_item_r1", bucketId: "rovid" },
        { text: "t1_item_h1", bucketId: "hosszu" },
        { text: "t1_item_r2", bucketId: "rovid" },
        { text: "t1_item_h2", bucketId: "hosszu" },
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
    svg: (lang) => <Topic3Svg />,
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
    svg: (lang) => <Topic1Svg />,
    bulletKeys: ["t4_b1"],
    interactive: {
      type: "highlight-text",
      tokens: ["t4_tok0", "t4_tok1", "t4_tok2", "t4_tok3", "t4_tok4", "t4_tok5", "t4_tok6"],
      correctIndices: [4], // "tollat"
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
      tapCount: { emoji: "✏️", count: 6 },
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
  icon: "✏️",
  topics: TOPICS,
  rounds: [],
};

export default function SpellingO2Explorer({ onDone, lang = "hu" }: { onDone: (s: number, t: number) => void; lang?: string }) {
  return (
    <ExplorerEngine 
      def={DEF} 
      grade={2} 
      explorerId="magyar_o2_i3" 
      color="#00FF88" 
      lang={lang} 
      onDone={onDone} 
    />
  );
}
