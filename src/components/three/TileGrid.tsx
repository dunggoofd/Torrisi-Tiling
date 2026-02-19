import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

function Tiles() {
  const groupRef = useRef<THREE.Group>(null);
  const gridSize = 5;
  const tileSize = 0.9;
  const gap = 0.1;

  const tiles = useMemo(() => {
    const positions: { x: number; z: number; delay: number }[] = [];
    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        positions.push({
          x: (i - (gridSize - 1) / 2) * (tileSize + gap),
          z: (j - (gridSize - 1) / 2) * (tileSize + gap),
          delay: (i + j) * 0.1,
        });
      }
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = Math.PI * -0.1 + Math.sin(state.clock.elapsedTime * 0.3) * 0.02;
      groupRef.current.rotation.y = Math.PI * 0.25 + state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.3}>
      <group ref={groupRef}>
        {tiles.map((tile, index) => (
          <Tile key={index} position={[tile.x, 0, tile.z]} delay={tile.delay} />
        ))}
      </group>
    </Float>
  );
}

function Tile({ position, delay }: { position: [number, number, number]; delay: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const t = state.clock.elapsedTime + delay;
      meshRef.current.position.y = Math.sin(t * 0.8) * 0.05;
    }
  });

  return (
    <mesh ref={meshRef} position={position} castShadow receiveShadow>
      <boxGeometry args={[0.85, 0.08, 0.85]} />
      <meshStandardMaterial
        color="#c9a962"
        metalness={0.1}
        roughness={0.4}
        envMapIntensity={0.5}
      />
    </mesh>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight
        position={[5, 8, 5]}
        intensity={1}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <pointLight position={[-5, 5, -5]} intensity={0.3} color="#ffd699" />
      <Tiles />
    </>
  );
}

interface TileGridProps {
  className?: string;
}

export function TileGrid({ className = "" }: TileGridProps) {
  // Check for reduced motion preference
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReducedMotion) {
    return null;
  }

  return (
    <div className={`${className}`}>
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 4, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
