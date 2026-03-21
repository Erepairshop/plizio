// SVG Island illustrations for AstroMagyar O7 map
// Grade 7 Hungarian language learning islands
// O7 islands: i1=📚 #FF6B9D, i2=🎤 #4ECDC4, i3=✨ #00D4FF, i4=🗣️ #FFD700,
//             i5=📝 #B44DFF, i6=⚙️ #10B981, i7=💬 #FF9500, i8=📺 #E879F9, i9=🌟 #4ECDC4

import React from "react";

type IP = { size?: number };

// i1 — Irodalom Island: Hot-pink island with stacked books (📚 #FF6B9D)
export function IslandIradalomO7({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(255,107,157,0.2)" />
      <path d="M21,50 Q26,63 31,59 Q37,68 43,62 Q49,68 54,59 Q59,63 59,50Z" fill="#4A1A2A" />
      <ellipse cx="40" cy="47" rx="20" ry="9" fill="#7B2A4A" />
      <ellipse cx="40" cy="38" rx="19" ry="7" fill="#3D8B37" />
      <ellipse cx="40" cy="35" rx="17" ry="5" fill="#4CAF50" />
      <rect x="27" y="37" width="26" height="4" rx="0.5" fill="rgba(255,107,157,0.5)" />
      <rect x="29" y="33" width="22" height="4" rx="0.5" fill="rgba(255,107,157,0.65)" />
      <rect x="31" y="29" width="18" height="4" rx="0.5" fill="rgba(255,107,157,0.8)" />
      <line x1="40" y1="29" x2="40" y2="41" stroke="rgba(0,0,0,0.12)" strokeWidth="0.7" />
      <text x="57" y="27" fontSize="5" fill="rgba(255,107,157,0.5)">✦</text>
    </svg>
  );
}

// i2 — Szóbeli Island: Teal island with microphone (🎤 #4ECDC4)
export function IslandSzobeliO7({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <ellipse cx="40" cy="74" rx="19" ry="5" fill="rgba(78,205,196,0.18)" />
      <path d="M22,50 Q27,62 32,58 Q37,67 42,62 Q47,67 52,58 Q57,62 58,50Z" fill="#1A4A4A" />
      <ellipse cx="40" cy="47" rx="20" ry="9" fill="#1E6060" />
      <ellipse cx="40" cy="38" rx="19" ry="7" fill="#2A8A8A" />
      <rect x="36" y="25" width="8" height="12" rx="4" fill="rgba(78,205,196,0.7)" />
      <path d="M32,35 Q32,43 40,43 Q48,43 48,35" fill="none" stroke="rgba(78,205,196,0.6)" strokeWidth="1.2" />
      <line x1="40" y1="43" x2="40" y2="47" stroke="rgba(78,205,196,0.5)" strokeWidth="1" />
      <text x="15" y="27" fontSize="5" fill="rgba(78,205,196,0.5)">✦</text>
    </svg>
  );
}

// i3 — Szókincs Island: Blue island with sparkles (✨ #00D4FF)
export function IslandSzokincO7({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <ellipse cx="40" cy="74" rx="19" ry="5" fill="rgba(0,212,255,0.18)" />
      <path d="M22,50 Q27,62 32,58 Q37,67 42,62 Q47,67 52,58 Q57,62 58,50Z" fill="#0A2A35" />
      <ellipse cx="40" cy="47" rx="20" ry="9" fill="#0A3340" />
      <ellipse cx="40" cy="38" rx="19" ry="7" fill="#1A5060" />
      <text x="28" y="36" fontSize="8" fill="rgba(0,212,255,0.8)">✦</text>
      <text x="42" y="32" fontSize="6" fill="rgba(0,212,255,0.65)">✦</text>
      <text x="50" y="40" fontSize="7" fill="rgba(0,212,255,0.7)">✦</text>
      <text x="20" y="40" fontSize="5" fill="rgba(0,212,255,0.5)">✦</text>
      <text x="36" y="44" fontSize="5" fill="rgba(0,212,255,0.45)">✦</text>
    </svg>
  );
}

