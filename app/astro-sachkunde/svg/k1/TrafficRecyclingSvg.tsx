"use client";
// ─── TrafficRecyclingSvg — K1 Traffic & Recycling illustrations ─────────────
// Exports Traffic (Közlekedés):
//   TrafficLightSvg      — Red, Yellow, Green lights
//   TrafficSignsSvg      — Stop sign, pedestrian crossing
//   VehiclesSvg          — Car, Bus, Bicycle
//   PedestrianRulesSvg   — Zebra crossing, looking both ways
//   BicycleSafetySvg     — Helmet, lights, safety
//
// Exports Recycling (Környezetvédelem):
//   MaterialsSvg         — Paper, glass, plastic
//   RecyclingBinsSvg     — Colored bins for sorting
//   WasteSeparationSvg   — Sorting trash (apple core, bottle)
//   ProtectNatureSvg     — Earth, tree, clean environment
//   WhyRecycleSvg        — Reduce, Reuse, Recycle loop

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
// ─── TRAFFIC (KÖZLEKEDÉS) ───────────────────────────────────────────────────
// ════════════════════════════════════════════════════════════════════════════

// ─── TRAFFIC LIGHT ───
const LIGHT_LABELS: Record<string, Record<string, string>> = {
  en: { title: "Traffic Light", red: "Stop!", yellow: "Wait", green: "Go!" },
  de: { title: "Ampel", red: "Halt!", yellow: "Warten", green: "Gehen!" },
  hu: { title: "Jelzőlámpa", red: "Állj meg!", yellow: "Várj!", green: "Mehetsz!" },
  ro: { title: "Semafor", red: "Stai!", yellow: "Așteaptă", green: "Mergi!" },
};

export const TrafficLightSvg = memo(function TrafficLightSvg({ lang = "de" }: { lang?: string }) {
  const l = LIGHT_LABELS[lang as keyof typeof LIGHT_LABELS] || LIGHT_LABELS.en;
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <SharedDefs />
      <PlayfulBackground />
      
      {/* Pole */}
      <rect x="116" y="30" width="8" height="110" fill="#64748b" />
      
      {/* Light Housing */}
      <rect x="100" y="15" width="40" height="85" rx="8" fill="#1e293b" />
      
      {/* Lights */}
      <circle cx="120" cy="32" r="10" fill="#ef4444" stroke="#fca5a5" strokeWidth="2" />
      <circle cx="120" cy="57" r="10" fill="#eab308" stroke="#fef08a" strokeWidth="2" />
      <circle cx="120" cy="82" r="10" fill="#22c55e" stroke="#86efac" strokeWidth="2" />

      {/* Labels */}
      <rect x="40" y="27" width="50" height="12" rx="6" fill="#fff" filter="url(#labelBg)" />
      <text x="65" y="35" textAnchor="middle" fontSize="6" fontWeight="700" fill="#ef4444">{l.red}</text>

      <rect x="150" y="52" width="50" height="12" rx="6" fill="#fff" filter="url(#labelBg)" />
      <text x="175" y="60" textAnchor="middle" fontSize="6" fontWeight="700" fill="#d97706">{l.yellow}</text>

      <rect x="40" y="77" width="50" height="12" rx="6" fill="#fff" filter="url(#labelBg)" />
      <text x="65" y="85" textAnchor="middle" fontSize="6" fontWeight="700" fill="#16a34a">{l.green}</text>

      <text x="120" y="10" textAnchor="middle" fontSize="8" fontWeight="800" fill="#0369a1">{l.title}</text>
    </svg>
  );
});

// ─── TRAFFIC SIGNS ───
const SIGNS_LABELS: Record<string, Record<string, string>> = {
  en: { title: "Traffic Signs", stop: "Stop Sign", cross: "Crosswalk", yield: "Yield" },
  de: { title: "Verkehrsschilder", stop: "Stoppschild", cross: "Zebrastreifen", yield: "Vorfahrt gewähren" },
  hu: { title: "Jelzőtáblák", stop: "Stoptábla", cross: "Gyalogátkelő", yield: "Elsőbbségadás" },
  ro: { title: "Semne de circulație", stop: "Semn Stop", cross: "Trecere de pietoni", yield: "Cedează trecerea" },
};

