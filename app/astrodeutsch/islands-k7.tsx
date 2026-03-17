// SVG Island illustrations for AstroDeutsch K7 map
// Each island is a unique floating fantasy landmass matching its theme
// viewBox: "0 0 80 80", renders at 48-60px on mobile

type IP = { size?: number };

// i1 — Konjunktiv1: Purple thought-bubble island with indirect speech
export function K7IslandKonjunktiv1({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Glow beneath */}
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(180,77,255,0.2)" />
      {/* Rocky underside */}
      <path d="M22,50 Q27,63 32,59 Q38,68 44,62 Q50,68 55,59 Q60,63 58,50Z" fill="#2A0A3A" />
      <path d="M27,53 Q29,61 32,58Z" fill="#1E0828" />
      <path d="M48,52 Q51,61 53,57Z" fill="#1E0828" />
      {/* Island body */}
      <ellipse cx="40" cy="47" rx="20" ry="9" fill="#3D0D5A" />
      {/* Dreamy purple top */}
      <ellipse cx="40" cy="42" rx="20" ry="8" fill="#5B2182" />
      <ellipse cx="40" cy="39" rx="18" ry="6" fill="#7B35B0" />
      {/* Main thought bubble */}
      <ellipse cx="40" cy="27" rx="14" ry="8" fill="rgba(180,77,255,0.25)" stroke="#B44DFF" strokeWidth="1.2" />
      {/* Thought bubble tail (dots) */}
      <circle cx="33" cy="36" r="2" fill="rgba(180,77,255,0.35)" stroke="#B44DFF" strokeWidth="0.8" />
      <circle cx="30" cy="40" r="1.3" fill="rgba(180,77,255,0.3)" stroke="#B44DFF" strokeWidth="0.7" />
      {/* Text inside bubble: "er sage" */}
      <text x="40" y="25" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#E0AAFF" fontFamily="monospace">er sage</text>
      <text x="40" y="32" textAnchor="middle" fontSize="5.5" fill="#C084FC" fontFamily="monospace">habe</text>
      {/* Quotation marks */}
      <text x="27" y="23" fontSize="9" fill="rgba(180,77,255,0.7)">"</text>
      <text x="50" y="23" fontSize="9" fill="rgba(180,77,255,0.7)">"</text>
      {/* Sparkles */}
      <text x="15" y="30" fontSize="7" fill="rgba(180,77,255,0.6)">✦</text>
      <text x="59" y="28" fontSize="6" fill="rgba(180,77,255,0.5)">✦</text>
      <text x="58" y="42" fontSize="5" fill="rgba(180,77,255,0.4)">✦</text>
    </svg>
  );
}

