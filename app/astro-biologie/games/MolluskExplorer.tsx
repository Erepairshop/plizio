"use client";
// MolluskExplorer — Grade 6 Biology: Mollusks (Weichtiere)
// 5 rounds: R1 (mollusk body plan), R2 (snails), R3 (worms),
//           R4 (comparing invertebrates), R5 (review quiz)

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
        <linearGradient id="mollusk_body" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E8B4D9" />
          <stop offset="100%" stopColor="#D990CE" />
        </linearGradient>
        <linearGradient id="mollusk_shell" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4A574" />
          <stop offset="100%" stopColor="#B8956A" />
        </linearGradient>
        <linearGradient id="mollusk_bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(150,150,255,0.1)" />
          <stop offset="100%" stopColor="rgba(200,150,200,0.1)" />
        </linearGradient>
      </defs>

      <rect width="240" height="160" fill="url(#mollusk_bg)" />

      {/* Generic mollusk showing soft body + shell */}
      <g>
        {/* Shell (outer protection) */}
        <ellipse cx="120" cy="70" rx="35" ry="40" fill="url(#mollusk_shell)" stroke="#8B7355" strokeWidth="1.5" />
        {/* Shell spiral lines */}
        <path d="M 95 50 Q 105 45 120 45 Q 135 50 140 65 Q 138 80 130 90" stroke="#8B7355" strokeWidth="1" fill="none" opacity="0.5" />
        <path d="M 90 65 Q 95 55 110 50 Q 130 48 140 60" stroke="#8B7355" strokeWidth="0.8" fill="none" opacity="0.4" />

        {/* Soft body (protruding from shell) */}
        <ellipse cx="90" cy="105" rx="18" ry="22" fill="url(#mollusk_body)" stroke="#B565A7" strokeWidth="1" />
        {/* Body texture - wrinkles */}
        <path d="M 80 95 Q 85 100 80 110" stroke="#B565A7" strokeWidth="0.8" fill="none" opacity="0.5" />
        <path d="M 95 95 Q 100 100 95 110" stroke="#B565A7" strokeWidth="0.8" fill="none" opacity="0.5" />
        <path d="M 105 95 Q 105 100 100 110" stroke="#B565A7" strokeWidth="0.8" fill="none" opacity="0.5" />

        {/* Muscular foot (at bottom) */}
        <ellipse cx="90" cy="125" rx="14" ry="12" fill="#D890C8" stroke="#B565A7" strokeWidth="0.8" opacity="0.8" />

        {/* Mantle (soft layer under shell) */}
        <path d="M 110 80 Q 130 75 140 85 Q 145 95 140 105" fill="#E8B4D9" stroke="#B565A7" strokeWidth="0.8" opacity="0.6" />

        {/* Eye (on body) */}
        <circle cx="85" cy="100" r="2" fill="#2C1810" />

        {/* Tentacle/sensory */}
        <path d="M 80 98 Q 70 85 65 70" stroke="#B565A7" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <circle cx="65" cy="70" r="2" fill="#B565A7" />

        {/* Shine on shell */}
        <ellipse cx="110" cy="55" rx="12" ry="15" fill="white" opacity="0.2" />
      </g>
    </svg>
  );
}

