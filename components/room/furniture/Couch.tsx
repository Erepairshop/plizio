"use client";
import type { FurnitureProps } from "./types";

export default function Couch({ x, y }: FurnitureProps) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <ellipse cx={0} cy={0} rx={34} ry={10} fill="rgba(0,0,0,0.12)" />
      <path d="M 28,-10 L 28,-20 L 0,-6 L 0,4 Z" fill="#6B3040" />
      <path d="M -28,-10 L -28,-20 L 0,-6 L 0,4 Z" fill="#8B4050" />
      <path d="M 0,-16 L 28,-28 L 0,-40 L -28,-28 Z" fill="#A85060" />
      <path d="M -28,-28 L -28,-38 L 0,-50 L 0,-40 Z" fill="#7B3848" />
      <path d="M 0,-50 L 28,-38 L 28,-28 L 0,-40 Z" fill="#5B2838" />
      <path d="M -28,-38 L 0,-50 L 28,-38 L 0,-26 Z" fill="#9B4858" />
      <line x1={-10} y1={-22} x2={-10} y2={-32} stroke="rgba(0,0,0,0.08)" strokeWidth={0.8} />
      <line x1={10} y1={-22} x2={10} y2={-32} stroke="rgba(0,0,0,0.08)" strokeWidth={0.8} />
      <path d="M -28,-28 L -34,-25 L -34,-35 L -28,-38 Z" fill="#7B3848" />
      <path d="M -34,-35 L -28,-38 L -22,-35 L -28,-32 Z" fill="#9B4858" />
      <path d="M 28,-28 L 34,-25 L 34,-35 L 28,-38 Z" fill="#5B2838" />
      <path d="M 34,-35 L 28,-38 L 22,-35 L 28,-32 Z" fill="#9B4858" />
      <path d="M 0,-16 L 14,-23 L 0,-30 L -14,-23 Z" fill="rgba(255,255,255,0.06)" />
      <ellipse cx={-14} cy={-30} rx={5} ry={3} fill="#CC8890" transform="rotate(-25, -14, -30)" />
    </g>
  );
}
