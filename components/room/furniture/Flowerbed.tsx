"use client";
import type { FurnitureProps } from "./types";

export default function Flowerbed({ x, y }: FurnitureProps) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <ellipse cx={0} cy={4} rx={28} ry={8} fill="rgba(0,0,0,0.08)" />
      <path d="M 22,-2 L 22,-6 L 0,6 L 0,10 Z" fill="#5A3A20" />
      <path d="M -22,-2 L -22,-6 L 0,6 L 0,10 Z" fill="#6A4A30" />
      <path d="M -22,-6 L 0,-18 L 22,-6 L 0,6 Z" fill="#4A3018" />
      <circle cx={-10} cy={-14} r={3} fill="#FF6688" />
      <circle cx={-10} cy={-14} r={1.5} fill="#FFAA44" />
      <circle cx={-2} cy={-12} r={3} fill="#FFAA44" />
      <circle cx={-2} cy={-12} r={1.5} fill="#FFD844" />
      <circle cx={6} cy={-14} r={2.5} fill="#CC66FF" />
      <circle cx={6} cy={-14} r={1.2} fill="#FFCC88" />
      <circle cx={12} cy={-10} r={2.5} fill="#FF6688" />
      <circle cx={12} cy={-10} r={1.2} fill="#FFAA44" />
      <line x1={-10} y1={-11} x2={-10} y2={-6} stroke="#3A7A2A" strokeWidth={1} />
      <line x1={-2} y1={-9} x2={-2} y2={-4} stroke="#3A7A2A" strokeWidth={1} />
      <line x1={6} y1={-11} x2={6} y2={-6} stroke="#3A7A2A" strokeWidth={1} />
      <line x1={12} y1={-7} x2={12} y2={-2} stroke="#3A7A2A" strokeWidth={1} />
    </g>
  );
}
