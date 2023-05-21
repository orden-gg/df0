
import { useRef } from 'react';
import { ThreeElements, useThree } from "@react-three/fiber";
import { Planet } from './Planet';
import { Vector3 } from 'three';
import { WORLD_SIZE } from '../../shared';

export function Scene(props: ThreeElements["mesh"]) {
  const ref = useRef<THREE.Mesh>(null!);

  return (
    <mesh {...props} ref={ref}>
      <planeGeometry args={[WORLD_SIZE, WORLD_SIZE]} />
      <meshStandardMaterial color="green" />
    </mesh>
  );
}