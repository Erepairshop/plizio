import React from "react";

type IslandProps = { size?: number };

// i1: Human Body - Red island with lungs shape
const IslandHumanBody: React.FC<IslandProps> = ({ size = 80 }) => (
  <svg viewBox="0 0 80 80" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
    {/* Glow ellipse */}
    <ellipse cx={40} cy={65} rx={28} ry={8} fill="rgba(231, 76, 60, 0.25)" />

    {/* Rocky underside */}
    <path d="M 20 45 L 25 50 L 18 52 L 28 55 L 22 58 L 32 60 L 58 60 L 52 58 L 62 55 L 56 52 L 66 50 L 61 45 Z"
      fill="#A03528" />

    {/* Island body ellipse */}
    <ellipse cx={40} cy={42} rx={32} ry={26} fill="#C23A1A" />

    {/* Top surface */}
    <ellipse cx={40} cy={38} rx={32} ry={24} fill="#E74C3C" />

    {/* Lungs - two curved bags */}
    <path d="M 30 28 Q 25 28 24 35 Q 24 40 28 42 Q 32 40 32 35 Z" fill="#8B2E1F" opacity={0.7} />
    <path d="M 50 28 Q 55 28 56 35 Q 56 40 52 42 Q 48 40 48 35 Z" fill="#8B2E1F" opacity={0.7} />

    {/* Ribcage lines */}
    <line x1={32} y1={32} x2={38} y2={30} stroke="#A03528" strokeWidth={1} opacity={0.6} />
    <line x1={48} y1={32} x2={42} y2={30} stroke="#A03528" strokeWidth={1} opacity={0.6} />
    <line x1={30} y1={36} x2={36} y2={35} stroke="#A03528" strokeWidth={1} opacity={0.6} />
    <line x1={50} y1={36} x2={44} y2={35} stroke="#A03528" strokeWidth={1} opacity={0.6} />
  </svg>
);

// i2: Mammals & Birds - Gray island with elephant and bird
const IslandMammalsBirds: React.FC<IslandProps> = ({ size = 80 }) => (
  <svg viewBox="0 0 80 80" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
    {/* Glow ellipse */}
    <ellipse cx={40} cy={65} rx={28} ry={8} fill="rgba(149, 165, 166, 0.25)" />

    {/* Rocky underside */}
    <path d="M 20 45 L 25 50 L 18 52 L 28 55 L 22 58 L 32 60 L 58 60 L 52 58 L 62 55 L 56 52 L 66 50 L 61 45 Z"
      fill="#6F7A7A" />

    {/* Island body ellipse */}
    <ellipse cx={40} cy={42} rx={32} ry={26} fill="#7A8E8E" />

    {/* Top surface */}
    <ellipse cx={40} cy={38} rx={32} ry={24} fill="#95A5A6" />

    {/* Elephant silhouette - head, ears, trunk */}
    <circle cx={28} cy={32} r={6} fill="#5A6F6F" />
    {/* Left ear */}
    <ellipse cx={22} cy={28} rx={5} ry={8} fill="#5A6F6F" />
    {/* Right ear */}
    <ellipse cx={34} cy={28} rx={5} ry={8} fill="#5A6F6F" />
    {/* Trunk */}
    <path d="M 28 38 Q 26 42 28 46" stroke="#5A6F6F" strokeWidth={3} fill="none" strokeLinecap="round" />

    {/* Small bird */}
    <g transform="translate(55, 25)">
      {/* Body */}
      <ellipse cx={0} cy={0} rx={3} ry={2.5} fill="#5A6F6F" />
      {/* Head */}
      <circle cx={2} cy={-1} r={1.5} fill="#5A6F6F" />
      {/* Wing */}
      <path d="M 0 -0.5 L 3 0 L 2 1" stroke="#5A6F6F" strokeWidth={1} fill="none" />
    </g>
  </svg>
);

