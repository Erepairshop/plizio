// SVG Island illustrations for AstroDeutsch K8 map
// Each island is a unique floating fantasy landmass matching its theme
// viewBox: "0 0 80 80", renders at 48-60px on mobile

type IP = { size?: number };

// i1 — Konjunktiv: Pink island with speech bubbles showing "sei" and "wäre"
export function K8IslandKonjunktiv({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Glow beneath */}
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(255,45,120,0.2)" />
      {/* Rocky underside */}
      <path d="M22,50 Q27,63 32,59 Q38,68 44,62 Q50,68 55,59 Q60,63 58,50Z" fill="#3A0015" />
      <path d="M27,53 Q29,61 32,58Z" fill="#28000F" />
      <path d="M48,52 Q51,61 53,57Z" fill="#28000F" />
      {/* Island body */}
      <ellipse cx="40" cy="47" rx="20" ry="9" fill="#56001E" />
      {/* Pink top */}
      <ellipse cx="40" cy="42" rx="20" ry="8" fill="#7A0030" />
      <ellipse cx="40" cy="39" rx="18" ry="6" fill="#920038" />
      {/* Left speech bubble — Konjunktiv I "sei" */}
      <rect x="18" y="17" width="20" height="12" rx="4" fill="rgba(255,45,120,0.25)" stroke="#FF2D78" strokeWidth="1.2" />
      <polygon points="22,29 26,29 24,34" fill="rgba(255,45,120,0.25)" stroke="#FF2D78" strokeWidth="0.8" />
      <text x="28" y="25" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#FFB3CD" fontFamily="monospace">sei</text>
      {/* Right speech bubble — Konjunktiv II "wäre" */}
      <rect x="42" y="14" width="22" height="12" rx="4" fill="rgba(255,45,120,0.18)" stroke="#FF69A0" strokeWidth="1.2" />
      <polygon points="50,26 54,26 52,31" fill="rgba(255,45,120,0.18)" stroke="#FF69A0" strokeWidth="0.8" />
      <text x="53" y="22" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#FFD0E4" fontFamily="monospace">wäre</text>
      {/* Indirect speech label strip */}
      <rect x="20" y="36" width="40" height="5" rx="2" fill="rgba(255,45,120,0.2)" />
      <text x="40" y="40" textAnchor="middle" fontSize="4.5" fontWeight="bold" fill="#FF8AB5" fontFamily="monospace">indirekte Rede</text>
      {/* Conditional mood indicator — dashed curved arrow */}
      <path d="M38,29 Q40,32 42,29" stroke="#FF2D78" strokeWidth="1.1" fill="none" strokeDasharray="1.5,1.2" opacity="0.8" />
      {/* Sparkles */}
      <text x="13" y="22" fontSize="7" fill="rgba(255,45,120,0.65)">✦</text>
      <text x="62" y="32" fontSize="6" fill="rgba(255,45,120,0.5)">✦</text>
      <text x="38" y="11" fontSize="6" fill="rgba(255,45,120,0.55)">✦</text>
    </svg>
  );
}

// i2 — Passiv: Cyan island with active→passive transformation arrow
export function K8IslandPassiv({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Glow beneath */}
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(0,212,255,0.2)" />
      {/* Rocky underside */}
      <path d="M21,50 Q26,63 31,59 Q37,68 43,62 Q49,68 55,59 Q60,63 59,50Z" fill="#001E2E" />
      <path d="M26,53 Q28,62 31,58Z" fill="#001420" />
      <path d="M49,53 Q52,62 54,57Z" fill="#001420" />
      {/* Island body */}
      <ellipse cx="40" cy="47" rx="20" ry="9" fill="#002E44" />
      {/* Cyan top */}
      <ellipse cx="40" cy="42" rx="20" ry="8" fill="#004A66" />
      <ellipse cx="40" cy="39" rx="18" ry="6" fill="#005A7A" />
      {/* Active box (left) */}
      <rect x="12" y="20" width="20" height="10" rx="2.5" fill="#003E58" stroke="#00D4FF" strokeWidth="1.2" />
      <text x="22" y="27" textAnchor="middle" fontSize="5.2" fontWeight="bold" fill="#7FEFFF" fontFamily="monospace">Aktiv</text>
      {/* Transformation arrow */}
      <line x1="33" y1="25" x2="46" y2="25" stroke="#00D4FF" strokeWidth="1.8" strokeLinecap="round" />
      <polygon points="46,22 46,28 52,25" fill="#00D4FF" />
      {/* Passive box (right) */}
      <rect x="48" y="20" width="20" height="10" rx="2.5" fill="#003E58" stroke="#00AACF" strokeWidth="1.2" />
      <text x="58" y="27" textAnchor="middle" fontSize="5.2" fontWeight="bold" fill="#A8F4FF" fontFamily="monospace">Passiv</text>
      {/* "wird" label below arrow */}
      <rect x="31" y="31" width="18" height="6" rx="2" fill="rgba(0,212,255,0.25)" />
      <text x="40" y="35.5" textAnchor="middle" fontSize="5.5" fontWeight="bold" fill="#00D4FF" fontFamily="monospace">wird</text>
      {/* Example strip */}
      <rect x="15" y="37" width="50" height="4.5" rx="1.5" fill="rgba(0,212,255,0.12)" />
      <text x="40" y="40.5" textAnchor="middle" fontSize="4" fill="#7FEFFF" fontFamily="monospace">Das Buch wird gelesen</text>
      {/* Sparkles */}
      <text x="8" y="35" fontSize="7" fill="rgba(0,212,255,0.6)">✦</text>
      <text x="63" y="18" fontSize="6" fill="rgba(0,212,255,0.5)">✦</text>
      <text x="38" y="14" fontSize="6" fill="rgba(0,212,255,0.45)">✦</text>
    </svg>
  );
}

