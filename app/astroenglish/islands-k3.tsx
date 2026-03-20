// SVG Island illustrations for AstroEnglish K3 map
// Each island is a unique floating fantasy landmass matching its English ELA theme
// viewBox: "0 0 80 80", renders at 48-60px on mobile

import React from "react";

type IP = { size?: number };

// i1 — Plurals Island: Blue stacked copies with plural endings
export function K3IslandPlurals({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(59,130,246,0.2)" />
      <path d="M22,50 Q27,63 32,58 Q38,67 44,62 Q50,67 55,58 Q60,63 58,50Z" fill="#1A2A4A" />
      <path d="M27,53 Q29,61 32,58Z" fill="#102040" />
      <path d="M48,53 Q51,61 53,57Z" fill="#102040" />
      <ellipse cx="40" cy="48" rx="20" ry="8" fill="#1E3A6E" />
      <ellipse cx="40" cy="42" rx="20" ry="8" fill="#2563EB" />
      <ellipse cx="40" cy="39" rx="18" ry="6" fill="#3B82F6" />
      {/* Stacked word cards */}
      <rect x="23" y="34" width="16" height="9" rx="2" fill="#BFDBFE" stroke="#3B82F6" strokeWidth="1" />
      <rect x="25" y="30" width="16" height="9" rx="2" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="1.2" />
      <rect x="27" y="26" width="16" height="9" rx="2" fill="#EFF6FF" stroke="#60A5FA" strokeWidth="1.2" />
      <text x="35" y="33" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#1D4ED8" fontFamily="monospace">cats</text>
      {/* Plural badge */}
      <rect x="47" y="24" width="14" height="9" rx="2" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="1" />
      <text x="54" y="31" textAnchor="middle" fontSize="6.5" fontWeight="bold" fill="#1E40AF" fontFamily="monospace">-s / -es</text>
      <text x="15" y="29" fontSize="7" fill="rgba(59,130,246,0.6)">✦</text>
      <text x="59" y="18" fontSize="6" fill="rgba(147,197,253,0.55)">✦</text>
    </svg>
  );
}

// i2 — Pronouns Island: Red island with pronoun shields
export function K3IslandPronouns({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(239,68,68,0.2)" />
      <path d="M21,50 Q26,63 32,58 Q38,67 44,62 Q50,67 56,58 Q61,63 59,50Z" fill="#3A0A0A" />
      <ellipse cx="40" cy="48" rx="20" ry="8" fill="#7F1D1D" />
      <ellipse cx="40" cy="42" rx="20" ry="8" fill="#B91C1C" />
      <ellipse cx="40" cy="39" rx="18" ry="6" fill="#EF4444" />
      {/* Shield shapes */}
      <path d="M25,22 L25,32 Q25,36 30,37 Q35,36 35,32 L35,22Z" fill="#FEF2F2" stroke="#EF4444" strokeWidth="1" />
      <text x="30" y="30" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#991B1B" fontFamily="monospace">I / me</text>
      <path d="M43,20 L43,32 Q43,36 49,37 Q55,36 55,32 L55,20Z" fill="#FEF2F2" stroke="#FCA5A5" strokeWidth="1" />
      <text x="49" y="29" textAnchor="middle" fontSize="5.5" fontWeight="bold" fill="#991B1B" fontFamily="monospace">he/she</text>
      <text x="15" y="27" fontSize="7" fill="rgba(239,68,68,0.6)">✦</text>
      <text x="59" y="20" fontSize="6" fill="rgba(252,165,165,0.5)">✦</text>
    </svg>
  );
}

// i3 — Story Structure Island: Green island with story mountain diagram
export function K3IslandStoryStructure({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(0,255,136,0.15)" />
      <path d="M20,50 Q26,64 32,60 Q38,68 44,62 Q50,68 55,60 Q61,64 60,50Z" fill="#1A3A1A" />
      <ellipse cx="40" cy="48" rx="21" ry="8" fill="#235A23" />
      <ellipse cx="40" cy="42" rx="21" ry="8" fill="#2E7D32" />
      <ellipse cx="40" cy="39" rx="19" ry="6" fill="#388E3C" />
      {/* Story mountain */}
      <path d="M18,40 L30,24 L40,20 L50,24 L62,40Z" fill="none" stroke="#A7F3D0" strokeWidth="1.5" opacity="0.8" />
      {/* Mountain points */}
      <circle cx="18" cy="40" r="2.5" fill="#4CAF50" />
      <circle cx="30" cy="24" r="2.5" fill="#66BB6A" />
      <circle cx="40" cy="20" r="3" fill="#81C784" />
      <circle cx="50" cy="24" r="2.5" fill="#66BB6A" />
      <circle cx="62" cy="40" r="2.5" fill="#4CAF50" />
      {/* Labels */}
      <text x="13" y="48" textAnchor="middle" fontSize="5" fill="#A5F3FC" fontFamily="monospace">Intro</text>
      <text x="40" y="17" textAnchor="middle" fontSize="5" fill="#A5F3FC" fontFamily="monospace">Climax</text>
      <text x="67" y="48" textAnchor="middle" fontSize="5" fill="#A5F3FC" fontFamily="monospace">End</text>
      <text x="15" y="30" fontSize="7" fill="rgba(0,255,136,0.55)">✦</text>
    </svg>
  );
}

