"use client";
import type React from "react";

// ─── Props ───────────────────────────────────────────────────────────────────
export interface Furniture3DProps {
  position: [number, number, number];
  rotation?: number; // 0 = normal, 1 = mirrored (scale-x -1)
  isGhost?: boolean;
}

// ─── Color palette ────────────────────────────────────────────────────────────
const WL = "#A07840"; // wood light
const WM = "#8B6E52"; // wood mid
const WD = "#6B5040"; // wood dark
const WV = "#4A3020"; // wood very dark
const FC = "#F0EDE8"; // cream / warm white
const FW = "#E8D8C8"; // pillow warm white
const FB = "#7B9EC8"; // blue fabric (duvet)
const FT = "#8B7B6B"; // taupe/brown sofa fabric
const FL = "#B0A090"; // fabric light
const WH = "#F0EFEC"; // appliance white
const LG = "#C8C4BC"; // light gray
const DG = "#888898"; // dark gray / metal
const BK = "#2A2830"; // near black
const PD = "#3A6B28"; // plant dark green
const PL = "#558B3A"; // plant light green
const PT = "#C47040"; // pot terracotta
const AC1 = "#D4B080"; // brass / gold handle
const AC2 = "#7A3A18"; // brick red / fireplace
const AC3 = "#3A5A98"; // TV screen blue
const AW = "#88A8D8"; // water / aquarium blue
const FG = "#6A9B50"; // foliage green
const LY = "#E8C050"; // lamp warm yellow
const RD = "#B03020"; // red / fire
const OR = "#E07020"; // orange / fire

// ─── Helper: mat props ────────────────────────────────────────────────────────
function mat(color: string, isGhost?: boolean) {
  return { color, roughness: 0.75, metalness: 0.05, transparent: !!isGhost, opacity: isGhost ? 0.55 : 1 } as const;
}

// ─── 1. BedBasic (2×1) ───────────────────────────────────────────────────────
export function BedBasic3D({ position, rotation, isGhost }: Furniture3DProps) {
  return (
    <group position={position} scale={rotation === 1 ? [-1, 1, 1] : [1, 1, 1]}>
      {/* Frame */}
      <mesh position={[0, 0.09, 0]}>
        <boxGeometry args={[1.9, 0.18, 0.88]} />
        <meshStandardMaterial {...mat(WM, isGhost)} />
      </mesh>
      {/* Headboard */}
      <mesh position={[-0.92, 0.50, 0]}>
        <boxGeometry args={[0.10, 0.82, 0.88]} />
        <meshStandardMaterial {...mat(WD, isGhost)} />
      </mesh>
      {/* Headboard rail */}
      <mesh position={[-0.92, 0.94, 0]}>
        <boxGeometry args={[0.14, 0.08, 0.92]} />
        <meshStandardMaterial {...mat(WV, isGhost)} />
      </mesh>
      {/* Footboard */}
      <mesh position={[0.92, 0.32, 0]}>
        <boxGeometry args={[0.10, 0.46, 0.88]} />
        <meshStandardMaterial {...mat(WD, isGhost)} />
      </mesh>
      {/* Mattress */}
      <mesh position={[0.04, 0.28, 0]}>
        <boxGeometry args={[1.62, 0.20, 0.78]} />
        <meshStandardMaterial {...mat(FC, isGhost)} />
      </mesh>
      {/* Pillow */}
      <mesh position={[-0.60, 0.40, 0]}>
        <boxGeometry args={[0.50, 0.12, 0.65]} />
        <meshStandardMaterial {...mat(FW, isGhost)} />
      </mesh>
      {/* Duvet */}
      <mesh position={[0.30, 0.42, 0]}>
        <boxGeometry args={[1.0, 0.14, 0.75]} />
        <meshStandardMaterial {...mat(FB, isGhost)} />
      </mesh>
    </group>
  );
}

// ─── 2. Nightstand (1×1) ─────────────────────────────────────────────────────
export function Nightstand3D({ position, rotation, isGhost }: Furniture3DProps) {
  return (
    <group position={position} scale={rotation === 1 ? [-1, 1, 1] : [1, 1, 1]}>
      {/* Body */}
      <mesh position={[0, 0.30, 0]}>
        <boxGeometry args={[0.82, 0.56, 0.78]} />
        <meshStandardMaterial {...mat(WM, isGhost)} />
      </mesh>
      {/* Top */}
      <mesh position={[0, 0.60, 0]}>
        <boxGeometry args={[0.86, 0.06, 0.82]} />
        <meshStandardMaterial {...mat(WL, isGhost)} />
      </mesh>
      {/* Drawer divider */}
      <mesh position={[0, 0.30, 0.40]}>
        <boxGeometry args={[0.78, 0.02, 0.02]} />
        <meshStandardMaterial {...mat(WD, isGhost)} />
      </mesh>
      {/* Handle */}
      <mesh position={[0, 0.38, 0.42]}>
        <boxGeometry args={[0.22, 0.04, 0.04]} />
        <meshStandardMaterial {...mat(AC1, isGhost)} />
      </mesh>
      {/* Legs */}
      {([ [-0.34, -0.33], [0.34, -0.33], [-0.34, 0.33], [0.34, 0.33] ] as [number,number][]).map(([lx,lz], i) => (
        <mesh key={i} position={[lx, 0.03, lz]}>
          <boxGeometry args={[0.07, 0.06, 0.07]} />
          <meshStandardMaterial {...mat(WD, isGhost)} />
        </mesh>
      ))}
    </group>
  );
}

