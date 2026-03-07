"use client";
import type { FurnitureProps } from "./types";

export default function Desk({ x, y }: FurnitureProps) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <defs>
        <linearGradient id="dkTop" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#B89870" />
          <stop offset="100%" stopColor="#A08060" />
        </linearGradient>
        <linearGradient id="dkLeft" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8B7050" />
          <stop offset="100%" stopColor="#7B6040" />
        </linearGradient>
        <linearGradient id="dkRight" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#6B5040" />
          <stop offset="100%" stopColor="#5B4030" />
        </linearGradient>
      </defs>
      {/* Shadow */}
      <ellipse cx={0} cy={-4} rx={28} ry={8} fill="rgba(0,0,0,0.10)" />
      {/* Legs */}
      <line x1={-20} y1={-10} x2={-20} y2={0} stroke="#7B6040" strokeWidth={2} />
      <line x1={20} y1={-10} x2={20} y2={0} stroke="#5B4030" strokeWidth={2} />
      <line x1={0} y1={4} x2={0} y2={-4} stroke="#6B5040" strokeWidth={2} />
      <line x1={-2} y1={-18} x2={-2} y2={-8} stroke="#7B6040" strokeWidth={2} />
      {/* Tabletop — left face (thin) */}
      <path d="M -24,-10 L -24,-14 L 0,-2 L 0,2 Z" fill="url(#dkLeft)" />
      {/* Tabletop — right face (thin) */}
      <path d="M 24,-10 L 24,-14 L 0,-2 L 0,2 Z" fill="url(#dkRight)" />
      {/* Tabletop — top face */}
      <path d="M -24,-14 L 0,-26 L 24,-14 L 0,-2 Z" fill="url(#dkTop)" />
      {/* Small monitor — left face */}
      <path d="M -7,-18 L -7,-28 L 0,-32 L 0,-22 Z" fill="#1A1A28" />
      {/* Small monitor — right face */}
      <path d="M 7,-18 L 7,-28 L 0,-32 L 0,-22 Z" fill="#111118" />
      {/* Small monitor — top */}
      <path d="M -7,-28 L 0,-32 L 7,-28 L 0,-24 Z" fill="#2A2A3A" />
    </g>
  );
}
