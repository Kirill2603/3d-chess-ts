import React from 'react';
import {Vector3} from "three";

const boardState: Array<{id: string, pos: number[], color: string}> = [
]

for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        boardState.push({id: i.toString() + j.toString(),pos: [j,0,i], color: `${(i+j)%2 === 0 ? 'white' : 'black'}`})
    }
}

export const Board = () => {

    return (
        <>
            {
                boardState.map((item) => (
                    <mesh
                        onClick={() => {}}
                        key={item.id}
                        position={new Vector3(...item.pos)}
                        scale={[1, 1, 0.5]}
                        rotation={[Math.PI / -2, 0, 0]}>
                        <meshStandardMaterial color={item.color}/>
                        <boxGeometry />
                    </mesh>
                ))
            }

        </>
    )
}
