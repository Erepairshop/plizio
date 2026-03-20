// SVG Island illustrations for AstroEnglish K4 map
// Each island is a unique floating fantasy landmass matching its English ELA theme
// viewBox: "0 0 80 80", renders at 48-60px on mobile

import React from "react";

type IP = { size?: number };

function TrophyIsland({ size, badge, color1, color2, glowColor }: { size: number; badge: string; color1: string; color2: string; glowColor: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <ellipse cx="40" cy="74" rx="21" ry="5" fill={glowColor} />
      <path d="M20,50 Q25,60 30,56 Q34,66 40,61 Q46,66 50,56 Q55,60 60,50Z" fill="#0A2A28" />
      <ellipse cx="40" cy="49" rx="22" ry="10" fill="#0D3A38" />
      <ellipse cx="40" cy="43" rx="22" ry="8" fill="#155E5A" />
      <ellipse cx="40" cy="40" rx="20" ry="6" fill="#1A6E6A" />
      <line x1="40" y1="25" x2="40" y2="20" stroke="#4ECDC4" strokeWidth="1.5" opacity="0.65" />
      <line x1="43.5" y1="25.9" x2="46.5" y2="21.8" stroke="#4ECDC4" strokeWidth="1.5" opacity="0.65" />
      <line x1="46.7" y1="32" x2="52" y2="32" stroke="#4ECDC4" strokeWidth="1.5" opacity="0.65" />
      <line x1="40" y1="39" x2="40" y2="44" stroke="#4ECDC4" strokeWidth="1.5" opacity="0.65" />
      <line x1="33.3" y1="32" x2="28" y2="32" stroke="#4ECDC4" strokeWidth="1.5" opacity="0.65" />
      <line x1="36.5" y1="25.9" x2="33.5" y2="21.8" stroke="#4ECDC4" strokeWidth="1.5" opacity="0.65" />
      <path d="M33,22 Q33,33 40,35 Q47,33 47,22Z" fill="#FDE68A" />
      <rect x="37" y="34" width="6" height="4" fill="#FCA5A5" />
      <rect x="34" y="38" width="12" height="2.5" rx="1" fill="#FDE68A" />
      <path d="M33,24 Q29,24 29,28 Q29,32 33,30" stroke="#FDE68A" strokeWidth="1.5" fill="none" />
      <path d="M47,24 Q51,24 51,28 Q51,32 47,30" stroke="#FDE68A" strokeWidth="1.5" fill="none" />
      <path d="M33,22 L34.5,17 L37.5,20.5 L40,16 L42.5,20.5 L45.5,17 L47,22Z" fill="#FDE68A" />
      <circle cx="36.5" cy="20" r="1" fill="#F87171" />
      <circle cx="40" cy="18.5" r="1.2" fill="#60A5FA" />
      <circle cx="43.5" cy="20" r="1" fill="#34D399" />
      <text x="17" y="31" fontSize="9" fill="#4ECDC4">⭐</text>
      <text x="57" y="29" fontSize="8" fill="#4ECDC4">⭐</text>
      <text x="40" y="42" textAnchor="middle" fontSize="5" fontWeight="bold" fill="#99F6E4" fontFamily="monospace">{badge}</text>
      <text x="39" y="13" fontSize="7" fill="rgba(78,205,196,0.8)">✦</text>
    </svg>
  );
}

// i1 — Tenses Island: Blue island with timeline and tense labels
export function K4IslandTenses({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(59,130,246,0.2)" />
      <path d="M22,50 Q27,63 32,58 Q38,67 44,62 Q50,67 55,58 Q60,63 58,50Z" fill="#1A2A4A" />
      <ellipse cx="40" cy="48" rx="20" ry="8" fill="#1E3A6E" />
      <ellipse cx="40" cy="42" rx="20" ry="8" fill="#2563EB" />
      <ellipse cx="40" cy="39" rx="18" ry="6" fill="#3B82F6" />
      {/* Timeline arrow */}
      <line x1="18" y1="33" x2="62" y2="33" stroke="#DBEAFE" strokeWidth="1.5" />
      <polygon points="60,30.5 64,33 60,35.5" fill="#DBEAFE" />
      {/* Tense nodes */}
      <circle cx="25" cy="33" r="5" fill="#1D4ED8" stroke="#93C5FD" strokeWidth="1" />
      <text x="25" y="35.5" textAnchor="middle" fontSize="4.5" fontWeight="bold" fill="#DBEAFE">Past</text>
      <circle cx="40" cy="33" r="5" fill="#2563EB" stroke="#BFDBFE" strokeWidth="1.2" />
      <text x="40" y="35.5" textAnchor="middle" fontSize="4" fontWeight="bold" fill="white">Now</text>
      <circle cx="55" cy="33" r="5" fill="#1D4ED8" stroke="#93C5FD" strokeWidth="1" />
      <text x="55" y="35.5" textAnchor="middle" fontSize="4" fontWeight="bold" fill="#DBEAFE">Fut.</text>
      <text x="15" y="28" fontSize="7" fill="rgba(59,130,246,0.6)">✦</text>
    </svg>
  );
}

