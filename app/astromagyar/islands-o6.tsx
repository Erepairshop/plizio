// SVG Island illustrations for AstroMagyar O6 map
// Grade 6 Hungarian language learning islands

import React from "react";

type IP = { size?: number };

// i1 — Mondat Island
export function IslandMondat({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <ellipse cx="40" cy="74" rx="19" ry="5" fill="rgba(255,45,120,0.2)" />
      <ellipse cx="40" cy="47" rx="20" ry="9" fill="#3D1A2A" />
      <ellipse cx="40" cy="40" rx="20" ry="7" fill="#6B2D4A" />
      <rect x="24" y="32" width="32" height="4" rx="1" fill="rgba(255,45,120,0.6)" />
      <rect x="24" y="38" width="24" height="3" rx="1" fill="rgba(255,45,120,0.5)" />
      <text x="40" y="26" textAnchor="middle" fontSize="7" fill="rgba(255,45,120,0.7)" fontWeight="bold">📝</text>
    </svg>
  );
}

// i2 — Stilus Island
export function IslandStilus({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <ellipse cx="40" cy="74" rx="19" ry="5" fill="rgba(0,212,255,0.2)" />
      <ellipse cx="40" cy="47" rx="20" ry="9" fill="#1A2A3A" />
      <ellipse cx="40" cy="40" rx="20" ry="7" fill="#2A4A6A" />
      <circle cx="30" cy="35" r="3" fill="rgba(0,212,255,0.7)" />
      <circle cx="40" cy="32" r="3" fill="rgba(0,212,255,0.8)" />
      <circle cx="50" cy="35" r="3" fill="rgba(0,212,255,0.7)" />
      <text x="40" y="25" textAnchor="middle" fontSize="7" fill="rgba(0,212,255,0.7)" fontWeight="bold">🎨</text>
    </svg>
  );
}

// i3 — Szok Island
export function IslandSzok({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <ellipse cx="40" cy="74" rx="19" ry="5" fill="rgba(0,255,136,0.2)" />
      <ellipse cx="40" cy="47" rx="20" ry="9" fill="#1A3A1A" />
      <ellipse cx="40" cy="40" rx="20" ry="7" fill="#2A6A2A" />
      <rect x="26" y="30" width="7" height="11" rx="1" fill="rgba(0,255,136,0.5)" />
      <rect x="35" y="28" width="7" height="13" rx="1" fill="rgba(0,255,136,0.6)" />
      <rect x="44" y="30" width="7" height="11" rx="1" fill="rgba(0,255,136,0.5)" />
      <text x="40" y="25" textAnchor="middle" fontSize="7" fill="rgba(0,255,136,0.7)" fontWeight="bold">📚</text>
    </svg>
  );
}

// i4 — Nyelv Island
export function IslandNyelv({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <ellipse cx="40" cy="74" rx="19" ry="5" fill="rgba(255,215,0,0.2)" />
      <ellipse cx="40" cy="47" rx="20" ry="9" fill="#3A3A1A" />
      <ellipse cx="40" cy="40" rx="20" ry="7" fill="#6A6A2A" />
      <path d="M32,38 Q35,32 40,38 Q45,32 48,38" fill="none" stroke="rgba(255,215,0,0.7)" strokeWidth="1.5" />
      <circle cx="40" cy="28" r="2" fill="rgba(255,215,0,0.6)" />
      <text x="40" y="24" textAnchor="middle" fontSize="7" fill="rgba(255,215,0,0.7)" fontWeight="bold">🌍</text>
    </svg>
  );
}

// i5 — Retorika Island
export function IslandRetorika({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <ellipse cx="40" cy="74" rx="19" ry="5" fill="rgba(180,77,255,0.2)" />
      <ellipse cx="40" cy="47" rx="20" ry="9" fill="#2A1A3A" />
      <ellipse cx="40" cy="40" rx="20" ry="7" fill="#4A2A6A" />
      <path d="M28,34 L32,40 L36,32" fill="none" stroke="rgba(180,77,255,0.7)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M44,34 L48,40 L52,32" fill="none" stroke="rgba(180,77,255,0.7)" strokeWidth="1.5" strokeLinecap="round" />
      <text x="40" y="25" textAnchor="middle" fontSize="7" fill="rgba(180,77,255,0.7)" fontWeight="bold">💬</text>
    </svg>
  );
}

