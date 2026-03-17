// app/astromath/islands-g7.tsx
// Floating fantasy island SVG illustrations for the AstroMath G7 map
// Each island has a unique visual theme matching its math concept

import React from "react";

type IP = { size?: number };

// i1 — Powers Island (#6366F1 indigo) — "2³=8", power tower, lightning bolt
export function G7IslandPowers({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Shadow beneath */}
      <ellipse cx="40" cy="73" rx="20" ry="4" fill="rgba(99,102,241,0.18)" />
      {/* Rocky underside */}
      <path d="M19,48 Q22,62 30,60 Q40,65 50,60 Q58,62 61,48 Q55,56 40,54 Q25,56 19,48Z" fill="#1E1B4B" />
      <path d="M23,50 Q28,60 40,57 Q52,60 57,50 Q50,58 40,55 Q30,58 23,50Z" fill="#14113A" />
      {/* Deep indigo surface */}
      <ellipse cx="40" cy="44" rx="22" ry="10" fill="#3730A3" />
      <ellipse cx="40" cy="42" rx="22" ry="9" fill="#4338CA" />
      {/* Surface bumps */}
      <ellipse cx="24" cy="40" rx="5" ry="3" fill="#3730A3" />
      <ellipse cx="56" cy="40" rx="5" ry="3" fill="#3730A3" />
      {/* Power tower: stacked base → mid → top block */}
      <rect x="28" y="36" width="12" height="5" rx="1" fill="rgba(99,102,241,0.30)" stroke="#6366F1" strokeWidth="1" />
      <rect x="31" y="30" width="8" height="6" rx="1" fill="rgba(99,102,241,0.45)" stroke="#6366F1" strokeWidth="1" />
      <rect x="33" y="25" width="5" height="5" rx="1" fill="rgba(99,102,241,0.65)" stroke="#6366F1" strokeWidth="1" />
      {/* Lightning bolt right side */}
      <polygon points="52,22 48,31 51,31 47,42 55,30 52,30" fill="#6366F1" opacity="0.85" />
      {/* "2³=8" floating label */}
      <text x="40" y="17" textAnchor="middle" fontSize="7.5" fontWeight="bold" fill="#A5B4FC">2</text>
      <text x="45" y="13" textAnchor="middle" fontSize="5" fontWeight="bold" fill="#C7D2FE">3</text>
      <text x="51" y="17" textAnchor="middle" fontSize="7.5" fontWeight="bold" fill="#A5B4FC">=8</text>
      {/* Sparkles */}
      <circle cx="23" cy="20" r="1.5" fill="#6366F1" opacity="0.7" />
      <circle cx="58" cy="18" r="1" fill="#A5B4FC" opacity="0.6" />
    </svg>
  );
}

// i2 — AlgebraicExpr Island (#3B82F6 blue) — "3x+2y", variable bubbles, arrows
export function G7IslandAlgebraicExpr({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Shadow */}
      <ellipse cx="40" cy="73" rx="20" ry="4" fill="rgba(59,130,246,0.18)" />
      {/* Rocky underside */}
      <path d="M20,48 Q23,63 32,60 Q40,65 48,60 Q57,63 60,48 Q54,57 40,54 Q26,57 20,48Z" fill="#1E3A5F" />
      <path d="M24,51 Q30,61 40,58 Q50,61 56,51 Q49,59 40,56 Q31,59 24,51Z" fill="#122540" />
      {/* Blue surface */}
      <ellipse cx="40" cy="45" rx="21" ry="9" fill="#1D4ED8" />
      <ellipse cx="40" cy="43" rx="21" ry="8.5" fill="#2563EB" />
      <ellipse cx="40" cy="41" rx="21" ry="8" fill="#3B82F6" opacity="0.6" />
      {/* Variable bubble x */}
      <circle cx="27" cy="32" r="7" fill="rgba(59,130,246,0.20)" stroke="#3B82F6" strokeWidth="1.2" />
      <text x="27" y="35" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#93C5FD">x</text>
      {/* Variable bubble y */}
      <circle cx="53" cy="32" r="7" fill="rgba(59,130,246,0.20)" stroke="#3B82F6" strokeWidth="1.2" />
      <text x="53" y="35" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#93C5FD">y</text>
      {/* Simplification arrow center */}
      <path d="M34,32 Q40,28 46,32" stroke="#60A5FA" strokeWidth="1.2" fill="none" strokeDasharray="2 1.5" />
      <polygon points="46,30 49,33 46,34" fill="#60A5FA" opacity="0.8" />
      {/* "3x+2y" formula floating */}
      <text x="40" y="19" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#BFDBFE">3x+2y</text>
      {/* Small plus sparkle */}
      <text x="22" y="21" textAnchor="middle" fontSize="6" fill="#3B82F6" opacity="0.7">+</text>
      <text x="59" y="22" textAnchor="middle" fontSize="6" fill="#3B82F6" opacity="0.6">+</text>
    </svg>
  );
}

