// SVG Island illustrations for AstroMagyar O4 map
// Grade 4 Hungarian language learning islands
// O4 islands: i1=📖 #FF6B9D, i2=🔗 #4ECDC4, i3=📝 #00D4FF, i4=💬 #FFD700,
//             i5=🎭 #B44DFF, i6=✏️ #FF6348, i7=📜 #10B981, i8=🔍 #FF8C42, i9=🌟 #E879F9

import React from "react";

type IP = { size?: number };

// i1 — Olvasás Island: Hot-pink island with open book (📖 #FF6B9D)
export function IslandOlvasasO4({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(255,107,157,0.2)" />
      <path d="M21,50 Q26,63 31,59 Q37,68 43,62 Q49,68 54,59 Q59,63 59,50Z" fill="#4A1A2A" />
      <ellipse cx="40" cy="47" rx="20" ry="9" fill="#7B2A4A" />
      <ellipse cx="40" cy="38" rx="19" ry="7" fill="#3D8B37" />
      <ellipse cx="40" cy="35" rx="17" ry="5" fill="#4CAF50" />
      <path d="M26,39 Q32,32 40,39" fill="none" stroke="#FF6B9D" strokeWidth="1.3" />
      <path d="M40,39 Q48,32 54,39" fill="none" stroke="#FF6B9D" strokeWidth="1.3" />
      <line x1="40" y1="32" x2="40" y2="41" stroke="#FF6B9D" strokeWidth="0.9" opacity="0.6" />
      <text x="16" y="30" fontSize="6" fill="rgba(255,107,157,0.5)">✦</text>
      <text x="58" y="26" fontSize="5" fill="rgba(255,107,157,0.4)">✦</text>
    </svg>
  );
}

// i2 — Mondatfűzés Island: Teal island with chain (🔗 #4ECDC4)
export function IslandMondatfuzesO4({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <ellipse cx="40" cy="74" rx="19" ry="5" fill="rgba(78,205,196,0.18)" />
      <path d="M22,50 Q27,62 32,58 Q37,67 42,62 Q47,67 52,58 Q57,62 58,50Z" fill="#1A4A4A" />
      <ellipse cx="40" cy="47" rx="20" ry="9" fill="#1E6060" />
      <ellipse cx="40" cy="38" rx="19" ry="7" fill="#2A8A8A" />
      <ellipse cx="40" cy="35" rx="17" ry="5" fill="#30AAAA" />
      <ellipse cx="28" cy="33" rx="6" ry="3.5" fill="none" stroke="rgba(78,205,196,0.8)" strokeWidth="1.3" />
      <ellipse cx="40" cy="33" rx="6" ry="3.5" fill="none" stroke="rgba(78,205,196,0.7)" strokeWidth="1.3" />
      <ellipse cx="52" cy="33" rx="6" ry="3.5" fill="none" stroke="rgba(78,205,196,0.8)" strokeWidth="1.3" />
      <text x="15" y="27" fontSize="5" fill="rgba(78,205,196,0.5)">✦</text>
    </svg>
  );
}

// i3 — Fogalmazás Island: Blue island with writing pad (📝 #00D4FF)
export function IslandFogalmazasO4({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <ellipse cx="40" cy="74" rx="19" ry="5" fill="rgba(0,212,255,0.18)" />
      <path d="M22,50 Q27,62 32,58 Q37,67 42,62 Q47,67 52,58 Q57,62 58,50Z" fill="#0A2A35" />
      <ellipse cx="40" cy="47" rx="20" ry="9" fill="#0A3340" />
      <ellipse cx="40" cy="38" rx="18" ry="7" fill="#1A5060" />
      <rect x="28" y="29" width="18" height="14" rx="1" fill="#E0F8FF" opacity="0.9" />
      <line x1="31" y1="33" x2="43" y2="33" stroke="#0088AA" strokeWidth="0.7" opacity="0.6" />
      <line x1="31" y1="36" x2="43" y2="36" stroke="#0088AA" strokeWidth="0.7" opacity="0.5" />
      <line x1="31" y1="39" x2="39" y2="39" stroke="#0088AA" strokeWidth="0.7" opacity="0.4" />
      <path d="M46,26 L50,32 L48,33 Z" fill="rgba(0,212,255,0.7)" />
      <text x="57" y="44" fontSize="5" fill="rgba(0,212,255,0.5)">✦</text>
    </svg>
  );
}