// ─── 3. LampFloor (1×1) ──────────────────────────────────────────────────────
export function LampFloor3D({ position, rotation, isGhost }: Furniture3DProps) {
  return (
    <group position={position} scale={rotation === 1 ? [-1, 1, 1] : [1, 1, 1]}>
      {/* Base */}
      <mesh position={[0, 0.03, 0]}>
        <cylinderGeometry args={[0.18, 0.20, 0.06, 12]} />
        <meshStandardMaterial {...mat(DG, isGhost)} />
      </mesh>
      {/* Pole */}
      <mesh position={[0, 0.72, 0]}>
        <cylinderGeometry args={[0.025, 0.025, 1.32, 8]} />
        <meshStandardMaterial {...mat(DG, isGhost)} />
      </mesh>
      {/* Shade outer */}
      <mesh position={[0, 1.42, 0]}>
        <cylinderGeometry args={[0.26, 0.16, 0.30, 12]} />
        <meshStandardMaterial {...mat(LY, isGhost)} />
      </mesh>
      {/* Shade inner (light) */}
      <mesh position={[0, 1.38, 0]}>
        <cylinderGeometry args={[0.22, 0.12, 0.26, 12]} />
        <meshStandardMaterial color="#FFFAE0" transparent opacity={isGhost ? 0.4 : 0.9} />
      </mesh>
    </group>
  );
}

// ─── 4. Wardrobe (1×2) ───────────────────────────────────────────────────────
export function Wardrobe3D({ position, rotation, isGhost }: Furniture3DProps) {
  return (
    <group position={position} scale={rotation === 1 ? [-1, 1, 1] : [1, 1, 1]}>
      {/* Body */}
      <mesh position={[0, 0.74, 0]}>
        <boxGeometry args={[0.86, 1.44, 1.86]} />
        <meshStandardMaterial {...mat(WM, isGhost)} />
      </mesh>
      {/* Crown top */}
      <mesh position={[0, 1.50, 0]}>
        <boxGeometry args={[0.90, 0.08, 1.90]} />
        <meshStandardMaterial {...mat(WD, isGhost)} />
      </mesh>
      {/* Base */}
      <mesh position={[0, 0.04, 0]}>
        <boxGeometry args={[0.88, 0.08, 1.88]} />
        <meshStandardMaterial {...mat(WV, isGhost)} />
      </mesh>
      {/* Door split line */}
      <mesh position={[0.44, 0.74, 0]}>
        <boxGeometry args={[0.02, 1.30, 0.02]} />
        <meshStandardMaterial {...mat(WV, isGhost)} />
      </mesh>
      {/* Door divider (center) */}
      <mesh position={[0.44, 0.74, 0]}>
        <boxGeometry args={[0.02, 1.30, 0.02]} />
        <meshStandardMaterial {...mat(WV, isGhost)} />
      </mesh>
      {/* Handle front left */}
      <mesh position={[0.44, 0.80, -0.30]}>
        <boxGeometry args={[0.04, 0.04, 0.20]} />
        <meshStandardMaterial {...mat(AC1, isGhost)} />
      </mesh>
      {/* Handle front right */}
      <mesh position={[0.44, 0.80, 0.30]}>
        <boxGeometry args={[0.04, 0.04, 0.20]} />
        <meshStandardMaterial {...mat(AC1, isGhost)} />
      </mesh>
    </group>
  );
}

// ─── 5. Desk (2×1) ───────────────────────────────────────────────────────────
export function Desk3D({ position, rotation, isGhost }: Furniture3DProps) {
  return (
    <group position={position} scale={rotation === 1 ? [-1, 1, 1] : [1, 1, 1]}>
      {/* Surface */}
      <mesh position={[0, 0.72, 0]}>
        <boxGeometry args={[1.88, 0.06, 0.86]} />
        <meshStandardMaterial {...mat(WL, isGhost)} />
      </mesh>
      {/* Side panel left */}
      <mesh position={[-0.88, 0.36, 0]}>
        <boxGeometry args={[0.06, 0.72, 0.86]} />
        <meshStandardMaterial {...mat(WM, isGhost)} />
      </mesh>
      {/* Side panel right */}
      <mesh position={[0.88, 0.36, 0]}>
        <boxGeometry args={[0.06, 0.72, 0.86]} />
        <meshStandardMaterial {...mat(WM, isGhost)} />
      </mesh>
      {/* Back bar */}
      <mesh position={[0, 0.36, -0.40]}>
        <boxGeometry args={[1.76, 0.06, 0.06]} />
        <meshStandardMaterial {...mat(WD, isGhost)} />
      </mesh>
      {/* Small monitor/object */}
      <mesh position={[-0.55, 0.84, -0.24]}>
        <boxGeometry args={[0.50, 0.36, 0.06]} />
        <meshStandardMaterial {...mat(BK, isGhost)} />
      </mesh>
      <mesh position={[-0.55, 0.84, -0.22]}>
        <boxGeometry args={[0.44, 0.30, 0.02]} />
        <meshStandardMaterial {...mat(AC3, isGhost)} />
      </mesh>
    </group>
  );
}