// i3 — Partizipien: Green island with chain links and word fragments
export function K8IslandPartizipien({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Glow beneath */}
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(16,185,129,0.2)" />
      {/* Rocky underside */}
      <path d="M21,50 Q26,63 31,59 Q37,68 43,62 Q50,68 56,59 Q61,63 59,50Z" fill="#052A18" />
      <path d="M26,53 Q28,62 31,58Z" fill="#031A10" />
      <path d="M50,53 Q53,62 55,57Z" fill="#031A10" />
      {/* Island body */}
      <ellipse cx="40" cy="47" rx="20" ry="9" fill="#073D22" />
      {/* Green top */}
      <ellipse cx="40" cy="42" rx="20" ry="8" fill="#0A5C33" />
      <ellipse cx="40" cy="39" rx="18" ry="6" fill="#0E6E3C" />
      {/* Chain link 1 (left) */}
      <ellipse cx="26" cy="27" rx="7" ry="4.5" fill="none" stroke="#10B981" strokeWidth="2.2" />
      <ellipse cx="26" cy="27" rx="4" ry="2" fill="#0E6E3C" />
      {/* Chain link connector */}
      <rect x="32" y="25" width="6" height="4" rx="2" fill="none" stroke="#10B981" strokeWidth="1.8" />
      {/* Chain link 2 (right) */}
      <ellipse cx="47" cy="27" rx="7" ry="4.5" fill="none" stroke="#34D399" strokeWidth="2.2" />
      <ellipse cx="47" cy="27" rx="4" ry="2" fill="#0E6E3C" />
      {/* Word fragment labels on links */}
      <text x="26" y="29" textAnchor="middle" fontSize="4.5" fontWeight="bold" fill="#6EE7B7" fontFamily="monospace">Part.I</text>
      <text x="47" y="29" textAnchor="middle" fontSize="4.5" fontWeight="bold" fill="#A7F3D0" fontFamily="monospace">Part.II</text>
      {/* Example word fragments */}
      <rect x="15" y="33" width="21" height="5" rx="1.5" fill="rgba(16,185,129,0.25)" />
      <text x="25.5" y="37" textAnchor="middle" fontSize="4.2" fill="#6EE7B7" fontFamily="monospace">lesend</text>
      <rect x="44" y="33" width="21" height="5" rx="1.5" fill="rgba(16,185,129,0.2)" />
      <text x="54.5" y="37" textAnchor="middle" fontSize="4.2" fill="#A7F3D0" fontFamily="monospace">gelesen</text>
      {/* Small connector dots */}
      <circle cx="26" cy="18" r="1.5" fill="#10B981" opacity="0.6" />
      <circle cx="47" cy="18" r="1.5" fill="#34D399" opacity="0.6" />
      <line x1="26" y1="18" x2="47" y2="18" stroke="#10B981" strokeWidth="1" strokeDasharray="2,2" opacity="0.5" />
      {/* Sparkles */}
      <text x="12" y="24" fontSize="7" fill="rgba(16,185,129,0.6)">✦</text>
      <text x="60" y="22" fontSize="6" fill="rgba(16,185,129,0.5)">✦</text>
    </svg>
  );
}

