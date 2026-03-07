"use client";
import type { FurnitureProps } from "./types";

export default function Flowerbed({ x, y }: FurnitureProps) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <defs>
        <linearGradient id="fbTop" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#5A3A20" />
          <stop offset="100%" stopColor="#4A3018" />
        </linearGradient>
        <linearGradient id="fbLeft" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#6A4A30" />
          <stop offset="100%" stopColor="#5A3A20" />
        </linearGradient>
        <linearGradient id="fbRight" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#5A3A20" />
          <stop offset="100%" stopColor="#4A2A10" />
        </linearGradient>
      </defs>
      {/* Shadow */}
      <ellipse cx={0} cy={0} rx={26} ry={7} fill="rgba(0,0,0,0.08)" />
      {/* Dirt box — left */}
      <path d="M -22,-4 L -22,-8 L 0,4 L 0,8 Z" fill="url(#fbLeft)" />
      {/* Dirt box — right */}
      <path d="M 22,-4 L 22,-8 L 0,4 L 0,8 Z" fill="url(#fbRight)" />
      {/* Dirt box — top (soil) */}
      <path d="M -22,-8 L 0,-20 L 22,-8 L 0,4 Z" fill="url(#fbTop)" />
      {/* Flower stems */}
      <line x1={-10} y1={-12} x2={-10} y2={-7} stroke="#3A7A2A" strokeWidth={1} />
      <line x1={-1} y1={-10} x2={-1} y2={-5} stroke="#3A7A2A" strokeWidth={1} />
      <line x1={7} y1={-12} x2={7} y2={-7} stroke="#3A7A2A" strokeWidth={1} />
      <line x1={13} y1={-9} x2={13} y2={-4} stroke="#3A7A2A" strokeWidth={1} />
      {/* Flowers */}
      <circle cx={-10} cy={-14} r={3} fill="#FF6688" />
      <circle cx={-10} cy={-14} r={1.2} fill="#FFCC66" />
      <circle cx={-1} cy={-12} r={2.8} fill="#FFAA44" />
      <circle cx={-1} cy={-12} r={1.2} fill="#FFE066" />
      <circle cx={7} cy={-14} r={2.5} fill="#CC66FF" />
      <circle cx={7} cy={-14} r={1} fill="#FFCC88" />
      <circle cx={13} cy={-11} r={2.5} fill="#FF6688" />
      <circle cx={13} cy={-11} r={1} fill="#FFAA44" />
    </g>
  );
}