// i4 — Kommunikáció Island: Gold island with speaking figure (🗣️ #FFD700)
export function IslandKommunikacioO7({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <ellipse cx="40" cy="74" rx="19" ry="5" fill="rgba(255,215,0,0.2)" />
      <path d="M21,50 Q26,62 31,58 Q36,67 41,62 Q46,67 51,58 Q56,62 59,50Z" fill="#4A3A1A" />
      <ellipse cx="40" cy="47" rx="20" ry="9" fill="#7A6A2A" />
      <ellipse cx="40" cy="38" rx="18" ry="7" fill="#BAAA3A" />
      <circle cx="32" cy="28" r="4" fill="rgba(255,215,0,0.6)" />
      <path d="M32,32 L30,44 L36,44 L34,38 L38,44 L42,44 L38,32 Z" fill="rgba(255,215,0,0.55)" />
      <path d="M36,28 Q36,22 44,22 Q52,22 52,28 Q52,34 46,34 Q45,34 44,37 Q43,34 36,34 Z" fill="rgba(255,215,0,0.45)" />
      <text x="60" y="24" fontSize="5" fill="rgba(255,215,0,0.5)">✦</text>
    </svg>
  );
}

// i5 — Fogalmazás Island: Purple island with writing pad (📝 #B44DFF)
export function IslandFogalmazasO7({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(180,77,255,0.2)" />
      <path d="M21,50 Q26,63 31,59 Q37,68 43,62 Q49,68 54,59 Q59,63 59,50Z" fill="#2A1A4A" />
      <ellipse cx="40" cy="47" rx="20" ry="9" fill="#4A2A7A" />
      <ellipse cx="40" cy="38" rx="18" ry="7" fill="#6A4A9A" />
      <rect x="27" y="29" width="20" height="14" rx="1" fill="#F0E8FF" opacity="0.9" />
      <line x1="30" y1="33" x2="44" y2="33" stroke="#8800CC" strokeWidth="0.7" opacity="0.5" />
      <line x1="30" y1="36" x2="44" y2="36" stroke="#8800CC" strokeWidth="0.7" opacity="0.4" />
      <line x1="30" y1="39" x2="39" y2="39" stroke="#8800CC" strokeWidth="0.7" opacity="0.35" />
      <path d="M47,26 L51,32 L49,33 Z" fill="rgba(180,77,255,0.7)" />
      <text x="57" y="44" fontSize="5" fill="rgba(180,77,255,0.5)">✦</text>
    </svg>
  );
}

// i6 — Nyelvtan Island: Teal island with gear (⚙️ #10B981)
export function IslandNyelvtanO7({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(16,185,129,0.2)" />
      <path d="M21,50 Q26,63 31,59 Q37,68 43,62 Q49,68 54,59 Q59,63 59,50Z" fill="#1A4A3A" />
      <ellipse cx="40" cy="47" rx="20" ry="9" fill="#2A6A5A" />
      <ellipse cx="40" cy="38" rx="18" ry="7" fill="#3A9A7A" />
      <circle cx="40" cy="33" r="7" fill="none" stroke="rgba(16,185,129,0.6)" strokeWidth="1.2" />
      <circle cx="40" cy="33" r="3" fill="rgba(16,185,129,0.5)" />
      <path d="M40,25 L41,27 L39,27 Z" fill="rgba(16,185,129,0.7)" />
      <path d="M40,39 L41,41 L39,41 Z" fill="rgba(16,185,129,0.7)" />
      <path d="M32,33 L34,34 L34,32 Z" fill="rgba(16,185,129,0.7)" />
      <path d="M48,33 L46,34 L46,32 Z" fill="rgba(16,185,129,0.7)" />
      <text x="57" y="28" fontSize="5" fill="rgba(16,185,129,0.5)">✦</text>
    </svg>
  );
}

