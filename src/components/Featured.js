import React, { Component } from 'react';

class Featured extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.match.params.teacher}</h2>
                <p>Introducing <strong>{this.props.match.params.teacher}</strong>, a teacher who loves teaching courses about <strong>{this.props.match.params.topic}!</strong></p>
            </div>
        );
    }
}

export default Featured;