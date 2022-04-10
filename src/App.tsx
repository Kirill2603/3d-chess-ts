import React from "react";
import {Canvas} from '@react-three/fiber'
import Knight from "./models/figures/knight";
import {OrbitControls, Environment} from "@react-three/drei";
import Castle from "./models/figures/castle";
import Pawn from "./models/figures/pawn";
import Queen from "./models/figures/queen";
import King from "./models/figures/king";
import {Board} from "./models/board";
import Bishop from "./models/figures/bishop";

export default function App() {
    return (
        <Canvas style={{width: '100%', height: '100%'}} >
            <React.Suspense fallback={null}>
                <mesh >

                </mesh>

                <Board />

                <King position={[0,0,3]}/>
                <Queen position={[0,0,4]}/>


                <Knight position={[0,0,5]} rotation-y={3.1}/>
                <Knight position={[0,0,2]} rotation-y={3.1}/>


                <Bishop position={[0,0,6]} />
                <Bishop position={[0,0,1]} />

                <Castle position={[0,0,7]}/>
                <Castle position={[0,0,0]}/>

                <Pawn position={[1,0,0]}/>
                <Pawn position={[1,0,1]}/>
                <Pawn position={[1,0,2]}/>
                <Pawn position={[1,0,3]}/>
                <Pawn position={[1,0,4]}/>
                <Pawn position={[1,0,5]}/>
                <Pawn position={[1,0,6]}/>
                <Pawn position={[1,0,7]}/>


                {/*///////////*/}
                <Pawn position={[6,0,0]} color="#35363a"/>
                <Pawn position={[6,0,1]} color="#35363a"/>
                <Pawn position={[6,0,2]} color="#35363a"/>
                <Pawn position={[6,0,3]} color="#35363a"/>
                <Pawn position={[6,0,4]} color="#35363a"/>
                <Pawn position={[6,0,5]} color="#35363a"/>
                <Pawn position={[6,0,6]} color="#35363a"/>
                <Pawn position={[6,0,7]} color="#35363a"/>

                <Castle position={[7,0,7]} color="#35363a"/>
                <Castle position={[7,0,0]} color="#35363a"/>

                <Bishop position={[7,0,6]} color="#35363a"/>
                <Bishop position={[7,0,1]} color="#35363a"/>

                <Knight position={[7,0,5]} color="#35363a"/>
                <Knight position={[7,0,2]} color="#35363a"/>

                <King position={[7,0,4]} color="#35363a"/>
                <Queen position={[7,0,3]} color="#35363a"/>
                <OrbitControls/>
                <Environment preset="forest" background/>
            </React.Suspense>
        </Canvas>
        // <Test />
    )
}