// i4 — Párbeszéd Island: Gold island with speech bubbles (💬 #FFD700)
export function IslandParbeszedO4({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <ellipse cx="40" cy="74" rx="19" ry="5" fill="rgba(255,215,0,0.2)" />
      <path d="M21,50 Q26,62 31,58 Q36,67 41,62 Q46,67 51,58 Q56,62 59,50Z" fill="#4A3A1A" />
      <ellipse cx="40" cy="47" rx="20" ry="9" fill="#7A6A2A" />
      <ellipse cx="40" cy="38" rx="18" ry="7" fill="#BAAA3A" />
      <path d="M22,37 Q22,29 32,29 Q42,29 42,37 Q42,43 35,43 Q34,43 33,46 Q32,43 22,43 Z" fill="rgba(255,215,0,0.55)" />
      <path d="M37,32 Q37,25 48,25 Q59,25 59,32 Q59,38 53,38 Q52,38 51,41 Q50,38 37,38 Z" fill="rgba(255,215,0,0.45)" />
      <text x="60" y="26" fontSize="5" fill="rgba(255,215,0,0.5)">✦</text>
    </svg>
  );
}

// i5 — Drámajáték Island: Purple island with masks (🎭 #B44DFF)
export function IslandDramajatekO4({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(180,77,255,0.2)" />
      <path d="M21,50 Q26,63 31,59 Q37,68 43,62 Q49,68 54,59 Q59,63 59,50Z" fill="#2A1A4A" />
      <ellipse cx="40" cy="47" rx="20" ry="9" fill="#4A2A7A" />
      <ellipse cx="40" cy="38" rx="18" ry="7" fill="#6A4A9A" />
      <ellipse cx="30" cy="33" rx="6" ry="5" fill="rgba(180,77,255,0.5)" />
      <path d="M27,34 Q30,37 33,34" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="0.9" />
      <circle cx="29" cy="31" r="0.9" fill="rgba(255,255,255,0.8)" />
      <circle cx="31" cy="31" r="0.9" fill="rgba(255,255,255,0.8)" />
      <ellipse cx="50" cy="33" rx="6" ry="5" fill="rgba(180,77,255,0.4)" />
      <path d="M47,35 Q50,32 53,35" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="0.9" />
      <circle cx="49" cy="31" r="0.9" fill="rgba(255,255,255,0.8)" />
      <circle cx="51" cy="31" r="0.9" fill="rgba(255,255,255,0.8)" />
      <text x="15" y="27" fontSize="5" fill="rgba(180,77,255,0.5)">✦</text>
    </svg>
  );
}

// i6 — Helyesírás Island: Red-orange island with pencil and checkmarks (✏️ #FF6348)
export function IslandHelyesirasO4({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(255,99,72,0.2)" />
      <path d="M20,50 Q26,64 32,60 Q38,68 44,62 Q50,68 55,60 Q61,64 60,50Z" fill="#4A1A0A" />
      <ellipse cx="40" cy="47" rx="20" ry="9" fill="#7A2A1A" />
      <ellipse cx="40" cy="38" rx="18" ry="7" fill="#AA4A3A" />
      <path d="M26,34 L30,38 L38,26" stroke="rgba(255,99,72,0.9)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M43,34 L47,38 L55,26" stroke="rgba(255,99,72,0.7)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M55,24 L59,30 L57,31 Z" fill="rgba(255,99,72,0.7)" />
      <text x="16" y="43" fontSize="5" fill="rgba(255,99,72,0.5)">✦</text>
    </svg>
  );
}