// i4 — Stilmittel: Amber island with comedy/tragedy masks and wavy text lines
export function K8IslandStilmittel({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Glow beneath */}
      <ellipse cx="40" cy="73" rx="20" ry="5" fill="rgba(245,158,11,0.2)" />
      {/* Rocky underside */}
      <path d="M21,50 Q26,63 32,59 Q38,68 44,62 Q50,68 55,59 Q61,63 59,50Z" fill="#3A1E00" />
      <path d="M26,53 Q28,62 31,58Z" fill="#2A1400" />
      <path d="M49,53 Q52,62 54,57Z" fill="#2A1400" />
      {/* Island body */}
      <ellipse cx="40" cy="47" rx="20" ry="9" fill="#5A3000" />
      {/* Amber top */}
      <ellipse cx="40" cy="42" rx="20" ry="8" fill="#7A4500" />
      <ellipse cx="40" cy="39" rx="18" ry="6" fill="#8E5100" />
      {/* Comedy mask (left — happy, gold) */}
      <ellipse cx="31" cy="26" rx="8.5" ry="7" fill="#F59E0B" />
      <path d="M25,25 Q31,31 37,25" stroke="#7A4500" strokeWidth="1.6" fill="none" strokeLinecap="round" />
      <ellipse cx="28" cy="23" rx="1.8" ry="2.2" fill="#7A4500" />
      <ellipse cx="34" cy="23" rx="1.8" ry="2.2" fill="#7A4500" />
      {/* Mask eyebrows — raised happy */}
      <path d="M26.5,21 Q28,19.5 29.5,21" stroke="#5A3000" strokeWidth="1" fill="none" />
      <path d="M32.5,21 Q34,19.5 35.5,21" stroke="#5A3000" strokeWidth="1" fill="none" />
      {/* Tragedy mask (right — sad, dark amber) */}
      <ellipse cx="51" cy="25" rx="8" ry="7" fill="#D97706" />
      <path d="M45,28 Q51,22 57,28" stroke="#3A1E00" strokeWidth="1.6" fill="none" strokeLinecap="round" />
      <ellipse cx="48" cy="23" rx="1.6" ry="2" fill="#3A1E00" />
      <ellipse cx="54" cy="23" rx="1.6" ry="2" fill="#3A1E00" />
      {/* Mask eyebrows — furrowed sad */}
      <path d="M46,21 Q48,19 50,20.5" stroke="#1A0A00" strokeWidth="1" fill="none" />
      <path d="M52,20.5 Q54,19 56,21" stroke="#1A0A00" strokeWidth="1" fill="none" />
      {/* Wavy text lines (stylistic device indicator) */}
      <path d="M18,36 Q22,34.5 26,36 Q30,37.5 34,36" stroke="#FCD34D" strokeWidth="1.1" fill="none" opacity="0.7" />
      <path d="M46,36 Q50,34.5 54,36 Q58,37.5 62,36" stroke="#FDE68A" strokeWidth="1.1" fill="none" opacity="0.6" />
      {/* Label */}
      <rect x="28" y="37.5" width="24" height="4.5" rx="1.5" fill="rgba(245,158,11,0.25)" />
      <text x="40" y="41" textAnchor="middle" fontSize="4.5" fontWeight="bold" fill="#FCD34D" fontFamily="monospace">Stilmittel</text>
      {/* Sparkles */}
      <text x="13" y="33" fontSize="7" fill="rgba(245,158,11,0.65)">✦</text>
      <text x="62" y="30" fontSize="6" fill="rgba(245,158,11,0.5)">✦</text>
      <text x="38" y="13" fontSize="6" fill="rgba(245,158,11,0.55)">✦</text>
    </svg>
  );
}

