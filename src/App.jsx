// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Canvas, useFrame} from '@react-three/fiber'
import * as THREE from 'three'
import './App.css'
import { useRef, useState } from 'react';
import { DirectionalLight } from 'three';
import { Stats, OrbitControls } from '@react-three/drei'

function Globe() {
  const meshRef = useRef();
  const loader = new THREE.TextureLoader();
  const globeFaces = [
    new THREE.MeshStandardMaterial({ map: loader.load('src/assets/africa2.png'), side: THREE.DoubleSide }), //right
    new THREE.MeshStandardMaterial({ map: loader.load('src/assets/pacific2.png'), side: THREE.DoubleSide }), //left
    new THREE.MeshStandardMaterial({ map: loader.load('src/assets/north2.png'), side: THREE.DoubleSide }), //top
    new THREE.MeshStandardMaterial({ map: loader.load('src/assets/antarctica2.png'), side: THREE.DoubleSide }), //bottom
    new THREE.MeshStandardMaterial({ map: loader.load('src/assets/america2.png'), side: THREE.DoubleSide }), //front
    new THREE.MeshStandardMaterial({ map: loader.load('src/assets/asia2.png'), side: THREE.DoubleSide }), //back
  ]

  useFrame((state, delta) => {
    if (meshRef.current) {
      // meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return <mesh
    ref={meshRef}
    material={globeFaces}
    >
      <boxGeometry args={[25,25,25]} />
       
  </mesh>

}

function App() {

  const dirLight = useRef()
  const dirLight2 = useRef()

  const [aspect, setAspect] = useState(window.innerWidth / (.75*window.innerHeight));

  // Update aspect ratio on window resize
  useState(() => {
    function handleResize() {
      setAspect(window.innerWidth / window.innerHeight);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const viewSize = 75;

  return (
    <div id="canvas-container">
      <Canvas 
        orthographic camera={{position: [0, 10, 25], left: -aspect*viewSize/2, right:aspect*viewSize/2, top:viewSize/2, bottom:-viewSize/2, zoom: 1} }
        // camera={{ fov: 50, near: 0.1, far: 1000, position: [0, 0, 100] }}
      >
        <ambientLight intensity={.1} />
        <axesHelper />
        <directionalLight color="white" position={[30,20, -30]} intensity={.5} ref={dirLight}/>
        <directionalLight color="rgb(245,237,225)" position={[-30,-10, 30]} intensity={1} ref={dirLight2}/>

        {dirLight.current && (
          <directionalLightHelper args={[dirLight.current, 2, 0xff0000]} />
        )}
        {dirLight2.current && (
          <directionalLightHelper args={[dirLight2.current, 2, 0xff0000]} />
        )}
        

        <Globe />

        <OrbitControls 
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          dampingFactor={0.03}
          enableDamping={true}
          // autoRotate={true}
          // autoRotateSpeed={1.0}
        />
        <Stats />

      </Canvas>
    </div>
  )
}

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

export default App
