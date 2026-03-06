"use client";
import type { FurnitureProps } from "./types";

export default function BedBasic({ x, y }: FurnitureProps) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <defs>
        {/* Wood grain gradient for headboard */}
        <linearGradient id="headboardFront" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="#6B4C30" />
          <stop offset="30%"  stopColor="#8B6040" />
          <stop offset="60%"  stopColor="#7A5235" />
          <stop offset="100%" stopColor="#5C3D22" />
        </linearGradient>
        <linearGradient id="headboardTop" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="#A07850" />
          <stop offset="100%" stopColor="#8B6040" />
        </linearGradient>
        <linearGradient id="frameLeft" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="#4A2E18" />
          <stop offset="100%" stopColor="#5C3D22" />
        </linearGradient>
        <linearGradient id="frameRight" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="#7B5535" />
          <stop offset="100%" stopColor="#6B4828" />
        </linearGradient>
        <linearGradient id="mattressTop" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="#F2E8D5" />
          <stop offset="100%" stopColor="#E0D0B5" />
        </linearGradient>
        <linearGradient id="blanketGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#7B8EC8" />
          <stop offset="50%"  stopColor="#6B7EB8" />
          <stop offset="100%" stopColor="#5A6DA8" />
        </linearGradient>
        <linearGradient id="blanketFold" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="#8B9ED8" />
          <stop offset="100%" stopColor="#7B8EC8" />
        </linearGradient>
        <linearGradient id="pillow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#FDFAF4" />
          <stop offset="100%" stopColor="#EDE5D5" />
        </linearGradient>
        {/* Soft drop shadow filter */}
        <filter id="bedShadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="rgba(0,0,0,0.25)" />
        </filter>
      </defs>

      {/* === FLOOR SHADOW === */}
      <ellipse
        cx={0} cy={2}
        rx={34} ry={10}
        fill="rgba(0,0,0,0.18)"
        style={{ filter: "blur(4px)" }}
      />

      {/* === BED FRAME BASE === */}
      {/* Left side panel */}
      <path
        d="M -28,-8 L -28,-20 L 0,-6 L 0,6 Z"
        fill="url(#frameLeft)"
      />
      {/* Right side panel */}
      <path
        d="M 28,-8 L 28,-20 L 0,-6 L 0,6 Z"
        fill="url(#frameRight)"
      />
      {/* Frame top face (very thin) */}
      <path
        d="M -28,-20 L 0,-32 L 28,-20 L 0,-8 Z"
        fill="#9B7B55"
      />

      {/* === MATTRESS === */}
      {/* Mattress left side */}
      <path
        d="M -28,-20 L -28,-30 L 0,-18 L 0,-8 Z"
        fill="#C8B89A"
      />
      {/* Mattress right side */}
      <path
        d="M 28,-20 L 28,-30 L 0,-18 L 0,-8 Z"
        fill="#D8C8AA"
      />
      {/* Mattress top */}
      <path
        d="M 0,-18 L 28,-30 L 0,-42 L -28,-30 Z"
        fill="url(#mattressTop)"
      />
      {/* Mattress subtle seam lines */}
      <line x1={-14} y1={-36} x2={14} y2={-24} stroke="rgba(160,140,110,0.4)" strokeWidth={0.6} />
      <line x1={-20} y1={-32} x2={20} y2={-20} stroke="rgba(160,140,110,0.25)" strokeWidth={0.4} />
      {/* Mattress border piping */}
      <path
        d="M 0,-18 L 28,-30 L 0,-42 L -28,-30 Z"
        fill="none"
        stroke="rgba(180,160,120,0.5)"
        strokeWidth={0.8}
      />

      {/* === BLANKET === */}
      {/* Blanket main body */}
      <path
        d="M 0,-18 L 26,-29 L 8,-40 L -18,-29 Z"
        fill="url(#blanketGrad)"
      />
      {/* Blanket top fold highlight */}
      <path
        d="M -18,-29 L 8,-40 L 10,-38 L -16,-27 Z"
        fill="url(#blanketFold)"
        opacity={0.9}
      />
      {/* Blanket subtle wrinkle lines */}
      <line x1={-8} y1={-30} x2={6} y2={-22} stroke="rgba(60,60,140,0.2)" strokeWidth={0.7} />
      <line x1={2} y1={-34} x2={14} y2={-27} stroke="rgba(60,60,140,0.15)" strokeWidth={0.5} />
      {/* Blanket stitching border */}
      <path
        d="M 0,-19 L 25,-30 L 8,-40 L -17,-29 Z"
        fill="none"
        stroke="rgba(255,255,255,0.2)"
        strokeWidth={0.6}
        strokeDasharray="2,2"
      />

      {/* === PILLOW === */}
      {/* Pillow shadow on mattress */}
      <path
        d="M -16,-34 L -2,-41 L 6,-37 L -8,-30 Z"
        fill="rgba(0,0,0,0.1)"
        transform="translate(2, 3)"
        style={{ filter: "blur(1.5px)" }}
      />
      {/* Pillow body */}
      <path
        d="M -18,-34 L -4,-42 L 4,-38 L -10,-30 Z"
        fill="url(#pillow)"
      />
      {/* Pillow left edge */}
      <path
        d="M -18,-34 L -18,-32 L -10,-28 L -10,-30 Z"
        fill="#DDD5C5"
      />
      {/* Pillow top highlight */}
      <path
        d="M -16,-36 L -6,-41 L -4,-40 L -14,-35 Z"
        fill="rgba(255,255,255,0.45)"
      />
      {/* Pillow seam */}
      <path
        d="M -7,-42 L 1,-38"
        stroke="rgba(180,170,150,0.5)"
        strokeWidth={0.6}
        strokeLinecap="round"
      />

      {/* === HEADBOARD === */}
      {/* Headboard left narrow side */}
      <path
        d="M -28,-30 L -28,-58 L -24,-56 L -24,-32 Z"
        fill="url(#frameLeft)"
      />
      {/* Headboard front face */}
      <path
        d="M -28,-58 L 0,-70 L 0,-42 L -28,-30 Z"
        fill="url(#headboardFront)"
      />
      {/* Headboard right narrow side */}
      <path
        d="M 0,-42 L 4,-40 L 4,-68 L 0,-70 Z"
        fill="#4A2E18"
      />
      {/* Headboard top face */}
      <path
        d="M -28,-58 L 0,-70 L 4,-68 L -24,-56 Z"
        fill="url(#headboardTop)"
      />

      {/* Headboard decorative panel inset */}
      <path
        d="M -22,-36 L -6,-44 L -6,-62 L -22,-54 Z"
        fill="rgba(0,0,0,0.08)"
      />
      <path
        d="M -21,-37 L -7,-44.5 L -7,-61 L -21,-53 Z"
        fill="none"
        stroke="rgba(255,255,255,0.06)"
        strokeWidth={0.7}
      />

      {/* Headboard highlight (light catching top-left) */}
      <path
        d="M -26,-57 L -10,-65 L -8,-63 L -24,-55 Z"
        fill="rgba(255,255,255,0.07)"
      />
      {/* Subtle wood grain lines on headboard */}
      <line x1={-22} y1={-33} x2={-2} y2={-44} stroke="rgba(80,40,10,0.15)" strokeWidth={0.5} />
      <line x1={-22} y1={-40} x2={-2} y2={-51} stroke="rgba(80,40,10,0.1)"  strokeWidth={0.5} />
      <line x1={-22} y1={-47} x2={-2} y2={-58} stroke="rgba(80,40,10,0.12)" strokeWidth={0.5} />
    </g>
  );
}
