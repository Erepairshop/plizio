"use client";
import type { FurnitureProps } from "./types";

// LEFT face = FRONT (side of bed frame, visible mattress/duvet edge)
// RIGHT face = SIDE (headboard/footboard ends visible)
// When RoomRenderer mirrors with scale(-1,1), they swap automatically → correct for both rotations
// 2×1 tile bed: ~48w isometric, ~24d depth

export default function BedBasic({ x, y }: FurnitureProps) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <defs>
        {/* Frame wood — right face (dark side) */}
        <linearGradient id="bbR" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#5A3E22" />
          <stop offset="40%" stopColor="#4A3018" />
          <stop offset="100%" stopColor="#3C2610" />
        </linearGradient>
        {/* Frame wood — left face (front, lighter) */}
        <linearGradient id="bbL" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#A07855" />
          <stop offset="50%" stopColor="#8B6545" />
          <stop offset="100%" stopColor="#7A5838" />
        </linearGradient>
        {/* Frame wood — top rail */}
        <linearGradient id="bbT" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C49A6C" />
          <stop offset="40%" stopColor="#B08858" />
          <stop offset="100%" stopColor="#9A7444" />
        </linearGradient>
        {/* Mattress top */}
        <linearGradient id="bbMat" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F5F0E6" />
          <stop offset="100%" stopColor="#E8E0D0" />
        </linearGradient>
        {/* Duvet */}
        <linearGradient id="bbDuv" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#9ABAE0" />
          <stop offset="50%" stopColor="#7CA8D4" />
          <stop offset="100%" stopColor="#6090C0" />
        </linearGradient>
        {/* Pillow */}
        <linearGradient id="bbPil" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#F0EBE0" />
        </linearGradient>
        {/* Headboard top */}
        <linearGradient id="bbHT" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C49A6C" />
          <stop offset="100%" stopColor="#A88050" />
        </linearGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx={0} cy={-4} rx={28} ry={8} fill="rgba(0,0,0,0.18)" />

      {/* ============================================ */}
      {/* BED FRAME — isometric box, 2×1 tiles         */}
      {/* Frame height ~14px, total bed top ~18px       */}
      {/* ============================================ */}

      {/* === RIGHT face — SIDE (headboard end visible) === */}
      <path d="M 0,0 L 12,-6 L 12,-18 L 0,-12 Z" fill="url(#bbR)" />
      {/* Wood grain */}
      <line x1={4} y1={-1.5} x2={4} y2={-13.5} stroke="rgba(255,255,255,0.04)" strokeWidth={0.7} />
      <line x1={8} y1={-3} x2={8} y2={-15} stroke="rgba(255,255,255,0.03)" strokeWidth={0.7} />

      {/* === LEFT face — FRONT (long side of bed) === */}
      <path d="M 0,0 L -24,-12 L -24,-24 L 0,-12 Z" fill="url(#bbL)" />
      {/* Wood grain */}
      <line x1={-8} y1={-3.5} x2={-8} y2={-15.5} stroke="rgba(255,255,255,0.05)" strokeWidth={0.7} />
      <line x1={-16} y1={-7.5} x2={-16} y2={-19.5} stroke="rgba(255,255,255,0.04)" strokeWidth={0.7} />
      {/* Frame panel inset */}
      <path d="M -2,-12.5 L -22,-22.5 L -22,-17 L -2,-7 Z"
        fill="rgba(0,0,0,0.06)" stroke="rgba(0,0,0,0.12)" strokeWidth={0.5} />

      {/* === Top face of frame rail (narrow border around mattress) === */}
      <path d="M 0,-12 L 12,-18 L -12,-30 L -24,-24 Z" fill="url(#bbT)" />

      {/* ============================================ */}
      {/* MATTRESS — sits inside the frame, slightly inset */}
      {/* ============================================ */}
      {/* Mattress top face (rhombus, inset 2px from frame edge) */}
      <path d="M 0,-14 L 10,-19 L -12,-30 L -22,-25 Z" fill="url(#bbMat)" />
      {/* Mattress front edge (thin visible strip on left) */}
      <path d="M 0,-14 L -22,-25 L -22,-23 L 0,-12 Z" fill="#E0D8C8" />
      {/* Mattress side edge (thin visible strip on right) */}
      <path d="M 0,-14 L 10,-19 L 10,-17.5 L 0,-12.5 Z" fill="#D0C8B8" />

      {/* ============================================ */}
      {/* PILLOW — near headboard (back-right area)    */}
      {/* ============================================ */}
      {/* Pillow is a small raised rhombus near the headboard corner */}
      <path d="M -2,-19 L 5,-22.5 L -5,-27.5 L -12,-24 Z" fill="url(#bbPil)" />
      {/* Pillow front edge */}
      <path d="M -2,-19 L -12,-24 L -12,-23 L -2,-18 Z" fill="#E8E2D8" />
      {/* Pillow side edge */}
      <path d="M -2,-19 L 5,-22.5 L 5,-21.5 L -2,-18 Z" fill="#DDD6CC" />
      {/* Pillow stitch line */}
      <line x1={-3.5} y1={-21} x2={1.5} y2={-23.5} stroke="rgba(180,170,155,0.4)" strokeWidth={0.5} />

      {/* ============================================ */}
      {/* DUVET — covers ~60% of mattress (foot end)   */}
      {/* ============================================ */}
      {/* Duvet top face */}
      <path d="M 0,-14 L 10,-19 L -4,-26 L -14,-21 Z" fill="url(#bbDuv)" />
      {/* Duvet left drape (hangs over front edge) */}
      <path d="M 0,-14 L -14,-21 L -14,-18 L 0,-11 Z" fill="#5A88B8" />
      {/* Duvet right drape (hangs over side edge) */}
      <path d="M 0,-14 L 10,-19 L 10,-16.5 L 0,-11.5 Z" fill="#4A78A8" />
      {/* Duvet fold line */}
      <line x1={-2} y1={-15.5} x2={-10} y2={-19.5} stroke="rgba(255,255,255,0.15)" strokeWidth={0.6} />
      {/* Duvet highlight */}
      <path d="M -1,-15 L 5,-18 L -2,-21.5 L -8,-18.5 Z" fill="rgba(255,255,255,0.08)" />
      {/* Duvet quilting lines */}
      <line x1={3} y1={-16.5} x2={-4} y2={-20} stroke="rgba(255,255,255,0.1)" strokeWidth={0.4} />
      <line x1={-5} y1={-16} x2={-12} y2={-19.5} stroke="rgba(255,255,255,0.1)" strokeWidth={0.4} />

      {/* ============================================ */}
      {/* HEADBOARD — taller section at back-right     */}
      {/* ============================================ */}
      {/* Headboard right face */}
      <path d="M 12,-18 L 12,-30 L 0,-24 L 0,-12 Z" fill="url(#bbR)" />
      {/* Headboard panel inset */}
      <path d="M 10,-19.5 L 10,-28 L 2,-24 L 2,-15.5 Z"
        fill="rgba(0,0,0,0.08)" stroke="rgba(0,0,0,0.15)" strokeWidth={0.5} />
      {/* Headboard left face (narrow, back of bed) */}
      <path d="M -12,-30 L -12,-36 L 0,-30 L 0,-24 Z" fill="url(#bbL)" />
      {/* Headboard top face */}
      <path d="M -12,-36 L 0,-30 L 12,-30 L 0,-36 Z" fill="url(#bbHT)" />
      {/* Headboard top highlight */}
      <path d="M -4,-35 L 0,-33 L 4,-35 L 0,-37 Z" fill="rgba(255,255,255,0.12)" />

      {/* ============================================ */}
      {/* FOOTBOARD — shorter section at front-left    */}
      {/* ============================================ */}
      {/* Footboard left face */}
      <path d="M -24,-24 L -24,-28 L -12,-34 L -12,-30 Z" fill="url(#bbL)" />
      {/* Footboard right face (not visible from this angle, skip) */}
      {/* Footboard top */}
      <path d="M -24,-28 L -12,-34 L 0,-28 L -12,-22 Z" fill="url(#bbHT)" />

      {/* ============================================ */}
      {/* BASE MOLDING                                 */}
      {/* ============================================ */}
      <path d="M 0,0 L 12,-6 L 12,-8 L 0,-2 Z" fill="rgba(0,0,0,0.2)" />
      <path d="M 0,0 L -24,-12 L -24,-14 L 0,-2 Z" fill="rgba(255,255,255,0.04)" />

      {/* Top edge highlight on headboard */}
      <path d="M -12,-36 L 0,-30 L 12,-30 L 12,-31 L 0,-31 L -12,-37 Z"
        fill="rgba(255,255,255,0.08)" />

      {/* Center vertical edge light */}
      <line x1={0} y1={0} x2={0} y2={-12} stroke="rgba(255,255,255,0.06)" strokeWidth={0.6} />
    </g>
  );
}
