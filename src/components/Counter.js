import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button} from 'react-bootstrap';

class Counter extends Component {
    render() {
        return (
            <div>
                <Button className="counter-action decrement">-</Button>
                <span className="counter-score"> {this.props.score} </span>
                <Button className="counter-action increment">+</Button>
            </div>
        );
    }
}

Counter.propTypes = {
    score: PropTypes.number.isRequired,
};

Counter.defaultProps = {};

export default Counter;