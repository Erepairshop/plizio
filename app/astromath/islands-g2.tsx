// app/astromath/islands-g2.tsx
// Floating fantasy island SVG illustrations for the AstroMath G2 map
// Each island has a unique visual theme matching its Grade 2 math concept

import React from "react";

type IP = { size?: number };

// i1 — Numbers to 100 (#4ECDC4 teal) — hundred chart grid, place value blocks
export function G2IslandNumbers100({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Shadow beneath */}
      <ellipse cx="40" cy="73" rx="20" ry="4" fill="rgba(78,205,196,0.18)" />
      {/* Rocky underside */}
      <path d="M19,48 Q22,62 30,60 Q40,65 50,60 Q58,62 61,48 Q55,56 40,54 Q25,56 19,48Z" fill="#2A5F5B" />
      <path d="M23,50 Q28,60 40,57 Q52,60 57,50 Q50,58 40,55 Q30,58 23,50Z" fill="#1E4644" />
      {/* Teal grassy top */}
      <ellipse cx="40" cy="44" rx="22" ry="10" fill="#2A9D94" />
      <ellipse cx="40" cy="42" rx="22" ry="9" fill="#3BBDB4" />
      {/* Grass bumps */}
      <ellipse cx="24" cy="40" rx="5" ry="3" fill="#4ECDC4" />
      <ellipse cx="56" cy="40" rx="5" ry="3" fill="#4ECDC4" />
      {/* Hundred chart — 4×4 mini grid */}
      <rect x="26" y="20" width="28" height="20" rx="1.5" fill="rgba(78,205,196,0.12)" stroke="#4ECDC4" strokeWidth="1" />
      {/* Grid columns */}
      <line x1="33" y1="20" x2="33" y2="40" stroke="#4ECDC4" strokeWidth="0.6" opacity="0.5" />
      <line x1="40" y1="20" x2="40" y2="40" stroke="#4ECDC4" strokeWidth="0.6" opacity="0.5" />
      <line x1="47" y1="20" x2="47" y2="40" stroke="#4ECDC4" strokeWidth="0.6" opacity="0.5" />
      {/* Grid rows */}
      <line x1="26" y1="25" x2="54" y2="25" stroke="#4ECDC4" strokeWidth="0.6" opacity="0.5" />
      <line x1="26" y1="30" x2="54" y2="30" stroke="#4ECDC4" strokeWidth="0.6" opacity="0.5" />
      <line x1="26" y1="35" x2="54" y2="35" stroke="#4ECDC4" strokeWidth="0.6" opacity="0.5" />
      {/* Highlighted cells: 10, 50, 100 */}
      <rect x="47" y="20" width="7" height="5" rx="0.5" fill="rgba(78,205,196,0.45)" />
      <rect x="26" y="30" width="7" height="5" rx="0.5" fill="rgba(78,205,196,0.3)" />
      <rect x="47" y="35" width="7" height="5" rx="0.5" fill="rgba(78,205,196,0.55)" />
      {/* "100" floating above */}
      <text x="40" y="17" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#4ECDC4" opacity="0.9">100</text>
    </svg>
  );
}

