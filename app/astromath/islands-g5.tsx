// app/astromath/islands-g5.tsx
// Floating fantasy island SVG illustrations for the AstroMath G5 map
// Each island has a unique visual theme matching its Grade 5 math concept

import React from "react";

type IP = { size?: number };

// i1 — Large Numbers Island (#3B82F6 blue) — place-value tower, "1,000,000"
export function G5IslandLargeNumbers({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Shadow beneath */}
      <ellipse cx="40" cy="73" rx="20" ry="4" fill="rgba(59,130,246,0.18)" />
      {/* Rocky underside */}
      <path d="M19,48 Q22,63 31,60 Q40,65 49,60 Q58,63 61,48 Q54,57 40,54 Q26,57 19,48Z" fill="#1E3A6E" />
      <path d="M23,51 Q29,61 40,58 Q51,61 57,51 Q50,59 40,56 Q30,59 23,51Z" fill="#142752" />
      {/* Blue surface */}
      <ellipse cx="40" cy="44" rx="22" ry="9" fill="#1D4ED8" />
      <ellipse cx="40" cy="42" rx="22" ry="8.5" fill="#3B82F6" />
      {/* Grass bumps */}
      <ellipse cx="24" cy="40" rx="5" ry="3" fill="#2563EB" />
      <ellipse cx="56" cy="40" rx="5" ry="3" fill="#2563EB" />
      {/* Place-value tower — 3 stacked blocks (ones, tens, hundreds) */}
      {/* Bottom block (ones) */}
      <rect x="34" y="34" width="12" height="5" rx="1" fill="rgba(59,130,246,0.25)" stroke="#93C5FD" strokeWidth="1" />
      {/* Middle block (tens) — slightly narrower */}
      <rect x="35.5" y="29" width="9" height="5" rx="1" fill="rgba(59,130,246,0.35)" stroke="#93C5FD" strokeWidth="1" />
      {/* Top block (hundreds) — narrowest */}
      <rect x="37" y="24" width="6" height="5" rx="1" fill="rgba(59,130,246,0.5)" stroke="#BFDBFE" strokeWidth="1" />
      {/* "1,000,000" floating text */}
      <text x="40" y="19" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#93C5FD" opacity="0.95">1,000,000</text>
      {/* Small digit sparkles */}
      <text x="22" y="23" textAnchor="middle" fontSize="5.5" fill="#3B82F6" opacity="0.7">0</text>
      <text x="58" y="21" textAnchor="middle" fontSize="5.5" fill="#3B82F6" opacity="0.7">0</text>
      <text x="27" y="17" textAnchor="middle" fontSize="4.5" fill="#93C5FD" opacity="0.6">0</text>
    </svg>
  );
}

// i2 — Addition & Subtraction Island (#EF4444 red) — column method, +/− signs
export function G5IslandAddSub({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Shadow */}
      <ellipse cx="40" cy="73" rx="20" ry="4" fill="rgba(239,68,68,0.18)" />
      {/* Rocky underside */}
      <path d="M19,47 Q22,62 31,60 Q40,66 49,60 Q58,62 61,47 Q54,56 40,54 Q26,56 19,47Z" fill="#5A1A1A" />
      <path d="M23,50 Q29,60 40,57 Q51,60 57,50 Q50,58 40,55 Q30,58 23,50Z" fill="#3D1010" />
      {/* Red surface */}
      <ellipse cx="40" cy="44" rx="22" ry="9" fill="#B91C1C" />
      <ellipse cx="40" cy="42" rx="22" ry="8.5" fill="#EF4444" />
      {/* Grass bumps */}
      <ellipse cx="25" cy="40" rx="5" ry="3" fill="#DC2626" />
      <ellipse cx="55" cy="40" rx="5" ry="3" fill="#DC2626" />
      {/* Column addition panel — small card */}
      <rect x="24" y="21" width="17" height="18" rx="2" fill="rgba(239,68,68,0.15)" stroke="#FCA5A5" strokeWidth="1" />
      {/* Column numbers */}
      <text x="37" y="28" textAnchor="end" fontSize="5.5" fontWeight="bold" fill="#FECACA">4 8 6</text>
      <text x="37" y="33" textAnchor="end" fontSize="5.5" fontWeight="bold" fill="#FECACA">2 3 7</text>
      {/* Underline */}
      <line x1="25" y1="35" x2="40" y2="35" stroke="#FCA5A5" strokeWidth="0.8" />
      <text x="37" y="39" textAnchor="end" fontSize="5.5" fontWeight="bold" fill="#FECACA">7 2 3</text>
      {/* Big + sign */}
      <text x="23" y="31" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#FCA5A5">+</text>
      {/* Floating operators */}
      <text x="55" y="28" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#EF4444">+</text>
      <text x="59" y="38" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#EF4444">−</text>
      {/* Small sparkle dots */}
      <circle cx="24" cy="17" r="1.5" fill="#FCA5A5" opacity="0.7" />
      <circle cx="57" cy="18" r="1.5" fill="#FCA5A5" opacity="0.6" />
    </svg>
  );
}

