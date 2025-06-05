import React, { useEffect, useRef, useMemo } from 'react'
import { useFrame, useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export default function StandingPose(props) {
  const group = useRef()
  const { scene, animations } = useGLTF('/models/avatar-dance-transformed.glb')
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
    // Get the first animation clip
    if (animations.length > 0 && group.current) {
      const firstClip = animations[0]
      const action = actions[firstClip.name]
      if (action) {
        action.play()
        action.paused = true
        action.time = 0
        action.setEffectiveTimeScale(0)
        action.setEffectiveWeight(1)
        action.play()
      }
    }
  }, [animations, actions])
  return <primitive ref={group} object={clone} {...props} dispose={null} />
}

useGLTF.preload('/models/avatar-dance-transformed.glb')
