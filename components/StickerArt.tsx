// components/StickerArt.tsx
// 20 Plizio matrica inline SVG — TypeScript port a public/stickers-preview/sticker-art.jsx-bol.
// Minden komponens viewBox="0 0 200 200", gyerek-barat, vastag korvonalak.

import type { JSX } from "react";

const stroke = "#1a0d3a";

function Face({ cx, cy, s = 1 }: { cx: number; cy: number; s?: number }): JSX.Element {
  return (
    <g>
      <ellipse cx={cx - 10 * s} cy={cy} rx={3.2 * s} ry={4.2 * s} fill={stroke} />
      <ellipse cx={cx + 10 * s} cy={cy} rx={3.2 * s} ry={4.2 * s} fill={stroke} />
      <ellipse cx={cx - 9 * s} cy={cy - 1.5 * s} rx={1.1 * s} ry={1.4 * s} fill="#fff" />
      <ellipse cx={cx + 11 * s} cy={cy - 1.5 * s} rx={1.1 * s} ry={1.4 * s} fill="#fff" />
      <path
        d={`M ${cx - 6 * s} ${cy + 6 * s} Q ${cx} ${cy + 11 * s} ${cx + 6 * s} ${cy + 6 * s}`}
        stroke={stroke}
        strokeWidth={2.2 * s}
        strokeLinecap="round"
        fill="none"
      />
      <circle cx={cx - 15 * s} cy={cy + 6 * s} r={2.6 * s} fill="#ff6b9d" opacity="0.55" />
      <circle cx={cx + 15 * s} cy={cy + 6 * s} r={2.6 * s} fill="#ff6b9d" opacity="0.55" />
    </g>
  );
}

function SleepyFace({ cx, cy, s = 1 }: { cx: number; cy: number; s?: number }): JSX.Element {
  return (
    <g>
      <path d={`M ${cx - 13 * s} ${cy} q ${5 * s} ${-4 * s} ${10 * s} 0`} stroke={stroke} strokeWidth={2.5 * s} fill="none" strokeLinecap="round" />
      <path d={`M ${cx + 3 * s} ${cy} q ${5 * s} ${-4 * s} ${10 * s} 0`} stroke={stroke} strokeWidth={2.5 * s} fill="none" strokeLinecap="round" />
      <path d={`M ${cx - 4 * s} ${cy + 7 * s} q ${4 * s} ${3 * s} ${8 * s} 0`} stroke={stroke} strokeWidth={2.2 * s} fill="none" strokeLinecap="round" />
    </g>
  );
}

type StickerArtComponent = () => JSX.Element;

const Sonne: StickerArtComponent = () => (
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="sunG" cx="50%" cy="45%" r="55%">
        <stop offset="0%" stopColor="#fff2a8" />
        <stop offset="45%" stopColor="#ffcc2a" />
        <stop offset="100%" stopColor="#ff8a1f" />
      </radialGradient>
    </defs>
    {Array.from({ length: 12 }).map((_, i) => {
      const a = (i / 12) * Math.PI * 2;
      const x1 = 100 + Math.cos(a) * 72;
      const y1 = 100 + Math.sin(a) * 72;
      const x2 = 100 + Math.cos(a) * 95;
      const y2 = 100 + Math.sin(a) * 95;
      return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#ffcc2a" strokeWidth="8" strokeLinecap="round" />;
    })}
    <circle cx="100" cy="100" r="66" fill="url(#sunG)" stroke={stroke} strokeWidth="3" />
    <circle cx="100" cy="100" r="66" fill="none" stroke="#ff9a1f" strokeWidth="2" opacity="0.5" />
    <circle cx="70" cy="115" r="4" fill="#ff8a1f" opacity="0.5" />
    <circle cx="130" cy="80" r="3" fill="#ff8a1f" opacity="0.5" />
    <Face cx={100} cy={95} s={1.1} />
  </svg>
);

