"use client";
import type { FurnitureProps } from "./types";

// 2×1 isometrikus egyszemélyes ágy
// Anchor (x,y) = első tile közepe (ugyanolyan struktúra mint a Couch)
export default function BedBasic({ x, y }: FurnitureProps) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      {/* Árnyék */}
      <ellipse cx={0} cy={-4} rx={30} ry={9} fill="rgba(0,0,0,0.12)" />

      {/* Ágy keret — két oldallap (mint a Couch alapja) */}
      <path d="M 28,-10 L 28,-20 L 0,-6 L 0,4 Z"  fill="#5A3E28" />
      <path d="M -28,-10 L -28,-20 L 0,-6 L 0,4 Z" fill="#7B5E42" />

      {/* Matrac felső lap (krém) */}
      <path d="M 0,-16 L 28,-28 L 0,-40 L -28,-28 Z" fill="#EDD5A8" />

      {/* Takaró (kék/levendula, lábi 70%-ot fed) */}
      <path d="M 0,-16 L 28,-28 L 10,-38 L -18,-26 Z" fill="#8888C4" />
      <path d="M 0,-18 L 22,-27 L 8,-36 L -14,-27 Z" fill="#9999D4" opacity={0.5} />
      {/* Takaró ráncvonal */}
      <line x1={-12} y1={-26} x2={4} y2={-18} stroke="rgba(80,80,160,0.3)" strokeWidth={0.8} />

      {/* Párna (fej végénél, a matrac hátulsó csúcsánál) */}
      <path d="M -18,-34 L -4,-41 L 4,-37 L -10,-30 Z" fill="#F5F0E8" />
      <path d="M -18,-34 L -4,-41 L -2,-42 L -16,-35 Z" fill="rgba(255,255,255,0.22)" />

      {/* Fejtámla — lapos panel (nem doboz, nincs "tető") */}
      {/* Bal oldallap (vékony csík) */}
      <path d="M -28,-28 L -28,-52 L -24,-54 L -24,-30 Z" fill="#5A3E28" />
      {/* Fő panel (főnézet) */}
      <path d="M -28,-52 L 0,-64 L 0,-40 L -28,-28 Z" fill="#8B6B4A" />
      {/* Jobb oldallap (vékony csík) */}
      <path d="M 0,-40 L 4,-38 L 4,-62 L 0,-64 Z" fill="#5A3E28" />
      {/* Tetőél (nagyon vékony csík) */}
      <path d="M -28,-52 L 0,-64 L 4,-62 L -24,-50 Z" fill="#9B7B5A" />
      {/* Fejtámla highlight */}
      <path d="M -20,-50 L -6,-57 L -4,-55 L -18,-48 Z" fill="rgba(255,255,255,0.08)" />
    </g>
  );
}
