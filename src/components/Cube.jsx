import React from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  RenderTexture,
  Text,
} from "@react-three/drei";

const Cube = () => {
  return (
    <div className=" w-[350px] h-[350px] md:w-[620px] md:h-[620px]">
      <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
        <OrbitControls enableZoom={false} autoRotate />
        <ambientLight intensity={1} />
        <directionalLight position={(3, 2, 1)} />
        <mesh>
          <boxGeometry />
          <meshStandardMaterial>
            <RenderTexture attach="map">
              <PerspectiveCamera makeDefault position={[0, 0, 5]} />
              <color attach="background" args={["#216772"]} />
              <Text fontSize={3}>?</Text>
            </RenderTexture>
          </meshStandardMaterial>
        </mesh>
      </Canvas>
    </div>
  );
};

export default Cube;
