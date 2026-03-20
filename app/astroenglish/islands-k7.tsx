// SVG Island illustrations for AstroEnglish K7 map
// Each island is a unique floating fantasy landmass matching its English ELA theme
// viewBox: "0 0 80 80", renders at 48-60px on mobile

import React from "react";

type IP = { size?: number };

function IslandShell({ glow, dark, mid, light, children }: {
  glow: string; dark: string; mid: string; light: string; children: React.ReactNode;
}) {
  return (
    <>
      <ellipse cx="40" cy="74" rx="20" ry="5" fill={glow} />
      <path d="M21,50 Q26,63 32,58 Q38,67 44,62 Q51,67 56,58 Q62,63 59,50Z" fill={dark} />
      <ellipse cx="40" cy="48" rx="21" ry="9" fill={dark} />
      <ellipse cx="40" cy="43" rx="21" ry="8" fill={mid} />
      <ellipse cx="40" cy="40" rx="19" ry="6" fill={light} />
      {children}
    </>
  );
}

export function K7IslandArgumentation({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <IslandShell glow="rgba(180,77,255,0.18)" dark="#2E0A4A" mid="#6D28D9" light="#A855F7">
        {/* Debate scale */}
        <line x1="40" y1="19" x2="40" y2="40" stroke="#C084FC" strokeWidth="1.2" />
        <line x1="26" y1="23" x2="54" y2="23" stroke="#C084FC" strokeWidth="1.5" />
        <path d="M22,23 Q26,29 30,23" fill="none" stroke="#C084FC" strokeWidth="1" />
        <ellipse cx="26" cy="29" rx="5" ry="2" fill="rgba(192,132,252,0.3)" stroke="#C084FC" strokeWidth="0.8" />
        <text x="26" y="33" textAnchor="middle" fontSize="4.5" fill="#EDE9FE" fontFamily="monospace">Claim</text>
        <path d="M50,23 Q54,29 58,23" fill="none" stroke="#C084FC" strokeWidth="1" />
        <ellipse cx="54" cy="29" rx="5" ry="2" fill="rgba(192,132,252,0.3)" stroke="#C084FC" strokeWidth="0.8" />
        <text x="54" y="33" textAnchor="middle" fontSize="4.5" fill="#EDE9FE" fontFamily="monospace">Counter</text>
        <polygon points="37,40 40,44 43,40" fill="#C084FC" opacity="0.6" />
        <text x="14" y="26" fontSize="7" fill="rgba(180,77,255,0.65)">✦</text>
      </IslandShell>
    </svg>
  );
}

export function K7IslandLiterary({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <IslandShell glow="rgba(59,130,246,0.2)" dark="#1E3A6E" mid="#2563EB" light="#3B82F6">
        {/* Open book with quill */}
        <path d="M20,30 Q29,26 38,30 L38,44 Q29,40 20,44Z" fill="#EFF6FF" />
        <path d="M38,30 Q47,26 56,30 L56,44 Q47,40 38,44Z" fill="#DBEAFE" />
        <line x1="38" y1="30" x2="38" y2="44" stroke="#93C5FD" strokeWidth="1" />
        <line x1="23" y1="34" x2="35" y2="33" stroke="#BFDBFE" strokeWidth="0.7" />
        <line x1="22" y1="37" x2="35" y2="36" stroke="#BFDBFE" strokeWidth="0.7" />
        <line x1="41" y1="34" x2="53" y2="33" stroke="#BFDBFE" strokeWidth="0.7" />
        <line x1="41" y1="37" x2="54" y2="36" stroke="#BFDBFE" strokeWidth="0.7" />
        {/* Quill */}
        <path d="M54,26 Q58,18 64,15 Q62,21 60,24 Q57,20 55,26Z" fill="#FEF9C3" />
        <path d="M54,26 L53,29" stroke="#374151" strokeWidth="1" strokeLinecap="round" />
        <text x="14" y="28" fontSize="7" fill="rgba(59,130,246,0.65)">✦</text>
      </IslandShell>
    </svg>
  );
}

