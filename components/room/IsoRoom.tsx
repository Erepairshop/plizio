"use client";

import React, { useMemo } from "react";

/*  ─── Izometrikus szoba shell ───
 *  Padló rács (rombusz pattern) + bal fal + jobb fal + ablak
 *  Koordináta rendszer:
 *    X tengely: jobbra-le (→↘)
 *    Y tengely: balra-le  (←↘)
 *
 *  BŐVÍTÉSHEZ:
 *    - Új szoba típus: adj hozzá a ROOM_THEMES-hez
 *    - Fal dekoráció: <WallDecor> komponens a falon belül
 */

// ─── Izometrikus konstansok ───
export const TILE_W = 48;
export const TILE_H = 24;

// Grid pozíció → SVG pixel konverzió
export function gridToScreen(
  gx: number,
  gy: number,
  originX: number,
  originY: number
) {
  return {
    x: originX + (gx - gy) * (TILE_W / 2),
    y: originY + (gx + gy) * (TILE_H / 2),
  };
}

// ─── Szoba témák ───
interface RoomTheme {
  floorColor1: string;
  floorColor2: string;
  wallLeft: string;
  wallRight: string;
  wallAccent: string;
  windowGlow: string;
  hasWalls: boolean;
}

const ROOM_THEMES: Record<string, RoomTheme> = {
  bedroom: {
    floorColor1: "#C4956A",
    floorColor2: "#A87D5A",
    wallLeft: "#2A1F3D",
    wallRight: "#1E1630",
    wallAccent: "#3D2E5A",
    windowGlow: "rgba(135,200,255,0.12)",
    hasWalls: true,
  },
  living: {
    floorColor1: "#8B6F4E",
    floorColor2: "#7A5F3E",
    wallLeft: "#3D1F2A",
    wallRight: "#2E1620",
    wallAccent: "#5A2E3D",
    windowGlow: "rgba(255,220,150,0.10)",
    hasWalls: true,
  },
  kitchen: {
    floorColor1: "#D4D4D4",
    floorColor2: "#BABABA",
    wallLeft: "#1F3D2A",
    wallRight: "#163020",
    wallAccent: "#2E5A3D",
    windowGlow: "rgba(180,255,200,0.10)",
    hasWalls: true,
  },
  bathroom: {
    floorColor1: "#7AAEC4",
    floorColor2: "#5A8EA4",
    wallLeft: "#1F2D3D",
    wallRight: "#162030",
    wallAccent: "#2E4A5A",
    windowGlow: "rgba(150,200,255,0.15)",
    hasWalls: true,
  },
  garden: {
    floorColor1: "#4A8B3A",
    floorColor2: "#3A7B2A",
    wallLeft: "",
    wallRight: "",
    wallAccent: "",
    windowGlow: "",
    hasWalls: false,
  },
};

// ─── Padló rombusz path ───
function tilePath(cx: number, cy: number) {
  const hw = TILE_W / 2;
  const hh = TILE_H / 2;
  return `M ${cx},${cy - hh} L ${cx + hw},${cy} L ${cx},${cy + hh} L ${cx - hw},${cy} Z`;
}

// ─── Props ───
interface IsoRoomProps {
  roomType?: string;
  gridW?: number;
  gridH?: number;
  /** Children rendered on top of the floor (furniture, etc.) */
  children?: React.ReactNode;
  /** Ablak fény intenzitás (0-1), nap/éjszaka ciklus */
  windowAlpha?: number;
}

