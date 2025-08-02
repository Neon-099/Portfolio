import React, {Suspense, useEffect, useState} from 'react'
import { Canvas } from '@react-three/fiber';
import { Decal, Float, OrbitControls, Preload,  useTexture } from '@react-three/drei';
import * as THREE from 'three';

import CanvasLoader from '../Loader';

const Ball = ( props ) => {
  const [decal, setDecal] = useState(null);
  
  useEffect(() => {
    if (props.imgUrl) {
      const imageUrl = props.imgUrl?.default || props.imgUrl;
      const textureLoader = new THREE.TextureLoader();
      
      textureLoader.load(
        imageUrl,
        (texture) => {
          setDecal(texture);
        },
        undefined,
        (error) => {
          console.warn('Failed to load texture:', error);
        }
      );
    }
  }, [props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        {decal && (
          <Decal
            position={[0, 0, 1]}
            rotation={[2 * Math.PI, 0, 6.25]}
            scale={1}
            map={decal}
            flatShading
          />
        )}
      </mesh>
    </Float>
  )
}

//NEED THE CANVAS TO SHOW IT ON
const BallCanvas = ({icon }) => {
  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{ position: [0, 0, 5], fov: 75 }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default BallCanvas;