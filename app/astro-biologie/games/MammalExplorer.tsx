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
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <linearGradient id="m1_bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1a3a2a" />
          <stop offset="50%" stopColor="#2a4a3a" />
          <stop offset="100%" stopColor="#1a2a1a" />
        </linearGradient>
        <linearGradient id="m1_fox_body" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E87A30" />
          <stop offset="40%" stopColor="#D06A25" />
          <stop offset="100%" stopColor="#B85A1A" />
        </linearGradient>
        <linearGradient id="m1_fox_belly" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF8E1" />
          <stop offset="100%" stopColor="#FFECB3" />
        </linearGradient>
        <linearGradient id="m1_fox_tail" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#D06A25" />
          <stop offset="70%" stopColor="#B85A1A" />
          <stop offset="100%" stopColor="#FFFDE7" />
        </linearGradient>
        <linearGradient id="m1_grass" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4CAF50" />
          <stop offset="100%" stopColor="#2E7D32" />
        </linearGradient>
        <radialGradient id="m1_glow" cx="50%" cy="40%">
          <stop offset="0%" stopColor="rgba(255,200,100,0.12)" />
          <stop offset="100%" stopColor="rgba(255,200,100,0)" />
        </radialGradient>
      </defs>

      {/* Background */}
      <rect width="240" height="160" fill="url(#m1_bg)" />
      <circle cx="120" cy="75" r="70" fill="url(#m1_glow)" />

      {/* Ground */}
      <path d="M 0 130 Q 60 125 120 128 Q 180 132 240 128 L 240 160 L 0 160 Z" fill="#2E7D32" opacity="0.3" />
      {/* Grass tufts */}
      <g stroke="url(#m1_grass)" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5">
        <path d="M 15 135 Q 17 125 19 135" /><path d="M 22 134 Q 24 126 26 134" />
        <path d="M 195 132 Q 197 122 199 132" /><path d="M 210 134 Q 212 124 214 134" />
        <path d="M 80 136 Q 82 128 84 136" />
      </g>

      {/* FOX — detailed side view */}
      <g transform="translate(70, 60)">
        {/* Shadow */}
        <ellipse cx="50" cy="75" rx="45" ry="6" fill="rgba(0,0,0,0.15)" />

        {/* Tail - bushy with white tip */}
        <path d="M 10,40 Q -15,35 -25,20 Q -30,10 -25,5 Q -20,2 -15,8 Q -5,20 10,35" fill="url(#m1_fox_tail)" />
        {/* Tail fur detail */}
        <g stroke="rgba(180,80,20,0.3)" strokeWidth="0.6" fill="none">
          <path d="M -10,15 Q -8,12 -6,15" /><path d="M -5,20 Q -3,17 -1,20" />
          <path d="M 0,28 Q 2,25 4,28" />
        </g>
        {/* White tail tip */}
        <path d="M -25,5 Q -28,2 -25,0 Q -22,2 -25,5 Z" fill="#FFF8E1" />

        {/* Hind legs */}
        <path d="M 20,55 Q 18,62 20,68 Q 22,72 25,70 Q 24,62 22,55 Z" fill="url(#m1_fox_body)" />
        <path d="M 30,55 Q 28,62 30,68 Q 32,72 35,70 Q 34,62 32,55 Z" fill="url(#m1_fox_body)" />
        {/* Paws */}
        <ellipse cx="22" cy="70" rx="3.5" ry="2" fill="#2C1810" />
        <ellipse cx="33" cy="70" rx="3.5" ry="2" fill="#2C1810" />

        {/* Front legs */}
        <path d="M 65,50 Q 66,60 64,68 Q 62,72 60,70 Q 60,60 63,50 Z" fill="url(#m1_fox_body)" />
        <path d="M 75,48 Q 77,58 75,66 Q 73,70 71,68 Q 71,58 73,48 Z" fill="url(#m1_fox_body)" />
        <ellipse cx="62" cy="70" rx="3" ry="2" fill="#2C1810" />
        <ellipse cx="73" cy="68" rx="3" ry="2" fill="#2C1810" />

        {/* Body */}
        <path d="M 20,30 Q 30,22 50,20 Q 70,22 80,32 Q 82,42 78,52 Q 65,58 35,55 Q 18,50 20,30" fill="url(#m1_fox_body)" />
        {/* Belly white */}
        <path d="M 30,45 Q 45,50 65,48 Q 75,45 78,40" fill="url(#m1_fox_belly)" opacity="0.7" />

        {/* Fur texture on body */}
        <g stroke="rgba(160,70,15,0.25)" strokeWidth="0.7" fill="none" strokeLinecap="round">
          <path d="M 30,28 Q 33,24 36,28" /><path d="M 42,25 Q 45,21 48,25" />
          <path d="M 55,26 Q 58,22 61,26" /><path d="M 68,30 Q 71,26 74,30" />
          <path d="M 35,35 Q 38,31 41,35" /><path d="M 50,33 Q 53,29 56,33" />
          <path d="M 62,35 Q 65,31 68,35" />
          <path d="M 28,42 Q 31,38 34,42" /><path d="M 45,40 Q 48,36 51,40" />
        </g>

        {/* Neck */}
        <path d="M 70,28 Q 78,22 85,25 Q 88,30 85,38 Q 78,40 72,35 Z" fill="url(#m1_fox_body)" />
        {/* Chest white */}
        <path d="M 78,32 Q 82,28 85,32 Q 84,36 80,38 Z" fill="url(#m1_fox_belly)" opacity="0.5" />

        {/* Head */}
        <path d="M 82,15 Q 90,8 100,10 Q 108,14 108,22 Q 106,30 98,34 Q 88,35 82,28 Z" fill="url(#m1_fox_body)" />
        {/* Face white markings */}
        <path d="M 92,20 Q 96,16 100,18 Q 102,22 100,28 Q 96,30 92,26 Z" fill="url(#m1_fox_belly)" opacity="0.5" />

        {/* Ears - large pointed */}
        <path d="M 86,12 Q 82,0 88,4 Q 92,8 89,14 Z" fill="url(#m1_fox_body)" />
        <path d="M 87,10 Q 84,3 88,6 Z" fill="#1a1a1a" opacity="0.3" />
        <path d="M 98,8 Q 96,-2 102,2 Q 106,6 102,12 Z" fill="url(#m1_fox_body)" />
        <path d="M 99,6 Q 97,0 102,4 Z" fill="#1a1a1a" opacity="0.3" />

        {/* Eyes - bright amber */}
        <circle cx="90" cy="18" r="3.2" fill="#FFF8E1" />
        <circle cx="90" cy="18" r="2.2" fill="#E8A020" />
        <circle cx="90" cy="18" r="1.3" fill="#1a1a00" />
        <circle cx="91" cy="17" r="0.8" fill="white" opacity="0.9" />
        <circle cx="89" cy="19" r="0.35" fill="white" opacity="0.4" />

        <circle cx="99" cy="17" r="3" fill="#FFF8E1" />
        <circle cx="99" cy="17" r="2" fill="#E8A020" />
        <circle cx="99" cy="17" r="1.2" fill="#1a1a00" />
        <circle cx="100" cy="16" r="0.7" fill="white" opacity="0.9" />

        {/* Nose */}
        <ellipse cx="105" cy="24" rx="3" ry="2.5" fill="#1a1a1a" />
        <circle cx="104" cy="23.5" r="0.6" fill="white" opacity="0.2" />

        {/* Whiskers */}
        <g stroke="rgba(255,255,255,0.3)" strokeWidth="0.4" fill="none">
          <path d="M 106,26 L 115,24" /><path d="M 106,27 L 115,28" /><path d="M 106,28 L 114,31" />
        </g>

        {/* Mouth line */}
        <path d="M 105,26 Q 103,28 100,29" stroke="rgba(0,0,0,0.15)" strokeWidth="0.5" fill="none" />
      </g>

      {/* Feature indicator dots with glow rings */}
      <g>
        {/* Fur indicator - on body */}
        <circle cx="115" cy="92" r="4" fill="rgba(16,185,129,0.3)" stroke="#10B981" strokeWidth="1" />
        <circle cx="115" cy="92" r="1.5" fill="#10B981" />

        {/* Warm blood indicator - on chest */}
        <circle cx="155" cy="88" r="4" fill="rgba(245,158,11,0.3)" stroke="#F59E0B" strokeWidth="1" />
        <circle cx="155" cy="88" r="1.5" fill="#F59E0B" />

        {/* Live birth - near belly */}
        <circle cx="108" cy="108" r="4" fill="rgba(236,72,153,0.3)" stroke="#EC4899" strokeWidth="1" />
        <circle cx="108" cy="108" r="1.5" fill="#EC4899" />

        {/* Milk nursing - near belly */}
        <circle cx="140" cy="112" r="4" fill="rgba(6,182,212,0.3)" stroke="#06B6D4" strokeWidth="1" />
        <circle cx="140" cy="112" r="1.5" fill="#06B6D4" />
      </g>
    </svg>
  );
}