// i6 — Szoveg Island
export function IslandSzoveg({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <ellipse cx="40" cy="74" rx="19" ry="5" fill="rgba(16,185,129,0.2)" />
      <ellipse cx="40" cy="47" rx="20" ry="9" fill="#1A3A2A" />
      <ellipse cx="40" cy="40" rx="20" ry="7" fill="#2A5A4A" />
      <rect x="26" y="32" width="28" height="3" rx="1" fill="rgba(16,185,129,0.6)" />
      <rect x="26" y="36" width="24" height="2" rx="1" fill="rgba(16,185,129,0.5)" />
      <rect x="26" y="39" width="22" height="2" rx="1" fill="rgba(16,185,129,0.4)" />
      <text x="40" y="25" textAnchor="middle" fontSize="7" fill="rgba(16,185,129,0.7)" fontWeight="bold">🔍</text>
    </svg>
  );
}

// i7 — Hely Island
export function IslandHely({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <ellipse cx="40" cy="74" rx="19" ry="5" fill="rgba(255,149,0,0.2)" />
      <ellipse cx="40" cy="47" rx="20" ry="9" fill="#3A2A1A" />
      <ellipse cx="40" cy="40" rx="20" ry="7" fill="#6A4A2A" />
      <rect x="32" y="32" width="5" height="9" rx="1" fill="rgba(255,149,0,0.6)" />
      <rect x="39" y="30" width="5" height="11" rx="1" fill="rgba(255,149,0,0.7)" />
      <rect x="46" y="32" width="5" height="9" rx="1" fill="rgba(255,149,0,0.6)" />
      <text x="40" y="25" textAnchor="middle" fontSize="7" fill="rgba(255,149,0,0.7)" fontWeight="bold">✅</text>
    </svg>
  );
}

// i8 — Fogal Island
export function IslandFogal({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <ellipse cx="40" cy="74" rx="19" ry="5" fill="rgba(232,121,249,0.2)" />
      <ellipse cx="40" cy="47" rx="20" ry="9" fill="#2A1A3A" />
      <ellipse cx="40" cy="40" rx="20" ry="7" fill="#5A2A7A" />
      <path d="M30,40 Q35,32 40,40 Q45,32 50,40" fill="rgba(232,121,249,0.5)" />
      <circle cx="40" cy="28" r="2.5" fill="rgba(232,121,249,0.7)" />
      <text x="40" y="25" textAnchor="middle" fontSize="7" fill="rgba(232,121,249,0.7)" fontWeight="bold">✍️</text>
    </svg>
  );
}

// i9 — Vegso Island (O6)
export function IslandVegsoO6({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <ellipse cx="40" cy="74" rx="19" ry="5" fill="rgba(78,205,196,0.2)" />
      <ellipse cx="40" cy="47" rx="20" ry="9" fill="#1A3A3A" />
      <ellipse cx="40" cy="40" rx="20" ry="7" fill="#2A5A5A" />
      <circle cx="40" cy="35" r="3" fill="rgba(78,205,196,0.7)" />
      <circle cx="30" cy="35" r="2" fill="rgba(78,205,196,0.6)" />
      <circle cx="50" cy="35" r="2" fill="rgba(78,205,196,0.6)" />
      <text x="40" y="25" textAnchor="middle" fontSize="7" fill="rgba(78,205,196,0.7)" fontWeight="bold">🌟</text>
    </svg>
  );
}

// ── Exports ───────────────────────────────────────────────────────────────────
export const O6_ISLAND_SVGS: Record<string, React.ComponentType<{ size?: number }>> = {
  i1: IslandMondat,
  i2: IslandStilus,
  i3: IslandSzok,
  i4: IslandNyelv,
  i5: IslandRetorika,
  i6: IslandSzoveg,
  i7: IslandHely,
  i8: IslandFogal,
  i9: IslandVegsoO6,
};