// i2 — Adverbs Island: Red island with motion arrows and -ly badges
export function K4IslandAdverbs({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(239,68,68,0.2)" />
      <path d="M21,50 Q26,63 32,58 Q38,67 44,62 Q50,67 56,58 Q61,63 59,50Z" fill="#3A0A0A" />
      <ellipse cx="40" cy="48" rx="20" ry="8" fill="#7F1D1D" />
      <ellipse cx="40" cy="42" rx="20" ry="8" fill="#B91C1C" />
      <ellipse cx="40" cy="39" rx="18" ry="6" fill="#EF4444" />
      {/* -ly badge */}
      <rect x="26" y="22" width="14" height="9" rx="2.5" fill="#FEF2F2" stroke="#EF4444" strokeWidth="1.2" />
      <text x="33" y="29" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#991B1B" fontFamily="monospace">-ly</text>
      {/* quickly arrow */}
      <rect x="42" y="19" width="22" height="9" rx="2.5" fill="#FEF2F2" stroke="#FCA5A5" strokeWidth="1" />
      <text x="53" y="26" textAnchor="middle" fontSize="5.5" fontWeight="bold" fill="#7F1D1D" fontFamily="monospace">quickly</text>
      {/* Speed lines */}
      <line x1="14" y1="28" x2="24" y2="28" stroke="#FCA5A5" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="12" y1="32" x2="23" y2="32" stroke="#FCA5A5" strokeWidth="1.2" strokeLinecap="round" />
      <polygon points="23,26.5 26,28 23,29.5" fill="#FCA5A5" />
      <text x="55" y="38" fontSize="6" fill="rgba(239,68,68,0.6)">✦</text>
    </svg>
  );
}

// i3 — Synonyms & Antonyms Island: Green island with opposite arrows
export function K4IslandSynAnt({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(0,255,136,0.15)" />
      <path d="M20,50 Q26,64 32,60 Q38,68 44,62 Q50,68 55,60 Q61,64 60,50Z" fill="#1A3A1A" />
      <ellipse cx="40" cy="48" rx="21" ry="8" fill="#235A23" />
      <ellipse cx="40" cy="42" rx="21" ry="8" fill="#2E7D32" />
      <ellipse cx="40" cy="39" rx="19" ry="6" fill="#388E3C" />
      {/* hot ↔ cold */}
      <rect x="17" y="26" width="14" height="8" rx="2" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1" />
      <text x="24" y="32.5" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#92400E" fontFamily="monospace">hot</text>
      <line x1="31" y1="30" x2="49" y2="30" stroke="#A5F3FC" strokeWidth="1.5" />
      <polygon points="31,28 27,30 31,32" fill="#A5F3FC" />
      <polygon points="49,28 53,30 49,32" fill="#A5F3FC" />
      <rect x="49" y="26" width="14" height="8" rx="2" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="1" />
      <text x="56" y="32.5" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#1E40AF" fontFamily="monospace">cold</text>
      {/* big ≈ large */}
      <rect x="22" y="18" width="14" height="8" rx="2" fill="#DCFCE7" stroke="#22C55E" strokeWidth="1" />
      <text x="29" y="24.5" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#166534" fontFamily="monospace">big</text>
      <text x="40" y="25" textAnchor="middle" fontSize="9" fill="#4ADE80">≈</text>
      <rect x="44" y="18" width="16" height="8" rx="2" fill="#DCFCE7" stroke="#22C55E" strokeWidth="1" />
      <text x="52" y="24.5" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#166534" fontFamily="monospace">large</text>
      <text x="14" y="22" fontSize="7" fill="rgba(0,255,136,0.55)">✦</text>
    </svg>
  );
}

