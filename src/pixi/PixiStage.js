import React from "react";
import {Stage} from '@inlet/react-pixi'
import {Bunny, Graphic} from './index'

const PixiStage = () => (
    <Stage width={800} height={800} options={{backgroundColor : 0x012b30}}>
        <Graphic />
        <Bunny />
    </Stage>
);

export default PixiStage;
