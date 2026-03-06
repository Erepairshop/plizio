"use client";
import type { FurnitureProps } from "./types";

export default function Bench({ x, y }: FurnitureProps) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <ellipse cx={0} cy={0} rx={28} ry={7} fill="rgba(0,0,0,0.10)" />
      <line x1={-18} y1={-2} x2={-18} y2={4} stroke="#5A5A5A" strokeWidth={2} />
      <line x1={18} y1={-2} x2={18} y2={4} stroke="#4A4A4A" strokeWidth={2} />
      <line x1={-2} y1={-8} x2={-2} y2={-2} stroke="#5A5A5A" strokeWidth={2} />
      <line x1={0} y1={6} x2={0} y2={0} stroke="#4A4A4A" strokeWidth={2} />
      <path d="M 22,-6 L 22,-9 L 0,3 L 0,6 Z" fill="#7A5A3A" />
      <path d="M -22,-6 L -22,-9 L 0,3 L 0,6 Z" fill="#9A7A4A" />
      <path d="M -22,-9 L 0,-21 L 22,-9 L 0,3 Z" fill="#AA8A5A" />
      <line x1={-16} y1={-14} x2={16} y2={-14} stroke="rgba(0,0,0,0.06)" strokeWidth={0.5} transform="rotate(-25,0,-14)" />
      <path d="M -20,-9 L -20,-18 L 0,-30 L 0,-21 Z" fill="#7A5A3A" />
      <path d="M 0,-30 L 20,-18 L 20,-9 L 0,-21 Z" fill="#5A4A2A" />
    </g>
  );
}
