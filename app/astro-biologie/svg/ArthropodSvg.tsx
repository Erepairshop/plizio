"use client";
// ─── ArthropodSvg — Arthropod & invertebrate illustrations ──────────────────
// Exports:
//   InsectAnatomySvg   — insect body plan (head/thorax/abdomen, 6 legs, antenna)
//   SpiderAnatomySvg   — spider anatomy (cephalothorax, 8 legs, spinnerets)
//   ArthropodGroupsSvg — overview of arthropod groups
//   MolluskSvg         — mollusk anatomy (shell, foot, mantle)
//   WormSvg            — segmented worm anatomy

import { memo } from "react";

// ─── SHARED DEFS ────────────────────────────────────────────────────────────
// Közös filter a feliratok ragyogásához, amit minden komponens használhat.
const LabelGlow = () => (
  <filter id="lblGlow">
    <feGaussianBlur stdDeviation="1.2" result="b" />
    <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
  </filter>
);

// ─── INSECT ANATOMY ─────────────────────────────────────────────────────────

const INSECT_LABELS: Record<string, Record<string, string>> = {
  en: { title: "Insect Anatomy", head: "Head", thorax: "Thorax", abdomen: "Abdomen", legs: "6 Legs", antenna: "Antenna", wings: "Wings" },
  de: { title: "Insektenanatomie", head: "Kopf", thorax: "Thorax", abdomen: "Abdomen", legs: "6 Beine", antenna: "Antenne", wings: "Flügel" },
  hu: { title: "Rovar anatómia", head: "Fej", thorax: "Tor", abdomen: "Potroh", legs: "6 láb", antenna: "Csáp", wings: "Szárnyak" },
  ro: { title: "Anatomia insectei", head: "Cap", thorax: "Torace", abdomen: "Abdomen", legs: "6 picioare", antenna: "Antenă", wings: "Aripi" },
};

