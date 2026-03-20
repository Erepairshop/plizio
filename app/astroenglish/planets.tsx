// app/astroenglish/planets.tsx
// SVG planet illustrations — one per grade (1–8), English Language Arts themed.
// viewBox: 0 0 48 48 — render at any size via the `size` prop.
// Gradient IDs use "pe" prefix to avoid collision with other planet prefixes.

type PP = { size?: number };

// ── Grade 1 — Phonicia (Phonics/alphabet world, pink-magenta with ABC letters) ─
export function PlanetPhonicia({ size = 48 }: PP) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <defs>
        <radialGradient id="pe1bg" cx="38%" cy="28%" r="65%">
          <stop offset="0%" stopColor="#FF79A8" />
          <stop offset="55%" stopColor="#FF2D78" />
          <stop offset="100%" stopColor="#A0003C" />
        </radialGradient>
      </defs>
      <circle cx="24" cy="24" r="21" fill="url(#pe1bg)" />
      {/* Letter A engraving */}
      <text x="13" y="22" fontSize="8" fill="white" opacity="0.22" fontFamily="serif" fontWeight="bold">A</text>
      {/* Letter B engraving */}
      <text x="24" y="31" fontSize="7" fill="white" opacity="0.18" fontFamily="serif" fontWeight="bold">B</text>
      {/* Letter C engraving */}
      <text x="28" y="18" fontSize="6" fill="white" opacity="0.15" fontFamily="serif" fontWeight="bold">C</text>
      {/* Phonics wave bands */}
      <ellipse cx="24" cy="17" rx="20" ry="2.5" fill="#FF79A8" opacity="0.22" />
      <ellipse cx="24" cy="31" rx="19" ry="2" fill="#FF79A8" opacity="0.18" />
      {/* Sound wave dots */}
      <circle cx="12" cy="26" r="2.5" fill="white" opacity="0.15" />
      <circle cx="36" cy="22" r="2" fill="white" opacity="0.12" />
      {/* Atmosphere glow */}
      <ellipse cx="16" cy="14" rx="7" ry="5" fill="white" opacity="0.13" />
      {/* Ring stroke */}
      <circle cx="24" cy="24" r="21" fill="none" stroke="#FF79A8" strokeWidth="2" opacity="0.22" />
    </svg>
  );
}

// ── Grade 2 — Lexica (Vocabulary/words world, blue with golden word-shores) ────
export function PlanetLexica({ size = 48 }: PP) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <defs>
        <radialGradient id="pe2bg" cx="36%" cy="28%" r="65%">
          <stop offset="0%" stopColor="#93C5FD" />
          <stop offset="55%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#1E3A8A" />
        </radialGradient>
      </defs>
      <circle cx="24" cy="24" r="21" fill="url(#pe2bg)" />
      {/* Wave bands — word ocean */}
      <ellipse cx="24" cy="19" rx="19" ry="2.5" fill="#93C5FD" opacity="0.18" />
      <ellipse cx="24" cy="26" rx="20" ry="2" fill="#1D4ED8" opacity="0.25" />
      <ellipse cx="24" cy="33" rx="17" ry="1.5" fill="#93C5FD" opacity="0.14" />
      {/* Golden word-shore landmass */}
      <ellipse cx="19" cy="22" rx="6" ry="4" fill="#F59E0B" opacity="0.55" transform="rotate(-12 19 22)" />
      <ellipse cx="31" cy="28" rx="4" ry="3" fill="#FBBF24" opacity="0.45" transform="rotate(8 31 28)" />
      {/* Word scroll lines on shore */}
      <path d="M 14 21 Q 19 19 24 21" stroke="white" strokeWidth="0.8" opacity="0.3" fill="none" />
      <path d="M 27 27 Q 31 25 35 27" stroke="white" strokeWidth="0.8" opacity="0.25" fill="none" />
      {/* Atmosphere glow */}
      <ellipse cx="16" cy="14" rx="6" ry="4" fill="white" opacity="0.13" />
      <circle cx="24" cy="24" r="21" fill="none" stroke="#60A5FA" strokeWidth="2" opacity="0.2" />
    </svg>
  );
}

