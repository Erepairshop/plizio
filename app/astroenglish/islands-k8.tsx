// SVG Island illustrations for AstroEnglish K8 map
// Each island is a unique floating fantasy landmass matching its English ELA theme
// viewBox: "0 0 80 80", renders at 48-60px on mobile

import React from "react";

type IP = { size?: number };

function Shell({ g, d, m, l, children }: { g: string; d: string; m: string; l: string; children: React.ReactNode }) {
  return (
    <>
      <ellipse cx="40" cy="74" rx="20" ry="5" fill={g} />
      <path d="M21,50 Q26,63 32,58 Q38,67 44,62 Q51,67 56,58 Q62,63 59,50Z" fill={d} />
      <ellipse cx="40" cy="48" rx="21" ry="9" fill={d} />
      <ellipse cx="40" cy="43" rx="21" ry="8" fill={m} />
      <ellipse cx="40" cy="40" rx="19" ry="6" fill={l} />
      {children}
    </>
  );
}

export function K8IslandLitCriticism({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <Shell g="rgba(232,121,249,0.18)" d="#2D0A3A" m="#7C1FA0" l="#A855F7">
        {/* Literary lens — magnifier over book */}
        <rect x="19" y="24" width="30" height="18" rx="2" fill="#FAF5FF" stroke="#C084FC" strokeWidth="1" />
        <line x1="19" y1="24" x2="19" y2="42" stroke="#A855F7" strokeWidth="2" />
        <line x1="23" y1="29" x2="46" y2="29" stroke="#E9D5FF" strokeWidth="0.7" />
        <line x1="23" y1="32" x2="47" y2="32" stroke="#E9D5FF" strokeWidth="0.7" />
        <line x1="23" y1="35" x2="45" y2="35" stroke="#E9D5FF" strokeWidth="0.7" />
        {/* Lens / magnifier */}
        <circle cx="55" cy="28" r="8" fill="none" stroke="#E879F9" strokeWidth="1.5" />
        <circle cx="55" cy="28" r="6" fill="rgba(232,121,249,0.1)" />
        <line x1="61" y1="34" x2="65" y2="38" stroke="#E879F9" strokeWidth="1.5" strokeLinecap="round" />
        <text x="14" y="26" fontSize="7" fill="rgba(232,121,249,0.65)">✦</text>
      </Shell>
    </svg>
  );
}

export function K8IslandAdvWriting({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <Shell g="rgba(59,130,246,0.2)" d="#1E3A6E" m="#2563EB" l="#3B82F6">
        {/* Multiple draft versions */}
        <rect x="20" y="34" width="26" height="10" rx="2" fill="#BFDBFE" stroke="#3B82F6" strokeWidth="0.8" opacity="0.7" />
        <rect x="22" y="28" width="26" height="10" rx="2" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="1" opacity="0.85" />
        <rect x="24" y="22" width="26" height="10" rx="2" fill="#EFF6FF" stroke="#60A5FA" strokeWidth="1.2" />
        <line x1="27" y1="26" x2="45" y2="26" stroke="#93C5FD" strokeWidth="0.7" />
        <line x1="27" y1="29" x2="46" y2="29" stroke="#93C5FD" strokeWidth="0.7" />
        {/* Revision checkmark */}
        <circle cx="56" cy="26" r="5.5" fill="#3B82F6" opacity="0.8" />
        <path d="M53,26 L55.5,28.5 L59,23.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <text x="14" y="27" fontSize="7" fill="rgba(59,130,246,0.65)">✦</text>
      </Shell>
    </svg>
  );
}

export function K8IslandLiterature({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <Shell g="rgba(16,185,129,0.18)" d="#124A36" m="#166A4A" l="#1A7A55">
        {/* Books stacked */}
        <rect x="16" y="36" width="22" height="6" rx="1" fill="#A7F3D0" stroke="#10B981" strokeWidth="0.8" />
        <text x="17" y="40.5" fontSize="4.5" fill="#065F46" fontFamily="monospace">Romeo &amp; Juliet</text>
        <rect x="18" y="30" width="20" height="6" rx="1" fill="#6EE7B7" stroke="#34D399" strokeWidth="0.8" />
        <text x="19" y="34.5" fontSize="4.5" fill="#065F46" fontFamily="monospace">1984 · Orwell</text>
        <rect x="20" y="24" width="18" height="6" rx="1" fill="#ECFDF5" stroke="#6EE7B7" strokeWidth="0.8" />
        <text x="21" y="28.5" fontSize="4.5" fill="#065F46" fontFamily="monospace">Hamlet</text>
        {/* Floating quote */}
        <rect x="42" y="22" width="22" height="16" rx="2" fill="rgba(16,185,129,0.2)" stroke="#6EE7B7" strokeWidth="0.8" />
        <text x="43" y="29" fontSize="11" fill="#34D399" opacity="0.6">"</text>
        <line x1="46" y1="30" x2="60" y2="30" stroke="#A7F3D0" strokeWidth="0.7" />
        <line x1="46" y1="33" x2="59" y2="33" stroke="#A7F3D0" strokeWidth="0.7" />
        <text x="14" y="26" fontSize="7" fill="rgba(16,185,129,0.65)">✦</text>
      </Shell>
    </svg>
  );
}

