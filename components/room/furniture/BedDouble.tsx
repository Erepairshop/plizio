"use client";
import type { FurnitureProps } from "./types";

export default function BedDouble({ x, y }: FurnitureProps) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <defs>
        <linearGradient id="dbFrame" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C8A882" />
          <stop offset="100%" stopColor="#A07850" />
        </linearGradient>
        <linearGradient id="dbMattress" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F5F0E8" />
          <stop offset="100%" stopColor="#E8DFC8" />
        </linearGradient>
        <linearGradient id="dbDuvet" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8FA8D8" />
          <stop offset="100%" stopColor="#6B88C0" />
        </linearGradient>
        <linearGradient id="dbHeadboard" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#B8916A" />
          <stop offset="50%" stopColor="#D4A87A" />
          <stop offset="100%" stopColor="#A07850" />
        </linearGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx={0} cy={4} rx={44} ry={8} fill="rgba(0,0,0,0.12)" style={{ filter: "blur(5px)" }} />

      {/* Headboard */}
      <rect x={-38} y={-62} width={76} height={22} rx={3} fill="url(#dbHeadboard)" />
      <rect x={-32} y={-58} width={30} height={14} rx={2} fill="rgba(255,255,255,0.08)" />
      <rect x={2} y={-58} width={30} height={14} rx={2} fill="rgba(255,255,255,0.08)" />
      {/* Headboard side */}
      <path d="M -38,-62 L -42,-58 L -42,-38 L -38,-40 Z" fill="#8B6040" />
      <path d="M 38,-62 L 42,-58 L 42,-38 L 38,-40 Z" fill="#7A5035" />
      {/* Headboard top */}
      <path d="M -38,-62 L -42,-58 L 42,-58 L 38,-62 Z" fill="#E0B880" />

      {/* Bed frame */}
      <rect x={-38} y={-40} width={76} height={44} rx={2} fill="url(#dbFrame)" />
      {/* Frame top face */}
      <path d="M -38,-40 L -42,-36 L 42,-36 L 38,-40 Z" fill="#DEB878" />
      {/* Frame left face */}
      <path d="M -38,-40 L -42,-36 L -42,8 L -38,4 Z" fill="#8B6040" />
      {/* Frame right face */}
      <path d="M 38,-40 L 42,-36 L 42,8 L 38,4 Z" fill="#7A5035" />

      {/* Mattress */}
      <rect x={-36} y={-38} width={72} height={40} rx={2} fill="url(#dbMattress)" />
      <rect x={-36} y={-38} width={72} height={40} rx={2} fill="none" stroke="rgba(180,160,120,0.4)" strokeWidth={0.8} />

      {/* Center divider line */}
      <line x1={0} y1={-38} x2={0} y2={2} stroke="rgba(180,160,120,0.3)" strokeWidth={0.6} strokeDasharray="3,2" />

      {/* Duvet */}
      <rect x={-34} y={-20} width={68} height={22} rx={3} fill="url(#dbDuvet)" />
      {/* Duvet fold */}
      <rect x={-34} y={-20} width={68} height={5} rx={2} fill="rgba(255,255,255,0.18)" />
      {/* Duvet stitching */}
      <rect x={-31} y={-17} width={62} height={16} rx={2} fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth={0.6} strokeDasharray="3,2" />
      {/* Duvet center seam */}
      <line x1={0} y1={-20} x2={0} y2={2} stroke="rgba(255,255,255,0.15)" strokeWidth={0.6} />

      {/* Pillow left */}
      <rect x={-33} y={-36} width={30} height={16} rx={4} fill="#FDFAF4" />
      <rect x={-31} y={-34} width={26} height={12} rx={3} fill="none" stroke="rgba(180,170,150,0.4)" strokeWidth={0.6} />
      <rect x={-33} y={-36} width={30} height={5} rx={3} fill="rgba(255,255,255,0.5)" />

      {/* Pillow right */}
      <rect x={3} y={-36} width={30} height={16} rx={4} fill="#FDFAF4" />
      <rect x={5} y={-34} width={26} height={12} rx={3} fill="none" stroke="rgba(180,170,150,0.4)" strokeWidth={0.6} />
      <rect x={3} y={-36} width={30} height={5} rx={3} fill="rgba(255,255,255,0.5)" />
    </g>
  );
}
