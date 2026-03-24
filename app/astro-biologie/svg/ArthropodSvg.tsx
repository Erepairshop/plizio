"use client";
// ─── ArthropodSvg — Arthropod & invertebrate illustrations ──────────────────
// Exports:
//   InsectAnatomySvg  — insect body plan (head/thorax/abdomen, 6 legs, antenna)
//   SpiderAnatomySvg  — spider anatomy (cephalothorax, 8 legs, spinnerets)
//   ArthropodGroupsSvg — overview of arthropod groups
//   MolluskSvg        — mollusk anatomy (shell, foot, mantle)
//   WormSvg           — segmented worm anatomy
//
// TODO: Replace placeholder SVGs with detailed illustrations

import { memo } from "react";

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
          <stop offset="0%" stopColor="#451a03" />
          <stop offset="100%" stopColor="#78350f" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#insAnatBg)" rx="12" />
      {/* TODO: detailed insect illustration */}
      <text x="120" y="60" textAnchor="middle" fontSize="32">🐛</text>
      <text x="120" y="85" textAnchor="middle" fontSize="9" fontWeight="700" fill="#fbbf24">{l.title}</text>
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
          <stop offset="0%" stopColor="#451a03" />
          <stop offset="100%" stopColor="#92400e" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#spidAnatBg)" rx="12" />
      {/* TODO: detailed spider illustration */}
      <text x="120" y="60" textAnchor="middle" fontSize="32">🕷️</text>
      <text x="120" y="85" textAnchor="middle" fontSize="9" fontWeight="700" fill="#fbbf24">{l.title}</text>
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
          <stop offset="0%" stopColor="#451a03" />
          <stop offset="100%" stopColor="#713f12" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#arthGrpBg)" rx="12" />
      {/* TODO: detailed arthropod groups illustration */}
      <text x="120" y="60" textAnchor="middle" fontSize="32">🦗</text>
      <text x="120" y="85" textAnchor="middle" fontSize="9" fontWeight="700" fill="#fbbf24">{l.title}</text>
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
          <stop offset="0%" stopColor="#451a03" />
          <stop offset="100%" stopColor="#854d0e" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#mollBg)" rx="12" />
      {/* TODO: detailed mollusk illustration */}
      <text x="120" y="60" textAnchor="middle" fontSize="32">🐌</text>
      <text x="120" y="85" textAnchor="middle" fontSize="9" fontWeight="700" fill="#fbbf24">{l.title}</text>
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
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <defs>
        <linearGradient id="wormBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#451a03" />
          <stop offset="100%" stopColor="#6b3a10" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#wormBg)" rx="12" />
      {/* TODO: detailed worm illustration */}
      <text x="120" y="60" textAnchor="middle" fontSize="32">🪱</text>
      <text x="120" y="85" textAnchor="middle" fontSize="9" fontWeight="700" fill="#fbbf24">{l.title}</text>
    </svg>
  );
});
