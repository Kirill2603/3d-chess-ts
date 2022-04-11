import React, {useState} from "react";
import {Canvas} from '@react-three/fiber'
import Knight from "./models/figures/knight";
import {OrbitControls, Environment} from "@react-three/drei";
import Castle from "./models/figures/castle";
import {Pawn} from "./models/figures/pawn";
import Queen from "./models/figures/queen";
import King from "./models/figures/king";
import {Board} from "./models/board";
import {Bishop} from "./models/figures/bishop";


type stateType =
    Array<{
        id: string
        position: { x: number, y: number }
        color: string
        name: (props: any) => JSX.Element
    }>

const state: stateType = [
    // Whites
    {id: "pawnW1", position: {x:1, y: 0}, color: "white", name: Pawn},
    {id: "pawnW2", position: {x:3, y: 1}, color: "white", name: Pawn},
    {id: "pawnW3", position: {x:1, y: 2}, color: "white", name: Pawn},
    {id: "pawnW4", position: {x:1, y: 3}, color: "white", name: Pawn},
    {id: "pawnW5", position: {x:1, y: 4}, color: "white", name: Pawn},
    {id: "pawnW6", position: {x:1, y: 5}, color: "white", name: Pawn},
    {id: "pawnW7", position: {x:1, y: 6}, color: "white", name: Pawn},
    {id: "pawnW8", position: {x:1, y: 7}, color: "white", name: Pawn},
    {id: "kingW1", position: {x:0, y: 3}, color: "white", name: King},
    {id: "queenW1", position: {x:0, y: 4}, color: "white", name: Queen},
    {id: "knightW1", position: {x:0, y: 2}, color: "white", name: Knight},
    {id: "knightW2", position: {x:0, y: 5}, color: "white", name: Knight},
    {id: "bishopW1", position: {x:0, y: 1}, color: "white", name: Bishop},
    {id: "bishopW2", position: {x:0, y: 6}, color: "white", name: Bishop},
    {id: "castleW1", position: {x:0, y: 0}, color: "white", name: Castle},
    {id: "castleW2", position: {x:0, y: 7}, color: "white", name: Castle},
    // Blacks
    {id: "pawnB1", position: {x:6, y: 0}, color: "#35363a", name: Pawn},
    {id: "pawnB2", position: {x:6, y: 1}, color: "#35363a", name: Pawn},
    {id: "pawnB3", position: {x:6, y: 2}, color: "#35363a", name: Pawn},
    {id: "pawnB4", position: {x:6, y: 3}, color: "#35363a", name: Pawn},
    {id: "pawnB5", position: {x:6, y: 4}, color: "#35363a", name: Pawn},
    {id: "pawnB6", position: {x:6, y: 5}, color: "#35363a", name: Pawn},
    {id: "pawnB7", position: {x:6, y: 6}, color: "#35363a", name: Pawn},
    {id: "pawnB8", position: {x:6, y: 7}, color: "#35363a", name: Pawn},
    {id: "kingB1", position: {x:7, y: 4}, color: "#35363a", name: King},
    {id: "queenB1", position: {x:7, y: 3}, color: "#35363a", name: Queen},
    {id: "knightB1", position: {x:7, y: 2}, color: "#35363a", name: Knight},
    {id: "knightB2", position: {x:7, y: 5}, color: "#35363a", name: Knight},
    {id: "bishopB1", position: {x:7, y: 1}, color: "#35363a", name: Bishop},
    {id: "bishopB2", position: {x:7, y: 6}, color: "#35363a", name: Bishop},
    {id: "castleB1", position: {x:7, y: 0}, color: "#35363a", name: Castle},
    {id: "castleB2", position: {x:7, y: 7}, color: "#35363a", name: Castle},
]
//     <Knight position={[0, 0, 5]} rotation-y={3.1}/>
// <Knight position={[0, 0, 2]} rotation-y={3.1}/>

export default function App() {

    return (
        <Canvas style={{width: '100%', height: '100%'}}>
            <React.Suspense fallback={null}>
                <Board/>

                {state.map(({id, position, color, name}) => {
                        const Component = name
                        return < Component key={id} position={position} color={color}/>
                    }
                )}

                <OrbitControls/>
                <Environment preset="forest" background/>
            </React.Suspense>
        </Canvas>
        // <Test />
    )
}
