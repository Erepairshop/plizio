'use client';

/**
 * Simple SVG icons for Grade 1 Deutsch visual questions
 * Each icon: 48×48 viewBox, inline SVG, immediately recognizable for 6-7 year olds
 */

import React from 'react';

const iconStyle: React.CSSProperties = { width: '100%', height: '100%' };

const Hund = () => (
  <svg viewBox="0 0 48 48" fill="none" style={iconStyle}>
    <ellipse cx="15" cy="13" rx="5" ry="7" fill="#A07840" transform="rotate(-20 15 13)" />
    <ellipse cx="33" cy="13" rx="5" ry="7" fill="#A07840" transform="rotate(20 33 13)" />
    <circle cx="24" cy="20" r="10" fill="#C8A46A" />
    <ellipse cx="24" cy="32" rx="13" ry="9" fill="#C8A46A" />
    <circle cx="20" cy="18" r="1.8" fill="#222" />
    <circle cx="28" cy="18" r="1.8" fill="#222" />
    <ellipse cx="24" cy="23" rx="3" ry="2" fill="#7A5030" />
    <path d="M20 26 Q24 30 28 26" stroke="#7A5030" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    <ellipse cx="24" cy="28" rx="3" ry="2" fill="#E88080" />
  </svg>
);

const Katze = () => (
  <svg viewBox="0 0 48 48" fill="none" style={iconStyle}>
    <polygon points="12,14 8,4 18,11" fill="#E8904A" />
    <polygon points="36,14 40,4 30,11" fill="#E8904A" />
    <circle cx="24" cy="22" r="11" fill="#E8904A" />
    <ellipse cx="24" cy="34" rx="12" ry="8" fill="#E8904A" />
    <circle cx="19" cy="20" r="2" fill="#222" />
    <circle cx="29" cy="20" r="2" fill="#222" />
    <ellipse cx="24" cy="25" rx="2.5" ry="1.5" fill="#C06030" />
    <line x1="12" y1="24" x2="20" y2="25" stroke="#555" strokeWidth="0.8" />
    <line x1="12" y1="26" x2="20" y2="26" stroke="#555" strokeWidth="0.8" />
    <line x1="28" y1="25" x2="36" y2="24" stroke="#555" strokeWidth="0.8" />
    <line x1="28" y1="26" x2="36" y2="26" stroke="#555" strokeWidth="0.8" />
  </svg>
);

const Fisch = () => (
  <svg viewBox="0 0 48 48" fill="none" style={iconStyle}>
    <ellipse cx="22" cy="24" rx="15" ry="9" fill="#5BA4E0" />
    <polygon points="38,24 46,16 46,32" fill="#4090CC" />
    <circle cx="14" cy="21" r="2.5" fill="#FFF" />
    <circle cx="14" cy="21" r="1.2" fill="#222" />
    <path d="M22 28 Q26 30 30 28" stroke="#4090CC" strokeWidth="1" fill="none" />
    <line x1="22" y1="16" x2="22" y2="32" stroke="#4090CC" strokeWidth="0.7" opacity="0.5" />
    <line x1="26" y1="15" x2="26" y2="33" stroke="#4090CC" strokeWidth="0.7" opacity="0.5" />
  </svg>
);

const Vogel = () => (
  <svg viewBox="0 0 48 48" fill="none" style={iconStyle}>
    <ellipse cx="26" cy="26" rx="11" ry="8" fill="#FF7043" />
    <circle cx="18" cy="20" r="7" fill="#FF7043" />
    <path d="M8 18 Q14 14 18 20" fill="#FFC107" />
    <path d="M36 22 Q42 18 44 24 Q38 28 36 22Z" fill="#FF5722" />
    <ellipse cx="36" cy="32" rx="5" ry="3" fill="#FF5722" transform="rotate(30 36 32)" />
    <circle cx="16" cy="18" r="2" fill="#FFF" />
    <circle cx="16" cy="18" r="1" fill="#222" />
  </svg>
);

