"use client";
import type { FurnitureProps } from "./types";

export default function LampFloor({ x, y }: FurnitureProps) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <defs>
        <linearGradient id="lfShade" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#F0D89A" />
          <stop offset="100%" stopColor="#D4B574" />
        </linearGradient>
      </defs>
      {/* Soft glow on floor */}
      <ellipse cx={0} cy={0} rx={24} ry={12} fill="rgba(255,220,100,0.07)" />
      {/* Shadow */}
      <ellipse cx={0} cy={0} rx={8} ry={3} fill="rgba(0,0,0,0.10)" />
      {/* Base */}
      <ellipse cx={0} cy={-1} rx={5} ry={2.5} fill="#555" />
      {/* Pole */}
      <rect x={-1} y={-44} width={2} height={43} fill="#666" rx={1} />
      {/* Shade — left */}
      <path d="M -9,-38 L 0,-35 L 0,-48 L -8,-46 Z" fill="#E8C98A" />
      {/* Shade — right */}
      <path d="M 9,-38 L 0,-35 L 0,-48 L 8,-46 Z" fill="#D4B574" />
      {/* Shade — top */}
      <ellipse cx={0} cy={-47} rx={8} ry={3} fill="url(#lfShade)" />
      {/* Bulb glow */}
      <circle cx={0} cy={-40} r={4} fill="rgba(255,220,100,0.20)" />
    </g>
  );
}
