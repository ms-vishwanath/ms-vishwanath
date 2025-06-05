"use client"
import { Canvas } from '@react-three/fiber'
import React, { useEffect, useRef, useState } from 'react'
import Avatar from "../models/Avatar"


export default function AvatarHero() {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div className='h-full w-full'>
            <Canvas camera={{
                position: [0, 0, 5]
            }} gl={{
                antialias: true
            }}>
                <ambientLight intensity={2} clone={"#ec34ff"} />
                <directionalLight
                    intensity={3}
                    position={[-5, 2, 2]} // left side
                    castShadow
                    shadow-mapSize-width={1024}
                    shadow-mapSize-height={1024}
                />

                <group>
                    <Avatar scale={9} position={[0, -15, 0]} />
                </group>
                <hemisphereLight
                    intensity={0.2}
                />
            </Canvas>
        </div>
    )
}
