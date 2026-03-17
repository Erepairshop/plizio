// app/astromath/islands-g8.tsx
// Floating fantasy island SVG illustrations for the AstroMath G8 map
// Each island has a unique visual theme matching its Grade 8 math concept

import React from "react";

type IP = { size?: number };

// i1 — SquareRoots (#A855F7 purple) — radical symbol, root tree, √144=12
export function G8IslandSquareRoots({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Shadow */}
      <ellipse cx="40" cy="73" rx="20" ry="4" fill="rgba(168,85,247,0.18)" />
      {/* Rocky underside */}
      <path d="M19,48 Q22,62 31,60 Q40,65 49,60 Q58,62 61,48 Q54,56 40,54 Q26,56 19,48Z" fill="#3B1A6A" />
      <path d="M23,51 Q29,61 40,58 Q51,61 57,51 Q50,59 40,56 Q30,59 23,51Z" fill="#260E4A" />
      {/* Purple surface */}
      <ellipse cx="40" cy="44" rx="22" ry="9" fill="#7E22CE" />
      <ellipse cx="40" cy="42" rx="22" ry="8.5" fill="#A855F7" />
      {/* Surface bumps */}
      <ellipse cx="24" cy="40" rx="5" ry="3" fill="#9333EA" />
      <ellipse cx="56" cy="40" rx="5" ry="3" fill="#9333EA" />
      {/* Large radical symbol */}
      {/* Tick mark of √ */}
      <polyline points="22,31 26,36 30,20 54,20 54,28" fill="none" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Radicand bar top */}
      <line x1="30" y1="20" x2="54" y2="20" stroke="#A855F7" strokeWidth="2" />
      {/* "144=12" label inside radical */}
      <text x="41" y="27" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#E9D5FF">144=12</text>
      {/* Floating √ sparkles */}
      <text x="22" y="18" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#A855F7" opacity="0.75">√</text>
      <text x="58" y="17" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#A855F7" opacity="0.65">√</text>
      {/* Root tree dots — trunk */}
      <circle cx="40" cy="42" r="2" fill="#E9D5FF" opacity="0.6" />
      <circle cx="34" cy="39" r="1.5" fill="#C084FC" opacity="0.7" />
      <circle cx="46" cy="39" r="1.5" fill="#C084FC" opacity="0.7" />
    </svg>
  );
}

// i2 — QuadraticEq (#6366F1 indigo) — parabola curve, x² label, vertex point
export function G8IslandQuadraticEq({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Shadow */}
      <ellipse cx="40" cy="73" rx="20" ry="4" fill="rgba(99,102,241,0.18)" />
      {/* Rocky underside */}
      <path d="M19,48 Q22,62 31,60 Q40,65 49,60 Q58,62 61,48 Q54,56 40,54 Q26,56 19,48Z" fill="#1E1A5A" />
      <path d="M23,51 Q29,61 40,58 Q51,61 57,51 Q50,59 40,56 Q30,59 23,51Z" fill="#130E3E" />
      {/* Indigo surface */}
      <ellipse cx="40" cy="44" rx="22" ry="9" fill="#3730A3" />
      <ellipse cx="40" cy="42" rx="22" ry="8.5" fill="#6366F1" />
      {/* Surface bumps */}
      <ellipse cx="25" cy="40" rx="5" ry="3" fill="#4F46E5" />
      <ellipse cx="55" cy="40" rx="5" ry="3" fill="#4F46E5" />
      {/* Coordinate axes */}
      <line x1="22" y1="36" x2="58" y2="36" stroke="#A5B4FC" strokeWidth="0.8" opacity="0.5" />
      <line x1="40" y1="18" x2="40" y2="40" stroke="#A5B4FC" strokeWidth="0.8" opacity="0.5" />
      {/* Parabola curve — y = x² opening upward, vertex at (40,35) */}
      <path d="M24,35 Q32,22 40,21 Q48,22 56,35" fill="none" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" />
      {/* Vertex dot */}
      <circle cx="40" cy="21" r="2.5" fill="#E0E7FF" />
      <circle cx="40" cy="21" r="1.2" fill="#6366F1" />
      {/* x² label floating */}
      <text x="55" y="18" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#6366F1">x²</text>
      {/* Small x markers on axis */}
      <text x="26" y="34" textAnchor="middle" fontSize="5" fill="#A5B4FC" opacity="0.8">-a</text>
      <text x="54" y="34" textAnchor="middle" fontSize="5" fill="#A5B4FC" opacity="0.8">a</text>
    </svg>
  );
}