function SVG_R2(lang: string): React.ReactNode {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <linearGradient id="m2_bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1a1a2e" />
          <stop offset="100%" stopColor="#16213e" />
        </linearGradient>
        <linearGradient id="m2_jaw" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E8D8C0" />
          <stop offset="100%" stopColor="#C4A882" />
        </linearGradient>
        <linearGradient id="m2_gum" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FF8A8A" />
          <stop offset="100%" stopColor="#E06060" />
        </linearGradient>
        <linearGradient id="m2_tooth" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFF0" />
          <stop offset="40%" stopColor="#F5F0E0" />
          <stop offset="100%" stopColor="#E8E0C8" />
        </linearGradient>
        <linearGradient id="m2_lung" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF8A9E" />
          <stop offset="100%" stopColor="#E0546A" />
        </linearGradient>
        <linearGradient id="m2_heart" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FF4757" />
          <stop offset="100%" stopColor="#C0392B" />
        </linearGradient>
        <radialGradient id="m2_heart_glow" cx="50%" cy="50%">
          <stop offset="0%" stopColor="rgba(255,70,87,0.3)" />
          <stop offset="100%" stopColor="rgba(255,70,87,0)" />
        </radialGradient>
      </defs>

      <rect width="240" height="160" fill="url(#m2_bg)" />

      {/* LEFT SECTION: Teeth diagram — jaw cross-section */}
      <g transform="translate(10, 8)">
        {/* Upper jaw arc */}
        <path d="M 15,55 Q 15,20 55,15 Q 95,20 95,55" fill="url(#m2_jaw)" stroke="#A08060" strokeWidth="1" />
        {/* Gum line */}
        <path d="M 20,50 Q 20,30 55,25 Q 90,30 90,50" fill="url(#m2_gum)" opacity="0.6" />

        {/* Upper teeth */}
        {/* Incisors - sharp chisel shapes */}
        <rect x="42" y="32" width="5" height="14" rx="1" fill="url(#m2_tooth)" stroke="rgba(180,170,140,0.4)" strokeWidth="0.5" />
        <rect x="48" y="30" width="5" height="16" rx="1" fill="url(#m2_tooth)" stroke="rgba(180,170,140,0.4)" strokeWidth="0.5" />
        <rect x="54" y="30" width="5" height="16" rx="1" fill="url(#m2_tooth)" stroke="rgba(180,170,140,0.4)" strokeWidth="0.5" />
        <rect x="60" y="32" width="5" height="14" rx="1" fill="url(#m2_tooth)" stroke="rgba(180,170,140,0.4)" strokeWidth="0.5" />

        {/* Canines - pointed */}
        <path d="M 35,34 L 38,28 L 41,34 Q 40,48 38,50 Q 36,48 35,34 Z" fill="url(#m2_tooth)" stroke="rgba(180,170,140,0.4)" strokeWidth="0.5" />
        <path d="M 66,34 L 69,28 L 72,34 Q 71,48 69,50 Q 67,48 66,34 Z" fill="url(#m2_tooth)" stroke="rgba(180,170,140,0.4)" strokeWidth="0.5" />

        {/* Premolars & Molars - flat wide */}
        <rect x="22" y="38" width="8" height="10" rx="2" fill="url(#m2_tooth)" stroke="rgba(180,170,140,0.4)" strokeWidth="0.5" />
        <rect x="76" y="38" width="8" height="10" rx="2" fill="url(#m2_tooth)" stroke="rgba(180,170,140,0.4)" strokeWidth="0.5" />
        {/* Grinding surface detail on molars */}
        <path d="M 24,40 L 28,40 M 24,43 L 28,43" stroke="rgba(160,140,100,0.3)" strokeWidth="0.5" />
        <path d="M 78,40 L 82,40 M 78,43 L 82,43" stroke="rgba(160,140,100,0.3)" strokeWidth="0.5" />

        {/* Lower jaw (mirror) */}
        <path d="M 15,60 Q 15,95 55,100 Q 95,95 95,60" fill="url(#m2_jaw)" stroke="#A08060" strokeWidth="1" />
        <path d="M 20,65 Q 20,85 55,90 Q 90,85 90,65" fill="url(#m2_gum)" opacity="0.6" />

        {/* Lower teeth */}
        <rect x="44" y="68" width="5" height="13" rx="1" fill="url(#m2_tooth)" stroke="rgba(180,170,140,0.4)" strokeWidth="0.5" />
        <rect x="50" y="66" width="5" height="15" rx="1" fill="url(#m2_tooth)" stroke="rgba(180,170,140,0.4)" strokeWidth="0.5" />
        <rect x="56" y="66" width="5" height="15" rx="1" fill="url(#m2_tooth)" stroke="rgba(180,170,140,0.4)" strokeWidth="0.5" />
        <rect x="62" y="68" width="5" height="13" rx="1" fill="url(#m2_tooth)" stroke="rgba(180,170,140,0.4)" strokeWidth="0.5" />
        {/* Lower canines */}
        <path d="M 36,70 L 39,82 L 42,70 Z" fill="url(#m2_tooth)" stroke="rgba(180,170,140,0.4)" strokeWidth="0.5" />
        <path d="M 67,70 L 70,82 L 73,70 Z" fill="url(#m2_tooth)" stroke="rgba(180,170,140,0.4)" strokeWidth="0.5" />
        {/* Lower molars */}
        <rect x="22" y="66" width="8" height="10" rx="2" fill="url(#m2_tooth)" stroke="rgba(180,170,140,0.4)" strokeWidth="0.5" />
        <rect x="76" y="66" width="8" height="10" rx="2" fill="url(#m2_tooth)" stroke="rgba(180,170,140,0.4)" strokeWidth="0.5" />

        {/* Color-coded indicator dots */}
        {/* Incisors */}
        <circle cx="53" cy="22" r="3" fill="rgba(255,193,7,0.3)" stroke="#FFC107" strokeWidth="0.8" />
        <circle cx="53" cy="22" r="1" fill="#FFC107" />
        {/* Canines */}
        <circle cx="38" cy="24" r="3" fill="rgba(244,67,54,0.3)" stroke="#F44336" strokeWidth="0.8" />
        <circle cx="38" cy="24" r="1" fill="#F44336" />
        {/* Molars */}
        <circle cx="26" cy="34" r="3" fill="rgba(76,175,80,0.3)" stroke="#4CAF50" strokeWidth="0.8" />
        <circle cx="26" cy="34" r="1" fill="#4CAF50" />
      </g>

      {/* RIGHT SECTION: Internal organs */}
      <g transform="translate(130, 10)">
        {/* Body silhouette */}
        <ellipse cx="50" cy="70" rx="38" ry="55" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="3,3" />

        {/* Lungs - detailed lobes */}
        <g>
          {/* Left lung */}
          <path d="M 25,45 Q 18,50 15,65 Q 16,80 22,85 Q 30,88 35,82 Q 38,70 36,55 Q 34,46 25,45 Z" fill="url(#m2_lung)" opacity="0.75" />
          {/* Bronchi detail */}
          <path d="M 35,55 Q 30,52 28,55 Q 26,60 24,65" stroke="rgba(255,255,255,0.2)" strokeWidth="0.6" fill="none" />
          <path d="M 28,55 Q 24,58 22,62" stroke="rgba(255,255,255,0.15)" strokeWidth="0.4" fill="none" />

          {/* Right lung */}
          <path d="M 75,45 Q 82,50 85,65 Q 84,80 78,85 Q 70,88 65,82 Q 62,70 64,55 Q 66,46 75,45 Z" fill="url(#m2_lung)" opacity="0.75" />
          <path d="M 65,55 Q 70,52 72,55 Q 74,60 76,65" stroke="rgba(255,255,255,0.2)" strokeWidth="0.6" fill="none" />

          {/* Trachea */}
          <rect x="47" y="35" width="6" height="18" rx="3" fill="#E88090" opacity="0.5" />
          <path d="M 50,52 Q 40,55 35,58" stroke="#E88090" strokeWidth="1.5" fill="none" opacity="0.5" />
          <path d="M 50,52 Q 60,55 65,58" stroke="#E88090" strokeWidth="1.5" fill="none" opacity="0.5" />
        </g>

        {/* Heart - with chambers */}
        <g transform="translate(50, 72)">
          <circle cx="0" cy="0" r="14" fill="url(#m2_heart_glow)" />
          {/* Heart shape */}
          <path d="M 0,-10 Q -8,-14 -12,-8 Q -14,-2 -8,4 L 0,12 L 8,4 Q 14,-2 12,-8 Q 8,-14 0,-10 Z" fill="url(#m2_heart)" />
          {/* Chamber dividers */}
          <line x1="-6" y1="-4" x2="6" y2="-4" stroke="rgba(255,220,220,0.4)" strokeWidth="0.8" />
          <line x1="0" y1="-8" x2="0" y2="4" stroke="rgba(255,220,220,0.4)" strokeWidth="0.8" />
          {/* Vessels */}
          <path d="M -4,-10 Q -6,-14 -4,-16" stroke="#FF6B6B" strokeWidth="1.2" fill="none" />
          <path d="M 4,-10 Q 6,-14 4,-16" stroke="#4488FF" strokeWidth="1.2" fill="none" />
        </g>

        {/* Diaphragm */}
        <path d="M 15,100 Q 30,108 50,110 Q 70,108 85,100" stroke="#06B6D4" strokeWidth="2" strokeDasharray="3,2" fill="none" opacity="0.6" />
      </g>

      {/* Subtle connecting element */}
      <line x1="110" y1="60" x2="130" y2="60" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="2,3" />
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
