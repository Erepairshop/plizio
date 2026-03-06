"use client";

import React from "react";
import IsoRoom, { gridToScreen, TILE_W, TILE_H } from "./IsoRoom";
import { FURNITURE_COMPONENTS } from "./furniture";

/*  ─── Szoba renderelő ───
 *  Összefogja: IsoRoom (shell) + bútorok (SVG) + fények
 *
 *  Használat:
 *  <RoomRenderer
 *    roomType="bedroom"
 *    gridW={6} gridH={6}
 *    furniture={[
 *      { furnitureId: "bed_basic", gridX: 1, gridY: 2 },
 *      { furnitureId: "lamp_floor", gridX: 0, gridY: 0 },
 *    ]}
 *  />
 */

export interface PlacedFurniture {
  furnitureId: string;
  gridX: number;
  gridY: number;
  rotation?: 0 | 1 | 2 | 3;
}

interface RoomRendererProps {
  roomType?: string;
  gridW?: number;
  gridH?: number;
  furniture: PlacedFurniture[];
  /** Nap/éjszaka ablak fény (0-1) */
  windowAlpha?: number;
  /** Grid vonalak mutatása (szerkesztő módhoz) */
  showGrid?: boolean;
  /** Kiemelt cella (drag-drop) */
  highlightCell?: { x: number; y: number; valid: boolean } | null;
}

export default function RoomRenderer({
  roomType = "bedroom",
  gridW = 6,
  gridH = 6,
  furniture,
  windowAlpha,
  showGrid = false,
  highlightCell = null,
}: RoomRendererProps) {
  // Origin pont — padló bal-felső sarka az SVG-ben
  // Ugyanaz a számítás mint az IsoRoom-ban
  const originX = gridH * (TILE_W / 2) + 20;
  const wallHeight = 120;
  const originY = wallHeight;

  return (
    <IsoRoom
      roomType={roomType}
      gridW={gridW}
      gridH={gridH}
      windowAlpha={windowAlpha}
    >
      {/* Grid overlay (szerkesztő módhoz) */}
      {showGrid &&
        Array.from({ length: gridW * gridH }).map((_, i) => {
          const gx = i % gridW;
          const gy = Math.floor(i / gridW);
          const { x, y } = gridToScreen(gx, gy, originX, originY);
          const hw = TILE_W / 2;
          const hh = TILE_H / 2;
          return (
            <path
              key={`grid-${i}`}
              d={`M ${x},${y - hh} L ${x + hw},${y} L ${x},${y + hh} L ${x - hw},${y} Z`}
              fill="none"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth={0.5}
              strokeDasharray="2 2"
            />
          );
        })}

      {/* Kiemelt cella (drag-drop vizuális visszajelzés) */}
      {highlightCell && (() => {
        const { x, y } = gridToScreen(
          highlightCell.x,
          highlightCell.y,
          originX,
          originY
        );
        const hw = TILE_W / 2;
        const hh = TILE_H / 2;
        return (
          <path
            d={`M ${x},${y - hh} L ${x + hw},${y} L ${x},${y + hh} L ${x - hw},${y} Z`}
            fill={highlightCell.valid ? "rgba(0,255,100,0.15)" : "rgba(255,0,0,0.15)"}
            stroke={highlightCell.valid ? "rgba(0,255,100,0.4)" : "rgba(255,0,0,0.4)"}
            strokeWidth={1}
          />
        );
      })()}

      {/* Bútorok — rendezve Y pozíció szerint (hátsók előbb, "painter's algorithm") */}
      {[...furniture]
        .sort((a, b) => (a.gridX + a.gridY) - (b.gridX + b.gridY))
        .map((item, i) => {
          const Component = FURNITURE_COMPONENTS[item.furnitureId];
          if (!Component) return null;

          const { x, y } = gridToScreen(
            item.gridX,
            item.gridY,
            originX,
            originY
          );

          return <Component key={`f-${i}`} x={x} y={y} />;
        })}
    </IsoRoom>
  );
}