// i3 — Equations Island (#10B981 emerald) — balance scale, "x" on one side, "="
export function G7IslandEquations({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Shadow */}
      <ellipse cx="40" cy="73" rx="20" ry="4" fill="rgba(16,185,129,0.18)" />
      {/* Rocky underside */}
      <path d="M19,47 Q21,62 29,60 Q40,66 51,60 Q59,62 61,47 Q54,56 40,54 Q26,56 19,47Z" fill="#064E3B" />
      <path d="M22,50 Q28,61 40,58 Q52,61 58,50 Q51,58 40,56 Q29,58 22,50Z" fill="#022C22" />
      {/* Emerald surface */}
      <ellipse cx="40" cy="44" rx="22" ry="9" fill="#059669" />
      <ellipse cx="40" cy="42" rx="22" ry="8.5" fill="#10B981" />
      {/* Scale stand */}
      <line x1="40" y1="42" x2="40" y2="26" stroke="#6EE7B7" strokeWidth="1.5" />
      <line x1="27" y1="28" x2="53" y2="26" stroke="#6EE7B7" strokeWidth="1.2" />
      {/* Left pan */}
      <path d="M22,30 Q27,34 32,30" stroke="#6EE7B7" strokeWidth="1" fill="none" />
      <line x1="22" y1="30" x2="27" y2="28" stroke="#6EE7B7" strokeWidth="0.8" />
      <line x1="32" y1="30" x2="27" y2="28" stroke="#6EE7B7" strokeWidth="0.8" />
      {/* Right pan */}
      <path d="M48,28 Q53,32 58,28" stroke="#6EE7B7" strokeWidth="1" fill="none" />
      <line x1="48" y1="28" x2="53" y2="26" stroke="#6EE7B7" strokeWidth="0.8" />
      <line x1="58" y1="28" x2="53" y2="26" stroke="#6EE7B7" strokeWidth="0.8" />
      {/* "x" on left pan */}
      <text x="27" y="29" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#34D399">x</text>
      {/* "5" on right pan */}
      <text x="53" y="27" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#34D399">5</text>
      {/* "=" sign floating */}
      <text x="40" y="18" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#6EE7B7">=</text>
      {/* Small pivot dot */}
      <circle cx="40" cy="26" r="2" fill="#10B981" stroke="#6EE7B7" strokeWidth="0.8" />
    </svg>
  );
}

