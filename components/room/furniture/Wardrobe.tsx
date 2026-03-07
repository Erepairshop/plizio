"use client";
import type { FurnitureProps } from "./types";

// LEFT face = FRONT (doors + handles)
// RIGHT face = SIDE (plain wood, no handles)
// When RoomRenderer mirrors with scale(-1,1), they swap automatically → correct for both rotations

export default function Wardrobe({ x, y }: FurnitureProps) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <defs>
        <linearGradient id="wdR" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3A2510" />
          <stop offset="35%" stopColor="#2E1C0A" />
          <stop offset="70%" stopColor="#261408" />
          <stop offset="100%" stopColor="#1E1006" />
        </linearGradient>
        <linearGradient id="wdL" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#7C5C38" />
          <stop offset="40%" stopColor="#6A4E28" />
          <stop offset="100%" stopColor="#584018" />
        </linearGradient>
        <linearGradient id="wdT" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C89A6C" />
          <stop offset="50%" stopColor="#A87A4A" />
          <stop offset="100%" stopColor="#8C6430" />
        </linearGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx={0} cy={-4} rx={20} ry={8} fill="rgba(0,0,0,0.2)" />

      {/* === RIGHT face — SIDE (plain wood, no handles) === */}
      <path d="M 14,-6 L 14,-48 L 0,-42 L 0,0 Z" fill="url(#wdR)" />
      {/* Subtle wood grain only */}
      <line x1={5} y1={-2} x2={5} y2={-44} stroke="rgba(255,255,255,0.04)" strokeWidth={0.8} />
      <line x1={9} y1={-3.5} x2={9} y2={-45.5} stroke="rgba(255,255,255,0.03)" strokeWidth={0.8} />
      {/* Side panel — subtle inset, no door detail */}
      <path d="M 1.5,-10 L 12,-16 L 12,-44 L 1.5,-38 Z"
        fill="rgba(0,0,0,0.06)" stroke="rgba(0,0,0,0.12)" strokeWidth={0.5} />

      {/* === LEFT face — FRONT (doors + handles) === */}
      <path d="M -14,-6 L -14,-48 L 0,-42 L 0,0 Z" fill="url(#wdL)" />
      {/* Wood grain */}
      <line x1={-5} y1={-2} x2={-5} y2={-44} stroke="rgba(255,255,255,0.055)" strokeWidth={0.8} />
      <line x1={-9} y1={-3.5} x2={-9} y2={-45.5} stroke="rgba(255,255,255,0.04}" strokeWidth={0.8} />

      {/* Center door divider */}
      <line x1={-7} y1={-3} x2={-7} y2={-45} stroke="rgba(0,0,0,0.35)" strokeWidth={0.8} />

      {/* Left door — upper panel */}
      <path d="M -1.5,-13 L -6,-15.5 L -6,-28 L -1.5,-25.5 Z" fill="rgba(0,0,0,0.1)" />
      <path d="M -1.5,-13 L -6,-15.5 L -6,-28 L -1.5,-25.5 Z"
        fill="none" stroke="rgba(0,0,0,0.22)" strokeWidth={0.6} />
      {/* Left door — lower panel */}
      <path d="M -1.5,-30 L -6,-32.5 L -6,-43 L -1.5,-40.5 Z" fill="rgba(0,0,0,0.1)" />
      <path d="M -1.5,-30 L -6,-32.5 L -6,-43 L -1.5,-40.5 Z"
        fill="none" stroke="rgba(0,0,0,0.22)" strokeWidth={0.6} />

      {/* Right door — upper panel */}
      <path d="M -8.5,-16 L -13,-18.5 L -13,-28 L -8.5,-25.5 Z" fill="rgba(0,0,0,0.07)" />
      <path d="M -8.5,-16 L -13,-18.5 L -13,-28 L -8.5,-25.5 Z"
        fill="none" stroke="rgba(0,0,0,0.18)" strokeWidth={0.5} />
      {/* Right door — lower panel */}
      <path d="M -8.5,-30 L -13,-32.5 L -13,-43 L -8.5,-40.5 Z" fill="rgba(0,0,0,0.07)" />
      <path d="M -8.5,-30 L -13,-32.5 L -13,-43 L -8.5,-40.5 Z"
        fill="none" stroke="rgba(0,0,0,0.18)" strokeWidth={0.5} />

      {/* Left door handle */}
      <rect x={-5} y={-30} width={3} height={5} rx={1} fill="#D4AC6A" />
      <rect x={-5} y={-30} width={3} height={5} rx={1} fill="none" stroke="#A07840" strokeWidth={0.5} />
      <rect x={-4.5} y={-29.5} width={1.5} height={2} rx={0.5} fill="rgba(255,255,255,0.4)" />

      {/* Right door handle */}
      <rect x={-11} y={-30} width={3} height={5} rx={1} fill="#D4AC6A" />
      <rect x={-11} y={-30} width={3} height={5} rx={1} fill="none" stroke="#A07840" strokeWidth={0.5} />
      <rect x={-10.5} y={-29.5} width={1.5} height={2} rx={0.5} fill="rgba(255,255,255,0.4)" />

      {/* Top face */}
      <path d="M -14,-48 L 0,-54 L 14,-48 L 0,-42 Z" fill="url(#wdT)" />
      {/* Top highlight */}
      <path d="M 0,-54 L 7,-51 L 0,-48 L -7,-51 Z" fill="rgba(255,255,255,0.14)" />

      {/* Crown molding */}
      <path d="M 0,-42 L 14,-48 L 15,-48.8 L 0,-43 Z" fill="rgba(255,255,255,0.07)" />
      <path d="M 0,-42 L -14,-48 L -15,-48.8 L 0,-43 Z" fill="rgba(0,0,0,0.07)" />
      <path d="M -15,-48.8 L 0,-55 L 15,-48.8 L 0,-42 Z" fill="rgba(255,255,255,0.06)" />

      {/* Base molding */}
      <path d="M 0,0 L 14,-6 L 14,-9 L 0,-3 Z" fill="rgba(0,0,0,0.22)" />
      <path d="M 0,0 L -14,-6 L -14,-9 L 0,-3 Z" fill="rgba(255,255,255,0.04)" />

      {/* Center edge light */}
      <line x1={0} y1={0} x2={0} y2={-42} stroke="rgba(255,255,255,0.06)" strokeWidth={0.6} />

      {/* Top edge highlight */}
      <path d="M -14,-48 L 0,-54 L 14,-48 L 14,-49 L 0,-55 L -14,-49 Z"
        fill="rgba(255,255,255,0.09)" />
    </g>
  );
}
