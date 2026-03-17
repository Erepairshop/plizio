// SVG Island illustrations for AstroDeutsch K6 map
// Each island is a floating fantasy landmass (viewBox "0 0 80 80")
// with glow ellipse, rocky underside, island body, themed surface, decorations, sparkles

import React from "react";

type IP = { size?: number };

// i1 — AktivPassiv (#FF9500 orange) — circular arrows, Aktiv↔Passiv transformation
export function K6IslandAktivPassiv({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Glow beneath */}
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(255,149,0,0.2)" />
      {/* Rocky underside */}
      <path d="M20,48 Q23,63 32,60 Q40,65 48,60 Q57,63 60,48 Q53,57 40,54 Q27,57 20,48Z" fill="#5A3200" />
      <path d="M24,51 Q30,61 40,58 Q50,61 56,51 Q49,59 40,56 Q31,59 24,51Z" fill="#3D2000" />
      {/* Island body */}
      <ellipse cx="40" cy="47" rx="20" ry="9" fill="#C46800" />
      {/* Grassy top */}
      <ellipse cx="40" cy="44" rx="21" ry="9" fill="#E07A00" />
      <ellipse cx="40" cy="42" rx="21" ry="8.5" fill="#FF9500" />
      {/* Surface bumps */}
      <ellipse cx="24" cy="40" rx="5" ry="2.5" fill="#E07A00" />
      <ellipse cx="56" cy="40" rx="5" ry="2.5" fill="#E07A00" />
      {/* Circular arrow — left (Aktiv) */}
      <path d="M28,31 A8,8 0 1 1 28,31.1" stroke="#FFD700" strokeWidth="1.8" fill="none" strokeLinecap="round"
        strokeDasharray="22 6" />
      <polygon points="28,23 25,27 31,27" fill="#FFD700" />
      {/* Circular arrow — right (Passiv, reversed) */}
      <path d="M52,31 A8,8 0 0 0 52,31.1" stroke="#FF6B00" strokeWidth="1.8" fill="none" strokeLinecap="round"
        strokeDasharray="22 6" />
      <polygon points="52,23 49,27 55,27" fill="#FF6B00" />
      {/* Double-headed arrow in center */}
      <line x1="34" y1="30" x2="46" y2="30" stroke="rgba(255,255,255,0.9)" strokeWidth="1.5" />
      <polygon points="33,30 36,28 36,32" fill="rgba(255,255,255,0.9)" />
      <polygon points="47,30 44,28 44,32" fill="rgba(255,255,255,0.9)" />
      {/* Mini labels */}
      <text x="27" y="21" textAnchor="middle" fontSize="5" fontWeight="bold" fill="#FFD700">A</text>
      <text x="53" y="21" textAnchor="middle" fontSize="5" fontWeight="bold" fill="#FF6B00">P</text>
      {/* Sparkles */}
      <circle cx="22" cy="22" r="1.5" fill="#FFD700" opacity="0.8" />
      <circle cx="58" cy="20" r="1.5" fill="#FF9500" opacity="0.8" />
      <circle cx="40" cy="16" r="1" fill="#FFD700" opacity="0.6" />
    </svg>
  );
}

