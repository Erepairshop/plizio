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
  const lb = LABELS[lang] || LABELS.en;
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <linearGradient id="r1_heart" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF4444" />
          <stop offset="100%" stopColor="#CC0000" />
        </linearGradient>
        <linearGradient id="r1_artery" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF6666" />
          <stop offset="100%" stopColor="#FF2222" />
        </linearGradient>
        <linearGradient id="r1_vein" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4466FF" />
          <stop offset="100%" stopColor="#0000CC" />
        </linearGradient>
      </defs>

      {/* Heart with 4 chambers */}
      <g id="heart">
        <path d="M120 40 L140 55 L140 75 L120 85 L100 75 L100 55 Z" fill="url(#r1_heart)" stroke="#FF0000" strokeWidth="1.5" />
        {/* Chambers separators */}
        <line x1="100" y1="65" x2="140" y2="65" stroke="#AA0000" strokeWidth="1" opacity="0.6" />
        <line x1="120" y1="55" x2="120" y2="85" stroke="#AA0000" strokeWidth="1" opacity="0.6" />
        {/* Labels on chambers */}
        <text x="105" y="62" fontSize="8" fontWeight="bold" fill="white" textAnchor="middle">LA</text>
        <text x="135" y="62" fontSize="8" fontWeight="bold" fill="white" textAnchor="middle">RA</text>
        <text x="105" y="78" fontSize="8" fontWeight="bold" fill="white" textAnchor="middle">LV</text>
        <text x="135" y="78" fontSize="8" fontWeight="bold" fill="white" textAnchor="middle">RV</text>
      </g>

      {/* Arteries (red) leaving heart */}
      <path d="M100 50 Q70 45 50 40" stroke="url(#r1_artery)" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M140 50 Q170 45 190 40" stroke="url(#r1_artery)" strokeWidth="4" fill="none" strokeLinecap="round" />
      {/* Arrowheads */}
      <polygon points="50,40 45,37 48,43" fill="#FF2222" />
      <polygon points="190,40 185,37 188,43" fill="#FF2222" />

      {/* Veins (blue) returning to heart */}
      <path d="M100 80 Q70 85 50 100" stroke="url(#r1_vein)" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M140 80 Q170 85 190 100" stroke="url(#r1_vein)" strokeWidth="4" fill="none" strokeLinecap="round" />
      {/* Arrowheads */}
      <polygon points="50,100 48,95 52,97" fill="#0000CC" />
      <polygon points="190,100 188,95 192,97" fill="#0000CC" />

      {/* Labels with pills */}
      <g id="label_heart">
        <rect x="105" y="110" width="30" height="20" rx="10" fill="#FF4444" opacity="0.2" stroke="#FF4444" strokeWidth="1" />
        <text x="120" y="123" fontSize="9" fontWeight="bold" fill="white" textAnchor="middle">Heart</text>
      </g>
      <g id="label_artery">
        <rect x="170" y="25" width="32" height="20" rx="10" fill="#FF2222" opacity="0.2" stroke="#FF2222" strokeWidth="1" />
        <text x="186" y="38" fontSize="8" fontWeight="bold" fill="white" textAnchor="middle">Artery</text>
      </g>
      <g id="label_vein">
        <rect x="165" y="100" width="28" height="20" rx="10" fill="#0000CC" opacity="0.2" stroke="#0000CC" strokeWidth="1" />
        <text x="179" y="113" fontSize="8" fontWeight="bold" fill="white" textAnchor="middle">Vein</text>
      </g>
    </svg>
  );
}

function SvgRound2(lang: string): React.ReactNode {
  const lb = LABELS[lang] || LABELS.en;
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <linearGradient id="r2_air" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#87CEEB" />
          <stop offset="100%" stopColor="#4AABD9" />
        </linearGradient>
        <linearGradient id="r2_lung" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF6B9D" />
          <stop offset="100%" stopColor="#FF4081" />
        </linearGradient>
      </defs>

      {/* Nose & mouth */}
      <ellipse cx="50" cy="30" rx="12" ry="14" fill="url(#r2_air)" stroke="#4AABD9" strokeWidth="1.5" />
      <text x="50" y="35" fontSize="16" textAnchor="middle">👃</text>

      {/* Trachea */}
      <path d="M50 50 Q60 70 100 90" stroke="#4AABD9" strokeWidth="5" fill="none" strokeLinecap="round" />
      <text x="65" y="65" fontSize="8" fontWeight="bold" fill="white">Trachea</text>

      {/* Lungs (two oval chambers) */}
      <ellipse cx="80" cy="115" rx="25" ry="30" fill="url(#r2_lung)" stroke="#FF4081" strokeWidth="2" />
      <ellipse cx="140" cy="115" rx="25" ry="30" fill="url(#r2_lung)" stroke="#FF4081" strokeWidth="2" />

      {/* Alveoli clusters inside lungs */}
      <g id="alveoli_left">
        <circle cx="70" cy="105" r="3" fill="#FFB6D9" opacity="0.8" />
        <circle cx="80" cy="110" r="3" fill="#FFB6D9" opacity="0.8" />
        <circle cx="90" cy="105" r="3" fill="#FFB6D9" opacity="0.8" />
        <circle cx="75" cy="125" r="3" fill="#FFB6D9" opacity="0.8" />
      </g>
      <g id="alveoli_right">
        <circle cx="130" cy="105" r="3" fill="#FFB6D9" opacity="0.8" />
        <circle cx="140" cy="110" r="3" fill="#FFB6D9" opacity="0.8" />
        <circle cx="150" cy="105" r="3" fill="#FFB6D9" opacity="0.8" />
        <circle cx="135" cy="125" r="3" fill="#FFB6D9" opacity="0.8" />
      </g>

      {/* O₂ in / CO₂ out arrows */}
      <path d="M40 35 Q30 50 25 75" stroke="#87CEEB" strokeWidth="2" fill="none" markerEnd="url(#arrowblue)" strokeDasharray="3,3" />
      <text x="18" y="55" fontSize="9" fontWeight="bold" fill="#87CEEB">O₂ in</text>

      <path d="M200 75 Q210 50 220 35" stroke="#FF8C00" strokeWidth="2" fill="none" markerEnd="url(#arroworange)" strokeDasharray="3,3" />
      <text x="200" y="55" fontSize="9" fontWeight="bold" fill="#FF8C00">CO₂ out</text>

      {/* Labels */}
      <rect x="65" y="150" width="35" height="16" rx="8" fill="#4AABD9" opacity="0.2" stroke="#4AABD9" strokeWidth="1" />
      <text x="82" y="160" fontSize="8" fontWeight="bold" fill="white" textAnchor="middle">Lungs</text>

      <defs>
        <marker id="arrowblue" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
          <polygon points="0,0 10,5 0,10" fill="#87CEEB" />
        </marker>
        <marker id="arroworange" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
          <polygon points="0,0 10,5 0,10" fill="#FF8C00" />
        </marker>
      </defs>
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
