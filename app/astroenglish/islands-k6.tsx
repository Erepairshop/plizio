// SVG Island illustrations for AstroEnglish K6 map
// Each island is a unique floating fantasy landmass with glow ellipse,
// rocky underside, island body, themed surface, decorations, sparkles
// viewBox: "0 0 80 80", renders at 48-60px on mobile

import React from "react";

type IP = { size?: number };

function Base({ glow, body, top1, top2 }: { glow: string; body: string; top1: string; top2: string }) {
  return (
    <>
      <ellipse cx="40" cy="74" rx="20" ry="5" fill={glow} />
      <path d="M21,50 Q26,63 32,58 Q38,67 44,62 Q51,67 56,58 Q62,63 59,50Z" fill={body} />
      <ellipse cx="40" cy="48" rx="21" ry="9" fill={body} />
      <ellipse cx="40" cy="43" rx="21" ry="8" fill={top1} />
      <ellipse cx="40" cy="40" rx="19" ry="6" fill={top2} />
    </>
  );
}

export function K6IslandTextAnalysis({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <Base glow="rgba(59,130,246,0.2)" body="#1E3A6E" top1="#2563EB" top2="#3B82F6" />
      <rect x="22" y="20" width="36" height="22" rx="2" fill="#EFF6FF" stroke="#60A5FA" strokeWidth="1" />
      <line x1="22" y1="20" x2="22" y2="42" stroke="#3B82F6" strokeWidth="2" />
      <line x1="26" y1="26" x2="54" y2="26" stroke="#93C5FD" strokeWidth="0.8" />
      <line x1="26" y1="29" x2="53" y2="29" stroke="#93C5FD" strokeWidth="0.8" />
      <line x1="26" y1="32" x2="55" y2="32" stroke="#93C5FD" strokeWidth="0.8" />
      <line x1="26" y1="35" x2="52" y2="35" stroke="#93C5FD" strokeWidth="0.8" />
      {/* Highlight mark */}
      <rect x="26" y="29" width="18" height="3" rx="0.5" fill="#FDE68A" opacity="0.5" />
      <text x="14" y="26" fontSize="7" fill="rgba(59,130,246,0.65)">✦</text>
      <text x="60" y="22" fontSize="6" fill="rgba(147,197,253,0.6)">✦</text>
    </svg>
  );
}

export function K6IslandFigurativeLang({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <Base glow="rgba(180,77,255,0.18)" body="#3D0D5A" top1="#6A2499" top2="#8B44C0" />
      {/* Symbol bubbles */}
      <rect x="18" y="22" width="18" height="9" rx="2.5" fill="rgba(180,77,255,0.3)" stroke="#C084FC" strokeWidth="1" />
      <text x="27" y="29" textAnchor="middle" fontSize="5.5" fill="#EDE9FE" fontFamily="monospace">Alliteration</text>
      <rect x="40" y="19" width="18" height="9" rx="2.5" fill="rgba(180,77,255,0.25)" stroke="#C084FC" strokeWidth="1" />
      <text x="49" y="26" textAnchor="middle" fontSize="5.5" fill="#EDE9FE" fontFamily="monospace">Irony</text>
      <rect x="25" y="33" width="18" height="9" rx="2.5" fill="rgba(180,77,255,0.2)" stroke="#A855F7" strokeWidth="1" />
      <text x="34" y="40" textAnchor="middle" fontSize="5.5" fill="#EDE9FE" fontFamily="monospace">Symbol</text>
      <text x="14" y="24" fontSize="7" fill="rgba(180,77,255,0.65)">✦</text>
    </svg>
  );
}