export const TrafficSignsSvg = memo(function TrafficSignsSvg({ lang = "de" }: { lang?: string }) {
  const l = SIGNS_LABELS[lang as keyof typeof SIGNS_LABELS] || SIGNS_LABELS.en;
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <SharedDefs />
      <PlayfulBackground />
      
      {/* 1. Stop Sign */}
      <g transform="translate(50, 60)">
        <rect x="-2" y="20" width="4" height="40" fill="#64748b" />
        <polygon points="-15,-20 15,-20 25,-8 25,8 15,20 -15,20 -25,8 -25,-8" fill="#ef4444" stroke="#fff" strokeWidth="2" />
        <text x="0" y="3" textAnchor="middle" fontSize="8" fontWeight="800" fill="#fff">STOP</text>
        <rect x="-25" y="65" width="50" height="12" rx="6" fill="#fff" filter="url(#labelBg)" />
        <text x="0" y="73" textAnchor="middle" fontSize="6" fontWeight="700" fill="#ef4444">{l.stop}</text>
      </g>

      {/* 2. Pedestrian Crossing */}
      <g transform="translate(120, 60)">
        <rect x="-2" y="20" width="4" height="40" fill="#64748b" />
        <rect x="-18" y="-18" width="36" height="36" rx="4" fill="#3b82f6" stroke="#fff" strokeWidth="2" />
        <polygon points="0,-10 10,10 -10,10" fill="#fff" />
        <circle cx="0" cy="-3" r="3" fill="#3b82f6" />
        <rect x="-25" y="65" width="50" height="12" rx="6" fill="#fff" filter="url(#labelBg)" />
        <text x="0" y="73" textAnchor="middle" fontSize="6" fontWeight="700" fill="#3b82f6">{l.cross}</text>
      </g>

      {/* 3. Yield Sign */}
      <g transform="translate(190, 60)">
        <rect x="-2" y="20" width="4" height="40" fill="#64748b" />
        <polygon points="-20,-20 20,-20 0,15" fill="#fff" stroke="#ef4444" strokeWidth="4" strokeLinejoin="round" />
        <rect x="-25" y="65" width="50" height="12" rx="6" fill="#fff" filter="url(#labelBg)" />
        <text x="0" y="73" textAnchor="middle" fontSize="6" fontWeight="700" fill="#ea580c">{l.yield}</text>
      </g>

      <text x="120" y="15" textAnchor="middle" fontSize="8" fontWeight="800" fill="#0369a1">{l.title}</text>
    </svg>
  );
});

// ─── VEHICLES ───
const VEHICLE_LABELS: Record<string, Record<string, string>> = {
  en: { title: "Vehicles", car: "Car", bus: "Bus", bike: "Bicycle" },
  de: { title: "Fahrzeuge", car: "Auto", bus: "Bus", bike: "Fahrrad" },
  hu: { title: "Járművek", car: "Autó", bus: "Busz", bike: "Kerékpár" },
  ro: { title: "Vehicule", car: "Mașină", bus: "Autobuz", bike: "Bicicletă" },
};

