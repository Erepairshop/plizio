// app/astromagyar/planets.tsx
// SVG planet illustrations — one per grade (1–8), Hungarian Language themed.
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

// ── Grade 2 — Szókinesia (Word planet, cyan with word molecules) ─
export function PlanetSzokinesia({ size = 48 }: PP) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <defs>
        <radialGradient id="pm2bg" cx="38%" cy="28%" r="65%">
          <stop offset="0%" stopColor="#67E8F9" />
          <stop offset="55%" stopColor="#00D4FF" />
          <stop offset="100%" stopColor="#0369A1" />
        </radialGradient>
      </defs>
      <circle cx="24" cy="24" r="21" fill="url(#pm2bg)" />
      {/* Word molecule clusters */}
      <circle cx="16" cy="18" r="2.5" fill="white" opacity="0.25" />
      <circle cx="20" cy="16" r="2" fill="white" opacity="0.2" />
      <circle cx="24" cy="20" r="1.5" fill="white" opacity="0.18" />
      <line x1="16" y1="18" x2="20" y2="16" stroke="white" strokeWidth="1" opacity="0.15" />
      <circle cx="28" cy="28" r="2" fill="white" opacity="0.22" />
      <circle cx="32" cy="26" r="1.8" fill="white" opacity="0.2" />
      <line x1="28" y1="28" x2="32" y2="26" stroke="white" strokeWidth="1" opacity="0.15" />
      {/* Wave bands */}
      <ellipse cx="24" cy="16" rx="19" ry="2.5" fill="#06B6D4" opacity="0.15" />
      <ellipse cx="24" cy="34" rx="17" ry="2" fill="#06B6D4" opacity="0.12" />
      {/* Atmosphere glow */}
      <ellipse cx="16" cy="14" rx="7" ry="5" fill="white" opacity="0.13" />
      <circle cx="24" cy="24" r="21" fill="none" stroke="#06B6D4" strokeWidth="2" opacity="0.22" />
    </svg>
  );
}

// ── Grade 3 — Mondatia (Sentence planet, green with flowing text patterns) ─
export function PlanetMondatia({ size = 48 }: PP) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <defs>
        <radialGradient id="pm3bg" cx="38%" cy="28%" r="65%">
          <stop offset="0%" stopColor="#6EE7B7" />
          <stop offset="55%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#065F46" />
        </radialGradient>
      </defs>
      <circle cx="24" cy="24" r="21" fill="url(#pm3bg)" />
      {/* Flowing sentence lines */}
      <path d="M 12,20 Q 18,16 24,18 Q 30,20 36,18" stroke="white" strokeWidth="1.5" fill="none" opacity="0.2" />
      <path d="M 14,26 Q 20,24 26,25 Q 32,26 38,24" stroke="white" strokeWidth="1.5" fill="none" opacity="0.18" />
      <path d="M 16,32 Q 22,30 28,31 Q 34,32 40,30" stroke="white" strokeWidth="1.2" fill="none" opacity="0.16" />
      {/* Punctuation dots */}
      <circle cx="13" cy="21" r="1.2" fill="white" opacity="0.22" />
      <circle cx="35" cy="19" r="1" fill="white" opacity="0.2" />
      <circle cx="40" cy="25" r="1" fill="white" opacity="0.18" />
      {/* Structural bands */}
      <ellipse cx="24" cy="17" rx="19" ry="2" fill="#059669" opacity="0.15" />
      <ellipse cx="24" cy="35" rx="16" ry="1.8" fill="#059669" opacity="0.12" />
      {/* Atmosphere glow */}
      <ellipse cx="16" cy="14" rx="7" ry="5" fill="white" opacity="0.13" />
      <circle cx="24" cy="24" r="21" fill="none" stroke="#059669" strokeWidth="2" opacity="0.22" />
    </svg>
  );
}

// ── Grade 4 — Aureon (Gold planet with harmonic patterns) ─
export function PlanetAureon({ size = 48 }: PP) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <defs>
        <radialGradient id="pm4bg" cx="38%" cy="28%" r="65%">
          <stop offset="0%" stopColor="#FEF3C7" />
          <stop offset="55%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#92400E" />
        </radialGradient>
      </defs>
      <circle cx="24" cy="24" r="21" fill="url(#pm4bg)" />
      {/* Harmonic rings */}
      <circle cx="24" cy="24" r="8" fill="none" stroke="white" strokeWidth="1" opacity="0.18" />
      <circle cx="24" cy="24" r="12" fill="none" stroke="white" strokeWidth="0.8" opacity="0.15" />
      <circle cx="24" cy="24" r="5" fill="none" stroke="white" strokeWidth="0.8" opacity="0.15" />
      {/* Golden harmonies */}
      <path d="M 16,22 Q 20,18 24,20 Q 28,22 32,20" stroke="white" strokeWidth="1" fill="none" opacity="0.22" />
      <path d="M 14,28 Q 20,26 24,28 Q 28,30 34,28" stroke="white" strokeWidth="1" fill="none" opacity="0.18" />
      {/* Light sparkles */}
      <circle cx="15" cy="20" r="1.3" fill="white" opacity="0.4" />
      <circle cx="34" cy="24" r="1.1" fill="white" opacity="0.35" />
      {/* Band patterns */}
      <ellipse cx="24" cy="16" rx="18" ry="2" fill="#FBBF24" opacity="0.15" />
      <ellipse cx="24" cy="34" rx="15" ry="1.8" fill="#FBBF24" opacity="0.12" />
      {/* Atmosphere glow */}
      <ellipse cx="16" cy="14" rx="7" ry="5" fill="white" opacity="0.13" />
      <circle cx="24" cy="24" r="21" fill="none" stroke="#FBBF24" strokeWidth="2" opacity="0.22" />
    </svg>
  );
}

