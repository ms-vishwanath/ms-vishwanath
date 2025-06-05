import React, { useRef, useEffect, useMemo, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'
import * as THREE from 'three'
import gsap from 'gsap'

export default function Avatar(props) {
  const { scene } = useGLTF('/models/avatar-dance-transformed.glb')
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene])
  const group = useRef()
  const headBone = useMemo(() => clone.getObjectByName('Head'), [clone])
  const [isIntroAnimationDone, setIsIntroAnimationDone] = useState(false)

  const isMobile = useMemo(() => {
    return typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)
  }, [])

  // Arm pose setup
  useEffect(() => {
    const deg = (d) => (d * Math.PI) / 180
    const setRotation = (name, x = 0, y = 0, z = 0) => {
      const bone = clone.getObjectByName(name)
      if (bone) bone.rotation.set(deg(x), deg(y), deg(z))
    }
    setRotation('LeftArm', 70, 0, -20)
    setRotation('RightArm', 70, 0, 0)
  }, [clone])

  // Intro animation
  useEffect(() => {
    if (group.current) {
      gsap.fromTo(
        group.current.rotation,
        { y: Math.PI },
        {
          y: 0,
          duration: 1.5,
          ease: 'power1.inOut',
          onComplete: () => setIsIntroAnimationDone(true),
        }
      )
    }
  }, [])

  // Mouse-following effect (desktop only)
  useEffect(() => {
    if (!isIntroAnimationDone || isMobile) return

    const lookVec = new THREE.Vector3()
    let frame
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1
      const y = -(e.clientY / window.innerHeight) * 2 + 1

      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        if (group.current) {
          gsap.to(group.current.rotation, {
            y: x * 0.5,
            duration: 0.5,
            ease: 'power2.out',
          })
        }

        if (headBone) {
          lookVec.set(x * 2, y * 2, headBone.position.z + 5)
          headBone.lookAt(lookVec)
        }
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [isIntroAnimationDone, isMobile, headBone])

  return <primitive ref={group} object={clone} {...props} dispose={null} />
}

useGLTF.preload('/models/avatar-dance-transformed.glb')
