"use client";
import type { FurnitureProps } from "./types";

export default function Bench({ x, y }: FurnitureProps) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <defs>
        <linearGradient id="bnTop" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B08860" />
          <stop offset="100%" stopColor="#9A7550" />
        </linearGradient>
        <linearGradient id="bnLeft" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#7A5A3A" />
          <stop offset="100%" stopColor="#6A4A2A" />
        </linearGradient>
        <linearGradient id="bnRight" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#6A4A2A" />
          <stop offset="100%" stopColor="#5A3A1A" />
        </linearGradient>
      </defs>
      {/* Shadow */}
      <ellipse cx={0} cy={-4} rx={26} ry={7} fill="rgba(0,0,0,0.10)" />
      {/* Seat slab — top */}
      <path d="M -22,-10 L 0,-22 L 22,-10 L 0,2 Z" fill="url(#bnTop)" />
      {/* Seat slab — left */}
      <path d="M -22,-10 L -22,-6 L 0,6 L 0,2 Z" fill="url(#bnLeft)" />
      {/* Seat slab — right */}
      <path d="M 22,-10 L 22,-6 L 0,6 L 0,2 Z" fill="url(#bnRight)" />
      {/* Backrest — left face */}
      <path d="M -20,-10 L -20,-20 L 0,-32 L 0,-22 Z" fill="url(#bnLeft)" />
      {/* Backrest — right face */}
      <path d="M 20,-10 L 20,-20 L 0,-32 L 0,-22 Z" fill="url(#bnRight)" />
      {/* Backrest — top edge */}
      <path d="M -20,-20 L 0,-32 L 20,-20 L 0,-8 Z" fill="url(#bnTop)" opacity={0.6} />
      {/* Plank line accent on seat */}
      <line x1={-11} y1={-16} x2={11} y2={-4} stroke="rgba(0,0,0,0.08)" strokeWidth={0.6} />
    </g>
  );
}