// ── Grade 3 — Syntaxia (Sentence/grammar crystal planet, emerald facets) ────────
export function PlanetSyntaxia({ size = 48 }: PP) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <defs>
        <radialGradient id="pe3bg" cx="38%" cy="28%" r="65%">
          <stop offset="0%" stopColor="#6EE7B7" />
          <stop offset="55%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#064E3B" />
        </radialGradient>
      </defs>
      <circle cx="24" cy="24" r="21" fill="url(#pe3bg)" />
      {/* Crystal facet structures */}
      <polygon points="24,8 31,17 24,15 17,17" fill="#A7F3D0" opacity="0.28" />
      <polygon points="24,40 31,31 24,33 17,31" fill="#6EE7B7" opacity="0.18" />
      {/* Side crystal formations */}
      <polygon points="9,24 16,19 15,24 16,29" fill="#A7F3D0" opacity="0.2" />
      <polygon points="39,24 32,19 33,24 32,29" fill="#A7F3D0" opacity="0.16" />
      {/* Inner facet gleam */}
      <polygon points="24,16 28,21 24,23 20,21" fill="white" opacity="0.14" />
      {/* Darker crystal shadows */}
      <ellipse cx="24" cy="28" rx="12" ry="5" fill="#065F46" opacity="0.25" />
      {/* Sparkle dots */}
      <circle cx="18" cy="17" r="1" fill="white" opacity="0.7" />
      <circle cx="32" cy="20" r="0.8" fill="white" opacity="0.6" />
      <circle cx="29" cy="33" r="1" fill="white" opacity="0.5" />
      {/* Atmosphere glow */}
      <ellipse cx="16" cy="14" rx="6" ry="4" fill="white" opacity="0.12" />
      <circle cx="24" cy="24" r="21" fill="none" stroke="#6EE7B7" strokeWidth="2" opacity="0.2" />
    </svg>
  );
}

// ── Grade 4 — Rhetorica (Rhetoric/writing planet, amber with quill and scrolls) ──
export function PlanetRhetorica({ size = 48 }: PP) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <defs>
        <radialGradient id="pe4bg" cx="38%" cy="28%" r="65%">
          <stop offset="0%" stopColor="#FCD34D" />
          <stop offset="55%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#92400E" />
        </radialGradient>
      </defs>
      <circle cx="24" cy="24" r="21" fill="url(#pe4bg)" />
      {/* Scroll/parchment shapes on surface */}
      <rect x="17" y="18" width="4" height="6" rx="0.5" fill="#92400E" opacity="0.35" />
      <rect x="22" y="16" width="4" height="8" rx="0.5" fill="#92400E" opacity="0.4" />
      <rect x="27" y="18" width="4" height="6" rx="0.5" fill="#92400E" opacity="0.35" />
      {/* Quill tip shapes */}
      <rect x="17" y="16" width="2" height="3" fill="#92400E" opacity="0.3" />
      <rect x="20" y="16" width="2" height="3" fill="#92400E" opacity="0.3" />
      <rect x="22" y="14" width="2" height="3" fill="#92400E" opacity="0.35" />
      <rect x="25" y="14" width="2" height="3" fill="#92400E" opacity="0.35" />
      <rect x="27" y="16" width="2" height="3" fill="#92400E" opacity="0.3" />
      <rect x="30" y="16" width="2" height="3" fill="#92400E" opacity="0.3" />
      {/* Ground horizon */}
      <ellipse cx="24" cy="26" rx="18" ry="3" fill="#B45309" opacity="0.28" />
      {/* Warm bands */}
      <ellipse cx="24" cy="33" rx="16" ry="2" fill="#FCD34D" opacity="0.18" />
      {/* Atmosphere glow */}
      <ellipse cx="16" cy="14" rx="7" ry="5" fill="white" opacity="0.14" />
      <circle cx="24" cy="24" r="21" fill="none" stroke="#FCD34D" strokeWidth="2" opacity="0.22" />
    </svg>
  );
}

