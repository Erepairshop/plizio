"use client";
// TextCompExplorer.tsx — AstroMagyar Grade 3: i4 Szövegértés szigete
// POOL-Powered ⚡: TÖRTÉNET_POOL és HIÁNYOS_POOL használatával

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";
// IMPORTÁLJUK A POOL-OKAT
import { TÖRTÉNET_POOL, HIÁNYOS_POOL } from "@/lib/visualGenerators";

// ─── PLACEHOLDER (SVG helyett Emoji) ───────────────────
const PlaceholderSvg = memo(({ emoji, color }: { emoji: string; color: string }) => (
  <svg width="100%" viewBox="0 0 240 140">
    <rect width="240" height="140" fill={color} rx="20" opacity="0.2" />
    <text x="50%" y="60%" textAnchor="middle" fontSize="60">{emoji}</text>
  </svg>
));

// ─── ADATOK ELŐKÉSZÍTÉSE ───────────────────
const sztori1 = TÖRTÉNET_POOL[0]; 
const hianyozo = HIÁNYOS_POOL[2]; // Például a Péteres mondat

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Szövegértés szigete",
    t1_title: "Mi a sorrend?",
    t1_text: "Egy történet akkor érthető, ha az események jó sorrendben követik egymást. Figyelj az időmúlásra!",
    t1_inst: "Húzd a mondatokat a helyes időrendi sorrendbe!",
    
    t2_title: "Miről szól a szöveg?",
    t2_text: "Olvasás közben figyelj a részletekre! Ki a szereplő? Mi történik vele? Hol van?",
    t2_inst: "Pótold a hiányzó szót a szöveg alapján!",
  }
};

const TOPICS: TopicDef[] = [
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: () => <PlaceholderSvg emoji="📚" color="#FFD700" />,
    // imageUrl: "/images/islands/k3_i4_robot_reading.webp", // Majd ide jön a kép
    interactive: {
      type: "word-order", // A mondatokat rakjuk sorba (történet-rendezés)
      words: sztori1.sentences,
      correctOrder: [0, 1, 2, 3],
      instruction: "t1_inst",
      hint1: "Keresd a reggeli kezdést!",
      hint2: "Mi történik legutoljára?",
    },
    quiz: {
      question: "Hogy hívjuk a történet elejét?",
      choices: ["Bevezetés", "Tárgyalás", "Befejezés", "Cím"],
      answer: "Bevezetés",
    },
  },
  {
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: () => <PlaceholderSvg emoji="🔍" color="#FFD700" />,
    interactive: {
      type: "gap-fill",
      sentence: hianyozo.sentence,
      choices: hianyozo.options,
      correctIndex: hianyozo.correctIndex,
      instruction: "t2_inst",
      hint1: "Ki a szereplő?",
      hint2: "Mit csinál Péter?",
    },
    quiz: {
      question: "Mi segít a szöveg gyors megértésében?",
      choices: ["A figyelmes olvasás", "A gyors lapozás", "A becsukott szem", "A hangos zaj"],
      answer: "A figyelmes olvasás",
    },
  },
  {
    infoTitle: "Összefoglalás",
    infoText: "A szövegértés segít, hogy megértsd a világot magad körül.",
    svg: () => <PlaceholderSvg emoji="💡" color="#FFD700" />,
    interactive: {
      type: "tap-count",
      tapCount: { emoji: "📖", count: 6 },
      instruction: "Gyűjts össze 6 nyitott könyvet!",
      hint1: "Kattints rájuk!",
      hint2: "Már majdnem megvan!",
    },
    quiz: {
      question: "Melyik a történet legfontosabb része?",
      choices: ["A lényeg", "A papír színe", "A betűméret", "A toll színe"],
      answer: "A lényeg",
    }
  }
];

const DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "💬",
  topics: TOPICS,
  rounds: [],
};

export default function TextCompExplorer({ onDone, lang = "hu" }: { onDone: (s: number, t: number) => void; lang?: string }) {
  return <ExplorerEngine def={DEF} grade={3} explorerId="magyar_o3_i4" color="#FFD700" lang={lang} onDone={onDone} />;
}
