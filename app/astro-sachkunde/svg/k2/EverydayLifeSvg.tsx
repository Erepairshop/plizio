"use client";
// ─── EverydayLifeSvg — K1/K2 Family, Home, Jobs & Safety ────────────────────
// Exports:
//   FamilyTreeSvg      — Grandparents, Parents, Kids on a tree
//   HouseRoomsSvg      — Cross-section of a house (Kitchen, Bath, Bedroom, Living)
//   ProfessionsSvg     — Doctor, Teacher, Builder
//   EmergencySvg       — 112, Police, Fire, Ambulance
//   HomeSafetySvg      — Safe (Toys) vs Danger (Hot stove, Outlet)

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
// ─── FAMILY TREE ────────────────────────────────────────────────────────────
// ════════════════════════════════════════════════════════════════════════════

const FAMILY_LABELS: Record<string, Record<string, string>> = {
  en: { title: "Family Tree", grandparents: "Grandparents", parents: "Parents", kids: "Children" },
  de: { title: "Stammbaum", grandparents: "Großeltern", parents: "Eltern", kids: "Kinder" },
  hu: { title: "Családfa", grandparents: "Nagyszülők", parents: "Szülők", kids: "Gyerekek" },
  ro: { title: "Arbore genealogic", grandparents: "Bunici", parents: "Părinți", kids: "Copii" },
};

export const FamilyTreeSvg = memo(function FamilyTreeSvg({ lang = "de" }: { lang?: string }) {
  const l = FAMILY_LABELS[lang as keyof typeof FAMILY_LABELS] || FAMILY_LABELS.en;
  
  const Node = ({ x, y, icon }: { x: number, y: number, icon: string }) => (
    <g transform={`translate(${x}, ${y})`}>
      <circle cx="0" cy="0" r="10" fill="#fff" stroke="#16a34a" strokeWidth="2" />
      <text x="0" y="3" textAnchor="middle" fontSize="10">{icon}</text>
    </g>
  );

  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <SharedDefs />
      <PlayfulBackground />
      
      {/* Tree */}
      <path d="M 110 140 L 115 80 L 125 80 L 130 140 Z" fill="#92400e" />
      <path d="M 120 20 C 170 10, 200 40, 180 80 C 160 110, 80 110, 60 80 C 40 40, 70 10, 120 20 Z" fill="#22c55e" opacity="0.9" />

      {/* Lines */}
      <path d="M 100 40 L 120 60 L 140 40 M 120 60 L 120 90 L 100 110 M 120 90 L 140 110" fill="none" stroke="#fff" strokeWidth="2" />

      {/* Family Nodes */}
      <Node x={100} y={40} icon="👵" />
      <Node x={140} y={40} icon="👴" />
      <Node x={120} y={65} icon="👩‍❤️‍👨" />
      <Node x={100} y={110} icon="👧" />
      <Node x={140} y={110} icon="👦" />

      {/* Labels */}
      <rect x="15" y="34" width="60" height="12" rx="6" fill="#fff" filter="url(#labelBg)" />
      <text x="45" y="42" textAnchor="middle" fontSize="6" fontWeight="700" fill="#16a34a">{l.grandparents}</text>

      <rect x="40" y="60" width="50" height="12" rx="6" fill="#fff" filter="url(#labelBg)" />
      <text x="65" y="68" textAnchor="middle" fontSize="6" fontWeight="700" fill="#16a34a">{l.parents}</text>

      <rect x="25" y="104" width="50" height="12" rx="6" fill="#fff" filter="url(#labelBg)" />
      <text x="50" y="112" textAnchor="middle" fontSize="6" fontWeight="700" fill="#92400e">{l.kids}</text>

      <text x="120" y="15" textAnchor="middle" fontSize="8" fontWeight="800" fill="#0369a1">{l.title}</text>
    </svg>
  );
});

// ─── HOUSE ROOMS ────────────────────────────────────────────────────────────

const ROOMS_LABELS: Record<string, Record<string, string>> = {
  en: { title: "Rooms of a House", bedroom: "Bedroom", bathroom: "Bathroom", kitchen: "Kitchen", living: "Living Room" },
  de: { title: "Zimmer im Haus", bedroom: "Schlafzimmer", bathroom: "Badezimmer", kitchen: "Küche", living: "Wohnzimmer" },
  hu: { title: "A ház szobái", bedroom: "Hálószoba", bathroom: "Fürdőszoba", kitchen: "Konyha", living: "Nappali" },
  ro: { title: "Camerele casei", bedroom: "Dormitor", bathroom: "Baie", kitchen: "Bucătărie", living: "Sufragerie" },
};

