// SVG Island illustrations for AstroEnglish K2 map
// Each island is a unique floating fantasy landmass matching its English ELA theme
// viewBox: "0 0 80 80", renders at 48-60px on mobile
// NO .map() — all SVG paths are static JSX

import React from "react";

type IP = { size?: number };

// i1 — Nouns Island: Blue floating island with label tags and noun/pronoun badges
export function K2IslandNouns({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Glow beneath */}
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(59,130,246,0.22)" />
      {/* Rocky underside stalactites */}
      <path d="M22,50 Q27,63 32,58 Q38,67 44,62 Q50,67 55,58 Q60,63 58,50Z" fill="#1A2A4A" />
      <path d="M27,53 Q29,61 32,58Z" fill="#102040" />
      <path d="M48,53 Q51,61 53,57Z" fill="#102040" />
      {/* Island body */}
      <ellipse cx="40" cy="48" rx="20" ry="8" fill="#1E3A6E" />
      {/* Grassy/themed top surface */}
      <ellipse cx="40" cy="42" rx="20" ry="8" fill="#2563EB" />
      <ellipse cx="40" cy="39" rx="18" ry="6" fill="#3B82F6" />
      {/* Main label tag — noun */}
      <rect x="22" y="28" width="16" height="9" rx="2" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="1.2" />
      <circle cx="22" cy="32.5" r="1.5" fill="#93C5FD" />
      <line x1="18" y1="32.5" x2="20.5" y2="32.5" stroke="#93C5FD" strokeWidth="1" />
      <text x="30" y="35" textAnchor="middle" fontSize="5.5" fontWeight="bold" fill="#1D4ED8" fontFamily="monospace">noun</text>
      {/* Label tag — pronoun */}
      <rect x="41" y="24" width="18" height="9" rx="2" fill="#EFF6FF" stroke="#60A5FA" strokeWidth="1.2" />
      <circle cx="41" cy="28.5" r="1.5" fill="#93C5FD" />
      <line x1="37" y1="28.5" x2="39.5" y2="28.5" stroke="#93C5FD" strokeWidth="1" />
      <text x="50" y="31" textAnchor="middle" fontSize="5" fontWeight="bold" fill="#1D4ED8" fontFamily="monospace">pronoun</text>
      {/* Label tag — verb (small, floating) */}
      <rect x="27" y="18" width="13" height="8" rx="2" fill="#BFDBFE" stroke="#60A5FA" strokeWidth="1" opacity="0.85" />
      <text x="33.5" y="24" textAnchor="middle" fontSize="5.5" fontWeight="bold" fill="#1E40AF" fontFamily="monospace">verb</text>
      {/* String line from verb tag down */}
      <line x1="33.5" y1="26" x2="33.5" y2="29" stroke="#93C5FD" strokeWidth="0.8" strokeDasharray="1 1" />
      {/* Floating sparkles */}
      <text x="15" y="30" fontSize="7" fill="rgba(59,130,246,0.65)">✦</text>
      <text x="58" y="22" fontSize="6" fill="rgba(147,197,253,0.6)">✦</text>
      <text x="61" y="38" fontSize="5" fill="rgba(59,130,246,0.5)">✦</text>
    </svg>
  );
}