// i2 — Mental Math (#00D4FF cyan) — brain with lightning bolt, quick symbols
export function G2IslandMentalMath({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Shadow */}
      <ellipse cx="40" cy="73" rx="20" ry="4" fill="rgba(0,212,255,0.18)" />
      {/* Rocky underside */}
      <path d="M20,48 Q23,63 32,60 Q40,65 48,60 Q57,63 60,48 Q54,57 40,54 Q26,57 20,48Z" fill="#1A4A5A" />
      <path d="M24,51 Q30,61 40,58 Q50,61 56,51 Q49,59 40,56 Q31,59 24,51Z" fill="#12353F" />
      {/* Cyan surface */}
      <ellipse cx="40" cy="44" rx="21" ry="9" fill="#0077B6" />
      <ellipse cx="40" cy="42" rx="21" ry="8" fill="#0096C7" />
      {/* Brain silhouette — two lobes */}
      <path d="M32,38 Q27,33 28,27 Q29,22 34,22 Q35,19 38,20 Q40,18 42,20 Q45,19 46,22 Q51,22 52,27 Q53,33 48,38 Q44,40 40,40 Q36,40 32,38Z"
        fill="rgba(0,212,255,0.2)" stroke="#00D4FF" strokeWidth="1.4" />
      {/* Brain center fold line */}
      <line x1="40" y1="20" x2="40" y2="39" stroke="#00D4FF" strokeWidth="0.8" strokeDasharray="2 1.5" opacity="0.6" />
      {/* Brain wrinkle lines left lobe */}
      <path d="M31,28 Q34,26 35,29" fill="none" stroke="#00D4FF" strokeWidth="0.9" opacity="0.55" />
      <path d="M30,33 Q33,31 34,34" fill="none" stroke="#00D4FF" strokeWidth="0.9" opacity="0.55" />
      {/* Brain wrinkle lines right lobe */}
      <path d="M45,28 Q47,26 49,29" fill="none" stroke="#00D4FF" strokeWidth="0.9" opacity="0.55" />
      <path d="M46,33 Q48,31 50,34" fill="none" stroke="#00D4FF" strokeWidth="0.9" opacity="0.55" />
      {/* Lightning bolt — mental spark */}
      <polygon points="42,20 39,28 42,27 39,36 44,26 41,27"
        fill="#00D4FF" opacity="0.85" />
      {/* Floating + and = sparkles */}
      <text x="22" y="24" textAnchor="middle" fontSize="7" fill="#00D4FF" opacity="0.75">+</text>
      <text x="58" y="26" textAnchor="middle" fontSize="7" fill="#00D4FF" opacity="0.7">=</text>
      <text x="24" y="35" textAnchor="middle" fontSize="6" fill="#00D4FF" opacity="0.55">×</text>
    </svg>
  );
}

// i3 — Addition without carrying (#00FF88 green) — stacked green blocks, plus sign
export function G2IslandAddNoCarry({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Shadow */}
      <ellipse cx="40" cy="73" rx="20" ry="4" fill="rgba(0,255,136,0.16)" />
      {/* Rocky underside */}
      <path d="M18,48 Q21,63 31,60 Q40,65 49,60 Q59,63 62,48 Q55,57 40,54 Q25,57 18,48Z" fill="#1A3A2A" />
      <path d="M22,51 Q28,61 40,58 Q52,61 58,51 Q51,59 40,56 Q29,59 22,51Z" fill="#0F2218" />
      {/* Bright green surface */}
      <ellipse cx="40" cy="44" rx="22" ry="9" fill="#00A855" />
      <ellipse cx="40" cy="42" rx="22" ry="8.5" fill="#00C870" />
      {/* Grass bumps */}
      <ellipse cx="25" cy="40" rx="5" ry="3" fill="#00FF88" opacity="0.5" />
      <ellipse cx="55" cy="40" rx="5" ry="3" fill="#00FF88" opacity="0.5" />
      {/* Left column: 3 blocks (addend A) */}
      <rect x="22" y="32" width="9" height="7" rx="1" fill="rgba(0,255,136,0.75)" stroke="#00FF88" strokeWidth="0.8" />
      <rect x="22" y="24" width="9" height="7" rx="1" fill="rgba(0,255,136,0.65)" stroke="#00FF88" strokeWidth="0.8" />
      <rect x="22" y="16" width="9" height="7" rx="1" fill="rgba(0,255,136,0.55)" stroke="#00FF88" strokeWidth="0.8" />
      {/* Right column: 2 blocks (addend B) */}
      <rect x="49" y="32" width="9" height="7" rx="1" fill="rgba(0,255,136,0.75)" stroke="#00FF88" strokeWidth="0.8" />
      <rect x="49" y="24" width="9" height="7" rx="1" fill="rgba(0,255,136,0.65)" stroke="#00FF88" strokeWidth="0.8" />
      {/* Highlight tops */}
      <rect x="22" y="32" width="9" height="2" rx="1" fill="rgba(255,255,255,0.25)" />
      <rect x="49" y="32" width="9" height="2" rx="1" fill="rgba(255,255,255,0.25)" />
      {/* Big plus in center */}
      <text x="40" y="30" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#00FF88">+</text>
      {/* No carry marker — straight arrow, no going up */}
      <line x1="33" y1="36" x2="47" y2="36" stroke="#00FF88" strokeWidth="1.2" strokeDasharray="2 2" opacity="0.6" />
    </svg>
  );
}

