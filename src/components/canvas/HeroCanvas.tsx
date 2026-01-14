import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { useRef } from "react"
import * as THREE from "three"

const Shape = () => {
  const ref = useRef<THREE.Mesh>(null!)

  useFrame(() => {
    ref.current.rotation.y += 0.003
  })

  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[1.5, 0]} />
      <meshStandardMaterial
        color="#c4a18e"
        roughness={0.4}
        metalness={0.1}
      />
    </mesh>
  )
}

const HeroCanvas = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 3, 3]} intensity={0.8} />

      <Shape />
      <OrbitControls enableZoom={false} />
    </Canvas>
  )
}

export default HeroCanvas
