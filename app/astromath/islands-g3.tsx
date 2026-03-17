// app/astromath/islands-g3.tsx
// Floating fantasy island SVG illustrations for the AstroMath G3 map
// Each island has a unique visual theme matching its Grade 3 math concept
// NO .map() — all SVG elements are static JSX

import React from "react";

type IP = { size?: number };

// i1 — Numbers to 1000 (#4ECDC4 teal) — "1000", place value columns (H T O), number blocks
export function G3IslandNumbers1000({ size = 80 }: IP) {
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
      <ellipse cx="56" cy="40" rx="5" ry="3" fill="#2ECC71" />
      {/* Place value columns H T O */}
      {/* Column H (hundreds) */}
      <rect x="23" y="24" width="10" height="14" rx="1" fill="rgba(78,205,196,0.18)" stroke="#4ECDC4" strokeWidth="1.2" />
      <text x="28" y="21" textAnchor="middle" fontSize="5" fontWeight="bold" fill="#4ECDC4">H</text>
      <text x="28" y="34" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#4ECDC4">1</text>
      {/* Column T (tens) */}
      <rect x="35" y="24" width="10" height="14" rx="1" fill="rgba(78,205,196,0.18)" stroke="#4ECDC4" strokeWidth="1.2" />
      <text x="40" y="21" textAnchor="middle" fontSize="5" fontWeight="bold" fill="#4ECDC4">T</text>
      <text x="40" y="34" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#4ECDC4">0</text>
      {/* Column O (ones) */}
      <rect x="47" y="24" width="10" height="14" rx="1" fill="rgba(78,205,196,0.18)" stroke="#4ECDC4" strokeWidth="1.2" />
      <text x="52" y="21" textAnchor="middle" fontSize="5" fontWeight="bold" fill="#4ECDC4">O</text>
      <text x="52" y="34" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#4ECDC4">0</text>
      {/* "1000" floating above */}
      <text x="40" y="17" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#4ECDC4" opacity="0.9">1000</text>
    </svg>
  );
}

// i2 — Addition to 1000 (#00D4FF cyan) — vertical column addition with carry digits
export function G3IslandAddition1000({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Shadow */}
      <ellipse cx="40" cy="73" rx="20" ry="4" fill="rgba(0,212,255,0.18)" />
      {/* Rocky underside */}
      <path d="M20,48 Q23,63 32,60 Q40,65 48,60 Q57,63 60,48 Q54,57 40,54 Q26,57 20,48Z" fill="#1A4A5A" />
      <path d="M24,51 Q30,61 40,58 Q50,61 56,51 Q49,59 40,56 Q31,59 24,51Z" fill="#12353F" />
      {/* Blue surface */}
      <ellipse cx="40" cy="45" rx="21" ry="9" fill="#0077B6" />
      <ellipse cx="40" cy="43" rx="21" ry="8.5" fill="#0096C7" />
      {/* Vertical addition layout */}
      {/* Top number: 456 */}
      <text x="29" y="30" textAnchor="middle" fontSize="5.5" fontWeight="bold" fill="#00D4FF">4</text>
      <text x="36" y="30" textAnchor="middle" fontSize="5.5" fontWeight="bold" fill="#00D4FF">5</text>
      <text x="43" y="30" textAnchor="middle" fontSize="5.5" fontWeight="bold" fill="#00D4FF">6</text>
      {/* Plus sign */}
      <text x="23" y="36" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#00D4FF">+</text>
      {/* Bottom number: 347 */}
      <text x="29" y="36" textAnchor="middle" fontSize="5.5" fontWeight="bold" fill="#00D4FF">3</text>
      <text x="36" y="36" textAnchor="middle" fontSize="5.5" fontWeight="bold" fill="#00D4FF">4</text>
      <text x="43" y="36" textAnchor="middle" fontSize="5.5" fontWeight="bold" fill="#00D4FF">7</text>
      {/* Dividing line */}
      <line x1="22" y1="38" x2="50" y2="38" stroke="#00D4FF" strokeWidth="1.2" />
      {/* Result: 803 */}
      <text x="29" y="44" textAnchor="middle" fontSize="5.5" fontWeight="bold" fill="#00D4FF">8</text>
      <text x="36" y="44" textAnchor="middle" fontSize="5.5" fontWeight="bold" fill="#00D4FF">0</text>
      <text x="43" y="44" textAnchor="middle" fontSize="5.5" fontWeight="bold" fill="#00D4FF">3</text>
      {/* Carry digit hints */}
      <text x="30" y="25" textAnchor="middle" fontSize="4.5" fill="#00D4FF" opacity="0.7">1</text>
      <text x="37" y="25" textAnchor="middle" fontSize="4.5" fill="#00D4FF" opacity="0.7">1</text>
      {/* Big + floating */}
      <text x="57" y="26" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#00D4FF" opacity="0.75">+</text>
      {/* Small sparkle + */}
      <text x="22" y="22" textAnchor="middle" fontSize="7" fill="#00D4FF" opacity="0.55">+</text>
    </svg>
  );
}