export function K7IslandResearchEssay({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <IslandShell glow="rgba(16,185,129,0.18)" dark="#124A36" mid="#166A4A" light="#1A7A55">
        {/* Research paper with citations */}
        <rect x="22" y="18" width="36" height="26" rx="2" fill="#ECFDF5" stroke="#6EE7B7" strokeWidth="1" />
        <rect x="22" y="18" width="36" height="5" rx="2" fill="#10B981" opacity="0.5" />
        <text x="40" y="22.5" textAnchor="middle" fontSize="4" fontWeight="bold" fill="white" fontFamily="monospace">RESEARCH ESSAY</text>
        <line x1="25" y1="27" x2="54" y2="27" stroke="#A7F3D0" strokeWidth="0.7" />
        <line x1="25" y1="30" x2="55" y2="30" stroke="#A7F3D0" strokeWidth="0.7" />
        <line x1="25" y1="33" x2="53" y2="33" stroke="#A7F3D0" strokeWidth="0.7" />
        <line x1="25" y1="36" x2="54" y2="36" stroke="#A7F3D0" strokeWidth="0.7" />
        {/* Citation marker */}
        <text x="52" y="29" fontSize="6" fill="#065F46" fontFamily="monospace">[1]</text>
        <text x="52" y="33" fontSize="6" fill="#065F46" fontFamily="monospace">[2]</text>
        <text x="14" y="26" fontSize="7" fill="rgba(16,185,129,0.65)">✦</text>
      </IslandShell>
    </svg>
  );
}

export function K7IslandRhetoricalDevices({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <IslandShell glow="rgba(245,158,11,0.2)" dark="#78350F" mid="#B45309" light="#F59E0B">
        {/* Rhetorical device badges */}
        <rect x="17" y="22" width="18" height="8" rx="2" fill="#FDE68A" stroke="#F59E0B" strokeWidth="1" />
        <text x="26" y="28.5" textAnchor="middle" fontSize="5" fontWeight="bold" fill="#78350F" fontFamily="monospace">Ethos</text>
        <rect x="38" y="20" width="18" height="8" rx="2" fill="#FEF3C7" stroke="#FBBF24" strokeWidth="1" />
        <text x="47" y="26.5" textAnchor="middle" fontSize="5" fontWeight="bold" fill="#78350F" fontFamily="monospace">Pathos</text>
        <rect x="25" y="33" width="20" height="8" rx="2" fill="#FFFBEB" stroke="#D97706" strokeWidth="1" />
        <text x="35" y="39.5" textAnchor="middle" fontSize="5" fontWeight="bold" fill="#78350F" fontFamily="monospace">Logos</text>
        <text x="14" y="26" fontSize="7" fill="rgba(245,158,11,0.65)">✦</text>
      </IslandShell>
    </svg>
  );
}

export function K7IslandPoetryAnalysis({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <IslandShell glow="rgba(99,102,241,0.2)" dark="#312E81" mid="#4338CA" light="#6366F1">
        {/* Poem with analysis marks */}
        <rect x="22" y="19" width="36" height="24" rx="2" fill="#EEF2FF" stroke="#A5B4FC" strokeWidth="1" />
        <line x1="26" y1="25" x2="50" y2="25" stroke="#C7D2FE" strokeWidth="0.7" />
        <line x1="26" y1="28" x2="48" y2="28" stroke="#C7D2FE" strokeWidth="0.7" />
        <line x1="26" y1="31" x2="50" y2="31" stroke="#C7D2FE" strokeWidth="0.7" />
        <line x1="26" y1="34" x2="47" y2="34" stroke="#C7D2FE" strokeWidth="0.7" />
        {/* Annotation marks */}
        <rect x="26" y="24" width="12" height="3" rx="0.5" fill="#818CF8" opacity="0.35" />
        <rect x="34" y="30" width="14" height="3" rx="0.5" fill="#A78BFA" opacity="0.35" />
        {/* Rhyme bracket */}
        <path d="M53,25 L55,25 L55,28 L53,28" fill="none" stroke="#6366F1" strokeWidth="0.8" />
        <path d="M53,31 L55,31 L55,34 L53,34" fill="none" stroke="#6366F1" strokeWidth="0.8" />
        <text x="14" y="26" fontSize="7" fill="rgba(99,102,241,0.65)">✦</text>
      </IslandShell>
    </svg>
  );
}

