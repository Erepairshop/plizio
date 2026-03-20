// SVG Island illustrations for AstroEnglish K5 map
// Each island is a unique floating fantasy landmass matching its English ELA theme
// viewBox: "0 0 80 80", renders at 48-60px on mobile

import React from "react";

type IP = { size?: number };

// Shared island base helper
function IslandBase({ color, glowRgb }: { color: string; glowRgb: string }) {
  return (
    <>
      <ellipse cx="40" cy="74" rx="21" ry="5" fill={`rgba(${glowRgb},0.2)`} />
      <path d="M20,50 Q26,63 32,58 Q38,67 44,62 Q51,67 56,58 Q62,63 59,50Z" fill="#111827" />
      <ellipse cx="40" cy="48" rx="21" ry="9" fill="#1F2937" />
      <ellipse cx="40" cy="43" rx="21" ry="8" fill={color} opacity="0.7" />
      <ellipse cx="40" cy="40" rx="19" ry="6" fill={color} />
    </>
  );
}

// i1 — Literary Elements Island
export function K5IslandLiteraryElements({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <IslandBase color="#6366F1" glowRgb="99,102,241" />
      {/* Book with elements list */}
      <rect x="22" y="20" width="36" height="22" rx="2" fill="#EEF2FF" stroke="#818CF8" strokeWidth="1" />
      <line x1="22" y1="20" x2="22" y2="42" stroke="#6366F1" strokeWidth="2" />
      {/* Element labels */}
      <text x="27" y="27" fontSize="5.5" fill="#3730A3" fontFamily="monospace">• Plot</text>
      <text x="27" y="32" fontSize="5.5" fill="#3730A3" fontFamily="monospace">• Character</text>
      <text x="27" y="37" fontSize="5.5" fill="#3730A3" fontFamily="monospace">• Setting</text>
      <text x="14" y="27" fontSize="7" fill="rgba(99,102,241,0.65)">✦</text>
      <text x="60" y="22" fontSize="6" fill="rgba(165,180,252,0.6)">✦</text>
    </svg>
  );
}

// i2 — Theme & Main Idea Island
export function K5IslandTheme({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <IslandBase color="#B44DFF" glowRgb="180,77,255" />
      {/* Lightbulb idea shape */}
      <circle cx="40" cy="26" r="10" fill="rgba(180,77,255,0.25)" stroke="#C084FC" strokeWidth="1.2" />
      <circle cx="40" cy="26" r="6" fill="#EDE9FE" />
      <text x="40" y="29.5" textAnchor="middle" fontSize="9" fill="#6D28D9">💡</text>
      {/* Theme label */}
      <rect x="28" y="38" width="24" height="8" rx="2" fill="#EDE9FE" stroke="#B44DFF" strokeWidth="1" />
      <text x="40" y="44" textAnchor="middle" fontSize="5.5" fontWeight="bold" fill="#5B21B6" fontFamily="monospace">Theme</text>
      <text x="14" y="24" fontSize="7" fill="rgba(180,77,255,0.65)">✦</text>
    </svg>
  );
}

// i3 — Point of View Island
export function K5IslandPointOfView({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <IslandBase color="#10B981" glowRgb="16,185,129" />
      {/* Eye shapes for 1st/3rd person */}
      <ellipse cx="30" cy="28" rx="9" ry="6" fill="rgba(16,185,129,0.2)" stroke="#6EE7B7" strokeWidth="1.2" />
      <circle cx="30" cy="28" r="3" fill="#065F46" />
      <circle cx="31" cy="27" r="1" fill="white" opacity="0.6" />
      <ellipse cx="52" cy="28" rx="9" ry="6" fill="rgba(16,185,129,0.2)" stroke="#6EE7B7" strokeWidth="1.2" />
      <circle cx="52" cy="28" r="3" fill="#065F46" />
      <circle cx="53" cy="27" r="1" fill="white" opacity="0.6" />
      {/* Labels */}
      <text x="30" y="38" textAnchor="middle" fontSize="5" fill="#A7F3D0" fontFamily="monospace">1st</text>
      <text x="52" y="38" textAnchor="middle" fontSize="5" fill="#A7F3D0" fontFamily="monospace">3rd</text>
      <text x="15" y="24" fontSize="7" fill="rgba(16,185,129,0.65)">✦</text>
    </svg>
  );
}

