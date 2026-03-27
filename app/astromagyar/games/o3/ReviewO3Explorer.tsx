"use client";
// ReviewO3Explorer.tsx — AstroMagyar Grade 3: i9 Nagy Próba
// Összefoglaló: Igeidők, Helyesírás, Ragozás, Mondatelemzés

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
    explorer_title: "Nagy Próba (3. Osztály)",
    
    // T1: Igeidők (Slingshot)
    t1_title: "Időutazás",
    t1_text: "Emlékszel az igeidőkre? A múlt már megtörtént (-t, -tt), a jelen most történik, a jövő pedig ezután fog bekövetkezni (fog).",
    t1_inst: "Lődd le a JÖVŐ idejű igét!",
    t1_target_1: "olvasni fog", // Helyes
    t1_target_2: "olvasott",
    t1_target_3: "olvas",
    
    // T2: Helyesírás (Bucket)
    t2_title: "Egybe vagy Külön?",
    t2_text: "Teszteljük a helyesírásodat! Vajon a szavakat egybe kell írni (összetett szó), vagy külön (tulajdonság)?",
    t2_inst: "Válogasd szét a szavakat a helyesírásuk szerint!",
    t2_bucket_egy: "Egybe",
    t2_bucket_kul: "Külön",
    t2_item_e1: "napraforgó", t2_item_e2: "rendőr",
    t2_item_k1: "sárga virág", t2_item_k2: "okos diák",

    // T3: Mondatelemzés (Highlight)
    t3_title: "A Mondat Nyomozója",
    t3_text: "Keresd meg a mondatban a kért mondatrészt! Emlékezz: az Alany a cselekvő, az Állítmány a cselekvés, a Tárgy (-t) az, amire irányul.",
    t3_inst: "Jelöld ki a mondatban a TÁRGYAT (Mit?)!",
    t3_tok0: "A", t3_tok1: "kislány", t3_tok2: "egy", t3_tok3: "piros", t3_tok4: "almát", t3_tok5: "eszik.",

    // T4: Ragozás (Gap-fill)
    t4_title: "Ravasz Ragok",
    t4_text: "A toldalékokat mindig a szó hangrendjéhez (magas vagy mély) kell igazítani, és figyelni kell a mássalhangzótörvényekre is!",
    t4_inst: "Válaszd ki a helyesen ragozott szót a mondatba!",
    t4_sentence: "A füzetemet otthon hagytam az asztal___.",
    t4_opt1: "on", t4_opt2: "en", t4_opt3: "ön", t4_opt4: "ba",
  }
};

const TOPICS: TopicDef[] = [
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: () => <PlaceholderSvg emoji="⏳" color="#4ECDC4" />,
    // imageUrl: "/images/islands/k3_i9_robot_star.webp",
    interactive: {
      type: "physics-slingshot",
      question: "t1_inst",
      targets: [
        { id: "tgt1", text: "t1_target_1", isCorrect: true },
        { id: "tgt2", text: "t1_target_2", isCorrect: false },
        { id: "tgt3", text: "t1_target_3", isCorrect: false },
      ],
      instruction: "t1_inst",
      hint1: "Keresd a 'fog' segédigét!",
      hint2: "Ezután történik.",
    },
    quiz: {
      question: "Melyik igeidő jele a '-t, -tt'?",
      choices: ["Múlt idő", "Jelen idő", "Jövő idő", "Nincs ilyen"],
      answer: "Múlt idő",
    },
  },
  {
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: () => <PlaceholderSvg emoji="🧩" color="#4ECDC4" />,
    interactive: {
      type: "physics-bucket",
      buckets: [
        { id: "egybe", label: "t2_bucket_egy" },
        { id: "kulon", label: "t2_bucket_kul" },
      ],
      items: [
        { text: "t2_item_e1", bucketId: "egybe" },
        { text: "t2_item_k1", bucketId: "kulon" },
        { text: "t2_item_e2", bucketId: "egybe" },
        { text: "t2_item_k2", bucketId: "kulon" },
      ],
      instruction: "t2_inst",
      hint1: "Egy új dolog = egybe.",
      hint2: "Egy tulajdonság = külön.",
    },
    quiz: {
      question: "Hogyan írjuk helyesen a madár nevét?",
      choices: ["jégmadár", "jég madár", "jégg madár", "jég-madár"],
      answer: "jégmadár",
    },
  },
  {
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: () => <PlaceholderSvg emoji="🔍" color="#4ECDC4" />,
    interactive: {
      type: "highlight-text",
      tokens: ["t3_tok0", "t3_tok1", "t3_tok2", "t3_tok3", "t3_tok4", "t3_tok5"],
      correctIndices: [4], // "almát"
      instruction: "t3_inst",
      hint1: "Keresd a '-t' betűt a végén!",
      hint2: "Mit eszik a kislány?",
    },
    quiz: {
      question: "Milyen mondatrész a 'kislány' az előző mondatban?",
      choices: ["Alany", "Tárgy", "Határozó", "Jelző"],
      answer: "Alany",
    },
  },
  {
    infoTitle: "t4_title",
    infoText: "t4_text",
    svg: () => <PlaceholderSvg emoji="🧲" color="#4ECDC4" />,
    interactive: {
      type: "gap-fill",
      sentence: "t4_sentence",
      choices: ["t4_opt1", "t4_opt2", "t4_opt3", "t4_opt4"],
      correctIndex: 0,
      instruction: "t4_inst",
      hint1: "Asztal... milyen hangrendű szó?",
      hint2: "Mély hangrendű.",
    },
    quiz: {
      question: "Hogyan írjuk helyesen: kéz + vel?",
      choices: ["kézzel", "kézvel", "kézel", "kéz-vel"],
      answer: "kézzel",
    },
  },
  {
    infoTitle: "Galaktikus Bajnok",
    infoText: "Hihetetlen vagy! Befejezted a 3. osztályt! Bebizonyítottad, hogy igazi mestere vagy a magyar nyelvnek.",
    svg: () => <PlaceholderSvg emoji="🌟" color="#4ECDC4" />,
    interactive: {
      type: "tap-count",
      tapCount: { emoji: "🏆", count: 6 },
      instruction: "Gyűjts be 6 bajnoki trófeát!",
      hint1: "Kattints gyorsan!",
      hint2: "Minden trófea a tiéd!",
    },
    quiz: {
      question: "Készen állsz a 4. osztályos kalandokra?",
      choices: ["Igen, indulhatunk!", "Még szép!", "Mindig készen állok!", "Alig várom!"],
      answer: "Igen, indulhatunk!",
    }
  }
];

const DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "🌟",
  topics: TOPICS,
  rounds: [],
};

export default function ReviewO3Explorer({ onDone, lang = "hu", color }: { onDone: (s: number, t: number) => void; lang?: string; color?: string }) {
  return <ExplorerEngine def={DEF} grade={3} explorerId="magyar_o3_i9" color="#4ECDC4" lang={lang} onDone={onDone} />;
}