// i3 — Subtraction to 1000 (#FF6B6B red) — vertical subtraction, borrowing arrows
export function G3IslandSubtraction1000({ size = 80 }: IP) {
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
      {/* Vertical subtraction layout */}
      {/* Top number: 734 */}
      <text x="29" y="30" textAnchor="middle" fontSize="5.5" fontWeight="bold" fill="#FF6B6B">7</text>
      <text x="36" y="30" textAnchor="middle" fontSize="5.5" fontWeight="bold" fill="#FF6B6B">3</text>
      <text x="43" y="30" textAnchor="middle" fontSize="5.5" fontWeight="bold" fill="#FF6B6B">4</text>
      {/* Minus sign */}
      <text x="23" y="36" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#FF6B6B">−</text>
      {/* Bottom number: 258 */}
      <text x="29" y="36" textAnchor="middle" fontSize="5.5" fontWeight="bold" fill="#FF6B6B">2</text>
      <text x="36" y="36" textAnchor="middle" fontSize="5.5" fontWeight="bold" fill="#FF6B6B">5</text>
      <text x="43" y="36" textAnchor="middle" fontSize="5.5" fontWeight="bold" fill="#FF6B6B">8</text>
      {/* Dividing line */}
      <line x1="22" y1="38" x2="50" y2="38" stroke="#FF6B6B" strokeWidth="1.2" />
      {/* Result: 476 */}
      <text x="29" y="44" textAnchor="middle" fontSize="5.5" fontWeight="bold" fill="#FF6B6B">4</text>
      <text x="36" y="44" textAnchor="middle" fontSize="5.5" fontWeight="bold" fill="#FF6B6B">7</text>
      <text x="43" y="44" textAnchor="middle" fontSize="5.5" fontWeight="bold" fill="#FF6B6B">6</text>
      {/* Borrowing arrows above digits */}
      <path d="M35,23 Q32,21 29,23" stroke="#FF6B6B" strokeWidth="1" fill="none" strokeDasharray="1.5 1.5" opacity="0.75" />
      <path d="M42,23 Q39,21 36,23" stroke="#FF6B6B" strokeWidth="1" fill="none" strokeDasharray="1.5 1.5" opacity="0.75" />
      {/* Floating minus signs */}
      <text x="57" y="25" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#FF6B6B" opacity="0.7">−</text>
      <text x="22" y="22" textAnchor="middle" fontSize="6" fill="#FF6B6B" opacity="0.55">−</text>
    </svg>
  );
}