// i2 — Konjunktiv2 (#EF4444 red) — swirling vortex, würde/hätte/wäre floating words, dream cloud
export function K6IslandKonjunktiv2({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Glow beneath */}
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(239,68,68,0.2)" />
      {/* Rocky underside */}
      <path d="M19,47 Q22,62 31,60 Q40,66 49,60 Q58,62 61,47 Q54,56 40,53 Q26,56 19,47Z" fill="#5A1010" />
      <path d="M23,50 Q29,61 40,58 Q51,61 57,50 Q50,58 40,55 Q30,58 23,50Z" fill="#3D0A0A" />
      {/* Island body */}
      <ellipse cx="40" cy="46" rx="21" ry="9" fill="#B91C1C" />
      {/* Grassy top */}
      <ellipse cx="40" cy="43" rx="22" ry="9" fill="#DC2626" />
      <ellipse cx="40" cy="41" rx="22" ry="8.5" fill="#EF4444" />
      {/* Surface bumps */}
      <ellipse cx="24" cy="39" rx="5" ry="2.5" fill="#DC2626" />
      <ellipse cx="56" cy="39" rx="5" ry="2.5" fill="#DC2626" />
      {/* Dream cloud at top */}
      <ellipse cx="40" cy="19" rx="9" ry="5" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.5)" strokeWidth="0.8" />
      <ellipse cx="32" cy="21" rx="5" ry="4" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.5)" strokeWidth="0.8" />
      <ellipse cx="48" cy="21" rx="5" ry="4" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.5)" strokeWidth="0.8" />
      {/* Swirl inside cloud */}
      <path d="M37,19 Q40,16 43,19 Q40,22 37,19Z" fill="rgba(255,255,255,0.4)" />
      {/* würde text */}
      <text x="40" y="20" textAnchor="middle" fontSize="4.5" fontWeight="bold" fill="white" opacity="0.9">würde</text>
      {/* Floating mini words */}
      <text x="24" y="31" textAnchor="middle" fontSize="4" fill="#FECACA" opacity="0.85">hätte</text>
      <text x="56" y="31" textAnchor="middle" fontSize="4" fill="#FECACA" opacity="0.85">wäre</text>
      {/* Vortex spiral on island surface */}
      <path d="M40,37 Q45,35 44,40 Q43,45 40,43 Q37,41 38,38Z" stroke="rgba(255,200,200,0.6)" strokeWidth="1" fill="none" />
      {/* Sparkles */}
      <circle cx="20" cy="23" r="1.5" fill="#EF4444" opacity="0.8" />
      <circle cx="60" cy="20" r="1.5" fill="#FECACA" opacity="0.8" />
      <circle cx="40" cy="13" r="1" fill="#FCA5A5" opacity="0.7" />
    </svg>
  );
}

// i3 — InfinitivZu (#10B981 emerald) — infinity symbol, "zu" connector, flowing loop
export function K6IslandInfinitivZu({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Glow beneath */}
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(16,185,129,0.2)" />
      {/* Rocky underside */}
      <path d="M20,48 Q23,63 32,60 Q40,65 48,60 Q57,63 60,48 Q53,57 40,54 Q27,57 20,48Z" fill="#064E3B" />
      <path d="M24,51 Q30,61 40,58 Q50,61 56,51 Q49,59 40,56 Q31,59 24,51Z" fill="#022C22" />
      {/* Island body */}
      <ellipse cx="40" cy="47" rx="20" ry="9" fill="#059669" />
      {/* Grassy top */}
      <ellipse cx="40" cy="44" rx="21" ry="9" fill="#10B981" />
      <ellipse cx="40" cy="42" rx="21" ry="8.5" fill="#34D399" />
      {/* Grass bumps */}
      <ellipse cx="24" cy="40" rx="5" ry="2.5" fill="#10B981" />
      <ellipse cx="56" cy="40" rx="5" ry="2.5" fill="#10B981" />
      {/* Infinity symbol ∞ */}
      <path d="M25,30 C25,26 29,23 33,26 C37,29 37,29 40,29 C43,29 47,29 51,26 C55,23 55,26 55,30 C55,34 51,37 47,34 C43,31 43,31 40,31 C37,31 33,31 29,34 C25,37 25,34 25,30 Z"
        stroke="#6EE7B7" strokeWidth="2" fill="rgba(16,185,129,0.15)" />
      {/* "zu" connector badge in the center of the ∞ */}
      <rect x="36" y="27" width="8" height="6" rx="2" fill="#065F46" />
      <text x="40" y="31.5" textAnchor="middle" fontSize="5" fontWeight="bold" fill="#6EE7B7">zu</text>
      {/* Infinitive example text */}
      <text x="40" y="21" textAnchor="middle" fontSize="4" fill="#A7F3D0" opacity="0.9">gehen</text>
      <text x="27" y="39" textAnchor="middle" fontSize="3.5" fill="#6EE7B7" opacity="0.7">laufen</text>
      <text x="53" y="39" textAnchor="middle" fontSize="3.5" fill="#6EE7B7" opacity="0.7">sehen</text>
      {/* Sparkles */}
      <circle cx="22" cy="22" r="1.5" fill="#6EE7B7" opacity="0.8" />
      <circle cx="58" cy="19" r="1.5" fill="#10B981" opacity="0.8" />
      <circle cx="40" cy="15" r="1" fill="#34D399" opacity="0.7" />
    </svg>
  );
}

