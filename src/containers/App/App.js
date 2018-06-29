import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import FrontPage from 'components/FrontPage';
import About from 'components/About';
import Teachers from 'components/Teachers';
import Courses from 'containers/Courses/Courses';
import Navigation from 'components/Navigation';
import NotFound from 'components/NotFound';

import Scoreboard from 'containers/Scoreboard/Scoreboard';

import Featured from "components/Featured";
import GifSearch from "components/Gif/GifSearch";

// eslint-disable-next-line import/extensions
import logo from 'logo.svg';
import './App.css';

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
                    <div className="application container">
                        <Navigation/>
                        <Switch>
                            <Route exact path="/" component={FrontPage}/>
                            <Route path="/about" render={() => <About title="About lorem"/>}/>
                            <Route exact path="/teachers" component={Teachers}/>
                            <Route path="/teachers/:topic/:teacher" component={Featured}/>
                            <Route path="/courses" component={Courses}/>
                            <Route path="/scoreboard" component={Scoreboard}/>
                            <Route path="/gif-search" component={GifSearch}/>
                            <Route component={NotFound}/>
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
