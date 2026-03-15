// app/astromath/planets.tsx
// SVG planet illustrations — one per grade (1–8)
// Each planet has a unique name, color scheme, and visual features.
// viewBox: 0 0 48 48 — render at any size via the `size` prop.

type PP = { size?: number };

// ── Grade 1 — Terra (Earth-like, blue ocean + green continents) ───────────────
export function PlanetTerra({ size = 48 }: PP) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <defs>
        <radialGradient id="p1bg" cx="40%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#5DADE2" />
          <stop offset="65%" stopColor="#1B6CA8" />
          <stop offset="100%" stopColor="#0A3D6B" />
        </radialGradient>
      </defs>
      <circle cx="24" cy="24" r="21" fill="url(#p1bg)" />
      <ellipse cx="20" cy="17" rx="7" ry="5" fill="#2ECC71" opacity="0.85" transform="rotate(-15 20 17)" />
      <ellipse cx="30" cy="27" rx="5" ry="7" fill="#27AE60" opacity="0.8" transform="rotate(10 30 27)" />
      <ellipse cx="15" cy="30" rx="3" ry="4" fill="#2ECC71" opacity="0.65" />
      <ellipse cx="26" cy="13" rx="6" ry="2" fill="white" opacity="0.22" transform="rotate(-10 26 13)" />
      <ellipse cx="18" cy="33" rx="5" ry="1.5" fill="white" opacity="0.18" />
      <circle cx="24" cy="24" r="21" fill="none" stroke="#88CCFF" strokeWidth="2.5" opacity="0.22" />
      <ellipse cx="17" cy="15" rx="7" ry="5" fill="white" opacity="0.12" />
    </svg>
  );
}

// ── Grade 2 — Aquaria (Deep ocean world, cyan with vortex) ───────────────────
export function PlanetAquaria({ size = 48 }: PP) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <defs>
        <radialGradient id="p2bg" cx="35%" cy="28%" r="70%">
          <stop offset="0%" stopColor="#00E5FF" />
          <stop offset="55%" stopColor="#0096C7" />
          <stop offset="100%" stopColor="#023E8A" />
        </radialGradient>
      </defs>
      <circle cx="24" cy="24" r="21" fill="url(#p2bg)" />
      <ellipse cx="24" cy="18" rx="18" ry="3" fill="white" opacity="0.07" />
      <ellipse cx="24" cy="26" rx="19" ry="2.5" fill="white" opacity="0.05" />
      <ellipse cx="24" cy="34" rx="16" ry="2" fill="white" opacity="0.06" />
      <circle cx="30" cy="20" r="5.5" fill="none" stroke="#48CAE4" strokeWidth="1.5" opacity="0.45" />
      <circle cx="30" cy="20" r="2.5" fill="#90E0EF" opacity="0.4" />
      <circle cx="24" cy="24" r="21" fill="none" stroke="#00FFFF" strokeWidth="1.5" opacity="0.18" />
      <ellipse cx="16" cy="14" rx="6" ry="4" fill="white" opacity="0.14" />
    </svg>
  );
}

// ── Grade 3 — Ignos (Fire/Mars-like, red with craters and dust storms) ────────
export function PlanetIgnos({ size = 48 }: PP) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <defs>
        <radialGradient id="p3bg" cx="40%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#E07B54" />
          <stop offset="60%" stopColor="#C1121F" />
          <stop offset="100%" stopColor="#7B1111" />
        </radialGradient>
      </defs>
      <circle cx="24" cy="24" r="21" fill="url(#p3bg)" />
      <ellipse cx="24" cy="19" rx="19" ry="3.5" fill="#8B0000" opacity="0.28" />
      <ellipse cx="24" cy="30" rx="18" ry="3" fill="#8B0000" opacity="0.22" />
      <circle cx="16" cy="18" r="4" fill="none" stroke="#6B0000" strokeWidth="1" opacity="0.5" />
      <circle cx="16" cy="18" r="2" fill="#7B1111" opacity="0.4" />
      <circle cx="33" cy="30" r="3" fill="none" stroke="#6B0000" strokeWidth="1" opacity="0.4" />
      <ellipse cx="28" cy="17" rx="7" ry="4" fill="#D4722A" opacity="0.28" transform="rotate(-20 28 17)" />
      <ellipse cx="16" cy="14" rx="6" ry="4" fill="white" opacity="0.09" />
    </svg>
  );
}