// i7 — Szöveg Island: Teal island with scroll (📜 #10B981)
export function IslandSzovegO4({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(16,185,129,0.2)" />
      <path d="M21,50 Q26,63 31,59 Q37,68 43,62 Q49,68 54,59 Q59,63 59,50Z" fill="#1A4A3A" />
      <ellipse cx="40" cy="47" rx="20" ry="9" fill="#2A6A5A" />
      <ellipse cx="40" cy="38" rx="18" ry="7" fill="#3A9A7A" />
      <rect x="26" y="28" width="28" height="16" rx="2" fill="#E8FFF8" opacity="0.9" />
      <ellipse cx="26" cy="36" rx="3" ry="8" fill="#70D9B8" opacity="0.85" />
      <ellipse cx="54" cy="36" rx="3" ry="8" fill="#70D9B8" opacity="0.85" />
      <line x1="30" y1="33" x2="50" y2="33" stroke="#008866" strokeWidth="0.7" opacity="0.5" />
      <line x1="30" y1="36" x2="50" y2="36" stroke="#008866" strokeWidth="0.7" opacity="0.4" />
      <line x1="30" y1="39" x2="44" y2="39" stroke="#008866" strokeWidth="0.7" opacity="0.35" />
    </svg>
  );
}

// i8 — Szövegértés Island: Orange island with magnifier (🔍 #FF8C42)
export function IslandSzovegertes8({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <ellipse cx="40" cy="74" rx="19" ry="5" fill="rgba(255,140,66,0.2)" />
      <path d="M22,50 Q27,62 32,58 Q37,67 42,62 Q47,67 52,58 Q57,62 58,50Z" fill="#4A2A1A" />
      <ellipse cx="40" cy="47" rx="20" ry="9" fill="#7A4A2A" />
      <ellipse cx="40" cy="38" rx="18" ry="7" fill="#AA6A3A" />
      <circle cx="35" cy="33" r="8" fill="none" stroke="rgba(255,140,66,0.7)" strokeWidth="1.3" />
      <line x1="41" y1="39" x2="50" y2="48" stroke="rgba(255,140,66,0.6)" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="35" cy="33" r="4" fill="none" stroke="rgba(255,140,66,0.35)" strokeWidth="0.9" />
      <text x="57" y="28" fontSize="5" fill="rgba(255,140,66,0.5)">✦</text>
    </svg>
  );
}

// i9 — Nagy Próba O4 Island: Pink final star island (🌟 #E879F9)
export function IslandVegsoO4({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(232,121,249,0.2)" />
      <path d="M21,50 Q26,63 31,59 Q37,68 43,62 Q49,68 54,59 Q59,63 59,50Z" fill="#2A1A3A" />
      <ellipse cx="40" cy="47" rx="20" ry="9" fill="#5A3A7A" />
      <ellipse cx="40" cy="38" rx="18" ry="7" fill="#7A5A9A" />
      <path d="M40,22 L43,30 L52,30 L45,36 L48,44 L40,38 L32,44 L35,36 L28,30 L37,30 Z" fill="rgba(232,121,249,0.85)" />
      <circle cx="40" cy="35" r="2.5" fill="rgba(255,255,255,0.5)" />
      <text x="17" y="38" fontSize="5" fill="rgba(232,121,249,0.4)">✦</text>
      <text x="59" y="42" fontSize="5" fill="rgba(232,121,249,0.4)">✦</text>
    </svg>
  );
}

// ── Exports ───────────────────────────────────────────────────────────────────
export const O4_ISLAND_SVGS: Record<string, React.ComponentType<{ size?: number }>> = {
  i1: IslandOlvasasO4,
  i2: IslandMondatfuzesO4,
  i3: IslandFogalmazasO4,
  i4: IslandParbeszedO4,
  i5: IslandDramajatekO4,
  i6: IslandHelyesirasO4,
  i7: IslandSzovegO4,
  i8: IslandSzovegertes8,
  i9: IslandVegsoO4,
};
