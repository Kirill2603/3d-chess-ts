import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Pawn(props: any) {
    const group = useRef<THREE.Group>();
    const { nodes, materials } = useGLTF("/figures/pawn.gltf") as any;
    return (
        <group ref={group} {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder.geometry}
                material={nodes.Cylinder.material}
            >
                <meshPhysicalMaterial color={props.color}/>
            </mesh>
        </group>
    );
}

useGLTF.preload("figures//pawn.gltf");