export function K6IslandClauses({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <Base glow="rgba(16,185,129,0.18)" body="#124A36" top1="#166A4A" top2="#1A7A55" />
      {/* Clause blocks */}
      <rect x="18" y="22" width="20" height="10" rx="2" fill="#A7F3D0" stroke="#10B981" strokeWidth="1.2" />
      <text x="28" y="29.5" textAnchor="middle" fontSize="5" fontWeight="bold" fill="#065F46" fontFamily="monospace">Clause 1</text>
      <rect x="42" y="22" width="20" height="10" rx="2" fill="#6EE7B7" stroke="#34D399" strokeWidth="1.2" />
      <text x="52" y="29.5" textAnchor="middle" fontSize="5" fontWeight="bold" fill="#065F46" fontFamily="monospace">Clause 2</text>
      {/* Connector */}
      <rect x="36" y="25" width="7" height="5" rx="1.5" fill="#10B981" opacity="0.9" />
      <text x="39.5" y="29" textAnchor="middle" fontSize="5" fontWeight="bold" fill="white" fontFamily="monospace">but</text>
      <line x1="38" y1="27.5" x2="18" y2="27.5" stroke="#A7F3D0" strokeWidth="0.7" opacity="0.5" />
      <line x1="43" y1="27.5" x2="42" y2="27.5" stroke="#A7F3D0" strokeWidth="0.7" opacity="0.5" />
      {/* Sub items */}
      <rect x="23" y="35" width="34" height="7" rx="2" fill="#ECFDF5" stroke="#6EE7B7" strokeWidth="0.8" />
      <text x="40" y="40.5" textAnchor="middle" fontSize="5" fill="#065F46" fontFamily="monospace">Complex Sentence</text>
      <text x="14" y="27" fontSize="7" fill="rgba(16,185,129,0.65)">✦</text>
    </svg>
  );
}

export function K6IslandDebate({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <Base glow="rgba(245,158,11,0.2)" body="#78350F" top1="#B45309" top2="#F59E0B" />
      {/* Two podiums facing each other */}
      <rect x="17" y="27" width="12" height="14" rx="1" fill="#FDE68A" stroke="#F59E0B" strokeWidth="1" />
      <rect x="51" y="27" width="12" height="14" rx="1" fill="#FDE68A" stroke="#F59E0B" strokeWidth="1" />
      {/* Speech lines */}
      <path d="M29,30 Q37,25 42,30" fill="none" stroke="#FDE68A" strokeWidth="1" strokeDasharray="2 1" />
      <path d="M51,32 Q43,27 38,32" fill="none" stroke="#FDE68A" strokeWidth="1" strokeDasharray="2 1" />
      {/* Person shapes */}
      <circle cx="23" cy="22" r="4" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="0.8" />
      <circle cx="57" cy="22" r="4" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="0.8" />
      <text x="14" y="25" fontSize="7" fill="rgba(245,158,11,0.65)">✦</text>
    </svg>
  );
}

export function K6IslandVocabInContext({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <Base glow="rgba(99,102,241,0.2)" body="#312E81" top1="#4338CA" top2="#6366F1" />
      {/* Dictionary entry style */}
      <rect x="20" y="20" width="40" height="24" rx="2" fill="#EEF2FF" stroke="#818CF8" strokeWidth="1" />
      <text x="40" y="26.5" textAnchor="middle" fontSize="6.5" fontWeight="bold" fill="#3730A3" fontFamily="monospace">context</text>
      <line x1="22" y1="28" x2="58" y2="28" stroke="#C7D2FE" strokeWidth="0.7" />
      <text x="23" y="33.5" fontSize="5" fill="#4338CA" fontFamily="monospace">(n.) surrounding info</text>
      <text x="23" y="38" fontSize="4.5" fill="#6366F1" fontFamily="monospace">that helps meaning</text>
      {/* Context clue arrow */}
      <path d="M48,30 Q54,27 58,32" fill="none" stroke="#818CF8" strokeWidth="1" strokeDasharray="2 1" />
      <text x="14" y="26" fontSize="7" fill="rgba(99,102,241,0.65)">✦</text>
    </svg>
  );
}

