// app/astromath/islands.tsx
// Floating fantasy island SVG illustrations for the AstroMath G1 map
// Each island has a unique visual theme matching its math concept

import React from "react";

type IP = { size?: number };

// i1 — Counting Island (#4ECDC4 teal) — abacus beads, number dots
export function IslandCounting({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Shadow beneath */}
      <ellipse cx="40" cy="73" rx="20" ry="4" fill="rgba(78,205,196,0.18)" />
      {/* Rocky underside */}
      <path d="M19,48 Q22,62 30,60 Q40,65 50,60 Q58,62 61,48 Q55,56 40,54 Q25,56 19,48Z" fill="#2A5F5B" />
      <path d="M23,50 Q28,60 40,57 Q52,60 57,50 Q50,58 40,55 Q30,58 23,50Z" fill="#1E4644" />
      {/* Grassy top surface */}
      <ellipse cx="40" cy="44" rx="22" ry="10" fill="#2ECC71" />
      <ellipse cx="40" cy="42" rx="22" ry="9" fill="#27AE60" />
      {/* Grass bumps */}
      <ellipse cx="24" cy="40" rx="5" ry="3" fill="#2ECC71" />
      <ellipse cx="32" cy="38" rx="5" ry="3" fill="#2ECC71" />
      <ellipse cx="40" cy="37" rx="5" ry="3" fill="#2ECC71" />
      <ellipse cx="48" cy="38" rx="5" ry="3" fill="#2ECC71" />
      <ellipse cx="56" cy="40" rx="5" ry="3" fill="#2ECC71" />
      {/* Abacus frame */}
      <rect x="26" y="22" width="28" height="18" rx="2" fill="none" stroke="#4ECDC4" strokeWidth="1.5" />
      {/* Abacus rods + beads */}
      {[29, 36, 43, 50].map((x, i) => (
        <g key={i}>
          <line x1={x} y1="23" x2={x} y2="39" stroke="#4ECDC4" strokeWidth="0.8" opacity={0.6} />
          {/* 2 beads per rod */}
          <circle cx={x} cy="28" r="2.5" fill="#4ECDC4" />
          <circle cx={x} cy="34" r="2.5" fill={i < 3 ? "#4ECDC4" : "rgba(78,205,196,0.3)"} />
        </g>
      ))}
      {/* Number "1 2 3" floating */}
      <text x="40" y="18" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#4ECDC4" opacity="0.9">1 2 3</text>
    </svg>
  );
}

// i2 — Addition Island (#00D4FF cyan) — plus signs, stacking cubes
export function IslandAddition({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Shadow */}
      <ellipse cx="40" cy="73" rx="20" ry="4" fill="rgba(0,212,255,0.18)" />
      {/* Rocky underside */}
      <path d="M20,48 Q23,63 32,60 Q40,65 48,60 Q57,63 60,48 Q54,57 40,54 Q26,57 20,48Z" fill="#1A4A5A" />
      <path d="M24,51 Q30,61 40,58 Q50,61 56,51 Q49,59 40,56 Q31,59 24,51Z" fill="#12353F" />
      {/* Grass top */}
      <ellipse cx="40" cy="45" rx="21" ry="9" fill="#00B4D8" opacity="0.3" />
      <ellipse cx="40" cy="44" rx="21" ry="8" fill="#0077B6" />
      <ellipse cx="40" cy="42" rx="21" ry="7.5" fill="#0096C7" />
      {/* Stacked cubes (addition) */}
      {/* Bottom row: 3 cubes */}
      {[27, 36, 45].map((x, i) => (
        <g key={i}>
          <rect x={x - 4} y="33" width="8" height="7" rx="1" fill="#00D4FF" opacity="0.8" />
          <rect x={x - 4} y="33" width="8" height="2" rx="1" fill="rgba(255,255,255,0.3)" />
        </g>
      ))}
      {/* Top row: 2 cubes (showing 3+2=5 concept) */}
      {[31, 40].map((x, i) => (
        <g key={i}>
          <rect x={x - 4} y="26" width="8" height="7" rx="1" fill="#00D4FF" opacity="0.9" />
          <rect x={x - 4} y="26" width="8" height="2" rx="1" fill="rgba(255,255,255,0.3)" />
        </g>
      ))}
      {/* Big plus sign */}
      <text x="40" y="20" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#00D4FF">+</text>
      {/* Small plus sparkles */}
      <text x="25" y="23" textAnchor="middle" fontSize="7" fill="#00D4FF" opacity="0.7">+</text>
      <text x="55" y="25" textAnchor="middle" fontSize="6" fill="#00D4FF" opacity="0.6">+</text>
    </svg>
  );
}