// ─── 6. Couch (2×1) ──────────────────────────────────────────────────────────
export function Couch3D({ position, rotation, isGhost }: Furniture3DProps) {
  return (
    <group position={position} scale={rotation === 1 ? [-1, 1, 1] : [1, 1, 1]}>
      {/* Seat */}
      <mesh position={[0, 0.26, 0.10]}>
        <boxGeometry args={[1.78, 0.22, 0.62]} />
        <meshStandardMaterial {...mat(FT, isGhost)} />
      </mesh>
      {/* Back */}
      <mesh position={[0, 0.52, -0.28]}>
        <boxGeometry args={[1.78, 0.52, 0.18]} />
        <meshStandardMaterial {...mat(FT, isGhost)} />
      </mesh>
      {/* Armrest left */}
      <mesh position={[-0.86, 0.44, 0]}>
        <boxGeometry args={[0.12, 0.44, 0.80]} />
        <meshStandardMaterial {...mat(FT, isGhost)} />
      </mesh>
      {/* Armrest right */}
      <mesh position={[0.86, 0.44, 0]}>
        <boxGeometry args={[0.12, 0.44, 0.80]} />
        <meshStandardMaterial {...mat(FT, isGhost)} />
      </mesh>
      {/* Cushions */}
      <mesh position={[-0.44, 0.38, 0.12]}>
        <boxGeometry args={[0.76, 0.10, 0.58]} />
        <meshStandardMaterial {...mat(FL, isGhost)} />
      </mesh>
      <mesh position={[0.44, 0.38, 0.12]}>
        <boxGeometry args={[0.76, 0.10, 0.58]} />
        <meshStandardMaterial {...mat(FL, isGhost)} />
      </mesh>
      {/* Legs */}
      {([ [-0.80, 0.30], [0.80, 0.30], [-0.80, -0.28], [0.80, -0.28] ] as [number,number][]).map(([lx,lz], i) => (
        <mesh key={i} position={[lx, 0.04, lz]}>
          <boxGeometry args={[0.08, 0.08, 0.08]} />
          <meshStandardMaterial {...mat(WD, isGhost)} />
        </mesh>
      ))}
    </group>
  );
}

// ─── 7. TvStand (2×1) ────────────────────────────────────────────────────────
export function TvStand3D({ position, rotation, isGhost }: Furniture3DProps) {
  return (
    <group position={position} scale={rotation === 1 ? [-1, 1, 1] : [1, 1, 1]}>
      {/* Cabinet */}
      <mesh position={[0, 0.28, 0]}>
        <boxGeometry args={[1.86, 0.52, 0.80]} />
        <meshStandardMaterial {...mat(WM, isGhost)} />
      </mesh>
      {/* Top */}
      <mesh position={[0, 0.56, 0]}>
        <boxGeometry args={[1.90, 0.06, 0.84]} />
        <meshStandardMaterial {...mat(WL, isGhost)} />
      </mesh>
      {/* Handles */}
      {[-0.50, 0.50].map((x, i) => (
        <mesh key={i} position={[x, 0.30, 0.41]}>
          <boxGeometry args={[0.20, 0.04, 0.04]} />
          <meshStandardMaterial {...mat(AC1, isGhost)} />
        </mesh>
      ))}
      {/* TV screen (back) */}
      <mesh position={[0, 1.08, -0.34]}>
        <boxGeometry args={[1.60, 0.90, 0.07]} />
        <meshStandardMaterial {...mat(BK, isGhost)} />
      </mesh>
      <mesh position={[0, 1.08, -0.30]}>
        <boxGeometry args={[1.50, 0.80, 0.02]} />
        <meshStandardMaterial {...mat(AC3, isGhost)} />
      </mesh>
    </group>
  );
}

// ─── 8. Bookshelf (1×2) ──────────────────────────────────────────────────────
export function Bookshelf3D({ position, rotation, isGhost }: Furniture3DProps) {
  const shelfColors = ["#C04040", "#4080C0", "#40A040", "#C09040", "#8040C0", "#C06040"];
  return (
    <group position={position} scale={rotation === 1 ? [-1, 1, 1] : [1, 1, 1]}>
      {/* Frame */}
      <mesh position={[0, 0.78, 0]}>
        <boxGeometry args={[0.84, 1.52, 1.86]} />
        <meshStandardMaterial {...mat(WD, isGhost)} />
      </mesh>
      {/* Shelves */}
      {[0.20, 0.58, 0.96, 1.34].map((y, i) => (
        <mesh key={i} position={[0.42, y, 0]}>
          <boxGeometry args={[0.78, 0.05, 1.80]} />
          <meshStandardMaterial {...mat(WM, isGhost)} />
        </mesh>
      ))}
      {/* Books on each shelf */}
      {[0.20, 0.58, 0.96].map((sy, si) =>
        shelfColors.slice(0, si === 1 ? 5 : 4).map((c, bi) => (
          <mesh key={`${si}-${bi}`} position={[0.42, sy + 0.14, -0.78 + bi * 0.30]}>
            <boxGeometry args={[0.70, 0.24, 0.10]} />
            <meshStandardMaterial {...mat(c, isGhost)} />
          </mesh>
        ))
      )}
    </group>
  );
}

