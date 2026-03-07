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
  baseZoom?: number;
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

// ─── Camera controller — applies zoom & pan via orthographic camera ──────────
// Uses camera zoom (not CSS scale) for pixel-perfect rendering at any zoom level.
// Pan offsets the camera position along its screen-space axes.
function CameraController({ cameraZoom, cameraPan, baseZoom }: { cameraZoom: number; cameraPan: { x: number; y: number }; baseZoom: number }) {
  const { camera } = useThree();
  const state = useRef<{ basePos: THREE.Vector3; right: THREE.Vector3; up: THREE.Vector3 } | null>(null);

  useFrame(() => {
    const cam = camera as THREE.OrthographicCamera;

    // Capture initial camera orientation once
    if (!state.current) {
      cam.updateMatrixWorld();
      const r = new THREE.Vector3();
      const u = new THREE.Vector3();
      const f = new THREE.Vector3();
      cam.matrixWorld.extractBasis(r, u, f);
      state.current = { basePos: cam.position.clone(), right: r.clone(), up: u.clone() };
    }

    const { basePos, right, up } = state.current;
    const targetZoom = baseZoom * cameraZoom;

    // Apply zoom
    cam.zoom = targetZoom;

    // Apply pan — convert pixel offset to world offset using camera axes
    const pxToWorld = 1 / targetZoom;
    const dx = -cameraPan.x * pxToWorld;
    const dy = cameraPan.y * pxToWorld;

    cam.position.set(
      basePos.x + right.x * dx + up.x * dy,
      basePos.y + right.y * dx + up.y * dy,
      basePos.z + right.z * dx + up.z * dy,
    );

    // Look at same offset point (keeps angle consistent)
    cam.lookAt(
      right.x * dx + up.x * dy,
      right.y * dx + up.y * dy,
      right.z * dx + up.z * dy,
    );

    cam.updateProjectionMatrix();
  });

  return null;
}

// ─── Inner scene (has access to R3F context) ─────────────────────────────────
function RoomScene({
  roomType, gridW, gridH, furniture, showGrid, editMode, selectedIndex,
  ghost, onTileClick, onPointerMoveGrid, onPointerLeaveGrid,
  onFurnitureClick, onFurnitureLongPress, avatarGridPos, onAvatarCanvasPos,
  cameraZoom, cameraPan, baseZoom,
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
      {/* Camera zoom/pan controller */}
      <CameraController cameraZoom={cameraZoom ?? 1} cameraPan={cameraPan ?? { x: 0, y: 0 }} baseZoom={baseZoom ?? 22} />

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
  const cameraOrthoRef = useRef<THREE.OrthographicCamera | null>(null);
  const gridMax = Math.max(gridW, gridH);
  const D = gridMax * 1.6;
  const baseZoom = 220 / gridMax;

  // ⚠️ IMPORTANT: Room3DCanvas does NOT handle zoom/pan!
  // It renders the 3D scene at 1:1 scale.
  // Zoom & pan are handled by CSS transform on the wrapper (page.tsx).
  // This avoids all the Three.js orthographic camera complications.

  // If you need zoom/pan in the 3D scene itself (e.g., constrain pan to grid bounds),
  // that's a different feature and should be implemented separately.

  return (
    <Canvas
      orthographic
      camera={{ position: [D, D, D], zoom: baseZoom, up: [0, 1, 0], near: 0.1, far: 200 }}
      style={{ width: "100%", height: "100%" }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
      onCreated={({ camera }) => {
        cameraOrthoRef.current = camera as THREE.OrthographicCamera;
        // Initial position already set via camera prop
        cameraOrthoRef.current.lookAt(0, 0, 0);
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
        cameraZoom={cameraZoom}
        cameraPan={cameraPan}
        baseZoom={baseZoom}
      />
    </Canvas>
  );
}
