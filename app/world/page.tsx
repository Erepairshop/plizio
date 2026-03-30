"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { WORLD_ZONES, getWorldProgress, isZoneUnlocked } from "@/lib/world";

// Zone positions on the SVG canvas (400x640 viewBox)
const ZONE_POS = [
  { cx: 108, cy: 100 }, // 1. Hegyvidek
  { cx: 298, cy: 162 }, // 2. Ocean
  { cx: 272, cy: 290 }, // 3. Varos
  { cx: 112, cy: 378 }, // 4. Erdo
  { cx: 228, cy: 488 }, // 5. Sivatag
  { cx: 340, cy: 574 }, // 6. Vulkan
];

// Bezier road segments between adjacent zones
const ROAD_SEGS = [
  "M 108,100 C 210,76 258,118 298,162",
  "M 298,162 C 338,206 336,252 272,290",
  "M 272,290 C 208,328 132,345 112,378",
  "M 112,378 C 92,412 158,455 228,488",
  "M 228,488 C 278,516 326,542 340,574",
];
const ROAD = ROAD_SEGS.join(" ");

// Island blob shapes per zone
const ISLAND_PATHS = [
  "M 108,52 C 138,46 165,60 168,80 C 172,100 162,128 140,136 C 118,144 82,138 66,118 C 50,98 55,72 75,60 C 85,55 98,54 108,52 Z",
  "M 298,114 C 328,108 358,122 364,144 C 370,166 356,196 332,204 C 308,212 272,204 258,184 C 244,164 250,134 272,122 C 280,118 289,115 298,114 Z",
  "M 272,242 C 302,236 332,252 338,272 C 344,292 330,326 306,334 C 282,342 248,332 238,312 C 228,292 236,260 258,248 C 263,244 268,243 272,242 Z",
  "M 112,332 C 144,324 172,340 178,362 C 184,384 168,414 144,420 C 120,426 82,416 68,394 C 54,372 62,342 84,333 C 94,329 103,333 112,332 Z",
  "M 228,442 C 264,434 298,450 308,474 C 318,498 302,530 274,538 C 246,546 202,534 188,510 C 174,486 186,454 210,444 C 216,441 222,443 228,442 Z",
  "M 340,528 C 368,522 394,538 398,558 C 402,578 388,608 364,614 C 340,620 306,610 296,590 C 286,570 298,542 318,532 C 325,529 333,529 340,528 Z",
];

// Twinkling star positions
const TWINKLE_STARS = [
  { cx: 35, cy: 42, r: 1.2 }, { cx: 185, cy: 28, r: 1.0 },
  { cx: 360, cy: 55, r: 1.3 }, { cx: 62, cy: 220, r: 0.9 },
  { cx: 350, cy: 230, r: 1.1 }, { cx: 155, cy: 450, r: 1.0 },
  { cx: 390, cy: 400, r: 1.2 }, { cx: 20, cy: 510, r: 0.8 },
  { cx: 8, cy: 90, r: 1.0 }, { cx: 200, cy: 360, r: 0.9 },
  { cx: 380, cy: 470, r: 1.1 }, { cx: 50, cy: 580, r: 1.0 },
];

// Static background stars
const STATIC_STARS = Array.from({ length: 40 }, (_, i) => ({
  cx: (i * 137.5 + 23) % 400,
  cy: (i * 97.3 + 17) % 640,
  r: 0.4 + (i % 3) * 0.3,
}));

const GAME_NAMES: Record<string, string> = {
  numberpath: "Number Path", minisudoku: "Mini Sudoku",
  memoryflash: "Memory Flash", spotdiff: "Spot Diff",
  reflexrush: "Reflex Rush", quickpick: "Quick Pick",
  kodex: "Kodex", wordscramble: "Word Scramble",
  mathtest: "Math Test", numberrush: "Number Rush",
  pipeflow: "Pipe Flow",
  patternforge: "Pattern Forge",
};

/* ─── MOUNTAIN ISLAND DETAIL ─── */
function MountainDetail() {
  return (
    <g>
      {/* Snow-capped peaks */}
      <polygon points="88,82 108,48 128,82" fill="#6B7B8A" />
      <polygon points="95,68 108,48 121,68" fill="#E8EFF5" />
      <polygon points="100,62 108,48 116,62" fill="#FFFFFF" />
      <polygon points="118,88 138,58 158,88" fill="#5A6A7A" />
      <polygon points="126,72 138,58 150,72" fill="#D8E4EE" />
      <polygon points="130,66 138,58 146,66" fill="#FFFFFF" />
      <polygon points="68,90 82,70 96,90" fill="#7A8A96" />
      <polygon points="73,80 82,70 91,80" fill="#D8E4EE" />
      {/* Rocky base texture */}
      <ellipse cx="108" cy="100" rx="48" ry="12" fill="#3A4A3A" opacity="0.3" />
      {/* Pine trees at base */}
      <g opacity="0.7">
        <polygon points="72,108 76,94 80,108" fill="#1A5A2A" />
        <rect x="75" y="108" width="2" height="5" fill="#5A3A1A" />
        <polygon points="136,106 140,92 144,106" fill="#1A5A2A" />
        <rect x="139" y="106" width="2" height="5" fill="#5A3A1A" />
        <polygon points="92,112 95,100 98,112" fill="#1A6A2A" />
        <rect x="94" y="112" width="2" height="4" fill="#5A3A1A" />
      </g>
      {/* Snow particles */}
      <circle cx="96" cy="56" r="1" fill="white" opacity="0.8" />
      <circle cx="142" cy="62" r="0.8" fill="white" opacity="0.6" />
      <circle cx="112" cy="68" r="0.7" fill="white" opacity="0.7" />
      {/* Eagle */}
      <path d="M 130,54 Q 134,50 138,54 Q 142,50 146,54" fill="none" stroke="#334" strokeWidth="1.2" />
    </g>
  );
}

