"use client";
import type { FurnitureProps } from "./types";

export default function Tree({ x, y }: FurnitureProps) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <ellipse cx={0} cy={0} rx={14} ry={6} fill="rgba(0,0,0,0.10)" />
      <rect x={-2.5} y={-22} width={5} height={24} rx={1.5} fill="#6B4E35" />
      <rect x={-1.5} y={-20} width={3} height={20} fill="#7B5E42" opacity={0.5} />
      <ellipse cx={0} cy={-30} rx={14} ry={8} fill="#3A8A2A" />
      <ellipse cx={-4} cy={-34} rx={10} ry={7} fill="#4A9A3A" />
      <ellipse cx={4} cy={-28} rx={10} ry={6} fill="#3A8A2A" />
      <ellipse cx={0} cy={-36} rx={8} ry={5} fill="#5AAA4A" />
      <ellipse cx={2} cy={-34} rx={5} ry={3} fill="rgba(255,255,255,0.06)" />
    </g>
  );
}