// i3 — Subtraction Island (#FF6B6B red/coral) — minus signs, disappearing dots
export function IslandSubtraction({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Shadow */}
      <ellipse cx="40" cy="73" rx="20" ry="4" fill="rgba(255,107,107,0.18)" />
      {/* Rocky underside */}
      <path d="M19,47 Q21,62 29,60 Q40,66 51,60 Q59,62 61,47 Q54,56 40,54 Q26,56 19,47Z" fill="#5A2020" />
      <path d="M22,50 Q28,61 40,58 Q52,61 58,50 Q51,58 40,56 Q29,58 22,50Z" fill="#3D1515" />
      {/* Rocky red surface */}
      <ellipse cx="40" cy="44" rx="22" ry="9" fill="#C0392B" />
      <ellipse cx="40" cy="42" rx="22" ry="8.5" fill="#E74C3C" />
      {/* Grass bumps */}
      <ellipse cx="26" cy="40" rx="5" ry="3" fill="#C0392B" />
      <ellipse cx="54" cy="40" rx="5" ry="3" fill="#C0392B" />
      {/* Row of 5 dots, 3 fading out */}
      {[26, 32, 38, 44, 50].map((x, i) => (
        <circle key={i} cx={x} cy="32" r="3.5"
          fill={i < 2 ? "#FF6B6B" : "rgba(255,107,107,0.25)"}
          stroke={i < 2 ? "#FF8E8E" : "rgba(255,107,107,0.4)"}
          strokeWidth="1" />
      ))}
      {/* Dotted arrow showing removal */}
      <line x1="37" y1="32" x2="51" y2="32" stroke="#FF6B6B" strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />
      {/* Minus signs */}
      <text x="40" y="23" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#FF6B6B">−</text>
      <text x="22" y="25" textAnchor="middle" fontSize="6" fill="#FF6B6B" opacity="0.7">−</text>
      <text x="57" y="20" textAnchor="middle" fontSize="7" fill="#FF6B6B" opacity="0.6">−</text>
    </svg>
  );
}

// i4 — Double & Half Island (#B44DFF purple) — mirrored split, symmetry
export function IslandDoubleHalf({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Shadow */}
      <ellipse cx="40" cy="73" rx="20" ry="4" fill="rgba(180,77,255,0.18)" />
      {/* Rocky underside — split two tone */}
      <path d="M19,47 Q22,62 31,60 Q40,66 40,60 Q40,66 49,60 Q58,62 61,47 Q54,56 40,54 Q26,56 19,47Z" fill="#3A1A5A" />
      {/* Left half surface */}
      <path d="M18,44 Q18,36 40,36 Q40,36 40,52 Q26,55 18,44Z" fill="#7C3AED" />
      {/* Right half surface */}
      <path d="M62,44 Q62,36 40,36 Q40,36 40,52 Q54,55 62,44Z" fill="#9C27B0" />
      {/* Center dividing line */}
      <line x1="40" y1="34" x2="40" y2="54" stroke="#B44DFF" strokeWidth="1.5" strokeDasharray="2 2" />
      {/* Left: 2 dots */}
      <circle cx="30" cy="43" r="4" fill="#B44DFF" opacity="0.9" />
      <circle cx="30" cy="43" r="4" fill="#D580FF" opacity="0.6" />
      {/* Right: 4 dots (doubled) */}
      <circle cx="48" cy="40" r="3" fill="#B44DFF" opacity="0.85" />
      <circle cx="48" cy="47" r="3" fill="#B44DFF" opacity="0.85" />
      {/* Mirror/arrow symbol */}
      <text x="40" y="25" textAnchor="middle" fontSize="9" fill="#B44DFF">×2</text>
      {/* Small sparkles */}
      <circle cx="26" cy="22" r="1.5" fill="#B44DFF" opacity="0.7" />
      <circle cx="54" cy="20" r="1.5" fill="#B44DFF" opacity="0.7" />
      <circle cx="35" cy="18" r="1" fill="#D580FF" opacity="0.6" />
    </svg>
  );
}

