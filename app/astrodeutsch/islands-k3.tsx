// SVG Island illustrations for AstroDeutsch K3 map
// Each island is a unique floating fantasy landmass matching its theme
// viewBox: "0 0 80 80", renders at 48-60px on mobile

type IP = { size?: number };

// i1 — Plural: Blue stacked-books island with multiple noun copies
export function K3IslandPlural({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Glow beneath */}
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(59,130,246,0.22)" />
      {/* Rocky underside */}
      <path d="M21,50 Q26,63 31,59 Q37,68 43,62 Q50,68 55,59 Q60,63 59,50Z" fill="#0A1A3A" />
      <path d="M26,53 Q28,62 31,58Z" fill="#060E26" />
      <path d="M49,53 Q52,62 54,57Z" fill="#060E26" />
      {/* Island body */}
      <ellipse cx="40" cy="48" rx="20" ry="9" fill="#1A3A7A" />
      {/* Top surface */}
      <ellipse cx="40" cy="42" rx="20" ry="8" fill="#1E4DA0" />
      <ellipse cx="40" cy="39" rx="18" ry="6" fill="#2563C8" />
      {/* Bottom book (widest) */}
      <rect x="22" y="37" width="26" height="5" rx="1" fill="#1D4ED8" stroke="#93C5FD" strokeWidth="0.6" />
      <rect x="23" y="37" width="2" height="5" rx="0.5" fill="#3B82F6" />
      <line x1="26" y1="38.5" x2="47" y2="38.5" stroke="#93C5FD" strokeWidth="0.5" opacity="0.7" />
      {/* Middle book */}
      <rect x="24" y="31" width="22" height="5" rx="1" fill="#2563EB" stroke="#BFDBFE" strokeWidth="0.6" />
      <rect x="25" y="31" width="2" height="5" rx="0.5" fill="#60A5FA" />
      <line x1="28" y1="32.5" x2="45" y2="32.5" stroke="#BFDBFE" strokeWidth="0.5" opacity="0.7" />
      {/* Top book (smallest, most prominent) */}
      <rect x="27" y="25" width="18" height="5" rx="1" fill="#3B82F6" stroke="#EFF6FF" strokeWidth="0.7" />
      <rect x="28" y="25" width="2" height="5" rx="0.5" fill="#93C5FD" />
      <line x1="31" y1="26.5" x2="44" y2="26.5" stroke="#EFF6FF" strokeWidth="0.5" opacity="0.8" />
      {/* "die Bücher" label on top book */}
      <text x="36" y="29" textAnchor="middle" fontSize="4.5" fontWeight="bold" fill="#EFF6FF" fontFamily="monospace">Bücher</text>
      {/* Small duplicate markers — "×3" to show plural */}
      <text x="53" y="30" fontSize="8" fontWeight="bold" fill="#93C5FD" opacity="0.9">×3</text>
      {/* Floating sparkles */}
      <text x="16" y="30" fontSize="7" fill="rgba(59,130,246,0.65)">✦</text>
      <text x="58" y="44" fontSize="6" fill="rgba(147,197,253,0.6)">✦</text>
      {/* Small floating dots suggesting plural */}
      <circle cx="20" cy="40" r="1.5" fill="#93C5FD" opacity="0.7" />
      <circle cx="63" cy="37" r="1.2" fill="#60A5FA" opacity="0.6" />
      <circle cx="61" cy="42" r="1" fill="#93C5FD" opacity="0.5" />
    </svg>
  );
}

