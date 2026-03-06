"use client";
import type { FurnitureProps } from "./types";

export default function Desk({ x, y }: FurnitureProps) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <ellipse cx={0} cy={6} rx={30} ry={8} fill="rgba(0,0,0,0.10)" />
      <line x1={-20} y1={-6} x2={-20} y2={2} stroke="#6B5040" strokeWidth={2} />
      <line x1={20} y1={-6} x2={20} y2={2} stroke="#5B4030" strokeWidth={2} />
      <line x1={0} y1={6} x2={0} y2={-2} stroke="#5B4030" strokeWidth={2} />
      <line x1={-2} y1={-14} x2={-2} y2={-6} stroke="#6B5040" strokeWidth={2} />
      <path d="M 24,-10 L 24,-14 L 0,-2 L 0,2 Z" fill="#6B5040" />
      <path d="M -24,-10 L -24,-14 L 0,-2 L 0,2 Z" fill="#8B7050" />
      <path d="M -24,-14 L 0,-26 L 24,-14 L 0,-2 Z" fill="#A08060" />
      <path d="M -8,-18 L 0,-22 L 8,-18 L 0,-14 Z" fill="#111118" />
      <path d="M -8,-18 L -8,-28 L 0,-32 L 0,-22 Z" fill="#1A1A28" />
      <path d="M 8,-18 L 8,-28 L 0,-32 L 0,-22 Z" fill="#151520" />
      <path d="M -6,-19 L 0,-23 L 6,-19 L 0,-15 Z" fill="rgba(80,140,220,0.12)" />
      <path d="M 4,-8 L 12,-12 L 16,-10 L 8,-6 Z" fill="#3A3A44" />
      <path d="M 0,-26 L 12,-20 L 0,-14 L -12,-20 Z" fill="rgba(255,255,255,0.04)" />
    </g>
  );
}
