import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Row, Col, Button} from 'react-bootstrap';
import Counter from 'components/Counter';

export default class Player extends Component {
    static propTypes = {
        index: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        score: PropTypes.number.isRequired,
        updatePlayerScore: PropTypes.func.isRequired,
        removePlayer: PropTypes.func.isRequired,
    };

    render() {
        return (
            <Row>
                <Col md={8} xs={8} className="player-name">
                    <Button className="remove-player" onClick={() => this.props.removePlayer(this.props.index)}>X</Button>
                    {this.props.name}
                </Col>
                <Col md={4} xs={4} className="player-score">
                    <Counter index={this.props.index} score={this.props.score} updatePlayerScore={this.props.updatePlayerScore}/>
                </Col>
            </Row>
        );
    }
}