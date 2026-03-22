"use client";
// MammalExplorer — Grade 5 Biology: What Makes a Mammal?
// 5 rounds: R1 (teach features), R2 (teach body parts), R3 (teach diet types),
//           R4 (order vertebrate classes), R5 (quiz with 4 questions)

import React from "react";
import ExplorerEngine from "./ExplorerEngine";
import type { ExplorerDef, MCQQuestion, RoundDef } from "./ExplorerEngine";

// ─────────────────────────────────────────────────────────────────────────────
// SVG Components (no hardcoded text)
// ─────────────────────────────────────────────────────────────────────────────

function SVG_R1(lang: string): React.ReactNode {
  const lb: Record<string, { title: string; feature1: string; feature2: string; feature3: string; feature4: string }> = {
    en: { title: "Mammal Features", feature1: "Fur/Hair", feature2: "Warm-blooded", feature3: "Live birth", feature4: "Milk nursing" },
    de: { title: "Säugetier-Merkmale", feature1: "Fell/Haare", feature2: "Warmblütig", feature3: "Lebendgeburt", feature4: "Milchernährung" },
    hu: { title: "Emlős jellemzői", feature1: "Szőr/Haj", feature2: "Melegvérű", feature3: "Elevenszülés", feature4: "Tejernährung" },
    ro: { title: "Caracteristici ale mamiferelor", feature1: "Blană/Păr", feature2: "Sânge cald", feature3: "Naștere vie", feature4: "Alăptare" },
  };
  const l = lb[lang] || lb.en;

  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <linearGradient id="r1_body" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#D4A574" />
          <stop offset="100%" stopColor="#A67C52" />
        </linearGradient>
        <linearGradient id="r1_bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(100,180,255,0.15)" />
          <stop offset="100%" stopColor="rgba(150,100,200,0.15)" />
        </linearGradient>
        <radialGradient id="r1_eye" cx="40%" cy="40%">
          <stop offset="0%" stopColor="#f0f9ff" />
          <stop offset="100%" stopColor="#e0f2fe" />
        </radialGradient>
      </defs>

      {/* Background */}
      <rect width="240" height="160" fill="url(#r1_bg)" />

      {/* Dog/Wolf body with fur texture */}
      <g>
        {/* Back leg */}
        <path d="M 85 100 Q 80 115 90 125 Q 95 130 100 128 Q 98 115 95 100 Z" fill="url(#r1_body)" stroke="#8B6F47" strokeWidth="1" />
        {/* Front leg */}
        <path d="M 130 100 Q 135 115 130 130 Q 125 133 120 130 Q 120 115 125 100 Z" fill="url(#r1_body)" stroke="#8B6F47" strokeWidth="1" />

        {/* Body */}
        <path d="M 85 80 Q 90 75 110 75 Q 130 75 140 85 Q 145 95 140 105 Q 120 110 95 105 Z" fill="url(#r1_body)" stroke="#8B6F47" strokeWidth="1" />

        {/* Neck */}
        <ellipse cx="105" cy="68" rx="14" ry="12" fill="url(#r1_body)" stroke="#8B6F47" strokeWidth="0.5" />

        {/* Head */}
        <circle cx="115" cy="50" r="16" fill="url(#r1_body)" stroke="#8B6F47" strokeWidth="1" />

        {/* Snout */}
        <ellipse cx="125" cy="58" rx="10" ry="8" fill="#C19A6B" stroke="#8B6F47" strokeWidth="0.5" />

        {/* Nose */}
        <circle cx="130" cy="60" r="2.5" fill="#2C1810" />

        {/* Eyes with anatomy */}
        <circle cx="110" cy="45" r="4" fill="url(#r1_eye)" />
        <circle cx="110" cy="45" r="2.8" fill="#1e3a5f" />
        <circle cx="110" cy="45" r="1.6" fill="#0c1829" />
        <circle cx="110" cy="45" r="2.6" fill="none" stroke="rgba(34,211,238,0.3)" strokeWidth="0.5" />
        <circle cx="111.5" cy="43.5" r="1" fill="white" opacity="0.85" />

        <circle cx="118" cy="42" r="4" fill="url(#r1_eye)" />
        <circle cx="118" cy="42" r="2.8" fill="#1e3a5f" />
        <circle cx="118" cy="42" r="1.6" fill="#0c1829" />
        <circle cx="118" cy="42" r="2.6" fill="none" stroke="rgba(34,211,238,0.3)" strokeWidth="0.5" />
        <circle cx="119.5" cy="40.5" r="1" fill="white" opacity="0.85" />

        {/* Ear */}
        <path d="M 108 32 Q 105 22 110 28 Q 115 32 112 35 Z" fill="#9B7653" stroke="#8B6F47" strokeWidth="0.5" />

        {/* Tail */}
        <path d="M 85 90 Q 70 85 65 75 Q 62 70 65 65" fill="none" stroke="#A67C52" strokeWidth="6" strokeLinecap="round" />

        {/* Fur texture strokes */}
        <g stroke="#8B6F47" strokeWidth="0.8" opacity="0.4" strokeLinecap="round">
          <path d="M 95 80 Q 98 75 100 80" />
          <path d="M 105 78 Q 108 72 110 78" />
          <path d="M 120 80 Q 125 75 130 82" />
        </g>
      </g>

      {/* Feature labels with pointers */}
      <g>
        {/* Fur label - top left */}
        <circle cx="25" cy="35" r="2.5" fill="#10B981" />
        <path d="M 28 35 L 60 35" stroke="#10B981" strokeWidth="1" strokeDasharray="3,2" />
        <rect x="10" y="27" width="30" height="14" rx="7" fill="#10B98133" stroke="#10B981" strokeWidth="1" />
        <text x="25" y="37" fontSize="6" fontWeight="bold" textAnchor="middle" fill="#10B981" fontFamily="system-ui">
          {l.feature1}
        </text>

        {/* Warm-blooded label - top right */}
        <circle cx="215" cy="30" r="2.5" fill="#F59E0B" />
        <path d="M 210 30 L 150 40" stroke="#F59E0B" strokeWidth="1" strokeDasharray="3,2" />
        <rect x="190" y="20" width="50" height="14" rx="7" fill="#F59E0B33" stroke="#F59E0B" strokeWidth="1" />
        <text x="215" y="32" fontSize="6" fontWeight="bold" textAnchor="middle" fill="#F59E0B" fontFamily="system-ui">
          {l.feature2}
        </text>

        {/* Live birth label - bottom left */}
        <circle cx="40" cy="125" r="2.5" fill="#EC4899" />
        <path d="M 45 120 L 75 100" stroke="#EC4899" strokeWidth="1" strokeDasharray="3,2" />
        <rect x="12" y="128" width="56" height="14" rx="7" fill="#EC489933" stroke="#EC4899" strokeWidth="1" />
        <text x="40" y="138" fontSize="6" fontWeight="bold" textAnchor="middle" fill="#EC4899" fontFamily="system-ui">
          {l.feature3}
        </text>

        {/* Milk nursing label - bottom right */}
        <circle cx="200" cy="130" r="2.5" fill="#06B6D4" />
        <path d="M 195 125 L 155 95" stroke="#06B6D4" strokeWidth="1" strokeDasharray="3,2" />
        <rect x="168" y="128" width="64" height="14" rx="7" fill="#06B6D433" stroke="#06B6D4" strokeWidth="1" />
        <text x="200" y="138" fontSize="6" fontWeight="bold" textAnchor="middle" fill="#06B6D4" fontFamily="system-ui">
          {l.feature4}
        </text>
      </g>
    </svg>
  );
}

