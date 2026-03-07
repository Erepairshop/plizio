"use client";
import type { FurnitureProps } from "./types";

export default function CoffeeTable({ x, y }: FurnitureProps) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <defs>
        <linearGradient id="ctTop" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#B89870" />
          <stop offset="100%" stopColor="#A08060" />
        </linearGradient>
        <linearGradient id="ctLeft" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8B7050" />
          <stop offset="100%" stopColor="#7B6040" />
        </linearGradient>
        <linearGradient id="ctRight" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#6B5040" />
          <stop offset="100%" stopColor="#5B4030" />
        </linearGradient>
      </defs>
      {/* Shadow */}
      <ellipse cx={0} cy={-4} rx={26} ry={7} fill="rgba(0,0,0,0.10)" />
      {/* Legs */}
      <line x1={-16} y1={-8} x2={-16} y2={0} stroke="#7B6040" strokeWidth={2} />
      <line x1={16} y1={-8} x2={16} y2={0} stroke="#5B4030" strokeWidth={2} />
      <line x1={0} y1={2} x2={0} y2={-4} stroke="#6B5040" strokeWidth={2} />
      <line x1={-2} y1={-14} x2={-2} y2={-6} stroke="#7B6040" strokeWidth={2} />
      {/* Tabletop — left face (thin) */}
      <path d="M -22,-6 L -22,-10 L 0,2 L 0,6 Z" fill="url(#ctLeft)" />
      {/* Tabletop — right face (thin) */}
      <path d="M 22,-6 L 22,-10 L 0,2 L 0,6 Z" fill="url(#ctRight)" />
      {/* Tabletop — top face */}
      <path d="M -22,-10 L 0,-22 L 22,-10 L 0,2 Z" fill="url(#ctTop)" />
    </g>
  );
}