// ── Grade 5 — Nyelvtania (Grammar planet, indigo with structured lattice) ─
export function PlanetNyelv({ size = 48 }: PP) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <defs>
        <radialGradient id="pm5bg" cx="38%" cy="28%" r="65%">
          <stop offset="0%" stopColor="#C7D2FE" />
          <stop offset="55%" stopColor="#6366F1" />
          <stop offset="100%" stopColor="#3730A3" />
        </radialGradient>
      </defs>
      <circle cx="24" cy="24" r="21" fill="url(#pm5bg)" />
      {/* Grammatical lattice structure */}
      <line x1="12" y1="16" x2="36" y2="16" stroke="white" strokeWidth="0.8" opacity="0.15" />
      <line x1="12" y1="24" x2="36" y2="24" stroke="white" strokeWidth="0.8" opacity="0.15" />
      <line x1="12" y1="32" x2="36" y2="32" stroke="white" strokeWidth="0.8" opacity="0.15" />
      <line x1="16" y1="12" x2="16" y2="36" stroke="white" strokeWidth="0.8" opacity="0.15" />
      <line x1="24" y1="12" x2="24" y2="36" stroke="white" strokeWidth="0.8" opacity="0.15" />
      <line x1="32" y1="12" x2="32" y2="36" stroke="white" strokeWidth="0.8" opacity="0.15" />
      {/* Grammar junction dots */}
      <circle cx="16" cy="16" r="1.5" fill="#818CF8" opacity="0.35" />
      <circle cx="24" cy="24" r="1.8" fill="#818CF8" opacity="0.4" />
      <circle cx="32" cy="32" r="1.5" fill="#818CF8" opacity="0.35" />
      {/* Bands */}
      <ellipse cx="24" cy="17" rx="18" ry="2" fill="#4F46E5" opacity="0.15" />
      <ellipse cx="24" cy="34" rx="16" ry="1.8" fill="#4F46E5" opacity="0.12" />
      {/* Atmosphere glow */}
      <ellipse cx="16" cy="14" rx="7" ry="5" fill="white" opacity="0.13" />
      <circle cx="24" cy="24" r="21" fill="none" stroke="#4F46E5" strokeWidth="2" opacity="0.22" />
    </svg>
  );
}

// ── Grade 6 — Irodalmia (Literature planet, orange with open book patterns) ─
export function PlanetIrodalmia({ size = 48 }: PP) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <defs>
        <radialGradient id="pm6bg" cx="38%" cy="28%" r="65%">
          <stop offset="0%" stopColor="#FED7AA" />
          <stop offset="55%" stopColor="#FF9500" />
          <stop offset="100%" stopColor="#7C2D12" />
        </radialGradient>
      </defs>
      <circle cx="24" cy="24" r="21" fill="url(#pm6bg)" />
      {/* Open book shape */}
      <path d="M 20,18 L 24,16 L 28,18" stroke="white" strokeWidth="1.5" fill="none" opacity="0.22" />
      <path d="M 20,18 L 20,30 L 24,32" stroke="white" strokeWidth="1.2" fill="none" opacity="0.2" />
      <path d="M 28,18 L 28,30 L 24,32" stroke="white" strokeWidth="1.2" fill="none" opacity="0.2" />
      {/* Text lines on pages */}
      <line x1="16" y1="22" x2="22" y2="22" stroke="white" strokeWidth="0.8" opacity="0.16" />
      <line x1="16" y1="26" x2="22" y2="26" stroke="white" strokeWidth="0.8" opacity="0.14" />
      <line x1="26" y1="22" x2="32" y2="22" stroke="white" strokeWidth="0.8" opacity="0.16" />
      <line x1="26" y1="26" x2="32" y2="26" stroke="white" strokeWidth="0.8" opacity="0.14" />
      {/* Decorative page accent */}
      <circle cx="12" cy="20" r="1.2" fill="white" opacity="0.18" />
      <circle cx="36" cy="28" r="1" fill="white" opacity="0.16" />
      {/* Bands */}
      <ellipse cx="24" cy="16" rx="18" ry="2" fill="#EA580C" opacity="0.15" />
      <ellipse cx="24" cy="34" rx="16" ry="1.8" fill="#EA580C" opacity="0.12" />
      {/* Atmosphere glow */}
      <ellipse cx="16" cy="14" rx="7" ry="5" fill="white" opacity="0.13" />
      <circle cx="24" cy="24" r="21" fill="none" stroke="#EA580C" strokeWidth="2" opacity="0.22" />
    </svg>
  );
}

