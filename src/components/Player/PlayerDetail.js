import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Row } from "react-bootstrap";

class PlayerDetail extends Component {
    render() {
        return (
            <Row>
                <div>{this.props.player.name}</div>
                <div>{this.props.player.score}</div>
                <div>{this.props.player.created}</div>
                <div>{this.props.player.updated}</div>
            </Row>
        );
    }
}

PlayerDetail.propTypes = {
    player: PropTypes.object.isRequired,
};

export default PlayerDetail;