/* ─── OCEAN ISLAND DETAIL ─── */
function OceanDetail() {
  return (
    <g>
      {/* Sandy beach ring */}
      <ellipse cx="298" cy="162" rx="40" ry="32" fill="#D4C490" opacity="0.35" />
      {/* Lighthouse */}
      <rect x="292" y="130" width="8" height="24" fill="#EEEEEE" />
      <rect x="292" y="130" width="8" height="4" fill="#E44444" />
      <rect x="292" y="138" width="8" height="4" fill="#E44444" />
      <rect x="292" y="146" width="8" height="4" fill="#E44444" />
      <polygon points="290,130 296,122 302,130" fill="#CC3333" />
      {/* Lighthouse light glow */}
      <circle cx="296" cy="126" r="3" fill="#FFD700" opacity="0.6" />
      {/* Waves around */}
      <path d="M 260,180 Q 268,176 276,180 Q 284,184 292,180" fill="none" stroke="#5BBBEE" strokeWidth="1.2" opacity="0.5" />
      <path d="M 305,185 Q 313,181 321,185 Q 329,189 337,185" fill="none" stroke="#5BBBEE" strokeWidth="1.2" opacity="0.5" />
      {/* Coral */}
      <path d="M 316,190 Q 318,182 320,188 Q 322,180 325,188" stroke="#FF7799" strokeWidth="1.5" fill="none" />
      <path d="M 270,192 Q 272,186 274,190 Q 276,184 278,190" stroke="#FF9966" strokeWidth="1.5" fill="none" />
      {/* Fish */}
      <ellipse cx="325" cy="172" rx="5" ry="2.5" fill="#4FC3F7" opacity="0.7" />
      <polygon points="320,170 316,168 316,176" fill="#4FC3F7" opacity="0.7" />
      {/* Shell */}
      <circle cx="282" cy="190" r="3" fill="#FFCCAA" opacity="0.6" />
      <path d="M 280,190 Q 282,186 284,190" fill="none" stroke="#CC9977" strokeWidth="0.8" />
      {/* Palm tree */}
      <rect x="308" y="150" width="3" height="18" fill="#8B6340" />
      <path d="M 310,150 Q 320,144 324,148" fill="none" stroke="#2E8B57" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M 310,150 Q 300,142 295,146" fill="none" stroke="#2E8B57" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M 310,150 Q 316,140 322,142" fill="none" stroke="#3A9A60" strokeWidth="2" strokeLinecap="round" />
      {/* Bubbles */}
      <circle cx="268" cy="168" r="2" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8" />
      <circle cx="330" cy="160" r="1.5" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="0.6" />
    </g>
  );
}

/* ─── CITY ISLAND DETAIL ─── */
function CityDetail() {
  return (
    <g>
      {/* Ground plane */}
      <ellipse cx="272" cy="300" rx="42" ry="14" fill="#2A2A3E" opacity="0.4" />
      {/* Tall building left */}
      <rect x="250" y="262" width="14" height="40" fill="#2A2A4E" />
      <rect x="250" y="262" width="14" height="3" fill="#4A4A6E" />
      {/* Windows */}
      {[268, 274, 280, 286, 292].map(y => (
        <g key={y}>
          <rect x="252" y={y} width="3" height="3" fill="#FFD700" opacity="0.7" />
          <rect x="259" y={y} width="3" height="3" fill="#88CCFF" opacity="0.5" />
        </g>
      ))}
      {/* Skyscraper center */}
      <rect x="267" y="254" width="16" height="48" fill="#1A1A3A" />
      <rect x="267" y="254" width="16" height="4" fill="#3A3A5A" />
      <polygon points="267,254 275,246 283,254" fill="#4A4A6A" />
      {/* Antenna */}
      <line x1="275" y1="246" x2="275" y2="238" stroke="#888" strokeWidth="1" />
      <circle cx="275" cy="237" r="1.5" fill="#FF2D78" opacity="0.8" />
      {/* Windows center */}
      {[260, 266, 272, 278, 284, 290].map(y => (
        <g key={`c${y}`}>
          <rect x="270" y={y} width="3" height="3" fill="#FFD700" opacity="0.6" />
          <rect x="277" y={y} width="3" height="3" fill="#FFD700" opacity="0.4" />
        </g>
      ))}
      {/* Short building right */}
      <rect x="286" y="278" width="12" height="24" fill="#2A2A4E" />
      {[282, 288, 294].map(y => (
        <g key={`r${y}`}>
          <rect x="288" y={y} width="3" height="3" fill="#88CCFF" opacity="0.5" />
          <rect x="293" y={y} width="3" height="3" fill="#FFD700" opacity="0.4" />
        </g>
      ))}
      {/* Street */}
      <rect x="248" y="302" width="48" height="4" fill="#3A3A4A" opacity="0.5" />
      <line x1="255" y1="304" x2="290" y2="304" stroke="#FFD700" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.4" />
      {/* Car */}
      <rect x="260" y="303" width="8" height="3" rx="1" fill="#FF2D78" opacity="0.6" />
      {/* Street lamp */}
      <line x1="295" y1="293" x2="295" y2="303" stroke="#888" strokeWidth="1" />
      <circle cx="295" cy="292" r="2" fill="#FFD700" opacity="0.5" />
      {/* Neon sign glow */}
      <rect x="252" y="296" width="10" height="3" fill="#B44DFF" opacity="0.3" rx="1" />
    </g>
  );
}

/* ─── FOREST ISLAND DETAIL ─── */
function ForestDetail() {
  return (
    <g>
      {/* Dense tree canopy */}
      <circle cx="92" cy="356" r="14" fill="#1A6A2A" />
      <circle cx="92" cy="352" r="11" fill="#2A8A3A" />
      <circle cx="82" cy="360" r="10" fill="#1D7A25" />
      <rect x="90" y="365" width="4" height="10" fill="#5A3A1A" />

      <circle cx="118" cy="362" r="16" fill="#1A6A2A" />
      <circle cx="118" cy="358" r="13" fill="#2A8A3A" />
      <circle cx="128" cy="366" r="11" fill="#1D7A25" />
      <rect x="116" y="372" width="4" height="10" fill="#5A3A1A" />

      <circle cx="140" cy="368" r="12" fill="#1A5A22" />
      <circle cx="140" cy="365" r="10" fill="#2A7A32" />
      <rect x="138" y="375" width="4" height="8" fill="#5A3A1A" />

      <circle cx="104" cy="380" r="14" fill="#166A26" />
      <circle cx="104" cy="376" r="11" fill="#2A8A36" />
      <rect x="102" y="388" width="4" height="9" fill="#5A3A1A" />

      {/* Small bush cluster */}
      <circle cx="75" cy="396" r="8" fill="#1A6A2A" />
      <circle cx="82" cy="394" r="7" fill="#2A8A38" />
      <circle cx="68" cy="398" r="6" fill="#1D7A28" />

      {/* Mushroom */}
      <rect x="130" y="396" width="2" height="5" fill="#EEE" />
      <ellipse cx="131" cy="396" rx="5" ry="3" fill="#CC2222" />
      <circle cx="129" cy="395" r="1" fill="white" opacity="0.8" />
      <circle cx="133" cy="394" r="0.8" fill="white" opacity="0.7" />

      {/* Flowers */}
      <circle cx="88" cy="406" r="2.5" fill="#FF88AA" opacity="0.7" />
      <circle cx="88" cy="406" r="1.2" fill="#FFE0E0" />
      <circle cx="148" cy="390" r="2.5" fill="#FFDD44" opacity="0.7" />
      <circle cx="148" cy="390" r="1.2" fill="#FFF8D0" />

      {/* Deer */}
      <ellipse cx="128" cy="402" rx="7" ry="4" fill="#8B6340" opacity="0.7" />
      <circle cx="134" cy="399" r="3" fill="#8B6340" opacity="0.7" />
      <rect x="124" y="405" width="1.5" height="5" fill="#7A5530" opacity="0.6" />
      <rect x="128" y="405" width="1.5" height="5" fill="#7A5530" opacity="0.6" />
      <rect x="132" y="405" width="1.5" height="5" fill="#7A5530" opacity="0.6" />

      {/* Fireflies */}
      <circle cx="96" cy="370" r="1.2" fill="#AAFF44" opacity="0.5" />
      <circle cx="136" cy="356" r="1" fill="#AAFF44" opacity="0.4" />
      <circle cx="78" cy="384" r="0.8" fill="#AAFF44" opacity="0.3" />

      {/* Birds */}
      <path d="M 100,345 Q 103,342 106,345 Q 109,342 112,345" fill="none" stroke="#223" strokeWidth="1" />
    </g>
  );
}

