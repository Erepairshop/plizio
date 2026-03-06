"use client";

import React from "react";
import IsoRoom, { gridToScreen, TILE_W, TILE_H } from "./IsoRoom";
import { FURNITURE_COMPONENTS } from "./furniture";
import { getFurnitureDef } from "./FurnitureRegistry";

/*  ─── Szoba renderelő ───
 *  Összefogja: IsoRoom (shell) + bútorok (SVG) + fények + rotation + animations
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
  windowAlpha?: number;
  showGrid?: boolean;
  highlightCell?: { x: number; y: number; valid: boolean } | null;
  editMode?: boolean;
  selectedIndex?: number | null;
  onFurnitureClick?: (index: number) => void;
}

export default function RoomRenderer({
  roomType = "bedroom",
  gridW = 6,
  gridH = 6,
  furniture,
  windowAlpha,
  showGrid = false,
  highlightCell = null,
  editMode = false,
  selectedIndex = null,
  onFurnitureClick,
}: RoomRendererProps) {
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
      {/* Grid overlay */}
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

      {/* Highlight cell */}
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

      {/* Furniture — sorted by depth (painter's algorithm) */}
      {furniture
        .map((item, origIdx) => ({ ...item, origIdx }))
        .sort((a, b) => (a.gridX + a.gridY) - (b.gridX + b.gridY))
        .map((item) => {
          const Component = FURNITURE_COMPONENTS[item.furnitureId];
          if (!Component) return null;

          const fDef = getFurnitureDef(item.furnitureId);
          const { x, y } = gridToScreen(
            item.gridX,
            item.gridY,
            originX,
            originY
          );

          const isSelected = editMode && selectedIndex === item.origIdx;
          const rotation = item.rotation || 0;
          // Izometrikus forgatás: SVG group rotate a talppontja körül
          const rotTransform = rotation ? `rotate(${rotation * 90}, ${x}, ${y})` : undefined;

          return (
            <g
              key={`f-${item.origIdx}`}
              transform={rotTransform}
              style={{ cursor: editMode ? "pointer" : "default" }}
              onClick={editMode && onFurnitureClick ? (e) => {
                e.stopPropagation();
                onFurnitureClick(item.origIdx);
              } : undefined}
            >
              {/* Selection highlight */}
              {isSelected && fDef && (() => {
                const r = TILE_W / 2 * Math.max(fDef.gridW, fDef.gridH);
                return (
                  <ellipse
                    cx={x}
                    cy={y}
                    rx={r}
                    ry={r * 0.5}
                    fill="rgba(0,212,255,0.08)"
                    stroke="rgba(0,212,255,0.4)"
                    strokeWidth={1}
                    strokeDasharray="3 3"
                  >
                    <animate attributeName="stroke-opacity" values="0.4;0.8;0.4" dur="1.5s" repeatCount="indefinite" />
                  </ellipse>
                );
              })()}

              <Component x={x} y={y} />

              {/* Idle animations */}
              {fDef?.hasAnimation && fDef.animationType === "glow" && (
                <circle cx={x} cy={y - 30} r={20} fill="rgba(255,220,100,0.04)">
                  <animate attributeName="r" values="18;22;18" dur="3s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite" />
                </circle>
              )}
              {fDef?.hasAnimation && fDef.animationType === "flicker" && (
                <circle cx={x} cy={y - 10} r={15} fill="rgba(255,120,40,0.06)">
                  <animate attributeName="opacity" values="0.3;0.8;0.5;0.9;0.3" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="r" values="14;17;13;16;14" dur="2s" repeatCount="indefinite" />
                </circle>
              )}
              {fDef?.hasAnimation && fDef.animationType === "bubble" && (
                <>
                  <circle cx={x - 3} cy={y - 16} r={1} fill="rgba(100,180,220,0.3)">
                    <animate attributeName="cy" values={`${y - 16};${y - 28};${y - 16}`} dur="4s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.3;0;0.3" dur="4s" repeatCount="indefinite" />
                  </circle>
                  <circle cx={x + 4} cy={y - 20} r={0.8} fill="rgba(100,180,220,0.25)">
                    <animate attributeName="cy" values={`${y - 20};${y - 32};${y - 20}`} dur="5s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.25;0;0.25" dur="5s" repeatCount="indefinite" />
                  </circle>
                </>
              )}
            </g>
          );
        })}
    </IsoRoom>
  );
}