// i4 — Subtraction without borrowing (#FF6B6B red) — red blocks being removed
export function G2IslandSubNoBorrow({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Shadow */}
      <ellipse cx="40" cy="73" rx="20" ry="4" fill="rgba(255,107,107,0.18)" />
      {/* Rocky underside */}
      <path d="M19,47 Q21,62 29,60 Q40,66 51,60 Q59,62 61,47 Q54,56 40,54 Q26,56 19,47Z" fill="#5A2020" />
      <path d="M22,50 Q28,61 40,58 Q52,61 58,50 Q51,58 40,56 Q29,58 22,50Z" fill="#3D1515" />
      {/* Red rocky surface */}
      <ellipse cx="40" cy="44" rx="22" ry="9" fill="#C0392B" />
      <ellipse cx="40" cy="42" rx="22" ry="8.5" fill="#E74C3C" />
      {/* Grass bumps */}
      <ellipse cx="26" cy="40" rx="5" ry="3" fill="#C0392B" />
      <ellipse cx="54" cy="40" rx="5" ry="3" fill="#C0392B" />
      {/* 5 blocks in a row — last 2 have an X (being removed) */}
      {/* Block 1 — solid */}
      <rect x="21" y="27" width="8" height="8" rx="1" fill="rgba(255,107,107,0.8)" stroke="#FF6B6B" strokeWidth="0.9" />
      <rect x="21" y="27" width="8" height="2" rx="0.5" fill="rgba(255,255,255,0.2)" />
      {/* Block 2 — solid */}
      <rect x="30" y="27" width="8" height="8" rx="1" fill="rgba(255,107,107,0.8)" stroke="#FF6B6B" strokeWidth="0.9" />
      <rect x="30" y="27" width="8" height="2" rx="0.5" fill="rgba(255,255,255,0.2)" />
      {/* Block 3 — solid */}
      <rect x="39" y="27" width="8" height="8" rx="1" fill="rgba(255,107,107,0.8)" stroke="#FF6B6B" strokeWidth="0.9" />
      <rect x="39" y="27" width="8" height="2" rx="0.5" fill="rgba(255,255,255,0.2)" />
      {/* Block 4 — fading (being removed) */}
      <rect x="48" y="27" width="8" height="8" rx="1" fill="rgba(255,107,107,0.25)" stroke="#FF6B6B" strokeWidth="0.9" strokeDasharray="2 1.5" />
      {/* Block 5 — fading */}
      <rect x="57" y="27" width="8" height="8" rx="1" fill="rgba(255,107,107,0.15)" stroke="#FF6B6B" strokeWidth="0.9" strokeDasharray="2 1.5" />
      {/* X marks on removed blocks */}
      <line x1="50" y1="29" x2="54" y2="33" stroke="#FF6B6B" strokeWidth="1.2" opacity="0.8" />
      <line x1="54" y1="29" x2="50" y2="33" stroke="#FF6B6B" strokeWidth="1.2" opacity="0.8" />
      <line x1="59" y1="29" x2="63" y2="33" stroke="#FF6B6B" strokeWidth="1.2" opacity="0.8" />
      <line x1="63" y1="29" x2="59" y2="33" stroke="#FF6B6B" strokeWidth="1.2" opacity="0.8" />
      {/* Minus sign */}
      <text x="35" y="22" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#FF6B6B">−</text>
      <text x="22" y="20" textAnchor="middle" fontSize="6" fill="#FF6B6B" opacity="0.65">−</text>
    </svg>
  );
}