// i3: Reptiles & Insects - Green island with lizard and butterfly
const IslandReptilesInsects: React.FC<IslandProps> = ({ size = 80 }) => (
  <svg viewBox="0 0 80 80" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
    {/* Glow ellipse */}
    <ellipse cx={40} cy={65} rx={28} ry={8} fill="rgba(39, 174, 96, 0.25)" />

    {/* Rocky underside */}
    <path d="M 20 45 L 25 50 L 18 52 L 28 55 L 22 58 L 32 60 L 58 60 L 52 58 L 62 55 L 56 52 L 66 50 L 61 45 Z"
      fill="#1E6E3E" />

    {/* Island body ellipse */}
    <ellipse cx={40} cy={42} rx={32} ry={26} fill="#239A55" />

    {/* Top surface */}
    <ellipse cx={40} cy={38} rx={32} ry={24} fill="#27AE60" />

    {/* Lizard - elongated body with tail and legs */}
    <ellipse cx={32} cy={35} rx={12} ry={4} fill="#1E6E3E" />
    {/* Tail */}
    <path d="M 44 35 Q 50 34 52 36" stroke="#1E6E3E" strokeWidth={2.5} fill="none" strokeLinecap="round" />
    {/* Front legs */}
    <line x1={36} y1={38} x2={34} y2={42} stroke="#1E6E3E" strokeWidth={1.5} />
    <line x1={40} y1={38} x2={42} y2={42} stroke="#1E6E3E" strokeWidth={1.5} />
    {/* Back legs */}
    <line x1={44} y1={37} x2={42} y2={42} stroke="#1E6E3E" strokeWidth={1.5} />
    <line x1={48} y1={36} x2={50} y2={41} stroke="#1E6E3E" strokeWidth={1.5} />
    {/* Head */}
    <circle cx={28} cy={35} r={3} fill="#1E6E3E" />

    {/* Butterfly - wings and body */}
    <g transform="translate(58, 28)">
      {/* Body */}
      <line x1={0} y1={-6} x2={0} y2={6} stroke="#1E6E3E" strokeWidth={1.5} />
      {/* Top left wing */}
      <ellipse cx={-4} cy={-3} rx={3} ry={4} fill="#1E6E3E" opacity={0.8} />
      {/* Top right wing */}
      <ellipse cx={4} cy={-3} rx={3} ry={4} fill="#1E6E3E" opacity={0.8} />
      {/* Bottom left wing */}
      <ellipse cx={-4} cy={3} rx={3} ry={4} fill="#1E6E3E" opacity={0.6} />
      {/* Bottom right wing */}
      <ellipse cx={4} cy={3} rx={3} ry={4} fill="#1E6E3E" opacity={0.6} />
    </g>
  </svg>
);

// i4: Ecosystems - Bright green island with tree, pond, and sun
const IslandEcosystems: React.FC<IslandProps> = ({ size = 80 }) => (
  <svg viewBox="0 0 80 80" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
    {/* Glow ellipse */}
    <ellipse cx={40} cy={65} rx={28} ry={8} fill="rgba(46, 204, 113, 0.25)" />

    {/* Rocky underside */}
    <path d="M 20 45 L 25 50 L 18 52 L 28 55 L 22 58 L 32 60 L 58 60 L 52 58 L 62 55 L 56 52 L 66 50 L 61 45 Z"
      fill="#1A8C44" />

    {/* Island body ellipse */}
    <ellipse cx={40} cy={42} rx={32} ry={26} fill="#1BA35E" />

    {/* Top surface */}
    <ellipse cx={40} cy={38} rx={32} ry={24} fill="#2ECC71" />

    {/* Sun in corner */}
    <g transform="translate(60, 20)">
      <circle cx={0} cy={0} r={4} fill="#F1C40F" />
      <line x1={0} y1={-7} x2={0} y2={-9} stroke="#F1C40F" strokeWidth={1} />
      <line x1={0} y1={7} x2={0} y2={9} stroke="#F1C40F" strokeWidth={1} />
      <line x1={7} y1={0} x2={9} y2={0} stroke="#F1C40F" strokeWidth={1} />
      <line x1={-7} y1={0} x2={-9} y2={0} stroke="#F1C40F" strokeWidth={1} />
    </g>

    {/* Tree - trunk and foliage */}
    <rect x={31} y={32} width={3} height={8} fill="#6B4423" />
    {/* Tree crown - circles */}
    <circle cx={32.5} cy={28} r={6} fill="#0F5F2F" />
    <circle cx={27} cy={30} r={4} fill="#0F5F2F" />
    <circle cx={38} cy={30} r={4} fill="#0F5F2F" />

    {/* Pond - blue oval */}
    <ellipse cx={50} cy={40} rx={8} ry={6} fill="#3498DB" opacity={0.7} />
    {/* Pond ripple */}
    <ellipse cx={50} cy={40} rx={7} ry={5} fill="none" stroke="#2980B9" strokeWidth={1} opacity={0.5} />
  </svg>
);