/* ─── DESERT ISLAND DETAIL ─── */
function DesertDetail() {
  return (
    <g>
      {/* Sand dune texture */}
      <path d="M 200,488 Q 220,470 240,478 Q 260,465 280,478" fill="none" stroke="#D4A842" strokeWidth="1.5" opacity="0.4" />
      <path d="M 208,500 Q 228,490 248,496 Q 268,486 282,496" fill="none" stroke="#C49838" strokeWidth="1" opacity="0.3" />

      {/* Pyramid big */}
      <polygon points="228,468 248,448 268,468" fill="#C4A050" />
      <polygon points="248,448 268,468 248,468" fill="#A88840" />
      {/* Pyramid small */}
      <polygon points="254,474 266,460 278,474" fill="#B89848" />
      <polygon points="266,460 278,474 266,474" fill="#9A8038" />

      {/* Cactus left */}
      <rect x="200" y="480" width="4" height="16" fill="#3A8A40" rx="2" />
      <path d="M 200,488 Q 194,486 194,480" stroke="#3A8A40" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M 204,484 Q 210,482 210,476" stroke="#3A8A40" strokeWidth="3" fill="none" strokeLinecap="round" />
      {/* Cactus flower */}
      <circle cx="194" cy="479" r="2" fill="#FF6688" opacity="0.7" />

      {/* Cactus right */}
      <rect x="270" y="506" width="3" height="12" fill="#3A8840" rx="1.5" />
      <path d="M 270,512 Q 266,510 266,506" stroke="#3A8840" strokeWidth="2.5" fill="none" strokeLinecap="round" />

      {/* Oasis */}
      <ellipse cx="236" cy="520" rx="14" ry="5" fill="#2288AA" opacity="0.5" />
      <ellipse cx="236" cy="519" rx="12" ry="4" fill="#44AACC" opacity="0.3" />
      {/* Palm at oasis */}
      <rect x="240" y="506" width="2.5" height="14" fill="#8B6340" />
      <path d="M 241,506 Q 250,500 254,503" fill="none" stroke="#2E8B57" strokeWidth="2" strokeLinecap="round" />
      <path d="M 241,506 Q 233,498 228,502" fill="none" stroke="#2E8B57" strokeWidth="2" strokeLinecap="round" />
      <path d="M 241,506 Q 248,496 252,498" fill="none" stroke="#3A9A60" strokeWidth="1.5" strokeLinecap="round" />

      {/* Camel */}
      <ellipse cx="214" cy="498" rx="6" ry="3.5" fill="#B89060" opacity="0.65" />
      <ellipse cx="214" cy="495" rx="3" ry="4" fill="#B89060" opacity="0.65" />
      <circle cx="220" cy="494" r="2.5" fill="#B89060" opacity="0.65" />
      <rect x="210" y="501" width="1.5" height="5" fill="#A08050" opacity="0.5" />
      <rect x="216" y="501" width="1.5" height="5" fill="#A08050" opacity="0.5" />

      {/* Sun heat lines */}
      <line x1="252" y1="444" x2="254" y2="440" stroke="#FFD700" strokeWidth="0.8" opacity="0.3" />
      <line x1="260" y1="446" x2="262" y2="442" stroke="#FFD700" strokeWidth="0.8" opacity="0.25" />
      <line x1="244" y1="446" x2="246" y2="442" stroke="#FFD700" strokeWidth="0.8" opacity="0.25" />

      {/* Scorpion */}
      <path d="M 276,524 Q 280,522 282,526 Q 284,528 286,524" stroke="#8B6340" strokeWidth="1" fill="none" opacity="0.4" />
    </g>
  );
}

/* ─── VOLCANO ISLAND DETAIL ─── */
function VolcanoDetail() {
  return (
    <g>
      {/* Volcano shape */}
      <polygon points="320,590 340,548 360,590" fill="#5A3030" />
      <polygon points="325,590 340,555 355,590" fill="#6A3A3A" />
      {/* Crater */}
      <ellipse cx="340" cy="552" rx="8" ry="4" fill="#3A1A1A" />
      <ellipse cx="340" cy="552" rx="6" ry="3" fill="#FF4422" opacity="0.5" />

      {/* Lava flows */}
      <path d="M 338,556 Q 336,566 332,580 Q 330,588 328,592" stroke="#FF4422" strokeWidth="2.5" fill="none" opacity="0.6" />
      <path d="M 342,556 Q 344,564 348,578 Q 350,586 352,592" stroke="#FF6633" strokeWidth="2" fill="none" opacity="0.5" />
      <path d="M 340,556 Q 340,568 340,580" stroke="#FF8844" strokeWidth="1.5" fill="none" opacity="0.4" />

      {/* Lava glow at base */}
      <ellipse cx="340" cy="590" rx="20" ry="5" fill="#FF4422" opacity="0.15" />

      {/* Smoke puffs */}
      <circle cx="338" cy="542" r="4" fill="#888" opacity="0.25" />
      <circle cx="342" cy="536" r="5" fill="#888" opacity="0.2" />
      <circle cx="336" cy="530" r="6" fill="#888" opacity="0.15" />
      <circle cx="344" cy="524" r="5" fill="#888" opacity="0.1" />

      {/* Sparks */}
      <circle cx="336" cy="548" r="1.2" fill="#FFAA00" opacity="0.7" />
      <circle cx="344" cy="546" r="1" fill="#FFCC00" opacity="0.6" />
      <circle cx="340" cy="544" r="0.8" fill="#FF6600" opacity="0.5" />

      {/* Dark rocks */}
      <circle cx="310" cy="600" r="4" fill="#3A2A2A" opacity="0.5" />
      <circle cx="368" cy="598" r="3" fill="#3A2A2A" opacity="0.4" />
      <circle cx="350" cy="606" r="3.5" fill="#3A2A2A" opacity="0.45" />

      {/* Ash particles */}
      <circle cx="330" cy="560" r="0.6" fill="#AAA" opacity="0.3" />
      <circle cx="348" cy="554" r="0.5" fill="#AAA" opacity="0.25" />
      <circle cx="334" cy="568" r="0.7" fill="#999" opacity="0.2" />
    </g>
  );
}