// i5 — Numbers to 20 Island (#00FF88 green) — number line, tens frame
export function IslandNumbers20({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Shadow */}
      <ellipse cx="40" cy="73" rx="20" ry="4" fill="rgba(0,255,136,0.15)" />
      {/* Rocky underside */}
      <path d="M18,48 Q21,63 31,60 Q40,65 49,60 Q59,63 62,48 Q55,57 40,54 Q25,57 18,48Z" fill="#1A3A2A" />
      <path d="M22,51 Q28,61 40,58 Q52,61 58,51 Q51,59 40,56 Q29,59 22,51Z" fill="#0F2218" />
      {/* Lush green surface */}
      <ellipse cx="40" cy="44" rx="22" ry="9" fill="#00C870" />
      <ellipse cx="40" cy="42" rx="22" ry="8.5" fill="#00E87A" />
      {/* Number line */}
      <line x1="22" y1="37" x2="58" y2="37" stroke="#00FF88" strokeWidth="1.5" />
      {/* Tick marks + numbers 10, 15, 20 */}
      {[22, 31, 40, 49, 58].map((x, i) => (
        <g key={i}>
          <line x1={x} y1="35" x2={x} y2="39" stroke="#00FF88" strokeWidth="1.2" />
          <text x={x} y="44" textAnchor="middle" fontSize="5.5" fill="#00FF88" fontWeight="bold">
            {[0, 5, 10, 15, 20][i]}
          </text>
        </g>
      ))}
      {/* "20" highlighted at the end */}
      <circle cx="58" cy="37" r="5" fill="rgba(0,255,136,0.2)" stroke="#00FF88" strokeWidth="1" />
      {/* Big 20 floating */}
      <text x="40" y="27" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#00FF88">20</text>
      {/* Small star */}
      <text x="58" y="22" textAnchor="middle" fontSize="8" fill="#00FF88" opacity="0.8">★</text>
    </svg>
  );
}

// i6 — Word Problems Island (#FFD700 gold) — open book, question mark
export function IslandWordProblems({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Shadow */}
      <ellipse cx="40" cy="73" rx="20" ry="4" fill="rgba(255,215,0,0.18)" />
      {/* Rocky underside */}
      <path d="M19,48 Q22,62 31,60 Q40,65 49,60 Q58,62 61,48 Q54,56 40,54 Q26,56 19,48Z" fill="#4A3800" />
      <path d="M23,51 Q29,61 40,58 Q51,61 57,51 Q50,58 40,56 Q30,58 23,51Z" fill="#302500" />
      {/* Sandy/golden surface */}
      <ellipse cx="40" cy="44" rx="22" ry="9" fill="#B8860B" />
      <ellipse cx="40" cy="42" rx="22" ry="8.5" fill="#DAA520" />
      {/* Open book */}
      {/* Book spine */}
      <rect x="39" y="24" width="2" height="17" rx="1" fill="#8B6914" />
      {/* Left page */}
      <path d="M22,25 Q30,22 39,24 L39,40 Q30,38 22,41 Z" fill="#FFF9E6" stroke="#FFD700" strokeWidth="0.5" />
      {/* Right page */}
      <path d="M41,24 Q50,22 58,25 L58,41 Q50,38 41,40 Z" fill="#FFF9E6" stroke="#FFD700" strokeWidth="0.5" />
      {/* Text lines on left page */}
      {[28, 32, 36].map((y, i) => (
        <line key={i} x1="25" y1={y} x2="37" y2={y - 1} stroke="#FFD700" strokeWidth="0.8" opacity="0.6" />
      ))}
      {/* Question mark on right page */}
      <text x="49" y="35" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#FFD700">?</text>
      {/* Floating "?" */}
      <text x="26" y="18" textAnchor="middle" fontSize="8" fill="#FFD700" opacity="0.8">?</text>
      <text x="56" y="20" textAnchor="middle" fontSize="7" fill="#FFD700" opacity="0.7">?</text>
    </svg>
  );
}