// i3 — Multiplication & Division Island (#10B981 emerald) — × ÷ intertwined, long-mul visual
export function G5IslandMulDiv({ size = 80 }: IP) {
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
      {/* Grass bumps */}
      <ellipse cx="25" cy="40" rx="5" ry="3" fill="#047857" />
      <ellipse cx="55" cy="40" rx="5" ry="3" fill="#047857" />
      {/* Long multiplication layout */}
      <rect x="23" y="20" width="20" height="20" rx="2" fill="rgba(16,185,129,0.12)" stroke="#6EE7B7" strokeWidth="0.8" />
      <text x="40" y="27" textAnchor="end" fontSize="5.5" fontWeight="bold" fill="#A7F3D0">2 4</text>
      <text x="40" y="32" textAnchor="end" fontSize="5.5" fontWeight="bold" fill="#A7F3D0">× 3</text>
      <line x1="24" y1="33.5" x2="42" y2="33.5" stroke="#6EE7B7" strokeWidth="0.8" />
      <text x="40" y="38" textAnchor="end" fontSize="5.5" fontWeight="bold" fill="#A7F3D0">7 2</text>
      {/* ÷ symbol large */}
      <text x="55" y="30" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#10B981">÷</text>
      {/* × symbol floating */}
      <text x="55" y="42" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#34D399" opacity="0.85">×</text>
      {/* Small sparkles */}
      <circle cx="24" cy="17" r="1.5" fill="#6EE7B7" opacity="0.7" />
      <circle cx="59" cy="19" r="1.5" fill="#6EE7B7" opacity="0.6" />
      <circle cx="27" cy="14" r="1" fill="#A7F3D0" opacity="0.5" />
    </svg>
  );
}

