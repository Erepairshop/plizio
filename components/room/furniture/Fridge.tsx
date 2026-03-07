"use client";
import type { FurnitureProps } from "./types";

export default function Fridge({ x, y }: FurnitureProps) {
  const tw = 12, th = 6, H = 54;
  return (
    <g transform={`translate(${x}, ${y})`}>
      <defs>
        <linearGradient id="frTop" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#EAF0F4" />
          <stop offset="100%" stopColor="#DEE6EC" />
        </linearGradient>
        <linearGradient id="frLeft" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D8E0E8" />
          <stop offset="100%" stopColor="#C8D0D8" />
        </linearGradient>
        <linearGradient id="frRight" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#B8C4CE" />
          <stop offset="100%" stopColor="#A8B4BE" />
        </linearGradient>
      </defs>
      <ellipse cx={0} cy={-4} rx={14} ry={5} fill="rgba(0,0,0,0.12)" />
      {/* Left face */}
      <path d={`M ${-tw},${-H+th} L 0,${-H+2*th} L 0,0 L ${-tw},${-th} Z`} fill="url(#frLeft)" />
      {/* Right face */}
      <path d={`M ${tw},${-H+th} L 0,${-H+2*th} L 0,0 L ${tw},${-th} Z`} fill="url(#frRight)" />
      {/* Top face */}
      <path d={`M 0,${-H} L ${tw},${-H+th} L 0,${-H+2*th} L ${-tw},${-H+th} Z`} fill="url(#frTop)" />
      {/* Door split line */}
      <line x1={-tw} y1={-th - 18} x2={0} y2={-2*th - 18 + th} stroke="rgba(0,0,0,0.08)" strokeWidth={0.5} />
      <line x1={0} y1={-2*th - 18 + th} x2={tw} y2={-th - 18} stroke="rgba(0,0,0,0.08)" strokeWidth={0.5} />
      {/* Handle on left face */}
      <line x1={-10} y1={-26} x2={-10} y2={-20} stroke="#A0A8B0" strokeWidth={1.2} strokeLinecap="round" />
    </g>
  );
}
