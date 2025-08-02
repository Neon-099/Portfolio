import {useState, useEffect} from 'react';
import {Canvas} from '@react-three/fiber';
import {OrbitControls, Preload, useGLTF} from '@react-three/drei';

const Computers = ({isMobile}) => {
  const computer = useGLTF('./desktop_pc/scene.gltf');
  
  return (
    <primitive object={computer.scene}
    scale={isMobile ? 0.7 : 0.75} 
    position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
    rotation={[-0.01, -0.2, -0.1]}/>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)

  //WAY OF CHANGING A MODEL
  useEffect(() => {
    //CHECKING IF IT IS IN A MOBILE VERSION
    const mediaQuery = window.matchMedia
      ('max-width: 500px');

      setIsMobile(mediaQuery.matches);

      const handleMediaQueryChange = (e) => {
        setIsMobile(e.matches);
      }

      //add event listener 
      mediaQuery.addEventListener('change', 
        handleMediaQueryChange);
        
        return () => {
          mediaQuery.removeEventListener('change',
            handleMediaQueryChange);
        }
  }, [])


  return (
    <Canvas 
      frameloop="demand"
      shadows
      camera={{position : [20, 3, 5], fov: 25}}
      gl={{preserveDrawingBuffer: true}}>

        <hemisphereLight intensity={0.15} groundColor="black" />
        <pointLight intensity={1} />
        <OrbitControls 
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2} />
        <Computers isMobile={isMobile} />

      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas