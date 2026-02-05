 import { useRef } from 'react';
 import { Canvas, useFrame } from '@react-three/fiber';
 import { Float, MeshDistortMaterial, Sphere, Box, Torus } from '@react-three/drei';
 import * as THREE from 'three';
 
 function AnimatedSphere({ position }: { position: [number, number, number] }) {
   const meshRef = useRef<THREE.Mesh>(null);
   
   useFrame((state) => {
     if (meshRef.current) {
       meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
       meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
     }
   });
 
   return (
     <Float speed={2} rotationIntensity={1} floatIntensity={2}>
       <Sphere ref={meshRef} args={[1, 64, 64]} position={position}>
         <MeshDistortMaterial
           color="#00d4aa"
           attach="material"
           distort={0.4}
           speed={2}
           roughness={0.2}
           metalness={0.8}
         />
       </Sphere>
     </Float>
   );
 }
 
 function AnimatedBox({ position }: { position: [number, number, number] }) {
   const meshRef = useRef<THREE.Mesh>(null);
   
   useFrame((state) => {
     if (meshRef.current) {
       meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
       meshRef.current.rotation.z = state.clock.elapsedTime * 0.2;
     }
   });
 
   return (
     <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
       <Box ref={meshRef} args={[1.5, 1.5, 1.5]} position={position}>
         <meshStandardMaterial
           color="#a855f7"
           roughness={0.3}
           metalness={0.9}
           transparent
           opacity={0.8}
         />
       </Box>
     </Float>
   );
 }
 
 function AnimatedTorus({ position }: { position: [number, number, number] }) {
   const meshRef = useRef<THREE.Mesh>(null);
   
   useFrame((state) => {
     if (meshRef.current) {
       meshRef.current.rotation.x = state.clock.elapsedTime * 0.4;
       meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
     }
   });
 
   return (
     <Float speed={2.5} rotationIntensity={1.5} floatIntensity={2}>
       <Torus ref={meshRef} args={[1, 0.4, 32, 64]} position={position}>
         <meshStandardMaterial
           color="#00d4aa"
           roughness={0.2}
           metalness={0.9}
           emissive="#00d4aa"
           emissiveIntensity={0.2}
         />
       </Torus>
     </Float>
   );
 }
 
 export default function FloatingShapes() {
   return (
     <div className="absolute inset-0 -z-10">
       <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
         <ambientLight intensity={0.3} />
         <pointLight position={[10, 10, 10]} intensity={1} color="#00d4aa" />
         <pointLight position={[-10, -10, -10]} intensity={0.5} color="#a855f7" />
         <spotLight
           position={[0, 10, 0]}
           angle={0.3}
           penumbra={1}
           intensity={0.5}
           color="#00d4aa"
         />
         
         <AnimatedSphere position={[-4, 2, -2]} />
         <AnimatedBox position={[4, -1, -3]} />
         <AnimatedTorus position={[0, -3, -1]} />
         <AnimatedSphere position={[5, 3, -4]} />
       </Canvas>
     </div>
   );
 }