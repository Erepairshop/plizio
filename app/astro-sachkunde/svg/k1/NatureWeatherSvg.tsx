"use client";
// ─── NatureWeatherSvg — K1 Nature & Weather illustrations ───────────────────
// Exports:
//   WeatherTypesSvg      — Sun, Rain, Cloud, Snow
//   ThermometerSvg       — Hot (Sun) vs Cold (Snowflake)
//   SeasonsSvg           — Spring, Summer, Autumn, Winter
//   LightSourcesSvg      — Natural (Sun) vs Artificial (Lamp)
//   RainbowSvg           — Rainbow colors and clouds

import { memo } from "react";

// ─── SHARED DEFS ────────────────────────────────────────────────────────────
const LabelBg = () => (
  <filter id="labelBg" x="-10%" y="-10%" width="120%" height="120%">
    <feDropShadow dx="0" dy="1" stdDeviation="1" floodColor="#000" floodOpacity="0.1" />
  </filter>
);

const SharedDefs = () => (
  <defs>
    <LabelBg />
    {/* Sky & Grass playful background */}
    <linearGradient id="skyBg" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stopColor="#bae6fd" />
      <stop offset="100%" stopColor="#e0f2fe" />
    </linearGradient>
    <linearGradient id="grassBg" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stopColor="#86efac" />
      <stop offset="100%" stopColor="#4ade80" />
    </linearGradient>
  </defs>
);

const PlayfulBackground = () => (
  <>
    <rect width="240" height="140" fill="url(#skyBg)" rx="12" />
    <path d="M 0 90 Q 60 80 120 95 T 240 90 L 240 140 L 0 140 Z" fill="url(#grassBg)" />
  </>
);

// ════════════════════════════════════════════════════════════════════════════
// ─── WEATHER TYPES ──────────────────────────────────────────────────────────
// ════════════════════════════════════════════════════════════════════════════

const WEATHER_LABELS: Record<string, Record<string, string>> = {
  en: { title: "Weather", sunny: "Sunny", rainy: "Rainy", cloudy: "Cloudy", snowy: "Snowy" },
  de: { title: "Wetter", sunny: "Sonnig", rainy: "Regnerisch", cloudy: "Bewölkt", snowy: "Schnee" },
  hu: { title: "Időjárás", sunny: "Napos", rainy: "Esős", cloudy: "Felhős", snowy: "Havas" },
  ro: { title: "Vremea", sunny: "Însorit", rainy: "Ploios", cloudy: "Înnorat", snowy: "Ninge" },
};

export const WeatherTypesSvg = memo(function WeatherTypesSvg({ lang = "de" }: { lang?: string }) {
  const l = WEATHER_LABELS[lang as keyof typeof WEATHER_LABELS] || WEATHER_LABELS.en;
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <SharedDefs />
      <PlayfulBackground />
      
      <text x="40" y="65" textAnchor="middle" fontSize="32">☀️</text>
      <text x="95" y="65" textAnchor="middle" fontSize="32">🌧️</text>
      <text x="150" y="65" textAnchor="middle" fontSize="32">☁️</text>
      <text x="205" y="65" textAnchor="middle" fontSize="32">❄️</text>

      <rect x="15" y="85" width="50" height="12" rx="6" fill="#fff" filter="url(#labelBg)" />
      <text x="40" y="93" textAnchor="middle" fontSize="6" fontWeight="700" fill="#d97706">{l.sunny}</text>

      <rect x="70" y="85" width="50" height="12" rx="6" fill="#fff" filter="url(#labelBg)" />
      <text x="95" y="93" textAnchor="middle" fontSize="6" fontWeight="700" fill="#0284c7">{l.rainy}</text>

      <rect x="125" y="85" width="50" height="12" rx="6" fill="#fff" filter="url(#labelBg)" />
      <text x="150" y="93" textAnchor="middle" fontSize="6" fontWeight="700" fill="#475569">{l.cloudy}</text>

      <rect x="180" y="85" width="50" height="12" rx="6" fill="#fff" filter="url(#labelBg)" />
      <text x="205" y="93" textAnchor="middle" fontSize="6" fontWeight="700" fill="#0284c7">{l.snowy}</text>

      <text x="120" y="15" textAnchor="middle" fontSize="8" fontWeight="800" fill="#0369a1">{l.title}</text>
    </svg>
  );
});