// i5 — Addition with carrying (#B44DFF purple) — blocks with carry arrow going up
export function G2IslandAddCarry({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Shadow */}
      <ellipse cx="40" cy="73" rx="20" ry="4" fill="rgba(180,77,255,0.18)" />
      {/* Rocky underside */}
      <path d="M19,47 Q22,62 31,60 Q40,66 49,60 Q58,62 61,47 Q54,56 40,54 Q26,56 19,47Z" fill="#3A1A5A" />
      <path d="M23,50 Q29,60 40,57 Q51,60 57,50 Q50,58 40,55 Q30,58 23,50Z" fill="#250E40" />
      {/* Purple surface */}
      <ellipse cx="40" cy="44" rx="22" ry="9" fill="#6D28D9" />
      <ellipse cx="40" cy="42" rx="22" ry="8.5" fill="#7C3AED" />
      {/* Tens column — units stack overflow visual */}
      {/* Ones column — 6 blocks stacked (showing carry at 10) */}
      <rect x="48" y="36" width="8" height="5" rx="1" fill="rgba(180,77,255,0.8)" stroke="#B44DFF" strokeWidth="0.8" />
      <rect x="48" y="30" width="8" height="5" rx="1" fill="rgba(180,77,255,0.75)" stroke="#B44DFF" strokeWidth="0.8" />
      <rect x="48" y="24" width="8" height="5" rx="1" fill="rgba(180,77,255,0.7)" stroke="#B44DFF" strokeWidth="0.8" />
      {/* Tens column — the carried "1" lands here */}
      <rect x="24" y="36" width="8" height="5" rx="1" fill="rgba(180,77,255,0.7)" stroke="#B44DFF" strokeWidth="0.8" />
      <rect x="24" y="30" width="8" height="5" rx="1" fill="rgba(180,77,255,0.65)" stroke="#B44DFF" strokeWidth="0.8" />
      {/* Carry "1" block — glowing, above ones column */}
      <rect x="48" y="17" width="8" height="6" rx="1.5" fill="rgba(180,77,255,0.95)" stroke="#D580FF" strokeWidth="1.2" />
      <text x="52" y="22" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#ffffff">1</text>
      {/* Curved carry arrow from ones col top → tens col top */}
      <path d="M52,17 Q52,12 40,12 Q30,12 28,17" fill="none" stroke="#B44DFF" strokeWidth="1.4"
        strokeDasharray="2 1.5" markerEnd="url(#arrowPurple)" />
      {/* Arrow head (manually drawn since markers may not work without defs in isolation) */}
      <polygon points="28,17 25,14 31,13" fill="#B44DFF" opacity="0.9" />
      {/* Plus sign between columns */}
      <text x="40" y="36" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#B44DFF">+</text>
      {/* Vertical divider line */}
      <line x1="40" y1="22" x2="40" y2="42" stroke="#B44DFF" strokeWidth="0.8" strokeDasharray="2 2" opacity="0.5" />
      {/* Column labels */}
      <text x="28" y="18" textAnchor="middle" fontSize="5" fill="#D580FF" opacity="0.75">Z</text>
      <text x="52" y="14" textAnchor="middle" fontSize="5" fill="#D580FF" opacity="0.75">E</text>
    </svg>
  );
}

// i6 — Subtraction with borrowing (#FFD700 gold) — gold blocks with borrow arrow
export function G2IslandSubBorrow({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Shadow */}
      <ellipse cx="40" cy="73" rx="20" ry="4" fill="rgba(255,215,0,0.18)" />
      {/* Rocky underside */}
      <path d="M19,48 Q22,62 31,60 Q40,65 49,60 Q58,62 61,48 Q54,56 40,54 Q26,56 19,48Z" fill="#4A3800" />
      <path d="M23,51 Q29,61 40,58 Q51,61 57,51 Q50,58 40,56 Q30,58 23,51Z" fill="#302500" />
      {/* Golden sandy surface */}
      <ellipse cx="40" cy="44" rx="22" ry="9" fill="#B8860B" />
      <ellipse cx="40" cy="42" rx="22" ry="8.5" fill="#DAA520" />
      {/* Tens column: a block being opened/borrowed from */}
      <rect x="23" y="25" width="10" height="14" rx="1.5" fill="rgba(255,215,0,0.65)" stroke="#FFD700" strokeWidth="1.1" />
      {/* The block splits open — dashed line in middle */}
      <line x1="23" y1="32" x2="33" y2="32" stroke="#FFD700" strokeWidth="0.9" strokeDasharray="2 1.5" opacity="0.7" />
      {/* Borrow arrow — curved from tens to ones column */}
      <path d="M28,25 Q28,18 40,18 Q50,18 51,23" fill="none" stroke="#FFD700" strokeWidth="1.4" strokeDasharray="2 1.5" />
      {/* Arrow head at destination */}
      <polygon points="51,23 48,19 54,19" fill="#FFD700" opacity="0.9" />
      {/* Ones column: 3 blocks + borrowed 10 arriving */}
      <rect x="47" y="31" width="9" height="5" rx="1" fill="rgba(255,215,0,0.75)" stroke="#FFD700" strokeWidth="0.8" />
      <rect x="47" y="25" width="9" height="5" rx="1" fill="rgba(255,215,0,0.65)" stroke="#FFD700" strokeWidth="0.8" />
      {/* Borrowed "10" block glowing */}
      <rect x="47" y="19" width="9" height="5" rx="1" fill="rgba(255,215,0,0.9)" stroke="#FFEC60" strokeWidth="1.2" />
      <text x="51" y="24" textAnchor="middle" fontSize="5.5" fontWeight="bold" fill="#7A5500">10</text>
      {/* Minus sign */}
      <text x="40" y="38" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#FFD700">−</text>
      {/* Vertical divider */}
      <line x1="40" y1="22" x2="40" y2="42" stroke="#FFD700" strokeWidth="0.8" strokeDasharray="2 2" opacity="0.5" />
      {/* Small sparkles */}
      <circle cx="22" cy="19" r="1.5" fill="#FFD700" opacity="0.7" />
      <circle cx="59" cy="17" r="1" fill="#FFD700" opacity="0.6" />
    </svg>
  );
}