// i4 — Fractions Island (#6366F1 indigo) — pizza slices, fraction bar, pie
export function G5IslandFractions({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Shadow */}
      <ellipse cx="40" cy="73" rx="20" ry="4" fill="rgba(99,102,241,0.18)" />
      {/* Rocky underside */}
      <path d="M19,48 Q22,63 31,60 Q40,65 49,60 Q58,63 61,48 Q54,57 40,54 Q26,57 19,48Z" fill="#1E1B4B" />
      <path d="M23,51 Q29,61 40,58 Q51,61 57,51 Q50,59 40,56 Q30,59 23,51Z" fill="#14123A" />
      {/* Indigo surface */}
      <ellipse cx="40" cy="44" rx="22" ry="9" fill="#3730A3" />
      <ellipse cx="40" cy="42" rx="22" ry="8.5" fill="#6366F1" />
      {/* Grass bumps */}
      <ellipse cx="25" cy="40" rx="5" ry="3" fill="#4338CA" />
      <ellipse cx="55" cy="40" rx="5" ry="3" fill="#4338CA" />
      {/* Pizza circle (pie chart) — 3/4 filled */}
      <circle cx="30" cy="29" r="9" fill="rgba(99,102,241,0.15)" stroke="#A5B4FC" strokeWidth="1" />
      {/* Filled slice 1 (0° to 90°) */}
      <path d="M30,29 L30,20 A9,9 0 0,1 39,29 Z" fill="rgba(99,102,241,0.55)" stroke="#A5B4FC" strokeWidth="0.7" />
      {/* Filled slice 2 (90° to 180°) */}
      <path d="M30,29 L39,29 A9,9 0 0,1 30,38 Z" fill="rgba(99,102,241,0.55)" stroke="#A5B4FC" strokeWidth="0.7" />
      {/* Filled slice 3 (180° to 270°) */}
      <path d="M30,29 L30,38 A9,9 0 0,1 21,29 Z" fill="rgba(99,102,241,0.55)" stroke="#A5B4FC" strokeWidth="0.7" />
      {/* Empty slice (270° to 360°) — just outline */}
      <path d="M30,29 L21,29 A9,9 0 0,1 30,20 Z" fill="rgba(99,102,241,0.08)" stroke="#A5B4FC" strokeWidth="0.7" />
      {/* Fraction bar "3/4" */}
      <text x="54" y="27" textAnchor="middle" fontSize="6.5" fontWeight="bold" fill="#C7D2FE">3</text>
      <line x1="48" y1="30" x2="60" y2="30" stroke="#A5B4FC" strokeWidth="1.2" />
      <text x="54" y="37" textAnchor="middle" fontSize="6.5" fontWeight="bold" fill="#C7D2FE">4</text>
      {/* Small "+" between fractions */}
      <text x="54" y="20" textAnchor="middle" fontSize="7" fill="#818CF8" opacity="0.8">+</text>
      {/* Floating sparkles */}
      <circle cx="22" cy="17" r="1.5" fill="#A5B4FC" opacity="0.7" />
      <circle cx="59" cy="18" r="1.5" fill="#A5B4FC" opacity="0.6" />
    </svg>
  );
}

// i5 — Decimals Island (#14B8A6 teal) — number line with 0.1 marks, "3.14"
export function G5IslandDecimals({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Shadow */}
      <ellipse cx="40" cy="73" rx="20" ry="4" fill="rgba(20,184,166,0.18)" />
      {/* Rocky underside */}
      <path d="M19,48 Q22,63 31,60 Q40,65 49,60 Q58,63 61,48 Q54,57 40,54 Q26,57 19,48Z" fill="#0F3B37" />
      <path d="M23,51 Q29,61 40,58 Q51,61 57,51 Q50,59 40,56 Q30,59 23,51Z" fill="#092926" />
      {/* Teal surface */}
      <ellipse cx="40" cy="44" rx="22" ry="9" fill="#0D9488" />
      <ellipse cx="40" cy="42" rx="22" ry="8.5" fill="#14B8A6" />
      {/* Grass bumps */}
      <ellipse cx="25" cy="40" rx="5" ry="3" fill="#0F766E" />
      <ellipse cx="55" cy="40" rx="5" ry="3" fill="#0F766E" />
      {/* Number line */}
      <line x1="20" y1="35" x2="60" y2="35" stroke="#5EEAD4" strokeWidth="1.5" />
      {/* Arrowhead right */}
      <path d="M59,33 L62,35 L59,37" fill="none" stroke="#5EEAD4" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Major tick at 0 */}
      <line x1="22" y1="32" x2="22" y2="38" stroke="#5EEAD4" strokeWidth="1.2" />
      <text x="22" y="30" textAnchor="middle" fontSize="5" fill="#99F6E4" fontWeight="bold">0</text>
      {/* Major tick at 1 */}
      <line x1="42" y1="32" x2="42" y2="38" stroke="#5EEAD4" strokeWidth="1.2" />
      <text x="42" y="30" textAnchor="middle" fontSize="5" fill="#99F6E4" fontWeight="bold">1</text>
      {/* Minor ticks: 0.2, 0.4, 0.6, 0.8 */}
      <line x1="26" y1="33.5" x2="26" y2="36.5" stroke="#5EEAD4" strokeWidth="0.8" />
      <line x1="30" y1="33" x2="30" y2="37" stroke="#5EEAD4" strokeWidth="0.8" />
      <line x1="34" y1="33.5" x2="34" y2="36.5" stroke="#5EEAD4" strokeWidth="0.8" />
      <line x1="38" y1="33" x2="38" y2="37" stroke="#5EEAD4" strokeWidth="0.8" />
      {/* Decimal point emphasized — glowing dot at 0.5 */}
      <circle cx="32" cy="35" r="2.5" fill="rgba(20,184,166,0.3)" stroke="#2DD4BF" strokeWidth="1" />
      <circle cx="32" cy="35" r="1" fill="#5EEAD4" />
      {/* "3.14" floating */}
      <text x="40" y="22" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#2DD4BF" opacity="0.95">3.14</text>
      {/* π symbol faint */}
      <text x="58" y="23" textAnchor="middle" fontSize="8" fill="#14B8A6" opacity="0.6">π</text>
    </svg>
  );
}