// i2 — Action Verbs Island: Red dynamic island with running figure and action arrows
export function K2IslandActionVerbs({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Glow beneath */}
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(239,68,68,0.22)" />
      {/* Rocky underside stalactites */}
      <path d="M21,50 Q26,63 32,58 Q38,67 44,62 Q50,67 56,58 Q61,63 59,50Z" fill="#3A0A0A" />
      <path d="M27,53 Q29,62 32,58Z" fill="#2A0606" />
      <path d="M49,53 Q52,62 54,57Z" fill="#2A0606" />
      {/* Island body */}
      <ellipse cx="40" cy="48" rx="20" ry="8" fill="#7F1D1D" />
      {/* Themed top surface */}
      <ellipse cx="40" cy="42" rx="20" ry="8" fill="#B91C1C" />
      <ellipse cx="40" cy="39" rx="18" ry="6" fill="#EF4444" />
      {/* Running figure — stick figure in motion */}
      <circle cx="38" cy="21" r="3.5" fill="#FEF2F2" stroke="#EF4444" strokeWidth="0.8" />
      <line x1="38" y1="24.5" x2="39" y2="32" stroke="#FEF2F2" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="38.5" y1="27" x2="33" y2="24" stroke="#FEF2F2" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="38.5" y1="27" x2="44" y2="29" stroke="#FEF2F2" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="39" y1="32" x2="34" y2="38" stroke="#FEF2F2" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="39" y1="32" x2="44" y2="36" stroke="#FEF2F2" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="34" y1="38" x2="31" y2="35" stroke="#FEF2F2" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="44" y1="36" x2="47" y2="39" stroke="#FEF2F2" strokeWidth="1.2" strokeLinecap="round" />
      {/* Action arrows — speed lines */}
      <path d="M14,26 L20,26" stroke="#FCA5A5" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12,30 L19,30" stroke="#FCA5A5" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M15,34 L21,34" stroke="#FCA5A5" strokeWidth="1" strokeLinecap="round" />
      <polygon points="20,24.5 23,26 20,27.5" fill="#FCA5A5" />
      {/* Motion sparkles */}
      <text x="55" y="24" fontSize="7" fill="rgba(239,68,68,0.7)">✦</text>
      <text x="59" y="36" fontSize="5" fill="rgba(252,165,165,0.6)">✦</text>
      <text x="14" y="20" fontSize="6" fill="rgba(239,68,68,0.5)">✦</text>
    </svg>
  );
}

// i3 — Adjectives Island: Emerald island with color palette, paint brush and colorful splashes
export function K2IslandAdjectives({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Glow beneath */}
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(16,185,129,0.2)" />
      {/* Rocky underside stalactites */}
      <path d="M21,50 Q27,63 32,59 Q38,68 44,62 Q50,68 56,59 Q62,63 59,50Z" fill="#0A2A1C" />
      <path d="M26,53 Q28,62 31,58Z" fill="#061E14" />
      <path d="M50,53 Q53,62 55,57Z" fill="#061E14" />
      {/* Island body */}
      <ellipse cx="40" cy="48" rx="21" ry="9" fill="#065F46" />
      {/* Grassy themed top */}
      <ellipse cx="40" cy="43" rx="21" ry="8" fill="#059669" />
      <ellipse cx="40" cy="40" rx="19" ry="6" fill="#10B981" />
      {/* Paint palette body */}
      <ellipse cx="40" cy="30" rx="13" ry="10" fill="#ECFDF5" stroke="#10B981" strokeWidth="1" />
      {/* Thumb hole */}
      <ellipse cx="45" cy="37" rx="3" ry="2.5" fill="#D1FAE5" />
      {/* Color dots on palette */}
      <circle cx="32" cy="26" r="2.5" fill="#EF4444" />
      <circle cx="37" cy="22" r="2.5" fill="#F59E0B" />
      <circle cx="43" cy="22" r="2.5" fill="#3B82F6" />
      <circle cx="48" cy="25" r="2.5" fill="#A855F7" />
      <circle cx="33" cy="31" r="2.5" fill="#10B981" />
      <circle cx="39" cy="33" r="2" fill="#F97316" />
      {/* Paint brush */}
      <rect x="52" y="16" width="2.5" height="14" rx="1" fill="#92400E" transform="rotate(30 52 16)" />
      <rect x="56.5" y="12" width="2" height="5" rx="0.5" fill="#6B7280" transform="rotate(30 52 16)" />
      <path d="M57.5,13 Q60,14 59,17 Q57,16 57.5,13Z" fill="#ECFDF5" transform="rotate(30 52 16)" />
      {/* Colorful paint splash drops on ground */}
      <circle cx="22" cy="40" r="2" fill="#EF4444" opacity="0.7" />
      <circle cx="57" cy="38" r="1.8" fill="#3B82F6" opacity="0.7" />
      <circle cx="19" cy="36" r="1.3" fill="#F59E0B" opacity="0.7" />
      <circle cx="60" cy="43" r="1.5" fill="#A855F7" opacity="0.6" />
      {/* Sparkles */}
      <text x="14" y="28" fontSize="7" fill="rgba(16,185,129,0.65)">✦</text>
      <text x="60" y="26" fontSize="6" fill="rgba(16,185,129,0.55)">✦</text>
    </svg>
  );
}

