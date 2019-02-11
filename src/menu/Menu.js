import React, {Component} from 'react'
import { createStore } from 'redux'



class Menu extends Component {
    constructor(){
        super()
    }
    
    render(){
        return (
            <div>
                <button type="button"> rect </button>
                <button type="button"> triangle </button>
            </div>
        )
    }
}


export default Menu
