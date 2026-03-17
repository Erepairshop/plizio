// SVG Island illustrations for AstroDeutsch K5 map
// Each island is a unique floating fantasy landmass matching its theme
// viewBox: "0 0 80 80", renders at 48-60px on mobile

type IP = { size?: number };

// i1 — Steigerung: Blue island with ascending bar chart (gut→besser→am besten)
export function K5IslandSteigerung({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Glow beneath */}
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(59,130,246,0.2)" />
      {/* Rocky underside */}
      <path d="M21,50 Q26,63 31,59 Q37,68 43,62 Q49,68 55,59 Q60,63 59,50Z" fill="#0A1A3A" />
      <path d="M26,53 Q28,62 31,58Z" fill="#061230" />
      <path d="M50,53 Q53,62 55,57Z" fill="#061230" />
      {/* Island body */}
      <ellipse cx="40" cy="48" rx="21" ry="9" fill="#1A3A6A" />
      {/* Top surface — blue */}
      <ellipse cx="40" cy="42" rx="21" ry="8" fill="#1E50A0" />
      <ellipse cx="40" cy="39" rx="19" ry="6" fill="#2563C0" />
      {/* Bar chart base line */}
      <line x1="23" y1="44" x2="57" y2="44" stroke="#93C5FD" strokeWidth="1" opacity="0.7" />
      {/* Bar 1 — short (gut) */}
      <rect x="26" y="40" width="7" height="4" rx="0.8" fill="#3B82F6" opacity="0.9" />
      <rect x="26" y="39.5" width="7" height="1" rx="0.5" fill="#93C5FD" opacity="0.6" />
      {/* Bar 2 — medium (besser) */}
      <rect x="36" y="36" width="7" height="8" rx="0.8" fill="#2563EB" opacity="0.95" />
      <rect x="36" y="35.5" width="7" height="1" rx="0.5" fill="#BFDBFE" opacity="0.7" />
      {/* Bar 3 — tall (am besten) */}
      <rect x="46" y="30" width="7" height="14" rx="0.8" fill="#1D4ED8" />
      <rect x="46" y="29.5" width="7" height="1.2" rx="0.5" fill="#DBEAFE" opacity="0.8" />
      {/* Star on tallest bar */}
      <text x="49.5" y="28" textAnchor="middle" fontSize="6" fill="#FCD34D">★</text>
      {/* Comparison arrows */}
      <path d="M34,37 L35,35 L36,37" fill="none" stroke="#60A5FA" strokeWidth="0.9" />
      <path d="M44,33 L45,31 L46,33" fill="none" stroke="#60A5FA" strokeWidth="0.9" />
      {/* Labels */}
      <text x="29.5" y="47" textAnchor="middle" fontSize="4" fill="#BFDBFE" fontFamily="monospace">gut</text>
      <text x="39.5" y="47" textAnchor="middle" fontSize="3.5" fill="#BFDBFE" fontFamily="monospace">bess.</text>
      <text x="49.5" y="47" textAnchor="middle" fontSize="3.2" fill="#BFDBFE" fontFamily="monospace">a.b.</text>
      {/* Sparkles */}
      <text x="15" y="33" fontSize="7" fill="rgba(59,130,246,0.65)">✦</text>
      <text x="59" y="27" fontSize="6" fill="rgba(147,197,253,0.6)">✦</text>
      <text x="17" y="46" fontSize="5" fill="rgba(96,165,250,0.45)">✦</text>
    </svg>
  );
}

