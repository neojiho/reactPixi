import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import PixiStage from './pixi/PixiStage'
import PropertyList from './components/propertyList/PropertyList'

import Counter from './components/Counter'
import Buttons from './components/Buttons'
import Option from './components/Option'


class App extends Component {
    constructor(){
        super();
        this.state = {
            id : '',
            attr1 : '',
            attr2 : '',
            attr3 : '',
            attr4 : ''
        }
    }
    
    propertySelect ({id, attr1, attr2, attr3, attr4}) {
        console.log("clicked")
        this.setState({id, attr1, attr2, attr3, attr4})
    }
    
    render() {
        let style = {float :'left'}
        const header = <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        </header>;
        return (
            <div className="App">
                {/*{header}*/}
                {/*<Counter />*/}
                {/*<Option />*/}
                {/*<Buttons />*/}
                
                <p>pixi example</p>
                <div>
                    <PixiStage style={style} clickFunc={this.propertySelect.bind(this)}/>
                    <PropertyList state={this.state}/>
                </div>
            </div>
        );
    }
    
}

export default App;
