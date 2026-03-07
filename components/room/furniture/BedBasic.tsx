"use client";
import type { FurnitureProps } from "./types";

export default function BedBasic({ x, y }: FurnitureProps) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <defs>
        <linearGradient id="bedFrame" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C8A882" />
          <stop offset="100%" stopColor="#A07850" />
        </linearGradient>
        <linearGradient id="mattress" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F5F0E8" />
          <stop offset="100%" stopColor="#E8DFC8" />
        </linearGradient>
        <linearGradient id="duvet" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8FA8D8" />
          <stop offset="100%" stopColor="#6B88C0" />
        </linearGradient>
        <linearGradient id="headboard" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#B8916A" />
          <stop offset="50%" stopColor="#D4A87A" />
          <stop offset="100%" stopColor="#A07850" />
        </linearGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx={0} cy={4} rx={32} ry={7} fill="rgba(0,0,0,0.12)" style={{ filter: "blur(4px)" }} />

      {/* Headboard */}
      <rect x={-26} y={-62} width={52} height={22} rx={3} fill="url(#headboard)" />
      <rect x={-22} y={-58} width={44} height={14} rx={2} fill="rgba(255,255,255,0.08)" />
      {/* Headboard side */}
      <path d="M -26,-62 L -30,-58 L -30,-38 L -26,-40 Z" fill="#8B6040" />
      <path d="M 26,-62 L 30,-58 L 30,-38 L 26,-40 Z" fill="#7A5035" />
      {/* Headboard top */}
      <path d="M -26,-62 L -30,-58 L 30,-58 L 26,-62 Z" fill="#E0B880" />

      {/* Bed frame */}
      <rect x={-26} y={-40} width={52} height={44} rx={2} fill="url(#bedFrame)" />
      {/* Frame top face */}
      <path d="M -26,-40 L -30,-36 L 30,-36 L 26,-40 Z" fill="#DEB878" />
      {/* Frame left face */}
      <path d="M -26,-40 L -30,-36 L -30,8 L -26,4 Z" fill="#8B6040" />
      {/* Frame right face */}
      <path d="M 26,-40 L 30,-36 L 30,8 L 26,4 Z" fill="#7A5035" />

      {/* Mattress */}
      <rect x={-24} y={-38} width={48} height={40} rx={2} fill="url(#mattress)" />
      <rect x={-24} y={-38} width={48} height={40} rx={2} fill="none" stroke="rgba(180,160,120,0.4)" strokeWidth={0.8} />

      {/* Duvet */}
      <rect x={-22} y={-20} width={44} height={22} rx={3} fill="url(#duvet)" />
      {/* Duvet fold */}
      <rect x={-22} y={-20} width={44} height={5} rx={2} fill="rgba(255,255,255,0.18)" />
      {/* Duvet stitching */}
      <rect x={-19} y={-17} width={38} height={16} rx={2} fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth={0.6} strokeDasharray="3,2" />

      {/* Pillow */}
      <rect x={-20} y={-36} width={38} height={16} rx={4} fill="#FDFAF4" />
      <rect x={-18} y={-34} width={34} height={12} rx={3} fill="none" stroke="rgba(180,170,150,0.4)" strokeWidth={0.6} />
      <rect x={-20} y={-36} width={38} height={5} rx={3} fill="rgba(255,255,255,0.5)" />
    </g>
  );
}