// i2 — Pronomen: Red island with person silhouette and floating ich/du/er labels
export function K5IslandPronomen({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Glow beneath */}
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(239,68,68,0.2)" />
      {/* Rocky underside */}
      <path d="M21,50 Q27,63 32,59 Q38,68 44,62 Q50,68 56,59 Q61,63 59,50Z" fill="#3A0A0A" />
      <path d="M26,53 Q28,62 31,58Z" fill="#2A0606" />
      <path d="M50,53 Q53,62 55,57Z" fill="#2A0606" />
      {/* Island body */}
      <ellipse cx="40" cy="48" rx="21" ry="9" fill="#6A1A1A" />
      {/* Top surface — red */}
      <ellipse cx="40" cy="42" rx="21" ry="8" fill="#991B1B" />
      <ellipse cx="40" cy="39" rx="19" ry="6" fill="#B91C1C" />
      {/* Center person silhouette — head */}
      <circle cx="40" cy="26" r="4" fill="#FCA5A5" />
      {/* Body */}
      <path d="M36,30 Q36,38 40,38 Q44,38 44,30 Q42,29 40,29 Q38,29 36,30Z" fill="#FCA5A5" />
      {/* Identity mask — small overlay on face */}
      <rect x="37" y="24.5" width="6" height="4" rx="1.5" fill="rgba(239,68,68,0.5)" stroke="#FCA5A5" strokeWidth="0.6" />
      <circle cx="38.5" cy="26.5" r="0.8" fill="#FEE2E2" />
      <circle cx="41.5" cy="26.5" r="0.8" fill="#FEE2E2" />
      {/* Floating label — ich */}
      <rect x="17" y="22" width="11" height="7" rx="2" fill="rgba(239,68,68,0.25)" stroke="#EF4444" strokeWidth="0.9" />
      <text x="22.5" y="27.5" textAnchor="middle" fontSize="5.5" fontWeight="bold" fill="#FECACA" fontFamily="monospace">ich</text>
      {/* Floating label — du */}
      <rect x="52" y="19" width="10" height="7" rx="2" fill="rgba(239,68,68,0.25)" stroke="#EF4444" strokeWidth="0.9" />
      <text x="57" y="24.5" textAnchor="middle" fontSize="5.5" fontWeight="bold" fill="#FECACA" fontFamily="monospace">du</text>
      {/* Floating label — er */}
      <rect x="20" y="33" width="10" height="7" rx="2" fill="rgba(239,68,68,0.22)" stroke="#DC2626" strokeWidth="0.8" />
      <text x="25" y="38.5" textAnchor="middle" fontSize="5.5" fontWeight="bold" fill="#FCA5A5" fontFamily="monospace">er</text>
      {/* Floating label — wir */}
      <rect x="50" y="32" width="12" height="7" rx="2" fill="rgba(239,68,68,0.22)" stroke="#DC2626" strokeWidth="0.8" />
      <text x="56" y="37.5" textAnchor="middle" fontSize="5.5" fontWeight="bold" fill="#FCA5A5" fontFamily="monospace">wir</text>
      {/* Connector dashes */}
      <line x1="28" y1="25.5" x2="36" y2="26" stroke="#EF4444" strokeWidth="0.6" strokeDasharray="1.5 1" opacity="0.5" />
      <line x1="44" y1="26" x2="52" y2="22.5" stroke="#EF4444" strokeWidth="0.6" strokeDasharray="1.5 1" opacity="0.5" />
      {/* Sparkles */}
      <text x="14" y="40" fontSize="6" fill="rgba(239,68,68,0.55)">✦</text>
      <text x="61" y="44" fontSize="5" fill="rgba(252,165,165,0.5)">✦</text>
    </svg>
  );
}