// i4 — Essay Writing Island: Gold island with essay structure outline
export function K4IslandEssayWriting({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(255,215,0,0.2)" />
      <path d="M21,50 Q26,63 32,58 Q38,67 44,62 Q50,67 56,58 Q61,63 59,50Z" fill="#3A2A00" />
      <ellipse cx="40" cy="48" rx="20" ry="8" fill="#5D4200" />
      <ellipse cx="40" cy="42" rx="20" ry="7" fill="#7B5700" />
      <ellipse cx="40" cy="38" rx="18" ry="6" fill="#8B6500" />
      {/* Essay paper */}
      <rect x="24" y="18" width="32" height="24" rx="2" fill="#FFFDE7" stroke="#FCD34D" strokeWidth="1" />
      {/* Title line */}
      <rect x="28" y="22" width="24" height="3" rx="1" fill="#FCD34D" opacity="0.5" />
      {/* Body lines */}
      <line x1="27" y1="29" x2="52" y2="29" stroke="#D4A017" strokeWidth="0.7" />
      <line x1="27" y1="32" x2="53" y2="32" stroke="#D4A017" strokeWidth="0.7" />
      <line x1="27" y1="35" x2="50" y2="35" stroke="#D4A017" strokeWidth="0.7" />
      {/* Paragraph indent marks */}
      <circle cx="28" cy="29" r="1" fill="#F59E0B" opacity="0.6" />
      <circle cx="31" cy="32" r="1" fill="#F59E0B" opacity="0.5" />
      <circle cx="31" cy="35" r="1" fill="#F59E0B" opacity="0.5" />
      <text x="15" y="27" fontSize="7" fill="rgba(255,215,0,0.6)">✦</text>
      <text x="60" y="44" fontSize="6" fill="rgba(255,215,0,0.5)">✦</text>
    </svg>
  );
}

// i5 — Conjunctions Island: Purple island with connecting bridge
export function K4IslandConjunctions({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(180,77,255,0.18)" />
      <path d="M20,50 Q26,64 33,59 Q39,68 45,62 Q52,68 57,59 Q63,64 60,50Z" fill="#2A0A3A" />
      <ellipse cx="40" cy="49" rx="21" ry="8" fill="#3D0D5A" />
      <ellipse cx="32" cy="41" rx="12" ry="7" fill="#5B2182" />
      <ellipse cx="46" cy="40" rx="13" ry="7" fill="#6A2499" />
      <ellipse cx="40" cy="37" rx="15" ry="8" fill="#7B35B0" />
      <ellipse cx="40" cy="35" rx="13" ry="6" fill="#8B44C0" />
      {/* Bridge connecting two word platforms */}
      <rect x="17" y="26" width="14" height="9" rx="2" fill="#EDE9FE" stroke="#B44DFF" strokeWidth="1.2" />
      <text x="24" y="33" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#5B21B6" fontFamily="monospace">cats</text>
      <rect x="49" y="26" width="14" height="9" rx="2" fill="#EDE9FE" stroke="#B44DFF" strokeWidth="1.2" />
      <text x="56" y="33" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#5B21B6" fontFamily="monospace">dogs</text>
      {/* Bridge arch */}
      <path d="M31,31 Q40,22 49,31" fill="none" stroke="#B44DFF" strokeWidth="1.5" />
      {/* and badge */}
      <rect x="34" y="20" width="12" height="8" rx="2" fill="#B44DFF" opacity="0.8" />
      <text x="40" y="26.5" textAnchor="middle" fontSize="6.5" fontWeight="bold" fill="white" fontFamily="monospace">and</text>
      <text x="15" y="23" fontSize="7" fill="rgba(180,77,255,0.6)">✦</text>
    </svg>
  );
}

// i6 — Prefixes & Suffixes Island: Emerald island with word-building blocks
export function K4IslandPrefixSuffix({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(16,185,129,0.18)" />
      <path d="M21,50 Q27,63 32,59 Q38,68 44,62 Q51,68 56,59 Q62,63 59,50Z" fill="#0A2A1E" />
      <ellipse cx="40" cy="48" rx="21" ry="9" fill="#124A36" />
      <ellipse cx="40" cy="43" rx="21" ry="8" fill="#166A4A" />
      <ellipse cx="40" cy="40" rx="19" ry="6" fill="#1A7A55" />
      {/* Word blocks */}
      <rect x="18" y="26" width="13" height="11" rx="2" fill="#A7F3D0" stroke="#10B981" strokeWidth="1.2" />
      <text x="24.5" y="34" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#065F46" fontFamily="monospace">un-</text>
      <rect x="32" y="24" width="16" height="11" rx="2" fill="#6EE7B7" stroke="#34D399" strokeWidth="1.5" />
      <text x="40" y="32" textAnchor="middle" fontSize="6.5" fontWeight="bold" fill="#064E3B" fontFamily="monospace">happy</text>
      <rect x="49" y="26" width="13" height="11" rx="2" fill="#A7F3D0" stroke="#10B981" strokeWidth="1.2" />
      <text x="55.5" y="34" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#065F46" fontFamily="monospace">-ness</text>
      {/* Plus connectors */}
      <text x="30.5" y="32.5" textAnchor="middle" fontSize="8" fill="#34D399">+</text>
      <text x="48" y="32.5" textAnchor="middle" fontSize="8" fill="#34D399">+</text>
      <text x="14" y="24" fontSize="7" fill="rgba(16,185,129,0.6)">✦</text>
    </svg>
  );
}