// ── Grade 5 — Literaria (Literature/story planet, indigo with open book) ────────
export function PlanetLiteraria({ size = 48 }: PP) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <defs>
        <radialGradient id="pe5bg" cx="38%" cy="28%" r="65%">
          <stop offset="0%" stopColor="#A5B4FC" />
          <stop offset="55%" stopColor="#6366F1" />
          <stop offset="100%" stopColor="#1E1B4B" />
        </radialGradient>
      </defs>
      <circle cx="24" cy="24" r="21" fill="url(#pe5bg)" />
      {/* Open book silhouette */}
      <rect x="13" y="22" width="6" height="7" rx="0.5" fill="#1E1B4B" opacity="0.45" />
      <rect x="20" y="19" width="8" height="10" rx="0.5" fill="#1E1B4B" opacity="0.5" />
      <rect x="29" y="22" width="6" height="7" rx="0.5" fill="#1E1B4B" opacity="0.45" />
      {/* Book spine/pages */}
      <rect x="14" y="17" width="4" height="6" rx="0.3" fill="#312E81" opacity="0.55" />
      <rect x="30" y="17" width="4" height="6" rx="0.3" fill="#312E81" opacity="0.55" />
      {/* Reading light beams */}
      <line x1="16" y1="17" x2="16" y2="12" stroke="#818CF8" strokeWidth="0.8" opacity="0.6" />
      <line x1="32" y1="17" x2="32" y2="12" stroke="#818CF8" strokeWidth="0.8" opacity="0.6" />
      <ellipse cx="16" cy="11.5" rx="2" ry="1.2" fill="#818CF8" opacity="0.55" />
      <ellipse cx="32" cy="11.5" rx="2" ry="1.2" fill="#818CF8" opacity="0.55" />
      {/* Atmospheric cloud band */}
      <ellipse cx="24" cy="33" rx="17" ry="2.5" fill="#818CF8" opacity="0.14" />
      {/* Atmosphere glow */}
      <ellipse cx="16" cy="14" rx="6" ry="4" fill="white" opacity="0.11" />
      <circle cx="24" cy="24" r="21" fill="none" stroke="#818CF8" strokeWidth="2" opacity="0.2" />
    </svg>
  );
}

// ── Grade 6 — Analytica (Analysis/critical thinking planet, orange with patterns) ─
export function PlanetAnalytica({ size = 48 }: PP) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <defs>
        <radialGradient id="pe6bg" cx="38%" cy="28%" r="65%">
          <stop offset="0%" stopColor="#FDBA74" />
          <stop offset="55%" stopColor="#FF9500" />
          <stop offset="100%" stopColor="#7C2D12" />
        </radialGradient>
      </defs>
      <circle cx="24" cy="24" r="21" fill="url(#pe6bg)" />
      {/* Analytical flow lines */}
      <path d="M 10,28 Q 18,14 28,20 Q 38,26 32,36" fill="none" stroke="#FEF3C7" strokeWidth="2" opacity="0.22" strokeLinecap="round" />
      <path d="M 14,20 Q 22,30 30,22 Q 36,16 32,26" fill="none" stroke="#FCD34D" strokeWidth="1.5" opacity="0.18" strokeLinecap="round" />
      {/* Analysis dot clusters */}
      <circle cx="20" cy="20" r="2.5" fill="#FEF3C7" opacity="0.2" />
      <circle cx="30" cy="27" r="2" fill="#FEF3C7" opacity="0.16" />
      <circle cx="25" cy="33" r="1.5" fill="#FEF3C7" opacity="0.15" />
      {/* Grid pattern bands */}
      <ellipse cx="24" cy="17" rx="19" ry="2" fill="#B45309" opacity="0.2" />
      <ellipse cx="24" cy="35" rx="15" ry="1.8" fill="#B45309" opacity="0.16" />
      {/* Atmosphere glow */}
      <ellipse cx="16" cy="14" rx="6" ry="4" fill="white" opacity="0.14" />
      <circle cx="24" cy="24" r="21" fill="none" stroke="#FDBA74" strokeWidth="2" opacity="0.22" />
    </svg>
  );
}

