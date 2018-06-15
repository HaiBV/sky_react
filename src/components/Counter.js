import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button} from 'react-bootstrap';

class Counter extends Component {
    render() {
        return (
            <div>
                <Button className="counter-action decrement btn-success" onClick={this.props.updatePlayerScore(this.props.index, -1)}>-</Button>
                <span className="counter-score"> {this.props.score} </span>
                <Button className="counter-action increment btn-danger" onClick={this.props.updatePlayerScore(this.props.index, 1)}>+</Button>
            </div>
        );
    }
}

Counter.propTypes = {
    index: PropTypes.number.isRequired,
    score: PropTypes.number.isRequired,
    updatePlayerScore: PropTypes.func.isRequired,
};

export default Counter;