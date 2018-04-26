import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import './css/bootstrap.min.css';
import './css/scoreboard.css';

class Scoreboard extends Component {
    render() {
        return (
            <div className="scoreboard">
                <Grid>
                    <Row>
                        <Col md={12}>
                            <div className="header">
                                <h2>Scoreboard</h2>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Scoreboard;