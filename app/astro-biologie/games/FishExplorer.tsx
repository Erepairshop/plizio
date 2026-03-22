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

const ROUND_META = (lang: string): RoundMeta[] => [
  {
    infoTitle: "r1_info_title",
    infoText: "r1_info_text",
    svg: SVG_R1(lang),
  },
  {
    infoTitle: "r2_info_title",
    infoText: "r2_info_text",
    svg: SVG_R2(lang),
  },
  {
    infoTitle: "r3_info_title",
    infoText: "r3_info_text",
    svg: SVG_R3(lang),
  },
  {
    infoTitle: "r4_info_title",
    infoText: "r4_info_text",
    svg: SVG_R4(lang),
    hintKey: "r4_hint",
  },
  {
    infoTitle: "r5_info_title",
    infoText: "r5_info_text",
    svg: SVG_R5(lang),
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

function SVG_R1(lang: string) {
  const labels = {
    en: { gills: "Gills", scales: "Scales", fins: "Fins" },
    de: { gills: "Kiemen", scales: "Schuppen", fins: "Flossen" },
    hu: { gills: "Kopoltyú", scales: "Pikkelyek", fins: "Uszony" },
    ro: { gills: "Branhii", scales: "Solzi", fins: "Aripioare" },
  };
  const l = labels[lang as keyof typeof labels] || labels.en;

  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        {/* Ocean background gradient — deep to mid blue */}
        <linearGradient id="r1Bg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0c2d48" />
          <stop offset="60%" stopColor="#0a3a5c" />
          <stop offset="100%" stopColor="#062a40" />
        </linearGradient>
        {/* Fish body — teal with cyan highlight */}
        <linearGradient id="r1Body" x1="0%" y1="20%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="40%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#0e7490" />
        </linearGradient>
        {/* Belly highlight */}
        <linearGradient id="r1Belly" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#67e8f9" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.1" />
        </linearGradient>
        {/* Dorsal fin warm gradient */}
        <linearGradient id="r1Dorsal" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fb923c" />
          <stop offset="100%" stopColor="#ea580c" />
        </linearGradient>
        {/* Tail fin gradient */}
        <linearGradient id="r1Tail" x1="100%" y1="0%" x2="0%" y2="50%">
          <stop offset="0%" stopColor="#0891b2" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
        {/* Caustic light pattern */}
        <radialGradient id="r1Caustic" cx="35%" cy="25%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.07)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </radialGradient>
        {/* Soft glow for labels */}
        <filter id="r1Glow">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* ── Background ── */}
      <rect width="240" height="160" fill="url(#r1Bg)" />
      {/* Caustic light from above */}
      <ellipse cx="90" cy="30" rx="100" ry="50" fill="url(#r1Caustic)" />
      {/* Subtle light rays from top */}
      <line x1="60" y1="0" x2="75" y2="55" stroke="rgba(255,255,255,0.04)" strokeWidth="8" />
      <line x1="130" y1="0" x2="120" y2="50" stroke="rgba(255,255,255,0.03)" strokeWidth="10" />
      <line x1="190" y1="0" x2="175" y2="45" stroke="rgba(255,255,255,0.025)" strokeWidth="6" />

      {/* Tiny floating particles */}
      <circle cx="25" cy="28" r="1" fill="rgba(255,255,255,0.15)" />
      <circle cx="205" cy="42" r="0.8" fill="rgba(255,255,255,0.12)" />
      <circle cx="180" cy="130" r="1.2" fill="rgba(255,255,255,0.1)" />
      <circle cx="42" cy="140" r="0.9" fill="rgba(255,255,255,0.08)" />
      <circle cx="215" cy="95" r="0.7" fill="rgba(255,255,255,0.1)" />

      {/* ── Tail fin — forked, with ray lines ── */}
      <path d="M 72 82 Q 52 60 30 48 Q 42 72 38 82 Q 42 92 30 116 Q 52 104 72 88 Z"
        fill="url(#r1Tail)" opacity="0.9" />
      {/* Tail fin rays */}
      <line x1="68" y1="82" x2="34" y2="54" stroke="rgba(255,255,255,0.15)" strokeWidth="0.6" />
      <line x1="66" y1="85" x2="35" y2="82" stroke="rgba(255,255,255,0.12)" strokeWidth="0.6" />
      <line x1="68" y1="88" x2="34" y2="110" stroke="rgba(255,255,255,0.15)" strokeWidth="0.6" />
      {/* Tail fin edge highlight */}
      <path d="M 30 48 Q 42 72 38 82 Q 42 92 30 116"
        fill="none" stroke="rgba(103,232,249,0.3)" strokeWidth="1" />

      {/* ── Fish body — organic shape with bezier curves ── */}
      <path d="M 68 85
        Q 68 58 100 50
        Q 120 45 145 52
        Q 165 60 170 78
        Q 172 85 170 92
        Q 165 110 145 118
        Q 120 125 100 120
        Q 68 112 68 85 Z"
        fill="url(#r1Body)" />
      {/* Body bottom highlight (belly) */}
      <path d="M 78 95
        Q 85 115 110 118
        Q 135 120 155 112
        Q 165 106 168 95
        Q 160 108 135 113
        Q 110 116 85 105 Z"
        fill="url(#r1Belly)" />
      {/* Lateral line — subtle darker stripe */}
      <path d="M 75 84 Q 110 80 155 82 Q 168 83 170 85"
        fill="none" stroke="rgba(14,116,144,0.5)" strokeWidth="1.2" strokeLinecap="round" />

      {/* ── Scales — overlapping arc pattern ── */}
      <g opacity="0.35" strokeWidth="0.7" fill="none" stroke="rgba(255,255,255,0.5)">
        {/* Row 1 (top) */}
        <path d="M 92 62 Q 96 58 100 62" /><path d="M 102 60 Q 106 56 110 60" />
        <path d="M 112 62 Q 116 58 120 62" /><path d="M 122 64 Q 126 60 130 64" />
        <path d="M 132 68 Q 136 64 140 68" />
        {/* Row 2 */}
        <path d="M 86 72 Q 90 68 94 72" /><path d="M 96 70 Q 100 66 104 70" />
        <path d="M 106 69 Q 110 65 114 69" /><path d="M 116 70 Q 120 66 124 70" />
        <path d="M 126 72 Q 130 68 134 72" /><path d="M 136 75 Q 140 71 144 75" />
        <path d="M 146 78 Q 150 74 154 78" />
        {/* Row 3 */}
        <path d="M 82 82 Q 86 78 90 82" /><path d="M 92 80 Q 96 76 100 80" />
        <path d="M 102 79 Q 106 75 110 79" /><path d="M 112 80 Q 116 76 120 80" />
        <path d="M 122 81 Q 126 77 130 81" /><path d="M 132 82 Q 136 78 140 82" />
        <path d="M 142 84 Q 146 80 150 84" /><path d="M 152 86 Q 156 82 160 86" />
        {/* Row 4 */}
        <path d="M 84 92 Q 88 88 92 92" /><path d="M 94 91 Q 98 87 102 91" />
        <path d="M 104 90 Q 108 86 112 90" /><path d="M 114 91 Q 118 87 122 91" />
        <path d="M 124 92 Q 128 88 132 92" /><path d="M 134 94 Q 138 90 142 94" />
        <path d="M 144 96 Q 148 92 152 96" />
        {/* Row 5 (bottom) */}
        <path d="M 90 102 Q 94 98 98 102" /><path d="M 100 101 Q 104 97 108 101" />
        <path d="M 110 100 Q 114 96 118 100" /><path d="M 120 101 Q 124 97 128 101" />
        <path d="M 130 103 Q 134 99 138 103" /><path d="M 140 106 Q 144 102 148 106" />
      </g>

      {/* ── Dorsal fin (top) — curved with rays ── */}
      <path d="M 105 52 Q 112 28 130 22 Q 138 20 148 28 Q 152 36 150 52 Q 135 48 120 50 Z"
        fill="url(#r1Dorsal)" opacity="0.9" />
      {/* Dorsal fin membrane rays */}
      <line x1="112" y1="50" x2="120" y2="28" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
      <line x1="122" y1="49" x2="130" y2="24" stroke="rgba(255,255,255,0.18)" strokeWidth="0.5" />
      <line x1="132" y1="49" x2="138" y2="26" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
      <line x1="142" y1="50" x2="146" y2="32" stroke="rgba(255,255,255,0.12)" strokeWidth="0.5" />
      {/* Dorsal edge highlight */}
      <path d="M 105 52 Q 112 28 130 22 Q 138 20 148 28"
        fill="none" stroke="rgba(251,146,60,0.5)" strokeWidth="1" />

      {/* ── Anal fin (bottom rear) ── */}
      <path d="M 118 118 Q 125 138 140 140 Q 145 138 148 130 Q 144 120 135 118 Z"
        fill="#f59e0b" opacity="0.7" />
      <line x1="124" y1="118" x2="130" y2="136" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
      <line x1="134" y1="118" x2="138" y2="134" stroke="rgba(255,255,255,0.12)" strokeWidth="0.5" />

      {/* ── Pelvic fins (small, underside) ── */}
      <path d="M 102 116 Q 98 128 92 130 Q 90 128 95 118 Z"
        fill="#fbbf24" opacity="0.5" />
      <path d="M 108 116 Q 106 126 100 128 Q 99 126 104 118 Z"
        fill="#fbbf24" opacity="0.45" />

      {/* ── Pectoral fin (side, translucent) ── */}
      <path d="M 90 90 Q 80 100 74 108 Q 72 110 76 108 Q 86 100 92 94 Z"
        fill="#67e8f9" opacity="0.35" />
      <line x1="90" y1="90" x2="76" y2="106" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />

      {/* ── Gill cover — operculum arc ── */}
      <path d="M 88 68 Q 82 78 82 88 Q 82 98 88 108"
        fill="none" stroke="rgba(14,116,144,0.6)" strokeWidth="1.8" strokeLinecap="round" />
      {/* Gill slits behind operculum */}
      <path d="M 84 72 Q 80 80 80 85 Q 80 90 84 98" fill="none" stroke="rgba(239,68,68,0.3)" strokeWidth="0.8" />
      <path d="M 82 74 Q 78 82 78 85 Q 78 88 82 96" fill="none" stroke="rgba(239,68,68,0.25)" strokeWidth="0.7" />
      <path d="M 80 76 Q 76 83 76 85 Q 76 87 80 94" fill="none" stroke="rgba(239,68,68,0.2)" strokeWidth="0.6" />

      {/* ── Eye — detailed with iris ── */}
      <circle cx="97" cy="72" r="6" fill="#f0f9ff" />
      <circle cx="97" cy="72" r="4.5" fill="#1e3a5f" />
      <circle cx="97" cy="72" r="2.8" fill="#0c1829" />
      {/* Iris ring detail */}
      <circle cx="97" cy="72" r="4" fill="none" stroke="rgba(34,211,238,0.3)" strokeWidth="0.6" />
      {/* Specular highlights */}
      <circle cx="99" cy="70" r="1.4" fill="white" opacity="0.85" />
      <circle cx="95.5" cy="74" r="0.6" fill="white" opacity="0.4" />

      {/* ── Mouth ── */}
      <path d="M 76 88 Q 78 92 82 90" fill="none" stroke="rgba(14,116,144,0.5)" strokeWidth="1.2" strokeLinecap="round" />

      {/* ── Nostril ── */}
      <circle cx="84" cy="78" r="0.8" fill="rgba(14,116,144,0.4)" />

      {/* Body top edge subtle highlight */}
      <path d="M 100 50 Q 120 45 145 52 Q 165 60 170 78"
        fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8" />

      {/* ═══════════ Labels ═══════════ */}

      {/* Gills label */}
      <line x1="82" y1="86" x2="30" y2="32" stroke="#FF6B35" strokeWidth="1.5" strokeDasharray="3,2" opacity="0.7" />
      <circle cx="82" cy="86" r="2" fill="#FF6B35" opacity="0.7" />
      <rect x="4" y="18" width="52" height="20" rx="10" fill="rgba(0,0,0,0.75)" stroke="#FF6B35" strokeWidth="1.5" />
      <text x="30" y="33" fontSize="10" fill="#FFD700" fontWeight="bold" textAnchor="middle" fontFamily="system-ui">
        {l.gills}
      </text>

      {/* Scales label */}
      <line x1="120" y1="96" x2="120" y2="142" stroke="#22d3ee" strokeWidth="1.5" strokeDasharray="3,2" opacity="0.7" />
      <circle cx="120" cy="96" r="2" fill="#22d3ee" opacity="0.7" />
      <rect x="88" y="135" width="64" height="20" rx="10" fill="rgba(0,0,0,0.75)" stroke="#22d3ee" strokeWidth="1.5" />
      <text x="120" y="150" fontSize="10" fill="#67e8f9" fontWeight="bold" textAnchor="middle" fontFamily="system-ui">
        {l.scales}
      </text>

      {/* Fins label */}
      <line x1="140" y1="36" x2="190" y2="14" stroke="#fb923c" strokeWidth="1.5" strokeDasharray="3,2" opacity="0.7" />
      <circle cx="140" cy="36" r="2" fill="#fb923c" opacity="0.7" />
      <rect x="168" y="4" width="52" height="20" rx="10" fill="rgba(0,0,0,0.75)" stroke="#fb923c" strokeWidth="1.5" />
      <text x="194" y="19" fontSize="10" fill="#fed7aa" fontWeight="bold" textAnchor="middle" fontFamily="system-ui">
        {l.fins}
      </text>
    </svg>
  );
}

