"use client";
import { Canvas } from "@react-three/fiber";
import BedBasic3D from "./BedBasic3D";

export default function BedTest3DCanvas() {
  return (
    <Canvas
      orthographic
      camera={{ position: [10, 10, 10], zoom: 60, near: 0.1, far: 200 }}
      style={{ width: 400, height: 400, background: "transparent" }}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[8, 12, 6]} intensity={1.2} />
      <directionalLight position={[-4, 4, -4]} intensity={0.3} />
      <BedBasic3D position={[0, 0, 0]} />
    </Canvas>
  );
}
