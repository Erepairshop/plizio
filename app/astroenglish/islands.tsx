// SVG Island illustrations for AstroEnglish K1 map
// Each island is a unique floating fantasy landmass matching its English ELA theme
// viewBox: "0 0 80 80", renders at 48-60px on mobile

import React from "react";

type IP = { size?: number };

// i1 — Phonics Island: Pink floating island with A B C letters and sound waves
export function IslandPhonics({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Glow beneath */}
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(255,45,120,0.2)" />
      {/* Rocky underside stalactites */}
      <path d="M22,50 Q26,62 30,58 Q34,68 40,63 Q46,68 50,58 Q54,62 58,50Z" fill="#4A1A2E" />
      <path d="M28,52 Q30,60 33,57Z" fill="#3A1020" />
      <path d="M47,52 Q50,60 52,56Z" fill="#3A1020" />
      {/* Island body */}
      <ellipse cx="40" cy="47" rx="20" ry="9" fill="#7B2D4A" />
      {/* Grassy top surface */}
      <ellipse cx="40" cy="40" rx="20" ry="8" fill="#3D8B37" />
      <ellipse cx="40" cy="37" rx="18" ry="6" fill="#4CAF50" />
      {/* Letter A */}
      <text x="26" y="39" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#FF2D78" fontFamily="monospace">A</text>
      {/* Letter B */}
      <text x="40" y="35" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#FF6BAE" fontFamily="monospace">B</text>
      {/* Letter C */}
      <text x="54" y="39" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#FF2D78" fontFamily="monospace">C</text>
      {/* Sound wave arcs */}
      <path d="M18,26 Q22,22 18,18" stroke="rgba(255,45,120,0.5)" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <path d="M16,28 Q21,22 16,16" stroke="rgba(255,45,120,0.3)" strokeWidth="0.8" fill="none" strokeLinecap="round" />
      {/* Small floating star letters */}
      <text x="57" y="26" fontSize="6" fill="rgba(255,107,174,0.6)">✦</text>
      {/* Mini book */}
      <rect x="35" y="22" width="10" height="8" rx="1" fill="#FF2D78" opacity="0.85" />
      <line x1="40" y1="22" x2="40" y2="30" stroke="#FF9BBF" strokeWidth="0.8" />
      <rect x="36" y="23" width="3" height="1" rx="0.3" fill="rgba(255,255,255,0.5)" />
      <rect x="36" y="25" width="4" height="1" rx="0.3" fill="rgba(255,255,255,0.4)" />
    </svg>
  );
}

// i2 — Sight Words Island: Cyan island with flashcard-style word tags
export function IslandSightWords({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Glow beneath */}
      <ellipse cx="40" cy="74" rx="19" ry="5" fill="rgba(0,212,255,0.18)" />
      {/* Rocky underside */}
      <path d="M21,50 Q27,63 32,59 Q38,67 44,61 Q50,67 55,59 Q60,63 59,50Z" fill="#0A2A35" />
      <path d="M26,53 Q28,61 31,58Z" fill="#062028" />
      <path d="M49,53 Q52,61 54,57Z" fill="#062028" />
      {/* Island body */}
      <ellipse cx="40" cy="48" rx="20" ry="8" fill="#0A3340" />
      {/* Top surface */}
      <ellipse cx="40" cy="41" rx="20" ry="7" fill="#1A5060" />
      <ellipse cx="40" cy="38" rx="18" ry="5" fill="#1E6070" />
      {/* Flashcard — "the" */}
      <rect x="22" y="27" width="14" height="9" rx="2" fill="#DBEAFE" stroke="#00D4FF" strokeWidth="1" />
      <text x="29" y="34" textAnchor="middle" fontSize="6.5" fontWeight="bold" fill="#0A3340" fontFamily="monospace">the</text>
      {/* Flashcard — "is" */}
      <rect x="44" y="24" width="14" height="9" rx="2" fill="#E0FFFA" stroke="#00B8D9" strokeWidth="1" />
      <text x="51" y="31" textAnchor="middle" fontSize="6.5" fontWeight="bold" fill="#0A3340" fontFamily="monospace">is</text>
      {/* Sparkles */}
      <text x="16" y="30" fontSize="7" fill="rgba(0,212,255,0.65)">✦</text>
      <text x="57" y="44" fontSize="6" fill="rgba(0,212,255,0.5)">✦</text>
    </svg>
  );
}

