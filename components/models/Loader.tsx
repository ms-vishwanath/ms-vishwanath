'use client'

import { useGSAP } from '@gsap/react'
import { useProgress } from '@react-three/drei'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import { AnimatedCircularProgressBar } from '../special/animated-progress'
import { preloadAllModels } from '@/lib/preload-models'

const Loader = ({ children }: { children: React.ReactNode }) => {
    const { progress } = useProgress()
    const loaderRef = useRef<HTMLDivElement>(null)
    return (
        <>
            {
                progress !== 100 &&
                <div
                    ref={loaderRef}
                    className="loader-screen fixed top-0 left-0 w-full h-dvh z-50 bg-white flex flex-col justify-center items-center transition-transform"
                >
                    <AnimatedCircularProgressBar
                        max={100}
                        min={0}
                        value={progress}
                        gaugePrimaryColor="rgb(178, 103, 252)"
                        gaugeSecondaryColor="rgba(0, 0, 0, 0.1)"
                    />
                </div>
            }
            <div className={`${progress !== 100 && "invisible"}`}>
                {children}
            </div>
        </>
    )
}

export default Loader