// i5: Weather & Climate - Blue island with thermometer, wind, snowflake
const IslandWeatherClimate: React.FC<IslandProps> = ({ size = 80 }) => (
  <svg viewBox="0 0 80 80" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
    {/* Glow ellipse */}
    <ellipse cx={40} cy={65} rx={28} ry={8} fill="rgba(52, 152, 219, 0.25)" />

    {/* Rocky underside */}
    <path d="M 20 45 L 25 50 L 18 52 L 28 55 L 22 58 L 32 60 L 58 60 L 52 58 L 62 55 L 56 52 L 66 50 L 61 45 Z"
      fill="#1F5A8C" />

    {/* Island body ellipse */}
    <ellipse cx={40} cy={42} rx={32} ry={26} fill="#2980B9" />

    {/* Top surface */}
    <ellipse cx={40} cy={38} rx={32} ry={24} fill="#3498DB" />

    {/* Thermometer */}
    <g transform="translate(25, 32)">
      {/* Stem */}
      <line x1={0} y1={-8} x2={0} y2={6} stroke="#2E3E50" strokeWidth={1.5} />
      {/* Bulb */}
      <circle cx={0} cy={8} r={2.5} fill="#E74C3C" />
      {/* Mercury fill */}
      <line x1={0} y1={4} x2={0} y2={7} stroke="#E74C3C" strokeWidth={2} />
    </g>

    {/* Wind swirls */}
    <g transform="translate(50, 30)">
      <path d="M -8 -3 Q -4 -4 0 -3" stroke="#2E3E50" strokeWidth={1.5} fill="none" strokeLinecap="round" />
      <path d="M -8 2 Q -4 1 0 2" stroke="#2E3E50" strokeWidth={1.5} fill="none" strokeLinecap="round" />
      <path d="M -8 7 Q -4 6 0 7" stroke="#2E3E50" strokeWidth={1.5} fill="none" strokeLinecap="round" />
    </g>

    {/* Snowflake */}
    <g transform="translate(40, 50)">
      {/* Center */}
      <circle cx={0} cy={0} r={1} fill="#E8F4F8" />
      {/* 6 arms */}
      <line x1={0} y1={-5} x2={0} y2={5} stroke="#E8F4F8" strokeWidth={1} />
      <line x1={-5} y1={0} x2={5} y2={0} stroke="#E8F4F8" strokeWidth={1} />
      <line x1={-3.5} y1={-3.5} x2={3.5} y2={3.5} stroke="#E8F4F8" strokeWidth={1} />
      {/* Side branches */}
      <line x1={-2} y1={-5} x2={-2.5} y2={-8} stroke="#E8F4F8" strokeWidth={0.8} />
      <line x1={2} y1={-5} x2={2.5} y2={-8} stroke="#E8F4F8" strokeWidth={0.8} />
    </g>
  </svg>
);

// i6: Earth & Water - Teal island with waves and crystal/mineral
const IslandEarthWater: React.FC<IslandProps> = ({ size = 80 }) => (
  <svg viewBox="0 0 80 80" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
    {/* Glow ellipse */}
    <ellipse cx={40} cy={65} rx={28} ry={8} fill="rgba(26, 188, 156, 0.25)" />

    {/* Rocky underside */}
    <path d="M 20 45 L 25 50 L 18 52 L 28 55 L 22 58 L 32 60 L 58 60 L 52 58 L 62 55 L 56 52 L 66 50 L 61 45 Z"
      fill="#117066" />

    {/* Island body ellipse */}
    <ellipse cx={40} cy={42} rx={32} ry={26} fill="#1B9E85" />

    {/* Top surface */}
    <ellipse cx={40} cy={38} rx={32} ry={24} fill="#1ABC9C" />

    {/* Waves on left */}
    <g transform="translate(20, 35)">
      <path d="M 0 0 Q 3 -2 6 0 Q 9 2 12 0" stroke="#117066" strokeWidth={1.5} fill="none" strokeLinecap="round" />
      <path d="M 0 6 Q 3 4 6 6 Q 9 8 12 6" stroke="#117066" strokeWidth={1.5} fill="none" strokeLinecap="round" />
    </g>

    {/* Mineral crystal/gem on right */}
    <g transform="translate(58, 30)">
      {/* Crystal shape - hexagonal */}
      <polygon points="0,-8 7,-4 7,4 0,8 -7,4 -7,-4" fill="#0F6A5E" opacity={0.8} />
      {/* Light reflection */}
      <path d="M -2 -3 L 2 -2 L 1 0" fill="#16A498" opacity={0.6} />
    </g>
  </svg>
);