const PlanetBody = ({
  color1,
  color2,
  shadow,
  highlight,
}: {
  color1: string;
  color2: string;
  shadow?: JSX.Element | null;
  highlight?: JSX.Element | null;
}): JSX.Element => (
  <g>
    <circle cx="100" cy="100" r="72" fill={color1} />
    <path d="M 40 120 A 72 72 0 0 0 160 120 Q 160 170 100 172 Q 40 170 40 120 Z" fill={color2} opacity="0.85" />
    {shadow}
    <ellipse cx="78" cy="78" rx="22" ry="14" fill="#ffffff" opacity="0.35" transform="rotate(-30 78 78)" />
    {highlight}
  </g>
);

const Merkur: StickerArtComponent = () => (
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <PlanetBody
      color1="#a59e8c"
      color2="#6d6758"
      shadow={
        <g>
          <circle cx="120" cy="120" r="10" fill="#6d6758" opacity="0.55" />
          <circle cx="75" cy="135" r="6" fill="#6d6758" opacity="0.5" />
          <circle cx="140" cy="95" r="5" fill="#6d6758" opacity="0.5" />
          <circle cx="85" cy="85" r="7" fill="#8a8372" opacity="0.7" />
        </g>
      }
      highlight={null}
    />
    <circle cx="100" cy="100" r="72" fill="none" stroke={stroke} strokeWidth="3" />
    <Face cx={100} cy={105} s={0.9} />
  </svg>
);

const Venus: StickerArtComponent = () => (
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="venusG" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#ffdb8a" />
        <stop offset="100%" stopColor="#d47c1f" />
      </linearGradient>
    </defs>
    <circle cx="100" cy="100" r="72" fill="url(#venusG)" stroke={stroke} strokeWidth="3" />
    <path d="M 40 90 Q 80 80 120 92 T 160 95" stroke="#fff6d0" strokeWidth="5" fill="none" strokeLinecap="round" opacity="0.8" />
    <path d="M 45 115 Q 90 108 130 118 T 158 122" stroke="#fff6d0" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.7" />
    <path d="M 55 140 Q 100 134 145 142" stroke="#fff6d0" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.6" />
    <path d="M 60 70 Q 95 62 135 72" stroke="#fff6d0" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.6" />
    <Face cx={100} cy={105} s={1} />
  </svg>
);

const Erde: StickerArtComponent = () => (
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="earthG" cx="40%" cy="40%">
        <stop offset="0%" stopColor="#7ec7ff" />
        <stop offset="100%" stopColor="#2a78d4" />
      </radialGradient>
    </defs>
    <circle cx="100" cy="100" r="72" fill="url(#earthG)" stroke={stroke} strokeWidth="3" />
    <path d="M 55 80 Q 70 70 85 78 Q 92 88 84 100 Q 72 104 60 96 Z" fill="#4ab36b" stroke={stroke} strokeWidth="2" />
    <path d="M 110 70 Q 135 68 148 82 Q 150 100 138 108 Q 120 106 112 92 Z" fill="#4ab36b" stroke={stroke} strokeWidth="2" />
    <path d="M 75 125 Q 95 118 118 128 Q 128 140 115 150 Q 92 152 80 142 Z" fill="#4ab36b" stroke={stroke} strokeWidth="2" />
    <path d="M 130 140 Q 148 135 152 148 Q 146 158 134 155 Z" fill="#4ab36b" stroke={stroke} strokeWidth="2" />
    <ellipse cx="70" cy="65" rx="16" ry="4" fill="#fff" opacity="0.7" />
    <ellipse cx="130" cy="130" rx="14" ry="3.5" fill="#fff" opacity="0.7" />
    <Face cx={100} cy={100} s={1} />
  </svg>
);

