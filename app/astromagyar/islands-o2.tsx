// SVG Island illustrations for AstroMagyar O2 map
// Grade 2 Hungarian language learning islands

import React from "react";

type IP = { size?: number };

// i1 — Szókincsbővítés Island: Pink island with word bubbles (🔤 #FF2D78)
export function IslandSzokincsbovites({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(255,45,120,0.2)" />
      <path d="M21,50 Q26,63 31,59 Q37,68 43,62 Q49,68 54,59 Q59,63 59,50Z" fill="#4A1A2E" />
      <ellipse cx="40" cy="47" rx="20" ry="9" fill="#7B2D4A" />
      <ellipse cx="40" cy="38" rx="19" ry="7" fill="#3D8B37" />
      <ellipse cx="40" cy="35" rx="17" ry="5" fill="#4CAF50" />
      <path d="M24,32 Q24,27 30,27 Q36,27 36,32 Q36,37 30,37 Q28,37 27,40 Q26,37 24,37 Z" fill="rgba(255,45,120,0.65)" />
      <path d="M44,29 Q44,24 50,24 Q56,24 56,29 Q56,34 50,34 Q48,34 47,37 Q46,34 44,34 Z" fill="rgba(255,107,174,0.55)" />
      <text x="30" y="33" textAnchor="middle" fontSize="4" fill="white" fontWeight="bold">Á</text>
      <text x="50" y="30" textAnchor="middle" fontSize="4" fill="white" fontWeight="bold">É</text>
    </svg>
  );
}

// i2 — Olvasás Island: Blue island with open book (📖 #00D4FF)
export function IslandOlvasasO2({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <ellipse cx="40" cy="74" rx="19" ry="5" fill="rgba(0,212,255,0.18)" />
      <path d="M22,50 Q27,62 32,58 Q37,67 42,62 Q47,67 52,58 Q57,62 58,50Z" fill="#0A2A35" />
      <ellipse cx="40" cy="47" rx="20" ry="9" fill="#0A3340" />
      <ellipse cx="40" cy="38" rx="19" ry="7" fill="#1A5060" />
      <ellipse cx="40" cy="35" rx="17" ry="5" fill="#1E6070" />
      <path d="M26,38 Q32,32 40,38" fill="none" stroke="#00D4FF" strokeWidth="1.2" />
      <path d="M40,38 Q48,32 54,38" fill="none" stroke="#00D4FF" strokeWidth="1.2" />
      <line x1="40" y1="32" x2="40" y2="40" stroke="#00D4FF" strokeWidth="0.8" opacity="0.6" />
      <line x1="28" y1="36" x2="38" y2="36" stroke="rgba(0,212,255,0.4)" strokeWidth="0.6" />
      <line x1="42" y1="36" x2="52" y2="36" stroke="rgba(0,212,255,0.4)" strokeWidth="0.6" />
      <text x="16" y="30" fontSize="6" fill="rgba(0,212,255,0.6)">✦</text>
    </svg>
  );
}

// i3 — Helyesírás Island: Green island with pencil marks (✏️ #00FF88)
export function IslandHelyesirasO2({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(0,255,136,0.15)" />
      <path d="M20,50 Q26,64 32,60 Q38,68 44,62 Q50,68 55,60 Q61,64 60,50Z" fill="#1A3A1A" />
      <ellipse cx="40" cy="47" rx="20" ry="9" fill="#2A5A2A" />
      <ellipse cx="40" cy="38" rx="18" ry="7" fill="#3A8A3A" />
      <ellipse cx="40" cy="35" rx="16" ry="5" fill="#4CAF50" opacity="0.7" />
      <line x1="28" y1="32" x2="52" y2="32" stroke="rgba(0,255,136,0.5)" strokeWidth="0.8" />
      <line x1="28" y1="36" x2="52" y2="36" stroke="rgba(0,255,136,0.5)" strokeWidth="0.8" />
      <line x1="28" y1="40" x2="48" y2="40" stroke="rgba(0,255,136,0.5)" strokeWidth="0.8" />
      <path d="M46,24 L50,32 L48,33 L44,25 Z" fill="rgba(0,255,136,0.7)" />
      <circle cx="44" cy="24" r="1.5" fill="#E8E8E8" />
    </svg>
  );
}