// i2 — WerdenPassiv: Blue mechanical island with gears and "werden+Partizip"
export function K7IslandWerdenPassiv({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Glow beneath */}
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(59,130,246,0.2)" />
      {/* Rocky underside */}
      <path d="M21,50 Q26,63 31,59 Q37,68 43,62 Q49,68 55,59 Q60,63 59,50Z" fill="#0A1A3A" />
      <path d="M26,53 Q28,62 31,58Z" fill="#061228" />
      <path d="M49,53 Q52,62 54,57Z" fill="#061228" />
      {/* Island body */}
      <ellipse cx="40" cy="47" rx="20" ry="9" fill="#0D2550" />
      {/* Steel-blue top */}
      <ellipse cx="40" cy="42" rx="20" ry="8" fill="#1A3A6A" />
      <ellipse cx="40" cy="39" rx="18" ry="6" fill="#1E4A80" />
      {/* Large gear (left) */}
      <circle cx="32" cy="29" r="9" fill="#1565C0" />
      <circle cx="32" cy="29" r="6" fill="#1E4A80" />
      <circle cx="32" cy="29" r="2.5" fill="#3B82F6" />
      {/* Gear teeth left */}
      <rect x="29.5" y="18.5" width="5" height="3" rx="0.8" fill="#1565C0" />
      <rect x="29.5" y="37" width="5" height="3" rx="0.8" fill="#1565C0" />
      <rect x="21" y="26.5" width="3" height="5" rx="0.8" fill="#1565C0" />
      <rect x="40" y="26.5" width="3" height="5" rx="0.8" fill="#1565C0" />
      {/* Diagonal teeth */}
      <rect x="22.5" y="20.5" width="3" height="5" rx="0.8" fill="#1565C0" transform="rotate(-45 22.5 20.5)" />
      <rect x="38" y="35" width="3" height="5" rx="0.8" fill="#1565C0" transform="rotate(-45 38 35)" />
      {/* Small gear (right) */}
      <circle cx="50" cy="26" r="6" fill="#1565C0" />
      <circle cx="50" cy="26" r="4" fill="#1E4A80" />
      <circle cx="50" cy="26" r="1.8" fill="#3B82F6" />
      <rect x="47.5" y="18.5" width="5" height="2.5" rx="0.6" fill="#1565C0" />
      <rect x="47.5" y="31" width="5" height="2.5" rx="0.6" fill="#1565C0" />
      <rect x="42.5" y="23.5" width="2.5" height="5" rx="0.6" fill="#1565C0" />
      <rect x="55" y="23.5" width="2.5" height="5" rx="0.6" fill="#1565C0" />
      {/* "werden" label strip */}
      <rect x="20" y="38" width="40" height="5" rx="2" fill="rgba(59,130,246,0.25)" />
      <text x="40" y="42" textAnchor="middle" fontSize="5" fontWeight="bold" fill="#93C5FD" fontFamily="monospace">werden + Partizip II</text>
      {/* Sparkles */}
      <text x="13" y="35" fontSize="7" fill="rgba(59,130,246,0.6)">✦</text>
      <text x="61" y="20" fontSize="6" fill="rgba(59,130,246,0.5)">✦</text>
    </svg>
  );
}

// i3 — PassivModal: Emerald island with interlocking gears (passive+modal)
export function K7IslandPassivModal({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Glow beneath */}
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(16,185,129,0.2)" />
      {/* Rocky underside */}
      <path d="M21,50 Q26,63 31,59 Q37,68 43,62 Q50,68 56,59 Q61,63 59,50Z" fill="#0A2A1E" />
      <path d="M26,53 Q28,62 31,58Z" fill="#061E14" />
      <path d="M50,53 Q53,62 55,57Z" fill="#061E14" />
      {/* Island body */}
      <ellipse cx="40" cy="47" rx="20" ry="9" fill="#0E3A28" />
      {/* Emerald top */}
      <ellipse cx="40" cy="42" rx="20" ry="8" fill="#155E48" />
      <ellipse cx="40" cy="39" rx="18" ry="6" fill="#1A7A5A" />
      {/* Left gear — Passiv */}
      <circle cx="32" cy="28" r="8" fill="#0D6E50" />
      <circle cx="32" cy="28" r="5.5" fill="#1A7A5A" />
      <circle cx="32" cy="28" r="2.2" fill="#10B981" />
      <rect x="29.5" y="18.5" width="5" height="2.5" rx="0.7" fill="#0D6E50" />
      <rect x="29.5" y="35" width="5" height="2.5" rx="0.7" fill="#0D6E50" />
      <rect x="21.5" y="25.5" width="2.5" height="5" rx="0.7" fill="#0D6E50" />
      <rect x="38" y="25.5" width="2.5" height="5" rx="0.7" fill="#0D6E50" />
      <text x="32" y="30" textAnchor="middle" fontSize="4.5" fontWeight="bold" fill="#D1FAE5">Passiv</text>
      {/* Right gear — Modal */}
      <circle cx="50" cy="28" r="8" fill="#065F46" />
      <circle cx="50" cy="28" r="5.5" fill="#0F6B50" />
      <circle cx="50" cy="28" r="2.2" fill="#10B981" />
      <rect x="47.5" y="18.5" width="5" height="2.5" rx="0.7" fill="#065F46" />
      <rect x="47.5" y="35" width="5" height="2.5" rx="0.7" fill="#065F46" />
      <rect x="40" y="25.5" width="2.5" height="5" rx="0.7" fill="#065F46" />
      <rect x="57" y="25.5" width="2.5" height="5" rx="0.7" fill="#065F46" />
      <text x="50" y="30" textAnchor="middle" fontSize="4.5" fontWeight="bold" fill="#D1FAE5">Modal</text>
      {/* Interlocking connector */}
      <circle cx="41" cy="31" r="2" fill="#10B981" opacity="0.7" />
      {/* "müssen+werden" strip */}
      <rect x="22" y="37" width="36" height="4.5" rx="2" fill="rgba(16,185,129,0.25)" />
      <text x="40" y="41" textAnchor="middle" fontSize="4.5" fontWeight="bold" fill="#6EE7B7" fontFamily="monospace">muss gemacht werden</text>
      {/* Sparkles */}
      <text x="13" y="28" fontSize="7" fill="rgba(16,185,129,0.6)">✦</text>
      <text x="60" y="22" fontSize="6" fill="rgba(16,185,129,0.5)">✦</text>
    </svg>
  );
}

