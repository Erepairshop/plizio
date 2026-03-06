"use client";
import type { FurnitureProps } from "./types";

export default function Wardrobe({ x, y }: FurnitureProps) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <ellipse cx={0} cy={0} rx={20} ry={8} fill="rgba(0,0,0,0.12)" />
      <path d="M 14,-6 L 14,-48 L 0,-42 L 0,0 Z" fill="#4A3020" />
      <path d="M -14,-6 L -14,-48 L 0,-42 L 0,0 Z" fill="#6B4E35" />
      <path d="M -14,-48 L 0,-54 L 14,-48 L 0,-42 Z" fill="#7B5E42" />
      <line x1={-12} y1={-8} x2={-1} y2={-3} stroke="rgba(0,0,0,0.12)" strokeWidth={0.5} />
      <line x1={-12} y1={-44} x2={-1} y2={-39} stroke="rgba(0,0,0,0.12)" strokeWidth={0.5} />
      <line x1={-1} y1={-3} x2={-1} y2={-39} stroke="rgba(0,0,0,0.12)" strokeWidth={0.5} />
      <line x1={12} y1={-8} x2={1} y2={-3} stroke="rgba(0,0,0,0.12)" strokeWidth={0.5} />
      <line x1={12} y1={-44} x2={1} y2={-39} stroke="rgba(0,0,0,0.12)" strokeWidth={0.5} />
      <line x1={1} y1={-3} x2={1} y2={-39} stroke="rgba(0,0,0,0.12)" strokeWidth={0.5} />
      <circle cx={-3} cy={-21} r={1} fill="#C4A882" />
      <circle cx={3} cy={-21} r={1} fill="#C4A882" />
      <path d="M -7,-51 L 0,-54 L 7,-51 L 0,-48 Z" fill="rgba(255,255,255,0.06)" />
    </g>
  );
}
