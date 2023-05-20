
import { useRef } from 'react';
import { ThreeElements, useThree } from "@react-three/fiber";
import { Planet } from './Planet';
import { Vector3 } from 'three';

export function Scene(props: ThreeElements["mesh"]) {
  const ref = useRef<THREE.Mesh>(null!);

  return (
    <mesh {...props} ref={ref}>
      <planeGeometry args={[2, 1, 1]} />
      <meshStandardMaterial color="green" />
    </mesh>
  );
}