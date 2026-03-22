"use client";
// ArthropodExplorer — Grade 6 Biology: Arthropods (Gliederfüßer)
// 5 rounds: R1 (arthropod body plan), R2 (insects), R3 (spiders),
//           R4 (metamorphosis), R5 (review quiz)

import React from "react";
import ExplorerEngine from "./ExplorerEngine";
import type { ExplorerDef, RoundDef } from "./ExplorerEngine";

// ─────────────────────────────────────────────────────────────────────────────
// SVG Components (no hardcoded text inside SVG)
// ─────────────────────────────────────────────────────────────────────────────

function SVG_R1(): React.ReactNode {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <linearGradient id="arth_body" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#D4A574" />
          <stop offset="100%" stopColor="#8B6F47" />
        </linearGradient>
        <linearGradient id="arth_bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(100,150,200,0.1)" />
          <stop offset="100%" stopColor="rgba(150,120,180,0.1)" />
        </linearGradient>
      </defs>

      <rect width="240" height="160" fill="url(#arth_bg)" />

      {/* Generic arthropod - segmented body with jointed legs */}
      <g>
        {/* Body segments (3 visible) */}
        <circle cx="80" cy="70" r="18" fill="url(#arth_body)" stroke="#5C4033" strokeWidth="1" />
        <circle cx="120" cy="75" r="20" fill="url(#arth_body)" stroke="#5C4033" strokeWidth="1" />
        <circle cx="160" cy="70" r="18" fill="url(#arth_body)" stroke="#5C4033" strokeWidth="1" />

        {/* Segment divisions - showing segmentation */}
        <line x1="98" y1="60" x2="98" y2="85" stroke="#5C4033" strokeWidth="1" opacity="0.6" />
        <line x1="138" y1="60" x2="138" y2="90" stroke="#5C4033" strokeWidth="1" opacity="0.6" />

        {/* Head (antennae) */}
        <circle cx="50" cy="70" r="14" fill="#A0826D" stroke="#5C4033" strokeWidth="0.8" />
        <path d="M 45 60 Q 35 45 40 35" stroke="#5C4033" strokeWidth="1.5" fill="none" />
        <path d="M 55 60 Q 65 45 60 35" stroke="#5C4033" strokeWidth="1.5" fill="none" />
        <circle cx="48" cy="70" r="2" fill="#2C1810" />
        <circle cx="52" cy="70" r="2" fill="#2C1810" />

        {/* 6 jointed legs (arthropod characteristic) */}
        {/* Front left */}
        <g>
          <line x1="65" y1="90" x2="50" y2="110" stroke="#5C4033" strokeWidth="2" />
          <circle cx="50" cy="110" r="2.5" fill="#5C4033" />
        </g>
        {/* Front right */}
        <g>
          <line x1="95" y1="95" x2="110" y2="120" stroke="#5C4033" strokeWidth="2" />
          <circle cx="110" cy="120" r="2.5" fill="#5C4033" />
        </g>
        {/* Middle left */}
        <g>
          <line x1="105" y1="100" x2="85" y2="125" stroke="#5C4033" strokeWidth="2" />
          <circle cx="85" cy="125" r="2.5" fill="#5C4033" />
        </g>
        {/* Middle right */}
        <g>
          <line x1="135" y1="100" x2="155" y2="130" stroke="#5C4033" strokeWidth="2" />
          <circle cx="155" cy="130" r="2.5" fill="#5C4033" />
        </g>
        {/* Back left */}
        <g>
          <line x1="145" y1="95" x2="125" y2="125" stroke="#5C4033" strokeWidth="2" />
          <circle cx="125" cy="125" r="2.5" fill="#5C4033" />
        </g>
        {/* Back right */}
        <g>
          <line x1="175" y1="90" x2="190" y2="120" stroke="#5C4033" strokeWidth="2" />
          <circle cx="190" cy="120" r="2.5" fill="#5C4033" />
        </g>

        {/* Exoskeleton shine */}
        <ellipse cx="80" cy="65" rx="12" ry="10" fill="white" opacity="0.15" />
        <ellipse cx="120" cy="70" rx="14" ry="12" fill="white" opacity="0.15" />
        <ellipse cx="160" cy="65" rx="12" ry="10" fill="white" opacity="0.15" />
      </g>
    </svg>
  );
}

