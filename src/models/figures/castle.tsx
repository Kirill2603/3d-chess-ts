import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Castle(props: any) {
    const group = useRef<THREE.Group>();
    const { nodes, materials } = useGLTF("/figures/castle.gltf") as any;
    return (
        <group ref={group} {...props} dispose={null}>
            <mesh
                geometry={nodes.Cylinder.geometry}
                material={nodes.Cylinder.material}
            >
                <meshPhysicalMaterial color={props.color}/>
            </mesh>
        </group>
    );
}

useGLTF.preload("/figures/castle.gltf");