function SVG_R2(lang: string): React.ReactNode {
  const lb: Record<string, { lungs: string; heart: string; incisors: string; molars: string; diaphragm: string }> = {
    en: { lungs: "Lungs", heart: "4-chamber Heart", incisors: "Sharp Incisors", molars: "Grinding Molars", diaphragm: "Diaphragm" },
    de: { lungs: "Lungen", heart: "4-Kammer-Herz", incisors: "Scharfe Schneidezähne", molars: "Mahlzähne", diaphragm: "Zwerchfell" },
    hu: { lungs: "Tüdő", heart: "4 kamrás szív", incisors: "Éles metszőfogak", molars: "Rágófogak", diaphragm: "Rekeszizom" },
    ro: { lungs: "Plămâni", heart: "Inimă cu 4 camere", incisors: "Incisivi ascuți", molars: "Molari de măcinat", diaphragm: "Diafragmă" },
  };
  const l = lb[lang] || lb.en;

  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <linearGradient id="r2_body" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E8C4A0" />
          <stop offset="100%" stopColor="#D4A880" />
        </linearGradient>
        <linearGradient id="r2_bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(150,150,255,0.15)" />
          <stop offset="100%" stopColor="rgba(200,100,150,0.15)" />
        </linearGradient>
      </defs>

      <rect width="240" height="160" fill="url(#r2_bg)" />

      {/* Body outline */}
      <ellipse cx="85" cy="85" rx="25" ry="35" fill="url(#r2_body)" stroke="#8B6F47" strokeWidth="1.5" />

      {/* Lungs (left & right) */}
      <g>
        <ellipse cx="65" cy="75" rx="8" ry="18" fill="#FF6B9D" opacity="0.8" stroke="#FF1493" strokeWidth="0.8" />
        <ellipse cx="105" cy="75" rx="8" ry="18" fill="#FF6B9D" opacity="0.8" stroke="#FF1493" strokeWidth="0.8" />
        <text x="55" y="75" fontSize="8" fontWeight="bold" textAnchor="middle" fill="#FF1493" fontFamily="system-ui">
          {l.lungs}
        </text>
      </g>

      {/* Heart */}
      <g>
        <circle cx="85" cy="95" r="10" fill="#FF4757" stroke="#C2185B" strokeWidth="0.8" />
        {/* Heart chambers hint */}
        <line x1="80" y1="90" x2="90" y2="90" stroke="#FFE5E5" strokeWidth="1.5" />
        <line x1="80" y1="100" x2="90" y2="100" stroke="#FFE5E5" strokeWidth="1.5" />
        <text x="85" y="98" fontSize="7" fontWeight="bold" textAnchor="middle" fill="white" fontFamily="system-ui">
          ❤
        </text>
      </g>

      {/* Teeth diagram */}
      <g>
        {/* Incisors (sharp, small) */}
        <g>
          <rect x="30" y="125" width="4" height="12" rx="1" fill="#FFD700" stroke="#FFA500" strokeWidth="0.5" />
          <rect x="37" y="125" width="4" height="12" rx="1" fill="#FFD700" stroke="#FFA500" strokeWidth="0.5" />
          <rect x="8" y="137" width="56" height="12" rx="5" fill="#FFA50022" stroke="#FFA500" strokeWidth="0.8" />
          <text x="36" y="146" fontSize="5" fontWeight="bold" textAnchor="middle" fill="#FFA500" fontFamily="system-ui">
            {l.incisors}
          </text>
        </g>

        {/* Molars (flat, large) */}
        <g>
          <rect x="110" y="125" width="6" height="10" rx="1" fill="#90EE90" stroke="#228B22" strokeWidth="0.5" />
          <rect x="120" y="125" width="6" height="10" rx="1" fill="#90EE90" stroke="#228B22" strokeWidth="0.5" />
          <rect x="98" y="137" width="40" height="12" rx="5" fill="#228B2222" stroke="#228B22" strokeWidth="0.8" />
          <text x="118" y="146" fontSize="5" fontWeight="bold" textAnchor="middle" fill="#228B22" fontFamily="system-ui">
            {l.molars}
          </text>
        </g>
      </g>

      {/* Diaphragm line */}
      <g>
        <path d="M 50 110 Q 85 125 120 110" fill="none" stroke="#06B6D4" strokeWidth="2" strokeDasharray="4,2" />
        <rect x="125" y="108" width="50" height="12" rx="5" fill="#06B6D433" stroke="#06B6D4" strokeWidth="0.8" />
        <text x="150" y="117" fontSize="5" fontWeight="bold" textAnchor="middle" fill="#06B6D4" fontFamily="system-ui">
          {l.diaphragm}
        </text>
      </g>

      {/* Label frame */}
      <rect x="145" y="50" width="85" height="80" rx="8" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      <text x="187" y="67" fontSize="10" fontWeight="bold" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontFamily="system-ui">
        Mammal Body Systems
      </text>
      <text x="187" y="95" fontSize="7" fill="rgba(255,255,255,0.6)" fontFamily="system-ui" textAnchor="middle">
        • Lungs for breathing
      </text>
      <text x="187" y="107" fontSize="7" fill="rgba(255,255,255,0.6)" fontFamily="system-ui" textAnchor="middle">
        • Powerful heart
      </text>
      <text x="187" y="119" fontSize="7" fill="rgba(255,255,255,0.6)" fontFamily="system-ui" textAnchor="middle">
        • Specialized teeth
      </text>
    </svg>
  );
}