// i5 — Textsorten: Indigo island with stacked document pages and quill pen
export function K8IslandTextsorten({ size = 80 }: IP) {
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
      {/* Back document page (shadow) */}
      <rect x="27" y="16" width="22" height="18" rx="2" fill="#1A1A5A" stroke="#4338CA" strokeWidth="0.8" opacity="0.6" transform="rotate(-6 38 25)" />
      {/* Middle document page */}
      <rect x="25" y="15" width="22" height="18" rx="2" fill="#1E1E64" stroke="#4F46E5" strokeWidth="0.9" transform="rotate(3 36 24)" />
      {/* Front document page (main) */}
      <rect x="24" y="14" width="22" height="18" rx="2" fill="#252580" stroke="#6366F1" strokeWidth="1.2" />
      {/* Ruled lines on front page */}
      <line x1="27" y1="20" x2="43" y2="20" stroke="#818CF8" strokeWidth="0.8" opacity="0.7" />
      <line x1="27" y1="23.5" x2="43" y2="23.5" stroke="#818CF8" strokeWidth="0.8" opacity="0.7" />
      <line x1="27" y1="27" x2="43" y2="27" stroke="#818CF8" strokeWidth="0.8" opacity="0.5" />
      {/* "Text" title on page */}
      <text x="35" y="18.5" textAnchor="middle" fontSize="4.5" fontWeight="bold" fill="#E0E7FF" fontFamily="monospace">Text</text>
      {/* Quill pen (right side) */}
      <path d="M55,14 Q60,20 56,32 Q54,26 58,22 Q53,30 54,36" stroke="#A5B4FC" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <path d="M55,14 Q52,18 54,36Z" fill="#4338CA" opacity="0.4" />
      {/* Quill tip */}
      <circle cx="54" cy="36" r="1.2" fill="#818CF8" />
      {/* Ink drop */}
      <ellipse cx="54" cy="38.5" rx="1" ry="1.4" fill="#6366F1" opacity="0.7" />
      {/* Category labels */}
      <rect x="16" y="37" width="20" height="4.5" rx="1.5" fill="rgba(99,102,241,0.3)" />
      <text x="26" y="40.5" textAnchor="middle" fontSize="4" fill="#C7D2FE" fontFamily="monospace">Erörterung</text>
      <rect x="40" y="37" width="20" height="4.5" rx="1.5" fill="rgba(99,102,241,0.25)" />
      <text x="50" y="40.5" textAnchor="middle" fontSize="4" fill="#C7D2FE" fontFamily="monospace">Analyse</text>
      {/* Sparkles */}
      <text x="13" y="28" fontSize="7" fill="rgba(99,102,241,0.6)">✦</text>
      <text x="62" y="40" fontSize="6" fill="rgba(99,102,241,0.5)">✦</text>
    </svg>
  );
}

// i6 — Literatur: Pink island with open book and timeline of epochs
export function K8IslandLiteratur({ size = 80 }: IP) {
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
      {/* Open book — left page */}
      <path d="M20,34 Q20,18 40,17 L40,35 Q30,34 20,34Z" fill="#4A0F34" stroke="#EC4899" strokeWidth="1.1" />
      {/* Open book — right page */}
      <path d="M60,34 Q60,18 40,17 L40,35 Q50,34 60,34Z" fill="#420D2E" stroke="#EC4899" strokeWidth="1.1" />
      {/* Book spine */}
      <line x1="40" y1="17" x2="40" y2="35" stroke="#F472B6" strokeWidth="1.4" />
      {/* Left page lines */}
      <line x1="23" y1="22" x2="38" y2="21.5" stroke="#F9A8D4" strokeWidth="0.7" opacity="0.6" />
      <line x1="23" y1="25.5" x2="38" y2="25" stroke="#F9A8D4" strokeWidth="0.7" opacity="0.5" />
      <line x1="23" y1="29" x2="38" y2="28.5" stroke="#F9A8D4" strokeWidth="0.7" opacity="0.4" />
      {/* Right page lines */}
      <line x1="42" y1="21.5" x2="57" y2="22" stroke="#F9A8D4" strokeWidth="0.7" opacity="0.6" />
      <line x1="42" y1="25" x2="57" y2="25.5" stroke="#F9A8D4" strokeWidth="0.7" opacity="0.5" />
      <line x1="42" y1="28.5" x2="57" y2="29" stroke="#F9A8D4" strokeWidth="0.7" opacity="0.4" />
      {/* Timeline below book */}
      <line x1="15" y1="37" x2="65" y2="37" stroke="#EC4899" strokeWidth="1.1" opacity="0.6" />
      {/* Epoch dots */}
      <circle cx="22" cy="37" r="2" fill="#EC4899" />
      <circle cx="36" cy="37" r="2" fill="#F472B6" />
      <circle cx="50" cy="37" r="2" fill="#EC4899" />
      <circle cx="64" cy="37" r="2" fill="#F472B6" />
      {/* Epoch labels */}
      <text x="22" y="34" textAnchor="middle" fontSize="3.5" fill="#FBCFE8">Klassik</text>
      <text x="36" y="34" textAnchor="middle" fontSize="3.5" fill="#FBCFE8">Romantik</text>
      <text x="50" y="34" textAnchor="middle" fontSize="3.5" fill="#FBCFE8">Moderne</text>
      {/* Sparkles */}
      <text x="13" y="26" fontSize="7" fill="rgba(236,72,153,0.6)">✦</text>
      <text x="62" y="16" fontSize="6" fill="rgba(236,72,153,0.5)">✦</text>
      <text x="38" y="12" fontSize="6" fill="rgba(236,72,153,0.55)">✦</text>
    </svg>
  );
}