export const VehiclesSvg = memo(function VehiclesSvg({ lang = "de" }: { lang?: string }) {
  const l = VEHICLE_LABELS[lang as keyof typeof VEHICLE_LABELS] || VEHICLE_LABELS.en;
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <SharedDefs />
      <PlayfulBackground />
      {/* Road */}
      <rect x="0" y="100" width="240" height="30" fill="#475569" />
      <path d="M 0 115 L 240 115" stroke="#fff" strokeWidth="2" strokeDasharray="10 10" />

      {/* Car */}
      <g transform="translate(40, 95)">
        <path d="M -20 -10 L -10 -25 L 10 -25 L 25 -10 L 30 0 L -25 0 Z" fill="#ef4444" />
        <path d="M -8 -22 L 0 -22 L 0 -12 L -15 -12 Z" fill="#bae6fd" />
        <path d="M 4 -22 L 10 -12 L 4 -12 Z" fill="#bae6fd" />
        <circle cx="-15" cy="0" r="6" fill="#1e293b" stroke="#fff" strokeWidth="2" />
        <circle cx="15" cy="0" r="6" fill="#1e293b" stroke="#fff" strokeWidth="2" />
        <rect x="-15" y="-35" width="30" height="10" rx="5" fill="#fff" filter="url(#labelBg)" />
        <text x="0" y="-28" textAnchor="middle" fontSize="6" fontWeight="700" fill="#ef4444">{l.car}</text>
      </g>

      {/* Bus */}
      <g transform="translate(160, 95)">
        <rect x="-30" y="-30" width="60" height="30" rx="4" fill="#eab308" />
        <rect x="-25" y="-25" width="10" height="10" fill="#bae6fd" />
        <rect x="-10" y="-25" width="10" height="10" fill="#bae6fd" />
        <rect x="5" y="-25" width="10" height="10" fill="#bae6fd" />
        <rect x="20" y="-25" width="8" height="10" fill="#bae6fd" />
        <circle cx="-15" cy="0" r="7" fill="#1e293b" stroke="#fff" strokeWidth="2" />
        <circle cx="15" cy="0" r="7" fill="#1e293b" stroke="#fff" strokeWidth="2" />
        <rect x="-15" y="-45" width="30" height="10" rx="5" fill="#fff" filter="url(#labelBg)" />
        <text x="0" y="-38" textAnchor="middle" fontSize="6" fontWeight="700" fill="#ca8a04">{l.bus}</text>
      </g>

      <text x="120" y="15" textAnchor="middle" fontSize="8" fontWeight="800" fill="#0369a1">{l.title}</text>
    </svg>
  );
});

// ─── PEDESTRIAN RULES ───
const PEDESTRIAN_LABELS: Record<string, Record<string, string>> = {
  en: { title: "Crossing the Street", look: "Look both ways!", zebra: "Zebra crossing", wait: "Wait for green" },
  de: { title: "Straße überqueren", look: "Nach beiden Seiten schauen!", zebra: "Zebrastreifen", wait: "Auf Grün warten" },
  hu: { title: "Átkelés az úton", look: "Nézz körül!", zebra: "Zebra", wait: "Várd meg a zöldet!" },
  ro: { title: "Traversarea străzii", look: "Asigură-te!", zebra: "Trecere de pietoni", wait: "Așteaptă verde" },
};

export const PedestrianRulesSvg = memo(function PedestrianRulesSvg({ lang = "de" }: { lang?: string }) {
  const l = PEDESTRIAN_LABELS[lang as keyof typeof PEDESTRIAN_LABELS] || PEDESTRIAN_LABELS.en;
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <SharedDefs />
      <PlayfulBackground />
      {/* Road */}
      <rect x="40" y="60" width="80" height="80" fill="#475569" transform="skewX(-20)" />
      {/* Zebra stripes */}
      {[70, 85, 100, 115].map((y) => (
        <rect key={y} x="45" y={y} width="50" height="8" fill="#fff" transform="skewX(-20)" />
      ))}

      {/* Kid waiting */}
      <g transform="translate(150, 90)">
        <circle cx="0" cy="-25" r="8" fill="#fcd34d" /> {/* Head */}
        <rect x="-6" y="-15" width="12" height="15" rx="3" fill="#3b82f6" /> {/* Body */}
        <line x1="-3" y1="0" x2="-5" y2="15" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" /> {/* Legs */}
        <line x1="3" y1="0" x2="5" y2="15" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" />
        {/* Looking arrows */}
        <path d="M -15 -30 L -25 -30 L -20 -35 M -25 -30 L -20 -25" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
        <path d="M 15 -30 L 25 -30 L 20 -35 M 25 -30 L 20 -25" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
      </g>

      {/* Labels */}
      <rect x="110" y="30" width="80" height="12" rx="6" fill="#fff" filter="url(#labelBg)" />
      <text x="150" y="38" textAnchor="middle" fontSize="6" fontWeight="700" fill="#ef4444">{l.look}</text>

      <rect x="10" y="110" width="60" height="12" rx="6" fill="#fff" filter="url(#labelBg)" />
      <text x="40" y="118" textAnchor="middle" fontSize="5.5" fontWeight="700" fill="#475569">{l.zebra}</text>

      <text x="120" y="15" textAnchor="middle" fontSize="8" fontWeight="800" fill="#0369a1">{l.title}</text>
    </svg>
  );
});

