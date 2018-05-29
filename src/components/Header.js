import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Row, Col} from 'react-bootstrap';
import StopWatch from "./StopWatch";

class Header extends Component {
    render() {
        const totalPlayers = this.props.players.length;
        const totalScore = this.props.players.reduce((_total, _player) => _total + _player.score, 0);
        return (
            <Row className='header'>
                <Col md={3}>
                    <table>
                        <tbody>
                        <tr>
                            <td className="title">Players:</td>
                            <td className="value">{totalPlayers}</td>
                        </tr>
                        <tr>
                            <td className="title">Total Score:</td>
                            <td className="value">{totalScore}</td>
                        </tr>
                        </tbody>
                    </table>
                </Col>
                <Col md={5}>
                    <div className="header">
                        <h2>{this.props.title}</h2>
                    </div>
                </Col>
                <Col md={4}>
                    <StopWatch/>
                </Col>
            </Row>
        );
    }
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    players: PropTypes.array.isRequired,
};

Header.defaultProps = {
    title: "My Scoreboard",
};

export default Header;