function SVG_R2(): React.ReactNode {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <linearGradient id="insect_body" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#FFA500" />
        </linearGradient>
        <linearGradient id="insect_wing" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(200,220,255,0.6)" />
          <stop offset="100%" stopColor="rgba(150,180,255,0.4)" />
        </linearGradient>
        <linearGradient id="insect_bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(255,200,100,0.1)" />
          <stop offset="100%" stopColor="rgba(200,150,100,0.1)" />
        </linearGradient>
      </defs>

      <rect width="240" height="160" fill="url(#insect_bg)" />

      {/* Bee/Butterfly-like insect showing 3 body parts */}
      <g>
        {/* 1. Head */}
        <circle cx="80" cy="55" r="12" fill="#FFA500" stroke="#8B5A00" strokeWidth="1" />
        <circle cx="75" cy="52" r="2" fill="#2C1810" />
        <circle cx="85" cy="52" r="2" fill="#2C1810" />
        <path d="M 78 62 Q 80 67 82 62" stroke="#8B5A00" strokeWidth="1" fill="none" />

        {/* 2. Thorax (middle body - where legs & wings attach) */}
        <ellipse cx="120" cy="75" rx="18" ry="22" fill="url(#insect_body)" stroke="#8B5A00" strokeWidth="1" />

        {/* 3. Abdomen (rear body) */}
        <ellipse cx="160" cy="85" rx="22" ry="28" fill="#FFD700" stroke="#8B5A00" strokeWidth="1" />
        {/* Abdominal segments */}
        <line x1="145" y1="65" x2="175" y2="65" stroke="#8B5A00" strokeWidth="0.8" opacity="0.5" />
        <line x1="142" y1="78" x2="178" y2="78" stroke="#8B5A00" strokeWidth="0.8" opacity="0.5" />
        <line x1="140" y1="92" x2="180" y2="92" stroke="#8B5A00" strokeWidth="0.8" opacity="0.5" />

        {/* Wings (2 pairs) - left side */}
        <path d="M 100 60 Q 70 40 65 70 Q 75 85 105 75 Z" fill="url(#insect_wing)" stroke="#4A90E2" strokeWidth="1" />
        <path d="M 95 85 Q 60 95 60 130 Q 75 135 100 110 Z" fill="url(#insect_wing)" stroke="#4A90E2" strokeWidth="1" opacity="0.7" />

        {/* Wings - right side */}
        <path d="M 140 60 Q 170 40 175 70 Q 165 85 135 75 Z" fill="url(#insect_wing)" stroke="#4A90E2" strokeWidth="1" />
        <path d="M 145 85 Q 180 95 180 130 Q 165 135 140 110 Z" fill="url(#insect_wing)" stroke="#4A90E2" strokeWidth="1" opacity="0.7" />

        {/* 6 Legs (3 pairs from thorax) */}
        {/* Front pair */}
        <line x1="105" y1="62" x2="85" y2="45" stroke="#5C4033" strokeWidth="1.5" />
        <circle cx="85" cy="45" r="1.5" fill="#5C4033" />
        <line x1="135" y1="62" x2="155" y2="45" stroke="#5C4033" strokeWidth="1.5" />
        <circle cx="155" cy="45" r="1.5" fill="#5C4033" />

        {/* Middle pair */}
        <line x1="110" y1="80" x2="85" y2="100" stroke="#5C4033" strokeWidth="1.5" />
        <circle cx="85" cy="100" r="1.5" fill="#5C4033" />
        <line x1="130" y1="80" x2="155" y2="100" stroke="#5C4033" strokeWidth="1.5" />
        <circle cx="155" cy="100" r="1.5" fill="#5C4033" />

        {/* Back pair */}
        <line x1="115" y1="92" x2="95" y2="125" stroke="#5C4033" strokeWidth="1.5" />
        <circle cx="95" cy="125" r="1.5" fill="#5C4033" />
        <line x1="125" y1="92" x2="145" y2="125" stroke="#5C4033" strokeWidth="1.5" />
        <circle cx="145" cy="125" r="1.5" fill="#5C4033" />
      </g>
    </svg>
  );
}

