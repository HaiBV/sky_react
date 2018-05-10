import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button} from 'react-bootstrap';

class Counter extends Component {
    render() {
        return (
            <div>
                <Button className="counter-action decrement btn-success" onClick={function () {this.props.onChange(-1)}.bind(this)}>-</Button>
                <span className="counter-score"> {this.props.score} </span>
                <Button className="counter-action increment btn-danger" onClick={function () {this.props.onChange(1)}.bind(this)}>+</Button>
            </div>
        );
    }
}

Counter.propTypes = {
    score: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
};

Counter.defaultProps = {};

export default Counter;