const Mond: StickerArtComponent = () => (
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="100" r="72" fill="#e8e4f0" stroke={stroke} strokeWidth="3" />
    <circle cx="100" cy="100" r="72" fill="#b8b4ce" opacity="0.25" />
    <circle cx="75" cy="75" r="10" fill="#9a93b8" />
    <circle cx="75" cy="75" r="10" fill="none" stroke={stroke} strokeWidth="1.5" opacity="0.5" />
    <circle cx="130" cy="85" r="6" fill="#9a93b8" />
    <circle cx="130" cy="85" r="6" fill="none" stroke={stroke} strokeWidth="1.2" opacity="0.5" />
    <circle cx="135" cy="130" r="9" fill="#9a93b8" />
    <circle cx="135" cy="130" r="9" fill="none" stroke={stroke} strokeWidth="1.5" opacity="0.5" />
    <circle cx="70" cy="135" r="5" fill="#9a93b8" />
    <circle cx="95" cy="155" r="4" fill="#9a93b8" />
    <SleepyFace cx={100} cy={110} s={1} />
    <path d="M 45 45 l 2 5 l 5 2 l -5 2 l -2 5 l -2 -5 l -5 -2 l 5 -2 z" fill="#fff" opacity="0.9" />
  </svg>
);

const Mars: StickerArtComponent = () => (
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="marsG" cx="40%" cy="40%">
        <stop offset="0%" stopColor="#ff8866" />
        <stop offset="100%" stopColor="#b22f1a" />
      </radialGradient>
    </defs>
    <circle cx="100" cy="100" r="72" fill="url(#marsG)" stroke={stroke} strokeWidth="3" />
    <path d="M 80 38 Q 100 32 120 38 Q 115 48 100 48 Q 85 48 80 38 Z" fill="#fff0e0" stroke={stroke} strokeWidth="2" />
    <ellipse cx="75" cy="110" rx="14" ry="6" fill="#7a1d0e" opacity="0.6" transform="rotate(-20 75 110)" />
    <ellipse cx="135" cy="120" rx="10" ry="5" fill="#7a1d0e" opacity="0.6" transform="rotate(15 135 120)" />
    <circle cx="115" cy="85" r="5" fill="#7a1d0e" opacity="0.5" />
    <Face cx={100} cy={100} s={1} />
  </svg>
);

const Jupiter: StickerArtComponent = () => (
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="jupiterG" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="#f3d9b0" />
        <stop offset="50%" stopColor="#d99c68" />
        <stop offset="100%" stopColor="#a55b2c" />
      </linearGradient>
    </defs>
    <circle cx="100" cy="100" r="72" fill="url(#jupiterG)" stroke={stroke} strokeWidth="3" />
    <path d="M 30 75 Q 100 70 170 78" stroke="#8a4a1f" strokeWidth="6" fill="none" opacity="0.6" />
    <path d="M 28 92 Q 100 88 172 95" stroke="#f6e3c0" strokeWidth="7" fill="none" opacity="0.7" />
    <path d="M 30 115 Q 100 110 170 118" stroke="#8a4a1f" strokeWidth="5" fill="none" opacity="0.55" />
    <path d="M 35 135 Q 100 132 165 138" stroke="#f6e3c0" strokeWidth="6" fill="none" opacity="0.6" />
    <path d="M 45 152 Q 100 150 155 155" stroke="#8a4a1f" strokeWidth="4" fill="none" opacity="0.5" />
    <ellipse cx="125" cy="115" rx="12" ry="7" fill="#c0392b" stroke={stroke} strokeWidth="2" />
    <Face cx={82} cy={98} s={0.85} />
  </svg>
);

