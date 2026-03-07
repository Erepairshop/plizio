"use client";
import type { FurnitureProps } from "./types";

// LEFT face = FRONT (drawer + handle)
// RIGHT face = SIDE (plain wood)
// When RoomRenderer mirrors with scale(-1,1), they swap automatically → correct for both rotations

export default function Nightstand({ x, y }: FurnitureProps) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <defs>
        <linearGradient id="nsR" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3A2510" />
          <stop offset="40%" stopColor="#2E1C0C" />
          <stop offset="100%" stopColor="#261508" />
        </linearGradient>
        <linearGradient id="nsL" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#7A5835" />
          <stop offset="50%" stopColor="#6A4C2A" />
          <stop offset="100%" stopColor="#5C4020" />
        </linearGradient>
        <linearGradient id="nsT" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C8986A" />
          <stop offset="40%" stopColor="#B4844E" />
          <stop offset="100%" stopColor="#9A7040" />
        </linearGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx={0} cy={-4} rx={16} ry={6} fill="rgba(0,0,0,0.18)" />

      {/* === RIGHT face — SIDE (plain wood, no drawer) === */}
      <path d="M 0,0 L 12,-6 L 12,-22 L 0,-16 Z" fill="url(#nsR)" />
      {/* Wood grain only */}
      <line x1={4} y1={-1.5} x2={4} y2={-17.5} stroke="rgba(255,255,255,0.04)" strokeWidth={0.7} />
      <line x1={8} y1={-3} x2={8} y2={-19} stroke="rgba(255,255,255,0.03)" strokeWidth={0.7} />
      {/* Subtle side panel (no handle) */}
      <path d="M 1.5,-7 L 10,-11.5 L 10,-19 L 1.5,-14.5 Z"
        fill="rgba(0,0,0,0.06)" stroke="rgba(0,0,0,0.12)" strokeWidth={0.5} />

      {/* === LEFT face — FRONT (drawer + handle) === */}
      <path d="M 0,0 L -12,-6 L -12,-22 L 0,-16 Z" fill="url(#nsL)" />
      {/* Wood grain */}
      <line x1={-4} y1={-1.5} x2={-4} y2={-17.5} stroke="rgba(255,255,255,0.05)" strokeWidth={0.7} />
      <line x1={-8} y1={-3} x2={-8} y2={-19} stroke="rgba(255,255,255,0.04}" strokeWidth={0.7} />

      {/* Drawer divider horizontal line */}
      <line x1={-12} y1={-14} x2={0} y2={-8} stroke="rgba(0,0,0,0.28)" strokeWidth={0.8} />

      {/* Drawer panel inset (top section) */}
      <path d="M -1.5,-9.5 L -10.5,-14 L -10.5,-20.5 L -1.5,-16 Z" fill="rgba(0,0,0,0.1)" />
      <path d="M -1.5,-9.5 L -10.5,-14 L -10.5,-20.5 L -1.5,-16 Z"
        fill="none" stroke="rgba(0,0,0,0.2)" strokeWidth={0.6} />

      {/* Drawer handle */}
      <ellipse cx={-6} cy={-14} rx={2.5} ry={1.1} fill="#D4AC6A" />
      <ellipse cx={-6} cy={-14} rx={2.5} ry={1.1} fill="none" stroke="#A07840" strokeWidth={0.6} />
      {/* Handle shine */}
      <ellipse cx={-6.5} cy={-14.3} rx={1} ry={0.5} fill="rgba(255,255,255,0.45)" />

      {/* Bottom section of front face (below drawer) */}
      <path d="M -1.5,-2.5 L -10.5,-7 L -10.5,-12.5 L -1.5,-8 Z"
        fill="rgba(0,0,0,0.05)" stroke="rgba(0,0,0,0.12)" strokeWidth={0.5} />

      {/* Top face */}
      <path d="M 0,-28 L 12,-22 L 0,-16 L -12,-22 Z" fill="url(#nsT)" />
      {/* Top highlight shine */}
      <path d="M 0,-28 L 6,-25 L 0,-22 L -6,-25 Z" fill="rgba(255,255,255,0.12)" />

      {/* Base molding */}
      <path d="M 0,0 L 12,-6 L 12,-8 L 0,-2 Z" fill="rgba(0,0,0,0.2)" />
      <path d="M 0,0 L -12,-6 L -12,-8 L 0,-2 Z" fill="rgba(255,255,255,0.04)" />

      {/* Top edge highlight */}
      <path d="M -12,-22 L 0,-28 L 12,-22 L 12,-23 L 0,-29 L -12,-23 Z"
        fill="rgba(255,255,255,0.08)" />
    </g>
  );
}