// i6 — Geometry & Angles Island (#EAB308 yellow) — protractor arc, shapes, angle arc
export function G5IslandGeometry({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Shadow */}
      <ellipse cx="40" cy="73" rx="20" ry="4" fill="rgba(234,179,8,0.18)" />
      {/* Rocky underside */}
      <path d="M19,47 Q22,62 31,60 Q40,65 49,60 Q58,62 61,47 Q54,56 40,54 Q26,56 19,47Z" fill="#4A3800" />
      <path d="M23,50 Q29,60 40,57 Q51,60 57,50 Q50,58 40,55 Q30,58 23,50Z" fill="#332800" />
      {/* Yellow surface */}
      <ellipse cx="40" cy="44" rx="22" ry="9" fill="#CA8A04" />
      <ellipse cx="40" cy="42" rx="22" ry="8.5" fill="#EAB308" />
      {/* Grass bumps */}
      <ellipse cx="24" cy="40" rx="5" ry="3" fill="#A16207" />
      <ellipse cx="56" cy="40" rx="5" ry="3" fill="#A16207" />
      {/* Protractor semicircle */}
      <path d="M22,37 A12,12 0 0,1 46,37" fill="rgba(234,179,8,0.12)" stroke="#FDE047" strokeWidth="1.2" />
      {/* Protractor baseline */}
      <line x1="22" y1="37" x2="46" y2="37" stroke="#FDE047" strokeWidth="1" />
      {/* Angle arm at ~45° */}
      <line x1="34" y1="37" x2="42.5" y2="28.5" stroke="#FACC15" strokeWidth="1.5" strokeLinecap="round" />
      {/* Angle arc highlight */}
      <path d="M38,37 A4,4 0 0,1 40.8,34.2" fill="none" stroke="#FDE047" strokeWidth="1.2" />
      {/* 45° label */}
      <text x="41" y="34" textAnchor="middle" fontSize="5" fill="#FEF08A">45°</text>
      {/* Triangle in upper right */}
      <polygon points="52,38 60,38 56,28" fill="rgba(234,179,8,0.2)" stroke="#FDE047" strokeWidth="1.2" />
      {/* Right-angle square marker */}
      <rect x="58" y="36" width="2.5" height="2.5" fill="none" stroke="#FDE047" strokeWidth="0.8" />
      {/* Rectangle floating top-left */}
      <rect x="20" y="19" width="12" height="8" rx="0.8" fill="rgba(234,179,8,0.15)" stroke="#FDE047" strokeWidth="1" />
      {/* "90°" text */}
      <text x="40" y="18" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#FDE047" opacity="0.9">90°</text>
    </svg>
  );
}