const Saturn: StickerArtComponent = () => (
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="saturnG" cx="40%" cy="40%">
        <stop offset="0%" stopColor="#ffe8a8" />
        <stop offset="100%" stopColor="#c28a3a" />
      </radialGradient>
    </defs>
    <ellipse cx="100" cy="105" rx="90" ry="20" fill="none" stroke="#d4a54a" strokeWidth="8" />
    <ellipse cx="100" cy="105" rx="90" ry="20" fill="none" stroke={stroke} strokeWidth="2" />
    <path d="M 10 105 A 90 20 0 0 1 190 105" stroke="#0a0528" strokeWidth="10" fill="none" />
    <circle cx="100" cy="100" r="55" fill="url(#saturnG)" stroke={stroke} strokeWidth="3" />
    <path d="M 14 108 A 90 20 0 0 0 186 108" stroke="#ffd97a" strokeWidth="7" fill="none" />
    <path d="M 14 108 A 90 20 0 0 0 186 108" stroke={stroke} strokeWidth="2" fill="none" />
    <path d="M 20 112 A 82 16 0 0 0 180 112" stroke="#c28a3a" strokeWidth="3" fill="none" opacity="0.7" />
    <path d="M 50 88 Q 100 84 150 90" stroke="#a06c28" strokeWidth="3" fill="none" opacity="0.5" />
    <path d="M 55 118 Q 100 115 148 120" stroke="#a06c28" strokeWidth="3" fill="none" opacity="0.5" />
    <Face cx={100} cy={98} s={0.9} />
  </svg>
);

const Uranus: StickerArtComponent = () => (
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="uranusG" cx="40%" cy="40%">
        <stop offset="0%" stopColor="#b8f0ea" />
        <stop offset="100%" stopColor="#4aa8c4" />
      </radialGradient>
    </defs>
    <ellipse cx="100" cy="100" rx="28" ry="88" fill="none" stroke="#9de0e0" strokeWidth="3" opacity="0.8" transform="rotate(-15 100 100)" />
    <circle cx="100" cy="100" r="62" fill="url(#uranusG)" stroke={stroke} strokeWidth="3" />
    <path d="M 72 20 A 28 88 0 0 0 128 180" stroke="#c7f0f0" strokeWidth="4" fill="none" transform="rotate(-15 100 100)" />
    <path d="M 72 20 A 28 88 0 0 0 128 180" stroke={stroke} strokeWidth="1.5" fill="none" transform="rotate(-15 100 100)" />
    <Face cx={100} cy={105} s={1} />
  </svg>
);

const Neptun: StickerArtComponent = () => (
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="neptunG" cx="40%" cy="40%">
        <stop offset="0%" stopColor="#6aa6ff" />
        <stop offset="100%" stopColor="#1a3c9c" />
      </radialGradient>
    </defs>
    <circle cx="100" cy="100" r="72" fill="url(#neptunG)" stroke={stroke} strokeWidth="3" />
    <path d="M 60 85 Q 100 75 145 88" stroke="#a8c8ff" strokeWidth="4" fill="none" opacity="0.7" strokeLinecap="round" />
    <path d="M 55 115 Q 100 108 150 118" stroke="#a8c8ff" strokeWidth="4" fill="none" opacity="0.7" strokeLinecap="round" />
    <ellipse cx="80" cy="120" rx="10" ry="5" fill="#0c2466" opacity="0.5" transform="rotate(-20 80 120)" />
    <Face cx={110} cy={95} s={0.95} />
  </svg>
);

const Pluto: StickerArtComponent = () => (
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="100" r="56" fill="#d4bfa8" stroke={stroke} strokeWidth="3" />
    <circle cx="100" cy="100" r="56" fill="#8a735c" opacity="0.2" />
    <path
      d="M 100 95 C 92 82 76 82 76 98 C 76 114 100 130 100 130 C 100 130 124 114 124 98 C 124 82 108 82 100 95 Z"
      fill="#f3e4c8"
      stroke={stroke}
      strokeWidth="2"
      opacity="0.95"
    />
    <SleepyFace cx={100} cy={100} s={0.9} />
    <circle cx="165" cy="55" r="16" fill="#b5a897" stroke={stroke} strokeWidth="2" />
    <circle cx="160" cy="52" r="3" fill="#7f7362" />
    <circle cx="170" cy="60" r="2" fill="#7f7362" />
  </svg>
);