export const HouseRoomsSvg = memo(function HouseRoomsSvg({ lang = "de" }: { lang?: string }) {
  const l = ROOMS_LABELS[lang as keyof typeof ROOMS_LABELS] || ROOMS_LABELS.en;
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <SharedDefs />
      <PlayfulBackground />
      
      {/* House Base */}
      <g transform="translate(60, 30)">
        {/* Roof */}
        <polygon points="-10,0 60,-25 130,0" fill="#ef4444" stroke="#b91c1c" strokeWidth="2" strokeLinejoin="round" />
        {/* House frame */}
        <rect x="0" y="0" width="120" height="100" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
        
        {/* Cross-section lines */}
        <line x1="60" y1="0" x2="60" y2="100" stroke="#d97706" strokeWidth="2" />
        <line x1="0" y1="50" x2="120" y2="50" stroke="#d97706" strokeWidth="2" />

        {/* Bedroom (Top Left) */}
        <rect x="5" y="5" width="50" height="40" fill="#e0f2fe" opacity="0.6" />
        <text x="30" y="32" textAnchor="middle" fontSize="20">🛏️</text>

        {/* Bathroom (Top Right) */}
        <rect x="65" y="5" width="50" height="40" fill="#dcfce7" opacity="0.6" />
        <text x="90" y="32" textAnchor="middle" fontSize="20">🛁</text>

        {/* Living Room (Bottom Left) */}
        <rect x="5" y="55" width="50" height="40" fill="#fef08a" opacity="0.6" />
        <text x="30" y="82" textAnchor="middle" fontSize="20">🛋️</text>

        {/* Kitchen (Bottom Right) */}
        <rect x="65" y="55" width="50" height="40" fill="#ffedd5" opacity="0.6" />
        <text x="90" y="82" textAnchor="middle" fontSize="20">🍳</text>
      </g>

      {/* Labels */}
      <rect x="5" y="45" width="55" height="12" rx="6" fill="#fff" filter="url(#labelBg)" />
      <text x="32.5" y="53" textAnchor="middle" fontSize="5" fontWeight="700" fill="#0284c7">{l.bedroom}</text>

      <rect x="180" y="45" width="55" height="12" rx="6" fill="#fff" filter="url(#labelBg)" />
      <text x="207.5" y="53" textAnchor="middle" fontSize="5" fontWeight="700" fill="#16a34a">{l.bathroom}</text>

      <rect x="5" y="95" width="55" height="12" rx="6" fill="#fff" filter="url(#labelBg)" />
      <text x="32.5" y="103" textAnchor="middle" fontSize="5" fontWeight="700" fill="#ca8a04">{l.living}</text>

      <rect x="180" y="95" width="55" height="12" rx="6" fill="#fff" filter="url(#labelBg)" />
      <text x="207.5" y="103" textAnchor="middle" fontSize="5" fontWeight="700" fill="#ea580c">{l.kitchen}</text>

      <text x="120" y="15" textAnchor="middle" fontSize="8" fontWeight="800" fill="#0369a1">{l.title}</text>
    </svg>
  );
});

// ─── PROFESSIONS ────────────────────────────────────────────────────────────

const JOBS_LABELS: Record<string, Record<string, string>> = {
  en: { title: "Professions", doctor: "Doctor", teacher: "Teacher", builder: "Builder" },
  de: { title: "Berufe", doctor: "Arzt / Ärztin", teacher: "Lehrer/in", builder: "Bauarbeiter/in" },
  hu: { title: "Szakmák", doctor: "Orvos", teacher: "Tanár", builder: "Építőmunkás" },
  ro: { title: "Profesii", doctor: "Doctor", teacher: "Profesor", builder: "Constructor" },
};

