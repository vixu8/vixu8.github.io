import { Canvas, useThree, useFrame} from '@react-three/fiber'
import * as THREE from 'three'
import './App.css'
import { useRef, useState } from 'react';
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

  return <mesh
    ref={meshRef}
    material={globeFaces}
    >
      <boxGeometry args={[25,25,25]} />
       
  </mesh>

}

function Lights () {
  const {camera} = useThree()
  const ref = useRef()
  const ref2 = useRef()

  useFrame(() => {
    if (ref.current) {
      ref.current.position.copy(camera.position.clone().add(new THREE.Vector3(2, 4, -2)))
    }
    if (ref2.current) {
      ref2.current.position.copy(camera.position.clone().add(new THREE.Vector3(-2,-4,2)))
    }
  })

  return <>
          <directionalLight ref={ref} color="gray" intensity={.5}/>
          <directionalLight ref={ref2} color="rgb(245,237,225)" intensity={1}/>

          {ref.current && (
            <directionalLightHelper args={[ref.current, 2, 0xff0000]} />
          )}
          {ref2.current && (
            <directionalLightHelper args={[ref2.current, 2, 0xff0000]} />
          )}
        </>

}

function App() {

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
        orthographic camera={{position: [0, 5, 25], left: -aspect*viewSize/2, right:aspect*viewSize/2, top:viewSize/2, bottom:-viewSize/2, zoom: 1} }
        // camera={{ fov: 50, near: 0.1, far: 1000, position: [0, 0, 100] }}
      >
        <ambientLight intensity={.1} />
        <axesHelper />

        <Lights />
        <Globe />

        <OrbitControls 
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          dampingFactor={0.03}
          enableDamping={true}
          autoRotate={true}
          autoRotateSpeed={2.0}
        />
        <Stats />

      </Canvas>
    </div>
  )
}

export default App
