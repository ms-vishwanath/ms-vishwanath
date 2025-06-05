import React, { useEffect, useRef, useMemo } from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export default function AvatarDanceModel(props) {
    const group = useRef()
    const { scene, animations } = useGLTF('/models/avatar-dance-transformed.glb')
    const clone = useMemo(() => SkeletonUtils.clone(scene), [scene])
    const { nodes, materials } = useGraph(clone)
    const { actions } = useAnimations(animations, group)

    useEffect(() => {
        if (actions.DANCE_SHUFFLE) {
            actions.DANCE_SHUFFLE.reset().fadeIn(1).play()
        }
    }, [actions])

    return (
        <group ref={group} {...props} dispose={null}>
            <group name="Scene">
                <group name="Armature">
                    <primitive object={nodes.Hips} />
                    <skinnedMesh name="avaturn_body" geometry={nodes.avaturn_body.geometry} material={materials.avaturn_body_material} skeleton={nodes.avaturn_body.skeleton} />
                    <skinnedMesh name="avaturn_glasses_0" geometry={nodes.avaturn_glasses_0.geometry} material={materials.avaturn_glasses_0_material} skeleton={nodes.avaturn_glasses_0.skeleton} />
                    <skinnedMesh name="avaturn_glasses_1" geometry={nodes.avaturn_glasses_1.geometry} material={materials.avaturn_glasses_1_material} skeleton={nodes.avaturn_glasses_1.skeleton} />
                    <skinnedMesh name="avaturn_hair_0" geometry={nodes.avaturn_hair_0.geometry} material={materials.avaturn_hair_0_material} skeleton={nodes.avaturn_hair_0.skeleton} />
                    <skinnedMesh name="avaturn_hair_1" geometry={nodes.avaturn_hair_1.geometry} material={materials.avaturn_hair_1_material} skeleton={nodes.avaturn_hair_1.skeleton} />
                    <skinnedMesh name="avaturn_shoes_0" geometry={nodes.avaturn_shoes_0.geometry} material={materials.avaturn_shoes_0_material} skeleton={nodes.avaturn_shoes_0.skeleton} />
                    <skinnedMesh name="avaturn_look_0" geometry={nodes.avaturn_look_0.geometry} material={materials.avaturn_look_0_material} skeleton={nodes.avaturn_look_0.skeleton} />
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/models/avatar-dance-transformed.glb')