// ─── 9. PlantBig (1×1) ───────────────────────────────────────────────────────
export function PlantBig3D({ position, rotation, isGhost }: Furniture3DProps) {
  return (
    <group position={position} scale={rotation === 1 ? [-1, 1, 1] : [1, 1, 1]}>
      {/* Pot base */}
      <mesh position={[0, 0.14, 0]}>
        <cylinderGeometry args={[0.22, 0.26, 0.28, 12]} />
        <meshStandardMaterial {...mat(PT, isGhost)} />
      </mesh>
      {/* Pot rim */}
      <mesh position={[0, 0.29, 0]}>
        <cylinderGeometry args={[0.24, 0.22, 0.04, 12]} />
        <meshStandardMaterial {...mat(WD, isGhost)} />
      </mesh>
      {/* Soil */}
      <mesh position={[0, 0.30, 0]}>
        <cylinderGeometry args={[0.20, 0.20, 0.04, 12]} />
        <meshStandardMaterial {...mat("#4A3018", isGhost)} />
      </mesh>
      {/* Stem */}
      <mesh position={[0, 0.52, 0]}>
        <cylinderGeometry args={[0.04, 0.04, 0.44, 8]} />
        <meshStandardMaterial {...mat(PD, isGhost)} />
      </mesh>
      {/* Foliage lower */}
      <mesh position={[0, 0.75, 0]}>
        <sphereGeometry args={[0.32, 10, 8]} />
        <meshStandardMaterial {...mat(PD, isGhost)} />
      </mesh>
      {/* Foliage upper */}
      <mesh position={[0.05, 0.98, -0.05]}>
        <sphereGeometry args={[0.24, 10, 8]} />
        <meshStandardMaterial {...mat(PL, isGhost)} />
      </mesh>
    </group>
  );
}

// ─── 10. BedDouble (2×2) ─────────────────────────────────────────────────────
export function BedDouble3D({ position, rotation, isGhost }: Furniture3DProps) {
  return (
    <group position={position} scale={rotation === 1 ? [-1, 1, 1] : [1, 1, 1]}>
      {/* Frame */}
      <mesh position={[0, 0.09, 0]}>
        <boxGeometry args={[1.9, 0.18, 1.88]} />
        <meshStandardMaterial {...mat(WM, isGhost)} />
      </mesh>
      {/* Headboard */}
      <mesh position={[-0.92, 0.55, 0]}>
        <boxGeometry args={[0.10, 0.92, 1.88]} />
        <meshStandardMaterial {...mat(WD, isGhost)} />
      </mesh>
      {/* Headboard rail */}
      <mesh position={[-0.92, 1.02, 0]}>
        <boxGeometry args={[0.14, 0.08, 1.92]} />
        <meshStandardMaterial {...mat(WV, isGhost)} />
      </mesh>
      {/* Footboard */}
      <mesh position={[0.92, 0.32, 0]}>
        <boxGeometry args={[0.10, 0.46, 1.88]} />
        <meshStandardMaterial {...mat(WD, isGhost)} />
      </mesh>
      {/* Mattress */}
      <mesh position={[0.04, 0.28, 0]}>
        <boxGeometry args={[1.62, 0.20, 1.78]} />
        <meshStandardMaterial {...mat(FC, isGhost)} />
      </mesh>
      {/* Pillows */}
      {[-0.52, 0.52].map((z, i) => (
        <mesh key={i} position={[-0.58, 0.42, z]}>
          <boxGeometry args={[0.50, 0.12, 0.72]} />
          <meshStandardMaterial {...mat(FW, isGhost)} />
        </mesh>
      ))}
      {/* Duvet */}
      <mesh position={[0.30, 0.42, 0]}>
        <boxGeometry args={[1.0, 0.14, 1.74]} />
        <meshStandardMaterial {...mat(FB, isGhost)} />
      </mesh>
    </group>
  );
}

// ─── 11. RugRound (2×2) ──────────────────────────────────────────────────────
export function RugRound3D({ position, rotation, isGhost }: Furniture3DProps) {
  return (
    <group position={position} scale={rotation === 1 ? [-1, 1, 1] : [1, 1, 1]}>
      {/* Rug base */}
      <mesh position={[0, 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.88, 0.88, 0.03, 24]} />
        <meshStandardMaterial {...mat("#C4825A", isGhost)} />
      </mesh>
      {/* Inner pattern */}
      <mesh position={[0, 0.025, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.60, 0.60, 0.01, 24]} />
        <meshStandardMaterial {...mat("#8A4A28", isGhost)} />
      </mesh>
      <mesh position={[0, 0.03, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.30, 0.30, 0.01, 24]} />
        <meshStandardMaterial {...mat("#C4825A", isGhost)} />
      </mesh>
    </group>
  );
}

