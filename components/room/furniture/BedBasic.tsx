"use client";
import type { FurnitureProps } from "./types";

export default function BedBasic({ x, y }: FurnitureProps) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <ellipse cx={0} cy={-4} rx={38} ry={10} fill="rgba(0,0,0,0.12)" />
      <path d="M 0,0 L 24,-12 L 24,0 L 0,12 Z" fill="#6B4E35" />
      <path d="M 0,0 L -24,-12 L -24,0 L 0,12 Z" fill="#8B6B4A" />
      <path d="M 0,-20 L 24,-32 L 46,-20 L 22,-8 Z" fill="#8888CC" />
      <path d="M 0,-20 L -24,-32 L -2,-44 L 22,-32 Z" fill="#8888CC" />
      <path d="M 0,-20 L 22,-32 L 46,-20 L 24,-8 Z" fill="#9999DD" opacity={0.6} />
      <path d="M -24,-8 L -24,-14 L 0,-26 L 0,-20 Z" fill="#7070AA" />
      <path d="M 24,-8 L 24,-14 L 0,-26 L 0,-20 Z" fill="#6060AA" />
      <path d="M 0,-26 L 24,-14 L 0,-2 L -24,-14 Z" fill="#9999DD" />
      <ellipse cx={-8} cy={-18} rx={7} ry={4} fill="#CCCCEE" transform="rotate(-25, -8, -18)" />
      <ellipse cx={8} cy={-18} rx={7} ry={4} fill="#BBBBEE" transform="rotate(-25, 8, -18)" />
      <path d="M -18,-10 L 0,-1 L 18,-10 L 0,-19 Z" fill="#7777BB" opacity={0.4} />
      <path d="M -22,-14 L -22,-24 L 0,-36 L 0,-26 Z" fill="#5A3E28" />
      <path d="M 0,-36 L 22,-24 L 22,-14 L 0,-26 Z" fill="#4A3020" />
      <path d="M -22,-24 L 0,-36 L 22,-24 L 0,-12 Z" fill="#7B5E42" />
      <path d="M 0,-26 L 12,-20 L 0,-14 L -12,-20 Z" fill="rgba(255,255,255,0.08)" />
    </g>
  );
}
