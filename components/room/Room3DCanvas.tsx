"use client";
import React, { useRef, useCallback, useEffect } from "react";
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
// Brighter wall colors — visible against dark background
const WALL_COLORS: Record<string, string> = {
  bedroom:  "#4A3472",
  living:   "#6B3050",
  kitchen:  "#2E6040",
  bathroom: "#2A4A78",
  garden:   "none",
};
const WALL_TRIM: Record<string, string> = {
  bedroom:  "#7A5AB0",
  living:   "#9A4A70",
  kitchen:  "#4A8A60",
  bathroom: "#4A6AA8",
  garden:   "#4A8B3A",
};
const WALL_H = 1.4; // world units — smaller walls for better proportions

// ─── Camera fitter — auto-zoom to fit room in canvas ─────────────────────────
const SQRT2 = Math.SQRT2;
const SQRT6 = Math.sqrt(6);
const CAM_PAD = 1.5; // world-unit padding around the room

function CameraFitter({ gridW, gridH }: { gridW: number; gridH: number }) {
  const { camera, size } = useThree();
  useEffect(() => {
    const cam = camera as THREE.OrthographicCamera;
    // Isometric projection extents (camera at [D,D,D] looking at origin, up=[0,1,0])
    // Horizontal extent: room diamond width in camera-right direction
    const hExtent = (gridW + gridH) / SQRT2;
    // Vertical extent: floor bottom to wall top in camera-up direction
    const vExtent = ((gridW + gridH) + 2 * WALL_H) / SQRT6;
    // Fit with padding — use the tighter axis
    const zoomH = size.width / (hExtent + CAM_PAD);
    const zoomV = size.height / (vExtent + CAM_PAD);
    cam.zoom = Math.min(zoomH, zoomV);
    cam.updateProjectionMatrix();
  }, [camera, size, gridW, gridH]);
  return null;
}

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
  // Camera zoom & pan (replaces CSS scale/translate for pixel-perfect rendering)
  cameraZoom?: number;
  cameraPan?: { x: number; y: number };
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
  cameraZoom, cameraPan,
}: Omit<Room3DCanvasProps, "windowAlpha"> & { gridW: number; gridH: number; roomType: string }) {
  const floorRef = useRef<THREE.Mesh>(null!);
  const floorPlane = useRef(new THREE.Plane(new THREE.Vector3(0, 1, 0), 0));
  const { raycaster, camera } = useThree();

  const colors = FLOOR_COLORS[roomType] || FLOOR_COLORS.bedroom;
  const wallColor = WALL_COLORS[roomType] ?? WALL_COLORS.bedroom;
  const trimColor = WALL_TRIM[roomType] ?? WALL_TRIM.bedroom;
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
      {/* Lighting — hemisphere for sky/ground gradient, directional for depth */}
      <hemisphereLight args={["#FFF4E0", "#2A1A0A", 0.7]} />
      <directionalLight position={[-5, 12, 5]} intensity={1.1} castShadow={false} />
      <directionalLight position={[8, 4, -4]} intensity={0.45} />

      {/* Floor */}
      <mesh
        ref={floorRef}
        rotation={[-Math.PI / 2, 0, 0]}
        onClick={handleFloorClick}
        onPointerMove={handleFloorPointerMove}
        onPointerLeave={onPointerLeaveGrid}
      >
        <planeGeometry args={[gridW, gridH]} />
        <meshStandardMaterial color={colors[0]} />
      </mesh>

      {/* Floor tile pattern (alternate) */}
      {Array.from({ length: gridW }, (_, gx) =>
        Array.from({ length: gridH }, (_, gy) =>
          (gx + gy) % 2 === 1 ? (
            <mesh key={`t-${gx}-${gy}`} position={[gx - gridW / 2 + 0.5, 0.001, gy - gridH / 2 + 0.5]} rotation={[-Math.PI / 2, 0, 0]}>
              <planeGeometry args={[1, 1]} />
              <meshStandardMaterial color={colors[1]} />
            </mesh>
          ) : null
        )
      )}

      {/* Left wall — visible inner face at x = -gridW/2, runs along Z */}
      {hasWalls && (
        <group>
          <mesh position={[-gridW / 2 - 0.05, WALL_H / 2, 0]}>
            <boxGeometry args={[0.30, WALL_H, gridH]} />
            <meshStandardMaterial color={wallColor} />
          </mesh>
          {/* Trim strip at top */}
          <mesh position={[-gridW / 2 - 0.05, WALL_H - 0.08, 0]}>
            <boxGeometry args={[0.32, 0.16, gridH + 0.02]} />
            <meshStandardMaterial color={trimColor} />
          </mesh>
          {/* Baseboard at bottom */}
          <mesh position={[-gridW / 2 - 0.05, 0.08, 0]}>
            <boxGeometry args={[0.32, 0.16, gridH + 0.02]} />
            <meshStandardMaterial color={trimColor} />
          </mesh>
          {/* Window on left wall (center) */}
          <mesh position={[-gridW / 2 + 0.01, WALL_H * 0.6, 0]}>
            <boxGeometry args={[0.05, WALL_H * 0.35, gridH * 0.35]} />
            <meshStandardMaterial color="#C8E8F8" />
          </mesh>
        </group>
      )}

      {/* Back wall — visible inner face at z = -gridH/2, runs along X */}
      {hasWalls && (
        <group>
          <mesh position={[0, WALL_H / 2, -gridH / 2 - 0.05]}>
            <boxGeometry args={[gridW, WALL_H, 0.30]} />
            <meshStandardMaterial color={wallColor} />
          </mesh>
          {/* Trim strip at top */}
          <mesh position={[0, WALL_H - 0.08, -gridH / 2 - 0.05]}>
            <boxGeometry args={[gridW + 0.02, 0.16, 0.32]} />
            <meshStandardMaterial color={trimColor} />
          </mesh>
          {/* Baseboard at bottom */}
          <mesh position={[0, 0.08, -gridH / 2 - 0.05]}>
            <boxGeometry args={[gridW + 0.02, 0.16, 0.32]} />
            <meshStandardMaterial color={trimColor} />
          </mesh>
          {/* Window on back wall (center) */}
          <mesh position={[0, WALL_H * 0.6, -gridH / 2 + 0.01]}>
            <boxGeometry args={[gridW * 0.35, WALL_H * 0.35, 0.05]} />
            <meshStandardMaterial color="#C8E8F8" />
          </mesh>
        </group>
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
  cameraZoom = 1,
  cameraPan = { x: 0, y: 0 },
}: Room3DCanvasProps) {
  const gridMax = Math.max(gridW, gridH);
  const D = gridMax * 1.6;

  // Zoom & pan handled by CSS transform on the wrapper (page.tsx).
  // DPR scales with CSS zoom so the canvas renders at higher resolution,
  // preventing pixelation when CSS scale() magnifies the element.
  const deviceDpr = typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;
  const effectiveDpr = Math.min(Math.ceil(cameraZoom * deviceDpr), 4);

  return (
    <Canvas
      orthographic
      camera={{ position: [D, D, D], zoom: 1, up: [0, 1, 0], near: 0.1, far: 200 }}
      style={{ width: "100%", height: "100%" }}
      gl={{ antialias: true, alpha: true }}
      dpr={effectiveDpr}
      onCreated={({ camera }) => {
        (camera as THREE.OrthographicCamera).lookAt(0, 0, 0);
      }}
    >
      <CameraFitter gridW={gridW} gridH={gridH} />
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
        cameraZoom={cameraZoom}
        cameraPan={cameraPan}

      />
    </Canvas>
  );
}
