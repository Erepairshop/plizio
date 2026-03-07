"use client";
import type { FurnitureProps } from "./types";

export default function PlantBig({ x, y }: FurnitureProps) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <defs>
        <linearGradient id="pbPotLeft" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#C07848" />
          <stop offset="100%" stopColor="#A06038" />
        </linearGradient>
        <linearGradient id="pbPotRight" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#A0603A" />
          <stop offset="100%" stopColor="#804828" />
        </linearGradient>
        <linearGradient id="pbLeaf" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#5ABB4A" />
          <stop offset="100%" stopColor="#3A9A2A" />
        </linearGradient>
      </defs>
      {/* Shadow */}
      <ellipse cx={0} cy={0} rx={10} ry={4} fill="rgba(0,0,0,0.10)" />
      {/* Pot — left face */}
      <path d="M 0,0 L -8,-4 L -8,-12 L 0,-8 Z" fill="url(#pbPotLeft)" />
      {/* Pot — right face */}
      <path d="M 0,0 L 8,-4 L 8,-12 L 0,-8 Z" fill="url(#pbPotRight)" />
      {/* Pot — top face (soil) */}
      <path d="M -8,-12 L 0,-16 L 8,-12 L 0,-8 Z" fill="#5A3A20" />
      {/* Stem */}
      <line x1={0} y1={-14} x2={0} y2={-26} stroke="#3A7A2A" strokeWidth={2} />
      {/* Leaves */}
      <ellipse cx={0} cy={-32} rx={7} ry={4} fill="url(#pbLeaf)" transform="rotate(-10, 0, -32)" />
      <ellipse cx={-6} cy={-28} rx={6} ry={3.5} fill="#3A9A2A" transform="rotate(-35, -6, -28)" />
      <ellipse cx={6} cy={-27} rx={6} ry={3} fill="#4AAA3A" transform="rotate(25, 6, -27)" />
      <ellipse cx={-2} cy={-35} rx={5} ry={2.5} fill="#4AAA3A" transform="rotate(-5, -2, -35)" />
    </g>
  );
}
