import React, {Component} from "react";
import {Graphics, Stage} from '@inlet/react-pixi'
import {Bunny, Graphic, Rectangle, Line, Snake} from './index'

const arr = [1, 2, 3];

class PixiStage extends Component {
    
    constructor() {
        super();
        this.state = {
            lineStartX : 0,
            lineStartY : 0,
            lineEndX : 0,
            lineEndY : 0
        }
    }
    
    setStateData(state){
        this.setState({lineStartX : state.x, lineStartY : state.y})
    }
    setStateData2(state){
        this.setState({lineEndX : state.x, lineEndY : state.y})
    }
    
    lineDraw(g) {
        g.clear();
        g.beginFill(0xff3300)
        g.lineStyle(2, 0xcccccc, 1)
        
        g.moveTo(this.state.lineStartX, this.state.lineStartY);
        g.lineTo(this.state.lineEndX, this.state.lineEndY);
        g.endFill()
    }
    
    render() {
        return (
            <Stage width={800} height={800} options={{backgroundColor : 0x012b30}}>
                {/*{arr.map((v, i, a) => {*/}
                    {/*return <Graphic key={i} />*/}
                {/*})}*/}
                <Graphic getPosition={this.setStateData.bind(this)} />
                <Graphic getPosition={this.setStateData2.bind(this)} />
                
                
                {/*<Rectangle x={100}
                           y={100}
                           width={100}
                           height={100}
                           fill={0xffffff}
                
                           click={(e) => {
                               // console.log(this.refs.line)
                               this.setState({lineStartX : 50, lineStartY: 50})
                           }}
                />*/}
                
                <Line ref={'line'}
                      draw={this.lineDraw.bind(this)}
                
                      interactive={true}
                      buttonMode={true}
                
                      scale={{x : 1, y : 1}}

                      click={() => {
                          alert()
                      }} />
                {/*<Bunny />*/}
            </Stage>
        )
    }
}

export default PixiStage;
