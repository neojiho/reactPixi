import React, {Component} from "react";
import './PixiStage.scss'
import {Stage} from '@inlet/react-pixi'
import {Bunny, Rectangle, Triangle, Circle, Line, Snake} from './index'

class PixiStage extends Component {
    
    constructor() {
        super();
        this.state = {
            RectangleList : ['r1', 'r2', 'r3'],
            TriangleList : ['tr1'],
            CircleList : ['c1'],
            lineStartX : 0,
            lineStartY : 0,
            lineEndX : 0,
            lineEndY : 0
        }
    }
    
    setStateData(state){
        console.log(state)
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
            <Stage className={'PixiStageWrap'} width={800} height={800} options={{backgroundColor : 0x012b30}}>
                
                
                {this.state.RectangleList.map((v, i)=>{
                    return <Rectangle id={`${v}_id`} attr1={`${v}_attr1`} attr2={`${v}_attr2`} attr3={`${v}_attr3`} attr4={`${v}_attr4`}
                           getPosition={this.setStateData.bind(this)}
                           clickFunc={this.props.clickFunc}
                           key={`${v}_key`}
                    />
                })}
                
                {this.state.TriangleList.map((v, i)=>{
                    return <Triangle id={`${v}_id`} attr1={`${v}_attr1`} attr2={`${v}_attr2`} attr3={`${v}_attr3`} attr4={`${v}_attr4`}
                           getPosition={this.setStateData.bind(this)}
                           clickFunc={this.props.clickFunc}
                           key={`${v}_key`}
                    />
                })}
                
                {this.state.CircleList.map((v, i)=>{
                    return <Circle id={`${v}_id`} attr1={`${v}_attr1`} attr2={`${v}_attr2`} attr3={`${v}_attr3`} attr4={`${v}_attr4`}
                           getPosition={this.setStateData.bind(this)}
                           clickFunc={this.props.clickFunc}
                           key={`${v}_key`}
                    />
                })}
                
                
                
                {/*<Rectangle id={"rect1"} attr1={"rect1_a1"} attr2={"rect1_a2"} attr3={'rect1_a3'} attr4={'rect1_a4'}*/}
                    {/*getPosition={this.setStateData.bind(this)}*/}
                    {/*clickFunc={this.props.clickFunc}*/}
                {/*/>*/}
                {/*<Rectangle id={"rect2"} attr1={"rect2_a1"} attr2={"rect2_a2"} attr3={'rect2_a3'} attr4={'rect2_a4'}*/}
                    {/*getPosition={this.setStateData2.bind(this)}*/}
                    {/*clickFunc={this.props.clickFunc}*/}
                {/*/>*/}
                
                
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