export const InsectAnatomySvg = memo(function InsectAnatomySvg({ lang = "de" }: { lang?: string }) {
  const l = INSECT_LABELS[lang as keyof typeof INSECT_LABELS] || INSECT_LABELS.en;
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <defs>
        <linearGradient id="insAnatBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#292524" />
          <stop offset="100%" stopColor="#44403c" />
        </linearGradient>
        <linearGradient id="insBody" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#d97706" />
          <stop offset="100%" stopColor="#92400e" />
        </linearGradient>
        <linearGradient id="insWing" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fef3c7" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#fde68a" stopOpacity="0.2" />
        </linearGradient>
        <LabelGlow />
      </defs>
      <rect width="240" height="140" fill="url(#insAnatBg)" rx="12" />
      
      {/* ── Legs (Back) ── */}
      <path d="M 100 85 L 85 110 L 70 115" fill="none" stroke="#78350f" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 110 88 L 110 115 L 100 125" fill="none" stroke="#78350f" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 120 85 L 145 105 L 155 125" fill="none" stroke="#78350f" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

      {/* ── Body ── */}
      {/* Antenna */}
      <path d="M 50 65 Q 40 45 25 40" fill="none" stroke="#92400e" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M 55 68 Q 50 40 35 30" fill="none" stroke="#92400e" strokeWidth="1.5" strokeLinecap="round" />
      
      {/* Head */}
      <ellipse cx="60" cy="75" rx="12" ry="10" fill="url(#insBody)" />
      <circle cx="56" cy="72" r="2.5" fill="#1c1917" />
      
      {/* Thorax */}
      <ellipse cx="100" cy="75" rx="20" ry="14" fill="url(#insBody)" />
      
      {/* Abdomen */}
      <path d="M 115 75 Q 150 50 190 75 Q 150 100 115 75 Z" fill="url(#insBody)" />
      {/* Abdomen segments */}
      {[130, 145, 160, 175].map(x => (
        <path key={x} d={`M ${x} 63 Q ${x+5} 75 ${x} 87`} fill="none" stroke="#78350f" strokeWidth="1" />
      ))}

      {/* ── Legs (Front) ── */}
      <path d="M 95 85 L 80 120 L 60 125" fill="none" stroke="#b45309" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 105 88 L 110 125 L 125 135" fill="none" stroke="#b45309" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 115 85 L 155 115 L 175 130" fill="none" stroke="#b45309" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

      {/* ── Wings ── */}
      <path d="M 95 65 Q 110 20 160 35 Q 140 60 105 70 Z" fill="url(#insWing)" stroke="#fcd34d" strokeWidth="0.5" />
      <path d="M 105 68 Q 130 30 180 50 Q 150 75 115 75 Z" fill="url(#insWing)" stroke="#fcd34d" strokeWidth="0.5" />

      {/* ── Labels ── */}
      <line x1="60" y1="65" x2="60" y2="25" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <rect x="45" y="10" width="30" height="12" rx="6" fill="rgba(0,0,0,0.5)" />
      <text x="60" y="19" textAnchor="middle" fontSize="6" fontWeight="700" fill="#fcd34d" filter="url(#lblGlow)">{l.head}</text>

      <line x1="100" y1="61" x2="100" y2="25" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <rect x="85" y="10" width="30" height="12" rx="6" fill="rgba(0,0,0,0.5)" />
      <text x="100" y="19" textAnchor="middle" fontSize="6" fontWeight="700" fill="#fcd34d" filter="url(#lblGlow)">{l.thorax}</text>

      <line x1="160" y1="65" x2="160" y2="25" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <rect x="140" y="10" width="40" height="12" rx="6" fill="rgba(0,0,0,0.5)" />
      <text x="160" y="19" textAnchor="middle" fontSize="6" fontWeight="700" fill="#fcd34d" filter="url(#lblGlow)">{l.abdomen}</text>

      <line x1="130" y1="125" x2="185" y2="125" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <rect x="188" y="119" width="35" height="12" rx="6" fill="rgba(217,119,6,0.4)" />
      <text x="205.5" y="128" textAnchor="middle" fontSize="6" fontWeight="700" fill="#fde68a" filter="url(#lblGlow)">{l.legs}</text>

      <line x1="30" y1="35" x2="15" y2="35" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="15" y="32" textAnchor="middle" fontSize="6" fontWeight="700" fill="#d6d3d1" filter="url(#lblGlow)">{l.antenna}</text>
    </svg>
  );
});

// ─── SPIDER ANATOMY ─────────────────────────────────────────────────────────

const SPIDER_LABELS: Record<string, Record<string, string>> = {
  en: { title: "Spider Anatomy", cephalothorax: "Cephalothorax", abdomen: "Abdomen", legs: "8 Legs", spinnerets: "Spinnerets", fangs: "Fangs" },
  de: { title: "Spinnenanatomie", cephalothorax: "Kopfbruststück", abdomen: "Hinterleib", legs: "8 Beine", spinnerets: "Spinnwarzen", fangs: "Giftklauen" },
  hu: { title: "Pók anatómia", cephalothorax: "Fejtor", abdomen: "Potroh", legs: "8 láb", spinnerets: "Fonószemölcs", fangs: "Méregkarom" },
  ro: { title: "Anatomia păianjenului", cephalothorax: "Cefalotorace", abdomen: "Abdomen", legs: "8 picioare", spinnerets: "Filiere", fangs: "Chelicere" },
};