// i4 — Sentence Types Island: Amber island with three floating punctuation marks (? ! .)
export function K2IslandSentenceTypes({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Glow beneath */}
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(245,158,11,0.22)" />
      {/* Rocky underside stalactites */}
      <path d="M21,50 Q27,63 32,58 Q38,67 44,62 Q51,67 56,58 Q62,63 59,50Z" fill="#3A2000" />
      <path d="M27,53 Q29,62 32,58Z" fill="#2A1600" />
      <path d="M49,53 Q52,62 54,57Z" fill="#2A1600" />
      {/* Island body */}
      <ellipse cx="40" cy="48" rx="21" ry="9" fill="#78350F" />
      {/* Themed top surface */}
      <ellipse cx="40" cy="43" rx="21" ry="8" fill="#B45309" />
      <ellipse cx="40" cy="40" rx="19" ry="6" fill="#F59E0B" />
      {/* Question mark bubble */}
      <rect x="20" y="20" width="15" height="18" rx="4" fill="rgba(245,158,11,0.25)" stroke="#F59E0B" strokeWidth="1.4" />
      <polygon points="25,38 29,38 27,42" fill="#F59E0B" opacity="0.7" />
      <text x="27.5" y="33" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#FDE68A">?</text>
      {/* Exclamation mark bubble */}
      <rect x="38" y="16" width="15" height="22" rx="4" fill="rgba(245,158,11,0.3)" stroke="#FBBF24" strokeWidth="1.4" />
      <polygon points="43,38 47,38 45,42" fill="#FBBF24" opacity="0.7" />
      <text x="45.5" y="33" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#FFFBEB">!</text>
      {/* Period — small floating bubble */}
      <rect x="57" y="28" width="12" height="12" rx="4" fill="rgba(245,158,11,0.2)" stroke="#D97706" strokeWidth="1.2" />
      <text x="63" y="37" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#FEF3C7">.</text>
      {/* Floating sparkles */}
      <text x="14" y="20" fontSize="7" fill="rgba(245,158,11,0.65)">✦</text>
      <text x="16" y="44" fontSize="5" fill="rgba(251,191,36,0.55)">✦</text>
      <text x="63" y="18" fontSize="6" fill="rgba(245,158,11,0.5)">✦</text>
    </svg>
  );
}