// i4 — Stilmittel: Amber island with theater mask, poetry quill, artistic swirls
export function K7IslandStilmittel({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Glow beneath */}
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(245,158,11,0.2)" />
      {/* Rocky underside */}
      <path d="M21,50 Q26,63 32,59 Q38,68 44,62 Q50,68 55,59 Q61,63 59,50Z" fill="#3A1E00" />
      <path d="M26,53 Q28,62 31,58Z" fill="#2A1400" />
      <path d="M49,53 Q52,62 54,57Z" fill="#2A1400" />
      {/* Island body */}
      <ellipse cx="40" cy="47" rx="20" ry="9" fill="#5A3000" />
      {/* Amber top */}
      <ellipse cx="40" cy="42" rx="20" ry="8" fill="#7A4400" />
      <ellipse cx="40" cy="39" rx="18" ry="6" fill="#8B5000" />
      {/* Artistic swirl decorations */}
      <path d="M24,40 Q26,35 30,37 Q34,39 31,43" stroke="#F59E0B" strokeWidth="1.2" fill="none" opacity="0.6" />
      <path d="M56,39 Q54,34 50,36 Q46,38 49,42" stroke="#F59E0B" strokeWidth="1.2" fill="none" opacity="0.6" />
      {/* Happy mask */}
      <ellipse cx="35" cy="27" rx="8" ry="6" fill="#F59E0B" />
      <path d="M29,25 Q35,31 41,25" stroke="#7A4400" strokeWidth="1.5" fill="none" />
      <ellipse cx="32" cy="24" rx="1.5" ry="2" fill="#7A4400" />
      <ellipse cx="38" cy="24" rx="1.5" ry="2" fill="#7A4400" />
      {/* Sad mask (overlapping) */}
      <ellipse cx="48" cy="26" rx="7" ry="5.5" fill="#D97706" />
      <path d="M43,28 Q48,23 53,28" stroke="#5A3000" strokeWidth="1.5" fill="none" />
      <ellipse cx="45.5" cy="24.5" rx="1.2" ry="1.6" fill="#5A3000" />
      <ellipse cx="50.5" cy="24.5" rx="1.2" ry="1.6" fill="#5A3000" />
      {/* Quill / feather */}
      <path d="M20,22 Q18,30 22,34 Q24,28 20,22Z" fill="#FDE68A" />
      <line x1="20" y1="22" x2="22" y2="34" stroke="#7A4400" strokeWidth="0.8" />
      {/* Metaphor sparkles */}
      <text x="56" y="32" fontSize="8" fill="rgba(245,158,11,0.7)">✦</text>
      <text x="14" y="34" fontSize="7" fill="rgba(245,158,11,0.6)">✦</text>
      <text x="39" y="16" fontSize="7" fill="rgba(245,158,11,0.7)">✦</text>
    </svg>
  );
}

