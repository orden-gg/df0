import WebGPURenderer from "three/addons/renderers/webgpu/WebGPURenderer.js";

import { Canvas, InstancedMeshProps, useFrame } from "@react-three/fiber";
// import ThreeBox from "../components/ThreeBox";
import { useRef, useState } from "react";
import { InstancedMesh, Vector3 } from "three";

const ThreeBox = (props: InstancedMeshProps) => {
  const ref = useRef<InstancedMesh>();

  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);

  useFrame((state, delta) => {
    if (ref?.current) {
      ref.current.rotation.x += delta;
    }
  });

  return (
    <instancedMesh
      {...props}
      args={[undefined, undefined, 1]}
      ref={ref as any}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "cyan"} />
    </instancedMesh>
  );
};

const CanvasWebGPU = () => {
  const [frameloop, setFrameLoop] = useState<
    "never" | "always" | "demand" | undefined
  >("never");

  return (
    <Canvas
      frameloop={frameloop}
      gl={(canvas) => {
        const renderer = new WebGPURenderer({ canvas });
        renderer.init().then(() => setFrameLoop("always"));
        return renderer;
      }}
      style={{ height: "100vh" }}
    >
      <ambientLight intensity={1} />
      <pointLight position={[10, 10, 10]} />
      <ThreeBox position={new Vector3(-1.2, 0, 0)} />
      <ThreeBox position={new Vector3(1.2, 0, 0)} />
    </Canvas>
  );
};

export default CanvasWebGPU;