// i5 — Capitalization Island: Indigo island with big letter wearing a crown
export function K2IslandCapitalization({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Glow beneath */}
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(99,102,241,0.22)" />
      {/* Rocky underside stalactites */}
      <path d="M21,50 Q27,63 32,58 Q38,67 44,62 Q50,67 56,58 Q62,63 59,50Z" fill="#1E1A4E" />
      <path d="M27,53 Q29,62 32,58Z" fill="#16124A" />
      <path d="M49,53 Q52,62 54,57Z" fill="#16124A" />
      {/* Island body */}
      <ellipse cx="40" cy="48" rx="21" ry="9" fill="#312E81" />
      {/* Themed top surface */}
      <ellipse cx="40" cy="43" rx="21" ry="8" fill="#4338CA" />
      <ellipse cx="40" cy="40" rx="19" ry="6" fill="#6366F1" />
      {/* Glow circle behind the A */}
      <ellipse cx="40" cy="27" rx="13" ry="12" fill="rgba(99,102,241,0.25)" />
      {/* Big uppercase A */}
      <text x="40" y="38" textAnchor="middle" fontSize="24" fontWeight="bold" fill="#E0E7FF" fontFamily="serif">A</text>
      {/* Crown on top of A */}
      <path d="M30,18 L32,14 L36,17 L40,12 L44,17 L48,14 L50,18Z" fill="#FDE68A" />
      <rect x="30" y="17" width="20" height="4" rx="1" fill="#FCD34D" />
      {/* Crown jewels */}
      <circle cx="35" cy="17" r="1.2" fill="#EF4444" />
      <circle cx="40" cy="17" r="1.5" fill="#3B82F6" />
      <circle cx="45" cy="17" r="1.2" fill="#10B981" />
      {/* Small lowercase a beside with reference */}
      <text x="59" y="36" textAnchor="middle" fontSize="11" fill="rgba(99,102,241,0.6)" fontFamily="serif">a</text>
      <line x1="54" y1="28" x2="64" y2="38" stroke="#6366F1" strokeWidth="1.5" opacity="0.5" />
      {/* Arrow pointing up */}
      <text x="17" y="33" textAnchor="middle" fontSize="9" fill="rgba(165,180,252,0.7)">↑</text>
      {/* Sparkles */}
      <text x="14" y="24" fontSize="7" fill="rgba(99,102,241,0.65)">✦</text>
      <text x="61" y="22" fontSize="6" fill="rgba(165,180,252,0.6)">✦</text>
      <text x="63" y="44" fontSize="5" fill="rgba(99,102,241,0.5)">✦</text>
    </svg>
  );
}

// i6 — Spelling Island: Pink island with quill pen, ink drops and common word patterns
export function K2IslandSpelling({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Glow beneath */}
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(236,72,153,0.22)" />
      {/* Rocky underside stalactites */}
      <path d="M21,50 Q27,63 32,58 Q38,67 44,62 Q51,67 56,58 Q62,63 59,50Z" fill="#3A0A28" />
      <path d="M27,53 Q29,62 32,58Z" fill="#2A0620" />
      <path d="M49,53 Q52,62 54,57Z" fill="#2A0620" />
      {/* Island body */}
      <ellipse cx="40" cy="48" rx="21" ry="9" fill="#831843" />
      {/* Themed top surface */}
      <ellipse cx="40" cy="43" rx="21" ry="8" fill="#BE185D" />
      <ellipse cx="40" cy="40" rx="19" ry="6" fill="#EC4899" />
      {/* Ink pot / inkwell */}
      <ellipse cx="28" cy="37" rx="5" ry="3.5" fill="#1E1B4B" />
      <rect x="23" y="31" width="10" height="7" rx="2" fill="#312E81" />
      <ellipse cx="28" cy="31" rx="5" ry="2.5" fill="#4338CA" />
      {/* Ink drop dripping */}
      <circle cx="28" cy="38" r="1.2" fill="#6366F1" opacity="0.8" />
      <circle cx="31" cy="41" r="0.9" fill="#6366F1" opacity="0.5" />
      {/* Quill pen — feather shape */}
      <path d="M34,38 Q38,20 58,15 Q55,25 52,28 Q48,22 44,30 Q50,25 46,33 Q42,28 40,36Z" fill="#FEF9C3" />
      <path d="M34,38 Q38,22 56,17 Q52,26 48,29" stroke="#FDE68A" strokeWidth="0.7" fill="none" opacity="0.6" />
      {/* Pen nib */}
      <path d="M34,38 L32,42 L36,40Z" fill="#374151" />
      {/* Letter badge: -ing */}
      <rect x="49" y="30" width="14" height="9" rx="2.5" fill="#FDF2F8" stroke="#EC4899" strokeWidth="1" />
      <text x="56" y="37" textAnchor="middle" fontSize="7.5" fontWeight="bold" fill="#BE185D" fontFamily="monospace">-ing</text>
      {/* Letter badge: -ed */}
      <rect x="49" y="42" width="14" height="9" rx="2.5" fill="#FCE7F3" stroke="#F9A8D4" strokeWidth="1" />
      <text x="56" y="49" textAnchor="middle" fontSize="7.5" fontWeight="bold" fill="#9D174D" fontFamily="monospace">-ed</text>
      {/* Sparkles */}
      <text x="14" y="27" fontSize="7" fill="rgba(236,72,153,0.65)">✦</text>
      <text x="15" y="42" fontSize="5" fill="rgba(249,168,212,0.55)">✦</text>
      <text x="62" y="24" fontSize="6" fill="rgba(236,72,153,0.5)">✦</text>
    </svg>
  );
}