// ─── 12. CoffeeTable (2×1) ───────────────────────────────────────────────────
export function CoffeeTable3D({ position, rotation, isGhost }: Furniture3DProps) {
  return (
    <group position={position} scale={rotation === 1 ? [-1, 1, 1] : [1, 1, 1]}>
      {/* Surface */}
      <mesh position={[0, 0.40, 0]}>
        <boxGeometry args={[1.80, 0.06, 0.82]} />
        <meshStandardMaterial {...mat(WL, isGhost)} />
      </mesh>
      {/* Legs */}
      {([ [-0.82, -0.34], [0.82, -0.34], [-0.82, 0.34], [0.82, 0.34] ] as [number,number][]).map(([lx,lz], i) => (
        <mesh key={i} position={[lx, 0.20, lz]}>
          <boxGeometry args={[0.06, 0.40, 0.06]} />
          <meshStandardMaterial {...mat(WD, isGhost)} />
        </mesh>
      ))}
      {/* Lower shelf */}
      <mesh position={[0, 0.12, 0]}>
        <boxGeometry args={[1.60, 0.04, 0.62]} />
        <meshStandardMaterial {...mat(WM, isGhost)} />
      </mesh>
    </group>
  );
}

// ─── 13. Fireplace (2×1) ─────────────────────────────────────────────────────
export function Fireplace3D({ position, rotation, isGhost }: Furniture3DProps) {
  return (
    <group position={position} scale={rotation === 1 ? [-1, 1, 1] : [1, 1, 1]}>
      {/* Main body */}
      <mesh position={[0, 0.55, 0]}>
        <boxGeometry args={[1.88, 1.06, 0.80]} />
        <meshStandardMaterial {...mat(AC2, isGhost)} />
      </mesh>
      {/* Opening recess */}
      <mesh position={[0.45, 0.36, 0]}>
        <boxGeometry args={[1.30, 0.62, 0.06]} />
        <meshStandardMaterial {...mat(BK, isGhost)} />
      </mesh>
      {/* Mantle */}
      <mesh position={[0, 1.10, 0]}>
        <boxGeometry args={[1.96, 0.10, 0.88]} />
        <meshStandardMaterial {...mat(WD, isGhost)} />
      </mesh>
      {/* Fire (orange) */}
      <mesh position={[0.46, 0.30, 0]}>
        <boxGeometry args={[1.0, 0.30, 0.04]} />
        <meshStandardMaterial color={OR} transparent opacity={isGhost ? 0.3 : 0.85} />
      </mesh>
      {/* Fire (red) */}
      <mesh position={[0.46, 0.18, 0]}>
        <boxGeometry args={[0.70, 0.16, 0.04]} />
        <meshStandardMaterial color={RD} transparent opacity={isGhost ? 0.3 : 0.75} />
      </mesh>
    </group>
  );
}

// ─── 14. Aquarium (2×1) ──────────────────────────────────────────────────────
export function Aquarium3D({ position, rotation, isGhost }: Furniture3DProps) {
  return (
    <group position={position} scale={rotation === 1 ? [-1, 1, 1] : [1, 1, 1]}>
      {/* Stand */}
      <mesh position={[0, 0.18, 0]}>
        <boxGeometry args={[1.86, 0.32, 0.78]} />
        <meshStandardMaterial {...mat(WD, isGhost)} />
      </mesh>
      {/* Frame */}
      <mesh position={[0, 0.56, 0]}>
        <boxGeometry args={[1.82, 0.46, 0.74]} />
        <meshStandardMaterial {...mat(DG, isGhost)} />
      </mesh>
      {/* Water */}
      <mesh position={[0, 0.56, 0]}>
        <boxGeometry args={[1.72, 0.38, 0.64]} />
        <meshStandardMaterial color={AW} transparent opacity={isGhost ? 0.25 : 0.5} />
      </mesh>
      {/* Gravel / bottom */}
      <mesh position={[0, 0.36, 0]}>
        <boxGeometry args={[1.72, 0.04, 0.64]} />
        <meshStandardMaterial {...mat("#6A5A3A", isGhost)} />
      </mesh>
      {/* Top lid */}
      <mesh position={[0, 0.82, 0]}>
        <boxGeometry args={[1.84, 0.06, 0.76]} />
        <meshStandardMaterial {...mat(DG, isGhost)} />
      </mesh>
    </group>
  );
}

// ─── 15. Fridge (1×1) ────────────────────────────────────────────────────────
export function Fridge3D({ position, rotation, isGhost }: Furniture3DProps) {
  return (
    <group position={position} scale={rotation === 1 ? [-1, 1, 1] : [1, 1, 1]}>
      {/* Body */}
      <mesh position={[0, 0.75, 0]}>
        <boxGeometry args={[0.80, 1.46, 0.78]} />
        <meshStandardMaterial {...mat(WH, isGhost)} />
      </mesh>
      {/* Door split */}
      <mesh position={[0.41, 0.90, 0]}>
        <boxGeometry args={[0.02, 1.26, 0.76]} />
        <meshStandardMaterial {...mat(LG, isGhost)} />
      </mesh>
      {/* Freezer door handle */}
      <mesh position={[0.41, 1.28, -0.22]}>
        <boxGeometry args={[0.05, 0.08, 0.30]} />
        <meshStandardMaterial {...mat(DG, isGhost)} />
      </mesh>
      {/* Fridge door handle */}
      <mesh position={[0.41, 0.60, -0.22]}>
        <boxGeometry args={[0.05, 0.08, 0.30]} />
        <meshStandardMaterial {...mat(DG, isGhost)} />
      </mesh>
      {/* Base */}
      <mesh position={[0, 0.03, 0]}>
        <boxGeometry args={[0.82, 0.06, 0.80]} />
        <meshStandardMaterial {...mat(LG, isGhost)} />
      </mesh>
    </group>
  );
}

