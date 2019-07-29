import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

// class Counter extends Component {
//     constructor(props) {
//         super(props);
//
//         this.decrementClick = this.decrementClick.bind(this);
//         this.incrementClick = this.incrementClick.bind(this);
//     }
//     incrementClick() {
//         this.props.updatePlayerScore(this.props.index, 1);
//     }
//     decrementClick() {
//         this.props.updatePlayerScore(this.props.index, -1);
//     }
//     render() {
//         return (
//             <div>
//                 <Button className="counter-action decrement btn-success"
//                         disabled={this.props.score === 0}
//                         onClick={this.decrementClick}>-</Button>
//                 <span className="counter-score"> {this.props.score} </span>
//                 <Button className="counter-action increment btn-danger"
//                         onClick={this.incrementClick}>+</Button>
//             </div>
//         );
//     }
// }


const Counter = props => {
    const incrementClick = () => {
        props.updatePlayerScore(props.index, 1);
    };
    const decrementClick = () => {
        props.updatePlayerScore(props.index, -1);
    };
    return (
        <React.Fragment>
            <Button className="counter-action decrement btn-success"
                    disabled={props.score === 0}
                    onClick={decrementClick}>-</Button>
            <span className="counter-score"> {props.score} </span>
            <Button className="counter-action increment btn-danger"
                    onClick={incrementClick}>+</Button>
        </React.Fragment>
    );
};

Counter.propTypes = {
    index: PropTypes.number.isRequired,
    score: PropTypes.number.isRequired,
    updatePlayerScore: PropTypes.func.isRequired,
};

export default Counter;