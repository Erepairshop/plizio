"use client";
import type { FurnitureProps } from "./types";

export default function Aquarium({ x, y }: FurnitureProps) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <defs>
        <linearGradient id="aqTop" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4A4A5A" />
          <stop offset="100%" stopColor="#3A3A4A" />
        </linearGradient>
        <linearGradient id="aqLeft" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(70,170,210,0.40)" />
          <stop offset="100%" stopColor="rgba(40,120,170,0.35)" />
        </linearGradient>
        <linearGradient id="aqRight" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(50,140,190,0.38)" />
          <stop offset="100%" stopColor="rgba(30,100,150,0.32)" />
        </linearGradient>
      </defs>
      {/* Shadow */}
      <ellipse cx={0} cy={-4} rx={28} ry={8} fill="rgba(0,0,0,0.10)" />
      {/* Stand — left */}
      <path d="M -22,-4 L -22,-10 L 0,2 L 0,8 Z" fill="#4A4A5A" />
      {/* Stand — right */}
      <path d="M 22,-4 L 22,-10 L 0,2 L 0,8 Z" fill="#3A3A4A" />
      {/* Glass box — left face */}
      <path d="M -22,-10 L -22,-36 L 0,-24 L 0,2 Z" fill="url(#aqLeft)" />
      {/* Glass box — right face */}
      <path d="M 22,-10 L 22,-36 L 0,-24 L 0,2 Z" fill="url(#aqRight)" />
      {/* Glass box — top frame */}
      <path d="M -22,-36 L 0,-48 L 22,-36 L 0,-24 Z" fill="url(#aqTop)" />
      {/* Sand at bottom */}
      <path d="M -18,-12 L 0,-6 L 18,-12 L 0,-24 Z" fill="rgba(180,160,100,0.25)" />
      {/* Fish 1 — orange */}
      <ellipse cx={-6} cy={-20} rx={3} ry={1.5} fill="#FF8844" />
      <path d="M -9,-20 L -11,-18.5 L -11,-21.5 Z" fill="#FF8844" />
      {/* Fish 2 — blue */}
      <ellipse cx={7} cy={-16} rx={2.5} ry={1.2} fill="#44AAFF" />
      <path d="M 9.5,-16 L 11.5,-14.8 L 11.5,-17.2 Z" fill="#44AAFF" />
      {/* Bubble */}
      <circle cx={-3} cy={-28} r={1} fill="rgba(255,255,255,0.2)" />
    </g>
  );
}
