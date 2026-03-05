"use client";

import React from "react";

/*  ─── Izometrikus bútor SVG-k ───
 *
 *  Minden bútor egy React komponens ami <g> elemet ad vissza.
 *  Props: x, y (SVG pixel pozíció, a gridToScreen-ből jön)
 *
 *  BŐVÍTÉSHEZ:
 *  1. Másold le egy meglévő bútor komponenst
 *  2. Módosítsd a path-okat (felső lap, bal oldal, jobb oldal)
 *  3. Tartsd meg az izometrikus perspektívát
 *  4. Add hozzá a FURNITURE_COMPONENTS map-hez alul
 *
 *  IZOMETRIKUS SZABÁLYOK:
 *  - Felső lap: rombusz (lapos teteje a bútornak)
 *  - Bal oldal: parallelogramma (balra néz, világosabb)
 *  - Jobb oldal: parallelogramma (jobbra néz, sötétebb)
 *  - Árnyék: ellipszis a bútor alatt, rgba(0,0,0,0.15)
 *  - Highlight: halvány fehér a felső lapon
 */

interface FurnitureProps {
  x: number;
  y: number;
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 1. BED BASIC — Egyszerű ágy (2×1)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export function BedBasic({ x, y }: FurnitureProps) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      {/* Árnyék */}
      <ellipse cx={0} cy={8} rx={38} ry={10} fill="rgba(0,0,0,0.12)" />

      {/* Ágy keret - jobb oldal (sötétebb fa) */}
      <path d="M 0,0 L 24,-12 L 24,0 L 0,12 Z" fill="#6B4E35" />
      {/* Ágy keret - bal oldal (világosabb fa) */}
      <path d="M 0,0 L -24,-12 L -24,0 L 0,12 Z" fill="#8B6B4A" />

      {/* Matrac felső lap */}
      <path d="M 0,-20 L 24,-32 L 46,-20 L 22,-8 Z" fill="#8888CC" />
      <path d="M 0,-20 L -24,-32 L -2,-44 L 22,-32 Z" fill="#8888CC" />
      {/* Matrac teljes felső */}
      <path d="M 0,-20 L 22,-32 L 46,-20 L 24,-8 Z" fill="#9999DD" opacity={0.6} />

      {/* Matrac - bal oldal */}
      <path d="M -24,-8 L -24,-14 L 0,-26 L 0,-20 Z" fill="#7070AA" />
      {/* Matrac - jobb oldal */}
      <path d="M 24,-8 L 24,-14 L 0,-26 L 0,-20 Z" fill="#6060AA" />

      {/* Matrac felső lap (fő rombusz) */}
      <path d="M 0,-26 L 24,-14 L 0,-2 L -24,-14 Z" fill="#9999DD" />

      {/* Párna */}
      <ellipse cx={-8} cy={-18} rx={7} ry={4} fill="#CCCCEE"
        transform="rotate(-25, -8, -18)" />
      <ellipse cx={8} cy={-18} rx={7} ry={4} fill="#BBBBEE"
        transform="rotate(-25, 8, -18)" />

      {/* Takaró (alsó fél) */}
      <path d="M -18,-10 L 0,-1 L 18,-10 L 0,-19 Z" fill="#7777BB" opacity={0.4} />

      {/* Fejrész (felfelé álló lap) */}
      <path d="M -22,-14 L -22,-24 L 0,-36 L 0,-26 Z" fill="#5A3E28" />
      <path d="M 0,-36 L 22,-24 L 22,-14 L 0,-26 Z" fill="#4A3020" />
      {/* Fejrész teteje */}
      <path d="M -22,-24 L 0,-36 L 22,-24 L 0,-12 Z" fill="#7B5E42" />

