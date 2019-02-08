import React, {Component} from 'react';
import {Graphics} from '@inlet/react-pixi'

class Gr extends Component {
    constructor() {
        super();
        this.state = {
            x : 0,
            y : 0
        }
    }
    
    
    render() {
        const that = this;
        const onDragStart = function(event){
            if (!this.dragging) {
                this.data = event.data;
                this.alpha = 0.5;
                this.dragging = true;
                // this.scale.x *= 1.1;
                // this.scale.y *= 1.1;
                
                this.dragPoint = event.data.getLocalPosition(this.parent);
                // console.log(event.data)
                // console.log("dragPoint", this.dragPoint);
                // console.log("thisPoint", this.x, this.y);
                this.dragPoint.x -= this.x;
                this.dragPoint.y -= this.y;
            }
        },
        onDragEnd = function(){
            this.alpha = 1;
            this.dragging = false;
            // this.scale.x /= 1.1;
            // this.scale.y /= 1.1;
            // set the interaction data to null
            this.data = null;
        },
        onDragMove = function(e) {
            let width = this.graphicsData[0].shape.width,
                height = this.graphicsData[0].shape.height;
                
            if (this.dragging) {
                
                var newPosition = this.data.getLocalPosition(this.parent);
                //newPosition is coordinate of mouse pointer
                
                console.log(newPosition, this.dragPoint, this);
                this.x = newPosition.x - this.dragPoint.x;
                this.y = newPosition.y - this.dragPoint.y;
                
                
                
                that.setState({
                    x : this.x + width / 2 ,
                    y : this.y + height / 2
                }, () => {
                    that.props.getPosition.call(null, that.state)
                })
            }
            
            
        };
        
        return (
            <Graphics
                draw={g => {
                    g.clear();
                    
                    g.lineStyle(2, 0xffffff, 1)
                    g.beginFill(0xcccccc, 0.25)
                    g.drawRect(0, 0, 100, 100, 1)
                    g.endFill()
                    
                }}
                
                interactive={true}
                buttonMode={true}
                visible={true}
                
                scale={{x : 1, y : 1}}
                
                
                mousedown={onDragStart}
                mouseup={onDragEnd}
                mouseupoutside={onDragEnd}
                mousemove={onDragMove}
            
            >
            </Graphics>
        )
    }
}

export default Gr;