export function K6IslandNarrativeWriting({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <Base glow="rgba(236,72,153,0.2)" body="#831843" top1="#BE185D" top2="#EC4899" />
      {/* Story scroll */}
      <rect x="22" y="18" width="36" height="26" rx="3" fill="#FDF2F8" stroke="#F9A8D4" strokeWidth="1" />
      <ellipse cx="22" cy="31" rx="2.5" ry="13" fill="#FCE7F3" stroke="#F9A8D4" strokeWidth="0.8" />
      <ellipse cx="58" cy="31" rx="2.5" ry="13" fill="#FCE7F3" stroke="#F9A8D4" strokeWidth="0.8" />
      <text x="40" y="25" textAnchor="middle" fontSize="5.5" fontWeight="bold" fill="#9D174D" fontFamily="monospace">Once upon</text>
      <line x1="26" y1="28" x2="54" y2="28" stroke="#F9A8D4" strokeWidth="0.7" />
      <line x1="26" y1="31" x2="55" y2="31" stroke="#F9A8D4" strokeWidth="0.7" />
      <line x1="26" y1="34" x2="53" y2="34" stroke="#F9A8D4" strokeWidth="0.7" />
      <line x1="26" y1="37" x2="54" y2="37" stroke="#F9A8D4" strokeWidth="0.7" />
      <text x="14" y="24" fontSize="7" fill="rgba(236,72,153,0.65)">✦</text>
    </svg>
  );
}

export function K6IslandMediaLit({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <Base glow="rgba(255,149,0,0.18)" body="#5A2A00" top1="#7A3A00" top2="#8B4200" />
      {/* Screen / media frame */}
      <rect x="18" y="19" width="44" height="26" rx="3" fill="#3F3F46" stroke="#FF9500" strokeWidth="1.2" />
      <rect x="21" y="22" width="38" height="20" rx="1" fill="#18181B" />
      {/* Play button */}
      <circle cx="40" cy="32" r="7" fill="rgba(255,149,0,0.3)" stroke="#FF9500" strokeWidth="1" />
      <polygon points="37.5,29 46,32 37.5,35" fill="#FF9500" opacity="0.9" />
      {/* Stand */}
      <rect x="38" y="45" width="4" height="4" fill="#3F3F46" />
      <rect x="33" y="48" width="14" height="2" rx="1" fill="#3F3F46" />
      <text x="14" y="26" fontSize="7" fill="rgba(255,149,0,0.65)">✦</text>
    </svg>
  );
}

export function K6IslandSpeechWriting({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <Base glow="rgba(20,184,166,0.18)" body="#0F4A44" top1="#0D9488" top2="#14B8A6" />
      {/* Speech / podium */}
      <rect x="30" y="24" width="20" height="16" rx="2" fill="#CCFBF1" stroke="#14B8A6" strokeWidth="1.2" />
      <line x1="34" y1="29" x2="46" y2="29" stroke="#0F766E" strokeWidth="0.8" />
      <line x1="34" y1="32" x2="47" y2="32" stroke="#0F766E" strokeWidth="0.8" />
      <line x1="34" y1="35" x2="45" y2="35" stroke="#0F766E" strokeWidth="0.8" />
      {/* Microphone above */}
      <ellipse cx="40" cy="18" rx="4" ry="5" fill="rgba(20,184,166,0.3)" stroke="#2DD4BF" strokeWidth="1.2" />
      <line x1="40" y1="23" x2="40" y2="25" stroke="#14B8A6" strokeWidth="1.5" strokeLinecap="round" />
      {/* Sound ripples */}
      <path d="M18,24 Q21,20 18,16" stroke="rgba(20,184,166,0.5)" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <path d="M62,24 Q59,20 62,16" stroke="rgba(20,184,166,0.5)" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <text x="14" y="32" fontSize="7" fill="rgba(20,184,166,0.65)">✦</text>
    </svg>
  );
}

export function K6IslandGrandFinals({ size = 80 }: IP) {
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
      <text x="40" y="42" textAnchor="middle" fontSize="5" fontWeight="bold" fill="#99F6E4" fontFamily="monospace">G6</text>
      <text x="39" y="13" fontSize="7" fill="rgba(78,205,196,0.8)">✦</text>
    </svg>
  );
}

export const K6_ISLAND_SVGS: Record<string, React.FC<{ size?: number }>> = {
  i1: K6IslandTextAnalysis,
  i2: K6IslandFigurativeLang,
  i3: K6IslandClauses,
  i4: K6IslandDebate,
  i5: K6IslandVocabInContext,
  i6: K6IslandNarrativeWriting,
  i7: K6IslandMediaLit,
  i8: K6IslandSpeechWriting,
  i9: K6IslandGrandFinals,
};