// i4 — Inequalities Island (#EC4899 pink) — number line, open/closed dots, ">" "<"
export function G7IslandInequalities({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Shadow */}
      <ellipse cx="40" cy="73" rx="20" ry="4" fill="rgba(236,72,153,0.18)" />
      {/* Rocky underside */}
      <path d="M19,48 Q22,62 31,60 Q40,65 49,60 Q58,62 61,48 Q54,56 40,54 Q26,56 19,48Z" fill="#500724" />
      <path d="M23,51 Q29,61 40,58 Q51,61 57,51 Q50,59 40,56 Q30,59 23,51Z" fill="#370518" />
      {/* Pink surface */}
      <ellipse cx="40" cy="44" rx="22" ry="9" fill="#BE185D" />
      <ellipse cx="40" cy="42" rx="22" ry="8.5" fill="#EC4899" />
      {/* Number line */}
      <line x1="22" y1="33" x2="58" y2="33" stroke="#FBCFE8" strokeWidth="1.5" />
      {/* Arrow heads on number line */}
      <polygon points="58,33 55,31 55,35" fill="#FBCFE8" />
      {/* Tick marks at 22, 31, 40, 49, 58 */}
      <line x1="22" y1="31" x2="22" y2="35" stroke="#FBCFE8" strokeWidth="1" />
      <line x1="31" y1="31" x2="31" y2="35" stroke="#FBCFE8" strokeWidth="1" />
      <line x1="40" y1="31" x2="40" y2="35" stroke="#FBCFE8" strokeWidth="1" />
      <line x1="49" y1="31" x2="49" y2="35" stroke="#FBCFE8" strokeWidth="1" />
      {/* Shaded region (open interval) */}
      <rect x="31" y="30" width="18" height="6" rx="3" fill="rgba(236,72,153,0.25)" />
      {/* Open dot at 31 */}
      <circle cx="31" cy="33" r="3" fill="none" stroke="#F9A8D4" strokeWidth="1.5" />
      {/* Closed dot at 49 */}
      <circle cx="49" cy="33" r="3" fill="#F9A8D4" stroke="#F9A8D4" strokeWidth="1" />
      {/* ">" and "<" symbols floating */}
      <text x="26" y="23" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#F9A8D4">&lt;</text>
      <text x="55" y="23" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#F9A8D4">&gt;</text>
      {/* "x" floating above */}
      <text x="40" y="19" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#FBCFE8">x ∈ (3,5]</text>
    </svg>
  );
}

// i5 — Triangles Island (#F59E0B amber) — various triangles, angle labels
export function G7IslandTriangles({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Shadow */}
      <ellipse cx="40" cy="73" rx="20" ry="4" fill="rgba(245,158,11,0.18)" />
      {/* Rocky underside */}
      <path d="M19,47 Q22,62 31,60 Q40,65 49,60 Q58,62 61,47 Q54,56 40,54 Q26,56 19,47Z" fill="#451A03" />
      <path d="M23,50 Q29,60 40,57 Q51,60 57,50 Q50,58 40,55 Q30,58 23,50Z" fill="#2D1100" />
      {/* Amber surface */}
      <ellipse cx="40" cy="44" rx="22" ry="9" fill="#B45309" />
      <ellipse cx="40" cy="42" rx="22" ry="8.5" fill="#D97706" />
      {/* Surface bumps */}
      <ellipse cx="25" cy="40" rx="4" ry="2.5" fill="#B45309" />
      <ellipse cx="55" cy="40" rx="4" ry="2.5" fill="#B45309" />
      {/* Equilateral triangle (left) */}
      <polygon points="25,40 20,32 30,32"
        fill="rgba(245,158,11,0.25)" stroke="#FCD34D" strokeWidth="1.3" />
      {/* Right triangle (center) */}
      <polygon points="35,40 35,26 50,40"
        fill="rgba(245,158,11,0.25)" stroke="#FCD34D" strokeWidth="1.3" />
      {/* Right-angle mark */}
      <rect x="35" y="37" width="3" height="3" fill="none" stroke="#FCD34D" strokeWidth="0.9" />
      {/* Isosceles triangle (right) */}
      <polygon points="57,40 53,29 61,29"
        fill="rgba(245,158,11,0.25)" stroke="#FCD34D" strokeWidth="1.3" />
      {/* Angle arc center triangle */}
      <path d="M 38,40 A 4,4 0 0,1 35,36" stroke="#FCD34D" strokeWidth="0.9" fill="none" />
      {/* "60°" label */}
      <text x="25" y="18" textAnchor="middle" fontSize="6" fill="#FDE68A">60°</text>
      <text x="40" y="18" textAnchor="middle" fontSize="6" fill="#FDE68A">90°</text>
      <text x="57" y="18" textAnchor="middle" fontSize="6" fill="#FDE68A">Δ</text>
    </svg>
  );
}