// i7 — Times Tables (#FF9500 orange) — multiplication grid, × signs, dot array
export function G2IslandTimesTables({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Shadow */}
      <ellipse cx="40" cy="73" rx="20" ry="4" fill="rgba(255,149,0,0.18)" />
      {/* Rocky underside */}
      <path d="M19,47 Q22,62 31,60 Q40,65 49,60 Q58,62 61,47 Q54,56 40,54 Q26,56 19,47Z" fill="#4A2800" />
      <path d="M23,50 Q29,60 40,57 Q51,60 57,50 Q50,58 40,55 Q30,58 23,50Z" fill="#321C00" />
      {/* Warm orange surface */}
      <ellipse cx="40" cy="44" rx="22" ry="9" fill="#B35900" />
      <ellipse cx="40" cy="42" rx="22" ry="8.5" fill="#E07000" />
      {/* 3×4 dot array (showing multiplication) */}
      {/* Row 1 */}
      <circle cx="27" cy="23" r="2.2" fill="#FF9500" opacity="0.9" />
      <circle cx="33" cy="23" r="2.2" fill="#FF9500" opacity="0.9" />
      <circle cx="39" cy="23" r="2.2" fill="#FF9500" opacity="0.9" />
      <circle cx="45" cy="23" r="2.2" fill="#FF9500" opacity="0.9" />
      {/* Row 2 */}
      <circle cx="27" cy="29" r="2.2" fill="#FF9500" opacity="0.85" />
      <circle cx="33" cy="29" r="2.2" fill="#FF9500" opacity="0.85" />
      <circle cx="39" cy="29" r="2.2" fill="#FF9500" opacity="0.85" />
      <circle cx="45" cy="29" r="2.2" fill="#FF9500" opacity="0.85" />
      {/* Row 3 */}
      <circle cx="27" cy="35" r="2.2" fill="#FF9500" opacity="0.8" />
      <circle cx="33" cy="35" r="2.2" fill="#FF9500" opacity="0.8" />
      <circle cx="39" cy="35" r="2.2" fill="#FF9500" opacity="0.8" />
      <circle cx="45" cy="35" r="2.2" fill="#FF9500" opacity="0.8" />
      {/* Bracket lines showing 3 rows × 4 cols */}
      <line x1="23" y1="20" x2="23" y2="38" stroke="#FF9500" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="23" y1="20" x2="26" y2="20" stroke="#FF9500" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="23" y1="38" x2="26" y2="38" stroke="#FF9500" strokeWidth="1.2" strokeLinecap="round" />
      {/* "×" symbol */}
      <text x="58" y="30" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#FF9500">×</text>
      {/* Small sparkle × */}
      <text x="57" y="20" textAnchor="middle" fontSize="6" fill="#FF9500" opacity="0.7">×</text>
      <text x="20" y="16" textAnchor="middle" fontSize="6" fill="#FF9500" opacity="0.65">×</text>
    </svg>
  );
}

