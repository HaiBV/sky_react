import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Row, Col} from 'react-bootstrap';
import Counter from 'components/Counter';

class Player extends Component {
    render() {
        return (
            <Row>
                <Col md={8} className="player-name">
                    <a className="remove-player" onClick={this.props.handleRemove}>X</a>
                    {this.props.name}
                </Col>
                <Col md={4} className="player-score">
                    <Counter score={this.props.score} onChange={this.props.onScoreChange}/>
                </Col>
            </Row>
        );
    }
}

Player.propTypes = {
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    onScoreChange: PropTypes.func.isRequired,
    handleRemove: PropTypes.func.isRequired,
};

Player.defaultProps = {
};

export default Player;