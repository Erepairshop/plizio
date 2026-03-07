"use client";
import type { FurnitureProps } from "./types";

export default function Couch({ x, y }: FurnitureProps) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <defs>
        <linearGradient id="coTop" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#B85868" />
          <stop offset="100%" stopColor="#A85060" />
        </linearGradient>
        <linearGradient id="coLeft" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8B4050" />
          <stop offset="100%" stopColor="#7B3848" />
        </linearGradient>
        <linearGradient id="coRight" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#6B3040" />
          <stop offset="100%" stopColor="#5B2838" />
        </linearGradient>
      </defs>
      {/* Shadow */}
      <ellipse cx={0} cy={-4} rx={30} ry={9} fill="rgba(0,0,0,0.12)" />
      {/* Seat box — left face */}
      <path d="M -28,-10 L -28,-18 L 0,-6 L 0,2 Z" fill="url(#coLeft)" />
      {/* Seat box — right face */}
      <path d="M 28,-10 L 28,-18 L 0,-6 L 0,2 Z" fill="url(#coRight)" />
      {/* Seat box — top face */}
      <path d="M 0,-14 L 28,-26 L 0,-38 L -28,-26 Z" fill="url(#coTop)" />
      {/* Backrest — left face */}
      <path d="M -28,-26 L -28,-38 L 0,-50 L 0,-38 Z" fill="#7B3848" />
      {/* Backrest — right face */}
      <path d="M 0,-50 L 28,-38 L 28,-26 L 0,-38 Z" fill="#5B2838" />
      {/* Backrest — top face */}
      <path d="M -28,-38 L 0,-50 L 28,-38 L 0,-26 Z" fill="#9B4858" />
      {/* Subtle cushion line */}
      <line x1={-14} y1={-26} x2={14} y2={-26} stroke="rgba(0,0,0,0.10)" strokeWidth={0.8} />
    </g>
  );
}