// i2 — Verben: Red lightning island with verb energy and conjugation bolts
export function K3IslandVerben({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Glow beneath */}
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(239,68,68,0.22)" />
      {/* Rocky underside */}
      <path d="M20,50 Q25,64 31,59 Q37,68 43,62 Q50,68 55,59 Q61,64 60,50Z" fill="#3A0A0A" />
      <path d="M25,53 Q27,62 30,58Z" fill="#280606" />
      <path d="M51,53 Q54,62 56,57Z" fill="#280606" />
      {/* Island body */}
      <ellipse cx="40" cy="48" rx="21" ry="9" fill="#7A1A1A" />
      {/* Top surface — volcanic red */}
      <ellipse cx="40" cy="42" rx="21" ry="8" fill="#991B1B" />
      <ellipse cx="40" cy="39" rx="19" ry="6" fill="#B91C1C" />
      {/* Big central lightning bolt */}
      <polygon points="42,22 37,33 41,33 38,44 45,29 40,29" fill="#FCA5A5" />
      <polygon points="42,22 37,33 41,33 38,44 45,29 40,29" fill="#EF4444" opacity="0.9" />
      <polygon points="41.5,22.5 37.5,32.5 41,32.5 38.5,42 44,29.5 39.5,29.5" fill="#FECACA" opacity="0.6" />
      {/* Left small bolt */}
      <polygon points="26,26 23,33 26,33 24,39 29,30 26,30" fill="#FCA5A5" opacity="0.8" />
      {/* Right small bolt */}
      <polygon points="57,27 54,34 57,34 55,40 60,31 57,31" fill="#FCA5A5" opacity="0.8" />
      {/* Verb labels floating around */}
      <text x="14" y="37" fontSize="5" fontWeight="bold" fill="#FECACA" fontFamily="monospace">ich</text>
      <text x="59" y="24" fontSize="5" fontWeight="bold" fill="#FECACA" fontFamily="monospace">er</text>
      <text x="18" y="22" fontSize="5" fontWeight="bold" fill="#FCA5A5" fontFamily="monospace">wir</text>
      {/* Energy arc lines */}
      <path d="M28,38 Q34,34 39,37" stroke="#FCA5A5" strokeWidth="1" fill="none" strokeDasharray="2 1" opacity="0.7" />
      <path d="M54,36 Q48,32 44,35" stroke="#FCA5A5" strokeWidth="1" fill="none" strokeDasharray="2 1" opacity="0.7" />
      {/* Sparkles */}
      <text x="16" y="48" fontSize="6" fill="rgba(239,68,68,0.6)">✦</text>
      <text x="60" y="47" fontSize="5" fill="rgba(252,165,165,0.65)">✦</text>
    </svg>
  );
}

// i3 — Adjektive: Emerald theater-mask island with comparison arrows
export function K3IslandAdjektive({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Glow beneath */}
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(16,185,129,0.2)" />
      {/* Rocky underside */}
      <path d="M21,50 Q26,63 32,59 Q38,68 44,62 Q50,68 56,59 Q62,63 59,50Z" fill="#062A1A" />
      <path d="M26,53 Q28,62 31,58Z" fill="#041A10" />
      <path d="M50,53 Q53,62 55,57Z" fill="#041A10" />
      {/* Island body */}
      <ellipse cx="40" cy="48" rx="21" ry="9" fill="#064E35" />
      {/* Top surface */}
      <ellipse cx="40" cy="42" rx="21" ry="8" fill="#065F42" />
      <ellipse cx="40" cy="39" rx="19" ry="6" fill="#059669" />
      {/* Happy mask (left) */}
      <ellipse cx="29" cy="32" rx="8" ry="9" fill="#FBBF24" />
      <ellipse cx="29" cy="31" rx="7" ry="8" fill="#FCD34D" />
      {/* Happy eyes */}
      <ellipse cx="26.5" cy="29" rx="1.2" ry="1.5" fill="#92400E" />
      <ellipse cx="31.5" cy="29" rx="1.2" ry="1.5" fill="#92400E" />
      {/* Happy mouth arc */}
      <path d="M25,33 Q29,37 33,33" stroke="#92400E" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      {/* Sad mask (right) */}
      <ellipse cx="52" cy="32" rx="8" ry="9" fill="#818CF8" />
      <ellipse cx="52" cy="31" rx="7" ry="8" fill="#A5B4FC" />
      {/* Sad eyes */}
      <ellipse cx="49.5" cy="29" rx="1.2" ry="1.5" fill="#312E81" />
      <ellipse cx="54.5" cy="29" rx="1.2" ry="1.5" fill="#312E81" />
      {/* Sad mouth arc (inverted) */}
      <path d="M48,34 Q52,30 56,34" stroke="#312E81" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      {/* Comparison label strip beneath masks */}
      <rect x="22" y="41" width="13" height="4" rx="1" fill="rgba(0,0,0,0.3)" />
      <text x="28.5" y="44.5" textAnchor="middle" fontSize="4" fontWeight="bold" fill="#A7F3D0" fontFamily="monospace">klein</text>
      <rect x="45" y="41" width="16" height="4" rx="1" fill="rgba(0,0,0,0.3)" />
      <text x="53" y="44.5" textAnchor="middle" fontSize="4" fontWeight="bold" fill="#A7F3D0" fontFamily="monospace">größer</text>
      {/* Arrow between masks */}
      <line x1="38" y1="32" x2="43" y2="32" stroke="#6EE7B7" strokeWidth="1.5" />
      <polygon points="43,30.5 43,33.5 46,32" fill="#6EE7B7" />
      {/* Sparkles */}
      <text x="14" y="34" fontSize="7" fill="rgba(16,185,129,0.65)">✦</text>
      <text x="62" y="46" fontSize="6" fill="rgba(110,231,183,0.6)">✦</text>
    </svg>
  );
}

