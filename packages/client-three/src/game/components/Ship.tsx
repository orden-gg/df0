import { useRef, useState } from 'react';
import { InstancedMeshProps, useFrame } from "@react-three/fiber";
import { InstancedMesh,  } from 'three';

export const Ship = ({ position }: InstancedMeshProps) => {
  const ref = useRef<InstancedMesh>();

  useFrame(() => {
    const ship = ref.current;

    // Обробка руху за допомогою клавіш стрілок
    document.addEventListener('keydown', (event) => {
      const { key } = event;
      const speed = 0.01;

      // Зміна позиції бокса відповідно до клавіші, що була натиснута
      switch (key) {
        case 'ArrowUp':
          ship.position.y += speed;
          break;
        case 'ArrowDown':
          ship.position.y -= speed;
          break;
        case 'ArrowLeft':
          ship.position.x -= speed;
          break;
        case 'ArrowRight':
          ship.position.x += speed;
          break;
        default:
          break;
      }
    });
  });

  return (
    <instancedMesh
      position={position}
      args={[undefined, undefined, 1]}
      ref={ref as any}
      onClick={(e) => { console.log(e)}}
    >
      <cylinderGeometry args={[1, 64, 64]} />
      <meshStandardMaterial color={'cyan'} />
    </instancedMesh>
  );
};