function SVG_R3(lang: string): React.ReactNode {
  const lb: Record<string, { herbivore: string; carnivore: string; omnivore: string; example: string }> = {
    en: { herbivore: "Herbivore", carnivore: "Carnivore", omnivore: "Omnivore", example: "Examples" },
    de: { herbivore: "Pflanzenfresser", carnivore: "Fleischfresser", omnivore: "Allesfresser", example: "Beispiele" },
    hu: { herbivore: "Növényevő", carnivore: "Húsevő", omnivore: "Mindenevő", example: "Példák" },
    ro: { herbivore: "Erbivor", carnivore: "Carnivor", omnivore: "Omnivor", example: "Exemple" },
  };
  const l = lb[lang] || lb.en;

  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <linearGradient id="r3_herb" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#90EE90" />
          <stop offset="100%" stopColor="#228B22" />
        </linearGradient>
        <linearGradient id="r3_carn" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF6B6B" />
          <stop offset="100%" stopColor="#C2185B" />
        </linearGradient>
        <linearGradient id="r3_omni" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFB347" />
          <stop offset="100%" stopColor="#FF6347" />
        </linearGradient>
      </defs>

      {/* Three panels */}

      {/* Panel 1: Herbivore (Cow/Rabbit) */}
      <g>
        <rect x="8" y="10" width="70" height="145" rx="6" fill="url(#r3_herb)" opacity="0.2" stroke="#228B22" strokeWidth="1.5" />
        <text x="43" y="28" fontSize="7" fontWeight="bold" textAnchor="middle" fill="#228B22" fontFamily="system-ui">
          {l.herbivore}
        </text>

        {/* Simple rabbit/cow head */}
        <circle cx="43" cy="55" r="12" fill="#D4A574" stroke="#8B6F47" strokeWidth="1" />
        <circle cx="35" cy="48" r="4" fill="#D4A574" stroke="#8B6F47" strokeWidth="0.8" />
        <circle cx="51" cy="48" r="4" fill="#D4A574" stroke="#8B6F47" strokeWidth="0.8" />
        {/* Mouth */}
        <path d="M 43 62 Q 40 65 43 67 Q 46 65 43 62" fill="#FFB6C1" stroke="#8B6F47" strokeWidth="0.5" />

        {/* Grass below */}
        <g stroke="#228B22" strokeWidth="1.5" strokeLinecap="round" opacity="0.7">
          <path d="M 25 80 Q 28 70 30 80" />
          <path d="M 35 82 Q 38 70 40 82" />
          <path d="M 50 81 Q 53 71 55 81" />
          <path d="M 60 80 Q 63 72 65 80" />
        </g>

        <text x="43" y="105" fontSize="8" textAnchor="middle" fill="#228B22" fontFamily="system-ui">
          🐰 🐄
        </text>
      </g>

      {/* Panel 2: Carnivore (Wolf/Lion) */}
      <g>
        <rect x="85" y="10" width="70" height="145" rx="6" fill="url(#r3_carn)" opacity="0.2" stroke="#C2185B" strokeWidth="1.5" />
        <text x="120" y="28" fontSize="7" fontWeight="bold" textAnchor="middle" fill="#C2185B" fontFamily="system-ui">
          {l.carnivore}
        </text>

        {/* Sharp wolf/lion head */}
        <circle cx="120" cy="55" r="12" fill="#D4A574" stroke="#8B6F47" strokeWidth="1" />
        {/* Pointed ears */}
        <path d="M 110 42 Q 108 35 112 42 Z" fill="#D4A574" stroke="#8B6F47" strokeWidth="0.8" />
        <path d="M 130 42 Q 132 35 128 42 Z" fill="#D4A574" stroke="#8B6F47" strokeWidth="0.8" />
        {/* Sharp teeth hint */}
        <line x1="115" y1="63" x2="115" y2="68" stroke="#FF6B6B" strokeWidth="1.5" />
        <line x1="120" y1="64" x2="120" y2="69" stroke="#FF6B6B" strokeWidth="1.5" />
        <line x1="125" y1="63" x2="125" y2="68" stroke="#FF6B6B" strokeWidth="1.5" />

        {/* Meat below */}
        <g opacity="0.8">
          <circle cx="110" cy="85" r="3" fill="#FF6B6B" stroke="#C2185B" strokeWidth="0.5" />
          <circle cx="120" cy="88" r="3" fill="#FF6B6B" stroke="#C2185B" strokeWidth="0.5" />
          <circle cx="130" cy="86" r="3" fill="#FF6B6B" stroke="#C2185B" strokeWidth="0.5" />
        </g>

        <text x="120" y="105" fontSize="8" textAnchor="middle" fill="#C2185B" fontFamily="system-ui">
          🐺 🦁
        </text>
      </g>

      {/* Panel 3: Omnivore (Bear/Human) */}
      <g>
        <rect x="162" y="10" width="70" height="145" rx="6" fill="url(#r3_omni)" opacity="0.2" stroke="#FF6347" strokeWidth="1.5" />
        <text x="197" y="28" fontSize="7" fontWeight="bold" textAnchor="middle" fill="#FF6347" fontFamily="system-ui">
          {l.omnivore}
        </text>

        {/* Bear head */}
        <circle cx="197" cy="55" r="12" fill="#8B4513" stroke="#654321" strokeWidth="1" />
        <circle cx="191" cy="48" r="3" fill="#8B4513" stroke="#654321" strokeWidth="0.8" />
        <circle cx="203" cy="48" r="3" fill="#8B4513" stroke="#654321" strokeWidth="0.8" />
        <circle cx="197" cy="64" r="3" fill="#4A4A4A" stroke="#654321" strokeWidth="0.5" />

        {/* Mixed food below */}
        <g opacity="0.8">
          {/* Plants */}
          <path d="M 185 82 Q 188 72 190 82" stroke="#228B22" strokeWidth="1.5" />
          {/* Meat */}
          <circle cx="197" cy="85" r="2.5" fill="#FF6B6B" />
          {/* Fish */}
          <path d="M 205 80 Q 208 75 210 80" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" />
        </g>

        <text x="197" y="105" fontSize="8" textAnchor="middle" fill="#FF6347" fontFamily="system-ui">
          🐻 👤
        </text>
      </g>
    </svg>
  );
}

