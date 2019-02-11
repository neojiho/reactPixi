import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import PixiStage from './pixi/PixiStage'
import Menu from './menu/Menu'

import Counter from './components/Counter'
import Buttons from './components/Buttons'
import Option from './components/Option'


class App extends Component {
    render() {
        return (
            <div className="App">
                {/*<header className="App-header">*/}
                    {/*<img src={logo} className="App-logo" alt="logo" />*/}
                    {/*<p>*/}
                        {/*Edit <code>src/App.js</code> and save to reload.*/}
                    {/*</p>*/}
                    {/*<a*/}
                        {/*className="App-link"*/}
                        {/*href="https://reactjs.org"*/}
                        {/*target="_blank"*/}
                        {/*rel="noopener noreferrer"*/}
                    {/*>*/}
                        {/*Learn React*/}
                    {/*</a>*/}
                {/*</header>*/}
                {/*<Counter />*/}
                {/*<Option />*/}
                {/*<Buttons />*/}
                
                
                <p>pixi example</p>
                <Menu />
                <PixiStage />
            </div>
        );
    }
    
}

export default App;
