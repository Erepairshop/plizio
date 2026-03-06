"use client";
import type { FurnitureProps } from "./types";

export default function Aquarium({ x, y }: FurnitureProps) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <ellipse cx={0} cy={0} rx={28} ry={8} fill="rgba(0,0,0,0.10)" />
      <path d="M 22,-4 L 22,-10 L 0,2 L 0,8 Z" fill="#4A4A5A" />
      <path d="M -22,-4 L -22,-10 L 0,2 L 0,8 Z" fill="#5A5A6A" />
      <path d="M -22,-10 L -22,-36 L 0,-24 L 0,2 Z" fill="rgba(60,160,200,0.35)" />
      <path d="M 22,-10 L 22,-36 L 0,-24 L 0,2 Z" fill="rgba(40,120,180,0.35)" />
      <path d="M -22,-36 L 0,-48 L 22,-36 L 0,-24 Z" fill="#3A3A4A" />
      <path d="M -20,-34 L 0,-46 L 20,-34 L 0,-22 Z" fill="rgba(80,180,220,0.25)" />
      <ellipse cx={-6} cy={-20} rx={3} ry={1.5} fill="#FF8844" />
      <path d="M -9,-20 L -11,-18 L -11,-22 Z" fill="#FF8844" />
      <ellipse cx={8} cy={-16} rx={2.5} ry={1.2} fill="#44AAFF" />
      <path d="M 10.5,-16 L 12.5,-14.5 L 12.5,-17.5 Z" fill="#44AAFF" />
      <circle cx={-2} cy={-28} r={1} fill="rgba(255,255,255,0.2)" />
      <circle cx={4} cy={-32} r={0.8} fill="rgba(255,255,255,0.15)" />
      <circle cx={-5} cy={-34} r={0.6} fill="rgba(255,255,255,0.15)" />
      <ellipse cx={-8} cy={-8} rx={3} ry={1} fill="#8A7A5A" />
      <ellipse cx={4} cy={-6} rx={4} ry={1.2} fill="#7A6A4A" />
      <ellipse cx={-2} cy={-5} rx={2} ry={0.8} fill="#9A8A6A" />
      <ellipse cx={0} cy={-8} rx={18} ry={7} fill="rgba(60,160,220,0.04)" />
    </g>
  );
}
