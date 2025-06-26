import { Canvas, useThree, useFrame} from '@react-three/fiber'
import * as THREE from 'three'
import { useRef } from 'react';
import React from 'react';
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

          {/* {ref.current && (
            <directionalLightHelper args={[ref.current, 2, 0xff0000]} />
          )}
          {ref2.current && (
            <directionalLightHelper args={[ref2.current, 2, 0xff0000]} />
          )} */}
        </>

}

class GlobeMover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      aspect: window.innerWidth / (0.6 * window.innerHeight),
    };
    this.handleResize = this.handleResize.bind(this);
  }

  handleResize() {
    this.setState({
      aspect: window.innerWidth / (0.6 * window.innerHeight),
    });
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  render() {
    const viewSize = 75;
    const { aspect } = this.state;

    return <>
      <div style={{position: 'absolute', marginTop: '50px', marginLeft: '90px'}}>
        <h1>Viola Xu</h1>
        <h3 style={{width: '350px', overflow: 'wrap'}}>Computer Science @ Carnegie Mellon</h3>
      </div>
      <div id="canvas-container" style={{marginLeft: '50px'}}>
        <Canvas
          key={aspect}
          orthographic
          camera={{
            position: [0, 5, 25],
            left: -aspect * viewSize / 2,
            right: aspect * viewSize / 2,
            top: viewSize / 2,
            bottom: -viewSize / 2,
            zoom: 1.25,
          }}
        >
          <ambientLight intensity={.1} />

          <Lights />
          <Globe />

          <OrbitControls 
            enablePan={true}
            enableZoom={false}
            enableRotate={true}
            dampingFactor={0.03}
            enableDamping={true}
            autoRotate={true}
            autoRotateSpeed={2.0}
          />
          {/* <Stats /> */}

        </Canvas>
      </div>
    </>
  }

}

export default GlobeMover