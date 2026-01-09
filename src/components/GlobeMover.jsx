import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useRef } from "react";
import React from "react";
import africa from "../assets/africa2.png";
import pacific from "../assets/pacific2.png";
import north from "../assets/north2.png";
import antarctica from "../assets/antarctica2.png";
import america from "../assets/america2.png";
import asia from "../assets/asia2.png";
import gradient from "../assets/gradient.png";
import "./GlobeMover.scss";

const loader = new THREE.TextureLoader();

function Globe() {
  const meshRef = useRef();
  const globeFaces = [
    new THREE.MeshStandardMaterial({
      map: loader.load(africa),
      side: THREE.DoubleSide,
    }), // right
    new THREE.MeshStandardMaterial({
      map: loader.load(pacific),
      side: THREE.DoubleSide,
    }), // left
    new THREE.MeshStandardMaterial({
      map: loader.load(north),
      side: THREE.DoubleSide,
    }), // top
    new THREE.MeshStandardMaterial({
      map: loader.load(antarctica),
      side: THREE.DoubleSide,
    }), // bottom
    new THREE.MeshStandardMaterial({
      map: loader.load(america),
      side: THREE.DoubleSide,
    }), // front
    new THREE.MeshStandardMaterial({
      map: loader.load(asia),
      side: THREE.DoubleSide,
    }), // back
  ];

  // Mouse drag state
  const isDragging = useRef(false);
  const lastX = useRef(0);
  const lastY = useRef(0);
  const velocity = useRef({ x: 0, y: 0 });

  // Mouse event handlers
  React.useEffect(() => {
    const handlePointerDown = (e) => {
      isDragging.current = true;
      lastX.current = e.clientX;
      lastY.current = e.clientY;
    };
    const handlePointerUp = () => {
      isDragging.current = false;
    };
    const handlePointerMove = (e) => {
      if (!isDragging.current || !meshRef.current) return;
      const deltaX = e.clientX - lastX.current;
      const deltaY = e.clientY - lastY.current;
      velocity.current.y = deltaX * 0.005;
      velocity.current.x = deltaY * 0.005;
      meshRef.current.rotation.y += velocity.current.y;
      meshRef.current.rotation.x += velocity.current.x;
      lastX.current = e.clientX;
      lastY.current = e.clientY;
    };

    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointerup", handlePointerUp);
    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  // Damping and autorotate
  useFrame(() => {
    if (meshRef.current) {
      // Autorotate slowly on Y axis
      meshRef.current.rotation.y += 0.002;

      // Damping for drag velocity
      if (!isDragging.current) {
        meshRef.current.rotation.y += velocity.current.y;
        meshRef.current.rotation.x += velocity.current.x;
        velocity.current.x *= 0.95;
        velocity.current.y *= 0.95;
        // Stop when velocity is very low
        if (Math.abs(velocity.current.x) < 0.0001) velocity.current.x = 0;
        if (Math.abs(velocity.current.y) < 0.0001) velocity.current.y = 0;
      }
    }
  });

  return (
    <mesh ref={meshRef} material={globeFaces} position={[5, -5, 0]}>
      <boxGeometry args={[15, 15, 15]} />
    </mesh>
  );
}

function Lights() {
  return (
    <>
      <directionalLight
        position={[2, 9, 23]}
        color="rgb(108, 108, 108)"
        intensity={0.5}
      />
      <directionalLight
        position={[-2, 1, 27]}
        color="rgb(249, 246, 221)"
        intensity={1}
      />
    </>
  );
}

const DESKTOP_RATIO = 0.6;
const MOBILE_RATIO = 1;

class GlobeMover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      aspect:
        (window.innerWidth < 768 ? MOBILE_RATIO : DESKTOP_RATIO) *
        (window.innerWidth / window.innerHeight),
    };
    this.handleResize = this.handleResize.bind(this);
  }

  handleResize() {
    this.setState({
      aspect:
        (window.innerWidth < 768 ? MOBILE_RATIO : DESKTOP_RATIO) *
        (window.innerWidth / window.innerHeight),
    });
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  render() {
    const viewSize = 60;
    const { aspect } = this.state;

    return (
      <div className="home-container">
        <div className="intro-text">
          <h1 className="name">Viola Xu</h1>
          <h3 className="cs">Computer Science</h3>
          <h3 className="cmu"> @ Carnegie Mellon</h3>
        </div>
        <img src={gradient} alt={""} className="background-glow-img" />
        <div id="canvas-container">
          <Canvas
            key={aspect}
            orthographic
            camera={{
              position: [0, 5, 25],
              left: (-aspect * viewSize) / 2,
              right: (aspect * viewSize) / 2,
              top: viewSize / 2,
              bottom: -viewSize / 2,
              zoom: 1.25,
            }}
            background={loader.load(gradient)}
          >
            <Lights />
            <Globe />
          </Canvas>
        </div>
      </div>
    );
  }
}

export default GlobeMover;