const Asteroid: StickerArtComponent = () => (
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M 50 90 Q 42 70 62 55 Q 85 42 115 48 Q 150 48 160 80 Q 170 115 145 140 Q 115 165 80 155 Q 48 140 50 90 Z"
      fill="#8a7a6a"
      stroke={stroke}
      strokeWidth="3"
    />
    <path d="M 52 100 Q 50 130 80 150 Q 115 162 140 150 Q 160 140 160 115" fill="#5d4f44" opacity="0.5" />
    <circle cx="80" cy="80" r="8" fill="#5d4f44" stroke={stroke} strokeWidth="1.5" />
    <circle cx="130" cy="95" r="6" fill="#5d4f44" stroke={stroke} strokeWidth="1.5" />
    <circle cx="115" cy="135" r="5" fill="#5d4f44" stroke={stroke} strokeWidth="1.5" />
    <circle cx="65" cy="120" r="4" fill="#5d4f44" />
    <Face cx={100} cy={105} s={0.85} />
  </svg>
);

const Komet: StickerArtComponent = () => (
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="tailG" x1="1" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="#7bdfff" stopOpacity="1" />
        <stop offset="100%" stopColor="#7bdfff" stopOpacity="0" />
      </linearGradient>
    </defs>
    <path d="M 70 110 Q 30 140 10 180 Q 30 150 85 125 Z" fill="url(#tailG)" />
    <path d="M 80 100 Q 40 125 15 160" stroke="#7bdfff" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.8" />
    <path d="M 85 95 Q 55 115 30 135" stroke="#fff" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.6" />
    <circle cx="120" cy="85" r="42" fill="#a0e8ff" opacity="0.35" />
    <circle cx="120" cy="85" r="32" fill="#5fdcff" stroke={stroke} strokeWidth="3" />
    <Face cx={120} cy={85} s={0.85} />
    <path d="M 165 55 l 2 6 l 6 2 l -6 2 l -2 6 l -2 -6 l -6 -2 l 6 -2 z" fill="#fff" />
    <path d="M 175 120 l 1.5 4 l 4 1.5 l -4 1.5 l -1.5 4 l -1.5 -4 l -4 -1.5 l 4 -1.5 z" fill="#fff" />
  </svg>
);

const Rakete: StickerArtComponent = () => (
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <path d="M 100 20 Q 130 60 130 130 L 130 155 L 70 155 L 70 130 Q 70 60 100 20 Z" fill="#ffffff" stroke={stroke} strokeWidth="3" />
    <rect x="70" y="115" width="60" height="12" fill="#ff4f6f" stroke={stroke} strokeWidth="2" />
    <circle cx="100" cy="85" r="16" fill="#8ee0ff" stroke={stroke} strokeWidth="3" />
    <circle cx="100" cy="85" r="16" fill="#fff" opacity="0.3" />
    <path d="M 92 78 Q 100 74 108 80" stroke="#fff" strokeWidth="2" fill="none" opacity="0.8" />
    <path d="M 70 125 L 50 168 L 70 160 Z" fill="#ff4f6f" stroke={stroke} strokeWidth="3" />
    <path d="M 130 125 L 150 168 L 130 160 Z" fill="#ff4f6f" stroke={stroke} strokeWidth="3" />
    <path d="M 80 155 Q 85 180 100 195 Q 115 180 120 155 Q 110 170 100 165 Q 90 170 80 155 Z" fill="#ffcc2a" stroke={stroke} strokeWidth="2" />
    <path d="M 90 160 Q 92 178 100 188 Q 108 178 110 160" fill="#ff4f6f" />
  </svg>
);