      {/* Matrac fény highlight */}
      <path d="M 0,-26 L 12,-20 L 0,-14 L -12,-20 Z" fill="rgba(255,255,255,0.08)" />
    </g>
  );
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 2. NIGHTSTAND — Éjjeliszekrény (1×1)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export function Nightstand({ x, y }: FurnitureProps) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      {/* Árnyék */}
      <ellipse cx={0} cy={4} rx={16} ry={6} fill="rgba(0,0,0,0.12)" />

      {/* Jobb oldal (sötét fa) */}
      <path d="M 0,0 L 12,-6 L 12,-22 L 0,-16 Z" fill="#5A3E28" />
      {/* Bal oldal (világos fa) */}
      <path d="M 0,0 L -12,-6 L -12,-22 L 0,-16 Z" fill="#7B5E42" />
      {/* Felső lap */}
      <path d="M 0,-28 L 12,-22 L 0,-16 L -12,-22 Z" fill="#8B6E52" />

      {/* Fiók vonal */}
      <line x1={-10} y1={-14} x2={0} y2={-8} stroke="rgba(0,0,0,0.15)" strokeWidth={0.5} />
      <line x1={0} y1={-8} x2={10} y2={-14} stroke="rgba(0,0,0,0.15)" strokeWidth={0.5} />

      {/* Fiók gomb (kis kör) */}
      <circle cx={0} cy={-11} r={1.2} fill="#C4A882" />

      {/* Felső lap highlight */}
      <path d="M 0,-28 L 6,-25 L 0,-22 L -6,-25 Z" fill="rgba(255,255,255,0.1)" />
    </g>
  );
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 3. LAMP FLOOR — Állólámpa (1×1)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export function LampFloor({ x, y }: FurnitureProps) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      {/* Fénykör a padlón */}
      <ellipse cx={0} cy={6} rx={28} ry={14} fill="rgba(255,220,100,0.08)" />

      {/* Árnyék */}
      <ellipse cx={0} cy={4} rx={8} ry={3} fill="rgba(0,0,0,0.10)" />

      {/* Talp */}
      <ellipse cx={0} cy={0} rx={6} ry={3} fill="#4A4A4A" />
      <ellipse cx={0} cy={-1} rx={5} ry={2.5} fill="#5A5A5A" />

      {/* Rúd */}
      <rect x={-1.2} y={-42} width={2.4} height={42} fill="#666" rx={1} />

      {/* Lámpaernyő - bal oldal */}
      <path d="M -10,-38 L 0,-35 L 0,-48 L -8,-46 Z" fill="#E8C98A" />
      {/* Lámpaernyő - jobb oldal */}
      <path d="M 10,-38 L 0,-35 L 0,-48 L 8,-46 Z" fill="#D4B574" />
      {/* Lámpaernyő - teteje */}
      <ellipse cx={0} cy={-47} rx={8} ry={3} fill="#F0D89A" />

      {/* Fény glow (izzó) */}
      <circle cx={0} cy={-40} r={4} fill="rgba(255,220,100,0.25)" />
      <circle cx={0} cy={-40} r={8} fill="rgba(255,220,100,0.06)" />

      {/* Lámpaernyő belső fény */}
      <path d="M -6,-38 L 0,-36 L 6,-38 L 0,-42 Z" fill="rgba(255,240,180,0.3)" />
    </g>
  );
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 4. WARDROBE — Szekrény (1×2)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export function Wardrobe({ x, y }: FurnitureProps) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      {/* Árnyék */}
      <ellipse cx={0} cy={6} rx={20} ry={8} fill="rgba(0,0,0,0.12)" />

      {/* Jobb oldal (sötét) */}
      <path d="M 14,-6 L 14,-48 L 0,-42 L 0,0 Z" fill="#4A3020" />
      {/* Bal oldal (világos) */}
      <path d="M -14,-6 L -14,-48 L 0,-42 L 0,0 Z" fill="#6B4E35" />
      {/* Felső lap */}
      <path d="M -14,-48 L 0,-54 L 14,-48 L 0,-42 Z" fill="#7B5E42" />

      {/* Ajtó vonalak (két ajtós) - bal oldal */}
      <line x1={-12} y1={-8} x2={-1} y2={-3} stroke="rgba(0,0,0,0.12)" strokeWidth={0.5} />
      <line x1={-12} y1={-44} x2={-1} y2={-39} stroke="rgba(0,0,0,0.12)" strokeWidth={0.5} />
      <line x1={-1} y1={-3} x2={-1} y2={-39} stroke="rgba(0,0,0,0.12)" strokeWidth={0.5} />

      {/* Ajtó vonalak - jobb oldal */}
      <line x1={12} y1={-8} x2={1} y2={-3} stroke="rgba(0,0,0,0.12)" strokeWidth={0.5} />
      <line x1={12} y1={-44} x2={1} y2={-39} stroke="rgba(0,0,0,0.12)" strokeWidth={0.5} />
      <line x1={1} y1={-3} x2={1} y2={-39} stroke="rgba(0,0,0,0.12)" strokeWidth={0.5} />

      {/* Ajtó gombok */}
      <circle cx={-3} cy={-21} r={1} fill="#C4A882" />
      <circle cx={3} cy={-21} r={1} fill="#C4A882" />

      {/* Felső highlight */}
      <path d="M -7,-51 L 0,-54 L 7,-51 L 0,-48 Z" fill="rgba(255,255,255,0.06)" />
    </g>
  );
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 5. COUCH — Kanapé (2×1)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export function Couch({ x, y }: FurnitureProps) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      {/* Árnyék */}
      <ellipse cx={0} cy={6} rx={34} ry={10} fill="rgba(0,0,0,0.12)" />

      {/* Alap test - jobb oldal */}
      <path d="M 28,-10 L 28,-20 L 0,-6 L 0,4 Z" fill="#6B3040" />
      {/* Alap test - bal oldal */}
      <path d="M -28,-10 L -28,-20 L 0,-6 L 0,4 Z" fill="#8B4050" />
      {/* Ülés felső lap */}
      <path d="M 0,-16 L 28,-28 L 0,-40 L -28,-28 Z" fill="#A85060" />

      {/* Háttámla - emelkedő rész */}
      <path d="M -28,-28 L -28,-38 L 0,-50 L 0,-40 Z" fill="#7B3848" />
      <path d="M 0,-50 L 28,-38 L 28,-28 L 0,-40 Z" fill="#5B2838" />
      {/* Háttámla teteje */}
      <path d="M -28,-38 L 0,-50 L 28,-38 L 0,-26 Z" fill="#9B4858" />

      {/* Párna textúra (3 ülőpárna vonal) */}
      <line x1={-10} y1={-22} x2={-10} y2={-32} stroke="rgba(0,0,0,0.08)" strokeWidth={0.8} />
      <line x1={10} y1={-22} x2={10} y2={-32} stroke="rgba(0,0,0,0.08)" strokeWidth={0.8} />

      {/* Karfa - bal */}
      <path d="M -28,-28 L -34,-25 L -34,-35 L -28,-38 Z" fill="#7B3848" />
      <path d="M -34,-35 L -28,-38 L -22,-35 L -28,-32 Z" fill="#9B4858" />
      {/* Karfa - jobb */}
      <path d="M 28,-28 L 34,-25 L 34,-35 L 28,-38 Z" fill="#5B2838" />
      <path d="M 34,-35 L 28,-38 L 22,-35 L 28,-32 Z" fill="#9B4858" />

      {/* Ülés highlight */}
      <path d="M 0,-16 L 14,-23 L 0,-30 L -14,-23 Z" fill="rgba(255,255,255,0.06)" />

      {/* Kis díszpárna */}
      <ellipse cx={-14} cy={-30} rx={5} ry={3} fill="#CC8890"
        transform="rotate(-25, -14, -30)" />
    </g>
  );
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 6. TV STAND — TV szekrény + TV (2×1)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export function TvStand({ x, y }: FurnitureProps) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      {/* Árnyék */}
      <ellipse cx={0} cy={6} rx={30} ry={8} fill="rgba(0,0,0,0.12)" />

      {/* Szekrény test - jobb */}
      <path d="M 24,-4 L 24,-14 L 0,-2 L 0,8 Z" fill="#3A3A4A" />
      {/* Szekrény test - bal */}
      <path d="M -24,-4 L -24,-14 L 0,-2 L 0,8 Z" fill="#4A4A5A" />
      {/* Szekrény teteje */}
      <path d="M -24,-14 L 0,-26 L 24,-14 L 0,-2 Z" fill="#5A5A6A" />

      {/* TV képernyő - háttér (fekete) */}
      <path d="M -18,-18 L 0,-30 L 18,-18 L 0,-6 Z" fill="#111118" />
      {/* TV test - bal oldal */}
      <path d="M -18,-18 L -18,-42 L 0,-54 L 0,-30 Z" fill="#222230" />
      {/* TV test - jobb oldal */}
      <path d="M 18,-18 L 18,-42 L 0,-54 L 0,-30 Z" fill="#1A1A28" />
      {/* TV felső lap (vékony) */}
      <path d="M -18,-42 L 0,-54 L 18,-42 L 0,-30 Z" fill="#2A2A3A" />

      {/* Képernyő (világító!) */}
      <path d="M -15,-20 L 0,-28 L 15,-20 L 0,-12 Z" fill="#1A2A4A" />
      {/* Képernyő glow */}
      <path d="M -15,-20 L 0,-28 L 15,-20 L 0,-12 Z" fill="rgba(60,120,200,0.15)" />
      {/* Képernyő fénycsík (tartalom illúzió) */}
      <path d="M -10,-22 L 0,-27 L 4,-25 L -6,-20 Z" fill="rgba(100,160,255,0.12)" />
      <path d="M 2,-16 L 10,-20 L 12,-19 L 4,-15 Z" fill="rgba(100,200,150,0.08)" />

      {/* TV kék fénykör a padlón */}
      <ellipse cx={0} cy={8} rx={20} ry={8} fill="rgba(60,120,200,0.04)" />

      {/* Szekrény fiók vonal */}
      <line x1={-20} y1={-9} x2={0} y2={2} stroke="rgba(255,255,255,0.05)" strokeWidth={0.5} />
      <line x1={0} y1={2} x2={20} y2={-9} stroke="rgba(255,255,255,0.05)" strokeWidth={0.5} />
    </g>
  );
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 7. BOOKSHELF — Könyvespolc (1×2)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export function Bookshelf({ x, y }: FurnitureProps) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      {/* Árnyék */}
      <ellipse cx={0} cy={6} rx={18} ry={7} fill="rgba(0,0,0,0.12)" />

      {/* Keret - jobb oldal */}
      <path d="M 12,-6 L 12,-52 L 0,-46 L 0,0 Z" fill="#5A4030" />
      {/* Keret - bal oldal */}
      <path d="M -12,-6 L -12,-52 L 0,-46 L 0,0 Z" fill="#7A6040" />
      {/* Felső lap */}
      <path d="M -12,-52 L 0,-58 L 12,-52 L 0,-46 Z" fill="#8A7050" />

      {/* Polc vonalak (3 polc) */}
      {[-14, -26, -38].map((py, i) => (
        <g key={i}>
          <path d={`M -10,${py} L 0,${py - 6} L 10,${py} L 0,${py + 6} Z`} fill="#8A7050" opacity={0.5} />
        </g>
      ))}

      {/* Könyvek — színes kis parallelogrammák */}
      {/* Felső polc */}
      <path d="M -7,-40 L -7,-46 L -4,-48 L -4,-42 Z" fill="#CC4444" />
      <path d="M -4,-41 L -4,-48 L -1,-50 L -1,-43 Z" fill="#4488CC" />
      <path d="M -1,-42 L -1,-49 L 2,-51 L 2,-44 Z" fill="#44AA44" />
      <path d="M 2,-43 L 2,-48 L 5,-50 L 5,-45 Z" fill="#CC8844" />

      {/* Középső polc */}
      <path d="M -8,-28 L -8,-34 L -5,-36 L -5,-30 Z" fill="#8844CC" />
      <path d="M -5,-29 L -5,-35 L -2,-37 L -2,-31 Z" fill="#CC4488" />
      <path d="M -2,-30 L -2,-36 L 1,-38 L 1,-32 Z" fill="#44CCAA" />
      <path d="M 1,-31 L 1,-35 L 4,-37 L 4,-33 Z" fill="#CCAA44" />
      <path d="M 4,-32 L 4,-36 L 7,-38 L 7,-34 Z" fill="#4444CC" />

      {/* Alsó polc */}
      <path d="M -7,-16 L -7,-22 L -4,-24 L -4,-18 Z" fill="#AA6644" />
      <path d="M -4,-17 L -4,-23 L 0,-25 L 0,-19 Z" fill="#44AA88" />
      <path d="M 0,-18 L 0,-22 L 3,-24 L 3,-20 Z" fill="#CC6688" />

      {/* Highlight */}
      <path d="M -6,-55 L 0,-58 L 6,-55 L 0,-52 Z" fill="rgba(255,255,255,0.06)" />
    </g>
  );
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 8. PLANT BIG — Nagy növény (1×1)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export function PlantBig({ x, y }: FurnitureProps) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      {/* Árnyék */}
      <ellipse cx={0} cy={4} rx={12} ry={5} fill="rgba(0,0,0,0.10)" />

      {/* Cserép - jobb oldal */}
      <path d="M 0,0 L 8,-4 L 8,-12 L 0,-8 Z" fill="#A0603A" />
      {/* Cserép - bal oldal */}
      <path d="M 0,0 L -8,-4 L -8,-12 L 0,-8 Z" fill="#C07848" />
      {/* Cserép teteje (föld) */}
      <path d="M -8,-12 L 0,-16 L 8,-12 L 0,-8 Z" fill="#5A3A20" />
      {/* Cserép perem */}
      <path d="M -9,-12 L 0,-17 L 9,-12 L 0,-7 Z" fill="#B86840" opacity={0.5} />

      {/* Szár */}
      <line x1={0} y1={-14} x2={0} y2={-28} stroke="#3A7A2A" strokeWidth={2} />
      <line x1={0} y1={-20} x2={-4} y2={-26} stroke="#3A7A2A" strokeWidth={1.5} />
      <line x1={0} y1={-18} x2={5} y2={-24} stroke="#3A7A2A" strokeWidth={1.5} />

      {/* Levelek (organikus ellipszisek) */}
      <ellipse cx={0} cy={-32} rx={7} ry={4} fill="#4AAA3A" transform="rotate(-15, 0, -32)" />
      <ellipse cx={-6} cy={-28} rx={6} ry={3.5} fill="#3A9A2A" transform="rotate(-40, -6, -28)" />
      <ellipse cx={7} cy={-27} rx={6} ry={3} fill="#5ABB4A" transform="rotate(30, 7, -27)" />
      <ellipse cx={-3} cy={-35} rx={5} ry={3} fill="#4AAA3A" transform="rotate(-10, -3, -35)" />
      <ellipse cx={4} cy={-34} rx={5} ry={2.5} fill="#3A9A2A" transform="rotate(20, 4, -34)" />

      {/* Levél highlight */}
      <ellipse cx={1} cy={-33} rx={3} ry={1.5} fill="rgba(255,255,255,0.08)" transform="rotate(-15, 1, -33)" />
    </g>
  );
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 9. FRIDGE — Hűtőszekrény (1×1)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export function Fridge({ x, y }: FurnitureProps) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      {/* Árnyék */}
      <ellipse cx={0} cy={6} rx={16} ry={6} fill="rgba(0,0,0,0.12)" />

      {/* Test - jobb oldal */}
      <path d="M 12,-6 L 12,-54 L 0,-48 L 0,0 Z" fill="#C0C8D0" />
      {/* Test - bal oldal */}
      <path d="M -12,-6 L -12,-54 L 0,-48 L 0,0 Z" fill="#D8E0E8" />
      {/* Felső lap */}
      <path d="M -12,-54 L 0,-60 L 12,-54 L 0,-48 Z" fill="#E0E8F0" />

      {/* Felső ajtó (fagyasztó) - vonal */}
      <line x1={-10} y1={-36} x2={0} y2={-30} stroke="rgba(0,0,0,0.08)" strokeWidth={0.5} />
      <line x1={0} y1={-30} x2={10} y2={-36} stroke="rgba(0,0,0,0.08)" strokeWidth={0.5} />

      {/* Fogantyúk - felső (bal oldalon látható) */}
      <rect x={-10} y={-44} width={1.5} height={6} rx={0.5} fill="#A0A8B0"
        transform="rotate(0)" />
      {/* Fogantyú - alsó */}
      <rect x={-10} y={-26} width={1.5} height={6} rx={0.5} fill="#A0A8B0" />

      {/* Fény csík (fém tükröződés) */}
      <path d="M -8,-10 L -8,-50 L -5,-48 L -5,-8 Z" fill="rgba(255,255,255,0.06)" />

      {/* Felső highlight */}
      <path d="M -6,-57 L 0,-60 L 6,-57 L 0,-54 Z" fill="rgba(255,255,255,0.08)" />
    </g>
  );
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 10. DESK — Íróasztal (2×1)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export function Desk({ x, y }: FurnitureProps) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      {/* Árnyék */}
      <ellipse cx={0} cy={6} rx={30} ry={8} fill="rgba(0,0,0,0.10)" />

      {/* Lábak (4 db, vékony) */}
      <line x1={-20} y1={-6} x2={-20} y2={2} stroke="#6B5040" strokeWidth={2} />
      <line x1={20} y1={-6} x2={20} y2={2} stroke="#5B4030" strokeWidth={2} />
      <line x1={0} y1={6} x2={0} y2={-2} stroke="#5B4030" strokeWidth={2} />
      <line x1={-2} y1={-14} x2={-2} y2={-6} stroke="#6B5040" strokeWidth={2} />

      {/* Asztallap - jobb oldal (vékony) */}
      <path d="M 24,-10 L 24,-14 L 0,-2 L 0,2 Z" fill="#6B5040" />
      {/* Asztallap - bal oldal */}
      <path d="M -24,-10 L -24,-14 L 0,-2 L 0,2 Z" fill="#8B7050" />
      {/* Asztallap felső */}
      <path d="M -24,-14 L 0,-26 L 24,-14 L 0,-2 Z" fill="#A08060" />

      {/* Monitor (kis laptop illúzió) */}
      {/* Képernyő */}
      <path d="M -8,-18 L 0,-22 L 8,-18 L 0,-14 Z" fill="#111118" />
      <path d="M -8,-18 L -8,-28 L 0,-32 L 0,-22 Z" fill="#1A1A28" />
      <path d="M 8,-18 L 8,-28 L 0,-32 L 0,-22 Z" fill="#151520" />
      {/* Képernyő fény */}
      <path d="M -6,-19 L 0,-23 L 6,-19 L 0,-15 Z" fill="rgba(80,140,220,0.12)" />

      {/* Billentyűzet (apró rombusz) */}
      <path d="M 4,-8 L 12,-12 L 16,-10 L 8,-6 Z" fill="#3A3A44" />

      {/* Asztallap highlight */}
      <path d="M 0,-26 L 12,-20 L 0,-14 L -12,-20 Z" fill="rgba(255,255,255,0.04)" />
    </g>
  );
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// FURNITURE COMPONENT REGISTRY
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Új bútort ide kell regisztrálni!
export const FURNITURE_COMPONENTS: Record<
  string,
  React.FC<FurnitureProps>
> = {
  bed_basic: BedBasic,
  nightstand: Nightstand,
  lamp_floor: LampFloor,
  wardrobe: Wardrobe,
  couch: Couch,
  tv_stand: TvStand,
  bookshelf: Bookshelf,
  plant_big: PlantBig,
  fridge: Fridge,
  desk: Desk,
};