// i4 — Synonyme (#F59E0B amber) — split arrow, twin words, synonym/antonym pairs
export function K6IslandSynonyme({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Glow beneath */}
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(245,158,11,0.2)" />
      {/* Rocky underside */}
      <path d="M19,48 Q22,62 31,60 Q40,65 49,60 Q58,62 61,48 Q54,56 40,53 Q26,56 19,48Z" fill="#4A3000" />
      <path d="M23,51 Q29,61 40,58 Q51,61 57,51 Q50,58 40,55 Q30,58 23,51Z" fill="#2E1D00" />
      {/* Island body */}
      <ellipse cx="40" cy="47" rx="21" ry="9" fill="#B45309" />
      {/* Grassy top */}
      <ellipse cx="40" cy="44" rx="22" ry="9" fill="#D97706" />
      <ellipse cx="40" cy="42" rx="22" ry="8.5" fill="#F59E0B" />
      {/* Surface bumps */}
      <ellipse cx="24" cy="40" rx="5" ry="2.5" fill="#D97706" />
      <ellipse cx="56" cy="40" rx="5" ry="2.5" fill="#D97706" />
      {/* Synonym arrow — both pointing same direction */}
      <line x1="27" y1="27" x2="37" y2="27" stroke="#FDE68A" strokeWidth="1.5" />
      <polygon points="38,27 35,25 35,29" fill="#FDE68A" />
      <line x1="27" y1="31" x2="37" y2="31" stroke="#FDE68A" strokeWidth="1.5" />
      <polygon points="38,31 35,29 35,33" fill="#FDE68A" />
      {/* Antonym arrow — pointing opposite directions */}
      <line x1="43" y1="27" x2="53" y2="27" stroke="#FB923C" strokeWidth="1.5" />
      <polygon points="42,27 45,25 45,29" fill="#FB923C" />
      <polygon points="54,27 51,25 51,29" fill="#FB923C" />
      {/* Labels */}
      <text x="32" y="22" textAnchor="middle" fontSize="4" fontWeight="bold" fill="#FDE68A">Syn.</text>
      <text x="48" y="22" textAnchor="middle" fontSize="4" fontWeight="bold" fill="#FB923C">Ant.</text>
      {/* Twin word bubbles */}
      <rect x="22" y="33" width="14" height="5" rx="2" fill="rgba(253,230,138,0.2)" stroke="#FDE68A" strokeWidth="0.8" />
      <text x="29" y="36.5" textAnchor="middle" fontSize="3.8" fill="#FDE68A">groß</text>
      <rect x="38" y="33" width="14" height="5" rx="2" fill="rgba(253,230,138,0.2)" stroke="#FDE68A" strokeWidth="0.8" />
      <text x="45" y="36.5" textAnchor="middle" fontSize="3.8" fill="#FDE68A">riesig</text>
      {/* Sparkles */}
      <circle cx="20" cy="24" r="1.5" fill="#FDE68A" opacity="0.8" />
      <circle cx="60" cy="22" r="1.5" fill="#F59E0B" opacity="0.8" />
      <circle cx="40" cy="17" r="1" fill="#FCD34D" opacity="0.7" />
    </svg>
  );
}

