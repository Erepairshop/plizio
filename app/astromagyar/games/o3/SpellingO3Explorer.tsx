"use client";
// SpellingO3Explorer.tsx — AstroMagyar Grade 3: i6 Helyesírás haladó szigete
// Témák: Egybeírás/Különírás, Ikes igék, Mássalhangzótörvények

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── PLACEHOLDER (SVG helyett) ───────────────────
const PlaceholderSvg = memo(({ emoji, color }: { emoji: string; color: string }) => (
  <svg width="100%" viewBox="0 0 240 140">
    <rect width="240" height="140" fill={color} rx="20" opacity="0.2" />
    <text x="50%" y="60%" textAnchor="middle" fontSize="60">{emoji}</text>
  </svg>
));

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Helyesírás haladó szigete",
    
    // T1: Egybe vagy külön? (Bucket)
    t1_title: "Egybe vagy külön?",
    t1_text: "Ha két szó egy új, közös jelentést kap, egybeírjuk (összetett szó). Ha csak az egyik szó jellemzi a másikat (milyen?), akkor különírjuk.",
    t1_inst: "Válogasd szét: Egybeírjuk vagy Különírjuk?",
    t1_bucket_egy: "Egybe",
    t1_bucket_kul: "Külön",
    t1_item_e1: "hóember", t1_item_e2: "vasút",
    t1_item_k1: "piros alma", t1_item_k2: "fa asztal",
    
    // T2: Ikes igék (Slingshot)
    t2_title: "Az -ik végű igék",
    t2_text: "Vannak igék, amik szótári alakban '-ik' végződést kapnak (pl. eszik, iszik, alszik). Ezeket E/1 személyben (Én) '-m' raggal mondjuk helyesen!",
    t2_inst: "Lődd le az aszteroidát a HELYES igealakkal! (Én...)",
    t2_target_1: "eszem", // Helyes
    t2_target_2: "eszek",
    t2_target_3: "eszelek",

    // T3: Mássalhangzótörvények (Gap Fill)
    t3_title: "Összeolvadó hangok",
    t3_text: "Néha a szavak végén lévő hang összeolvad a toldalék első hangjával. Például a '-val/-vel' rag 'v' betűje átalakul: kéz + vel = kézzel.",
    t3_inst: "Hogyan írjuk helyesen a toldalékos szót?",
    t3_sentence: "A fát a favágó egy éles ___ vágta ki.",
    t3_opt1: "fejszével", t3_opt2: "fejszéval", t3_opt3: "fejszevel", t3_opt4: "fejszévvel",
  }
};

const TOPICS: TopicDef[] = [
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: () => <PlaceholderSvg emoji="🧩" color="#10B981" />,
    // imageUrl: "/images/islands/k3_i6_robot_pencil.webp",
    interactive: {
      type: "physics-bucket",
      buckets: [
        { id: "egybe", label: "t1_bucket_egy" },
        { id: "kulon", label: "t1_bucket_kul" },
      ],
      items: [
        { text: "t1_item_e1", bucketId: "egybe" },
        { text: "t1_item_k1", bucketId: "kulon" },
        { text: "t1_item_e2", bucketId: "egybe" },
        { text: "t1_item_k2", bucketId: "kulon" },
      ],
      instruction: "t1_inst",
      hint1: "Ha egy új dolog = egybe.",
      hint2: "Ha tulajdonság = külön.",
    },
    quiz: {
      question: "Hogyan írjuk helyesen: jég + krém?",
      choices: ["jégkrém", "jég krém", "jég-krém", "jégk rém"],
      answer: "jégkrém",
    },
  },
  {
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: () => <PlaceholderSvg emoji="🍽️" color="#10B981" />,
    interactive: {
      type: "physics-slingshot",
      question: "t2_inst",
      targets: [
        { id: "tgt1", text: "t2_target_1", isCorrect: true },
        { id: "tgt2", text: "t2_target_2", isCorrect: false },
        { id: "tgt3", text: "t2_target_3", isCorrect: false },
      ],
      instruction: "t2_inst",
      hint1: "Emlékezz az -m ragra!",
      hint2: "Nem -k a vége!",
    },
    quiz: {
      question: "Hogyan mondjuk helyesen, ha ÉN iszom?",
      choices: ["iszom", "iszok", "iszik", "iszunk"],
      answer: "iszom",
    },
  },
  {
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: () => <PlaceholderSvg emoji="🧲" color="#10B981" />,
    interactive: {
      type: "gap-fill",
      sentence: "t3_sentence",
      choices: ["t3_opt1", "t3_opt2", "t3_opt3", "t3_opt4"],
      correctIndex: 0,
      instruction: "t3_inst",
      hint1: "Fejsze + vel",
      hint2: "Figyelj a magánhangzóra!",
    },
    quiz: {
      question: "Hogyan írjuk helyesen: gép + pel?",
      choices: ["géppel", "gépel", "gépvel", "géppvel"],
      answer: "géppel",
    },
  },
  {
    infoTitle: "Helyesírási bajnok",
    infoText: "Kiválóan ismered a helyesírási szabályokat! Gyűjts be 6 aranyceruzát a továbbjutáshoz!",
    svg: () => <PlaceholderSvg emoji="✏️" color="#10B981" />,
    interactive: {
      type: "tap-count",
      tapCount: { emoji: "✏️", count: 6 },
      instruction: "Kapd el a ceruzákat!",
      hint1: "Kattints rájuk!",
      hint2: "Már csak egy kis türelem!",
    },
    quiz: {
      question: "Melyik szót írtuk helyesen?",
      choices: ["vasút", "vas út", "vassút", "vas ut"],
      answer: "vasút",
    }
  }
];

const DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "✏️",
  topics: TOPICS,
  rounds: [],
};

export default function SpellingO3Explorer({ onDone, lang = "hu" }: { onDone: (s: number, t: number) => void; lang?: string }) {
  return <ExplorerEngine def={DEF} grade={3} explorerId="magyar_o3_i6" color="#10B981" lang={lang} onDone={onDone} />;
}
