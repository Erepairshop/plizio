"use client";
import type { FurnitureProps } from "./types";

export default function Bathtub({ x, y }: FurnitureProps) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <ellipse cx={0} cy={-4} rx={30} ry={8} fill="rgba(0,0,0,0.10)" />
      <path d="M 24,-4 L 24,-18 L 0,-6 L 0,8 Z" fill="#D8D8E0" />
      <path d="M -24,-4 L -24,-18 L 0,-6 L 0,8 Z" fill="#E8E8F0" />
      <path d="M -24,-18 L 0,-30 L 24,-18 L 0,-6 Z" fill="#F0F0F8" />
      <path d="M -20,-16 L 0,-28 L 20,-16 L 0,-4 Z" fill="rgba(100,180,220,0.3)" />
      <circle cx={-6} cy={-14} r={2} fill="rgba(255,255,255,0.2)" />
      <circle cx={2} cy={-18} r={1.5} fill="rgba(255,255,255,0.15)" />
      <circle cx={-10} cy={-16} r={1.2} fill="rgba(255,255,255,0.15)" />
      <circle cx={8} cy={-12} r={1.8} fill="rgba(255,255,255,0.12)" />
      <rect x={-2} y={-32} width={4} height={2} rx={1} fill="#C0C0C8" />
      <rect x={-1} y={-36} width={2} height={4} rx={0.5} fill="#B0B0B8" />
      <circle cx={0} cy={-37} r={2} fill="#D0D0D8" />
      <ellipse cx={-18} cy={2} rx={3} ry={1.5} fill="#B0B0B8" />
      <ellipse cx={18} cy={2} rx={3} ry={1.5} fill="#B0B0B8" />
    </g>
  );
}