// i7 — Párbeszéd Island: Orange island with speech bubbles (💬 #FF9500)
export function IslandParbeszedO7({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(255,149,0,0.2)" />
      <path d="M21,50 Q26,63 31,59 Q37,68 43,62 Q49,68 54,59 Q59,63 59,50Z" fill="#4A2A1A" />
      <ellipse cx="40" cy="47" rx="20" ry="9" fill="#7A4A2A" />
      <ellipse cx="40" cy="38" rx="18" ry="7" fill="#AA6A3A" />
      <path d="M22,37 Q22,29 32,29 Q42,29 42,37 Q42,43 35,43 Q34,43 33,46 Q32,43 22,43 Z" fill="rgba(255,149,0,0.55)" />
      <path d="M37,32 Q37,25 48,25 Q59,25 59,32 Q59,38 53,38 Q52,38 51,41 Q50,38 37,38 Z" fill="rgba(255,149,0,0.45)" />
      <text x="15" y="26" fontSize="5" fill="rgba(255,149,0,0.5)">✦</text>
    </svg>
  );
}

// i8 — Média Island: Pink island with TV/screen (📺 #E879F9)
export function IslandMediaO7({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <ellipse cx="40" cy="74" rx="19" ry="5" fill="rgba(232,121,249,0.2)" />
      <path d="M22,50 Q27,62 32,58 Q37,67 42,62 Q47,67 52,58 Q57,62 58,50Z" fill="#2A1A3A" />
      <ellipse cx="40" cy="47" rx="20" ry="9" fill="#5A3A7A" />
      <ellipse cx="40" cy="38" rx="18" ry="7" fill="#7A5A9A" />
      <rect x="26" y="26" width="24" height="16" rx="2" fill="rgba(232,121,249,0.25)" stroke="rgba(232,121,249,0.6)" strokeWidth="1" />
      <path d="M34,27 L40,22 L46,27" fill="none" stroke="rgba(232,121,249,0.5)" strokeWidth="0.9" />
      <circle cx="40" cy="34" r="4" fill="rgba(232,121,249,0.4)" />
      <path d="M38,34 L43,34 L40.5,38 Z" fill="rgba(255,255,255,0.7)" />
    </svg>
  );
}

// i9 — Nagy Próba O7 Island: Final teal star island (🌟 #4ECDC4)
export function IslandVegsoO7({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(78,205,196,0.2)" />
      <path d="M21,50 Q26,63 31,59 Q37,68 43,62 Q49,68 54,59 Q59,63 59,50Z" fill="#1A4A4A" />
      <ellipse cx="40" cy="47" rx="20" ry="9" fill="#2A7A7A" />
      <ellipse cx="40" cy="38" rx="18" ry="7" fill="#3AAAAA" />
      <path d="M40,22 L43,30 L52,30 L45,36 L48,44 L40,38 L32,44 L35,36 L28,30 L37,30 Z" fill="rgba(78,205,196,0.85)" />
      <circle cx="40" cy="35" r="2.5" fill="rgba(255,255,255,0.5)" />
      <text x="17" y="38" fontSize="5" fill="rgba(78,205,196,0.4)">✦</text>
      <text x="59" y="42" fontSize="5" fill="rgba(78,205,196,0.4)">✦</text>
    </svg>
  );
}

// ── Exports ───────────────────────────────────────────────────────────────────
export const O7_ISLAND_SVGS: Record<string, React.ComponentType<{ size?: number }>> = {
  i1: IslandIradalomO7,
  i2: IslandSzobeliO7,
  i3: IslandSzokincO7,
  i4: IslandKommunikacioO7,
  i5: IslandFogalmazasO7,
  i6: IslandNyelvtanO7,
  i7: IslandParbeszedO7,
  i8: IslandMediaO7,
  i9: IslandVegsoO7,
};