// ─── 16. Stove (1×1) ─────────────────────────────────────────────────────────
export function Stove3D({ position, rotation, isGhost }: Furniture3DProps) {
  return (
    <group position={position} scale={rotation === 1 ? [-1, 1, 1] : [1, 1, 1]}>
      {/* Body */}
      <mesh position={[0, 0.44, 0]}>
        <boxGeometry args={[0.82, 0.84, 0.80]} />
        <meshStandardMaterial {...mat(LG, isGhost)} />
      </mesh>
      {/* Top surface (dark) */}
      <mesh position={[0, 0.87, 0]}>
        <boxGeometry args={[0.82, 0.04, 0.80]} />
        <meshStandardMaterial {...mat(DG, isGhost)} />
      </mesh>
      {/* Burners */}
      {([ [-0.22, -0.22], [0.22, -0.22], [-0.22, 0.22], [0.22, 0.22] ] as [number,number][]).map(([bx,bz], i) => (
        <mesh key={i} position={[bx, 0.91, bz]} rotation={[-Math.PI/2, 0, 0]}>
          <cylinderGeometry args={[0.10, 0.10, 0.02, 10]} />
          <meshStandardMaterial {...mat(BK, isGhost)} />
        </mesh>
      ))}
      {/* Control knobs front */}
      {[-0.25, 0, 0.25].map((z, i) => (
        <mesh key={i} position={[0.42, 0.58, z]} rotation={[0, 0, Math.PI/2]}>
          <cylinderGeometry args={[0.04, 0.04, 0.06, 8]} />
          <meshStandardMaterial {...mat(DG, isGhost)} />
        </mesh>
      ))}
    </group>
  );
}

// ─── 17. Counter (2×1) ───────────────────────────────────────────────────────
export function Counter3D({ position, rotation, isGhost }: Furniture3DProps) {
  return (
    <group position={position} scale={rotation === 1 ? [-1, 1, 1] : [1, 1, 1]}>
      {/* Cabinet body */}
      <mesh position={[0, 0.42, 0]}>
        <boxGeometry args={[1.86, 0.80, 0.84]} />
        <meshStandardMaterial {...mat(WM, isGhost)} />
      </mesh>
      {/* Countertop */}
      <mesh position={[0, 0.85, 0]}>
        <boxGeometry args={[1.90, 0.06, 0.88]} />
        <meshStandardMaterial {...mat(WH, isGhost)} />
      </mesh>
      {/* Backsplash */}
      <mesh position={[0, 1.0, -0.40]}>
        <boxGeometry args={[1.88, 0.30, 0.04]} />
        <meshStandardMaterial {...mat(LG, isGhost)} />
      </mesh>
      {/* Drawer handles */}
      {[-0.50, 0.50].map((x, i) => (
        <mesh key={i} position={[x, 0.55, 0.43]}>
          <boxGeometry args={[0.30, 0.04, 0.04]} />
          <meshStandardMaterial {...mat(AC1, isGhost)} />
        </mesh>
      ))}
    </group>
  );
}

// ─── 18. KitchenTable (2×2) ──────────────────────────────────────────────────
export function KitchenTable3D({ position, rotation, isGhost }: Furniture3DProps) {
  return (
    <group position={position} scale={rotation === 1 ? [-1, 1, 1] : [1, 1, 1]}>
      {/* Surface */}
      <mesh position={[0, 0.72, 0]}>
        <boxGeometry args={[1.84, 0.08, 1.84]} />
        <meshStandardMaterial {...mat(WL, isGhost)} />
      </mesh>
      {/* Legs */}
      {([ [-0.84, -0.84], [0.84, -0.84], [-0.84, 0.84], [0.84, 0.84] ] as [number,number][]).map(([lx,lz], i) => (
        <mesh key={i} position={[lx, 0.36, lz]}>
          <boxGeometry args={[0.08, 0.72, 0.08]} />
          <meshStandardMaterial {...mat(WD, isGhost)} />
        </mesh>
      ))}
    </group>
  );
}

// ─── 19. Bathtub (2×1) ───────────────────────────────────────────────────────
export function Bathtub3D({ position, rotation, isGhost }: Furniture3DProps) {
  return (
    <group position={position} scale={rotation === 1 ? [-1, 1, 1] : [1, 1, 1]}>
      {/* Outer shell */}
      <mesh position={[0, 0.28, 0]}>
        <boxGeometry args={[1.86, 0.52, 0.82]} />
        <meshStandardMaterial {...mat(WH, isGhost)} />
      </mesh>
      {/* Inner basin */}
      <mesh position={[0, 0.40, 0]}>
        <boxGeometry args={[1.68, 0.30, 0.64]} />
        <meshStandardMaterial color={AW} transparent opacity={isGhost ? 0.2 : 0.4} />
      </mesh>
      {/* Faucet */}
      <mesh position={[-0.80, 0.58, -0.20]}>
        <cylinderGeometry args={[0.04, 0.04, 0.22, 8]} />
        <meshStandardMaterial {...mat(DG, isGhost)} />
      </mesh>
      <mesh position={[-0.80, 0.70, -0.20]} rotation={[Math.PI/2, 0, 0]}>
        <cylinderGeometry args={[0.025, 0.025, 0.18, 8]} />
        <meshStandardMaterial {...mat(DG, isGhost)} />
      </mesh>
    </group>
  );
}

