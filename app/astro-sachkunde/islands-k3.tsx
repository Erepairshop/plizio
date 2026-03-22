"use client";

import React from "react";

type IP = { size?: number };

// i1: Body Systems — Red heart island
const IslandBodySystems: React.FC<IP> = ({ size = 80 }) => (
  <svg viewBox="0 0 80 80" width={size} height={size}>
    <defs>
      <radialGradient id="bgGlowBodySys" cx="50%" cy="50%">
        <stop offset="0%" stopColor="rgba(231, 76, 60, 0.3)" />
        <stop offset="100%" stopColor="transparent" />
      </radialGradient>
    </defs>
    {/* Glow */}
    <ellipse cx="40" cy="65" rx="28" ry="8" fill="url(#bgGlowBodySys)" />
    {/* Rocky underside */}
    <path d="M 25 45 Q 30 48 40 48 Q 50 48 55 45" stroke="#A93226" strokeWidth="1.5" fill="none" />
    <path d="M 28 50 L 32 53 M 40 51 L 40 54 M 52 50 L 48 53" stroke="#A93226" strokeWidth="1" />
    {/* Island body — heart shape */}
    <path
      d="M 40 25 C 32 25 26 31 26 38 C 26 48 40 58 40 58 C 40 58 54 48 54 38 C 54 31 48 25 40 25 Z"
      fill="#E74C3C"
      stroke="#C0392B"
      strokeWidth="1"
    />
    {/* Top surface — grassy rim */}
    <ellipse cx="40" cy="28" rx="16" ry="10" fill="#E8B4B1" opacity="0.6" />
    {/* Artery lines (blood vessels) */}
    <path d="M 35 30 Q 32 35 31 42" stroke="#C0392B" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    <path d="M 45 30 Q 48 35 49 42" stroke="#C0392B" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    {/* Center heart detail */}
    <circle cx="40" cy="38" r="3" fill="#B93128" opacity="0.8" />
  </svg>
);

// i2: Animal Kingdom — Orange lion island
const IslandAnimalKingdom: React.FC<IP> = ({ size = 80 }) => (
  <svg viewBox="0 0 80 80" width={size} height={size}>
    <defs>
      <radialGradient id="bgGlowAnimal" cx="50%" cy="50%">
        <stop offset="0%" stopColor="rgba(243, 156, 18, 0.3)" />
        <stop offset="100%" stopColor="transparent" />
      </radialGradient>
    </defs>
    {/* Glow */}
    <ellipse cx="40" cy="65" rx="28" ry="8" fill="url(#bgGlowAnimal)" />
    {/* Rocky underside */}
    <path d="M 25 48 Q 30 51 40 51 Q 50 51 55 48" stroke="#D68910" strokeWidth="1.5" fill="none" />
    <path d="M 28 53 L 32 56 M 40 54 L 40 57 M 52 53 L 48 56" stroke="#D68910" strokeWidth="1" />
    {/* Island body */}
    <ellipse cx="40" cy="40" rx="20" ry="18" fill="#F39C12" stroke="#D68910" strokeWidth="1" />
    {/* Top surface — grassy rim */}
    <ellipse cx="40" cy="30" rx="18" ry="12" fill="#F5B455" opacity="0.6" />
    {/* Lion mane (back circle) */}
    <circle cx="40" cy="35" r="14" fill="none" stroke="#E67E22" strokeWidth="2" opacity="0.7" />
    {/* Lion head (front circle) */}
    <circle cx="40" cy="38" r="8" fill="#E67E22" stroke="#D68910" strokeWidth="1" />
    {/* Left ear */}
    <circle cx="32" cy="28" r="3.5" fill="#E67E22" stroke="#D68910" strokeWidth="0.5" />
    {/* Right ear */}
    <circle cx="48" cy="28" r="3.5" fill="#E67E22" stroke="#D68910" strokeWidth="0.5" />
    {/* Paw print (bottom right) */}
    <circle cx="50" cy="50" r="2" fill="#D68910" opacity="0.6" />
    <circle cx="47" cy="52" r="1.5" fill="#D68910" opacity="0.5" />
    <circle cx="53" cy="52" r="1.5" fill="#D68910" opacity="0.5" />
  </svg>
);