// ─── THERMOMETER ────────────────────────────────────────────────────────────

const THERMO_LABELS: Record<string, Record<string, string>> = {
  en: { title: "Temperature", hot: "Hot", cold: "Cold" },
  de: { title: "Temperatur", hot: "Heiß", cold: "Kalt" },
  hu: { title: "Hőmérséklet", hot: "Meleg", cold: "Hideg" },
  ro: { title: "Temperatură", hot: "Cald", cold: "Rece" },
};

export const ThermometerSvg = memo(function ThermometerSvg({ lang = "de" }: { lang?: string }) {
  const l = THERMO_LABELS[lang as keyof typeof THERMO_LABELS] || THERMO_LABELS.en;
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <SharedDefs />
      <PlayfulBackground />
      
      {/* Sun (Hot) */}
      <text x="60" y="70" textAnchor="middle" fontSize="40">🥵</text>
      
      {/* Snowflake (Cold) */}
      <text x="180" y="70" textAnchor="middle" fontSize="40">🥶</text>

      {/* Thermometer Base */}
      <g transform="translate(120, 70)">
        <rect x="-6" y="-35" width="12" height="60" rx="6" fill="#fff" stroke="#94a3b8" strokeWidth="2" />
        <circle cx="0" cy="25" r="12" fill="#ef4444" />
        <rect x="-3" y="-10" width="6" height="35" fill="#ef4444" />
        
        {/* Scale lines */}
        {[ -25, -15, -5, 5, 15 ].map(y => (
          <line key={y} x1="-6" y1={y} x2="-2" y2={y} stroke="#94a3b8" strokeWidth="1.5" />
        ))}
      </g>

      <rect x="35" y="95" width="50" height="12" rx="6" fill="#fff" filter="url(#labelBg)" />
      <text x="60" y="103" textAnchor="middle" fontSize="6" fontWeight="700" fill="#ef4444">{l.hot}</text>

      <rect x="155" y="95" width="50" height="12" rx="6" fill="#fff" filter="url(#labelBg)" />
      <text x="180" y="103" textAnchor="middle" fontSize="6" fontWeight="700" fill="#0284c7">{l.cold}</text>

      <text x="120" y="15" textAnchor="middle" fontSize="8" fontWeight="800" fill="#0369a1">{l.title}</text>
    </svg>
  );
});

// ─── SEASONS ────────────────────────────────────────────────────────────────

const SEASONS_LABELS: Record<string, Record<string, string>> = {
  en: { title: "Seasons", spring: "Spring", summer: "Summer", autumn: "Autumn", winter: "Winter" },
  de: { title: "Jahreszeiten", spring: "Frühling", summer: "Sommer", autumn: "Herbst", winter: "Winter" },
  hu: { title: "Évszakok", spring: "Tavasz", summer: "Nyár", autumn: "Ősz", winter: "Tél" },
  ro: { title: "Anotimpuri", spring: "Primăvară", summer: "Vară", autumn: "Toamnă", winter: "Iarnă" },
};

