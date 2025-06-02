// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Canvas, useFrame} from '@react-three/fiber'
import './App.css'
import { useRef, useState } from 'react';
import { DirectionalLight } from 'three';
import { Stats, OrbitControls } from '@react-three/drei'

function Globe() {
  const meshRef = useRef();
  // const [isDragging, setIsDragging] = useState(false);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      // meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return <mesh
    ref={meshRef}
    // onPointerDown={() => setIsDragging(true)}
    // onPointerUp={() => setIsDragging(false)}
    // onPointerMissed={() => setIsDragging(false)}
    >
      <boxGeometry args={[25,25,25]} />
      <meshStandardMaterial color="white"/>
  </mesh>

}

function App() {
  const dirLight = useRef()
  const dirLight2 = useRef()

  return (
    <div id="canvas-container">
      <Canvas 
        camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 60] }}
      >
        <ambientLight intensity={.1} />
        <axesHelper />
        <directionalLight color="blue" position={[30,0, 30]} intensity={.5} ref={dirLight}/>
        <directionalLight color="red" position={[-30,0, 30]} intensity={.5} ref={dirLight2}/>

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
          dampingFactor={0.05}
          enableDamping={true}
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