// ─── 20. Toilet (1×1) ────────────────────────────────────────────────────────
export function Toilet3D({ position, rotation, isGhost }: Furniture3DProps) {
  return (
    <group position={position} scale={rotation === 1 ? [-1, 1, 1] : [1, 1, 1]}>
      {/* Tank */}
      <mesh position={[0, 0.42, -0.28]}>
        <boxGeometry args={[0.38, 0.52, 0.18]} />
        <meshStandardMaterial {...mat(WH, isGhost)} />
      </mesh>
      {/* Tank lid */}
      <mesh position={[0, 0.70, -0.28]}>
        <boxGeometry args={[0.40, 0.06, 0.20]} />
        <meshStandardMaterial {...mat(WH, isGhost)} />
      </mesh>
      {/* Bowl */}
      <mesh position={[0, 0.26, 0.04]}>
        <boxGeometry args={[0.40, 0.48, 0.54]} />
        <meshStandardMaterial {...mat(WH, isGhost)} />
      </mesh>
      {/* Seat */}
      <mesh position={[0, 0.52, 0.04]}>
        <boxGeometry args={[0.38, 0.04, 0.50]} />
        <meshStandardMaterial {...mat(LG, isGhost)} />
      </mesh>
    </group>
  );
}

// ─── 21. Sink (1×1) ──────────────────────────────────────────────────────────
export function Sink3D({ position, rotation, isGhost }: Furniture3DProps) {
  return (
    <group position={position} scale={rotation === 1 ? [-1, 1, 1] : [1, 1, 1]}>
      {/* Cabinet */}
      <mesh position={[0, 0.32, 0]}>
        <boxGeometry args={[0.78, 0.60, 0.58]} />
        <meshStandardMaterial {...mat(WM, isGhost)} />
      </mesh>
      {/* Basin */}
      <mesh position={[0, 0.65, 0]}>
        <boxGeometry args={[0.70, 0.08, 0.50]} />
        <meshStandardMaterial {...mat(WH, isGhost)} />
      </mesh>
      {/* Basin inside */}
      <mesh position={[0, 0.63, 0]}>
        <boxGeometry args={[0.56, 0.06, 0.36]} />
        <meshStandardMaterial color={AW} transparent opacity={isGhost ? 0.2 : 0.35} />
      </mesh>
      {/* Faucet */}
      <mesh position={[0, 0.80, -0.18]}>
        <cylinderGeometry args={[0.025, 0.025, 0.26, 8]} />
        <meshStandardMaterial {...mat(DG, isGhost)} />
      </mesh>
      <mesh position={[0, 0.94, -0.08]} rotation={[Math.PI/3, 0, 0]}>
        <cylinderGeometry args={[0.022, 0.022, 0.20, 8]} />
        <meshStandardMaterial {...mat(DG, isGhost)} />
      </mesh>
    </group>
  );
}

// ─── 22. Fountain (2×2) ──────────────────────────────────────────────────────
export function Fountain3D({ position, rotation, isGhost }: Furniture3DProps) {
  return (
    <group position={position} scale={rotation === 1 ? [-1, 1, 1] : [1, 1, 1]}>
      {/* Base pool */}
      <mesh position={[0, 0.10, 0]}>
        <cylinderGeometry args={[0.88, 0.88, 0.20, 16]} />
        <meshStandardMaterial {...mat(DG, isGhost)} />
      </mesh>
      {/* Water in pool */}
      <mesh position={[0, 0.19, 0]}>
        <cylinderGeometry args={[0.80, 0.80, 0.04, 16]} />
        <meshStandardMaterial color={AW} transparent opacity={isGhost ? 0.2 : 0.5} />
      </mesh>
      {/* Middle column */}
      <mesh position={[0, 0.42, 0]}>
        <cylinderGeometry args={[0.12, 0.16, 0.44, 10]} />
        <meshStandardMaterial {...mat(DG, isGhost)} />
      </mesh>
      {/* Middle tier */}
      <mesh position={[0, 0.65, 0]}>
        <cylinderGeometry args={[0.50, 0.50, 0.12, 16]} />
        <meshStandardMaterial {...mat(DG, isGhost)} />
      </mesh>
      {/* Top column */}
      <mesh position={[0, 0.82, 0]}>
        <cylinderGeometry args={[0.07, 0.10, 0.24, 8]} />
        <meshStandardMaterial {...mat(DG, isGhost)} />
      </mesh>
      {/* Top basin */}
      <mesh position={[0, 0.96, 0]}>
        <cylinderGeometry args={[0.28, 0.28, 0.08, 12]} />
        <meshStandardMaterial {...mat(DG, isGhost)} />
      </mesh>
      {/* Water stream */}
      <mesh position={[0, 1.06, 0]}>
        <cylinderGeometry args={[0.02, 0.05, 0.20, 8]} />
        <meshStandardMaterial color={AW} transparent opacity={isGhost ? 0.2 : 0.6} />
      </mesh>
    </group>
  );
}

