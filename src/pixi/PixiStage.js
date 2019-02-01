import React from "react";
import {Stage} from '@inlet/react-pixi'
import {Bunny, Graphic, Rectangle, Snake} from './index'
const arr = [1,2,3];
const PixiStage = () => (
    <Stage width={800} height={800} options={{backgroundColor : 0x012b30}}>
        {arr.map((v,i,a)=> {
            return <Graphic key={i}/>
        })}
        <Rectangle x={100}
               y={100}
               width={100}
               height={100}
               fill={0xffffff}
               
               click={()=>{alert()}}
               />
        <Snake />
        <Bunny />
    </Stage>
);

export default PixiStage;