// i4 — Satzglieder: Amber magnifying-glass island with sentence parts underlined
export function K3IslandSatzglieder({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Glow beneath */}
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(245,158,11,0.2)" />
      {/* Rocky underside */}
      <path d="M21,50 Q26,63 31,59 Q37,68 43,62 Q50,68 55,59 Q61,63 59,50Z" fill="#3A2000" />
      <path d="M26,53 Q28,62 31,58Z" fill="#261500" />
      <path d="M50,53 Q53,62 55,57Z" fill="#261500" />
      {/* Island body */}
      <ellipse cx="40" cy="48" rx="21" ry="9" fill="#78450A" />
      {/* Top surface — sandy amber */}
      <ellipse cx="40" cy="42" rx="21" ry="8" fill="#92530D" />
      <ellipse cx="40" cy="39" rx="19" ry="6" fill="#B45309" />
      {/* Sentence strip background */}
      <rect x="17" y="36" width="46" height="7" rx="2" fill="rgba(255,255,255,0.15)" />
      {/* Sentence text */}
      <text x="20" y="41.5" fontSize="5" fontWeight="bold" fill="#FDE68A" fontFamily="monospace">Die Katze</text>
      <text x="42" y="41.5" fontSize="5" fontWeight="bold" fill="#FCA5A5" fontFamily="monospace">schläft</text>
      {/* Subject underline (blue) */}
      <line x1="20" y1="43.5" x2="38" y2="43.5" stroke="#93C5FD" strokeWidth="1.5" />
      {/* Predicate underline (red) */}
      <line x1="42" y1="43.5" x2="59" y2="43.5" stroke="#FCA5A5" strokeWidth="1.5" />
      {/* Magnifying glass */}
      <circle cx="44" cy="27" r="8" fill="none" stroke="#FCD34D" strokeWidth="2" />
      <circle cx="44" cy="27" r="7" fill="rgba(255,255,255,0.08)" />
      {/* Glass reflection glint */}
      <path d="M39,23 Q41,21 43,23" stroke="rgba(255,255,255,0.5)" strokeWidth="1" fill="none" strokeLinecap="round" />
      {/* Magnifying glass handle */}
      <line x1="50" y1="33" x2="56" y2="39" stroke="#FCD34D" strokeWidth="2.5" strokeLinecap="round" />
      {/* "S" and "P" labels inside lens */}
      <text x="40" y="26.5" fontSize="5" fontWeight="bold" fill="#FDE68A" fontFamily="monospace">S</text>
      <text x="45.5" y="26.5" fontSize="5" fontWeight="bold" fill="#FCA5A5" fontFamily="monospace">P</text>
      {/* Sparkles */}
      <text x="14" y="30" fontSize="7" fill="rgba(245,158,11,0.65)">✦</text>
      <text x="63" y="32" fontSize="6" fill="rgba(253,230,138,0.6)">✦</text>
    </svg>
  );
}

