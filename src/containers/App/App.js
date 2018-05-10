import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import logo from 'logo.svg';
import './App.css';
import Scoreboard from 'containers/Scoreboard/Scoreboard';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">Welcome to React</h1>
                    </header>
                    <p className="App-intro">
                        To get started, edit <code>src/App.js</code> and save to reload.
                    </p>
                    <div className="score-board-application">
                        <Route path="/scoreboard" component={Scoreboard} />
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
