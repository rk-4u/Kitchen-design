import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";

const HelmetScene = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef();
  const cameraRef = useRef();
  const rendererRef = useRef();
  const angleRef = useRef(0);
  const radius = 2.7;

  useEffect(() => {
    const container = mountRef.current;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.25,
      20
    );
    camera.position.set(-1.8, 0.6, 2.7);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1;
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Load environment
    new RGBELoader()
      .setPath("/scene/")
      .load("royal_esplanade_1k.hdr", (texture) => {
        texture.mapping = THREE.EquirectangularReflectionMapping;
        scene.background = texture;
        scene.environment = texture;
      });

    // Camera rotation on scroll anywhere
    const handleScroll = (e) => {
      const delta = e.deltaY || e.detail || e.wheelDelta;
      angleRef.current += delta * 0.001;

      const x = radius * Math.sin(angleRef.current);
      const z = radius * Math.cos(angleRef.current);
      camera.position.set(x, 0.6, z);
      camera.lookAt(0, 0, 0);
    };

    window.addEventListener("wheel", handleScroll, { passive: false });

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("wheel", handleScroll);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        pointerEvents: "none", // so it doesn't block anything
      }}
    />
  );
};

export default HelmetScene;