// ── Grade 4 — Aureon (Gas giant, golden bands + great storm spot) ─────────────
export function PlanetAureon({ size = 48 }: PP) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <defs>
        <radialGradient id="p4bg" cx="40%" cy="28%" r="65%">
          <stop offset="0%" stopColor="#FFE566" />
          <stop offset="50%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#B8860B" />
        </radialGradient>
      </defs>
      <circle cx="24" cy="24" r="21" fill="url(#p4bg)" />
      <ellipse cx="24" cy="15" rx="20" ry="3" fill="#FFA500" opacity="0.32" />
      <ellipse cx="24" cy="22" rx="21" ry="2.5" fill="#B8860B" opacity="0.22" />
      <ellipse cx="24" cy="29" rx="20" ry="3.5" fill="#FFA500" opacity="0.28" />
      <ellipse cx="24" cy="36" rx="17" ry="2.5" fill="#B8860B" opacity="0.18" />
      <ellipse cx="32" cy="26" rx="6" ry="4" fill="#E8A000" opacity="0.5" />
      <ellipse cx="32" cy="26" rx="3" ry="2" fill="#CC8800" opacity="0.55" />
      <ellipse cx="15" cy="13" rx="7" ry="5" fill="white" opacity="0.14" />
    </svg>
  );
}

// ── Grade 5 — Violetis (Nebula storm world, purple with swirling clouds) ──────
export function PlanetVioletis({ size = 48 }: PP) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <defs>
        <radialGradient id="p5bg" cx="40%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#F0ABFC" />
          <stop offset="55%" stopColor="#B44DFF" />
          <stop offset="100%" stopColor="#6B21A8" />
        </radialGradient>
      </defs>
      <circle cx="24" cy="24" r="21" fill="url(#p5bg)" />
      <ellipse cx="24" cy="19" rx="18" ry="4" fill="#F0ABFC" opacity="0.18" transform="rotate(-8 24 19)" />
      <ellipse cx="24" cy="30" rx="16" ry="3.5" fill="#A855F7" opacity="0.28" transform="rotate(5 24 30)" />
      <circle cx="29" cy="21" r="6" fill="none" stroke="#E879F9" strokeWidth="1.5" opacity="0.38" />
      <circle cx="29" cy="21" r="3" fill="#C026D3" opacity="0.32" />
      <circle cx="24" cy="24" r="21" fill="none" stroke="#E879F9" strokeWidth="2" opacity="0.18" />
      <ellipse cx="16" cy="14" rx="7" ry="5" fill="white" opacity="0.12" />
    </svg>
  );
}

// ── Grade 6 — Saturnia (Ringed gas planet, orange-brown with prominent ring) ──
export function PlanetSaturnia({ size = 48 }: PP) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <defs>
        <radialGradient id="p6bg" cx="40%" cy="28%" r="65%">
          <stop offset="0%" stopColor="#FFCC88" />
          <stop offset="55%" stopColor="#FF9500" />
          <stop offset="100%" stopColor="#A05500" />
        </radialGradient>
      </defs>
      {/* Ring behind */}
      <ellipse cx="24" cy="27" rx="22" ry="6" fill="none" stroke="#FFD700" strokeWidth="3" opacity="0.35" />
      {/* Planet */}
      <circle cx="24" cy="24" r="17" fill="url(#p6bg)" />
      <ellipse cx="24" cy="19" rx="16" ry="3" fill="#A05500" opacity="0.22" />
      <ellipse cx="24" cy="27" rx="15" ry="2.5" fill="#A05500" opacity="0.18" />
      {/* Ring front arc */}
      <path d="M 3,27 Q 24,21 45,27" fill="none" stroke="#FFD700" strokeWidth="3" opacity="0.45" />
      <ellipse cx="17" cy="15" rx="5" ry="3.5" fill="white" opacity="0.14" />
    </svg>
  );
}