// i7 — Units & Measurement Island (#F59E0B amber) — conversion arrows, balance scale
export function G5IslandUnits({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Shadow */}
      <ellipse cx="40" cy="73" rx="20" ry="4" fill="rgba(245,158,11,0.18)" />
      {/* Rocky underside */}
      <path d="M19,48 Q22,63 31,60 Q40,65 49,60 Q58,63 61,48 Q54,57 40,54 Q26,57 19,48Z" fill="#451A00" />
      <path d="M23,51 Q29,61 40,58 Q51,61 57,51 Q50,59 40,56 Q30,59 23,51Z" fill="#2D1100" />
      {/* Amber surface */}
      <ellipse cx="40" cy="44" rx="22" ry="9" fill="#B45309" />
      <ellipse cx="40" cy="42" rx="22" ry="8.5" fill="#F59E0B" />
      {/* Grass bumps */}
      <ellipse cx="25" cy="40" rx="5" ry="3" fill="#92400E" />
      <ellipse cx="55" cy="40" rx="5" ry="3" fill="#92400E" />
      {/* km ↔ m conversion box */}
      <rect x="20" y="20" width="16" height="9" rx="1.5" fill="rgba(245,158,11,0.15)" stroke="#FCD34D" strokeWidth="0.9" />
      <text x="23" y="26" textAnchor="middle" fontSize="5.5" fontWeight="bold" fill="#FDE68A">km</text>
      <text x="33" y="26" textAnchor="middle" fontSize="5.5" fontWeight="bold" fill="#FDE68A">m</text>
      {/* Double arrow */}
      <line x1="25" y1="25" x2="31" y2="25" stroke="#FCD34D" strokeWidth="0.9" />
      <path d="M29.5,23.5 L31,25 L29.5,26.5" fill="none" stroke="#FCD34D" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M26.5,23.5 L25,25 L26.5,26.5" fill="none" stroke="#FCD34D" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
      {/* Balance scale */}
      {/* Pole */}
      <line x1="49" y1="38" x2="49" y2="22" stroke="#FCD34D" strokeWidth="1.2" strokeLinecap="round" />
      {/* Beam */}
      <line x1="40" y1="24" x2="58" y2="26" stroke="#FCD34D" strokeWidth="1.2" strokeLinecap="round" />
      {/* Left pan string */}
      <line x1="40" y1="24" x2="38" y2="30" stroke="#FCD34D" strokeWidth="0.8" />
      <line x1="40" y1="24" x2="42" y2="30" stroke="#FCD34D" strokeWidth="0.8" />
      {/* Left pan */}
      <path d="M36,30 Q40,32 44,30" fill="none" stroke="#FCD34D" strokeWidth="1" />
      {/* Weight on left pan */}
      <rect x="37.5" y="28" width="5" height="3" rx="0.8" fill="rgba(245,158,11,0.4)" stroke="#FCD34D" strokeWidth="0.7" />
      {/* Right pan string */}
      <line x1="58" y1="26" x2="56" y2="33" stroke="#FCD34D" strokeWidth="0.8" />
      <line x1="58" y1="26" x2="60" y2="33" stroke="#FCD34D" strokeWidth="0.8" />
      {/* Right pan */}
      <path d="M54,33 Q58,35 62,33" fill="none" stroke="#FCD34D" strokeWidth="1" />
      {/* "×1000" label */}
      <text x="29" y="18" textAnchor="middle" fontSize="5" fill="#FCD34D" opacity="0.8">×1000</text>
      {/* Sparkles */}
      <circle cx="21" cy="17" r="1.5" fill="#FCD34D" opacity="0.7" />
      <circle cx="59" cy="18" r="1.5" fill="#FCD34D" opacity="0.6" />
    </svg>
  );
}