// i4 — Fogalmazás Island: Gold island with writing paper (📝 #FFD700)
export function IslandFogalmazas({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <ellipse cx="40" cy="74" rx="19" ry="5" fill="rgba(255,215,0,0.2)" />
      <path d="M21,50 Q26,62 31,58 Q36,67 41,62 Q46,67 51,58 Q56,62 59,50Z" fill="#4A3A1A" />
      <ellipse cx="40" cy="47" rx="20" ry="9" fill="#7A6A2A" />
      <ellipse cx="40" cy="38" rx="18" ry="7" fill="#BAAA3A" />
      <rect x="27" y="30" width="20" height="14" rx="1" fill="#FFF8D0" opacity="0.9" />
      <line x1="30" y1="34" x2="44" y2="34" stroke="#AA8800" strokeWidth="0.7" opacity="0.6" />
      <line x1="30" y1="37" x2="44" y2="37" stroke="#AA8800" strokeWidth="0.7" opacity="0.5" />
      <line x1="30" y1="40" x2="40" y2="40" stroke="#AA8800" strokeWidth="0.7" opacity="0.4" />
      <path d="M47,27 L51,31 L49,32 Z" fill="rgba(255,215,0,0.8)" />
      <text x="60" y="29" fontSize="5" fill="rgba(255,215,0,0.5)">✦</text>
    </svg>
  );
}

// i5 — Mondatalkotás Island: Purple island with chain links (🔗 #B44DFF)
export function IslandMondatalkotasO2({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(180,77,255,0.2)" />
      <path d="M21,50 Q26,63 31,59 Q37,68 43,62 Q49,68 54,59 Q59,63 59,50Z" fill="#2A1A4A" />
      <ellipse cx="40" cy="47" rx="20" ry="9" fill="#4A2A7A" />
      <ellipse cx="40" cy="38" rx="18" ry="7" fill="#6A4A9A" />
      <ellipse cx="40" cy="35" rx="16" ry="5" fill="#7A5AAA" />
      <ellipse cx="30" cy="33" rx="5" ry="3" fill="none" stroke="rgba(180,77,255,0.8)" strokeWidth="1.2" />
      <ellipse cx="40" cy="33" rx="5" ry="3" fill="none" stroke="rgba(180,77,255,0.7)" strokeWidth="1.2" />
      <ellipse cx="50" cy="33" rx="5" ry="3" fill="none" stroke="rgba(180,77,255,0.8)" strokeWidth="1.2" />
      <text x="15" y="29" fontSize="5" fill="rgba(180,77,255,0.5)">✦</text>
    </svg>
  );
}

// i6 — Irodalomolvasás Island: Teal island with stacked books (📚 #10B981)
export function IslandIrodalomolvasas({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(16,185,129,0.2)" />
      <path d="M21,50 Q26,63 31,59 Q37,68 43,62 Q49,68 54,59 Q59,63 59,50Z" fill="#1A4A3A" />
      <ellipse cx="40" cy="47" rx="20" ry="9" fill="#2A6A5A" />
      <ellipse cx="40" cy="38" rx="18" ry="7" fill="#3A9A7A" />
      <rect x="27" y="37" width="26" height="4" rx="0.5" fill="rgba(16,185,129,0.5)" />
      <rect x="29" y="33" width="22" height="4" rx="0.5" fill="rgba(16,185,129,0.65)" />
      <rect x="31" y="29" width="18" height="4" rx="0.5" fill="rgba(16,185,129,0.8)" />
      <line x1="40" y1="29" x2="40" y2="41" stroke="rgba(0,0,0,0.15)" strokeWidth="0.7" />
      <text x="57" y="28" fontSize="5" fill="rgba(16,185,129,0.5)">✦</text>
    </svg>
  );
}