// i7 — Word Families Island: Teal island with letter blocks and common endings
export function K2IslandWordFamilies({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Glow beneath */}
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(20,184,166,0.22)" />
      {/* Rocky underside stalactites */}
      <path d="M21,50 Q27,63 32,58 Q38,67 44,62 Q50,67 56,58 Q62,63 59,50Z" fill="#0A2E2A" />
      <path d="M27,53 Q29,62 32,58Z" fill="#062420" />
      <path d="M49,53 Q52,62 54,57Z" fill="#062420" />
      {/* Island body */}
      <ellipse cx="40" cy="48" rx="21" ry="9" fill="#0F4A44" />
      {/* Themed top surface */}
      <ellipse cx="40" cy="43" rx="21" ry="8" fill="#0D9488" />
      <ellipse cx="40" cy="40" rx="19" ry="6" fill="#14B8A6" />
      {/* Letter block — "-at" */}
      <rect x="20" y="26" width="12" height="12" rx="2" fill="#CCFBF1" stroke="#14B8A6" strokeWidth="1.2" />
      <text x="26" y="36" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#0F766E" fontFamily="monospace">-at</text>
      {/* Letter block — "-an" */}
      <rect x="34" y="22" width="12" height="12" rx="2" fill="#99F6E4" stroke="#2DD4BF" strokeWidth="1.2" />
      <text x="40" y="32" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#0F766E" fontFamily="monospace">-an</text>
      {/* Letter block — "-in" */}
      <rect x="48" y="26" width="12" height="12" rx="2" fill="#CCFBF1" stroke="#14B8A6" strokeWidth="1.2" />
      <text x="54" y="36" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#0F766E" fontFamily="monospace">-in</text>
      {/* Magnifying glass */}
      <circle cx="30" cy="39" r="6" fill="none" stroke="#F0FDFA" strokeWidth="1.8" />
      <circle cx="30" cy="39" r="4" fill="rgba(204,251,241,0.3)" />
      <line x1="34.5" y1="43.5" x2="39" y2="48" stroke="#F0FDFA" strokeWidth="2" strokeLinecap="round" />
      <text x="30" y="41" textAnchor="middle" fontSize="5" fontWeight="bold" fill="#0F766E">-op</text>
      {/* Sparkles */}
      <text x="14" y="25" fontSize="7" fill="rgba(20,184,166,0.65)">✦</text>
      <text x="60" y="22" fontSize="6" fill="rgba(94,234,212,0.6)">✦</text>
      <text x="61" y="44" fontSize="5" fill="rgba(20,184,166,0.5)">✦</text>
    </svg>
  );
}