// i7 — Nominalstil: Teal island with layered register levels (formal/informal)
export function K8IslandNominalstil({ size = 80 }: IP) {
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
      {/* Formal layer (top, most elevated — dark, austere) */}
      <rect x="22" y="14" width="36" height="7" rx="2.5" fill="#0F4F4A" stroke="#14B8A6" strokeWidth="1.1" />
      <text x="40" y="19.5" textAnchor="middle" fontSize="5" fontWeight="bold" fill="#5EEAD4" fontFamily="monospace">Nominalstil</text>
      {/* Middle layer */}
      <rect x="19" y="23" width="42" height="6.5" rx="2" fill="#115C56" stroke="#0D9488" strokeWidth="1" />
      <text x="40" y="27.5" textAnchor="middle" fontSize="4.5" fill="#99F6E4" fontFamily="monospace">die Durchführung</text>
      {/* Verbal equivalent label — lower, informal */}
      <rect x="16" y="31" width="48" height="6" rx="2" fill="#0E5550" stroke="#0F766E" strokeWidth="1" opacity="0.85" />
      <text x="40" y="35.5" textAnchor="middle" fontSize="4.5" fill="#A7F3D0" fontFamily="monospace">etwas durchführen</text>
      {/* Arrow showing register shift */}
      <path d="M66,18 Q70,22 70,33 Q70,37 66,37" stroke="#14B8A6" strokeWidth="1.2" fill="none" strokeDasharray="2,1.5" opacity="0.7" />
      <polygon points="63,36 67,39 67,33" fill="#14B8A6" opacity="0.7" />
      <text x="71" y="28" textAnchor="middle" fontSize="3.5" fill="#5EEAD4" transform="rotate(90 71 28)">Register</text>
      {/* Sparkles */}
      <text x="10" y="23" fontSize="7" fill="rgba(20,184,166,0.6)">✦</text>
      <text x="62" y="12" fontSize="6" fill="rgba(20,184,166,0.5)">✦</text>
    </svg>
  );
}

// i8 — Charakterisierung: Purple island with magnifying glass over character silhouette
export function K8IslandCharakterisierung({ size = 80 }: IP) {
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
      {/* Character silhouette (person shape) */}
      <circle cx="36" cy="22" r="4.5" fill="#3B0F5E" stroke="#A855F7" strokeWidth="0.9" />
      <path d="M30,37 Q30,28 36,27 Q42,28 42,37Z" fill="#3B0F5E" stroke="#A855F7" strokeWidth="0.9" />
      {/* Magnifying glass lens */}
      <circle cx="41" cy="24" r="9.5" fill="rgba(168,85,247,0.12)" stroke="#C084FC" strokeWidth="1.6" />
      <circle cx="41" cy="24" r="9.5" fill="none" stroke="rgba(168,85,247,0.3)" strokeWidth="3" />
      {/* Magnifying glass handle */}
      <line x1="48" y1="31" x2="56" y2="39" stroke="#C084FC" strokeWidth="2.8" strokeLinecap="round" />
      <line x1="48" y1="31" x2="56" y2="39" stroke="#E9D5FF" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      {/* Magnified highlight inside lens */}
      <circle cx="37" cy="19" r="2.5" fill="rgba(168,85,247,0.18)" />
      {/* Annotation lines (analysis marks) */}
      <line x1="52" y1="20" x2="60" y2="17" stroke="#A855F7" strokeWidth="0.9" strokeDasharray="1.5,1.2" opacity="0.7" />
      <line x1="52" y1="24" x2="61" y2="24" stroke="#A855F7" strokeWidth="0.9" strokeDasharray="1.5,1.2" opacity="0.6" />
      {/* Label */}
      <rect x="19" y="37" width="38" height="4.5" rx="1.5" fill="rgba(168,85,247,0.22)" />
      <text x="38" y="40.5" textAnchor="middle" fontSize="4.5" fontWeight="bold" fill="#D8B4FE" fontFamily="monospace">Charakterisierung</text>
      {/* Sparkles */}
      <text x="12" y="32" fontSize="7" fill="rgba(168,85,247,0.6)">✦</text>
      <text x="13" y="20" fontSize="6" fill="rgba(168,85,247,0.45)">✦</text>
      <text x="60" y="13" fontSize="6" fill="rgba(168,85,247,0.5)">✦</text>
    </svg>
  );
}

