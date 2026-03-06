"use client";
import type { FurnitureProps } from "./types";

// 2×2 isometrikus franciaágy (szélesebb mint BedBasic)
// Anchor (x,y) = első tile közepe
export default function BedDouble({ x, y }: FurnitureProps) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      {/* Árnyék */}
      <ellipse cx={0} cy={-4} rx={38} ry={12} fill="rgba(0,0,0,0.12)" />

      {/* Ágy keret — két oldallap */}
      <path d="M 36,-12 L 36,-24 L 0,-6 L 0,6 Z"  fill="#5A3E28" />
      <path d="M -36,-12 L -36,-24 L 0,-6 L 0,6 Z" fill="#7B5E42" />

      {/* Fejtámla — ELŐBB rajzolva, a matrac mögé kerül */}
      <path d="M -36,-34 L -36,-54 L 0,-70 L 0,-50 Z" fill="#7B5E42" />
      <path d="M 0,-70 L 36,-54 L 36,-34 L 0,-50 Z"   fill="#5A3E28" />
      <path d="M -36,-54 L 0,-70 L 36,-54 Z"           fill="#8B6B4A" />
      <path d="M -8,-52 L 8,-60 L 10,-58 L -6,-50 Z" fill="rgba(255,255,255,0.06)" />

      {/* Matrac felső lap (krém, ±36 széles) */}
      <path d="M 0,-18 L 36,-34 L 0,-50 L -36,-34 Z" fill="#EDD5A8" />

      {/* Takaró (meleg lila, lábi 65%) */}
      <path d="M 0,-18 L 36,-34 L 14,-48 L -22,-32 Z" fill="#7070AA" />
      <path d="M 0,-20 L 28,-34 L 10,-46 L -18,-32 Z" fill="#9090CC" opacity={0.5} />
      {/* Takaró ráncvonalak */}
      <line x1={-16} y1={-32} x2={6} y2={-20} stroke="rgba(60,60,140,0.3)" strokeWidth={0.8} />
      <line x1={-6} y1={-38} x2={16} y2={-26} stroke="rgba(60,60,140,0.25)" strokeWidth={0.8} />

      {/* Két párna (fej végénél) */}
      <path d="M -22,-43 L -8,-51 L -2,-48 L -16,-40 Z" fill="#F5F0E8" />
      <path d="M -22,-43 L -8,-51 L -6,-52 L -20,-44 Z" fill="rgba(255,255,255,0.22)" />
      <path d="M 4,-43  L 18,-51 L 24,-48 L 10,-40 Z" fill="#F5F0E8" />
      <path d="M 4,-43  L 18,-51 L 20,-52 L 6,-44 Z"  fill="rgba(255,255,255,0.22)" />
    </g>
  );
}