function SVG_R4(lang: string): React.ReactNode {
  const lb: Record<string, { fish: string; amphibian: string; reptile: string; bird: string; mammal: string; evolution: string }> = {
    en: { fish: "Fish", amphibian: "Amphibian", reptile: "Reptile", bird: "Bird", mammal: "Mammal", evolution: "Evolution Timeline" },
    de: { fish: "Fische", amphibian: "Lurch", reptile: "Reptil", bird: "Vogel", mammal: "Säugetier", evolution: "Evolutionszeitlinie" },
    hu: { fish: "Halak", amphibian: "Kétéltűek", reptile: "Hüllők", bird: "Madarak", mammal: "Emlősök", evolution: "Evolúciós folyamat" },
    ro: { fish: "Pești", amphibian: "Amfibieni", reptile: "Reptile", bird: "Păsări", mammal: "Mamifere", evolution: "Linia de evoluție" },
  };
  const l = lb[lang] || lb.en;

  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <linearGradient id="r4_bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(100,150,255,0.15)" />
          <stop offset="100%" stopColor="rgba(200,150,100,0.15)" />
        </linearGradient>
      </defs>

      <rect width="240" height="160" fill="url(#r4_bg)" />

      {/* Timeline header */}
      <text x="120" y="20" fontSize="11" fontWeight="bold" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontFamily="system-ui">
        {l.evolution}
      </text>

      {/* Timeline path */}
      <path d="M 20 50 L 220 50" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />

      {/* 5 vertebrate classes on timeline */}
      <g>
        {/* Fish */}
        <circle cx="30" cy="50" r="6" fill="#3B82F6" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
        <text x="30" y="75" fontSize="7" fontWeight="bold" textAnchor="middle" fill="#3B82F6" fontFamily="system-ui">
          🐟
        </text>
        <text x="30" y="90" fontSize="7" fontWeight="bold" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontFamily="system-ui">
          {l.fish}
        </text>
        <text x="30" y="105" fontSize="6" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontFamily="system-ui">
          Gills, scales
        </text>

        {/* Amphibian */}
        <circle cx="70" cy="50" r="6" fill="#10B981" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
        <text x="70" y="75" fontSize="7" fontWeight="bold" textAnchor="middle" fill="#10B981" fontFamily="system-ui">
          🐸
        </text>
        <text x="70" y="90" fontSize="7" fontWeight="bold" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontFamily="system-ui">
          {l.amphibian}
        </text>
        <text x="70" y="105" fontSize="6" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontFamily="system-ui">
          2 lives
        </text>

        {/* Reptile */}
        <circle cx="110" cy="50" r="6" fill="#F59E0B" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
        <text x="110" y="75" fontSize="7" fontWeight="bold" textAnchor="middle" fill="#F59E0B" fontFamily="system-ui">
          🦎
        </text>
        <text x="110" y="90" fontSize="7" fontWeight="bold" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontFamily="system-ui">
          {l.reptile}
        </text>
        <text x="110" y="105" fontSize="6" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontFamily="system-ui">
          Scales, eggs
        </text>

        {/* Bird */}
        <circle cx="150" cy="50" r="6" fill="#EC4899" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
        <text x="150" y="75" fontSize="7" fontWeight="bold" textAnchor="middle" fill="#EC4899" fontFamily="system-ui">
          🐦
        </text>
        <text x="150" y="90" fontSize="7" fontWeight="bold" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontFamily="system-ui">
          {l.bird}
        </text>
        <text x="150" y="105" fontSize="6" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontFamily="system-ui">
          Feathers, warm
        </text>

        {/* Mammal */}
        <circle cx="190" cy="50" r="6" fill="#06B6D4" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
        <text x="190" y="75" fontSize="7" fontWeight="bold" textAnchor="middle" fill="#06B6D4" fontFamily="system-ui">
          🐾
        </text>
        <text x="190" y="90" fontSize="7" fontWeight="bold" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontFamily="system-ui">
          {l.mammal}
        </text>
        <text x="190" y="105" fontSize="6" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontFamily="system-ui">
          Fur, live young
        </text>
      </g>

      {/* Progression arrows */}
      <g fill="rgba(255,255,255,0.4)">
        <text x="50" y="135" fontSize="14" textAnchor="middle" fontFamily="system-ui">
          →
        </text>
        <text x="90" y="135" fontSize="14" textAnchor="middle" fontFamily="system-ui">
          →
        </text>
        <text x="130" y="135" fontSize="14" textAnchor="middle" fontFamily="system-ui">
          →
        </text>
        <text x="170" y="135" fontSize="14" textAnchor="middle" fontFamily="system-ui">
          →
        </text>
      </g>
    </svg>
  );
}