const Astronaut: StickerArtComponent = () => (
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <rect x="60" y="90" width="80" height="55" rx="10" fill="#b8bdd4" stroke={stroke} strokeWidth="3" />
    <rect x="70" y="100" width="60" height="70" rx="18" fill="#f2f4ff" stroke={stroke} strokeWidth="3" />
    <rect x="45" y="105" width="25" height="50" rx="12" fill="#f2f4ff" stroke={stroke} strokeWidth="3" />
    <rect x="130" y="105" width="25" height="50" rx="12" fill="#f2f4ff" stroke={stroke} strokeWidth="3" />
    <rect x="82" y="118" width="36" height="18" rx="4" fill="#3bd1ff" stroke={stroke} strokeWidth="2" />
    <circle cx="90" cy="127" r="2.5" fill="#ff4f6f" />
    <circle cx="100" cy="127" r="2.5" fill="#22d3a0" />
    <circle cx="110" cy="127" r="2.5" fill="#ffcc2a" />
    <circle cx="100" cy="70" r="38" fill="#f2f4ff" stroke={stroke} strokeWidth="3" />
    <circle cx="100" cy="70" r="30" fill="#1a2a6c" stroke={stroke} strokeWidth="2" />
    <ellipse cx="92" cy="60" rx="10" ry="8" fill="#fff" opacity="0.6" />
    <ellipse cx="108" cy="76" rx="6" ry="4" fill="#fff" opacity="0.3" />
    <Face cx={100} cy={72} s={0.85} />
  </svg>
);

const Rover: StickerArtComponent = () => (
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <rect x="35" y="85" width="130" height="50" rx="8" fill="#d4a54a" stroke={stroke} strokeWidth="3" />
    <rect x="55" y="60" width="70" height="30" rx="6" fill="#f3d48a" stroke={stroke} strokeWidth="3" />
    <rect x="86" y="30" width="8" height="32" fill={stroke} />
    <rect x="75" y="20" width="30" height="20" rx="4" fill="#3a3a5a" stroke={stroke} strokeWidth="3" />
    <circle cx="84" cy="30" r="4" fill="#8ee0ff" stroke={stroke} strokeWidth="1.5" />
    <circle cx="96" cy="30" r="4" fill="#8ee0ff" stroke={stroke} strokeWidth="1.5" />
    <rect x="125" y="65" width="40" height="20" fill="#4a8fff" stroke={stroke} strokeWidth="2" />
    <line x1="135" y1="65" x2="135" y2="85" stroke={stroke} strokeWidth="1" />
    <line x1="145" y1="65" x2="145" y2="85" stroke={stroke} strokeWidth="1" />
    <line x1="155" y1="65" x2="155" y2="85" stroke={stroke} strokeWidth="1" />
    <path d="M 40 100 L 20 130 L 28 140 L 45 120" fill="#b8894a" stroke={stroke} strokeWidth="2.5" />
    <circle cx="55" cy="145" r="18" fill="#1a1a2e" stroke={stroke} strokeWidth="3" />
    <circle cx="100" cy="145" r="18" fill="#1a1a2e" stroke={stroke} strokeWidth="3" />
    <circle cx="145" cy="145" r="18" fill="#1a1a2e" stroke={stroke} strokeWidth="3" />
    <circle cx="55" cy="145" r="6" fill="#3a3a5a" />
    <circle cx="100" cy="145" r="6" fill="#3a3a5a" />
    <circle cx="145" cy="145" r="6" fill="#3a3a5a" />
    <circle cx="75" cy="108" r="3" fill={stroke} />
    <circle cx="105" cy="108" r="3" fill={stroke} />
    <path d="M 80 120 Q 90 124 100 120" stroke={stroke} strokeWidth="2" fill="none" strokeLinecap="round" />
  </svg>
);

