"use client";
import type { FurnitureProps } from "./types";

export default function KitchenTable({ x, y }: FurnitureProps) {
  const tw = 24, th = 12, H = 28;
  const legH = 20;
  return (
    <g transform={`translate(${x}, ${y})`}>
      <defs>
        <linearGradient id="ktTop" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F0F0F8" />
          <stop offset="100%" stopColor="#E8E8F0" />
        </linearGradient>
        <linearGradient id="ktLeft" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D8D8E0" />
          <stop offset="100%" stopColor="#CCCCDA" />
        </linearGradient>
        <linearGradient id="ktRight" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#C4C4D0" />
          <stop offset="100%" stopColor="#B8B8C4" />
        </linearGradient>
      </defs>
      <ellipse cx={0} cy={-4} rx={30} ry={10} fill="rgba(0,0,0,0.10)" />
      {/* 4 legs */}
      <line x1={-16} y1={-4} x2={-16} y2={4} stroke="#C8C8D0" strokeWidth={2.5} />
      <line x1={16} y1={-4} x2={16} y2={4} stroke="#B8B8C4" strokeWidth={2.5} />
      <line x1={0} y1={8} x2={0} y2={0} stroke="#C0C0C8" strokeWidth={2.5} />
      <line x1={-1} y1={-12} x2={-1} y2={-4} stroke="#D0D0D8" strokeWidth={2.5} />
      {/* Thin slab: left face */}
      <path d={`M ${-tw},-8 L 0,4 L 0,8 L ${-tw},-4 Z`} fill="url(#ktLeft)" />
      {/* Thin slab: right face */}
      <path d={`M ${tw},-8 L 0,4 L 0,8 L ${tw},-4 Z`} fill="url(#ktRight)" />
      {/* Thin slab: top face */}
      <path d={`M 0,-20 L ${tw},-8 L 0,4 L ${-tw},-8 Z`} fill="url(#ktTop)" />
    </g>
  );
}
