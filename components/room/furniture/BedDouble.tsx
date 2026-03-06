"use client";
import type { FurnitureProps } from "./types";

export default function BedDouble({ x, y }: FurnitureProps) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <defs>
        <linearGradient id="dbHeadboardFront" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="#6B4C30" />
          <stop offset="30%"  stopColor="#8B6040" />
          <stop offset="60%"  stopColor="#7A5235" />
          <stop offset="100%" stopColor="#5C3D22" />
        </linearGradient>
        <linearGradient id="dbHeadboardTop" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="#A07850" />
          <stop offset="100%" stopColor="#8B6040" />
        </linearGradient>
        <linearGradient id="dbFrameLeft" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="#4A2E18" />
          <stop offset="100%" stopColor="#5C3D22" />
        </linearGradient>
        <linearGradient id="dbFrameRight" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="#7B5535" />
          <stop offset="100%" stopColor="#6B4828" />
        </linearGradient>
        <linearGradient id="dbMattressTop" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="#F2E8D5" />
          <stop offset="100%" stopColor="#E0D0B5" />
        </linearGradient>
        <linearGradient id="dbBlanketGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#7B8EC8" />
          <stop offset="50%"  stopColor="#6B7EB8" />
          <stop offset="100%" stopColor="#5A6DA8" />
        </linearGradient>
        <linearGradient id="dbBlanketFold" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="#8B9ED8" />
          <stop offset="100%" stopColor="#7B8EC8" />
        </linearGradient>
        <linearGradient id="dbPillow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#FDFAF4" />
          <stop offset="100%" stopColor="#EDE5D5" />
        </linearGradient>
      </defs>

      {/* Floor shadow */}
      <ellipse cx={0} cy={2} rx={42} ry={12} fill="rgba(0,0,0,0.22)" style={{ filter: "blur(5px)" }} />

      {/* Frame base left */}
      <path d="M -36,-10 L -36,-24 L 0,-6 L 0,8 Z" fill="url(#dbFrameLeft)" />
      {/* Frame base right */}
      <path d="M 36,-10 L 36,-24 L 0,-6 L 0,8 Z" fill="url(#dbFrameRight)" />
      {/* Frame top face */}
      <path d="M -36,-24 L 0,-38 L 36,-24 L 0,-10 Z" fill="#9B7B55" />

      {/* Mattress left side */}
      <path d="M -36,-24 L -36,-34 L 0,-20 L 0,-10 Z" fill="#C8B89A" />
      {/* Mattress right side */}
      <path d="M 36,-24 L 36,-34 L 0,-20 L 0,-10 Z" fill="#D8C8AA" />
      {/* Mattress top */}
      <path d="M 0,-20 L 36,-36 L 0,-52 L -36,-36 Z" fill="url(#dbMattressTop)" />
      {/* Mattress seams */}
      <line x1={-18} y1={-48} x2={18} y2={-28} stroke="rgba(160,140,110,0.4)" strokeWidth={0.6} />
      <line x1={-26} y1={-43} x2={26} y2={-24} stroke="rgba(160,140,110,0.25)" strokeWidth={0.4} />

      {/* Blanket main body */}
      <path d="M 0,-20 L 34,-35 L 12,-50 L -22,-35 Z" fill="url(#dbBlanketGrad)" />
      {/* Blanket fold highlight */}
      <path d="M -22,-35 L 12,-50 L 14,-48 L -20,-33 Z" fill="url(#dbBlanketFold)" opacity={0.9} />
      {/* Wrinkle lines */}
      <line x1={-10} y1={-36} x2={8} y2={-25} stroke="rgba(60,60,140,0.2)" strokeWidth={0.7} />
      <line x1={4} y1={-42} x2={20} y2={-32} stroke="rgba(60,60,140,0.15)" strokeWidth={0.5} />
      {/* Blanket stitching */}
      <path d="M 0,-21 L 33,-36 L 12,-50 L -21,-35 Z" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth={0.6} strokeDasharray="2,2" />

      {/* Pillow left — shadow */}
      <path d="M -20,-37 L -6,-45 L 0,-42 L -14,-34 Z" fill="rgba(0,0,0,0.1)" style={{ filter: "blur(2px)" }} />
      {/* Pillow left */}
      <path d="M -22,-38 L -8,-46 L -2,-43 L -16,-35 Z" fill="url(#dbPillow)" />
      <path d="M -22,-38 L -22,-36 L -16,-33 L -16,-35 Z" fill="#DDD5C5" />
      <path d="M -20,-40 L -10,-45 L -8,-44 L -18,-39 Z" fill="rgba(255,255,255,0.4)" />

      {/* Pillow right — shadow */}
      <path d="M 2,-37 L 16,-45 L 22,-42 L 8,-34 Z" fill="rgba(0,0,0,0.1)" style={{ filter: "blur(2px)" }} />
      {/* Pillow right */}
      <path d="M 0,-38 L 14,-46 L 20,-43 L 6,-35 Z" fill="url(#dbPillow)" />
      <path d="M 0,-38 L 0,-36 L 6,-33 L 6,-35 Z" fill="#DDD5C5" />
      <path d="M 2,-40 L 12,-45 L 14,-44 L 4,-39 Z" fill="rgba(255,255,255,0.4)" />

      {/* Headboard left side */}
      <path d="M -36,-34 L -36,-64 L -32,-62 L -32,-36 Z" fill="url(#dbFrameLeft)" />
      {/* Headboard front face */}
      <path d="M -36,-64 L 0,-80 L 0,-50 L -36,-34 Z" fill="url(#dbHeadboardFront)" />
      {/* Headboard right side */}
      <path d="M 0,-50 L 4,-48 L 4,-78 L 0,-80 Z" fill="#4A2E18" />
      {/* Headboard top */}
      <path d="M -36,-64 L 0,-80 L 4,-78 L -32,-62 Z" fill="url(#dbHeadboardTop)" />

      {/* Headboard decorative inset panel */}
      <path d="M -28,-40 L -8,-50 L -8,-70 L -28,-60 Z" fill="rgba(0,0,0,0.1)" />
      <path d="M -27,-41 L -9,-50.5 L -9,-69 L -27,-59 Z" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth={0.7} />

      {/* Headboard highlight */}
      <path d="M -32,-63 L -12,-73 L -10,-71 L -30,-61 Z" fill="rgba(255,255,255,0.07)" />
      {/* Wood grain lines */}
      <line x1={-30} y1={-37} x2={-2} y2={-52} stroke="rgba(80,40,10,0.15)" strokeWidth={0.5} />
      <line x1={-30} y1={-45} x2={-2} y2={-60} stroke="rgba(80,40,10,0.1)"  strokeWidth={0.5} />
      <line x1={-30} y1={-53} x2={-2} y2={-68} stroke="rgba(80,40,10,0.12)" strokeWidth={0.5} />
    </g>
  );
}