// i3 — Praepositionen: Emerald island with chain links and word-bubble bridge
export function K5IslandPraepositionen({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Glow beneath */}
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(16,185,129,0.2)" />
      {/* Rocky underside */}
      <path d="M20,50 Q26,63 32,59 Q38,68 44,62 Q50,68 56,59 Q62,63 60,50Z" fill="#0A2A1E" />
      <path d="M25,53 Q27,62 30,58Z" fill="#061E14" />
      <path d="M50,53 Q53,62 55,57Z" fill="#061E14" />
      {/* Island body */}
      <ellipse cx="40" cy="48" rx="21" ry="9" fill="#064E3B" />
      {/* Top surface — emerald */}
      <ellipse cx="40" cy="42" rx="21" ry="8" fill="#065F46" />
      <ellipse cx="40" cy="39" rx="19" ry="6" fill="#047857" />
      {/* Chain link left */}
      <ellipse cx="24" cy="33" rx="5" ry="3.5" fill="none" stroke="#34D399" strokeWidth="1.8" />
      <ellipse cx="24" cy="33" rx="3" ry="1.8" fill="none" stroke="#6EE7B7" strokeWidth="0.7" opacity="0.5" />
      {/* Chain link center-left */}
      <ellipse cx="32" cy="33" rx="5" ry="3.5" fill="none" stroke="#10B981" strokeWidth="1.8" />
      <ellipse cx="32" cy="33" rx="3" ry="1.8" fill="none" stroke="#6EE7B7" strokeWidth="0.7" opacity="0.5" />
      {/* Chain link center-right */}
      <ellipse cx="40" cy="33" rx="5" ry="3.5" fill="none" stroke="#34D399" strokeWidth="1.8" />
      <ellipse cx="40" cy="33" rx="3" ry="1.8" fill="none" stroke="#6EE7B7" strokeWidth="0.7" opacity="0.5" />
      {/* Chain link right */}
      <ellipse cx="48" cy="33" rx="5" ry="3.5" fill="none" stroke="#10B981" strokeWidth="1.8" />
      <ellipse cx="48" cy="33" rx="3" ry="1.8" fill="none" stroke="#6EE7B7" strokeWidth="0.7" opacity="0.5" />
      {/* Word bubble on left — "auf" */}
      <rect x="17" y="21" width="13" height="8" rx="3" fill="rgba(16,185,129,0.3)" stroke="#34D399" strokeWidth="1" />
      <polygon points="23,29 26,29 24.5,32" fill="#34D399" opacity="0.7" />
      <text x="23.5" y="27.5" textAnchor="middle" fontSize="5.5" fontWeight="bold" fill="#A7F3D0" fontFamily="monospace">auf</text>
      {/* Word bubble on right — "mit" */}
      <rect x="50" y="21" width="13" height="8" rx="3" fill="rgba(16,185,129,0.3)" stroke="#10B981" strokeWidth="1" />
      <polygon points="56,29 59,29 57.5,32" fill="#10B981" opacity="0.7" />
      <text x="56.5" y="27.5" textAnchor="middle" fontSize="5.5" fontWeight="bold" fill="#A7F3D0" fontFamily="monospace">mit</text>
      {/* Bridge arch between bubbles */}
      <path d="M30,25 Q40,18 50,25" stroke="#6EE7B7" strokeWidth="1" fill="none" strokeDasharray="2 1.5" opacity="0.6" />
      {/* Sparkles */}
      <text x="13" y="44" fontSize="7" fill="rgba(16,185,129,0.6)">✦</text>
      <text x="62" y="42" fontSize="6" fill="rgba(52,211,153,0.5)">✦</text>
    </svg>
  );
}