// i3 — Vocabulary Island: Green jungle island with word scroll and dictionary
export function IslandVocabulary({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Glow beneath */}
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(0,255,136,0.15)" />
      {/* Rocky underside */}
      <path d="M20,50 Q26,64 32,60 Q38,68 44,62 Q50,68 55,60 Q61,64 60,50Z" fill="#1A3A1A" />
      <path d="M25,53 Q27,62 30,59Z" fill="#102810" />
      <path d="M50,53 Q53,62 55,58Z" fill="#102810" />
      {/* Island body */}
      <ellipse cx="40" cy="48" rx="21" ry="8" fill="#235A23" />
      {/* Grassy top */}
      <ellipse cx="40" cy="42" rx="21" ry="8" fill="#2E7D32" />
      <ellipse cx="40" cy="39" rx="19" ry="6" fill="#388E3C" />
      {/* Small palm tree */}
      <rect x="39" y="24" width="2" height="15" fill="#5D4037" />
      <ellipse cx="40" cy="22" rx="7" ry="4" fill="#1B5E20" />
      <ellipse cx="35" cy="25" rx="5" ry="3" fill="#2E7D32" />
      <ellipse cx="45" cy="25" rx="5" ry="3" fill="#2E7D32" />
      {/* Pencil */}
      <rect x="55" y="28" width="3" height="12" rx="1" fill="#FDD835" transform="rotate(-30 55 28)" />
      <polygon points="55,40 58,40 56.5,44" fill="#FF7043" transform="rotate(-30 55 28)" />
      {/* Mini dictionary scroll */}
      <rect x="20" y="33" width="12" height="8" rx="2" fill="#F5F5DC" />
      <line x1="22" y1="36" x2="30" y2="36" stroke="#388E3C" strokeWidth="0.8" />
      <line x1="22" y1="38" x2="28" y2="38" stroke="#388E3C" strokeWidth="0.8" />
      <rect x="19" y="33" width="2" height="8" rx="1" fill="#BCAAA4" />
      <rect x="31" y="33" width="2" height="8" rx="1" fill="#BCAAA4" />
    </svg>
  );
}

// i4 — Rhyming Island: Golden music island with rhyming word pairs and notes
export function IslandRhyming({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Glow beneath */}
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(255,215,0,0.2)" />
      {/* Rocky underside */}
      <path d="M21,50 Q26,63 32,58 Q38,67 44,62 Q50,67 56,58 Q61,63 59,50Z" fill="#3A2A00" />
      <path d="M27,53 Q29,62 32,58Z" fill="#2A1E00" />
      <path d="M49,53 Q52,62 54,57Z" fill="#2A1E00" />
      {/* Island body */}
      <ellipse cx="40" cy="48" rx="20" ry="8" fill="#5D4200" />
      {/* Top surface */}
      <ellipse cx="40" cy="42" rx="20" ry="7" fill="#7B5700" />
      <ellipse cx="40" cy="38" rx="18" ry="6" fill="#8B6500" />
      {/* Rhyme arc */}
      <path d="M24,38 Q32,32 40,38 Q48,44 56,38" stroke="#FFD700" strokeWidth="1.2" fill="none" opacity="0.6" />
      {/* cat / hat pair */}
      <text x="26" y="37" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#FFD700" fontFamily="monospace">cat</text>
      <text x="52" y="37" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#FFE55C" fontFamily="monospace">hat</text>
      {/* Musical notes */}
      <text x="20" y="28" fontSize="8" fill="rgba(255,215,0,0.7)">♪</text>
      <text x="55" y="30" fontSize="7" fill="rgba(255,215,0,0.6)">♩</text>
      {/* Stars */}
      <text x="16" y="42" fontSize="6" fill="rgba(255,215,0,0.5)">✦</text>
      <text x="59" y="45" fontSize="7" fill="rgba(255,215,0,0.5)">✦</text>
    </svg>
  );
}

