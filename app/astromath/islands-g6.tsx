// app/astromath/islands-g6.tsx
// Floating fantasy island SVG illustrations for the AstroMath G6 map
// Each island has a unique visual theme matching its Grade 6 math concept

import React from "react";

type IP = { size?: number };

// i1 — NegativeNumbers (#6366F1 indigo) — thermometer below zero, number line with negatives, icy crystals
export function G6IslandNegativeNumbers({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Shadow beneath */}
      <ellipse cx="40" cy="73" rx="20" ry="4" fill="rgba(99,102,241,0.18)" />
      {/* Rocky underside */}
      <path d="M19,48 Q22,62 30,60 Q40,65 50,60 Q58,62 61,48 Q55,56 40,54 Q25,56 19,48Z" fill="#1E1B4B" />
      <path d="M23,50 Q28,60 40,57 Q52,60 57,50 Q50,58 40,55 Q30,58 23,50Z" fill="#14103A" />
      {/* Icy indigo surface */}
      <ellipse cx="40" cy="44" rx="22" ry="10" fill="#3730A3" />
      <ellipse cx="40" cy="42" rx="22" ry="9" fill="#4338CA" />
      {/* Surface bumps */}
      <ellipse cx="24" cy="40" rx="5" ry="3" fill="#4338CA" />
      <ellipse cx="56" cy="40" rx="5" ry="3" fill="#4338CA" />
      {/* Number line with negatives */}
      <line x1="21" y1="37" x2="59" y2="37" stroke="#6366F1" strokeWidth="1.5" />
      {/* Arrow tips */}
      <polygon points="20,37 23,35.5 23,38.5" fill="#6366F1" />
      <polygon points="60,37 57,35.5 57,38.5" fill="#6366F1" />
      {/* Tick marks */}
      <line x1="28" y1="35" x2="28" y2="39" stroke="#6366F1" strokeWidth="1" />
      <line x1="34" y1="35" x2="34" y2="39" stroke="#6366F1" strokeWidth="1" />
      <line x1="40" y1="34" x2="40" y2="40" stroke="#A5B4FC" strokeWidth="1.5" />
      <line x1="46" y1="35" x2="46" y2="39" stroke="#6366F1" strokeWidth="1" />
      <line x1="52" y1="35" x2="52" y2="39" stroke="#6366F1" strokeWidth="1" />
      {/* Number labels */}
      <text x="28" y="44" textAnchor="middle" fontSize="5" fill="#A5B4FC" fontWeight="bold">-2</text>
      <text x="34" y="44" textAnchor="middle" fontSize="5" fill="#A5B4FC" fontWeight="bold">-1</text>
      <text x="40" y="44" textAnchor="middle" fontSize="5" fill="#E0E7FF" fontWeight="bold">0</text>
      <text x="46" y="44" textAnchor="middle" fontSize="5" fill="#A5B4FC" fontWeight="bold">1</text>
      <text x="52" y="44" textAnchor="middle" fontSize="5" fill="#A5B4FC" fontWeight="bold">2</text>
      {/* Thermometer body */}
      <rect x="36" y="16" width="5" height="14" rx="2.5" fill="rgba(99,102,241,0.2)" stroke="#6366F1" strokeWidth="1.2" />
      {/* Thermometer fill — below zero (blue-cold) */}
      <rect x="37.5" y="25" width="2" height="5" rx="1" fill="#818CF8" />
      {/* Bulb */}
      <circle cx="38.5" cy="31" r="3" fill="#6366F1" />
      {/* Degree markers */}
      <line x1="41" y1="20" x2="43" y2="20" stroke="#6366F1" strokeWidth="0.8" />
      <line x1="41" y1="23" x2="43" y2="23" stroke="#6366F1" strokeWidth="0.8" />
      <line x1="41" y1="26" x2="43" y2="26" stroke="#6366F1" strokeWidth="0.8" />
      {/* Icy crystal left */}
      <polygon points="24,26 27,18 30,26" fill="rgba(99,102,241,0.3)" stroke="#818CF8" strokeWidth="1" />
      <polygon points="25.5,22 27,17 28.5,22" fill="rgba(165,180,252,0.5)" stroke="#A5B4FC" strokeWidth="0.8" />
      {/* Icy crystal right */}
      <polygon points="50,28 53,20 56,28" fill="rgba(99,102,241,0.3)" stroke="#818CF8" strokeWidth="1" />
      <polygon points="51.5,24 53,19 54.5,24" fill="rgba(165,180,252,0.5)" stroke="#A5B4FC" strokeWidth="0.8" />
      {/* Floating minus label */}
      <text x="27" y="14" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#6366F1" opacity="0.85">−</text>
    </svg>
  );
}

