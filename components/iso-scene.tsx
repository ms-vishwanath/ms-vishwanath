"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Edges, OrthographicCamera } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const N = 9;
const GAP = 1.15;

// Isometric "city of services": each block is a node; a few are highlighted
// and pulse like live services. Heights ripple outward and react to the cursor.
function Blocks() {
  const group = useRef<THREE.Group>(null);
  const meshes = useRef<THREE.Mesh[]>([]);
  const { pointer } = useThree();

  const cells = useMemo(() => {
    const out: { x: number; z: number; d: number; hot: boolean; seed: number }[] = [];
    const half = (N - 1) / 2;
    for (let i = 0; i < N; i++)
      for (let j = 0; j < N; j++) {
        const x = (i - half) * GAP;
        const z = (j - half) * GAP;
        const d = Math.hypot(i - half, j - half);
        if (d > half + 0.6) continue; // round footprint
        out.push({ x, z, d, hot: (i * 7 + j * 3) % 11 === 0, seed: Math.random() * 10 });
      }
    return out;
  }, []);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    const px = pointer.x * 5;
    const pz = -pointer.y * 5;
    meshes.current.forEach((m, k) => {
      const c = cells[k];
      if (!m) return;
      const wave = Math.sin(t * 1.1 - c.d * 0.7) * 0.5 + 0.5;
      const near = Math.max(0, 1 - Math.hypot(c.x - (px + pz) / 1.4, c.z - (pz - px) / 1.4) / 3);
      const h = 0.25 + wave * 1.2 + near * 1.6 + (c.hot ? 0.8 + Math.sin(t * 2 + c.seed) * 0.3 : 0);
      m.scale.y = THREE.MathUtils.lerp(m.scale.y, h, 0.08);
      m.position.y = m.scale.y / 2;
    });
    if (group.current) group.current.rotation.y = Math.sin(t * 0.15) * 0.12;
  });

  return (
    <group ref={group}>
      {cells.map((c, k) => (
        <mesh
          key={k}
          position={[c.x, 0.5, c.z]}
          ref={(el) => {
            if (el) meshes.current[k] = el;
          }}
        >
          <boxGeometry args={[0.9, 1, 0.9]} />
          <meshStandardMaterial
            color={c.hot ? "#ffffff" : "#0d0d0f"}
            emissive={c.hot ? "#ffffff" : "#000000"}
            emissiveIntensity={c.hot ? 0.35 : 0}
            roughness={0.6}
            metalness={0.1}
          />
          <Edges color={c.hot ? "#ffffff" : "#3a3a40"} threshold={15} />
        </mesh>
      ))}
    </group>
  );
}

function Zoom() {
  const { camera, size } = useThree();
  useFrame(() => {
    const z = Math.min(size.width, size.height * 1.3) / 13;
    if (Math.abs(camera.zoom - z) > 0.01) {
      camera.zoom = z;
      camera.updateProjectionMatrix();
    }
  });
  return null;
}

export default function IsoScene() {
  return (
    <Canvas dpr={[1, 1.75]} gl={{ antialias: true, alpha: true }}>
      <OrthographicCamera makeDefault position={[12, 11, 12]} zoom={46} near={-50} far={100} onUpdate={(c) => c.lookAt(0, 0.6, 0)} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[6, 12, 4]} intensity={1.6} />
      <directionalLight position={[-8, 4, -6]} intensity={0.3} />
      <Blocks />
      <Zoom />
    </Canvas>
  );
}
