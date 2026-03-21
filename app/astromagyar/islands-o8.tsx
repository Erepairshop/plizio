// SVG Island illustrations for AstroMagyar O8 map
// Grade 8 Hungarian language learning islands

import React from "react";

type IP = { size?: number };

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

// i9 — Nagy végső próba Island: Star/trophy island (O8 final)
export function IslandVegsoO8({ size = 80 }: IP) {
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
export const O8_ISLAND_SVGS: Record<string, React.ComponentType<{ size?: number }>> = {
  i1: IslandOmagyar,
  i2: IslandStiluseszközok,
  i3: IslandSzovegelemzes,
  i4: IslandHelyesirasO8,
  i5: IslandNorma,
  i6: IslandTudomanyos,
  i7: IslandVitakultúra,
  i8: IslandAtfogo,
  i9: IslandVegsoO8,
};