function SVG_R2(): React.ReactNode {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <linearGradient id="snail_shell" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4A574" />
          <stop offset="100%" stopColor="#A67C52" />
        </linearGradient>
        <linearGradient id="snail_body" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#B8956A" />
          <stop offset="100%" stopColor="#9B8B7E" />
        </linearGradient>
        <linearGradient id="snail_bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(200,150,100,0.1)" />
          <stop offset="100%" stopColor="rgba(150,150,200,0.1)" />
        </linearGradient>
      </defs>

      <rect width="240" height="160" fill="url(#snail_bg)" />

      {/* Snail showing spiral shell */}
      <g>
        {/* Main spiral shell - multiple rotations */}
        <g transform="translate(85, 60)">
          {/* Outer spiral 1 */}
          <path
            d="M 0 0 Q 25 0 25 25 Q 25 50 0 50 Q -25 50 -25 25 Q -25 0 0 0 Z"
            fill="url(#snail_shell)"
            stroke="#6B5344"
            strokeWidth="1.5"
          />
          {/* Spiral line 1 */}
          <path
            d="M 2 0 Q 23 0 23 22 Q 23 45 2 45 Q -20 45 -20 25 Q -20 2 2 0 Z"
            fill="url(#snail_shell)"
            stroke="#6B5344"
            strokeWidth="1.5"
            opacity="0.7"
          />
          {/* Inner spiral center */}
          <circle cx="0" cy="20" r="8" fill="#8B6F47" opacity="0.8" stroke="#6B5344" strokeWidth="0.5" />

          {/* Shell ridges/growth lines */}
          <path d="M -22 10 Q 0 8 22 12" stroke="#6B5344" strokeWidth="0.8" fill="none" opacity="0.5" />
          <path d="M -18 30 Q 0 28 20 32" stroke="#6B5344" strokeWidth="0.8" fill="none" opacity="0.5" />
        </g>

        {/* Snail body extending from shell */}
        <ellipse cx="120" cy="105" rx="16" ry="20" fill="url(#snail_body)" stroke="#6B5344" strokeWidth="1" />

        {/* Head/face section */}
        <circle cx="130" cy="90" r="10" fill="#9B8B7E" stroke="#6B5344" strokeWidth="0.8" />

        {/* Two eye tentacles (upper pair) */}
        <g>
          <path d="M 125 85 Q 120 70 115 55" stroke="#6B5344" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <circle cx="115" cy="55" r="2.5" fill="#2C1810" />
          <circle cx="115" cy="55" r="1" fill="#4A90E2" opacity="0.8" />
        </g>
        <g>
          <path d="M 135 85 Q 140 70 145 55" stroke="#6B5344" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <circle cx="145" cy="55" r="2.5" fill="#2C1810" />
          <circle cx="145" cy="55" r="1" fill="#4A90E2" opacity="0.8" />
        </g>

        {/* Mouth opening */}
        <ellipse cx="130" cy="95" rx="4" ry="3" fill="#6B5344" opacity="0.6" />

        {/* Lower tentacles (sensory) */}
        <g>
          <path d="M 122 100 L 110 115" stroke="#6B5344" strokeWidth="1.2" fill="none" strokeLinecap="round" />
          <circle cx="110" cy="115" r="1.5" fill="#6B5344" />
        </g>
        <g>
          <path d="M 138 100 L 150 115" stroke="#6B5344" strokeWidth="1.2" fill="none" strokeLinecap="round" />
          <circle cx="150" cy="115" r="1.5" fill="#6B5344" />
        </g>

        {/* Muscular foot (underside) */}
        <ellipse cx="120" cy="125" rx="12" ry="10" fill="#8B7966" stroke="#6B5344" strokeWidth="0.8" opacity="0.7" />

        {/* Slime trail (snails secrete mucus) */}
        <path d="M 140 130 Q 155 135 170 128" stroke="rgba(150,200,255,0.3)" strokeWidth="3" fill="none" opacity="0.5" />
      </g>
    </svg>
  );
}