// i5 — KausalKonditional: Indigo island with branching fork-in-road and signposts
export function K7IslandKausalKonditional({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Glow beneath */}
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(99,102,241,0.2)" />
      {/* Rocky underside */}
      <path d="M21,50 Q26,63 32,59 Q38,68 44,62 Q50,68 55,59 Q61,63 59,50Z" fill="#0E0E2A" />
      <path d="M26,53 Q28,62 31,58Z" fill="#080820" />
      <path d="M49,53 Q52,62 54,57Z" fill="#080820" />
      {/* Island body */}
      <ellipse cx="40" cy="47" rx="20" ry="9" fill="#141440" />
      {/* Indigo top */}
      <ellipse cx="40" cy="42" rx="20" ry="8" fill="#1E1E5E" />
      <ellipse cx="40" cy="39" rx="18" ry="6" fill="#252570" />
      {/* Main path stem */}
      <rect x="38.5" y="33" width="3" height="10" rx="1" fill="#818CF8" opacity="0.8" />
      {/* Fork left branch */}
      <path d="M40,33 Q33,27 28,24" stroke="#818CF8" strokeWidth="2.2" fill="none" strokeLinecap="round" />
      {/* Fork right branch */}
      <path d="M40,33 Q47,27 52,24" stroke="#6366F1" strokeWidth="2.2" fill="none" strokeLinecap="round" />
      {/* Left signpost — weil */}
      <rect x="21" y="19" width="14" height="7" rx="2" fill="#4338CA" />
      <polygon points="21,22.5 18,22.5 21,25" fill="#4338CA" />
      <text x="28" y="24.5" textAnchor="middle" fontSize="5.5" fontWeight="bold" fill="#E0E7FF">weil</text>
      {/* Right signpost — wenn */}
      <rect x="45" y="19" width="14" height="7" rx="2" fill="#4F46E5" />
      <polygon points="59,22.5 62,22.5 59,25" fill="#4F46E5" />
      <text x="52" y="24.5" textAnchor="middle" fontSize="5.5" fontWeight="bold" fill="#E0E7FF">wenn</text>
      {/* Arrow on left path */}
      <polygon points="26,24 29,21 29,27" fill="#818CF8" opacity="0.7" />
      {/* Arrow on right path */}
      <polygon points="54,24 51,21 51,27" fill="#6366F1" opacity="0.7" />
      {/* Sparkles */}
      <text x="14" y="35" fontSize="7" fill="rgba(99,102,241,0.6)">✦</text>
      <text x="60" y="40" fontSize="6" fill="rgba(99,102,241,0.5)">✦</text>
      <text x="37" y="15" fontSize="6" fill="rgba(99,102,241,0.5)">✦</text>
    </svg>
  );
}