// i4 — Times Tables / Einmaleins (#B44DFF purple) — dot grid rows×cols, × sign
export function G3IslandTimesTables({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Shadow */}
      <ellipse cx="40" cy="73" rx="20" ry="4" fill="rgba(180,77,255,0.18)" />
      {/* Rocky underside */}
      <path d="M19,47 Q22,62 31,60 Q40,66 49,60 Q58,62 61,47 Q54,56 40,54 Q26,56 19,47Z" fill="#3A1A5A" />
      <path d="M22,50 Q28,61 40,58 Q52,61 58,50 Q51,58 40,56 Q30,58 22,50Z" fill="#27104A" />
      {/* Purple surface */}
      <ellipse cx="40" cy="44" rx="22" ry="9" fill="#7C3AED" />
      <ellipse cx="40" cy="42" rx="22" ry="8.5" fill="#9C27B0" />
      {/* Dot grid — 3 rows × 4 cols (3×4=12) */}
      {/* Row 1 */}
      <circle cx="26" cy="26" r="2.2" fill="#B44DFF" />
      <circle cx="32" cy="26" r="2.2" fill="#B44DFF" />
      <circle cx="38" cy="26" r="2.2" fill="#B44DFF" />
      <circle cx="44" cy="26" r="2.2" fill="#B44DFF" />
      {/* Row 2 */}
      <circle cx="26" cy="32" r="2.2" fill="#B44DFF" opacity="0.85" />
      <circle cx="32" cy="32" r="2.2" fill="#B44DFF" opacity="0.85" />
      <circle cx="38" cy="32" r="2.2" fill="#B44DFF" opacity="0.85" />
      <circle cx="44" cy="32" r="2.2" fill="#B44DFF" opacity="0.85" />
      {/* Row 3 */}
      <circle cx="26" cy="38" r="2.2" fill="#B44DFF" opacity="0.7" />
      <circle cx="32" cy="38" r="2.2" fill="#B44DFF" opacity="0.7" />
      <circle cx="38" cy="38" r="2.2" fill="#B44DFF" opacity="0.7" />
      <circle cx="44" cy="38" r="2.2" fill="#B44DFF" opacity="0.7" />
      {/* Row bracket labels */}
      <text x="22" y="27" textAnchor="middle" fontSize="4" fill="#B44DFF" opacity="0.6">3</text>
      <text x="40" y="46" textAnchor="middle" fontSize="4" fill="#B44DFF" opacity="0.6">4</text>
      {/* Big × sign */}
      <text x="56" y="32" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#B44DFF">×</text>
      {/* Sparkle dots */}
      <circle cx="56" cy="20" r="1.5" fill="#D580FF" opacity="0.7" />
      <circle cx="23" cy="18" r="1.2" fill="#D580FF" opacity="0.6" />
      <circle cx="61" cy="42" r="1" fill="#D580FF" opacity="0.5" />
    </svg>
  );
}

// i5 — Division (#00FF88 green) — groups of dots with ÷ sign, remainder dots
export function G3IslandDivision({ size = 80 }: IP) {
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
      {/* Group 1 — circle with 3 dots */}
      <circle cx="28" cy="30" r="7" fill="rgba(0,255,136,0.12)" stroke="#00FF88" strokeWidth="1.2" strokeDasharray="2 1.5" />
      <circle cx="25" cy="29" r="2" fill="#00FF88" />
      <circle cx="29" cy="27" r="2" fill="#00FF88" />
      <circle cx="31" cy="31" r="2" fill="#00FF88" />
      {/* Group 2 — circle with 3 dots */}
      <circle cx="47" cy="30" r="7" fill="rgba(0,255,136,0.12)" stroke="#00FF88" strokeWidth="1.2" strokeDasharray="2 1.5" />
      <circle cx="44" cy="29" r="2" fill="#00FF88" opacity="0.85" />
      <circle cx="48" cy="27" r="2" fill="#00FF88" opacity="0.85" />
      <circle cx="50" cy="31" r="2" fill="#00FF88" opacity="0.85" />
      {/* Remainder dot — outside both groups */}
      <circle cx="39" cy="22" r="2" fill="rgba(0,255,136,0.5)" stroke="#00FF88" strokeWidth="1" strokeDasharray="1.5 1" />
      <text x="39" y="18" textAnchor="middle" fontSize="4" fill="#00FF88" opacity="0.7">R1</text>
      {/* ÷ sign */}
      <text x="57" y="36" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#00FF88">÷</text>
      {/* Small sparkles */}
      <circle cx="22" cy="19" r="1.5" fill="#00FF88" opacity="0.7" />
      <circle cx="60" cy="20" r="1" fill="#00FF88" opacity="0.6" />
    </svg>
  );
}

