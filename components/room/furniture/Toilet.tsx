"use client";
import type { FurnitureProps } from "./types";

export default function Toilet({ x, y }: FurnitureProps) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <defs>
        <linearGradient id="tlTop" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#EEEEF4" />
          <stop offset="100%" stopColor="#E4E4EC" />
        </linearGradient>
        <linearGradient id="tlLeft" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#DCDCE4" />
          <stop offset="100%" stopColor="#D0D0D8" />
        </linearGradient>
        <linearGradient id="tlRight" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#C8C8D2" />
          <stop offset="100%" stopColor="#BDBDC6" />
        </linearGradient>
      </defs>
      <ellipse cx={0} cy={-4} rx={12} ry={5} fill="rgba(0,0,0,0.10)" />
      {/* Tank - left face */}
      <path d="M -8,-22 L 0,-26 L 0,-14 L -8,-10 Z" fill="url(#tlLeft)" />
      {/* Tank - right face */}
      <path d="M 8,-22 L 0,-26 L 0,-14 L 8,-10 Z" fill="url(#tlRight)" />
      {/* Tank - top face */}
      <path d="M 0,-32 L 8,-28 L 0,-24 L -8,-28 Z" fill="url(#tlTop)" />
      {/* Seat - left face */}
      <path d="M -10,-6 L 0,-12 L 0,0 L -10,6 Z" fill="url(#tlLeft)" />
      {/* Seat - right face */}
      <path d="M 10,-6 L 0,-12 L 0,0 L 10,6 Z" fill="url(#tlRight)" />
      {/* Seat - top face (lid) */}
      <ellipse cx={0} cy={-8} rx={10} ry={5} fill="url(#tlTop)" />
      {/* Bowl hint */}
      <ellipse cx={0} cy={-8} rx={6} ry={3} fill="#D4D4DC" />
      {/* Flush button */}
      <circle cx={0} cy={-30} r={1.2} fill="#B0B0B8" />
    </g>
  );
}