function SVG_R2(lang: string) {
  const labels = {
    en: { water: "Water", land: "Land" },
    de: { water: "Wasser", land: "Land" },
    hu: { water: "Víz", land: "Szárazföld" },
    ro: { water: "Apă", land: "Uscat" },
  };
  const l = labels[lang as keyof typeof labels] || labels.en;

  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        {/* Water gradient — deep ocean blue */}
        <linearGradient id="r2_Water" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0c4a7a" />
          <stop offset="50%" stopColor="#0a3a5c" />
          <stop offset="100%" stopColor="#062a40" />
        </linearGradient>
        {/* Land gradient — green meadow */}
        <linearGradient id="r2_Land" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3b9d4d" />
          <stop offset="50%" stopColor="#2d8a3d" />
          <stop offset="100%" stopColor="#1f6b2d" />
        </linearGradient>
        {/* Frog body gradient */}
        <linearGradient id="r2_FrogBody" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4ade80" />
          <stop offset="40%" stopColor="#22c55e" />
          <stop offset="100%" stopColor="#15803d" />
        </linearGradient>
        {/* Frog belly gradient */}
        <linearGradient id="r2_FrogBelly" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#86efac" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#4ade80" stopOpacity="0.2" />
        </linearGradient>
        {/* Caustic water light */}
        <radialGradient id="r2_Caustic" cx="35%" cy="20%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.08)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </radialGradient>
      </defs>

      {/* ── Background split: Water left, Land right ── */}
      <rect x="0" y="0" width="120" height="160" fill="url(#r2_Water)" />
      <rect x="120" y="0" width="120" height="160" fill="url(#r2_Land)" />

      {/* ── Water details — caustic light + waves + bubbles ── */}
      <ellipse cx="50" cy="25" rx="80" ry="40" fill="url(#r2_Caustic)" />

      {/* Light rays from above water */}
      <line x1="35" y1="0" x2="48" y2="70" stroke="rgba(255,255,255,0.05)" strokeWidth="10" />
      <line x1="80" y1="0" x2="95" y2="60" stroke="rgba(255,255,255,0.04)" strokeWidth="12" />
      <line x1="110" y1="0" x2="115" y2="50" stroke="rgba(255,255,255,0.03)" strokeWidth="8" />

      {/* Wavy water surface transition — organic curve */}
      <path d="M 0 118 Q 30 110 60 120 Q 90 130 120 122 Q 150 115 180 125 Q 210 132 240 120"
        fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
      <path d="M 0 123 Q 35 115 70 128 Q 105 140 120 128 Q 155 120 190 132 Q 220 140 240 125"
        fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />

      {/* Bubbles in water (varied sizes & positions) */}
      <circle cx="20" cy="90" r="2.2" fill="rgba(255,255,255,0.25)" />
      <circle cx="65" cy="115" r="1.6" fill="rgba(255,255,255,0.2)" />
      <circle cx="35" cy="145" r="1.3" fill="rgba(255,255,255,0.15)" />
      <circle cx="95" cy="100" r="1.9" fill="rgba(255,255,255,0.18)" />
      <circle cx="48" cy="70" r="1" fill="rgba(255,255,255,0.1)" />

      {/* ── Land details — curved grass blades ── */}
      <g opacity="0.75" stroke="#059669" strokeWidth="1.3" fill="none" strokeLinecap="round">
        <path d="M 125 160 Q 123 145 132 152" />
        <path d="M 138 162 Q 136 140 148 150" />
        <path d="M 152 161 Q 150 143 165 153" />
        <path d="M 168 162 Q 166 142 180 152" />
        <path d="M 185 160 Q 183 148 196 154" />
        <path d="M 205 161 Q 203 143 218 152" />
        <path d="M 128 158 Q 127 150 135 155" />
        <path d="M 195 159 Q 194 150 203 156" />
      </g>

      {/* Small flowers on land */}
      <g opacity="0.65">
        <circle cx="142" cy="151" r="1.8" fill="#f97316" />
        <circle cx="142" cy="149" r="0.8" fill="#fbbf24" />
        <circle cx="195" cy="154" r="1.6" fill="#f97316" />
        <circle cx="195" cy="152" r="0.8" fill="#fbbf24" />
      </g>

      {/* ── Frog body — organic bezier blob, straddling water/land ── */}
      <path d="M 120 127
        Q 90 118 78 102
        Q 72 92 75 78
        Q 82 65 105 62
        Q 130 60 150 65
        Q 165 72 168 85
        Q 168 100 160 110
        Q 145 123 120 127 Z"
        fill="url(#r2_FrogBody)" />

      {/* Frog belly — lighter highlight with lower opacity */}
      <path d="M 100 98 Q 120 125 138 108 Q 132 115 120 120 Q 110 115 100 98 Z"
        fill="url(#r2_FrogBelly)" />

      {/* Spotted texture on frog back — darker spots */}
      <g opacity="0.25" fill="rgba(0,0,0,0.5)">
        <circle cx="95" cy="88" r="1.5" />
        <circle cx="120" cy="75" r="1.3" />
        <circle cx="145" cy="88" r="1.4" />
        <circle cx="108" cy="102" r="1" />
        <circle cx="130" cy="105" r="1.1" />
        <circle cx="125" cy="90" r="0.9" />
      </g>

      {/* ── Left eye (water side) — detailed with iris ring ── */}
      <circle cx="105" cy="82" r="6" fill="#f0f9ff" />
      <circle cx="105" cy="82" r="4.2" fill="#1e3a5f" />
      <circle cx="105" cy="82" r="2.8" fill="#0c1829" />
      <circle cx="105" cy="82" r="4" fill="none" stroke="rgba(34,211,238,0.4)" strokeWidth="0.7" />
      <circle cx="107.5" cy="79.5" r="1.5" fill="white" opacity="0.9" />
      <circle cx="103" cy="84.5" r="0.6" fill="white" opacity="0.45" />

      {/* ── Right eye (land side) — detailed with iris ring ── */}
      <circle cx="135" cy="82" r="6" fill="#f0f9ff" />
      <circle cx="135" cy="82" r="4.2" fill="#1e3a5f" />
      <circle cx="135" cy="82" r="2.8" fill="#0c1829" />
      <circle cx="135" cy="82" r="4" fill="none" stroke="rgba(34,211,238,0.4)" strokeWidth="0.7" />
      <circle cx="137.5" cy="79.5" r="1.5" fill="white" opacity="0.9" />
      <circle cx="133" cy="84.5" r="0.6" fill="white" opacity="0.45" />

      {/* Nostrils for breathing hint */}
      <circle cx="115" cy="92" r="0.8" fill="rgba(0,0,0,0.35)" />
      <circle cx="125" cy="92" r="0.8" fill="rgba(0,0,0,0.35)" />

      {/* Mouth curve */}
      <path d="M 110 100 Q 120 105 130 100" fill="none" stroke="rgba(0,0,0,0.3)" strokeWidth="1.2" strokeLinecap="round" />

      {/* ── Front left leg (water side) — organic curved shape ── */}
      <path d="M 92 118
        Q 82 130 70 142
        Q 68 145 73 143
        Q 88 135 100 122 Z"
        fill="url(#r2_FrogBody)" />
      {/* Left foot webbing hints */}
      <path d="M 70 142 Q 66 146 62 150" fill="none" stroke="rgba(0,0,0,0.15)" strokeWidth="0.8" />

      {/* ── Front right leg (land side) — organic curved shape ── */}
      <path d="M 148 118
        Q 158 130 170 142
        Q 172 145 167 143
        Q 152 135 140 122 Z"
        fill="url(#r2_FrogBody)" />
      {/* Right foot webbing hints */}
      <path d="M 170 142 Q 174 146 178 150" fill="none" stroke="rgba(0,0,0,0.15)" strokeWidth="0.8" />

      {/* ── Back legs — muscular curved shapes ── */}
      <path d="M 75 115 Q 60 125 55 140 Q 54 145 60 142 Q 75 130 82 118 Z"
        fill="url(#r2_FrogBody)" opacity="0.85" />
      <path d="M 165 115 Q 180 125 185 140 Q 186 145 180 142 Q 165 130 158 118 Z"
        fill="url(#r2_FrogBody)" opacity="0.85" />

      {/* ═══════════ Labels ═══════════ */}

      {/* Water label */}
      <rect x="10" y="6" width="60" height="24" rx="12" fill="rgba(0,0,0,0.8)" stroke="#67e8f9" strokeWidth="1.5" />
      <text x="40" y="26" fontSize="11" fill="#67e8f9" fontWeight="bold" textAnchor="middle" fontFamily="system-ui">
        {l.water}
      </text>

      {/* Land label */}
      <rect x="170" y="6" width="60" height="24" rx="12" fill="rgba(0,0,0,0.8)" stroke="#86efac" strokeWidth="1.5" />
      <text x="200" y="26" fontSize="11" fill="#86efac" fontWeight="bold" textAnchor="middle" fontFamily="system-ui">
        {l.land}
      </text>
    </svg>
  );
}

