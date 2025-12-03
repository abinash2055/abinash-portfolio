import "react";
import { Suspense, useEffect, useState } from "react";
import CanvasLoader from "../Loader";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

const Computers = ({ isMobile }) => {
  // Load the GLTF model
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      {/* Hemisphere light for ambient lighting */}
      <hemisphereLight intensity={2} groundColor="black" />
      {/* Point light for focused lighting */}
      <pointLight intensity={1} />
      {/* Spot light for directional shadow-casting */}
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      {/* GLTF model */}
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.65 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  //  for Mobile View
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth <= 500 : false
  );

  useEffect(() => {
    // Handle window resize
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 500);
    };

    // Add resize listener
    window.addEventListener("resize", handleResize);

    // Remove listener when component unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 15], fov: isMobile ? 69 : 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        {/* Orbit controls for camera movement */}
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        {/* 3D model */}
        <Computers isMobile={isMobile} />
      </Suspense>

      {/* Preload all assets */}
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