/* ─── ANIMATED WATER WAVE ─── */
function WaterWaves() {
  return (
    <>
      {/* Large slow waves */}
      {[60, 140, 220, 310, 400, 490, 570].map((y, i) => (
        <motion.path
          key={`w${i}`}
          d={`M 0,${y} Q 50,${y - 6} 100,${y} Q 150,${y + 6} 200,${y} Q 250,${y - 6} 300,${y} Q 350,${y + 6} 400,${y}`}
          fill="none"
          stroke="rgba(14,165,233,0.08)"
          strokeWidth={1.5}
          animate={{
            d: [
              `M 0,${y} Q 50,${y - 6} 100,${y} Q 150,${y + 6} 200,${y} Q 250,${y - 6} 300,${y} Q 350,${y + 6} 400,${y}`,
              `M 0,${y} Q 50,${y + 6} 100,${y} Q 150,${y - 6} 200,${y} Q 250,${y + 6} 300,${y} Q 350,${y - 6} 400,${y}`,
              `M 0,${y} Q 50,${y - 6} 100,${y} Q 150,${y + 6} 200,${y} Q 250,${y - 6} 300,${y} Q 350,${y + 6} 400,${y}`,
            ],
          }}
          transition={{ duration: 4 + i * 0.6, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
      {/* Small fast ripples */}
      {[95, 200, 350, 460, 540].map((y, i) => (
        <motion.line
          key={`r${i}`}
          x1={30 + i * 60} y1={y} x2={70 + i * 60} y2={y}
          stroke="rgba(100,200,255,0.06)"
          strokeWidth={1}
          animate={{ opacity: [0.1, 0.5, 0.1], x1: [30 + i * 60, 35 + i * 60, 30 + i * 60] }}
          transition={{ duration: 2.5 + i * 0.3, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
        />
      ))}
      {/* Foam/bubble clusters near islands */}
      {[
        { cx: 160, cy: 110, r: 1.5 }, { cx: 56, cy: 130, r: 1.2 },
        { cx: 330, cy: 210, r: 1.3 }, { cx: 240, cy: 260, r: 1.0 },
        { cx: 170, cy: 350, r: 1.2 }, { cx: 60, cy: 420, r: 1.1 },
        { cx: 180, cy: 530, r: 1.0 }, { cx: 300, cy: 540, r: 1.3 },
      ].map((b, i) => (
        <motion.circle
          key={`b${i}`}
          cx={b.cx} cy={b.cy} r={b.r}
          fill="rgba(180,220,255,0.12)"
          animate={{ r: [b.r, b.r * 1.8, b.r], opacity: [0.12, 0.3, 0.12] }}
          transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.7 }}
        />
      ))}
    </>
  );
}

/* ─── ANIMATED SMOKE FOR VOLCANO ─── */
function VolcanoSmoke() {
  return (
    <>
      {[0, 1, 2].map(i => (
        <motion.circle
          key={`smoke${i}`}
          cx={338 + i * 3}
          cy={540}
          r={3 + i * 2}
          fill="#777"
          animate={{
            cy: [540, 510 - i * 10, 480 - i * 15],
            opacity: [0.25, 0.15, 0],
            r: [3 + i * 2, 5 + i * 2, 8 + i * 2],
          }}
          transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeOut", delay: i * 1 }}
        />
      ))}
    </>
  );
}

/* ─── ANIMATED LAVA GLOW ─── */
function LavaGlow() {
  return (
    <motion.ellipse
      cx={340} cy={555}
      rx={10} ry={5}
      fill="#FF4422"
      animate={{ opacity: [0.2, 0.45, 0.2], rx: [10, 12, 10] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

/* ─── ANIMATED LIGHTHOUSE BEAM ─── */
function LighthouseBeam() {
  return (
    <motion.g
      animate={{ rotate: [0, 360] }}
      transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      style={{ transformOrigin: "296px 126px" }}
    >
      <line x1="296" y1="126" x2="330" y2="116" stroke="#FFD700" strokeWidth="1" opacity="0.3" />
      <line x1="296" y1="126" x2="332" y2="120" stroke="#FFD700" strokeWidth="0.5" opacity="0.2" />
    </motion.g>
  );
}

/* ─── ANIMATED CITY LIGHTS BLINK ─── */
function CityLightsBlink() {
  return (
    <>
      <motion.circle
        cx={275} cy={237} r={1.5}
        fill="#FF2D78"
        animate={{ opacity: [0.8, 0.2, 0.8] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
      <motion.rect
        x={252} y={268} width={3} height={3}
        fill="#FFD700"
        animate={{ opacity: [0.7, 0.2, 0.7] }}
        transition={{ duration: 2.2, repeat: Infinity, delay: 0.5 }}
      />
      <motion.rect
        x={277} y={278} width={3} height={3}
        fill="#FFD700"
        animate={{ opacity: [0.4, 0.9, 0.4] }}
        transition={{ duration: 1.8, repeat: Infinity, delay: 1 }}
      />
    </>
  );
}

/* ─── FIREFLY ANIMATION FOR FOREST ─── */
function Fireflies() {
  return (
    <>
      {[
        { cx: 96, cy: 370 }, { cx: 136, cy: 356 }, { cx: 78, cy: 384 },
        { cx: 120, cy: 390 }, { cx: 148, cy: 375 },
      ].map((f, i) => (
        <motion.circle
          key={`ff${i}`}
          cx={f.cx} cy={f.cy} r={1.2}
          fill="#AAFF44"
          animate={{
            opacity: [0.1, 0.7, 0.1],
            cx: [f.cx, f.cx + (i % 2 === 0 ? 3 : -3), f.cx],
            cy: [f.cy, f.cy - 2, f.cy],
          }}
          transition={{ duration: 2 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.6 }}
        />
      ))}
    </>
  );
}

/* ─── DESERT HEAT SHIMMER ─── */
function HeatShimmer() {
  return (
    <motion.path
      d="M 200,460 Q 220,456 240,460 Q 260,464 280,460"
      fill="none"
      stroke="rgba(255,200,100,0.08)"
      strokeWidth={20}
      animate={{
        d: [
          "M 200,460 Q 220,456 240,460 Q 260,464 280,460",
          "M 200,460 Q 220,464 240,460 Q 260,456 280,460",
          "M 200,460 Q 220,456 240,460 Q 260,464 280,460",
        ],
      }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

/* ─── AURORA BOREALIS ─── */
function Aurora() {
  return (
    <g opacity="0.35">
      {/* Green aurora band */}
      <motion.path
        d="M 0,20 Q 60,5 120,18 Q 200,35 280,12 Q 340,0 400,22"
        fill="none"
        stroke="#00FF88"
        strokeWidth={8}
        strokeLinecap="round"
        animate={{
          d: [
            "M 0,20 Q 60,5 120,18 Q 200,35 280,12 Q 340,0 400,22",
            "M 0,28 Q 60,15 120,28 Q 200,10 280,25 Q 340,8 400,18",
            "M 0,20 Q 60,5 120,18 Q 200,35 280,12 Q 340,0 400,22",
          ],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Purple aurora band */}
      <motion.path
        d="M 0,35 Q 80,20 160,38 Q 240,50 320,28 Q 380,18 400,36"
        fill="none"
        stroke="#B44DFF"
        strokeWidth={6}
        strokeLinecap="round"
        animate={{
          d: [
            "M 0,35 Q 80,20 160,38 Q 240,50 320,28 Q 380,18 400,36",
            "M 0,40 Q 80,30 160,42 Q 240,22 320,38 Q 380,28 400,32",
            "M 0,35 Q 80,20 160,38 Q 240,50 320,28 Q 380,18 400,36",
          ],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      {/* Cyan aurora shimmer */}
      <motion.path
        d="M 0,12 Q 100,0 200,15 Q 300,28 400,8"
        fill="none"
        stroke="#00D4FF"
        strokeWidth={4}
        strokeLinecap="round"
        animate={{
          opacity: [0.15, 0.35, 0.15],
          d: [
            "M 0,12 Q 100,0 200,15 Q 300,28 400,8",
            "M 0,18 Q 100,8 200,22 Q 300,10 400,15",
            "M 0,12 Q 100,0 200,15 Q 300,28 400,8",
          ],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
    </g>
  );
}

/* ─── FLOATING CLOUDS ─── */
function FloatingClouds() {
  const clouds = [
    { y: 50, w: 60, h: 16, dur: 28, delay: 0 },
    { y: 180, w: 45, h: 12, dur: 34, delay: 8 },
    { y: 320, w: 55, h: 14, dur: 26, delay: 4 },
    { y: 440, w: 40, h: 11, dur: 32, delay: 12 },
    { y: 560, w: 50, h: 13, dur: 30, delay: 6 },
  ];
  return (
    <g>
      {clouds.map((c, i) => (
        <motion.g
          key={`cloud${i}`}
          animate={{ x: [-80, 480] }}
          transition={{ duration: c.dur, repeat: Infinity, ease: "linear", delay: c.delay }}
        >
          <ellipse cx={0} cy={c.y} rx={c.w / 2} ry={c.h / 2} fill="white" opacity="0.04" />
          <ellipse cx={-c.w * 0.3} cy={c.y + 3} rx={c.w * 0.3} ry={c.h * 0.35} fill="white" opacity="0.03" />
          <ellipse cx={c.w * 0.3} cy={c.y + 2} rx={c.w * 0.35} ry={c.h * 0.4} fill="white" opacity="0.035" />
        </motion.g>
      ))}
    </g>
  );
}

/* ─── SEA CREATURES ─── */
function SeaCreatures() {
  return (
    <>
      {/* Whale shadow - slow drift */}
      <motion.g
        animate={{ x: [-60, 460] }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear", delay: 5 }}
      >
        <ellipse cx={0} cy={250} rx={22} ry={8} fill="rgba(10,40,80,0.4)" />
        <ellipse cx={-18} cy={250} rx={5} ry={3} fill="rgba(10,40,80,0.3)" />
        <path d="M 22,250 Q 28,244 32,250 Q 28,256 22,250" fill="rgba(10,40,80,0.35)" />
      </motion.g>
      {/* Small fish school 1 */}
      <motion.g
        animate={{ x: [420, -50] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear", delay: 2 }}
      >
        {[0, 8, 4, 12, 6].map((dx, j) => (
          <g key={`fs1-${j}`}>
            <ellipse cx={dx} cy={420 + (j % 3) * 6} rx={3} ry={1.5} fill="rgba(80,180,255,0.2)" />
            <polygon points={`${dx + 3},${420 + (j % 3) * 6 - 1} ${dx + 5},${420 + (j % 3) * 6} ${dx + 3},${420 + (j % 3) * 6 + 1}`} fill="rgba(80,180,255,0.15)" />
          </g>
        ))}
      </motion.g>
      {/* Small fish school 2 */}
      <motion.g
        animate={{ x: [-40, 440] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear", delay: 10 }}
      >
        {[0, 6, 3, 10].map((dx, j) => (
          <g key={`fs2-${j}`}>
            <ellipse cx={dx} cy={140 + (j % 2) * 5} rx={2.5} ry={1.2} fill="rgba(100,200,150,0.18)" />
          </g>
        ))}
      </motion.g>
      {/* Jellyfish */}
      <motion.g
        animate={{ y: [0, -15, 0], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <ellipse cx={32} cy={480} rx={6} ry={4} fill="rgba(180,100,255,0.15)" />
        <path d="M 28,484 Q 28,492 26,496" stroke="rgba(180,100,255,0.1)" strokeWidth="0.8" fill="none" />
        <path d="M 32,484 Q 32,494 32,498" stroke="rgba(180,100,255,0.1)" strokeWidth="0.8" fill="none" />
        <path d="M 36,484 Q 36,492 38,496" stroke="rgba(180,100,255,0.1)" strokeWidth="0.8" fill="none" />
      </motion.g>
      {/* Sea turtle */}
      <motion.g
        animate={{ x: [380, -40] }}
        transition={{ duration: 55, repeat: Infinity, ease: "linear", delay: 15 }}
      >
        <ellipse cx={0} cy={350} rx={7} ry={5} fill="rgba(60,140,80,0.2)" />
        <circle cx={-6} cy={349} r={2.5} fill="rgba(60,140,80,0.18)" />
        {/* Flippers */}
        <ellipse cx={-4} cy={345} rx={3} ry={1.2} fill="rgba(60,140,80,0.15)" transform="rotate(-20 -4 345)" />
        <ellipse cx={-4} cy={355} rx={3} ry={1.2} fill="rgba(60,140,80,0.15)" transform="rotate(20 -4 355)" />
      </motion.g>
    </>
  );
}

/* ─── ZONE WEATHER PARTICLES ─── */
function MountainSnow() {
  const flakes = Array.from({ length: 12 }, (_, i) => ({
    x: 70 + (i * 11) % 80,
    delay: i * 0.4,
    dur: 2.5 + (i % 3) * 0.5,
    r: 0.6 + (i % 3) * 0.3,
  }));
  return (
    <>
      {flakes.map((f, i) => (
        <motion.circle
          key={`snow${i}`}
          cx={f.x} r={f.r}
          fill="white"
          animate={{
            cy: [50, 135],
            opacity: [0.8, 0],
            cx: [f.x, f.x + (i % 2 === 0 ? 4 : -4)],
          }}
          transition={{ duration: f.dur, repeat: Infinity, ease: "linear", delay: f.delay }}
        />
      ))}
    </>
  );
}

function ForestLeaves() {
  const leaves = [
    { x: 100, y: 340, rot: 0 }, { x: 130, y: 350, rot: 45 },
    { x: 85, y: 360, rot: 90 }, { x: 145, y: 345, rot: 30 },
    { x: 115, y: 355, rot: 60 },
  ];
  return (
    <>
      {leaves.map((l, i) => (
        <motion.ellipse
          key={`leaf${i}`}
          rx={2} ry={1}
          fill="#6ABF4A"
          animate={{
            cx: [l.x, l.x + 15, l.x + 25],
            cy: [l.y, l.y + 20, l.y + 40],
            opacity: [0.6, 0.4, 0],
            rotate: [l.rot, l.rot + 180, l.rot + 360],
          }}
          transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: "easeOut", delay: i * 1.5 }}
        />
      ))}
    </>
  );
}

function DesertSand() {
  return (
    <>
      {[0, 1, 2, 3].map(i => (
        <motion.line
          key={`sand${i}`}
          y1={470 + i * 15} y2={470 + i * 15}
          stroke="rgba(210,180,100,0.12)"
          strokeWidth={0.8}
          animate={{
            x1: [190, 290],
            x2: [200, 300],
            opacity: [0, 0.2, 0],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.8 }}
        />
      ))}
    </>
  );
}

function VolcanoEmbers() {
  const embers = [
    { x: 338, y: 548 }, { x: 342, y: 546 }, { x: 336, y: 550 },
    { x: 340, y: 544 }, { x: 344, y: 552 }, { x: 334, y: 548 },
  ];
  return (
    <>
      {embers.map((e, i) => (
        <motion.circle
          key={`ember${i}`}
          r={0.8 + (i % 3) * 0.3}
          fill={i % 2 === 0 ? "#FFAA00" : "#FF5500"}
          animate={{
            cx: [e.x, e.x + (i % 2 === 0 ? 6 : -6)],
            cy: [e.y, e.y - 25 - i * 5],
            opacity: [0.9, 0],
            r: [0.8 + (i % 3) * 0.3, 0.2],
          }}
          transition={{ duration: 1.5 + i * 0.3, repeat: Infinity, ease: "easeOut", delay: i * 0.5 }}
        />
      ))}
    </>
  );
}

function OceanBubbles() {
  const bubbles = [
    { x: 270, y: 195 }, { x: 310, y: 185 }, { x: 290, y: 200 },
    { x: 325, y: 170 }, { x: 265, y: 175 },
  ];
  return (
    <>
      {bubbles.map((b, i) => (
        <motion.circle
          key={`ob${i}`}
          cx={b.x}
          r={1 + (i % 2) * 0.5}
          fill="none"
          stroke="rgba(255,255,255,0.25)"
          strokeWidth={0.6}
          animate={{
            cy: [b.y, b.y - 20],
            opacity: [0.3, 0],
          }}
          transition={{ duration: 2 + i * 0.3, repeat: Infinity, ease: "easeOut", delay: i * 1.2 }}
        />
      ))}
    </>
  );
}

/* ─── LOCKED ZONE FOG ─── */
function LockedFog({ path, unlocked }: { path: string; unlocked: boolean }) {
  if (unlocked) return null;
  return (
    <g>
      <motion.path
        d={path}
        fill="rgba(10,10,30,0.6)"
        animate={{ opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Swirling fog wisps */}
      <motion.path
        d={path}
        fill="none"
        stroke="rgba(100,100,140,0.15)"
        strokeWidth={3}
        strokeDasharray="8 12"
        animate={{ strokeDashoffset: [0, -40] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      />
    </g>
  );
}

/* ─── ENERGY TRAIL ON COMPLETED ROAD ─── */
function EnergyTrail({ completedZones }: { completedZones: string[] }) {
  return (
    <>
      {ROAD_SEGS.map((seg, i) => {
        const show = completedZones.includes(WORLD_ZONES[i].id);
        if (!show) return null;
        const zone = WORLD_ZONES[i];
        return (
          <g key={`energy-${i}`}>
            {/* Pulsing energy dot traveling along path */}
            <motion.circle
              r={3}
              fill={zone.color}
              opacity={0.8}
              style={{ filter: `drop-shadow(0 0 4px ${zone.color})` }}
            >
              <animateMotion
                dur="3s"
                repeatCount="indefinite"
                path={seg}
              />
            </motion.circle>
            {/* Second dot offset */}
            <motion.circle
              r={2}
              fill={zone.color}
              opacity={0.5}
            >
              <animateMotion
                dur="3s"
                repeatCount="indefinite"
                path={seg}
                begin="1.5s"
              />
            </motion.circle>
          </g>
        );
      })}
    </>
  );
}

/* ─── COMPASS ROSE ─── */
function CompassRose() {
  return (
    <motion.g
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5, duration: 0.6 }}
    >
      <g transform="translate(375, 620)" opacity="0.3">
        {/* Outer ring */}
        <circle cx="0" cy="0" r="14" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" />
        {/* Cardinal points */}
        <polygon points="0,-12 -2,-4 2,-4" fill="#FFD700" opacity="0.6" />
        <polygon points="0,12 -2,4 2,4" fill="rgba(255,255,255,0.3)" />
        <polygon points="-12,0 -4,-2 -4,2" fill="rgba(255,255,255,0.3)" />
        <polygon points="12,0 4,-2 4,2" fill="rgba(255,255,255,0.3)" />
        {/* Diagonal points */}
        <line x1="-8" y1="-8" x2="-3" y2="-3" stroke="rgba(255,255,255,0.15)" strokeWidth="0.6" />
        <line x1="8" y1="-8" x2="3" y2="-3" stroke="rgba(255,255,255,0.15)" strokeWidth="0.6" />
        <line x1="-8" y1="8" x2="-3" y2="3" stroke="rgba(255,255,255,0.15)" strokeWidth="0.6" />
        <line x1="8" y1="8" x2="3" y2="3" stroke="rgba(255,255,255,0.15)" strokeWidth="0.6" />
        {/* Center dot */}
        <circle cx="0" cy="0" r="1.5" fill="#FFD700" opacity="0.5" />
        {/* N label */}
        <text x="0" y="-16" textAnchor="middle" fontSize="5" fill="#FFD700" opacity="0.5" fontWeight="bold">N</text>
      </g>
    </motion.g>
  );
}

export default function WorldPage() {
  const [completedZones, setCompletedZones] = useState<string[]>([]);
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    setCompletedZones(getWorldProgress().completedZones);
  }, []);

  const selZone = selected !== null ? WORLD_ZONES[selected] : null;
  const selUnlocked = selected !== null ? isZoneUnlocked(selected, completedZones) : false;
  const selDone = selZone ? completedZones.includes(selZone.id) : false;

  const progressIdx = Math.max(
    0,
    WORLD_ZONES.findIndex((z, i) => !isZoneUnlocked(i, completedZones)) - 1
  );
  const charPos = ZONE_POS[Math.min(progressIdx, ZONE_POS.length - 1)];

  return (
    <main
      className="min-h-screen flex flex-col items-center pb-8 select-none"
      style={{ background: "#0A0A1A" }}
      onClick={() => setSelected(null)}
    >
      {/* Header */}
      <div className="w-full max-w-md flex items-center gap-3 px-4 pt-6 pb-1">
        <Link
          href="/"
          className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white/60 hover:bg-white/20 hover:text-white transition-colors shrink-0"
        >
          <ArrowLeft size={16} />
        </Link>
        <div className="flex-1 min-w-0">
          <h1 className="text-white font-black text-xl leading-tight">Plizio World</h1>
          <p className="text-white/40 text-xs">
            {completedZones.length} / {WORLD_ZONES.length} zóna teljesítve
          </p>
        </div>
        <div className="flex items-center gap-1.5 shrink-0">
          {WORLD_ZONES.map((z) => (
            <div
              key={z.id}
              className="w-2 h-2 rounded-full transition-all duration-300"
              style={{
                background: completedZones.includes(z.id) ? z.color : "rgba(255,255,255,0.10)",
                boxShadow: completedZones.includes(z.id) ? `0 0 6px ${z.glow}` : "none",
              }}
            />
          ))}
        </div>
      </div>

      {/* SVG Map */}
      <div className="w-full max-w-md px-2" onClick={(e) => e.stopPropagation()}>
        <svg
          viewBox="0 0 400 640"
          className="w-full"
          style={{
            maxHeight: selected !== null ? "46vh" : "68vh",
            transition: "max-height 0.3s ease",
          }}
        >
          <defs>
            {/* Ocean water gradient */}
            <radialGradient id="waterGrad" cx="50%" cy="50%" r="55%">
              <stop offset="0%" stopColor="#0e2a4a" />
              <stop offset="60%" stopColor="#081e38" />
              <stop offset="100%" stopColor="#040e1e" />
            </radialGradient>
            {/* Island terrain gradients */}
            <radialGradient id="mountainTerrain" cx="40%" cy="35%" r="60%">
              <stop offset="0%" stopColor="#4A6A4A" />
              <stop offset="100%" stopColor="#2A3A2A" />
            </radialGradient>
            <radialGradient id="oceanTerrain" cx="40%" cy="35%" r="60%">
              <stop offset="0%" stopColor="#3A6A5A" />
              <stop offset="100%" stopColor="#1A3A2A" />
            </radialGradient>
            <radialGradient id="cityTerrain" cx="40%" cy="35%" r="60%">
              <stop offset="0%" stopColor="#2A2A3E" />
              <stop offset="100%" stopColor="#1A1A2E" />
            </radialGradient>
            <radialGradient id="forestTerrain" cx="40%" cy="35%" r="60%">
              <stop offset="0%" stopColor="#2A5A2A" />
              <stop offset="100%" stopColor="#1A3A1A" />
            </radialGradient>
            <radialGradient id="desertTerrain" cx="40%" cy="35%" r="60%">
              <stop offset="0%" stopColor="#8A7A4A" />
              <stop offset="100%" stopColor="#5A4A2A" />
            </radialGradient>
            <radialGradient id="volcanoTerrain" cx="40%" cy="35%" r="60%">
              <stop offset="0%" stopColor="#4A2A2A" />
              <stop offset="100%" stopColor="#2A1A1A" />
            </radialGradient>
            {/* Island edge shadow */}
            <filter id="islandShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="3" stdDeviation="5" floodColor="#000" floodOpacity="0.6" />
            </filter>
            {/* Glow filter */}
            <filter id="glow" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            {/* Inner shadow for islands */}
            <filter id="innerGlow" x="-10%" y="-10%" width="120%" height="120%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          {/* Ocean background */}
          <rect x="0" y="0" width="400" height="640" fill="url(#waterGrad)" />

          {/* Aurora borealis */}
          <Aurora />

          {/* Water animation */}
          <WaterWaves />

          {/* Floating clouds */}
          <FloatingClouds />

          {/* Sea creatures */}
          <SeaCreatures />

          {/* Static stars */}
          {STATIC_STARS.map((s, i) => (
            <circle key={i} cx={s.cx} cy={s.cy} r={s.r} fill="rgba(255,255,255,0.2)" />
          ))}

          {/* Twinkling stars */}
          {TWINKLE_STARS.map((s, i) => (
            <motion.circle
              key={i}
              cx={s.cx} cy={s.cy} r={s.r}
              fill="white"
              animate={{ opacity: [0.15, 0.9, 0.15], r: [s.r, s.r * 1.6, s.r] }}
              transition={{ duration: 2.5 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.6 }}
            />
          ))}

          {/* Island blobs with terrain fills */}
          {ISLAND_PATHS.map((d, i) => {
            const zone = WORLD_ZONES[i];
            const unlocked = isZoneUnlocked(i, completedZones);
            const done = completedZones.includes(zone.id);
            const terrainIds = ["mountainTerrain", "oceanTerrain", "cityTerrain", "forestTerrain", "desertTerrain", "volcanoTerrain"];
            return (
              <g key={`island-${i}`}>
                {/* Island shadow base */}
                <path d={d} fill="none" style={{ filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.6))" }} />
                {/* Island terrain fill */}
                <motion.path
                  d={d}
                  fill={unlocked ? `url(#${terrainIds[i]})` : "#111827"}
                  stroke={unlocked ? zone.color + "55" : "rgba(255,255,255,0.06)"}
                  strokeWidth={2}
                  style={{
                    filter: done
                      ? `drop-shadow(0 0 10px ${zone.color}66)`
                      : undefined,
                  }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.05 + i * 0.08, duration: 0.5 }}
                />
                {/* Coastal foam/beach ring */}
                {unlocked && (
                  <path
                    d={d}
                    fill="none"
                    stroke={i === 4 ? "rgba(210,190,130,0.2)" : "rgba(180,220,240,0.12)"}
                    strokeWidth={4}
                    strokeDasharray="4 6"
                  />
                )}
              </g>
            );
          })}

          {/* Locked zone fog overlay */}
          {ISLAND_PATHS.map((d, i) => (
            <LockedFog key={`fog-${i}`} path={d} unlocked={isZoneUnlocked(i, completedZones)} />
          ))}

          {/* Detailed terrain decorations per zone */}
          <MountainDetail />
          <MountainSnow />
          <OceanDetail />
          <LighthouseBeam />
          <OceanBubbles />
          <CityDetail />
          <CityLightsBlink />
          <ForestDetail />
          <Fireflies />
          <ForestLeaves />
          <HeatShimmer />
          <DesertSand />
          <DesertDetail />
          <VolcanoDetail />
          <VolcanoSmoke />
          <VolcanoEmbers />
          <LavaGlow />

          {/* Completed road segments (colored glow) */}
          {ROAD_SEGS.map((seg, i) => {
            const show = completedZones.includes(WORLD_ZONES[i].id);
            if (!show) return null;
            return (
              <motion.path
                key={`road-glow-${i}`}
                d={seg}
                fill="none"
                stroke={WORLD_ZONES[i].color}
                strokeWidth={3.5}
                strokeLinecap="round"
                strokeOpacity={0.5}
                filter="url(#glow)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            );
          })}

          {/* Road shadow */}
          <path d={ROAD} fill="none" stroke="rgba(0,0,0,0.5)" strokeWidth={12} strokeLinecap="round" />

          {/* Main road */}
          <path d={ROAD} fill="none" stroke="rgba(255,255,255,0.10)" strokeWidth={4} strokeLinecap="round" />

          {/* Dashed center line */}
          <path
            d={ROAD}
            fill="none"
            stroke="rgba(255,255,255,0.16)"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeDasharray="6 10"
          />

          {/* Animated road reveal */}
          <motion.path
            d={ROAD}
            fill="none"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth={2}
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2.4, ease: "easeInOut", delay: 0.2 }}
          />

          {/* Energy trail on completed roads */}
          <EnergyTrail completedZones={completedZones} />

          {/* Progress character */}
          {completedZones.length > 0 && (
            <motion.g
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.2, type: "spring" }}
            >
              <circle cx={charPos.cx} cy={charPos.cy - 34} r={10} fill="#fff" opacity={0.95} />
              <text x={charPos.cx} y={charPos.cy - 34} textAnchor="middle" dominantBaseline="central" fontSize={11}>
                ⭐
              </text>
              <line x1={charPos.cx} y1={charPos.cy - 24} x2={charPos.cx} y2={charPos.cy - 22}
                stroke="white" strokeWidth={1.5} opacity={0.6} />
            </motion.g>
          )}

          {/* Zone nodes */}
          {WORLD_ZONES.map((zone, i) => {
            const { cx, cy } = ZONE_POS[i];
            const unlocked = isZoneUnlocked(i, completedZones);
            const done = completedZones.includes(zone.id);
            const isSel = selected === i;

            return (
              <motion.g
                key={zone.id}
                onClick={(e) => { e.stopPropagation(); setSelected(isSel ? null : i); }}
                style={{ cursor: "pointer" }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: unlocked ? 1 : 0.45 }}
                transition={{ delay: 0.3 + i * 0.12, type: "spring", stiffness: 180, damping: 16 }}
              >
                {/* Glow bloom for done */}
                {done && (
                  <motion.circle
                    cx={cx} cy={cy} r={34}
                    fill={zone.color + "16"}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                  />
                )}

                {/* Pulse ring for active-incomplete */}
                {unlocked && !done && !isSel && (
                  <motion.circle
                    cx={cx} cy={cy} r={22}
                    fill="none" stroke={zone.color} strokeWidth={1.5} strokeOpacity={0.5}
                    animate={{ r: [22, 36], opacity: [0.5, 0] }}
                    transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut", delay: i * 0.35 }}
                  />
                )}

                {/* Selection ring */}
                {isSel && (
                  <motion.circle
                    cx={cx} cy={cy} r={28}
                    fill="none" stroke={zone.color} strokeWidth={2.5}
                    initial={{ scale: 0.6, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.9 }}
                    transition={{ duration: 0.2 }}
                  />
                )}

                {/* Completion ring */}
                {done && !isSel && (
                  <circle cx={cx} cy={cy} r={26} fill="none" stroke={zone.color} strokeWidth={1.5} strokeOpacity={0.6} />
                )}

                {/* Main circle */}
                <circle
                  cx={cx} cy={cy} r={21}
                  fill={done ? zone.color + "44" : unlocked ? zone.color + "25" : "rgba(255,255,255,0.06)"}
                  stroke={unlocked ? zone.color : "rgba(255,255,255,0.12)"}
                  strokeWidth={done ? 2 : 1.5}
                  style={{ filter: done ? `drop-shadow(0 0 10px ${zone.color})` : "none" }}
                />

                {/* Emoji / lock */}
                <text x={cx} y={cy} textAnchor="middle" dominantBaseline="central" fontSize={unlocked ? 17 : 13}>
                  {unlocked ? zone.emoji : "\uD83D\uDD12"}
                </text>

                {/* Done badge */}
                {done && (
                  <>
                    <circle cx={cx + 15} cy={cy - 15} r={9} fill={zone.color} />
                    <text x={cx + 15} y={cy - 15} textAnchor="middle" dominantBaseline="central"
                      fontSize={10} fontWeight="900" fill="#000">✓</text>
                  </>
                )}

                {/* Name label */}
                <text x={cx} y={cy + 32} textAnchor="middle" fontSize={8.5} fontWeight="700"
                  letterSpacing={0.5} fill={unlocked ? "rgba(255,255,255,0.80)" : "rgba(255,255,255,0.20)"}>
                  {zone.name.toUpperCase()}
                </text>
                <text x={cx} y={cy + 43} textAnchor="middle" fontSize={7} fontWeight="600"
                  fill={unlocked ? zone.color : "rgba(255,255,255,0.12)"}>
                  {i + 1}. ZÓNA
                </text>
              </motion.g>
            );
          })}

          {/* Compass rose */}
          <CompassRose />
        </svg>
      </div>

      {/* Detail panel */}
      <div className="w-full max-w-md px-4" onClick={(e) => e.stopPropagation()}>
        <AnimatePresence>
          {selZone && selected !== null && (
            <motion.div
              key={selZone.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.2 }}
            >
              <div
                className="rounded-2xl p-5 border"
                style={{
                  background: `linear-gradient(135deg, ${selZone.glow} 0%, rgba(12,18,36,0.98) 65%)`,
                  borderColor: selZone.color + "44",
                  boxShadow: selDone ? `0 0 28px ${selZone.glow}` : "none",
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">{selUnlocked ? selZone.emoji : "🔒"}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-white font-black text-lg">{selZone.name}</span>
                      {selDone && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                          style={{ background: selZone.color + "30", color: selZone.color }}>
                          Teljesítve ✓
                        </span>
                      )}
                      {selUnlocked && !selDone && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                          style={{ background: selZone.color + "20", color: selZone.color }}>
                          Aktív
                        </span>
                      )}
                    </div>
                    <p className="text-white/40 text-xs mt-0.5">
                      {selUnlocked
                        ? `${selZone.games.length} játék elérhető`
                        : "Teljesítsd az előző zónát a feloldáshoz"}
                    </p>
                  </div>
                </div>

                {selUnlocked ? (
                  <>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {selZone.games.map((g) => (
                        <span key={g} className="text-xs px-3 py-1.5 rounded-lg font-semibold"
                          style={{ background: selZone.color + "22", color: selZone.color }}>
                          {GAME_NAMES[g] ?? g}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/${selZone.games[0]}/`}
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition-opacity hover:opacity-80 active:opacity-70"
                      style={{ background: selZone.color, color: "#000" }}
                    >
                      Játék indítása <ChevronRight size={15} />
                    </Link>
                  </>
                ) : (
                  <div className="text-center py-3 rounded-xl text-sm font-medium"
                    style={{ background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.3)" }}>
                    Zárolt zóna
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {selected === null && (
        <p className="text-white/15 text-xs text-center mt-3 px-6">
          Koppints egy zónára a részletekért
        </p>
      )}
    </main>
  );
}
