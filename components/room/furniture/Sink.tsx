"use client";
import type { FurnitureProps } from "./types";

export default function Sink({ x, y }: FurnitureProps) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <ellipse cx={0} cy={-4} rx={12} ry={5} fill="rgba(0,0,0,0.10)" />
      <path d="M 10,-4 L 10,-18 L 0,-12 L 0,2 Z" fill="#D0D0D8" />
      <path d="M -10,-4 L -10,-18 L 0,-12 L 0,2 Z" fill="#E0E0E8" />
      <ellipse cx={0} cy={-14} rx={10} ry={5} fill="#E8E8F0" />
      <ellipse cx={0} cy={-14} rx={7} ry={3.5} fill="#D0D8E0" />
      <rect x={-1} y={-22} width={2} height={6} rx={0.5} fill="#B0B0B8" />
      <path d="M -1,-22 L 0,-24 L 1,-22" fill="#C0C0C8" />
      <circle cx={0} cy={-15} r={0.8} fill="rgba(100,180,220,0.3)" />
      <path d="M -7,-26 L 0,-30 L 7,-26 L 0,-22 Z" fill="rgba(180,200,220,0.3)" />
      <path d="M -7,-26 L 0,-30 L 7,-26 L 0,-22 Z" fill="none" stroke="#A0A8B0" strokeWidth={0.5} />
    </g>
  );
}
