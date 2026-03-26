"use client";
// CompoundWordsExplorer.tsx — AstroMagyar Grade 2: i5 Szóösszetétel Szigete
// Témák: 1) Szóösszetétel 2) Többes szám 3) Képzők 4) Keresd az összetett szót 5) Láncszem-kapó

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── ILUSZTRÁCIÓK (Geometrikus SVG) ───────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#4C1D95" rx="20" />
      <g transform="translate(120, 70)">
        {/* Két szó összeforrad (Puzzle) */}
        <path d="M -50,-15 L -20,-15 L -15,-5 L -20,5 L -50,5 Z" fill="#C026D3" />
        <path d="M -15,-15 L 15,-15 L 15,5 L -15,5 L -10,-5 Z" fill="#E879F9" />
        <text x="-35" y="-1" textAnchor="middle" fontSize="10" fill="#FFF" fontWeight="bold">HÓ</text>
        <text x="2" y="-1" textAnchor="middle" fontSize="10" fill="#4C1D95" fontWeight="bold">EMBER</text>
        <path d="M 25,-5 L 35,-5 M 30,-10 L 30,0" stroke="#FDE047" strokeWidth="3" />
        <rect x="45" y="-15" width="45" height="20" fill="#FDE047" rx="4" />
        <text x="67" y="-1" textAnchor="middle" fontSize="9" fill="#4C1D95" fontWeight="bold">HÓEMBER</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#3B0764" rx="20" />
      <g transform="translate(120, 70)">
        {/* Egy alma vs Több alma (Többes szám) */}
        <circle cx="-40" cy="0" r="15" fill="#EF4444" />
        <text x="-40" y="25" textAnchor="middle" fontSize="10" fill="#D8B4FE">ALMA</text>
        
        <path d="M -15,0 L 5,0" stroke="#D8B4FE" strokeWidth="2" strokeDasharray="2,2" />
        
        <circle cx="30" cy="5" r="10" fill="#EF4444" />
        <circle cx="45" cy="-5" r="10" fill="#EF4444" />
        <circle cx="55" cy="8" r="10" fill="#EF4444" />
        <text x="42" y="25" textAnchor="middle" fontSize="10" fill="#D8B4FE">ALMÁK</text>
      </g>
    </svg>
  );
});

