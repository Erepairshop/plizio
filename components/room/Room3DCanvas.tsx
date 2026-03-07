"use client";
import React, { useRef, useCallback } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { FURNITURE_3D_COMPONENTS } from "./furniture3d/Furniture3D";
import { getFurnitureDef, getEffectiveDimensions } from "./FurnitureRegistry";
import type { PlacedFurniture } from "@/lib/room";

// ─── Room themes ──────────────────────────────────────────────────────────────
const FLOOR_COLORS: Record<string, [string, string]> = {
  bedroom:  ["#C4956A", "#A87D5A"],
  living:   ["#8B6F4E", "#7A5F3E"],
  kitchen:  ["#D4D4D4", "#BABABA"],
  bathroom: ["#7AAEC4", "#5A8EA4"],
  garden:   ["#4A8B3A", "#3A7B2A"],
};
const WALL_COLORS: Record<string, string> = {
  bedroom:  "#2A1F3D",
  living:   "#3D1F2A",
  kitchen:  "#1F3D2A",
  bathroom: "#1F2D3D",
  garden:   "none",
};
const WALL_H = 2.2; // world units

// ─── Ghost highlight ───────────────────────────────────────────────────────────
interface GhostData {
  furnitureId: string;
  gridX: number;
  gridY: number;
  rotation: number;
  valid: boolean;
}

// ─── Props ────────────────────────────────────────────────────────────────────
export interface Room3DCanvasProps {
  roomType?: string;
  gridW?: number;
  gridH?: number;
  furniture: PlacedFurniture[];
  windowAlpha?: number;
  showGrid?: boolean;
  editMode?: boolean;
  selectedIndex?: number | null;
  ghost?: GhostData | null;
  onTileClick?: (gx: number, gy: number) => void;
  onPointerMoveGrid?: (gx: number, gy: number) => void;
  onPointerLeaveGrid?: () => void;
  onFurnitureClick?: (index: number, screenX: number, screenY: number) => void;
  onFurnitureLongPress?: (index: number) => void;
  avatarGridPos?: { gx: number; gy: number };
  onAvatarCanvasPos?: (cx: number, cy: number) => void;
}

// ─── Converts grid (gx,gy) to world (x,0,z) centred at origin ────────────────
function gridToWorld(gx: number, gy: number, gridW: number, gridH: number): [number, number, number] {
  return [gx - gridW / 2 + 0.5, 0, gy - gridH / 2 + 0.5];
}

// ─── Converts 3D intersection point → grid cell ───────────────────────────────
function worldToGrid(wx: number, wz: number, gridW: number, gridH: number) {
  return {
    gx: wx + gridW / 2 - 0.5,
    gy: wz + gridH / 2 - 0.5,
  };
}

// ─── Avatar position tracker (R3F inner component) ───────────────────────────
// Emits WINDOW-relative screen coords so page.tsx can position the DOM avatar.
// getBoundingClientRect() reflects the CSS zoom/pan transform, so the coords
// are already correct for the visually zoomed canvas.
function AvatarTracker({
  gx, gy, gridW, gridH, onPos,
}: { gx: number; gy: number; gridW: number; gridH: number; onPos: (cx: number, cy: number) => void }) {
  const { camera, gl } = useThree();
  const vec = useRef(new THREE.Vector3());
  const last = useRef({ cx: -9999, cy: -9999 });

  useFrame(() => {
    const [wx, , wz] = gridToWorld(gx, gy, gridW, gridH);
    vec.current.set(wx, 0, wz);
    vec.current.project(camera);
    const rect = gl.domElement.getBoundingClientRect();
    const cx = (vec.current.x * 0.5 + 0.5) * rect.width + rect.left;
    const cy = (-vec.current.y * 0.5 + 0.5) * rect.height + rect.top;
    if (Math.abs(cx - last.current.cx) > 0.5 || Math.abs(cy - last.current.cy) > 0.5) {
      last.current = { cx, cy };
      onPos(cx, cy);
    }
  });

  return null;
}