function SVG_R3(lang: string) {
  const labels = {
    en: { fish: "Fish", tadpole: "Tadpole", frog: "Adult Frog", gills: "Gills ✓", lungs: "Lungs + Skin ✓" },
    de: { fish: "Fisch", tadpole: "Kaulquappe", frog: "Erwachsener Frosch", gills: "Kiemen ✓", lungs: "Lunge+Haut ✓" },
    hu: { fish: "Hal", tadpole: "Ebihal", frog: "Felnőtt béka", gills: "Kopoltyú ✓", lungs: "Tüdő+Bőr ✓" },
    ro: { fish: "Pește", tadpole: "Mormoloc", frog: "Broaște adultă", gills: "Branhii ✓", lungs: "Plămâni+Piele ✓" },
  };
  const l = labels[lang as keyof typeof labels] || labels.en;

  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        {/* Ocean background gradient */}
        <linearGradient id="r3_Bg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0c2d48" />
          <stop offset="60%" stopColor="#0a3a5c" />
          <stop offset="100%" stopColor="#062a40" />
        </linearGradient>

        {/* Fish body gradient */}
        <linearGradient id="r3_FishBody" x1="0%" y1="20%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="40%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#0e7490" />
        </linearGradient>
        {/* Fish belly */}
        <linearGradient id="r3_FishBelly" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#67e8f9" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.1" />
        </linearGradient>

        {/* Tadpole body gradient */}
        <linearGradient id="r3_TadpoleBody" x1="0%" y1="20%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fcd34d" />
          <stop offset="40%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#d97706" />
        </linearGradient>
        {/* Tadpole belly */}
        <linearGradient id="r3_TadpoleBelly" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fed7aa" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.1" />
        </linearGradient>

        {/* Frog body gradient */}
        <linearGradient id="r3_FrogBody" x1="0%" y1="20%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4ade80" />
          <stop offset="40%" stopColor="#22c55e" />
          <stop offset="100%" stopColor="#15803d" />
        </linearGradient>
        {/* Frog belly */}
        <linearGradient id="r3_FrogBelly" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#86efac" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#4ade80" stopOpacity="0.1" />
        </linearGradient>

        {/* Panel card border gradients */}
        <linearGradient id="r3_PanelBorder1" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(6,182,212,0.7)" />
          <stop offset="100%" stopColor="rgba(6,182,212,0.3)" />
        </linearGradient>
        <linearGradient id="r3_PanelBorder2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(251,146,60,0.7)" />
          <stop offset="100%" stopColor="rgba(251,146,60,0.3)" />
        </linearGradient>
        <linearGradient id="r3_PanelBorder3" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(74,222,128,0.7)" />
          <stop offset="100%" stopColor="rgba(74,222,128,0.3)" />
        </linearGradient>
      </defs>

      {/* ─ Background ─ */}
      <rect width="240" height="160" fill="url(#r3_Bg)" />

      {/* ═══════════ Panel 1: Fish ═══════════ */}
      <g>
        {/* Panel card */}
        <rect x="8" y="12" width="70" height="138" rx="8" fill="rgba(6,182,212,0.1)" stroke="url(#r3_PanelBorder1)" strokeWidth="1.5" />

        {/* Panel header */}
        <text x="43" y="28" fontSize="11" fill="#67e8f9" fontWeight="bold" textAnchor="middle" fontFamily="system-ui">
          {l.fish}
        </text>

        {/* ── Fish body (organic bezier curves) ── */}
        <path d="M 32 62
          Q 32 50 40 46
          Q 48 44 54 49
          Q 57 54 56 62
          Q 54 70 48 72
          Q 40 71 32 62 Z"
          fill="url(#r3_FishBody)" />

        {/* Fish belly highlight */}
        <path d="M 36 62 Q 42 70 50 66 Q 48 64 42 66 Q 38 64 36 62 Z"
          fill="url(#r3_FishBelly)" />

        {/* Scale arc pattern — 4 rows */}
        <g opacity="0.35" strokeWidth="0.6" fill="none" stroke="rgba(255,255,255,0.5)">
          <path d="M 40 52 Q 42 49 44 52" />
          <path d="M 46 51 Q 48 48 50 51" />
          <path d="M 39 58 Q 41 56 43 58" />
          <path d="M 46 59 Q 48 57 50 59" />
          <path d="M 40 65 Q 42 63 44 65" />
          <path d="M 48 66 Q 50 64 52 66" />
        </g>

        {/* Fish tail — forked with rays */}
        <path d="M 32 62 Q 20 52 14 48 Q 20 62 18 62 Q 20 72 14 76 Q 20 70 32 66 Z"
          fill="#0e7490" opacity="0.85" />
        {/* Tail rays */}
        <line x1="28" y1="62" x2="16" y2="50" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
        <line x1="28" y1="68" x2="16" y2="74" stroke="rgba(255,255,255,0.12)" strokeWidth="0.5" />

        {/* ── Eye — detailed with iris ── */}
        <circle cx="36" cy="52" r="3.8" fill="#f0f9ff" />
        <circle cx="36" cy="52" r="2.6" fill="#1e3a5f" />
        <circle cx="36" cy="52" r="1.6" fill="#0c1829" />
        <circle cx="36" cy="52" r="2.4" fill="none" stroke="rgba(34,211,238,0.35)" strokeWidth="0.6" />
        <circle cx="37.5" cy="50.5" r="1" fill="white" opacity="0.8" />
        <circle cx="35" cy="53.5" r="0.4" fill="white" opacity="0.4" />

        {/* Gill slits detail — 3 curves */}
        <path d="M 31 56 Q 29 60 31 64" fill="none" stroke="rgba(239,68,68,0.3)" strokeWidth="0.8" />
        <path d="M 30 57 Q 28 61 30 63" fill="none" stroke="rgba(239,68,68,0.2)" strokeWidth="0.6" />
        <path d="M 29 59 Q 27 61 29 63" fill="none" stroke="rgba(239,68,68,0.15)" strokeWidth="0.5" />

        {/* Breathing label */}
        <rect x="15" y="95" width="50" height="18" rx="6" fill="rgba(0,0,0,0.7)" stroke="#67e8f9" strokeWidth="1.2" />
        <text x="40" y="108" fontSize="8" fill="#67e8f9" fontWeight="bold" textAnchor="middle" fontFamily="system-ui">
          {l.gills}
        </text>
      </g>

      {/* ═══════════ Panel 2: Tadpole ═══════════ */}
      <g>
        {/* Panel card */}
        <rect x="85" y="12" width="70" height="138" rx="8" fill="rgba(251,146,60,0.1)" stroke="url(#r3_PanelBorder2)" strokeWidth="1.5" />

        {/* Panel header */}
        <text x="120" y="28" fontSize="11" fill="#fed7aa" fontWeight="bold" textAnchor="middle" fontFamily="system-ui">
          {l.tadpole}
        </text>

        {/* ── Tadpole body (teardrop with bezier) ── */}
        <path d="M 115 76
          Q 110 54 118 48
          Q 126 45 131 52
          Q 134 60 133 72
          Q 128 80 120 82
          Q 115 80 115 76 Z"
          fill="url(#r3_TadpoleBody)" />

        {/* Tadpole belly highlight */}
        <path d="M 118 65 Q 120 75 128 70 Q 126 68 120 70 Q 118 68 118 65 Z"
          fill="url(#r3_TadpoleBelly)" />

        {/* Tadpole tail — wavy membrane fin */}
        <path d="M 115 76
          Q 105 80 95 76
          Q 100 80 108 82
          Q 112 81 115 79 Z"
          fill="#d97706" opacity="0.8" />

        {/* Tail membrane rays */}
        <line x1="110" y1="76" x2="100" y2="76" stroke="rgba(255,255,255,0.18)" strokeWidth="0.5" />
        <line x1="107" y1="80" x2="98" y2="82" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
        <line x1="112" y1="83" x2="104" y2="86" stroke="rgba(255,255,255,0.12)" strokeWidth="0.4" />

        {/* External gill tufts — organic shapes */}
        <path d="M 113 58 Q 109 50 106 58 Q 109 63 113 58 Z" fill="rgba(234,88,12,0.55)" />
        <path d="M 113 63 Q 109 54 106 65 Q 109 70 113 63 Z" fill="rgba(234,88,12,0.45)" />

        {/* Eye — tiny but detailed */}
        <circle cx="118" cy="54" r="2.2" fill="white" />
        <circle cx="118" cy="54" r="1.3" fill="#1e3a5f" />
        <circle cx="119" cy="53" r="0.6" fill="white" opacity="0.7" />

        {/* Breathing label */}
        <rect x="92" y="95" width="50" height="18" rx="6" fill="rgba(0,0,0,0.7)" stroke="#fed7aa" strokeWidth="1.2" />
        <text x="117" y="108" fontSize="8" fill="#fed7aa" fontWeight="bold" textAnchor="middle" fontFamily="system-ui">
          {l.gills}
        </text>
      </g>

      {/* ═══════════ Panel 3: Adult Frog ═══════════ */}
      <g>
        {/* Panel card */}
        <rect x="162" y="12" width="70" height="138" rx="8" fill="rgba(74,222,128,0.1)" stroke="url(#r3_PanelBorder3)" strokeWidth="1.5" />

        {/* Panel header */}
        <text x="197" y="28" fontSize="11" fill="#86efac" fontWeight="bold" textAnchor="middle" fontFamily="system-ui">
          {l.frog}
        </text>

        {/* ── Frog body (organic blob with bezier) ── */}
        <path d="M 197 78
          Q 185 68 182 56
          Q 180 48 188 45
          Q 197 43 206 45
          Q 214 48 212 56
          Q 209 68 197 78 Z"
          fill="url(#r3_FrogBody)" />

        {/* Frog belly highlight */}
        <path d="M 190 62 Q 197 75 204 68 Q 200 64 197 68 Q 194 64 190 62 Z"
          fill="url(#r3_FrogBelly)" />

        {/* Spotted texture — darker spots */}
        <g opacity="0.3" fill="rgba(0,0,0,0.45)">
          <circle cx="189" cy="58" r="1.1" />
          <circle cx="205" cy="58" r="1.1" />
          <circle cx="197" cy="66" r="0.9" />
          <circle cx="192" cy="70" r="0.8" />
        </g>

        {/* ── Left eye (detailed with iris ring) ── */}
        <circle cx="191" cy="55" r="4.2" fill="#f0f9ff" />
        <circle cx="191" cy="55" r="2.9" fill="#1e3a5f" />
        <circle cx="191" cy="55" r="1.8" fill="#0c1829" />
        <circle cx="191" cy="55" r="2.8" fill="none" stroke="rgba(34,211,238,0.35)" strokeWidth="0.6" />
        <circle cx="193" cy="53" r="1.1" fill="white" opacity="0.85" />
        <circle cx="190" cy="56" r="0.5" fill="white" opacity="0.4" />

        {/* ── Right eye (detailed with iris ring) ── */}
        <circle cx="203" cy="55" r="4.2" fill="#f0f9ff" />
        <circle cx="203" cy="55" r="2.9" fill="#1e3a5f" />
        <circle cx="203" cy="55" r="1.8" fill="#0c1829" />
        <circle cx="203" cy="55" r="2.8" fill="none" stroke="rgba(34,211,238,0.35)" strokeWidth="0.6" />
        <circle cx="205" cy="53" r="1.1" fill="white" opacity="0.85" />
        <circle cx="202" cy="56" r="0.5" fill="white" opacity="0.4" />

        {/* Front legs — organic curved shapes */}
        <path d="M 188 75 Q 182 82 180 90 Q 179 92 184 90 Q 190 82 192 74 Z" fill="#22c55e" opacity="0.75" />
        <path d="M 206 75 Q 212 82 214 90 Q 215 92 210 90 Q 204 82 202 74 Z" fill="#22c55e" opacity="0.75" />

        {/* Nostrils for lung breathing hint */}
        <circle cx="195" cy="62" r="0.7" fill="rgba(0,0,0,0.35)" />
        <circle cx="199" cy="62" r="0.7" fill="rgba(0,0,0,0.35)" />

        {/* Breathing label */}
        <rect x="169" y="95" width="56" height="18" rx="6" fill="rgba(0,0,0,0.7)" stroke="#86efac" strokeWidth="1.2" />
        <text x="197" y="108" fontSize="7" fill="#86efac" fontWeight="bold" textAnchor="middle" fontFamily="system-ui">
          {l.lungs}
        </text>
      </g>
    </svg>
  );
}

