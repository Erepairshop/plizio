"use client";
import type { FurnitureProps } from "./types";

export default function Stove({ x, y }: FurnitureProps) {
  const tw = 12, th = 6, H = 28;
  return (
    <g transform={`translate(${x}, ${y})`}>
      <defs>
        <linearGradient id="stTop" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#505058" />
          <stop offset="100%" stopColor="#48484E" />
        </linearGradient>
        <linearGradient id="stLeft" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3A3A40" />
          <stop offset="100%" stopColor="#303036" />
        </linearGradient>
        <linearGradient id="stRight" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2A2A30" />
          <stop offset="100%" stopColor="#222228" />
        </linearGradient>
      </defs>
      <ellipse cx={0} cy={-4} rx={14} ry={5} fill="rgba(0,0,0,0.12)" />
      {/* Left face */}
      <path d={`M ${-tw},${-H+th} L 0,${-H+2*th} L 0,0 L ${-tw},${-th} Z`} fill="url(#stLeft)" />
      {/* Right face */}
      <path d={`M ${tw},${-H+th} L 0,${-H+2*th} L 0,0 L ${tw},${-th} Z`} fill="url(#stRight)" />
      {/* Top face */}
      <path d={`M 0,${-H} L ${tw},${-H+th} L 0,${-H+2*th} L ${-tw},${-H+th} Z`} fill="url(#stTop)" />
      {/* 4 burner circles on top */}
      <ellipse cx={-4} cy={-20} rx={2.8} ry={1.4} fill="#222228" />
      <ellipse cx={4} cy={-20} rx={2.8} ry={1.4} fill="#222228" />
      <ellipse cx={-4} cy={-24} rx={2.8} ry={1.4} fill="#222228" />
      <ellipse cx={4} cy={-24} rx={2.8} ry={1.4} fill="#222228" />
    </g>
  );
}
