import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Knight(props: any) {
    const group = useRef<THREE.Group>();
    const { nodes, materials } = useGLTF("/figures/knight.gltf") as any;
    return (
        <group ref={group} {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder.geometry}
                material={nodes.Cylinder.material}
                position={[0, 0, 0.01]}
                rotation={[-Math.PI, 0.51, -Math.PI]}
            >
                <meshPhysicalMaterial color={props.color}/>
            </mesh>
        </group>
    );
}

useGLTF.preload("/figures/knight.gltf");