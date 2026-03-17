// SVG Island illustrations for AstroDeutsch K4 map
// Each island is a unique floating fantasy landmass matching its theme
// viewBox: "0 0 80 80", renders at 48-60px on mobile

type IP = { size?: number };

// i1 — Kasus1: Blue target island with Nom/Akk bullseye and arrows
export function K4IslandKasus1({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Glow beneath */}
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(59,130,246,0.2)" />
      {/* Rocky underside */}
      <path d="M22,50 Q26,63 31,59 Q37,68 43,62 Q49,68 54,59 Q59,63 58,50Z" fill="#0A1A3A" />
      <path d="M27,53 Q29,61 32,58Z" fill="#061228" />
      <path d="M49,53 Q52,61 54,57Z" fill="#061228" />
      {/* Island body */}
      <ellipse cx="40" cy="48" rx="20" ry="9" fill="#1A3A7A" />
      {/* Grassy top surface */}
      <ellipse cx="40" cy="42" rx="20" ry="8" fill="#1E4FAA" />
      <ellipse cx="40" cy="39" rx="18" ry="6" fill="#2563EB" />
      {/* Bullseye target — outer ring */}
      <circle cx="40" cy="31" r="10" fill="rgba(255,255,255,0.15)" stroke="#93C5FD" strokeWidth="1" />
      {/* Middle ring */}
      <circle cx="40" cy="31" r="7" fill="rgba(59,130,246,0.4)" stroke="#60A5FA" strokeWidth="1" />
      {/* Inner ring */}
      <circle cx="40" cy="31" r="4" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="1" />
      {/* Bull dot */}
      <circle cx="40" cy="31" r="1.5" fill="#1D4ED8" />
      {/* Arrow from left hitting target */}
      <line x1="18" y1="31" x2="36" y2="31" stroke="#FCD34D" strokeWidth="1.5" />
      <polygon points="36,28.5 36,33.5 39,31" fill="#FCD34D" />
      {/* Arrow from upper right, glancing */}
      <line x1="56" y1="20" x2="44" y2="28" stroke="#FCD34D" strokeWidth="1.2" />
      <polygon points="44,25.5 46,30 48,26.5" fill="#FCD34D" />
      {/* "Nom" label */}
      <text x="22" y="43" textAnchor="middle" fontSize="5.5" fontWeight="bold" fill="#BFDBFE" fontFamily="monospace">Nom</text>
      {/* "Akk" label */}
      <text x="58" y="43" textAnchor="middle" fontSize="5.5" fontWeight="bold" fill="#BFDBFE" fontFamily="monospace">Akk</text>
      {/* Sparkles */}
      <text x="14" y="28" fontSize="7" fill="rgba(59,130,246,0.65)">✦</text>
      <text x="58" y="52" fontSize="6" fill="rgba(147,197,253,0.55)">✦</text>
    </svg>
  );
}