// i7 — Shapes Island (#10B981 emerald) — triangle, circle, square, hexagon
export function IslandShapes({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Shadow */}
      <ellipse cx="40" cy="73" rx="20" ry="4" fill="rgba(16,185,129,0.18)" />
      {/* Rocky underside */}
      <path d="M19,48 Q22,63 31,60 Q40,65 49,60 Q58,63 61,48 Q54,57 40,54 Q26,57 19,48Z" fill="#064E3B" />
      <path d="M23,51 Q29,61 40,58 Q51,61 57,51 Q50,59 40,56 Q30,59 23,51Z" fill="#022C22" />
      {/* Green terrain */}
      <ellipse cx="40" cy="44" rx="22" ry="9" fill="#059669" />
      <ellipse cx="40" cy="42" rx="22" ry="8.5" fill="#10B981" />
      {/* Triangle */}
      <polygon points="28,38 22,48 34,48" fill="none" stroke="#10B981" strokeWidth="1.8"
        transform="translate(0,-12)" />
      {/* Actually draw them on top of the island */}
      <polygon points="28,26 22,36 34,36" fill="rgba(16,185,129,0.25)" stroke="#10B981" strokeWidth="1.5" />
      {/* Circle */}
      <circle cx="50" cy="30" r="6" fill="rgba(16,185,129,0.2)" stroke="#10B981" strokeWidth="1.5" />
      {/* Square */}
      <rect x="35" y="24" width="10" height="10" rx="1"
        fill="rgba(16,185,129,0.2)" stroke="#10B981" strokeWidth="1.5" />
      {/* Small diamond */}
      <polygon points="24,21 28,17 32,21 28,25" fill="rgba(16,185,129,0.2)" stroke="#10B981" strokeWidth="1.2" />
    </svg>
  );
}

// i8 — Measurements Island (#FF9500 orange) — clock, ruler, coins
export function IslandMeasurements({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Shadow */}
      <ellipse cx="40" cy="73" rx="20" ry="4" fill="rgba(255,149,0,0.18)" />
      {/* Rocky underside */}
      <path d="M19,47 Q22,62 31,60 Q40,65 49,60 Q58,62 61,47 Q54,56 40,54 Q26,56 19,47Z" fill="#4A2800" />
      <path d="M23,50 Q29,60 40,57 Q51,60 57,50 Q50,58 40,55 Q30,58 23,50Z" fill="#321C00" />
      {/* Warm sandy surface */}
      <ellipse cx="40" cy="44" rx="22" ry="9" fill="#B35900" />
      <ellipse cx="40" cy="42" rx="22" ry="8.5" fill="#E07000" />
      {/* Clock face */}
      <circle cx="30" cy="30" r="9" fill="rgba(255,149,0,0.15)" stroke="#FF9500" strokeWidth="1.5" />
      <circle cx="30" cy="30" r="1.5" fill="#FF9500" />
      {/* Clock hands */}
      <line x1="30" y1="30" x2="30" y2="23" stroke="#FF9500" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="30" y1="30" x2="36" y2="30" stroke="#FF9500" strokeWidth="1.2" strokeLinecap="round" />
      {/* 12 marker */}
      <line x1="30" y1="22" x2="30" y2="24" stroke="#FF9500" strokeWidth="1" />
      {/* Ruler */}
      <rect x="42" y="23" width="18" height="6" rx="1" fill="rgba(255,149,0,0.2)" stroke="#FF9500" strokeWidth="1.2" />
      {[44, 47, 50, 53, 56].map((x, i) => (
        <line key={i} x1={x} y1="25" x2={x} y2={i % 2 === 0 ? "24" : "25.5"} stroke="#FF9500" strokeWidth="0.8" />
      ))}
      {/* Coin stack */}
      {[0, 1, 2].map((i) => (
        <ellipse key={i} cx="54" cy={38 - i * 2.5} rx="5" ry="2.5"
          fill={`rgba(255,149,0,${0.5 + i * 0.15})`} stroke="#FF9500" strokeWidth="0.8" />
      ))}
    </svg>
  );
}