// i4 — Satzglieder: Amber island with sentence under a magnifying glass and colored underlines
export function K5IslandSatzglieder({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Glow beneath */}
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(245,158,11,0.2)" />
      {/* Rocky underside */}
      <path d="M21,50 Q26,63 32,58 Q38,67 44,62 Q50,67 56,58 Q61,63 59,50Z" fill="#3A2000" />
      <path d="M27,53 Q29,62 32,58Z" fill="#2A1600" />
      <path d="M49,53 Q52,62 54,57Z" fill="#2A1600" />
      {/* Island body */}
      <ellipse cx="40" cy="48" rx="21" ry="9" fill="#6A3800" />
      {/* Top surface — amber */}
      <ellipse cx="40" cy="42" rx="21" ry="8" fill="#92400E" />
      <ellipse cx="40" cy="39" rx="19" ry="6" fill="#B45309" />
      {/* Mini sentence strip */}
      <rect x="20" y="33" width="40" height="9" rx="2" fill="rgba(255,245,220,0.15)" stroke="#FCD34D" strokeWidth="0.7" opacity="0.8" />
      {/* Colored underlines for sentence parts — Subjekt (red) */}
      <line x1="22" y1="41" x2="29" y2="41" stroke="#EF4444" strokeWidth="1.5" />
      {/* Prädikat (blue) */}
      <line x1="31" y1="41" x2="39" y2="41" stroke="#3B82F6" strokeWidth="1.5" />
      {/* Objekt (green) */}
      <line x1="41" y1="41" x2="51" y2="41" stroke="#10B981" strokeWidth="1.5" />
      {/* Adverbial (yellow) */}
      <line x1="53" y1="41" x2="58" y2="41" stroke="#F59E0B" strokeWidth="1.5" />
      {/* Mini word blocks in sentence */}
      <rect x="22" y="34.5" width="6" height="5" rx="1" fill="#FEF3C7" opacity="0.7" />
      <rect x="30" y="34.5" width="8" height="5" rx="1" fill="#DBEAFE" opacity="0.7" />
      <rect x="40" y="34.5" width="10" height="5" rx="1" fill="#D1FAE5" opacity="0.7" />
      <rect x="52" y="34.5" width="6" height="5" rx="1" fill="#FEF3C7" opacity="0.6" />
      {/* Magnifying glass over right half */}
      <circle cx="50" cy="28" r="8" fill="rgba(255,255,255,0.08)" stroke="#FCD34D" strokeWidth="1.4" />
      <circle cx="50" cy="28" r="6" fill="rgba(245,158,11,0.12)" />
      {/* Magnifying glass lens shine */}
      <path d="M46,24 Q48,23 50,24" stroke="rgba(255,255,255,0.4)" strokeWidth="0.8" fill="none" />
      {/* Handle */}
      <line x1="56" y1="34" x2="60" y2="38" stroke="#D97706" strokeWidth="2" strokeLinecap="round" />
      {/* Sparkles */}
      <text x="14" y="31" fontSize="7" fill="rgba(245,158,11,0.6)">✦</text>
      <text x="62" y="46" fontSize="6" fill="rgba(252,211,77,0.5)">✦</text>
      <text x="15" y="46" fontSize="5" fill="rgba(245,158,11,0.4)">✦</text>
    </svg>
  );
}

// i5 — Zeichensetzung: Indigo island with giant comma, semicolon, and floating punctuation
export function K5IslandZeichensetzung({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Glow beneath */}
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(99,102,241,0.22)" />
      {/* Rocky underside */}
      <path d="M21,50 Q26,63 32,59 Q38,68 44,62 Q50,68 56,59 Q61,63 59,50Z" fill="#1E1B4B" />
      <path d="M26,53 Q28,62 31,58Z" fill="#16134A" />
      <path d="M50,53 Q53,62 55,57Z" fill="#16134A" />
      {/* Island body */}
      <ellipse cx="40" cy="48" rx="21" ry="9" fill="#312E81" />
      {/* Top surface — indigo */}
      <ellipse cx="40" cy="42" rx="21" ry="8" fill="#3730A3" />
      <ellipse cx="40" cy="39" rx="19" ry="6" fill="#4338CA" />
      {/* Giant comma — center-left */}
      <circle cx="33" cy="27" r="4.5" fill="#6366F1" />
      <path d="M33,31.5 Q31,35 30,38" stroke="#6366F1" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <circle cx="33" cy="27" r="2.5" fill="#818CF8" opacity="0.5" />
      {/* Semicolon — center-right */}
      <circle cx="46" cy="25" r="3.5" fill="#4F46E5" />
      <path d="M46,29 Q44,32 43,35" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" fill="none" />
      <circle cx="46" cy="25" r="2" fill="#A5B4FC" opacity="0.5" />
      {/* Pushpin on top */}
      <circle cx="40" cy="17" r="3.5" fill="#F59E0B" />
      <circle cx="40" cy="17" r="2" fill="#FCD34D" opacity="0.6" />
      <line x1="40" y1="20.5" x2="40" y2="26" stroke="#D97706" strokeWidth="1.2" />
      {/* Floating punctuation marks */}
      <text x="19" y="30" fontSize="9" fontWeight="bold" fill="rgba(99,102,241,0.7)" fontFamily="serif">.</text>
      <text x="55" y="22" fontSize="9" fontWeight="bold" fill="rgba(129,140,248,0.7)" fontFamily="serif">!</text>
      <text x="62" y="34" fontSize="9" fontWeight="bold" fill="rgba(99,102,241,0.6)" fontFamily="serif">?</text>
      <text x="14" y="38" fontSize="8" fontWeight="bold" fill="rgba(165,180,252,0.55)" fontFamily="serif">"</text>
      {/* Sparkles */}
      <text x="16" y="25" fontSize="6" fill="rgba(99,102,241,0.65)">✦</text>
      <text x="60" y="45" fontSize="5" fill="rgba(129,140,248,0.5)">✦</text>
    </svg>
  );
}