// i3: Forest Life — Green pine & mushroom island
const IslandForestLife: React.FC<IP> = ({ size = 80 }) => (
  <svg viewBox="0 0 80 80" width={size} height={size}>
    <defs>
      <radialGradient id="bgGlowForest" cx="50%" cy="50%">
        <stop offset="0%" stopColor="rgba(39, 174, 96, 0.3)" />
        <stop offset="100%" stopColor="transparent" />
      </radialGradient>
    </defs>
    {/* Glow */}
    <ellipse cx="40" cy="65" rx="28" ry="8" fill="url(#bgGlowForest)" />
    {/* Rocky underside */}
    <path d="M 25 45 Q 30 48 40 48 Q 50 48 55 45" stroke="#1E8449" strokeWidth="1.5" fill="none" />
    <path d="M 28 50 L 32 53 M 40 51 L 40 54 M 52 50 L 48 53" stroke="#1E8449" strokeWidth="1" />
    {/* Island body */}
    <ellipse cx="40" cy="40" rx="20" ry="18" fill="#27AE60" stroke="#1E8449" strokeWidth="1" />
    {/* Top surface — grassy rim */}
    <ellipse cx="40" cy="30" rx="18" ry="12" fill="#58D68D" opacity="0.6" />
    {/* Pine tree (left) */}
    <path d="M 30 38 L 27 42 L 33 42 L 30 46 L 36 46 L 30 50 L 37 50 L 30 52" fill="#1E8449" stroke="#145A32" strokeWidth="0.5" />
    <rect x="29" y="52" width="2" height="3" fill="#8B4513" />
    {/* Mushroom (center-right) */}
    <circle cx="45" cy="42" r="3.5" fill="#D35400" stroke="#B54612" strokeWidth="0.5" />
    <ellipse cx="45" cy="46" rx="4" ry="2" fill="#F39C12" stroke="#D68910" strokeWidth="0.5" />
    {/* Deer silhouette (right) */}
    <ellipse cx="55" cy="43" rx="3" ry="3.5" fill="#1E8449" />
    <line x1="55" y1="46" x2="54" y2="50" stroke="#1E8449" strokeWidth="1" />
    <line x1="55" y1="46" x2="56" y2="50" stroke="#1E8449" strokeWidth="1" />
    <circle cx="56" cy="40" r="1.5" fill="#1E8449" />
  </svg>
);

// i4: Plants & Pollination — Pink flower with bee
const IslandPlantsPollinatio: React.FC<IP> = ({ size = 80 }) => (
  <svg viewBox="0 0 80 80" width={size} height={size}>
    <defs>
      <radialGradient id="bgGlowFlower" cx="50%" cy="50%">
        <stop offset="0%" stopColor="rgba(255, 105, 180, 0.3)" />
        <stop offset="100%" stopColor="transparent" />
      </radialGradient>
    </defs>
    {/* Glow */}
    <ellipse cx="40" cy="65" rx="28" ry="8" fill="url(#bgGlowFlower)" />
    {/* Rocky underside */}
    <path d="M 25 47 Q 30 50 40 50 Q 50 50 55 47" stroke="#C2185B" strokeWidth="1.5" fill="none" />
    <path d="M 28 52 L 32 55 M 40 53 L 40 56 M 52 52 L 48 55" stroke="#C2185B" strokeWidth="1" />
    {/* Island body */}
    <ellipse cx="40" cy="40" rx="20" ry="18" fill="#FF69B4" stroke="#C2185B" strokeWidth="1" />
    {/* Top surface — grassy rim */}
    <ellipse cx="40" cy="30" rx="18" ry="12" fill="#FF9FCD" opacity="0.6" />
    {/* Flower petals (5 around center) */}
    <ellipse cx="40" cy="28" rx="2.5" ry="4" fill="#FF1493" transform="rotate(0 40 40)" />
    <ellipse cx="40" cy="28" rx="2.5" ry="4" fill="#FF1493" transform="rotate(72 40 40)" />
    <ellipse cx="40" cy="28" rx="2.5" ry="4" fill="#FF1493" transform="rotate(144 40 40)" />
    <ellipse cx="40" cy="28" rx="2.5" ry="4" fill="#FF1493" transform="rotate(216 40 40)" />
    <ellipse cx="40" cy="28" rx="2.5" ry="4" fill="#FF1493" transform="rotate(288 40 40)" />
    {/* Flower center */}
    <circle cx="40" cy="40" r="3" fill="#FFD700" stroke="#FFC700" strokeWidth="0.5" />
    {/* Stem */}
    <line x1="40" y1="43" x2="40" y2="50" stroke="#2D5016" strokeWidth="1.5" />
    {/* Bee (top left) */}
    <ellipse cx="32" cy="28" rx="2" ry="2.5" fill="#FFD700" stroke="#DAA520" strokeWidth="0.5" />
    <circle cx="31" cy="27" r="1" fill="#000" opacity="0.5" />
    <path d="M 33 29 Q 34 30 35 29" stroke="#DAA520" strokeWidth="0.5" fill="none" />
  </svg>
);

