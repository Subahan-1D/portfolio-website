'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Suspense, useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
import { useScroll } from 'framer-motion';

function DataClusterVisualization() {
  const groupRef = useRef<THREE.Group>(null);
  const particlesRef = useRef<THREE.Points>(null);
  const { mouse } = useThree();
  const { scrollY } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Create particle positions
  const particleCount = 300;
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);
  const speeds = new Float32Array(particleCount);
  const targetPositions = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount; i++) {
    const i3 = i * 3;

    // Initial positions in a sphere
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(Math.random() * 2 - 1);
    const radius = 4 + Math.random() * 3;

    positions[i3] = Math.sin(phi) * Math.cos(theta) * radius;
    positions[i3 + 1] = Math.sin(phi) * Math.sin(theta) * radius;
    positions[i3 + 2] = Math.cos(phi) * radius;

    // Target positions (tighter cluster)
    const targetTheta = Math.random() * Math.PI * 2;
    const targetPhi = Math.acos(Math.random() * 2 - 1);
    const targetRadius = 2;

    targetPositions[i3] = Math.sin(targetPhi) * Math.cos(targetTheta) * targetRadius;
    targetPositions[i3 + 1] = Math.sin(targetPhi) * Math.sin(targetTheta) * targetRadius;
    targetPositions[i3 + 2] = Math.cos(targetPhi) * targetRadius;

    // Colors
    const hue = Math.random() * 0.3 + 0.7;
    const color = new THREE.Color().setHSL(hue, 0.8, 0.6);
    colors[i3] = color.r;
    colors[i3 + 1] = color.g;
    colors[i3 + 2] = color.b;

    speeds[i] = Math.random() * 0.02 + 0.01;
  }

  // Animation loop
  useFrame(() => {
    if (groupRef.current && particlesRef.current) {
      // Rotate based on mouse position
      groupRef.current.rotation.x = mousePosition.y * 0.5;
      groupRef.current.rotation.y = mousePosition.x * 0.5;

      // Update particle positions
      const positionAttribute = particlesRef.current.geometry.attributes.position;
      const posArray = positionAttribute.array as Float32Array;

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        const speed = speeds[i];

        // Lerp towards target positions
        posArray[i3] += (targetPositions[i3] - posArray[i3]) * speed;
        posArray[i3 + 1] += (targetPositions[i3 + 1] - posArray[i3 + 1]) * speed;
        posArray[i3 + 2] += (targetPositions[i3 + 2] - posArray[i3 + 2]) * speed;

        // Push away from mouse cursor
        const dx = posArray[i3] - mousePosition.x * 3;
        const dy = posArray[i3 + 1] - mousePosition.y * 3;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 2) {
          const strength = (1 - distance / 2) * 0.15;
          posArray[i3] += (dx / distance) * strength;
          posArray[i3 + 1] += (dy / distance) * strength;
        }
      }

      positionAttribute.needsUpdate = true;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central intelligence sphere */}
      <mesh position={[0, 0, 0]}>
        <icosahedronGeometry args={[0.8, 4]} />
        <meshStandardMaterial
          color="#a78bfa"
          emissive="#7c3aed"
          emissiveIntensity={1}
          wireframe={false}
        />
      </mesh>

      {/* Particle points */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particleCount}
            array={positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={particleCount}
            array={colors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.1}
          sizeAttenuation
          vertexColors
          transparent
          opacity={0.8}
        />
      </points>

      {/* Orbiting torus */}
      <mesh rotation={[0.2, 0.3, 0.1]}>
        <torusGeometry args={[3, 0.2, 16, 100]} />
        <meshStandardMaterial
          color="#60a5fa"
          emissive="#3b82f6"
          emissiveIntensity={0.8}
        />
      </mesh>

      {/* Inner rotating ring */}
      <mesh rotation={[0.5, 0.2, 0.3]}>
        <torusGeometry args={[1.5, 0.1, 16, 100]} />
        <meshStandardMaterial
          color="#34d399"
          emissive="#10b981"
          emissiveIntensity={0.6}
        />
      </mesh>
    </group>
  );
}

export default function InteractiveDataCluster() {
  return (
    <Canvas
      className="w-full h-full"
      camera={{ position: [0, 0, 8], fov: 75 }}
      gl={{ alpha: true, antialias: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1.2} color="#fff" />
        <pointLight position={[-10, -10, -10]} intensity={0.6} color="#a78bfa" />

        <DataClusterVisualization />
      </Suspense>
    </Canvas>
  );
}