// i2 — Kasus2: Red clipboard island with Dat/Gen case table
export function K4IslandKasus2({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Glow beneath */}
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(239,68,68,0.2)" />
      {/* Rocky underside */}
      <path d="M22,50 Q27,63 32,59 Q38,68 44,62 Q50,68 55,59 Q60,63 58,50Z" fill="#3A0A0A" />
      <path d="M27,53 Q29,62 32,58Z" fill="#280606" />
      <path d="M49,53 Q52,62 54,57Z" fill="#280606" />
      {/* Island body */}
      <ellipse cx="40" cy="48" rx="20" ry="9" fill="#7A1A1A" />
      {/* Top surface */}
      <ellipse cx="40" cy="42" rx="20" ry="8" fill="#991B1B" />
      <ellipse cx="40" cy="39" rx="18" ry="6" fill="#B91C1C" />
      {/* Clipboard back */}
      <rect x="26" y="20" width="28" height="22" rx="2" fill="#7F1D1D" stroke="#EF4444" strokeWidth="1" />
      {/* Clipboard clip */}
      <rect x="34" y="18" width="12" height="5" rx="2" fill="#EF4444" />
      <rect x="37" y="16" width="6" height="4" rx="1.5" fill="#B91C1C" />
      {/* Paper on clipboard */}
      <rect x="28" y="23" width="24" height="17" rx="1" fill="#FEF2F2" />
      {/* Table header */}
      <rect x="28" y="23" width="24" height="5" rx="1" fill="#FCA5A5" />
      <text x="40" y="27" textAnchor="middle" fontSize="4.5" fontWeight="bold" fill="#7F1D1D">Dativ / Genitiv</text>
      {/* Table rows */}
      <line x1="28" y1="30" x2="52" y2="30" stroke="#FECACA" strokeWidth="0.5" />
      <text x="33" y="34" textAnchor="middle" fontSize="4" fill="#991B1B">dem</text>
      <text x="47" y="34" textAnchor="middle" fontSize="4" fill="#991B1B">des</text>
      <line x1="28" y1="35" x2="52" y2="35" stroke="#FECACA" strokeWidth="0.5" />
      <text x="33" y="39" textAnchor="middle" fontSize="4" fill="#991B1B">der</text>
      <text x="47" y="39" textAnchor="middle" fontSize="4" fill="#991B1B">der</text>
      {/* Vertical divider */}
      <line x1="40" y1="28" x2="40" y2="40" stroke="#FECACA" strokeWidth="0.5" />
      {/* Sparkles */}
      <text x="15" y="35" fontSize="7" fill="rgba(239,68,68,0.6)">✦</text>
      <text x="59" y="30" fontSize="6" fill="rgba(239,68,68,0.5)">✦</text>
    </svg>
  );
}

// i3 — Zeitformen: Emerald clock island with timeline and tense markers
export function K4IslandZeitformen({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Glow beneath */}
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(16,185,129,0.2)" />
      {/* Rocky underside */}
      <path d="M21,50 Q26,63 32,59 Q38,68 44,62 Q50,68 56,59 Q61,63 59,50Z" fill="#0A2A1E" />
      <path d="M26,53 Q28,62 31,58Z" fill="#061E14" />
      <path d="M50,53 Q53,62 55,57Z" fill="#061E14" />
      {/* Island body */}
      <ellipse cx="40" cy="48" rx="20" ry="9" fill="#064E3B" />
      {/* Grassy top surface */}
      <ellipse cx="40" cy="42" rx="20" ry="8" fill="#065F46" />
      <ellipse cx="40" cy="39" rx="18" ry="6" fill="#059669" />
      {/* Clock face */}
      <circle cx="40" cy="29" r="11" fill="#D1FAE5" stroke="#10B981" strokeWidth="1.2" />
      <circle cx="40" cy="29" r="9.5" fill="#ECFDF5" stroke="#6EE7B7" strokeWidth="0.6" />
      {/* Clock ticks at 12, 3, 6, 9 */}
      <line x1="40" y1="19.5" x2="40" y2="21.5" stroke="#059669" strokeWidth="1.2" />
      <line x1="49.5" y1="29" x2="47.5" y2="29" stroke="#059669" strokeWidth="1.2" />
      <line x1="40" y1="38.5" x2="40" y2="36.5" stroke="#059669" strokeWidth="1.2" />
      <line x1="30.5" y1="29" x2="32.5" y2="29" stroke="#059669" strokeWidth="1.2" />
      {/* Hour hand (pointing ~10) */}
      <line x1="40" y1="29" x2="34" y2="23" stroke="#065F46" strokeWidth="1.5" strokeLinecap="round" />
      {/* Minute hand (pointing ~2) */}
      <line x1="40" y1="29" x2="45" y2="22" stroke="#047857" strokeWidth="1" strokeLinecap="round" />
      {/* Center dot */}
      <circle cx="40" cy="29" r="1.2" fill="#059669" />
      {/* Timeline arrow below clock */}
      <line x1="22" y1="43" x2="58" y2="43" stroke="#6EE7B7" strokeWidth="1" strokeDasharray="2 1" />
      <polygon points="58,41 58,45 61,43" fill="#6EE7B7" />
      {/* Tense label markers on timeline */}
      <rect x="24" y="39" width="9" height="4" rx="1" fill="#059669" opacity="0.7" />
      <text x="28" y="42.5" textAnchor="middle" fontSize="3.5" fontWeight="bold" fill="#D1FAE5">Prät.</text>
      <rect x="43" y="39" width="10" height="4" rx="1" fill="#10B981" opacity="0.7" />
      <text x="48" y="42.5" textAnchor="middle" fontSize="3.5" fontWeight="bold" fill="#D1FAE5">Perf.</text>
      {/* Sparkles */}
      <text x="14" y="30" fontSize="7" fill="rgba(16,185,129,0.6)">✦</text>
      <text x="59" y="46" fontSize="6" fill="rgba(110,231,183,0.55)">✦</text>
    </svg>
  );
}