// ─── BICYCLE SAFETY ───
const BIKE_LABELS: Record<string, Record<string, string>> = {
  en: { title: "Bicycle Safety", helmet: "Helmet", bell: "Bell", lights: "Lights & Reflectors" },
  de: { title: "Fahrradsicherheit", helmet: "Helm", bell: "Klingel", lights: "Licht & Reflektoren" },
  hu: { title: "Kerékpáros biztonság", helmet: "Sisak", bell: "Csengő", lights: "Lámpák és prizmák" },
  ro: { title: "Siguranța pe bicicletă", helmet: "Cască", bell: "Claxon", lights: "Lumini și reflectoare" },
};

export const BicycleSafetySvg = memo(function BicycleSafetySvg({ lang = "de" }: { lang?: string }) {
  const l = BIKE_LABELS[lang as keyof typeof BIKE_LABELS] || BIKE_LABELS.en;
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <SharedDefs />
      <PlayfulBackground />
      
      <g transform="translate(120, 80)">
        {/* Bike Frame */}
        <path d="M -30 0 L -10 -25 L 20 -25 L 30 0" fill="none" stroke="#ef4444" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M -10 -25 L 0 0 L 20 -25" fill="none" stroke="#ef4444" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        
        {/* Wheels */}
        <circle cx="-30" cy="0" r="15" fill="none" stroke="#1e293b" strokeWidth="4" />
        <circle cx="30" cy="0" r="15" fill="none" stroke="#1e293b" strokeWidth="4" />
        
        {/* Handlebars & Seat */}
        <path d="M 20 -25 L 25 -35 L 30 -35" fill="none" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" />
        <rect x="-15" y="-30" width="10" height="5" rx="2" fill="#1e293b" />
        
        {/* Safety Features Highlighted */}
        {/* Lights */}
        <circle cx="32" cy="-35" r="3" fill="#fef08a" stroke="#eab308" strokeWidth="1" /> {/* Front light */}
        <circle cx="-12" cy="-28" r="3" fill="#fca5a5" stroke="#ef4444" strokeWidth="1" /> {/* Back reflector */}
        
        {/* Helmet floating above */}
        <path d="M -8 -60 C -8 -75, 18 -75, 18 -60 Z" fill="#3b82f6" />
        <path d="M -8 -60 L 18 -60 L 22 -55 L -10 -55 Z" fill="#2563eb" />
      </g>

      {/* Labels */}
      <rect x="95" y="15" width="50" height="12" rx="6" fill="#fff" filter="url(#labelBg)" />
      <text x="120" y="23" textAnchor="middle" fontSize="6" fontWeight="700" fill="#2563eb">{l.helmet}</text>

      <rect x="150" y="50" width="70" height="12" rx="6" fill="#fff" filter="url(#labelBg)" />
      <text x="185" y="58" textAnchor="middle" fontSize="6" fontWeight="700" fill="#ca8a04">{l.lights}</text>

      <text x="120" y="10" textAnchor="middle" fontSize="8" fontWeight="800" fill="#0369a1">{l.title}</text>
    </svg>
  );
});


// ════════════════════════════════════════════════════════════════════════════
// ─── RECYCLING (KÖRNYEZETVÉDELEM) ───────────────────────────────────────────
// ════════════════════════════════════════════════════════════════════════════

// ─── RECYCLING BINS ───
const BINS_LABELS: Record<string, Record<string, string>> = {
  en: { title: "Recycling Bins", paper: "Paper (Blue)", glass: "Glass (Green)", plastic: "Plastic (Yellow)" },
  de: { title: "Mülltonnen", paper: "Papier (Blau)", glass: "Glas (Grün)", plastic: "Plastik (Gelb)" },
  hu: { title: "Szelektív kukák", paper: "Papír (Kék)", glass: "Üveg (Zöld)", plastic: "Műanyag (Sárga)" },
  ro: { title: "Coșuri de reciclare", paper: "Hârtie (Albastru)", glass: "Sticlă (Verde)", plastic: "Plastic (Galben)" },
};

