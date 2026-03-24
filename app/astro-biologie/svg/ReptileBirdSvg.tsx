"use client";
// ─── ReptileBirdSvg — Reptile & Bird illustrations ───────────────────────────
// Exports:
//   ReptileAnatomySvg  — reptile body (scales, cold-blooded)
//   BirdAnatomySvg     — bird body (feathers, wings, beak)
//   ReptileVsBirdSvg   — comparison chart (warm vs cold-blooded)

import { memo } from "react";

// ─── SHARED DEFS ────────────────────────────────────────────────────────────
const LabelGlow = () => (
  <filter id="lblGlow">
    <feGaussianBlur stdDeviation="1.2" result="b" />
    <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
  </filter>
);

// ─── REPTILE ANATOMY ──────────────────────────────────────────────────────────

const REPTILE_LABELS: Record<string, Record<string, string>> = {
  en: { title: "Reptile Anatomy", scales: "Scales", claws: "Claws", tail: "Tail", eye: "Eye", coldBlooded: "Cold-blooded", tongue: "Forked tongue" },
  de: { title: "Reptilien-Anatomie", scales: "Schuppen", claws: "Krallen", tail: "Schwanz", eye: "Auge", coldBlooded: "Kaltblütig", tongue: "Gespaltene Zunge" },
  hu: { title: "Hüllők anatómiája", scales: "Pikkelyek", claws: "Karmok", tail: "Farok", eye: "Szem", coldBlooded: "Hidegvérű", tongue: "Villás nyelv" },
  ro: { title: "Anatomia reptilelor", scales: "Solzi", claws: "Gheare", tail: "Coadă", eye: "Ochi", coldBlooded: "Cu sânge rece", tongue: "Limbă bifurcată" },
};