// i6 — Pythagoras Island (#8B5CF6 violet) — right triangle with squares on sides, a²+b²=c²
export function G7IslandPythagoras({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Shadow */}
      <ellipse cx="40" cy="73" rx="20" ry="4" fill="rgba(139,92,246,0.18)" />
      {/* Rocky underside */}
      <path d="M19,48 Q22,63 31,60 Q40,65 49,60 Q58,63 61,48 Q54,57 40,54 Q26,57 19,48Z" fill="#2E1065" />
      <path d="M23,51 Q29,61 40,58 Q51,61 57,51 Q50,59 40,56 Q30,59 23,51Z" fill="#1D0B40" />
      {/* Violet surface */}
      <ellipse cx="40" cy="44" rx="22" ry="9" fill="#5B21B6" />
      <ellipse cx="40" cy="42" rx="22" ry="8.5" fill="#7C3AED" />
      {/* Central right triangle */}
      <polygon points="35,42 35,27 50,42"
        fill="rgba(139,92,246,0.30)" stroke="#C4B5FD" strokeWidth="1.4" />
      {/* Right-angle mark */}
      <rect x="35" y="39" width="3" height="3" fill="none" stroke="#C4B5FD" strokeWidth="0.9" />
      {/* Square on leg a (vertical, left) */}
      <rect x="26" y="27" width="9" height="15" rx="0.5"
        fill="rgba(139,92,246,0.20)" stroke="#A78BFA" strokeWidth="1" />
      <text x="30.5" y="36" textAnchor="middle" fontSize="5" fill="#C4B5FD">a²</text>
      {/* Square on leg b (horizontal, bottom) */}
      <rect x="35" y="42" width="15" height="9" rx="0.5"
        fill="rgba(139,92,246,0.20)" stroke="#A78BFA" strokeWidth="1" />
      <text x="42.5" y="48" textAnchor="middle" fontSize="5" fill="#C4B5FD">b²</text>
      {/* Square on hypotenuse c (tilted — approximated with rotated rect) */}
      <rect x="50" y="22" width="13" height="13" rx="0.5"
        fill="rgba(167,139,250,0.25)" stroke="#A78BFA" strokeWidth="1"
        transform="rotate(42 56 28)" />
      <text x="56" y="27" textAnchor="middle" fontSize="5" fill="#C4B5FD">c²</text>
      {/* Formula floating */}
      <text x="26" y="18" textAnchor="middle" fontSize="6.5" fontWeight="bold" fill="#DDD6FE">a²+b²=c²</text>
    </svg>
  );
}

