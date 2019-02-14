import React, {Component} from 'react';
import {Graphics} from '@inlet/react-pixi'

class Gr extends Component {
    constructor() {
        super();
        
        this.state = {
            x : 0,
            y : 0,
            radius : 0,
            id : '',
            attr1 : '',
            attr2 : '',
            attr3 : '',
            attr4 : ''
        }
    }
    
    componentWillMount(){
        this.setState({
            id : this.props.id,
            attr1 : this.props.attr1,
            attr2 : this.props.attr2,
            attr3 : this.props.attr3,
            attr4 : this.props.attr4
        })
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
                
                //set radius
                that.setState({radius : this.graphicsData[0].shape.radius})
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
            
            if (this.dragging) {
                
                var newPosition = this.data.getLocalPosition(this.parent);
                //newPosition is coordinate of mouse pointer
                
                console.log(newPosition, this.dragPoint);
                this.x = newPosition.x - this.dragPoint.x;
                this.y = newPosition.y - this.dragPoint.y;
                
                that.setState({
                    x : this.x,
                    y : this.y
                }, () => {
                    if (that.props.getPosition) that.props.getPosition.call(null, that.state)
                })
            }
            
            
        };
        
        
        return (
            <Graphics
                draw={g => {
                    g.clear();
                    
                    g.lineStyle(2, 0xffffff, 1);
                    g.beginFill(0x336aa5, 1); //1 은 투명도
                    g.drawCircle(0,0,50);
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
                
                touchstart={onDragStart}
                touchend={onDragEnd}
                touchendoutside={onDragEnd}
                touchmove={onDragMove}
                
                click={this.props.clickFunc.bind(null , {...that.state})}
                tap={this.props.clickFunc.bind(null , {...that.state})}
            >
            </Graphics>
        )
    }
}

export default Gr;
