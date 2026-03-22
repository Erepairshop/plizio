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
        <linearGradient id="waterGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0EA5E9" />
          <stop offset="50%" stopColor="#0284C7" />
          <stop offset="100%" stopColor="#0369A1" />
        </linearGradient>
        <linearGradient id="landGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4ADE80" />
          <stop offset="100%" stopColor="#22C55E" />
        </linearGradient>
        <linearGradient id="skyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#87CEEB" />
          <stop offset="100%" stopColor="#E0F4FF" />
        </linearGradient>
        <filter id="frogShadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="3" stdDeviation="3" floodOpacity="0.3" />
        </filter>
      </defs>

      {/* Water (left side) with sky */}
      <rect x="0" y="0" width="120" height="160" fill="url(#waterGrad2)" />

      {/* Land (right side) */}
      <rect x="120" y="0" width="120" height="160" fill="url(#landGrad2)" />

      {/* Sky reflection on water surface */}
      <rect x="0" y="0" width="120" height="35" fill="url(#skyGrad)" opacity="0.2" />

      {/* Water wave details (more prominent) */}
      <path
        d="M 0 40 Q 15 35 30 40 T 60 40 T 90 40 T 120 40"
        stroke="rgba(255,255,255,0.3)"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M 0 58 Q 15 52 30 58 T 60 58 T 90 58 T 120 58"
        stroke="rgba(255,255,255,0.22)"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M 0 75 Q 15 70 30 75 T 60 75 T 90 75 T 120 75"
        stroke="rgba(255,255,255,0.15)"
        strokeWidth="1.2"
        fill="none"
      />

      {/* Bubbles in water (varied sizes) */}
      <circle cx="20" cy="95" r="2.5" fill="rgba(255, 255, 255, 0.3)" />
      <circle cx="50" cy="128" r="2" fill="rgba(255, 255, 255, 0.25)" />
      <circle cx="85" cy="115" r="1.5" fill="rgba(255, 255, 255, 0.2)" />
      <circle cx="35" cy="140" r="1.2" fill="rgba(255, 255, 255, 0.15)" />
      <circle cx="105" cy="105" r="1.8" fill="rgba(255, 255, 255, 0.18)" />

      {/* Grass on land side (improved density and detail) */}
      <g opacity="0.75">
        <path d="M 125 158 Q 123 145 132 152" stroke="#059669" strokeWidth="1.8" fill="none" />
        <path d="M 138 158 Q 136 140 146 150" stroke="#059669" strokeWidth="1.8" fill="none" />
        <path d="M 151 158 Q 149 147 160 152" stroke="#059669" strokeWidth="1.8" fill="none" />
        <path d="M 164 158 Q 162 142 174 150" stroke="#059669" strokeWidth="1.8" fill="none" />
        <path d="M 177 158 Q 175 145 187 152" stroke="#059669" strokeWidth="1.8" fill="none" />
        <path d="M 190 158 Q 188 147 200 152" stroke="#059669" strokeWidth="1.8" fill="none" />
        <path d="M 203 158 Q 201 142 213 150" stroke="#059669" strokeWidth="1.8" fill="none" />
        <path d="M 216 158 Q 214 145 224 150" stroke="#059669" strokeWidth="1.8" fill="none" />
      </g>

      {/* Frog body (main) - straddling both sides, improved shape */}
      <ellipse cx="120" cy="108" rx="26" ry="22" fill="#3FD850" filter="url(#frogShadow)" />

      {/* Frog belly highlight (subtle gradient effect) */}
      <ellipse cx="120" cy="112" rx="22" ry="16" fill="#5EEE6F" opacity="0.4" />

      {/* Frog body texture (pattern) */}
      <circle cx="105" cy="100" r="1.5" fill="rgba(0, 0, 0, 0.1)" opacity="0.4" />
      <circle cx="120" cy="98" r="1.5" fill="rgba(0, 0, 0, 0.1)" opacity="0.4" />
      <circle cx="135" cy="100" r="1.5" fill="rgba(0, 0, 0, 0.1)" opacity="0.4" />

      {/* Frog head (left side - water, improved shape) */}
      <circle cx="104" cy="78" r="15" fill="#3FD850" filter="url(#frogShadow)" />

      {/* Frog head (right side - land, improved shape) */}
      <circle cx="136" cy="78" r="15" fill="#3FD850" filter="url(#frogShadow)" />

      {/* Eyes (large, bulging - improved anatomy) */}
      <g filter="url(#frogShadow)">
        <circle cx="101" cy="70" r="4.5" fill="white" />
        <circle cx="139" cy="70" r="4.5" fill="white" />
        <circle cx="101" cy="70" r="2.5" fill="black" />
        <circle cx="139" cy="70" r="2.5" fill="black" />
        <circle cx="102.5" cy="68" r="1.2" fill="white" opacity="0.8" />
        <circle cx="140.5" cy="68" r="1.2" fill="white" opacity="0.8" />
      </g>

      {/* Mouth (friendly smile) */}
      <path d="M 118 90 Q 120 94 130 92" stroke="rgba(0, 0, 0, 0.35)" strokeWidth="1.5" fill="none" strokeLinecap="round" />

      {/* Front legs (water side - left, improved) */}
      <ellipse cx="94" cy="128" rx="9" ry="11" fill="#3FD850" filter="url(#frogShadow)" />
      <ellipse cx="83" cy="143" rx="6" ry="7" fill="#2EBE40" />
      <circle cx="83" cy="150" r="2" fill="#1FA832" opacity="0.5" />

      {/* Front legs (land side - right, improved) */}
      <ellipse cx="146" cy="128" rx="9" ry="11" fill="#3FD850" filter="url(#frogShadow)" />
      <ellipse cx="157" cy="143" rx="6" ry="7" fill="#2EBE40" />
      <circle cx="157" cy="150" r="2" fill="#1FA832" opacity="0.5" />

      {/* Back legs (stretched out, improved) */}
      <ellipse cx="68" cy="118" rx="11" ry="8" fill="#2EBE40" filter="url(#frogShadow)" transform="rotate(-15 68 118)" />
      <ellipse cx="172" cy="118" rx="11" ry="8" fill="#2EBE40" filter="url(#frogShadow)" transform="rotate(15 172 118)" />

      {/* Label backgrounds with improved styling */}

      {/* Water label */}
      <rect x="18" y="12" width="64" height="28" rx="6" fill="rgba(0, 0, 0, 0.65)" stroke="#87CEEB" strokeWidth="2" />
      <text x="50" y="35" fontSize="13" fill="#FFD700" fontWeight="bold" textAnchor="middle">
        {l.water}
      </text>

      {/* Land label */}
      <rect x="160" y="12" width="64" height="28" rx="6" fill="rgba(0, 0, 0, 0.65)" stroke="#4ADE80" strokeWidth="2" />
      <text x="192" y="35" fontSize="13" fill="#FFD700" fontWeight="bold" textAnchor="middle">
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
        <linearGradient id="r3Bg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0F2F4F" />
          <stop offset="100%" stopColor="#061B2E" />
        </linearGradient>
        <filter id="r3Shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.25" />
        </filter>
      </defs>
      <rect width="240" height="160" fill="url(#r3Bg)" />

      {/* Panel 1: Fish + Gills */}
      <g>
        <rect x="8" y="15" width="70" height="132" rx="6" fill="rgba(6, 182, 212, 0.12)" stroke="rgba(6, 182, 212, 0.5)" strokeWidth="1.5" />

        {/* Fish illustration */}
        <ellipse cx="43" cy="50" rx="20" ry="15" fill="#06B6D4" filter="url(#r3Shadow)" />
        <ellipse cx="43" cy="54" rx="18" ry="11" fill="#22D3EE" opacity="0.3" />
        <path d="M 23 50 L 5 40 L 10 50 L 5 60 Z" fill="#0891B2" opacity="0.85" />
        <rect x="24" y="45" width="7" height="10" fill="#FF6B35" opacity="0.7" rx="1" />
        <line x1="24.5" y1="45" x2="24.5" y2="55" stroke="#FF6B35" strokeWidth="0.8" opacity="0.4" />
        <line x1="27" y1="45" x2="27" y2="55" stroke="#FF6B35" strokeWidth="0.8" opacity="0.4" />
        <line x1="29.5" y1="45" x2="29.5" y2="55" stroke="#FF6B35" strokeWidth="0.8" opacity="0.4" />
        <circle cx="17" cy="47" r="2.5" fill="white" />
        <circle cx="18" cy="47" r="1.2" fill="black" />

        {/* Header */}
        <text x="43" y="85" fontSize="10" fill="white" fontWeight="bold" textAnchor="middle">
          {l.fish}
        </text>

        {/* Breathing label with background */}
        <rect x="18" y="98" width="50" height="16" rx="3" fill="rgba(0, 0, 0, 0.4)" />
        <text x="43" y="110" fontSize="9" fill="#4ADE80" fontWeight="bold" textAnchor="middle">
          {l.gills}
        </text>
      </g>

      {/* Panel 2: Tadpole + Gills */}
      <g>
        <rect x="85" y="15" width="70" height="132" rx="6" fill="rgba(251, 191, 36, 0.12)" stroke="rgba(251, 191, 36, 0.5)" strokeWidth="1.5" />

        {/* Tadpole illustration */}
        <ellipse cx="120" cy="50" rx="17" ry="13" fill="#FBBF24" filter="url(#r3Shadow)" />
        <ellipse cx="120" cy="53" rx="15" ry="10" fill="#FCD34D" opacity="0.3" />
        <path d="M 103 50 L 82 40 L 87 50 L 82 60 Z" fill="#F59E0B" opacity="0.85" />
        <rect x="104" y="45" width="6" height="9" fill="#FF6B35" opacity="0.7" rx="1" />
        <line x1="104.5" y1="45" x2="104.5" y2="54" stroke="#FF6B35" strokeWidth="0.8" opacity="0.4" />
        <line x1="107" y1="45" x2="107" y2="54" stroke="#FF6B35" strokeWidth="0.8" opacity="0.4" />
        <line x1="109.5" y1="45" x2="109.5" y2="54" stroke="#FF6B35" strokeWidth="0.8" opacity="0.4" />
        <circle cx="97" cy="47" r="2.5" fill="white" />
        <circle cx="98" cy="47" r="1.2" fill="black" />

        {/* Header */}
        <text x="120" y="85" fontSize="10" fill="white" fontWeight="bold" textAnchor="middle">
          {l.tadpole}
        </text>

        {/* Breathing label with background */}
        <rect x="95" y="98" width="50" height="16" rx="3" fill="rgba(0, 0, 0, 0.4)" />
        <text x="120" y="110" fontSize="9" fill="#4ADE80" fontWeight="bold" textAnchor="middle">
          {l.gills}
        </text>
      </g>

      {/* Panel 3: Frog + Lungs + Skin */}
      <g>
        <rect x="162" y="15" width="70" height="132" rx="6" fill="rgba(74, 222, 128, 0.12)" stroke="rgba(74, 222, 128, 0.5)" strokeWidth="1.5" />

        {/* Frog illustration */}
        <ellipse cx="197" cy="50" rx="16" ry="16" fill="#4ADE80" filter="url(#r3Shadow)" />
        <ellipse cx="197" cy="54" rx="14" ry="12" fill="#5EEE6F" opacity="0.3" />

        {/* Eyes */}
        <circle cx="191" cy="45" r="2.5" fill="white" />
        <circle cx="203" cy="45" r="2.5" fill="white" />
        <circle cx="191" cy="45" r="1.2" fill="black" />
        <circle cx="203" cy="45" r="1.2" fill="black" />

        {/* Legs */}
        <ellipse cx="180" cy="62" rx="4" ry="6" fill="#4ADE80" />
        <ellipse cx="214" cy="62" rx="4" ry="6" fill="#4ADE80" />

        {/* Header */}
        <text x="197" y="85" fontSize="10" fill="white" fontWeight="bold" textAnchor="middle">
          {l.frog}
        </text>

        {/* Breathing label with background */}
        <rect x="172" y="98" width="50" height="16" rx="3" fill="rgba(0, 0, 0, 0.4)" />
        <text x="197" y="110" fontSize="8" fill="#4ADE80" fontWeight="bold" textAnchor="middle">
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
        <linearGradient id="lifecycleGrad2" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="50%" stopColor="#6366F1" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>
        <filter id="stageShadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.3" />
        </filter>
        <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <polygon points="0 0, 10 3, 0 6" fill="rgba(255,255,255,0.6)" />
        </marker>
      </defs>
      <rect width="240" height="160" fill="url(#lifecycleGrad2)" />

      {/* Circular arc path (subtle) */}
      <circle cx="120" cy="95" r="50" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="2" strokeDasharray="3,3" />

      {/* Title arc text */}
      <text x="120" y="20" fontSize="11" fill="rgba(255,255,255,0.4)" fontWeight="bold" textAnchor="middle">
        Metamorphosis 🔄
      </text>

      {/* Stage 1: Egg (left-top) */}
      <g>
        <ellipse cx="70" cy="50" rx="12" ry="15" fill="#F59E0B" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" filter="url(#stageShadow)" />
        <ellipse cx="70" cy="52" rx="10" ry="12" fill="#FCD34D" opacity="0.3" />

        {/* Stage counter */}
        <circle cx="88" cy="40" r="6" fill="#FFF9E6" />
        <text x="88" y="44" fontSize="10" fill="#7C3AED" fontWeight="bold" textAnchor="middle">
          1
        </text>

        {/* Label background */}
        <rect x="48" y="74" width="44" height="18" rx="3" fill="rgba(0, 0, 0, 0.5)" />
        <text x="70" y="86" fontSize="9" fill="white" fontWeight="bold" textAnchor="middle">
          {l.egg}
        </text>
      </g>

      {/* Arrow 1→2 */}
      <path d="M 82 55 Q 105 35 148 45" stroke="rgba(255,255,255,0.5)" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />

      {/* Stage 2: Tadpole (right-top) */}
      <g>
        <ellipse cx="170" cy="50" rx="14" ry="12" fill="#FBBF24" filter="url(#stageShadow)" />
        <ellipse cx="170" cy="53" rx="12" ry="10" fill="#FCD34D" opacity="0.3" />
        <path d="M 156 50 L 133 38 L 140 50 L 133 62 Z" fill="#F59E0B" opacity="0.9" />

        {/* Stage counter */}
        <circle cx="188" cy="40" r="6" fill="#FFF9E6" />
        <text x="188" y="44" fontSize="10" fill="#7C3AED" fontWeight="bold" textAnchor="middle">
          2
        </text>

        {/* Label background */}
        <rect x="148" y="74" width="44" height="18" rx="3" fill="rgba(0, 0, 0, 0.5)" />
        <text x="170" y="86" fontSize="9" fill="white" fontWeight="bold" textAnchor="middle">
          {l.tadpole}
        </text>
      </g>

      {/* Arrow 2→3 */}
      <path d="M 165 62 Q 160 90 150 130" stroke="rgba(255,255,255,0.5)" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />

      {/* Stage 3: Froglet (right-bottom) */}
      <g>
        <ellipse cx="170" cy="135" rx="13" ry="14" fill="#4ADE80" filter="url(#stageShadow)" />
        <ellipse cx="170" cy="139" rx="11" ry="11" fill="#5EEE6F" opacity="0.3" />

        {/* Eyes */}
        <circle cx="164" cy="129" r="2.5" fill="white" />
        <circle cx="176" cy="129" r="2.5" fill="white" />
        <circle cx="164" cy="129" r="1.2" fill="black" />
        <circle cx="176" cy="129" r="1.2" fill="black" />

        {/* Legs (growing) */}
        <ellipse cx="155" cy="148" rx="4" ry="7" fill="#3FD850" />
        <ellipse cx="185" cy="148" rx="4" ry="7" fill="#3FD850" />

        {/* Stage counter */}
        <circle cx="188" cy="125" r="6" fill="#FFF9E6" />
        <text x="188" y="129" fontSize="10" fill="#7C3AED" fontWeight="bold" textAnchor="middle">
          3
        </text>

        {/* Label background */}
        <rect x="148" y="150" width="44" height="18" rx="3" fill="rgba(0, 0, 0, 0.5)" />
        <text x="170" y="162" fontSize="9" fill="white" fontWeight="bold" textAnchor="middle">
          {l.froglet}
        </text>
      </g>

      {/* Arrow 3→4 */}
      <path d="M 157 135 Q 120 130 92 128" stroke="rgba(255,255,255,0.5)" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />

      {/* Stage 4: Adult Frog (left-bottom) */}
      <g>
        <ellipse cx="70" cy="135" rx="12" ry="14" fill="#4ADE80" filter="url(#stageShadow)" />
        <ellipse cx="70" cy="139" rx="10" ry="11" fill="#5EEE6F" opacity="0.3" />

        {/* Eyes (larger in adult) */}
        <circle cx="64" cy="129" r="2.5" fill="white" />
        <circle cx="76" cy="129" r="2.5" fill="white" />
        <circle cx="64" cy="129" r="1.2" fill="black" />
        <circle cx="76" cy="129" r="1.2" fill="black" />

        {/* Legs (fully developed) */}
        <ellipse cx="55" cy="147" rx="5" ry="7" fill="#3FD850" />
        <ellipse cx="85" cy="147" rx="5" ry="7" fill="#3FD850" />

        {/* Stage counter */}
        <circle cx="52" cy="125" r="6" fill="#FFF9E6" />
        <text x="52" y="129" fontSize="10" fill="#7C3AED" fontWeight="bold" textAnchor="middle">
          4
        </text>

        {/* Label background */}
        <rect x="48" y="150" width="44" height="18" rx="3" fill="rgba(0, 0, 0, 0.5)" />
        <text x="70" y="162" fontSize="9" fill="white" fontWeight="bold" textAnchor="middle">
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
        <linearGradient id="r5Bg2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0369A1" />
          <stop offset="50%" stopColor="#1E40AF" />
          <stop offset="100%" stopColor="#047857" />
        </linearGradient>
        <filter id="r5Shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.25" />
        </filter>
      </defs>
      <rect width="240" height="160" fill="url(#r5Bg2)" />

      {/* Divider line */}
      <line x1="120" y1="25" x2="120" y2="150" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />

      {/* Left column: Fish */}
      <g>
        <rect x="15" y="25" width="100" height="120" rx="5" fill="rgba(6, 182, 212, 0.15)" stroke="rgba(6, 182, 212, 0.6)" strokeWidth="2" />

        {/* Header background */}
        <rect x="15" y="25" width="100" height="30" rx="5,5,0,0" fill="rgba(6, 182, 212, 0.3)" />

        {/* Header */}
        <text x="65" y="48" fontSize="12" fill="white" fontWeight="bold" textAnchor="middle">
          {l.fish}
        </text>

        {/* Fish icon */}
        <ellipse cx="65" cy="70" rx="22" ry="17" fill="#06B6D4" filter="url(#r5Shadow)" />
        <ellipse cx="65" cy="74" rx="19" ry="13" fill="#22D3EE" opacity="0.3" />
        <path d="M 43 70 L 20 58 L 27 70 L 20 82 Z" fill="#0891B2" opacity="0.9" />
        <circle cx="34" cy="64" r="2.5" fill="white" />
        <circle cx="35" cy="64" r="1.2" fill="black" />

        {/* Feature list (checkmarks as bullets) */}
        <g fontSize="10" fill="white" fontWeight="bold">
          <text x="35" y="108">✓ {l.gills}</text>
          <text x="35" y="125">✓ {l.scales}</text>
          <text x="35" y="142">✓ {l.fins}</text>
        </g>
      </g>

      {/* Right column: Amphibian */}
      <g>
        <rect x="125" y="25" width="100" height="120" rx="5" fill="rgba(74, 222, 128, 0.15)" stroke="rgba(74, 222, 128, 0.6)" strokeWidth="2" />

        {/* Header background */}
        <rect x="125" y="25" width="100" height="30" rx="5,5,0,0" fill="rgba(74, 222, 128, 0.3)" />

        {/* Header */}
        <text x="175" y="48" fontSize="12" fill="white" fontWeight="bold" textAnchor="middle">
          {l.amphibian}
        </text>

        {/* Frog icon */}
        <ellipse cx="175" cy="70" rx="18" ry="16" fill="#4ADE80" filter="url(#r5Shadow)" />
        <ellipse cx="175" cy="74" rx="16" ry="13" fill="#5EEE6F" opacity="0.3" />

        {/* Eyes */}
        <circle cx="169" cy="64" r="3" fill="white" />
        <circle cx="181" cy="64" r="3" fill="white" />
        <circle cx="169" cy="64" r="1.4" fill="black" />
        <circle cx="181" cy="64" r="1.4" fill="black" />

        {/* Legs */}
        <ellipse cx="158" cy="80" rx="4" ry="7" fill="#3FD850" />
        <ellipse cx="192" cy="80" rx="4" ry="7" fill="#3FD850" />

        {/* Feature list (checkmarks as bullets) */}
        <g fontSize="10" fill="white" fontWeight="bold">
          <text x="145" y="108">✓ {l.skin}</text>
          <text x="145" y="125">✓ {l.legs}</text>
          <text x="145" y="142">✓ {l.waterland}</text>
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