// i4 — Figurative Language Island
export function K5IslandFigLang({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <IslandBase color="#F59E0B" glowRgb="245,158,11" />
      {/* Metaphor / simile banners */}
      <rect x="18" y="23" width="20" height="8" rx="2" fill="#FDE68A" stroke="#F59E0B" strokeWidth="1" />
      <text x="28" y="29.5" textAnchor="middle" fontSize="5.5" fontWeight="bold" fill="#92400E" fontFamily="monospace">Simile</text>
      <rect x="42" y="20" width="22" height="8" rx="2" fill="#FEF3C7" stroke="#FBBF24" strokeWidth="1" />
      <text x="53" y="26.5" textAnchor="middle" fontSize="5.5" fontWeight="bold" fill="#92400E" fontFamily="monospace">Metaphor</text>
      <rect x="22" y="34" width="20" height="8" rx="2" fill="#FFFBEB" stroke="#D97706" strokeWidth="1" />
      <text x="32" y="40.5" textAnchor="middle" fontSize="5" fontWeight="bold" fill="#78350F" fontFamily="monospace">Hyperbole</text>
      {/* Sparkle */}
      <text x="14" y="27" fontSize="7" fill="rgba(245,158,11,0.65)">✦</text>
    </svg>
  );
}

// i5 — Informational Text Island
export function K5IslandInfoText({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <IslandBase color="#3B82F6" glowRgb="59,130,246" />
      {/* Text structure diagram */}
      <rect x="24" y="20" width="32" height="23" rx="2" fill="#EFF6FF" stroke="#60A5FA" strokeWidth="1" />
      {/* Header */}
      <rect x="24" y="20" width="32" height="5" rx="2" fill="#3B82F6" opacity="0.5" />
      <text x="40" y="24" textAnchor="middle" fontSize="4.5" fontWeight="bold" fill="white" fontFamily="monospace">NONFICTION</text>
      {/* Sections */}
      <text x="27" y="31" fontSize="5" fill="#1E3A8A" fontFamily="monospace">• Cause/Effect</text>
      <text x="27" y="36" fontSize="5" fill="#1E3A8A" fontFamily="monospace">• Compare</text>
      <text x="27" y="40" fontSize="5" fill="#1E3A8A" fontFamily="monospace">• Sequence</text>
      <text x="14" y="27" fontSize="7" fill="rgba(59,130,246,0.65)">✦</text>
    </svg>
  );
}

// i6 — Research Writing Island
export function K5IslandResearch({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <IslandBase color="#EF4444" glowRgb="239,68,68" />
      {/* Magnifying glass over book */}
      <rect x="22" y="26" width="28" height="18" rx="2" fill="#FEF2F2" stroke="#FCA5A5" strokeWidth="1" />
      <line x1="22" y1="26" x2="22" y2="44" stroke="#EF4444" strokeWidth="1.5" />
      <line x1="30" y1="30" x2="46" y2="30" stroke="#FECACA" strokeWidth="0.7" />
      <line x1="30" y1="33" x2="47" y2="33" stroke="#FECACA" strokeWidth="0.7" />
      <line x1="30" y1="36" x2="45" y2="36" stroke="#FECACA" strokeWidth="0.7" />
      {/* Magnifier */}
      <circle cx="52" cy="28" r="7" fill="none" stroke="#EF4444" strokeWidth="1.5" />
      <circle cx="52" cy="28" r="5" fill="rgba(239,68,68,0.1)" />
      <line x1="57" y1="33" x2="61" y2="37" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" />
      <text x="15" y="25" fontSize="7" fill="rgba(239,68,68,0.65)">✦</text>
    </svg>
  );
}