export function K7IslandContextClues({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <IslandShell glow="rgba(239,68,68,0.2)" dark="#7F1D1D" mid="#B91C1C" light="#EF4444">
        {/* Magnifier over paragraph */}
        <rect x="18" y="24" width="34" height="18" rx="2" fill="#FEF2F2" stroke="#FCA5A5" strokeWidth="1" />
        <line x1="21" y1="29" x2="49" y2="29" stroke="#FECACA" strokeWidth="0.7" />
        <line x1="21" y1="32" x2="50" y2="32" stroke="#FECACA" strokeWidth="0.7" />
        <line x1="21" y1="35" x2="48" y2="35" stroke="#FECACA" strokeWidth="0.7" />
        {/* Highlight on mystery word */}
        <rect x="30" y="28" width="12" height="3.5" rx="0.5" fill="#FDE68A" opacity="0.7" />
        {/* Magnifier */}
        <circle cx="54" cy="27" r="7" fill="none" stroke="#EF4444" strokeWidth="1.5" />
        <circle cx="54" cy="27" r="5" fill="rgba(239,68,68,0.1)" />
        <line x1="58.5" y1="31.5" x2="62" y2="35" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" />
        <text x="14" y="27" fontSize="7" fill="rgba(239,68,68,0.65)">✦</text>
      </IslandShell>
    </svg>
  );
}

export function K7IslandGrammarComplex({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <IslandShell glow="rgba(20,184,166,0.18)" dark="#0F4A44" mid="#0D9488" light="#14B8A6">
        {/* Complex grammar tree */}
        <circle cx="40" cy="21" r="6" fill="rgba(20,184,166,0.3)" stroke="#2DD4BF" strokeWidth="1" />
        <text x="40" y="24" textAnchor="middle" fontSize="5.5" fontWeight="bold" fill="#CCFBF1" fontFamily="monospace">VP</text>
        <line x1="36" y1="25" x2="28" y2="32" stroke="#2DD4BF" strokeWidth="1" />
        <line x1="44" y1="25" x2="52" y2="32" stroke="#2DD4BF" strokeWidth="1" />
        <circle cx="28" cy="35" r="5" fill="rgba(20,184,166,0.25)" stroke="#2DD4BF" strokeWidth="1" />
        <text x="28" y="37.5" textAnchor="middle" fontSize="4.5" fontWeight="bold" fill="#CCFBF1" fontFamily="monospace">Verb</text>
        <circle cx="52" cy="35" r="5" fill="rgba(20,184,166,0.25)" stroke="#2DD4BF" strokeWidth="1" />
        <text x="52" y="37.5" textAnchor="middle" fontSize="4.5" fontWeight="bold" fill="#CCFBF1" fontFamily="monospace">Obj.</text>
        <text x="14" y="27" fontSize="7" fill="rgba(20,184,166,0.65)">✦</text>
      </IslandShell>
    </svg>
  );
}

export function K7IslandPublicSpeaking({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <IslandShell glow="rgba(236,72,153,0.2)" dark="#831843" mid="#BE185D" light="#EC4899">
        {/* Stage with spotlight */}
        <rect x="20" y="34" width="40" height="8" rx="1" fill="#4A1942" stroke="#F472B6" strokeWidth="0.8" />
        {/* Speaker figure */}
        <circle cx="40" cy="27" r="5" fill="#FDF2F8" stroke="#EC4899" strokeWidth="0.8" />
        <line x1="40" y1="32" x2="40" y2="40" stroke="#FDF2F8" strokeWidth="2" strokeLinecap="round" />
        <line x1="40" y1="35" x2="34" y2="32" stroke="#FDF2F8" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="40" y1="35" x2="46" y2="32" stroke="#FDF2F8" strokeWidth="1.5" strokeLinecap="round" />
        {/* Spotlight beams */}
        <path d="M40,18 L28,34" stroke="#FDE68A" strokeWidth="1.5" opacity="0.4" />
        <path d="M40,18 L52,34" stroke="#FDE68A" strokeWidth="1.5" opacity="0.4" />
        <circle cx="40" cy="17" r="3" fill="#FDE68A" opacity="0.7" />
        {/* Sound waves */}
        <path d="M16,28 Q19,24 16,20" stroke="rgba(236,72,153,0.5)" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <path d="M64,28 Q61,24 64,20" stroke="rgba(236,72,153,0.5)" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <text x="14" y="36" fontSize="7" fill="rgba(236,72,153,0.65)">✦</text>
      </IslandShell>
    </svg>
  );
}