// i3 — Equations (#10B981 emerald) — balance scale, = and > symbols
export function G8IslandEquations({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Shadow */}
      <ellipse cx="40" cy="73" rx="20" ry="4" fill="rgba(16,185,129,0.18)" />
      {/* Rocky underside */}
      <path d="M19,48 Q22,62 31,60 Q40,65 49,60 Q58,62 61,48 Q54,56 40,54 Q26,56 19,48Z" fill="#064E3B" />
      <path d="M23,51 Q29,61 40,58 Q51,61 57,51 Q50,59 40,56 Q30,59 23,51Z" fill="#022C22" />
      {/* Emerald surface */}
      <ellipse cx="40" cy="44" rx="22" ry="9" fill="#059669" />
      <ellipse cx="40" cy="42" rx="22" ry="8.5" fill="#10B981" />
      {/* Surface bumps */}
      <ellipse cx="24" cy="40" rx="5" ry="3" fill="#059669" />
      <ellipse cx="56" cy="40" rx="5" ry="3" fill="#059669" />
      {/* Balance scale pole */}
      <line x1="40" y1="22" x2="40" y2="38" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" />
      {/* Horizontal beam — slightly tilted left = heavier left */}
      <line x1="25" y1="26" x2="55" y2="24" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" />
      {/* Left pan (lower, heavier) */}
      <path d="M21,27 Q25,33 29,27" fill="none" stroke="#10B981" strokeWidth="1.2" />
      <line x1="21" y1="27" x2="25" y2="27" stroke="#10B981" strokeWidth="0.8" opacity="0.5" />
      {/* Right pan (higher) */}
      <path d="M51,25 Q55,31 59,25" fill="none" stroke="#10B981" strokeWidth="1.2" />
      {/* Left pan weight: x block */}
      <rect x="22" y="28.5" width="7" height="4" rx="1" fill="rgba(16,185,129,0.35)" stroke="#10B981" strokeWidth="1" />
      <text x="25.5" y="32" textAnchor="middle" fontSize="4.5" fontWeight="bold" fill="#A7F3D0">x</text>
      {/* Right pan weight: 5 block */}
      <rect x="52" y="26.5" width="7" height="4" rx="1" fill="rgba(16,185,129,0.25)" stroke="#10B981" strokeWidth="1" />
      <text x="55.5" y="30" textAnchor="middle" fontSize="4.5" fontWeight="bold" fill="#A7F3D0">5</text>
      {/* = sign */}
      <text x="40" y="18" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#10B981">=</text>
      {/* > sign */}
      <text x="23" y="17" textAnchor="middle" fontSize="7" fill="#10B981" opacity="0.7">{">"}</text>
      {/* Arrow hint */}
      <line x1="57" y1="19" x2="61" y2="19" stroke="#10B981" strokeWidth="1" opacity="0.5" markerEnd="url(#arr)" />
    </svg>
  );
}

