"use client";
import type { FurnitureProps } from "./types";

export default function PlantBig({ x, y }: FurnitureProps) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <ellipse cx={0} cy={0} rx={12} ry={5} fill="rgba(0,0,0,0.10)" />
      <path d="M 0,0 L 8,-4 L 8,-12 L 0,-8 Z" fill="#A0603A" />
      <path d="M 0,0 L -8,-4 L -8,-12 L 0,-8 Z" fill="#C07848" />
      <path d="M -8,-12 L 0,-16 L 8,-12 L 0,-8 Z" fill="#5A3A20" />
      <path d="M -9,-12 L 0,-17 L 9,-12 L 0,-7 Z" fill="#B86840" opacity={0.5} />
      <line x1={0} y1={-14} x2={0} y2={-28} stroke="#3A7A2A" strokeWidth={2} />
      <line x1={0} y1={-20} x2={-4} y2={-26} stroke="#3A7A2A" strokeWidth={1.5} />
      <line x1={0} y1={-18} x2={5} y2={-24} stroke="#3A7A2A" strokeWidth={1.5} />
      <ellipse cx={0} cy={-32} rx={7} ry={4} fill="#4AAA3A" transform="rotate(-15, 0, -32)" />
      <ellipse cx={-6} cy={-28} rx={6} ry={3.5} fill="#3A9A2A" transform="rotate(-40, -6, -28)" />
      <ellipse cx={7} cy={-27} rx={6} ry={3} fill="#5ABB4A" transform="rotate(30, 7, -27)" />
      <ellipse cx={-3} cy={-35} rx={5} ry={3} fill="#4AAA3A" transform="rotate(-10, -3, -35)" />
      <ellipse cx={4} cy={-34} rx={5} ry={2.5} fill="#3A9A2A" transform="rotate(20, 4, -34)" />
      <ellipse cx={1} cy={-33} rx={3} ry={1.5} fill="rgba(255,255,255,0.08)" transform="rotate(-15, 1, -33)" />
    </g>
  );
}