export const SeasonsSvg = memo(function SeasonsSvg({ lang = "de" }: { lang?: string }) {
  const l = SEASONS_LABELS[lang as keyof typeof SEASONS_LABELS] || SEASONS_LABELS.en;
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <SharedDefs />
      <PlayfulBackground />
      
      <text x="40" y="65" textAnchor="middle" fontSize="32">🌱</text>
      <text x="95" y="65" textAnchor="middle" fontSize="32">🌻</text>
      <text x="150" y="65" textAnchor="middle" fontSize="32">🍂</text>
      <text x="205" y="65" textAnchor="middle" fontSize="32">⛄</text>

      <rect x="15" y="85" width="50" height="12" rx="6" fill="#fff" filter="url(#labelBg)" />
      <text x="40" y="93" textAnchor="middle" fontSize="6" fontWeight="700" fill="#16a34a">{l.spring}</text>

      <rect x="70" y="85" width="50" height="12" rx="6" fill="#fff" filter="url(#labelBg)" />
      <text x="95" y="93" textAnchor="middle" fontSize="6" fontWeight="700" fill="#d97706">{l.summer}</text>

      <rect x="125" y="85" width="50" height="12" rx="6" fill="#fff" filter="url(#labelBg)" />
      <text x="150" y="93" textAnchor="middle" fontSize="6" fontWeight="700" fill="#c2410c">{l.autumn}</text>

      <rect x="180" y="85" width="50" height="12" rx="6" fill="#fff" filter="url(#labelBg)" />
      <text x="205" y="93" textAnchor="middle" fontSize="6" fontWeight="700" fill="#0284c7">{l.winter}</text>

      <text x="120" y="15" textAnchor="middle" fontSize="8" fontWeight="800" fill="#0369a1">{l.title}</text>
    </svg>
  );
});

// ─── LIGHT SOURCES (Licht & Schall) ─────────────────────────────────────────

const LIGHT_SRC_LABELS: Record<string, Record<string, string>> = {
  en: { title: "Light Sources", natural: "Natural Light", artificial: "Artificial Light" },
  de: { title: "Lichtquellen", natural: "Natürliches Licht", artificial: "Künstliches Licht" },
  hu: { title: "Fényforrások", natural: "Természetes fény", artificial: "Mesterséges fény" },
  ro: { title: "Surse de lumină", natural: "Lumină naturală", artificial: "Lumină artificială" },
};

export const LightSourcesSvg = memo(function LightSourcesSvg({ lang = "de" }: { lang?: string }) {
  const l = LIGHT_SRC_LABELS[lang as keyof typeof LIGHT_SRC_LABELS] || LIGHT_SRC_LABELS.en;
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <SharedDefs />
      {/* Half Day, Half Night Background */}
      <rect x="0" y="0" width="120" height="140" fill="#bae6fd" />
      <rect x="120" y="0" width="120" height="140" fill="#1e293b" />
      <path d="M 0 90 Q 60 80 120 95 L 120 140 L 0 140 Z" fill="#86efac" />
      <path d="M 120 95 Q 180 110 240 90 L 240 140 L 120 140 Z" fill="#064e3b" />
      <line x1="120" y1="0" x2="120" y2="140" stroke="#fff" strokeWidth="2" strokeDasharray="4 4" opacity="0.5" />

      {/* Sun (Natural) */}
      <circle cx="60" cy="55" r="16" fill="#fde047" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map(a => (
        <line key={a} x1="60" y1="55" x2={60 + Math.cos(a*Math.PI/180)*24} y2={55 + Math.sin(a*Math.PI/180)*24} stroke="#fde047" strokeWidth="3" strokeLinecap="round" />
      ))}

      {/* Lamp (Artificial) */}
      <g transform="translate(180, 55)">
        <circle cx="0" cy="0" r="12" fill="#fef08a" />
        <path d="M -8 8 L 8 8 L 5 15 L -5 15 Z" fill="#94a3b8" />
        <path d="M -3 15 L 3 15 L 3 18 L -3 18 Z" fill="#475569" />
        {/* Glow lines */}
        <line x1="-15" y1="-15" x2="-22" y2="-22" stroke="#fef08a" strokeWidth="2" strokeLinecap="round" />
        <line x1="0" y1="-20" x2="0" y2="-30" stroke="#fef08a" strokeWidth="2" strokeLinecap="round" />
        <line x1="15" y1="-15" x2="22" y2="-22" stroke="#fef08a" strokeWidth="2" strokeLinecap="round" />
      </g>

      <rect x="20" y="105" width="80" height="14" rx="7" fill="#fff" filter="url(#labelBg)" />
      <text x="60" y="114.5" textAnchor="middle" fontSize="6.5" fontWeight="700" fill="#d97706">{l.natural}</text>

      <rect x="140" y="105" width="80" height="14" rx="7" fill="#fff" filter="url(#labelBg)" />
      <text x="180" y="114.5" textAnchor="middle" fontSize="6.5" fontWeight="700" fill="#1e293b">{l.artificial}</text>

      <rect x="85" y="8" width="70" height="14" rx="7" fill="#fff" filter="url(#labelBg)" />
      <text x="120" y="17.5" textAnchor="middle" fontSize="7" fontWeight="800" fill="#0369a1">{l.title}</text>
    </svg>
  );
});