// i5 — Fremdwoerter (#6366F1 indigo) — globe with international text, Greek/Latin letter fragments
export function K6IslandFremdwoerter({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Glow beneath */}
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(99,102,241,0.2)" />
      {/* Rocky underside */}
      <path d="M19,47 Q22,62 31,60 Q40,65 49,60 Q58,62 61,47 Q54,56 40,53 Q26,56 19,47Z" fill="#1E1B4B" />
      <path d="M23,50 Q29,61 40,58 Q51,61 57,50 Q50,58 40,55 Q30,58 23,50Z" fill="#13104A" />
      {/* Island body */}
      <ellipse cx="40" cy="46" rx="21" ry="9" fill="#4338CA" />
      {/* Grassy top */}
      <ellipse cx="40" cy="43" rx="22" ry="9" fill="#4F46E5" />
      <ellipse cx="40" cy="41" rx="22" ry="8.5" fill="#6366F1" />
      {/* Surface bumps */}
      <ellipse cx="24" cy="39" rx="5" ry="2.5" fill="#4F46E5" />
      <ellipse cx="56" cy="39" rx="5" ry="2.5" fill="#4F46E5" />
      {/* Globe circle */}
      <circle cx="40" cy="27" r="11" fill="rgba(99,102,241,0.15)" stroke="#818CF8" strokeWidth="1.2" />
      {/* Globe meridians */}
      <ellipse cx="40" cy="27" rx="5" ry="11" stroke="#818CF8" strokeWidth="0.8" fill="none" opacity="0.6" />
      {/* Globe parallels */}
      <line x1="29" y1="27" x2="51" y2="27" stroke="#818CF8" strokeWidth="0.8" opacity="0.6" />
      <path d="M31,21 Q40,19 49,21" stroke="#818CF8" strokeWidth="0.7" fill="none" opacity="0.5" />
      <path d="M31,33 Q40,35 49,33" stroke="#818CF8" strokeWidth="0.7" fill="none" opacity="0.5" />
      {/* Greek letter α on globe */}
      <text x="34" y="26" textAnchor="middle" fontSize="5" fontWeight="bold" fill="#C7D2FE">α</text>
      {/* Latin fragment */}
      <text x="46" y="30" textAnchor="middle" fontSize="5" fontWeight="bold" fill="#C7D2FE">λ</text>
      {/* Floating foreign word fragments */}
      <text x="23" y="35" textAnchor="middle" fontSize="3.5" fill="#A5B4FC" opacity="0.8">Photo</text>
      <text x="57" y="33" textAnchor="middle" fontSize="3.5" fill="#A5B4FC" opacity="0.8">Bio</text>
      {/* Sparkles */}
      <circle cx="22" cy="21" r="1.5" fill="#818CF8" opacity="0.8" />
      <circle cx="59" cy="19" r="1.5" fill="#6366F1" opacity="0.8" />
      <circle cx="40" cy="14" r="1" fill="#A5B4FC" opacity="0.7" />
    </svg>
  );
}