const Baum = () => (
  <svg viewBox="0 0 48 48" fill="none" style={iconStyle}>
    <rect x="20" y="34" width="8" height="12" rx="1" fill="#8B5E3C" />
    <polygon points="24,4 6,24 42,24" fill="#4CAF50" />
    <polygon points="24,10 8,30 40,30" fill="#388E3C" />
    <polygon points="24,16 10,36 38,36" fill="#2E7D32" />
  </svg>
);

const Ball = () => (
  <svg viewBox="0 0 48 48" fill="none" style={iconStyle}>
    <circle cx="24" cy="24" r="18" fill="#F44336" />
    <path d="M6 24 Q24 14 42 24" stroke="#FFF" strokeWidth="2" fill="none" />
    <path d="M6 24 Q24 34 42 24" stroke="#FFF" strokeWidth="2" fill="none" />
    <line x1="24" y1="6" x2="24" y2="42" stroke="#FFF" strokeWidth="2" />
    <circle cx="24" cy="24" r="18" stroke="#C62828" strokeWidth="1" fill="none" />
  </svg>
);

const Haus = () => (
  <svg viewBox="0 0 48 48" fill="none" style={iconStyle}>
    <polygon points="24,4 4,22 44,22" fill="#E53935" />
    <rect x="8" y="20" width="32" height="26" rx="1" fill="#FFCC80" />
    <rect x="18" y="30" width="12" height="16" rx="1" fill="#8D6E63" />
    <rect x="10" y="24" width="8" height="8" rx="1" fill="#81D4FA" />
    <rect x="30" y="24" width="8" height="8" rx="1" fill="#81D4FA" />
  </svg>
);

const Sonne = () => (
  <svg viewBox="0 0 48 48" fill="none" style={iconStyle}>
    {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
      <line
        key={deg}
        x1={24 + Math.cos((deg * Math.PI) / 180) * 14}
        y1={24 + Math.sin((deg * Math.PI) / 180) * 14}
        x2={24 + Math.cos((deg * Math.PI) / 180) * 20}
        y2={24 + Math.sin((deg * Math.PI) / 180) * 20}
        stroke="#FDD835" strokeWidth="3" strokeLinecap="round"
      />
    ))}
    <circle cx="24" cy="24" r="11" fill="#FDD835" />
  </svg>
);

const Mond = () => (
  <svg viewBox="0 0 48 48" fill="none" style={iconStyle}>
    <path d="M32 8 A16 16 0 1 0 32 40 A12 12 0 1 1 32 8Z" fill="#FDD835" />
    <circle cx="22" cy="18" r="2" fill="#F9A825" opacity="0.5" />
    <circle cx="18" cy="28" r="1.5" fill="#F9A825" opacity="0.5" />
    <circle cx="26" cy="30" r="1" fill="#F9A825" opacity="0.5" />
  </svg>
);

const Blume = () => (
  <svg viewBox="0 0 48 48" fill="none" style={iconStyle}>
    <line x1="24" y1="32" x2="24" y2="46" stroke="#4CAF50" strokeWidth="3" strokeLinecap="round" />
    <path d="M24 36 Q20 32 16 34" stroke="#4CAF50" strokeWidth="2" fill="none" />
    {[0, 72, 144, 216, 288].map((deg) => (
      <ellipse
        key={deg}
        cx={24 + Math.cos(((deg - 90) * Math.PI) / 180) * 10}
        cy={24 + Math.sin(((deg - 90) * Math.PI) / 180) * 10}
        rx="6" ry="8"
        fill="#F06292"
        transform={`rotate(${deg} ${24 + Math.cos(((deg - 90) * Math.PI) / 180) * 10} ${24 + Math.sin(((deg - 90) * Math.PI) / 180) * 10})`}
      />
    ))}
    <circle cx="24" cy="24" r="7" fill="#FDD835" />
  </svg>
);