// ── Grade 7 — Stilisztia (Style planet, purple with flowing elegant patterns) ─
export function PlanetStilisztia({ size = 48 }: PP) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <defs>
        <radialGradient id="pm7bg" cx="36%" cy="28%" r="65%">
          <stop offset="0%" stopColor="#E9D5FF" />
          <stop offset="50%" stopColor="#B44DFF" />
          <stop offset="100%" stopColor="#5B21B6" />
        </radialGradient>
      </defs>
      <circle cx="24" cy="24" r="21" fill="url(#pm7bg)" />
      {/* Elegant flowing curves */}
      <path d="M 12,22 Q 18,14 24,18 Q 30,22 36,20" stroke="white" strokeWidth="1.2" fill="none" opacity="0.22" />
      <path d="M 14,26 Q 20,32 24,28 Q 28,24 34,30" stroke="white" strokeWidth="1.2" fill="none" opacity="0.2" />
      {/* Style flourishes */}
      <circle cx="18" cy="18" r="1.5" fill="white" opacity="0.2" />
      <circle cx="30" cy="22" r="1.3" fill="white" opacity="0.18" />
      <circle cx="22" cy="30" r="1.2" fill="white" opacity="0.18" />
      {/* Ornamental swirl bands */}
      <ellipse cx="24" cy="16" rx="18" ry="2.5" fill="#C084FC" opacity="0.15" />
      <ellipse cx="24" cy="34" rx="16" ry="2" fill="#C084FC" opacity="0.12" />
      {/* Sparkle accents */}
      <circle cx="11" cy="20" r="1" fill="white" opacity="0.45" />
      <circle cx="37" cy="26" r="0.9" fill="white" opacity="0.4" />
      {/* Atmosphere glow */}
      <ellipse cx="16" cy="14" rx="7" ry="5" fill="white" opacity="0.13" />
      <circle cx="24" cy="24" r="21" fill="none" stroke="#C084FC" strokeWidth="2" opacity="0.22" />
    </svg>
  );
}

// ── Grade 8 — Eloquia (Eloquence planet, pink crystal with mastery shine) ─
export function PlanetEloquia({ size = 48 }: PP) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <defs>
        <radialGradient id="pm8bg" cx="36%" cy="28%" r="65%">
          <stop offset="0%" stopColor="#F5D0FE" />
          <stop offset="50%" stopColor="#E879F9" />
          <stop offset="100%" stopColor="#A21CAF" />
        </radialGradient>
      </defs>
      <circle cx="24" cy="24" r="21" fill="url(#pm8bg)" />
      {/* Crystal facets on surface */}
      <polygon points="16,14 22,10 24,17" fill="white" opacity="0.13" />
      <polygon points="26,20 34,18 30,25" fill="white" opacity="0.11" />
      <polygon points="14,26 20,28 17,33" fill="white" opacity="0.09" />
      {/* Glowing core veins */}
      <path d="M14,22 Q18,20 22,23 Q26,26 30,24" stroke="#F0ABFC" strokeWidth="1.2" fill="none" opacity="0.35" />
      <path d="M18,30 Q22,28 26,31 Q30,34 34,31" stroke="#F0ABFC" strokeWidth="1" fill="none" opacity="0.3" />
      {/* Crystal sparkles */}
      <circle cx="18" cy="16" r="1.8" fill="white" opacity="0.55" />
      <circle cx="32" cy="20" r="1.3" fill="white" opacity="0.5" />
      <circle cx="26" cy="34" r="1.1" fill="white" opacity="0.45" />
      <circle cx="12" cy="28" r="0.9" fill="white" opacity="0.4" />
      {/* Atmosphere glow */}
      <ellipse cx="16" cy="14" rx="7" ry="5" fill="white" opacity="0.13" />
      <circle cx="24" cy="24" r="21" fill="none" stroke="#F0ABFC" strokeWidth="2" opacity="0.22" />
    </svg>
  );
}

// ── Exports ───────────────────────────────────────────────────────────────────
export const GRADE_PLANETS = [
  PlanetBetuuria,   // 1
  PlanetSzokinesia, // 2
  PlanetMondatia,   // 3
  PlanetAureon,     // 4
  PlanetNyelv,      // 5
  PlanetIrodalmia,  // 6
  PlanetStilisztia, // 7
  PlanetEloquia,    // 8
];

export const PLANET_NAMES: Record<string, string[]> = {
  en: ["Betűria", "Szókinesia", "Mondatia", "Aureon", "Nyelvtania", "Irodalmia", "Stilisztia", "Eloquia"],
  hu: ["Betűria", "Szókinesia", "Mondatia", "Aureon", "Nyelvtania", "Irodalmia", "Stilisztia", "Eloquia"],
  de: ["Betűria", "Szókinesia", "Mondatia", "Aureon", "Nyelvtania", "Irodalmia", "Stilisztia", "Eloquia"],
  ro: ["Betűria", "Szókinesia", "Mondatia", "Aureon", "Nyelvtania", "Irodalmia", "Stilisztia", "Eloquia"],
};