// i4 — Writing Island: Gold island with quill and writing rules scroll
export function K3IslandWriting({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(255,215,0,0.2)" />
      <path d="M21,50 Q26,63 32,58 Q38,67 44,62 Q50,67 56,58 Q61,63 59,50Z" fill="#3A2A00" />
      <ellipse cx="40" cy="48" rx="20" ry="8" fill="#5D4200" />
      <ellipse cx="40" cy="42" rx="20" ry="7" fill="#7B5700" />
      <ellipse cx="40" cy="38" rx="18" ry="6" fill="#8B6500" />
      {/* Scroll / parchment */}
      <rect x="24" y="22" width="32" height="18" rx="3" fill="#FFFDE7" stroke="#FCD34D" strokeWidth="1" />
      <ellipse cx="24" cy="31" rx="2.5" ry="9" fill="#FFF9C4" stroke="#FCD34D" strokeWidth="0.8" />
      <ellipse cx="56" cy="31" rx="2.5" ry="9" fill="#FFF9C4" stroke="#FCD34D" strokeWidth="0.8" />
      {/* Text lines on scroll */}
      <line x1="28" y1="26" x2="50" y2="26" stroke="#8B6500" strokeWidth="0.7" />
      <line x1="28" y1="29" x2="52" y2="29" stroke="#8B6500" strokeWidth="0.7" />
      <line x1="28" y1="32" x2="49" y2="32" stroke="#8B6500" strokeWidth="0.7" />
      <line x1="28" y1="35" x2="51" y2="35" stroke="#8B6500" strokeWidth="0.7" />
      {/* Pencil */}
      <rect x="58" y="19" width="2.5" height="14" rx="1" fill="#FDD835" transform="rotate(20 58 19)" />
      <polygon points="61,32 63.5,32 62.2,36" fill="#FF7043" transform="rotate(20 58 19)" />
      <text x="16" y="29" fontSize="7" fill="rgba(255,215,0,0.6)">✦</text>
      <text x="60" y="46" fontSize="6" fill="rgba(255,215,0,0.5)">✦</text>
    </svg>
  );
}

// i5 — Figurative Language Island: Purple cloud island with speech bubbles
export function K3IslandFigurativeLanguage({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(180,77,255,0.18)" />
      <path d="M20,50 Q26,64 33,59 Q39,68 45,62 Q52,68 57,59 Q63,64 60,50Z" fill="#2A0A3A" />
      <ellipse cx="40" cy="49" rx="21" ry="8" fill="#3D0D5A" />
      <ellipse cx="32" cy="41" rx="12" ry="7" fill="#5B2182" />
      <ellipse cx="46" cy="40" rx="13" ry="7" fill="#6A2499" />
      <ellipse cx="40" cy="37" rx="15" ry="8" fill="#7B35B0" />
      <ellipse cx="40" cy="35" rx="13" ry="6" fill="#8B44C0" />
      {/* Simile bubble */}
      <rect x="22" y="22" width="24" height="13" rx="4" fill="rgba(180,77,255,0.3)" stroke="#B44DFF" strokeWidth="1.2" />
      <polygon points="26,35 30,35 28,39" fill="#B44DFF" opacity="0.7" />
      <text x="34" y="31" textAnchor="middle" fontSize="5" fontWeight="bold" fill="#E0AAFF">like a...</text>
      {/* Metaphor bubble */}
      <rect x="50" y="19" width="17" height="11" rx="3" fill="rgba(180,77,255,0.25)" stroke="#B44DFF" strokeWidth="0.8" />
      <text x="58.5" y="27" textAnchor="middle" fontSize="5" fill="#D0A0FF">is a...</text>
      <text x="15" y="32" fontSize="7" fill="rgba(180,77,255,0.6)">✦</text>
    </svg>
  );
}