export const SpiderAnatomySvg = memo(function SpiderAnatomySvg({ lang = "de" }: { lang?: string }) {
  const l = SPIDER_LABELS[lang as keyof typeof SPIDER_LABELS] || SPIDER_LABELS.en;
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <defs>
        <linearGradient id="spidAnatBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1e1b4b" />
          <stop offset="100%" stopColor="#312e81" />
        </linearGradient>
        <linearGradient id="spidBody" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4b5563" />
          <stop offset="100%" stopColor="#1f2937" />
        </linearGradient>
        <LabelGlow />
      </defs>
      <rect width="240" height="140" fill="url(#spidAnatBg)" rx="12" />
      
      {/* ── Web background ── */}
      <path d="M 0 0 L 80 80 M 60 0 L 80 80 M 0 50 L 80 80 M 30 15 L 70 30 M 15 35 L 50 60" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />

      {/* ── Legs (Right / Back) ── */}
      {[[-10,-40], [20,-45], [40,-25], [50,15]].map(([dx, dy], i) => (
        <path key={`rleg${i}`} d={`M 110 70 Q ${110+dx/2} ${70+dy} ${110+dx} ${70+dy*1.5}`} fill="none" stroke="#374151" strokeWidth="2.5" strokeLinecap="round" />
      ))}

      {/* ── Body ── */}
      {/* Spinnerets */}
      <path d="M 175 66 L 185 64 L 175 69 Z" fill="#9ca3af" />
      <path d="M 175 74 L 185 76 L 175 71 Z" fill="#9ca3af" />

      {/* Fangs */}
      <path d="M 85 75 Q 80 82 82 85" fill="none" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M 89 75 Q 84 82 86 85" fill="none" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" />

      {/* Cephalothorax */}
      <ellipse cx="95" cy="70" rx="14" ry="10" fill="url(#spidBody)" />
      {/* Eyes */}
      <circle cx="86" cy="67" r="1.5" fill="#ef4444" />
      <circle cx="86" cy="71" r="1.5" fill="#ef4444" />
      <circle cx="89" cy="65" r="1" fill="#ef4444" />
      <circle cx="89" cy="73" r="1" fill="#ef4444" />

      {/* Abdomen */}
      <ellipse cx="140" cy="70" rx="35" ry="22" fill="url(#spidBody)" />
      {/* Markings */}
      <path d="M 120 70 L 130 60 L 140 70 L 130 80 Z" fill="#ef4444" opacity="0.8" />
      <path d="M 145 70 L 150 63 L 155 70 L 150 77 Z" fill="#ef4444" opacity="0.6" />

      {/* ── Legs (Left / Front) ── */}
      {[[-30,-30], [-10,-40], [30,-35], [45,25]].map(([dx, dy], i) => (
        <path key={`lleg${i}`} d={`M 100 75 Q ${100+dx/2} ${75+dy} ${100+dx} ${75+dy*1.2}`} fill="none" stroke="#4b5563" strokeWidth="3" strokeLinecap="round" />
      ))}

      {/* ── Labels ── */}
      <line x1="95" y1="60" x2="95" y2="25" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <rect x="70" y="10" width="50" height="12" rx="6" fill="rgba(0,0,0,0.5)" />
      <text x="95" y="19" textAnchor="middle" fontSize="6" fontWeight="700" fill="#c7d2fe" filter="url(#lblGlow)">{l.cephalothorax}</text>

      <line x1="140" y1="48" x2="140" y2="25" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <rect x="120" y="10" width="40" height="12" rx="6" fill="rgba(0,0,0,0.5)" />
      <text x="140" y="19" textAnchor="middle" fontSize="6" fontWeight="700" fill="#c7d2fe" filter="url(#lblGlow)">{l.abdomen}</text>

      <line x1="82" y1="85" x2="60" y2="105" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="50" y="112" textAnchor="middle" fontSize="6" fontWeight="700" fill="#fca5a5" filter="url(#lblGlow)">{l.fangs}</text>

      <line x1="180" y1="70" x2="200" y2="70" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="215" y="72" textAnchor="middle" fontSize="6" fontWeight="700" fill="#d1d5db" filter="url(#lblGlow)">{l.spinnerets}</text>
    </svg>
  );
});

// ─── ARTHROPOD GROUPS ───────────────────────────────────────────────────────

