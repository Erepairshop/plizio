"use client";
// SentenceAnalysisExplorer.tsx — AstroMagyar Grade 3: i8 Mondatelemzés szigete
// Témák: Tárgy (Mit?), Határozó (Hol? Mikor?), Jelző (Milyen?)

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";
// Ha a MONDATRÉSZ_POOL bővül a jövőben, innen tudjuk behúzni az adatokat:
// import { MONDATRÉSZ_POOL } from "@/lib/visualGenerators";

// ─── PLACEHOLDER (SVG helyett) ───────────────────
const PlaceholderSvg = memo(({ emoji, color }: { emoji: string; color: string }) => (
  <svg width="100%" viewBox="0 0 240 140">
    <rect width="240" height="140" fill={color} rx="20" opacity="0.2" />
    <text x="50%" y="60%" textAnchor="middle" fontSize="60">{emoji}</text>
  </svg>
));

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Mondatelemzés szigete",
    
    // T1: A Tárgy (Highlight)
    t1_title: "A Tárgy (Mit? Kit?)",
    t1_text: "A tárgy az a dolog, amire a cselekvés irányul. Legtöbbször '-t' betűre végződik. Kérdései: Mit? Kit? Kikket? Miket?",
    t1_inst: "Keresd meg a TÁRGYAT a mondatban (Mit olvas?)!",
    t1_tok0: "A", t1_tok1: "kisfiú", t1_tok2: "egy", t1_tok3: "izgalmas", t1_tok4: "könyvet", t1_tok5: "olvas.",
    
    // T2: A Határozó (Bucket)
    t2_title: "A Határozó",
    t2_text: "A határozó megmutatja a cselekvés körülményeit. Hol történik (Helyhatározó)? Mikor történik (Időhatározó)?",
    t2_inst: "Válogasd szét: Helyet vagy Időt mutat meg?",
    t2_bucket_hely: "Hol? (Hely)",
    t2_bucket_ido: "Mikor? (Idő)",
    t2_item_h1: "az iskolában", t2_item_h2: "a kertben",
    t2_item_i1: "tegnap", t2_item_i2: "reggel",

    // T3: A Jelző (Slingshot)
    t3_title: "A Jelző (Milyen?)",
    t3_text: "A jelző egy dolog tulajdonságát, színét, méretét mutatja meg. Kérdései: Milyen? Melyik? Hány?",
    t3_inst: "Lődd le az aszteroidát, ami a JELZŐ (Milyen a labda?)!",
    t3_target_1: "piros", // Helyes
    t3_target_2: "labda",
    t3_target_3: "gurul",
  }
};

const TOPICS: TopicDef[] = [
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: () => <PlaceholderSvg emoji="🎯" color="#E879F9" />,
    // imageUrl: "/images/islands/k3_i8_robot_target.webp",
    interactive: {
      type: "highlight-text",
      tokens: ["t1_tok0", "t1_tok1", "t1_tok2", "t1_tok3", "t1_tok4", "t1_tok5"],
      correctIndices: [4], // "könyvet"
      instruction: "t1_inst",
      hint1: "Keresd a '-t' betűt a végén!",
      hint2: "Válaszol a 'Mit?' kérdésre.",
    },
    quiz: {
      question: "Melyik szó a TÁRGY ebben a mondatban: 'Eszem az almát.'?",
      choices: ["almát", "Eszem", "az", "Nincs benne tárgy"],
      answer: "almát",
    },
  },
  {
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: () => <PlaceholderSvg emoji="📍" color="#E879F9" />,
    interactive: {
      type: "physics-bucket",
      buckets: [
        { id: "hely", label: "t2_bucket_hely" },
        { id: "ido", label: "t2_bucket_ido" },
      ],
      items: [
        { text: "t2_item_h1", bucketId: "hely" },
        { text: "t2_item_i1", bucketId: "ido" },
        { text: "t2_item_h2", bucketId: "hely" },
        { text: "t2_item_i2", bucketId: "ido" },
      ],
      instruction: "t2_inst",
      hint1: "Hely = Hol?",
      hint2: "Idő = Mikor?",
    },
    quiz: {
      question: "Milyen határozó van a mondatban: 'Délután focizunk.'?",
      choices: ["Időhatározó", "Helyhatározó", "Módhatározó", "Nincs benne"],
      answer: "Időhatározó",
    },
  },
  {
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: () => <PlaceholderSvg emoji="🎨" color="#E879F9" />,
    interactive: {
      type: "physics-slingshot",
      question: "t3_inst",
      targets: [
        { id: "tgt1", text: "t3_target_1", isCorrect: true },
        { id: "tgt2", text: "t3_target_2", isCorrect: false },
        { id: "tgt3", text: "t3_target_3", isCorrect: false },
      ],
      instruction: "t3_inst",
      hint1: "Ez egy szín.",
      hint2: "A labda tulajdonsága.",
    },
    quiz: {
      question: "Melyik kérdésre válaszol a JELZŐ?",
      choices: ["Milyen?", "Mit csinál?", "Hol?", "Kivel?"],
      answer: "Milyen?",
    },
  },
  {
    infoTitle: "A Nyelvtan Nyomozója",
    infoText: "Zseniális vagy! Megtaláltad a mondat rejtett kincseit. Gyűjts be 6 nagyítót a sikerhez!",
    svg: () => <PlaceholderSvg emoji="🔍" color="#E879F9" />,
    interactive: {
      type: "tap-count",
      tapCount: { emoji: "🔍", count: 6 },
      instruction: "Kapd el a nagyítókat!",
      hint1: "Kattints gyorsan!",
      hint2: "Nyomozásra fel!",
    },
    quiz: {
      question: "Mi a 'Mit?' és 'Kit?' kérdésre válaszoló mondatrész?",
      choices: ["Tárgy", "Alany", "Állítmány", "Határozó"],
      answer: "Tárgy",
    }
  }
];

const DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "🔍",
  topics: TOPICS,
  rounds: [],
};

export default function SentenceAnalysisExplorer({ onDone, lang = "hu", color }: { onDone: (s: number, t: number) => void; lang?: string; color?: string }) {
  return <ExplorerEngine def={DEF} grade={3} explorerId="magyar_o3_i8" color="#E879F9" lang={lang} onDone={onDone} />;
}
