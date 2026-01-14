import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import * as THREE from "three"

const FogPlane = () => {
  const materialRef = useRef<THREE.ShaderMaterial>(null!)

  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = clock.elapsedTime
    }
  })

  return (
    <mesh position={[0, 0, -3]} scale={[8, 5, 1]}>
      <planeGeometry args={[1, 1, 32, 32]} />

      <shaderMaterial
        ref={materialRef}
        transparent
        uniforms={{
          uTime: { value: 0 },
          uColor: { value: new THREE.Color("#c4a18e") },
        }}
        vertexShader={`
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        fragmentShader={`
          uniform float uTime;
          uniform vec3 uColor;
          varying vec2 vUv;

          void main() {
            float wave = sin(vUv.y * 6.0 + uTime * 0.6) * 0.15;
            float alpha = 0.25 - distance(vUv, vec2(0.5)) * 0.6;

            gl_FragColor = vec4(uColor + wave, alpha);
          }
        `}
      />
    </mesh>
  )
}

export default FogPlane