export const ReptileAnatomySvg = memo(function ReptileAnatomySvg({ lang = "de" }: { lang?: string }) {
  const l = REPTILE_LABELS[lang as keyof typeof REPTILE_LABELS] || REPTILE_LABELS.en;
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <defs>
        <linearGradient id="reptileBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#064e3b" />
          <stop offset="100%" stopColor="#022c22" />
        </linearGradient>
        <linearGradient id="lizardBody" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#84cc16" />
          <stop offset="100%" stopColor="#4d7c0f" />
        </linearGradient>
        <LabelGlow />
      </defs>
      <rect width="240" height="140" fill="url(#reptileBg)" rx="12" />
      
      {/* ── Lizard Graphic ── */}
      <g transform="translate(10, 10)">
        {/* Tail */}
        <path d="M 140 70 C 180 80, 210 90, 200 110 C 190 125, 160 115, 175 100 C 185 90, 195 95, 190 105" fill="none" stroke="url(#lizardBody)" strokeWidth="8" strokeLinecap="round" />
        
        {/* Back Leg */}
        <path d="M 135 70 L 150 90 L 160 90" fill="none" stroke="#4d7c0f" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        {/* Claws (Back) */}
        <path d="M 160 90 L 165 92 M 160 90 L 165 88 M 160 90 L 164 95" stroke="#fef08a" strokeWidth="1" strokeLinecap="round" />

        {/* Front Leg */}
        <path d="M 80 75 L 75 95 L 65 95" fill="none" stroke="#65a30d" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        {/* Claws (Front) */}
        <path d="M 65 95 L 60 93 M 65 95 L 60 97 M 65 95 L 62 90" stroke="#fef08a" strokeWidth="1" strokeLinecap="round" />

        {/* Body & Head */}
        <path d="M 50 65 C 70 50, 120 55, 150 70 C 120 85, 70 85, 50 65 Z" fill="url(#lizardBody)" />
        <path d="M 50 65 C 40 55, 25 60, 20 65 C 25 70, 40 75, 50 65 Z" fill="#84cc16" />

        {/* Eye */}
        <circle cx="35" cy="62" r="3" fill="#facc15" />
        <ellipse cx="35" cy="62" rx="1" ry="2.5" fill="#020617" />

        {/* Forked Tongue */}
        <path d="M 20 65 L 5 68 L 0 65 M 5 68 L 2 72" fill="none" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" />

        {/* Scales Texture (Small arcs) */}
        <g stroke="#3f6212" fill="none" strokeWidth="0.8" opacity="0.6">
          <path d="M 70 65 Q 73 68 76 65" /><path d="M 74 69 Q 77 72 80 69" />
          <path d="M 90 62 Q 93 65 96 62" /><path d="M 95 67 Q 98 70 101 67" />
          <path d="M 110 65 Q 113 68 116 65" /><path d="M 115 70 Q 118 73 121 70" />
          <path d="M 130 68 Q 133 71 136 68" />
        </g>
      </g>

      {/* Thermometer (Cold-blooded) */}
      <g transform="translate(195, 10)">
        <rect x="0" y="0" width="8" height="25" rx="4" fill="rgba(255,255,255,0.2)" stroke="#94a3b8" strokeWidth="1" />
        <circle cx="4" cy="21" r="5" fill="#3b82f6" />
        <rect x="3" y="10" width="2" height="10" fill="#3b82f6" />
        {/* Tick marks */}
        <line x1="5" y1="5" x2="8" y2="5" stroke="#94a3b8" strokeWidth="0.5" />
        <line x1="5" y1="10" x2="8" y2="10" stroke="#94a3b8" strokeWidth="0.5" />
        <line x1="5" y1="15" x2="8" y2="15" stroke="#94a3b8" strokeWidth="0.5" />
      </g>

      {/* ── Labels ── */}
      <line x1="20" y1="75" x2="30" y2="95" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="35" y="102" textAnchor="middle" fontSize="5.5" fontWeight="700" fill="#ef4444" filter="url(#lblGlow)">{l.tongue}</text>

      <line x1="45" y1="70" x2="50" y2="45" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="55" y="42" textAnchor="middle" fontSize="6" fontWeight="700" fill="#facc15" filter="url(#lblGlow)">{l.eye}</text>

      <line x1="100" y1="75" x2="100" y2="45" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="100" y="42" textAnchor="middle" fontSize="6" fontWeight="700" fill="#a3e635" filter="url(#lblGlow)">{l.scales}</text>

      <line x1="170" y1="100" x2="160" y2="120" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="150" y="127" textAnchor="middle" fontSize="6" fontWeight="700" fill="#fef08a" filter="url(#lblGlow)">{l.claws}</text>

      <line x1="200" y1="110" x2="220" y2="90" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="220" y="87" textAnchor="middle" fontSize="6" fontWeight="700" fill="#a3e635" filter="url(#lblGlow)">{l.tail}</text>

      <text x="199" y="45" textAnchor="middle" fontSize="5.5" fontWeight="700" fill="#93c5fd" filter="url(#lblGlow)">{l.coldBlooded}</text>
    </svg>
  );
});

// ─── BIRD ANATOMY ─────────────────────────────────────────────────────────────

const BIRD_LABELS: Record<string, Record<string, string>> = {
  en: { title: "Bird Anatomy", feathers: "Feathers", wings: "Wings", beak: "Beak", talons: "Talons", warmBlooded: "Warm-blooded", hollow: "Hollow bones" },
  de: { title: "Vogel-Anatomie", feathers: "Federn", wings: "Flügel", beak: "Schnabel", talons: "Krallen", warmBlooded: "Warmblütig", hollow: "Hohle Knochen" },
  hu: { title: "Madarak anatómiája", feathers: "Tollak", wings: "Szárnyak", beak: "Csőr", talons: "Karmok", warmBlooded: "Melegvérű", hollow: "Üreges csontok" },
  ro: { title: "Anatomia păsărilor", feathers: "Pene", wings: "Aripi", beak: "Cioc", talons: "Gheare", warmBlooded: "Cu sânge cald", hollow: "Oase goale" },
};

