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

// ─── Grade 5 Islands (O5) ──────────────────────────────────────────────────────

// i1 — Hangtan Island: Sound analysis
export function IslandHangtan({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <ellipse cx="40" cy="74" rx="21" ry="5" fill="rgba(255,45,120,0.2)" />
      <path d="M20,52 Q25,65 30,60 Q35,70 40,65 Q45,70 50,60 Q55,65 60,52Z" fill="#4A2E5E" />
      <ellipse cx="40" cy="48" rx="21" ry="10" fill="#6B2E8C" />
      <ellipse cx="40" cy="38" rx="19" ry="8" fill="#8B4FA3" />
      <circle cx="26" cy="32" r="3" fill="rgba(255,45,120,0.7)" />
      <circle cx="54" cy="32" r="3" fill="rgba(255,45,120,0.7)" />
      <path d="M16,35 Q20,30 24,35" stroke="rgba(255,107,174,0.6)" strokeWidth="1" fill="none" />
      <path d="M56,35 Q60,30 64,35" stroke="rgba(255,107,174,0.6)" strokeWidth="1" fill="none" />
      <text x="40" y="42" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.8)" fontFamily="monospace">IPA</text>
    </svg>
  );
}

// i2 — Szóelemzés Island: Word analysis
export function IslandSzoelemzes({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(0,212,255,0.18)" />
      <path d="M22,52 Q26,63 31,58 Q35,68 40,63 Q45,68 49,58 Q54,63 58,52Z" fill="#1A3A4A" />
      <ellipse cx="40" cy="48" rx="20" ry="9" fill="#1E5A7A" />
      <ellipse cx="40" cy="39" rx="18" ry="7" fill="#2A7AAF" />
      <rect x="25" y="32" width="6" height="6" rx="1" fill="#00D4FF" opacity="0.7" />
      <rect x="35" y="32" width="6" height="6" rx="1" fill="#00D4FF" opacity="0.8" />
      <rect x="45" y="32" width="6" height="6" rx="1" fill="#00D4FF" opacity="0.7" />
      <text x="28" y="38" fontSize="3" fill="white" fontFamily="monospace">tő</text>
      <text x="38" y="38" fontSize="3" fill="white" fontFamily="monospace">képz</text>
      <text x="48" y="38" fontSize="3" fill="white" fontFamily="monospace">rag</text>
    </svg>
  );
}

// i3 — Szófajok Island: Parts of speech
export function IslandSzofajok({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(0,255,136,0.2)" />
      <path d="M20,50 Q25,62 30,57 Q35,67 40,62 Q45,67 50,57 Q55,62 60,50Z" fill="#1A4A2E" />
      <ellipse cx="40" cy="46" rx="20" ry="9" fill="#2A6A4E" />
      <ellipse cx="40" cy="37" rx="18" ry="7" fill="#3A9A5E" />
      <circle cx="28" cy="31" r="4" fill="#00FF88" opacity="0.6" />
      <circle cx="40" cy="29" r="4" fill="#00FF88" opacity="0.8" />
      <circle cx="52" cy="31" r="4" fill="#00FF88" opacity="0.6" />
      <text x="40" y="33" textAnchor="middle" fontSize="5" fill="#000" fontWeight="bold">ige</text>
    </svg>
  );
}

// i4 — Mondatrészek Island: Sentence parts
export function IslandMondatresz({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <ellipse cx="40" cy="74" rx="21" ry="5" fill="rgba(255,215,0,0.2)" />
      <path d="M20,52 Q25,64 30,59 Q35,69 40,64 Q45,69 50,59 Q55,64 60,52Z" fill="#5A4A1A" />
      <ellipse cx="40" cy="48" rx="21" ry="10" fill="#8A7A3A" />
      <ellipse cx="40" cy="38" rx="19" ry="8" fill="#BAAA5A" />
      <line x1="20" y1="36" x2="60" y2="36" stroke="#FFD700" strokeWidth="1.2" />
      <circle cx="25" cy="36" r="2" fill="#FFD700" />
      <circle cx="40" cy="36" r="2" fill="#FFD700" />
      <circle cx="55" cy="36" r="2" fill="#FFD700" />
      <text x="40" y="45" textAnchor="middle" fontSize="4" fill="rgba(0,0,0,0.5)" fontFamily="monospace">alany-állítmány</text>
    </svg>
  );
}