// i7 — Poetry Island: Orange island with poem stanzas
export function K4IslandPoetry({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(255,149,0,0.18)" />
      <path d="M20,50 Q26,63 32,59 Q38,67 44,62 Q51,67 56,59 Q62,63 60,50Z" fill="#3A1A00" />
      <ellipse cx="40" cy="49" rx="22" ry="9" fill="#5A2A00" />
      <ellipse cx="40" cy="43" rx="22" ry="8" fill="#7A3A00" />
      <ellipse cx="40" cy="40" rx="20" ry="6" fill="#8B4200" />
      {/* Poem parchment */}
      <rect x="23" y="19" width="34" height="23" rx="2" fill="#FFFDE7" stroke="#FCD34D" strokeWidth="1" />
      {/* Poem lines - stanzas */}
      <line x1="27" y1="24" x2="47" y2="24" stroke="#8B6500" strokeWidth="0.7" />
      <line x1="27" y1="27" x2="43" y2="27" stroke="#8B6500" strokeWidth="0.7" />
      <line x1="27" y1="31" x2="46" y2="31" stroke="#8B6500" strokeWidth="0.7" />
      <line x1="27" y1="34" x2="41" y2="34" stroke="#8B6500" strokeWidth="0.7" />
      <line x1="27" y1="37" x2="44" y2="37" stroke="#8B6500" strokeWidth="0.7" />
      {/* Rhyme brackets */}
      <path d="M52,24 L54,24 L54,27 L52,27" fill="none" stroke="#FF9500" strokeWidth="0.8" />
      <path d="M52,31 L54,31 L54,34 L52,34" fill="none" stroke="#FF9500" strokeWidth="0.8" />
      {/* Music note */}
      <text x="18" y="29" fontSize="8" fill="rgba(255,149,0,0.7)">♪</text>
      <text x="60" y="26" fontSize="7" fill="rgba(255,149,0,0.6)">♫</text>
    </svg>
  );
}

// i8 — Persuasive Writing Island: Pink island with debate arrows
export function K4IslandPersuasive({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(232,121,249,0.18)" />
      <path d="M21,50 Q26,63 32,59 Q38,68 44,62 Q51,68 57,59 Q62,63 59,50Z" fill="#2A0A2E" />
      <ellipse cx="40" cy="49" rx="21" ry="9" fill="#3D0D4A" />
      <ellipse cx="40" cy="43" rx="21" ry="8" fill="#5A1570" />
      <ellipse cx="40" cy="40" rx="19" ry="6" fill="#6B2080" />
      {/* Scale / balance */}
      <line x1="40" y1="20" x2="40" y2="38" stroke="#E879F9" strokeWidth="1.2" />
      <line x1="28" y1="24" x2="52" y2="24" stroke="#E879F9" strokeWidth="1.5" />
      {/* Left pan */}
      <path d="M24,24 Q28,30 32,24" fill="none" stroke="#E879F9" strokeWidth="1" />
      <ellipse cx="28" cy="30" rx="5" ry="2" fill="rgba(232,121,249,0.25)" stroke="#E879F9" strokeWidth="0.8" />
      <text x="28" y="33" textAnchor="middle" fontSize="5" fill="#F0ABFC">for</text>
      {/* Right pan */}
      <path d="M48,24 Q52,30 56,24" fill="none" stroke="#E879F9" strokeWidth="1" />
      <ellipse cx="52" cy="30" rx="5" ry="2" fill="rgba(232,121,249,0.25)" stroke="#E879F9" strokeWidth="0.8" />
      <text x="52" y="33" textAnchor="middle" fontSize="5" fill="#F0ABFC">against</text>
      {/* Stand base */}
      <polygon points="37,38 40,42 43,38" fill="#E879F9" opacity="0.6" />
      <text x="14" y="25" fontSize="7" fill="rgba(232,121,249,0.6)">✦</text>
    </svg>
  );
}

// i9 — Grand Finals Island
export function K4IslandGrandFinals({ size = 80 }: IP) {
  return <TrophyIsland size={size} badge="G4" color1="#F59E0B" color2="#B45309" glowColor="rgba(78,205,196,0.25)" />;
}

// Export map for all K4 islands
export const K4_ISLAND_SVGS: Record<string, React.FC<{ size?: number }>> = {
  i1: K4IslandTenses,
  i2: K4IslandAdverbs,
  i3: K4IslandSynAnt,
  i4: K4IslandEssayWriting,
  i5: K4IslandConjunctions,
  i6: K4IslandPrefixSuffix,
  i7: K4IslandPoetry,
  i8: K4IslandPersuasive,
  i9: K4IslandGrandFinals,
};
