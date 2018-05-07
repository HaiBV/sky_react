import React, {Component} from 'react';
import update from 'react-addons-update';
import {Button} from "react-bootstrap";

class StopWatch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            running: false,
            elapsedTime: 0,
            previousTime: 0,
        };
    }

    componentDidMount() {
        this.interval = setInterval(this.onTick, 100);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    onTick() {
        console.log('running');
        // if (this.state.running) {
        //     let now = Date.now();
        //     this.setState({
        //         previousTime: now,
        //         elapsedTime: this.state.elapsedTime + now - this.state.previousTime,
        //     });
        // }
    }

    handleStartStop() {
        this.setState({
            running: !this.state.running
        });
    }

    handleReset() {
        this.setState(update(this.state, {
            time: {
                $set: 0,
            }
        }));
    }

    render() {
        return (
            <div className="stopwatch">
                <h2>Stopwatch</h2>
                <div className="stopwatch-time">{this.state.time}</div>
                <Button onClick={this.handleStartStop.bind(this)}>{this.state.running ? 'Stop' : 'Start'}</Button>
                <Button onClick={this.handleReset.bind(this)}>Reset</Button>
            </div>
        );
    }
}

export default StopWatch;