// i2 — FractionsPro (#8B5CF6 violet) — complex pizza fractions, fraction multiplication
export function G6IslandFractionsPro({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Shadow */}
      <ellipse cx="40" cy="73" rx="20" ry="4" fill="rgba(139,92,246,0.18)" />
      {/* Rocky underside */}
      <path d="M19,47 Q22,62 30,60 Q40,65 50,60 Q58,62 61,47 Q54,56 40,54 Q25,56 19,47Z" fill="#2E1065" />
      <path d="M23,50 Q28,60 40,57 Q52,60 57,50 Q50,58 40,55 Q30,58 23,50Z" fill="#1E0A40" />
      {/* Violet surface */}
      <ellipse cx="40" cy="44" rx="22" ry="9" fill="#6D28D9" />
      <ellipse cx="40" cy="42" rx="22" ry="8.5" fill="#7C3AED" />
      {/* Surface bumps */}
      <ellipse cx="24" cy="40" rx="5" ry="3" fill="#7C3AED" />
      <ellipse cx="56" cy="40" rx="5" ry="3" fill="#7C3AED" />
      {/* Pizza circle — left */}
      <circle cx="27" cy="29" r="9" fill="rgba(139,92,246,0.15)" stroke="#8B5CF6" strokeWidth="1.3" />
      {/* Pizza slices — dividing lines */}
      <line x1="27" y1="20" x2="27" y2="38" stroke="#8B5CF6" strokeWidth="1.2" />
      <line x1="18" y1="29" x2="36" y2="29" stroke="#8B5CF6" strokeWidth="1.2" />
      <line x1="20.5" y1="22.5" x2="33.5" y2="35.5" stroke="#8B5CF6" strokeWidth="0.8" />
      {/* 3 slices filled */}
      <path d="M27,29 L27,20 A9,9,0,0,1,35.5,33.5 Z" fill="rgba(139,92,246,0.45)" />
      <path d="M27,29 L35.5,33.5 A9,9,0,0,1,18,33.5 Z" fill="rgba(139,92,246,0.35)" />
      {/* Fraction label under pizza */}
      <text x="27" y="42" textAnchor="middle" fontSize="5.5" fill="#C4B5FD" fontWeight="bold">3/6</text>
      {/* Multiplication × sign in centre */}
      <text x="42" y="31" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#8B5CF6">×</text>
      {/* Second fraction bar — right */}
      <line x1="50" y1="26" x2="62" y2="26" stroke="#A78BFA" strokeWidth="1.5" />
      <text x="56" y="24" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#C4B5FD">2</text>
      <text x="56" y="33" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#C4B5FD">3</text>
      {/* Floating sparkle dots */}
      <circle cx="22" cy="17" r="1.5" fill="#8B5CF6" opacity="0.7" />
      <circle cx="58" cy="18" r="1.5" fill="#8B5CF6" opacity="0.7" />
      <circle cx="40" cy="15" r="1" fill="#C4B5FD" opacity="0.6" />
    </svg>
  );
}

