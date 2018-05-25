import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormGroup, FormControl, Button } from 'react-bootstrap';

class AddPlayer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.addPlayer = this.addPlayer.bind(this);
    }

    addPlayer(e) {
        e.preventDefault();
        this.props.addPlayer(this.state.name);
        this.setState({ name: "" });
    }

    handleChange(e) {
        this.setState({ name: e.target.value });
    }

    render() {
        return (
            <form onSubmit={this.addPlayer}>
                <FormGroup>
                    <FormControl
                        type="text"
                        placeholder="Enter player name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <Button type="submit">Add Player</Button>
                </FormGroup>
            </form>
        );
    }
}

AddPlayer.propTypes = {
    addPlayer: PropTypes.func.isRequired,
};

export default AddPlayer;