"use client";

import React, { useEffect, useRef, useState } from 'react';
import { Canvas, extend, useFrame } from '@react-three/fiber';
import { useGLTF, useTexture, Environment, Lightformer } from '@react-three/drei';
import {
  BallCollider,
  CuboidCollider,
  Physics,
  RigidBody,
  useRopeJoint,
  useSphericalJoint,
  RigidBodyProps
} from '@react-three/rapier';
import { MeshLineGeometry, MeshLineMaterial } from 'meshline';
import * as THREE from 'three';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshLineGeometry: any;
      meshLineMaterial: any;
    }
  }
}

extend({ MeshLineGeometry, MeshLineMaterial });

interface LanyardProps {
  position?: [number, number, number];
  gravity?: [number, number, number];
  fov?: number;
  transparent?: boolean;
}

export function Lanyard({
  position = [0, 0, 30],
  gravity = [0, -40, 0],
  fov = 20,
  transparent = true
}: LanyardProps) {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = (): void => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-auto">
      <Canvas
        camera={{ position, fov }}
        dpr={isMobile ? 1.5 : [1, 2]}
        gl={{ alpha: transparent }}
        onCreated={({ gl }) => gl.setClearColor(new THREE.Color(0x000000), transparent ? 0 : 1)}
      >
        <ambientLight intensity={Math.PI} />
        <Physics gravity={gravity} timeStep={isMobile ? 1 / 30 : 1 / 60}>
          <Band isMobile={isMobile} />
        </Physics>
        <Environment blur={0.75}>
          <Lightformer
            intensity={2}
            color="white"
            position={[0, -1, 5]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={3}
            color="white"
            position={[-1, -1, 1]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={3}
            color="white"
            position={[1, 1, 1]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={10}
            color="white"
            position={[-10, 0, 14]}
            rotation={[0, Math.PI / 2, Math.PI / 3]}
            scale={[100, 10, 1]}
          />
        </Environment>
      </Canvas>
    </div>
  );
}

interface BandProps {
  maxSpeed?: number;
  minSpeed?: number;
  isMobile?: boolean;
}

function Band({ maxSpeed = 50, minSpeed = 0, isMobile = false }: BandProps) {
  const band = useRef<any>(null);
  const fixed = useRef<any>(null);
  const j1 = useRef<any>(null);
  const j2 = useRef<any>(null);
  const j3 = useRef<any>(null);
  const card = useRef<any>(null);

  const vec = new THREE.Vector3();
  const ang = new THREE.Vector3();
  const rot = new THREE.Vector3();
  const dir = new THREE.Vector3();

  const segmentProps: any = {
    type: 'dynamic' as RigidBodyProps['type'],
    canSleep: true,
    colliders: false,
    angularDamping: 4,
    linearDamping: 4
  };

  const { nodes, materials } = useGLTF('/card.glb') as any;
  const texture = useTexture('/lanyard.png');
  const [curve] = useState(
    () =>
      new THREE.CatmullRomCurve3([new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()])
  );
  const [dragged, drag] = useState<false | THREE.Vector3>(false);
  const [hovered, hover] = useState(false);

  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]);
  useSphericalJoint(j3, card, [
    [0, 0, 0],
    [0, 1.45, 0]
  ]);

  // --- Dynamic Google ID Texture Generation ---
  // Create a memoized canvas texture so it only regenerates if needed.
  const googleIdTexture = React.useMemo(() => {
    // 1. Create offscreen canvas (Badge proportions are typically ~ 2:3, e.g., 600x900)
    const canvas = document.createElement("canvas");
    canvas.width = 1024;
    canvas.height = 1024; // The raw UV map is likely a square box atlas
    const ctx = canvas.getContext("2d");
    
    if (ctx) {
      // 2. Base ID Card Background
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // We need to map to the UV coordinates of the GLTF. 
      // Typically the front face occupies a specific rectangle in the texture atlas.
      // Assuming a generic full-coverage mapping for the front face:
      
      // Google Core Colors
      const gBlue = "#4285F4";
      const gRed = "#DB4437";
      const gYellow = "#F4B400";
      const gGreen = "#0F9D58";
      const gDark = "#1f2937"; // text-g-dark approx

      // Draw Top Google Color Bar (Simulating the punch hole area/branding)
      const barHeight = 80;
      const sectionWidth = canvas.width / 4;
      ctx.fillStyle = gBlue;   ctx.fillRect(0, 0, sectionWidth, barHeight);
      ctx.fillStyle = gRed;    ctx.fillRect(sectionWidth, 0, sectionWidth, barHeight);
      ctx.fillStyle = gYellow; ctx.fillRect(sectionWidth * 2, 0, sectionWidth, barHeight);
      ctx.fillStyle = gGreen;  ctx.fillRect(sectionWidth * 3, 0, sectionWidth, barHeight);

      // Draw "Google Developer" or "MAKE WITH AI" Header
      ctx.fillStyle = gDark;
      ctx.font = "bold 60px Inter, sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("GOOGLE DEVELOPER", canvas.width / 2, 180);

      // Draw Avatar Placeholder (Circle)
      const avatarY = 400;
      ctx.beginPath();
      ctx.arc(canvas.width / 2, avatarY, 150, 0, Math.PI * 2);
      ctx.fillStyle = "#f3f4f6"; // Light gray bg
      ctx.fill();
      ctx.lineWidth = 10;
      ctx.strokeStyle = gBlue;
      ctx.stroke();
      
      // Draw Avatar Inner "G" or Icon logic (Simplified to a stylized letter)
      ctx.fillStyle = gDark;
      ctx.font = "bold 140px Inter, sans-serif";
      ctx.fillText("G", canvas.width / 2, avatarY + 50);

      // Draw Name
      ctx.fillStyle = gDark;
      ctx.font = "bold 80px Inter, sans-serif";
      ctx.fillText("MAKE WITH AI", canvas.width / 2, 700);

      // Draw Title / Role
      ctx.fillStyle = "#6b7280"; // gray-500
      ctx.font = "50px Inter, sans-serif";
      ctx.fillText("VIP PARTICIPANT", canvas.width / 2, 770);

      // Draw Bottom Color Bar for extra Google feel
      const bottomBarY = canvas.height - 40;
      ctx.fillStyle = gGreen;  ctx.fillRect(0, bottomBarY, sectionWidth, 40);
      ctx.fillStyle = gYellow; ctx.fillRect(sectionWidth, bottomBarY, sectionWidth, 40);
      ctx.fillStyle = gRed;    ctx.fillRect(sectionWidth * 2, bottomBarY, sectionWidth, 40);
      ctx.fillStyle = gBlue;   ctx.fillRect(sectionWidth * 3, bottomBarY, sectionWidth, 40);
    }

    // 3. Convert to THREE.CanvasTexture
    const generatedTex = new THREE.CanvasTexture(canvas);
    generatedTex.colorSpace = THREE.SRGBColorSpace;
    generatedTex.flipY = false; // Important for GLTF standard UVs
    return generatedTex;
  }, []);
  // ---------------------------------------------

  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = dragged ? 'grabbing' : 'grab';
      return () => {
        document.body.style.cursor = 'auto';
      };
    }
  }, [hovered, dragged]);

  useFrame((state, delta) => {
    if (dragged && typeof dragged !== 'boolean') {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));
      [card, j1, j2, j3, fixed].forEach(ref => ref.current?.wakeUp());
      card.current?.setNextKinematicTranslation({
        x: vec.x - dragged.x,
        y: vec.y - dragged.y,
        z: vec.z - dragged.z
      });
    }
    if (fixed.current) {
      [j1, j2].forEach(ref => {
        if (!ref.current.lerped) ref.current.lerped = new THREE.Vector3().copy(ref.current.translation());
        const clampedDistance = Math.max(0.1, Math.min(1, ref.current.lerped.distanceTo(ref.current.translation())));
        ref.current.lerped.lerp(
          ref.current.translation(),
          delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed))
        );
      });
      curve.points[0].copy(j3.current.translation());
      curve.points[1].copy(j2.current.lerped);
      curve.points[2].copy(j1.current.lerped);
      curve.points[3].copy(fixed.current.translation());
      band.current.geometry.setPoints(curve.getPoints(isMobile ? 16 : 32));
      ang.copy(card.current.angvel());
      rot.copy(card.current.rotation());
      card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z });
    }
  });

  curve.curveType = 'chordal';
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

  return (
    <>
      <group position={[0, 4, 0]}>
        <RigidBody ref={fixed} {...segmentProps} type={'fixed' as RigidBodyProps['type']} />
        <RigidBody position={[0.5, 0, 0]} ref={j1} {...segmentProps} type={'dynamic' as RigidBodyProps['type']}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1, 0, 0]} ref={j2} {...segmentProps} type={'dynamic' as RigidBodyProps['type']}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1.5, 0, 0]} ref={j3} {...segmentProps} type={'dynamic' as RigidBodyProps['type']}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody
          position={[2, 0, 0]}
          ref={card}
          {...segmentProps}
          type={dragged ? ('kinematicPosition' as RigidBodyProps['type']) : ('dynamic' as RigidBodyProps['type'])}
        >
          <CuboidCollider args={[0.8, 1.125, 0.01]} />
          <group
            scale={2.6}
            position={[0, -1.2, -0.05]}
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
            onPointerUp={(e: any) => {
              e.target.releasePointerCapture(e.pointerId);
              drag(false);
            }}
            onPointerDown={(e: any) => {
              e.target.setPointerCapture(e.pointerId);
              if (card.current && card.current.translation) {
                const tr = card.current.translation();
                const posVector = new THREE.Vector3(tr.x, tr.y, tr.z);
                drag(new THREE.Vector3().copy(e.point).sub(vec.copy(posVector)));
              }
            }}
          >
            <mesh geometry={nodes.card.geometry}>
              <meshPhysicalMaterial
                map={googleIdTexture}
                map-anisotropy={16}
                clearcoat={isMobile ? 0 : 1}
                clearcoatRoughness={0.15}
                roughness={0.9}
                metalness={0.1} // reduced metalness so white canvas looks like white plastic, not chrome
              />
            </mesh>
            <mesh geometry={nodes.clip.geometry} material={materials.metal} material-roughness={0.3} />
            <mesh geometry={nodes.clamp.geometry} material={materials.metal} />
          </group>
        </RigidBody>
      </group>
      <mesh ref={band}>
        {/* @ts-ignore */}
        <meshLineGeometry />
        {/* @ts-ignore */}
        <meshLineMaterial
          color="#4285F4" // Google Blue for the Lanyard rope
          depthTest={false}
          resolution={isMobile ? [1000, 2000] : [1000, 1000]}
          useMap
          map={texture}
          repeat={[-4, 1]}
          lineWidth={1}
        />
      </mesh>
    </>
  );
}
