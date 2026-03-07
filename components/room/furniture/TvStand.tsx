"use client";
import type { FurnitureProps } from "./types";

export default function TvStand({ x, y }: FurnitureProps) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <defs>
        <linearGradient id="tvTop" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#5A5A6A" />
          <stop offset="100%" stopColor="#505060" />
        </linearGradient>
        <linearGradient id="tvLeft" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4A4A5A" />
          <stop offset="100%" stopColor="#404050" />
        </linearGradient>
        <linearGradient id="tvRight" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3A3A4A" />
          <stop offset="100%" stopColor="#303040" />
        </linearGradient>
      </defs>
      {/* Shadow */}
      <ellipse cx={0} cy={-4} rx={28} ry={8} fill="rgba(0,0,0,0.12)" />
      {/* Cabinet — left face */}
      <path d="M -24,-4 L -24,-14 L 0,-2 L 0,8 Z" fill="url(#tvLeft)" />
      {/* Cabinet — right face */}
      <path d="M 24,-4 L 24,-14 L 0,-2 L 0,8 Z" fill="url(#tvRight)" />
      {/* Cabinet — top face */}
      <path d="M -24,-14 L 0,-26 L 24,-14 L 0,-2 Z" fill="url(#tvTop)" />
      {/* TV screen — left face */}
      <path d="M -18,-18 L -18,-42 L 0,-54 L 0,-30 Z" fill="#1A1A28" />
      {/* TV screen — right face */}
      <path d="M 18,-18 L 18,-42 L 0,-54 L 0,-30 Z" fill="#111118" />
      {/* TV screen — top face (thin) */}
      <path d="M -18,-42 L 0,-54 L 18,-42 L 0,-30 Z" fill="#2A2A3A" />
      {/* Screen glow */}
      <path d="M -15,-20 L 0,-28 L 15,-20 L 0,-12 Z" fill="rgba(60,120,200,0.10)" />
    </g>
  );
}