// i5 — Sentences Island: Purple cloud island with speech bubbles and punctuation
export function IslandSentences({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Glow beneath */}
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(180,77,255,0.18)" />
      {/* Cloud-like rocky underside */}
      <path d="M20,50 Q26,64 33,59 Q39,68 45,62 Q52,68 57,59 Q63,64 60,50Z" fill="#2A0A3A" />
      {/* Island body */}
      <ellipse cx="40" cy="49" rx="21" ry="8" fill="#3D0D5A" />
      {/* Cloudy top — multiple overlapping ellipses */}
      <ellipse cx="32" cy="41" rx="12" ry="7" fill="#5B2182" />
      <ellipse cx="46" cy="40" rx="13" ry="7" fill="#6A2499" />
      <ellipse cx="40" cy="37" rx="15" ry="8" fill="#7B35B0" />
      <ellipse cx="40" cy="35" rx="13" ry="6" fill="#8B44C0" />
      {/* Main speech bubble */}
      <rect x="27" y="25" width="26" height="14" rx="5" fill="rgba(180,77,255,0.3)" stroke="#B44DFF" strokeWidth="1.2" />
      <polygon points="34,39 38,39 36,43" fill="#B44DFF" opacity="0.7" />
      {/* Punctuation marks inside bubble */}
      <text x="33" y="35" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#E0AAFF">.</text>
      <text x="40" y="35" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#E0AAFF">?</text>
      <text x="47" y="35" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#E0AAFF">!</text>
      {/* Small floating speech bubble */}
      <rect x="55" y="22" width="13" height="9" rx="3" fill="rgba(180,77,255,0.25)" stroke="#B44DFF" strokeWidth="0.8" />
      <text x="61" y="29" textAnchor="middle" fontSize="7" fill="#D0A0FF">Yes!</text>
      {/* Stars */}
      <text x="15" y="32" fontSize="7" fill="rgba(180,77,255,0.6)">✦</text>
    </svg>
  );
}

// i6 — Reading Island: Emerald island with open book and reading lamp
export function IslandReading({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Glow beneath */}
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(16,185,129,0.18)" />
      {/* Rocky underside */}
      <path d="M21,50 Q27,63 32,59 Q38,68 44,62 Q51,68 56,59 Q62,63 59,50Z" fill="#0A2A1E" />
      <path d="M26,53 Q28,62 31,58Z" fill="#061E14" />
      <path d="M50,53 Q53,62 55,57Z" fill="#061E14" />
      {/* Island body */}
      <ellipse cx="40" cy="48" rx="21" ry="9" fill="#124A36" />
      {/* Grassy top */}
      <ellipse cx="40" cy="43" rx="21" ry="8" fill="#166A4A" />
      <ellipse cx="40" cy="40" rx="19" ry="6" fill="#1A7A55" />
      {/* Reading lamp post */}
      <rect x="55" y="26" width="2" height="16" fill="#8D6E63" />
      <ellipse cx="56" cy="25" rx="5" ry="3" fill="#10B981" opacity="0.9" />
      {/* Lamp glow */}
      <ellipse cx="56" cy="30" rx="7" ry="5" fill="rgba(16,185,129,0.15)" />
      {/* Open book */}
      <path d="M22,36 Q31,32 40,36 L40,47 Q31,43 22,47Z" fill="#FFFDE7" />
      <path d="M40,36 Q49,32 58,36 L58,47 Q49,43 40,47Z" fill="#FFF9C4" />
      <line x1="40" y1="36" x2="40" y2="47" stroke="#BCAAA4" strokeWidth="1" />
      {/* Text lines in book */}
      <line x1="25" y1="39" x2="37" y2="38" stroke="#9E9E9E" strokeWidth="0.7" />
      <line x1="24" y1="41" x2="37" y2="40" stroke="#9E9E9E" strokeWidth="0.7" />
      <line x1="25" y1="43" x2="36" y2="42" stroke="#9E9E9E" strokeWidth="0.7" />
      <line x1="43" y1="39" x2="55" y2="38" stroke="#9E9E9E" strokeWidth="0.7" />
      <line x1="43" y1="41" x2="56" y2="40" stroke="#9E9E9E" strokeWidth="0.7" />
      <line x1="43" y1="43" x2="54" y2="42" stroke="#9E9E9E" strokeWidth="0.7" />
    </svg>
  );
}

