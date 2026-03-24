"use client";
// ─── FishSvg — MASTER TEMPLATE ─────────────────────────────────────────────
// Profi biológiai illusztrációk mintája.
// Minden új SVG fájl ezt a struktúrát kövesse!
//
// Exportok:
//   FishAnatomySvg  — teljes hal anatómia (kopoltyú, uszony, pikkely)
//   FishScalesSvg   — pikkelyek közelről
//   FrogLifeSvg     — béka életciklus (pete→ebihal→béka)
//
// Használat explorer-ben:
//   import { FishAnatomySvg } from "@/app/astro-biologie/svg/FishSvg";
//   svg: (lang) => <FishAnatomySvg lang={lang} />

import { memo } from "react";

// ─── FISH ANATOMY — teljes hal, annotált ───────────────────────────────────

const ANATOMY_LABELS: Record<string, Record<string, string>> = {
  en: { gills: "Gills", scales: "Scales", fins: "Fins", tailFin: "Tail fin", eye: "Eye", lateralLine: "Lateral line" },
  de: { gills: "Kiemen", scales: "Schuppen", fins: "Flossen", tailFin: "Schwanzflosse", eye: "Auge", lateralLine: "Seitenlinie" },
  hu: { gills: "Kopoltyú", scales: "Pikkelyek", fins: "Uszonyok", tailFin: "Farokúszó", eye: "Szem", lateralLine: "Oldalvonal" },
  ro: { gills: "Branhii", scales: "Solzi", fins: "Aripioare", tailFin: "Înotătoare caudală", eye: "Ochi", lateralLine: "Linie laterală" },
};