// i6 — Partizip: Pink island with ancient scroll and I/II timeline
export function K5IslandPartizip({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Glow beneath */}
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(236,72,153,0.2)" />
      {/* Rocky underside */}
      <path d="M21,50 Q27,63 32,59 Q38,68 44,62 Q51,68 56,59 Q61,63 59,50Z" fill="#3A0A20" />
      <path d="M26,53 Q28,62 31,58Z" fill="#2A0618" />
      <path d="M50,53 Q53,62 55,57Z" fill="#2A0618" />
      {/* Island body */}
      <ellipse cx="40" cy="48" rx="21" ry="9" fill="#6A1035" />
      {/* Top surface — pink */}
      <ellipse cx="40" cy="42" rx="21" ry="8" fill="#9D174D" />
      <ellipse cx="40" cy="39" rx="19" ry="6" fill="#BE185D" />
      {/* Scroll background */}
      <rect x="20" y="22" width="40" height="18" rx="2" fill="#FFF7ED" opacity="0.9" />
      {/* Scroll roller left */}
      <rect x="18" y="20" width="4" height="22" rx="2" fill="#D6BCB0" />
      <ellipse cx="20" cy="20" rx="2" ry="1.2" fill="#BCAAA4" />
      <ellipse cx="20" cy="42" rx="2" ry="1.2" fill="#BCAAA4" />
      {/* Scroll roller right */}
      <rect x="58" y="20" width="4" height="22" rx="2" fill="#D6BCB0" />
      <ellipse cx="60" cy="20" rx="2" ry="1.2" fill="#BCAAA4" />
      <ellipse cx="60" cy="42" rx="2" ry="1.2" fill="#BCAAA4" />
      {/* Timeline arrow inside scroll */}
      <line x1="24" y1="34" x2="56" y2="34" stroke="#EC4899" strokeWidth="1" />
      <polygon points="55,32 58,34 55,36" fill="#EC4899" />
      {/* Timeline dot — past */}
      <circle cx="28" cy="34" r="2" fill="#F9A8D4" stroke="#EC4899" strokeWidth="0.8" />
      {/* Timeline dot — now */}
      <circle cx="48" cy="34" r="2.5" fill="#EC4899" stroke="#F9A8D4" strokeWidth="0.8" />
      {/* Partizip I label */}
      <text x="26" y="30" textAnchor="middle" fontSize="5" fontWeight="bold" fill="#9D174D" fontFamily="monospace">PI</text>
      {/* Partizip II label */}
      <text x="48" y="30" textAnchor="middle" fontSize="5" fontWeight="bold" fill="#9D174D" fontFamily="monospace">PII</text>
      {/* ge- prefix example */}
      <text x="40" y="27" textAnchor="middle" fontSize="4.5" fill="#BE185D" fontFamily="monospace">ge-macht</text>
      {/* Wax seal circle */}
      <circle cx="40" cy="40" r="3.5" fill="#EC4899" opacity="0.5" />
      <text x="40" y="42" textAnchor="middle" fontSize="4" fill="#FFF" fontWeight="bold">P</text>
      {/* Sparkles */}
      <text x="13" y="30" fontSize="7" fill="rgba(236,72,153,0.6)">✦</text>
      <text x="63" y="28" fontSize="6" fill="rgba(249,168,212,0.5)">✦</text>
    </svg>
  );
}

