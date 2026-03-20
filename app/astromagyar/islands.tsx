// SVG Island illustrations for AstroMagyar O1 map
// Each island is a unique floating fantasy landmass matching its Hungarian language theme
// viewBox: "0 0 80 80", renders at 48-60px on mobile

import React from "react";

type IP = { size?: number };

// i1 — Betűk Island: Pink floating island with Hungarian letters
export function IslandBetuk({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Glow beneath */}
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(255,45,120,0.2)" />
      {/* Rocky underside stalactites */}
      <path d="M22,50 Q26,62 30,58 Q34,68 40,63 Q46,68 50,58 Q54,62 58,50Z" fill="#4A1A2E" />
      <path d="M28,52 Q30,60 33,57Z" fill="#3A1020" />
      <path d="M47,52 Q50,60 52,56Z" fill="#3A1020" />
      {/* Island body */}
      <ellipse cx="40" cy="47" rx="20" ry="9" fill="#7B2D4A" />
      {/* Grassy top surface */}
      <ellipse cx="40" cy="40" rx="20" ry="8" fill="#3D8B37" />
      <ellipse cx="40" cy="37" rx="18" ry="6" fill="#4CAF50" />
      {/* Letter Á */}
      <text x="26" y="39" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#FF2D78" fontFamily="monospace">Á</text>
      {/* Letter É */}
      <text x="40" y="35" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#FF6BAE" fontFamily="monospace">É</text>
      {/* Letter Ő */}
      <text x="54" y="39" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#FF2D78" fontFamily="monospace">Ő</text>
      {/* Sound wave arcs */}
      <path d="M18,26 Q22,22 18,18" stroke="rgba(255,45,120,0.5)" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <path d="M16,28 Q21,22 16,16" stroke="rgba(255,45,120,0.3)" strokeWidth="0.8" fill="none" strokeLinecap="round" />
      {/* Small floating sparkles */}
      <text x="57" y="26" fontSize="6" fill="rgba(255,107,174,0.6)">✦</text>
      {/* Mini book */}
      <rect x="35" y="22" width="10" height="8" rx="1" fill="#FF2D78" opacity="0.85" />
      <line x1="40" y1="22" x2="40" y2="30" stroke="#FF9BBF" strokeWidth="0.8" />
      <rect x="36" y="23" width="3" height="1" rx="0.3" fill="rgba(255,255,255,0.5)" />
      <rect x="36" y="25" width="4" height="1" rx="0.3" fill="rgba(255,255,255,0.4)" />
    </svg>
  );
}

// i2 — Hangok Island: Blue island with sound waves
export function IslandHangok({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Glow beneath */}
      <ellipse cx="40" cy="74" rx="19" ry="5" fill="rgba(0,212,255,0.18)" />
      {/* Rocky underside */}
      <path d="M21,50 Q27,63 32,59 Q38,67 44,61 Q50,67 55,59 Q60,63 59,50Z" fill="#0A2A35" />
      <path d="M26,53 Q28,61 31,58Z" fill="#062028" />
      <path d="M49,53 Q52,61 54,57Z" fill="#062028" />
      {/* Island body */}
      <ellipse cx="40" cy="48" rx="20" ry="8" fill="#0A3340" />
      {/* Top surface */}
      <ellipse cx="40" cy="41" rx="20" ry="7" fill="#1A5060" />
      <ellipse cx="40" cy="38" rx="18" ry="5" fill="#1E6070" />
      {/* Sound wave arcs */}
      <path d="M20,35 Q28,28 36,35" stroke="#00D4FF" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M24,40 Q32,32 40,40" stroke="#00B8D9" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <path d="M44,35 Q52,28 60,35" stroke="#00D4FF" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Sparkles */}
      <text x="16" y="30" fontSize="7" fill="rgba(0,212,255,0.65)">✦</text>
      <text x="57" y="44" fontSize="6" fill="rgba(0,212,255,0.5)">✦</text>
    </svg>
  );
}