// i8 — Vocabulary Web Island: Purple globe island with connected word network
export function K2IslandVocabWeb({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Glow beneath */}
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(168,85,247,0.22)" />
      {/* Rocky underside stalactites */}
      <path d="M21,50 Q27,63 32,58 Q38,67 44,62 Q51,67 56,58 Q62,63 59,50Z" fill="#2E0A4A" />
      <path d="M27,53 Q29,62 32,58Z" fill="#220840" />
      <path d="M49,53 Q52,62 54,57Z" fill="#220840" />
      {/* Island body */}
      <ellipse cx="40" cy="48" rx="21" ry="9" fill="#4C1D95" />
      {/* Themed top surface */}
      <ellipse cx="40" cy="43" rx="21" ry="8" fill="#6D28D9" />
      <ellipse cx="40" cy="40" rx="19" ry="6" fill="#A855F7" />
      {/* Globe circle */}
      <circle cx="40" cy="28" r="12" fill="rgba(76,29,149,0.5)" stroke="#C084FC" strokeWidth="1.2" />
      {/* Globe latitude lines */}
      <ellipse cx="40" cy="28" rx="12" ry="5" fill="none" stroke="#C084FC" strokeWidth="0.7" opacity="0.5" />
      <ellipse cx="40" cy="24" rx="10" ry="3.5" fill="none" stroke="#C084FC" strokeWidth="0.7" opacity="0.4" />
      <ellipse cx="40" cy="32" rx="10" ry="3.5" fill="none" stroke="#C084FC" strokeWidth="0.7" opacity="0.4" />
      {/* Globe longitude line */}
      <line x1="40" y1="16" x2="40" y2="40" stroke="#C084FC" strokeWidth="0.7" opacity="0.5" />
      {/* Word nodes connected to globe */}
      <circle cx="20" cy="20" r="7" fill="#7C3AED" stroke="#C084FC" strokeWidth="1" />
      <text x="20" y="22" textAnchor="middle" fontSize="5" fontWeight="bold" fill="#EDE9FE" fontFamily="monospace">big</text>
      <line x1="27" y1="22" x2="29" y2="24" stroke="#C084FC" strokeWidth="0.9" />
      <circle cx="60" cy="20" r="7" fill="#7C3AED" stroke="#C084FC" strokeWidth="1" />
      <text x="60" y="22" textAnchor="middle" fontSize="5" fontWeight="bold" fill="#EDE9FE" fontFamily="monospace">run</text>
      <line x1="53" y1="22" x2="51" y2="24" stroke="#C084FC" strokeWidth="0.9" />
      <circle cx="22" cy="37" r="7" fill="#6D28D9" stroke="#C084FC" strokeWidth="1" />
      <text x="22" y="39" textAnchor="middle" fontSize="5" fontWeight="bold" fill="#EDE9FE" fontFamily="monospace">see</text>
      <line x1="29" y1="36" x2="29" y2="33" stroke="#C084FC" strokeWidth="0.9" />
      <circle cx="58" cy="37" r="7" fill="#6D28D9" stroke="#C084FC" strokeWidth="1" />
      <text x="58" y="39" textAnchor="middle" fontSize="5" fontWeight="bold" fill="#EDE9FE" fontFamily="monospace">far</text>
      <line x1="51" y1="36" x2="51" y2="33" stroke="#C084FC" strokeWidth="0.9" />
      {/* Sparkles */}
      <text x="13" y="30" fontSize="7" fill="rgba(168,85,247,0.65)">✦</text>
      <text x="62" y="46" fontSize="5" fill="rgba(192,132,252,0.5)">✦</text>
      <text x="39" y="13" fontSize="6" fill="rgba(168,85,247,0.55)">✦</text>
    </svg>
  );
}

