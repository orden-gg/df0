import { useRef, useState } from 'react';
import { InstancedMeshProps, useFrame } from "@react-three/fiber";
import { InstancedMesh,  } from 'three';

export const Planet = ({ position, size }: InstancedMeshProps) => {
  const ref = useRef<InstancedMesh>();

  return (
    <instancedMesh
      position={position}
      args={[undefined, undefined, 1]}
      ref={ref as any}
    >
      <sphereGeometry args={[size, 64, 64]} />
      <meshStandardMaterial color={'cyan'} />
    </instancedMesh>
  );
};