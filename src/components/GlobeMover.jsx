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

function Globe({ size = 15, position = [5, -5, 0] }) {
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
    <mesh ref={meshRef} material={globeFaces} position={position}>
      <boxGeometry args={[size, size, size]} />
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
const TABLET_RATIO = 0.75;
const MOBILE_RATIO = 1;

class GlobeMover extends React.Component {
  constructor(props) {
    super(props);
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const isMobile = windowWidth < 768;
    const isTablet = windowWidth >= 768 && windowWidth < 1024;

    this.state = {
      aspect:
        (isMobile ? MOBILE_RATIO : isTablet ? TABLET_RATIO : DESKTOP_RATIO) *
        (windowWidth / windowHeight),
      windowWidth,
      windowHeight,
      isMobile,
      isTablet,
    };
    this.handleResize = this.handleResize.bind(this);
  }

  handleResize() {
    if (this.resizeTimeout) {
      clearTimeout(this.resizeTimeout);
    }

    this.resizeTimeout = setTimeout(() => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const isMobile = windowWidth < 768;
      const isTablet = windowWidth >= 768 && windowWidth < 1024;

      this.setState({
        aspect:
          (isMobile ? MOBILE_RATIO : isTablet ? TABLET_RATIO : DESKTOP_RATIO) *
          (windowWidth / windowHeight),
        windowWidth,
        windowHeight,
        isMobile,
        isTablet,
      });
    }, 150);
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
    if (this.resizeTimeout) {
      clearTimeout(this.resizeTimeout);
    }
  }

  getGlobeConfig() {
    const { isMobile, isTablet } = this.state;

    if (isMobile) {
      return {
        size: 12,
        position: [5, -5, 0],
        cameraPosition: [0, 5, 25],
        viewSize: 50,
        zoom: 1.1,
      };
    } else if (isTablet) {
      return {
        size: 14,
        position: [5, -5, 0],
        cameraPosition: [0, 5, 25],
        viewSize: 55,
        zoom: 1.2,
      };
    } else {
      // Desktop
      return {
        size: 15,
        position: [5, -5, 0],
        cameraPosition: [0, 5, 25],
        viewSize: 60,
        zoom: 1.25,
      };
    }
  }

  render() {
    const { aspect } = this.state;
    const globeConfig = this.getGlobeConfig();

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
            key={`${aspect}-${this.state.windowWidth}`}
            orthographic
            camera={{
              position: globeConfig.cameraPosition,
              left: (-aspect * globeConfig.viewSize) / 2,
              right: (aspect * globeConfig.viewSize) / 2,
              top: globeConfig.viewSize / 2,
              bottom: -globeConfig.viewSize / 2,
              zoom: globeConfig.zoom,
            }}
            background={loader.load(gradient)}
          >
            <Lights />
            <Globe size={globeConfig.size} position={globeConfig.position} />
          </Canvas>
        </div>
      </div>
    );
  }
}

export default GlobeMover;
