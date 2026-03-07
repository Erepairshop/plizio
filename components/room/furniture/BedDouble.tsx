"use client";
import type { FurnitureProps } from "./types";

// LEFT face = FRONT (long side of bed frame)
// RIGHT face = SIDE (wide side of bed frame — 2 tiles deep)
// When RoomRenderer mirrors with scale(-1,1), they swap automatically → correct for both rotations
// 2×2 tile bed: ~48w × 48d isometric

export default function BedDouble({ x, y }: FurnitureProps) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <defs>
        {/* Frame wood — right face (dark side) */}
        <linearGradient id="bdR" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#5A3E22" />
          <stop offset="40%" stopColor="#4A3018" />
          <stop offset="100%" stopColor="#3C2610" />
        </linearGradient>
        {/* Frame wood — left face (front, lighter) */}
        <linearGradient id="bdL" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#A07855" />
          <stop offset="50%" stopColor="#8B6545" />
          <stop offset="100%" stopColor="#7A5838" />
        </linearGradient>
        {/* Frame wood — top rail */}
        <linearGradient id="bdT" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C49A6C" />
          <stop offset="40%" stopColor="#B08858" />
          <stop offset="100%" stopColor="#9A7444" />
        </linearGradient>
        {/* Mattress top */}
        <linearGradient id="bdMat" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F5F0E6" />
          <stop offset="100%" stopColor="#E8E0D0" />
        </linearGradient>
        {/* Duvet */}
        <linearGradient id="bdDuv" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#9ABAE0" />
          <stop offset="50%" stopColor="#7CA8D4" />
          <stop offset="100%" stopColor="#6090C0" />
        </linearGradient>
        {/* Pillow */}
        <linearGradient id="bdPil" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#F0EBE0" />
        </linearGradient>
        {/* Headboard top */}
        <linearGradient id="bdHT" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C49A6C" />
          <stop offset="100%" stopColor="#A88050" />
        </linearGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx={0} cy={-4} rx={32} ry={12} fill="rgba(0,0,0,0.18)" />

      {/* ============================================ */}
      {/* BED FRAME — isometric box, 2×2 tiles         */}
      {/* 2×2 means equal width along both iso axes    */}
      {/* Left axis (front): 2 tiles → 24px each       */}
      {/* Right axis (side): 2 tiles → 24px each       */}
      {/* Frame height ~14px                            */}
      {/* ============================================ */}

      {/* === RIGHT face — SIDE (wide, 2 tiles deep) === */}
      <path d="M 0,0 L 24,-12 L 24,-24 L 0,-12 Z" fill="url(#bdR)" />
      {/* Wood grain */}
      <line x1={6} y1={-2.5} x2={6} y2={-14.5} stroke="rgba(255,255,255,0.04)" strokeWidth={0.7} />
      <line x1={12} y1={-5.5} x2={12} y2={-17.5} stroke="rgba(255,255,255,0.03)" strokeWidth={0.7} />
      <line x1={18} y1={-8} x2={18} y2={-20} stroke="rgba(255,255,255,0.04)" strokeWidth={0.7} />
      {/* Side panel inset */}
      <path d="M 2,-7.5 L 22,-17.5 L 22,-22 L 2,-12 Z"
        fill="rgba(0,0,0,0.06)" stroke="rgba(0,0,0,0.12)" strokeWidth={0.5} />

      {/* === LEFT face — FRONT (long side, 2 tiles) === */}
      <path d="M 0,0 L -24,-12 L -24,-24 L 0,-12 Z" fill="url(#bdL)" />
      {/* Wood grain */}
      <line x1={-6} y1={-2.5} x2={-6} y2={-14.5} stroke="rgba(255,255,255,0.05)" strokeWidth={0.7} />
      <line x1={-12} y1={-5.5} x2={-12} y2={-17.5} stroke="rgba(255,255,255,0.04)" strokeWidth={0.7} />
      <line x1={-18} y1={-8} x2={-18} y2={-20} stroke="rgba(255,255,255,0.05)" strokeWidth={0.7} />
      {/* Frame panel inset */}
      <path d="M -2,-7.5 L -22,-17.5 L -22,-22 L -2,-12 Z"
        fill="rgba(0,0,0,0.06)" stroke="rgba(0,0,0,0.12)" strokeWidth={0.5} />

      {/* === Top face of frame rail (border around mattress) === */}
      <path d="M 0,-12 L 24,-24 L 0,-36 L -24,-24 Z" fill="url(#bdT)" />

      {/* ============================================ */}
      {/* MATTRESS — inset inside frame                */}
      {/* ============================================ */}
      <path d="M 0,-14 L 22,-25 L 0,-36 L -22,-25 Z" fill="url(#bdMat)" />
      {/* Mattress front edge (left drape) */}
      <path d="M 0,-14 L -22,-25 L -22,-23 L 0,-12 Z" fill="#E0D8C8" />
      {/* Mattress side edge (right drape) */}
      <path d="M 0,-14 L 22,-25 L 22,-23 L 0,-12 Z" fill="#D0C8B8" />

      {/* ============================================ */}
      {/* PILLOWS — two side by side near headboard    */}
      {/* Headboard is at the back (top of diamond)    */}
      {/* ============================================ */}

      {/* Left pillow (closer to left face) */}
      <path d="M -10,-24 L -2,-28 L -10,-32 L -18,-28 Z" fill="url(#bdPil)" />
      <path d="M -10,-24 L -18,-28 L -18,-27 L -10,-23 Z" fill="#E8E2D8" />
      <path d="M -10,-24 L -2,-28 L -2,-27 L -10,-23 Z" fill="#DDD6CC" />
      {/* Pillow stitch */}
      <line x1={-13} y1={-26.5} x2={-7} y2={-29.5} stroke="rgba(180,170,155,0.4)" strokeWidth={0.5} />

      {/* Right pillow (closer to right face) */}
      <path d="M 2,-28 L 10,-32 L 2,-36 L -6,-32 Z" fill="url(#bdPil)" />
      <path d="M 2,-28 L -6,-32 L -6,-31 L 2,-27 Z" fill="#E8E2D8" />
      <path d="M 2,-28 L 10,-32 L 10,-31 L 2,-27 Z" fill="#DDD6CC" />
      {/* Pillow stitch */}
      <line x1={-1} y1={-30.5} x2={5} y2={-33.5} stroke="rgba(180,170,155,0.4)" strokeWidth={0.5} />

      {/* ============================================ */}
      {/* DUVET — covers ~60% of mattress (foot area)  */}
      {/* ============================================ */}
      {/* Duvet top face — front portion of mattress */}
      <path d="M 0,-14 L 22,-25 L 8,-32 L -14,-21 Z" fill="url(#bdDuv)" />
      {/* Duvet left drape (hangs over front/left edge) */}
      <path d="M 0,-14 L -14,-21 L -14,-18 L 0,-11 Z" fill="#5A88B8" />
      {/* Duvet right drape (hangs over side/right edge) */}
      <path d="M 0,-14 L 22,-25 L 22,-22.5 L 0,-11.5 Z" fill="#4A78A8" />
      {/* Duvet fold line (where duvet meets mattress) */}
      <line x1={-8} y1={-18.5} x2={14} y2={-29.5} stroke="rgba(255,255,255,0.12)" strokeWidth={0.7} />
      {/* Duvet highlight */}
      <path d="M 2,-16 L 12,-21 L 4,-25 L -6,-20 Z" fill="rgba(255,255,255,0.08)" />
      {/* Duvet quilting lines */}
      <line x1={6} y1={-17} x2={-2} y2={-21} stroke="rgba(255,255,255,0.1)" strokeWidth={0.4} />
      <line x1={14} y1={-22} x2={6} y2={-26} stroke="rgba(255,255,255,0.1)" strokeWidth={0.4} />
      <line x1={-4} y1={-16} x2={-12} y2={-20} stroke="rgba(255,255,255,0.1)" strokeWidth={0.4} />
      {/* Horizontal quilting */}
      <line x1={-2} y1={-15.5} x2={18} y2={-25.5} stroke="rgba(255,255,255,0.08)" strokeWidth={0.4} />

      {/* ============================================ */}
      {/* HEADBOARD — taller section at the back       */}
      {/* Back edge of the diamond (between back-left  */}
      {/* and back-right corners)                      */}
      {/* ============================================ */}
      {/* Headboard left face (back-left → top) */}
      <path d="M -24,-24 L -24,-34 L 0,-46 L 0,-36 Z" fill="url(#bdL)" />
      {/* Headboard panel insets (two decorative panels) */}
      <path d="M -22,-25.5 L -22,-32 L -12,-37.5 L -12,-31 Z"
        fill="rgba(0,0,0,0.08)" stroke="rgba(0,0,0,0.15)" strokeWidth={0.5} />
      <path d="M -10,-32 L -10,-38.5 L -2,-42.5 L -2,-36 Z"
        fill="rgba(0,0,0,0.08)" stroke="rgba(0,0,0,0.15)" strokeWidth={0.5} />
      {/* Wood grain on headboard */}
      <line x1={-16} y1={-28} x2={-16} y2={-36} stroke="rgba(255,255,255,0.04)" strokeWidth={0.6} />
      <line x1={-6} y1={-34} x2={-6} y2={-42} stroke="rgba(255,255,255,0.04)" strokeWidth={0.6} />

      {/* Headboard right face (back-right → top) */}
      <path d="M 24,-24 L 24,-34 L 0,-46 L 0,-36 Z" fill="url(#bdR)" />
      {/* Right headboard panel */}
      <path d="M 22,-25.5 L 22,-32 L 12,-37.5 L 12,-31 Z"
        fill="rgba(0,0,0,0.06)" stroke="rgba(0,0,0,0.1)" strokeWidth={0.5} />
      <path d="M 10,-32 L 10,-38.5 L 2,-42.5 L 2,-36 Z"
        fill="rgba(0,0,0,0.06)" stroke="rgba(0,0,0,0.1)" strokeWidth={0.5} />

      {/* Headboard top face */}
      <path d="M 0,-46 L 24,-34 L 0,-38 L -24,-34 Z" fill="url(#bdHT)" />
      {/* Headboard top highlight */}
      <path d="M 0,-46 L 8,-42 L 0,-40 L -8,-42 Z" fill="rgba(255,255,255,0.12)" />

      {/* ============================================ */}
      {/* FOOTBOARD — shorter section at front         */}
      {/* Front edge of diamond                        */}
      {/* ============================================ */}
      {/* Footboard left face */}
      <path d="M -24,-24 L -24,-28 L 0,-16 L 0,-12 Z" fill="url(#bdL)" />
      {/* Footboard right face */}
      <path d="M 24,-24 L 24,-28 L 0,-16 L 0,-12 Z" fill="url(#bdR)" />
      {/* Footboard top */}
      <path d="M -24,-28 L 0,-40 L 24,-28 L 0,-16 Z" fill="url(#bdHT)" />

      {/* ============================================ */}
      {/* BASE MOLDING                                 */}
      {/* ============================================ */}
      <path d="M 0,0 L 24,-12 L 24,-14 L 0,-2 Z" fill="rgba(0,0,0,0.2)" />
      <path d="M 0,0 L -24,-12 L -24,-14 L 0,-2 Z" fill="rgba(255,255,255,0.04)" />

      {/* Top edge highlight on headboard */}
      <path d="M -24,-34 L 0,-46 L 24,-34 L 24,-35 L 0,-47 L -24,-35 Z"
        fill="rgba(255,255,255,0.08)" />

      {/* Center vertical edge light */}
      <line x1={0} y1={0} x2={0} y2={-12} stroke="rgba(255,255,255,0.06)" strokeWidth={0.6} />
    </g>
  );
}
