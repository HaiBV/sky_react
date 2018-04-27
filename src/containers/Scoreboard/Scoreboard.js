import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Grid, Row, Col, Button} from 'react-bootstrap';
import Header from 'components/Header';
import './scoreboard.css';

class Scoreboard extends Component {
    render() {
        return (
            <div className="scoreboard">
                <Grid>
                    <Header title={this.props.title}/>
                    <Row>
                        <Col md={8} className="player-name">
                            Jim Hoskins
                        </Col>
                        <Col md={4} className="player-score">
                            <Button className="counter-action decrement">-</Button>
                            <span className="counter-score"> 31 </span>
                            <Button className="counter-action increment">+</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={8} className="player-name">
                            Andrew Chalkley
                        </Col>
                        <Col md={4} className="player-score">
                            <Button className="counter-action decrement">-</Button>
                            <span className="counter-score"> 35 </span>
                            <Button className="counter-action increment">+</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={8} className="player-name">
                            Alena Holligan
                        </Col>
                        <Col md={4} className="player-score">
                            <Button className="counter-action decrement">-</Button>
                            <span className="counter-score"> 42 </span>
                            <Button className="counter-action increment">+</Button>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

Scoreboard.propTypes = {
    title: PropTypes.string.isRequired,
};

Scoreboard.defaultProps = {
    title: "My Scoreboard",
};

export default Scoreboard;