function SVG_R4(lang: string) {
  const labels = {
    en: { egg: "Egg", tadpole: "Tadpole", froglet: "Froglet", adult: "Adult Frog" },
    de: { egg: "Ei", tadpole: "Kaulquappe", froglet: "Jungfrosch", adult: "Erwachsener Frosch" },
    hu: { egg: "Pete", tadpole: "Ebihal", froglet: "Kis béka", adult: "Felnőtt béka" },
    ro: { egg: "Ou", tadpole: "Mormoloc", froglet: "Broaștică", adult: "Broaște adultă" },
  };
  const l = labels[lang as keyof typeof labels] || labels.en;

  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        {/* Purple-blue gradient background */}
        <linearGradient id="r4_Lifecycle" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="50%" stopColor="#6366F1" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>

        {/* Egg gradient — amber/yellow */}
        <linearGradient id="r4_EggGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FCD34D" />
          <stop offset="100%" stopColor="#F59E0B" />
        </linearGradient>

        {/* Tadpole gradient — golden */}
        <linearGradient id="r4_TadpoleGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FBBF24" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>

        {/* Froglet gradient — light green */}
        <linearGradient id="r4_FrogletGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4ADE80" />
          <stop offset="100%" stopColor="#16A34A" />
        </linearGradient>

        {/* Glow filter for stage shadows */}
        <filter id="r4_StageShadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="2.5" stdDeviation="2.5" floodOpacity="0.35" />
        </filter>
      </defs>

      {/* Background */}
      <rect width="240" height="160" fill="url(#r4_Lifecycle)" />

      {/* Subtle stars scattered in background */}
      <g opacity="0.15" fill="rgba(255,255,255,0.8)">
        <circle cx="20" cy="30" r="0.8" />
        <circle cx="220" cy="40" r="0.8" />
        <circle cx="40" cy="140" r="0.8" />
        <circle cx="210" cy="120" r="0.8" />
        <circle cx="30" cy="90" r="0.6" />
        <circle cx="200" cy="70" r="0.6" />
      </g>

      {/* Circular dashed arc path connecting stages */}
      <circle cx="120" cy="95" r="52" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="2" strokeDasharray="4,3" />

      {/* ═══════════ Stage 1: Egg (top-left) ═══════════ */}
      <g>
        {/* Egg cluster — 3 translucent spheres with embryo hints */}
        <g filter="url(#r4_StageShadow)">
          {/* Main egg */}
          <path d="M 60 55 Q 50 50 50 40 Q 50 30 60 28 Q 70 30 70 40 Q 70 50 60 55 Z"
            fill="url(#r4_EggGrad)" opacity="0.95" />
          {/* Embryo dot inside */}
          <circle cx="60" cy="42" r="2.5" fill="#7C3AED" opacity="0.7" />

          {/* Supporting egg left */}
          <path d="M 40 58 Q 32 54 32 46 Q 32 38 40 36 Q 48 38 48 46 Q 48 54 40 58 Z"
            fill="url(#r4_EggGrad)" opacity="0.8" />
          <circle cx="40" cy="47" r="1.8" fill="#7C3AED" opacity="0.6" />

          {/* Supporting egg right */}
          <path d="M 80 58 Q 88 54 88 46 Q 88 38 80 36 Q 72 38 72 46 Q 72 54 80 58 Z"
            fill="url(#r4_EggGrad)" opacity="0.8" />
          <circle cx="80" cy="47" r="1.8" fill="#7C3AED" opacity="0.6" />
        </g>

        {/* Stage number */}
        <circle cx="52" cy="28" r="6.5" fill="rgba(255,255,255,0.9)" />
        <text x="52" y="32" fontSize="11" fill="#7C3AED" fontWeight="bold" textAnchor="middle">
          1
        </text>

        {/* Label */}
        <rect x="35" y="70" width="50" height="20" rx="8" fill="rgba(0,0,0,0.8)" stroke="rgba(251,191,36,0.6)" strokeWidth="1.5" />
        <text x="60" y="85" fontSize="9" fill="#FCD34D" fontWeight="bold" textAnchor="middle" fontFamily="system-ui">
          {l.egg}
        </text>
      </g>

      {/* Curved arrow 1→2 */}
      <path d="M 75 45 Q 100 20 160 38" stroke="rgba(255,255,255,0.35)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <polygon points="165,38 158,35 160,43" fill="rgba(255,255,255,0.35)" />

      {/* ═══════════ Stage 2: Tadpole (top-right) ═══════════ */}
      <g>
        {/* Tadpole body — organic teardrop with bezier */}
        <path d="M 175 58
          Q 165 45 170 35
          Q 180 30 188 38
          Q 195 48 193 58
          Q 185 65 175 64 Z"
          fill="url(#r4_TadpoleGrad)" opacity="0.95" filter="url(#r4_StageShadow)" />

        {/* Tadpole belly highlight */}
        <path d="M 178 50 Q 182 60 188 55 Q 185 52 180 55 Z"
          fill="rgba(251,191,36,0.4)" />

        {/* Tadpole tail — long wavy with fin membrane */}
        <path d="M 175 58
          Q 160 62 145 58
          Q 155 65 165 66
          Q 170 66 175 63 Z"
          fill="#D97706" opacity="0.85" />

        {/* Tail membrane rays */}
        <line x1="168" y1="61" x2="155" y2="59" stroke="rgba(255,255,255,0.2)" strokeWidth="0.6" />
        <line x1="162" y1="65" x2="150" y2="66" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
        <line x1="155" y1="68" x2="145" y2="70" stroke="rgba(255,255,255,0.12)" strokeWidth="0.4" />

        {/* External gill tufts — organic curved */}
        <path d="M 172 45 Q 168 36 165 45 Q 168 50 172 45 Z"
          fill="rgba(217,119,6,0.6)" />
        <path d="M 172 50 Q 168 41 165 52 Q 168 57 172 50 Z"
          fill="rgba(217,119,6,0.5)" />

        {/* Tiny eye */}
        <circle cx="180" cy="42" r="2" fill="white" />
        <circle cx="180" cy="42" r="1.1" fill="#1e3a5f" />
        <circle cx="181" cy="41" r="0.5" fill="white" opacity="0.7" />

        {/* Stage number */}
        <circle cx="208" cy="28" r="6.5" fill="rgba(255,255,255,0.9)" />
        <text x="208" y="32" fontSize="11" fill="#7C3AED" fontWeight="bold" textAnchor="middle">
          2
        </text>

        {/* Label */}
        <rect x="155" y="70" width="50" height="20" rx="8" fill="rgba(0,0,0,0.8)" stroke="rgba(251,191,36,0.6)" strokeWidth="1.5" />
        <text x="180" y="85" fontSize="9" fill="#FED7AA" fontWeight="bold" textAnchor="middle" fontFamily="system-ui">
          {l.tadpole}
        </text>
      </g>

      {/* Curved arrow 2→3 */}
      <path d="M 188 65 Q 200 100 180 128" stroke="rgba(255,255,255,0.35)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <polygon points="178,133 183,125 173,128" fill="rgba(255,255,255,0.35)" />

      {/* ═══════════ Stage 3: Froglet (bottom-right) ═══════════ */}
      <g>
        {/* Froglet body — organic blob */}
        <path d="M 180 135
          Q 168 125 166 112
          Q 165 102 175 100
          Q 187 100 193 110
          Q 195 125 185 137 Z"
          fill="url(#r4_FrogletGrad)" opacity="0.95" filter="url(#r4_StageShadow)" />

        {/* Froglet belly highlight */}
        <path d="M 172 120 Q 180 133 187 128 Q 183 125 180 130 Q 176 125 172 120 Z"
          fill="rgba(74,222,128,0.5)" />

        {/* Spotted texture */}
        <g opacity="0.3" fill="rgba(0,0,0,0.5)">
          <circle cx="172" cy="115" r="1" />
          <circle cx="188" cy="118" r="1" />
          <circle cx="180" cy="128" r="0.8" />
        </g>

        {/* Eyes — detailed */}
        <circle cx="174" cy="108" r="3.2" fill="white" />
        <circle cx="186" cy="108" r="3.2" fill="white" />
        <circle cx="174" cy="108" r="1.8" fill="#1e3a5f" />
        <circle cx="186" cy="108" r="1.8" fill="#1e3a5f" />
        <circle cx="175.5" cy="107" r="0.8" fill="white" opacity="0.75" />
        <circle cx="187.5" cy="107" r="0.8" fill="white" opacity="0.75" />

        {/* Tiny front legs (growing) */}
        <path d="M 170 130 Q 165 140 162 148 Q 161 150 166 148 Q 170 140 172 130 Z"
          fill="#16A34A" opacity="0.7" />
        <path d="M 190 130 Q 195 140 198 148 Q 199 150 194 148 Q 190 140 188 130 Z"
          fill="#16A34A" opacity="0.7" />

        {/* Tiny tail remnants (stub) */}
        <path d="M 185 137 Q 190 140 188 145" fill="none" stroke="#16A34A" strokeWidth="1" opacity="0.5" />

        {/* Stage number */}
        <circle cx="208" cy="100" r="6.5" fill="rgba(255,255,255,0.9)" />
        <text x="208" y="104" fontSize="11" fill="#7C3AED" fontWeight="bold" textAnchor="middle">
          3
        </text>

        {/* Label */}
        <rect x="155" y="150" width="50" height="20" rx="8" fill="rgba(0,0,0,0.8)" stroke="rgba(74,222,128,0.6)" strokeWidth="1.5" />
        <text x="180" y="165" fontSize="9" fill="#86EFAC" fontWeight="bold" textAnchor="middle" fontFamily="system-ui">
          {l.froglet}
        </text>
      </g>

      {/* Curved arrow 3→4 */}
      <path d="M 166 130 Q 120 135 80 125" stroke="rgba(255,255,255,0.35)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <polygon points="75,124 82,128 81,118" fill="rgba(255,255,255,0.35)" />

      {/* ═══════════ Stage 4: Adult Frog (bottom-left) ═══════════ */}
      <g>
        {/* Adult frog body — full organic form */}
        <path d="M 70 135
          Q 55 125 52 110
          Q 50 100 60 98
          Q 80 98 88 108
          Q 90 125 78 138 Z"
          fill="url(#r4_FrogletGrad)" opacity="0.95" filter="url(#r4_StageShadow)" />

        {/* Frog belly highlight */}
        <path d="M 58 118 Q 70 135 82 128 Q 77 123 70 130 Q 63 123 58 118 Z"
          fill="rgba(74,222,128,0.5)" />

        {/* Spotted texture — more spots in adult */}
        <g opacity="0.3" fill="rgba(0,0,0,0.5)">
          <circle cx="58" cy="112" r="1.1" />
          <circle cx="82" cy="115" r="1" />
          <circle cx="70" cy="128" r="0.9" />
          <circle cx="65" cy="105" r="0.8" />
        </g>

        {/* Eyes — larger and more detailed */}
        <circle cx="62" cy="105" r="3.8" fill="white" />
        <circle cx="78" cy="105" r="3.8" fill="white" />
        <circle cx="62" cy="105" r="2.2" fill="#1e3a5f" />
        <circle cx="78" cy="105" r="2.2" fill="#1e3a5f" />
        <circle cx="62" cy="105" r="1.3" fill="#0c1829" />
        <circle cx="78" cy="105" r="1.3" fill="#0c1829" />
        <circle cx="64" cy="103" r="0.9" fill="white" opacity="0.8" />
        <circle cx="80" cy="103" r="0.9" fill="white" opacity="0.8" />
        <circle cx="61" cy="107" r="0.4" fill="white" opacity="0.4" />
        <circle cx="77" cy="107" r="0.4" fill="white" opacity="0.4" />

        {/* Front legs — fully developed */}
        <path d="M 56 132 Q 50 142 48 152 Q 47 154 52 152 Q 58 142 60 132 Z"
          fill="#16A34A" opacity="0.8" />
        <path d="M 84 132 Q 90 142 92 152 Q 93 154 88 152 Q 82 142 80 132 Z"
          fill="#16A34A" opacity="0.8" />

        {/* Back legs — muscular */}
        <path d="M 48 120 Q 38 132 38 145 Q 38 150 44 147 Q 52 135 55 125 Z"
          fill="#16A34A" opacity="0.75" />
        <path d="M 92 120 Q 102 132 102 145 Q 102 150 96 147 Q 88 135 85 125 Z"
          fill="#16A34A" opacity="0.75" />

        {/* Nostrils hint */}
        <circle cx="67" cy="110" r="0.6" fill="rgba(0,0,0,0.4)" />
        <circle cx="73" cy="110" r="0.6" fill="rgba(0,0,0,0.4)" />

        {/* Stage number */}
        <circle cx="52" cy="100" r="6.5" fill="rgba(255,255,255,0.9)" />
        <text x="52" y="104" fontSize="11" fill="#7C3AED" fontWeight="bold" textAnchor="middle">
          4
        </text>

        {/* Label */}
        <rect x="35" y="150" width="70" height="20" rx="8" fill="rgba(0,0,0,0.8)" stroke="rgba(74,222,128,0.6)" strokeWidth="1.5" />
        <text x="70" y="165" fontSize="9" fill="#86EFAC" fontWeight="bold" textAnchor="middle" fontFamily="system-ui">
          {l.adult}
        </text>
      </g>
    </svg>
  );
}