// i4 — Systems (#EC4899 pink) — two intersecting lines, x,y solution point
export function G8IslandSystems({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Shadow */}
      <ellipse cx="40" cy="73" rx="20" ry="4" fill="rgba(236,72,153,0.18)" />
      {/* Rocky underside */}
      <path d="M19,48 Q22,62 31,60 Q40,65 49,60 Q58,62 61,48 Q54,56 40,54 Q26,56 19,48Z" fill="#5A1535" />
      <path d="M23,51 Q29,61 40,58 Q51,61 57,51 Q50,59 40,56 Q30,59 23,51Z" fill="#3D0D24" />
      {/* Pink surface */}
      <ellipse cx="40" cy="44" rx="22" ry="9" fill="#BE185D" />
      <ellipse cx="40" cy="42" rx="22" ry="8.5" fill="#EC4899" />
      {/* Surface bumps */}
      <ellipse cx="25" cy="40" rx="5" ry="3" fill="#DB2777" />
      <ellipse cx="55" cy="40" rx="5" ry="3" fill="#DB2777" />
      {/* Coordinate mini-grid */}
      <line x1="22" y1="32" x2="58" y2="32" stroke="#FBCFE8" strokeWidth="0.6" opacity="0.35" />
      <line x1="22" y1="26" x2="58" y2="26" stroke="#FBCFE8" strokeWidth="0.6" opacity="0.35" />
      <line x1="40" y1="18" x2="40" y2="38" stroke="#FBCFE8" strokeWidth="0.6" opacity="0.35" />
      <line x1="32" y1="18" x2="32" y2="38" stroke="#FBCFE8" strokeWidth="0.6" opacity="0.35" />
      <line x1="48" y1="18" x2="48" y2="38" stroke="#FBCFE8" strokeWidth="0.6" opacity="0.35" />
      {/* Line 1: y = x + 1 (positive slope) */}
      <line x1="24" y1="38" x2="56" y2="18" stroke="#EC4899" strokeWidth="2" strokeLinecap="round" />
      {/* Line 2: y = -x + 3 (negative slope) */}
      <line x1="24" y1="18" x2="56" y2="38" stroke="#F9A8D4" strokeWidth="2" strokeLinecap="round" />
      {/* Intersection point at (40, 28) */}
      <circle cx="40" cy="28" r="3.5" fill="#EC4899" stroke="#FFF" strokeWidth="1.2" />
      {/* x,y label at intersection */}
      <text x="44" y="25" textAnchor="start" fontSize="5.5" fontWeight="bold" fill="#FCE7F3">(x,y)</text>
      {/* Linked chain links */}
      <circle cx="22" cy="19" r="2.5" fill="none" stroke="#EC4899" strokeWidth="1.2" opacity="0.7" />
      <circle cx="26" cy="19" r="2.5" fill="none" stroke="#EC4899" strokeWidth="1.2" opacity="0.7" />
    </svg>
  );
}

// i5 — Functions (#F59E0B amber) — coordinate grid, y=mx+b line, slope triangle
export function G8IslandFunctions({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Shadow */}
      <ellipse cx="40" cy="73" rx="20" ry="4" fill="rgba(245,158,11,0.18)" />
      {/* Rocky underside */}
      <path d="M19,48 Q22,62 31,60 Q40,65 49,60 Q58,62 61,48 Q54,56 40,54 Q26,56 19,48Z" fill="#4A2A00" />
      <path d="M23,51 Q29,61 40,58 Q51,61 57,51 Q50,59 40,56 Q30,59 23,51Z" fill="#311C00" />
      {/* Amber surface */}
      <ellipse cx="40" cy="44" rx="22" ry="9" fill="#B45309" />
      <ellipse cx="40" cy="42" rx="22" ry="8.5" fill="#F59E0B" />
      {/* Surface bumps */}
      <ellipse cx="24" cy="40" rx="5" ry="3" fill="#D97706" />
      <ellipse cx="56" cy="40" rx="5" ry="3" fill="#D97706" />
      {/* Coordinate axes */}
      <line x1="24" y1="38" x2="57" y2="38" stroke="#FDE68A" strokeWidth="1" opacity="0.7" />
      <line x1="38" y1="18" x2="38" y2="40" stroke="#FDE68A" strokeWidth="1" opacity="0.7" />
      {/* Axis arrows */}
      <polygon points="57,38 54,36.5 54,39.5" fill="#FDE68A" opacity="0.7" />
      <polygon points="38,18 36.5,21 39.5,21" fill="#FDE68A" opacity="0.7" />
      {/* y = mx + b line (positive slope) */}
      <line x1="25" y1="37" x2="55" y2="22" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
      {/* Slope triangle */}
      <line x1="43" y1="30" x2="51" y2="30" stroke="#FCD34D" strokeWidth="1.2" strokeDasharray="2 1.5" />
      <line x1="51" y1="30" x2="51" y2="24" stroke="#FCD34D" strokeWidth="1.2" strokeDasharray="2 1.5" />
      {/* Δy and Δx labels */}
      <text x="53" y="28" textAnchor="start" fontSize="4.5" fill="#FEF3C7" opacity="0.9">Δy</text>
      <text x="46" y="33" textAnchor="middle" fontSize="4.5" fill="#FEF3C7" opacity="0.9">Δx</text>
      {/* y = mx + b label */}
      <text x="40" y="16" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#F59E0B">y=mx+b</text>
    </svg>
  );
}