// i9 — GrossePruefung: Radiating pink trophy island with star crown
export function K8IslandGrossePruefung({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Glow beneath */}
      <ellipse cx="40" cy="74" rx="21" ry="5" fill="rgba(232,121,249,0.22)" />
      {/* Star-shaped / jagged rocky underside */}
      <path d="M20,50 Q24,58 28,55 Q31,65 36,60 Q39,68 44,63 Q48,68 52,61 Q57,65 60,55 Q64,58 60,50Z" fill="#2A0030" />
      {/* Island body */}
      <ellipse cx="40" cy="49" rx="22" ry="10" fill="#400048" />
      {/* Top surface — vivid pink-purple */}
      <ellipse cx="40" cy="43" rx="22" ry="8" fill="#600070" />
      <ellipse cx="40" cy="40" rx="20" ry="6" fill="#740088" />
      {/* Star burst rays behind trophy */}
      <line x1="40" y1="25" x2="40" y2="15" stroke="#E879F9" strokeWidth="1.6" opacity="0.55" />
      <line x1="40" y1="35" x2="40" y2="44" stroke="#E879F9" strokeWidth="1.6" opacity="0.55" />
      <line x1="35" y1="30" x2="27" y2="30" stroke="#E879F9" strokeWidth="1.6" opacity="0.55" />
      <line x1="45" y1="30" x2="53" y2="30" stroke="#E879F9" strokeWidth="1.6" opacity="0.55" />
      <line x1="36.5" y1="26.5" x2="30" y2="20" stroke="#E879F9" strokeWidth="1.5" opacity="0.45" />
      <line x1="43.5" y1="26.5" x2="50" y2="20" stroke="#E879F9" strokeWidth="1.5" opacity="0.45" />
      <line x1="36.5" y1="33.5" x2="30" y2="40" stroke="#E879F9" strokeWidth="1.5" opacity="0.45" />
      <line x1="43.5" y1="33.5" x2="50" y2="40" stroke="#E879F9" strokeWidth="1.5" opacity="0.45" />
      {/* Trophy cup body */}
      <path d="M34,22 Q34,33 40,35 Q46,33 46,22Z" fill="#FFD700" />
      {/* Trophy stem + base */}
      <rect x="37" y="34" width="6" height="4" fill="#FFA000" />
      <rect x="33" y="38" width="14" height="2.5" rx="1.2" fill="#FFD700" />
      {/* Trophy handles */}
      <path d="M34,24 Q29,24 29,29 Q29,33 34,31" stroke="#FFD700" strokeWidth="1.6" fill="none" strokeLinecap="round" />
      <path d="M46,24 Q51,24 51,29 Q51,33 46,31" stroke="#FFD700" strokeWidth="1.6" fill="none" strokeLinecap="round" />
      {/* Crown on top of trophy */}
      <path d="M34,22 L35.5,18 L38.5,21 L40,17 L41.5,21 L44.5,18 L46,22Z" fill="#FFD700" />
      {/* Star inside trophy cup */}
      <polygon points="40,24 41.5,28 45,28 42.5,30.5 43.5,34 40,32 36.5,34 37.5,30.5 35,28 38.5,28" fill="#FFF176" opacity="0.85" />
      {/* Flanking stars */}
      <text x="17" y="33" fontSize="9" fill="#E879F9">⭐</text>
      <text x="57" y="31" fontSize="8" fill="#E879F9">⭐</text>
      <text x="37" y="13" fontSize="7" fill="rgba(232,121,249,0.8)">✦</text>
    </svg>
  );
}

// Export map for all K8 islands
export const K8_ISLAND_SVGS: Record<string, React.FC<{ size?: number }>> = {
  i1: K8IslandKonjunktiv,
  i2: K8IslandPassiv,
  i3: K8IslandPartizipien,
  i4: K8IslandStilmittel,
  i5: K8IslandTextsorten,
  i6: K8IslandLiteratur,
  i7: K8IslandNominalstil,
  i8: K8IslandCharakterisierung,
  i9: K8IslandGrossePruefung,
};