// i3 — Ratios (#10B981 emerald) — balance scale, ratio labels, proportion arrows
export function G6IslandRatios({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Shadow */}
      <ellipse cx="40" cy="73" rx="20" ry="4" fill="rgba(16,185,129,0.18)" />
      {/* Rocky underside */}
      <path d="M19,48 Q22,63 31,60 Q40,65 49,60 Q58,63 61,48 Q54,57 40,54 Q26,57 19,48Z" fill="#064E3B" />
      <path d="M23,51 Q29,61 40,58 Q51,61 57,51 Q50,59 40,56 Q30,59 23,51Z" fill="#022C22" />
      {/* Emerald surface */}
      <ellipse cx="40" cy="44" rx="22" ry="9" fill="#059669" />
      <ellipse cx="40" cy="42" rx="22" ry="8.5" fill="#10B981" />
      {/* Surface bumps */}
      <ellipse cx="24" cy="40" rx="5" ry="3" fill="#10B981" />
      <ellipse cx="56" cy="40" rx="5" ry="3" fill="#10B981" />
      {/* Balance beam pole */}
      <line x1="40" y1="18" x2="40" y2="36" stroke="#10B981" strokeWidth="1.8" strokeLinecap="round" />
      {/* Pivot triangle */}
      <polygon points="40,37 37,41 43,41" fill="#34D399" />
      {/* Balance beam — tilted slightly left (3 heavier than 2 side) */}
      <line x1="22" y1="22" x2="58" y2="25" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
      {/* Left pan chain */}
      <line x1="22" y1="22" x2="20" y2="27" stroke="#6EE7B7" strokeWidth="1" />
      <line x1="22" y1="22" x2="24" y2="27" stroke="#6EE7B7" strokeWidth="1" />
      {/* Left pan */}
      <path d="M18,27 Q22,30 26,27" fill="none" stroke="#10B981" strokeWidth="1.5" />
      {/* Left: 3 dots */}
      <circle cx="20" cy="27" r="2" fill="#34D399" opacity="0.9" />
      <circle cx="24" cy="27" r="2" fill="#34D399" opacity="0.9" />
      <circle cx="22" cy="24.5" r="2" fill="#34D399" opacity="0.85" />
      {/* Right pan chain */}
      <line x1="58" y1="25" x2="56" y2="30" stroke="#6EE7B7" strokeWidth="1" />
      <line x1="58" y1="25" x2="60" y2="30" stroke="#6EE7B7" strokeWidth="1" />
      {/* Right pan */}
      <path d="M54,30 Q58,33 62,30" fill="none" stroke="#10B981" strokeWidth="1.5" />
      {/* Right: 2 dots */}
      <circle cx="57" cy="30" r="2" fill="#34D399" opacity="0.9" />
      <circle cx="61" cy="30" r="2" fill="#34D399" opacity="0.9" />
      {/* "3:5" ratio label */}
      <text x="40" y="15" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#10B981">3:5</text>
      {/* Proportion arrow */}
      <text x="25" y="44" textAnchor="middle" fontSize="5.5" fill="#6EE7B7" opacity="0.9">∝</text>
    </svg>
  );
}

// i4 — Percentages (#EC4899 pink) — percent bar filling up, large %, pie chart 75%
export function G6IslandPercentages({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Shadow */}
      <ellipse cx="40" cy="73" rx="20" ry="4" fill="rgba(236,72,153,0.18)" />
      {/* Rocky underside */}
      <path d="M19,47 Q22,62 30,60 Q40,65 50,60 Q58,62 61,47 Q54,56 40,54 Q26,56 19,47Z" fill="#500724" />
      <path d="M23,50 Q28,60 40,57 Q52,60 57,50 Q50,58 40,55 Q30,58 23,50Z" fill="#36061A" />
      {/* Pink surface */}
      <ellipse cx="40" cy="44" rx="22" ry="9" fill="#BE185D" />
      <ellipse cx="40" cy="42" rx="22" ry="8.5" fill="#DB2777" />
      {/* Surface bumps */}
      <ellipse cx="24" cy="40" rx="5" ry="3" fill="#DB2777" />
      <ellipse cx="56" cy="40" rx="5" ry="3" fill="#DB2777" />
      {/* Percentage bar background */}
      <rect x="21" y="34" width="30" height="6" rx="3" fill="rgba(236,72,153,0.2)" stroke="#EC4899" strokeWidth="1" />
      {/* Percentage bar fill — 75% */}
      <rect x="21" y="34" width="22.5" height="6" rx="3" fill="rgba(236,72,153,0.7)" />
      {/* 75% label on bar */}
      <text x="28" y="39" textAnchor="middle" fontSize="4.5" fontWeight="bold" fill="#FCE7F3">75%</text>
      {/* Mini pie chart — 75% filled */}
      <circle cx="57" cy="29" r="8" fill="rgba(236,72,153,0.15)" stroke="#EC4899" strokeWidth="1.2" />
      {/* 75% arc path (270 degrees) — from top, clockwise */}
      <path d="M57,21 A8,8,0,1,1,49,29 Z" fill="rgba(236,72,153,0.6)" />
      {/* Pie centre dot */}
      <circle cx="57" cy="29" r="1.5" fill="#EC4899" />
      {/* Large % symbol floating */}
      <text x="34" y="25" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#EC4899" opacity="0.9">%</text>
      {/* Small sparkles */}
      <circle cx="23" cy="18" r="1.5" fill="#EC4899" opacity="0.7" />
      <circle cx="26" cy="22" r="1" fill="#F9A8D4" opacity="0.6" />
      <circle cx="59" cy="16" r="1.5" fill="#EC4899" opacity="0.7" />
    </svg>
  );
}

