import React, { useRef, useState, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader';
import stormcloudSvg from '../assets/stormcloud.svg';

const Loading = () => {
  const mountRef = useRef(null);
  const [isAnimating, setAnimating] = useState(true);
  const [lightningMesh, setLightningMesh] = useState(null);
  const [rotationAngle, setRotationAngle] = useState(0);
  const controls = useRef(null);

  useEffect(() => {
    let frameId;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color('black');
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    const svgLoader = new SVGLoader();
    svgLoader.load(
      stormcloudSvg,
      (data) => {
        console.log(data)
        const paths = data.paths;
        const group = new THREE.Group();
        group.scale.multiplyScalar(0.03);
        
        group.position.x = -0.47;
        group.position.y = 1;
        group.scale.y *= -1;
        for (let i = 0; i < paths.length; i++) {
          const path = paths[i];
          const shapes = path.toShapes(true);
          for (let j = 0; j < shapes.length; j++) {
            const shape = shapes[j];
            const geometry = new THREE.ShapeGeometry(shape);
            const material = new THREE.MeshBasicMaterial({
              color: path.color,
              side: THREE.DoubleSide
            });
            const mesh = new THREE.Mesh(geometry, material);
            group.add(mesh);
          }
        }
        setLightningMesh(group);
        scene.add(group);
      }
    );
    const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
    directionalLight.position.set(0, 1, 1);
    scene.add(directionalLight);    

    camera.position.z = 5;

    // Create a torus geometry
    const torusGeometry = new THREE.TorusGeometry(0.6, 0.005, 16, 100);

    // Create a torus material
    const torusMaterial = new THREE.MeshBasicMaterial({
      color: "rgb(0, 191, 255)",
      side: THREE.DoubleSide
    });

    // Create a torus mesh and add it to the scene
    const torusMesh = new THREE.Mesh(torusGeometry, torusMaterial);
    scene.add(torusMesh);

    // Position the torus mesh so that it surrounds the cloud graphic
    torusMesh.position.x = -0.019;
    torusMesh.position.y = 0.6;

    const animate = () => {
      controls.current.update();
      setRotationAngle((prevAngle) => prevAngle + 0.02); // update rotation angle with negative value for opposite rotation
      if (lightningMesh !== null) {
        lightningMesh.rotation.y = rotationAngle; // rotate the group
      }
      torusMesh.rotation.z = rotationAngle; // rotate the torus in the opposite direction
      renderer.render(scene, camera);
      frameId = window.requestAnimationFrame(animate);
    };
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    const controlsInstance = new OrbitControls(camera, renderer.domElement);
    controlsInstance.enableDamping = true;
    controlsInstance.dampingFactor = 0.5;
    controlsInstance.autoRotate = true;
    controlsInstance.autoRotateSpeed = 31;
    controls.current = controlsInstance;

    window.addEventListener("resize", onResize);

    mountRef.current.appendChild(renderer.domElement);
    frameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(frameId);
      controlsInstance.dispose();
      if (lightningMesh !== null) {
        scene.remove(lightningMesh);
        setLightningMesh(null);
      }
      
      renderer.dispose();
    };
  }, []);

  return (
    <div ref={mountRef}>
    </div>
  );
};

export default Loading;