// i6 — Nebensaetze (#EC4899 pink) — chain links, sentence connector bubbles, der/die/das
export function K6IslandNebensaetze({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Glow beneath */}
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(236,72,153,0.2)" />
      {/* Rocky underside */}
      <path d="M19,48 Q22,62 31,60 Q40,65 49,60 Q58,62 61,48 Q54,56 40,53 Q26,56 19,48Z" fill="#500030" />
      <path d="M23,51 Q29,61 40,58 Q51,61 57,51 Q50,58 40,55 Q30,58 23,51Z" fill="#300020" />
      {/* Island body */}
      <ellipse cx="40" cy="47" rx="21" ry="9" fill="#BE185D" />
      {/* Grassy top */}
      <ellipse cx="40" cy="44" rx="22" ry="9" fill="#DB2777" />
      <ellipse cx="40" cy="42" rx="22" ry="8.5" fill="#EC4899" />
      {/* Surface bumps */}
      <ellipse cx="24" cy="40" rx="5" ry="2.5" fill="#DB2777" />
      <ellipse cx="56" cy="40" rx="5" ry="2.5" fill="#DB2777" />
      {/* Chain link left */}
      <ellipse cx="28" cy="28" rx="6" ry="4" fill="none" stroke="#FBCFE8" strokeWidth="2" />
      {/* Chain link right */}
      <ellipse cx="40" cy="28" rx="6" ry="4" fill="none" stroke="#FBCFE8" strokeWidth="2" />
      {/* Chain link far right */}
      <ellipse cx="52" cy="28" rx="6" ry="4" fill="none" stroke="#FBCFE8" strokeWidth="2" />
      {/* Overlapping connector fills (visual chain effect) */}
      <rect x="30" y="25" width="4" height="6" fill="#DB2777" />
      <rect x="42" y="25" width="4" height="6" fill="#DB2777" />
      {/* Connector bubbles: der/die/das */}
      <circle cx="28" cy="28" r="5" fill="rgba(251,207,232,0.15)" />
      <text x="28" y="30" textAnchor="middle" fontSize="4" fontWeight="bold" fill="#FCE7F3">der</text>
      <circle cx="40" cy="28" r="5" fill="rgba(251,207,232,0.15)" />
      <text x="40" y="30" textAnchor="middle" fontSize="4" fontWeight="bold" fill="#FCE7F3">die</text>
      <circle cx="52" cy="28" r="5" fill="rgba(251,207,232,0.15)" />
      <text x="52" y="30" textAnchor="middle" fontSize="4" fontWeight="bold" fill="#FCE7F3">das</text>
      {/* "weil" keyword floating */}
      <text x="40" y="20" textAnchor="middle" fontSize="5" fontWeight="bold" fill="#FBCFE8" opacity="0.9">weil</text>
      {/* Sparkles */}
      <circle cx="21" cy="22" r="1.5" fill="#FBCFE8" opacity="0.8" />
      <circle cx="59" cy="20" r="1.5" fill="#EC4899" opacity="0.8" />
      <circle cx="40" cy="15" r="1" fill="#F9A8D4" opacity="0.7" />
    </svg>
  );
}

// i7 — Wortbildung (#14B8A6 teal) — puzzle pieces fitting together, compound word building
export function K6IslandWortbildung({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Glow beneath */}
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(20,184,166,0.2)" />
      {/* Rocky underside */}
      <path d="M19,47 Q22,62 31,60 Q40,65 49,60 Q58,62 61,47 Q54,56 40,53 Q26,56 19,47Z" fill="#0F3E38" />
      <path d="M23,50 Q29,61 40,58 Q51,61 57,50 Q50,58 40,55 Q30,58 23,50Z" fill="#082924" />
      {/* Island body */}
      <ellipse cx="40" cy="46" rx="21" ry="9" fill="#0D9488" />
      {/* Grassy top */}
      <ellipse cx="40" cy="43" rx="22" ry="9" fill="#14B8A6" />
      <ellipse cx="40" cy="41" rx="22" ry="8.5" fill="#2DD4BF" />
      {/* Surface bumps */}
      <ellipse cx="24" cy="39" rx="5" ry="2.5" fill="#14B8A6" />
      <ellipse cx="56" cy="39" rx="5" ry="2.5" fill="#14B8A6" />
      {/* Puzzle piece left */}
      <rect x="22" y="24" width="14" height="10" rx="2" fill="#0D9488" stroke="#99F6E4" strokeWidth="1" />
      {/* Puzzle nub out on right */}
      <circle cx="36" cy="29" r="3" fill="#0D9488" stroke="#99F6E4" strokeWidth="1" />
      {/* Puzzle piece right (with matching notch) */}
      <rect x="40" y="24" width="14" height="10" rx="2" fill="#0F766E" stroke="#99F6E4" strokeWidth="1" />
      {/* Indentation on left side of right piece to show fit */}
      <circle cx="40" cy="29" r="2.8" fill="#2DD4BF" />
      {/* Word labels inside pieces */}
      <text x="29" y="30" textAnchor="middle" fontSize="4" fontWeight="bold" fill="#CCFBF1">Schule</text>
      <text x="47" y="30" textAnchor="middle" fontSize="4" fontWeight="bold" fill="#CCFBF1">haus</text>
      {/* Plus sign between */}
      <text x="40" y="23" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#99F6E4">+</text>
      {/* Result compound word */}
      <text x="40" y="21" textAnchor="middle" fontSize="3.5" fill="#A7F3D0" opacity="0.8">Schulhaus</text>
      {/* Small sparkles */}
      <circle cx="21" cy="21" r="1.5" fill="#99F6E4" opacity="0.8" />
      <circle cx="59" cy="20" r="1.5" fill="#14B8A6" opacity="0.8" />
      <circle cx="40" cy="15" r="1" fill="#2DD4BF" opacity="0.7" />
    </svg>
  );
}

