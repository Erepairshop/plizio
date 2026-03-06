"use client";
import type { FurnitureProps } from "./types";

export default function Counter({ x, y }: FurnitureProps) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <ellipse cx={0} cy={6} rx={28} ry={7} fill="rgba(0,0,0,0.10)" />
      <path d="M 24,-4 L 24,-22 L 0,-10 L 0,8 Z" fill="#D0D0D8" />
      <path d="M -24,-4 L -24,-22 L 0,-10 L 0,8 Z" fill="#E0E0E8" />
      <path d="M -24,-22 L 0,-34 L 24,-22 L 0,-10 Z" fill="#E8E0D8" />
      <path d="M -10,-22 L 0,-28 L 6,-24" fill="none" stroke="rgba(180,170,160,0.2)" strokeWidth={0.5} />
      <path d="M 4,-18 L 12,-22 L 18,-20" fill="none" stroke="rgba(180,170,160,0.15)" strokeWidth={0.5} />
      <rect x={-1} y={-8} width={2} height={3} rx={0.5} fill="#A0A0A8" />
    </g>
  );
}