export const RecyclingBinsSvg = memo(function RecyclingBinsSvg({ lang = "de" }: { lang?: string }) {
  const l = BINS_LABELS[lang as keyof typeof BINS_LABELS] || BINS_LABELS.en;
  
  const Bin = ({ x, color, icon }: { x: number, color: string, icon: string }) => (
    <g transform={`translate(${x}, 70)`}>
      <path d="M -15 0 L 15 0 L 12 40 L -12 40 Z" fill={color} opacity="0.9" />
      <rect x="-18" y="-5" width="36" height="5" rx="2" fill={color} />
      <text x="0" y="25" textAnchor="middle" fontSize="16">{icon}</text>
      {/* Recycle arrows simple */}
      <path d="M -6 10 L 6 10 L 0 16 Z" fill="#fff" opacity="0.5" />
    </g>
  );

  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <SharedDefs />
      <PlayfulBackground />
      
      <Bin x="50" color="#3b82f6" icon="📰" />
      <Bin x="120" color="#22c55e" icon="🍾" />
      <Bin x="190" color="#eab308" icon="🥤" />

      {/* Labels */}
      <rect x="20" y="115" width="60" height="12" rx="6" fill="#fff" filter="url(#labelBg)" />
      <text x="50" y="123" textAnchor="middle" fontSize="5.5" fontWeight="700" fill="#2563eb">{l.paper}</text>

      <rect x="90" y="115" width="60" height="12" rx="6" fill="#fff" filter="url(#labelBg)" />
      <text x="120" y="123" textAnchor="middle" fontSize="5.5" fontWeight="700" fill="#16a34a">{l.glass}</text>

      <rect x="160" y="115" width="60" height="12" rx="6" fill="#fff" filter="url(#labelBg)" />
      <text x="190" y="123" textAnchor="middle" fontSize="5.5" fontWeight="700" fill="#ca8a04">{l.plastic}</text>

      <text x="120" y="15" textAnchor="middle" fontSize="8" fontWeight="800" fill="#0369a1">{l.title}</text>
    </svg>
  );
});

// ─── MATERIALS ───
const MATERIALS_LABELS: Record<string, Record<string, string>> = {
  en: { title: "Materials", paper: "Paper", glass: "Glass", plastic: "Plastic", metal: "Metal" },
  de: { title: "Materialien", paper: "Papier", glass: "Glas", plastic: "Plastik", metal: "Metall" },
  hu: { title: "Anyagok", paper: "Papír", glass: "Üveg", plastic: "Műanyag", metal: "Fém" },
  ro: { title: "Materiale", paper: "Hârtie", glass: "Sticlă", plastic: "Plastic", metal: "Metal" },
};

export const MaterialsSvg = memo(function MaterialsSvg({ lang = "de" }: { lang?: string }) {
  const l = MATERIALS_LABELS[lang as keyof typeof MATERIALS_LABELS] || MATERIALS_LABELS.en;
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <SharedDefs />
      <PlayfulBackground />
      
      <text x="40" y="65" textAnchor="middle" fontSize="32">📦</text>
      <text x="95" y="65" textAnchor="middle" fontSize="32">🥫</text>
      <text x="150" y="65" textAnchor="middle" fontSize="32">🧴</text>
      <text x="205" y="65" textAnchor="middle" fontSize="32">🍯</text>

      <rect x="15" y="85" width="50" height="12" rx="6" fill="#fff" filter="url(#labelBg)" />
      <text x="40" y="93" textAnchor="middle" fontSize="6" fontWeight="700" fill="#3b82f6">{l.paper}</text>

      <rect x="70" y="85" width="50" height="12" rx="6" fill="#fff" filter="url(#labelBg)" />
      <text x="95" y="93" textAnchor="middle" fontSize="6" fontWeight="700" fill="#ef4444">{l.metal}</text>

      <rect x="125" y="85" width="50" height="12" rx="6" fill="#fff" filter="url(#labelBg)" />
      <text x="150" y="93" textAnchor="middle" fontSize="6" fontWeight="700" fill="#eab308">{l.plastic}</text>

      <rect x="180" y="85" width="50" height="12" rx="6" fill="#fff" filter="url(#labelBg)" />
      <text x="205" y="93" textAnchor="middle" fontSize="6" fontWeight="700" fill="#22c55e">{l.glass}</text>

      <text x="120" y="15" textAnchor="middle" fontSize="8" fontWeight="800" fill="#0369a1">{l.title}</text>
    </svg>
  );
});

