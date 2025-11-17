import React from "react";
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
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  //  for Mobile View
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // added lister for changes to screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // initial value for isMobile state
    setIsMobile(mediaQuery.matches);

    // callback function to handle mediaQuery
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // callback function to lister for change in mediaQuery
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // remove listener when component unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
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
