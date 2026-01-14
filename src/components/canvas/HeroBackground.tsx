import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import { useRef } from "react"
import * as THREE from "three"

const Particles = () => {
  const ref = useRef<THREE.Points>(null!)

  const count = 150
  const positions = new Float32Array(count * 3)

  for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 8
  }

  useFrame(() => {
    ref.current.rotation.y += 0.0008
  })

  return (
    <Points ref={ref} positions={positions}>
      <PointMaterial
        color="#c4a18e"
        size={0.05}
        transparent
        opacity={0.6}
      />
    </Points>
  )
}

const HeroBackground = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 5] }}
      style={{ position: "absolute", inset: 0 }}
    >
      <Particles />
    </Canvas>
  )
}

export default HeroBackground
