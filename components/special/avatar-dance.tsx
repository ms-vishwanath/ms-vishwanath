"use client"
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import AvatarDanceModel from "../models/AvatarDanceModel"
import { MdArrowUpward, MdPause, MdPlayArrow } from 'react-icons/md'
import StandingPose from '../models/StandingPose'
import { smoothScrollToId } from '@/lib/utils'

export default function AvatarDance() {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    useEffect(() => {
        let raf: number;

        const update = () => {
            if (audioRef.current && isPlaying) {
                const audio = audioRef.current;
                setCurrentTime(audio.currentTime);
                setDuration(audio.duration || 0);
                setProgress((audio.currentTime / (audio.duration || 1)) * 100);
                raf = requestAnimationFrame(update);
            }
        };
        if (isPlaying) {
            raf = requestAnimationFrame(update);
        }
        return () => cancelAnimationFrame(raf);
    }, [isPlaying]);


    const containerRef = useRef<HTMLDivElement | null>(null);

    function formatTime(seconds: number): string {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, [isVisible]);

    const MemoizedDance = useMemo(() => (
        <AvatarDanceModel
            scale={1.5}
            rotation={[0, 0, 0]}
            position={[0, -1, 2]}
        />
    ), []);

    const MemoizedPose = useMemo(() => (
        <StandingPose
            scale={1.5}
            rotation={[-0.1, -0.4, 0]}
            position={[0, -1, 2]}
        />
    ), []);
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    return (
        <div ref={containerRef} style={{ width: '100%', height: '100vh', position: 'relative' }}>
            {
                isVisible &&
                <Canvas
                    camera={{ position: [0, 2, 5], fov: 60 }}
                    gl={{ antialias: !isMobile, }}
                >
                    <ambientLight intensity={0.5} color={"#ffd591"} />
                    <directionalLight
                        intensity={5}
                        color={"#fff1c1"}
                        position={[5, 10, 10]}
                        castShadow
                    />
                    <directionalLight
                        intensity={5}
                        color={"#e0e0ff"}
                        position={[-5, 5, 5]}
                    />
                    <group onClick={() => {
                        if (!audioRef.current) return
                        if (isPlaying) {
                            audioRef.current.pause()
                            setIsPlaying(false)
                        } else {
                            audioRef.current.play()
                            setIsPlaying(true)
                        }
                    }}>
                        {isPlaying ? MemoizedDance : MemoizedPose}
                    </group>
                </Canvas>
            }

            <audio ref={audioRef} src="/assets/come_and_get.mp3" preload="auto" />
            <div className='absolute lg:bottom-50 bottom-60 right-4 '>
                <a onClick={() => smoothScrollToId("hero")}>
                    <div className='bg-black  text-white p-3 rounded-[50%] transform hover:scale-125 transition-all'>
                        <MdArrowUpward />
                    </div>
                </a>
            </div>
            <div className="absolute lg:bottom-2 bottom-20 left-4 right-4 flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-fuchsia-600 to-pink-600 shadow-2xl border border-white/10 text-white lg:w-[420px] max-w-full transition-all duration-500">
                {/* Spinning CD */}
                <div
                    className={`w-20 h-20 border border-4 rounded-full bg-cover bg-center shadow-inner ${isPlaying && "spin-slow"}`}
                    style={{
                        backgroundImage:
                            "url('https://i.discogs.com/5G7lzzLbZSyPCT9el8nDQtcOengjatEv240RbHq591M/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE0NTI5/MDQ1LTE1NzY0MTYx/ODgtOTA1OC5qcGVn.jpeg')",
                    }}
                />

                {/* Info + Controls */}
                <div className="flex flex-col gap-2 justify-between flex-1 h-full">
                    <div className='flex items-center justify-between'>
                        <h1 className="font-bold text-xs">
                            <span className=" font-bold">Come and Get Your Love</span>
                        </h1>
                        <div className='flex justify-center'>
                            <div
                                onClick={() => {
                                    if (!audioRef.current) return
                                    if (isPlaying) {
                                        audioRef.current.pause()
                                        setIsPlaying(false)
                                    } else {
                                        audioRef.current.play()
                                        setIsPlaying(true)
                                    }
                                }}
                                className="text-xl border p-1 rounded-[50%] bg-white text-black transform hover:scale-110 transition-all"
                            >
                                {isPlaying ? <MdPause /> : <MdPlayArrow />}
                            </div>
                        </div>
                    </div>

                    {/* Progress + Timer */}
                    <div className="flex flex-col gap-2">
                        <input
                            type="range"
                            min="0"
                            max="100"
                            step="0.1"
                            value={progress}
                            onChange={(e) => {
                                const newTime = (parseFloat(e.target.value) / 100) * (audioRef.current?.duration || 0)
                                if (audioRef.current) audioRef.current.currentTime = newTime
                                setProgress(parseFloat(e.target.value))
                            }}
                            className="w-full h-1 accent-black bg-white rounded-full appearance-none cursor-pointer mt-1"
                        />
                        <div className="flex justify-between text-[11px] font-mono text-white/70">
                            <span>{formatTime(currentTime)}</span>
                            <span>{formatTime(duration)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