export default function IsoRoom({
  roomType = "bedroom",
  gridW = 6,
  gridH = 6,
  children,
  windowAlpha = 0.12,
}: IsoRoomProps) {
  const theme = ROOM_THEMES[roomType] || ROOM_THEMES.bedroom;

  // SVG méret számítás
  const totalW = (gridW + gridH) * (TILE_W / 2) + 40;
  const wallHeight = 120;
  const floorHeight = (gridW + gridH) * (TILE_H / 2);
  const totalH = wallHeight + floorHeight + 20;
  const originX = gridH * (TILE_W / 2) + 20;
  const originY = wallHeight;

  // Padló csempék generálása
  const floorTiles = useMemo(() => {
    const tiles: { path: string; fill: string; gx: number; gy: number }[] = [];
    for (let gx = 0; gx < gridW; gx++) {
      for (let gy = 0; gy < gridH; gy++) {
        const { x, y } = gridToScreen(gx, gy, originX, originY);
        const isEven = (gx + gy) % 2 === 0;
        tiles.push({
          path: tilePath(x, y),
          fill: isEven ? theme.floorColor1 : theme.floorColor2,
          gx,
          gy,
        });
      }
    }
    return tiles;
  }, [gridW, gridH, originX, originY, theme.floorColor1, theme.floorColor2]);

  // Fal sarokpontok
  const topLeft = gridToScreen(0, 0, originX, originY);
  const bottomLeft = gridToScreen(0, gridH, originX, originY);
  const bottomRight = gridToScreen(gridW, gridH, originX, originY);
  const topRight = gridToScreen(gridW, 0, originX, originY);

  return (
    <svg
      viewBox={`0 0 ${totalW} ${totalH}`}
      className="w-full h-full"
      style={{ maxWidth: totalW, maxHeight: totalH }}
    >
      <defs>
        {/* Padló fény gradient */}
        <radialGradient id="floorLight" cx="40%" cy="30%" r="60%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.06)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        {/* Ablak fény */}
        <radialGradient id="windowGlow" cx="50%" cy="30%" r="50%">
          <stop offset="0%" stopColor={theme.windowGlow || "transparent"} />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>

      {/* ─── FALAK ─── */}
      {theme.hasWalls && (
        <>
          {/* Bal fal */}
          <path
            d={`M ${topLeft.x},${topLeft.y - wallHeight} L ${topLeft.x},${topLeft.y} L ${bottomLeft.x},${bottomLeft.y} L ${bottomLeft.x},${bottomLeft.y - wallHeight} Z`}
            fill={theme.wallLeft}
          />
          {/* Bal fal sötétebb alsó sáv */}
          <path
            d={`M ${topLeft.x},${topLeft.y - wallHeight} L ${topLeft.x},${topLeft.y} L ${bottomLeft.x},${bottomLeft.y} L ${bottomLeft.x},${bottomLeft.y - wallHeight} Z`}
            fill="url(#floorLight)"
            opacity={0.3}
          />
          {/* Jobb fal */}
          <path
            d={`M ${topRight.x},${topRight.y - wallHeight} L ${topRight.x},${topRight.y} L ${bottomRight.x},${bottomRight.y} L ${bottomRight.x},${bottomRight.y - wallHeight} Z`}
            fill={theme.wallRight}
          />

          {/* ─── ABLAK a bal falon ─── */}
          {(() => {
            // Az ablak a bal falon (izometrikus parallelogramma — a fal síkjában)
            // A bal fal topLeft → bottomLeft irányba megy, az ablak ezen a síkon van
            const wallFrac1 = 0.25; // ablak teteje (fal 25%-ánál)
            const wallFrac2 = 0.75; // ablak alja (fal 75%-ánál)
            // Ablak sarkai a fal síkjában
            const wTopX = topLeft.x + (bottomLeft.x - topLeft.x) * wallFrac1;
            const wTopY = topLeft.y + (bottomLeft.y - topLeft.y) * wallFrac1;
            const wBotX = topLeft.x + (bottomLeft.x - topLeft.x) * wallFrac2;
            const wBotY = topLeft.y + (bottomLeft.y - topLeft.y) * wallFrac2;
            // Ablak magassági offszet (felfelé a falon)
            const hOff = wallHeight * 0.65;
            const hOff2 = wallHeight * 0.2;
            return (
              <g>
                {/* Ablak keret */}
                <path
                  d={`M ${wTopX},${wTopY - hOff} L ${wBotX},${wBotY - hOff} L ${wBotX},${wBotY - hOff2} L ${wTopX},${wTopY - hOff2} Z`}
                  fill={theme.wallAccent}
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth={1}
                />
                {/* Ablak üveg */}
                <path
                  d={`M ${wTopX + 2},${wTopY - hOff + 3} L ${wBotX - 2},${wBotY - hOff + 3} L ${wBotX - 2},${wBotY - hOff2 - 3} L ${wTopX + 2},${wTopY - hOff2 - 3} Z`}
                  fill={`rgba(135,200,255,${windowAlpha})`}
                />
                {/* Ablak kereszt — vízszintes */}
                <line
                  x1={wTopX + 2}
                  y1={(wTopY - hOff + wTopY - hOff2) / 2}
                  x2={wBotX - 2}
                  y2={(wBotY - hOff + wBotY - hOff2) / 2}
                  stroke="rgba(255,255,255,0.08)"
                  strokeWidth={1}
                />
                {/* Ablak kereszt — függőleges */}
                <line
                  x1={(wTopX + wBotX) / 2}
                  y1={(wTopY + wBotY) / 2 - hOff + 3}
                  x2={(wTopX + wBotX) / 2}
                  y2={(wTopY + wBotY) / 2 - hOff2 - 3}
                  stroke="rgba(255,255,255,0.08)"
                  strokeWidth={1}
                />
              </g>
            );
          })()}
        </>
      )}

      {/* ─── Kert háttér (ha nincs fal) ─── */}
      {!theme.hasWalls && (
        <rect x={0} y={0} width={totalW} height={originY} fill="#87CEEB" opacity={0.3} />
      )}

      {/* ─── PADLÓ ─── */}
      <g>
        {floorTiles.map((tile, i) => (
          <path
            key={i}
            d={tile.path}
            fill={tile.fill}
            stroke="rgba(255,255,255,0.04)"
            strokeWidth={0.5}
          />
        ))}
        {/* Padló fény overlay */}
        <path
          d={`M ${topLeft.x},${topLeft.y} L ${topRight.x},${topRight.y} L ${bottomRight.x},${bottomRight.y} L ${bottomLeft.x},${bottomLeft.y} Z`}
          fill="url(#floorLight)"
          opacity={0.5}
        />
      </g>

      {/* ─── Padló szegély (mélység illúzió) ─── */}
      <path
        d={`M ${bottomLeft.x},${bottomLeft.y} L ${bottomRight.x},${bottomRight.y} L ${bottomRight.x},${bottomRight.y + 6} L ${bottomLeft.x},${bottomLeft.y + 6} Z`}
        fill="rgba(0,0,0,0.3)"
      />
      <path
        d={`M ${topRight.x},${topRight.y} L ${bottomRight.x},${bottomRight.y} L ${bottomRight.x},${bottomRight.y + 6} L ${topRight.x},${topRight.y + 6} Z`}
        fill="rgba(0,0,0,0.2)"
      />

      {/* ─── CHILDREN (bútorok, fények) ─── */}
      <g>{children}</g>
    </svg>
  );
}
