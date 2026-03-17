// app/astromath/islands-g4.tsx
// Floating fantasy island SVG illustrations for the AstroMath G4 map
// Each island has a unique visual theme matching its Grade 4 math concept

import React from "react";

type IP = { size?: number };

// i1 — LargeNumbers Island (#4ECDC4 teal) — place-value blocks, "10000" floating
export function G4IslandLargeNumbers({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Shadow beneath */}
      <ellipse cx="40" cy="73" rx="20" ry="4" fill="rgba(78,205,196,0.18)" />
      {/* Rocky underside */}
      <path d="M19,48 Q22,62 30,60 Q40,65 50,60 Q58,62 61,48 Q55,56 40,54 Q25,56 19,48Z" fill="#2A5F5B" />
      <path d="M23,50 Q28,60 40,57 Q52,60 57,50 Q50,58 40,55 Q30,58 23,50Z" fill="#1E4644" />
      {/* Teal top surface */}
      <ellipse cx="40" cy="44" rx="22" ry="10" fill="#2A9D96" />
      <ellipse cx="40" cy="42" rx="22" ry="9" fill="#35B8B0" />
      {/* Surface bumps */}
      <ellipse cx="24" cy="40" rx="5" ry="3" fill="#3DC5BC" />
      <ellipse cx="56" cy="40" rx="5" ry="3" fill="#3DC5BC" />
      {/* Place-value columns: HTh Th H T O — 5 stacked blocks */}
      {/* O column (1 block) */}
      <rect x="50" y="33" width="7" height="6" rx="1" fill="#4ECDC4" opacity="0.85" />
      <rect x="50" y="33" width="7" height="2" rx="1" fill="rgba(255,255,255,0.25)" />
      {/* T column (2 blocks) */}
      <rect x="42" y="33" width="7" height="6" rx="1" fill="#4ECDC4" opacity="0.85" />
      <rect x="42" y="33" width="7" height="2" rx="1" fill="rgba(255,255,255,0.25)" />
      <rect x="42" y="26" width="7" height="6" rx="1" fill="#4ECDC4" opacity="0.75" />
      <rect x="42" y="26" width="7" height="2" rx="1" fill="rgba(255,255,255,0.2)" />
      {/* H column (3 blocks) */}
      <rect x="34" y="33" width="7" height="6" rx="1" fill="#4ECDC4" opacity="0.85" />
      <rect x="34" y="33" width="7" height="2" rx="1" fill="rgba(255,255,255,0.25)" />
      <rect x="34" y="26" width="7" height="6" rx="1" fill="#4ECDC4" opacity="0.75" />
      <rect x="34" y="26" width="7" height="2" rx="1" fill="rgba(255,255,255,0.2)" />
      <rect x="34" y="19" width="7" height="6" rx="1" fill="#4ECDC4" opacity="0.65" />
      <rect x="34" y="19" width="7" height="2" rx="1" fill="rgba(255,255,255,0.18)" />
      {/* Th label (small, left) */}
      <text x="27" y="35" textAnchor="middle" fontSize="5" fontWeight="bold" fill="#4ECDC4" opacity="0.85">Th</text>
      {/* "10000" floating above */}
      <text x="40" y="15" textAnchor="middle" fontSize="7.5" fontWeight="bold" fill="#4ECDC4" opacity="0.9">10 000</text>
    </svg>
  );
}