// i5 — Zeitformen: Indigo hourglass island with time flow and tense labels
export function K3IslandZeitformen({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Glow beneath */}
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(99,102,241,0.22)" />
      {/* Rocky underside */}
      <path d="M21,50 Q26,63 31,59 Q37,68 43,62 Q50,68 55,59 Q61,63 59,50Z" fill="#1A0A3A" />
      <path d="M26,53 Q28,62 31,58Z" fill="#100626" />
      <path d="M50,53 Q53,62 55,57Z" fill="#100626" />
      {/* Island body */}
      <ellipse cx="40" cy="48" rx="21" ry="9" fill="#2D1B69" />
      {/* Top surface — indigo */}
      <ellipse cx="40" cy="42" rx="21" ry="8" fill="#3730A3" />
      <ellipse cx="40" cy="39" rx="19" ry="6" fill="#4338CA" />
      {/* Hourglass frame */}
      <path d="M33,18 L47,18 L47,19.5 L41,27 L41,33 L47,40.5 L47,42 L33,42 L33,40.5 L39,33 L39,27 L33,19.5Z" fill="#6366F1" />
      <path d="M33,18 L47,18 L47,19.5 L41,27 L41,33 L47,40.5 L47,42 L33,42 L33,40.5 L39,33 L39,27 L33,19.5Z" fill="none" stroke="#A5B4FC" strokeWidth="1.2" />
      {/* Sand in bottom half */}
      <path d="M34,40.5 L39,34.5 L41,34.5 L46,40.5Z" fill="#FCD34D" opacity="0.9" />
      {/* Sand stream in middle */}
      <line x1="40" y1="27" x2="40" y2="33" stroke="#FCD34D" strokeWidth="1.5" strokeDasharray="1 1" opacity="0.8" />
      {/* Top empty sand area */}
      <path d="M34,19.5 L46,19.5 L46,20.5 L40,27 L34,20.5Z" fill="#FDE68A" opacity="0.3" />
      {/* Top bar */}
      <rect x="32" y="16.5" width="16" height="2" rx="1" fill="#818CF8" />
      {/* Bottom bar */}
      <rect x="32" y="41.5" width="16" height="2" rx="1" fill="#818CF8" />
      {/* Tense labels */}
      <text x="15" y="28" fontSize="4.5" fontWeight="bold" fill="#C7D2FE" fontFamily="monospace">Vergan</text>
      <text x="15" y="33" fontSize="4.5" fontWeight="bold" fill="#C7D2FE" fontFamily="monospace">genheit</text>
      <text x="53" y="28" fontSize="4.5" fontWeight="bold" fill="#C7D2FE" fontFamily="monospace">Gegen</text>
      <text x="54" y="33" fontSize="4.5" fontWeight="bold" fill="#C7D2FE" fontFamily="monospace">wart</text>
      {/* Sparkles */}
      <text x="13" y="44" fontSize="7" fill="rgba(99,102,241,0.65)">✦</text>
      <text x="62" y="45" fontSize="6" fill="rgba(165,180,252,0.6)">✦</text>
    </svg>
  );
}