// i6 — Reading Comprehension Island: Emerald island with book and magnifier
export function K3IslandReadingComp({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(16,185,129,0.18)" />
      <path d="M21,50 Q27,63 32,59 Q38,68 44,62 Q51,68 56,59 Q62,63 59,50Z" fill="#0A2A1E" />
      <ellipse cx="40" cy="48" rx="21" ry="9" fill="#124A36" />
      <ellipse cx="40" cy="43" rx="21" ry="8" fill="#166A4A" />
      <ellipse cx="40" cy="40" rx="19" ry="6" fill="#1A7A55" />
      {/* Open book */}
      <path d="M20,34 Q29,30 38,34 L38,45 Q29,41 20,45Z" fill="#FFFDE7" />
      <path d="M38,34 Q47,30 56,34 L56,45 Q47,41 38,45Z" fill="#FFF9C4" />
      <line x1="38" y1="34" x2="38" y2="45" stroke="#BCAAA4" strokeWidth="1" />
      <line x1="23" y1="37" x2="35" y2="36" stroke="#9E9E9E" strokeWidth="0.7" />
      <line x1="22" y1="39" x2="35" y2="38" stroke="#9E9E9E" strokeWidth="0.7" />
      <line x1="41" y1="37" x2="53" y2="36" stroke="#9E9E9E" strokeWidth="0.7" />
      <line x1="41" y1="39" x2="54" y2="38" stroke="#9E9E9E" strokeWidth="0.7" />
      {/* Magnifying glass over book */}
      <circle cx="45" cy="37" r="6" fill="none" stroke="#10B981" strokeWidth="1.5" />
      <circle cx="45" cy="37" r="4.5" fill="rgba(16,185,129,0.1)" />
      <line x1="49.5" y1="41.5" x2="53" y2="45" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" />
      <text x="14" y="27" fontSize="7" fill="rgba(16,185,129,0.6)">✦</text>
    </svg>
  );
}

// i7 — Grammar Rules Island: Orange castle with Subject/Verb/Object towers
export function K3IslandGrammarRules({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(255,149,0,0.18)" />
      <path d="M20,50 Q26,63 32,59 Q38,67 44,62 Q51,67 56,59 Q62,63 60,50Z" fill="#3A1A00" />
      <ellipse cx="40" cy="49" rx="22" ry="9" fill="#5A2A00" />
      <ellipse cx="40" cy="43" rx="22" ry="8" fill="#7A3A00" />
      <ellipse cx="40" cy="40" rx="20" ry="6" fill="#8B4200" />
      {/* Castle wall base */}
      <rect x="26" y="32" width="28" height="10" rx="1" fill="#C76200" />
      {/* Left tower — S */}
      <rect x="24" y="22" width="10" height="18" rx="1" fill="#D97000" />
      <rect x="23" y="20" width="3" height="4" rx="0.5" fill="#D97000" />
      <rect x="27" y="20" width="3" height="4" rx="0.5" fill="#D97000" />
      <rect x="31" y="20" width="3" height="4" rx="0.5" fill="#D97000" />
      <text x="29" y="33" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#FFD700">S</text>
      {/* Middle tower — V */}
      <rect x="35" y="19" width="10" height="22" rx="1" fill="#FF9500" />
      <rect x="34" y="17" width="3" height="4" rx="0.5" fill="#FF9500" />
      <rect x="38" y="17" width="3" height="4" rx="0.5" fill="#FF9500" />
      <rect x="42" y="17" width="3" height="4" rx="0.5" fill="#FF9500" />
      <text x="40" y="31" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#FFD700">V</text>
      {/* Right tower — O */}
      <rect x="46" y="22" width="10" height="18" rx="1" fill="#D97000" />
      <rect x="45" y="20" width="3" height="4" rx="0.5" fill="#D97000" />
      <rect x="49" y="20" width="3" height="4" rx="0.5" fill="#D97000" />
      <rect x="53" y="20" width="3" height="4" rx="0.5" fill="#D97000" />
      <text x="51" y="33" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#FFD700">O</text>
      {/* Flag on middle tower */}
      <line x1="40" y1="14" x2="40" y2="18" stroke="#FFA000" strokeWidth="1" />
      <polygon points="40,14 45,16 40,18" fill="#FFD700" />
    </svg>
  );
}