// ─── Furniture piece (single placed item) ────────────────────────────────────
function FurniturePiece({
  item,
  origIdx,
  gridW,
  gridH,
  isSelected,
  isMoving,
  editMode,
  onFurnitureClick,
  onFurnitureLongPress,
}: {
  item: PlacedFurniture;
  origIdx: number;
  gridW: number;
  gridH: number;
  isSelected: boolean;
  isMoving: boolean;
  editMode: boolean;
  onFurnitureClick?: (i: number, sx: number, sy: number) => void;
  onFurnitureLongPress?: (i: number) => void;
}) {
  const Component = FURNITURE_3D_COMPONENTS[item.furnitureId];
  if (!Component) return null;

  const fDef = getFurnitureDef(item.furnitureId);
  if (!fDef) return null;

  // Centre of occupied tiles in world space
  const wx = (item.gridX + fDef.gridW / 2) - gridW / 2;
  const wz = (item.gridY + fDef.gridH / 2) - gridH / 2;

  const longPressTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const longPressOccurred = useRef(false);

  const handlePointerDown = (e: import("@react-three/fiber").ThreeEvent<PointerEvent>) => {
    if (!editMode || !onFurnitureLongPress) return;
    e.stopPropagation();
    longPressOccurred.current = false;
    longPressTimer.current = setTimeout(() => {
      longPressOccurred.current = true;
      onFurnitureLongPress(origIdx);
    }, 500);
  };
  const handlePointerUp = () => {
    if (longPressTimer.current) { clearTimeout(longPressTimer.current); longPressTimer.current = null; }
  };
  const handleClick = (e: import("@react-three/fiber").ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    if (longPressOccurred.current) { longPressOccurred.current = false; return; }
    onFurnitureClick?.(origIdx, e.nativeEvent.clientX, e.nativeEvent.clientY);
  };

  const opacity = isMoving ? 0.4 : 1;

  return (
    <group
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      onClick={handleClick}
    >
      {/* Selection ring */}
      {isSelected && (
        <mesh position={[wx, 0.02, wz]} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[0.5, 0.65, 32]} />
          <meshBasicMaterial color="#00D4FF" transparent opacity={0.5} />
        </mesh>
      )}
      <group position={[wx, 0, wz]}>
        <Component
          position={[0, 0, 0]}
          rotation={item.rotation}
          isGhost={false}
        />
        {opacity < 1 && (
          // overlay to dim moving furniture
          <mesh position={[0, 0.5, 0]}>
            <boxGeometry args={[fDef.gridW, 1, fDef.gridH]} />
            <meshBasicMaterial color="#000000" transparent opacity={0.4} depthWrite={false} />
          </mesh>
        )}
      </group>
    </group>
  );
}

// ─── Ghost preview ────────────────────────────────────────────────────────────
function GhostPreview({ ghost, gridW, gridH }: { ghost: GhostData; gridW: number; gridH: number }) {
  const fDef = getFurnitureDef(ghost.furnitureId);
  const Component = FURNITURE_3D_COMPONENTS[ghost.furnitureId];
  if (!fDef || !Component) return null;

  const eff = getEffectiveDimensions(fDef, ghost.rotation);
  const cx = (ghost.gridX + eff.gridW / 2) - gridW / 2;
  const cz = (ghost.gridY + eff.gridH / 2) - gridH / 2;
  const tileColor = ghost.valid ? "#00DC64" : "#FF3C3C";

  return (
    <group>
      {/* Tile highlights */}
      {Array.from({ length: eff.gridW }, (_, wx) =>
        Array.from({ length: eff.gridH }, (_, wy) => {
          const tx = (ghost.gridX + wx) - gridW / 2 + 0.5;
          const tz = (ghost.gridY + wy) - gridH / 2 + 0.5;
          return (
            <mesh key={`${wx}-${wy}`} position={[tx, 0.01, tz]} rotation={[-Math.PI / 2, 0, 0]}>
              <planeGeometry args={[0.96, 0.96]} />
              <meshBasicMaterial color={tileColor} transparent opacity={0.3} depthWrite={false} />
            </mesh>
          );
        })
      )}
      {/* Ghost furniture */}
      <group position={[cx, 0, cz]}>
        <Component position={[0, 0, 0]} rotation={ghost.rotation} isGhost />
      </group>
    </group>
  );
}