// i4 — Wortarten: Amber floating tag island with word-class labels
export function K4IslandWortarten({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Glow beneath */}
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(245,158,11,0.2)" />
      {/* Rocky underside */}
      <path d="M21,50 Q26,63 32,59 Q38,68 44,62 Q50,68 55,59 Q61,63 59,50Z" fill="#3A1F00" />
      <path d="M26,53 Q28,62 31,58Z" fill="#281500" />
      <path d="M50,53 Q53,62 55,57Z" fill="#281500" />
      {/* Island body */}
      <ellipse cx="40" cy="48" rx="20" ry="9" fill="#78350F" />
      {/* Top surface */}
      <ellipse cx="40" cy="42" rx="20" ry="8" fill="#92400E" />
      <ellipse cx="40" cy="39" rx="18" ry="6" fill="#B45309" />
      {/* Tag: Nomen — top left */}
      <rect x="16" y="20" width="18" height="7" rx="2" fill="#FDE68A" stroke="#F59E0B" strokeWidth="0.8" />
      <circle cx="17.5" cy="23.5" r="1.2" fill="#F59E0B" />
      <line x1="17.5" y1="23.5" x2="16" y2="23.5" stroke="#F59E0B" strokeWidth="0.8" />
      <text x="26" y="25.5" textAnchor="middle" fontSize="4.5" fontWeight="bold" fill="#78350F">Nomen</text>
      {/* Tag: Verb — top right */}
      <rect x="46" y="17" width="16" height="7" rx="2" fill="#FCD34D" stroke="#D97706" strokeWidth="0.8" />
      <circle cx="47.5" cy="20.5" r="1.2" fill="#D97706" />
      <line x1="47.5" y1="20.5" x2="46" y2="20.5" stroke="#D97706" strokeWidth="0.8" />
      <text x="55" y="22.5" textAnchor="middle" fontSize="4.5" fontWeight="bold" fill="#78350F">Verb</text>
      {/* Tag: Adjektiv — centre floating */}
      <rect x="26" y="28" width="22" height="8" rx="2.5" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1" />
      <circle cx="27.5" cy="32" r="1.5" fill="#F59E0B" />
      <line x1="27.5" y1="32" x2="26" y2="32" stroke="#F59E0B" strokeWidth="0.8" />
      <text x="39" y="34" textAnchor="middle" fontSize="5" fontWeight="bold" fill="#78350F">Adjektiv</text>
      {/* Tag: Adverb — bottom */}
      <rect x="43" y="37" width="17" height="6" rx="2" fill="#FDE68A" stroke="#D97706" strokeWidth="0.8" />
      <circle cx="44.5" cy="40" r="1.2" fill="#D97706" />
      <line x1="44.5" y1="40" x2="43" y2="40" stroke="#D97706" strokeWidth="0.8" />
      <text x="52" y="41.5" textAnchor="middle" fontSize="4" fontWeight="bold" fill="#78350F">Adverb</text>
      {/* Sparkles */}
      <text x="14" y="42" fontSize="7" fill="rgba(245,158,11,0.6)">✦</text>
      <text x="60" y="28" fontSize="6" fill="rgba(251,191,36,0.55)">✦</text>
    </svg>
  );
}