const GROUPS_LABELS: Record<string, Record<string, string>> = {
  en: { title: "Arthropod Groups", insects: "Insects", arachnids: "Arachnids", crustaceans: "Crustaceans", myriapods: "Myriapods" },
  de: { title: "Arthropoden-Gruppen", insects: "Insekten", arachnids: "Spinnentiere", crustaceans: "Krebstiere", myriapods: "Tausendfüßer" },
  hu: { title: "Ízeltlábú csoportok", insects: "Rovarok", arachnids: "Pókszabásúak", crustaceans: "Rákok", myriapods: "Soklábúak" },
  ro: { title: "Grupuri de artropode", insects: "Insecte", arachnids: "Arahnide", crustaceans: "Crustacee", myriapods: "Miriapode" },
};

export const ArthropodGroupsSvg = memo(function ArthropodGroupsSvg({ lang = "de" }: { lang?: string }) {
  const l = GROUPS_LABELS[lang as keyof typeof GROUPS_LABELS] || GROUPS_LABELS.en;
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <defs>
        <linearGradient id="arthGrpBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#064e3b" />
          <stop offset="100%" stopColor="#022c22" />
        </linearGradient>
        <LabelGlow />
      </defs>
      <rect width="240" height="140" fill="url(#arthGrpBg)" rx="12" />
      
      {/* Taxonomic Tree Lines */}
      <path d="M 120 120 L 120 90 M 120 90 L 45 60 M 120 90 L 95 60 M 120 90 L 145 60 M 120 90 L 195 60" fill="none" stroke="rgba(110,231,183,0.3)" strokeWidth="1.5" />
      <rect x="80" y="115" width="80" height="14" rx="7" fill="rgba(0,0,0,0.4)" />
      <text x="120" y="125" textAnchor="middle" fontSize="7" fontWeight="700" fill="#6ee7b7" filter="url(#lblGlow)">Arthropoda</text>

      {/* 1. Insects */}
      <circle cx="45" cy="45" r="16" fill="#047857" stroke="#34d399" strokeWidth="1" />
      <text x="45" y="48" textAnchor="middle" fontSize="14">🐝</text>
      <text x="45" y="22" textAnchor="middle" fontSize="6.5" fontWeight="700" fill="#a7f3d0">{l.insects}</text>

      {/* 2. Arachnids */}
      <circle cx="95" cy="45" r="16" fill="#047857" stroke="#34d399" strokeWidth="1" />
      <text x="95" y="48" textAnchor="middle" fontSize="14">🕷️</text>
      <text x="95" y="22" textAnchor="middle" fontSize="6.5" fontWeight="700" fill="#a7f3d0">{l.arachnids}</text>

      {/* 3. Crustaceans */}
      <circle cx="145" cy="45" r="16" fill="#047857" stroke="#34d399" strokeWidth="1" />
      <text x="145" y="48" textAnchor="middle" fontSize="14">🦀</text>
      <text x="145" y="22" textAnchor="middle" fontSize="6.5" fontWeight="700" fill="#a7f3d0">{l.crustaceans}</text>

      {/* 4. Myriapods */}
      <circle cx="195" cy="45" r="16" fill="#047857" stroke="#34d399" strokeWidth="1" />
      <text x="195" y="48" textAnchor="middle" fontSize="14">🐛</text>
      <text x="195" y="22" textAnchor="middle" fontSize="6.5" fontWeight="700" fill="#a7f3d0">{l.myriapods}</text>
    </svg>
  );
});

// ─── MOLLUSK ────────────────────────────────────────────────────────────────

const MOLLUSK_LABELS: Record<string, Record<string, string>> = {
  en: { title: "Mollusk Anatomy", shell: "Shell", foot: "Muscular Foot", mantle: "Mantle", gills: "Gills", visceral: "Visceral Mass" },
  de: { title: "Weichtier-Anatomie", shell: "Schale", foot: "Fuß", mantle: "Mantel", gills: "Kiemen", visceral: "Eingeweidesack" },
  hu: { title: "Puhatestű anatómia", shell: "Héj", foot: "Izmos láb", mantle: "Köpeny", gills: "Kopoltyú", visceral: "Zsigerzacskó" },
  ro: { title: "Anatomia moluștei", shell: "Cochilie", foot: "Picior muscular", mantle: "Manta", gills: "Branhii", visceral: "Masă viscerală" },
};