// i2 — Multiplication Island (#00D4FF cyan) — dot array, long-multiply lines, "×" sign
export function G4IslandMultiplication({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Shadow */}
      <ellipse cx="40" cy="73" rx="20" ry="4" fill="rgba(0,212,255,0.18)" />
      {/* Rocky underside */}
      <path d="M20,48 Q23,63 32,60 Q40,65 48,60 Q57,63 60,48 Q54,57 40,54 Q26,57 20,48Z" fill="#1A4A5A" />
      <path d="M24,51 Q30,61 40,58 Q50,61 56,51 Q49,59 40,56 Q31,59 24,51Z" fill="#12353F" />
      {/* Cyan-blue surface */}
      <ellipse cx="40" cy="45" rx="21" ry="9" fill="#0077B6" />
      <ellipse cx="40" cy="43" rx="21" ry="8.5" fill="#0096C7" />
      <ellipse cx="24" cy="41" rx="5" ry="3" fill="#0096C7" />
      <ellipse cx="56" cy="41" rx="5" ry="3" fill="#0096C7" />
      {/* 4×3 dot array */}
      {/* row 1 */}
      <circle cx="27" cy="27" r="2.2" fill="#00D4FF" opacity="0.9" />
      <circle cx="33" cy="27" r="2.2" fill="#00D4FF" opacity="0.9" />
      <circle cx="39" cy="27" r="2.2" fill="#00D4FF" opacity="0.9" />
      <circle cx="45" cy="27" r="2.2" fill="#00D4FF" opacity="0.9" />
      {/* row 2 */}
      <circle cx="27" cy="33" r="2.2" fill="#00D4FF" opacity="0.8" />
      <circle cx="33" cy="33" r="2.2" fill="#00D4FF" opacity="0.8" />
      <circle cx="39" cy="33" r="2.2" fill="#00D4FF" opacity="0.8" />
      <circle cx="45" cy="33" r="2.2" fill="#00D4FF" opacity="0.8" />
      {/* row 3 */}
      <circle cx="27" cy="39" r="2.2" fill="#00D4FF" opacity="0.7" />
      <circle cx="33" cy="39" r="2.2" fill="#00D4FF" opacity="0.7" />
      <circle cx="39" cy="39" r="2.2" fill="#00D4FF" opacity="0.7" />
      <circle cx="45" cy="39" r="2.2" fill="#00D4FF" opacity="0.7" />
      {/* Bracket lines: 4 cols, 3 rows */}
      <line x1="52" y1="26" x2="52" y2="40" stroke="#00D4FF" strokeWidth="1" opacity="0.5" />
      <line x1="52" y1="26" x2="54" y2="26" stroke="#00D4FF" strokeWidth="1" opacity="0.5" />
      <line x1="52" y1="40" x2="54" y2="40" stroke="#00D4FF" strokeWidth="1" opacity="0.5" />
      {/* Big × floating top-right */}
      <text x="57" y="22" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#00D4FF" opacity="0.9">×</text>
      {/* "4×3" label */}
      <text x="40" y="19" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#00D4FF" opacity="0.85">4 × 3</text>
    </svg>
  );
}

// i3 — Division Island (#FF6B6B red) — circle split into parts, "÷" sign, remainder "R"
export function G4IslandDivision({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Shadow */}
      <ellipse cx="40" cy="73" rx="20" ry="4" fill="rgba(255,107,107,0.18)" />
      {/* Rocky underside */}
      <path d="M19,47 Q21,62 29,60 Q40,66 51,60 Q59,62 61,47 Q54,56 40,54 Q26,56 19,47Z" fill="#5A2020" />
      <path d="M22,50 Q28,61 40,58 Q52,61 58,50 Q51,58 40,56 Q29,58 22,50Z" fill="#3D1515" />
      {/* Red surface */}
      <ellipse cx="40" cy="44" rx="22" ry="9" fill="#C0392B" />
      <ellipse cx="40" cy="42" rx="22" ry="8.5" fill="#E74C3C" />
      <ellipse cx="26" cy="40" rx="5" ry="3" fill="#C0392B" />
      <ellipse cx="54" cy="40" rx="5" ry="3" fill="#C0392B" />
      {/* Circle divided into 4 parts */}
      <circle cx="36" cy="29" r="10" fill="rgba(255,107,107,0.15)" stroke="#FF6B6B" strokeWidth="1.5" />
      {/* Dividing lines: horizontal + vertical */}
      <line x1="26" y1="29" x2="46" y2="29" stroke="#FF6B6B" strokeWidth="1.2" />
      <line x1="36" y1="19" x2="36" y2="39" stroke="#FF6B6B" strokeWidth="1.2" />
      {/* 3 quadrants filled, 1 empty — showing remainder */}
      <path d="M36,29 L46,29 A10,10 0 0,1 36,39 Z" fill="rgba(255,107,107,0.4)" />
      <path d="M36,29 L26,29 A10,10 0 0,0 36,39 Z" fill="rgba(255,107,107,0.4)" />
      <path d="M36,29 L26,29 A10,10 0 0,1 36,19 Z" fill="rgba(255,107,107,0.4)" />
      {/* "÷" sign */}
      <text x="57" y="30" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#FF6B6B">÷</text>
      {/* "R" remainder label */}
      <text x="56" y="21" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#FF6B6B" opacity="0.8">R</text>
      {/* Small minus sparkles */}
      <text x="23" y="21" textAnchor="middle" fontSize="6" fill="#FF6B6B" opacity="0.7">÷</text>
    </svg>
  );
}

