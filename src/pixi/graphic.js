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
                draw={g => {
                    g.clear();
                    // g.beginFill(0xff3300)
                    // g.lineStyle(4, 0xffd900, 1)
                    //
                    // g.moveTo(50, 50)
                    // g.lineTo(250, 50)
                    // g.lineTo(100, 100)
                    // g.lineTo(50, 50)
                    // g.endFill()
                    //
                    // g.lineStyle(2, 0x0000ff, 1)
                    // g.beginFill(0xff700b, 1)
                    // g.drawRect(50, 250, 120, 120)
                    
                    g.lineStyle(2, 0xffffff, 1)
                    g.beginFill(0xcccccc, 0.25)
                    g.drawRect(150, 250, 200, 100, 15)
                    g.endFill()
                    
                    // g.lineStyle(0)
                    // g.beginFill(0xffff0b, 0.5)
                    // g.drawCircle(470, 90, 60)
                    // g.endFill()
                }}
                
                interactive={true}
                buttonMode={true}
                
                scale={{x : 1, y : 1}}
                
                mousedown={this.onDragStart}
                mouseup={this.onDragEnd}
                mouseupoutside={this.onDragEnd}
                mousemove={this.onDragMove}
            
            >
            </Graphics>
        )
    }
}

export default Gr;