// i7: Energy - Yellow island with lightning bolt, solar panel, and windmill
const IslandEnergy: React.FC<IslandProps> = ({ size = 80 }) => (
  <svg viewBox="0 0 80 80" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
    {/* Glow ellipse */}
    <ellipse cx={40} cy={65} rx={28} ry={8} fill="rgba(241, 196, 15, 0.25)" />

    {/* Rocky underside */}
    <path d="M 20 45 L 25 50 L 18 52 L 28 55 L 22 58 L 32 60 L 58 60 L 52 58 L 62 55 L 56 52 L 66 50 L 61 45 Z"
      fill="#B5860B" />

    {/* Island body ellipse */}
    <ellipse cx={40} cy={42} rx={32} ry={26} fill="#E8B60C" />

    {/* Top surface */}
    <ellipse cx={40} cy={38} rx={32} ry={24} fill="#F1C40F" />

    {/* Lightning bolt */}
    <g transform="translate(25, 28)">
      <polygon points="0,-8 3,-2 0,0 4,8 2,4 -2,4" fill="#E67E22" />
    </g>

    {/* Solar panel - rectangles */}
    <g transform="translate(42, 32)">
      {/* Panel base */}
      <rect x={-8} y={-6} width={16} height={5} fill="#2E3E50" />
      {/* Solar cells - grid */}
      <line x1={-4} y1={-6} x2={-4} y2={-1} stroke="#3498DB" strokeWidth={0.5} opacity={0.7} />
      <line x1={0} y1={-6} x2={0} y2={-1} stroke="#3498DB" strokeWidth={0.5} opacity={0.7} />
      <line x1={4} y1={-6} x2={4} y2={-1} stroke="#3498DB" strokeWidth={0.5} opacity={0.7} />
    </g>

    {/* Windmill - rotating blades and tower */}
    <g transform="translate(58, 35)">
      {/* Tower */}
      <line x1={0} y1={0} x2={0} y2={8} stroke="#2E3E50" strokeWidth={1.5} />
      {/* Hub */}
      <circle cx={0} cy={0} r={1.5} fill="#2E3E50" />
      {/* Blades - 3 triangles */}
      <polygon points="0,-5 2,-1 -2,-1" fill="#E67E22" opacity={0.8} />
      <polygon points="-4.3,2.5 -2,0 -1.2,3.5" fill="#E67E22" opacity={0.8} />
      <polygon points="4.3,2.5 2,0 1.2,3.5" fill="#E67E22" opacity={0.8} />
    </g>
  </svg>
);

// i8: Maps & Orientation - Orange island with compass rose and folded map
const IslandMapsOrientation: React.FC<IslandProps> = ({ size = 80 }) => (
  <svg viewBox="0 0 80 80" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
    {/* Glow ellipse */}
    <ellipse cx={40} cy={65} rx={28} ry={8} fill="rgba(230, 126, 34, 0.25)" />

    {/* Rocky underside */}
    <path d="M 20 45 L 25 50 L 18 52 L 28 55 L 22 58 L 32 60 L 58 60 L 52 58 L 62 55 L 56 52 L 66 50 L 61 45 Z"
      fill="#B85E0A" />

    {/* Island body ellipse */}
    <ellipse cx={40} cy={42} rx={32} ry={26} fill="#D67C33" />

    {/* Top surface */}
    <ellipse cx={40} cy={38} rx={32} ry={24} fill="#E67E22" />

    {/* Compass rose - N/S/E/W */}
    <g transform="translate(28, 32)">
      {/* N arrow */}
      <polygon points="0,-7 2,-3 -2,-3" fill="#8B4513" />
      {/* S arrow */}
      <polygon points="0,7 2,3 -2,3" fill="#8B4513" />
      {/* E arrow */}
      <polygon points="7,0 3,-2 3,2" fill="#8B4513" />
      {/* W arrow */}
      <polygon points="-7,0 -3,-2 -3,2" fill="#8B4513" />
      {/* Center circle */}
      <circle cx={0} cy={0} r={1.5} fill="#8B4513" />
      {/* Circle outline */}
      <circle cx={0} cy={0} r={7} fill="none" stroke="#8B4513" strokeWidth={0.8} />
    </g>

    {/* Folded map on right */}
    <g transform="translate(56, 35)">
      {/* Map base */}
      <rect x={-6} y={-5} width={12} height={10} fill="#D2B48C" />
      {/* Fold lines */}
      <line x1={0} y1={-5} x2={0} y2={5} stroke="#8B7355" strokeWidth={1} opacity={0.6} />
      <line x1={-3} y1={-5} x2={-3} y2={5} stroke="#8B7355" strokeWidth={0.8} opacity={0.5} />
      <line x1={3} y1={-5} x2={3} y2={5} stroke="#8B7355" strokeWidth={0.8} opacity={0.5} />
      {/* Geographic marks - small circles */}
      <circle cx={-4} cy={-2} r={0.8} fill="#E74C3C" opacity={0.6} />
      <circle cx={2} cy={1} r={0.8} fill="#E74C3C" opacity={0.6} />
    </g>
  </svg>
);