// i6 — Rede: Pink speech-bubble island with quotation marks and conversation clouds
export function K3IslandRede({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Glow beneath */}
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(236,72,153,0.2)" />
      {/* Rocky underside */}
      <path d="M21,50 Q26,63 32,59 Q38,68 44,62 Q50,68 56,59 Q62,63 59,50Z" fill="#3A0A20" />
      <path d="M26,53 Q28,62 31,58Z" fill="#280614" />
      <path d="M50,53 Q53,62 55,57Z" fill="#280614" />
      {/* Island body */}
      <ellipse cx="40" cy="48" rx="21" ry="9" fill="#831843" />
      {/* Top surface — deep rose */}
      <ellipse cx="40" cy="42" rx="21" ry="8" fill="#9D174D" />
      <ellipse cx="40" cy="39" rx="19" ry="6" fill="#BE185D" />
      {/* Main speech bubble — left character */}
      <rect x="15" y="22" width="24" height="13" rx="4" fill="rgba(236,72,153,0.3)" stroke="#EC4899" strokeWidth="1.3" />
      <polygon points="20,35 25,35 20,40" fill="#EC4899" opacity="0.8" />
      {/* Quotation marks in left bubble */}
      <text x="19" y="31" fontSize="8" fontWeight="bold" fill="#FBCFE8">"</text>
      <text x="28" y="33" fontSize="8" fontWeight="bold" fill="#FBCFE8">"</text>
      {/* Small text line inside left bubble */}
      <line x1="24" y1="29" x2="35" y2="29" stroke="#FBCFE8" strokeWidth="0.7" opacity="0.7" />
      <line x1="23" y1="32" x2="33" y2="32" stroke="#FBCFE8" strokeWidth="0.7" opacity="0.5" />
      {/* Second speech bubble — right character, smaller */}
      <rect x="43" y="26" width="22" height="10" rx="3.5" fill="rgba(244,114,182,0.25)" stroke="#F472B6" strokeWidth="1" />
      <polygon points="60,36 65,36 62,40" fill="#F472B6" opacity="0.7" />
      {/* Text lines in right bubble */}
      <line x1="46" y1="30" x2="62" y2="30" stroke="#FBCFE8" strokeWidth="0.7" opacity="0.7" />
      <line x1="46" y1="33" x2="59" y2="33" stroke="#FBCFE8" strokeWidth="0.7" opacity="0.5" />
      {/* Small label: direkte Rede */}
      <rect x="27" y="43" width="26" height="4" rx="1.5" fill="rgba(0,0,0,0.25)" />
      <text x="40" y="46.2" textAnchor="middle" fontSize="3.8" fontWeight="bold" fill="#FBCFE8" fontFamily="monospace">direkte Rede</text>
      {/* Sparkles */}
      <text x="13" y="22" fontSize="7" fill="rgba(236,72,153,0.65)">✦</text>
      <text x="62" y="24" fontSize="6" fill="rgba(251,207,232,0.6)">✦</text>
    </svg>
  );
}

// i7 — Rechtschreibung1: Teal fountain-pen island with "ie" rule and correction marks
export function K3IslandRechtschreibung1({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Glow beneath */}
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(20,184,166,0.2)" />
      {/* Rocky underside */}
      <path d="M21,50 Q26,63 31,59 Q37,68 43,62 Q50,68 55,59 Q61,63 59,50Z" fill="#0A2A28" />
      <path d="M26,53 Q28,62 31,58Z" fill="#061A18" />
      <path d="M50,53 Q53,62 55,57Z" fill="#061A18" />
      {/* Island body */}
      <ellipse cx="40" cy="48" rx="21" ry="9" fill="#134E4A" />
      {/* Top surface — teal */}
      <ellipse cx="40" cy="42" rx="21" ry="8" fill="#0F766E" />
      <ellipse cx="40" cy="39" rx="19" ry="6" fill="#0D9488" />
      {/* Lined paper background */}
      <rect x="20" y="23" width="40" height="20" rx="2" fill="rgba(255,255,255,0.12)" />
      <line x1="21" y1="28" x2="59" y2="28" stroke="rgba(153,246,228,0.35)" strokeWidth="0.7" />
      <line x1="21" y1="33" x2="59" y2="33" stroke="rgba(153,246,228,0.35)" strokeWidth="0.7" />
      <line x1="21" y1="38" x2="59" y2="38" stroke="rgba(153,246,228,0.35)" strokeWidth="0.7" />
      {/* "ie" rule prominent text */}
      <text x="31" y="31" fontSize="10" fontWeight="bold" fill="#CCFBF1" fontFamily="monospace">ie</text>
      {/* Underline emphasis */}
      <line x1="24" y1="32.5" x2="43" y2="32.5" stroke="#2DD4BF" strokeWidth="1.8" />
      {/* Example word "Brief" */}
      <text x="26" y="40" fontSize="6" fontWeight="bold" fill="#99F6E4" fontFamily="monospace">Brief</text>
      {/* Correction checkmark */}
      <path d="M50,29 L53,33 L59,25" stroke="#34D399" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      {/* Fountain pen */}
      <rect x="54" y="37" width="3" height="11" rx="1.5" fill="#5EEAD4" transform="rotate(-35 54 37)" />
      <polygon points="54,47 57,47 55.5,52" fill="#0D9488" transform="rotate(-35 54 37)" />
      <rect x="54" y="37" width="3" height="3" rx="0.5" fill="#99F6E4" transform="rotate(-35 54 37)" />
      {/* Ink dot from pen */}
      <circle cx="48" cy="42" r="1.5" fill="#2DD4BF" opacity="0.8" />
      {/* Sparkles */}
      <text x="13" y="30" fontSize="7" fill="rgba(20,184,166,0.65)">✦</text>
      <text x="63" y="46" fontSize="6" fill="rgba(153,246,228,0.6)">✦</text>
    </svg>
  );
}