// i7 — Mesék Island: Orange island with speech bubble (🎭 #FF9500)
export function IslandMesek({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(255,149,0,0.2)" />
      <path d="M21,50 Q26,63 31,59 Q37,68 43,62 Q49,68 54,59 Q59,63 59,50Z" fill="#4A2A1A" />
      <ellipse cx="40" cy="47" rx="20" ry="9" fill="#7A4A2A" />
      <ellipse cx="40" cy="38" rx="18" ry="7" fill="#AA6A3A" />
      <path d="M28,40 Q28,31 40,31 Q52,31 52,40 Q52,48 42,48 Q40,48 39,51 Q38,48 28,48 Z" fill="rgba(255,149,0,0.55)" />
      <circle cx="34" cy="38" r="1.2" fill="rgba(255,255,255,0.8)" />
      <circle cx="40" cy="37" r="1.2" fill="rgba(255,255,255,0.8)" />
      <circle cx="46" cy="38" r="1.2" fill="rgba(255,255,255,0.8)" />
      <text x="19" y="28" fontSize="6" fill="rgba(255,149,0,0.5)">✦</text>
    </svg>
  );
}

// i8 — Világ Island: Pink island with globe (🌍 #E879F9)
export function IslandVilag({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <ellipse cx="40" cy="74" rx="19" ry="5" fill="rgba(232,121,249,0.2)" />
      <path d="M22,50 Q27,62 32,58 Q37,67 42,62 Q47,67 52,58 Q57,62 58,50Z" fill="#2A1A3A" />
      <ellipse cx="40" cy="47" rx="20" ry="9" fill="#5A3A7A" />
      <ellipse cx="40" cy="38" rx="18" ry="7" fill="#7A5A9A" />
      <circle cx="40" cy="33" r="8" fill="none" stroke="rgba(232,121,249,0.6)" strokeWidth="1.2" />
      <path d="M32,33 Q36,29 40,33 Q44,37 48,33" fill="none" stroke="rgba(232,121,249,0.5)" strokeWidth="0.8" />
      <line x1="32" y1="33" x2="48" y2="33" stroke="rgba(232,121,249,0.4)" strokeWidth="0.7" />
      <text x="18" y="43" fontSize="5" fill="rgba(232,121,249,0.4)">✦</text>
    </svg>
  );
}

// i9 — Nagy Próba O2 Island: Final star island (🌟 #4ECDC4)
export function IslandVegsoO2({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(78,205,196,0.2)" />
      <path d="M21,50 Q26,63 31,59 Q37,68 43,62 Q49,68 54,59 Q59,63 59,50Z" fill="#1A4A4A" />
      <ellipse cx="40" cy="47" rx="20" ry="9" fill="#2A7A7A" />
      <ellipse cx="40" cy="38" rx="18" ry="7" fill="#3AAAAA" />
      <path d="M40,22 L43,30 L52,30 L45,36 L48,44 L40,38 L32,44 L35,36 L28,30 L37,30 Z" fill="rgba(78,205,196,0.85)" />
      <circle cx="40" cy="35" r="2.5" fill="rgba(255,255,255,0.5)" />
      <text x="17" y="38" fontSize="5" fill="rgba(78,205,196,0.4)">✦</text>
    </svg>
  );
}

// ── Exports ───────────────────────────────────────────────────────────────────
export const O2_ISLAND_SVGS: Record<string, React.ComponentType<{ size?: number }>> = {
  i1: IslandSzokincsbovites,
  i2: IslandOlvasasO2,
  i3: IslandHelyesirasO2,
  i4: IslandFogalmazas,
  i5: IslandMondatalkotasO2,
  i6: IslandIrodalomolvasas,
  i7: IslandMesek,
  i8: IslandVilag,
  i9: IslandVegsoO2,
};