// i9: Grand Finale - Red-coral island with trophy cup and sparkles
const IslandGrandFinale: React.FC<IslandProps> = ({ size = 80 }) => (
  <svg viewBox="0 0 80 80" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
    {/* Glow ellipse */}
    <ellipse cx={40} cy={65} rx={28} ry={8} fill="rgba(231, 76, 60, 0.25)" />

    {/* Rocky underside */}
    <path d="M 20 45 L 25 50 L 18 52 L 28 55 L 22 58 L 32 60 L 58 60 L 52 58 L 62 55 L 56 52 L 66 50 L 61 45 Z"
      fill="#A03528" />

    {/* Island body ellipse */}
    <ellipse cx={40} cy={42} rx={32} ry={26} fill="#C23A1A" />

    {/* Top surface - coral tinted */}
    <ellipse cx={40} cy={38} rx={32} ry={24} fill="#E74C3C" />

    {/* Trophy cup - main body */}
    <g transform="translate(40, 30)">
      {/* Cup bowl */}
      <path d="M -8 0 L -6 6 Q 0 8 6 6 L 8 0 Z" fill="#F1C40F" />
      {/* Cup rim */}
      <ellipse cx={0} cy={0} rx={8} ry={2} fill="#D4A500" />
      {/* Handles */}
      <path d="M -8 2 Q -12 3 -10 6" stroke="#F1C40F" strokeWidth={2} fill="none" strokeLinecap="round" />
      <path d="M 8 2 Q 12 3 10 6" stroke="#F1C40F" strokeWidth={2} fill="none" strokeLinecap="round" />
      {/* Pedestal base */}
      <rect x={-3} y={6} width={6} height={3} fill="#D4A500" />
      {/* Base */}
      <ellipse cx={0} cy={9} rx={6} ry={2} fill="#D4A500" />
    </g>

    {/* Sparkles/stars around trophy */}
    {/* Top left sparkle */}
    <g transform="translate(20, 20)">
      <polygon points="0,-3 1,-1 3,0 1,1 0,3 -1,1 -3,0 -1,-1" fill="#FFD700" opacity={0.9} />
    </g>
    {/* Top right sparkle */}
    <g transform="translate(60, 22)">
      <polygon points="0,-2.5 0.8,-1 2.5,0 0.8,1 0,2.5 -0.8,1 -2.5,0 -0.8,-1" fill="#FFD700" opacity={0.8} />
    </g>
    {/* Bottom right sparkle */}
    <g transform="translate(62, 42)">
      <polygon points="0,-2 0.7,-0.8 2,0 0.7,0.8 0,2 -0.7,0.8 -2,0 -0.7,-0.8" fill="#FFD700" opacity={0.7} />
    </g>
    {/* Small sparkles - dots */}
    <circle cx={25} cy={45} r={1} fill="#FFD700" opacity={0.6} />
    <circle cx={55} cy={48} r={1} fill="#FFD700" opacity={0.6} />
  </svg>
);

export const SK_K4_ISLAND_SVGS: Record<string, React.FC<IslandProps>> = {
  i1: IslandHumanBody,
  i2: IslandMammalsBirds,
  i3: IslandReptilesInsects,
  i4: IslandEcosystems,
  i5: IslandWeatherClimate,
  i6: IslandEarthWater,
  i7: IslandEnergy,
  i8: IslandMapsOrientation,
  i9: IslandGrandFinale,
};
