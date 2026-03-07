"use client";

interface Props {
  position: [number, number, number];
}

export default function BedBasic3D({ position }: Props) {
  const wood = "#8B6E52";
  const woodDark = "#6B5040";
  const mattressColor = "#D4A574";
  const pillowColor = "#E8C9A0";
  const duvetColor = "#7B9EC8";

  return (
    <group position={position}>
      {/* Frame - main base */}
      <mesh position={[0, 0.08, 0]} castShadow>
        <boxGeometry args={[2.0, 0.16, 3.2]} />
        <meshStandardMaterial color={wood} />
      </mesh>

      {/* Side rails */}
      <mesh position={[-0.96, 0.22, 0]} castShadow>
        <boxGeometry args={[0.08, 0.12, 3.0]} />
        <meshStandardMaterial color={woodDark} />
      </mesh>
      <mesh position={[0.96, 0.22, 0]} castShadow>
        <boxGeometry args={[0.08, 0.12, 3.0]} />
        <meshStandardMaterial color={woodDark} />
      </mesh>

      {/* Headboard (magasabb) */}
      <mesh position={[0, 0.55, -1.52]} castShadow>
        <boxGeometry args={[2.0, 0.9, 0.12]} />
        <meshStandardMaterial color={wood} />
      </mesh>
      {/* Headboard top rail */}
      <mesh position={[0, 1.02, -1.52]}>
        <boxGeometry args={[2.0, 0.08, 0.16]} />
        <meshStandardMaterial color={woodDark} />
      </mesh>

      {/* Footboard (alacsonyabb) */}
      <mesh position={[0, 0.32, 1.52]} castShadow>
        <boxGeometry args={[2.0, 0.48, 0.12]} />
        <meshStandardMaterial color={wood} />
      </mesh>
      {/* Footboard top rail */}
      <mesh position={[0, 0.58, 1.52]}>
        <boxGeometry args={[2.0, 0.06, 0.16]} />
        <meshStandardMaterial color={woodDark} />
      </mesh>

      {/* Legs */}
      {([ [-0.9, -1.45], [0.9, -1.45], [-0.9, 1.45], [0.9, 1.45] ] as [number, number][]).map(([lx, lz], i) => (
        <mesh key={i} position={[lx, -0.08, lz]}>
          <boxGeometry args={[0.14, 0.16, 0.14]} />
          <meshStandardMaterial color={woodDark} />
        </mesh>
      ))}

      {/* Mattress */}
      <mesh position={[0, 0.32, 0]} castShadow>
        <boxGeometry args={[1.72, 0.22, 2.8]} />
        <meshStandardMaterial color={mattressColor} />
      </mesh>

      {/* Duvet */}
      <mesh position={[0, 0.46, 0.5]} castShadow>
        <boxGeometry args={[1.68, 0.14, 2.0]} />
        <meshStandardMaterial color={duvetColor} />
      </mesh>

      {/* Pillow 1 (bal) */}
      <mesh position={[-0.42, 0.50, -1.05]} castShadow>
        <boxGeometry args={[0.66, 0.14, 0.46]} />
        <meshStandardMaterial color={pillowColor} />
      </mesh>

      {/* Pillow 2 (jobb) */}
      <mesh position={[0.42, 0.50, -1.05]} castShadow>
        <boxGeometry args={[0.66, 0.14, 0.46]} />
        <meshStandardMaterial color={pillowColor} />
      </mesh>
    </group>
  );
}