function SVG_R3(): React.ReactNode {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <linearGradient id="spider_body" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8B4513" />
          <stop offset="100%" stopColor="#654321" />
        </linearGradient>
        <linearGradient id="spider_bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(100,100,150,0.1)" />
          <stop offset="100%" stopColor="rgba(150,100,100,0.1)" />
        </linearGradient>
      </defs>

      <rect width="240" height="160" fill="url(#spider_bg)" />

      {/* Spider showing 2 body parts (cephalothorax + abdomen) */}
      <g>
        {/* Cephalothorax (head+thorax combined) */}
        <ellipse cx="100" cy="60" rx="18" ry="16" fill="url(#spider_body)" stroke="#3C2415" strokeWidth="1" />

        {/* Abdomen (large, rear body) */}
        <ellipse cx="130" cy="90" rx="26" ry="34" fill="#6B4423" stroke="#3C2415" strokeWidth="1" />

        {/* Connection line - thin waist */}
        <line x1="110" y1="73" x2="120" y2="82" stroke="#3C2415" strokeWidth="2" />

        {/* 8 Legs (spider characteristic - 4 pairs) */}
        {/* Front left */}
        <g>
          <path d="M 85 50 Q 60 35 50 25" stroke="#3C2415" strokeWidth="2" fill="none" strokeLinecap="round" />
          <circle cx="50" cy="25" r="1.5" fill="#3C2415" />
        </g>
        {/* Front right */}
        <g>
          <path d="M 115 50 Q 140 35 150 25" stroke="#3C2415" strokeWidth="2" fill="none" strokeLinecap="round" />
          <circle cx="150" cy="25" r="1.5" fill="#3C2415" />
        </g>

        {/* Second left */}
        <g>
          <path d="M 80 70 Q 50 70 35 80" stroke="#3C2415" strokeWidth="2" fill="none" strokeLinecap="round" />
          <circle cx="35" cy="80" r="1.5" fill="#3C2415" />
        </g>
        {/* Second right */}
        <g>
          <path d="M 120 70 Q 150 70 165 80" stroke="#3C2415" strokeWidth="2" fill="none" strokeLinecap="round" />
          <circle cx="165" cy="80" r="1.5" fill="#3C2415" />
        </g>

        {/* Third left */}
        <g>
          <path d="M 85 95 Q 55 105 45 125" stroke="#3C2415" strokeWidth="2" fill="none" strokeLinecap="round" />
          <circle cx="45" cy="125" r="1.5" fill="#3C2415" />
        </g>
        {/* Third right */}
        <g>
          <path d="M 115 95 Q 145 105 155 125" stroke="#3C2415" strokeWidth="2" fill="none" strokeLinecap="round" />
          <circle cx="155" cy="125" r="1.5" fill="#3C2415" />
        </g>

        {/* Back left */}
        <g>
          <path d="M 100 118 Q 70 135 60 145" stroke="#3C2415" strokeWidth="2" fill="none" strokeLinecap="round" />
          <circle cx="60" cy="145" r="1.5" fill="#3C2415" />
        </g>
        {/* Back right */}
        <g>
          <path d="M 130 118 Q 160 135 170 145" stroke="#3C2415" strokeWidth="2" fill="none" strokeLinecap="round" />
          <circle cx="170" cy="145" r="1.5" fill="#3C2415" />
        </g>

        {/* Eyes (8 eyes in spider) - simple dots on cephalothorax */}
        <circle cx="92" cy="55" r="1.2" fill="#FFD700" />
        <circle cx="108" cy="55" r="1.2" fill="#FFD700" />
        <circle cx="95" cy="65" r="1" fill="#FFD700" />
        <circle cx="105" cy="65" r="1" fill="#FFD700" />

        {/* Spinnerets (at abdomen rear) */}
        <circle cx="125" cy="120" r="2" fill="#A0522D" stroke="#3C2415" strokeWidth="0.5" />
        <circle cx="135" cy="120" r="2" fill="#A0522D" stroke="#3C2415" strokeWidth="0.5" />
      </g>
    </svg>
  );
}

