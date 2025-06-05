import { useGLTF } from '@react-three/drei'

export function preloadAllModels() {
    useGLTF.preload('/models/avatar-blue-court.glb')
}