// i8 — Rechtschreibung2: Amber pushpin island with comma and correction tape
export function K3IslandRechtschreibung2({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Glow beneath */}
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(245,158,11,0.22)" />
      {/* Rocky underside */}
      <path d="M21,50 Q26,63 31,59 Q37,68 43,62 Q50,68 55,59 Q61,63 59,50Z" fill="#3A2A00" />
      <path d="M26,53 Q28,62 31,58Z" fill="#261C00" />
      <path d="M50,53 Q53,62 55,57Z" fill="#261C00" />
      {/* Island body */}
      <ellipse cx="40" cy="48" rx="21" ry="9" fill="#7C4A00" />
      {/* Top surface — warm amber */}
      <ellipse cx="40" cy="42" rx="21" ry="8" fill="#92580A" />
      <ellipse cx="40" cy="39" rx="19" ry="6" fill="#B45309" />
      {/* Correction tape strip across island */}
      <rect x="18" y="37" width="44" height="5" rx="1" fill="rgba(255,255,255,0.18)" stroke="#FCD34D" strokeWidth="0.7" />
      {/* Text with strikethrough (wrong) */}
      <text x="22" y="41" fontSize="5.5" fontWeight="bold" fill="#FCA5A5" fontFamily="monospace">falsch</text>
      <line x1="22" y1="40" x2="42" y2="40" stroke="#EF4444" strokeWidth="1" />
      {/* Corrected text */}
      <text x="44" y="41" fontSize="5.5" fontWeight="bold" fill="#A7F3D0" fontFamily="monospace">richtig</text>
      {/* Pushpin — prominent decoration */}
      <circle cx="55" cy="24" r="5.5" fill="#F59E0B" />
      <circle cx="55" cy="24" r="3.5" fill="#FCD34D" />
      <circle cx="55" cy="24" r="1.5" fill="#B45309" />
      <line x1="55" y1="29" x2="55" y2="36" stroke="#78350F" strokeWidth="2" strokeLinecap="round" />
      {/* Large comma symbol */}
      <text x="28" y="34" fontSize="16" fontWeight="bold" fill="#FDE68A" fontFamily="serif" opacity="0.9">,</text>
      {/* Exclamation mark */}
      <text x="38" y="32" fontSize="12" fontWeight="bold" fill="#FDE68A" fontFamily="serif" opacity="0.7">!</text>
      {/* Small rule note */}
      <rect x="14" y="24" width="16" height="7" rx="1.5" fill="rgba(0,0,0,0.3)" />
      <text x="22" y="29" textAnchor="middle" fontSize="4" fill="#FDE68A" fontFamily="monospace">Komma</text>
      {/* Sparkles */}
      <text x="14" y="45" fontSize="7" fill="rgba(245,158,11,0.65)">✦</text>
      <text x="63" y="32" fontSize="6" fill="rgba(253,230,138,0.6)">✦</text>
    </svg>
  );
}