// i6 — Units & Measurement (#FFD700 gold) — ruler with cm marks, scale, clock
export function G3IslandUnits({ size = 80 }: IP) {
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
      {/* Ruler — horizontal */}
      <rect x="21" y="33" width="30" height="6" rx="1" fill="rgba(255,215,0,0.2)" stroke="#FFD700" strokeWidth="1.3" />
      {/* Ruler ticks at cm intervals */}
      <line x1="24" y1="33" x2="24" y2="36" stroke="#FFD700" strokeWidth="0.9" />
      <line x1="27" y1="33" x2="27" y2="35" stroke="#FFD700" strokeWidth="0.7" />
      <line x1="30" y1="33" x2="30" y2="36" stroke="#FFD700" strokeWidth="0.9" />
      <line x1="33" y1="33" x2="33" y2="35" stroke="#FFD700" strokeWidth="0.7" />
      <line x1="36" y1="33" x2="36" y2="36" stroke="#FFD700" strokeWidth="0.9" />
      <line x1="39" y1="33" x2="39" y2="35" stroke="#FFD700" strokeWidth="0.7" />
      <line x1="42" y1="33" x2="42" y2="36" stroke="#FFD700" strokeWidth="0.9" />
      <line x1="45" y1="33" x2="45" y2="35" stroke="#FFD700" strokeWidth="0.7" />
      <line x1="48" y1="33" x2="48" y2="36" stroke="#FFD700" strokeWidth="0.9" />
      <text x="24" y="31" textAnchor="middle" fontSize="4" fill="#FFD700" opacity="0.8">0</text>
      <text x="36" y="31" textAnchor="middle" fontSize="4" fill="#FFD700" opacity="0.8">4</text>
      <text x="48" y="31" textAnchor="middle" fontSize="4" fill="#FFD700" opacity="0.8">8</text>
      {/* Clock face */}
      <circle cx="57" cy="28" r="8" fill="rgba(255,215,0,0.15)" stroke="#FFD700" strokeWidth="1.4" />
      <circle cx="57" cy="28" r="1.3" fill="#FFD700" />
      <line x1="57" y1="28" x2="57" y2="22" stroke="#FFD700" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="57" y1="28" x2="62" y2="28" stroke="#FFD700" strokeWidth="1.1" strokeLinecap="round" />
      <line x1="57" y1="21" x2="57" y2="23" stroke="#FFD700" strokeWidth="1" />
      {/* Weight scale pan hint */}
      <line x1="25" y1="21" x2="35" y2="21" stroke="#FFD700" strokeWidth="1" opacity="0.7" />
      <line x1="30" y1="21" x2="30" y2="16" stroke="#FFD700" strokeWidth="1" opacity="0.7" />
      <ellipse cx="30" cy="15" rx="4" ry="1.5" fill="rgba(255,215,0,0.3)" stroke="#FFD700" strokeWidth="0.9" opacity="0.7" />
    </svg>
  );
}

// i7 — Geometry & Perimeter (#FF9500 orange) — rectangle with perimeter arrows, triangle
export function G3IslandGeometry({ size = 80 }: IP) {
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
      {/* Rectangle with perimeter arrows */}
      <rect x="24" y="24" width="22" height="14" rx="1" fill="rgba(255,149,0,0.18)" stroke="#FF9500" strokeWidth="1.5" />
      {/* Side length labels */}
      <text x="35" y="22" textAnchor="middle" fontSize="4.5" fill="#FF9500" fontWeight="bold">6</text>
      <text x="22" y="32" textAnchor="middle" fontSize="4.5" fill="#FF9500" fontWeight="bold">4</text>
      {/* Perimeter arrows along the rectangle */}
      <line x1="24" y1="22.5" x2="46" y2="22.5" stroke="#FF9500" strokeWidth="1" opacity="0.65" markerEnd="url(#arr)" />
      <line x1="47" y1="24" x2="47" y2="38" stroke="#FF9500" strokeWidth="1" opacity="0.65" />
      <line x1="46" y1="39.5" x2="24" y2="39.5" stroke="#FF9500" strokeWidth="1" opacity="0.65" />
      <line x1="23" y1="38" x2="23" y2="24" stroke="#FF9500" strokeWidth="1" opacity="0.65" />
      {/* Triangle */}
      <polygon points="54,38 48,26 60,26" fill="rgba(255,149,0,0.2)" stroke="#FF9500" strokeWidth="1.4" />
      {/* "P=" hint */}
      <text x="35" y="45" textAnchor="middle" fontSize="5" fontWeight="bold" fill="#FF9500" opacity="0.8">P=20</text>
      {/* Small sparkle */}
      <circle cx="22" cy="19" r="1.4" fill="#FF9500" opacity="0.7" />
      <circle cx="61" cy="20" r="1.2" fill="#FF9500" opacity="0.6" />
    </svg>
  );
}

