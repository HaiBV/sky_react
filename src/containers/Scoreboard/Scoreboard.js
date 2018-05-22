import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import update from 'react-addons-update';
import { Grid } from 'react-bootstrap';

import playerService from 'services/player.service';
import * as PlayerActionCreators from 'actions/player';

import Header from 'components/Header';
import AddPlayer from 'components/AddPlayer';
import Player from 'containers/Player/Player';

import './scoreboard.css';

class Scoreboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            players: playerService.getPlayers()
        };
    }

    static propTypes = {
        title: PropTypes.string.isRequired,
        players: PropTypes.array.isRequired,
    };

    static defaultProps = {
        title: "My Scoreboard",
    };

    // onScoreChange(index, delta) {
    //     this.setState(update(this.state, {
    //         players: {
    //             [index] : {
    //                 score: {
    //                     $set: this.state.players[index].score + delta,
    //                 }
    //             }
    //         }
    //     }));
    // }
    //
    // handleAddPlayer(name) {
    //     this.setState(update(this.state, {
    //         players: {
    //             $push: [{
    //                 name: name,
    //                 score: 0,
    //                 id: this.state.players.length + 1,
    //             }],
    //         }
    //     }));
    // }
    //
    // handleRemovePlayer(index) {
    //     this.setState(update(this.state, {
    //         players: {
    //             $splice: [[index, 1]],
    //         }
    //     }));
    // }

    render() {
        const { dispatch, players } = this.props;

        const addPlayer = bindActionCreators(PlayerActionCreators.addPlayer, dispatch);
        const removePlayer = bindActionCreators(PlayerActionCreators.removePlayer, dispatch);
        const updatePlayerScore = bindActionCreators(PlayerActionCreators.updatePlayerScore, dispatch);

        return (
            <div className="scoreboard">
                <Grid fluid={true}>
                    <Header title={this.props.title} players={players}/>
                    <div className="players">
                        {players.map((player, index) => (
                            <Player
                                index={index}
                                name={player.name}
                                score={player.score}
                                key={player.name}
                                updatePlayerScore={updatePlayerScore}
                                removePlayer={removePlayer}
                            />
                        ))}
                    </div>
                    <div className="add-player">
                        <AddPlayer addPlayer={addPlayer}/>
                    </div>
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = state => (
    {
        players: state.players
    }
);

export default connect(mapStateToProps)(Scoreboard);