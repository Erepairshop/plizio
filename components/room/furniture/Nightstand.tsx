"use client";
import type { FurnitureProps } from "./types";

export default function Nightstand({ x, y }: FurnitureProps) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <defs>
        {/* Wood grain gradients */}
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

      {/* Right face — darker */}
      <path d="M 0,0 L 12,-6 L 12,-22 L 0,-16 Z" fill="url(#nsR)" />
      {/* Right face wood grain lines */}
      <line x1={4} y1={-1.5} x2={4} y2={-17.5} stroke="rgba(255,255,255,0.04)" strokeWidth={0.7} />
      <line x1={8} y1={-3} x2={8} y2={-19} stroke="rgba(255,255,255,0.03)" strokeWidth={0.7} />

      {/* Left face — medium */}
      <path d="M 0,0 L -12,-6 L -12,-22 L 0,-16 Z" fill="url(#nsL)" />
      {/* Left face wood grain lines */}
      <line x1={-4} y1={-1.5} x2={-4} y2={-17.5} stroke="rgba(255,255,255,0.05)" strokeWidth={0.7} />
      <line x1={-8} y1={-3} x2={-8} y2={-19} stroke="rgba(255,255,255,0.04)" strokeWidth={0.7} />

      {/* Top face */}
      <path d="M 0,-28 L 12,-22 L 0,-16 L -12,-22 Z" fill="url(#nsT)" />
      {/* Top highlight shine */}
      <path d="M 0,-28 L 6,-25 L 0,-22 L -6,-25 Z" fill="rgba(255,255,255,0.12)" />

      {/* === Drawer detail on left face === */}
      {/* Drawer divider horizontal line */}
      <line x1={-12} y1={-14} x2={0} y2={-8} stroke="rgba(0,0,0,0.28)" strokeWidth={0.8} />
      {/* Drawer panel inset shadow (top drawer) */}
      <path d="M -2,-9.5 L -10,-13.5 L -10,-19.5 L -2,-15.5 Z" fill="rgba(0,0,0,0.1)" />
      {/* Drawer panel border */}
      <path d="M -2,-9.5 L -10,-13.5 L -10,-19.5 L -2,-15.5 Z"
        fill="none" stroke="rgba(0,0,0,0.2)" strokeWidth={0.6} />
      {/* Drawer handle */}
      <ellipse cx={-6} cy={-14.5} rx={2.2} ry={1} fill="#D4AC6A" />
      <ellipse cx={-6} cy={-14.5} rx={2.2} ry={1} fill="none" stroke="#A07840" strokeWidth={0.6} />

      {/* === Drawer detail on right face === */}
      <line x1={0} y1={-8} x2={12} y2={-14} stroke="rgba(0,0,0,0.22)" strokeWidth={0.8} />
      <path d="M 2,-9.5 L 10,-13.5 L 10,-19.5 L 2,-15.5 Z" fill="rgba(0,0,0,0.07)" />
      <path d="M 2,-9.5 L 10,-13.5 L 10,-19.5 L 2,-15.5 Z"
        fill="none" stroke="rgba(0,0,0,0.18)" strokeWidth={0.6} />
      <ellipse cx={6} cy={-14.5} rx={2.2} ry={1} fill="#D4AC6A" />
      <ellipse cx={6} cy={-14.5} rx={2.2} ry={1} fill="none" stroke="#A07840" strokeWidth={0.6} />

      {/* Base molding */}
      <path d="M 0,0 L 12,-6 L 12,-8 L 0,-2 Z" fill="rgba(0,0,0,0.2)" />
      <path d="M 0,0 L -12,-6 L -12,-8 L 0,-2 Z" fill="rgba(255,255,255,0.04)" />

      {/* Top edge highlight */}
      <path d="M -12,-22 L 0,-28 L 12,-22 L 12,-23 L 0,-29 L -12,-23 Z"
        fill="rgba(255,255,255,0.08)" />
    </g>
  );
}
