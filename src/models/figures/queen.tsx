import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Queen(props: any) {
    const group = useRef<THREE.Group>();
    const { nodes, materials } = useGLTF("/figures/queen.gltf") as any;
    return (
        <group ref={group} {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder.geometry}
                material={materials["Material.001"]}
            >
                <meshPhysicalMaterial color={props.color}/>
            </mesh>
        </group>
    );
}

useGLTF.preload("/figures/queen.gltf");