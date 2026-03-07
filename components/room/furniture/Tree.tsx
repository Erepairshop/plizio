"use client";
import type { FurnitureProps } from "./types";

export default function Tree({ x, y }: FurnitureProps) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <defs>
        <linearGradient id="trTrunk" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7B5E42" />
          <stop offset="100%" stopColor="#5A3E28" />
        </linearGradient>
        <linearGradient id="trCrownDark" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4A9A3A" />
          <stop offset="100%" stopColor="#2A7A1A" />
        </linearGradient>
        <linearGradient id="trCrownLight" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#5AAA4A" />
          <stop offset="100%" stopColor="#3A8A2A" />
        </linearGradient>
      </defs>
      {/* Shadow */}
      <ellipse cx={0} cy={0} rx={12} ry={5} fill="rgba(0,0,0,0.10)" />
      {/* Trunk */}
      <rect x={-2.5} y={-22} width={5} height={22} rx={1.5} fill="url(#trTrunk)" />
      {/* Crown layers */}
      <ellipse cx={0} cy={-28} rx={14} ry={8} fill="url(#trCrownDark)" />
      <ellipse cx={-3} cy={-33} rx={10} ry={7} fill="url(#trCrownLight)" />
      <ellipse cx={4} cy={-26} rx={9} ry={6} fill="url(#trCrownDark)" />
      {/* Highlight */}
      <ellipse cx={-1} cy={-34} rx={6} ry={4} fill="url(#trCrownLight)" opacity={0.5} />
    </g>
  );
}