export const ProfessionsSvg = memo(function ProfessionsSvg({ lang = "de" }: { lang?: string }) {
  const l = JOBS_LABELS[lang as keyof typeof JOBS_LABELS] || JOBS_LABELS.en;
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <SharedDefs />
      <PlayfulBackground />
      
      {/* 1. Doctor */}
      <g transform="translate(45, 60)">
        <circle cx="0" cy="0" r="18" fill="#fff" stroke="#ef4444" strokeWidth="2" />
        <path d="M -8 -2 L 8 -2 M 0 -10 L 0 6" stroke="#ef4444" strokeWidth="4" />
        <text x="0" y="25" textAnchor="middle" fontSize="18">👩‍⚕️</text>
        <rect x="-25" y="35" width="50" height="12" rx="6" fill="#fff" filter="url(#labelBg)" />
        <text x="0" y="43" textAnchor="middle" fontSize="5.5" fontWeight="700" fill="#ef4444">{l.doctor}</text>
      </g>

      {/* 2. Teacher */}
      <g transform="translate(120, 60)">
        <rect x="-15" y="-12" width="30" height="20" fill="#166534" stroke="#854d0e" strokeWidth="3" />
        <text x="0" y="3" textAnchor="middle" fontSize="10" fill="#fff">A B C</text>
        <text x="0" y="25" textAnchor="middle" fontSize="18">👨‍🏫</text>
        <rect x="-25" y="35" width="50" height="12" rx="6" fill="#fff" filter="url(#labelBg)" />
        <text x="0" y="43" textAnchor="middle" fontSize="5.5" fontWeight="700" fill="#166534">{l.teacher}</text>
      </g>

      {/* 3. Builder */}
      <g transform="translate(195, 60)">
        <rect x="-12" y="-10" width="24" height="18" fill="#fb923c" />
        <path d="M -12 -4 L 12 -4 M -12 2 L 12 2 M -12 8 L 12 8" stroke="#fff" strokeWidth="1" />
        <path d="M -6 -10 L -6 8 M 6 -10 L 6 8 M 0 -4 L 0 2" stroke="#fff" strokeWidth="1" />
        <text x="0" y="25" textAnchor="middle" fontSize="18">👷</text>
        <rect x="-30" y="35" width="60" height="12" rx="6" fill="#fff" filter="url(#labelBg)" />
        <text x="0" y="43" textAnchor="middle" fontSize="5.5" fontWeight="700" fill="#ea580c">{l.builder}</text>
      </g>

      <text x="120" y="15" textAnchor="middle" fontSize="8" fontWeight="800" fill="#0369a1">{l.title}</text>
    </svg>
  );
});

// ─── EMERGENCY ──────────────────────────────────────────────────────────────

const EMERGENCY_LABELS: Record<string, Record<string, string>> = {
  en: { title: "Emergency", phone: "Call 112!", fire: "Fire", police: "Police", ambulance: "Ambulance" },
  de: { title: "Notfall", phone: "Wähle 112!", fire: "Feuerwehr", police: "Polizei", ambulance: "Krankenwagen" },
  hu: { title: "Vészhelyzet", phone: "Hívd a 112-t!", fire: "Tűzoltó", police: "Rendőrség", ambulance: "Mentők" },
  ro: { title: "Urgență", phone: "Sună la 112!", fire: "Pompieri", police: "Poliție", ambulance: "Ambulanță" },
};

export const EmergencySvg = memo(function EmergencySvg({ lang = "de" }: { lang?: string }) {
  const l = EMERGENCY_LABELS[lang as keyof typeof EMERGENCY_LABELS] || EMERGENCY_LABELS.en;
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <SharedDefs />
      <PlayfulBackground />
      
      {/* ── Smartphone with 112 ── */}
      <g transform="translate(120, 65)">
        <rect x="-25" y="-45" width="50" height="85" rx="8" fill="#1e293b" />
        <rect x="-21" y="-35" width="42" height="65" rx="4" fill="#f8fafc" />
        <text x="0" y="-10" textAnchor="middle" fontSize="22" fontWeight="900" fill="#ef4444">112</text>
        <circle cx="0" cy="15" r="8" fill="#22c55e" />
        <path d="M -3 15 L 0 18 L 4 12" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
      </g>

      {/* ── Icons ── */}
      <g transform="translate(45, 45)">
        <circle cx="0" cy="0" r="16" fill="#ef4444" opacity="0.2" />
        <text x="0" y="6" textAnchor="middle" fontSize="20">🚒</text>
        <rect x="-25" y="15" width="50" height="12" rx="6" fill="#fff" filter="url(#labelBg)" />
        <text x="0" y="23" textAnchor="middle" fontSize="6" fontWeight="700" fill="#ef4444">{l.fire}</text>
      </g>

      <g transform="translate(195, 45)">
        <circle cx="0" cy="0" r="16" fill="#3b82f6" opacity="0.2" />
        <text x="0" y="6" textAnchor="middle" fontSize="20">🚓</text>
        <rect x="-25" y="15" width="50" height="12" rx="6" fill="#fff" filter="url(#labelBg)" />
        <text x="0" y="23" textAnchor="middle" fontSize="6" fontWeight="700" fill="#2563eb">{l.police}</text>
      </g>

      <g transform="translate(45, 100)">
        <circle cx="0" cy="0" r="16" fill="#16a34a" opacity="0.2" />
        <text x="0" y="6" textAnchor="middle" fontSize="20">🚑</text>
        <rect x="-25" y="15" width="50" height="12" rx="6" fill="#fff" filter="url(#labelBg)" />
        <text x="0" y="23" textAnchor="middle" fontSize="6" fontWeight="700" fill="#16a34a">{l.ambulance}</text>
      </g>

      {/* Labels */}
      <rect x="95" y="115" width="50" height="12" rx="6" fill="#ef4444" filter="url(#labelBg)" />
      <text x="120" y="123" textAnchor="middle" fontSize="6" fontWeight="700" fill="#fff">{l.phone}</text>

      <text x="120" y="15" textAnchor="middle" fontSize="8" fontWeight="800" fill="#0369a1">{l.title}</text>
    </svg>
  );
});