export const MolluskSvg = memo(function MolluskSvg({ lang = "de" }: { lang?: string }) {
  const l = MOLLUSK_LABELS[lang as keyof typeof MOLLUSK_LABELS] || MOLLUSK_LABELS.en;
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <defs>
        <linearGradient id="mollBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0f172a" />
          <stop offset="100%" stopColor="#1e293b" />
        </linearGradient>
        <linearGradient id="shellGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fcd34d" />
          <stop offset="100%" stopColor="#b45309" />
        </linearGradient>
        <linearGradient id="footGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#94a3b8" />
          <stop offset="100%" stopColor="#475569" />
        </linearGradient>
        <LabelGlow />
      </defs>
      <rect width="240" height="140" fill="url(#mollBg)" rx="12" />
      
      {/* ── Snail Body (Foot & Head) ── */}
      <path d="M 160 100 Q 180 100 185 110 L 180 115 L 60 115 Q 40 115 45 95 Q 50 85 65 95 Z" fill="url(#footGrad)" />
      {/* Tentacles */}
      <path d="M 50 90 L 35 75 M 55 88 L 45 72" fill="none" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="35" cy="75" r="1.5" fill="#1e293b" />
      <circle cx="45" cy="72" r="1.5" fill="#1e293b" />

      {/* ── Internal Anatomy (Visceral mass & Gills inside shell) ── */}
      <ellipse cx="125" cy="75" rx="35" ry="25" fill="#cbd5e1" opacity="0.4" />
      {/* Gills representation */}
      <path d="M 100 70 Q 105 60 110 70 Q 115 60 120 70 Q 125 60 130 70" fill="none" stroke="#ef4444" strokeWidth="1.5" opacity="0.6" />

      {/* ── Shell (Spiral) ── */}
      <path d="M 155 95 C 180 60 140 20 110 40 C 80 60 95 105 130 90 C 145 80 140 55 125 60 C 115 65 120 80 128 75" fill="none" stroke="url(#shellGrad)" strokeWidth="14" strokeLinecap="round" />
      
      {/* ── Labels ── */}
      <line x1="145" y1="40" x2="180" y2="25" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="195" y="24" textAnchor="middle" fontSize="6" fontWeight="700" fill="#fde68a" filter="url(#lblGlow)">{l.shell}</text>

      <line x1="115" y1="65" x2="80" y2="35" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="65" y="32" textAnchor="middle" fontSize="6" fontWeight="700" fill="#fca5a5" filter="url(#lblGlow)">{l.gills}</text>

      <line x1="135" y1="75" x2="190" y2="60" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="210" y="59" textAnchor="middle" fontSize="6" fontWeight="700" fill="#e2e8f0" filter="url(#lblGlow)">{l.visceral}</text>

      <line x1="100" y1="110" x2="100" y2="128" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <rect x="80" y="129" width="40" height="10" rx="5" fill="rgba(0,0,0,0.5)" />
      <text x="100" y="136" textAnchor="middle" fontSize="5.5" fontWeight="700" fill="#cbd5e1" filter="url(#lblGlow)">{l.foot}</text>

      <line x1="95" y1="95" x2="60" y2="55" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="50" y="53" textAnchor="middle" fontSize="6" fontWeight="700" fill="#94a3b8" filter="url(#lblGlow)">{l.mantle}</text>
    </svg>
  );
});

// ─── WORM ───────────────────────────────────────────────────────────────────

