"use client";
import type { FurnitureProps } from "./types";

export default function Nightstand({ x, y }: FurnitureProps) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <ellipse cx={0} cy={4} rx={16} ry={6} fill="rgba(0,0,0,0.12)" />
      <path d="M 0,0 L 12,-6 L 12,-22 L 0,-16 Z" fill="#5A3E28" />
      <path d="M 0,0 L -12,-6 L -12,-22 L 0,-16 Z" fill="#7B5E42" />
      <path d="M 0,-28 L 12,-22 L 0,-16 L -12,-22 Z" fill="#8B6E52" />
      <line x1={-10} y1={-14} x2={0} y2={-8} stroke="rgba(0,0,0,0.15)" strokeWidth={0.5} />
      <line x1={0} y1={-8} x2={10} y2={-14} stroke="rgba(0,0,0,0.15)" strokeWidth={0.5} />
      <circle cx={0} cy={-11} r={1.2} fill="#C4A882" />
      <path d="M 0,-28 L 6,-25 L 0,-22 L -6,-25 Z" fill="rgba(255,255,255,0.1)" />
    </g>
  );
}
