import React, {Component} from 'react';
import './PropertyList.scss'
import Menu from './Menu'

class PropertyList extends Component {
    constructor(){
        super();
    }

    render(){
        return (
            <div className="PropertyListWrap">
                <Menu />
                <div><span>id : </span><input type="text" value={this.props.state.id} onChange={void(0)} /></div>
                <div><span>attr1 : </span><input type="text" value={this.props.state.attr1} onChange={void(0)} /></div>
                <div><span>attr2 : </span><input type="text" value={this.props.state.attr2} onChange={void(0)} /></div>
                <div><span>attr3 : </span><input type="text" value={this.props.state.attr3} onChange={void(0)} /></div>
                <div><span>attr4 : </span><input type="text" value={this.props.state.attr4} onChange={void(0)} /></div>
            </div>
        )
    }
}

export default PropertyList