// ─── Grid overlay ────────────────────────────────────────────────────────────
function GridOverlay({ gridW, gridH }: { gridW: number; gridH: number }) {
  const lines: React.ReactNode[] = [];
  for (let gx = 0; gx < gridW; gx++) {
    for (let gy = 0; gy < gridH; gy++) {
      const wx = gx - gridW / 2 + 0.5;
      const wz = gy - gridH / 2 + 0.5;
      lines.push(
        <mesh key={`g-${gx}-${gy}`} position={[wx, 0.005, wz]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[0.96, 0.96]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.04} wireframe={false} depthWrite={false} />
        </mesh>
      );
      // border lines via EdgesGeometry would need refs; simpler: use a ring
    }
  }
  return <>{lines}</>;
}

// ─── Inner scene (has access to R3F context) ─────────────────────────────────
function RoomScene({
  roomType, gridW, gridH, furniture, showGrid, editMode, selectedIndex,
  ghost, onTileClick, onPointerMoveGrid, onPointerLeaveGrid,
  onFurnitureClick, onFurnitureLongPress, avatarGridPos, onAvatarCanvasPos,
}: Omit<Room3DCanvasProps, "windowAlpha"> & { gridW: number; gridH: number; roomType: string }) {
  const floorRef = useRef<THREE.Mesh>(null!);
  const floorPlane = useRef(new THREE.Plane(new THREE.Vector3(0, 1, 0), 0));
  const { raycaster, camera } = useThree();

  const colors = FLOOR_COLORS[roomType] || FLOOR_COLORS.bedroom;
  const wallColor = WALL_COLORS[roomType] || WALL_COLORS.bedroom;
  const hasWalls = wallColor !== "none";

  const getGridFromEvent = useCallback((e: import("@react-three/fiber").ThreeEvent<PointerEvent | MouseEvent>) => {
    const pt = new THREE.Vector3();
    raycaster.ray.intersectPlane(floorPlane.current, pt);
    const { gx, gy } = worldToGrid(pt.x, pt.z, gridW, gridH);
    return { gx, gy };
  }, [raycaster, gridW, gridH]);

  const handleFloorClick = useCallback((e: import("@react-three/fiber").ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    const { gx, gy } = getGridFromEvent(e);
    onTileClick?.(gx, gy);
  }, [getGridFromEvent, onTileClick]);

  const handleFloorPointerMove = useCallback((e: import("@react-three/fiber").ThreeEvent<PointerEvent>) => {
    const { gx, gy } = getGridFromEvent(e);
    onPointerMoveGrid?.(gx, gy);
  }, [getGridFromEvent, onPointerMoveGrid]);

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={1.0} />
      <directionalLight position={[-4, 8, 4]} intensity={1.1} castShadow={false} />
      <directionalLight position={[4, 4, -4]} intensity={0.35} />

      {/* Floor */}
      <mesh
        ref={floorRef}
        rotation={[-Math.PI / 2, 0, 0]}
        onClick={handleFloorClick}
        onPointerMove={handleFloorPointerMove}
        onPointerLeave={onPointerLeaveGrid}
      >
        <planeGeometry args={[gridW, gridH]} />
        <meshLambertMaterial color={colors[0]} />
      </mesh>

      {/* Floor tile pattern (alternate) */}
      {Array.from({ length: gridW }, (_, gx) =>
        Array.from({ length: gridH }, (_, gy) =>
          (gx + gy) % 2 === 1 ? (
            <mesh key={`t-${gx}-${gy}`} position={[gx - gridW / 2 + 0.5, 0.001, gy - gridH / 2 + 0.5]} rotation={[-Math.PI / 2, 0, 0]}>
              <planeGeometry args={[1, 1]} />
              <meshLambertMaterial color={colors[1]} />
            </mesh>
          ) : null
        )
      )}

      {/* Left wall (along Z axis, at x = -gridW/2) */}
      {hasWalls && (
        <mesh position={[-gridW / 2, WALL_H / 2, 0]}>
          <boxGeometry args={[0.12, WALL_H, gridH]} />
          <meshLambertMaterial color={wallColor} />
        </mesh>
      )}

      {/* Back wall (along X axis, at z = -gridH/2) */}
      {hasWalls && (
        <mesh position={[0, WALL_H / 2, -gridH / 2]}>
          <boxGeometry args={[gridW + 0.12, WALL_H, 0.12]} />
          <meshLambertMaterial color={wallColor} />
        </mesh>
      )}

      {/* Grid overlay */}
      {showGrid && <GridOverlay gridW={gridW} gridH={gridH} />}

      {/* Furniture */}
      {furniture.map((item, i) => (
        <FurniturePiece
          key={`f-${i}`}
          item={item}
          origIdx={i}
          gridW={gridW}
          gridH={gridH}
          isSelected={editMode === true && selectedIndex === i}
          isMoving={false}
          editMode={editMode ?? false}
          onFurnitureClick={onFurnitureClick}
          onFurnitureLongPress={onFurnitureLongPress}
        />
      ))}

      {/* Ghost preview */}
      {ghost && <GhostPreview ghost={ghost} gridW={gridW} gridH={gridH} />}

      {/* Avatar position tracker */}
      {avatarGridPos && onAvatarCanvasPos && (
        <AvatarTracker
          gx={avatarGridPos.gx}
          gy={avatarGridPos.gy}
          gridW={gridW}
          gridH={gridH}
          onPos={onAvatarCanvasPos}
        />
      )}
    </>
  );
}