// i5 — Satzglieder: Indigo microscope island with sentence analysis lines
export function K4IslandSatzglieder({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Glow beneath */}
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(99,102,241,0.2)" />
      {/* Rocky underside */}
      <path d="M21,50 Q26,63 32,59 Q38,68 44,62 Q51,68 56,59 Q61,63 59,50Z" fill="#0A0A30" />
      <path d="M26,53 Q28,62 31,58Z" fill="#06061E" />
      <path d="M50,53 Q53,62 55,57Z" fill="#06061E" />
      {/* Island body */}
      <ellipse cx="40" cy="48" rx="20" ry="9" fill="#1E1B74" />
      {/* Top surface */}
      <ellipse cx="40" cy="42" rx="20" ry="8" fill="#2D2A9A" />
      <ellipse cx="40" cy="39" rx="18" ry="6" fill="#3730A3" />
      {/* Microscope stand base */}
      <rect x="34" y="42" width="12" height="2" rx="1" fill="#4338CA" />
      {/* Microscope pillar */}
      <rect x="39" y="28" width="2.5" height="14" rx="1" fill="#6366F1" />
      {/* Microscope arm */}
      <path d="M40,28 Q46,24 46,20" stroke="#818CF8" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Microscope eyepiece */}
      <rect x="43" y="16" width="6" height="5" rx="1.5" fill="#4F46E5" />
      <circle cx="46" cy="16" r="2" fill="#6366F1" />
      {/* Microscope lens/objective */}
      <circle cx="40.5" cy="34" r="3" fill="#4338CA" stroke="#818CF8" strokeWidth="0.8" />
      {/* Sample slide */}
      <rect x="26" y="40" width="14" height="3" rx="0.5" fill="#C7D2FE" opacity="0.8" />
      {/* Sentence analysis — bracket lines above slide */}
      <text x="30" y="37" textAnchor="middle" fontSize="3.5" fill="#A5B4FC">S</text>
      <text x="36" y="37" textAnchor="middle" fontSize="3.5" fill="#A5B4FC">P</text>
      <text x="43" y="37" textAnchor="middle" fontSize="3.5" fill="#A5B4FC">O</text>
      {/* Underlines showing Subjekt, Prädikat, Objekt */}
      <line x1="27" y1="38" x2="33" y2="38" stroke="#A5B4FC" strokeWidth="1" />
      <line x1="34" y1="38" x2="38" y2="38" stroke="#818CF8" strokeWidth="1.5" />
      <line x1="39" y1="38" x2="47" y2="38" stroke="#C7D2FE" strokeWidth="1" />
      {/* Magnifier hint circle */}
      <circle cx="55" cy="27" r="6" fill="none" stroke="#818CF8" strokeWidth="1" opacity="0.6" />
      <line x1="59" y1="31" x2="62" y2="34" stroke="#818CF8" strokeWidth="1.2" opacity="0.6" />
      {/* Sparkles */}
      <text x="14" y="30" fontSize="7" fill="rgba(99,102,241,0.6)">✦</text>
      <text x="59" y="45" fontSize="6" fill="rgba(165,180,252,0.5)">✦</text>
    </svg>
  );
}