const Auto = () => (
  <svg viewBox="0 0 48 48" fill="none" style={iconStyle}>
    <rect x="4" y="22" width="40" height="16" rx="3" fill="#1565C0" />
    <path d="M10 22 L16 12 H32 L38 22Z" fill="#1976D2" />
    <rect x="18" y="14" width="12" height="8" rx="2" fill="#81D4FA" />
    <circle cx="13" cy="38" r="5" fill="#333" />
    <circle cx="13" cy="38" r="2.5" fill="#999" />
    <circle cx="35" cy="38" r="5" fill="#333" />
    <circle cx="35" cy="38" r="2.5" fill="#999" />
    <rect x="36" y="26" width="4" height="2" rx="1" fill="#FDD835" />
    <rect x="8" y="26" width="4" height="2" rx="1" fill="#FF7043" />
  </svg>
);

const Buch = () => (
  <svg viewBox="0 0 48 48" fill="none" style={iconStyle}>
    <rect x="8" y="6" width="32" height="40" rx="2" fill="#E53935" />
    <rect x="8" y="6" width="6" height="40" fill="#C62828" />
    <rect x="16" y="14" width="18" height="2" rx="1" fill="#FFCDD2" />
    <rect x="16" y="20" width="18" height="2" rx="1" fill="#FFCDD2" />
    <rect x="16" y="26" width="14" height="2" rx="1" fill="#FFCDD2" />
    <rect x="16" y="32" width="16" height="2" rx="1" fill="#FFCDD2" />
  </svg>
);

const Apfel = () => (
  <svg viewBox="0 0 48 48" fill="none" style={iconStyle}>
    <path d="M24 8 Q26 2 30 4" stroke="#4CAF50" strokeWidth="2" fill="none" strokeLinecap="round" />
    <line x1="24" y1="8" x2="24" y2="12" stroke="#8B5E3C" strokeWidth="2" />
    <path d="M24 12 Q10 12 8 26 Q6 38 16 42 Q22 44 24 40 Q26 44 32 42 Q42 38 40 26 Q38 12 24 12Z" fill="#E53935" />
    <path d="M16 18 Q10 22 10 30" stroke="#EF9A9A" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.5" />
  </svg>
);

const Tisch = () => (
  <svg viewBox="0 0 48 48" fill="none" style={iconStyle}>
    <rect x="4" y="16" width="40" height="6" rx="2" fill="#8D6E63" />
    <rect x="8" y="22" width="5" height="22" rx="2" fill="#6D4C41" />
    <rect x="35" y="22" width="5" height="22" rx="2" fill="#6D4C41" />
    <rect x="10" y="22" width="28" height="4" rx="1" fill="#795548" opacity="0.4" />
  </svg>
);

const Stuhl = () => (
  <svg viewBox="0 0 48 48" fill="none" style={iconStyle}>
    <rect x="12" y="4" width="5" height="26" rx="2" fill="#6D4C41" />
    <rect x="31" y="4" width="5" height="26" rx="2" fill="#6D4C41" />
    <rect x="10" y="20" width="28" height="6" rx="2" fill="#8D6E63" />
    <rect x="12" y="26" width="5" height="18" rx="2" fill="#6D4C41" />
    <rect x="31" y="26" width="5" height="18" rx="2" fill="#6D4C41" />
  </svg>
);

const Schuh = () => (
  <svg viewBox="0 0 48 48" fill="none" style={iconStyle}>
    <path d="M6 34 Q8 24 14 20 L22 18 Q28 16 36 20 L44 24 Q46 28 44 32 Q42 36 36 36 L8 36 Q4 36 6 34Z" fill="#3949AB" />
    <path d="M6 34 L44 34 Q46 36 44 38 Q42 40 8 40 Q4 40 4 38 Q4 36 6 34Z" fill="#283593" />
    <path d="M14 20 Q16 14 22 12 Q28 10 30 14 L28 20Z" fill="#3949AB" />
    <rect x="16" y="16" width="12" height="3" rx="1" fill="#5C6BC0" opacity="0.6" />
  </svg>
);