// i6 — Probability (#8B5CF6 violet) — dice, coin, probability tree
export function G8IslandProbability({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Shadow */}
      <ellipse cx="40" cy="73" rx="20" ry="4" fill="rgba(139,92,246,0.18)" />
      {/* Rocky underside */}
      <path d="M19,48 Q22,62 31,60 Q40,65 49,60 Q58,62 61,48 Q54,56 40,54 Q26,56 19,48Z" fill="#2E1065" />
      <path d="M23,51 Q29,61 40,58 Q51,61 57,51 Q50,59 40,56 Q30,59 23,51Z" fill="#1E0A42" />
      {/* Violet surface */}
      <ellipse cx="40" cy="44" rx="22" ry="9" fill="#6D28D9" />
      <ellipse cx="40" cy="42" rx="22" ry="8.5" fill="#8B5CF6" />
      {/* Surface bumps */}
      <ellipse cx="25" cy="40" rx="5" ry="3" fill="#7C3AED" />
      <ellipse cx="55" cy="40" rx="5" ry="3" fill="#7C3AED" />
      {/* Dice (top-left) */}
      <rect x="21" y="20" width="11" height="11" rx="2" fill="rgba(139,92,246,0.25)" stroke="#8B5CF6" strokeWidth="1.2" />
      {/* Die face pips: 3 */}
      <circle cx="24" cy="23" r="1.2" fill="#DDD6FE" />
      <circle cx="26.5" cy="25.5" r="1.2" fill="#DDD6FE" />
      <circle cx="29" cy="28" r="1.2" fill="#DDD6FE" />
      {/* Coin (right side) */}
      <circle cx="55" cy="26" r="6" fill="rgba(139,92,246,0.2)" stroke="#8B5CF6" strokeWidth="1.2" />
      <text x="55" y="28.5" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#DDD6FE">½</text>
      {/* Probability tree — root → two branches */}
      <line x1="40" y1="31" x2="35" y2="38" stroke="#A78BFA" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="40" y1="31" x2="45" y2="38" stroke="#A78BFA" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="40" cy="31" r="2" fill="#8B5CF6" />
      <circle cx="35" cy="38" r="1.8" fill="#7C3AED" opacity="0.9" />
      <circle cx="45" cy="38" r="1.8" fill="#7C3AED" opacity="0.9" />
      {/* P= label */}
      <text x="40" y="18" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#8B5CF6">P=</text>
    </svg>
  );
}