export function K8IslandArgumentativeEssay({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <Shell g="rgba(245,158,11,0.2)" d="#78350F" m="#B45309" l="#F59E0B">
        {/* Essay with clear structure */}
        <rect x="22" y="18" width="36" height="26" rx="2" fill="#FFFBEB" stroke="#FCD34D" strokeWidth="1" />
        <rect x="22" y="18" width="36" height="5" rx="2" fill="#F59E0B" opacity="0.5" />
        <text x="40" y="22" textAnchor="middle" fontSize="4.5" fontWeight="bold" fill="white" fontFamily="monospace">ARGUMENT</text>
        {/* Structure labels */}
        <text x="25" y="29" fontSize="5" fill="#92400E" fontFamily="monospace">• Thesis</text>
        <text x="25" y="33" fontSize="5" fill="#92400E" fontFamily="monospace">• Evidence</text>
        <text x="25" y="37" fontSize="5" fill="#92400E" fontFamily="monospace">• Conclusion</text>
        {/* Check marks */}
        <text x="51" y="29" fontSize="7" fill="#10B981">✓</text>
        <text x="51" y="33" fontSize="7" fill="#10B981">✓</text>
        <text x="14" y="26" fontSize="7" fill="rgba(245,158,11,0.65)">✦</text>
      </Shell>
    </svg>
  );
}

export function K8IslandSpeechDebate({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <Shell g="rgba(99,102,241,0.2)" d="#312E81" m="#4338CA" l="#6366F1">
        {/* Two speakers */}
        <circle cx="26" cy="24" r="5" fill="#EEF2FF" stroke="#818CF8" strokeWidth="0.8" />
        <circle cx="54" cy="24" r="5" fill="#EEF2FF" stroke="#818CF8" strokeWidth="0.8" />
        {/* Podiums */}
        <rect x="20" y="30" width="12" height="10" rx="1" fill="#312E81" stroke="#818CF8" strokeWidth="0.8" />
        <rect x="48" y="30" width="12" height="10" rx="1" fill="#312E81" stroke="#818CF8" strokeWidth="0.8" />
        {/* Speech arrows crossing */}
        <path d="M32,29 Q40,22 48,29" fill="none" stroke="#A5B4FC" strokeWidth="1.2" />
        <polygon points="46,27 49,29 46,31" fill="#A5B4FC" />
        <path d="M48,32 Q40,26 32,32" fill="none" stroke="#C7D2FE" strokeWidth="1" />
        <polygon points="34,30 31,32 34,34" fill="#C7D2FE" />
        <text x="14" y="28" fontSize="7" fill="rgba(99,102,241,0.65)">✦</text>
      </Shell>
    </svg>
  );
}

export function K8IslandAdvVocab({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <Shell g="rgba(239,68,68,0.2)" d="#7F1D1D" m="#B91C1C" l="#EF4444">
        {/* Word web with advanced vocab */}
        <circle cx="40" cy="29" r="8" fill="rgba(239,68,68,0.25)" stroke="#FCA5A5" strokeWidth="1.2" />
        <text x="40" y="31.5" textAnchor="middle" fontSize="5" fontWeight="bold" fill="#FEF2F2" fontFamily="monospace">lexicon</text>
        <line x1="33" y1="25" x2="24" y2="20" stroke="#FCA5A5" strokeWidth="0.9" />
        <line x1="47" y1="25" x2="56" y2="20" stroke="#FCA5A5" strokeWidth="0.9" />
        <line x1="40" y1="37" x2="40" y2="43" stroke="#FCA5A5" strokeWidth="0.9" />
        <circle cx="22" cy="18" r="6.5" fill="rgba(239,68,68,0.2)" stroke="#FCA5A5" strokeWidth="1" />
        <text x="22" y="20.5" textAnchor="middle" fontSize="4.5" fill="#FEF2F2" fontFamily="monospace">syntax</text>
        <circle cx="58" cy="18" r="6.5" fill="rgba(239,68,68,0.2)" stroke="#FCA5A5" strokeWidth="1" />
        <text x="58" y="20.5" textAnchor="middle" fontSize="4" fill="#FEF2F2" fontFamily="monospace">rhetoric</text>
        <text x="14" y="30" fontSize="7" fill="rgba(239,68,68,0.65)">✦</text>
      </Shell>
    </svg>
  );
}