// i8 — Word Problems (#10B981 emerald) — open storybook with "?" and floating numbers
export function G3IslandWordProblems({ size = 80 }: IP) {
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
      {/* Open storybook */}
      {/* Book spine */}
      <rect x="39" y="23" width="2" height="18" rx="1" fill="#065F46" />
      {/* Left page */}
      <path d="M21,24 Q29,21 39,23 L39,40 Q29,38 21,42 Z" fill="#ECFDF5" stroke="#10B981" strokeWidth="0.6" />
      {/* Right page */}
      <path d="M41,23 Q51,21 59,24 L59,42 Q51,38 41,40 Z" fill="#ECFDF5" stroke="#10B981" strokeWidth="0.6" />
      {/* Text lines on left page */}
      <line x1="24" y1="29" x2="37" y2="28" stroke="#10B981" strokeWidth="0.8" opacity="0.55" />
      <line x1="24" y1="32" x2="37" y2="31" stroke="#10B981" strokeWidth="0.8" opacity="0.55" />
      <line x1="24" y1="35" x2="37" y2="34" stroke="#10B981" strokeWidth="0.8" opacity="0.55" />
      {/* Big "?" on right page */}
      <text x="50" y="35" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#10B981">?</text>
      {/* Floating numbers escaping the book */}
      <text x="57" y="21" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#10B981" opacity="0.8">3</text>
      <text x="62" y="28" textAnchor="middle" fontSize="5.5" fill="#10B981" opacity="0.65">+</text>
      <text x="64" y="35" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#10B981" opacity="0.7">5</text>
      <text x="22" y="19" textAnchor="middle" fontSize="5.5" fill="#10B981" opacity="0.6">?</text>
    </svg>
  );
}

// i9 — Final Challenge (#E879F9 pink) — trophy cup with star burst, crown
export function G3IslandFinale({ size = 80 }: IP) {
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
      {/* Trophy cup body */}
      <path d="M33,38 Q32,28 40,25 Q48,28 47,38 Q44,41 40,41 Q36,41 33,38Z" fill="rgba(232,121,249,0.2)" stroke="#E879F9" strokeWidth="1.4" />
      {/* Trophy handles */}
      <path d="M33,31 Q28,31 28,34 Q28,37 33,37" fill="none" stroke="#E879F9" strokeWidth="1.3" />
      <path d="M47,31 Q52,31 52,34 Q52,37 47,37" fill="none" stroke="#E879F9" strokeWidth="1.3" />
      {/* Trophy stem */}
      <rect x="38" y="41" width="4" height="4" rx="0.5" fill="rgba(232,121,249,0.35)" stroke="#E879F9" strokeWidth="1" />
      {/* Trophy base */}
      <rect x="35" y="45" width="10" height="2.5" rx="1" fill="rgba(232,121,249,0.35)" stroke="#E879F9" strokeWidth="1" />
      {/* Star burst rays */}
      <line x1="40" y1="14" x2="40" y2="18" stroke="#E879F9" strokeWidth="1.2" opacity="0.8" />
      <line x1="46" y1="15" x2="44" y2="18" stroke="#E879F9" strokeWidth="1.1" opacity="0.75" />
      <line x1="50" y1="19" x2="47" y2="21" stroke="#E879F9" strokeWidth="1.1" opacity="0.7" />
      <line x1="34" y1="15" x2="36" y2="18" stroke="#E879F9" strokeWidth="1.1" opacity="0.75" />
      <line x1="30" y1="19" x2="33" y2="21" stroke="#E879F9" strokeWidth="1.1" opacity="0.7" />
      {/* Crown at top of trophy */}
      <polygon points="36,26 38,22 40,25 42,22 44,26" fill="rgba(232,121,249,0.3)" stroke="#E879F9" strokeWidth="1.2" />
      {/* Gem in crown */}
      <circle cx="40" cy="26" r="1.5" fill="#E879F9" opacity="0.9" />
      {/* Sparkle dots */}
      <circle cx="22" cy="21" r="1.5" fill="#E879F9" opacity="0.7" />
      <circle cx="59" cy="20" r="1.3" fill="#E879F9" opacity="0.65" />
      <circle cx="24" cy="35" r="1" fill="#E879F9" opacity="0.5" />
      <circle cx="57" cy="36" r="1" fill="#E879F9" opacity="0.5" />
    </svg>
  );
}

// ─── Export map ───────────────────────────────────────────────────────────────

export const G3_ISLAND_SVGS: Record<string, React.FC<{ size?: number }>> = {
  i1: G3IslandNumbers1000,
  i2: G3IslandAddition1000,
  i3: G3IslandSubtraction1000,
  i4: G3IslandTimesTables,
  i5: G3IslandDivision,
  i6: G3IslandUnits,
  i7: G3IslandGeometry,
  i8: G3IslandWordProblems,
  i9: G3IslandFinale,
};
