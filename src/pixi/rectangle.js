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
        const onDragStart = (event) => {
            if (!this.dragging) {
                this.data = event.data;
                this.alpha = 0.5;
                this.dragging = true;
                // this.scale.x *= 1.1;
                // this.scale.y *= 1.1;
                
                this.dragPoint = event.data.getLocalPosition(this.parent);
                console.log(event.data)
                console.log("dragPoint", this.dragPoint);
                console.log("thisPoint", this.x, this.y);
                this.dragPoint.x -= this.x;
                this.dragPoint.y -= this.y;
            }
        },
        onDragEnd = () => {
            this.alpha = 1;
            this.dragging = false;
            // this.scale.x /= 1.1;
            // this.scale.y /= 1.1;
            // set the interaction data to null
            this.data = null;
        },
        onDragMove = () => {
            if (this.dragging) {
                
                var newPosition = this.data.getLocalPosition(this.parent);
                
                console.log(this.x, this.y, newPosition, this.dragPoint)
                this.x = newPosition.x - this.dragPoint.x;
                this.y = newPosition.y - this.dragPoint.y;
            }
        };
        instance.clear()
        instance.beginFill(fill)
        instance.drawRect(x, y, width, height)
        instance.endFill()
        instance.interactive = true
        instance.buttonMode= true
        
        
        // instance.mousedown={onDragStart}
        // instance.mouseup={onDragEnd}
        // instance.mouseupoutside={onDragEnd}
        // instance.mousemove={onDragMove}
        instance.click = click
    }
})