// i7 — Statistics (#14B8A6 teal) — histogram bars, bell curve, mean line
export function G8IslandStatistics({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Shadow */}
      <ellipse cx="40" cy="73" rx="20" ry="4" fill="rgba(20,184,166,0.18)" />
      {/* Rocky underside */}
      <path d="M19,48 Q22,62 31,60 Q40,65 49,60 Q58,62 61,48 Q54,56 40,54 Q26,56 19,48Z" fill="#0F3D38" />
      <path d="M23,51 Q29,61 40,58 Q51,61 57,51 Q50,59 40,56 Q30,59 23,51Z" fill="#082926" />
      {/* Teal surface */}
      <ellipse cx="40" cy="44" rx="22" ry="9" fill="#0F766E" />
      <ellipse cx="40" cy="42" rx="22" ry="8.5" fill="#14B8A6" />
      {/* Surface bumps */}
      <ellipse cx="24" cy="40" rx="5" ry="3" fill="#0D9488" />
      <ellipse cx="56" cy="40" rx="5" ry="3" fill="#0D9488" />
      {/* Baseline */}
      <line x1="22" y1="38" x2="58" y2="38" stroke="#99F6E4" strokeWidth="0.9" opacity="0.6" />
      {/* Histogram bars (5 bars, heights: 6, 10, 14, 10, 6 — bell shape) */}
      <rect x="23" y="32" width="5" height="6" rx="0.5" fill="rgba(20,184,166,0.45)" stroke="#14B8A6" strokeWidth="0.8" />
      <rect x="29" y="28" width="5" height="10" rx="0.5" fill="rgba(20,184,166,0.55)" stroke="#14B8A6" strokeWidth="0.8" />
      <rect x="35" y="24" width="5" height="14" rx="0.5" fill="rgba(20,184,166,0.75)" stroke="#14B8A6" strokeWidth="0.8" />
      <rect x="41" y="28" width="5" height="10" rx="0.5" fill="rgba(20,184,166,0.55)" stroke="#14B8A6" strokeWidth="0.8" />
      <rect x="47" y="32" width="5" height="6" rx="0.5" fill="rgba(20,184,166,0.45)" stroke="#14B8A6" strokeWidth="0.8" />
      {/* Bell curve outline */}
      <path d="M22,37 Q29,22 37.5,19 Q46,22 58,37" fill="none" stroke="#5EEAD4" strokeWidth="1.5" strokeDasharray="2.5 1.5" opacity="0.8" />
      {/* Mean line (vertical, dashed) */}
      <line x1="37.5" y1="18" x2="37.5" y2="38" stroke="#99F6E4" strokeWidth="1.2" strokeDasharray="2 2" opacity="0.9" />
      {/* μ label */}
      <text x="37.5" y="16" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#14B8A6">μ</text>
      {/* "σ" small label */}
      <text x="55" y="18" textAnchor="middle" fontSize="7" fill="#14B8A6" opacity="0.75">σ</text>
    </svg>
  );
}

// i8 — Transformations (#EAB308 yellow) — shape + mirror line + rotated copy
export function G8IslandTransformations({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Shadow */}
      <ellipse cx="40" cy="73" rx="20" ry="4" fill="rgba(234,179,8,0.18)" />
      {/* Rocky underside */}
      <path d="M19,48 Q22,62 31,60 Q40,65 49,60 Q58,62 61,48 Q54,56 40,54 Q26,56 19,48Z" fill="#4A3500" />
      <path d="M23,51 Q29,61 40,58 Q51,61 57,51 Q50,59 40,56 Q30,59 23,51Z" fill="#312300" />
      {/* Yellow surface */}
      <ellipse cx="40" cy="44" rx="22" ry="9" fill="#A16207" />
      <ellipse cx="40" cy="42" rx="22" ry="8.5" fill="#EAB308" />
      {/* Surface bumps */}
      <ellipse cx="24" cy="40" rx="5" ry="3" fill="#CA8A04" />
      <ellipse cx="56" cy="40" rx="5" ry="3" fill="#CA8A04" />
      {/* Mirror / axis of symmetry line (vertical dashed) */}
      <line x1="40" y1="18" x2="40" y2="40" stroke="#FDE047" strokeWidth="1.5" strokeDasharray="2.5 2" opacity="0.9" />
      {/* Original triangle (left side) */}
      <polygon points="25,36 25,24 33,30" fill="rgba(234,179,8,0.3)" stroke="#EAB308" strokeWidth="1.4" />
      {/* Reflected copy (right side) — mirrored across x=40 */}
      <polygon points="55,36 55,24 47,30" fill="rgba(234,179,8,0.15)" stroke="#FDE047" strokeWidth="1.4" strokeDasharray="2 1.5" />
      {/* Rotation arc arrow (top-right) */}
      <path d="M50,20 A8,8 0 0 1 58,28" fill="none" stroke="#EAB308" strokeWidth="1.4" strokeLinecap="round" />
      <polygon points="58,28 55,26.5 57.5,30" fill="#EAB308" />
      {/* Reflection arrows */}
      <line x1="33" y1="28" x2="37" y2="28" stroke="#FDE047" strokeWidth="1" markerEnd="url(#ym)" opacity="0.7" />
      <line x1="47" y1="28" x2="43" y2="28" stroke="#FDE047" strokeWidth="1" opacity="0.7" />
      {/* Label */}
      <text x="40" y="16" textAnchor="middle" fontSize="6.5" fontWeight="bold" fill="#EAB308">⟷</text>
    </svg>
  );
}

