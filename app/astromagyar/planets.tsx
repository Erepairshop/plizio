// app/astromagyar/planets.tsx
// SVG planet illustrations — one per grade (1+), Hungarian Language themed.
// viewBox: 0 0 48 48 — render at any size via the `size` prop.
// Gradient IDs use "pm" prefix to avoid collision with other planet prefixes.

type PP = { size?: number };

// ── Grade 1 — Betűria (Letter planet, pink-magenta with Hungarian letters) ─
export function PlanetBetuuria({ size = 48 }: PP) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <defs>
        <radialGradient id="pm1bg" cx="38%" cy="28%" r="65%">
          <stop offset="0%" stopColor="#FF79A8" />
          <stop offset="55%" stopColor="#FF2D78" />
          <stop offset="100%" stopColor="#A0003C" />
        </radialGradient>
      </defs>
      <circle cx="24" cy="24" r="21" fill="url(#pm1bg)" />
      {/* Hungarian letter Á engraving */}
      <text x="13" y="22" fontSize="8" fill="white" opacity="0.22" fontFamily="serif" fontWeight="bold">Á</text>
      {/* Hungarian letter É engraving */}
      <text x="24" y="31" fontSize="7" fill="white" opacity="0.18" fontFamily="serif" fontWeight="bold">É</text>
      {/* Hungarian letter Ű engraving */}
      <text x="28" y="18" fontSize="6" fill="white" opacity="0.15" fontFamily="serif" fontWeight="bold">Ű</text>
      {/* Language wave bands */}
      <ellipse cx="24" cy="17" rx="20" ry="2.5" fill="#FF79A8" opacity="0.22" />
      <ellipse cx="24" cy="31" rx="19" ry="2" fill="#FF79A8" opacity="0.18" />
      {/* Word dots */}
      <circle cx="12" cy="26" r="2.5" fill="white" opacity="0.15" />
      <circle cx="36" cy="22" r="2" fill="white" opacity="0.12" />
      {/* Atmosphere glow */}
      <ellipse cx="16" cy="14" rx="7" ry="5" fill="white" opacity="0.13" />
      {/* Ring stroke */}
      <circle cx="24" cy="24" r="21" fill="none" stroke="#FF79A8" strokeWidth="2" opacity="0.22" />
    </svg>
  );
}

// ── Exports ───────────────────────────────────────────────────────────────────
export const GRADE_PLANETS = [
  PlanetBetuuria,  // 1
];

export const PLANET_NAMES: Record<string, string[]> = {
  en: ["Betűria"],
  hu: ["Betűria"],
  de: ["Betűria"],
  ro: ["Betűria"],
};