const Satellit: StickerArtComponent = () => (
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="80" width="55" height="40" fill="#4a8fff" stroke={stroke} strokeWidth="3" />
    {[0, 1, 2].map((i) => (
      <line key={`lw${i}`} x1={10 + (i + 1) * 13.75} y1="80" x2={10 + (i + 1) * 13.75} y2="120" stroke={stroke} strokeWidth="1.2" />
    ))}
    <line x1="10" y1="100" x2="65" y2="100" stroke={stroke} strokeWidth="1.2" />
    <rect x="135" y="80" width="55" height="40" fill="#4a8fff" stroke={stroke} strokeWidth="3" />
    {[0, 1, 2].map((i) => (
      <line key={`rw${i}`} x1={135 + (i + 1) * 13.75} y1="80" x2={135 + (i + 1) * 13.75} y2="120" stroke={stroke} strokeWidth="1.2" />
    ))}
    <line x1="135" y1="100" x2="190" y2="100" stroke={stroke} strokeWidth="1.2" />
    <rect x="65" y="75" width="70" height="50" rx="8" fill="#f2f4ff" stroke={stroke} strokeWidth="3" />
    <rect x="72" y="82" width="56" height="36" rx="4" fill="#ffcc2a" opacity="0.3" />
    <path d="M 85 55 Q 100 35 115 55 L 115 75 L 85 75 Z" fill="#e8e8f0" stroke={stroke} strokeWidth="3" />
    <line x1="100" y1="55" x2="100" y2="40" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
    <circle cx="100" cy="37" r="5" fill="#ff4f6f" stroke={stroke} strokeWidth="2" />
    <line x1="100" y1="125" x2="100" y2="150" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
    <circle cx="100" cy="155" r="4" fill="#ff4f6f" stroke={stroke} strokeWidth="2" />
    <Face cx={100} cy={100} s={0.75} />
    <path d="M 125 30 Q 140 40 135 55" stroke="#22d3a0" strokeWidth="3" fill="none" strokeLinecap="round" />
    <path d="M 135 22 Q 155 36 148 60" stroke="#22d3a0" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.6" />
  </svg>
);

const Blackhole: StickerArtComponent = () => (
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="bhG" cx="50%" cy="50%">
        <stop offset="0%" stopColor="#000" />
        <stop offset="60%" stopColor="#1a0428" />
        <stop offset="100%" stopColor="#4a1a78" />
      </radialGradient>
      <radialGradient id="diskG" cx="50%" cy="50%">
        <stop offset="30%" stopColor="transparent" />
        <stop offset="55%" stopColor="#ff4fb8" />
        <stop offset="75%" stopColor="#ffcc2a" />
        <stop offset="100%" stopColor="transparent" />
      </radialGradient>
    </defs>
    <ellipse cx="100" cy="100" rx="85" ry="30" fill="url(#diskG)" opacity="0.85" />
    <ellipse cx="100" cy="100" rx="85" ry="30" fill="none" stroke="#ff4fb8" strokeWidth="2" opacity="0.5" />
    <ellipse cx="100" cy="100" rx="68" ry="22" fill="none" stroke="#ffcc2a" strokeWidth="2" opacity="0.6" />
    <circle cx="100" cy="100" r="34" fill="url(#bhG)" stroke={stroke} strokeWidth="3" />
    <circle cx="100" cy="100" r="34" fill="none" stroke="#ff4fb8" strokeWidth="2" opacity="0.7" />
    <ellipse cx="92" cy="97" rx="3" ry="4" fill="#ff4fb8" />
    <ellipse cx="108" cy="97" rx="3" ry="4" fill="#ff4fb8" />
    <circle cx="93" cy="96" r="1" fill="#fff" />
    <circle cx="109" cy="96" r="1" fill="#fff" />
    <path d="M 165 60 l 2 6 l 6 2 l -6 2 l -2 6 l -2 -6 l -6 -2 l 6 -2 z" fill="#fff" opacity="0.9" />
  </svg>
);

