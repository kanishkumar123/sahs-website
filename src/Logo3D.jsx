import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html, useGLTF } from "@react-three/drei";

function GaneshaModel({ position }) {
  const { scene } = useGLTF("public/ganesh_prini.glb"); // Add the path to your GLB file

  return <primitive object={scene} position={position} />;
}

export default function Logo3D() {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />

      {/* Model Loading */}
      <Suspense fallback={<Html>Loading...</Html>}>
        <GaneshaModel position={[0, -1, 0]} />
      </Suspense>

      <OrbitControls enableZoom={true} />
    </Canvas>
  );
}