// i4 — Fractions Island (#B44DFF purple) — pizza slices, "1/2" and "3/4" labels
export function G4IslandFractions({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Shadow */}
      <ellipse cx="40" cy="73" rx="20" ry="4" fill="rgba(180,77,255,0.18)" />
      {/* Rocky underside */}
      <path d="M19,47 Q22,62 31,60 Q40,66 49,60 Q58,62 61,47 Q54,56 40,54 Q26,56 19,47Z" fill="#3A1A5A" />
      <path d="M22,50 Q28,61 40,58 Q52,61 58,50 Q51,59 40,56 Q30,59 22,50Z" fill="#28104A" />
      {/* Purple surface */}
      <ellipse cx="40" cy="44" rx="22" ry="9" fill="#7C3AED" />
      <ellipse cx="40" cy="42" rx="22" ry="8.5" fill="#8B5CF6" />
      <ellipse cx="26" cy="40" rx="5" ry="3" fill="#7C3AED" />
      <ellipse cx="54" cy="40" rx="5" ry="3" fill="#7C3AED" />
      {/* Pizza circle — left, showing 3/4 */}
      <circle cx="30" cy="29" r="9" fill="rgba(180,77,255,0.15)" stroke="#B44DFF" strokeWidth="1.4" />
      {/* 3 filled slices (3/4) */}
      <path d="M30,29 L39,29 A9,9 0 0,1 30,38 Z" fill="rgba(180,77,255,0.5)" />
      <path d="M30,29 L21,29 A9,9 0 0,0 30,38 Z" fill="rgba(180,77,255,0.5)" />
      <path d="M30,29 L21,29 A9,9 0 0,1 30,20 Z" fill="rgba(180,77,255,0.5)" />
      {/* Divider lines */}
      <line x1="21" y1="29" x2="39" y2="29" stroke="#B44DFF" strokeWidth="1" />
      <line x1="30" y1="20" x2="30" y2="38" stroke="#B44DFF" strokeWidth="1" />
      {/* "3/4" label */}
      <text x="30" y="18" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#B44DFF">3/4</text>
      {/* Small pizza — right, 1/2 */}
      <circle cx="54" cy="30" r="6" fill="rgba(180,77,255,0.15)" stroke="#B44DFF" strokeWidth="1.2" />
      <path d="M54,30 L60,30 A6,6 0 1,1 48,30 Z" fill="rgba(180,77,255,0.45)" />
      <line x1="48" y1="30" x2="60" y2="30" stroke="#B44DFF" strokeWidth="1" />
      {/* "1/2" label */}
      <text x="54" y="20" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#B44DFF">1/2</text>
      {/* Sparkle dots */}
      <circle cx="22" cy="19" r="1.5" fill="#D580FF" opacity="0.75" />
      <circle cx="60" cy="18" r="1.2" fill="#D580FF" opacity="0.65" />
    </svg>
  );
}

