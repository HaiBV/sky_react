import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Row } from "react-bootstrap";

export default class PlayerDetail extends Component {
    static propTypes = {
        player: PropTypes.object.isRequired,
    };

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