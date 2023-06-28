import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import { TextureLoader } from "three";

function CoinMesh() {
  const mesh = useRef(null);
  const xplaTexture = new TextureLoader().load(
    "/xpla-academy-dev/img/logo512.png"
  );

  useFrame(() => (mesh.current.rotation.y = mesh.current.rotation.z += 0.01)); // #2
  return (
    <>
      <OrbitControls autoRotate={false} enableZoom={false} />
      <ambientLight intensity={1} />
      <directionalLight position={[-1, 0, 1]} intensity={0.5} />
      <mesh ref={mesh} scale={0.7}>
        <cylinderGeometry args={[4.3, 4.3, 0.3, 50]} />
        <meshStandardMaterial
          attach="material"
          color={0x00b1ff}
          map={xplaTexture}
        />
      </mesh>
    </>
  );
}

export default CoinMesh;