// i7 — Passiv: Teal island with circular arrows showing active→passive transformation
export function K5IslandPassiv({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Glow beneath */}
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(20,184,166,0.22)" />
      {/* Rocky underside */}
      <path d="M21,50 Q27,63 32,59 Q38,68 44,62 Q50,68 56,59 Q61,63 59,50Z" fill="#0A2A28" />
      <path d="M26,53 Q28,62 31,58Z" fill="#061E1C" />
      <path d="M50,53 Q53,62 55,57Z" fill="#061E1C" />
      {/* Island body */}
      <ellipse cx="40" cy="48" rx="21" ry="9" fill="#0D3A38" />
      {/* Top surface — teal */}
      <ellipse cx="40" cy="42" rx="21" ry="8" fill="#0F766E" />
      <ellipse cx="40" cy="39" rx="19" ry="6" fill="#0D9488" />
      {/* Outer circular arrow — clockwise top arc */}
      <path d="M28,28 A13,13 0 0,1 52,28" stroke="#2DD4BF" strokeWidth="2" fill="none" />
      <polygon points="52,28 56,25 55,30" fill="#2DD4BF" />
      {/* Outer circular arrow — counter-clockwise bottom arc */}
      <path d="M52,30 A13,13 0 0,1 28,30" stroke="#14B8A6" strokeWidth="2" fill="none" />
      <polygon points="28,30 24,33 29,33" fill="#14B8A6" />
      {/* Inner reversal symbol — double arrow */}
      <line x1="34" y1="29" x2="46" y2="29" stroke="#5EEAD4" strokeWidth="1.4" />
      <polygon points="44,27 47,29 44,31" fill="#5EEAD4" />
      <polygon points="36,27 33,29 36,31" fill="#5EEAD4" />
      {/* Active label */}
      <text x="24" y="22" textAnchor="middle" fontSize="4.5" fill="#99F6E4" fontFamily="monospace">Aktiv</text>
      {/* Passive label */}
      <text x="56" y="22" textAnchor="middle" fontSize="4.5" fill="#99F6E4" fontFamily="monospace">Passiv</text>
      {/* wird label */}
      <text x="40" y="27" textAnchor="middle" fontSize="4.5" fontWeight="bold" fill="#CCFBF1" fontFamily="monospace">wird</text>
      {/* werden example */}
      <rect x="28" y="41" width="24" height="6" rx="2" fill="rgba(20,184,166,0.25)" stroke="#2DD4BF" strokeWidth="0.8" />
      <text x="40" y="45.5" textAnchor="middle" fontSize="4.2" fill="#99F6E4" fontFamily="monospace">gemacht</text>
      {/* Sparkles */}
      <text x="14" y="35" fontSize="7" fill="rgba(20,184,166,0.6)">✦</text>
      <text x="61" y="46" fontSize="5" fill="rgba(45,212,191,0.5)">✦</text>
      <text x="62" y="30" fontSize="6" fill="rgba(20,184,166,0.45)">✦</text>
    </svg>
  );
}

