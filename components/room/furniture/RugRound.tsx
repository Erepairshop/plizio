"use client";
import type { FurnitureProps } from "./types";

export default function RugRound({ x, y }: FurnitureProps) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <defs>
        <linearGradient id="rrOuter" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#9A5060" />
          <stop offset="100%" stopColor="#7A3040" />
        </linearGradient>
        <linearGradient id="rrInner" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B06070" />
          <stop offset="100%" stopColor="#8B4050" />
        </linearGradient>
        <linearGradient id="rrCenter" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D0909A" />
          <stop offset="100%" stopColor="#B07080" />
        </linearGradient>
      </defs>
      {/* Outer diamond */}
      <path d="M 0,-20 L 28,-6 L 0,8 L -28,-6 Z" fill="url(#rrOuter)" opacity={0.7} />
      {/* Inner diamond */}
      <path d="M 0,-15 L 20,-4 L 0,5 L -20,-4 Z" fill="url(#rrInner)" opacity={0.6} />
      {/* Center diamond */}
      <path d="M 0,-10 L 10,-4 L 0,2 L -10,-4 Z" fill="url(#rrCenter)" opacity={0.5} />
    </g>
  );
}