// i5 — Speed (#14B8A6 teal) — rocket with speed lines, km/h label, distance formula
export function G6IslandSpeed({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Shadow */}
      <ellipse cx="40" cy="73" rx="20" ry="4" fill="rgba(20,184,166,0.18)" />
      {/* Rocky underside */}
      <path d="M19,48 Q22,63 31,60 Q40,65 49,60 Q58,63 61,48 Q54,57 40,54 Q26,57 19,48Z" fill="#042F2E" />
      <path d="M23,51 Q29,61 40,58 Q51,61 57,51 Q50,59 40,56 Q30,59 23,51Z" fill="#021A1A" />
      {/* Teal surface */}
      <ellipse cx="40" cy="44" rx="22" ry="9" fill="#0D9488" />
      <ellipse cx="40" cy="42" rx="22" ry="8.5" fill="#14B8A6" />
      {/* Surface bumps */}
      <ellipse cx="24" cy="40" rx="5" ry="3" fill="#14B8A6" />
      <ellipse cx="56" cy="40" rx="5" ry="3" fill="#14B8A6" />
      {/* Rocket body (pointing right, flying) */}
      <path d="M30,30 Q38,23 46,28 L44,34 Q38,37 30,34 Z" fill="rgba(20,184,166,0.5)" stroke="#14B8A6" strokeWidth="1.2" />
      {/* Rocket nose */}
      <path d="M43,26 Q48,27 46,31" fill="#2DD4BF" stroke="#14B8A6" strokeWidth="0.8" />
      {/* Rocket window */}
      <circle cx="38" cy="30" r="2.5" fill="rgba(20,184,166,0.3)" stroke="#5EEAD4" strokeWidth="1" />
      {/* Rocket flame */}
      <path d="M30,31 Q25,30 22,33 Q25,35 30,33" fill="rgba(251,146,60,0.8)" />
      <path d="M30,31 Q24,31 21,34 Q24,36 30,33" fill="rgba(253,186,116,0.6)" />
      {/* Speed lines */}
      <line x1="20" y1="27" x2="29" y2="27" stroke="#14B8A6" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
      <line x1="18" y1="30" x2="29" y2="30" stroke="#14B8A6" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
      <line x1="20" y1="33" x2="29" y2="33" stroke="#14B8A6" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      {/* km/h label */}
      <text x="46" y="22" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#14B8A6">km/h</text>
      {/* Distance formula */}
      <text x="54" y="32" textAnchor="middle" fontSize="5.5" fontWeight="bold" fill="#5EEAD4">d=v·t</text>
      {/* Speed arc indicator */}
      <path d="M52,35 A6,6,0,0,1,64,38" fill="none" stroke="#14B8A6" strokeWidth="1.2" strokeDasharray="2 1.5" />
      <polygon points="64,38 61,36 63,40" fill="#14B8A6" />
    </svg>
  );
}