// i9 — Grand Finals Island: Teal final exam island with trophy, crown and star burst
export function K2IslandGrandFinals({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Glow beneath */}
      <ellipse cx="40" cy="74" rx="21" ry="5" fill="rgba(78,205,196,0.25)" />
      {/* Rocky underside stalactites */}
      <path d="M20,50 Q25,60 30,56 Q34,66 40,61 Q46,66 50,56 Q55,60 60,50Z" fill="#0A2A28" />
      <path d="M26,52 Q28,61 31,57Z" fill="#062420" />
      <path d="M50,52 Q53,61 55,56Z" fill="#062420" />
      {/* Island body */}
      <ellipse cx="40" cy="49" rx="22" ry="10" fill="#0D3A38" />
      {/* Top surface */}
      <ellipse cx="40" cy="43" rx="22" ry="8" fill="#155E5A" />
      <ellipse cx="40" cy="40" rx="20" ry="6" fill="#1A6E6A" />
      {/* Star burst rays — static */}
      <line x1="40" y1="25" x2="40" y2="20" stroke="#4ECDC4" strokeWidth="1.5" opacity="0.65" />
      <line x1="43.5" y1="25.9" x2="46.5" y2="21.8" stroke="#4ECDC4" strokeWidth="1.5" opacity="0.65" />
      <line x1="46.1" y1="28.5" x2="50.6" y2="25.5" stroke="#4ECDC4" strokeWidth="1.5" opacity="0.65" />
      <line x1="46.7" y1="32" x2="52" y2="32" stroke="#4ECDC4" strokeWidth="1.5" opacity="0.65" />
      <line x1="46.1" y1="35.5" x2="50.6" y2="38.5" stroke="#4ECDC4" strokeWidth="1.5" opacity="0.65" />
      <line x1="43.5" y1="38.1" x2="46.5" y2="42.2" stroke="#4ECDC4" strokeWidth="1.5" opacity="0.65" />
      <line x1="40" y1="39" x2="40" y2="44" stroke="#4ECDC4" strokeWidth="1.5" opacity="0.65" />
      <line x1="36.5" y1="38.1" x2="33.5" y2="42.2" stroke="#4ECDC4" strokeWidth="1.5" opacity="0.65" />
      <line x1="33.9" y1="35.5" x2="29.4" y2="38.5" stroke="#4ECDC4" strokeWidth="1.5" opacity="0.65" />
      <line x1="33.3" y1="32" x2="28" y2="32" stroke="#4ECDC4" strokeWidth="1.5" opacity="0.65" />
      <line x1="33.9" y1="28.5" x2="29.4" y2="25.5" stroke="#4ECDC4" strokeWidth="1.5" opacity="0.65" />
      <line x1="36.5" y1="25.9" x2="33.5" y2="21.8" stroke="#4ECDC4" strokeWidth="1.5" opacity="0.65" />
      {/* Trophy cup */}
      <path d="M33,22 Q33,33 40,35 Q47,33 47,22Z" fill="#FDE68A" />
      <rect x="37" y="34" width="6" height="4" fill="#FCA5A5" />
      <rect x="34" y="38" width="12" height="2.5" rx="1" fill="#FDE68A" />
      {/* Trophy handles */}
      <path d="M33,24 Q29,24 29,28 Q29,32 33,30" stroke="#FDE68A" strokeWidth="1.5" fill="none" />
      <path d="M47,24 Q51,24 51,28 Q51,32 47,30" stroke="#FDE68A" strokeWidth="1.5" fill="none" />
      <ellipse cx="39" cy="27" rx="3" ry="5" fill="rgba(255,255,255,0.15)" />
      {/* Crown on trophy */}
      <path d="M33,22 L34.5,17 L37.5,20.5 L40,16 L42.5,20.5 L45.5,17 L47,22Z" fill="#FDE68A" />
      <circle cx="36.5" cy="20" r="1" fill="#F87171" />
      <circle cx="40" cy="18.5" r="1.2" fill="#60A5FA" />
      <circle cx="43.5" cy="20" r="1" fill="#34D399" />
      {/* Stars beside trophy */}
      <text x="17" y="31" fontSize="9" fill="#4ECDC4">⭐</text>
      <text x="57" y="29" fontSize="8" fill="#4ECDC4">⭐</text>
      {/* G2 badge on base */}
      <text x="40" y="42" textAnchor="middle" fontSize="5" fontWeight="bold" fill="#99F6E4" fontFamily="monospace">G2</text>
      {/* Sparkle above */}
      <text x="39" y="13" fontSize="7" fill="rgba(78,205,196,0.8)">✦</text>
    </svg>
  );
}

// Export map for all K2 islands
export const K2_ISLAND_SVGS: Record<string, React.FC<{ size?: number }>> = {
  i1: K2IslandNouns,
  i2: K2IslandActionVerbs,
  i3: K2IslandAdjectives,
  i4: K2IslandSentenceTypes,
  i5: K2IslandCapitalization,
  i6: K2IslandSpelling,
  i7: K2IslandWordFamilies,
  i8: K2IslandVocabWeb,
  i9: K2IslandGrandFinals,
};