function SVG_R3(): React.ReactNode {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <linearGradient id="worm_body" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#D4A574" />
          <stop offset="100%" stopColor="#B8956A" />
        </linearGradient>
        <linearGradient id="worm_bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(100,150,100,0.1)" />
          <stop offset="100%" stopColor="rgba(150,100,150,0.1)" />
        </linearGradient>
      </defs>

      <rect width="240" height="160" fill="url(#worm_bg)" />

      {/* Earthworm showing segmented body - cross-section hint */}
      <g>
        {/* Worm body - segmented sections */}
        <g>
          {/* Segment 1 - Head */}
          <circle cx="60" cy="80" r="8" fill="#C19A6B" stroke="#8B6F47" strokeWidth="1" />
          <circle cx="60" cy="80" r="1.5" fill="#2C1810" />

          {/* Segments 2-8 - body rings */}
          <g>
            <ellipse cx="80" cy="80" rx="7.5" ry="9" fill="url(#worm_body)" stroke="#8B6F47" strokeWidth="1" />
            <line x1="72" y1="72" x2="88" y2="72" stroke="#8B6F47" strokeWidth="0.8" opacity="0.5" />
            <line x1="70" y1="80" x2="90" y2="80" stroke="#8B6F47" strokeWidth="1" opacity="0.6" />
            <line x1="72" y1="88" x2="88" y2="88" stroke="#8B6F47" strokeWidth="0.8" opacity="0.5" />
          </g>

          <g>
            <ellipse cx="100" cy="80" rx="7.5" ry="9" fill="url(#worm_body)" stroke="#8B6F47" strokeWidth="1" />
            <line x1="92" y1="72" x2="108" y2="72" stroke="#8B6F47" strokeWidth="0.8" opacity="0.5" />
            <line x1="90" y1="80" x2="110" y2="80" stroke="#8B6F47" strokeWidth="1" opacity="0.6" />
            <line x1="92" y1="88" x2="108" y2="88" stroke="#8B6F47" strokeWidth="0.8" opacity="0.5" />
          </g>

          <g>
            <ellipse cx="120" cy="80" rx="7.5" ry="9" fill="url(#worm_body)" stroke="#8B6F47" strokeWidth="1" />
            <line x1="112" y1="72" x2="128" y2="72" stroke="#8B6F47" strokeWidth="0.8" opacity="0.5" />
            <line x1="110" y1="80" x2="130" y2="80" stroke="#8B6F47" strokeWidth="1" opacity="0.6" />
            <line x1="112" y1="88" x2="128" y2="88" stroke="#8B6F47" strokeWidth="0.8" opacity="0.5" />
          </g>

          <g>
            <ellipse cx="140" cy="80" rx="7.5" ry="9" fill="url(#worm_body)" stroke="#8B6F47" strokeWidth="1" />
            <line x1="132" y1="72" x2="148" y2="72" stroke="#8B6F47" strokeWidth="0.8" opacity="0.5" />
            <line x1="130" y1="80" x2="150" y2="80" stroke="#8B6F47" strokeWidth="1" opacity="0.6" />
            <line x1="132" y1="88" x2="148" y2="88" stroke="#8B6F47" strokeWidth="0.8" opacity="0.5" />
          </g>

          <g>
            <ellipse cx="160" cy="80" rx="7.5" ry="9" fill="url(#worm_body)" stroke="#8B6F47" strokeWidth="1" />
            <line x1="152" y1="72" x2="168" y2="72" stroke="#8B6F47" strokeWidth="0.8" opacity="0.5" />
            <line x1="150" y1="80" x2="170" y2="80" stroke="#8B6F47" strokeWidth="1" opacity="0.6" />
            <line x1="152" y1="88" x2="168" y2="88" stroke="#8B6F47" strokeWidth="0.8" opacity="0.5" />
          </g>

          {/* Tail segment */}
          <circle cx="175" cy="80" r="7" fill="#A67C52" stroke="#8B6F47" strokeWidth="1" />
        </g>

        {/* Cross-section view (lower) showing internal structure */}
        <g transform="translate(0, 50)">
          <rect x="50" y="80" width="140" height="40" rx="20" fill="none" stroke="#8B6F47" strokeWidth="1.5" strokeDasharray="3,2" />

          {/* Outer ring - cuticle */}
          <circle cx="120" cy="100" r="20" fill="none" stroke="#8B6F47" strokeWidth="1" opacity="0.6" />
          {/* Muscle layer */}
          <circle cx="120" cy="100" r="16" fill="none" stroke="#A67C52" strokeWidth="1" opacity="0.5" />
          {/* Body cavity */}
          <circle cx="120" cy="100" r="10" fill="rgba(200,180,150,0.3)" stroke="#C19A6B" strokeWidth="0.8" />
          {/* Central nerve cord */}
          <line x1="115" y1="100" x2="125" y2="100" stroke="#B8956A" strokeWidth="1.5" />

          {/* Setae (bristles) pointers */}
          <line x1="50" y1="100" x2="40" y2="85" stroke="#8B6F47" strokeWidth="1" />
          <circle cx="40" cy="85" r="1.5" fill="#8B6F47" />
        </g>
      </g>
    </svg>
  );
}

