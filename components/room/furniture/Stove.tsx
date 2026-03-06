"use client";
import type { FurnitureProps } from "./types";

export default function Stove({ x, y }: FurnitureProps) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <ellipse cx={0} cy={-4} rx={14} ry={5} fill="rgba(0,0,0,0.12)" />
      <path d="M 12,-6 L 12,-28 L 0,-22 L 0,0 Z" fill="#2A2A30" />
      <path d="M -12,-6 L -12,-28 L 0,-22 L 0,0 Z" fill="#3A3A40" />
      <path d="M -12,-28 L 0,-34 L 12,-28 L 0,-22 Z" fill="#4A4A50" />
      <ellipse cx={-4} cy={-28} rx={3} ry={1.5} fill="#222228" />
      <ellipse cx={4} cy={-28} rx={3} ry={1.5} fill="#222228" />
      <ellipse cx={-4} cy={-32} rx={3} ry={1.5} fill="#222228" />
      <ellipse cx={4} cy={-32} rx={3} ry={1.5} fill="#222228" />
      <ellipse cx={-4} cy={-28} rx={2.5} ry={1.2} fill="rgba(255,80,40,0.3)" />
      <ellipse cx={-4} cy={-36} rx={2} ry={1} fill="rgba(255,255,255,0.06)" />
      <ellipse cx={-3} cy={-39} rx={1.5} ry={0.8} fill="rgba(255,255,255,0.04)" />
      <path d="M -10,-4 L 0,2 L 10,-4 L 0,-10 Z" fill="#333338" />
      <circle cx={0} cy={-4} r={1} fill="#666" />
      <circle cx={10} cy={-18} r={1.2} fill="#888" />
      <circle cx={10} cy={-22} r={1.2} fill="#888" />
    </g>
  );
}
