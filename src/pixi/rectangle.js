import * as PIXI from 'pixi.js'
import {Graphics, PixiComponent} from '@inlet/react-pixi'
import React from "react";

export default PixiComponent('Rectangle', {
    create : props => {
        return new PIXI.Graphics()
    },
    didMount : (instance, parent) => {
        // apply custom logic on mount
    },
    willUnmount : (instance, parent) => {
        // clean up before removal
    },
    applyProps : (instance, oldProps, newProps) => {
        const {fill, x, y, width, height, click} = newProps;
        instance.clear()
        instance.beginFill(fill)
        instance.drawRect(x, y, width, height)
        instance.endFill()
        instance.interactive = true
        instance.buttonMode= true
        
        instance.click = click
    }
})
