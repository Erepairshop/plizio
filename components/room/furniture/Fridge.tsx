"use client";
import type { FurnitureProps } from "./types";

export default function Fridge({ x, y }: FurnitureProps) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <ellipse cx={0} cy={-4} rx={16} ry={6} fill="rgba(0,0,0,0.12)" />
      <path d="M 12,-6 L 12,-54 L 0,-48 L 0,0 Z" fill="#C0C8D0" />
      <path d="M -12,-6 L -12,-54 L 0,-48 L 0,0 Z" fill="#D8E0E8" />
      <path d="M -12,-54 L 0,-60 L 12,-54 L 0,-48 Z" fill="#E0E8F0" />
      <line x1={-10} y1={-36} x2={0} y2={-30} stroke="rgba(0,0,0,0.08)" strokeWidth={0.5} />
      <line x1={0} y1={-30} x2={10} y2={-36} stroke="rgba(0,0,0,0.08)" strokeWidth={0.5} />
      <rect x={-10} y={-44} width={1.5} height={6} rx={0.5} fill="#A0A8B0" />
      <rect x={-10} y={-26} width={1.5} height={6} rx={0.5} fill="#A0A8B0" />
      <path d="M -8,-10 L -8,-50 L -5,-48 L -5,-8 Z" fill="rgba(255,255,255,0.06)" />
      <path d="M -6,-57 L 0,-60 L 6,-57 L 0,-54 Z" fill="rgba(255,255,255,0.08)" />
    </g>
  );
}
