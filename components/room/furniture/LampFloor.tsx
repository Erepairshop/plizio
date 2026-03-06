"use client";
import type { FurnitureProps } from "./types";

export default function LampFloor({ x, y }: FurnitureProps) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <ellipse cx={0} cy={6} rx={28} ry={14} fill="rgba(255,220,100,0.08)" />
      <ellipse cx={0} cy={4} rx={8} ry={3} fill="rgba(0,0,0,0.10)" />
      <ellipse cx={0} cy={0} rx={6} ry={3} fill="#4A4A4A" />
      <ellipse cx={0} cy={-1} rx={5} ry={2.5} fill="#5A5A5A" />
      <rect x={-1.2} y={-42} width={2.4} height={42} fill="#666" rx={1} />
      <path d="M -10,-38 L 0,-35 L 0,-48 L -8,-46 Z" fill="#E8C98A" />
      <path d="M 10,-38 L 0,-35 L 0,-48 L 8,-46 Z" fill="#D4B574" />
      <ellipse cx={0} cy={-47} rx={8} ry={3} fill="#F0D89A" />
      <circle cx={0} cy={-40} r={4} fill="rgba(255,220,100,0.25)" />
      <circle cx={0} cy={-40} r={8} fill="rgba(255,220,100,0.06)" />
      <path d="M -6,-38 L 0,-36 L 6,-38 L 0,-42 Z" fill="rgba(255,240,180,0.3)" />
    </g>
  );
}