const WORM_LABELS: Record<string, Record<string, string>> = {
  en: { title: "Segmented Worm", segments: "Segments", clitellum: "Clitellum", setae: "Setae", mouth: "Mouth", anus: "Anus" },
  de: { title: "Ringelwurm", segments: "Segmente", clitellum: "Gürtel", setae: "Borsten", mouth: "Mund", anus: "After" },
  hu: { title: "Gyűrűsféreg", segments: "Szelvények", clitellum: "Nyereg", setae: "Serték", mouth: "Száj", anus: "Végbélnyílás" },
  ro: { title: "Vierme segmentat", segments: "Segmente", clitellum: "Clitelum", setae: "Sete", mouth: "Gură", anus: "Anus" },
};

export const WormSvg = memo(function WormSvg({ lang = "de" }: { lang?: string }) {
  const l = WORM_LABELS[lang as keyof typeof WORM_LABELS] || WORM_LABELS.en;
  
  // Generáljuk a gyűrűsféreg útvonalát és szelvényeit matematikailag
  const segments = [];
  for (let i = 0; i <= 40; i++) {
    const t = i / 40;
    const x = 30 + t * 180;
    const y = 80 + Math.sin(t * Math.PI * 2.5) * 15;
    segments.push(`${x},${y}`);
  }

  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <defs>
        <linearGradient id="wormBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3f2717" />
          <stop offset="100%" stopColor="#1c1109" />
        </linearGradient>
        <LabelGlow />
      </defs>
      <rect width="240" height="140" fill="url(#wormBg)" rx="12" />
      
      {/* Dirt particles */}
      <circle cx="40" cy="110" r="1.5" fill="#78350f" />
      <circle cx="200" cy="40" r="1" fill="#78350f" />
      <circle cx="150" cy="120" r="2" fill="#78350f" />
      
      {/* ── Worm Body (Thick Path) ── */}
      <path d={`M ${segments.join(' L ')}`} fill="none" stroke="#b45309" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
      
      {/* ── Segments (Thin vertical-ish lines along the path) ── */}
      <path d={`M ${segments.join(' M ')}`} fill="none" stroke="#78350f" strokeWidth="1" strokeDasharray="0 4.5" />
      
      {/* ── Clitellum (Thicker band) ── */}
      <path d={`M ${segments[8]} L ${segments[11]}`} fill="none" stroke="#fcd34d" strokeWidth="18" strokeLinecap="round" />

      {/* ── Setae (Little hairs on bottom) ── */}
      <path d={`M ${segments.join(' M ')}`} fill="none" stroke="#fef3c7" strokeWidth="0.5" strokeDasharray="0 4.5" transform="translate(0, 8)" opacity="0.5" />

      {/* ── Labels ── */}
      <line x1="120" y1="95" x2="120" y2="120" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="120" y="128" textAnchor="middle" fontSize="6" fontWeight="700" fill="#fde68a" filter="url(#lblGlow)">{l.segments}</text>

      <line x1="72" y1="65" x2="72" y2="35" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <rect x="52" y="20" width="40" height="12" rx="6" fill="rgba(245,158,11,0.3)" />
      <text x="72" y="29" textAnchor="middle" fontSize="6" fontWeight="700" fill="#fef3c7" filter="url(#lblGlow)">{l.clitellum}</text>

      <line x1="30" y1="80" x2="20" y2="55" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="18" y="51" textAnchor="middle" fontSize="6" fontWeight="700" fill="#d6d3d1" filter="url(#lblGlow)">{l.mouth}</text>

      <line x1="210" y1="90" x2="220" y2="65" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="222" y="61" textAnchor="middle" fontSize="6" fontWeight="700" fill="#d6d3d1" filter="url(#lblGlow)">{l.anus}</text>
      
      <line x1="160" y1="92" x2="180" y2="120" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="185" y="126" textAnchor="middle" fontSize="6" fontWeight="700" fill="#d6d3d1" filter="url(#lblGlow)">{l.setae}</text>
    </svg>
  );
});
