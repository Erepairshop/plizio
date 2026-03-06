"use client";
import type { FurnitureProps } from "./types";

export default function Fountain({ x, y }: FurnitureProps) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <ellipse cx={0} cy={0} rx={32} ry={12} fill="rgba(0,0,0,0.10)" />
      <path d="M 0,4 L 28,-10 L 28,-4 L 0,10 Z" fill="#8A8A90" />
      <path d="M 0,4 L -28,-10 L -28,-4 L 0,10 Z" fill="#A0A0A8" />
      <path d="M -28,-10 L 0,-24 L 28,-10 L 0,4 Z" fill="rgba(80,160,200,0.3)" />
      <path d="M -22,-8 L 0,-20 L 22,-8 L 0,2 Z" fill="rgba(100,180,220,0.25)" />
      <rect x={-3} y={-36} width={6} height={20} rx={2} fill="#B0B0B8" />
      <ellipse cx={0} cy={-36} rx={8} ry={4} fill="#C0C0C8" />
      <ellipse cx={0} cy={-36} rx={6} ry={3} fill="rgba(100,180,220,0.25)" />
      <line x1={0} y1={-42} x2={0} y2={-36} stroke="rgba(100,180,220,0.4)" strokeWidth={1.5} />
      <path d="M -6,-34 Q -10,-28 -8,-24" fill="none" stroke="rgba(100,180,220,0.2)" strokeWidth={0.8} />
      <path d="M 6,-34 Q 10,-28 8,-24" fill="none" stroke="rgba(100,180,220,0.2)" strokeWidth={0.8} />
      <circle cx={-4} cy={-8} r={1} fill="rgba(255,255,255,0.15)" />
      <circle cx={6} cy={-6} r={0.8} fill="rgba(255,255,255,0.12)" />
    </g>
  );
}