// i5 — Szövegtan Island: Text science
export function IslandSzovegtan({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(180,77,255,0.2)" />
      <path d="M22,50 Q26,62 31,57 Q35,67 40,62 Q45,67 49,57 Q54,62 58,50Z" fill="#4A2A6E" />
      <ellipse cx="40" cy="46" rx="20" ry="9" fill="#6B3A9E" />
      <ellipse cx="40" cy="37" rx="18" ry="7" fill="#8B5ACE" />
      <line x1="22" y1="33" x2="58" y2="33" stroke="#B44DFF" strokeWidth="0.8" opacity="0.6" />
      <line x1="20" y1="38" x2="60" y2="38" stroke="#B44DFF" strokeWidth="0.8" opacity="0.8" />
      <line x1="24" y1="43" x2="56" y2="43" stroke="#B44DFF" strokeWidth="0.8" opacity="0.6" />
    </svg>
  );
}

// i6 — Stílustan Island: Style
export function IslandStilustan({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(16,185,129,0.2)" />
      <path d="M20,50 Q25,62 30,57 Q35,67 40,62 Q45,67 50,57 Q55,62 60,50Z" fill="#1A4A3A" />
      <ellipse cx="40" cy="46" rx="20" ry="9" fill="#2A7A5A" />
      <ellipse cx="40" cy="37" rx="18" ry="7" fill="#3AAA7A" />
      <circle cx="28" cy="32" r="3" fill="#FF6B6B" opacity="0.7" />
      <circle cx="40" cy="29" r="3" fill="#4ECDC4" opacity="0.7" />
      <circle cx="52" cy="32" r="3" fill="#95E1D3" opacity="0.7" />
      <text x="40" y="48" textAnchor="middle" fontSize="4" fill="rgba(0,0,0,0.5)">stílus</text>
    </svg>
  );
}

// i7 — Helyesírás Island: Spelling (O5)
export function IslandHelyesirasO5({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <ellipse cx="40" cy="74" rx="21" ry="5" fill="rgba(255,149,0,0.2)" />
      <path d="M20,52 Q25,64 30,59 Q35,69 40,64 Q45,69 50,59 Q55,64 60,52Z" fill="#6A4A1A" />
      <ellipse cx="40" cy="48" rx="21" ry="10" fill="#AA7A2A" />
      <ellipse cx="40" cy="38" rx="19" ry="8" fill="#DAAA4A" />
      <path d="M25,35 L28,38 L35,28" stroke="#FF9500" strokeWidth="1.5" fill="none" />
      <path d="M45,35 L48,38 L55,28" stroke="#FF9500" strokeWidth="1.5" fill="none" />
      <text x="40" y="46" textAnchor="middle" fontSize="4" fill="rgba(0,0,0,0.5)" fontFamily="monospace">helyesírás</text>
    </svg>
  );
}

// i8 — Irodalom Island: Literature
export function IslandIrodalom({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(232,121,249,0.2)" />
      <path d="M22,50 Q26,62 31,57 Q35,67 40,62 Q45,67 49,57 Q54,62 58,50Z" fill="#4A2A6E" />
      <ellipse cx="40" cy="46" rx="20" ry="9" fill="#7A4A9E" />
      <ellipse cx="40" cy="37" rx="18" ry="7" fill="#AA6ACE" />
      <rect x="30" y="30" width="8" height="10" rx="1" fill="#E879F9" opacity="0.7" />
      <rect x="41" y="28" width="8" height="10" rx="1" fill="#E879F9" opacity="0.8" />
      <rect x="52" y="30" width="8" height="10" rx="1" fill="#E879F9" opacity="0.7" />
      <line x1="34" y1="32" x2="34" y2="38" stroke="rgba(0,0,0,0.3)" strokeWidth="0.5" />
      <line x1="45" y1="30" x2="45" y2="36" stroke="rgba(0,0,0,0.3)" strokeWidth="0.5" />
      <line x1="56" y1="32" x2="56" y2="38" stroke="rgba(0,0,0,0.3)" strokeWidth="0.5" />
    </svg>
  );
}

// i9 — Nagy Próba Island: Grand test (O5)
export function IslandVegsoO5({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(78,205,196,0.2)" />
      <path d="M20,50 Q25,62 30,57 Q35,67 40,62 Q45,67 50,57 Q55,62 60,50Z" fill="#1A4A4A" />
      <ellipse cx="40" cy="46" rx="20" ry="9" fill="#2A7A7A" />
      <ellipse cx="40" cy="37" rx="18" ry="7" fill="#3AAAAA" />
      <path d="M40,20 L43,28 L52,28 L45,34 L48,42 L40,36 L32,42 L35,34 L28,28 L37,28 Z" fill="#4ECDC4" />
      <text x="40" y="50" textAnchor="middle" fontSize="4" fill="rgba(0,0,0,0.5)" fontWeight="bold">Végső próba</text>
    </svg>
  );
}

// ─── Grade 8 Islands (O8) ──────────────────────────────────────────────────────

