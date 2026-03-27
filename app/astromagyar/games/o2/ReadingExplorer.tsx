"use client";
// ReadingExplorer.tsx — AstroMagyar Grade 2: i2 Olvasás Szigete
// Témák: 1) Szókincs 2) Mondatértés 3) Lyukas szöveg 4) Szövegkörnyezet 5) Könyv-kapó

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── ILUSZTRÁCIÓK (Geometrikus SVG) ───────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#082F49" rx="20" />
      <g transform="translate(120, 70)">
        <path d="M -40,20 Q -20,10 0,20 L 0,-20 Q -20,-30 -40,-20 Z" fill="#F8FAFC" />
        <path d="M 40,20 Q 20,10 0,20 L 0,-20 Q 20,-30 40,-20 Z" fill="#E2E8F0" />
        <line x1="0" y1="-20" x2="0" y2="20" stroke="#94A3B8" strokeWidth="2" />
        <rect x="-30" y="-10" width="20" height="2" fill="#CBD5E1" />
        <rect x="-30" y="-5" width="20" height="2" fill="#CBD5E1" />
        <rect x="10" y="-10" width="20" height="2" fill="#CBD5E1" />
        <rect x="10" y="-5" width="20" height="2" fill="#CBD5E1" />
        <text x="0" y="45" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#BAE6FD">ÉRTŐ OLVASÁS</text>
      </g>
    </svg>
  );
});

// ─── CÍMKÉK (MAGYAR NYELVEN) ──────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Olvasás Szigete",
    
    // T1: Szókincs (Match)
    t1_title: "Miről olvasunk?",
    t1_text: "Ahhoz, hogy jól értsük a meséket, ismernünk kell a szavak jelentését. Ha tudod, mi a különbség egy 'kunyhó' és egy 'palota' között, máris jobban látod magad előtt a történetet!",
    t1_b1: "A szavak képeket alkotnak a fejünkben.",
    t1_b2: "Figyeld a leírásokat!",
    t1_inst: "Párosítsd a szót a jelentésével!",
    t1_l1: "Kunyhó", t1_r1: "Kicsi, egyszerű házikó",
    t1_l2: "Palota", t1_r2: "Hatalmas, díszes épület",
    t1_l3: "Vándor", t1_r3: "Úton lévő utazó",
    t1_q: "Mit jelent a 'vándor' szó?",
    t1_q_a: "Olyan ember, aki sokat utazik.", t1_q_b: "Egy fajta sütemény.", t1_q_c: "Egy erdei állat.", t1_q_d: "Egy kerti szerszám.",

    // T2: Mondatértés (Slingshot)
    t2_title: "Érted a mondatot?",
    t2_text: "Olvasás közben fontos, hogy ne csak a betűket lásd, hanem tudd is, mi történik. 'A cica a kerítésen ücsörög.' - Hol van a cica?",
    t2_b1: "Keresd a választ a mondatban!",
    t2_inst: "Lődd le a helyes választ: 'A barna mackó mézet eszik a barlangban.' Mit eszik a mackó?",
    t2_target_1: "mézet", // Helyes
    t2_target_2: "almát",
    t2_target_3: "halat",
    t2_q: "A mondat alapján hol van a mackó? ('A barna mackó mézet eszik a barlangban.')",
    t2_q_a: "a barlangban", t2_q_b: "a fán", t2_q_c: "a folyóban", t2_q_d: "az erdőben",

    // T3: Lyukas szöveg (Gap Fill)
    t3_title: "Hiányzó szavak",
    t3_text: "Néha kitalálhatjuk a hiányzó szót abból, amiről a mondat többi része szól. Ezt hívjuk szövegkörnyezetnek.",
    t3_b1: "Olvasd el az egész mondatot!",
    t3_b2: "Melyik szó illik oda a legjobban?",
    t3_inst: "Válaszd ki a mondatba illő szót!",
    t3_sentence: "A kisfiú felvette a ___ és kiment a hóba játszani.",
    t3_opt1: "kabátját", t3_opt2: "papucsát", t3_opt3: "fürdőruháját", t3_opt4: "pizsamáját",
    t3_q: "Miért a 'kabátját' a jó megoldás?",
    t3_q_a: "Mert kiment a hóba, ott pedig hideg van.", t3_q_b: "Mert az a leghosszabb szó.", t3_q_c: "Mert szeret öltözködni.", t3_q_d: "Csak úgy.",

    // T4: Szórend és értelem (Word Order)
    t4_title: "Zűrös mondatok",
    t4_text: "Ha a szavak összekeverednek, a mondat elveszíti az értelmét. Rakjuk őket helyes sorrendbe!",
    t4_b1: "Keresd a nagybetűt a kezdéshez!",
    t4_b2: "Az írásjel legyen a végén!",
    t4_inst: "Tedd sorrendbe a szavakat, hogy értelmes legyen!",
    t4_w1: "A", t4_w2: "gyerekek", t4_w3: "vidáman", t4_w4: "játszanak.",
    t4_q: "Mi segített elindítani a mondatot?",
    t4_q_a: "A nagybetűs szó.", t4_q_b: "A legrövidebb szó.", t4_q_c: "A pont.", t4_q_d: "A középső szó.",

    // T5: Fun Catch
    t5_title: "Olvasó Bajnok",
    t5_text: "Gratulálok! Te már nem csak olvasol, hanem érted is, amit látsz. Ez a tudás kaput nyit a mesék világára.",
    t5_b1: "Ismered a szavak jelentését.",
    t5_b2: "Tudsz a sorok között olvasni.",
    t5_inst: "Kapj el 6 varázskönyvet (📖) a győzelemhez!",
    t5_q: "Mi a legfontosabb az olvasásnál?",
    t5_q_a: "Hogy értsük, miről szól a szöveg.", b: "Hogy nagyon gyorsan daráljuk a betűket.", c: "Hogy csak a képeket nézzük.", d: "Hogy minden oldalt kiszínezzünk.",
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
    bulletKeys: ["t2_b1"],
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
      hint2: "t2_b1",
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
    svg: (lang) => <Topic1Svg />,
    bulletKeys: ["t4_b1", "t4_b2"],
    interactive: {
      type: "word-order",
      words: ["t4_w1", "t4_w2", "t4_w3", "t4_w4"],
      correctOrder: [0, 1, 2, 3],
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
      tapCount: { emoji: "📖", count: 6 },
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
  icon: "📖",
  topics: TOPICS,
  rounds: [],
};

export default function ReadingExplorer({ onDone, lang = "hu", color }: { onDone: (s: number, t: number) => void; lang?: string; color?: string }) {
  return (
    <ExplorerEngine 
      def={DEF} 
      grade={2} 
      explorerId="magyar_o2_i2" 
      color="#00D4FF" 
      lang={lang} 
      onDone={onDone} 
    />
  );
}