// i5: Weather & Climate — Blue thermometer & cloud island
const IslandWeatherClimate: React.FC<IP> = ({ size = 80 }) => (
  <svg viewBox="0 0 80 80" width={size} height={size}>
    <defs>
      <radialGradient id="bgGlowWeather" cx="50%" cy="50%">
        <stop offset="0%" stopColor="rgba(52, 152, 219, 0.3)" />
        <stop offset="100%" stopColor="transparent" />
      </radialGradient>
    </defs>
    {/* Glow */}
    <ellipse cx="40" cy="65" rx="28" ry="8" fill="url(#bgGlowWeather)" />
    {/* Rocky underside */}
    <path d="M 25 45 Q 30 48 40 48 Q 50 48 55 45" stroke="#1F618D" strokeWidth="1.5" fill="none" />
    <path d="M 28 50 L 32 53 M 40 51 L 40 54 M 52 50 L 48 53" stroke="#1F618D" strokeWidth="1" />
    {/* Island body */}
    <ellipse cx="40" cy="40" rx="20" ry="18" fill="#3498DB" stroke="#1F618D" strokeWidth="1" />
    {/* Top surface — grassy rim */}
    <ellipse cx="40" cy="30" rx="18" ry="12" fill="#5DADE2" opacity="0.6" />
    {/* Thermometer (left-center) */}
    <rect x="32" y="32" width="2" height="12" fill="none" stroke="#1F618D" strokeWidth="1" rx="1" />
    <circle cx="33" cy="46" r="2.5" fill="#E74C3C" stroke="#1F618D" strokeWidth="0.5" />
    <line x1="33" y1="36" x2="33" y2="42" stroke="#E74C3C" strokeWidth="1.5" />
    {/* Sun (right-center) */}
    <circle cx="48" cy="32" r="4" fill="#FFD700" stroke="#FFC700" strokeWidth="0.5" />
    <line x1="48" y1="24" x2="48" y2="26" stroke="#FFC700" strokeWidth="1" />
    <line x1="48" y1="38" x2="48" y2="40" stroke="#FFC700" strokeWidth="1" />
    <line x1="56" y1="32" x2="54" y2="32" stroke="#FFC700" strokeWidth="1" />
    <line x1="40" y1="32" x2="42" y2="32" stroke="#FFC700" strokeWidth="1" />
    {/* Cloud (above) */}
    <path
      d="M 35 42 Q 35 39 38 39 Q 40 36 43 38 Q 46 36 47 39 Q 50 39 50 42"
      fill="#AED6F1"
      stroke="#3498DB"
      strokeWidth="0.5"
    />
  </svg>
);

// i6: Water & Geography — Teal mountains & river
const IslandWaterGeography: React.FC<IP> = ({ size = 80 }) => (
  <svg viewBox="0 0 80 80" width={size} height={size}>
    <defs>
      <radialGradient id="bgGlowWater" cx="50%" cy="50%">
        <stop offset="0%" stopColor="rgba(26, 188, 156, 0.3)" />
        <stop offset="100%" stopColor="transparent" />
      </radialGradient>
    </defs>
    {/* Glow */}
    <ellipse cx="40" cy="65" rx="28" ry="8" fill="url(#bgGlowWater)" />
    {/* Rocky underside */}
    <path d="M 25 45 Q 30 48 40 48 Q 50 48 55 45" stroke="#117A65" strokeWidth="1.5" fill="none" />
    <path d="M 28 50 L 32 53 M 40 51 L 40 54 M 52 50 L 48 53" stroke="#117A65" strokeWidth="1" />
    {/* Island body */}
    <ellipse cx="40" cy="40" rx="20" ry="18" fill="#1ABC9C" stroke="#117A65" strokeWidth="1" />
    {/* Top surface — grassy rim */}
    <ellipse cx="40" cy="30" rx="18" ry="12" fill="#48C9B0" opacity="0.6" />
    {/* Mountain peaks (left) */}
    <polygon points="28,40 32,28 36,40" fill="#117A65" stroke="#0D5346" strokeWidth="0.5" />
    {/* Mountain peaks (center) */}
    <polygon points="38,42 42,30 46,42" fill="#16A085" stroke="#117A65" strokeWidth="0.5" />
    {/* Mountain peaks (right) */}
    <polygon points="48,40 52,28 56,40" fill="#117A65" stroke="#0D5346" strokeWidth="0.5" />
    {/* River curve (flowing down) */}
    <path d="M 42 32 Q 41 36 40 40 Q 39 44 38 48" stroke="#3498DB" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    {/* River water highlights */}
    <circle cx="40" cy="36" r="1" fill="#5DADE2" opacity="0.6" />
    <circle cx="39" cy="42" r="1" fill="#5DADE2" opacity="0.6" />
  </svg>
);

