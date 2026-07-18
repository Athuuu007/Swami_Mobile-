import React, { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PointMaterial, Stars } from '@react-three/drei';
import * as THREE from 'three';

const DotsCircle = ({ isZoomed }) => {
  const groupRef = useRef();
  const pointsRef = useRef();
  const innerPointsRef = useRef();
  
  const particlesCount = 3000;
  
  // Create and store original positions
  const { positions, innerPositions } = useMemo(() => {
    const pos = new Float32Array(particlesCount * 3);
    const innerPos = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      // Golden ratio for evenly distributing points on a sphere
      const phi = Math.acos(-1 + (2 * i) / particlesCount);
      const theta = Math.sqrt(particlesCount * Math.PI) * phi;

      // Randomizing the radius slightly for a thicker "shell"
      const r = 2.5 + (Math.random() - 0.5) * 0.2; 
      
      const x = r * Math.cos(theta) * Math.sin(phi);
      const y = r * Math.sin(theta) * Math.sin(phi);
      const z = r * Math.cos(phi);

      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;
      
      innerPos[i * 3] = x * 0.7;
      innerPos[i * 3 + 1] = y * 0.7;
      innerPos[i * 3 + 2] = z * 0.7;
    }
    return { positions: pos, innerPositions: innerPos };
  }, [particlesCount]);

  // Keep a copy of original positions for the outer shell to revert to
  const originalPositions = useMemo(() => positions.slice(), [positions]);
  
  // Reusable vectors for performance
  const mouse = useMemo(() => new THREE.Vector3(), []);
  const v = useMemo(() => new THREE.Vector3(), []);
  const targetScaleVec = useMemo(() => new THREE.Vector3(1, 1, 1), []);

  useFrame((state, delta) => {
    if (!pointsRef.current || !groupRef.current || !innerPointsRef.current) return;

    // 1. Base auto-rotation for the spheres
    pointsRef.current.rotation.y += delta * 0.15;
    pointsRef.current.rotation.z += delta * 0.05;
    
    innerPointsRef.current.rotation.y -= delta * 0.1;
    innerPointsRef.current.rotation.x -= delta * 0.05;

    // 2. Parallax: tilt the entire group towards the mouse pointer
    const targetX = (state.pointer.y * Math.PI) / 8; // Pointer Y controls Pitch (X-axis)
    const targetY = (state.pointer.x * Math.PI) / 8; // Pointer X controls Yaw (Y-axis)
    
    groupRef.current.rotation.x += (targetX - groupRef.current.rotation.x) * 0.05;
    groupRef.current.rotation.y += (targetY - groupRef.current.rotation.y) * 0.05;

    // 3. Zoom effect orchestrated by Hero.jsx
    const targetScale = isZoomed ? 1.8 : 1.0;
    targetScaleVec.set(targetScale, targetScale, targetScale);
    groupRef.current.scale.lerp(targetScaleVec, delta * 3);

    // 4. Interactive Particle Pushing
    // Map normalized screen coordinates (-1 to 1) to rough world coordinates
    mouse.set(
      (state.pointer.x * state.viewport.width) / 2,
      (state.pointer.y * state.viewport.height) / 2,
      2 // Z offset to push dots on the front hemisphere
    );

    // Convert mouse world coordinates into the local space of the rotating points object
    pointsRef.current.worldToLocal(mouse);

    const positionsArray = pointsRef.current.geometry.attributes.position.array;
    const interactRadius = 1.8; // Radius of mouse influence

    for (let i = 0; i < particlesCount; i++) {
      const i3 = i * 3;
      
      // Fetch original steady position
      const ox = originalPositions[i3];
      const oy = originalPositions[i3 + 1];
      const oz = originalPositions[i3 + 2];
      
      v.set(ox, oy, oz);
      
      // Distance from this point's local origin to local mouse
      const distance = v.distanceTo(mouse);

      if (distance < interactRadius) {
        // Calculate force (closer = stronger push)
        const force = (interactRadius - distance) / interactRadius;
        // Push the particle outwards from the mouse
        v.x += (v.x - mouse.x) * force * 0.8;
        v.y += (v.y - mouse.y) * force * 0.8;
        v.z += (v.z - mouse.z) * force * 0.8;
      }
      
      // Smoothly interpolate current array positions to the target `v`
      positionsArray[i3] += (v.x - positionsArray[i3]) * 0.1;
      positionsArray[i3 + 1] += (v.y - positionsArray[i3 + 1]) * 0.1;
      positionsArray[i3 + 2] += (v.z - positionsArray[i3 + 2]) * 0.1;
    }
    
    // Tell Three.js the buffer needs an update
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <group ref={groupRef}>
        {/* Outer interactive shell */}
        <points ref={pointsRef}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={positions.length / 3}
              array={positions}
              itemSize={3}
            />
          </bufferGeometry>
          <PointMaterial
            transparent
            color="#f59e0b"
            size={0.035}
            sizeAttenuation={true}
            depthWrite={false}
            blending={THREE.AdditiveBlending}
          />
        </points>
        
        {/* Inner non-interactive core (spins opposite) */}
        <points ref={innerPointsRef}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={innerPositions.length / 3}
              array={innerPositions}
              itemSize={3}
            />
          </bufferGeometry>
          <PointMaterial
            transparent
            color="#c084fc"
            size={0.02}
            sizeAttenuation={true}
            depthWrite={false}
            blending={THREE.AdditiveBlending}
            opacity={0.6}
          />
        </points>
      </group>
    </Float>
  );
};

const ThreeCenterpiece = ({ isZoomed = false }) => {
  const [eventSource, setEventSource] = useState(null);

  useEffect(() => {
    // Listen to global window for mouse events so interaction doesn't get blocked by UI z-indexes
    setEventSource(document.body);
  }, []);

  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
      <Canvas 
        camera={{ position: [0, 0, 6], fov: 45 }} 
        style={{ pointerEvents: 'none' }} // Keep this none so it doesn't block DOM clicks
        eventSource={eventSource}
        eventPrefix="client"
      >
        <ambientLight intensity={0.5} />
        <Stars radius={50} depth={50} count={2000} factor={3} saturation={0} fade speed={1} />
        <DotsCircle isZoomed={isZoomed} />
      </Canvas>
    </div>
  );
};

export default ThreeCenterpiece;