// i8 — Informational Text Island: Pink/magenta island with fact magnifier
export function K3IslandInfoText({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(232,121,249,0.18)" />
      <path d="M21,50 Q26,63 32,59 Q38,68 44,62 Q51,68 57,59 Q62,63 59,50Z" fill="#2A0A2E" />
      <ellipse cx="40" cy="49" rx="21" ry="9" fill="#3D0D4A" />
      <ellipse cx="40" cy="43" rx="21" ry="8" fill="#5A1570" />
      <ellipse cx="40" cy="40" rx="19" ry="6" fill="#6B2080" />
      {/* Newspaper / info sheet */}
      <rect x="20" y="24" width="38" height="20" rx="2" fill="#FFFDE7" stroke="#E879F9" strokeWidth="1" />
      {/* Headline bar */}
      <rect x="20" y="24" width="38" height="5" rx="2" fill="#E879F9" opacity="0.6" />
      <text x="39" y="28.5" textAnchor="middle" fontSize="4.5" fontWeight="bold" fill="white" fontFamily="monospace">FACTS</text>
      {/* Content lines */}
      <line x1="23" y1="33" x2="55" y2="33" stroke="#9E9E9E" strokeWidth="0.7" />
      <line x1="23" y1="36" x2="53" y2="36" stroke="#9E9E9E" strokeWidth="0.7" />
      <line x1="23" y1="39" x2="54" y2="39" stroke="#9E9E9E" strokeWidth="0.7" />
      {/* Info badge */}
      <circle cx="57" cy="32" r="5" fill="#E879F9" opacity="0.8" />
      <text x="57" y="35" textAnchor="middle" fontSize="8" fontWeight="bold" fill="white">i</text>
      <text x="15" y="22" fontSize="7" fill="rgba(232,121,249,0.6)">✦</text>
      <text x="15" y="42" fontSize="5" fill="rgba(232,121,249,0.5)">✦</text>
    </svg>
  );
}

// i9 — Grand Finals Island: Teal final exam island with trophy and crown
export function K3IslandGrandFinals({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <ellipse cx="40" cy="74" rx="21" ry="5" fill="rgba(78,205,196,0.25)" />
      <path d="M20,50 Q25,60 30,56 Q34,66 40,61 Q46,66 50,56 Q55,60 60,50Z" fill="#0A2A28" />
      <ellipse cx="40" cy="49" rx="22" ry="10" fill="#0D3A38" />
      <ellipse cx="40" cy="43" rx="22" ry="8" fill="#155E5A" />
      <ellipse cx="40" cy="40" rx="20" ry="6" fill="#1A6E6A" />
      {/* Star burst rays */}
      <line x1="40" y1="25" x2="40" y2="20" stroke="#4ECDC4" strokeWidth="1.5" opacity="0.65" />
      <line x1="43.5" y1="25.9" x2="46.5" y2="21.8" stroke="#4ECDC4" strokeWidth="1.5" opacity="0.65" />
      <line x1="46.1" y1="28.5" x2="50.6" y2="25.5" stroke="#4ECDC4" strokeWidth="1.5" opacity="0.65" />
      <line x1="46.7" y1="32" x2="52" y2="32" stroke="#4ECDC4" strokeWidth="1.5" opacity="0.65" />
      <line x1="46.1" y1="35.5" x2="50.6" y2="38.5" stroke="#4ECDC4" strokeWidth="1.5" opacity="0.65" />
      <line x1="40" y1="39" x2="40" y2="44" stroke="#4ECDC4" strokeWidth="1.5" opacity="0.65" />
      <line x1="33.9" y1="35.5" x2="29.4" y2="38.5" stroke="#4ECDC4" strokeWidth="1.5" opacity="0.65" />
      <line x1="33.3" y1="32" x2="28" y2="32" stroke="#4ECDC4" strokeWidth="1.5" opacity="0.65" />
      <line x1="33.9" y1="28.5" x2="29.4" y2="25.5" stroke="#4ECDC4" strokeWidth="1.5" opacity="0.65" />
      <line x1="36.5" y1="25.9" x2="33.5" y2="21.8" stroke="#4ECDC4" strokeWidth="1.5" opacity="0.65" />
      {/* Trophy cup */}
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
      <text x="40" y="42" textAnchor="middle" fontSize="5" fontWeight="bold" fill="#99F6E4" fontFamily="monospace">G3</text>
      <text x="39" y="13" fontSize="7" fill="rgba(78,205,196,0.8)">✦</text>
    </svg>
  );
}

// Export map for all K3 islands
export const K3_ISLAND_SVGS: Record<string, React.FC<{ size?: number }>> = {
  i1: K3IslandPlurals,
  i2: K3IslandPronouns,
  i3: K3IslandStoryStructure,
  i4: K3IslandWriting,
  i5: K3IslandFigurativeLanguage,
  i6: K3IslandReadingComp,
  i7: K3IslandGrammarRules,
  i8: K3IslandInfoText,
  i9: K3IslandGrandFinals,
};