// i6 — Algebra (#3B82F6 blue) — x= equation, variable letters, balance equation
export function G6IslandAlgebra({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Shadow */}
      <ellipse cx="40" cy="73" rx="20" ry="4" fill="rgba(59,130,246,0.18)" />
      {/* Rocky underside */}
      <path d="M19,48 Q22,63 31,60 Q40,65 49,60 Q58,63 61,48 Q54,57 40,54 Q26,57 19,48Z" fill="#1E3A5F" />
      <path d="M23,51 Q29,61 40,58 Q51,61 57,51 Q50,59 40,56 Q30,59 23,51Z" fill="#112240" />
      {/* Blue surface */}
      <ellipse cx="40" cy="44" rx="22" ry="9" fill="#1D4ED8" />
      <ellipse cx="40" cy="42" rx="22" ry="8.5" fill="#2563EB" />
      {/* Surface bumps */}
      <ellipse cx="24" cy="40" rx="5" ry="3" fill="#2563EB" />
      <ellipse cx="56" cy="40" rx="5" ry="3" fill="#2563EB" />
      {/* Equation banner */}
      <rect x="22" y="26" width="36" height="12" rx="3" fill="rgba(59,130,246,0.2)" stroke="#3B82F6" strokeWidth="1.2" />
      {/* 2x + 3 = 11 */}
      <text x="40" y="35" textAnchor="middle" fontSize="7.5" fontWeight="bold" fill="#BFDBFE">2x+3=11</text>
      {/* x= result below */}
      <text x="40" y="23" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#3B82F6">x=4</text>
      {/* Floating variable letters */}
      <text x="22" y="23" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#3B82F6" opacity="0.75">x</text>
      <text x="58" y="22" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#3B82F6" opacity="0.65">y</text>
      <text x="25" y="42" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#93C5FD" opacity="0.7">a</text>
      <text x="55" y="44" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#93C5FD" opacity="0.7">b</text>
      {/* Equals sign sparkle */}
      <circle cx="21" cy="34" r="1.5" fill="#3B82F6" opacity="0.6" />
      <circle cx="59" cy="30" r="1.5" fill="#3B82F6" opacity="0.6" />
      <circle cx="40" cy="16" r="1" fill="#93C5FD" opacity="0.5" />
    </svg>
  );
}

// i7 — Areas (#F59E0B amber) — 3D cube wireframe, triangle area, geometric solids
export function G6IslandAreas({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Shadow */}
      <ellipse cx="40" cy="73" rx="20" ry="4" fill="rgba(245,158,11,0.18)" />
      {/* Rocky underside */}
      <path d="M19,47 Q22,62 30,60 Q40,65 50,60 Q58,62 61,47 Q54,56 40,54 Q26,56 19,47Z" fill="#451A03" />
      <path d="M23,50 Q28,60 40,57 Q52,60 57,50 Q50,58 40,55 Q30,58 23,50Z" fill="#2E1100" />
      {/* Amber surface */}
      <ellipse cx="40" cy="44" rx="22" ry="9" fill="#B45309" />
      <ellipse cx="40" cy="42" rx="22" ry="8.5" fill="#D97706" />
      {/* Surface bumps */}
      <ellipse cx="24" cy="40" rx="5" ry="3" fill="#D97706" />
      <ellipse cx="56" cy="40" rx="5" ry="3" fill="#D97706" />
      {/* 3D cube wireframe — left */}
      {/* Front face */}
      <rect x="20" y="25" width="12" height="10" rx="0.5" fill="rgba(245,158,11,0.2)" stroke="#F59E0B" strokeWidth="1.2" />
      {/* Top face (parallelogram) */}
      <path d="M20,25 L24,21 L36,21 L32,25 Z" fill="rgba(245,158,11,0.15)" stroke="#F59E0B" strokeWidth="1" />
      {/* Right face */}
      <path d="M32,25 L36,21 L36,31 L32,35 Z" fill="rgba(245,158,11,0.1)" stroke="#F59E0B" strokeWidth="1" />
      {/* Triangle with area label — right */}
      <polygon points="50,38 62,38 56,25" fill="rgba(245,158,11,0.25)" stroke="#F59E0B" strokeWidth="1.5" />
      {/* Height line */}
      <line x1="56" y1="25" x2="56" y2="38" stroke="#FCD34D" strokeWidth="0.8" strokeDasharray="2 1.5" />
      {/* Right angle mark */}
      <rect x="56" y="35" width="3" height="3" fill="none" stroke="#FCD34D" strokeWidth="0.8" />
      {/* A = ½bh label */}
      <text x="56" y="22" textAnchor="middle" fontSize="5.5" fontWeight="bold" fill="#FDE68A">½bh</text>
      {/* Floating cm² */}
      <text x="28" y="20" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#F59E0B" opacity="0.85">cm²</text>
      {/* Sparkle dots */}
      <circle cx="23" cy="16" r="1.5" fill="#F59E0B" opacity="0.7" />
      <circle cx="60" cy="18" r="1.5" fill="#F59E0B" opacity="0.7" />
    </svg>
  );
}