// i7 — Circles Island (#14B8A6 teal) — circle with radius, diameter, π, arc
export function G7IslandCircles({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Shadow */}
      <ellipse cx="40" cy="73" rx="20" ry="4" fill="rgba(20,184,166,0.18)" />
      {/* Rocky underside */}
      <path d="M19,48 Q22,63 31,60 Q40,65 49,60 Q58,63 61,48 Q54,57 40,54 Q26,57 19,48Z" fill="#042F2E" />
      <path d="M23,51 Q29,61 40,58 Q51,61 57,51 Q50,59 40,56 Q30,59 23,51Z" fill="#011E1D" />
      {/* Teal surface */}
      <ellipse cx="40" cy="44" rx="22" ry="9" fill="#0D9488" />
      <ellipse cx="40" cy="42" rx="22" ry="8.5" fill="#14B8A6" />
      {/* Main circle */}
      <circle cx="38" cy="30" r="12"
        fill="rgba(20,184,166,0.18)" stroke="#5EEAD4" strokeWidth="1.5" />
      {/* Radius line */}
      <line x1="38" y1="30" x2="50" y2="30" stroke="#99F6E4" strokeWidth="1.3" />
      {/* Diameter line (dashed) */}
      <line x1="26" y1="30" x2="50" y2="30" stroke="#5EEAD4" strokeWidth="0.9" strokeDasharray="2 1.5" />
      {/* Center dot */}
      <circle cx="38" cy="30" r="1.8" fill="#5EEAD4" />
      {/* Arc highlight (circumference segment) */}
      <path d="M 38,18 A 12,12 0 0,1 50,30"
        stroke="#2DD4BF" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* "r" label */}
      <text x="44" y="28" textAnchor="middle" fontSize="5.5" fill="#CCFBF1">r</text>
      {/* "d" label below diameter */}
      <text x="38" y="36" textAnchor="middle" fontSize="5" fill="#99F6E4">d</text>
      {/* π symbol floating */}
      <text x="40" y="16" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#99F6E4">π</text>
      {/* Small sparkle */}
      <circle cx="22" cy="20" r="1.5" fill="#14B8A6" opacity="0.7" />
      <circle cx="60" cy="19" r="1" fill="#5EEAD4" opacity="0.6" />
    </svg>
  );
}

// i8 — Statistics Island (#EAB308 yellow) — line graph, box plot, data points
export function G7IslandStatistics({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Shadow */}
      <ellipse cx="40" cy="73" rx="20" ry="4" fill="rgba(234,179,8,0.18)" />
      {/* Rocky underside */}
      <path d="M19,48 Q22,63 31,60 Q40,65 49,60 Q58,63 61,48 Q54,57 40,54 Q26,57 19,48Z" fill="#422006" />
      <path d="M23,51 Q29,61 40,58 Q51,61 57,51 Q50,59 40,56 Q30,59 23,51Z" fill="#2C1500" />
      {/* Yellow-golden surface */}
      <ellipse cx="40" cy="44" rx="22" ry="9" fill="#A16207" />
      <ellipse cx="40" cy="42" rx="22" ry="8.5" fill="#CA8A04" />
      {/* Axis lines */}
      <line x1="22" y1="42" x2="22" y2="24" stroke="#FDE047" strokeWidth="1" opacity="0.7" />
      <line x1="22" y1="42" x2="58" y2="42" stroke="#FDE047" strokeWidth="1" opacity="0.7" />
      {/* Line graph (trending up) */}
      <polyline
        points="25,38 31,35 37,37 43,30 49,27 55,23"
        fill="none" stroke="#FDE047" strokeWidth="1.5" strokeLinejoin="round" />
      {/* Data points on line */}
      <circle cx="25" cy="38" r="2" fill="#EAB308" />
      <circle cx="31" cy="35" r="2" fill="#EAB308" />
      <circle cx="37" cy="37" r="2" fill="#EAB308" />
      <circle cx="43" cy="30" r="2" fill="#EAB308" />
      <circle cx="49" cy="27" r="2" fill="#EAB308" />
      <circle cx="55" cy="23" r="2" fill="#EAB308" />
      {/* Box plot outline below the line */}
      <rect x="28" y="43" width="24" height="6" rx="1"
        fill="rgba(234,179,8,0.20)" stroke="#FDE047" strokeWidth="1" />
      {/* Median line in box */}
      <line x1="40" y1="43" x2="40" y2="49" stroke="#FDE047" strokeWidth="1.2" />
      {/* Whiskers */}
      <line x1="22" y1="46" x2="28" y2="46" stroke="#FDE047" strokeWidth="1" />
      <line x1="52" y1="46" x2="58" y2="46" stroke="#FDE047" strokeWidth="1" />
      <line x1="22" y1="44.5" x2="22" y2="47.5" stroke="#FDE047" strokeWidth="1" />
      <line x1="58" y1="44.5" x2="58" y2="47.5" stroke="#FDE047" strokeWidth="1" />
      {/* Label floating */}
      <text x="40" y="17" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#FEF08A">Ø x̄ σ</text>
    </svg>
  );
}