// i6 — Satzarten: Pink open-book island with branching sentence diagrams
export function K4IslandSatzarten({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Glow beneath */}
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(236,72,153,0.2)" />
      {/* Rocky underside */}
      <path d="M21,50 Q27,63 32,59 Q38,68 44,62 Q50,68 56,59 Q61,63 59,50Z" fill="#3A0A1E" />
      <path d="M26,53 Q28,62 31,58Z" fill="#280614" />
      <path d="M50,53 Q53,62 55,57Z" fill="#280614" />
      {/* Island body */}
      <ellipse cx="40" cy="48" rx="20" ry="9" fill="#831843" />
      {/* Top surface */}
      <ellipse cx="40" cy="42" rx="20" ry="8" fill="#9D174D" />
      <ellipse cx="40" cy="39" rx="18" ry="6" fill="#BE185D" />
      {/* Open book shape */}
      <path d="M22,38 Q31,33 40,38 L40,46 Q31,41 22,46Z" fill="#FFF1F5" />
      <path d="M40,38 Q49,33 58,38 L58,46 Q49,41 40,46Z" fill="#FCE7F3" />
      <line x1="40" y1="38" x2="40" y2="46" stroke="#FBCFE8" strokeWidth="0.8" />
      {/* Book spine */}
      <ellipse cx="40" cy="42" rx="1" ry="4" fill="#FBCFE8" />
      {/* Branching diagram on left page — Hauptsatz */}
      <text x="31" y="41" textAnchor="middle" fontSize="3.5" fontWeight="bold" fill="#9D174D">Haupt-</text>
      <text x="31" y="44.5" textAnchor="middle" fontSize="3.5" fontWeight="bold" fill="#9D174D">satz</text>
      {/* Branching diagram on right page — weil/dass bubbles */}
      <text x="49" y="41" textAnchor="middle" fontSize="3.5" fontWeight="bold" fill="#BE185D">Neben-</text>
      <text x="49" y="44.5" textAnchor="middle" fontSize="3.5" fontWeight="bold" fill="#BE185D">satz</text>
      {/* "weil" bubble */}
      <rect x="18" y="22" width="13" height="7" rx="3" fill="rgba(236,72,153,0.3)" stroke="#EC4899" strokeWidth="0.8" />
      <polygon points="23,29 26,29 24.5,32" fill="#EC4899" opacity="0.6" />
      <text x="24" y="27.5" textAnchor="middle" fontSize="4.5" fontWeight="bold" fill="#FCE7F3">weil</text>
      {/* "dass" bubble */}
      <rect x="49" y="20" width="14" height="7" rx="3" fill="rgba(236,72,153,0.3)" stroke="#EC4899" strokeWidth="0.8" />
      <polygon points="53,27 57,27 55,30" fill="#EC4899" opacity="0.6" />
      <text x="56" y="25.5" textAnchor="middle" fontSize="4.5" fontWeight="bold" fill="#FCE7F3">dass</text>
      {/* Connecting lines from book to bubbles */}
      <line x1="31" y1="38" x2="26" y2="32" stroke="#F9A8D4" strokeWidth="0.8" strokeDasharray="2 1" />
      <line x1="49" y1="38" x2="55" y2="30" stroke="#F9A8D4" strokeWidth="0.8" strokeDasharray="2 1" />
      {/* Sparkles */}
      <text x="14" y="38" fontSize="7" fill="rgba(236,72,153,0.6)">✦</text>
      <text x="60" y="46" fontSize="6" fill="rgba(251,207,232,0.55)">✦</text>
    </svg>
  );
}

// i7 — VerbenFutur: Teal rocket island with future timeline and "werden" label
export function K4IslandVerbenFutur({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Glow beneath */}
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(20,184,166,0.22)" />
      {/* Rocky underside */}
      <path d="M21,50 Q26,63 32,59 Q38,68 44,62 Q50,68 55,59 Q61,63 59,50Z" fill="#0A2A28" />
      <path d="M26,53 Q28,62 31,58Z" fill="#061E1C" />
      <path d="M50,53 Q53,62 55,57Z" fill="#061E1C" />
      {/* Island body */}
      <ellipse cx="40" cy="48" rx="20" ry="9" fill="#0F3E3A" />
      {/* Top surface */}
      <ellipse cx="40" cy="42" rx="20" ry="8" fill="#134E4A" />
      <ellipse cx="40" cy="39" rx="18" ry="6" fill="#115E59" />
      {/* Rocket body */}
      <path d="M37,40 L37,28 Q40,20 43,28 L43,40Z" fill="#99F6E4" />
      {/* Rocket nose cone */}
      <path d="M37,28 Q40,20 43,28Z" fill="#2DD4BF" />
      {/* Rocket window */}
      <circle cx="40" cy="32" r="2.5" fill="#0D9488" stroke="#99F6E4" strokeWidth="0.8" />
      <circle cx="40" cy="32" r="1.5" fill="#CCFBF1" opacity="0.7" />
      {/* Rocket fins */}
      <path d="M37,38 L34,42 L37,40Z" fill="#14B8A6" />
      <path d="M43,38 L46,42 L43,40Z" fill="#14B8A6" />
      {/* Rocket flames */}
      <path d="M38,40 Q40,47 42,40" fill="#FCD34D" opacity="0.9" />
      <path d="M38.5,40 Q40,45 41.5,40" fill="#FB923C" opacity="0.8" />
      {/* Timeline arrow — horizontal, below island terrain line */}
      <line x1="20" y1="44" x2="58" y2="44" stroke="#5EEAD4" strokeWidth="0.8" strokeDasharray="2 1" />
      <polygon points="58,42.5 58,45.5 61,44" fill="#5EEAD4" />
      {/* Präsens marker */}
      <circle cx="30" cy="44" r="2" fill="#0D9488" />
      <text x="30" y="50" textAnchor="middle" fontSize="3" fill="#99F6E4">jetzt</text>
      {/* Futur marker */}
      <circle cx="52" cy="44" r="2" fill="#2DD4BF" />
      <text x="52" y="50" textAnchor="middle" fontSize="3" fill="#99F6E4">bald</text>
      {/* "werden" label badge */}
      <rect x="24" y="22" width="14" height="6" rx="2" fill="#0D9488" opacity="0.85" />
      <text x="31" y="26.5" textAnchor="middle" fontSize="4.5" fontWeight="bold" fill="#CCFBF1">werden</text>
      {/* Stars */}
      <text x="13" y="28" fontSize="7" fill="rgba(20,184,166,0.6)">✦</text>
      <text x="59" y="32" fontSize="6" fill="rgba(153,246,228,0.55)">✦</text>
    </svg>
  );
}

