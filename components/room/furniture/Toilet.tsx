"use client";
import type { FurnitureProps } from "./types";

export default function Toilet({ x, y }: FurnitureProps) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <ellipse cx={0} cy={0} rx={12} ry={5} fill="rgba(0,0,0,0.10)" />
      <path d="M -8,-16 L -8,-28 L 0,-32 L 0,-20 Z" fill="#D8D8E0" />
      <path d="M 8,-16 L 8,-28 L 0,-32 L 0,-20 Z" fill="#C8C8D0" />
      <path d="M -8,-28 L 0,-32 L 8,-28 L 0,-24 Z" fill="#E0E0E8" />
      <path d="M 10,-4 L 10,-12 L 0,-6 L 0,2 Z" fill="#C8C8D0" />
      <path d="M -10,-4 L -10,-12 L 0,-6 L 0,2 Z" fill="#D8D8E0" />
      <ellipse cx={0} cy={-8} rx={10} ry={5} fill="#E8E8F0" />
      <ellipse cx={0} cy={-8} rx={7} ry={3.5} fill="#D0D0D8" />
      <path d="M -8,-12 L 0,-16 L 8,-12" fill="none" stroke="#B8B8C0" strokeWidth={0.8} />
      <circle cx={0} cy={-30} r={1.5} fill="#B0B0B8" />
    </g>
  );
}