// i8 — Zeichensetzung (#A855F7 purple) — giant colon, em-dash, punctuation marks
export function K6IslandZeichensetzung({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Glow beneath */}
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(168,85,247,0.2)" />
      {/* Rocky underside */}
      <path d="M19,47 Q22,62 31,60 Q40,65 49,60 Q58,62 61,47 Q54,56 40,53 Q26,56 19,47Z" fill="#2E1065" />
      <path d="M23,50 Q29,61 40,58 Q51,61 57,50 Q50,58 40,55 Q30,58 23,50Z" fill="#1C0A40" />
      {/* Island body */}
      <ellipse cx="40" cy="46" rx="21" ry="9" fill="#7E22CE" />
      {/* Grassy top */}
      <ellipse cx="40" cy="43" rx="22" ry="9" fill="#9333EA" />
      <ellipse cx="40" cy="41" rx="22" ry="8.5" fill="#A855F7" />
      {/* Surface bumps */}
      <ellipse cx="24" cy="39" rx="5" ry="2.5" fill="#9333EA" />
      <ellipse cx="56" cy="39" rx="5" ry="2.5" fill="#9333EA" />
      {/* Giant colon : */}
      <circle cx="36" cy="25" r="3.5" fill="#E9D5FF" />
      <circle cx="36" cy="33" r="3.5" fill="#E9D5FF" />
      {/* Em-dash — */}
      <rect x="43" y="28" width="14" height="3" rx="1.5" fill="#D8B4FE" />
      {/* Comma , */}
      <circle cx="25" cy="36" r="2.5" fill="#C4B5FD" opacity="0.9" />
      <path d="M25,38.5 Q24,41 23,42" stroke="#C4B5FD" strokeWidth="1.5" strokeLinecap="round" opacity="0.9" />
      {/* Exclamation mark ! */}
      <rect x="57" y="22" width="3" height="10" rx="1.5" fill="#DDD6FE" opacity="0.9" />
      <circle cx="58.5" cy="35" r="2" fill="#DDD6FE" opacity="0.9" />
      {/* Question mark ? */}
      <path d="M30,21 Q34,18 36,21 Q37,24 33,26 L33,28" stroke="#E9D5FF" strokeWidth="1.8" fill="none" strokeLinecap="round" opacity="0.8" />
      <circle cx="33" cy="30.5" r="1.2" fill="#E9D5FF" opacity="0.8" />
      {/* Sparkles */}
      <circle cx="21" cy="22" r="1.5" fill="#DDD6FE" opacity="0.8" />
      <circle cx="59" cy="19" r="1.5" fill="#A855F7" opacity="0.8" />
      <circle cx="40" cy="15" r="1" fill="#D8B4FE" opacity="0.7" />
    </svg>
  );
}