// i5 — Geometry Island (#00FF88 green) — compass, protractor arc, rectangle with "A = l×w"
export function G4IslandGeometry({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Shadow */}
      <ellipse cx="40" cy="73" rx="20" ry="4" fill="rgba(0,255,136,0.15)" />
      {/* Rocky underside */}
      <path d="M18,48 Q21,63 31,60 Q40,65 49,60 Q59,63 62,48 Q55,57 40,54 Q25,57 18,48Z" fill="#1A3A2A" />
      <path d="M22,51 Q28,61 40,58 Q52,61 58,51 Q51,59 40,56 Q29,59 22,51Z" fill="#0F2218" />
      {/* Green surface */}
      <ellipse cx="40" cy="44" rx="22" ry="9" fill="#00C870" />
      <ellipse cx="40" cy="42" rx="22" ry="8.5" fill="#00E87A" />
      <ellipse cx="24" cy="40" rx="5" ry="3" fill="#00C870" />
      <ellipse cx="56" cy="40" rx="5" ry="3" fill="#00C870" />
      {/* Rectangle with label */}
      <rect x="22" y="24" width="22" height="14" rx="1" fill="rgba(0,255,136,0.15)" stroke="#00FF88" strokeWidth="1.4" />
      {/* "A=l×w" inside */}
      <text x="33" y="33" textAnchor="middle" fontSize="5.5" fontWeight="bold" fill="#00FF88">A=l×w</text>
      {/* Compass — right side */}
      {/* Compass pivot */}
      <circle cx="54" cy="26" r="1.5" fill="#00FF88" />
      {/* Left compass leg */}
      <line x1="54" y1="26" x2="48" y2="38" stroke="#00FF88" strokeWidth="1.2" strokeLinecap="round" />
      {/* Right compass leg */}
      <line x1="54" y1="26" x2="60" y2="38" stroke="#00FF88" strokeWidth="1.2" strokeLinecap="round" />
      {/* Compass arc */}
      <path d="M48,38 A8.5,8.5 0 0,0 60,38" fill="none" stroke="#00FF88" strokeWidth="1" strokeDasharray="2 1.5" />
      {/* Protractor arc hint above rectangle */}
      <path d="M22,24 A8,8 0 0,1 30,24" fill="none" stroke="#00FF88" strokeWidth="1" opacity="0.6" />
      <line x1="22" y1="24" x2="19" y2="19" stroke="#00FF88" strokeWidth="0.9" opacity="0.6" />
      <line x1="30" y1="24" x2="31" y2="18" stroke="#00FF88" strokeWidth="0.9" opacity="0.6" />
      {/* Small angle mark in corner */}
      <path d="M22,29 L25,29 L25,26" fill="none" stroke="#00FF88" strokeWidth="0.9" opacity="0.7" />
    </svg>
  );
}