export const FishAnatomySvg = memo(function FishAnatomySvg({ lang = "de" }: { lang?: string }) {
  const l = ANATOMY_LABELS[lang] || ANATOMY_LABELS.en;

  return (
    <svg viewBox="0 0 280 180" className="w-full h-auto max-h-44">
      <defs>
        {/* Ocean depth gradient */}
        <linearGradient id="fishBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0c2d48" />
          <stop offset="50%" stopColor="#0a3a5c" />
          <stop offset="100%" stopColor="#072a42" />
        </linearGradient>
        {/* Fish body gradient — dorsal to ventral */}
        <linearGradient id="fishBody" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0891b2" />
          <stop offset="35%" stopColor="#06b6d4" />
          <stop offset="70%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#a5f3fc" />
        </linearGradient>
        {/* Belly shimmer */}
        <linearGradient id="fishBelly" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#67e8f9" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#ecfeff" stopOpacity="0.15" />
        </linearGradient>
        {/* Fin warm accent */}
        <linearGradient id="fishFin" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fb923c" />
          <stop offset="100%" stopColor="#ea580c" />
        </linearGradient>
        {/* Tail gradient */}
        <linearGradient id="fishTail" x1="100%" y1="0%" x2="0%" y2="50%">
          <stop offset="0%" stopColor="#0891b2" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
        {/* Label glow */}
        <filter id="fishLblGlow">
          <feGaussianBlur stdDeviation="1.2" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        {/* Soft caustic light */}
        <radialGradient id="fishCaustic" cx="30%" cy="20%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.06)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </radialGradient>
      </defs>

      {/* ── Background ── */}
      <rect width="280" height="180" fill="url(#fishBg)" rx="12" />
      <ellipse cx="100" cy="30" rx="120" ry="55" fill="url(#fishCaustic)" />

      {/* Light rays from surface */}
      <line x1="70" y1="0" x2="85" y2="50" stroke="rgba(255,255,255,0.035)" strokeWidth="8" />
      <line x1="150" y1="0" x2="138" y2="48" stroke="rgba(255,255,255,0.025)" strokeWidth="10" />
      <line x1="210" y1="0" x2="200" y2="42" stroke="rgba(255,255,255,0.02)" strokeWidth="7" />

      {/* Tiny particles */}
      <circle cx="30" cy="32" r="0.9" fill="rgba(255,255,255,0.14)" />
      <circle cx="250" cy="48" r="0.7" fill="rgba(255,255,255,0.1)" />
      <circle cx="220" cy="145" r="1.0" fill="rgba(255,255,255,0.08)" />
      <circle cx="45" cy="155" r="0.8" fill="rgba(255,255,255,0.07)" />
      <circle cx="260" cy="100" r="0.6" fill="rgba(255,255,255,0.09)" />

      {/* Subtle seaweed background */}
      <path d="M 15 180 Q 18 155 12 135 Q 8 118 14 100" fill="none" stroke="rgba(34,197,94,0.12)" strokeWidth="3" strokeLinecap="round" />
      <path d="M 265 180 Q 260 158 268 138 Q 272 120 264 105" fill="none" stroke="rgba(34,197,94,0.1)" strokeWidth="2.5" strokeLinecap="round" />

      {/* ── Tail fin — forked ── */}
      <path d="M 82 90 Q 58 65 38 50 Q 50 75 46 90 Q 50 105 38 130 Q 58 115 82 98 Z"
        fill="url(#fishTail)" opacity="0.88" />
      {/* Tail ray lines */}
      <line x1="78" y1="90" x2="42" y2="56" stroke="rgba(255,255,255,0.14)" strokeWidth="0.5" />
      <line x1="76" y1="94" x2="44" y2="90" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
      <line x1="78" y1="98" x2="42" y2="124" stroke="rgba(255,255,255,0.14)" strokeWidth="0.5" />
      {/* Tail edge glow */}
      <path d="M 38 50 Q 50 75 46 90 Q 50 105 38 130"
        fill="none" stroke="rgba(103,232,249,0.25)" strokeWidth="0.8" />

      {/* ── Fish body — organic bezier ── */}
      <path d="M 78 93
        Q 95 52 130 48 Q 160 45 185 52 Q 208 60 218 75
        Q 225 85 224 93
        Q 225 102 218 112 Q 208 126 185 134 Q 160 140 130 138
        Q 95 134 78 98 Z"
        fill="url(#fishBody)" stroke="rgba(8,145,178,0.4)" strokeWidth="0.8" />

      {/* Belly highlight */}
      <path d="M 95 100 Q 120 130 160 132 Q 190 130 210 118
        Q 200 125 170 130 Q 140 132 110 120 Z"
        fill="url(#fishBelly)" />

      {/* ── Scale pattern — 3 rows ── */}
      {[0,1,2].map(row =>
        [0,1,2,3,4,5].map(col => {
          const cx = 110 + col * 18 - row * 3;
          const cy = 75 + row * 16;
          return (
            <path key={`s${row}${col}`}
              d={`M ${cx-6} ${cy} Q ${cx} ${cy-5} ${cx+6} ${cy} Q ${cx} ${cy+5} ${cx-6} ${cy}`}
              fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
          );
        })
      )}

      {/* ── Lateral line ── */}
      <path d="M 100 90 Q 140 88 180 90 Q 200 91 215 93"
        fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" strokeDasharray="3 2" />

      {/* ── Dorsal fin (top) ── */}
      <path d="M 125 55 Q 140 28 160 25 Q 175 28 180 42 Q 170 48 155 50 Q 138 52 125 55 Z"
        fill="url(#fishFin)" opacity="0.85" />
      {/* Dorsal fin rays */}
      <line x1="135" y1="52" x2="145" y2="30" stroke="rgba(255,255,255,0.2)" strokeWidth="0.4" />
      <line x1="155" y1="48" x2="160" y2="28" stroke="rgba(255,255,255,0.18)" strokeWidth="0.4" />
      <line x1="170" y1="46" x2="172" y2="32" stroke="rgba(255,255,255,0.15)" strokeWidth="0.4" />

      {/* ── Pectoral fin (side) ── */}
      <path d="M 130 102 Q 118 115 112 128 Q 120 125 132 115 Q 138 108 135 102 Z"
        fill="#0891b2" opacity="0.7" />

      {/* ── Ventral fin (bottom) ── */}
      <path d="M 160 135 Q 155 148 150 155 Q 162 150 170 140 Z"
        fill="#0891b2" opacity="0.6" />

      {/* ── Anal fin ── */}
      <path d="M 95 108 Q 88 125 85 132 Q 95 126 102 115 Z"
        fill="url(#fishFin)" opacity="0.65" />

      {/* ── Gill slits ── */}
      <path d="M 168 72 Q 166 82 168 92" fill="none" stroke="rgba(239,68,68,0.45)" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M 172 73 Q 170 83 172 93" fill="none" stroke="rgba(239,68,68,0.35)" strokeWidth="1" strokeLinecap="round" />
      <path d="M 176 74 Q 174 84 176 93" fill="none" stroke="rgba(239,68,68,0.25)" strokeWidth="0.8" strokeLinecap="round" />

      {/* ── Eye ── */}
      <circle cx="200" cy="78" r="7" fill="#0c4a6e" />
      <circle cx="200" cy="78" r="5.5" fill="#1e293b" />
      <circle cx="200" cy="78" r="3.2" fill="#0f172a" />
      <circle cx="201.5" cy="76.5" r="1.5" fill="rgba(255,255,255,0.7)" />
      <circle cx="198" cy="80" r="0.8" fill="rgba(255,255,255,0.3)" />

      {/* ── Mouth ── */}
      <path d="M 222 88 Q 226 90 222 93" fill="none" stroke="rgba(8,145,178,0.6)" strokeWidth="1" strokeLinecap="round" />

      {/* ═══════════════════════════════════════════════════════════════════
           ANNOTATION LABELS — vonalak + pill badge-ek
         ═══════════════════════════════════════════════════════════════════ */}

      {/* --- Eye label --- */}
      <line x1="200" y1="68" x2="200" y2="18" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <rect x="183" y="8" width="34" height="13" rx="6.5" fill="rgba(0,0,0,0.5)" />
      <text x="200" y="17" textAnchor="middle" fontSize="7" fontWeight="700" fill="#e0f2fe" filter="url(#fishLblGlow)">{l.eye}</text>

      {/* --- Gills label --- */}
      <line x1="172" y1="95" x2="172" y2="148" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <rect x="153" y="149" width="38" height="13" rx="6.5" fill="rgba(239,68,68,0.35)" />
      <text x="172" y="158" textAnchor="middle" fontSize="7" fontWeight="700" fill="#fecaca" filter="url(#fishLblGlow)">{l.gills}</text>

      {/* --- Scales label --- */}
      <line x1="140" y1="70" x2="50" y2="30" stroke="rgba(255,255,255,0.25)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <rect x="20" y="20" width="42" height="13" rx="6.5" fill="rgba(0,0,0,0.5)" />
      <text x="41" y="29" textAnchor="middle" fontSize="7" fontWeight="700" fill="#a5f3fc" filter="url(#fishLblGlow)">{l.scales}</text>

      {/* --- Fins label (dorsal) --- */}
      <line x1="150" y1="30" x2="100" y2="12" stroke="rgba(255,255,255,0.25)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <rect x="72" y="3" width="38" height="13" rx="6.5" fill="rgba(251,146,60,0.35)" />
      <text x="91" y="12" textAnchor="middle" fontSize="7" fontWeight="700" fill="#fed7aa" filter="url(#fishLblGlow)">{l.fins}</text>

      {/* --- Tail fin label --- */}
      <line x1="46" y1="90" x2="32" y2="42" stroke="rgba(255,255,255,0.25)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <rect x="10" y="168" width="55" height="13" rx="6.5" fill="rgba(6,182,212,0.3)" />
      <text x="37" y="177" textAnchor="middle" fontSize="6.5" fontWeight="700" fill="#a5f3fc" filter="url(#fishLblGlow)">{l.tailFin}</text>

      {/* --- Lateral line label --- */}
      <line x1="215" y1="93" x2="240" y2="130" stroke="rgba(255,255,255,0.25)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <rect x="218" y="131" width="55" height="13" rx="6.5" fill="rgba(0,0,0,0.45)" />
      <text x="245" y="140" textAnchor="middle" fontSize="6" fontWeight="700" fill="#d1d5db" filter="url(#fishLblGlow)">{l.lateralLine}</text>
    </svg>
  );
});