// ── Grade 7 — Dialecta (Advanced language/debate planet, purple with speech patterns) ─
export function PlanetDialecta({ size = 48 }: PP) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <defs>
        <radialGradient id="pe7bg" cx="36%" cy="28%" r="65%">
          <stop offset="0%" stopColor="#E9D5FF" />
          <stop offset="50%" stopColor="#B44DFF" />
          <stop offset="100%" stopColor="#5B21B6" />
        </radialGradient>
      </defs>
      <circle cx="24" cy="24" r="21" fill="url(#pe7bg)" />
      {/* Speech bubble shapes on surface */}
      <rect x="13" y="17" width="10" height="7" rx="2" fill="white" opacity="0.14" />
      <polygon points="15,24 17,27 19,24" fill="white" opacity="0.12" />
      <rect x="25" y="22" width="8" height="5" rx="1.5" fill="white" opacity="0.1" />
      <polygon points="27,27 29,30 31,27" fill="white" opacity="0.09" />
      {/* Debate/dialogue ellipses */}
      <ellipse cx="20" cy="21" rx="1.5" ry="2" fill="#9333EA" opacity="0.45" />
      <ellipse cx="26" cy="25" rx="1.2" ry="1.6" fill="#9333EA" opacity="0.4" />
      {/* Ornate swirl bands */}
      <ellipse cx="24" cy="16" rx="18" ry="2.5" fill="#C084FC" opacity="0.15" />
      <ellipse cx="24" cy="34" rx="16" ry="2" fill="#C084FC" opacity="0.12" />
      {/* Sparkle dots */}
      <circle cx="11" cy="22" r="1.2" fill="white" opacity="0.55" />
      <circle cx="37" cy="26" r="1" fill="white" opacity="0.5" />
      <circle cx="30" cy="12" r="1" fill="white" opacity="0.45" />
      {/* Atmosphere glow */}
      <ellipse cx="16" cy="14" rx="7" ry="5" fill="white" opacity="0.13" />
      <circle cx="24" cy="24" r="21" fill="none" stroke="#C084FC" strokeWidth="2" opacity="0.22" />
    </svg>
  );
}

// ── Grade 8 — Eloquia (Mastery/eloquence planet, pink crystal with shining veins) ─
export function PlanetEloquia({ size = 48 }: PP) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <defs>
        <radialGradient id="pe8bg" cx="36%" cy="28%" r="65%">
          <stop offset="0%" stopColor="#F5D0FE" />
          <stop offset="50%" stopColor="#E879F9" />
          <stop offset="100%" stopColor="#A21CAF" />
        </radialGradient>
      </defs>
      <circle cx="24" cy="24" r="21" fill="url(#pe8bg)" />
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
  PlanetPhonicia,  // 1
  PlanetLexica,    // 2
  PlanetSyntaxia,  // 3
  PlanetRhetorica, // 4
  PlanetLiteraria, // 5
  PlanetAnalytica, // 6
  PlanetDialecta,  // 7
  PlanetEloquia,   // 8
];

export const PLANET_NAMES: Record<string, string[]> = {
  en: ["Phonicia", "Lexica", "Syntaxia", "Rhetorica", "Literaria", "Analytica", "Dialecta", "Eloquia"],
  hu: ["Phonicia", "Lexica", "Syntaxia", "Rhetorica", "Literaria", "Analytica", "Dialecta", "Eloquia"],
  de: ["Phonicia", "Lexica", "Syntaxia", "Rhetorica", "Literaria", "Analytica", "Dialecta", "Eloquia"],
  ro: ["Phonicia", "Lexica", "Syntaxia", "Rhetorica", "Literaria", "Analytica", "Dialecta", "Eloquia"],
};
