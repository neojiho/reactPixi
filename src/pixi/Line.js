import React, {Component} from 'react';
import {Graphics} from '@inlet/react-pixi'

class Gr extends Component {
    constructor() {
        super()
    }
    
    onDragStart(event) {
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
    }
    
    onDragEnd() {
        this.alpha = 1;
        this.dragging = false;
        // this.scale.x /= 1.1;
        // this.scale.y /= 1.1;
        // set the interaction data to null
        this.data = null;
    }
    
    onDragMove() {
        if (this.dragging) {
            
            var newPosition = this.data.getLocalPosition(this.parent);
            
            console.log(this.x, this.y, newPosition, this.dragPoint)
            this.x = newPosition.x - this.dragPoint.x;
            this.y = newPosition.y - this.dragPoint.y;
        }
    }
    
    render() {
        return (
            <Graphics
            
                draw={this.props.draw}
                {...this.props}
                // draw={g => {
                //     g.clear();
                //     g.beginFill(0xff3300)
                //     g.lineStyle(4, 0xcccccc, 1)
                //
                //     g.moveTo(50, 50)
                //     g.lineTo(250, 50)
                //     // g.lineTo(100, 100)
                //     // g.lineTo(50, 20)
                //     g.endFill()
                //
                //
                // }}
                //
                // interactive={true}
                // buttonMode={true}
                //
                // scale={{x : 1, y : 1}}
                //
                // mousedown={this.onDragStart}
                // mouseup={this.onDragEnd}
                // mouseupoutside={this.onDragEnd}
                // mousemove={this.onDragMove}
                // click={()=>{alert()}}
            
            >
            </Graphics>
        )
    }
}

export default Gr;