const Galaxie: StickerArtComponent = () => (
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="galG" cx="50%" cy="50%">
        <stop offset="0%" stopColor="#fff5d0" />
        <stop offset="25%" stopColor="#ffcc2a" />
        <stop offset="60%" stopColor="#c77bff" />
        <stop offset="100%" stopColor="#1a0a4a" />
      </radialGradient>
    </defs>
    <ellipse cx="100" cy="100" rx="85" ry="85" fill="url(#galG)" opacity="0.9" />
    <path d="M 100 100 Q 60 90 40 60 Q 80 75 100 100" fill="none" stroke="#fff" strokeWidth="3" opacity="0.6" strokeLinecap="round" />
    <path d="M 100 100 Q 140 110 160 140 Q 120 125 100 100" fill="none" stroke="#fff" strokeWidth="3" opacity="0.6" strokeLinecap="round" />
    <path d="M 100 100 Q 70 130 55 155 Q 85 125 100 100" fill="none" stroke="#fff" strokeWidth="2.5" opacity="0.5" strokeLinecap="round" />
    <path d="M 100 100 Q 130 70 145 45 Q 115 75 100 100" fill="none" stroke="#fff" strokeWidth="2.5" opacity="0.5" strokeLinecap="round" />
    <circle cx="100" cy="100" r="14" fill="#fff5d0" />
    <circle cx="100" cy="100" r="14" fill="none" stroke={stroke} strokeWidth="2" opacity="0.4" />
    <circle cx="50" cy="55" r="1.5" fill="#fff" />
    <circle cx="155" cy="70" r="1.5" fill="#fff" />
    <circle cx="160" cy="120" r="1.5" fill="#fff" />
    <circle cx="45" cy="130" r="1.5" fill="#fff" />
    <circle cx="80" cy="40" r="1.2" fill="#fff" />
    <Face cx={100} cy={100} s={0.55} />
  </svg>
);

const Ufo: StickerArtComponent = () => (
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <path d="M 70 115 L 40 190 L 160 190 L 130 115 Z" fill="#22d3a0" opacity="0.25" />
    <path d="M 70 115 L 40 190 L 160 190 L 130 115 Z" fill="none" stroke="#22d3a0" strokeWidth="2" opacity="0.5" strokeDasharray="4 3" />
    <ellipse cx="100" cy="110" rx="72" ry="20" fill="#b8bdd4" stroke={stroke} strokeWidth="3" />
    <ellipse cx="100" cy="108" rx="72" ry="15" fill="#d4d8ec" />
    <path d="M 65 105 Q 65 65 100 65 Q 135 65 135 105 Z" fill="#8ee0ff" stroke={stroke} strokeWidth="3" />
    <path d="M 72 95 Q 75 75 92 72" stroke="#fff" strokeWidth="3" fill="none" opacity="0.7" strokeLinecap="round" />
    <ellipse cx="100" cy="92" rx="12" ry="14" fill="#6cd96c" stroke={stroke} strokeWidth="2" />
    <ellipse cx="95" cy="90" rx="2" ry="3" fill={stroke} />
    <ellipse cx="105" cy="90" rx="2" ry="3" fill={stroke} />
    <path d="M 96 97 Q 100 100 104 97" stroke={stroke} strokeWidth="1.5" fill="none" strokeLinecap="round" />
    <circle cx="55" cy="112" r="4" fill="#ffcc2a" stroke={stroke} strokeWidth="1.5" />
    <circle cx="80" cy="118" r="4" fill="#ff4f6f" stroke={stroke} strokeWidth="1.5" />
    <circle cx="100" cy="120" r="4" fill="#22d3a0" stroke={stroke} strokeWidth="1.5" />
    <circle cx="120" cy="118" r="4" fill="#3bd1ff" stroke={stroke} strokeWidth="1.5" />
    <circle cx="145" cy="112" r="4" fill="#c77bff" stroke={stroke} strokeWidth="1.5" />
  </svg>
);

export const STICKER_ART: Record<string, StickerArtComponent> = {
  sonne: Sonne,
  merkur: Merkur,
  venus: Venus,
  erde: Erde,
  mond: Mond,
  mars: Mars,
  jupiter: Jupiter,
  saturn: Saturn,
  uranus: Uranus,
  neptun: Neptun,
  pluto: Pluto,
  asteroid: Asteroid,
  komet: Komet,
  rakete: Rakete,
  astronaut: Astronaut,
  rover: Rover,
  satellit: Satellit,
  blackhole: Blackhole,
  galaxie: Galaxie,
  ufo: Ufo,
};

export default STICKER_ART;
