"use client";
import type { FurnitureProps } from "./types";

export default function Sink({ x, y }: FurnitureProps) {
  const tw = 10, th = 5, H = 22;
  return (
    <g transform={`translate(${x}, ${y})`}>
      <defs>
        <linearGradient id="skTop" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F0F0F6" />
          <stop offset="100%" stopColor="#E8E8F0" />
        </linearGradient>
        <linearGradient id="skLeft" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E0E0E8" />
          <stop offset="100%" stopColor="#D4D4DC" />
        </linearGradient>
        <linearGradient id="skRight" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#CCCCDA" />
          <stop offset="100%" stopColor="#C0C0C8" />
        </linearGradient>
      </defs>
      <ellipse cx={0} cy={-4} rx={12} ry={5} fill="rgba(0,0,0,0.10)" />
      {/* Left face */}
      <path d={`M ${-tw},${-H+th} L 0,${-H+2*th} L 0,0 L ${-tw},${-th} Z`} fill="url(#skLeft)" />
      {/* Right face */}
      <path d={`M ${tw},${-H+th} L 0,${-H+2*th} L 0,0 L ${tw},${-th} Z`} fill="url(#skRight)" />
      {/* Top face */}
      <path d={`M 0,${-H} L ${tw},${-H+th} L 0,${-H+2*th} L ${-tw},${-H+th} Z`} fill="url(#skTop)" />
      {/* Bowl depression */}
      <ellipse cx={0} cy={-14} rx={6} ry={3} fill="#D0D8E0" />
      {/* Faucet */}
      <rect x={-0.8} y={-24} width={1.6} height={5} rx={0.5} fill="#B0B0B8" />
    </g>
  );
}
