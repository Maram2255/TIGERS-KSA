import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function RobotMascot() {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene    = new THREE.Scene();
    const camera   = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(300, 300);
    mountRef.current.appendChild(renderer.domElement);

    const loader = new GLTFLoader();
    loader.load("/models/robot.glb", gltf => {
      gltf.scene.scale.set(2, 2, 2);
      scene.add(gltf.scene);
    });

    scene.add(new THREE.HemisphereLight("#30CFCF", "#ffffff", 1));
    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      scene.rotation.y += 0.003;
      renderer.render(scene, camera);
    };
    animate();

    return () => mountRef.current.removeChild(renderer.domElement);
  }, []);

  return <div ref={mountRef} className="mx-auto" />;
}
