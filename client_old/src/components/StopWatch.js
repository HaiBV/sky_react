import React, {Component} from 'react';
import {Button} from "react-bootstrap";

export default class StopWatch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            running: false,
            elapsedTime: 0,
            previousTime: 0,
        };
    }

    componentDidMount() {
        this.interval = setInterval(this.onTick.bind(this), 100);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    onTick() {
        if (this.state.running) {
            let now = Date.now();
            this.setState({
                previousTime: now,
                elapsedTime: this.state.elapsedTime + (now - this.state.previousTime),
            });
        }
    }

    handleStartStop() {
        this.setState({
            running: !this.state.running,
            previousTime: this.state.running ? this.state.previousTime : Date.now(),
        });
    }

    handleReset() {
        this.setState({
            elapsedTime: 0,
            previousTime: Date.now(),
        });
    }

    render() {
        return (
            <div className="stopwatch">
                <h4>Stopwatch</h4>
                <span className="stopwatch-time">{Math.floor(this.state.elapsedTime / 1000)}</span>
                <div>
                    <Button className="btn-info"
                            onClick={this.handleStartStop.bind(this)}>{this.state.running ? 'Stop' : 'Start'}</Button>
                    <Button className="btn-info" onClick={this.handleReset.bind(this)}>Reset</Button>
                </div>
            </div>
        );
    }
}