"use client";
// BodySystemExplorer — Island i7: Body Systems (Körpersysteme)
// Teaching pattern: R1-R4 = info + SVG, R5 = MCQ quiz

import ExplorerEngine from "./ExplorerEngine";
import type { ExplorerDef, MCQQuestion } from "./ExplorerEngine";
import React from "react";

// ─────────────────────────────────────────────────────────────────────────────
// All multilingual labels (en/de/hu/ro)
// ─────────────────────────────────────────────────────────────────────────────

const LABELS: ExplorerDef["labels"] = {
  en: {
    // Round 1: Circulatory System
    r1_title: "Circulatory System ❤️",
    r1_text: "The heart pumps blood through the body, delivering oxygen and removing waste. Arteries carry oxygen-rich blood away from the heart, while veins return oxygen-poor blood back.",
    r1_b1: "Heart: 4 chambers pump blood throughout the body",
    r1_b2: "Arteries: carry oxygen-rich blood (shown in red)",
    r1_b3: "Veins: carry oxygen-poor blood back to heart (shown in blue)",

    // Round 2: Respiratory System
    r2_title: "Respiratory System 🫁",
    r2_text: "You breathe in oxygen-rich air through the nose and mouth. The lungs absorb oxygen into the blood and release carbon dioxide, which you breathe out.",
    r2_b1: "Nose & mouth: filter and warm air before it enters",
    r2_b2: "Trachea: windpipe carries air to the lungs",
    r2_b3: "Lungs & alveoli: where oxygen and CO₂ exchange happens",

    // Round 3: Digestive System
    r3_title: "Digestive System 🫙",
    r3_text: "Your digestive system breaks down food into nutrients your body can use. The food travels from mouth to stomach to intestines, where nutrients are absorbed.",
    r3_b1: "Mouth: breaks down food with chewing and saliva",
    r3_b2: "Stomach: churns food and mixes with stomach acid",
    r3_b3: "Small intestines: absorb nutrients into the bloodstream",

    // Round 4: Excretory System
    r4_title: "Excretory System 🚽",
    r4_text: "The excretory system removes waste from the body. Kidneys filter the blood to remove waste as urine, and the skin removes waste as sweat.",
    r4_b1: "Kidneys: filter waste from the blood into urine",
    r4_b2: "Bladder: stores urine until it's ready to leave",
    r4_b3: "Skin: releases waste through sweat glands",

    // Round 5: Quiz questions
    q1: "Which system pumps blood throughout the body?",
    q1_a: "Circulatory system",
    q1_b: "Respiratory system",
    q1_c: "Digestive system",

    q2: "Where does oxygen enter the blood from the air?",
    q2_a: "In the lungs",
    q2_b: "In the stomach",
    q2_c: "In the heart",

    q3: "Which organ breaks down food with acid?",
    q3_a: "Stomach",
    q3_b: "Liver",
    q3_c: "Pancreas",

    q4: "What do the kidneys filter from the blood?",
    q4_a: "Waste (urine)",
    q4_b: "Oxygen",
    q4_c: "Glucose",

    q5: "Which system removes waste through sweat?",
    q5_a: "Excretory system",
    q5_b: "Immune system",
    q5_c: "Nervous system",
  },

  de: {
    // Round 1: Kreislaufsystem
    r1_title: "Kreislaufsystem ❤️",
    r1_text: "Das Herz pumpt Blut durch den Körper und transportiert Sauerstoff. Arterien tragen sauerstoffreiches Blut vom Herzen weg, Venen bringen sauerstoffarmes Blut zurück.",
    r1_b1: "Herz: 4 Kammern pumpen Blut durch den ganzen Körper",
    r1_b2: "Arterien: transportieren sauerstoffreiches Blut (rot dargestellt)",
    r1_b3: "Venen: bringen sauerstoffarmes Blut zurück zum Herzen (blau dargestellt)",

    // Round 2: Atmungssystem
    r2_title: "Atmungssystem 🫁",
    r2_text: "Du atmest sauerstoffreiche Luft durch Nase und Mund ein. Die Lungen nehmen Sauerstoff ins Blut auf und geben Kohlendioxid ab, das du ausatmest.",
    r2_b1: "Nase & Mund: filtern und wärmen die Luft",
    r2_b2: "Luftröhre: leitet Luft zu den Lungen",
    r2_b3: "Lungen & Alveolen: Austausch von Sauerstoff und CO₂",

    // Round 3: Verdauungssystem
    r3_title: "Verdauungssystem 🫙",
    r3_text: "Dein Verdauungssystem zerlegt Nahrung in Nährstoffe, die dein Körper nutzen kann. Das Essen reist vom Mund in den Magen und die Darmschlingen.",
    r3_b1: "Mund: zerlegt Nahrung durch Kauen und Speichel",
    r3_b2: "Magen: zerquetscht Nahrung und mischt mit Magensäure",
    r3_b3: "Dünndarm: nimmt Nährstoffe ins Blut auf",

    // Round 4: Ausscheidungssystem
    r4_title: "Ausscheidungssystem 🚽",
    r4_text: "Das Ausscheidungssystem entfernt Abfallstoffe aus dem Körper. Nieren filtern das Blut, um Urin zu bilden, und die Haut entfernt Schweiß.",
    r4_b1: "Nieren: filtern Abfallstoffe aus dem Blut zu Urin",
    r4_b2: "Blase: speichert Urin bis zum Ausscheiden",
    r4_b3: "Haut: gibt Abfallstoffe durch Schweißdrüsen ab",

    // Round 5: Quiz questions
    q1: "Welches System pumpt Blut durch den Körper?",
    q1_a: "Kreislaufsystem",
    q1_b: "Atmungssystem",
    q1_c: "Verdauungssystem",

    q2: "Wo gelangt Sauerstoff aus der Luft ins Blut?",
    q2_a: "In den Lungen",
    q2_b: "Im Magen",
    q2_c: "Im Herzen",

    q3: "Welches Organ baut Nahrung mit Säure ab?",
    q3_a: "Magen",
    q3_b: "Leber",
    q3_c: "Bauchspeicheldrüse",

    q4: "Welche Abfallstoffe filtern die Nieren aus dem Blut?",
    q4_a: "Urin",
    q4_b: "Sauerstoff",
    q4_c: "Glukose",

    q5: "Welches System entfernt Abfallstoffe durch Schweiß?",
    q5_a: "Ausscheidungssystem",
    q5_b: "Immunsystem",
    q5_c: "Nervensystem",
  },

  hu: {
    // Round 1: Keringési rendszer
    r1_title: "Keringési rendszer ❤️",
    r1_text: "A szív vért pumpál végig a testen, oxigént és tápanyagokat szállít. Az artériák oxigénben gazdag vért szállítanak el a szívtől, a vénák oxigénben szegény vért hoznak vissza.",
    r1_b1: "Szív: 4 kamra pumpálja a vért az egész testen",
    r1_b2: "Artériák: oxigénben gazdag vér szállítása (piros)",
    r1_b3: "Vénák: oxigénben szegény vér visszaszállítása (kék)",

    // Round 2: Légzőrendszer
    r2_title: "Légzőrendszer 🫁",
    r2_text: "Oxigénben gazdag levegőt szívasz be az orron és szájra keresztül. A tüdő felveszi az oxigént a vérbe és kibocsátja a szén-dioxidot.",
    r2_b1: "Orr & száj: szűri és melegíti a levegőt",
    r2_b2: "Légcső: levegőt szállít a tüdőbe",
    r2_b3: "Tüdő & alveoluszok: oxigén és CO₂ cseréje",

    // Round 3: Emésztőrendszer
    r3_title: "Emésztőrendszer 🫙",
    r3_text: "Az emésztőrendszer az ételt olyan tápanyagokra bontja, amelyeket a tested használni tud. Az étel szájon keresztül a gyomorba, majd a belekbe jut.",
    r3_b1: "Száj: étel ledarálása rágcsipen és nyállal",
    r3_b2: "Gyomor: étel keverése gyomorsavval",
    r3_b3: "Vékonybél: tápanyagok felszívódása a vérbe",

    // Round 4: Kiválasztási rendszer
    r4_title: "Kiválasztási rendszer 🚽",
    r4_text: "A kiválasztási rendszer eltávolítja az hulladékot a testből. A vesék szűrik ki az elhulladékodott anyagokat vizeletté, a bőr pedig izzadságot bocsát ki.",
    r4_b1: "Vesék: hulladék szűrése vizeletté",
    r4_b2: "Hólyag: vizeletet tárol az ürítésig",
    r4_b3: "Bőr: hulladék eltávolítása izzadság útján",

    // Round 5: Quiz questions
    q1: "Melyik rendszer pumpálja a vért a testen?",
    q1_a: "Keringési rendszer",
    q1_b: "Légzőrendszer",
    q1_c: "Emésztőrendszer",

    q2: "Hol jut az oxigén a levegőből a vérbe?",
    q2_a: "A tüdőben",
    q2_b: "A gyomorban",
    q2_c: "A szívben",

    q3: "Melyik szerv bont le ételt savval?",
    q3_a: "Gyomor",
    q3_b: "Máj",
    q3_c: "Hasnyálmirigy",

    q4: "Mit szűrnek ki a vesék a vérből?",
    q4_a: "Vizeletet",
    q4_b: "Oxigént",
    q4_c: "Glükózt",

    q5: "Melyik rendszer távolít el hulladékot izzadság útján?",
    q5_a: "Kiválasztási rendszer",
    q5_b: "Immunrendszer",
    q5_c: "Idegrendszer",
  },

  ro: {
    // Round 1: Sistemul circulator
    r1_title: "Sistemul circulator ❤️",
    r1_text: "Inima pompează sânge prin corp, transportând oxigen și nutrienți. Arterele transportă sânge bogat în oxigen departe de inimă, venele readuc sângele sărac în oxigen.",
    r1_b1: "Inima: 4 camere pompează sânge prin tot corpul",
    r1_b2: "Arterele: transportă sânge bogat în oxigen (roșu)",
    r1_b3: "Venele: readuc sânge sărac în oxigen la inimă (albastru)",

    // Round 2: Sistemul respirator
    r2_title: "Sistemul respirator 🫁",
    r2_text: "Inspiri aer bogat în oxigen prin nas și gură. Plămânii absorb oxigenul în sânge și eliberează dioxidul de carbon, pe care îl expiri.",
    r2_b1: "Nas & gură: filtrează și încălzesc aerul",
    r2_b2: "Traheea: duce aerul la plămâni",
    r2_b3: "Plămâni & alveolele: schimb de oxigen și CO₂",

    // Round 3: Sistemul digestiv
    r3_title: "Sistemul digestiv 🫙",
    r3_text: "Sistemul tău digestiv descompune mâncarea în nutrienți pe care corpul tău îi poate folosi. Mâncarea trece din gură în stomac și apoi în intestine.",
    r3_b1: "Gură: descompune mâncarea prin mestecarea și salivă",
    r3_b2: "Stomac: sfărâmă mâncarea cu acid gastric",
    r3_b3: "Intestinul subțire: absorbe nutrienți în sânge",

    // Round 4: Sistemul excretor
    r4_title: "Sistemul excretor 🚽",
    r4_text: "Sistemul excretor elimină deșeurile din corp. Rinichii filtrează deșeurile din sânge ca urină, iar pielea elimină deșeuri prin transpirație.",
    r4_b1: "Rinichi: filtrează deșeuri din sânge în urină",
    r4_b2: "Vezica: depozitează urină până la eliminare",
    r4_b3: "Piele: elimină deșeuri prin glandele de transpirație",

    // Round 5: Quiz questions
    q1: "Ce sistem pompează sânge prin corp?",
    q1_a: "Sistemul circulator",
    q1_b: "Sistemul respirator",
    q1_c: "Sistemul digestiv",

    q2: "Unde intră oxigenul din aer în sânge?",
    q2_a: "În plămâni",
    q2_b: "În stomac",
    q2_c: "În inimă",

    q3: "Ce organ descompune mâncarea cu acid?",
    q3_a: "Stomac",
    q3_b: "Ficat",
    q3_c: "Pancreas",

    q4: "Ce deșeuri filtrează rinichii din sânge?",
    q4_a: "Urină",
    q4_b: "Oxigen",
    q4_c: "Glucoză",

    q5: "Ce sistem elimină deșeuri prin transpirație?",
    q5_a: "Sistemul excretor",
    q5_b: "Sistemul imunitar",
    q5_c: "Sistemul nervos",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// SVG Components (R1-R4 teaching visuals)
// ─────────────────────────────────────────────────────────────────────────────

function SvgRound1(lang: string): React.ReactNode {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <radialGradient id="bs_r1_bg" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stopColor="#1a0a14" />
          <stop offset="100%" stopColor="#0a0a14" />
        </radialGradient>
        <radialGradient id="bs_r1_heart" cx="45%" cy="35%" r="55%">
          <stop offset="0%" stopColor="#FF5252" />
          <stop offset="40%" stopColor="#D32F2F" />
          <stop offset="80%" stopColor="#B71C1C" />
          <stop offset="100%" stopColor="#7f0000" />
        </radialGradient>
        <linearGradient id="bs_r1_artery" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FF5252" />
          <stop offset="50%" stopColor="#EF5350" />
          <stop offset="100%" stopColor="#E53935" />
        </linearGradient>
        <linearGradient id="bs_r1_vein" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#5C6BC0" />
          <stop offset="50%" stopColor="#3F51B5" />
          <stop offset="100%" stopColor="#283593" />
        </linearGradient>
        <radialGradient id="bs_r1_aorta" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FF8A80" />
          <stop offset="100%" stopColor="#D32F2F" />
        </radialGradient>
        <filter id="bs_r1_glow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="bs_r1_pulse">
          <feGaussianBlur stdDeviation="4" />
        </filter>
      </defs>

      <rect width="240" height="160" fill="url(#bs_r1_bg)" />

      {/* Heart glow */}
      <ellipse cx="120" cy="68" rx="30" ry="28" fill="#FF5252" opacity="0.06" filter="url(#bs_r1_pulse)" />

      {/* ── HEART — anatomical shape with 4 chambers ── */}
      <g filter="url(#bs_r1_glow)">
        {/* Heart outer shape */}
        <path d="M 120,40 Q 108,30 100,38 Q 92,48 98,60 L 120,88 L 142,60 Q 148,48 140,38 Q 132,30 120,40 Z" fill="url(#bs_r1_heart)" />
        {/* Heart highlight */}
        <path d="M 106,40 Q 100,46 102,54" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" fill="none" strokeLinecap="round" />

        {/* Chamber dividers */}
        <line x1="98" y1="58" x2="142" y2="58" stroke="rgba(127,0,0,0.5)" strokeWidth="0.8" />
        <line x1="120" y1="42" x2="120" y2="82" stroke="rgba(127,0,0,0.5)" strokeWidth="0.8" />

        {/* Chamber coloring — left side (oxygenated=brighter red) */}
        <path d="M 120,42 Q 108,34 102,40 Q 96,48 98,58 L 120,58 Z" fill="rgba(255,130,130,0.15)" />
        <path d="M 98,58 L 120,58 L 120,82 L 107,68 Q 98,60 98,58 Z" fill="rgba(255,130,130,0.1)" />
        {/* Right side (deoxygenated=bluer) */}
        <path d="M 120,42 Q 132,34 138,40 Q 144,48 142,58 L 120,58 Z" fill="rgba(100,120,200,0.12)" />
        <path d="M 142,58 L 120,58 L 120,82 L 133,68 Q 142,60 142,58 Z" fill="rgba(100,120,200,0.08)" />
      </g>

      {/* ── AORTA (main artery) arching up from heart ── */}
      <path d="M 118,42 Q 118,28 130,22 Q 145,18 155,25" stroke="url(#bs_r1_artery)" strokeWidth="4" fill="none" strokeLinecap="round" />
      {/* Branching arteries */}
      <path d="M 155,25 Q 168,20 185,18" stroke="url(#bs_r1_artery)" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M 140,20 Q 148,12 160,10" stroke="url(#bs_r1_artery)" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Left-side arteries */}
      <path d="M 100,42 Q 88,30 70,22" stroke="url(#bs_r1_artery)" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M 78,26 Q 65,18 50,15" stroke="url(#bs_r1_artery)" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Descending aorta */}
      <path d="M 120,85 Q 120,100 118,115 Q 116,128 110,140" stroke="url(#bs_r1_artery)" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M 118,115 Q 125,128 132,140" stroke="url(#bs_r1_artery)" strokeWidth="2" fill="none" strokeLinecap="round" />

      {/* ── VEINS returning to heart ── */}
      <path d="M 50,145 Q 70,130 90,120 Q 100,115 102,100 Q 100,90 100,78" stroke="url(#bs_r1_vein)" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M 190,145 Q 170,130 150,120 Q 140,115 138,100 Q 140,90 140,78" stroke="url(#bs_r1_vein)" strokeWidth="3" fill="none" strokeLinecap="round" />
      {/* Superior vena cava */}
      <path d="M 185,10 Q 170,15 155,25 Q 145,32 140,42" stroke="url(#bs_r1_vein)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M 50,10 Q 70,18 85,30 Q 95,38 100,42" stroke="url(#bs_r1_vein)" strokeWidth="2.5" fill="none" strokeLinecap="round" />

      {/* Tiny capillary network at extremities */}
      {[{x:40,y:148},{x:195,y:148},{x:45,y:8},{x:195,y:8}].map((p,i) => (
        <g key={i} opacity="0.3">
          <circle cx={p.x} cy={p.y} r="5" fill="none" stroke={i<2?"#E53935":"#3F51B5"} strokeWidth="0.4" />
          <path d={`M ${p.x-4},${p.y} Q ${p.x},${p.y-3} ${p.x+4},${p.y}`} stroke="rgba(200,150,200,0.4)" strokeWidth="0.4" fill="none" />
        </g>
      ))}

      {/* Directional flow arrows on arteries */}
      <polygon points="70,22 66,20 68,24" fill="#E53935" opacity="0.6" />
      <polygon points="185,18 181,16 183,20" fill="#E53935" opacity="0.6" />
      <polygon points="110,140 108,136 112,137" fill="#E53935" opacity="0.6" />
      {/* Flow arrows on veins */}
      <polygon points="90,120 88,116 92,117" fill="#3F51B5" opacity="0.6" />
      <polygon points="150,120 148,116 152,117" fill="#3F51B5" opacity="0.6" />

      {/* Color-coded indicator dots */}
      <circle cx="22" cy="22" r="4" fill="rgba(229,57,53,0.2)" stroke="#E53935" strokeWidth="0.7" />
      <circle cx="22" cy="22" r="1.5" fill="#E53935" opacity="0.5" />
      <circle cx="22" cy="140" r="4" fill="rgba(63,81,181,0.2)" stroke="#3F51B5" strokeWidth="0.7" />
      <circle cx="22" cy="140" r="1.5" fill="#3F51B5" opacity="0.5" />
    </svg>
  );
}

function SvgRound2(lang: string): React.ReactNode {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <radialGradient id="bs_r2_bg" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stopColor="#0a1420" />
          <stop offset="100%" stopColor="#0a0a14" />
        </radialGradient>
        <linearGradient id="bs_r2_trachea" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#80DEEA" />
          <stop offset="50%" stopColor="#4DD0E1" />
          <stop offset="100%" stopColor="#00ACC1" />
        </linearGradient>
        <radialGradient id="bs_r2_lung_l" cx="45%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#FF8A80" />
          <stop offset="40%" stopColor="#EF5350" />
          <stop offset="80%" stopColor="#C62828" />
          <stop offset="100%" stopColor="#8E0000" />
        </radialGradient>
        <radialGradient id="bs_r2_lung_r" cx="55%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#FF8A80" />
          <stop offset="40%" stopColor="#EF5350" />
          <stop offset="80%" stopColor="#C62828" />
          <stop offset="100%" stopColor="#8E0000" />
        </radialGradient>
        <radialGradient id="bs_r2_alveoli" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFCDD2" />
          <stop offset="100%" stopColor="#EF9A9A" />
        </radialGradient>
        <linearGradient id="bs_r2_nose" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#FFCCBC" />
          <stop offset="100%" stopColor="#FFAB91" />
        </linearGradient>
        <filter id="bs_r2_glow">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      <rect width="240" height="160" fill="url(#bs_r2_bg)" />

      {/* Body silhouette outline */}
      <path d="M 90,8 Q 80,5 75,10 Q 70,18 78,28 L 78,35 Q 65,42 55,60 Q 48,75 50,95 Q 52,120 60,140 L 60,155 M 150,8 Q 160,5 165,10 Q 170,18 162,28 L 162,35 Q 175,42 185,60 Q 192,75 190,95 Q 188,120 180,140 L 180,155" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" fill="none" />

      {/* Nose/nasal passage */}
      <path d="M 116,10 Q 112,8 110,12 Q 108,18 112,22 L 120,22 Q 128,18 130,12 Q 128,8 124,10 Z" fill="url(#bs_r2_nose)" opacity="0.5" />
      {/* Nasal cavity inside */}
      <path d="M 114,14 Q 116,18 118,20" stroke="rgba(200,100,80,0.3)" strokeWidth="0.5" fill="none" />
      <path d="M 126,14 Q 124,18 122,20" stroke="rgba(200,100,80,0.3)" strokeWidth="0.5" fill="none" />

      {/* Pharynx */}
      <path d="M 116,22 Q 118,28 120,32" stroke="url(#bs_r2_trachea)" strokeWidth="3.5" fill="none" strokeLinecap="round" opacity="0.6" />

      {/* Trachea — ring segments */}
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <g key={`tr${i}`}>
          <path d={`M 116,${34 + i * 5} Q 120,${36 + i * 5} 124,${34 + i * 5}`} stroke="url(#bs_r2_trachea)" strokeWidth="2.5" fill="none" />
          {/* Cartilage ring */}
          <path d={`M 115,${34 + i * 5} Q 120,${32 + i * 5} 125,${34 + i * 5}`} stroke="rgba(77,208,225,0.3)" strokeWidth="1" fill="none" />
        </g>
      ))}

      {/* Bronchi branching */}
      <path d="M 118,68 Q 105,75 90,82 Q 78,88 72,95" stroke="url(#bs_r2_trachea)" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M 122,68 Q 135,75 150,82 Q 162,88 168,95" stroke="url(#bs_r2_trachea)" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Secondary bronchi */}
      <path d="M 85,86 Q 75,92 68,100" stroke="rgba(77,208,225,0.5)" strokeWidth="1.2" fill="none" />
      <path d="M 90,84 Q 85,95 82,108" stroke="rgba(77,208,225,0.5)" strokeWidth="1.2" fill="none" />
      <path d="M 155,86 Q 165,92 172,100" stroke="rgba(77,208,225,0.5)" strokeWidth="1.2" fill="none" />
      <path d="M 150,84 Q 155,95 158,108" stroke="rgba(77,208,225,0.5)" strokeWidth="1.2" fill="none" />

      {/* Left lung */}
      <path d="M 96,78 Q 58,82 48,105 Q 42,125 50,142 Q 58,152 80,154 Q 100,152 108,140 Q 115,125 112,105 Q 108,88 96,78 Z" fill="url(#bs_r2_lung_l)" opacity="0.7" />
      {/* Lung lobe division */}
      <path d="M 60,110 Q 80,108 105,115" stroke="rgba(127,0,0,0.3)" strokeWidth="0.8" fill="none" />

      {/* Right lung */}
      <path d="M 144,78 Q 182,82 192,105 Q 198,125 190,142 Q 182,152 160,154 Q 140,152 132,140 Q 125,125 128,105 Q 132,88 144,78 Z" fill="url(#bs_r2_lung_r)" opacity="0.7" />
      {/* Lung lobe divisions (right has 3 lobes) */}
      <path d="M 135,105 Q 160,102 188,108" stroke="rgba(127,0,0,0.3)" strokeWidth="0.8" fill="none" />
      <path d="M 138,125 Q 160,122 185,128" stroke="rgba(127,0,0,0.3)" strokeWidth="0.8" fill="none" />

      {/* Alveoli clusters */}
      {[{x:68,y:98},{x:78,y:115},{x:65,y:128},{x:85,y:135},{x:72,y:142},
        {x:165,y:98},{x:158,y:115},{x:175,y:128},{x:155,y:135},{x:168,y:142}].map((p,i) => (
        <g key={`a${i}`}>
          <circle cx={p.x} cy={p.y} r="4" fill="url(#bs_r2_alveoli)" opacity="0.4" />
          <circle cx={p.x-2} cy={p.y-1} r="2.5" fill="url(#bs_r2_alveoli)" opacity="0.3" />
          <circle cx={p.x+2} cy={p.y+1} r="2.5" fill="url(#bs_r2_alveoli)" opacity="0.3" />
        </g>
      ))}

      {/* O2 flow arrows (blue, incoming) */}
      <path d="M 30,15 Q 60,12 110,14" stroke="rgba(100,181,246,0.35)" strokeWidth="1.2" fill="none" />
      <polygon points="108,14 104,12 104,16" fill="rgba(100,181,246,0.4)" />
      <path d="M 25,22 Q 55,20 108,18" stroke="rgba(100,181,246,0.25)" strokeWidth="0.8" fill="none" />
      {/* O2 dots */}
      <circle cx="40" cy="14" r="1.5" fill="rgba(100,181,246,0.4)" />
      <circle cx="55" cy="16" r="1.2" fill="rgba(100,181,246,0.3)" />
      <circle cx="70" cy="12" r="1" fill="rgba(100,181,246,0.25)" />

      {/* CO2 flow arrows (orange, outgoing) */}
      <path d="M 130,14 Q 170,12 210,18" stroke="rgba(255,167,38,0.35)" strokeWidth="1.2" fill="none" />
      <polygon points="210,18 206,16 207,20" fill="rgba(255,167,38,0.4)" />
      {/* CO2 dots */}
      <circle cx="175" cy="12" r="1.5" fill="rgba(255,167,38,0.35)" />
      <circle cx="190" cy="14" r="1.2" fill="rgba(255,167,38,0.25)" />
      <circle cx="200" cy="16" r="1" fill="rgba(255,167,38,0.2)" />

      {/* Gas exchange zoomed hint (bottom right) */}
      <circle cx="218" cy="130" r="12" fill="rgba(255,205,210,0.08)" stroke="rgba(255,205,210,0.15)" strokeWidth="0.5" />
      <circle cx="215" cy="128" r="3" fill="url(#bs_r2_alveoli)" opacity="0.4" />
      <circle cx="221" cy="128" r="3" fill="url(#bs_r2_alveoli)" opacity="0.4" />
      <circle cx="218" cy="133" r="3" fill="url(#bs_r2_alveoli)" opacity="0.4" />
      <path d="M 212,126 L 208,122" stroke="rgba(100,181,246,0.3)" strokeWidth="0.5" />
      <path d="M 224,126 L 228,122" stroke="rgba(255,167,38,0.3)" strokeWidth="0.5" />
    </svg>
  );
}

function SvgRound3(lang: string): React.ReactNode {
  const lb = LABELS[lang] || LABELS.en;
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <linearGradient id="r3_mouth" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF9999" />
          <stop offset="100%" stopColor="#FF6666" />
        </linearGradient>
        <linearGradient id="r3_stomach" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF7733" />
          <stop offset="100%" stopColor="#FF5500" />
        </linearGradient>
        <linearGradient id="r3_intestine" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFB366" />
          <stop offset="100%" stopColor="#FF9944" />
        </linearGradient>
      </defs>

      {/* Mouth */}
      <ellipse cx="120" cy="25" rx="15" ry="12" fill="url(#r3_mouth)" stroke="#FF6666" strokeWidth="1.5" />
      <text x="120" y="30" fontSize="14" textAnchor="middle">👄</text>
      <text x="120" y="50" fontSize="9" fontWeight="bold" fill="white" textAnchor="middle">Mouth</text>

      {/* Esophagus (tube downward) */}
      <path d="M120 40 L120 65" stroke="#FF8888" strokeWidth="5" fill="none" strokeLinecap="round" />

      {/* Stomach (pouch) */}
      <path d="M100 75 Q90 90 95 105 Q100 115 120 118 Q140 115 145 105 Q150 90 140 75 Z" fill="url(#r3_stomach)" stroke="#FF5500" strokeWidth="1.5" />
      <text x="120" y="98" fontSize="9" fontWeight="bold" fill="white" textAnchor="middle">Stomach</text>

      {/* Small intestines (wavy tube downward) */}
      <path d="M110 118 Q110 135 120 138 Q130 135 130 118" stroke="url(#r3_intestine)" strokeWidth="6" fill="none" strokeLinecap="round" />
      <text x="120" y="155" fontSize="8" fontWeight="bold" fill="white" textAnchor="middle">Small Intestines</text>

      {/* Nutrient absorption arrows */}
      <path d="M135 95 L160 85" stroke="#00FF88" strokeWidth="2" fill="none" markerEnd="url(#arrowgreen)" strokeDasharray="2,2" />
      <text x="155" y="75" fontSize="9" fontWeight="bold" fill="#00FF88">Nutrients</text>

      <defs>
        <marker id="arrowgreen" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
          <polygon points="0,0 10,5 0,10" fill="#00FF88" />
        </marker>
      </defs>
    </svg>
  );
}

function SvgRound4(lang: string): React.ReactNode {
  const lb = LABELS[lang] || LABELS.en;
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <linearGradient id="r4_kidney" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF6B9D" />
          <stop offset="100%" stopColor="#FF1493" />
        </linearGradient>
        <linearGradient id="r4_bladder" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#FFA500" />
        </linearGradient>
      </defs>

      {/* Left kidney */}
      <ellipse cx="70" cy="50" rx="18" ry="25" fill="url(#r4_kidney)" stroke="#FF1493" strokeWidth="1.5" />
      <text x="70" y="55" fontSize="9" fontWeight="bold" fill="white" textAnchor="middle">Kidney</text>

      {/* Right kidney */}
      <ellipse cx="170" cy="50" rx="18" ry="25" fill="url(#r4_kidney)" stroke="#FF1493" strokeWidth="1.5" />
      <text x="170" y="55" fontSize="9" fontWeight="bold" fill="white" textAnchor="middle">Kidney</text>

      {/* Bladder (center bottom) */}
      <ellipse cx="120" cy="115" rx="22" ry="25" fill="url(#r4_bladder)" stroke="#FFA500" strokeWidth="1.5" />
      <text x="120" y="118" fontSize="8" fontWeight="bold" fill="#333" textAnchor="middle">Bladder</text>

      {/* Ureters (tubes from kidneys to bladder) */}
      <path d="M70 75 Q70 90 110 105" stroke="#FFB6D9" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M170 75 Q170 90 130 105" stroke="#FFB6D9" strokeWidth="4" fill="none" strokeLinecap="round" />
      <text x="80" y="90" fontSize="8" fontWeight="bold" fill="#FFB6D9">Ureter</text>

      {/* Waste filter arrows */}
      <path d="M50 50 L60 50" stroke="#FF0000" strokeWidth="2" fill="none" markerEnd="url(#arrowred)" strokeDasharray="2,2" />
      <text x="40" y="45" fontSize="8" fontWeight="bold" fill="#FF0000">Blood in</text>

      <path d="M80 70 L90 85" stroke="#FFD700" strokeWidth="2" fill="none" markerEnd="url(#arrowyellow)" strokeDasharray="2,2" />
      <text x="85" y="70" fontSize="8" fontWeight="bold" fill="#FFD700">Urine</text>

      {/* Skin (top right) with sweat glands */}
      <rect x="185" y="20" width="40" height="30" rx="5" fill="#CCAA88" opacity="0.3" stroke="#CCAA88" strokeWidth="1" />
      <text x="205" y="40" fontSize="8" fontWeight="bold" fill="white" textAnchor="middle">Skin</text>

      {/* Sweat droplets */}
      <circle cx="200" cy="55" r="2" fill="#00CCFF" opacity="0.7" />
      <circle cx="210" cy="60" r="2" fill="#00CCFF" opacity="0.7" />
      <circle cx="195" cy="65" r="2" fill="#00CCFF" opacity="0.7" />
      <text x="215" y="62" fontSize="8" fontWeight="bold" fill="#00CCFF">Sweat</text>

      <defs>
        <marker id="arrowred" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
          <polygon points="0,0 10,5 0,10" fill="#FF0000" />
        </marker>
        <marker id="arrowyellow" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
          <polygon points="0,0 10,5 0,10" fill="#FFD700" />
        </marker>
      </defs>
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Quiz Questions for Round 5
// ─────────────────────────────────────────────────────────────────────────────

const QUIZ_QUESTIONS: MCQQuestion[] = [
  {
    question: "q1",
    choices: ["q1_a", "q1_b", "q1_c"],
    answer: "q1_a",
  },
  {
    question: "q2",
    choices: ["q2_a", "q2_b", "q2_c"],
    answer: "q2_a",
  },
  {
    question: "q3",
    choices: ["q3_a", "q3_b", "q3_c"],
    answer: "q3_a",
  },
  {
    question: "q4",
    choices: ["q4_a", "q4_b", "q4_c"],
    answer: "q4_a",
  },
  {
    question: "q5",
    choices: ["q5_a", "q5_b", "q5_c"],
    answer: "q5_a",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// ExplorerDef Definition
// ─────────────────────────────────────────────────────────────────────────────

const DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    {
      type: "mcq",
      infoTitle: "r1_title",
      infoText: "r1_text",
      svg: SvgRound1,
      bulletKeys: ["r1_b1", "r1_b2", "r1_b3"],
      questions: [
        {
          question: "q1",
          choices: ["q1_a", "q1_b", "q1_c"],
          answer: "q1_a",
        },
      ],
    },
    {
      type: "mcq",
      infoTitle: "r2_title",
      infoText: "r2_text",
      svg: SvgRound2,
      bulletKeys: ["r2_b1", "r2_b2", "r2_b3"],
      questions: [
        {
          question: "q2",
          choices: ["q2_a", "q2_b", "q2_c"],
          answer: "q2_a",
        },
      ],
    },
    {
      type: "mcq",
      infoTitle: "r3_title",
      infoText: "r3_text",
      svg: SvgRound3,
      bulletKeys: ["r3_b1", "r3_b2", "r3_b3"],
      questions: [
        {
          question: "q3",
          choices: ["q3_a", "q3_b", "q3_c"],
          answer: "q3_a",
        },
      ],
    },
    {
      type: "mcq",
      infoTitle: "r4_title",
      infoText: "r4_text",
      svg: SvgRound4,
      bulletKeys: ["r4_b1", "r4_b2", "r4_b3"],
      questions: [
        {
          question: "q4",
          choices: ["q4_a", "q4_b", "q4_c"],
          answer: "q4_a",
        },
      ],
    },
    {
      type: "mcq",
      infoTitle: "r1_title",
      infoText: "r1_text",
      svg: SvgRound1,
      questions: [
        {
          question: "q5",
          choices: ["q5_a", "q5_b", "q5_c"],
          answer: "q5_a",
        },
        {
          question: "q1",
          choices: ["q1_a", "q1_b", "q1_c"],
          answer: "q1_a",
        },
      ],
      bulletKeys: [],
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// Component Export
// ─────────────────────────────────────────────────────────────────────────────

interface Props {
  color?: string;
  lang?: string;
  onDone?: (score: number, total: number) => void;
}

export default function BodySystemExplorer({ color = "#FF6B9D", lang = "en", onDone }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} />;
}