const Stern = () => (
  <svg viewBox="0 0 48 48" fill="none" style={iconStyle}>
    <polygon
      points="24,4 28.5,18 44,18 31.5,27 36,42 24,33 12,42 16.5,27 4,18 19.5,18"
      fill="#FDD835"
      stroke="#F9A825"
      strokeWidth="1"
    />
  </svg>
);

const Herz = () => (
  <svg viewBox="0 0 48 48" fill="none" style={iconStyle}>
    <path d="M24 42 Q4 28 4 16 Q4 6 14 6 Q20 6 24 14 Q28 6 34 6 Q44 6 44 16 Q44 28 24 42Z" fill="#E53935" />
    <path d="M14 12 Q10 14 10 18" stroke="#EF9A9A" strokeWidth="2" fill="none" strokeLinecap="round" />
  </svg>
);

const Pilz = () => (
  <svg viewBox="0 0 48 48" fill="none" style={iconStyle}>
    <path d="M8 28 Q8 10 24 10 Q40 10 40 28Z" fill="#E53935" />
    <circle cx="16" cy="22" r="3.5" fill="#FFF" />
    <circle cx="28" cy="18" r="4" fill="#FFF" />
    <circle cx="34" cy="25" r="3" fill="#FFF" />
    <rect x="18" y="28" width="12" height="14" rx="4" fill="#FFCC80" />
    <path d="M14 28 Q18 32 18 28" stroke="#E0A060" strokeWidth="1.5" fill="none" />
    <path d="M34 28 Q30 32 30 28" stroke="#E0A060" strokeWidth="1.5" fill="none" />
  </svg>
);

const Frosch = () => (
  <svg viewBox="0 0 48 48" fill="none" style={iconStyle}>
    <circle cx="14" cy="14" r="7" fill="#66BB6A" />
    <circle cx="34" cy="14" r="7" fill="#66BB6A" />
    <circle cx="14" cy="14" r="4" fill="#FFF" />
    <circle cx="34" cy="14" r="4" fill="#FFF" />
    <circle cx="14" cy="14" r="2.5" fill="#222" />
    <circle cx="34" cy="14" r="2.5" fill="#222" />
    <ellipse cx="24" cy="30" rx="18" ry="14" fill="#66BB6A" />
    <ellipse cx="24" cy="30" rx="12" ry="8" fill="#A5D6A7" />
    <path d="M16 36 Q24 40 32 36" stroke="#388E3C" strokeWidth="2" fill="none" strokeLinecap="round" />
    <ellipse cx="18" cy="24" rx="3" ry="1.5" fill="#388E3C" />
    <ellipse cx="30" cy="24" rx="3" ry="1.5" fill="#388E3C" />
  </svg>
);

export const G1_ICONS: Record<string, React.FC> = {
  hund: Hund,
  katze: Katze,
  fisch: Fisch,
  vogel: Vogel,
  baum: Baum,
  ball: Ball,
  haus: Haus,
  sonne: Sonne,
  mond: Mond,
  blume: Blume,
  auto: Auto,
  buch: Buch,
  apfel: Apfel,
  tisch: Tisch,
  stuhl: Stuhl,
  schuh: Schuh,
  stern: Stern,
  herz: Herz,
  pilz: Pilz,
  frosch: Frosch,
};

export const G1_WORD_LABELS: Record<string, string> = {
  hund: 'Hund',
  katze: 'Katze',
  fisch: 'Fisch',
  vogel: 'Vogel',
  baum: 'Baum',
  ball: 'Ball',
  haus: 'Haus',
  sonne: 'Sonne',
  mond: 'Mond',
  blume: 'Blume',
  auto: 'Auto',
  buch: 'Buch',
  apfel: 'Apfel',
  tisch: 'Tisch',
  stuhl: 'Stuhl',
  schuh: 'Schuh',
  stern: 'Stern',
  herz: 'Herz',
  pilz: 'Pilz',
  frosch: 'Frosch',
};
