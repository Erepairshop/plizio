"use client";
import type { FurnitureProps } from "./types";

export default function Fireplace({ x, y }: FurnitureProps) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <defs>
        <linearGradient id="fpTop" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B06A4A" />
          <stop offset="100%" stopColor="#9A5A3A" />
        </linearGradient>
        <linearGradient id="fpLeft" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#9A5A3A" />
          <stop offset="100%" stopColor="#7A3A2A" />
        </linearGradient>
        <linearGradient id="fpRight" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#7A3A2A" />
          <stop offset="100%" stopColor="#6A2A1A" />
        </linearGradient>
      </defs>
      {/* Shadow */}
      <ellipse cx={0} cy={-4} rx={28} ry={8} fill="rgba(0,0,0,0.12)" />
      {/* Main box — left face */}
      <path d="M -24,-6 L -24,-40 L 0,-28 L 0,6 Z" fill="url(#fpLeft)" />
      {/* Main box — right face */}
      <path d="M 24,-6 L 24,-40 L 0,-28 L 0,6 Z" fill="url(#fpRight)" />
      {/* Main box — top face */}
      <path d="M -24,-40 L 0,-52 L 24,-40 L 0,-28 Z" fill="url(#fpTop)" />
      {/* Dark opening — front diamond */}
      <path d="M -10,-2 L 0,-8 L 10,-2 L 0,4 Z" fill="#1A0808" />
      {/* Dark opening — left wall */}
      <path d="M -10,-2 L -10,-14 L 0,-20 L 0,-8 Z" fill="#2A1010" />
      {/* Dark opening — right wall */}
      <path d="M 10,-2 L 10,-14 L 0,-20 L 0,-8 Z" fill="#1E0A0A" />
      {/* Fire glow inside */}
      <ellipse cx={-2} cy={-9} rx={3} ry={5} fill="#FF6820" opacity={0.7} />
      <ellipse cx={2} cy={-11} rx={2.5} ry={4} fill="#FFAA30" opacity={0.5} />
    </g>
  );
}
