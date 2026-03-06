"use client";
import type { FurnitureProps } from "./types";

// 2×1 isometrikus egyszemélyes ágy
// Anchor (x,y) = első tile közepe
export default function BedBasic({ x, y }: FurnitureProps) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      {/* Árnyék */}
      <ellipse cx={0} cy={-4} rx={30} ry={9} fill="rgba(0,0,0,0.12)" />

      {/* Ágy keret — rövid platform (mint a Couch alapja) */}
      <path d="M 28,-10 L 28,-20 L 0,-6 L 0,4 Z"  fill="#5A3E28" />
      <path d="M -28,-10 L -28,-20 L 0,-6 L 0,4 Z" fill="#7B5E42" />

      {/* Fejtámla — CSAK a matrac hátsó élénél (nem az egész szélességen!) */}
      <path d="M -28,-28 L -28,-46 L 0,-58 L 0,-40 Z" fill="#7B5E42" />
      <path d="M 0,-58 L 28,-46 L 28,-28 L 0,-40 Z"   fill="#5A3E28" />
      <path d="M -28,-46 L 0,-58 L 28,-46 Z"           fill="#8B6B4A" />
      <path d="M -6,-44 L 6,-50 L 8,-48 L -4,-42 Z" fill="rgba(255,255,255,0.06)" />

      {/* Matrac felső lap (krém) */}
      <path d="M 0,-16 L 28,-28 L 0,-40 L -28,-28 Z" fill="#EDD5A8" />

      {/* Takaró (kék/levendula, lábi 65%-ot fed) */}
      <path d="M 0,-16 L 28,-28 L 10,-38 L -18,-26 Z" fill="#8888C4" />
      <path d="M 0,-18 L 22,-27 L 8,-36 L -14,-27 Z" fill="#9999D4" opacity={0.5} />
      <line x1={-12} y1={-26} x2={4} y2={-18} stroke="rgba(80,80,160,0.3)" strokeWidth={0.8} />

      {/* Párna */}
      <path d="M -18,-34 L -4,-41 L 4,-37 L -10,-30 Z" fill="#F5F0E8" />
      <path d="M -18,-34 L -4,-41 L -2,-42 L -16,-35 Z" fill="rgba(255,255,255,0.22)" />
    </g>
  );
}