// ─── WASTE SEPARATION ───
const SORTING_LABELS: Record<string, Record<string, string>> = {
  en: { title: "Waste Separation", sort: "Sort your waste!", organic: "Compost / Organic" },
  de: { title: "Mülltrennung", sort: "Trenne deinen Müll!", organic: "Kompost / Bio" },
  hu: { title: "Szelektív gyűjtés", sort: "Válogasd szét a szemetet!", organic: "Komposzt / Bio" },
  ro: { title: "Separarea deșeurilor", sort: "Sortează deșeurile!", organic: "Compost / Bio" },
};

export const WasteSeparationSvg = memo(function WasteSeparationSvg({ lang = "de" }: { lang?: string }) {
  const l = SORTING_LABELS[lang as keyof typeof SORTING_LABELS] || SORTING_LABELS.en;
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <SharedDefs />
      <PlayfulBackground />
      
      {/* Bin */}
      <path d="M 105 80 L 135 80 L 130 120 L 110 120 Z" fill="#8b5cf6" opacity="0.9" />
      <rect x="100" y="75" width="40" height="5" rx="2" fill="#8b5cf6" />
      
      {/* Items falling */}
      <text x="60" y="50" fontSize="20">🍎</text>
      <text x="120" y="30" fontSize="20" textAnchor="middle">🗞️</text>
      <text x="180" y="60" fontSize="20">🥤</text>

      {/* Arrows */}
      <path d="M 80 50 Q 120 60 120 70" fill="none" stroke="#fff" strokeWidth="2" strokeDasharray="4 2" markerEnd="url(#arrowSort)" />
      <path d="M 120 35 L 120 65" fill="none" stroke="#fff" strokeWidth="2" strokeDasharray="4 2" />
      <path d="M 180 60 Q 150 70 130 75" fill="none" stroke="#fff" strokeWidth="2" strokeDasharray="4 2" />

      {/* Labels */}
      <rect x="50" y="10" width="140" height="14" rx="7" fill="#fff" filter="url(#labelBg)" />
      <text x="120" y="20" textAnchor="middle" fontSize="7" fontWeight="700" fill="#a855f7">{l.sort}</text>

      <rect x="30" y="65" width="60" height="12" rx="6" fill="#fff" filter="url(#labelBg)" />
      <text x="60" y="73" textAnchor="middle" fontSize="5" fontWeight="700" fill="#16a34a">{l.organic}</text>

      <text x="120" y="135" textAnchor="middle" fontSize="8" fontWeight="800" fill="#0369a1">{l.title}</text>
    </svg>
  );
});

// ─── PROTECT NATURE ───
const NATURE_LABELS: Record<string, Record<string, string>> = {
  en: { title: "Protect Nature", clean: "Clean Environment", happy: "Happy Earth" },
  de: { title: "Natur schützen", clean: "Saubere Umwelt", happy: "Glückliche Erde" },
  hu: { title: "Védd a természetet", clean: "Tiszta környezet", happy: "Boldog Föld" },
  ro: { title: "Protejează natura", clean: "Mediu curat", happy: "Pământ fericit" },
};

