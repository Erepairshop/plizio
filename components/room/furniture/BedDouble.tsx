"use client";
import type { FurnitureProps } from "./types";

export default function BedDouble({ x, y }: FurnitureProps) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <ellipse cx={0} cy={10} rx={42} ry={14} fill="rgba(0,0,0,0.12)" />
      <path d="M 0,4 L 32,-12 L 32,-4 L 0,12 Z" fill="#5A3E28" />
      <path d="M 0,4 L -32,-12 L -32,-4 L 0,12 Z" fill="#7B5E42" />
      <path d="M 0,-22 L 32,-38 L 0,-54 L -32,-38 Z" fill="#9999DD" />
      <path d="M -32,-30 L -32,-38 L 0,-54 L 0,-46 Z" fill="#7070AA" />
      <path d="M 32,-30 L 32,-38 L 0,-54 L 0,-46 Z" fill="#6060AA" />
      <path d="M 0,-46 L 32,-30 L 0,-14 L -32,-30 Z" fill="#AAAAEE" />
      <ellipse cx={-12} cy={-38} rx={8} ry={4.5} fill="#CCCCEE" transform="rotate(-25,-12,-38)" />
      <ellipse cx={4} cy={-38} rx={8} ry={4.5} fill="#BBBBEE" transform="rotate(-25,4,-38)" />
      <path d="M -24,-22 L 0,-10 L 24,-22 L 0,-34 Z" fill="#7777BB" opacity={0.35} />
      <path d="M -32,-38 L -32,-52 L 0,-68 L 0,-54 Z" fill="#5A3E28" />
      <path d="M 0,-68 L 32,-52 L 32,-38 L 0,-54 Z" fill="#4A3020" />
      <path d="M -32,-52 L 0,-68 L 32,-52 L 0,-36 Z" fill="#7B5E42" />
      <path d="M 0,-46 L 16,-38 L 0,-30 L -16,-38 Z" fill="rgba(255,255,255,0.07)" />
    </g>
  );
}
