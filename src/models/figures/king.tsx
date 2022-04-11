import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function King(props: any) {
    const group = useRef<THREE.Group>();
    const { nodes, materials } = useGLTF("/3d-chess-ts/figures/king.gltf") as any;
    return (
        <group ref={group} dispose={null} position={[props.position.x, 0, props.position.y]}>
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

useGLTF.preload("/figures/king.gltf");