// i7 — Grammar Island: Orange castle island with 3 towers (noun/verb/adj)
export function IslandGrammar({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Glow beneath */}
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(255,149,0,0.18)" />
      {/* Rocky underside */}
      <path d="M20,50 Q26,63 32,59 Q38,67 44,62 Q51,67 56,59 Q62,63 60,50Z" fill="#3A1A00" />
      <path d="M26,53 Q28,62 31,58Z" fill="#2A1200" />
      <path d="M50,53 Q53,62 55,57Z" fill="#2A1200" />
      {/* Island body */}
      <ellipse cx="40" cy="49" rx="22" ry="9" fill="#5A2A00" />
      {/* Top terrain */}
      <ellipse cx="40" cy="43" rx="22" ry="8" fill="#7A3A00" />
      <ellipse cx="40" cy="40" rx="20" ry="6" fill="#8B4200" />
      {/* Castle wall base */}
      <rect x="26" y="32" width="28" height="10" rx="1" fill="#C76200" />
      {/* Left tower — noun */}
      <rect x="24" y="22" width="10" height="18" rx="1" fill="#D97000" />
      <rect x="23" y="20" width="3" height="4" rx="0.5" fill="#D97000" />
      <rect x="27" y="20" width="3" height="4" rx="0.5" fill="#D97000" />
      <rect x="31" y="20" width="3" height="4" rx="0.5" fill="#D97000" />
      <text x="29" y="33" textAnchor="middle" fontSize="5" fontWeight="bold" fill="#FFD700">noun</text>
      {/* Middle tower — verb */}
      <rect x="35" y="19" width="10" height="22" rx="1" fill="#FF9500" />
      <rect x="34" y="17" width="3" height="4" rx="0.5" fill="#FF9500" />
      <rect x="38" y="17" width="3" height="4" rx="0.5" fill="#FF9500" />
      <rect x="42" y="17" width="3" height="4" rx="0.5" fill="#FF9500" />
      <text x="40" y="31" textAnchor="middle" fontSize="5" fontWeight="bold" fill="#FFD700">verb</text>
      {/* Right tower — adj */}
      <rect x="46" y="22" width="10" height="18" rx="1" fill="#D97000" />
      <rect x="45" y="20" width="3" height="4" rx="0.5" fill="#D97000" />
      <rect x="49" y="20" width="3" height="4" rx="0.5" fill="#D97000" />
      <rect x="53" y="20" width="3" height="4" rx="0.5" fill="#D97000" />
      <text x="51" y="33" textAnchor="middle" fontSize="5" fontWeight="bold" fill="#FFD700">adj</text>
      {/* Flag on middle tower */}
      <line x1="40" y1="14" x2="40" y2="18" stroke="#FFA000" strokeWidth="1" />
      <polygon points="40,14 45,16 40,18" fill="#FFD700" />
    </svg>
  );
}