// i3 — Szótagok Island: Green island with syllable blocks
export function IslandSzotagok({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Glow beneath */}
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(0,255,136,0.15)" />
      {/* Rocky underside */}
      <path d="M20,50 Q26,64 32,60 Q38,68 44,62 Q50,68 55,60 Q61,64 60,50Z" fill="#1A3A1A" />
      <path d="M25,53 Q27,62 30,59Z" fill="#102810" />
      <path d="M50,53 Q53,62 55,58Z" fill="#102810" />
      {/* Island body */}
      <ellipse cx="40" cy="48" rx="21" ry="8" fill="#235A23" />
      {/* Grassy top */}
      <ellipse cx="40" cy="42" rx="21" ry="8" fill="#2E7D32" />
      <ellipse cx="40" cy="39" rx="19" ry="6" fill="#388E3C" />
      {/* Syllable blocks */}
      <rect x="22" y="28" width="7" height="6" rx="1" fill="#F5F5DC" stroke="#388E3C" strokeWidth="0.8" />
      <text x="25.5" y="32" textAnchor="middle" fontSize="4" fontWeight="bold" fill="#388E3C">sza</text>
      <rect x="36" y="26" width="7" height="6" rx="1" fill="#F5F5DC" stroke="#388E3C" strokeWidth="0.8" />
      <text x="39.5" y="30" textAnchor="middle" fontSize="4" fontWeight="bold" fill="#388E3C">va</text>
      <rect x="50" y="28" width="7" height="6" rx="1" fill="#F5F5DC" stroke="#388E3C" strokeWidth="0.8" />
      <text x="53.5" y="32" textAnchor="middle" fontSize="4" fontWeight="bold" fill="#388E3C">gok</text>
    </svg>
  );
}

// i4 — Szavak Island: Golden island with word pieces
export function IslandSzavak({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Glow beneath */}
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(245,158,11,0.15)" />
      {/* Rocky underside */}
      <path d="M20,50 Q26,64 32,60 Q38,68 44,62 Q50,68 55,60 Q61,64 60,50Z" fill="#3D2817" />
      <path d="M25,53 Q27,62 30,59Z" fill="#2A1810" />
      <path d="M50,53 Q53,62 55,58Z" fill="#2A1810" />
      {/* Island body */}
      <ellipse cx="40" cy="48" rx="21" ry="8" fill="#8B6F47" />
      {/* Top surface */}
      <ellipse cx="40" cy="42" rx="21" ry="8" fill="#B8860B" />
      <ellipse cx="40" cy="39" rx="19" ry="6" fill="#DAA520" />
      {/* Word cards */}
      <rect x="20" y="28" width="12" height="7" rx="1" fill="#FFF8DC" stroke="#B8860B" strokeWidth="0.8" />
      <text x="26" y="33" textAnchor="middle" fontSize="4.5" fontWeight="bold" fill="#B8860B" fontFamily="monospace">macska</text>
      <rect x="45" y="27" width="12" height="7" rx="1" fill="#FFF8DC" stroke="#B8860B" strokeWidth="0.8" />
      <text x="51" y="32" textAnchor="middle" fontSize="4.5" fontWeight="bold" fill="#B8860B" fontFamily="monospace">kutya</text>
      {/* Sparkles */}
      <text x="15" y="25" fontSize="6" fill="rgba(245,158,11,0.6)">✨</text>
    </svg>
  );
}

