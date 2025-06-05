"use client"
import { Canvas } from '@react-three/fiber'
import React from 'react'
import StandingPose from "../models/StandingPose"
import { OrbitControls } from '@react-three/drei'

export default function AvatarStanding() {
    return (
        <div style={{ width: '100%', height: '100vh' }}>
            <Canvas
                camera={{
                    position: [0, 2, 5],  // Camera adjusted for a better view
                    fov: 50,
                }}
                gl={{ antialias: true }}
            >
                <ambientLight intensity={0.5} color={"#ffd591"} />
                <directionalLight
                    intensity={5}
                    color={"#fff1c1"}
                    position={[5, 10, 10]}
                    castShadow
                    shadow-mapSize-width={2048}
                    shadow-mapSize-height={2048}
                />
                <directionalLight
                    intensity={4}
                    color={"#e0e0ff"}
                    position={[-5, 5, 5]}
                />

                <group>
                    <StandingPose
                        scale={1.5}
                        rotation={[0, 0.82, 0]}
                        position={[0, -1, 2]}
                    />
                </group>

            </Canvas>
        </div>
    )
}