// i8 — Statistics (#14B8A6 teal-2) — bar chart, mini pie chart, mean/median labels
export function G6IslandStatistics({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Shadow */}
      <ellipse cx="40" cy="73" rx="20" ry="4" fill="rgba(20,184,166,0.18)" />
      {/* Rocky underside */}
      <path d="M19,48 Q22,63 31,60 Q40,65 49,60 Q58,63 61,48 Q54,57 40,54 Q26,57 19,48Z" fill="#042F2E" />
      <path d="M23,51 Q29,61 40,58 Q51,61 57,51 Q50,59 40,56 Q30,59 23,51Z" fill="#021A1A" />
      {/* Teal surface */}
      <ellipse cx="40" cy="44" rx="22" ry="9" fill="#0D9488" />
      <ellipse cx="40" cy="42" rx="22" ry="8.5" fill="#14B8A6" />
      {/* Surface bumps */}
      <ellipse cx="24" cy="40" rx="5" ry="3" fill="#14B8A6" />
      <ellipse cx="56" cy="40" rx="5" ry="3" fill="#14B8A6" />
      {/* Bar chart axis */}
      <line x1="21" y1="38" x2="48" y2="38" stroke="#14B8A6" strokeWidth="1" opacity="0.8" />
      <line x1="21" y1="38" x2="21" y2="20" stroke="#14B8A6" strokeWidth="1" opacity="0.8" />
      {/* Bar 1 — height 10 */}
      <rect x="23" y="28" width="5" height="10" rx="0.5" fill="rgba(20,184,166,0.55)" stroke="#14B8A6" strokeWidth="0.8" />
      {/* Bar 2 — height 16 */}
      <rect x="30" y="22" width="5" height="16" rx="0.5" fill="rgba(20,184,166,0.70)" stroke="#14B8A6" strokeWidth="0.8" />
      {/* Bar 3 — height 8 */}
      <rect x="37" y="30" width="5" height="8" rx="0.5" fill="rgba(20,184,166,0.45)" stroke="#14B8A6" strokeWidth="0.8" />
      {/* Mean line across bars */}
      <line x1="21" y1="28" x2="46" y2="28" stroke="#5EEAD4" strokeWidth="0.9" strokeDasharray="2 1.5" />
      <text x="47" y="28" textAnchor="start" fontSize="4.5" fill="#5EEAD4" fontWeight="bold">x̄</text>
      {/* Mini pie chart — right */}
      <circle cx="57" cy="29" r="8" fill="rgba(20,184,166,0.15)" stroke="#14B8A6" strokeWidth="1.2" />
      {/* Segment 1 — 40% */}
      <path d="M57,21 A8,8,0,0,1,64.9,33 L57,29 Z" fill="rgba(20,184,166,0.6)" />
      {/* Segment 2 — 35% */}
      <path d="M64.9,33 A8,8,0,0,1,49.1,33 L57,29 Z" fill="rgba(20,184,166,0.35)" />
      {/* Segment 3 — 25% */}
      <path d="M49.1,33 A8,8,0,0,1,57,21 L57,29 Z" fill="rgba(20,184,166,0.2)" />
      {/* Median label */}
      <text x="40" y="16" textAnchor="middle" fontSize="5.5" fontWeight="bold" fill="#2DD4BF">μ median</text>
    </svg>
  );
}