// i8 — Rechtschreibung: Purple pen island with das/dass comparison and correction marks
export function K4IslandRechtschreibung({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Glow beneath */}
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(168,85,247,0.2)" />
      {/* Rocky underside */}
      <path d="M21,50 Q26,63 32,59 Q38,68 44,62 Q51,68 56,59 Q61,63 59,50Z" fill="#1E0A3A" />
      <path d="M26,53 Q28,62 31,58Z" fill="#150628" />
      <path d="M50,53 Q53,62 55,57Z" fill="#150628" />
      {/* Island body */}
      <ellipse cx="40" cy="48" rx="20" ry="9" fill="#4A0E7A" />
      {/* Top surface */}
      <ellipse cx="40" cy="42" rx="20" ry="8" fill="#5B21B6" />
      <ellipse cx="40" cy="39" rx="18" ry="6" fill="#6D28D9" />
      {/* Lined paper sheet */}
      <rect x="22" y="19" width="36" height="22" rx="2" fill="#FAF5FF" stroke="#C4B5FD" strokeWidth="0.8" />
      {/* Paper lines */}
      <line x1="24" y1="24" x2="56" y2="24" stroke="#DDD6FE" strokeWidth="0.5" />
      <line x1="24" y1="28" x2="56" y2="28" stroke="#DDD6FE" strokeWidth="0.5" />
      <line x1="24" y1="32" x2="56" y2="32" stroke="#DDD6FE" strokeWidth="0.5" />
      <line x1="24" y1="36" x2="56" y2="36" stroke="#DDD6FE" strokeWidth="0.5" />
      {/* "das" with tick mark */}
      <text x="29" y="27" textAnchor="middle" fontSize="5" fontWeight="bold" fill="#4C1D95">das</text>
      <text x="36" y="27" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#16A34A">✓</text>
      {/* "dass" with arrow indicating use */}
      <text x="44" y="27" textAnchor="middle" fontSize="5" fontWeight="bold" fill="#7C3AED">dass</text>
      <text x="51" y="27" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#16A34A">✓</text>
      {/* Separator line */}
      <line x1="39" y1="22" x2="39" y2="38" stroke="#C4B5FD" strokeWidth="0.5" strokeDasharray="1 1" />
      {/* Red correction squiggle under a word */}
      <path d="M24,31 Q26,33 28,31 Q30,29 32,31 Q34,33 36,31" stroke="#EF4444" strokeWidth="0.8" fill="none" />
      {/* Pen — angled on paper */}
      <rect x="50" y="18" width="3" height="14" rx="1" fill="#7C3AED" transform="rotate(35 50 18)" />
      <polygon points="50,32 53,32 51.5,36" fill="#F59E0B" transform="rotate(35 50 18)" />
      <rect x="50" y="18" width="3" height="3" rx="0.5" fill="#5B21B6" transform="rotate(35 50 18)" />
      {/* Sparkles */}
      <text x="14" y="32" fontSize="7" fill="rgba(168,85,247,0.6)">✦</text>
      <text x="59" y="44" fontSize="6" fill="rgba(196,181,253,0.55)">✦</text>
    </svg>
  );
}