function SVG_R4(): React.ReactNode {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <linearGradient id="comp_bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(150,150,200,0.1)" />
          <stop offset="100%" stopColor="rgba(200,150,150,0.1)" />
        </linearGradient>
      </defs>

      <rect width="240" height="160" fill="url(#comp_bg)" />

      {/* Comparison: Arthropod (insect) vs Mollusk vs Worm */}

      {/* Left: Arthropod/Insect silhouette */}
      <g>
        {/* Head */}
        <circle cx="45" cy="40" r="7" fill="#FFA500" stroke="#8B5A00" strokeWidth="1" />
        {/* Thorax */}
        <ellipse cx="45" cy="60" r="8" ry="12" fill="#FFD700" stroke="#8B5A00" strokeWidth="1" />
        {/* Abdomen */}
        <ellipse cx="45" cy="85" r="10" ry="15" fill="#FFA500" stroke="#8B5A00" strokeWidth="1" />
        {/* 6 Legs */}
        <line x1="35" y1="55" x2="20" y2="50" stroke="#8B5A00" strokeWidth="1.5" />
        <line x1="55" y1="55" x2="70" y2="50" stroke="#8B5A00" strokeWidth="1.5" />
        <line x1="35" y1="70" x2="15" y2="75" stroke="#8B5A00" strokeWidth="1.5" />
        <line x1="55" y1="70" x2="75" y2="75" stroke="#8B5A00" strokeWidth="1.5" />
        <line x1="38" y1="92" x2="20" y2="105" stroke="#8B5A00" strokeWidth="1.5" />
        <line x1="52" y1="92" x2="70" y2="105" stroke="#8B5A00" strokeWidth="1.5" />
        {/* Wings hint */}
        <path d="M 30 55 Q 15 45 20 70" fill="none" stroke="#87CEEB" strokeWidth="1.5" opacity="0.6" />
        <path d="M 60 55 Q 75 45 70 70" fill="none" stroke="#87CEEB" strokeWidth="1.5" opacity="0.6" />
        {/* Label */}
        <text x="45" y="135" fontSize="8" fontWeight="bold" textAnchor="middle" fill="#8B5A00" fontFamily="system-ui">
          INSECT
        </text>
      </g>

      {/* Center: Mollusk/Snail silhouette */}
      <g>
        {/* Shell */}
        <circle cx="120" cy="50" r="18" fill="#D4A574" stroke="#8B6F47" strokeWidth="1" />
        {/* Body */}
        <ellipse cx="120" cy="85" rx="10" ry="20" fill="#D890C8" stroke="#B565A7" strokeWidth="1" />
        {/* Tentacles */}
        <path d="M 115 75 Q 110 60 105 45" stroke="#B565A7" strokeWidth="1.2" fill="none" />
        <path d="M 125 75 Q 130 60 135 45" stroke="#B565A7" strokeWidth="1.2" fill="none" />
        {/* Foot */}
        <ellipse cx="120" cy="105" rx="12" ry="8" fill="#C19A6B" stroke="#8B6F47" strokeWidth="0.8" />
        {/* Label */}
        <text x="120" y="135" fontSize="8" fontWeight="bold" textAnchor="middle" fill="#8B6F47" fontFamily="system-ui">
          MOLLUSK
        </text>
      </g>

      {/* Right: Worm/Segmented */}
      <g>
        {/* Worm body - segments */}
        <ellipse cx="185" cy="55" rx="6" ry="10" fill="#C19A6B" stroke="#8B6F47" strokeWidth="1" />
        <ellipse cx="195" cy="58" rx="6" ry="10" fill="#B8956A" stroke="#8B6F47" strokeWidth="1" />
        <ellipse cx="205" cy="62" rx="6" ry="10" fill="#C19A6B" stroke="#8B6F47" strokeWidth="1" />
        <ellipse cx="195" cy="75" rx="6" ry="10" fill="#B8956A" stroke="#8B6F47" strokeWidth="1" />
        <ellipse cx="185" cy="78" rx="6" ry="10" fill="#C19A6B" stroke="#8B6F47" strokeWidth="1" />
        <ellipse cx="175" cy="75" rx="6" ry="10" fill="#B8956A" stroke="#8B6F47" strokeWidth="1" />

        {/* Curve to show segmentation */}
        <path d="M 175 70 Q 165 60 160 50" stroke="#8B6F47" strokeWidth="1.5" fill="none" />
        <path d="M 205 70 Q 215 60 220 50" stroke="#8B6F47" strokeWidth="1.5" fill="none" />

        {/* Label */}
        <text x="190" y="135" fontSize="8" fontWeight="bold" textAnchor="middle" fill="#8B6F47" fontFamily="system-ui">
          WORM
        </text>
      </g>
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// LABELS — all content in 4 languages
// ─────────────────────────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    // Round 1: Mollusk body plan
    r1_title: "What Are Mollusks?",
    r1_text: "Mollusks are soft-bodied animals (Weichtiere). They have a mantle (soft skin), a muscular foot for movement, and many have a shell. Examples: snails, clams, octopuses.",
    r1_fact1: "Soft body covered by a mantle",
    r1_fact2: "Muscular foot enables movement",
    r1_fact3: "Many mollusks have shells for protection",
    r1_fact4: "Most mollusks live in water or damp soil",

    // Round 2: Snails
    r2_title: "Snails: Shell Masters",
    r2_text: "Snails carry spiral shells on their backs. They have two pairs of tentacles (upper ones have eyes), and they secrete mucus (slime) to move smoothly. Garden snails are common examples.",
    r2_fact1: "Spiral shell grows as snail grows",
    r2_fact2: "Upper tentacles have eyes at tips",
    r2_fact3: "Lower tentacles sense smell",
    r2_fact4: "Slime trail reduces friction",

    // Round 3: Worms/Earthworms
    r3_title: "Worms: Tiny Engineers",
    r3_text: "Earthworms have long, segmented bodies (no legs!). Each segment contains muscles and organs. Worms tunnel through soil, aerating it and recycling nutrients. They're vital for soil health!",
    r3_fact1: "Segmented body with 100+ rings",
    r3_fact2: "No bones, legs, or eyes",
    r3_fact3: "Skin must stay moist for breathing",
    r3_fact4: "Tunnel through soil, improving fertility",

    // Round 4: Comparing Invertebrates
    r4_title: "Comparing Invertebrates",
    r4_text: "Insects, mollusks, and worms are all invertebrates (no backbone), but they have very different body plans. Insects have 6 legs, mollusks are soft with shells, worms are segmented.",
    r4_fact1: "Insects: exoskeleton, 6 legs, wings",
    r4_fact2: "Mollusks: soft body, muscular foot, mantle",
    r4_fact3: "Worms: segmented, no legs, moist skin",
    r4_fact4: "All are invertebrates without backbones",

    // Round 5: Review Quiz
    r5_title: "Quick Review",

    // Q1
    q1_q: "What is a mollusk's mantle?",
    q1_soft: "Soft skin covering the body",
    q1_shell: "The outer shell",
    q1_foot: "The muscular foot",
    q1_organ: "An internal organ",

    // Q2
    q2_q: "Where are a snail's eyes located?",
    q2_tips: "At the tips of upper tentacles",
    q2_head: "On top of head",
    q2_shell: "In the shell",
    q2_body: "Along the body",

    // Q3
    q3_q: "How do earthworms breathe?",
    q3_skin: "Through their moist skin",
    q3_gills: "With gills",
    q3_lungs: "With lungs",
    q3_holes: "Through body holes",

    // Q4
    q4_q: "Which has 6 legs?",
    q4_insect: "Insects",
    q4_mollusk: "Mollusks",
    q4_worm: "Worms",
    q4_snail: "Snails",
  },

  de: {
    // Round 1
    r1_title: "Was sind Weichtiere?",
    r1_text: "Weichtiere sind Tiere mit weichem Körper. Sie haben einen Mantel (weiche Haut), einen Muskel-Fuß zum Bewegen, und viele haben eine Schale. Beispiele: Schnecken, Muscheln, Kraken.",
    r1_fact1: "Weicher Körper, bedeckt von Mantel",
    r1_fact2: "Muskulöser Fuß ermöglicht Bewegung",
    r1_fact3: "Viele Weichtiere haben Schalen",
    r1_fact4: "Die meisten leben im Wasser oder feuchtem Boden",

    // Round 2
    r2_title: "Schnecken: Schalen-Meister",
    r2_text: "Schnecken tragen spiralförmige Schalen auf dem Rücken. Sie haben zwei Paar Fühler (obere haben Augen), und sie sondern Schleim ab zum glatten Gleiten. Gartenschnecken sind bekannte Beispiele.",
    r2_fact1: "Spiralschale wächst mit der Schnecke",
    r2_fact2: "Obere Fühler haben Augen an den Spitzen",
    r2_fact3: "Untere Fühler riechen",
    r2_fact4: "Schleimspur reduziert Reibung",

    // Round 3
    r3_title: "Würmer: Kleine Ingenieure",
    r3_text: "Regenwürmer haben lange, segmentierte Körper (keine Beine!). Jedes Segment enthält Muskeln und Organe. Würmer graben durch Boden und lockern ihn auf. Sie sind vital für die Bodengesundheit!",
    r3_fact1: "Segmentierter Körper mit 100+ Ringen",
    r3_fact2: "Keine Knochen, Beine oder Augen",
    r3_fact3: "Haut muss feucht bleiben zum Atmen",
    r3_fact4: "Graben den Boden auf und verbessern ihn",

    // Round 4
    r4_title: "Wirbellose vergleichen",
    r4_text: "Insekten, Weichtiere und Würmer sind alle wirbellos (kein Rückgrat), aber haben sehr unterschiedliche Körperpläne. Insekten haben 6 Beine, Weichtiere sind weich mit Schalen, Würmer sind segmentiert.",
    r4_fact1: "Insekten: Außenskelett, 6 Beine, Flügel",
    r4_fact2: "Weichtiere: weicher Körper, Fuß, Mantel",
    r4_fact3: "Würmer: segmentiert, keine Beine, feuchte Haut",
    r4_fact4: "Alle sind wirbellos ohne Rückgrat",

    // Round 5
    r5_title: "Schnelle Wiederholung",

    // Q1
    q1_q: "Was ist der Mantel eines Weichtieres?",
    q1_soft: "Weiche Haut, die den Körper bedeckt",
    q1_shell: "Die äußere Schale",
    q1_foot: "Der Muskel-Fuß",
    q1_organ: "Ein inneres Organ",

    // Q2
    q2_q: "Wo sind die Augen einer Schnecke?",
    q2_tips: "An den Spitzen der oberen Fühler",
    q2_head: "Oben auf dem Kopf",
    q2_shell: "In der Schale",
    q2_body: "Entlang des Körpers",

    // Q3
    q3_q: "Wie atmen Regenwürmer?",
    q3_skin: "Durch ihre feuchte Haut",
    q3_gills: "Mit Kiemen",
    q3_lungs: "Mit Lungen",
    q3_holes: "Durch Körperlöcher",

    // Q4
    q4_q: "Welches hat 6 Beine?",
    q4_insect: "Insekten",
    q4_mollusk: "Weichtiere",
    q4_worm: "Würmer",
    q4_snail: "Schnecken",
  },

  hu: {
    // Round 1
    r1_title: "Mit a puhatestűek?",
    r1_text: "A puhatestűek puha testű állatok. Van egy köpenyrétegük (puha bőr), egy izmos lábuk a mozgáshoz, és sok fajon van héjuk. Például: csigák, kagylók, polipok.",
    r1_fact1: "Puha test, köpenyréteg által fedett",
    r1_fact2: "Izmos láb lehetővé teszi a mozgást",
    r1_fact3: "Sok puhatestűnek van héja a védelemhez",
    r1_fact4: "A legtöbb vízben vagy nedves talajban él",

    // Round 2
    r2_title: "Csigák: Héj-Mesterek",
    r2_text: "A csigák csigavonal alakú héjat hordanak a hátuk. Két pár csápjuk van (a felsőkön szemek vannak), és nyálka-szekréciót választanak ki a sima csúszáshoz. A kertcsigák tipikus példák.",
    r2_fact1: "Csigavonal héj a csigával növekszik",
    r2_fact2: "Felső csápok végén szemek",
    r2_fact3: "Alsó csápok szaglást éreznek",
    r2_fact4: "Nyálka nyom csökkenti a súrlódást",

    // Round 3
    r3_title: "Férgek: Apró Mérnökök",
    r3_text: "Az egerek hosszú, szegmentált testtel rendelkeznek (nincs lábuk!). Minden szegmens izomból és szervekből áll. A férgek átfúrják a talajt, szellőztetik és tápanyagokat hasznosítanak. Vitális a talajegészséghez!",
    r3_fact1: "Szegmentált test 100+ gyűrűvel",
    r3_fact2: "Nincs csont, láb vagy szem",
    r3_fact3: "A bőrnek nedvesnek kell maradnia a légzéshez",
    r3_fact4: "A talajban ásnak és jobbá teszik",

    // Round 4
    r4_title: "Gerinctelenek Összehasonlítása",
    r4_text: "A rovarok, puhatestűek és férgek mind gerinctelenek (nincs gerincük), de nagyon eltérő testfelépítésűek. Rovaroknak 6 lábuk van, puhatestűeknek puha testük és héjuk van, férgeknek szegmentált testük van.",
    r4_fact1: "Rovarok: kemény test, 6 láb, szárnyak",
    r4_fact2: "Puhatestűek: puha test, láb, köpeny",
    r4_fact3: "Férgek: szegmentált, nincs láb, nedves bőr",
    r4_fact4: "Minden gerinctelen gerincük nélkül",

    // Round 5
    r5_title: "Gyors Ismétlés",

    // Q1
    q1_q: "Mi a puhatestű köpenye?",
    q1_soft: "Puha bőr, amely a testet fedezi",
    q1_shell: "A külső héj",
    q1_foot: "Az izmos láb",
    q1_organ: "Egy belső szerv",

    // Q2
    q2_q: "Hol vannak a csiga szemei?",
    q2_tips: "A felső csápok végén",
    q2_head: "A fej tetején",
    q2_shell: "A héjon belül",
    q2_body: "A test mentén",

    // Q3
    q3_q: "Hogyan lélegzik az egerek?",
    q3_skin: "Az nedves bőrükön keresztül",
    q3_gills: "Kopoltyúkkal",
    q3_lungs: "Tüdővel",
    q3_holes: "Testnyílásokon keresztül",

    // Q4
    q4_q: "Melyik van 6 lábbal?",
    q4_insect: "Rovarok",
    q4_mollusk: "Puhatestűek",
    q4_worm: "Férgek",
    q4_snail: "Csigák",
  },

  ro: {
    // Round 1
    r1_title: "Ce sunt moluștele?",
    r1_text: "Moluștele sunt animale cu corp moale (Weichtiere). Au un manta (piele moale), un picior muscular pentru mișcare, și multe au o coajă. Exemple: melci, midii, caracatițe.",
    r1_fact1: "Corp moale acoperit de manta",
    r1_fact2: "Picior muscular permite mișcarea",
    r1_fact3: "Multe moluște au coji pentru protecție",
    r1_fact4: "Majoritatea moluștelor trăiesc în apă sau sol umed",

    // Round 2
    r2_title: "Melci: Stăpâni ai Cojii",
    r2_text: "Melcii poartă coji în spirală pe spate. Au două perechi de tentacule (cele superioare au ochi), și secretă mucus (bălbâituri) pentru a se deplasa lin. Melcii de grădină sunt exemple comune.",
    r2_fact1: "Coja în spirală crește cu melcul",
    r2_fact2: "Tentaculele superioare au ochi la vârfuri",
    r2_fact3: "Tentaculele inferioare simt mirosul",
    r2_fact4: "Urma de mucus reduce fricțiunea",

    // Round 3
    r3_title: "Viermi: Mici Ingineri",
    r3_text: "Viermii de pământ au corpuri lungi și segmentate (fără picioare!). Fiecare segment conține mușchi și organe. Viermii săpează prin pământ, aerând și reciclând nutrienți. Sunt vitali pentru sănătatea solului!",
    r3_fact1: "Corp segmentat cu 100+ inele",
    r3_fact2: "Fără oase, picioare sau ochi",
    r3_fact3: "Pielea trebuie să rămână umedă pentru respirație",
    r3_fact4: "Săpează prin sol, îmbunătățind fertilitatea",

    // Round 4
    r4_title: "Comparație de Nevertebrate",
    r4_text: "Insectele, moluștele și viermii sunt toți nevertebrate (fără coloană vertebrală), dar au planuri de corp foarte diferite. Insectele au 6 picioare, moluștele sunt moi cu coji, viermii sunt segmentați.",
    r4_fact1: "Insecte: exosquelete, 6 picioare, aripi",
    r4_fact2: "Moluște: corp moale, picior, mantă",
    r4_fact3: "Viermi: segmentați, fără picioare, piele umedă",
    r4_fact4: "Toți sunt nevertebrate fără coloană vertebrală",

    // Round 5
    r5_title: "Revizuire Rapidă",

    // Q1
    q1_q: "Ce este manta unei moluște?",
    q1_soft: "Piele moale care acoperă corpul",
    q1_shell: "Coaja exterioară",
    q1_foot: "Piciorul muscular",
    q1_organ: "Un organ intern",

    // Q2
    q2_q: "Unde sunt ochii unui melc?",
    q2_tips: "La vârfurile tentaculelor superioare",
    q2_head: "În vârful capului",
    q2_shell: "În coajă",
    q2_body: "De-a lungul corpului",

    // Q3
    q3_q: "Cum respiră viermii de pământ?",
    q3_skin: "Prin pielea lor umedă",
    q3_gills: "Cu branhii",
    q3_lungs: "Cu plămâni",
    q3_holes: "Prin găuri corporale",

    // Q4
    q4_q: "Care are 6 picioare?",
    q4_insect: "Insecte",
    q4_mollusk: "Moluște",
    q4_worm: "Viermi",
    q4_snail: "Melci",
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
          choices: ["q1_soft", "q1_shell", "q1_foot", "q1_organ"],
          answer: "q1_soft",
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
          choices: ["q2_tips", "q2_head", "q2_shell", "q2_body"],
          answer: "q2_tips",
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
          choices: ["q3_skin", "q3_gills", "q3_lungs", "q3_holes"],
          answer: "q3_skin",
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
          choices: ["q4_insect", "q4_mollusk", "q4_worm", "q4_snail"],
          answer: "q4_insect",
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
          choices: ["q1_soft", "q1_shell", "q1_foot", "q1_organ"],
          answer: "q1_soft",
        },
        {
          question: "q2_q",
          choices: ["q2_tips", "q2_head", "q2_shell", "q2_body"],
          answer: "q2_tips",
        },
        {
          question: "q3_q",
          choices: ["q3_skin", "q3_gills", "q3_lungs", "q3_holes"],
          answer: "q3_skin",
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

export default function MolluskExplorer({ color = "#EC4899", lang = "en", onDone }: Props) {
  return <ExplorerEngine def={EXPLORER_DEF} color={color} lang={lang} onDone={onDone} />;
}