// i8 — Comprehension Island: Pink/magenta island with story scroll and magnifier
export function IslandComprehension({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Glow beneath */}
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(232,121,249,0.18)" />
      {/* Rocky underside */}
      <path d="M21,50 Q26,63 32,59 Q38,68 44,62 Q51,68 57,59 Q62,63 59,50Z" fill="#2A0A2E" />
      <path d="M26,53 Q28,62 31,58Z" fill="#1E0820" />
      <path d="M49,53 Q52,62 54,57Z" fill="#1E0820" />
      {/* Island body */}
      <ellipse cx="40" cy="49" rx="21" ry="9" fill="#3D0D4A" />
      {/* Grassy/mossy top */}
      <ellipse cx="40" cy="43" rx="21" ry="8" fill="#5A1570" />
      <ellipse cx="40" cy="40" rx="19" ry="6" fill="#6B2080" />
      {/* Open book */}
      <path d="M22,36 Q31,32 40,36 L40,47 Q31,43 22,47Z" fill="#FFFDE7" />
      <path d="M40,36 Q49,32 58,36 L58,47 Q49,43 40,47Z" fill="#FFF9C4" />
      <line x1="40" y1="36" x2="40" y2="47" stroke="#BCAAA4" strokeWidth="1" />
      {/* Text lines in book */}
      <line x1="25" y1="39" x2="37" y2="38" stroke="#9E9E9E" strokeWidth="0.7" />
      <line x1="24" y1="41" x2="37" y2="40" stroke="#9E9E9E" strokeWidth="0.7" />
      <line x1="25" y1="43" x2="36" y2="42" stroke="#9E9E9E" strokeWidth="0.7" />
      <line x1="43" y1="39" x2="55" y2="38" stroke="#9E9E9E" strokeWidth="0.7" />
      <line x1="43" y1="41" x2="56" y2="40" stroke="#9E9E9E" strokeWidth="0.7" />
      {/* Magnifying glass */}
      <circle cx="56" cy="26" r="5" fill="none" stroke="#E879F9" strokeWidth="1.5" />
      <circle cx="56" cy="26" r="3.5" fill="rgba(232,121,249,0.15)" />
      <line x1="60" y1="30" x2="63" y2="33" stroke="#E879F9" strokeWidth="1.5" strokeLinecap="round" />
      {/* Floating text lines above book */}
      <line x1="24" y1="30" x2="36" y2="29" stroke="rgba(232,121,249,0.5)" strokeWidth="1" />
      <line x1="22" y1="27" x2="32" y2="26" stroke="rgba(232,121,249,0.35)" strokeWidth="0.8" />
    </svg>
  );
}

// i9 — English Finals Island: Teal star island with trophy, crown, star burst
export function IslandFinals({ size = 80 }: IP) {
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
      <g transform="translate(40,30)" opacity="0.6">
        <line x1="0" y1="-5" x2="0" y2="-10" stroke="#4ECDC4" strokeWidth="1.5" />
        <line x1="3.5" y1="-3.5" x2="7.1" y2="-7.1" stroke="#4ECDC4" strokeWidth="1.5" />
        <line x1="5" y1="0" x2="10" y2="0" stroke="#4ECDC4" strokeWidth="1.5" />
        <line x1="3.5" y1="3.5" x2="7.1" y2="7.1" stroke="#4ECDC4" strokeWidth="1.5" />
        <line x1="0" y1="5" x2="0" y2="10" stroke="#4ECDC4" strokeWidth="1.5" />
        <line x1="-3.5" y1="3.5" x2="-7.1" y2="7.1" stroke="#4ECDC4" strokeWidth="1.5" />
        <line x1="-5" y1="0" x2="-10" y2="0" stroke="#4ECDC4" strokeWidth="1.5" />
        <line x1="-3.5" y1="-3.5" x2="-7.1" y2="-7.1" stroke="#4ECDC4" strokeWidth="1.5" />
      </g>
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
      <text x="38" y="15" fontSize="7" fill="rgba(78,205,196,0.8)">✦</text>
    </svg>
  );
}

// Export map for all K1 islands
export const K1_ISLAND_SVGS: Record<string, React.FC<{ size?: number }>> = {
  i1: IslandPhonics,
  i2: IslandSightWords,
  i3: IslandVocabulary,
  i4: IslandRhyming,
  i5: IslandSentences,
  i6: IslandReading,
  i7: IslandGrammar,
  i8: IslandComprehension,
  i9: IslandFinals,
};
