"use client";
// VerbTensesExplorer.tsx — AstroMagyar Grade 3: i1 Igeidők szigete
// POOL-bekötős verzió: Az adatokat a visualGenerators-ból szippantjuk!

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";
// 1. IMPORTÁLJUK A POOL-OKAT
import { SZÓFAJ_POOL, HIÁNYOS_POOL } from "@/lib/visualGenerators";

// ─── ILUSZTRÁCIÓ (Marad kódolva, mert egyedi) ───────────────────
const TimelineSvg = memo(() => (
  <svg width="100%" viewBox="0 0 240 140">
    <rect width="240" height="140" fill="#4C0519" rx="20" />
    <g transform="translate(120, 70)">
      <line x1="-90" y1="0" x2="90" y2="0" stroke="#FB7185" strokeWidth="4" strokeLinecap="round" />
      <circle cx="-60" cy="0" r="8" fill="#E11D48" /><circle cx="0" cy="0" r="10" fill="#FFF" /><circle cx="60" cy="0" r="8" fill="#FB7185" />
    </g>
  </svg>
));

// 2. ELŐKÉSZÍTJÜK AZ ADATOKAT A POOL-BÓL
const igek = SZÓFAJ_POOL.filter(i => i.fajta === 'I').map(i => i.word);
const hianyozo = HIÁNYOS_POOL[0]; // Például az első mondat

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Igeidők szigete",
    t1_title: "Múlt, Jelen, Jövő",
    t1_text: "Az igék ideje megmutatja, mikor történt a cselekvés.",
    t1_inst: "Válogasd szét az igéket!",
    t1_pres: "Jelen idő", t1_past: "Múlt idő",
    // Itt már nem kell t1_item_1, mert a POOL-ból jön!
  }
};

const TOPICS: TopicDef[] = [
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: () => <TimelineSvg />,
    interactive: {
      type: "physics-bucket",
      buckets: [
        { id: "jelen", label: "t1_pres" },
        { id: "mult", label: "t1_past" },
      ],
      items: [
        // ADATOK KÖZVETLENÜL A POOL-BÓL!
        { text: igek[0], bucketId: "jelen" }, 
        { text: "olvasott", bucketId: "mult" },
        { text: igek[1], bucketId: "jelen" },
        { text: "futott", bucketId: "mult" },
      ],
      instruction: "t1_inst",
      hint1: "t1_pres",
      hint2: "t1_past",
    },
    quiz: {
      question: "Melyik ige van MÚLT időben?",
      choices: ["ment", "megy", "menni", "mennél"],
      answer: "ment",
    },
  },
  {
    infoTitle: "Lyukas mondatok",
    infoText: "A mondat értelme alapján kitalálhatod a helyes igeidőt.",
    svg: () => <TimelineSvg />,
    interactive: {
      type: "gap-fill",
      // ADAT A HIÁNYOS_POOL-BÓL!
      sentence: hianyozo.sentence,
      choices: hianyozo.options,
      correctIndex: hianyozo.correctIndex,
      instruction: "Válaszd ki a mondatba illő igét!",
      hint1: "Olvasd el végig!",
      hint2: "Figyelj az időre!",
    },
    quiz: {
      question: "Hogy hívjuk a hiányzó rész pótlását?",
      choices: ["Szövegkiegészítés", "Szótagolás", "Betűzés", "Ragozás"],
      answer: "Szövegkiegészítés",
    }
  }
  // ... a többi téma hasonlóan ...
];

const DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "📖",
  topics: TOPICS,
  rounds: [],
};

export default function VerbTensesExplorer({ onDone, lang = "hu", color }: { onDone: (s: number, t: number) => void; lang?: string; color?: string }) {
  return <ExplorerEngine def={DEF} grade={3} explorerId="magyar_o3_i1" color="#FF2D78" lang={lang} onDone={onDone} />;
}