// i8 — Division (#10B981 emerald) — sharing groups, ÷ sign, equal dot groups
export function G2IslandDivision({ size = 80 }: IP) {
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
      {/* Three groups (plates/circles) for sharing */}
      {/* Group 1 circle */}
      <circle cx="24" cy="30" r="8" fill="rgba(16,185,129,0.15)" stroke="#10B981" strokeWidth="1.2" />
      {/* Group 2 circle */}
      <circle cx="40" cy="30" r="8" fill="rgba(16,185,129,0.15)" stroke="#10B981" strokeWidth="1.2" />
      {/* Group 3 circle */}
      <circle cx="56" cy="30" r="8" fill="rgba(16,185,129,0.15)" stroke="#10B981" strokeWidth="1.2" />
      {/* 2 dots in each group */}
      <circle cx="21" cy="28" r="2" fill="#10B981" opacity="0.9" />
      <circle cx="27" cy="32" r="2" fill="#10B981" opacity="0.9" />
      <circle cx="37" cy="28" r="2" fill="#10B981" opacity="0.9" />
      <circle cx="43" cy="32" r="2" fill="#10B981" opacity="0.9" />
      <circle cx="53" cy="28" r="2" fill="#10B981" opacity="0.9" />
      <circle cx="59" cy="32" r="2" fill="#10B981" opacity="0.9" />
      {/* Equal signs between groups */}
      <text x="32" y="31" textAnchor="middle" fontSize="7" fill="#10B981" opacity="0.65">=</text>
      <text x="48" y="31" textAnchor="middle" fontSize="7" fill="#10B981" opacity="0.65">=</text>
      {/* ÷ floating above */}
      <text x="40" y="18" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#10B981">÷</text>
      {/* Small sparkle */}
      <circle cx="22" cy="17" r="1.5" fill="#10B981" opacity="0.75" />
      <circle cx="58" cy="19" r="1.5" fill="#10B981" opacity="0.7" />
    </svg>
  );
}

// i9 — Measurement & Word Problems (#E879F9 pink) — ruler, clock, question mark
export function G2IslandMeasurement({ size = 80 }: IP) {
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
      {/* Grass bumps */}
      <ellipse cx="25" cy="40" rx="5" ry="3" fill="#C026D3" opacity="0.7" />
      <ellipse cx="55" cy="40" rx="5" ry="3" fill="#C026D3" opacity="0.7" />
      {/* Ruler — horizontal */}
      <rect x="20" y="33" width="40" height="6" rx="1" fill="rgba(232,121,249,0.2)" stroke="#E879F9" strokeWidth="1.2" />
      {/* Ruler tick marks */}
      <line x1="24" y1="33" x2="24" y2="37" stroke="#E879F9" strokeWidth="0.9" />
      <line x1="28" y1="33" x2="28" y2="35.5" stroke="#E879F9" strokeWidth="0.7" />
      <line x1="32" y1="33" x2="32" y2="37" stroke="#E879F9" strokeWidth="0.9" />
      <line x1="36" y1="33" x2="36" y2="35.5" stroke="#E879F9" strokeWidth="0.7" />
      <line x1="40" y1="33" x2="40" y2="37" stroke="#E879F9" strokeWidth="0.9" />
      <line x1="44" y1="33" x2="44" y2="35.5" stroke="#E879F9" strokeWidth="0.7" />
      <line x1="48" y1="33" x2="48" y2="37" stroke="#E879F9" strokeWidth="0.9" />
      <line x1="52" y1="33" x2="52" y2="35.5" stroke="#E879F9" strokeWidth="0.7" />
      <line x1="56" y1="33" x2="56" y2="37" stroke="#E879F9" strokeWidth="0.9" />
      {/* Small analog clock */}
      <circle cx="28" cy="24" r="7" fill="rgba(232,121,249,0.15)" stroke="#E879F9" strokeWidth="1.3" />
      <circle cx="28" cy="24" r="1.2" fill="#E879F9" />
      {/* Clock hands */}
      <line x1="28" y1="24" x2="28" y2="18" stroke="#E879F9" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="28" y1="24" x2="33" y2="24" stroke="#E879F9" strokeWidth="1.1" strokeLinecap="round" />
      {/* 12 tick */}
      <line x1="28" y1="17.5" x2="28" y2="19" stroke="#E879F9" strokeWidth="1" />
      {/* Big question mark */}
      <text x="52" y="28" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#E879F9">?</text>
      {/* Small floating ? */}
      <text x="20" y="18" textAnchor="middle" fontSize="7" fill="#E879F9" opacity="0.7">?</text>
    </svg>
  );
}

// ─── Export map ───────────────────────────────────────────────────────────────

export const G2_ISLAND_SVGS: Record<string, React.FC<{ size?: number }>> = {
  i1: G2IslandNumbers100,
  i2: G2IslandMentalMath,
  i3: G2IslandAddNoCarry,
  i4: G2IslandSubNoBorrow,
  i5: G2IslandAddCarry,
  i6: G2IslandSubBorrow,
  i7: G2IslandTimesTables,
  i8: G2IslandDivision,
  i9: G2IslandMeasurement,
};