export function K8IslandMediaAnalysis({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <Shell g="rgba(20,184,166,0.18)" d="#0F4A44" m="#0D9488" l="#14B8A6">
        {/* Multiple media screens */}
        <rect x="18" y="22" width="20" height="13" rx="2" fill="#18181B" stroke="#14B8A6" strokeWidth="1" />
        <rect x="22" y="25" width="12" height="7" rx="0.5" fill="#2DD4BF" opacity="0.2" />
        <text x="28" y="31" textAnchor="middle" fontSize="5" fill="#CCFBF1" fontFamily="monospace">Video</text>
        <rect x="42" y="20" width="20" height="13" rx="2" fill="#18181B" stroke="#0D9488" strokeWidth="1" />
        <rect x="46" y="23" width="12" height="7" rx="0.5" fill="#14B8A6" opacity="0.2" />
        <text x="52" y="29" textAnchor="middle" fontSize="5" fill="#CCFBF1" fontFamily="monospace">News</text>
        {/* Analysis arrows */}
        <path d="M28,35 Q34,40 40,37 Q46,34 52,38" fill="none" stroke="#2DD4BF" strokeWidth="1.2" strokeDasharray="2 1" />
        <text x="40" y="42" textAnchor="middle" fontSize="5" fill="#CCFBF1" fontFamily="monospace">analyze</text>
        <text x="14" y="26" fontSize="7" fill="rgba(20,184,166,0.65)">✦</text>
      </Shell>
    </svg>
  );
}

export function K8IslandMasterClass({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <Shell g="rgba(236,72,153,0.18)" d="#831843" m="#BE185D" l="#EC4899">
        {/* Graduation / mastery icon */}
        <circle cx="40" cy="25" r="10" fill="rgba(236,72,153,0.2)" stroke="#F9A8D4" strokeWidth="1.2" />
        {/* Graduation cap */}
        <polygon points="40,17 52,22 40,27 28,22" fill="#BE185D" opacity="0.9" />
        <rect x="38" y="22" width="4" height="7" fill="#9D174D" opacity="0.7" />
        {/* Tassel */}
        <line x1="50" y1="22" x2="52" y2="28" stroke="#FDE68A" strokeWidth="1.5" />
        <circle cx="52" cy="29" r="1.5" fill="#FDE68A" />
        {/* Star burst around cap */}
        <text x="20" y="22" fontSize="8" fill="rgba(236,72,153,0.6)">✦</text>
        <text x="57" y="20" fontSize="7" fill="rgba(249,168,212,0.5)">✦</text>
        {/* Diploma scroll below */}
        <rect x="26" y="36" width="28" height="8" rx="2" fill="#FDF2F8" stroke="#F9A8D4" strokeWidth="0.8" />
        <ellipse cx="26" cy="40" rx="2" ry="4" fill="#FCE7F3" stroke="#F9A8D4" strokeWidth="0.7" />
        <ellipse cx="54" cy="40" rx="2" ry="4" fill="#FCE7F3" stroke="#F9A8D4" strokeWidth="0.7" />
        <text x="40" y="41.5" textAnchor="middle" fontSize="5.5" fontWeight="bold" fill="#9D174D" fontFamily="monospace">DIPLOMA</text>
      </Shell>
    </svg>
  );
}

export function K8IslandGrandFinals({ size = 80 }: IP) {
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
      <text x="40" y="42" textAnchor="middle" fontSize="5" fontWeight="bold" fill="#99F6E4" fontFamily="monospace">G8</text>
      <text x="39" y="13" fontSize="7" fill="rgba(78,205,196,0.8)">✦</text>
    </svg>
  );
}

export const K8_ISLAND_SVGS: Record<string, React.FC<{ size?: number }>> = {
  i1: K8IslandLitCriticism,
  i2: K8IslandAdvWriting,
  i3: K8IslandLiterature,
  i4: K8IslandArgumentativeEssay,
  i5: K8IslandSpeechDebate,
  i6: K8IslandAdvVocab,
  i7: K8IslandMediaAnalysis,
  i8: K8IslandMasterClass,
  i9: K8IslandGrandFinals,
};