// i7 — Grammar Advanced Island
export function K5IslandGrammarAdv({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <IslandBase color="#8B5CF6" glowRgb="139,92,246" />
      {/* Grammar tree / sentence diagram */}
      <circle cx="40" cy="22" r="7" fill="rgba(139,92,246,0.25)" stroke="#A78BFA" strokeWidth="1.2" />
      <text x="40" y="25" textAnchor="middle" fontSize="5.5" fontWeight="bold" fill="#EDE9FE" fontFamily="monospace">Sent.</text>
      <line x1="34" y1="27" x2="28" y2="34" stroke="#A78BFA" strokeWidth="1" />
      <line x1="46" y1="27" x2="52" y2="34" stroke="#A78BFA" strokeWidth="1" />
      <circle cx="28" cy="37" r="5.5" fill="rgba(139,92,246,0.2)" stroke="#A78BFA" strokeWidth="1" />
      <text x="28" y="39.5" textAnchor="middle" fontSize="4.5" fontWeight="bold" fill="#EDE9FE" fontFamily="monospace">Subj.</text>
      <circle cx="52" cy="37" r="5.5" fill="rgba(139,92,246,0.2)" stroke="#A78BFA" strokeWidth="1" />
      <text x="52" y="39.5" textAnchor="middle" fontSize="4.5" fontWeight="bold" fill="#EDE9FE" fontFamily="monospace">Pred.</text>
      <text x="14" y="26" fontSize="7" fill="rgba(139,92,246,0.65)">✦</text>
    </svg>
  );
}

// i8 — Oral Presentation Island
export function K5IslandOralPresentation({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <IslandBase color="#EC4899" glowRgb="236,72,153" />
      {/* Podium / microphone */}
      <rect x="34" y="24" width="12" height="18" rx="2" fill="#FCE7F3" stroke="#EC4899" strokeWidth="1" />
      <rect x="30" y="40" width="20" height="3" rx="1" fill="#F9A8D4" />
      <line x1="40" y1="20" x2="40" y2="24" stroke="#EC4899" strokeWidth="2" strokeLinecap="round" />
      <ellipse cx="40" cy="19" rx="4" ry="5" fill="rgba(236,72,153,0.3)" stroke="#F472B6" strokeWidth="1.2" />
      {/* Sound waves */}
      <path d="M19,26 Q22,22 19,18" stroke="rgba(236,72,153,0.5)" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <path d="M16,28 Q20,22 16,16" stroke="rgba(236,72,153,0.3)" strokeWidth="0.8" fill="none" strokeLinecap="round" />
      <path d="M61,26 Q58,22 61,18" stroke="rgba(236,72,153,0.5)" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <path d="M64,28 Q60,22 64,16" stroke="rgba(236,72,153,0.3)" strokeWidth="0.8" fill="none" strokeLinecap="round" />
      <text x="15" y="38" fontSize="7" fill="rgba(236,72,153,0.65)">✦</text>
    </svg>
  );
}

// i9 — Grand Finals Island
export function K5IslandGrandFinals({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <ellipse cx="40" cy="74" rx="21" ry="5" fill="rgba(78,205,196,0.25)" />
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
      <text x="40" y="42" textAnchor="middle" fontSize="5" fontWeight="bold" fill="#99F6E4" fontFamily="monospace">G5</text>
      <text x="39" y="13" fontSize="7" fill="rgba(78,205,196,0.8)">✦</text>
    </svg>
  );
}

// Export map for all K5 islands
export const K5_ISLAND_SVGS: Record<string, React.FC<{ size?: number }>> = {
  i1: K5IslandLiteraryElements,
  i2: K5IslandTheme,
  i3: K5IslandPointOfView,
  i4: K5IslandFigLang,
  i5: K5IslandInfoText,
  i6: K5IslandResearch,
  i7: K5IslandGrammarAdv,
  i8: K5IslandOralPresentation,
  i9: K5IslandGrandFinals,
};