// ─── CÍMKÉK (MAGYAR NYELVEN) ──────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Szóösszetétel Szigete",
    
    // T1: Szóösszetétel (Magnet)
    t1_title: "Szavak összerakása",
    t1_text: "Két értelmes szóból gyakran egy új, harmadik szót építhetünk. Ezt hívjuk szóösszetételnek. Az első fele az előtag, a második az utótag.",
    t1_b1: "Például: nap + raforgó = napraforgó.",
    t1_b2: "Például: jég + krém = jégkrém.",
    t1_inst: "Párosítsd össze a szavakat, hogy értelmes összetett szót kapj!",
    t1_l1: "Rend", t1_r1: "őr",
    t1_l2: "Szem", t1_r2: "üveg",
    t1_l3: "Hó", t1_r3: "ember",
    t1_q: "Melyik egy összetett szó az alábbiak közül?",
    t1_q_a: "faház", t1_q_b: "piros", t1_q_c: "gyorsan", t1_q_d: "alszik",

    // T2: Többes szám (Bucket)
    t2_title: "Egy vagy több?",
    t2_text: "Ha valamiből több van, a szó végére a többes szám jelét, egy '-k' betűt teszünk. (Gyakran egy kis kötőhang is kell elé, pl. a, e, o, ö).",
    t2_b1: "Egyes szám: autó. Többes szám: autók.",
    t2_b2: "Egyes szám: ember. Többes szám: emberek.",
    t2_inst: "Válogasd szét a szavakat: Egyes szám (egy van) vagy Többes szám (több van)?",
    t2_bucket_egy: "Egyes szám (1)",
    t2_bucket_tobb: "Többes szám (Több)",
    t2_item_e1: "kutya", t2_item_e2: "ceruza",
    t2_item_t1: "fák", t2_item_t2: "könyvek",
    t2_q: "Mi a többes szám jele a magyar nyelvben?",
    t2_q_a: "-k", t2_q_b: "-t", t2_q_c: "-m", t2_q_d: "-ban",

    // T3: Képzők (Slingshot)
    t3_title: "Új szavak alkotása (Képzők)",
    t3_text: "A szavak végére olyan toldalékokat is tehetünk, amik teljesen új jelentést adnak a szónak. Ezek a KÉPZŐK. Például a 'hal' szóból 'halász' lesz.",
    t3_b1: "Foglalkozás képző: asztal -> asztalos.",
    t3_b2: "Kicsinyítő képző: cica -> cicus.",
    t3_inst: "Lődd le az aszteroidát, ami a 'kert' szóból FOGLALKOZÁST csinál!",
    t3_target_1: "kertész", // Helyes
    t3_target_2: "kertben",
    t3_target_3: "kertek",
    t3_q: "Melyik szó jött létre kicsinyítő képzővel?",
    t3_q_a: "kutyus", t3_q_b: "kutyák", t3_q_c: "kutyát", t3_q_d: "kutyával",

    // T4: Keresd az összetett szót (Highlight)
    t4_title: "Keresd a hosszú szót!",
    t4_text: "Az összetett szavak általában hosszabbak, hiszen két külön szóból állnak össze. Vajon megtalálod a mondatban?",
    t4_b1: "Keresd azt a szót, amit kétfelé tudsz vágni!",
    t4_b2: "Például: nap-raforgó, madár-etető.",
    t4_inst: "Jelöld ki a mondatban az ÖSSZETETT szót!",
    t4_tok0: "A", t4_tok1: "nagypapa", t4_tok2: "egy", t4_tok3: "szép", t4_tok4: "madáretetőt", t4_tok5: "készített.",
    t4_q: "Melyik két szóból áll a 'madáretető'?",
    t4_q_a: "madár + etető", t4_q_b: "ma + dáretető", t4_q_c: "madáre + tető", t4_q_d: "madár + tető",

    // T5: Fun Catch
    t5_title: "Szóépítő Mester",
    t5_text: "Ügyes vagy! Már úgy rakod össze a szavakat, mint a legprofibb építőmesterek.",
    t5_b1: "Tudod, mi az összetett szó.",
    t5_b2: "Ismered a többes számot (-k).",
    t5_inst: "Kapj el 6 összekötő láncszemet (🔗) a győzelemhez!",
    t5_q: "Hogy hívjuk a szóösszetétel első felét?",
    t5_q_a: "Előtag", t5_q_b: "Utótag", t5_q_c: "Képző", t5_q_d: "Toldalék",
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
    svg: (lang) => <Topic2Svg />,
    bulletKeys: ["t2_b1", "t2_b2"],
    interactive: {
      type: "physics-bucket",
      buckets: [
        { id: "egy", label: "t2_bucket_egy" },
        { id: "tobb", label: "t2_bucket_tobb" },
      ],
      items: [
        { text: "t2_item_e1", bucketId: "egy" },
        { text: "t2_item_t1", bucketId: "tobb" },
        { text: "t2_item_e2", bucketId: "egy" },
        { text: "t2_item_t2", bucketId: "tobb" },
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
    svg: (lang) => <Topic2Svg />,
    bulletKeys: ["t4_b1", "t4_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t4_tok0", "t4_tok1", "t4_tok2", "t4_tok3", "t4_tok4", "t4_tok5"],
      correctIndices: [4], // "madáretetőt"
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
      tapCount: { emoji: "🔗", count: 6 },
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
  icon: "🔗",
  topics: TOPICS,
  rounds: [],
};

export default function CompoundWordsExplorer({ onDone, lang = "hu" }: { onDone: (s: number, t: number) => void; lang?: string }) {
  return (
    <ExplorerEngine 
      def={DEF} 
      grade={2} 
      explorerId="magyar_o2_i5" 
      color="#B44DFF" 
      lang={lang} 
      onDone={onDone} 
    />
  );
}