// ─── HOME SAFETY ────────────────────────────────────────────────────────────

const SAFETY_LABELS: Record<string, Record<string, string>> = {
  en: { title: "Home Safety", danger: "Danger! Don't touch!", safe: "Safe to play", hot: "Hot!", toys: "Toys" },
  de: { title: "Sicherheit zu Hause", danger: "Gefahr! Nicht anfassen!", safe: "Sicher zum Spielen", hot: "Heiß!", toys: "Spielzeug" },
  hu: { title: "Otthoni biztonság", danger: "Veszély! Ne nyúlj hozzá!", safe: "Biztonságos játék", hot: "Forró!", toys: "Játékok" },
  ro: { title: "Siguranța acasă", danger: "Pericol! Nu atinge!", safe: "Sigur pentru joacă", hot: "Fierbinte!", toys: "Jucării" },
};

export const HomeSafetySvg = memo(function HomeSafetySvg({ lang = "de" }: { lang?: string }) {
  const l = SAFETY_LABELS[lang as keyof typeof SAFETY_LABELS] || SAFETY_LABELS.en;
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <SharedDefs />
      
      {/* Split background */}
      <rect x="0" y="0" width="120" height="140" fill="#fee2e2" />
      <rect x="120" y="0" width="120" height="140" fill="#dcfce7" />
      <line x1="120" y1="0" x2="120" y2="140" stroke="#fff" strokeWidth="4" />

      {/* ── DANGER SIDE (Left) ── */}
      <g transform="translate(60, 65)">
        {/* Hot Stove / Socket concept */}
        <rect x="-15" y="-15" width="30" height="30" rx="4" fill="#f8fafc" stroke="#94a3b8" strokeWidth="2" />
        <circle cx="-5" cy="0" r="3" fill="#1e293b" />
        <circle cx="5" cy="0" r="3" fill="#1e293b" />
        <path d="M 0 -10 L 5 -20 M -5 -20 L 0 -10" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
        
        {/* Red Cross */}
        <path d="M -20 -20 L 20 20 M -20 20 L 20 -20" stroke="#ef4444" strokeWidth="5" strokeLinecap="round" opacity="0.8" />
      </g>

      <rect x="15" y="105" width="90" height="12" rx="6" fill="#ef4444" filter="url(#labelBg)" />
      <text x="60" y="113" textAnchor="middle" fontSize="5.5" fontWeight="700" fill="#fff">{l.danger}</text>
      <text x="60" y="25" textAnchor="middle" fontSize="6" fontWeight="700" fill="#dc2626">{l.hot}</text>

      {/* ── SAFE SIDE (Right) ── */}
      <g transform="translate(180, 65)">
        <text x="-10" y="-5" fontSize="20">🧸</text>
        <text x="10" y="10" fontSize="16">🚂</text>
        
        {/* Green Check */}
        <path d="M -15 10 L -5 20 L 15 -10" fill="none" stroke="#22c55e" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
      </g>

      <rect x="135" y="105" width="90" height="12" rx="6" fill="#22c55e" filter="url(#labelBg)" />
      <text x="180" y="113" textAnchor="middle" fontSize="5.5" fontWeight="700" fill="#fff">{l.safe}</text>
      <text x="180" y="25" textAnchor="middle" fontSize="6" fontWeight="700" fill="#16a34a">{l.toys}</text>

      <rect x="80" y="5" width="80" height="14" rx="7" fill="#fff" filter="url(#labelBg)" />
      <text x="120" y="15" textAnchor="middle" fontSize="8" fontWeight="800" fill="#0f172a">{l.title}</text>
    </svg>
  );
});