function SVG_R4(): React.ReactNode {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <linearGradient id="meta_bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(100,200,100,0.1)" />
          <stop offset="100%" stopColor="rgba(150,100,200,0.1)" />
        </linearGradient>
      </defs>

      <rect width="240" height="160" fill="url(#meta_bg)" />

      {/* Circular metamorphosis diagram with arrows */}

      {/* Stage 1: Egg */}
      <g>
        <ellipse cx="40" cy="50" rx="8" ry="10" fill="#FFD700" stroke="#FFA500" strokeWidth="1" />
        <text x="40" y="72" fontSize="6" fontWeight="bold" textAnchor="middle" fill="#FFA500" fontFamily="system-ui">
          EGG
        </text>
      </g>

      {/* Arrow 1 */}
      <path d="M 50 50 L 70 50" stroke="#4A90E2" strokeWidth="1.5" fill="none" markerEnd="url(#arrowhead)" />
      <polygon points="72,50 68,48 68,52" fill="#4A90E2" />

      {/* Stage 2: Larva */}
      <g>
        <ellipse cx="90" cy="50" rx="10" ry="12" fill="#90EE90" stroke="#228B22" strokeWidth="1" />
        <line x1="82" y1="58" x2="78" y2="68" stroke="#228B22" strokeWidth="1" />
        <line x1="98" y1="58" x2="102" y2="68" stroke="#228B22" strokeWidth="1" />
        <text x="90" y="80" fontSize="6" fontWeight="bold" textAnchor="middle" fill="#228B22" fontFamily="system-ui">
          LARVA
        </text>
      </g>

      {/* Arrow 2 */}
      <path d="M 105 50 L 125 50" stroke="#4A90E2" strokeWidth="1.5" fill="none" markerEnd="url(#arrowhead)" />
      <polygon points="127,50 123,48 123,52" fill="#4A90E2" />

      {/* Stage 3: Pupa */}
      <g>
        <ellipse cx="155" cy="50" rx="10" ry="14" fill="#D4A373" stroke="#8B7355" strokeWidth="1" />
        <text x="155" y="75" fontSize="6" fontWeight="bold" textAnchor="middle" fill="#8B7355" fontFamily="system-ui">
          PUPA
        </text>
      </g>

      {/* Arrow 3 (down) */}
      <path d="M 155 65 L 155 90" stroke="#4A90E2" strokeWidth="1.5" fill="none" />
      <polygon points="155,92 153,88 157,88" fill="#4A90E2" />

      {/* Stage 4: Adult */}
      <g>
        {/* Butterfly/Insect adult */}
        <ellipse cx="155" cy="115" rx="8" ry="10" fill="#FFB6C1" stroke="#FF69B4" strokeWidth="1" />
        <path d="M 148 110 Q 140 100 135 110" fill="#FFB6C1" stroke="#FF69B4" strokeWidth="1" />
        <path d="M 162 110 Q 170 100 175 110" fill="#FFB6C1" stroke="#FF69B4" strokeWidth="1" />
        <text x="155" y="140" fontSize="6" fontWeight="bold" textAnchor="middle" fill="#FF69B4" fontFamily="system-ui">
          ADULT
        </text>
      </g>

      {/* Arrow back to egg (circle completes) */}
      <path d="M 145 105 Q 100 130 50 110" stroke="#4A90E2" strokeWidth="1.5" fill="none" strokeDasharray="3,2" />
      <polygon points="48,108 50,112 54,110" fill="#4A90E2" />

      {/* Center label */}
      <text x="110" y="108" fontSize="7" fontWeight="bold" textAnchor="middle" fill="#5C4033" fontFamily="system-ui" opacity="0.6">
        Complete
      </text>
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// LABELS — all content in 4 languages
// ─────────────────────────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    // Round 1: Arthropod body plan
    r1_title: "What Are Arthropods?",
    r1_text: "Arthropods are animals with exoskeletons (hard outer shells) and segmented bodies with jointed legs. They are the largest group of animals on Earth!",
    r1_fact1: "Hard exoskeleton protects the body",
    r1_fact2: "Body divided into segments",
    r1_fact3: "Jointed legs allow movement",
    r1_fact4: "Most arthropods are invertebrates (no backbone)",

    // Round 2: Insects
    r2_title: "Insects: 6 Legs & Wings",
    r2_text: "Insects have 3 body parts: head, thorax, and abdomen. They have 6 legs (3 pairs) and most have wings. Examples: bees, butterflies, beetles.",
    r2_fact1: "Exactly 6 legs attached to thorax",
    r2_fact2: "Most insects have wings for flight",
    r2_fact3: "3 distinct body sections",
    r2_fact4: "Insects are the most diverse arthropods",

    // Round 3: Spiders & Arachnids
    r3_title: "Spiders: 8 Legs & Webs",
    r3_text: "Spiders have 8 legs (4 pairs) and only 2 body parts: cephalothorax and abdomen. Many spiders spin webs to catch prey. No antennae!",
    r3_fact1: "8 legs is the key arachnid feature",
    r3_fact2: "Only 2 body parts (not 3)",
    r3_fact3: "Many spin silk webs",
    r3_fact4: "No wings or antennae",

    // Round 4: Metamorphosis
    r4_title: "Insect Metamorphosis",
    r4_text: "Insects transform during their life cycle through metamorphosis. Complete metamorphosis has 4 stages: egg → larva → pupa → adult. The pupa stage is where the magic happens!",
    r4_fact1: "Egg stage: tiny, laid on plants",
    r4_fact2: "Larva stage: eats and grows, sheds skin",
    r4_fact3: "Pupa stage: protective case, body rebuilds",
    r4_fact4: "Adult stage: fully formed, can reproduce",

    // Round 5: Review Quiz
    r5_title: "Quick Review",

    // Q1
    q1_q: "How many legs do insects have?",
    q1_6: "6 legs",
    q1_8: "8 legs",
    q1_4: "4 legs",
    q1_10: "10 legs",

    // Q2
    q2_q: "What do spiders use 8 legs for?",
    q2_walking: "Walking and climbing",
    q2_flying: "Flying",
    q2_swimming: "Swimming",
    q2_digging: "Digging",

    // Q3
    q3_q: "How many body parts does a spider have?",
    q3_2: "2 body parts",
    q3_3: "3 body parts",
    q3_4: "4 body parts",
    q3_5: "5 body parts",

    // Q4
    q4_q: "What happens inside the pupa?",
    q4_body: "Body is rebuilt into an adult",
    q4_eating: "The larva keeps eating",
    q4_growing: "Just growing bigger",
    q4_dying: "The animal dies",
  },

  de: {
    // Round 1: Arthropod body plan
    r1_title: "Was sind Gliederfüßer?",
    r1_text: "Gliederfüßer sind Tiere mit Außenskeletten (harten Schalen) und segmentierten Körpern mit Gelenken. Sie sind die größte Tiergruppe auf der Erde!",
    r1_fact1: "Hartes Außenskelett schützt den Körper",
    r1_fact2: "Körper in Segmente unterteilt",
    r1_fact3: "Gelenkte Beine ermöglichen Bewegung",
    r1_fact4: "Die meisten sind wirbellos (kein Rückgrat)",

    // Round 2: Insects
    r2_title: "Insekten: 6 Beine & Flügel",
    r2_text: "Insekten haben 3 Körperteile: Kopf, Brust und Hinterleib. Sie haben 6 Beine (3 Paare) und die meisten haben Flügel. Beispiele: Bienen, Schmetterlinge, Käfer.",
    r2_fact1: "Genau 6 Beine an der Brust",
    r2_fact2: "Die meisten Insekten haben Flügel",
    r2_fact3: "3 unterschiedliche Körperabschnitte",
    r2_fact4: "Insekten sind die vielfältigsten Arthropoden",

    // Round 3: Spiders & Arachnids
    r3_title: "Spinnen: 8 Beine & Netze",
    r3_text: "Spinnen haben 8 Beine (4 Paare) und nur 2 Körperteile: Kopfbrust und Hinterleib. Viele Spinnen spinnen Netze, um Beute zu fangen. Keine Fühler!",
    r3_fact1: "8 Beine ist das Erkennungszeichen",
    r3_fact2: "Nur 2 Körperteile (nicht 3)",
    r3_fact3: "Viele spinnen Seidennetze",
    r3_fact4: "Keine Flügel oder Fühler",

    // Round 4: Metamorphosis
    r4_title: "Insektenverwandlung",
    r4_text: "Insekten durchlaufen eine Metamorphose - eine Umwandlung! Vollständige Metamorphose hat 4 Stadien: Ei → Larve → Puppe → Erwachsener. In der Puppe geschieht die Magie!",
    r4_fact1: "Ei-Stadium: klein, auf Pflanzen gelegt",
    r4_fact2: "Larven-Stadium: frisst und wächst, häutet sich",
    r4_fact3: "Puppen-Stadium: Schutzkokon, Körper wird umgebaut",
    r4_fact4: "Erwachsenen-Stadium: vollständig ausgebildet, kann sich fortpflanzen",

    // Round 5: Review Quiz
    r5_title: "Schnelle Wiederholung",

    // Q1
    q1_q: "Wie viele Beine haben Insekten?",
    q1_6: "6 Beine",
    q1_8: "8 Beine",
    q1_4: "4 Beine",
    q1_10: "10 Beine",

    // Q2
    q2_q: "Wofür nutzen Spinnen 8 Beine?",
    q2_walking: "Gehen und Klettern",
    q2_flying: "Fliegen",
    q2_swimming: "Schwimmen",
    q2_digging: "Graben",

    // Q3
    q3_q: "Wie viele Körperteile hat eine Spinne?",
    q3_2: "2 Körperteile",
    q3_3: "3 Körperteile",
    q3_4: "4 Körperteile",
    q3_5: "5 Körperteile",

    // Q4
    q4_q: "Was passiert in der Puppe?",
    q4_body: "Körper wird zu einem Erwachsenen umgebaut",
    q4_eating: "Die Larve frisst weiter",
    q4_growing: "Wird nur größer",
    q4_dying: "Das Tier stirbt",
  },

  hu: {
    // Round 1
    r1_title: "Mit a rovarok?",
    r1_text: "A rovarok kemény, külső vázazattal rendelkező állatok, szegmentált testtel és ízületes lábakkal. Ők a Föld legnagyobb állatcsoportja!",
    r1_fact1: "Kemény külső váz védi a testet",
    r1_fact2: "Test szegmentekre van osztva",
    r1_fact3: "Ízületes lábak lehetővé teszik a mozgást",
    r1_fact4: "A legtöbb rovar gerinctelen (nincs gerinca)",

    // Round 2
    r2_title: "Rovarok: 6 Láb & Szárnyak",
    r2_text: "A rovaroknak 3 testrésze van: fej, mellkas és potroh. 6 lábuk (3 pár) és legtöbbjüknek szárnya van. Például: méhek, pillangók, bogarak.",
    r2_fact1: "Pontosan 6 láb a mellkason",
    r2_fact2: "A legtöbb rovarnak szárnya van",
    r2_fact3: "3 különálló testrész",
    r2_fact4: "A rovarok a legváltozatosabb rovarfajok",

    // Round 3
    r3_title: "Pókók: 8 Láb & Hálók",
    r3_text: "A pókoknak 8 lábuk van (4 pár) és csak 2 testrészük: fejtoráx és potroh. Sok pók készít hálókat, hogy fogjon prédát. Nincsenek csápok!",
    r3_fact1: "8 láb az arachnidák jellegzetessége",
    r3_fact2: "Csak 2 testrész (nem 3)",
    r3_fact3: "Sok pók selyemhálót készít",
    r3_fact4: "Nincsenek szárnyak vagy csápok",

    // Round 4
    r4_title: "Rovar Metamorfózis",
    r4_text: "A rovarok metamorfózison mennek keresztül - egy csodálatos átalakuláson! Teljes metamorfózis 4 szakaszból áll: tojás → lárva → báb → felnőtt.",
    r4_fact1: "Tojás szakasz: kicsi, növényekre rakva",
    r4_fact2: "Lárva szakasz: eszik és növekszik, pellevel sújt",
    r4_fact3: "Báb szakasz: védőhüvely, test átépül",
    r4_fact4: "Felnőtt szakasz: teljesen kialakult, szaporodhat",

    // Round 5
    r5_title: "Gyors Ismétlés",

    // Q1
    q1_q: "Hány lábuk van a rovaroknak?",
    q1_6: "6 láb",
    q1_8: "8 láb",
    q1_4: "4 láb",
    q1_10: "10 láb",

    // Q2
    q2_q: "Mire használnak a pók 8 lábat?",
    q2_walking: "Járás és mászás",
    q2_flying: "Repülés",
    q2_swimming: "Úszás",
    q2_digging: "Ásás",

    // Q3
    q3_q: "Hány testrészből áll egy pók?",
    q3_2: "2 testrészből",
    q3_3: "3 testrészből",
    q3_4: "4 testrészből",
    q3_5: "5 testrészből",

    // Q4
    q4_q: "Mi történik a báb szakaszban?",
    q4_body: "A test felnőttre építődik át",
    q4_eating: "A lárva továbbra is eszik",
    q4_growing: "Csak nagyobbra nő",
    q4_dying: "Az állat meghal",
  },

  ro: {
    // Round 1
    r1_title: "Ce sunt artropozii?",
    r1_text: "Artropozii sunt animale cu scheletele externe (coji dure) și corpuri segmentate cu picioare articulare. Sunt cel mai mare grup de animale de pe Pământ!",
    r1_fact1: "Exosqueletul dur protejează corpul",
    r1_fact2: "Corpul este împărțit în segmente",
    r1_fact3: "Picioarele articulate permit mișcarea",
    r1_fact4: "Majoritatea artropozilor sunt nevertebrate",

    // Round 2
    r2_title: "Insecte: 6 Picioare & Aripi",
    r2_text: "Insectele au 3 părți ale corpului: cap, torace și abdomen. Au 6 picioare (3 perechi) și majoritatea au aripi. Exemple: albine, fluturi, gândaci.",
    r2_fact1: "Exact 6 picioare atașate la torace",
    r2_fact2: "Majoritatea insectelor au aripi",
    r2_fact3: "3 secțiuni de corp distincte",
    r2_fact4: "Insectele sunt cel mai divers artropozi",

    // Round 3
    r3_title: "Păianjeni: 8 Picioare & Tele",
    r3_text: "Păianjenii au 8 picioare (4 perechi) și doar 2 părți ale corpului: cefalotorace și abdomen. Mulți păianjeni fac tele pentru a prinde prada. Fără antene!",
    r3_fact1: "8 picioare este trăsătura caracteristică",
    r3_fact2: "Doar 2 părți ale corpului (nu 3)",
    r3_fact3: "Mulți păianjeni fac tele de mătase",
    r3_fact4: "Fără aripi sau antene",

    // Round 4
    r4_title: "Metamorfoza Insectelor",
    r4_text: "Insectele suferă metamorfoză - o transformare miraculoasă! Metamorfoza completă are 4 stadii: ou → larvă → pupă → adult.",
    r4_fact1: "Stadium ou: mic, pus pe plante",
    r4_fact2: "Stadium larvă: mănâncă și crește, schimbă pielea",
    r4_fact3: "Stadium pupă: cocon protector, corpul se reconstruiește",
    r4_fact4: "Stadium adult: complet format, poate să se reproduc",

    // Round 5
    r5_title: "Revizuire Rapidă",

    // Q1
    q1_q: "Câte picioare au insectele?",
    q1_6: "6 picioare",
    q1_8: "8 picioare",
    q1_4: "4 picioare",
    q1_10: "10 picioare",

    // Q2
    q2_q: "Pentru ce folosesc păianjenii 8 picioare?",
    q2_walking: "Mersul și cățărarea",
    q2_flying: "Zborând",
    q2_swimming: "Înot",
    q2_digging: "Săpat",

    // Q3
    q3_q: "Câte părți ale corpului are un păianjen?",
    q3_2: "2 părți ale corpului",
    q3_3: "3 părți ale corpului",
    q3_4: "4 părți ale corpului",
    q3_5: "5 părți ale corpului",

    // Q4
    q4_q: "Ce se întâmplă în stadium pupă?",
    q4_body: "Corpul se reconstruiește într-un adult",
    q4_eating: "Larva continuă să mănânce",
    q4_growing: "Doar devine mai mare",
    q4_dying: "Animalul moare",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Explorer Definition
// ─────────────────────────────────────────────────────────────────────────────

const EXPLORER_DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    {
      type: "mcq",
      infoTitle: "r1_title",
      infoText: "r1_text",
      svg: SVG_R1,
      bulletKeys: ["r1_fact1", "r1_fact2", "r1_fact3", "r1_fact4"],
      questions: [
        {
          question: "q1_q",
          choices: ["q1_6", "q1_8", "q1_4", "q1_10"],
          answer: "q1_6",
        },
      ],
    },
    {
      type: "mcq",
      infoTitle: "r2_title",
      infoText: "r2_text",
      svg: SVG_R2,
      bulletKeys: ["r2_fact1", "r2_fact2", "r2_fact3", "r2_fact4"],
      questions: [
        {
          question: "q2_q",
          choices: ["q2_walking", "q2_flying", "q2_swimming", "q2_digging"],
          answer: "q2_walking",
        },
      ],
    },
    {
      type: "mcq",
      infoTitle: "r3_title",
      infoText: "r3_text",
      svg: SVG_R3,
      bulletKeys: ["r3_fact1", "r3_fact2", "r3_fact3", "r3_fact4"],
      questions: [
        {
          question: "q3_q",
          choices: ["q3_2", "q3_3", "q3_4", "q3_5"],
          answer: "q3_2",
        },
      ],
    },
    {
      type: "mcq",
      infoTitle: "r4_title",
      infoText: "r4_text",
      svg: SVG_R4,
      bulletKeys: ["r4_fact1", "r4_fact2", "r4_fact3", "r4_fact4"],
      questions: [
        {
          question: "q4_q",
          choices: ["q4_body", "q4_eating", "q4_growing", "q4_dying"],
          answer: "q4_body",
        },
      ],
    },
    {
      type: "mcq",
      infoTitle: "r5_title",
      infoText: "r1_text",
      svg: SVG_R1,
      questions: [
        {
          question: "q1_q",
          choices: ["q1_6", "q1_8", "q1_4", "q1_10"],
          answer: "q1_6",
        },
        {
          question: "q2_q",
          choices: ["q2_walking", "q2_flying", "q2_swimming", "q2_digging"],
          answer: "q2_walking",
        },
        {
          question: "q3_q",
          choices: ["q3_2", "q3_3", "q3_4", "q3_5"],
          answer: "q3_2",
        },
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

interface Props {
  color?: string;
  lang?: string;
  onDone?: (score: number, total: number) => void;
}

export default function ArthropodExplorer({ color = "#10B981", lang = "en", onDone }: Props) {
  return <ExplorerEngine def={EXPLORER_DEF} color={color} lang={lang} onDone={onDone} />;
}