// ─── FISH SCALES — közelkép pikkelyekre ────────────────────────────────────

export const FishScalesSvg = memo(function FishScalesSvg({ lang = "de" }: { lang?: string }) {
  const labels: Record<string, Record<string, string>> = {
    en: { title: "Fish Scales", protective: "Protective layer", overlap: "Overlapping" },
    de: { title: "Fischschuppen", protective: "Schutzschicht", overlap: "Überlappend" },
    hu: { title: "Halpikkelyek", protective: "Védőréteg", overlap: "Átfedő" },
    ro: { title: "Solzi de pește", protective: "Strat protector", overlap: "Suprapunere" },
  };
  const l = labels[lang as keyof typeof labels] || labels.en;

  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <defs>
        <linearGradient id="scaleBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#164e63" />
          <stop offset="100%" stopColor="#0c4a6e" />
        </linearGradient>
        <linearGradient id="scaleG" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#0891b2" stopOpacity="0.4" />
        </linearGradient>
      </defs>

      <rect width="240" height="140" fill="url(#scaleBg)" rx="12" />

      {/* Scale grid — 5×4 overlapping scales */}
      {[0,1,2,3].map(row =>
        [0,1,2,3,4].map(col => {
          const cx = 40 + col * 38 + (row % 2) * 19;
          const cy = 25 + row * 28;
          return (
            <ellipse key={`sc${row}${col}`}
              cx={cx} cy={cy} rx="18" ry="14"
              fill="url(#scaleG)" stroke="rgba(103,232,249,0.3)" strokeWidth="0.8" />
          );
        })
      )}

      {/* Title */}
      <rect x="70" y="118" width="100" height="16" rx="8" fill="rgba(0,0,0,0.5)" />
      <text x="120" y="129" textAnchor="middle" fontSize="8" fontWeight="700" fill="#a5f3fc">{l.title}</text>
    </svg>
  );
});