// ─── Main exported component ──────────────────────────────────────────────────
export default function Room3DCanvas({
  roomType = "bedroom",
  gridW = 6,
  gridH = 6,
  furniture,
  windowAlpha,
  showGrid = false,
  editMode = false,
  selectedIndex = null,
  ghost = null,
  onTileClick,
  onPointerMoveGrid,
  onPointerLeaveGrid,
  onFurnitureClick,
  onFurnitureLongPress,
  avatarGridPos,
  onAvatarCanvasPos,
}: Room3DCanvasProps) {
  const D = Math.max(gridW, gridH) * 1.4;
  const zoom = 280 / Math.max(gridW, gridH);

  return (
    <Canvas
      orthographic
      camera={{ position: [D, D, D], zoom, up: [0, 1, 0], near: 0.1, far: 200 }}
      style={{ width: "100%", height: "100%" }}
      gl={{ antialias: true, alpha: true }}
      onCreated={({ camera }) => {
        (camera as THREE.OrthographicCamera).lookAt(0, 0, 0);
      }}
    >
      <RoomScene
        roomType={roomType}
        gridW={gridW}
        gridH={gridH}
        furniture={furniture}
        showGrid={showGrid}
        editMode={editMode}
        selectedIndex={selectedIndex}
        ghost={ghost}
        onTileClick={onTileClick}
        onPointerMoveGrid={onPointerMoveGrid}
        onPointerLeaveGrid={onPointerLeaveGrid}
        onFurnitureClick={onFurnitureClick}
        onFurnitureLongPress={onFurnitureLongPress}
        avatarGridPos={avatarGridPos}
        onAvatarCanvasPos={onAvatarCanvasPos}
      />
    </Canvas>
  );
}