// ─── 23. Bench (2×1) ─────────────────────────────────────────────────────────
export function Bench3D({ position, rotation, isGhost }: Furniture3DProps) {
  return (
    <group position={position} scale={rotation === 1 ? [-1, 1, 1] : [1, 1, 1]}>
      {/* Seat */}
      <mesh position={[0, 0.44, 0]}>
        <boxGeometry args={[1.82, 0.10, 0.50]} />
        <meshStandardMaterial {...mat(WM, isGhost)} />
      </mesh>
      {/* Legs */}
      {([ [-0.80, -0.18], [0.80, -0.18], [-0.80, 0.18], [0.80, 0.18] ] as [number,number][]).map(([lx,lz], i) => (
        <mesh key={i} position={[lx, 0.22, lz]}>
          <boxGeometry args={[0.10, 0.44, 0.10]} />
          <meshStandardMaterial {...mat(WD, isGhost)} />
        </mesh>
      ))}
      {/* Support bar */}
      <mesh position={[0, 0.16, 0]}>
        <boxGeometry args={[1.60, 0.06, 0.08]} />
        <meshStandardMaterial {...mat(WD, isGhost)} />
      </mesh>
    </group>
  );
}

// ─── 24. Tree (1×1) ──────────────────────────────────────────────────────────
export function Tree3D({ position, rotation, isGhost }: Furniture3DProps) {
  return (
    <group position={position} scale={rotation === 1 ? [-1, 1, 1] : [1, 1, 1]}>
      {/* Trunk */}
      <mesh position={[0, 0.32, 0]}>
        <cylinderGeometry args={[0.08, 0.12, 0.64, 8]} />
        <meshStandardMaterial {...mat(WV, isGhost)} />
      </mesh>
      {/* Foliage - lower */}
      <mesh position={[0, 0.78, 0]}>
        <sphereGeometry args={[0.34, 10, 8]} />
        <meshStandardMaterial {...mat(PD, isGhost)} />
      </mesh>
      {/* Foliage - upper */}
      <mesh position={[0.04, 1.02, -0.04]}>
        <sphereGeometry args={[0.26, 10, 8]} />
        <meshStandardMaterial {...mat(PL, isGhost)} />
      </mesh>
      {/* Foliage - side */}
      <mesh position={[-0.14, 0.88, 0.08]}>
        <sphereGeometry args={[0.20, 10, 8]} />
        <meshStandardMaterial {...mat(FG, isGhost)} />
      </mesh>
    </group>
  );
}

// ─── 25. Flowerbed (2×1) ─────────────────────────────────────────────────────
export function Flowerbed3D({ position, rotation, isGhost }: Furniture3DProps) {
  const flowerColors = ["#FF6688", "#FFAA44", "#CC66FF", "#FF6688"];
  return (
    <group position={position} scale={rotation === 1 ? [-1, 1, 1] : [1, 1, 1]}>
      {/* Bed box */}
      <mesh position={[0, 0.12, 0]}>
        <boxGeometry args={[1.82, 0.22, 0.82]} />
        <meshStandardMaterial {...mat(PT, isGhost)} />
      </mesh>
      {/* Soil */}
      <mesh position={[0, 0.24, 0]}>
        <boxGeometry args={[1.74, 0.04, 0.74]} />
        <meshStandardMaterial {...mat("#4A3018", isGhost)} />
      </mesh>
      {/* Flowers */}
      {[[-0.65, 0], [-0.22, 0], [0.22, 0], [0.65, 0]].map(([fx, fz], i) => (
        <group key={i} position={[fx as number, 0.26, fz as number]}>
          <mesh position={[0, 0.10, 0]}>
            <cylinderGeometry args={[0.02, 0.02, 0.20, 6]} />
            <meshStandardMaterial {...mat(PD, isGhost)} />
          </mesh>
          <mesh position={[0, 0.22, 0]}>
            <sphereGeometry args={[0.08, 8, 6]} />
            <meshStandardMaterial {...mat(flowerColors[i], isGhost)} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

// ─── Component map ────────────────────────────────────────────────────────────
export const FURNITURE_3D_COMPONENTS: Record<string, React.FC<Furniture3DProps>> = {
  bed_basic: BedBasic3D,
  nightstand: Nightstand3D,
  lamp_floor: LampFloor3D,
  wardrobe: Wardrobe3D,
  desk: Desk3D,
  couch: Couch3D,
  tv_stand: TvStand3D,
  bookshelf: Bookshelf3D,
  plant_big: PlantBig3D,
  bed_double: BedDouble3D,
  rug_round: RugRound3D,
  coffee_table: CoffeeTable3D,
  fireplace: Fireplace3D,
  aquarium: Aquarium3D,
  fridge: Fridge3D,
  stove: Stove3D,
  counter: Counter3D,
  kitchen_table: KitchenTable3D,
  bathtub: Bathtub3D,
  toilet: Toilet3D,
  sink: Sink3D,
  fountain: Fountain3D,
  bench: Bench3D,
  tree: Tree3D,
  flowerbed: Flowerbed3D,
};
