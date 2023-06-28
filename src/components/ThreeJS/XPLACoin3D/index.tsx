import React from "react";
import { Canvas } from "@react-three/fiber";
import CoinMesh from "./CoinMesh";

const XPLACoin3D = () => {
  return (
    <Canvas className="h-100">
      <CoinMesh />
    </Canvas>
  );
};

export default XPLACoin3D;
