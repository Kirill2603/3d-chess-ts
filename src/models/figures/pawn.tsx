import * as THREE from "three";
import React, {useEffect, useRef, useState} from "react";
import {useGLTF} from "@react-three/drei";

export function Pawn(props: any) {

    const group = useRef<THREE.Group>();

    const {nodes, materials} = useGLTF("/figures/pawn.gltf") as any;

    const [hover, setHover] = useState(false)

    const [selected, setSelected] = useState(false)

    const onPointerOver = () => {
        setHover(true)
    }
    const onPointerOut = () => {
        setHover(false)
    }
    const onSelect = () => {
        setSelected(!selected)
    }

    const [moves, setMoves] = useState<any>([{x: props.position.x, y: props.position.y}])

    useEffect(() => {
        if (props.position.x === 1) {
            setMoves([...moves, {x: props.position.x + 1, y: props.position.y}, {x: props.position.x + 2, y: props.position.y}])
        } else {
            setMoves([...moves, {x: props.position.x + 1, y: props.position.y}])
        }
    }, [props.position])

    return (
        <>
            <group ref={group} dispose={null} position={[props.position.x, 0, props.position.y]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder.geometry}
                    material={nodes.Cylinder.material}
                    onPointerOver={onPointerOver}
                    onPointerOut={onPointerOut}
                    onClick={onSelect}
                >
                    <meshStandardMaterial color={!hover ? props.color : 'orange'}/>
                </mesh>

            </group>
            {
                !selected
                    ?
                    null
                    :
                    moves.map((move: any, index: any) => (
                        <mesh position={[move.x, .251, move.y]} key={move.x.toString() + move.y.toString()}>
                            <boxGeometry args={[1, .00001, 1]}/>
                            <meshStandardMaterial color='blue' opacity={0.5} transparent/>
                        </mesh>
                    ))
            }
        </>
    );
}

useGLTF.preload("figures//pawn.gltf");