// ─── RAINBOW ────────────────────────────────────────────────────────────────

const RAINBOW_LABELS: Record<string, Record<string, string>> = {
  en: { title: "Rainbow", colors: "Colors of light", clouds: "Rain & Sun = Rainbow" },
  de: { title: "Regenbogen", colors: "Farben des Lichts", clouds: "Regen & Sonne = Regenbogen" },
  hu: { title: "Szivárvány", colors: "A fény színei", clouds: "Eső & Nap = Szivárvány" },
  ro: { title: "Curcubeu", colors: "Culorile luminii", clouds: "Ploaie & Soare = Curcubeu" },
};

export const RainbowSvg = memo(function RainbowSvg({ lang = "de" }: { lang?: string }) {
  const l = RAINBOW_LABELS[lang as keyof typeof RAINBOW_LABELS] || RAINBOW_LABELS.en;
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <SharedDefs />
      <PlayfulBackground />
      
      {/* Rainbow Arcs */}
      <g fill="none" strokeWidth="6" strokeLinecap="round">
        <path d="M 40 110 A 80 80 0 0 1 200 110" stroke="#ef4444" /> {/* Red */}
        <path d="M 46 110 A 74 74 0 0 1 194 110" stroke="#f97316" /> {/* Orange */}
        <path d="M 52 110 A 68 68 0 0 1 188 110" stroke="#fde047" /> {/* Yellow */}
        <path d="M 58 110 A 62 62 0 0 1 182 110" stroke="#22c55e" /> {/* Green */}
        <path d="M 64 110 A 56 56 0 0 1 176 110" stroke="#3b82f6" /> {/* Blue */}
        <path d="M 70 110 A 50 50 0 0 1 170 110" stroke="#a855f7" /> {/* Purple */}
      </g>

      {/* Clouds */}
      <g fill="#fff" opacity="0.9">
        <circle cx="35" cy="110" r="10" />
        <circle cx="45" cy="105" r="12" />
        <circle cx="55" cy="110" r="10" />
        <circle cx="45" cy="115" r="8" />

        <circle cx="185" cy="110" r="10" />
        <circle cx="195" cy="105" r="12" />
        <circle cx="205" cy="110" r="10" />
        <circle cx="195" cy="115" r="8" />
      </g>

      <rect x="70" y="60" width="100" height="14" rx="7" fill="#fff" filter="url(#labelBg)" />
      <text x="120" y="70" textAnchor="middle" fontSize="6.5" fontWeight="700" fill="#ec4899">{l.colors}</text>

      <rect x="60" y="120" width="120" height="12" rx="6" fill="#fff" filter="url(#labelBg)" />
      <text x="120" y="128" textAnchor="middle" fontSize="6" fontWeight="700" fill="#0284c7">{l.clouds}</text>

      <text x="120" y="15" textAnchor="middle" fontSize="8" fontWeight="800" fill="#0369a1">{l.title}</text>
    </svg>
  );
});