// i7: Technology & Machines — Gray gear & lightning
const IslandTechnologyMachines: React.FC<IP> = ({ size = 80 }) => (
  <svg viewBox="0 0 80 80" width={size} height={size}>
    <defs>
      <radialGradient id="bgGlowTech" cx="50%" cy="50%">
        <stop offset="0%" stopColor="rgba(149, 165, 166, 0.3)" />
        <stop offset="100%" stopColor="transparent" />
      </radialGradient>
    </defs>
    {/* Glow */}
    <ellipse cx="40" cy="65" rx="28" ry="8" fill="url(#bgGlowTech)" />
    {/* Rocky underside */}
    <path d="M 25 47 Q 30 50 40 50 Q 50 50 55 47" stroke="#566573" strokeWidth="1.5" fill="none" />
    <path d="M 28 52 L 32 55 M 40 53 L 40 56 M 52 52 L 48 55" stroke="#566573" strokeWidth="1" />
    {/* Island body */}
    <ellipse cx="40" cy="40" rx="20" ry="18" fill="#95A5A6" stroke="#566573" strokeWidth="1" />
    {/* Top surface — grassy rim */}
    <ellipse cx="40" cy="30" rx="18" ry="12" fill="#BDC3C7" opacity="0.6" />
    {/* Gear (main cog) */}
    <circle cx="38" cy="38" r="5" fill="none" stroke="#34495E" strokeWidth="1" />
    {/* Gear teeth */}
    <rect x="36.5" y="31.5" width="3" height="2" fill="#34495E" />
    <rect x="36.5" y="44.5" width="3" height="2" fill="#34495E" />
    <rect x="45.5" y="36.5" width="2" height="3" fill="#34495E" />
    <rect x="30.5" y="36.5" width="2" height="3" fill="#34495E" />
    {/* Gear center */}
    <circle cx="38" cy="38" r="2" fill="#7F8C8D" stroke="#34495E" strokeWidth="0.5" />
    {/* Lightning bolt */}
    <path
      d="M 50 28 L 48 34 L 51 35 L 48 42"
      stroke="#F1C40F"
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Lightning glow */}
    <path d="M 50 28 L 48 34 L 51 35 L 48 42" stroke="#FFE44D" strokeWidth="0.5" opacity="0.6" fill="none" />
  </svg>
);