// i1 — Ómagyar Island: Scroll-shaped ancient island
export function IslandOmagyar({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <ellipse cx="40" cy="74" rx="18" ry="5" fill="rgba(255,45,120,0.2)" />
      <ellipse cx="40" cy="47" rx="19" ry="9" fill="#5A3A4A" />
      <ellipse cx="40" cy="40" rx="19" ry="7" fill="#8B5A6B" />
      <rect x="28" y="35" width="24" height="8" rx="2" fill="#F4E8D8" opacity="0.9" />
      <line x1="32" y1="38" x2="48" y2="38" stroke="#3D2D3D" strokeWidth="0.8" opacity="0.6" />
      <line x1="32" y1="40" x2="48" y2="40" stroke="#3D2D3D" strokeWidth="0.8" opacity="0.4" />
      <circle cx="60" cy="32" r="4" fill="rgba(255,45,120,0.3)" />
      <text x="40" y="25" textAnchor="middle" fontSize="8" fill="rgba(255,45,120,0.7)" fontWeight="bold">📜</text>
    </svg>
  );
}

// i2 — Stíluseszközök Island: Artistic rainbow island
export function IslandStiluseszközok({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <ellipse cx="40" cy="74" rx="19" ry="5" fill="rgba(0,212,255,0.18)" />
      <ellipse cx="40" cy="47" rx="20" ry="9" fill="#1A4A5A" />
      <ellipse cx="40" cy="40" rx="20" ry="7" fill="#2A7A9A" />
      <path d="M20,40 Q20,30 30,28 Q40,26 50,28 Q60,30 60,40" stroke="#FF2D78" strokeWidth="1.5" fill="none" />
      <path d="M22,42 Q22,32 32,30 Q42,28 52,30 Q58,32 58,42" stroke="#FFD700" strokeWidth="1.2" fill="none" opacity="0.8" />
      <text x="40" y="20" textAnchor="middle" fontSize="7" fill="rgba(0,212,255,0.6)" fontWeight="bold">🎨</text>
    </svg>
  );
}

// i3 — Szövegelemzés Island: Magnifying glass island
export function IslandSzovegelemzes({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <ellipse cx="40" cy="74" rx="19" ry="5" fill="rgba(0,255,136,0.2)" />
      <ellipse cx="40" cy="47" rx="20" ry="9" fill="#1A4A2A" />
      <ellipse cx="40" cy="40" rx="20" ry="7" fill="#2A7A4A" />
      <circle cx="35" cy="35" r="10" fill="none" stroke="rgba(0,255,136,0.6)" strokeWidth="1.5" />
      <line x1="43" y1="43" x2="52" y2="52" stroke="rgba(0,255,136,0.5)" strokeWidth="1" />
      <circle cx="35" cy="35" r="5" fill="none" stroke="rgba(0,255,136,0.4)" strokeWidth="1" opacity="0.7" />
      <text x="40" y="23" textAnchor="middle" fontSize="7" fill="rgba(0,255,136,0.7)" fontWeight="bold">🔍</text>
    </svg>
  );
}

// i4 — Helyesírás Island: Pen and book island (O8)
export function IslandHelyesirasO8({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <ellipse cx="40" cy="74" rx="19" ry="5" fill="rgba(255,215,0,0.2)" />
      <ellipse cx="40" cy="47" rx="20" ry="9" fill="#4A4A1A" />
      <ellipse cx="40" cy="40" rx="20" ry="7" fill="#7A7A2A" />
      <rect x="32" y="33" width="16" height="12" rx="1" fill="#FFE680" />
      <line x1="34" y1="37" x2="46" y2="37" stroke="#3D3D0A" strokeWidth="0.8" />
      <line x1="34" y1="40" x2="46" y2="40" stroke="#3D3D0A" strokeWidth="0.8" opacity="0.6" />
      <path d="M48,31 L52,35 L50,37 Z" fill="rgba(255,215,0,0.8)" />
      <text x="40" y="25" textAnchor="middle" fontSize="8" fill="rgba(255,215,0,0.7)" fontWeight="bold">✍️</text>
    </svg>
  );
}

// i5 — Norma Island: Column-structured island
export function IslandNorma({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <ellipse cx="40" cy="74" rx="19" ry="5" fill="rgba(180,77,255,0.2)" />
      <ellipse cx="40" cy="47" rx="20" ry="9" fill="#3A1A4A" />
      <ellipse cx="40" cy="40" rx="20" ry="7" fill="#5A3A7A" />
      <rect x="28" y="30" width="3" height="14" rx="1" fill="rgba(180,77,255,0.7)" />
      <rect x="38" y="28" width="3" height="16" rx="1" fill="rgba(180,77,255,0.8)" />
      <rect x="48" y="30" width="3" height="14" rx="1" fill="rgba(180,77,255,0.7)" />
      <text x="40" y="23" textAnchor="middle" fontSize="7" fill="rgba(180,77,255,0.7)" fontWeight="bold">📖</text>
    </svg>
  );
}

