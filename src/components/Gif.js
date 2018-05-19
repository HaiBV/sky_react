import React, {Component} from 'react';
import {Col} from "react-bootstrap";

class Gif extends Component {
    render() {
        return (
            <Col md={4}>
                <img src={this.props.url} alt=""/>
            </Col>
        );
    }
}

export default Gif;