export const BirdAnatomySvg = memo(function BirdAnatomySvg({ lang = "de" }: { lang?: string }) {
  const l = BIRD_LABELS[lang as keyof typeof BIRD_LABELS] || BIRD_LABELS.en;
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <defs>
        <linearGradient id="birdBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#172554" />
          <stop offset="100%" stopColor="#1e3a8a" />
        </linearGradient>
        <linearGradient id="birdFeather" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e2e8f0" />
          <stop offset="100%" stopColor="#94a3b8" />
        </linearGradient>
        <LabelGlow />
      </defs>
      <rect width="240" height="140" fill="url(#birdBg)" rx="12" />
      
      {/* ── Bird Graphic ── */}
      <g transform="translate(30, 10)">
        {/* Tail feathers */}
        <path d="M 40 90 L 20 120 L 35 125 L 50 100 Z" fill="#64748b" stroke="#334155" strokeWidth="1" />
        
        {/* Legs & Talons */}
        <path d="M 60 95 L 60 115 L 55 120 M 60 115 L 65 120 M 60 115 L 62 122" fill="none" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 54 121 L 52 123 M 66 121 L 68 123 M 62 123 L 62 126" fill="none" stroke="#fef08a" strokeWidth="1" />

        {/* Body */}
        <ellipse cx="65" cy="70" rx="25" ry="30" fill="url(#birdFeather)" transform="rotate(-20 65 70)" />
        
        {/* Wing */}
        <path d="M 60 50 C 90 40, 120 70, 100 100 C 80 80, 70 85, 55 60 Z" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1.5" />
        {/* Wing Feathers Details */}
        <path d="M 80 60 Q 95 70 95 85 M 70 65 Q 85 75 80 95 M 65 70 Q 75 80 70 90" fill="none" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" />

        {/* Head & Neck */}
        <circle cx="85" cy="40" r="14" fill="#e2e8f0" />
        <path d="M 75 48 C 65 55, 80 70, 85 60 Z" fill="#e2e8f0" />
        
        {/* Beak */}
        <path d="M 97 35 L 115 40 L 97 45 Z" fill="#fbbf24" />
        <path d="M 97 40 L 110 40" stroke="#d97706" strokeWidth="0.8" />
        
        {/* Eye */}
        <circle cx="90" cy="38" r="2.5" fill="#1e293b" />
        <circle cx="91" cy="37.5" r="0.8" fill="#ffffff" />
      </g>

      {/* Hollow Bone Inset */}
      <g transform="translate(195, 85)">
        <circle cx="0" cy="0" r="18" fill="rgba(0,0,0,0.4)" stroke="#cbd5e1" strokeWidth="1.5" />
        <path d="M -10 -15 C -5 -5, -15 10, -5 15 C 5 15, -5 5, 5 -15 Z" fill="#f8fafc" />
        {/* Struts / Hollow network */}
        <g stroke="#94a3b8" strokeWidth="1" fill="none">
          <path d="M -5 -5 L 5 2 M -2 8 L 2 -2 M -8 5 L 0 5 M 4 10 L 0 2" />
        </g>
        <circle cx="0" cy="0" r="18" fill="none" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="4 2" />
      </g>

      {/* Thermometer (Warm-blooded) */}
      <g transform="translate(195, 10)">
        <rect x="0" y="0" width="8" height="25" rx="4" fill="rgba(255,255,255,0.2)" stroke="#94a3b8" strokeWidth="1" />
        <circle cx="4" cy="21" r="5" fill="#ef4444" />
        <rect x="3" y="6" width="2" height="14" fill="#ef4444" />
        {/* Tick marks */}
        <line x1="5" y1="5" x2="8" y2="5" stroke="#94a3b8" strokeWidth="0.5" />
        <line x1="5" y1="10" x2="8" y2="10" stroke="#94a3b8" strokeWidth="0.5" />
        <line x1="5" y1="15" x2="8" y2="15" stroke="#94a3b8" strokeWidth="0.5" />
      </g>

      {/* ── Labels ── */}
      <line x1="140" y1="50" x2="160" y2="35" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="170" y="32" textAnchor="middle" fontSize="6" fontWeight="700" fill="#fcd34d" filter="url(#lblGlow)">{l.beak}</text>

      <line x1="110" y1="65" x2="140" y2="65" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="155" y="67" textAnchor="middle" fontSize="6" fontWeight="700" fill="#cbd5e1" filter="url(#lblGlow)">{l.wings}</text>

      <line x1="75" y1="65" x2="55" y2="40" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="45" y="37" textAnchor="middle" fontSize="6" fontWeight="700" fill="#f1f5f9" filter="url(#lblGlow)">{l.feathers}</text>

      <line x1="85" y1="125" x2="110" y2="125" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="125" y="127" textAnchor="middle" fontSize="6" fontWeight="700" fill="#fef08a" filter="url(#lblGlow)">{l.talons}</text>

      <line x1="150" y1="80" x2="175" y2="85" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="195" y="112" textAnchor="middle" fontSize="5.5" fontWeight="700" fill="#e2e8f0" filter="url(#lblGlow)">{l.hollow}</text>

      <text x="199" y="45" textAnchor="middle" fontSize="5.5" fontWeight="700" fill="#fca5a5" filter="url(#lblGlow)">{l.warmBlooded}</text>
    </svg>
  );
});

