import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Row, Col, Button} from 'react-bootstrap';
import Counter from 'components/Counter';

class Player extends Component {
    constructor(props) {
        super(props);

        this.handleSelectPlayer = this.handleSelectPlayer.bind(this);
        this.handleRemovePlayer = this.handleRemovePlayer.bind(this);
    }

    handleSelectPlayer() {
        this.props.selectPlayer(this.props.index);
    }

    handleRemovePlayer() {
        this.props.removePlayer(this.props.index);
    }

    render() {
        return (
            <Row>
                <Col md={8} className="player-name">
                    <Button className="remove-player" onClick={this.handleRemovePlayer}>X</Button>
                    <div className="select-player" onClick={this.handleSelectPlayer}>{this.props.name}</div>
                </Col>
                <Col md={4} className="player-score">
                    <Counter index={this.props.index} score={this.props.score} updatePlayerScore={this.props.updatePlayerScore}/>
                </Col>
            </Row>
        );
    }
}

Player.propTypes = {
    index: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    updatePlayerScore: PropTypes.func.isRequired,
    removePlayer: PropTypes.func.isRequired,
    selectPlayer: PropTypes.func.isRequired,
};

export default Player;