// i6 — KonzessivFinal: Pink island with target and purpose arrow
export function K7IslandKonzessivFinal({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Glow beneath */}
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(236,72,153,0.2)" />
      {/* Rocky underside */}
      <path d="M21,50 Q26,63 32,59 Q38,68 44,62 Q50,68 55,59 Q61,63 59,50Z" fill="#2A0A1E" />
      <path d="M26,53 Q28,62 31,58Z" fill="#1E0615" />
      <path d="M49,53 Q52,62 54,57Z" fill="#1E0615" />
      {/* Island body */}
      <ellipse cx="40" cy="47" rx="20" ry="9" fill="#3D0D2A" />
      {/* Pink top */}
      <ellipse cx="40" cy="42" rx="20" ry="8" fill="#5E1A40" />
      <ellipse cx="40" cy="39" rx="18" ry="6" fill="#72204E" />
      {/* Target rings */}
      <circle cx="40" cy="26" r="12" fill="none" stroke="#EC4899" strokeWidth="1.5" opacity="0.4" />
      <circle cx="40" cy="26" r="8.5" fill="none" stroke="#EC4899" strokeWidth="1.5" opacity="0.6" />
      <circle cx="40" cy="26" r="5" fill="none" stroke="#F472B6" strokeWidth="1.5" opacity="0.8" />
      <circle cx="40" cy="26" r="2.5" fill="#EC4899" />
      {/* Arrow hitting target */}
      <line x1="15" y1="26" x2="37.5" y2="26" stroke="#F9A8D4" strokeWidth="1.8" strokeLinecap="round" />
      <polygon points="37.5,23 37.5,29 43,26" fill="#F9A8D4" />
      {/* Arrow tail feathers */}
      <path d="M15,26 L18,23 M15,26 L18,29" stroke="#F9A8D4" strokeWidth="1.3" strokeLinecap="round" />
      {/* "obwohl" label top */}
      <rect x="49" y="16" width="16" height="6" rx="2" fill="rgba(236,72,153,0.3)" stroke="#EC4899" strokeWidth="0.8" />
      <text x="57" y="20.5" textAnchor="middle" fontSize="5" fontWeight="bold" fill="#FBCFE8">obwohl</text>
      {/* "damit" label */}
      <rect x="49" y="24" width="14" height="6" rx="2" fill="rgba(236,72,153,0.25)" stroke="#EC4899" strokeWidth="0.8" />
      <text x="56" y="28.5" textAnchor="middle" fontSize="5" fontWeight="bold" fill="#FBCFE8">damit</text>
      {/* Sparkles */}
      <text x="14" y="20" fontSize="7" fill="rgba(236,72,153,0.6)">✦</text>
      <text x="60" y="38" fontSize="6" fill="rgba(236,72,153,0.5)">✦</text>
    </svg>
  );
}

// i7 — Temporalsatz: Teal island with stopwatch and timeline markers
export function K7IslandTemporalsatz({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Glow beneath */}
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(20,184,166,0.2)" />
      {/* Rocky underside */}
      <path d="M21,50 Q27,63 32,59 Q38,68 44,62 Q50,68 56,59 Q61,63 59,50Z" fill="#0A2220" />
      <path d="M26,53 Q28,62 31,58Z" fill="#061816" />
      <path d="M50,53 Q53,62 55,57Z" fill="#061816" />
      {/* Island body */}
      <ellipse cx="40" cy="47" rx="20" ry="9" fill="#0D3430" />
      {/* Teal top */}
      <ellipse cx="40" cy="42" rx="20" ry="8" fill="#155E58" />
      <ellipse cx="40" cy="39" rx="18" ry="6" fill="#1A7A72" />
      {/* Stopwatch body */}
      <circle cx="40" cy="26" r="10" fill="#0F4F4A" stroke="#14B8A6" strokeWidth="1.5" />
      <circle cx="40" cy="26" r="8" fill="#115C56" />
      {/* Watch crown / button */}
      <rect x="38" y="14" width="4" height="3" rx="1" fill="#14B8A6" />
      <rect x="42" y="15" width="3" height="2" rx="0.8" fill="#0D9488" />
      {/* Clock hands */}
      <line x1="40" y1="26" x2="40" y2="19.5" stroke="#5EEAD4" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="40" y1="26" x2="45" y2="29" stroke="#99F6E4" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="40" cy="26" r="1.2" fill="#14B8A6" />
      {/* Tick marks on watch */}
      <line x1="40" y1="18" x2="40" y2="19.5" stroke="#14B8A6" strokeWidth="1" />
      <line x1="40" y1="33" x2="40" y2="34.5" stroke="#14B8A6" strokeWidth="1" />
      <line x1="31.5" y1="26" x2="33" y2="26" stroke="#14B8A6" strokeWidth="1" />
      <line x1="47" y1="26" x2="48.5" y2="26" stroke="#14B8A6" strokeWidth="1" />
      {/* Timeline below */}
      <line x1="15" y1="39" x2="65" y2="39" stroke="#14B8A6" strokeWidth="1.2" opacity="0.6" />
      {/* Timeline markers */}
      <rect x="18" y="36.5" width="1.5" height="5" rx="0.5" fill="#14B8A6" opacity="0.8" />
      <rect x="32" y="36.5" width="1.5" height="5" rx="0.5" fill="#14B8A6" opacity="0.8" />
      <rect x="46" y="36.5" width="1.5" height="5" rx="0.5" fill="#14B8A6" opacity="0.8" />
      <rect x="62" y="36.5" width="1.5" height="5" rx="0.5" fill="#14B8A6" opacity="0.8" />
      {/* Labels: als, wenn, nachdem */}
      <text x="19" y="35" textAnchor="middle" fontSize="4" fill="#5EEAD4">als</text>
      <text x="32.5" y="35" textAnchor="middle" fontSize="4" fill="#5EEAD4">wenn</text>
      <text x="47" y="35" textAnchor="middle" fontSize="3.8" fill="#5EEAD4">nachdem</text>
      {/* Sparkles */}
      <text x="13" y="28" fontSize="7" fill="rgba(20,184,166,0.6)">✦</text>
      <text x="61" y="24" fontSize="6" fill="rgba(20,184,166,0.5)">✦</text>
    </svg>
  );
}