// i9 — Data & Patterns Island (#E879F9 pink) — bar chart, pattern dots
export function IslandDataPatterns({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Shadow */}
      <ellipse cx="40" cy="73" rx="20" ry="4" fill="rgba(232,121,249,0.18)" />
      {/* Rocky underside */}
      <path d="M19,48 Q22,63 31,60 Q40,65 49,60 Q58,63 61,48 Q54,57 40,54 Q26,57 19,48Z" fill="#3D1048" />
      <path d="M23,51 Q29,61 40,58 Q51,61 57,51 Q50,59 40,56 Q30,59 23,51Z" fill="#280A30" />
      {/* Purple surface */}
      <ellipse cx="40" cy="44" rx="22" ry="9" fill="#9B1FAA" />
      <ellipse cx="40" cy="42" rx="22" ry="8.5" fill="#C026D3" />
      {/* Bar chart */}
      <line x1="22" y1="40" x2="46" y2="40" stroke="#E879F9" strokeWidth="1" opacity="0.8" />
      {[24, 29, 34, 39].map((x, i) => {
        const h = [8, 12, 6, 10][i];
        return (
          <rect key={i} x={x} y={40 - h} width="4" height={h} rx="0.5"
            fill={`rgba(232,121,249,${0.5 + i * 0.1})`} stroke="#E879F9" strokeWidth="0.8" />
        );
      })}
      {/* Pattern dots: circle, square, circle, square */}
      <circle cx="52" cy="28" r="3" fill="rgba(232,121,249,0.35)" stroke="#E879F9" strokeWidth="1.2" />
      <rect x="57" y="25" width="6" height="6" rx="0.5" fill="rgba(232,121,249,0.35)" stroke="#E879F9" strokeWidth="1.2" />
      <circle cx="52" cy="36" r="3" fill="rgba(232,121,249,0.35)" stroke="#E879F9" strokeWidth="1.2" />
      <rect x="57" y="33" width="6" height="6" rx="0.5" fill="rgba(232,121,249,0.35)" stroke="#E879F9" strokeWidth="1.2" />
      {/* Sparkle */}
      <circle cx="26" cy="19" r="1.5" fill="#E879F9" opacity="0.8" />
      <circle cx="58" cy="18" r="1" fill="#E879F9" opacity="0.7" />
    </svg>
  );
}

// ─── Export map ───────────────────────────────────────────────────────────────

export const G1_ISLAND_SVGS: Record<string, React.FC<{ size?: number }>> = {
  i1: IslandCounting,
  i2: IslandAddition,
  i3: IslandSubtraction,
  i4: IslandDoubleHalf,
  i5: IslandNumbers20,
  i6: IslandWordProblems,
  i7: IslandShapes,
  i8: IslandMeasurements,
  i9: IslandDataPatterns,
};