// i9 — Grand Finale Island (#A855F7 purple) — trophy with star burst
export function G7IslandFinale({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Shadow */}
      <ellipse cx="40" cy="73" rx="20" ry="4" fill="rgba(168,85,247,0.18)" />
      {/* Rocky underside */}
      <path d="M19,48 Q22,63 31,60 Q40,65 49,60 Q58,63 61,48 Q54,57 40,54 Q26,57 19,48Z" fill="#3B0764" />
      <path d="M23,51 Q29,61 40,58 Q51,61 57,51 Q50,59 40,56 Q30,59 23,51Z" fill="#270450" />
      {/* Rich purple surface */}
      <ellipse cx="40" cy="44" rx="22" ry="9" fill="#6B21A8" />
      <ellipse cx="40" cy="42" rx="22" ry="8.5" fill="#7E22CE" />
      {/* Star burst rays */}
      <line x1="40" y1="16" x2="40" y2="10" stroke="#E9D5FF" strokeWidth="1.2" opacity="0.7" />
      <line x1="40" y1="16" x2="46" y2="12" stroke="#E9D5FF" strokeWidth="1.2" opacity="0.7" />
      <line x1="40" y1="16" x2="34" y2="12" stroke="#E9D5FF" strokeWidth="1.2" opacity="0.7" />
      <line x1="40" y1="16" x2="47" y2="18" stroke="#E9D5FF" strokeWidth="1" opacity="0.6" />
      <line x1="40" y1="16" x2="33" y2="18" stroke="#E9D5FF" strokeWidth="1" opacity="0.6" />
      <line x1="40" y1="16" x2="46" y2="22" stroke="#E9D5FF" strokeWidth="0.8" opacity="0.5" />
      <line x1="40" y1="16" x2="34" y2="22" stroke="#E9D5FF" strokeWidth="0.8" opacity="0.5" />
      {/* Trophy cup body */}
      <path d="M32,39 Q30,28 40,26 Q50,28 48,39 Z"
        fill="rgba(168,85,247,0.40)" stroke="#D8B4FE" strokeWidth="1.4" />
      {/* Trophy handles */}
      <path d="M32,33 Q26,33 27,38 Q29,40 32,39" fill="none" stroke="#D8B4FE" strokeWidth="1.2" />
      <path d="M48,33 Q54,33 53,38 Q51,40 48,39" fill="none" stroke="#D8B4FE" strokeWidth="1.2" />
      {/* Trophy stem */}
      <rect x="38" y="39" width="4" height="4" rx="0.5" fill="#A855F7" stroke="#D8B4FE" strokeWidth="0.8" />
      {/* Trophy base */}
      <rect x="34" y="43" width="12" height="2.5" rx="1" fill="#A855F7" stroke="#D8B4FE" strokeWidth="0.8" />
      {/* Star inside trophy */}
      <text x="40" y="36" textAnchor="middle" fontSize="7" fill="#F3E8FF">★</text>
      {/* Floating sparkle dots */}
      <circle cx="22" cy="23" r="1.8" fill="#C084FC" opacity="0.8" />
      <circle cx="58" cy="21" r="1.5" fill="#C084FC" opacity="0.7" />
      <circle cx="26" cy="18" r="1" fill="#E9D5FF" opacity="0.6" />
      <circle cx="54" cy="28" r="1" fill="#E9D5FF" opacity="0.6" />
    </svg>
  );
}

// ─── Export map ───────────────────────────────────────────────────────────────

export const G7_ISLAND_SVGS: Record<string, React.FC<{ size?: number }>> = {
  i1: G7IslandPowers,
  i2: G7IslandAlgebraicExpr,
  i3: G7IslandEquations,
  i4: G7IslandInequalities,
  i5: G7IslandTriangles,
  i6: G7IslandPythagoras,
  i7: G7IslandCircles,
  i8: G7IslandStatistics,
  i9: G7IslandFinale,
};