// i5 — Ellentétek Island: Purple island with opposite symbols
export function IslandEllentenek({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Glow beneath */}
      <ellipse cx="40" cy="74" rx="19" ry="5" fill="rgba(180,77,255,0.15)" />
      {/* Rocky underside */}
      <path d="M21,50 Q27,63 32,59 Q38,67 44,61 Q50,67 55,59 Q60,63 59,50Z" fill="#3A1A5E" />
      <path d="M26,53 Q28,61 31,58Z" fill="#241035" />
      <path d="M49,53 Q52,61 54,57Z" fill="#241035" />
      {/* Island body */}
      <ellipse cx="40" cy="48" rx="20" ry="8" fill="#5A3480" />
      {/* Top surface */}
      <ellipse cx="40" cy="41" rx="20" ry="7" fill="#7B5BA8" />
      <ellipse cx="40" cy="38" rx="18" ry="5" fill="#9370DB" />
      {/* Hot symbol */}
      <text x="20" y="35" textAnchor="middle" fontSize="14" fill="rgba(255,100,0,0.7)">🔥</text>
      <text x="20" y="42" textAnchor="middle" fontSize="5" fontWeight="bold" fill="rgba(255,100,0,0.8)" fontFamily="monospace">meleg</text>
      {/* Cold symbol */}
      <text x="60" y="35" textAnchor="middle" fontSize="14" fill="rgba(100,200,255,0.7)">❄️</text>
      <text x="60" y="42" textAnchor="middle" fontSize="5" fontWeight="bold" fill="rgba(100,200,255,0.8)" fontFamily="monospace">hideg</text>
    </svg>
  );
}

// i6 — Mondatok Island: Turquoise island with sentence flow
export function IslandMondatok({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Glow beneath */}
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(78,205,196,0.15)" />
      {/* Rocky underside */}
      <path d="M20,50 Q26,64 32,60 Q38,68 44,62 Q50,68 55,60 Q61,64 60,50Z" fill="#1A3A3A" />
      <path d="M25,53 Q27,62 30,59Z" fill="#0F2828" />
      <path d="M50,53 Q53,62 55,58Z" fill="#0F2828" />
      {/* Island body */}
      <ellipse cx="40" cy="48" rx="21" ry="8" fill="#2A5A5A" />
      {/* Top surface */}
      <ellipse cx="40" cy="42" rx="21" ry="8" fill="#3A7A7A" />
      <ellipse cx="40" cy="39" rx="19" ry="6" fill="#4E9B95" />
      {/* Sentence flow lines */}
      <path d="M16,30 L64,30" stroke="#4ECDC4" strokeWidth="1.2" opacity="0.6" strokeLinecap="round" />
      <circle cx="18" cy="30" r="1.5" fill="#4ECDC4" opacity="0.8" />
      <circle cx="26" cy="30" r="1.2" fill="#4ECDC4" opacity="0.7" />
      <circle cx="34" cy="30" r="1.2" fill="#4ECDC4" opacity="0.7" />
      <circle cx="42" cy="30" r="1.2" fill="#4ECDC4" opacity="0.7" />
      <circle cx="50" cy="30" r="1.2" fill="#4ECDC4" opacity="0.7" />
      <circle cx="58" cy="30" r="1.2" fill="#4ECDC4" opacity="0.7" />
      <circle cx="62" cy="30" r="1.5" fill="#4ECDC4" opacity="0.8" />
    </svg>
  );
}

// i7 — Szókincsen Island: Coral island with vocabulary themes
export function IslandSzokincs({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Glow beneath */}
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(255,107,107,0.15)" />
      {/* Rocky underside */}
      <path d="M20,50 Q26,64 32,60 Q38,68 44,62 Q50,68 55,60 Q61,64 60,50Z" fill="#3A1A1A" />
      <path d="M25,53 Q27,62 30,59Z" fill="#2A1010" />
      <path d="M50,53 Q53,62 55,58Z" fill="#2A1010" />
      {/* Island body */}
      <ellipse cx="40" cy="48" rx="21" ry="8" fill="#6B3A3A" />
      {/* Top surface */}
      <ellipse cx="40" cy="42" rx="21" ry="8" fill="#8B4A4A" />
      <ellipse cx="40" cy="39" rx="19" ry="6" fill="#A85A5A" />
      {/* Vocabulary word icons */}
      <text x="22" y="33" textAnchor="middle" fontSize="8" fill="rgba(255,200,100,0.8)">🏠</text>
      <text x="40" y="33" textAnchor="middle" fontSize="8" fill="rgba(255,200,100,0.8)">🍎</text>
      <text x="58" y="33" textAnchor="middle" fontSize="8" fill="rgba(255,200,100,0.8)">📚</text>
    </svg>
  );
}