// i8 — Wortschatz: Purple island with bookshelf, dictionary, and ß symbol
export function K5IslandWortschatz({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Glow beneath */}
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(168,85,247,0.2)" />
      {/* Rocky underside */}
      <path d="M21,50 Q27,63 32,59 Q38,68 44,62 Q50,68 56,59 Q61,63 59,50Z" fill="#1E0A3A" />
      <path d="M26,53 Q28,62 31,58Z" fill="#160630" />
      <path d="M50,53 Q53,62 55,57Z" fill="#160630" />
      {/* Island body */}
      <ellipse cx="40" cy="48" rx="21" ry="9" fill="#3B0764" />
      {/* Top surface — purple */}
      <ellipse cx="40" cy="42" rx="21" ry="8" fill="#581C87" />
      <ellipse cx="40" cy="39" rx="19" ry="6" fill="#6B21A8" />
      {/* Bookshelf — two shelves */}
      {/* Top shelf plank */}
      <rect x="20" y="28" width="40" height="1.5" rx="0.5" fill="#7C3AED" opacity="0.9" />
      {/* Bottom shelf plank */}
      <rect x="20" y="36" width="40" height="1.5" rx="0.5" fill="#7C3AED" opacity="0.9" />
      {/* Vertical supports */}
      <rect x="20" y="28" width="1.5" height="10" fill="#6D28D9" />
      <rect x="58.5" y="28" width="1.5" height="10" fill="#6D28D9" />
      {/* Books on top shelf */}
      <rect x="22" y="21" width="5" height="7" rx="0.5" fill="#EF4444" />
      <rect x="27.5" y="22" width="4" height="6" rx="0.5" fill="#3B82F6" />
      <rect x="32" y="20" width="6" height="8" rx="0.5" fill="#10B981" />
      <rect x="38.5" y="22" width="5" height="6" rx="0.5" fill="#F59E0B" />
      <rect x="44" y="21" width="5" height="7" rx="0.5" fill="#EC4899" />
      <rect x="49.5" y="23" width="4" height="5" rx="0.5" fill="#8B5CF6" />
      <rect x="54" y="22" width="4" height="6" rx="0.5" fill="#06B6D4" />
      {/* Book spines — tiny lines */}
      <line x1="24.5" y1="21" x2="24.5" y2="28" stroke="rgba(255,255,255,0.2)" strokeWidth="0.4" />
      <line x1="35" y1="20" x2="35" y2="28" stroke="rgba(255,255,255,0.2)" strokeWidth="0.4" />
      {/* Dictionary on bottom shelf — large highlighted book */}
      <rect x="22" y="29.5" width="8" height="6" rx="0.5" fill="#C4B5FD" />
      <line x1="26" y1="29.5" x2="26" y2="35.5" stroke="#7C3AED" strokeWidth="0.6" />
      <text x="22.5" y="33.5" fontSize="3.5" fill="#4C1D95" fontFamily="monospace">Dict</text>
      {/* ß symbol — big, prominent */}
      <text x="44" y="35.5" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#DDD6FE" fontFamily="serif" opacity="0.85">ß</text>
      {/* Foreign word label floating */}
      <rect x="54" y="29" width="6" height="5.5" rx="1" fill="rgba(168,85,247,0.3)" stroke="#A855F7" strokeWidth="0.7" />
      <text x="57" y="33" textAnchor="middle" fontSize="3.5" fill="#E9D5FF" fontFamily="monospace">Str.</text>
      {/* Sparkles */}
      <text x="14" y="32" fontSize="7" fill="rgba(168,85,247,0.6)">✦</text>
      <text x="62" y="42" fontSize="5" fill="rgba(196,181,253,0.5)">✦</text>
      <text x="15" y="44" fontSize="5" fill="rgba(139,92,246,0.45)">✦</text>
    </svg>
  );
}

