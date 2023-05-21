import WebGPURenderer from "three/addons/renderers/webgpu/WebGPURenderer.js";

import { Canvas, InstancedMeshProps, useFrame, useThree } from "@react-three/fiber";
// import ThreeBox from "../components/ThreeBox";
import { useRef, useState } from "react";
import { InstancedMesh, Vector3 } from "three";
import { PlanetUtils } from '../utils';
import { PlanetCoords } from '../shared/models/planet';
import { WORLD_SIZE } from '../shared';

import { OrbitControls, PivotControls } from '@react-three/drei'
import { Ship, Planet, Scene } from './components';

const CanvasWebGPU = () => {
  const [frameloop, setFrameLoop] = useState<
    "never" | "always" | "demand" | 'once' | undefined
  >("never");

  const planets: PlanetCoords[] = PlanetUtils.generatePlanetData();



  return (
    <Canvas
      shadows
      frameloop={frameloop}
      camera={{ position: [0, 0, 1000], fov: 45 }}
      gl={(canvas) => {
        const renderer = new WebGPURenderer({ canvas });

        renderer.init().then(() => setFrameLoop("always"));
        
        return renderer;
      }}
      style={{ height: "100vh" }}
    >
      <Scene />

      {planets.map(({ x, y }: PlanetCoords, key: number) => 
        <Planet key={key} position={new Vector3(x-500, y-500, 10)} size={5} /> 
      )}
      <OrbitControls makeDefault />

      <Ship />
    </Canvas>
  );
};

export default CanvasWebGPU;