// i8: Community & Town — Orange-brown small houses
const IslandCommunityTown: React.FC<IP> = ({ size = 80 }) => (
  <svg viewBox="0 0 80 80" width={size} height={size}>
    <defs>
      <radialGradient id="bgGlowTown" cx="50%" cy="50%">
        <stop offset="0%" stopColor="rgba(230, 126, 34, 0.3)" />
        <stop offset="100%" stopColor="transparent" />
      </radialGradient>
    </defs>
    {/* Glow */}
    <ellipse cx="40" cy="65" rx="28" ry="8" fill="url(#bgGlowTown)" />
    {/* Rocky underside */}
    <path d="M 25 47 Q 30 50 40 50 Q 50 50 55 47" stroke="#B8741A" strokeWidth="1.5" fill="none" />
    <path d="M 28 52 L 32 55 M 40 53 L 40 56 M 52 52 L 48 55" stroke="#B8741A" strokeWidth="1" />
    {/* Island body */}
    <ellipse cx="40" cy="40" rx="20" ry="18" fill="#E67E22" stroke="#B8741A" strokeWidth="1" />
    {/* Top surface — grassy rim */}
    <ellipse cx="40" cy="30" rx="18" ry="12" fill="#E8A76A" opacity="0.6" />
    {/* House 1 (left) */}
    <rect x="28" y="36" width="6" height="8" fill="#D35400" stroke="#922B1D" strokeWidth="0.5" />
    <polygon points="28,36 31,32 34,36" fill="#B8741A" stroke="#922B1D" strokeWidth="0.5" />
    <rect x="29" y="38" width="1.5" height="2" fill="#F39C12" stroke="#922B1D" strokeWidth="0.25" />
    {/* House 2 (center) */}
    <rect x="37" y="36" width="6" height="8" fill="#D35400" stroke="#922B1D" strokeWidth="0.5" />
    <polygon points="37,36 40,32 43,36" fill="#B8741A" stroke="#922B1D" strokeWidth="0.5" />
    <rect x="38" y="38" width="1.5" height="2" fill="#F39C12" stroke="#922B1D" strokeWidth="0.25" />
    {/* House 3 (right) */}
    <rect x="46" y="36" width="6" height="8" fill="#D35400" stroke="#922B1D" strokeWidth="0.5" />
    <polygon points="46,36 49,32 52,36" fill="#B8741A" stroke="#922B1D" strokeWidth="0.5" />
    <rect x="47" y="38" width="1.5" height="2" fill="#F39C12" stroke="#922B1D" strokeWidth="0.25" />
  </svg>
);

// i9: Environment — Green mini globe with continents
const IslandEnvironment: React.FC<IP> = ({ size = 80 }) => (
  <svg viewBox="0 0 80 80" width={size} height={size}>
    <defs>
      <radialGradient id="bgGlowEnv" cx="50%" cy="50%">
        <stop offset="0%" stopColor="rgba(46, 204, 113, 0.3)" />
        <stop offset="100%" stopColor="transparent" />
      </radialGradient>
    </defs>
    {/* Glow */}
    <ellipse cx="40" cy="65" rx="28" ry="8" fill="url(#bgGlowEnv)" />
    {/* Rocky underside */}
    <path d="M 25 45 Q 30 48 40 48 Q 50 48 55 45" stroke="#1E8449" strokeWidth="1.5" fill="none" />
    <path d="M 28 50 L 32 53 M 40 51 L 40 54 M 52 50 L 48 53" stroke="#1E8449" strokeWidth="1" />
    {/* Island body */}
    <ellipse cx="40" cy="40" rx="20" ry="18" fill="#2ECC71" stroke="#1E8449" strokeWidth="1" />
    {/* Top surface — grassy rim */}
    <ellipse cx="40" cy="30" rx="18" ry="12" fill="#58D68D" opacity="0.6" />
    {/* Globe (mini Earth) */}
    <circle cx="38" cy="38" r="5" fill="#3498DB" stroke="#1E8449" strokeWidth="0.5" />
    {/* Continent 1 (left — Africa-like) */}
    <path d="M 35 35 Q 34 37 35 39 Q 36 38 37 39 Q 36 37 35 35" fill="#2ECC71" />
    {/* Continent 2 (top — Europe-like) */}
    <path d="M 38 32 Q 39 33 40 32 Q 40 31 39 31 Q 38 31 38 32" fill="#2ECC71" />
    {/* Continent 3 (right — Asia-like) */}
    <path d="M 41 36 Q 42 37 43 37 Q 43 36 42 35 Q 41 35 41 36" fill="#2ECC71" />
    {/* Leaf (right side) */}
    <ellipse cx="50" cy="36" rx="2" ry="3" fill="#27AE60" stroke="#1E8449" strokeWidth="0.5" transform="rotate(-30 50 36)" />
    <line x1="50" y1="34" x2="50" y2="39" stroke="#1E8449" strokeWidth="0.5" />
  </svg>
);

export const SK_K3_ISLAND_SVGS: Record<string, React.FC<IP>> = {
  i1: IslandBodySystems,
  i2: IslandAnimalKingdom,
  i3: IslandForestLife,
  i4: IslandPlantsPollinatio,
  i5: IslandWeatherClimate,
  i6: IslandWaterGeography,
  i7: IslandTechnologyMachines,
  i8: IslandCommunityTown,
  i9: IslandEnvironment,
};