// i8 — Infinitivkonstruktionen: Purple vine island with "um zu / statt zu / ohne zu" leaves
export function K7IslandInfinitivkonstruktionen({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Glow beneath */}
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(168,85,247,0.2)" />
      {/* Rocky underside */}
      <path d="M21,50 Q26,63 32,59 Q38,68 44,62 Q50,68 55,59 Q61,63 59,50Z" fill="#1E0A2E" />
      <path d="M26,53 Q28,62 31,58Z" fill="#160620" />
      <path d="M49,53 Q52,62 54,57Z" fill="#160620" />
      {/* Island body */}
      <ellipse cx="40" cy="47" rx="20" ry="9" fill="#2D0A46" />
      {/* Purple top */}
      <ellipse cx="40" cy="42" rx="20" ry="8" fill="#42106A" />
      <ellipse cx="40" cy="39" rx="18" ry="6" fill="#521480" />
      {/* Main vine stem */}
      <path d="M40,41 Q40,34 40,28 Q39,22 36,18" stroke="#7C3AED" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      {/* Left vine branch — um zu */}
      <path d="M40,32 Q34,29 30,26" stroke="#9333EA" strokeWidth="1.4" fill="none" strokeLinecap="round" />
      <ellipse cx="28" cy="24.5" rx="7" ry="3.5" fill="#6D28D9" transform="rotate(-20 28 24.5)" />
      <text x="28" y="26" textAnchor="middle" fontSize="4.5" fontWeight="bold" fill="#E9D5FF" transform="rotate(-20 28 26)">um zu</text>
      {/* Right vine branch — statt zu */}
      <path d="M40,27 Q46,24 50,21" stroke="#9333EA" strokeWidth="1.4" fill="none" strokeLinecap="round" />
      <ellipse cx="52" cy="19.5" rx="8" ry="3.5" fill="#5B21B6" transform="rotate(15 52 19.5)" />
      <text x="52" y="21" textAnchor="middle" fontSize="4" fontWeight="bold" fill="#E9D5FF" transform="rotate(15 52 21)">statt zu</text>
      {/* Top leaf — ohne zu */}
      <path d="M40,26 Q37,21 36,17" stroke="#9333EA" strokeWidth="1.3" fill="none" strokeLinecap="round" />
      <ellipse cx="35" cy="15" rx="7.5" ry="3.5" fill="#7C3AED" transform="rotate(-10 35 15)" />
      <text x="35" y="16.5" textAnchor="middle" fontSize="4.5" fontWeight="bold" fill="#EDE9FE" transform="rotate(-10 35 16.5)">ohne zu</text>
      {/* Tiny vine tendrils */}
      <path d="M40,35 Q43,33 44,30" stroke="#A78BFA" strokeWidth="0.9" fill="none" opacity="0.6" />
      <path d="M40,30 Q37,28 37,25" stroke="#A78BFA" strokeWidth="0.9" fill="none" opacity="0.6" />
      {/* Sparkles */}
      <text x="14" y="32" fontSize="7" fill="rgba(168,85,247,0.6)">✦</text>
      <text x="59" y="34" fontSize="6" fill="rgba(168,85,247,0.5)">✦</text>
    </svg>
  );
}