// i6 — Tudományos szöveg Island: Lab/microscope island
export function IslandTudomanyos({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <ellipse cx="40" cy="74" rx="19" ry="5" fill="rgba(16,185,129,0.2)" />
      <ellipse cx="40" cy="47" rx="20" ry="9" fill="#1A3A2A" />
      <ellipse cx="40" cy="40" rx="20" ry="7" fill="#2A5A4A" />
      <circle cx="38" cy="35" r="6" fill="none" stroke="rgba(16,185,129,0.7)" strokeWidth="1.2" />
      <line x1="38" y1="29" x2="38" y2="26" stroke="rgba(16,185,129,0.6)" strokeWidth="1" />
      <circle cx="38" cy="25" r="1.5" fill="rgba(16,185,129,0.7)" />
      <rect x="44" y="33" width="6" height="8" rx="1" fill="none" stroke="rgba(16,185,129,0.6)" strokeWidth="1" />
      <text x="40" y="25" textAnchor="middle" fontSize="8" fill="rgba(16,185,129,0.7)" fontWeight="bold">🔬</text>
    </svg>
  );
}

// i7 — Vitakultúra Island: Speech bubble island
export function IslandVitakultúra({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <ellipse cx="40" cy="74" rx="19" ry="5" fill="rgba(255,149,0,0.2)" />
      <ellipse cx="40" cy="47" rx="20" ry="9" fill="#4A3A1A" />
      <ellipse cx="40" cy="40" rx="20" ry="7" fill="#7A5A2A" />
      <path d="M26,32 Q26,26 40,26 Q54,26 54,32 Q54,38 40,38 Q35,38 33,42 Q32,38 26,38 Z" fill="rgba(255,149,0,0.6)" />
      <circle cx="32" cy="32" r="1.2" fill="rgba(255,255,255,0.8)" />
      <circle cx="40" cy="30" r="1.2" fill="rgba(255,255,255,0.8)" />
      <circle cx="48" cy="32" r="1.2" fill="rgba(255,255,255,0.8)" />
      <text x="40" y="25" textAnchor="middle" fontSize="8" fill="rgba(255,149,0,0.8)" fontWeight="bold">💬</text>
    </svg>
  );
}

// i8 — Átfogó teszt Island: Test/exam island with checkmarks
export function IslandAtfogo({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <ellipse cx="40" cy="74" rx="19" ry="5" fill="rgba(232,121,249,0.2)" />
      <ellipse cx="40" cy="47" rx="20" ry="9" fill="#3A2A4A" />
      <ellipse cx="40" cy="40" rx="20" ry="7" fill="#5A4A7A" />
      <rect x="28" y="32" width="10" height="8" rx="1" fill="none" stroke="rgba(232,121,249,0.6)" strokeWidth="1" />
      <path d="M30,37 L32,39 L37,34" stroke="rgba(232,121,249,0.7)" strokeWidth="1" fill="none" strokeLinecap="round" />
      <rect x="42" y="32" width="10" height="8" rx="1" fill="none" stroke="rgba(232,121,249,0.6)" strokeWidth="1" />
      <path d="M44,37 L46,39 L51,34" stroke="rgba(232,121,249,0.7)" strokeWidth="1" fill="none" strokeLinecap="round" />
      <text x="40" y="25" textAnchor="middle" fontSize="8" fill="rgba(232,121,249,0.7)" fontWeight="bold">📝</text>
    </svg>
  );
}

// i9 — Nagy végső próba Island: Star/trophy island (O7)
export function IslandVegsoO7({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <ellipse cx="40" cy="74" rx="19" ry="5" fill="rgba(78,205,196,0.2)" />
      <ellipse cx="40" cy="47" rx="20" ry="9" fill="#1A4A4A" />
      <ellipse cx="40" cy="40" rx="20" ry="7" fill="#2A7A7A" />
      <path d="M40,24 L44,34 L54,34 L46,40 L50,50 L40,44 L30,50 L34,40 L26,34 L36,34 Z" fill="rgba(78,205,196,0.8)" />
      <circle cx="40" cy="37" r="3" fill="rgba(255,255,255,0.6)" opacity="0.8" />
      <text x="40" y="25" textAnchor="middle" fontSize="7" fill="rgba(78,205,196,0.9)" fontWeight="bold">🌟</text>
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
