"use client";
import { Canvas } from "@react-three/fiber";
import { OrthographicCamera } from "@react-three/drei";
import BedBasic3D from "./BedBasic3D";

export default function BedTest3DCanvas() {
  return (
    <Canvas
      style={{ width: 400, height: 400, background: "transparent" }}
      gl={{ alpha: true, antialias: true }}
    >
      <OrthographicCamera makeDefault position={[10, 10, 10]} zoom={60} />
      <ambientLight intensity={0.7} />
      <directionalLight position={[8, 12, 6]} intensity={1.2} castShadow />
      <directionalLight position={[-4, 4, -4]} intensity={0.3} />
      <BedBasic3D position={[0, 0, 0]} />
    </Canvas>
  );
}
