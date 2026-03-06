"use client";
import type { FurnitureProps } from "./types";

export default function CoffeeTable({ x, y }: FurnitureProps) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <ellipse cx={0} cy={4} rx={28} ry={8} fill="rgba(0,0,0,0.10)" />
      <line x1={-18} y1={-3} x2={-18} y2={3} stroke="#6B5040" strokeWidth={2} />
      <line x1={18} y1={-3} x2={18} y2={3} stroke="#5B4030" strokeWidth={2} />
      <line x1={0} y1={5} x2={0} y2={-1} stroke="#5B4030" strokeWidth={2} />
      <line x1={-2} y1={-9} x2={-2} y2={-3} stroke="#6B5040" strokeWidth={2} />
      <path d="M 22,-6 L 22,-10 L 0,2 L 0,6 Z" fill="#6B5040" />
      <path d="M -22,-6 L -22,-10 L 0,2 L 0,6 Z" fill="#8B7050" />
      <path d="M -22,-10 L 0,-22 L 22,-10 L 0,2 Z" fill="#A08060" />
      <ellipse cx={6} cy={-12} rx={3} ry={1.5} fill="#E8E0D0" />
      <path d="M 3,-12 L 3,-15 L 9,-15 L 9,-12" fill="none" stroke="#D0C8B8" strokeWidth={0.8} />
      <path d="M 0,-22 L 11,-16 L 0,-10 L -11,-16 Z" fill="rgba(255,255,255,0.05)" />
    </g>
  );
}