// i9 — Finale (#E879F9 pink) — golden trophy with pink star burst
export function G8IslandFinale({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Shadow */}
      <ellipse cx="40" cy="73" rx="20" ry="4" fill="rgba(232,121,249,0.20)" />
      {/* Rocky underside */}
      <path d="M19,48 Q22,62 31,60 Q40,65 49,60 Q58,62 61,48 Q54,56 40,54 Q26,56 19,48Z" fill="#3D1048" />
      <path d="M23,51 Q29,61 40,58 Q51,61 57,51 Q50,59 40,56 Q30,59 23,51Z" fill="#280A30" />
      {/* Pink surface */}
      <ellipse cx="40" cy="44" rx="22" ry="9" fill="#9B1FAA" />
      <ellipse cx="40" cy="42" rx="22" ry="8.5" fill="#C026D3" />
      {/* Surface bumps */}
      <ellipse cx="25" cy="40" rx="5" ry="3" fill="#A21CAF" />
      <ellipse cx="55" cy="40" rx="5" ry="3" fill="#A21CAF" />
      {/* Star burst rays (8 rays) */}
      <line x1="40" y1="14" x2="40" y2="10" stroke="#E879F9" strokeWidth="1.5" opacity="0.7" />
      <line x1="40" y1="38" x2="40" y2="42" stroke="#E879F9" strokeWidth="1.5" opacity="0.4" />
      <line x1="28" y1="20" x2="25" y2="17" stroke="#E879F9" strokeWidth="1.5" opacity="0.65" />
      <line x1="52" y1="20" x2="55" y2="17" stroke="#E879F9" strokeWidth="1.5" opacity="0.65" />
      <line x1="24" y1="26" x2="20" y2="26" stroke="#E879F9" strokeWidth="1.5" opacity="0.6" />
      <line x1="56" y1="26" x2="60" y2="26" stroke="#E879F9" strokeWidth="1.5" opacity="0.6" />
      <line x1="28" y1="33" x2="25" y2="36" stroke="#E879F9" strokeWidth="1.5" opacity="0.5" />
      <line x1="52" y1="33" x2="55" y2="36" stroke="#E879F9" strokeWidth="1.5" opacity="0.5" />
      {/* Trophy cup body */}
      <path d="M32,38 Q30,28 30,22 L50,22 Q50,28 48,38 Z" fill="rgba(255,215,0,0.35)" stroke="#FFD700" strokeWidth="1.4" />
      {/* Trophy handles */}
      <path d="M30,25 Q24,25 24,29 Q24,33 30,33" fill="none" stroke="#FFD700" strokeWidth="1.3" />
      <path d="M50,25 Q56,25 56,29 Q56,33 50,33" fill="none" stroke="#FFD700" strokeWidth="1.3" />
      {/* Trophy stem */}
      <rect x="37.5" y="38" width="5" height="3.5" rx="0.5" fill="rgba(255,215,0,0.5)" stroke="#FFD700" strokeWidth="1" />
      {/* Trophy base */}
      <rect x="34" y="41" width="12" height="2.5" rx="1" fill="rgba(255,215,0,0.6)" stroke="#FFD700" strokeWidth="1" />
      {/* Star on trophy */}
      <text x="40" y="33" textAnchor="middle" fontSize="9" fill="#FFD700">★</text>
      {/* Sparkle dots */}
      <circle cx="24" cy="18" r="1.5" fill="#E879F9" opacity="0.8" />
      <circle cx="56" cy="17" r="1.2" fill="#E879F9" opacity="0.7" />
      <circle cx="40" cy="12" r="1.5" fill="#FDE047" opacity="0.9" />
    </svg>
  );
}

// ─── Export map ───────────────────────────────────────────────────────────────

export const G8_ISLAND_SVGS: Record<string, React.FC<{ size?: number }>> = {
  i1: G8IslandSquareRoots,
  i2: G8IslandQuadraticEq,
  i3: G8IslandEquations,
  i4: G8IslandSystems,
  i5: G8IslandFunctions,
  i6: G8IslandProbability,
  i7: G8IslandStatistics,
  i8: G8IslandTransformations,
  i9: G8IslandFinale,
};