// i6 — WordProblems Island (#FFD700 gold) — open book, math symbols floating out, "?"
export function G4IslandWordProblems({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Shadow */}
      <ellipse cx="40" cy="73" rx="20" ry="4" fill="rgba(255,215,0,0.18)" />
      {/* Rocky underside */}
      <path d="M19,48 Q22,62 31,60 Q40,65 49,60 Q58,62 61,48 Q54,56 40,54 Q26,56 19,48Z" fill="#4A3800" />
      <path d="M23,51 Q29,61 40,58 Q51,61 57,51 Q50,58 40,56 Q30,58 23,51Z" fill="#302500" />
      {/* Golden surface */}
      <ellipse cx="40" cy="44" rx="22" ry="9" fill="#B8860B" />
      <ellipse cx="40" cy="42" rx="22" ry="8.5" fill="#DAA520" />
      <ellipse cx="25" cy="40" rx="5" ry="3" fill="#B8860B" />
      <ellipse cx="55" cy="40" rx="5" ry="3" fill="#B8860B" />
      {/* Open book */}
      {/* Spine */}
      <rect x="39" y="25" width="2" height="16" rx="1" fill="#8B6914" />
      {/* Left page */}
      <path d="M22,26 Q30,23 39,25 L39,40 Q30,38 22,41 Z" fill="#FFF9E6" stroke="#FFD700" strokeWidth="0.5" />
      {/* Right page */}
      <path d="M41,25 Q50,23 58,26 L58,41 Q50,38 41,40 Z" fill="#FFF9E6" stroke="#FFD700" strokeWidth="0.5" />
      {/* Text lines on left page */}
      <line x1="25" y1="30" x2="37" y2="29" stroke="#FFD700" strokeWidth="0.8" opacity="0.55" />
      <line x1="25" y1="33" x2="37" y2="32" stroke="#FFD700" strokeWidth="0.8" opacity="0.55" />
      <line x1="25" y1="36" x2="37" y2="35" stroke="#FFD700" strokeWidth="0.8" opacity="0.55" />
      {/* "?" on right page */}
      <text x="49" y="35" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#FFD700">?</text>
      {/* Floating math symbols coming out of book */}
      <text x="26" y="19" textAnchor="middle" fontSize="7" fill="#FFD700" opacity="0.85">+</text>
      <text x="53" y="18" textAnchor="middle" fontSize="7" fill="#FFD700" opacity="0.8">×</text>
      <text x="61" y="24" textAnchor="middle" fontSize="6" fill="#FFD700" opacity="0.7">?</text>
      <text x="19" y="24" textAnchor="middle" fontSize="6" fill="#FFD700" opacity="0.65">÷</text>
    </svg>
  );
}

// i7 — Units Island (#FF9500 orange) — ruler, km↔m arrows, kg/g conversion
export function G4IslandUnits({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Shadow */}
      <ellipse cx="40" cy="73" rx="20" ry="4" fill="rgba(255,149,0,0.18)" />
      {/* Rocky underside */}
      <path d="M19,47 Q22,62 31,60 Q40,65 49,60 Q58,62 61,47 Q54,56 40,54 Q26,56 19,47Z" fill="#4A2800" />
      <path d="M23,50 Q29,60 40,57 Q51,60 57,50 Q50,58 40,55 Q30,58 23,50Z" fill="#321C00" />
      {/* Orange surface */}
      <ellipse cx="40" cy="44" rx="22" ry="9" fill="#B35900" />
      <ellipse cx="40" cy="42" rx="22" ry="8.5" fill="#E07000" />
      <ellipse cx="25" cy="40" rx="5" ry="3" fill="#B35900" />
      <ellipse cx="55" cy="40" rx="5" ry="3" fill="#B35900" />
      {/* Ruler — horizontal */}
      <rect x="21" y="36" width="38" height="6" rx="1" fill="rgba(255,149,0,0.2)" stroke="#FF9500" strokeWidth="1.2" />
      {/* Ruler tick marks */}
      <line x1="25" y1="36" x2="25" y2="39" stroke="#FF9500" strokeWidth="0.9" />
      <line x1="30" y1="36" x2="30" y2="38" stroke="#FF9500" strokeWidth="0.8" />
      <line x1="35" y1="36" x2="35" y2="39" stroke="#FF9500" strokeWidth="0.9" />
      <line x1="40" y1="36" x2="40" y2="38" stroke="#FF9500" strokeWidth="0.8" />
      <line x1="45" y1="36" x2="45" y2="39" stroke="#FF9500" strokeWidth="0.9" />
      <line x1="50" y1="36" x2="50" y2="38" stroke="#FF9500" strokeWidth="0.8" />
      <line x1="55" y1="36" x2="55" y2="39" stroke="#FF9500" strokeWidth="0.9" />
      {/* km ↔ m conversion arrow */}
      <text x="27" y="31" textAnchor="middle" fontSize="5.5" fontWeight="bold" fill="#FF9500">km</text>
      {/* Double-headed arrow */}
      <line x1="33" y1="29" x2="45" y2="29" stroke="#FF9500" strokeWidth="1.2" />
      <polygon points="33,29 36,27 36,31" fill="#FF9500" />
      <polygon points="45,29 42,27 42,31" fill="#FF9500" />
      <text x="51" y="31" textAnchor="middle" fontSize="5.5" fontWeight="bold" fill="#FF9500">m</text>
      {/* kg ↔ g floating top */}
      <text x="27" y="22" textAnchor="middle" fontSize="5.5" fontWeight="bold" fill="#FF9500" opacity="0.8">kg</text>
      <line x1="32" y1="20" x2="43" y2="20" stroke="#FF9500" strokeWidth="1" opacity="0.7" />
      <polygon points="32,20 35,18.5 35,21.5" fill="#FF9500" opacity="0.7" />
      <polygon points="43,20 40,18.5 40,21.5" fill="#FF9500" opacity="0.7" />
      <text x="48" y="22" textAnchor="middle" fontSize="5.5" fontWeight="bold" fill="#FF9500" opacity="0.8">g</text>
      {/* ×1000 label */}
      <text x="40" y="16" textAnchor="middle" fontSize="5" fill="#FF9500" opacity="0.75">×1000</text>
    </svg>
  );
}