// i9 — GrossePruefung (#4ECDC4 teal) — trophy with star burst and crown
export function K6IslandGrossePruefung({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Glow beneath */}
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(78,205,196,0.2)" />
      {/* Rocky underside */}
      <path d="M20,48 Q23,63 32,60 Q40,65 48,60 Q57,63 60,48 Q53,57 40,54 Q27,57 20,48Z" fill="#164E4B" />
      <path d="M24,51 Q30,61 40,58 Q50,61 56,51 Q49,59 40,56 Q31,59 24,51Z" fill="#0D3330" />
      {/* Island body */}
      <ellipse cx="40" cy="47" rx="20" ry="9" fill="#0D9488" />
      {/* Grassy top */}
      <ellipse cx="40" cy="44" rx="21" ry="9" fill="#14B8A6" />
      <ellipse cx="40" cy="42" rx="21" ry="8.5" fill="#4ECDC4" />
      {/* Grass bumps */}
      <ellipse cx="24" cy="40" rx="5" ry="2.5" fill="#14B8A6" />
      <ellipse cx="56" cy="40" rx="5" ry="2.5" fill="#14B8A6" />
      {/* Star burst rays behind trophy */}
      <line x1="40" y1="11" x2="40" y2="16" stroke="#FFD700" strokeWidth="1.5" opacity="0.8" />
      <line x1="48" y1="13" x2="46" y2="17" stroke="#FFD700" strokeWidth="1.5" opacity="0.8" />
      <line x1="53" y1="19" x2="50" y2="21" stroke="#FFD700" strokeWidth="1.5" opacity="0.8" />
      <line x1="32" y1="13" x2="34" y2="17" stroke="#FFD700" strokeWidth="1.5" opacity="0.8" />
      <line x1="27" y1="19" x2="30" y2="21" stroke="#FFD700" strokeWidth="1.5" opacity="0.8" />
      {/* Trophy body */}
      <path d="M33,18 L33,30 Q33,34 40,34 Q47,34 47,30 L47,18 Z" fill="#FFD700" />
      {/* Trophy cups / handles */}
      <path d="M33,20 Q27,20 27,25 Q27,30 33,30" stroke="#FFA500" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M47,20 Q53,20 53,25 Q53,30 47,30" stroke="#FFA500" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Trophy stem */}
      <rect x="38" y="34" width="4" height="4" fill="#FFA500" />
      {/* Trophy base */}
      <rect x="34" y="38" width="12" height="3" rx="1" fill="#FFD700" />
      {/* Crown on top */}
      <path d="M35,18 L36,14 L39,17 L40,13 L41,17 L44,14 L45,18 Z" fill="#FFD700" stroke="#FFA500" strokeWidth="0.5" />
      {/* Star in trophy center */}
      <text x="40" y="29" textAnchor="middle" fontSize="8" fill="#FFF3" >★</text>
      <text x="40" y="29" textAnchor="middle" fontSize="7" fill="white" opacity="0.9">★</text>
      {/* Sparkles */}
      <circle cx="22" cy="24" r="1.8" fill="#FFD700" opacity="0.9" />
      <circle cx="58" cy="22" r="1.8" fill="#FFD700" opacity="0.9" />
      <circle cx="40" cy="9" r="1.2" fill="#4ECDC4" opacity="0.8" />
      <circle cx="24" cy="30" r="1" fill="#FFD700" opacity="0.6" />
      <circle cx="56" cy="30" r="1" fill="#FFD700" opacity="0.6" />
    </svg>
  );
}

export const K6_ISLAND_SVGS: Record<string, React.FC<{ size?: number }>> = {
  i1: K6IslandAktivPassiv,
  i2: K6IslandKonjunktiv2,
  i3: K6IslandInfinitivZu,
  i4: K6IslandSynonyme,
  i5: K6IslandFremdwoerter,
  i6: K6IslandNebensaetze,
  i7: K6IslandWortbildung,
  i8: K6IslandZeichensetzung,
  i9: K6IslandGrossePruefung,
};
