import React, {Component} from "react";
import * as PIXI from 'pixi.js'
import {Stage, Container, AppConsumer, Rope, Graphics} from '@inlet/react-pixi'

const img = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/snake.png'

class Snake extends Component {
    
    constructor(){
        super()
        this.count = 0
        this.state = {
            ropeLength : 45,
            points : [],
            showSpine : true
        }
    }
    
    
    componentDidMount() {
        // build rope
        const points = []
        
        for (var i = 0; i < 25; i++) {
            points.push(new PIXI.Point(i * this.state.ropeLength, 0))
        }
        
        this.setState({points})
        // this.props.app.ticker.add(this.tick)
    }
    
    componentWillUnmount() {
        this.props.app.ticker.remove(this.tick)
    }
    
    tick = (delta) => {
        this.count += 0.1 * delta
        
        const points = this.state.points
        
        for (var i = 0; i < points.length; i++) {
            points[i].y = Math.sin((i * 0.5) + this.count) * 30
            points[i].x = i * this.state.ropeLength + Math.cos((i * 0.3) + this.count) * 20
        }
        
        this.setState({points})
    }
    
    toggleSpine = () => {
        this.setState(({showSpine}) => ({showSpine : !showSpine}))
    }
    
    render() {
        return (
            <Container x={50} y={300} scale={[0.6, 0.6]} interactive={true} pointerdown={this.toggleSpine}>
                <Rope image={img} points={this.state.points} />
                
                {this.state.showSpine && (
                    <Graphics draw={g => {
                        const {points} = this.state
                        
                        g.clear()
                        
                        const startX = points[0] ? points[0].x : 0
                        const startY = points[0] ? points[0].y : 0
                        
                        g.lineStyle(2, 0xffc2c2)
                        g.moveTo(startX, startY)
                        
                        for (var i = 1; i < points.length; i++) {
                            g.lineTo(points[i].x, points[i].y)
                        }
                        
                        for (var i = 1; i < points.length; i++) {
                            g.beginFill(0xff0022)
                            g.drawCircle(points[i].x, points[i].y, 10)
                            g.endFill()
                        }
                    }} />
                )}
            
            </Container>
        )
    }
}
export default Snake

// const App = () => (
//     <Stage width={800} height={600} options={{backgroundColor : 0xeef1f5}}>
//         <AppConsumer>
//             {app => <Snake app={app} />}
//         </AppConsumer>
//     </Stage>
// )
//
// ReactDOM.render(<App />, document.body)