// i9 — GrossePruefung: Teal grand trophy island with golden star burst and crown
export function K4IslandGrossePruefung({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Glow beneath */}
      <ellipse cx="40" cy="74" rx="21" ry="5" fill="rgba(78,205,196,0.22)" />
      {/* Star-shaped rocky underside */}
      <path d="M20,50 Q24,58 28,55 Q31,65 36,60 Q39,68 44,63 Q48,68 52,61 Q57,65 60,55 Q64,58 60,50Z" fill="#0A2A28" />
      {/* Island body */}
      <ellipse cx="40" cy="49" rx="22" ry="10" fill="#0D3A38" />
      {/* Top surface — teal */}
      <ellipse cx="40" cy="43" rx="22" ry="8" fill="#155E5A" />
      <ellipse cx="40" cy="40" rx="20" ry="6" fill="#1A6E6A" />
      {/* Star burst rays — static lines at 8 angles */}
      <line x1="40" y1="25" x2="40" y2="17" stroke="#4ECDC4" strokeWidth="1.5" opacity="0.55" />
      <line x1="45.7" y1="26.7" x2="50.5" y2="21.5" stroke="#4ECDC4" strokeWidth="1.5" opacity="0.55" />
      <line x1="47.5" y1="32" x2="55.5" y2="32" stroke="#4ECDC4" strokeWidth="1.5" opacity="0.55" />
      <line x1="45.7" y1="37.3" x2="50.5" y2="42.5" stroke="#4ECDC4" strokeWidth="1.5" opacity="0.55" />
      <line x1="40" y1="39" x2="40" y2="46" stroke="#4ECDC4" strokeWidth="1.5" opacity="0.55" />
      <line x1="34.3" y1="37.3" x2="29.5" y2="42.5" stroke="#4ECDC4" strokeWidth="1.5" opacity="0.55" />
      <line x1="32.5" y1="32" x2="24.5" y2="32" stroke="#4ECDC4" strokeWidth="1.5" opacity="0.55" />
      <line x1="34.3" y1="26.7" x2="29.5" y2="21.5" stroke="#4ECDC4" strokeWidth="1.5" opacity="0.55" />
      {/* Trophy cup body */}
      <path d="M33,22 Q33,33 40,35 Q47,33 47,22Z" fill="#FFD700" />
      {/* Trophy stem */}
      <rect x="37" y="34" width="6" height="4" fill="#FFA000" />
      {/* Trophy base */}
      <rect x="33" y="38" width="14" height="3" rx="1.2" fill="#FFD700" />
      {/* Trophy handles */}
      <path d="M33,24 Q28,24 28,29 Q28,33 33,31" stroke="#FFD700" strokeWidth="1.8" fill="none" />
      <path d="M47,24 Q52,24 52,29 Q52,33 47,31" stroke="#FFD700" strokeWidth="1.8" fill="none" />
      {/* Trophy inner shine */}
      <path d="M35,23 Q36,28 38,29" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      {/* Crown on top of trophy */}
      <path d="M33,22 L34.5,18 L37,21 L40,16.5 L43,21 L45.5,18 L47,22Z" fill="#FFD700" />
      {/* Crown gems */}
      <circle cx="40" cy="16.5" r="1.5" fill="#EC4899" />
      <circle cx="34.5" cy="18" r="1" fill="#3B82F6" />
      <circle cx="45.5" cy="18" r="1" fill="#10B981" />
      {/* Stars beside trophy */}
      <text x="17" y="34" fontSize="9" fill="#4ECDC4">⭐</text>
      <text x="56" y="31" fontSize="8" fill="#4ECDC4">⭐</text>
      {/* Top sparkle */}
      <text x="38" y="13" fontSize="7" fill="rgba(78,205,196,0.8)">✦</text>
    </svg>
  );
}

// Export map for all K4 islands
export const K4_ISLAND_SVGS: Record<string, React.FC<{ size?: number }>> = {
  i1: K4IslandKasus1,
  i2: K4IslandKasus2,
  i3: K4IslandZeitformen,
  i4: K4IslandWortarten,
  i5: K4IslandSatzglieder,
  i6: K4IslandSatzarten,
  i7: K4IslandVerbenFutur,
  i8: K4IslandRechtschreibung,
  i9: K4IslandGrossePruefung,
};
