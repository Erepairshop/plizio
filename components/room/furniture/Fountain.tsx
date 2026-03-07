"use client";
import type { FurnitureProps } from "./types";

export default function Fountain({ x, y }: FurnitureProps) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <defs>
        <linearGradient id="fnTop" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B8B8C0" />
          <stop offset="100%" stopColor="#A0A0A8" />
        </linearGradient>
        <linearGradient id="fnLeft" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#9A9AA2" />
          <stop offset="100%" stopColor="#808088" />
        </linearGradient>
        <linearGradient id="fnRight" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#888890" />
          <stop offset="100%" stopColor="#707078" />
        </linearGradient>
      </defs>
      {/* Shadow */}
      <ellipse cx={0} cy={0} rx={30} ry={12} fill="rgba(0,0,0,0.10)" />
      {/* Basin — left wall */}
      <path d="M -28,-10 L -28,-4 L 0,10 L 0,4 Z" fill="url(#fnLeft)" />
      {/* Basin — right wall */}
      <path d="M 28,-10 L 28,-4 L 0,10 L 0,4 Z" fill="url(#fnRight)" />
      {/* Basin — top rim (diamond) */}
      <path d="M -28,-10 L 0,-24 L 28,-10 L 0,4 Z" fill="url(#fnTop)" />
      {/* Water surface inside */}
      <path d="M -22,-8 L 0,-20 L 22,-8 L 0,2 Z" fill="rgba(80,170,220,0.30)" />
      {/* Center pillar */}
      <rect x={-3} y={-38} width={6} height={22} rx={1.5} fill="url(#fnLeft)" />
      {/* Pillar top cap */}
      <ellipse cx={0} cy={-38} rx={5} ry={2.5} fill="url(#fnTop)" />
      {/* Water spout line */}
      <line x1={0} y1={-42} x2={0} y2={-38} stroke="rgba(100,180,220,0.4)" strokeWidth={1.5} />
    </g>
  );
}