export function K7IslandGrandFinals({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <ellipse cx="40" cy="74" rx="21" ry="5" fill="rgba(78,205,196,0.25)" />
      <path d="M20,50 Q25,60 30,56 Q34,66 40,61 Q46,66 50,56 Q55,60 60,50Z" fill="#0A2A28" />
      <ellipse cx="40" cy="49" rx="22" ry="10" fill="#0D3A38" />
      <ellipse cx="40" cy="43" rx="22" ry="8" fill="#155E5A" />
      <ellipse cx="40" cy="40" rx="20" ry="6" fill="#1A6E6A" />
      <line x1="40" y1="25" x2="40" y2="20" stroke="#4ECDC4" strokeWidth="1.5" opacity="0.65" />
      <line x1="43.5" y1="25.9" x2="46.5" y2="21.8" stroke="#4ECDC4" strokeWidth="1.5" opacity="0.65" />
      <line x1="46.7" y1="32" x2="52" y2="32" stroke="#4ECDC4" strokeWidth="1.5" opacity="0.65" />
      <line x1="40" y1="39" x2="40" y2="44" stroke="#4ECDC4" strokeWidth="1.5" opacity="0.65" />
      <line x1="33.3" y1="32" x2="28" y2="32" stroke="#4ECDC4" strokeWidth="1.5" opacity="0.65" />
      <line x1="36.5" y1="25.9" x2="33.5" y2="21.8" stroke="#4ECDC4" strokeWidth="1.5" opacity="0.65" />
      <path d="M33,22 Q33,33 40,35 Q47,33 47,22Z" fill="#FDE68A" />
      <rect x="37" y="34" width="6" height="4" fill="#FCA5A5" />
      <rect x="34" y="38" width="12" height="2.5" rx="1" fill="#FDE68A" />
      <path d="M33,24 Q29,24 29,28 Q29,32 33,30" stroke="#FDE68A" strokeWidth="1.5" fill="none" />
      <path d="M47,24 Q51,24 51,28 Q51,32 47,30" stroke="#FDE68A" strokeWidth="1.5" fill="none" />
      <path d="M33,22 L34.5,17 L37.5,20.5 L40,16 L42.5,20.5 L45.5,17 L47,22Z" fill="#FDE68A" />
      <circle cx="36.5" cy="20" r="1" fill="#F87171" />
      <circle cx="40" cy="18.5" r="1.2" fill="#60A5FA" />
      <circle cx="43.5" cy="20" r="1" fill="#34D399" />
      <text x="17" y="31" fontSize="9" fill="#4ECDC4">⭐</text>
      <text x="57" y="29" fontSize="8" fill="#4ECDC4">⭐</text>
      <text x="40" y="42" textAnchor="middle" fontSize="5" fontWeight="bold" fill="#99F6E4" fontFamily="monospace">G7</text>
      <text x="39" y="13" fontSize="7" fill="rgba(78,205,196,0.8)">✦</text>
    </svg>
  );
}

export const K7_ISLAND_SVGS: Record<string, React.FC<{ size?: number }>> = {
  i1: K7IslandArgumentation,
  i2: K7IslandLiterary,
  i3: K7IslandResearchEssay,
  i4: K7IslandRhetoricalDevices,
  i5: K7IslandPoetryAnalysis,
  i6: K7IslandContextClues,
  i7: K7IslandGrammarComplex,
  i8: K7IslandPublicSpeaking,
  i9: K7IslandGrandFinals,
};