// i9 — Finale (#A855F7 purple) — golden trophy with star burst
export function G6IslandFinale({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Shadow */}
      <ellipse cx="40" cy="73" rx="20" ry="4" fill="rgba(168,85,247,0.18)" />
      {/* Rocky underside */}
      <path d="M19,47 Q22,62 30,60 Q40,65 50,60 Q58,62 61,47 Q54,56 40,54 Q26,56 19,47Z" fill="#2E1065" />
      <path d="M23,50 Q28,60 40,57 Q52,60 57,50 Q50,58 40,55 Q30,58 23,50Z" fill="#1C0A40" />
      {/* Purple gradient surface */}
      <ellipse cx="40" cy="44" rx="22" ry="9" fill="#7E22CE" />
      <ellipse cx="40" cy="42" rx="22" ry="8.5" fill="#9333EA" />
      {/* Surface bumps */}
      <ellipse cx="24" cy="40" rx="5" ry="3" fill="#9333EA" />
      <ellipse cx="56" cy="40" rx="5" ry="3" fill="#9333EA" />
      {/* Star burst rays */}
      <line x1="40" y1="10" x2="40" y2="16" stroke="#FFD700" strokeWidth="1.5" opacity="0.9" />
      <line x1="40" y1="10" x2="40" y2="16" stroke="#FFD700" strokeWidth="1.5" opacity="0.9" transform="rotate(45 40 28)" />
      <line x1="40" y1="10" x2="40" y2="16" stroke="#FFD700" strokeWidth="1.5" opacity="0.9" transform="rotate(90 40 28)" />
      <line x1="40" y1="10" x2="40" y2="16" stroke="#FFD700" strokeWidth="1.5" opacity="0.9" transform="rotate(135 40 28)" />
      <line x1="40" y1="10" x2="40" y2="16" stroke="#FFD700" strokeWidth="1.2" opacity="0.7" transform="rotate(22.5 40 28)" />
      <line x1="40" y1="10" x2="40" y2="16" stroke="#FFD700" strokeWidth="1.2" opacity="0.7" transform="rotate(67.5 40 28)" />
      <line x1="40" y1="10" x2="40" y2="16" stroke="#FFD700" strokeWidth="1.2" opacity="0.7" transform="rotate(112.5 40 28)" />
      <line x1="40" y1="10" x2="40" y2="16" stroke="#FFD700" strokeWidth="1.2" opacity="0.7" transform="rotate(157.5 40 28)" />
      {/* Trophy cup */}
      <path d="M33,38 Q32,28 40,25 Q48,28 47,38 Z" fill="rgba(255,215,0,0.4)" stroke="#FFD700" strokeWidth="1.5" />
      {/* Trophy handles */}
      <path d="M33,30 Q28,30 28,34 Q28,37 33,37" fill="none" stroke="#FFD700" strokeWidth="1.3" />
      <path d="M47,30 Q52,30 52,34 Q52,37 47,37" fill="none" stroke="#FFD700" strokeWidth="1.3" />
      {/* Trophy stem */}
      <rect x="38" y="38" width="4" height="4" rx="0.5" fill="#FFD700" opacity="0.7" />
      {/* Trophy base */}
      <rect x="35" y="41" width="10" height="2.5" rx="1" fill="#FFD700" opacity="0.85" />
      {/* Star inside trophy */}
      <text x="40" y="36" textAnchor="middle" fontSize="8" fill="#FFD700">★</text>
      {/* Sparkle dots */}
      <circle cx="23" cy="19" r="2" fill="#FFD700" opacity="0.7" />
      <circle cx="57" cy="17" r="2" fill="#FFD700" opacity="0.7" />
      <circle cx="26" cy="25" r="1.2" fill="#A855F7" opacity="0.8" />
      <circle cx="54" cy="22" r="1.2" fill="#A855F7" opacity="0.8" />
      <circle cx="40" cy="16" r="1.5" fill="#FFD700" opacity="0.9" />
    </svg>
  );
}

// ─── Export map ───────────────────────────────────────────────────────────────

export const G6_ISLAND_SVGS: Record<string, React.FC<{ size?: number }>> = {
  i1: G6IslandNegativeNumbers,
  i2: G6IslandFractionsPro,
  i3: G6IslandRatios,
  i4: G6IslandPercentages,
  i5: G6IslandSpeed,
  i6: G6IslandAlgebra,
  i7: G6IslandAreas,
  i8: G6IslandStatistics,
  i9: G6IslandFinale,
};