// i9 — GrossePruefung: Teal trophy island with crown, star burst and celebration
export function K5IslandGrossePruefung({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Glow beneath */}
      <ellipse cx="40" cy="74" rx="21" ry="5" fill="rgba(78,205,196,0.25)" />
      {/* Jagged rocky underside */}
      <path d="M19,50 Q23,59 27,55 Q31,65 36,60 Q39,68 44,63 Q48,68 52,61 Q57,65 61,55 Q65,59 61,50Z" fill="#0A2A28" />
      {/* Island body */}
      <ellipse cx="40" cy="49" rx="22" ry="10" fill="#0D3A38" />
      {/* Top surface — teal */}
      <ellipse cx="40" cy="43" rx="22" ry="8" fill="#155E5A" />
      <ellipse cx="40" cy="40" rx="20" ry="6" fill="#1A6E6A" />
      {/* Star burst rays behind trophy */}
      <line x1="40" y1="15" x2="40" y2="10" stroke="#4ECDC4" strokeWidth="1.5" opacity="0.7" />
      <line x1="40" y1="33" x2="40" y2="37" stroke="#4ECDC4" strokeWidth="1.5" opacity="0.5" />
      <line x1="28" y1="24" x2="24" y2="21" stroke="#4ECDC4" strokeWidth="1.5" opacity="0.7" />
      <line x1="52" y1="24" x2="56" y2="21" stroke="#4ECDC4" strokeWidth="1.5" opacity="0.7" />
      <line x1="26" y1="30" x2="21" y2="30" stroke="#4ECDC4" strokeWidth="1.5" opacity="0.6" />
      <line x1="54" y1="30" x2="59" y2="30" stroke="#4ECDC4" strokeWidth="1.5" opacity="0.6" />
      <line x1="29" y1="18" x2="26" y2="14" stroke="#4ECDC4" strokeWidth="1.2" opacity="0.55" />
      <line x1="51" y1="18" x2="54" y2="14" stroke="#4ECDC4" strokeWidth="1.2" opacity="0.55" />
      {/* Trophy cup body */}
      <path d="M33,22 Q33,34 40,36 Q47,34 47,22Z" fill="#FFD700" />
      {/* Trophy inner shine */}
      <path d="M35,23 Q35,31 40,33 Q43,31 43,23Z" fill="#FEF08A" opacity="0.45" />
      {/* Trophy stem */}
      <rect x="37.5" y="35" width="5" height="4" fill="#FFA000" />
      {/* Trophy base */}
      <rect x="34" y="39" width="12" height="2.5" rx="1" fill="#FFD700" />
      <rect x="32" y="41.5" width="16" height="1.5" rx="0.75" fill="#FFA000" opacity="0.7" />
      {/* Trophy handles */}
      <path d="M33,24 Q28,24 28,29 Q28,33 33,31" stroke="#FFD700" strokeWidth="1.8" fill="none" />
      <path d="M47,24 Q52,24 52,29 Q52,33 47,31" stroke="#FFD700" strokeWidth="1.8" fill="none" />
      {/* Crown on top */}
      <path d="M33,22 L34.5,17 L37.5,20.5 L40,16 L42.5,20.5 L45.5,17 L47,22Z" fill="#FFD700" />
      {/* Crown gems */}
      <circle cx="40" cy="17" r="1.2" fill="#4ECDC4" />
      <circle cx="34.5" cy="17.5" r="0.8" fill="#EC4899" />
      <circle cx="45.5" cy="17.5" r="0.8" fill="#3B82F6" />
      {/* Stars beside trophy */}
      <text x="17" y="33" fontSize="9" fill="#4ECDC4">⭐</text>
      <text x="57" y="31" fontSize="8" fill="#4ECDC4">⭐</text>
      {/* K5 label on trophy */}
      <text x="40" y="31" textAnchor="middle" fontSize="5.5" fontWeight="bold" fill="#92400E" fontFamily="monospace">K5</text>
      {/* Sparkles */}
      <text x="38" y="12" textAnchor="middle" fontSize="6" fill="rgba(78,205,196,0.75)">✦</text>
      <text x="62" y="42" fontSize="5" fill="rgba(78,205,196,0.5)">✦</text>
      <text x="14" y="45" fontSize="6" fill="rgba(78,205,196,0.5)">✦</text>
    </svg>
  );
}

// Export map for all K5 islands
export const K5_ISLAND_SVGS: Record<string, React.FC<{ size?: number }>> = {
  i1: K5IslandSteigerung,
  i2: K5IslandPronomen,
  i3: K5IslandPraepositionen,
  i4: K5IslandSatzglieder,
  i5: K5IslandZeichensetzung,
  i6: K5IslandPartizip,
  i7: K5IslandPassiv,
  i8: K5IslandWortschatz,
  i9: K5IslandGrossePruefung,
};
