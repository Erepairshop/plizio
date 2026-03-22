"use client";

import React, { useState, useRef, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

interface MCQQuestion {
  question: string;
  choices: string[];
  answer: string;
}

type Phase = "info" | "question";
type Lang = "en" | "de" | "hu" | "ro";

interface Props {
  color?: string;
  onDone?: (score: number, total: number) => void;
  lang?: Lang;
}

// ─────────────────────────────────────────────────────────────────────────────
// Labels (translations)
// ─────────────────────────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    gotIt: "Got it! →",
    next: "Next",
    finish: "Finish",
    correct: "Correct! ✓",
    wrong: "Not quite!",
    orderInProgress: "Keep going!",
    orderDone: "Perfect! ✓",
    r1_info_title: "🐟 Fish",
    r1_info_text:
      "Fish are vertebrates that live in water. They breathe through GILLS (Kiemen), which extract oxygen from water. Their bodies are covered in SCALES (Schuppen), and they use FINS (Flossen) to swim.",
    r1_q: "Which organ do fish use to breathe?",
    r1_gills: "Gills (Kiemen)",
    r1_lungs: "Lungs",
    r1_skin: "Skin",
    r1_fins: "Fins (Flossen)",
    r2_info_title: "🐸 Amphibians",
    r2_info_text:
      "Amphibians live BOTH in water and on land — 'amphi' means double life! They have MOIST SMOOTH SKIN (no scales!), 4 legs, and examples are frogs, newts, salamanders.",
    r2_q: "Where do amphibians live?",
    r2_both: "Both water and land",
    r2_water: "Only in water",
    r2_land: "Only on land",
    r2_underground: "Underground",
    r3_info_title: "🫁 How Do They Breathe?",
    r3_info_text:
      "FISH: always breathe with gills. TADPOLES: breathe with gills (like fish). ADULT FROGS: breathe with lungs AND through their moist skin!",
    r3_q: "How does an ADULT FROG breathe?",
    r3_lungs_skin: "Lungs + skin",
    r3_gills: "Only gills",
    r3_fins: "Through fins",
    r3_mouth: "Only mouth",
    r4_info_title: "🔄 Frog Life Cycle",
    r4_info_text:
      "Frogs go through METAMORPHOSIS — an amazing transformation! Egg → Tadpole (with tail+gills) → Froglet (grows legs) → Adult Frog (loses tail, breathes with lungs).",
    r4_hint: "Tap the stages in the correct order!",
    r4_egg: "🥚 Egg",
    r4_tadpole: "🐠 Tadpole",
    r4_froglet: "🐸 Froglet",
    r4_adult: "🐸 Adult Frog",
    r5_info_title: "⭐ Review",
    r5_info_text: "Let's check what you learned! Answer carefully.",
    r5_q1: "What covers a fish's body?",
    r5_scales: "Scales (Schuppen)",
    r5_skin: "Smooth moist skin",
    r5_fur: "Fur",
    r5_feathers: "Feathers",
    r5_q2: "Which animal is an amphibian?",
    r5_shark: "Shark 🦈",
    r5_salmon: "Salmon 🐟",
    r5_salamander: "Salamander 🦎",
    r5_perch: "Perch 🐟",
    r5_q3: "How do TADPOLES breathe?",
    r5_tad_gills: "With gills",
    r5_tad_lungs: "With lungs",
    r5_tad_skin: "Through skin",
    r5_tad_mouth: "Through mouth",
  },
  de: {
    gotIt: "Verstanden! →",
    next: "Weiter",
    finish: "Fertig",
    correct: "Richtig! ✓",
    wrong: "Nicht ganz!",
    orderInProgress: "Weiter so!",
    orderDone: "Perfekt! ✓",
    r1_info_title: "🐟 Fische",
    r1_info_text:
      "Fische sind Wirbeltiere, die im Wasser leben. Sie atmen durch KIEMEN, die Sauerstoff aus dem Wasser extrahieren. Ihre Körper sind mit SCHUPPEN bedeckt, und sie nutzen FLOSSEN zum Schwimmen.",
    r1_q: "Welches Organ nutzen Fische zum Atmen?",
    r1_gills: "Kiemen",
    r1_lungs: "Lungen",
    r1_skin: "Haut",
    r1_fins: "Flossen",
    r2_info_title: "🐸 Amphibien",
    r2_info_text:
      "Amphibien leben SOWOHL im Wasser als auch an Land — 'amphi' bedeutet doppeltes Leben! Sie haben FEUCHTE GLATTE HAUT (keine Schuppen!), 4 Beine, Beispiele: Frösche, Molche, Salamander.",
    r2_q: "Wo leben Amphibien?",
    r2_both: "Wasser und Land",
    r2_water: "Nur im Wasser",
    r2_land: "Nur an Land",
    r2_underground: "Unterirdisch",
    r3_info_title: "🫁 Wie atmen sie?",
    r3_info_text:
      "FISCHE: atmen immer mit Kiemen. KAULQUAPPEN: atmen mit Kiemen. ERWACHSENE FRÖSCHE: atmen mit Lungen UND durch ihre feuchte Haut!",
    r3_q: "Wie atmet ein ERWACHSENER FROSCH?",
    r3_lungs_skin: "Lungen + Haut",
    r3_gills: "Nur Kiemen",
    r3_fins: "Durch Flossen",
    r3_mouth: "Nur Mund",
    r4_info_title: "🔄 Frosch-Lebenszyklus",
    r4_info_text:
      "Frösche durchlaufen METAMORPHOSE! Ei → Kaulquappe (mit Schwanz+Kiemen) → Jungfrosch (wächst Beine) → Erwachsener Frosch (verliert Schwanz).",
    r4_hint: "Tippe die Stadien in der richtigen Reihenfolge!",
    r4_egg: "🥚 Ei",
    r4_tadpole: "🐠 Kaulquappe",
    r4_froglet: "🐸 Jungfrosch",
    r4_adult: "🐸 Erwachsener Frosch",
    r5_info_title: "⭐ Wiederholung",
    r5_info_text: "Lass uns wiederholen was du gelernt hast!",
    r5_q1: "Was bedeckt den Körper eines Fisches?",
    r5_scales: "Schuppen",
    r5_skin: "Glatte feuchte Haut",
    r5_fur: "Fell",
    r5_feathers: "Federn",
    r5_q2: "Welches Tier ist ein Amphibium?",
    r5_shark: "Hai 🦈",
    r5_salmon: "Lachs 🐟",
    r5_salamander: "Salamander 🦎",
    r5_perch: "Barsch 🐟",
    r5_q3: "Wie atmen KAULQUAPPEN?",
    r5_tad_gills: "Mit Kiemen",
    r5_tad_lungs: "Mit Lungen",
    r5_tad_skin: "Durch Haut",
    r5_tad_mouth: "Durch Mund",
  },
  hu: {
    gotIt: "Értem! →",
    next: "Tovább",
    finish: "Kész",
    correct: "Helyes! ✓",
    wrong: "Nem egészen!",
    orderInProgress: "Menj tovább!",
    orderDone: "Tökéletes! ✓",
    r1_info_title: "🐟 Halak",
    r1_info_text:
      "A halak gerinces állatok, amelyek vízben élnek. KOPOLTYÚVAL lélegeznek, amely a vízből nyeri ki az oxigént. Testüket PIKKELYEK borítják, és USZONYOKKAL úsznak.",
    r1_q: "Melyik szervvel lélegeznek a halak?",
    r1_gills: "Kopoltyú",
    r1_lungs: "Tüdő",
    r1_skin: "Bőr",
    r1_fins: "Uszony",
    r2_info_title: "🐸 Kétéltűek",
    r2_info_text:
      "A kétéltűek VÍZBEN ÉS SZÁRAZFÖLDÖN is élnek — az 'amphi' kettős életet jelent! NEDVES SIMA BŐRÜK van (nincs pikkelyek!), 4 lábuk. Példák: béka, gőte, szalamandra.",
    r2_q: "Hol élnek a kétéltűek?",
    r2_both: "Víz és szárazföld",
    r2_water: "Csak vízben",
    r2_land: "Csak szárazföldön",
    r2_underground: "Föld alatt",
    r3_info_title: "🫁 Hogyan lélegeznek?",
    r3_info_text:
      "HALAK: mindig kopoltyúval. EBIHALAK: kopoltyúval (mint a hal). FELNŐTT BÉKA: tüdővel ÉS nedves bőrén át!",
    r3_q: "Hogyan lélegzik a FELNŐTT BÉKA?",
    r3_lungs_skin: "Tüdő + bőr",
    r3_gills: "Csak kopoltyú",
    r3_fins: "Uszonyokon át",
    r3_mouth: "Csak száj",
    r4_info_title: "🔄 Béka életciklusa",
    r4_info_text:
      "A béka METAMORFÓZISON megy át! Petéből ebihal lesz (fark+kopoltyú), aztán kis béka (nőnek lábak), végül felnőtt béka (elveszti a farkát).",
    r4_hint: "Koppints a szakaszokra helyes sorrendben!",
    r4_egg: "🥚 Pete",
    r4_tadpole: "🐠 Ebihal",
    r4_froglet: "🐸 Kis béka",
    r4_adult: "🐸 Felnőtt béka",
    r5_info_title: "⭐ Összefoglalás",
    r5_info_text: "Nézzük meg mit tanultál!",
    r5_q1: "Mi borítja a hal testét?",
    r5_scales: "Pikkelyek",
    r5_skin: "Sima nedves bőr",
    r5_fur: "Szőr",
    r5_feathers: "Tollak",
    r5_q2: "Melyik állat kétéltű?",
    r5_shark: "Cápa 🦈",
    r5_salmon: "Lazac 🐟",
    r5_salamander: "Szalamandra 🦎",
    r5_perch: "Sügér 🐟",
    r5_q3: "Mivel lélegeznek az EBIHALAK?",
    r5_tad_gills: "Kopoltyúval",
    r5_tad_lungs: "Tüdővel",
    r5_tad_skin: "Bőrön át",
    r5_tad_mouth: "Szájjal",
  },
  ro: {
    gotIt: "Înțeles! →",
    next: "Următorul",
    finish: "Gata",
    correct: "Corect! ✓",
    wrong: "Nu tocmai!",
    orderInProgress: "Continuă!",
    orderDone: "Perfect! ✓",
    r1_info_title: "🐟 Pești",
    r1_info_text:
      "Peștii sunt vertebrate care trăiesc în apă. Respiră prin BRANHII, care extrag oxigenul din apă. Corpurile lor sunt acoperite cu SOLZI, și folosesc ARIPIOARE pentru a înota.",
    r1_q: "Ce organ folosesc peștii pentru a respira?",
    r1_gills: "Branhii",
    r1_lungs: "Plămâni",
    r1_skin: "Piele",
    r1_fins: "Aripioare",
    r2_info_title: "🐸 Amfibieni",
    r2_info_text:
      "Amfibienii trăiesc ATÂT în apă cât și pe uscat — 'amphi' înseamnă viață dublă! Au PIELE UMEDĂ NETEDĂ (fără solzi!), 4 picioare. Exemple: broaște, tritoni, salamandre.",
    r2_q: "Unde trăiesc amfibienii?",
    r2_both: "Apă și uscat",
    r2_water: "Doar în apă",
    r2_land: "Doar pe uscat",
    r2_underground: "Sub pământ",
    r3_info_title: "🫁 Cum respiră?",
    r3_info_text:
      "PEȘTI: respiră mereu cu branhii. MORMOLOCI: respiră cu branhii. BROAȘTE ADULTE: respiră cu plămâni ȘI prin pielea umedă!",
    r3_q: "Cum respiră o BROASCĂ ADULTĂ?",
    r3_lungs_skin: "Plămâni + piele",
    r3_gills: "Doar branhii",
    r3_fins: "Prin aripioare",
    r3_mouth: "Doar gură",
    r4_info_title: "🔄 Ciclul de viață al broaștei",
    r4_info_text:
      "Broaștele trec prin METAMORFOZĂ! Ou → Mormoloc (cu coadă+branhii) → Broaștică (cresc picioare) → Broască adultă (pierde coada).",
    r4_hint: "Apasă stadiile în ordinea corectă!",
    r4_egg: "🥚 Ou",
    r4_tadpole: "🐠 Mormoloc",
    r4_froglet: "🐸 Broaștică",
    r4_adult: "🐸 Broască adultă",
    r5_info_title: "⭐ Recapitulare",
    r5_info_text: "Să vedem ce ai învățat!",
    r5_q1: "Ce acoperă corpul unui pește?",
    r5_scales: "Solzi",
    r5_skin: "Piele netedă umedă",
    r5_fur: "Blană",
    r5_feathers: "Pene",
    r5_q2: "Care animal este amfibian?",
    r5_shark: "Rechin 🦈",
    r5_salmon: "Somon 🐟",
    r5_salamander: "Salamandră 🦎",
    r5_perch: "Biban 🐟",
    r5_q3: "Cum respiră MORMOLOCII?",
    r5_tad_gills: "Cu branhii",
    r5_tad_lungs: "Cu plămâni",
    r5_tad_skin: "Prin piele",
    r5_tad_mouth: "Cu gura",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Question Pools
// ─────────────────────────────────────────────────────────────────────────────

const R1_POOL: MCQQuestion[] = [
  {
    question: "r1_q",
    choices: ["r1_gills", "r1_lungs", "r1_skin", "r1_fins"],
    answer: "r1_gills",
  },
];

const R2_POOL: MCQQuestion[] = [
  {
    question: "r2_q",
    choices: ["r2_both", "r2_water", "r2_land", "r2_underground"],
    answer: "r2_both",
  },
];

const R3_POOL: MCQQuestion[] = [
  {
    question: "r3_q",
    choices: ["r3_lungs_skin", "r3_gills", "r3_fins", "r3_mouth"],
    answer: "r3_lungs_skin",
  },
];

const ORDER_SEQUENCE = [
  "r4_egg",
  "r4_tadpole",
  "r4_froglet",
  "r4_adult",
] as const;
type OrderKey = (typeof ORDER_SEQUENCE)[number];

const R5_POOL: MCQQuestion[] = [
  {
    question: "r5_q1",
    choices: ["r5_scales", "r5_skin", "r5_fur", "r5_feathers"],
    answer: "r5_scales",
  },
  {
    question: "r5_q2",
    choices: ["r5_shark", "r5_salmon", "r5_salamander", "r5_perch"],
    answer: "r5_salamander",
  },
  {
    question: "r5_q3",
    choices: ["r5_tad_gills", "r5_tad_lungs", "r5_tad_skin", "r5_tad_mouth"],
    answer: "r5_tad_gills",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Round Metadata
// ─────────────────────────────────────────────────────────────────────────────

interface RoundMeta {
  infoTitle: string;
  infoText: string;
  svg: React.ReactNode;
  hintKey?: string;
}

const ROUND_META: RoundMeta[] = [
  {
    infoTitle: "r1_info_title",
    infoText: "r1_info_text",
    svg: <SVG_R1 />,
  },
  {
    infoTitle: "r2_info_title",
    infoText: "r2_info_text",
    svg: <SVG_R2 />,
  },
  {
    infoTitle: "r3_info_title",
    infoText: "r3_info_text",
    svg: <SVG_R3 />,
  },
  {
    infoTitle: "r4_info_title",
    infoText: "r4_info_text",
    svg: <SVG_R4 />,
    hintKey: "r4_hint",
  },
  {
    infoTitle: "r5_info_title",
    infoText: "r5_info_text",
    svg: <SVG_R5 />,
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Helper Functions
// ─────────────────────────────────────────────────────────────────────────────

function shuffle<T>(arr: T[]): T[] {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

// ─────────────────────────────────────────────────────────────────────────────
// SVG Illustrations
// ─────────────────────────────────────────────────────────────────────────────

function SVG_R1() {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <linearGradient id="fishBody" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2DD4BF" />
          <stop offset="100%" stopColor="#0891B2" />
        </linearGradient>
        <linearGradient id="bgGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1E3A8A" />
          <stop offset="100%" stopColor="#0C4A6E" />
        </linearGradient>
      </defs>
      <rect width="240" height="160" fill="url(#bgGrad)" />

      {/* Fish body */}
      <ellipse cx="100" cy="80" rx="35" ry="25" fill="url(#fishBody)" />

      {/* Tail */}
      <path
        d="M 65 80 L 30 60 L 35 80 L 30 100 Z"
        fill="#0891B2"
        opacity="0.8"
      />

      {/* Scales (overlapping circles) */}
      <circle cx="75" cy="70" r="4" fill="rgba(255, 255, 255, 0.2)" />
      <circle cx="85" cy="65" r="4" fill="rgba(255, 255, 255, 0.2)" />
      <circle cx="95" cy="70" r="4" fill="rgba(255, 255, 255, 0.2)" />
      <circle cx="75" cy="85" r="4" fill="rgba(255, 255, 255, 0.2)" />
      <circle cx="85" cy="90" r="4" fill="rgba(255, 255, 255, 0.2)" />
      <circle cx="95" cy="85" r="4" fill="rgba(255, 255, 255, 0.2)" />

      {/* Gills (orange highlight) */}
      <rect x="55" y="72" width="12" height="16" fill="none" stroke="#FF6B35" strokeWidth="2" opacity="0.7" />

      {/* Fin */}
      <path d="M 115 55 L 130 35 L 125 70 Z" fill="#FF6B35" opacity="0.8" />

      {/* Eye */}
      <circle cx="50" cy="75" r="3" fill="white" />
      <circle cx="51" cy="75" r="1.5" fill="black" />

      {/* Labels */}
      <text x="55" y="40" fontSize="11" fill="white" fontWeight="bold" textAnchor="middle">
        Kiemen
      </text>
      <text x="90" y="125" fontSize="11" fill="white" fontWeight="bold" textAnchor="middle">
        Schuppen
      </text>
      <text x="130" y="80" fontSize="11" fill="white" fontWeight="bold" textAnchor="middle">
        Flossen
      </text>
    </svg>
  );
}

function SVG_R2() {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <linearGradient id="waterGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06B6D4" />
          <stop offset="100%" stopColor="#0369A1" />
        </linearGradient>
        <linearGradient id="landGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#16A34A" />
          <stop offset="100%" stopColor="#15803D" />
        </linearGradient>
      </defs>

      {/* Water (left side) */}
      <rect x="0" y="0" width="120" height="160" fill="url(#waterGrad)" />

      {/* Land (right side) */}
      <rect x="120" y="0" width="120" height="160" fill="url(#landGrad)" />

      {/* Water waves */}
      <path
        d="M 0 40 Q 15 35 30 40 T 60 40 T 90 40 T 120 40"
        stroke="rgba(255,255,255,0.3)"
        strokeWidth="1"
        fill="none"
      />
      <path
        d="M 0 60 Q 15 55 30 60 T 60 60 T 90 60 T 120 60"
        stroke="rgba(255,255,255,0.2)"
        strokeWidth="1"
        fill="none"
      />

      {/* Frog in middle (straddling both) */}
      <ellipse cx="120" cy="100" rx="20" ry="16" fill="#4ADE80" />

      {/* Frog head */}
      <circle cx="110" cy="80" r="12" fill="#4ADE80" />
      <circle cx="130" cy="80" r="12" fill="#4ADE80" />

      {/* Eyes */}
      <circle cx="108" cy="75" r="2.5" fill="white" />
      <circle cx="132" cy="75" r="2.5" fill="white" />
      <circle cx="108.5" cy="75.5" r="1.2" fill="black" />
      <circle cx="132.5" cy="75.5" r="1.2" fill="black" />

      {/* Mouth */}
      <path d="M 120 85 Q 120 88 125 87" stroke="white" strokeWidth="1" fill="none" />

      {/* Legs */}
      <ellipse cx="95" cy="110" rx="6" ry="8" fill="#4ADE80" />
      <ellipse cx="145" cy="110" rx="6" ry="8" fill="#4ADE80" />

      {/* Labels */}
      <text x="60" y="30" fontSize="13" fill="white" fontWeight="bold" textAnchor="middle">
        Wasser
      </text>
      <text x="180" y="30" fontSize="13" fill="white" fontWeight="bold" textAnchor="middle">
        Land
      </text>
    </svg>
  );
}

function SVG_R3() {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <linearGradient id="r3Bg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1E40AF" />
          <stop offset="100%" stopColor="#0C2340" />
        </linearGradient>
      </defs>
      <rect width="240" height="160" fill="url(#r3Bg)" />

      {/* Panel 1: Fish + Gills */}
      <g>
        <rect x="10" y="20" width="65" height="100" rx="4" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        <ellipse cx="42" cy="55" rx="18" ry="14" fill="#2DD4BF" />
        <path d="M 25 55 L 10 45 L 12 55 L 10 65 Z" fill="#0891B2" opacity="0.8" />
        <rect x="26" y="50" width="6" height="10" fill="#FF6B35" opacity="0.6" />
        <circle cx="20" cy="50" r="1.5" fill="white" />
        <text x="42" y="130" fontSize="10" fill="white" fontWeight="bold" textAnchor="middle">
          Fish
        </text>
        <text x="42" y="145" fontSize="9" fill="#4ADE80" fontWeight="bold" textAnchor="middle">
          Gills ✓
        </text>
      </g>

      {/* Panel 2: Tadpole + Gills */}
      <g>
        <rect x="88" y="20" width="65" height="100" rx="4" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        <ellipse cx="120" cy="55" rx="15" ry="12" fill="#FBBF24" />
        <path d="M 105 55 L 85 45 L 87 55 L 85 65 Z" fill="#F59E0B" opacity="0.8" />
        <rect x="106" y="50" width="5" height="8" fill="#FF6B35" opacity="0.6" />
        <circle cx="102" cy="50" r="1.5" fill="white" />
        <text x="120" y="130" fontSize="10" fill="white" fontWeight="bold" textAnchor="middle">
          Tadpole
        </text>
        <text x="120" y="145" fontSize="9" fill="#4ADE80" fontWeight="bold" textAnchor="middle">
          Gills ✓
        </text>
      </g>

      {/* Panel 3: Frog + Lungs + Skin */}
      <g>
        <rect x="166" y="20" width="65" height="100" rx="4" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        <ellipse cx="198" cy="55" rx="14" ry="14" fill="#4ADE80" />
        <circle cx="192" cy="50" r="2" fill="white" />
        <circle cx="204" cy="50" r="2" fill="white" />
        <path d="M 198 62 Q 198 64 200 63" stroke="white" strokeWidth="0.8" fill="none" />
        <ellipse cx="185" cy="65" rx="4" ry="6" fill="#4ADE80" />
        <ellipse cx="211" cy="65" rx="4" ry="6" fill="#4ADE80" />
        <text x="198" y="130" fontSize="10" fill="white" fontWeight="bold" textAnchor="middle">
          Adult Frog
        </text>
        <text x="198" y="145" fontSize="8" fill="#4ADE80" fontWeight="bold" textAnchor="middle">
          Lungs + Skin ✓
        </text>
      </g>
    </svg>
  );
}

function SVG_R4() {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <linearGradient id="lifecycleGrad" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#7C3AED" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>
      </defs>
      <rect width="240" height="160" fill="url(#lifecycleGrad)" />

      {/* Circular arc path */}
      <circle cx="120" cy="100" r="45" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeDasharray="5,5" />

      {/* Stage 1: Egg (left-top) */}
      <g>
        <ellipse cx="75" cy="50" rx="10" ry="14" fill="#F59E0B" stroke="white" strokeWidth="1" />
        <text x="75" y="80" fontSize="10" fill="white" fontWeight="bold" textAnchor="middle">
          Egg
        </text>
      </g>

      {/* Arrow 1→2 */}
      <path d="M 85 55 Q 100 40 110 45" stroke="rgba(255,255,255,0.4)" strokeWidth="1" fill="none" />

      {/* Stage 2: Tadpole (right-top) */}
      <g>
        <ellipse cx="165" cy="50" rx="12" ry="10" fill="#FBBF24" />
        <path d="M 153 50 L 130 40 L 135 50 L 130 60 Z" fill="#F59E0B" opacity="0.8" />
        <text x="165" y="80" fontSize="10" fill="white" fontWeight="bold" textAnchor="middle">
          Tadpole
        </text>
      </g>

      {/* Arrow 2→3 */}
      <path d="M 160 60 Q 155 85 140 115" stroke="rgba(255,255,255,0.4)" strokeWidth="1" fill="none" />

      {/* Stage 3: Froglet (right-bottom) */}
      <g>
        <ellipse cx="165" cy="125" rx="11" ry="12" fill="#4ADE80" />
        <circle cx="160" cy="120" r="1.5" fill="white" />
        <circle cx="170" cy="120" r="1.5" fill="white" />
        <ellipse cx="152" cy="135" rx="3" ry="5" fill="#4ADE80" />
        <ellipse cx="178" cy="135" rx="3" ry="5" fill="#4ADE80" />
        <text x="165" y="155" fontSize="10" fill="white" fontWeight="bold" textAnchor="middle">
          Froglet
        </text>
      </g>

      {/* Arrow 3→4 */}
      <path d="M 154 125 Q 130 125 110 115" stroke="rgba(255,255,255,0.4)" strokeWidth="1" fill="none" />

      {/* Stage 4: Adult Frog (left-bottom) */}
      <g>
        <ellipse cx="75" cy="125" rx="10" ry="12" fill="#4ADE80" />
        <circle cx="71" cy="120" r="1.5" fill="white" />
        <circle cx="79" cy="120" r="1.5" fill="white" />
        <ellipse cx="65" cy="135" rx="2.5" ry="5" fill="#4ADE80" />
        <ellipse cx="85" cy="135" rx="2.5" ry="5" fill="#4ADE80" />
        <text x="75" y="155" fontSize="10" fill="white" fontWeight="bold" textAnchor="middle">
          Adult
        </text>
      </g>
    </svg>
  );
}

function SVG_R5() {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <linearGradient id="r5Bg" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0369A1" />
          <stop offset="100%" stopColor="#047857" />
        </linearGradient>
      </defs>
      <rect width="240" height="160" fill="url(#r5Bg)" />

      {/* Left column: Fish */}
      <g>
        <rect x="20" y="30" width="90" height="105" rx="4" fill="rgba(255,255,255,0.08)" stroke="rgba(59,130,246,0.4)" strokeWidth="1.5" />

        {/* Fish icon */}
        <ellipse cx="65" cy="55" rx="20" ry="16" fill="#2DD4BF" />
        <path d="M 45 55 L 25 45 L 30 55 L 25 65 Z" fill="#0891B2" opacity="0.8" />
        <circle cx="35" cy="50" r="2" fill="white" />

        {/* Checkmarks */}
        <text x="48" y="90" fontSize="12" fill="white" fontWeight="bold">
          Gills ✓
        </text>
        <text x="48" y="110" fontSize="12" fill="white" fontWeight="bold">
          Scales ✓
        </text>
        <text x="48" y="130" fontSize="12" fill="white" fontWeight="bold">
          Fins ✓
        </text>
      </g>

      {/* Right column: Amphibian */}
      <g>
        <rect x="130" y="30" width="90" height="105" rx="4" fill="rgba(255,255,255,0.08)" stroke="rgba(16,185,129,0.4)" strokeWidth="1.5" />

        {/* Frog icon */}
        <ellipse cx="175" cy="55" rx="16" ry="14" fill="#4ADE80" />
        <circle cx="170" cy="50" r="1.5" fill="white" />
        <circle cx="180" cy="50" r="1.5" fill="white" />
        <ellipse cx="160" cy="62" rx="3" ry="5" fill="#4ADE80" />
        <ellipse cx="190" cy="62" rx="3" ry="5" fill="#4ADE80" />

        {/* Checkmarks */}
        <text x="158" y="90" fontSize="12" fill="white" fontWeight="bold">
          Moist Skin ✓
        </text>
        <text x="158" y="110" fontSize="12" fill="white" fontWeight="bold">
          4 Legs ✓
        </text>
        <text x="158" y="130" fontSize="12" fill="white" fontWeight="bold">
          Water+Land ✓
        </text>
      </g>
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────────────────────────────────────

export default function FishExplorer({
  color = "#3B82F6",
  onDone,
  lang = "en",
}: Props) {
  const langCode = (lang || "en") as Lang;
  const t = LABELS[langCode] || LABELS.en;

  const [round, setRound] = useState(0);
  const [phase, setPhase] = useState<Phase>("info");
  const [subIdx, setSubIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [locked, setLocked] = useState(false);
  const [tapped, setTapped] = useState<OrderKey[]>([]);
  const [orderWrong, setOrderWrong] = useState(false);

  const scoreRef = useRef(0);
  const totalRef = useRef(0);

  // Shuffled pools
  const r1Q = useMemo(() => R1_POOL[0], []);
  const r2Q = useMemo(() => R2_POOL[0], []);
  const r3Q = useMemo(() => R3_POOL[0], []);
  const r5Qs = useMemo(() => shuffle(R5_POOL), []);
  const shuffledOrderSeq = useMemo(() => shuffle([...ORDER_SEQUENCE]), []);

  // Get current question
  const getCurrentQuestion = useCallback((): MCQQuestion | null => {
    if (round === 0) return r1Q;
    if (round === 1) return r2Q;
    if (round === 2) return r3Q;
    if (round === 4) return r5Qs[subIdx] || null;
    return null;
  }, [round, subIdx, r1Q, r2Q, r3Q, r5Qs]);

  const handleNext = useCallback(() => {
    setSelected(null);
    setLocked(false);
    setPhase("question");
  }, []);

  const handleAnswer = useCallback(
    (choice: string) => {
      if (locked) return;
      setSelected(choice);
      setLocked(true);

      const currentQ = getCurrentQuestion();
      if (!currentQ) return;

      totalRef.current += 1;
      if (choice === currentQ.answer) {
        scoreRef.current += 1;
      }

      setTimeout(() => advanceSub(), 1500);
    },
    [locked, getCurrentQuestion]
  );

  const handleOrderTap = useCallback(
    (key: OrderKey) => {
      if (tapped.includes(key)) return;

      const nextIndex = tapped.length;
      const correct = ORDER_SEQUENCE[nextIndex] === key;

      if (!correct) {
        setOrderWrong(true);
        setTimeout(() => setOrderWrong(false), 400);
        return;
      }

      totalRef.current += 1;
      scoreRef.current += 1;
      setTapped([...tapped, key]);

      if (tapped.length === 3) {
        setTimeout(() => advanceRound(), 1000);
      }
    },
    [tapped]
  );

  const advanceSub = useCallback(() => {
    if (round === 4 && subIdx < 2) {
      setSubIdx(subIdx + 1);
      setSelected(null);
      setLocked(false);
    } else {
      advanceRound();
    }
  }, [round, subIdx]);

  const advanceRound = useCallback(() => {
    if (round < 4) {
      setRound(round + 1);
      setPhase("info");
      setSubIdx(0);
      setSelected(null);
      setLocked(false);
      setTapped([]);
      setOrderWrong(false);
    } else {
      // Finished
      if (onDone) {
        onDone(scoreRef.current, totalRef.current);
      }
    }
  }, [round, onDone]);

  const meta = ROUND_META[round];

  return (
    <div className="min-h-screen bg-[#060614] text-white px-4 py-6 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Progress dots */}
      <div className="flex gap-2 mb-6">
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full transition-all ${
              i < round
                ? "bg-green-400 w-3"
                : i === round
                  ? "bg-white w-3"
                  : "bg-white/20"
            }`}
            style={{ backgroundColor: i <= round ? color : undefined }}
          />
        ))}
      </div>

      {/* Main container */}
      <div className="w-full max-w-md">
        <AnimatePresence mode="wait">
          {phase === "info" && (
            <motion.div
              key={`info-${round}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center gap-4"
            >
              {/* Title */}
              <h2 className="text-2xl font-black text-center" style={{ color }}>
                {t[meta.infoTitle as keyof typeof t] || meta.infoTitle}
              </h2>

              {/* SVG illustration */}
              <div className="w-full bg-white/5 rounded-2xl p-4 border border-white/10">
                {meta.svg}
              </div>

              {/* Info text */}
              <p className="text-sm text-white/70 leading-relaxed text-center px-2">
                {t[meta.infoText as keyof typeof t] || meta.infoText}
              </p>

              {/* Hint for round 4 */}
              {meta.hintKey && (
                <p className="text-xs font-semibold text-center" style={{ color }}>
                  {t[meta.hintKey as keyof typeof t] || meta.hintKey}
                </p>
              )}

              {/* Got it button */}
              <button
                onClick={handleNext}
                className="mt-2 px-6 py-3 bg-white/10 border border-white/20 rounded-xl font-bold text-white hover:bg-white/20 transition-all flex items-center gap-2 group"
              >
                {t.gotIt}
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          )}

          {phase === "question" && round < 4 && (
            <motion.div
              key={`q-${round}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-4"
            >
              {/* Question card */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <h3 className="text-lg font-bold text-center mb-4">
                  {t[getCurrentQuestion()?.question as keyof typeof t] ||
                    "Question"}
                </h3>

                {/* Choices */}
                <div className="space-y-3">
                  {getCurrentQuestion()?.choices.map((choice, idx) => {
                    const isCorrect = choice === getCurrentQuestion()?.answer;
                    const isSelected = selected === choice;
                    const isWrong = isSelected && !isCorrect;

                    return (
                      <motion.button
                        key={idx}
                        onClick={() => handleAnswer(choice)}
                        whileHover={!locked ? { scale: 1.02 } : {}}
                        disabled={locked}
                        className={`w-full py-3 px-4 rounded-xl font-bold text-sm transition-all border-2 ${
                          isSelected
                            ? isCorrect
                              ? "bg-green-500/20 border-green-500 text-green-300"
                              : "bg-red-500/20 border-red-500 text-red-300"
                            : locked
                              ? "bg-white/5 border-white/10 text-white/50"
                              : "bg-white/10 border-white/20 text-white hover:bg-white/20 hover:border-white/30"
                        }`}
                      >
                        {t[choice as keyof typeof t] || choice}
                      </motion.button>
                    );
                  })}
                </div>

                {/* Feedback */}
                {locked && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mt-4 text-center font-bold text-sm ${
                      selected === getCurrentQuestion()?.answer
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {selected === getCurrentQuestion()?.answer
                      ? t.correct
                      : t.wrong}
                  </motion.div>
                )}
              </div>

              {/* Next button */}
              {locked && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onClick={advanceSub}
                  className="px-6 py-3 bg-white/10 border border-white/20 rounded-xl font-bold text-white hover:bg-white/20 transition-all flex items-center justify-center gap-2"
                >
                  {round === 4 && subIdx === 2 ? t.finish : t.next}
                  <ChevronRight size={16} />
                </motion.button>
              )}
            </motion.div>
          )}

          {phase === "question" && round === 3 && (
            <motion.div
              key={`order-${round}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-4"
            >
              {/* Tapped sequence */}
              {tapped.length > 0 && (
                <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4">
                  <div className="flex gap-3 flex-wrap justify-center">
                    {tapped.map((key, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="bg-green-500 text-white font-bold py-2 px-4 rounded-lg text-sm"
                      >
                        {t[key as keyof typeof t] || key}
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Order title */}
              <h3 className="text-lg font-bold text-center">
                {tapped.length === 4 ? t.orderDone : t.orderInProgress}
              </h3>

              {/* Tap buttons */}
              <div className="space-y-2">
                {shuffledOrderSeq.map((key) => {
                  const isTapped = tapped.includes(key);
                  return (
                    <motion.button
                      key={key}
                      onClick={() => handleOrderTap(key)}
                      disabled={isTapped}
                      whileHover={!isTapped ? { scale: 1.02 } : {}}
                      animate={orderWrong ? { x: [-5, 5, -5, 0] } : {}}
                      transition={
                        orderWrong ? { duration: 0.3 } : { duration: 0 }
                      }
                      className={`w-full py-3 px-4 rounded-xl font-bold text-sm transition-all border-2 ${
                        isTapped
                          ? "bg-green-500/20 border-green-500 text-green-300 opacity-50"
                          : "bg-white/10 border-white/20 text-white hover:bg-white/20 hover:border-white/30"
                      }`}
                    >
                      {t[key as keyof typeof t] || key}
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