// i8 — Angles Island (#10B981 emerald) — protractor arc, symmetry axis, reflected triangle
export function G4IslandAngles({ size = 80 }: IP) {
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
      <ellipse cx="25" cy="40" rx="5" ry="3" fill="#059669" />
      <ellipse cx="55" cy="40" rx="5" ry="3" fill="#059669" />
      {/* Protractor — semicircle */}
      <path d="M25,38 A13,13 0 0,1 51,38" fill="rgba(16,185,129,0.15)" stroke="#10B981" strokeWidth="1.4" />
      <line x1="25" y1="38" x2="51" y2="38" stroke="#10B981" strokeWidth="1.2" />
      {/* Angle rays from center (38,38) */}
      <line x1="38" y1="38" x2="38" y2="25" stroke="#10B981" strokeWidth="1.2" opacity="0.9" />
      <line x1="38" y1="38" x2="51" y2="38" stroke="#10B981" strokeWidth="1.2" opacity="0.9" />
      {/* Angle arc indicator */}
      <path d="M38,31 A7,7 0 0,1 44,37" fill="none" stroke="#34D399" strokeWidth="1.2" />
      {/* "90°" label */}
      <text x="45" y="31" textAnchor="middle" fontSize="5.5" fontWeight="bold" fill="#10B981">90°</text>
      {/* Symmetry axis — dashed vertical */}
      <line x1="60" y1="20" x2="60" y2="42" stroke="#34D399" strokeWidth="1" strokeDasharray="2 2" opacity="0.8" />
      {/* Left triangle */}
      <polygon points="52,36 56,26 60,36" fill="rgba(16,185,129,0.3)" stroke="#10B981" strokeWidth="1.1" />
      {/* Right triangle (reflected) */}
      <polygon points="68,36 64,26 60,36" fill="rgba(52,211,153,0.3)" stroke="#34D399" strokeWidth="1.1" />
      {/* Sparkle dots */}
      <circle cx="24" cy="21" r="1.5" fill="#34D399" opacity="0.75" />
      <circle cx="54" cy="19" r="1.2" fill="#10B981" opacity="0.65" />
    </svg>
  );
}