// i8 — Nyelvtan Island: Indigo island with grammar symbols
export function IslandNyelvtan({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Glow beneath */}
      <ellipse cx="40" cy="74" rx="19" ry="5" fill="rgba(99,102,241,0.18)" />
      {/* Rocky underside */}
      <path d="M21,50 Q27,63 32,59 Q38,67 44,61 Q50,67 55,59 Q60,63 59,50Z" fill="#1A1A4A" />
      <path d="M26,53 Q28,61 31,58Z" fill="#101035" />
      <path d="M49,53 Q52,61 54,57Z" fill="#101035" />
      {/* Island body */}
      <ellipse cx="40" cy="48" rx="20" ry="8" fill="#2A2A5A" />
      {/* Top surface */}
      <ellipse cx="40" cy="41" rx="20" ry="7" fill="#3A3A7A" />
      <ellipse cx="40" cy="38" rx="18" ry="5" fill="#4A4A9A" />
      {/* Grammar symbols */}
      <text x="16" y="34" textAnchor="middle" fontSize="10" fill="#818CF8">N</text>
      <text x="40" y="34" textAnchor="middle" fontSize="10" fill="#818CF8">V</text>
      <text x="64" y="34" textAnchor="middle" fontSize="10" fill="#818CF8">M</text>
      {/* Sparkles */}
      <circle cx="20" cy="22" r="1" fill="#818CF8" opacity="0.7" />
      <circle cx="60" cy="24" r="0.8" fill="#818CF8" opacity="0.6" />
    </svg>
  );
}

// i9 — Olvasás Island: Orange island with open book
export function IslandOlvasas({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Glow beneath */}
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(255,152,0,0.15)" />
      {/* Rocky underside */}
      <path d="M20,50 Q26,64 32,60 Q38,68 44,62 Q50,68 55,60 Q61,64 60,50Z" fill="#4A2A1A" />
      <path d="M25,53 Q27,62 30,59Z" fill="#3A1A10" />
      <path d="M50,53 Q53,62 55,58Z" fill="#3A1A10" />
      {/* Island body */}
      <ellipse cx="40" cy="48" rx="21" ry="8" fill="#8B5A3A" />
      {/* Top surface */}
      <ellipse cx="40" cy="42" rx="21" ry="8" fill="#B8860B" />
      <ellipse cx="40" cy="39" rx="19" ry="6" fill="#FF9500" />
      {/* Open book silhouette */}
      <rect x="18" y="26" width="8" height="10" rx="0.5" fill="#2A1A0A" opacity="0.6" />
      <rect x="32" y="23" width="10" height="13" rx="0.5" fill="#2A1A0A" opacity="0.7" />
      <rect x="54" y="26" width="8" height="10" rx="0.5" fill="#2A1A0A" opacity="0.6" />
      {/* Book spine */}
      <rect x="39" y="22" width="2" height="8" fill="#4A2A1A" opacity="0.9" />
      {/* Reading light beams */}
      <line x1="30" y1="20" x2="30" y2="14" stroke="#FFD700" strokeWidth="0.8" opacity="0.6" />
      <line x1="50" y1="20" x2="50" y2="14" stroke="#FFD700" strokeWidth="0.8" opacity="0.6" />
    </svg>
  );
}

// ── Exports ───────────────────────────────────────────────────────────────────
export const O1_ISLAND_SVGS: Record<string, React.ComponentType<{ size?: number }>> = {
  i1: IslandBetuk,
  i2: IslandHangok,
  i3: IslandSzotagok,
  i4: IslandSzavak,
  i5: IslandEllentenek,
  i6: IslandMondatok,
  i7: IslandSzokincs,
  i8: IslandNyelvtan,
  i9: IslandOlvasas,
};
