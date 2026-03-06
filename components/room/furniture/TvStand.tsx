"use client";
import type { FurnitureProps } from "./types";

export default function TvStand({ x, y }: FurnitureProps) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <ellipse cx={0} cy={0} rx={30} ry={8} fill="rgba(0,0,0,0.12)" />
      <path d="M 24,-4 L 24,-14 L 0,-2 L 0,8 Z" fill="#3A3A4A" />
      <path d="M -24,-4 L -24,-14 L 0,-2 L 0,8 Z" fill="#4A4A5A" />
      <path d="M -24,-14 L 0,-26 L 24,-14 L 0,-2 Z" fill="#5A5A6A" />
      <path d="M -18,-18 L 0,-30 L 18,-18 L 0,-6 Z" fill="#111118" />
      <path d="M -18,-18 L -18,-42 L 0,-54 L 0,-30 Z" fill="#222230" />
      <path d="M 18,-18 L 18,-42 L 0,-54 L 0,-30 Z" fill="#1A1A28" />
      <path d="M -18,-42 L 0,-54 L 18,-42 L 0,-30 Z" fill="#2A2A3A" />
      <path d="M -15,-20 L 0,-28 L 15,-20 L 0,-12 Z" fill="#1A2A4A" />
      <path d="M -15,-20 L 0,-28 L 15,-20 L 0,-12 Z" fill="rgba(60,120,200,0.15)" />
      <path d="M -10,-22 L 0,-27 L 4,-25 L -6,-20 Z" fill="rgba(100,160,255,0.12)" />
      <path d="M 2,-16 L 10,-20 L 12,-19 L 4,-15 Z" fill="rgba(100,200,150,0.08)" />
      <ellipse cx={0} cy={-8} rx={20} ry={8} fill="rgba(60,120,200,0.04)" />
      <line x1={-20} y1={-9} x2={0} y2={2} stroke="rgba(255,255,255,0.05)" strokeWidth={0.5} />
      <line x1={0} y1={2} x2={20} y2={-9} stroke="rgba(255,255,255,0.05)" strokeWidth={0.5} />
    </g>
  );
}
