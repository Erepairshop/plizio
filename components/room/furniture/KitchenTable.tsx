"use client";
import type { FurnitureProps } from "./types";

export default function KitchenTable({ x, y }: FurnitureProps) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <ellipse cx={0} cy={-4} rx={32} ry={10} fill="rgba(0,0,0,0.10)" />
      <line x1={-20} y1={-4} x2={-20} y2={4} stroke="#D0D0D8" strokeWidth={2.5} />
      <line x1={20} y1={-4} x2={20} y2={4} stroke="#C0C0C8" strokeWidth={2.5} />
      <line x1={0} y1={8} x2={0} y2={0} stroke="#C0C0C8" strokeWidth={2.5} />
      <line x1={-2} y1={-12} x2={-2} y2={-4} stroke="#D0D0D8" strokeWidth={2.5} />
      <path d="M 26,-8 L 26,-12 L 0,4 L 0,8 Z" fill="#C0C0C8" />
      <path d="M -26,-8 L -26,-12 L 0,4 L 0,8 Z" fill="#D8D8E0" />
      <path d="M -26,-12 L 0,-28 L 26,-12 L 0,4 Z" fill="#E8E8F0" />
      <ellipse cx={-8} cy={-16} rx={4} ry={2} fill="#F0E8E0" />
      <ellipse cx={8} cy={-16} rx={4} ry={2} fill="#F0E8E0" />
    </g>
  );
}
