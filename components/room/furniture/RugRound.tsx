"use client";
import type { FurnitureProps } from "./types";

export default function RugRound({ x, y }: FurnitureProps) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <path d="M 0,-20 L 28,-6 L 0,8 L -28,-6 Z" fill="#8B4050" opacity={0.6} />
      <path d="M 0,-16 L 22,-4 L 0,4 L -22,-4 Z" fill="#A85060" opacity={0.5} />
      <path d="M 0,-12 L 14,-4 L 0,2 L -14,-4 Z" fill="none" stroke="rgba(255,200,150,0.2)" strokeWidth={1} />
      <ellipse cx={0} cy={-4} rx={6} ry={3} fill="rgba(255,200,150,0.08)" />
    </g>
  );
}