// ── Grade 7 — Verdis (Jungle world, emerald green with mist) ─────────────────
export function PlanetVerdis({ size = 48 }: PP) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <defs>
        <radialGradient id="p7bg" cx="38%" cy="28%" r="65%">
          <stop offset="0%" stopColor="#34D399" />
          <stop offset="55%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#064E3B" />
        </radialGradient>
      </defs>
      <circle cx="24" cy="24" r="21" fill="url(#p7bg)" />
      <ellipse cx="18" cy="18" rx="8" ry="6" fill="#065F46" opacity="0.4" transform="rotate(-10 18 18)" />
      <ellipse cx="32" cy="28" rx="7" ry="5" fill="#064E3B" opacity="0.35" transform="rotate(8 32 28)" />
      <ellipse cx="20" cy="33" rx="5" ry="4" fill="#065F46" opacity="0.3" />
      <ellipse cx="24" cy="22" rx="20" ry="2.5" fill="#A7F3D0" opacity="0.14" />
      <ellipse cx="24" cy="33" rx="18" ry="2" fill="#A7F3D0" opacity="0.1" />
      <circle cx="24" cy="24" r="21" fill="none" stroke="#6EE7B7" strokeWidth="2" opacity="0.22" />
      <ellipse cx="16" cy="14" rx="6" ry="4" fill="white" opacity="0.13" />
    </svg>
  );
}

// ── Grade 8 — Cosmara (Crystal legendary planet, pink-violet with sparkles) ───
export function PlanetCosmara({ size = 48 }: PP) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <defs>
        <radialGradient id="p8bg" cx="35%" cy="25%" r="70%">
          <stop offset="0%" stopColor="#FBCFE8" />
          <stop offset="50%" stopColor="#E879F9" />
          <stop offset="100%" stopColor="#86198F" />
        </radialGradient>
      </defs>
      <circle cx="24" cy="24" r="21" fill="url(#p8bg)" />
      <polygon points="24,5 30,16 24,14 18,16" fill="white" opacity="0.15" />
      <polygon points="24,43 30,32 24,34 18,32" fill="white" opacity="0.1" />
      <polygon points="5,24 16,18 14,24 16,30" fill="white" opacity="0.12" />
      <polygon points="43,24 32,18 34,24 32,30" fill="white" opacity="0.1" />
      <circle cx="14" cy="12" r="1.5" fill="white" opacity="0.75" />
      <circle cx="36" cy="15" r="1" fill="white" opacity="0.65" />
      <circle cx="38" cy="35" r="1.5" fill="white" opacity="0.55" />
      <circle cx="12" cy="35" r="1" fill="white" opacity="0.65" />
      <circle cx="28" cy="8" r="1" fill="white" opacity="0.6" />
      <circle cx="24" cy="24" r="21" fill="none" stroke="#F0ABFC" strokeWidth="2" opacity="0.28" />
      <ellipse cx="16" cy="14" rx="7" ry="5" fill="white" opacity="0.15" />
    </svg>
  );
}

// ── Exports ───────────────────────────────────────────────────────────────────
export const GRADE_PLANETS = [
  PlanetTerra,    // 1
  PlanetAquaria,  // 2
  PlanetIgnos,    // 3
  PlanetAureon,   // 4
  PlanetVioletis, // 5
  PlanetSaturnia, // 6
  PlanetVerdis,   // 7
  PlanetCosmara,  // 8
];

export const PLANET_NAMES: Record<string, string[]> = {
  en: ["Terra", "Aquaria", "Ignos", "Aureon", "Violetis", "Saturnia", "Verdis", "Cosmara"],
  hu: ["Terra", "Aquaria", "Ignos", "Aureon", "Violetis", "Saturnia", "Verdis", "Kozmara"],
  de: ["Terra", "Aquaria", "Ignos", "Aureon", "Violetis", "Saturnia", "Verdis", "Kosmara"],
  ro: ["Terra", "Aquaria", "Ignos", "Aureon", "Violetis", "Saturnia", "Verdis", "Cosmara"],
};