function SVG_R5(lang: string) {
  const labels = {
    en: {
      fish: "Fish",
      amphibian: "Amphibians",
      gills: "Gills ✓",
      scales: "Scales ✓",
      fins: "Fins ✓",
      skin: "Moist Skin ✓",
      legs: "4 Legs ✓",
      waterland: "Water+Land ✓",
    },
    de: {
      fish: "Fische",
      amphibian: "Amphibien",
      gills: "Kiemen ✓",
      scales: "Schuppen ✓",
      fins: "Flossen ✓",
      skin: "Feuchte Haut ✓",
      legs: "4 Beine ✓",
      waterland: "Wasser+Land ✓",
    },
    hu: {
      fish: "Halak",
      amphibian: "Kétéltűek",
      gills: "Kopoltyú ✓",
      scales: "Pikkelyek ✓",
      fins: "Úszók ✓",
      skin: "Nedves bőr ✓",
      legs: "4 láb ✓",
      waterland: "Víz+Szárazföld ✓",
    },
    ro: {
      fish: "Pești",
      amphibian: "Amfibieni",
      gills: "Branhii ✓",
      scales: "Solzi ✓",
      fins: "Aripioare ✓",
      skin: "Piele umedă ✓",
      legs: "4 picioare ✓",
      waterland: "Apă+Pământ ✓",
    },
  };
  const l = labels[lang as keyof typeof labels] || labels.en;

  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        {/* Blue-green-teal gradient background */}
        <linearGradient id="r5_Bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0369A1" />
          <stop offset="40%" stopColor="#1E40AF" />
          <stop offset="100%" stopColor="#047857" />
        </linearGradient>

        {/* Fish body gradient */}
        <linearGradient id="r5_FishBody" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#0e7490" />
        </linearGradient>
        {/* Fish belly */}
        <linearGradient id="r5_FishBelly" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#67e8f9" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.15" />
        </linearGradient>

        {/* Frog body gradient */}
        <linearGradient id="r5_FrogBody" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4ade80" />
          <stop offset="100%" stopColor="#16a34a" />
        </linearGradient>
        {/* Frog belly */}
        <linearGradient id="r5_FrogBelly" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#86efac" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#4ade80" stopOpacity="0.15" />
        </linearGradient>

        {/* Soft shadow filter */}
        <filter id="r5_Shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="2.5" stdDeviation="2" floodOpacity="0.3" />
        </filter>
      </defs>

      {/* Background */}
      <rect width="240" height="160" fill="url(#r5_Bg)" />

      {/* Vertical divider line — subtle gradient */}
      <line x1="120" y1="20" x2="120" y2="155" stroke="rgba(255,255,255,0.18)" strokeWidth="2" />

      {/* ═══════════ Left Column: Fish ═══════════ */}
      <g>
        {/* Card background — rounded with gradient border */}
        <rect x="12" y="20" width="105" height="130" rx="10" fill="rgba(6, 182, 212, 0.12)" stroke="rgba(6, 182, 212, 0.7)" strokeWidth="2.2" />

        {/* Header background bar */}
        <rect x="12" y="20" width="105" height="35" rx="10,10,0,0" fill="rgba(6, 182, 212, 0.35)" />

        {/* Header text */}
        <text x="64.5" y="47" fontSize="13" fill="white" fontWeight="bold" textAnchor="middle" fontFamily="system-ui">
          {l.fish}
        </text>

        {/* ── Beautiful fish illustration (organic) ── */}
        <g filter="url(#r5_Shadow)">
          {/* Fish body — organic bezier curves */}
          <path d="M 45 75
            Q 44 62 54 59
            Q 68 56 80 65
            Q 82 72 80 80
            Q 68 88 54 86
            Q 44 82 45 75 Z"
            fill="url(#r5_FishBody)" />

          {/* Fish belly highlight */}
          <path d="M 50 75 Q 58 84 74 80 Q 72 78 62 80 Q 55 78 50 75 Z"
            fill="url(#r5_FishBelly)" />

          {/* Scale pattern — 3 rows */}
          <g opacity="0.32" strokeWidth="0.5" fill="none" stroke="rgba(255,255,255,0.5)">
            <path d="M 58 68 Q 60 65 62 68" />
            <path d="M 68 66 Q 70 63 72 66" />
            <path d="M 60 76 Q 62 74 64 76" />
            <path d="M 70 77 Q 72 75 74 77" />
          </g>

          {/* Tail fin — forked with rays */}
          <path d="M 44 75 Q 30 66 20 62 Q 28 75 26 75 Q 28 85 20 88 Q 30 84 44 78 Z"
            fill="#0e7490" opacity="0.85" />

          {/* Dorsal fin — small */}
          <path d="M 65 59 Q 70 48 75 55 Q 72 62 65 65 Z"
            fill="#06b6d4" opacity="0.7" />

          {/* Eye — detailed iris */}
          <circle cx="50" cy="68" r="3.5" fill="#f0f9ff" />
          <circle cx="50" cy="68" r="2.4" fill="#1e3a5f" />
          <circle cx="50" cy="68" r="1.5" fill="#0c1829" />
          <circle cx="50" cy="68" r="2.2" fill="none" stroke="rgba(34,211,238,0.35)" strokeWidth="0.5" />
          <circle cx="51.5" cy="66.5" r="0.9" fill="white" opacity="0.8" />
          <circle cx="49" cy="69.5" r="0.3" fill="white" opacity="0.4" />
        </g>

        {/* Feature badges — vertically stacked */}
        <g fontSize="10" fill="white" fontWeight="600" fontFamily="system-ui">
          <text x="30" y="107">✓ {l.gills}</text>
          <text x="30" y="127">✓ {l.scales}</text>
          <text x="30" y="147">✓ {l.fins}</text>
        </g>
      </g>

      {/* ═══════════ Right Column: Amphibian ═══════════ */}
      <g>
        {/* Card background — rounded with gradient border */}
        <rect x="123" y="20" width="105" height="130" rx="10" fill="rgba(74, 222, 128, 0.12)" stroke="rgba(74, 222, 128, 0.7)" strokeWidth="2.2" />

        {/* Header background bar */}
        <rect x="123" y="20" width="105" height="35" rx="10,10,0,0" fill="rgba(74, 222, 128, 0.35)" />

        {/* Header text */}
        <text x="175.5" y="47" fontSize="13" fill="white" fontWeight="bold" textAnchor="middle" fontFamily="system-ui">
          {l.amphibian}
        </text>

        {/* ── Beautiful frog illustration (organic) ── */}
        <g filter="url(#r5_Shadow)">
          {/* Frog body — organic blob */}
          <path d="M 175 85
            Q 160 76 158 64
            Q 156 54 168 52
            Q 185 52 192 62
            Q 194 76 182 90 Z"
            fill="url(#r5_FrogBody)" />

          {/* Frog belly highlight */}
          <path d="M 165 75 Q 175 88 188 82 Q 183 78 175 85 Q 167 78 165 75 Z"
            fill="url(#r5_FrogBelly)" />

          {/* Spotted texture — darker spots */}
          <g opacity="0.3" fill="rgba(0,0,0,0.5)">
            <circle cx="165" cy="70" r="1" />
            <circle cx="185" cy="72" r="1" />
            <circle cx="175" cy="82" r="0.8" />
          </g>

          {/* Left eye — detailed with iris ring */}
          <circle cx="168" cy="63" r="3.8" fill="white" />
          <circle cx="168" cy="63" r="2.5" fill="#1e3a5f" />
          <circle cx="168" cy="63" r="1.6" fill="#0c1829" />
          <circle cx="168" cy="63" r="2.3" fill="none" stroke="rgba(34,211,238,0.3)" strokeWidth="0.5" />
          <circle cx="169.5" cy="61.5" r="0.9" fill="white" opacity="0.8" />
          <circle cx="167" cy="64.5" r="0.3" fill="white" opacity="0.4" />

          {/* Right eye — detailed with iris ring */}
          <circle cx="182" cy="63" r="3.8" fill="white" />
          <circle cx="182" cy="63" r="2.5" fill="#1e3a5f" />
          <circle cx="182" cy="63" r="1.6" fill="#0c1829" />
          <circle cx="182" cy="63" r="2.3" fill="none" stroke="rgba(34,211,238,0.3)" strokeWidth="0.5" />
          <circle cx="183.5" cy="61.5" r="0.9" fill="white" opacity="0.8" />
          <circle cx="181" cy="64.5" r="0.3" fill="white" opacity="0.4" />

          {/* Front legs — organic curved shapes */}
          <path d="M 162 84 Q 156 94 154 103 Q 153 105 158 103 Q 164 94 166 85 Z"
            fill="#16a34a" opacity="0.8" />
          <path d="M 188 84 Q 194 94 196 103 Q 197 105 192 103 Q 186 94 184 85 Z"
            fill="#16a34a" opacity="0.8" />

          {/* Back legs (hint) — stretched muscular shape */}
          <path d="M 156 80 Q 144 90 145 105" fill="none" stroke="#16a34a" strokeWidth="2" opacity="0.6" strokeLinecap="round" />
          <path d="M 194 80 Q 206 90 205 105" fill="none" stroke="#16a34a" strokeWidth="2" opacity="0.6" strokeLinecap="round" />
        </g>

        {/* Feature badges — vertically stacked */}
        <g fontSize="10" fill="white" fontWeight="600" fontFamily="system-ui">
          <text x="141" y="107">✓ {l.skin}</text>
          <text x="141" y="127">✓ {l.legs}</text>
          <text x="141" y="147">✓ {l.waterland}</text>
        </g>
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

  const meta = ROUND_META(langCode)[round];

  return (
    <div className="min-h-screen bg-[#060614] text-white px-4 py-6 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Close button */}
      <button
        onClick={() => onDone?.(scoreRef.current, totalRef.current)}
        className="absolute top-4 left-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-colors text-lg font-bold z-10"
      >✕</button>

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

          {phase === "question" && round !== 3 && (
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
