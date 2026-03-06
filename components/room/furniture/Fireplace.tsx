"use client";
import type { FurnitureProps } from "./types";

export default function Fireplace({ x, y }: FurnitureProps) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <ellipse cx={0} cy={6} rx={30} ry={8} fill="rgba(0,0,0,0.12)" />
      <path d="M 24,-6 L 24,-42 L 0,-30 L 0,6 Z" fill="#7A3A2A" />
      <path d="M -24,-6 L -24,-42 L 0,-30 L 0,6 Z" fill="#9A5A3A" />
      <path d="M -24,-42 L 0,-54 L 24,-42 L 0,-30 Z" fill="#AA6A4A" />
      <path d="M -12,-2 L 0,-8 L 12,-2 L 0,4 Z" fill="#1A0A0A" />
      <path d="M -12,-2 L -12,-16 L 0,-22 L 0,-8 Z" fill="#2A1010" />
      <path d="M 12,-2 L 12,-16 L 0,-22 L 0,-8 Z" fill="#200808" />
      <ellipse cx={-3} cy={-8} rx={3} ry={5} fill="#FF6820" opacity={0.7} />
      <ellipse cx={3} cy={-10} rx={2.5} ry={6} fill="#FFAA20" opacity={0.6} />
      <ellipse cx={0} cy={-12} rx={2} ry={4} fill="#FFD860" opacity={0.5} />
      <ellipse cx={0} cy={8} rx={24} ry={10} fill="rgba(255,120,40,0.06)" />
      <path d="M -20,-42 L 0,-54 L 20,-42 L 0,-30 Z" fill="rgba(255,255,255,0.04)" />
    </g>
  );
}
