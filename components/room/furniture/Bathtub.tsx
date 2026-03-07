"use client";
import type { FurnitureProps } from "./types";

export default function Bathtub({ x, y }: FurnitureProps) {
  const tw = 24, th = 12, H = 20;
  return (
    <g transform={`translate(${x}, ${y})`}>
      <defs>
        <linearGradient id="btTop" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F4F4FA" />
          <stop offset="100%" stopColor="#ECECF4" />
        </linearGradient>
        <linearGradient id="btLeft" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E8E8F0" />
          <stop offset="100%" stopColor="#DCDCE4" />
        </linearGradient>
        <linearGradient id="btRight" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D4D4DE" />
          <stop offset="100%" stopColor="#C8C8D2" />
        </linearGradient>
      </defs>
      <ellipse cx={0} cy={-4} rx={28} ry={8} fill="rgba(0,0,0,0.10)" />
      {/* Left face */}
      <path d={`M ${-tw},${-H+th} L 0,${-H+2*th} L 0,0 L ${-tw},${-th} Z`} fill="url(#btLeft)" />
      {/* Right face */}
      <path d={`M ${tw},${-H+th} L 0,${-H+2*th} L 0,0 L ${tw},${-th} Z`} fill="url(#btRight)" />
      {/* Top face (rim) */}
      <path d={`M 0,${-H} L ${tw},${-H+th} L 0,${-H+2*th} L ${-tw},${-H+th} Z`} fill="url(#btTop)" />
      {/* Water fill on top */}
      <path d={`M 0,${-H+2} L ${tw-4},${-H+th} L 0,${-H+2*th-2} L ${-tw+4},${-H+th} Z`} fill="rgba(100,180,220,0.3)" />
      {/* Simple faucet */}
      <rect x={-1} y={-24} width={2} height={4} rx={0.5} fill="#B0B0B8" />
      <circle cx={0} cy={-25} r={1.5} fill="#C0C0C8" />
    </g>
  );
}