// ─── FROG LIFECYCLE — pete → ebihal → béka ─────────────────────────────────

export const FrogLifeSvg = memo(function FrogLifeSvg({ lang = "de" }: { lang?: string }) {
  const labels: Record<string, Record<string, string>> = {
    en: { eggs: "Eggs", tadpole: "Tadpole", froglet: "Froglet", frog: "Adult frog" },
    de: { eggs: "Laich", tadpole: "Kaulquappe", froglet: "Jungfrosch", frog: "Erwachsener Frosch" },
    hu: { eggs: "Pete", tadpole: "Ebihal", froglet: "Kis béka", frog: "Kifejlett béka" },
    ro: { eggs: "Icre", tadpole: "Mormoloc", froglet: "Broscuță", frog: "Broască adultă" },
  };
  const l = labels[lang as keyof typeof labels] || labels.en;

  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <defs>
        <linearGradient id="frogBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#052e16" />
          <stop offset="100%" stopColor="#064e3b" />
        </linearGradient>
        <radialGradient id="frogWater" cx="50%" cy="100%">
          <stop offset="0%" stopColor="rgba(34,211,153,0.15)" />
          <stop offset="100%" stopColor="rgba(34,211,153,0)" />
        </radialGradient>
      </defs>

      <rect width="240" height="140" fill="url(#frogBg)" rx="12" />
      <rect width="240" height="140" fill="url(#frogWater)" rx="12" />

      {/* ── Stage 1: Eggs ── */}
      <g transform="translate(35, 55)">
        {/* Jelly cluster */}
        <ellipse cx="0" cy="0" rx="16" ry="14" fill="rgba(167,243,208,0.2)" stroke="rgba(52,211,153,0.3)" strokeWidth="0.6" />
        {[[-5,-4],[0,-6],[5,-3],[-3,2],[3,3],[0,6],[-6,5],[6,1]].map(([x,y], i) => (
          <g key={`egg${i}`}>
            <circle cx={x} cy={y} r="3" fill="rgba(209,250,229,0.5)" />
            <circle cx={x} cy={y} r="1.3" fill="#1e293b" />
          </g>
        ))}
        <text x="0" y="24" textAnchor="middle" fontSize="6.5" fontWeight="700" fill="#a7f3d0">{l.eggs}</text>
      </g>

      {/* Arrow 1→2 */}
      <path d="M 58 55 Q 72 45 82 55" fill="none" stroke="rgba(52,211,153,0.4)" strokeWidth="1.2" markerEnd="url(#arrG)" />

      {/* ── Stage 2: Tadpole ── */}
      <g transform="translate(105, 55)">
        <ellipse cx="0" cy="0" rx="8" ry="5" fill="#34d399" />
        <path d="M -8 0 Q -18 -5 -24 0 Q -18 5 -8 0" fill="#34d399" opacity="0.7" />
        <circle cx="3" cy="-1.5" r="1.2" fill="#064e3b" />
        <text x="0" y="16" textAnchor="middle" fontSize="6.5" fontWeight="700" fill="#a7f3d0">{l.tadpole}</text>
      </g>

      {/* Arrow 2→3 */}
      <path d="M 125 55 Q 140 45 150 55" fill="none" stroke="rgba(52,211,153,0.4)" strokeWidth="1.2" />

      {/* ── Stage 3: Froglet ── */}
      <g transform="translate(170, 52)">
        <ellipse cx="0" cy="0" rx="9" ry="6" fill="#10b981" />
        {/* tiny legs */}
        <line x1="-5" y1="5" x2="-9" y2="10" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="5" y1="5" x2="9" y2="10" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" />
        {/* small tail */}
        <path d="M -9 0 Q -14 -2 -16 0" fill="none" stroke="#10b981" strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="4" cy="-2" r="1.5" fill="#064e3b" />
        <text x="0" y="20" textAnchor="middle" fontSize="6.5" fontWeight="700" fill="#a7f3d0">{l.froglet}</text>
      </g>

      {/* Arrow 3→4 */}
      <path d="M 190 55 Q 200 45 210 55" fill="none" stroke="rgba(52,211,153,0.4)" strokeWidth="1.2" />

      {/* ── Stage 4: Adult frog ── */}
      <g transform="translate(228, 48)">
        {/* Body */}
        <ellipse cx="0" cy="4" rx="12" ry="9" fill="#059669" />
        {/* Head */}
        <ellipse cx="8" cy="-2" rx="7" ry="6" fill="#10b981" />
        {/* Eyes */}
        <circle cx="11" cy="-6" r="3" fill="#34d399" />
        <circle cx="11" cy="-6" r="1.5" fill="#064e3b" />
        {/* Back legs */}
        <path d="M -8 10 L -14 18 L -8 20" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 4 11 L 8 19 L 14 18" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <text x="-2" y="30" textAnchor="middle" fontSize="5.5" fontWeight="700" fill="#a7f3d0">{l.frog}</text>
      </g>

      {/* Circular arrow (lifecycle) */}
      <path d="M 228 85 Q 200 120 100 115 Q 30 110 30 80"
        fill="none" stroke="rgba(52,211,153,0.2)" strokeWidth="1" strokeDasharray="4 3" />
    </svg>
  );
});