// i9 — GrossePruefung: Teal trophy island with star burst and crown (finale)
export function K3IslandGrossePruefung({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Glow beneath */}
      <ellipse cx="40" cy="74" rx="21" ry="5" fill="rgba(78,205,196,0.25)" />
      {/* Star-shaped jagged rocky underside */}
      <path d="M20,50 Q24,58 28,55 Q31,65 36,60 Q39,68 44,63 Q48,68 52,61 Q57,65 60,55 Q64,58 60,50Z" fill="#0A2A28" />
      {/* Island body */}
      <ellipse cx="40" cy="49" rx="22" ry="10" fill="#0D3A38" />
      {/* Top surface — teal */}
      <ellipse cx="40" cy="43" rx="22" ry="8" fill="#155E5A" />
      <ellipse cx="40" cy="40" rx="20" ry="6" fill="#1A6E6A" />
      {/* Star burst rays behind trophy — all 8 rays as static lines */}
      <line x1="40" y1="25" x2="40" y2="18" stroke="#4ECDC4" strokeWidth="1.5" opacity="0.6" />
      <line x1="45.7" y1="26.7" x2="50.5" y2="21.9" stroke="#4ECDC4" strokeWidth="1.5" opacity="0.6" />
      <line x1="47.5" y1="32" x2="54.5" y2="32" stroke="#4ECDC4" strokeWidth="1.5" opacity="0.6" />
      <line x1="45.7" y1="37.3" x2="50.5" y2="42.1" stroke="#4ECDC4" strokeWidth="1.5" opacity="0.6" />
      <line x1="40" y1="39" x2="40" y2="46" stroke="#4ECDC4" strokeWidth="1.5" opacity="0.6" />
      <line x1="34.3" y1="37.3" x2="29.5" y2="42.1" stroke="#4ECDC4" strokeWidth="1.5" opacity="0.6" />
      <line x1="32.5" y1="32" x2="25.5" y2="32" stroke="#4ECDC4" strokeWidth="1.5" opacity="0.6" />
      <line x1="34.3" y1="26.7" x2="29.5" y2="21.9" stroke="#4ECDC4" strokeWidth="1.5" opacity="0.6" />
      {/* Trophy cup body */}
      <path d="M34,22 Q34,34 40,36 Q46,34 46,22Z" fill="#FFD700" />
      {/* Trophy inner shading */}
      <path d="M36,23 Q36,32 40,34 Q44,32 44,23Z" fill="#FCD34D" opacity="0.6" />
      {/* Trophy stem */}
      <rect x="37" y="35" width="6" height="4" fill="#FFA000" />
      {/* Trophy base */}
      <rect x="34" y="39" width="12" height="2.5" rx="1" fill="#FFD700" />
      {/* Trophy handles */}
      <path d="M34,24 Q30,24 30,28 Q30,32 34,30" stroke="#FFD700" strokeWidth="1.5" fill="none" />
      <path d="M46,24 Q50,24 50,28 Q50,32 46,30" stroke="#FFD700" strokeWidth="1.5" fill="none" />
      {/* Crown on top of trophy */}
      <path d="M34,22 L35,18 L38,21 L40,17 L42,21 L45,18 L46,22Z" fill="#FFD700" />
      {/* Crown gems */}
      <circle cx="38" cy="20" r="1" fill="#EF4444" />
      <circle cx="40" cy="17.5" r="1" fill="#3B82F6" />
      <circle cx="42" cy="20" r="1" fill="#10B981" />
      {/* Star beside trophy */}
      <text x="17" y="32" fontSize="9" fill="#4ECDC4">⭐</text>
      <text x="56" y="30" fontSize="8" fill="#4ECDC4">⭐</text>
      {/* Floating sparkle */}
      <text x="38" y="14" fontSize="7" fill="rgba(78,205,196,0.85)">✦</text>
      {/* Small confetti dots */}
      <circle cx="16" cy="40" r="1.5" fill="#F59E0B" opacity="0.8" />
      <circle cx="63" cy="42" r="1.5" fill="#EC4899" opacity="0.8" />
      <circle cx="14" cy="46" r="1" fill="#3B82F6" opacity="0.7" />
      <circle cx="65" cy="36" r="1" fill="#10B981" opacity="0.7" />
    </svg>
  );
}

// Export map for all K3 islands
export const K3_ISLAND_SVGS: Record<string, React.FC<{ size?: number }>> = {
  i1: K3IslandPlural,
  i2: K3IslandVerben,
  i3: K3IslandAdjektive,
  i4: K3IslandSatzglieder,
  i5: K3IslandZeitformen,
  i6: K3IslandRede,
  i7: K3IslandRechtschreibung1,
  i8: K3IslandRechtschreibung2,
  i9: K3IslandGrossePruefung,
};