// i9 — GrossePruefung: Teal star island with trophy, crown, star burst
export function K7IslandGrossePruefung({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Glow beneath */}
      <ellipse cx="40" cy="74" rx="21" ry="5" fill="rgba(78,205,196,0.22)" />
      {/* Star-shaped / jagged rocky underside */}
      <path d="M20,50 Q24,58 28,55 Q31,65 36,60 Q39,68 44,63 Q48,68 52,61 Q57,65 60,55 Q64,58 60,50Z" fill="#0A2A28" />
      {/* Island body */}
      <ellipse cx="40" cy="49" rx="22" ry="10" fill="#0D3A38" />
      {/* Top surface — teal */}
      <ellipse cx="40" cy="43" rx="22" ry="8" fill="#155E5A" />
      <ellipse cx="40" cy="40" rx="20" ry="6" fill="#1A6E6A" />
      {/* Star burst rays behind trophy */}
      <line x1="40" y1="25" x2="40" y2="17" stroke="#4ECDC4" strokeWidth="1.5" opacity="0.55" />
      <line x1="40" y1="35" x2="40" y2="43" stroke="#4ECDC4" strokeWidth="1.5" opacity="0.55" />
      <line x1="35" y1="30" x2="28" y2="30" stroke="#4ECDC4" strokeWidth="1.5" opacity="0.55" />
      <line x1="45" y1="30" x2="52" y2="30" stroke="#4ECDC4" strokeWidth="1.5" opacity="0.55" />
      <line x1="36.5" y1="26.5" x2="31" y2="21" stroke="#4ECDC4" strokeWidth="1.5" opacity="0.45" />
      <line x1="43.5" y1="26.5" x2="49" y2="21" stroke="#4ECDC4" strokeWidth="1.5" opacity="0.45" />
      <line x1="36.5" y1="33.5" x2="31" y2="39" stroke="#4ECDC4" strokeWidth="1.5" opacity="0.45" />
      <line x1="43.5" y1="33.5" x2="49" y2="39" stroke="#4ECDC4" strokeWidth="1.5" opacity="0.45" />
      {/* Trophy cup */}
      <path d="M34,22 Q34,32 40,34 Q46,32 46,22Z" fill="#FFD700" />
      <rect x="37" y="33" width="6" height="4" fill="#FFA000" />
      <rect x="34" y="37" width="12" height="2.5" rx="1" fill="#FFD700" />
      {/* Trophy handles */}
      <path d="M34,24 Q30,24 30,28 Q30,32 34,30" stroke="#FFD700" strokeWidth="1.5" fill="none" />
      <path d="M46,24 Q50,24 50,28 Q50,32 46,30" stroke="#FFD700" strokeWidth="1.5" fill="none" />
      {/* Crown on top */}
      <path d="M34,22 L35,18 L38,21 L40,17 L42,21 L45,18 L46,22Z" fill="#FFD700" />
      {/* Stars beside trophy */}
      <text x="18" y="32" fontSize="9" fill="#4ECDC4">⭐</text>
      <text x="56" y="30" fontSize="8" fill="#4ECDC4">⭐</text>
      <text x="38" y="14" fontSize="7" fill="rgba(78,205,196,0.8)">✦</text>
    </svg>
  );
}

// Export map for all K7 islands
export const K7_ISLAND_SVGS: Record<string, React.FC<{ size?: number }>> = {
  i1: K7IslandKonjunktiv1,
  i2: K7IslandWerdenPassiv,
  i3: K7IslandPassivModal,
  i4: K7IslandStilmittel,
  i5: K7IslandKausalKonditional,
  i6: K7IslandKonzessivFinal,
  i7: K7IslandTemporalsatz,
  i8: K7IslandInfinitivkonstruktionen,
  i9: K7IslandGrossePruefung,
};
