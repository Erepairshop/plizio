// SVG Island illustrations for AstroMagyar O5 map
// Grade 5 Hungarian language learning islands

import React from "react";

type IP = { size?: number };

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

// ── Exports ───────────────────────────────────────────────────────────────────
export const O5_ISLAND_SVGS: Record<string, React.ComponentType<{ size?: number }>> = {
  i1: IslandHangtan,
  i2: IslandSzoelemzes,
  i3: IslandSzofajok,
  i4: IslandMondatresz,
  i5: IslandSzovegtan,
  i6: IslandStilustan,
  i7: IslandHelyesirasO5,
  i8: IslandIrodalom,
  i9: IslandVegsoO5,
};
