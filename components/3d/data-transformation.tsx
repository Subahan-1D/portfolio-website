'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense, useEffect, useRef } from 'react';
import { useScroll } from 'framer-motion';
import * as THREE from 'three';

function DataParticles() {
  const groupRef = useRef<THREE.Group>(null);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      if (groupRef.current) {
        groupRef.current.rotation.x = latest * 0.0005;
        groupRef.current.rotation.y = latest * 0.0008;
      }
    });

    return () => unsubscribe();
  }, [scrollY]);

  // Create particles representing raw data
  const particlesCount = 150;
  const particles = Array.from({ length: particlesCount }, (_, i) => ({
    id: i,
    x: (Math.random() - 0.5) * 10,
    y: (Math.random() - 0.5) * 10,
    z: (Math.random() - 0.5) * 10,
    scale: Math.random() * 0.5 + 0.2,
  }));

  return (
    <group ref={groupRef}>
      {/* Raw data particles (scattered) */}
      <group>
        {particles.map((particle) => (
          <mesh key={particle.id} position={[particle.x, particle.y, particle.z]}>
            <sphereGeometry args={[0.1 * particle.scale, 8, 8]} />
            <meshStandardMaterial
              color={`hsl(${270 + Math.random() * 30}, 70%, 50%)`}
              emissive={`hsl(${270}, 70%, 40%)`}
              emissiveIntensity={0.5}
            />
          </mesh>
        ))}
      </group>

      {/* Central intelligence core */}
      <mesh position={[0, 0, 0]}>
        <octahedronGeometry args={[1, 3]} />
        <meshStandardMaterial
          color="#a78bfa"
          emissive="#7c3aed"
          emissiveIntensity={0.8}
          wireframe={false}
        />
      </mesh>

      {/* Rotating rings representing transformation */}
      <group rotation={[0.3, 0.4, 0.1]}>
        <mesh rotation={[0, 0, 0]}>
          <torusGeometry args={[2.5, 0.15, 16, 100]} />
          <meshStandardMaterial
            color="#60a5fa"
            emissive="#3b82f6"
            emissiveIntensity={0.6}
          />
        </mesh>
        <mesh rotation={[0.7, 0.5, 0.3]}>
          <torusGeometry args={[3, 0.1, 16, 100]} />
          <meshStandardMaterial
            color="#34d399"
            emissive="#10b981"
            emissiveIntensity={0.4}
          />
        </mesh>
      </group>

      {/* Connecting lines to center */}
      {particles.slice(0, 20).map((particle, idx) => (
        <lineSegments key={`line-${idx}`}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={2}
              array={new Float32Array([
                particle.x,
                particle.y,
                particle.z,
                0,
                0,
                0,
              ])}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial
            color="#7c3aed"
            transparent
            opacity={0.3}
            linewidth={1}
          />
        </lineSegments>
      ))}
    </group>
  );
}

export default function DataTransformationVisualization() {
  return (
    <Canvas
      className="w-full h-full"
      camera={{ position: [0, 0, 8], fov: 75 }}
      gl={{ alpha: true, antialias: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#fff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#a78bfa" />

        <DataParticles />
      </Suspense>
    </Canvas>
  );
}