function SVG_R5(lang: string): React.ReactNode {
  const lb: Record<string, { mammals: string; feat1: string; feat2: string; feat3: string; others: string; note: string }> = {
    en: { mammals: "MAMMALS", feat1: "✓ Fur/Hair", feat2: "✓ Warm-blooded", feat3: "✓ Live birth", others: "OTHERS", note: "May have: scales, feathers, eggs..." },
    de: { mammals: "SÄUGETIERE", feat1: "✓ Fell/Haare", feat2: "✓ Warmblütig", feat3: "✓ Lebendgeburt", others: "ANDERE", note: "Können haben: Schuppen, Federn, Eier..." },
    hu: { mammals: "EMLŐSÖK", feat1: "✓ Szőr/Haj", feat2: "✓ Melegvérű", feat3: "✓ Elevenszülés", others: "MÁSOK", note: "Lehetnek: pikkelyek, tollak, tojások..." },
    ro: { mammals: "MAMIFERE", feat1: "✓ Blană/Păr", feat2: "✓ Sânge cald", feat3: "✓ Naștere vie", others: "ALTELE", note: "Pot avea: solzi, pene, ouă..." },
  };
  const l = lb[lang] || lb.en;

  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <linearGradient id="r5_mam" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(6,182,212,0.3)" />
          <stop offset="100%" stopColor="rgba(6,182,212,0.1)" />
        </linearGradient>
        <linearGradient id="r5_other" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(156,163,175,0.3)" />
          <stop offset="100%" stopColor="rgba(156,163,175,0.1)" />
        </linearGradient>
      </defs>

      {/* Left column: Mammals */}
      <g>
        <rect x="8" y="10" width="105" height="140" rx="8" fill="url(#r5_mam)" stroke="#06B6D4" strokeWidth="2" />
        <text x="60" y="32" fontSize="8" fontWeight="black" textAnchor="middle" fill="#06B6D4" fontFamily="system-ui">
          {l.mammals}
        </text>

        {/* Features list */}
        <text x="18" y="55" fontSize="5.5" fontWeight="bold" fill="#06B6D4" fontFamily="system-ui">
          {l.feat1}
        </text>
        <text x="18" y="72" fontSize="5.5" fontWeight="bold" fill="#06B6D4" fontFamily="system-ui">
          {l.feat2}
        </text>
        <text x="18" y="89" fontSize="5.5" fontWeight="bold" fill="#06B6D4" fontFamily="system-ui">
          {l.feat3}
        </text>

        {/* Animals */}
        <text x="60" y="115" fontSize="9" fontWeight="bold" textAnchor="middle" fill="#06B6D4" fontFamily="system-ui">
          🐾 🦁 🐶 🐻 🦇 🐳
        </text>
      </g>

      {/* Right column: Others */}
      <g>
        <rect x="127" y="10" width="105" height="140" rx="8" fill="url(#r5_other)" stroke="#9CA3AF" strokeWidth="2" strokeDasharray="4,3" />
        <text x="179" y="32" fontSize="8" fontWeight="black" textAnchor="middle" fill="#9CA3AF" fontFamily="system-ui">
          {l.others}
        </text>

        {/* Note */}
        <text x="179" y="55" fontSize="7" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontFamily="system-ui">
          {l.note}
        </text>

        {/* Animals */}
        <text x="179" y="85" fontSize="8" fontWeight="bold" textAnchor="middle" fill="#9CA3AF" fontFamily="system-ui">
          Fish: 🐟
        </text>
        <text x="179" y="102" fontSize="8" fontWeight="bold" textAnchor="middle" fill="#9CA3AF" fontFamily="system-ui">
          Birds: 🐦
        </text>
        <text x="179" y="119" fontSize="8" fontWeight="bold" textAnchor="middle" fill="#9CA3AF" fontFamily="system-ui">
          Reptiles: 🦎
        </text>
      </g>
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Content Definition
// ─────────────────────────────────────────────────────────────────────────────

const LABELS: ExplorerDef["labels"] = {
  en: {
    // Rounds
    r1_title: "What Makes a Mammal?",
    r1_text: "Mammals have unique features that set them apart from all other animals. Let's explore what makes them special!",
    r1_fact1: "All mammals have fur or hair on their bodies",
    r1_fact2: "Mammals are warm-blooded — they keep their body warm from inside",
    r1_fact3: "Most mammals give birth to live young, not eggs",
    r1_fact4: "Mothers feed their babies with milk",

    r2_title: "Mammal Body Systems",
    r2_text: "Inside every mammal, there are special body systems that help them survive and thrive.",
    r2_fact1: "Lungs let mammals breathe air anywhere",
    r2_fact2: "A 4-chamber heart pumps blood efficiently",
    r2_fact3: "Different teeth for different jobs — sharp ones for tearing, flat ones for grinding",
    r2_fact4: "A diaphragm muscle helps with breathing",

    r3_title: "What Do Mammals Eat?",
    r3_text: "Mammals have different diets! Some eat only plants, some eat only meat, and some eat both. Their teeth match their diet!",
    r3_fact1: "Herbivores eat only plants — like cows and rabbits",
    r3_fact2: "Carnivores eat only meat — like wolves and lions",
    r3_fact3: "Omnivores eat both plants and meat — like bears and humans",

    r4_title: "The Five Vertebrate Classes",
    r4_text: "Mammals are just ONE group of vertebrates! Let's see how they fit in with fish, amphibians, reptiles, and birds.",
    r4_hint: "Tap the classes in order from simplest to most advanced.",
    r4_fact1: "Fish came first — they have gills and scales",
    r4_fact2: "Amphibians can live on land and in water",
    r4_fact3: "Reptiles have scales and lay eggs",
    r4_fact4: "Birds have feathers and are warm-blooded",
    r4_fact5: "Mammals are the most advanced — with fur and milk nursing",

    r5_title: "Mammal Quiz!",
    r5_text: "Now test what you've learned about mammals!",

    // Quiz questions (R1)
    q_r1_1: "Which feature do ALL mammals have that fish don't?",
    q_r1_1_a: "Fur or hair",
    q_r1_1_b: "Scales",
    q_r1_1_c: "Gills",
    q_r1_1_d: "Feathers",

    q_r1_2: "How do mammals stay warm differently from reptiles?",
    q_r1_2_a: "They sit in the sun",
    q_r1_2_b: "They generate heat from inside their bodies",
    q_r1_2_c: "They have thicker fur",
    q_r1_2_d: "They migrate to warm places",

    q_r1_3: "What is the biggest difference between mammals and birds?",
    q_r1_3_a: "Mammals have fur; birds have feathers",
    q_r1_3_b: "Mammals lay eggs; birds don't",
    q_r1_3_c: "Mammals are cold-blooded; birds are warm-blooded",
    q_r1_3_d: "Mammals don't have hearts; birds do",

    // Quiz questions (R2)
    q_r2_1: "Why do mammals have different types of teeth?",
    q_r2_1_a: "For beauty",
    q_r2_1_b: "For different jobs — tearing, grinding, crushing",
    q_r2_1_c: "They just grow randomly",
    q_r2_1_d: "To make noise",

    q_r2_2: "What do mammal lungs do?",
    q_r2_2_a: "Make food",
    q_r2_2_b: "Pump blood",
    q_r2_2_c: "Breathe air",
    q_r2_2_d: "Store energy",

    // Quiz questions (R3)
    q_r3_1: "A rabbit eats only grass and vegetables. What type is it?",
    q_r3_1_a: "Carnivore",
    q_r3_1_b: "Omnivore",
    q_r3_1_c: "Herbivore",
    q_r3_1_d: "Insectivore",

    q_r3_2: "A wolf hunts and eats only meat. What type is it?",
    q_r3_2_a: "Herbivore",
    q_r3_2_b: "Omnivore",
    q_r3_2_c: "Carnivore",
    q_r3_2_d: "Frugivore",

    q_r3_3: "A bear eats fish AND berries. What type is it?",
    q_r3_3_a: "Carnivore",
    q_r3_3_b: "Omnivore",
    q_r3_3_c: "Herbivore",
    q_r3_3_d: "Piscivore",

    // Order questions (R4)
    fish_cls: "Fish 🐟",
    amphibian_cls: "Amphibian 🐸",
    reptile_cls: "Reptile 🦎",
    bird_cls: "Bird 🐦",
    mammal_cls: "Mammal 🐾",

    // Quiz questions (R5)
    q_r5_1: "Is a whale a mammal?",
    q_r5_1_a: "Yes, it has fur, warm blood, and nurses young",
    q_r5_1_b: "No, it lives in water so it must be a fish",

    q_r5_2: "Is a platypus a mammal even though it lays eggs?",
    q_r5_2_a: "Yes, it has fur and is warm-blooded",
    q_r5_2_b: "No, mammals don't lay eggs",

    q_r5_3: "Is a bat a mammal?",
    q_r5_3_a: "No, it flies like a bird",
    q_r5_3_b: "Yes, it has fur, is warm-blooded, and nurses young",

    q_r5_4: "Is a shark a mammal?",
    q_r5_4_a: "Yes, because it's big and intelligent",
    q_r5_4_b: "No, it has gills, scales, and is cold-blooded",
  },

  de: {
    r1_title: "Was macht ein Säugetier aus?",
    r1_text: "Säugetiere haben einzigartige Merkmale, die sie von allen anderen Tieren unterscheiden. Lass uns erforschen, was sie besonders macht!",
    r1_fact1: "Alle Säugetiere haben Fell oder Haare auf ihrem Körper",
    r1_fact2: "Säugetiere sind warmblütig — sie erzeugen Wärme von innen",
    r1_fact3: "Die meisten Säugetiere bekommen lebende Junge, keine Eier",
    r1_fact4: "Mütter füttern ihre Babys mit Milch",

    r2_title: "Körpersysteme von Säugetieren",
    r2_text: "In jedem Säugetier gibt es spezielle Systeme, die ihm helfen zu überleben.",
    r2_fact1: "Lungen ermöglichen Säugetieren, überall Luft zu atmen",
    r2_fact2: "Ein 4-Kammer-Herz pumpt Blut effizient",
    r2_fact3: "Verschiedene Zähne für verschiedene Aufgaben",
    r2_fact4: "Ein Zwerchfell hilft beim Atmen",

    r3_title: "Was fressen Säugetiere?",
    r3_text: "Säugetiere haben unterschiedliche Diäten! Manche essen nur Pflanzen, manche nur Fleisch, manche beides.",
    r3_fact1: "Pflanzenfresser essen nur Pflanzen — wie Kühe und Kaninchen",
    r3_fact2: "Fleischfresser essen nur Fleisch — wie Wölfe und Löwen",
    r3_fact3: "Allesfresser essen Pflanzen UND Fleisch — wie Bären und Menschen",

    r4_title: "Die fünf Wirbeltierklas­sen",
    r4_text: "Säugetiere sind nur EINE Gruppe von Wirbeltieren! Lass uns sehen, wie sie mit Fischen, Amphibien, Reptilien und Vögeln passen.",
    r4_hint: "Tippe die Klassen in Reihenfolge an, von einfach zu fortgeschrittener.",
    r4_fact1: "Fische kamen zuerst — sie haben Kiemen und Schuppen",
    r4_fact2: "Amphibien können an Land und im Wasser leben",
    r4_fact3: "Reptilien haben Schuppen und legen Eier",
    r4_fact4: "Vögel haben Federn und sind warmblütig",
    r4_fact5: "Säugetiere sind am weitesten entwickelt — mit Fell und Milchernährung",

    r5_title: "Säugetier-Quiz!",
    r5_text: "Teste jetzt dein Wissen über Säugetiere!",

    q_r1_1: "Welches Merkmal haben ALLE Säugetiere, das Fische nicht haben?",
    q_r1_1_a: "Fell oder Haare",
    q_r1_1_b: "Schuppen",
    q_r1_1_c: "Kiemen",
    q_r1_1_d: "Federn",

    q_r1_2: "Wie halten Säugetiere sich warm, anders als Reptilien?",
    q_r1_2_a: "Sie sitzen in der Sonne",
    q_r1_2_b: "Sie erzeugen Wärme von innen",
    q_r1_2_c: "Sie haben dickeres Fell",
    q_r1_2_d: "Sie wandern in warme Orte",

    q_r1_3: "Was ist der größte Unterschied zwischen Säugetieren und Vögeln?",
    q_r1_3_a: "Säugetiere haben Fell; Vögel haben Federn",
    q_r1_3_b: "Säugetiere legen Eier; Vögel nicht",
    q_r1_3_c: "Säugetiere sind kaltblütig; Vögel warmblütig",
    q_r1_3_d: "Säugetiere haben keine Herzen; Vögel haben welche",

    q_r2_1: "Warum haben Säugetiere verschiedene Zahntypen?",
    q_r2_1_a: "Zur Schönheit",
    q_r2_1_b: "Für verschiedene Aufgaben",
    q_r2_1_c: "Sie wachsen zufällig",
    q_r2_1_d: "Um Lärm zu machen",

    q_r2_2: "Was tun Säugetierlungen?",
    q_r2_2_a: "Machen Nahrung",
    q_r2_2_b: "Pumpen Blut",
    q_r2_2_c: "Atmen Luft",
    q_r2_2_d: "Speichern Energie",

    q_r3_1: "Ein Kaninchen isst nur Gras und Gemüse. Was ist es?",
    q_r3_1_a: "Fleischfresser",
    q_r3_1_b: "Allesfresser",
    q_r3_1_c: "Pflanzenfresser",
    q_r3_1_d: "Insektenfresser",

    q_r3_2: "Ein Wolf jagt und isst nur Fleisch. Was ist er?",
    q_r3_2_a: "Pflanzenfresser",
    q_r3_2_b: "Allesfresser",
    q_r3_2_c: "Fleischfresser",
    q_r3_2_d: "Fruchtfresser",

    q_r3_3: "Ein Bär isst Fisch UND Beeren. Was ist er?",
    q_r3_3_a: "Fleischfresser",
    q_r3_3_b: "Allesfresser",
    q_r3_3_c: "Pflanzenfresser",
    q_r3_3_d: "Fischfresser",

    fish_cls: "Fisch 🐟",
    amphibian_cls: "Amphibie 🐸",
    reptile_cls: "Reptil 🦎",
    bird_cls: "Vogel 🐦",
    mammal_cls: "Säugetier 🐾",

    q_r5_1: "Ist ein Wal ein Säugetier?",
    q_r5_1_a: "Ja, es hat Fell, warmblütiges Blut und säugt Junge",
    q_r5_1_b: "Nein, es lebt im Wasser, muss also ein Fisch sein",

    q_r5_2: "Ist ein Schnabeltier ein Säugetier, obwohl es Eier legt?",
    q_r5_2_a: "Ja, es hat Fell und ist warmblütig",
    q_r5_2_b: "Nein, Säugetiere legen keine Eier",

    q_r5_3: "Ist eine Fledermaus ein Säugetier?",
    q_r5_3_a: "Nein, sie fliegt wie ein Vogel",
    q_r5_3_b: "Ja, sie hat Fell, ist warmblütig und säugt Junge",

    q_r5_4: "Ist ein Hai ein Säugetier?",
    q_r5_4_a: "Ja, weil es groß und intelligent ist",
    q_r5_4_b: "Nein, es hat Kiemen, Schuppen und ist kaltblütig",
  },

  hu: {
    r1_title: "Mi tesz valakit emlőssé?",
    r1_text: "Az emlősök egyedi jellemzőkkel rendelkeznek, amelyek megkülönböztetik őket az összes többi állattól.",
    r1_fact1: "Minden emlősnek van szőre vagy haja",
    r1_fact2: "Az emlősök melegvérűek — belülről termelnek hőt",
    r1_fact3: "A legtöbb emlős elevenen szüli meg fiait, nem tojásként",
    r1_fact4: "Az anyák tejjel táplálják kicsinyeiket",

    r2_title: "Az emlős test rendszerei",
    r2_text: "Minden emlősten belül vannak speciális rendszerek, amelyek segítenek túlélni.",
    r2_fact1: "A tüdő lehetővé teszi az emlősöknek, hogy bárhol lélegezzenek",
    r2_fact2: "Egy 4 kamrás szív hatékonyan pumpálja a vért",
    r2_fact3: "Különböző fogak különböző feladatokhoz",
    r2_fact4: "A rekeszizom segít a légzésben",

    r3_title: "Mit esznek az emlősök?",
    r3_text: "Az emlősöknek különböző étrendjük van! Vannak, akik csak növényt, mások csak húst, megint mások mindkettőt esznek.",
    r3_fact1: "A növényevők csak növényt esznek — például tehenek és nyulak",
    r3_fact2: "A húsevők csak húst esznek — például farkasok és oroszlánok",
    r3_fact3: "A mindenevők növényeket ÉS húst esznek — például medvék és emberek",

    r4_title: "Az öt gerinces osztály",
    r4_text: "Az emlősök csak EGY csoportja a gerinceseknek! Lássuk, hogyan illeszkednek a halakhoz, kétéltűekhez, hüllőkhöz és madarakhoz.",
    r4_hint: "Érintsd meg az osztályokat sorban, az egyszerűtől a fejlettebbig.",
    r4_fact1: "A halak jöttek először — kopoltyújuk és pikkelyük van",
    r4_fact2: "A kétéltűek szárazföldön és vízben élhetnek",
    r4_fact3: "A hüllőknek pikkelyük van és tojást raknak",
    r4_fact4: "A madarak tollat és meleg vért viselnek",
    r4_fact5: "Az emlősök a legfejlettebbek — szőrrel és tejjel táplálnak",

    r5_title: "Emlős kvíz!",
    r5_text: "Most teszteld tudásodat az emlősökről!",

    q_r1_1: "Melyik jellemző van meg MINDEN emlősnél, amit a halaknak nincs?",
    q_r1_1_a: "Szőr vagy haj",
    q_r1_1_b: "Pikkelyek",
    q_r1_1_c: "Kopoltyúk",
    q_r1_1_d: "Tollak",

    q_r1_2: "Hogyan maradnak melegedések az emlősök, másképpen, mint a hüllők?",
    q_r1_2_a: "A napban ülnek",
    q_r1_2_b: "Belülről termelnek hőt",
    q_r1_2_c: "Vastagabb szőrük van",
    q_r1_2_d: "Meleg helyekre vándorolnak",

    q_r1_3: "Mi a legnagyobb különbség az emlősök és madarak között?",
    q_r1_3_a: "Az emlősöknek szőrük van; a madaraknak tolluk",
    q_r1_3_b: "Az emlősök tojást raknak; a madarak nem",
    q_r1_3_c: "Az emlősök hidegvérűek; a madarak melegvérűek",
    q_r1_3_d: "Az emlősöknek nincs szívük; a madaraknak van",

    q_r2_1: "Miért van különböző fogak az emlősöknek?",
    q_r2_1_a: "A szépségért",
    q_r2_1_b: "Különböző feladatokhoz",
    q_r2_1_c: "Véletlenül nőnek",
    q_r2_1_d: "Zajkészítéshez",

    q_r2_2: "Mit csinál az emlős tüdő?",
    q_r2_2_a: "Táplálékvá alakítja",
    q_r2_2_b: "Pumpa vérét",
    q_r2_2_c: "Levegőt lélegzik",
    q_r2_2_d: "Energiát tárol",

    q_r3_1: "A nyúl csak füvet és zöldséget eszik. Mi az?",
    q_r3_1_a: "Húsevő",
    q_r3_1_b: "Mindenevő",
    q_r3_1_c: "Növényevő",
    q_r3_1_d: "Rovarévő",

    q_r3_2: "A farkas vadászik és csak húst eszik. Mi az?",
    q_r3_2_a: "Növényevő",
    q_r3_2_b: "Mindenevő",
    q_r3_2_c: "Húsevő",
    q_r3_2_d: "Gyümölcsevő",

    q_r3_3: "A medve halat ÉS bogyót eszik. Mi az?",
    q_r3_3_a: "Húsevő",
    q_r3_3_b: "Mindenevő",
    q_r3_3_c: "Növényevő",
    q_r3_3_d: "Halészeti",

    fish_cls: "Hal 🐟",
    amphibian_cls: "Kétéltű 🐸",
    reptile_cls: "Hüllő 🦎",
    bird_cls: "Madár 🐦",
    mammal_cls: "Emlős 🐾",

    q_r5_1: "Egy bálna emlős?",
    q_r5_1_a: "Igen, szőre van, melegvérű és szoptató",
    q_r5_1_b: "Nem, vízben él, így halnak kell lennie",

    q_r5_2: "Egy kacsacsőrű emlős, még ha tojást rak is?",
    q_r5_2_a: "Igen, szőrös és melegvérű",
    q_r5_2_b: "Nem, az emlősök nem raknak tojást",

    q_r5_3: "Egy denevér emlős?",
    q_r5_3_a: "Nem, repül, mint egy madár",
    q_r5_3_b: "Igen, szőrös, melegvérű és szoptató",

    q_r5_4: "Egy cápa emlős?",
    q_r5_4_a: "Igen, mert nagy és intelligens",
    q_r5_4_b: "Nem, kopoltyúja, pikkelye és hidegvérű",
  },

  ro: {
    r1_title: "Ce face un mamifer?",
    r1_text: "Mamiferele au caracteristici unice care le deosebesc de toate celelalte animale.",
    r1_fact1: "Toți mamiferele au blană sau păr",
    r1_fact2: "Mamiferele au sânge cald — generează căldură din interior",
    r1_fact3: "Cei mai mulți mamiferi nasc pui vii, nu ouă",
    r1_fact4: "Mamele hrănesc puii lor cu lapte",

    r2_title: "Sistemele corpului mamiferelor",
    r2_text: "În fiecare mamifer, există sisteme speciale care ajută la supraviețuire.",
    r2_fact1: "Plămânii permit mamiferelor să respire aer oriunde",
    r2_fact2: "O inimă cu 4 camere pompează sângele eficient",
    r2_fact3: "Dinți diferiți pentru sarcini diferite",
    r2_fact4: "Diafragma ajută la respirație",

    r3_title: "Ce mănâncă mamiferele?",
    r3_text: "Mamiferele au diete diferite! Unii mănâncă doar plante, alții doar carne, alții amândouă.",
    r3_fact1: "Erbivorii mănâncă doar plante — ca vacile și iepurii",
    r3_fact2: "Carnivorii mănâncă doar carne — ca lupii și leii",
    r3_fact3: "Omnivorii mănâncă plante ȘI carne — ca ursii și oamenii",

    r4_title: "Cele cinci clase de vertebrate",
    r4_text: "Mamiferele sunt doar UN grup de vertebrate! Să vedem cum se potrivesc cu peștii, amfibienii, reptilele și păsările.",
    r4_hint: "Atinge clasele în ordine, de la simplu la avansat.",
    r4_fact1: "Peștii au venit primii — au branhii și solzi",
    r4_fact2: "Amfibienii pot trăi pe uscat și în apă",
    r4_fact3: "Reptilele au solzi și depun ouă",
    r4_fact4: "Păsările au pene și sânge cald",
    r4_fact5: "Mamiferele sunt cele mai avansate — cu blană și alăptare",

    r5_title: "Chestionar despre mamifere!",
    r5_text: "Acum testează-ți cunoștințele despre mamifere!",

    q_r1_1: "Care caracteristică au TOȚI mamiferele, pe care peștii nu o au?",
    q_r1_1_a: "Blană sau păr",
    q_r1_1_b: "Solzi",
    q_r1_1_c: "Branhii",
    q_r1_1_d: "Pene",

    q_r1_2: "Cum rămân caldi mamiferele, diferit de reptile?",
    q_r1_2_a: "Stau în soare",
    q_r1_2_b: "Generează căldură din interior",
    q_r1_2_c: "Au blană mai grea",
    q_r1_2_d: "Migrează în locuri calde",

    q_r1_3: "Care este cea mai mare diferență între mamifere și păsări?",
    q_r1_3_a: "Mamiferele au blană; păsările au pene",
    q_r1_3_b: "Mamiferele depun ouă; păsările nu",
    q_r1_3_c: "Mamiferele sunt cu sânge rece; păsările cu sânge cald",
    q_r1_3_d: "Mamiferele nu au inimi; păsările au",

    q_r2_1: "De ce au mamiferele dinți de diferite tipuri?",
    q_r2_1_a: "Pentru frumusețe",
    q_r2_1_b: "Pentru sarcini diferite",
    q_r2_1_c: "Cresc aleator",
    q_r2_1_d: "Pentru a face zgomot",

    q_r2_2: "Ce fac plămânii mamiferelor?",
    q_r2_2_a: "Fac hrană",
    q_r2_2_b: "Pompează sânge",
    q_r2_2_c: "Respiră aer",
    q_r2_2_d: "Stochează energie",

    q_r3_1: "Un iepure mănâncă doar iarbă și legume. Ce este?",
    q_r3_1_a: "Carnivor",
    q_r3_1_b: "Omnivor",
    q_r3_1_c: "Erbivor",
    q_r3_1_d: "Insectivor",

    q_r3_2: "Un leu vânează și mănâncă doar carne. Ce este?",
    q_r3_2_a: "Erbivor",
    q_r3_2_b: "Omnivor",
    q_r3_2_c: "Carnivor",
    q_r3_2_d: "Fructivor",

    q_r3_3: "Un urs mănâncă pești ȘI fructe de pădure. Ce este?",
    q_r3_3_a: "Carnivor",
    q_r3_3_b: "Omnivor",
    q_r3_3_c: "Erbivor",
    q_r3_3_d: "Piscivor",

    fish_cls: "Pește 🐟",
    amphibian_cls: "Amfibian 🐸",
    reptile_cls: "Reptilă 🦎",
    bird_cls: "Pasăre 🐦",
    mammal_cls: "Mamifer 🐾",

    q_r5_1: "Este o balenă mamifer?",
    q_r5_1_a: "Da, are blană, sânge cald și alăptează",
    q_r5_1_b: "Nu, trăiește în apă, deci trebuie să fie pește",

    q_r5_2: "Este un ornitorinc mamifer, deși depune ouă?",
    q_r5_2_a: "Da, are blană și sânge cald",
    q_r5_2_b: "Nu, mamiferele nu depun ouă",

    q_r5_3: "Este un liliac mamifer?",
    q_r5_3_a: "Nu, zboară ca o pasăre",
    q_r5_3_b: "Da, are blană, sânge cald și alăptează",

    q_r5_4: "Este un rechin mamifer?",
    q_r5_4_a: "Da, pentru că e mare și inteligent",
    q_r5_4_b: "Nu, are branhii, solzi și sânge rece",
  },
};

const DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    // Round 1: Teaching - What Makes a Mammal?
    {
      type: "info",
      infoTitle: "r1_title",
      infoText: "r1_text",
      svg: SVG_R1,
      bulletKeys: ["r1_fact1", "r1_fact2", "r1_fact3", "r1_fact4"],
    },

    // Round 2: Teaching - Body Systems
    {
      type: "info",
      infoTitle: "r2_title",
      infoText: "r2_text",
      svg: SVG_R2,
      bulletKeys: ["r2_fact1", "r2_fact2", "r2_fact3", "r2_fact4"],
    },

    // Round 3: Teaching - Diet Types
    {
      type: "info",
      infoTitle: "r3_title",
      infoText: "r3_text",
      svg: SVG_R3,
      bulletKeys: ["r3_fact1", "r3_fact2", "r3_fact3"],
    },

    // Round 4: Order - Vertebrate Classes
    {
      type: "order",
      infoTitle: "r4_title",
      infoText: "r4_text",
      hintKey: "r4_hint",
      svg: SVG_R4,
      bulletKeys: ["r4_fact1", "r4_fact2", "r4_fact3", "r4_fact4", "r4_fact5"],
      orderSequence: ["fish_cls", "amphibian_cls", "reptile_cls", "bird_cls", "mammal_cls"] as const,
    },

    // Round 5: MCQ Quiz - Mixed questions
    {
      type: "mcq",
      infoTitle: "r5_title",
      infoText: "r5_text",
      svg: SVG_R5,
      questions: [
        {
          question: "q_r1_1",
          choices: ["q_r1_1_a", "q_r1_1_b", "q_r1_1_c", "q_r1_1_d"],
          answer: "q_r1_1_a",
        },
        {
          question: "q_r1_2",
          choices: ["q_r1_2_a", "q_r1_2_b", "q_r1_2_c", "q_r1_2_d"],
          answer: "q_r1_2_b",
        },
        {
          question: "q_r3_1",
          choices: ["q_r3_1_a", "q_r3_1_b", "q_r3_1_c", "q_r3_1_d"],
          answer: "q_r3_1_c",
        },
        {
          question: "q_r5_1",
          choices: ["q_r5_1_a", "q_r5_1_b"],
          answer: "q_r5_1_a",
        },
      ] as MCQQuestion[],
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

interface Props {
  color?: string;
  lang?: string;
  onDone?: (score: number, total: number) => void;
}

export default function MammalExplorer({ color = "#06B6D4", lang = "en", onDone }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} />;
}
