"use client";
import type { FurnitureProps } from "./types";

export default function Bookshelf({ x, y }: FurnitureProps) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <ellipse cx={0} cy={0} rx={18} ry={7} fill="rgba(0,0,0,0.12)" />
      <path d="M 12,-6 L 12,-52 L 0,-46 L 0,0 Z" fill="#5A4030" />
      <path d="M -12,-6 L -12,-52 L 0,-46 L 0,0 Z" fill="#7A6040" />
      <path d="M -12,-52 L 0,-58 L 12,-52 L 0,-46 Z" fill="#8A7050" />
      {[-14, -26, -38].map((py, i) => (
        <path key={i} d={`M -10,${py} L 0,${py - 6} L 10,${py} L 0,${py + 6} Z`} fill="#8A7050" opacity={0.5} />
      ))}
      <path d="M -7,-40 L -7,-46 L -4,-48 L -4,-42 Z" fill="#CC4444" />
      <path d="M -4,-41 L -4,-48 L -1,-50 L -1,-43 Z" fill="#4488CC" />
      <path d="M -1,-42 L -1,-49 L 2,-51 L 2,-44 Z" fill="#44AA44" />
      <path d="M 2,-43 L 2,-48 L 5,-50 L 5,-45 Z" fill="#CC8844" />
      <path d="M -8,-28 L -8,-34 L -5,-36 L -5,-30 Z" fill="#8844CC" />
      <path d="M -5,-29 L -5,-35 L -2,-37 L -2,-31 Z" fill="#CC4488" />
      <path d="M -2,-30 L -2,-36 L 1,-38 L 1,-32 Z" fill="#44CCAA" />
      <path d="M 1,-31 L 1,-35 L 4,-37 L 4,-33 Z" fill="#CCAA44" />
      <path d="M 4,-32 L 4,-36 L 7,-38 L 7,-34 Z" fill="#4444CC" />
      <path d="M -7,-16 L -7,-22 L -4,-24 L -4,-18 Z" fill="#AA6644" />
      <path d="M -4,-17 L -4,-23 L 0,-25 L 0,-19 Z" fill="#44AA88" />
      <path d="M 0,-18 L 0,-22 L 3,-24 L 3,-20 Z" fill="#CC6688" />
      <path d="M -6,-55 L 0,-58 L 6,-55 L 0,-52 Z" fill="rgba(255,255,255,0.06)" />
    </g>
  );
}