// i9 — Finale Island (#E879F9 pink) — golden trophy with star rays
export function G4IslandFinale({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Shadow */}
      <ellipse cx="40" cy="73" rx="20" ry="4" fill="rgba(232,121,249,0.18)" />
      {/* Rocky underside */}
      <path d="M19,48 Q22,63 31,60 Q40,65 49,60 Q58,63 61,48 Q54,57 40,54 Q26,57 19,48Z" fill="#3D1048" />
      <path d="M23,51 Q29,61 40,58 Q51,61 57,51 Q50,59 40,56 Q30,59 23,51Z" fill="#280A30" />
      {/* Pink-purple surface */}
      <ellipse cx="40" cy="44" rx="22" ry="9" fill="#9B1FAA" />
      <ellipse cx="40" cy="42" rx="22" ry="8.5" fill="#C026D3" />
      <ellipse cx="26" cy="40" rx="5" ry="3" fill="#9B1FAA" />
      <ellipse cx="54" cy="40" rx="5" ry="3" fill="#9B1FAA" />
      {/* Trophy glow */}
      <circle cx="40" cy="28" r="13" fill="rgba(232,121,249,0.12)" />
      {/* Trophy cup body */}
      <path d="M34,38 Q33,32 30,28 Q30,20 50,20 Q50,28 47,32 Q46,38 34,38 Z"
        fill="rgba(255,215,0,0.25)" stroke="#FFD700" strokeWidth="1.4" />
      {/* Trophy cup top (wider opening) */}
      <path d="M30,20 Q30,17 40,17 Q50,17 50,20" fill="none" stroke="#FFD700" strokeWidth="1.3" />
      {/* Trophy handles */}
      <path d="M30,24 Q25,24 25,28 Q25,32 30,32" fill="none" stroke="#FFD700" strokeWidth="1.2" />
      <path d="M50,24 Q55,24 55,28 Q55,32 50,32" fill="none" stroke="#FFD700" strokeWidth="1.2" />
      {/* Trophy stem */}
      <rect x="38" y="38" width="4" height="4" rx="0.5" fill="#FFD700" opacity="0.8" />
      {/* Trophy base */}
      <rect x="34" y="42" width="12" height="2.5" rx="1" fill="#FFD700" opacity="0.8" />
      {/* Star in trophy */}
      <text x="40" y="32" textAnchor="middle" fontSize="9" fill="#FFD700">★</text>
      {/* Star rays */}
      <line x1="40" y1="15" x2="40" y2="12" stroke="#FFD700" strokeWidth="1.2" opacity="0.8" />
      <line x1="40" y1="41" x2="40" y2="44" stroke="#FFD700" strokeWidth="1.2" opacity="0.5" />
      <line x1="28" y1="21" x2="26" y2="19" stroke="#FFD700" strokeWidth="1.2" opacity="0.7" />
      <line x1="52" y1="21" x2="54" y2="19" stroke="#FFD700" strokeWidth="1.2" opacity="0.7" />
      <line x1="27" y1="29" x2="24" y2="29" stroke="#FFD700" strokeWidth="1.2" opacity="0.65" />
      <line x1="53" y1="29" x2="56" y2="29" stroke="#FFD700" strokeWidth="1.2" opacity="0.65" />
      {/* Sparkle dots */}
      <circle cx="24" cy="20" r="1.8" fill="#E879F9" opacity="0.8" />
      <circle cx="56" cy="19" r="1.5" fill="#E879F9" opacity="0.75" />
      <circle cx="22" cy="30" r="1.2" fill="#FFD700" opacity="0.7" />
      <circle cx="58" cy="17" r="1.2" fill="#FFD700" opacity="0.65" />
    </svg>
  );
}

// ─── Export map ───────────────────────────────────────────────────────────────

export const G4_ISLAND_SVGS: Record<string, React.FC<{ size?: number }>> = {
  i1: G4IslandLargeNumbers,
  i2: G4IslandMultiplication,
  i3: G4IslandDivision,
  i4: G4IslandFractions,
  i5: G4IslandGeometry,
  i6: G4IslandWordProblems,
  i7: G4IslandUnits,
  i8: G4IslandAngles,
  i9: G4IslandFinale,
};
