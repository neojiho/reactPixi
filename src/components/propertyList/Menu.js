import React, {Component} from 'react'
import { createStore } from 'redux'



class Menu extends Component {
    constructor(){
        super()
    }
    
    render(){
        return (
            <div>
                <button type="button" onClick={void(0)}> rectangle </button>
                <button type="button" onClick={void(0)}> triangle </button>
                <button type="button" onClick={void(0)}> circle </button>
            </div>
        )
    }
}


export default Menu
