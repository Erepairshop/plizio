"use client";
import type { FurnitureProps } from "./types";

export default function Counter({ x, y }: FurnitureProps) {
  const tw = 24, th = 12, H = 22;
  return (
    <g transform={`translate(${x}, ${y})`}>
      <defs>
        <linearGradient id="cnTop" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#EEE6DE" />
          <stop offset="100%" stopColor="#E8E0D8" />
        </linearGradient>
        <linearGradient id="cnLeft" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E0E0E8" />
          <stop offset="100%" stopColor="#D0D0D8" />
        </linearGradient>
        <linearGradient id="cnRight" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#C8C8D0" />
          <stop offset="100%" stopColor="#BBBBC4" />
        </linearGradient>
      </defs>
      <ellipse cx={0} cy={-4} rx={26} ry={7} fill="rgba(0,0,0,0.10)" />
      {/* Left face */}
      <path d={`M ${-tw},${-H+th} L 0,${-H+2*th} L 0,0 L ${-tw},${-th} Z`} fill="url(#cnLeft)" />
      {/* Right face */}
      <path d={`M ${tw},${-H+th} L 0,${-H+2*th} L 0,0 L ${tw},${-th} Z`} fill="url(#cnRight)" />
      {/* Top face */}
      <path d={`M 0,${-H} L ${tw},${-H+th} L 0,${-H+2*th} L ${-tw},${-H+th} Z`} fill="url(#cnTop)" />
      {/* Handle on right face */}
      <line x1={8} y1={-6} x2={8} y2={-3} stroke="#A0A0A8" strokeWidth={1} strokeLinecap="round" />
    </g>
  );
}