// i8 — Word Problems & Data Island (#EC4899 pink) — bar chart + open book + "?"
export function G5IslandWordData({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Shadow */}
      <ellipse cx="40" cy="73" rx="20" ry="4" fill="rgba(236,72,153,0.18)" />
      {/* Rocky underside */}
      <path d="M19,48 Q22,63 31,60 Q40,65 49,60 Q58,63 61,48 Q54,57 40,54 Q26,57 19,48Z" fill="#500730" />
      <path d="M23,51 Q29,61 40,58 Q51,61 57,51 Q50,59 40,56 Q30,59 23,51Z" fill="#370520" />
      {/* Pink surface */}
      <ellipse cx="40" cy="44" rx="22" ry="9" fill="#BE185D" />
      <ellipse cx="40" cy="42" rx="22" ry="8.5" fill="#EC4899" />
      {/* Grass bumps */}
      <ellipse cx="25" cy="40" rx="5" ry="3" fill="#9D174D" />
      <ellipse cx="55" cy="40" rx="5" ry="3" fill="#9D174D" />
      {/* Open book */}
      {/* Book spine */}
      <rect x="38.5" y="25" width="1.5" height="14" rx="0.5" fill="#9D174D" />
      {/* Left page */}
      <path d="M22,26 Q30,23 38.5,25 L38.5,39 Q30,37 22,40 Z" fill="#FFF0F7" stroke="#FBCFE8" strokeWidth="0.6" />
      {/* Right page */}
      <path d="M40,25 Q49,23 56,26 L56,40 Q49,37 40,39 Z" fill="#FFF0F7" stroke="#FBCFE8" strokeWidth="0.6" />
      {/* Text lines on left page */}
      <line x1="25" y1="30" x2="36" y2="29" stroke="#F9A8D4" strokeWidth="0.8" opacity="0.7" />
      <line x1="25" y1="33" x2="36" y2="32" stroke="#F9A8D4" strokeWidth="0.8" opacity="0.7" />
      <line x1="25" y1="36" x2="36" y2="35" stroke="#F9A8D4" strokeWidth="0.8" opacity="0.5" />
      {/* Bar chart on right page */}
      <line x1="42" y1="37" x2="55" y2="37" stroke="#F9A8D4" strokeWidth="0.7" opacity="0.7" />
      {/* Bar 1 */}
      <rect x="43" y="31" width="3" height="6" rx="0.5" fill="rgba(236,72,153,0.5)" stroke="#F9A8D4" strokeWidth="0.6" />
      {/* Bar 2 */}
      <rect x="47" y="28" width="3" height="9" rx="0.5" fill="rgba(236,72,153,0.65)" stroke="#F9A8D4" strokeWidth="0.6" />
      {/* Bar 3 */}
      <rect x="51" y="33" width="3" height="4" rx="0.5" fill="rgba(236,72,153,0.45)" stroke="#F9A8D4" strokeWidth="0.6" />
      {/* "?" floating */}
      <text x="40" y="20" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#F9A8D4">?</text>
      {/* Sparkle dots */}
      <circle cx="23" cy="18" r="1.5" fill="#F9A8D4" opacity="0.7" />
      <circle cx="58" cy="19" r="1.5" fill="#F9A8D4" opacity="0.6" />
      <circle cx="28" cy="15" r="1" fill="#FBCFE8" opacity="0.5" />
    </svg>
  );
}

