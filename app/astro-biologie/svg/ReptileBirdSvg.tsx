"use client";
// ─── ReptileBirdSvg — Reptile & Bird illustrations ───────────────────────────
// Exports:
//   ReptileAnatomySvg  — reptile body (scales, cold-blooded)
//   BirdAnatomySvg     — bird body (feathers, wings, beak)
//   ReptileVsBirdSvg   — comparison chart (warm vs cold-blooded)
//
// TODO: Replace placeholder SVGs with detailed illustrations

import { memo } from "react";

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
        <linearGradient id="reptileAnatomyBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#92400E" />
          <stop offset="100%" stopColor="#78350f" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#reptileAnatomyBg)" rx="12" />
      {/* TODO: detailed reptile illustration */}
      <text x="120" y="62" textAnchor="middle" fontSize="32">🦎</text>
      <text x="120" y="88" textAnchor="middle" fontSize="9" fontWeight="700" fill="#fde68a">{l.title}</text>
      <text x="120" y="104" textAnchor="middle" fontSize="7" fill="#fde68a" opacity="0.6">{l.scales} · {l.coldBlooded}</text>
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
        <linearGradient id="birdAnatomyBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#92400E" />
          <stop offset="100%" stopColor="#6b3410" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#birdAnatomyBg)" rx="12" />
      {/* TODO: detailed bird illustration */}
      <text x="120" y="62" textAnchor="middle" fontSize="32">🦅</text>
      <text x="120" y="88" textAnchor="middle" fontSize="9" fontWeight="700" fill="#fde68a">{l.title}</text>
      <text x="120" y="104" textAnchor="middle" fontSize="7" fill="#fde68a" opacity="0.6">{l.feathers} · {l.warmBlooded}</text>
    </svg>
  );
});

// ─── REPTILE VS BIRD ──────────────────────────────────────────────────────────

const COMPARE_LABELS: Record<string, Record<string, string>> = {
  en: { title: "Reptiles vs Birds", reptile: "Reptile", bird: "Bird", scales: "Scales", feathers: "Feathers", cold: "Cold-blooded", warm: "Warm-blooded", eggs: "Lay eggs", fly: "Can fly" },
  de: { title: "Reptilien vs Vögel", reptile: "Reptil", bird: "Vogel", scales: "Schuppen", feathers: "Federn", cold: "Kaltblütig", warm: "Warmblütig", eggs: "Legen Eier", fly: "Können fliegen" },
  hu: { title: "Hüllők vs Madarak", reptile: "Hüllő", bird: "Madár", scales: "Pikkelyek", feathers: "Tollak", cold: "Hidegvérű", warm: "Melegvérű", eggs: "Tojásrakó", fly: "Tud repülni" },
  ro: { title: "Reptile vs Păsări", reptile: "Reptilă", bird: "Pasăre", scales: "Solzi", feathers: "Pene", cold: "Cu sânge rece", warm: "Cu sânge cald", eggs: "Depun ouă", fly: "Pot zbura" },
};

export const ReptileVsBirdSvg = memo(function ReptileVsBirdSvg({ lang = "de" }: { lang?: string }) {
  const l = COMPARE_LABELS[lang as keyof typeof COMPARE_LABELS] || COMPARE_LABELS.en;
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <defs>
        <linearGradient id="reptileVsBirdBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#78350f" />
          <stop offset="100%" stopColor="#5c2a0a" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#reptileVsBirdBg)" rx="12" />
      {/* TODO: detailed comparison illustration */}
      <text x="70" y="58" textAnchor="middle" fontSize="28">🦎</text>
      <text x="170" y="58" textAnchor="middle" fontSize="28">🦅</text>
      <text x="70" y="80" textAnchor="middle" fontSize="8" fontWeight="700" fill="#fde68a">{l.reptile}</text>
      <text x="170" y="80" textAnchor="middle" fontSize="8" fontWeight="700" fill="#fde68a">{l.bird}</text>
      <text x="120" y="100" textAnchor="middle" fontSize="8" fontWeight="700" fill="#fde68a">{l.title}</text>
      <text x="70" y="114" textAnchor="middle" fontSize="6" fill="#fde68a" opacity="0.6">{l.cold}</text>
      <text x="170" y="114" textAnchor="middle" fontSize="6" fill="#fde68a" opacity="0.6">{l.warm}</text>
    </svg>
  );
});
