"use client";
import type { FurnitureProps } from "./types";

export default function Bookshelf({ x, y }: FurnitureProps) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <defs>
        <linearGradient id="bsTop" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8A7050" />
          <stop offset="100%" stopColor="#7A6040" />
        </linearGradient>
        <linearGradient id="bsLeft" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#7A6040" />
          <stop offset="100%" stopColor="#6A5030" />
        </linearGradient>
        <linearGradient id="bsRight" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#5A4030" />
          <stop offset="100%" stopColor="#4A3020" />
        </linearGradient>
      </defs>
      {/* Shadow */}
      <ellipse cx={0} cy={-4} rx={18} ry={7} fill="rgba(0,0,0,0.12)" />
      {/* Main box — left face */}
      <path d="M -12,-6 L -12,-52 L 0,-46 L 0,0 Z" fill="url(#bsLeft)" />
      {/* Main box — right face */}
      <path d="M 12,-6 L 12,-52 L 0,-46 L 0,0 Z" fill="url(#bsRight)" />
      {/* Main box — top face */}
      <path d="M -12,-52 L 0,-58 L 12,-52 L 0,-46 Z" fill="url(#bsTop)" />
      {/* Shelf lines on left face */}
      <line x1={-12} y1={-18} x2={0} y2={-12} stroke="rgba(0,0,0,0.12)" strokeWidth={0.8} />
      <line x1={-12} y1={-32} x2={0} y2={-26} stroke="rgba(0,0,0,0.12)" strokeWidth={0.8} />
      {/* Books on left face — row 1 (top) */}
      <path d="M -10,-34 L -10,-42 L -7,-40 L -7,-32 Z" fill="#CC4444" />
      <path d="M -7,-33 L -7,-41 L -4,-39 L -4,-31 Z" fill="#4488CC" />
      <path d="M -4,-32 L -4,-40 L -1,-38 L -1,-30 Z" fill="#44AA44" />
      {/* Books — row 2 */}
      <path d="M -10,-20 L -10,-28 L -6,-26 L -6,-18 Z" fill="#8844CC" />
      <path d="M -6,-19 L -6,-27 L -2,-25 L -2,-17 Z" fill="#CC8844" />
      {/* Books — row 3 (bottom) */}
      <path d="M -10,-8 L -10,-14 L -6,-12 L -6,-6 Z" fill="#44CCAA" />
      <path d="M -6,-7 L -6,-13 L -2,-11 L -2,-5 Z" fill="#CC6688" />
    </g>
  );
}