// ─── REPTILE VS BIRD ──────────────────────────────────────────────────────────

const COMPARE_LABELS: Record<string, Record<string, string>> = {
  en: { title: "Reptiles vs Birds", reptile: "Reptiles", bird: "Birds", scales: "Scales", feathers: "Feathers", cold: "Cold-blooded", warm: "Warm-blooded", eggs: "Lay eggs", fly: "Flight (mostly)" },
  de: { title: "Reptilien vs Vögel", reptile: "Reptilien", bird: "Vögel", scales: "Schuppen", feathers: "Federn", cold: "Kaltblütig", warm: "Warmblütig", eggs: "Legen Eier", fly: "Können fliegen" },
  hu: { title: "Hüllők vs Madarak", reptile: "Hüllők", bird: "Madarak", scales: "Pikkelyek", feathers: "Tollak", cold: "Hidegvérű", warm: "Melegvérű", eggs: "Tojásrakó", fly: "Tud repülni" },
  ro: { title: "Reptile vs Păsări", reptile: "Reptile", bird: "Păsări", scales: "Solzi", feathers: "Pene", cold: "Cu sânge rece", warm: "Cu sânge cald", eggs: "Depun ouă", fly: "Zboară (majoritatea)" },
};

export const ReptileVsBirdSvg = memo(function ReptileVsBirdSvg({ lang = "de" }: { lang?: string }) {
  const l = COMPARE_LABELS[lang as keyof typeof COMPARE_LABELS] || COMPARE_LABELS.en;
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <defs>
        <linearGradient id="compBgReptile" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#064e3b" />
          <stop offset="100%" stopColor="#022c22" />
        </linearGradient>
        <linearGradient id="compBgBird" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1e3a8a" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
        <LabelGlow />
      </defs>
      
      {/* Split Background */}
      <path d="M 0 0 L 120 0 L 120 140 L 0 140 Z" fill="url(#compBgReptile)" />
      <path d="M 120 0 L 240 0 L 240 140 L 120 140 Z" fill="url(#compBgBird)" />
      <line x1="120" y1="0" x2="120" y2="140" stroke="#fcd34d" strokeWidth="1.5" strokeDasharray="4 2" opacity="0.8" />

      {/* ── Titles ── */}
      <rect x="25" y="10" width="70" height="16" rx="8" fill="rgba(0,0,0,0.4)" />
      <text x="60" y="21" textAnchor="middle" fontSize="8" fontWeight="700" fill="#86efac" filter="url(#lblGlow)">{l.reptile}</text>

      <rect x="145" y="10" width="70" height="16" rx="8" fill="rgba(0,0,0,0.4)" />
      <text x="180" y="21" textAnchor="middle" fontSize="8" fontWeight="700" fill="#93c5fd" filter="url(#lblGlow)">{l.bird}</text>

      <rect x="90" y="122" width="60" height="12" rx="6" fill="#f59e0b" />
      <text x="120" y="130" textAnchor="middle" fontSize="6" fontWeight="700" fill="#fff" filter="url(#lblGlow)">{l.title}</text>

      {/* ── Comparison Rows ── */}
      
      {/* Row 1: Skin Coverings */}
      <g transform="translate(0, 45)">
        {/* Reptile Scales */}
        <path d="M 50 0 Q 55 -5 60 0 Q 55 5 50 0" fill="none" stroke="#a3e635" strokeWidth="1.5" />
        <path d="M 55 5 Q 60 0 65 5 Q 60 10 55 5" fill="none" stroke="#a3e635" strokeWidth="1.5" />
        <path d="M 60 0 Q 65 -5 70 0 Q 65 5 60 0" fill="none" stroke="#a3e635" strokeWidth="1.5" />
        <text x="60" y="15" textAnchor="middle" fontSize="6" fill="#a3e635">{l.scales}</text>
        
        {/* Bird Feathers */}
        <path d="M 175 5 Q 180 -5 185 5 Q 180 15 175 5" fill="#cbd5e1" />
        <path d="M 175 5 L 185 5" stroke="#94a3b8" strokeWidth="0.5" />
        <path d="M 178 -2 L 180 2 M 178 12 L 180 8" stroke="#cbd5e1" strokeWidth="0.5" />
        <text x="180" y="15" textAnchor="middle" fontSize="6" fill="#cbd5e1">{l.feathers}</text>
      </g>

      {/* Row 2: Thermoregulation */}
      <g transform="translate(0, 75)">
        {/* Cold-blooded */}
        <rect x="58" y="-5" width="4" height="12" rx="2" fill="none" stroke="#93c5fd" strokeWidth="1" />
        <circle cx="60" cy="7" r="3" fill="#3b82f6" />
        <rect x="59.5" y="2" width="1" height="5" fill="#3b82f6" />
        <text x="60" y="16" textAnchor="middle" fontSize="6" fill="#93c5fd">{l.cold}</text>
        
        {/* Warm-blooded */}
        <rect x="178" y="-5" width="4" height="12" rx="2" fill="none" stroke="#fca5a5" strokeWidth="1" />
        <circle cx="180" cy="7" r="3" fill="#ef4444" />
        <rect x="179.5" y="-1" width="1" height="8" fill="#ef4444" />
        <text x="180" y="16" textAnchor="middle" fontSize="6" fill="#fca5a5">{l.warm}</text>
      </g>

      {/* Row 3: Shared/Unique traits */}
      <g transform="translate(0, 105)">
        {/* Lay Eggs (Shared, but drawn on left to balance) */}
        <ellipse cx="60" cy="2" rx="5" ry="6" fill="#fef3c7" stroke="#d97706" strokeWidth="1" />
        <ellipse cx="56" cy="4" rx="3" ry="4" fill="#fef3c7" stroke="#d97706" strokeWidth="1" />
        <ellipse cx="64" cy="4" rx="3" ry="4" fill="#fef3c7" stroke="#d97706" strokeWidth="1" />
        <text x="60" y="14" textAnchor="middle" fontSize="6" fill="#fcd34d">{l.eggs}</text>
        
        {/* Flight (Birds mostly) */}
        <path d="M 175 0 Q 180 -5 185 0 Q 180 5 175 0" fill="#f8fafc" />
        <path d="M 175 0 Q 180 -5 185 0" fill="none" stroke="#64748b" strokeWidth="1" />
        <text x="180" y="14" textAnchor="middle" fontSize="6" fill="#e2e8f0">{l.fly}</text>
      </g>
    </svg>
  );
});