// i9 — Final Challenge Island (#A855F7 purple) — trophy with star burst
export function G5IslandFinale({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Shadow */}
      <ellipse cx="40" cy="73" rx="20" ry="4" fill="rgba(168,85,247,0.18)" />
      {/* Rocky underside */}
      <path d="M19,48 Q22,63 31,60 Q40,65 49,60 Q58,63 61,48 Q54,57 40,54 Q26,57 19,48Z" fill="#2E1065" />
      <path d="M23,51 Q29,61 40,58 Q51,61 57,51 Q50,59 40,56 Q30,59 23,51Z" fill="#1E0A44" />
      {/* Purple surface */}
      <ellipse cx="40" cy="44" rx="22" ry="9" fill="#6B21A8" />
      <ellipse cx="40" cy="42" rx="22" ry="8.5" fill="#A855F7" />
      {/* Grass bumps */}
      <ellipse cx="25" cy="40" rx="5" ry="3" fill="#7E22CE" />
      <ellipse cx="55" cy="40" rx="5" ry="3" fill="#7E22CE" />
      {/* Star burst rays behind trophy */}
      <line x1="40" y1="15" x2="40" y2="11" stroke="#DDD6FE" strokeWidth="1.2" opacity="0.7" />
      <line x1="40" y1="15" x2="44.5" y2="11.5" stroke="#DDD6FE" strokeWidth="1" opacity="0.6" />
      <line x1="40" y1="15" x2="35.5" y2="11.5" stroke="#DDD6FE" strokeWidth="1" opacity="0.6" />
      <line x1="40" y1="15" x2="46" y2="15" stroke="#DDD6FE" strokeWidth="1" opacity="0.55" />
      <line x1="40" y1="15" x2="34" y2="15" stroke="#DDD6FE" strokeWidth="1" opacity="0.55" />
      <line x1="40" y1="15" x2="44.5" y2="18.5" stroke="#DDD6FE" strokeWidth="1" opacity="0.5" />
      <line x1="40" y1="15" x2="35.5" y2="18.5" stroke="#DDD6FE" strokeWidth="1" opacity="0.5" />
      {/* Trophy cup body */}
      <path d="M33,38 Q32,28 34,24 Q37,21 40,21 Q43,21 46,24 Q48,28 47,38 Z"
        fill="rgba(168,85,247,0.3)" stroke="#C4B5FD" strokeWidth="1.2" />
      {/* Trophy handles */}
      <path d="M33,26 Q28,26 28,30 Q28,33 33,33" fill="none" stroke="#C4B5FD" strokeWidth="1" strokeLinecap="round" />
      <path d="M47,26 Q52,26 52,30 Q52,33 47,33" fill="none" stroke="#C4B5FD" strokeWidth="1" strokeLinecap="round" />
      {/* Trophy base stem */}
      <rect x="38" y="38" width="4" height="3" rx="0.5" fill="rgba(168,85,247,0.4)" stroke="#C4B5FD" strokeWidth="0.8" />
      {/* Trophy base plate */}
      <rect x="35" y="40.5" width="10" height="2" rx="1" fill="rgba(168,85,247,0.35)" stroke="#C4B5FD" strokeWidth="0.8" />
      {/* Star inside trophy */}
      <text x="40" y="33" textAnchor="middle" fontSize="9" fill="#DDD6FE">★</text>
      {/* Floating mini stars */}
      <text x="24" y="21" textAnchor="middle" fontSize="7" fill="#A855F7" opacity="0.75">★</text>
      <text x="57" y="22" textAnchor="middle" fontSize="6" fill="#A855F7" opacity="0.65">★</text>
      <text x="29" y="15" textAnchor="middle" fontSize="5" fill="#C4B5FD" opacity="0.6">★</text>
      <text x="52" y="16" textAnchor="middle" fontSize="5" fill="#C4B5FD" opacity="0.6">★</text>
    </svg>
  );
}

// ─── Export map ───────────────────────────────────────────────────────────────

export const G5_ISLAND_SVGS: Record<string, React.FC<{ size?: number }>> = {
  i1: G5IslandLargeNumbers,
  i2: G5IslandAddSub,
  i3: G5IslandMulDiv,
  i4: G5IslandFractions,
  i5: G5IslandDecimals,
  i6: G5IslandGeometry,
  i7: G5IslandUnits,
  i8: G5IslandWordData,
  i9: G5IslandFinale,
};