export const ProtectNatureSvg = memo(function ProtectNatureSvg({ lang = "de" }: { lang?: string }) {
  const l = NATURE_LABELS[lang as keyof typeof NATURE_LABELS] || NATURE_LABELS.en;
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <SharedDefs />
      <PlayfulBackground />
      
      {/* Earth */}
      <circle cx="120" cy="80" r="35" fill="#3b82f6" />
      <path d="M 95 70 C 105 60, 115 80, 110 95 C 100 90, 90 80, 95 70 Z" fill="#22c55e" />
      <path d="M 130 60 C 145 50, 150 70, 140 85 C 130 80, 120 70, 130 60 Z" fill="#22c55e" />
      
      {/* Happy Face on Earth */}
      <circle cx="110" cy="75" r="3" fill="#fff" />
      <circle cx="130" cy="75" r="3" fill="#fff" />
      <path d="M 115 85 Q 120 90 125 85" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" />

      {/* Trees & Flowers around */}
      <text x="60" y="115" fontSize="24">🌲</text>
      <text x="160" y="115" fontSize="24">🌳</text>
      <text x="40" y="125" fontSize="16">🌷</text>
      <text x="190" y="125" fontSize="16">🌻</text>

      {/* Labels */}
      <rect x="70" y="15" width="100" height="14" rx="7" fill="#fff" filter="url(#labelBg)" />
      <text x="120" y="25" textAnchor="middle" fontSize="7" fontWeight="700" fill="#0ea5e9">{l.happy}</text>

      <rect x="80" y="120" width="80" height="12" rx="6" fill="#fff" filter="url(#labelBg)" />
      <text x="120" y="128" textAnchor="middle" fontSize="6" fontWeight="700" fill="#16a34a">{l.clean}</text>
    </svg>
  );
});

// ─── WHY RECYCLE ───
const WHY_LABELS: Record<string, Record<string, string>> = {
  en: { title: "Why Recycle?", reduce: "Reduce", reuse: "Reuse", recycle: "Recycle" },
  de: { title: "Warum recyceln?", reduce: "Vermeiden", reuse: "Wiederverwenden", recycle: "Recyceln" },
  hu: { title: "Miért hasznosítsunk újra?", reduce: "Csökkentsd", reuse: "Használd újra", recycle: "Hasznosítsd újra" },
  ro: { title: "De ce să reciclăm?", reduce: "Redu", reuse: "Reutilizează", recycle: "Reciclează" },
};

export const WhyRecycleSvg = memo(function WhyRecycleSvg({ lang = "de" }: { lang?: string }) {
  const l = WHY_LABELS[lang as keyof typeof WHY_LABELS] || WHY_LABELS.en;
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <SharedDefs />
      <PlayfulBackground />
      
      {/* Mobius Loop (Recycling Symbol) simplified */}
      <g transform="translate(120, 75)" fill="none" stroke="#16a34a" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round">
        {/* Top arrow */}
        <path d="M -20 -15 L 20 -15 L 0 15 Z" strokeDasharray="30 15" opacity="0.3" />
        <path d="M -15 -20 Q 0 -35 15 -20" markerEnd="url(#arrowGreen)" />
        <path d="M 20 -10 Q 25 10 10 20" markerEnd="url(#arrowGreen)" />
        <path d="M -10 20 Q -25 10 -20 -10" markerEnd="url(#arrowGreen)" />
      </g>
      
      <defs>
        <marker id="arrowGreen" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4" markerHeight="4" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#16a34a" />
        </marker>
      </defs>

      {/* Decorative elements */}
      <text x="110" y="82" fontSize="24">♻️</text>

      {/* Labels */}
      <rect x="20" y="30" width="60" height="12" rx="6" fill="#fff" filter="url(#labelBg)" />
      <text x="50" y="38" textAnchor="middle" fontSize="6" fontWeight="700" fill="#16a34a">{l.reduce}</text>

      <rect x="160" y="30" width="60" height="12" rx="6" fill="#fff" filter="url(#labelBg)" />
      <text x="190" y="38" textAnchor="middle" fontSize="6" fontWeight="700" fill="#16a34a">{l.reuse}</text>

      <rect x="90" y="115" width="60" height="12" rx="6" fill="#fff" filter="url(#labelBg)" />
      <text x="120" y="123" textAnchor="middle" fontSize="6" fontWeight="700" fill="#16a34a">{l.recycle}</text>

      <text x="120" y="15" textAnchor="middle" fontSize="8" fontWeight="800" fill="#0369a1">{l.title}</text>
    </svg>
  );
});
